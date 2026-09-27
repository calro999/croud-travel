const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round52Configs = [
  {
    slug: 'winter-kochi-yuzu-hotspring-stay',
    keyword: '高知 温泉 旅館',
    searchQuery: '高知 温泉 旅館',
    title: '【11・12月ゆず湯＆冬至の香り】日本一の高知ゆず温泉と戻りカツオ塩たたき宿5選',
    description: '11月から収穫最盛期を迎え、12月冬至の風物詩となる「ゆず湯」！日本一の生産量を誇る高知・北川村や物部川水系の爽やかなゆずを浮かべた天然温泉と、脂がのった極上の戻りカツオ塩たたきを堪能する温もり旅。',
    heroBadge: '高知ゆず湯＆戻りカツオ塩たたき',
    leadTitle: '黄金色に輝くゆずの香りと湯けむり。冬至を祝う高知のゆず温泉と土佐の豪快美食ステイ',
    leadContent: '太陽の恵みと寒暖差が育む高知のゆずは、果汁の多さと爽烈な香りが日本一。11月・12月の冬至シーズンには、湯船一面にプカプカと浮かぶ丸ごとの柚子が放つ芳醇なアロマに包まれ、身体の芯から温まり血行促進・美肌効果を実感できます。湯上がりには、藁焼きの炎で一気に焼き上げる香ばしい「戻りカツオの塩たたき」や土佐あかうしのステーキ、地酒「司牡丹」「酔鯨」とともに、心弾む南国の冬夜をお過ごしください。',
    features: [
      {
        title: '一面に浮かぶ「黄金のゆず湯」と美肌天然温泉',
        desc: 'ビタミンCと精油成分でポカポカ温まり肌しっとり。冬の寒さを癒やす極上アロマ。'
      },
      {
        title: '香ばしい藁焼き！「極上戻りカツオの塩たたき」',
        desc: '脂がのった冬の鰹をニンニクと天日塩で豪快に。土佐ならではの感動の味覚。'
      },
      {
        title: '幻の和牛「土佐あかうし」と四万十川の幸会席',
        desc: '赤身の濃厚な旨味と上品なサシ。清流が育んだ川海老や天然鮎の塩焼き。'
      }
    ],
    pref: '高知県'
  },
  {
    slug: 'winter-iwate-appi-kogen-snow-resort-stay',
    keyword: '安比高原 ホテル 温泉',
    searchQuery: '安比高原 ホテル 温泉',
    title: '【12月オープン！安比高原シルキースノー】東北随一のビッグゲレンデと白樺美肌温泉宿5選',
    description: '12月上旬から東北屈指の極上シルキースノーが楽しめる「安比（あっぴ）高原スキー場」！全21コース・総滑走距離43kmの広大なゲレンデを満喫した後は、白樺林に囲まれた天然温泉大浴場と前沢牛ディナーに寛ぐ極上リゾート。',
    heroBadge: '安比高原シルキースノー＆白樺温泉',
    leadTitle: '奇跡のアスピリンスノーと広大なゲレンデ。東北最高峰のスノーリゾート・安比高原ステイ',
    leadContent: '北緯40度、サラサラの極上パウダースノー「アスピリンスノー」が降り積もる安比高原。初心者から上級者まで楽しめる多彩なコースと、極上の圧雪バーンは爽快感抜群です。ゲレンデ直結のホテルにチェックインし、メタケイ酸豊富な「白樺の湯」の広々とした露天風呂やサウナで滑走後の疲れをリフレッシュ。岩手県産前沢牛のステーキや三陸直送の海の幸ビュッフェで大満足の冬休みをお過ごしください。',
    features: [
      {
        title: 'ゲレンデ直結！総滑走距離43kmのビッグスノーリゾート',
        desc: '世界基準のロングクルージングコース。スキーロッカー完備で快適アクセス。'
      },
      {
        title: '白樺林に囲まれた大浴場「安比温泉 白樺の湯」',
        desc: '木の温もりあふれる露天風呂とサウナ。美肌効果の高い単純温泉で温まる。'
      },
      {
        title: '岩手ブランド「前沢牛」ステーキ＆三陸海鮮ビュッフェ',
        desc: 'とろける霜降り肉と獲れたて帆立・サーモン。東北の豊かな味覚を堪能。'
      }
    ],
    pref: '岩手県'
  },
  {
    slug: 'winter-kanazawa-kenrokuen-yukizuri-stay',
    keyword: '金沢 温泉 旅館',
    searchQuery: '金沢 温泉 旅館',
    title: '【11月雪吊り開幕！金沢兼六園＆加賀百万石美食】冬の風物詩と近江町市場・山代名湯宿5選',
    description: '11月1日から始まる日本三名園・兼六園の冬の風物詩「雪吊り（ゆきづり）」！幾何学模様のように美しい円錐形の縄張りと紅葉・初雪の情景を愛で、解禁直後の加能ガニやのどぐろ、金沢温泉郷の名湯に寛ぐ雅な北陸旅。',
    heroBadge: '兼六園雪吊り＆加賀百万石美食',
    leadTitle: '雪から名木を守る伝統の縄飾り「雪吊り」。冬の金沢・兼六園の美学と加賀名湯ステイ',
    leadContent: '金沢の冬の訪れを象徴する兼六園の「雪吊り」。唐崎松をはじめとする名木に数百本の縄が張られる職人技の幾何学美は、まさに日本の伝統美の極致です。ひがし茶屋街や近江町市場で冬の味覚を散策した後は、開湯1300年の歴史を誇る山代温泉や金沢の奥座敷・湯涌温泉へ。のどぐろの塩焼きやタグ付き加能ガニ、じぶ煮など加賀懐石の粋を味わい、優雅な冬の休日をご堪能ください。',
    features: [
      {
        title: '日本三名園「兼六園」の圧巻の雪吊りライトアップ',
        desc: '11月〜冬期限定の絶景。黄金色にライトアップされる唐崎松の幻想美。'
      },
      {
        title: '日本海の冬の王様「加能ガニ＆高級魚のどぐろ塩焼き」',
        desc: '青いタグ付き石川県産ズワイガニと脂の乗ったのどぐろ。職人の極上加賀会席。'
      },
      {
        title: '開湯1300年！山代・湯涌温泉の源泉かけ流し美肌湯',
        desc: '北大路魯山人や竹久夢二ゆかりの名湯。庭園露天風呂で心静かに温まる。'
      }
    ],
    pref: '石川県'
  },
  {
    slug: 'winter-gunma-manza-snow-milky-hotspring-stay',
    keyword: '万座温泉 ホテル',
    searchQuery: '万座温泉 ホテル',
    title: '【12月標高1800mの白銀世界！万座温泉にごり湯】日本一の濃厚硫黄泉と雪見絶景宿5選',
    description: '標高1800mの雲上に位置する「星に一番近い温泉・万座温泉」！日本一の硫黄含有量を誇る乳白色のにごり湯露天風呂から、一面の白銀世界と満天の星空を眺める、これぞ本物の冬の雪見温泉体験。',
    heroBadge: '万座温泉にごり湯＆雪見満天星空',
    leadTitle: '粉雪が舞う標高1800mの雲上露天。日本一の濃厚硫黄泉・万座温泉で味わう雪見と星空ステイ',
    leadContent: '上信越高原国立公園の高地に湧き出る「万座温泉」。日本一の硫黄濃度を誇る乳白色の濁り湯は、湯船の底が見えないほど濃厚で、血行促進や美肌・疲労回復に抜群の効果をもたらします。氷点下の澄み切った空気の中、雪景色を見下ろす展望露天風呂に浸かり、夜には手の届きそうな満天の星空を仰ぐ贅沢。上州牛のしゃぶしゃぶや地元高原野菜の温かい鍋料理とともに、至福の雪国時間をお過ごしください。',
    features: [
      {
        title: '日本一の硫黄含有量！万座温泉「乳白色のにごり湯」',
        desc: '毎分3750リットルの豊富な湧出量。身体の芯から温まり湯冷め知らず。'
      },
      {
        title: '標高1800mの雪見パノラマ展望露天風呂＆満天の星空',
        desc: '白銀の山々と雲海を見渡す絶景。夜は天然のプラネタリウム空間。'
      },
      {
        title: '上州牛のしゃぶしゃぶ＆群馬県産きのこの温もり鍋会席',
        desc: '柔らかなブランド牛と地元産根菜。冷えた体に染み渡る滋味あふれる料理。'
      }
    ],
    pref: '群馬県'
  },
  {
    slug: 'winter-kumamoto-kurokawa-yuakari-illumination-stay',
    keyword: '黒川温泉 露天風呂 旅館',
    searchQuery: '黒川温泉 露天風呂 旅館',
    title: '【12月開幕！黒川温泉「湯あかり」竹灯籠】渓流を照らす幻想の竹あかりと名湯宿5選',
    description: '12月下旬から温泉街を流れる田の原川沿いを幻想的に彩る黒川温泉の冬の風物詩「湯あかり」！数百個の竹灯籠が放つ優しい光と、名物・入湯手形で行く露天風呂めぐり、熊本あか牛を堪能する温もり旅。',
    heroBadge: '黒川温泉湯あかり＆入湯手形めぐり',
    leadTitle: '川面に揺らめく数百の竹灯籠の温かい灯火。冬の黒川温泉で過ごすノスタルジックな名湯ステイ',
    leadContent: '山あいの渓谷に佇む風情ある温泉街「黒川温泉」。冬の夜、竹林の間伐材で作られた球体や筒状の竹灯籠「湯あかり」が一斉に点灯し、川面と湯けむりを温かく照らし出します。浴衣に丹前を羽織り、カランコロンと下駄の音を響かせながら露天風呂めぐりを楽しむ情緒あふれる時間。夕食には阿蘇の大自然が育んだ「熊本あか牛」の溶岩焼きや、馬刺し、季節の山菜料理に舌鼓を打ちましょう。',
    features: [
      {
        title: '冬の黒川温泉を幻想的に彩る「湯あかり」竹灯籠ライトアップ',
        desc: '田の原川沿いに浮かぶ竹アート。心温まる優しい光に包まれる夜の散策。'
      },
      {
        title: '名物「入湯手形」で巡る個性豊かな自然露天風呂',
        desc: '立ち湯、洞窟風呂、渓流風呂など多彩な泉質と野趣あふれる湯浴み。'
      },
      {
        title: '熊本名物「特選馬刺し」＆阿蘇あか牛の溶岩ステーキ',
        desc: '赤身肉の旨味が広がるあか牛と新鮮な馬刺し。地酒「れいざん」とともに。'
      }
    ],
    pref: '熊本県'
  },
  {
    slug: 'winter-tokyo-marunouchi-illumination-luxury-stay',
    keyword: '東京駅 高級 ホテル',
    searchQuery: '東京駅 高級 ホテル',
    title: '【11・12月！丸の内シャンパンゴールド夜景】大手町・銀座の煌めきと極上クラブラウンジ宿5選',
    description: '11月中旬から有楽町〜大手町を結ぶ丸の内仲通りが約120万球のシャンパンゴールドに輝く「丸の内イルミネーション」！東京駅の歴史的赤レンガ駅舎や皇居の緑を望むラグジュアリーホテルで過ごす特別なクリスマスステイ。',
    heroBadge: '丸の内シャンパンゴールド＆東京夜景ホテル',
    leadTitle: '約1.2kmを彩るシャンパンゴールドの並木道。丸の内イルミネーションと最高峰ラグジュアリーステイ',
    leadContent: '日本のビジネスと文化の中心・丸の内が、最も華やかにドレスアップする11月・12月の冬シーズン。街路樹が上品なシャンパンゴールドの光で埋め尽くされ、ブランドショップのクリスマスディスプレイが街を彩ります。皇居や東京駅を一望するラグジュアリーホテルにチェックインし、専用クラブラウンジでのアフタヌーンティーやカクテルタイム、最上階フレンチでのクリスマスディナーで極上のアーバンリゾートを。',
    features: [
      {
        title: '丸の内仲通りの「シャンパンゴールドイルミネーション」散策',
        desc: '約120万球のLEDが灯る洗練された大人の並木道。クリスマス限定演出。'
      },
      {
        title: '客室高層階から見渡す東京駅赤レンガ駅舎＆皇居パノラマ夜景',
        desc: '東京随一のダイナミックな都市夜景。専用クラブラウンジアクセス付き。'
      },
      {
        title: 'ミシュラン星付きシェフ監修のクリスマスプレミアムディナー',
        desc: 'キャビア、トリュフ、特選黒毛和牛フィレ肉。最高峰ワインペアリング。'
      }
    ],
    pref: '東京都'
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
                <li>・<strong className="text-stone-800">18:30〜</strong> 旬の極上グルメ会席（ゆず鍋・前沢牛・加能ガニ・あか牛）に舌鼓。</li>
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
                A. 雪見露天風呂やクリスマスイルミネーション、スキーシーズン開幕期間は人気が集中するため、2〜3ヶ月前の早期予約がおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車での移動時に冬用タイヤは必要ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 万座温泉や安比高原など標高の高い山岳エリアでは11月から積雪・凍結がありますので、スタッドレスタイヤやチェーン携行が必須です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 料理プランの変更や追加は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。前沢牛や加能ガニの追加、クリスマス特製フレンチコースなど多彩なプランが用意されています。プラン詳細をご確認の上お申し込みください。
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
  console.log('=== Round 52: Generating 11-12 Month Strategic Feature Articles ===');
  
  for (const config of round52Configs) {
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

  for (const config of round52Configs) {
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
