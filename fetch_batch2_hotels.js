const fs = require('fs');
const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

const queries = {
  // 1. 京都・おひとりさま大人のおこもり寺社＆和モダンホテル
  "kyoto-solo-retreat-temple-modern-stay": [
    { key: "celestine_gion", query: "京都 ホテル ザ セレスティン京都祇園" },
    { key: "jokyoji_mitsui", query: "三井ガーデンホテル京都河原町浄教寺" },
    { key: "intergate_kyoto", query: "ホテルインターゲート京都 四条新町" }
  ],
  // 2. 大阪・梅田＆なんば 極上サウナ・スカイスパ出張＆おこもり
  "osaka-solo-business-sky-sauna-retreat-stay": [
    { key: "candeo_osaka_tower", query: "カンデオホテルズ大阪ザ・タワー" },
    { key: "hankyu_international", query: "ホテル阪急インターナショナル" },
    { key: "dormy_namba_annex", query: "ドーミーインPREMIUMなんば" }
  ],
  // 3. 名古屋・バンテリンドーム＆名駅 遠征＆ご褒美パノラマステイ
  "nagoya-dome-live-expedition-comfort-stay": [
    { key: "nagoya_prince_skytower", query: "名古屋プリンスホテル スカイタワー" },
    { key: "nagoya_kanko_hotel", query: "名古屋観光ホテル" },
    { key: "meitetsu_grand_hotel", query: "名鉄グランドホテル" }
  ],
  // 4. 福岡・博多＆天神 出張・グルメ＆屋上温泉プールステイ
  "fukuoka-hakata-tenjin-solo-onsen-gourmet-stay": [
    { key: "miyakohotel_hakata", query: "都ホテル 博多" },
    { key: "dormy_hakata_canal", query: "ドーミーインPREMIUM博多・キャナルシティ前" },
    { key: "candeo_fukuoka_tenjin", query: "カンデオホテルズ福岡天神" }
  ],
  // 5. 札幌・大通＆すすきの サウナ・登別温泉直送・シメパフェひとり旅
  "sapporo-solo-onsen-sauna-gourmet-stay": [
    { key: "yuen_sapporo", query: "ONSEN RYOKAN 由縁 札幌" },
    { key: "solaria_sapporo", query: "ソラリア西鉄ホテル札幌" },
    { key: "cabin_sapporo", query: "天然温泉プレミアホテル―ＣＡＢＩＮ―札幌" }
  ]
};

async function run() {
  const results = {};
  for (const [slug, list] of Object.entries(queries)) {
    results[slug] = [];
    console.log(`\nFetching for slug: ${slug}`);
    for (const item of list) {
      console.log(`  Searching: ${item.query}...`);
      const hotels = await searchRakutenHotels(item.query, 1);
      if (!hotels || hotels.length === 0) {
        console.error(`  ERROR: Not found for ${item.query}`);
      } else {
        const h = hotels[0];
        console.log(`  -> Found: ${h.hotelName} (No: ${h.hotelNo}, Rating: ${h.reviewAverage})`);
        results[slug].push({
          key: item.key,
          searchQuery: item.query,
          hotelNo: h.hotelNo,
          hotelName: h.hotelName,
          hotelKanaName: h.hotelKanaName,
          hotelImageUrl: h.hotelImageUrl,
          roomImageUrl: h.roomImageUrl || h.hotelImageUrl,
          reviewAverage: h.reviewAverage,
          reviewCount: h.reviewCount,
          hotelMinCharge: h.hotelMinCharge,
          address1: h.address1,
          address2: h.address2,
          access: h.access,
          nearestStation: h.nearestStation,
          hotelSpecial: h.hotelSpecial,
          affiliateUrl: h.affiliateUrl
        });
      }
      await sleep(1500);
    }
  }

  fs.writeFileSync('batch2_hotels.json', JSON.stringify(results, null, 2));
  console.log('\nSaved batch2_hotels.json successfully!');
}

run().catch(console.error);
