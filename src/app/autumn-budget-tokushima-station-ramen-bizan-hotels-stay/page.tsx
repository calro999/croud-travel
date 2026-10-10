import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '徳島駅前：秋の徳島ラーメン＆鳴門鯛・眉山パノラマ！4,000円台〜泊まれる格安ホテル5選',
  description: '甘辛豚バラ肉と生卵が絡む濃厚すき焼き風・徳島ラーメンと、潮流で身が引き締まる秋の鳴門鯛！阿波おどりの聖地・眉山のロープウェイ夜景を望む徳島駅周辺で1泊4,000円台〜泊まれる格安宿厳選5選。',
};

export default function AutumnBudgetTokushimaStationHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-indigo-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-indigo-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">徳島駅前 徳島ラーメン・眉山 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-slate-950 to-stone-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wider border border-indigo-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>濃厚ご当地ラーメン＆阿波のシンボル眉山夜景</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「徳島駅前」甘辛濃厚豚骨・徳島ラーメン＆眉山夜景！<br className="hidden sm:inline" />4,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-indigo-100/90 max-w-2xl mx-auto leading-relaxed">
            濃いめの豚骨醤油スープにじっくり煮込んだ甘辛豚バラ肉と生卵をトッピングした、白ご飯が進みまくるソウルフード「徳島ラーメン」。阿波おどり会館からロープウェイで登る眉山山頂からの絶景夜景を満喫し、徳島駅周辺で4,000円台〜泊まれる好立地ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-indigo-600" />
            一杯700円前後の絶品ラーメン！宿泊代を抑えて阿波尾鶏＆鳴門鯛を堪能
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            徳島駅周辺は繁華街・両国橋や秋田町にも徒歩でアクセスでき、有名ラーメン店「いのたに」「麺王」などのハシゴに最適。駅前エリアには朝食無料チェーンや天然温泉大浴場付きホテルが4,000円台〜5,000円台で多数展開しており、浮いた宿泊予算で地鶏「阿波尾鶏」の焼き鳥や鳴門鯛の刺身を堪能できます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">阿波名勝ランドマークガイド：眉山（万葉集にも詠まれた徳島のシンボル）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Mount_Bizan_from_Yoshinogawa_Bridge.JPG/1280px-Mount_Bizan_from_Yoshinogawa_Bridge.JPG"
                alt="吉野川橋から望む眉山"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">眉の形に見える優美な山容・山頂展望台から望む吉野川と紀伊水道</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                眉山（びざん）は、徳島県徳島市にある標高290mの山。どの方向から眺めても眉の姿に見えることからその名がついたとされ、万葉集にも詠まれた阿波の象徴です。麓の「阿波おどり会館」5階からロープウェイが運行しており、秋の澄んだ空気のなか、徳島平野と紀伊水道、遠く大鳴門橋まで望む夜景パノラマは必見です。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-indigo-700 font-semibold">徳島駅より阿波おどり会館へ徒歩約10分</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: アパホテル〈徳島駅前〉 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 text-xs font-bold rounded-md">徳島駅徒歩3分・快眠ベッドCloud fit完備</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.98</span>
                <span className="text-slate-400 text-xs font-normal">（駅チカ＆快適設備）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/7503/7503.jpg"
                  alt="アパホテル〈徳島駅前〉"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  アパホテル〈徳島駅前〉
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR徳島駅より徒歩3分の好立地
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  徳島駅前ロータリーからすぐの好立地に位置し、1泊4,000円台〜のリーズナブルな価格設定。オリジナル快眠ベッド「Cloud fit」や遮光カーテン、大型液晶テレビを完備。夜遅くまで徳島ラーメンや地酒居酒屋を楽しんだ後もスムーズに戻れる安心感があります。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥4,050</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7503%2F7503.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: スマイルホテル徳島 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">★4.03・徳島駅徒歩5分・機能的快眠客室</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.03</span>
                <span className="text-slate-400 text-xs font-normal">（クチコミ高評価）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/532/532.jpg"
                  alt="スマイルホテル徳島"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  スマイルホテル徳島
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR徳島駅より徒歩5分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  クチコミ★4.03を獲得する清潔で快適なビジネスホテル。全室サータ社製マットレスを導入し、上質な寝心地を提供。加湿空気清浄機や無料Wi-Fi、使い勝手の良いデスクが揃い、観光はもちろん連泊にも最適です。
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
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F532%2F532.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: 東横ＩＮＮ徳島駅眉山口 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">阿波おどり会館すぐ・眉山ロープウェイ至近・朝食無料</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.96</span>
                <span className="text-slate-400 text-xs font-normal">（眉山登山口すぐ）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/68537/68537.jpg"
                  alt="東横ＩＮＮ徳島駅眉山口"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ徳島駅眉山口
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR徳島駅より徒歩10分 / 阿波おどり会館まで徒歩3分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  眉山ロープウェイが発着する「阿波おどり会館」のすぐ近くに位置。手作りおにぎりや郷土の総菜が並ぶ無料朝食バイキングが付き、眉山夜景鑑賞や繁華街グルメ巡りの拠点に絶好のロケーションです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込</span>
                    <span className="text-2xl font-black text-rose-600">¥4,935</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68537%2F68537.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: 東横ＩＮＮ徳島駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-md">★4.07・徳島駅徒歩3分・高速バスターミナルすぐ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.07</span>
                <span className="text-slate-400 text-xs font-normal">（駅近＆無料朝食）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/108376/108376.jpg"
                  alt="東横ＩＮＮ徳島駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ徳島駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR徳島駅より徒歩3分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  クチコミ★4.07の高評価。徳島駅前広場や高速バスターミナルから徒歩3分とアクセス抜群。無料の健康朝食バイキングや清潔な客室、手荷物預かりサービスなど安定したおもてなしで、四国観光の安心の拠点です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込</span>
                    <span className="text-2xl font-black text-rose-600">¥5,040</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108376%2F108376.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: ダイワロイネットホテル徳島駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-md">★4.36・徳島駅正面徒歩1分・上質ワイドデスク</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.36</span>
                <span className="text-slate-400 text-xs font-normal">（駅正面＆ハイクオリティ）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/149130/149130.jpg"
                  alt="ダイワロイネットホテル徳島駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ダイワロイネットホテル徳島駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR徳島駅正面より徒歩1分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  徳島駅の目の前に位置するハイクラスビジネスホテル。広々とした客室にワイドデスク、シモンズ社製ベッドを完備。朝食には徳島名物フィッシュカツや鳴門金時を使った地元メニューが並び、5,000円台〜で最高峰の滞在快適性を提供します。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥5,700</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149130%2F149130.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-indigo-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の徳島ラーメン＆眉山夜景旅を格安に遊び尽くすポイント
          </h2>
          <ul className="space-y-2 text-sm text-indigo-100/90 leading-relaxed">
            <li>・徳島ラーメンは「茶系（濃厚豚骨醤油）」「白系（あっさり豚骨）」「黄系（鶏ガラスープ）」の3系統があり、食べ比べが楽しい。</li>
            <li>・夕暮れどきに阿波おどり会館から眉山ロープウェイで登り、吉野川河口と紀伊水道に広がる360度夜景を鑑賞。</li>
            <li>・駅前を拠点にすれば、鳴門海峡の渦潮観光や大塚国際美術館への路線バスもスムーズにアクセス可能です。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
