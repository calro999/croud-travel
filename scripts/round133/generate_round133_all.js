const fs = require('fs');
const path = require('path');

const { generateTokachi } = require('./generate_tokachi.js');
const { generateAtami } = require('./generate_atami.js');
const { generateMiyajima } = require('./generate_miyajima.js');
const { generateHakuba } = require('./generate_hakuba.js');
const { generateOkunikko } = require('./generate_okunikko.js');

function main() {
  console.log('================================================================');
  console.log('Generating 5 Winter Feature Pages & note-137..141.md (Round 133)');
  console.log('================================================================');

  const rawHotelsPath = path.join(__dirname, 'round133_raw_hotels.json');
  const wikiSpotsPath = path.join(__dirname, 'round133_wikipedia_spots.json');

  if (!fs.existsSync(rawHotelsPath) || !fs.existsSync(wikiSpotsPath)) {
    console.error('Data files not found! Please run fetch scripts first.');
    process.exit(1);
  }

  const rawHotelsData = JSON.parse(fs.readFileSync(rawHotelsPath, 'utf8'));
  const wikiSpotsData = JSON.parse(fs.readFileSync(wikiSpotsPath, 'utf8'));

  console.log('\n[1/5] Generating Hokkaido Tokachi (note-137.md)...');
  generateTokachi(rawHotelsData, wikiSpotsData);

  console.log('\n[2/5] Generating Shizuoka Atami (note-138.md)...');
  generateAtami(rawHotelsData, wikiSpotsData);

  console.log('\n[3/5] Generating Hiroshima Miyajima (note-139.md)...');
  generateMiyajima(rawHotelsData, wikiSpotsData);

  console.log('\n[4/5] Generating Nagano Hakuba (note-140.md)...');
  generateHakuba(rawHotelsData, wikiSpotsData);

  console.log('\n[5/5] Generating Tochigi Okunikko (note-141.md)...');
  generateOkunikko(rawHotelsData, wikiSpotsData);

  console.log('\n🎉 Successfully generated all 5 winter feature pages and note-137..141.md!');
}

main();
