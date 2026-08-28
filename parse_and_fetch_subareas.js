const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper.js');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Extract prefectures and subareas from prefecturesData.ts
const tsContent = fs.readFileSync(path.join(__dirname, 'src', 'data', 'prefecturesData.ts'), 'utf8');

// Parse PREFECTURES_DATA using regex
const prefMatches = [];
const regex = /slug:\s*"([^"]+)",[\s\S]*?name:\s*"([^"]+)",[\s\S]*?subAreas:\s*\[([\s\S]*?)\n\s*\]/g;
let match;
while ((match = regex.exec(tsContent)) !== null) {
  const prefSlug = match[1];
  const prefName = match[2];
  const subAreasBlock = match[3];

  const subRegex = /areaName:\s*"([^"]+)",\s*slug:\s*"([^"]+)"/g;
  let subMatch;
  const subAreas = [];
  while ((subMatch = subRegex.exec(subAreasBlock)) !== null) {
    subAreas.push({ areaName: subMatch[1], slug: subMatch[2] });
  }

  prefMatches.push({ prefSlug, prefName, subAreas });
}

console.log(`Parsed ${prefMatches.length} prefectures and total ${prefMatches.reduce((acc, p) => acc + p.subAreas.length, 0)} subareas.`);

async function main() {
  const cachePath = path.join(__dirname, 'src', 'data', 'subareas_rakuten_hotels.json');
  let subAreaHotels = {};
  if (fs.existsSync(cachePath)) {
    subAreaHotels = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
  }

  let totalQueries = 0;
  for (const pref of prefMatches) {
    for (const sub of pref.subAreas) {
      const key = `${pref.prefSlug}_${sub.slug}`;
      if (subAreaHotels[key] && subAreaHotels[key].length >= 3) {
        continue;
      }

      const query = `${pref.prefName} ${sub.areaName} ホテル`;
      console.log(`[${totalQueries + 1}] Querying Rakuten API: "${query}"...`);
      await sleep(1300);
      try {
        const res = await searchRakutenHotels(query, 5);
        if (res && res.length > 0) {
          subAreaHotels[key] = res;
          console.log(`  -> Retrieved ${res.length} hotels directly from Rakuten API.`);
        } else {
          // fallback query
          await sleep(1300);
          const fbQuery = `${pref.prefName} 温泉 ホテル`;
          const fbRes = await searchRakutenHotels(fbQuery, 5);
          subAreaHotels[key] = fbRes || [];
          console.log(`  -> Fallback retrieved ${fbRes ? fbRes.length : 0} hotels.`);
        }
      } catch (err) {
        console.warn(`  Failed query "${query}": ${err.message}`);
      }

      totalQueries++;
      if (totalQueries % 10 === 0) {
        fs.writeFileSync(cachePath, JSON.stringify(subAreaHotels, null, 2), 'utf8');
        console.log(`Checkpoint saved (${Object.keys(subAreaHotels).length} subareas cached).`);
      }
    }
  }

  fs.writeFileSync(cachePath, JSON.stringify(subAreaHotels, null, 2), 'utf8');
  console.log(`\nAll done! Successfully fetched and cached direct Rakuten API hotel data for ${Object.keys(subAreaHotels).length} subareas.`);
}

main().catch(console.error);
