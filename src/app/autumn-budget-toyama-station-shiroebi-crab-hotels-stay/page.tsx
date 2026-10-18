import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Star, MapPin, Tag, CheckCircle2, AlertCircle, Utensils, Mountain, Waves, Sparkles, Train } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: "https://croud-travel.pages.dev/autumn-budget-toyama-station-shiroebi-crab-hotels-stay/",
  },

  title: '富山：秋の白えび・紅ズワイガニ満喫！富山駅前の格安・高コスパホテル5選',
  description: '秋の富山湾が誇る極上グルメ「富山湾の宝石・白えび」や旬を迎える紅ズワイガニを堪能！北陸新幹線・富山駅周辺で1泊4,000円台〜泊まれる好立地＆格安おすすめホテル厳選5選。',
  openGraph: {
    title: "富山：秋の白えび・紅ズワイガニ満喫！富山駅前の格安・高コスパホテル5選",
    description: "秋の富山湾が誇る極上グルメ「富山湾の宝石・白えび」や旬を迎える紅ズワイガニを堪能！北陸新幹線・富山駅周辺で1泊4,000円台〜泊まれる好立地＆格安おすすめホテル厳選5選。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "富山：秋の白えび・紅ズワイガニ満喫！富山駅前の格安・高コスパホテル5選",
    description: "秋の富山湾が誇る極上グルメ「富山湾の宝石・白えび」や旬を迎える紅ズワイガニを堪能！北陸新幹線・富山駅周辺で1泊4,000円台〜泊まれる好立地＆格安おすすめホテル厳選5選。",
  }
};

export default function AutumnBudgetToyamaStationHotelsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"富山：秋の白えび・紅ズワイガニ満喫！富山駅前の格安・高コスパホテル5選\",\"description\":\"秋の富山湾が誇る極上グルメ「富山湾の宝石・白えび」や旬を迎える紅ズワイガニを堪能！北陸新幹線・富山駅周辺で1泊4,000円台〜泊まれる好立地＆格安おすすめホテル厳選5選。\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-toyama-station-shiroebi-crab-hotels-stay/\",\"datePublished\":\"2026-10-18T12:00:00+09:00\",\"dateModified\":\"2026-10-19T07:00:00+09:00\",\"author\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド 編集部\",\"url\":\"https://croud-travel.pages.dev/\"},\"publisher\":{\"@type\":\"Organization\",\"name\":\"日本全国・旅宿クラウド\",\"logo\":{\"@type\":\"ImageObject\",\"url\":\"https://croud-travel.pages.dev/icon.png\"}}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"ホーム\",\"item\":\"https://croud-travel.pages.dev/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"特集一覧\",\"item\":\"https://croud-travel.pages.dev/features/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"富山：秋の白えび・紅ズワイガニ満喫！富山駅前の格安・高コスパホテル5選\",\"item\":\"https://croud-travel.pages.dev/autumn-budget-toyama-station-shiroebi-crab-hotels-stay/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"富山：秋の白えび・紅ズワイガニ満喫！富山駅前の格安・高コスパホテル5選\",\"numberOfItems\":10,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"富山城（浮城・安住城）の歴史と散策ハイライト\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-toyama-station-shiroebi-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"アパホテル〈富山駅前南〉\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-toyama-station-shiroebi-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":3,\"name\":\"富山エクセルホテル東急\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-toyama-station-shiroebi-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":4,\"name\":\"ホテルグランテラス富山桜橋通り（ＢＢＨホテルグループ）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-toyama-station-shiroebi-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":5,\"name\":\"富山の奥座敷、秘湯の一軒宿　小川温泉元湯　ホテルおがわ\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-toyama-station-shiroebi-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":6,\"name\":\"大仏旅館＜高岡＞\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-toyama-station-shiroebi-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":7,\"name\":\"立山黒部アルペンルート（雪の大谷）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-toyama-station-shiroebi-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":8,\"name\":\"黒部ダム\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-toyama-station-shiroebi-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":9,\"name\":\"雨晴海岸（あまはらしかいがん）\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-toyama-station-shiroebi-crab-hotels-stay/\"},{\"@type\":\"ListItem\",\"position\":10,\"name\":\"五箇山 合掌造り集落\",\"url\":\"https://croud-travel.pages.dev/autumn-budget-toyama-station-shiroebi-crab-hotels-stay/\"}]}" }} />
      {/* パンくずリスト */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-3 text-xs text-slate-500 flex items-center space-x-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-teal-600 transition">ホーム</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link href="/#autumn-features" className="hover:text-teal-600 transition">秋の特集一覧</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-slate-800 font-medium">富山駅前 白えび・紅ズワイガニ 格安宿5選</span>
        </div>
      </div>

      {/* ヒーローセクション */}
      <section className="relative bg-gradient-to-br from-slate-900 via-sky-950 to-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold tracking-wider border border-sky-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>富山湾の秋海鮮グルメ＆城下町散策</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug">「富山駅前」秋の白えび＆紅ズワイガニを堪能！<br className="hidden sm:inline" />4,000円台〜泊まれる格安・高コスパ宿5選</h1>
          <p className="text-sm md:text-base text-sky-100/90 max-w-2xl mx-auto leading-relaxed">
            秋風が吹き抜ける富山湾は海鮮のベストシーズン。透き通る白えびの刺身や天ぷら、水揚げされたばかりのジューシーな紅ズワイガニ、名物ブラックラーメンまで旨いものが勢揃い。新幹線改札からすぐの好立地に4,000円台〜で泊まり、浮いた予算で贅沢な海鮮三昧を楽しみましょう。
          </p>
        </div>
      </section>

      {/* イントロダクション */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Utensils className="w-5 h-5 text-sky-600" />
            新幹線改札から徒歩数分！宿泊費を抑えて富山湾の旬覚を味わい尽くす
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            北陸新幹線が開通しアクセス抜群となった富山駅前は、ビジネス利用だけでなく観光客向けの快適な設備を備えた優良ホテルが密集しています。大浴場完備ホテルや朝食無料サービス付きホテルも多く、1泊4,000円台〜のリーズナブルな価格設定。富山駅高架下の「とやま駅特選館」やすし玉での舌鼓にも絶好の拠点です。
          </p>
        </div>
      </section>

      {/* 観光地ガイド・公式Wikipedia写真＆解説 */}
      <div className="max-w-4xl mx-auto px-4">
        <section className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-sm mb-10">
          <div className="bg-gradient-to-r from-stone-900 to-stone-800 text-white px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              <h2 className="text-base md:text-lg font-bold tracking-wide">富山城下町ガイド：富山城（富山城址公園）</h2>
            </div>
            <span className="text-[11px] text-stone-300 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/10">地域名所ガイド</span>
          </div>
          <div className="flex flex-col gap-6 p-6">
            <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100 border border-stone-200/60 shadow-inner">
              <Image
                src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a9/Toyama_Municipal_Folk_Museum_%28mock_keep_tower_of_the_Toyama_Castle%29_20180503.jpg/1280px-Toyama_Municipal_Folk_Museum_%28mock_keep_tower_of_the_Toyama_Castle%29_20180503.jpg"
                alt="富山城（富山城址公園）"
                fill
                className="object-cover hover:scale-105 transition duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-2 text-right">
                <span className="text-[10px] text-white/90">写真：Wikimedia Commons</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">富山城（浮城・安住城）の歴史と散策ハイライト</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                富山城（とやまじょう）は、越中国新川郡富山（現在の富山県富山市丸の内）にあった平城。「浮城（うきしろ）」や「安住城」とも称され、続日本100名城の一つに選定されています。秋には公園内の樹木が鮮やかに色づき、水濠に映る天守閣と紅葉のコントラストが美しい市民の憩いの場です。
              </p>
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                <span className="text-sky-700 font-semibold">富山駅から市内電車で約7分</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 宿一覧 */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        {/* 宿1: コンフォートホテル富山駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-md">無料朝食ビュッフェ付き・駅徒歩3分</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.07</span>
                <span className="text-slate-400 text-xs font-normal">（朝食高評価）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/54041/54041.jpg"
                  alt="コンフォートホテル富山駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  コンフォートホテル富山駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富山駅南口より徒歩3分 / 市内電車停留所至近
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  彩り豊かなスープやスムージー、焼きたてパンが並ぶ無料朝食サービスが旅行者に大好評。ウェルカム珈琲や快眠枕のチョイスピローなど、旅の疲れをほぐすきめ細やかな配慮が魅力です。駅前ロータリーからすぐで白えび亭や地酒居酒屋巡りの足回りも良好。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり/朝食込</span>
                    <span className="text-2xl font-black text-rose-600">¥4,300</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54041%2F54041.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿2: アパホテル〈富山駅前南〉 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-md">大型液晶TV完備・機能的快眠空間</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.03</span>
                <span className="text-slate-400 text-xs font-normal">（高機能設備）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/111246/111246.jpg"
                  alt="アパホテル〈富山駅前南〉"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  アパホテル〈富山駅前南〉
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富山駅南口より徒歩7分 / 市役所・城址公園も徒歩圏内
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  快眠性を追求したオリジナルベッド「Cloud fit」や遮光カーテン、大型液晶テレビを標準装備。富山城址公園方面へのアクセスも良く、秋の城下町散歩と駅前海鮮グルメ探訪の双方に便利なロケーションです。コストを抑えつつ快適に眠りたい旅にぴったり。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥4,500</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111246%2F111246.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿3: 東横ＩＮＮ富山駅新幹線口１ */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-md">新幹線口すぐ・健康無料朝食</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.02</span>
                <span className="text-slate-400 text-xs font-normal">（駅チカ安心感）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/108377/108377.jpg"
                  alt="東横ＩＮＮ富山駅新幹線口１"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  東横ＩＮＮ富山駅新幹線口１
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富山駅新幹線改札口より徒歩約2分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  新幹線を下りて迷わず到着できる圧倒的アクセス性。手作りおにぎりやお惣菜、お味噌汁が付いた無料の朝食バイキングで、朝のエネルギーチャージもばっちり。チェックイン前後の手荷物預かりもスムーズで、身軽に富山湾グルメ巡りを楽しめます。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込</span>
                    <span className="text-2xl font-black text-rose-600">¥4,778</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108377%2F108377.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿4: ホテルアルファーワン富山駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-md">富山駅正面・大浴場・サウナ完備</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>3.99</span>
                <span className="text-slate-400 text-xs font-normal">（サウナ付き大浴場）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/15287/15287.jpg"
                  alt="ホテルアルファーワン富山駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルアルファーワン富山駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富山駅南口より徒歩わずか1分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  館内には手足を伸ばして温まれる大浴場とサウナを完備。富山駅南口広場の目の前という最高の立地で、夜遅くまで地魚と地酒を味わった後もすぐに部屋に戻れる安心感があります。清潔で機能的な客室設計で一人旅から連泊まで心強い味方です。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊素泊まり</span>
                    <span className="text-2xl font-black text-rose-600">¥6,150</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15287%2F15287.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>

        {/* 宿5: ホテルルートイン富山駅前 */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
          <div className="p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <span className="px-2.5 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-md">ラジウム人工温泉大浴場・バイキング朝食無料</span>
              <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>4.04</span>
                <span className="text-slate-400 text-xs font-normal">（大浴場＆朝食）</span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="https://img.travel.rakuten.co.jp/share/HOTEL/2101/2101.jpg"
                  alt="ホテルルートイン富山駅前"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  ホテルルートイン富山駅前
                </h3>
                <p className="text-xs text-slate-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                  JR富山駅南口より徒歩3分
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  旅の夜を心地よく癒やす「ラジウム人工温泉大浴場」を完備。さらに和洋の多彩なメニューが揃う無料バイキング朝食が付いており、コスパの高さは申し分ありません。清潔感あふれる空間と行き届いた接客で、富山観光の拠点として高いリピート率を誇ります。
                </p>
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                  <span className="text-xs font-bold text-slate-700 block mb-1">宿泊プラン目安</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">1名1泊朝食込・大浴場利用無料</span>
                    <span className="text-2xl font-black text-rose-600">¥6,750</span>
                    <span className="text-xs text-slate-500">〜（税込）</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2101%2F2101.html"
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-center rounded-xl shadow-md transition transform active:scale-[0.99]"
              >
                楽天トラベルで空室・最安料金を確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* まとめ */}
      <section className="max-w-4xl mx-auto px-4 mt-12">
        <div className="bg-gradient-to-br from-slate-900 to-sky-950 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold flex items-center gap-2 text-sky-300">
            <CheckCircle2 className="w-5 h-5" />
            秋の富山旅行を格安に賢く楽しむポイント
          </h2>
          <ul className="space-y-2 text-sm text-sky-100/90 leading-relaxed">
            <li>・富山駅前は新幹線改札から徒歩5分以内に優良格安ホテルが密集しており、移動の負担が最小限。</li>
            <li>・白えびの旬やかき揚げ丼、解禁された紅ズワイガニは富山駅前・とやま方舟やきときと市場で堪能可能。</li>
            <li>・富山城址公園や富山環水公園へも市内電車（路面電車）1本でアクセスでき、秋の紅葉散歩に最適。</li>
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
              📊 富山：秋の白えび・紅ズワイガニ満喫！富山駅前の格安・高コスパホテル5選：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「富山：秋の白えび・紅ズワイガニ満喫！富山駅前の格安・高コスパホテル5選」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. アパホテル〈富山駅前南〉</td>
                <td className="p-3 text-stone-600">富山県富山市桜町1-5-20</td>
                <td className="p-3 text-stone-600">富山駅周辺</td>
                <td className="p-3 text-stone-600">【有】NPC富山駅前スクエア</td>
                <td className="p-3 font-bold text-amber-600">★4.04（1853件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111246%2F111246.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 富山エクセルホテル東急</td>
                <td className="p-3 text-stone-600">富山県富山市新富町1-2-3</td>
                <td className="p-3 text-stone-600">富山駅周辺</td>
                <td className="p-3 text-stone-600">有り【契約駐車場（徒歩約1〜2分）】1400円　（14:00〜翌日11:00／１泊）</td>
                <td className="p-3 font-bold text-amber-600">★4.26（2725件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F520%2F520.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテルグランテラス富山桜橋通り（ＢＢＨホテルグループ）</td>
                <td className="p-3 text-stone-600">富山県富山市桜橋通り2-28</td>
                <td className="p-3 text-stone-600">富山駅周辺</td>
                <td className="p-3 text-stone-600">先着順地下30台、提携駐車場＝河口ビル　各１泊税込1100円、バスは事前連絡要、トラック不可</td>
                <td className="p-3 font-bold text-amber-600">★3.84（2122件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,680〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1552%2F1552.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 富山の奥座敷、秘湯の一軒宿　小川温泉元湯　ホテルおがわ</td>
                <td className="p-3 text-stone-600">富山県下新川郡朝日町湯ノ瀬１</td>
                <td className="p-3 text-stone-600">泊（富山）駅周辺</td>
                <td className="p-3 text-stone-600">有り　１００台　無料　北陸自動車道朝日ＩＣより１５分。</td>
                <td className="p-3 font-bold text-amber-600">★4.2（887件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1971%2F1971.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 大仏旅館＜高岡＞</td>
                <td className="p-3 text-stone-600">富山県高岡市大仏町1276</td>
                <td className="p-3 text-stone-600">高岡駅周辺</td>
                <td className="p-3 text-stone-600">有り　15台　無料（先着順）</td>
                <td className="p-3 font-bold text-amber-600">★4.5（167件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4657%2F4657.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">アパホテル〈富山駅前南〉</h3>
                  <span className="text-xs text-stone-400 ml-2">（あぱほてる〈とやまえきまえみなみ〉）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/111246/111246_smd.jpg" alt="アパホテル〈富山駅前南〉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>北陸新幹線 / あいの風とやま鉄道【富山駅】より徒歩3分　全室140cm幅ベッドで安眠約束</p>
                  <p><strong>【所在地・アクセス】</strong>〒 富山県富山市桜町1-5-20 ／ 最寄り駅：富山 ／ 交通案内：■北陸新幹線 / あいの風とやま鉄道【富山駅】より徒歩3分■北陸道「富山IC」より車で約15分　旅の拠点となる立地</p>
                  <p><strong>【駐車場・マイカー利用】</strong>【有】NPC富山駅前スクエア</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.13 ／ 立地 ★4.17 ／ 部屋 ★4.07 ／ 設備 ★4.06 ／ 風呂 ★3.94 ／ 食事 ★3.98</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅前で立地と交通の便が良くリピート決定駅前なので立地も良く交通の便も良いので、リピートしました!クチコミの詳細はこちらから　https://review.travel.rakuten.co.j…　2026-10-08 11:03:30投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">富山エクセルホテル東急</h3>
                  <span className="text-xs text-stone-400 ml-2">（とやまえくせる　とうきゅう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/520/520_kan.jpg" alt="富山エクセルホテル東急 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>富山駅から徒歩3分。立山黒部アルペンルート観光やビジネスの拠点に最適です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 富山県富山市新富町1-2-3 ／ 最寄り駅：富山 ／ 交通案内：★ＪＲ富山駅前（CICビル）徒歩3分◆富山空港よりバス20分・空港バス停留所徒歩1分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り【契約駐車場（徒歩約1〜2分）】1400円　（14:00〜翌日11:00／１泊）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.28 ／ 立地 ★4.36 ／ 部屋 ★4.25 ／ 設備 ★4.19 ／ 風呂 ★4.09 ／ 食事 ★4.24</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋にミネラルウォーターのサービスがない部屋に入り、驚いたのはミネラルウォーターのサービスがない事です。月一は出張や家族旅行でホテルを使用しますが、部屋にミネラルウォーターのサービスがなかったのは…　2026-10-10 21:15:18投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルグランテラス富山桜橋通り（ＢＢＨホテルグループ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるぐらんてらすとやまさくらばしどおり　びーびーえっちほてるぐるーぷ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,680〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1552/1552_twn.jpg" alt="ホテルグランテラス富山桜橋通り（ＢＢＨホテルグループ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>● おいしい朝食が人気のシティホテル●ウェルカムドリンクサービス始めました♪●コインランドリー新設</p>
                  <p><strong>【所在地・アクセス】</strong>〒 富山県富山市桜橋通り2-28 ／ 最寄り駅：富山 ／ 交通案内：●富山駅南口から徒歩約6分（市内路面電車「電気ビル前」正面）●富山ICから車で20分●富山空港から車で20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>先着順地下30台、提携駐車場＝河口ビル　各１泊税込1100円、バスは事前連絡要、トラック不可</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.92 ／ 立地 ★3.89 ／ 部屋 ★3.74 ／ 設備 ★3.72 ／ 風呂 ★3.68 ／ 食事 ★3.79</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「可もなく不可もなく、無難に過ごせたまぁまぁ良かったです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/1552?r…　2026-09-18 15:34:40投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">富山の奥座敷、秘湯の一軒宿　小川温泉元湯　ホテルおがわ</h3>
                  <span className="text-xs text-stone-400 ml-2">（とやまのおくざしき　ひとうのいっけんやど　おがわおんせんもとゆ　ほてるおがわ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1971/1971_heya.jpg" alt="富山の奥座敷、秘湯の一軒宿　小川温泉元湯　ホテルおがわ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>開湯400周年を優に超える越中四名湯にも数えられた歴史ある小川温泉　山間の一軒宿　ホテルおがわ</p>
                  <p><strong>【所在地・アクセス】</strong>〒 富山県下新川郡朝日町湯ノ瀬１ ／ 最寄り駅：泊（富山） ／ 交通案内：北陸自動車道朝日インター下車２０分。無料送迎サービスあり（北陸新幹線黒部宇奈月温泉駅、あいの風鉄道泊駅）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１００台　無料　北陸自動車道朝日ＩＣより１５分。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.32 ／ 立地 ★4.31 ／ 部屋 ★4.34 ／ 設備 ★3.96 ／ 風呂 ★4.3 ／ 食事 ★4.12</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「50年ぶりの再訪、食事と温泉に感激!50年ぶりに泊まらせていただきましたが、昔とはお風呂が変わっていましたが懐かしくて感激しました!夕食のすき焼きのお肉がとても美味しく、朝食も大満足でした。大…　2026-10-10 23:17:27投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">大仏旅館＜高岡＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（だいぶつりょかん＜たかおか＞）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4657/4657_heya.jpg" alt="大仏旅館＜高岡＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>安らぐ富山の昔ながらの旅館。 高岡大仏まで徒歩約1分！朝夕食共に個室食またはお部屋食</p>
                  <p><strong>【所在地・アクセス】</strong>〒 富山県高岡市大仏町1276 ／ 最寄り駅：高岡 ／ 交通案内：JR高岡駅北口より徒歩約6分。お車の場合、能越自動車道　高岡ICから約15分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　15台　無料（先着順）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「大仏旅館＜高岡＞は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！富山県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、富山県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Mount_Tate_viewed_from_Midorigaike.jpg/1280px-Mount_Tate_viewed_from_Midorigaike.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="立山黒部アルペンルート（雪の大谷）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">立山黒部アルペンルート（雪の大谷）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">標高3,000m級の立山連峰を貫く世界有数の山岳観光ルート。春には積雪を吹き破って開通する高さ20mに迫る巨大な「雪の大谷」の壁の中を歩けます。 立山（たてやま）は、富山県の飛騨山脈（北アルプス）北部にある山。中部山岳国立公園に属する。雄山（おやま、標高3,003メートル）、大汝山（おおなんじやま、3,015メートル）、富士ノ折立（ふじのおりたて、2,999メートル）の三つの峰からなる。富山県の最高峰であり、日本海に面する道府県の最高峰である。また、日本の3,000メートル級の山としては最北端に位置す…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">黒部ダム</h3>
                <p className="text-xs text-stone-600 leading-relaxed">高さ186mを誇る日本一のアーチ式コンクリートダム。毎秒10トン以上の水が激しく吹き出す毎夏の観光放水は息をのむ大迫力です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">雨晴海岸（あまはらしかいがん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富山湾越しに標高3,000m級の立山連峰を望む奇跡の絶景スポット。女岩と冠雪した立山連峰のシルエットは世界でも類を見ない美しさです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">五箇山 合掌造り集落</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界文化遺産に登録されている相倉・菅沼の合掌造り集落。急傾斜の茅葺き屋根と昔ながらの日本の原風景が山深い静寂の中にひっそりと息づいています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 富山県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 富山県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <HubRelatedPosts currentSlug="autumn-budget-toyama-station-shiroebi-crab-hotels-stay" />
        </div>

      </main>
  );
}
