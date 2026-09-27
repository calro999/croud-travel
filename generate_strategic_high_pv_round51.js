const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round51Configs = [
  {
    slug: 'winter-ibaraki-ankou-nabe-hotspring-stay',
    keyword: '大洗 温泉 旅館',
    searchQuery: '大洗 温泉 旅館',
    title: '【11月解禁！冬の贅沢あんこう鍋＆どぶ汁】濃厚あん肝と五浦・大洗の太平洋絶景温泉宿5選',
    description: '11月から本格シーズンを迎える茨城の冬の風物詩「あんこう鍋（どぶ汁）」！濃厚なあん肝をたっぷり溶かした特製味噌出汁で味わうコラーゲンたっぷりの身と、太平洋を一望するパノラマ展望露天風呂を満喫する冬旅。',
    heroBadge: '極上あんこう鍋＆太平洋絶景温泉',
    leadTitle: '冬の茨城が誇る海のフォアグラ「あん肝」の深いコク。名物どぶ汁と五浦・大洗の美肌温泉ステイ',
    leadContent: '「東のあんこう、西のふぐ」と称される冬の高級魚アンコウ。11月に入ると肝が丸々と肥え、一番美味しい旬を迎えます。水を一切使わず大根とあん肝の水分だけで煮込む究極の漁師料理「どぶ汁」や、上品な味噌仕立てのあんこう鍋は、身体の芯から温まる絶品の極み。太平洋の荒波と奇岩を望む五浦温泉や大洗温泉の露天風呂に浸かり、日の出パノラマと常陸牛、地酒に酔いしれる贅沢な休日をお過ごしください。',
    features: [
      {
        title: '本場・茨城の伝統技「濃厚あんこう鍋＆どぶ汁」',
        desc: 'あん肝を炒って溶かし込んだ濃厚スープ。七つ道具（皮・肝・身・ヒレ等）の美味。'
      },
      {
        title: '太平洋の水平線を一望するインフィニティ展望露天風呂',
        desc: 'ナトリウム塩化物泉の温まり名湯。海から昇る朝日の絶景パノラマ。'
      },
      {
        title: '常陸牛ステーキ＆大洗・那珂湊の獲れたて地魚会席',
        desc: 'A5常陸牛の陶板焼きと旬のヒラメ・アワビ。茨城の銘酒とともに。'
      }
    ],
    pref: '茨城県'
  },
  {
    slug: 'winter-shirakawago-gassho-snow-illumination-stay',
    keyword: '高山 温泉 露天風呂 旅館',
    searchQuery: '高山 温泉 露天風呂 旅館',
    title: '【12月雪化粧の世界遺産！白川郷合掌造り＆飛騨高山】白銀の原風景と飛騨牛・下呂名湯宿5選',
    description: '12月から一面の雪景色に包まれる世界遺産・白川郷の合掌造り集落！茅葺き屋根に積もる白雪と温かい灯りが織りなす日本の原風景を散策し、飛騨高山の古い町並みや日本三名泉・下呂温泉のトロトロ美肌湯で寛ぐ冬旅。',
    heroBadge: '白川郷の雪景色＆飛騨牛名湯宿',
    leadTitle: '絵画のように美しい白銀の合掌造り集落。飛騨高山の古い町並みと天下の名湯・下呂温泉ステイ',
    leadContent: '豪雪地帯ならではの急勾配の茅葺き屋根が並ぶ世界文化遺産「白川郷」。12月になると一面が深い雪に覆われ、まるで昔話の世界に迷い込んだような幻想的な白銀の景観が広がります。小京都・飛騨高山で古い町並みを散策し、宮川朝市を楽しんだ後は、天下の三名泉「下呂温泉」へ。まるで美容液のようなトロトロのアルカリ性単純泉に浸かり、名物の「A5飛騨牛の朴葉味噌焼き」やすき焼きで至福のひとときを。',
    features: [
      {
        title: '世界遺産「白川郷」の雪化粧した合掌造り集落散策',
        desc: '白銀に輝く日本の原風景。展望台からのパノラマビューは感動必至。'
      },
      {
        title: '日本三名泉「下呂温泉」のトロトロ美肌湯',
        desc: 'pH9.0以上のアルカリ性単純温泉。お肌がつるつるすべすべになる名湯。'
      },
      {
        title: '特選A5飛騨牛の朴葉味噌焼き＆すき焼き会席',
        desc: '香ばしい朴葉味噌ととろける極上霜降り肉。飛騨の地酒「久寿玉」とともに。'
      }
    ],
    pref: '岐阜県'
  },
  {
    slug: 'winter-yufuin-morning-mist-lake-kinrin-stay',
    keyword: '由布院 温泉 離れ 露天風呂 旅館',
    searchQuery: '由布院 温泉 離れ 露天風呂 旅館',
    title: '【11・12月幻想の朝霧！由布院金鱗湖＆由布岳】湯けむり包む由布院温泉の離れ客室露天宿5選',
    description: '秋から初冬の早朝にだけ現れる金鱗湖の神秘的な「朝霧（湯気霧）」！湖底から温泉が湧き出ることで生まれる幻想的な霧の風景と、雄大な由布岳を望む離れ客室専用露天風呂で誰にも邪魔されない極上ステイ。',
    heroBadge: '金鱗湖の朝霧＆由布院離れ客室露天',
    leadTitle: '湖面から立ち上る白い湯気と朝霧のベール。初冬の由布院で過ごす静謐なプライベート温泉時間',
    leadContent: '冷え込みが増す11月・12月の早朝、由布院の金鱗湖は湖水と温泉の温度差によって立ち上る湯気と朝霧に包まれ、息をのむほど神秘的な光景を見せます。朝の静寂のなか湖畔を散策した後は、全室離れ・源泉かけ流し露天風呂付きの隠れ宿で朝風呂を堪能。夕食には大分が誇るブランド牛「豊後牛（おおいた和牛）」の炭火焼きや関アジ・関サバのお造りを味わい、贅沢を尽くした休日をお過ごしください。',
    features: [
      {
        title: '初冬の早朝限定！金鱗湖の神秘的な「朝霧ファンタジー」',
        desc: '湖面を漂う湯気と霧。木漏れ日が差し込むドラマチックな朝の風景。'
      },
      {
        title: '完全プライベート！由布岳を望む「離れ客室専用露天風呂」',
        desc: '源泉かけ流しの柔らかな美肌湯。星空と鳥のさえずりに包まれる至福。'
      },
      {
        title: 'おおいた和牛サーロイン＆豊後水道の関アジ・関サバ会席',
        desc: 'きめ細やかなサシの旨味と引き締まった地魚の食感。大分の美食の極み。'
      }
    ],
    pref: '大分県'
  },
  {
    slug: 'winter-nagano-jigokudani-snow-monkey-stay',
    keyword: '渋温泉 旅館',
    searchQuery: '渋温泉 旅館',
    title: '【12月開幕！地獄谷スノーモンキー＆渋温泉郷】温泉に入る猿鑑賞と九湯めぐりレトロ宿5選',
    description: '世界中から観光客が訪れる冬の世界的名所「地獄谷野猿公苑のスノーモンキー」！雪のなかで気持ちよさそうに天然温泉に浸かる猿たちを観察し、石畳の風情ある渋温泉街で厄除け「九湯めぐり」を楽しむ冬の信州旅。',
    heroBadge: 'スノーモンキー＆渋温泉九湯めぐり',
    leadTitle: '雪降る渓谷で温泉に浸かる愛らしい猿たち。石畳のレトロな渋温泉で楽しむ外湯めぐりステイ',
    leadContent: '世界で唯一、野生のサルが温泉に入る姿が見られる「地獄谷野猿公苑」。12月の雪景色の中、目を細めて温まるスノーモンキーたちの姿は心癒やされる光景です。散策を楽しんだ後は、石畳の温泉街に木造建築の旅館が立ち並ぶ「渋温泉」へ。宿泊者限定の鍵で巡る「九つの外湯めぐり」で様々な泉質を満喫し、信州牛のすき焼きや信州名物・馬刺し、地酒「縁喜」とともに温かい夜を。',
    features: [
      {
        title: '世界が注目！地獄谷野猿公苑「スノーモンキー鑑賞」',
        desc: '雪の中で気持ちよさそうに湯浴みする野生の猿。冬ならではの奇跡の光景。'
      },
      {
        title: '石畳の風情ある温泉街で楽しむ「渋温泉・九湯めぐり」',
        desc: '宿泊者だけが入浴できる9つの共同浴場。九番湯「渋大湯」の茶褐色の名湯。'
      },
      {
        title: '信州牛の陶板焼き＆信州サーモン・手打ち蕎麦会席',
        desc: '北信州の豊かな恵み。薪ストーブや囲炉裏のあるノスタルジックな空間。'
      }
    ],
    pref: '長野県'
  },
  {
    slug: 'winter-oita-beppu-jigokumushi-hotspring-stay',
    keyword: '別府 鉄輪温泉 露天風呂 旅館',
    searchQuery: '別府 鉄輪温泉 露天風呂 旅館',
    title: '【冬こそ温まる！別府八湯地獄めぐり＆地獄蒸し】日本一の湧出量と湯けむり展望露天宿5選',
    description: '湧出量・源泉数ともに日本一を誇るおんせん県おおいたの象徴「別府温泉郷」！立ち上る白い湯けむりが冬空に映える鉄輪（かんなわ）温泉の「地獄蒸し料理」や、海地獄・血の池地獄などの地獄めぐり、そして極上にごり湯を満喫する旅。',
    heroBadge: '別府八湯地獄めぐり＆地獄蒸し温泉',
    leadTitle: '街中から立ち上る無数の湯けむり。日本一の温泉都市・別府で味わう地獄蒸しと多彩な名湯ステイ',
    leadContent: '至るところからモクモクと立ち上る湯けむりが冬の寒さを忘れさせてくれる「別府温泉」。高温の温泉噴気を活かした伝統の「地獄蒸し」は、素材の旨味とミネラルが凝縮されたヘルシーで極上のグルメです。コバルトブルーの海地獄や赤く煮えたぎる血の池地獄を巡った後は、別府湾を一望する展望露天風呂や泥湯・砂湯でデトックス。豊後水道の新鮮な海の幸や大分とり天とともに心満たされる休日を。',
    features: [
      {
        title: '温泉噴気で一気に蒸し上げる伝統の「名物・地獄蒸し料理」',
        desc: '旬の野菜、海鮮、和牛の旨味が凝縮。素材本来の甘みを引き出す調理法。'
      },
      {
        title: '別府湾を一望する絶景インフィニティ展望露天風呂',
        desc: '塩化物泉、硫黄泉、炭酸水素塩泉など多彩な泉質。朝日と夜景のパノラマ。'
      },
      {
        title: '神秘的なコバルトブルー「海地獄」など別府地獄めぐり',
        desc: '地球のエネルギーを体感する名所巡り。名物・地獄蒸しプリンも大人気。'
      }
    ],
    pref: '大分県'
  },
  {
    slug: 'winter-kobe-luminarie-illumination-stay',
    keyword: '有馬温泉 金泉 露天風呂 旅館',
    searchQuery: '有馬温泉 露天風呂 旅館',
    title: '【11・12月！神戸イルミネーション＆1000万ドル夜景】有馬温泉金泉と神戸牛極上宿5選',
    description: '11月〜12月にかけて街全体が光の芸術に包まれる神戸の冬！六甲山から見下ろす1000万ドルの夜景や神戸旧居留地のイルミネーションを満喫し、車で約30分の日本三古湯・有馬温泉の赤湯「金泉」と極上神戸牛ディナーに酔いしれる贅沢旅。',
    heroBadge: '神戸1000万ドル夜景＆有馬温泉金泉',
    leadTitle: '煌めく港町のイルミネーションと歴史ある金泉の温もり。神戸夜景と有馬温泉の贅沢マリアージュ',
    leadContent: '洗練された港町・神戸の冬を彩るイルミネーションと、六甲山・摩耶山から望む日本三大夜景「1000万ドルの夜景」。光り輝く街を散策した後は、六甲山の裏側に位置する名湯「有馬温泉」へ。鉄分と塩分を豊富に含み、身体を芯から温める赤褐色の「金泉」や透明な「銀泉」で極上の湯めぐり。夕食には世界に誇る「神戸ビーフ」の鉄板焼きやすき焼きを堪能し、贅を尽くした大人の休日をお過ごしください。',
    features: [
      {
        title: '六甲山から見渡す「1000万ドルのきらめくパノラマ夜景」',
        desc: '日本三大夜景の圧倒的な光の海。澄み切った冬空に輝く神戸港の眺望。'
      },
      {
        title: '日本最古の名湯「有馬温泉・金泉＆銀泉」の濃厚湯めぐり',
        desc: '保温効果抜群の赤褐色金泉。炭酸泉やラジウム泉の銀泉で美肌ケア。'
      },
      {
        title: '世界の美食家を魅了する最高峰「A5神戸牛ディナー」',
        desc: 'きめ細やかなサシと芳醇な香り。シェフが目の前で焼き上げる極上ステーキ。'
      }
    ],
    pref: '兵庫県'
  }
];

