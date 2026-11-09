import FeatureTrendsSection from "./FeatureTrendsSection";
import fs from "fs";
import path from "path";
import { Metadata } from "next";
import Link from "next/link";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";
import FloatingMobileCTA from "@/app/components/FloatingMobileCTA";
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

      {/* 🎁 楽天トラベル公式 お得キャンペーンバナー */}
      <SpecialCouponBanner />

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

            {/* 🔥 2026-2027年最重要メガヒット特集（全国キラー決定版ガイドTOP7） */}
      <section className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-stone-950 via-teal-950 to-stone-900 text-white shadow-xl border-2 border-amber-500/30 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black tracking-widest uppercase border border-amber-400/30">
              NATIONAL KILLER FEATURES 2026-2027
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1.5 font-journal-serif">
              🔥 編集部総力取材！日本全国メガヒット決定版キラー特集
            </h2>
          </div>
          <span className="text-xs text-stone-400 font-medium">楽天トラベル公式データ完全連携</span>
        </div>

        <p className="text-xs md:text-sm text-stone-300 leading-relaxed max-w-4xl">
          当サイトが総力を結集して執筆した1万文字超の徹底比較バイブル。温泉ランキング、オールインクルーシブ、サウナシュラン、初詣、ふるさと納税、本場カニまで必見です。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
          <Link
            href="/posts/japan-onsen-ranking-best-hotels-guide/"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-amber-400/30 hover:border-amber-400 transition block group space-y-1.5 shadow-sm"
          >
            <span className="text-[10px] font-extrabold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded inline-block">
              ♨️ 全国温泉地ランキングTOP12
            </span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
              【日本全国温泉地ランキングTOP12】草津・箱根・有馬・由布院・別府・城崎の名旅館徹底比較
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">10大泉質別の効能・絶景露天風呂・お得な予約テクニック</p>
          </Link>

          <Link
            href="/posts/all-inclusive-onsen-resort-ranking-japan-hotels-guide/"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-indigo-400/30 hover:border-indigo-400 transition block group space-y-1.5 shadow-sm"
          >
            <span className="text-[10px] font-extrabold text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded inline-block">
              🍷 オールインクルーシブTOP12
            </span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-indigo-200 transition line-clamp-2">
              【全国オールインクルーシブ温泉宿TOP12】ビール・地酒・夜食・貸切風呂まで全て無料
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">松島一の坊・アンダリゾート・季の湯雪月花など追加料金一切なし</p>
          </Link>

          <Link
            href="/posts/sauna-resort-hotels-ranking-japan-guide/"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-teal-400/30 hover:border-teal-400 transition block group space-y-1.5 shadow-sm"
          >
            <span className="text-[10px] font-extrabold text-teal-300 bg-teal-950/80 px-2 py-0.5 rounded inline-block">
              🧖 サウナシュラン受賞宿TOP12
            </span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
              【全国サウナが凄いホテル＆名旅館TOP12】らかんの湯・北こぶし知床・マウント富士
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">天然伏流水水風呂・絶景外気浴・サウナ飯（サ飯）まで徹底取材</p>
          </Link>

          <Link
            href="/posts/newyear-hatsumode-sunrise-ryokan-ranking-japan-hotels-guide/"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-rose-400/30 hover:border-rose-400 transition block group space-y-1.5 shadow-sm"
          >
            <span className="text-[10px] font-extrabold text-rose-300 bg-rose-950/80 px-2 py-0.5 rounded inline-block">
              ⛩️ 初詣＆初日の出温泉旅行
            </span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-rose-200 transition line-clamp-2">
              【年末年始・初詣＆初日の出温泉旅行】伊勢神宮・出雲大社・富士山近くの開運旅館12選
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">早朝参拝の混雑回避・年越し特別会席・お正月モデルコース</p>
          </Link>

          <Link
            href="/posts/furusato-tax-luxury-ryokan-ranking-japan-hotels-guide/"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-amber-400/30 hover:border-amber-400 transition block group space-y-1.5 shadow-sm"
          >
            <span className="text-[10px] font-extrabold text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded inline-block">
              💰 実質2,000円宿泊
            </span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-amber-200 transition line-clamp-2">
              【楽天ふるさと納税×高級宿】還元率30%クーポンで泊まる憧れの最高峰旅館12選
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">寄附上限の計算式・名門客室露天風呂・年末駆け込み攻略</p>
          </Link>

          <Link
            href="/posts/winter-crab-onsen-hotels-ranking-matuba-echizen-guide/"
            className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-red-400/30 hover:border-red-400 transition block group space-y-1.5 shadow-sm"
          >
            <span className="text-[10px] font-extrabold text-red-300 bg-red-950/80 px-2 py-0.5 rounded inline-block">
              🦀 冬の味覚・カニ解禁
            </span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-red-200 transition line-clamp-2">
              【日本海カニ旅行】松葉ガニ・越前がに・間人ガニ解禁！タグ付き活蟹が食べられる宿12選
            </h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">刺身・炭火焼き・茹で・甲羅味噌・カニすき雑炊のフルコース</p>
          </Link>
        </div>
      </section>

<FeatureTrendsSection />

      {/* 特集記事グリッド（クライアントコンポーネント） */}
      <FeaturesGrid initialPosts={posts} />
      {/* 特集ハブ用モバイル追従CTAバー */}
      <FloatingMobileCTA
        affiliateUrl="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fcamp%2F50luxday%2Ftop%2F"
        hotelName="全国の厳選宿・お得プラン一覧"
        isSpecialFeature={true}
      />
    </div>
  );
}
