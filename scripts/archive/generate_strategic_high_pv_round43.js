const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round43Configs = [
  {
    slug: 'traditional-okinawa-ishigaki-beef-yaeyama-stay',
    keyword: '石垣島 リゾート ホテル',
    searchQuery: '石垣島 石垣牛 リゾート ホテル',
    title: '【A5石垣牛ステーキ＆八重山そば】南国石垣島の島素材美食と美ら海リゾート宿5選',
    description: '澄んだ空気と豊かな牧草で育つ最高峰「石垣牛」のとろける炭火焼きステーキや握り、そして出汁香る名物八重山そば！川平湾やマエサトビーチの絶景オーシャンビューを望む南国ラグジュアリーホテルを厳選。',
    heroBadge: '石垣牛美食＆八重山リゾート',
    leadTitle: '南国の太陽が育んだ最高峰A5石垣牛。エメラルドグリーンの海に抱かれる至福の島時間',
    leadContent: '日本最南端の黒毛和牛「石垣牛」。脂が重くなく甘みのあるジューシーな赤身と霜降りのバランスは、南国リゾートのディナーにぴったりです。全室オーシャンビューの客室バルコニーから眺める夕日や、満天の星の下で楽しむプールサイドBAR。朝食には手打ちの八重山そばや島フルーツが並ぶ贅沢なブッフェを味わい、極上のアイランドバカンスをお楽しみください。',
    features: [
      {
        title: '最高峰A5石垣牛の炭火グリル＆握り',
        desc: '芳醇な香りととろけるような肉質。島の天然塩やシークヮーサーポン酢で堪能。'
      },
      {
        title: '川平湾・竹富島を望むパノラマオーシャンビュー',
        desc: 'グラデーションに輝く美ら海と夕暮れのサンセット。波音に癒やされるバルコニー。'
      },
      {
        title: '島野菜と八重山そばが並ぶ贅沢朝食',
        desc: '島豆腐や紅芋、パイナップルなど南国の恵みが詰まった極上モーニングビュッフェ。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-scenic-sunflower-deck',
    keyword: '富良野 温泉 ホテル',
    searchQuery: '富良野 温泉 リゾート ホテル',
    title: '【黄色い絨毯ひまわり畑】客室テラスから望む一面のひまわりと絶景露天風呂！夏秋のパノラマ宿5選',
    description: '青空の下に広がる何十万本もの満開のひまわり畑！客室専用ウッドデッキや展望露天風呂から黄色い花の絨毯を一望できる、開放感と元気に満ちた全国屈指のフラワーカーペット温泉宿を厳選紹介。',
    heroBadge: 'ひまわり畑絶景＆展望露天',
    leadTitle: '太陽に向かって咲き誇る黄金色の花畑。展望露天風呂から愛でる感動のサマーパノラマ',
    leadContent: '夏から秋にかけて一面を黄色く染め上げるひまわりの大パノラマ。宿の敷地内や目の前に広がる花畑を、プライベートテラスや露天風呂から眺める時間は、心まで明るく前向きにしてくれます。夕暮れ時には夕日に照らされて黄金色に輝くロマンチックな景観に変化。地元で採れたての夏野菜や旬のフルーツをふんだんに使ったリゾート料理とともに、特別な休日を。',
    features: [
      {
        title: '客室テラスから一望する満開のひまわり畑',
        desc: '遮るもののない大パノラマ。黄色の花々と青空が織りなす圧倒的なフォトジェニック空間。'
      },
      {
        title: '夕暮れに黄金色に染まるサンセット露天風呂',
        desc: '夕日に照らされる花畑を眺めながら入る天然温泉。体の芯から温まる癒やしの湯。'
      },
      {
        title: '高原の採れたて旬野菜とグリル料理',
        desc: 'トウモロコシやトマトなど瑞々しい高原野菜と、ジューシーなブランド肉のディナー。'
      }
    ]
  },
  {
    slug: 'super-panoramic-canyon-bungee-jump-stay',
    keyword: 'みなかみ 温泉 露天風呂 旅館',
    searchQuery: 'みなかみ 温泉 露天風呂 旅館',
    title: '【日本一のバンジージャンプ】竜神大吊橋・みなかみ渓谷の絶叫体験と名湯温泉宿5選',
    description: '高さ100mの橋から大自然の渓谷へ飛び込む究極のスリル！バンジージャンプで度胸試し＆大興奮した後は、水上温泉や奥久慈温泉の渓谷露天風呂とサウナで心身をじんわりほぐす人気アクティビティ宿を厳選。',
    heroBadge: '絶叫バンジー＆渓谷名湯',
    leadTitle: '渓谷に向かって大ジャンプ！究極のアドベンチャーと渓流露天風呂で叶える最高のリフレッシュ',
    leadContent: '日本有数の高さを誇るバンジージャンプスポット・竜神大吊橋やみなかみ諏訪峡。大自然の絶景の中にダイブする爽快感と達成感は、人生の忘れられないハイライトになります。ジャンプ後は宿の温泉へ直行し、川のせせらぎを聴く露天風呂で緊張を一気にリリース。上州牛や常陸牛のすき焼き・ステーキを味わい、エネルギーを満タンにチャージしましょう。',
    features: [
      {
        title: 'プロ公認！日本最高峰バンジージャンプ',
        desc: '高さ100mから渓谷へダイブ！安全基準を満たした本格ツアーで安心・安全に体験。'
      },
      {
        title: '緊張を解きほぐす渓流パノラマ露天風呂',
        desc: 'マイナスイオンあふれる川沿いの温泉。筋肉を和らげる美肌の単純温泉。'
      },
      {
        title: 'スタミナ満点！ブランド和牛と山の幸会席',
        desc: '上州牛や常陸牛の鉄板焼き、採れたて山菜やキノコを贅沢に使った滋味あふれる料理。'
      }
    ]
  },
  {
    slug: 'spring-miyazaki-hyuganatsu-citrus-spa-stay',
    keyword: '宮崎 温泉 リゾート ホテル',
    searchQuery: '宮崎 温泉 リゾート ホテル',
    title: '【宮崎日向夏スイーツ＆宮崎牛】爽やか柑橘と南国リゾート青島温泉の美食名湯宿5選',
    description: '黄色い皮と白皮の甘みが絶妙な宮崎特産「日向夏（ひゅうがなつ）」の特製パフェと、日本一の栄冠に輝く「宮崎牛」！青島神社や鬼の洗濯板を望む青島温泉のトロトロ美肌湯で、南国の光と風を感じる癒やしステイ。',
    heroBadge: '宮崎日向夏＆青島美肌温泉',
    leadTitle: '甘酸っぱい日向夏スイーツと極上宮崎牛。青島のパームツリー揺れる南国リゾート',
    leadContent: '温暖な気候と豊かな日差しが降り注ぐ宮崎県。爽やかな香りの日向夏ジュースや特製タルト、そしてとろける霜降りが自慢の宮崎牛ステーキはまさに至高の組み合わせ。青島温泉のとろりとした重曹泉は「美肌の湯」として名高く、太平洋の水平線を望む展望大浴場でリフレッシュ。南国情緒あふれる青島の海辺で、優雅なバカンスをお楽しみください。',
    features: [
      {
        title: '宮崎特産「完熟日向夏」のスイーツ＆カクテル',
        desc: '白皮ごと食べる独特の美味しさ。パティシエ特製の爽やかなタルトやパフェ。'
      },
      {
        title: '最高峰5等級「宮崎牛」の炭火焼きステーキ',
        desc: '内閣総理大臣賞受賞の誇り。濃厚な肉の旨味ととろけるような脂の甘み。'
      },
      {
        title: '鬼の洗濯板を一望する「青島美肌温泉」',
        desc: '化粧水のようなトロトロの湯ざわり。太平洋から昇る朝日を望む展望露天風呂。'
      }
    ]
  },
  {
    slug: 'organic-forest-infinity-ice-bath-sauna-stay',
    keyword: 'サウナ 水風呂 温泉 ホテル',
    searchQuery: 'サウナ 水風呂 温泉 露天風呂 ホテル リゾート',
    title: '【シングル氷水風呂＆森サウナ】極限の冷水とアロマロウリュで覚醒するととのい宿5選',
    description: '水温10℃未満のグルシン（シングル）極冷水風呂と、100℃超の本格フィンランド薪サウナ！熱気と冷気の強烈なコントラストで一気にディープなトランス状態へ導く、全国屈指のハードサウナー特化型リゾートを厳選。',
    heroBadge: 'シングル水風呂＆薪サウナ',
    leadTitle: '100℃サウナとシングル極冷水風呂の衝撃。未体験の覚醒へと誘う究極のととのいステイ',
    leadContent: 'サウナ愛好家が求める「究極の水風呂体験」。氷を投入したシングル（10℃未満）の水風呂や天然の超冷鉱泉に浸かることで、全身の皮膚が一気に引き締まり、羽衣を突き破る強烈な快感が走ります。その後のインフィニティチェアでの外気浴では、視界がじんわりと回り、深い多幸感に包まれる「ディープととのい」へ。天然温泉とサウナ飯も完璧な宿をご案内します。',
    features: [
      {
        title: '水温1桁！グルシン氷水風呂＆天然冷鉱泉',
        desc: 'キンキンに冷えた極冷水。熱いサウナとの究極の温度差がもたらす最高の覚醒。'
      },
      {
        title: '100℃超！白樺アロマの本格薪サウナ',
        desc: '強力な輻射熱とヴィヒタの香り。セルフロウリュで限界まで温まる本格空間。'
      },
      {
        title: '森の澄んだ風を全身に浴びる天空外気浴',
        desc: '無重力感覚のインフィニティチェアで、鳥の声と木々の香りに包まれる至高の瞑想。'
      }
    ]
  },
  {
    slug: 'traditional-ehime-tobe-yaki-ceramic-stay',
    keyword: '道後温泉 露天風呂 旅館',
    searchQuery: '道後温泉 伊予牛 露天風呂 旅館',
    title: '【砥部焼のうつわ美＆伊予牛】白磁の伝統美と道後・奥道後温泉の極上癒やし宿5選',
    description: '白磁に藍色の手描き模様が美しい愛媛の伝統陶磁器「砥部焼（とべやき）」の器で味わう、極上「伊予牛」の陶板焼き会席！日本最古の名湯・道後温泉や奥道後温泉で、伝統工芸と美肌湯に心ほどける大人の温泉旅。',
    heroBadge: '砥部焼の器＆伊予牛美食',
    leadTitle: 'ぽってり温もりある砥部焼ととろける伊予牛。日本最古の名湯・道後温泉で過ごす雅な休日',
    leadContent: '200年以上の歴史を誇る愛媛の伝統工芸「砥部焼」。白磁に呉須（藍色）で描かれた唐草模様などの器は、厚手で手になじみ、料理の色彩を美しく引き立てます。きめ細やかなサシが特徴の「伊予牛絹の味」を砥部焼の器でいただく会席料理は絶品。道後温泉本館の風情や飛鳥乃湯泉を巡り、歴史あるアルカリ性単純温泉でつるつるの美肌を手に入れましょう。',
    features: [
      {
        title: '職人手作りの「砥部焼」で彩る特選会席',
        desc: '藍色と白磁のコントラストが料理を引き立てる。目でも楽しむ器の美学。'
      },
      {
        title: '柔らかくジューシーな「伊予牛絹の味」',
        desc: '絹のように繊細な肉質。陶板焼きやしゃぶしゃぶで味わう愛媛の最高峰ブランド牛。'
      },
      {
        title: '日本最古の名湯「道後温泉」の美肌源泉',
        desc: '刺激の少ないアルカリ性単純温泉。湯上がりの肌がしっとり潤う極上の名湯。'
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
  console.log('=== Round 43: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round43Configs) {
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

  for (const config of round43Configs) {
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
