import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '松山・大街道：宇和島鯛めし＆現存天守・松山城！2,000円台〜泊まれる格安ホテル5選',
  description: '新鮮な真鯛と特製タレ卵黄が絶品の宇和島鯛めし、現存12天守の松山城紅葉！道後温泉への路面電車もすぐの大街道・松山市駅周辺で1泊2,000円台〜泊まれる超高コスパ格安宿厳選5選。',
};

export default function AutumnBudgetMatsuyamaOkaidoHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-orange-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-orange-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">松山 鯛めし・松山城 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-orange-950 via-stone-900 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-semibold tracking-wider border border-orange-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>愛媛名物・宇和島鯛めし＆現存名城の錦秋</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「松山・大街道」絶品鯛めし＆松山城紅葉ロープウェイ！<br className="hidden sm:inline" />2,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-orange-100/90 max-w-2xl mx-auto leading-relaxed">
            秋に脂が乗り甘みを増す瀬戸内の真鯛を、特製のタレと生卵に絡めて熱々ご飯にかきこむ名物「宇和島鯛めし」。現存12天守を誇る名城・松山城のロープウェイ街や市内最大の大街道商店街周辺で、2,000円台〜泊まれるサウナ・大浴場付きの破格宿を厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-orange-600" />
            城下町・大街道は激戦区！宿代を抑えて鯛めし食べ比べ＆道後温泉本館へ
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            松山市の中心繁華街・大街道や松山市駅周辺は、道後温泉旅館街よりも圧倒的に宿泊費が安く、1泊2,000円台〜4,000円台で快適なホテルが充実。路面電車で道後温泉へわずか10分で出かけられるため、昼は鯛めしと城下町散策、夜は道後温泉本館の外湯巡りを賢く楽しめます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">伊予名城ガイド：松山城（現存12天守・金亀城の秋景観）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/0/07/%E6%9D%BE%E5%B1%B1%E5%9F%8E%E5%A4%A9%E5%AE%88_%282372904566%29.jpg"
                alt="松山城天守と城郭"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">勝山山頂にそびえる連立式天守・瀬戸内海を一望する眺望</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                松山城（まつやまじょう）は、愛媛県松山市の中心部・勝山に築かれた日本の城。別名「金亀城（きんきじょう）」。江戸時代以前に建造された天守が現存する「現存12天守」の一つであり、国の重要文化財に指定されています。ロープウェイやリフトで登ることができ、秋の紅葉に包まれた天守最上階からは松山市街と瀬戸内海の多島美が一望できます。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-orange-700 font-semibold">大街道電停よりロープウェイ東雲口駅へ徒歩約5分</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: ホテル勝山 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-orange-100 text-orange-800 text-xs font-bold rounded-md">破格の2,900円〜・勝山町電停すぐ・温泉大浴場</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.89</span>
                <span className="text-slate-400 text-xs font-normal">（超格安プライス）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/164470/164470.jpg"
                  alt="ホテル勝山"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテル勝山
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  路面電車「勝山町」電停より徒歩約3分 / 大街道徒歩圏
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  大街道の飲食店街や松山城登山口へ徒歩圏内でありながら、1泊2,900円〜という圧巻の低価格。足を伸ばして浸かれる大浴場を完備し、旅の歩き疲れを癒やせます。とにかく宿泊費を抑えて鯛めしや道後温泉にお金をかけたい一人旅に最適。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・大浴場付</span>
                    <span className="text-2xl font-black text-rose-600">¥2,900</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F164470%2F164470.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: アビスイン道後・松山 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">★4.11・無料朝食バイキング・勝山町電停徒歩3分</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.11</span>
                <span className="text-slate-400 text-xs font-normal">（無料朝食高評価）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/20374/20374.jpg"
                  alt="アビスイン道後・松山"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  アビスイン道後・松山
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  市内電車「勝山町」電停より徒歩3分 / 大街道まで徒歩7分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  クチコミ★4.11の高評価を誇る清潔なビジネスホテル。焼きたてパンや地元のお惣菜が並ぶ充実の無料朝食バイキングが付いて、3,000円台の良心的な価格設定。道後温泉への路面電車もすぐ乗車でき、観光の足回りが非常に良好です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込</span>
                    <span className="text-2xl font-black text-rose-600">¥3,770</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20374%2F20374.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: アパホテル〈松山市駅前〉 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-md">2026年最新オープン・松山市駅徒歩1分</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.26</span>
                <span className="text-slate-400 text-xs font-normal">（最新駅前ホテル）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/199177/199177.jpg"
                  alt="アパホテル〈松山市駅前〉"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  アパホテル〈松山市駅前〉
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  伊予鉄道「松山市駅」より徒歩1分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  2026年夏に新築開業した最新ホテル。松山市駅のバスターミナルや百貨店いよてつ高島屋が目の前。高品質・高機能な客室設計、快眠ベッド「Cloud fit」、大型液晶テレビを完備。最新鋭の設備で極めて快適な滞在が可能です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥4,860</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F199177%2F199177.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: ホテルＮｏ．１松山 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">最上階展望露天風呂＆サウナ完備・大街道すぐ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.94</span>
                <span className="text-slate-400 text-xs font-normal">（展望露天風呂）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/43995/43995.jpg"
                  alt="ホテルＮｏ．１松山"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルＮｏ．１松山
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  大街道商店街より徒歩3分 / 勝山町電停徒歩約3分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  最上階に松山市街を見渡す展望大浴場・露天風呂とサウナを備えた大人気ホテル。繁華街大街道のすぐ裏手に位置し、夜の鯛めし居酒屋巡りや地酒バー探訪にこれ以上ない立地。夜景を眺めながらの露天風呂体験は格別です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・展望露天付</span>
                    <span className="text-2xl font-black text-rose-600">¥5,650</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F43995%2F43995.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: レフ松山市駅 by ベッセルホテルズ */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-md">★4.49極上高評価・サウナ付大浴場・松山市駅隣接</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.49</span>
                <span className="text-slate-400 text-xs font-normal">（超高評価デザイン宿）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/183045/183045.jpg"
                  alt="レフ松山市駅 by ベッセルホテルズ"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  レフ松山市駅　ｂｙ　ベッセルホテルズ
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  伊予鉄道「松山市駅」隣接（徒歩1分）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  クチコミ★4.49という松山トップクラスの圧倒的人気を誇る最新デザインホテル。本格サウナ付き大浴場を備え、愛媛の伝統工芸を取り入れた洗練された空間が広がります。松山市駅隣接で雨に濡れず到着でき、6,000円台〜で最高峰の満足度を提供します。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・サウナ大浴場付</span>
                    <span className="text-2xl font-black text-rose-600">¥6,650</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183045%2F183045.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-orange-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-orange-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の松山鯛めし＆城下町旅を格安に満喫するポイント
          </h2>
          <ul className="space-y-2 text-sm text-orange-100/90 leading-relaxed">
            <li>・大街道の「丸水」や「かどや」で味わう宇和島鯛めしと、炊き込みの松山鯛めしを食べ比べるのが贅沢の極み。</li>
            <li>・松山城へはロープウェイ街のカフェで愛媛みかんジェラートを味わいながら散策するのがおすすめルート。</li>
            <li>・大街道から路面電車（坊っちゃん列車）ですぐの道後温泉本館・飛鳥乃湯泉で、夕暮れ外湯巡りを気軽に楽しめます。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
