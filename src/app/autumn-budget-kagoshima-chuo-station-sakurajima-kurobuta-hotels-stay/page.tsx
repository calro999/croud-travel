import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-kagoshima-chuo-station-sakurajima-kurobuta-hotels-stay/",
  },

  title: '鹿児島中央駅前：桜島絶景庭園・仙巌園＆名物黒豚しゃぶしゃぶ！2,000円台〜泊まれる格安ホテル5選',
  description: '錦江湾と桜島を借景にする国指定名勝・仙巌園の秋の菊まつり！極上の鹿児島黒豚しゃぶしゃぶや白くまアイス。九州新幹線・鹿児島中央駅周辺で1泊2,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
  openGraph: {
    title: "鹿児島中央駅前：桜島絶景庭園・仙巌園＆名物黒豚しゃぶしゃぶ！2,000円台〜泊まれる格安ホテル5選",
    description: "錦江湾と桜島を借景にする国指定名勝・仙巌園の秋の菊まつり！極上の鹿児島黒豚しゃぶしゃぶや白くまアイス。九州新幹線・鹿児島中央駅周辺で1泊2,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "鹿児島中央駅前：桜島絶景庭園・仙巌園＆名物黒豚しゃぶしゃぶ！2,000円台〜泊まれる格安ホテル5選",
    description: "錦江湾と桜島を借景にする国指定名勝・仙巌園の秋の菊まつり！極上の鹿児島黒豚しゃぶしゃぶや白くまアイス。九州新幹線・鹿児島中央駅周辺で1泊2,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
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
          <span className="text-slate-800 font-medium">鹿児島中央駅前 仙巌園・黒豚 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-stone-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>名勝仙巌園の桜島大パノラマ＆極上鹿児島黒豚しゃぶしゃぶ</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「鹿児島中央駅前」仙巌園の秋景＆極上黒豚！<br className="hidden sm:inline" />2,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            島津家歴代が愛した名勝庭園「仙巌園（磯庭園）」。錦江湾を池に、雄大な桜島を築山に見立てた壮大な借景庭園に咲き誇る秋の菊花。きめ細やかな脂と甘みが溶け出す本場「かごしま黒豚しゃぶしゃぶ」や、名物かき氷「白くま」に舌鼓！鹿児島中央駅周辺で2,000円台〜泊まれる優良ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            九州新幹線終着駅・鹿児島中央駅周辺に格安宿が集結！浮いた予算で黒豚とんかつや本格芋焼酎を満喫
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            九州新幹線の南のターミナル・鹿児島中央駅周辺は、駅直結商業施設「アミュプラザ鹿児島」や観覧車が輝く賑やかなエリア。最新スマートホテルや駅前ホテルが秋の平日なら1泊2,000円台〜4,000円台で予約可能。浮いた旅費で天文館の有名店での黒豚しゃぶしゃぶコースや、薩摩の本格芋焼酎の飲み比べを心ゆくまで堪能できます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">桜島を築山に見立てた雄大な名園：仙巌園（磯庭園）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">薩摩島津家別邸・国指定名勝</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Isoteien-sakurajima2.jpg/1280px-Isoteien-sakurajima2.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="桜島を築山に見立てた雄大な名園：仙巌園（磯庭園）"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">第19代島津光久が築いた大名庭園・秋の伝統「菊まつり」と桜島の絶景</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                仙巌園（せんがんえん）は、鹿児島県鹿児島市吉野町にある薩摩藩主・島津氏の別邸跡で、国の名勝に指定されています。錦江湾を池、眼前にそびえる活火山・桜島を築山に見立てた雄大な借景が特徴。敷地内には反射炉跡など世界文化遺産の構成資産も残ります。秋には色鮮やかな菊の花で彩られる「菊まつり」が開催され、秋晴れの空に映える桜島の雄姿とともに多くの観光客を魅了します。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-amber-700 font-semibold">JR鹿児島中央駅東口よりカゴシマシティビューバス約30分（仙巌園前下車）</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: ＨＯＴＥＬ　ＮＯＩＲ（ホテルノイル）鹿児島中央駅 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">驚きの最安2,500円〜・駅西口徒歩3分・スタイリッシュ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.17</span>
                <span className="text-slate-400 text-xs font-normal">（541件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/189101/189101.jpg"
                  alt="ＨＯＴＥＬ　ＮＯＩＲ（ホテルノイル）鹿児島中央駅"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ＨＯＴＥＬ　ＮＯＩＲ（ホテルノイル）鹿児島中央駅
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  鹿児島中央
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  鹿児島中央駅西口から徒歩3分の好立地。1名1泊2,500円〜という破格の料金ながら、シックで洗練されたデザイナーズ客室を提供。宿泊費を抑えて黒豚や地酒に予算を使いたい旅行者に大人気です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥2,500</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F189101%2F189101.html"
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

        {/* 宿2: アパホテル〈鹿児島中央駅前西口〉 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">最安2,900円〜・★4.41高評価・駅前快眠ホテル</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.29</span>
                <span className="text-slate-400 text-xs font-normal">（344件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/192839/192839.jpg"
                  alt="アパホテル〈鹿児島中央駅前西口〉"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  アパホテル〈鹿児島中央駅前西口〉
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  鹿児島中央
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  鹿児島中央駅から徒歩圏内。快眠をテーマにしたこだわりの寝具と静かな客室環境で、レビュー★4.41の高評価を獲得。コスパと快適性を高いレベルで両立させています。
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
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F192839%2F192839.html"
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

        {/* 宿3: アパホテル〈鹿児島中央駅前〉 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅西口徒歩1分・★4.29・アパの最新安心クオリティ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.25</span>
                <span className="text-slate-400 text-xs font-normal">（1377件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/144497/144497.jpg"
                  alt="アパホテル〈鹿児島中央駅前〉"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  アパホテル〈鹿児島中央駅前〉
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  鹿児島中央
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  鹿児島中央駅西口を出て徒歩1分のアパホテル。新幹線での到着後すぐに荷物を置いて観光へ出発可能。大型液晶テレビや快眠ベッドを備え、快適な夜を過ごせます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥4,230</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144497%2F144497.html"
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

        {/* 宿4: 東横ＩＮＮ鹿児島中央駅東口 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅東口徒歩1分・★4.25・大通り沿い好立地</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.19</span>
                <span className="text-slate-400 text-xs font-normal">（646件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/108378/108378.jpg"
                  alt="東横ＩＮＮ鹿児島中央駅東口"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ鹿児島中央駅東口
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  鹿児島中央
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  鹿児島中央駅東口から徒歩1分。路面電車乗り場や駅前バスターミナルが目の前にあり、天文館や桜島フェリー乗り場へのアクセスが極めてスムーズです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥4,988</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108378%2F108378.html"
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

        {/* 宿5: ネム～ル　鹿児島中央駅 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅東口徒歩2分・安心の無料朝食バイキング・★4.19</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.41</span>
                <span className="text-slate-400 text-xs font-normal">（374件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/172024/172024.jpg"
                  alt="ネム～ル　鹿児島中央駅"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ネム～ル　鹿児島中央駅
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  鹿児島中央
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  鹿児島中央駅東口から徒歩2分。機能的な客室と、毎朝無料で提供されるバラエティ豊かな朝食バイキングが魅力。ビジネスから秋の南九州観光まで幅広くフィットします。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥2,900</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172024%2F172024.html"
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
              📊 鹿児島中央駅前：桜島絶景庭園・仙巌園＆名物黒豚しゃぶしゃぶ！2,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「鹿児島中央駅前：桜島絶景庭園・仙巌園＆名物黒豚しゃぶしゃぶ！2,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ＨＯＴＥＬ　ＮＯＩＲ（ホテルノイル）鹿児島中央駅</td>
                <td className="p-3 text-stone-600">鹿児島県鹿児島市中央町24-16</td>
                <td className="p-3 text-stone-600">鹿児島中央駅周辺</td>
                <td className="p-3 text-stone-600">有り・先着順(1500円) ファミリーカータイプ収納／立体18台、平面3台（障碍者用含む）</td>
                <td className="p-3 font-bold text-amber-600">★4.14（491件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F189101%2F189101.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. アパホテル〈鹿児島中央駅前西口〉</td>
                <td className="p-3 text-stone-600">鹿児島県鹿児島市西田2-20-14</td>
                <td className="p-3 text-stone-600">鹿児島中央駅周辺</td>
                <td className="p-3 text-stone-600">ホテルから徒歩1分「NEO西田パーキング」122台（先着順）1泊最大1,100円</td>
                <td className="p-3 font-bold text-amber-600">★4.27（320件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,960〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F192839%2F192839.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. アパホテル〈鹿児島中央駅前〉</td>
                <td className="p-3 text-stone-600">鹿児島県鹿児島市西田2-21-22</td>
                <td className="p-3 text-stone-600">鹿児島中央駅周辺</td>
                <td className="p-3 text-stone-600">立体駐車場58台完備。15：00～翌11：00まで1100円、先着順。高さ制限あり。</td>
                <td className="p-3 font-bold text-amber-600">★4.25（1321件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,230〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144497%2F144497.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 東横ＩＮＮ鹿児島中央駅東口</td>
                <td className="p-3 text-stone-600">鹿児島県鹿児島市中央町26-25</td>
                <td className="p-3 text-stone-600">鹿児島中央駅周辺</td>
                <td className="p-3 text-stone-600">立体60台(高さ２M幅１．８５Mまで）1,000円/泊 平置駐車場のみ予約制　1,000円/泊</td>
                <td className="p-3 font-bold text-amber-600">★4.26（630件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,638〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108378%2F108378.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ネム〜ル　鹿児島中央駅</td>
                <td className="p-3 text-stone-600">鹿児島県鹿児島市西田2-19-3</td>
                <td className="p-3 text-stone-600">鹿児島中央駅周辺</td>
                <td className="p-3 text-stone-600">無し</td>
                <td className="p-3 font-bold text-amber-600">★4.36（376件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172024%2F172024.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＨＯＴＥＬ　ＮＯＩＲ（ホテルノイル）鹿児島中央駅</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるのいるかごしまちゅうおうえき）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/189101/189101.jpg" alt="ＨＯＴＥＬ　ＮＯＩＲ（ホテルノイル）鹿児島中央駅 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【2024年1月15日グランドオープン！】鹿児島中央駅より徒歩4分！チェックアウト11時!</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鹿児島県鹿児島市中央町24-16 ／ 最寄り駅：鹿児島中央 ／ 交通案内：鹿児島中央駅(東口／桜島口)より徒歩で約4分。Li-Kaから一番街経由で駅直結</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り・先着順(1500円) ファミリーカータイプ収納／立体18台、平面3台（障碍者用含む）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で移動が楽、ベッドも広くて快適8月12日から14日まで利用しました。チェックインもチェックアウトもとてもスムーズでしたとてもキレイなホテルでベッドも広くとても寝やすかったです。鹿児…　2026-08-18 20:52:36投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">アパホテル〈鹿児島中央駅前西口〉</h3>
                  <span className="text-xs text-stone-400 ml-2">（あぱほてる〈かごしまちゅうおうえきまえにしぐち〉）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,960〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/192839/192839.jpg" alt="アパホテル〈鹿児島中央駅前西口〉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2024年開業。コネクトルーム・モデレートルームを備えたアパホテルの新世代ホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鹿児島県鹿児島市西田2-20-14 ／ 最寄り駅：鹿児島中央 ／ 交通案内：九州新幹線・JR鹿児島本線「鹿児島中央駅」（西口）徒歩3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>ホテルから徒歩1分「NEO西田パーキング」122台（先着順）1泊最大1,100円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「立地と清潔さは良いが、内装はアパホテル感満載立地条件もよく、部屋も綺麗だが、部屋の中はアパホテル感満載。クチコミの詳細はこちらから　https://review.travel.rakuten.…　2026-08-18 20:16:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">アパホテル〈鹿児島中央駅前〉</h3>
                  <span className="text-xs text-stone-400 ml-2">（あぱほてる＜かごしまちゅうおうえきまえ＞）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,230〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/144497/144497_room.jpg" alt="アパホテル〈鹿児島中央駅前〉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>鹿児島中央駅（西口）から最も近いアパホテル。人気の朝食ビュッフェと敷地内駐車場（56台）備える</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鹿児島県鹿児島市西田2-21-22 ／ 最寄り駅：鹿児島中央 ／ 交通案内：鹿児島中央駅から徒歩1分！天文館まで路面電車で5分！鹿児島ICから車で10分！</p>
                  <p><strong>【駐車場・マイカー利用】</strong>立体駐車場58台完備。15：00～翌11：00まで1100円、先着順。高さ制限あり。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で高コスパ駅からこの距離でこの価格、言う事なしです。空調は一括管理ですと書いてあって、一瞬調整できないかと思うのですがそうではなく、冷房か暖房かが選べないだけで、その中での調整は普通に…　2026-08-15 21:37:50投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">東横ＩＮＮ鹿児島中央駅東口</h3>
                  <span className="text-xs text-stone-400 ml-2">（とうよこいんかごしまちゅうおうえきひがしぐち）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,638〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/108378/108378room1.jpg" alt="東横ＩＮＮ鹿児島中央駅東口 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>鹿児島中央駅から徒歩3分で朝食・小学生以下添い寝無料のホテル！空港バスターミナルまで徒歩で3分</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鹿児島県鹿児島市中央町26-25 ／ 最寄り駅：鹿児島中央 ／ 交通案内：JR九州新幹線・鹿児島本線・日豊本線・指宿枕崎線　鹿児島中央駅東口より徒歩３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>立体60台(高さ２M幅１．８５Mまで）1,000円/泊 平置駐車場のみ予約制　1,000円/泊</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「無料のサービスとロボットが便利で接客も親切無料のコーヒーサービスやお水のサービスがありとても助かりました ロボットのご飯盛り付けロボットもありとても便利でした。従業員の方もとても親しみやすくフレン…　2026-08-14 14:44:27投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=108378&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ネム〜ル　鹿児島中央駅</h3>
                  <span className="text-xs text-stone-400 ml-2">（ねむ〜る　かごしまちゅうおうえき）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/172024/172024.jpg" alt="ネム〜ル　鹿児島中央駅 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>鹿児島中央駅から歩いて３分と好立地。長期滞在にも！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鹿児島県鹿児島市西田2-19-3 ／ 最寄り駅：鹿児島中央 ／ 交通案内：鹿児島中央駅より徒歩にて約３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無し</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.08 ／ 立地 ★4.19 ／ 部屋 ★4.43 ／ 設備 ★4.36 ／ 風呂 ★4.27</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「入館パスワードが届かず連絡も取れず困惑建物内の中に入るためのパスワードが送られて来ず、記載されている電話番号やメールアドレスにも返事がなく、かなり詰みでした。たまたま外出する方がいらっしゃったので…　2026-09-23 23:06:59投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=172024&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！鹿児島県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、鹿児島県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">桜島（有村溶岩展望所）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">錦江湾に浮かぶ鹿児島県のシンボルであり現在も活発な活動を続ける活火山。有村溶岩展望所からは溶岩原と噴煙を上げる大迫力の姿を間近で観察できます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/17/Ibusuki.jpg/1280px-Ibusuki.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="指宿温泉（砂むし温泉）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">指宿温泉（砂むし温泉）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界でも大変珍しい天然の海岸砂むし風呂。温かい温泉熱を含んだ砂の中に埋まり、海鳴りを聞きながら汗を流すデトックス体験は至福のひとときです。 指宿温泉（いぶすきおんせん）は、鹿児島県指宿市東部（旧国薩摩国）にある摺ヶ浜温泉（砂蒸しで有名）、弥次ヶ湯温泉、二月田温泉などの温泉群の総称。鹿児島県内有数の観光地であり、2003年（平成15年）において年間285万人の観光客が訪れ、91万人の宿泊客を集めている。農業や養殖などへの温泉利用も盛んであり、温泉の9割が産業利用されていた時期もあった。また、196…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">屋久島（縄文杉）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">樹齢7,000年とも言われる世界自然遺産・屋久島の象徴「縄文杉」。白谷雲水峡の美しい苔むす森や数千年の時を生き抜いた巨大な屋久杉群が感動を呼びます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">仙厳園（磯庭園）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">島津家第19代当主・光久によって造営された大名庭園。桜島を築山に、錦江湾を池に見立てた雄大な借景庭園で、隣接する世界遺産「尚古集成館」も見どころです。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 鹿児島県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 鹿児島県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
  );
}
