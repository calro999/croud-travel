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
  ShieldAlert,
  Ship,
  Waves,
  UtensilsCrossed,
  Info
} from 'lucide-react';

export const metadata: Metadata = {
  title: '紋別流氷観光＆ガリンコ号：巨大ドリルで氷を砕く圧巻の航海！名宿5選',
  description: 'オホーツク海に押し寄せる白銀の流氷原を突き進む「流氷砕氷船ガリンコ号III IMERU」徹底攻略ガイド。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '紋別, 流氷, ガリンコ号, ガリンコ号III IMERU, オホーツクタワー, 網走, 北天の丘あばしり湖鶴雅リゾート, ホテルオホーツクパレス, 毛ガニ, ホタテ, 冬の北海道旅行',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-hokkaido-monbetsu-drift-ice-garinko-driftice-gourmet-stay',
  },
  openGraph: {
    title: '紋別流氷観光＆ガリンコ号：巨大ドリルで氷を砕く圧巻の航海！名宿5選',
    description: 'オホーツク海に押し寄せる白銀の流氷原を突き進む「流氷砕氷船ガリンコ号III IMERU」徹底攻略ガイド。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-hokkaido-monbetsu-drift-ice-garinko-driftice-gourmet-stay',
    siteName: 'トラベルマップ - 日本の観光名所＆ホテル厳選ガイド',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://img.travel.rakuten.co.jp/share/HOTEL/14610/14610.jpg',
        width: 1200,
        height: 630,
        alt: '冬の紋別ガリンコ号とオホーツク流氷観光特集',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '紋別流氷観光＆ガリンコ号：巨大ドリルで氷を砕く圧巻の航海！氷海オホーツクタワー・極上毛ガニ＆ホタテを満喫する冬の厳選宿5選',
    description: 'オホーツク海に押し寄せる白銀の流氷原を突き進む「流氷砕氷船ガリンコ号III IMERU」徹底攻略ガイド。海底自然観測室「オホーツクタワー」やアザラシと触れ合う「とっかりセンター」、冬の味覚の王様・オホーツク海産毛ガニと肉厚ホタテ。紋別・網走の天然温泉付き厳選ホテル・リゾート5選。',
    images: ['https://img.travel.rakuten.co.jp/share/HOTEL/14610/14610.jpg'],
  },
};

