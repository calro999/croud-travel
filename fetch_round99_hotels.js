const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'aomori_hachinohe_kabushima',
    slug: 'winter-aomori-hachinohe-kabushima-ginsaba-senbeijiru-stay',
    label: '青森・八戸＆蕪島・種差海岸（冬の極上「八戸前沖銀鯖」＆本場「八戸せんべい汁」・八食センター七輪村買い出し＆蕪島神社初詣・太平洋一望の八戸名宿）',
    queries: [
      '天然温泉 南部の湯 ドーミーイン本八戸',
      'ダイワロイネットホテル八戸',
      'グランドサンピア八戸',
      '八戸グランドホテル',
      'コンフォートホテル八戸',
      'ホテルルートイン本八戸駅前'
    ]
  },
  {
    theme: 'tochigi_ashikaga_flowerpark',
    slug: 'winter-tochigi-ashikaga-flowerpark-sano-yakuyoke-stay',
    label: '栃木・足利＆佐野（日本一の光の祭典「あしかがフラワーパーク光の花の庭」500万球・佐野厄除け大師初詣＆手打ち佐野ラーメン・冬のとちおとめ苺ステイ宿）',
    queries: [
      'カンデオホテルズ佐野',
      'ニューミヤコホテル足利本館',
      'ホテルルートイン佐野藤岡インター',
      'ホテルサンルート佐野',
      'ホテルルートイン第２足利',
      'チサンイン佐野藤岡インター'
    ]
  },
  {
    theme: 'shizuoka_sumatakyo_onsen',
    slug: 'winter-shizuoka-sumatakyo-onsen-yumenotsuribashi-bijin-jibier-stay',
    label: '静岡・寸又峡温泉＆大井川（南アルプス秘境「夢の吊橋」冬のコバルトブルー・とろとろ美女づくりの湯＆冬の猪鍋・大井川鐵道名湯宿）',
    queries: [
      '寸又峡温泉 翠紅苑',
      '寸又峡温泉 湯屋飛龍の宿',
      '川根温泉ホテル',
      '寸又峡温泉 光山荘',
      '接岨峡温泉 森林露天風呂の宿 てがら奈',
      'ペンション さくら 寸又峡'
    ]
  },
  {
    theme: 'kochi_muroto_daruma',
    slug: 'winter-kochi-muroto-daruma-sunrise-kinmedai-deepsea-stay',
    label: '高知・室戸岬＆北川村（太平洋の奇跡「だるま朝日・だるま夕日」と冬の極上「室戸キンメダイ」・御厨人窟初日の出＆海洋深層水リゾート宿）',
    queries: [
      'ホテル明星 室戸',
      'ホテルなはり',
      'グランドメルキュール高知土佐',
      '岬観光ホテル',
      'リゾートホテル海辺の果樹園',
      'オーベルジュ土佐山'
    ]
  },
  {
    theme: 'yamanashi_kiyosato_yatsugatake',
    slug: 'winter-yamanashi-kiyosato-yatsugatake-starry-sky-winebeef-stay',
    label: '山梨・清里高原＆八ヶ岳（冬の八ヶ岳ブルーと満天の星空観賞・萌木の村冬景色＆極上「甲州ワインビーフ」・八ヶ岳南麓の高原温泉リゾート宿）',
    queries: [
      '清里高原ホテル',
      '八ヶ岳グレイスホテル',
      'グランドメルキュール八ヶ岳リゾート＆スパ',
      '萌木の村 ホテル ハット・ウォールデン',
      'ロイヤルホテル 八ヶ岳',
      'ホテル デュプレックス 清里'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 99 via Official Rakuten API');
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

  const outputPath = path.join(__dirname, 'round99_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nAll done! Saved ${Object.keys(result).length} themes to ${outputPath}`);
}

main().catch(console.error);
