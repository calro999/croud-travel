const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const categories = [
  { key: 'kyoto_station', query: '京都駅 ホテル', label: '京都駅周辺・アクセス抜群ホテル' },
  { key: 'recommended', query: '京都 ホテル おすすめ', label: '京都 おすすめ人気ホテル' },
  { key: 'breakfast', query: '京都 朝食付き ホテル', label: '京都 朝食・おばんざいが美味しいホテル' },
  { key: 'ryokan', query: '京都 旅館', label: '京都 風情ある老舗・京町家旅館' },
  { key: 'onsen', query: '京都 温泉 旅館', label: '京都 嵐山・湯の花 温泉旅館' },
  { key: 'couple', query: '京都 カップル ホテル', label: '京都 デート・カップル向けホテル' },
  { key: 'family', query: '京都 子連れ ファミリー ホテル', label: '京都 子連れ・ファミリー向けホテル' }
];

async function main() {
  console.log('=== Fetching direct hotel data from Rakuten Travel API ===');
  const result = {};

  for (const cat of categories) {
    console.log(`Fetching category: ${cat.label} (Query: ${cat.query})...`);
    let hotels = [];
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        await sleep(1200); // Wait 1.2s to prevent rate limit (1 req/sec)
        hotels = await searchRakutenHotels(cat.query, 6);
        // filter to ensure it's in Kyoto if possible
        hotels = hotels.filter(h => {
          const addr = (h.address1 || '') + (h.address2 || '') + (h.hotelName || '');
          return addr.includes('京都');
        });
        if (hotels.length > 0) break;
      } catch (err) {
        console.warn(`Attempt ${attempt + 1} failed for ${cat.query}:`, err.message);
        await sleep(1500);
      }
    }
    console.log(` -> Found ${hotels.length} hotels in Kyoto.`);
    result[cat.key] = {
      label: cat.label,
      query: cat.query,
      hotels: hotels
    };
  }

  const outPath = path.join(__dirname, 'src', 'data', 'kyoto_rakuten_hotels.json');
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`Saved fetched direct Rakuten API data to: ${outPath}`);
}

main().catch(console.error);
