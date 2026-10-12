import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Link from "next/link";
import WinterSpecialHubClient from "./WinterSpecialHubClient";
import winterPostsData from "@/data/winterFeaturesData.json";

export const metadata: Metadata = {
  title: "全国の冬の絶景温泉＆冬の美食満喫特集まとめ 500選 ｜ 日本全国・旅宿クラウド",
  description: "越前ガニ・松葉ガニ、下関とらふぐ、雪見露天風呂、新春初詣、きらめくイルミネーション、白銀の絶景スキーリゾートまで！全国エリア別・目的別の冬の厳選特集記事500選を網羅！",
  keywords: ["冬旅行", "カニ宿", "雪見露天", "とらふぐ", "初詣 宿", "冬 イルミネーション", "楽天トラベル クーポン", "温泉旅行 冬"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-travel-special/"
  },
  openGraph: {
    title: "全国の冬の絶景温泉＆冬の美食満喫特集まとめ 500選",
    description: "カニ・ふぐ・雪見温泉・初詣・冬の味覚など、全国エリア別・目的別の冬旅特集を一挙網羅！",
    url: "https://croud-travel.pages.dev/winter-travel-special",
    images: [
      {
        url: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/Shirakawa-go_%282017-07-22%29.jpg/3840px-Shirakawa-go_%282017-07-22%29.jpg",
        width: 1200,
        height: 630,
        alt: "冬の絶景温泉＆美食特集"
      }
    ]
  }
};

export const dynamic = 'force-static';

export default function WinterTravelSpecialPage() {
  return (
    <div className="space-y-10 max-w-6xl mx-auto px-4 py-6">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-teal-800 transition">特集・まとめ記事一覧</Link>
        <span>/</span>
        <span className="text-sky-950 font-bold">冬の絶景温泉＆美食特集 500選</span>
      </nav>

      {/* ヒーローヘッダー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-sky-950 to-indigo-950 p-8 md:p-12 text-white shadow-xl space-y-4 border border-sky-500/20">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block text-[10px] font-black tracking-widest bg-sky-500/20 border border-sky-400/40 px-3.5 py-1 rounded-full uppercase text-sky-200">
            WINTER SPECIAL & HOT SPRINGS ❄️
          </span>
          <span className="inline-block text-[10px] font-black bg-sky-400 text-sky-950 px-3 py-1 rounded-full">
            全国{winterPostsData.length}特集 網羅
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-snug">
          全国の冬の絶景温泉＆冬の美食満喫特集
        </h1>
        <p className="text-sky-100/95 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          北陸・山陰の本場松葉ガニ・越前ガニ、下関の極上とらふぐ、しんしんと雪降る情緒ある雪見露天風呂、新年の福を招く有名神社・寺院の初詣旅、きらめく街の冬イルミネーションなど！
          目的や地方エリアで迷わずスムーズにお好みの個別特集記事へアクセスできます。
        </p>

        {/* 秋特集・キャンペーンへの切り替え導線 */}
        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            href="/campaigns/autumn-gourmet-travel"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600/90 hover:bg-amber-700 text-amber-50 hover:text-white text-xs font-bold rounded-2xl border border-amber-400/40 backdrop-blur-sm transition shadow-sm"
          >
            <span>🍁 秋の味覚＆紅葉温泉宿特集を見る →</span>
          </Link>
          <Link
            href="/campaigns"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-2xl border border-white/20 backdrop-blur-sm transition shadow-sm"
          >
            <span>🏷️ 楽天トラベルお得クーポン特集</span>
          </Link>
        </div>
      </section>

      {/* 目的別＆エリア別インタラクティブ絞り込みナビゲーション */}
      <WinterSpecialHubClient posts={winterPostsData} />

      {/* ボトム案内・秋特集導線 */}
      <section className="bg-gradient-to-r from-amber-700 to-orange-800 rounded-3xl p-8 text-white shadow-xl space-y-4">
        <span className="inline-block text-[10px] font-black tracking-wider bg-white/20 px-3 py-0.5 rounded-full uppercase">
          AUTUMN GOURMET 🍁
        </span>
        <h2 className="text-xl md:text-2xl font-black font-journal-serif">
          秋の旬を味わい尽くす！秋の味覚＆紅葉温泉宿特集
        </h2>
        <p className="text-amber-100 text-xs md:text-sm max-w-2xl leading-relaxed">
          松茸、シャインマスカット、採れたて新米、伊勢海老、ブランド和牛など、実りの秋を満喫する厳選旅館特集もぜひチェックしてください。
        </p>
        <div className="pt-2">
          <Link
            href="/campaigns/autumn-gourmet-travel"
            className="inline-block px-8 py-3.5 bg-amber-400 hover:bg-amber-300 text-amber-950 text-xs md:text-sm font-black rounded-2xl shadow-lg transition"
          >
            秋の味覚特集まとめを見る 🍁 →
          </Link>
        </div>
      </section>
    </div>
  );
}
