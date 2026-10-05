const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'fukui_tsuruga_mikata_echizengani',
    slug: 'winter-fukui-tsuruga-kehi-jingu-mikata-goko-echizengani-wakasa-fugu-stay',
    label: '福井・敦賀＆若狭・三方五湖（北陸道総鎮守「氣比神宮」新春初詣と三方五湖冬景色！黄色タグ「越前がに」・「若狭ふぐ」極上会席名宿）',
    queries: ['敦賀マンテンホテル駅前', 'ホテルグランビナリオTSURUGA', 'ホテルルートイン敦賀駅前', '水月花', '東横ＩＮＮ敦賀駅前']
  },
  {
    theme: 'yamagata_shonai_hagurosan_kandarajiru',
    slug: 'winter-yamagata-shonai-hagurosan-sakata-kandarajiru-yunohama-onsen-stay',
    label: '山形・酒田＆鶴岡・出羽三山（羽黒山「国宝五重塔」雪景色と酒田山居倉庫！冬名物「寒鱈どんがら汁」・日本海寒魚＆湯野浜・あつみ温泉名宿）',
    queries: ['湯野浜温泉 游水亭 いさごや', 'たちばなや あつみ温泉', '萬国屋 あつみ温泉', 'ホテルリッチ＆ガーデン酒田', '東京第一ホテル鶴岡']
  },
  {
    theme: 'mie_iseshima_jingu_matoya_oyster',
    slug: 'winter-mie-iseshima-jingu-hatsumode-toba-matoya-oyster-ise-ebi-stay',
    label: '三重・伊勢志摩＆鳥羽・賢島（「伊勢神宮」新春初詣と宇治橋の冬日の出！冬旬「的矢かき」・伊勢海老・松阪牛会席＆鳥羽・賢島名宿）',
    queries: ['鳥羽国際ホテル', '戸田家 鳥羽', '志摩観光ホテル ザ クラシック', '鳥羽シーサイドホテル', 'いにしえの宿 伊久']
  },
  {
    theme: 'kyoto_tango_amanohashidate_taizagani',
    slug: 'winter-kyoto-tango-amanohashidate-ine-funaya-taizagani-kanburi-stay',
    label: '京都・丹後＆天橋立・伊根の舟屋（日本三景「天橋立」幻雪の飛龍観と伊根の舟屋雪景色！元伊勢籠神社初詣＆幻の「間人ガニ」・伊根寒ブリ名宿）',
    queries: ['天橋立ホテル', '文珠荘 天橋立', '玄妙庵 天橋立', '夕日ヶ浦温泉 佳松苑', 'メルキュール京都宮津リゾート＆スパ']
  },
  {
    theme: 'miyagi_matsushima_shiogama_oyster',
    slug: 'winter-miyagi-matsushima-shiogama-shrine-hatsumode-sanriku-oyster-higashimono-stay',
    label: '宮城・松島＆塩竈・松島湾（陸奥総鎮守「鹽竈神社」新春初詣と日本三景「松島」雪景色！冬旬「三陸松島かき」・極上ひがしもの鮪＆松島温泉名宿）',
    queries: ['松島一の坊', '松島温泉 ホテル絶景の館', 'ホテル松島大観荘', '小松館 好風亭', '松島センチュリーホテル']
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 5 Hotels for 5 Themes via Rakuten API (Round 125)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];

    for (const q of t.queries) {
      console.log(`Searching for "${q}"...`);
      try {
        const searchRes = await searchRakutenHotels(q, 3);
        await sleep(600);

        if (searchRes && searchRes.length > 0) {
          const hotel = searchRes[0];
          console.log(`  -> Fetched: [${hotel.hotelNo}] ${hotel.hotelName} (${hotel.address1} ${hotel.address2}) - Score: ${hotel.reviewAverage}`);
          themeHotels.push(hotel);
        } else {
          console.error(`  x Could not fetch hotel for query: ${q}`);
        }
      } catch (err) {
        console.error(`  x Error searching "${q}":`, err.message);
      }
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels
    };
  }

  const outPath = path.join(__dirname, 'round125_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotel data to: ${outPath}`);
  
  let allCountOk = true;
  for (const t of targets) {
    const count = result[t.theme].hotels.length;
    console.log(`- Theme ${t.theme}: ${count} hotels fetched`);
    if (count < 5) allCountOk = false;
  }
  if (!allCountOk) {
    console.error('Some themes have less than 5 hotels!');
    process.exit(1);
  }
  console.log('All 5 themes successfully fetched 5 verified hotels via live Rakuten API!');
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
