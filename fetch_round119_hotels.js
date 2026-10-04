const { searchRakutenHotels, getHotelByNo } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'fukui_echizen_coast_suisen_crab',
    slug: 'winter-fukui-echizen-coast-suisen-crab-misaki-stay',
    label: '福井・越前海岸＆越前町・越前岬（日本海に咲く「越前水仙まつり」群生美＆越前岬灯台の荒波絶景！黄色タグ付き本場「越前がに」フルコース＆日本海一望の越前温泉郷名宿）',
    hotels: [
      { no: 14121, query: '越前温泉 平成' },
      { no: 68492, query: '越前 うおたけ' },
      { no: 51656, query: 'りぞうと旅館 宿かり' },
      { no: 30836, query: '旅館 大西' },
      { no: 67189, query: '鷹巣荘' }
    ]
  },
  {
    theme: 'nagano_azumino_omachi_hotaka',
    slug: 'winter-nagano-azumino-omachi-hotaka-snow-shinshugyu-stay',
    label: '長野・安曇野＆大町温泉郷・白馬アルプス山麓（白銀に輝く北アルプス後立山連峰の雄姿＆国営アルプスあづみの公園光のイルミネーション！信濃国三之宮・穂高神社雪の初詣＆大町温泉郷の美肌雪見露天・信州サーモン・信州プレミアム牛名宿）',
    hotels: [
      { no: 7149, query: '安曇野穂高ビューホテル' },
      { no: 173116, query: '休暇村 リトリート安曇野ホテル' },
      { no: 5130, query: '黒部ビューホテル' },
      { no: 3116, query: '緑翠亭 景水' },
      { no: 2786, query: '立山プリンスホテル' }
    ]
  },
  {
    theme: 'yamagata_sakata_tsuruoka_hagurosan',
    slug: 'winter-yamagata-sakata-tsuruoka-hagurosan-kandara-stay',
    label: '山形・酒田＆鶴岡・羽黒山（出羽三山神社雪の初詣と国宝羽黒山五重塔の静寂＆山居倉庫雪景色！冬の日本海の王者「寒鱈まつり・どんがら汁」＆湯野浜温泉の雪見露天・庄内牛名宿）',
    hotels: [
      { no: 56286, query: '亀や 鶴岡' },
      { no: 67149, query: '游水亭 いさごや' },
      { no: 12536, query: '九兵衛旅館' },
      { no: 12577, query: '温海温泉 萬国屋' },
      { no: 4623, query: 'ホテルリッチ＆ガーデン酒田' }
    ]
  },
  {
    theme: 'kagawa_zentsuji_marugame_castle',
    slug: 'winter-kagawa-zentsuji-marugame-castle-udon-stay',
    label: '香川・善通寺＆丸亀・琴平（弘法大師生誕の地・総本山善通寺の雪の初詣＆丸亀城の現存天守石垣ライトアップ！冬の名物「讃岐しっぽくうどん」巡りと熱々骨付鳥＆瀬戸内海展望露天名宿）',
    hotels: [
      { no: 675, query: 'オークラホテル丸亀' },
      { no: 12630, query: '丸亀プラザホテル' },
      { no: 15603, query: '善通寺グランドホテル' },
      { no: 5901, query: '湯元こんぴら温泉華の湯 紅梅亭' },
      { no: 28098, query: '大江戸温泉物語 ホテルレオマの森' }
    ]
  },
  {
    theme: 'kagoshima_izumi_crane_akune_kurobuta',
    slug: 'winter-kagoshima-izumi-crane-akune-kurobuta-stay',
    label: '鹿児島・出水＆阿久根・さつま（世界屈指のツル渡来地・出水の一万羽を超える越冬ツルの群舞＆出水麓武家屋敷群の初詣！阿久根の冬旬「華アジ」と天然ウニ・出水赤鶏・さつま黒豚＆美肌の湯名宿）',
    hotels: [
      { no: 196041, query: 'ホテル泉國邸' },
      { no: 50525, query: 'ホテル キング 出水' },
      { no: 13948, query: '宮之城温泉 手塚ｒｙｏｋａｎ' },
      { no: 128452, query: '紫尾温泉 旅籠 しび荘' },
      { no: 179195, query: 'お宿みどこい' }
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 5 Hotels for 5 Themes via Rakuten API (Round 119)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];

    for (const hInfo of t.hotels) {
      console.log(`Fetching hotelNo: ${hInfo.no} ("${hInfo.query}")...`);
      try {
        let hotel = await getHotelByNo(hInfo.no);
        await sleep(500); // respect rate limit

        if (!hotel) {
          console.log(`  ! getHotelByNo failed, trying searchRakutenHotels for "${hInfo.query}"...`);
          const searchRes = await searchRakutenHotels(hInfo.query, 3);
          await sleep(500);
          if (searchRes && searchRes.length > 0) {
            hotel = searchRes[0];
          }
        }

        if (hotel) {
          console.log(`  -> Fetched: [${hotel.hotelNo}] ${hotel.hotelName} (${hotel.address1} ${hotel.address2}) - Score: ${hotel.reviewAverage}`);
          themeHotels.push(hotel);
        } else {
          console.error(`  x Could not fetch hotel for ${hInfo.query}`);
        }
      } catch (e) {
        console.error(`  Error fetching hotel ${hInfo.no}:`, e.message);
      }
    }

    console.log(`Total selected hotels for ${t.theme}: ${themeHotels.length}`);
    if (themeHotels.length !== 5) {
      console.error(`ERROR: ${t.theme} has ${themeHotels.length} hotels instead of 5!`);
      process.exit(1);
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels
    };
  }

  const outPath = path.join(__dirname, 'round119_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotels data to ${outPath}`);
}

main().catch(err => {
  console.error('Fatal fetch error:', err);
  process.exit(1);
});
