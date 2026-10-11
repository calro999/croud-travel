import React from 'react';
import Link from 'next/link';
import { MapPin, Calendar, Star, ExternalLink, ChevronRight, Sparkles, Compass, ShieldCheck, Heart } from 'lucide-react';

export const metadata = {
  title: '藍商人の白壁美・うだつの町並みと四国霊場切幡寺初詣：2026-2027年冬の徳島・美馬＆吉野川！阿波尾鶏地鶏鍋と清流温泉名宿5選',
  description: '江戸〜明治の藍商人たちが築いた重伝建「脇町・うだつの上がる町並み」の凛とした冬景色！四国八十八箇所第十番札所・切幡寺の五重塔新春初詣。徳島が誇る最高峰地鶏「阿波尾鶏」の水炊き・すき焼きと吉野川流域の美肌温泉に癒やされる冬の厳選名宿5選。',
  keywords: ['美馬・吉野川・阿波', '徳島県 温泉', '冬旅行', '初詣', '11月旅行', '12月旅行', '1月旅行', '宿泊予約', '楽天トラベル'],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-tokushima-mima-udatsu-kirihataji-hatsumode-awaodori-onsen-stay/',
  },
  openGraph: {
    title: '藍商人の白壁美・うだつの町並みと四国霊場切幡寺初詣：2026-2027年冬の徳島・美馬＆吉野川！阿波尾鶏地鶏鍋と清流温泉名宿5選',
    description: '江戸〜明治の藍商人たちが築いた重伝建「脇町・うだつの上がる町並み」の凛とした冬景色！四国八十八箇所第十番札所・切幡寺の五重塔新春初詣。徳島が誇る最高峰地鶏「阿波尾鶏」の水炊き・すき焼きと吉野川流域の美肌温泉に癒やされる冬の厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-tokushima-mima-udatsu-kirihataji-hatsumode-awaodori-onsen-stay/',
    siteName: '冬の日本厳選旅行ガイド',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/181667/181667.jpg',
        width: 1200,
        height: 630,
        alt: '【藍商人の白壁美・うだつの町並みと四国霊場切幡寺初詣】2026-2027年冬の徳島・美馬＆吉野川！阿波尾鶏地鶏鍋と清流温泉名宿5選',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '藍商人の白壁美・うだつの町並みと四国霊場切幡寺初詣：2026-2027年冬の徳島・美馬＆吉野川！阿波尾鶏地鶏鍋と清流温泉名宿5選',
    description: '江戸〜明治の藍商人たちが築いた重伝建「脇町・うだつの上がる町並み」の凛とした冬景色！四国八十八箇所第十番札所・切幡寺の五重塔新春初詣。徳島が誇る最高峰地鶏「阿波尾鶏」の水炊き・すき焼きと吉野川流域の美肌温泉に癒やされる冬の厳選名宿5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/181667/181667.jpg'],
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
      "headline": "【藍商人の白壁美・うだつの町並みと四国霊場切幡寺初詣】2026-2027年冬の徳島・美馬＆吉野川！阿波尾鶏地鶏鍋と清流温泉名宿5選",
      "description": "江戸〜明治の藍商人たちが築いた重伝建「脇町・うだつの上がる町並み」の凛とした冬景色！四国八十八箇所第十番札所・切幡寺の五重塔新春初詣。徳島が誇る最高峰地鶏「阿波尾鶏」の水炊き・すき焼きと吉野川流域の美肌温泉に癒やされる冬の厳選名宿5選。",
      "image": "https://img.travel.rakuten.co.jp/share/HOTEL/181667/181667.jpg",
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
            "name": "ＰＡＹＳＡＧＥ　ＭＯＲＩＧＵＣＨＩ（ペイサージュモリグチ）",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/181667/181667.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "徳島県",
              "streetAddress": "徳島県 美馬市脇町大字脇町148-4"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.33",
              "reviewCount": "10"
            },
            "priceRange": "¥17,820〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Hotel",
            "name": "癒しの宿　土柱ランド新温泉",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/13994/13994.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "徳島県",
              "streetAddress": "徳島県 阿波市阿波町桜ノ岡165"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.11",
              "reviewCount": "511"
            },
            "priceRange": "¥4,900〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Hotel",
            "name": "ビジネスホテルマツカ",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/9409/9409.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "徳島県",
              "streetAddress": "徳島県 美馬市脇町猪尻建神社下南153-1"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.1",
              "reviewCount": "1016"
            },
            "priceRange": "¥3,900〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Hotel",
            "name": "セントラルホテル鴨島",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/40401/40401.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "徳島県",
              "streetAddress": "徳島県 吉野川市鴨島町鴨島471-2"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4",
              "reviewCount": "543"
            },
            "priceRange": "¥5,000〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Hotel",
            "name": "ビジネスホテルアクセス阿波",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/67851/67851.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "徳島県",
              "streetAddress": "徳島県 阿波市土成町土成寒方51-4"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "3.79",
              "reviewCount": "253"
            },
            "priceRange": "¥3,800〜"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "うだつの町並みの見学所要時間とおすすめの立ち寄りスポットは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "うだつの上がる町並み（南町通り）の散策所要時間は約60〜90分です。国指定重要文化財「吉田家住宅（藍商屋敷）」では当時の豪商の暮らしぶりを間近に見学でき、昭和初期のレトロな木造芝居小屋「オデオン座」も見応え十分。町並み内の古民家カフェで阿波番茶を味わうのもおすすめです。"
          }
        },
        {
          "@type": "Question",
          "name": "四国霊場第十番・切幡寺の参拝のポイントと石段について教えてください。",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "切幡寺の本堂へは「男厄坂」「女厄坂」を含む合計333段の石段が続きます。石段を一歩一歩踏みしめて登ることで厄が落ちると言われていますが、足腰に不安がある場合は山上の駐車場まで車でアクセスすることも可能です。本堂奥にそびえる国宝級の重要文化財「大塔（二重塔）」の精緻な木造建築は必見です。"
          }
        },
        {
          "@type": "Question",
          "name": "「阿波尾鶏」と一般的な鶏肉の違いは何ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "阿波尾鶏は、徳島県の地鶏「阿波地鶏」の血統を引き、自然豊かな環境で80日以上かけて平飼いでゆったりと育てられるブランド地鶏です。特定JAS認定地鶏の中で日本一の出荷量を誇り、肉色は赤みを帯び、脂肪が少なく締まった肉質と、アミノ酸による深いコクと甘みが特徴です。鍋や焼き鳥でその違いが歴然と分かります。"
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
              src="https://img.travel.rakuten.co.jp/share/HOTEL/181667/181667.jpg"
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
              <Link href="/prefectures/tokushima" className="text-cyan-200 hover:text-white transition-colors">
                徳島県
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-100">美馬・吉野川・阿波</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-xs px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年冬（11月・12月・1月）完全ガイド</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">「藍商人の白壁美・うだつの町並みと四国霊場切幡寺初詣」2026-2027年冬の徳島・美馬＆吉野川！阿波尾鶏地鶏鍋と清流温泉名宿5選</h1>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed pt-2">
              江戸〜明治の藍商人たちが築いた重伝建「脇町・うだつの上がる町並み」の凛とした冬景色！四国八十八箇所第十番札所・切幡寺の五重塔新春初詣。徳島が誇る最高峰地鶏「阿波尾鶏」の水炊き・すき焼きと吉野川流域の美肌温泉に癒やされる冬の厳選名宿5選。
            </p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 mt-10 space-y-12">
          {/* イントロダクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm sm:text-base border-b border-stone-100 pb-2">
              <Compass className="w-5 h-5 text-cyan-700" />
              <h2>冬の美馬・吉野川・阿波探訪：静寂と温もりに包まれる旅の魅力</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              四国三郎と称される大河・吉野川がゆったりと流れる徳島県西部（にし阿波）。冬の澄み渡る青空と清らかな冷気の中、この地域は江戸から明治の繁栄を物語る重厚な町並みと、四国霊場の厳かな祈りに包まれます。美馬市脇町に位置する「うだつの上がる町並み（南町通り）」は、国の重要伝統的建造物群保存地区に選定された歴史情緒あふれる商家町。かつて吉野川の水運を利用し、阿波特産の藍（阿波藍）の集散地として巨万の富を築いた藍商人たちが競い合って築いた屋敷が約430mにわたって連なります。隣家との境界に設けられた防火壁「うだつ（卯建）」は、富と格式の象徴であり、「うだつが上がらない」という言葉の語源としても有名です。白壁の土蔵造りと本瓦葺きの屋根に精緻な細工が施されたうだつが並ぶ冬の景色は、凛とした静寂の中でタイムスリップしたかのような旅情を誘います。さらに吉野川を下れば、四国八十八箇所霊場第十番札所「切幡寺（きりはたじ）」へ。機織りの乙女が千手観音へと即身成仏したという伝説が残り、国の重要文化財に指定されている二重塔（大塔）がそびえる山上の古刹には、新春の開運と女性の厄除けを祈る参拝客が訪れます。そして冬のにし阿波の寒さを吹き飛ばしてくれるのが、徳島県が全国に誇る最高峰の地鶏「阿波尾鶏（あわおどり）」の滋味鍋。旨味とコクが凝縮した阿波尾鶏の水炊きやすき焼きに舌鼓を打ち、吉野川流域に湧く天然温泉に身を委ねる、知られざる冬の四国深訪の旅へご案内します。
            </p>
          </section>

          {/* 訪れるべき3つの理由 */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-800" />
              <span>この冬、美馬・吉野川・阿波を訪れるべき3つの理由</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                富と格式の象徴！国の重伝建「脇町・うだつの上がる町並み」冬の白壁散歩
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              阿波藍の富を今に伝える豪壮な商家が連なる脇町南町。漆喰の白壁、格子窓、重厚な本瓦葺きの屋根の上にそびえる「うだつ」の装飾美は圧巻です。冬の澄んだ陽光が白壁に陰影を落とす中、藍染め体験や歴史ある芝居小屋「オデオン座（脇町劇場）」を巡る風情豊かな散策が楽しめます。
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                女人得道の聖地！四国霊場第十番「切幡寺」新春開運初詣と壮麗な国重文大塔
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              弘法大師空海が開創した四国八十八箇所の名刹・切幡寺。333段の石段を登り切った境内からは吉野川平野の大パノラマが一望でき、日本で唯一の木造方形二重塔として知られる国重文の大塔が冬の空にそびえ立ちます。善女成仏・厄除け・家内安全を祈願する新春初詣に最適な霊場です。
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                コクと歯ごたえが段違い！徳島の名地鶏「阿波尾鶏」の滋味鍋と吉野川の名湯
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              徳島の大自然の中で通常の約2倍の期間をかけて丹念に育てられる地鶏「阿波尾鶏」。低脂肪で適度な歯ごたえがあり、噛むほどに溢れる濃厚な旨味は冬の鍋料理に最適です。白菜や鳴門レンコンとともに味わう阿波尾鶏の水炊きやすき焼きは絶品。清流を望む天然温泉とともに心身を温めてくれます。
            </p>
          </div>
            </div>
          </section>

          {/* 近隣名所アーカイブ（Wikipedia公式連携） */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h2 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-800" />
                <span>近隣名所アーカイブ：国指定重要伝統的建造物群保存地区・脇町うだつの町並み（藍商人の繁栄美と冬情話）</span>
              </h2>
              <span className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                Wikipedia公式連携
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Wakimati_minamimati_20250828_1.jpg/1280px-Wakimati_minamimati_20250828_1.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="国指定重要伝統的建造物群保存地区・脇町うだつの町並み（藍商人の繁栄美と冬情話）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full space-y-3">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  【国指定重要伝統的建造物群保存地区・脇町うだつの町並み（藍商人の繁栄美と冬情話）の見どころと歴史】
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  脇町南町（わきまちみなみまち）は徳島県美馬市脇町大字脇町にある名勝。うだつの町並みともよばれる。 国の重要伝統的建造物群保存地区に昭和63年（1988年）12月16日選定 ・四国八十八景8番・とくしま88景・にし阿波お勧めビューポイント100選・都市景観100選・日本の道100選・美しい日本の歴史的風土100選に選定。阿波歴史文化道に指定。 「うだつと白壁の町並」で、昭和61年度手づくり郷土賞（人と風土が育てた家並）受賞。平成17年度同賞大賞。
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
                  美馬・吉野川・阿波 厳選の温泉＆名宿5選
                </h2>
              </div>
              <p className="text-xs text-stone-500">
                ※楽天トラベルAPI最新空室・料金データ連携中
              </p>
            </div>

            <div className="space-y-6">
            {/* 宿1: ＰＡＹＳＡＧＥ　ＭＯＲＩＧＵＣＨＩ（ペイサージュモリグチ） */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 1
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.33</span>
                    <span className="text-stone-400 text-xs font-normal">（10件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ＰＡＹＳＡＧＥ　ＭＯＲＩＧＵＣＨＩ（ペイサージュモリグチ）
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    うだつの町並みの中の国登録有形文化財・旧藍商人の豪壮な邸宅に泊まる極上ステイ
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/181667/181667.jpg"
                      alt="ＰＡＹＳＡＧＥ　ＭＯＲＩＧＵＣＨＩ（ペイサージュモリグチ）"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      脇町のうだつの町並みの中に佇む、江戸時代から続く藍商人「旧森口家」の歴史的邸宅を再生した珠玉のブティックホテル。黒漆喰の重厚な門をくぐると、往時の風情を残す柱や梁と洗練されたデザイナーズ家具が調和した上質な静寂が広がります。夕食には徳島産の旬魚介や阿波牛、吉野川の恵みを活かした本格フレンチディナーを提供。町の歴史の一部になったかのような贅沢な滞在が約束されます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>重伝建・脇町うだつの町並み内に佇む国登録有形文化財「旧森口邸」のリノベホテル</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>わずか客室数の限定された贅沢な空間！歴史ある梁と最新モダンインテリアの調和</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地元徳島・美馬の阿波牛や地野菜をシェフが美しく仕立てる創作フレンチ</span></li>
                    </ul>
                  </div>
                </div>



                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 17,820円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181667%2F181667.html"
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

            {/* 宿2: 癒しの宿　土柱ランド新温泉 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 2
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.11</span>
                    <span className="text-stone-400 text-xs font-normal">（511件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    癒しの宿　土柱ランド新温泉
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    天然ラドン温泉と世界三大奇勝「土柱」の絶景・阿波牛すき焼きの温もり
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/13994/13994.jpg"
                      alt="癒しの宿　土柱ランド新温泉"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      アメリカのロッキー山脈、イタリアのチロル地方と並び「世界三大奇勝」に数えられる阿波の土柱のすぐそばに位置する温泉旅館。館内には古くから湯治客に親しまれてきた天然ラドン温泉が湧き、冬の観光で冷えた身体を芯からポカポカに温めてくれます。夕食には徳島が誇る「阿波牛」の濃厚なすき焼き会席が並び、雄大な自然に囲まれた静寂の中で心安らぐひとときを過ごせます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>世界三大奇勝「阿波の土柱」のすぐそばに佇む緑豊かな温泉宿</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>身体の芯から温まり痛みを和らげる良質な天然ラドン温泉大浴場</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>特選阿波牛のすき焼きや旬の山里料理・吉野川の味覚を堪能する会席プラン</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「半露天風呂と女将さんの心遣いに大満足半露天風呂付きのお部屋を予約しましたがチェックアウトまで温度管理がされていて、とても快適で気持ちの良いお風呂で温泉宿を満喫出来ました。女将さんが夕食の時色々。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 4,900円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13994%2F13994.html"
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

            {/* 宿3: ビジネスホテルマツカ */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 3
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.10</span>
                    <span className="text-stone-400 text-xs font-normal">（1016件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ビジネスホテルマツカ
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    うだつの町並みへ徒歩圏内・展望大浴場とサウナ完備の快適シティホテル
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/9409/9409.jpg"
                      alt="ビジネスホテルマツカ"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      美馬市脇町の中心市街地に位置し、うだつの町並み散策のベースキャンプとして絶大な支持を集めるホテル。最上階には市内を一望できる展望大浴場と本格サウナが備わり、冬の旅の疲れをゆったりと解き放つことができます。清潔で機能的な客室には快適なベッドやWi-Fiが完備され、観光からビジネスまで快適なステイをサポートしてくれます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>美馬市脇町の中心部に位置し、うだつの町並みやオデオン座へ徒歩でアクセス可能</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>最上階に展望大浴場＆高温サウナを完備！旅の疲れを心地よくリフレッシュ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>広々とした機能的な客室と地元食材を取り入れた朝食バイキング</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「禁煙室なのに廊下からタバコの煙が入り込む一階の部屋は禁煙部屋でも廊下からタバコの煙が入ってきて部屋中が臭くなる。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 3,900円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9409%2F9409.html"
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

            {/* 宿4: セントラルホテル鴨島 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 4
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.00</span>
                    <span className="text-stone-400 text-xs font-normal">（543件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    セントラルホテル鴨島
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    吉野川市鴨島駅前・四国霊場切幡寺巡礼の拠点に最適な老舗シティホテル
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/40401/40401.jpg"
                      alt="セントラルホテル鴨島"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      吉野川市鴨島町の中心に位置し、四国霊場第十番・切幡寺や第十一番・藤井寺への巡礼、吉野川平野の観光拠点として長年親しまれるシティホテル。駅からのアクセスも良好で、館内には落ち着いた雰囲気の客室が揃います。食事処では徳島名産の阿波尾鶏を使った鍋料理や御膳が用意され、冬の静かな吉野川の旅を心地よくサポートしてくれます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>JR徳島線鴨島駅から徒歩約5分！切幡寺や藤井寺など四国霊場巡りに便利</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>落ち着いたインテリアで統一された広めの客室と細やかなおもてなし</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>館内和食処で味わう阿波尾鶏料理や徳島の海の幸・山の幸の特選膳</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「駅近で部屋も広くバスタブも大きく大満足素泊まりで2泊しましたが、駅近と言うロケーションですが、価格が安いし、部屋はこの値段ではほぉ～というくらい広いですし、バスタブも大きくて大満足でした。また。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 5,000円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40401%2F40401.html"
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

            {/* 宿5: ビジネスホテルアクセス阿波 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 5
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>3.79</span>
                    <span className="text-stone-400 text-xs font-normal">（253件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ビジネスホテルアクセス阿波
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    徳島道土成ICすぐ！阿波の土柱や切幡寺へのアクセス抜群な機能的ホテル
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="w-full relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/67851/67851.jpg"
                      alt="ビジネスホテルアクセス阿波"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      徳島自動車道土成インターチェンジの目の前に位置し、マイカーでのにし阿波周遊や四国遍路の拠点として抜群の機動力を誇るホテル。全客室にシモンズ社製ベッドが導入され、快眠を追求した清潔な客室空間が魅力です。阿波の土柱や切幡寺へも車で数分と至近で、リーズナブルで快適な冬の徳島ステイが叶います。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>徳島自動車道土成ICから車で約1分！車でのドライブ旅行や遍路巡りに最適</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全室シモンズ製ベッド導入で長旅の疲れを癒やす快適な睡眠環境</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>無料駐車場完備＆周辺の郷土料理店での阿波尾鶏グルメへのアクセス良好</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「バスタブにお湯をためようかと思いましたが、バスタブを指でこすると垢がすごかったのでやめました。洗面所のコップにも汚。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 3,800円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67851%2F67851.html"
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
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・電車・JR：JR徳島駅よりJR徳島線（特急剣山）で穴吹駅まで約40分。うだつの町並みへは穴吹駅よりタクシーで約5分、または徒歩約35分（レンタサイクルあり）。切幡寺へはJR徳島線鴨島駅または阿波川島駅よりタクシー約10〜15分。高松駅から穴吹駅へはJR土讃線・徳島線経由で約1時間40分。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・車・マイカー：徳島自動車道「脇町IC」よりうだつの町並みまで約7分。切幡寺へは徳島自動車道「土成IC」より約15分。徳島阿波おどり空港から脇町ICまで車で約45分、神戸淡路鳴門自動車道・鳴門ICから約45分。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・高速バス：大阪（阪急梅田・なんば）および神戸（三宮）より高速バス「大阪・神戸〜徳島・阿波池田線」が運行、脇町ICバス停まで直通約2時間30分。</p>
            <h4 className="font-bold text-stone-900 text-sm mt-3 first:mt-0">【見頃・気候・おすすめの服装】</h4>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・ベストシーズン：11月下旬〜1月下旬（うだつの町並みの冬晴れ、切幡寺新春初詣、阿波尾鶏地鶏鍋の旬）。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・気温の目安：四国の中では内陸部に位置するため、冬の朝晩の冷え込みは鋭く、最低気温は0〜3℃前後まで下がります。日中は晴天の日が多く、最高気温は9〜12℃前後。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・服装のポイント：脱ぎ着しやすい防寒コートやダウンジャケット、風を遮るマフラー、手袋をご用意ください。うだつの町並み散策や、切幡寺の333段の石段登りがあるため、履き慣れたスニーカーやウォーキングシューズが必須です。</p>
            </div>
          </section>

          {/* よくある質問 FAQ */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              冬の美馬・吉野川・阿波旅行 よくある質問（FAQ）
            </h2>
            <div className="space-y-3">
          <details className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden">
            <summary className="p-4 text-xs sm:text-sm font-bold text-stone-900 cursor-pointer flex items-center justify-between list-none">
              <span>うだつの町並みの見学所要時間とおすすめの立ち寄りスポットは？</span>
              <span className="text-cyan-800 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
              うだつの上がる町並み（南町通り）の散策所要時間は約60〜90分です。国指定重要文化財「吉田家住宅（藍商屋敷）」では当時の豪商の暮らしぶりを間近に見学でき、昭和初期のレトロな木造芝居小屋「オデオン座」も見応え十分。町並み内の古民家カフェで阿波番茶を味わうのもおすすめです。
            </div>
          </details>

          <details className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden">
            <summary className="p-4 text-xs sm:text-sm font-bold text-stone-900 cursor-pointer flex items-center justify-between list-none">
              <span>四国霊場第十番・切幡寺の参拝のポイントと石段について教えてください。</span>
              <span className="text-cyan-800 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
              切幡寺の本堂へは「男厄坂」「女厄坂」を含む合計333段の石段が続きます。石段を一歩一歩踏みしめて登ることで厄が落ちると言われていますが、足腰に不安がある場合は山上の駐車場まで車でアクセスすることも可能です。本堂奥にそびえる国宝級の重要文化財「大塔（二重塔）」の精緻な木造建築は必見です。
            </div>
          </details>

          <details className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden">
            <summary className="p-4 text-xs sm:text-sm font-bold text-stone-900 cursor-pointer flex items-center justify-between list-none">
              <span>「阿波尾鶏」と一般的な鶏肉の違いは何ですか？</span>
              <span className="text-cyan-800 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
              阿波尾鶏は、徳島県の地鶏「阿波地鶏」の血統を引き、自然豊かな環境で80日以上かけて平飼いでゆったりと育てられるブランド地鶏です。特定JAS認定地鶏の中で日本一の出荷量を誇り、肉色は赤みを帯び、脂肪が少なく締まった肉質と、アミノ酸による深いコクと甘みが特徴です。鍋や焼き鳥でその違いが歴然と分かります。
            </div>
          </details>
            </div>
          </section>

          {/* 内部リンク */}
          <section className="bg-stone-100/70 rounded-2xl p-6 border border-stone-200 space-y-3 text-xs sm:text-sm">
            <h3 className="font-bold text-stone-800">あわせて読みたい関連特集</h3>
            <ul className="space-y-1.5 text-cyan-800">
              <li>
                <Link href="/prefectures/tokushima" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>徳島県のおすすめ観光名所＆温泉宿一覧</span>
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
