const fs = require('fs');
const sitemapPath = 'public/sitemap-features.xml';
let xml = fs.readFileSync(sitemapPath, 'utf8');
const r123 = JSON.parse(fs.readFileSync('round123_batch_data.json', 'utf8'));

const today = new Date().toISOString().split('T')[0];
let added = 0;

r123.forEach(a => {
  const urlTag = `  <url>\n    <loc>https://croud-travel.com/${a.slug}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  if (!xml.includes(a.slug)) {
    xml = xml.replace('</urlset>', `${urlTag}</urlset>`);
    added++;
    console.log('Added to sitemap:', a.slug);
  } else {
    console.log('Already in sitemap:', a.slug);
  }
});

fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log('Finished updating sitemap! Added count:', added);
