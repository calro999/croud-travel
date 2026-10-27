import FeatureTrendsSection from "./FeatureTrendsSection";
import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Link from "next/link";
import FeaturesGrid, { FeaturePost } from "./FeaturesGrid";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/features/" },
  title: "旅のテーマ別特集＆ホテル厳選まとめ一覧",
  description: "楽天トラベルで人気の高級宿、絶景リゾート、温泉旅館、カップル旅行、ファミリー向けホテルなどを旅の目的別にまとめた特設ページです。",
  keywords: ["厳選！", "まとめ記事一覧", "温泉宿", "宿泊予約", "楽天トラベル", "国内旅行", "観光ガイド"],
  openGraph: {
    title: "厳選！特集・まとめ記事一覧",
    description: "人気の高級宿、絶景リゾート、温泉旅館、カップル旅行、ファミリー向けホテルなどを旅の目的別にまとめた特設ページです。",
  }
};

export const dynamic = 'force-static';

async function getFeaturePosts(): Promise<FeaturePost[]> {
  try {
    const postsJsonPath = path.join(process.cwd(), "public", "data", "posts.json");
    if (!fs.existsSync(postsJsonPath)) {
      return [];
    }
    const allPosts = JSON.parse(fs.readFileSync(postsJsonPath, "utf-8"));
    const posts: FeaturePost[] = [];

    for (const data of allPosts) {
      if (data.is_special_feature === true) {
        posts.push({
          id: data.id,
          title: data.title,
          image: data.image || (data.other_images && data.other_images[0]) || "",
          date: data.date,
          categories: data.categories || [],
          description: data.description || "",
          prefecture: data.prefecture || "全国",
        });
      }
    }
    posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return posts;
  } catch (e) {
    console.error("Error reading feature posts from posts.json:", e);
    return [];
  }
}



export default async function FeaturesPage() {
  const posts = await getFeaturePosts();

  return (
    <div className="space-y-10 max-w-6xl mx-auto">
      {/* パンくずナビゲーション */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">特集・まとめ記事一覧</span>
      </nav>

      {/* ヒーローヘッダー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-800 via-emerald-800 to-teal-900 p-8 md:p-12 text-white shadow-md space-y-4">
        <span className="inline-block text-[10px] font-extrabold tracking-widest bg-white/20 border border-white/30 px-3.5 py-1 rounded-full uppercase">
          EDITOR&apos;S PICK 💎
        </span>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-snug">厳選！特集・まとめ記事一覧</h1>
        <p className="text-teal-100/90 text-xs md:text-sm max-w-2xl leading-relaxed font-medium">
          「特別な記念日に行きたい高級旅館」や「赤ちゃん連れでも安心のウェルカムベビーのお宿」「話題のサウナ付き絶景ホテル」など、旅の目的やテーマに合わせて厳選した最高品質のまとめ記事をお届けします。気になるタグをクリックして、あなたにぴったりの旅行プランを見つけてください。
        </p>
      </section>

      {/* 🍁 秋の行楽・美食温泉宿35選 特設まとめバナー */}
      <section className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-3xl p-6 md:p-8 text-white shadow-lg flex flex-col items-center justify-between gap-6">
        <div className="space-y-2">
          <span className="inline-block text-[10px] font-black tracking-wider bg-white/20 px-3 py-0.5 rounded-full uppercase">
            季節の超特別企画 🍁
          </span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif">
            【2026年最新】全国の秋の味覚＆紅葉を満喫する絶品温泉宿35選 まとめ
          </h2>
          <p className="text-amber-100 text-xs md:text-sm max-w-2xl leading-relaxed">
            北海道のカニ食べ放題から、丹波松茸、シャインマスカット狩り、伊勢海老・車海老、ブランド和牛まで！全国エリア別の秋限定グルメ＆名湯旅館を一挙公開。
          </p>
        </div>
        <Link
          href="/campaigns/autumn-gourmet-travel/"
          className="w-full md:w-auto px-8 py-4 bg-white text-amber-900 hover:bg-amber-50 font-black text-xs md:text-sm rounded-2xl shadow-md transition text-center whitespace-nowrap"
        >
          秋の味覚 特集まとめを見る →
        </Link>
      </section>

      {/* ❄️ 冬の絶景・美食温泉宿 特設まとめバナー */}
      <section className="bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 rounded-3xl p-6 md:p-8 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-sky-500/20">
        <div className="space-y-2">
          <span className="inline-block text-[10px] font-black tracking-wider bg-sky-500/20 text-sky-200 border border-sky-400/30 px-3 py-0.5 rounded-full uppercase">
            冬の超特別企画 ❄️
          </span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif">
            【2026-2027年最新】全国の冬の絶景温泉＆冬の美食満喫特集 500選 まとめ
          </h2>
          <p className="text-sky-100 text-xs md:text-sm max-w-2xl leading-relaxed">
            松葉ガニ・越前ガニ、下関とらふぐ、雪見露天風呂、新春開運初詣、きらめく冬イルミネーションまで！全国エリア別の厳選特集記事500選を一挙公開。
          </p>
        </div>
        <Link
          href="/winter-travel-special/"
          className="w-full md:w-auto px-8 py-4 bg-sky-400 text-sky-950 hover:bg-sky-300 font-black text-xs md:text-sm rounded-2xl shadow-md transition text-center whitespace-nowrap"
        >
          冬の厳選特集まとめを見る →
        </Link>
      </section>

      <FeatureTrendsSection />

      {/* 特集記事グリッド（クライアントコンポーネント） */}
      <FeaturesGrid initialPosts={posts} />
    </div>
  );
}
