import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  ChevronRight,
  ExternalLink,
  MapPin,
  Calendar,
  Sparkles,
  Star,
  CheckCircle2,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "霧島連山樹氷と西郷隆盛癒やしの白鳥温泉：2026-2027年冬の宮崎・えびの＆小林！最高峰宮崎牛名宿5選 ｜ 日本全国・旅宿クラウド",
  description: "標高1,200mの白銀世界が広がるえびの高原の樹氷と白鳥神社新春初詣！西郷どんが愛した名湯「白鳥温泉」の展望露天と天然蒸し風呂、日本一の栄冠に輝く最高峰「宮崎牛」極上すき焼きに心満たされる南国宮崎の冬名宿5選。",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-miyazaki-ebino-plateau-shiratori-onsen-miyazakigyu-stay",
  },
  openGraph: {
    title: "霧島連山樹氷と西郷隆盛癒やしの白鳥温泉：2026-2027年冬の宮崎・えびの＆小林！最高峰宮崎牛名宿5選",
    description: "標高1,200mの白銀世界が広がるえびの高原の樹氷と白鳥神社新春初詣！西郷どんが愛した名湯「白鳥温泉」の展望露天と天然蒸し風呂、日本一の栄冠に輝く最高峰「宮崎牛」極上すき焼きに心満たされる南国宮崎の冬名宿5選。",
    url: "https://croud-travel.pages.dev/winter-miyazaki-ebino-plateau-shiratori-onsen-miyazakigyu-stay",
    siteName: "日本全国・旅宿クラウド",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "https://img.travel.rakuten.co.jp/share/HOTEL/142559/142559.jpg",
        width: 1200,
        height: 630,
        alt: "【霧島連山樹氷と西郷隆盛癒やしの白鳥温泉】2026-2027年冬の宮崎・えびの＆小林！最高峰宮崎牛名宿5選",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "霧島連山樹氷と西郷隆盛癒やしの白鳥温泉：2026-2027年冬の宮崎・えびの＆小林！最高峰宮崎牛名宿5選",
    description: "標高1,200mの白銀世界が広がるえびの高原の樹氷と白鳥神社新春初詣！西郷どんが愛した名湯「白鳥温泉」の展望露天と天然蒸し風呂、日本一の栄冠に輝く最高峰「宮崎牛」極上すき焼きに心満たされる南国宮崎の冬名宿5選。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/142559/142559.jpg"],
  },
};

export const dynamic = "force-static";

