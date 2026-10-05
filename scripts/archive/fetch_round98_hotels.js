const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'ibaraki_oarai_nakaminato',
    slug: 'winter-ibaraki-oarai-nakaminato-ankou-sunrise-stay',
    label: '茨城・大洗＆那珂湊（大洗磯前神社「神磯の鳥居」初日の出・冬の極上「大洗あんこう鍋（どぶ汁）」・那珂湊市場買い出し・大洗温泉）',
    queries: [
      '大洗ホテル',
      '大洗パークホテル',
      '里海邸',
      '割烹旅館　魚来庵',
      '亀の井ホテル　大洗',
      'シーサイドホテルかもめ'
    ]
  },
  {
    theme: 'yamanashi_yamanakako_oshino',
    slug: 'winter-yamanashi-yamanakako-oshino-diamond-fuji-houtou-stay',
    label: '山梨・山中湖＆忍野八海（冬の澄天「ダイヤモンド富士」・紅富士・雪化粧の忍野八海・熱々「甲州ほうとう鍋」＆富士見温泉宿）',
    queries: [
      '富士マリオットホテル山中湖',
      'ホテルマウント富士',
      '富士クラシックホテル',
      '山中湖　秀山荘',
      'レイクランドホテル　みづのさと',
      '花咲く都の大人の隠れ宿　多喜荘'
    ]
  },
  {
    theme: 'nagano_kisoji_narai_tsumago',
    slug: 'winter-nagano-kisoji-narai-tsumago-snow-toujisoba-stay',
    label: '長野・木曽路（中山道奈良井宿・妻籠宿の雪景色格子戸・冬の郷土味覚「投じ蕎麦・すんき鍋」・木曽牛＆木曽温泉郷）',
    queries: [
      'ＢＹＡＫＵ　Ｎａｒａｉ',
      '木曽路の宿　いわや',
      'ホテル木曽路',
      '木曽駒高原ホテル',
      '棧温泉旅館',
      '自由旅クラブ　木曽三河家'
    ]
  },
  {
    theme: 'kyoto_ine_funaya_miyazu',
    slug: 'winter-kyoto-ine-funaya-ineburi-shabu-miyazu-stay',
    label: '京都・伊根の舟屋＆天橋立北（雪化粧の伊根湾「伊根の舟屋」・日本三大寒ブリ「伊根ブリしゃぶしゃぶ」・宮津温泉＆冬の天橋立雪景色）',
    queries: [
      '油屋別館　和亭',
      '奧伊根温泉　油屋本館',
      '天橋立温泉　ホテル丹後王国',
      '玄妙庵',
      '天橋立ホテル',
      'ホテル＆リゾーツ　京都　宮津'
    ]
  },
  {
    theme: 'nagasaki_sasebo_kujukushima',
    slug: 'winter-nagasaki-sasebo-kujukushima-oyster-illumination-stay',
    label: '長崎・佐世保＆九十九島（冬の味覚「九十九島かき」焼き牡蠣小屋・世界最大1300万球「ハウステンボス光の王国」・佐世保名物＆九十九島リゾート温泉）',
    queries: [
      'ホテルオークラＪＲハウステンボス',
      'ホテルヨーロッパ',
      '九十九島ベイサイドホテル＆リゾート　フラッグス',
      '弓張の丘ホテル',
      'ホテル日航ハウステンボス',
      'ウォーターマークホテル長崎・ハウステンボス'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 98 via Official Rakuten API');
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

  const outputPath = path.join(__dirname, 'round98_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nAll done! Saved ${Object.keys(result).length} themes to ${outputPath}`);
}

main().catch(console.error);
