import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';
  
  // Load posts dynamically
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

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...postEntries,
  ];
}
