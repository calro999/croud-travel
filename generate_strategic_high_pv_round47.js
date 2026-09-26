const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round47Configs = [
  {
    slug: 'traditional-kagoshima-kurobuta-shabushabu-stay',
    keyword: '指宿 温泉 旅館',
    searchQuery: '指宿 温泉 旅館',
    title: '【極上かごしま黒豚しゃぶしゃぶ＆砂むし温泉】指宿・霧島の美肌湯と鹿児島美食宿5選',
    description: 'きめ細やかな肉質と上品な甘みを持つ最高峰「かごしま黒豚」のしゃぶしゃぶ！世界唯一の天然砂むし温泉で知られる指宿や、坂本龍馬ゆかりの霧島温泉郷で、鹿児島の滋味あふれる美味と名湯を満喫する旅。',
    heroBadge: '黒豚しゃぶしゃぶ＆砂むし温泉',
    leadTitle: 'とろける黒豚の甘みと天然砂むしの温もり。薩摩の美食と名湯に癒やされる鹿児島ステイ',
    leadContent: 'サツマイモを食べて育った「かごしま黒豚」は、脂身のさっぱりとした甘みと柔らかな食感が自慢のブランド肉。宿自慢の特製出汁にくぐらせるしゃぶしゃぶや、とろとろの角煮は一度食べたら忘れられない美味しさです。波打ち際で温かい砂に包まれる指宿の天然砂むし温泉や、湯けむり立ち上る霧島の硫黄泉でデトックス。きびなごや地鶏刺し、本格芋焼酎とともに贅沢な夜をお過ごしください。',
    features: [
      {
        title: '極上の旨味と甘み「かごしま黒豚しゃぶしゃぶ」',
        desc: '特製出汁とポン酢で味わう最高峰の豚肉。脂の甘みと柔らかな肉質が絶品。'
      },
      {
        title: '世界屈指のデトックス体験「天然砂むし温泉」',
        desc: '波の音を聴きながら温砂に包まれる至福。全身の血行を促進し美肌へ。'
      },
      {
        title: '霧島連峰と錦江湾を望むパノラマ展望温泉',
        desc: '乳白色の硫黄泉や塩化物泉。大自然の絶景を眼下に望む開放的な湯浴み。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-scenic-cherry-blossom-deck',
    keyword: '露天風呂 離れ 温泉 旅館',
    searchQuery: '露天風呂 離れ 温泉 旅館',
    title: '【客室専用お花見露天風呂】舞い散る桜を湯船から独占！春限定の極上プライベート温泉宿5選',
    description: '満開の桜並木や庭園のしだれ桜を客室露天風呂から独り占め！湯面に浮かぶ桜の花びらと心地よい春風に包まれながら、誰にも気兼ねなく花見酒と旬の春会席を楽しめる贅沢な隠れ宿。',
    heroBadge: 'お花見客室露天＆春の懐石',
    leadTitle: '湯船に舞い落ちる桜の花びら。客室専用テラスから愛でる春爛漫のプライベート温泉',
    leadContent: '春の訪れとともに美しく咲き誇る桜。客室専用の露天風呂に浸かりながら、手の届きそうな距離に咲く満開の桜を眺める時間は、まさに究極の贅沢です。夜には幻想的にライトアップされた夜桜が湯面に映り込み、ドラマチックな春の夜を演出。桜鯛や筍、山菜など春の息吹を感じる華やかな懐石料理とともに、心華やぐ特別な休日をお過ごしください。',
    features: [
      {
        title: '客室露天から望む満開のしだれ桜＆夜桜ライトアップ',
        desc: '誰にも邪魔されない特等席。桜吹雪の中で楽しむ贅沢な花見風呂。'
      },
      {
        title: '春の恵みを味わう「桜鯛と朝掘り筍の会席料理」',
        desc: '脂がのった桜鯛のお造りや筍の炭火焼き。目にも鮮やかな春の美味。'
      },
      {
        title: '肌を優しく潤す弱アルカリ性の美肌温泉',
        desc: '春の乾燥しがちな肌を滑らかに包み込む源泉かけ流しの名湯。'
      }
    ]
  },
  {
    slug: 'super-panoramic-canyon-bungee-jumping-stay',
    keyword: 'みなかみ 温泉 露天風呂 旅館',
    searchQuery: 'みなかみ 温泉 露天風呂 旅館',
    title: '【絶景バンジー＆渓谷アドベンチャー】日本屈指の高さから大ジャンプ！みなかみ温泉宿5選',
    description: 'エメラルドグリーンの渓谷に向かって飛び込むスリル満点バンジージャンプ！アドレナリン全開のアクティビティを体験した後は、利根川源流のせせらぎを聴く露天風呂とサウナで極上のととのいを。',
    heroBadge: '渓谷バンジー＆源流露天風呂',
    leadTitle: '大自然の渓谷へ飛び込む究極の解放感！絶叫アクティビティと名湯みなかみ温泉ステイ',
    leadContent: '高さ数十メートルの橋から大自然の渓谷へ飛び出すバンジージャンプは、一生の思い出になる究極のアドベンチャー。みなかみの雄大な山々と清流を全身で体感した後は、心地よい疲労感とともに天然温泉へ直行。利根川の渓流を眼下に望む露天風呂やウッドデッキサウナで体を芯から温め、上州牛ステーキや地元きのこ鍋など群馬の豊かな味覚を堪能しましょう。',
    features: [
      {
        title: 'スリル満点！日本有数の渓谷バンジージャンプ体験',
        desc: 'プロインストラクターによる安心のサポート。非日常の絶景フライト。'
      },
      {
        title: '渓流のせせらぎとマイナスイオン溢れる露天風呂',
        desc: 'みなかみ十八湯の豊かな恵み。筋肉の疲れを優しくほぐす名湯。'
      },
      {
        title: '上州牛の陶板焼き＆奥利根の山の恵み会席',
        desc: '柔らかなブランド牛と地元産採れたて野菜。心温まる郷土の味覚。'
      }
    ]
  },
  {
    slug: 'spring-saga-imari-beef-takeo-onsen-stay',
    keyword: '武雄温泉 露天風呂 旅館',
    searchQuery: '武雄温泉 露天風呂 旅館',
    title: '【極上A5伊万里牛＆武雄温泉美肌湯】1300年の名湯と佐賀の最高峰グルメを堪能する名宿5選',
    description: '澄んだ空気と清らかな水が育んだ最高級黒毛和牛「伊万里牛」！辰野金吾設計の楼門で有名な歴史ある武雄温泉のトロトロ美肌湯と、佐賀牛・伊万里牛の極上ステーキに舌鼓を打つ雅な九州温泉旅。',
    heroBadge: 'A5伊万里牛＆武雄温泉美肌湯',
    leadTitle: 'とろける極上のサシと1300年の美肌湯。歴史の街・武雄温泉で味わう佐賀の最高峰ステイ',
    leadContent: '宮本武蔵やシーボルトも浸かったとされる名湯「武雄温泉」。弱アルカリ性のぬめりあるお湯は「美肌の湯」として名高く、湯上がりの肌をしっとりと包み込みます。夕食には、きめ細やかな霜降りと上品な甘みが特徴の「A5ランク伊万里牛・佐賀牛」の炭火焼きや陶板焼きをご用意。有明海産の竹崎カニや地元のブランド米とともに、至高の九州美食をご堪能ください。',
    features: [
      {
        title: '口溶けまろやかな最高峰「A5伊万里牛ステーキ」',
        desc: '全国屈指の肉質を誇るブランド牛。特製わさび醤油と岩塩でシンプルに。'
      },
      {
        title: '1300年の歴史を誇る「武雄温泉」源泉かけ流し',
        desc: '弱アルカリ単純温泉の柔らかな湯ざわり。疲労回復と美肌効果抜群。'
      },
      {
        title: '辰野金吾建築の楼門や御船山楽園の四季パノラマ',
        desc: '歴史的建造物と広大な日本庭園。アートと自然が融合する空間。'
      }
    ]
  },
  {
    slug: 'organic-forest-infinity-panoramic-sauna-chubu',
    keyword: '白馬 サウナ 温泉 ホテル',
    searchQuery: '白馬 サウナ 温泉 ホテル',
    title: '【信州・白馬アルプス森林サウナ】北アルプス絶景パノラマ＆白樺水風呂の極上リゾート宿5選',
    description: '雄大な北アルプスの山並みを望む最新薪ストーブサウナ！白樺林に囲まれたウッドデッキでアロマロウリュを楽しみ、雪解け天然水のシングル水風呂と澄み切った高原の空気で異次元のととのい体験。',
    heroBadge: '北アルプス森林サウナ＆雪解け水風呂',
    leadTitle: '視界を埋め尽くす北アルプス三山。信州の大自然に抱かれる本格アウトドアサウナリゾート',
    leadContent: '標高の高い信州・白馬エリアに広がる本格サウナリゾート。北欧風の木造サウナキャビンでは、地元産白樺のヴィヒタを使ったセルフロウリュが楽しめます。サウナ室の大きな窓からアルプスの雄姿を眺めた後は、北アルプスの雪解け湧水かけ流し水風呂へ。澄み切った高原の風を全身に浴びるインフィニティ外気浴で、心身が完全に解き放たれる極上の時間をお過ごしください。',
    features: [
      {
        title: '北アルプス白馬連峰を望む絶景薪サウナキャビン',
        desc: 'HARVIA製薪ストーブの柔らかな熱。地元白樺のアロマ水ロウリュ。'
      },
      {
        title: '北アルプス雪解け湧水「シングル・超軟水水風呂」',
        desc: '飲めるほど清らかな天然水。肌に染み渡る極上の爽快感。'
      },
      {
        title: '満天の星空と高原の澄んだ空気を吸い込む外気浴デッキ',
        desc: 'インフィニティチェア完備。森のフィトンチッドに包まれるととのい空間。'
      }
    ]
  },
  {
    slug: 'traditional-fukushima-aizu-urushi-craft-stay',
    keyword: '東山温泉 露天風呂 旅館',
    searchQuery: '東山温泉 露天風呂 旅館',
    title: '【会津漆器の艶やかな器と郷土会席】伝統美学！東山温泉・芦ノ牧温泉の歴史名湯宿5選',
    description: '400年以上の歴史を誇る会津の伝統工芸「会津漆器」！漆のしっとりとした手触りと上品な艶をたたえる器で味わう福島牛や会津郷土料理、そして竹久夢二や与謝野晶子も愛した東山温泉の名湯に浸かる風雅な旅。',
    heroBadge: '会津漆器の器＆歴史美肌温泉',
    leadTitle: '艶やかな会津漆器と歴史ある奥羽三楽郷の名湯。会津若松・東山温泉で過ごす雅な休日',
    leadContent: '会津塗の職人が丹精込めて塗り重ねた漆器は、手に取るだけで温もりを感じる日本の美の象徴。宿の会席料理では、朱や黒の美しい漆器に盛られた会津地鶏の焼き物、福島牛ステーキ、名物の「こづゆ」や手打ち蕎麦が並びます。湯川の渓流沿いに広がる開湯1300年の東山温泉で、歴史ある源泉に身を委ね、川のせせらぎを聴きながら心洗われるひとときをお過ごしください。',
    features: [
      {
        title: '伝統工芸「会津漆器」の艶やかな器で楽しむ郷土会席',
        desc: '漆の滑らかな質感と色彩。会津の食文化と工芸美が融合した逸品。'
      },
      {
        title: '福島牛・会津地鶏・名物「こづゆ」の贅沢フルコース',
        desc: '豊かな自然が育んだ食材の旨味。地酒とのマリアージュも格別。'
      },
      {
        title: '開湯1300年！湯川のせせらぎを聴く東山温泉の露天風呂',
        desc: '硫酸塩泉のまろやかな名湯。渓谷美と歴史情緒に包まれる湯浴み。'
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
  console.log('=== Round 47: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round47Configs) {
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

  for (const config of round47Configs) {
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
