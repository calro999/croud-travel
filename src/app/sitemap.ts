import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { PREFECTURES_DATA } from '@/data/prefecturesData';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';
  
  // 1. 投稿記事ページのURL生成
  let posts: any[] = [];
  try {
    const dataPath = path.join(process.cwd(), 'public', 'data', 'posts.json');
    if (fs.existsSync(dataPath)) {
      const fileContents = fs.readFileSync(dataPath, 'utf8');
      posts = JSON.parse(fileContents);
    }
  } catch (error) {
    console.error('Error reading posts for sitemap:', error);
  }

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.id}`,
    lastModified: new Date(post.date || Date.now()),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // 2. 47都道府県ページのURL生成
  const prefectureEntries: MetadataRoute.Sitemap = PREFECTURES_DATA.map((pref) => ({
    url: `${baseUrl}/prefectures/${pref.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  // 3. 基本ページのURL定義
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/prefectures`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/campaigns`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  return [
    ...staticEntries,
    ...prefectureEntries,
    ...postEntries,
  ];
}
