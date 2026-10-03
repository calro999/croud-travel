const fs = require('fs');

const files = [
  'scripts/round112/generate_tokyo_odaiba.js',
  'scripts/round112/generate_osaka_castle.js',
  'scripts/round112/generate_hyogo_kobe_port.js',
  'scripts/round112/generate_nara_park.js',
  'scripts/round112/generate_saitama_omiya.js'
];

for (const f of files) {
  let content = fs.readFileSync(f, 'utf-8');

  // 1. Fix imports: ensure import type { Metadata } from 'next';
  // Replace the import section
  content = content.replace(
    /import React[\s\S]+?from ['"]lucide-react['"];/,
    `import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Flame, Anchor, Landmark, Castle, Mountain, TreePine, Snowflake, ShieldCheck
} from 'lucide-react';`
  );

  // 2. Fix faqList vs faqData in JSX:
  // In component, "const faqData = ...;" exists. Change {faqList.map((item, idx) to {faqData.map((item: any, idx: number)
  content = content.replace(/\{faqList\.map\(\(item,\s*idx\)\s*=>/g, '{faqData.map((item: any, idx: number) =>');

  fs.writeFileSync(f, content, 'utf-8');
  console.log('Fixed:', f);
}
