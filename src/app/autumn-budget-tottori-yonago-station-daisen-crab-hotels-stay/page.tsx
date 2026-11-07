import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-tottori-yonago-station-daisen-crab-hotels-stay/",
  },

  title: '米子駅前：名峰大山の紅葉＆境港紅ズワイガニ！2,000円台〜泊まれる格安ホテル5選',
  description: '西日本屈指の紅葉名所・国立公園大山（伯耆富士）！境港直送の新鮮な紅ズワイガニや大山地鶏・牛骨ラーメン。JR山陰本線・米子駅周辺で1泊2,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
  openGraph: {
    title: "米子駅前：名峰大山の紅葉＆境港紅ズワイガニ！2,000円台〜泊まれる格安ホテル5選",
    description: "西日本屈指の紅葉名所・国立公園大山（伯耆富士）！境港直送の新鮮な紅ズワイガニや大山地鶏・牛骨ラーメン。JR山陰本線・米子駅周辺で1泊2,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "米子駅前：名峰大山の紅葉＆境港紅ズワイガニ！2,000円台〜泊まれる格安ホテル5選",
    description: "西日本屈指の紅葉名所・国立公園大山（伯耆富士）！境港直送の新鮮な紅ズワイガニや大山地鶏・牛骨ラーメン。JR山陰本線・米子駅周辺で1泊2,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
  }
};

