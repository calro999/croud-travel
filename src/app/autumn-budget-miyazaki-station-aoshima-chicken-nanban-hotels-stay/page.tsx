import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-miyazaki-station-aoshima-chicken-nanban-hotels-stay/",
  },

  title: '宮崎駅前：青島・鬼の洗濯板の秋絶景＆本場チキン南蛮！3,000円台〜泊まれる格安ホテル5選',
  description: '波状岩「鬼の洗濯板」と青島神社の海岸秋散歩！甘酢と濃厚タルタルソースが絡む本場チキン南蛮や極上宮崎牛炭火焼き。JR日豊本線・宮崎駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
  openGraph: {
    title: "宮崎駅前：青島・鬼の洗濯板の秋絶景＆本場チキン南蛮！3,000円台〜泊まれる格安ホテル5選",
    description: "波状岩「鬼の洗濯板」と青島神社の海岸秋散歩！甘酢と濃厚タルタルソースが絡む本場チキン南蛮や極上宮崎牛炭火焼き。JR日豊本線・宮崎駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "宮崎駅前：青島・鬼の洗濯板の秋絶景＆本場チキン南蛮！3,000円台〜泊まれる格安ホテル5選",
    description: "波状岩「鬼の洗濯板」と青島神社の海岸秋散歩！甘酢と濃厚タルタルソースが絡む本場チキン南蛮や極上宮崎牛炭火焼き。JR日豊本線・宮崎駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
  }
};

