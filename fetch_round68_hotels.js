const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const furusatoConfigs = [
  {
    slug: 'furusato-tax-private-room-sauna-totonoi-villa-stay',
    queries: [
      { key: 'atami_room_sauna', query: 'ＩＳＨＩＮＯＹＡ熱海 石のや熱海', label: '熱海市ふるさと納税・相模湾を望む客室専用本格サウナ＆源泉露天風呂' },
      { key: 'kawaguchiko_sauna_villa', query: '天空の温泉ヴィラ紬 河口湖', label: '富士河口湖町ふるさと納税・富士山を望むプライベートサウナ＆露天風呂ヴィラ' },
      { key: 'koshikano_sauna_onsen', query: 'こしかの温泉 鹿児島 霧島', label: '霧島市ふるさと納税・美肌源泉かけ流しと客室バレルサウナで極上のととのい' }
    ]
  },
  {
    slug: 'furusato-tax-kanreki-celebration-oyakoukou-onsen-stay',
    queries: [
      { key: 'arima_oyakoukou_onsen', query: '有馬温泉 御幸荘 花結び', label: '神戸市ふるさと納税・親孝行＆長寿祝いに最適な金泉銀泉と贅を尽くした花懐石' },
      { key: 'kanazawa_oyakoukou_onsen', query: '金沢湯涌温泉 湯の出旅館', label: '金沢市ふるさと納税・加賀百万石の伝統美と数寄屋造りの静寂に浸る名門旅館' },
      { key: 'awaji_oyakoukou_onsen', query: '洲本温泉 淡路インターナショナルホテル ザ・サンプラザ', label: '洲本市ふるさと納税・全室オーシャンビューと全世代に優しい絶景スパリゾート' }
    ]
  },
  {
    slug: 'furusato-tax-private-pool-luxury-suite-villa-stay',
    queries: [
      { key: 'motobu_pool_villa', query: 'プライベートプールヴィラもとぶ 沖縄', label: '本部町ふるさと納税・やんばるの森と海を望む専用プール付き完全独立型ヴィラ' },
      { key: 'kamogawa_pool_villa', query: 'Ｒａｋｕｔｅｎ ＳＴＡＹ ＶＩＬＬＡ 鴨川 千葉', label: '鴨川市ふるさと納税・都心から行けるプライベートプール＆サウナ付き大型ヴィラ' },
      { key: 'miyakojima_pool_villa', query: 'プライベートプールヴィラ イムギャーリゾート 宮古島', label: '宮古島市ふるさと納税・宮古ブルーの海が目前に広がる専用プール付きスイート' }
    ]
  },
  {
    slug: 'furusato-tax-fresh-sushi-kaiseki-gourmet-inn-stay',
    queries: [
      { key: 'noto_sushi_ryokan', query: '山中温泉 かがり吉祥亭 石川', label: '加賀市ふるさと納税・日本海の鮮魚握りと名勝鶴仙渓の絶景露天風呂' },
      { key: 'atagawa_sushi_ryokan', query: 'ふたりの湯宿 湯花満開 伊豆', label: '東伊豆町ふるさと納税・相模湾の地魚寿司会席と6つの源泉貸切温泉' },
      { key: 'ito_sushi_ryokan', query: '伊東温泉 横浜藤よし伊豆店 静岡', label: '伊東市ふるさと納税・漁港直送の極上握りと相模灘を望む絶景かけ流し湯' }
    ]
  }
];

async function main() {
  const allSeasonalPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let allSeasonal = {};
  if (fs.existsSync(allSeasonalPath)) {
    try {
      allSeasonal = JSON.parse(fs.readFileSync(allSeasonalPath, 'utf8'));
    } catch (e) {
      console.error('Failed to parse all_seasonal_rakuten_hotels.json', e);
    }
  }

  for (const page of furusatoConfigs) {
    console.log(`\n================ Processing page: ${page.slug} ================`);
    if (!allSeasonal[page.slug]) {
      allSeasonal[page.slug] = {};
    }

    for (const q of page.queries) {
      console.log(`Fetching query: "${q.query}" (${q.label}) ...`);
      try {
        await sleep(1500);
        const hotels = await searchRakutenHotels(q.query, 3);
        if (hotels && hotels.length > 0) {
          allSeasonal[page.slug][q.key] = hotels[0];
          console.log(`  -> Selected: ${hotels[0].hotelName} (${hotels[0].hotelNo})`);
        } else {
          console.warn(`  -> No hotel found for query: ${q.query}`);
        }
      } catch (err) {
        console.error(`  -> Error fetching query "${q.query}":`, err.message);
      }
    }
  }

  fs.writeFileSync(allSeasonalPath, JSON.stringify(allSeasonal, null, 2), 'utf8');
  console.log('\nSuccessfully saved Round 68 hotel data to all_seasonal_rakuten_hotels.json!');
}

main();
