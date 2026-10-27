import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-udon-ritsurin-hotels-stay/",
  },

  title: '高松：秋の讃岐うどん巡り＆栗林公園紅葉！3,000円台〜泊まれる格安ホテル5選',
  description: 'いりこ出汁が染みる本場の讃岐うどんハシゴ旅と、一歩一景の美を誇る大名庭園・栗林公園の秋紅葉！高松駅・瓦町周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
  openGraph: {
    title: "高松：秋の讃岐うどん巡り＆栗林公園紅葉！3,000円台〜泊まれる格安ホテル5選",
    description: "いりこ出汁が染みる本場の讃岐うどんハシゴ旅と、一歩一景の美を誇る大名庭園・栗林公園の秋紅葉！高松駅・瓦町周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "高松：秋の讃岐うどん巡り＆栗林公園紅葉！3,000円台〜泊まれる格安ホテル5選",
    description: "いりこ出汁が染みる本場の讃岐うどんハシゴ旅と、一歩一景の美を誇る大名庭園・栗林公園の秋紅葉！高松駅・瓦町周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
  }
};

export default function AutumnBudgetTakamatsuHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"高松：秋の讃岐うどん巡り＆栗林公園紅葉！3,000円台〜泊まれる格安ホテル5選\",\"description\":\"いりこ出汁が染みる本場の讃岐うどんハシゴ旅と、一歩一景の美を誇る大名庭園・栗林公園の秋紅葉！高松駅・瓦町周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-udon-ritsurin-hotels-stay/\",\"datePublished\":\"2026-10-18T12:00:00+09:00\",\"dateModified\":\"2026-10-19T07:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド 編集部\",\"url\":\"https://croud-travel.pages.dev/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://croud-travel.pages.dev/icon.png\"}}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://croud-travel.pages.dev/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"特集一覧\",\"item\":\"https://croud-travel.pages.dev/features/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"高松：秋の讃岐うどん巡り＆栗林公園紅葉！3,000円台〜泊まれる格安ホテル5選\",\"item\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-udon-ritsurin-hotels-stay/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"高松：秋の讃岐うどん巡り＆栗林公園紅葉！3,000円台〜泊まれる格安ホテル5選\",\"numberOfItems\":10,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"大名庭園の最高峰・紫雲山を借景にした錦秋の絵巻\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-udon-ritsurin-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"ホテルエリアワン高松シティ（ホテルエリアワングループ）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-udon-ritsurin-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"高松国際ホテル\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-udon-ritsurin-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"リーガホテルゼスト高松\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-udon-ritsurin-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":5,\"name\":\"天然温泉　讃岐の湯　スーパーホテル高松・田町\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-udon-ritsurin-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":6,\"name\":\"ＫＯＫＯ　ＨＯＴＥＬ　高松\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-udon-ritsurin-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":7,\"name\":\"栗林公園（りつりんこうえん）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-udon-ritsurin-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":8,\"name\":\"金刀比羅宮（こんぴらさん）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-udon-ritsurin-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":9,\"name\":\"小豆島（エンジェルロード・オリーブ公園）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-udon-ritsurin-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":10,\"name\":\"直島（現代アートの島）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-udon-ritsurin-hotels-stay/\"}]}" }} />
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-emerald-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">高松 讃岐うどん・栗林公園 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>本場讃岐うどんハシゴ旅＆特別名勝の紅葉</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「高松」名店讃岐うどん巡り＆栗林公園の錦秋！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            秋の香川は名店を何軒も巡る「讃岐うどんハシゴ旅」のベストシーズン。黄金色のだしに浮かぶ打ちたて・茹でたてのコシの強いうどんと、国の特別名勝・栗林公園を彩る紅葉のライトアップ。駅前・瓦町周辺で3,000円台〜泊まれる清潔で便利な格安ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-emerald-600" />
            1杯数百円の極上うどん！宿泊費を抑えて香川のソウルフードを食べ尽くす
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            香川県・高松市は四国の交通結節点であり、競合するビジネスホテルが非常に多いため、★4.0以上の高クオリティ宿が1泊3,000円台〜4,000円台で多数見つかります。名物うどん店が密集するアーケード街や高松港へのアクセスも抜群で、浮いた宿泊予算で骨付鳥やオリーブ牛、瀬戸内の新鮮魚介も堪能できます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">讃岐名勝庭園ガイド：栗林公園（特別名勝・一歩一景の秋庭園）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Ritsurin.JPG/1280px-Ritsurin.JPG"
                alt="栗林公園の掬月亭と南湖"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">大名庭園の最高峰・紫雲山を借景にした錦秋の絵巻</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                栗林公園（りつりんこうえん）は、江戸時代初期に高松藩主・松平家により築庭された回遊式大名庭園。国の特別名勝に指定され、ミシュラン・グリーンガイド・ジャポンでも三つ星を獲得。「一歩一景」と称される変化に富んだ景観が広がり、秋の紅葉シーズンには偃月橋（えんげつきょう）や掬月亭が幻想的にライトアップされます。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-emerald-700 font-semibold">ことでん栗林公園駅より徒歩約10分</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: ホテルエリアワン高松シティ */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">1泊3,700円〜・繁華街すぐ・無料珈琲</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.00</span>
                <span className="text-slate-400 text-xs font-normal">（クチコミ高評価）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/183326/183326.jpg"
                  alt="ホテルエリアワン高松シティ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルエリアワン高松シティ
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  ことでん瓦町駅より徒歩5分 / ライオン通りうどん店至近
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  高松一のグルメ繁華街・瓦町やライオン通り商店街に隣接。夜遅くまで営業するうどん店や骨付鳥の名店「一鶴」へのアクセスも抜群です。清潔で機能的な客室、無料の挽きたてウェルカムコーヒーなど嬉しいサービスが充実しています。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥3,700</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183326%2F183326.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: 高松国際ホテル */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">★4.36・平面無料駐車場200台・老舗名門</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.36</span>
                <span className="text-slate-400 text-xs font-normal">（老舗高評価ホテル）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/13730/13730.jpg"
                  alt="高松国際ホテル"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  高松国際ホテル
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  高松中央ICより車で約10分 / 無料駐車場完備
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  緑豊かな敷地に佇む伝統のシティホテル。大型車も停められる無料平面駐車場を完備し、郊外の有名讃岐うどん店巡りや金刀比羅宮へのドライブ旅行に最適な拠点です。落ち着いた客室と老舗ならではの丁寧なおもてなしを4,000円台〜で堪能できます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・駐車場無料</span>
                    <span className="text-2xl font-black text-rose-600">¥4,100</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13730%2F13730.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: リーガホテルゼスト高松 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">★4.05・中央通り沿い・シモンズベッド導入</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.05</span>
                <span className="text-slate-400 text-xs font-normal">（中央通り好立地）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8869/8869.jpg"
                  alt="リーガホテルゼスト高松"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  リーガホテルゼスト高松
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR高松駅より徒歩10分 / 空港リムジンバス停正面
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  高松のメインストリート・中央通りに面し、空港リムジンバスがホテル正面に発着する抜群の利便性。名門リーガロイヤルホテルグループの安心感と、全室シモンズ社製ベッドによる快適な睡眠空間が約束されます。高松城跡や栗林公園への移動もスムーズ。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥4,200</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8869%2F8869.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: 天然温泉 讃岐の湯 スーパーホテル高松・田町 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-md">男女別天然温泉大浴場＆健康朝食ビュッフェ無料</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.18</span>
                <span className="text-slate-400 text-xs font-normal">（天然温泉＆無料朝食）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/50215/50215.jpg"
                  alt="スーパーホテル高松・田町"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  天然温泉　讃岐の湯　スーパーホテル高松・田町
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  ことでん瓦町駅より徒歩3分 / 田町商店街アーケード直結
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  田町アーケード内に直結し、雨の日も濡れずに移動可能。館内には男女別の天然温泉「讃岐の湯」を完備し、旅の歩き疲れをさっぱりと癒やせます。毎朝焼き上げるサクサクのパンや地元総菜が並ぶ健康朝食バイキングが無料で付いて4,000円台の破格設定。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込・天然温泉付</span>
                    <span className="text-2xl font-black text-rose-600">¥4,400</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50215%2F50215.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: ＫＯＫＯ ＨＯＴＥＬ 高松 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-md">★4.47・スタイリッシュモダン・繁華街ど真ん中</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.47</span>
                <span className="text-slate-400 text-xs font-normal">（超高評価デザイン宿）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/181859/181859.jpg"
                  alt="ＫＯＫＯ ＨＯＴＥＬ 高松"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ＫＯＫＯ　ＨＯＴＥＬ　高松
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  ことでん瓦町駅より徒歩約6分 / 丸亀町商店街至近
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  楽天トラベルクチコミ★4.47を誇る、高松中心街屈指の人気ホテル。モダンでシックな客室は広々としており、清潔感と機能性が抜群。丸亀町商店街や美術館通りもすぐで、秋の街歩きやうどん巡りをスマートに楽しめます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥4,440</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181859%2F181859.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-emerald-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の高松うどん巡り＆紅葉庭園を格安に楽しむポイント
          </h2>
          <ul className="space-y-2 text-sm text-emerald-100/90 leading-relaxed">
            <li>・早朝から営業している「さか枝」や「手打十段 うどんバカ一代」の釜バターうどんで最高の朝食スタート。</li>
            <li>・栗林公園の秋は掬月亭での抹茶一服と、南湖を周遊する和船乗船（要予約）が風情たっぷり。</li>
            <li>・瓦町エリアに宿泊すれば、夜の骨付鳥（おやどり・ひなどり）と名物居酒屋巡りも徒歩圏で満喫可能。</li>
          </ul>
        </div>
      </section>
    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 高松：秋の讃岐うどん巡り＆栗林公園紅葉！3,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「高松：秋の讃岐うどん巡り＆栗林公園紅葉！3,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. ホテルエリアワン高松シティ（ホテルエリアワングループ）</td>
                <td className="p-3 text-stone-600">香川県高松市内町2-20</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">提携駐車場有　【丸亀町壱番街駐車場／香川県高松市内町2‐1】　1泊1,000円　※予約不可</td>
                <td className="p-3 font-bold text-amber-600">★4.02（1178件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183326%2F183326.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 高松国際ホテル</td>
                <td className="p-3 text-stone-600">香川県高松市木太町4区2191-1</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">【無料】平面駐車場200台　大型バス/トラック可　車で高松駅・サンメッセ15分、高松中央IC10分</td>
                <td className="p-3 font-bold text-amber-600">★4.39（3248件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13730%2F13730.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. リーガホテルゼスト高松</td>
                <td className="p-3 text-stone-600">香川県高松市古新町9-1</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">立体駐車場タワーパーキング30台　￥1,200（税込／泊）</td>
                <td className="p-3 font-bold text-amber-600">★4.05（2056件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8869%2F8869.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 天然温泉　讃岐の湯　スーパーホテル高松・田町</td>
                <td className="p-3 text-stone-600">香川県高松市田町1-1</td>
                <td className="p-3 text-stone-600">瓦町駅周辺</td>
                <td className="p-3 text-stone-600">提携Ｐ田町駐車場 ℡087-831-5590 立体・平面1泊1000円先着順（7：30～24：00）</td>
                <td className="p-3 font-bold text-amber-600">★4.19（3545件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,240〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50215%2F50215.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ＫＯＫＯ　ＨＯＴＥＬ　高松</td>
                <td className="p-3 text-stone-600">香川県高松市瓦町2丁目2-3</td>
                <td className="p-3 text-stone-600">瓦町駅周辺</td>
                <td className="p-3 text-stone-600">なし。徒歩圏内に提携駐車場あり(予約不可)。フロントにて割引券販売 ※途中出庫不可</td>
                <td className="p-3 font-bold text-amber-600">★4.47（558件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,160〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181859%2F181859.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルエリアワン高松シティ（ホテルエリアワングループ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるえりあわんたかまつしてぃ（ほてるえりあわんぐるーぷ））</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/183326/183326.jpg" alt="ホテルエリアワン高松シティ（ホテルエリアワングループ） 客室・施設イメージ" className="w-full h-full object-cover" loading="eager" fetchPriority="high" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR高松駅徒歩10分・琴電片原町駅徒歩5分！高松中央商店街・ライオン通り目の前で抜群の好立地！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市内町2-20 ／ 最寄り駅：高松（香川） ／ 交通案内：JR高松駅より車3分・徒歩10分　高松空港リムジンバス「兵庫町」バス停より徒歩5分　高松中央IC・高松西ICより約20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>提携駐車場有　【丸亀町壱番街駐車場／香川県高松市内町2‐1】　1泊1,000円　※予約不可</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.1 ／ 立地 ★3.97 ／ 部屋 ★3.94 ／ 設備 ★3.86 ／ 風呂 ★3.66 ／ 食事 ★4.15</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食のパンが絶品、コーヒーも美味しく大満足朝食大満足。パンは特に美味しかった。お客さんの入ってる状況によると思いますが、陳列するタイミングをある程度ふんだんに並べていただくとたくさん欲しい人にとっ…　2026-09-27 08:44:57投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=183326&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">高松国際ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（たかまつ　こくさいほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13730/13730_sgl.jpg" alt="高松国際ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【車で来るならココ】平面駐車場無料・大型可【2019年リニューアル】全室シモンズベッド、空気清浄機</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市木太町4区2191-1 ／ 最寄り駅：高松（香川） ／ 交通案内：JR高松駅より車で約15分　高松道高松中央IC、サンメッセ香川より車で約10分　市内バス(高松国際ホテル前)下車徒歩1分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>【無料】平面駐車場200台　大型バス/トラック可　車で高松駅・サンメッセ15分、高松中央IC10分</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お風呂が綺麗でした。とても快適に過ごすことができました!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/13730?re…　2026-08-17 06:15:59投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">リーガホテルゼスト高松</h3>
                  <span className="text-xs text-stone-400 ml-2">（りーがほてる　ぜすと　たかまつ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8869/8869_twn.jpg" alt="リーガホテルゼスト高松 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【好立地】空港高速バス停正面／高松駅まで徒歩10分！香川イチを目指す朝食バイキング★</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市古新町9-1 ／ 最寄り駅：高松（香川） ／ 交通案内：ＪＲ高松駅…徒歩約１０分／あなぶきアリーナ香川…徒歩約１５分／高松空港よりリムジンバス…約３５分※兵庫町バス停ホテル正面</p>
                  <p><strong>【駐車場・マイカー利用】</strong>立体駐車場タワーパーキング30台　￥1,200（税込／泊）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食の出来立て卵料理が美味しすぎる駐車:ホテル管轄の駐車場がありますが、タワー式の立体駐車場のため大きい車は入れることができません。少し離れた所にある「丸亀町くるりん駐車場」に停めました。ホテ…　2026-08-18 21:21:06投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　讃岐の湯　スーパーホテル高松・田町</h3>
                  <span className="text-xs text-stone-400 ml-2">（てんねんおんせん　さぬきのゆ　すーぱーほてる　たかまつ・たまち）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,240〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/50215/50215_si.jpg" alt="天然温泉　讃岐の湯　スーパーホテル高松・田町 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>天然温泉完備！(※男女入替制)「 無料ビュッフェ朝食×WelcomeBar」で贅沢な高松ステイ♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市田町1-1 ／ 最寄り駅：瓦町 ／ 交通案内：◆高松駅より車で7分◆高松琴平電鉄琴平線「瓦町駅」より徒歩5分◆空港リムジンバス「県庁通り・中央公園前」下車、徒歩５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>提携Ｐ田町駐車場 ℡087-831-5590 立体・平面1泊1000円先着順（7：30～24：00）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「2回目の利用も部屋と朝食に大満足2回目の宿泊。3部屋用意してくれて、ゆっくりできました。朝のバイキングも、部屋もとても綺麗で快適でした。また機会があれば、行かせてもらいます。クチコミの詳細はこ…　2026-08-21 07:38:03投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＫＯＫＯ　ＨＯＴＥＬ　高松</h3>
                  <span className="text-xs text-stone-400 ml-2">（ここ　ほてる　たかまつ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,160〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/181859/181859.jpg" alt="ＫＯＫＯ　ＨＯＴＥＬ　高松 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>瓦町駅徒歩２分♪バス・トイレ独立で快適な滞在をぜひ。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市瓦町2丁目2-3 ／ 最寄り駅：瓦町 ／ 交通案内：琴平電鉄（ことでん）琴平線・長尾線　瓦町駅より徒歩2分。高松空港リムジンバス「高松駅行き」乗車、「瓦町駅」降車、徒歩2分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>なし。徒歩圏内に提携駐車場あり(予約不可)。フロントにて割引券販売 ※途中出庫不可</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.49 ／ 立地 ★4.4 ／ 部屋 ★4.47 ／ 設備 ★4.43 ／ 風呂 ★4.42 ／ 食事 ★4.32</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で清潔、お風呂も広くて快適な空間瓦町駅からとても近く、周りが飲食街で夕食には困らない。新しいホテルで清潔で快適。風呂とトイレが別々なのも良い。お風呂はとても広く快適。ただ、洗面所がとても狭く使…　2026-10-09 06:45:31投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=181859&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！香川県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、香川県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">栗林公園（りつりんこうえん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「一歩一景」と称される特別名勝の大名庭園。紫雲山を背景に6つの池と13の築山が配置され、手入れの行き届いた1,400本の松の緑が美しく広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">金刀比羅宮（こんぴらさん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「さぬきのこんぴらさん」として親しまれる海の守護神。御本宮まで785段、奥社まで1,368段の石段参道を登る参拝と門前の讃岐うどん巡りが人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">小豆島（エンジェルロード・オリーブ公園）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">瀬戸内海に浮かぶオリーブの島。引き潮の時にだけ海の中から現れる砂の道「エンジェルロード」や、ギリシャ風車が映えるオリーブ公園がロマンチックです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">直島（現代アートの島）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">草間彌生氏の「赤かぼちゃ」「黄かぼちゃ」や地中美術館など、自然と現代アートが融和した世界的に有名なアートの聖地。自転車で島内散策が楽しめます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 香川県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 香川県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <HubRelatedPosts currentSlug="autumn-budget-kagawa-takamatsu-udon-ritsurin-hotels-stay" />
        </div>

      </main>
  );
}
