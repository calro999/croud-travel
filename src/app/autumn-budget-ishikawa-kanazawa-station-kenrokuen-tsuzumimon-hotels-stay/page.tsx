import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-ishikawa-kanazawa-station-kenrokuen-tsuzumimon-hotels-stay/",
  },

  title: '金沢駅前：兼六園秋の雪吊り＆のどぐろ・金沢おでん！2,000円台〜泊まれる格安ホテル5選',
  description: '鼓門迎える金沢駅前！名勝・兼六園の秋の紅葉と風物詩「雪吊り」、近江町市場ののどぐろや熱々金沢おでん。北陸新幹線・金沢駅周辺で1泊2,000円台〜泊まれる高コスパ格安ホテル厳選5選。',
  openGraph: {
    title: "金沢駅前：兼六園秋の雪吊り＆のどぐろ・金沢おでん！2,000円台〜泊まれる格安ホテル5選",
    description: "鼓門迎える金沢駅前！名勝・兼六園の秋の紅葉と風物詩「雪吊り」、近江町市場ののどぐろや熱々金沢おでん。北陸新幹線・金沢駅周辺で1泊2,000円台〜泊まれる高コスパ格安ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "金沢駅前：兼六園秋の雪吊り＆のどぐろ・金沢おでん！2,000円台〜泊まれる格安ホテル5選",
    description: "鼓門迎える金沢駅前！名勝・兼六園の秋の紅葉と風物詩「雪吊り」、近江町市場ののどぐろや熱々金沢おでん。北陸新幹線・金沢駅周辺で1泊2,000円台〜泊まれる高コスパ格安ホテル厳選5選。",
  }
};

