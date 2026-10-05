const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'yamagata_shonai_kandara',
    slug: 'winter-yamagata-shonai-kandara-atsumi-yunohama-stay',
    label: '山形・庄内（冬の日本海名物「寒鱈汁」白子・寒ブリ・出羽三山雪景色・湯野浜温泉＆あつみ温泉雪見露天）',
    queries: [
      'ＫＡＭＥＹＡ　ＨＯＴＥＬ',
      '温海温泉　たちばなや',
      '温海温泉　萬国屋',
      '湯野浜温泉　游水亭　いさごや',
      'ホテルリッチ＆ガーデン酒田'
    ]
  },
  {
    theme: 'fukui_wakasa_fugu',
    slug: 'winter-fukui-wakasa-fugu-tsuruga-echizen-crab-stay',
    label: '福井・若狭湾＆三方五湖（冬の味覚「若狭ふぐ」てっさ・てっちり・敦賀港越前がに・三方五湖寒うなぎ・海絶景温泉）',
    queries: [
      '若狭みかた　きらら温泉　水月花',
      '海香の宿　波華楼',
      '若狭美浜温泉　悠久乃碧　ホテル湾彩',
      '四季彩の宿　花椿',
      '敦賀マンテンホテル駅前'
    ]
  },
  {
    theme: 'hiroshima_miyajima_oyster',
    slug: 'winter-hiroshima-miyajima-etajima-oyster-onsen-stay',
    label: '広島・宮島＆江田島（冬の旬「広島牡蠣」焼き牡蠣・土手鍋・厳島神社初詣雪景色・穴子めし・江田島温泉）',
    queries: [
      '宮島グランドホテル　有もと',
      'みやじまの宿　岩惣',
      'えたじま温泉　江田島荘',
      '安芸グランドホテル',
      'ホテル宮島別荘'
    ]
  },
  {
    theme: 'shizuoka_hamanako_kanzanji',
    slug: 'winter-shizuoka-hamanako-kanzanji-torafugu-unagi-stay',
    label: '静岡・浜名湖＆舘山寺温泉（冬限定「遠州灘天然とらふぐ」・冬の浜名湖うなぎ・牡蠣カバ丼・三ヶ日みかん風呂とレイクビュー温泉）',
    queries: [
      'ホテル　ウェルシーズン浜名湖',
      '浜名湖かんざんじ温泉　ホテル鞠水亭',
      '三ヶ日温泉　浜名湖レークサイドプラザ',
      'ＴＨＥ　ＳＣＥＮＥ　ｈａｍａｎａｋｏ',
      'ホテルグリーンプラザ浜名湖'
    ]
  },
  {
    theme: 'hokkaido_shiretoko_abashiri',
    slug: 'winter-hokkaido-shiretoko-abashiri-onsen-crab-kinki-stay',
    label: '北海道・知床ウトロ＆網走（真冬のオホーツク海絶景・知床ウトロ温泉・極上知床牛・冬タラバガニ・毛ガニ・高級魚めんめ湯煮）',
    queries: [
      '北こぶし知床　ホテル＆リゾート',
      'ＫＩＫＩ知床　ナチュラルリゾート',
      'ウトロ温泉　知床第一ホテル',
      '北天の丘あばしり湖鶴雅リゾート',
      '網走湖畔温泉　ホテル網走湖荘'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 96 via Official Rakuten API');
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
            console.warn(`  -> Duplicate or not selected for query: ${q}`);
          }
        } else {
          console.warn(`  -> No results for query: ${q}`);
        }
      } catch (err) {
        console.error(`  -> Error fetching query: ${q}`, err.message);
      }
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels
    };
  }

  const outputPath = path.join(__dirname, 'round96_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nAll done! Saved ${Object.keys(result).length} themes to ${outputPath}`);
}

main().catch(console.error);
