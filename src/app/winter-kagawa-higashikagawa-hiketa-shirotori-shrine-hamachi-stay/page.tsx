import { Metadata } from 'next';
import Link from 'next/link';
import { Star, MapPin, Calendar, Compass, ShieldCheck, Heart, Sparkles, ExternalLink, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '【讃岐の風待ち港町・引田の商家町と白鳥神社新春初詣】2026-2027年冬の香川・東かがわ！安戸池の冬オリーブハマチと瀬戸内温泉名宿5選',
  description: '日本初のハマチ養殖発祥・安戸池の冬オリーブハマチと、日本武尊白鳥伝説の白鳥神社新春初詣！風待ち港町・引田のレトロ商家町散策。瀬戸内海の潮騒と美肌温泉で心身を解きほぐす冬の東かがわ・さぬき厳選名宿5選。',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-kagawa-higashikagawa-hiketa-shirotori-shrine-hamachi-stay/',
  },
  openGraph: {
    title: '【讃岐の風待ち港町・引田の商家町と白鳥神社新春初詣】2026-2027年冬の香川・東かがわ！安戸池の冬オリーブハマチと瀬戸内温泉名宿5選',
    description: '日本初のハマチ養殖発祥・安戸池の冬オリーブハマチと、日本武尊白鳥伝説の白鳥神社新春初詣！風待ち港町・引田のレトロ商家町散策。瀬戸内海の潮騒と美肌温泉で心身を解きほぐす冬の東かがわ・さぬき厳選名宿5選。',
    url: 'https://croud-travel.pages.dev/winter-kagawa-higashikagawa-hiketa-shirotori-shrine-hamachi-stay/',
    siteName: '冬の日本厳選旅行ガイド',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/68660/68660.jpg',
        width: 1200,
        height: 630,
        alt: '【讃岐の風待ち港町・引田の商家町と白鳥神社新春初詣】2026-2027年冬の香川・東かがわ！安戸池の冬オリーブハマチと瀬戸内温泉名宿5選',
      },
    ],
    locale: 'ja_JP',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '【讃岐の風待ち港町・引田の商家町と白鳥神社新春初詣】2026-2027年冬の香川・東かがわ！安戸池の冬オリーブハマチと瀬戸内温泉名宿5選',
    description: '日本初のハマチ養殖発祥・安戸池の冬オリーブハマチと、日本武尊白鳥伝説の白鳥神社新春初詣！風待ち港町・引田のレトロ商家町散策。瀬戸内海の潮騒と美肌温泉で心身を解きほぐす冬の東かがわ・さぬき厳選名宿5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/68660/68660.jpg'],
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
      "headline": "【讃岐の風待ち港町・引田の商家町と白鳥神社新春初詣】2026-2027年冬の香川・東かがわ！安戸池の冬オリーブハマチと瀬戸内温泉名宿5選",
      "description": "日本初のハマチ養殖発祥・安戸池の冬オリーブハマチと、日本武尊白鳥伝説の白鳥神社新春初詣！風待ち港町・引田のレトロ商家町散策。瀬戸内海の潮騒と美肌温泉で心身を解きほぐす冬の東かがわ・さぬき厳選名宿5選。",
      "image": "https://img.travel.rakuten.co.jp/share/HOTEL/68660/68660.jpg",
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
            "name": "じゃこ丸パーク津田（国民宿舎松琴閣　クアパーク津田）",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/68660/68660.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "香川県",
              "streetAddress": "香川県 さぬき市津田町松原地内"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.05",
              "reviewCount": "455"
            },
            "priceRange": "¥5,700〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Hotel",
            "name": "あじ温泉　庵治観光ホテル　海のやどり",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/10981/10981.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "香川県",
              "streetAddress": "香川県 高松市庵治町5494"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "3.66",
              "reviewCount": "413"
            },
            "priceRange": "¥6,050〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Hotel",
            "name": "クラフトホテル瀬戸内",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/192093/192093.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "香川県",
              "streetAddress": "香川県 東かがわ市三本松1880"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.18",
              "reviewCount": "70"
            },
            "priceRange": "¥7,310〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Hotel",
            "name": "夕凪の湯　ＨＯＴＥＬ花樹海",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/41416/41416.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "香川県",
              "streetAddress": "香川県 高松市西宝町3-5-10"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.53",
              "reviewCount": "1056"
            },
            "priceRange": "¥13,750〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Hotel",
            "name": "高松国際ホテル",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/13730/13730.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "JP",
              "addressRegion": "香川県",
              "streetAddress": "香川県 高松市木太町4区2191-1"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.36",
              "reviewCount": "3304"
            },
            "priceRange": "¥4,100〜"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "白鳥神社の新春初詣の混雑状況と参拝のコツは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "元旦の未明（0:00〜2:30）および三が日の昼前後（10:30〜14:30）は讃岐・阿波両県からの参拝客で混み合います。落ち着いて参拝したい方は、早朝（朝8:00〜9:30）または夕方（15:30以降）のお参りがおすすめです。駐車場は境内周辺に整備されています。"
          }
        },
        {
          "@type": "Question",
          "name": "「オリーブハマチ」と通常のハマチはどう違うのですか？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "オリーブハマチは、香川県産オリーブの葉の粉末を添加した餌を一定期間与えて育てたブランド魚です。オリーブ葉に含まれる抗酸化成分（ポリフェノールやビタミンE）の働きにより、肉質の変色が抑えられ、脂のしつこさが抜けてさっぱりとした清涼感のある旨味と強いコシ（歯ごたえ）が楽しめます。11月〜1月の冬期が最も脂が乗って美味とされます。"
          }
        },
        {
          "@type": "Question",
          "name": "引田の町並み見学の所要時間と見どころは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "引田の古い町並み（風待ちの港町）の散策所要時間は約1〜2時間です。国登録有形文化財の商家「讃州井筒屋敷」や「かめびし屋」の赤壁、レトロな洋風建築「旧引田郵便局（風の館）」などが見どころ。カフェやショップも点在しており、冬の穏やかな海風を感じながらのんびり歩けます。"
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
              src="https://img.travel.rakuten.co.jp/share/HOTEL/68660/68660.jpg"
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
              <Link href="/prefectures/kagawa" className="text-cyan-200 hover:text-white transition-colors">
                香川県
              </Link>
              <ChevronRight className="w-3 h-3 text-cyan-400" />
              <span className="text-cyan-100">東かがわ・さぬき・高松東部</span>
            </div>

            <div className="inline-flex items-center gap-1.5 bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-xs px-3 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年冬（11月・12月・1月）完全ガイド</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-snug">
              【讃岐の風待ち港町・引田の商家町と白鳥神社新春初詣】2026-2027年冬の香川・東かがわ！安戸池の冬オリーブハマチと瀬戸内温泉名宿5選
            </h1>

            <p className="text-sm sm:text-base text-stone-200 leading-relaxed pt-2">
              日本初のハマチ養殖発祥・安戸池の冬オリーブハマチと、日本武尊白鳥伝説の白鳥神社新春初詣！風待ち港町・引田のレトロ商家町散策。瀬戸内海の潮騒と美肌温泉で心身を解きほぐす冬の東かがわ・さぬき厳選名宿5選。
            </p>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 mt-10 space-y-12">
          {/* イントロダクション */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-cyan-800 font-bold text-sm sm:text-base border-b border-stone-100 pb-2">
              <Compass className="w-5 h-5 text-cyan-700" />
              <h2>冬の東かがわ・さぬき・高松東部探訪：静寂と温もりに包まれる旅の魅力</h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              讃岐平野の東端、阿波の山並みと穏やかな瀬戸内海播磨灘に抱かれた東かがわ・さぬき市エリア。冬の訪れとともに澄み渡る瀬戸内の潮風が吹き抜け、歴史と自然が織りなす静謐な情景が広がります。東かがわ市松原に鎮座する「白鳥神社（しろとりじんじゃ）」は、戦陣の果てに逝去した日本武尊（やまとたけるのみこと）の御霊が純白の白鳥となってこの地に舞い降りたという古代の白鳥伝説を伝える名社。源義経が屋島の戦いの戦勝を祈願して弓を奉納したとも伝わり、古来より武将や庶民から厄除け・開運・必勝の神として崇められてきました。境内には日本一低い山として知られる「御山（標高3.6m）」があり、新春初詣には讃岐と阿波（徳島）の双方から大勢の参拝客が訪れ、一年の幸運を祈ります。神社から車で東へ約10分、古い港町「引田（ひけた）」は、かつて潮待ち・風待ちの港として、また讃岐三白（砂糖・塩・木綿）や醤油醸造で繁栄を極めた風情あふれる町並みが残る歴史の里。赤瓦と白壁の豪壮な商家「かめびし屋」や「旧引田郵便局」が並ぶ細い路地は、冬の静けさの中で旅情をかきたてます。さらに引田の「安戸池（あどいけ）」は、昭和3年に世界で初めてハマチの海面養殖に成功した歴史的な聖地。11月から1月にかけて水揚げされる「オリーブハマチ」や寒ハマチは、香川県特産のオリーブ葉粉末を食べて育ち、酸化しにくくさっぱりとした極上の脂と引き締まった身質が特徴で、冬の刺身やしゃぶしゃぶで口福の絶頂へと誘います。名勝「津田の松原」の白砂青松の海岸線を望む展望温泉露天風呂に浸かり、冬の讃岐うどん（熱々のしっぽくうどん）とオリーブ牛・寒ハマチに心満たされる、温もりあふれる冬の東讃岐旅をご案内します。
            </p>
          </section>

          {/* 訪れるべき3つの理由 */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-800" />
              <span>この冬、東かがわ・さぬき・高松東部を訪れるべき3つの理由</span>
            </h2>
            <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                1
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                日本武尊の白鳥伝説息づく古社！「白鳥神社」新春開運厄除け初詣と日本一低い山
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              白鳥となって天翔けた日本武尊を祀る白鳥神社。源義経の武運祈願や高松藩主・松平頼重公の崇敬を受けた由緒ある神域で、新春の清涼な空気の中で厄除けや招福を祈願できます。境内にある標高わずか3.6mの「御山（みやま）」で登山証明書をいただくのも旅の楽しい記念になります。
            </p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                2
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                風待ち港の歴史情緒漂う重厚な町並み「引田」冬のそぞろ歩きと醤油蔵の香り
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              江戸〜明治期に藍商人や醤油醸造家が競い合って建てた豪壮な商家が連なる引田の町並み。日本で唯一のむしろ麹製法を守る「かめびし屋」の赤壁や石畳が冬の穏やかな陽光に映えます。歴史ある「讃州井筒屋敷」では伝統文化体験や郷土の冬茶席が楽しめます。
            </p>
          </div>
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-cyan-100 text-cyan-800 text-xs font-bold flex items-center justify-center">
                3
              </span>
              <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                世界初のハマチ養殖発祥・安戸池！旬の「冬オリーブハマチ」と津田の松原絶景温泉
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
              安戸池で育てられる香川の冬の誇り「オリーブハマチ」。オリーブ葉の抗酸化作用で脂がしつこくなく、さっぱりとした旨味と歯ごたえが際立ちます。津田の松原の海岸沿いに湧く温泉露天風呂からは、冬晴れの瀬戸内海の島々を一望でき、心身の凝りが優しく解きほぐされます。
            </p>
          </div>
            </div>
          </section>

          {/* 近隣名所アーカイブ（Wikipedia公式連携） */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/80 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h2 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <MapPin className="w-5 h-5 text-cyan-800" />
                <span>近隣名所アーカイブ：讃岐国・白鳥神社（日本武尊白鳥伝説と新春開運厄除け初詣）</span>
              </h2>
              <span className="text-[11px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                Wikipedia公式連携
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
              <div className="md:col-span-5 relative h-48 sm:h-56 rounded-xl overflow-hidden bg-stone-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/73/Shirotori_shrine_Kagawa.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled"
                  alt="讃岐国・白鳥神社（日本武尊白鳥伝説と新春開運厄除け初詣）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  【讃岐国・白鳥神社（日本武尊白鳥伝説と新春開運厄除け初詣）の見どころと歴史】
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  白鳥神社（しろとりじんじゃ）は、香川県東かがわ市に鎮座する神社である。旧社格は県社。
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
                  東かがわ・さぬき・高松東部 厳選の温泉＆名宿5選
                </h2>
              </div>
              <p className="text-xs text-stone-500">
                ※楽天トラベルAPI最新空室・料金データ連携中
              </p>
            </div>

            <div className="space-y-6">
            {/* 宿1: じゃこ丸パーク津田（国民宿舎松琴閣　クアパーク津田） */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 1
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.05</span>
                    <span className="text-stone-400 text-xs font-normal">（455件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    じゃこ丸パーク津田（国民宿舎松琴閣　クアパーク津田）
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    日本の渚百選・津田の松原の海岸に佇む名湯クアリゾート・瀬戸内海一望の天然温泉
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/68660/68660.jpg"
                      alt="じゃこ丸パーク津田（国民宿舎松琴閣　クアパーク津田）"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      日本の渚百選に選ばれる「津田の松原」県立琴林公園の海辺に位置する癒やしの公共の宿。白砂青松の美しい海岸林と穏やかな瀬戸内海が目の前に広がり、客室や温泉大浴場から朝夕の絶景を満喫できます。温泉施設は打たせ湯や気泡湯、サウナなどを備えた本格クアハウス。冬の夕食には、脂の乗ったオリーブハマチの刺身や郷土の味わいを取り入れた会席コースが並び、心温まる寛ぎの時間を過ごせます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>名勝「津田の松原」に直結！白砂青松の海岸線を目の前に臨む絶景オーシャンビュー</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>多彩な浴槽が揃う天然温泉クアハウス大浴場と海風香る露天風呂で心身を癒やす</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>讃岐のオリーブハマチやオリーブ牛・瀬戸内海の旬魚介をふんだんに味わう和会席</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「素晴らしい景観と美味しい朝食に大満足本当は息子家族と来る予定でしたが体調不良もありわたしたちだけの宿泊になりました。朝食付きですが、てんこ盛りの釜揚げしらすとご飯、美味しいうどん、食べきれず残して… 2026-09-24 09:06:29投稿 つづきはこちら」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 5,700円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68660%2F68660.html"
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

            {/* 宿2: あじ温泉　庵治観光ホテル　海のやどり */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 2
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>3.66</span>
                    <span className="text-stone-400 text-xs font-normal">（413件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    あじ温泉　庵治観光ホテル　海のやどり
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    映画ロケ地・庵治半島の先端に佇む絶景温泉旅館・波打ち際の展望露天と極上海鮮
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/10981/10981.jpg"
                      alt="あじ温泉　庵治観光ホテル　海のやどり"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      映画『世界の中心で、愛をさけぶ』の舞台となった庵治半島の突端に建つ海辺の温泉宿。眼前に遮るもののない瀬戸内海の大パノラマが広がり、行き交う船や島々を眺めながら静かな時間を過ごせます。温泉は肌に優しい弱アルカリ性の自家源泉で、冬の澄んだ夜空の星を仰ぐ展望露天風呂は格別の風情。東かがわの白鳥神社や引田へのドライブ旅の拠点として贅沢な滞在が叶います。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>瀬戸内海に突き出た庵治半島の最北端！全室から多島美の海原を見渡すパノラマ絶景</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>自家源泉の天然温泉「海のやどり」海と一体になる展望露天風呂で極上の湯浴み</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>冬の瀬戸内海の旬魚介・オリーブハマチやアワビ・讃岐オリーブ牛を贅沢に味わう懐石</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「期待外れの食事と清掃不備にがっかり「【竹】* 満腹牛肉と鮮魚の“いいとこ取り”会席 2食付当館イチオシ!人気もナンバーワン」 とのことで とても期待したが 刺身や煮物は普通で、牛肉は、単4電池… 2026-10-03 14:45:09投稿 つづきはこちら」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 6,050円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10981%2F10981.html"
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

            {/* 宿3: クラフトホテル瀬戸内 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 3
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.18</span>
                    <span className="text-stone-400 text-xs font-normal">（70件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    クラフトホテル瀬戸内
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    東かがわ・引田の歴史とクラフトマンシップが融合した洗練のリノベーションホテル
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/192093/192093.jpg"
                      alt="クラフトホテル瀬戸内"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      日本一の手袋の街・東かがわ市の職人技とものづくり精神をテーマにした洗練のブティックホテル。温もりのある木やファブリックを活かしたスタイリッシュな空間は、機能的でありながら旅の疲れを優しく解きほぐします。白鳥神社や引田の町並み、安戸池へ車で数分の距離に位置し、東讃岐の歴史探訪や冬のオリーブハマチ巡りの拠点として高い人気を集めています。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>東かがわの手袋産業や伝統工芸の美意識を空間に取り入れたデザイナーズホテル</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>広々としたモダンな客室でプライベート感あふれる快適な宿泊体験</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地元食材にこだわった朝食や引田の古い商家町・安戸池へのアクセス抜群の好立地</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「モチモチのベーグルが美味しく部屋も清潔朝のベーグルはモチモチで美味しかったです。ベーコンはついてたのですが、ジャムやバターなどあるとよりよいと思いました。部屋は清潔感あって過ごしやすかったですし、… 2026-09-23 12:50:03投稿 つづきはこちら」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 7,310円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F192093%2F192093.html"
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

            {/* 宿4: 夕凪の湯　ＨＯＴＥＬ花樹海 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 4
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.53</span>
                    <span className="text-stone-400 text-xs font-normal">（1056件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    夕凪の湯　ＨＯＴＥＬ花樹海
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    高松市街と瀬戸内海の夜景を一望する丘の上の名旅館・展望露天「夕凪の湯」と讃岐会席
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/41416/41416.jpg"
                      alt="夕凪の湯　ＨＯＴＥＬ花樹海"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      高松の市街地と瀬戸内海を見晴らす高台に位置し、緑豊かな木々に包まれた都市型温泉リゾート。最上階の展望パノラマ露天風呂からは、昼は多島美の海を、夜は宝石箱のように煌めく高松の街の灯りを眺めながら名湯に浸かれます。料理は讃岐の旬の食材を知り尽くした料理長が腕を振るう季節の本格会席。東かがわへの日帰りドライブと高松の夜景を贅沢に両立できる名宿です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>標高約80mの峰山緑地に佇み、高松市街と屋島・瀬戸内海を一望する圧巻の夜景</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>PH値の高い美肌効果抜群の天然温泉「夕凪の湯」展望露天風呂で心身を解き放つ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>讃岐三畜（オリーブ牛・オリーブ豚・讃岐コーチン）や冬魚介を極める匠の和会席</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「ゆっくり過ごすことができましたご飯がとても美味しかったです。夕ご飯は1つずつお料理の説明をして下さり、スタッフの方の対応も丁寧でゆっくり楽しむことができました。ただ、ホテルに着いた際、車を停め… 2026-09-27 12:42:35投稿 つづきはこちら」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 13,750円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41416%2F41416.html"
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

            {/* 宿5: 高松国際ホテル */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 5
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.36</span>
                    <span className="text-stone-400 text-xs font-normal">（3304件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    高松国際ホテル
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    半世紀以上の伝統を誇る格式あるシティホテル・名門レストランの美食ディナー
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/13730/13730.jpg"
                      alt="高松国際ホテル"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      高松の東部に位置し、東かがわや引田へのドライブアクセスが極めてスムーズな格式あるシティホテル。広々としたロビーや手入れの行き届いた日本庭園が格式を感じさせ、ビジネスから観光まで幅広い旅行者に愛されています。館内のレストランでは、冬の讃岐の海の幸やブランド牛を使った特別ディナーを提供。安心感のあるサービスと快適な客室空間が心地よい旅を支えてくれます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>東かがわ・さぬき市方面への国道11号線沿いでアクセス抜群の大型名門ホテル</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全室ゆったりとした広さを誇り、上質なベッドと充実のアメニティで快眠を約束</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>香川の旬食材を厳選した日本料理やグリル料理が評判の本格レストラン</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「広くて綺麗な部屋、段差がなく快適な空間部屋が広くて綺麗でした。繁華街からは離れていたのかもしれませんが、車の乗り入れが簡単で良かったです。部屋の段差が無くて、使い心地も良かったです。ク… 2026-10-02 14:45:59投稿 つづきはこちら」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 4,100円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13730%2F13730.html"
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
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・電車・特急：JR高松駅よりJR高徳線（特急うずしお）で讃岐白鳥駅まで約35分、引田駅まで約40分。白鳥神社へは讃岐白鳥駅より徒歩約5分。津田の松原へは讃岐津田駅より徒歩約10分。徳島駅からも特急うずしおで引田駅まで約30分とアクセス良好。</p>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・車・マイカー：高松自動車道「白鳥大内IC」または「引田IC」より白鳥神社・引田市街まで約5〜8分。高松空港から車で約50分、神戸淡路鳴門自動車道・鳴門ICから引田ICまで約30分。</p>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・高速バス：大阪・神戸〜高松・徳島を結ぶ高速バスで「高速大内」または「高速引田」バス停下車、タクシーで各所へ約5分。</p>
            <h3 className="font-bold text-stone-800 text-sm sm:text-base pt-2">【見頃・気候・おすすめの服装】</h3>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・ベストシーズン：11月下旬〜1月下旬（オリーブハマチ・寒ハマチの旬、白鳥神社新春初詣、冬晴れの瀬戸内海風景）。</p>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・気温の目安：瀬戸内海気候のため降水量が少なく晴天率が高い地域ですが、海沿いでは冬の季節風が冷たく吹き抜けます。日中の最高気温は9〜12℃前後、朝晩は1〜4℃前後まで冷え込みます。</p>
            <p className="text-xs sm:text-sm text-stone-600 pl-2 leading-relaxed">・服装のポイント：防風性のあるコートやダウンジャケット、マフラーをご準備ください。引田の商家町散策や白鳥神社境内の参拝には、歩きやすいフラットなスニーカーが適しています。</p>
            </div>
          </section>

          {/* よくある質問 FAQ */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900">
              冬の東かがわ・さぬき・高松東部旅行 よくある質問（FAQ）
            </h2>
            <div className="space-y-3">
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
              <span className="text-cyan-800 font-extrabold">Q.</span>
              <span>白鳥神社の新春初詣の混雑状況と参拝のコツは？</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
              元旦の未明（0:00〜2:30）および三が日の昼前後（10:30〜14:30）は讃岐・阿波両県からの参拝客で混み合います。落ち着いて参拝したい方は、早朝（朝8:00〜9:30）または夕方（15:30以降）のお参りがおすすめです。駐車場は境内周辺に整備されています。
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
              <span className="text-cyan-800 font-extrabold">Q.</span>
              <span>「オリーブハマチ」と通常のハマチはどう違うのですか？</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
              オリーブハマチは、香川県産オリーブの葉の粉末を添加した餌を一定期間与えて育てたブランド魚です。オリーブ葉に含まれる抗酸化成分（ポリフェノールやビタミンE）の働きにより、肉質の変色が抑えられ、脂のしつこさが抜けてさっぱりとした清涼感のある旨味と強いコシ（歯ごたえ）が楽しめます。11月〜1月の冬期が最も脂が乗って美味とされます。
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-stone-200/80 shadow-sm space-y-2">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
              <span className="text-cyan-800 font-extrabold">Q.</span>
              <span>引田の町並み見学の所要時間と見どころは？</span>
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
              引田の古い町並み（風待ちの港町）の散策所要時間は約1〜2時間です。国登録有形文化財の商家「讃州井筒屋敷」や「かめびし屋」の赤壁、レトロな洋風建築「旧引田郵便局（風の館）」などが見どころ。カフェやショップも点在しており、冬の穏やかな海風を感じながらのんびり歩けます。
            </p>
          </div>
            </div>
          </section>

          {/* 内部リンク */}
          <section className="bg-stone-100/70 rounded-2xl p-6 border border-stone-200 space-y-3 text-xs sm:text-sm">
            <h3 className="font-bold text-stone-800">あわせて読みたい関連特集</h3>
            <ul className="space-y-1.5 text-cyan-800">
              <li>
                <Link href="/prefectures/kagawa" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>香川県のおすすめ観光名所＆温泉宿一覧</span>
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>全国の季節・目的別旅行特集一覧</span>
                </Link>
              </li>
              <li>
                <Link href="/winter-kagawa-kotohira-konpira-shrine-hatsumode-zentsuji-olivegyu-stay" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>【香川】金刀比羅宮新春初詣と讃岐うどん・オリーブ牛名宿5選</span>
                </Link>
              </li>
              <li>
                <Link href="/winter-tokushima-city-oasashiko-shrine-hatsumode-awaodori-awagyu-stay" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>【徳島】大麻比古神社新春初詣と阿波尾鶏・阿波牛名宿5選</span>
                </Link>
              </li>
              <li>
                <Link href="/kagawa-kotohira-konpira-shrine-sanuki-udon-stay" className="hover:underline flex items-center gap-1">
                  <span>→</span>
                  <span>【香川】こんぴらさん参拝と讃岐うどん巡りおすすめ宿</span>
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
