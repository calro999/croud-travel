import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import PostListClient from "../components/PostListClient";

export const metadata: Metadata = {
  title: "厳選宿泊記・特集ルポ一覧 ｜ 日本全国・旅宿クラウド",
  description: "日本全国47都道府県の厳選された温泉宿、高級ホテル、絶景リゾート、グルメ宿の宿泊体験記・ルポ全件一覧。楽天トラベルの最新料金・お得プランと連携。",
  alternates: {
    canonical: "https://croud-travel.pages.dev/posts/",
  },
  openGraph: {
    title: "厳選宿泊記・特集ルポ一覧 ｜ 日本全国・旅宿クラウド",
    description: "日本全国47都道府県の温泉宿・高級ホテル・リゾートの宿泊体験記・ルポ全件一覧。",
    url: "https://croud-travel.pages.dev/posts/",
  },
};

interface Post {
  id: string;
  title: string;
  hotel_name: string;
  description?: string;
  review?: string;
  image: string;
  other_images: string[];
  affiliate_url: string;
  prefecture: string;
  area: string;
  categories: string[];
  price: string | number;
  rating: string | number;
  date: string;
}

function loadPosts(): Post[] {
  try {
    const dataPath = path.join(process.cwd(), "public", "data", "posts.json");
    if (fs.existsSync(dataPath)) {
      return JSON.parse(fs.readFileSync(dataPath, "utf8"));
    }
  } catch (e) {
    console.error("Failed to load posts in /posts page:", e);
  }
  return [];
}

export default function PostsIndexPage() {
  const posts = loadPosts();
  const slimPosts = posts.map((p) => ({
    id: p.id,
    title: p.title,
    hotel_name: p.hotel_name,
    description: (p.description || "").slice(0, 120),
    image: p.image,
    other_images: [] as string[],
    affiliate_url: "",
    prefecture: p.prefecture,
    area: p.area,
    categories: p.categories,
    price: p.price,
    rating: p.rating,
    date: p.date,
  }));

  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      {/* パンくずリスト */}
      <nav className="flex items-center gap-2 text-xs text-emerald-950/60 font-medium">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">厳選宿泊記・特集一覧</span>
      </nav>

      {/* ヘッダーエリア */}
      <div className="bg-gradient-to-r from-teal-900 via-emerald-950 to-amber-950 text-white rounded-3xl p-8 md:p-12 shadow-md">
        <span className="text-[10px] font-extrabold tracking-widest text-amber-300 uppercase bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full inline-block mb-3">
          HOTEL JOURNAL ARCHIVE 📜
        </span>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif tracking-tight">日本全国の厳選宿・特集ルポ一覧</h1>
        <p className="mt-3 text-xs md:text-sm text-emerald-100/80 max-w-2xl leading-relaxed">
          全国47都道府県の温泉旅館・リゾートホテル・名門シティホテルを旅ライターが徹底取材。エリアや旅のテーマから、今行くべき理想の宿泊体験を探してみてください。
        </p>
      </div>

      {/* 検索・絞り込み＆記事一覧 */}
      <div className="space-y-6">
        <PostListClient initialPosts={slimPosts} />
      </div>
    </div>
  );
}
