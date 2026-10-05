const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'tokyo_takao_yakuoin_tororo_soba',
    slug: 'winter-tokyo-takao-yakuoin-shrine-hatsumode-fuji-tororo-soba-stay',
    label: '東京・高尾山＆八王子（「高尾山薬王院」新春初詣と澄んだ冬晴れのダイヤモンド富士！名物自然薯とろろそば＆極楽湯・八王子温泉ホテル名宿）',
    queries: ['京王プラザホテル八王子', 'タカオネ', 'ザ・ビー八王子', '八王子スカイホテル', 'マロードイン八王子']
  },
  {
    theme: 'kanagawa_isehara_oyama_afuri_tofu',
    slug: 'winter-kanagawa-isehara-oyama-afuri-shrine-hatsumode-tofu-tsurumaki-stay',
    label: '神奈川・伊勢原＆大山・秦野（大山講の伝統「大山阿夫利神社」新春初詣と相模湾・富士山冬パノラマ！大山名物豆腐料理・美肌名湯「鶴巻温泉」「七沢温泉」名宿）',
    queries: ['元湯 陣屋', 'ホテルルートイン伊勢原', '七沢温泉 福元館', '七沢温泉 盛楽苑', '広沢寺温泉 玉翠楼']
  },
  {
    theme: 'hokkaido_wakkanai_soya_cape_sunrise',
    slug: 'winter-hokkaido-wakkanai-soya-cape-sunrise-tako-shabu-soya-beef-stay',
    label: '北海道・稚内＆宗谷岬（日本最北端「宗谷岬」冬のオホーツク海流氷前線と最北の元旦初日の出！稚内港北防波堤ドーム・極上「宗谷黒牛」＆名物タコしゃぶ・稚内天然温泉名宿）',
    queries: ['ドーミーイン稚内', 'サフィールホテル稚内', '稚内グランドホテル', 'ホテルニューチコウ', 'ホテルサハリン']
  },
  {
    theme: 'hyogo_takarazuka_kiyoshikojin_takedao',
    slug: 'winter-hyogo-takarazuka-kiyoshikojin-hatsumode-takedao-onsen-sandagyu-stay',
    label: '兵庫・宝塚＆武田尾温泉（宝塚大劇場冬公演と「清荒神清澄寺」「中山寺」新春初詣！武庫川渓谷の隠れ秘湯「武田尾温泉」雪見露天＆特選三田牛会席名宿）',
    queries: ['紅葉舘 別庭 あざれ', '宝塚ホテル', 'ホテル若水', '三田ホテル', '都ホテル 尼崎']
  },
  {
    theme: 'miyazaki_hyuga_umagase_sea_cross',
    slug: 'winter-miyazaki-hyuga-umagase-sea-cross-iseebi-miyazakigyu-stay',
    label: '宮崎・日向＆延岡・門川（日向岬「馬ヶ背」断崖絶壁冬の太平洋パノラマと願い叶う「クルスの海」新春初詣！冬旬「日向灘伊勢海老」＆宮崎牛・極上金鱧会席名宿）',
    queries: ['ホテルベルフォート日向', 'エンシティホテル延岡', '延岡アーバンホテル', 'アパホテル 宮崎延岡駅前', '延岡 ロイヤルホテル']
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 25 Hotels via Live Rakuten API (Round 127)');
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
          console.log(`  -> Fetched: [${hotel.hotelNo}] ${hotel.hotelName} (${hotel.address1} ${hotel.address2}) - Score: ${hotel.reviewAverage} - Price: ¥${hotel.hotelMinCharge}`);
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

  const outPath = path.join(__dirname, 'round127_raw_hotels.json');
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
