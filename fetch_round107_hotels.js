const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-kyoto-station-luxury-convenience-stay',
    queries: [
      { key: 'kyoto_granvia', query: 'ホテルグランヴィア京都', label: '京都市ふるさと納税・JR京都駅直結の最高峰ランドマークホテル！駅直結の圧倒的利便性と極上ダイニング' },
      { key: 'kyoto_thousand', query: 'ザ・サウザンド京都', label: '京都市ふるさと納税・京都駅徒歩2分の静謐なラグジュアリー！現代の茶室を思わせる癒やしの空間' },
      { key: 'kyoto_rihga', query: 'リーガロイヤルホテル京都', label: '京都市ふるさと納税・京都唯一の回転展望レストラン！伝統のおもてなしと充実の設備を誇る名門' }
    ]
  },
  {
    slug: 'furusato-tax-tokyo-station-marunouchi-luxury-stay',
    queries: [
      { key: 'tokyo_stationhotel', query: '東京ステーションホテル', label: '千代田区ふるさと納税・国指定重要文化財の赤レンガ駅舎内！100年超の歴史と名誉を誇る唯一無二の名宿' },
      { key: 'tokyo_palacehotel', query: 'パレスホテル東京', label: '千代田区ふるさと納税・皇居外苑の緑を望む世界最高峰ホテル！フォーブス5つ星の至高のホスピタリティ' },
      { key: 'tokyo_imperial', query: '帝国ホテル東京', label: '千代田区ふるさと納税・日本の迎賓館として歴史を刻む最高峰グランドホテル！伝統のサービスと美食' }
    ]
  },
  {
    slug: 'furusato-tax-tokyo-asakusa-skytree-view-stay',
    queries: [
      { key: 'asakusa_viewhotel', query: '浅草ビューホテル', label: '台東区ふるさと納税・浅草随一の高層ビュー！東京スカイツリーと浅草寺を一望する絶景ホテル' },
      { key: 'asakusa_gatehotel', query: 'ＴＨＥ　ＧＡＴＥ　ＨＯＴＥＬ（ザ・ゲートホテル）　雷門　ｂｙ　ＨＵＬＩＣ', label: '台東区ふるさと納税・雷門徒歩2分のデザイナーズホテル！13階ロビーから望むスカイツリーパノラマ' },
      { key: 'asakusa_nono', query: '天然温泉　凌雲の湯　御宿　野乃浅草（ドーミーイン・御宿野乃　ホテルズグループ）', label: '台東区ふるさと納税・全館畳敷きの和風プレミアムホテル！自家源泉の黒湯天然温泉と名物夜鳴きそば' }
    ]
  },
  {
    slug: 'furusato-tax-nara-park-heritage-luxury-stay',
    queries: [
      { key: 'nara_narahotel', query: '奈良ホテル', label: '奈良市ふるさと納税・明治四十二年創業「関西の迎賓館」！名画が飾られた本館と伝統のクラシックフレンチ' },
      { key: 'nara_fufu', query: 'ふふ　奈良', label: '奈良市ふるさと納税・奈良公園の緑に抱かれる隈研吾氏設計の至高宿！全室温泉露天風呂付きスイート' },
      { key: 'nara_marriott', query: 'ＪＷマリオット・ホテル奈良', label: '奈良市ふるさと納税・日本初進出の最高峰インターナショナルブランド！古都の美とモダンラグジュアリー' }
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

  const outputPath = path.join(__dirname, 'round107_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`Finished! Saved to ${outputPath}`);
}

run();
