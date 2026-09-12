import fs from "fs";
import path from "path";
import Link from "next/link";
import { Metadata } from "next";
import { PREFECTURES_DATA } from "@/data/prefecturesData";
import PostListClient from "./components/PostListClient";
import TransitNavigationSection from "./components/TransitNavigationSection";
import AllFeaturesAccordion from "./components/AllFeaturesAccordion";

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
    "北海道から沖縄まで47都道府県の温泉宿・高級ホテル・リゾートを旅ライターが厳選紹介。楽天トラベルで今すぐ空室確認・予約可能。ひとり旅・出張・サウナ・カップル・女子旅など旅のテーマ別に検索できます。",
  keywords: [
    "温泉宿", "おすすめホテル", "ひとり旅", "出張 ホテル", "サウナ ホテル", "楽天トラベル",
    "47都道府県", "子連れ旅行", "高級旅館", "露天風呂", "旅館予約", "国内旅行",
  ],
  alternates: { canonical: `${baseUrl}/` },
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
    sameAs: [`${baseUrl}/sitemap`],
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

      {/* ヒーロービジュアル */}
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

          {/* クイックアクション導線 */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#posts-section"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs md:text-sm font-black text-teal-950 bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 hover:from-amber-200 hover:to-yellow-200 rounded-2xl shadow-lg transition transform hover:-translate-y-0.5"
            >
              <span>🏨 全国の厳選宿一覧へジャンプ</span>
              <span>↓</span>
            </a>
            <Link
              href="/features"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs md:text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl transition"
            >
              <span>📚 特集・まとめ記事一覧</span>
            </Link>
            <Link
              href="/prefectures"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs md:text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl transition"
            >
              <span>🗾 47都道府県から探す</span>
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

      {/* 🚅 新幹線 vs 高速バス 安く行く方法＆1泊2日モデルコース特設ナビゲーション */}
      <TransitNavigationSection />

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
            <h3 className="text-sm font-bold text-emerald-950 group-hover:text-emerald-800 transition">サマーセール＆季節の感謝祭</h3>
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
      <div id="posts-section" className="scroll-mt-8">
        <PostListClient initialPosts={posts} />
      </div>

      {/* 📚 全国の特集・特設テーマ記事（洗練されたカード型ナビゲーション） */}
      <AllFeaturesAccordion />

      {/* 🧭 公式旅行ガイド＆お役立ち特集 */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 text-white rounded-3xl p-6 md:p-10 space-y-6 shadow-xl border border-white/10">
        <div className="space-y-2 border-b border-white/10 pb-4">
          <span className="text-[10px] font-extrabold text-amber-300 bg-amber-500/20 border border-amber-500/30 px-3 py-0.5 rounded-full uppercase tracking-widest inline-block">
            TRAVEL GUIDE & TIPS
          </span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-white flex items-center gap-2">
            <span>🧭</span> <span>公式旅行ガイド＆お得な予約TIPS</span>
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            ふるさと納税を活用した実質2,000円宿泊術や予約後クーポンのあとから適用方法など、旅の計画をサポートする実用ガイドをご案内。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <Link href="/campaigns" className="bg-white/10 hover:bg-white/15 border border-white/15 p-4 rounded-2xl transition space-y-1 block">
            <span className="text-amber-300 font-bold block text-sm">🏷️ セール＆限定クーポン</span>
            <span className="text-slate-300 text-[11px] block">楽天トラベル最新の割引キャンペーンまとめ</span>
          </Link>
          <Link href="/travel-savings-guide" className="bg-white/10 hover:bg-white/15 border border-white/15 p-4 rounded-2xl transition space-y-1 block">
            <span className="text-teal-200 font-bold block text-sm">💰 旅費最大30%節約術</span>
            <span className="text-slate-300 text-[11px] block">ふるさと納税宿泊クーポンの賢い活用法</span>
          </Link>
          <Link href="/furusato-tax-travel-beginners-complete-guide" className="bg-white/10 hover:bg-white/15 border border-white/15 p-4 rounded-2xl transition space-y-1 block">
            <span className="text-emerald-200 font-bold block text-sm">🔰 ふるさと納税完全ガイド</span>
            <span className="text-slate-300 text-[11px] block">初心者でも迷わないステップ解説</span>
          </Link>
          <Link href="/furusato-tax-travel-after-booking-discount-guide" className="bg-white/10 hover:bg-white/15 border border-white/15 p-4 rounded-2xl transition space-y-1 block">
            <span className="text-sky-200 font-bold block text-sm">🔄 あとから適用テクニック</span>
            <span className="text-slate-300 text-[11px] block">予約済みホテルに割引を適用する裏ワザ</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
