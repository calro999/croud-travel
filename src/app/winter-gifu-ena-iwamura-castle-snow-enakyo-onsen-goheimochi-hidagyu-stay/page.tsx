import { Metadata } from 'next';
import Link from 'next/link';
import { Star, MapPin, Calendar, Compass, ShieldCheck, Heart, Sparkles, ExternalLink, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '【日本三大山城・岩村城跡の霧氷美と女城主の里重伝建】2026-2027年冬の岐阜・恵那！恵那峡温泉の絶景露天と飛騨牛朴葉味噌・五平餅名宿5選',
  description: '霧氷と白雪に抱かれる日本三大山城「岩村城跡」と江戸情緒残る城下町重伝建地区！冬の奇岩パノラマ恵那峡温泉の絶景露天風呂。香ばしい郷土の五平餅や極上飛騨牛の朴葉味噌焼きに満たされる冬の東濃・恵那の厳選名宿5選。',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-gifu-ena-iwamura-castle-snow-enakyo-onsen-goheimochi-hidagyu-stay/',
  },
  openGraph: {
    title: '【日本三大山城・岩村城跡の霧氷美と女城主の里重伝建】2026-2027年冬の岐阜・恵那！恵那峡温泉の絶景露天と飛騨牛朴葉味噌・五平餅名宿5選',
    description: '霧氷と白雪に抱かれる日本三大山城「岩村城跡」と江戸情緒残る城下町重伝建地区！冬の奇岩パノラマ恵那峡温泉の絶景露天風呂。香ばしい郷土の五平餅や極上飛騨牛の朴葉味噌焼きに満たされる冬の東濃・恵那の厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-gifu-ena-iwamura-castle-snow-enakyo-onsen-goheimochi-hidagyu-stay/',
    siteName: '冬の日本厳選旅行ガイド',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/80774/80774.jpg',
        width: 1200,
        height: 630,
        alt: '【日本三大山城・岩村城跡の霧氷美と女城主の里重伝建】2026-2027年冬の岐阜・恵那！恵那峡温泉の絶景露天と飛騨牛朴葉味噌・五平餅名宿5選',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '【日本三大山城・岩村城跡の霧氷美と女城主の里重伝建】2026-2027年冬の岐阜・恵那！恵那峡温泉の絶景露天と飛騨牛朴葉味噌・五平餅名宿5選',
    description: '霧氷と白雪に抱かれる日本三大山城「岩村城跡」と江戸情緒残る城下町重伝建地区！冬の奇岩パノラマ恵那峡温泉の絶景露天風呂。香ばしい郷土の五平餅や極上飛騨牛の朴葉味噌焼きに満たされる冬の東濃・恵那の厳選名宿5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/80774/80774.jpg'],
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
      "headline": "【日本三大山城・岩村城跡の霧氷美と女城主の里重伝建】2026-2027年冬の岐阜・恵那！恵那峡温泉の絶景露天と飛騨牛朴葉味噌・五平餅名宿5選",
      "description": "霧氷と白雪に抱かれる日本三大山城「岩村城跡」と江戸情緒残る城下町重伝建地区！冬の奇岩パノラマ恵那峡温泉の絶景露天風呂。香ばしい郷土の五平餅や極上飛騨牛の朴葉味噌焼きに満たされる冬の東濃・恵那の厳選名宿5選。",
      "image": "https://img.travel.rakuten.co.jp/share/HOTEL/80774/80774.jpg",
      "datePublished": "2026-10-09",
      "dateModified": "2026-10-09",
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
            "name": "城麓の宿　岩村山荘",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/80774/80774.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "岐阜県",
              "streetAddress": "岐阜県 恵那市岩村町富田569-1"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.59",
              "reviewCount": "211"
            },
            "priceRange": "¥18,700〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Hotel",
            "name": "恵那峡温泉ホテル　ゆずり葉",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/187294/187294.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "岐阜県",
              "streetAddress": "岐阜県 恵那市大井町2709"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.35",
              "reviewCount": "716"
            },
            "priceRange": "¥7,150〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Hotel",
            "name": "ホテル花更紗",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8027/8027.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "岐阜県",
              "streetAddress": "岐阜県 中津川市神坂280"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.26",
              "reviewCount": "1223"
            },
            "priceRange": "¥7,000〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Hotel",
            "name": "お宿Ｏｎｎ　中津川",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/183952/183952.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "岐阜県",
              "streetAddress": "岐阜県 中津川市新町7番43号"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.46",
              "reviewCount": "552"
            },
            "priceRange": "¥6,050〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Hotel",
            "name": "ほしとせせらぎのぐらんぴんぐ",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/182008/182008.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "岐阜県",
              "streetAddress": "岐阜県 中津川市神坂280"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.27",
              "reviewCount": "47"
            },
            "priceRange": "¥11,913〜"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "岩村城跡の見学所要時間と歩きやすさはどうですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "岩村城下町の歴史資料館から本丸跡までは片道約800mの石畳の登城坂（急坂）が続き、往復所要時間は約60〜80分です。城郭の石垣群を間近に見学しながら登る価値は十分にありますが、冬は石畳が凍結することがあるため歩行には十分な注意が必要です。なお、山上の出丸広場近くまで車でアクセスできるルートもあります（冬期積雪時は注意）。"
          }
        },
        {
          "@type": "Question",
          "name": "岩村名物の「五平餅」の特徴と味わえる場所は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "岩村の五平餅は、一般的なわらじ型とは異なり、小さな団子状の丸い餅が串に刺さっているのが特徴です。タレには胡麻・胡桃・落花生をふんだんに使い、醤油と砂糖で練り上げた濃厚で香ばしい味わい。城下町の本町通りにある「みよし」や「あまから岩村店」などで焼き立てが楽しめます。"
          }
        },
        {
          "@type": "Question",
          "name": "冬の恵那峡の観光クルーズ（遊覧船）は冬でも乗れますか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "恵那峡遊覧船は冬期も毎日運航しています。客船は冷暖房完備で、窓越しに軍艦岩や獅子岩といった奇岩怪石の雪景色を温まりながら鑑賞できます。冬晴れの澄んだ青空とエメラルドグリーンの湖面、白い雪のコントラストは息を呑む美しさです。"
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
              src="https://img.travel.rakuten.co.jp/share/HOTEL/80774/80774.jpg"
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
              <Link href="/prefectures/gifu" className="text-cyan-200 hover:text-white transition-colors">
                岐阜県
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-100">恵那・岩村・中津川</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-xs px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年冬（11月・12月・1月）完全ガイド</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">
              【日本三大山城・岩村城跡の霧氷美と女城主の里重伝建】2026-2027年冬の岐阜・恵那！恵那峡温泉の絶景露天と飛騨牛朴葉味噌・五平餅名宿5選
            </h1>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed pt-2">
              霧氷と白雪に抱かれる日本三大山城「岩村城跡」と江戸情緒残る城下町重伝建地区！冬の奇岩パノラマ恵那峡温泉の絶景露天風呂。香ばしい郷土の五平餅や極上飛騨牛の朴葉味噌焼きに満たされる冬の東濃・恵那の厳選名宿5選。
            </p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 mt-10 space-y-12">
          {/* イントロダクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm sm:text-base border-b border-stone-100 pb-2">
              <Compass className="w-5 h-5 text-cyan-700" />
              <h2>冬の恵那・岩村・中津川探訪：静寂と温もりに包まれる旅の魅力</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              霊峰・恵那山をはじめとする木曽山脈の峰々を仰ぎ、木曽川の清流が刻んだ壮大な渓谷美が広がる岐阜県東濃地方・恵那。冬の訪れとともに高原地帯は鋭い冷気に包まれ、山々は霧氷と白雪をまとって静かな輝きを放ちます。恵那市岩村町にそびえる「岩村城跡（いわむらじょうあと）」は、大和高取城・備中松山城と並び称される日本三大山城のひとつ。本州の城郭としては最も標高の高い海抜717mの峻険な尾根に築かれ、戦国時代には織田信長の叔母であり絶世の美女と謳われた「おつやの方」が実質的な城主として采配を振るった「女城主の城」として名を馳せました。幾重にも重なり合う要塞のような「六段壁」の石垣群は圧巻で、冬の雪化粧と木々の樹氷が石垣の雄姿を際立たせ、訪れる者を中世の戦国ロマンへと引き込みます。城の麓に広がる城下町（岩村町本町通り）は、約1.3kmにわたって江戸時代の町家や桝形、武家屋敷が良好に残る国の重要伝統的建造物群保存地区。冬の軒先からは銘酒「女城主」の酒蔵から立ち上る甘い麹の香りと、胡麻や胡桃、落花生をたっぷり練り込んだ味噌ダレが香ばしい名物「五平餅（ごへいもち）」の炭火焼きの煙が漂い、凍えた身体を温めます。車で北へ約20分走れば、大正時代に造られた日本初の水力発電用ダム湖「恵那峡」へ。奇岩怪石が白雪を冠する雪景色のパノラマを望む恵那峡温泉の露天風呂と、飛騨牛の朴葉味噌焼きや寒すき焼きに満たされる、温もりあふれる冬の東美濃路へと誘います。
            </p>
          </section>

          {/* 訪れるべき3つの理由 */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-800" />
              <span>この冬、恵那・岩村・中津川を訪れるべき3つの理由</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                本州最高標高の日本三大山城！「岩村城跡」六段壁の雪化粧と女城主の歴史浪漫
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              標高717mの山頂に築かれた名城・岩村城跡。自然の地形を巧みに利用した六段壁の壮大な石垣群は、冬の霧氷や白雪に縁取られて神秘的な威容を放ちます。武田信玄と織田信長の間で誇り高く生きた女城主・おつやの方の数奇な運命に思いを馳せる歴史散歩が楽しめます。
            </p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                重要伝統的建造物群保存地区！「岩村城下町」江戸の風情残る町並みと炭火焼き五平餅
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              重要伝統的建造物群保存地区に選定された岩村本町通り。古い格子戸の商家や造り酒屋が連なり、冬の冷たい空気の中、炭火で香ばしく焼き上げる名物「五平餅」の味噌ダレの香りが食欲をそそります。カステラの元祖「松浦軒」など老舗の銘菓巡りも魅力的です。
            </p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                大自然の奇岩雪景色！「恵那峡温泉」パノラマ絶景露天風呂と極上飛騨牛の朴葉味噌焼き
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              木曽川を堰き止めた恵那峡の断崖絶壁が雪化粧をまとう冬景色。塩分を含んだ恵那峡温泉の湯は保温効果が高く、雪見露天風呂で身体の芯から温まります。夕食には甘辛い自家製朴葉味噌で香ばしく焼き上げるA5飛騨牛ステーキやすき焼きを心ゆくまで堪能できます。
            </p>
          </div>
            </div>
          </section>

          {/* 近隣名所アーカイブ（Wikipedia公式連携） */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h2 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-800" />
                <span>近隣名所アーカイブ：日本三大山城・岩村城跡（標高717m・六段壁の石垣美と霧氷の城跡）</span>
              </h2>
              <span className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                Wikipedia公式連携
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              <div className="md:col-span-5 relative h-48 sm:h-56 rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Iwamura_Castle.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
                  alt="日本三大山城・岩村城跡（標高717m・六段壁の石垣美と霧氷の城跡）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  【日本三大山城・岩村城跡（標高717m・六段壁の石垣美と霧氷の城跡）の見どころと歴史】
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  岩村城（いわむらじょう）は、岐阜県恵那市岩村町にあった中世の日本の城（山城）。鎌倉幕府御家人の遠山氏宗家の岩村遠山氏が鎌倉時代初期に築いたとされ、別名「霧ヶ城」とも呼ばれた。戦国時代末期には織田氏と武田氏の争奪戦に巻き込まれた。江戸時代には岩村藩の城となった。 奈良県の高取城、岡山県の備中松山城と並び、日本三大山城の一つとされる。 また中津川市の苗木城、可児市の兼山城と並び岐阜の三山城とも称される。岐阜県指定史跡。
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
                  恵那・岩村・中津川 厳選の温泉＆名宿5選
                </h2>
              </div>
              <p className="text-xs text-stone-500">
                ※楽天トラベルAPI最新空室・料金データ連携中
              </p>
            </div>

            <div className="space-y-6">
            {/* 宿1: 城麓の宿　岩村山荘 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 1
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.59</span>
                    <span className="text-stone-400 text-xs font-normal">（211件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    城麓の宿　岩村山荘
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    岩村城址の麓に佇む城麓の名宿・女城主の里の郷土料理と温もりあふれる温泉
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/80774/80774.jpg"
                      alt="城麓の宿　岩村山荘"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      日本三大山城・岩村城の登城口に最も近い場所に佇む、山城の歴史を今に伝える名宿。女城主の哀話が伝わる城址の麓で、静寂と木々の温もりに包まれる特別な宿泊体験が叶います。夕食は地元の恵みを活かした伝統の山城料理。上質な飛騨牛の朴葉味噌焼きや岩魚の塩焼き、季節の野菜鍋など、身体の芯から温まる滋味深い味わいが揃い、歴史好きの旅人から絶大な支持を集めています。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>岩村城跡の登城口すぐ！歴史ある山城の麓に佇む心温まる純和風旅館</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>名物「山城料理」飛騨牛の陶板焼きや季節の山菜・川魚を堪能する極上会席</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>麦飯石の湯で旅の疲れをじんわり解きほぐす大浴場と城下町散策への好立地</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「料理に温泉日本酒1人旅にも優しい良い宿ですクチコミの詳細はこちらから https://review.travel.rakuten.co.jp/hotel/voice/80774?reviewId=… 2026-09-24 18:40:47投稿 つづきはこちら」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 18,700円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80774%2F80774.html"
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

            {/* 宿2: 恵那峡温泉ホテル　ゆずり葉 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 2
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.35</span>
                    <span className="text-stone-400 text-xs font-normal">（716件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    恵那峡温泉ホテル　ゆずり葉
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    恵那峡の絶景パノラマを一望する湖畔の温泉ホテル・源泉掛け流し露天風呂と飛騨牛会席
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/187294/187294.jpg"
                      alt="恵那峡温泉ホテル　ゆずり葉"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      木曽川が刻んだ壮大な恵那峡の絶壁を見下ろす丘の上に建つ温泉ホテル。客室の大きな窓や露天風呂からは、雪化粧した恵那峡のダイナミックな景観が一望でき、冬の静けさと壮大さを五感で感じられます。天然温泉は塩分を多く含む強塩泉で、入浴後もぽかぽかとした温もりが長く持続。料理長が丹精込めて仕立てる飛騨牛の霜降り肉会席が、旅の満足感を極限まで高めてくれます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>奇岩怪石が連なる恵那峡を眼下に望む全室レイクビューの絶好の眺望</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地下から湧き出る高濃度天然温泉！保温効果抜群のにごり湯露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>厳選された最高ランク飛騨牛のステーキやすき焼きを味わう贅沢ディナー</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「飛騨牛づくしの食事とマッサージチェアで大満足主人の誕生日旅行の為、奮発してマッサージチェア付きの部屋で飛騨牛のプランにしました。夕食はほんとに肉づくし、刺身の内容の中にもサーモン、カツオにロースト… 2026-10-03 00:15:02投稿 つづきはこちら」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 7,150円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187294%2F187294.html"
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

            {/* 宿3: ホテル花更紗 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 3
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.26</span>
                    <span className="text-stone-400 text-xs font-normal">（1223件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテル花更紗
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    中津川の自然に抱かれた美肌の名湯リゾート・重曹泉大浴場と極上飛騨牛会席
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/8027/8027.jpg"
                      alt="ホテル花更紗"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      恵那から車で約15分、自然豊かな中津川の地に位置する本格温泉リゾートホテル。最大の魅力は全国屈指のとろとろとした肌触りを誇る重曹泉（ナトリウム-炭酸水素塩温泉）で、湯上がりの肌がつるつるになると女性に大人気です。広々とした大浴場や露天風呂で冬の寒さを忘れ、夕食には極上の飛騨牛や中津川名物の栗を使った甘味が並ぶ豪華会席を堪能できます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>「美人の湯」として名高い中津川温泉のトロトロ天然温泉大浴場と庭園露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>隣接するクアリゾート湯舟沢の温泉プール・バーデゾーンも利用可能</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>A5ランク飛騨牛や木曽川の鮎・東濃の恵みを散りばめた華やかな季節会席</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「バイクの屋根付き駐車場雨は降っていませんでしたが、バイクは屋根の下に駐車でき有り難かったです。リーズナブルということで食事の量はちょっと少なめだけど、品数もありちょうどいい感じで、美味しかった… 2026-09-30 20:14:08投稿 つづきはこちら」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 7,000円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8027%2F8027.html"
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

            {/* 宿4: お宿Ｏｎｎ　中津川 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 4
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.46</span>
                    <span className="text-stone-400 text-xs font-normal">（552件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    お宿Ｏｎｎ　中津川
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    中津川宿の歴史を映す木の温もり・サウナ＆大浴場完備のモダンライフスタイルホテル
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/183952/183952.jpg"
                      alt="お宿Ｏｎｎ　中津川"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      中山道の宿場町として栄えた中津川の中心地に誕生した、上質なライフスタイルホテル。エントランスから客室に至るまで東濃ヒノキなどの天然木がふんだんに用いられ、木の香りに包まれながらリラックスできます。館内には最新のサウナと大浴場が整い、冬の冷えた身体をととのえるのに最適。岩村城や妻籠・馬籠への観光拠点としても高い機能性を誇ります。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>中山道・中津川宿の街並みに調和する天然木を贅沢に使ったモダンデザイン空間</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>旅の疲れを心地よく癒やす広々とした大浴場と本格フィンランドサウナ完備</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地元東濃の新鮮食材をふんだんに取り入れた健康朝食ビュッフェが大好評</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「中津川や馬籠への観光に便利な立地中津川宿、馬籠宿に便利。館内は、スリッパで綺麗、茶漬けサービスは良いよ他の画像やクチコミの詳細はこちらから https://review.travel.ra… 2026-09-30 16:35:01投稿 つづきはこちら」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 6,050円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183952%2F183952.html"
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

            {/* 宿5: ほしとせせらぎのぐらんぴんぐ */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 5
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.27</span>
                    <span className="text-stone-400 text-xs font-normal">（47件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ほしとせせらぎのぐらんぴんぐ
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    満天の星と木曽川のせせらぎに包まれるグランピング・天然温泉入り放題の冬リゾート
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/182008/182008.jpg"
                      alt="ほしとせせらぎのぐらんぴんぐ"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      中津川の自然豊かな森の中に広がる本格グランピングリゾート。冬でも暖かい快適なドームテント内から、澄み渡る冬の夜空に瞬く満天の星空を眺める非日常の時間を過ごせます。隣接する温泉施設の美肌天然温泉に何度でも入れるのが嬉しいポイント。夕食には屋根付きの暖かいテラスで味わう飛騨牛の贅沢バーベキューやすき焼きが用意され、特別な冬の思い出づくりに最適です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>冷暖房完備の快適ドームテントで冬でも安心！自然と一体になるグランピング体験</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>ホテル花更紗の天然美肌温泉大浴場やクアリゾート湯舟沢が無料で利用可能</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>冬の星空を眺めながら味わう豪華飛騨牛BBQやすき焼き鍋ディナープラン</span></li>
                    </ul>
                  </div>
                </div>



                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 11,913円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182008%2F182008.html"
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
            <h3 className="font-bold text-stone-800 text-sm sm:text-base pt-2">【エリアへのアクセス】</h3>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・電車・明知鉄道：JR中央本線「恵那駅」より明知鉄道に乗り換えて「岩村駅」まで約30分。岩村城下町へは岩村駅より徒歩約5分、岩村城跡本丸へは登城口より徒歩約25分。JR名古屋駅から恵那駅まではJR中央本線（特急しなの）で約45分、快速で約70分。</p>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・車・マイカー：中央自動車道「恵那IC」より恵那峡まで約10分、岩村城下町まで国道257号経由で約20分。名古屋ICから恵那ICまで約45分、長野（松本IC）から約1時間30分。</p>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・恵那峡遊覧船：冬期も運航しており、暖房完備の船内から奇岩雪景色を約30分間クルーズ可能。</p>
            <h3 className="font-bold text-stone-800 text-sm sm:text-base pt-2">【見頃・気候・おすすめの服装】</h3>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・ベストシーズン：12月上旬〜1月下旬（岩村城の霧氷・雪景色、恵那峡温泉の雪見露天、冬の飛騨牛・五平餅の温もり）。</p>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・気温の目安：高原山間部に位置するため冬の寒さは厳しく、最高気温は4〜8℃、朝晩は氷点下（-2〜-5℃）まで冷え込みます。時折まとまった積雪があります。</p>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・服装のポイント：厚手の防寒ダウンジャケット、裏起毛パンツ、手袋、耳当て付きニット帽、マフラーを必ず着用してください。岩村城跡の石垣や本丸へ登る際は路面が凍結している場合があるため、滑り止めの効いたトレッキングシューズや防寒ブーツが必須です。マイカー利用時はスタッドレスタイヤの装着が不可欠です。</p>
            </div>
          </section>

          {/* よくある質問 FAQ */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              冬の恵那・岩村・中津川旅行 よくある質問（FAQ）
            </h2>
            <div className="space-y-3">
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
              <span className="text-cyan-800 font-extrabold">Q.</span>
              <span>岩村城跡の見学所要時間と歩きやすさはどうですか？</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
              岩村城下町の歴史資料館から本丸跡までは片道約800mの石畳の登城坂（急坂）が続き、往復所要時間は約60〜80分です。城郭の石垣群を間近に見学しながら登る価値は十分にありますが、冬は石畳が凍結することがあるため歩行には十分な注意が必要です。なお、山上の出丸広場近くまで車でアクセスできるルートもあります（冬期積雪時は注意）。
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
              <span className="text-cyan-800 font-extrabold">Q.</span>
              <span>岩村名物の「五平餅」の特徴と味わえる場所は？</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
              岩村の五平餅は、一般的なわらじ型とは異なり、小さな団子状の丸い餅が串に刺さっているのが特徴です。タレには胡麻・胡桃・落花生をふんだんに使い、醤油と砂糖で練り上げた濃厚で香ばしい味わい。城下町の本町通りにある「みよし」や「あまから岩村店」などで焼き立てが楽しめます。
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
              <span className="text-cyan-800 font-extrabold">Q.</span>
              <span>冬の恵那峡の観光クルーズ（遊覧船）は冬でも乗れますか？</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
              恵那峡遊覧船は冬期も毎日運航しています。客船は冷暖房完備で、窓越しに軍艦岩や獅子岩といった奇岩怪石の雪景色を温まりながら鑑賞できます。冬晴れの澄んだ青空とエメラルドグリーンの湖面、白い雪のコントラストは息を呑む美しさです。
            </p>
          </div>
            </div>
          </section>

          {/* 内部リンク */}
          <section className="bg-stone-100/70 rounded-2xl p-6 border border-stone-200 space-y-3 text-xs sm:text-sm">
            <h3 className="font-bold text-stone-800">あわせて読みたい関連特集</h3>
            <ul className="space-y-1.5 text-cyan-800">
              <li>
                <Link href="/prefectures/gifu" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>岐阜県のおすすめ観光名所＆温泉宿一覧</span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>全国の季節・目的別旅行特集一覧</span>
                </Link>
              </li>
              <li>
                <Link href="/winter-shirakawago-gassho-snow-illumination-stay" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>【岐阜】白川郷合掌造り雪景色ライトアップと飛騨牛名宿5選</span>
                </Link>
              </li>
              <li>
                <Link href="/winter-nagano-kiso-valley-magome-tsumago-snow-soba-stay" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>【長野】木曽路馬籠・妻籠宿の雪景色と信州そば名宿5選</span>
                </Link>
              </li>
              <li>
                <Link href="/winter-aichi-inuyama-castle-kiso-river-nagoya-cochin-stay" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>【愛知】国宝犬山城冬景色と木曽川・名古屋コーチン名宿5選</span>
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
