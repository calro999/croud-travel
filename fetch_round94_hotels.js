const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'iwate_sanriku_kotatsu_train',
    slug: 'winter-iwate-sanriku-kotatsu-train-kaisen-stay',
    label: '岩手・三陸沿岸（三陸鉄道こたつ列車・浄土ヶ浜雪景色・名物瓶ドン＆三陸毛ガニ・あわび）',
    queries: [
      '浄土ヶ浜パークホテル',
      'ホテルフォルクローロ三陸釜石',
      '大船渡温泉',
      'ホテル羅賀荘',
      '休暇村　陸中宮古'
    ]
  },
  {
    theme: 'akita_moriyoshi_ani',
    slug: 'winter-akita-moriyoshi-ani-snow-monster-matagi-stay',
    label: '秋田・森吉山 阿仁温泉（日本三大樹氷スノーモンスター・秋田内陸線雪景色・比内地鶏きりたんぽ鍋＆マタギ秘湯）',
    queries: [
      '打当温泉　マタギの湯',
      '森吉山荘',
      '阿仁川あゆっこ温泉',
      'ホテルフォレストプラザ',
      '大湯温泉　花心の宿　姫の湯'
    ]
  },
  {
    theme: 'niigata_sado_island',
    slug: 'winter-niigata-sado-island-kanburi-crab-snow-stay',
    label: '新潟・佐渡島（冬の王者佐渡寒ブリ・活本ズワイガニ・雪化粧の佐渡金山＆佐渡温泉めぐり）',
    queries: [
      '佐渡リゾートホテル吾妻',
      '国際佐渡観光ホテル　八幡館',
      '夕日と湖を望む宿　あおきや',
      'ホテルニュー桂',
      'Ryokan　浦島'
    ]
  },
  {
    theme: 'nara_dorogawa_onsen',
    slug: 'winter-nara-dorogawa-onsen-snow-botannabe-stay',
    label: '奈良・大峰山麓 洞川温泉（雪化粧の提灯灯る木造行者宿・名物ぼたん鍋＆名水とうふ・大和牛）',
    queries: [
      '洞川温泉　角甚',
      '洞川温泉　花屋徳兵衛',
      '洞川温泉　光緑園西清',
      '洞川温泉　さら徳旅館',
      '洞川温泉　あたらしや旅館'
    ]
  },
  {
    theme: 'kyoto_kifune_kurama',
    slug: 'winter-kyoto-kifune-kurama-snow-lightup-botannabe-stay',
    label: '京都・洛北 貴船・鞍馬（白銀の貴船神社積雪ライトアップ・極上天然猪肉ぼたん鍋＆京都牛）',
    queries: [
      '貴船ふじや',
      '料理旅館　右源太',
      '貴船　ひろや',
      '京都・貴船　すずや',
      'くらま温泉'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 94 via Official Rakuten API');
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

    // 5件に満たない場合のフォールバック（広域検索）
    if (themeHotels.length < 5) {
      console.log(`Theme ${t.theme} has only ${themeHotels.length} hotels, performing broad search...`);
      const broadQueries = {
        iwate_sanriku_kotatsu_train: ['三陸 温泉 ホテル', '宮古 ホテル', '釜石 ホテル'],
        akita_moriyoshi_ani: ['秋田 森吉山 温泉', '阿仁 温泉', '鷹巣 ホテル', '北秋田 温泉'],
        niigata_sado_island: ['佐渡 温泉', '佐渡 ホテル', '両津温泉'],
        nara_dorogawa_onsen: ['洞川温泉', '天川村 温泉', '吉野 温泉 ホテル'],
        kyoto_kifune_kurama: ['貴船 旅館', '鞍馬 旅館', '京都 洛北 旅館', '八瀬 温泉']
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

  const outPath = path.join(__dirname, 'round94_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSaved Round 94 hotel data to ${outPath}`);
}

main().catch(console.error);