export default function AutumnBudgetHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"金沢駅前：兼六園秋の雪吊り＆のどぐろ・金沢おでん！2,000円台〜泊まれる格安ホテル5選\",\"description\":\"鼓門迎える金沢駅前！名勝・兼六園の秋の紅葉と風物詩「雪吊り」、近江町市場ののどぐろや熱々金沢おでん。北陸新幹線・金沢駅周辺で1泊2,000円台〜泊まれる高コスパ格安ホテル厳選5選。\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-ishikawa-kanazawa-station-kenrokuen-tsuzumimon-hotels-stay/\",\"datePublished\":\"2026-10-18T12:00:00+09:00\",\"dateModified\":\"2026-10-19T07:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド 編集部\",\"url\":\"https://croud-travel.pages.dev/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://croud-travel.pages.dev/icon.png\"}}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://croud-travel.pages.dev/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"特集一覧\",\"item\":\"https://croud-travel.pages.dev/features/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"金沢駅前：兼六園秋の雪吊り＆のどぐろ・金沢おでん！2,000円台〜泊まれる格安ホテル5選\",\"item\":\"https://croud-travel.pages.dev/autumn-budget-ishikawa-kanazawa-station-kenrokuen-tsuzumimon-hotels-stay/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"金沢駅前：兼六園秋の雪吊り＆のどぐろ・金沢おでん！2,000円台〜泊まれる格安ホテル5選\",\"numberOfItems\":10,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"宏大・幽邃・人力・蒼古・水泉・眺望を備えた名園と秋の雪吊り\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-ishikawa-kanazawa-station-kenrokuen-tsuzumimon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"平日泊で更なる割引\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-ishikawa-kanazawa-station-kenrokuen-tsuzumimon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"直前割＆早割を活用\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-ishikawa-kanazawa-station-kenrokuen-tsuzumimon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"浮いた予算で旬の味覚\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-ishikawa-kanazawa-station-kenrokuen-tsuzumimon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":5,\"name\":\"ＡＲＩＧＡＴＯ　ＳＴＡＹ金沢駅前（旧　ホテルトレンド金沢駅前）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-ishikawa-kanazawa-station-kenrokuen-tsuzumimon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":6,\"name\":\"天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-ishikawa-kanazawa-station-kenrokuen-tsuzumimon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":7,\"name\":\"金沢駅前ホテル\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-ishikawa-kanazawa-station-kenrokuen-tsuzumimon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":8,\"name\":\"ホテルルートイン金沢駅前\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-ishikawa-kanazawa-station-kenrokuen-tsuzumimon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":9,\"name\":\"チサンバジェット金沢駅前\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-ishikawa-kanazawa-station-kenrokuen-tsuzumimon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":10,\"name\":\"兼六園\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-ishikawa-kanazawa-station-kenrokuen-tsuzumimon-hotels-stay/\"}]}" }} />
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-amber-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">金沢駅前 兼六園・鼓門・金沢おでん 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-stone-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>名勝兼六園の秋散歩＆近江町市場・金沢おでんグルメ</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「金沢駅前」兼六園雪吊り散歩＆旬の海鮮・おでん！<br className="hidden sm:inline" />2,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            世界的にも美しい木造建築「鼓門」が迎える金沢駅。日本三名園「兼六園」の華やかな紅葉と冬支度の風物詩「雪吊り（ゆきづり）」、近江町市場の脂がのったのどぐろ、出汁の染みた金沢おでん。金沢駅周辺で2,000円台〜泊まれる格安・高コスパホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            金沢駅東口・西口のハイレベル格安宿が目白押し！浮いた費用で近江町市場海鮮丼や兼六園茶屋を満喫
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            北陸新幹線の主要ハブ・金沢駅周辺は、全国でも屈指のホテル激戦区。天然温泉大浴場付きホテルやスタイリッシュなデザイナーズホテルが、秋の平日なら1泊2,000円台〜4,000円台で予約可能。浮いた予算で香箱ガニやのどぐろ握り、兼六園銘菓を心ゆくまで堪能できます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">大名庭園の最高峰：兼六園（特別名勝・加賀前田家庭園）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">加賀百万石名園ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fc/Kenrokuen10-r.jpg/1280px-Kenrokuen10-r.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="大名庭園の最高峰：兼六園（特別名勝・加賀前田家庭園）"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">宏大・幽邃・人力・蒼古・水泉・眺望を備えた名園と秋の雪吊り</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                兼六園（けんろくえん）は、石川県金沢市にある江戸時代の代表的な大名庭園（廻遊式庭園）であり、国の特別名勝に指定されています。加賀藩歴代藩主によって長い年月をかけて築かれ、「六つの優れた景観」を兼ね備えることから命名。秋にはモミジやカエデの紅葉に加え、冬の重い雪から枝を守る伝統技術「雪吊り」の縄張りが湖面に映え、金沢随一の風情を醸し出します。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-amber-700 font-semibold">金沢駅東口バスターミナルより路線バス約15分（兼六園下下車）</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: ＡＲＩＧＡＴＯ　ＳＴＡＹ金沢駅前（旧　ホテルトレンド金沢駅前） */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅東口徒歩5分・★3.90・シンプルで機能的な快適宿</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.9</span>
                <span className="text-slate-400 text-xs font-normal">（533件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/171908/171908.jpg"
                  alt="ＡＲＩＧＡＴＯ　ＳＴＡＹ金沢駅前（旧　ホテルトレンド金沢駅前）"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ＡＲＩＧＡＴＯ　ＳＴＡＹ金沢駅前（旧　ホテルトレンド金沢駅前）
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  金沢
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  金沢駅東口（兼六園口）から徒歩5分の好立地。機能的な客室レイアウトと清潔なベッドで、観光で歩き疲れた体を心地よく休めることができます。鼓門周辺のライトアップ散策にも便利な拠点です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥3,800</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F171908%2F171908.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: 天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅徒歩3分・天然温泉「鼓門の湯」完備・★4.42</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.42</span>
                <span className="text-slate-400 text-xs font-normal">（1799件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/180588/180588.jpg"
                  alt="天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  金沢
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  金沢駅東口から徒歩3分。館内に自家源泉の天然温泉大浴場「鼓門の湯」を完備し、旅の疲れを芯から癒せます。オーガニック朝食や選べる枕などスーパーホテルならではの充実した無料サービスが高評価の秘訣です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥4,540</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180588%2F180588.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: 金沢駅前ホテル */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩1分・★3.55・抜群の機動性とコスパ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.55</span>
                <span className="text-slate-400 text-xs font-normal">（178件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/153512/153512.jpg"
                  alt="金沢駅前ホテル"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  金沢駅前ホテル
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  金沢
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  金沢駅東口を出てすぐのロケーションで、重い荷物を持っての移動もラクラク。近江町市場へも徒歩圏内。宿泊料金を抑えて金沢市内の食べ歩きや伝統工芸巡りに予算を集中させたい旅行者にぴったりです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥3,710</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153512%2F153512.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: ホテルルートイン金沢駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅西口徒歩3分・最上階展望大浴場・★4.11</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.11</span>
                <span className="text-slate-400 text-xs font-normal">（2040件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/54537/54537.jpg"
                  alt="ホテルルートイン金沢駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルルートイン金沢駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  金沢
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  金沢駅西口から徒歩約3分。最上階に展望大浴場を設けており、旅の疲れを湯船でゆったり解放。朝食には和洋バイキングが用意され、出張にも兼六園・ひがし茶屋街観光にも幅広くフィットします。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥6,000</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54537%2F54537.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-rose-500 to-rose-600 hover:from-rose-600 hover:to-rose-700 text-white font-bold rounded-xl shadow-sm hover:shadow transition"
              >
                <span>楽天トラベルで最安プランをチェック</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: チサンバジェット金沢駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">驚きの最安2,320円〜・★4.00・コスパ最強のスマート滞在</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4</span>
                <span className="text-slate-400 text-xs font-normal">（1390件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/183231/183231.jpg"
                  alt="チサンバジェット金沢駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  チサンバジェット金沢駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  金沢
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  金沢駅前エリアでトップクラスの最安2,320円〜を実現するチサンバジェット。無駄を省いたスマートな客室設計ながらシモンズ社製ベッドを採用し、★4.00のクオリティを維持。宿泊費を極限まで抑えたい方に最適です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥2,320</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183231%2F183231.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
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
              📊 金沢駅前：兼六園秋の雪吊り＆のどぐろ・金沢おでん！2,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「金沢駅前：兼六園秋の雪吊り＆のどぐろ・金沢おでん！2,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ＡＲＩＧＡＴＯ　ＳＴＡＹ金沢駅前（旧　ホテルトレンド金沢駅前）</td>
                <td className="p-3 text-stone-600">石川県金沢市広岡1-3-36</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">駐車場はありません。 近隣コインパーキング「金沢駅西口時計駐車場」 ※提携駐車場ではございません。</td>
                <td className="p-3 font-bold text-amber-600">★3.92（514件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F171908%2F171908.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口</td>
                <td className="p-3 text-stone-600">石川県金沢市本町2-5-15</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">ホテル専用駐車場、駐輪場はございません。近隣駐車場のご案内となります</td>
                <td className="p-3 font-bold text-amber-600">★4.43（1660件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,450〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180588%2F180588.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 金沢駅前ホテル</td>
                <td className="p-3 text-stone-600">石川県金沢市此花町2-24</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">1泊:1,000円頂いております。</td>
                <td className="p-3 font-bold text-amber-600">★3.45（171件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,850〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153512%2F153512.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテルルートイン金沢駅前</td>
                <td className="p-3 text-stone-600">石川県金沢市昭和町22-5</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">有り　１６６台　１，０００円（税込み／泊）　先着順・高さ制限２．１M迄</td>
                <td className="p-3 font-bold text-amber-600">★4.09（1990件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,825〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54537%2F54537.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. チサンバジェット金沢駅前</td>
                <td className="p-3 text-stone-600">石川県金沢市堀川新町8-16</td>
                <td className="p-3 text-stone-600">金沢駅周辺</td>
                <td className="p-3 text-stone-600">1,100円（1台1泊）※ 先着順。満車の場合は金沢駅西口時計駐車場（徒歩3分）をご案内いたします。</td>
                <td className="p-3 font-bold text-amber-600">★4.01（1280件）</td>
                <td className="p-3 font-bold text-rose-600">¥1,960〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183231%2F183231.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＡＲＩＧＡＴＯ　ＳＴＡＹ金沢駅前（旧　ホテルトレンド金沢駅前）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ありがとう　すてい　かなざわえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/171908/171908.jpg" alt="ＡＲＩＧＡＴＯ　ＳＴＡＹ金沢駅前（旧　ホテルトレンド金沢駅前） 客室・施設イメージ" className="w-full h-full object-cover" loading="eager" fetchPriority="high" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR金沢駅から徒歩約3分！金沢城や兼六園など金沢の名所にアクセス抜群！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市広岡1-3-36 ／ 最寄り駅：金沢 ／ 交通案内：金沢駅西口より徒歩約3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>駐車場はありません。 近隣コインパーキング「金沢駅西口時計駐車場」 ※提携駐車場ではございません。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「目的通りのサービスで不満なし目的通りのサービスで、不満も特に浮かびません。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voi…　2026-08-27 16:29:23投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口</h3>
                  <span className="text-xs text-stone-400 ml-2">（すーぱーほてる　ぷれみあ　かなざわえきひがしぐち　てんねんおんせん　つづみもんのゆ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,450〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/180588/180588.jpg" alt="天然温泉　鼓門の湯　スーパーホテルＰｒｅｍｉｅｒ金沢駅東口 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>金沢駅東口より徒歩７分！主要駅からのアクセスが良くビジネスや観光に便利♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市本町2-5-15 ／ 最寄り駅：金沢 ／ 交通案内：金沢駅東口より徒歩7分。金沢東ICより約15分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>ホテル専用駐車場、駐輪場はございません。近隣駐車場のご案内となります</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「大浴場は小さめだが混雑状況を確認できて便利温泉(大浴場)は想像していたより小さめでした。部屋から浴場の混雑状況が確認できるため、空いている時間に入れば問題ないと思います。クチコミの詳細はこちら…　2026-08-22 11:51:34投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">金沢駅前ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（かなざわえきまえほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,850〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/153512/153512_kan1.jpg" alt="金沢駅前ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>金沢駅鼓門（東口）から徒歩約3分。ひがし茶屋街、金沢城、兼六園、近江町市場まで周遊バス1本。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市此花町2-24 ／ 最寄り駅：金沢 ／ 交通案内：金沢駅鼓門より徒歩約3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1泊:1,000円頂いております。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「エアコンの埃と朝食時間に間に合わない不満エアコンが埃だらけで清潔とは言えませんでした朝早くに出発する予定でしたが、朝食が7時からでしたので食べていませんクチコミの詳細はこちらから　http…　2026-08-25 23:26:22投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルルートイン金沢駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるるーといんかなざわえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,825〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/54537/54537_ky.jpg" alt="ホテルルートイン金沢駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＷＯＷＯＷ全室で無料視聴可■VODルームシアター(一般映画のみ)無料視聴可（コンフォート特典）</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市昭和町22-5 ／ 最寄り駅：金沢 ／ 交通案内：ＪＲ北陸本線・新幹線　金沢駅より徒歩５分／北陸自動車道　金沢西ＩＣより５．５ｋｍ</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１６６台　１，０００円（税込み／泊）　先着順・高さ制限２．１M迄</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「価格以上の満足感、安定のクオリティルートインさん、間違いないです。価格対比、すべてレベル以上です。クチコミの詳細はこちらから　https://review.travel.rakuten.co.…　2026-08-19 08:04:09投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">チサンバジェット金沢駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（ちさんばじぇっとかなざわえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥1,960〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/183231/183231.jpg" alt="チサンバジェット金沢駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR金沢駅徒歩5分の好立地！いつでも清潔、空間はシンプルに。そして何よりも、カジュアルなプライスで。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県金沢市堀川新町8-16 ／ 最寄り駅：金沢 ／ 交通案内：JR線「金沢」駅徒歩5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1,100円（1台1泊）※ 先着順。満車の場合は金沢駅西口時計駐車場（徒歩3分）をご案内いたします。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で便利だが駐車場と荷物置きに改善の余地あり駅からも近くて便利でした。提携駐車場の案内をもらったけど、近くの違うコインパーキングのが安くてびっくりしました。今はキャリーバッグで宿泊する人が多いと…　2026-08-21 19:11:38投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=183231&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！石川県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、石川県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">兼六園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">水戸偕楽園・岡山後楽園と並ぶ日本三名園の一つ。四季折々の庭園美が見事で、冬には雪の重みから枝を守る「雪吊り」が金沢の冬の風物詩として知られています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">金沢21世紀美術館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「まちに開かれた公園のような美術館」をコンセプトとした現代アートの殿堂。レアンドロ・エルリッヒの「スイミング・プール」など体感型アートが世界的人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">ひがし茶屋街</h3>
                <p className="text-xs text-stone-600 leading-relaxed">キムスコ（細い格子）と呼ばれる出格子がある美しい木造茶屋建築が並ぶ重要伝統的建造物群保存地区。金箔体験やカフェ巡りを着物姿で楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">白米千枚田（しろよねせんまいだ）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本海に面した急斜面に1,004枚の小さな田んぼが重なり合う棚田の絶景。黄金色に輝く稲穂やイルミネーションイベント「あぜのきらめき」が幻想的です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 石川県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 石川県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <HubRelatedPosts currentSlug="autumn-budget-ishikawa-kanazawa-station-kenrokuen-tsuzumimon-hotels-stay" />
        </div>

      </main>
  );
}
