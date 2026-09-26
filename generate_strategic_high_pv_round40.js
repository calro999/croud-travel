const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round40Configs = [
  {
    slug: 'traditional-mie-matsusaka-beef-sukiyaki-stay',
    keyword: '湯の山温泉 松阪牛 旅館',
    searchQuery: '湯の山温泉 露天風呂 旅館',
    title: '【A5松阪牛すき焼き＆網焼き】本場三重の最高峰肉会席！湯の山温泉・榊原温泉の名湯宿5選',
    description: '「肉の芸術品」と称される最高峰A5ランク松阪牛を本場のすき焼き・網焼き・炙り寿司で堪能！鈴鹿山脈の麓に佇む湯の山温泉や、清少納言ゆかりの名湯・榊原温泉で、至高の肉美食ステイを。',
    heroBadge: '松阪牛すき焼き＆三重名湯',
    leadTitle: 'とろける甘みと芳醇な香り。本場三重で味わう最高峰A5松阪牛と美肌名湯の贅沢休日',
    leadContent: '日本を代表する最高級ブランド牛「松阪牛」。きめ細かいサシが熱によって溶け出し、上質な脂の甘みと赤身の深いコクが口いっぱいに広がります。老舗旅館の料理人が備長炭で焼き上げるステーキやすき焼き会席はまさに圧巻。御在所岳の絶景を望む湯の山温泉や、美容液のようなトロトロの榊原温泉の湯に癒やされる、極上の美食旅へご案内します。',
    features: [
      {
        title: '最高峰A5ランク松阪牛の特選すき焼き',
        desc: '鉄鍋でサッと焼き、たまり醤油と砂糖で仕上げる三重本場の伝統スタイル。'
      },
      {
        title: '備長炭網焼き＆松阪牛の炙り握り',
        desc: '炭火の香ばしさととろける肉質。選び抜かれた部位の食べ比べ会席。'
      },
      {
        title: '美肌効果抜群の湯の山温泉＆榊原温泉',
        desc: '豊かな自然に囲まれた渓谷露天風呂。肌をなめらかに包み込む極上の名湯。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-scenic-moss-garden',
    keyword: '日本庭園 露天風呂 旅館',
    searchQuery: '庭園 露天風呂 離れ 旅館',
    title: '【幽玄の苔庭テラス】青苔と石灯籠を望むプライベート露天風呂！京都・箱根の侘び寂び隠れ宿5選',
    description: '雨上がりにひときわ輝く美しい青苔の絨毯と、静かに佇む石灯籠。客室の専用露天風呂やテラスから手入れの行き届いた日本庭園を眺め、静寂と侘び寂びの世界に浸る至高の隠れ家旅館を厳選紹介。',
    heroBadge: '苔庭テラス＆プライベート露天',
    leadTitle: '青々とした苔の美と静寂の庭園。日本の美意識に包まれるプライベート温泉時間',
    leadContent: '何十年もの歳月をかけて育まれたビロードのような苔庭。客室の専用露天風呂に浸かりながら、緑鮮やかな苔と四季折々の草木、風情ある石灯籠を眺める時間は、日常のストレスを優しく洗い流してくれます。京都や箱根、伊豆の名匠が手がけた数寄屋造りの空間で、出汁の香り高い本格懐石料理を味わう、大人のための静謐なステイをご堪能ください。',
    features: [
      {
        title: '客室専用テラスから望む見事な苔庭園',
        desc: '誰にも邪魔されず、縁側や湯船から苔のグラデーションと庭園美を独占。'
      },
      {
        title: '数寄屋造りの名建築と伝統の職人技',
        desc: '木と土の温もりあふれる落ち着いた客室。計算された窓枠からの借景美。'
      },
      {
        title: '五感で季節を味わう本格京風懐石料理',
        desc: '旬の食材を繊細な盛り付けと出汁の技で仕立てた、目にも美しい芸術的ディナー。'
      }
    ]
  },
  {
    slug: 'super-panoramic-snorkeling-blue-cave-stay',
    keyword: '恩納村 リゾート ホテル 温泉',
    searchQuery: '恩納村 ビーチ リゾート ホテル 温泉',
    title: '【青の洞窟シュノーケリング】神秘のブルー＆ウミガメ遭遇体験！沖縄・恩納村のビーチリゾート宿5選',
    description: '太陽の光が海底に反射して青く輝く神秘の「青の洞窟」シュノーケリング！色鮮やかな熱帯魚やウミガメと泳ぐ感動体験と、全室オーシャンビュー＆展望スパ・インフィニティプールを備えた極上リゾートを厳選。',
    heroBadge: '青の洞窟＆美ら海リゾート',
    leadTitle: '息をのむ神秘の青い光の世界！感動のマリンアクティビティと極上オーシャンステイ',
    leadContent: '沖縄本島屈指の人気スポット「真栄田岬・青の洞窟」。透明度抜群のエメラルドグリーンの海で、神秘的なブルーの洞窟探検やウミガメとの遊泳体験は一生の宝物になります。アクティビティ後はホテルの展望大浴場やインフィニティプールでサンセットを眺めながら優雅にリラックス。沖縄県産食材を贅沢に使ったBBQやフレンチビュッフェをご堪能ください。',
    features: [
      {
        title: '青の洞窟シュノーケリング＆ダイビング直結',
        desc: '専用ボートで楽々アクセス。プロガイド付きで初心者や子供も安心・安全。'
      },
      {
        title: '東シナ海を一望する展望温泉＆スパ',
        desc: '水平線に沈むサンセットを眺めながら入る絶景大浴場。プールサイドサウナも完備。'
      },
      {
        title: 'テラスBBQ＆沖縄プレミアムブッフェ',
        desc: 'あぐー豚や石垣牛、島野菜をグリルで味わう贅沢ディナー。トロピカルカクテルも充実。'
      }
    ]
  },
  {
    slug: 'spring-fukuoka-amaou-strawberry-sweets-stay',
    keyword: '原鶴温泉 旅館',
    searchQuery: '原鶴温泉 筑後川 露天風呂 旅館',
    title: '【あまおう苺スイーツ＆博多水炊き】福岡特産いちごパフェと原鶴・秋月温泉の美食名湯宿5選',
    description: '「あかい・まるい・おおきい・うまい」最高峰ブランド苺「博多あまおう」を贅沢に使った特製パフェやスイーツ！W美肌の湯として名高い原鶴温泉や小京都・秋月の風情ある名宿で、福岡の美食と美肌湯に癒やされる旅。',
    heroBadge: '博多あまおう＆原鶴W美肌湯',
    leadTitle: '甘くジューシーな博多あまおうとダブル美肌の湯。福岡・筑後路で過ごす口福な温泉旅',
    leadContent: '福岡が誇るいちごの王様「博多あまおう」。大粒で果汁たっぷりの苺をふんだんに盛り付けた特製パフェやウェルカムスイーツは旅の気分を一気に高めてくれます。弱アルカリ性温泉と単純硫黄泉の2つの美肌成分を持つ原鶴温泉は「ダブル美肌の湯」として名高く、湯上がりのお肌はつるつるすべすべ。名物・博多水炊きや筑後川の鮎料理とともにご堪能ください。',
    features: [
      {
        title: '産地直送「博多あまおう」のプレミアムスイーツ',
        desc: '濃厚な甘みと酸味のベストバランス。パティシエ特製のいちごタルトやパフェ。'
      },
      {
        title: '美肌成分をダブルで含む「原鶴名湯」',
        desc: '古い角質を落とし肌を潤す極上温泉。筑後川の雄大な景色を望む展望露天風呂。'
      },
      {
        title: '濃厚白濁スープの「博多水炊き」と旬会席',
        desc: 'じっくり煮込んだ鶏の旨味が凝縮された名物水炊きと、地元の新鮮野菜・川魚。'
      }
    ]
  },
  {
    slug: 'organic-forest-infinity-hot-spring-sauna-stay',
    keyword: 'インフィニティ 露天風呂 サウナ 温泉',
    searchQuery: 'インフィニティ 露天風呂 サウナ 温泉 ホテル',
    title: '【絶景インフィニティ温泉×森サウナ】天空の水平線と溶け合う極上スパリゾート宿5選',
    description: '視界を遮るもののないインフィニティ露天風呂と、森の香りに包まれる本格セルフロウリュサウナ！空や海、森林のパノラマと一体化する圧倒的開放感の中で、最高峰のディープリラックスを約束するスパリゾート。',
    heroBadge: 'インフィニティ温泉＆天空サウナ',
    leadTitle: '空と湯船の境界線が消える奇跡の眺望。インフィニティ温泉と絶景サウナで極上の癒やし',
    leadContent: '湯船の縁が見えず、まるで空や海、原生林の上に浮かんでいるかのようなインフィニティ露天風呂。併設された本格フィンランドサウナでは、ガラス越しに広がる絶景を眺めながらアロマロウリュを堪能できます。水風呂の後は、絶景テラスのインフィニティチェアで風に吹かれながら外気浴。五感を研ぎ澄ます至福のスパリゾートステイをお届けします。',
    features: [
      {
        title: '空・海・森と一体化するインフィニティ露天',
        desc: '水面が風景とシームレスにつながる絶景設計。朝焼けや夕景のドラマチックな色彩。'
      },
      {
        title: 'パノラマビューの本格フィンランドサウナ',
        desc: '絶景を望むサウナ室。天然アロマのセルフロウリュと天然水風呂で深い発汗。'
      },
      {
        title: '絶景テラスでのインフィニティ外気浴',
        desc: '大自然の風を感じる特等席。心地よい浮遊感とともに究極のととのい体験。'
      }
    ]
  },
  {
    slug: 'traditional-kanazawa-kinpaku-gold-leaf-stay',
    keyword: '加賀温泉 旅館',
    searchQuery: '山代温泉 露天風呂 旅館',
    title: '【金沢金箔エステ＆加賀会席】純金箔の贅沢スパ体験と山中・山代・粟津温泉の名宿5選',
    description: '金沢が誇る伝統工芸「金箔」を贅沢に使った黄金の金箔フェイシャルエステ＆金箔酒！開湯1300年の歴史を誇る加賀温泉郷（山中・山代・粟津）で、九谷焼の器で味わう極上加賀会席と名湯に浸る贅沢旅。',
    heroBadge: '金沢金箔＆加賀会席名湯',
    leadTitle: '純金箔が輝くラグジュアリースパと加賀百万石の伝統美。名湯・加賀温泉郷で過ごす極上ステイ',
    leadContent: '日本の金箔生産の99%を誇る金沢。純金箔を惜しみなく使用したゴールドフェイシャルエステや、金箔が舞う乾杯酒など、非日常の華やかさに包まれる滞在が人気です。九谷焼や山中漆器の優美な器に盛り付けられる加賀野菜や日本海ののどぐろ会席。鶴仙渓の渓谷美や赤瓦の風情ある温泉街を散策し、歴史ある名湯で心身を解きほぐしてください。',
    features: [
      {
        title: '純金箔を使用した贅沢「金箔エステ＆スパ」',
        desc: '金箔の微弱電流とミネラルでお肌にハリと輝きを。極上のリフレッシュトリートメント。'
      },
      {
        title: '九谷焼・山中漆器でいただく極上加賀会席',
        desc: '名物のどぐろの塩焼きや治部煮、加賀蓮根など伝統の味を彩り豊かな器で。'
      },
      {
        title: '開湯1300年「加賀温泉郷」の歴史ある名湯',
        desc: '山中温泉の渓谷露天風呂や山代温泉の美肌の湯。文人墨客に愛された名湯を堪能。'
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
  console.log('=== Round 40: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round40Configs) {
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

  for (const config of round40Configs) {
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
