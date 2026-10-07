import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '【小樽】秋の味覚シャコ・秋鮭＆運河ガス燈！3,000円台〜泊まれる格安ホテル5選',
  description: '秋限定の小樽名物・大ぶりシャコや旬の秋鮭、ライトアップされた運河のガス燈散策を満喫！小樽駅・運河周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
};

export default function AutumnBudgetOtaruHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-teal-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-teal-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">小樽 旬シャコ・運河ガス燈 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-slate-950 via-cyan-950 to-blue-950 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold tracking-wider border border-cyan-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>秋の港町海鮮グルメ＆レトロ運河夜景</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">
            【小樽】旬の秋シャコ・生いくら＆運河ガス燈の夕景！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選
          </h1>
          <p className="text-sm md:text-base text-cyan-100/90 max-w-2xl mx-auto leading-relaxed">
            秋の小樽は、小樽前浜で水揚げされる特大の「秋シャコ」や筋子からほぐしたばかりの自家製生いくらが旬を迎える最高の味覚シーズン。夕暮れどきにガス燈が灯る小樽運河の石造り倉庫群を散策し、天然温泉大浴場付きのホテルに3,000円台〜で泊まれる人気宿を厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-cyan-600" />
            1泊3,000円台〜の運河沿い・駅近宿！浮いた予算でお寿司・海鮮丼三昧
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            観光都市として名高い小樽ですが、秋は平日や早割プランを中心に3,000円台〜5,000円前後で泊まれるハイクオリティ宿が狙い目。展望露天風呂や運河一望ラウンジを備えたホテルも格安で予約でき、浮いた宿泊予算で寿司屋通りの極上握りや三角市場の海鮮丼を心ゆくまで堪能できます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">小樽歴史散策ガイド：小樽運河（石造倉庫群とガス燈）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="grid md:grid-cols-12 gap-6 p-6 items-center">
            <div className="md:col-span-5 relative h-56 md:h-64 rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/Otaru_Hokkaido_canal.JPG/1280px-Otaru_Hokkaido_canal.JPG"
                alt="小樽運河と石造倉庫群"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">北海道開拓の玄関口・緩やかに湾曲する歴史の運河</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                小樽運河（おたるうんが）は、1923年（大正12年）に完成した運河。海岸の沖合埋立て方式で築かれたため、直線ではなく緩やかに湾曲しているのが特徴です。文化庁選定日本遺産「北海道の心臓と呼ばれたまち・小樽」を構成し、秋の澄んだ空気の中でガス燈が照らす石造倉庫群の水面反射が旅情を誘います。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-cyan-700 font-semibold">小樽駅より中央通りを直進徒歩約8分</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: コージーイン小樽 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-md">★4.27高評価・1泊3,100円台〜・貸切風呂あり</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.27</span>
                <span className="text-slate-400 text-xs font-normal">（クチコミ高評価）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/178636/178636.jpg"
                  alt="コージーイン小樽"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  コージーイン小樽　Ｃｏｚｙ　Ｉｎｎ　ＯＴＡＲＵ
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR南小樽駅より徒歩5分 / オルゴール堂・メルヘン交差点徒歩圏
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  清潔感あふれるモダンな客室と、旅の疲れをプライベートに癒やせる無料の貸切風呂が嬉しい宿。メルヘン交差点やルタオ本店にも近く、スイーツ巡りや秋の散策拠点に最適です。3,000円台前半のリーズナブルさで高いクチコミ評価を獲得しています。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥3,105</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178636%2F178636.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: ホテル・トリフィート小樽運河 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">銭湯風天然大浴場・小樽運河徒歩3分</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.06</span>
                <span className="text-slate-400 text-xs font-normal">（大浴場完備）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/166148/166148.jpg"
                  alt="ホテル・トリフィート小樽運河"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテル・トリフィート小樽運河
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR小樽駅より徒歩7分 / 小樽運河まで徒歩3分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  小樽のレトロな風情を再現した銭湯風の大浴場を備え、壁画を眺めながら手足を伸ばして温まれます。運河へも徒歩3分という最高の立地で、夜のガス燈散策へ気軽に出かけられます。デザイン性の高い内装と充実したアメニティも魅力。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・大浴場付</span>
                    <span className="text-2xl font-black text-rose-600">¥3,280</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166148%2F166148.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: ホテルノルド小樽 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">★4.22・小樽運河の目の前・石造りクラシック</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.22</span>
                <span className="text-slate-400 text-xs font-normal">（運河目の前）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/3119/3119.jpg"
                  alt="ホテルノルド小樽"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルノルド小樽
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR小樽駅より徒歩7分 / 小樽運河正面
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  小樽運河を正面に望む大理石造りのクラシックホテル。最上階のドーム展望ラウンジからは運河や小樽港の大パノラマを一望できます。ヨーロッパの古城を思わせる吹き抜けの中庭や重厚な客室設計ながら、オフシーズン・早割では3,000円台〜で泊まれる破格のコスパを誇ります。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥3,380</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3119%2F3119.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: ホテルソニア小樽 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-md">★4.20・最上階天然温泉露天風呂・運河ビュー</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.20</span>
                <span className="text-slate-400 text-xs font-normal">（展望天然温泉）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/5170/5170.jpg"
                  alt="ホテルソニア小樽"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルソニア小樽
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR小樽駅より徒歩8分 / 小樽運河沿い
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  小樽運河沿いに佇む人気ホテル。最上階には運河と小樽港を見晴らす天然温泉の展望大浴場と露天風呂を完備。英国アンティーク調の上質な館内空間で、温泉に浸かりながら旅の余韻に浸ることができます。4,000円台〜で天然温泉付き運河ステイが手に入ります。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・天然温泉付</span>
                    <span className="text-2xl font-black text-rose-600">¥4,140</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5170%2F5170.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: 小樽グランベルホテル */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-md">★4.40・インフィニティ露天風呂＆デザイナーズ空間</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.40</span>
                <span className="text-slate-400 text-xs font-normal">（絶景インフィニティ温泉）</span>
              </div>
            </div>
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-5 relative h-52 md:h-auto rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/196182/196182.jpg"
                  alt="小樽グランベルホテル"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  小樽グランベルホテル
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR南小樽駅より徒歩7分 / 堺町通り商店街至近
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  2025年オープンの最新デザイナーズホテル。最上階には空と海に溶け込むようなインフィニティ露天風呂とサウナを備え、クチコミ★4.40の高評価を誇ります。洗練されたインテリアと快適なベッドで、ワンランク上の小樽滞在を5,000円台で体験できます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり・インフィニティ温泉付</span>
                    <span className="text-2xl font-black text-rose-600">¥5,475</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/g0190dd6.2qbwy9f5.g0190dd6.2qbwzc3e/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196182%2F196182.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-cyan-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-cyan-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の小樽海鮮＆運河旅を格安に遊び尽くすポイント
          </h2>
          <ul className="space-y-2 text-sm text-cyan-100/90 leading-relaxed">
            <li>・秋の小樽シャコは身入りが良く、卵（カツブシ）を持ったメスと旨味の濃いオスを食べ比べできる名物。</li>
            <li>・早朝は小樽駅横の「三角市場」で獲れたて秋鮭や生いくら丼を、夜は寿司屋通りの老舗握りを満喫。</li>
            <li>・日没後はガス燈が点灯し、観光客が少し落ち着いた夜の小樽運河沿いを静かに散策するのが通の楽しみ方。</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
