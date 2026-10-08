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
  title: "【聖徳太子開創の霊峰・信貴山朝護孫子寺と世界一の福寅】2026-2027年冬の奈良・生駒＆信貴山！信貴山温泉と大和牛・ぼたん鍋名宿5選 ｜ 日本全国・旅宿クラウド",
  description: "巨大な張子の寅が迎える毘沙門天総本山「信貴山朝護孫子寺」の新春開運初詣！登録有形文化財「開運橋」の冬景色と信貴山温泉のぬくもり、滋味あふれる猪鹿ぼたん鍋と奈良が誇る最高峰「大和牛」すき焼きに満たされる大和路の隠れ家名宿5選。",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nara-shigisan-chogosonshiji-hatsumode-onsen-yamatogyu-stay",
  },
  openGraph: {
    title: "【聖徳太子開創の霊峰・信貴山朝護孫子寺と世界一の福寅】2026-2027年冬の奈良・生駒＆信貴山！信貴山温泉と大和牛・ぼたん鍋名宿5選",
    description: "巨大な張子の寅が迎える毘沙門天総本山「信貴山朝護孫子寺」の新春開運初詣！登録有形文化財「開運橋」の冬景色と信貴山温泉のぬくもり、滋味あふれる猪鹿ぼたん鍋と奈良が誇る最高峰「大和牛」すき焼きに満たされる大和路の隠れ家名宿5選。",
    url: "https://croud-travel.pages.dev/winter-nara-shigisan-chogosonshiji-hatsumode-onsen-yamatogyu-stay",
    siteName: "日本全国・旅宿クラウド",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "https://img.travel.rakuten.co.jp/share/HOTEL/105993/105993.jpg",
        width: 1200,
        height: 630,
        alt: "【聖徳太子開創の霊峰・信貴山朝護孫子寺と世界一の福寅】2026-2027年冬の奈良・生駒＆信貴山！信貴山温泉と大和牛・ぼたん鍋名宿5選",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "【聖徳太子開創の霊峰・信貴山朝護孫子寺と世界一の福寅】2026-2027年冬の奈良・生駒＆信貴山！信貴山温泉と大和牛・ぼたん鍋名宿5選",
    description: "巨大な張子の寅が迎える毘沙門天総本山「信貴山朝護孫子寺」の新春開運初詣！登録有形文化財「開運橋」の冬景色と信貴山温泉のぬくもり、滋味あふれる猪鹿ぼたん鍋と奈良が誇る最高峰「大和牛」すき焼きに満たされる大和路の隠れ家名宿5選。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/105993/105993.jpg"],
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
      "name": "信貴山朝護孫子寺の新春初詣の混雑状況や参拝可能時間は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "正月三が日は関西一円から大勢の参拝客が訪れ、開運橋や本堂周辺、駐車場が混雑します。本堂での祈祷や戒壇巡りは終日行われていますが、混雑を避けるなら早朝（8:30前）か夕方16:00以降の参拝がおすすめです。境内は24時間参拝可能で、夜間の石灯籠ライトアップも幻想的です。"
      }
    },
    {
      "@type": "Question",
      "name": "信貴山の名物「ぼたん鍋」はどのような特徴がありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "信貴山周辺のぼたん鍋は、厳冬期に脂が乗った良質な猪肉を花びらのように美しく盛り付け、地元産の根菜やキノコとともに秘伝の合わせ味噌出汁で煮込んでいただきます。猪肉の脂は驚くほどあっさりしており、コラーゲンたっぷりで身体が芯から温まる冬一番の滋養強壮料理です。"
      }
    },
    {
      "@type": "Question",
      "name": "信貴山から法隆寺や奈良公園へは車や電車でどのくらいかかりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "信貴山から世界遺産の法隆寺までは車で約20分、奈良公園（東大寺・春日大社）へも車で約40〜45分程度です。電車の場合も王寺駅や生駒駅を経由してスムーズにアクセスできるため、古都奈良の新春社寺巡りの拠点として非常に便利です。"
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
      "name": "奈良県の宿",
      "item": "https://croud-travel.pages.dev/prefectures/nara"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "【聖徳太子開創の霊峰・信貴山朝護孫子寺と世界一の福寅】2026-2027年冬の奈良・生駒＆信貴山！信貴山温泉と大和牛・ぼたん鍋名宿5選",
      "item": "https://croud-travel.pages.dev/winter-nara-shigisan-chogosonshiji-hatsumode-onsen-yamatogyu-stay"
    }
  ]
};
  const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "毘沙門天王総本山・信貴山朝護孫子寺（世界一の福寅と登録有形文化財開運橋）",
  "description": "朝護孫子寺（ちょうごそんしじ）は、奈良県生駒郡平群町信貴山にある信貴山真言宗の総本山の寺院。山号は信貴山。本尊は毘沙門天。「信貴山寺」とも称し、一般には「信貴山の毘沙門さん」として知られる。初詣や「寅まつり」（2月下旬）は多くの参拝客でにぎわう。神仏習合の名残から、境内には鳥居も並んでいる。",
  "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/190104_Chogosonshiji_Heguri_Nara_pref_Japan01s3.jpg/1280px-190104_Chogosonshiji_Heguri_Nara_pref_Japan01s3.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
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
            href="/prefectures/nara"
            className="hover:text-stone-900 transition-colors"
          >
            奈良県
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-xs sm:max-w-md">
            【聖徳太子開創の霊峰・信貴山朝護孫子寺と世界一の福寅】2026-2027年冬の奈良・生駒＆信貴山！信貴山温泉と大和牛・ぼたん鍋名宿5選
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
                信貴山・生駒・斑鳩（奈良県）
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              【聖徳太子開創の霊峰・信貴山朝護孫子寺と世界一の福寅】2026-2027年冬の奈良・生駒＆信貴山！信貴山温泉と大和牛・ぼたん鍋名宿5選
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl pt-2">
              大阪と奈良の境界にそびえる生駒山地の南端、標高437mの信貴山（しぎさん）の山懐に広がる「信貴山朝護孫子寺（ちょうごそんしじ）」。今から約1400年前、聖徳太子が物部守屋討伐の戦勝祈願をした際、天空に毘沙門天王が現れ必勝の秘法を授けたのが「寅の年・寅の日・寅の刻」であったと伝わり、毘沙門天信仰の総本山として全国に知られます。境内入口で参拝客を出迎えるのは、首を振る巨大な「世界一福寅（張子の寅）」。一歩足を踏み入れれば、金運・商売繁盛・開運招福の強い気が満ち溢れ、新春初詣には関西一円から膨大な参拝者が訪れます。谷を渡る国の登録有形文化財「開運橋」から望む冬の渓谷美や、本堂舞台から大和盆地を一望するパノラマは息を呑む絶景。参拝の後は、信貴山の清らかな山懐に湧く「信貴山温泉」で冷えた身体を解きほぐし、冬に最も脂が乗る猪肉を使った名物「ぼたん鍋」や、鎌倉時代からの歴史を誇る奈良の最高峰銘柄牛「大和牛（やまとうし）」のすき焼きに舌鼓。古都の歴史と大自然の温もりに包まれる至福の大和冬旅をご案内します。
            </p>
          </div>
        </header>

        {/* なぜこの冬訪れるべきか */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                この冬、信貴山・生駒・斑鳩を訪れるべき3つの理由
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    聖徳太子ゆかりの毘沙門天総本山！「世界一の福寅」と本堂戒壇巡りで掴む新春最強開運
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  聖徳太子が開創し、楠木正成や徳川家康など歴代の名将も祈願した信貴山朝護孫子寺。境内には世界一大きな張子の福寅が鎮座。本堂の下を真っ暗闇の中で手探りで巡り、毘沙門天の宝珠に触れてご縁を結ぶ「戒壇巡り」は新春の開運祈願に欠かせない特別な体験です。
                </p>
              </div>
            

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    国登録有形文化財「開運橋」の冬景色と大和盆地を見晴らす本堂舞台の大パノラマ
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  信貴山へと架かる日本最古のカンチレバー橋「開運橋」は国の登録有形文化財。冬の澄んだ大気の中、赤く美しいトラス橋と白銀の渓谷が織りなす景観は圧巻。さらに断崖にせり出す本堂舞台からは、冬晴れの大和盆地や遠く三輪山・葛城山まで一望する雄大な景色が広がります。
                </p>
              </div>
            

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    身体の芯から温まる「信貴山温泉」の湯浴みと冬の郷土味覚「名物ぼたん鍋＆大和牛」
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  信貴山の山懐に湧き出る天然温泉は、肌に優しい単純温泉で冷えた身体を芯から温めてくれます。冬のご馳走は、特製味噌出汁で煮込む滋味豊かな「ぼたん鍋（猪鍋）」と、柔らかな肉質と上品な甘みを持つ奈良のブランド和牛「大和牛」のすき焼き。心身が満たされる大和路の美味です。
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
・電車・公共交通：近鉄生駒線「信貴山下駅」またはJR・近鉄「王寺駅」北口より奈良交通バス「信貴山門」行きで約20分。大阪方面からは、近鉄大阪線「山本駅」経由信貴山口駅より西信貴ケーブル「高安山駅」下車、近鉄バス「信貴山門」行きで約7分。大阪難波駅から王寺駅までJR大和路快速で約20分と至近。
・車・マイカー：西名阪自動車道「法隆寺IC」または「香芝IC」より国道25号経由で約20〜25分。第二阪奈道路「壱分IC」より信貴生駒スカイライン経由で約30分。大阪市内から約45分。
・法隆寺・斑鳩エリアへの周遊：信貴山から世界遺産「法隆寺」へは車で約20分。新春の聖徳太子ゆかりの地を巡るドライブコースに最適。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月下旬〜1月下旬（信貴山朝護孫子寺新春初詣、冬の澄んだ夜景、ぼたん鍋と温泉の旬）。
・気温の目安：山上の信貴山は奈良盆地や大阪平野部よりも気温が2〜3℃低く、冬の朝晩は氷点下近くまで冷え込みます。日中は6〜10℃前後。
・服装のポイント：境内は山肌に沿って階段や坂道が多いため、歩きやすい防寒シューズまたはスニーカーが最適。厚手のコートやダウンジャケット、手袋を着用して温かい服装でお参りください。
            </div>
          </div>
        </section>

        {/* Wikipedia 公式アーカイブ連携スポット */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-900 text-white rounded-2xl overflow-hidden shadow-lg border border-stone-800">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-6 relative min-h-[240px]">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ab/190104_Chogosonshiji_Heguri_Nara_pref_Japan01s3.jpg/1280px-190104_Chogosonshiji_Heguri_Nara_pref_Japan01s3.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="毘沙門天王総本山・信貴山朝護孫子寺（世界一の福寅と登録有形文化財開運橋）"
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
                    毘沙門天王総本山・信貴山朝護孫子寺（世界一の福寅と登録有形文化財開運橋）
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    朝護孫子寺（ちょうごそんしじ）は、奈良県生駒郡平群町信貴山にある信貴山真言宗の総本山の寺院。山号は信貴山。本尊は毘沙門天。「信貴山寺」とも称し、一般には「信貴山の毘沙門さん」として知られる。初詣や「寅まつり」（2月下旬）は多くの参拝客でにぎわう。神仏習合の名残から、境内には鳥居も並んでいる。
                  </p>
                </div>
                <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-800 flex items-center justify-between">
                  <span>出典：ウィキペディア（Wikipedia）</span>
                  <a
                    href="https://ja.wikipedia.org/wiki/朝護孫子寺"
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
              信貴山・生駒・斑鳩 厳選の温泉＆名宿5選
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/105993/105993.jpg"
                    alt="柿本家"
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
                        創業百余年・信貴山を望む絶景露天風呂付き客室と本格大和牛懐石の名料亭旅館
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.61</span>
                        <span className="text-stone-400 font-normal">（117件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F105993%2F105993.html" target="_blank" rel="noopener noreferrer">
                        柿本家
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      信貴山の緑豊かな山懐に佇み、創業100年を超える歴史と格式を誇る名門料亭旅館。客室からは信貴山の雄大な稜線や渓谷美が一望でき、露天風呂付き客室では冬の澄んだ星空と冷涼な空気を感じながらプライベートな湯浴みが楽しめます。宿の真骨頂である料理は、選び抜かれた奈良の銘柄「大和牛」の炭火焼きや、旬の大和野菜を美しく散りばめた極上の会席料理。日常を忘れ、心静かに特別な記念日や冬の休日を過ごしたい大人のための名宿です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>信貴山の四季折々の自然と渓谷を見晴らすテラス付き露天風呂客室</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>料理長が腕を振るう四季の本格懐石・A5ランク大和牛の極上ステーキ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>創業百余年の歴史と洗練された和モダン空間が織りなす上質な時間</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「室内風呂でゆっくり、細やかな気遣いに感謝室内風呂付きに泊まるのは初めてですが、自分の好きなタイミングで入れゆっくり過ごすことが出来ました。ご飯を豪華にしたかったので、マタニティプランにはしなかった…　2026-09-06 21:52:24投…」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥9,150〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F105993%2F105993.html"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/8137/8137.jpg"
                    alt="天然湧出信貴山温泉　信貴山観光ホテル"
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
                        信貴山温泉の自家源泉宿・朝護孫子寺徒歩圏と名物ぼたん鍋の伝統旅館
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.42</span>
                        <span className="text-stone-400 font-normal">（515件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8137%2F8137.html" target="_blank" rel="noopener noreferrer">
                        天然湧出信貴山温泉　信貴山観光ホテル
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      信貴山朝護孫子寺の門前に位置し、信貴山観光や新春初詣の拠点として絶大な人気を誇る温泉旅館。地下から自然湧出する天然信貴山温泉は、肌に優しくじんわりと温まる単純温泉で、広々とした大浴場や冬の雪景色を望む露天風呂で心ゆくまで癒やされます。夕食の目玉は、冬限定の名物「ぼたん鍋」。特製味噌出汁で煮込む新鮮な猪肉は臭みが全くなく、濃厚な脂の甘みと地場野菜の旨味が溶け合って格別の美味しさを誇ります。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>信貴山唯一の自家湧出天然温泉！大浴場と信貴の山並みを望む露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>朝護孫子寺まで徒歩数分！開運初詣の拠点に抜群のロケーション</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>冬の味覚の王様「天然猪肉の特製ぼたん鍋」と大和牛のすき焼きプラン</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「家から電車で送迎もあり、手軽に利用してます。リーズナブルなお値段とアットホーム的な接客も気に入ってます。特に気に入ってるのは、露天風呂です。こじんまりしてますが、開放的です。クチコミの詳細はこ…　2026-10-02 09:04:34投稿 …」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥11,550〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8137%2F8137.html"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/44913/44913.jpg"
                    alt="わんわんパラダイス　奈良生駒（旧：亀の井ホテル　大和平群）"
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
                        信貴山麓・愛犬と一緒に泊まれる天然平群温泉のリゾートホテル
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.28</span>
                        <span className="text-stone-400 font-normal">（560件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44913%2F44913.html" target="_blank" rel="noopener noreferrer">
                        わんわんパラダイス　奈良生駒（旧：亀の井ホテル　大和平群）
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      信貴山の麓、平群の豊かな自然に抱かれた愛犬家御用達のリゾートホテル。大切な愛犬と一緒に気兼ねなく温泉旅行が楽しめる設備が整っており、広々とした客室やドッグランで愛犬ものびのび過ごせます。館内には天然平群温泉が注がれる大浴場があり、美肌効果の高いお湯で冷えた身体を温められます。夕食には大和牛の陶板焼きなど、奈良の味覚を散りばめた会席料理が提供され、家族みんなで笑顔になれる冬の思い出作りをサポートします。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>愛犬同伴専用ルーム完備！屋内外ドッグランとペット用アメニティ充実</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>肌触りなめらかな天然平群温泉の大浴場とサウナで心身リフレッシュ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>大和牛や奈良の旬菜を味わう本格和食コースディナー</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「愛犬と一緒に快適に過ごせて大満足愛犬と、仲良く旅行できて、設備も整っていて満足しました。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/ho…　2026-10-03 16:54:58投稿 …」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥7,770〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44913%2F44913.html"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/129481/129481.jpg"
                    alt="生駒のお宿　城山旅館"
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
                        生駒山麓の絶景料理旅館・大阪平野のきらめく夜景と本格会席料理
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.11</span>
                        <span className="text-stone-400 font-normal">（120件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129481%2F129481.html" target="_blank" rel="noopener noreferrer">
                        生駒のお宿　城山旅館
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      生駒山の中腹、宝山寺の参道近くの高台に佇む料理自慢の老舗旅館。宿の最大の魅力は、窓一面に広がる息を呑むような大阪平野の大パノラマ夜景。冬の澄み渡る空気の中で瞬く無数の街明かりを、お部屋にいながら静かに鑑賞できます。お料理は腕利きの料理人が旬の素材を吟味して仕立てる本格和食会席。大和牛のしゃぶしゃぶやすき焼き、冬の旬魚が美しく並び、信貴山初詣と合わせた贅沢な山の手ステイを満喫できます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>客室や展望ロビーから大阪平野の100万ドルの夜景を一望するロケーション</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>毎朝市場で仕入れる鮮魚と大和牛を盛り込んだ老舗の本格会席</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>アットホームで細やかなもてなしと生駒山・信貴山への好アクセス</span></li>
                    </ul>
                  </div>

                  

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥9,100〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129481%2F129481.html"
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/153484/153484.jpg"
                    alt="門前おかげ楼"
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
                        国の登録有形文化財・生駒山門前の昭和モダン建築と身体に優しい薬膳料理
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.00</span>
                        <span className="text-stone-400 font-normal">（69件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153484%2F153484.html" target="_blank" rel="noopener noreferrer">
                        門前おかげ楼
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      生駒山の門前町に佇み、昭和初期の貴重な近代和風建築として国の登録有形文化財に指定されている格式高い料理旅館。歴史を感じさせる欄間や格子窓、重厚な木造の設えが訪れる旅人をノスタルジックな世界へと誘います。料理は漢方や薬膳の知恵を取り入れた体に優しい会席で、冬の冷えを解消し免疫力を高めてくれる鍋料理や季節の小鉢が好評。静けさの中で古き良き日本の美意識に浸る、大人の隠れ家ステイに最適です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>昭和初期の面影を今に伝える登録有形文化財の風情ある建物</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>スパイスと漢方を取り入れた薬膳料理や身体を温める鍋料理</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>レトロな趣と木の温もりに包まれる静寂の隠れ家ステイ</span></li>
                    </ul>
                  </div>

                  

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥5,500〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153484%2F153484.html"
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
                冬の信貴山・生駒・斑鳩旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-3">

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    信貴山朝護孫子寺の新春初詣の混雑状況や参拝可能時間は？
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    正月三が日は関西一円から大勢の参拝客が訪れ、開運橋や本堂周辺、駐車場が混雑します。本堂での祈祷や戒壇巡りは終日行われていますが、混雑を避けるなら早朝（8:30前）か夕方16:00以降の参拝がおすすめです。境内は24時間参拝可能で、夜間の石灯籠ライトアップも幻想的です。
                  </p>
                </div>
              </div>
            

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    信貴山の名物「ぼたん鍋」はどのような特徴がありますか？
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    信貴山周辺のぼたん鍋は、厳冬期に脂が乗った良質な猪肉を花びらのように美しく盛り付け、地元産の根菜やキノコとともに秘伝の合わせ味噌出汁で煮込んでいただきます。猪肉の脂は驚くほどあっさりしており、コラーゲンたっぷりで身体が芯から温まる冬一番の滋養強壮料理です。
                  </p>
                </div>
              </div>
            

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    信貴山から法隆寺や奈良公園へは車や電車でどのくらいかかりますか？
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    信貴山から世界遺産の法隆寺までは車で約20分、奈良公園（東大寺・春日大社）へも車で約40〜45分程度です。電車の場合も王寺駅や生駒駅を経由してスムーズにアクセスできるため、古都奈良の新春社寺巡りの拠点として非常に便利です。
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
                href="/prefectures/nara"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>奈良県のおすすめ温泉宿・ホテル一覧</span>
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
