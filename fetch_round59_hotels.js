const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'kinugawa',
    label: '栃木・鬼怒川温泉（渓谷の初冬絶景と美肌名湯・とちぎ和牛＆湯波会席）',
    queries: [
      '鬼怒川金谷ホテル',
      '鬼怒川温泉 あさや',
      '鬼怒川温泉 山楽',
      '静寂とまごころの宿 七重八重',
      '鬼怒川プラザホテル'
    ],
    generalQuery: '鬼怒川温泉 露天風呂'
  },
  {
    theme: 'akiu',
    label: '宮城・秋保温泉（名取川渓谷と伊達政宗公ゆかりの湯・A5仙台牛＆名物せり鍋）',
    queries: [
      '伝承千年の宿 佐勘',
      '秋保温泉 ホテル瑞鳳',
      '茶寮宗園',
      '篝火の湯 緑水亭',
      '秋保グランドホテル'
    ],
    generalQuery: '秋保温泉 露天風呂'
  },
  {
    theme: 'shirahama',
    label: '和歌山・南紀白浜温泉（太平洋夕陽と日本三古湯・幻の紀州本クエ鍋＆熊野牛）',
    queries: [
      'ホテル川久',
      '浜千鳥の湯 海舟',
      '白浜古賀の井リゾート＆スパ',
      '白良荘グランドホテル',
      '紀州・白浜温泉 むさし'
    ],
    generalQuery: '南紀白浜 温泉 露天風呂'
  },
  {
    theme: 'kaike',
    label: '鳥取・皆生温泉（大山雪景色と日本海美肌塩湯・11月解禁境港活松葉ガニ＆鳥取和牛）',
    queries: [
      '皆生游月',
      '皆生温泉 華水亭',
      '皆生 菊乃家',
      '皆生温泉 湯喜望 白扇',
      '皆生つるや'
    ],
    generalQuery: '皆生温泉 カニ 露天風呂'
  },
  {
    theme: 'ureshino',
    label: '佐賀・嬉野温泉（日本三大美肌の湯とうれしの茶・冬名物とろける温泉湯豆腐＆佐賀牛）',
    queries: [
      '嬉野温泉 和多屋別荘',
      '嬉野温泉 大正屋',
      '茶心の宿 和楽園',
      '嬉野温泉 椎葉山荘',
      'ハミルトン宇礼志野'
    ],
    generalQuery: '嬉野温泉 露天風呂'
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 59 (5 Themes, 11-12 Month Features)');
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
        await sleep(1500); // 厳守: 楽天APIレート制限対策
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

  const outputPath = path.join(__dirname, 'round59_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotels data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
