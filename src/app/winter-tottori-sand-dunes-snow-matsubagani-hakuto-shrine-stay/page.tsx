import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Sparkles, 
  MapPin, 
  Star, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Compass, 
  Camera, 
  ChevronRight, 
  Heart, 
  Thermometer, 
  Snowflake,
  Wind,
  UtensilsCrossed,
  ShieldAlert,
  Info
} from 'lucide-react';

export const metadata: Metadata = {
  title: '冬の鳥取砂丘＆白兎神社初詣：本場松葉ガニ！名宿5選',
  description: '冬の日本海からの寒風が織りなす奇跡の絶景「雪の鳥取砂丘」と神秘の風紋。日本神話『因幡の白兎』ゆかりの「白兎神社」新春縁結び初詣。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '鳥取砂丘, 雪砂丘, 風紋, 白兎神社, 初詣, 松葉ガニ, 鳥取温泉, 観水庭こぜにや, ホテルモナーク鳥取, ホテルニューオータニ鳥取, 冬の山陰旅行, 因幡の白兎',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-tottori-sand-dunes-snow-matsubagani-hakuto-shrine-stay',
  },
  openGraph: {
    title: '冬の鳥取砂丘＆白兎神社初詣：本場松葉ガニ！名宿5選',
    description: '冬の日本海からの寒風が織りなす奇跡の絶景「雪の鳥取砂丘」と神秘の風紋。日本神話『因幡の白兎』ゆかりの「白兎神社」新春縁結び初詣。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-tottori-sand-dunes-snow-matsubagani-hakuto-shrine-stay',
    siteName: 'トラベルマップ - 日本の観光名所＆ホテル厳選ガイド',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/14072/14072.jpg',
        width: 1200,
        height: 630,
        alt: '冬の雪の鳥取砂丘と白兎神社初詣・松葉ガニ特集',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '冬の鳥取砂丘＆白兎神社初詣：雪砂丘と神秘の風紋！因幡の白兎縁結び＆本場松葉ガニ・鳥取温泉を味わい尽くす厳選宿5選',
    description: '冬の日本海からの寒風が織りなす奇跡の絶景「雪の鳥取砂丘」と神秘の風紋。日本神話『因幡の白兎』ゆかりの「白兎神社」新春縁結び初詣、冬の味覚の王様・11月解禁の本場「松葉ガニ」フルコースと鳥取和牛。開湯120年の鳥取温泉自家源泉掛け流し宿など、冬の山陰を満喫する厳選ホテル5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/14072/14072.jpg'],
  },
};

