const fs = require('fs');

const dirs = [
  'winter-fukuoka-fukutsu-miyajidake-shrine-hatsumode-hikari-genkainada-stay',
  'winter-fukushima-tadami-line-yanaizu-onsen-aizujidori-stay',
  'winter-ibaraki-kashima-jingu-hatsumode-itako-hamaguri-hitachigyu-stay',
  'winter-mie-kumano-kodo-onigajo-owase-tai-kumanogyu-stay',
  'winter-miyazaki-ebino-plateau-shiratori-onsen-miyazakigyu-stay',
  'winter-nara-shigisan-chogosonshiji-hatsumode-onsen-yamatogyu-stay',
  'winter-niigata-nagaoka-teradomari-kani-yomogihira-onsen-koryu-stay',
  'winter-saitama-chichibu-hyochu-onouchi-ogano-onsen-jibier-stay',
  'winter-shiga-yogo-lake-wakasagi-kamonabe-shizugatake-stay',
  'winter-yamagata-tendo-onsen-yamadera-snow-risshakuji-yamagatagyu-stay'
];

dirs.forEach(dir => {
  const filePath = 'src/app/' + dir + '/page.tsx';
  let content = fs.readFileSync(filePath, 'utf-8');

  // 1. クチコミの末尾の途切れ記号（…、つづ、投。など）を綺麗にトリム
  content = content.replace(/("「[^」]*?)(?:[…\s]*投[。]?|[…\s]*つづ[きは]*[。]?|[…\s]*クチコミ[の詳細はこ]*[…。]+|[…]+)(")/g, (match, p1, p2) => {
    let clean = p1.replace(/[…\s]+$/, '');
    clean = clean.replace(/([。、])$/, '');
    return clean + '。」' + p2;
  });

  // 2. 宿カードの本文: text-xs text-stone-600 leading-relaxed
  // 文を分割して2つの段落に分ける
  content = content.replace(
    /<p className="text-xs text-stone-600 leading-relaxed">\s*([\s\S]*?)\s*<\/p>/g,
    (m, pText) => {
      const trimmed = pText.trim();
      const sentences = trimmed.split(/(?<=。)/);
      if (sentences.length >= 3) {
        const mid = Math.ceil(sentences.length / 2);
        const part1 = sentences.slice(0, mid).join('');
        const part2 = sentences.slice(mid).join('');
        return `<div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>${part1}</p>
                      <p>${part2}</p>
                    </div>`;
      }
      return `<p className="text-sm sm:text-base text-stone-700 leading-relaxed">${trimmed}</p>`;
    }
  );

  // 3. 宿カードの箇条書きリスト
  content = content.replace(
    /<ul className="text-xs text-stone-700 space-y-1 pt-1 border-t border-stone-100">/g,
    '<ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">'
  );

  // 4. クチコミ枠
  content = content.replace(
    /<div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200\/60">/g,
    '<div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">'
  );

  // 5. REASONカードの本文
  content = content.replace(
    /<p className="text-xs sm:text-sm text-stone-600 leading-relaxed">/g,
    '<p className="text-sm sm:text-base text-stone-600 leading-relaxed">'
  );

  // 6. Wikipediaセクション本文
  content = content.replace(
    /<p className="text-xs sm:text-sm text-stone-600 leading-relaxed">/g,
    '<p className="text-sm text-stone-600 leading-relaxed">'
  );

  // 7. FAQセクション本文
  content = content.replace(
    /<p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">/g,
    '<p className="text-sm sm:text-base text-stone-600 leading-relaxed pl-5">'
  );

  // 8. ヒーローセクションのリード文を段落分割
  content = content.replace(
    /<p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl pt-2">\s*([\s\S]*?)\s*<\/p>/,
    (match, text) => {
      const sentences = text.trim().split(/(?<=。)/);
      if (sentences.length >= 3) {
        const mid = Math.ceil(sentences.length / 2);
        const p1 = sentences.slice(0, mid).join('');
        const p2 = sentences.slice(mid).join('');
        return `<div className="space-y-3 pt-3 max-w-3xl text-stone-200 text-sm sm:text-base leading-relaxed sm:leading-loose">
              <p>${p1}</p>
              <p>${p2}</p>
            </div>`;
      }
      return `<p className="text-stone-200 text-sm sm:text-base leading-relaxed sm:leading-loose max-w-3xl pt-3">${text.trim()}</p>`;
    }
  );

  // 9. アクセス・気候セクションのカード化
  const accessRegex = /<div className="[^"]*whitespace-pre-line[^"]*">\s*([\s\S]*?)\s*<\/div>/;
  const accessMatch = content.match(accessRegex);
  if (accessMatch) {
    const rawText = accessMatch[1].trim();
    const sections = rawText.split(/(?=【)/);
    let newCardsHtml = '<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">\n';
    
    sections.forEach(sec => {
      const lines = sec.trim().split('\n').filter(l => l.trim().length > 0);
      if (lines.length === 0) return;
      const title = lines[0].replace(/【|】/g, '');
      const items = lines.slice(1);
      
      newCardsHtml += '              <div className="bg-stone-50 rounded-xl p-4 sm:p-5 border border-stone-200/80 space-y-3">\n';
      newCardsHtml += '                <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 border-b border-stone-200/80 pb-2">\n';
      newCardsHtml += '                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-700"></span>\n';
      newCardsHtml += '                  <span>' + title + '</span>\n';
      newCardsHtml += '                </h4>\n';
      newCardsHtml += '                <ul className="space-y-2 text-xs sm:text-sm text-stone-600 leading-relaxed">\n';
      items.forEach(item => {
        const cleanItem = item.replace(/^[・\-\s]+/, '');
        const colonIdx = cleanItem.indexOf('：');
        if (colonIdx !== -1) {
          const itemTitle = cleanItem.slice(0, colonIdx);
          const itemDesc = cleanItem.slice(colonIdx + 1);
          newCardsHtml += '                  <li className="flex items-start gap-1.5">\n';
          newCardsHtml += '                    <span className="text-cyan-700 font-bold shrink-0">・</span>\n';
          newCardsHtml += '                    <span><strong className="text-stone-800 font-semibold">' + itemTitle + '：</strong>' + itemDesc + '</span>\n';
          newCardsHtml += '                  </li>\n';
        } else {
          newCardsHtml += '                  <li className="flex items-start gap-1.5">\n';
          newCardsHtml += '                    <span className="text-cyan-700 font-bold shrink-0">・</span>\n';
          newCardsHtml += '                    <span>' + cleanItem + '</span>\n';
          newCardsHtml += '                  </li>\n';
        }
      });
      newCardsHtml += '                </ul>\n';
      newCardsHtml += '              </div>\n';
    });
    newCardsHtml += '            </div>';

    content = content.replace(accessRegex, newCardsHtml);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
});

console.log('Mobile-first typography and paragraph structure successfully updated across 10 pages!');
