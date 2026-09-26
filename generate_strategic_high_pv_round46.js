const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round46Configs = [
  {
    slug: 'traditional-okinawa-yaeyama-stargazing-stay',
    keyword: '石垣島 リゾート ホテル',
    searchQuery: '石垣島 リゾート ホテル',
    title: '【日本屈指の満天星空＆南十字星】石垣・西表・小浜島！大自然とプライベートヴィラ極上宿5選',
    description: '国内初の星空保護区に認定された八重山諸島の圧倒的な星空！全室プライベートプールやテラスを備えたリゾートヴィラから、天の川や南十字星を独占鑑賞できる極上のアイランドステイ。',
    heroBadge: '満天星空＆八重山リゾートヴィラ',
    leadTitle: '夜空を埋め尽くす満天の天の川。星空保護区・八重山諸島で過ごす神秘的なリゾートステイ',
    leadContent: '街明かりの少ない八重山諸島（石垣島・西表島・小浜島・竹富島）は、全天88星座のうち84星座が見られる世界屈指の天体観測地。テラスに寝転び波の音を聴きながら見上げる夜空には、息をのむほどの満天の星と天の川が広がります。昼はエメラルドグリーンのプライベートビーチでマリンアクティビティを楽しみ、夜は石垣牛や島野菜の琉球フレンチディナーに舌鼓を打つ極上の時間をお過ごしください。',
    features: [
      {
        title: '星空保護区認定エリア！客室テラスから望む南十字星',
        desc: '天体望遠鏡レンタルや星空ガイドツアー完備。神秘的な夜空を心ゆくまで。'
      },
      {
        title: 'プライベートプール＆デイベッド付きヴィラスイート',
        desc: '完全プライベート空間で過ごす贅沢。エメラルドグリーンの海が目の前に。'
      },
      {
        title: '石垣牛ステーキ＆近海魚の極上琉球フレンチ',
        desc: '島野菜、海ぶどう、沖縄特産フルーツを取り入れた色彩豊かなアイランドダイニング。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-scenic-bamboo-grove',
    keyword: '竹林 露天風呂 旅館',
    searchQuery: '竹林 露天風呂 旅館',
    title: '【静寂の竹林ライトアップ＆客室露天】風にそよぐ笹の音と美肌名湯に癒やされる隠れ宿5選',
    description: '美しく手入れされた青竹の林に囲まれる静謐な空間！客室専用露天風呂やテラスから、夜の幻想的な竹林ライトアップを眺めながら極上の湯浴みを楽しめる風雅な名旅館を厳選紹介。',
    heroBadge: '竹林ライトアップ＆客室露天風呂',
    leadTitle: '笹の葉が奏でる心地よいせせらぎ。青竹の緑と灯りに包まれる極上のプライベート温泉時間',
    leadContent: '凛とした空気が漂う竹林に囲まれた隠れ宿。昼は木漏れ日が降り注ぐ美しい緑陰、夜は柔らかな行灯やライトアップに照らされた幻想的な竹林の風景が広がります。誰にも邪魔されず客室露天風呂に身を委ね、笹の葉が触れ合う音に耳を傾ける至福のひととき。旬の筍や厳選和牛を取り入れた月替わりの懐石料理とともに、五感が研ぎ澄まされる大人の休日をお楽しみください。',
    features: [
      {
        title: '客室専用露天から愛でる幻想的な竹林ライトアップ',
        desc: '竹林を借景にした贅沢な露天風呂。湯気に包まれながら夜の静寂を満喫。'
      },
      {
        title: '旬の味覚を散りばめた風雅な月替わり本格懐石',
        desc: '筍料理、厳選黒毛和牛、旬の地魚など職人が一品一品丁寧に仕上げる美食。'
      },
      {
        title: '肌にしっとり馴染む自家源泉の美肌温泉',
        desc: '弱アルカリ性の柔らかな湯ざわり。心身の疲労を解きほぐす至高の温もり。'
      }
    ]
  },
  {
    slug: 'super-panoramic-coastal-sup-surfing-stay',
    keyword: '伊豆 SUP 露天風呂 ホテル',
    searchQuery: '伊豆 露天風呂 オーシャンビュー ホテル',
    title: '【絶景SUP＆マリンリゾート】海を一望するインフィニティ温泉とオーシャンフロント宿5選',
    description: '透明度抜群の海で楽しむスタンドアップパドルボード（SUP）体験！海上に立って海上散歩を楽しんだ後は、水平線と一体になるインフィニティ露天風呂と獲れたて海の幸ディナーを満喫する爽快リゾート旅。',
    heroBadge: 'SUP体験＆オーシャンビュー温泉',
    leadTitle: '青い海と空の間を漕ぎ進む爽快感。マリンアクティビティと海一望インフィニティ温泉ステイ',
    leadContent: '水面を滑るように進むSUPは、初心者でも気軽に楽しめる大人気のアクティビティ。伊豆や湘南、南紀白浜の穏やかな入り江で、海上からしか見られない洞窟や断崖絶壁の絶景を巡るアドベンチャーを満喫できます。海から上がった後は、宿直結の展望露天風呂へ直行。夕日に染まる水平線を眺めながら温泉でリフレッシュし、伊勢海老やアワビなど豪華な海の恵みに舌鼓を打ちましょう。',
    features: [
      {
        title: '初心者＆手ぶらOK！公認ガイド付きSUPクルーズ',
        desc: '安定感あるボードで海中観察や洞窟探検。透明度の高い海でのんびり海上散歩。'
      },
      {
        title: '海と空が溶け合う絶景インフィニティ展望露天風呂',
        desc: '水平線を望む圧倒的パノラマビュー。夕焼けや朝日に包まれる癒やしの湯浴み。'
      },
      {
        title: '獲れたて伊勢海老・アワビ・地魚の贅沢海鮮会席',
        desc: '港直送の新鮮なお造りや炭火焼き。海の香りに包まれる至高のグルメ。'
      }
    ]
  },
  {
    slug: 'spring-hyogo-kobe-beef-tajima-crab-stay',
    keyword: '有馬温泉 神戸牛 旅館',
    searchQuery: '有馬温泉 神戸牛 旅館',
    title: '【最高峰神戸牛＆香住紅ズワイガニ】有馬・城崎で味わう兵庫二大贅沢グルメと名湯宿5選',
    description: '世界に誇る最高峰ブランド牛「神戸ビーフ」と、日本海の冬・春の味覚「香住ガニ（紅ズワイガニ）」！日本三古湯・有馬温泉の金泉・銀泉や城崎温泉の外湯めぐりとともに、兵庫が誇る究極の美食を堪能する極上旅。',
    heroBadge: '神戸牛＆香住ガニ名湯宿',
    leadTitle: '世界の美食家を唸らせる神戸牛と甘み溢れる香住ガニ。名湯・有馬と城崎で味わう兵庫の粋',
    leadContent: '世界的名声を誇る「神戸牛」のきめ細やかなサシと芳醇な香り。鉄板焼きやすき焼きでいただく一口は、まさに至福の感動です。さらに兵庫・日本海側からは、みずみずしい甘みと濃厚なカニ味噌が自慢の「香住ガニ」の茹で・焼き・蟹刺しを贅沢に。有馬温泉の鉄分豊富な赤湯「金泉」や城崎温泉の柳並木を望む湯宿で、温泉と美食の最高峰をご堪能ください。',
    features: [
      {
        title: '口の中でとろける最高ランク「特選神戸牛ステーキ」',
        desc: '上質な脂の甘みと赤身の深い旨味。料理人が目の前で焼き上げる極上肉料理。'
      },
      {
        title: '日本海直送！甘み際立つ「香住紅ズワイガニ会席」',
        desc: '茹でガニ、焼きガニ、甲羅みそ焼き。繊細な身と濃厚な旨味を余すところなく。'
      },
      {
        title: '日本最古の名湯「有馬温泉・金泉銀泉」の濃厚湯',
        desc: '保温・保湿効果抜群の赤褐色金泉と、ラドン泉の透明銀泉で極上の湯めぐり。'
      }
    ]
  },
  {
    slug: 'organic-forest-infinity-panoramic-sauna-kyushu',
    keyword: '由布院 サウナ 温泉',
    searchQuery: '由布院 温泉 旅館',
    title: '【九州名峰パノラマサウナ＆阿蘇湧水】由布院・黒川・霧島！大自然の外気浴サウナ宿5選',
    description: '由布岳や阿蘇外輪山、霧島連峰の雄大な山並みを望む絶景サウナ！セルフロウリュ完備の本格フィンランド式サウナと、阿蘇・霧島の超軟水天然湧水水風呂で究極のディープリラックスを叶える宿。',
    heroBadge: '九州名峰サウナ＆阿蘇天然湧水',
    leadTitle: '由布岳の威容と阿蘇の清冽な名水。九州屈指の自然美に包まれる本格アウトドアサウナ',
    leadContent: '豊かな地熱と天然温泉に恵まれた九州のサウナパラダイス。由布院や黒川温泉の自然豊かな敷地に佇むデザイナーズサウナでは、ヒノキの香りに包まれるセルフロウリュと、阿蘇・九重連山由来のミネラル豊富な天然湧水かけ流し水風呂が待っています。高原の澄んだ風を浴びるウッドデッキ外気浴でととのった後は、豊後牛や熊本あか牛の炭火焼きを堪能する贅沢をお届けします。',
    features: [
      {
        title: '由布岳や森を一望するパノラマ展望フィンランドサウナ',
        desc: '薪ストーブの柔らかな熱とアロマロウリュ。ガラス越しに広がる絶景ビュー。'
      },
      {
        title: '阿蘇・九重水系の「超軟水・天然湧水かけ流し水風呂」',
        desc: '飲用可能なほど清らかな名水。肌当たりが優しく爽快なクールダウン。'
      },
      {
        title: '大自然の風と鳥の声に抱かれる天空外気浴デッキ',
        desc: 'リクライニングチェア完備。雄大な九州の山並みを眺める至高のととのい。'
      }
    ]
  },
  {
    slug: 'traditional-shiga-shigaraki-ware-art-stay',
    keyword: '琵琶湖 温泉 露天風呂 旅館',
    searchQuery: '琵琶湖 温泉 露天風呂 旅館',
    title: '【信楽焼の器美学と近江牛懐石】日本最古の銘柄牛！おごと温泉・信楽・琵琶湖畔の名湯宿5選',
    description: '日本六古窯の一つとして温かみある土の風合いが魅力の「信楽焼（しがらきやき）」！信楽焼の特注プレートで味わう日本最古のブランド牛「近江牛」と、琵琶湖を一望するおごと温泉の美肌湯に寛ぐ雅な休日。',
    heroBadge: '信楽焼の器＆近江牛名湯宿',
    leadTitle: '土の温もり宿る信楽焼ととろける近江牛。琵琶湖畔の名湯・おごと温泉で過ごす美食とアートの旅',
    leadContent: '奈良時代から受け継がれる素朴で力強い風合いの「信楽焼」。宿のダイニングでは、信楽焼の器や陶板に美しく盛られたA5ランク近江牛のステーキやすき焼き、琵琶湖特産のビワマスや鮎が目と舌を楽しませてくれます。比叡山の麓に広がるおごと温泉のアルカリ性単純温泉に浸かり、朝夕で表情を変える琵琶湖の雄大なレイクビューを眺めながら心豊かな休日をお過ごしください。',
    features: [
      {
        title: '日本六古窯「信楽焼」の特注器で楽しむ創作懐石',
        desc: '温かみある土の質感と色彩。料理の美しさを際立たせる芸術的な演出。'
      },
      {
        title: '日本最古のブランド和牛「特選近江牛ステーキ＆すき焼き」',
        desc: '独特の粘りと甘みのある脂。口の中でとろける極上の肉質を堪能。'
      },
      {
        title: '比叡山麓・おごと温泉の琵琶湖展望露天風呂',
        desc: 'ph9.0の高アルカリ性美肌湯。広大な琵琶湖のパノラマを望む絶景温泉。'
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
  console.log('=== Round 46: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round46Configs) {
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

  for (const config of round46Configs) {
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
