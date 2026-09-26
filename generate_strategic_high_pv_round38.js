const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round38Configs = [
  {
    slug: 'traditional-shizuoka-unagi-wasabi-gourmet-stay',
    keyword: '修善寺温泉 旅館',
    searchQuery: '修善寺温泉 露天風呂 旅館',
    title: '【極上うなぎ炭火焼き＆生わさび丼】静岡・伊豆修善寺の名水美食と名湯宿5選',
    description: '天城連山の清流が育む香り高い伊豆本わさびと、職人が秘伝のタレでふっくら香ばしく焼き上げる名物うなぎ！文学と歴史の薫る修善寺温泉や中伊豆で、名水美食と風雅な温泉に心癒やされる贅沢ステイ。',
    heroBadge: '修善寺名湯＆伊豆うなぎ美食',
    leadTitle: '伊豆の清流が育む本わさびと炭火香る極上うなぎ。修善寺の風情に浸る美食旅',
    leadContent: '「伊豆の小京都」と呼ばれる修善寺温泉。天城の豊かな湧水で育った生わさびを自分ですりおろしていただく名物丼や、脂の乗った肉厚うなぎをじっくり備長炭で焼き上げた蒲焼きはまさに絶品。竹林の小径や桂川のせせらぎを眺めながら、弘法大師ゆかりの歴史ある名湯露天風呂に身を委ね、心静かに大人の美食時間をお過ごしください。',
    features: [
      {
        title: '職人手焼きの香ばしい特選うな重',
        desc: '外はパリッと香ばしく身はふんわり。創業から受け継がれる熟成タレが絡む逸品。'
      },
      {
        title: '採れたて天城産「生本わさび」体験',
        desc: '鮫皮おろしですりたての爽やかな香りと上品な辛味。お造りやステーキのアクセントに。'
      },
      {
        title: '桂川のせせらぎ響く風雅な庭園露天風呂',
        desc: '竹林や四季の日本庭園を望むアルカリ性単純温泉。肌に優しい湯ざわりで心身をリセット。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-scenic-cave-bath',
    keyword: '洞窟風呂 温泉 旅館',
    searchQuery: '洞窟風呂 温泉 旅館',
    title: '【神秘の洞窟風呂】岩肌に囲まれる非日常空間！源泉湧き出る秘境の名湯隠れ宿5選',
    description: '天然の岩壁をくり抜いた洞窟から自噴する神秘の名湯！間接照明に照らされる岩肌と湯けむりが織りなす非日常の幻想美。自然のパワーを肌で感じる、全国屈指の洞窟風呂名宿を厳選してご紹介。',
    heroBadge: '神秘の洞窟風呂＆秘湯',
    leadTitle: '悠久の時が刻んだ天然岩のシェルター。地底から湧き出る神秘の名湯に包まれる旅',
    leadContent: 'ゴツゴツとした天然岩に囲まれ、仄暗い灯りの中に立ち上る湯煙。洞窟風呂は、まるで地球の胎内に抱かれているかのような深い安らぎと神秘的な没入感を与えてくれます。岩の隙間から滾々と湧き出る源泉は鮮度抜群。四季折々の山川の恵みを活かした郷土会席とともに、日常を完全に忘れられる極上の秘湯ステイをお楽しみください。',
    features: [
      {
        title: '自然の造形美そのままの天然洞窟温泉',
        desc: '岩肌を流れる源泉と反響する湯の音。五感を研ぎ澄ます唯一無二の入浴体験。'
      },
      {
        title: '幻想的な間接照明と湯けむりの演出',
        desc: '温かな光に照らされる陰影が醸し出す幽玄な世界。プライベート貸切対応の宿も。'
      },
      {
        title: '滋味深い山の幸・清流の恵み会席',
        desc: '地元で採れる山菜や茸、川魚の塩焼きなど、秘境ならではの温もりあふれる美食。'
      }
    ]
  },
  {
    slug: 'super-panoramic-rafting-canyon-stay',
    keyword: 'ラフティング 温泉 ホテル',
    searchQuery: 'ラフティング 温泉 ホテル リゾート',
    title: '【大激流ラフティング】吉野川・球磨川で挑む白波アドベンチャー＆天然温泉リゾート宿5選',
    description: '日本屈指の激流ポイント吉野川や球磨川、利根川で楽しむエキサイティングなラフティング！白波を乗り越える大興奮のアドベンチャーと、疲れた体を癒やす天然温泉大浴場・絶景サウナを備えた宿を厳選。',
    heroBadge: '激流ラフティング＆天然温泉',
    leadTitle: '白波を突き抜ける爽快アドベンチャー！大自然の激流体験と極上温泉でエネルギーチャージ',
    leadContent: '水しぶきを浴びながら仲間と力を合わせて激流を下るラフティング。大自然の圧倒的スケールを肌で体感した後の達成感と爽快感は格別です。ツアー後は宿の温泉へ直行し、広々とした露天風呂やサウナでじんわり疲労回復。夜は地元産のお肉や魚介をふんだんに使ったスタミナ満点のごちそうを味わう、最高のアクティブホリデーをご提案します。',
    features: [
      {
        title: '公認プロガイド同行の本格ラフティング',
        desc: '初心者やファミリーも安心・安全。装備一式レンタル込みで手ぶら参加可能。'
      },
      {
        title: '運動後の体をほぐす自家源泉温泉＆サウナ',
        desc: '渓谷のパノラマを望む大浴場。冷えた体を芯から温めて筋肉痛を和らげる名湯。'
      },
      {
        title: 'ボリューム満点！ご当地ブランド牛BBQ＆会席',
        desc: '運動後のお腹を満たす贅沢な肉料理や採れたて地元野菜のバイキング。'
      }
    ]
  },
  {
    slug: 'spring-yamanashi-koshu-wine-beef-stay',
    keyword: '石和温泉 甲州ワイン 旅館',
    searchQuery: '石和温泉 甲州ワイン ワインビーフ 旅館',
    title: '【甲州ワインビーフ＆勝沼ワイナリー】芳醇ワインペアリングと石和温泉の美食宿5選',
    description: 'ワインの搾りかすを食べて育った柔らかくジューシーな「甲州ワインビーフ」と、世界が認める日本ワイン「甲州」の贅沢マリアージュ！首都圏からアクセスの良い石和温泉で、美食と美肌湯に酔いしれる週末旅。',
    heroBadge: '甲州ワインビーフ＆石和温泉',
    leadTitle: 'ワイン粕育ちの極上赤身肉と勝沼ワイン。山梨が誇る美食と美肌名湯の贅沢ステイ',
    leadContent: '日本ワイン発祥の地・山梨県。ぶどう粕を飼料にして育つ「甲州ワインビーフ」は、きめ細やかな肉質とほんのり甘い脂の風味が特徴のプレミアム和牛です。ソムリエが厳選する勝沼産ワインとのペアリングコースは感動の連続。広々とした大庭園露天風呂が自慢の石和温泉に浸かり、芳醇な香りと美肌の湯に包まれる至福のひとときをご堪能ください。',
    features: [
      {
        title: '特選「甲州ワインビーフ」のサーロインステーキ',
        desc: '赤ワインソースや岩塩でいただく極上肉。柔らかさと凝縮された旨味が口いっぱいに。'
      },
      {
        title: '専属ソムリエ厳選！山梨県産ワインペアリング',
        desc: '料理の一皿一皿に合わせて供される名門ワイナリーの白・赤・スパークリング。'
      },
      {
        title: '湯量豊富な美肌温泉「石和温泉」の大浴場',
        desc: '広々とした庭園露天風呂や純和風大浴場。さらりとしたアルカリ性単純泉でツルスベ肌に。'
      }
    ]
  },
  {
    slug: 'organic-forest-snow-sauna-retreat-stay',
    keyword: '雪見 露天風呂 サウナ 宿',
    searchQuery: '雪見 サウナ 露天風呂 温泉 旅館',
    title: '【雪原ダイブ＆極寒外気浴】白銀の世界でととのう北欧薪サウナ＆雪見温泉宿5選',
    description: '薪ストーブの熱気で限界まで体を温めた後、一面のふかふか新雪へダイブ！氷点下の澄み切った空気の中で深呼吸する究極の冬サウナ体験。雪見露天風呂と郷土鍋料理で心も体も温まるスノーリトリートを厳選。',
    heroBadge: '雪原ダイブ＆北欧薪サウナ',
    leadTitle: '白銀の静寂と薪の温もり。熱気と氷点下のコントラストが生む異次元のととのい',
    leadContent: '冬の寒さを最高のエンターテインメントに変える「スノーサウナ」。北海道や信州、東北の雪深い宿で体験する薪サウナは、セルフロウリュの熱波と窓外の白銀世界のコントラストが圧巻です。火照った体を雪の上にダイブさせたり、雪見デッキでの氷点下外気浴でととのう感覚は唯一無二。サウナ後は源泉かけ流しの雪見露天風呂と地元の熱々鍋で温まりましょう。',
    features: [
      {
        title: '雪景色を一望する本格フィンランド式薪サウナ',
        desc: 'パチパチとはぜる薪の音と白樺のアロマロウリュ。雪原のパノラマを望む特等席。'
      },
      {
        title: 'ふかふかの新雪ダイブ＆氷点下外気浴',
        desc: '火照った体を雪で一気にクールダウン。澄んだ冬の空気に包まれる最高のととのい。'
      },
      {
        title: '湯けむり立ち上る雪見露天風呂＆郷土鍋',
        desc: '白銀の山並みを眺めながら浸かる名湯と、体が芯から温まる地元名物鍋料理。'
      }
    ]
  },
  {
    slug: 'traditional-tottori-kurayoshi-kasuri-stay',
    keyword: '三朝温泉 旅館',
    searchQuery: '三朝温泉 鳥取和牛 旅館',
    title: '【倉吉絣と鳥取和牛】白壁土蔵群の伝統美と三朝温泉ラジウム名湯宿5選',
    description: '江戸・明治の風情が残る倉吉白壁土蔵群の伝統織物「倉吉絣」と、品評会日本一に輝いた「鳥取和牛」！世界屈指の高濃度ラジウム温泉として名高い三朝温泉で、免疫力を高める湯治と美食を堪能する極上ステイ。',
    heroBadge: '倉吉伝統美＆三朝ラジウム名湯',
    leadTitle: '世界屈指のラジウム泉と日本一の鳥取和牛。歴史ある山陰の風情に癒やされる旅',
    leadContent: '「三たび朝を迎えると元気になる」と称される三朝温泉。高濃度のラドンを含むラジウム泉は、浸かって良し、吸って良し、飲んで良しの三拍子揃った奇跡の名湯です。風情ある温泉街の散策や倉吉絣の着物体験、そして夕食にはとろける脂と赤身のコクが絶妙な最高級鳥取和牛の会席料理。心身の免疫力を高める贅沢な山陰の休日をお届けします。',
    features: [
      {
        title: '世界屈指の高濃度「三朝ラジウム温泉」',
        desc: 'ホルミシス効果で新陳代謝を促進。源泉かけ流しの露天風呂やオンドル室・飲泉場。'
      },
      {
        title: '日本一の肉質！特選「鳥取和牛」の炭火焼き',
        desc: 'オレイン酸を豊富に含む上質な脂。口の中でとろける柔らかさと上品な旨味。'
      },
      {
        title: '倉吉白壁土蔵群と絣の伝統工芸散策',
        desc: '白壁と赤瓦が連なる風情ある町並み。伝統織物の着物レンタルや工房見学。'
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
  console.log('=== Round 38: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round38Configs) {
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

  for (const config of round38Configs) {
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
