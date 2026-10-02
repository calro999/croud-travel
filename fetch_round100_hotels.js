const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'mie_ise_jingu_hatsumode',
    slug: 'winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay',
    label: '三重・伊勢神宮＆おかげ横丁（新春初詣・五十鈴川の朝霧と神域参拝・おかげ横丁食べ歩き＆冬の極上伊勢海老・松阪牛会席の名宿）',
    queries: [
      'いにしえの宿 伊久',
      '伊勢外宮参道 伊勢神泉',
      'ホテルキャッスルイン伊勢',
      'コンフォートホテル伊勢',
      '三交イン伊勢市駅前',
      '神泉 伊勢'
    ]
  },
  {
    theme: 'nagano_karuizawa_hoshino',
    slug: 'winter-nagano-karuizawa-hoshino-illumination-tonbonoyu-shinshugyu-stay',
    label: '長野・軽井沢＆星野エリア（冬の白銀リゾート・もみの木イルミネーション＆星野温泉トンボの湯・信州プレミアム牛薪火ディナーと高原名宿）',
    queries: [
      '星野リゾート BEB5軽井沢',
      '軽井沢プリンスホテル イースト',
      'ホテルインディゴ軽井沢',
      'ルシアン旧軽井沢',
      'チサングランド軽井沢',
      '軽井沢プリンスホテル ウエスト'
    ]
  },
  {
    theme: 'kanagawa_kamakura_enoshima',
    slug: 'winter-kanagawa-kamakura-enoshima-jewel-shrine-fuji-stay',
    label: '神奈川・鎌倉＆江の島（冬の相模湾・江の島シーキャンドル「湘南の宝石」＆鶴岡八幡宮初詣・富士山夕景と冬の地魚・湘南名宿）',
    queries: [
      '鎌倉プリンスホテル',
      'ホテルメトロポリタン 鎌倉',
      '江の島ホテル',
      'BREATH HOTEL',
      'かいひん荘鎌倉',
      'KKR鎌倉わかみや'
    ]
  },
  {
    theme: 'saitama_kawagoe_koedo',
    slug: 'winter-saitama-kawagoe-koedo-kitain-daruma-unagi-stay',
    label: '埼玉・小江戸川越＆喜多院（冬の蔵造りの町並み・喜多院初大師だるま市新春初詣＆名物うなぎ重・小江戸黒豚と歴史情話の川越名宿）',
    queries: [
      '川越東武ホテル',
      '川越プリンスホテル',
      'スーパーホテル埼玉 川越',
      'ホテル三光 川越',
      '川越第一ホテル',
      'ユープレイス 川越'
    ]
  },
  {
    theme: 'okayama_kurashiki_bikan',
    slug: 'winter-okayama-kurashiki-bikan-yakei-kibitsu-chiyagyu-stay',
    label: '岡山・倉敷美観地区＆吉備津神社（冬の白壁土蔵ライトアップ・国宝吉備津神社新春初詣＆名物下津井真蛸・幻の千屋牛を堪能する倉敷名宿）',
    queries: [
      '倉敷アイビースクエア',
      'ロイヤルパークホテル倉敷',
      '倉敷国際ホテル',
      '天然温泉 阿智の湯 ドーミーイン倉敷',
      'ホテル・アルファ－ワン倉敷',
      'センチュリオンホテル＆スパ倉敷'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Rakuten Hotels for Round 100 via Official Rakuten API');
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

  const outputPath = path.join(__dirname, 'round100_raw_hotels.json');
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nAll done! Saved ${Object.keys(result).length} themes to ${outputPath}`);
}

main().catch(console.error);
