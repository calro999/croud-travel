const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round33Configs = [
  {
    slug: 'traditional-sendai-beef-tan-gourmet-stay',
    keyword: '秋保温泉 牛タン',
    searchQuery: '秋保温泉 仙台牛',
    title: '【2026最新】極上厚切り牛タン炭火焼き＆A5仙台牛会席！宮城・秋保＆松島の名湯美食宿5選',
    description: '炭火で香ばしく焼き上げる名物極上牛タンと、とろけるA5ランク仙台牛を味わい尽くす！開湯1500年の秋保温泉や絶景の松島で、東北屈指の極上肉料理と美肌名湯を堪能できる至高の温泉宿を厳選紹介。',
    heroBadge: '宮城肉美食＆名湯',
    leadTitle: '職人手仕込みの極上牛タンとA5仙台牛の贅沢会席、奥州の名湯に心ほどける極上ステイ',
    leadContent: '仙台観光のハイライトといえば、なんといっても香ばしくジューシーな「牛タン」と芳醇な肉質の「仙台牛」。本特集では、料理長が炭火でじっくり焼き上げる厚切り牛タンや、A5仙台牛のすき焼き・しゃぶしゃぶ・サーロインステーキを贅沢に会席で提供する名湯宿を厳選。伊達政宗公ゆかりの秋保温泉や松島湾を望む絶景温泉で、至福の美食ステイをお楽しみください。',
    features: [
      {
        title: '炭火焼き職人技の厚切り牛タン',
        desc: '外はカリッと香ばしく中は驚くほどジューシー。秘伝の塩仕込みと備長炭で焼き上げる本場の味。'
      },
      {
        title: '最高峰A5ランク仙台牛の食べ比べ',
        desc: '選び抜かれた霜降り仙台牛をステーキ・焼きしゃぶ・炙り握りで贅沢に堪能。'
      },
      {
        title: '奥州三名湯「秋保温泉」と松島絶景湯',
        desc: '古くから多くの文人に愛された自家源泉かけ流しの湯で、体の芯から温まる癒やしの時間。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-scenic-bamboo-deck',
    keyword: '竹林 露天風呂',
    searchQuery: '竹林 露天風呂 離れ',
    title: '【竹林の静寂美】夜のライトアップとプライベート竹林露天！京都・伊豆の風雅な離れ隠れ宿5選',
    description: '風にそよぐ笹の音と幽玄なライトアップに包まれる竹林露天風呂。客室専用ウッドデッキや離れの露天風呂から美しい竹林庭園を独占できる、贅沢で静寂に満ちた隠れ宿を厳選紹介。大人の極上休日を。',
    heroBadge: '竹林絶景＆隠れ宿',
    leadTitle: '笹鳴りの音と幻想的なライトアップ。竹林の静寂美に抱かれるプライベート温泉時間',
    leadContent: '日常の喧騒から完全に解き放たれる、竹林に囲まれた隠れ宿。青々とした竹が風に揺れる昼の爽やかさから、夕暮れ以降の幻想的なライトアップまで、刻一刻と表情を変える竹林景観。客室専用の露天風呂や広々としたウッドデッキから眺める景色はまさに一幅の日本画です。京都や伊豆、有馬などの名湯で、大人の静かな贅沢をご堪能ください。',
    features: [
      {
        title: '客室専用デッキから望む竹林庭園',
        desc: '誰にも邪魔されず、湯船に浸かりながら目の前に広がる竹林の幽玄美を独り占め。'
      },
      {
        title: '夜の幻想的な竹林ライトアップ',
        desc: '計算された光と影のコントラストが魅せる、夜の幻想的な美しさに酔いしれるひととき。'
      },
      {
        title: '数寄屋造りと美食の贅沢なおもてなし',
        desc: '伝統の職人技が光る客室空間と、旬の厳選素材をあしらった本格懐石料理。'
      }
    ]
  },
  {
    slug: 'super-panoramic-canyon-zip-line-adventure-stay',
    keyword: 'アドベンチャー リゾート ホテル',
    searchQuery: 'ジップライン リゾート ホテル',
    title: '【爽快アクティビティ】森と渓谷を空中滑走ジップライン！自然体験＆温泉が楽しめる大自然リゾート宿5選',
    description: '大自然の渓谷や森林の上空を一気に滑走するメガジップライン！爽快なアドベンチャー体験と、疲れた体を癒やす天然温泉・絶景露天風呂を兼ね備えた人気リゾートホテルを厳選紹介。カップルやファミリーにも最適！',
    heroBadge: '空中ジップライン＆温泉',
    leadTitle: '鳥になったような空中大滑走！スリル満点のアクティビティと絶景温泉で大自然を満喫',
    leadContent: '山々の間を駆け抜ける全長数百メートルのジップラインやツリートレッキング。大自然の絶景をダイナミックに体感した後は、心地よい疲労感を天然温泉の大浴場や渓谷露天風呂でじんわりほぐす——そんな贅沢なアクティブバカンスが今大人気です。森に囲まれた充実の設備と地元食材のバイキング・BBQが楽しめるリゾートホテルをご紹介します。',
    features: [
      {
        title: 'スリル満点のメガジップライン体験',
        desc: '大自然の谷や樹上を滑空する爽快アクティビティ。ガイド付きで初心者や子供も安全・安心。'
      },
      {
        title: '運動後の体を癒やす大浴場＆サウナ',
        desc: '思い切り体を動かした後は、広々とした天然温泉や露天風呂、サウナで極上のリフレッシュ。'
      },
      {
        title: '高原の澄んだ空気とごちそうブッフェ',
        desc: '採れたて高原野菜やお肉のグリル料理など、アクティブ派に嬉しいボリューム満点の美食。'
      }
    ]
  },
  {
    slug: 'spring-nagano-shinshu-apple-spa-stay',
    keyword: '信州 温泉 旅館',
    searchQuery: '長野 りんご 温泉',
    title: '【信州スイーツ＆名湯】焼きたて信州アップルパイ＆果実の香るりんご風呂！長野の美食温泉宿5選',
    description: '甘酸っぱい香りに包まれる名物「りんご風呂」と、サクサクの自家製焼きたてアップルパイ！信州サーモンや信州牛とともに、長野の豊かな果実と美肌温泉を丸ごと味わえる魅力あふれる宿を徹底解説。',
    heroBadge: '信州りんご＆果実美肌湯',
    leadTitle: '甘い香りに包まれるりんご風呂と焼きたて絶品アップルパイ、信州の恵みを五感で味わう旅',
    leadContent: '日本有数のりんごの産地・長野県。湯船に浮かぶ真っ赤なりんごから広がる甘酸っぱい天然のアロマは、美肌効果とリラックス効果が抜群です。湯上がりには館内パティシエ特製の焼きたてアップルパイや濃厚なりんごジュースを味わい、夕食には信州牛や信州サーモンをふんだんに使った会席料理を堪能。長野ならではの温かなおもてなしに癒やされます。',
    features: [
      {
        title: 'ぷかぷか浮かぶ天然りんご風呂',
        desc: 'ビタミンとポリフェノールが溶け出す果実湯。甘い香りに包まれて心身ともにリフレッシュ。'
      },
      {
        title: 'パティシエ特製プレミアムアップルパイ',
        desc: '信州産ふじりんごを贅沢に使用。発酵バターの香ばしさと果実のジューシーさが絶妙。'
      },
      {
        title: '信州牛×信州サーモンの特選会席',
        desc: '清流で育った信州サーモンのお造りと、柔らかくジューシーな信州プレミアム牛のステーキ。'
      }
    ]
  },
  {
    slug: 'organic-forest-sauna-cold-spring-stay',
    keyword: 'サウナ 水風呂 温泉',
    searchQuery: '薪サウナ 温泉',
    title: '【極上のととのい】森の薪サウナ＆天然冷鉱泉水風呂！大自然の中で深呼吸する森のリトリート宿5選',
    description: 'パチパチと薪がはぜる音、白樺のアロマロウリュ、そして地下から湧き出るシングル〜15℃の極上天然水風呂！森の外気浴でディープリラックスできる、サウナー絶賛の全国リトリート温泉宿を厳選紹介。',
    heroBadge: '薪サウナ＆天然冷鉱泉',
    leadTitle: '薪の爆ぜる音と森のフィトンチッド。天然水風呂と外気浴で叶える最高峰のととのい体験',
    leadContent: 'サウナ愛好家が最後に辿り着く「本物のサウナ体験」。フィンランド製薪ストーブが生み出す柔らかな熱気とセルフロウリュ、そして飲めるほどピュアな天然湧水や冷鉱泉をそのまま掛け流す極上水風呂。木々のざわめきと鳥のさえずりを聴きながらの外気浴は、まさに極上の瞑想時間です。サウナ飯と温泉も充実したリトリート宿で心身をリセットしてください。',
    features: [
      {
        title: '本格フィンランド式薪サウナ',
        desc: '柔らかな輻射熱と薪の香り。白樺ヴィヒタを使ったセルフロウリュで深い発汗を促進。'
      },
      {
        title: '天然湧水・冷鉱泉の贅沢かけ流し水風呂',
        desc: '肌あたりの柔らかい天然水が体を優しく包み込み、羽衣を纏うような異次元の爽快感。'
      },
      {
        title: '大自然のウッドデッキ外気浴スペース',
        desc: 'インフィニティチェアで森林浴。森の澄んだ空気を胸いっぱいに吸い込む最高のととのい。'
      }
    ]
  },
  {
    slug: 'traditional-kyoto-nishijin-ori-kimono-stay',
    keyword: '京都 数寄屋造り 旅館',
    searchQuery: '京都 嵐山 温泉 旅館',
    title: '【西陣織と伝統美】着物レンタル＆町家数寄屋造りの雅な滞在！京都・嵐山の風情溢れる温泉旅館5選',
    description: '京都の伝統工芸「西陣織」の帯や着物を身にまとい、歴史ある数寄屋造りや京町家で過ごす優雅な休日。嵐山温泉や湯の花温泉の名湯と、彩り鮮やかな本格京懐石を心ゆくまで堪能できる名宿を厳選紹介。',
    heroBadge: '西陣織＆京町家名湯',
    leadTitle: '艶やかな西陣織の着物に身を包み、古都の風情と京料理、名湯に浸る贅沢な京都時間',
    leadContent: '千年の都・京都が誇る最高峰の織物「西陣織」。館内でプロによる本格着付けや着物レンタルを楽しめるプランや、西陣織の美術品・装飾に彩られた数寄屋造りの宿で、非日常の優雅な時間を過ごしませんか。竹林の小径や渡月橋の散策の後は、肌に優しい天然温泉と、職人が一品一品丁寧に仕上げる季節の京懐石に舌鼓。日本の伝統美に浸る旅へご案内します。',
    features: [
      {
        title: '選べる上質着物＆プロ着付けサービス',
        desc: '西陣織の帯や正絹の着物を取り揃え。手ぶらで雅な着物姿に変身して古都の街歩きへ。'
      },
      {
        title: '歴史息づく数寄屋造りと庭園美',
        desc: '名工が手がけた伝統建築と手入れの行き届いた日本庭園が醸し出す静謐で優雅な空間。'
      },
      {
        title: '五感で味わう季節の本格京懐石料理',
        desc: '京野菜や旬の瀬戸内の海の幸を繊細な出汁で仕立てた、目にも美しい京料理の粋。'
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
  console.log('=== Round 33: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round33Configs) {
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

  for (const config of round33Configs) {
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
