import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Link from "next/link";
import AutumnSpecialHubClient from "./AutumnSpecialHubClient";
import autumnPostsData from "@/data/autumnFeaturesData.json";

export const metadata: Metadata = {
  title: "全国の秋の味覚＆紅葉を満喫する絶品温泉宿特集まとめ ｜ 日本全国・旅宿クラウド",
  description: "北海道のカニ・いくら、北陸のズワイガニ・甘エビ、信州・丹波の松茸、長野のシャインマスカット・信州りんご、九州の伊勢海老・車海老など、全国エリア別・目的別の秋の味覚＆紅葉名湯旅館特集を網羅！",
  keywords: ["秋の味覚", "カニ食べ放題", "松茸料理", "シャインマスカット", "伊勢海老", "紅葉温泉", "楽天トラベル", "秋旅行"],
  alternates: {
    canonical: "https://croud-travel.pages.dev/campaigns/autumn-gourmet-travel/"
  },
  openGraph: {
    title: "全国の秋の味覚＆紅葉を満喫する絶品温泉宿特集まとめ",
    description: "カニ・松茸・フルーツ狩り・伊勢海老・秋鮭・和牛など、全国エリア別の秋の味覚＆名湯温泉宿を一挙まとめ！",
    url: "https://croud-travel.pages.dev/campaigns/autumn-gourmet-travel",
    images: [
      {
        url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "秋の味覚＆名湯旅館特集"
      }
    ]
  }
};

export const dynamic = 'force-static';

export default function AutumnGourmetTravelPage() {
  return (
    <div className="space-y-10 max-w-6xl mx-auto px-4 py-6">
      {/* パンくずナビ */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/features" className="hover:text-teal-800 transition">特集・まとめ記事一覧</Link>
        <span>/</span>
        <span className="text-amber-950 font-bold">秋の味覚＆紅葉温泉宿特集</span>
      </nav>

      {/* ヒーローヘッダー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-700 via-orange-600 to-amber-900 p-8 md:p-12 text-white shadow-xl space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-block text-[10px] font-black tracking-widest bg-white/20 border border-white/30 px-3.5 py-1 rounded-full uppercase">
            AUTUMN GOURMET & HOT SPRINGS 🍁
          </span>
          <span className="inline-block text-[10px] font-black bg-amber-400 text-amber-950 px-3 py-1 rounded-full">
            全国{autumnPostsData.length}特集 網羅
          </span>
        </div>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-snug">
          全国の秋の味覚＆紅葉を満喫する絶品温泉宿特集
        </h1>
        <p className="text-amber-100/95 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          ズワイガニ・北海道秋鮭いくら、丹波・信州松茸の土瓶蒸し、採れたてシャインマスカット・完熟フルーツ狩り、伊勢海老・活車海老、極上のブランド黒毛和牛など！
          目的や地方エリアで迷わずスムーズにお好みの個別特集記事へアクセスできます。
        </p>

        {/* 冬特集へのスムーズな切り替え導線 */}
        <div className="pt-2 flex flex-wrap gap-3">
          <Link
            href="/winter-travel-special"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-900/80 hover:bg-sky-950 text-sky-100 hover:text-white text-xs font-bold rounded-2xl border border-sky-400/40 backdrop-blur-sm transition shadow-sm"
          >
            <span>❄️ 冬の絶景＆美食特集まとめを見る →</span>
          </Link>
          <Link
            href="/campaigns"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold rounded-2xl border border-white/30 backdrop-blur-sm transition shadow-sm"
          >
            <span>🏷️ 楽天トラベルお得クーポン特集</span>
          </Link>
        </div>
      </section>

      {/* 目的別＆エリア別インタラクティブ絞り込みナビゲーション */}
      <AutumnSpecialHubClient posts={autumnPostsData} />

      {/* ボトム案内・冬特集導線 */}
      <section className="bg-gradient-to-r from-sky-900 to-indigo-950 rounded-3xl p-8 text-white shadow-xl space-y-4">
        <span className="inline-block text-[10px] font-black tracking-wider bg-white/20 px-3 py-0.5 rounded-full uppercase">
          WINTER SPECIAL ❄️
        </span>
        <h2 className="text-xl md:text-2xl font-black font-journal-serif">
          冬の旅行計画ならこちら！冬の厳選温泉・美食特集 500選
        </h2>
        <p className="text-sky-100 text-xs md:text-sm max-w-2xl leading-relaxed">
          冬本番を迎える越前ガニ・松葉ガニ、下関とらふぐ、絶景の雪見露天風呂、新春初詣、きらめく冬イルミネーションなど、冬ならではの日本全国の旅宿特集を一挙公開中。
        </p>
        <div className="pt-2">
          <Link
            href="/winter-travel-special"
            className="inline-block px-8 py-3.5 bg-sky-400 hover:bg-sky-300 text-sky-950 text-xs md:text-sm font-black rounded-2xl shadow-lg transition"
          >
            冬の厳選特集まとめを見る ❄️ →
          </Link>
        </div>
      </section>
    </div>
  );
}
