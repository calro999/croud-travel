with open('bundle_posts.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace staticPages to avoid duplicate pages that exist as feature directories
import re

old_block = """  // 主要静的ページ（メイン固定ハブ）
  const staticPages = [
    { url: `${BASE_URL}/`, priority: '1.0', changefreq: 'daily' },
    { url: `${BASE_URL}/features/`, priority: '0.9', changefreq: 'daily' },
    { url: `${BASE_URL}/prefectures/`, priority: '0.9', changefreq: 'daily' },
    { url: `${BASE_URL}/campaigns/`, priority: '0.9', changefreq: 'daily' },
    { url: `${BASE_URL}/furusato/`, priority: '0.95', changefreq: 'daily' },
    { url: `${BASE_URL}/ranking/`, priority: '0.95', changefreq: 'daily' },
    { url: `${BASE_URL}/campaigns/autumn-gourmet-travel/`, priority: '0.85', changefreq: 'weekly' },
    { url: `${BASE_URL}/kanazawa/`, priority: '0.85', changefreq: 'weekly' },
    { url: `${BASE_URL}/noto/`, priority: '0.85', changefreq: 'weekly' },
    { url: `${BASE_URL}/sitemap/`, priority: '0.8', changefreq: 'weekly' }
  ];"""

new_block = """  // 主要静的ページ（メイン固定ハブ）
  const staticPages = [
    { url: `${BASE_URL}/`, priority: '1.0', changefreq: 'daily' },
    { url: `${BASE_URL}/features/`, priority: '0.9', changefreq: 'daily' },
    { url: `${BASE_URL}/prefectures/`, priority: '0.9', changefreq: 'daily' },
    { url: `${BASE_URL}/campaigns/`, priority: '0.9', changefreq: 'daily' },
    { url: `${BASE_URL}/campaigns/autumn-gourmet-travel/`, priority: '0.85', changefreq: 'weekly' },
    { url: `${BASE_URL}/sitemap/`, priority: '0.8', changefreq: 'weekly' }
  ];"""

if old_block in text:
    text = text.replace(old_block, new_block)
    with open('bundle_posts.js', 'w', encoding='utf-8') as f:
        f.write(text)
    print('Successfully updated bundle_posts.js to remove duplicate sitemap URLs!')
else:
    print('Old block not found!')
