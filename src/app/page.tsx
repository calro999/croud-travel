import fs from "fs";
import path from "path";
import Link from "next/link";
import { Metadata } from "next";
import { PREFECTURES_DATA } from "@/data/prefecturesData";
import PostListClient from "./components/PostListClient";

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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://croud-travel.pages.dev";

export const metadata: Metadata = {
  title: "日本全国の厳選宿・温泉旅館・ホテル一覧 ｜ 楽天トラベルで予約 ｜ 旅宿クラウド",
  description:
    "北海道から沖縄まで47都道府県の温泉宿・高級ホテル・リゾートを旅ライターが厳選紹介。楽天トラベルで今すぐ空室確認・予約可能。子連れ・カップル・女子旅など旅のテーマ別に検索できます。",
  keywords: [
    "温泉宿", "おすすめホテル", "旅行", "楽天トラベル", "47都道府県", "子連れ旅行",
    "カップル旅行", "女子旅", "高級旅館", "露天風呂", "旅館予約", "国内旅行",
  ],
  alternates: { canonical: baseUrl },
  openGraph: {
    title: "日本全国の厳選宿・温泉旅館・ホテル一覧 ｜ 旅宿クラウド",
    description: "北海道から沖縄まで47都道府県の温泉宿・高級ホテルを厳選紹介。楽天トラベルで空室確認・予約。",
    url: baseUrl,
    siteName: "旅宿クラウド",
    type: "website",
  },
};

function loadPosts(): Post[] {
  try {
    const dataPath = path.join(process.cwd(), "public", "data", "posts.json");
    if (fs.existsSync(dataPath)) {
      return JSON.parse(fs.readFileSync(dataPath, "utf8"));
    }
  } catch (e) {
    console.error("Failed to load posts:", e);
  }
  return [];
}

