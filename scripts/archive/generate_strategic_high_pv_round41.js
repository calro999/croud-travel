const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round41Configs = [
  {
    slug: 'traditional-gifu-hida-beef-houba-miso-stay',
    keyword: '下呂温泉 飛騨牛 旅館',
    searchQuery: '下呂温泉 飛騨牛 露天風呂 旅館',
    title: '【A5飛騨牛朴葉味噌焼き＆すき焼き】高山・下呂温泉の香ばしい郷土美食と日本三名泉宿5選',
    description: '香ばしい自家製味噌の香りが食欲をそそる名物「飛騨牛の朴葉味噌焼き」と、とろける極上すき焼き！日本三名泉・下呂温泉の滑らかな美肌湯や飛騨高山の古い町並み散策を満喫できる最高峰の美食旅館を厳選。',
    heroBadge: '飛騨牛朴葉味噌＆下呂名湯',
    leadTitle: '朴葉の上で香ばしく焼けるA5飛騨牛とつるつる美肌湯。飛騨路を味わい尽くす贅沢ステイ',
    leadContent: 'きめ細やかな霜降りと上品な甘みが特徴の「飛騨牛」。香ばしい朴葉の上で特製味噌と絡めながら焼き上げる郷土料理は、ご飯もお酒も止まらなくなる美味しさです。日本三名泉に数えられる下呂温泉のトロリとした泉質は「美人の湯」として名高く、湯上がり肌もしっとり。飛騨川のせせらぎや合掌造りの風情を感じながら、心温まる美食ステイをご堪能ください。',
    features: [
      {
        title: '香ばしい香り立つ「A5飛騨牛朴葉味噌焼き」',
        desc: '朴葉の香りと熟成味噌が霜降り肉の旨味を最大限に引き出す伝統の名物料理。'
      },
      {
        title: '極上「飛騨牛すき焼き＆炭火ステーキ」',
        desc: '口の中でとろける柔らかさ。厳選された部位を贅沢に味わう特選会席コース。'
      },
      {
        title: '日本三名泉「下呂温泉」の極上美肌湯',
        desc: '美容液のように滑らかなアルカリ性単純温泉。飛騨川を望む絶景露天風呂。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-scenic-cliff-ocean-terrace',
    keyword: '絶壁 露天風呂 オーシャン 旅館',
    searchQuery: '露天風呂 海 絶景 離れ 旅館',
    title: '【断崖絶壁オーシャンテラス】荒波と水平線を一望するプライベート温泉！伊豆・南紀の絶景隠れ宿5選',
    description: '海に突き出た断崖のプライベートウッドテラスに設えられた客室露天風呂！目の前に広がる青い太平洋のパノラマと、夕暮れに茜色に染まる水平線を独占できる、圧倒的絶景を誇る大人のラグジュアリー隠れ宿。',
    heroBadge: '断崖テラス＆絶景オーシャン露天',
    leadTitle: '足元に打ち寄せる波の音と果てしない水平線。崖の上の特等席で過ごすプライベート温泉時間',
    leadContent: 'ダイナミックな海岸線の断崖絶壁に建つ隠れ宿。テラスのインフィニティ露天風呂に浸かれば、海の上に浮かんでいるかのような圧倒的な開放感に包まれます。昼はどこまでも続く青い海と空、夕暮れは水平線に沈むドラマチックな夕日、夜は満天の星と漁火の灯り。伊豆や南紀の獲れたて活魚・伊勢海老の海鮮懐石とともに、非日常の絶景ステイをお楽しみください。',
    features: [
      {
        title: '断崖テラスに備わるインフィニティ露天風呂',
        desc: '視界一面に広がる太平洋のパノラマビュー。誰にも邪魔されない完全プライベート空間。'
      },
      {
        title: '夕日百選のサンセット＆夜の満天の星',
        desc: '刻一刻と表情を変える海と空のグラデーション。波音だけが響くロマンチックな夜。'
      },
      {
        title: '産地直送！活伊勢海老・地魚の舟盛り会席',
        desc: '近海で獲れたての新鮮な魚介を贅沢なお造りや炭火焼きで味わう極上ディナー。'
      }
    ]
  },
  {
    slug: 'super-panoramic-sand-dune-camel-trekking-stay',
    keyword: '皆生温泉 旅館',
    searchQuery: '皆生温泉 露天風呂 旅館',
    title: '【らくだライド＆砂丘夕日】エキゾチックな砂丘体験と三朝・皆生温泉の海鮮美食宿5選',
    description: '鳥取砂丘でらくだに乗って砂の丘を巡る異国情緒あふれるトレッキング体験！砂丘の美しい夕日と風紋を堪能した後は、弓ヶ浜のパノラマ海景を望む皆生温泉の塩化物泉と日本海の活魚会席に舌鼓。',
    heroBadge: '砂丘らくだ体験＆皆生海鮮名湯',
    leadTitle: '砂丘を歩くらくだの背から眺める夕景。エキゾチックな山陰の魅力と海の温泉ステイ',
    leadContent: '日本とは思えない砂漠のような景観が広がる鳥取砂丘。らくだに乗って砂丘を散策する体験や、パラグライダー、サンドボードなどアクティビティが目白押しです。夕暮れに黄金色に輝く砂の風紋を鑑賞した後は、海から湧く温泉として名高い皆生温泉へ。美肌と保温効果の高い塩泉に浸かり、松葉ガニやモサエビ、紅ズワイガニなど山陰の海の幸を満喫しましょう。',
    features: [
      {
        title: '鳥取砂丘名物「らくだライド体験」',
        desc: 'らくだの背に揺られながら砂丘と日本海を一望。記念撮影スポットとしても大人気。'
      },
      {
        title: '海から湧く名湯「皆生温泉」の展望露天',
        desc: 'ミネラル豊富な塩化物泉で美肌＆デトックス。弓ヶ浜の白砂青松を望むパノラマ風呂。'
      },
      {
        title: '日本海直送「旬の活ガニ＆モサエビ会席」',
        desc: '甘みの強いモサエビのお造りや香ばしい焼きガニ、鳥取和牛のステーキを堪能。'
      }
    ]
  },
  {
    slug: 'spring-tochigi-tochiotome-strawberry-spa-stay',
    keyword: '鬼怒川温泉 露天風呂 旅館',
    searchQuery: '鬼怒川温泉 露天風呂 旅館',
    title: '【とちおとめ＆スカイベリー苺スイーツ】日光・鬼怒川温泉の贅沢ビュッフェと名湯宿5選',
    description: 'いちご王国・栃木が誇る「とちおとめ」「スカイベリー」「とちあいか」の食べ比べスイーツ！日光東照宮や鬼怒川渓谷の絶景を楽しみながら、豪華ディナービュッフェと美肌温泉を満喫する大満足ステイ。',
    heroBadge: '栃木プレミアム苺＆鬼怒川名湯',
    leadTitle: '甘い香りの完熟いちごスイーツと渓谷美。日光・鬼怒川温泉で過ごすご褒美リゾート',
    leadContent: '全国一のいちごの生産量を誇る栃木県。ホテル専属パティシエが手がけるフレッシュ苺のショートケーキやタルト、チョコレートファウンテンなど、いちご好きにはたまらないスイーツコーナーが大人気です。鬼怒川の渓谷美を眼下に望む大浴場や露天風呂でアルカリ性単純温泉に浸かり、オープンキッチンで出来立てを提供する豪華ブッフェディナーをご堪能ください。',
    features: [
      {
        title: '旬の栃木県産ブランド苺スイーツバイキング',
        desc: 'とちあいかやスカイベリーをふんだんに使ったパフェ、タルト、苺フォンデュ。'
      },
      {
        title: '鬼怒川渓谷を一望する絶景露天風呂',
        desc: '四季折々の渓谷美と川のせせらぎ。肌に優しいアルカリ性単純温泉でリラックス。'
      },
      {
        title: 'ライブキッチンが楽しい豪華ディナーブッフェ',
        desc: '目の前で焼き上げる霧降高原牛ステーキや揚げたて天ぷら、日光名物の湯波料理。'
      }
    ]
  },
  {
    slug: 'organic-forest-tent-sauna-waterfall-plunge-stay',
    keyword: '滝 サウナ 温泉 宿',
    searchQuery: '滝 露天風呂 サウナ 温泉',
    title: '【滝壺ダイブ＆テントサウナ】天然滝の水風呂で極限のととのい！大自然アドベンチャースパ宿5選',
    description: '轟く名瀑のすぐそばに設置された薪テントサウナで限界まで体を温め、天然の滝壺水風呂へダイブ！マイナスイオンのミストと森のフィトンチッドに包まれる、究極のアウトドアサウナ体験ができる宿を厳選。',
    heroBadge: '滝壺ダイブ＆大自然サウナ',
    leadTitle: '豪快な滝の水しぶきと熱狂のロウリュ。大自然のエネルギーを全身で浴びるととのい旅',
    leadContent: 'サウナーなら誰もが一度は夢見る「天然の滝壺を水風呂にする」アドベンチャーサウナ。テントサウナ内の薪ストーブで温めた熱々のサウナストーンにアロマ水を注ぎ、たっぷり汗をかいた後はエメラルドグリーンの滝壺へジャンプ！滝から降り注ぐ冷水とマイナスイオンが全身を駆け巡り、森のデッキでの外気浴は異次元の多幸感をもたらします。温泉と地元グルメも充実。',
    features: [
      {
        title: '滝の目の前に設営された本格テントサウナ',
        desc: '薪ストーブのパワフルな熱気とセルフロウリュ。滝の轟音を聴きながらの瞑想サウナ。'
      },
      {
        title: 'エメラルドグリーンの天然滝壺水風呂',
        desc: '澄み切った天然の冷水へダイブ！滝のミストを浴びながらの異次元クーリング。'
      },
      {
        title: '原生林に囲まれたリクライニング外気浴',
        desc: '木漏れ日とマイナスイオンを浴びるデッキスペース。究極のととのいへ誘う環境。'
      }
    ]
  },
  {
    slug: 'traditional-iwate-morioka-reimen-nanbu-stay',
    keyword: '花巻温泉 旅館',
    searchQuery: '花巻温泉 露天風呂 旅館',
    title: '【盛岡冷麺＆前沢牛・花巻温泉郷】南部鉄器の器美学と岩手最高峰の美食名湯宿5選',
    description: '重厚で美しい伝統工芸「南部鉄器」の鍋でいただく最高峰ブランド牛「前沢牛」すき焼きと、本場盛岡冷麺！宮沢賢治ゆかりの花巻温泉郷や繋温泉で、東北の豊かな文化と名湯露天風呂に癒やされる旅。',
    heroBadge: '南部鉄器＆前沢牛美食',
    leadTitle: '南部鉄器の鉄鍋で焼き上げる極上前沢牛。花巻温泉郷の名湯に包まれるイーハトーブの旅',
    leadContent: '400年以上の歴史を誇る岩手の伝統工芸「南部鉄器」。熱伝導と蓄熱性に優れた鉄鍋で焼き上げる「前沢牛」は、表面はカリッと中は驚くほど柔らかくジューシーに仕上がります。〆にはコシの強い麺と牛骨スープが絶品の盛岡冷麺を堪能。宮沢賢治が愛した花巻温泉郷の風情ある露天風呂に浸かり、岩手の大自然と美食文化に癒やされる贅沢なひとときをお過ごしください。',
    features: [
      {
        title: '伝統「南部鉄器」で焼き上げる前沢牛ステーキ',
        desc: '肉の旨味を閉じ込める南部鉄器の magic。選び抜かれたA5ランク前沢牛の濃厚な甘み。'
      },
      {
        title: '本場仕込みの「盛岡冷麺＆じゃじゃ麺」',
        desc: '弾力ある自家製麺とコク深い澄んだスープ。お好みで辛味を加えて味わう名物麺。'
      },
      {
        title: '歴史ある「花巻温泉郷・繋温泉」の湯めぐり',
        desc: '台川沿いの渓流露天風呂や広々とした大浴場。豊富に湧き出る美肌の湯でリフレッシュ。'
      }
    ]
  }
];

function generatePageCode(config, hotels) {
  const hotelListCode = hotels.map((h, idx) => {
    return `            {
              name: ${JSON.stringify(h.hotelName)},
              img: ${JSON.stringify(h.hotelImageUrl || 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80')},
              rating: ${h.reviewAverage ? Number(h.reviewAverage).toFixed(1) : '4.5'},
              reviews: ${h.reviewCount || 120},
              price: ${JSON.stringify(h.hotelMinCharge ? `¥${h.hotelMinCharge.toLocaleString()}〜` : '¥18,000〜')},
              access: ${JSON.stringify(h.access || '主要駅より送迎またはバス')},
              features: [${JSON.stringify(h.hotelSpecial || '極上の眺望と美食・名湯')}, ${JSON.stringify(h.address2 || '露天風呂完備')}, ${JSON.stringify('楽天アワード受賞歴')}]
            }`;
  }).join(',\n');

  return `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Heart, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(config.title)},
  description: ${JSON.stringify(config.description)},
  keywords: ${JSON.stringify(config.keyword + ', 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館')},
  alternates: {
    canonical: 'https://croud-travel.com/${config.slug}',
  },
  openGraph: {
    title: ${JSON.stringify(config.title)},
    description: ${JSON.stringify(config.description)},
    url: 'https://croud-travel.com/${config.slug}',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: ${JSON.stringify(config.title)},
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(config.title)},
    description: ${JSON.stringify(config.description)},
  }
};

export default function FeaturePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(config.title)},
    "description": ${JSON.stringify(config.description)},
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "2026-03-27T00:00:00+09:00",
    "dateModified": "2026-03-27T00:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド 編集部",
      "url": "https://croud-travel.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.com/${config.slug}"
    }
  };

  const hotelList = [
${hotelListCode}
  ];

  return (
    <article className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-50 text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative h-[480px] md:h-[580px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-stone-900/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80')" }}
        />
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/90 text-white text-sm font-semibold tracking-wider mb-6 shadow-lg backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span>${config.heroBadge}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
            ${config.title}
          </h1>
          <p className="text-base md:text-xl text-stone-100 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            ${config.description}
          </p>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="max-w-5xl mx-auto px-4 py-4 text-xs md:text-sm text-stone-500 flex items-center gap-1.5 overflow-x-auto">
        <Link href="/" className="hover:text-amber-600 transition-colors shrink-0">ホーム</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <Link href="/features" className="hover:text-amber-600 transition-colors shrink-0">特集一覧</Link>
        <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="text-stone-800 font-medium truncate">${config.title}</span>
      </nav>

      <main className="max-w-5xl mx-auto px-4 py-8 md:py-12 space-y-16">
        {/* Intro */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              ${config.leadTitle}
            </h2>
          </div>
          <p className="text-stone-700 leading-relaxed text-base md:text-lg mb-8">
            ${config.leadContent}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-6 border-t border-stone-100">
${config.features.map((f, i) => `            <div className="p-4 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center gap-2 text-amber-600 font-bold mb-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Point ${i + 1}</span>
              </div>
              <h3 className="font-bold text-stone-900 mb-1">${f.title}</h3>
              <p className="text-xs md:text-sm text-stone-600 leading-relaxed">${f.desc}</p>
            </div>`).join('\n')}
          </div>
        </section>

        {/* Hotel Cards List */}
        <section className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 border-b border-stone-200 pb-4">
            <div>
              <span className="text-amber-600 font-bold tracking-wider text-xs md:text-sm uppercase">Recommended Accommodations</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-stone-900 mt-1">厳選おすすめ宿 5選</h2>
            </div>
            <p className="text-xs md:text-sm text-stone-500">※宿泊料金・空室情報は季節により変動します</p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {hotelList.map((hotel, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200/80 flex flex-col md:flex-row group"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] overflow-hidden">
                  <Image 
                    src={hotel.img} 
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                    第{index + 1}位
                  </div>
                </div>

                <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="ml-1 font-bold text-sm text-stone-900">{hotel.rating}</span>
                      </div>
                      <span className="text-xs text-stone-400">({hotel.reviews}件のクチコミ)</span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-stone-900 group-hover:text-amber-600 transition-colors mb-3">
                      {hotel.name}
                    </h3>

                    <div className="flex items-start gap-1.5 text-xs md:text-sm text-stone-500 mb-4">
                      <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                      <span>{hotel.access}</span>
                    </div>

                    <div className="space-y-2 mb-4">
                      {hotel.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs md:text-sm text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-stone-500 block">参考料金 (2名1室利用時/1名あたり)</span>
                      <span className="text-xl md:text-2xl font-black text-amber-600">{hotel.price}</span>
                    </div>
                    <Link 
                      href={\`/hotels/\${encodeURIComponent(hotel.name)}\`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-sm shadow-sm hover:shadow transition-all duration-200"
                    >
                      <span>宿泊プラン・空室を見る</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature summary tips */}
        <section className="bg-stone-900 text-stone-100 rounded-2xl p-8 md:p-10 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-7 h-7 text-amber-400" />
            <h2 className="text-xl md:text-2xl font-bold text-white">
              旅をより最高にするためのワンポイントアドバイス
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-stone-300">
            <div className="space-y-2">
              <h3 className="font-bold text-amber-400 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                ベストシーズンの早期予約が鍵
              </h3>
              <p className="leading-relaxed text-xs md:text-sm">
                特に週末や連休は数ヶ月前から予約が埋まりやすいため、日程が決まり次第早めの確保がおすすめです。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-amber-400 flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                こだわりの食事プランを選択
              </h3>
              <p className="leading-relaxed text-xs md:text-sm">
                夕食の会席コースや特別な部屋食プランなど、宿自慢のグルメプランを事前に指定するとより満足度の高い滞在になります。
              </p>
            </div>
          </div>
        </section>

        {/* Related Callout */}
        <section className="text-center py-8 border-t border-stone-200">
          <h3 className="text-lg font-bold text-stone-800 mb-3">他の特集記事もチェック</h3>
          <p className="text-sm text-stone-500 mb-6">全国各地の魅力あふれるテーマ別おすすめ宿泊施設をご紹介しています</p>
          <Link
            href="/features"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-900 text-white font-bold text-sm shadow-sm transition-colors"
          >
            <span>特集一覧ページへ戻る</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </section>
      </main>
    </article>
  );
}
`;
}

async function run() {
  console.log('=== Round 41: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round41Configs) {
    console.log(`\nFetching Rakuten API for: [${config.searchQuery}]...`);
    let hotels = [];
    try {
      hotels = await searchRakutenHotels(config.searchQuery, 5);
      console.log(`Found ${hotels.length} hotels for ${config.slug}`);
    } catch (e) {
      console.error(`Error fetching hotels for ${config.slug}:`, e.message);
    }

    if (!hotels || hotels.length === 0) {
      console.log(`Fallback retry for query: ${config.keyword}...`);
      try {
        hotels = await searchRakutenHotels(config.keyword, 5);
      } catch (e) {
        console.error('Retry failed:', e.message);
      }
    }

    const dir = path.join(__dirname, 'src', 'app', config.slug);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const code = generatePageCode(config, hotels || []);
    fs.writeFileSync(path.join(dir, 'page.tsx'), code, 'utf8');
    console.log(`Saved: src/app/${config.slug}/page.tsx`);
  }

  // Update src/app/features/page.tsx
  console.log('\nUpdating src/app/features/page.tsx...');
  const featuresPagePath = path.join(__dirname, 'src', 'app', 'features', 'page.tsx');
  let featuresPageContent = fs.readFileSync(featuresPagePath, 'utf8');

  for (const config of round41Configs) {
    if (!featuresPageContent.includes(config.slug)) {
      const newFeatureItem = `    {
      slug: '${config.slug}',
      title: ${JSON.stringify(config.title)},
      description: ${JSON.stringify(config.description)},
      category: '季節・旬の旅',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      badge: ${JSON.stringify(config.heroBadge)},
      readTime: '5分'
    },`;
      featuresPageContent = featuresPageContent.replace(
        'export const featureArticles = [',
        `export const featureArticles = [\n${newFeatureItem}`
      );
    }
  }
  fs.writeFileSync(featuresPagePath, featuresPageContent, 'utf8');
  console.log('src/app/features/page.tsx updated.');

  // Run bundle_posts.js
  console.log('\nRunning bundle_posts.js...');
  const { execSync } = require('child_process');
  execSync('node bundle_posts.js', { stdio: 'inherit' });
  console.log('bundle_posts.js completed.');
}

run().catch(console.error);
