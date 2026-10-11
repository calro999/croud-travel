const fs = require('fs');
const dirs = fs.readdirSync('src/app').filter(d => fs.existsSync('src/app/' + d + '/page.tsx'));

let count = 0;
dirs.forEach(d => {
  const filePath = 'src/app/' + d + '/page.tsx';
  let c = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // flex-col lg:flex-row / md:flex-row カード
  if (c.includes('flex flex-col lg:flex-row') || c.includes('flex flex-col md:flex-row')) {
    // カード全体の flex 変更（ボタンやヘッダー以外）
    c = c.replace(/className="([^"]*(?:rounded-2xl|rounded-3xl|shadow-)[^"]*)flex flex-col (?:md|lg):flex-row([^"]*)"/g, 'className="$1flex flex-col$2"');
    
    // 画像コンテナの変更
    c = c.replace(/className="[^"]*(?:md|lg):w-2\/5[^"]*min-h-\[260px\][^"]*"/g, 'className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-slate-100 overflow-hidden"');
    c = c.replace(/className="lg:w-2\/5 relative min-h-\[260px\] lg:min-h-full"/g, 'className="relative w-full aspect-[16/9] sm:aspect-[21/9] bg-slate-100 overflow-hidden"');
    
    // テキストコンテナの変更
    c = c.replace(/p-6 md:p-8 md:w-3\/5/g, 'p-6 md:p-8 w-full');
    c = c.replace(/p-6 lg:p-8 lg:w-3\/5/g, 'p-6 lg:p-8 w-full');
    c = c.replace(/p-5 md:w-3\/5/g, 'p-5 sm:p-7 w-full');
    c = c.replace(/p-5 lg:w-3\/5/g, 'p-5 sm:p-7 w-full');
    
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, c, 'utf-8');
    count++;
  }
});

console.log('Fourth pass sweep transformed:', count);
