const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'kurokawa',
    label: '熊本・黒川温泉（湯あかり竹灯籠と渓流露天・阿蘇あか牛と肥後会席）',
    queries: ['黒川温泉 優彩', '黒川温泉 やまびこ旅館', '黒川温泉 奥の湯', '黒川温泉 ふもと旅館', '黒川温泉 瀬の本高原ホテル'],
    generalQuery: '黒川温泉 露天風呂'
  },
  {
    theme: 'noboribetsu',
    label: '北海道・登別温泉（白銀の地獄谷と9大泉質・冬の毛ガニ＆白老牛会席）',
    queries: ['登別温泉 第一滝本館', '登別温泉 ホテルまほろば', '登別温泉 望楼NOGUCHI登別', '登別温泉 登別グランドホテル', '登別温泉 花鐘亭はなや'],
    generalQuery: '登別温泉 露天風呂'
  },
  {
    theme: 'yuzawa',
    label: '新潟・越後湯沢温泉（川端康成雪国情緒・南魚沼新米コシヒカリと地酒風呂）',
    queries: ['越後湯沢温泉 雪国の宿 高半', '越後湯沢温泉 松泉閣 花月', '越後湯沢温泉 ホテル双葉', '越後湯沢温泉 湯沢グランドホテル', '越後湯沢温泉 越後のお宿 いなもと'],
    generalQuery: '越後湯沢温泉 露天風呂'
  },
  {
    theme: 'arima',
    label: '兵庫・有馬温泉（日本最古の金泉銀泉・最高峰神戸牛会席と六甲山夜景）',
    queries: ['有馬温泉 兵衛向陽閣', '有馬温泉 陶泉 御所坊', '有馬温泉 兆楽', '有馬温泉 月光園 鴻朧館', '有馬温泉 有馬グランドホテル'],
    generalQuery: '有馬温泉 露天風呂'
  },
  {
    theme: 'kaga',
    label: '石川・加賀温泉郷（山代山中名湯・11月解禁加能ガニ香箱ガニと九谷焼会席）',
    queries: ['山代温泉 ゆのくに天祥', '山代温泉 あらや滔々庵', '山代温泉 葉渡莉', '山中温泉 花紫', '山中温泉 かがり吉祥亭'],
    generalQuery: '加賀温泉郷 露天風呂'
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 57 (5 Themes, 11-12 Month Features)');
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

  const outputPath = path.join(__dirname, 'round57_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotels data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
