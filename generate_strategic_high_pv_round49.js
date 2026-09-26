const fs = require('fs');
const path = require('path');
const { searchRakutenHotels } = require('./rakuten_api_helper');

const round49Configs = [
  {
    slug: 'winter-hokkaido-sapporo-white-illumination-stay',
    keyword: '定山渓 温泉 露天風呂 旅館',
    searchQuery: '定山渓 温泉 露天風呂 旅館',
    title: '【11・12月！さっぽろホワイトイルミネーション】光の祭典と定山渓・小樽雪見温泉宿5選',
    description: '11月下旬から札幌の夜をロマンチックに彩る日本初のイルミネーション「さっぽろホワイトイルミネーション」！大通公園の光の芸術を鑑賞した後は、札幌の奥座敷・定山渓温泉の雪見露天風呂と北海道冬グルメを堪能する旅。',
    heroBadge: 'ホワイトイルミ＆定山渓雪見温泉',
    leadTitle: '雪と光が織りなす白銀のファンタジー。さっぽろイルミネーションと定山渓のぬくもりステイ',
    leadContent: '1981年に始まった伝統の「さっぽろホワイトイルミネーション」。大通公園や駅前通が数十万球のきらびやかな電飾で埋め尽くされ、ドイツクリスマス市も開催される冬の札幌はロマンチックそのもの。夜の散策を楽しんだ後は、車で約50分の定山渓温泉へ。雪景色を望む渓谷露天風呂で身体の芯まで温まり、北海道産のタラバガニやホタテ、白老牛ステーキなど北の大地の美味を贅沢に味わいましょう。',
    features: [
      {
        title: '大通公園の光の芸術「さっぽろホワイトイルミネーション」',
        desc: '日本三大イルミネーションの圧巻の輝き。ミュンヘン・クリスマス市も同時開催。'
      },
      {
        title: '定山渓温泉の雪見渓谷露天風呂＆サウナ',
        desc: '無色透明の塩化物泉。雪が舞い散る中で渓流のせせらぎを聴く極上の湯浴み。'
      },
      {
        title: '冬の北海道海鮮尽くし！タラバガニ・雲丹・白老牛会席',
        desc: '獲れたて冬の味覚を贅沢に使用。道産食材にこだわった創作ディナー。'
      }
    ],
    pref: '北海道'
  },
  {
    slug: 'winter-izu-kinmedai-shabushabu-luxury-stay',
    keyword: '伊豆 温泉 金目鯛 旅館',
    searchQuery: '伊豆 温泉 金目鯛 旅館',
    title: '【冬が一番脂がのる！稲取・下田の極上金目鯛】しゃぶしゃぶ＆姿煮と伊豆絶景温泉宿5選',
    description: '11月〜12月の初冬に脂の乗りが最高潮を迎える伊豆名物「地金目鯛」！鮮やかな紅色の身をサッと出汁にくぐらせる金目鯛しゃぶしゃぶや、秘伝のタレで煮付けた丸ごと姿煮、そして相模湾一望の絶景露天風呂を堪能する旅。',
    heroBadge: '極上金目鯛会席＆伊豆絶景温泉',
    leadTitle: 'とろける極上の脂と甘み。初冬の伊豆が誇る「稲取金目鯛」とオーシャンビュー名湯ステイ',
    leadContent: '日戻り操業の一本釣りで水揚げされる高級ブランド「稲取キンメ」。冬場は身にたっぷりと上品な脂を蓄え、刺身やしゃぶしゃぶで口に運ぶと上品な甘みが広がります。こってりと甘辛く煮付けた名物の「金目鯛の姿煮」はご飯もお酒も進む絶品の極み。相模湾や伊豆諸島を望むパノラマ展望露天風呂に浸かり、海から昇る朝日や満天の星空を眺める至福の休日をお過ごしください。',
    features: [
      {
        title: '一番脂がのる初冬の「極上地金目鯛しゃぶしゃぶ＆姿煮」',
        desc: '一本釣りブランド稲取キンメ。刺身、煮付け、しゃぶしゃぶ、釜飯で味わい尽くす。'
      },
      {
        title: '相模湾の水平線を一望するインフィニティ展望露天風呂',
        desc: '海風を感じながらの湯浴み。塩化物泉でポカポカ温まり美肌効果も抜群。'
      },
      {
        title: '伊勢海老・アワビ・地魚のお造り盛り合わせ',
        desc: '伊豆の海の幸が勢揃い。職人が腕を振るう贅沢な磯懐石料理。'
      }
    ],
    pref: '静岡県'
  },
  {
    slug: 'winter-gunma-kusatsu-yukimi-onsen-stay',
    keyword: '草津温泉 露天風呂 旅館',
    searchQuery: '草津温泉 露天風呂 旅館',
    title: '【12月初雪の湯畑ライトアップ】名湯草津の雪見露天風呂と湯もみ体験！源泉かけ流し宿5選',
    description: '12月になると湯けむりと白い雪が幻想的なコントラストを描く日本一の名湯・草津温泉！湯畑の幻想的なライトアップ散策と、酸性度の高い強烈な名湯を源泉かけ流しで楽しむ至福の雪見温泉ステイ。',
    heroBadge: '初雪の草津温泉＆湯畑ライトアップ',
    leadTitle: '湯けむりの向こうに舞い散る初雪。日本三名泉・草津温泉の雪見露天と湯畑情緒ステイ',
    leadContent: '日本一の自然湧出量を誇る草津温泉。12月に入ると初雪が降り始め、湯畑から立ち上る湯けむりと白雪が織りなす情景は、まさに日本の冬の原風景です。毎分4000リットル以上湧き出る強酸性の熱いお湯は、殺菌力と温まり効果が抜群。草津名物の「湯もみショー」を見学した後は、雪景色を望む客室露天風呂や広大な大浴場で心ゆくまで名湯を満喫し、上州牛のすき焼きに舌鼓を打ちましょう。',
    features: [
      {
        title: '雪化粧した湯畑を望む幻想的な夜間ライトアップ散策',
        desc: '湯けむりと雪のグラデーション。下駄を鳴らして歩く冬の温泉街情趣。'
      },
      {
        title: '日本屈指の酸性度！草津温泉「源泉かけ流し雪見露天」',
        desc: '湯畑源泉や万代鉱源泉。身体の芯まで熱が届き、肌を引き締める名湯。'
      },
      {
        title: '上州牛のすき焼き＆群馬名物「おっきりこみ鍋」',
        desc: '柔らかなブランド牛と地元産きのこ・根菜の温かい郷土鍋料理。'
      }
    ],
    pref: '群馬県'
  },
  {
    slug: 'winter-chichibu-icicle-misotsuchi-stay',
    keyword: '秩父 温泉 旅館',
    searchQuery: '秩父 温泉 旅館',
    title: '【12月開幕！三十槌の氷柱＆秩父温泉】大自然の氷のアートと秩父名物グルメ宿5選',
    description: '12月中旬から奥秩父の渓谷に姿を現す天然の氷の芸術「三十槌の氷柱（みそつちのつらら）」！夜の幻想的なライトアップ鑑賞と、秩父温泉の柔らかな美肌湯、名物・豚みそ漬け焼きや手打ち蕎麦を堪能する冬旅。',
    heroBadge: '三十槌の氷柱＆秩父名湯宿',
    leadTitle: '岩肌を覆う巨大な氷のカーテン。奥秩父の神秘的な氷柱アートと温もり美肌温泉ステイ',
    leadContent: '秩父の大自然が生み出す冬の風物詩「三十槌の氷柱」。岩清水が凍りついて作り出す幅30メートル、高さ8メートルもの巨大な氷柱群は圧巻の迫力です。青や紫にライトアップされた神秘的な氷の世界を鑑賞した後は、秩父の名湯温泉へ。アルカリ性単純温泉や炭酸水素塩泉の滑らかな湯に浸かり、秩父名物の「豚の味噌漬け」や地酒「武甲正宗」、手打ち十割蕎麦を味わい、心温まる冬の一夜をお過ごしください。',
    features: [
      {
        title: '大自然の造形美「三十槌の氷柱ライトアップ鑑賞」',
        desc: '渓谷に浮かび上がる氷の彫刻。奥秩父ならではの幻想的な冬絶景。'
      },
      {
        title: '肌当たり柔らかな秩父温泉郷の源泉露天風呂',
        desc: '山々の静寂に包まれる湯浴み。冷えた体を優しく温める美肌の名湯。'
      },
      {
        title: '秩父名物「豚の味噌漬け焼き」と香り高い手打ち蕎麦',
        desc: '伝統の味噌ダレに漬け込んだジューシーな豚肉と地元農家の採れたて野菜。'
      }
    ],
    pref: '埼玉県'
  },
  {
    slug: 'winter-niseko-powder-snow-ski-resort-stay',
    keyword: 'ニセコ 温泉 リゾート ホテル',
    searchQuery: 'ニセコ 温泉 リゾート ホテル',
    title: '【12月オープン！ニセコ極上パウダースノー】世界が称賛するJAPOWと羊蹄山ビュー宿5選',
    description: '12月上旬からスキー場が続々オープン！世界中のスキーヤー・スノーボーダーが憧れる最高峰の粉雪「JAPOW（ジャパン・パウダー）」を体験し、羊蹄山（蝦夷富士）を一望するインフィニティ温泉露天風呂と国際色豊かな極上リゾート。',
    heroBadge: 'ニセコパウダースノー＆羊蹄山温泉',
    leadTitle: 'ふわりと舞うシルキーな極上パウダースノー。世界最高峰のウインタースポーツとニセコ温泉リゾート',
    leadContent: '水分量が極めて少なく、まるで雲の上を滑っているような浮遊感を味わえるニセコのパウダースノー。12月のシーズンインとともにオープンする広大なゲレンデで爽快な滑走を楽しんだ後は、スキーイン・スキーアウト可能なラグジュアリーホテルへ。羊蹄山の雄姿を望む天然温泉露天風呂やヒノキサウナでリフレッシュし、北海道の新鮮な海の幸や地元産ラムチョップグリルを堪能しましょう。',
    features: [
      {
        title: 'スキーイン・スキーアウト直結！世界屈指のパウダースノー',
        desc: '極上の雪質と多彩なコース。ゲレンデ直結の快適なスノーアクセス。'
      },
      {
        title: '蝦夷富士「羊蹄山」を一望する絶景パノラマ露天風呂',
        desc: 'メタケイ酸豊富な美肌温泉。雪景色を見上げながらの贅沢な温まり時間。'
      },
      {
        title: '北海道産食材を活かしたインターナショナルビュッフェ＆グリル',
        desc: '道産牛ステーキ、獲れたて魚介、ラクレットチーズ料理とソムリエ厳選ワイン。'
      }
    ],
    pref: '北海道'
  },
  {
    slug: 'winter-mie-nabana-no-sato-illumination-stay',
    keyword: '湯の山温泉 露天風呂 旅館',
    searchQuery: '湯の山温泉 露天風呂 旅館',
    title: '【11・12月！なばなの里イルミネーション】光のトンネルと湯の山温泉・長島リゾート宿5選',
    description: '日本最大級のスケールを誇る「なばなの里イルミネーション」！長さ200メートルの光のトンネルや水上イルミネーションを鑑賞し、開湯1300年の名湯・湯の山温泉の美肌湯や伊勢湾の海の幸に寛ぐ極上旅。',
    heroBadge: 'なばなの里イルミ＆湯の山美肌湯',
    leadTitle: '視界一面を覆い尽くす光の絶景。なばなの里イルミネーションと御在所岳を望む湯の山温泉ステイ',
    leadContent: '毎年テーマを変えて壮大に展開される「なばなの里イルミネーション」。200mに及ぶ名物「光のトンネル」や、水面に輝く大河のイルミネーションは圧倒的な美しさを誇ります。光の芸術を満喫した後は、御在所岳の麓に佇む湯の山温泉へ。養老年間から続くラドンを豊富に含むアルカリ性ラジウム温泉に浸かり、美肌効果を実感。伊勢海老や蛤、松阪牛を取り入れた贅沢な会席料理で心満たされる冬の休日を。',
    features: [
      {
        title: '日本最大級！なばなの里「光のトンネル＆水上イルミ」',
        desc: '国内最高峰のイルミネーション。鏡池の紅葉ライトアップも11月下旬まで開催。'
      },
      {
        title: '開湯1300年！湯の山温泉の「美肌ラジウム温泉」',
        desc: '御在所岳の自然に囲まれた露天風呂。肌をすべすべに潤す名湯。'
      },
      {
        title: '桑名名物「焼き蛤」と松阪牛・伊勢海老の豪華会席',
        desc: '三重県が誇る高級食材を贅沢に。旨味あふれる郷土グルメの競演。'
      }
    ],
    pref: '三重県'
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
  console.log('=== Round 49: Generating 11-12 Month Strategic Feature Articles ===');
  
  for (const config of round49Configs) {
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

  for (const config of round49Configs) {
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
