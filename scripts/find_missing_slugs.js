const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const noteFiles = fs.readdirSync(rootDir)
  .filter(f => f.startsWith('note-') && f.endsWith('.md'))
  .sort((a, b) => parseInt(a.replace(/[^0-9]/g, '')) - parseInt(b.replace(/[^0-9]/g, '')));

const missingArticles = [];

for (const noteFile of noteFiles) {
  const content = fs.readFileSync(path.join(rootDir, noteFile), 'utf8');
  const lines = content.split('\n');
  const title = (lines[0] || '').replace(/^#\s*/, '').trim();

  // Find URL at the bottom: https://croud-travel.pages.dev/([a-zA-Z0-9_-]+)
  const urlMatch = content.match(/croud-travel\.pages\.dev\/([a-zA-Z0-9_-]+)/);
  const slug = urlMatch ? urlMatch[1] : null;

  // Find hotels
  const hotelRegex = /・【(.*?)】(.*?)👉\s*\[.*?\]\((https:\/\/hb\.afl\.rakuten\.co\.jp\/hgc\/.*?HOTEL%2F(\d+)%2F\d+\.html.*?)\)/g;
  let match;
  const hotels = [];
  while ((match = hotelRegex.exec(content)) !== null) {
    hotels.push({
      name: match[1].trim(),
      desc: match[2].trim(),
      affiliateUrl: match[3],
      hotelNo: match[4]
    });
  }

  if (hotels.length === 0) {
    const altRegex = /####\s*\[(.*?)\]\((https:\/\/hb\.afl\.rakuten\.co\.jp\/hgc\/.*?HOTEL%2F(\d+)%2F\d+\.html.*?)\)/g;
    let altMatch;
    while ((altMatch = altRegex.exec(content)) !== null) {
      hotels.push({
        name: altMatch[1].trim(),
        desc: '',
        affiliateUrl: altMatch[2],
        hotelNo: altMatch[3]
      });
    }
  }

  const targetSlug = slug || noteFile.replace('.md', '');
  const postFile = path.join(rootDir, 'src', 'data', 'posts', targetSlug + '.json');
  const exists = fs.existsSync(postFile);

  if (!exists) {
    missingArticles.push({
      noteFile,
      slug: targetSlug,
      title,
      hotelsCount: hotels.length,
      hotels
    });
  }
}

console.log('Total notes:', noteFiles.length);
console.log('Missing site articles (JSON):', missingArticles.length);
console.log('Sample missing:');
missingArticles.slice(0, 5).forEach(m => console.log(`- ${m.noteFile} -> ${m.slug} (${m.hotelsCount} hotels)`));

fs.writeFileSync(path.join(rootDir, 'scratch', 'all_missing_slugs.json'), JSON.stringify(missingArticles, null, 2));
