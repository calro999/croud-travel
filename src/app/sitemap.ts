import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { PREFECTURES_DATA } from '@/data/prefecturesData';

export const dynamic = 'force-static';

interface Post {
  id: string;
  date?: string;
  prefecture?: string;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';
  
  // 1. 投稿記事ページのURL生成
  let posts: Post[] = [];
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
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,  // 0.8 → 0.9 に引き上げ（宿記事を重要視）
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
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/kanazawa`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/noto`,
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
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sitemap`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  return [
    ...staticEntries,
    ...prefectureEntries,
    ...postEntries,
  ];
}
