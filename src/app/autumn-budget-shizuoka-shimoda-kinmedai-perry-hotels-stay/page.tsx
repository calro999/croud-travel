import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '伊豆下田：旬の金目鯛煮付け＆名湯満喫！3,000円台〜泊まれる格安温泉ホテル5選',
  description: '秋に脂が乗り最高潮の旨味を誇る下田名物「金目鯛の煮付け」と黒船来航の歴史情緒を満喫！伊豆急下田駅周辺・下田温泉で3,000円台〜泊まれる格安・高コスパ宿厳選5選。',
};

export default function AutumnBudgetShimodaKinmedaiHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-rose-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-rose-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">伊豆下田 金目鯛・下田港 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-rose-950 via-slate-900 to-indigo-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold tracking-wider border border-rose-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>南伊豆・秋の金目鯛グルメ＆黒船の港町</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「伊豆下田」旬の脂乗り金目鯛＆歴史ある名湯！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ温泉宿5選</h1>
          <p className="text-sm md:text-base text-rose-100/90 max-w-2xl mx-auto leading-relaxed">
            日本一の水揚げ量を誇る下田港の「金目鯛」。秋は産卵を終えて脂を蓄え、身がほろりと解ける煮付けや鮮度抜群の地魚握りが一年で最も旨い季節です。ペリー提督一行が歩いた風情ある石畳のペリーロードや黒船の港風景を巡り、3,000円台〜泊まれる格安・良質宿を厳選紹介。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-rose-600" />
            高級リゾートのイメージを覆す！3,000円台〜泊まれる下田の穴場コスパ宿
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            伊豆急行線の終着駅・伊豆急下田駅周辺や下田港エリアには、源泉かけ流しの天然温泉やオーシャンビューを誇りながら、3,000円台〜7,000円台で利用できるお得な温泉宿・リゾートホテルが点在しています。浮いた予算で下田名物の金目鯛一本煮付けを贅沢に味わいましょう。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">南伊豆開国名所ガイド：下田港（ペリー来航・開国の港町）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Shimoda_Port_Shimodau_Shizuoka_pref_Japan01s.jpg/1280px-Shimoda_Port_Shimodau_Shizuoka_pref_Japan01s.jpg"
                alt="下田港と開国の歴史景観"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">幕末の開国史跡と金目鯛水揚げ日本一の良港</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                下田港（しもだこう）は、静岡県下田市にある歴史的な港湾。1854年の日米和親条約締結により開港され、マシュー・ペリー率いる黒船艦隊が来航した開国の舞台です。現在では金目鯛の水揚げ量が日本一を誇る水産拠点としても名高く、港沿いには金目鯛料理や干物店が軒を連ねます。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-rose-700 font-semibold">伊豆急下田駅より徒歩約10分</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: 下田荘 浜辺の湯 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-rose-100 text-rose-800 text-xs font-bold rounded-md">破格の3,900円〜・天然温泉かけ流し</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.80</span>
                <span className="text-slate-400 text-xs font-normal">（源泉かけ流し温泉）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/14761/14761.jpg"
                  alt="下田荘 浜辺の湯"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  下田荘　浜辺の湯
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  白浜海岸すぐ / 伊豆急下田駅よりバス約10分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  下田屈指の絶景白浜ビーチ至近に位置し、良質な自家源泉の天然温泉が24時間掛け流しで楽しめる温泉民宿。1泊3,900円〜という破格の料金で本物の温泉を満喫でき、気兼ねのないアットホームな滞在が可能です。波音を聴きながらのんびり過ごしたい方に最適。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・源泉温泉付</span>
                    <span className="text-2xl font-black text-rose-600">¥3,900</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14761%2F14761.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: 下田温泉 下田伊東園ホテルはな岬 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">夕朝食バイキング＆アルコール飲み放題付き</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.79</span>
                <span className="text-slate-400 text-xs font-normal">（2食バイキング付）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/50545/50545.jpg"
                  alt="下田温泉 下田伊東園ホテルはな岬"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  下田温泉　下田伊東園ホテルはな岬
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  伊豆急下田駅より徒歩約6分 / 下田港を望む好立地
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  下田湾を目の前に望むリバーサイドホテル。夕食・朝食の豪華和洋バイキングに加えて、夕食時は生ビールや地酒などのアルコール飲み放題が無料でセット。広々とした大浴場で名湯下田温泉に浸かりながら、6,000円台〜で存分に満喫できる圧巻のコスパ宿です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊2食付（飲み放題込）</span>
                    <span className="text-2xl font-black text-rose-600">¥6,748</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50545%2F50545.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: 下田温泉 下田ベイクロシオ */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">★4.66極上高評価・下田湾一望の絶景宿</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.66</span>
                <span className="text-slate-400 text-xs font-normal">（超高評価宿）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5645/5645.jpg"
                  alt="下田温泉 下田ベイクロシオ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  下田温泉　下田ベイクロシオ
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  伊豆急下田駅より車で5分（無料送迎あり）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  楽天トラベルクチコミ★4.66という異例の超高評価を獲得している人気ホテル。高台から下田湾をパノラマで見下ろす展望大浴場や露天風呂、隅々まで手入れされた快適な客室が自慢です。静かなリゾート空間で心安らぐひとときをリーズナブルに味わえます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・展望温泉付</span>
                    <span className="text-2xl font-black text-rose-600">¥7,500</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5645%2F5645.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: 下田温泉 黒船ホテル */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 text-xs font-bold rounded-md">★4.23・全室オーシャンビュー＆港湾パノラマ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.23</span>
                <span className="text-slate-400 text-xs font-normal">（港湾絶景大浴場）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1307/1307.jpg"
                  alt="下田温泉 黒船ホテル"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  下田温泉　黒船ホテル
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  伊豆急下田駅より徒歩10分 / 下田港に面した老舗
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  下田港を一望できる絶景のオーシャンビュー客室と、海を望む広大な大浴場・露天風呂が名物のリゾートホテル。夕暮れどきに赤く染まる下田港の船影を眺めながらの湯浴みは格別。下田観光の拠点として抜群のロケーションを誇ります。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・オーシャンビュー</span>
                    <span className="text-2xl font-black text-rose-600">¥8,019</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1307%2F1307.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: 下田東急ホテル */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">★4.58名門リゾート・大浦湾を望む高台温泉</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.58</span>
                <span className="text-slate-400 text-xs font-normal">（名門リゾート）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1660/1660.jpg"
                  alt="下田東急ホテル"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  下田東急ホテル
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  伊豆急下田駅より車で約6分（定時無料シャトルバスあり）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  大浦湾を見下ろす高台に建つ、伊豆を代表する名門クラシックリゾート。椰子の木が揺れる庭園や太平洋を一望できる温泉露天風呂は感動的な開放感。上質な接客とおもてなしに満ちており、早割や期間限定プランを活用すれば8,000円台〜で名門リゾートステイが叶います。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・名門リゾート</span>
                    <span className="text-2xl font-black text-rose-600">¥8,266</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1660%2F1660.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-rose-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-rose-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の伊豆下田金目鯛旅行を格安に満喫するポイント
          </h2>
          <ul className="space-y-2 text-sm text-rose-100/90 leading-relaxed">
            <li>・秋の下田金目鯛は脂乗りが最上。下田港周辺の魚料理店「魚でん」や「徳造丸」の煮付け定食が絶品です。</li>
            <li>・ペリーロードのなまこ壁古民家カフェやレトロな街並みは、気候が穏やかな秋の散策に最高のロケーション。</li>
            <li>・宿泊費を格安に抑えて浮いた分で、金目鯛しゃぶしゃぶや握り寿司を奮発するのが通の旅スタイル。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
