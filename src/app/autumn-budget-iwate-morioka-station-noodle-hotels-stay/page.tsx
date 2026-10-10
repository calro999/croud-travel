import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '盛岡駅前：秋の盛岡三大麺＆盛岡城跡紅葉！3,000円台〜泊まれる格安ホテル5選',
  description: '盛岡冷麺・わんこそば・じゃじゃ麺の三大麺ハシゴ旅と、石垣を赤く染める盛岡城跡公園の錦秋！東北新幹線・盛岡駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
};

export default function AutumnBudgetMoriokaStationHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-red-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-red-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">盛岡駅前 三大麺・盛岡城跡 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-slate-950 via-red-950 to-stone-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold tracking-wider border border-red-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>名物盛岡三大麺グルメ＆城下町錦秋散策</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「盛岡駅前」秋の盛岡三大麺ハシゴ＆盛岡城跡紅葉！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-red-100/90 max-w-2xl mx-auto leading-relaxed">
            米ニューヨーク・タイムズ紙「行くべき場所」に選ばれ世界が注目する城下町・盛岡。ピリ辛牛骨スープの「盛岡冷麺」、モチモチ肉味噌の「盛岡じゃじゃ麺」、威勢の良い「わんこそば」の三大麺を食べ比べ！新幹線改札からすぐの好立地に3,000円台〜4,000円台で泊まれる優良宿を厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-red-600" />
            駅前・開運橋通りに高評価ホテルが集中！浮いた予算で前沢牛と三大麺を贅沢に
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            盛岡駅周辺は★4.2〜★4.5超のハイレベルなホテルがひしめく激戦区。清潔感あふれる最新ホテルや大浴場完備宿が1泊3,000円台〜4,000円台で見つかります。開運橋を渡ってレトロな喫茶店や南部鉄器の工房を巡り、夜はぴょんぴょん舎や白龍（パイロン）のハシゴを満喫できます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">陸奥名城ガイド：盛岡城（不来方城・盛岡城跡公園）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/171103_Morioka_Castle_Morioka_Iwate_pref_Japan02bs.jpg/1280px-171103_Morioka_Castle_Morioka_Iwate_pref_Japan02bs.jpg"
                alt="盛岡城跡公園の紅葉と石垣"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">南部藩主の居城・白亜の花崗岩石垣を彩るモミジの紅葉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                盛岡城（もりおかじょう）は、岩手県盛岡市にあった南部氏20万石の居城。国の史跡・日本100名城に指定されています。東北三名城の一つに数えられ、白っぽい花崗岩を美しく積み上げた高石垣が特徴。秋にはモミジやカエデが鮮やかに色づき、石垣とのコントラストが詩情を誘います。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-red-700 font-semibold">盛岡駅より循環バス「でんでんむし」で約6分</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: ホテルグローバルビュー盛岡 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-red-100 text-red-800 text-xs font-bold rounded-md">破格の3,400円台〜・大浴場＆サウナ完備</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.02</span>
                <span className="text-slate-400 text-xs font-normal">（大浴場＆サウナ）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/153340/153340.jpg"
                  alt="ホテルグローバルビュー盛岡"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルグローバルビュー盛岡
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR盛岡駅より徒歩約3分 / 開運橋通り至近
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  男性専用サウナ付き大浴場と女性用大浴場を備え、旅の疲れを心地よく癒やせます。1泊3,400円台〜というリーズナブルな価格ながら、清潔なベッドと機能的な客室空間を提供。駅前広場や飲食店街へのアクセスも抜群のコスパ宿です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・大浴場付</span>
                    <span className="text-2xl font-black text-rose-600">¥3,450</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153340%2F153340.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-red-600 to-stone-700 hover:from-red-500 hover:to-stone-600 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: アパホテル〈盛岡駅前〉 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">★4.29・盛岡駅徒歩1分・大型テレビ完備</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.29</span>
                <span className="text-slate-400 text-xs font-normal">（駅至近＆高評価）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/196889/196889.jpg"
                  alt="アパホテル〈盛岡駅前〉"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  アパホテル〈盛岡駅前〉
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR盛岡駅南口より徒歩1分の好立地
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  改札を出てすぐの絶好ロケーション。オリジナル快眠ベッド「Cloud fit」や遮光カーテン、大型液晶テレビを標準装備し、クチコミ★4.29を獲得。駅ビルフェザンのお土産街や冷麺店巡りにもベストな拠点です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥3,780</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196889%2F196889.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-red-600 to-stone-700 hover:from-red-500 hover:to-stone-600 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: リッチモンドホテル盛岡駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">★4.56・駅前広場正面・シモンズベッド導入</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.56</span>
                <span className="text-slate-400 text-xs font-normal">（超高評価ホテル）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/181404/181404.jpg"
                  alt="リッチモンドホテル盛岡駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  リッチモンドホテル盛岡駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR盛岡駅東口より徒歩2分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  楽天トラベルクチコミ★4.56を誇る、盛岡駅前屈指の大人気ホテル。洗練されたロビー、広々としたデスク、シモンズ社製ベッドと清潔なバスルームが好評。朝食には郷土料理ひっつみや瓶ドン風の海鮮が並び、4,000円台前半とは思えない上質ステイが叶います。
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
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181404%2F181404.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-red-600 to-stone-700 hover:from-red-500 hover:to-stone-600 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: ダイワロイネットホテル盛岡駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">★4.51・セパレートバス・駅前徒歩3分</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.51</span>
                <span className="text-slate-400 text-xs font-normal">（バス・トイレ別）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/183248/183248.jpg"
                  alt="ダイワロイネットホテル盛岡駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ダイワロイネットホテル盛岡駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR盛岡駅東口より徒歩3分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  クチコミ★4.51の高評価。全室バス・トイレ別のセパレートタイプを採用し、洗い場付きのゆったりしたバスタブで温まれます。シックで落ち着いたインテリアと充実のアメニティで、旅の疲れを徹底的にほぐせる上質宿です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥4,325</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183248%2F183248.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-red-600 to-stone-700 hover:from-red-500 hover:to-stone-600 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: 東横ＩＮＮ盛岡駅南口駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-stone-100 text-stone-800 text-xs font-bold rounded-md">無料手作り朝食バイキング・駅南口すぐ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.00</span>
                <span className="text-slate-400 text-xs font-normal">（無料朝食付）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/78213/78213.jpg"
                  alt="東横ＩＮＮ盛岡駅南口駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ盛岡駅南口駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR盛岡駅南口より徒歩3分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  手作りおにぎりやお惣菜、お味噌汁が付いた無料朝食バイキングが嬉しい定番ホテル。清潔な客室と明るい照明、快眠ベッドを備え、一人旅からビジネスまで安心のクオリティ。荷物を預けて身軽に盛岡三大麺巡りへ出発できます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込</span>
                    <span className="text-2xl font-black text-rose-600">¥4,830</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78213%2F78213.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-red-600 to-stone-700 hover:from-red-500 hover:to-stone-600 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-red-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-red-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の盛岡三大麺＆城下町旅を格安に遊び尽くすポイント
          </h2>
          <ul className="space-y-2 text-sm text-red-100/90 leading-relaxed">
            <li>・駅前「盛楼閣」や「ぴょんぴょん舎」で味わう極上盛岡冷麺と、白龍（パイロン）の元祖じゃじゃ麺＋ちーたんたんは必食。</li>
            <li>・盛岡城跡公園（岩手公園）の花崗岩石垣を彩るモミジの紅葉は、東北随一の美しさを誇る秋の絶景スポット。</li>
            <li>・城下町特有のレトロな洋館（旧岩手銀行赤レンガ館）や中津川の鮭の遡上など、秋ならではの風情散歩も楽しめます。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
