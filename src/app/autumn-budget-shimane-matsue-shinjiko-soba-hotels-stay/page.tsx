import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '松江・宍道湖：秋の宍道湖七珍・出雲そば＆国宝松江城！3,000円台〜泊まれる格安ホテル5選',
  description: '秋の味覚・宍道湖七珍のシジミ汁や挽きぐるみ出雲そば、湖畔を茜色に染める宍道湖夕日！国宝天守・松江城下で1泊3,000円台〜泊まれる超高コスパ格安宿厳選5選。',
};

export default function AutumnBudgetMatsueShinjikoHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-teal-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-teal-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">松江・宍道湖 出雲そば・松江城 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-slate-950 via-teal-950 to-stone-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wider border border-teal-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>宍道湖夕景＆国宝千鳥城の錦秋</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「松江・宍道湖」秋の味覚宍道湖七珍＆国宝松江城！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-teal-100/90 max-w-2xl mx-auto leading-relaxed">
            茜色に染まる「宍道湖の夕日」と、大和シジミやスズキなど秋に旨味を増す名物「宍道湖七珍」、香り高い挽きぐるみの「出雲そば」。堀川遊覧船が巡る国宝松江城の城下町で、天然温泉や源泉かけ流し付きながら3,000円台〜で泊まれる超得ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-teal-600" />
            水の都・松江の格安ステイ！浮いた予算で出雲そば割子と湖畔割烹を満喫
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            国宝天守を擁する城下町・松江は、松江駅周辺から宍道湖畔にかけて源泉掛け流し温泉付きホテルやビジネス宿が充実。高級旅館街の松江しんじ湖温泉でも、お得な素泊まりプランを活用すれば3,000円台〜4,000円台で湖畔の温泉に浸かることができます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">山陰国宝名城ガイド：松江城（国宝天守・千鳥城）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Matsue_Castle_Tenjukaku_from_Ninomaru.jpg/1280px-Matsue_Castle_Tenjukaku_from_Ninomaru.jpg"
                alt="松江城天守閣と二の丸"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">千鳥が羽を広げたような優美な天守・現存12天守の国宝城郭</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                松江城（まつえじょう）は、島根県松江市殿町にある江戸時代初期の城。別名「千鳥城（ちどりじょう）」。現存12天守の一つであり、天守は国宝に指定されています。黒塗りの雨覆板に覆われた武骨な佇まいが美しく、秋には天守を囲む木々が赤や黄色に染まり、天守最上階からは宍道湖を一望できます。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-teal-700 font-semibold">JR松江駅よりぐるっと松江レイクラインバスで約10分</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: 松江アーバンホテルキュービックルーム */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">★4.13・3,400円台〜・松江駅前徒歩2分</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.13</span>
                <span className="text-slate-400 text-xs font-normal">（超格安＆高評価）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/177606/177606.jpg"
                  alt="松江アーバンホテルキュービックルーム"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  松江アーバンホテルキュービックルーム
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR松江駅北口より徒歩2分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  プライベート空間を確保した最新キャビン型ホテル。全室にフランスベッド製高級マットレスや個別コンセント、Wi-Fiを完備。清潔な大浴場やシャワールームが整い、3,000円台前半で静かに快眠できるコスパ最強の宿です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥3,410</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177606%2F177606.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-500 hover:to-cyan-600 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: 全室源泉温泉かけ流し 松江シティホテル本館 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">全室天然温泉かけ流し・客室風呂で源泉満喫</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.61</span>
                <span className="text-slate-400 text-xs font-normal">（部屋で源泉かけ流し）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/815/815.jpg"
                  alt="松江シティホテル本館"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  全室源泉温泉かけ流し　松江シティホテル本館
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  大橋川沿い / JR松江駅より徒歩10分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  客室のお風呂の蛇口をひねると本物の源泉かけ流し天然温泉が出る贅沢なホテル。誰にも邪魔されず、24時間好きなときに客室で名湯に浸かれます。時計台が印象的なレトロモダンな外観で、3,000円台で温泉三昧が叶います。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・客室温泉付</span>
                    <span className="text-2xl font-black text-rose-600">¥3,700</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F815%2F815.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-500 hover:to-cyan-600 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: 松江しんじ湖温泉 ニューアーバンホテル本館・別館 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-md">★4.29・宍道湖一望展望大浴場・天然温泉</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.29</span>
                <span className="text-slate-400 text-xs font-normal">（展望温泉＆宍道湖ビュー）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5005/5005.jpg"
                  alt="松江しんじ湖温泉 ニューアーバンホテル"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  松江しんじ湖温泉　ニューアーバンホテル本館・別館
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  一畑電車「松江しんじ湖温泉駅」より徒歩7分 / 松江城徒歩圏
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  宍道湖畔に位置し、展望温泉大浴場からは湖を一望する絶景パノラマ。夕暮れどきに赤く染まる宍道湖の夕日を眺めながらの湯浴みは感動的。松江城や武家屋敷へも徒歩圏内で、4,000円台〜で本物の湖畔温泉リゾートを味わえます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・展望温泉付</span>
                    <span className="text-2xl font-black text-rose-600">¥4,750</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5005%2F5005.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-500 hover:to-cyan-600 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: 東横ＩＮＮ松江駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-stone-100 text-stone-800 text-xs font-bold rounded-md">無料健康朝食バイキング・松江駅徒歩2分</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.93</span>
                <span className="text-slate-400 text-xs font-normal">（駅チカ＆朝食無料）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/39764/39764.jpg"
                  alt="東横ＩＮＮ松江駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ松江駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR松江駅北口より徒歩2分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  松江駅前バスターミナルに近く、出雲大社行きの直行バスや松江城周遊バスの利用にも極めて便利。手作りおにぎりや総菜、お味噌汁が付いた無料朝食バイキングが付き、明るく機能的な客室で快適に滞在できます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込</span>
                    <span className="text-2xl font-black text-rose-600">¥5,565</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39764%2F39764.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-500 hover:to-cyan-600 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: 松江エクセルホテル東急 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">★4.35・松江駅正面徒歩1分・上質シティホテル</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.35</span>
                <span className="text-slate-400 text-xs font-normal">（駅正面＆東急ブランド）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/529/529.jpg"
                  alt="松江エクセルホテル東急"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  松江エクセルホテル東急
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR松江駅北口正面より徒歩1分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  クチコミ★4.35の高評価。松江駅の目の前にそびえる洗練されたシティホテル。出雲の伝統工芸を散りばめたモダンな客室と、東急ホテルズならではの行き届いたホスピタリティ。出雲そばや地酒を楽しめるレストランも併設され、5,000円台〜で優雅な旅が叶います。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥5,957</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F529%2F529.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-teal-600 to-cyan-700 hover:from-teal-500 hover:to-cyan-600 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-teal-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の松江・宍道湖旅を格安に遊び尽くすポイント
          </h2>
          <ul className="space-y-2 text-sm text-teal-100/90 leading-relaxed">
            <li>・秋の宍道湖七珍（シジミ、スズキ、モロゲエビなど）を割烹や居酒屋で堪能し、シメには名物・出雲割子そばを注文。</li>
            <li>・日没の30分前には「とるぱ（宍道湖夕日スポット）」へ行き、嫁ヶ島と鳥居が夕陽にシルエットとなる絶景を鑑賞。</li>
            <li>・国宝松江城の堀川を巡る「ぐるっと松江堀川めぐり」は秋の紅葉風景を水上から見上げる風情あふれる体験です。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
