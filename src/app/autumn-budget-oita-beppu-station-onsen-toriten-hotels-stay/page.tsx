import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-oita-beppu-station-onsen-toriten-hotels-stay/",
  },

  title: '別府駅前：名湯めぐり＆名物とり天・地獄蒸し！2,000円台〜泊まれる格安ホテル5選',
  description: '日本一のおんせん県・別府！駅前天然温泉や名物とり天、別府冷麺、立ち上る湯けむりの別府八湯。JR日豊本線・別府駅周辺で1泊2,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
  openGraph: {
    title: "別府駅前：名湯めぐり＆名物とり天・地獄蒸し！2,000円台〜泊まれる格安ホテル5選",
    description: "日本一のおんせん県・別府！駅前天然温泉や名物とり天、別府冷麺、立ち上る湯けむりの別府八湯。JR日豊本線・別府駅周辺で1泊2,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "別府駅前：名湯めぐり＆名物とり天・地獄蒸し！2,000円台〜泊まれる格安ホテル5選",
    description: "日本一のおんせん県・別府！駅前天然温泉や名物とり天、別府冷麺、立ち上る湯けむりの別府八湯。JR日豊本線・別府駅周辺で1泊2,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
  }
};

export default function AutumnBudgetHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-amber-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">別府駅前 名湯・とり天 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-stone-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>日本一の湧出量・別府八湯＆名物とり天・地獄蒸し</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「別府駅前」別府温泉めぐり＆名物とり天！<br className="hidden sm:inline" />2,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            毎分8万リットルを超える湧出量を誇る日本随一の温泉郷・別府。駅前の共同浴場や足湯、サクサクジューシーな大分名物「とり天」、ツルッとした喉越しの別府冷麺。秋の温泉旅を身軽に満喫できる、別府駅周辺で2,000円台〜泊まれる格安ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            別府駅前・北浜エリアに源泉掛け流し＆格安宿が充実！浮いた予算で外湯めぐりや豊後牛ディナーを満喫
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            JR別府駅周辺は、駅前温泉「駅前高等温泉」をはじめ無数の共同浴場が点在する温泉天国。ホテル内にも天然温泉を備えた格安宿が多く、秋のシーズンでも1泊2,000円台〜4,000円台で宿泊可能。浮いた旅費で地獄めぐりの共通券を購入したり、関アジ・関サバなどの極上海鮮を堪能できます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">日本一の湧出量を誇る温泉都：別府温泉（別府八湯）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">おんせん県おおいた名湯ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Beppu_Tower02s4s3200.jpg/1280px-Beppu_Tower02s4s3200.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="日本一の湧出量を誇る温泉都：別府温泉（別府八湯）"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">千余年の歴史を紡ぐ源泉・立ち上る湯けむりと豊かな泉質</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                別府温泉（べっぷおんせん）は、大分県別府市内各地に湧出する温泉の総称。源泉数・湧出量ともに日本一を誇り、浜脇、別府、観海寺、堀田、明礬、鉄輪、柴石、亀川の「別府八湯」で構成されます。古くは『豊後国風土記』にも記載され、湯治場として発展。秋には涼やかな風の中で立ち上る湯けむりと温かい湯が格別の心地よさを届けてくれます。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-amber-700 font-semibold">JR別府駅周辺（市内各地に外湯・共同浴場が点在）</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: 天然温泉　鉄輪の湯　スーパーホテル別府駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩1分・天然温泉「鉄輪の湯」・★4.38</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.38</span>
                <span className="text-slate-400 text-xs font-normal">（1268件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/180258/180258.jpg"
                  alt="天然温泉　鉄輪の湯　スーパーホテル別府駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  天然温泉　鉄輪の湯　スーパーホテル別府駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  別府（大分）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  JR別府駅東口から徒歩1分。館内に別府の名湯「鉄輪の湯」を引いた天然温泉大浴場を備え、健康イオン水や焼き立てパン朝食などスーパーホテルならではの充実サービスで★4.38の高レビューを誇ります。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥6,050</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180258%2F180258.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: 別府駅西口前　ホテル　フジヨシ */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">驚きの最安2,900円〜・駅西口徒歩1分・天然温泉内湯</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.9</span>
                <span className="text-slate-400 text-xs font-normal">（2294件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/778/778.jpg"
                  alt="別府駅西口前　ホテル　フジヨシ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  別府駅西口前　ホテル　フジヨシ
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  別府（大分）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  別府駅西口を出てすぐ目の前。レトロな佇まいながら館内には天然温泉の浴場があり、1泊2,900円〜という破格の安さで利用可能。駅前の共同浴場めぐりの拠点としても絶好のコスパ宿です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥2,900</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F778%2F778.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: アパホテル〈別府駅前〉 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅徒歩1分・★4.22・充実の最新設備と快眠ベッド</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.22</span>
                <span className="text-slate-400 text-xs font-normal">（548件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/183506/183506.jpg"
                  alt="アパホテル〈別府駅前〉"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  アパホテル〈別府駅前〉
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  別府（大分）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  別府駅東口から徒歩わずか1分。駅前バスターミナルや繁華街も至近で、地獄めぐりバスへの乗車もスムーズ。アパホテルならではの快眠ベッドと大型液晶テレビで快適な夜を過ごせます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥4,500</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183506%2F183506.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: 別府駅前　ホテルシーウェーブ別府 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩1分・天然温泉大浴場＆露天風呂・★4.06</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.06</span>
                <span className="text-slate-400 text-xs font-normal">（3409件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/9401/9401.jpg"
                  alt="別府駅前　ホテルシーウェーブ別府"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  別府駅前　ホテルシーウェーブ別府
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  別府（大分）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  別府駅前に位置し、館内には広々とした天然温泉大浴場と風情ある露天風呂を完備。手足を伸ばしてじっくり温泉に浸かることができ、駅前でありながら本格的な温泉旅館気分をリーズナブルに味わえます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥3,900</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9401%2F9401.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: ＨＯＴＥＬ　ＡＺ　大分別府駅前店 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">最安5,280円〜・朝食バイキング無料・安心AZグループ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.93</span>
                <span className="text-slate-400 text-xs font-normal">（327件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/167883/167883.jpg"
                  alt="ＨＯＴＥＬ　ＡＺ　大分別府駅前店"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ＨＯＴＥＬ　ＡＺ　大分別府駅前店
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  別府（大分）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  別府駅から徒歩圏内に位置するホテルAZ。年中均一のリーズナブルな価格設定と無料の朝食バイキングが特徴で、予算を明確に抑えて長期滞在や九州周遊旅を楽しみたい旅行者に心強い味方です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥5,280</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167883%2F167883.html"
                target="_blank"
                rel="noopener noreferrer"
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
          <h2 className="text-lg font-bold text-amber-950 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-600" />
            秋の格安旅行をお得に満喫するためのポイント
          </h2>
          <div className="grid md:grid-cols-3 gap-4 pt-2">
            <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-sm text-slate-900 mb-1">平日泊で更なる割引</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                紅葉シーズンは金曜・土曜の宿泊料金が高騰しがちですが、日〜木曜の平日泊なら最安プランが狙い目。人混みも少なく快適に名所を楽しめます。
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-sm text-slate-900 mb-1">直前割＆早割を活用</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                14日前〜28日前までの早期予約や、空室が出た直前のタイムセールを狙うことで、通常価格より1,000円〜2,000円以上安く泊まれるチャンスがあります。
              </p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-amber-100">
              <h3 className="font-bold text-sm text-slate-900 mb-1">浮いた予算で旬の味覚</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                宿泊を賢く格安ホテルに抑えることで、浮いた数千円の予算をご当地の豪華な旬の味覚や地酒ディナー、日帰り温泉の入浴料に贅沢に使えます。
              </p>
            </div>
          </div>
        </div>
      </section>
    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 別府駅前：名湯めぐり＆名物とり天・地獄蒸し！2,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「別府駅前：名湯めぐり＆名物とり天・地獄蒸し！2,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 天然温泉　鉄輪の湯　スーパーホテル別府駅前</td>
                <td className="p-3 text-stone-600">大分県別府市駅前町13-8</td>
                <td className="p-3 text-stone-600">別府（大分）駅周辺</td>
                <td className="p-3 text-stone-600">有り/５００円（１泊１台あたり）　先着順/予約不可</td>
                <td className="p-3 font-bold text-amber-600">★4.38（1170件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,280〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180258%2F180258.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 別府駅前　ホテルシーウェーブ別府</td>
                <td className="p-3 text-stone-600">大分県別府市駅前町12-8</td>
                <td className="p-3 text-stone-600">別府（大分）駅周辺</td>
                <td className="p-3 text-stone-600">無料の専用駐車場がございます。（※軽・普通車のみ）　詳しくはフロントまでお問合せください。</td>
                <td className="p-3 font-bold text-amber-600">★4.06（3415件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9401%2F9401.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 由布院温泉　ゆふいん山水館</td>
                <td className="p-3 text-stone-600">大分県由布市湯布院町大字川南108-1</td>
                <td className="p-3 text-stone-600">由布院駅周辺</td>
                <td className="p-3 text-stone-600">有り　乗用車　約60台　大型バス　約6台　料金は宿泊者無料</td>
                <td className="p-3 font-bold text-amber-600">★4.39（882件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1678%2F1678.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテル日航大分　オアシスタワー</td>
                <td className="p-3 text-stone-600">大分県大分市高砂町2-48</td>
                <td className="p-3 text-stone-600">大分駅周辺</td>
                <td className="p-3 text-stone-600">一律料金（ご1泊あたり1,000円）にてご利用頂けます。駐車場の入り口はプラン詳細をご確認ください</td>
                <td className="p-3 font-bold text-amber-600">★4.37（2678件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,375〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1801%2F1801.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 別府温泉　ホテルニューツルタ</td>
                <td className="p-3 text-stone-600">大分県別府市北浜1-14-15</td>
                <td className="p-3 text-stone-600">大分駅周辺</td>
                <td className="p-3 text-stone-600">入庫後21時間：最大700円・駐車場は有料＆先着順。満車の場合はご利用いただけないことがございます。</td>
                <td className="p-3 font-bold text-amber-600">★4.24（1215件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1938%2F1938.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　鉄輪の湯　スーパーホテル別府駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（すーぱーほてる　べっぷえきまえ　てんねんおんせん　かんなわのゆ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,280〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/180258/180258.jpg" alt="天然温泉　鉄輪の湯　スーパーホテル別府駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＪＲ別府駅東口より徒歩約2分！　鉄輪（かんなわ）温泉直送の天然温泉完備！　駅前繁華街もすぐ！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市駅前町13-8 ／ 最寄り駅：別府（大分） ／ 交通案内：ＪＲ　別府駅　東口より徒歩にて約1分　/　大分空港よりバス(エアライナー)で約1時間　/　別府ICより車で15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り/５００円（１泊１台あたり）　先着順/予約不可</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「別府湾の眺望と充実したサービスに大満足ハリウッドツインを3名利用でしたが十分な広さがあり、部屋の窓からは別府湾の海が見えました。温泉と朝食とチェックイン後のドリンクバー(夕方以降はアルコールも…　2026-08-22 18:07:50投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">別府駅前　ホテルシーウェーブ別府</h3>
                  <span className="text-xs text-stone-400 ml-2">（べっぷえきまえ　ほてるしーうぇーぶ　べっぷ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9401/9401_sgl.jpg" alt="別府駅前　ホテルシーウェーブ別府 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＪＲ別府駅目の前 　シティホテル感覚の広いお部屋と設備　ビジネスにも観光の拠点としても最適です</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市駅前町12-8 ／ 最寄り駅：別府（大分） ／ 交通案内：ＪＲ別府駅(表玄関東口)目の前　(徒歩で約1分）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料の専用駐車場がございます。（※軽・普通車のみ）　詳しくはフロントまでお問合せください。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4 ／ 立地 ★4.17 ／ 部屋 ★4.02 ／ 設備 ★3.95 ／ 風呂 ★4.1 ／ 食事 ★4.04</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食バイキングの混雑ぶりに驚き食欲減退こちらのタイミングもあるのかもしれませんがぬ朝食のバイキングの人の多さ(外国人)にはびっくりしました!食欲が無くなりました。ほかは、何も、なしで。クチコミ…　2026-10-10 00:03:18投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">由布院温泉　ゆふいん山水館</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆふいんおんせん　ゆふいんさんすいかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1678/1678_heya.jpg" alt="由布院温泉　ゆふいん山水館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【ドリンクインクルーシブ】 滞在中のドリンクが飲み放題！。由布岳を目の前に望む絶景露天風呂が自慢。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県由布市湯布院町大字川南108-1 ／ 最寄り駅：由布院 ／ 交通案内：ＪＲ由布院駅より徒歩約８分。大分自動車道湯布院ＩＣより車で約１５分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　乗用車　約60台　大型バス　約6台　料金は宿泊者無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お酒飲み放題とバイキング料理に大満足!お酒飲み放題最高でした夕食のバイキングも全部美味しかったです!クチコミの詳細はこちらから　https://review.travel.rakuten.…　2026-08-21 18:53:24投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル日航大分　オアシスタワー</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるにっこうおおいた　おあしすたわー）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,375〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1801/1801_tw.jpg" alt="ホテル日航大分　オアシスタワー 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>街の中心に位置する利便性と、大分の空や別府の海を望む客室。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県大分市高砂町2-48 ／ 最寄り駅：大分 ／ 交通案内：（JR大分駅から）徒歩で約10分（大分ＩＣから）車で約１５分（大分空港から）高速バスで約６０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>一律料金（ご1泊あたり1,000円）にてご利用頂けます。駐車場の入り口はプラン詳細をご確認ください</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.43 ／ 立地 ★4.39 ／ 部屋 ★4.4 ／ 設備 ★4.28 ／ 風呂 ★4.21 ／ 食事 ★4.36</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋からの眺めが最高でゆっくりくつろげる部屋からの眺め最高です。ゆっくりくつろげます。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp…　2026-10-08 23:32:55投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">別府温泉　ホテルニューツルタ</h3>
                  <span className="text-xs text-stone-400 ml-2">（べっぷおんせん　ほてるにゅーつるた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1938/1938_room.jpg" alt="別府温泉　ホテルニューツルタ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>別府湾を望む、まちなかに立地。地上20ｍにある大浴場からは別府湾が一望！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県別府市北浜1-14-15 ／ 最寄り駅：大分 ／ 交通案内：ＪＲ別府駅より徒歩8分。別府ＩＣより車で約15分。駐車場先着順、入庫後21時間最大700円。全室ロビー無料Wi-fi</p>
                  <p><strong>【駐車場・マイカー利用】</strong>入庫後21時間：最大700円・駐車場は有料＆先着順。満車の場合はご利用いただけないことがございます。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「施設は古めだが温泉と朝食は十分満足施設は少し古めですが、温泉、朝食とも十分楽しめました。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/ho…　2026-08-21 13:05:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！大分県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、大分県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">別府地獄めぐり</h3>
                <p className="text-xs text-stone-600 leading-relaxed">源泉数・湧出量日本一を誇る別府温泉の代表的観光コース。コバルトブルーの「海地獄」や真っ赤な「血の池地獄」、噴気で蒸す地獄蒸し料理が楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Yufuin_Onsen_-Mus%C5%8Den_02.jpg/1280px-Yufuin_Onsen_-Mus%C5%8Den_02.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="由布院（金鱗湖・辻馬車）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">由布院（金鱗湖・辻馬車）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">由布岳の麓に広がる全国屈指のおしゃれな温泉リゾート。清水と温泉が湧き出て朝霧が立ち込める「金鱗湖」や湯の坪街道のスイーツ巡りが女性に大人気です。 由布院温泉（ゆふいんおんせん）は、大分県由布市（旧国豊後国速見郡）にある温泉。由布岳（標高1,584m）の麓に広がる温泉地である。 温泉湧出量、源泉数ともに全国2位の豊富な湯量を誇る。1959年5月5日に湯平温泉とともに「湯布院温泉」として国民保養温泉地に指定され、2019年10月4日には、由布市内の塚原温泉・庄内温泉・挾間温泉を含めた「湯布院温泉郷」として…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">九重“夢”大吊橋</h3>
                <p className="text-xs text-stone-600 leading-relaxed">水面からの高さ173m、全長390mを誇る日本一高い歩行者専用吊り橋。橋の上からは「日本の滝百選」の震動の滝や九酔渓の壮大なパノラマを見渡せます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">宇佐神宮</h3>
                <p className="text-xs text-stone-600 leading-relaxed">全国に40,000社以上ある八幡社の総本宮。豊かな原生林に包まれた広大な敷地に朱塗りの本殿が建ち、伊勢神宮に並ぶ二拝四拍手一拝の参拝様式が特徴です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 大分県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 大分県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
