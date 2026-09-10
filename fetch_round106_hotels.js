const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-toyako-onsen-lakeview-fireworks-stay',
    queries: [
      { key: 'toyako_windsor', query: 'ザ・ウィンザーホテル洞爺', label: '洞爺湖町ふるさと納税・山頂から洞爺湖と内浦湾を一望する世界的サミットホテル！極上フレンチと絶景温泉' },
      { key: 'toyako_konosumika', query: 'ザ・レイクスイート湖の栖', label: '壮瞥町ふるさと納税・全室温泉露天風呂付きインフィニティスパ！湖と一体化する最新ラグジュアリー' },
      { key: 'toyako_sunpalace', query: '洞爺サンパレス', label: '有珠郡壮瞥町ふるさと納税・湖畔の巨大温泉リゾート！インフィニティ露天風呂と充実のアクアゾーン' }
    ]
  },
  {
    slug: 'furusato-tax-okinawa-onna-beach-resort-stay',
    queries: [
      { key: 'onna_halekulani', query: 'ハレクラニ沖縄', label: '恩納村ふるさと納税・ハワイの名門が紡ぐ天国の館！全室オーシャンビューと５つのプール・極上スパ' },
      { key: 'onna_hyattseragaki', query: 'ハイアット リージェンシー 瀬良垣アイランド 沖縄', label: '恩納村ふるさと納税・島全体が海に囲まれたリゾートアイランド！美しい海とインフィニティプール' },
      { key: 'onna_renaissance', query: 'ルネッサンスリゾートオキナワ', label: '恩納村ふるさと納税・イルカと遊べるマリンパラダイス！全室バルコニー付き＆ファミリー充実リゾート' }
    ]
  },
  {
    slug: 'furusato-tax-nagoya-luxury-gourmet-stay',
    queries: [
      { key: 'nagoya_marriott', query: '名古屋マリオットアソシアホテル', label: '名古屋市ふるさと納税・JR名古屋駅真上の最高峰ホテル！地上200m超のスカイビューと極上ダイニング' },
      { key: 'nagoya_tiad', query: 'TIAD', label: '名古屋市ふるさと納税・久屋大通公園を望む最新ラグジュアリー！全室50平米超・インドアプール完備' },
      { key: 'nagoya_kankohotel', query: '名古屋観光ホテル', label: '名古屋市ふるさと納税・昭和十一年開業の中部随一のグランドホテル！伝統の格式と洗練のおもてなし' }
    ]
  },
  {
    slug: 'furusato-tax-shodoshima-olive-island-onsen-stay',
    queries: [
      { key: 'shodoshima_mari', query: '島宿真里', label: '小豆島町ふるさと納税・醤油蔵が並ぶ醤の郷に佇む登録有形文化財宿！名物「醤油会席」と自家源泉' },
      { key: 'shodoshima_olivian', query: 'オリビアン小豆島', label: '土庄町ふるさと納税・夕陽百選に選ばれる絶景リゾート！天然温泉露天風呂とオリーブバイキング' },
      { key: 'shodoshima_bayresort', query: 'ベイリゾートホテル小豆島', label: '小豆島町ふるさと納税・全室オーシャンビュー＆最上階展望大浴場！瀬戸内海の旬魚とオリーブ牛会席' }
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

  const outputPath = path.join(__dirname, 'round106_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`Finished! Saved to ${outputPath}`);
}

run();
