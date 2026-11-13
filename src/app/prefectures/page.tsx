import { Metadata } from "next";
import Link from "next/link";
import { REGIONS_MAP, PREFECTURES_DATA, getPrefectureByName } from "@/data/prefecturesData";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/prefectures/" },
  title: "全国47都道府県の観光ガイド＆厳選宿ハブ（名所・グルメ・地酒・お土産）",
  description: "国内最大級の旅行ポータル！北海道から沖縄まで全47都道府県を細分化エリア（例: 金沢城・兼六園、ひがし茶屋街、能登・千枚田、和倉温泉など）に分け、観光名所・絶景カフェ・トレンドお土産・地酒日本酒・厳選ホテルルポをご案内。",
  keywords: ["全国47都道府県", "エリア別観光名所", "絶景カフェ", "お土産", "地酒", "宿ハブ", "温泉宿"],
  openGraph: {
    title: "全国47都道府県の観光ガイド＆厳選宿ハブ（名所・グルメ・地酒・お土産）",
    description: "国内最大級の旅行ポータル！北海道から沖縄まで全47都道府県を細分化エリア（例: 金沢城・兼六園、ひがし茶屋街、能登・千枚田、和倉温泉など）に分け、観光名所・絶景カフェ・トレンドお土産・地酒日本酒・厳選ホテルルポをご案内。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "全国47都道府県の観光ガイド＆厳選宿ハブ（名所・グルメ・地酒・お土産）",
    description: "国内最大級の旅行ポータル！北海道から沖縄まで全47都道府県を細分化エリア（例: 金沢城・兼六園、ひがし茶屋街、能登・千枚田、和倉温泉など）に分け、観光名所・絶景カフェ・トレンドお土産・地酒日本酒・厳選ホテルルポをご案内。",
  }
};

