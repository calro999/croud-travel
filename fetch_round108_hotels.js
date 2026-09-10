const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-kanazawa-kenrokuen-gourmet-stay',
    queries: [
      { key: 'kanazawa_nikko', query: 'ホテル日航金沢', label: '金沢市ふるさと納税・JR金沢駅東口直結のランドマーク！地上130mのスカイビューと極上朝食バイキング' },
      { key: 'kanazawa_sanraku_hakuchoro', query: '金沢白鳥路　ホテル山楽', label: '金沢市ふるさと納税・兼六園と金沢城公園に最も近いクラシック名宿！自家源泉天然温泉と加賀会席' },
      { key: 'kanazawa_sanraku_new', query: 'ＴＨＥ　ＨＯＴＥＬ　ＳＡＮＲＡＫＵ　ＫＡＮＡＺＡＷＡ（ザ　ホテル山楽　金沢）', label: '金沢市ふるさと納税・近江町市場徒歩すぐの中庭庭園ホテル！金沢の伝統美とクラブラウンジ' }
    ]
  },
  {
    slug: 'furusato-tax-okinawa-naha-kokusaidori-luxury-stay',
    queries: [
      { key: 'naha_hyatt', query: 'ハイアットリージェンシー那覇沖縄', label: '那覇市ふるさと納税・国際通り徒歩3分の最高峰ラグジュアリー！屋外プールと最上階クラブラウンジ' },
      { key: 'naha_collective', query: 'ホテルコレクティブ', label: '那覇市ふるさと納税・国際通りのど真ん中に誕生したフルスペックシティリゾート！屋外プール＆サウナ' },
      { key: 'naha_loisir', query: 'ロワジールスパタワー那覇', label: '那覇市ふるさと納税・那覇空港から車で約7分！地下から湧出する含ヨウ素天然温泉スパ＆ベイビュー' }
    ]
  },
  {
    slug: 'furusato-tax-tokyo-ginza-luxury-shopping-stay',
    queries: [
      { key: 'ginza_mitsuipremier', query: '三井ガーデンホテル銀座プレミア', label: '中央区ふるさと納税・銀座随一の眺望を誇る高層ホテル！東京タワーや銀座の夜景を見晴らすスカイバス' },
      { key: 'ginza_millennium', query: 'ミレニアム三井ガーデンホテル東京', label: '中央区ふるさと納税・銀座四丁目交差点・歌舞伎座すぐの好立地！ショッピングと観劇に最適な洗練ステイ' },
      { key: 'ginza_monterey', query: 'ホテルモントレ銀座', label: '中央区ふるさと納税・銀座の路地に佇む欧州クラシカルホテル！パリのアパルトマンを思わせる優雅な空間' }
    ]
  },
  {
    slug: 'furusato-tax-osaka-umeda-luxury-skyview-stay',
    queries: [
      { key: 'osaka_ritzcarlton', query: 'ザ・リッツ・カールトン大阪', label: '大阪市ふるさと納税・18世紀英国貴族の邸宅を思わせる最高峰ラグジュアリー！世界的名声と極上の美食' },
      { key: 'osaka_intercontinental', query: 'インターコンチネンタルホテル大阪　ｂｙ　ＩＨＧ', label: '大阪市ふるさと納税・グランフロント大阪直結！洗練の現代デザインと高層階クラブラウンジ' },
      { key: 'osaka_hilton', query: 'ヒルトン大阪', label: '大阪市ふるさと納税・JR大阪駅前の抜群のアクセス！多彩な直営レストランとエグゼクティブラウンジ' }
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

  const outputPath = path.join(__dirname, 'round108_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`Finished! Saved to ${outputPath}`);
}

run();
