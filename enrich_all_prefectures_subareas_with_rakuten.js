const { searchRakutenHotels } = require('./rakuten_api_helper.js');
const { PREFECTURES_DATA } = require('./src/data/prefecturesData.ts');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  console.log('=== Checking and fetching Rakuten API data for all subareas across 47 prefectures ===');
  const cachePath = path.join(__dirname, 'src', 'data', 'subareas_rakuten_hotels.json');
  let subAreaHotels = {};
  if (fs.existsSync(cachePath)) {
    subAreaHotels = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  // Load existing posts to check counts
  const postsPath = path.join(__dirname, 'public', 'data', 'posts.json');
  const allPosts = JSON.parse(fs.readFileSync(postsPath, 'utf8'));

  let fetchCount = 0;
  for (const pref of PREFECTURES_DATA) {
    const cleanPref = pref.name.replace(/(県|府|東京都)$/, '');
    const prefPosts = allPosts.filter(p => p.prefecture && p.prefecture.includes(cleanPref));

    console.log(`\nPrefecture: ${pref.name} (Existing posts: ${prefPosts.length})`);

    for (const sub of pref.subAreas) {
      const key = `${pref.slug}_${sub.slug}`;
      if (subAreaHotels[key] && subAreaHotels[key].length >= 3) {
        // already have enough direct rakuten hotels
        continue;
      }

      const query = `${pref.name} ${sub.areaName} 温泉 ホテル`;
      console.log(` -> Fetching Rakuten API for subArea: ${query}...`);
      await sleep(1300);
      try {
        const res = await searchRakutenHotels(query, 5);
        if (res && res.length > 0) {
          subAreaHotels[key] = res;
          console.log(`   Retrieved ${res.length} hotels directly from Rakuten API.`);
        } else {
          // fallback query
          await sleep(1300);
          const fbQuery = `${pref.name} ${sub.keywords[0] || 'ホテル'}`;
          const fbRes = await searchRakutenHotels(fbQuery, 5);
          subAreaHotels[key] = fbRes || [];
          console.log(`   Fallback retrieved ${fbRes ? fbRes.length : 0} hotels.`);
        }
      } catch (err) {
        console.warn(`   Failed: ${err.message}`);
      }
      fetchCount++;
      if (fetchCount % 10 === 0) {
        fs.writeFileSync(cachePath, JSON.stringify(subAreaHotels, null, 2), 'utf8');
      }
    }
  }

  fs.writeFileSync(cachePath, JSON.stringify(subAreaHotels, null, 2), 'utf8');
  console.log(`\nCompleted fetching all subarea hotel data! Saved to ${cachePath}`);
}

main().catch(console.error);
