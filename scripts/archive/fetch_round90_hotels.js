const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'wakayama_kawayu_yunomine',
    label: '和歌山・熊野本宮 川湯温泉＆湯の峰温泉（冬の風物詩・大塔川仙人風呂オープンと世界遺産つぼ湯・熊野牛会席＆名物温泉粥）',
    queries: [
      '川湯温泉　冨士屋',
      '川湯温泉　山水館　川湯みどりや',
      '旅館あづまや　＜和歌山県＞',
      '湯の峰温泉　　湯の峯荘',
      'わたらせ温泉　ホテルささゆり'
    ]
  },
  {
    theme: 'akita_oyasukyo_akinomiya',
    label: '秋田・湯沢市 小安峡温泉＆秋の宮温泉郷（白い湯煙の大噴湯と渓谷初雪・秋田最古の湯・極上皆瀬牛ステーキ＆本場三関せり鍋・稲庭うどん）',
    queries: [
      '秋の宮温泉郷　湯けむりの宿　稲住温泉（共立リゾート）',
      '小安峡温泉　旅館　多郎兵衛',
      '小安峡温泉　湯の宿　元湯くらぶ',
      '秋の宮温泉郷　鷹の湯温泉',
      '小安峡温泉のお宿　秋仙'
    ]
  },
  {
    theme: 'saga_furuyu_kumanokawa',
    label: '佐賀・富士町 古湯温泉＆熊の川温泉（ぬる湯の聖地・嘉瀬川渓谷美と温冷交互浴・極上佐賀牛すき焼き＆三瀬鶏炭火焼き・斎藤茂吉ゆかり）',
    queries: [
      '古湯温泉　ＯＮＣＲＩ　／　おんくり',
      '古湯温泉　旅館　大和屋',
      '古湯温泉　旅館　杉乃家',
      '古湯温泉　鶴の恩返し　よみがえりの宿　鶴霊泉',
      '古湯温泉　扇屋'
    ]
  },
  {
    theme: 'gunma_oigami',
    label: '群馬・沼田 老神温泉＆吹割の滝（赤城山北麓・初冬の片品渓谷美と美肌単純硫黄泉・極上上州牛すき焼き＆上州麦豚・手打ち十割蕎麦）',
    queries: [
      '群馬県・老神温泉　仙郷',
      '老神温泉　吟松亭　あわしま',
      '老神温泉　源泉湯の宿　紫翠亭',
      '老神温泉　伍楼閣',
      '老神温泉　源泉かけ流しの宿　金龍園'
    ]
  },
  {
    theme: 'shizuoka_umegashima',
    label: '静岡・オクシズ 梅ヶ島温泉郷（駿府の隠し湯・南アルプス前衛峰の静寂と開湯1700年超濃厚とろとろ硫黄泉・駿河軍鶏鍋＆しずおか和牛・本わさび）',
    queries: [
      'いにしえの宿　梅ヶ島温泉泉屋旅館',
      '梅ヶ島温泉　清香旅館',
      '梅ヶ島温泉ホテル　梅薫楼（ばいくんろう）',
      '梅ヶ島温泉　おもいでの宿　湯の島館',
      '梅ヶ島温泉　旅館いちかわ'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 90 via Official Rakuten API');
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
        console.error(`  -> Error querying "${q}":`, err.message);
      }
    }

    result[t.theme] = themeHotels;
    console.log(`Finished theme ${t.theme}: total ${themeHotels.length} hotels obtained.`);
  }

  const outputPath = path.join(__dirname, 'round90_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\n================================================================`);
  console.log(`Successfully saved refined hotel data to ${outputPath}`);
  console.log(`================================================================`);
}

main().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