export default function TottoriSandDunesPage() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '冬の鳥取砂丘＆白兎神社初詣：雪砂丘と神秘の風紋！因幡の白兎縁結び＆本場松葉ガニ・鳥取温泉を味わい尽くす厳選宿5選',
    description: '冬の日本海からの寒風が織りなす奇跡の絶景「雪の鳥取砂丘」と神秘の風紋。日本神話『因幡の白兎』ゆかりの「白兎神社」新春縁結び初詣、冬の味覚の王様・11月解禁の本場「松葉ガニ」フルコースと鳥取和牛。開湯120年の鳥取温泉自家源泉掛け流し宿など、冬の山陰を満喫する厳選ホテル5選。',
    image: 'https://img.travel.rakuten.co.jp/share/HOTEL/14072/14072.jpg',
    datePublished: 'T00:00:00+09:00',
    dateModified: 'T00:00:00+09:00',
    author: {
      '@type': 'Organization',
      name: 'トラベルマップ編集部',
      url: 'https://croud-travel.pages.dev',
    },
    publisher: {
      '@type': 'Organization',
      name: 'トラベルマップ',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.pages.dev/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.pages.dev/winter-tottori-sand-dunes-snow-matsubagani-hakuto-shrine-stay',
    },
  };

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.pages.dev',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '特集一覧',
        item: 'https://croud-travel.pages.dev/features',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '冬の鳥取砂丘＆松葉ガニ特集',
        item: 'https://croud-travel.pages.dev/winter-tottori-sand-dunes-snow-matsubagani-hakuto-shrine-stay',
      },
    ],
  };

  const faqItems = [
    {
      q: '冬の鳥取砂丘で「雪砂丘」や美しい「風紋」が見られるタイミングは？',
      a: '強い冬型の気圧配置が決まり寒波が訪れる12月下旬から2月中旬にかけて、砂丘一面が真っ白な雪で覆われる「雪砂丘」が出現します。特に降雪直後の晴れ間の早朝は、足跡が一切ない白銀の砂丘が広がる奇跡の絶景。また、日本海からの強い季節風（秒速5〜6m以上）が吹いた後は、砂の上に美しい幾何学模様の「風紋」がくっきりと刻まれます。'
    },
    {
      q: '冬の鳥取砂丘を歩く際の靴・足元や服装の注意点は？',
      a: '冬の砂丘は湿った雪や冷たい砂で足元が非常に冷え込みます。スニーカーでは砂や雪が入り込んで靴下が濡れてしまうため、ハイカットの防水トレッキングシューズや長靴（砂丘会館等でレンタル可能）が必須です。また日本海からの強烈な北風が吹き付けるため、防風・防水のフード付きダウンジャケット、手袋、ネックウォーマーを必ず着用してください。'
    },
    {
      q: '白兎神社（はくとじんじゃ）のご利益と初詣の授与品は？',
      a: '古事記に登場する日本神話『因幡の白兎』で知られる白兎神を祀り、大国主命と八上姫の婚姻を取り持ったことから「特定の人との縁結び・復縁」「皮膚病・火傷平癒」の強力なご利益で全国的に有名です。社務所で授与される白い「結び石」を、鳥居の上に乗せたり境内のうさぎの石像に奉納して願いをかける神事が大人気です。'
    },
    {
      q: '本場の松葉ガニの解禁時期と最も美味しい食べ方は？',
      a: '山陰地方で水揚げされるズワイガニの雄「松葉ガニ」の漁期は、例年「11月6日から翌年3月20日まで」です。最も身が詰まり濃厚な旨味を楽しめるのは12月から2月の厳冬期。職人が絶妙な塩加減で茹で上げた「茹で松葉ガニ」、甘みが口いっぱいに広がる「カニ刺し」、香ばしい煙とともに味わう「焼きガニ」、そしてカニ味噌を溶いて呑む「甲羅酒」が至極の味わいです。'
    }
  ];

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* パンくずリスト */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 text-xs sm:text-sm text-slate-600 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-blue-600 transition-colors">ホーム</Link>
          <span className="text-slate-400">/</span>
          <Link href="/features" className="hover:text-blue-600 transition-colors">特集一覧</Link>
          <span className="text-slate-400">/</span>
          <span className="text-slate-900 font-medium">冬の鳥取砂丘＆松葉ガニ特集</span>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-b from-slate-950 via-amber-950 to-slate-900 text-white py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-200 text-xs sm:text-sm font-semibold mb-6">
            <Snowflake className="w-4 h-4 text-amber-300" />
            <span>11月・12月・1月 山陰の白銀雪砂丘＆松葉ガニ解禁特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight sm:leading-tight mb-6">「冬の鳥取砂丘＆白兎神社初詣」<br className="hidden sm:inline" /> 白銀の雪砂丘と神秘の風紋！因幡の白兎伝説の縁結び祈願と<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-200 to-rose-200"> 冬の味覚の王様「本場松葉ガニ・鳥取温泉」名宿5選 </span></h1>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
            日本海の荒波と寒風が創り出す冬の奇跡「白銀の雪砂丘」。どこまでも続く純白の世界に刻まれる神秘の風紋と、鉛色の海が織りなすドラマチックな絶景。古事記の神話『因幡の白兎』が息づく白兎神社での良縁結び・新春初詣。11月上旬に解禁されたばかりの本場「松葉ガニ」の贅沢なフルコース会席と、開湯120年の鳥取温泉で心ほどける極上の冬旅へ。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 松葉ガニ漁期: 11月6日〜3月20日</span>
            <span className="flex items-center gap-1.5"><Wind className="w-4 h-4 text-sky-400" /> 砂丘気候: 0℃〜5℃（海風が強烈・防風防寒必須）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> エリア: 鳥取県鳥取市（山陰海岸国立公園）</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* リード文・見どころ詳細解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2.5 border-b border-slate-100 pb-4">
            <Wind className="w-6 h-6 text-amber-600" />
            風と雪が描く砂の造形美：冬の鳥取砂丘と神話の恋物語「白兎神社」
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              東西16キロメートル、南北2.4キロメートルにわたって広がる日本最大級の海岸砂丘「鳥取砂丘」。夏や秋の黄金色の砂の世界とは一変し、冬に日本海からの寒波が流れ込むと、砂丘全体が一面真っ白な銀世界へと覆われます。黄金の砂と純白の雪がモザイク状に入り交じり、吹きつける強風によって雪の表面に繊細な陰影が刻まれる「雪砂丘」の光景は、世界的にも極めて稀な自然のアートピースです。
            </p>
            <p>
              特に「馬の背」と呼ばれる高さ47メートルの巨大な砂丘列の頂上に立つと、足元に広がる白銀の稜線と、眼前に広がる冬の日本海の荒波が織りなす圧倒的なコントラストに言葉を失います。風速5メートルを超える季節風が吹いた翌朝には、乾いた砂の上にまるでさざ波のような幾何学模様を描き出す「風紋（ふうもん）」が広がり、朝日に照らされて浮かび上がる陰影は息を呑む美しさです。
            </p>
            <p>
              砂丘から海岸沿いに西へ車を走らせると、白波打ち寄せる白兎海岸の丘の上に鎮座する「白兎神社（はくとじんじゃ）」に到着します。日本神話『因幡の白兎』で知られ、大国主命に助けられた白兎が八上姫との婚姻を予言したという物語から、日本最古のラブストーリーの舞台・最強の縁結びパワースポットとして全国から参拝客を集めます。新春には「結び石」と呼ばれる白い小石を鳥居の上や境内のウサギの像に奉納し、良縁や健康、家内安全を祈願する人々の温かい祈りに包まれます。
            </p>
            <p>
              そして、冬の鳥取旅の真骨頂といえば、11月上旬に解禁される山陰の味覚の王者「松葉ガニ（ズワイガニ）」です。冷たい日本海の深海で育った松葉ガニは、引き締まった身の甘みと、濃厚でコクのあるカニ味噌が別格。香ばしい焼きガニ、プリプリのカニ刺し、熱々のカニすき鍋、そしてカニ味噌に地酒を注いで温める甲羅酒は、旅の記憶に一生刻まれる極上の口福です。さらに市街地中心部に湧き出る開湯120年の「鳥取温泉」に浸かれば、冬の寒さも心地よい温もりへと昇華されます。山陰の冬旅では、世界屈指のラドン含有量を誇る名湯<Link href="/winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay" className="text-amber-600 hover:underline font-bold">三朝温泉の松葉ガニ宿</Link>や、海沿いの美肌湯<Link href="/winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay" className="text-amber-600 hover:underline font-bold">皆生温泉と大山雪景色</Link>、さらには新春の神話の都<Link href="/winter-shimane-izumo-taisha-kamiarizuki-shimane-wagyu-stay" className="text-amber-600 hover:underline font-bold">出雲大社としまね和牛</Link>、砂像アートが輝く<Link href="/furusato-tax-tottori-dune-sand-museum-stay" className="text-amber-600 hover:underline font-bold">鳥取砂丘と砂の美術館</Link>など、冬の日本海ならではの美食と温泉を満喫する周遊コースも大人気です。
            </p>
          </div>

          {/* 現地攻略インフォボックス */}
          <div className="mt-8 bg-amber-50/70 border border-amber-100 rounded-xl p-5 sm:p-6">
            <h3 className="text-base font-bold text-amber-950 mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-600" />
              冬の鳥取砂丘＆松葉ガニ満喫：覚えておきたい3つの黄金ルール
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-amber-900">
              <div className="bg-white p-3.5 rounded-lg border border-amber-100">
                <span className="font-bold text-amber-700 block mb-1">1. 足元は長靴レンタルを活用</span>
                <p>雪や湿った砂の上を歩くためスニーカーは浸水します。砂丘会館等で長靴（レンタル約300円）を借りるか、防水性の高いブーツを準備しましょう。</p>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-amber-100">
                <span className="font-bold text-amber-700 block mb-1">2. 松葉ガニプランは早め予約が必須</span>
                <p>12月〜1月の年末年始・週末は松葉ガニ漁の仕入れ状況により予約が早期満室となります。カニフルコース付きの宿泊プランは早めの確保が鉄則です。</p>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-amber-100">
                <span className="font-bold text-amber-700 block mb-1">3. 山陰道の冬用タイヤ規制に注意</span>
                <p>鳥取自動車道や山陰道は冬期にチェーン規制や冬用タイヤ規制が敷かれます。車で訪れる場合は必ずスタッドレスタイヤを装着しましょう。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 厳選ホテルセクション */}
        <section className="mb-14">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-extrabold text-amber-600 tracking-wider uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-100">
              Selected 5 Tottori Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              鳥取砂丘・白兎神社と本場松葉ガニを満喫する厳選ホテル・老舗温泉宿5選
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto">
              市街地唯一の自家源泉掛け流し老舗旅館から、ヨーロッパ調の瀟洒な温泉ホテル、駅前の一流シティホテルまで、冬の山陰美食ステイを彩る名宿をご紹介します。
            </p>
          </div>

          <div className="space-y-8">
            
            {/* ホテルカード 1 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    市街地唯一の自家源泉・池泉庭園の老舗湯宿
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.8</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 1,484件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14072%2F14072.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 transition-colors"
                  >
                    鳥取温泉　観水庭こぜにや
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>鳥取県鳥取市永楽温泉町651（鳥取駅より徒歩10分・無料送迎バス有 / 中国道佐用JCT経由鳥取ＩＣより車８分　鳥取砂丘へ車２０分　コンビニ徒歩2分）</span>
                </p>

                <div className="flex flex-col gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/14072/14072.jpg" 
                        alt="鳥取温泉　観水庭こぜにや 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>敷地内から自噴する極上の自家源泉を100%掛け流しで堪能する露天風呂</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>錦鯉が優雅に泳ぐ池泉回遊式日本庭園と数寄屋造りの情緒あふれる佇まい</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>冬の味覚の頂点「活松葉ガニ会席」と鳥取和牛を味わい尽くす贅沢プラン</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥7,000〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  鳥取駅から徒歩10分という中心街にありながら、一歩門をくぐると閑静な日本庭園と池の錦鯉が出迎える老舗温泉旅館。宿の命である自家源泉は敷地内の地下から湧出し、加水・加温一切なしの純度100%源泉掛け流し。ナトリウム-硫酸塩・塩化物泉のやわらかな湯は、冬の冷えた身体に染み渡る極上の温もりです。冬期には水揚げされたばかりの活松葉ガニを丸ごと使ったフルコース会席が登場。繊細な甘みのカニ刺し、炭火で香ばしく焼き上げる焼きガニ、濃厚な甲羅味噌酒など、冬の山陰グルメの極致を味わえます。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14072%2F14072.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 2 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    瀟洒なヨーロッパ調・自家源泉天然温泉ホテル
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.2</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 2,259件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F591%2F591.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 transition-colors"
                  >
                    鳥取温泉　ホテルモナーク鳥取
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>鳥取県鳥取市永楽温泉町403（ＪＲ鳥取駅北口出口より徒歩5分 / 鳥取自動車道鳥取ICより車で10分 / コンビニへ徒歩1分 / 鳥取砂丘へ車で20分）</span>
                </p>

                <div className="flex flex-col gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/591/591.jpg" 
                        alt="鳥取温泉　ホテルモナーク鳥取 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>白を基調とした優美なヨーロッパ調建築と吹き抜けのアトリウムロビー</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>自家源泉から湧き出る天然温泉大浴場＆サウナで寛ぎのひととき</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>山陰の旬魚や鳥取県産食材をふんだんに取り入れた和洋ディナーコース</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥6,800〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  鳥取駅前の温泉街に佇み、クラシカルなヨーロッパ調の気品ある佇まいが目を引くホテル。ビジネスや観光の拠点として抜群の利便性を持ちながら、館内には自家源泉を引いた広々とした天然温泉大浴場とサウナが完備されています。無色透明でさらりとした温泉は保温効果が高く、雪の砂丘散策で冷え切った身体を芯から癒やしてくれます。夕食には日本海で獲れた旬の白身魚や紅ズワイガニ、鳥取県産和牛のステーキなど、山陰の豊かな恵みを贅沢に盛り込んだ料理が楽しめます。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F591%2F591.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 3 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    JR鳥取駅前・老舗シティホテルの安心感と美食
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">3.9</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 1,282件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5623%2F5623.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 transition-colors"
                  >
                    ホテルニューオータニ鳥取
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>鳥取県鳥取市今町2-153（JR/ＪＲ鳥取駅から徒歩３分。 車/鳥取ＩＣより車で７分。）</span>
                </p>

                <div className="flex flex-col gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/5623/5623.jpg" 
                        alt="ホテルニューオータニ鳥取 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>JR鳥取駅北口から徒歩2分！雪の日でも移動がスムーズな抜群の立地</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>ニューオータニならではの洗練されたホスピタリティと快適な客室環境</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>日本料理・中国料理・グリルレストランで味わう松葉ガニと山陰美味</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥5,050〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  JR鳥取駅の北口正面に位置し、観光にもビジネスにも圧倒的なアクセス利便性を誇る伝統のシティホテル。格式ある落ち着いた客室からは鳥取市街を見渡すことができ、細やかなサービスで快適な冬の滞在を約束してくれます。館内レストランでは冬限定の「松葉ガニ会席」をはじめ、伝統の中国料理やグリル料理など、一流シェフが腕を振るう山陰の美食が揃い踏み。駅前バスターミナルからも近く、雪の鳥取砂丘や白兎神社行きの路線バス利用にも最高の拠点です。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5623%2F5623.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 4 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    天然温泉大浴場完備・地産地消の心温まるもてなし
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.3</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 747件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18911%2F18911.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 transition-colors"
                  >
                    鳥取温泉　白兎会館
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>鳥取県鳥取市末広温泉町556（ＪＲ鳥取駅よりバス５分→生協病院前　徒歩2分 JR鳥取駅より徒歩15分）</span>
                </p>

                <div className="flex flex-col gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/18911/18911.jpg" 
                        alt="鳥取温泉　白兎会館 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>鳥取温泉の源泉を引く広々とした天然温泉大浴場でゆったり湯治気分</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>日本神話・因幡の白兎にちなんだ心温まるおもてなしと落ち着いた和室</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>鳥取港直送の新鮮な海の幸と鳥取和牛をリーズナブルに味わえる夕食会席</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥4,100〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  鳥取市街地の中心、末広温泉町に位置し、因幡の白兎伝説にちなんで名付けられた親しみやすい公営宿舎。手頃な宿泊料金ながら、館内には鳥取温泉の豊かな天然温泉をたたえる大浴場が完備されており、地元の人々にも愛される名湯を心ゆくまで満喫できます。夕食には冬の日本海を代表するズワイガニ料理や、鳥取名物のとうふちくわ、大山山麓の食材を使った家庭的で味わい深い会席料理が並び、心温まる冬の家族旅行や一人旅にぴったりです。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18911%2F18911.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    

            {/* ホテルカード 5 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    鳥取駅徒歩3分・人工温泉＆機能美デザイナーズ
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.2</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 906件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176748%2F176748.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-amber-600 transition-colors"
                  >
                    グリーンリッチホテル鳥取駅前　人工温泉・二股湯の華
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>鳥取県鳥取市永楽温泉町102-6（ＪＲ鳥取駅北口より徒歩にて約３分、鳥取自動車道 鳥取ＩＣより国道53号線を鳥取市方面へ車で14分）</span>
                </p>

                <div className="flex flex-col gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/176748/176748.jpg" 
                        alt="グリーンリッチホテル鳥取駅前　人工温泉・二股湯の華 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-amber-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>JR鳥取駅北口徒歩3分の好立地！飲食店街や鳥取温泉街も徒歩圏内</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>北海道長万部二股温泉の鉱石を使用した「二股炭酸カルシウム人工温泉」大浴場</span></li>
                        <li className="flex items-start gap-2"><span className="text-amber-500 font-bold">•</span><span>スタイリッシュで機能的なデザイナーズ客室と快適な寝心地のオリジナルベッド</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥5,200〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-amber-50/40 p-4 rounded-xl border border-amber-100/60">
                  JR鳥取駅北口から徒歩わずか3分、スタイリッシュな外観と機能的な客室が人気のホテル。男女別の炭酸カルシウム人工温泉大浴場が備わっており、肌触りの良いお湯が旅の疲れを心地よく解きほぐしてくれます。周辺には鳥取の旬の海鮮や名物ホルモンそばを味わえる地元居酒屋が多数点在し、鳥取の夜をアクティブに楽しみたい方に最適。最新の設備と清潔感あふれる空間で、冬の観光旅行をスマートにサポートします。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176748%2F176748.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
                  >
                    <span>楽天トラベルで空室・宿泊プランを見る</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
    
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
            <Compass className="w-6 h-6 text-amber-600" />
            【1泊2日】雪砂丘の風紋と白兎神社初詣＆本場松葉ガニ堪能モデルコース
          </h2>

          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-amber-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1">1日目：午前〜午後</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                JR鳥取駅／鳥取砂丘コナン空港到着 ➔ 白兎神社で新春縁結び初詣 ➔ 海鮮ランチ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                特急スーパーはくとまたは飛行機で鳥取へ到着。まずは白兎海岸の「白兎神社」へ参拝し、可愛らしいうさぎの像に「結び石」を乗せて良縁祈願。道の駅神話の里白うさぎで名物の白うさぎもなかや焼きたて海鮮を味わい、日本海を望む展望デッキでひと息つきます。
              </p>
            </div>

            <div className="border-l-2 border-orange-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-orange-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-orange-600 uppercase tracking-wider mb-1">1日目：夕方〜夜</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                鳥取温泉の宿へチェックイン ➔ 源泉掛け流し名湯 ➔ 本場松葉ガニフルコース会席
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                鳥取市街地のホテルへチェックイン。開湯120年を誇る鳥取温泉のやわらかな天然温泉に浸かり、移動の疲れをじんわりと癒やします。夕食は冬の山陰が誇る最高峰「活松葉ガニ」のフルコース！茹でガニ、焼きガニ、カニ刺し、甲羅味噌の甲羅酒、カニ雑炊まで、カニ尽くしの至福を心ゆくまで堪能します。
              </p>
            </div>

            <div className="border-l-2 border-yellow-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-yellow-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-1">2日目：午前〜午後</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                朝の鳥取砂丘で雪砂丘＆風紋の絶景鑑賞 ➔ 砂の美術館 ➔ 鳥取港海鮮市場でお土産
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                朝、澄み切った空気の中で鳥取砂丘へ。「馬の背」へ登り、日本海の荒波と白銀の砂丘が織りなす大パノラマと、足元に広がる美しい風紋を目に焼き付けます。その後「砂の美術館」で世界トップクラスの砂像アートを鑑賞。鳥取港海鮮産直市場「かろいち」で新鮮な松葉ガニや干物をお土産に購入し帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問（FAQ） */}
        

        {/* 内部リンク・関連特集セクション */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md">
          <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-400" />
            あわせて読みたい！山陰・中国地方の冬カニ温泉旅おすすめ特集
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            鳥取・島根をはじめとする山陰地方には、名湯三朝温泉や皆生温泉、出雲大社など、冬の日本海グルメと歴史ある名所が目白押しです。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <Link 
              href="/winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>三朝温泉世界屈指のラドン熱泉＆松葉ガニ三昧・免疫向上名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/winter-tottori-daisen-kaike-onsen-matsubagani-snow-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>皆生温泉美肌の塩化物泉＆伯耆大山雪景色・松葉ガニ会席名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/furusato-tax-tottori-dune-sand-museum-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>鳥取砂丘と砂の美術館満喫！山陰美食リゾート宿泊ガイド</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/winter-shimane-izumo-taisha-kamiarizuki-shimane-wagyu-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>出雲大社神在月・新春縁結び参拝＆しまね和牛・玉造温泉名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
