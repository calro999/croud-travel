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
  title: "【関東最古の霊場・鹿島神宮新春初詣と水郷の冬景色】2026-2027年冬の茨城・鹿島＆潮来！鹿島灘はまぐりと極上常陸牛名宿5選 ｜ 日本全国・旅宿クラウド",
  description: "日本全国の鹿島神社の総本社・東国三社筆頭「鹿島神宮」の新春開運初詣！冬の水郷潮来・霞ヶ浦の静寂と、寒さとともに身が肥える「鹿島灘はまぐり」の網焼き・酒蒸し、茨城最高峰ブランド「常陸牛」を堪能する水郷鹿行の冬名宿5選。",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-ibaraki-kashima-jingu-hatsumode-itako-hamaguri-hitachigyu-stay",
  },
  openGraph: {
    title: "【関東最古の霊場・鹿島神宮新春初詣と水郷の冬景色】2026-2027年冬の茨城・鹿島＆潮来！鹿島灘はまぐりと極上常陸牛名宿5選",
    description: "日本全国の鹿島神社の総本社・東国三社筆頭「鹿島神宮」の新春開運初詣！冬の水郷潮来・霞ヶ浦の静寂と、寒さとともに身が肥える「鹿島灘はまぐり」の網焼き・酒蒸し、茨城最高峰ブランド「常陸牛」を堪能する水郷鹿行の冬名宿5選。",
    url: "https://croud-travel.pages.dev/winter-ibaraki-kashima-jingu-hatsumode-itako-hamaguri-hitachigyu-stay",
    siteName: "日本全国・旅宿クラウド",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "https://img.travel.rakuten.co.jp/share/HOTEL/178910/178910.jpg",
        width: 1200,
        height: 630,
        alt: "【関東最古の霊場・鹿島神宮新春初詣と水郷の冬景色】2026-2027年冬の茨城・鹿島＆潮来！鹿島灘はまぐりと極上常陸牛名宿5選",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "【関東最古の霊場・鹿島神宮新春初詣と水郷の冬景色】2026-2027年冬の茨城・鹿島＆潮来！鹿島灘はまぐりと極上常陸牛名宿5選",
    description: "日本全国の鹿島神社の総本社・東国三社筆頭「鹿島神宮」の新春開運初詣！冬の水郷潮来・霞ヶ浦の静寂と、寒さとともに身が肥える「鹿島灘はまぐり」の網焼き・酒蒸し、茨城最高峰ブランド「常陸牛」を堪能する水郷鹿行の冬名宿5選。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/178910/178910.jpg"],
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
      "name": "鹿島神宮の新春初詣の混雑状況とおすすめの参拝時間帯は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "元旦から1月3日の日中（10:00〜15:00）は周辺道路や駐車場、拝殿前が大変混雑します。混雑を避けるには、朝8:30前までの早朝参拝か、夕方16:00以降の参拝がスムーズです。また東京駅発の高速バス「かしま号」を利用すれば駐車場の混雑を気にせずアクセスできます。"
      }
    },
    {
      "@type": "Question",
      "name": "「鹿島灘はまぐり」と「常陸牛」を両方味わえる宿や食事処はありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。鹿島・潮来エリアのホテルや割烹旅館では、冬期限定のプランとして鹿島灘はまぐりの酒蒸し・焼きはまぐりと、常陸牛のステーキやすき焼きを組み合わせた特別会席を用意している施設が多くあります。予約時に冬の味覚会席プランをご指定ください。"
      }
    },
    {
      "@type": "Question",
      "name": "東国三社（鹿島神宮・香取神宮・息栖神社）は1日で巡ることができますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、車であれば3社間の移動時間はそれぞれ20〜30分程度ですので、半日から1日で十分に東国三社参りが可能です。東国三社を巡って完成させる「東国三社守（木製のお守り）」を集める旅は、新春の最強開運巡礼として大変人気があります。"
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
      "name": "茨城県の宿",
      "item": "https://croud-travel.pages.dev/prefectures/ibaraki"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "【関東最古の霊場・鹿島神宮新春初詣と水郷の冬景色】2026-2027年冬の茨城・鹿島＆潮来！鹿島灘はまぐりと極上常陸牛名宿5選",
      "item": "https://croud-travel.pages.dev/winter-ibaraki-kashima-jingu-hatsumode-itako-hamaguri-hitachigyu-stay"
    }
  ]
};
  const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "東国三社筆頭・常陸国一宮 鹿島神宮（武甕槌大神の霊場と御手洗池）",
  "description": "鹿島神宮（かしまじんぐう、鹿嶋神宮）は、茨城県鹿嶋市宮中にある神社。式内社（名神大社）、常陸国一宮。旧社格は官幣大社で、現在は神社本庁の別表神社。 全国にある鹿島神社の総本社。千葉県香取市の香取神宮、茨城県神栖市の息栖神社とともに東国三社の一社。また、宮中の四方拝で遥拝される一社である。",
  "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Kashima-jingu_haiden-1.JPG/1280px-Kashima-jingu_haiden-1.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
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
            href="/prefectures/ibaraki"
            className="hover:text-stone-900 transition-colors"
          >
            茨城県
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-xs sm:max-w-md">
            【関東最古の霊場・鹿島神宮新春初詣と水郷の冬景色】2026-2027年冬の茨城・鹿島＆潮来！鹿島灘はまぐりと極上常陸牛名宿5選
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
                鹿島・潮来・神栖（茨城県）
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              【関東最古の霊場・鹿島神宮新春初詣と水郷の冬景色】2026-2027年冬の茨城・鹿島＆潮来！鹿島灘はまぐりと極上常陸牛名宿5選
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl pt-2">
              太平洋の鹿島灘と広大な北浦・霞ヶ浦に挟まれた茨城県鹿行（ろっこう）地域。この地に鎮座する「鹿島神宮」は、神武天皇元年の創建と伝わる関東最古の古社であり、日本全国に約600社ある鹿島神社の総本社です。武神・武甕槌大神（たけみかづちのおおかみ）を祀り、「すべての始まりの地」「人生の道開き」として崇敬を集め、千葉の香取神宮、神栖の息栖神社とともに「東国三社」の筆頭を担います。冬の朝、杉木立がそびえる奥参道に立ち込める朝霧と、1日40万リットルもの清らかな湧水を湛える「御手洗池（みたらしいけ）」の静けさは、日々の雑踏を忘れさせる神聖な空気そのもの。新春の初詣には全国から多くの参拝者が開運と勝負運を祈願して訪れます。そして冬の鹿島灘は、身がぎっしりと詰まり濃厚な出汁を放つ「鹿島灘はまぐり」の旬の最盛期。炭火焼きや酒蒸しの香ばしさに喉が鳴り、茨城が誇る極上霜降り黒毛和牛「常陸牛」のすき焼きや網焼き、水郷潮来の冬景色と温かな天然温泉に癒やされる、関東屈指の開運冬旅へお連れします。
            </p>
          </div>
        </header>

        {/* なぜこの冬訪れるべきか */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                この冬、鹿島・潮来・神栖を訪れるべき3つの理由
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    「すべての始まり」を告げる東国三社筆頭！関東最古の古社「鹿島神宮」の新春開運初詣
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  武甕槌大神を祀り、勝利と決断の神として武将たちからも篤く信仰されてきた鹿島神宮。新年を迎える1月には全国から参拝者が集まり、国の重要文化財である本殿や奥宮、大鳥居に手を合わせます。神秘的な御手洗池や要石を巡る杜の散策は、冬の澄んだ大気も相まって魂が洗われるような清々しさに満ちています。
                </p>
              </div>
            

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    寒さで身が肥え旨味が凝縮！名物「鹿島灘はまぐり」と最高峰ブランド「常陸牛」の美食
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  黒潮と親潮が交差する鹿島灘で育つ「鹿島灘はまぐり」は、大粒で肉厚、濃厚な甘みと潮の香りが特徴。冬に最も旨味が乗り、焼きはまぐりや鍋物で味わうとまさに絶品。さらに茨城が誇る最高級黒毛和牛「常陸牛」のすき焼きやすてーきを合わせ、贅を尽くした冬の晩餐が楽しめます。
                </p>
              </div>
            

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    水郷潮来と北浦の静謐な冬絶景＆芯から温まる天然温泉リフレッシュ
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  霞ヶ浦や北浦、前川の穏やかな水辺が広がる水郷潮来。冬は水鳥たちが羽を休め、夕暮れ時には水面が黄金色に輝く静かな水郷美が広がります。周辺に湧く潮来温泉や美肌鉱泉で冷えた身体をじっくりと温め、日頃のストレスから完全に解き放たれる休息が叶います。
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
            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line space-y-2">
              【エリアへのアクセス】
・高速バス（東京方面から最も便利）：東京駅八重洲南口より高速バス「かしま号」が約10〜20分間隔で運行（所要約2時間、鹿島神宮・鹿島セントラルホテル直通）。乗り換えなしで非常にスムーズ。
・電車・JR：JR鹿島線・鹿島臨海鉄道大洗鹿島線「鹿島神宮駅」下車、鹿島神宮大鳥居まで徒歩約10分。潮来へはJR鹿島線「潮来駅」下車。
・車・マイカー：東関東自動車道「潮来IC」より鹿島神宮まで約15分。都心（首都高湾岸線）から約1時間30分とアクセス良好。
・東国三社巡り：鹿島神宮から息栖神社（神栖市）へは車で約20分、香取神宮（香取市）へは車で約30分で周遊可能。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜1月下旬（鹿島神宮新春初詣、冬の鹿島灘はまぐり・常陸牛の旬）。
・気温の目安：太平洋に面しているため積雪は極めて稀ですが、海風が強く吹くため冬の朝晩は0〜3℃前後、日中でも8〜11℃程度と肌寒くなります。
・服装のポイント：広大な鹿島神宮境内（東京ドーム約15個分）を歩いて参拝するため、防風性のあるコートやダウンジャケット、歩きやすいフラットな靴でお出かけください。御手洗池周辺や奥参道は木陰で冷え込むため、マフラーや手袋の持参をおすすめします。
            </div>
          </div>
        </section>

        {/* Wikipedia 公式アーカイブ連携スポット */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-900 text-white rounded-2xl overflow-hidden shadow-lg border border-stone-800">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-6 relative min-h-[240px]">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Kashima-jingu_haiden-1.JPG/1280px-Kashima-jingu_haiden-1.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="東国三社筆頭・常陸国一宮 鹿島神宮（武甕槌大神の霊場と御手洗池）"
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
                    東国三社筆頭・常陸国一宮 鹿島神宮（武甕槌大神の霊場と御手洗池）
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    鹿島神宮（かしまじんぐう、鹿嶋神宮）は、茨城県鹿嶋市宮中にある神社。式内社（名神大社）、常陸国一宮。旧社格は官幣大社で、現在は神社本庁の別表神社。 全国にある鹿島神社の総本社。千葉県香取市の香取神宮、茨城県神栖市の息栖神社とともに東国三社の一社。また、宮中の四方拝で遥拝される一社である。
                  </p>
                </div>
                <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-800 flex items-center justify-between">
                  <span>出典：ウィキペディア（Wikipedia）</span>
                  <a
                    href="https://ja.wikipedia.org/wiki/鹿島神宮"
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
              鹿島・潮来・神栖 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 pt-0.5">
              楽天トラベルの最新実データより厳選。料理・温泉・眺望に秀でた極上宿
            </p>
          </div>

          <div className="space-y-6">

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/178910/178910.jpg"
                    alt="たびのホテル鹿島"
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
                        人工温泉大浴場完備・快適性と心温まるおもてなしのモダンホテル
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.39</span>
                        <span className="text-stone-400 font-normal">（1156件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178910%2F178910.html" target="_blank" rel="noopener noreferrer">
                        たびのホテル鹿島
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      鹿嶋市の中心エリアに位置し、観光にもビジネスにも抜群の利便性と居心地の良さを誇るホテル。館内には足を伸ばしてゆったりと浸かれる大浴場が完備されており、冬の鹿島神宮参拝や水郷散策で冷え切った身体を芯からポカポカに温めてくれます。客室は清潔感に溢れ、上質なシモンズベッドが心地よい眠りを約束。朝食には茨城ならではの納豆や新鮮な卵、地元食材を活かした和洋ビュッフェが並び、元気に冬の旅路へ出発できます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>旅の疲れを心地よく癒やす人工温泉大浴場「旅人の湯」</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>シモンズ社製ベッドと加湿空気清浄機を完備した快適な客室</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地元食材を取り入れた朝食ビュッフェと鹿島神宮への便利なアクセス</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「新築で清潔感があり、お風呂も部屋も快適急な神栖への出張で利用しました。新築らしくキレイ。お風呂も部屋もキレイでした。また、利用したいと思います。」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥4,750〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F178910%2F178910.html"
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/54311/54311.jpg"
                    alt="ホテル　レイ　イン　鹿島（旧ホテルウィングインターナショナル鹿嶋）"
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
                        鹿島神宮至近の好立地・広々とした客室と和洋の充実ダイニング
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.19</span>
                        <span className="text-stone-400 font-normal">（1238件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54311%2F54311.html" target="_blank" rel="noopener noreferrer">
                        ホテル　レイ　イン　鹿島（旧ホテルウィングインターナショナル鹿嶋）
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      鹿嶋市内の主要スポットへのアクセス拠点として高い人気を誇る機能的なシティホテル。鹿島神宮の大鳥居まで車で数分という抜群の立地で、早朝の澄んだ空気の中で行われる新春初詣にも最適のベースキャンプです。客室は落ち着いたインテリアで統一され、ゆったりとしたデスクやWi-Fiも完備。周辺には地元の新鮮な魚介や鹿島灘はまぐりを提供する飲食店も多く、自由気ままに水郷の夜を堪能できます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>JR鹿島神宮駅から車で約5分・鹿島サッカースタジアムや神宮へのアクセス至便</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>ゆとりある広さの客室と充実のアメニティで連泊にも最適</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>館内レストランで味わう茨城の恵みと手頃で安心の宿泊プラン</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「清潔感ある部屋と親切丁寧なフロント対応いつも利用させて頂きありがとうございます清潔感ある部屋親切丁寧なフロント対応朝食午前6時より利用できてコストパフォーマンス良いホテルまたご。」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥4,495〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54311%2F54311.html"
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/158566/158566.jpg"
                    alt="天然温泉「千両の湯」スーパーホテル鹿嶋"
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
                        天然温泉「千両の湯」と焼き立てパン健康朝食・コスパ抜群の快適ステイ
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.16</span>
                        <span className="text-stone-400 font-normal">（618件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158566%2F158566.html" target="_blank" rel="noopener noreferrer">
                        天然温泉「千両の湯」スーパーホテル鹿嶋
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      鹿嶋エリアで唯一、館内に男女別の天然温泉大浴場「千両の湯」を備えた人気の宿泊施設。無色透明で肌触りの良い天然温泉は、疲労回復や冷え性改善に効果が高く、参拝帰りの冷えた身体を優しく包み込みます。さらに毎朝焼き上げられる香ばしいクロワッサンやオーガニック野菜を取り入れた無料健康朝食が大好評。自分に合った硬さを選べる快眠枕など細やかなサービスも行き届き、気軽に満足度の高い冬ステイを楽しめます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>男女別天然温泉「千両の湯」で楽しむ本格的な温泉浴</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>毎朝ホテルで焼き上げるサクサクのクロワッサンと健康朝食ビュッフェ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>選べる快眠枕と防音・遮光性に優れた機能的な客室空間</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「温泉も朝食も大満足、またリピートしたい夫婦二人でビジネスホテルへ宿泊は不安でしたが当日予約で泊まれて温泉も部屋も朝食もコンパクトですが、とても良かったです!またリピートしたいと思います!クチコ…。」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥3,930〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158566%2F158566.html"
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/44928/44928.jpg"
                    alt="亀の井ホテル　潮来"
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
                        北浦を一望する全室レイクビュー・展望大浴場と水郷グルメの名宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.12</span>
                        <span className="text-stone-400 font-normal">（1595件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44928%2F44928.html" target="_blank" rel="noopener noreferrer">
                        亀の井ホテル　潮来
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      水郷潮来の北浦湖畔に建ち、全客室の窓から広大な水辺の景色を見渡せる絶景のリゾート温泉ホテル。最大の自慢は、最上階の展望大浴場から望む北浦のパノラマ。冬の夕暮れ時には湖面が黄金色に染まる息を呑む夕景を眺めながら天然温泉に浸かる贅沢が味わえます。夕食には茨城が誇る最高峰「常陸牛」のジューシーなステーキや陶板焼き、鹿島灘はまぐり、水郷ならではの郷土料理が彩り豊かに並び、心豊かなひとときを演出します。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全客室および大浴場から北浦の雄大なレイクビューパノラマを一望</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>展望大浴場に注がれる潮来の天然温泉と冬の夕景</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>常陸牛の陶板焼きや鹿島灘はまぐり・冬の湖魚を取り入れた四季会席</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「丁寧な説明でしたが、前の方にはされていた、タンメンの話しはなかった。GoToPassの説明していた… 投。」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥5,570〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44928%2F44928.html"
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
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/32427/32427.jpg"
                    alt="ビジネス旅館　扇屋"
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
                        水郷潮来駅近く・アットホームな温もりと板前仕込みの家庭料理
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.09</span>
                        <span className="text-stone-400 font-normal">（71件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32427%2F32427.html" target="_blank" rel="noopener noreferrer">
                        ビジネス旅館　扇屋
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      潮来駅の近くに佇み、どこか懐かしい昭和の風情と家庭的な温かいもてなしで旅人を迎える老舗旅館。気取らない雰囲気の中で、のんびりと水郷の旅情を味わいたい方に最適です。お料理は板前である主人が一品一品丁寧に仕上げる手作り和食で、旬の刺身や煮魚、地元の新鮮野菜を使った煮物など、素朴ながらも心に染み渡る美味しさ。鹿島神宮や香取神宮を巡る一人旅やビジネス利用にもおすすめの温かな宿です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>JR潮来駅から徒歩圏内！水郷の町並み散策に便利な好立地</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>板前が心を込めて作る家庭的でボリューム満点の和食膳</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>リーズナブルな宿泊料金と昭和レトロな落ち着きある客室</span></li>
                    </ul>
                  </div>

                  

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥7,150〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32427%2F32427.html"
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
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent rounded-2xl p-6 sm:p-8 border border-amber-500/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
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
                冬の鹿島・潮来・神栖旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-3">

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    鹿島神宮の新春初詣の混雑状況とおすすめの参拝時間帯は？
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    元旦から1月3日の日中（10:00〜15:00）は周辺道路や駐車場、拝殿前が大変混雑します。混雑を避けるには、朝8:30前までの早朝参拝か、夕方16:00以降の参拝がスムーズです。また東京駅発の高速バス「かしま号」を利用すれば駐車場の混雑を気にせずアクセスできます。
                  </p>
                </div>
              </div>
            

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    「鹿島灘はまぐり」と「常陸牛」を両方味わえる宿や食事処はありますか？
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    はい。鹿島・潮来エリアのホテルや割烹旅館では、冬期限定のプランとして鹿島灘はまぐりの酒蒸し・焼きはまぐりと、常陸牛のステーキやすき焼きを組み合わせた特別会席を用意している施設が多くあります。予約時に冬の味覚会席プランをご指定ください。
                  </p>
                </div>
              </div>
            

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    東国三社（鹿島神宮・香取神宮・息栖神社）は1日で巡ることができますか？
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    はい、車であれば3社間の移動時間はそれぞれ20〜30分程度ですので、半日から1日で十分に東国三社参りが可能です。東国三社を巡って完成させる「東国三社守（木製のお守り）」を集める旅は、新春の最強開運巡礼として大変人気があります。
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
                href="/prefectures/ibaraki"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>茨城県のおすすめ温泉宿・ホテル一覧</span>
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
