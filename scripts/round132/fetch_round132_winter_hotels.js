const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'asahikawa_asahiyama_penguin',
    slug: 'winter-hokkaido-asahikawa-asahiyama-zoo-penguin-walk-stay',
    label: '北海道・旭川＆旭山動物園「冬のペンギンの散歩」・美瑛青い池ライトアップ（銀世界の雪上を行進する愛らしいペンギンの散歩！氷点下の美瑛白金青い池・白ひげの滝ライトアップと熱々旭川醤油ラーメン＆天然温泉サウナ名宿）',
    queries: [
      'OMO7旭川 by 星野リゾート',
      'ホテルWBFグランデ旭川',
      'JRイン旭川',
      'アートホテル旭川',
      '天然温泉 神楽の湯 ホテルルートインGrand旭川駅前',
      'ホテルクレッセント旭川'
    ]
  },
  {
    theme: 'appi_kogen_aspirin_snow',
    slug: 'winter-iwate-appi-kogen-snow-resort-aspirin-powder-stay',
    label: '岩手・安比高原スキーリゾート＆八幡平「奇跡のアスピリンスノー」（世界が認めた日本最優秀スキーリゾート！サラサラ極上パウダースノーとANAインターコンチネンタル安比高原・雪見露天風呂白銀ステイ＆前沢牛・雫石牛名宿）',
    queries: [
      'ANAインターコンチネンタル安比高原リゾート',
      'ANAクラウンプラザリゾート安比高原',
      'ANAホリデイ・インリゾート安比高原',
      '八幡平マウンテンホテル',
      '新安比温泉　静流閣',
      '八幡平ハイツ'
    ]
  },
  {
    theme: 'chichibu_misotsuchi_icicles',
    slug: 'winter-saitama-chichibu-misotsuchi-icicles-kotatsubune-stay',
    label: '埼玉・秩父「三十槌の氷柱」＆長瀞こたつ舟・秩父神社新春初詣（奥秩父の清流がつくる神秘の巨大氷柱と幻想ライトアップ！長瀞荒川ライン下り「冬のこたつ舟」・秩父神社初詣＆名物豚みそ丼・開運美肌温泉名宿）',
    queries: [
      '和どう',
      '新木鉱泉旅館',
      '小鹿野温泉　梁山泊',
      'ナチュラルファームシティ農園ホテル',
      'ちちぶ温泉　はなのや',
      'ホテル美やま'
    ]
  },
  {
    theme: 'ito_capybara_onsen_granillumi',
    slug: 'winter-shizuoka-ito-izukogen-capybara-onsen-granillumi-stay',
    label: '静岡・伊東＆伊豆高原「元祖カピバラの露天風呂」・大室山初日の出＆伊豆高原グランイルミ（ゆず湯で目を細めるカピバラの癒やし絶景！体験型日本一グランイルミ・大室山元旦富士山ビュー＆相模湾極上地金目鯛・源泉かけ流し名宿）',
    queries: [
      '伊東遊季亭',
      'ラフォーレ伊東温泉　湯の庭',
      'ホテル森の泉',
      'ホテルハーヴェスト伊東',
      '花吹雪',
      'ヴィラージュ伊豆高原'
    ]
  },
  {
    theme: 'himakajima_winter_torafugu',
    slug: 'winter-aichi-minamichita-himakajima-torafugu-gourmet-stay',
    label: '愛知・南知多「日間賀島」冬のとらふぐ尽くし＆三河湾絶景温泉（多幸と福の島で味わう本場日間賀島とらふぐ！熟練の技が光るてっさ・てっちり・香ばしい白子焼きと干しダコ風景＆三河湾一望オーシャンビュー名宿）',
    queries: [
      '日間賀観光ホテル',
      'ホテル　やしま',
      'いすず館',
      'すず丸',
      '源氏香',
      '花乃丸'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 25 Hotels via Live Rakuten API (Round 132 - Winter)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      if (themeHotels.length >= 5) break;
      console.log(`Searching for "${q}"...`);
      try {
        const searchRes = await searchRakutenHotels(q, 3);
        await sleep(600);

        if (searchRes && searchRes.length > 0) {
          const hotel = searchRes.find(h => !usedHotelNos.has(h.hotelNo)) || searchRes[0];
          if (!usedHotelNos.has(hotel.hotelNo)) {
            usedHotelNos.add(hotel.hotelNo);
            console.log(`  -> Fetched: [${hotel.hotelNo}] ${hotel.hotelName} (${hotel.address1} ${hotel.address2}) - Score: ${hotel.reviewAverage} - Price: ¥${hotel.hotelMinCharge}`);
            themeHotels.push(hotel);
          } else {
            console.log(`  -> Already added hotelNo: ${hotel.hotelNo}`);
          }
        } else {
          console.warn(`  -> No results for query "${q}"`);
        }
      } catch (err) {
        console.error(`  -> Error searching "${q}":`, err.message);
      }
    }

    if (themeHotels.length < 5) {
      console.warn(`Theme ${t.theme} only fetched ${themeHotels.length}/5 hotels. Trying fallback queries...`);
      const fallbackQuery = t.theme.split('_')[0];
      const moreRes = await searchRakutenHotels(fallbackQuery, 10);
      await sleep(600);
      if (moreRes) {
        for (const h of moreRes) {
          if (themeHotels.length >= 5) break;
          if (!usedHotelNos.has(h.hotelNo)) {
            usedHotelNos.add(h.hotelNo);
            console.log(`  -> Fallback Fetched: [${h.hotelNo}] ${h.hotelName}`);
            themeHotels.push(h);
          }
        }
      }
    }

    result[t.theme] = {
      theme: t.theme,
      slug: t.slug,
      label: t.label,
      hotels: themeHotels
    };
  }

  const outPath = path.join(__dirname, 'round132_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nDone! Saved hotel data to: ${outPath}`);
}

main().catch(console.error);
