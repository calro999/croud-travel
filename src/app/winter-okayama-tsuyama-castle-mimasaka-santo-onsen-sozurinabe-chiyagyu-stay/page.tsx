import React from 'react';
import Link from 'next/link';
import { MapPin, Calendar, Star, ExternalLink, ChevronRight, Sparkles, Compass, ShieldCheck, Heart } from 'lucide-react';

export const metadata = {
  title: '【雪見の名泉・美作三湯と津山城下町の冬叙情】2026-2027年冬の岡山・津山＆湯原・奥津！名物そずり鍋と幻の千屋牛会席名宿5選',
  description: '西日本を代表する名湯「美作三湯（湯原・奥津・湯郷）」の雪見露天風呂！津山城鶴山公園の雄大な石垣美とレトロ城下町散策。骨周りの旨味が凝縮した冬の郷土鍋「津山そずり鍋」や日本最古の蔓牛「千屋牛」に満たされる冬の岡山・美作の厳選名宿5選。',
  keywords: ['津山・美作・湯原', '岡山県 温泉', '冬旅行', '初詣', '11月旅行', '12月旅行', '1月旅行', '宿泊予約', '楽天トラベル'],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-okayama-tsuyama-castle-mimasaka-santo-onsen-sozurinabe-chiyagyu-stay/',
  },
  openGraph: {
    title: '【雪見の名泉・美作三湯と津山城下町の冬叙情】2026-2027年冬の岡山・津山＆湯原・奥津！名物そずり鍋と幻の千屋牛会席名宿5選',
    description: '西日本を代表する名湯「美作三湯（湯原・奥津・湯郷）」の雪見露天風呂！津山城鶴山公園の雄大な石垣美とレトロ城下町散策。骨周りの旨味が凝縮した冬の郷土鍋「津山そずり鍋」や日本最古の蔓牛「千屋牛」に満たされる冬の岡山・美作の厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-okayama-tsuyama-castle-mimasaka-santo-onsen-sozurinabe-chiyagyu-stay/',
    siteName: '冬の日本厳選旅行ガイド',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/168420/168420.jpg',
        width: 1200,
        height: 630,
        alt: '【雪見の名泉・美作三湯と津山城下町の冬叙情】2026-2027年冬の岡山・津山＆湯原・奥津！名物そずり鍋と幻の千屋牛会席名宿5選',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '【雪見の名泉・美作三湯と津山城下町の冬叙情】2026-2027年冬の岡山・津山＆湯原・奥津！名物そずり鍋と幻の千屋牛会席名宿5選',
    description: '西日本を代表する名湯「美作三湯（湯原・奥津・湯郷）」の雪見露天風呂！津山城鶴山公園の雄大な石垣美とレトロ城下町散策。骨周りの旨味が凝縮した冬の郷土鍋「津山そずり鍋」や日本最古の蔓牛「千屋牛」に満たされる冬の岡山・美作の厳選名宿5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/168420/168420.jpg'],
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
      "headline": "【雪見の名泉・美作三湯と津山城下町の冬叙情】2026-2027年冬の岡山・津山＆湯原・奥津！名物そずり鍋と幻の千屋牛会席名宿5選",
      "description": "西日本を代表する名湯「美作三湯（湯原・奥津・湯郷）」の雪見露天風呂！津山城鶴山公園の雄大な石垣美とレトロ城下町散策。骨周りの旨味が凝縮した冬の郷土鍋「津山そずり鍋」や日本最古の蔓牛「千屋牛」に満たされる冬の岡山・美作の厳選名宿5選。",
      "image": "https://img.travel.rakuten.co.jp/share/HOTEL/168420/168420.jpg",
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
            "name": "ザ・シロヤマテラス津山別邸",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/168420/168420.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "岡山県",
              "streetAddress": "岡山県 津山市山下(さんげ)30-1"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.61",
              "reviewCount": "1287"
            },
            "priceRange": "¥7,700〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Hotel",
            "name": "登録有形文化財の宿　奥津温泉　名泉鍵湯　奥津荘",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/19734/19734.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "岡山県",
              "streetAddress": "岡山県 苫田郡鏡野町奥津48"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.58",
              "reviewCount": "336"
            },
            "priceRange": "¥39,600〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Hotel",
            "name": "八景",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/177949/177949.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "岡山県",
              "streetAddress": "岡山県 真庭市豊栄1572"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.47",
              "reviewCount": "185"
            },
            "priceRange": "¥7,040〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Hotel",
            "name": "湯原温泉　元禄旅籠　油屋",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/147649/147649.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "岡山県",
              "streetAddress": "岡山県 真庭市湯原温泉29"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.47",
              "reviewCount": "122"
            },
            "priceRange": "¥12,810〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Hotel",
            "name": "湯郷温泉　ポピースプリングス　リゾート＆スパ",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/17794/17794.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "岡山県",
              "streetAddress": "岡山県 美作市湯郷538-1"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.37",
              "reviewCount": "977"
            },
            "priceRange": "¥6,600〜"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "津山城の見学所要時間と冬の見どころは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "鶴山公園（津山城跡）の表鉄門から本丸、備中櫓、天守台までを巡る見学所要時間は約60〜90分です。冬期は木々の葉が落ちるため、巨石を精緻に積み上げた高石垣の稜線が最も美しく際立つ季節。特に雪が降った翌朝の澄み切った青空と純白の雪をかぶった石垣のコントラストは息を呑む絶景です。"
          }
        },
        {
          "@type": "Question",
          "name": "湯原温泉の「砂湯」は冬でも入浴できますか？混浴のルールは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "名物「砂湯」は24時間無料で開放されており、冬の雪景色の中でも年中入浴可能です。全国露天風呂番付で「西の横綱」に選ばれた名湯で、旭川のダム下に自噴しています。男女混浴ですが、女性は専用の透けない湯浴み着（レンタル・販売あり）を着用して安心して利用できるルールが整備されています。"
          }
        },
        {
          "@type": "Question",
          "name": "津山名物の「そずり鍋」はどこで食べられますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "津山駅周辺の居酒屋、肉料理店、郷土料理店で冬期を中心に提供されています。「そずる」とは美作地方の方言で「削り取る」という意味。骨の周りの一番旨味が濃厚な肉を使うため、噛むほどに芳醇な肉汁とコクが出汁に染み出します。締めのうどんや雑炊まで絶品です。"
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
              src="https://img.travel.rakuten.co.jp/share/HOTEL/168420/168420.jpg"
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
              <Link href="/prefectures/okayama" className="text-cyan-200 hover:text-white transition-colors">
                岡山県
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-100">津山・美作・湯原</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-xs px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年冬（11月・12月・1月）完全ガイド</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">
              【雪見の名泉・美作三湯と津山城下町の冬叙情】2026-2027年冬の岡山・津山＆湯原・奥津！名物そずり鍋と幻の千屋牛会席名宿5選
            </h1>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed pt-2">
              西日本を代表する名湯「美作三湯（湯原・奥津・湯郷）」の雪見露天風呂！津山城鶴山公園の雄大な石垣美とレトロ城下町散策。骨周りの旨味が凝縮した冬の郷土鍋「津山そずり鍋」や日本最古の蔓牛「千屋牛」に満たされる冬の岡山・美作の厳選名宿5選。
            </p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 mt-10 space-y-12">
          {/* イントロダクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm sm:text-base border-b border-stone-100 pb-2">
              <Compass className="w-5 h-5 text-cyan-700" />
              <h2>冬の津山・美作・湯原探訪：静寂と温もりに包まれる旅の魅力</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              中国山地の雄大な峰々に抱かれた岡山県北部「美作（みまさか）地方」。冬の冷え込みとともに山々がうっすらと白銀に染まる頃、この地は湯煙と歴史ロマン、そして滋味あふれる郷土の温もりに包まれます。津山藩十万石の城下町として栄えた津山市の中心にそびえる「津山城（鶴山公園）」は、初代藩主・森忠政公が12年の歳月をかけて築き上げた日本三大平山城のひとつ。地上約45mに及ぶ幾重もの重厚な石垣群は圧巻の迫力を誇り、冬の雪化粧をまとった姿は息を呑むほどの気品と迫力を放ちます。復元された白壁の「備中櫓」からは、城東・城西の伝統的な町家が立ち並ぶ古い城下町が一望でき、散策の足取りを弾ませます。そして津山から車を走らせれば、古くから西日本屈指の名湯として愛されてきた「美作三湯（みまさかさんとう）＝湯原温泉・奥津温泉・湯郷温泉。」が待っています。旭川の川底から滾々と湧き出る名物混浴露天風呂「砂湯」で雪見風呂を満喫できる湯原温泉、足踏み洗濯の風情と足元湧出の美肌湯「鍵湯」で知られる奥津温泉、白鷺が傷を癒やした伝説が残る美肌の湯郷温泉。さらに冬の美作を訪れたなら絶対に外せないのが、牛肉の骨周りの旨味を削ぎ落とした肉を旬野菜と甘辛く煮込む津山独自の伝統郷土鍋「そずり鍋」と、日本最古の蔓牛の血統を引く極上の「千屋牛（ちやぎゅう）」。温泉で芯から温まり、滋味深い肉料理と地酒に酔いしれる、大人の冬の隠れ家旅へとご案内します。
            </p>
          </section>

          {/* 訪れるべき3つの理由 */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-800" />
              <span>この冬、津山・美作・湯原を訪れるべき3つの理由</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                日本三大平山城の偉容！「津山城（鶴山公園）」豪壮な石垣美と冬の雪化粧
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              姫路城・松山城と並び称される津山城。何段にもそびえ立つ壮大な石垣群は「石垣の博物館」とも称され、冬の静寂の中で白雪をまとった姿は圧巻です。復元された備中櫓の内部見学や、城下町の風情残る「作州城東屋敷」巡りなど、歴史好きの心を捉えて離さない見どころが満ちています。
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                名湯の宝庫！美作三湯「湯原・奥津・湯郷」の極上雪見露天風呂と足元湧出温泉
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              西日本を代表する名湯地帯・美作三湯。川底の砂を吹き上げて湧き出す湯原温泉「砂湯」の雪見露天、加水・加温一切なしで川底から直接自噴する奥津温泉の奇跡の「鍵湯」、美肌成分たっぷりの湯郷温泉。三者三様の異なる極上泉質を巡る贅沢な湯浴みが楽しめます。
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                肉好きを唸らせる冬の津山名物「そずり鍋」と幻の黒毛和牛「千屋牛」の極上会席
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              古くから牛馬の流通拠点として独自の牛肉食文化が根付く津山。骨の周りからそずり（削り）落とした濃厚な赤身肉を、冬の白菜や豆腐、ネギとともに醤油出汁でぐつぐつ煮込む「そずり鍋」は身体を芯から温める冬のソウルフード。さらに霜降りの甘みが際立つ幻の和牛「千屋牛」のステーキやすき焼きも絶品です。
            </p>
          </div>
            </div>
          </section>

          {/* 近隣名所アーカイブ（Wikipedia公式連携） */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h2 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-800" />
                <span>近隣名所アーカイブ：日本三大平山城・津山城（鶴山公園・豪壮な石垣群と冬の雪化粧の城下町）</span>
              </h2>
              <span className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                Wikipedia公式連携
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              <div className="md:col-span-5 relative h-48 sm:h-56 rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/%E6%B4%A5%E5%B1%B1%E5%9F%8E%E5%82%99%E4%B8%AD%E6%AB%93.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
                  alt="日本三大平山城・津山城（鶴山公園・豪壮な石垣群と冬の雪化粧の城下町）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  【日本三大平山城・津山城（鶴山公園・豪壮な石垣群と冬の雪化粧の城下町）の見どころと歴史】
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  津山城（つやまじょう）は、美作国 苫田郡（のち西北条郡）津山（現在の岡山県津山市山下）にあった日本の城。別名・鶴山城（かくざんじょう）。城跡は国の史跡に指定されている。津山市は建造物の木造復元など保存計画を行なっている。
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
                  津山・美作・湯原 厳選の温泉＆名宿5選
                </h2>
              </div>
              <p className="text-xs text-stone-500">
                ※楽天トラベルAPI最新空室・料金データ連携中
              </p>
            </div>

            <div className="space-y-6">
            {/* 宿1: ザ・シロヤマテラス津山別邸 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 1
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.61</span>
                    <span className="text-stone-400 text-xs font-normal">（1287件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ザ・シロヤマテラス津山別邸
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    津山城址を一望するオープンテラス・美肌天然温泉と極上千屋牛ダイニング
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/168420/168420.jpg"
                      alt="ザ・シロヤマテラス津山別邸"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      津山城跡の麓に誕生した、城下町の歴史と現代の快適性が調和したハイクラス・シティリゾート。広々としたテラス付き客室からは荘厳な津山城の石垣が一望でき、冬のライトアップされた夜城も旅情を高めます。最上階の展望露天風呂「城見の湯」では、冷たい冬風を感じながら良質な天然温泉に浸かる極上のリラックスを満喫。夕食には岡山が誇る最古の血統牛「千屋牛」の鉄板焼きやすき焼きが並び、贅沢な冬の夜を約束します。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全室から津山城鶴山公園の石垣美を望むキャッスルビューのモダンテラス</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>津山温泉城見の湯！展望露天風呂で楽しむ柔らかな美肌の湯浴み</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>鉄板焼きや特選会席で味わう幻の「千屋牛」と岡山美作の厳選旬食材</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「津山城にとても近かった毎年十五夜に催される”観月と邦楽の夕べ”に行くために津山城に近いこのホテルを選びました。クチ。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 7,700円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168420%2F168420.html"
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

            {/* 宿2: 登録有形文化財の宿　奥津温泉　名泉鍵湯　奥津荘 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 2
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.58</span>
                    <span className="text-stone-400 text-xs font-normal">（336件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    登録有形文化財の宿　奥津温泉　名泉鍵湯　奥津荘
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    創業創業三百年・川底から自噴する奇跡の「鍵湯」と登録有形文化財の木造建築
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/19734/19734.jpg"
                      alt="登録有形文化財の宿　奥津温泉　名泉鍵湯　奥津荘"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      奥津川の清流沿いに佇む、棟方志功をはじめ数々の文人墨客が逗留した名宿。宿の象徴である「鍵湯」は、かつて津山藩主が鍵をかけて一般人の入浴を禁じたほどの霊泉で、川底の岩盤の間から自噴する無色透明の極上湯に空気に触れることなく浸かれます。木造建築の温もりと静寂が漂う館内、雪見の渓流を眺めながら味わう山里料理の数々は、冬の温泉旅の究極の癒やしを提供してくれます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>足元から直接プクプクと湧き出る源泉100%自噴の「鍵湯」完全かけ流し</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>棟方志功ゆかりの昭和初期の趣を残す国の登録有形文化財の風情ある佇まい</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>美作の山里の恵みや清流魚・特選和牛を丁寧に仕立てた心づくしの月替わり会席</span></li>
                    </ul>
                  </div>
                </div>



                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 39,600円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19734%2F19734.html"
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

            {/* 宿3: 八景 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 3
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.47</span>
                    <span className="text-stone-400 text-xs font-normal">（185件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    八景
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    旭川の渓流を望む自然派料理旅館・山里の恵み50種と雪見露天風呂のぬくもり
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/177949/177949.jpg"
                      alt="八景"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      湯原温泉のシンボル「砂湯」の対岸、旭川の清流のほとりに建つ心温まる料理宿。女性や家族連れに絶大な支持を受ける理由は、調味料から手作りにこだわり、地元美作の大地が育んだ旬の野菜を50種類以上使って仕立てる滋味あふれる「山里料理」。川面を望む露天風呂からは冬の雪化粧した山肌が間近に迫り、柔らかな名湯が旅の疲れを優しく解き放ちます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>湯原温泉・旭川のせせらぎ沿いに佇む温かなおもてなしの自然派名宿</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>毎分湧き出る良質なアルカリ性単純温泉の展望大浴場と雪見露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>料理長が手間暇かけて仕込む「山里料理」旬野菜50種以上と滋味牛肉会席</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「接客も食事も良く、気持ちよく過ごせた1泊で親戚の人達と利用させていただきました。接客も良し。食事がコースでしたが暖かい焼き魚等で美味しくいただきました。帰りもちゃんと挨拶していただき気。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 7,040円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177949%2F177949.html"
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

            {/* 宿4: 湯原温泉　元禄旅籠　油屋 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 4
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.47</span>
                    <span className="text-stone-400 text-xs font-normal">（122件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    湯原温泉　元禄旅籠　油屋
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    元禄元年創業・三百年の歴史紡ぐ老舗宿・地下から湧く薬師湯と山陰美作会席
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/147649/147649.jpg"
                      alt="湯原温泉　元禄旅籠　油屋"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      湯原温泉街の中心に位置し、300年以上の歴史を誇る老舗旅館。名作映画の舞台を思わせる風格ある佇まいと、現代の過ごしやすさを両立した客室が迎えます。館内には自家源泉から滾々と注がれる「薬師湯」があり、肌に吸い付くような柔らかな湯ざわりが自慢。冬の夕食には、地元の伝統そずり鍋や厳選和牛、日本海から届く新鮮魚介を取り入れた豪華会席が並び、老舗ならではの深いもてなしを実感できます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>元禄元年の創業以来、旅人を温め続ける湯原温泉随一の老舗湯宿</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地下から湧き出る自家源泉「薬師湯」を贅沢に掛け流す歴史ある大浴場</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>名物そずり鍋や千屋牛・日本海の冬の味覚をふんだんに取り入れた老舗会席</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「大浴場と露天風呂、美味しい食事に大満足夫婦で宿泊しました。大浴場は思ったより大きく、屋上露天風呂もとても気持ちよく入りました。また部屋のお風呂も景色がよく、ゆっくり入浴することができました。夕食は。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 12,810円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147649%2F147649.html"
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

            {/* 宿5: 湯郷温泉　ポピースプリングス　リゾート＆スパ */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 5
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.37</span>
                    <span className="text-stone-400 text-xs font-normal">（977件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    湯郷温泉　ポピースプリングス　リゾート＆スパ
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    アロマの香りに包まれるカリフォルニア風リゾート・オーガニック美肌フレンチ
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/17794/17794.jpg"
                      alt="湯郷温泉　ポピースプリングス　リゾート＆スパ"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      白鷺の伝説で名高い湯郷温泉にありながら、カリフォルニアのミッション様式を取り入れたスタイリッシュなリゾートホテル。館内には心地よいハーブの香りが漂い、美肌の湯郷温泉を引いたジャグジー大浴場や本格アロマトリートメントで極上のリフレッシュが叶います。夕食は地元の契約農家が育てる有機野菜や良質肉を使ったヘルシーな本格フレンチコース。女子旅やカップルでの冬の温泉ステイに最適な一軒です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>湯郷温泉街に佇む異国情緒あふれるオーベルジュ風ナチュラルリゾート</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>美肌成分豊富な湯郷の名湯ジャグジーバス・アロマエステと充実の癒やし空間</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>美作産の有機無農薬野菜や厳選肉をふんだんに使った身体に優しいフレンチディナー</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「南欧風の建物と美味しい食事でリゾート気分建物全体が南欧風で統一されており、たっぷりリゾート感を味わえます。食事も美味しく、大満足でした。また、機会があれば利用したいです。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 6,600円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17794%2F17794.html"
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
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・電車・新幹線：JR山陽新幹線「岡山駅」よりJR津山線（快速ことぶき）で津山駅まで約65分。美作三湯へは津山駅前より路線バスまたは送迎バス運行（湯原温泉へは約60分、奥津温泉へは約50分、湯郷温泉へはJR姫新線林野駅よりタクシー約8分または津山駅よりバス約40分）。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・車・マイカー：中国自動車道「津山IC」または「院庄IC」より津山市街まで約10分。湯原温泉へは米子自動車道「湯原IC」より約5分、奥津温泉へは中国自動車道「院庄IC」より国道179号経由で約25分、湯郷温泉へは中国自動車道「美作IC」より約10分。大阪（吹田IC）から津山ICまで約1時間50分。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・高速バス：大阪（阪急梅田・新大阪）および京都駅より中国ハイウェイバスが津山駅前まで直通運行（梅田から津山まで約2時間40分）。</p>
            <h4 className="font-bold text-stone-900 text-sm mt-3 first:mt-0">【見頃・気候・おすすめの服装】</h4>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・ベストシーズン：11月下旬〜1月下旬（美作三湯の雪見露天、津山そずり鍋の旬、城下町の冬景色）。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・気温の目安：中国山地の山間部に位置するため、冬は平野部の岡山・倉敷よりも一段と寒さが厳しくなります。最高気温は6〜10℃、夜間や早朝は氷点下に達し、12月下旬〜1月は積雪が見られる日もあります。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・服装のポイント：厚手のダウンコートや裏起毛の防寒着、マフラー、手袋の着用が必須です。津山城の天守台への石段や雪の温泉街を歩くため、滑りにくい防水・防寒ブーツやグリップ力のあるスニーカーをご用意ください。車の場合は冬用タイヤ（スタッドレスタイヤ）の装着を強く推奨します。</p>
            </div>
          </section>

          {/* よくある質問 FAQ */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              冬の津山・美作・湯原旅行 よくある質問（FAQ）
            </h2>
            <div className="space-y-3">
          <details className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden">
            <summary className="p-4 text-xs sm:text-sm font-bold text-stone-900 cursor-pointer flex items-center justify-between list-none">
              <span>津山城の見学所要時間と冬の見どころは？</span>
              <span className="text-cyan-800 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
              鶴山公園（津山城跡）の表鉄門から本丸、備中櫓、天守台までを巡る見学所要時間は約60〜90分です。冬期は木々の葉が落ちるため、巨石を精緻に積み上げた高石垣の稜線が最も美しく際立つ季節。特に雪が降った翌朝の澄み切った青空と純白の雪をかぶった石垣のコントラストは息を呑む絶景です。
            </div>
          </details>

          <details className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden">
            <summary className="p-4 text-xs sm:text-sm font-bold text-stone-900 cursor-pointer flex items-center justify-between list-none">
              <span>湯原温泉の「砂湯」は冬でも入浴できますか？混浴のルールは？</span>
              <span className="text-cyan-800 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
              名物「砂湯」は24時間無料で開放されており、冬の雪景色の中でも年中入浴可能です。全国露天風呂番付で「西の横綱」に選ばれた名湯で、旭川のダム下に自噴しています。男女混浴ですが、女性は専用の透けない湯浴み着（レンタル・販売あり）を着用して安心して利用できるルールが整備されています。
            </div>
          </details>

          <details className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden">
            <summary className="p-4 text-xs sm:text-sm font-bold text-stone-900 cursor-pointer flex items-center justify-between list-none">
              <span>津山名物の「そずり鍋」はどこで食べられますか？</span>
              <span className="text-cyan-800 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
              津山駅周辺の居酒屋、肉料理店、郷土料理店で冬期を中心に提供されています。「そずる」とは美作地方の方言で「削り取る」という意味。骨の周りの一番旨味が濃厚な肉を使うため、噛むほどに芳醇な肉汁とコクが出汁に染み出します。締めのうどんや雑炊まで絶品です。
            </div>
          </details>
            </div>
          </section>

          {/* 内部リンク */}
          <section className="bg-stone-100/70 rounded-2xl p-6 border border-stone-200 space-y-3 text-xs sm:text-sm">
            <h3 className="font-bold text-stone-800">あわせて読みたい関連特集</h3>
            <ul className="space-y-1.5 text-cyan-800">
              <li>
                <Link href="/prefectures/okayama" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>岡山県のおすすめ観光名所＆温泉宿一覧</span>
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
