import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '鳥取駅前：秋の鳥取和牛・モサエビ＆黄金の鳥取砂丘！3,000円台〜泊まれる格安ホテル5選',
  description: '地元でしか味わえない幻のモサエビや鳥取和牛、風紋が美しく輝く秋の鳥取砂丘！鳥取駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
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
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
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
            <div className="md:col-span-7 space-y-3">
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
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/70969/70969.jpg"
                  alt="スーパーホテル鳥取駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
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
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70969%2F70969.html"
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
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5567/5567.jpg"
                  alt="ホテルRESH 鳥取駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
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
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5567%2F5567.html"
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
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/196888/196888.jpg"
                  alt="アパホテル〈鳥取駅前〉"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
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
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196888%2F196888.html"
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
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/108315/108315.jpg"
                  alt="東横ＩＮＮ鳥取駅南口"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
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
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108315%2F108315.html"
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
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/176748/176748.jpg"
                  alt="グリーンリッチホテル鳥取駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
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
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176748%2F176748.html"
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
    </main>
  );
}
