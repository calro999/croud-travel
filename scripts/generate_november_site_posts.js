const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('../rakuten_api_helper');

const sleep = ms => new Promise(r => setTimeout(r, ms));

const NOVEMBER_SITE_ARTICLES = [
  {
    id: 'autumn-november-special-events-hotels-guide',
    slug: 'autumn-november-special-events-hotels-guide',
    title: '【2026年11月最新】全国紅葉ライトアップ＆巨大イルミ攻略｜富士河口湖・京都東山・香嵐渓・なばなの里特選宿5選',
    hotel_name: '11月全国紅葉ライトアップ＆イルミネーション特選ホテル',
    prefecture: '全国',
    area: '山梨・京都・愛知・三重・長崎',
    categories: ['11月イベント', '紅葉ライトアップ', 'イルミネーション', '失敗しない宿選び', '楽天トラベル厳選'],
    searchKeywords: [
      '河口湖 もみじ回廊 露天風呂',
      'スーパーホテル京都 四条河原町',
      'せせらぎの宿 木もれ日 豊田',
      '三交イン桑名駅前',
      'ホテルオークラJRハウステンボス'
    ],
    introHighlights: '11月は日本列島が鮮烈な紅葉に染まり、各地で夜間特別拝観やライトアップ、冬先駆けの本格イルミネーションが開幕する旅行のハイシーズンです。梨川沿いのもみじ回廊が燃える「富士河口湖紅葉まつり」、漆黒の夜空に青い一筋の光が放たれる「京都・清水寺夜間特別拝観」、4,000本のもみじが巴川を染める「香嵐渓もみじまつり」、国内最大級の光のトンネルが輝く「なばなの里」、1,300万球が街を包む「ハウステンボス光の街」。楽天トラベル公式APIから取得した最新の宿泊データとともに、混雑を賢く避けて夜間イベントを満喫できる直近厳選宿を徹底解説します。',
    modelCourseSnippet: '【1泊2日モデルルート】初日は15:00前に会場至近または駅近の宿にチェックインして車を預け、夕暮れ16:45のマジックアワーに合わせてライトアップ会場へ。夜は温泉で冷えた身体を温め、翌朝は観光客が押し寄せる前の早朝散歩で静寂の絶景を独占する黄金スケジュール。'
  },
  {
    id: 'autumn-november-balloon-fireworks-crab-guide',
    slug: 'autumn-november-balloon-fireworks-crab-guide',
    title: '【2026年11月限定イベント】佐賀バルーンフェスタ・長野えびす講煙火大会・11月6日城崎カニ解禁特選宿5選',
    hotel_name: '11月限定イベント特選宿（バルーン・花火・松葉ガニ）',
    prefecture: '佐賀県・長野県・兵庫県',
    area: '佐賀・長野・城崎温泉',
    categories: ['11月限定', '佐賀バルーン', 'えびす講花火', '松葉ガニ解禁', '城崎温泉', '秋旅行'],
    searchKeywords: [
      'ホテルルートイン佐賀駅前',
      'アパホテル 佐賀駅南口',
      '裾花峡温泉 うるおい館',
      '城崎温泉 西村屋ホテル招月庭',
      '城崎温泉 あさぎり荘'
    ],
    introHighlights: '11月の日程限定で開催される全国屈指のビッグイベント。朝靄の嘉瀬川河川敷を100機近い熱気球が一斉に飛び立つアジア最大級の「佐賀インターナショナルバルーンフェスタ」、冬の澄んだ夜空に尺玉10号玉と音楽スターマインが炸裂する明治以来の名門「長野えびす講煙火大会」、そして11月6日に一斉解禁を迎える日本海の冬の王様「松葉ガニ」初競り。楽天トラベル公式APIから、早朝移動や夜間防寒に直結する高評価宿を厳選ガイドします。',
    modelCourseSnippet: '【佐賀バルーン＆城崎カニ攻略】佐賀バルーンは朝6:15のJR臨時駅「バルーンさが駅」直行列車で朝の一斉離陸を鑑賞。城崎温泉では夕刻の外湯めぐりを楽しみ、夕食には11月6日解禁直後のタグ付き本生ズワイガニのフルコースを堪能する極上プラン。'
  },
  {
    id: 'autumn-november-kanazawa-yukitsuri-kobako-guide',
    slug: 'autumn-november-kanazawa-yukitsuri-kobako-guide',
    title: '【2026年11月の金沢】兼六園雪吊り開幕＆金沢城ライトアップ・11月6日解禁「香箱ガニ」美食特選宿5選',
    hotel_name: '金沢 兼六園雪吊り＆香箱ガニ特選名宿',
    prefecture: '石川県',
    area: '金沢・兼六園・近江町市場',
    categories: ['11月限定', '金沢旅行', '兼六園雪吊り', '香箱ガニ', '近江町市場', '天然温泉'],
    searchKeywords: [
      '金沢白鳥路 ホテル山楽',
      'THE HOTEL SANRAKU KANAZAWA',
      '御宿 野乃金沢',
      'スーパーホテルPremier金沢駅東口',
      'ホテルルートイン金沢駅前'
    ],
    introHighlights: '北陸・金沢が一年の中で最も風情を増す11月。11月1日から日本三名園・兼六園で始まる冬の風物詩「雪吊り」作業、週末の夜を黄金色に染め上げる「金沢城・兼六園 四季物語 秋の段ライトアップ」、そして11月6日に一斉解禁を迎えるわずか7週間限定の宝石「香箱ガニ（こうばこがに）」。近江町市場徒歩1分や兼六園徒歩5分に位置する楽天トラベル高評価宿とともに、混雑知らずの金沢攻略法を徹底解説します。',
    modelCourseSnippet: '【金沢1泊2日モデルコース】初日は兼六園の早朝無料開放（6:00〜7:45）で庭師の雪吊り作業を静寂の中で見学。昼は近江町市場で解禁されたばかりの香箱ガニ丼を味わい、夜は金沢城公園ライトアップへ。夕食は金沢おでん名物の「カニ面」に舌鼓。'
  },
  {
    id: 'autumn-november-traditional-festivals-wine-guide',
    slug: 'autumn-november-traditional-festivals-wine-guide',
    title: '【2026年11月の大祭典】浅草酉の市・ユネスコ唐津くんち・山梨ヌーボー解禁ワイン特選宿5選',
    hotel_name: '11月伝統大祭＆新酒ワイン解禁特選宿',
    prefecture: '東京都・佐賀県・山梨県',
    area: '浅草・唐津・石和勝沼',
    categories: ['11月イベント', '酉の市', '唐津くんち', '山梨ヌーボー', '伝統行事', '秋旅行'],
    searchKeywords: [
      'リッチモンドホテルプレミア浅草',
      '唐津第一ホテル',
      '石和温泉 ホテル八田',
      'ホテル美やま 秩父',
      '柴原温泉 柳屋 秩父'
    ],
    introHighlights: '11月の夜を熱狂で包む日本の伝統行事と秋の実り。午前0時の開帳とともに商売繁盛の手締めが響き渡る浅草鷲神社「酉の市」、漆と金箔の巨大曳山14台が旧城下町を疾走するユネスコ無形文化遺産「唐津くんち」、そして11月3日に一斉解禁を迎える日本ワインの新酒「山梨ヌーボー（甲州・マスカットベーリーA）」。開催日が特定日に限られるため宿の立地が勝負を分ける、楽天トラベル厳選宿をご紹介します。',
    modelCourseSnippet: '【深夜・早朝の酉の市参拝＆新酒ワイン旅】浅草酉の市は夕方の数千人行列を避け、徒歩圏ホテルから深夜1時または早朝7時に参拝。山梨勝沼ではJR中央線利用でワイナリー巡りの新酒試飲を楽しみ、石和温泉の展望ワイン風呂で癒やされる贅沢ルート。'
  },
  {
    id: 'autumn-november-shirahama-kue-onsen-guide',
    slug: 'autumn-november-shirahama-kue-onsen-guide',
    title: '【11月解禁！南紀白浜クエ旅】冬の味覚の王様「紀州本クエ」と円月島の夕景美！源泉かけ流し温泉旅館5選（2026年秋）',
    hotel_name: '南紀白浜 紀州本クエ解禁＆名湯特選宿5選',
    prefecture: '和歌山県',
    area: '南紀白浜・白良浜',
    categories: ['11月解禁', '紀州本クエ', '白浜温泉', '円月島夕日', '源泉掛け流し', '冬味覚先取り'],
    searchKeywords: [
      '白浜温泉 湯処むろべ',
      '白浜温泉 ホテル三楽荘',
      '白浜温泉 柳屋',
      '白浜温泉 ホテル川久',
      '白浜温泉 むさし'
    ],
    introHighlights: '「クエを食ったら他の魚は食えん」と称される幻の超高級魚「本クエ」。水深数十メートルの岩礁で育つ天然本クエが厳しい水温低下とともに最上質の脂を蓄え、本格的な水揚げシーズンを迎えるのが11月です。静寂が戻った白良浜、円月島の海蝕洞に夕日が沈む幻想的な夕景、万葉の昔から続く源泉掛け流しの名湯。楽天トラベル公式APIから、本クエフルコース（薄造り・唐揚げ・クエ鍋・濃厚雑炊）を堪能できる高評価名宿を厳選ガイドします。',
    modelCourseSnippet: '【白浜本クエ美食1泊2日】羽田から南紀白浜空港へわずか75分で直行。午後は円月島で16:45の夕日を鑑賞し、日本最古の野天風呂「崎の湯」へ。夜は宿で本クエ鍋フルコースに舌鼓。翌日はとれとれ市場で朝獲れ鮮魚と紀州梅干しを買い込んで帰路へ。'
  }
];

