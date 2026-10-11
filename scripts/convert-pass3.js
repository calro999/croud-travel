const fs = require('fs');
const dirs = fs.readdirSync('src/app').filter(d => fs.existsSync('src/app/' + d + '/page.tsx'));

let count = 0;
dirs.forEach(d => {
  const filePath = 'src/app/' + d + '/page.tsx';
  let c = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // pattern: grid md:grid-cols-12 gap-6
  if (c.includes('grid md:grid-cols-12 gap-6')) {
    c = c.replace(/grid md:grid-cols-12 gap-6/g, 'flex flex-col gap-5');
    c = c.replace(/md:col-span-5 relative h-52 md:h-auto/g, 'w-full relative aspect-[16/9] sm:aspect-[21/9]');
    c = c.replace(/md:col-span-5 relative h-48 md:h-auto/g, 'w-full relative aspect-[16/9] sm:aspect-[21/9]');
    c = c.replace(/md:col-span-5 relative min-h-\[[^\]]+\]/g, 'w-full relative aspect-[16/9] sm:aspect-[21/9]');
    changed = true;
  }

  // 汎用: md:col-span-5 relative
  if (c.includes('md:col-span-5 relative')) {
    c = c.replace(/md:col-span-5 relative [^"]* rounded-xl overflow-hidden/g, 'w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden');
    changed = true;
  }

  // md:col-span-7 space-y-
  if (c.includes('md:col-span-7 space-y-')) {
    c = c.replace(/md:col-span-7 space-y-/g, 'w-full space-y-');
    changed = true;
  }

  // md:col-span-7 flex flex-col
  if (c.includes('md:col-span-7 flex flex-col')) {
    c = c.replace(/md:col-span-7 flex flex-col/g, 'w-full flex flex-col');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, c, 'utf-8');
    count++;
  }
});

console.log('Third pass transformed:', count);
