import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-tottori-station-sakyu-mosaebi-beef-hotels-stay/",
  },

  title: '鳥取駅前：黄金の鳥取砂丘＆幻のモサエビ・鳥取和牛！3,000円台〜泊まれる格安ホテル5選',
  description: '山陰海岸国立公園・鳥取砂丘の美しい風紋と日本海の秋の夕日！地元でしか味わえない幻の「モサエビ」や上質な鳥取和牛。JR山陰本線・鳥取駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
  openGraph: {
    title: "鳥取駅前：黄金の鳥取砂丘＆幻のモサエビ・鳥取和牛！3,000円台〜泊まれる格安ホテル5選",
    description: "山陰海岸国立公園・鳥取砂丘の美しい風紋と日本海の秋の夕日！地元でしか味わえない幻の「モサエビ」や上質な鳥取和牛。JR山陰本線・鳥取駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "鳥取駅前：黄金の鳥取砂丘＆幻のモサエビ・鳥取和牛！3,000円台〜泊まれる格安ホテル5選",
    description: "山陰海岸国立公園・鳥取砂丘の美しい風紋と日本海の秋の夕日！地元でしか味わえない幻の「モサエビ」や上質な鳥取和牛。JR山陰本線・鳥取駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
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
          <span className="text-slate-800 font-medium">鳥取駅前 鳥取砂丘・モサエビ 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-stone-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>広大な鳥取砂丘の秋風紋＆地元限定の幻のモサエビ・鳥取和牛</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「鳥取駅前」黄金の鳥取砂丘＆幻のモサエビ！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            東西16kmに広がる日本最大級の海岸砂丘「鳥取砂丘」。秋風が砂の上に描く美しい「風紋」と、日本海に沈む茜色の夕日は息をのむ美しさ。鮮度が落ちやすく県外に出回らない幻のエビ「モサエビ」の濃厚な甘みや、霜降り「鳥取和牛」に舌鼓！鳥取駅周辺で3,000円台〜泊まれる優良ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            鳥取駅前・末広温泉町に天然温泉付き＆格安ホテルが集結！浮いた予算で海鮮丼や鳥取カレーを満喫
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            日本で唯一県庁所在地に天然温泉が湧く鳥取市街。鳥取駅周辺には温泉大浴場付きホテルや清潔なビジネス宿が並び、秋の平日なら1泊3,000円台〜4,000円台で快適な部屋を予約可能。浮いた予算で駅前居酒屋のモサエビ刺身盛り合わせや鳥取名物「砂丘らっきょう」「すなば珈琲」を贅沢に楽しめます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">風と砂が織りなす大自然の彫刻：鳥取砂丘（風紋と馬の背）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">山陰海岸国立公園・国の天然記念物</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Tottori-Sakyu_Tottori_Japan.JPG/1280px-Tottori-Sakyu_Tottori_Japan.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="風と砂が織りなす大自然の彫刻：鳥取砂丘（風紋と馬の背）"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">日本海からの秋風が生み出す神秘の風紋・「馬の背」から見渡す日本海の夕暮れ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                鳥取砂丘（とっとりさきゅう）は、鳥取県鳥取市の日本海海岸に広がる広大な海浜砂丘。山陰海岸国立公園の特別保護地区であり、国の天然記念物に指定されています。最大高低差約90mのすり鉢状の地形や「馬の背」と呼ばれる巨大な砂の丘が見どころ。秋には心地よい潮風が砂の上に美しい幾何学模様「風紋（ふうもん）」を描き、夕暮れ時には日本海の水平線が黄金色に染まる壮大な光景を見せてくれます。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-amber-700 font-semibold">JR鳥取駅バスターミナルより路線バス約20分（鳥取砂丘下車）</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: アパホテル〈鳥取駅前〉 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">驚きの最安3,540円〜・健康朝食無料バイキング・★4.21</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.19</span>
                <span className="text-slate-400 text-xs font-normal">（485件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/196888/196888.jpg"
                  alt="アパホテル〈鳥取駅前〉"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  アパホテル〈鳥取駅前〉
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  鳥取
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  鳥取駅から徒歩約2分の好立地。1名1泊3,540円〜という良心的な価格設定ながら、毎朝焼き立てパンや有機野菜が楽しめる健康朝食が無料。コストパフォーマンス抜群の滞在が叶います。
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
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196888%2F196888.html"
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

        {/* 宿2: グリーンリッチホテル鳥取駅前　人工温泉・二股湯の華 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">最安4,060円〜・駅前徒歩2分・充実アメニティ・★4.07</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.19</span>
                <span className="text-slate-400 text-xs font-normal">（906件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/176748/176748.jpg"
                  alt="グリーンリッチホテル鳥取駅前　人工温泉・二股湯の華"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  グリーンリッチホテル鳥取駅前　人工温泉・二股湯の華
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  鳥取
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  鳥取駅から徒歩2分。全室に加湿空気清浄機や使いやすいデスクを備え、ビジネスや一人旅に快適。駅前の飲食店街や繁華街へもすぐ繰り出せます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥5,200</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176748%2F176748.html"
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

        {/* 宿3: アパホテル〈鳥取駅前南〉 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩1分・★4.19・大型液晶テレビ＆快眠ベッド</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.13</span>
                <span className="text-slate-400 text-xs font-normal">（2223件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70830/70830.jpg"
                  alt="アパホテル〈鳥取駅前南〉"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  アパホテル〈鳥取駅前南〉
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  鳥取
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  鳥取駅北口を出て徒歩1分の駅前好アクセス。駅前バスターミナルも目の前で、鳥取砂丘行きのバスへの乗り継ぎもスムーズ。快眠ベッドで旅の疲れを心地よく癒せます。
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
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70830%2F70830.html"
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

        {/* 宿4: スーパーホテル鳥取駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅徒歩2分・二股湯の華人工温泉大浴場・★4.19</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.21</span>
                <span className="text-slate-400 text-xs font-normal">（1834件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70969/70969.jpg"
                  alt="スーパーホテル鳥取駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  スーパーホテル鳥取駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  鳥取
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  鳥取駅から徒歩2分。館内に「二股湯の華」を使用した人工温泉大浴場とサウナを完備し、★4.19の高評価。砂丘を歩き回った足を大きな湯船で存分に伸ばせます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥3,540</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70969%2F70969.html"
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

        {/* 宿5: ホテルＲＥＳＨ　鳥取駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅南口徒歩2分・★4.13・静かな環境と安心ブランド</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.07</span>
                <span className="text-slate-400 text-xs font-normal">（1652件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5567/5567.jpg"
                  alt="ホテルＲＥＳＨ　鳥取駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルＲＥＳＨ　鳥取駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  鳥取
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  鳥取駅南口から徒歩2分。静かな環境で落ち着いて眠ることができ、アパホテルならではの高品質アメニティを完備。手頃な料金で快適なプライベートステイを提供します。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥4,060</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5567%2F5567.html"
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
              📊 鳥取駅前：黄金の鳥取砂丘＆幻のモサエビ・鳥取和牛！3,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「鳥取駅前：黄金の鳥取砂丘＆幻のモサエビ・鳥取和牛！3,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. アパホテル〈鳥取駅前〉</td>
                <td className="p-3 text-stone-600">鳥取県鳥取市富安2-165</td>
                <td className="p-3 text-stone-600">鳥取駅周辺</td>
                <td className="p-3 text-stone-600">敷地内は車椅子使用者用駐車場1台のみ（要予約）、提携駐車場あり（徒歩約5分）</td>
                <td className="p-3 font-bold text-amber-600">★4.18（490件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196888%2F196888.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. グリーンリッチホテル鳥取駅前　人工温泉・二股湯の華</td>
                <td className="p-3 text-stone-600">鳥取県</td>
                <td className="p-3 text-stone-600">ＪＲ鳥取駅北口より徒歩にて約３分、鳥取自動車道 鳥取ＩＣより国道53号</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.2（886件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176748%2F176748.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. アパホテル〈鳥取駅前南〉</td>
                <td className="p-3 text-stone-600">鳥取県鳥取市富安2-138-2</td>
                <td className="p-3 text-stone-600">鳥取駅周辺</td>
                <td className="p-3 text-stone-600">敷地内平面駐車場40台【先着順・予約不可】1泊500円（15:00〜翌11:00）他提携P等有り</td>
                <td className="p-3 font-bold text-amber-600">★4.13（2232件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70830%2F70830.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. スーパーホテル鳥取駅前</td>
                <td className="p-3 text-stone-600">鳥取県鳥取市扇町5</td>
                <td className="p-3 text-stone-600">鳥取駅周辺</td>
                <td className="p-3 text-stone-600">４２台　先着順　６００円（税込み／泊） ※立体駐車場のため全高・横幅・車高、入出庫の時間制限あり</td>
                <td className="p-3 font-bold text-amber-600">★4.21（1853件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,540〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70969%2F70969.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテルＲＥＳＨ　鳥取駅前</td>
                <td className="p-3 text-stone-600">鳥取県鳥取市栄町752</td>
                <td className="p-3 text-stone-600">鳥取駅周辺</td>
                <td className="p-3 text-stone-600">近隣に契約駐車場があります。(有料）</td>
                <td className="p-3 font-bold text-amber-600">★4.05（1656件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,060〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5567%2F5567.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">アパホテル〈鳥取駅前〉</h3>
                  <span className="text-xs text-stone-400 ml-2">（あぱほてる〈とっとりえきまえ〉）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/196888/196888.jpg" alt="アパホテル〈鳥取駅前〉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2025年10月23日開業！【全室禁煙】準天然人工温泉「光明石温泉」の大浴殿完備</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県鳥取市富安2-165 ／ 最寄り駅：鳥取 ／ 交通案内：JR山陰本線「鳥取駅」（南口）より徒歩2分　鳥取の観光やビジネスにアクセス便利な好立地！</p>
                  <p><strong>【駐車場・マイカー利用】</strong>敷地内は車椅子使用者用駐車場1台のみ（要予約）、提携駐車場あり（徒歩約5分）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.21 ／ 立地 ★4.23 ／ 部屋 ★4.25 ／ 設備 ★4.23 ／ 風呂 ★4.18 ／ 食事 ★3.59</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「Great location, but check-in is quite tedious.Excellent location for a trip to Tottori. Very close…　2026-10-04 19:54:47投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=196888&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">グリーンリッチホテル鳥取駅前　人工温泉・二股湯の華</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/176748/176748.jpg" alt="グリーンリッチホテル鳥取駅前　人工温泉・二股湯の華 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ鳥取駅北口より徒歩にて約３分、鳥取自動車道 鳥取ＩＣより国道53号線を鳥取市方面へ車で14分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「1週間でリピートするほど大満足の定宿毎度毎度毎度毎度の定宿!いつもお世話になっております。前の週にプライベート(夏休み)でも訪れて、1週間でのリピート。それでもそれでも大満足のGRクオリティはシン…　2026-09-18 15:45:29投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=176748&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">アパホテル〈鳥取駅前南〉</h3>
                  <span className="text-xs text-stone-400 ml-2">（あぱほてる　とっとりえきまえみなみ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/70830/70830_tu.jpg" alt="アパホテル〈鳥取駅前南〉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>鳥取駅から徒歩2分！Wi-Fi6導入！VODアパルームシアター視聴無料！朝食和洋ビュッフェ！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県鳥取市富安2-138-2 ／ 最寄り駅：鳥取 ／ 交通案内：JR鳥取駅南口から徒歩2分/鳥取自動車道鳥取I.Cより車で約10分/鳥取砂丘コナン空港からバスで約20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>敷地内平面駐車場40台【先着順・予約不可】1泊500円（15:00〜翌11:00）他提携P等有り</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.16 ／ 立地 ★4.14 ／ 部屋 ★4.23 ／ 設備 ★4.11 ／ 風呂 ★3.93 ／ 食事 ★4.03</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「清潔で広々とした部屋で快適に過ごせた部屋はとても清潔でした。広さも申し分なく快適に泊まれました。クチコミの詳細はこちらから　https://review.travel.rakuten.co.j…　2026-10-09 09:18:57投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">スーパーホテル鳥取駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（すーぱーほてるとっとりえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,540〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/70969/70969_s.jpg" alt="スーパーホテル鳥取駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>鳥取駅南口より徒歩1分！ビジネスや旅行の拠点に最適！健康朝食やウェルカムバーが無料☆</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県鳥取市扇町5 ／ 最寄り駅：鳥取 ／ 交通案内：ＪＲ山陰本線　鳥取駅南口より徒歩１分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>４２台　先着順　６００円（税込み／泊） ※立体駐車場のため全高・横幅・車高、入出庫の時間制限あり</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.31 ／ 立地 ★4.22 ／ 部屋 ★4.18 ／ 設備 ★4.12 ／ 風呂 ★4.03 ／ 食事 ★4.23</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「飲食店が近くにあり、無料朝食も便利チェックインが遅くなりましたが、すぐ近くに遅くまでやっている飲食店があったのでよかったです。日曜日ということもあってか、朝食会場が混んでいて待ち時間が少しあり…　2026-10-10 09:07:08投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルＲＥＳＨ　鳥取駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるれっしゅ　とっとりえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,060〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5567/5567_s.jpg" alt="ホテルＲＥＳＨ　鳥取駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR鳥取駅前より徒歩や2分、雨の日も濡れずにアクセス可能！男女大浴場・サウナ完備</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県鳥取市栄町752 ／ 最寄り駅：鳥取 ／ 交通案内：JR鳥取駅より徒歩約2分。丸由百貨店（旧鳥取大丸）東側です／鳥取西道路・鳥取西ICより車で約8分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>近隣に契約駐車場があります。(有料）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.12 ／ 立地 ★4.14 ／ 部屋 ★3.95 ／ 設備 ★4 ／ 風呂 ★4.05</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「立地は最高だが、コンセントと空調に難ありとても立地は良く、ご飯を食べに行くのにもよかったです。お部屋ですが枕元にコンセントが少ないのと、クーラーがうるさかったです。クチコミの詳細はこち…　2026-10-04 21:06:13投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！鳥取県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、鳥取県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Tottori-Sakyu_Tottori_Japan.JPG/1280px-Tottori-Sakyu_Tottori_Japan.JPG?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="鳥取砂丘" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">鳥取砂丘</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本最大級の海岸砂丘。風が織りなす美風紋や馬の背からの壮大な日本海の眺望が素晴らしく、ラクダ乗り体験やパラグライダーが人気です。 鳥取砂丘（とっとりさきゅう）は、鳥取県鳥取市の日本海海岸に広がる日本の代表的な海岸砂丘。広義には鳥取平野の海岸沿いに位置する東西16km、南北2.4kmの砂丘のことで、末恒砂丘、湖山砂丘、浜坂砂丘、福部砂丘の総称である。狭義にはこのうち千代川東岸の浜坂砂丘のことをいい、その一部は観光砂丘となっている。 砂丘の一部は山陰海岸国立公園の特別保護地区に指定されてい…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">水木しげるロード（境港）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">漫画『ゲゲゲの鬼太郎』の作者・水木しげる先生の故郷。境港駅から続く約800mの通りに170体以上のブロンズ像が並び、ブロンズ妖怪探訪を楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">大山（伯耆富士）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">中国地方最高峰（標高1,729m）を誇る名峰。その雄姿から「伯耆富士」と称され、鍵掛峠からのブナ原生林とダイナミックな南壁の紅葉が見事です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">浦富海岸（うらどみかいがん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「山陰の松島」と称される透明度抜群の澄み切った海と断崖・洞門の絶景。グラスボートでの島めぐりやシーカヤックで洞窟探検を楽しめます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 鳥取県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 鳥取県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
