const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'toyama_amaharashi_shinminato',
    slug: 'winter-toyama-amaharashi-shinminato-tateyama-crab-stay',
    label: '富山・雨晴海岸＆新湊（冬の富山湾越しの白銀立山連峰3000m・新湊「昼セリ」極上本ズワイガニ・寒ブリ・白えび・富山湾鮨）',
    queries: [
      '雨晴温泉　磯はなび',
      'リバーリトリート雅樂倶',
      'ホテルニューオータニ高岡',
      '天然温泉　富山　剱の湯　御宿　野乃',
      '第一イン新湊'
    ]
  },
  {
    theme: 'ishikawa_kanazawa_yuwaku',
    slug: 'winter-ishikawa-kanazawa-yuwaku-onsen-koubako-crab-stay',
    label: '石川・金沢 湯涌温泉＆兼六園（白銀の兼六園雪吊りライトアップ・奥金沢「湯涌温泉」の静寂湯・冬限定の極上「香箱ガニ」＆加能ガニ・治部煮）',
    queries: [
      '金沢湯涌温泉　百楽荘',
      '湯涌温泉　お宿　やました',
      '湯涌温泉　かなや',
      '湯涌温泉　湯の出旅館',
      '金沢辰巳亭'
    ]
  },
  {
    theme: 'gifu_hida_takayama',
    slug: 'winter-gifu-hida-takayama-onsen-snow-beef-stay',
    label: '岐阜・飛騨高山温泉（白銀に染まる古い町並み雪景色・名物飛騨牛にぎり＆すき焼き・冬限定「新酒しぼりたて地酒蔵めぐり」と雪見温泉）',
    queries: [
      '本陣平野屋　花兆庵',
      '本陣平野屋　別亭',
      '飛騨亭　花扇',
      '高山グリーンホテル',
      '宝生閣'
    ]
  },
  {
    theme: 'fukuoka_itoshima_hakata',
    slug: 'winter-fukuoka-itoshima-oyster-hakata-fugu-stay',
    label: '福岡・糸島＆博多（冬の風物詩「糸島カキ小屋めぐり」・玄界灘の天然とらふぐ・熱々博多もつ鍋＆水炊きと博多湾・玄界灘絶景ホテル＆温泉）',
    queries: [
      'ヒルトン福岡シーホーク',
      '都ホテル　博多',
      'ＴＨＥ　ＬＵＩＧＡＮＳ　Ｓｐａ＆Ｒｅｓｏｒｔ',
      'ホテルマリノアリゾート福岡',
      '天然温泉　袖湊の湯　ドーミーインＰＲＥＭＩＵＭ博多・キャナルシティ前'
    ]
  },
  {
    theme: 'hokkaido_tomamu_furano',
    slug: 'winter-hokkaido-tomamu-furano-ice-village-wagyu-stay',
    label: '北海道・トマム＆富良野（白銀のパウダースノー・氷の街「アイスヴィレッジ」＆霧氷テラス・極上富良野和牛とふらのチーズフォンデュ）',
    queries: [
      '星野リゾート　トマム　ザ・タワー',
      '星野リゾート　リゾナーレトマム',
      '新富良野プリンスホテル',
      '天然温泉　紫雲の湯　ラビスタ富良野ヒルズ',
      '富良野ナチュラクスホテル'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 95 via Official Rakuten API');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      if (themeHotels.length >= 5) break;
      console.log(`Query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 3);
        await sleep(1300); // 楽天APIレートリミット対策
        if (hotels && hotels.length > 0) {
          let selected = null;
          for (const h of hotels) {
            if (!usedHotelNos.has(h.hotelNo)) {
              selected = h;
              break;
            }
          }
          if (selected) {
            usedHotelNos.add(selected.hotelNo);
            themeHotels.push(selected);
            console.log(`  -> Success: ${selected.hotelName} (No: ${selected.hotelNo}, Rating: ${selected.reviewAverage}, Price: ¥${selected.hotelMinCharge})`);
          } else {
            console.warn(`  -> All results duplicate for "${q}"`);
          }
        } else {
          console.warn(`  -> No match for "${q}"`);
        }
      } catch (err) {
        console.error(`  -> Error fetching "${q}":`, err.message);
      }
    }

    // 5件に満たない場合の広域検索
    if (themeHotels.length < 5) {
      console.log(`Theme ${t.theme} has only ${themeHotels.length} hotels, performing broad search...`);
      const broadQueries = {
        toyama_amaharashi_shinminato: ['高岡 温泉 ホテル', '富山 温泉 ホテル', '新湊 ホテル', '氷見 温泉'],
        ishikawa_kanazawa_yuwaku: ['湯涌温泉', '金沢 温泉 旅館', '金沢 兼六園 ホテル', '金沢 旅館'],
        gifu_hida_takayama: ['飛騨高山 温泉 旅館', '高山 旅館', '飛騨高山 ホテル'],
        fukuoka_itoshima_hakata: ['糸島 ホテル', '博多 温泉 ホテル', '福岡 リゾート ホテル'],
        hokkaido_tomamu_furano: ['富良野 温泉 ホテル', 'トマム リゾート', '南富良野 ホテル', '富良野 リゾート']
      };

      for (const bq of broadQueries[t.theme] || []) {
        if (themeHotels.length >= 5) break;
        console.log(`Broad Query: "${bq}"...`);
        try {
          const hotels = await searchRakutenHotels(bq, 5);
          await sleep(1300);
          if (hotels && hotels.length > 0) {
            for (const h of hotels) {
              if (themeHotels.length >= 5) break;
              if (!usedHotelNos.has(h.hotelNo)) {
                usedHotelNos.add(h.hotelNo);
                themeHotels.push(h);
                console.log(`  -> Broad Success: ${h.hotelName} (No: ${h.hotelNo})`);
              }
            }
          }
        } catch (err) {
          console.error(`  -> Error broad fetching "${bq}":`, err.message);
        }
      }
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels
    };
  }

  const outPath = path.join(__dirname, 'round95_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSaved Round 95 hotel data to ${outPath}`);
}

main().catch(console.error);
