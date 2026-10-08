import React from 'react';
import Link from 'next/link';
import { MapPin, Calendar, Star, ExternalLink, ChevronRight, Sparkles, Compass, ShieldCheck, Heart } from 'lucide-react';

export const metadata = {
  title: '【近江国第一の古社・多賀大社新春初詣と名物糸切餅】2026-2027年冬の滋賀・多賀＆彦根！冬の極上近江牛すき焼きと美肌天然温泉名宿5選',
  description: '「お伊勢参らばお多賀へ参れ」と称えられる近江国随一の古社「多賀大社」新春初詣！延命長寿のお多賀杓子と名物糸切餅、国宝彦根城の冬景色。冬の極上霜降り「近江牛すき焼き」や鴨鍋、湖東の豊かな天然温泉で身体の芯から温まる冬の厳選名宿5選。',
  keywords: ['多賀・彦根・八日市', '滋賀県 温泉', '冬旅行', '初詣', '11月旅行', '12月旅行', '1月旅行', '宿泊予約', '楽天トラベル'],
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-shiga-taga-taisha-hatsumode-omigyu-sukiyaki-itokirimochi-stay/',
  },
  openGraph: {
    title: '【近江国第一の古社・多賀大社新春初詣と名物糸切餅】2026-2027年冬の滋賀・多賀＆彦根！冬の極上近江牛すき焼きと美肌天然温泉名宿5選',
    description: '「お伊勢参らばお多賀へ参れ」と称えられる近江国随一の古社「多賀大社」新春初詣！延命長寿のお多賀杓子と名物糸切餅、国宝彦根城の冬景色。冬の極上霜降り「近江牛すき焼き」や鴨鍋、湖東の豊かな天然温泉で身体の芯から温まる冬の厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-shiga-taga-taisha-hatsumode-omigyu-sukiyaki-itokirimochi-stay/',
    siteName: '冬の日本厳選旅行ガイド',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/149302/149302.jpg',
        width: 1200,
        height: 630,
        alt: '【近江国第一の古社・多賀大社新春初詣と名物糸切餅】2026-2027年冬の滋賀・多賀＆彦根！冬の極上近江牛すき焼きと美肌天然温泉名宿5選',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '【近江国第一の古社・多賀大社新春初詣と名物糸切餅】2026-2027年冬の滋賀・多賀＆彦根！冬の極上近江牛すき焼きと美肌天然温泉名宿5選',
    description: '「お伊勢参らばお多賀へ参れ」と称えられる近江国随一の古社「多賀大社」新春初詣！延命長寿のお多賀杓子と名物糸切餅、国宝彦根城の冬景色。冬の極上霜降り「近江牛すき焼き」や鴨鍋、湖東の豊かな天然温泉で身体の芯から温まる冬の厳選名宿5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/149302/149302.jpg'],
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
      "headline": "【近江国第一の古社・多賀大社新春初詣と名物糸切餅】2026-2027年冬の滋賀・多賀＆彦根！冬の極上近江牛すき焼きと美肌天然温泉名宿5選",
      "description": "「お伊勢参らばお多賀へ参れ」と称えられる近江国随一の古社「多賀大社」新春初詣！延命長寿のお多賀杓子と名物糸切餅、国宝彦根城の冬景色。冬の極上霜降り「近江牛すき焼き」や鴨鍋、湖東の豊かな天然温泉で身体の芯から温まる冬の厳選名宿5選。",
      "image": "https://img.travel.rakuten.co.jp/share/HOTEL/149302/149302.jpg",
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
            "name": "料亭旅館やす井",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/149302/149302.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "滋賀県",
              "streetAddress": "滋賀県 彦根市安清町13-26"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.66",
              "reviewCount": "119"
            },
            "priceRange": "¥31,900〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Hotel",
            "name": "彦根キャッスル　リゾート＆スパ",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/145042/145042.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "滋賀県",
              "streetAddress": "滋賀県 彦根市佐和町1-8"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.58",
              "reviewCount": "1440"
            },
            "priceRange": "¥13,250〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Hotel",
            "name": "ホテルビワドッグ",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/188914/188914.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "滋賀県",
              "streetAddress": "滋賀県 彦根市新海町3260"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.52",
              "reviewCount": "65"
            },
            "priceRange": "¥30,080〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Hotel",
            "name": "永源寺温泉　八風の湯　宿「八風別館」",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/147618/147618.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "滋賀県",
              "streetAddress": "滋賀県 東近江市永源寺高野町352"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.36",
              "reviewCount": "1032"
            },
            "priceRange": "¥11,000〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Hotel",
            "name": "クレフィール湖東",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/106249/106249.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "滋賀県",
              "streetAddress": "滋賀県 東近江市平柳町22-3"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.24",
              "reviewCount": "373"
            },
            "priceRange": "¥7,800〜"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "多賀大社の初詣の混雑を避けるためのおすすめ時間帯は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "大晦日23:00から元旦未明、および三が日の日中（10:30〜15:30）は境内参道や周辺道路が大変混雑します。ゆったりと参拝したい場合は、早朝（朝7:00〜8:30）または夕方（16:30以降）のお参りが狙い目です。また、1月4日以降の平日であれば混雑も落ち着き、厳かな神域の空気を心ゆくまで味わうことができます。"
          }
        },
        {
          "@type": "Question",
          "name": "名物「糸切餅」の特徴とどこで買えるか教えてください。",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "糸切餅は、米粉で作ったきめ細かく柔らかい白餅に赤と青の3本のラインを引き、中に甘さ控えめの漉し餡を包んで、刃物を使わずに弓の弦（現在は専用の糸）で一口大に切り分ける伝統和菓子です。多賀大社の門前町にある「多賀や」や「莚寿堂本舗」でできたてが販売されており、お土産はもちろん、その場で温かいお茶とともに味わうことができます。"
          }
        },
        {
          "@type": "Question",
          "name": "冬の近江牛を最も美味しく堪能できるおすすめの食べ方は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "冬の近江牛は、脂の融点が低いため「すき焼き」や「しゃぶしゃぶ」で味わうのが最も旨味を引き出せます。熱を通すことで肉の甘みと芳醇な香りが広がり、とろけるような柔らかさを実感できます。彦根城下町の老舗精肉店直営レストランや温泉旅館で提供される本格すき焼き会席がおすすめです。"
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
              src="https://img.travel.rakuten.co.jp/share/HOTEL/149302/149302.jpg"
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
              <Link href="/prefectures/shiga" className="text-cyan-200 hover:text-white transition-colors">
                滋賀県
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-100">多賀・彦根・八日市</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-xs px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年冬（11月・12月・1月）完全ガイド</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">
              【近江国第一の古社・多賀大社新春初詣と名物糸切餅】2026-2027年冬の滋賀・多賀＆彦根！冬の極上近江牛すき焼きと美肌天然温泉名宿5選
            </h1>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed pt-2">
              「お伊勢参らばお多賀へ参れ」と称えられる近江国随一の古社「多賀大社」新春初詣！延命長寿のお多賀杓子と名物糸切餅、国宝彦根城の冬景色。冬の極上霜降り「近江牛すき焼き」や鴨鍋、湖東の豊かな天然温泉で身体の芯から温まる冬の厳選名宿5選。
            </p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 mt-10 space-y-12">
          {/* イントロダクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm sm:text-base border-b border-stone-100 pb-2">
              <Compass className="w-5 h-5 text-cyan-700" />
              <h2>冬の多賀・彦根・八日市探訪：静寂と温もりに包まれる旅の魅力</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              霊峰・伊吹山と鈴鹿山脈から冷たい冬風「伊吹おろし」が琵琶湖へと吹き抜ける初冬から厳冬期、滋賀県東部の湖東地域は、静謐な祈りの気配と豊かな歴史の息吹に満たされます。古くから「お伊勢参らばお多賀へ参れ、お伊勢お多賀の子でござる」と俗謡に歌い継がれてきた名刹「多賀大社（たがたいしゃ）」は、伊勢神宮に祀られる天照大神の親神にあたる伊邪那岐命（いざなぎのみこと）と伊邪那美命（いざなみのみこと）の夫婦神を祀る近江国随一の古社。生命の源、延命長寿、良縁結び、家内安全を司る大社として全国から崇敬を集め、新春正月三が日には約50万人もの参拝客で大いに賑わいます。杉木立に囲まれた境内には、重文の太鼓橋（そり橋）や風格ある本殿がたたずみ、新春の清らかな空気が参拝者の心を洗い清めます。参道に連なる門前町では、蒙古襲来の際に奉納された弓の弦で切り分けたと伝わる銘菓「糸切餅（いときりもち）」の米粉の香りと上品な漉し餡の甘みが漂い、名物の延命長寿「お多賀杓子（おたまじゃくしの語源）」が新年の福を招きます。多賀から車でわずか15分、雪の白壁と天守が神々しい国宝「彦根城」や、冬の静寂に包まれる湖東三山（西明寺・金剛輪寺・百済寺）を巡る歴史旅。そして冷え切った身体を温めてくれるのが、日本三大和牛の最高峰「近江牛（おうみぎゅう）」の極上すき焼きと、琵琶湖の恵み・天然鴨鍋。湖東の豊かな天然温泉に浸かり、芳醇な霜降り肉の甘みに酔いしれる、大人の冬の近江路へ誘います。
            </p>
          </section>

          {/* 訪れるべき3つの理由 */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-800" />
              <span>この冬、多賀・彦根・八日市を訪れるべき3つの理由</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                伊勢神宮の親神を祀る生命の聖地！「多賀大社」新春初詣とお多賀杓子の延命祈願
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              伊邪那岐・伊邪那美の二神を祀り、生命の親神として篤く敬われる多賀大社。元正天皇の病気平癒を祈願した強飯に由来する「お多賀杓子」は長寿と健康のお守りとして名高く、新年の開運を願う初詣客が全国から集まります。門前町で作りたての柔らかな「糸切餅」を頬張る時間は冬の心温まるひとときです。
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                白雪に浮かぶ名城の偉容！国宝「彦根城」冬の天守閣と玄宮園の雪景色
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              多賀大社から至近の彦根城は、現存十二天守のひとつに数えられる国宝の名城。冬の青空の下、冠雪した三重三階の天守や重厚な石垣が雪化粧をまとう姿は凛とした美しさを誇ります。大名庭園「玄宮園」の池越しに仰ぎ見る雪の天守は、一幅の水墨画のような静寂の美を湛えています。
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                極上のサシがとろける日本三大和牛！本場「近江牛」の贅沢すき焼きと湖東の温泉
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              約400年の歴史を誇る近江牛は、きめ細やかな霜降りと融点の低い上質な脂が特徴。冬の寒さの中、甘辛い割り下で焼き煮する本場の近江牛すき焼きは、口に含んだ瞬間に芳醇な香りと甘みが広がります。愛知川や鈴鹿山麓から湧き出る天然温泉で芯から温まり、至福の美食ステイを堪能できます。
            </p>
          </div>
            </div>
          </section>

          {/* 近隣名所アーカイブ（Wikipedia公式連携） */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h2 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-800" />
                <span>近隣名所アーカイブ：近江国第一の古社・多賀大社（命の親神・延命長寿と縁結びの新春初詣50万人）</span>
              </h2>
              <span className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                Wikipedia公式連携
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              <div className="md:col-span-5 relative h-48 sm:h-56 rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Taga-taisha%2C_shaden-1.jpg/1280px-Taga-taisha%2C_shaden-1.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="近江国第一の古社・多賀大社（命の親神・延命長寿と縁結びの新春初詣50万人）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  【近江国第一の古社・多賀大社（命の親神・延命長寿と縁結びの新春初詣50万人）の見どころと歴史】
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  多賀大社（たがたいしゃ）は、滋賀県犬上郡多賀町多賀にある神社。式内社で、旧社格は官幣大社で、現在は神社本庁の別表神社。 古くから「お多賀さん」として親しまれ、神仏習合の中世期には「多賀大明神」として信仰を集めた。お守りとしてしゃもじを授ける「お多賀杓子（おたがじゃくし）」という慣わしがあるが、これは「お玉杓子」や「オタマジャクシ」の名の由来とされている。
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
                  多賀・彦根・八日市 厳選の温泉＆名宿5選
                </h2>
              </div>
              <p className="text-xs text-stone-500">
                ※楽天トラベルAPI最新空室・料金データ連携中
              </p>
            </div>

            <div className="space-y-6">
            {/* 宿1: 料亭旅館やす井 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 1
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.66</span>
                    <span className="text-stone-400 text-xs font-normal">（119件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    料亭旅館やす井
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    明治2年創業・彦根城下の数寄屋造り料亭旅館・美しい日本庭園と極上近江牛懐石
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/149302/149302.jpg"
                      alt="料亭旅館やす井"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      国宝彦根城の城下町に佇む、明治2年創業の歴史を誇る名門料亭旅館。約400坪の手入れの行き届いた日本庭園を囲むように数寄屋造りの客室が配され、雪吊りが施された冬の庭園を眺めながら心静かな時間を過ごせます。料亭としての誇りが息づく料理は、極上A5ランク近江牛をメインに、冬の琵琶湖の湖魚や京風の出汁を効かせた至高の会席料理。多賀大社への新春参拝と彦根の歴史探訪をこれ以上なく優雅に彩る最高峰の宿です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>創業百五十余年！伝統の数寄屋建築と約四百坪の風雅な日本庭園</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>客室から四季の庭園を眺めながら過ごす贅沢で静謐なプライベート空間</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>本場A5ランク近江牛のすき焼き・しゃぶしゃぶを堪能する料亭会席</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「掃除が行き届き快適、食事も美味しく大満足掃除が行き届いており快適に過ごせました!ご飯もとても美味しく大満足でしたまた利用したいです!!!クチコミの詳細はこちらから　https://re…　2026-09-28 23:13:19投稿 <a href=”https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=149302” class=”3click”>つづきはこちら</a>」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 31,900円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149302%2F149302.html"
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

            {/* 宿2: 彦根キャッスル　リゾート＆スパ */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 2
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.58</span>
                    <span className="text-stone-400 text-xs font-normal">（1440件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    彦根キャッスル　リゾート＆スパ
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    国宝彦根城天守を真正面に望むキャッスルビュー温泉・近江牛ダイニング
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/145042/145042.jpg"
                      alt="彦根キャッスル　リゾート＆スパ"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      彦根城の中堀に面し、客室や温泉大浴場から国宝天守の雄姿を真正面に眺めることができる上質なリゾートホテル。最上階の「城見の湯」露天風呂からは、雪化粧した彦根城が冬空に浮かび上がる絶景を望みながらの湯浴みが楽しめます。館内レストランでは本場近江牛のステーキや特選すき焼きをはじめ、近江八幡の赤こんにゃくや湖魚など滋賀の恵みを贅沢に使ったディナーが用意され、大人の冬旅に贅沢な充足感をもたらします。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>彦根城中堀の目の前！天守閣を間近に仰ぐ絶好のロケーション</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>天守を望む城見の湯温泉大浴場と展望テラスで贅沢なリフレッシュ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>目の前で焼き上げる近江牛鉄板焼きや滋賀の郷土美食ディナー</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「彦根城前の好立地、お風呂からの眺めも最高ビワイチと観光を兼ねた旅行で2泊しました。彦根城の前ということでロケーションは最高でした。ホテルのサービスも丁寧で気持ちの良い接客で、安心して過ごせました。…　2026-10-01 20:59:16投稿 <a href=”https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=145042” class=”3click”>つづきはこちら</a>」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 13,250円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145042%2F145042.html"
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

            {/* 宿3: ホテルビワドッグ */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 3
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.52</span>
                    <span className="text-stone-400 text-xs font-normal">（65件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテルビワドッグ
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    琵琶湖畔に佇む愛犬同伴ラグジュアリーリゾート・全室レイクビューと創作和会席
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/188914/188914.jpg"
                      alt="ホテルビワドッグ"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      彦根の琵琶湖岸に広がる、愛犬とともに最高峰のステイを楽しめるハイエンドリゾートホテル。すべての客室から遮るもののない広大なマザーレイク琵琶湖の絶景が広がり、冬の澄んだ湖面の輝きに心が洗われます。愛犬同伴はもちろん、一般の旅行客にとっても極上のサービスと空間を提供。夕食には地元滋賀の最高級近江牛や契約農家の朝採れ野菜を使った目にも鮮やかな創作和会席が並び、心温まる至福の夜を約束します。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>広大な琵琶湖を目の前に臨む全室オーシャンビュー（レイクビュー）の贅沢空間</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>愛犬と最高の時間を共有できる専用ドッグランや充実のドッグアメニティ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>近江牛や滋賀の厳選旬食材をシェフが美しく仕立てる本格和会席ディナー</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「愛犬とずっと一緒に過ごせる、心温まる最高のホテルでした! 先日、愛犬と一緒に宿泊させていただきました。多くのホテルでは食事の際に犬をお部屋のクレートでお留守番させなければなりませんが、こちらはご飯…　2026-09-28 18:40:58投稿 <a href=”https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=188914” class=”3click”>つづきはこちら</a>」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 30,080円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188914%2F188914.html"
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

            {/* 宿4: 永源寺温泉　八風の湯　宿「八風別館」 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 4
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.36</span>
                    <span className="text-stone-400 text-xs font-normal">（1032件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    永源寺温泉　八風の湯　宿「八風別館」
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    鈴鹿山脈の清流沿いに佇む美肌天然温泉・全室露天風呂付き離れ宿で癒やす冬
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/147618/147618.jpg"
                      alt="永源寺温泉　八風の湯　宿「八風別館」"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      鈴鹿山脈の麓、清流・愛知川のほとりに位置する永源寺温泉の上質な隠れ家温泉宿。別館の客室はすべて専用の温泉露天風呂付き離れとなっており、冬の凛とした渓流のせせらぎを聞きながら、プライベートな空間で何度でも名湯を満喫できます。泉質は肌をなめらかに包み込む弱アルカリ性の天然温泉。夕食には本場近江牛の石焼きや川魚の塩焼きなど、里山の温もりに満ちた豪華会席が提供され、心身を解きほぐす極上の湯治が叶います。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>愛知川の清流を望む全室に源泉かけ流し天然温泉露天風呂を完備した離れ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>微細気泡でシルクのような肌触りの「八風の湯」美肌天然温泉入り放題</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>イワナや近江牛・地元の滋味豊かな旬野菜を贅沢に盛り込んだ極上会席</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「紅葉の眺めと泉質の良いお風呂に満足部屋からの眺め:紅葉の時期はとてもいいと思います。お風呂:泉質も良く、サウナも良かったです。クチコミの詳細はこちらから　https://review.trav…　2026-10-03 18:26:14投稿 <a href=”https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=147618” class=”3click”>つづきはこちら</a>」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 11,000円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147618%2F147618.html"
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

            {/* 宿5: クレフィール湖東 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 5
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.24</span>
                    <span className="text-stone-400 text-xs font-normal">（373件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    クレフィール湖東
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    湖東の丘陵に広がるパノラマビュー・近江牛会席と弱アルカリ性展望温泉
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/106249/106249.jpg"
                      alt="クレフィール湖東"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      東近江市の緑豊かな丘陵地に位置し、鈴鹿の山並みと湖東平野を見晴らす眺望自慢のホテル。名神高速道路のスマートICからも近く、多賀大社や湖東三山へのアクセス拠点として最適です。館内には広々とした展望大浴場が備わり、旅の疲れを心地よく癒やしてくれます。夕食には滋賀が誇る認定近江牛を贅沢に使ったすき焼きや陶板焼きのコースが用意され、コストパフォーマンスの高さと温かな接客で多くのリピーターに愛されています。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>鈴鹿山脈と湖東平野を一望する丘の上に建つ開放感あふれるリゾート空間</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>広々とした展望大浴場「ことうの湯」で楽しむ温かな癒やしの湯浴み</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>本場滋賀の近江牛ステーキやすき焼きをリーズナブルに味わう美食プラン</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「広い部屋と抜群のロケーションでゆったりひろーい部屋でロケーション抜群ゆったりと過ごせましたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp…　2026-10-01 19:43:58投稿 <a href=”https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=106249” class=”3click”>つづきはこちら</a>」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 7,800円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106249%2F106249.html"
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
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・電車・新幹線：JR東海道新幹線「米原駅」よりJR琵琶湖線（新快速）で彦根駅まで約5分。多賀大社へは彦根駅より近江鉄道本線・多賀線で「多賀大社前駅」まで約15分、駅より徒歩約10分。正月三が日および初詣期間は彦根駅・多賀大社前駅発着の臨時シャトルバスも運行。京都駅から彦根駅までJR新快速で約50分。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・車・マイカー：名神高速道路「彦根IC」より多賀大社まで約15分、名神高速道路「湖東三山スマートIC」または「多賀スマートIC（下り線専用）」より多賀大社まで約5〜10分。名神・彦根ICから彦根市街（彦根城）まで約5分。名古屋（名駅）から彦根ICまで約60分、京都東ICから約55分。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・湖東エリア周遊：彦根城から多賀大社へは車で約15分、永源寺温泉へは車で約35分とスムーズに周遊可能。</p>
            <h4 className="font-bold text-stone-900 text-sm mt-3 first:mt-0">【見頃・気候・おすすめの服装】</h4>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・ベストシーズン：12月上旬〜1月下旬（多賀大社新春初詣、彦根城の雪景色、冬の近江牛すき焼き・鴨鍋の旬）。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・気温の目安：琵琶湖東岸地域は「伊吹おろし」と呼ばれる冷たい北西風が強く吹き込み、朝晩の気温は氷点下近くまで下がります。日中の気温は5〜9℃前後。1月を中心に数回の積雪が見られます。</p>
            <p className="text-xs text-stone-600 leading-relaxed pl-2">・服装のポイント：風を通さない防寒ダウンコート、マフラー、手袋、保温性インナーが必須です。多賀大社境内の玉砂利や彦根城の急勾配の登城坂・天守内の急階段を安全に歩くため、滑りにくいフラットなスニーカーやトレッキングシューズを着用してください。</p>
            </div>
          </section>

          {/* よくある質問 FAQ */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              冬の多賀・彦根・八日市旅行 よくある質問（FAQ）
            </h2>
            <div className="space-y-3">
          <details className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden">
            <summary className="p-4 text-xs sm:text-sm font-bold text-stone-900 cursor-pointer flex items-center justify-between list-none">
              <span>多賀大社の初詣の混雑を避けるためのおすすめ時間帯は？</span>
              <span className="text-cyan-800 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
              大晦日23:00から元旦未明、および三が日の日中（10:30〜15:30）は境内参道や周辺道路が大変混雑します。ゆったりと参拝したい場合は、早朝（朝7:00〜8:30）または夕方（16:30以降）のお参りが狙い目です。また、1月4日以降の平日であれば混雑も落ち着き、厳かな神域の空気を心ゆくまで味わうことができます。
            </div>
          </details>

          <details className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden">
            <summary className="p-4 text-xs sm:text-sm font-bold text-stone-900 cursor-pointer flex items-center justify-between list-none">
              <span>名物「糸切餅」の特徴とどこで買えるか教えてください。</span>
              <span className="text-cyan-800 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
              糸切餅は、米粉で作ったきめ細かく柔らかい白餅に赤と青の3本のラインを引き、中に甘さ控えめの漉し餡を包んで、刃物を使わずに弓の弦（現在は専用の糸）で一口大に切り分ける伝統和菓子です。多賀大社の門前町にある「多賀や」や「莚寿堂本舗」でできたてが販売されており、お土産はもちろん、その場で温かいお茶とともに味わうことができます。
            </div>
          </details>

          <details className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden">
            <summary className="p-4 text-xs sm:text-sm font-bold text-stone-900 cursor-pointer flex items-center justify-between list-none">
              <span>冬の近江牛を最も美味しく堪能できるおすすめの食べ方は？</span>
              <span className="text-cyan-800 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="px-4 pb-4 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
              冬の近江牛は、脂の融点が低いため「すき焼き」や「しゃぶしゃぶ」で味わうのが最も旨味を引き出せます。熱を通すことで肉の甘みと芳醇な香りが広がり、とろけるような柔らかさを実感できます。彦根城下町の老舗精肉店直営レストランや温泉旅館で提供される本格すき焼き会席がおすすめです。
            </div>
          </details>
            </div>
          </section>

          {/* 内部リンク */}
          <section className="bg-stone-100/70 rounded-2xl p-6 border border-stone-200 space-y-3 text-xs sm:text-sm">
            <h3 className="font-bold text-stone-800">あわせて読みたい関連特集</h3>
            <ul className="space-y-1.5 text-cyan-800">
              <li>
                <Link href="/prefectures/shiga" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>滋賀県のおすすめ観光名所＆温泉宿一覧</span>
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
