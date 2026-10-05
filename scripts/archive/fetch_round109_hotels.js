const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'kanagawa_hakone',
    slug: 'winter-kanagawa-hakone-yumoto-ashinoko-shrine-fuji-stay',
    label: '神奈川・箱根湯本＆芦ノ湖（冬の箱根・箱根湯本温泉＆芦ノ湖・箱根神社新春初詣！冬の富士山絶景・芦ノ湖水中鳥居と相模湾旬魚・極上会席名宿）',
    filter: (h) => h.address1.includes('神奈川県') && (h.address2.includes('箱根') || h.address2.includes('小田原')),
    queries: [
      '湯本富士屋ホテル',
      '山のホテル 箱根',
      'ホテルおかだ 箱根',
      'ザ・プリンス 箱根芦ノ湖',
      '天成園 箱根'
    ]
  },
  {
    theme: 'osaka_city',
    slug: 'winter-osaka-city-sumiyoshi-taisha-hatsumode-illumination-fugu-stay',
    label: '大阪・大阪市内＆住吉大社（冬の大阪・住吉大社新春開運初詣＆御堂筋イルミネーション光の饗宴！冬の本場てっちり（とらふぐ）となにわ美食・展望＆天然温泉名宿）',
    filter: (h) => h.address1.includes('大阪府') && (h.address2.includes('大阪市')),
    queries: [
      'スイスホテル南海大阪',
      'コンラッド大阪',
      '御宿 野乃 大阪淀屋橋',
      'ホテルモントレ グラスミア大阪',
      'アートホテル大阪ベイタワー',
      'ドーミーインPREMIUMなんば',
      'リーガロイヤルホテル 大阪'
    ]
  },
  {
    theme: 'ibaraki_tsukubasan',
    slug: 'winter-ibaraki-tsukubasan-shrine-hatsumode-yakei-onsen-hitachigyu-stay',
    label: '茨城・筑波山＆つくば（冬の茨城・筑波山神社新春初詣＆スターダスト夜景パノラマ・筑波山温泉！常陸牛・奥久慈軍鶏鍋とつくばうどん名宿）',
    filter: (h) => h.address1.includes('茨城県') && (h.address2.includes('つくば') || h.address2.includes('石岡') || h.address2.includes('土浦')),
    queries: [
      '筑波山温泉 江戸屋',
      '筑波山京成ホテル',
      'つくばグランドホテル',
      '筑波山温泉 青木屋',
      '筑波温泉ホテル',
      'ホテル日航つくば',
      'ダイワロイネットホテルつくば'
    ]
  },
  {
    theme: 'ehime_imabari',
    slug: 'winter-ehime-imabari-shimanami-oomishima-taimeshi-onsen-stay',
    label: '愛媛・今治＆しまなみ海道・大三島（冬の愛媛・来島海峡大橋冬絶景＆日本総鎮守・大山祇神社新春開運祈願！来島天然真鯛・伊予牛と美肌名湯名宿）',
    filter: (h) => h.address1.includes('愛媛県') && (h.address2.includes('今治') || h.address2.includes('西条')),
    queries: [
      '今治国際ホテル',
      'GLAMPROOK しまなみ',
      '鈍川温泉 皆楽荘',
      '湯ノ浦温泉 汐の丸',
      'ホテルクラウンヒルズ今治',
      '鈍川温泉 美人工房',
      '今治アーバンホテル'
    ]
  },
  {
    theme: 'kagoshima_city',
    slug: 'winter-kagoshima-city-sakurajima-view-kurobuta-kanburi-onsen-stay',
    label: '鹿児島・鹿児島市＆桜島（冬の南九州・桜島冬晴れパノラマ絶景＆照国神社新春初詣！冬の鹿児島黒豚しゃぶしゃぶ・錦江湾寒ブリと展望天然温泉名宿）',
    filter: (h) => h.address1.includes('鹿児島県') && (h.address2.includes('鹿児島市')),
    queries: [
      'SHIROYAMA HOTEL kagoshima',
      '城山ホテル鹿児島',
      'ソラリア西鉄ホテル鹿児島',
      'シェラトン鹿児島',
      'ドーミーイン鹿児島',
      '鹿児島サンロイヤルホテル',
      'ホテル法華クラブ鹿児島'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching & Filtering Rakuten Hotels for Round 109 via Rakuten API');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      console.log(`Searching query: "${q}"...`);
      try {
        const hotels = await searchRakutenHotels(q, 3);
        await sleep(500); // polite API throttling

        for (const h of hotels) {
          if (!usedHotelNos.has(h.hotelNo)) {
            // Apply geographic address filter
            if (t.filter(h)) {
              usedHotelNos.add(h.hotelNo);
              themeHotels.push(h);
              console.log(`  [ADDED] ${h.hotelName} (${h.address1} ${h.address2}) - Rating: ${h.reviewAverage}`);
              break; // take best match from this query
            } else {
              console.log(`  [FILTERED OUT] ${h.hotelName} (${h.address1} ${h.address2})`);
            }
          }
        }
      } catch (err) {
        console.error(`  Error searching "${q}":`, err.message);
      }

      if (themeHotels.length >= 5) {
        console.log(`Reached 5 verified hotels for ${t.theme}!`);
        break;
      }
    }

    if (themeHotels.length < 5) {
      console.warn(`WARNING: Only found ${themeHotels.length} hotels for theme ${t.theme}`);
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels.slice(0, 5)
    };
  }

  const outPath = path.join(__dirname, 'round109_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved Round 109 hotel data to: ${outPath}`);
}

main().catch(console.error);
