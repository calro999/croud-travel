const fs = require('fs');
const path = require('path');

const slugs = [
  'winter-miyagi-sendai-city-hikarino-pageant-zundamochi-sendaigyu-kaki-stay',
  'winter-hiroshima-shobara-taishakukyo-snow-kagura-chugokugyu-stay'
];

const today = '2026-10-03';

// 1. Update public/sitemap-features.xml
const sitemapPath = path.join(__dirname, 'public', 'sitemap-features.xml');
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
let sitemapEntries = '';

for (const slug of slugs) {
  if (!sitemapContent.includes(`https://croud-travel.pages.dev/${slug}/`)) {
    sitemapEntries += `  <url>
    <loc>https://croud-travel.pages.dev/${slug}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>\n`;
  }
}

if (sitemapEntries) {
  sitemapContent = sitemapContent.replace('</urlset>', `${sitemapEntries}</urlset>`);
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');
  console.log(`✅ Added ${slugs.length} URLs to public/sitemap-features.xml`);
} else {
  console.log('ℹ️ URLs already in sitemap-features.xml');
}

// 2. Update public/llms-full.txt
const llmsPath = path.join(__dirname, 'public', 'llms-full.txt');
if (fs.existsSync(llmsPath)) {
  let llmsContent = fs.readFileSync(llmsPath, 'utf8');
  let llmsEntries = '';
  for (const slug of slugs) {
    if (!llmsContent.includes(`https://croud-travel.pages.dev/${slug}/`)) {
      llmsEntries += `- https://croud-travel.pages.dev/${slug}/\n`;
    }
  }
  if (llmsEntries) {
    llmsContent = llmsContent.trim() + '\n' + llmsEntries;
    fs.writeFileSync(llmsPath, llmsContent, 'utf8');
    console.log(`✅ Added ${slugs.length} URLs to public/llms-full.txt`);
  } else {
    console.log('ℹ️ URLs already in llms-full.txt');
  }
}
