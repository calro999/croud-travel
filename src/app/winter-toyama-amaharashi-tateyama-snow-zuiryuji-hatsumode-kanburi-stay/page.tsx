import React from 'react';
import Link from 'next/link';
import { MapPin, Calendar, Star, ExternalLink, ChevronRight, Sparkles, Compass, ShieldCheck, Heart } from 'lucide-react';

export const metadata = {
  title: '富山湾越しの冠雪立山連峰・雨晴海岸と国宝瑞龍寺初詣：2026-2027年冬の富山・高岡＆氷見！寒ぶりの王様「ひみ寒ぶり」会席名宿5選',
  description: '冬晴れの富山湾越しに3,000m級の立山連峰が海に浮かぶ奇跡の絶景「雨晴海岸」！前田利長公の菩提寺・国宝「高岡瑞龍寺」新春開運初詣。11月〜1月に極上の脂がのる「ひみ寒ぶり」の刺身・しゃぶしゃぶ・ブリ大根と展望温泉を満喫する富山の厳選名宿5選。',
  keywords: ['雨晴・高岡・氷見', '富山県 温泉', '冬旅行', '初詣', '11月旅行', '12月旅行', '1月旅行', '宿泊予約', '楽天トラベル'],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-toyama-amaharashi-tateyama-snow-zuiryuji-hatsumode-kanburi-stay/',
  },
  openGraph: {
    title: '富山湾越しの冠雪立山連峰・雨晴海岸と国宝瑞龍寺初詣：2026-2027年冬の富山・高岡＆氷見！寒ぶりの王様「ひみ寒ぶり」会席名宿5選',
    description: '冬晴れの富山湾越しに3,000m級の立山連峰が海に浮かぶ奇跡の絶景「雨晴海岸」！前田利長公の菩提寺・国宝「高岡瑞龍寺」新春開運初詣。11月〜1月に極上の脂がのる「ひみ寒ぶり」の刺身・しゃぶしゃぶ・ブリ大根と展望温泉を満喫する富山の厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-toyama-amaharashi-tateyama-snow-zuiryuji-hatsumode-kanburi-stay/',
    siteName: '冬の日本厳選旅行ガイド',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/171911/171911.jpg',
        width: 1200,
        height: 630,
        alt: '【富山湾越しの冠雪立山連峰・雨晴海岸と国宝瑞龍寺初詣】2026-2027年冬の富山・高岡＆氷見！寒ぶりの王様「ひみ寒ぶり」会席名宿5選',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '富山湾越しの冠雪立山連峰・雨晴海岸と国宝瑞龍寺初詣：2026-2027年冬の富山・高岡＆氷見！寒ぶりの王様「ひみ寒ぶり」会席名宿5選',
    description: '冬晴れの富山湾越しに3,000m級の立山連峰が海に浮かぶ奇跡の絶景「雨晴海岸」！前田利長公の菩提寺・国宝「高岡瑞龍寺」新春開運初詣。11月〜1月に極上の脂がのる「ひみ寒ぶり」の刺身・しゃぶしゃぶ・ブリ大根と展望温泉を満喫する富山の厳選名宿5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/171911/171911.jpg'],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "【富山湾越しの冠雪立山連峰・雨晴海岸と国宝瑞龍寺初詣】2026-2027年冬の富山・高岡＆氷見！寒ぶりの王様「ひみ寒ぶり」会席名宿5選",
      "description": "冬晴れの富山湾越しに3,000m級の立山連峰が海に浮かぶ奇跡の絶景「雨晴海岸」！前田利長公の菩提寺・国宝「高岡瑞龍寺」新春開運初詣。11月〜1月に極上の脂がのる「ひみ寒ぶり」の刺身・しゃぶしゃぶ・ブリ大根と展望温泉を満喫する富山の厳選名宿5選。",
      "image": "https://img.travel.rakuten.co.jp/share/HOTEL/171911/171911.jpg",
      "datePublished": "",
      "dateModified": "",
      "author": {
        "@type": "Organization",
        "name": "Japan Travel Curations"
      }
    },
    {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Hotel",
            "name": "移り住みたくなる宿『イミグレ』",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/171911/171911.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "富山県",
              "streetAddress": "富山県 氷見市小杉232番地1"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.54",
              "reviewCount": "82"
            },
            "priceRange": "¥10,390〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Hotel",
            "name": "ブリと氷見牛の宿　ひみ栄和温泉元湯　民宿　叶",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/108620/108620.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "富山県",
              "streetAddress": "富山県 氷見市阿尾2810"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.51",
              "reviewCount": "488"
            },
            "priceRange": "¥15,400〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Hotel",
            "name": "氷見温泉郷　くつろぎの宿　うみあかり",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/20589/20589.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "富山県",
              "streetAddress": "富山県 氷見市宇波10-1"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.4",
              "reviewCount": "1890"
            },
            "priceRange": "¥19,360〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Hotel",
            "name": "雨晴温泉　磯はなび",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/108675/108675.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "富山県",
              "streetAddress": "富山県 高岡市太田88-1"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.27",
              "reviewCount": "1076"
            },
            "priceRange": "¥11,000〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Hotel",
            "name": "ホテルルートイン高岡駅前",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/161065/161065.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "富山県",
              "streetAddress": "富山県 高岡市下関町4-63"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.27",
              "reviewCount": "753"
            },
            "priceRange": "¥6,150〜"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "雨晴海岸から立山連峰が綺麗に見える時間帯や気象条件は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "海越しの立山連峰が最も鮮明に見えるのは、冬型の気圧配置が緩んだ「冬晴れの早朝から午前中」です。太陽が立山連峰の背後から昇るため、朝はドラマチックなシルエットと朝焼け、午前10時頃からは順光気味に純白の雪山が青空に美しく輝きます。気温が急激に下がる日の夜明けには「気あらし」も期待できます。"
          }
        },
        {
          "@type": "Question",
          "name": "「ひみ寒ぶり」の定義と最も美味しい時期は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "「ひみ寒ぶり」は、富山湾の定置網で捕獲され、氷見漁港で競りにかけられた6kg以上の脂ののった天然ブリに対して、氷見魚市場の判定委員会が宣言を出した期間のみ名乗ることができる最高級ブランドです。最も身が引き締まり脂がのる旬のピークは12月上旬から1月中旬です。"
          }
        },
        {
          "@type": "Question",
          "name": "国宝瑞龍寺の見どころと初詣の所要時間は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "瑞龍寺は総門・山門・仏殿・法堂が一直線に並ぶ美しい伽藍配置が特徴です。特に総欅造りの山門や、鉛瓦が葺かれた仏殿、烏瑟沙摩明王（うすさまみょうおう）を祀る法堂など、随所に前田家の栄華と卓越した大工技術が見られます。境内見学と初詣の所要時間は約45〜60分です。"
          }
        }
      ]
    }
  ]
}),
        }}
      />

      <article className="min-h-screen bg-stone-50/50 pb-20">
        {/* ヒーローヘッダー */}
        <header className="relative bg-gradient-to-br from-cyan-950 via-sky-950 to-stone-900 text-white py-14 sm:py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
            <img
              src="https://img.travel.rakuten.co.jp/share/HOTEL/171911/171911.jpg"
              alt="背景画像"
              className="w-full h-full object-cover blur-sm"
            />
          </div>
          <div className="max-w-4xl mx-auto relative z-10 space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <Link href="/" className="text-cyan-200 hover:text-white transition-colors">
                TOP
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <Link href="/features" className="text-cyan-200 hover:text-white transition-colors">
                冬の厳選特集
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <Link href="/prefectures/toyama" className="text-cyan-200 hover:text-white transition-colors">
                富山県
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-100">雨晴・高岡・氷見</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-xs px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年冬（11月・12月・1月）完全ガイド</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">「富山湾越しの冠雪立山連峰・雨晴海岸と国宝瑞龍寺初詣」2026-2027年冬の富山・高岡＆氷見！寒ぶりの王様「ひみ寒ぶり」会席名宿5選</h1>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed pt-2">
              冬晴れの富山湾越しに3,000m級の立山連峰が海に浮かぶ奇跡の絶景「雨晴海岸」！前田利長公の菩提寺・国宝「高岡瑞龍寺」新春開運初詣。11月〜1月に極上の脂がのる「ひみ寒ぶり」の刺身・しゃぶしゃぶ・ブリ大根と展望温泉を満喫する富山の厳選名宿5選。
            </p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 mt-10 space-y-12">
          {/* イントロダクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm sm:text-base border-b border-stone-100 pb-2">
              <Compass className="w-5 h-5 text-cyan-700" />
              <h2>冬の雨晴・高岡・氷見探訪：静寂と温もりに包まれる旅の魅力</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              北アルプスから吹き下ろす雪混じりの風と、日本海の荒波が冬の訪れを告げる富山湾。湿度が下がり空気が極限まで澄み渡る11月下旬から1月、この地は世界中どこを探しても見られない奇跡的な冬の絶景と、海の幸の最高峰に包まれます。能登半島国定公園に指定された「雨晴海岸（あまはらしかいがん）」は、源義経主従がにわか雨の晴れるのを待ったという伝説の「義経岩」や、波打ち際にたたずむ「女岩（めいわ）」が象徴的な名勝。冬晴れの朝、富山湾を隔てて海上に忽然と姿を現すのは、標高3,000m級の北アルプス・立山連峰の純白の稜線です。標高差3,000mの冠雪山脈を海越しに眺望できる景勝地は世界でも雨晴海岸を含めて極めて稀であり、冬の早朝には海水温と冷気の温度差によって海面から水蒸気が立ち上る「気あらし（けあらし）」が加わり、息を呑むほど神々しい光景を描き出します。海岸から高岡市街へと向かえば、加賀前田家二代当主・前田利長公の菩提寺として建立された曹洞宗の名刹「国宝・高岡瑞龍寺（ずいりゅうじ）」へ。総門、山門、仏殿、法堂が一直線に並び、回廊で結ばれた中国禅宗様建築の最高傑作は、新春の初詣に厳かな開運祈願の場となります。そして冬の富山湾が誇る絶対王者こそが「ひみ寒ぶり（氷見寒鰤）」。丸々と太り、背中まで脂が乗った寒ぶりの刺身は醤油を弾くほど濃厚で、さっと出汁にくぐらせる「ブリしゃぶ」や、味が染み渡った「ブリ大根」は言葉を失う美味さ。展望露天風呂から雪山と海を仰ぎ、冬の美食の頂点を極める富山の旅へご案内します。
            </p>
          </section>

          {/* 訪れるべき3つの理由 */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-800" />
              <span>この冬、雨晴・高岡・氷見を訪れるべき3つの理由</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                世界でも奇跡の絶景！「雨晴海岸」富山湾越しに望む純白の冠雪立山連峰
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              海の上に雪を冠した3,000m級の立山連峰が浮かび上がる世界的絶景。11月から1月の晴天日には雪をまとった剱岳や立山三山が青空に鮮明に映え、波打ち際の女岩との対比は息を呑む迫力です。早朝に海面を覆う幻想的な水煙「気あらし」も冬だけの特別な自然美です。
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                加賀前田家の美の極致！国宝「高岡瑞龍寺」新春開運初詣と荘厳な禅宗伽藍
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              前田利長公の菩提寺であり、富山県唯一の国宝建造物である瑞龍寺。左右対称に美しく配置された山門・仏殿・法堂の凛とした佇まいは圧巻で、冬の雪化粧をまとった庭園と回廊は静謐な祈りの空気に満たされます。新春の厄除けや心願成就の初詣に最適です。
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                冬の富山湾の絶対王者！本場「ひみ寒ぶり」の刺身・ブリしゃぶ・ブリ大根会席
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              11月下旬に発令される「ひみ寒ぶり宣言」とともに旬の頂点を迎える寒鰤。厳しい日本海の荒波で鍛えられ、脂の乗り切った寒ぶりは口の中でとろける甘みと旨味を放ちます。富山湾のきときと（新鮮）な魚介や氷見牛とともに、冬の味覚の真髄を味わい尽くせます。
            </p>
          </div>
            </div>
          </section>

          {/* 近隣名所アーカイブ（Wikipedia公式連携） */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h2 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-800" />
                <span>近隣名所アーカイブ：能登半島国定公園・雨晴海岸（富山湾越しに望む冠雪立山連峰・冬の世界的絶景）</span>
              </h2>
              <span className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                Wikipedia公式連携
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8c/Himi-line-amaharashi.jpg/1280px-Himi-line-amaharashi.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="能登半島国定公園・雨晴海岸（富山湾越しに望む冠雪立山連峰・冬の世界的絶景）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  【能登半島国定公園・雨晴海岸（富山湾越しに望む冠雪立山連峰・冬の世界的絶景）の見どころと歴史】
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  雨晴海岸（あまはらしかいがん）は、富山県高岡市北部の海岸。付近は男岩や女岩をはじめとする小さな島や岩礁が多く、立山連峰を背景に望む景勝地である。能登半島国定公園に含まれ、日本の渚百選に選ばれている。富山県指定の「氷見海岸鳥獣保護区」の一部として鳥獣保護区にもなっている。 雨晴駅の近くには「雨を晴らした」という地名の由来となった義経伝説が残る義経岩がある。
                </p>
                <div className="text-[11px] text-stone-400">
                  出典：フリー百科事典『ウィキペディア（Wikipedia）』より
                </div>
              </div>
            </div>
          </section>

          {/* 厳選名宿5選 */}
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-cyan-800 uppercase tracking-wider">
                  Hotel Curations
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900">
                  雨晴・高岡・氷見 厳選の温泉＆名宿5選
                </h2>
              </div>
              <p className="text-xs text-stone-500">
                ※楽天トラベルAPI最新空室・料金データ連携中
              </p>
            </div>

            <div className="space-y-6">
            {/* 宿1: 移り住みたくなる宿『イミグレ』 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 1
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.54</span>
                    <span className="text-stone-400 text-xs font-normal">（82件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    移り住みたくなる宿『イミグレ』
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    氷見の海岸沿いに佇む絶景オーシャンビューホテル・富山湾フレンチと波の音
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/171911/171911.jpg"
                      alt="移り住みたくなる宿『イミグレ』"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      氷見の小高い海沿いに位置し、富山湾の壮大なパノラマと立山連峰の稜線を望む全室オーシャンビューの上質なブティックホテル。白を基調とした洗練された客室は大きな窓を備え、波のせせらぎを聞きながら冬の海の色彩の移ろいを心ゆくまで鑑賞できます。ディナーは富山湾のキトキトな冬の寒ぶりや旬魚介、氷見牛をフレンチの手法で美しく仕立てた極上コース。都会の喧騒を離れて大人の贅沢な冬を過ごすのに最適です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全室から富山湾と立山連峰の絶景を望むデザイナーズ・オーシャンリゾート</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>ウッドデッキテラスから眺める朝日の昇る富山湾と静寂の波音</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>氷見寒ぶりや氷見牛など地元富山の極上食材を昇華させた本格フレンチコース</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「富山湾の絶景と絶品フレンチ、最高のおもてなし北アルプスの薬師岳に登った後に氷見のイミグレさんにおじゃましました。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 10,390円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F171911%2F171911.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿2: ブリと氷見牛の宿　ひみ栄和温泉元湯　民宿　叶 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 2
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.51</span>
                    <span className="text-stone-400 text-xs font-normal">（488件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ブリと氷見牛の宿　ひみ栄和温泉元湯　民宿　叶
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    天然温泉かけ流し！店主自ら競り落とす極上「ひみ寒ぶり」尽くし専門旅館
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/108620/108620.jpg"
                      alt="ブリと氷見牛の宿　ひみ栄和温泉元湯　民宿　叶"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      氷見の海沿いに佇み、全国の美食家が「冬の寒ぶり」を目当てに集う名物温泉民宿・旅館。宿の最大の自慢は、店主が自ら氷見漁港の競りで仕入れる本物の「ひみ寒ぶり」を頭から尾まで余すところなく堪能できる豪華会席。さらに自家源泉の天然温泉はナトリウム・塩化物泉で保温効果が高く、冬の冷えた身体を芯から温めます。本物の味と名湯に出会える冬の富山随一の美食の宿です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>氷見漁港の競り権を持つ店主が厳選する本物の最高峰「ひみ寒ぶり」フルコース</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>敷地内から滾々と湧き出る自家源泉「ひみ栄和温泉」の源泉かけ流し天然温泉</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>刺身・ブリしゃぶ・ブリ大根・塩焼き・カブト焼きと寒ぶりの全てを味わい尽くす贅沢</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「割引でお得に宿泊、料理も美味しく完食氷見割ほかの割引が多数使えて安く泊まれました。部屋は狭めで、テレビをどこから見るか迷いましたが、料理はおいしく、完食させていただきました。風呂も狭めですが、男性。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 15,400円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108620%2F108620.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿3: 氷見温泉郷　くつろぎの宿　うみあかり */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 3
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.40</span>
                    <span className="text-stone-400 text-xs font-normal">（1890件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    氷見温泉郷　くつろぎの宿　うみあかり
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    海に浮かぶような絶景インフィニティ露天風呂・富山湾一望の天然温泉リゾート
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/20589/20589.jpg"
                      alt="氷見温泉郷　くつろぎの宿　うみあかり"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      氷見温泉郷の北端、富山湾の波打ち際に建つ絶景温泉ホテル。自慢の露天風呂は湯船の縁が海へと続くかのようなインフィニティ設計で、冬晴れの日には富山湾越しに純白の立山連峰を眺めながらの至高の湯浴みが堪能できます。客室からも海から昇る朝日を一望。夕食には氷見漁港から直送される寒ぶりの刺身やしゃぶしゃぶ、氷見牛のステーキが並び、富山の冬の醍醐味を五感で満喫できます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>海と湯面が一体化するインフィニティ絶景露天風呂「潮風の湯」</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>富山湾越しに冠雪立山連峰を望む展望客室と海辺の静寂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>氷見漁港直送の新鮮寒ぶり会席や白えび・氷見牛の豪華ディナー</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「癒される旅一人旅で利用させていただきました。建物の年数は感じますが、お部屋などリノベーションされておりとても綺麗でした。14時～21時までのソフトクリームとコーヒーお茶でロビーで雑誌を読みなが。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 19,360円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20589%2F20589.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿4: 雨晴温泉　磯はなび */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 4
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.27</span>
                    <span className="text-stone-400 text-xs font-normal">（1076件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    雨晴温泉　磯はなび
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    雨晴海岸の高台に位置する和風温泉旅館・海と立山連峰を望む絶景露天風呂
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/108675/108675.jpg"
                      alt="雨晴温泉　磯はなび"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      名勝・雨晴海岸を見下ろす丘の上に佇み、富山湾と立山連峰のパノラマビューを誇る名門温泉旅館。海に向かってせり出すように造られた展望露天風呂からは、冬の澄んだ大気の中に浮かび上がる立山連峰の雄姿を眺めながら、良質な天然温泉に身を委ねることができます。夕食には冬の寒ぶりを中心に、日本海の海の幸を丁寧に仕立てた会席料理が供され、新春初詣と雨晴海岸観光の拠点として最高峰の寛ぎを提供します。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>雨晴海岸を眼下に望む高台の特等席！全室オーシャンビューの和風旅館</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>波の音と潮風を感じながら立山連峰を仰ぐ展望露天風呂「磯の音」</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>冬の富山湾の王者・寒ぶり料理と日本海の旬魚介をふんだんに使った会席膳</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「全体的に良かったです。もう少し食事が良ければ、最高です。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 11,000円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108675%2F108675.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿5: ホテルルートイン高岡駅前 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 5
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.27</span>
                    <span className="text-stone-400 text-xs font-normal">（753件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテルルートイン高岡駅前
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    JR高岡駅徒歩1分！国宝瑞龍寺へのアクセス抜群・ラジウム人工温泉大浴場完備
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/161065/161065.jpg"
                      alt="ホテルルートイン高岡駅前"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      JR高岡駅前に位置し、国宝・高岡瑞龍寺への新春初詣や、JR氷見線を利用した雨晴海岸・氷見へのアクセス拠点として抜群の利便性を誇るホテル。館内には旅の疲労を優しく癒やすラジウム人工温泉大浴場を備え、冬の観光帰りに心ゆくまで温まることができます。全室に加湿空気清浄機や快適ベッドが整い、充実の無料朝食バイキングとともにアクティブな冬の富山旅を快適にサポートします。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>JR高岡駅古城公園口より徒歩1分！国宝瑞龍寺へも徒歩約10分の好立地</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>旅の疲れをじんわり解きほぐすラジウム人工温泉大浴場「旅人の湯」</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>ヨーロッパ直輸入の焼きたてパンが楽しめる無料バイキング朝食</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「受付の人の対応が悪いチェックインの対応する人数が一人しかいないためずいぶん待たされた。機械の導入等を考えた方が良い。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 6,150円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161065%2F161065.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>

          {/* ふるさと納税案内 */}
          <section className="bg-gradient-to-r from-amber-500/10 via-amber-50 to-orange-500/10 border border-amber-300/60 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-base sm:text-lg">
              <Heart className="w-5 h-5 text-amber-700" />
              <h2>楽天ふるさと納税で賢くお得に泊まる方法</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              楽天ふるさと納税を活用すると、寄付金額に応じた宿泊クーポンが返礼品として付与され、実質自己負担2,000円で憧れの高級温泉旅館や特別会席プランに宿泊できます。すでに予約済みの宿泊であっても「あとから割引」が適用可能なため、旅行の計画に合わせて手軽に節税とお得なステイを両立できます。
            </p>
            <div className="pt-2">
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                <span>楽天トラベル×ふるさと納税 対象宿一覧を見る</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* アクセス・気候・服装ガイド */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <h2 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2 border-b border-stone-100 pb-2">
              <Calendar className="w-5 h-5 text-cyan-800" />
              <span>アクセス・気候・おすすめの服装</span>
            </h2>
            <div className="space-y-2">
            <h4 className="font-bold text-stone-900 text-sm mt-3 first:mt-0">【エリアへのアクセス】</h4>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・電車・新幹線：JR北陸新幹線「新高岡駅」下車。JR城端線に乗り換えて高岡駅まで約3分。雨晴海岸へは高岡駅よりJR氷見線で「雨晴駅」まで約22分、駅より徒歩約5分。国宝瑞龍寺へは新高岡駅北口より徒歩約15分、または高岡駅瑞龍寺口より徒歩約10分。氷見温泉郷へは高岡駅よりJR氷見線で氷見駅まで約30分、各宿の無料送迎バス運行。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・車・マイカー：能越自動車道「高岡北IC」より雨晴海岸まで約15分、「氷見IC」より氷見温泉郷まで約10分。能越自動車道「高岡IC」より瑞龍寺まで約10分。東京（練馬IC）から関越・上信越・北陸道経由で約4時間30分、大阪（吹田IC）から名神・北陸道経由で約3時間45分。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・観光列車：土日祝日を中心にJR氷見線・城端線を走る観光列車「べるもんた（ベル・モンターニュ・エ・メール）。」から車窓の富山湾と立山連峰を望む旅も大人気。</p>
            <h4 className="font-bold text-stone-900 text-sm mt-3 first:mt-0">【見頃・気候・おすすめの服装】</h4>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・ベストシーズン：11月下旬〜1月下旬（ひみ寒ぶりの最盛期、冠雪立山連峰のベストビュー、瑞龍寺新春初詣）。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・気温の目安：日本海側の冬気候のため、12月下旬〜1月は雪の日が多くなります。最高気温は5〜8℃、最低気温は0℃前後に冷え込みます。冬晴れの日は放射冷却で朝の気温が氷点下に達します。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・服装のポイント：防寒・防水性に優れたロングダウンコート、マフラー、手袋、耳当てが必須です。雨晴海岸の波打ち際や雪の積もった境内を歩くため、防水・防滑仕様のブーツやスノーシューズでお越しください。車の場合はスタッドレスタイヤの装着が必須です。</p>
            </div>
          </section>

          {/* よくある質問 FAQ */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              冬の雨晴・高岡・氷見旅行 よくある質問（FAQ）
            </h2>
            <div className="space-y-3">
          <details className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden">
            <summary className="p-4 text-xs sm:text-sm font-bold text-stone-900 cursor-pointer flex items-center justify-between list-none">
              <span>雨晴海岸から立山連峰が綺麗に見える時間帯や気象条件は？</span>
              <span className="text-cyan-800 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
              海越しの立山連峰が最も鮮明に見えるのは、冬型の気圧配置が緩んだ「冬晴れの早朝から午前中」です。太陽が立山連峰の背後から昇るため、朝はドラマチックなシルエットと朝焼け、午前10時頃からは順光気味に純白の雪山が青空に美しく輝きます。気温が急激に下がる日の夜明けには「気あらし」も期待できます。
            </div>
          </details>

          <details className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden">
            <summary className="p-4 text-xs sm:text-sm font-bold text-stone-900 cursor-pointer flex items-center justify-between list-none">
              <span>「ひみ寒ぶり」の定義と最も美味しい時期は？</span>
              <span className="text-cyan-800 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
              「ひみ寒ぶり」は、富山湾の定置網で捕獲され、氷見漁港で競りにかけられた6kg以上の脂ののった天然ブリに対して、氷見魚市場の判定委員会が宣言を出した期間のみ名乗ることができる最高級ブランドです。最も身が引き締まり脂がのる旬のピークは12月上旬から1月中旬です。
            </div>
          </details>

          <details className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden">
            <summary className="p-4 text-xs sm:text-sm font-bold text-stone-900 cursor-pointer flex items-center justify-between list-none">
              <span>国宝瑞龍寺の見どころと初詣の所要時間は？</span>
              <span className="text-cyan-800 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
              瑞龍寺は総門・山門・仏殿・法堂が一直線に並ぶ美しい伽藍配置が特徴です。特に総欅造りの山門や、鉛瓦が葺かれた仏殿、烏瑟沙摩明王（うすさまみょうおう）を祀る法堂など、随所に前田家の栄華と卓越した大工技術が見られます。境内見学と初詣の所要時間は約45〜60分です。
            </div>
          </details>
            </div>
          </section>

          {/* 内部リンク */}
          <section className="bg-stone-100/70 rounded-2xl p-6 border border-stone-200 space-y-3 text-xs sm:text-sm">
            <h3 className="font-bold text-stone-800">あわせて読みたい関連特集</h3>
            <ul className="space-y-1.5 text-cyan-800">
              <li>
                <Link href="/prefectures/toyama" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>富山県のおすすめ観光名所＆温泉宿一覧</span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>全国の季節・目的別旅行特集一覧</span>
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>実質2,000円で泊まる名湯・高級温泉旅館ガイド</span>
                </Link>
              </li>
              <li>
                <Link href="/furusato-tax-local-gourmet-inn-stay" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>ご当地グルメを堪能する全国美食旅特集</span>
                </Link>
              </li>
            </ul>
          </section>
        </main>
      </article>
    </>
  );
}
