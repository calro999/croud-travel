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
  title: "【白銀の水墨画世界・山寺立石寺と将棋のまち天童温泉】2026-2027年冬の山形・山寺＆天童！美肌名湯と極上山形牛すき焼き名宿5選 ｜ 日本全国・旅宿クラウド",
  description: "松尾芭蕉ゆかりの奇岩霊山「宝珠山立石寺（山寺）」が白銀に包まれる一幅の水墨画の絶景と冬の開運千段石段！将棋駒のまち「天童温泉」の美肌の湯、極上霜降り「山形牛」のすき焼き・ステーキと冬の手打ち蕎麦に心温まる東北の名宿5選。",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamagata-tendo-onsen-yamadera-snow-risshakuji-yamagatagyu-stay",
  },
  openGraph: {
    title: "【白銀の水墨画世界・山寺立石寺と将棋のまち天童温泉】2026-2027年冬の山形・山寺＆天童！美肌名湯と極上山形牛すき焼き名宿5選",
    description: "松尾芭蕉ゆかりの奇岩霊山「宝珠山立石寺（山寺）」が白銀に包まれる一幅の水墨画の絶景と冬の開運千段石段！将棋駒のまち「天童温泉」の美肌の湯、極上霜降り「山形牛」のすき焼き・ステーキと冬の手打ち蕎麦に心温まる東北の名宿5選。",
    url: "https://croud-travel.pages.dev/winter-yamagata-tendo-onsen-yamadera-snow-risshakuji-yamagatagyu-stay",
    siteName: "日本全国・旅宿クラウド",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "https://img.travel.rakuten.co.jp/share/HOTEL/52812/52812.jpg",
        width: 1200,
        height: 630,
        alt: "【白銀の水墨画世界・山寺立石寺と将棋のまち天童温泉】2026-2027年冬の山形・山寺＆天童！美肌名湯と極上山形牛すき焼き名宿5選",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "【白銀の水墨画世界・山寺立石寺と将棋のまち天童温泉】2026-2027年冬の山形・山寺＆天童！美肌名湯と極上山形牛すき焼き名宿5選",
    description: "松尾芭蕉ゆかりの奇岩霊山「宝珠山立石寺（山寺）」が白銀に包まれる一幅の水墨画の絶景と冬の開運千段石段！将棋駒のまち「天童温泉」の美肌の湯、極上霜降り「山形牛」のすき焼き・ステーキと冬の手打ち蕎麦に心温まる東北の名宿5選。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/52812/52812.jpg"],
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
      "name": "冬の山寺（立石寺）は積雪があっても一般の観光客が登れますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "登ることは可能ですが、石段に雪が積もり凍結している箇所が多いため、スニーカーや革靴での登山は大変危険です。必ず滑り止めの効いたスノーブーツや長靴（スパイク付き推奨）を着用してください。手すりを掴みながらゆっくり登れば、冬ならではの圧倒的な水墨画の絶景と静寂を安全に堪能できます。"
      }
    },
    {
      "@type": "Question",
      "name": "天童温泉の泉質と冬の入浴効果について教えてください。",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "天童温泉はナトリウム・カルシウム-硫酸塩温泉で、弱アルカリ性の肌に優しい泉質です。硫酸塩泉は「傷の湯」「美肌の湯」として名高く、肌にしっとりと潤いを与え、入浴後も身体の熱が逃げにくいため、冬の冷え性改善や疲労回復に抜群の効果があります。"
      }
    },
    {
      "@type": "Question",
      "name": "天童温泉から山寺や銀山温泉、蔵王温泉へは足を伸ばせますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。天童温泉は山形県の中央部に位置するため、山寺へは車で約15分、蔵王温泉へは車で約45分、銀山温泉へも車で約50分と、山形の主要な冬の観光名所を巡るハブ拠点として最適です。レンタカーや観光タクシーを利用した冬の周遊観光が大変人気です。"
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
      "name": "山形県の宿",
      "item": "https://croud-travel.pages.dev/prefectures/yamagata"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "【白銀の水墨画世界・山寺立石寺と将棋のまち天童温泉】2026-2027年冬の山形・山寺＆天童！美肌名湯と極上山形牛すき焼き名宿5選",
      "item": "https://croud-travel.pages.dev/winter-yamagata-tendo-onsen-yamadera-snow-risshakuji-yamagatagyu-stay"
    }
  ]
};
  const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "奇岩霊山・宝珠山立石寺（山寺・冬の白銀水墨画パノラマ）",
  "description": "立石寺（りっしゃくじ）は、山形県山形市にある、天台宗の仏教寺院。山寺（やまでら）の通称で知られ、古くは「りゅうしゃくじ」と称した。正式には宝珠山阿所川院立石寺（ほうじゅさんあそかわいんりっしゃくじ）と称する。本尊は薬師如来。 蔵王国定公園（第2種特別地域）に指定されており、円仁が開山した四寺（他は中尊寺・毛越寺、瑞巌寺）を巡る「四寺廻廊」を構成しているほか、若松寺と慈恩寺を含めて巡る出羽名刹三寺まいりを構成する。",
  "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Risshaku-ji_konponchudo.jpg/1280px-Risshaku-ji_konponchudo.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
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
            href="/prefectures/yamagata"
            className="hover:text-stone-900 transition-colors"
          >
            山形県
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-xs sm:max-w-md">
            【白銀の水墨画世界・山寺立石寺と将棋のまち天童温泉】2026-2027年冬の山形・山寺＆天童！美肌名湯と極上山形牛すき焼き名宿5選
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
                山形・天童・山寺（山形県）
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              【白銀の水墨画世界・山寺立石寺と将棋のまち天童温泉】2026-2027年冬の山形・山寺＆天童！美肌名湯と極上山形牛すき焼き名宿5選
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl pt-2">
              奥羽山脈と出羽丘陵に抱かれ、四季の移ろいが鮮やかな山形県の内陸部に位置する天童市と山形市山寺。貞観2年（860年）に慈覚大師円仁が開山した霊峰・宝珠山立石寺（通称・山寺）は、松尾芭蕉が「閑さや岩にしみ入る蝉の声」の名句を残したことで名高い東北屈指の古刹です。新緑や紅葉の美しさもさることながら、11月下旬から1月の厳冬期を迎えると、奇岩怪石の山肌や根本中堂、開山堂、五大堂が真っ白な雪に覆われ、一歩足を踏み入れればそこは静寂の極み、まるで一幅の墨絵の世界へと迷い込んだかのような神秘の絶景が出現します。千段を超える雪の石段を踏みしめながら登り切る「悪縁切りと開運」の冬の巡礼を終えた後は、将棋駒の生産量日本一を誇る名湯「天童温泉」へ。弱アルカリ性のまろやかな美肌泉に身を委ね、極上のサシが入った最高峰「山形牛」のとろけるすき焼きや炭火ステーキ、熱々の郷土芋煮、冬の手打ち山形蕎麦に舌鼓を打つ、温もり溢れるみちのくの冬旅をご案内します。
            </p>
          </div>
        </header>

        {/* なぜこの冬訪れるべきか */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                この冬、山形・天童・山寺を訪れるべき3つの理由
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    芭蕉も愛した奇岩霊山が白銀に染まる！山寺・立石寺の「水墨画パノラマ」と千段石段の開運巡礼
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  千余段の石段を登るごとに煩悩が消え去ると伝わる霊場・山寺。冬は雪化粧した木々と巨岩が織りなすモノトーンの水墨画世界が広がり、断崖に突き出た五大堂からの白銀パノラマは息を呑む絶景。冬の澄んだ大気の中で行う新春開運祈願は格別の清々しさです。
                </p>
              </div>
            

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    将棋駒のまちに湧く開湯百余年の名湯！肌を潤す「天童温泉」のまろやかな湯浴み
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  明治時代に田んぼの中から湧き出したと伝わる天童温泉。硫酸塩泉のやわらかなお湯は保温・保湿効果が高く「美肌の湯」として親しまれています。雪見露天風呂で身体を芯まで温め、湯上がりに名物の将棋駒足湯や温泉街散策を楽しむ贅沢なひとときが待っています。
                </p>
              </div>
            

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    とろける霜降り「山形牛」の極上すき焼きと冬の手打ち蕎麦・郷土芋煮の深い滋味
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  厳しい冬の寒さが生み出す最高峰ブランド「山形牛」。きめ細やかなサシの甘みが口いっぱいに広がるすき焼きや陶板焼きは冬の旅の最高のご馳走。さらに山形名物の芋煮汁や、香り高い冬の新そば（でわかおり）など、滋味豊かなみちのくの味覚に満たされます。
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
・電車・新幹線：山形新幹線「天童駅」下車。東京駅から直通約2時間45分。山寺へはJR仙山線「山寺駅」下車（山形駅から約20分、仙台駅から快速で約50分）。天童駅から山寺へは車・タクシーで約15分。
・車・マイカー：山形自動車道「山形北IC」より天童温泉まで約15分、東北中央自動車道「天童IC」より約10分。仙台宮城ICから作並・山寺経由で約1時間15分。
・山寺〜天童温泉周遊：天童駅〜山寺駅間は路線バスまたはタクシーで約15分。雪道の運転に不安がある方は電車・タクシーでの移動がおすすめです。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜1月下旬（山寺の雪景色、雪見露天風呂、山形牛グルメの最盛期）。
・気温の目安：12月〜1月の天童・山寺エリアは日中でも0〜4℃前後、朝晩は氷点下5℃以下まで冷え込みます。積雪も日常的です。
・服装のポイント：山寺の石段（約1,015段）は雪や凍結で非常に滑りやすくなります。長靴またはアイゼン・滑り止め付きの防水スノーブーツが絶対に必要です（山寺登山口の売店等で長靴のレンタルもあります）。厚手のダウンジャケット、ニット帽、防寒手袋、カイロを完備してください。車でお越しの際はスタッドレスタイヤ装着が必須です。
            </div>
          </div>
        </section>

        {/* Wikipedia 公式アーカイブ連携スポット */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-900 text-white rounded-2xl overflow-hidden shadow-lg border border-stone-800">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-6 relative min-h-[240px]">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Risshaku-ji_konponchudo.jpg/1280px-Risshaku-ji_konponchudo.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="奇岩霊山・宝珠山立石寺（山寺・冬の白銀水墨画パノラマ）"
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
                    奇岩霊山・宝珠山立石寺（山寺・冬の白銀水墨画パノラマ）
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    立石寺（りっしゃくじ）は、山形県山形市にある、天台宗の仏教寺院。山寺（やまでら）の通称で知られ、古くは「りゅうしゃくじ」と称した。正式には宝珠山阿所川院立石寺（ほうじゅさんあそかわいんりっしゃくじ）と称する。本尊は薬師如来。 蔵王国定公園（第2種特別地域）に指定されており、円仁が開山した四寺（他は中尊寺・毛越寺、瑞巌寺）を巡る「四寺廻廊」を構成しているほか、若松寺と慈恩寺を含めて巡る出羽名刹三寺まいりを構成する。
                  </p>
                </div>
                <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-800 flex items-center justify-between">
                  <span>出典：ウィキペディア（Wikipedia）</span>
                  <a
                    href="https://ja.wikipedia.org/wiki/立石寺"
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
              山形・天童・山寺 厳選の温泉＆名宿5選
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/52812/52812.jpg"
                    alt="天童温泉　湯の香　松の湯"
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
                        創業明治・全室源泉掛け流し半露天風呂を備えた大人の極上湯宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.72</span>
                        <span className="text-stone-400 font-normal">（188件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52812%2F52812.html" target="_blank" rel="noopener noreferrer">
                        天童温泉　湯の香　松の湯
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      明治時代に創業し、天童温泉の歴史とともに上質な湯治文化を育んできた大人のための隠れ家旅館。最大の魅力は、全客室に惜しみなく注がれる自家源泉100%掛け流しの半露天風呂。誰にも邪魔されず、冬の澄んだ風を感じながら24時間いつでも好きな時に名湯を満喫できます。夕食には厳しい基準をクリアした最高峰「山形牛」の極上サーロインステーキや、地元契約農家から届く新鮮野菜を贅沢に仕立てた月替わりの懐石料理が並び、記念日やご褒美旅行に最高の贅沢を約束します。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全客室に天然温泉100%源泉掛け流しの半露天風呂を完備</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>山形牛の最高級部位ステーキや四季の山形味覚を味わう特別懐石</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>大正浪漫の面影とモダンが美しく調和した静寂の上質空間</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「優しい味の食事と源泉掛け流しの温泉に癒される全体的にバランスの取れた宿です。食事は優しい味で大変満足しました。お風呂は源泉掛流しでとても気持ちよく癒されました。クチコミの詳細はこちらか…　2026-09-22 17:52:23投稿 つづきは…」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥20,570〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52812%2F52812.html"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/18363/18363.jpg"
                    alt="天童温泉　松伯亭　あづま荘"
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
                        数寄屋造りの名門旅館・看板ねこ「まいこちゃん」と中庭の雪景色
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.64</span>
                        <span className="text-stone-400 font-normal">（624件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18363%2F18363.html" target="_blank" rel="noopener noreferrer">
                        天童温泉　松伯亭　あづま荘
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      数寄屋造りの優雅な建築と四季折々に表情を変える日本庭園が迎えてくれる天童温泉屈指の老舗名門旅館。メディアでも話題の看板ねこがお出迎えしてくれるアットホームな温もりも人気の理由です。冬には庭園に白い雪が降り積もり、広々とした大浴場や露天風呂から眺める雪見風呂はまさに至福。夕食にはとろけるような食感の山形牛を贅沢に使ったすき焼き鍋や、山形の郷土色豊かな手作り料理が並び、細やかな仲居さんのおもてなしとともに心温まる滞在を叶えてくれます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>手入れの行き届いた数寄屋造りの格調高い佇まいと美しい日本庭園</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>大浴場・露天風呂に注がれる効能豊かな天童の名湯と雪見風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>山形牛のすき焼き・しゃぶしゃぶ鍋と旬の山菜・地魚を取り入れた会席</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「食事も器も素敵で、心地よい時間を満喫夕食、朝食ともとても美味しく器も素敵でおなかいっぱいになりました。館内や従業員の方の対応も含めて心地よい時間を過ごせました。他の画像やクチコミの詳細はこ…　2026-09-26 21:28:28投稿 つづ…」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥12,980〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18363%2F18363.html"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/53746/53746.jpg"
                    alt="天童温泉　ほほえみの宿　滝の湯"
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
                        天童温泉を代表する名館・広大な庭園露天風呂と無農薬自社農園の美食
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.58</span>
                        <span className="text-stone-400 font-normal">（1055件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53746%2F53746.html" target="_blank" rel="noopener noreferrer">
                        天童温泉　ほほえみの宿　滝の湯
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      プロ棋士が熱戦を繰り広げる将棋の竜王戦などタイトル戦の舞台としても名高い、天童温泉を象徴する最高峰旅館。広大な館内には巨木や巨石を配した開放感抜群の大浴場と野趣豊かな露天風呂があり、湯煙の向こうに広がる雪景色を愛でながら極上の湯浴みが楽しめます。食事へのこだわりも格別で、自社農園で育てられた安全安心な無農薬野菜と、A5ランク山形牛のステーキかすき焼きをメインにした彩り豊かな会席料理を提供。格式の高さと居心地の良さが高次元で融合しています。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>天童随一の広さを誇る大浴場と巨岩を配した野趣あふれる庭園露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>自社農園栽培の無農薬野菜と最高ランク山形牛の贅沢会席ディナー</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>将棋のタイトル戦も行われる伝統と気品あふれるラグジュアリーステイ</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「お部屋と食事に大満足、最高のホカンス!お部屋とても素敵でした。お部屋にコーヒーマシンが付いているのが結構ありがたかったです。夜ご飯はステーキと鮑が特に美味しかったです。お部屋でくつろいで、…　2026-10-03 23:22:15投稿 つづ…」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥18,150〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53746%2F53746.html"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/146875/146875.jpg"
                    alt="天童温泉　ほほえみの空湯舟　つるや"
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
                        露天風呂付き客室と名物「空湯舟」・モダン和風の癒やしリゾート
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.56</span>
                        <span className="text-stone-400 font-normal">（366件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F146875%2F146875.html" target="_blank" rel="noopener noreferrer">
                        天童温泉　ほほえみの空湯舟　つるや
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      伝統的な温泉街の中で、現代的な快適性と和の情緒を洗練されたデザインで表現した人気モダン旅館。館内には趣の異なる多彩な客室が用意され、露天風呂付き客室ではプライベートな雪見風呂を贅沢に独占できます。夕食はスタイリッシュなダイニングでいただく創作和食。柔らかな山形牛のローストやしゃぶしゃぶ、冬の味覚を散りばめた目にも鮮やかな料理の数々が特別な夜を華やかに彩ります。カップルや女子旅にも絶大な支持を受けるお洒落な温泉宿です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>スタイリッシュな和モダン客室とプライベートな温泉露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>天童の街並みと奥羽山脈の山並みを見晴らす最上階の絶景風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>山形牛や米沢豚一番育ちを堪能する創作和食ダイニングディナー</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「のんびりと心穏やかに過ごせる場所のんびり過ごしやすいお宿でした。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/…　2026-10-02 22:07:04投稿 つづ…」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥18,700〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F146875%2F146875.html"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/5954/5954.jpg"
                    alt="天童温泉　美味求真の宿　天童ホテル"
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
                        美味求真の料理宿・滝の流れる庭園大浴場と充実の館内エンタメ
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.55</span>
                        <span className="text-stone-400 font-normal">（1899件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5954%2F5954.html" target="_blank" rel="noopener noreferrer">
                        天童温泉　美味求真の宿　天童ホテル
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      「美味求真」を宿のテーマに掲げ、食の感動を追求し続ける天童温泉の大型温泉ホテル。大浴場には岩肌を流れる滝が配され、ダイナミックな景観を眺めながらゆったりと天然温泉に浸かることができます。夕食には山形牛の陶板焼きやせいろ蒸し、地元山形の名産品をふんだんに取り入れた豪華な会席料理がテーブルを埋め尽くし、美食の喜びに心躍ります。館内設備も充実しており、三世代旅行や友人同士のグループ旅行でも気兼ねなく楽しめる頼もしい名宿です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>滝が流れる広大な大浴場と檜露天風呂で楽しむ源泉の恵み</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>「美味求真」を掲げる料理長渾身の山形牛会席と朝食ビュッフェ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>天童駅からのアクセス良好！ファミリーからグループまで快適ステイ</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「家族全員大満足、半個室の夕食でゆったり家族で宿泊しましたが、全員大満足でした。夕食が半個室でゆったりできました。クチコミの詳細はこちらから　https://review.travel.ra…　2026-10-03 14:22:51投稿 つづ…」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥12,100〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5954%2F5954.html"
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
                冬の山形・天童・山寺旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-3">

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    冬の山寺（立石寺）は積雪があっても一般の観光客が登れますか？
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    登ることは可能ですが、石段に雪が積もり凍結している箇所が多いため、スニーカーや革靴での登山は大変危険です。必ず滑り止めの効いたスノーブーツや長靴（スパイク付き推奨）を着用してください。手すりを掴みながらゆっくり登れば、冬ならではの圧倒的な水墨画の絶景と静寂を安全に堪能できます。
                  </p>
                </div>
              </div>
            

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    天童温泉の泉質と冬の入浴効果について教えてください。
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    天童温泉はナトリウム・カルシウム-硫酸塩温泉で、弱アルカリ性の肌に優しい泉質です。硫酸塩泉は「傷の湯」「美肌の湯」として名高く、肌にしっとりと潤いを与え、入浴後も身体の熱が逃げにくいため、冬の冷え性改善や疲労回復に抜群の効果があります。
                  </p>
                </div>
              </div>
            

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    天童温泉から山寺や銀山温泉、蔵王温泉へは足を伸ばせますか？
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    はい。天童温泉は山形県の中央部に位置するため、山寺へは車で約15分、蔵王温泉へは車で約45分、銀山温泉へも車で約50分と、山形の主要な冬の観光名所を巡るハブ拠点として最適です。レンタカーや観光タクシーを利用した冬の周遊観光が大変人気です。
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
                href="/prefectures/yamagata"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>山形県のおすすめ温泉宿・ホテル一覧</span>
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
