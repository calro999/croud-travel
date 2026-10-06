const { searchRakutenHotels } = require('../../rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const targets = [
  {
    theme: 'shiga_kogen_snow_monkey',
    slug: 'winter-nagano-shiga-kogen-snow-monkey-jigokudani-onsen-stay',
    label: '長野・志賀高原＆地獄谷野猿公苑・湯田中渋温泉郷（世界が息を呑む「スノーモンキー」白銀の地獄谷野猿公苑と標高2000m極上パウダースノー！九湯めぐり「渋温泉・湯田中温泉」レトロ湯街散策・信州プレミアム牛肉＆名物石畳会席名宿）',
    queries: [
      '志賀高原プリンスホテル',
      '湯田中温泉　よろづや',
      '渋温泉　歴史の宿　金具屋',
      'ホテル椿野',
      '志賀パレスホテル',
      '渋温泉　さかえや'
    ]
  },
  {
    theme: 'monbetsu_drift_ice_garinko',
    slug: 'winter-hokkaido-monbetsu-drift-ice-garinko-driftice-gourmet-stay',
    label: '北海道・紋別＆オホーツク流氷観光・砕氷船ガリンコ号（ドリルで氷を砕く迫力！流氷観光砕氷船「ガリンコ号III IMERU」と氷海オホーツクタワー！極寒の絶景・冬の王様「オホーツク海産毛ガニ・ホタテ尽くし」＆天然温泉名宿）',
    queries: [
      'ホテルオホーツクパレス',
      '紋別セントラルホテル',
      '北天の丘　あばしり湖鶴雅リゾート',
      '網走観光ホテル',
      'ホテルルートイン網走駅前',
      '網走ロイヤルホテル'
    ]
  },
  {
    theme: 'gotemba_tokinosumika_illumination',
    slug: 'winter-shizuoka-gotemba-tokinosumika-illumination-fuji-onsen-stay',
    label: '静岡・御殿場「時之栖」イルミネーション＆富士山雪景色（550万球が輝く光の祭典「ひかりのすみか」日本最大級の噴水レーザーショー！白銀の富士山大パノラマ・本場「御殿場高原ビール」バイキング＆天然温泉気楽坊名宿）',
    queries: [
      '御殿場高原ホテル',
      'ホテル時之栖',
      'レンブラントプレミアム富士御殿場',
      'ドーミーインＥＸＰＲＥＳＳ富士山御殿場',
      'ＨＯＴＥＬ　ＣＬＡＤ',
      'マースガーデンウッド御殿場'
    ]
  },
  {
    theme: 'kamakura_tsurugaoka_hatsumode_enoshima',
    slug: 'winter-kanagawa-kamakura-tsurugaoka-hachimangu-hatsumode-enoshima-stay',
    label: '神奈川・鎌倉「鶴岡八幡宮」初詣＆江の島シーキャンドルイルミネーション（源氏ゆかりの武家古都「鶴岡八幡宮」新春初詣と神苑ぼたん庭園の冬牡丹！関東三大イルミ「湘南の宝石」・小町通り冬グルメ＆相模湾絶景オーシャンビュー名宿）',
    queries: [
      '鎌倉プリンスホテル',
      'ホテルメトロポリタン　鎌倉',
      '鎌倉わかみや',
      '江の島ホテル',
      'ブレスホテル',
      'かいひん荘鎌倉'
    ]
  },
  {
    theme: 'tottori_sand_dunes_snow_matsubagani',
    slug: 'winter-tottori-sand-dunes-snow-matsubagani-hakuto-shrine-stay',
    label: '鳥取・鳥取砂丘「白銀の雪砂丘と風紋」＆白兎神社初詣・本場松葉ガニ（日本海からの寒風が生み出す「雪の鳥取砂丘」絶景と因幡の白兎伝説「白兎神社」縁結び初詣！水揚げ日本一の冬の味覚「本場松葉ガニフルコース」＆鳥取温泉老舗名宿）',
    queries: [
      '観水庭こぜにや',
      'ホテルモナーク鳥取',
      'ホテルニューオータニ鳥取',
      '白兎会館',
      'グリーンリッチホテル鳥取駅前',
      '丸茂旅館'
    ]
  }
];

async function main() {
  console.log('================================================================');
  console.log('Fetching Verified 25 Hotels via Live Rakuten API (Round 131 - Winter)');
  console.log('================================================================');

  const result = {};

  for (const t of targets) {
    console.log(`\n--- Fetching Theme: ${t.label} (${t.theme}) ---`);
    const themeHotels = [];
    const usedHotelNos = new Set();

    for (const q of t.queries) {
      if (themeHotels.length >= 5) break;
      console.log(`Searching for "${q}"...`);
      try {
        const searchRes = await searchRakutenHotels(q, 3);
        await sleep(600);

        if (searchRes && searchRes.length > 0) {
          const hotel = searchRes.find(h => !usedHotelNos.has(h.hotelNo)) || searchRes[0];
          if (!usedHotelNos.has(hotel.hotelNo)) {
            usedHotelNos.add(hotel.hotelNo);
            console.log(`  -> Fetched: [${hotel.hotelNo}] ${hotel.hotelName} (${hotel.address1} ${hotel.address2}) - Score: ${hotel.reviewAverage} - Price: ¥${hotel.hotelMinCharge}`);
            themeHotels.push(hotel);
          } else {
            console.log(`  ! Already added hotel: ${hotel.hotelName}`);
          }
        } else {
          console.error(`  x Could not fetch hotel for query: ${q}`);
        }
      } catch (err) {
        console.error(`  x Error searching "${q}":`, err.message);
      }
    }

    result[t.theme] = {
      label: t.label,
      slug: t.slug,
      hotels: themeHotels
    };
  }

  const outPath = path.join(__dirname, 'round131_raw_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`\nSuccessfully saved raw hotel data to: ${outPath}`);
  
  let allCountOk = true;
  for (const t of targets) {
    const count = result[t.theme].hotels.length;
    console.log(`- Theme ${t.theme}: ${count} hotels fetched`);
    if (count !== 5) allCountOk = false;
  }
  if (!allCountOk) {
    console.error('Some themes do not have exactly 5 hotels!');
    process.exit(1);
  }
  console.log('\n🎉 All 5 themes successfully fetched 5 verified hotels (Total: 25) via live Rakuten API!');
}

main().catch(err => {
  console.error('Fatal error in fetch script:', err);
  process.exit(1);
});
