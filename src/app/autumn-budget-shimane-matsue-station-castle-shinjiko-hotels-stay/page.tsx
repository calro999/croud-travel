import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-shimane-matsue-station-castle-shinjiko-hotels-stay/",
  },

  title: '松江駅前：国宝松江城・宍道湖の夕日＆名物出雲そば・しじみ汁！5,000円台〜泊まれる格安ホテル5選',
  description: '千鳥城と親しまれる国宝・松江城の秋の紅葉と日本の夕日百選・宍道湖サンセット！挽きぐるみの香り高い割子そばや濃厚しじみ汁。JR山陰本線・松江駅周辺で1泊5,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
  openGraph: {
    title: "松江駅前：国宝松江城・宍道湖の夕日＆名物出雲そば・しじみ汁！5,000円台〜泊まれる格安ホテル5選",
    description: "千鳥城と親しまれる国宝・松江城の秋の紅葉と日本の夕日百選・宍道湖サンセット！挽きぐるみの香り高い割子そばや濃厚しじみ汁。JR山陰本線・松江駅周辺で1泊5,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "松江駅前：国宝松江城・宍道湖の夕日＆名物出雲そば・しじみ汁！5,000円台〜泊まれる格安ホテル5選",
    description: "千鳥城と親しまれる国宝・松江城の秋の紅葉と日本の夕日百選・宍道湖サンセット！挽きぐるみの香り高い割子そばや濃厚しじみ汁。JR山陰本線・松江駅周辺で1泊5,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
  }
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
          <span className="text-slate-800 font-medium">松江駅前 国宝松江城・宍道湖 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-stone-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>国宝松江城の錦秋＆宍道湖夕日・名物出雲割子そば</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「松江駅前」国宝松江城紅葉＆宍道湖の夕日！<br className="hidden sm:inline" />5,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            現存12天守の一つ、優美な千鳥破風が輝く国宝「松江城」。秋にはお堀端を取り囲む木々が鮮やかに色づき、堀川めぐりの遊覧船が水上を往き交います。赤く染まる宍道湖の感動的な日没、三段の漆器で味わう「出雲割子そば」、大粒の宍道湖産「しじみ汁」に舌鼓！松江駅周辺で5,000円台〜泊まれる優良ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            松江駅北口・南口に温泉大浴場付き＆最新ホテルが集結！浮いた予算でのどぐろや地酒を満喫
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            山陰観光の重要拠点・松江駅前は、近年大浴場付きホテルや最新ホテルが続々開業し注目度が上昇中。秋のシーズンでも1泊5,000円台〜6,000円台で快適な部屋を予約でき、浮いた宿泊費で名店「一文字家」の駅弁や松江市街の居酒屋でのどぐろ塩焼き・地酒「李白」を心ゆくまで堪能できます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">宍道湖畔に佇む千鳥の城：国宝 松江城（千鳥城）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">国宝五城・現存天守ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Matsue_Castle_Keep_Tower_20230617.jpg/1280px-Matsue_Castle_Keep_Tower_20230617.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="宍道湖畔に佇む千鳥の城：国宝 松江城（千鳥城）"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">堀尾吉晴公が築いた山陰唯一の現存天守・堀川遊覧船から見上げる紅葉</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                松江城（まつえじょう）は、島根県松江市殿町にある平山城。江戸時代以前に建造された現存12天守の一つで、国宝に指定されています。天守の千鳥破風が羽を広げた千鳥に似ていることから「千鳥城」とも呼ばれます。城を取り囲む堀川は当時の姿を色濃く残し、堀川遊覧船から眺める石垣と秋の紅葉は風情満点。最上階の望楼からは松江市街と宍道湖が一望できます。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-amber-700 font-semibold">JR松江駅北口よりレイクラインバス約10分（大手前下車）</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: グリーンリッチホテル松江駅前　人工温泉・二股湯の華 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅北口徒歩2分・人工温泉大浴場・★3.44</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.44</span>
                <span className="text-slate-400 text-xs font-normal">（4016件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/63616/63616.jpg"
                  alt="グリーンリッチホテル松江駅前　人工温泉・二股湯の華"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  グリーンリッチホテル松江駅前　人工温泉・二股湯の華
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  松江
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  JR松江駅北口から徒歩2分の好立地。館内には「二股湯の華」を使用した人工温泉大浴場を完備し、松江城散策の疲れを芯から癒せます。機能的な客室でビジネスにも一人旅にも便利です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥5,600</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F63616%2F63616.html"
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

        {/* 宿2: ダイワロイネットホテル松江駅前（新規開業） */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">2026年最新オープン・★4.51高評価・洗練ステイ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.51</span>
                <span className="text-slate-400 text-xs font-normal">（133件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/198873/198873.jpg"
                  alt="ダイワロイネットホテル松江駅前（新規開業）"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ダイワロイネットホテル松江駅前（新規開業）
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  松江
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  松江駅前に新築開業した最新ダイワロイネットホテル。洗練されたインテリアと最新の客室アメニティを備え、レビュー平均★4.51と抜群の満足度を獲得。快適性を重視する旅に最適です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥6,713</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F198873%2F198873.html"
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

        {/* 宿3: グリーンリッチホテル松江駅Ａｃｒｏｓｓ　人工温泉・二股湯の華 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前大通り・二股湯の華人工温泉大浴場・★4.12</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.12</span>
                <span className="text-slate-400 text-xs font-normal">（670件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/183247/183247.jpg"
                  alt="グリーンリッチホテル松江駅Ａｃｒｏｓｓ　人工温泉・二股湯の華"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  グリーンリッチホテル松江駅Ａｃｒｏｓｓ　人工温泉・二股湯の華
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  松江
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  松江駅前に位置するグリーンリッチホテルの新館「Across」。清潔感あふれる人工温泉大浴場とサウナを備え、★4.12の高評価。観光で歩き回った体を温泉でリフレッシュできます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥6,100</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183247%2F183247.html"
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

        {/* 宿4: スーパーホテル島根・松江駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩3分・健康朝食無料バイキング・★4.13</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.13</span>
                <span className="text-slate-400 text-xs font-normal">（536件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/161238/161238.jpg"
                  alt="スーパーホテル島根・松江駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  スーパーホテル島根・松江駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  松江
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  松江駅前から徒歩約3分。オーガニック野菜や焼き立てパンが楽しめる健康朝食が無料で提供され、コスパ良好。親切な接客と快眠環境が口コミでも評判です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥6,167</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161238%2F161238.html"
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

        {/* 宿5: 東横ＩＮＮ松江駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩1分・安心の無料朝食バイキング・★3.93</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.93</span>
                <span className="text-slate-400 text-xs font-normal">（1651件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/39764/39764.jpg"
                  alt="東横ＩＮＮ松江駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ松江駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  松江
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  松江駅を出てすぐ目の前の好ロケーション。荷物を持っての移動が最小限で済み、毎朝無料の朝食サービスが付く安心の定番宿。早朝の出雲大社方面への移動にも便利です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥5,565</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39764%2F39764.html"
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
    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 松江駅前：国宝松江城・宍道湖の夕日＆名物出雲そば・しじみ汁！5,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「松江駅前：国宝松江城・宍道湖の夕日＆名物出雲そば・しじみ汁！5,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 島根浜田ワシントンホテルプラザ</td>
                <td className="p-3 text-stone-600">島根県浜田市黒川町4177</td>
                <td className="p-3 text-stone-600">浜田駅周辺</td>
                <td className="p-3 text-stone-600">800円/浜田市営道分山立体駐車場利用</td>
                <td className="p-3 font-bold text-amber-600">★4.01（1233件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F431%2F431.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 松江エクセルホテル東急</td>
                <td className="p-3 text-stone-600">島根県松江市朝日町590</td>
                <td className="p-3 text-stone-600">松江駅周辺</td>
                <td className="p-3 text-stone-600">1泊1200円（15時から翌10時まで）。平面駐車場、ゲート自動開閉で40台収容。</td>
                <td className="p-3 font-bold text-amber-600">★4.35（1689件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,205〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F529%2F529.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 寛ぎの宿　輝雲荘</td>
                <td className="p-3 text-stone-600">島根県大田市温泉津町温泉津ロ202-1</td>
                <td className="p-3 text-stone-600">温泉津駅周辺</td>
                <td className="p-3 text-stone-600">有り　無料14台</td>
                <td className="p-3 font-bold text-amber-600">★4.42（910件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1417%2F1417.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテルサンヌーベ</td>
                <td className="p-3 text-stone-600">島根県出雲市西新町一丁目2548番地1</td>
                <td className="p-3 text-stone-600">西出雲駅周辺</td>
                <td className="p-3 text-stone-600">50台（無料）／予約不要／広々とした平面駐車場完備（大型車両収容可能）</td>
                <td className="p-3 font-bold text-amber-600">★4.21（1735件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,280〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1761%2F1761.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 松江しんじ湖温泉　ニューアーバンホテル本館・別館</td>
                <td className="p-3 text-stone-600">島根県松江市西茶町40-1</td>
                <td className="p-3 text-stone-600">松江駅周辺</td>
                <td className="p-3 text-stone-600">有り　８０台（普通車）　800円(税込）／泊</td>
                <td className="p-3 font-bold text-amber-600">★4.27（4576件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5005%2F5005.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">島根浜田ワシントンホテルプラザ</h3>
                  <span className="text-xs text-stone-400 ml-2">（しまねはまだ　わしんとんほてるぷらざ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/431/431_rm.jpg" alt="島根浜田ワシントンホテルプラザ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>(表示料金は、サービス料・消費税込み 高速インターネット接続可)</p>
                  <p><strong>【所在地・アクセス】</strong>〒 島根県浜田市黒川町4177 ／ 最寄り駅：浜田 ／ 交通案内：ＪＲ浜田駅より徒歩約３分。石見空港よりお車にて約５０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>800円/浜田市営道分山立体駐車場利用</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.08 ／ 立地 ★4 ／ 部屋 ★3.97 ／ 設備 ★3.88 ／ 風呂 ★3.89</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「和朝食がとても美味しかった和朝食が美味しかったですクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/431?revie…　2026-10-09 16:26:50投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">松江エクセルホテル東急</h3>
                  <span className="text-xs text-stone-400 ml-2">（まつええくせるほてるとうきゅう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,205〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/529/529_ky.jpg" alt="松江エクセルホテル東急 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全室ReFa完備☆松江駅から徒歩3分/出雲大社から車で60分/ビジネス・観光の拠点にアクセス抜群！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 島根県松江市朝日町590 ／ 最寄り駅：松江 ／ 交通案内：ＪＲ松江駅前、出雲空港より車で約30分／米子空港より車で約40分／八重垣神社まで車で15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1泊1200円（15時から翌10時まで）。平面駐車場、ゲート自動開閉で40台収容。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.35 ／ 立地 ★4.23 ／ 部屋 ★4.37 ／ 設備 ★4.29 ／ 風呂 ★4.26 ／ 食事 ★4.41</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「松江駅近くで便利、アメニティや朝食も満足松江・出雲旅行で一泊しました。松江駅から近く、とても便利です。今回女性専用フロアに宿泊しましたが、ベッドも広く、アメニティやドライヤーなどの設備もよ…　2026-10-06 07:27:59投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">寛ぎの宿　輝雲荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（くつろぎのやど　きうんそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1417/1417_heya.jpg" alt="寛ぎの宿　輝雲荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>1300年の歴史がある温泉の昔の趣を持つ温泉街にある真心込めたおもてなしで落ちつける宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 島根県大田市温泉津町温泉津ロ202-1 ／ 最寄り駅：温泉津 ／ 交通案内：ＪＲ温泉津駅下車</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　無料14台</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.49 ／ 立地 ★4.25 ／ 部屋 ★4.36 ／ 設備 ★4.23 ／ 風呂 ★4.43</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「サービスと食事内容に対し割高に感じた世界遺産登録の温泉街との事でしたが、街並みはともかく、宿は競合も少ないのか「サービス+食事」に比べて高額に感じました。 何度も緊急性の無い電話がかかってきた…　2026-10-05 08:03:16投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルサンヌーベ</h3>
                  <span className="text-xs text-stone-400 ml-2">（さんぬーべ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,280〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1761/1761_sgl.jpg" alt="ホテルサンヌーベ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>■アパ　パートナーホテルズ加盟店■JR西出雲駅〜徒歩１分！無料駐車場♪全室Wi-Fi＆洗浄機付トイレ</p>
                  <p><strong>【所在地・アクセス】</strong>〒 島根県出雲市西新町一丁目2548番地1 ／ 最寄り駅：西出雲 ／ 交通案内：「JR西出雲駅」より徒歩１分／山陰道「出雲IC」より車で５分／「出雲大社」より車で約２０分／「石見銀山」より車で約５０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>50台（無料）／予約不要／広々とした平面駐車場完備（大型車両収容可能）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.23 ／ 立地 ★4.09 ／ 部屋 ★4.2 ／ 設備 ★4.12 ／ 風呂 ★4.04 ／ 食事 ★4.06</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「そば御膳が美味しくコスパも最高そば御膳が美味しくコスパも良かったです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice…　2026-10-07 12:34:25投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">松江しんじ湖温泉　ニューアーバンホテル本館・別館</h3>
                  <span className="text-xs text-stone-400 ml-2">（まつえ　しんじこおんせん　にゅーあーばんほてる　ほんかん・べっかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5005/5005_twn.jpg" alt="松江しんじ湖温泉　ニューアーバンホテル本館・別館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★ルーフトップのSKYTOPTERRACEがOPEN！天然温泉浴場と地元食材の手作り朝食で癒しステイ</p>
                  <p><strong>【所在地・アクセス】</strong>〒 島根県松江市西茶町40-1 ／ 最寄り駅：松江 ／ 交通案内：★ＪＲ松江駅より『松江市営バス北循環線外回り』で７分須衛都久神社前下車下車徒歩１分　★私鉄松江しんじ湖温泉駅より徒歩５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　８０台（普通車）　800円(税込）／泊</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.35 ／ 立地 ★4.33 ／ 部屋 ★4.26 ／ 設備 ★4.19 ／ 風呂 ★4.15 ／ 食事 ★4.44</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「地元食材が豊富な朝食バイキングに大満足朝食バイキングが充実していました。味もたいへん良し、地元食材の品揃えも豊富。クチコミの詳細はこちらから　https://review.travel.rak…　2026-10-08 16:46:20投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！島根県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、島根県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1c/Haiden_of_Izumo-taisha-1.JPG/1280px-Haiden_of_Izumo-taisha-1.JPG?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="出雲大社（いづもたいしゃ）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">出雲大社（いづもたいしゃ）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本最古の歴史を誇る「縁結びの神様」大国主大神をお祀りする大社。神楽殿の巨大な大注連縄（長さ13.6m、重さ5.2トン）は圧巻の一言です。 出雲大社（いずもおおやしろ / いずもたいしゃ）は、島根県出雲市大社町杵築東にある神社。祭神は大国主大神。式内社（名神大）、出雲国一宮で旧社格は官幣大社。神社本庁の別表神社。宗教法人出雲大社教の宗祠。明治維新に伴う近代社格制度下において唯一「大社」を名乗る神社であった。出雲大社の社紋（神紋）は二重亀甲に剣花菱（にじゅうきっこうにけんはなびし）。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">国宝 松江城</h3>
                <p className="text-xs text-stone-600 leading-relaxed">全国に現存する12天守の一つであり国宝。黒塗りの重厚な天守（千鳥城）と、堀を屋根付き小船で巡る「堀川めぐり」で水の都・松江の風情を満喫できます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">足立美術館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">アメリカの日本庭園専門誌で20年以上連続「日本一の庭園」に選ばれている名園。横山大観らの日本画コレクションと生の額縁絵のような庭園美が極上です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">石見銀山遺跡（大森の町並み）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">かつて世界の銀の約3分の1を産出したとされる世界産業遺産。緑豊かな山々に残る坑道跡（間歩）や江戸時代の情緒が残る大森の町並みを自転車で散策できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 島根県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 島根県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
