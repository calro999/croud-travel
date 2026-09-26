const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round45Configs = [
  {
    slug: 'traditional-kyoto-ujicha-matcha-sweets-stay',
    keyword: '京都 宇治 嵐山 温泉 旅館',
    searchQuery: '京都 嵐山 温泉 旅館',
    title: '【宇治抹茶スイーツ＆京懐石】老舗茶寮の贅沢甘味と嵐山・東山・宇治の風雅名湯宿5選',
    description: '香り高く濃厚な本場「宇治抹茶パフェ」「特製抹茶フォンデュ」と、洗練された京懐石！嵐山温泉の湯けむりや竹林の小径、東山の歴史ある町並みを散策し、京都の伝統美と茶の湯文化に癒やされる極上の旅。',
    heroBadge: '宇治抹茶スイーツ＆京懐石温泉',
    leadTitle: '石臼挽き宇治抹茶の芳醇な香りと京の美学。老舗の極上甘味と嵐山・東山の風雅ステイ',
    leadContent: '室町時代より続く茶の湯の本場・京都。お宿のラウンジや老舗茶寮で味わう濃厚な挽きたて抹茶、宇治抹茶パフェや出来立てのわらび餅は格別の味わいです。夕食には出汁の風味豊かな京懐石や湯葉・京野菜料理を心ゆくまで堪能。嵐山温泉の肌触り柔らかな名湯に浸かり、渡月橋や竹林の静寂に包まれる上質な休日をお過ごしください。',
    features: [
      {
        title: '老舗茶舗厳選！濃厚「宇治抹茶スイーツ」',
        desc: '石臼挽き抹茶の深いコクと渋み。出来立て抹茶パフェ、わらび餅、抹茶フォンデュ。'
      },
      {
        title: '四季の彩りを映す本格「京懐石＆湯葉料理」',
        desc: '旬の京野菜、生麩、鱧や若鮎など職人技が光る繊細で美しい料理の数々。'
      },
      {
        title: '嵐山温泉の柔らかな湯と静寂の日本庭園',
        desc: '弱アルカリ性の美肌湯。竹林のせせらぎを聴きながらの露天風呂でリフレッシュ。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-scenic-firefly-stream',
    keyword: 'ホタル 露天風呂 温泉 旅館',
    searchQuery: 'ホタル 露天風呂 温泉',
    title: '【初夏のホタル乱舞＆清流露天】客室デッキや庭園から幻想的な光を愛でる名湯宿5選',
    description: '清らかな小川のほとりで優美に光を放つ初夏のホタル！宿の敷地内を流れる小川や客室露天風呂から、闇夜に舞う幻想的なホタルの光を鑑賞できる全国屈指の情緒あふれる温泉宿を厳選紹介。',
    heroBadge: 'ホタル乱舞＆清流露天風呂',
    leadTitle: '暗闇に浮かぶ無数の緑の光。清流のせせらぎとホタルの舞に包まれる初夏の奇跡の夜',
    leadContent: '水と空気が清らかな山あいの温泉地でしか見られない初夏の風物詩「ホタル」。客室テラスや庭園の遊歩道から、淡く光りながら飛び交うゲンジボタルやヘイケボタルの幻想的な光景に心奪われます。湯量豊富な源泉かけ流しの露天風呂に浸かりながら、夜風とともに初夏の涼を味わう贅沢。静寂と光のアートに癒やされる特別な温泉ステイをお届けします。',
    features: [
      {
        title: '敷地内の清流で舞う「幻想的なホタルの光」',
        desc: '初夏限定のプレミアム体験。宿の庭園や専用テラスから眺める天然のイルミネーション。'
      },
      {
        title: '川のせせらぎを聴く源泉かけ流し露天風呂',
        desc: 'マイナスイオンたっぷりの渓流沿い温泉。肌を優しく潤す極上の湯浴み。'
      },
      {
        title: '初夏の味覚！若鮎の塩焼きと地場産山菜会席',
        desc: '香ばしい焼き魚や初夏の山の恵み。地酒とともに味わう郷土の味覚。'
      }
    ]
  },
  {
    slug: 'super-panoramic-lake-canoe-kayak-stay',
    keyword: 'カヌー カヤック 湖 温泉 ホテル',
    searchQuery: 'カヌー 湖 温泉 ホテル',
    title: '【湖上カヌー＆カヤック冒険】富士五湖・中禅寺湖・十和田湖！水上パノラマと絶景温泉宿5選',
    description: '鏡のように静かな湖面を滑るように進むカヌー＆カヤック体験！富士山を望む本栖湖や日光中禅寺湖、大自然広がる十和田湖など、絶景レイクビューと温泉・サウナで非日常のリフレッシュを叶える宿。',
    heroBadge: '湖上カヌー＆レイクビュー温泉',
    leadTitle: 'パドルひと漕ぎで広がる水と空の世界。湖上カヌー体験と絶景レイクサイド温泉リゾート',
    leadContent: '波の静かな湖は、初心者やファミリーでも安心してパドリングが楽しめるウォーターアクティビティの天国。富士山の雄姿を湖上から仰ぐ富士五湖や、原生林に囲まれた中禅寺湖・十和田湖で、鳥の声と水音だけの静謐な時間を体感できます。アクティビティを満喫した後は、湖を一望するインフィニティ温泉露天風呂やレイクサイドサウナで至福のととのいを。',
    features: [
      {
        title: '初心者＆家族大歓迎！湖上カヌー・カヤック体験',
        desc: '安定感抜群のボートと親切なインストラクター。水面ギリギリの絶景パノラマ。'
      },
      {
        title: '湖と一体になるインフィニティレイクビュー露天風呂',
        desc: '夕焼けや朝霧に染まる湖面を眺める極上の湯。弱アルカリ性温泉で肌すべすべ。'
      },
      {
        title: '高原野菜と地元ブランド肉のグリルダイニング',
        desc: '開放的なテラス席で味わうBBQや創作ディナー。地元クラフトビールとともに。'
      }
    ]
  },
  {
    slug: 'spring-mie-matsusaka-beef-ise-lobster-stay',
    keyword: '鳥羽 伊勢志摩 松阪牛 伊勢海老 温泉 旅館',
    searchQuery: '鳥羽 温泉 松阪牛 伊勢海老',
    title: '【極上松阪牛＆伊勢海老会席】伊勢志摩・鳥羽の豪華二大味覚とオーシャンビュー名湯宿5選',
    description: '日本最高峰のブランド和牛「松阪牛」と、プリプリの甘みが弾ける「伊勢海老」！伊勢志摩のリアス海岸を望む絶景展望露天風呂と、三重が誇る贅沢極まりない美食を心ゆくまで堪能する極上宿。',
    heroBadge: '松阪牛＆伊勢海老の豪華共演',
    leadTitle: '海の至宝と陸の王者の贅沢な出逢い。伊勢海老・松阪牛と鳥羽・賢島の美肌温泉ステイ',
    leadContent: '伊勢神宮のお膝元、豊かな海の恵みと肥沃な大地が育んだ日本屈指のグルメ王国・三重。夕食では、プリプリのお造りや香ばしい鬼殻焼きでいただく「伊勢海老」と、きめ細やかなサシがとろける「A5松阪牛」のすき焼きやサーロインステーキをダブルで味わう至高の贅沢。英虞湾や鳥羽湾の青い海を望む絶景露天風呂に浸かり、身も心も満たされる至福の旅へ。',
    features: [
      {
        title: '活伊勢海老のお造り＆香ばしい鬼殻焼き',
        desc: '甘みと弾力ある食感。頭はお味噌汁で余すところなく味わう海の至宝。'
      },
      {
        title: 'A5ランク松阪牛の陶板焼き＆極上すき焼き',
        desc: '芳醇な甘みととろける柔らかさ。特選ダレとこだわり地卵で贅沢に。'
      },
      {
        title: '英虞湾・鳥羽湾を一望する絶景インフィニティ露天',
        desc: '海と空が溶け合うパノラマ。ナトリウム塩化物泉でポカポカ温まる名湯。'
      }
    ]
  },
  {
    slug: 'organic-forest-infinity-panoramic-barrel-sauna-hokkaido',
    keyword: '北海道 バレルサウナ 温泉',
    searchQuery: '北海道 バレルサウナ 温泉',
    title: '【北海道大自然バレルサウナ】十勝・ニセコ・富良野！白樺原生林と極上雪解け湧水水風呂宿5選',
    description: '雄大な北の大地に佇む本格木製バレルサウナ！十勝のアヴァントやニセコの羊蹄山ビュー、富良野の白樺林に囲まれながらのセルフロウリュと、氷点下シングルの天然水風呂・雪ダイブで異次元のととのい体験。',
    heroBadge: '北海道バレルサウナ＆雪解け湧水',
    leadTitle: '果てしない北の大地と白樺の香り。北海道の絶景バレルサウナで味わう本場北欧サウナ体験',
    leadContent: 'サウナの本場・北欧を思わせる北海道の大自然。十勝・ニセコ・富良野エリアに続々誕生しているデザイナーズバレルサウナでは、白樺アロマのロウリュで極上の発汗を楽しめます。サウナから出た後は、大雪山や羊蹄山由来の清らかな天然湧水水風呂や、冬にはパウダースノーへのダイブ外気浴。満天の星空を仰ぎながらのディープリラックスは一生の思い出になります。',
    features: [
      {
        title: '雄大な山並みと白樺林を望む本格バレルサウナ',
        desc: '十勝産カラマツやヒノキを使用。薪ストーブの柔らかな熱とアロマロウリュ。'
      },
      {
        title: '羊蹄山・大雪山の「天然雪解け湧水かけ流し水風呂」',
        desc: '超軟水のまろやかな肌触り。シングル〜14度のキンキンな冷たさ。'
      },
      {
        title: '満天の星空と澄んだ空気を吸い込むウッドデッキ外気浴',
        desc: '北海道ならではの澄み切った空気。静寂に包まれる究極のととのい時間。'
      }
    ]
  },
  {
    slug: 'traditional-ishikawa-kutaniyaki-art-stay',
    keyword: '加賀温泉 九谷焼 旅館',
    searchQuery: '加賀温泉 九谷焼 旅館',
    title: '【九谷焼の鮮やかな器と加賀懐石】五彩の美学！山代・山中・片山津の加賀温泉郷名湯宿5選',
    description: '「ジャパン・クタニ」として世界を魅了する伝統工芸「九谷焼（くたにやき）」！緑・黄・赤・紫・紺青の五彩が美しい器で味わう日本海の極上海鮮会席と、開湯1300年の歴史を誇る加賀温泉郷の名湯に寛ぐ雅な旅。',
    heroBadge: '九谷焼の器＆加賀懐石温泉',
    leadTitle: '鮮やかな五彩の器と日本海の贅。九谷焼のアート空間と加賀温泉郷の名湯で過ごす風雅な休日',
    leadContent: '絢爛豪華な色彩と大胆な絵付けで知られる石川の伝統工芸「九谷焼」。宿の食事処では、人間国宝や気鋭の作家が手掛けた九谷焼の器に、のどぐろ塩焼き、加能ガニ、能登牛などの極上加賀料理が美しく盛られます。北大路魯山人ゆかりの山代温泉や鶴仙渓の山中温泉で、歴史ある美肌の名湯に浸かり、伝統工芸と美食の粋を味わい尽くす大人の休日をお楽しみください。',
    features: [
      {
        title: '人間国宝・名工が手掛ける「九谷焼」の器で楽しむ会席',
        desc: '九谷五彩の鮮やかな色彩美。目でも舌でも味わう芸術的な加賀料理。'
      },
      {
        title: 'のどぐろ・加能ガニ・能登牛の贅沢フルコース',
        desc: '脂がのった高級魚のどぐろ塩焼きや能登牛ステーキなど石川の味覚満載。'
      },
      {
        title: '開湯1300年！山代・山中温泉の源泉かけ流し美肌湯',
        desc: '歴史人や文豪に愛された名湯。総湯の風情と庭園露天風呂で心身を癒やす。'
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
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

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
  console.log('=== Round 45: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round45Configs) {
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

  for (const config of round45Configs) {
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
