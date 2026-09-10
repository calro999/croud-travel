const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-hakone-yumoto-gateway-luxury-stay',
    queries: [
      { key: 'hakone_hatsuhana', query: 'はつはな', label: '箱根町ふるさと納税・全客室に露天風呂完備の極上リラクゼーション！自家源泉の美肌湯とモダン懐石' },
      { key: 'hakone_yoshiike', query: '吉池旅館', label: '箱根町ふるさと納税・一万坪の国登録有形文化財回遊式日本庭園！六本の自家源泉完全掛け流しの名湯' },
      { key: 'hakone_yumotofujiya', query: '箱根湯本温泉　湯本富士屋ホテル', label: '箱根町ふるさと納税・箱根湯本駅徒歩3分の名門リゾート！充実の温泉大浴場と伝統の和洋中ダイニング' }
    ]
  },
  {
    slug: 'furusato-tax-yugawara-onsen-ryotei-kaiseki-stay',
    queries: [
      { key: 'yugawara_tsubaki', query: '海石榴　つばき', label: '湯河原町ふるさと納税・奥湯河原の清流沿いに佇む最高峰の料亭旅館！四季を彩る極上懐石と名湯' },
      { key: 'yugawara_sansuirou', query: '山翠楼SANSUIROU', label: '湯河原町ふるさと納税・奥湯河原の大自然を見下ろす展望露天風呂！伝統の自家製湯葉と本格懐石料理' },
      { key: 'yugawara_fukiya', query: '湯河原温泉　ふきや', label: '湯河原町ふるさと納税・数寄屋造りの静寂と屋上貸切露天風呂！日本の美意識が息づく繊細な日本料理' }
    ]
  },
  {
    slug: 'furusato-tax-minakami-onsen-tanigawadake-stay',
    queries: [
      { key: 'minakami_senjuan', query: '谷川温泉　別邸　仙寿庵（せんじゅあん）', label: 'みなかみ町ふるさと納税・ルレ・エ・シャトー加盟の至高の名宿！谷川岳を望む全室露天風呂付き離れ' },
      { key: 'minakami_matsunoi', query: '大江戸温泉物語Ｐｒｅｍｉｕｍ　松乃井（旧：水上温泉　源泉湯の宿　松乃井）（２０２６年８月７日開業）', label: 'みなかみ町ふるさと納税・利根川の清流沿いの一大温泉リゾート！四つの自家源泉と豪華バイキング' },
      { key: 'minakami_zazan', query: '坐山　みなかみ（旧：水上館）', label: 'みなかみ町ふるさと納税・利根川渓流の絶景を望む十六の湯船！大自然のいで湯と上州牛会席' }
    ]
  },
  {
    slug: 'furusato-tax-fukuoka-hakata-luxury-gourmet-stay',
    queries: [
      { key: 'fukuoka_miyakohotel', query: '都ホテル博多', label: '福岡市ふるさと納税・JR博多駅直結の最高峰ラグジュアリー！屋上温泉スパ＆アウトドアプール' },
      { key: 'fukuoka_grandhyatt', query: 'グランドハイアット福岡', label: '福岡市ふるさと納税・キャナルシティ博多直結の国際的ホテル！洗練の客室とクラブラウンジ' },
      { key: 'fukuoka_hilton', query: 'ヒルトン福岡シーホーク', label: '福岡市ふるさと納税・博多湾オーシャンビューのアーバンリゾート！地上100m超のパノラマビュー' }
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

  const outputPath = path.join(__dirname, 'round105_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`Finished! Saved to ${outputPath}`);
}

run();
