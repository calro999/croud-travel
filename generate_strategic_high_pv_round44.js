const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round44Configs = [
  {
    slug: 'traditional-miyagi-sendai-zunda-sweets-stay',
    keyword: '秋保温泉 露天風呂 旅館',
    searchQuery: '秋保温泉 露天風呂 旅館 仙台',
    title: '【仙台ずんだスイーツ＆三陸海鮮】香り高い枝豆スイーツと秋保・作並・松島の名湯宿5選',
    description: '風味豊かな採れたて枝豆を丁寧につぶした名物「ずんだ餅」「ずんだパフェ」と、三陸沖の極上海鮮！開湯1500年の秋保温泉や絶景の松島湾を望む温泉宿で、宮城の伝統スイーツと名湯に癒やされる旅。',
    heroBadge: '仙台ずんだ＆三陸海鮮名湯',
    leadTitle: '鮮やかな緑と芳醇な枝豆の香り。仙台伝統「ずんだ」と奥州名湯・秋保温泉の口福ステイ',
    leadContent: '伊達政宗公の時代から愛される宮城の郷土の味「ずんだ」。お宿のウェルカムスイーツやカフェラウンジで味わう出来立てのずんだ餅、濃厚なずんだシェイクやロールケーキは大好評です。夕食には三陸直送の新鮮なお造りや仙台牛の陶板焼きを堪能。磊々峡（らいらいきょう）の渓谷美を望む秋保温泉の露天風呂に浸かり、心温まる東北の休日をお過ごしください。',
    features: [
      {
        title: '職人仕込みの濃厚「仙台ずんだスイーツ」',
        desc: '枝豆の豊かな風味と程よい甘み。ずんだ餅や特製パフェ、ずんだプリン。'
      },
      {
        title: '三陸直送！鮮度抜群の海の幸会席',
        desc: '金華サバ、気仙沼フカヒレ、三陸鮑など宮城の海が誇る最高峰の味覚。'
      },
      {
        title: '奥州三名湯「秋保温泉」の源泉かけ流し',
        desc: '塩化物泉の温もりと渓谷美。磊々峡のせせらぎを聴く露天風呂でリフレッシュ。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-scenic-hydrangea-deck',
    keyword: '箱根 露天風呂 離れ 旅館',
    searchQuery: '箱根 露天風呂 離れ 旅館 庭園',
    title: '【あじさい咲き乱れる小径】客室専用デッキから愛でる初夏の紫陽花と美肌名湯宿5選',
    description: '青、紫、ピンクと色鮮やかに咲き誇る初夏の紫陽花（あじさい）！客室専用の庭園テラスや露天風呂から、雨露に濡れて美しく輝くあじさいを独占鑑賞できる、風雅で情緒豊かな隠れ宿を厳選紹介。',
    heroBadge: 'あじさい庭園＆初夏客室露天',
    leadTitle: '雨露にきらめく紫陽花と湯けむり。客室専用テラスから愛でる初夏の静謐プライベート温泉',
    leadContent: '梅雨から初夏にかけて見頃を迎える紫陽花。しっとりと濡れた青や紫の花びらが、新緑の庭園に美しいコントラストを描き出します。客室専用の露天風呂に浸かりながら、誰にも邪魔されずあじさいの小径を眺める贅沢。箱根や伊豆、鎌倉近郊の風情ある名旅館で、旬の鮎や夏野菜を取り入れた涼やかな懐石料理とともに、心落ち着く大人の休日をお過ごしください。',
    features: [
      {
        title: '客室専用デッキから望む満開のあじさい庭園',
        desc: '色とりどりの紫陽花に囲まれる特等席。雨の日も風情ある特別な湯浴み。'
      },
      {
        title: '初夏の味覚「若鮎の塩焼き」と涼味会席',
        desc: '香ばしい鮎の塩焼きや、蓴菜（じゅんさい）・夏野菜を使った目にも涼しい料理。'
      },
      {
        title: '肌をなめらかに包む初夏の名湯温泉',
        desc: '弱アルカリ性の美肌湯でリフレッシュ。新緑と花々に包まれる極上の癒やし。'
      }
    ]
  },
  {
    slug: 'super-panoramic-canyon-packrafting-stay',
    keyword: '水上温泉 露天風呂 旅館',
    searchQuery: '水上温泉 露天風呂 旅館',
    title: '【超軽量パックラフト冒険】清流の静水と急流を漕ぎ抜ける！奥多摩・みなかみ渓谷温泉宿5選',
    description: '折りたたんで持ち運べる超軽量ボート「パックラフト」で楽しむ新感覚リバーアクティビティ！エメラルドグリーンの清流を自分のパドルで下った後は、渓谷美を一望する露天風呂とサウナで極上のととのいを。',
    heroBadge: 'パックラフト＆渓流露天風呂',
    leadTitle: '自分の力で清流を漕ぎ進む爽快感！パックラフト冒険と絶景温泉で大自然を遊び尽くす',
    leadContent: 'カヤックよりも安定性が高く、初心者でも簡単に操作できる最新アクティビティ「パックラフト」。穏やかな瀞場（とろば）では水鳥の目線でプカプカ浮かび、瀬ではスリル満点の波越えを体感できます。川下りの後は宿の温泉へ直行し、渓流を望むパノラマ露天風呂やサウナで冷えた体をポカポカに。地元のお肉や採れたて野菜を使ったBBQや郷土料理で大満足の休日を。',
    features: [
      {
        title: '初心者向けパックラフト体験ツアー',
        desc: '公認ガイド付きで安心・安全。装備レンタル完備で手ぶら参加可能。'
      },
      {
        title: '渓谷のマイナスイオンに包まれる露天風呂',
        desc: '川のせせらぎを眼下に望む天然温泉。疲れた筋肉を優しくほぐす名湯。'
      },
      {
        title: '大自然のウッドデッキ外気浴＆サウナ',
        desc: '川風を感じながらのインフィニティチェア外気浴。極上のディープリラックス。'
      }
    ]
  },
  {
    slug: 'spring-yamagata-yonezawa-beef-cherry-stay',
    keyword: '天童温泉 露天風呂 旅館',
    searchQuery: '天童温泉 露天風呂 旅館',
    title: '【A5米沢牛すき焼き＆佐藤錦さくらんぼ】山形名物グルメと小野川・天童・かみのやま温泉宿5選',
    description: '日本三大和牛「米沢牛」のとろける極上すき焼き・ステーキと、初夏の赤い宝石「佐藤錦」さくらんぼスイーツ！将棋の街・天童温泉や美肌のかみのやま温泉で、フルーツ王国山形の美食と名湯を堪能する旅。',
    heroBadge: '米沢牛すき焼き＆佐藤錦スイーツ',
    leadTitle: 'とろけるA5米沢牛と甘酸っぱい完熟佐藤錦。山形が誇る最高峰の味覚と名湯ステイ',
    leadContent: '細やかな霜降りと口溶けの良さで全国に名を馳せる「米沢牛」。料理長特製の割り下で煮込むすき焼きや、炭火で香ばしく焼き上げるサーロインステーキは絶品の極みです。初夏にはルビーのように輝く高級さくらんぼ「佐藤錦」を使った特製デザートを堪能。将棋駒の露天風呂で有名な天童温泉や、蔵王連峰を望むかみのやま温泉で、心満たされる美食の旅をお楽しみください。',
    features: [
      {
        title: '最高峰A5ランク米沢牛の特選すき焼き会席',
        desc: '芳醇な香りと柔らかな肉質。地元産こだわり卵と絡めて味わう至福の一口。'
      },
      {
        title: '旬の山形産「佐藤錦」さくらんぼデザート',
        desc: '甘みと酸味のパーフェクトバランス。パティシエ特製のタルトやジュレ。'
      },
      {
        title: '美肌と温まりの名湯「天童・かみのやま温泉」',
        desc: '豊富に湧き出る美肌の湯。蔵王の山並みを望む展望パノラマ露天風呂。'
      }
    ]
  },
  {
    slug: 'organic-forest-infinity-panoramic-barrel-sauna-stay',
    keyword: 'バレルサウナ 絶景 宿',
    searchQuery: 'バレルサウナ 露天風呂 温泉',
    title: '【絶景ガラス張りバレルサウナ】天空のパノラマビュー＆天然湧水水風呂の温泉宿5選',
    description: '前面が総ガラス張りの最新木製バレルサウナ！サウナ室の中から絶景の山並みや湖、星空を眺めながらのアロマロウリュ。地下水かけ流しの水風呂と天空デッキでの外気浴が自慢の全国屈指のサウナ宿を厳選。',
    heroBadge: 'ガラス張りバレルサウナ＆天空水風呂',
    leadTitle: 'ガラス越しに広がる絶景パノラマ。木の温もりに包まれる最新バレルサウナで極上のととのい',
    leadContent: '樽型サウナの全面にハーフパノラマガラスを配したデザイナーズバレルサウナ。視界いっぱいに広がる大自然のパノラマを眺めながら、天然シダーウッドの香りと熱々のセルフロウリュを堪能できます。火照った体を天然湧水掛け流しの水風呂で引き締め、空に突き出たウッドデッキのインフィニティチェアで外気浴。日常のストレスがすべて消え去る極上の時間をお届けします。',
    features: [
      {
        title: '全面パノラマガラス付き木製バレルサウナ',
        desc: '絶景を眺めながらの発汗体験。熱が効率よく循環する円形デザイン。'
      },
      {
        title: '天然湧水かけ流しのオーバーフロー水風呂',
        desc: '飲めるほど清らかな天然水。肌あたり柔らかく優しいクーリング。'
      },
      {
        title: '雲海や星空を仰ぐ天空ウッドデッキ外気浴',
        desc: '風と鳥の声に包まれるインフィニティチェア。至高のディープリラックス。'
      }
    ]
  },
  {
    slug: 'traditional-nagasaki-hasami-yaki-porcelain-stay',
    keyword: '嬉野温泉 露天風呂 旅館',
    searchQuery: '嬉野温泉 露天風呂 旅館',
    title: '【波佐見焼のモダン器美学】お洒落なうつわで味わう長崎創作フレンチ＆嬉野・雲仙温泉宿5選',
    description: '若手クリエイターにも大人気のモダンな伝統陶磁器「波佐見焼（はさみやき）」！洗練された器に美しく盛り付けられた創作フレンチや長崎和牛、そして嬉野・雲仙の名湯に心癒やされるスタイリッシュな温泉旅。',
    heroBadge: '波佐見焼の器＆創作美食',
    leadTitle: 'モダンで洗練された波佐見焼と長崎創作美食。美肌温泉で過ごす感性豊かな休日',
    leadContent: '400年の歴史を持ちながら、日常に溶け込むモダンなデザインで全国的な人気を集める長崎の「波佐見焼」。カラフルで洗練された器に盛り付けられるのは、長崎近海の新鮮な魚介や長崎和牛を使った創作フレンチやモダン会席。日本三大美肌の湯・嬉野温泉や雲仙の白濁硫黄泉に浸かり、アートと美食、名湯が融合した贅沢なひとときをお過ごしください。',
    features: [
      {
        title: '選び抜かれた「波佐見焼」のモダンな器',
        desc: '北欧デザインにも通じるスタイリッシュなうつわ。料理の色彩を引き立てる演出。'
      },
      {
        title: '長崎和牛と近海魚介の特選創作フレンチ',
        desc: '地元の契約農家野菜と旬の海の幸。シェフが腕を振るう美しいフルコース。'
      },
      {
        title: '日本三大美肌の湯「嬉野温泉」のトロトロ美肌湯',
        desc: '重曹泉の滑らかな湯ざわり。美肌効果抜群の源泉かけ流し露天風呂。'
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
  console.log('=== Round 44: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round44Configs) {
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

  for (const config of round44Configs) {
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
