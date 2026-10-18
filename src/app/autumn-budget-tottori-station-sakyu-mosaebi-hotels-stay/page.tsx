import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-tottori-station-sakyu-mosaebi-hotels-stay/",
  },

  title: '鳥取駅前：秋の鳥取和牛・モサエビ＆黄金の鳥取砂丘！3,000円台〜泊まれる格安ホテル5選',
  description: '地元でしか味わえない幻のモサエビや鳥取和牛、風紋が美しく輝く秋の鳥取砂丘！鳥取駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
  openGraph: {
    title: "鳥取駅前：秋の鳥取和牛・モサエビ＆黄金の鳥取砂丘！3,000円台〜泊まれる格安ホテル5選",
    description: "地元でしか味わえない幻のモサエビや鳥取和牛、風紋が美しく輝く秋の鳥取砂丘！鳥取駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "鳥取駅前：秋の鳥取和牛・モサエビ＆黄金の鳥取砂丘！3,000円台〜泊まれる格安ホテル5選",
    description: "地元でしか味わえない幻のモサエビや鳥取和牛、風紋が美しく輝く秋の鳥取砂丘！鳥取駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
  }
};

export default function AutumnBudgetTottoriStationHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-yellow-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-yellow-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">鳥取駅前 モサエビ・鳥取砂丘 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-yellow-950 to-stone-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 text-xs font-semibold tracking-wider border border-yellow-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>幻の海老モサエビ＆日本屈指の大砂丘絶景</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「鳥取駅前」幻のモサエビ＆黄金に輝く鳥取砂丘！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-yellow-100/90 max-w-2xl mx-auto leading-relaxed">
            鮮度落ちが早く県外にはほぼ出回らない幻の海老「モサエビ」の濃厚な甘みと、肉質日本一に輝いた鳥取和牛。秋の澄み渡る風が砂上に美しい「風紋」を描く鳥取砂丘の夕景！鳥取駅から路線バスで直行できる好立地に3,000円台〜泊まれる優良宿を厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-yellow-600" />
            砂丘直行バスの発着駅！浮いた宿泊代で白イカ＆モサエビ刺身を贅沢に
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            鳥取砂丘や鳥取城跡へアクセスするバスターミナルがある鳥取駅前は、★4.1〜★4.2クラスのビジネスホテルが格安で利用できる穴場エリア。大浴場付きや朝食無料のホテルが1泊3,000円台〜4,000円台で見つかり、浮いた予算を鳥取港直送の海鮮丼や鳥取和牛ステーキに回せます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">山陰海岸名勝ガイド：鳥取砂丘（国の天然記念物・日本海の大砂丘）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Tottori-Sakyu_Tottori_Japan.JPG/1280px-Tottori-Sakyu_Tottori_Japan.JPG"
                alt="鳥取砂丘と日本海"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">千代川の砂と日本海の風がつくる風紋・馬の背からの大海原パノラマ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                鳥取砂丘（とっとりさきゅう）は、鳥取市の日本海海岸に広がる代表的海岸砂丘で、国の天然記念物。山陰海岸国立公園の特別保護地区に指定されています。秋の爽やかな海風が砂丘一面に描く芸術的な「風紋」や、高さ47mの「馬の背」の頂上から見下ろす紺碧の日本海、日本海に沈む夕日の美しさは圧巻です。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-yellow-700 font-semibold">JR鳥取駅より路線バスで約20分「鳥取砂丘」下車</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: スーパーホテル鳥取駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-md">★4.21・無料健康朝食バイキング・駅徒歩2分</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.21</span>
                <span className="text-slate-400 text-xs font-normal">（朝食無料高評価）</span>
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
                  JR鳥取駅北口より徒歩2分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  クチコミ★4.21。毎朝焼き上げるサクサクのパンや有機野菜サラダ、郷土のお惣菜が並ぶ健康朝食バイキングが完全無料で付いて3,500円前後の破格設定。選べる快眠枕やぐっすり眠れるベッドで、旅の疲れを心地よく癒やせます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込</span>
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
                className="block w-full py-3.5 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: ホテルRESH 鳥取駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">★4.07・男性大浴場＆サウナ完備・駅北口徒歩2分</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.07</span>
                <span className="text-slate-400 text-xs font-normal">（大浴場＆サウナ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5567/5567.jpg"
                  alt="ホテルRESH 鳥取駅前"
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
                  JR鳥取駅北口より徒歩2分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  男性専用の大浴場とサウナを備え、砂丘歩きの後のリフレッシュに最適。女性には選べるアメニティバーを提供。鳥取駅北口の繁華街に面しており、夜のモサエビ居酒屋や鳥取和牛焼肉店へのアクセスも徒歩すぐです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
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
                className="block w-full py-3.5 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: アパホテル〈鳥取駅前〉 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-orange-100 text-orange-800 text-xs font-bold rounded-md">★4.19・鳥取駅北口徒歩2分・Cloud fit快眠ベッド</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.19</span>
                <span className="text-slate-400 text-xs font-normal">（駅チカ＆快適設備）</span>
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
                  JR鳥取駅北口より徒歩2分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  クチコミ★4.19を獲得。オリジナル快眠ベッド「Cloud fit」や遮光カーテン、大型液晶テレビを完備。鳥取砂丘行きバスターミナルへも歩いてすぐで、早朝の砂丘散策にもスムーズに出発できます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
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
                className="block w-full py-3.5 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: 東横ＩＮＮ鳥取駅南口 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-stone-100 text-stone-800 text-xs font-bold rounded-md">★4.16・鳥取駅南口徒歩2分・無料朝食バイキング</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.16</span>
                <span className="text-slate-400 text-xs font-normal">（朝食無料＆駅近）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/108315/108315.jpg"
                  alt="東横ＩＮＮ鳥取駅南口"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ鳥取駅南口
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR鳥取駅南口より徒歩2分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  クチコミ★4.16の高評価。手作りおにぎりやお惣菜、具沢山味噌汁の無料朝食バイキングが付き、明るく清潔な客室で快適な滞在を提供。チェックイン前後の手荷物預かりもスムーズで、身軽に砂丘観光を満喫できます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込</span>
                    <span className="text-2xl font-black text-rose-600">¥4,673</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108315%2F108315.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: グリーンリッチホテル鳥取駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-md">★4.19・二股炭酸カルシウム人工温泉大浴場＆サウナ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.19</span>
                <span className="text-slate-400 text-xs font-normal">（温泉大浴場＆サウナ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/176748/176748.jpg"
                  alt="グリーンリッチホテル鳥取駅前"
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
                  JR鳥取駅北口より徒歩3分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  クチコミ★4.19。北海道二股温泉の湯の華を使用した炭酸カルシウム人工温泉大浴場とサウナを完備。シックでスタイリッシュなデザイナーズ空間と極上マットレスで、砂丘を歩き回った疲れた身体を極上の湯でリセットできます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・温泉大浴場付</span>
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
                className="block w-full py-3.5 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-yellow-500 hover:to-amber-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-amber-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-yellow-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の鳥取砂丘＆モサエビ旅を格安に遊び尽くすポイント
          </h2>
          <ul className="space-y-2 text-sm text-yellow-100/90 leading-relaxed">
            <li>・9月から水揚げされる幻のモサエビは、甘エビ以上の甘みと弾力。駅前の居酒屋や鳥取港「かろいち」で刺身や塩焼きを味わう。</li>
            <li>・秋の鳥取砂丘は日中の照り返しが和らぎ散策にベスト。夕暮れどきに馬の背から見渡す日本海の夕日グラデーションは圧巻。</li>
            <li>・砂丘近くの「砂の美術館」では世界最高峰の砂像彫刻が展示されており、秋の芸術鑑賞スポットとして必見です。</li>
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
              📊 鳥取駅前：秋の鳥取和牛・モサエビ＆黄金の鳥取砂丘！3,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「鳥取駅前：秋の鳥取和牛・モサエビ＆黄金の鳥取砂丘！3,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. スーパーホテル鳥取駅前</td>
                <td className="p-3 text-stone-600">鳥取県鳥取市扇町5</td>
                <td className="p-3 text-stone-600">鳥取駅周辺</td>
                <td className="p-3 text-stone-600">４２台　先着順　６００円（税込み／泊） ※立体駐車場のため全高・横幅・車高、入出庫の時間制限あり</td>
                <td className="p-3 font-bold text-amber-600">★4.21（1853件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,540〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70969%2F70969.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ホテルＲＥＳＨ　鳥取駅前</td>
                <td className="p-3 text-stone-600">鳥取県鳥取市栄町752</td>
                <td className="p-3 text-stone-600">鳥取駅周辺</td>
                <td className="p-3 text-stone-600">近隣に契約駐車場があります。(有料）</td>
                <td className="p-3 font-bold text-amber-600">★4.05（1656件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,060〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5567%2F5567.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. アパホテル〈鳥取駅前〉</td>
                <td className="p-3 text-stone-600">鳥取県鳥取市富安2-165</td>
                <td className="p-3 text-stone-600">鳥取駅周辺</td>
                <td className="p-3 text-stone-600">敷地内は車椅子使用者用駐車場1台のみ（要予約）、提携駐車場あり（徒歩約5分）</td>
                <td className="p-3 font-bold text-amber-600">★4.18（490件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196888%2F196888.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 東横ＩＮＮ鳥取駅南口</td>
                <td className="p-3 text-stone-600">鳥取県鳥取市富安2-153-3</td>
                <td className="p-3 text-stone-600">鳥取駅周辺</td>
                <td className="p-3 text-stone-600">平置22台・立体17台の先着順駐車場。1泊500円、時間外100円/時。車いす優先1台あり。</td>
                <td className="p-3 font-bold text-amber-600">★4.13（429件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,673〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108315%2F108315.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. グリーンリッチホテル鳥取駅前　人工温泉・二股湯の華</td>
                <td className="p-3 text-stone-600">北海道</td>
                <td className="p-3 text-stone-600">ＪＲ鳥取駅北口より徒歩にて約３分、鳥取自動車道 鳥取ＩＣより国道53号</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.2（886件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176748%2F176748.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
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
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
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
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">東横ＩＮＮ鳥取駅南口</h3>
                  <span className="text-xs text-stone-400 ml-2">（とうよこいんとっとりえきみなみぐち）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,673〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/108315/108315room1.jpg" alt="東横ＩＮＮ鳥取駅南口 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>鳥取駅から徒歩2分の好立地！お堀沿いの約500本のソメイヨシノが有名な鹿野城跡公園へは車で約30分★</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県鳥取市富安2-153-3 ／ 最寄り駅：鳥取 ／ 交通案内：JR鳥取駅南口より徒歩2分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>平置22台・立体17台の先着順駐車場。1泊500円、時間外100円/時。車いす優先1台あり。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.23 ／ 立地 ★4.15 ／ 部屋 ★4.2 ／ 設備 ★4 ／ 風呂 ★4.03 ／ 食事 ★4.18</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食の品数が少なく、団体客のマナーも残念朝食が少しお粗末。もう少し品がら欲しかった。また団体のお爺さんやお婆さんが邪魔でした。マナーをは指導してください。クチコミの詳細はこちらから　https…　2026-10-09 04:46:50投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
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
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！北海道の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、北海道を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Wide_view_of_Mount_Hakodate_from_Mashu-Maru.jpg/1280px-Wide_view_of_Mount_Hakodate_from_Mashu-Maru.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="函館山（夜景）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">函館山（夜景）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界三大夜景の一つに数えられる絶景スポット。津軽海峡と函館湾に挟まれたくびれが生み出す、宝石をちりばめたような眩い夜景は一生に一度は見たい感動のロケーションです。 函館山（はこだてやま）は、北海道函館市の市街地西端にある火山であり陸繋島でもある。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">富良野 ファーム富田</h3>
                <p className="text-xs text-stone-600 leading-relaxed">一面に広がる鮮やかな紫色のラベンダー畑と、虹色に彩られた花畑が織りなすパノラマロード。富良野の雄大な自然と爽やかな香りに包まれる絶好の観光名所です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Otaru_Hokkaido_Japan.jpg/1280px-Otaru_Hokkaido_Japan.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="小樽運河" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">小樽運河</h3>
                <p className="text-xs text-stone-600 leading-relaxed">大正時代に造られたノスタルジックな石造り倉庫群が立ち並ぶ小樽のシンボル。夕暮れ時にはガス灯が灯り、幻想的な雰囲気の中で散策やナイトクルーズを楽しめます。 小樽運河（おたるうんが）は、北海道小樽市にある運河。現在は物流機能としての使命を終えており、文化庁選定日本遺産「北海道の『心臓』と呼ばれたまち・小樽」を構成する遺産のひとつ。 1923年（大正12年）完成。日本国内唯一となる海岸の沖合い埋立て方式で造られており、緩やかに湾曲しているのが特徴になっている。全長1,140 mあり、幅は臨港線沿いは20 m、北部（…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/Asahikawa_Montage.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail_unscaled" alt="旭川市旭山動物園" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">旭川市旭山動物園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">行動展示で全国的に有名な日本最北の動物園。水中でダイナミックに泳ぐホッキョクグマや、円柱水槽を行き来するアザラシなど、生き生きとした動物たちの姿を間近で観察できます。 旭川市（あさひかわし）は、北海道のほぼ中央に位置し、上川総合振興局に属する市。振興局所在地であり、札幌市に次ぐ北海道第2位の人口（約31万人）を有する中核市である。 北海道中央部に位置し、上川盆地に広がっている。道北の経済・産業・文化の中心都市。ユネスコの「デザイン都市」、そして「国際会議観光都市」に認定されている。交通面では国道や鉄道路線の終起点となり高速…</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 北海道エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 北海道の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
