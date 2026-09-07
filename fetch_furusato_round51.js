const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-scenic-coasts-stay',
    queries: [
      { query: '福井 坂井 あわら温泉 東尋坊 まつや千千', fallback: '北陸　あわら温泉　まつや千千', key: 'coast_tojinbo', label: '福井県坂井市・あわら市ふるさと納税・日本海の荒波が削り出した柱状節理の奇勝「東尋坊」あわら温泉まつや千千' },
      { query: '岩手 宮古 浄土ヶ浜 温泉 旅館', fallback: '浄土ヶ浜パークホテル', key: 'coast_jodogahama', label: '岩手県宮古市ふるさと納税・極楽浄土の如き白き奇岩とエメラルドの海「三陸・浄土ヶ浜」浄土ヶ浜パークホテル' },
      { query: '和歌山 白浜 白良浜 温泉 ホテル 白浜古賀の井', fallback: 'ホテル三楽荘', key: 'coast_shirahama', label: '和歌山県白浜町ふるさと納税・白砂青松とエメラルドグリーンの遠浅海岸「南紀白浜・白良浜」全室海景ホテル三楽荘' }
    ]
  },
  {
    slug: 'furusato-tax-three-famous-waterfalls-healing-stay',
    queries: [
      { query: '静岡 富士宮 白糸の滝 温泉 休暇村富士', fallback: '休暇村　富士', key: 'fall_shiraito', label: '静岡県富士宮市ふるさと納税・富士山の伏流水が幾筋もの絹糸となって流れ落ちる「白糸の滝」田貫湖畔休暇村富士' },
      { query: '群馬 沼田 吹割の滝 老神温泉 旅館 仙郷', fallback: '老神温泉　仙郷', key: 'fall_fukiware', label: '群馬県沼田市ふるさと納税・東洋のナイアガラと称される大迫力の瀑布「吹割の滝」老神温泉仙郷' },
      { query: '兵庫 宍粟 原不動滝 温泉 旅館', fallback: '波賀温泉　楓湯　ホテルはが', key: 'fall_harafudo', label: '兵庫県宍粟市ふるさと納税・日本の滝百選・原生林の岩肌を滑り落ちる清冽な名瀑「原不動滝」宍粟温泉ステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-hotsprings-luxury-villas-stay',
    queries: [
      { query: '草津温泉 離れ 露天風呂 つつじ亭', fallback: '草津温泉　つつじ亭', key: 'villa_kusatsu', label: '群馬県草津町ふるさと納税・五千坪の敷地にわずか十室・名湯草津の最高峰離れ「草津温泉 つつじ亭」' },
      { query: '有馬温泉 離れ 客室露天 中の坊 瑞苑', fallback: '有馬温泉　中の坊　瑞苑', key: 'villa_arima', label: '兵庫県神戸市ふるさと納税・十三歳未満お断りの大人の隠れ家・金泉銀泉「有馬温泉 中の坊瑞苑」' },
      { query: '下呂温泉 露天風呂 離れ 水明館 臨川閣', fallback: '下呂温泉　水明館', key: 'villa_gero', label: '岐阜県下呂市ふるさと納税・飛騨川のせせらぎと最高級の客室露天「下呂温泉 水明館（臨川閣）」' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-tea-plantations-stay',
    queries: [
      { query: '静岡 牧之原 焼津 温泉 ホテル 松風閣', fallback: '焼津温泉　ホテルアンビア松風閣', key: 'tea_shizuoka', label: '静岡県牧之原市・焼津市ふるさと納税・日本一の大茶園と富士山パノラマ「牧之原大茶園」ホテルアンビア松風閣' },
      { query: '京都 宇治 茶 旅館 花やしき浮舟園', fallback: '花やしき浮舟園', key: 'tea_uji', label: '京都府宇治市ふるさと納税・宇治川のせせらぎと最高峰の抹茶文化「宇治茶の里」花やしき浮舟園' },
      { query: '福岡 八女 温泉 旅館 くつろぎの森 グリーンピア八女', fallback: 'くつろぎの森　グリーンピア八女', key: 'tea_yame', label: '福岡県八女市ふるさと納税・奥八女の清流と玉露の日本一の里「八女中央大茶園」くつろぎの森グリーンピア八女' }
    ]
  }
];

async function main() {
  const dbPath = path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json');
  let db = {};
  if (fs.existsSync(dbPath)) {
    db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  }

  const collected = {};

  for (const group of configs) {
    console.log(`\n========================================`);
    console.log(`Processing Group: ${group.slug}`);
    console.log(`========================================`);

    for (const q of group.queries) {
      console.log(`Searching for: "${q.query}" (key: ${q.key})...`);
      await sleep(3500);
      let list = [];
      try {
        list = await searchRakutenHotels(q.query, 3);
      } catch (err) {
        console.error(`Error searching "${q.query}":`, err.message);
      }

      if (!list || list.length === 0) {
        console.log(`Falling back to: "${q.fallback}"...`);
        await sleep(3500);
        try {
          list = await searchRakutenHotels(q.fallback, 3);
        } catch (err) {
          console.error(`Fallback error:`, err.message);
        }
      }

      if (list && list.length > 0) {
        const primary = list[0];
        console.log(` -> Found: [${primary.hotelName}] Price: ¥${primary.minPrice || primary.hotelMinCharge} Rating: ${primary.reviewAverage}`);
        collected[q.key] = {
          hotelNo: primary.hotelNo,
          hotelName: primary.hotelName,
          hotelInformationUrl: primary.hotelInformationUrl,
          planListUrl: primary.planListUrl,
          dpPlanListUrl: primary.dpPlanListUrl,
          reviewUrl: primary.reviewUrl,
          hotelKanaName: primary.hotelKanaName,
          hotelSpecial: primary.hotelSpecial,
          hotelMinCharge: primary.hotelMinCharge || primary.minPrice,
          latitude: primary.latitude,
          longitude: primary.longitude,
          postalCode: primary.postalCode,
          address1: primary.address1,
          address2: primary.address2,
          telephoneNo: primary.telephoneNo,
          hotelImageUrl: primary.hotelImageUrl,
          roomImageUrl: primary.roomImageUrl,
          reviewCount: primary.reviewCount,
          reviewAverage: primary.reviewAverage,
          userReview: primary.userReview,
          affiliateUrl: primary.affiliateUrl,
          access: primary.access || '最寄り駅・主要道路よりアクセス良好',
          label: q.label
        };
        db[q.key] = collected[q.key];
      } else {
        console.warn(`WARNING: No hotel found for ${q.key}`);
      }
    }
  }

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  fs.writeFileSync(path.join(__dirname, 'round51_hotels.json'), JSON.stringify(collected, null, 2), 'utf8');
  console.log(`\nSuccessfully saved Round 51 hotels to ${dbPath} and round51_hotels.json!`);
}

main();
