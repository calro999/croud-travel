const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round37Configs = [
  {
    slug: 'traditional-gunma-joshu-beef-sukiyaki-stay',
    keyword: '草津温泉 上州牛 旅館',
    searchQuery: '草津温泉 上州牛 旅館',
    title: '【上州牛すき焼き＆下仁田ねぎ】群馬名物とろける極上すき焼き会席！草津・伊香保・四万の名湯宿5選',
    description: 'きめ細やかなサシの上州牛と、熱を通すと甘くとろける下仁田ねぎの黄金コンビ！名湯・草津温泉や伊香保、四万温泉で、職人特製の割り下で味わう至高のすき焼き会席と美肌の湯を堪能する極上ステイ。',
    heroBadge: '上州牛すき焼き＆群馬名湯',
    leadTitle: '極上霜降り上州牛と甘い下仁田ねぎ。天下の名湯に浸かり味わう本場すき焼き会席',
    leadContent: 'すき焼き応援県・群馬県が誇る最高峰ブランド「上州牛」。サッと火を通した柔らかいお肉に甘辛い秘伝の割り下と濃厚な地元産こだわり卵が絡み合う瞬間はまさに至福。草津の湯畑を散策した後は酸性泉のにごり湯でリフレッシュし、伊香保の石段街散策後は黄金の湯に癒やされる。群馬の美食と名湯が織りなす贅沢なひとときをお届けします。',
    features: [
      {
        title: '極上「上州牛」すき焼き＆しゃぶしゃぶ',
        desc: 'とろけるような柔らかさと肉本来の旨味。料理長特製の割り下で仕上げる絶品鍋。'
      },
      {
        title: '群馬特産・下仁田ねぎと地元旬野菜',
        desc: '加熱することで極上の甘みととろみを生み出す下仁田ねぎなど、豊かな大地の恵み。'
      },
      {
        title: '日本屈指の名湯「草津・伊香保・四万温泉」',
        desc: '豊富な湯量を誇る源泉かけ流しの湯で、体の芯からポカポカに温まる極上の湯浴み。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-scenic-waterfall-basin',
    keyword: '滝 露天風呂 温泉 旅館',
    searchQuery: '滝 露天風呂 温泉 旅館',
    title: '【滝壺マイナスイオン】客室専用テラスから名瀑を望む！絶景滝見露天風呂の贅沢宿5選',
    description: '轟く名瀑の音と舞い上がる水しぶき、降り注ぐマイナスイオン！客室露天風呂や専用ウッドデッキから迫力ある滝の絶景を独占できる、自然のエネルギーに満ちた全国屈指の滝見温泉宿を厳選紹介。',
    heroBadge: '滝見露天＆マイナスイオン',
    leadTitle: '豪快な滝の音と清らかな飛沫。五感を研ぎ澄ます滝見プライベート露天風呂の旅',
    leadContent: '深山幽谷の森に響き渡る滝の音。湯船に浸かりながら目の前に流れ落ちる滝の姿を眺め、たっぷりのマイナスイオンを浴びる贅沢は、まさに大人のための極上リフレッシュです。夜にはライトアップされ、昼とは一変して幻想的な姿を見せる名瀑。川魚や旬の山菜をふんだんに使った滋味あふれる料理とともに、非日常の癒やしをご体感ください。',
    features: [
      {
        title: '目の前に名瀑を望む絶景滝見露天風呂',
        desc: '豪快な水流と滝壺のエメラルドグリーンを眺めながら入る、圧倒的開放感の名湯。'
      },
      {
        title: '夜の名瀑ライトアップの幻想美',
        desc: '闇夜に浮かび上がる白い滝筋と湯けむり。息をのむほどドラマチックな夜の景観。'
      },
      {
        title: '清流が育む岩魚・山女魚と山菜料理',
        desc: '炭火でじっくり焼き上げた川魚の塩焼きや、山の幸を丁寧に仕立てた会席ディナー。'
      }
    ]
  },
  {
    slug: 'super-panoramic-lake-wakeboard-sup-stay',
    keyword: '湖 SUP リゾート ホテル',
    searchQuery: '浜名湖 温泉 リゾート ホテル',
    title: '【湖上アクティビティ】爽快ウェイクボード＆絶景SUPクルーズ！富士五湖・浜名湖のリゾート温泉宿5選',
    description: '富士山を背景に水上を滑走するウェイクボードや、穏やかな湖面を進むSUPクルージング！ウォーターアクティビティを満喫した後は、レイクビュー温泉とサウナで極上のととのいを叶える人気リゾートを厳選。',
    heroBadge: 'SUP＆レイクアクティビティ',
    leadTitle: '青空の下、パドルを持って湖へ漕ぎ出す！水上アクティビティと絶景温泉の爽快ステイ',
    leadContent: '山中湖・河口湖や浜名湖など、美しい景観を誇る湖畔リゾート。初心者でも楽しめるスタンドアップパドルボード（SUP）やボートに引っ張られて水面を滑走するウェイクボードなど、手ぶらで挑戦できる体験が充実しています。体を思い切り動かした後は、湖と富士山を一望するパノラマ露天風呂やサウナで心身をリセット。アクティブ派に最高の休日を。',
    features: [
      {
        title: '手ぶらで楽しむSUP＆ウェイクボード体験',
        desc: 'ホテル専用桟橋や提携マリーナから出発。インストラクター付きで初心者も安心。'
      },
      {
        title: '富士山や湖を望むパノラマ展望温泉',
        desc: '夕日に染まる湖面と雄大な山並みを眺めながら浸かる、開放感抜群の天然温泉。'
      },
      {
        title: '開放的な湖畔テラスでのBBQ＆ビュッフェ',
        desc: '地元食材をグリルで味わう贅沢BBQディナーや、焼きたて料理が並ぶリゾートブッフェ。'
      }
    ]
  },
  {
    slug: 'spring-wakayama-nanki-ume-spa-stay',
    keyword: '南紀白浜 温泉 旅館',
    searchQuery: '南紀白浜 温泉 旅館',
    title: '【南高梅スイーツ＆梅酒BAR】紀州特産南高梅のフルコースと白浜名湯！和歌山・南紀白浜の癒やし宿5選',
    description: 'ふっくらジューシーな最高級「紀州南高梅」を使った特製デザートや、数十種類の梅酒を飲み比べる梅酒BAR！太平洋を望む南紀白浜温泉の名湯と、クエや伊勢海老の海鮮会席を満喫する贅沢ステイ。',
    heroBadge: '紀州南高梅＆白浜名湯',
    leadTitle: '芳醇な紀州南高梅の香りと白砂のビーチ。海辺の名湯・白浜温泉で過ごす美食時間',
    leadContent: '日本一の梅の里・和歌山県。館内の梅酒BARで数十種類のプレミアム梅酒の飲み比べを楽しんだり、梅の果汁を使った特製スイーツや梅会席を味わう特別な滞在。日本三古湯の一つ・南紀白浜温泉の塩化物泉は保温効果抜群で、湯上がりのお肌もしっとり。白良浜の白い砂浜とコバルトブルーの海を望むリゾートホテルで、極上のリラックスをご堪能ください。',
    features: [
      {
        title: '全国の銘柄が集う「特設梅酒BAR」',
        desc: '熟成梅酒やにごり梅酒、柑橘ブレンドなど多彩な梅酒をテイスティング。'
      },
      {
        title: '紀州南高梅の特製ジュレ＆スイーツ',
        desc: '上品な酸味と甘みが溶け合うパティシエ特製デザートやウェルカムドリンク。'
      },
      {
        title: '歴史ある白浜名湯と太平洋パノラマ露天',
        desc: '波の音を間近に聴きながら浸かるインフィニティ露天風呂。夕暮れのサンセットも格別。'
      }
    ]
  },
  {
    slug: 'organic-forest-cliff-barrel-sauna-stay',
    keyword: 'バレルサウナ 温泉 宿',
    searchQuery: 'バレルサウナ 温泉 宿 絶景',
    title: '【絶壁バレルサウナ】天空の崖上に佇む円形サウナ＆湧水水風呂！息をのむ絶景パノラマ宿5選',
    description: '大自然の断崖や天空の丘に設置された北欧木製バレルサウナ！パノラマガラス越しに広がる大パノラマ、天然湧水の冷水風呂、そして心地よい風に包まれる天空外気浴。唯一無二のととのいを体感できる宿を厳選。',
    heroBadge: '絶壁バレルサウナ＆天空水風呂',
    leadTitle: '木のぬくもりと圧倒的パノラマ。崖の上のバレルサウナで味わう異次元のととのい',
    leadContent: '樽型の形状が生み出す抜群の熱循環と、シダーウッドの心地よいアロマ。断崖絶壁や山頂に設置されたバレルサウナの全面ガラス窓からは、眼下に広がる渓谷や雲海、夕景の絶景が広がります。セルフロウリュで限界まで温まった後は、キンキンに冷えた天然湧水風呂へ。空に浮かんでいるかのようなデッキでの外気浴は、サウナー垂涎の極上体験です。',
    features: [
      {
        title: 'パノラマガラス付き本格木製バレルサウナ',
        desc: '熱が均一に回る円形デザイン。絶景を眺めながらアロマロウリュを堪能。'
      },
      {
        title: '地下から汲み上げる天然湧水かけ流し水風呂',
        desc: 'まろやかな天然水が火照った体を優しく包み込み、抜群のクーリング効果。'
      },
      {
        title: '雲海や満天の星を仰ぐ天空外気浴デッキ',
        desc: 'リクライニングチェアに身を委ね、吹き抜ける山の風に包まれる至高のディープリラックス。'
      }
    ]
  },
  {
    slug: 'traditional-saga-arita-yaki-imari-stay',
    keyword: '嬉野温泉 佐賀牛 旅館',
    searchQuery: '嬉野温泉 佐賀牛 旅館',
    title: '【有田焼・伊万里焼の雅】人間国宝の器で味わう佐賀牛会席！嬉野・武雄の美肌温泉宿5選',
    description: '日本が世界に誇る陶磁器「有田焼」「伊万里焼」の優美な器でいただく、極上佐賀牛のステーキと日本三大美肌の湯！歴史ある嬉野温泉・武雄温泉で、やきものの美と極上肉グルメに浸る大人の温泉旅。',
    heroBadge: '有田焼の器＆佐賀牛美食',
    leadTitle: '有田焼の名陶が彩る最高峰の佐賀牛会席。日本三大美肌の湯・嬉野温泉で過ごす極上休日',
    leadContent: '白磁に鮮やかな絵付けが施された有田焼・伊万里焼。老舗旅館の料理長が器に合わせて仕立てる会席料理は、まさに食べる芸術品です。最高等級A5佐賀牛のとろける旨味と、嬉野名物「温泉湯どうふ」のなめらかな舌触り。入浴後はお肌がつるつるになる重曹泉の美肌湯に癒やされ、歴史と伝統文化の奥深さを五感で楽しむ贅沢なひとときをお過ごしください。',
    features: [
      {
        title: '選び抜かれた「有田焼・伊万里焼」の器',
        desc: '名窯が手がけた器で供される四季折々の料理。目でも楽しめる伝統の器美学。'
      },
      {
        title: '最高峰A5ランク佐賀牛ステーキ＆湯どうふ',
        desc: '美しい霜降り肉のジューシーな旨味と、温泉水でトロトロに溶ける名物湯豆腐。'
      },
      {
        title: '日本三大美肌の湯「嬉野温泉」の重曹泉',
        desc: '化粧水のようなトロトロの湯ざわり。美肌効果抜群の源泉かけ流し温泉。'
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
  console.log('=== Round 37: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round37Configs) {
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

  for (const config of round37Configs) {
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