export default function MonbetsuDriftIcePage() {
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '紋別流氷観光＆ガリンコ号：巨大ドリルで氷を砕く圧巻の航海！氷海オホーツクタワー・極上毛ガニ＆ホタテを満喫する冬の厳選宿5選',
    description: 'オホーツク海に押し寄せる白銀の流氷原を突き進む「流氷砕氷船ガリンコ号III IMERU」徹底攻略ガイド。海底自然観測室「オホーツクタワー」やアザラシと触れ合う「とっかりセンター」、冬の味覚の王様・オホーツク海産毛ガニと肉厚ホタテ。紋別・網走の天然温泉付き厳選ホテル・リゾート5選。',
    image: 'https://img.travel.rakuten.co.jp/share/HOTEL/14610/14610.jpg',
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
      '@id': 'https://croud-travel.pages.dev/winter-hokkaido-monbetsu-drift-ice-garinko-driftice-gourmet-stay',
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
        name: '紋別流氷観光＆ガリンコ号冬特集',
        item: 'https://croud-travel.pages.dev/winter-hokkaido-monbetsu-drift-ice-garinko-driftice-gourmet-stay',
      },
    ],
  };

  const faqItems = [
    {
      q: '紋別の流氷観光でガリンコ号に乗るベストシーズンはいつ頃ですか？',
      a: '流氷の接岸初日（流氷初日）は例年1月中旬から下旬ですが、本格的に安定して流氷帯の中を航行できる確率が最も高まるのは「1月下旬から2月下旬」です。特に2月中旬前後は見渡す限りの氷海が広がる絶頂期となります。ただし風向きによって流氷が沖へ離れることもあるため、最新の「流氷サイト」や観光協会のTwitter等のリアルタイム情報を確認することをおすすめします。'
    },
    {
      q: 'ガリンコ号のデッキに出る際の寒さ対策・服装の注意点は？',
      a: '航行中のオホーツク海上の体感温度はマイナス15度からマイナス20度近くまで冷え込みます。風を通さないロング丈のダウンコート、防風パンツ（スキーウェアの下など）、耳まで覆うニット帽、ネックウォーマー、防風・防水手袋、足元用の靴下用カイロが必須です。また、スマートフォンのバッテリーは極寒で急激に消耗するため、モバイルバッテリーの携行を強く推奨します。'
    },
    {
      q: '紋別へのアクセスは飛行機とバスどちらが便利ですか？',
      a: '羽田空港から「オホーツク紋別空港」への直行便（ANA）が1日1往復運航しており、空港から紋別市街地までは無料連絡バスでわずか約15分と非常に快適です。また、女満別空港や旭川空港を利用して都市間高速バスやレンタカー（冬道運転経験者のみ）でアクセスする方法もあります。フライトと宿がセットになったツアーも人気です。'
    },
    {
      q: '流氷観光とあわせて味わうべき紋別の冬の名物グルメは？',
      a: 'オホーツク海は流氷が運ぶ豊富なプランクトンによって極上の海の幸が育ちます。特に冬の「オホーツク産毛ガニ」は身がぎっしり詰まり、濃厚なカニ味噌が絶品です。また、繊維が太く強い甘みを誇る「ホタテ貝柱」の刺身やバター焼き、名物「オホーツク紋別ホワイトカレー」、出汁の効いた熱々のおでん・炉端焼きも必食の美味です。'
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
          <span className="text-slate-900 font-medium">紋別流氷観光＆ガリンコ号冬特集</span>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <header className="relative bg-gradient-to-b from-slate-950 via-cyan-950 to-slate-900 text-white py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-200 text-xs sm:text-sm font-semibold mb-6">
            <Ship className="w-4 h-4 text-cyan-300" />
            <span>1月・2月・3月 オホーツク海の白銀奇跡特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight sm:leading-tight mb-6">「紋別流氷観光＆ガリンコ号」<br className="hidden sm:inline" /> ドリルが氷を砕く圧巻の航海！氷海オホーツクタワーと<br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-200 to-amber-200"> 冬の味覚の王様「毛ガニ・ホタテ」を満喫する厳選宿5選 </span></h1>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
            シベリアのアムール川から千数百キロを旅し、オホーツク海を白銀に埋め尽くす大自然の神秘「流氷」。船首の巨大スクリュードリルで厚い氷塊を豪快に割り進む「流氷砕氷船ガリンコ号III IMERU」の圧倒的迫力と、海底から氷を観察する「オホーツクタワー」。極寒の海が育む濃厚な毛ガニと甘み際立つホタテに舌鼓を打ち、極楽の温泉で温まるオホーツクの冬物語。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 流氷見頃: 1月下旬〜2月下旬</span>
            <span className="flex items-center gap-1.5"><Thermometer className="w-4 h-4 text-cyan-400" /> 体感気温: -10℃〜-20℃（完全防寒装備）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> エリア: 北海道紋別市・網走市（オホーツク海沿岸）</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 py-12">
        {/* リード文・見どころ詳細解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-6 flex items-center gap-2.5 border-b border-slate-100 pb-4">
            <Waves className="w-6 h-6 text-cyan-600" />
            巨大ドリルが氷を砕き進む！世界でここだけの流氷体験「ガリンコ号」
          </h2>

          <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              ユーラシア大陸のアムール川からオホーツク海へと流れ込んだ淡水が、冷酷な北風に晒されて結氷し、南下しながら成長を続ける「流氷」。1月下旬、白い帯となって水平線を覆い尽くし、やがて北海道の北東岸へと押し寄せる光景は、地球規模の気候のダイナミズムを目の当たりにする奇跡の絶景です。道東の冬は、オホーツク海沿岸を巡る<Link href="/winter-hokkaido-shiretoko-abashiri-onsen-crab-kinki-stay" className="text-cyan-600 hover:underline font-bold">知床・網走の流氷とキンキ・毛ガニ名宿</Link>や、白銀の原野に舞う<Link href="/winter-hokkaido-kushiro-tancho-crane-snow-nusamaibashi-sunset-robata-stay" className="text-cyan-600 hover:underline font-bold">釧路湿原のタンチョウ鶴と炉端焼き</Link>、さらには幻想的な<Link href="/winter-hokkaido-otaru-canal-illumination-sushi-asarigawa-stay" className="text-cyan-600 hover:underline font-bold">小樽雪あかりの路と運河グルメ</Link>など、一生に一度は見たい冬景色が目白押しです。
            </p>
            <p>
              その白銀の氷海へ勇敢に繰り出すのが、紋別が誇る流氷砕氷船「ガリンコ号III IMERU（イメル）」です。通常の砕氷船が船体の自重で氷を割り進むのに対し、ガリンコ号は船首下部に備えた2本の巨大な「アルキメディアン・スクリュー（螺旋状のドリル）。」を高速回転させ、氷に乗り上げてバリバリと粉砕しながら前進します。甲板に伝わる力強い振動と、青白い氷塊が砕け散る迫力、時折氷の上で羽を休める天然記念物のオオワシやオジロワシの神々しい姿は、言葉を失うほどの感動を呼び起こします。
            </p>
            <p>
              港に隣接する「オホーツクタワー」では、海面下7.5メートルの海底観測室から、氷の下の神秘的なオホーツクの海を泳ぐ「流氷の天使・クリオネ」や冷水性の魚たちを観察できます。さらに「オホーツクとっかりセンター（アザラシランド）。」では、愛らしいゴマフアザラシが雪の上をごろごろと転がる姿を間近で観察でき、家族連れやカップルに大人気です。
            </p>
            <p>
              そして夜のお楽しみは、流氷が運ぶ栄養塩によって極限まで旨味を蓄えたオホーツクの冬の美食。特に冬の毛ガニは甲羅の中に濃厚なカニ味噌がたっぷりと詰まり、肉厚なホタテの貝柱は噛むほどに芳醇な甘みが広がります。冷え切った身体を包み込むオホーツク沿岸の天然温泉と、北の極上グルメが組み合わさる至高の冬旅がここにあります。
            </p>
          </div>

          {/* 現地攻略インフォボックス */}
          <div className="mt-8 bg-cyan-50/70 border border-cyan-100 rounded-xl p-5 sm:p-6">
            <h3 className="text-base font-bold text-cyan-950 mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-cyan-600" />
              冬のオホーツク流氷旅行：快適に楽しむための3大心得
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-cyan-900">
              <div className="bg-white p-3.5 rounded-lg border border-cyan-100">
                <span className="font-bold text-cyan-700 block mb-1">1. ガリンコ号は事前予約が鉄則</span>
                <p>流氷シーズン（1月下旬〜2月）の週末やサンライズ・サンセット便は争奪戦となります。旅行日程が決まり次第、公式サイトから早めの乗船予約を確保しましょう。</p>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-cyan-100">
                <span className="font-bold text-cyan-700 block mb-1">2. 甲板での体感温度は-20℃</span>
                <p>風を遮る防風アウター、厚手のフリース、帽子、ネックウォーマー、厚手手袋、靴下用カイロを完備しましょう。スマホ撮影時は落下防止ストラップがあると安心です。</p>
              </div>
              <div className="bg-white p-3.5 rounded-lg border border-cyan-100">
                <span className="font-bold text-cyan-700 block mb-1">3. 羽田から紋別空港直行便が神アクセス</span>
                <p>羽田からオホーツク紋別空港へ毎日直行便が就航中。空港から市街地へは無料シャトルバスで約15分。雪道運転に不慣れな方も安心して訪れることができます。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 厳選ホテルセクション */}
        <section className="mb-14">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-extrabold text-cyan-600 tracking-wider uppercase bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-100">
              Selected 5 Drift Ice Accommodations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              紋別・網走で流氷と北の海鮮美食を満喫する厳選ホテル5選
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto">
              ガリンコ号乗り場至近のシティホテルから、天然温泉大浴場付きの老舗宿、古代オホーツク文化の意匠を極めた湖畔リゾートまで、冬の滞在を彩る名宿をご紹介します。
            </p>
          </div>

          <div className="space-y-8">
            
            {/* ホテルカード 1 */}
            <article className="bg-white rounded-2xl shadow-sm border border-slate-200/80 overflow-hidden hover:shadow-md transition-shadow duration-300">
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    紋別市街中心・オホーツク美食の拠点
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.0</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 1,012件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14610%2F14610.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    ホテルオホーツクパレス
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道紋別市幸町5-1-35（JR石北線遠軽駅より車で45分/オホーツク紋別空港より車で10分/旭川紋別自動車道・浮島ＩＣ→国道273号線約80分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/14610/14610.jpg" 
                        alt="ホテルオホーツクパレス 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>紋別バスターミナル徒歩圏！ガリンコ号乗り場へのアクセスもスムーズ</span></li>
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>オホーツク海産の獲れたて海の幸を贅沢に振る舞う館内和食レストラン</span></li>
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>シモンズ社製ベッド完備の清潔な客室と極寒の旅を温めるきめ細やかなもてなし</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥5,170〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-sky-50/40 p-4 rounded-xl border border-sky-100/60">
                  紋別市街の中心に位置し、流氷観光船ガリンコ号の出航拠点「海洋交流館」へ車でわずか数分という絶好のロケーションを誇るシティホテル。氷点下10度を下回るオホーツクの寒風から戻った旅人を温かく迎えてくれます。館内レストランではオホーツク海の毛ガニ、大粒ホタテのバター焼き、旬の刺身盛り合わせなど、北の海の豊潤な味覚を心ゆくまで堪能できます。ビジネスから観光まで高い評価を得る安心のハイグレードホテルです。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14610%2F14610.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    天然温泉大浴場完備・地場海鮮バイキング
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.4</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 1,884件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F863%2F863.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    紋別セントラルホテル
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道紋別市港町7丁目1-58（オホーツク紋別空港から車で約10分。旭川紋別自動車道・丸瀬布（まるせっぷ）ＩＣから約60分。）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/863/863.jpg" 
                        alt="紋別セントラルホテル 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>紋別市街地で希少な天然温泉大浴場＆サウナで極寒の冷えを芯から解消</span></li>
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>朝食バイキングで味わうホタテの刺身や郷土料理「帆立ご飯」が大好評</span></li>
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>ガリンコ号乗船場や紋別港へのアクセス至近で冬の観光に最適な拠点</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥6,600〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-sky-50/40 p-4 rounded-xl border border-sky-100/60">
                  紋別港のすぐそばに佇み、地元リピーターや流氷クルーズ客から愛され続ける老舗ホテル。最大の魅力は、冷え切った身体に染み渡る天然温泉の大浴場とサウナです。無色澄明で肌あたりの柔らかな湯に浸かれば、流氷クルーズの甲板で凍てついた手足もじんわりと温まります。名物の朝食バイキングでは、オホーツク海産の新鮮なホタテの刺身やイカそうめんが食べ放題として並び、朝から贅沢なオホーツクグルメを味わえます。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F863%2F863.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    北方民族オホーツク文化・網走湖畔の極上リゾート
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.3</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 600件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68067%2F68067.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    北天の丘あばしり湖鶴雅リゾート
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道網走市呼人159（ＪＲ　呼人駅から徒歩１０分　◆JR呼人駅から無料送迎あり（前日20時までの予約制）詳しくはお問合せください。）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/68067/68067.jpg" 
                        alt="北天の丘あばしり湖鶴雅リゾート 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>北方少数民族「オホーツク人」の神秘的な文化とアートが息づく館内意匠</span></li>
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>網走湖を望む自家源泉の露天風呂と暖炉を囲む贅沢なラウンジ空間</span></li>
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>オホーツクバイキングまたは創作会席で味わうオホーツク牛と北の海鮮</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥18,392〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-sky-50/40 p-4 rounded-xl border border-sky-100/60">
                  網走湖の畔の小高い丘に佇み、古代オホーツク文化の浪漫とモダンなラグジュアリーが融合した鶴雅グループ屈指の名宿。館内には暖炉の薪が爆ぜるラウンジや足湯が設けられ、上質な静寂に包まれます。自家源泉の温泉露天風呂はとろりとした美肌の湯で、雪に覆われた白銀の木立を眺めながらの湯浴みは至福。夕食はオホーツク海と道東の大地が育んだ極上食材をライブキッチンで焼き上げるバイキングや、プライベート感あふれる和食会席で極上の夜を演出します。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68067%2F68067.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    天都山・網走湖一望の展望露天風呂
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.0</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 654件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31670%2F31670.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    天都の宿　網走観光ホテル（BBHホテルグループ）
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道網走市呼人23（ＪＲ網走駅よりタクシーで約8分　　女満別空港から航空機の発着に合わせて運行する連絡バス乗車、網走観光ホテル前下車徒歩6分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/31670/31670.jpg" 
                        alt="天都の宿　網走観光ホテル（BBHホテルグループ） 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>網走湖の雄大な白銀パノラマを見晴らす高台の展望露天風呂</span></li>
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>自家源泉掛け流しの天然温泉と無料のウェルカムドリンク・地酒サービス</span></li>
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>知床牛や流氷の恵み・海鮮陶板焼きを味わう充実の夕食プラン</span></li>
                      </ul>
                    </div>

                    <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-xs text-slate-500 mb-1">参考宿泊料金（目安）</p>
                      <div className="flex items-baseline justify-between">
                        <span className="text-lg sm:text-xl font-extrabold text-blue-600">¥3,840〜</span>
                        <span className="text-xs text-slate-500">2名1室利用時・1名あたり</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-sky-50/40 p-4 rounded-xl border border-sky-100/60">
                  名勝・天都山の麓、網走湖を一望する高台に位置する絶景温泉ホテル。白銀に凍結した網走湖の雄大な景色を露天風呂から見下ろすロケーションは圧巻のひとこと。ナトリウム-塩化物泉の温泉は保温効果が高く、入浴後もポカポカとした温もりが長く持続します。夕食には冬の日本海・オホーツク海で獲れたタラバガニやズワイガニ、知床牛のステーキなどボリューム満点の北の馳走が並びます。リーズナブルながら満足度の高い滞在が叶います。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31670%2F31670.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
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
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-100 text-sky-900">
                    <Sparkles className="w-3.5 h-3.5" />
                    JR網走駅徒歩1分・天然温泉旅人の湯
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-bold text-slate-800">4.1</span>
                    </div>
                    <span className="text-xs text-slate-500">（クチコミ 1,296件）</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 leading-snug">
                  <a 
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32093%2F32093.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    ホテルルートイン網走駅前
                  </a>
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>北海道網走市新町1-2-13（ＪＲ網走駅より徒歩１分／女満別空港より網走まで車で２０分）</span>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
                  <div className="md:col-span-5">
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-100">
                      <img 
                        src="https://img.travel.rakuten.co.jp/share/HOTEL/32093/32093.jpg" 
                        alt="ホテルルートイン網走駅前 外観・客室イメージ" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-7 flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        この宿の注目ポイント
                      </h4>
                      <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-slate-600">
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>JR網走駅の目の前！女満別空港行バス停も至近でアクセス抜群</span></li>
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>男女別天然温泉大浴場「旅人の湯」で移動とクルーズの疲れをリフレッシュ</span></li>
                        <li className="flex items-start gap-2"><span className="text-sky-500 font-bold">•</span><span>種類豊富な無料和洋バイキング朝食と清潔で機能的な快適客室</span></li>
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

                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6 bg-sky-50/40 p-4 rounded-xl border border-sky-100/60">
                  JR網走駅の真正面に位置し、雪道の移動でも安心・快適な抜群の立地を誇るホテル。女満別空港からの連絡バスや流氷観光船おーろら号・紋別行きバスへの乗り継ぎにも最適です。館内には旅の疲れをほぐす天然温泉大浴場が完備されており、極寒の屋外から帰館してすぐ温かいお湯に浸かれるのが嬉しいポイント。朝食には焼きたてのクロワッサンや北海道産米を使用した和洋バイキングが無料で提供され、アクティブな冬の旅をサポートします。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32093%2F32093.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-sm sm:text-base rounded-xl shadow-sm hover:shadow transition-all text-center"
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
            【1泊2日】白銀の流氷原ガリンコ号クルーズとオホーツク海鮮三昧モデルコース
          </h2>

          <div className="space-y-6">
            <div className="border-l-2 border-cyan-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-cyan-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-cyan-600 uppercase tracking-wider mb-1">1日目：昼〜夕方</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                羽田発 ➔ オホーツク紋別空港到着 ➔ オホーツクタワー＆とっかりセンター散策
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                羽田空港からの直行便で昼過ぎにオホーツク紋別空港へ到着。無料連絡バスで紋別市街地へ。チェックイン前に「氷海展望塔オホーツクタワー」へ足を伸ばし、海底窓から流氷下の冷たい海と愛らしいクリオネを観察。隣接するとっかりセンターで愛嬌たっぷりのアザラシたちと触れ合います。
              </p>
            </div>

            <div className="border-l-2 border-blue-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-blue-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">1日目：夜</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                天然温泉で温まり ➔ 地元割烹や宿で「毛ガニ・ホタテ尽くし」を堪能
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ホテルへ戻り、冷えた手足を天然温泉大浴場でじんわりと温めます。夕食はオホーツク海の毛ガニの姿盛り、ぷりぷりの生ホタテ刺身、ホタテのバター醤油焼き、旬の海鮮鍋を地酒「北の勝」や北海道限定ビールとともに贅沢に満喫します。
              </p>
            </div>

            <div className="border-l-2 border-indigo-500 pl-4 sm:pl-6 relative">
              <span className="absolute -left-2 top-0 w-3.5 h-3.5 rounded-full bg-indigo-500 ring-4 ring-white" />
              <div className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">2日目：午前〜午後</div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                ガリンコ号III IMERUで流氷クルーズ ➔ カニの爪オブジェ記念撮影 ➔ 空港へ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                朝、防寒着を着込んで海洋交流館へ。ガリンコ号IIIに乗船し、氷海へと出航！スクリュードリルが氷を豪快に粉砕する轟音と飛沫、どこまでも続く白銀の氷原に息を呑みます。下船後は高さ12mの巨大な「カニの爪オブジェ」で記念撮影。紋別名物のかまぼこをお土産に購入し、午後の便で羽田へ帰路につきます。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問（FAQ） */}
        

        {/* 内部リンク・関連特集セクション */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-md">
          <h2 className="text-lg sm:text-xl font-bold mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-400" />
            あわせて読みたい！冬の北海道・海鮮温泉旅おすすめ特集
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
            冬の北海道には、流氷の知床、白銀の美瑛・富良野、情緒ある小樽運河など、心震える絶景と美食が溢れています。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            <Link 
              href="/winter-hokkaido-shiretoko-abashiri-onsen-crab-kinki-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>知床・網走オホーツク流氷観光＆高級魚キンキ・毛ガニ名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/winter-hokkaido-kushiro-tancho-crane-snow-nusamaibashi-sunset-robata-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>釧路湿原のタンチョウ鶴＆勝手丼・炉端焼き冬の道東名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/winter-hokkaido-otaru-canal-illumination-sushi-asarigawa-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>小樽雪あかりの路＆冬の運河ガス灯・極上寿司と温泉ホテル</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
            <Link 
              href="/winter-hokkaido-biei-furano-bluepond-lightup-tokachidake-onsen-stay"
              className="p-3 bg-slate-800/80 hover:bg-slate-700/80 rounded-xl border border-slate-700 transition-colors flex items-center justify-between"
            >
              <span>美瑛・青い池冬期ライトアップ＆富良野十勝岳天然温泉名宿</span>
              <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
