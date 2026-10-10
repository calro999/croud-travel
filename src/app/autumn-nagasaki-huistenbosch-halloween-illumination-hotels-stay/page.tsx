import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Footprints, Flame, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Castle, Ship
} from 'lucide-react';

export const metadata: Metadata = {
  title: "秋の長崎ハウステンボス：ヨーロッパの街並みが包まれるハロウィーンフェスティバル！世界最大級ナイトイルミネーション・秋のグルメ＆直営・オフィシャル厳選名宿5選",
  description: "日本一の広さを誇るテーマパーク「長崎ハウステンボス」が、オレンジとゴールドの光に包まれる「ハロウィーンフェスティバル」。本場ヨーロッパのレンガ造りの街並みや運河沿いには、巨大なカボチャのランタンやフォトジェニックなハロウィーン装飾が点灯。夜には世界最大1300万球が輝く「光の王国」イルミネーションと、大迫力のハロウィーンナイト花火が夜空を染め上げます。クラシカルなヨーロッパ調の直営クラシックホテルや、黄金色の温泉が湧くオフィシャルホテル厳選5選を徹底特集。",
  keywords: 'ハウステンボス ハロウィン, ハウステンボス イルミネーション, ホテルオークラJRハウステンボス, ホテルヨーロッパ, ホテルアムステルダム, ホテルデンハーグ, 長崎 旅行 秋, 佐世保 レモンステーキ',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/autumn-nagasaki-huistenbosch-halloween-illumination-hotels-stay'
  },
  openGraph: {
    title: "秋の長崎ハウステンボス：ヨーロッパの街並みが包まれるハロウィーンフェスティバル！世界最大級ナイトイルミネーション・秋のグルメ＆直営・オフィシャル厳選名宿5選",
    description: "日本一の広さを誇るテーマパーク「長崎ハウステンボス」が、オレンジとゴールドの光に包まれる「ハロウィーンフェスティバル」。本場ヨーロッパのレンガ造りの街並みや運河沿いには、巨大なカボチャのランタンやフォトジェニックなハロウィーン装飾が点灯。夜には世界最大1300万球が輝く「光の王国」イルミネーションと、大迫力のハロウィーンナイト花火が夜空を染め上げます。クラシカルなヨーロッパ調の直営クラシックホテルや、黄金色の温泉が湧くオフィシャルホテル厳選5選を徹底特集。",
    url: 'https://croud-travel.pages.dev/autumn-nagasaki-huistenbosch-halloween-illumination-hotels-stay',
    siteName: 'クラドトラベル',
    type: 'article',
    locale: 'ja_JP',
    images: [{
      url: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: '秋のハウステンボス ヨーロッパの街並みとイルミネーション'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "秋の長崎ハウステンボス：ヨーロッパの街並みが包まれるハロウィーンフェスティバル！世界最大級ナイトイルミネーション・秋のグルメ＆直営・オフィシャル厳選名宿5選",
    description: "日本一の広さを誇るテーマパーク「長崎ハウステンボス」が、オレンジとゴールドの光に包まれる「ハロウィーンフェスティバル」。本場ヨーロッパのレンガ造りの街並みや運河沿いには、巨大なカボチャのランタンやフォトジェニックなハロウィーン装飾が点灯。夜には世界最大1300万球が輝く「光の王国」イルミネーションと、大迫力のハロウィーンナイト花火が夜空を染め上げます。クラシカルなヨーロッパ調の直営クラシックホテルや、黄金色の温泉が湧くオフィシャルホテル厳選5選を徹底特集。",
    images: ['https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function HuistenboschHalloweenFeaturePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【秋の長崎ハウステンボス】ヨーロッパの街並みが包まれるハロウィーンフェスティバル！世界最大級ナイトイルミネーション・秋のグルメ＆直営・オフィシャル厳選名宿5選",
    "description": "日本一の広さを誇るテーマパーク「長崎ハウステンボス」が、オレンジとゴールドの光に包まれる「ハロウィーンフェスティバル」。本場ヨーロッパのレンガ造りの街並みや運河沿いには、巨大なカボチャのランタンやフォトジェニックなハロウィーン装飾が点灯。夜には世界最大1300万球が輝く「光の王国」イルミネーションと、大迫力のハロウィーンナイト花火が夜空を染め上げます。クラシカルなヨーロッパ調の直営クラシックホテルや、黄金色の温泉が湧くオフィシャルホテル厳選5選を徹底特集。",
    "image": "https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "T10:00:00+09:00",
    "dateModified": "T10:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "クラドトラベル編集部 欧風リゾート・イルミネーション取材班"
    },
    "publisher": {
      "@type": "Organization",
      "name": "クラドトラベル",
      "logo": {
        "@type": "ImageObject",
        "url": "https://croud-travel.pages.dev/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://croud-travel.pages.dev/autumn-nagasaki-huistenbosch-halloween-illumination-hotels-stay"
    }
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "ホーム",
        "item": "https://croud-travel.pages.dev/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "特集一覧",
        "item": "https://croud-travel.pages.dev/features"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "長崎ハウステンボス・ハロウィーン特集",
        "item": "https://croud-travel.pages.dev/autumn-nagasaki-huistenbosch-halloween-illumination-hotels-stay"
      }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ハウステンボス「ハロウィーンフェスティバル」の開催期間と見どころは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ハウステンボスのハロウィーンフェスティバルは、例年9月上旬から11月上旬にかけて開催されます。見どころは、ヨーロッパの街並みと調和した上品でロマンチックなハロウィーン装飾です。アンブレラストリートの限定ライティング、アートガーデンに登場する巨大パンプキンランタン、そしてナイトパレードやダンスショーなど、昼から夜までフォトジェニックな魅力にあふれています。秋の心地よい風が吹く運河沿いのカフェで楽しむハロウィーン限定スイーツも人気です。"
        }
      },
      {
        "@type": "Question",
        "name": "世界最大級1300万球が輝く「光の王国」イルミネーションの点灯時間とおすすめ鑑賞スポットは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "世界最大級の1300万球を誇るイルミネーション「光の王国」は、日没後の18時前後から一斉に点灯します。おすすめスポットは、一面の光の海が波打つ「アートガーデン（光の滝）」、運河の水面にイルミネーションが反射する「光と噴水の運河」、そして高さ105mのシンボルタワー「ドムトールン」の展望台です。展望台からは、ハウステンボス全景のイルミネーションパノラマを一望できます。"
        }
      },
      {
        "@type": "Question",
        "name": "直営ホテル（ホテルヨーロッパ、ホテルアムステルダム等）に宿泊する特別特典は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ハウステンボス直営ホテルに宿泊すると、多彩なプレミアム特典が受けられます。翌日以降の入場パスポートが割引または特典付与されるプランをはじめ、開園前の静寂なパークを散策できるアーリーエントリー、荷物の無料配送サービス（出国棟〜ホテル間）、専用クルーザーでの送迎など、直営ならではの優雅でストレスのないリゾート体験が可能です。"
        }
      },
      {
        "@type": "Question",
        "name": "秋のハウステンボスで絶対に味わいたい長崎名物グルメは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "秋のハウステンボスでは、長崎の誇る贅沢グルメが目白押しです。熱々の鉄板でジューシーな牛肉に甘辛いレモンダレをジュワッとかけて味わう「佐世保レモンステーキ」、具だくさんの「長崎ちゃんぽん」や「皿うどん」、そして秋が旬の近海産真鯛や長崎ハーブ鯖のお造りなど。園内のカフェでは、パンプキンモンブランやハロウィーンカクテルも楽しめます。"
        }
      },
      {
        "@type": "Question",
        "name": "秋（9・10月）の長崎・佐世保の気候と散策時の服装アドバイスは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "長崎県佐世保市に位置するハウステンボスは、大村湾に面した海洋性の気候です。9月〜10月の日中は20度〜24度前後と爽やかで散策に最適な気候ですが、運河や海沿いでは夜間に風が冷たく吹き抜けるため、夜のイルミネーション散策時にはジャケットやカーディガン、ストールなどの羽織りものが必須です。広大な敷地（東京ドーム約33個分）を歩き回るため、履き慣れたフラットシューズやスニーカーが適しています。"
        }
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "ホテルオークラＪＲハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9057/9057.jpg",
              rating: 4.59,
              reviews: 3277,
              price: "¥5,750〜",
              access: "西九州自動車道　佐世保大塔ICより車で15分/長崎空港よりバスで70分／JR博多駅より特急ハウステンボス号で110分",
              special: "スタッフのおもてなしに心和らぎ、天然温泉が疲れを癒す魅力あるリゾートホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9057%2F9057.html",
              story: "アムステルダム中央駅を模した重厚で優美なオランダ・ルネサンス様式の外観が圧倒的な存在感を放つ「ホテルオークラＪＲハウステンボス」。パーク出国棟（ウエルカムゲート）に隣接し、パーク専用のハーバークルーザー乗船場を備えた最高峰のロケーションを誇ります。自慢の天然温泉「琴乃湯」は、鉄分を豊富に含んだ赤褐色の源泉掛け流し湯。秋風に吹かれて冷えた身体を芯からじんわりと温めてくれます。客室はクラシカルで気品に満ち、和洋中・鉄板焼の多彩なレストランが揃い、オークラ伝統のハイエンドなおもてなしを堪能できます。",
              roomTip: "パークビュー客室またはプレミアムフロア。窓からハウステンボスの運河や風車、夜には光り輝くイルミネーションを望む特等席。",
              gourmetTip: "カフェレストラン「カメリア」の秋の味覚ディナーバイキング。長崎名物レモンステーキや旬の地魚握り、ハロウィーンスイーツプレート。",
              highlights: [
                "アムステルダム中央駅模した名門ホテル・源泉掛け流し天然温泉琴乃湯完備" ,
                "ホテル専用ハーバークルーザー乗船場完備・オークラ伝統のハイエンドディナー" ,
                "パークビュー客室から夜のイルミネーション一望・JRハウステンボス駅徒歩3分"
              ]
            },
            {
              id: 2,
              name: "ホテルヨーロッパ　ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9159/9159.jpg",
              rating: 4.62,
              reviews: 2519,
              price: "¥17,500〜",
              access: "博多駅→特急約100分／長崎駅→快速約90分／長崎空港→高速船約45分・バス約60分",
              special: "ハウステンボス直営／ハウステンボス最上位ホテル。クラシカルな世界観と専用クルーズで贅沢なひと時を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9159%2F9159.html",
              story: "ハウステンボスの最深部、静穏な内海に面して佇む最高級直営クラシックホテル「ホテルヨーロッパ ハウステンボス」。19世紀のオランダ貴族の邸宅を思わせるクラシカルな館内には、世界各地から集められたアンティーク家具や重厚なシャンデリアが輝き、ロビーには芳しい季節の花々が贅沢に飾られています。専用クルーザーで運河を進み、優雅にチェックインする体験はまるで映画のワンシーンのよう。夜には格式あるメインバーやラウンジで弦楽四重奏の生演奏が響き、大人のための極上のハロウィーンステイを叶えてくれます。",
              roomTip: "デラックスハーバービュールームまたはエグゼクティブスイート。運河に浮かぶクルーザーとヨーロッパの街並みを優雅に見渡す空間。",
              gourmetTip: "フランス料理「デ・アドミラル」の秋のスペシャリテコース。長崎牛のロティや近海産真鯛のポワレ、芳醇な赤ワインとのペアリング。",
              highlights: [
                "専用クルーザーで運河チェックイン・19世紀欧州貴族の館を再現した最高級直営" ,
                "毎夜響く弦楽四重奏の生演奏・クラシックフレンチと厳選ワインペアリング" ,
                "季節の生花が香るロビー・記念日や大人のハロウィーン旅行に最高の格式"
              ]
            },
            {
              id: 3,
              name: "ホテルアムステルダム　ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9157/9157.jpg",
              rating: 4.59,
              reviews: 2558,
              price: "¥16,200〜",
              access: "博多駅→特急約100分／長崎駅→快速約90分／長崎空港→高速船約45分・バス約60分",
              special: "ハウステンボス直営／ハウステンボステーマパーク内に位置する唯一のホテルで、抜群の立地と癒しの滞在を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9157%2F9157.html",
              story: "ハウステンボスの中心部・アムステルダム広場に位置し、パークの街並みの中にそのまま泊まれる唯一無二のパーク内直営ホテル「ホテルアムステルダム ハウステンボス」。一歩外へ出れば、そこはヨーロッパの華やかな広場。朝一番の静かな街並み散策から、夜遅くのイルミネーションやナイトショー鑑賞まで、時間を気にせずパークに溶け込むことができます。全室45平米以上の広々とした客室は、明るく上品なオランダ調のインテリアで統一。宿泊者専用ラウンジでは、ドリンクやワインを片手に贅沢なティータイムを過ごせます。",
              roomTip: "広場側のデラックスルームまたはローラ アシュレイ ルーム。英国ブランドの世界観に彩られた優美な花柄インテリア。",
              gourmetTip: "レストラン「ア・クール・ベール」のアクティブバイキング。オープンキッチンで焼き上げる牛ロースステーキや秋の地場野菜料理。",
              highlights: [
                "パーク中心アムステルダム広場に位置・閉園後もヨーロッパの街並みを独占" ,
                "全室45平米以上の広々空間・宿泊者専用クラブラウンジで優雅なティータイム" ,
                "朝一番の静かな石畳散策・オランダ調の上質な客室で過ごす夢のような滞在"
              ]
            },
            {
              id: 4,
              name: "ホテルデンハーグ　ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/130617/130617.jpg",
              rating: 4.32,
              reviews: 3134,
              price: "¥11,900〜",
              access: "博多駅→特急約100分／長崎駅→快速約90分／長崎空港→高速船約45分・バス約60分",
              special: "ハウステンボス直営／静かな海辺に建つ、オールインクルーシブホテル。添い寝のお子様はお食事無料！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130617%2F130617.html",
              story: "大村湾の穏やかな波打ち際に面し、爽快なオーシャンビューとヨーロッパの港町リゾートの風情を存分に楽しめる「ホテルデンハーグ ハウステンボス」。旧ウォーターマークホテルから生まれ変わった館内は、モダンで落ち着きのある洗練されたインテリアが特徴です。海沿いのプロムナードを散策しながら心地よい海風を感じられ、夜には静かな波音とともに満天の星空が広がります。レストランでは地元の新鮮な海の幸や長崎の郷土料理を取り入れた料理が提供され、コスパの高さと眺望の美しさで高い人気を誇ります。",
              roomTip: "オーシャンフロントルーム。大村湾のパノラマビューを眼下に望み、朝焼けや夕暮れのグラデーションに染まる海を眺める贅沢。",
              gourmetTip: "メインダイニング「エクセルシオール」の秋のグリルディナー。近海産鮮魚のソテーや長崎じげもん豚のロースト、地酒とのペアリング。",
              highlights: [
                "大村湾のオーシャンフロント・静かな波音と海沿いプロムナードの絶景リゾート" ,
                "旧ウォーターマークがリニューアル・大村湾の朝焼けパノラマと洗練グリル料理" ,
                "大自然と海に囲まれたリラクゼーション・抜群のコストパフォーマンス"
              ]
            },
            {
              id: 5,
              name: "ホテル日航ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1793/1793.jpg",
              rating: 4.45,
              reviews: 3142,
              price: "¥8,000〜",
              access: "●ＪＲハウステンボス駅から徒歩で10分●長崎市内から車で９０分●佐世保駅より車で30分",
              special: "ハウステンボスまでは徒歩３分♪花と緑に囲まれたリゾートホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1793%2F1793.html",
              story: "ハウステンボスの出国棟ゲートに隣接し、宿泊者専用の再入場ゲートを備えた利便性抜群のオフィシャルホテル「ホテル日航ハウステンボス」。緑豊かな中庭を望む落ち着いた館内には、大浴場を完備しており、広大なパークを歩き回った足をゆったり伸ばしてリフレッシュできます。客室は温かみのあるアースカラーで統一され、機能的な設備と行き届いたサービスが魅力。朝食バイキングでは、長崎名物の皿うどんやカステラ、角煮まんじゅうなど地元色豊かなメニューが豊富に並び、家族連れからカップルまで幅広く支持されています。",
              roomTip: "スーペリアツインまたはファミリールーム。落ち着いた空間と快適な寝具で、アクティブなテーマパーク観光を力強くサポート。",
              gourmetTip: "レストラン「ラヴァンドル」のハロウィーンディナーバイキング。シェフ特製のローストビーフやパンプキンスープ、ハロウィーンデザート。",
              highlights: [
                "出国棟直結の好アクセス・広々大浴場完備と長崎名物ずらりの朝食バイキング" ,
                "宿泊者専用の再入場ゲート利用可能・皿うどんや角煮まんじゅうの郷土バイキング" ,
                "ファミリーやグループも快適なゆとり客室・丁寧で行き届いた日航ホスピタリティ"
              ]
            }
  ];

  const faqList = (jsonLdFaq.mainEntity as any[]).map(e => ({ q: e.name, a: e.acceptedAnswer.text }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-600 selection:text-white">
        {/* Breadcrumb Bar */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-stone-200 text-xs text-stone-500 py-3 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center space-x-2">
            <Link href="/" className="hover:text-amber-600 transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-amber-600 transition">特集一覧</Link>
            <span>/</span>
            <Link href="/prefectures/nagasaki" className="hover:text-amber-600 transition">長崎県</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">長崎ハウステンボス・ハロウィーン特集</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950 text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs sm:text-sm font-semibold mb-6">
              <Castle className="w-4 h-4 text-amber-400" />
              9月・10月・11月初旬 欧風リゾート秋の祭典スペシャル
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">「秋の長崎ハウステンボス」<br className="hidden sm:inline" /> ヨーロッパの街並みが包まれるハロウィーンフェスティバル！<br /> 1300万球の光の王国イルミネーション＆直営・オフィシャル厳選名宿5選</h1>
            <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              本場オランダのレンガ造りの街並みと運河が広がる日本屈指の美しきリゾート「長崎ハウステンボス」。秋にはカボチャのランタンや上品な秋花が街中を埋め尽くす「ハロウィーンフェスティバル」が開幕。夕暮れとともに世界最大1300万球が輝く「光の王国」が灯り、ヨーロッパの古城や水面が幻想的な光に包まれます。専用クルーザーでチェックインする最高峰ホテルや源泉掛け流し天然温泉で憩う極上ステイをご案内します。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-amber-400" /> 期間: 9月上旬〜11月上旬
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-amber-400" /> エリア: 長崎県佐世保市ハウステンボス町
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-amber-400" /> 見どころ: ハロウィーンランタン・光の王国イルミ・運河クルーズ
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Section 1: ハロウィーンフェスティバルの魅力 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">European Autumn Magic</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                本場ヨーロッパの気品！オレンジと黄金に輝く「ハロウィーンフェスティバル」
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                ハウステンボスのハロウィーンは、一般的なホラーや仮装騒動とは一線を画す、クラシカルでエレガントなヨーロッパの伝統的な秋の収穫祭です。重厚なレンガ造りの建物が並ぶ街並みに、無数のカボチャランタンやマリーゴールド、秋のバラが咲き誇り、まるで絵本の世界に迷い込んだかのようなノスタルジックな風景が広がります。
              </p>
              <p>
                運河を行き交うカナルクルーザーから眺める街並みや、石畳のカフェテラスで味わう温かい紅茶とパンプキンパイは秋の旅の醍醐味。日没を迎えると、カボチャランタンに温かな光が灯り、アンブレラストリートが幻想的な秋色に輝くなど、散策するだけで心が洗われる優美な時間を過ごせます。
              </p>
              <p>
                パーク内各所には、巨大な木靴のオブジェや風車を背景にしたフォトスポットが点在。秋晴れの澄んだ青空と運河の水鏡に映るヨーロッパ建築のコントラストは、日本国内にいることを完全に忘れさせてくれる特別な美しさを放っています。
              </p>
            </div>
          </section>

          {/* Section 2: 光の王国イルミネーション */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-500 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Kingdom of Lights</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                世界最大1300万球が灯る「光の王国」！大迫力のナイトショーと秋の花火
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                「イルミネーションアワード」で長年全国第1位に輝き続けるハウステンボスの「光の王国」。秋の夜長は、澄み切った秋の夜空の下で1300万球の壮大なイルミネーションが息をのむ美しさを見せます。アートガーデン一面を青と白の光の波が埋め尽くす「光の滝」や、噴水と音楽が融合する「光と噴水の運河ショー」は圧巻のスケールです。
              </p>
              <p>
                週末や特定日には、秋の夜空を華やかに染める「ハロウィーンナイト花火」も開催。ヨーロッパの宮殿をバックに打ち上がる大輪の花火が、旅の思い出を一層ロマンチックに彩ります。さらに、白銀の世界を演出するファンタジックなプロジェクションマッピングなど、夜遅くまで感動が尽きることはありません。
              </p>
            </div>
          </section>

          {/* Section 3: 長崎の秋の美食とチーズ・ワイン文化 */}
          <section className="mb-16">
            <div className="border-l-4 border-rose-600 pl-4 mb-6">
              <span className="text-xs font-bold text-rose-600 tracking-wider uppercase">Autumn Gourmet & Wine</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                名物「佐世保レモンステーキ」＆欧州直輸入チーズと芳醇ワインの饗宴
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                ハウステンボスの秋旅を語る上で欠かせないのが、長崎とヨーロッパの美食文化の融合です。佐世保発祥のご当地グルメ「レモンステーキ」は、熱々の鉄板で薄切りのジューシーな牛肉を焼き上げ、醤油ベースに新鮮なレモン果汁を絞った特製ダレをジュワッとかけていただきます。さっぱりとした酸味と肉の旨味が絶妙で、最後にご飯を鉄板に投入してタレと絡めて食べるのが通の流儀です。
              </p>
              <p>
                また、園内の「チーズの城」や「ワインの城」では、オランダのゴーダチーズやエダムチーズをはじめ、世界各国の厳選チーズとワインが勢揃い。秋限定のボジョレーや熟成赤ワインとともに味わうラクレットチーズがけソーセージや、ハロウィーン特製のカボチャポタージュは、秋の夜長を至福の時間へと変えてくれます。
              </p>
              <p>
                さらに、大村湾の新鮮な海の幸を活かした真鯛のポワレや長崎和牛の炭火焼きなど、ホテルレストランの本格コースも充実。街角のカフェでは、長崎伝統の「食べるミルクセーキ」や秋栗のモンブランパフェをテラス席で味わい、運河を行き交う船を眺めながら優雅なティータイムを過ごせます。
              </p>
            </div>
          </section>

          {/* Section 3.5: オランダレンガ建築と大村湾の風情 */}
          <section className="mb-16">
            <div className="border-l-4 border-indigo-600 pl-4 mb-6">
              <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">Architecture & Waterfront</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                本物のオランダレンガ4000万個が創る奇跡！大村湾の潮風と運河リゾート
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                ハウステンボスの街並みが日本国内の他のテーマパークと決定的に異なるのは、その徹底した本物志向の都市設計にあります。園内に敷き詰められた石畳や重厚な建物には、オランダから直接海を渡って輸入された本物のレンガ約4000万個が使用されており、年月を経るごとに深みを増すヨーロッパの歴史的街並みの質感を忠実に再現しています。
              </p>
              <p>
                全長約6kmにも及ぶ運河には海水が引き込まれ、潮の満ち引きとともに清らかな大村湾の生態系が息づいています。秋風が心地よい季節、白鳥が優雅に泳ぐ運河沿いのプロムナードを歩き、高さ105mのドムトールンの鐘の音に耳を傾けるひとときは、旅人の心を日常のストレスから解き放ち、深い癒やしと豊かさを与えてくれます。
              </p>
            </div>
          </section>

          {/* Section 4: 厳選名宿5選 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-8">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Verified Hotels via Rakuten API</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【楽天トラベル実データ連携】ハウステンボス直営＆オフィシャル厳選名宿5選
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                ※公式リアルタイムAPIから取得した宿泊料金目安・レビュー評価・アクセス情報を掲載しています。
              </p>
            </div>

            <div className="space-y-8">
              {hotels.map((h) => (
                <div key={h.id} className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition">
                  <div className="p-5 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded bg-amber-50 text-amber-700 border border-amber-200">
                        厳選第{h.id}位
                      </span>
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <span className="flex items-center text-amber-500 font-bold">
                          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 mr-1" />
                          {h.rating}
                        </span>
                        <span className="text-stone-400">({h.reviews.toLocaleString()}件)</span>
                        <span className="text-amber-600 font-black text-sm sm:text-base">
                          {h.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {h.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{h.access}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
                      {h.story}
                    </p>

                    <div className="bg-stone-50 rounded-lg p-3.5 space-y-2 mb-5 text-xs text-stone-600">
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">客室の魅力:</strong>
                        {h.roomTip}
                      </div>
                      <div>
                        <strong className="text-stone-800 font-semibold mr-1">秋の味覚＆ディナー:</strong>
                        {h.gourmetTip}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                        宿泊ポイント・魅力
                      </h4>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow-sm transition"
                      >
                        <span>楽天トラベルでプラン・空室を確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5: 1泊2日モデルコース */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Romantic Itinerary</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【1泊2日モデルコース】欧風ハロウィーン散策・光の王国＆源泉温泉満喫ルート
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                  1日目：専用クルーザー乗船・秋の街並み散策＆1300万球イルミネーション
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">11:00 ハウステンボス到着＆専用クルーザーで優雅にチェックイン</strong><br />
                    ホテルヨーロッパやオークラに荷物を預け、運河を巡るクルーザーでパーク中心部へ。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">12:30 アムステルダム広場で佐世保レモンステーキランチ</strong><br />
                    テラス席で熱々の鉄板ステーキと秋風を堪能。爽やかなレモンダレが食欲をそそる。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">14:30 ハロウィーンデコレーション巡り＆限定スイーツ</strong><br />
                    巨大カボチャランタンや秋の花々が咲き誇るフラワーロードで記念撮影。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">18:00 「光の王国」点灯＆ドムトールン展望台からの夜景</strong><br />
                    1300万球が一斉に点灯！高さ105mのタワーから眼下に広がる光の絨毯に息をのむ。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">20:00 ナイトカナルクルーズ鑑賞＆本格フレンチディナー</strong><br />
                    水面に映るイルミネーションを眺めながら優雅なディナー。夜風を感じてホテルへ。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">22:00 オークラの天然温泉「琴乃湯」で温まり就寝</strong><br />
                    黄金色の塩化物泉に浸かり、広大なパークを歩いた足を心ゆくまで癒やす。
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                  2日目：朝の静かなヨーロッパ散策・長崎名物朝食＆お土産ショッピング
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">07:30 朝の清々しい石畳を散歩＆シェフ特製モーニング</strong><br />
                    観光客の少ない朝のヨーロッパの街並みを満喫。焼きたてパンと長崎の恵みで朝食。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">10:00 パーク内の美術館・アトラクション体験＆お買い物</strong><br />
                    オランダ民芸品や直営チーズの城、チョコレートの館で秋の限定スイーツをセレクト。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">13:30 長崎カステラや佐世保バーガーを味わい帰路へ</strong><br />
                    お土産をたっぷり抱え、JR特急ハウステンボス号や長崎空港行きバスで快適に帰路へ。
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 6: 注意点 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-500 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Travel Tips</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                秋のハウステンボスを快適に満喫するためのコツ
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  広大な敷地の移動手段の確保
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  園内は東京ディズニーランドの約1.5倍。カナルクルーザーやパークバス、レンタサイクル（フィッツ）を賢く活用して体力を温存しましょう。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Sunrise className="w-4 h-4 text-amber-500" />
                  海風による夜間の冷え込み対策
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  大村湾に面しているため、秋の夜は海風で急激に冷え込みます。光の王国や花火鑑賞時はストールや防風ジャケットを必ず持参しましょう。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <ShieldCheck className="w-4 h-4 text-amber-500" />
                  直営・オフィシャル宿の特典活用
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  翌日再入場パスポートや手荷物無料配送サービスなど、提携宿ならではの特典を事前に確認しておくと時間と費用を大幅に節約できます。
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: FAQセクション */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                ハウステンボス・ハロウィーン よくある質問（FAQ）
              </h2>
            </div>

            <div className="space-y-4">
              {faqList.map((f, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                    <span className="text-amber-600 font-black">Q.</span>
                    <span>{f.q}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5 border-l-2 border-amber-100 mt-2">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: まとめ＆内部リンク */}
          <section className="border-t border-stone-200 pt-10 text-center">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-4">
              ヨーロッパの薫りと光の奇跡が待つ秋のハウステンボスへ
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
              カボチャランタンの優しい灯火、1300万球が織りなす圧倒的な光の王国、そして源泉掛け流し温泉やクラシカルな美邸に泊まる至福。非日常のヨーロッパ秋旅行へ出かけてみませんか。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <Link href="/features" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                ← 特集一覧に戻る
              </Link>
              <Link href="/prefectures/nagasaki" className="px-4 py-2 rounded-full bg-amber-50 hover:bg-amber-100 text-amber-700 font-semibold transition">
                長崎県の旅行ガイド・名宿一覧
              </Link>
              <Link href="/autumn-usj-halloween-horror-nights-osaka-bay-hotels-stay" className="px-4 py-2 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold transition">
                USJハロウィーン・ホラー・ナイト特集
              </Link>
              <Link href="/" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                クラドトラベル トップページ
              </Link>
            </div>
          </section>

        </main>
      </article>
    </>
  );
}
