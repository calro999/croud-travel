const fs = require('fs');
const dirs = fs.readdirSync('src/app').filter(d => fs.existsSync('src/app/' + d + '/page.tsx'));

let count = 0;
dirs.forEach(d => {
  const filePath = 'src/app/' + d + '/page.tsx';
  let c = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // 1. furusato-tax などの flex flex-col md:flex-row (194件)
  // className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row"
  // className="md:w-2/5 relative min-h-[220px] bg-slate-200"
  // className="p-5 md:w-3/5 flex flex-col justify-between space-y-4"
  if (c.includes('border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row')) {
    c = c.replace(
      /border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col md:flex-row/g,
      'border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col'
    );
    c = c.replace(
      /className="md:w-2\/5 relative min-h-\[220px\] bg-slate-200"/g,
      'className="w-full relative aspect-[16/9] sm:aspect-[21/9] bg-slate-200"'
    );
    c = c.replace(
      /className="p-5 md:w-3\/5 flex flex-col justify-between space-y-4"/g,
      'className="p-5 sm:p-7 w-full flex flex-col justify-between space-y-4"'
    );
    changed = true;
  }

  // 2. 類似の flex flex-col md:flex-row (180件)
  // className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 flex flex-col md:flex-row hover:shadow-md transition"
  if (c.includes('flex flex-col md:flex-row hover:shadow-md transition') || c.includes('flex flex-col md:flex-row hover:shadow-md')) {
    c = c.replace(/flex flex-col md:flex-row hover:shadow-md/g, 'flex flex-col hover:shadow-md');
    c = c.replace(/md:w-2\/5 relative/g, 'w-full relative aspect-[16/9] sm:aspect-[21/9]');
    c = c.replace(/md:w-3\/5 flex flex-col/g, 'w-full flex flex-col');
    c = c.replace(/p-5 md:w-3\/5/g, 'p-5 sm:p-7 w-full');
    c = c.replace(/p-6 md:w-3\/5/g, 'p-6 sm:p-8 w-full');
    changed = true;
  }

  // 3. rounded-3xl のカード (30件 + 15件)
  if (c.includes('rounded-3xl') && c.includes('flex flex-col md:flex-row')) {
    c = c.replace(/flex flex-col md:flex-row/g, 'flex flex-col');
    c = c.replace(/md:w-2\/5 relative [^"]*/g, 'w-full relative aspect-[16/9] sm:aspect-[21/9]');
    c = c.replace(/md:w-3\/5 flex flex-col/g, 'w-full flex flex-col');
    c = c.replace(/p-6 md:p-8 md:w-3\/5/g, 'p-6 md:p-8 w-full');
    changed = true;
  }

  // 4. grid grid-cols-1 lg:grid-cols-12 gap-0 (130件)
  if (c.includes('grid grid-cols-1 lg:grid-cols-12 gap-0')) {
    c = c.replace(/grid grid-cols-1 lg:grid-cols-12 gap-0/g, 'flex flex-col');
    c = c.replace(/lg:col-span-5 relative [^"]*/g, 'w-full relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden');
    c = c.replace(/lg:col-span-7 [^"]*/g, 'w-full p-5 sm:p-7 flex flex-col justify-between space-y-4');
    changed = true;
  }

  // 5. grid grid-cols-1 md:grid-cols-12 gap-4/5/6 items-center
  if (c.includes('grid grid-cols-1 md:grid-cols-12') && (c.includes('items-center') || c.includes('items-start'))) {
    c = c.replace(/grid grid-cols-1 md:grid-cols-12 gap-([456]) items-(center|start)/g, 'flex flex-col gap-$1');
    c = c.replace(/md:col-span-5 relative [^"]*/g, 'w-full relative aspect-[16/9] sm:aspect-[21/9]');
    c = c.replace(/md:col-span-7/g, 'w-full');
    changed = true;
  }

  // 6. grid grid-cols-1 md:grid-cols-12 gap-6 mb-6
  if (c.includes('grid grid-cols-1 md:grid-cols-12 gap-6 mb-6')) {
    c = c.replace(/grid grid-cols-1 md:grid-cols-12 gap-6 mb-6/g, 'flex flex-col gap-6 mb-6');
    c = c.replace(/md:col-span-5 relative [^"]*/g, 'w-full relative aspect-[16/9] sm:aspect-[21/9]');
    c = c.replace(/md:col-span-7/g, 'w-full');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, c, 'utf-8');
    count++;
  }
});

console.log('Mass layout conversion applied across pages:', count);
