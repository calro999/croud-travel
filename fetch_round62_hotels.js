const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'hakodate',
    label: '北海道・函館湯の川温泉（津軽海峡初冬の漁火インフィニティ露天と函館クリスマスファンタジー・朝市直送冬イカ＆毛蟹海鮮会席）',
    queries: [
      '湯の川温泉 湯の川プリンスホテル渚亭',
      '望楼NOGUCHI函館',
      '割烹旅館 若松 函館',
      'HAKODATE 海峡の風',
      '湯の川温泉 平成館 しおさい亭'
    ],
    generalQuery: '湯の川温泉 露天風呂'
  },
  {
    theme: 'tendo',
    label: '山形・天童温泉（将棋の駒の里と初冬雪見露天・11月12月旬ラフランス＆A5山形牛すき焼き会席）',
    queries: [
      '天童温泉 ほほえみの宿 滝の湯',
      '天童温泉 天童荘',
      '天童ホテル 美味求真の宿',
      '天童温泉 湯の香 松の湯',
      '天童温泉 栄屋ホテル'
    ],
    generalQuery: '天童温泉 露天風呂'
  },
  {
    theme: 'yamanaka',
    label: '石川・加賀山中温泉（鶴仙渓初冬雪景色と芭蕉ゆかりの美肌湯・11月解禁青タグ加能ガニ＆能登牛会席）',
    queries: [
      '山中温泉 吉祥やまなか',
      '山中温泉 かがり吉祥亭',
      '山中温泉 花紫',
      '山中温泉 厨八十八',
      '山中温泉 みやこわすれの宿 こおろぎ楼'
    ],
    generalQuery: '山中温泉 露天風呂'
  },
  {
    theme: 'bandaiatami',
    label: '福島・磐梯熱海温泉（萩姫伝説の美肌ぬる湯名湯と猪苗代湖白鳥飛来・極上福島牛＆会津初冬新酒地酒）',
    queries: [
      '磐梯熱海温泉 ホテル華の湯',
      '磐梯熱海温泉 湯のやど 萩姫',
      '磐梯熱海温泉 離れの宿 よもぎ埜',
      '四季彩 一力 磐梯熱海',
      '磐梯熱海温泉 守田屋'
    ],
    generalQuery: '磐梯熱海温泉 露天風呂'
  },
  {
    theme: 'takeo',
    label: '佐賀・武雄温泉（辰野金吾設計の朱塗り楼門と1300年美肌古湯・御船山初冬風情＆最高峰A5佐賀牛会席）',
    queries: [
      '武雄温泉 御宿 竹林亭',
      '御船山楽園ホテル 武雄温泉',
      '武雄温泉 懐石宿 扇屋',
      '武雄温泉 ホテル春慶屋',
      '武雄温泉 京都屋'
    ],
    generalQuery: '武雄温泉 露天風呂'
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 62 (5 Themes, 11-12 Month Features)');
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

  const outputPath = path.join(__dirname, 'round62_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotels data to ${outputPath}`);
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