export default function FeaturePage() {
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "えびの高原への道路（県道1号えびのスカイライン）は冬期チェーン規制になりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "寒波が到来した際や降雪時には、冬用タイヤ規制（スタッドレスタイヤまたはタイヤチェーン携行）が実施される場合があります。冬期にえびの高原へマイカーやレンタカーで向かう際は、事前に宮崎県道路規制情報等を確認し、冬用タイヤを装備した車両をご利用ください。麓の京町温泉エリアは平野部のため積雪は稀です。"
      }
    },
    {
      "@type": "Question",
      "name": "白鳥温泉（上湯・下湯）は日帰り入浴でも利用できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、白鳥温泉上湯・下湯ともに日帰り温泉施設が併設されており、大人数百円の手頃な料金で名湯を利用できます。上湯の天然蒸し風呂や絶景展望露天、下湯の緑に囲まれた大浴場をそれぞれ入り比べるのも冬の人気の過ごし方です。"
      }
    },
    {
      "@type": "Question",
      "name": "宮崎牛を一番美味しく味わうためのおすすめの食べ方は何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "冬の時期は、甘辛い割り下でサッと煮てブランド卵にくぐらせる「宮崎牛のすき焼き」が格別です。また、きめ細やかなサシの甘みをダイレクトに楽しむサーロインステーキや炭火焼きも絶品。地元の焼酎（芋焼酎・米焼酎）と合わせることで、肉の旨味がさらに引き立ちます。"
      }
    }
  ]
};
  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "ホーム",
      "item": "https://croud-travel.pages.dev/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "特集一覧",
      "item": "https://croud-travel.pages.dev/features"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "宮崎県の宿",
      "item": "https://croud-travel.pages.dev/prefectures/miyazaki"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "【霧島連山樹氷と西郷隆盛癒やしの白鳥温泉】2026-2027年冬の宮崎・えびの＆小林！最高峰宮崎牛名宿5選",
      "item": "https://croud-travel.pages.dev/winter-miyazaki-ebino-plateau-shiratori-onsen-miyazakigyu-stay"
    }
  ]
};
  const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "霧島連山の秀峰と白銀パノラマ・えびの高原",
  "description": "えびの高原（えびのこうげん）は、九州南部に連なる霧島山の韓国岳、蝦野岳、白鳥山、甑岳に囲まれた盆地状の高原である。",
  "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Ebino_Plateau.jpg/1280px-Ebino_Plateau.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />

      <main className="min-h-screen bg-stone-50 pb-20">
        {/* パンくずリスト */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-5xl mx-auto px-4 py-4 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap"
        >
          <Link href="/" className="hover:text-stone-900 transition-colors">
            ホーム
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <Link href="/features" className="hover:text-stone-900 transition-colors">
            特集一覧
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <Link
            href="/prefectures/miyazaki"
            className="hover:text-stone-900 transition-colors"
          >
            宮崎県
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-xs sm:max-w-md">
            【霧島連山樹氷と西郷隆盛癒やしの白鳥温泉】2026-2027年冬の宮崎・えびの＆小林！最高峰宮崎牛名宿5選
          </span>
        </nav>

        {/* ヒーローセクション */}
        <header className="relative bg-gradient-to-b from-stone-900 to-stone-800 text-white py-12 md:py-20 mb-10">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-full font-semibold">
                2026-2027年 冬季厳選特集
              </span>
              <span className="bg-white/10 text-stone-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                えびの高原・生駒高原・小林（宮崎県）
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">「霧島連山樹氷と西郷隆盛癒やしの白鳥温泉」2026-2027年冬の宮崎・えびの＆小林！最高峰宮崎牛名宿5選</h1>

            <div className="space-y-3 pt-3 max-w-3xl text-stone-200 text-sm sm:text-base leading-relaxed sm:leading-loose">
              <p>南国宮崎のイメージを覆す、標高約1,200mの白銀世界が広がる霧島連山の北部「えびの高原」。日本初の国立公園に指定されたこの大自然は、11月から1月の冬期を迎えると、名峰・韓国岳（からくにだけ）や白鳥山を取り囲む木々が真っ白な霧氷（樹氷）で覆われ、どこまでも澄み渡る群青の空との圧倒的なコントラストを現出します。日本最南端の屋外アイススケート場としても知られ、冬ならではのアクティビティと絶景を楽しむ人々を魅了。そして高原の山懐に湧くのが、明治の英傑・西郷隆盛が逗留して心身の傷を癒やしたと伝わる名湯「白鳥温泉（上湯・下湯）」。</p>
              <p>地熱の蒸気を利用した天然蒸し風呂や、霧島連山を見晴らす絶景露天風呂は至福のぬくもり。さらに日本一の和牛の称号を4大会連続で獲得した最高峰ブランド「宮崎牛」の極上すき焼き・ステーキ、白鳥神社での新春開運初詣。雄大な火山と名湯の恵みに包まれる、知られざる南国の冬旅へとご案内します。</p>
            </div>
          </div>
        </header>

        {/* なぜこの冬訪れるべきか */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                この冬、えびの高原・生駒高原・小林を訪れるべき3つの理由
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 01</span>
              <h3 className="font-bold text-stone-900 text-base">南国とは思えない標高1,200mの白銀パノラマと神秘の「えびの高原霧氷」</h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">九州本土でありながら真冬には氷点下まで気温が下がり、空気中の水分が凍りついて木々に結晶化する「霧氷（樹氷）」の銀世界が出現。白鳥山周辺の不動池や六観音御池を巡る自然探勝路は、冬の澄んだ空気の中で息を呑む絶景トレッキングが楽しめます。</p>
            </div>
            

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 02</span>
              <h3 className="font-bold text-stone-900 text-base">西郷隆盛が3ヶ月間逗留した癒やしの秘湯「白鳥温泉」と天然蒸し風呂の快感</h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">征韓論に敗れ下野した西郷隆盛が心身を癒やした歴史の名湯・白鳥温泉。上湯の天然地熱を利用した蒸し風呂（スチームサウナ）や、下湯の巨岩を配した野趣あふれる森林露天風呂は、冬の寒さに縮こまった身体を解きほぐす最高のデトックススポットです。</p>
            </div>
            

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 03</span>
              <h3 className="font-bold text-stone-900 text-base">日本一の栄冠に輝く「最高峰ブランド宮崎牛」と名水仕込みのご当地美食</h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">全国和牛能力共進会で4大会連続内閣総理大臣賞を受賞した日本一の「宮崎牛」。極上の霜降りがとろけるすき焼きや炭火ステーキは冬の夜に最高の贅沢。えびのの清らかな名水で育まれた「えびの産ヒノヒカリ」や地元豚肉・地鶏料理とともに極上の晩餐を堪能できます。</p>
            </div>
            
            </div>
          </div>
        </section>

        {/* 現地アクセス・服装ガイド */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-700" />
                アクセス・気候・おすすめの服装
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-stone-50 rounded-xl p-4 sm:p-5 border border-stone-200/80 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 border-b border-stone-200/80 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-700"></span>
                  <span>エリアへのアクセス</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">飛行機・空港：</strong>鹿児島空港より車・レンタカーでえびの高原まで約45分、宮崎空港から宮崎自動車道経由で約1時間15分。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">車・マイカー：</strong>九州自動車道「えびのIC」または「小林IC」より県道30号・県道1号（えびのスカイライン）経由でえびの高原まで約30分。熊本・福岡方面からも九州道一本でアクセス良好。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">JR・鉄道：</strong>JR吉都線「えびの駅」「京町温泉駅」よりタクシーまたは路線バス。新幹線利用の場合は「鹿児島中央駅」または「新八代駅」経由。</span>
                  </li>
                </ul>
              </div>
              <div className="bg-stone-50 rounded-xl p-4 sm:p-5 border border-stone-200/80 space-y-3">
                <h4 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 border-b border-stone-200/80 pb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-700"></span>
                  <span>見頃・気候・おすすめの服装</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">ベストシーズン：</strong>11月下旬〜1月下旬（えびの高原の霧氷鑑賞、白鳥神社新春初詣、温泉と宮崎牛グルメの最盛期）。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">気温の目安：</strong>平野部は日中10〜14℃前後と温暖ですが、標高1,200mのえびの高原は真冬の朝晩に氷点下5℃〜10℃近くまで下がり、日中でも0〜5℃前後と厳冬の気候になります。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">服装のポイント：</strong>高原のトレッキングや屋外見学には、防風性の高い本格的なダウンジャケット、フリース、手袋、マフラー、ニット帽が必須。遊歩道や道路は積雪・凍結することがあるため、防滑仕様のトレッキングシューズでお出かけください。えびのスカイラインなど山岳道路を走る際はスタッドレスタイヤの装着またはチェーン携行が必須です。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Wikipedia公式連携スポットセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                近隣名所アーカイブ：霧島連山の秀峰と白銀パノラマ・えびの高原
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="w-full overflow-hidden rounded-xl border border-stone-200 bg-stone-100 aspect-[16/9] sm:aspect-[21/9]">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Ebino_Plateau.jpg/1280px-Ebino_Plateau.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="霧島連山の秀峰と白銀パノラマ・えびの高原"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  霧島連山の秀峰と白銀パノラマ・えびの高原 の見どころと歴史
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  えびの高原（えびのこうげん）は、九州南部に連なる霧島山の韓国岳、蝦野岳、白鳥山、甑岳に囲まれた盆地状の高原である。
                </p>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                  <span className="text-cyan-700 font-semibold">冬の探訪推奨スポット</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 宿一覧セクション */}
        <section className="max-w-4xl mx-auto px-4 space-y-8 mb-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              えびの高原・生駒高原・小林 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>


            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2/1] overflow-hidden bg-stone-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/142559/142559.jpg"
                    alt="京町温泉　十兵衛の宿"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第1位
                  </div>
                </div>
                <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        全室源泉掛け流し露天風呂付き・極上のプライベートと宮崎牛会席の名宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.00</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      京町温泉　十兵衛の宿
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>えびの市の奥座敷・京町温泉に位置し、全客室に趣の異なる自家源泉掛け流し露天風呂を備えた大人のための隠れ家温泉宿。誰にも邪魔されないプライベートな空間で、湯煙に包まれながら24時間いつでも好きな時に名湯を満喫できます。</p>
                      <p>夕食には、厳しい基準をクリアした最高峰「宮崎牛」をメインに据えた贅沢な会席料理が並び、きめ細やかなサシが舌の上でとろけるような感動の味わいを提供。洗練されたおもてなしと上質な空間が、特別な冬の旅を鮮やかに彩ります。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全離れ・全客室に贅沢な自家源泉掛け流し露天風呂を完備</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>宮崎牛の最高級部位を堪能するすき焼きや溶岩焼きの極上会席</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>京町温泉のまろやかで肌に優しい弱アルカリ性美肌泉</span></li>
                    </ul>
                    
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥13,700〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142559%2F142559.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2/1] overflow-hidden bg-stone-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/140849/140849.jpg"
                    alt="京町温泉　玉泉館"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第2位
                  </div>
                </div>
                <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        創業大正・数寄屋造りの風情と歴史が薫る京町温泉の老舗純和風旅館
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>3.86</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      京町温泉　玉泉館
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>大正時代に創業し、京町温泉の歴史とともに歩んできた風格ある老舗和風旅館。数寄屋造りの建物と手入れの行き届いた日本庭園が、訪れる旅人を静かに迎え入れます。</p>
                      <p>自慢の天然温泉は加水・加温一切なしの100%源泉掛け流しで、とろみのあるやわらかな泉質が冬の乾燥した肌をしっとりと包み込みます。夕食には地元契約農家の新鮮野菜や宮崎牛の陶板焼き、清流魚の塩焼きなど、一品一品丁寧に仕上げられた手作りの会席料理が並び、心温まる滞在を約束します。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>大正浪漫の面影を今に伝える落ち着いた佇まいと手入れの行き届いた庭園</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>天然温泉100%源泉掛け流しの内湯と木の香る露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地元えびのの山の幸と宮崎牛の陶板焼きを味わう手作り和食会席</span></li>
                    </ul>
                    
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「食事がとても美味しく大満足御飯がとてもおいしかったです。お風呂も気持ちよかった。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥5,800〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F140849%2F140849.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2/1] overflow-hidden bg-stone-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/43906/43906.jpg"
                    alt="京町温泉　あけぼの荘"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第3位
                  </div>
                </div>
                <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        川のせせらぎを聞く静かな宿・美肌の湯と温かな手作り郷土料理
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.38</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      京町温泉　あけぼの荘
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>京町温泉の街並みに位置し、家庭的で細やかな心配りが心地よい温泉宿。ビジネスから観光まで気軽に利用できる良心的な価格設定ながら、清潔感あふれる客室と豊富に注がれる天然温泉が自慢です。</p>
                      <p>お風呂は肌に刺激の少ない単純温泉で、身体の芯までぽかぽかと温まり日頃の疲れを洗い流してくれます。夕食には宮崎県産の銘柄豚しゃぶや郷土のチキン南蛮、旬の野菜の小鉢など、手作りの温もりが伝わるボリュームたっぷりの料理が並び、一人旅にもおすすめです。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>川内川の清流近くに佇むアットホームで心安らぐ温泉宿</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>良質な単純温泉をたたえる清潔な大浴場でゆったり湯治気分</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>宮崎県産豚や鶏・旬の地場食材をふんだんに使ったボリューム満点膳</span></li>
                    </ul>
                    
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「宮崎牛のしゃぶしゃぶが美味しく量も適度宮崎牛のしゃぶしゃぶおいしかったです。料理の量も適度でした。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥6,950〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F43906%2F43906.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2/1] overflow-hidden bg-stone-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/30940/30940.jpg"
                    alt="極楽温泉　匠の宿"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第4位
                  </div>
                </div>
                <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        名峰高千穂峰を望む霊峰の麓・全国屈指の濃厚鉄炭酸泉と古民家風名宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.67</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      極楽温泉　匠の宿
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>宮崎県高原町、霧島連山の霊峰・高千穂峰の麓に佇む秘湯の一軒宿。最大の自慢は、地下から自然湧出する全国屈指の濃厚な鉄炭酸泉。</p>
                      <p>茶褐色に濁る源泉露天風呂と、自然の巨石をそのままくり抜いて造られた巨大な石風呂は圧巻の迫力で、炭酸ガスの効果により驚くほどの血行促進と保温効果を実感できます。夕食には極上の宮崎牛炭火焼きや、名水百選の湧水で育まれた地元名物のチョウザメ料理、野趣あふれる山の恵みが並び、本物の温泉通をも唸らせる名宿です。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全国的にも極めて希少な自然湧出の「高濃度炭酸泉」大浴場と赤湯露天</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>一万個の自然石をくり抜いた巨大な石風呂の圧倒的な重厚感</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>宮崎牛ステーキや地元小林の名水で育ったチョウザメ・山菜料理</span></li>
                    </ul>
                    
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥12,100〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30940%2F30940.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2/1] overflow-hidden bg-stone-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/162652/162652.jpg"
                    alt="湯之元温泉　＜宮崎県＞"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第5位
                  </div>
                </div>
                <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-between space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        創業百余年・飲泉もできる名湯！胃腸の名湯と名水グルメの湯治宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.52</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      湯之元温泉　＜宮崎県＞
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>霧島連山の麓、高原町の清らかな自然に囲まれた創業100年を超える名湯宿。こちらの源泉は全国的にも珍しい高濃度炭酸を含んだ鉱泉で、浴槽に入ると全身にびっしりと細かな気泡が付着し、湯上がりには肌がすべすべになると評判です。</p>
                      <p>館内には飲泉場も設けられており、胃腸の調子を整える効果も抜群。夕食には地元産宮崎牛の陶板焼きをはじめ、高原町で採れる滋味豊かな根菜や旬の野菜を使った身体に優しい和食膳が提供され、心身のリセットに最高の滞在が叶います。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>「飲んで効き、浸かって効く」炭酸鉄泉の飲泉場と泡付き豊かな天然温泉</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>静かな山里のロケーションとリニューアルされた清潔で快適な客室</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>宮崎牛や高原町の新鮮野菜をふんだんに取り入れた健康美食膳</span></li>
                    </ul>
                    
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「高濃度炭酸泉と清潔なサウナでゆったり温泉最高でした。冷泉の高濃度炭酸が最高に気持ち良いです。サウナも広くて清潔でした。日帰り入浴の方も多いので、泊まりの利用はすいている、夜遅い時間と朝がゆ… つづ。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥7,000〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F162652%2F162652.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
        </section>

        {/* ふるさと納税クーポンセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-2xl p-6 sm:p-8 text-white shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 border border-white/30">
                  楽天トラベル×ふるさと納税
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  宮崎県の宿に実質2,000円で泊まる賢い方法
                </h3>
                <p className="text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                  楽天ふるさと納税の宿泊クーポンを活用すれば、寄付額に応じて宿泊代金が大幅割引。予約済みの宿泊にも「あとから割引」が適用可能です。憧れの露天風呂付き客室や旬の特別会席プランもお手軽に予約できます。
                </p>
              </div>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 rounded-xl bg-white text-amber-700 font-bold text-sm shadow hover:bg-amber-50 transition-colors"
              >
                ふるさと納税対象宿を探す
              </a>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-600" />
              冬のえびの高原・生駒高原・小林旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>えびの高原への道路（県道1号えびのスカイライン）は冬期チェーン規制になりますか？</span>
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pl-5">
                寒波が到来した際や降雪時には、冬用タイヤ規制（スタッドレスタイヤまたはタイヤチェーン携行）が実施される場合があります。冬期にえびの高原へマイカーやレンタカーで向かう際は、事前に宮崎県道路規制情報等を確認し、冬用タイヤを装備した車両をご利用ください。麓の京町温泉エリアは平野部のため積雪は稀です。
              </p>
            </div>
            

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>白鳥温泉（上湯・下湯）は日帰り入浴でも利用できますか？</span>
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pl-5">
                はい、白鳥温泉上湯・下湯ともに日帰り温泉施設が併設されており、大人数百円の手頃な料金で名湯を利用できます。上湯の天然蒸し風呂や絶景展望露天、下湯の緑に囲まれた大浴場をそれぞれ入り比べるのも冬の人気の過ごし方です。
              </p>
            </div>
            

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>宮崎牛を一番美味しく味わうためのおすすめの食べ方は何ですか？</span>
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pl-5">
                冬の時期は、甘辛い割り下でサッと煮てブランド卵にくぐらせる「宮崎牛のすき焼き」が格別です。また、きめ細やかなサシの甘みをダイレクトに楽しむサーロインステーキや炭火焼きも絶品。地元の焼酎（芋焼酎・米焼酎）と合わせることで、肉の旨味がさらに引き立ちます。
              </p>
            </div>
            
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい宮崎県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/miyazaki" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>宮崎県のおすすめ観光名所＆温泉宿一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/features" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>全国の季節・目的別旅行特集一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>実質2,000円で泊まる名湯・高級温泉旅館ガイド</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-local-gourmet-inn-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>ご当地グルメを堪能する全国美食旅特集</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
