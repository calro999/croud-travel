const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'ikaho',
    label: '群馬・伊香保温泉（石段街と黄金の湯・白銀の湯・上州牛会席）',
    queries: ['伊香保温泉 木暮', '伊香保温泉 福一', '伊香保温泉 岸権旅館', '伊香保温泉 ひびき野', '伊香保温泉 千明仁泉亭'],
    generalQuery: '伊香保温泉 露天風呂'
  },
  {
    theme: 'shuzenji',
    label: '静岡・修善寺温泉（伊豆の小京都・晩秋紅葉と竹林の小径・名湯宿）',
    queries: ['修善寺温泉 菊屋', '修善寺温泉 宙 SORA', '修善寺温泉 〇久', '修善寺温泉 桂川', '修善寺温泉 柳生の庄'],
    generalQuery: '修善寺温泉 露天風呂'
  },
  {
    theme: 'dogo',
    label: '愛媛・道後温泉（日本最古の名湯・冬の真鯛鯛めし＆伊予牛会席）',
    queries: ['道後温泉 ふなや', '道後温泉 道後舘', '道後温泉 大和屋本店', '道後温泉 道後御湯', '道後温泉 茶玻瑠'],
    generalQuery: '道後温泉 露天風呂'
  },
  {
    theme: 'higashiyama',
    label: '福島・会津東山温泉（雪化粧の渓谷露天・会津郷土料理と名酒の宿）',
    queries: ['会津東山温泉 向瀧', '会津東山温泉 御宿 東鳳', '会津東山温泉 庄助の宿 瀧の湯', '会津東山温泉 原瀧', '会津東山温泉 今昔亭'],
    generalQuery: '会津東山温泉 露天風呂'
  },
  {
    theme: 'isawa',
    label: '山梨・石和温泉（山梨新酒ワインと美肌名湯・甲州牛＆ほうとうの宿）',
    queries: ['石和温泉 慶山', '石和温泉 かげつ', '石和温泉 糸柳', '石和温泉 富士野屋', '石和温泉 ホテル甲子園'],
    generalQuery: '石和温泉 露天風呂'
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 56 (5 Themes, 11-12 Month Features)');
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

  const outputPath = path.join(__dirname, 'round56_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotels data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