async function generateSiteArticles() {
  console.log('=== Starting Site Articles Generation for November Events ===');
  const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');

  for (const cfg of NOVEMBER_SITE_ARTICLES) {
    console.log(`\nProcessing: ${cfg.title}`);
    const fetchedHotels = [];

    for (const kw of cfg.searchKeywords) {
      try {
        console.log(`  Searching Rakuten: ${kw}`);
        const res = await searchRakutenHotels(kw, 1);
        if (res && res.length > 0) {
          fetchedHotels.push(res[0]);
        }
      } catch (err) {
        console.warn(`  Failed for ${kw}:`, err.message);
      }
      await sleep(1000);
    }

    if (fetchedHotels.length === 0) {
      console.warn(`  No hotels found for ${cfg.id}, skipping.`);
      continue;
    }

    const comparisonTableHtml = `
<div class="comparison-table-wrapper" style="overflow-x: auto; margin: 30px 0; border: 1px solid #e2e8f0; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
  <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
    <thead>
      <tr style="background: #0f766e; color: #ffffff;">
        <th style="padding: 12px 16px; border-bottom: 2px solid #0d9488;">宿名</th>
        <th style="padding: 12px 16px; border-bottom: 2px solid #0d9488; text-align: center;">楽天評価</th>
        <th style="padding: 12px 16px; border-bottom: 2px solid #0d9488; text-align: right;">1泊目安</th>
        <th style="padding: 12px 16px; border-bottom: 2px solid #0d9488;">特徴・おすすめポイント</th>
      </tr>
    </thead>
    <tbody>
      ${fetchedHotels.map((h, i) => `
      <tr style="background: ${i % 2 === 0 ? '#ffffff' : '#f8fafc'}; border-bottom: 1px solid #e2e8f0;">
        <td style="padding: 14px 16px; font-weight: bold; color: #1e293b;">
          <a href="${h.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" style="color: #0d9488; text-decoration: none;">
            ${h.hotelName}
          </a>
        </td>
        <td style="padding: 14px 16px; text-align: center; color: #f59e0b; font-weight: bold;">
          ★${h.reviewAverage || '4.0'}
        </td>
        <td style="padding: 14px 16px; text-align: right; font-weight: bold; color: #0f172a;">
          ¥${Number(h.hotelMinCharge || 8000).toLocaleString()}〜
        </td>
        <td style="padding: 14px 16px; font-size: 13px; color: #475569;">
          ${(h.hotelSpecial || h.userReview || '充実した温泉と絶好のロケーション').slice(0, 75)}...
        </td>
      </tr>
      `).join('')}
    </tbody>
  </table>
</div>`;

    const hotelDetailsHtml = fetchedHotels.map((h, idx) => `
<div class="hotel-feature-card" style="border: 1px solid #cbd5e1; border-radius: 16px; overflow: hidden; margin-bottom: 40px; background: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
  <div style="background: linear-gradient(135deg, #0d9488, #0f766e); color: #ffffff; padding: 16px 20px;">
    <span style="background: #f59e0b; color: #0f172a; padding: 3px 10px; border-radius: 9999px; font-size: 12px; font-weight: 900; margin-right: 8px;">第${idx + 1}位</span>
    <h3 style="display: inline; font-size: 18px; font-weight: bold; margin: 0;">${h.hotelName}</h3>
  </div>
  <div style="padding: 24px;">
    <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-bottom: 20px;">
      <div style="flex: 1 1 280px; min-width: 260px;">
        <img src="${h.hotelImageUrl || h.roomImageUrl || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800'}" alt="${h.hotelName}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 12px;" />
      </div>
      <div style="flex: 2 1 320px; font-size: 14px; line-height: 1.8; color: #334155;">
        <p style="margin-top: 0;"><strong>【所在地】</strong> ${h.address1 || ''}${h.address2 || ''}</p>
        <p><strong>【アクセス】</strong> ${h.access || '最寄り駅より好アクセス'}</p>
        <p><strong>【楽天評価】</strong> <span style="color: #f59e0b; font-size: 16px; font-weight: bold;">★${h.reviewAverage || '4.0'}</span>（クチコミ ${h.reviewCount || '多数'}件）</p>
        <p><strong>【宿泊料金目安】</strong> 1名あたり <span style="color: #dc2626; font-size: 18px; font-weight: bold;">¥${Number(h.hotelMinCharge || 8000).toLocaleString()}〜</span></p>
        <p style="background: #f1f5f9; padding: 12px; border-radius: 8px; margin-bottom: 0;"><strong>💡 編集部イチオシ：</strong> ${h.hotelSpecial || 'イベント会場へのアクセス抜群、旅の疲れを癒やす上質な温泉と旬の会席料理が魅力です。'}</p>
      </div>
    </div>
    ${h.userReview ? `
    <div style="background: #f8fafc; border-left: 4px solid #0d9488; padding: 12px 16px; font-size: 13px; color: #475569; margin-bottom: 20px;">
      <strong>【最新クチコミ抜粋】</strong>「${h.userReview.replace(/<[^>]+>/g, '').slice(0, 150)}...」
    </div>` : ''}
    <div style="text-align: center;">
      <a href="${h.affiliateUrl}" target="_blank" rel="noopener noreferrer nofollow" style="display: inline-block; background: #dc2626; color: #ffffff; font-weight: bold; font-size: 16px; padding: 14px 32px; border-radius: 8px; text-decoration: none; box-shadow: 0 4px 6px rgba(220,38,38,0.25);">
        楽天トラベルで空室・プランを見る →
      </a>
    </div>
  </div>
</div>
`).join('');

    const fullReview = `
<div class="article-lead-section" style="font-size: 15px; line-height: 1.9; color: #1e293b; margin-bottom: 28px;">
  <p>${cfg.introHighlights}</p>
  <p>11月は紅葉・ライトアップ・大祭・味覚の解禁が重なる年間最大の観光ハイシーズン。週末やイベント開催日は早期満室となるため、楽天トラベルの最新空室状況をご確認の上、早めの予約確保をおすすめします。</p>
</div>

${comparisonTableHtml}

<h2 style="font-size: 20px; font-weight: 900; color: #0f172a; border-left: 6px solid #0d9488; padding-left: 12px; margin: 40px 0 20px 0;">
  🍁 編集部が厳選！11月イベント満喫のおすすめ高評価宿
</h2>

${hotelDetailsHtml}

<div class="autumn-model-course-section" style="margin: 40px 0; background: #fffbeb; border: 1px solid #fef3c7; border-radius: 16px; padding: 22px;">
  <h3 style="font-size: 16px; font-weight: 900; color: #92400e; margin: 0 0 10px 0;">
    🧭 【1泊2日モデルコース】11月イベント満喫スケジュール
  </h3>
  <p style="font-size: 13px; line-height: 1.8; color: #78350f; margin: 0;">
    ${cfg.modelCourseSnippet}
  </p>
</div>

<div class="autumn-booking-tips" style="margin: 32px 0; background: #f0fdfa; border: 1px solid #ccfbf1; border-radius: 16px; padding: 20px; font-size: 13px; line-height: 1.8; color: #134e4a;">
  <h4 style="font-size: 14px; font-weight: 900; color: #0f766e; margin: 0 0 8px 0;">
    💡 11月旅行の予約ワンポイントアドバイス
  </h4>
  <p style="margin: 0 0 8px 0;">・<strong>イベント会場周辺は「車を捨てて徒歩・駅近」が鉄則：</strong> 紅葉名所や大祭会場周辺は激しい渋滞と駐車場満車が発生します。駅近ホテルに車を預けて公共交通や徒歩で動くのが最も安全です。</p>
  <p style="margin: 0;">・<strong>楽天トラベルの「5と0のつく日」クーポン併用：</strong> 毎月5・10・15・20・25・30日は高級宿・温泉宿で最大20%OFFクーポンが配布されるため、タイミングを合わせて予約すると大変お得です。</p>
</div>
`;

    const postJson = {
      id: cfg.id,
      title: cfg.title,
      hotel_name: cfg.hotel_name,
      description: `${cfg.introHighlights.slice(0, 140)}...`,
      is_special_feature: true,
      review: fullReview,
      image: fetchedHotels[0].hotelImageUrl || fetchedHotels[0].roomImageUrl,
      other_images: fetchedHotels.slice(1, 5).map(h => h.hotelImageUrl || h.roomImageUrl).filter(Boolean),
      affiliate_url: fetchedHotels[0].affiliateUrl,
      prefecture: cfg.prefecture,
      area: cfg.area,
      categories: cfg.categories,
      price: fetchedHotels[0].hotelMinCharge || 8800,
      rating: fetchedHotels[0].reviewAverage || 4.3,
      date: '2026-10-23',
      keywords: `${cfg.prefecture} 11月 イベント 温泉 ホテル おすすめ, ${cfg.area} 紅葉 ライトアップ, 楽天トラベル, 2026 最新`,
      summary: `${cfg.title}。楽天トラベル公式APIによる最新クチコミ高評価宿を徹底比較。`,
      review_count: fetchedHotels[0].reviewCount || 150,
      featured_hotels: fetchedHotels.map(h => ({
        name: h.hotelName,
        rating: String(h.reviewAverage || '4.0'),
        price: `¥${Number(h.hotelMinCharge || 8000).toLocaleString()}〜`,
        url: h.affiliateUrl
      }))
    };

    const outPath = path.join(POSTS_DIR, `${cfg.id}.json`);
    fs.writeFileSync(outPath, JSON.stringify(postJson, null, 2), 'utf8');
    console.log(`Saved site post: ${outPath}`);
  }

  console.log('\n--- All November site post JSONs created successfully! ---');
}

generateSiteArticles().catch(console.error);
