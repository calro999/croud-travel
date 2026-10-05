const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'tsunagi',
    label: '岩手・盛岡つなぎ温泉＆鶯宿温泉（小岩井農場イルミネーション銀河農場の夜と秀峰岩手山雪見露天・極上前沢牛＆雫石牛会席）',
    queries: [
      '盛岡つなぎ温泉 ホテル紫苑',
      '盛岡つなぎ温泉 湯守 ホテル大観',
      '盛岡つなぎ温泉 愛真館',
      '鶯宿温泉 長栄館',
      '鶯宿温泉 ホテル森の風 鶯宿'
    ],
    generalQuery: 'つなぎ温泉 露天風呂'
  },
  {
    theme: 'suwa',
    label: '長野・諏訪湖・上諏訪温泉（初冬諏訪湖一望露天と千人風呂・諏訪五蔵搾りたて新酒＆信州プレミアム牛・ワカサギ会席）',
    queries: [
      '上諏訪温泉 双泉の宿 朱白',
      '上諏訪温泉 浜の湯',
      '上諏訪温泉 ホテル紅や',
      '上諏訪温泉 ぬのはん',
      '萃sui-諏訪湖'
    ],
    generalQuery: '上諏訪温泉 露天風呂'
  },
  {
    theme: 'amakusa',
    label: '熊本・天草下田温泉＆松島温泉（東シナ海初冬サンセット露天と白鷺古湯・冬の伊勢海老＆天然車海老・天草とらふぐ会席）',
    queries: [
      '天草下田温泉 望洋閣',
      '天草 天空の船',
      '天草下田温泉 湯本荘',
      '石山離宮 五足のくつ',
      '海のやすらぎ ホテル竜宮'
    ],
    generalQuery: '天草 下田温泉'
  },
  {
    theme: 'unzen',
    label: '長崎・雲仙温泉（普賢岳初冬霧氷と雲仙地獄湯煙・白濁強酸性硫黄泉＆極上雲仙あかね牛・島原具雑煮会席）',
    queries: [
      '雲仙温泉 雲仙宮崎旅館',
      '雲仙温泉 旅亭 半水盧',
      '雲仙温泉 ゆやど 雲仙新湯',
      '雲仙温泉 雲仙福田屋',
      'Mt.Resort 雲仙九州ホテル'
    ],
    generalQuery: '雲仙温泉 露天風呂'
  },
  {
    theme: 'minakami',
    label: '群馬・みなかみ温泉郷（谷川岳初冠雪と利根川渓谷雪見露天風呂・極上上州牛ステーキ＆舞茸きのこ会席）',
    queries: [
      '水上温泉 源泉湯の宿 松乃井',
      '水上温泉 坐山 みなかみ',
      '谷川温泉 別邸 仙寿庵',
      '宝川温泉 汪泉閣',
      '水上温泉 水上館'
    ],
    generalQuery: '水上温泉 露天風呂'
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 63 (5 Themes, 11-12 Month Features)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\nFetching for theme: ${t.label} (${t.theme})`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      console.log(`- Query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 1);
        await sleep(1500); // 楽天APIレートリミット対策
        if (hotels && hotels.length > 0) {
          const h = hotels[0];
          if (!usedHotelNos.has(h.hotelNo)) {
            usedHotelNos.add(h.hotelNo);
            themeHotels.push(h);
            console.log(`  -> Found: ${h.hotelName} (No: ${h.hotelNo}, Rating: ${h.reviewAverage})`);
          }
        } else {
          console.warn(`  -> No exact match for "${q}"`);
        }
      } catch (err) {
        console.error(`  -> Error fetching "${q}":`, err.message);
      }
    }

    // 5件に満たない場合はgeneralQueryから補完
    if (themeHotels.length < 5) {
      console.log(`Only ${themeHotels.length} hotels found for ${t.theme}. Fetching additional from "${t.generalQuery}"...`);
      try {
        const additional = await searchRakutenHotels(t.generalQuery, 10);
        await sleep(1500);
        for (const h of additional) {
          if (!usedHotelNos.has(h.hotelNo)) {
            usedHotelNos.add(h.hotelNo);
            themeHotels.push(h);
            console.log(`  -> Added supplemental: ${h.hotelName} (No: ${h.hotelNo})`);
            if (themeHotels.length >= 5) break;
          }
        }
      } catch (err) {
        console.error(`  -> Error supplemental fetching:`, err.message);
      }
    }

    result[t.theme] = themeHotels.slice(0, 5);
    console.log(`Total hotels collected for ${t.theme}: ${result[t.theme].length}`);
  }

  const outputPath = path.join(__dirname, 'round63_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotels data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
