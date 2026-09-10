const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-niseko-luxury-resort-powder-snow-stay',
    queries: [
      { key: 'niseko_parkhyatt', query: 'パークハイアットニセコＨＡＮＡＺＯＮＯ', label: '倶知安町ふるさと納税・世界最高峰のパウダースノー直結！全室天然温泉付きラグジュアリーリゾート' },
      { key: 'niseko_setsuniseko', query: '雪ニセコ', label: '倶知安町ふるさと納税・羊蹄山ビューと上質な温泉ウェルネス！ミシュラン星付き監修ダイニング' },
      { key: 'niseko_zaborin', query: '坐忘林', label: '倶知安町ふるさと納税・白樺林に佇む珠玉の隠れ宿！全客室に内湯と露天の２つの源泉かけ流し風呂' }
    ]
  },
  {
    slug: 'furusato-tax-otaru-canal-asarigawa-onsen-stay',
    queries: [
      { key: 'otaru_furukawa', query: '運河の宿　おたる　ふる川', label: '小樽市ふるさと納税・小樽運河が目の前！明治の商家風情と自家源泉の天然温泉・朝食バイキング' },
      { key: 'otaru_kourakuen', query: 'おたる　宏楽園', label: '小樽市ふるさと納税・広大な日本庭園に囲まれた名宿！自家源泉の露天風呂付き客室と北海道の旬会席' },
      { key: 'otaru_ginrinsou', query: '料亭湯宿　銀鱗荘', label: '小樽市ふるさと納税・平磯岬の高台に佇む北の迎賓館！石狩湾を一望する絶景露天風呂と鰊御殿会席' }
    ]
  },
  {
    slug: 'furusato-tax-kamakura-shonan-ocean-history-stay',
    queries: [
      { key: 'kamakura_prince', query: '鎌倉プリンスホテル', label: '鎌倉市ふるさと納税・全室オーシャンビュー！相模湾と江の島・富士山を望む七里ヶ浜の絶景リゾート' },
      { key: 'kamakura_hotelao', query: 'ＨＯＴＥＬ　ＡＯ　ＫＡＭＡＫＵＲＡ', label: '鎌倉市ふるさと納税・腰越の海を望むデザイナーズホテル！名店「松原庵」の本格蕎麦と極上滞在' },
      { key: 'kamakura_metropolitan', query: 'ホテルメトロポリタン鎌倉', label: '鎌倉市ふるさと納税・若宮大路沿いの好立地！鶴岡八幡宮の参道を望む洗練の和モダンステイ' }
    ]
  },
  {
    slug: 'furusato-tax-miyajima-itsukushima-shrine-luxury-stay',
    queries: [
      { key: 'miyajima_kinsuikan', query: '宮島潮湯温泉　錦水館', label: '廿日市市ふるさと納税・世界遺産厳島神社へ徒歩すぐ！宮島唯一の天然潮湯温泉と絶景スイート' },
      { key: 'miyajima_iwaso', query: 'みやじまの宿　岩惣', label: '廿日市市ふるさと納税・安政元年創業の老舗名旅館！もみじ谷の原生林と若宮温泉に憩う伝統の離れ' },
      { key: 'miyajima_arimoto', query: '宮島グランドホテル　有もと', label: '廿日市市ふるさと納税・厳島神社まで徒歩３分の好立地！創業三百余年の歴史と瀬戸内の旬会席' }
    ]
  }
];

async function run() {
  const result = {};

  for (const config of furusatoConfigs) {
    result[config.slug] = {};
    for (const q of config.queries) {
      console.log(`Fetching: ${q.query}...`);
      await sleep(1500);
      try {
        const hotels = await searchRakutenHotels(q.query, 1);
        if (hotels && hotels.length > 0) {
          result[config.slug][q.key] = {
            ...hotels[0],
            customLabel: q.label
          };
          console.log(`-> SUCCESS: ${hotels[0].hotelName} (No: ${hotels[0].hotelNo})`);
        } else {
          console.warn(`-> NOT FOUND: ${q.query}`);
        }
      } catch (err) {
        console.error(`-> ERROR fetching ${q.query}:`, err.message);
      }
    }
  }

  const outputPath = path.join(__dirname, 'round104_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`Finished! Saved to ${outputPath}`);
}

run();
