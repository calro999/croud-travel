import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-ehime-matsuyama-okaido-taimeshi-castle-hotels-stay/",
  },

  title: '松山・大街道：宇和島鯛めし＆現存天守・松山城！2,000円台〜泊まれる格安ホテル5選',
  description: '新鮮な真鯛と特製タレ卵黄が絶品の宇和島鯛めし、現存12天守の松山城紅葉！道後温泉への路面電車もすぐの大街道・松山市駅周辺で1泊2,000円台〜泊まれる超高コスパ格安宿厳選5選。',
  openGraph: {
    title: "松山・大街道：宇和島鯛めし＆現存天守・松山城！2,000円台〜泊まれる格安ホテル5選",
    description: "新鮮な真鯛と特製タレ卵黄が絶品の宇和島鯛めし、現存12天守の松山城紅葉！道後温泉への路面電車もすぐの大街道・松山市駅周辺で1泊2,000円台〜泊まれる超高コスパ格安宿厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "松山・大街道：宇和島鯛めし＆現存天守・松山城！2,000円台〜泊まれる格安ホテル5選",
    description: "新鮮な真鯛と特製タレ卵黄が絶品の宇和島鯛めし、現存12天守の松山城紅葉！道後温泉への路面電車もすぐの大街道・松山市駅周辺で1泊2,000円台〜泊まれる超高コスパ格安宿厳選5選。",
  }
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
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F164470%2F164470.html"
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
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20374%2F20374.html"
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
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F199177%2F199177.html"
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
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F43995%2F43995.html"
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
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183045%2F183045.html"
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
    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 松山・大街道：宇和島鯛めし＆現存天守・松山城！2,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「松山・大街道：宇和島鯛めし＆現存天守・松山城！2,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ホテル勝山</td>
                <td className="p-3 text-stone-600">愛媛県松山市勝山町1-11-1</td>
                <td className="p-3 text-stone-600">勝山町駅より徒歩にて約3分</td>
                <td className="p-3 text-stone-600">【駐車場】50台1000円(税込/泊)先着順【駐輪場】500円(税込/泊)　※旧館セカンドにてご案内</td>
                <td className="p-3 font-bold text-amber-600">★3.89（1284件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F164470%2F164470.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. レフ松山市駅　ｂｙ　ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接）</td>
                <td className="p-3 text-stone-600">愛媛県松山市湊町5-2-2</td>
                <td className="p-3 text-stone-600">松山市駅周辺</td>
                <td className="p-3 text-stone-600">伊予鉄市駅西駐車場（レフ松山市駅から徒歩2分）（自走式立体駐車場 / 先着順）1,000円/泊</td>
                <td className="p-3 font-bold text-amber-600">★4.49（1125件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,570〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183045%2F183045.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. リーガロイヤルホテル新居浜</td>
                <td className="p-3 text-stone-600">愛媛県新居浜市前田町6-9</td>
                <td className="p-3 text-stone-600">新居浜駅周辺</td>
                <td className="p-3 text-stone-600">200台収容の駐車場【無料】バス駐車場についてはお問い合わせください。</td>
                <td className="p-3 font-bold text-amber-600">★4.13（1358件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,914〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F110%2F110.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテルカジワラ</td>
                <td className="p-3 text-stone-600">愛媛県松山市大手町2-9-10</td>
                <td className="p-3 text-stone-600">松山（愛媛）駅周辺</td>
                <td className="p-3 text-stone-600">事前予約が必要です。普通車１泊 800円〜　※満車時は近隣コインPのご紹介となります。</td>
                <td className="p-3 font-bold text-amber-600">★3.83（1485件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,650〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191%2F191.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 道後温泉　ホテルパティオ・ドウゴ</td>
                <td className="p-3 text-stone-600">愛媛県松山市道後湯之町20-12</td>
                <td className="p-3 text-stone-600">松山空港駅周辺</td>
                <td className="p-3 text-stone-600">■先着順（予約不可）隣接の立体と屋外平面（かなり急な坂の上）約50台。1泊1台に付き800円。</td>
                <td className="p-3 font-bold text-amber-600">★4.4（2020件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F226%2F226.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル勝山</h3>
                  <span className="text-xs text-stone-400 ml-2">（かつやま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/164470/164470_kan1.jpg" alt="ホテル勝山 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>コンパクトな館内で快適に◆2017年OPEN「新館プレミア」とお手頃な「旧館セカンド」から選べる客室</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市勝山町1-11-1 ／ 最寄り駅：主要駅 ／ 交通案内：勝山町駅より徒歩にて約3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>【駐車場】50台1000円(税込/泊)先着順【駐輪場】500円(税込/泊)　※旧館セカンドにてご案内</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.91 ／ 立地 ★3.94 ／ 部屋 ★3.84 ／ 設備 ★3.79 ／ 風呂 ★3.9 ／ 食事 ★3.85</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「自動販売機に酒類がなくて残念自動販売機に酒類がなかったクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/164470?…　2026-10-08 16:22:34投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">レフ松山市駅　ｂｙ　ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接）</h3>
                  <span className="text-xs text-stone-400 ml-2">（れふまつやましえき　ばい　べっせるほてるず）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,570〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/183045/183045.jpg" alt="レフ松山市駅　ｂｙ　ベッセルホテルズ｜ＲＥＦ松山市駅｜サウナ付大浴場（松山市駅隣接） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>サウナ付大浴場有！伊予鉄「松山市駅」横。道後温泉へ約20分、松山市内の観光やビジネス利用に便利。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市湊町5-2-2 ／ 最寄り駅：松山市 ／ 交通案内：伊予鉄「松山市駅」から徒歩1分■松山空港から約24分 ■松山自動車道松山ICから車で約15分■松山港から約26分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>伊予鉄市駅西駐車場（レフ松山市駅から徒歩2分）（自走式立体駐車場 / 先着順）1,000円/泊</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.47 ／ 立地 ★4.57 ／ 部屋 ★4.5 ／ 設備 ★4.46 ／ 風呂 ★4.46 ／ 食事 ★4.7</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「みかんジュースとソフトクリームに大満足朝ごはんのみかんジュースのに比べが嬉しい。また『ウエルカムソフトクリーム』は初。普段食べないのにおかわりしちゃった。クチコミの詳細はこちらから　https…　2026-10-01 10:44:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">リーガロイヤルホテル新居浜</h3>
                  <span className="text-xs text-stone-400 ml-2">（りーがろいやるほてる　にいはま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,914〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/110/110_heya.jpg" alt="リーガロイヤルホテル新居浜 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>癒しの空間をコンセプトにした新居浜随一の広さを誇る客室でお客様をお迎えいたします</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県新居浜市前田町6-9 ／ 最寄り駅：新居浜 ／ 交通案内：ＪＲ「新居浜駅」よりタクシーで約10分、新居浜ICより２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>200台収容の駐車場【無料】バス駐車場についてはお問い合わせください。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.12 ／ 立地 ★3.98 ／ 部屋 ★4.13 ／ 設備 ★3.99 ／ 風呂 ★3.94</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「窓の汚れと備え付けの紙コップにがっかり窓の内側が手の跡だらけで汚かった。窓拭きしたことがないという感じでした。洗面所のコップが紙コップなのはまだしも、部屋のグラスやマグカップもなく、紙コップと…　2026-10-01 12:41:59投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルカジワラ</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるかじわら）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,650〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/191/191_sgl.jpg" alt="ホテルカジワラ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2020年2月新館（東館）オープン♪　JR松山駅前</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市大手町2-9-10 ／ 最寄り駅：松山（愛媛） ／ 交通案内：ＪＲ松山駅から徒歩5分、松山空港から車で約15分、松山観光港から車で約20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>事前予約が必要です。普通車１泊 800円〜　※満車時は近隣コインPのご紹介となります。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.86 ／ 立地 ★3.91 ／ 部屋 ★3.81 ／ 設備 ★3.72 ／ 風呂 ★3.63 ／ 食事 ★3.72</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「JR松山駅から徒歩圏内、静かでリーズナブル松山空港からバスで、JR松山駅まで行き、そこから歩いて2~3分と便利なところでした。部屋は古い感じでしたが、そんなに汚れもなく問題なく過ごせます。…　2026-10-05 17:01:14投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">道後温泉　ホテルパティオ・ドウゴ</h3>
                  <span className="text-xs text-stone-400 ml-2">（どうごおんせん　ほてるぱてぃお・どうご）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/226/226_sgl.jpg" alt="道後温泉　ホテルパティオ・ドウゴ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>道後温泉本館に一番近いヨーロピアンホテル　”HOTEL PATIO DOGO”</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市道後湯之町20-12 ／ 最寄り駅：松山空港 ／ 交通案内：先ずは道後温泉本館を目指して下さい。ホテルは道後温泉本館の北側真向かい。温泉とホテルの間にある石畳の道へお入り下さい。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>■先着順（予約不可）隣接の立体と屋外平面（かなり急な坂の上）約50台。1泊1台に付き800円。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.4 ／ 立地 ★4.47 ／ 部屋 ★4.35 ／ 設備 ★4.26 ／ 風呂 ★4.28 ／ 食事 ★3.91</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「建物は古いが掃除が行き届きリラックスできたホテルは古いが、掃除が行き届いていて良かったリラックス出来たクチコミの詳細はこちらから　https://review.travel.rakuten…　2026-10-09 09:38:16投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！愛媛県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、愛媛県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/D%C5%8Dgo_Onsen.jpg/1280px-D%C5%8Dgo_Onsen.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="道後温泉本館" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">道後温泉本館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本最古の温泉の一つとされる道後温泉のシンボル。木造三層楼の重厚な和風建築は国指定重要文化財であり、『千と千尋の神隠し』のモデルとも言われています。 道後温泉（どうごおんせん）は、四国・愛媛県松山市（旧国伊予国）に湧出する温泉。有馬温泉や白浜温泉と並ぶ日本三古湯の一つである。その存在は古代から知られ、万葉集巻一にも見える。なおかつてはこの周辺が温泉郡（おんせんぐん）（湯郡）と呼ばれていたが、これはこの温泉にちなむ地名である。 夏目漱石の小説『坊つちやん』（1905年）にも描かれ、愛媛県の代表的な観光地とな…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">松山城</h3>
                <p className="text-xs text-stone-600 leading-relaxed">松山市の中心・勝山山頂に建つ現存12天守の一つ。ロープウェイやリフトで登ることができ、天守からは瀬戸内海と松山平野の360度パノラマが見渡せます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">しまなみ海道（来島海峡大橋）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">愛媛県今治市と広島県尾道市を結ぶ海上架橋ルート。「サイクリストの聖地」として世界中から絶賛され、世界初の3連吊橋から瀬戸内海の多島美を一望できます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">佐田岬（さだみさき）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本一細長い佐田岬半島。風力発電の風車が並ぶドライブコースを抜け、岬の先端の白い灯台からは豊予海峡を挟んで九州・大分県を望むダイナミックな景色です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 愛媛県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 愛媛県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