export default function AutumnBudgetHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"米子駅前：名峰大山の紅葉＆境港紅ズワイガニ！2,000円台〜泊まれる格安ホテル5選\",\"description\":\"西日本屈指の紅葉名所・国立公園大山（伯耆富士）！境港直送の新鮮な紅ズワイガニや大山地鶏・牛骨ラーメン。JR山陰本線・米子駅周辺で1泊2,000円台〜泊まれる超高コスパ格安ホテル厳選5選。\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-tottori-yonago-station-daisen-crab-hotels-stay/\",\"datePublished\":\"2026-10-18T12:00:00+09:00\",\"dateModified\":\"2026-10-19T07:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド 編集部\",\"url\":\"https://croud-travel.pages.dev/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://croud-travel.pages.dev/icon.png\"}}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://croud-travel.pages.dev/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"特集一覧\",\"item\":\"https://croud-travel.pages.dev/features/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"米子駅前：名峰大山の紅葉＆境港紅ズワイガニ！2,000円台〜泊まれる格安ホテル5選\",\"item\":\"https://croud-travel.pages.dev/autumn-budget-tottori-yonago-station-daisen-crab-hotels-stay/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"米子駅前：名峰大山の紅葉＆境港紅ズワイガニ！2,000円台〜泊まれる格安ホテル5選\",\"numberOfItems\":10,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"西日本最大級のブナ原生林・大山寺や鍵掛峠を黄金に染める紅葉\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-tottori-yonago-station-daisen-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"平日泊で更なる割引\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-tottori-yonago-station-daisen-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"直前割＆早割を活用\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-tottori-yonago-station-daisen-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"浮いた予算で旬の味覚\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-tottori-yonago-station-daisen-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":5,\"name\":\"グリーンリッチホテル米子駅前　人工温泉・二股湯の華\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-tottori-yonago-station-daisen-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":6,\"name\":\"東横ＩＮＮ米子駅前\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-tottori-yonago-station-daisen-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":7,\"name\":\"スーパーホテル米子駅前\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-tottori-yonago-station-daisen-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":8,\"name\":\"ホテルハーベストイン米子\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-tottori-yonago-station-daisen-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":9,\"name\":\"ホテルフロンティア米子\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-tottori-yonago-station-daisen-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":10,\"name\":\"鳥取砂丘\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-tottori-yonago-station-daisen-crab-hotels-stay/\"}]}" }} />
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-amber-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">米子駅前 大山紅葉・境港カニ 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-stone-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>名峰大山の錦秋ブナ林＆境港直送の紅ズワイガニ</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「米子駅前」名峰大山の紅葉＆境港の紅ズワイガニ！<br className="hidden sm:inline" />2,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            「伯耆富士」と称される国立公園大山（だいせん）の壮大なブナ林の紅葉。秋に旬を迎える境港の甘みたっぷり「紅ズワイガニ」や、濃厚なコクが自慢の「米子牛骨ラーメン」。皆生温泉や大山寺への観光ハブ・米子駅周辺で、2,000円台〜泊まれる優良格安ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            米子駅前に温泉大浴場付き＆高コスパ宿が集結！浮いた予算で本場の松葉ガニ・紅ズワイガニを満喫
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            山陰の鉄道結節点・米子駅前は、近年リニューアルが進み美しく生まれ変わった注目のエリア。人工温泉大浴場付きホテルや駅直結ホテルが、秋の平日なら1泊2,000円台〜5,000円台で宿泊可能。浮いた予算で境港直送のカニ尽くし会席や鳥取和牛の炭火焼きを心ゆくまで堪能できます。
          </p>
        </div>
      </section>

      
      <div className="max-w-4xl mx-auto px-4">
        </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: グリーンリッチホテル米子駅前　人工温泉・二股湯の華 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩3分・二股湯の華人工温泉大浴場・★4.29</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.29</span>
                <span className="text-slate-400 text-xs font-normal">（770件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/177821/177821.jpg"
                  alt="グリーンリッチホテル米子駅前　人工温泉・二股湯の華"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  グリーンリッチホテル米子駅前　人工温泉・二股湯の華
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  米子
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  米子駅前通り沿いに位置し徒歩3分。館内には「二股湯の華」を使用した人工温泉大浴場とサウナを備え、大山登山や観光の疲れをリセット。★4.29の高評価を獲得する人気ホテルです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥5,100</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177821%2F177821.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: 東横ＩＮＮ米子駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩1分・安心の無料朝食バイキング・★3.92</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.92</span>
                <span className="text-slate-400 text-xs font-normal">（764件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/108324/108324.jpg"
                  alt="東横ＩＮＮ米子駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ米子駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  米子
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  米子駅を出てすぐ目の前の好アクセス。清潔で機能的な客室と、毎朝無料で提供されるバラエティ豊かな朝食バイキングが魅力。ビジネスにも山陰観光にも安心の定番ホテルです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥4,883</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108324%2F108324.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: スーパーホテル米子駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">最安3,780円〜・健康朝食無料バイキング・★4.05</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.05</span>
                <span className="text-slate-400 text-xs font-normal">（2328件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/104681/104681.jpg"
                  alt="スーパーホテル米子駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  スーパーホテル米子駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  米子
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  1名1泊3,780円〜の手頃な価格ながら、オーガニック野菜や焼き立てパンが楽しめる健康朝食が無料。快眠を追求した選べる枕など、細やかなサービスで満足度の高い滞在を提供します。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥3,780</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104681%2F104681.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: ホテルハーベストイン米子 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅徒歩1分・ヨーロッパ風クラシック建築・★4.03</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.03</span>
                <span className="text-slate-400 text-xs font-normal">（3241件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/814/814.jpg"
                  alt="ホテルハーベストイン米子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルハーベストイン米子
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  米子
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  米子駅から徒歩わずか1分。ヨーロッパ調の優雅な外観と落ち着いた客室が特徴で、ホテル内のレストランでの食事も好評。落ち着いた雰囲気で米子滞在を楽しみたい方に最適です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥3,740</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F814%2F814.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: ホテルフロンティア米子 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">驚愕の最安2,750円〜・米子駅前徒歩3分の格安拠点</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.04</span>
                <span className="text-slate-400 text-xs font-normal">（269件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/191650/191650.jpg"
                  alt="ホテルフロンティア米子"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルフロンティア米子
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  米子
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  1名1泊2,750円〜という地域最安クラスの宿泊料金が最大の強み。無駄を省いたスマートな滞在が可能で、浮いた予算を境港での紅ズワイガニ食べ放題や皆生温泉の外湯巡りに回せます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥2,750</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191650%2F191650.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 予約のコツ・アドバイス */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl p-6 md:p-8 space-y-4">
          <h2 className="text-lg font-bold text-amber-950 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-amber-600" />
            秋の格安旅行をお得に満喫するためのポイント</h2>
          <div className="grid md:grid-cols-3 gap-4 pt-2">
            <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-sm text-slate-900 mb-1">平日泊で更なる割引</h3>
              <p className="text-xs text-slate-600 leading-relaxed">紅葉シーズンは金曜・土曜の宿泊料金が高騰しがちですが、日〜木曜の平日泊なら最安プランが狙い目。人混みも少なく快適に名所を楽しめます。
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-sm text-slate-900 mb-1">直前割＆早割を活用</h3>
              <p className="text-xs text-slate-600 leading-relaxed">14日前〜28日前までの早期予約や、空室が出た直前のタイムセールを狙うことで、通常価格より1,000円〜2,000円以上安く泊まれるチャンスがあります。
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-sm text-slate-900 mb-1">浮いた予算で旬の味覚</h3>
              <p className="text-xs text-slate-600 leading-relaxed">宿泊を賢く格安ホテルに抑えることで、浮いた数千円の予算をご当地の豪華な旬の味覚や地酒ディナー、日帰り温泉の入浴料に贅沢に使えます。
              </p>
            </div>
          </div>
        </div>
      </section>
    
        {/* Enriched Rakuten Travel Hotel Specs */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 米子駅前：名峰大山の紅葉＆境港紅ズワイガニ！2,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「米子駅前：名峰大山の紅葉＆境港紅ズワイガニ！2,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. グリーンリッチホテル米子駅前　人工温泉・二股湯の華</td>
                <td className="p-3 text-stone-600">鳥取県米子市明治町175</td>
                <td className="p-3 text-stone-600">米子駅周辺</td>
                <td className="p-3 text-stone-600">有り　２３台（1000円/1泊）　先着順　※満車の場合は、お近くの駐車場をご案内いたします。</td>
                <td className="p-3 font-bold text-amber-600">★4.27（726件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177821%2F177821.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 東横ＩＮＮ米子駅前</td>
                <td className="p-3 text-stone-600">鳥取県米子市明治町100</td>
                <td className="p-3 text-stone-600">米子駅周辺</td>
                <td className="p-3 text-stone-600">駐車場有　車70台（700円/1泊）、大型バス1台駐車可（詳細はホテルへお問い合わせください）</td>
                <td className="p-3 font-bold text-amber-600">★3.92（767件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,883〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108324%2F108324.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. スーパーホテル米子駅前</td>
                <td className="p-3 text-stone-600">鳥取県米子市万能町112番地</td>
                <td className="p-3 text-stone-600">米子駅周辺</td>
                <td className="p-3 text-stone-600">提携駐車場３０台（予約不可の先着順）。１泊５００円（税込み）高さ制限2ｍ。途中入出庫不可</td>
                <td className="p-3 font-bold text-amber-600">★4.05（2339件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,710〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104681%2F104681.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテルハーベストイン米子</td>
                <td className="p-3 text-stone-600">鳥取県米子市弥生町8-27</td>
                <td className="p-3 text-stone-600">米子駅周辺</td>
                <td className="p-3 text-stone-600">契約40台【有料1台800円/泊】隣接：弥生町有料駐車場・日本交通立体駐車場　満車時近隣案内</td>
                <td className="p-3 font-bold text-amber-600">★4.05（3250件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,180〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F814%2F814.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテルフロンティア米子</td>
                <td className="p-3 text-stone-600">鳥取県米子市明治町127</td>
                <td className="p-3 text-stone-600">米子駅周辺</td>
                <td className="p-3 text-stone-600">13台／予約不可・先着順　※8/7　20：00〜8/9　8：00まで利用不可（米子がいな祭の為）</td>
                <td className="p-3 font-bold text-amber-600">★3.04（281件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191650%2F191650.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 「米子駅前」掲載宿の所在地・アクセス・特徴データ一覧
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">グリーンリッチホテル米子駅前　人工温泉・二股湯の華</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぐりーんりっちほてる　よなごえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/177821/177821.jpg" alt="グリーンリッチホテル米子駅前　人工温泉・二股湯の華 客室・施設イメージ" className="w-full h-full object-cover" loading="eager" fetchPriority="high" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＪＲ米子駅北口徒歩３分■男女別大浴場完備■米子コンベンションセンター・ビッグシップまで徒歩5分■</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県米子市明治町175 ／ 最寄り駅：米子 ／ 交通案内：ＪＲ米子駅北口より徒歩にて約３分／山陰道　米子中ＩＣよりお車にて約４分／米子鬼太郎空港より空港リムジンバスにて約２５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２３台（1000円/1泊）　先着順　※満車の場合は、お近くの駐車場をご案内いたします。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋は清潔でパンが絶品、駐車場は少し難あり部屋は清潔で真新しく設備も整っていたので快適に過ごせました。お風呂はビジネスホテルによくある大きさでしたが、米子や鳥取では当たり前なのか洗顔が置か…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">東横ＩＮＮ米子駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（とうよこいんよなごえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,883〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/108324/108324room1.jpg" alt="東横ＩＮＮ米子駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>米子駅から徒歩2分で朝食・小学生以下添い寝無料のホテル！米子コンベンションセンターまで車で2分</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県米子市明治町100 ／ 最寄り駅：米子 ／ 交通案内：JR山陰本線米子駅北口から徒歩2分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>駐車場有　車70台（700円/1泊）、大型バス1台駐車可（詳細はホテルへお問い合わせください）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.96 ／ 立地 ★4.03 ／ 部屋 ★3.98 ／ 設備 ★3.9 ／ 風呂 ★3.89 ／ 食事 ★3.85</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅からも近く、部屋も綺麗で快適でした。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">スーパーホテル米子駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（すーぱーほてるよなごえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,710〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/104681/104681_kya.jpg" alt="スーパーホテル米子駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＪＲ米子駅より徒歩2分！焼き立てパンと和洋朝食ビュッフェ無料・天然温泉完備（男女入替制）♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県米子市万能町112番地 ／ 最寄り駅：米子 ／ 交通案内：JR米子駅より徒歩2分／米子空港より空港の有料シャトルバスで30分／コンベンションセンターまで徒歩５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>提携駐車場３０台（予約不可の先着順）。１泊５００円（税込み）高さ制限2ｍ。途中入出庫不可</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.11 ／ 立地 ★4.07 ／ 部屋 ★4.07 ／ 設備 ★4.04 ／ 風呂 ★3.91 ／ 食事 ★4.04</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「便利な立地客室は広くありませんがひとりで泊まるには充分です。近くに飲食店もたくさんあり便利です。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルハーベストイン米子</h3>
                  <span className="text-xs text-stone-400 ml-2">（はーべすといん　よなご）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,180〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/814/814_sgl.jpg" alt="ホテルハーベストイン米子 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＪＲ米子駅の隣に建つヨーロッパ調の外観。ＪＲ米子駅・バスターミナルから徒歩１分とアクセス環境も抜群。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県米子市弥生町8-27 ／ 最寄り駅：米子 ／ 交通案内：米子駅/バスターミナルより徒歩1分。米子空港よりシャトルバスにて２５分。　米子道米子ＩＣより車で１０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>契約40台【有料1台800円/泊】隣接：弥生町有料駐車場・日本交通立体駐車場　満車時近隣案内</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.07 ／ 立地 ★4.12 ／ 部屋 ★4.01 ／ 設備 ★3.93 ／ 風呂 ★3.92</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近でアクセス抜群、朝食も美味しく快適出張のたびにこちらに宿泊しています。駅前にあるのでアクセスもよく、スタッフの方も親切で、お部屋も清潔感があります。朝食は1階の居酒屋さん?でバイキング…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルフロンティア米子</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるふろんてぃあよなご）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/191650/191650.jpg" alt="ホテルフロンティア米子 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＪＲ米子駅から徒歩１分の便利な立地。ビジネスから観光までリーズナブルな料金でご利用いただけます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県米子市明治町127 ／ 最寄り駅：米子 ／ 交通案内：ＪＲ　米子駅より徒歩約１分／米子空港からバスで約３０分／米子ＩＣから車で１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>13台／予約不可・先着順　※8/7　20：00〜8/9　8：00まで利用不可（米子がいな祭の為）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.05 ／ 立地 ★3.26 ／ 部屋 ★3 ／ 設備 ★2.93 ／ 風呂 ★2.92</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駐車場は空いていたが清掃と防音に難あり鳥取砂丘から米子に移動し、無料駐車場が狭いですが空いていたのは良かった。退室前の忘れ物チェック時に前の方のか、ベッド下からごみ袋が出てきたのと角部屋で…」
                  </blockquote>
                </div>
              </div>
            </div>
          </div></section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <HubRelatedPosts currentSlug="autumn-budget-tottori-yonago-station-daisen-crab-hotels-stay" />
        </div>

      </main>
  );
}
