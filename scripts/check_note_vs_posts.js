const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(__dirname, '..', 'src', 'data', 'posts');
const postFiles = fs.readdirSync(POSTS_DIR).filter(f => f.endsWith('.json'));

console.log('Total site posts in src/data/posts:', postFiles.length);

const rootDir = path.join(__dirname, '..');
const noteFiles = fs.readdirSync(rootDir)
  .filter(f => f.startsWith('note-') && f.endsWith('.md'))
  .sort((a, b) => {
    const numA = parseInt(a.replace(/[^0-9]/g, ''), 10);
    const numB = parseInt(b.replace(/[^0-9]/g, ''), 10);
    return numA - numB;
  });

console.log('Total note files:', noteFiles.length);

// Load all posts briefly
const postsIndex = [];
for (const file of postFiles) {
  try {
    const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
    const data = JSON.parse(content);
    postsIndex.push({
      file,
      slug: data.slug || data.id,
      title: data.title || '',
      hotel_name: data.hotel_name || '',
      affiliate_url: data.affiliate_url || ''
    });
  } catch (e) {}
}

const missingNotes = [];
const matchedNotes = [];

for (const noteFile of noteFiles) {
  const content = fs.readFileSync(path.join(rootDir, noteFile), 'utf8');
  const lines = content.split('\n');
  const title = (lines[0] || '').replace(/^#\s*/, '').trim();

  // Find hotel links in note
  const hotelMatches = content.match(/HOTEL\/(\d+)\//g) || [];
  const hotelNos = [...new Set(hotelMatches.map(m => m.match(/(\d+)/)[1]))];

  // Try to match by title similarity or hotel
  let match = postsIndex.find(p => {
    if (!p.title) return false;
    const cleanNoteTitle = title.replace(/[【】|｜「」]/g, ' ');
    const cleanPostTitle = p.title.replace(/[【】|｜「」]/g, ' ');
    
    // Check if key words match
    const words = cleanNoteTitle.split(/\s+/).filter(w => w.length >= 3);
    const matchCount = words.filter(w => cleanPostTitle.includes(w)).length;
    return matchCount >= 3;
  });

  // If not matched, try by hotelNos
  if (!match && hotelNos.length > 0) {
    match = postsIndex.find(p => {
      return hotelNos.some(no => p.affiliate_url && p.affiliate_url.includes(no));
    });
  }

  if (match) {
    matchedNotes.push({ noteFile, title, matchedPost: match.file });
  } else {
    missingNotes.push({ noteFile, title, hotelNos });
  }
}

console.log(`\n=== 照合結果 ===`);
console.log(`noteファイル総数: ${noteFiles.length}`);
console.log(`サイト記事と紐付いたnote: ${matchedNotes.length}`);
console.log(`サイト記事が存在しない（noteだけ作られた）note: ${missingNotes.length}`);

if (missingNotes.length > 0) {
  console.log(`\n=== サイト記事がないnoteファイル一覧 ===`);
  missingNotes.forEach(m => {
    console.log(`- ${m.noteFile}: ${m.title}`);
  });
}
