const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const configs = [
  {
    slug: 'furusato-tax-three-great-capes-ocean-panorama-stay',
    queries: [
      { query: '知床 羅臼 温泉 旅館 知床岬', fallback: '知床第一ホテル', key: 'cape_shiretoko', label: '北海道斜里町・羅臼町ふるさと納税・世界自然遺産の最果て野生の王国「知床岬」知床第一ホテル' },
      { query: '能登 珠洲 禄剛埼 温泉 旅館', fallback: '珠洲温泉　のとじ荘', key: 'cape_noto', label: '石川県珠洲市ふるさと納税・日本の中心から見晴らす白亜の灯台「能登半島・禄剛崎」珠洲温泉のとじ荘' },
      { query: '屋久島 リゾート ホテル ヴィラ 佐多岬', fallback: 'ｓａｎｋａｒａ　ｈｏｔｅｌ＆ｓｐａ　屋久島', key: 'cape_satamisaki', label: '鹿児島県南大隅町・指宿市ふるさと納税・本州最南端エメラルドブルーの海「佐多岬」絶景ラグジュアリーステイ' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-ancient-lakes-resort-stay',
    queries: [
      { query: '琵琶湖 大津 温泉 ホテル びわ湖花街道', fallback: '雄琴温泉　びわ湖花街道', key: 'lake_biwa', label: '滋賀県大津市ふるさと納税・400万年の時を刻む日本最大の古代湖「琵琶湖」おごと温泉びわ湖花街道' },
      { query: '諏訪 上諏訪温泉 諏訪湖 ホテル 親湯', fallback: '神秘なる諏訪湖に想いを馳せる　上諏訪温泉　親湯', key: 'lake_suwa', label: '長野県諏訪市ふるさと納税・神話息づく神秘の古代湖「諏訪湖」上諏訪温泉親湯' },
      { query: '三方五湖 若狭 温泉 旅館 水月湖', fallback: '若狭みかた　きらら温泉　水月花', key: 'lake_mikatagoko', label: '福井県若狭町ふるさと納税・年縞が刻む奇跡の地球史「三方五湖・水月湖」若狭きらら温泉水月花' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-bamboo-groves-stay',
    queries: [
      { query: '京都 嵐山 嵯峨野 温泉 旅館 渡月亭', fallback: '京都　嵐山温泉　渡月亭', key: 'bamboo_arashiyama', label: '京都府京都市ふるさと納税・幽玄の竹音に癒やされる平安の風情「嵯峨野・竹林の小径」嵐山温泉渡月亭' },
      { query: '鎌倉 報国寺 ホテル 旅館 パークホテル', fallback: '鎌倉パークホテル', key: 'bamboo_kamakura', label: '神奈川県鎌倉市ふるさと納税・千本の孟宗竹が包む静寂の古刹「報国寺（竹の寺）」鎌倉パークホテル' },
      { query: '鹿児島 さつま町 温泉 旅館 竹林', fallback: '手塚旅館', key: 'bamboo_satsuma', label: '鹿児島県さつま町ふるさと納税・日本屈指の竹林面積と清流ホタルの里「さつま町宮之城温泉」手塚旅館' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-calderas-geopark-stay',
    queries: [
      { query: '阿蘇 カルデラ 温泉 ホテル 阿蘇プラザホテル', fallback: '阿蘇内牧温泉　阿蘇プラザホテル', key: 'caldera_aso', label: '熊本県阿蘇市ふるさと納税・世界屈指の巨大カルデラと大草原「阿蘇カルデラ」阿蘇内牧温泉阿蘇プラザホテル' },
      { query: '箱根 芦ノ湖 カルデラ 温泉 旅館 白石館', fallback: '箱根・芦ノ湖　はなをり', key: 'caldera_hakone', label: '神奈川県箱根町ふるさと納税・複合成層カルデラと霊峰富士の絶景「箱根カルデラ」芦ノ湖はなをり' },
      { query: '屈斜路湖 摩周湖 カルデラ 温泉 ホテル', fallback: '屈斜路プリンスホテル', key: 'caldera_kussharo', label: '北海道弟子屈町ふるさと納税・日本最大のカルデラ湖と雲海摩周ブルー「屈斜路・摩周カルデラ」屈斜路プリンスホテル' }
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
      await sleep(3000);
      let list = [];
      try {
        list = await searchRakutenHotels(q.query, 3);
      } catch (err) {
        console.error(`Error searching "${q.query}":`, err.message);
      }

      if (!list || list.length === 0) {
        console.log(`Falling back to: "${q.fallback}"...`);
        await sleep(3000);
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
          access: primary.access || '最寄り駅・主要ICよりアクセス良好',
          label: q.label
        };
        db[q.key] = collected[q.key];
      } else {
        console.warn(`WARNING: No hotel found for ${q.key}`);
      }
    }
  }

  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf8');
  fs.writeFileSync(path.join(__dirname, 'round48_hotels.json'), JSON.stringify(collected, null, 2), 'utf8');
  console.log(`\nSuccessfully saved Round 48 hotels to ${dbPath} and round48_hotels.json!`);
}

main();
