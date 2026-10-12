import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
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
  title: "日本海魚のアメ横・寺泊冬のカニ市場と商売繁盛高龍神社：2026-2027年冬の新潟・寺泊＆長岡！とろみ美肌湯と越後牛名宿5選 ｜ 日本全国・旅宿クラウド",
  description: "冬の日本海の至宝・本ズワイガニや寒ブリが活気あふれる寺泊「魚のアメ横」と、全国の起業家が詣でる商売繁盛の奇跡「高龍神社」新春初詣！長岡の奥座敷・蓬平温泉の極上とろみ美肌湯と、越後牛・地酒に心満たされる新潟の冬名宿5選。",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-niigata-nagaoka-teradomari-kani-yomogihira-onsen-koryu-stay",
  },
  openGraph: {
    title: "日本海魚のアメ横・寺泊冬のカニ市場と商売繁盛高龍神社：2026-2027年冬の新潟・寺泊＆長岡！とろみ美肌湯と越後牛名宿5選",
    description: "冬の日本海の至宝・本ズワイガニや寒ブリが活気あふれる寺泊「魚のアメ横」と、全国の起業家が詣でる商売繁盛の奇跡「高龍神社」新春初詣！長岡の奥座敷・蓬平温泉の極上とろみ美肌湯と、越後牛・地酒に心満たされる新潟の冬名宿5選。",
    url: "https://croud-travel.pages.dev/winter-niigata-nagaoka-teradomari-kani-yomogihira-onsen-koryu-stay",
    siteName: "日本全国・旅宿クラウド",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "https://img.travel.rakuten.co.jp/share/HOTEL/109516/109516.jpg",
        width: 1200,
        height: 630,
        alt: "【日本海魚のアメ横・寺泊冬のカニ市場と商売繁盛高龍神社】2026-2027年冬の新潟・寺泊＆長岡！とろみ美肌湯と越後牛名宿5選",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "日本海魚のアメ横・寺泊冬のカニ市場と商売繁盛高龍神社：2026-2027年冬の新潟・寺泊＆長岡！とろみ美肌湯と越後牛名宿5選",
    description: "冬の日本海の至宝・本ズワイガニや寒ブリが活気あふれる寺泊「魚のアメ横」と、全国の起業家が詣でる商売繁盛の奇跡「高龍神社」新春初詣！長岡の奥座敷・蓬平温泉の極上とろみ美肌湯と、越後牛・地酒に心満たされる新潟の冬名宿5選。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/109516/109516.jpg"],
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
      "name": "寺泊「魚のアメ横」の年末年始の営業や買い出しの混雑はどうですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "寺泊魚の市場通りは年中無休で営業しており、特に12月28日〜31日の年末は、お正月用のカニや新巻鮭、ブリを買い求める人々で早朝から大変な賑わいを見せます。混雑を避けるなら朝8:30〜9:30頃の早めの時間帯に訪れるのがおすすめです。市場の各店舗から全国へクール便発送も可能です。"
      }
    },
    {
      "@type": "Question",
      "name": "高龍神社への参拝時に必要な持ち物やマナーはありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "高龍神社では、参拝者が名刺を壁に挟んで奉納する独特の風習がありますので、お仕事の名刺を数枚お持ちいただくと良いでしょう。また、神社の売店では龍神様の好物とされる「お神酒・ロウソク・生卵」の参拝セットが販売されており、これをお供えして祈願するのが正式な参拝手順です。"
      }
    },
    {
      "@type": "Question",
      "name": "蓬平温泉のお湯のとろみはなぜそんなに強いのですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "蓬平温泉の泉質は、pH8.0〜9.0前後のナトリウム-塩化物・炭酸水素塩温泉です。炭酸水素イオンと重曹成分が高濃度に含まれているため、肌の角質を柔らかくして乳化させるクレンジング効果があり、お湯に浸かった瞬間にまるでローションに包まれたかのような独特のつるつる・とろとろ感を実感できます。"
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
      "name": "新潟県の宿",
      "item": "https://croud-travel.pages.dev/prefectures/niigata"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "【日本海魚のアメ横・寺泊冬のカニ市場と商売繁盛高龍神社】2026-2027年冬の新潟・寺泊＆長岡！とろみ美肌湯と越後牛名宿5選",
      "item": "https://croud-travel.pages.dev/winter-niigata-nagaoka-teradomari-kani-yomogihira-onsen-koryu-stay"
    }
  ]
};
  const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "日本海魚のアメ横・寺泊海岸通り（冬のズワイガニと寒ブリ市場）",
  "description": "寺泊町（てらどまりまち）は、新潟県の中部にかつて存在した三島郡の町。長岡市に編入され消滅した。西廻り航路の港町、北陸街道の宿場町として知られていた町である。本州の中では佐渡島と最短の距離にあり、佐渡との間を佐渡汽船が定期航路を運航していたほか、古くから佐渡と本土を結ぶ拠点となっていた。",
  "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Teradomari_Fish_Market_Street_20081013.jpg/1280px-Teradomari_Fish_Market_Street_20081013.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
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
            href="/prefectures/niigata"
            className="hover:text-stone-900 transition-colors"
          >
            新潟県
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-xs sm:max-w-md">
            【日本海魚のアメ横・寺泊冬のカニ市場と商売繁盛高龍神社】2026-2027年冬の新潟・寺泊＆長岡！とろみ美肌湯と越後牛名宿5選
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
                寺泊・長岡・蓬平（新潟県）
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">「日本海魚のアメ横・寺泊冬のカニ市場と商売繁盛高龍神社」2026-2027年冬の新潟・寺泊＆長岡！とろみ美肌湯と越後牛名宿5選</h1>

            <div className="space-y-3 pt-3 max-w-3xl text-stone-200 text-sm sm:text-base leading-relaxed sm:leading-loose">
              <p>日本海の雄大な荒波を眼前に臨む新潟県長岡市寺泊。国道402号沿いに鮮魚店や海産物問屋がずらりと軒を連ねる「寺泊魚の市場通り（通称・魚のアメ横）」は、冬になると一年で最も熱気にあふれる黄金期を迎えます。11月上旬に解禁された本ズワイガニや紅ズワイガニ、日本海の荒波で揉まれた極上の寒ブリ、甘みたっぷりの南蛮エビが店頭に山積みされ、店先で香ばしく焼かれるイカやホタテの浜焼きの煙が食欲を刺激。そして長岡の山懐に分け入ると、龍神伝説が息づく商売繁盛の奇跡の古社「高龍神社（こうりゅうじんじゃ）」が鎮座。</p>
              <p>全国の経営者や起業家が名刺を奉納しに訪れる新春初詣の聖地です。その門前に湧くのが、長岡の奥座敷「蓬平温泉（よもぎひらおんせん）」。肌にまとわりつくような驚くほどのとろみを持つ強アルカリ性ナトリウム-炭酸水素塩泉は、まさに天然の化粧水そのもの。雪見露天風呂に浸かり、芳醇な越後牛ステーキと新潟が誇る銘酒「久保田」「越乃寒梅」で乾杯する、贅沢極まる越後の冬旅へと誘います。</p>
            </div>
          </div>
        </header>

        {/* なぜこの冬訪れるべきか */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                この冬、寺泊・長岡・蓬平を訪れるべき3つの理由
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    日本海の冬の至宝が集結！寺泊「魚のアメ横」でズワイガニと寒ブリを爆買い＆食べ歩き
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  通り沿いに大型鮮魚店が並ぶ寺泊の市場通り。冬は店頭に茹でたての本ズワイガニが並び、威勢のいい掛け声が響き渡ります。その場で味わえる浜焼きやカニ汁、日本海の新鮮なお造りは絶品。全国への地方発送も充実しており、冬の味覚を心ゆくまで堪能できます。
                </p>
              </div>
            

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    全国の経営者が集う奇跡のパワースポット！商売繁盛の龍神「高龍神社」新春開運祈願
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  太田川上流の険しい断崖に建ち、白蛇の使いと龍神を祀る高龍神社。商売繁盛・金運招福のご利益が全国に知られ、本殿の壁一面紙垂のように奉納された無数の名刺は圧巻の光景。冬の雪景色の中に浮かぶ朱塗りの社殿で、新年の強力な運気を授かることができます。
                </p>
              </div>
            

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    天然の化粧水と称される極上のとろみ湯「蓬平温泉」雪見露天と越後牛・美酒の宴
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  高龍神社の麓に湧く蓬平温泉は、とろりとした極上のぬめり感が特徴の強アルカリ性美肌泉。雪化粧した渓谷を眺める露天風呂は至福の心地よさ。夕食には新潟県産ブランド牛「越後牛」や旬の日本海の幸、長岡の銘酒の数々が並び、心も身体も温まる極上の雪国ステイが叶います。
                </p>
              </div>
            
            </div>
          </div>
        </section>

        {/* 現地アクセス・服装ガイド */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-700" />
                <h2 className="text-base sm:text-lg font-bold text-stone-900">
                  冬の現地アクセス・気候・おすすめの服装
                </h2>
              </div>
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
                    <span><strong className="text-stone-800 font-semibold">電車・新幹線：</strong>上越新幹線「長岡駅」下車（東京駅から最速約1時間15分）。長岡駅から寺泊までは越後交通バスで約60分（車・レンタカーで約40分）。蓬平温泉・高龍神社へは長岡駅東口より路線バスまたは宿の送迎車で約25〜30分。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">車・マイカー：</strong>関越自動車道・北陸自動車道「長岡IC」より寺泊まで約40分。「長岡南越路スマートIC」より蓬平温泉まで約20分。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">寺泊〜蓬平温泉周遊：</strong>寺泊から蓬平温泉へは車で約50分。日本海の海の幸を堪能した後に山あいの秘湯へ向かう冬のゴールデンルートです。</span>
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
                    <span><strong className="text-stone-800 font-semibold">ベストシーズン：</strong>11月中旬〜1月下旬（冬カニ・寒ブリの最盛期、高龍神社の新春初詣、蓬平温泉の雪見風呂）。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">気温の目安：</strong>日本海沿岸の寺泊は風が強く体感温度が氷点下近くまで下がります。山間部の蓬平温泉は豪雪地帯となり、日中でも0〜3℃、夜間は氷点下に達します。</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-cyan-700 font-bold shrink-0">・</span>
                    <span><strong className="text-stone-800 font-semibold">服装のポイント：</strong>防寒・防風・防水を兼ね備えたしっかりとしたアウター、長靴やスノーブーツ、手袋、マフラーが必須。高龍神社の急な階段（約118段）や雪道を登るため、足元は滑り止め付きの靴をご用意ください。お車の場合はスタッドレスタイヤの装着が不可欠です。</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Wikipedia 公式アーカイブ連携スポット */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-900 text-white rounded-2xl overflow-hidden shadow-lg border border-stone-800">
            <div className="flex flex-col">
              <div className="md:col-span-6 relative min-h-[240px]">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Teradomari_Fish_Market_Street_20081013.jpg/1280px-Teradomari_Fish_Market_Street_20081013.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="日本海魚のアメ横・寺泊海岸通り（冬のズワイガニと寒ブリ市場）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-cyan-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  名所アーカイブ
                </div>
              </div>
              <div className="md:col-span-6 p-6 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="text-xs text-cyan-400 font-semibold">
                    近隣の主要観光地
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">
                    日本海魚のアメ横・寺泊海岸通り（冬のズワイガニと寒ブリ市場）
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    寺泊町（てらどまりまち）は、新潟県の中部にかつて存在した三島郡の町。長岡市に編入され消滅した。西廻り航路の港町、北陸街道の宿場町として知られていた町である。本州の中では佐渡島と最短の距離にあり、佐渡との間を佐渡汽船が定期航路を運航していたほか、古くから佐渡と本土を結ぶ拠点となっていた。
                  </p>
                </div>
                <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-800 flex items-center justify-between">
                  <span>出典：ウィキペディア（Wikipedia）</span>
                  <a
                    href="https://ja.wikipedia.org/wiki/寺泊町"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>詳細百科事典</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 厳選名宿一覧 */}
        <section className="max-w-4xl mx-auto px-4 space-y-6 mb-14">
          <div className="border-l-4 border-cyan-800 pl-3">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              寺泊・長岡・蓬平 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 pt-0.5">
              楽天トラベルの最新実データより厳選。料理・温泉・眺望に秀でた極上宿
            </p>
          </div>

          <div className="space-y-6">

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2/1] overflow-hidden bg-stone-100">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/109516/109516.jpg"
                    alt="よもぎひら温泉　和泉屋"
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
                        プロが選ぶ日本のホテル100選・三つの自家源泉と極上雪見露天の最高峰名宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.62</span>
                        <span className="text-stone-400 font-normal">（372件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109516%2F109516.html" target="_blank" rel="noopener noreferrer">
                        よもぎひら温泉　和泉屋
                      </a>
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>長岡の奥座敷・蓬平温泉を代表する屈指の高級和風旅館。館内にはそれぞれ趣の異なる三つの大浴場があり、時間帯によって男女入れ替えで多彩な湯巡りが楽しめます。雪化粧した山肌を眺めながら浸かる露天風呂はまさに極楽の心地よさ。</p>
                      <p>とろりとした美肌泉がお肌をしっとりと包み込みます。夕食には新潟が誇るブランド牛「越後牛」をメインに、寺泊直送の新鮮な海の幸や雪国の滋味豊かな郷土料理が美しく並び、全国の温泉通から絶大な支持を集めています。</p>
                    </div>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>趣の異なる三つの大浴場と野趣豊かな雪見露天風呂の湯巡り</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>強いつるつる感・とろみ感を誇る自家源泉「よもぎひら温泉」美肌湯</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>越後牛ステーキと日本海の鮮魚・山菜を盛り込んだ豪華会席ディナー</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「大満足ご飯も美味しくお酒も美味しく温泉でのんびりできて、満喫した!って感じです。ご飯を残してしまうのが申し訳ないので少食プラン作って欲しいです。つづ。」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥17,600〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109516%2F109516.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm shadow-amber-600/20"
                    >
                      <span>空室確認・予約</span>
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/108739/108739.jpg"
                    alt="寺泊岬温泉　ホテル飛鳥"
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
                        寺泊岬の高台から日本海と佐渡島を一望・日本海海鮮づくしと展望露天
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.50</span>
                        <span className="text-stone-400 font-normal">（785件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108739%2F108739.html" target="_blank" rel="noopener noreferrer">
                        寺泊岬温泉　ホテル飛鳥
                      </a>
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>寺泊の海岸線を見下ろす高台に建ち、館内のいたるところから壮大な日本海の海景色を望む絶景温泉ホテル。冬の澄んだ日には遠く佐渡島までくっきりと見渡せます。夕食は寺泊港から直接仕入れる新鮮そのものの海の幸。</p>
                      <p>冬の本ズワイガニの甲羅盛りやお造り、脂が乗った寒ブリのしゃぶしゃぶなど、海の恵みを存分に味わい尽くすプランが大人気。潮風を感じながら浸かる露天風呂も格別で、波の音とともに贅沢な時間を過ごせます。</p>
                    </div>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>客室や露天風呂から雄大な日本海と佐渡島を見晴らすパノラマビュー</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>寺泊港直送の本ズワイガニ・寒ブリ・南蛮エビを味わう海鮮会席</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>日本海に沈む夕日と満天の星空を眺める開放的な展望温泉</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「スタッフの接客と美味しい食事に感動!食事が美味しかったのは言うまでもなく、一番驚いたのはスタッフの皆様の意識の高さです。気遣いを含め、接客が本当に素晴らしく、感動いたしました。ぜひまた伺い… つづ。」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥20,900〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108739%2F108739.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm shadow-amber-600/20"
                    >
                      <span>空室確認・予約</span>
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/54616/54616.jpg"
                    alt="かにと活魚料理の宿　海風亭　寺泊　日本海"
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
                        寺泊魚の市場通りすぐ！生簀から揚げるカニ料理と地魚割烹の名旅館
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.44</span>
                        <span className="text-stone-400 font-normal">（282件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54616%2F54616.html" target="_blank" rel="noopener noreferrer">
                        かにと活魚料理の宿　海風亭　寺泊　日本海
                      </a>
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>寺泊海岸通りに位置し、新鮮な海の幸を心ゆくまで堪能するために建てられた料理自慢の宿。玄関を入ると大型の生簀があり、冬には活ズワイガニや近海の活魚が元気に泳いでいます。</p>
                      <p>夕食には茹でガニ、焼きガニ、カニすき鍋など、カニの旨味を余すところなく味わえる本格カニ会席が並び、カニ好きにはたまらない幸福な時間が訪れます。食後は手入れの行き届いた和室でゆったりとくつろぎ、港町の旅情を満喫できます。</p>
                    </div>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>名物「魚のアメ横」まで車で数分！観光と買い物に抜群の立地</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>館内の生簀から揚げたばかりの極上カニ料理と旬の活魚割烹</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>落ち着きのある純和風客室と心温まる港町のおもてなし</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「食事も美味しく接客も丁寧で大満足食事が朝夜共に美味しく満足感が高かった。従業員の方がテキパキしていて好感を持てた。周りの人にもお勧めしたいです。」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥13,750〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54616%2F54616.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm shadow-amber-600/20"
                    >
                      <span>空室確認・予約</span>
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/198972/198972.jpg"
                    alt="ホテルニューグリーンプラザ（オープン）"
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
                        長岡駅前・2026年新規開業の最新設備と利便性を誇るハイクオリティホテル
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.08</span>
                        <span className="text-stone-400 font-normal">（686件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F198972%2F198972.html" target="_blank" rel="noopener noreferrer">
                        ホテルニューグリーンプラザ（オープン）
                      </a>
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>長岡市の中心部、JR長岡駅前に2026年にオープンした最新鋭のホテル。新幹線を降りてすぐチェックインできる抜群の機動性を誇り、寺泊や高龍神社、蓬平温泉への周遊旅行のベースとして極めて機能的です。</p>
                      <p>最新の空調や防音設備、上質なベッドが導入されており、旅の疲れをしっかり癒やしてくれます。朝食には魚沼産コシヒカリの新米と郷土色豊かな和洋メニューが提供され、爽快な朝のスタートが切れます。</p>
                    </div>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>JR長岡駅直結・徒歩圏内！新幹線利用や観光の拠点に最高のアクセス</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>2026年オープンの最新設備・シモンズベッドと高速Wi-Fi完備</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>長岡市街の夜景を見渡す快適な客室と地元新潟の食材を使った朝食</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「リニューアル後の部屋は清潔で快適今回リニューアル後に宿泊しました。部屋も清潔で気に入りました。また利用した際に詳しく書きたいです。つづきは。」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥5,250〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F198972%2F198972.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm shadow-amber-600/20"
                    >
                      <span>空室確認・予約</span>
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/109523/109523.jpg"
                    alt="蓬平温泉　蓬莱館　福引屋"
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
                        高龍神社参道に佇む創業百余年の老舗・龍神の御神木露天と山里会席
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.05</span>
                        <span className="text-stone-400 font-normal">（220件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109523%2F109523.html" target="_blank" rel="noopener noreferrer">
                        蓬平温泉　蓬莱館　福引屋
                      </a>
                    </h3>
                    <div className="space-y-2 text-sm sm:text-base text-stone-700 leading-relaxed">
                      <p>高龍神社の鳥居のすぐそばに佇み、商売繁盛の参拝客や湯治客を長年温かく迎えてきた老舗温泉旅館。館内には龍神信仰にまつわる神秘的な雰囲気が漂い、心静かな時間を過ごせます。</p>
                      <p>自慢のお湯は蓬平温泉特有の強いぬめり感を持つ名湯で、湯上がりの肌のすべすべ感に誰もが驚かされます。夕食には地元新潟のブランド豚「越後もちぶた」のしゃぶしゃぶや、岩魚の塩焼き、契約栽培の炊きたてコシヒカリなど、素朴で温かい郷土の味が並びます。</p>
                    </div>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>商売繁盛の奇跡・高龍神社のすぐ麓に位置する歴史ある湯宿</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>天然の化粧水と称されるとろみ豊かな源泉と巨石を配した露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>越後もちぶたや契約農家の魚沼コシヒカリを味わう心づくしの山里料理</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50/90 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-stone-600 border border-stone-200/80 mt-2">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「マイナスイオンと温泉、食事に大満足!車を降りてすぐにマイナスイオンの空気に感動!とても、良い時期に来たようです。思わず深呼吸してしまいました。温泉はとろとろ、すべすべ。凄いです!食事は地元… つづ。」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥3,500〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109523%2F109523.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm shadow-amber-600/20"
                    >
                      <span>空室確認・予約</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* ふるさと納税セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent rounded-2xl p-6 sm:p-8 border border-amber-500/20 shadow-sm flex flex-col items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                Furusato Tax
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                楽天ふるさと納税で実質2,000円！お得に泊まる賢い旅行術
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl leading-relaxed">
                旅行先の自治体へ寄付することで、最大30%相当の楽天トラベル宿泊クーポンが返礼品として付与されます。予約済みの日程にも「あとから割引」で適用可能！
              </p>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl flex items-center gap-2 flex-shrink-0 transition-colors shadow-md shadow-amber-600/20"
            >
              <span>対象宿・クーポンを見る</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* FAQセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-14">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                冬の寺泊・長岡・蓬平旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-3">

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    寺泊「魚のアメ横」の年末年始の営業や買い出しの混雑はどうですか？
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    寺泊魚の市場通りは年中無休で営業しており、特に12月28日〜31日の年末は、お正月用のカニや新巻鮭、ブリを買い求める人々で早朝から大変な賑わいを見せます。混雑を避けるなら朝8:30〜9:30頃の早めの時間帯に訪れるのがおすすめです。市場の各店舗から全国へクール便発送も可能です。
                  </p>
                </div>
              </div>
            

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    高龍神社への参拝時に必要な持ち物やマナーはありますか？
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    高龍神社では、参拝者が名刺を壁に挟んで奉納する独特の風習がありますので、お仕事の名刺を数枚お持ちいただくと良いでしょう。また、神社の売店では龍神様の好物とされる「お神酒・ロウソク・生卵」の参拝セットが販売されており、これをお供えして祈願するのが正式な参拝手順です。
                  </p>
                </div>
              </div>
            

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    蓬平温泉のお湯のとろみはなぜそんなに強いのですか？
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    蓬平温泉の泉質は、pH8.0〜9.0前後のナトリウム-塩化物・炭酸水素塩温泉です。炭酸水素イオンと重曹成分が高濃度に含まれているため、肌の角質を柔らかくして乳化させるクレンジング効果があり、お湯に浸かった瞬間にまるでローションに包まれたかのような独特のつるつる・とろとろ感を実感できます。
                  </p>
                </div>
              </div>
            
            </div>
          </div>
        </section>

        {/* 内部リンク・関連回遊ナビゲーション */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 space-y-4">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              あわせて読みたい関連旅行ガイド
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link
                href="/prefectures/niigata"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>新潟県のおすすめ温泉宿・ホテル一覧</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/features"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>全国の季節・目的別厳選特集一覧</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/furusato-tax-luxury-hotspring-ryokan-stay"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>実質2,000円で泊まる高級温泉旅館ガイド</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/furusato-tax-local-gourmet-inn-stay"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>ご当地グルメを堪能する全国美食旅特集</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
