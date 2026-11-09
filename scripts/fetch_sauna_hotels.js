const https = require('https');
const fs = require('fs');

const appId = '1a3cdfd9-2aec-4b42-8290-1c53603b0012';
const accessKey = 'pk_XkZ5h9MDKSsuVr6T5CnLnlVNvFg3hiR5vMDGrQ75cU5';
const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function search(kw) {
  for (let attempt = 0; attempt < 3; attempt++) {
    await sleep(800);
    const res = await new Promise((resolve) => {
      const url = 'https://openapi.rakuten.co.jp/engine/api/Travel/KeywordHotelSearch/20260731?format=json&keyword=' + encodeURIComponent(kw) + '&applicationId=' + appId + '&accessKey=' + accessKey + '&affiliateId=' + affId + '&hits=1';
      https.get(url, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
          try {
            const j = JSON.parse(data);
            if (j.hotels && j.hotels.length > 0) {
              const b = j.hotels[0].hotel[0].hotelBasicInfo;
              resolve({
                no: b.hotelNo,
                name: b.hotelName,
                rating: b.reviewAverage,
                reviews: b.reviewCount,
                price: b.hotelMinCharge,
                url: b.hotelInformationUrl,
                img: b.hotelImageUrl,
                roomImg: b.roomImageUrl || '',
                address: (b.address1 || '') + (b.address2 || ''),
                special: b.hotelSpecial || ''
              });
            } else {
              resolve(null);
            }
          } catch (e) {
            resolve(null);
          }
        });
      }).on('error', () => resolve(null));
    });
    if (res) return res;
    await sleep(1000);
  }
  return null;
}

const list = [
  { rank: 1, name_key: '武雄温泉 御船山楽園ホテル らかんの湯', pref: '佐賀県', area: '武雄温泉', kw: '御船山楽園ホテル', feature: 'サウナシュラン3年連続グランプリ殿堂入り！世界遺産級の大自然とチームラボのアート空間・御船山薪サウナ・ほうじ茶ロウリュ・武雄温泉チラー水風呂' },
  { rank: 2, name_key: '知床 北こぶし知床 ホテル＆リゾート', pref: '北海道', area: '知床・ウトロ', kw: '北こぶし知床', feature: 'サウナシュラン受賞！オホーツク海と冬の流氷原を一望する「流氷サウナ」・知床の大自然を再現した3D音響と名水深水風呂' },
  { rank: 3, name_key: '山中湖 ホテルマウント富士', pref: '山梨県', area: '山中湖・富士五湖', kw: 'ホテル マウント富士', feature: 'サウナシュラン選出！富士山を眼前に拝む展望サウナ「満天星の湯」・富士山天然伏流水掛け流し深水風呂と雲海ウッドデッキ外気浴' },
  { rank: 4, name_key: '神戸 神戸みなと温泉 蓮', pref: '兵庫県', area: '神戸・ハーバーランド', kw: '神戸みなと温泉 蓮', feature: '展望露天風呂＆神戸港オーシャンビュー外気浴！フィンランド式ロウリュサウナ・炭酸泉・天然温泉水風呂・高級温泉旅館の真骨頂' },
  { rank: 5, name_key: '浦安 舞浜ユーラシア', pref: '千葉県', area: '舞浜・浦安', kw: '舞浜ユーラシア', feature: '本場フィンランド直輸入の「木の宝石ケロ材」を使用した本格ケロサウナ！地下源泉掛け流し水風呂と東京湾の潮風を感じる屋上外気浴' },
  { rank: 6, name_key: '湘南 8HOTEL CHIGASAKI', pref: '神奈川県', area: '茅ヶ崎・湘南', kw: '8HOTEL CHIGASAKI', feature: 'サウナシュラン受賞！プールサイドでととのう湘南フィンランドサウナ・セルフロウリュ＆水着で飛び込むプール水風呂とクラフトビール' },
  { rank: 7, name_key: '十勝岳 十勝岳温泉 カミホロ荘', pref: '北海道', area: '富良野・十勝岳', kw: 'カミホロ荘', feature: '標高1,200mに佇む北の聖地！総ヒノキ造りの本格サウナ・十勝岳連峰の絶景と冬の雪ダイブ外気浴・大雪山系の天然伏流水掛け流し' },
  { rank: 8, name_key: '前橋 SHIROIYA HOTEL', pref: '群馬県', area: '前橋', kw: '白井屋ホテル', feature: 'サウナシュラン特別賞！世界的建築家・藤本壮介設計のアートホテル・完全貸切フィンランドサウナとミストサウナの至極プライベート体験' },
  { rank: 9, name_key: '長崎 島原温泉 ホテル南風楼', pref: '長崎県', area: '島原温泉', kw: 'オールインクルーシブ 島原温泉ホテル南風楼', feature: '有明海をパノラマで見渡す海のサウナ！海に飛び込むようなインフィニティ水風呂＆寝転びととのいデッキ・生ビール無料オールインクルーシブ' },
  { rank: 10, name_key: 'みなかみ 谷川温泉 別邸 仙寿庵', pref: '群馬県', area: '谷川温泉', kw: '別邸 仙寿庵', feature: '世界的権威ルレ・エ・シャトー加盟！谷川岳の絶壁を仰ぐ総ヒノキサウナと谷川岳天然湧水水風呂・全室露天風呂付き極上宿' },
  { rank: 11, name_key: '洞爺湖 洞爺湖万世閣ホテルレイクサイドテラス', pref: '北海道', area: '洞爺湖温泉', kw: '洞爺湖万世閣ホテルレイクサイドテラス', feature: 'サウナシュラン選出！洞爺湖を一望するインフィニティ露天風呂＆セルフロウリュサウナ「月の湯」「星の湯」・湖畔外気浴' },
  { rank: 12, name_key: '大磯 大磯プリンスホテル THERMAL SPA S.WAVE', pref: '神奈川県', area: '大磯・湘南', kw: '大磯プリンスホテル', feature: '相模湾の水平線と溶け合うインフィニティプール＆温熱テラス！パノラマパノラミックサウナ・フィンランドサウナ・氷のクールバス' }
];

async function main() {
  const results = [];
  for (const item of list) {
    console.log(`Fetching ${item.kw}...`);
    const h = await search(item.kw);
    if (h) {
      results.push({ ...item, ...h });
      console.log(`  -> OK: ${h.name} (★${h.rating}, ¥${h.price})`);
    } else {
      console.log(`  -> FAILED: ${item.kw}`);
    }
  }

  fs.writeFileSync('scripts/sauna_hotels_data.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log(`\nSuccessfully fetched ${results.length}/${list.length} hotels.`);
}

main();
