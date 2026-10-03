const fs = require('fs');

const files = [
  'scripts/round112/generate_tokyo_odaiba.js',
  'scripts/round112/generate_osaka_castle.js',
  'scripts/round112/generate_hyogo_kobe_port.js',
  'scripts/round112/generate_nara_park.js',
  'scripts/round112/generate_saitama_omiya.js'
];

const newImport = `import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, Flame, Anchor, Landmark, Castle, Mountain, TreePine, Snowflake, ShieldCheck
} from 'lucide-react';`;

for (const f of files) {
  let content = fs.readFileSync(f, 'utf-8');
  content = content.replace(/import \{[\s\S]+?\} from 'lucide-react';/, newImport);
  fs.writeFileSync(f, content, 'utf-8');
  console.log('Updated imports in:', f);
}
