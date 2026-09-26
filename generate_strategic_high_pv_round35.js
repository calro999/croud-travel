const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round35Configs = [
  {
    slug: 'traditional-mie-ise-ebi-abalone-gourmet-stay',
    keyword: '鳥羽 温泉 伊勢海老 宿',
    searchQuery: '鳥羽 伊勢海老 あわび 温泉',
    title: '【伊勢志摩の王道美食】活伊勢海老お造り＆極上あわび踊り焼き！鳥羽・賢島オーシャンビュー温泉宿5選',
    description: 'ぷりっぷりの活伊勢海老お造りと、磯の香り豊かで柔らかな極上あわび踊り焼き！伊勢神宮参拝と合わせて訪れたい、鳥羽・志摩・賢島のオーシャンビュー絶景露天風呂と最高峰の海鮮美食旅館を厳選紹介。',
    heroBadge: '伊勢海老＆あわび会席',
    leadTitle: '海の王様「伊勢海老」と贅沢「鮑」を味わい尽くす。伊勢志摩の絶景と名湯に癒やされる旅',
    leadContent: '古くから「御食国（みけつくに）」として朝廷に豊かな海の幸を献上してきた伊勢志摩。透き通る甘みの活伊勢海老のお造りや香ばしい鬼殻焼き、熱々ふっくらと焼き上げる鮑（あわび）の踊り焼きは、旅の醍醐味そのもの。伊勢神宮のお膝元で、リアス海岸の美しい夕景を望む露天風呂とともに、至高の海鮮美食ステイをお楽しみください。',
    features: [
      {
        title: '伊勢海老を「姿造り」「鬼殻焼き」で',
        desc: '獲れたてピチピチの活伊勢海老。ぷりぷりの歯ごたえと濃厚な甘みが口いっぱいに広がります。'
      },
      {
        title: '目の前で焼き上げる鮑の踊り焼き',
        desc: 'バター醤油やレモンでいただく肉厚あわび。驚くほど柔らかくジューシーな極上の味わい。'
      },
      {
        title: '鳥羽湾・英虞湾を一望する絶景温泉',
        desc: '穏やかな波音と満天の星に包まれる露天風呂で、旅の疲れをじんわりほぐす極上の癒やし。'
      }
    ]
  },
  {
    slug: 'luxury-private-onsen-with-starry-sky-terrace',
    keyword: '阿智村 星空 温泉 宿',
    searchQuery: '阿智村 星空 温泉 旅館',
    title: '【満天の星降る夜】客室専用星空テラス＆寝湯露天風呂！阿智村・八ヶ岳の夜空独占温泉宿5選',
    description: '日本一の星空と称される長野県阿智村や八ヶ岳の高原リゾート。客室専用の星空テラスや寝湯露天風呂から、誰にも邪魔されず夜空いっぱいに広がる天の川を鑑賞できるロマンチックな隠れ宿を厳選。',
    heroBadge: '星空テラス＆寝湯露天',
    leadTitle: '夜空を埋め尽くす天然のプラネタリウム。湯船に浮かびながら星空を仰ぐ贅沢な夜',
    leadContent: '街明かりから離れた澄んだ空気の高原や山あいで体験する、息をのむほど美しい星空露天風呂。プライベートテラスに備え付けられた寝湯やインフィニティ温泉に体を預ければ、まるで宇宙に浮かんでいるかのような感覚に。天体望遠鏡の貸出やナイトツアー付きプランも充実した、星空と名湯を愛する大人のための厳選宿をご紹介します。',
    features: [
      {
        title: '客室専用星空テラス＆プライベート寝湯',
        desc: '湯船に横たわりながら夜空を見上げる極上のリラックス。天の川や流れ星を独り占め。'
      },
      {
        title: '「日本一の星空」ナイトツアー提携',
        desc: '阿智村のヘブンスそのはらナイトツアーや専属星空ガイドによる特別な天体観測体験。'
      },
      {
        title: '美肌の湯として名高い昼神温泉・八ヶ岳湧水',
        desc: 'とろりとした湯ざわりの強アルカリ性美肌温泉で、心も体もすべすべに温まる至福のひととき。'
      }
    ]
  },
  {
    slug: 'super-panoramic-coastal-scenic-train-stay',
    keyword: '五能線 温泉 宿',
    searchQuery: '五能線 温泉 宿',
    title: '【絶景観光列車と温泉旅】五能線・リゾートしらかみ沿線！日本海パノラマ夕日と不老ふ死温泉宿5選',
    description: '日本一の人気ローカル線「JR五能線」や観光列車「リゾートしらかみ」で行く憧れの鉄道旅！波打ち際のひょうたん露天風呂で有名な黄金崎不老ふ死温泉や、日本海の夕日を望む名湯宿を徹底解説。',
    heroBadge: '五能線沿線＆日本海夕日名湯',
    leadTitle: '車窓を染める茜色の日本海と波打ち際の秘湯露天。ローカル鉄道で巡るロマン溢れる東北旅',
    leadContent: '青い海と奇岩が連なる海岸線を走る五能線。白神山地の自然遺産と日本海の絶景を同時に味わえる贅沢な鉄道ルートです。海と湯船の水面が一体化する黄金色の不老ふ死温泉や、夕食に日本海の獲れたてマグロ・アワビを味わえる海辺の名旅館。どこか懐かしくドラマチックな列車の旅と極上温泉の組み合わせをご堪能ください。',
    features: [
      {
        title: '波しぶきが届く海辺のインフィニティ露天',
        desc: '日本海と夕日を目の前に望む名物露天風呂。黄金色に輝く源泉かけ流しの濃厚な名湯。'
      },
      {
        title: 'リゾートしらかみ停車駅からのアクセス抜群',
        desc: '列車の運行時間に合わせて無料送迎あり。鉄道ファンにも初めての旅人にも安心。'
      },
      {
        title: '日本海直送！深浦マグロと津軽の郷土会席',
        desc: '脂の乗った本マグロのお造りや地魚のしゃぶしゃぶ、白神山地の山菜を贅沢に味わう夕食。'
      }
    ]
  },
  {
    slug: 'spring-fukui-echizen-crab-seafood-stay',
    keyword: 'あわら温泉 カニ 旅館',
    searchQuery: 'あわら温泉 越前がに 温泉 旅館',
    title: '【越前がにと若狭ふぐ】日本海の冬春極上味覚！福井・あわら温泉と三方五湖の美食名湯宿5選',
    description: '黄色いタグ付き最高級「越前がに」の茹でたてアツアツと、ぷりぷりの歯ごたえがたまらない「若狭ふぐ」！関西の奥座敷・あわら温泉の風情あふれる庭園旅館で、北陸最高峰の冬春グルメを堪能する旅。',
    heroBadge: '越前がに＆若狭ふぐ極上会席',
    leadTitle: '黄色いタグが誇る本物の越前がにと繊細な若狭ふぐ。あわら温泉の名宿で味わう北陸の極み',
    leadContent: '北陸新幹線延伸でますます身近になった福井県。冬から春にかけての主役は、ぎっしり詰まった甘い蟹身と濃厚なカニ味噌が絶品の「越前がに」と、日本海の荒波で引き締まった「若狭ふぐ」。あわら温泉の老舗旅館が手がけるフルコース会席は、まさに人生で一度は味わいたい贅沢。広大な日本庭園と美肌温泉に包まれる至福のひとときをお届けします。',
    features: [
      {
        title: '産地証明黄色タグ付き「活越前がに」',
        desc: '茹でガニ、焼きガニ、カニ刺し、甲羅味噌焼きまで、丸ごと一杯を贅沢に食べ尽くす極上プラン。'
      },
      {
        title: 'てっさ・てっちりで味わう名物若狭ふぐ',
        desc: '熟練の職人が薄造りに仕立てた芸術的なてっさと、出汁の旨味が染み渡る熱々ふぐ鍋。'
      },
      {
        title: '名湯百選「あわら温泉」の多彩な自家源泉',
        desc: '各宿ごとに異なる泉源を持つ贅沢なお湯。広々とした庭園露天風呂で心身ともにリラックス。'
      }
    ]
  },
  {
    slug: 'organic-forest-stream-plunge-sauna-stay',
    keyword: '渓流 露天風呂 サウナ',
    searchQuery: '渓流 露天風呂 サウナ 温泉',
    title: '【清流ダイブ＆天然ととのい】目の前の川へ直接飛び込む清流サウナ！渓流グランピング＆温泉宿5選',
    description: '薪サウナでアツアツに蒸された後、そのまま透き通る天然の清流へダイブ！マイナスイオン溢れる渓谷の風を浴びながらの外気浴は究極のととのい体験。天然温泉とサウナ飯も充実した大自然リゾートを厳選。',
    heroBadge: '清流ダイブ＆森の薪サウナ',
    leadTitle: '火照った体を清流の冷水で一気にクールダウン。大自然と一体化する究極のアウトドアサウナ',
    leadContent: 'サウナファンの間で熱狂的な人気を集める「天然の川を水風呂にする」リバーサウナ体験。木々に囲まれた本格的な薪サウナでセルフロウリュを堪能した後は、目の前を流れるエメラルドグリーンの清流へ飛び込み！川のせせらぎと鳥の声、木漏れ日を浴びながらのリクライニングチェアでの外気浴は別格です。サウナ後は宿の天然温泉で温まり、地元グルメに舌鼓を。',
    features: [
      {
        title: '清流直結の本格薪ストーブサウナ',
        desc: '川のすぐそばに設置されたサウナ小屋。薪の香りと熱々のロウリュで深部から発汗。'
      },
      {
        title: 'エメラルドグリーンの天然清流水風呂',
        desc: '飲めるほど澄んだ清流へダイブ！自然の水流と冷たさが極上の快感をもたらします。'
      },
      {
        title: '渓流を望むウッドデッキ外気浴スペース',
        desc: 'インフィニティチェアで森林浴。川のせせらぎとマイナスイオンに包まれるととのい。'
      }
    ]
  },
  {
    slug: 'traditional-tokushima-awa-odori-indigo-stay',
    keyword: '鳴門 温泉 鯛 旅館',
    searchQuery: '鳴門 温泉 旅館',
    title: '【阿波藍と鳴門鯛】藍染め体験＆鳴門の渦潮オーシャンビュー！徳島・鳴門の絶景温泉リゾート5選',
    description: '世界三大潮流・鳴門の渦潮を間近に望むオーシャンビュー温泉と、引き締まった身が絶品の「鳴門鯛」会席！日本の伝統文化「阿波藍染め」体験や、大塚国際美術館への観光にも便利な人気リゾート宿を厳選。',
    heroBadge: '阿波藍染め＆鳴門鯛美食',
    leadTitle: '激流が育む絶品「鳴門鯛」と藍色の美学。渦潮の海と美肌温泉に癒やされる徳島ステイ',
    leadContent: '鳴門海峡のダイナミックな渦潮と、爽快な大鳴門橋のパノラマビュー。潮流にもまれて育ったブランド魚「鳴門鯛」は、歯ごたえ抜群の刺身や鯛めし、宝楽焼きでいただくのが格別です。徳島が世界に誇る伝統文化「阿波藍」の染め体験ができる工房や、館内に藍染アートが配された洗練された空間。展望露天風呂から海を眺め、優雅な瀬戸内リゾートを満喫してください。',
    features: [
      {
        title: '引き締まった極上の味覚「鳴門鯛会席」',
        desc: 'お造り、鯛しゃぶ、名物鯛めしまで。脂の乗りとコリコリした食感がたまらない逸品。'
      },
      {
        title: '鳴門海峡と大鳴門橋を一望する展望温泉',
        desc: '海と空が溶け合うインフィニティ露天風呂。朝日の昇る水平線を眺める贅沢な湯浴み。'
      },
      {
        title: '阿波藍染め体験＆大塚国際美術館アクセス',
        desc: '自分だけの藍染ハンカチ作りや、世界の名画を陶板で鑑賞するアート旅の拠点に最適。'
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
  console.log('=== Round 35: Generating Strategic High-PV Feature Articles ===');
  
  for (const config of round35Configs) {
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

  for (const config of round35Configs) {
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
