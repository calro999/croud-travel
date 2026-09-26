const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round34Configs = [
  {
    slug: 'traditional-hiroshima-oyster-anago-gourmet-stay',
    keyword: '宮島 温泉 旅館',
    searchQuery: '宮島 温泉 旅館 牡蠣',
    title: '【2026最新】ぷりぷり広島牡蠣＆極上あなごめし！宮島・瀬戸内海を一望する絶景美食温泉宿5選',
    description: '身が引き締まり旨味が凝縮した極上広島牡蠣の焼き・鍋・フライと、ふっくら香ばしい名物あなごめし！世界遺産・厳島神社を望む宮島や瀬戸内海のオーシャンビュー名湯で味わう至福の美食宿を厳選。',
    heroBadge: '広島牡蠣＆宮島あなご美食',
    leadTitle: '瀬戸内海の旬の恵み「大粒牡蠣」と秘伝ダレ香る「穴子」、絶景オーシャンビューに癒やされる旅',
    leadContent: '穏やかな瀬戸内海と世界遺産・宮島を巡る旅で外せないのが、地元名物の絶品グルメ。濃厚なミルクのような旨味を誇る広島牡蠣を焼き・蒸し・土手鍋・カキフライと様々な調理法で味わい尽くし、ふっくら香ばしく焼き上げた穴子飯を堪能。湯船から瀬戸内の多島美や宮島の大鳥居を望む絶景温泉宿で、心もお腹も満たされる贅沢な休日をお過ごしください。',
    features: [
      {
        title: '旬の大粒広島牡蠣を多彩な料理で',
        desc: '焼き牡蠣、牡蠣グラタン、土手鍋など、料理人が腕を振るう牡蠣尽くしコース。'
      },
      {
        title: '香ばしいタレとふっくら穴子めし',
        desc: '創業以来継ぎ足された秘伝のタレと、口の中でとろける柔らか穴子の絶品ご飯。'
      },
      {
        title: '瀬戸内海・宮島一望の展望露天風呂',
        desc: '朝夕で移り変わる海の青と夕焼けのコントラストを眺めながらの名湯入浴。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-scenic-cherry-blossom-deck',
    keyword: '客室露天 桜 温泉',
    searchQuery: '露天風呂 桜 お花見 温泉',
    title: '【桜花爛漫の特等席】客室露天から愛でる夜桜ライトアップ！春の贅沢お花見温泉宿5選',
    description: '客室専用の露天風呂に浸かりながら、目の前に広がる満開の桜と夜の幻想的なライトアップを独り占め。混雑とは無縁の完全プライベート空間で、春の訪れを五感で楽しむ最高峰のお花見温泉旅館を厳選紹介。',
    heroBadge: '客室露天＆お花見桜絶景',
    leadTitle: '湯けむりの向こうに舞い散る桜吹雪。客室露天風呂から愛でる贅沢なお花見ステイ',
    leadContent: '春の贅沢といえば、客室のプライベート露天風呂から眺める満開の桜。青空に映える淡いピンクの花びらから、夜の幻想的なライトアップまで、誰にも邪魔されず心ゆくまでお花見を満喫できます。湯船に浮かぶ桜の花びらを眺めながら美肌の湯に浸かり、旬の山菜や春の味覚をふんだんに使った桜会席を味わう、極上の春旅をご提案します。',
    features: [
      {
        title: '客室露天から独占する満開の桜並木',
        desc: '誰の目も気にせず、温泉に浸かりながら間近に迫る美しい桜を優雅に鑑賞。'
      },
      {
        title: '幻想的な夜桜ライトアップの演出',
        desc: '闇夜に浮かび上がる夜桜と湯けむりが織りなす、言葉を失うほど幽玄な世界。'
      },
      {
        title: '春の息吹を感じる特選「桜会席」',
        desc: '採れたて山菜の天ぷらや桜鯛のお造りなど、春の味覚を散りばめた華やかな料理。'
      }
    ]
  },
  {
    slug: 'super-panoramic-lake-canoe-kayak-stay',
    keyword: 'カヌー カヤック ホテル 温泉',
    searchQuery: 'カヌー 湖 温泉 リゾート',
    title: '【湖上水上散歩】早朝カヌー＆カヤックで静寂の湖へ！絶景レイクビュー温泉リゾート宿5選',
    description: '鏡のように澄んだ湖面を滑るように進む早朝カヌー＆カヤック体験！静寂に包まれる朝の絶景と、運動後の体を温める天然温泉・レイクビュー露天風呂が自慢の全国屈指の湖畔リゾート宿をご紹介。',
    heroBadge: '湖畔カヌー＆レイクビュー温泉',
    leadTitle: '朝靄に包まれる静寂の湖面をパドリング。大自然の絶景と温泉を味わう湖畔リゾート',
    leadContent: '波ひとつない鏡のような湖面に漕ぎ出すカヌー・カヤック体験。朝の澄んだ空気と水鳥の羽音、周囲の山々が水面に映り込むシンメトリーの絶景は格別です。インストラクター付きの初心者向けツアーや道具レンタルが充実した宿なら、手ぶらで安心してウォーターアクティビティを楽しめます。アクティビティ後は湖を一望する絶景露天風呂で至福のひとときを。',
    features: [
      {
        title: 'ホテル直結・手ぶらカヌー＆カヤック体験',
        desc: '宿の専用桟橋や目の前の湖からすぐに出発。初心者や子供も安全に楽しめるツアー。'
      },
      {
        title: '湖面と一体化するインフィニティ温泉',
        desc: '遮るもののないパノラマレイクビュー。夕暮れのグラデーションに染まる水面を一望。'
      },
      {
        title: '地元の採れたて食材を使った湖畔ダイニング',
        desc: '新鮮な高原野菜や川魚、地元ブランド牛を味わう開放的なレストラン。'
      }
    ]
  },
  {
    slug: 'spring-ehime-setouchi-citrus-spa-stay',
    keyword: '道後温泉 旅館',
    searchQuery: '道後温泉 露天風呂 旅館',
    title: '【愛媛みかん＆柑橘の癒やし】爽やかな生搾り柑橘ジュースと果実風呂！道後温泉の極上癒やし宿5選',
    description: '湯上がりに味わう蛇口から出る生搾りみかんジュースや、甘酸っぱい香りの柑橘露天風呂！日本最古の名湯・道後温泉で、瀬戸内の豊かな恵みと温かいおもてなしに心ほどける極上旅館を厳選紹介。',
    heroBadge: '愛媛みかん＆道後名湯',
    leadTitle: '柑橘の爽やかな香りと日本最古の名湯「道後温泉」、愛媛の豊かな恵みに満たされる癒やし旅',
    leadContent: 'かんきつ王国・愛媛県。伊予柑やポンカン、せとかなど季節ごとの旬の柑橘を浮かべた果実露天風呂は、フレッシュな天然アロマで心身の疲れを優しく解きほぐしてくれます。館内のウェルカムドリンクとして蛇口からみかんジュースが出る体験や、愛媛名物・鯛めしと伊予牛の会席料理など、旅の楽しさが詰まった道後温泉の宿をご案内します。',
    features: [
      {
        title: 'フレッシュな天然アロマ「柑橘露天風呂」',
        desc: 'ビタミンたっぷりの柑橘を贅沢に浮かべた湯船。爽やかな香りで美肌＆リフレッシュ。'
      },
      {
        title: '蛇口からみかんジュース＆柑橘スイーツ',
        desc: '愛媛ならではのおもてなし！濃厚なストレート果汁ジュースや特製デザートを堪能。'
      },
      {
        title: '絶品「愛媛宇和島風鯛めし」と伊予牛会席',
        desc: '新鮮な真鯛を特製タレと卵に絡めていただく名物鯛めしと、とろけるブランド牛。'
      }
    ]
  },
  {
    slug: 'organic-forest-dome-tent-glamping-sauna-stay',
    keyword: 'ドームテント グランピング サウナ 温泉',
    searchQuery: 'ドームテント サウナ 温泉 グランピング',
    title: '【星空ドームテント×テントサウナ】大自然に包まれる贅沢グランピング＆自家源泉温泉宿5選',
    description: '開放感あふれる大型ドームテント、プライベートなテントサウナ＆セルフロウリュ、そして夜空に輝く満天の星！天然温泉の大浴場も併設された、贅沢で快適な最新アウトドアリゾートを厳選紹介。',
    heroBadge: 'ドームテント＆テントサウナ',
    leadTitle: '満天の星と森のプライベートサウナ。快適ドームテントで過ごす贅沢アウトドアステイ',
    leadContent: '冷暖房完備の快適なドームテントに宿泊しながら、ウッドデッキ上で薪テントサウナを完全貸切。アロマ水でのセルフロウリュでたっぷり汗を流し、大自然の風に吹かれての外気浴はまさに格別の開放感です。夜は豪華BBQグリルで地元のお肉や野菜を焼き、敷地内の天然温泉でポカポカに。カップルやグループで最高の思い出が作れるグランピング施設をご紹介します。',
    features: [
      {
        title: '冷暖房完備の快適デザイナーズドームテント',
        desc: 'ホテルのようなベッドと洗練されたインテリア。天窓から星空を眺めて眠る非日常空間。'
      },
      {
        title: '専用デッキで楽しむプライベートテントサウナ',
        desc: '好きなタイミングでロウリュを満喫。森の澄んだ空気と水風呂で極上のととのい。'
      },
      {
        title: '手ぶらで楽しむプレミアムBBQディナー',
        desc: '下準備不要の本格グランピングBBQ。厚切りステーキや地元産チーズ・ワインに舌鼓。'
      }
    ]
  },
  {
    slug: 'traditional-okinawa-yachimun-pottery-stay',
    keyword: '読谷村 リゾート ホテル',
    searchQuery: '読谷村 リゾート ホテル',
    title: '【やちむんの温もり】沖縄伝統の陶器で味わう琉球フレンチ＆美ら海オーシャンビューリゾート宿5選',
    description: 'ぽってりとした温かみのある沖縄伝統陶器「やちむん」に美しく盛り付けられた琉球フレンチや創作料理。読谷村や恩納村のエメラルドグリーンの海を望む極上リゾートで、沖縄の文化と美食に浸る旅を。',
    heroBadge: 'やちむんの器＆美ら海リゾート',
    leadTitle: 'やちむんの器が彩る目にも鮮やかな琉球美食。美ら海の波音に包まれる大人の沖縄リゾート',
    leadContent: '沖縄の豊かな土と職人の手によって生まれる伝統工芸「やちむん（焼き物）」。工房が立ち並ぶ読谷村をはじめとするリゾートホテルでは、作家の一点物の器に旬の島野菜やあぐー豚、近海魚をアーティスティックに盛り付けたコース料理が楽しめます。全室オーシャンビューのバルコニーやインフィニティプールから夕日を眺め、沖縄の深い魅力と癒やしに浸りましょう。',
    features: [
      {
        title: '職人手作りの「やちむん」で味わう美食コース',
        desc: '色彩豊かな器とモダンな琉球フレンチ・創作会席が織りなす五感で楽しむディナー。'
      },
      {
        title: '美ら海を一望するパノラマオーシャンビュー',
        desc: 'バルコニーから眺めるどこまでも青い東シナ海と、水平線に沈む息をのむ夕日。'
      },
      {
        title: 'やちむんの里散策＆陶芸絵付け体験',
        desc: '窯元巡りや自分だけの器作り体験など、沖縄の伝統文化に深く触れるアクティビティ。'
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
  console.log('=== Round 34: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round34Configs) {
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

  for (const config of round34Configs) {
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
