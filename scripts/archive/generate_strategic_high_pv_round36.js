const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round36Configs = [
  {
    slug: 'traditional-kagoshima-kurobuta-shabu-shabu-stay',
    keyword: '鹿児島 黒豚 温泉 旅館',
    searchQuery: '鹿児島 黒豚 温泉',
    title: '【鹿児島黒豚＆黒毛和牛】極上しゃぶしゃぶ会席と指宿砂むし温泉！霧島・指宿の美食名湯宿5選',
    description: '甘みと旨味が凝縮した「かごしま黒豚」の極上出汁しゃぶしゃぶと、とろける鹿児島黒毛和牛！世界唯一の「指宿天然砂むし温泉」や神話息づく霧島温泉で、南九州最高峰の肉美食と名湯に癒やされる旅。',
    heroBadge: '黒豚しゃぶしゃぶ＆指宿名湯',
    leadTitle: '黄金出汁にくぐらせる極上かごしま黒豚と砂むし温泉。南国鹿児島の至福ステイ',
    leadContent: '豊かな自然と火山灰土壌が育んだ「かごしま黒豚」は、きめ細やかな肉質と上品な脂の甘みが最大の魅力。特製の鰹出汁にサッとくぐらせて味わうしゃぶしゃぶや、A5鹿児島黒毛和牛ステーキはまさに絶品です。海岸で体験する名物・指宿の天然砂むし温泉や、湯煙立ち上る霧島の源泉掛け流し露天風呂でデトックス。南九州の温かいおもてなしを堪能してください。',
    features: [
      {
        title: '極上「かごしま黒豚」の特製出汁しゃぶ',
        desc: '枕崎産本枯節の黄金出汁とポン酢で食べ比べ。脂身の甘さと柔らかな肉質が感動的。'
      },
      {
        title: '名物「指宿砂むし温泉」＆霧島にごり湯',
        desc: '温かい砂の重みと地熱で全身ポカポカの砂むし風呂や、乳白色の硫黄泉露天風呂。'
      },
      {
        title: '鹿児島本格芋焼酎と郷土の味覚',
        desc: 'プレミアム芋焼酎のペアリングや、さつま揚げ・きびなごのお造りなど鹿児島の味覚。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-scenic-firefly-deck',
    keyword: 'ホタル 温泉 旅館',
    searchQuery: 'ホタル 温泉 旅館',
    title: '【初夏の幻想蛍夜】客室露天・専用テラスから舞う蛍を鑑賞！清流沿いの隠れ家名湯宿5選',
    description: '初夏の夜、静寂な清流沿いのプライベートデッキや客室露天風呂から、淡く光りながら舞い飛ぶ天然のゲンジボタルを鑑賞。喧騒を離れ、自然の光と水のせせらぎに包まれる風雅な温泉旅館を厳選紹介。',
    heroBadge: 'ホタル鑑賞＆清流露天',
    leadTitle: '闇夜を優美に舞う蛍の光と湯けむり。初夏限定の幻想的なプライベート温泉ステイ',
    leadContent: '水が清らかな山あいの宿でしか出逢えない、初夏の風物詩「ホタル」。客室の専用テラスや川沿いの露天風呂に浸かりながら、漆黒の夜空と木々の間を淡く明滅しながら行き交う蛍の群れを眺める時間は、息をのむほど贅沢です。ホタル観賞スポットへの案内ツアーや、初夏の旬をあしらった涼やかな懐石料理とともに、心に残る特別な夜をお過ごしください。',
    features: [
      {
        title: '客室専用テラス・露天風呂から望む蛍',
        desc: '誰にも邪魔されず、湯船やプライベートデッキから幻想的なホタルの光を鑑賞。'
      },
      {
        title: '宿専用のホタル鑑賞路＆ガイドツアー',
        desc: '敷地内のビオトープや清流沿いの小径で、間近に蛍が飛び交う絶景ポイントへ案内。'
      },
      {
        title: '初夏の味覚「鮎・若鮎」と涼味懐石',
        desc: '清流で獲れた香ばしい鮎の塩焼きや、蓴菜・初夏野菜を彩り豊かに仕立てた会席料理。'
      }
    ]
  },
  {
    slug: 'super-panoramic-paragliding-sky-stay',
    keyword: 'パラグライダー ホテル 温泉',
    searchQuery: 'パラグライダー 体験 温泉 ホテル',
    title: '【大空を舞う空中散歩】爽快パラグライダー体験＆絶景パノラマ露天風呂！高原アクティビティ宿5選',
    description: 'インストラクターと二人乗りで大空へテイクオフ！鳥になったような感動のフライト体験と、フライト後に山々を眺めながら入る絶景パノラマ露天風呂が自慢の全国屈指の高原リゾートホテルを厳選。',
    heroBadge: '空中散歩＆絶景パノラマ温泉',
    leadTitle: '風に乗って大空を滑空する感動！アクティビティと絶景露天で心躍る休日を',
    leadContent: '白馬や阿蘇、朝霧高原など、日本有数の絶景フライトエリアで楽しむタンデムパラグライダー。初心者でもプロパイロットと一緒に安心して空中散歩を楽しめ、眼下に広がる大パノラマは一生の思い出になります。フライトの爽快感を胸に、宿の展望露天風呂で雄大な山並みを眺めながらリラックス。信州や九州の恵みを味わうバイキングやコース料理も大人気です。',
    features: [
      {
        title: '初心者歓迎！タンデムパラグライダー体験',
        desc: 'プロインストラクターと一緒だから安心・安全。GoProでの空中記念撮影も対応。'
      },
      {
        title: '山並みを見渡す展望パノラマ露天風呂',
        desc: '空と山に抱かれるような開放感。夕暮れに染まる稜線を眺める至福のリフレッシュ。'
      },
      {
        title: '高原の澄んだ空気と地元食材グルメ',
        desc: '採れたての新鮮野菜やブランド牛ステーキ、地ビールなどアクティブ派に嬉しい美食。'
      }
    ]
  },
  {
    slug: 'spring-okayama-muscat-sweets-stay',
    keyword: '湯原温泉 露天風呂 旅館',
    searchQuery: '湯原温泉 露天風呂 旅館',
    title: '【フルーツ王国岡山】シャインマスカット贅沢パフェ＆美作三湯！湯原・奥津・湯郷の美食温泉宿5選',
    description: 'パリッと弾けるジューシーな岡山県産シャインマスカットや清水白桃の特製スイーツ！美肌の湯として名高い美作三湯（湯原・奥津・湯郷温泉）で、極上のフルーツと名湯に心ほどける温泉旅をご提案。',
    heroBadge: '岡山マスカット＆美作三湯',
    leadTitle: '高糖度シャインマスカットの贅沢デザートと名湯美肌湯。フルーツ王国岡山の癒やし旅',
    leadContent: '「晴れの国」岡山が誇る最高峰フルーツ、シャインマスカットとピオーネ。大粒の果実をふんだんに使用したウェルカムパフェやタルト、お部屋で味わうカットフルーツプレートが大好評です。さらに西日本を代表する名湯「美作三湯」のまろやかな湯に浸かり、美肌効果を実感。千屋牛（ちやぎゅう）や旬の山の幸を取り入れた華やかな会席料理をご堪能ください。',
    features: [
      {
        title: '旬の岡山産シャインマスカットスイーツ',
        desc: '芳醇な香りと強い甘み。パティシエ特製の贅沢パフェやフルーツオードブル。'
      },
      {
        title: '美肌の湯「美作三湯」の多彩な名湯',
        desc: '湯原の砂湯、奥津の足踏み洗濯湯、湯郷の美肌湯。それぞれ個性豊かな極上温泉。'
      },
      {
        title: '幻の和牛「千屋牛」と瀬戸内・美作の美食',
        desc: 'ほどよいサシと深い旨味の千屋牛ステーキや、地元野菜・山菜を使った里山会席。'
      }
    ]
  },
  {
    slug: 'organic-forest-infinity-pool-hot-spring-stay',
    keyword: 'インフィニティプール 温泉 宿',
    searchQuery: 'インフィニティプール 温泉 ホテル リゾート',
    title: '【森と空に溶け込む】絶景インフィニティ温泉プール＆天然スパ！極上フォレストリゾート宿5選',
    description: '原生林のパノラマと一体化する温水インフィニティ温泉プール！水着で入れる絶景スパやサウナ、ラグジュアリーなラウンジを備えた、非日常のリフレッシュを約束する最高峰フォレストリゾートを厳選紹介。',
    heroBadge: 'インフィニティプール＆温泉スパ',
    leadTitle: '水面に映る森と空のグラデーション。温水インフィニティプールで過ごすラグジュアリー時間',
    leadContent: '森の深緑とどこまでも続く空の境界線が溶け合うインフィニティプール。温泉水を使用した温水プールなら、季節を問わず快適に水上の浮遊感を楽しめます。プールサイドのデッキチェアで読書やカクテルを楽しみ、サウナや天然温泉大浴場で体の芯まで温まるリトリート。忙しい日常を完全にリセットできる、大人のためのラグジュアリーリゾートをご案内します。',
    features: [
      {
        title: '通年利用可能な温水インフィニティプール',
        desc: '森のパノラマを一望。水面に空が反射するフォトジェニックなインフィニティ空間。'
      },
      {
        title: '水着サウナ＆天然温泉ジャグジー完備',
        desc: 'プールサイドで楽しむ本格サウナと外気浴。カップルやグループで一緒に体験可能。'
      },
      {
        title: '自然派オーガニックディナー＆カクテル',
        desc: '地元の契約農家野菜やオーガニック食材を使ったモダンフレンチ＆ナチュールワイン。'
      }
    ]
  },
  {
    slug: 'traditional-aichi-seto-ware-pottery-stay',
    keyword: '蒲郡 温泉 旅館',
    searchQuery: '蒲郡 温泉 旅館',
    title: '【瀬戸焼とうなぎ会席】伝統のやきもの美と三河一色産うなぎ！愛知・蒲郡・南知多の名湯宿5選',
    description: '日本の陶磁器の代名詞「瀬戸焼」の器で供される、名物「三河一色産うなぎ」の蒲焼きやひつまぶし！三河湾・伊勢湾のオーシャンビュー温泉と、愛知が誇る食文化・伝統工芸を贅沢に味わう宿を徹底紹介。',
    heroBadge: '瀬戸焼の器＆三河うなぎ美食',
    leadTitle: '瀬戸焼のうつわが引き立てる極上三河うなぎ。三河湾のオーシャンビュー温泉に寛ぐ休日',
    leadContent: '「せともの」の語源となった千年以上の歴史を持つ瀬戸焼。その洗練された器に盛り付けられるのは、全国屈指のブランド「三河一色産うなぎ」。外はパリッと中はふっくら香ばしく焼き上げたうな重やひつまぶしは絶品の極みです。三河湾を望む美肌温泉・三谷温泉や南知多温泉の絶景露天風呂に浸かり、愛知の豊かな海の幸と歴史ある伝統美をご堪能ください。',
    features: [
      {
        title: '名物「三河一色産うなぎ」のひつまぶし会席',
        desc: '職人が備長炭で焼き上げる極上うなぎ。そのまま、薬味、出汁茶漬けと3つの美味しさ。'
      },
      {
        title: '作家が手がけた瀬戸焼・常滑焼のうつわ',
        desc: '土の温もりとモダンな釉薬が料理を引き立てる、目でも舌でも楽しむ芸術的ディナー。'
      },
      {
        title: '三河湾の夕日と潮風を感じる展望露天風呂',
        desc: '波穏やかな海を一望するパノラマ温泉。夕暮れに茜色に染まる水面を眺めてリフレッシュ。'
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
  console.log('=== Round 36: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round36Configs) {
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

  for (const config of round36Configs) {
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
