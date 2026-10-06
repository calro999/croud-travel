const fs = require('fs');
const path = require('path');

// Target directory
const appDir = path.join(process.cwd(), 'src/app');

function cleanText(t) {
  if (!t) return '';
  return t.replace(/\\"/g, '"').replace(/\\'/g, "'").trim();
}

function optimizeTitle(t) {
  t = cleanText(t).replace(/^["'`]|["'`]$/g, '').trim();
  if (t.length <= 36) return t;

  const m = t.match(/【(.*?)】(.*)/);
  if (!m) return t.slice(0, 36);

  let bracket = m[1].trim();
  let rest = m[2].trim();

  // Shorten overly complex brackets
  // e.g. "11・12月静岡・西伊豆堂ヶ島温泉の夕陽百選＆駿河湾越しの雪化粧富士" -> "11・12月西伊豆堂ヶ島"
  if (bracket.length > 16) {
    bracket = bracket.replace(/＆.*$/, '');
    bracket = bracket.replace(/・.*温泉.*$/, '');
    bracket = bracket.replace(/の夕陽.*$/, '');
    bracket = bracket.replace(/の冬.*$/, '');
    if (bracket.length > 16) bracket = bracket.slice(0, 16);
  }

  // Extract key search terms from rest
  // Prioritize high-intent commercial travel keywords
  const chunks = rest.split(/[！・＆|｜、]/).map(c => c.trim()).filter(Boolean);
  
  let hook = '';
  const priorities = ['カニ', '蟹', '牛', '海老', '金目鯛', 'フグ', 'ふぐ', '寒ブリ', '初詣', '雪見', '露天', 'イルミ', '富士', 'サウナ', '絶景', '味覚'];
  for (const prio of priorities) {
    const found = chunks.find(c => c.includes(prio));
    if (found) {
      hook = found;
      break;
    }
  }

  if (!hook) {
    hook = chunks[0] || rest;
  }

  // Clean hook phrases
  hook = hook.replace(/を堪能する.*/, '').replace(/を巡る.*/, '').replace(/名宿.*/, '').replace(/宿5選.*/, '').replace(/おすすめ.*/, '').trim();

  let suffix = 'おすすめ名宿5選';
  if (rest.includes('3選')) suffix = '厳選宿3選';

  let cand = `【${bracket}】${hook}！${suffix}`;
  if (cand.length <= 36) return cand;

  cand = `【${bracket}】${hook.slice(0, 12)}！${suffix}`;
  if (cand.length <= 36) return cand;

  return cand.slice(0, 36);
}

function optimizeDescription(d, title) {
  d = cleanText(d).replace(/^["'`]|["'`]$/g, '').trim();

  // Cut text intelligently
  let base = d;
  if (base.length > 85) {
    // Find last Japanese period within 85 chars
    const pIdx = base.slice(0, 85).lastIndexOf('。');
    if (pIdx > 40) {
      base = base.slice(0, pIdx);
    } else {
      const cIdx = base.slice(0, 80).lastIndexOf('、');
      if (cIdx > 40) {
        base = base.slice(0, cIdx);
      } else {
        base = base.slice(0, 75);
      }
    }
  }

  base = base.replace(/。+$/, '').trim();
  const cta = '楽天トラベルの最新空室状況・限定割引プランを徹底比較！';
  const cand = `${base}。${cta}`;

  if (cand.length <= 125) return cand;
  return `${base.slice(0, 65)}…${cta}`;
}

// Find all seasonal and recent feature pages
const targetDirs = fs.readdirSync(appDir).filter(f => {
  const p = path.join(appDir, f);
  if (!fs.statSync(p).isDirectory()) return false;
  if (f.startsWith('(') || f.startsWith('api') || f === 'features' || f === 'hotels' || f === 'prefectures' || f === 'posts' || f === 'spots') return false;
  return f.startsWith('winter-') || f.startsWith('late-autumn-') || f.startsWith('spring-') || f.startsWith('autumn-');
});

console.log(`Optimizing metadata for ${targetDirs.length} seasonal feature articles...`);

let optimizedCount = 0;

for (const dirName of targetDirs) {
  const filePath = path.join(appDir, dirName, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  // Match title
  const titleMatch = content.match(/title:\s*(?:["']|`)((?:[^"'`\\]|\\.)*)(?:["']|`)/);
  // Match description
  const descMatch = content.match(/description:\s*(?:["']|`)((?:[^"'`\\]|\\.)*)(?:["']|`)/);

  if (titleMatch && descMatch) {
    const origTitle = titleMatch[1];
    const origDesc = descMatch[1];

    const newTitle = optimizeTitle(origTitle);
    const newDesc = optimizeDescription(origDesc, newTitle);

    if (newTitle !== origTitle || newDesc !== origDesc) {
      // Replace title in metadata
      content = content.replace(titleMatch[0], `title: '${newTitle.replace(/'/g, "\\'")}'`);
      
      // Also update openGraph title if exists
      content = content.replace(/openGraph:\s*\{[\s\S]*?title:\s*(?:["']|`)[^"'`]*(?:["']|`)/, (og) => {
        return og.replace(/title:\s*(?:["']|`)[^"'`]*(?:["']|`)/, `title: '${newTitle.replace(/'/g, "\\'")}'`);
      });

      // Replace description in metadata
      const newDescMatch = content.match(/description:\s*(?:["']|`)((?:[^"'`\\]|\\.)*)(?:["']|`)/);
      if (newDescMatch) {
        content = content.replace(newDescMatch[0], `description: '${newDesc.replace(/'/g, "\\'")}'`);
      }

      // Also update openGraph description
      content = content.replace(/openGraph:\s*\{[\s\S]*?description:\s*(?:["']|`)[^"'`]*(?:["']|`)/, (og) => {
        return og.replace(/description:\s*(?:["']|`)[^"'`]*(?:["']|`)/, `description: '${newDesc.replace(/'/g, "\\'")}'`);
      });

      fs.writeFileSync(filePath, content, 'utf8');
      optimizedCount++;
    }
  }
}

console.log(`Successfully optimized SEO metadata for ${optimizedCount} feature articles!`);