export default function Home() {
  const posts = loadPosts();

  // JSON-LD: WebSite + ItemList（記事一覧）
  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "旅宿クラウド",
    url: baseUrl,
    description: "日本全国47都道府県の厳選宿・温泉旅館・ホテルを紹介する旅行マガジン",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "旅宿クラウド",
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    sameAs: [
      `${baseUrl}/sitemap`
    ]
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "日本全国 厳選宿・ホテル 特集一覧",
    numberOfItems: posts.length,
    itemListElement: posts.slice(0, 50).map((post, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: post.hotel_name,
      url: `${baseUrl}/posts/${post.id}`,
    })),
  };

  return (
    <div className="space-y-12 md:space-y-16">
      {/* 構造化データ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebsite) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />

      {/* 旅行雑誌風 ヒーロービジュアル */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-950 to-amber-950 p-8 md:p-14 border border-emerald-950/20 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-amber-500/[0.04] rounded-full filter blur-3xl pointer-events-none" />

        <div className="relative max-w-2xl space-y-5">
          <span className="inline-flex text-[10px] font-extrabold tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3.5 py-1 rounded-full uppercase">
            厳選宿のデジタル旅行誌 📜
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            日本の、まだ見ぬ美景と<br />
            <span className="bg-gradient-to-r from-teal-100 via-amber-200 to-emerald-100 bg-clip-text text-transparent">
              極上の湯宿をめぐる旅
            </span>
          </h1>
          <p className="text-emerald-100/80 leading-relaxed text-xs md:text-sm max-w-lg font-medium">
            旅ライターが厳選した、楽天トラベルでおもわず予約したくなる「一生に一度は泊まりたい宿」と全国47都道府県の見所を特集。あなただけの至福の旅がここから始まります。
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 pt-4">
            <Link
              href="/autumn-leaves"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-600 via-rose-700 to-amber-700 hover:from-red-500 hover:to-amber-600 rounded-2xl shadow-lg transition border border-red-300/40 flex items-center gap-1.5 animate-pulse"
            >
              <span>🍁</span>
              <span>全国 紅葉露天風呂</span>
            </Link>
            <Link
              href="/silver-week"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-indigo-700 to-teal-800 hover:from-indigo-600 hover:to-teal-700 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🎯</span>
              <span>シルバーウィーク人気宿</span>
            </Link>
            <Link
              href="/winter-crab-gourmet"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-orange-600 to-red-700 hover:from-orange-500 hover:to-red-600 rounded-2xl shadow-lg transition border border-orange-300/40 flex items-center gap-1.5"
            >
              <span>🦀</span>
              <span>冬のカニ食べ尽くし宿</span>
            </Link>
            <Link
              href="/winter-snow-onsen"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-slate-700 to-blue-800 hover:from-slate-600 hover:to-blue-700 rounded-2xl shadow-lg transition border border-blue-300/40 flex items-center gap-1.5"
            >
              <span>❄️</span>
              <span>雪見露天風呂＆秘湯</span>
            </Link>
            <Link
              href="/spring-cherry-blossoms"
              className="px-5 py-3 text-xs md:text-sm font-black text-rose-950 bg-gradient-to-r from-pink-300 to-rose-300 hover:from-pink-200 hover:to-rose-200 rounded-2xl shadow-lg transition border border-pink-200 flex items-center gap-1.5"
            >
              <span>🌸</span>
              <span>桜・お花見絶景宿</span>
            </Link>
            <Link
              href="/summer-infinity-pool"
              className="px-5 py-3 text-xs md:text-sm font-black text-cyan-950 bg-gradient-to-r from-cyan-300 to-blue-300 hover:from-cyan-200 hover:to-blue-200 rounded-2xl shadow-lg transition border border-cyan-200 flex items-center gap-1.5"
            >
              <span>🏊</span>
              <span>インフィニティプール宿</span>
            </Link>
            <Link
              href="/autumn-gourmet-matsutake-wagyu"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-700 to-rose-900 hover:from-amber-600 hover:to-rose-800 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🍄</span>
              <span>松茸＆ブランド和牛宿</span>
            </Link>
            <Link
              href="/winter-ski-snowboard-resort"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-cyan-700 to-blue-900 hover:from-cyan-600 hover:to-blue-800 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>⛷️</span>
              <span>ゲレンデ直結スキー宿</span>
            </Link>
            <Link
              href="/winter-illumination-hotels"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-indigo-800 via-purple-800 to-rose-900 hover:from-indigo-700 hover:to-rose-800 rounded-2xl shadow-lg transition border border-purple-300/40 flex items-center gap-1.5"
            >
              <span>✨</span>
              <span>イルミネーション夜景宿</span>
            </Link>
            <Link
              href="/new-year-hatsumode-onsen"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-700 via-amber-700 to-yellow-800 hover:from-red-600 hover:to-amber-700 rounded-2xl shadow-lg transition border border-yellow-300/40 flex items-center gap-1.5"
            >
              <span>🌅</span>
              <span>初詣＆初日の出宿</span>
            </Link>
            <Link
              href="/autumn-wine-fruit-hunting"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-purple-800 to-rose-800 hover:from-purple-700 hover:to-rose-700 rounded-2xl shadow-lg transition border border-purple-300/40 flex items-center gap-1.5"
            >
              <span>🍇</span>
              <span>ワイナリー＆果実狩り宿</span>
            </Link>
            <Link
              href="/winter-hot-pot-gourmet"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-700 via-orange-800 to-amber-850 hover:from-red-600 hover:to-orange-700 rounded-2xl shadow-lg transition border border-orange-300/40 flex items-center gap-1.5"
            >
              <span>🍲</span>
              <span>ご当地あったか鍋宿</span>
            </Link>
            <Link
              href="/autumn-winter-sea-of-clouds"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-sky-700 to-indigo-900 hover:from-sky-600 hover:to-indigo-800 rounded-2xl shadow-lg transition border border-sky-300/40 flex items-center gap-1.5"
            >
              <span>☁️</span>
              <span>天空の雲海テラス宿</span>
            </Link>
            <Link
              href="/winter-onsen-town-yukata-walk"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-800 to-stone-900 hover:from-amber-700 hover:to-stone-800 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>👘</span>
              <span>温泉街・浴衣湯巡り宿</span>
            </Link>
            <Link
              href="/autumn-winter-solo-travel-retreat"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-800 to-slate-900 hover:from-teal-700 hover:to-slate-800 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>👤</span>
              <span>気ままなおひとり様宿</span>
            </Link>
            <Link
              href="/autumn-winter-sauna-retreat"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-700 to-cyan-900 hover:from-emerald-600 hover:to-cyan-800 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🧖</span>
              <span>絶景サウナ＆天然水風呂</span>
            </Link>
            <Link
              href="/winter-starry-sky-astrophotography"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-900 hover:from-blue-800 hover:to-indigo-900 rounded-2xl shadow-lg transition border border-indigo-300/40 flex items-center gap-1.5"
            >
              <span>🌌</span>
              <span>満天の星空観賞宿</span>
            </Link>
            <Link
              href="/autumn-winter-glamping-tent"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-700 via-orange-850 to-stone-900 hover:from-amber-600 hover:to-orange-750 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>⛺</span>
              <span>焚き火グランピング宿</span>
            </Link>
            <Link
              href="/autumn-winter-hot-spring-cure"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-800 to-teal-950 hover:from-emerald-700 hover:to-teal-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>♨️</span>
              <span>本格源泉かけ流し秘湯</span>
            </Link>
            <Link
              href="/autumn-art-museum-retreat"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-800 via-purple-900 to-slate-900 hover:from-rose-700 hover:to-purple-800 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>🎨</span>
              <span>名作アート＆美術館宿</span>
            </Link>
            <Link
              href="/winter-bayside-factory-nightview"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-slate-800 via-cyan-950 to-blue-900 hover:from-slate-700 hover:to-cyan-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🏭</span>
              <span>工場夜景＆ベイサイド宿</span>
            </Link>
            <Link
              href="/winter-snow-drift-ice-cruise"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-sky-800 via-blue-950 to-indigo-900 hover:from-sky-700 hover:to-indigo-800 rounded-2xl shadow-lg transition border border-sky-300/40 flex items-center gap-1.5"
            >
              <span>🧊</span>
              <span>オホーツク流氷クルーズ宿</span>
            </Link>
            <Link
              href="/autumn-winter-brewery-sake-tour"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-800 via-stone-850 to-rose-950 hover:from-amber-700 hover:to-stone-800 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🍶</span>
              <span>日本酒酒蔵めぐり宿</span>
            </Link>
            <Link
              href="/winter-warm-island-escape"
              className="px-5 py-3 text-xs md:text-sm font-black text-cyan-950 bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300 hover:from-teal-200 hover:to-emerald-200 rounded-2xl shadow-lg transition border border-teal-300 flex items-center gap-1.5"
            >
              <span>🌴</span>
              <span>冬の南国ぽかぽか避寒旅</span>
            </Link>
            <Link
              href="/autumn-temple-garden-lightup"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-700 via-red-800 to-amber-900 hover:from-rose-600 hover:to-amber-800 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>🏮</span>
              <span>紅葉庭園ライトアップ宿</span>
            </Link>
            <Link
              href="/autumn-winter-onsen-with-pet"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-750 via-teal-850 to-stone-900 hover:from-emerald-650 hover:to-stone-800 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🐾</span>
              <span>愛犬と泊まる温泉宿</span>
            </Link>
            <Link
              href="/winter-oyster-seafood-gourmet"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-700 via-indigo-850 to-teal-900 hover:from-blue-600 hover:to-indigo-750 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🦪</span>
              <span>冬の極上牡蠣＆海鮮宿</span>
            </Link>
            <Link
              href="/autumn-winter-train-scenery-station"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-750 via-orange-850 to-rose-900 hover:from-amber-650 hover:to-orange-750 rounded-2xl shadow-lg transition border border-orange-300/40 flex items-center gap-1.5"
            >
              <span>🚂</span>
              <span>絶景観光列車＆駅近宿</span>
            </Link>
            <Link
              href="/autumn-winter-fireplace-cafe-resort"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-stone-800 via-amber-950 to-stone-900 hover:from-stone-700 hover:to-amber-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🪵</span>
              <span>暖炉と読書クラシック宿</span>
            </Link>
            <Link
              href="/winter-snow-festival-illumination"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-cyan-700 via-blue-900 to-indigo-950 hover:from-cyan-600 hover:to-blue-800 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>⛄</span>
              <span>雪まつり＆かまくら宿</span>
            </Link>
            <Link
              href="/autumn-winter-scenic-drive-pass"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-800 via-teal-900 to-sky-950 hover:from-emerald-700 hover:to-teal-800 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🚗</span>
              <span>パノラマ絶景ドライブ宿</span>
            </Link>
            <Link
              href="/autumn-winter-private-bath-ryokan"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-900 via-pink-950 to-stone-900 hover:from-rose-800 hover:to-pink-900 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>🛁</span>
              <span>貸切露天風呂＆部屋食宿</span>
            </Link>
            <Link
              href="/winter-clear-air-fuji-view-hotels"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-sky-850 via-blue-950 to-red-950 hover:from-sky-750 hover:to-red-900 rounded-2xl shadow-lg transition border border-sky-300/40 flex items-center gap-1.5"
            >
              <span>🗻</span>
              <span>冠雪富士ビュー絶景宿</span>
            </Link>
            <Link
              href="/autumn-winter-traditional-ryokan-retro"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-850 via-yellow-950 to-stone-900 hover:from-amber-750 hover:to-stone-800 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🏮</span>
              <span>大正ロマン文化財老舗宿</span>
            </Link>
            <Link
              href="/winter-snow-fireworks-festivals"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-indigo-850 via-purple-950 to-pink-950 hover:from-indigo-750 hover:to-pink-900 rounded-2xl shadow-lg transition border border-purple-300/40 flex items-center gap-1.5"
            >
              <span>🎆</span>
              <span>冬花火＆雪上花火の宿</span>
            </Link>
            <Link
              href="/autumn-winter-workation-hot-spring"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-slate-900 to-emerald-950 hover:from-teal-750 hover:to-emerald-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>💻</span>
              <span>温泉ワーケーション宿</span>
            </Link>
            <Link
              href="/winter-snowshoe-frozen-waterfall"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-sky-750 via-cyan-900 to-blue-950 hover:from-sky-650 hover:to-cyan-850 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>❄️</span>
              <span>氷瀑＆スノーシュー探検宿</span>
            </Link>
            <Link
              href="/autumn-winter-traditional-craft-pottery"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-800 via-stone-850 to-orange-950 hover:from-amber-700 hover:to-stone-800 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🏺</span>
              <span>伝統工芸＆陶芸の里宿</span>
            </Link>
            <Link
              href="/autumn-winter-all-inclusive-luxury"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-purple-850 via-indigo-950 to-rose-950 hover:from-purple-750 hover:to-indigo-900 rounded-2xl shadow-lg transition border border-purple-300/40 flex items-center gap-1.5"
            >
              <span>🍹</span>
              <span>極上オールインクルーシブ</span>
            </Link>
            <Link
              href="/autumn-winter-strawberry-picking-resort"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-650 via-rose-800 to-pink-900 hover:from-red-550 hover:to-rose-700 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>🍓</span>
              <span>いちご狩り＆温泉宿</span>
            </Link>
            <Link
              href="/autumn-winter-sacred-power-spot"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-stone-900 hover:from-emerald-750 hover:to-teal-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>⛩️</span>
              <span>開運パワースポット＆宿坊</span>
            </Link>
            <Link
              href="/kyoto-arashiyama-bamboo-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-800 via-teal-900 to-rose-900 hover:from-emerald-700 hover:to-rose-800 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🎋</span>
              <span>京都・嵐山竹林の小径宿</span>
            </Link>
            <Link
              href="/hakone-gora-luxury-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-slate-800 via-amber-900 to-rose-950 hover:from-slate-700 hover:to-amber-850 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>♨️</span>
              <span>箱根・強羅にごり湯宿</span>
            </Link>
            <Link
              href="/nikko-chuzenji-lake-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-sky-800 via-blue-950 to-teal-950 hover:from-sky-700 hover:to-blue-900 rounded-2xl shadow-lg transition border border-sky-300/40 flex items-center gap-1.5"
            >
              <span>🌊</span>
              <span>奥日光・中禅寺湖畔宿</span>
            </Link>
            <Link
              href="/kumamoto-kurokawa-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-850 via-stone-900 to-emerald-950 hover:from-amber-750 hover:to-stone-850 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🪵</span>
              <span>熊本・黒川温泉手形宿</span>
            </Link>
            <Link
              href="/mie-ise-shima-gourmet-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-800 via-amber-850 to-yellow-900 hover:from-rose-700 hover:to-amber-750 rounded-2xl shadow-lg transition border border-yellow-300/40 flex items-center gap-1.5"
            >
              <span>⛩️</span>
              <span>伊勢神宮＆伊勢海老宿</span>
            </Link>
            <Link
              href="/kanagawa-kamakura-shonan-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-750 via-cyan-900 to-indigo-950 hover:from-blue-650 hover:to-cyan-850 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🌊</span>
              <span>鎌倉・湘南・江の島宿</span>
            </Link>
            <Link
              href="/hyogo-kinosaki-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-stone-800 via-rose-950 to-amber-950 hover:from-stone-700 hover:to-rose-900 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>🦀</span>
              <span>城崎温泉・外湯＆カニ宿</span>
            </Link>
            <Link
              href="/nagano-karuizawa-kyu-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-stone-900 hover:from-emerald-750 hover:to-teal-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🌲</span>
              <span>軽井沢ハルニレテラス宿</span>
            </Link>
            <Link
              href="/ishikawa-noto-wakura-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-indigo-850 via-blue-950 to-cyan-950 hover:from-indigo-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-blue-300/40 flex items-center gap-1.5"
            >
              <span>🐟</span>
              <span>能登和倉温泉・寒ブリ宿</span>
            </Link>
            <Link
              href="/oita-yufuin-kinrin-lake-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-emerald-950 to-amber-950 hover:from-teal-750 hover:to-emerald-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>♨️</span>
              <span>由布院・金鱗湖朝霧宿</span>
            </Link>
            <Link
              href="/gunma-kusatsu-yubatake-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-amber-950 hover:from-emerald-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>♨️</span>
              <span>草津温泉・湯畑＆湯もみ宿</span>
            </Link>
            <Link
              href="/gifu-takayama-sanmachi-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-stone-850 via-amber-950 to-orange-950 hover:from-stone-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🏮</span>
              <span>飛騨高山・古い町並宿</span>
            </Link>
            <Link
              href="/kanagawa-hakone-ashinoko-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-sky-850 via-blue-950 to-teal-950 hover:from-sky-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-sky-300/40 flex items-center gap-1.5"
            >
              <span>⛩️</span>
              <span>箱根・芦ノ湖鳥居＆富士宿</span>
            </Link>
            <Link
              href="/nagano-kamikochi-azusa-river-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-emerald-950 to-slate-900 hover:from-teal-750 hover:to-emerald-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>⛰️</span>
              <span>上高地・河童橋穂高連峰宿</span>
            </Link>
            <Link
              href="/hiroshima-miyajima-itsukushima-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-850 via-red-950 to-amber-950 hover:from-rose-750 hover:to-red-900 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>⛩️</span>
              <span>宮島・嚴島神社大鳥居宿</span>
            </Link>
            <Link
              href="/yamagata-ginzan-onsen-retro-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-850 via-stone-900 to-orange-950 hover:from-amber-750 hover:to-orange-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🏮</span>
              <span>山形・銀山温泉ガス灯宿</span>
            </Link>
            <Link
              href="/tochigi-kinugawa-onsen-valley-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-slate-900 hover:from-emerald-750 hover:to-teal-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🌉</span>
              <span>鬼怒川温泉・渓谷吊橋宿</span>
            </Link>
            <Link
              href="/nagano-shibu-onsen-retro-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-stone-850 via-amber-950 to-rose-950 hover:from-stone-750 hover:to-rose-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🐒</span>
              <span>渋温泉・九湯＆金具屋宿</span>
            </Link>
            <Link
              href="/ehime-matsuyama-dogo-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-orange-850 via-amber-950 to-red-950 hover:from-orange-750 hover:to-red-900 rounded-2xl shadow-lg transition border border-orange-300/40 flex items-center gap-1.5"
            >
              <span>♨️</span>
              <span>道後温泉本館＆鯛めし宿</span>
            </Link>
            <Link
              href="/toyama-unazuki-kurobe-gorge-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-cyan-850 via-blue-950 to-teal-950 hover:from-cyan-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🚂</span>
              <span>宇奈月温泉・黒部トロッコ宿</span>
            </Link>
            <Link
              href="/shizuoka-atami-bayside-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-750 via-cyan-900 to-rose-950 hover:from-blue-650 hover:to-rose-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🎆</span>
              <span>熱海温泉・海上花火＆海宿</span>
            </Link>
            <Link
              href="/gunma-ikaho-stairs-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-850 via-stone-900 to-orange-950 hover:from-amber-750 hover:to-orange-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🪜</span>
              <span>伊香保温泉・石段＆黄金湯宿</span>
            </Link>
            <Link
              href="/mie-toba-iseshima-bay-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-blue-950 to-indigo-950 hover:from-teal-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🐬</span>
              <span>鳥羽温泉郷・水族館＆伊勢海老宿</span>
            </Link>
            <Link
              href="/nagasaki-unzen-onsen-hell-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-stone-850 via-rose-950 to-amber-950 hover:from-stone-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>♨️</span>
              <span>雲仙温泉・地獄＆洋館宿</span>
            </Link>
            <Link
              href="/okayama-kurashiki-bikan-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-slate-900 hover:from-emerald-750 hover:to-teal-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🛶</span>
              <span>倉敷美観地区・白壁土蔵宿</span>
            </Link>
            <Link
              href="/mie-shima-kashikojima-resort-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-850 via-yellow-950 to-stone-900 hover:from-amber-750 hover:to-stone-850 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🏝️</span>
              <span>志摩賢島・英虞湾リゾート</span>
            </Link>
            <Link
              href="/tochigi-nasu-highland-nature-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-stone-900 hover:from-emerald-750 hover:to-teal-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🌲</span>
              <span>那須高原・鹿の湯＆森の宿</span>
            </Link>
            <Link
              href="/kyoto-ujigawa-greentea-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-emerald-950 to-amber-950 hover:from-teal-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🍵</span>
              <span>京都宇治・平等院＆茶宿</span>
            </Link>
            <Link
              href="/oita-beppu-hell-hotspring-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-750 via-rose-950 to-orange-950 hover:from-red-650 hover:to-orange-900 rounded-2xl shadow-lg transition border border-red-300/40 flex items-center gap-1.5"
            >
              <span>♨️</span>
              <span>別府地獄めぐり＆鉄輪蒸し宿</span>
            </Link>
            <Link
              href="/kanagawa-yugawara-onsen-bangei-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-stone-850 via-slate-900 to-amber-950 hover:from-stone-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-stone-300/40 flex items-center gap-1.5"
            >
              <span>📚</span>
              <span>湯河原温泉・文豪万葉宿</span>
            </Link>
            <Link
              href="/hyogo-kobe-arima-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-850 via-yellow-950 to-orange-950 hover:from-amber-750 hover:to-orange-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>♨️</span>
              <span>有馬温泉・金泉銀泉＆神戸牛宿</span>
            </Link>
            <Link
              href="/yamanashi-fujigoko-kawaguchiko-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-sky-850 via-blue-950 to-teal-950 hover:from-sky-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-sky-300/40 flex items-center gap-1.5"
            >
              <span>🗻</span>
              <span>河口湖・逆さ富士＆ほうとう宿</span>
            </Link>
            <Link
              href="/shizuoka-izu-shuzenji-bamboo-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-stone-900 hover:from-emerald-750 hover:to-stone-850 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🎋</span>
              <span>伊豆修善寺・竹林小径＆わさび宿</span>
            </Link>
            <Link
              href="/nagano-hakuba-happo-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-cyan-850 via-blue-950 to-slate-900 hover:from-cyan-750 hover:to-slate-800 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>⛰️</span>
              <span>白馬八方尾根・絶景テラス宿</span>
            </Link>
            <Link
              href="/ishikawa-kaga-onsen-valley-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-850 via-red-950 to-amber-950 hover:from-rose-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>🦀</span>
              <span>加賀温泉郷・鶴仙渓＆カニ宿</span>
            </Link>
            <Link
              href="/miyagi-matsushima-bay-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-850 via-cyan-950 to-teal-950 hover:from-blue-750 hover:to-cyan-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🌊</span>
              <span>日本三景松島・牡蠣＆湾宿</span>
            </Link>
            <Link
              href="/yamagata-zao-onsen-frost-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-cyan-850 via-blue-950 to-slate-900 hover:from-cyan-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>❄️</span>
              <span>蔵王温泉・樹氷＆強酸性硫黄宿</span>
            </Link>
            <Link
              href="/hokkaido-shiretoko-utoro-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-blue-950 to-stone-900 hover:from-teal-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🐻</span>
              <span>世界遺産知床・流氷＆鮭宿</span>
            </Link>
            <Link
              href="/kagoshima-ibusuki-sand-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-850 via-amber-950 to-orange-950 hover:from-rose-750 hover:to-orange-900 rounded-2xl shadow-lg transition border border-orange-300/40 flex items-center gap-1.5"
            >
              <span>🏖️</span>
              <span>指宿温泉・天然砂むし＆黒豚宿</span>
            </Link>
            <Link
              href="/nagano-shigakogen-shibutoge-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-slate-900 hover:from-emerald-750 hover:to-teal-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>☁️</span>
              <span>志賀高原渋峠・雲海＆熊の湯宿</span>
            </Link>
            <Link
              href="/shimane-izumo-tamatsukuri-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-stone-850 via-rose-950 to-amber-950 hover:from-stone-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>⛩️</span>
              <span>出雲大社＆玉造美肌温泉宿</span>
            </Link>
            <Link
              href="/miyazaki-takachiho-gorge-myth-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-amber-950 hover:from-emerald-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🛶</span>
              <span>高千穂峡・神楽＆宮崎牛宿</span>
            </Link>
            <Link
              href="/aomori-oirase-towada-nature-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-emerald-950 to-blue-950 hover:from-teal-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🌿</span>
              <span>奥入瀬渓流＆十和田湖畔宿</span>
            </Link>
            <Link
              href="/toyama-tateyama-kurobe-alpen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-sky-850 via-blue-950 to-slate-900 hover:from-sky-750 hover:to-slate-800 rounded-2xl shadow-lg transition border border-sky-300/40 flex items-center gap-1.5"
            >
              <span>🏔️</span>
              <span>立山黒部・雪の大谷＆雲上宿</span>
            </Link>
            <Link
              href="/hyogo-awaji-naruto-whirlpool-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-850 via-cyan-950 to-orange-950 hover:from-blue-750 hover:to-orange-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🌀</span>
              <span>淡路島・うずしお＆淡路牛宿</span>
            </Link>
            <Link
              href="/kyoto-amanohashidate-ine-funaya-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-cyan-950 to-blue-950 hover:from-teal-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>⛵</span>
              <span>天橋立＆伊根の舟屋宿</span>
            </Link>
            <Link
              href="/wakayama-shirahama-beach-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-750 via-teal-900 to-amber-950 hover:from-blue-650 hover:to-teal-850 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🐼</span>
              <span>南紀白浜・白良浜＆クエ宿</span>
            </Link>
            <Link
              href="/iwate-hiraizumi-chusonji-heritage-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-850 via-yellow-950 to-stone-900 hover:from-amber-750 hover:to-yellow-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🏛️</span>
              <span>平泉中尊寺＆前沢牛宿</span>
            </Link>
            <Link
              href="/nagasaki-huistenbosch-sasebo-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-850 via-red-950 to-indigo-950 hover:from-rose-750 hover:to-red-900 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>🏰</span>
              <span>ハウステンボス＆佐世保宿</span>
            </Link>
            <Link
              href="/kagawa-shodoshima-olive-beach-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-amber-950 hover:from-emerald-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🫒</span>
              <span>小豆島・天使の道＆オリーブ宿</span>
            </Link>
            <Link
              href="/nagano-achi-hirugami-starry-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-indigo-850 via-purple-950 to-pink-950 hover:from-indigo-750 hover:to-pink-900 rounded-2xl shadow-lg transition border border-purple-300/40 flex items-center gap-1.5"
            >
              <span>✨</span>
              <span>阿智村星空＆昼神美肌湯宿</span>
            </Link>
            <Link
              href="/shizuoka-izu-shimoda-beach-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-750 via-teal-900 to-rose-950 hover:from-blue-650 hover:to-rose-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🌊</span>
              <span>伊豆下田・白浜＆金目鯛宿</span>
            </Link>
            <Link
              href="/yamanashi-yatsugatake-kiyosato-resort-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-indigo-950 hover:from-emerald-750 hover:to-indigo-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🌲</span>
              <span>八ヶ岳清里テラス＆星空宿</span>
            </Link>
            <Link
              href="/ehime-shimanami-kaido-imabari-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-cyan-850 via-blue-950 to-teal-950 hover:from-cyan-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🚴</span>
              <span>しまなみ海道＆来島鯛宿</span>
            </Link>
            <Link
              href="/saga-ureshino-takeo-bihada-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-850 via-amber-950 to-emerald-950 hover:from-rose-750 hover:to-emerald-900 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>♨️</span>
              <span>嬉野・武雄美肌湯＆佐賀牛宿</span>
            </Link>
            <Link
              href="/family-baby-welcome-onsen"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 rounded-2xl shadow-lg transition border border-yellow-300/40 flex items-center gap-1.5"
            >
              <span>🍼</span>
              <span>赤ちゃん・子連れ歓迎温泉宿</span>
            </Link>
            <Link
              href="/three-generation-family-celebration-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-700 via-rose-800 to-amber-900 hover:from-red-600 hover:to-amber-800 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>👴👵</span>
              <span>三世代・還暦長寿祝い宿</span>
            </Link>
            <Link
              href="/girls-trip-spa-afternoontea-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-pink-700 via-rose-800 to-purple-900 hover:from-pink-600 hover:to-purple-800 rounded-2xl shadow-lg transition border border-pink-300/40 flex items-center gap-1.5"
            >
              <span>🫖</span>
              <span>女子旅・スパ＆アフタヌーンティー宿</span>
            </Link>
            <Link
              href="/solo-travel-retreat-private-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-800 via-emerald-900 to-slate-900 hover:from-teal-700 hover:to-slate-800 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>📖</span>
              <span>大人のひとり温泉旅・おこもり宿</span>
            </Link>
            <Link
              href="/anniversary-propose-luxury-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-amber-950 bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-400 hover:from-amber-200 hover:to-yellow-300 rounded-2xl shadow-lg transition border border-amber-300 flex items-center gap-1.5"
            >
              <span>💍</span>
              <span>記念日・プロポーズ極上宿</span>
            </Link>
            <Link
              href="/heritage-cultural-wooden-ryokan"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-900 via-stone-900 to-yellow-950 hover:from-amber-800 hover:to-stone-850 rounded-2xl shadow-lg transition border border-amber-400/40 flex items-center gap-1.5"
            >
              <span>🏛️</span>
              <span>登録有形文化財・宮大工木造宿</span>
            </Link>
            <Link
              href="/pure-100-percent-kakenagashi-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-900 via-emerald-950 to-blue-950 hover:from-teal-800 hover:to-blue-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>♨️</span>
              <span>自家源泉100%完全かけ流し宿</span>
            </Link>
            <Link
              href="/michelin-auberge-gourmet-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-900 via-red-950 to-purple-950 hover:from-rose-800 hover:to-purple-900 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>🍽️</span>
              <span>極上美食オーベルジュ温泉宿</span>
            </Link>
            <Link
              href="/kominka-villa-kura-sauna-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-stone-850 via-amber-950 to-emerald-950 hover:from-stone-750 hover:to-emerald-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🛖</span>
              <span>古民家一棟貸し＆蔵サウナ宿</span>
            </Link>
            <Link
              href="/infinity-open-air-bath-ocean-view-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-cyan-850 via-blue-950 to-teal-950 hover:from-cyan-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🌅</span>
              <span>絶景インフィニティ露天風呂宿</span>
            </Link>
            <Link
              href="/tottori-kaike-onsen-daisen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-850 via-teal-950 to-amber-950 hover:from-blue-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🦀</span>
              <span>皆生温泉＆伯耆大山カニ宿</span>
            </Link>
            <Link
              href="/fukushima-aizu-ashinomaki-ouchijuku-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-850 via-amber-950 to-stone-900 hover:from-red-750 hover:to-stone-850 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🐱</span>
              <span>会津芦ノ牧温泉＆大内宿</span>
            </Link>
            <Link
              href="/gifu-gero-onsen-heritage-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-amber-950 hover:from-emerald-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>♨️</span>
              <span>下呂温泉・三名泉＆飛騨牛宿</span>
            </Link>
            <Link
              href="/shizuoka-izu-ito-jogasaki-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-indigo-850 via-blue-950 to-teal-950 hover:from-indigo-750 hover:to-teal-900 rounded-2xl shadow-lg transition border border-blue-300/40 flex items-center gap-1.5"
            >
              <span>🌉</span>
              <span>伊東温泉・城ヶ崎＆地魚宿</span>
            </Link>
            <Link
              href="/niigata-echigo-yuzawa-snow-sake-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-cyan-850 via-blue-950 to-slate-900 hover:from-cyan-750 hover:to-slate-800 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🍶</span>
              <span>越後湯沢・ぽんしゅ館＆米宿</span>
            </Link>
            <Link
              href="/shinkansen-direct-walk-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-800 via-indigo-900 to-slate-900 hover:from-blue-700 hover:to-slate-800 rounded-2xl shadow-lg transition border border-blue-300/40 flex items-center gap-1.5"
            >
              <span>🚅</span>
              <span>新幹線直結・徒歩5分温泉宿</span>
            </Link>
            <Link
              href="/scenic-tourist-train-onsen-trip-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-emerald-950 to-amber-950 hover:from-teal-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🚃</span>
              <span>観光列車＆名門極上温泉宿</span>
            </Link>
            <Link
              href="/airport-access-direct-resort-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-sky-850 via-blue-950 to-indigo-950 hover:from-sky-750 hover:to-indigo-900 rounded-2xl shadow-lg transition border border-sky-300/40 flex items-center gap-1.5"
            >
              <span>✈️</span>
              <span>空港直行・展望天然温泉リゾート</span>
            </Link>
            <Link
              href="/drive-touring-garage-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-850 via-orange-950 to-stone-900 hover:from-amber-750 hover:to-stone-850 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🏎️</span>
              <span>愛車・絶景ドライブ＆ガレージ宿</span>
            </Link>
            <Link
              href="/highway-express-bus-direct-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-850 via-red-950 to-amber-950 hover:from-rose-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>🚌</span>
              <span>高速バス直行・ターミナル宿</span>
            </Link>
            <Link
              href="/kumamoto-aso-caldera-minamiaso-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-amber-950 hover:from-emerald-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🌋</span>
              <span>阿蘇カルデラ＆あか牛宿</span>
            </Link>
            <Link
              href="/tochigi-okunikko-yumoto-nature-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-cyan-950 to-slate-900 hover:from-teal-750 hover:to-slate-800 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>♨️</span>
              <span>奥日光湯元・硫黄泉＆湯波宿</span>
            </Link>
            <Link
              href="/nagano-matsumoto-asama-utsukushigahara-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-stone-850 via-slate-900 to-amber-950 hover:from-stone-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🏯</span>
              <span>松本城・美ヶ原雲海＆そば宿</span>
            </Link>
            <Link
              href="/yamaguchi-hagi-nagato-yumoto-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-850 via-pink-950 to-stone-900 hover:from-rose-750 hover:to-stone-850 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>🏮</span>
              <span>萩・長門湯本川床＆瓦そば宿</span>
            </Link>
            <Link
              href="/hokkaido-furano-biei-lavender-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-purple-850 via-indigo-950 to-blue-950 hover:from-purple-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-purple-300/40 flex items-center gap-1.5"
            >
              <span>🪻</span>
              <span>富良野美瑛・青い池＆和牛宿</span>
            </Link>
            <Link
              href="/japan-top-brand-wagyu-beef-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-850 via-amber-950 to-stone-900 hover:from-red-750 hover:to-stone-850 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🥩</span>
              <span>日本五大ブランド和牛極上宿</span>
            </Link>
            <Link
              href="/japan-winter-crab-fugu-seafood-feast-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-orange-850 via-red-950 to-blue-950 hover:from-orange-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-orange-300/40 flex items-center gap-1.5"
            >
              <span>🦀</span>
              <span>冬の四大味覚（カニ・ふぐ・寒ブリ）宿</span>
            </Link>
            <Link
              href="/japan-best-breakfast-buffet-hotels-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-amber-950 bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 hover:from-amber-200 hover:to-yellow-300 rounded-2xl shadow-lg transition border border-amber-300 flex items-center gap-1.5"
            >
              <span>🥐</span>
              <span>朝食の美味しいホテル日本一</span>
            </Link>
            <Link
              href="/japan-top-brand-jidori-chicken-feast-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-850 via-stone-900 to-orange-950 hover:from-amber-750 hover:to-stone-850 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🐓</span>
              <span>日本三大地鶏＆銘柄鶏の宿</span>
            </Link>
            <Link
              href="/japan-seafood-sushi-kaiseki-luxury-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-cyan-850 via-blue-950 to-teal-950 hover:from-cyan-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🍣</span>
              <span>極上海鮮寿司＆大漁舟盛り名宿</span>
            </Link>
            <Link
              href="/iwate-hanamaki-tono-ihatov-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-slate-900 hover:from-emerald-750 hover:to-slate-800 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🧚</span>
              <span>花巻温泉郷・遠野民話＆白金豚宿</span>
            </Link>
            <Link
              href="/miyagi-akiu-sakunami-sendai-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-indigo-950 to-amber-950 hover:from-teal-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🍁</span>
              <span>秋保作並温泉・磊々峡＆仙台牛宿</span>
            </Link>
            <Link
              href="/yamagata-tendo-yamadera-cherry-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-850 via-amber-950 to-stone-900 hover:from-red-750 hover:to-stone-850 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🍒</span>
              <span>天童温泉・山寺立石寺＆山形牛宿</span>
            </Link>
            <Link
              href="/wakayama-nachikatsuura-kumano-kodo-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-850 via-indigo-950 to-cyan-950 hover:from-blue-750 hover:to-cyan-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🐟</span>
              <span>那智勝浦・那智滝＆生マグロ洞窟宿</span>
            </Link>
            <Link
              href="/tokushima-naruto-otsuka-museum-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-sky-850 via-blue-950 to-amber-950 hover:from-sky-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-sky-300/40 flex items-center gap-1.5"
            >
              <span>🎨</span>
              <span>鳴門渦潮・大塚国際美術館＆鯛宿</span>
            </Link>
            <Link
              href="/modern-toji-fasting-detox-retreat-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-800 via-teal-900 to-amber-950 hover:from-emerald-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🥗</span>
              <span>現代版プチ湯治＆ファスティング宿</span>
            </Link>
            <Link
              href="/forest-private-sauna-spring-water-retreat-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-slate-900 to-cyan-950 hover:from-teal-750 hover:to-slate-800 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🪵</span>
              <span>森のプライベートサウナ＆天然水宿</span>
            </Link>
            <Link
              href="/scenic-yoga-mindfulness-forest-therapy-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-cyan-850 via-sky-950 to-emerald-950 hover:from-cyan-750 hover:to-emerald-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🧘</span>
              <span>絶景ヨガ＆森林セラピーリゾート</span>
            </Link>
            <Link
              href="/hot-spring-mud-pack-thalasso-spa-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-indigo-850 via-purple-950 to-pink-950 hover:from-indigo-750 hover:to-pink-900 rounded-2xl shadow-lg transition border border-purple-300/40 flex items-center gap-1.5"
            >
              <span>🫧</span>
              <span>温泉泥パック＆タラソテラピー宿</span>
            </Link>
            <Link
              href="/hot-spring-cure-workation-quiet-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-stone-850 via-slate-900 to-blue-950 hover:from-stone-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-slate-300/40 flex items-center gap-1.5"
            >
              <span>💻</span>
              <span>静寂の長期滞在＆温泉ワーケーション</span>
            </Link>
            <Link
              href="/shizuoka-hamanako-kanzanji-unagi-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-850 via-teal-950 to-amber-950 hover:from-blue-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>⛵</span>
              <span>浜名湖・舘山寺温泉＆うなぎ宿</span>
            </Link>
            <Link
              href="/aichi-chita-minamichita-himakajima-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-cyan-950 to-orange-950 hover:from-teal-750 hover:to-orange-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🐙</span>
              <span>南知多・日間賀島タコ＆知多牛宿</span>
            </Link>
            <Link
              href="/hyogo-awaji-north-sumoto-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-sky-850 via-blue-950 to-amber-950 hover:from-sky-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-sky-300/40 flex items-center gap-1.5"
            >
              <span>🧅</span>
              <span>淡路島・花さじき洲本＆淡路牛宿</span>
            </Link>
            <Link
              href="/saga-karatsu-yobuko-squid-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-indigo-850 via-blue-950 to-emerald-950 hover:from-indigo-750 hover:to-emerald-900 rounded-2xl shadow-lg transition border border-blue-300/40 flex items-center gap-1.5"
            >
              <span>🦑</span>
              <span>唐津・虹の松原＆呼子活イカ宿</span>
            </Link>
            <Link
              href="/kagoshima-kirishima-jingu-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-850 via-amber-950 to-stone-900 hover:from-red-750 hover:to-stone-850 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>⛩️</span>
              <span>霧島神宮・硫黄泉＆黒豚しゃぶ宿</span>
            </Link>
            <Link
              href="/japan-top-night-view-luxury-hotel-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-indigo-900 via-purple-950 to-slate-900 hover:from-indigo-800 hover:to-slate-800 rounded-2xl shadow-lg transition border border-indigo-300/40 flex items-center gap-1.5"
            >
              <span>🌃</span>
              <span>日本三大夜景＆摩天楼ホテル</span>
            </Link>
            <Link
              href="/japan-starry-sky-astrophotography-resort-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 hover:from-slate-800 hover:to-indigo-900 rounded-2xl shadow-lg transition border border-blue-300/40 flex items-center gap-1.5"
            >
              <span>🌌</span>
              <span>満天の星空＆星空案内人の宿</span>
            </Link>
            <Link
              href="/japan-sea-of-clouds-terrace-infinity-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-sky-850 via-blue-950 to-slate-900 hover:from-sky-750 hover:to-slate-800 rounded-2xl shadow-lg transition border border-sky-300/40 flex items-center gap-1.5"
            >
              <span>☁️</span>
              <span>雲海テラス＆天空露天風呂宿</span>
            </Link>
            <Link
              href="/japan-fuji-view-private-open-air-bath-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-850 via-indigo-950 to-teal-950 hover:from-blue-750 hover:to-teal-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🗻</span>
              <span>富士山ビュー客室露天風呂宿</span>
            </Link>
            <Link
              href="/japan-ocean-cliff-sunset-view-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-orange-850 via-rose-950 to-amber-950 hover:from-orange-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-orange-300/40 flex items-center gap-1.5"
            >
              <span>🌅</span>
              <span>断崖オーシャン＆夕陽パノラマ宿</span>
            </Link>
            <Link
              href="/nagasaki-hirado-sasebo-kujukushima-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-850 via-indigo-950 to-amber-950 hover:from-blue-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-blue-300/40 flex items-center gap-1.5"
            >
              <span>🏰</span>
              <span>平戸城・九十九島＆天然ヒラメ宿</span>
            </Link>
            <Link
              href="/miyazaki-nichinan-aoshima-coast-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-cyan-950 to-orange-950 hover:from-teal-750 hover:to-orange-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🗿</span>
              <span>青島・鬼の洗濯板＆日南宮崎牛宿</span>
            </Link>
            <Link
              href="/toyama-himi-amaharashi-tateyama-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-sky-850 via-blue-950 to-amber-950 hover:from-sky-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-sky-300/40 flex items-center gap-1.5"
            >
              <span>🐟</span>
              <span>雨晴立山連峰・女岩＆ひみ寒ぶり宿</span>
            </Link>
            <Link
              href="/kyoto-uji-fushimi-sake-matcha-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-rose-950 hover:from-emerald-750 hover:to-rose-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🍵</span>
              <span>宇治平等院抹茶＆伏見酒蔵十石舟宿</span>
            </Link>
            <Link
              href="/hiroshima-onomichi-shimanami-mukoujima-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-indigo-850 via-blue-950 to-amber-950 hover:from-indigo-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-blue-300/40 flex items-center gap-1.5"
            >
              <span>🚲</span>
              <span>尾道千光寺坂の街＆しまなみ宿</span>
            </Link>
            <Link
              href="/japan-national-treasure-castle-heritage-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-stone-850 via-amber-950 to-slate-900 hover:from-stone-750 hover:to-slate-800 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🏯</span>
              <span>国宝五城＆現存十二天守を巡る宿</span>
            </Link>
            <Link
              href="/japan-post-town-nakasendo-edo-highway-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-850 via-stone-900 to-orange-950 hover:from-amber-750 hover:to-orange-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🏮</span>
              <span>中山道木曽路・宿場町＆旧街道宿</span>
            </Link>
            <Link
              href="/japan-sacred-pilgrimage-koyasan-shukubo-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-emerald-950 to-slate-900 hover:from-teal-750 hover:to-slate-800 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>📿</span>
              <span>世界遺産霊場＆高野山宿坊体験宿</span>
            </Link>
            <Link
              href="/japan-bakumatsu-ishin-samurai-history-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-850 via-red-950 to-stone-900 hover:from-blue-750 hover:to-stone-850 rounded-2xl shadow-lg transition border border-red-300/40 flex items-center gap-1.5"
            >
              <span>⚔️</span>
              <span>幕末維新・萩会津高知龍馬の宿</span>
            </Link>
            <Link
              href="/japan-traditional-townscape-preservation-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-850 via-amber-950 to-teal-950 hover:from-rose-750 hover:to-teal-900 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>🏘️</span>
              <span>重要伝統的町並み（重伝建）の宿</span>
            </Link>
            <Link
              href="/yamagata-sakata-tsuruoka-shonai-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-cyan-950 to-amber-950 hover:from-teal-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🌾</span>
              <span>酒田山居倉庫・羽黒山＆庄内豚宿</span>
            </Link>
            <Link
              href="/chiba-choshi-kujukuri-inubosaki-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-850 via-indigo-950 to-amber-950 hover:from-blue-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🌅</span>
              <span>犬吠埼日の出・銚子電鉄＆金目鯛宿</span>
            </Link>
            <Link
              href="/shizuoka-south-izu-shimoda-beach-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-cyan-850 via-teal-950 to-rose-950 hover:from-cyan-750 hover:to-rose-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>⚓</span>
              <span>下田ペリーロード・ヒリゾ浜＆金目鯛宿</span>
            </Link>
            <Link
              href="/shimane-tsuwano-masuda-sanin-kyoto-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-850 via-amber-950 to-stone-900 hover:from-red-750 hover:to-stone-850 rounded-2xl shadow-lg transition border border-red-300/40 flex items-center gap-1.5"
            >
              <span>🎏</span>
              <span>津和野掘割の鯉・太皷谷稲成＆神楽宿</span>
            </Link>
            <Link
              href="/okinawa-miyakojima-irabu-kurima-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-cyan-950 bg-gradient-to-r from-cyan-300 via-teal-300 to-sky-200 hover:from-cyan-200 hover:to-sky-100 rounded-2xl shadow-lg transition border border-cyan-200 flex items-center gap-1.5"
            >
              <span>🏝️</span>
              <span>宮古ブルー・与那覇前浜＆宮古牛宿</span>
            </Link>
            <Link
              href="/tokyo-disney-resort-partner-official-hotel-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-pink-850 via-purple-950 to-blue-950 hover:from-pink-750 hover:to-blue-900 rounded-2xl shadow-lg transition border border-pink-300/40 flex items-center gap-1.5"
            >
              <span>🏰</span>
              <span>ディズニー®提携＆オフィシャルホテル</span>
            </Link>
            <Link
              href="/usj-partner-official-hotel-osaka-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-850 via-indigo-950 to-amber-950 hover:from-blue-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-blue-300/40 flex items-center gap-1.5"
            >
              <span>🌎</span>
              <span>USJ公認＆駅直結オフィシャル宿</span>
            </Link>
            <Link
              href="/fuji-q-highland-fujigoko-activity-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-850 via-stone-900 to-teal-950 hover:from-red-750 hover:to-teal-900 rounded-2xl shadow-lg transition border border-red-300/40 flex items-center gap-1.5"
            >
              <span>🎢</span>
              <span>富士急ハイランド＆富士五湖アクティビティ</span>
            </Link>
            <Link
              href="/huistenbosch-official-hotel-nagasaki-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-850 via-emerald-950 to-indigo-950 hover:from-amber-750 hover:to-indigo-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🌷</span>
              <span>ハウステンボス直営＆イルミネーション宿</span>
            </Link>
            <Link
              href="/japan-alps-mountain-resort-trekking-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-slate-900 to-sky-950 hover:from-teal-750 hover:to-slate-800 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>⛰️</span>
              <span>日本アルプストレッキン＆山岳リゾート宿</span>
            </Link>
            <Link
              href="/nagano-azumino-wasabi-hotaka-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-teal-950 to-amber-950 hover:from-emerald-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🥬</span>
              <span>安曇野大王わさび＆穂高温泉郷宿</span>
            </Link>
            <Link
              href="/mie-kumano-owase-onigajo-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-stone-850 via-blue-950 to-amber-950 hover:from-stone-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-blue-300/40 flex items-center gap-1.5"
            >
              <span>🌊</span>
              <span>世界遺産鬼ヶ城・獅子岩＆ガスエビ宿</span>
            </Link>
            <Link
              href="/tokushima-iya-valley-oboke-kazurabashi-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-850 via-emerald-950 to-orange-950 hover:from-teal-750 hover:to-orange-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🌉</span>
              <span>秘境祖谷かずら橋・大歩危＆祖谷そば宿</span>
            </Link>
            <Link
              href="/niigata-sado-island-gold-mine-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-850 via-yellow-950 to-slate-900 hover:from-amber-750 hover:to-slate-800 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🪙</span>
              <span>世界遺産佐渡金山・たらい舟＆寒ブリ宿</span>
            </Link>
            <Link
              href="/hokkaido-akan-mashu-kussharo-lake-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-cyan-850 via-blue-950 to-teal-950 hover:from-cyan-750 hover:to-teal-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🦢</span>
              <span>阿寒湖マリモ・摩周屈斜路＆川湯温泉宿</span>
            </Link>
            <Link
              href="/japan-luxury-private-pool-suite-villa-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-900 via-cyan-950 to-indigo-950 hover:from-blue-800 hover:to-indigo-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🏊</span>
              <span>客室プライベート温水プール付きヴィラ</span>
            </Link>
            <Link
              href="/japan-traditional-kominka-heritage-luxury-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-900 via-stone-950 to-red-950 hover:from-amber-800 hover:to-stone-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🏮</span>
              <span>一棟貸し古民家・登録有形文化財の宿</span>
            </Link>
            <Link
              href="/japan-michelin-star-auberge-winery-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-950 via-purple-950 to-amber-950 hover:from-rose-900 hover:to-amber-900 rounded-2xl shadow-lg transition border border-rose-300/40 flex items-center gap-1.5"
            >
              <span>🍷</span>
              <span>ミシュラン星付き＆ワイナリーオーベルジュ</span>
            </Link>
            <Link
              href="/japan-exclusive-detached-villa-private-onsen-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-950 hover:from-emerald-900 hover:to-teal-900 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>♨️</span>
              <span>全室離れ・源泉かけ流し露天風呂付き隠れ家</span>
            </Link>
            <Link
              href="/japan-luxury-island-resort-charter-cruise-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-cyan-900 via-blue-950 to-emerald-950 hover:from-cyan-800 hover:to-blue-900 rounded-2xl shadow-lg transition border border-cyan-300/40 flex items-center gap-1.5"
            >
              <span>🛥️</span>
              <span>専用クルーズ＆離島最高峰リゾート</span>
            </Link>
            <Link
              href="/iwate-sanriku-miyako-jodogahama-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-850 via-teal-950 to-amber-950 hover:from-blue-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-teal-300/40 flex items-center gap-1.5"
            >
              <span>🌊</span>
              <span>三陸宮古・浄土ヶ浜＆瓶ドン宿</span>
            </Link>
            <Link
              href="/nagano-togakushi-shrine-soba-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-850 via-stone-900 to-amber-950 hover:from-emerald-750 hover:to-stone-850 rounded-2xl shadow-lg transition border border-emerald-300/40 flex items-center gap-1.5"
            >
              <span>🌲</span>
              <span>戸隠神社奥社杉並木＆戸隠そば宿</span>
            </Link>
            <Link
              href="/gifu-shirakawago-gokayama-gassho-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-850 via-stone-950 to-orange-950 hover:from-amber-750 hover:to-orange-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>🛖</span>
              <span>白川郷合掌造り＆飛騨牛すったて宿</span>
            </Link>
            <Link
              href="/wakayama-kudoyama-sanada-koyasan-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-850 via-stone-900 to-amber-950 hover:from-red-750 hover:to-amber-900 rounded-2xl shadow-lg transition border border-red-300/40 flex items-center gap-1.5"
            >
              <span>🍁</span>
              <span>九度山真田庵・慈尊院＆富有柿宿</span>
            </Link>
            <Link
              href="/kumamoto-amakusa-islands-sakitsu-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-cyan-950 bg-gradient-to-r from-cyan-300 via-teal-300 to-amber-200 hover:from-cyan-200 hover:to-amber-100 rounded-2xl shadow-lg transition border border-cyan-200 flex items-center gap-1.5"
            >
              <span>🐬</span>
              <span>天草﨑津集落・イルカ＆車海老宿</span>
            </Link>
            <Link
              href="/women-solo-safe-amenity-onsen-retreat-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-rose-950 bg-gradient-to-r from-pink-200 via-rose-200 to-amber-100 hover:from-pink-150 hover:to-rose-150 rounded-2xl shadow-lg transition border border-rose-300/60 flex items-center gap-1.5"
            >
              <span>🌸</span>
              <span>女性一人旅・安心セキュリティ＆ReFa宿</span>
            </Link>
            <Link
              href="/book-hotel-library-stay-reading-retreat"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-900 via-stone-900 to-emerald-950 hover:from-amber-800 hover:to-emerald-900 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>📖</span>
              <span>読書＆ブックホテル・ライブラリー宿</span>
            </Link>
            <Link
              href="/cosme-spa-facial-treatment-esthetic-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-900 via-pink-950 to-purple-950 hover:from-rose-800 hover:to-purple-900 rounded-2xl shadow-lg transition border border-pink-300/40 flex items-center gap-1.5"
            >
              <span>💄</span>
              <span>ブランドスパ＆エステ付きご褒美ホテル</span>
            </Link>
            <Link
              href="/art-museum-design-hotel-creative-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-slate-900 via-indigo-950 to-teal-950 hover:from-slate-800 hover:to-teal-900 rounded-2xl shadow-lg transition border border-indigo-300/40 flex items-center gap-1.5"
            >
              <span>🎨</span>
              <span>アート・美術館巡り＆デザインホテル</span>
            </Link>
            <Link
              href="/power-spot-shrine-temple-fortune-solo-stay"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-900 via-amber-950 to-stone-900 hover:from-red-800 hover:to-stone-850 rounded-2xl shadow-lg transition border border-amber-300/40 flex items-center gap-1.5"
            >
              <span>⛩️</span>
              <span>寺社・パワースポット巡り＆開運ひとり旅宿</span>
            </Link>
            <Link
              href="/kyoto"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-rose-700 to-amber-900 hover:from-rose-600 hover:to-amber-800 rounded-2xl shadow-md transition border border-rose-400/30 flex items-center gap-1.5"
            >
              <span>🍁</span>
              <span>京都旅行 完全ガイド</span>
            </Link>
            <Link
              href="/okinawa"
              className="px-5 py-3 text-xs md:text-sm font-black text-cyan-950 bg-gradient-to-r from-cyan-300 to-teal-300 hover:from-cyan-200 hover:to-teal-200 rounded-2xl shadow-md transition border border-cyan-200 flex items-center gap-1.5"
            >
              <span>🌺</span>
              <span>沖縄旅行 完全ガイド</span>
            </Link>
            <Link
              href="/hokkaido"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-blue-700 to-teal-800 hover:from-blue-600 hover:to-teal-700 rounded-2xl shadow-md transition border border-blue-400/30 flex items-center gap-1.5"
            >
              <span>🏔️</span>
              <span>北海道 完全ガイド</span>
            </Link>
            <Link
              href="/tokyo"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-indigo-700 to-slate-800 hover:from-indigo-600 hover:to-slate-700 rounded-2xl shadow-md transition border border-indigo-400/30 flex items-center gap-1.5"
            >
              <span>🗼</span>
              <span>東京観光 完全ガイド</span>
            </Link>
            <Link
              href="/osaka"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-amber-600 to-rose-700 hover:from-amber-500 hover:to-rose-600 rounded-2xl shadow-md transition border border-amber-300/30 flex items-center gap-1.5"
            >
              <span>🐙</span>
              <span>大阪観光 完全ガイド</span>
            </Link>
            <Link
              href="/fukuoka"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-red-700 to-amber-800 hover:from-red-600 hover:to-amber-700 rounded-2xl shadow-md transition border border-red-400/30 flex items-center gap-1.5"
            >
              <span>🍜</span>
              <span>福岡博多 完全ガイド</span>
            </Link>
            <Link
              href="/hakone"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-emerald-800 to-teal-900 hover:from-emerald-700 hover:to-teal-800 rounded-2xl shadow-md transition border border-emerald-400/30 flex items-center gap-1.5"
            >
              <span>♨️</span>
              <span>箱根温泉 完全ガイド</span>
            </Link>
            <Link
              href="/kanazawa"
              className="px-5 py-3 text-xs md:text-sm font-black text-teal-950 bg-gradient-to-r from-amber-300 to-amber-400 hover:from-amber-200 hover:to-amber-300 rounded-2xl shadow-md transition border border-amber-200 flex items-center gap-1.5"
            >
              <span>🌸</span>
              <span>金沢旅行 完全ガイド</span>
            </Link>
            <Link
              href="/noto"
              className="px-5 py-3 text-xs md:text-sm font-black text-white bg-gradient-to-r from-teal-700 to-emerald-800 hover:from-teal-600 hover:to-emerald-700 rounded-2xl shadow-md transition border border-teal-500/30 flex items-center gap-1.5"
            >
              <span>🌊</span>
              <span>能登旅行 完全ガイド</span>
            </Link>
            <Link
              href="/prefectures"
              className="px-5 py-3 text-xs md:text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl shadow-md transition border border-white/20 flex items-center gap-1.5"
            >
              <span>🗾</span>
              <span>47都道府県一覧</span>
            </Link>
          </div>
        </div>

        {/* 雑誌スタッツカウンター風UI */}
        <div className="w-full md:w-auto grid grid-cols-2 gap-4 bg-white/5 border border-white/10 p-6 rounded-2xl md:min-w-[240px] backdrop-blur-md">
          <div className="text-center space-y-1">
            <span className="block text-3xl font-black text-amber-400 tracking-tight font-journal-serif">{posts.length}</span>
            <span className="text-[10px] font-bold text-emerald-200/60 uppercase tracking-widest block">特集記事</span>
          </div>
          <div className="text-center space-y-1 border-l border-white/10">
            <span className="block text-3xl font-black text-white tracking-tight font-journal-serif">47</span>
            <span className="text-[10px] font-bold text-emerald-200/60 uppercase tracking-widest block">都道府県対応</span>
          </div>
        </div>
      </section>

      {/* 注目：お得キャンペーンピックアップセクション */}
      <section className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-teal-500/10 border border-amber-500/20 rounded-3xl p-6 md:p-8 space-y-5">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-amber-700 uppercase tracking-widest block">SPECIAL PROMOTION</span>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
              <span>🎁</span> <span>開催中のおすすめお得キャンペーン＆限定クーポン</span>
            </h2>
          </div>
          <Link href="/campaigns" className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1">
            <span>すべて見る</span> <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/campaigns" className="group bg-white p-5 rounded-2xl border border-amber-500/20 shadow-sm hover:shadow-md transition space-y-2">
            <span className="text-[9px] font-extrabold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block">毎月 5, 10, 15, 20, 25, 30日</span>
            <h3 className="text-sm font-bold text-emerald-950 group-hover:text-amber-700 transition">5と0のつく日 高級宿・温泉宿セール</h3>
            <p className="text-xs text-emerald-950/70 line-clamp-2">最大20%OFFクーポン＋ポイント還元！高級温泉旅館や憧れホテルが最安値級。</p>
          </Link>

          <Link href="/campaigns" className="group bg-white p-5 rounded-2xl border border-amber-500/20 shadow-sm hover:shadow-md transition space-y-2">
            <span className="text-[9px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full inline-block">実質2,000円で憧れ宿泊</span>
            <h3 className="text-sm font-bold text-emerald-950 group-hover:text-teal-800 transition">楽天トラベル ふるさと納税クーポン</h3>
            <p className="text-xs text-emerald-950/70 line-clamp-2">寄付額の最大30%クーポン進呈。あとから予約への適用も可能な大人気制度。</p>
          </Link>

          <Link href="/campaigns" className="group bg-white p-5 rounded-2xl border border-amber-500/20 shadow-sm hover:shadow-md transition space-y-2">
            <span className="text-[9px] font-extrabold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block">期間限定セール</span>
            <h3 className="text-sm font-bold text-emerald-950 group-hover:text-emerald-800 transition">サマーセール＆季節の半額感謝祭</h3>
            <p className="text-xs text-emerald-950/70 line-clamp-2">半額プラン多数＆限定1万円クーポン配布中。季節の旅がお得に。</p>
          </Link>
        </div>
      </section>

      {/* 47都道府県の見所から探すエリアナビセクション */}
      <section className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-emerald-950/5 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-teal-900/60 uppercase tracking-widest block">DESTINATIONS GUIDE</span>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
              <span>🗾</span> <span>都道府県別の観光見所＆厳選宿ガイド</span>
            </h2>
          </div>
          <Link href="/prefectures" className="text-xs font-bold text-teal-800 hover:text-teal-700 flex items-center gap-1">
            <span>全国一覧を見る</span> <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {PREFECTURES_DATA.slice(0, 10).map((pref) => (
            <Link
              key={pref.slug}
              href={`/prefectures/${pref.slug}`}
              className="p-3.5 rounded-xl border border-emerald-950/5 bg-emerald-50/30 hover:bg-teal-50 hover:border-teal-800/30 transition text-center space-y-1 group"
            >
              <span className="block text-xs font-bold text-emerald-950 group-hover:text-teal-800 font-journal-serif">{pref.name}</span>
              <span className="block text-[9px] text-teal-900/50 font-medium line-clamp-1">{pref.highlights[0]}など</span>
            </Link>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/prefectures"
            className="inline-block text-xs font-bold text-teal-800 hover:underline bg-teal-50 px-6 py-2.5 rounded-full border border-teal-800/10"
          >
            ＋ 残りの37都道府県の見所ガイドを見る（全国47都道府県）
          </Link>
        </div>
      </section>

      {/* 記事一覧（フィルター付きClient Component） */}
      <PostListClient initialPosts={posts} />

      {/* 🔍 人気検索テーマ・こだわり条件別タグクラウド */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 text-white rounded-3xl p-6 md:p-10 space-y-6 shadow-xl border border-white/10">
        <div className="space-y-2 border-b border-white/10 pb-4">
          <span className="text-[10px] font-extrabold text-amber-300 bg-amber-500/20 border border-amber-500/30 px-3 py-0.5 rounded-full uppercase tracking-widest inline-block">
            SEARCH KEYWORDS HUB
          </span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-white flex items-center gap-2">
            <span>🔍</span> <span>目的・テーマ・こだわり条件から探す全国の旅宿</span>
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            お盆・夏休み旅行、プール付きホテル、露天風呂付き客室、子連れファミリー宿、サウナ付きビジネス、楽天トラベルセールクーポンなど気になるテーマをダイレクト検索。
          </p>
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          <Link href="/campaigns" className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/30 px-3 py-1.5 rounded-xl font-bold transition">
            🏷️ 楽天トラベル セール クーポン
          </Link>
          <Link href="/campaigns" className="bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-500/30 px-3 py-1.5 rounded-xl font-bold transition">
            🎆 お盆 旅行 穴場
          </Link>
          <Link href="/campaigns" className="bg-teal-500/20 hover:bg-teal-500/30 text-teal-200 border border-teal-500/30 px-3 py-1.5 rounded-xl font-bold transition">
            🏊 夏休み プール ホテル
          </Link>
          <Link href="/campaigns" className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-500/30 px-3 py-1.5 rounded-xl font-bold transition">
            ♨️ 夏休み 温泉 涼しい高原
          </Link>
          <Link href="/prefectures/shimane" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3 py-1.5 rounded-xl font-bold transition">
            🏰 島根県 有名な場所
          </Link>
          <Link href="/prefectures/aichi" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3 py-1.5 rounded-xl font-bold transition">
            🍱 愛知県 有名なもの
          </Link>
          <Link href="/prefectures/hokkaido" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3 py-1.5 rounded-xl font-bold transition">
            🏔️ 北海道 リゾート (yukiroro)
          </Link>
          <Link href="/posts/158566" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3 py-1.5 rounded-xl font-bold transition">
            ♨️ 天然温泉「千両の湯」スーパーホテル鹿嶋 夕食
          </Link>
          <Link href="/posts/8175" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3 py-1.5 rounded-xl font-bold transition">
            🌊 湯元さぬき瀬戸大橋温泉 せとうちそう
          </Link>
          <Link href="/posts/18909" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-3 py-1.5 rounded-xl font-bold transition">
            🦌 ホテル リガーレ春日野 奈良
          </Link>
        </div>
      </section>
    </div>
  );
}
