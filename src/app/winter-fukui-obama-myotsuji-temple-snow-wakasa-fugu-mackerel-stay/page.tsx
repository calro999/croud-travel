import { Metadata } from 'next';
import Link from 'next/link';
import { Star, MapPin, Calendar, Compass, ShieldCheck, Heart, Sparkles, ExternalLink, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '御食国の冬味覚・明通寺国宝本堂の静寂と若狭ふぐ：2026-2027年冬の福井・若狭小浜！名物若狭とらふぐフルコースと雪見温泉名宿5選',
  description: '国宝・明通寺本堂と三重塔が雪化粧をまとう冬の若狭小浜！朝廷に食を献上した御食国の至宝「若狭ふぐ（とらふぐコース）」や名物焼き鯖、若狭牛に舌鼓。若狭湾の絶景と柔らかな湯に心ほどける冬の福井・小浜厳選名宿5選。',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-fukui-obama-myotsuji-temple-snow-wakasa-fugu-mackerel-stay/',
  },
  openGraph: {
    title: '御食国の冬味覚・明通寺国宝本堂の静寂と若狭ふぐ：2026-2027年冬の福井・若狭小浜！名物若狭とらふぐフルコースと雪見温泉名宿5選',
    description: '国宝・明通寺本堂と三重塔が雪化粧をまとう冬の若狭小浜！朝廷に食を献上した御食国の至宝「若狭ふぐ（とらふぐコース）」や名物焼き鯖、若狭牛に舌鼓。若狭湾の絶景と柔らかな湯に心ほどける冬の福井・小浜厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-fukui-obama-myotsuji-temple-snow-wakasa-fugu-mackerel-stay/',
    siteName: '冬の日本厳選旅行ガイド',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/687/687.jpg',
        width: 1200,
        height: 630,
        alt: '【御食国の冬味覚・明通寺国宝本堂の静寂と若狭ふぐ】2026-2027年冬の福井・若狭小浜！名物若狭とらふぐフルコースと雪見温泉名宿5選',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '御食国の冬味覚・明通寺国宝本堂の静寂と若狭ふぐ：2026-2027年冬の福井・若狭小浜！名物若狭とらふぐフルコースと雪見温泉名宿5選',
    description: '国宝・明通寺本堂と三重塔が雪化粧をまとう冬の若狭小浜！朝廷に食を献上した御食国の至宝「若狭ふぐ（とらふぐコース）」や名物焼き鯖、若狭牛に舌鼓。若狭湾の絶景と柔らかな湯に心ほどける冬の福井・小浜厳選名宿5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/687/687.jpg'],
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
      "headline": "【御食国の冬味覚・明通寺国宝本堂の静寂と若狭ふぐ】2026-2027年冬の福井・若狭小浜！名物若狭とらふぐフルコースと雪見温泉名宿5選",
      "description": "国宝・明通寺本堂と三重塔が雪化粧をまとう冬の若狭小浜！朝廷に食を献上した御食国の至宝「若狭ふぐ（とらふぐコース）」や名物焼き鯖、若狭牛に舌鼓。若狭湾の絶景と柔らかな湯に心ほどける冬の福井・小浜厳選名宿5選。",
      "image": "https://img.travel.rakuten.co.jp/share/HOTEL/687/687.jpg",
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
            "name": "夕雅と旬彩の宿　せくみ屋",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/687/687.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "福井県",
              "streetAddress": "福井県 小浜市小浜白鬚113番地"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "3.97",
              "reviewCount": "1772"
            },
            "priceRange": "¥6,600〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Hotel",
            "name": "若狭みかた　きらら温泉　水月花",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/72715/72715.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "福井県",
              "streetAddress": "福井県 三方上中郡若狭町海山51-13"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "3.92",
              "reviewCount": "829"
            },
            "priceRange": "¥8,800〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Hotel",
            "name": "海香の宿　波華楼",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/14593/14593.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "福井県",
              "streetAddress": "福井県 三方上中郡若狭町塩坂越3-11"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.58",
              "reviewCount": "192"
            },
            "priceRange": "¥28,600〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Hotel",
            "name": "四季彩の宿　花椿",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/13898/13898.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "福井県",
              "streetAddress": "福井県 小浜市小浜白鳥72-1"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.22",
              "reviewCount": "132"
            },
            "priceRange": "¥10,450〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Hotel",
            "name": "ホテルアーバンポート",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/75186/75186.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "福井県",
              "streetAddress": "福井県 小浜市小浜白鳥72-1"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4",
              "reviewCount": "162"
            },
            "priceRange": "¥6,380〜"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "冬の明通寺を拝観する際の注意点や拝観時間は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "明通寺の拝観時間は9:00〜17:00（冬期は降雪状況により16:30頃に繰り上がる場合があります）。積雪時は境内の石段や山道が滑りやすくなるため、長靴やスノーブーツでの参拝が推奨されます。堂内は暖房設備が限られるため、足元を温める厚手の靴下を着用して向かうのが快適です。"
          }
        },
        {
          "@type": "Question",
          "name": "「若狭ふぐ」のシーズンとおすすめの食べ方は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "若狭ふぐの旬は10月下旬から3月上旬で、特に水温が最も下がる12月〜1月が身の締まり・脂の乗りともに最盛期を迎えます。刺身の「てっさ」はしっかりとした弾力があり噛むほどに甘みが広がり、「てっちり鍋」や「ふぐから揚げ」、「ひれ酒」で身体の芯から温まるのが醍醐味です。"
          }
        },
        {
          "@type": "Question",
          "name": "小浜の名物「浜焼き鯖」とはどのような料理ですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "浜焼き鯖は、丸ごと一匹の鯖の口から尾に向けて竹串を刺し、炭火や専用の焼き台でじっくりと素焼きにした小浜の伝統郷土料理です。余分な脂が落ちて皮が香ばしく、身はふっくらジューシー。生姜醤油やポン酢で味わうのが定番で、小浜市内の魚市場や商店街で焼き立てを購入できます。"
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
              src="https://img.travel.rakuten.co.jp/share/HOTEL/687/687.jpg"
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
              <Link href="/prefectures/fukui" className="text-cyan-200 hover:text-white transition-colors">
                福井県
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-100">小浜・若狭・三方五湖</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-xs px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年冬（11月・12月・1月）完全ガイド</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">「御食国の冬味覚・明通寺国宝本堂の静寂と若狭ふぐ」2026-2027年冬の福井・若狭小浜！名物若狭とらふぐフルコースと雪見温泉名宿5選</h1>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed pt-2">
              国宝・明通寺本堂と三重塔が雪化粧をまとう冬の若狭小浜！朝廷に食を献上した御食国の至宝「若狭ふぐ（とらふぐコース）」や名物焼き鯖、若狭牛に舌鼓。若狭湾の絶景と柔らかな湯に心ほどける冬の福井・小浜厳選名宿5選。
            </p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 mt-10 space-y-12">
          {/* イントロダクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm sm:text-base border-b border-stone-100 pb-2">
              <Compass className="w-5 h-5 text-cyan-700" />
              <h2>冬の小浜・若狭・三方五湖探訪：静寂と温もりに包まれる旅の魅力</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              日本海のリアス海岸が美しく入り組む福井県南部・若狭湾の奥座敷「小浜（おばま）」。古代より奈良や京都の朝廷に塩や魚介を納め続けた「御食国（みけつくに）」として栄え、大陸からの仏教文化の玄関口として「海のある奈良」とも称される歴史の宝庫です。冬の訪れとともに日本海から吹き寄せる白雪が杉木立を白く染め、深山に佇む古刹「明通寺（みょうつうじ）」は息を呑むほどの神聖な静寂に包まれます。大同元年（806年）、征夷大将軍・坂上田村麻呂によって開創されたと伝わる明通寺は、福井県内で唯一の国宝建造物である本堂と三重塔を擁する名刹。雪をまとった端正な鎌倉建築の檜皮葺屋根と、平安期に彫られた木造薬師如来坐像（重文）の穏やかな慈顔は、訪れる旅人の心を芯から洗い清めてくれます。小浜から鯖街道を通って都へと運ばれた食文化の記憶は今も息づき、冬の小浜を語る上で欠かせないのが、全国屈指のブランド「若狭ふぐ（とらふぐ）」です。若狭湾の日本最北限の冷たい海水でじっくりと育てられる若狭ふぐは、身の締まりと歯ごたえが抜群で、冬の11月から1月にかけて旨味のアミノ酸が最高潮に達します。透き通るような薄造り「てっさ」、肉厚な身が弾ける「てっちり鍋」、香ばしい「ふぐひれ酒」は冬の贅沢の極み。さらに脂の乗った大鯖を一本丸ごと串焼きにした「浜焼き鯖」や若狭牛のすき焼き、小浜温泉・三方五湖の湖畔温泉に浸かる贅沢な冬の若狭路へとご案内します。
            </p>
          </section>

          {/* 訪れるべき3つの理由 */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-800" />
              <span>この冬、小浜・若狭・三方五湖を訪れるべき3つの理由</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                福井県唯一の国宝建造物！「明通寺」深山の本堂・三重塔が魅せる冬の雪静寂
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              坂上田村麻呂ゆかりの古刹・明通寺。冬の白雪を冠した鎌倉時代の檜皮葺国宝本堂と三重塔が、老杉の巨木が茂る山内に威厳をもって佇みます。本尊の薬師如来坐像をはじめとする平安期の重文古仏の前に佇むと、悠久の祈りの歴史に心が静まります。
            </p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                日本最北限の養殖場で育つ至高の冬味覚！「若狭ふぐ」本場とらふぐフルコース
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              若狭湾の極寒の海水で育つ若狭ふぐは、低水温のため成長が遅い分、身がギュッと引き締まり、歯ごたえと旨味が格別。熟練の板前が引く美しい「てっさ」や、骨周りの旨味が溶け出す「てっちり鍋」、雑炊まで、本場ならではの贅沢を心ゆくまで堪能できます。
            </p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                鯖街道の起点・御食国小浜の歴史遺産と三方五湖・若狭湾の絶景温泉露天
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              都の食卓を支えた御食国の風情を残す小浜の町並み（三丁町）散策や、香ばしい名物「浜焼き鯖」。若狭湾や三方五湖を望む温泉宿では、冬の澄み渡る水面や雪景色を眺めながら柔らかな天然温泉に浸かり、身体の芯までポカポカに温まります。
            </p>
          </div>
            </div>
          </section>

          {/* 近隣名所アーカイブ（Wikipedia公式連携） */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h2 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-800" />
                <span>近隣名所アーカイブ：国宝・明通寺（坂上田村麻呂開創・深山に佇む本堂と三重塔の冬雪景）</span>
              </h2>
              <span className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                Wikipedia公式連携
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              <div className="md:col-span-5 relative h-48 sm:h-56 rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/65/Myotsuji_and_pagoda.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
                  alt="国宝・明通寺（坂上田村麻呂開創・深山に佇む本堂と三重塔の冬雪景）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  【国宝・明通寺（坂上田村麻呂開創・深山に佇む本堂と三重塔の冬雪景）の見どころと歴史】
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  明通寺（みょうつうじ）は、福井県小浜市門前字棡谷（ゆずりだに）（遠敷郡門前村棡谷、松永村門前）にある真言宗御室派の寺院。山号は棡山（ゆずりさん）。本尊は薬師如来。 大同元年（806年）、坂上田村麻呂によって創建されたと伝えられる。本堂と三重塔は、建造物としては福井県内で唯一国宝に指定されている。2015年（平成27年）4月24日、「海と都をつなぐ若狭の往来文化遺産群 - 御食国（みけつくに）若狭と鯖街道 -。」の構成文化財として日本遺産に認定される。
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
                  小浜・若狭・三方五湖 厳選の温泉＆名宿5選
                </h2>
              </div>
              <p className="text-xs text-stone-500">
                ※楽天トラベルAPI最新空室・料金データ連携中
              </p>
            </div>

            <div className="space-y-6">
            {/* 宿1: 夕雅と旬彩の宿　せくみ屋 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 1
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>3.97</span>
                    <span className="text-stone-400 text-xs font-normal">（1772件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    夕雅と旬彩の宿　せくみ屋
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    小浜港の潮騒を聞く老舗温泉旅館・本場若狭ふぐフルコースと若狭牛会席の名門
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/687/687.jpg"
                      alt="夕雅と旬彩の宿　せくみ屋"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      小浜港の海辺に佇む、若狭路の歴史と美食を象徴する老舗の温泉旅館。肌をなめらかに包み込む天然温泉大浴場を備え、冬の観光帰りに心ゆくまで身体を温めることができます。冬の看板料理は、地元小浜で水揚げされる本場「若狭ふぐ」のフルコース。美しく透き通るてっさの歯ごたえ、身がほろりと解けるてっちり鍋、熱々のひれ酒まで、ふぐの旨味を余すところなく堪能できる至高の食体験が待っています。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>小浜湾の波打ち際に位置する伝統の宿！小浜温泉の天然温泉大浴場とサウナ完備</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>冬の主役「若狭ふぐフルコース」てっさ・てっちり・唐揚げ・ひれ酒の贅沢三昧</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>若狭牛の陶板焼きや名物若狭カレイ・旬の冬魚介が彩る豪華料理プラン</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「食事は美味しく、部屋からの夕日が絶景夕食朝食共に美味しかったです。部屋は普通ですね、部屋から観る夕日はとても綺麗でした。お風呂は窓も無く露天風呂も特に景色も見えないし期待外れでした。クチコ。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 6,600円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F687%2F687.html"
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

            {/* 宿2: 若狭みかた　きらら温泉　水月花 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 2
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>3.92</span>
                    <span className="text-stone-400 text-xs font-normal">（829件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    若狭みかた　きらら温泉　水月花
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    三方五湖・水月湖畔に佇む絶景レイクビュー温泉宿・湖上露天風呂と若狭の味覚
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/72715/72715.jpg"
                      alt="若狭みかた　きらら温泉　水月花"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      世界的な年縞（ねんこう）で知られる三方五湖のひとつ、水月湖の静かな湖畔にたたずむリゾート温泉宿。客室や露天風呂からは、静まり返った湖面と雪をいただく対岸の山々が一望でき、冬ならではの幽玄な美しさに心が洗われます。天然温泉「きらら温泉」は身体が芯から温まる良泉。夕食には冬の若狭ふぐコースをはじめ、福井の海山の恵みを贅沢に盛り込んだ会席が並び、贅沢な冬の夜を演出します。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>神秘の湖「水月湖」のほとりに建つ絶好のロケーション！全室レイクビュー</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>湖を間近に望むきらら温泉の露天風呂・朝には幻想的な湖面の霧と雪景色</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>冬の若狭ふぐや三方五湖名物の天然うなぎ・若狭牛を味わう湖畔会席</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「細やかな配慮と静かな環境でゆったり過ごせた母親の敬老祝いで宿泊しました。事前に苦手な食材のこと、母親が足が悪いためエレベーター近くの部屋にして欲しい旨連絡し、ちゃんと対応頂きました。湖畔にあり。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 8,800円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72715%2F72715.html"
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

            {/* 宿3: 海香の宿　波華楼 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 3
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.58</span>
                    <span className="text-stone-400 text-xs font-normal">（192件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    海香の宿　波華楼
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    若狭湾を一望する大人の隠れ家・わずか客室数の限定された海香る美食旅館
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/14593/14593.jpg"
                      alt="海香の宿　波華楼"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      若狭湾の静かな入江に佇む、大人向けの落ち着いた隠れ家温泉旅館。客室のテラスからは広大な日本海の海原が広がり、冬の荒々しくも美しい波の表情を独り占めできます。館内には細やかな気配りとおもてなしが行き届き、喧騒を離れた特別な時間を約束。夕食には極上の若狭とらふぐや近海で揚がるタグ付き越前がにを取り入れた豪華な懐石料理が振る舞われ、美食と絶景に酔いしれる滞在が叶います。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全客室がオーシャンビュー！目の前に広がる日本海の雄大なパノラマ絶景</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>波の音を間近に聴きながら浸かる天然温泉露天風呂と上質なプライベート空間</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>料理長が厳選する極上若狭ふぐと越前がに・若狭牛のプレミアム冬懐石</span></li>
                    </ul>
                  </div>
                </div>



                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 28,600円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14593%2F14593.html"
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

            {/* 宿4: 四季彩の宿　花椿 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 4
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.22</span>
                    <span className="text-stone-400 text-xs font-normal">（132件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    四季彩の宿　花椿
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    若狭高浜の白砂青松を望む料理宿・冬の若狭ふぐと地魚料理をリーズナブルに満喫
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/13898/13898.jpg"
                      alt="四季彩の宿　花椿"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      美しい若狭湾の海岸線に程近い、料理自慢の温もりあふれる温泉宿。気取らない温かなサービスと、港町ならではの圧倒的な鮮度を誇る魚介料理が多くのリピーターを魅了しています。冬の目玉は、自家製のポン酢で味わうボリューム満点の若狭ふぐ会席。てっさやてっちりはもちろん、ふぐの唐揚げや白子料理など、本場小浜ならではの贅沢な味わいをリーズナブルに楽しむことができます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>日本の夕陽百選・若狭和田海岸を望む好立地！アットホームで温かなもてなし</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>冬の味覚の王様・若狭ふぐの本格フルコースを本場ならではの納得価格で提供</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>広々とした大浴場で旅の疲れを癒やし、ファミリーやグループでも快適ステイ</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「絶品料理の数々に大満足お料理が最高でした。小鯛の姿造りが少し多すぎたけど、どのお料理も味は絶品でした。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 10,450円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13898%2F13898.html"
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

            {/* 宿5: ホテルアーバンポート */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 5
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.00</span>
                    <span className="text-stone-400 text-xs font-normal">（162件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテルアーバンポート
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    小浜湾を真正面に望むオーシャンフロントホテル・ビジネスから観光まで快適ステイ
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/75186/75186.jpg"
                      alt="ホテルアーバンポート"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      小浜港のウォーターフロントに位置し、爽快なオーシャンビューと機能的な設備を兼ね備えたスタイリッシュなホテル。客室の窓からは小浜湾を行き交う漁船や冬の海原が一望でき、旅情を盛り上げます。明通寺や鯖街道の宿場町「熊川宿」へのアクセス拠点として極めて便利。周辺には地元の海鮮居酒屋や名物焼き鯖の専門店も多く、気ままに小浜の夜を楽しみたい旅人に最適です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>小浜湾に面した全室ハーバービュー！海を染める冬の朝夕の情景を満喫</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>JR小浜駅から車で約5分・小浜市街や明通寺への観光拠点として抜群のアクセス</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地元小浜の魚介を使った和定食朝食と清潔感あふれる快適な客室空間</span></li>
                    </ul>
                  </div>
                </div>



                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 6,380円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75186%2F75186.html"
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
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・電車・特急：JR北陸新幹線「敦賀駅」よりJR小浜線に乗り換えて東小浜駅または小浜駅まで約50〜60分。明通寺へは東小浜駅よりタクシーで約10分、または小浜市コミュニティバス「あいあいバス」で約15分。京都駅からは湖西線特急サンダーバードで敦賀駅経由、または近江今津駅より若江線（JRバス）で小浜駅まで約55分。</p>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・車・マイカー：舞鶴若狭自動車道「小浜IC」より小浜市街まで約5分、明通寺まで約12分。名神高速・北陸自動車道経由で京都東ICから小浜ICまで約1時間40分、名古屋（名駅）から約2時間。</p>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・周遊アクセス：三方五湖（レインボーライン）から小浜市街へは車で約30分、若狭湾沿いの絶景ドライブが楽しめます。</p>
            <h3 className="font-bold text-stone-800 text-sm sm:text-base pt-2">【見頃・気候・おすすめの服装】</h3>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・ベストシーズン：11月下旬〜1月下旬（若狭ふぐの旬、明通寺の雪景色、鯖街道の冬グルメ）。</p>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・気温の目安：日本海側気候のため、12月中旬以降は雪が降る日が多くなります。最高気温は5〜8℃、最低気温は0〜2℃前後。湿度が高く底冷えする寒さです。</p>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・服装のポイント：防水性・防寒性の高い厚手のダウンジャケットやフード付きコート、滑り止めソールの効いたスノーブーツや防水スニーカーが必須です。明通寺の境内は石段や自然の参道があるため足元に十分ご注意ください。</p>
            </div>
          </section>

          {/* よくある質問 FAQ */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              冬の小浜・若狭・三方五湖旅行 よくある質問（FAQ）
            </h2>
            <div className="space-y-3">
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
              <span className="text-cyan-800 font-extrabold">Q.</span>
              <span>冬の明通寺を拝観する際の注意点や拝観時間は？</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
              明通寺の拝観時間は9:00〜17:00（冬期は降雪状況により16:30頃に繰り上がる場合があります）。積雪時は境内の石段や山道が滑りやすくなるため、長靴やスノーブーツでの参拝が推奨されます。堂内は暖房設備が限られるため、足元を温める厚手の靴下を着用して向かうのが快適です。
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
              <span className="text-cyan-800 font-extrabold">Q.</span>
              <span>「若狭ふぐ」のシーズンとおすすめの食べ方は？</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
              若狭ふぐの旬は10月下旬から3月上旬で、特に水温が最も下がる12月〜1月が身の締まり・脂の乗りともに最盛期を迎えます。刺身の「てっさ」はしっかりとした弾力があり噛むほどに甘みが広がり、「てっちり鍋」や「ふぐから揚げ」、「ひれ酒」で身体の芯から温まるのが醍醐味です。
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
              <span className="text-cyan-800 font-extrabold">Q.</span>
              <span>小浜の名物「浜焼き鯖」とはどのような料理ですか？</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
              浜焼き鯖は、丸ごと一匹の鯖の口から尾に向けて竹串を刺し、炭火や専用の焼き台でじっくりと素焼きにした小浜の伝統郷土料理です。余分な脂が落ちて皮が香ばしく、身はふっくらジューシー。生姜醤油やポン酢で味わうのが定番で、小浜市内の魚市場や商店街で焼き立てを購入できます。
            </p>
          </div>
            </div>
          </section>

          {/* 内部リンク */}
          <section className="bg-stone-100/70 rounded-2xl p-6 border border-stone-200 space-y-3 text-xs sm:text-sm">
            <h3 className="font-bold text-stone-800">あわせて読みたい関連特集</h3>
            <ul className="space-y-1.5 text-cyan-800">
              <li>
                <Link href="/prefectures/fukui" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>福井県のおすすめ観光名所＆温泉宿一覧</span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>全国の季節・目的別旅行特集一覧</span>
                </Link>
              </li>
              <li>
                <Link href="/winter-fukui-tsuruga-kehi-jingu-mikata-goko-echizengani-wakasa-fugu-stay" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>【福井】敦賀気比神宮新春初詣と越前がに・若狭ふぐ名宿5選</span>
                </Link>
              </li>
              <li>
                <Link href="/winter-kyoto-amanohashidate-ine-funaya-winter-burishabu-stay" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>【京都】天橋立＆伊根の舟屋雪景色と冬の寒ブリしゃぶ名宿5選</span>
                </Link>
              </li>
              <li>
                <Link href="/winter-shiga-yogo-lake-wakasagi-kamonabe-shizugatake-stay" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>【滋賀】神秘の余呉湖ワカサギと天然真鴨鍋名宿5選</span>
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
