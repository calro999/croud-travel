import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【徳島駅前】眉山の秋パノラマ展望＆濃厚徳島ラーメン！4,000円台〜泊まれる格安ホテル5選',
  description: '万葉集にも詠まれた名山・眉山（びざん）ロープウェイからの秋の大パノラマ！甘辛豚バラ肉と生卵が絡む濃厚すき焼き風・徳島ラーメン。JR高徳線・徳島駅周辺で1泊4,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
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
          <span className="text-slate-800 font-medium">徳島駅前 眉山展望・徳島ラーメン 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-stone-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>眉山ロープウェイの秋展望＆甘辛濃厚徳島ラーメン</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【徳島駅前】眉山秋の絶景＆名物徳島ラーメン！<br className="hidden sm:inline" />4,000円台〜泊まれる格安・高コスパ宿5選
          </h1>
          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            徳島市のシンボル「眉山」。秋の澄んだ空気の中、ロープウェイで登る山頂からは徳島平野と紀伊水道、遠く大鳴門橋まで見渡す大パノラマ！甘辛く煮込んだ豚バラ肉に生卵を落として白飯と一緒に掻き込む名物「徳島ラーメン」や、ジューシーな「阿波尾鶏」に舌鼓！徳島駅周辺で4,000円台〜泊まれる優良ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            徳島駅前にハイクオリティ＆格安宿が勢揃い！浮いた予算でいのたに・麺王のラーメンハシゴを満喫
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            四国の東の玄関口・徳島駅周辺は、駅前広場から阿波おどり会館や眉山山麓へ歩いて行ける散策にぴったりのエリア。駅前ビジネスホテルが秋のシーズンでも1泊4,000円台〜5,000円台で快適な部屋を提供。浮いた旅費で本場の阿波尾鶏焼き鳥や徳島すだちサワーを贅沢に楽しめます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">どの方向から見ても眉の形に見える名峰：眉山（びざん）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">徳島市のシンボル・名山ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Mount_Bizan_from_Shimmachi_River_20200607.jpg/1280px-Mount_Bizan_from_Shimmachi_River_20200607.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="どの方向から見ても眉の形に見える名峰：眉山（びざん）"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">万葉集にも詠まれた秀峰・山頂展望台から望む徳島平野と紀伊水道</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                眉山（びざん）は、徳島県徳島市にある標高290mの山。どの方向から眺めても女性の眉の形に見えることからその名が付けられ、万葉集で船王（ふねのおおきみ）が詠んだ歌でも著名です。山麓の阿波おどり会館5階からロープウェイが山頂まで結び、秋には山肌が色づくなか、徳島市街から吉野川、紀伊水道、鳴門海峡までを一望する絶景が広がります。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-amber-700 font-semibold">JR徳島駅より徒歩約10分（阿波おどり会館内眉山ロープウェイ山麓駅へ）</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: ダイワロイネットホテル徳島駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">最安4,050円〜・駅前徒歩3分・アパの快眠ステイ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.36</span>
                <span className="text-slate-400 text-xs font-normal">（1984件のクチコミ）</span>
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
                  徳島
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  徳島駅から徒歩3分。1名1泊4,050円〜という良心的な価格ながら、大型液晶テレビや快眠ベッドを備え、快適な滞在を提供。徳島ラーメンの有名店巡りにも便利なロケーションです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥5,700</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149130%2F149130.html"
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

        {/* 宿2: アパホテル〈徳島駅前〉 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">最安4,200円〜・2026年最新オープン・清潔空間</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.98</span>
                <span className="text-slate-400 text-xs font-normal">（2107件のクチコミ）</span>
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
                  徳島
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  徳島駅前に新築オープンしたコージーコンフォーツホテル。最新の設備と清潔感あふれる客室デザインで、女性の一人旅やカップル旅行にもおすすめの高コスパホテルです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥4,050</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7503%2F7503.html"
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

        {/* 宿3: ＣＯＺＹ　ＣＯＭＦＯＲＴＳ　ＨＯＴＥＬ（コージーコンフォーツホテル）２０２６年８月８日新規オープン */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅徒歩3分・最安4,200円〜・使い勝手抜群</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.15</span>
                <span className="text-slate-400 text-xs font-normal">（26件のクチコミ）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/202210/202210.jpg"
                  alt="ＣＯＺＹ　ＣＯＭＦＯＲＴＳ　ＨＯＴＥＬ（コージーコンフォーツホテル）２０２６年８月８日新規オープン"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ＣＯＺＹ　ＣＯＭＦＯＲＴＳ　ＨＯＴＥＬ（コージーコンフォーツホテル）２０２６年８月８日新規オープン
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  徳島
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  徳島駅から徒歩約3分。大通り沿いで明るく安全な立地。手頃な宿泊料金で気兼ねなく滞在でき、浮いた予算を夜の徳島居酒屋での阿波尾鶏や地酒に回せます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥4,200</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F202210%2F202210.html"
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

        {/* 宿4: 東横ＩＮＮ徳島駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩1分・安心の無料朝食バイキング・★4.07</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.07</span>
                <span className="text-slate-400 text-xs font-normal">（547件のクチコミ）</span>
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
                  徳島
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  徳島駅前を出て徒歩1分の駅前好アクセス。清潔で使い勝手の良い客室と、毎朝無料で提供される朝食バイキングが人気。出張にも四国周遊観光にも安心の定番宿です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥5,040</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108376%2F108376.html"
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

        {/* 宿5: スマイルホテル徳島 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩1分・★4.36高評価・洗練されたシティホテル</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.03</span>
                <span className="text-slate-400 text-xs font-normal">（2313件のクチコミ）</span>
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
                  徳島
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  徳島駅東側に位置するダイワロイネットホテル。落ち着いたインテリアと広めのバスタブ、上質なベッドで★4.36の高評価を獲得。駅前でワンランク上の滞在を楽しめます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥4,200</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F532%2F532.html"
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
    </main>
  );
}