// Prefecture list for GEO internal linking
const prefectures = [
  { name: '北海道', slug: 'hokkaido' },
  { name: '青森県', slug: 'aomori' },
  { name: '岩手県', slug: 'iwate' },
  { name: '宮城県', slug: 'miyagi' },
  { name: '秋田県', slug: 'akita' },
  { name: '山形県', slug: 'yamagata' },
  { name: '福島県', slug: 'fukushima' },
  { name: '茨城県', slug: 'ibaraki' },
  { name: '栃木県', slug: 'tochigi' },
  { name: '群馬県', slug: 'gunma' },
  { name: '埼玉県', slug: 'saitama' },
  { name: '千葉県', slug: 'chiba' },
  { name: '東京都', slug: 'tokyo' },
  { name: '神奈川県', slug: 'kanagawa' },
  { name: '新潟県', slug: 'niigata' },
  { name: '富山県', slug: 'toyama' },
  { name: '石川県', slug: 'ishikawa' },
  { name: '福井県', slug: 'fukui' },
  { name: '山梨県', slug: 'yamanashi' },
  { name: '長野県', slug: 'nagano' },
  { name: '岐阜県', slug: 'gifu' },
  { name: '静岡県', slug: 'shizuoka' },
  { name: '愛知県', slug: 'aichi' },
  { name: '三重県', slug: 'mie' },
  { name: '滋賀県', slug: 'shiga' },
  { name: '京都府', slug: 'kyoto' },
  { name: '大阪府', slug: 'osaka' },
  { name: '兵庫県', slug: 'hyogo' },
  { name: '奈良県', slug: 'nara' },
  { name: '和歌山県', slug: 'wakayama' },
  { name: '鳥取県', slug: 'tottori' },
  { name: '島根県', slug: 'shimane' },
  { name: '岡山県', slug: 'okayama' },
  { name: '広島県', slug: 'hiroshima' },
  { name: '山口県', slug: 'yamaguchi' },
  { name: '徳島県', slug: 'tokushima' },
  { name: '香川県', slug: 'kagawa' },
  { name: '愛媛県', slug: 'ehime' },
  { name: '高知県', slug: 'kochi' },
  { name: '福岡県', slug: 'fukuoka' },
  { name: '佐賀県', slug: 'saga' },
  { name: '長崎県', slug: 'nagasaki' },
  { name: '熊本県', slug: 'kumamoto' },
  { name: '大分県', slug: 'oita' },
  { name: '宮崎県', slug: 'miyazaki' },
  { name: '鹿児島県', slug: 'kagoshima' },
  { name: '沖縄県', slug: 'okinawa' }
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

  const randomPrefs = prefectures.sort(() => 0.5 - Math.random()).slice(0, 4);

  return `import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: ${JSON.stringify(config.title)},
  description: ${JSON.stringify(config.description)},
  keywords: ${JSON.stringify(config.keyword + ', 11月旅行, 12月旅行, 冬休み, 温泉宿, 宿泊予約, 国内旅行, おすすめ旅館')},
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
    "datePublished": "2026-09-27T00:00:00+09:00",
    "dateModified": "2026-09-27T00:00:00+09:00",
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
              <span className="text-amber-600 font-bold tracking-wider text-xs md:text-sm uppercase">11・12月おすすめ宿泊施設</span>
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

        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】11・12月おすすめモデルコース＆旅程
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            初冬の魅力を余すところなく味わい尽くす1泊2日の理想の旅程プラン。旬のグルメ、絶景鑑賞、温泉を効率よく巡るタイムスケジュールです。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜観光・旬のディナーと名湯露天</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の観光名所や初冬の絶景スポットを散策。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> 宿へチェックイン。お茶菓子をいただきながら温かい客室でリラックス。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂で冷えた体を芯から温める贅沢な湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 旬の極上グルメ会席（あんこう鍋・飛騨牛・豊後牛・神戸牛）に舌鼓。</li>
                <li>・<strong className="text-stone-800">20:30〜</strong> 冬の澄んだ星空やライトアップ・夜景を眺める大人の夜。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・冬の特産品ショッピング</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 清々しい初冬の空気を感じながら目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の温かい朝食膳を堪能。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の海鮮市場や道の駅でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:30〜</strong> 地元名物ランチを楽しみ、心温まる思い出とともに帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と冬旅のワンポイント
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 11月〜12月の予約はいつ頃取れば良いですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き離れ客室やあんこう鍋・神戸牛などの特選料理プランは数ヶ月前から予約が埋まりやすいため、日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車での移動時に冬用タイヤは必要ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 飛騨高山・白川郷や信州・渋温泉エリアでは11月下旬以降に積雪や凍結の恐れがあるため、スタッドレスタイヤの装着が必須です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 料理プランの変更や追加は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。どぶ汁への変更や飛騨牛の増量、地獄蒸し食材の追加など多彩なプランが用意されています。宿泊プラン詳細をご確認の上お申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              全国の人気エリア・温泉地から宿を探す
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
${randomPrefs.map(p => `            <Link
              href="/prefectures/${p.slug}"
              className="text-xs px-3.5 py-2 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
            >
              ${p.name}のおすすめ宿・温泉一覧 →
            </Link>`).join('\n')}
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
  console.log('=== Round 51: Generating 11-12 Month Strategic Feature Articles ===');
  
  for (const config of round51Configs) {
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

  for (const config of round51Configs) {
    if (!featuresPageContent.includes(config.slug)) {
      const newFeatureItem = `    {
      slug: '${config.slug}',
      title: ${JSON.stringify(config.title)},
      description: ${JSON.stringify(config.description)},
      category: '11・12月の旅',
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
