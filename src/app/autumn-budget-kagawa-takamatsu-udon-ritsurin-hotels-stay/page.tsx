import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【高松】秋の讃岐うどん巡り＆栗林公園紅葉！3,000円台〜泊まれる格安ホテル5選',
  description: 'いりこ出汁が染みる本場の讃岐うどんハシゴ旅と、一歩一景の美を誇る大名庭園・栗林公園の秋紅葉！高松駅・瓦町周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
};

export default function AutumnBudgetTakamatsuHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
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
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【高松】名店讃岐うどん巡り＆栗林公園の錦秋！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選
          </h1>
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
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
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
            <div className="md:col-span-7 space-y-3">
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
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/183326/183326.jpg"
                  alt="ホテルエリアワン高松シティ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
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
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183326%2F183326.html"
                target="_blank"
                rel="noopener noreferrer"
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
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/13730/13730.jpg"
                  alt="高松国際ホテル"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
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
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13730%2F13730.html"
                target="_blank"
                rel="noopener noreferrer"
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
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8869/8869.jpg"
                  alt="リーガホテルゼスト高松"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
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
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8869%2F8869.html"
                target="_blank"
                rel="noopener noreferrer"
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
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/50215/50215.jpg"
                  alt="スーパーホテル高松・田町"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
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
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50215%2F50215.html"
                target="_blank"
                rel="noopener noreferrer"
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
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/181859/181859.jpg"
                  alt="ＫＯＫＯ ＨＯＴＥＬ 高松"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
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
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181859%2F181859.html"
                target="_blank"
                rel="noopener noreferrer"
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
    </main>
  );
}
