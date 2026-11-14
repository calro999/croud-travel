import ShareButtons from "@/app/components/ShareButtons";
import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/",
  },

  title: '福井駅前：越前おろしそば＆ソースカツ丼・福井城跡！3,000円台〜泊まれる格安ホテル5選',
  description: 'ピリッと辛み大根が効いた越前おろしそばと元祖ソースカツ丼！北陸新幹線延伸で注目の福井駅・福井城址周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
  openGraph: {
    title: "福井駅前：越前おろしそば＆ソースカツ丼・福井城跡！3,000円台〜泊まれる格安ホテル5選",
    description: "ピリッと辛み大根が効いた越前おろしそばと元祖ソースカツ丼！北陸新幹線延伸で注目の福井駅・福井城址周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "福井駅前：越前おろしそば＆ソースカツ丼・福井城跡！3,000円台〜泊まれる格安ホテル5選",
    description: "ピリッと辛み大根が効いた越前おろしそばと元祖ソースカツ丼！北陸新幹線延伸で注目の福井駅・福井城址周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
  }
};

export default function AutumnBudgetFukuiStationHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"福井駅前：越前おろしそば＆ソースカツ丼・福井城跡！3,000円台〜泊まれる格安ホテル5選\",\"description\":\"ピリッと辛み大根が効いた越前おろしそばと元祖ソースカツ丼！北陸新幹線延伸で注目の福井駅・福井城址周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/\",\"datePublished\":\"2026-10-18T12:00:00+09:00\",\"dateModified\":\"2026-10-19T07:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド 編集部\",\"url\":\"https://croud-travel.pages.dev/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://croud-travel.pages.dev/icon.png\"}}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://croud-travel.pages.dev/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"特集一覧\",\"item\":\"https://croud-travel.pages.dev/features/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"福井駅前：越前おろしそば＆ソースカツ丼・福井城跡！3,000円台〜泊まれる格安ホテル5選\",\"item\":\"https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"福井駅前：越前おろしそば＆ソースカツ丼・福井城跡！3,000円台〜泊まれる格安ホテル5選\",\"numberOfItems\":10,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"家康の次男・結城秀康が築いた名城・巨大な内堀と御廊下橋\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"東尋坊温泉　三国オーシャンリゾート＆ホテル（旧：三国観光ホテル）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"あわら温泉　伝統旅館のぬくもり　灰屋\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"ホテルクラウンヒルズ武生駅前（ＢＢＨホテルグループ）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":5,\"name\":\"北陸　福井　あわら温泉　美松\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":6,\"name\":\"若狭美浜温泉　悠久乃碧　ホテル湾彩\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":7,\"name\":\"福井県立恐竜博物館\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":8,\"name\":\"東尋坊\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":9,\"name\":\"大本山 永平寺\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":10,\"name\":\"三方五湖（レインボーライン）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/\"}]}" }} />
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-emerald-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-emerald-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">福井駅前 おろしそば・福井城跡 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-slate-950 to-stone-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wider border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>越前秋新そば＆名物ソースカツ丼グルメ</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「福井駅前」越前おろしそば＆ソースカツ丼！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
            北陸新幹線が開業し東京から乗り換えなしで直結した福井！秋に収穫される香気豊かな「越前秋新そば」に辛み大根と削り節をかけた名物おろしそば、ヨーロッパ軒のウスターソースが染みる薄切りカツ丼。徳川家康が縄張りを手掛けた福井城跡周辺で3,000円台〜泊まれる優良宿を厳選。
          </p>
        </div>
      </section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-6">
        <ShareButtons title={"福井駅前：越前おろしそば＆ソースカツ丼・福井城跡！3,000円台〜泊まれる格安ホテル5選"} url={"https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/"} />
      </div>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2"><Utensils className="w-5 h-5 text-emerald-600" />
            新幹線延伸で注目の福井！格安ホテルに泊まって越前ガニ解禁や恐竜博物館へ</h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            駅前に恐竜モニュメントが並び大賑わいの福井駅前ですが、ビジネスホテルが豊富で1泊3,000円台〜5,000円前後とリーズナブル。浮いた宿泊費で11月解禁の越前ガニ（黄色いタグ付き）や、福井名物水ようかん、黒龍など銘酒の飲み比べを存分に堪能できます。
          </p>
        </div>
      </section>

      
      <div className="max-w-4xl mx-auto px-4">
        </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: ホテルフクイキャッスル */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">破格の3,100円台〜・福井城址のお堀の目の前</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.90</span>
                <span className="text-slate-400 text-xs font-normal">（城址水濠ビュー）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/8373/8373.jpg"
                  alt="ホテルフクイキャッスル"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">ホテルフクイキャッスル</h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  福井城址公園のお堀端 / JR福井駅西口より徒歩10分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  福井城跡のお堀に面した静かな環境。朝の城址公園散歩や水濠の紅葉を眺めるのに最高のロケーションです。1泊3,100円台〜という驚きの低価格で、出張や観光の一人旅に根強い人気を誇ります。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥3,135</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8373%2F8373.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: ホテル京福 福井駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">福井駅東口徒歩1分・高速バスターミナル正面</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.97</span>
                <span className="text-slate-400 text-xs font-normal">（駅東口すぐ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/1999/1999.jpg"
                  alt="ホテル京福 福井駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">ホテル京福　福井駅前</h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR福井駅東口より徒歩1分（えちぜん鉄道駅隣接）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  新幹線東口を出てすぐ目の前という最高の近さ。恐竜博物館行き直通バスや永平寺行きバスが発着する東口ロータリーに面し、観光の足回りは完璧。3,300円台〜で手軽に泊まれる王道ホテルです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥3,360</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1999%2F1999.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: ９ＳＴＡＹ福井駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">★4.23・無人スマートチェックイン・デザイナーズ空間</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.23</span>
                <span className="text-slate-400 text-xs font-normal">（クチコミ高評価）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/160794/160794.jpg"
                  alt="９ＳＴＡＹ福井駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">９ＳＴＡＹ福井駅前</h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR福井駅西口より徒歩2分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  完全非対面のスマートホテル。スタイリッシュで清潔な客室には、独立バス・トイレや大型液晶テレビを完備。クチコミ★4.23の高評価を獲得し、3,000円台で快適かつ自由な滞在が可能です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥3,900</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160794%2F160794.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: ホテルフジタ福井 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-md">★4.13・繁華街片町すぐ・シモンズベッド導入</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.13</span>
                <span className="text-slate-400 text-xs font-normal">（上質シティホテル）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/181073/181073.jpg"
                  alt="ホテルフジタ福井"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">ホテルフジタ福井</h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  福井市中心街・片町徒歩1分 / JR福井駅西口徒歩8分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  福井最大の繁華街「片町」に隣接する代表的シティホテル。ヨーロッパ軒総本店や越前そばの名店へもすぐ。全室シモンズ社製ベッドと加湿空気清浄機を完備し、落ち着いたワンランク上の客室を4,000円台〜で利用できます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥4,900</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181073%2F181073.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: 東横ＩＮＮ福井駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-stone-100 text-stone-800 text-xs font-bold rounded-md">★4.08・福井駅西口徒歩1分・無料健康朝食バイキング</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.08</span>
                <span className="text-slate-400 text-xs font-normal">（駅西口すぐ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/68558/68558.jpg"
                  alt="東横ＩＮＮ福井駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">東横ＩＮＮ福井駅前</h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR福井駅西口より徒歩1分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  クチコミ★4.08。西口広場（恐竜広場）の目の前に位置し、迷わず到着できる安心感。手作りおにぎりやお惣菜の無料朝食バイキングが付き、明るく清潔な客室で快適な福井旅をサポートします。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込</span>
                    <span className="text-2xl font-black text-rose-600">¥5,513</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68558%2F68558.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-emerald-300"><CheckCircle2 className="w-5 h-5" />
            秋の福井グルメ＆城下町旅を格安に遊び尽くすポイント</h2>
          <ul className="space-y-2 text-sm text-emerald-100/90 leading-relaxed">
            <li>・秋収穫の「越前新そば」は風味抜群。辛み大根の絞り汁と出汁をぶっかけたおろしそばはハシゴ必須の郷土食。</li>
            <li>・ヨーロッパ軒のソースカツ丼はテイクアウトも人気。ホテルのお部屋でビールとともに楽しむのも最高。</li>
            <li>・福井城址の御廊下橋や石垣を眺めながら、えちぜん鉄道に乗って永平寺や東尋坊へ足を伸ばすのが王道ルートです。</li>
          </ul>
        </div>
      </section>
    
        {/* Enriched Rakuten Travel Hotel Specs */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">福井駅前：越前おろしそば＆ソースカツ丼・福井城跡！3,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析</h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「福井駅前：越前おろしそば＆ソースカツ丼・福井城跡！3,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 東尋坊温泉　三国オーシャンリゾート＆ホテル（旧：三国観光ホテル）</td>
                <td className="p-3 text-stone-600">福井県坂井市三国町緑ヶ丘4-4-8</td>
                <td className="p-3 text-stone-600">芦原温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　２００台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.2（644件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4898%2F4898.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. あわら温泉　伝統旅館のぬくもり　灰屋</td>
                <td className="p-3 text-stone-600">福井県あわら市温泉2-205</td>
                <td className="p-3 text-stone-600">芦原温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　１００台　無料 （エントランスにはスロープもございます。係がご案内いたします。）</td>
                <td className="p-3 font-bold text-amber-600">★4.42（756件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,950〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5677%2F5677.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテルクラウンヒルズ武生駅前（ＢＢＨホテルグループ）</td>
                <td className="p-3 text-stone-600">福井県越前市府中1-2-3</td>
                <td className="p-3 text-stone-600">武生駅周辺</td>
                <td className="p-3 text-stone-600">有り　40台　840円／泊</td>
                <td className="p-3 font-bold text-amber-600">★4（915件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6113%2F6113.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 北陸　福井　あわら温泉　美松</td>
                <td className="p-3 text-stone-600">福井県あわら市舟津26-10</td>
                <td className="p-3 text-stone-600">芦原温泉駅周辺</td>
                <td className="p-3 text-stone-600">先着順の無料駐車場（100台）お体の不自由なお客様には駐車場の確保も致します。</td>
                <td className="p-3 font-bold text-amber-600">★4.41（2961件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8114%2F8114.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 若狭美浜温泉　悠久乃碧　ホテル湾彩</td>
                <td className="p-3 text-stone-600">福井県三方郡美浜町久々子海岸</td>
                <td className="p-3 text-stone-600">美浜駅周辺</td>
                <td className="p-3 text-stone-600">有り　８０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★3.96（1195件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10952%2F10952.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">福井駅前エリアの宿泊施設別スペック＆滞在チェックポイント</h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">東尋坊温泉　三国オーシャンリゾート＆ホテル（旧：三国観光ホテル）</h3>
                  <span className="text-xs text-stone-400 ml-2">（とうじんぼうおんせん　みくにおーしゃんりぞーとあんどほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4898/4898_heya.jpg" alt="東尋坊温泉　三国オーシャンリゾート＆ホテル（旧：三国観光ホテル） 客室・施設イメージ" className="w-full h-full object-cover" loading="eager" fetchPriority="high" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全室オーシャンビュー！日本海に沈む美しい夕陽をお部屋から◆東尋坊まで車で10分＆“和畳の湯”も人気♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福井県坂井市三国町緑ヶ丘4-4-8 ／ 最寄り駅：芦原温泉 ／ 交通案内：ＪＲ北陸新幹線・ハピライン芦原温泉下車　京福バス東尋坊経由　終点　龍翔博物館前下車</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２００台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「いいホテルです食事が思ったより残念でした。味とかは問題ではなく、こちらの過大な期待のせいだと思いますが..あと、夏休みの子供キャンプ?なのか子供が多すぎて、バイキング取りづらかった。更に引率の…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">あわら温泉　伝統旅館のぬくもり　灰屋</h3>
                  <span className="text-xs text-stone-400 ml-2">（あわらおんせん　はいや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,950〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5677/5677_heya1.jpg" alt="あわら温泉　伝統旅館のぬくもり　灰屋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【ガーデンサウナOPEN】明治１７年創業当時の趣を残す伝統旅館。奥深いおもてなしを提供いたします</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福井県あわら市温泉2-205 ／ 最寄り駅：芦原温泉 ／ 交通案内：ＪＲ北陸本線芦原温泉駅から路線バスにて１５分/無料送迎あり。北陸道金津ＩＣより車で１５分。駐車場無料(係が案内します。)</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１００台　無料 （エントランスにはスロープもございます。係がご案内いたします。）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.39 ／ 立地 ★4.16 ／ 部屋 ★4.3 ／ 設備 ★4.23 ／ 風呂 ★4.31 ／ 食事 ★4.5</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「NiceGood service.Onsen was great.Relaxing and comfortable!」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルクラウンヒルズ武生駅前（ＢＢＨホテルグループ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるくらうんひるずたけふえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/6113/6113_sig.jpg" alt="ホテルクラウンヒルズ武生駅前（ＢＢＨホテルグループ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ハピライン武生駅より徒歩1分以内の好立地。9Fスカイレストランからは、越前市街を一望できます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福井県越前市府中1-2-3 ／ 最寄り駅：武生 ／ 交通案内：ハピラインふくい武生駅下車徒歩1分！　 北陸自動車道武生IC車で10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　40台　840円／泊</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「花火会場への好立地と充実したサービスが魅力越前市サマーフェスティバルのために宿泊しました。花火会場に行くには立地は最高でした。部屋などはよくあるビジネスホテルといった感じで良くも悪くもなく…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">北陸　福井　あわら温泉　美松</h3>
                  <span className="text-xs text-stone-400 ml-2">（あわらこくさいほてる　みまつ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8114/8114_heya.jpg" alt="北陸　福井　あわら温泉　美松 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>◆充実！美松のドリンクインクルーシブスタート◆別邸「美悠」など趣の異なる温泉露天風呂付客室が好評◆</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福井県あわら市舟津26-10 ／ 最寄り駅：芦原温泉 ／ 交通案内：JR北陸新幹線芦原温泉駅より約15分（要予約）／北陸自動車道金津ICより約15分／小松空港より車で約50分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>先着順の無料駐車場（100台）お体の不自由なお客様には駐車場の確保も致します。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「露天風呂は最高だが夕食のタレが辛すぎた夕食のしゃぶしゃぶのタレがゴマだれとポン酢だったのですが、どちらも辛すぎて何もつけずに食べたほうがよかったです。部屋付き露天風呂はとても気持ちよくて良かっ…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">若狭美浜温泉　悠久乃碧　ホテル湾彩</h3>
                  <span className="text-xs text-stone-400 ml-2">（わかさみはまおんせん　ゆうきゅうのあお　ほてるわんさい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/10952/10952_war.jpg" alt="若狭美浜温泉　悠久乃碧　ホテル湾彩 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>若狭湾一望のホテル！オーシャンビュー＆獲れたての海幸が自慢</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福井県三方郡美浜町久々子海岸 ／ 最寄り駅：美浜 ／ 交通案内：JR美浜駅から車で５分。 敦賀ICから車で２０分。</p>
                  <p>【福井駅前：越前おろしそば＆ソースカツ丼・福井城跡】 <strong>【駐車場・マイカー利用】</strong>有り　８０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「夕食は期待外れ、朝食の和食は満足夕食はバイキングだったのですがネットの写真を見て良さそうに思ったのですが私的にはあんまりでした。朝食の和食の方が良かったです。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div></section>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-8">
        <ShareButtons title={"福井駅前：越前おろしそば＆ソースカツ丼・福井城跡！3,000円台〜泊まれる格安ホテル5選"} url={"https://croud-travel.pages.dev/autumn-budget-fukui-station-oroshisoba-castle-hotels-stay/"} />
      </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <HubRelatedPosts currentSlug="autumn-budget-fukui-station-oroshisoba-castle-hotels-stay" />
        </div>

      </main>
  );
}
