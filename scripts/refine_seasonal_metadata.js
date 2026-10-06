const fs = require('fs');
const path = require('path');

const appDir = path.join(process.cwd(), 'src/app');

function cleanText(t) {
  if (!t) return '';
  return t.replace(/\\"/g, '"').replace(/\\'/g, "'").trim();
}

// Prefectures mapping for clean fallback
const prefMap = {
  hokkaido: '北海道', aomori: '青森', iwate: '岩手', miyagi: '宮城', akita: '秋田', yamagata: '山形', fukushima: '福島',
  ibaraki: '茨城', tochigi: '栃木', gunma: '群馬', saitama: '埼玉', chiba: '千葉', tokyo: '東京', kanagawa: '神奈川',
  niigata: '新潟', toyama: '富山', ishikawa: '石川', fukui: '福井', yamanashi: '山梨', nagano: '長野', gifu: '岐阜',
  shizuoka: '静岡', aichi: '愛知', mie: '三重', shiga: '滋賀', kyoto: '京都', osaka: '大阪', hyogo: '兵庫',
  nara: '奈良', wakayama: '和歌山', tottori: '鳥取', shimane: '島根', okayama: '岡山', hiroshima: '広島', yamaguchi: '山口',
  tokushima: '徳島', kagawa: '香川', ehime: '愛媛', kochi: '高知', fukuoka: '福岡', saga: '佐賀', nagasaki: '長崎',
  kumamoto: '熊本', oita: '大分', miyazaki: '宮崎', kagoshima: '鹿児島', okinawa: '沖縄'
};

function optimizeMetadata(slug, origTitle, origDesc) {
  let title = origTitle.trim();
  let desc = origDesc.trim();

  // If title is already well-sized (<= 45 chars), keep it
  if (title.length > 45) {
    const m = title.match(/【(.*?)】(.*)/);
    if (m) {
      let bracket = m[1].trim();
      let rest = m[2].trim();

      // Clean bracket: preserve "11・12月" + Area
      // e.g. "11・12月岩手・八幡平温泉郷＆松川温泉" -> "11・12月八幡平・松川温泉"
      bracket = bracket.replace(/福島・|岩手・|静岡・|群馬・|山形・|新潟・|長野・|宮城・|秋田・|青森・/, '');
      if (bracket.length > 15) {
        bracket = bracket.replace(/＆.*$/, '').replace(/の.*$/, '');
      }

      // Rest hooks
      const chunks = rest.split(/[！・＆|｜、]/).map(c => c.trim()).filter(Boolean);
      
      // Look for primary attraction + gourmet/onsen
      let hook = '';
      const priorities = ['松葉ガニ', 'カニ', '蟹', '前沢牛', '山形牛', '近江牛', '飛騨牛', 'あか牛', '和牛', '伊勢海老', '金目鯛', '寒ブリ', 'ふぐ', 'フグ', '雪見露天', '樹氷', '初詣', 'イルミネーション', 'イルミ', '富士山', '富士', '絶景'];
      for (const p of priorities) {
        const found = chunks.find(c => c.includes(p));
        if (found) {
          hook = found;
          break;
        }
      }

      if (!hook) hook = chunks[0] || rest;
      hook = hook.replace(/を堪能する.*/, '').replace(/を巡る.*/, '').replace(/名宿.*/, '').replace(/の宿.*/, '').replace(/宿5選.*/, '').trim();

      let suffix = '名宿5選';
      if (rest.includes('3選')) suffix = '名宿3選';

      let cand = `【${bracket}】${hook}！${suffix}`;
      if (cand.length > 38) {
        cand = `【${bracket}】${hook.slice(0, 14)}！${suffix}`;
      }
      title = cand;
    }
  }

  // Optimize description: Target 100-125 chars with natural punctuation
  if (desc.length > 135 || desc.length < 90) {
    // Find first complete sentence
    const sentences = desc.split('。').map(s => s.trim()).filter(Boolean);
    let lead = sentences[0] || '';
    if (lead.length < 50 && sentences.length > 1) {
      lead = `${lead}。${sentences[1]}`;
    }
    if (lead.length > 75) {
      // cut at comma
      const commaIdx = lead.slice(0, 75).lastIndexOf('、');
      if (commaIdx > 35) {
        lead = lead.slice(0, commaIdx);
      } else {
        lead = lead.slice(0, 70);
      }
    }
    lead = lead.replace(/[。、]+$/, '');
    const cta = '楽天トラベルの最新空室状況・限定割引プランを徹底比較！';
    desc = `${lead}。${cta}`;
  }

  return { title, desc };
}

// Apply to targeted seasonal articles
const targetDirs = fs.readdirSync(appDir).filter(f => {
  const p = path.join(appDir, f);
  if (!fs.statSync(p).isDirectory()) return false;
  if (f.startsWith('(') || f.startsWith('api') || f === 'features' || f === 'hotels' || f === 'prefectures' || f === 'posts' || f === 'spots') return false;
  return f.startsWith('winter-') || f.startsWith('late-autumn-');
});

console.log(`Auditing ${targetDirs.length} winter/late-autumn feature articles...`);

let updated = 0;

for (const dirName of targetDirs) {
  const filePath = path.join(appDir, dirName, 'page.tsx');
  let content = fs.readFileSync(filePath, 'utf8');

  const titleMatch = content.match(/title:\s*(?:["']|`)((?:[^"'`\\]|\\.)*)(?:["']|`)/);
  const descMatch = content.match(/description:\s*(?:["']|`)((?:[^"'`\\]|\\.)*)(?:["']|`)/);

  if (titleMatch && descMatch) {
    const origTitle = titleMatch[1];
    const origDesc = descMatch[1];

    const { title: newTitle, desc: newDesc } = optimizeMetadata(dirName, origTitle, origDesc);

    if (newTitle !== origTitle || newDesc !== origDesc) {
      content = content.replace(titleMatch[0], `title: '${newTitle.replace(/'/g, "\\'")}'`);
      
      content = content.replace(/openGraph:\s*\{[\s\S]*?title:\s*(?:["']|`)[^"'`]*(?:["']|`)/, (og) => {
        return og.replace(/title:\s*(?:["']|`)[^"'`]*(?:["']|`)/, `title: '${newTitle.replace(/'/g, "\\'")}'`);
      });

      const newDescMatch = content.match(/description:\s*(?:["']|`)((?:[^"'`\\]|\\.)*)(?:["']|`)/);
      if (newDescMatch) {
        content = content.replace(newDescMatch[0], `description: '${newDesc.replace(/'/g, "\\'")}'`);
      }

      content = content.replace(/openGraph:\s*\{[\s\S]*?description:\s*(?:["']|`)[^"'`]*(?:["']|`)/, (og) => {
        return og.replace(/description:\s*(?:["']|`)[^"'`]*(?:["']|`)/, `description: '${newDesc.replace(/'/g, "\\'")}'`);
      });

      fs.writeFileSync(filePath, content, 'utf8');
      updated++;
    }
  }
}

console.log(`Refined titles and descriptions for ${updated} articles!`);
