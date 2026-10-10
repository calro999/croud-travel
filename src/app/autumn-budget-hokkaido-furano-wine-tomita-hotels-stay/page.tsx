import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '富良野：秋の収穫祭・ふらのワイン＆丘陵紅葉！4,000円台〜泊まれる格安リゾートホテル5選',
  description: '秋限定の「ふらのワイン」新酒や名物オムカレー、十勝岳連峰を望むファーム富田の秋花畑！北の大地・富良野で1泊4,000円台〜泊まれる格安・高コスパホテル厳選5選。',
};

export default function AutumnBudgetFuranoHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-purple-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-purple-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">富良野 ワイン・ファーム富田 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold tracking-wider border border-purple-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>秋のふらのワイン収穫祭＆十勝岳紅葉パノラマ</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「富良野」秋のふらのワイン新酒＆丘陵紅葉！<br className="hidden sm:inline" />4,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-purple-100/90 max-w-2xl mx-auto leading-relaxed">
            夏とは一変し、冠雪した十勝岳連峰の白とパッチワークの丘の紅葉が美しくコントラストを描く秋の富富良野。ぶどうの収穫を迎えるふらのワイン工場や、秋の花々が咲き誇るファーム富田。富良野スキー場・駅周辺のリゾートホテルに4,000円台〜泊まれる優良宿を厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-purple-600" />
            夏の混雑が落ち着く秋が狙い目！名門リゾートも4,000円台〜のオフピーク格安ステイ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            ラベンダーシーズンの熱狂が落ち着く秋は、富良野のリゾートホテルが年間で最もリーズナブルになるゴールデンシーズン。天然温泉や暖炉付きラウンジを備えたハイクラスホテルが4,000円台〜5,000円台で予約可能。浮いた予算でふらの和牛ステーキや地元チーズフォンデュを優雅に味わえます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">北の大地ランドマークガイド：ファーム富田（花畑と十勝岳連峰パノラマ）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Sign_of_Farm_Tomita.jpg"
                alt="ファーム富田の丘陵景観"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">秋のサルビアやマリーゴールドが彩る丘・日本最大級のドライフラワー館</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                ファーム富田（ファームとみた）は、北海道中富良野町にある日本を代表する農園。春から秋にかけて入園無料で開放され、秋にはサルビアやマリーゴールドなどの鮮やかな花々が丘陵を彩ります。日本最大級のドライフラワーの舎やカフェが併設され、澄み渡る秋空と十勝岳連峰の眺望が圧巻です。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-purple-700 font-semibold">富良野駅よりJR富良野線で約10分「中富良野駅」下車</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: ホテルムニン富良野 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-md">★4.58超高評価・北欧モダンブティック・人工温泉</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.58</span>
                <span className="text-slate-400 text-xs font-normal">（超高評価ホテル）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/172266/172266.jpg"
                  alt="ホテルムニン富良野"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルムニン富良野（Ｈｏｔｅｌ　Ｍｕｎｉｎ　Ｆｕｒａｎｏ）
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富良野駅より車で約10分 / スキー場リゾートエリア
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  クチコミ★4.58を誇る洗練された北欧風ブティックホテル。木の温もりあふれる客室と、手足を伸ばして温まれる人工温泉大浴場を完備。暖炉のあるラウンジで秋の富良野の静寂を味わいながら、4,000円台前半で贅沢なリゾート滞在が叶います。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・大浴場付</span>
                    <span className="text-2xl font-black text-rose-600">¥4,185</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172266%2F172266.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: 新富良野プリンスホテル */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">★4.35名門リゾート・紫彩の湯（天然温泉）・ニングルテラス</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.35</span>
                <span className="text-slate-400 text-xs font-normal">（名門リゾート天然温泉）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/30804/30804.jpg"
                  alt="新富良野プリンスホテル"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  新富良野プリンスホテル
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富良野駅より路線バス約18分 / 無料大駐車場完備
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  富良野を代表する最高峰リゾートホテル。地下1,010mから湧出する天然温泉「紫彩の湯」や、森の中にログハウスが並ぶ幻想的な「ニングルテラス」が敷地内に。秋の平日限定プランなら5,000円台〜で名門プリンスホテルステイが手に入ります。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・名門リゾート</span>
                    <span className="text-2xl font-black text-rose-600">¥5,412</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30804%2F30804.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: FURANO NATULUX HOTEL */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">富良野駅徒歩1分・スタイリッシュスパ＆岩盤浴</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.07</span>
                <span className="text-slate-400 text-xs font-normal">（駅前デザイナーズ）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/67066/67066.jpg"
                  alt="FURANO NATULUX HOTEL"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ＦＵＲＡＮＯ　ＮＡＴＵＬＵＸ　ＨＯＴＥＬ
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富良野駅正面より徒歩1分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  富良野駅の目の前に佇むデザイナーズホテル。「ナチュラル＆リラックス」をテーマにしたガラス張りの開放的なロビーと、大浴場＆岩盤浴スパを完備。駅近でレンタカーやJR利用のアクセスも抜群です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・スパ付</span>
                    <span className="text-2xl font-black text-rose-600">¥5,400</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67066%2F67066.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: 富良野リゾートホテル エーデルヴェルメ */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">北欧風赤レンガホテル・光明石人工温泉大浴場</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.06</span>
                <span className="text-slate-400 text-xs font-normal">（北欧風リゾート）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/16240/16240.jpg"
                  alt="富良野リゾートホテル エーデルヴェルメ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  富良野リゾートホテル　エーデルヴェルメ
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富良野駅より車で約8分（無料駐車場完備）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  北欧の田園領主の館をイメージした赤レンガ造りの洋館リゾート。光明石を使用した人工温泉大浴場でゆったり温まることができ、館内には暖炉ラウンジも。秋の富良野ドライブ旅の拠点として心温まる滞在を提供します。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥6,000</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16240%2F16240.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: ホテル ナトゥールヴァルト富良野 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">★4.10・展望露天風呂・スイーツ＆ウェルカムサービス</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.10</span>
                <span className="text-slate-400 text-xs font-normal">（無料サービス充実）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/75270/75270.jpg"
                  alt="ホテル ナトゥールヴァルト富良野"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテル　ナトゥールヴァルト富良野
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富良野駅より車で約8分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  クチコミ★4.10。十勝岳連峰を一望する展望露天風呂と大浴場を完備。湯上がりのビールやアイスクリーム、お菓子バイキングなど無料のおもてなしが充実。ファミリーからカップルまで圧倒的なリピート率を誇る人気リゾートです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・大浴場付</span>
                    <span className="text-2xl font-black text-rose-600">¥6,600</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75270%2F75270.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-purple-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-purple-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の富良野ワイン＆丘陵紅葉旅を格安に満喫するポイント
          </h2>
          <ul className="space-y-2 text-sm text-purple-100/90 leading-relaxed">
            <li>・ふらのワイン工場では、秋仕込みの新酒ワインの試飲や、十勝岳連峰を見渡す丘の上のレストランでのランチが格別。</li>
            <li>・ファーム富田は秋の花畑が見頃。夏の混雑がなく、落ち着いて写真撮影やカフェタイムを楽しめる穴場時期。</li>
            <li>・富良野名物の「富良野オムカレー」や、チーズ工房での搾りたて牛乳ジェラートなど、秋の実りグルメも満載です。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
