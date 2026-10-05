// 短文19件の事実誤り(都道府県・タイトル)を楽天APIの実データで修正する。
// 定型の水増し文は入れず、その宿固有の項目だけで本文を組む。
const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const DIR = path.join(__dirname, 'src', 'data', 'posts');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const AREA = {
  北海道: '北海道', 青森県: '東北', 岩手県: '東北', 宮城県: '東北', 秋田県: '東北', 山形県: '東北', 福島県: '東北',
  茨城県: '関東', 栃木県: '関東', 群馬県: '関東', 埼玉県: '関東', 千葉県: '関東', 東京都: '関東', 神奈川県: '関東',
  新潟県: '甲信越・北陸', 富山県: '甲信越・北陸', 石川県: '甲信越・北陸', 福井県: '甲信越・北陸', 山梨県: '甲信越・北陸', 長野県: '甲信越・北陸',
  岐阜県: '東海', 静岡県: '東海', 愛知県: '東海', 三重県: '東海',
  滋賀県: '近畿', 京都府: '近畿', 大阪府: '近畿', 兵庫県: '近畿', 奈良県: '近畿', 和歌山県: '近畿',
  鳥取県: '中国', 島根県: '中国', 岡山県: '中国', 広島県: '中国', 山口県: '中国',
  徳島県: '四国', 香川県: '四国', 愛媛県: '四国', 高知県: '四国',
  福岡県: '九州・沖縄', 佐賀県: '九州・沖縄', 長崎県: '九州・沖縄', 熊本県: '九州・沖縄', 大分県: '九州・沖縄', 宮崎県: '九州・沖縄', 鹿児島県: '九州・沖縄', 沖縄県: '九州・沖縄',
};
const TARGETS = {
  10893: '塩原温泉 割烹旅館 湯の花荘', 110: 'リーガロイヤルホテル新居浜', 12599: '湯の山温泉 旅館寿亭', 13550: '湯の山温泉 三峯園',
  146832: '久美浜温泉 湯元館', 153205: 'ゲストハウス縁 えにし', 179147: 'レフ京都八条口', 27871: '湯野温泉 芳山園',
  397: 'チサンホテル郡山', 40210: 'ホテル リッチガーデン', 500: '薬湯風呂 ホテルグランテラス帯広', 54096: '萩小町',
  635: 'ホテルグレイスリー札幌', 72035: '伊東園ホテル塩原', 80726: 'リッチモンドホテル青森', 84819: '養老渓谷温泉郷 川の家',
  8706: 'ホテル いこい 奈良', 8721: 'ホテルリビエラししくい', 8940: 'シルクイン鹿児島',
};
const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const norm = (s) => String(s || '').replace(/[\s　（）()＜＞<>｜|]/g, '');

async function main() {
  for (const [id, kw] of Object.entries(TARGETS)) {
    const file = path.join(DIR, `${id}.json`);
    const post = JSON.parse(fs.readFileSync(file, 'utf8'));
    const hits = await searchRakutenHotels(kw, 5);
    // 元記事の宿と同じものだけを採用（別館・別ホテルへのすり替えを防ぐ）
    const h = (hits || []).find((x) => norm(x.hotelName) === norm(post.hotel_name))
      || (hits || []).find((x) => norm(post.hotel_name).includes(norm(x.hotelName)) || norm(x.hotelName).includes(norm(post.hotel_name)));
    if (!h) { console.log(`SKIP ${id}: 一致する宿なし (${post.hotel_name})`); await sleep(1100); continue; }

    const pref = h.address1 || post.prefecture;
    const rows = [
      ['所在地', `${h.address1}${h.address2}`],
      ['アクセス', h.access],
      ['最寄り駅', h.nearestStation],
      ['駐車場', h.parkingInformation],
      ['楽天トラベルの評価', h.reviewAverage ? `${h.reviewAverage}（口コミ${h.reviewCount}件）` : ''],
      ['最安料金の目安', h.hotelMinCharge ? `¥${Number(h.hotelMinCharge).toLocaleString()}〜（時期・プランで変動）` : ''],
    ].filter(([, v]) => v);

    let html = `<h2>${esc(h.hotelName)}の基本情報</h2>\n`;
    if (h.hotelSpecial) html += `<p>${esc(h.hotelSpecial)}</p>\n`;
    html += `<table>\n${rows.map(([k, v]) => `<tr><th>${k}</th><td>${esc(v)}</td></tr>`).join('\n')}\n</table>\n`;
    if (h.userReview) html += `<h2>宿泊者の声</h2>\n<blockquote>${esc(h.userReview)}</blockquote>\n`;
    html += `<p>料金・空室は日々変わるため、予約前に楽天トラベルの最新情報を確認してください。</p>\n`;
    html += `<p><a href='${h.affiliateUrl}' target='_blank' rel='noopener noreferrer sponsored'>楽天トラベルで${esc(h.hotelName)}の空室を見る</a></p>`;

    Object.assign(post, {
      title: `${h.hotelName}（${pref}）の基本情報・アクセス・料金の目安`,
      description: `${pref}${h.address2 || ''}の「${h.hotelName}」。${(h.hotelSpecial || '').slice(0, 60)}`.slice(0, 120),
      review: html,
      prefecture: pref,
      area: AREA[pref] || post.area,
      price: h.hotelMinCharge || post.price,
      rating: h.reviewAverage || post.rating,
      affiliate_url: h.affiliateUrl,
      image: h.hotelImageUrl || post.image,
      parking_info: h.parkingInformation || post.parking_info,
    });
    fs.writeFileSync(file, JSON.stringify(post, null, 2), 'utf8');
    console.log(`OK ${id}: ${h.hotelName} / ${pref}`);
    await sleep(1100);
  }
}
main();
