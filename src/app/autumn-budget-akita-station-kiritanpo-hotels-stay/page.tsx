import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【秋田駅前】新米きりたんぽ鍋＆千秋公園紅葉！2,000円台〜泊まれる格安ホテル5選',
  description: '秋の新米あきたこまちで作る本場の熱々きりたんぽ鍋や比内地鶏、久保田城跡・千秋公園の美しい紅葉！秋田新幹線・秋田駅周辺で1泊2,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
};

export default function AutumnBudgetAkitaStationHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-amber-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">秋田駅前 きりたんぽ鍋・千秋公園 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-stone-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>秋の新米あきたこまち＆比内地鶏の極上鍋</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【秋田駅前】新米きりたんぽ鍋＆千秋公園紅葉！<br className="hidden sm:inline" />2,000円台〜泊まれる格安・高コスパ宿5選
          </h1>
          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            秋は収穫されたばかりの新米あきたこまちをすり鉢で半殺しにして香ばしく焼き上げる「本場きりたんぽ」の最旬期。比内地鶏の濃厚ガラ出汁とセリの根が香る絶品鍋に舌鼓！久保田城跡・千秋公園の紅葉を散策し、秋田駅周辺で2,000円台〜泊まれる優良ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            駅前・仲小路にハイクオリティ格安宿が集結！浮いた予算できりたんぽ御膳を満喫
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            秋田新幹線の終着駅・秋田駅周辺は、★4.2〜★4.5超を誇る安心の大手ホテルやデザイナーズ宿が激しい価格競争を展開中。1泊2,000円台〜4,000円台で快適な部屋を確保でき、浮いた宿泊予算で老舗料亭「濱乃家」や駅前居酒屋の比内地鶏炭火焼き・銘酒新政を贅沢に楽しめます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">出羽名城ガイド：千秋公園（久保田城跡・佐竹氏20万石の城）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/Kogetsu-pond_in_Senshu_Park_20180520.jpg/1280px-Kogetsu-pond_in_Senshu_Park_20180520.jpg"
                alt="千秋公園（久保田城跡）胡月池"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">佐竹藩主が築いた久保田城跡・水濠と御隅櫓を彩る秋の紅葉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                千秋公園（せんしゅうこうえん）は、秋田県秋田市にある久保田城跡を整備した名勝公園。江戸時代に久保田藩主・佐竹氏が築いた平山城で、石垣をほとんど用いず土塁を多用した堅牢な縄張りが特徴。復元された御隅櫓や表門、胡月池の周りをモミジやイチョウが華やかに彩り、秋の城下町散策に最適です。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-amber-700 font-semibold">JR秋田駅西口より徒歩約5分</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: EN HOTEL Akita */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">驚愕の2,800円〜・★4.23・モダンデザイン客室</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.23</span>
                <span className="text-slate-400 text-xs font-normal">（超破格プライス）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/196574/196574.jpg"
                  alt="EN HOTEL Akita"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ＥＮ　ＨＯＴＥＬ　Ａｋｉｔａ
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR秋田駅西口より徒歩4分 / 千秋公園至近
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  2,000円台とは思えない洗練されたデザインと快適な客室空間が魅力。秋田駅西口から徒歩4分、千秋公園へも歩いてすぐの好立地。ラウンジスペースも居心地が良く、一人旅や秋の東北周遊旅に最高のコスパを誇ります。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥2,800</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196574%2F196574.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: クインテッサホテル秋田 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-md">★4.04・シモンズベッド完備・繁華街川反徒歩圏</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.04</span>
                <span className="text-slate-400 text-xs font-normal">（クチコミ高評価）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/187580/187580.jpg"
                  alt="クインテッサホテル秋田"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  クインテッサホテル秋田
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR秋田駅西口より徒歩約15分 / 川反繁華街すぐ
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  秋田一の飲食店街「川反（かわばた）」のすぐ近くに位置し、夜のきりたんぽ居酒屋や地酒バー巡りに最高の立地。全室にシモンズ社製ベッドを導入し、清潔で落ち着いた客室で3,000円台の手頃な価格で滞在できます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥3,870</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187580%2F187580.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: リッチモンドホテル秋田駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">★4.41・駅西口徒歩4分・大型デスク＆広々客室</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.41</span>
                <span className="text-slate-400 text-xs font-normal">（クチコミ高評価宿）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/73983/73983.jpg"
                  alt="リッチモンドホテル秋田駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  リッチモンドホテル秋田駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR秋田駅西口より徒歩4分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  顧客満足度の高さで名高いリッチモンドブランド。シモンズベッドや清潔な水回り、加湿空気清浄機を完備。朝食バイキングにはきりたんぽ鍋や稲庭うどん、比内地鶏卵など秋田グルメが勢揃いし、4,000円台前半とは思えない満足感が得られます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥4,150</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73983%2F73983.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: ダイワロイネットホテル秋田駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">★4.52超高評価・駅西口徒歩2分・上質快眠空間</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.52</span>
                <span className="text-slate-400 text-xs font-normal">（超高評価ホテル）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/192772/192772.jpg"
                  alt="ダイワロイネットホテル秋田駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ダイワロイネットホテル秋田駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR秋田駅西口より徒歩2分の駅チカ
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  クチコミ★4.52を誇る駅前トップクラスのハイクオリティホテル。全室バス・トイレ独立のセパレート設計を採用し、広々としたバスタブで温まれます。秋田駅ビルやバスターミナルも目の前で、快適さと利便性を兼ね備えた一軒です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥4,275</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F192772%2F192772.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: 東横ＩＮＮ秋田駅東口 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-stone-100 text-stone-800 text-xs font-bold rounded-md">無料手作り健康朝食・秋田駅東口直結通路</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.99</span>
                <span className="text-slate-400 text-xs font-normal">（駅直結＆朝食無料）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/39502/39502.jpg"
                  alt="東横ＩＮＮ秋田駅東口"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ秋田駅東口
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR秋田駅東口より連絡通路直結（徒歩1分）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  改札から屋根付き連絡通路で直結し、雨雪に濡れず到着できる抜群の立地。手作りおにぎりや総菜、お味噌汁が付いた無料朝食バイキングを提供。機能的で明るい客室で、新幹線利用の出張や東北旅行をスムーズに楽しめます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込</span>
                    <span className="text-2xl font-black text-rose-600">¥5,618</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39502%2F39502.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
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
          <h2 className="text-xl font-bold flex items-center gap-2 text-amber-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の秋田きりたんぽ＆千秋公園旅を格安に満喫するポイント
          </h2>
          <ul className="space-y-2 text-sm text-amber-100/90 leading-relaxed">
            <li>・秋の新米あきたこまちを使ったきりたんぽ鍋は比内地鶏の出汁が染み渡り、駅前名店「秋田きりたんぽ屋」で手軽に味わえる。</li>
            <li>・久保田城跡・千秋公園の紅葉は10月下旬〜11月上旬に見頃を迎え、御隅櫓展望台からの秋田市街パノラマも必見。</li>
            <li>・川反商店街の老舗酒場で、全国にファンを持つ秋田の地酒（新政、雪の茅舎、一白水成）を飲み比べるのが至高の夜。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