export default function PrefecturesIndexPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://croud-travel.pages.dev';

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": `${baseUrl}/` },
      { "@type": "ListItem", "position": 2, "name": "47都道府県の観光ガイド＆厳選宿ハブ", "item": `${baseUrl}/prefectures/` }
    ]
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "日本全国47都道府県の観光名所・グルメ・厳選宿ガイド",
    "numberOfItems": PREFECTURES_DATA.length,
    "itemListElement": PREFECTURES_DATA.map((pref, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": pref.name,
      "url": `${baseUrl}/prefectures/${pref.slug}/`
    }))
  };

  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* 構造化データ JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />

      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">47都道府県の見所・宿ハブ</span>
      </nav>

      {/* ヒーロー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-900 via-emerald-900 to-amber-950 p-8 md:p-12 text-white shadow-lg space-y-4">
        <span className="inline-block text-[10px] font-extrabold tracking-widest bg-amber-400 text-teal-950 px-3.5 py-1 rounded-full uppercase shadow">
          国内最大級ポータル 🗾
        </span>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-snug">47都道府県 エリア別観光名所・カフェ・お土産・地酒＆宿ポータル</h1>
        <p className="text-emerald-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          各都道府県を地域ミクロエリアごとに網羅ガイド。観光名所や絶景スポット、ご当地グルメ、さらに「オススメカフェ」「トレンドお土産」「地酒・日本酒」の特設ガイドと近隣のおすすめホテル・温泉宿を一挙にご紹介。
        </p>
      </section>
      {/* 2026-2027 最強メガヒット特集ハブナビゲーション */}
      <section className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-stone-950 via-teal-950 to-stone-900 text-white shadow-xl border border-teal-500/30 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-300 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-400/40">
              NATIONAL KILLER FEATURES 2026-2027
            </span>
            <h2 className="text-xl md:text-2xl font-black text-white mt-1.5 font-journal-serif">全国の旅行者が選ぶ「メガヒット決定版キラー特集」</h2>
          </div>
          <span className="text-xs text-stone-400 font-medium">楽天トラベル公式データ連携</span>
        </div>
        <p className="text-xs md:text-sm text-stone-300 leading-relaxed">
          都道府県別の観光情報に加え、当サイト編集部が現地取材と最新口コミデータをもとに徹底分析した全国横断の特選ガイドです。温泉、オールインクルーシブ、サウナ、ふるさと納税、冬の味覚まで、一生に一度は訪れたい最高峰宿を比較できます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
          <Link href="/posts/japan-onsen-ranking-best-hotels-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-amber-300 font-extrabold px-2 py-0.5 rounded bg-amber-950/60 inline-block">♨️ 全国温泉地ランキング</span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-amber-200 transition line-clamp-2">【日本全国温泉地ランキングTOP12】草津・箱根・有馬・由布院・別府・城崎の名旅館徹底比較</h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">泉質・効能・絶景露天風呂・宿泊目安まで完全網羅</p>
          </Link>

          <Link href="/posts/all-inclusive-onsen-resort-ranking-japan-hotels-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-indigo-300 font-extrabold px-2 py-0.5 rounded bg-indigo-950/60 inline-block">🍷 オールインクルーシブ</span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-indigo-200 transition line-clamp-2">【全国オールインクルーシブ温泉宿TOP12】ビール・地酒・夜食・貸切風呂まで全て無料</h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">松島一の坊・アンダリゾート・雪月花など追加料金一切なし</p>
          </Link>

          <Link href="/posts/sauna-resort-hotels-ranking-japan-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-teal-300 font-extrabold px-2 py-0.5 rounded bg-teal-950/60 inline-block">🧖 サウナシュラン＆サ旅</span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-teal-200 transition line-clamp-2">【全国サウナが凄いホテル＆名旅館TOP12】らかんの湯・北こぶし知床・マウント富士</h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">天然伏流水水風呂・絶景外気浴・サウナ飯（サ飯）まで深掘り</p>
          </Link>
          <Link href="/posts/japan-private-open-air-bath-onsen-hotels-ranking-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-teal-300 font-bold block">♨️ 客室露天＆貸切風呂</span>
            <h4 className="text-xs font-bold text-white group-hover:text-teal-200 transition">【全国客室露天風呂・貸切風呂付き温泉宿TOP12】名湯を独占する最高峰宿</h4>
          </Link>
          <Link href="/posts/japan-infinity-sky-onsen-hotels-ranking-best-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-cyan-300 font-bold block">🌅 絶景インフィニティ温泉</span>
            <h4 className="text-xs font-bold text-white group-hover:text-cyan-200 transition">【全国絶景インフィニティ温泉＆天空露天風呂TOP12】海・空と一体化する名宿</h4>
          </Link>

          <Link href="/posts/newyear-hatsumode-sunrise-ryokan-ranking-japan-hotels-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-rose-300 font-extrabold px-2 py-0.5 rounded bg-rose-950/60 inline-block">⛩️ 初詣＆初日の出</span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-rose-200 transition line-clamp-2">【年末年始・初詣＆初日の出温泉旅行】伊勢神宮・出雲大社・富士山近くの開運旅館12選</h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">早朝参拝の混雑回避・年越し特別会席・お正月モデルコース</p>
          </Link>

          <Link href="/posts/furusato-tax-luxury-ryokan-ranking-japan-hotels-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-amber-300 font-extrabold px-2 py-0.5 rounded bg-amber-950/60 inline-block">💰 実質2000円宿泊</span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-amber-200 transition line-clamp-2">【楽天ふるさと納税×高級宿】還元率30%クーポンで泊まる憧れの最高峰旅館12選</h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">寄附上限の計算式・名門客室露天風呂・年末年始の駆け込み攻略</p>
          </Link>

          <Link href="/posts/winter-crab-onsen-hotels-ranking-matuba-echizen-guide/" className="p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition block group space-y-1.5">
            <span className="text-[10px] text-red-300 font-extrabold px-2 py-0.5 rounded bg-red-950/60 inline-block">🦀 冬の味覚・カニ解禁</span>
            <h3 className="text-xs md:text-sm font-bold text-white group-hover:text-red-200 transition line-clamp-2">【日本海カニ旅行】松葉ガニ・越前がに・間人ガニ解禁！タグ付き活蟹が食べられる宿12選</h3>
            <p className="text-[10px] text-stone-400 line-clamp-1">刺身・炭火焼き・茹で・甲羅味噌・カニすき雑炊のフルコース</p>
          </Link>
        </div>
      </section>


      {/* 9エリアごとのグリッドナビ */}
      <div className="space-y-12">
        {Object.entries(REGIONS_MAP).map(([regionName, prefNames]) => (
          <section key={regionName} className="space-y-5">
            <div className="flex items-center gap-3 border-b border-emerald-950/10 pb-3">
              <span className="w-3 h-3 rounded-full bg-amber-600 inline-block" />
              <h2 className="text-xl font-black font-journal-serif text-emerald-950">{regionName}エリア</h2>
              <span className="text-xs font-bold text-teal-900/40">
                （{prefNames.length}都道府県）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {prefNames.map((prefName) => {
                const prefInfo = getPrefectureByName(prefName);
                if (!prefInfo) return null;

                return (
                  <Link
                    key={prefInfo.slug}
                    href={`/prefectures/${prefInfo.slug}/`}
                    className="group border border-emerald-950/10 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-teal-800/40 transition duration-200 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-extrabold text-emerald-950 group-hover:text-teal-800 transition font-journal-serif">
                          {prefInfo.name}
                        </span>
                        <span className="text-xs text-amber-700 font-bold group-hover:translate-x-1 transition">
                          徹底ガイドを見る →
                        </span>
                      </div>
                      <p className="text-xs text-emerald-950/70 line-clamp-2 leading-relaxed font-medium">
                        {prefInfo.description}
                      </p>
                    </div>

                    {/* 特集カテゴリバッジ ＆ 収録主要エリア一覧 */}
                    <div className="pt-3 border-t border-emerald-950/5 space-y-2">
                      <div className="flex flex-wrap gap-1 text-[9px] font-bold">
                        <span className="bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded">
                          ☕ カフェ
                        </span>
                        <span className="bg-emerald-50 text-emerald-900 border border-emerald-200 px-2 py-0.5 rounded">
                          🛍️ お土産
                        </span>
                        <span className="bg-indigo-50 text-indigo-900 border border-indigo-200 px-2 py-0.5 rounded">
                          🍶 地酒日本酒
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {prefInfo.subAreas.map((sa) => (
                          <span key={sa.slug} className="text-[9px] font-bold text-teal-900 bg-teal-50 border border-teal-800/10 px-2 py-0.5 rounded-md">
                            🧭 {sa.areaName}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