export default function AutumnBudgetHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"宮崎駅前：青島・鬼の洗濯板の秋絶景＆本場チキン南蛮！3,000円台〜泊まれる格安ホテル5選\",\"description\":\"波状岩「鬼の洗濯板」と青島神社の海岸秋散歩！甘酢と濃厚タルタルソースが絡む本場チキン南蛮や極上宮崎牛炭火焼き。JR日豊本線・宮崎駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-miyazaki-station-aoshima-chicken-nanban-hotels-stay/\",\"datePublished\":\"2026-10-18T12:00:00+09:00\",\"dateModified\":\"2026-10-19T07:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド 編集部\",\"url\":\"https://croud-travel.pages.dev/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://croud-travel.pages.dev/icon.png\"}}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://croud-travel.pages.dev/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"特集一覧\",\"item\":\"https://croud-travel.pages.dev/features/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"宮崎駅前：青島・鬼の洗濯板の秋絶景＆本場チキン南蛮！3,000円台〜泊まれる格安ホテル5選\",\"item\":\"https://croud-travel.pages.dev/autumn-budget-miyazaki-station-aoshima-chicken-nanban-hotels-stay/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"宮崎駅前：青島・鬼の洗濯板の秋絶景＆本場チキン南蛮！3,000円台〜泊まれる格安ホテル5選\",\"numberOfItems\":10,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"新第三紀層の隆起海食崖・ビロウ樹の森に抱かれた青島神社\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-miyazaki-station-aoshima-chicken-nanban-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"平日泊で更なる割引\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-miyazaki-station-aoshima-chicken-nanban-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"直前割＆早割を活用\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-miyazaki-station-aoshima-chicken-nanban-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"浮いた予算で旬の味覚\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-miyazaki-station-aoshima-chicken-nanban-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":5,\"name\":\"ホテル　ベルフォート日向\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-miyazaki-station-aoshima-chicken-nanban-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":6,\"name\":\"ホテルマリックスラグーン\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-miyazaki-station-aoshima-chicken-nanban-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":7,\"name\":\"都城グリーンホテル\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-miyazaki-station-aoshima-chicken-nanban-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":8,\"name\":\"フェニックス・シーガイア・オーシャン・タワー\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-miyazaki-station-aoshima-chicken-nanban-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":9,\"name\":\"ホテル日南北郷リゾート\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-miyazaki-station-aoshima-chicken-nanban-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":10,\"name\":\"高千穂峡（真名井の滝）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-miyazaki-station-aoshima-chicken-nanban-hotels-stay/\"}]}" }} />
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-amber-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">宮崎駅前 青島・チキン南蛮 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-stone-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>奇勝青島鬼の洗濯板＆本場タルタルチキン南蛮・宮崎牛</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「宮崎駅前」青島秋の海景＆本場チキン南蛮！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            日南海岸のシンボル「青島」を取り囲む国の天然記念物「鬼の洗濯板」。秋の爽快な海風を感じながら参拝する青島神社の朱色の社殿。ジューシーな鶏肉に特製甘酢と手作りタルタルソースがたっぷりかかった本場「チキン南蛮」や、炭火で豪快に焼き上げる「地鶏炭火焼き」に舌鼓！宮崎駅周辺で3,000円台〜泊まれる優良ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            宮崎駅前・橘通り（西橘通り）に格安＆清潔ホテルが集結！浮いた予算でおぐらのチキン南蛮を満喫
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            JR宮崎駅西口から宮崎最大の繁華街「ニシタチ（西橘通り）」にかけては、美味しい郷土料理店とリーズナブルなビジネスホテルが充実。秋のシーズンでも1泊3,000円台〜5,000円台で快適な滞在が可能。浮いた予算で元祖チキン南蛮「おぐら」や宮崎牛ステーキ、完熟マンゴースイーツを存分に堪能できます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">波状岩に囲まれた神秘の聖地：青島（鬼の洗濯板）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">国の天然記念物・景勝地ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/_Aoshima_Island_%28Miyazaki%29Aerial_photography%E9%9D%92%E5%B3%B6_%28%E5%AE%AE%E5%B4%8E%E7%9C%8C%29DJI_0249_%282%29%E7%A9%BA%E6%92%AE.jpg/1280px-_Aoshima_Island_%28Miyazaki%29Aerial_photography%E9%9D%92%E5%B3%B6_%28%E5%AE%AE%E5%B4%8E%E7%9C%8C%29DJI_0249_%282%29%E7%A9%BA%E6%92%AE.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="波状岩に囲まれた神秘の聖地：青島（鬼の洗濯板）"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">新第三紀層の隆起海食崖・ビロウ樹の森に抱かれた青島神社</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                青島（あおしま）は、宮崎県宮崎市の南東部、日南海岸に浮かぶ周囲約1.5kmの小島。島を取り囲む波状岩は「鬼の洗濯板」と呼ばれ、国の天然記念物に指定されています。島の中央には海幸彦・山幸彦神話ゆかりの「青島神社」が鎮座し、亜熱帯植物ビロウ樹の群落が自生。秋には涼やかな海風が吹き抜け、青い海と奇岩が織りなす絶景の散策を楽しめます。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-amber-700 font-semibold">JR宮崎駅より日南線約30分（青島駅下車徒歩約10分）</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: リッチモンドホテル宮崎駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">最安3,590円〜・繁華街橘通沿い・大淀川リバーサイド</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.42</span>
                <span className="text-slate-400 text-xs font-normal">（5445件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/14993/14993.jpg"
                  alt="リッチモンドホテル宮崎駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  リッチモンドホテル宮崎駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  宮崎
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  大淀川沿い橘通に位置し、1名1泊3,590円〜という良心的な料金が魅力。広めの客室でゆったりくつろげ、ニシタチの飲食店街へも徒歩圏内。宿泊費を抑えて宮崎グルメを満喫できます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥4,650</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14993%2F14993.html"
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

        {/* 宿2: アパホテル〈宮崎駅橘通〉 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅西口徒歩2分・★4.42高評価・広々デスク＆客室</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.18</span>
                <span className="text-slate-400 text-xs font-normal">（2454件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/939/939.jpg"
                  alt="アパホテル〈宮崎駅橘通〉"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  アパホテル〈宮崎駅橘通〉
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  宮崎
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  宮崎駅西口から徒歩2分の好アクセス。大型デスクや加湿空気清浄機を備え、ビジネスにも観光にも快適。フロント対応の良さと清潔な客室で★4.42の高評価を獲得しています。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥4,500</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F939%2F939.html"
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

        {/* 宿3: 東横ＩＮＮ宮崎駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">最安4,500円〜・橘通アーケード至近・大浴場</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.17</span>
                <span className="text-slate-400 text-xs font-normal">（1608件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/41166/41166.jpg"
                  alt="東横ＩＮＮ宮崎駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ宮崎駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  宮崎
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  宮崎の中心繁華街・橘通り沿いに位置。夜遅くまでチキン南蛮や地鶏炭火焼きを楽しんだ後もすぐにホテルへ戻れる抜群の立地で、アパならではの快眠ベッドを完備しています。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥5,408</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41166%2F41166.html"
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

        {/* 宿4: ホテルマイステイズ宮崎 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅西口徒歩1分・安心の無料朝食バイキング・★4.17</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.09</span>
                <span className="text-slate-400 text-xs font-normal">（582件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/191643/191643.jpg"
                  alt="ホテルマイステイズ宮崎"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルマイステイズ宮崎
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  宮崎
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  宮崎駅西口を出て徒歩1分。毎朝無料で提供される朝食バイキングには宮崎の味覚も並び、駅前バスターミナルへのアクセスも抜群。青島や日南方面への移動に最適です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥3,590</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191643%2F191643.html"
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

        {/* 宿5: ホテルセンチュリー宮崎 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩3分・★4.47圧倒的高評価・上質ステイ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.47</span>
                <span className="text-slate-400 text-xs font-normal">（95件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/12704/12704.jpg"
                  alt="ホテルセンチュリー宮崎"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルセンチュリー宮崎
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  宮崎
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  宮崎駅西口から徒歩約3分。落ち着いたインテリアと丁寧な接客で、レビュー★4.47と圧巻の満足度。ワンランク上の滞在をリーズナブルに楽しめます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥5,500</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12704%2F12704.html"
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
              📊 宮崎駅前：青島・鬼の洗濯板の秋絶景＆本場チキン南蛮！3,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「宮崎駅前：青島・鬼の洗濯板の秋絶景＆本場チキン南蛮！3,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ホテル　ベルフォート日向</td>
                <td className="p-3 text-stone-600">宮崎県日向市上町7-3</td>
                <td className="p-3 text-stone-600">日向駅周辺</td>
                <td className="p-3 text-stone-600">100台　400円/泊(税別）2026年1月1日より駐車場料金が500円税込となります。</td>
                <td className="p-3 font-bold text-amber-600">★3.74（1055件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,434〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F413%2F413.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ホテルマリックスラグーン</td>
                <td className="p-3 text-stone-600">宮崎県宮崎市清水3-105</td>
                <td className="p-3 text-stone-600">宮崎駅周辺</td>
                <td className="p-3 text-stone-600">2024年8月1日より料金改定　１泊/普通車/900円→1,000円</td>
                <td className="p-3 font-bold text-amber-600">★3.94（1928件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F898%2F898.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 都城グリーンホテル</td>
                <td className="p-3 text-stone-600">宮崎県都城市栄町27-2-1</td>
                <td className="p-3 text-stone-600">都城駅周辺</td>
                <td className="p-3 text-stone-600">有り　250台　1台あたり普通車500円・大型車1500円・大型車は要予約</td>
                <td className="p-3 font-bold text-amber-600">★4.23（2749件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,390〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1047%2F1047.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. フェニックス・シーガイア・オーシャン・タワー</td>
                <td className="p-3 text-stone-600">宮崎県宮崎市山崎町浜山</td>
                <td className="p-3 text-stone-600">宮崎駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場をご用意しております（大型車・バスも駐車可能）事前のご予約は不要です。</td>
                <td className="p-3 font-bold text-amber-600">★4.53（4898件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5173%2F5173.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテル日南北郷リゾート</td>
                <td className="p-3 text-stone-600">宮崎県日南市北郷町大字郷之原甲2821-1</td>
                <td className="p-3 text-stone-600">北郷駅周辺</td>
                <td className="p-3 text-stone-600">250台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.14（516件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5370%2F5370.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル　ベルフォート日向</h3>
                  <span className="text-xs text-stone-400 ml-2">（べるふぉーと　ひゅうが）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,434〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/413/413_ro.jpg" alt="ホテル　ベルフォート日向 客室・施設イメージ" className="w-full h-full object-cover" loading="eager" fetchPriority="high" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>日向市街中心部。交通至便。ビジネス、レジャー両対応。婚礼、宴会、会議等の施設も充実。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮崎県日向市上町7-3 ／ 最寄り駅：日向 ／ 交通案内：JR日向市駅徒歩5分。コンビニ1分。市役所4分。市街地中心。光インターネット使い放題。和洋2つのレストランにグルメ満載。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>100台　400円/泊(税別）2026年1月1日より駐車場料金が500円税込となります。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.76 ／ 立地 ★3.74 ／ 部屋 ★3.73 ／ 設備 ★3.67 ／ 風呂 ★3.7</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの対応が親切で部屋も綺麗初めて宿泊させて頂きました。今回は一泊二食させて頂きました。 フロントの方、1階の居酒屋、朝食会場の方も親切な方達ばかりでした。 部屋も綺麗。シャワーだけが少し不満…　2026-10-05 17:56:00投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルマリックスラグーン</h3>
                  <span className="text-xs text-stone-400 ml-2">（まりっくす　らぐーん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/898/898_f.jpg" alt="ホテルマリックスラグーン 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>男女別の大浴場完備。全室Wi-Fi＆有線LAN対応。レディース専用フロアー完備。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮崎県宮崎市清水3-105 ／ 最寄り駅：宮崎 ／ 交通案内：繁華街に徒歩４分！駅から西へまっすぐ車で３分。宮崎西インターより国道１０号線を市内へ車で１０分！</p>
                  <p><strong>【駐車場・マイカー利用】</strong>2024年8月1日より料金改定　１泊/普通車/900円→1,000円</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.96 ／ 立地 ★3.88 ／ 部屋 ★3.87 ／ 設備 ★3.91 ／ 風呂 ★4.05</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉は最高だがネット環境が遅すぎて不満20年以上前から何度も利用させてもらっています。温泉が隣接しているのが最大の魅力です。ただ一点だけ大きな不満点があります。インターネットがとにかく遅い!ネット…　2026-09-28 16:33:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">都城グリーンホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやこのじょう　ぐりーんほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,390〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1047/1047_sgl.jpg" alt="都城グリーンホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>＼朝食高評価／宮崎グルメ満載♪バイキング【近隣ホテル唯一の大浴場】館内浴場・人工炭酸カルシウム温泉！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮崎県都城市栄町27-2-1 ／ 最寄り駅：都城 ／ 交通案内：JR都城駅から徒歩で約5分。宮崎空港よりリムジンバスで約１時間・都城駅バス停下車、徒歩5分。都城インタ－より車で１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　250台　1台あたり普通車500円・大型車1500円・大型車は要予約</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.23 ／ 立地 ★4.08 ／ 部屋 ★4.19 ／ 設備 ★4.18 ／ 風呂 ★4.23 ／ 食事 ★4.41</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「初めて本館泊まったけど、いつもの部屋でいいかな。臭いが気になった。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/104…　2026-10-09 18:36:00投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">フェニックス・シーガイア・オーシャン・タワー</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふぇにっくす・しーがいあ・おーしゃん・たわー）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5173/5173_room.jpg" alt="フェニックス・シーガイア・オーシャン・タワー 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>都会を離れ、心を整える、太陽と海のリゾート</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮崎県宮崎市山崎町浜山 ／ 最寄り駅：宮崎 ／ 交通案内：【宮崎駅利用】車15分、路線バスあり【宮崎空港利用】車30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場をご用意しております（大型車・バスも駐車可能）事前のご予約は不要です。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.46 ／ 立地 ★4.65 ／ 部屋 ★4.64 ／ 設備 ★4.47 ／ 風呂 ★4.39 ／ 食事 ★4.55</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「プールと朝食に大満足、子供たちも大喜びプールが楽しかった。子どもたちも満喫。ただ影になるところが少なく場所が取られていると休めない。お風呂は案内が詳しくあると初回の人も分かりやすいかもです。朝のブ…　2026-10-09 18:42:21投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル日南北郷リゾート</h3>
                  <span className="text-xs text-stone-400 ml-2">（にちなんきたごうりぞーと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5370/5370_room.jpg" alt="ホテル日南北郷リゾート 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>宮崎の奥座敷、天然温泉を生かした山の上のリゾートホテルです。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮崎県日南市北郷町大字郷之原甲2821-1 ／ 最寄り駅：北郷 ／ 交通案内：九州自動車道、日南北郷ＩＣより車で7分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>250台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食の内容は平凡でコスパは良くない朝食付きプランで、そこまで値段は安くないホテルだが、朝食バイキングは大したことなかったです。ビジネスホテルの朝食と変わらない内容でした。コストパフォーマン…　2026-08-26 00:55:32投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！宮崎県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、宮崎県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">高千穂峡（真名井の滝）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">阿蘇山の火砕流が侵食されてできた高さ80m〜100mの断崖が続く渓谷。日本の滝百選「真名井の滝」のすぐ脇を貸しボートで進む神秘的な体験が魅力です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">サンメッセ日南（モアイ像）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">太平洋の青い海を見下ろす丘に世界で唯一イースター島の許可を得て完全復元された7体のモアイ像。南国情緒溢れる映えスポットとして人気を博しています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">青島神社・鬼の洗濯板</h3>
                <p className="text-xs text-stone-600 leading-relaxed">波状の岩肌が島を囲む奇観「鬼の洗濯板」の中心に鎮座する亜熱帯植物に囲まれた神社。縁結びのご利益で知られ、真っ赤な社殿と南国樹木の対比が見事です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">鵜戸神宮（うどじんぐう）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日向灘の断崖絶壁にある天然の洞窟の中に朱塗りの本殿が鎮座する異色の神社。崖下の亀岩の穴に「運玉」を投げ入れる願掛けが名物です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 宮崎県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 宮崎県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <HubRelatedPosts currentSlug="autumn-budget-miyazaki-station-aoshima-chicken-nanban-hotels-stay" />
        </div>

      </main>
  );
}
