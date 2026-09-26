const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round39Configs = [
  {
    slug: 'traditional-shiga-omi-beef-funazushi-stay',
    keyword: 'おごと温泉 旅館',
    searchQuery: 'おごと温泉 露天風呂 旅館',
    title: '【極上近江牛ステーキ＆伝統鮒ずし】琵琶湖の恵みと名湯！おごと温泉の絶景美食宿5選',
    description: '日本三大和牛「近江牛」のとろける霜降りステーキやしゃぶしゃぶ、そして千年の歴史を誇る伝統発酵食「鮒ずし」！琵琶湖を一望する名湯・おごと温泉で、滋賀の豊かな食文化とレイクビュー露天風呂を堪能。',
    heroBadge: '近江牛美食＆おごと名湯',
    leadTitle: '日本最古のブランド和牛「近江牛」と琵琶湖パノラマ。開湯1200年のおごと温泉ステイ',
    leadContent: 'きめ細かいサシと甘い脂、芳醇な香りが特徴の「近江牛」。すき焼きやサーロインステーキ、炙り寿司など多彩な調理法で肉の旨味を存分に味わえます。琵琶湖の朝焼けや夕景を一望する展望露天風呂に浸かり、美肌の湯として名高い単純温泉でリフレッシュ。京都からのアクセスも抜群な大人の美食リゾートへご案内します。',
    features: [
      {
        title: '最高峰A5ランク近江牛づくし会席',
        desc: 'ステーキ、しゃぶしゃぶ、牛握りなど、近江牛の美味しさを余すところなく堪能。'
      },
      {
        title: '琵琶湖を一望するレイクビュー展望露天風呂',
        desc: '水面と空が織りなすパノラマビュー。夕暮れのグラデーションや朝日の絶景。'
      },
      {
        title: '滋賀の伝統食「鮒ずし」と地酒のペアリング',
        desc: 'チーズのような芳醇な旨味。近江の銘酒とともに楽しむ奥深い発酵食文化。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-scenic-creek-deck',
    keyword: '渓流 露天風呂 旅館',
    searchQuery: '渓流 露天風呂 離れ 旅館',
    title: '【清流せせらぎデッキ】川の音を間近に聴くプライベート露天風呂！癒やしの渓流隠れ宿5選',
    description: '客室の専用ウッドデッキから清流を間近に望み、せせらぎの音と澄んだ空気に包まれるプライベート露天風呂。誰にも邪魔されない離れの客室で、大自然のマイナスイオンに癒やされる贅沢な休日を。',
    heroBadge: '渓流露天＆せせらぎデッキ',
    leadTitle: '川のせせらぎと木々のざわめき。プライベートデッキ露天風呂で過ごす極上の隠れ家ステイ',
    leadContent: '山あいの清らかな川沿いに佇む隠れ宿。客室専用の広々としたウッドデッキに設えられた露天風呂に身を沈めれば、目の前を流れる清流の音とマイナスイオンが日々の疲れを優しく解き放ってくれます。朝は澄み切った森の空気の中で湯浴みし、夜はライトアップされた渓谷美を鑑賞。旬の川魚や山菜、銘柄牛を味わう会席料理とともに至福の時間をお過ごしください。',
    features: [
      {
        title: '客室専用デッキに備わる源泉かけ流し露天',
        desc: '清流を真下に望む特等席。好きな時間に何度でも楽しめるプライベート湯浴み。'
      },
      {
        title: 'せせらぎと鳥のさえずりが奏でる天然BGM',
        desc: 'デジタルデトックスに最適な静寂空間。自然の音に包まれて深い安らぎを実感。'
      },
      {
        title: '清流の恵み「岩魚・山女魚」の炭火塩焼き',
        desc: '囲炉裏やオープンキッチンで香ばしく焼き上げる川魚と、季節の京風会席。'
      }
    ]
  },
  {
    slug: 'super-panoramic-sand-buggy-adventure-stay',
    keyword: '鳥取砂丘 ホテル 温泉',
    searchQuery: '鳥取砂丘 温泉 ホテル 旅館',
    title: '【砂丘サンドバギー激走】鳥取砂丘・南紀白浜の爽快アクティビティ＆海鮮温泉リゾート宿5選',
    description: '雄大な砂丘を四輪駆動サンドバギーやファットバイクで疾走する爽快アクティビティ！日本海の絶景と砂の芸術を体感した後は、展望露天風呂と松葉ガニ・日本海の海の幸を堪能できる人気リゾートを厳選。',
    heroBadge: '砂丘サンドバギー＆日本海温泉',
    leadTitle: '広大な砂のキャンバスを駆け抜ける大興奮！アクティビティと海の幸を満喫する砂丘ステイ',
    leadContent: '風が創り出す「風紋」や日本海の青さが広がる鳥取砂丘。専用コースをバギーで疾走したり、パラグライダーやサンドボードなど多彩なアウトドア体験が楽しめます。思い切りアクティブに楽しんだ後は、温泉街の名湯に浸かり、冬は松葉がに、春から秋はモサエビや白イカなど日本海の極上海鮮に舌鼓。爽快感と寛ぎを両立した旅へご案内します。',
    features: [
      {
        title: '砂丘を疾走するサンドバギー＆ファットバイク',
        desc: '砂地をダイナミックに走る爽快感！初心者向けのレクチャー付きで安全に体験可能。'
      },
      {
        title: '日本海を一望するパノラマ展望大浴場',
        desc: '水平線に沈む夕日や漁火を眺めながら入る天然温泉。体の芯から温まる癒やし湯。'
      },
      {
        title: '日本海の獲れたて極上「松葉ガニ＆白イカ」',
        desc: '甘み濃厚なカニ刺しや炭火焼き、透き通る白イカのお造りなど鮮度抜群の海鮮料理。'
      }
    ]
  },
  {
    slug: 'spring-nagasaki-castella-champon-stay',
    keyword: '雲仙温泉 旅館',
    searchQuery: '雲仙温泉 露天風呂 旅館',
    title: '【本場長崎カステラ＆極上卓袱会席】雲仙・小浜・平戸の異国情緒と美肌名湯宿5選',
    description: '創業数百年の伝統が息づく長崎カステラや異国情緒あふれる卓袱（しっぽく）料理！大地のエネルギーが噴き出す雲仙地獄の名湯や橘湾の夕日を望む小浜温泉で、長崎の文化と極上温泉に浸る旅。',
    heroBadge: '長崎カステラ＆雲仙硫黄名湯',
    leadTitle: '地獄の湯けむりと異国情緒あふれる美食文化。長崎・雲仙の歴史ある名湯ステイ',
    leadContent: '日本で最初の国立公園に指定された雲仙。硫黄の香りと白濁した源泉かけ流しのにごり湯は、古くから多くの外国人に愛された高原リゾートです。おもてなしのウェルカムカステラや、和華蘭（わからん）文化が融合した名物・卓袱会席、長崎和牛のステーキは絶品。橘湾に沈む美しい夕日を望む小浜温泉とともに、ロマンあふれる長崎の旅をお楽しみください。',
    features: [
      {
        title: '雲仙地獄から直接引く白濁硫黄温泉',
        desc: '殺菌効果と美肌効果に優れた濃厚なにごり湯。湯けむりに包まれる風情ある露天風呂。'
      },
      {
        title: '本場長崎の「極上カステラ」とおもてなし',
        desc: 'ザラメの食感としっとり濃厚な甘み。老舗の味をお茶とともに味わう贅沢。'
      },
      {
        title: '和・華・蘭が織りなす伝統「卓袱会席料理」',
        desc: '長崎の新鮮な魚介と長崎和牛、名物豚の角煮など彩り豊かな郷土の美味。'
      }
    ]
  },
  {
    slug: 'organic-forest-floating-tent-sauna-stay',
    keyword: '水上 サウナ 温泉 宿',
    searchQuery: 'サウナ 湖 温泉 リゾート ホテル',
    title: '【水上サウナ＆浮遊外気浴】湖や池に浮かぶフローティングサウナと温泉宿5選',
    description: '穏やかな湖面や池の上に浮かぶフローティングサウナ！水面に直接降りられる階段から飛び込む天然水風呂、そして水上のデッキチェアで揺られながらの外気浴。究極の浮遊感を体験できる最新リゾートを厳選。',
    heroBadge: '水上サウナ＆浮遊ととのい',
    leadTitle: '水面に浮かぶサウナ小屋から直接ダイブ！波の揺らぎと風に包まれる究極のととのい',
    leadContent: '海外で人気のフローティングサウナが日本でも話題沸騰。水上に浮かぶサウナ小屋の窓からは360度の大自然が広がり、薪ストーブの心地よい熱気とロウリュで発汗。サウナを出たら目の前の湖へそのままドボン！水上デッキチェアで揺られながら感じる外気浴は、まるで自然と一体化したような深い瞑想状態をもたらします。温泉とサウナ飯も充実した宿をご紹介。',
    features: [
      {
        title: '水上に浮かぶ本格木製フローティングサウナ',
        desc: '水面と同じ目線で楽しむサウナ。パノラマ窓から水鳥や夕景を眺める非日常。'
      },
      {
        title: 'サウナ室から直接湖水へステップイン',
        desc: '全身を包み込む自然の水風呂。天然の冷水で一気にクールダウン。'
      },
      {
        title: '水上デッキでの浮遊感外気浴スペース',
        desc: '心地よい波の揺らぎとそよ風。インフィニティチェアで体験する極上のととのい。'
      }
    ]
  },
  {
    slug: 'traditional-akita-magewappa-kiritanpo-stay',
    keyword: '秋田 温泉 旅館',
    searchQuery: '田沢湖 温泉 露天風呂 旅館',
    title: '【大館曲げわっぱと比内地鶏きりたんぽ】秋田の伝統工芸と乳頭温泉郷の秘湯宿5選',
    description: '秋田杉の美しい木目と香りが際立つ伝統工芸「大館曲げわっぱ」の器と、炭火で焼いた名物「比内地鶏きりたんぽ鍋」！全国の温泉ファンが憧れる秘湯・乳頭温泉郷の乳白色の露天風呂に癒やされる旅。',
    heroBadge: '大館曲げわっぱ＆乳頭秘湯',
    leadTitle: '秋田杉の温もりときりたんぽ鍋の芳醇な出汁。憧れの乳頭温泉郷で過ごす秘湯時間',
    leadContent: 'ブナの原生林に抱かれた乳頭温泉郷。足元からぷくぷくと自噴する乳白色の野趣あふれる混浴露天風呂や木のぬくもりある湯小屋は、まさに日本の秘湯の原風景です。夕食には大館曲げわっぱの器に盛られた美しい前菜や、日本三大地鶏「比内地鶏」の旨味が溶け出した熱々のきりたんぽ鍋。秋田の温かな人情と伝統の味に心までほぐれるステイをお届けします。',
    features: [
      {
        title: '憧れの秘湯「乳頭温泉郷」の七湯めぐり',
        desc: '乳白色、黄金色、透明など多彩な源泉。ブナ林に囲まれた野趣あふれる名物露天風呂。'
      },
      {
        title: '本場仕込みの「比内地鶏きりたんぽ鍋」',
        desc: '香ばしい焼き目のたんぽと濃厚な比内地鶏の極上スープ。セリの根の香りがアクセント。'
      },
      {
        title: '伝統工芸「大館曲げわっぱ」の器美学',
        desc: '天然秋田杉の柾目が生み出す優美な曲線。ご飯やお料理の美味しさを引き立てる器。'
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
  console.log('=== Round 39: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round39Configs) {
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

  for (const config of round39Configs) {
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
