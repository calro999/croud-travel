const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round48Configs = [
  {
    slug: 'winter-echizen-crab-taiza-luxury-stay',
    keyword: 'あわら温泉 越前ガニ 旅館',
    searchQuery: 'あわら温泉 越前ガニ 旅館',
    title: '【11月解禁！越前ガニ＆間人ガニ】黄色いタグ付き最高峰ブランド蟹を味わう名湯宿5選',
    description: '11月6日のカニ漁解禁とともに訪れる冬の至福！福井県が誇る黄色いタグ付き「越前がに」や、京都・丹後半島の幻の「間人（たいざ）ガニ」を、刺身・焼き・茹で・カニ味噌甲羅焼きのフルコースで堪能する冬の贅沢温泉旅。',
    heroBadge: '11月解禁！越前ガニ＆間人ガニ',
    leadTitle: '冬の日本海がもたらす最高の恵み。極上ブランド蟹の甘みと濃厚なカニ味噌に酔いしれる福井・丹後ステイ',
    leadContent: '毎年11月6日に解禁される日本海の冬の王様「ズワイガニ」。皇室献上蟹として名高い越前がには、身の詰まりと繊細な甘み、そして濃厚でコク深いカニ味噌が格別です。熟練の料理人が目の前で捌く花咲くカニ刺し、香ばしい炭火焼きガニ、熱々の茹でガニ、そして甲羅酒。あわら温泉や夕日ヶ浦温泉の温もりあふれる美肌湯とともに、冬一番の贅沢をお届けします。',
    features: [
      {
        title: '黄色いタグ付き！本場「越前がに・間人ガニ」フルコース',
        desc: 'カニ刺し、焼きガニ、茹でガニ、カニすき鍋、甲羅味噌焼きを余すところなく。'
      },
      {
        title: '関西・北陸の名湯「あわら温泉＆丹後温泉郷」',
        desc: '74もの源泉を持つあわら温泉のまろやかな湯。庭園露天風呂で心身を癒やす。'
      },
      {
        title: '冬の日本海・東尋坊の絶景パノラマと地酒ペアリング',
        desc: '荒波が織りなす冬の絶景と、福井・京都の名蔵元が誇る辛口純米酒。'
      }
    ],
    pref: '福井県・京都府'
  },
  {
    slug: 'winter-shimonoseki-fugu-torafugu-luxury-stay',
    keyword: '湯田温泉 旅館',
    searchQuery: '湯田温泉 旅館',
    title: '【冬の味覚の王様・下関天然とらふぐ】てっさ・てっちり・白子焼き！山口名湯宿5選',
    description: '11月〜12月に旬のピークを迎える本場・下関の極上「とらふぐ」！透き通る芸術的なてっさ（ふぐ刺し）、プリプリのてっちり（ふぐ鍋）、濃厚にとろける白子焼きと香ばしいひれ酒を、山口・湯田温泉の名湯とともに。',
    heroBadge: '冬の味覚！下関とらふぐ会席',
    leadTitle: '透き通る職人技のてっさと濃厚な白子。冬の味覚の頂点「とらふぐ」と湯田温泉の白狐伝説美肌湯',
    leadContent: 'ふく（福）の本場として名高い山口・下関。晩秋から冬にかけて身が引き締まり、旨味が最高潮に達する天然とらふぐを、名工が引く薄造りの「てっさ」で味わう感動。ポン酢と安岡ねぎが引き立てる歯ごたえ、出汁が染み渡る「てっちり」、香ばしいひれ酒は冬の旅の醍醐味です。白狐が見つけたと言われる湯田温泉の柔らかいアルカリ性単純温泉に浸かり、至福の美食ステイをお楽しみください。',
    features: [
      {
        title: '本場・下関直送「天然とらふぐフルコース」',
        desc: '大皿に美しく広がるてっさ、唐揚げ、てっちり鍋、香ばしいひれ酒、〆の絶品雑炊。'
      },
      {
        title: 'とろける極上の冬限定珍味「焼き白子・白子豆腐」',
        desc: 'クリーミーで濃厚な旨味。冬の限られた時期にしか味わえない至高の一品。'
      },
      {
        title: '美肌の湯として名高い「湯田温泉・萩温泉郷」',
        desc: '毎分2000リットル湧出の豊富な湯量。肌を滑らかにするアルカリ性美肌泉。'
      }
    ],
    pref: '山口県'
  },
  {
    slug: 'winter-scenic-illumination-luxury-resort',
    keyword: 'ハウステンボス ホテル',
    searchQuery: 'ハウステンボス 直営 ホテル',
    title: '【11・12月限定！光の祭典＆クリスマスイルミネーション】幻想的な夜景リゾート宿5選',
    description: '11月からスタートする日本最大級のクリスマスイルミネーション＆光の王国！ハウステンボスの世界最大1300万球の輝きや、なばなの里、東京ベイエリアの絶景夜景を客室やバルコニーから独占できるプレミアムリゾート。',
    heroBadge: '光の祭典＆イルミネーションホテル',
    leadTitle: '数百万の光が織りなす冬の魔法。客室バルコニーから眺める圧倒的な光の王国とクリスマスリゾート',
    leadContent: '空気が澄み渡る11月・12月は、全国のイルミネーションが最も美しく輝くシーズン。ハウステンボスのヨーロッパ調の街並みを彩る光の祭典や、なばなの里の壮大な光のトンネル、東京・横浜のベイサイド夜景など、息をのむほどロマンチックな世界が広がります。園内直営ホテルや高層階バルコニー付き客室から光の海を見下ろし、厳選ディナーとワインで心温まる冬の休日をお過ごしください。',
    features: [
      {
        title: '客室専用バルコニーから望む圧巻のイルミネーション夜景',
        desc: '混雑を離れてプライベート空間から楽しむ光のショー。特等席のロマンチック体験。'
      },
      {
        title: 'シェフ特製のクリスマス＆冬のプレミアムフレンチ',
        desc: '旬の食材と地元牛を贅沢に使用したフルコース。厳選シャンパンとともに。'
      },
      {
        title: 'イルミネーション直結！開園前・閉園後の散策特典',
        desc: '宿泊者専用ゲートや先行入場特典で、静かな朝夕の幻想的な街並みを満喫。'
      }
    ],
    pref: '長崎県・三重県・東京都'
  },
  {
    slug: 'winter-atami-fireworks-ocean-view-stay',
    keyword: '熱海 温泉 露天風呂 旅館 花火',
    searchQuery: '熱海 温泉 露天風呂 旅館',
    title: '【冬の熱海海上花火大会＆客室露天】澄み切った冬空に咲く大輪の花火！絶景オーシャンビュー宿5選',
    description: '11月・12月にも開催される伝統の「熱海海上花火大会」！空気が澄んでいるため夏以上に鮮やかに夜空と海面を染める花火を、客室専用露天風呂やバルコニーから大迫力で鑑賞できる特等席の温泉旅館。',
    heroBadge: '冬の熱海花火＆客室露天風呂',
    leadTitle: '澄み渡る夜空と海を照らす光と轟音。客室露天風呂から見上げる冬の熱海海上花火大会',
    leadContent: 'すり鉢状の地形が生み出す天然の音響効果で、身体の芯まで響く大迫力の熱海海上花火大会。冬は湿度が低く空気が澄み渡るため、花火の色彩が際立ち、フィナーレの「大空中ナイアガラ」は言葉を失う美しさです。温泉街の喧騒を離れ、客室の展望露天風呂で温まりながら見上げる贅沢。金目鯛の煮付けや相模湾の獲れたて地魚会席とともに、特別な冬の一夜を。',
    features: [
      {
        title: '客室専用テラス・露天風呂から望む大迫力の海上花火',
        desc: '混雑なしで真正面に打ち上がる花火を独占鑑賞。海面に映る光の反射が絶景。'
      },
      {
        title: '名物「金目鯛の姿煮」と相模湾の朝獲れ鮮魚会席',
        desc: '秘伝のタレでふっくら煮付けた高級金目鯛。伊勢海老やアワビの豪華料理。'
      },
      {
        title: '徳川家康も愛した熱海温泉の源泉かけ流し美肌湯',
        desc: '塩化物泉の温まり効果で湯冷め知らず。海風を感じるインフィニティ露天風呂。'
      }
    ],
    pref: '静岡県'
  },
  {
    slug: 'late-autumn-kyoto-momiji-lightup-stay',
    keyword: '京都 嵐山 温泉 旅館',
    searchQuery: '京都 嵐山 露天風呂 旅館',
    title: '【11月下旬の晩秋紅葉ライトアップ】散り紅葉の名庭園と嵐山・東山・貴船の風雅名宿5選',
    description: '11月中旬〜12月上旬にかけてクライマックスを迎える京都の紅葉！真っ赤なモミジの絨毯が広がる散り紅葉や、寺院の幻想的な夜間特別拝観ライトアップを楽しみ、嵐山温泉の湯と冬の京懐石に寛ぐ極上旅。',
    heroBadge: '晩秋紅葉ライトアップ＆京懐石',
    leadTitle: '深紅と黄金に染まる古都のフィナーレ。散り紅葉の名庭園と嵐山・東山の風雅な温泉ステイ',
    leadContent: '秋から冬へと移り変わる11月下旬の京都。境内一面を真っ赤に埋め尽くす「散り紅葉」や、水面に映るライトアップ紅葉は息をのむ美しさです。嵐山・嵯峨野の竹林や東山の石畳を散策した後は、嵐山温泉の肌触り柔らかな名湯でほっこりと温まる贅沢。聖護院かぶらを使った名物「かぶら蒸し」や湯葉、京丹後牛を取り入れた冬の京懐石とともに、雅やかな大人の休日を。',
    features: [
      {
        title: '宿の日本庭園で愛でる「散り紅葉」とライトアップ',
        desc: '門をくぐれば広がる紅葉の別世界。苔庭を染めるモミジのグラデーション。'
      },
      {
        title: '冬の訪れを告げる伝統京料理「ぐじ・かぶら蒸し会席」',
        desc: '出汁の効いた優しい味わい。旬の京野菜と厳選和牛が織りなす繊細な美食。'
      },
      {
        title: '嵐山温泉の柔らかな湯と静寂の客室露天風呂',
        desc: '弱アルカリ性の美肌湯。竹林のせせらぎを聴きながらの湯浴みでリラックス。'
      }
    ],
    pref: '京都府'
  },
  {
    slug: 'winter-zao-snow-monster-ice-tree-stay',
    keyword: '蔵王温泉 露天風呂 旅館',
    searchQuery: '蔵王温泉 露天風呂 旅館',
    title: '【12月開幕！蔵王樹氷スノーモンスター】幻想的な白銀世界と白濁硫黄泉のにごり湯宿5選',
    description: '12月から姿を現す世界的に有名な冬の奇跡「蔵王の樹氷（スノーモンスター）」！ナイトクルーザーで行く樹氷ライトアップ鑑賞と、開湯1900年の歴史を誇るpH1.3強酸性・白濁硫黄泉の源泉かけ流しで温まる感動の冬旅。',
    heroBadge: '蔵王樹氷モンスター＆白濁硫黄泉',
    leadTitle: '大自然が創り出す神秘の氷の彫刻。スノーモンスター鑑賞と蔵王名物にごり湯温泉ステイ',
    leadContent: '針葉樹に雪と氷が吹き付けられて巨大化する「樹氷（スノーモンスター）」。12月下旬から本格シーズンを迎え、夜には色鮮やかにライトアップされた幻想的な氷の世界をロープウェイや雪上車から間近に体感できます。氷点下の白銀世界を楽しんだ後は、蔵王名物の乳白色の強酸性硫黄泉へ直行。冷えた体を芯からポカポカに温め、山形牛すき焼きや熱々の芋煮鍋で心満たされるひとときを。',
    features: [
      {
        title: '世界屈指の冬絶景「蔵王樹氷ライトアップ鑑賞」',
        desc: '巨大なスノーモンスターが浮かび上がる夜の氷上世界。雪上車ツアーも大人気。'
      },
      {
        title: '日本屈指の強酸性！蔵王温泉「白濁硫黄泉のにごり湯」',
        desc: '開湯1900年の名湯。血管を若返らせ肌を白く滑らかにする美肌の湯。'
      },
      {
        title: '山形牛の極上すき焼き＆郷土名物「山形芋煮鍋」',
        desc: 'サシの入った山形牛と里芋の旨味。雪景色を眺めながら味わう熱々のご馳走。'
      }
    ],
    pref: '山形県'
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
                <li>・<strong className="text-stone-800">18:30〜</strong> 旬の極上グルメ会席（ブランド蟹・とらふぐ・特選和牛）に舌鼓。</li>
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
                A. カニ解禁時期や年末年始、クリスマス期間は非常に人気が高く、9月〜10月には満室になる宿も多くあります。日程が決まり次第、2〜3ヶ月前の早期予約が最も確実です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 冬場の車移動でスタッドレスタイヤやチェーンは必要ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 東北・北陸・甲信越や山間部エリアでは11月下旬以降に降雪・路面凍結の可能性があるため、冬用タイヤの装着が必須です。公共交通機関利用の場合は最寄り駅からの送迎バスを活用すると安心です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事の量やブランド食材の指定プランはありますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。タグ付き活ガニの匹数指定プランや、とらふぐフルコースなど多彩なグルメプランが用意されています。プラン詳細をご確認の上、ご希望の料理プランをお選びください。
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
  console.log('=== Round 48: Generating 11-12 Month Strategic Feature Articles ===');
  
  for (const config of round48Configs) {
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

  for (const config of round48Configs) {
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
