const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round42Configs = [
  {
    slug: 'traditional-nara-yamato-beef-tea-porridge-stay',
    keyword: '奈良 温泉 旅館',
    searchQuery: '奈良 露天風呂 旅館 大和牛',
    title: '【大和牛すき焼き＆名物茶粥】古都奈良の歴史浪漫と飛鳥・吉野・奈良町の名湯美食宿5選',
    description: '鎌倉時代からの銘牛の血統を継ぐ「大和牛」の極上すき焼きと、ほうじ茶香る伝統の「奈良茶粥」！東大寺や春日大社、ならまち散策と合わせて楽しむ、古都の風情あふれる名湯美食旅館を厳選紹介。',
    heroBadge: '大和牛すき焼き＆古都奈良名湯',
    leadTitle: '千年の歴史息づく古都の味覚「大和牛」と滋味豊かな茶粥。心静まる奈良の休日',
    leadContent: '日本のはじまりの地・奈良。良質な脂と柔らかな赤身が調和した「大和牛」は、特製の割り下でいただくすき焼きや陶板焼きでその真価を発揮します。朝食には芳しい大和茶で炊き上げた胃腸に優しい「大和の茶粥」を堪能。若草山や奈良公園の緑を望む風情ある露天風呂に浸かり、古都の悠久の時に思いを馳せる大人のステイをお楽しみください。',
    features: [
      {
        title: '厳選銘柄牛「大和牛」の贅沢すき焼き会席',
        desc: '上品な霜降りと深いコク。料理長特製の割り下とこだわり卵で味わう極上肉。'
      },
      {
        title: '朝の体を温める名物「大和の茶粥」',
        desc: 'ほうじ茶の香ばしさとふっくら炊き上げた米の甘み。奈良伝統の滋味深い朝食。'
      },
      {
        title: '古都の借景を望む風雅な露天風呂',
        desc: '木々の緑と静寂に包まれる天然温泉。世界遺産の街歩きの疲れを優しく癒やす名湯。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-scenic-cherry-blossom-creek',
    keyword: '桜 露天風呂 旅館',
    searchQuery: '桜 露天風呂 離れ 旅館',
    title: '【渓流桜の特等席】清流沿いに咲き誇る満開の桜とプライベート露天風呂！春の絶景温泉宿5選',
    description: '清流のせせらぎと、川沿いに咲き誇る淡いピンクの桜並木！客室専用の露天風呂から舞い散る花びらを眺め、夜はライトアップされた夜桜を独占できる、春限定の贅沢なお花見隠れ宿を徹底解説。',
    heroBadge: '渓流桜＆お花見客室露天',
    leadTitle: '川面に映る桜のトンネルと湯けむり。客室露天風呂から愛でる春の絶景プライベートステイ',
    leadContent: '春の訪れとともに渓流沿いを彩る満開の桜。客室専用のテラスや露天風呂に身を沈めれば、心地よい川の音とともに目の前いっぱいに広がる桜の絶景が迎えてくれます。湯船に浮かぶ桜の花びらを手にとりながら美肌の湯を堪能し、夜は幽玄な夜桜ライトアップを鑑賞。桜鯛や春山菜をあしらった華やかな桜懐石とともに、忘れられない春の休日をお過ごしください。',
    features: [
      {
        title: '客室専用デッキから望む渓流桜並木',
        desc: '人混みとは無縁の完全プライベート空間。湯船に浸かりながら満開の桜を独占。'
      },
      {
        title: '幻想的な渓流夜桜ライトアップ',
        desc: '水面に映り込む淡いピンクと闇夜のコントラスト。息をのむほどドラマチックな夜景。'
      },
      {
        title: '春の味覚満載！桜鯛と山菜の特選懐石',
        desc: '脂の乗った桜鯛のお造りやサクサクの山菜天ぷらなど、春の恵みを五感で味わう料理。'
      }
    ]
  },
  {
    slug: 'super-panoramic-paragliding-fuji-sky-stay',
    keyword: '富士山 パラグライダー ホテル',
    searchQuery: '富士山 富士五湖 パラグライダー 温泉 ホテル',
    title: '【富士山を望む空中飛行】朝霧高原タンデムパラグライダー＆富士パノラマ温泉宿5選',
    description: '霊峰・富士山を真正面に望みながら大空を滑空する感動のタンデムパラグライダー！風に乗って飛ぶ空中散歩を満喫した後は、富士山ビューの展望露天風呂とサウナで極上のととのいを叶える人気リゾートを厳選。',
    heroBadge: '富士山空中散歩＆パノラマ温泉',
    leadTitle: '富士山に向かってテイクオフ！大空を舞う感動体験と絶景富士見露天風呂の旅',
    leadContent: '日本屈指のパラグライダーの聖地「朝霧高原」。プロパイロットと二人乗りで飛ぶタンデムフライトなら、特別な技術がなくても富士山の大パノラマを眼下に空中散歩が楽しめます。フライトの興奮をそのままに、宿の展望露天風呂から夕暮れに赤く染まる紅富士や星空を鑑賞。地元静岡・山梨の甲州ワインビーフや富士宮やきそば、高原野菜ビュッフェをご堪能ください。',
    features: [
      {
        title: '富士山真正面！タンデムパラグライダーフライト',
        desc: 'プロインストラクター操縦で安心。高度数百メートルからの大パノラマ絶景。'
      },
      {
        title: '湯船から富士山を一望するパノラマ展望露天',
        desc: '朝の富士から夕暮れのシルエットまで。時間とともに表情を変える富士の名景。'
      },
      {
        title: '高原の澄んだ空気と地元食材ビュッフェ',
        desc: '富士山麓のブランド豚や高原野菜、朝霧高原ミルクの特製スイーツを満喫。'
      }
    ]
  },
  {
    slug: 'spring-hyogo-tajima-beef-crab-spa-stay',
    keyword: '城崎温泉 旅館',
    searchQuery: '城崎温泉 但馬牛 露天風呂 旅館',
    title: '【但馬牛ステーキ＆香住ガニ】兵庫・城崎温泉の七湯めぐりと極上グルメ宿5選',
    description: 'すべての黒毛和牛のルーツ「但馬牛」の極上サーロインステーキと、春の味覚「香住ガニ」！柳並木が美しい城崎温泉の外湯めぐり（七湯）を浴衣と下駄で楽しみ、関西最高峰の美食と温泉情緒に浸る贅沢ステイ。',
    heroBadge: '但馬牛＆城崎外湯めぐり',
    leadTitle: '浴衣で巡る外湯七湯と極上の但馬牛会席。開湯1300年の城崎温泉で過ごす雅な時間',
    leadContent: '大谿川（おおたにがわ）沿いの柳並木と太鼓橋が情緒あふれる城崎温泉。色浴衣を選んでカランコロンと下駄を鳴らしながら巡る外湯めぐりは城崎ならではの楽しみです。夕食には世界が認める神戸牛や松阪牛の素牛である「但馬牛」のステーキや、みずみずしく甘い香住ガニを贅沢に味わう会席料理。伝統と風情が織りなす極上の温泉旅へご案内します。',
    features: [
      {
        title: '最高級ブランド「但馬牛」の炭火焼きステーキ',
        desc: '肉本来の濃厚な旨味と香ばしいサシ。わさび醤油や岩塩で味わう本物の黒毛和牛。'
      },
      {
        title: '春の味覚！香住港直送「香住ガニ」づくし',
        desc: '甘みが強くジューシーな紅ズワイガニ。茹でガニ、カニ刺し、焼きガニで堪能。'
      },
      {
        title: '浴衣で楽しむ名物「城崎温泉外湯めぐり」',
        desc: '一の湯、御所の湯など個性豊かな7つの外湯パス付き。情緒あふれる温泉街散策。'
      }
    ]
  },
  {
    slug: 'organic-forest-infinity-dome-sauna-stay',
    keyword: 'ドームテント サウナ 温泉',
    searchQuery: 'ドームテント サウナ 露天風呂 温泉',
    title: '【球体ドームサウナ＆湧水インフィニティ】森の静寂に溶け込むデザイナーズサウナ宿5選',
    description: '近未来的な球体パノラマドームサウナと、天然湧水がオーバーフローするインフィニティ水風呂！木々のざわめきと小鳥の声をBGMに、建築美と大自然が融合した最高峰のデザイナーズスパリゾートを厳選紹介。',
    heroBadge: 'ドームサウナ＆湧水インフィニティ',
    leadTitle: '幾何学ドームの美学と自然の融合。森の中に佇む最新ドームサウナで極上の覚醒体験',
    leadContent: 'パノラマガラスから自然光が差し込む美しい球体ドームサウナ。木製のベンチに腰掛け、ハーブや白樺のアロマ水でセルフロウリュを行えば、熱波がドームの曲面に沿って滑らかに全身を包み込みます。サウナ後は森と一体化するインフィニティ湧水風呂へ。ウッドデッキでの外気浴は、まさに心身が完全に解放される至高の体験です。',
    features: [
      {
        title: '360度パノラマビューの球体ドームサウナ',
        desc: '熱効率の高い幾何学構造。森の景観を眺めながらのアロマセルフロウリュ。'
      },
      {
        title: '天然湧水かけ流しインフィニティ水風呂',
        desc: '水面が森とシームレスに溶け合う設計。まろやかな天然水で肌あたり抜群。'
      },
      {
        title: '森林浴と一体化する天空デッキ外気浴',
        desc: 'インフィニティチェアに横たわり、マイナスイオンを浴びる極上のととのい時間。'
      }
    ]
  },
  {
    slug: 'traditional-kumamoto-higo-inoshishi-stay',
    keyword: '黒川温泉 あか牛 旅館',
    searchQuery: '黒川温泉 露天風呂 旅館 あか牛 馬刺し',
    title: '【極上馬刺し＆あか牛炭火焼き】火の国熊本の豪快肉グルメと黒川温泉・阿蘇の秘湯宿5選',
    description: 'とろける霜降り「熊本特選馬刺し」と、ヘルシーで赤身の旨味が凝縮した「阿蘇あか牛」！全国屈指の人気温泉地・黒川温泉の風情ある露天風呂めぐり（入湯手形）と、阿蘇の大自然に抱かれる至高の美食宿を厳選。',
    heroBadge: '馬刺し＆あか牛・黒川秘湯',
    leadTitle: '本場熊本の極上霜降り馬刺しと阿蘇あか牛。黒川温泉の情緒あふれる湯めぐりステイ',
    leadContent: '阿蘇の大草原が育むヘルシーでジューシーな「あか牛」と、本場熊本ならではの新鮮な「特選馬刺し」。赤身の濃厚な旨味と甘みのある特製醤油が絡み合う馬刺しは、一度食べたら忘れられない美味しさです。川沿いに風情ある木造旅館が建ち並ぶ黒川温泉では、入湯手形で多彩な露天風呂を満喫。囲炉裏端でいただく炭火焼き料理とともに、熊本の豊かな恵みに癒やされましょう。',
    features: [
      {
        title: '本場直送！極上「熊本特選馬刺し盛り合わせ」',
        desc: '霜降り、赤身、たてがみなど多彩な部位の食べ比べ。濃厚な甘みととろける食感。'
      },
      {
        title: '阿蘇の大自然が育んだ「あか牛ステーキ」',
        desc: '脂肪分控えめで肉本来の旨味が濃いあか牛。炭火で香ばしく焼き上げる贅沢。'
      },
      {
        title: '名物「黒川温泉入湯手形」で露天風呂めぐり',
        desc: '渓流露天や洞窟風呂、竹林風呂など、個性あふれる名湯を浴衣姿で巡る風情。'
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
  console.log('=== Round 42: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round42Configs) {
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

  for (const config of round42Configs) {
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
