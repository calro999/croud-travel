import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-station-ritsurin-udon-hotels-stay/",
  },

  title: '高松駅前：特別名勝栗林公園秋ライトアップ＆本場讃岐うどん！3,000円台〜泊まれる格安ホテル5選',
  description: '一歩一景の大名庭園・栗林公園の秋の紅葉ライトアップ！朝から並ぶ本場讃岐うどんの名店巡りや名物骨付鳥。JR予讃線・高松駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。',
  openGraph: {
    title: "高松駅前：特別名勝栗林公園秋ライトアップ＆本場讃岐うどん！3,000円台〜泊まれる格安ホテル5選",
    description: "一歩一景の大名庭園・栗林公園の秋の紅葉ライトアップ！朝から並ぶ本場讃岐うどんの名店巡りや名物骨付鳥。JR予讃線・高松駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "高松駅前：特別名勝栗林公園秋ライトアップ＆本場讃岐うどん！3,000円台〜泊まれる格安ホテル5選",
    description: "一歩一景の大名庭園・栗林公園の秋の紅葉ライトアップ！朝から並ぶ本場讃岐うどんの名店巡りや名物骨付鳥。JR予讃線・高松駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。",
  }
};

export default function AutumnBudgetHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"高松駅前：特別名勝栗林公園秋ライトアップ＆本場讃岐うどん！3,000円台〜泊まれる格安ホテル5選\",\"description\":\"一歩一景の大名庭園・栗林公園の秋の紅葉ライトアップ！朝から並ぶ本場讃岐うどんの名店巡りや名物骨付鳥。JR予讃線・高松駅周辺で1泊3,000円台〜泊まれる超高コスパ格安ホテル厳選5選。\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-station-ritsurin-udon-hotels-stay/\",\"datePublished\":\"2026-10-18T12:00:00+09:00\",\"dateModified\":\"2026-10-19T07:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド 編集部\",\"url\":\"https://croud-travel.pages.dev/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://croud-travel.pages.dev/icon.png\"}}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://croud-travel.pages.dev/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"特集一覧\",\"item\":\"https://croud-travel.pages.dev/features/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"高松駅前：特別名勝栗林公園秋ライトアップ＆本場讃岐うどん！3,000円台〜泊まれる格安ホテル5選\",\"item\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-station-ritsurin-udon-hotels-stay/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"高松駅前：特別名勝栗林公園秋ライトアップ＆本場讃岐うどん！3,000円台〜泊まれる格安ホテル5選\",\"numberOfItems\":10,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"紫雲山を借景にした六つの池と十三の築山・秋の夜を彩る幻想的ライトアップ\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-station-ritsurin-udon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"平日泊で更なる割引\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-station-ritsurin-udon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"直前割＆早割を活用\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-station-ritsurin-udon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"浮いた予算で旬の味覚\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-station-ritsurin-udon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":5,\"name\":\"ハイパーイン高松駅前\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-station-ritsurin-udon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":6,\"name\":\"ＡＬＰＨＡＢＥＤ　ＩＮＮ　高松駅前\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-station-ritsurin-udon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":7,\"name\":\"ホテルリブマックス高松駅前\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-station-ritsurin-udon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":8,\"name\":\"東横ＩＮＮ高松駅前\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-station-ritsurin-udon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":9,\"name\":\"ＫＯＫＯ　ＨＯＴＥＬ　高松\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-station-ritsurin-udon-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":10,\"name\":\"栗林公園（りつりんこうえん）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-kagawa-takamatsu-station-ritsurin-udon-hotels-stay/\"}]}" }} />
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-amber-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">高松駅前 栗林公園・讃岐うどん 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-amber-950 via-stone-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wider border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>大名庭園栗林公園の紅葉ライトアップ＆早朝本場讃岐うどん</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「高松駅前」栗林公園紅葉＆本場讃岐うどん！<br className="hidden sm:inline" />3,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-amber-100/90 max-w-2xl mx-auto leading-relaxed">
            ミシュラン三ツ星の特別名勝「栗林公園（りつりんこうえん）」。秋の夜を黄金に照らす紅葉ライトアップと南湖の和船。早朝から茹でたてのコシを味わう「本場讃岐うどん」の名店巡りや、スパイシーでジューシーな香川名物「骨付鳥」に舌鼓！高松駅周辺で3,000円台〜泊まれる優良ホテルを厳選。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-600" />
            サンポート高松や兵庫町商店街至近の格安宿が集結！浮いた予算で讃岐うどん3軒ハシゴや骨付鳥を満喫
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            四国の玄関口・高松駅周辺は、瀬戸内海のフェリー乗り場や日本一長いアーケード商店街へ歩いて行ける抜群の立地。大浴場付きホテルやスタイリッシュなデザイナーズホテルが、秋の平日なら1泊3,000円台〜4,000円台で予約可能。浮いた予算で「一鶴」の骨付鳥や小豆島フェリー日帰り旅をゆったり楽しめます。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">一歩一景の美を誇る大名庭園：栗林公園（南湖と偃月橋）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">国の特別名勝・大名庭園ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Ritsurin.JPG/1280px-Ritsurin.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                alt="一歩一景の美を誇る大名庭園：栗林公園（南湖と偃月橋）"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">紫雲山を借景にした六つの池と十三の築山・秋の夜を彩る幻想的ライトアップ</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                栗林公園（りつりんこうえん）は、香川県高松市にある江戸時代初期に讃岐高松藩主・生駒氏や松平氏によって築かれた大名庭園。国の特別名勝に指定され、「一歩一景」と称される変化に富んだ景観を誇ります。秋には楓岸（ふうがん）のカエデや掬月亭の周りが鮮やかに色づき、紅葉ライトアップ期間中には南湖に浮かぶ和船から幻想的な逆さ紅葉を眺めることができます。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-amber-700 font-semibold">JR高松駅より琴電バス約10分（栗林公園前下車）またはことでん栗林公園駅徒歩10分</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: ハイパーイン高松駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">驚きの最安3,570円〜・高松駅徒歩2分・デザイナーズ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.89</span>
                <span className="text-slate-400 text-xs font-normal">（720件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/167674/167674.jpg"
                  alt="ハイパーイン高松駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ハイパーイン高松駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  高松（香川）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  JR高松駅から徒歩わずか2分。1名1泊3,570円〜のリーズナブルな価格ながら、おしゃれで広々としたデザイナーズ空間を提供。早朝のフェリー乗船や朝うどんツアーの拠点にぴったりです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥4,700</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167674%2F167674.html"
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

        {/* 宿2: ＡＬＰＨＡＢＥＤ　ＩＮＮ　高松駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">最安4,250円〜・駅前通り沿い・シモンズベッド完備</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.12</span>
                <span className="text-slate-400 text-xs font-normal">（91件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/172707/172707.jpg"
                  alt="ＡＬＰＨＡＢＥＤ　ＩＮＮ　高松駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ＡＬＰＨＡＢＥＤ　ＩＮＮ　高松駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  高松（香川）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  高松駅南口から歩いてすぐの好立地。全室にシモンズ社製ベッドを導入し、旅の歩き疲れを心地よく癒せます。宿泊費を抑えて香川のうどん店ハシゴや地酒ディナーを満喫できます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥3,570</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172707%2F172707.html"
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

        {/* 宿3: ホテルリブマックス高松駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">兵庫町アーケードすぐ・★4.47高評価・洗練ステイ</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.73</span>
                <span className="text-slate-400 text-xs font-normal">（197件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/182568/182568.jpg"
                  alt="ホテルリブマックス高松駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルリブマックス高松駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  高松（香川）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  高松のメインアーケード「兵庫町商店街」近くに位置。シックで洗練されたインテリアと快適な客室設備で、レビュー★4.47と圧巻の高評価。有名うどん店や骨付鳥の一鶴へも歩いて行けます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥4,250</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182568%2F182568.html"
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

        {/* 宿4: 東横ＩＮＮ高松駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩3分・無料朝食バイキング・★3.89</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.29</span>
                <span className="text-slate-400 text-xs font-normal">（234件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/193287/193287.jpg"
                  alt="東横ＩＮＮ高松駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ高松駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  高松（香川）
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  高松駅前から徒歩約3分。毎朝無料で提供される朝食バイキングや親切な接客が好評で、安定感のあるビジネス・観光ステイをリーズナブルに楽しめます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥5,828</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F193287%2F193287.html"
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

        {/* 宿5: ＫＯＫＯ　ＨＯＴＥＬ　高松 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">駅前徒歩1分・2023年オープン最新東横INN・★4.29</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.47</span>
                <span className="text-slate-400 text-xs font-normal">（556件のクチコミ）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/181859/181859.jpg"
                  alt="ＫＯＫＯ　ＨＯＴＥＬ　高松"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ＫＯＫＯ　ＨＯＴＥＬ　高松
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  瓦町
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  高松駅前に誕生した最新の東横イン。改札を出てすぐの絶好の立地と、充実した無料朝食サービスが魅力。★4.29の高評価を獲得する安心の定番ホテルです。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊目安</span>
                    <span className="text-2xl font-black text-rose-600">¥4,440</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181859%2F181859.html"
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
              📊 高松駅前：特別名勝栗林公園秋ライトアップ＆本場讃岐うどん！3,000円台〜泊まれる格安ホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「高松駅前：特別名勝栗林公園秋ライトアップ＆本場讃岐うどん！3,000円台〜泊まれる格安ホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ハイパーイン高松駅前</td>
                <td className="p-3 text-stone-600">香川県高松市西の丸町10-17</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">当館平面駐車場900円(予約不可)、近隣コインP500円〜</td>
                <td className="p-3 font-bold text-amber-600">★3.88（722件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167674%2F167674.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ＡＬＰＨＡＢＥＤ　ＩＮＮ　高松駅前</td>
                <td className="p-3 text-stone-600">香川県高松市西内町2-6</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">専用駐車場なし。ホテル目の前にコインパーキングあり</td>
                <td className="p-3 font-bold text-amber-600">★4.12（91件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,570〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172707%2F172707.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテルリブマックス高松駅前</td>
                <td className="p-3 text-stone-600">香川県高松市錦町1-8-9</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">無し※近隣にコインパーキング多数あり！</td>
                <td className="p-3 font-bold text-amber-600">★3.73（197件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182568%2F182568.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 東横ＩＮＮ高松駅前</td>
                <td className="p-3 text-stone-600">香川県高松市錦町1-1-6</td>
                <td className="p-3 text-stone-600">高松（香川）駅周辺</td>
                <td className="p-3 text-stone-600">有り　101台　1000円/泊　平置き7台(予約制)　　機械式：94台(先着順)</td>
                <td className="p-3 font-bold text-amber-600">★4.29（236件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,828〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F193287%2F193287.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ＫＯＫＯ　ＨＯＴＥＬ　高松</td>
                <td className="p-3 text-stone-600">香川県高松市瓦町2丁目2-3</td>
                <td className="p-3 text-stone-600">瓦町駅周辺</td>
                <td className="p-3 text-stone-600">なし。徒歩圏内に提携駐車場あり(予約不可)。フロントにて割引券販売 ※途中出庫不可</td>
                <td className="p-3 font-bold text-amber-600">★4.47（558件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,160〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181859%2F181859.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ハイパーイン高松駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（はいぱーいんたかまつえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/167674/167674.jpg" alt="ハイパーイン高松駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR高松駅南口より徒歩３分の好立地、観光・ビジネスにも最適です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市西の丸町10-17 ／ 最寄り駅：高松（香川） ／ 交通案内：ＪＲ　高松駅南口より徒歩にて3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>当館平面駐車場900円(予約不可)、近隣コインP500円〜</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.96 ／ 立地 ★4.04 ／ 部屋 ★3.77 ／ 設備 ★3.67 ／ 風呂 ★3.64 ／ 食事 ★3.92</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で便利だが設備と価格のバランスが惜しい香川出張で利用しました。高松駅から徒歩4〜5分、すぐ近くにミニストップもあり立地は非常に便利です。スタッフの対応も丁寧で、部屋も清潔でした。ただ、…　2026-10-06 23:48:35投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＡＬＰＨＡＢＥＤ　ＩＮＮ　高松駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（あるふぁべっどいん　たかまつえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,570〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/172707/172707_kan1.jpg" alt="ＡＬＰＨＡＢＥＤ　ＩＮＮ　高松駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>高松駅徒歩５分、あなぶきアリーナにもほど近いグループステイにおすすめのホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市西内町2-6 ／ 最寄り駅：高松（香川） ／ 交通案内：高松駅より徒歩にて約３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>専用駐車場なし。ホテル目の前にコインパーキングあり</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.76 ／ 立地 ★4.18 ／ 部屋 ★4.18 ／ 設備 ★3.82</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋は綺麗で駅近、エレベーターなしが難点3階に宿泊しました。部屋はリフォーム済でキレイでしたが、エレベーターがなかったので荷物を運ぶのが大変でした。駅から近くてリーズナブルなので、また…　2026-09-30 06:19:23投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルリブマックス高松駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるりぶまっくすたかまつえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/182568/182568.jpg" alt="ホテルリブマックス高松駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【2021年OPEN】高松駅徒歩5分　クチコミ4.2　Wi-Fi完備「ワーキングスペース」OPEN</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市錦町1-8-9 ／ 最寄り駅：高松（香川） ／ 交通案内：JR各線「高松」駅 徒歩5分　フェリー高松港徒歩7分　ことでん高松築港駅徒歩6分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無し※近隣にコインパーキング多数あり！</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.81 ／ 立地 ★3.96 ／ 部屋 ★3.88 ／ 設備 ★3.77 ／ 風呂 ★3.83</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「親切なスタッフと分かりやすい案内スタッフの皆さんが親切で、案内が分かりやすい。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/v…　2026-06-02 10:54:25投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">東横ＩＮＮ高松駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（とうよこいんたかまつえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,828〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/193287/193287.jpg" alt="東横ＩＮＮ高松駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>25年3月に東横INNがNEWオープン！高松駅から徒歩圏内の好立地</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市錦町1-1-6 ／ 最寄り駅：高松（香川） ／ 交通案内：JR高徳線・予讃線「高松駅」南口徒歩5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　101台　1000円/泊　平置き7台(予約制)　　機械式：94台(先着順)</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.26 ／ 立地 ★4.26 ／ 部屋 ★4.38 ／ 設備 ★4.25 ／ 風呂 ★4.17 ／ 食事 ★4.13</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で便利、部屋もきれいで朝食も美味駅から近く便利でした。お部屋もきれいで朝食も美味しかったです。クチコミの詳細はこちらから　https://review.travel.rakuten.c…　2026-09-28 18:30:11投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＫＯＫＯ　ＨＯＴＥＬ　高松</h3>
                  <span className="text-xs text-stone-400 ml-2">（ここ　ほてる　たかまつ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,160〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/181859/181859.jpg" alt="ＫＯＫＯ　ＨＯＴＥＬ　高松 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>瓦町駅徒歩２分♪バス・トイレ独立で快適な滞在をぜひ。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県高松市瓦町2丁目2-3 ／ 最寄り駅：瓦町 ／ 交通案内：琴平電鉄（ことでん）琴平線・長尾線　瓦町駅より徒歩2分。高松空港リムジンバス「高松駅行き」乗車、「瓦町駅」降車、徒歩2分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>なし。徒歩圏内に提携駐車場あり(予約不可)。フロントにて割引券販売 ※途中出庫不可</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.49 ／ 立地 ★4.4 ／ 部屋 ★4.47 ／ 設備 ★4.43 ／ 風呂 ★4.42 ／ 食事 ★4.32</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で清潔、お風呂も広くて快適な空間瓦町駅からとても近く、周りが飲食街で夕食には困らない。新しいホテルで清潔で快適。風呂とトイレが別々なのも良い。お風呂はとても広く快適。ただ、洗面所がとても狭く使…　2026-10-09 06:45:31投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=181859&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！香川県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、香川県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">栗林公園（りつりんこうえん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「一歩一景」と称される特別名勝の大名庭園。紫雲山を背景に6つの池と13の築山が配置され、手入れの行き届いた1,400本の松の緑が美しく広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">金刀比羅宮（こんぴらさん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「さぬきのこんぴらさん」として親しまれる海の守護神。御本宮まで785段、奥社まで1,368段の石段参道を登る参拝と門前の讃岐うどん巡りが人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">小豆島（エンジェルロード・オリーブ公園）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">瀬戸内海に浮かぶオリーブの島。引き潮の時にだけ海の中から現れる砂の道「エンジェルロード」や、ギリシャ風車が映えるオリーブ公園がロマンチックです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">直島（現代アートの島）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">草間彌生氏の「赤かぼちゃ」「黄かぼちゃ」や地中美術館など、自然と現代アートが融和した世界的に有名なアートの聖地。自転車で島内散策が楽しめます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 香川県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 香川県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <HubRelatedPosts currentSlug="autumn-budget-kagawa-takamatsu-station-ritsurin-udon-hotels-stay" />
        </div>

      </main>
  );
}
