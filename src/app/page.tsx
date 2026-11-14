import fs from "fs";
import path from "path";
import Link from "next/link";
import { Metadata } from "next";
import { PREFECTURES_DATA } from "@/data/prefecturesData";
import PostListClient from "./components/PostListClient";
import TransitNavigationSection from "./components/TransitNavigationSection";
import FeaturedThemesNav from "./components/FeaturedThemesNav";
import NicheExperienceSection from "./components/NicheExperienceSection";

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
  title: {
    absolute: "日本全国・旅宿クラウド｜楽天トラベルでめぐる厳選温泉宿・観光マガジン",
  },
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
  // クライアントで表示・絞り込みに使う項目だけを渡す(全項目だと HTML が十数MBになる)
  const slimPosts = posts.map((p) => ({
    id: p.id,
    title: p.title,
    hotel_name: p.hotel_name,
    description: (p.description || "").slice(0, 120),
    image: p.image,
    other_images: [] as string[],
    affiliate_url: p.affiliate_url || "",
    prefecture: p.prefecture,
    area: p.area,
    categories: p.categories,
    price: p.price,
    rating: p.rating,
    date: p.date,
  }));

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
      url: `${baseUrl}/posts/${post.id}/`,
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
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">日本の、まだ見ぬ美景と<br />
            <span className="bg-gradient-to-r from-teal-100 via-amber-200 to-emerald-100 bg-clip-text text-transparent">
              極上の湯宿をめぐる旅
            </span></h1>
          <p className="text-emerald-100/80 leading-relaxed text-xs md:text-sm max-w-lg font-medium">
            全国47都道府県の厳選温泉宿・人気ホテルを徹底比較。楽天トラベルの最新プラン・最安値・限定割引クーポンをリアルタイム確認して今すぐ宿泊予約できます。
          </p>

          {/* クイックアクション導線 */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/furusato/"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs md:text-sm font-black text-teal-950 bg-gradient-to-r from-amber-300 via-amber-200 to-yellow-300 hover:from-amber-200 hover:to-yellow-200 rounded-2xl shadow-lg transition transform hover:-translate-y-0.5 border border-amber-400"
            >
              <span>🎁 ふるさと納税でお得に泊まる</span>
              <span>→</span>
            </Link>
            <Link
              href="/ranking/"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs md:text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl transition"
            >
              <span>🏆 総合ランキングTOP50</span>
            </Link>
            <a
              href="#posts-section"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs md:text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl transition"
            >
              <span>🏨 厳選宿一覧</span>
              <span>↓</span>
            </a>
            <Link
              href="/features/"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs md:text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl transition"
            >
              <span>📚 特集・まとめ</span>
            </Link>
            <Link
              href="/prefectures/"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs md:text-sm font-bold text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-2xl transition"
            >
              <span>🗾 47都道府県</span>
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

            {/* 🔥 2026-2027年最重要メガヒット特集（全国キラー決定版ガイドTOP7） */}
      <section className="p-6 md:p-10 rounded-3xl bg-gradient-to-r from-stone-950 via-teal-950 to-stone-900 text-white shadow-2xl border-2 border-amber-500/30 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black tracking-widest uppercase border border-amber-400/30">
              EDITORIAL EXCLUSIVE 2026-2027
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mt-2 font-journal-serif">編集部総力取材！日本全国メガヒット決定版キラー特集</h2>
          </div>
          <span className="text-xs text-stone-400 font-medium bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
            楽天トラベル公式APIリアルタイムデータ完全連携
          </span>
        </div>

        <p className="text-xs md:text-sm text-stone-300 leading-relaxed max-w-4xl">
          当サイトが誇る圧倒的情報量（各記事1万文字超！）と実測APIデータで比較した、今最も読まれている全国横断の特別ガイドです。草津・箱根・有馬などの名湯から、オールインクルーシブ、サウナシュラン、年末年始初詣、ふるさと納税高級宿、冬の味覚カニ旅行まで、一生に一度は訪れたい至高の旅路をご案内します。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
          <Link
            href="/posts/winter-newyear-countdown-anaba-onsen-hotels-guide/"
            className="p-5 rounded-2xl bg-amber-500/15 hover:bg-amber-500/25 border-2 border-amber-400/60 hover:border-amber-300 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-amber-200 bg-amber-950/90 px-2.5 py-0.5 rounded-md border border-amber-400/40">
                2026-2027年末年始・年越し
              </span>
              <span className="text-[10px] text-amber-200/90 font-bold">全国20宿・予算別</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-amber-200 transition line-clamp-2 leading-snug">【2026-2027年末年始】まだ間に合う！年越し・お正月泊の穴場温泉宿＆ホテル全国厳選20選（予算別）</h3>
            <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed">
              箱根・湯河原・草津・北陸・有馬・九州！コスパ重視の年越し宿とご褒美名旅館をAPI実測データで徹底比較。
            </p>
          </Link>

          <Link
            href="/posts/winter-yukimi-rotenburo-train-access-onsen-hotels-guide/"
            className="p-5 rounded-2xl bg-sky-500/15 hover:bg-sky-500/25 border-2 border-sky-400/50 hover:border-sky-300 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-sky-200 bg-sky-950/90 px-2.5 py-0.5 rounded-md border border-sky-400/40">
                新幹線・電車で行く雪見湯
              </span>
              <span className="text-[10px] text-sky-200/90 font-bold">全国16宿・送迎付</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-sky-200 transition line-clamp-2 leading-snug">【雪道運転不要】新幹線・電車＆送迎で行ける全国の絶景「雪見露天風呂」温泉宿16選</h3>
            <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed">
              越後湯沢・信州・乳頭温泉・定山渓＆登別へ車なしで行ける！駅近コスパ宿と秘湯ご褒美宿を予算別に厳選。
            </p>
          </Link>

          <Link
            href="/posts/furusato-tax-yearend-rush-rakuten-travel-coupon-guide/"
            className="p-5 rounded-2xl bg-rose-500/15 hover:bg-rose-500/25 border-2 border-rose-400/50 hover:border-rose-300 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-rose-200 bg-rose-950/90 px-2.5 py-0.5 rounded-md border border-rose-400/40">
                12/31締切・あとから割引
              </span>
              <span className="text-[10px] text-rose-200/90 font-bold">寄付額・予算別20宿</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-rose-200 transition line-clamp-2 leading-snug">【12/31締切】楽天ふるさと納税「トラベルクーポン」年末駆け込み完全攻略＆全国厳選名宿20選</h3>
            <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed">
              有効期限最大3年＆予約済み宿にも適用可能！少額寄附コスパ枠と高額寄附ご褒美枠の2価格帯で分かりやすく整理。
            </p>
          </Link>

          <Link
            href="/posts/national-arena-dome-oshikatsu-live-hotels-guide/"
            className="p-5 rounded-2xl bg-pink-500/15 hover:bg-pink-500/25 border-2 border-pink-400/50 hover:border-pink-300 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-pink-200 bg-pink-950/90 px-2.5 py-0.5 rounded-md border border-pink-400/40">
                全国15大ドーム・アリーナ
              </span>
              <span className="text-[10px] text-pink-200/90 font-bold">推し活遠征ガイド</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-pink-200 transition line-clamp-2 leading-snug">【全国15大ドーム・メガアリーナ】推し活遠征ホテル完全攻略！予算別（コスパ節約vsご褒美）ガイド</h3>
            <p className="text-xs text-stone-200 line-clamp-2 leading-relaxed">
              東京・京セラ・PayPay・Kアリーナ・たまアリ他全15会場！グッズ代確保の格安宿から余韻贅沢宿まで各4軒以上掲載。
            </p>
          </Link>

          <Link
            href="/posts/winter-tokyo-omotesando-illumination-jingu-christmas-luxury-hotels-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-amber-400/30 hover:border-amber-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                ✨ 表参道＆神宮外苑クリスマス
              </span>
              <span className="text-[10px] text-stone-400">8,900文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-amber-200 transition line-clamp-2 leading-snug">【表参道・神宮外苑】表参道フェンディイルミネーション2026＆東京クリスマスマーケット完全攻略！</h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              ケヤキ並木90万球シャンパンゴールド、高さ14mドイツクリスマスピラミッド、三井ガーデンホテル神宮外苑など厳選5宿。
            </p>
          </Link>

          <Link
            href="/posts/winter-kanagawa-sagamiko-illumillion-kanto-three-great-lightup-hotels-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-emerald-400/30 hover:border-emerald-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-emerald-300 bg-emerald-950/80 px-2.5 py-0.5 rounded-md border border-emerald-500/30">
                🌲 さがみ湖イルミリオン600万球
              </span>
              <span className="text-[10px] text-stone-400">7,900文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-emerald-200 transition line-clamp-2 leading-snug">【さがみ湖イルミリオン2026-2027】関東三大イルミネーション600万球の絶景と相模湖・高尾山温泉！</h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              山肌を覆う光の絨毯、全長250m虹のリフト、PICAさがみ湖焚き火コテージやタカオネなど冬の極上宿徹底比較。
            </p>
          </Link>

          <Link
            href="/posts/winter-tokyo-dome-city-illumination-spa-laqua-hotels-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-blue-400/30 hover:border-blue-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-blue-300 bg-blue-950/80 px-2.5 py-0.5 rounded-md border border-blue-500/30">
                🎡 東京ドームシティ＆ラクーア天然温泉
              </span>
              <span className="text-[10px] text-stone-400">8,000文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-blue-200 transition line-clamp-2 leading-snug">【東京ドームシティ】ウィンターイルミネーション2026-2027＆都心天然温泉「スパ ラクーア」完全攻略！</h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              高さ15mツリー＆光の回廊、地下1,700m天然温泉露天風呂とサウナ、東京ドームホテルなどパノラマ夜景名宿5選。
            </p>
          </Link>

          <Link
            href="/posts/japan-onsen-ranking-best-hotels-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-amber-400/30 hover:border-amber-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                ♨️ 全国温泉地ランキング
              </span>
              <span className="text-[10px] text-stone-400">14,000文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-amber-200 transition line-clamp-2 leading-snug">【日本全国温泉地ランキングTOP12】草津・箱根・有馬・由布院・別府・城崎の名旅館徹底比較</h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              環境省10大泉質別の選び方、名湯の効能、絶景露天風呂、お得な予約術まで完全網羅した温泉バイブル。
            </p>
          </Link>

          <Link
            href="/posts/all-inclusive-onsen-resort-ranking-japan-hotels-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-indigo-400/30 hover:border-indigo-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-indigo-300 bg-indigo-950/80 px-2.5 py-0.5 rounded-md border border-indigo-500/30">
                🍷 オールインクルーシブ
              </span>
              <span className="text-[10px] text-stone-400">15,000文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-indigo-200 transition line-clamp-2 leading-snug">【全国オールインクルーシブ温泉宿TOP12】ビール・地酒・夜食・貸切風呂まで全て無料</h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              松島一の坊、アンダリゾート、季の湯雪月花、TAOYAなど、滞在中お財布を一度も開かない究極のリゾート。
            </p>
          </Link>

          <Link
            href="/posts/sauna-resort-hotels-ranking-japan-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-teal-400/30 hover:border-teal-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-teal-300 bg-teal-950/80 px-2.5 py-0.5 rounded-md border border-teal-500/30">
                🧖 サウナシュラン＆サ旅
              </span>
              <span className="text-[10px] text-stone-400">14,000文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-teal-200 transition line-clamp-2 leading-snug">【全国サウナが凄いホテル＆名旅館TOP12】らかんの湯・北こぶし知床・マウント富士</h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              天然伏流水水風呂、絶景外気浴、科学的ととのいメカニズム、名物サウナ飯（サ飯）まで完全個別取材。
            </p>
          </Link>
            <Link
              href="/posts/japan-private-open-air-bath-onsen-hotels-ranking-guide/"
              className="group relative overflow-hidden rounded-3xl bg-slate-800/80 border border-teal-500/30 p-5 hover:border-teal-400 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/20 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold tracking-wider">
                  ♨️ 客室露天・貸切風呂
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors line-clamp-2">【2026-2027年最新】全国客室露天風呂・貸切風呂付き温泉宿TOP12｜プライベート極上湯浴み</h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  箱根・草津・有馬・由布院など！誰の目も気にせず名湯を独占できる露天風呂付き客室＆無料貸切風呂の名宿ガイド。
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-teal-400 group-hover:translate-x-1 transition-transform">
                <span>ランキングと空室を見る</span>
                <span>→</span>
              </div>
            </Link>
            <Link
              href="/posts/japan-infinity-sky-onsen-hotels-ranking-best-guide/"
              className="group relative overflow-hidden rounded-3xl bg-slate-800/80 border border-cyan-500/30 p-5 hover:border-cyan-400 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-bold tracking-wider">
                  🌅 絶景インフィニティ温泉
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">【2026-2027年最新】全国絶景インフィニティ温泉＆天空露天風呂TOP12｜海・富士山・夜景</h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  熱海・河口湖・別府・洞爺湖など！海や空と一体化する奇跡の浮遊感と絶景パノラマ露天風呂名宿ガイド。
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>ランキングと空室を見る</span>
                <span>→</span>
              </div>
            </Link>

          <Link
            href="/posts/newyear-hatsumode-sunrise-ryokan-ranking-japan-hotels-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-rose-400/30 hover:border-rose-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-rose-300 bg-rose-950/80 px-2.5 py-0.5 rounded-md border border-rose-500/30">
                ⛩️ 初詣＆初日の出2026-2027
              </span>
              <span className="text-[10px] text-stone-400">12,000文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-rose-200 transition line-clamp-2 leading-snug">【年末年始・初詣＆初日の出温泉旅行】伊勢神宮・出雲大社・富士山近くの開運旅館12選</h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              早朝参拝の混雑回避裏ワザ、神社仏閣の参拝作法、年越し蕎麦とお雑煮ご当地文化、2泊3日黄金ルート。
            </p>
          </Link>

          <Link
            href="/posts/furusato-tax-luxury-ryokan-ranking-japan-hotels-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-amber-400/30 hover:border-amber-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                💰 実質2,000円宿泊
              </span>
              <span className="text-[10px] text-stone-400">11,600文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-amber-200 transition line-clamp-2 leading-snug">【楽天ふるさと納税×高級宿】還元率30%クーポンで泊まる憧れの最高峰旅館12選</h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              年末の駆け込み寄附完全攻略！寄附上限の計算式、客室露天風呂付き離れ、あとから割引の裏ワザ解説。
            </p>
          </Link>

          <Link
            href="/posts/winter-crab-onsen-hotels-ranking-matuba-echizen-guide/"
            className="p-5 rounded-2xl bg-white/10 hover:bg-white/20 border border-red-400/30 hover:border-red-400 transition block group space-y-2 shadow-sm hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-red-300 bg-red-950/80 px-2.5 py-0.5 rounded-md border border-red-500/30">
                🦀 冬の味覚・カニ解禁
              </span>
              <span className="text-[10px] text-stone-400">11,800文字超</span>
            </div>
            <h3 className="text-sm md:text-base font-bold text-white group-hover:text-red-200 transition line-clamp-2 leading-snug">【日本海カニ旅行】松葉ガニ・越前がに・間人ガニ解禁！タグ付き活蟹が食べられる宿12選</h3>
            <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
              本場タグ付き越前がに・松葉ガニ・間人ガニ！刺身・焼き・茹で・甲羅味噌・カニすき雑炊の極み。
            </p>
          </Link>
        </div>
      </section>

      {/* 🎯 大手が載せない！ニッチなこだわり・体験で選ぶ厳選テーマ宿 */}
      <NicheExperienceSection />

      {/* 🚅 新幹線 vs 高速バス 安く行く方法＆1泊2日モデルコース特設ナビゲーション */}
      <TransitNavigationSection />

      {/* 注目：お得キャンペーンピックアップセクション */}
      <section className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-teal-500/10 border border-amber-500/20 rounded-3xl p-6 md:p-8 space-y-5">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-amber-700 uppercase tracking-widest block">SPECIAL PROMOTION</span>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2"><span>開催中のおすすめお得キャンペーン＆限定クーポン</span></h2>
          </div>
          <Link href="/campaigns/" className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1">
            <span>すべて見る</span> <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/campaigns/" className="group bg-white p-5 rounded-2xl border border-amber-500/20 shadow-sm hover:shadow-md transition space-y-2">
            <span className="text-[9px] font-extrabold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full inline-block">毎月 5, 10, 15, 20, 25, 30日</span>
            <h3 className="text-sm font-bold text-emerald-950 group-hover:text-amber-700 transition">5と0のつく日 高級宿・温泉宿セール</h3>
            <p className="text-xs text-emerald-950/70 line-clamp-2">最大20%OFFクーポン＋ポイント還元！高級温泉旅館や憧れホテルが最安値級。</p>
          </Link>

          <Link href="/furusato/" className="group bg-white p-5 rounded-2xl border-2 border-teal-500/30 hover:border-teal-500 shadow-sm hover:shadow-md transition space-y-2">
            <span className="text-[9px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full inline-block">寄付額の最大30%還元</span>
            <h3 className="text-sm font-bold text-emerald-950 group-hover:text-teal-800 transition">楽天トラベル ふるさと納税クーポン 完全攻略</h3>
            <p className="text-xs text-emerald-950/70 line-clamp-2">控除上限内なら実質2,000円負担！月別・季節別・目的別のおすすめ宿や利用手順を網羅解説。</p>
          </Link>

          <Link href="/winter-travel-special/" className="group bg-white p-5 rounded-2xl border border-sky-500/20 shadow-sm hover:shadow-md transition space-y-2">
            <span className="text-[9px] font-extrabold text-sky-800 bg-sky-100 px-2.5 py-0.5 rounded-full inline-block">秋冬〜年末年始特設</span>
            <h3 className="text-sm font-bold text-emerald-950 group-hover:text-sky-800 transition">冬の絶景温泉＆冬の味覚（カニ・フグ）特集</h3>
            <p className="text-xs text-emerald-950/70 line-clamp-2">越前がに・松葉ガニ解禁、雪見露天風呂、イルミネーション＆年末年始おすすめ宿。</p>
          </Link>
        </div>

        {/* 11月〜2月 冬旅・年末年始 旬の検索テーマ直行リンク */}
        <div className="pt-2 border-t border-amber-500/15">
          <p className="text-[11px] font-extrabold text-emerald-950/80 mb-2.5 flex items-center gap-1.5">
            <span>❄️</span>
            <span>いま予約が集中している秋冬〜年末年始の人気テーマ：</span>
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 text-xs">
            <Link href="/posts/winter-newyear-countdown-anaba-onsen-hotels-guide/" className="bg-white hover:bg-rose-50 border border-rose-200/80 rounded-xl px-3 py-2.5 font-bold text-rose-950 flex items-center gap-1.5 shadow-sm transition">
              <span className="truncate">年末年始・年越し穴場20選</span>
            </Link>
            <Link href="/posts/winter-yukimi-rotenburo-train-access-onsen-hotels-guide/" className="bg-white hover:bg-sky-50 border border-sky-200/80 rounded-xl px-3 py-2.5 font-bold text-sky-950 flex items-center gap-1.5 shadow-sm transition">
              <span className="truncate">電車で行く雪見露天16選</span>
            </Link>
            <Link href="/posts/furusato-tax-yearend-rush-rakuten-travel-coupon-guide/" className="bg-white hover:bg-amber-50 border border-amber-200/80 rounded-xl px-3 py-2.5 font-bold text-amber-950 flex items-center gap-1.5 shadow-sm transition">
              <span className="truncate">12/31締切ふるさと納税宿</span>
            </Link>
            <Link href="/posts/national-arena-dome-oshikatsu-live-hotels-guide/" className="bg-white hover:bg-pink-50 border border-pink-200/80 rounded-xl px-3 py-2.5 font-bold text-pink-950 flex items-center gap-1.5 shadow-sm transition">
              <span className="truncate">全国15会場 推し活遠征宿</span>
            </Link>
            <Link href="/winter-crab-gourmet/" className="bg-white hover:bg-orange-50 border border-orange-200/80 rounded-xl px-3 py-2.5 font-bold text-orange-950 flex items-center gap-1.5 shadow-sm transition">
              <span className="truncate">松葉ガニ・越前ガニ解禁</span>
            </Link>
            <Link href="/furusato-tax-three-great-illuminations-resort-stay/" className="bg-white hover:bg-indigo-50 border border-indigo-200/80 rounded-xl px-3 py-2.5 font-bold text-indigo-950 flex items-center gap-1.5 shadow-sm transition">
              <span className="truncate">冬イルミネーション宿</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 47都道府県の見所から探すエリアナビセクション */}
      <section className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-emerald-950/5 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-extrabold text-teal-900/60 uppercase tracking-widest block">DESTINATIONS GUIDE</span>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2"><span>都道府県別の観光見所＆厳選宿ガイド</span></h2>
          </div>
          <Link href="/prefectures/" className="text-xs font-bold text-teal-800 hover:text-teal-700 flex items-center gap-1">
            <span>全国一覧を見る</span> <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {PREFECTURES_DATA.slice(0, 10).map((pref) => (
            <Link
              key={pref.slug}
              href={`/prefectures/${pref.slug}/`}
              className="p-3.5 rounded-xl border border-emerald-950/5 bg-emerald-50/30 hover:bg-teal-50 hover:border-teal-800/30 transition text-center space-y-1 group"
            >
              <span className="block text-xs font-bold text-emerald-950 group-hover:text-teal-800 font-journal-serif">{pref.name}</span>
              <span className="block text-[9px] text-teal-900/50 font-medium line-clamp-1">{pref.highlights[0]}など</span>
            </Link>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            href="/prefectures/"
            className="inline-block text-xs font-bold text-teal-800 hover:underline bg-teal-50 px-6 py-2.5 rounded-full border border-teal-800/10"
          >
            ＋ 残りの37都道府県の見所ガイドを見る（全国47都道府県）
          </Link>
        </div>
      </section>

      {/* 記事一覧（フィルター付きClient Component） */}
      <div id="posts-section" className="scroll-mt-8">
        <PostListClient initialPosts={slimPosts.slice(0, 60)} />
      </div>

      {/* 📚 全国の特集・特設テーマ記事（洗練されたカード型ナビゲーション） */}
      <FeaturedThemesNav />

      {/* 🧭 公式旅行ガイド＆お役立ち特集 */}
      <section className="bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-950 text-white rounded-3xl p-6 md:p-10 space-y-6 shadow-xl border border-white/10">
        <div className="space-y-2 border-b border-white/10 pb-4">
          <span className="text-[10px] font-extrabold text-amber-300 bg-amber-500/20 border border-amber-500/30 px-3 py-0.5 rounded-full uppercase tracking-widest inline-block">
            TRAVEL GUIDE & TIPS
          </span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-white flex items-center gap-2"><span>公式旅行ガイド＆お得な予約TIPS</span></h2>
          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            ふるさと納税を活用した控除上限内で実質2,000円負担となる最大30%宿泊クーポンの活用術や予約後クーポンのあとから適用方法など、旅の計画をサポートする実用ガイドをご案内。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <Link href="/campaigns/" className="bg-white/10 hover:bg-white/15 border border-white/15 p-4 rounded-2xl transition space-y-1 block">
            <span className="text-amber-300 font-bold block text-sm">🏷️ セール＆限定クーポン</span>
            <span className="text-slate-300 text-[11px] block">楽天トラベル最新の割引キャンペーンまとめ</span>
          </Link>
          <Link href="/travel-savings-guide/" className="bg-white/10 hover:bg-white/15 border border-white/15 p-4 rounded-2xl transition space-y-1 block">
            <span className="text-teal-200 font-bold block text-sm">💰 旅費最大30%節約術</span>
            <span className="text-slate-300 text-[11px] block">ふるさと納税宿泊クーポンの賢い活用法</span>
          </Link>
          <Link href="/furusato-tax-travel-beginners-complete-guide/" className="bg-white/10 hover:bg-white/15 border border-white/15 p-4 rounded-2xl transition space-y-1 block">
            <span className="text-emerald-200 font-bold block text-sm">🔰 ふるさと納税完全ガイド</span>
            <span className="text-slate-300 text-[11px] block">初心者でも迷わないステップ解説</span>
          </Link>
          <Link href="/furusato-tax-travel-after-booking-discount-guide/" className="bg-white/10 hover:bg-white/15 border border-white/15 p-4 rounded-2xl transition space-y-1 block">
            <span className="text-sky-200 font-bold block text-sm">🔄 あとから適用テクニック</span>
            <span className="text-slate-300 text-[11px] block">予約済みホテルに割引を適用する裏ワザ</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
