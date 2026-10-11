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
  title: "神秘の余呉湖ワカサギと本場天然真鴨鍋：2026-2027年冬の滋賀・湖北！賤ヶ岳雪景色と近江牛名宿5選 ｜ 日本全国・旅宿クラウド",
  description: "白銀の賤ヶ岳を映す羽衣伝説の余呉湖で冬のワカサギ釣りと雪景色散策！湖北の冬の至宝「天然真鴨鍋」の芳醇な旨味と最高峰「近江牛」すき焼き、信長・浅井三姉妹ゆかりの名湯・須賀谷温泉に温まる贅沢な冬名宿5選。",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shiga-yogo-lake-wakasagi-kamonabe-shizugatake-stay",
  },
  openGraph: {
    title: "神秘の余呉湖ワカサギと本場天然真鴨鍋：2026-2027年冬の滋賀・湖北！賤ヶ岳雪景色と近江牛名宿5選",
    description: "白銀の賤ヶ岳を映す羽衣伝説の余呉湖で冬のワカサギ釣りと雪景色散策！湖北の冬の至宝「天然真鴨鍋」の芳醇な旨味と最高峰「近江牛」すき焼き、信長・浅井三姉妹ゆかりの名湯・須賀谷温泉に温まる贅沢な冬名宿5選。",
    url: "https://croud-travel.pages.dev/winter-shiga-yogo-lake-wakasagi-kamonabe-shizugatake-stay",
    siteName: "日本全国・旅宿クラウド",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "https://img.travel.rakuten.co.jp/share/HOTEL/8796/8796.jpg",
        width: 1200,
        height: 630,
        alt: "【神秘の余呉湖ワカサギと本場天然真鴨鍋】2026-2027年冬の滋賀・湖北！賤ヶ岳雪景色と近江牛名宿5選",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "神秘の余呉湖ワカサギと本場天然真鴨鍋：2026-2027年冬の滋賀・湖北！賤ヶ岳雪景色と近江牛名宿5選",
    description: "白銀の賤ヶ岳を映す羽衣伝説の余呉湖で冬のワカサギ釣りと雪景色散策！湖北の冬の至宝「天然真鴨鍋」の芳醇な旨味と最高峰「近江牛」すき焼き、信長・浅井三姉妹ゆかりの名湯・須賀谷温泉に温まる贅沢な冬名宿5選。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/8796/8796.jpg"],
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
      "name": "余呉湖でのワカサギ釣りは初心者や観光客でも手ぶらで楽しめますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、余呉湖の川並桟橋には管理事務所があり、竿や仕掛けのレンタル、エサの販売が行われているため、手ぶらで訪れても気軽にワカサギ釣りを体験できます。足場がしっかりした桟橋ですのでファミリーやカップルでも安心ですが、湖上の風は非常に冷たいため防寒対策（防寒着・カイロ）を万全にしてお出かけください。"
      }
    },
    {
      "@type": "Question",
      "name": "湖北の「天然真鴨鍋」と一般的な合鴨鍋の違いは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "合鴨（アヒルと鴨の交配種）に比べ、冬の自然の中で飛び交い越冬する野生の「天然真鴨」は、赤身の味が非常に濃厚で鉄分と旨味が凝縮されており、脂身が驚くほど甘くしつこさが全くありません。湖北地方では11月15日の狩猟解禁から2月頃までのみ味わえる冬限定の最高級の味覚です。"
      }
    },
    {
      "@type": "Question",
      "name": "雪道運転が不安ですが、電車と送迎バスだけでも宿泊・観光できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "十分に可能です。JR北陸本線の新快速を利用すれば乗り換えなしでアクセスでき、須賀谷温泉や浜湖月など湖北の主要旅館では最寄り駅（河毛駅や長浜駅）からの無料送迎サービスを提供しています。余呉湖畔もJR余呉駅から徒歩圏内ですので、公共交通機関のみでも快適に冬の旅を満喫できます。"
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
      "name": "滋賀県の宿",
      "item": "https://croud-travel.pages.dev/prefectures/shiga"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "【神秘の余呉湖ワカサギと本場天然真鴨鍋】2026-2027年冬の滋賀・湖北！賤ヶ岳雪景色と近江牛名宿5選",
      "item": "https://croud-travel.pages.dev/winter-shiga-yogo-lake-wakasagi-kamonabe-shizugatake-stay"
    }
  ]
};
  const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "羽衣伝説の鏡湖・余呉湖（冬のワカサギ釣りと賤ヶ岳雪景色）",
  "description": "余呉湖（よごこ、よごのうみ）は、滋賀県長浜市にある湖。「大江」（琵琶湖）に対して「伊香小江（いかごのおえ）」と称されたほか、湖面が穏やかなことから「鏡湖」とも呼ばれる。",
  "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Lake_Yogo01s3200.jpg/1280px-Lake_Yogo01s3200.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
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
            href="/prefectures/shiga"
            className="hover:text-stone-900 transition-colors"
          >
            滋賀県
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-xs sm:max-w-md">
            【神秘の余呉湖ワカサギと本場天然真鴨鍋】2026-2027年冬の滋賀・湖北！賤ヶ岳雪景色と近江牛名宿5選
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
                余呉湖・長浜湖北・賤ヶ岳（滋賀県）
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">「神秘の余呉湖ワカサギと本場天然真鴨鍋」2026-2027年冬の滋賀・湖北！賤ヶ岳雪景色と近江牛名宿5選</h1>

            <div className="space-y-3 pt-3 max-w-3xl text-stone-200 text-sm sm:text-base leading-relaxed sm:leading-loose">
              <p>琵琶湖の最北端、山々に囲まれた周囲わずか約6.4kmの静寂の湖「余呉湖（よごこ）」。風が穏やかな冬の日には周囲の雪山を鏡のように湖面に映し出すことから「鏡湖」とも称され、天女の羽衣伝説や菊石姫の伝承が残る神秘的な湖です。11月下旬から1月の冬期、余呉湖は冬の風物詩である「ワカサギ釣り」で活況を呈し、桟橋やボートから透き通った美魚を釣り上げる太公望たちで賑わいます。</p>
              <p>眼前にそびえる古戦場・賤ヶ岳（しずがたけ）の頂からは、白銀に染まる余呉湖と雄大な琵琶湖を同時に見下ろす息を呑む大パノラマが出現。そして湖北の冬を語る上で欠かせないのが、全国の美食家がこぞって訪れる究極の味覚「天然真鴨鍋（かもなべ）」。越冬のため飛来した真鴨の芳醇な脂と出汁、日本三大和牛「近江牛」のすき焼き、織田信長や浅井三姉妹ゆかりの名湯・須賀谷温泉の赤茶色の秘湯に寛ぐ、贅沢を極めた大人の冬旅へとお連れします。</p>
            </div>
          </div>
        </header>

        {/* なぜこの冬訪れるべきか */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                この冬、余呉湖・長浜湖北・賤ヶ岳を訪れるべき3つの理由
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 01</span>
              <h3 className="font-bold text-stone-900 text-base">羽衣伝説の鏡湖を染める雪景色と冬の風物詩「余呉湖ワカサギ釣り」の醍醐味</h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">手つかずの自然が残る余呉湖は、冬になると静謐な雪景色に包まれます。整備された川並桟橋では初心者から気軽にワカサギ釣りが楽しめ、釣ったばかりの新鮮なワカサギを天ぷらやフライで味わう格別の体験が旅人を魅了します。</p>
            </div>
            

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 02</span>
              <h3 className="font-bold text-stone-900 text-base">全国の美食家を唸らせる湖北の冬の絶対王者「天然真鴨鍋」と最高峰「近江牛」</h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">冬の湖北グルメの頂点に君臨する天然真鴨鍋。冬の寒さでたっぷりと脂を蓄えた真鴨のロースやツミレを、特製の醤油出汁と甘みたっぷりの伝統野菜・長浜ネギで炊き上げる鍋は、一度食べたら忘れられない奥深い旨味を誇ります。近江牛との食べ比べも贅沢の極みです。</p>
            </div>
            

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 03</span>
              <h3 className="font-bold text-stone-900 text-base">信長・お市の方・浅井長政ゆかりの名湯「須賀谷温泉」と賤ヶ岳古戦場の雪絶景</h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">小谷城の麓に湧き、戦国武将たちが傷を癒やしたと伝わる須賀谷温泉。空気に触れると赤茶色に濁るヒドロ炭酸鉄泉は保温効果抜群。歴史ロマン薫る湖北の古刹や賤ヶ岳からの白銀の絶景を巡った後の冷えた身体を芯から癒やしてくれます。</p>
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
                    <span><strong className="text-stone-800 font-semibold">電車：</strong>JR北陸本線「余呉駅」下車すぐ（JR京都駅から新快速で約1時間20分、JR名古屋駅から米原駅経由で約1時間15分）。須賀谷温泉へはJR北陸本線「河毛駅」より車・タクシーで約10分（宿の無料送迎バスあり）。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">車：</strong>北陸自動車道「木之本IC」より余呉湖まで国道365号経由で約5〜10分。「小谷城スマートIC」より須賀谷温泉まで約5分。名神高速道路・米原JCT経由で京都・名古屋方面から約1時間15分〜1時間30分。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">賤ヶ岳リフト：</strong>木之本ICから車で約8分（冬期は降雪状況により運行確認が必要、山麓から徒歩登山も可能）。</span>
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
                    <span><strong className="text-stone-800 font-semibold">ベストシーズン：</strong>11月下旬〜1月下旬（ワカサギ釣りの解禁、天然真鴨鍋の旬、湖北の美しい雪景色の最盛期）。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">気温の目安：</strong>日本海側気候の影響を受ける湖北地方は冬の冷え込みが厳しく、12月〜1月は最低気温が氷点下になる日が多く、積雪や地吹雪が発生します。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">服装のポイント：</strong>防寒・防風性能の高いロングダウンコートやスノーウェア、耳あて、マフラー、手袋が必須。湖畔や雪道を歩くため、防水・防滑仕様のスノーブーツやトレッキングシューズを必ず準備してください。マイカーで訪れる際はスタッドレスタイヤの装着が絶対に不可欠です。</span>
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
                近隣名所アーカイブ：羽衣伝説の鏡湖・余呉湖（冬のワカサギ釣りと賤ヶ岳雪景色）
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b5/Lake_Yogo01s3200.jpg/1280px-Lake_Yogo01s3200.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="羽衣伝説の鏡湖・余呉湖（冬のワカサギ釣りと賤ヶ岳雪景色）"
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  羽衣伝説の鏡湖・余呉湖（冬のワカサギ釣りと賤ヶ岳雪景色） の見どころと歴史
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  余呉湖（よごこ、よごのうみ）は、滋賀県長浜市にある湖。「大江」（琵琶湖）に対して「伊香小江（いかごのおえ）」と称されたほか、湖面が穏やかなことから「鏡湖」とも呼ばれる。
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
              余呉湖・長浜湖北・賤ヶ岳 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>


            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/8796/8796.jpg"
                    alt="ＹＡＭＡＴＯ　ＴＨＥ　ＳＥＡＳＯＮＳ　須賀谷温泉"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第1位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        浅井長政とお市の方が愛した歴史の秘湯・赤茶色の濁り湯と湖北会席の名宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.26</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      ＹＡＭＡＴＯ　ＴＨＥ　ＳＥＡＳＯＮＳ　須賀谷温泉
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>浅井長政の居城であった小谷城の麓、山あいの静寂に佇む歴史ある名旅館。お市の方が湯治に訪れたと伝わる源泉は、空気に触れると赤褐色に変化する特異な含鉄炭酸泉で、浸かれば肌をじんわりと包み込み湯冷めしにくい極上の泉質を誇ります。</p>
                      <p>冬の夕食には、滋賀が誇る最高級A5ランク近江牛のすき焼きや陶板焼きに加え、湖北の伝統である冬限定の真鴨鍋を堪能できる会席プランが大好評。雪化粧した庭園を眺めながら、心静かに歴史と美食に浸る極上のひとときを過ごせます。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>小谷城山麓に湧く赤茶色のにごり湯（ヒドロ炭酸鉄泉）の内湯と露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>冬季限定の極上近江牛すき焼きと本場天然鴨鍋プラン</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>静寂に包まれた和の客室と戦国ロマン漂う心温まるおもてなし</span></li>
                    </ul>
                    
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「夕食の提供が遅く、価格に見合わない内容夕食のスタッフが不足しており、なかなか出てこなかった。総合的に普通だが、宿泊代は安くはないため星2とした。クチコミの…。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥17,460〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8796%2F8796.html"
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/160682/160682.jpg"
                    alt="しずがたけ光明石之湯　想古亭　げんない"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第2位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        賤ヶ岳の麓・余呉湖を望む全室趣異なる大人の隠れ家・薬湯と美食宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>5.00</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      しずがたけ光明石之湯　想古亭　げんない
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>賤ヶ岳の緑豊かな麓、余呉湖と琵琶湖を分ける丘陵地に佇む静かな料理旅館。わずか数室の客室はそれぞれ意匠が異なり、都会の喧騒から完全に隔絶された大人のプライベートな時間を約束します。お風呂は肌に優しい光明石温泉で、旅の疲れをやさしく解きほぐしてくれます。</p>
                      <p>宿の真骨頂は、店主が腕を振るう冬の料理。厳選された天然真鴨を特製の秘伝出汁で味わう鴨鍋や、芳醇な近江牛、余呉湖のワカサギなど、湖北の旬を極めた滋味あふれる料理が並びます。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>賤ヶ岳合戦の舞台に建ち、余呉湖の自然を感じる落ち着いた佇まい</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>天然鉱石・光明石温泉の湯と冬の雪見風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>冬限定の天然真鴨鍋コースや近江牛・湖北の郷土料理</span></li>
                    </ul>
                    
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥22,000〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160682%2F160682.html"
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/137456/137456.jpg"
                    alt="尾上　旅館　うをよし"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第3位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        琵琶湖最北端の漁港前に佇む料理自慢の老舗宿・湖魚と鴨料理の極み
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.75</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      尾上　旅館　うをよし
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>琵琶湖の北東岸、尾上（おのえ）漁港のすぐ目の前に位置するアットホームな老舗料理旅館。宿の窓からは冬の青く澄んだ琵琶湖と竹生島が一望でき、夕暮れ時には息を呑むような夕焼けが広がります。冬になると全国からリピーターが訪れる名物が、店主こだわりの「天然鴨すき鍋」。</p>
                      <p>丁寧に引いた出汁と新鮮な真鴨の脂、地元産白ネギの甘みが織りなすハーモニーは絶品そのもの。ビワマスや鮒ずしなど琵琶湖特有の湖魚料理も合わせて楽しめます。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>尾上港の目の前！竹生島を望む広大なレイクビューロケーション</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>創業以来受け継がれる秘伝出汁の天然真鴨鍋と琵琶湖の恵み会席</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>家庭的で温かなおもてなしと清潔で快適な和のゲストルーム</span></li>
                    </ul>
                    
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥16,000〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137456%2F137456.html"
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/179000/179000.jpg"
                    alt="レジーナリゾートびわ湖長浜"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第4位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        愛犬同伴OK！長浜城下・びわ湖畔に佇む上質なモダンリゾート
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.60</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      レジーナリゾートびわ湖長浜
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>豊臣秀吉ゆかりの長浜城下、琵琶湖のほとりに建つ上質なリゾートホテル。全客室が広々としたレイクビューとなっており、愛犬と一緒に贅沢なホテルステイが楽しめる設備も完備。館内には長浜太閤温泉が引かれ、鉄分を含んだ褐色の名湯で身体を温めることができます。</p>
                      <p>夕食は四季の彩りを映した本格的な和食会席。近江牛を贅沢に使った肉料理や、冬の北陸・近江の旬魚を洗練されたプレゼンテーションで楽しめ、夫婦やファミリーでの記念日旅行にも最適です。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全室びわ湖を一望するバルコニー付きレイクビュー객室</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>長浜太閤温泉を引いた客室露天風呂や大浴場で極上の湯浴み</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>近江牛を中心とした洗練された本格日本料理ディナー</span></li>
                    </ul>
                    
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「落ち着いた心地よい空間の中、温かい温泉とおいしいお料理で日頃の疲れを癒やすことができました。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥26,400〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179000%2F179000.html"
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/13910/13910.jpg"
                    alt="びわ湖畔　おいしい湯の宿　長浜太閤温泉　浜湖月"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第5位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        長浜港すぐ・秀吉ゆかりの太閤温泉と夕陽を一望する料亭旅館
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.78</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      びわ湖畔　おいしい湯の宿　長浜太閤温泉　浜湖月
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>長浜港のすぐ隣、琵琶湖をパノラマで一望する絶景の地に佇む老舗料亭旅館。館内に足を踏み入れると、数寄屋造りの格調高い和の空間と洗練されたもてなしが出迎えてくれます。</p>
                      <p>自慢の露天風呂からは、冬の澄んだ湖面と遠く比良山系の雪景色を一望。夕食は老舗料亭の伝統が息づく四季の会席料理で、とろけるような近江牛のしゃぶしゃぶやすき焼き、湖北の伝統食材を美しく仕立てた逸品が並び、上質な大人の贅沢ステイを叶えてくれます。</p>
                    </div>
                    <ul className="text-xs sm:text-sm text-stone-700 space-y-2 pt-2 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>客室や露天風呂から琵琶湖に沈む美しい夕陽を望む贅沢な眺望</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>総檜の露天風呂に注がれる効能豊かな長浜太閤温泉のにごり湯</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>料亭仕込みの極上会席・近江牛しゃぶしゃぶや冬の味覚尽くし</span></li>
                    </ul>
                    
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「送迎や丁寧な接客、豪華な食事に大満足夫婦でお世話になりました。駅までの送迎はもちろん、観光地までの送迎もしていただき、大変助かりました。お部屋のサービスも行き届いており、スタッフの方の丁寧なお心遣… 投。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥16,500〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13910%2F13910.html"
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
                  滋賀県の宿に実質2,000円で泊まる賢い方法
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
              冬の余呉湖・長浜湖北・賤ヶ岳旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>余呉湖でのワカサギ釣りは初心者や観光客でも手ぶらで楽しめますか？</span>
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pl-5">
                はい、余呉湖の川並桟橋には管理事務所があり、竿や仕掛けのレンタル、エサの販売が行われているため、手ぶらで訪れても気軽にワカサギ釣りを体験できます。足場がしっかりした桟橋ですのでファミリーやカップルでも安心ですが、湖上の風は非常に冷たいため防寒対策（防寒着・カイロ）を万全にしてお出かけください。
              </p>
            </div>
            

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>湖北の「天然真鴨鍋」と一般的な合鴨鍋の違いは何ですか？</span>
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pl-5">
                合鴨（アヒルと鴨の交配種）に比べ、冬の自然の中で飛び交い越冬する野生の「天然真鴨」は、赤身の味が非常に濃厚で鉄分と旨味が凝縮されており、脂身が驚くほど甘くしつこさが全くありません。湖北地方では11月15日の狩猟解禁から2月頃までのみ味わえる冬限定の最高級の味覚です。
              </p>
            </div>
            

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>雪道運転が不安ですが、電車と送迎バスだけでも宿泊・観光できますか？</span>
              </h3>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed pl-5">
                十分に可能です。JR北陸本線の新快速を利用すれば乗り換えなしでアクセスでき、須賀谷温泉や浜湖月など湖北の主要旅館では最寄り駅（河毛駅や長浜駅）からの無料送迎サービスを提供しています。余呉湖畔もJR余呉駅から徒歩圏内ですので、公共交通機関のみでも快適に冬の旅を満喫できます。
              </p>
            </div>
            
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい滋賀県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/shiga" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>滋賀県のおすすめ観光名所＆温泉宿一覧</span>
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
