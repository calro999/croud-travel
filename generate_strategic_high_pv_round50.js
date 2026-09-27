const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round50Configs = [
  {
    slug: 'winter-toyama-himi-kanburi-luxury-stay',
    keyword: '氷見 温泉 旅館',
    searchQuery: '氷見 温泉 旅館',
    title: '【11月下旬宣言！富山湾の王者・氷見寒ブリ】極上ブリしゃぶと立山連峰望む絶景温泉宿5選',
    description: '富山湾の冬の訪れを告げる「ひみ寒ぶり宣言」！丸々と太り極上の脂を蓄えた天然寒ブリの刺身、とろけるブリしゃぶ、香ばしいカマ焼き、そして海越しに雪化粧の立山連峰を望む奇跡のパノラマ温泉宿。',
    heroBadge: 'ひみ寒ぶり会席＆立山連峰絶景温泉',
    leadTitle: '荒波が育む脂の乗った最高峰の寒ブリ。富山湾の冬の奇跡「氷見寒ブリ」と絶景温泉ステイ',
    leadContent: '毎年11月下旬頃、富山湾に鳴り響く「ぶり起こし」の雷鳴とともに水揚げが本格化する「氷見の寒ブリ」。厳しい日本海の荒波を乗り越え、きめ細やかな脂を全身にまとった身は、まさに海の宝石です。さっと出汁にくぐらせて余分な脂を落とし、甘みと旨味を凝縮させる「ブリしゃぶ」や、濃厚なブリ大根は冬ならではの至福。海越しに白銀の立山連峰が浮かび上がる富山湾の絶景露天風呂に浸かり、心温まる贅沢な時間をお過ごしください。',
    features: [
      {
        title: '本場・氷見港直送「極上ひみ寒ぶりフルコース」',
        desc: '寒ブリのお造り、とろけるブリしゃぶ、脂ののったカマ塩焼き、濃厚ブリ大根。'
      },
      {
        title: '海越しに3000m級の立山連峰を望む絶景展望露天風呂',
        desc: 'ナトリウム塩化物泉の温まり名湯。朝日に輝く雪山と富山湾のコントラスト。'
      },
      {
        title: '白エビ・紅ズワイガニ・富山湾の旬魚の競演',
        desc: '天然の生け簀と称される富山湾の幸。地酒「勝駒」や「立山」とともに。'
      }
    ],
    pref: '富山県'
  },
  {
    slug: 'winter-fujikawaguchiko-momiji-fuji-view-stay',
    keyword: '河口湖 富士山 露天風呂 旅館',
    searchQuery: '河口湖 富士山 露天風呂 旅館',
    title: '【11月河口湖紅葉まつり＆初冠雪富士】もみじ回廊ライトアップと富士山ビュー客室露天宿5選',
    description: '11月に見頃を迎える河口湖紅葉まつり！約60本の巨木モミジが約1.5kmにわたって深紅に染まる「もみじ回廊」ライトアップと、雪化粧した初冠雪の富士山を客室専用露天風呂から真正面に望む贅沢ステイ。',
    heroBadge: '河口湖紅葉まつり＆初冠雪富士山',
    leadTitle: '深紅のモミジと白銀の富士山の共演。河口湖紅葉まつりと富士ビュー温泉リゾート',
    leadContent: '秋から初冬へと移ろう11月の富士五湖・河口湖。山頂に真っ白な雪をかぶった「初冠雪の富士山」と、湖畔を真っ赤に染める紅葉のコントラストは、日本を代表する絶景です。夜には幻想的な「もみじ回廊」のライトアップ散策を楽しみ、冷えた体を富士山を真正面に望む客室展望露天風呂で温める贅沢。甲州ワインビーフや富士桜ポーク、山梨県産ワインを取り入れた極上フレンチや会席料理で特別な休日をお過ごしください。',
    features: [
      {
        title: '客室専用テラス・露天風呂から望む初冠雪の雄大な富士山',
        desc: '朝焼けに染まる赤富士や逆さ富士。誰にも邪魔されない特等席のパノラマ。'
      },
      {
        title: '河口湖もみじ回廊ライトアップ鑑賞アクセス抜群',
        desc: '幻想的な光に照らされる紅葉トンネル。宿からの無料送迎や徒歩圏内。'
      },
      {
        title: '甲州ワインビーフと山梨の旬野菜を取り入れた創作ディナー',
        desc: 'ぶどう粕で育った柔らかいブランド牛。地元ワイナリー厳選の甲州ワイン。'
      }
    ],
    pref: '山梨県'
  },
  {
    slug: 'winter-hakuba-snow-resort-ski-stay',
    keyword: '白馬 温泉 リゾート ホテル',
    searchQuery: '白馬 温泉 リゾート ホテル',
    title: '【12月白馬スキー場オープン！北アルプス雪山リゾート】八方尾根＆白馬八方美肌温泉宿5選',
    description: '12月上旬から順次シーズンインする日本屈指のビッグゲレンデ・白馬八方尾根＆エイブル白馬五竜！極上のパウダースノーで爽快クルージングを楽しんだ後は、日本屈指の強アルカリ性美肌湯・白馬八方温泉と信州グルメを満喫。',
    heroBadge: '白馬スノーリゾート＆八方美肌湯',
    leadTitle: '世界が魅了される北アルプスの白銀世界。12月開幕の白馬スキーリゾートと極上温泉ステイ',
    leadContent: '長野オリンピックの舞台にもなった世界屈指の山岳リゾート「白馬バレー」。標高差1000mを超えるロングコースと上質なパウダースノーは、スキー・スノーボード愛好家にとって冬の聖地です。ゲレンデ直結のホテルやシャトルバス充実の宿にチェックインし、pH11を超える日本屈指の高アルカリ温泉「白馬八方温泉」で滑走後の筋肉を優しくケア。信州プレミアム牛や信州サーモン、地酒とともに温かい冬の夜をお過ごしください。',
    features: [
      {
        title: '白馬八方尾根・五竜ゲレンデ直結＆リフト券付きプラン',
        desc: 'スキーロッカーや乾燥室完備。ゲレンデへのスムーズなアクセス。'
      },
      {
        title: '日本有数の高アルカリ性！白馬八方温泉「つるつる美肌湯」',
        desc: 'pH11.2の強アルカリ単純温泉。お肌がつるつるになる天然のクレンジング湯。'
      },
      {
        title: '信州プレミアム牛ステーキ＆信州サーモン・手打ち蕎麦',
        desc: '長野県が誇る極上食材を贅沢に。暖炉のあるラウンジで信州ワイン。'
      }
    ],
    pref: '長野県'
  },
  {
    slug: 'winter-aomori-sukayu-hakkoda-yukimi-stay',
    keyword: '八甲田 温泉 旅館',
    searchQuery: '八甲田 温泉 旅館',
    title: '【12月豪雪の秘湯！八甲田酸ヶ湯温泉＆奥入瀬】千人風呂と幻想的な氷瀑・雪見露天宿5選',
    description: '日本有数の豪雪地帯・八甲田山に佇む国民保養温泉地第1号「酸ヶ湯（すかゆ）温泉」！160畳の総ヒバ造り大浴場「ヒバ千人風呂」の白濁硫黄泉と、12月から凍り始める奥入瀬渓流の氷瀑を鑑賞する本物の雪国秘湯旅。',
    heroBadge: '八甲田酸ヶ湯温泉＆雪見秘湯',
    leadTitle: '静寂の雪山に立ち上る濃厚な湯けむり。八甲田の白濁名湯・ヒバ千人風呂と青森の滋味ステイ',
    leadContent: '冬の訪れとともに数メートルの雪に包まれる八甲田山麓。江戸時代から湯治場として愛される酸ヶ湯温泉の「ヒバ千人風呂」は、四つの異なる源泉が湧き出る木造建築の傑作です。強い酸性と硫黄の香りが漂う乳白色の熱湯に身を委ね、雪景色を眺めながら芯まで温まる感動。夜にはライトアップされた奥入瀬渓流の氷瀑ツアーに参加し、青森名物・大間まぐろや倉石牛、せんべい汁で心温まる冬をお過ごしください。',
    features: [
      {
        title: '160畳の総ヒバ造り「ヒバ千人風呂」白濁硫黄泉',
        desc: '開湯300年の名湯治場。四つの源泉が湧き出る圧倒的な湯量と薬効。'
      },
      {
        title: '冬の奇跡！奥入瀬渓流の「幻想的な氷瀑ライトアップ鑑賞」',
        desc: '滝が青く凍りつく氷瀑アート。宿泊者専用ナイトツアーで間近に体感。'
      },
      {
        title: '青森の美味満載！大間マグロ・倉石牛・八戸せんべい汁',
        desc: '冬の津軽・南部地方の郷土の味覚。地酒「田酒」「八仙」とともに。'
      }
    ],
    pref: '青森県'
  },
  {
    slug: 'winter-yokohama-minatomirai-christmas-stay',
    keyword: '横浜 みなとみらい 夜景 ホテル',
    searchQuery: '横浜 みなとみらい 夜景 ホテル',
    title: '【11・12月！横浜みなとみらいクリスマス夜景】赤レンガ倉庫マーケットとベイビュー宿5選',
    description: '11月下旬から開幕する本場ドイツの雰囲気を再現した「横浜赤レンガ倉庫クリスマスマーケット」！巨大モミの木ツリーやイルミネーションを鑑賞し、みなとみらいの煌めく夜景を一望する高層階バルコニー付きホテルで過ごす特別な夜。',
    heroBadge: '横浜クリスマス夜景＆赤レンガホテル',
    leadTitle: '海風薫るみなとみらいの光のパノラマ。赤レンガクリスマスマーケットと絶景ベイサイドホテル',
    leadContent: '11月下旬から12月のクリスマスシーズン、横浜みなとみらいは街全体が光のアートに包まれます。赤レンガ倉庫のクリスマスマーケットでは、ヒュッテ（木の屋台）でグリューワインやシュトーレンを楽しみ、巨大ツリーの下でロマンチックなひとときを。高層階ホテルの客室からは、大観覧車コスモクロック21や横浜ベイブリッジの煌めくパノラマ夜景を独占。シェフ特製のクリスマスディナーとともに極上の思い出を。',
    features: [
      {
        title: '客室バルコニーから見渡す大観覧車＆ベイブリッジの絶景夜景',
        desc: 'みなとみらい随一のパノラマビュー。シャンパンを片手に過ごすロマンチックな夜。'
      },
      {
        title: '横浜赤レンガ倉庫クリスマスマーケットへ徒歩すぐ',
        desc: '本場ドイツのクリスマス気分を満喫。ホットワインや限定スイーツ。'
      },
      {
        title: 'ホテル最上階レストランのプレミアムクリスマスディナー',
        desc: '厳選国産牛フィレ肉とオマール海老の極上フレンチ。ソムリエ厳選ペアリング。'
      }
    ],
    pref: '神奈川県'
  },
  {
    slug: 'winter-miyagi-matsushima-oyster-hotspring-stay',
    keyword: '松島 温泉 露天風呂 旅館',
    searchQuery: '松島 温泉 露天風呂 旅館',
    title: '【11月解禁！松島・三陸の極上生牡蠣＆焼き牡蠣】日本三景パノラマと海の幸会席名湯宿5選',
    description: '11月から本格シーズンを迎える日本三景・松島の冬の名物「松島かき」！大粒で濃厚なクリーミーさを誇る生牡蠣、香ばしい焼き牡蠣、熱々の牡蠣鍋と、松島湾に昇る絶景の朝日を望む展望露天風呂を堪能する宮城の冬旅。',
    heroBadge: '松島かき会席＆日本三景温泉',
    leadTitle: '海のミルクと称される松島牡蠣の濃厚な旨味。日本三景の絶景パノラマと松島温泉ステイ',
    leadContent: 'リアス海岸の豊かな森からミネラルが流れ込む松島湾で育つ「松島牡蠣」。11月になると身がぷっくりと膨らみ、濃厚なコクと磯の香りが口いっぱいに広がります。名物の「焼き牡蠣」食べ放題や、牡蠣フライ、土手鍋、牡蠣ご飯を味わい尽くす贅沢会席。松島湾に浮かぶ260余りの島々を望む松島温泉の「絹肌の湯」に浸かり、朝日に赤く染まる海と島影を眺める感動のひとときをお過ごしください。',
    features: [
      {
        title: '11月旬入り！本場松島産「極上牡蠣尽くし会席料理」',
        desc: '生牡蠣、焼き牡蠣、牡蠣フライ、熱々の牡蠣土手鍋、牡蠣の釜飯を堪能。'
      },
      {
        title: '日本三景・松島湾の島々を一望する展望パノラマ露天風呂',
        desc: '美肌効果の高いアルカリ性単純温泉「太古天泉 松島温泉」。'
      },
      {
        title: '仙台牛ステーキ＆三陸獲れたて海の幸の豪華共演',
        desc: 'A5仙台牛と金華サバ、アワビの贅沢料理。宮城の銘酒とともに。'
      }
    ],
    pref: '宮城県'
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
                <li>・<strong className="text-stone-800">18:30〜</strong> 旬の極上グルメ会席（氷見寒ブリ・松島牡蠣・信州牛）に舌鼓。</li>
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
                A. 寒ブリ解禁や紅葉ライトアップ、クリスマス期間は非常に人気が高く、週末を中心に早期に満室となります。日程が決まり次第、2〜3ヶ月前の早期予約がおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車での移動時に冬用タイヤは必要ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 北陸・信州・東北・甲信越エリアでは11月下旬以降に積雪や凍結の恐れがあるため、スタッドレスタイヤの装着が推奨されます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 料理プランの変更や追加は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。寒ブリのフルコースや生牡蠣の追加、お肉のランクアップなど多彩なプランが用意されています。宿泊プラン詳細をご確認の上お申し込みください。
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
  console.log('=== Round 50: Generating 11-12 Month Strategic Feature Articles ===');
  
  for (const config of round50Configs) {
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

  for (const config of round50Configs) {
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
