import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, 
  Calendar, Utensils, Compass, ExternalLink, Snowflake, Flame, Building, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月愛知】三種の神器を祀る「熱田神宮」新春初詣＆名物「本場ひつまぶし」・極上名古屋コーチン鍋を味わう名宿5選",
  description: "11月の晩秋から新春1月にかけて、年間約200万人以上の参拝客で賑わう東海随一の聖地「熱田神宮」。三種の神器の一つ「草薙神剣（くさなぎのみつるぎ）」を祀る熱田の杜は、巨木が茂る神聖な静寂に包まれます。織田信長が桶狭間の戦い出陣前に必勝祈願したことでも知られ、新春の開運・厄除け初詣スポットとして絶大な人気を誇ります。参拝の後は、熱田発祥の伝統を誇る名物「本場ひつまぶし」の香ばしい鰻、冬の寒さに染み渡る濃厚な「名古屋コーチン鍋」、そして名駅や栄の煌びやかな冬イルミネーションを満喫。上質なもてなしと美食に酔いしれる厳選ホテル5選を徹底紹介します。",
  keywords: '熱田神宮 初詣, 熱田神宮 ひつまぶし, 名古屋 冬 旅行, 名古屋コーチン 鍋, 名古屋マリオットアソシアホテル, ANAクラウンプラザホテルグランコート名古屋, 名古屋観光ホテル, ヒルトン名古屋, 三井ガーデンホテル名古屋プレミア, 11月 12月 1月 愛知 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-aichi-nagoya-atsuta-jingu-hatsumode-hitsumabushi-stay/"
  },
  openGraph: {
    title: "【11・12・1月愛知】三種の神器を祀る「熱田神宮」新春初詣＆名物「本場ひつまぶし」・極上名古屋コーチン鍋を味わう名宿5選",
    description: "11月の晩秋から新春1月にかけて、年間約200万人以上の参拝客で賑わう東海随一の聖地「熱田神宮」。三種の神器の一つ「草薙神剣（くさなぎのみつるぎ）」を祀る熱田の杜は、巨木が茂る神聖な静寂に包まれます。織田信長が桶狭間の戦い出陣前に必勝祈願したことでも知られ、新春の開運・厄除け初詣スポットとして絶大な人気を誇ります。参拝の後は、熱田発祥の伝統を誇る名物「本場ひつまぶし」の香ばしい鰻、冬の寒さに染み渡る濃厚な「名古屋コーチン鍋」、そして名駅や栄の煌びやかな冬イルミネーションを満喫。上質なもてなしと美食に酔いしれる厳選ホテル5選を徹底紹介します。",
    url: 'https://croud-travel.com/winter-aichi-nagoya-atsuta-jingu-hatsumode-hitsumabushi-stay',
    type: 'article',
    images: [{ url: 'https://img.travel.rakuten.co.jp/share/HOTEL/12543/12543.jpg', width: 1200, height: 630, alt: '熱田神宮初詣とひつまぶし・名古屋名宿' }]
  }
};

export default function AichiNagoyaAtsutaPage() {
  const hotelsData = [
            {
              id: 1,
              name: "名古屋マリオットアソシアホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12543/12543.jpg",
              rating: 4.65,
              reviews: 4998,
              price: "¥20,250〜",
              access: "新幹線到着⇒名古屋駅直結★フロント15階 または、中部国際空港⇒名鉄特急約30分⇒名古屋駅直結★フロント15階",
              special: "かつてない上質のくつろぎと、世界のおもてなしを、あなたに・・・。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12543%2F12543.html",
              story: "JR名古屋駅真上に聳え立つJRセントラルタワーズの高層階に位置する最高峰のラグジュアリーホテル「名古屋マリオットアソシアホテル」。ロビーや客室の窓一面からは、冬の澄み渡った名古屋の街並みや遠く御嶽山・鈴鹿連峰の雪景色がパノラマで広がります。熱田神宮へは名古屋駅からJR東海道本線でわずか7分という抜群のアクセス。世界基準の洗練されたホスピタリティと快適なベッドが、冬の初詣や観光の疲れを優雅に解きほぐします。館内のスカイラウンジやフレンチレストランで味わう冬のディナーも格別です。",
              roomTip: "コンシェルジュフロア高層階デラックスルーム。専用ラウンジでの朝食やカクテルタイムとともに、地上200m超の煌めく冬夜景を一望。",
              gourmetTip: "「オールデイダイニング パーゴラ冬のビュッフェ＆フレンチディナー」。愛知県産みかわ牛のローストビーフや冬の味覚を贅沢に。",
              highlights: [
                "名古屋駅直結タワー高層階・地上200m超から望む白銀の御嶽山とダイナミック冬夜景",
                "愛知みかわ牛ローストや冬の旬味覚ディナー・優雅なスカイラウンジバー",
                "熱田神宮までJRで直通約7分・新幹線改札から直結の圧倒的な利便性"
              ]
            },
            {
              id: 2,
              name: "ＡＮＡクラウンプラザホテルグランコート名古屋　ｂｙ　ＩＨＧ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1659/1659.jpg",
              rating: 4.48,
              reviews: 4578,
              price: "¥11,290〜",
              access: "名古屋駅から電車で3分「金山総合駅」下車。南口より徒歩1分。中部国際空港からは名鉄快速特急ミュースカイで最速２３分。",
              special: "「金山総合駅」から雨にぬれない徒歩1分。名古屋国際会議場まで車で5分。全客室無料Wi-Fi完備。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1659%2F1659.html",
              story: "名古屋の副都心・金山総合駅南口から屋根付きペデストリアンデッキで徒歩わずか1分、熱田神宮へのアクセスにおいて最も至近で便利な「ＡＮＡクラウンプラザホテルグランコート名古屋 ｂｙ ＩＨＧ」。金山駅から熱田神宮最寄りの神宮前駅までは名鉄特急でわずか3分、JR熱田駅へも1駅という抜群のロケーションを誇ります。全客室が16階以上の高層階にあり、静かでゆとりある空間が広がるのも魅力。高層階のレストランでは、名古屋コーチンや知多牛を取り入れた冬の本格会席やフレンチを、煌めく夜景とともに堪能できます。",
              roomTip: "高層階プレミアムダブル・ツイン。大きな窓から見下ろす名古屋市街のダイナミックな夜景と、快適な快眠プログラム「スリープ・アドバンテージ」。",
              gourmetTip: "「日本料理 京料理たん熊北店・冬の特別会席」。熱々の名古屋コーチン小鍋仕立てや知多牛石焼き、冬の旬魚の造り。",
              highlights: [
                "金山総合駅直結徒歩1分・熱田神宮まで電車1駅3分の圧倒的アクセス好立地",
                "京料理たん熊北店の冬特別会席・名古屋コーチン鍋や知多牛石焼きの饗宴",
                "全室16階以上の高層階ビュー・快眠プログラムで冬の旅の疲れを極上リカバリー"
              ]
            },
            {
              id: 3,
              name: "名古屋観光ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2046/2046.jpg",
              rating: 4.56,
              reviews: 4438,
              price: "¥9,900〜",
              access: "名古屋駅よりタクシーで５分、名古屋駅より地下鉄 東山線 １駅目「伏見」よりすぐの徒歩２分、宿泊の方は駐車場「無料」",
              special: "市内で最も長い歴史あるホテルで洗練されたおもてなしを体験。滞在中は駐車場を無料でご利用頂けます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2046%2F2046.html",
              story: "昭和11年創業、名古屋で最も長い歴史と伝統を誇る格式高きグランドホテル「名古屋観光ホテル」。歴代の皇族や国内外の賓客を迎えてきた気品あふれるクラシックホテルで、都心・伏見の好立地に佇みます。中世ヨーロッパの趣を残す重厚なロビーや上質な調度品に囲まれ、冬の喧騒を離れた落ち着きある滞在が叶います。メインダイニングでは伝統のレシピを受け継ぐ正統派フランス料理や日本料理を提供。熱田神宮への初詣にも地下鉄やタクシーでスムーズに移動でき、駐車場が滞在中無料なのも嬉しいポイントです。",
              roomTip: "エスパシオフロア客室。専任コンシェルジュによる細やかなもてなしと最高級のアメニティ、独立したリビング空間で過ごす極上ステイ。",
              gourmetTip: "「フレンチレストラン エスコフィエ伝統ディナー」。半世紀以上磨かれたコンソメスープや愛知県産和牛のフィレステーキ。",
              highlights: [
                "昭和11年創業の格調高い歴史あるグランドホテル・宿泊者駐車場無料特典",
                "半世紀受け継がれる正統派フレンチコース・上質な空間で味わう大人の美食",
                "クラシカルで洗練されたおもてなし・ファミリーや夫婦の記念日初詣ステイに最適"
              ]
            },
            {
              id: 4,
              name: "ヒルトン名古屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1410/1410.jpg",
              rating: 4.42,
              reviews: 1939,
              price: "¥11,586〜",
              access: "伏見駅から3分。名古屋駅から車で約5分。名古屋都心に位置するインターナショナルホテル。",
              special: "伏見駅から3分！高層階の客室からは名古屋の夜景が一望！ファミリーに最適な和室も完備。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1410%2F1410.html",
              story: "伏見駅から徒歩3分、栄や名駅エリアにも程近い都心に位置するワールドクラスのインターナショナルホテル「ヒルトン名古屋」。冬の館内は華やかなホリデーシーズンのデコレーションや巨大クリスマスツリーで彩られ、祝祭感に満ち溢れます。24時間利用可能なフィットネスセンターや温水プール、サウナを完備。夕食には地元愛知のブランド食材をふんだんに取り入れた豪華ビュッフェや、広東料理の名店「王朝」での冬限定コースが人気。熱田神宮参拝と名古屋の都心ステイをアクティブに楽しみたい方に最適です。",
              roomTip: "エグゼクティブルーム。障子や襖の和のモチーフを取り入れたスタイリッシュな客室で、専用ラウンジでの優雅なカクテルタイムを満喫。",
              gourmetTip: "「ブラッセリー冬のディナービュッフェ」。ローストビーフのカッティングサービスや名古屋名物をモダンにアレンジした創作料理。",
              highlights: [
                "伏見駅徒歩3分・冬のホリデーシーズンを華やかに彩るワールドクラスの滞在",
                "地元食材と名古屋名物をモダンに昇華したビュッフェ・本格広東料理レストラン",
                "温水プール＆サウナ完備・冬のフィットネスやリフレッシュも思いのまま"
              ]
            },
            {
              id: 5,
              name: "三井ガーデンホテル名古屋プレミア",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/153118/153118.jpg",
              rating: 4.49,
              reviews: 1213,
              price: "¥7,600〜",
              access: "ＪＲ名古屋駅より徒歩5分。",
              special: "JR名古屋駅から徒歩5分。全室禁煙＆19階以上の高層階。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153118%2F153118.html",
              story: "JR名古屋駅から徒歩5分、シンフォニー豊田ビルの18階〜25階に位置する天空のスタイリッシュホテル「三井ガーデンホテル名古屋プレミア」。18階のロビーフロアからは名古屋の街並みを一望でき、日本の伝統美と現代デザインが美しく調和しています。宿泊者専用の大浴場「The Bath」を完備し、冬の冷え切った身体を温かな湯に浸かってリフレッシュできるのが最大の魅力。客室はすべて禁煙の高層階仕様で、熱田神宮への新春初詣や栄・大須の散策拠点として快適そのものです。",
              roomTip: "スーペリアツイン（高層階）。窓際に配されたソファから冬の夜景を眺め、清潔感あふれる最新設備で心地よい眠りにつけます。",
              gourmetTip: "「天空レストラン The Living Room with Sky Bar」。愛知の旬野菜や名古屋コーチン卵を使ったこだわりの朝食ビュッフェ。",
              highlights: [
                "名駅徒歩5分・18階以上の天空ロビー＆宿泊者専用大浴場完備のスタイリッシュ空間",
                "名古屋コーチン卵を使ったこだわり朝食・栄や大須の冬グルメ散策にも至便",
                "全室禁煙の高層階客室・大浴場「The Bath」で冷えた身体を芯からリフレッシュ"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "熱田神宮の新春初詣（年末年始）の参拝時間帯と混雑のピーク・回避策は？",
    "a": "熱田神宮は正月三が日に例年200万人以上の初詣客が訪れます。最も混雑するのは大晦日の23時頃から元旦の未明3時頃、および三が日の10時〜15時です。この時間帯は本殿手前で入場規制がかかり、参拝まで1〜2時間待つこともあります。混雑を避けて清々しくお参りしたい場合は、早朝の6時〜8時台、または夕方16時以降の日暮れ時が狙い目です。早朝は冬の澄んだ冷気の中に樹齢千年の大楠が静かに佇み、神聖な神気を存分に感じられます。"
  },
  {
    "q": "名物「ひつまぶし」の正しい食べ方と、熱田神宮周辺の名店での待ち時間対策は？",
    "a": "ひつまぶしはお櫃のご飯をしゃもじで十文字に4等分し、1膳目はそのまま鰻本来の香ばしさとタレの味を楽しみ、2膳目は薬味（ネギ・ワサビ・海苔）を添えて風味を味わい、3膳目はお出汁や緑茶を注いでお茶漬けにしてサラサラと食し、最後の4膳目はお好みの食べ方で締めるのが伝統の流儀です。熱田神宮南門近くの「あつた蓬莱軒本店・神宮店」は正月三が日や週末は数時間の行列・整理券待ちとなるため、午前の早い時間に店頭で整理券を受け取るか、平日の開店直後を狙うのが賢明です。"
  },
  {
    "q": "冬の名古屋で味わうべきおすすめご当地温まりグルメは？",
    "a": "冬の冷え込みに最適なのが「名古屋コーチン鍋（水炊きやすき鍋）」です。弾力ある肉質と噛むほどに溢れる濃厚な旨みは日本三大地鶏の筆頭。また、八丁味噌ベースの濃厚な土鍋出汁で煮込む「味噌煮込みうどん（山本屋総本家など）」、熱々の鉄板で提供される「あんかけスパゲッティ」、そして「台湾ラーメン」など、身体の芯から温まる力強い郷土料理が冬旅を熱く盛り上げてくれます。"
  },
  {
    "q": "熱田神宮境内で見逃せない見どころ・パワースポットは？",
    "a": "本殿（本宮）での参拝に加え、織田信長が桶狭間の戦いの勝利の御礼に寄進した「信長塀（日本三大土塀の一つ）」、弘法大師空海がお手植えされたと伝わる樹齢千年の「大楠」、清水社（湧き水で目を洗うと美肌・目の病気平癒のご利益）、そして刀剣ファン垂涎の国宝や重要文化財の刀剣が常設展示されている「剣の宝庫 草薙館」は必見です。"
  },
  {
    "q": "東京や大阪から熱田神宮へのアクセスと、名古屋駅からの移動手段は？",
    "a": "東海道新幹線で東京駅から名古屋駅まで約1時間40分、新大阪駅からは約50分。名古屋駅から熱田神宮へは、JR東海道本線で「熱田駅」まで直通約7分、または名鉄名古屋駅から「神宮前駅」まで特急・急行で約6〜7分です。地下鉄名城線「熱田神宮西駅」「熱田神宮伝馬町駅」からも徒歩すぐで、本宮や南門など目的に応じて下車駅を使い分けることができます。"
  }
];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemPage',
    name: "【11・12・1月愛知】三種の神器を祀る「熱田神宮」新春初詣＆名物「本場ひつまぶし」・極上名古屋コーチン鍋を味わう名宿5選",
    description: "11月の晩秋から新春1月にかけて、年間約200万人以上の参拝客で賑わう東海随一の聖地「熱田神宮」。三種の神器の一つ「草薙神剣（くさなぎのみつるぎ）」を祀る熱田の杜は、巨木が茂る神聖な静寂に包まれます。織田信長が桶狭間の戦い出陣前に必勝祈願したことでも知られ、新春の開運・厄除け初詣スポットとして絶大な人気を誇ります。参拝の後は、熱田発祥の伝統を誇る名物「本場ひつまぶし」の香ばしい鰻、冬の寒さに染み渡る濃厚な「名古屋コーチン鍋」、そして名駅や栄の煌びやかな冬イルミネーションを満喫。上質なもてなしと美食に酔いしれる厳選ホテル5選を徹底紹介します。",
    url: 'https://croud-travel.com/winter-aichi-nagoya-atsuta-jingu-hatsumode-hitsumabushi-stay',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://croud-travel.com/' },
        { '@type': 'ListItem', position: 2, name: '冬の特集一覧', item: 'https://croud-travel.com/features/' },
        { '@type': 'ListItem', position: 3, name: '熱田神宮初詣＆本場ひつまぶし・名古屋ステイ', item: 'https://croud-travel.com/winter-aichi-nagoya-atsuta-jingu-hatsumode-hitsumabushi-stay' }
      ]
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: hotelsData.map((h, idx) => ({
        '@type': 'Hotel',
        position: idx + 1,
        name: h.name,
        image: h.img,
        priceRange: h.price,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: h.rating,
          reviewCount: h.reviews
        },
        address: {
          '@type': 'PostalAddress',
          addressRegion: '愛知県',
          addressLocality: '名古屋市'
        }
      }))
    }
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqListItems.map((item: { q: string; a: string }) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a
      }
    }))
  };

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-100 selection:text-amber-900 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-stone-800">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
            <Snowflake className="w-4 h-4 text-amber-300" />
            11月・12月・1月 三種の神器新春初詣＆名古屋グルメ特集
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-snug text-stone-100 font-serif">
            草薙神剣が鎮まる熱田の杜と香ばしき秘伝の鰻<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200">
              熱田神宮の新春初詣＆名物「本場ひつまぶし」・極上名古屋コーチン鍋の名宿
            </span>
          </h1>

          <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            三種の神器の一つ「草薙神剣」をお祀りする東海屈指の大社・熱田神宮。織田信長が祈願した信長塀や樹齢千年の大楠が厳かな空気を放つ熱田の杜で、一年の開運を願う新春初詣。熱田発祥のカリッと香ばしい「本場ひつまぶし」、冬の寒さに染み渡る濃厚な「名古屋コーチン鍋」、そして都会の夜を彩るイルミネーションと洗練されたホテルステイをご案内します。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs sm:text-sm text-stone-300">
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Calendar className="w-4 h-4 text-amber-400" /> 旬の時期：11月〜1月（年末年始初詣）
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Utensils className="w-4 h-4 text-amber-400" /> 本場ひつまぶし・名古屋コーチン鍋
            </span>
            <span className="flex items-center gap-1.5 bg-stone-800/80 px-3 py-1.5 rounded-lg border border-stone-700">
              <Flame className="w-4 h-4 text-amber-400" /> 熱田神宮開運参拝・天空ラグジュアリー
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

        {/* Feature Overview Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              熱田の杜が放つ「神聖な静寂」と尾張名古屋の豪快な冬の美味
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              三種の神器・草薙神剣が鎮まる開運の杜と、冬の食欲を刺激する伝統グルメの融合
            </p>
          </div>

          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              古くから「熱田さま」と親しまれ、伊勢神宮に次ぐ尊さを誇る「熱田神宮」。約19万平方メートルもの広大な境内は、都会の真ん中とは思えないほどの深い木立に包まれ、冬の冷気の中で凛とした静寂を湛えています。熱田神宮のご神体は、三種の神器の一つである「草薙神剣（くさなぎのみつるぎ）」。天照大神から授けられたこの霊剣は、武勇と国家安泰の象徴として尊崇され、永禄3年（1560年）の桶狭間の戦いでは、若き織田信長が戦勝を祈願し大勝利を収めたことでも歴史に刻まれています。新春を迎えると、全国から約200万人を超える初詣参拝客が押し寄せ、破魔矢や熊手を求める人々の活気と祈りで境内は熱気に包まれます。
            </p>
            <p>
              熱田詣での後に欠かせないのが、門前町で生まれた名物「本場ひつまぶし」です。熱田の老舗では、備長炭の強火で表面をカリッと香ばしく、中はふっくらジューシーに焼き上げた鰻を細かく刻み、お櫃に敷き詰めます。一膳目はそのまま鰻と秘伝タレの深いコクを味わい、二膳目はワサビや刻みネギの爽やかな薬味で味の変化を楽しみ、三膳目は熱々の出汁をかけてお茶漬けに。四膳目はお気に入りの食べ方で締めくくる。この完成された様式美は、冬の寒さで冷えた身体に染み渡る極上の幸福感をもたらします。
            </p>
            <p>
              さらに、冬の名古屋は温まりグルメの宝庫です。日本三大地鶏の筆頭である「名古屋コーチン」を使った水炊きや濃厚な味噌鍋は、引き締まった肉質から滲み出る芳醇な脂と出汁が絶品。また、熱々の土鍋で煮立つ「味噌煮込みうどん」も外せません。参拝と美食を堪能した後は、名駅や栄のイルミネーションに包まれた天空のラグジュアリーホテルで夜景を眺めながら寛ぐ。都会の利便性と古社参拝の神聖さが融合した、極めて満足度の高い冬旅がここにあります。
            </p>
          </div>

          {/* Highlights 3-column Box */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-stone-900 text-base">三種の神器・熱田神宮の新春初詣</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                草薙神剣を祀る東海の総鎮守。樹齢千年の大楠と織田信長ゆかりの信長塀が立ち並ぶ神聖な杜での開運祈願。
              </p>
            </div>

            <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-stone-900 text-base">熱田発祥の本場ひつまぶし</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                備長炭でカリッと焼き上げた極上鰻。お櫃から取り分けて楽しむ三段活用のお茶漬け仕立てで味わう至高の伝統。
              </p>
            </div>

            <div className="bg-amber-50/50 border border-amber-200/60 rounded-2xl p-5 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-stone-900 text-base">極上名古屋コーチン鍋＆天空ステイ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                旨み凝縮の名古屋コーチン鍋と名駅・金山直結ホテル。大浴場や高層階パノラマ夜景で癒やされる都会派冬リゾート。
              </p>
            </div>
          </div>
        </section>

        {/* Local Gastronomy & Culture Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              草薙神剣の神秘と、尾張名古屋が誇る「極上名物」の真髄
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-700" />
                熱田発祥「ひつまぶし」の完成された様式美と老舗のこだわり
              </h3>
              <p>
                「ひつまぶし」は明治時代、熱田の料亭「あつた蓬莱軒」で誕生したと伝えられます。出前時に器が割れないよう木のお櫃を使い、鰻を細かく刻んでご飯にまぶしたのが始まりです。備長炭の強火で外側をパリッと焼き上げ、中は蒸さずに地焼きすることで鰻本来の濃厚な脂の旨味を閉じ込めます。そのまま味わう一の膳、ネギやワサビと海苔を添える二の膳、熱々の上品な出汁を注ぐ三の膳と、三段階の味の変遷を楽しむ文化は、日本のうなぎ料理の最高峰として世界中の美食家を魅了し続けています。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-700" />
                日本三大地鶏「名古屋コーチン」の濃厚なコクと冬の鍋料理
              </h3>
              <p>
                明治初期、元尾張藩士の手によって誕生した「純系名古屋コーチン」。一般的なブロイラーの約3倍もの日数をかけて平飼いでのびのびと育てられます。赤みを帯びた肉質は弾力に富み、噛めば噛むほどに芳醇なコクと旨味が溢れ出します。冬にはガラからじっくり引いた白濁スープで味わう「水炊き」や、尾張特産の八丁味噌で仕立てた「味噌すき鍋」が定番。冷えた冬の身体に活力を与える至高の地鶏グルメです。
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Timeline Model Course Section */}
        <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-stone-800 pb-4">
            <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white font-serif">
              【1泊2日】熱田神宮新春参拝と本場ひつまぶし・名古屋城を巡る黄金モデルコース
            </h2>
            <p className="text-stone-400 text-xs sm:text-sm mt-1">
              新幹線アクセス抜群の名駅・金山を拠点に、開運初詣と名物グルメを制覇する冬の旅路。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 午前〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  10:15 名古屋駅到着 ➔ 名鉄で神宮前駅へ＆あつた蓬莱軒の整理券確保
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  東海道新幹線で名古屋駅へ到着後、名鉄特急でわずか6分の「神宮前駅」へ。まずは熱田神宮南門近くの名店「あつた蓬莱軒」へ向かい、店頭で整理券を確保。待ち時間を利用して、熱田神宮の神聖な境内へ足を踏み入れます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 昼〜午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  11:30 熱田神宮本宮開運祈願＆本場「ひつまぶし」の感動ランチ
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  樹齢千年の大楠や織田信長寄進の信長塀を参拝し、本宮で新春の開運・厄除けを祈願。整理券の時間に合わせてあつた蓬莱軒へ戻り、備長炭でカリッと香ばしく焼き上げられた本場のひつまぶしを堪能。三段階のお茶漬け仕立てで味わう鰻の美味に心奪われます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  15:30 刀剣展示「草薙館」見学 ➔ 高層階ホテルチェックイン＆名古屋コーチン鍋
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  名刀が並ぶ「草薙館」を見学した後、金山または名駅のホテルへチェックイン。高層階客室や大浴場で休息。夜は市内の名店で熱々の名古屋コーチン鍋を味わい、栄のオアシス21や名駅通りの煌めく冬イルミネーションを満喫します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-stone-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:30 特別史跡「名古屋城」本丸御殿見学 ➔ 熱々味噌煮込みうどんランチ
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  ホテルで名古屋コーチン卵のこだわり朝食を楽しんだ後、地下鉄で名古屋城へ。冬の光に輝く金シャチと、豪華絢爛な「本丸御殿」の黄金障壁画を鑑賞。「金シャチ横丁」で熱々の味噌煮込みうどんをすすり、赤福やお土産を買い求めて新幹線で帰路へつきます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotels Section */}
        <section className="space-y-8">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Recommended Accommodations</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              熱田神宮初詣と冬の名古屋を満喫する厳選ホテル5選
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              アクセス抜群の駅直結ホテルから老舗グランドホテル、天空の夜景宿まで
            </p>
          </div>

          <div className="space-y-8">
            {hotelsData.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-stone-200/80 overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-stone-100 pb-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs font-bold">
                          {hotel.id}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">
                          厳選名宿
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
                        {hotel.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                        {hotel.access}
                      </p>
                    </div>

                    <div className="text-right sm:shrink-0 bg-amber-50/50 p-3 sm:p-4 rounded-2xl border border-amber-100">
                      <div className="flex items-center sm:justify-end gap-1 text-amber-600 font-bold text-sm sm:text-base">
                        <Star className="w-4 h-4 fill-current text-amber-500" />
                        <span>{hotel.rating}</span>
                        <span className="text-stone-400 text-xs font-normal">（{hotel.reviews}件）</span>
                      </div>
                      <div className="text-xs text-stone-500 mt-1">宿泊目安（1名/税込）</div>
                      <div className="text-lg sm:text-xl font-black text-amber-700">{hotel.price}</div>
                    </div>
                  </div>

                  {/* Hotel Story Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/3] bg-stone-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={hotel.img} 
                        alt={hotel.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200/60 space-y-2 text-xs sm:text-sm">
                        <div className="flex items-start gap-2">
                          <Building className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div><strong className="text-stone-900">客室の魅力：</strong><span className="text-stone-600">{hotel.roomTip}</span></div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Utensils className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <div><strong className="text-stone-900">冬の極上美食：</strong><span className="text-stone-600">{hotel.gourmetTip}</span></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="bg-stone-50/70 rounded-2xl p-4 sm:p-5 border border-stone-200/60">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">おすすめのポイント</div>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-stone-700">
                      {hotel.highlights.map((item: string, hIdx: number) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-2 text-center sm:text-right">
                    <a 
                      href={hotel.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-bold text-xs sm:text-sm shadow-md shadow-amber-600/20 hover:shadow-lg transition-all w-full sm:w-auto"
                    >
                      <span>年末年始は争奪戦 ▶ 空室を確認する</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Winter Travel Tips */}
        <section className="bg-amber-50/60 rounded-3xl p-6 sm:p-10 border border-amber-200/80 space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-800 font-bold text-xs uppercase tracking-wider block">Winter Travel Advice</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              冬の名古屋・熱田神宮旅行を快適に楽しむための注意点
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-stone-700">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-amber-700" />
                伊吹おろしのからっ風と防寒
              </div>
              <p className="leading-relaxed">
                冬の名古屋は「伊吹おろし」と呼ばれる冷たく乾燥した北西の季節風が吹きます。体感温度がぐっと下がるため、風を通しにくいコート、マフラー、手袋を準備しておくと安心です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-amber-700" />
                正月三が日の交通規制と電車利用
              </div>
              <p className="leading-relaxed">
                熱田神宮周辺は年末年始に大規模な交通規制が実施され、周辺駐車場は満車となります。名鉄「神宮前駅」やJR「熱田駅」、地下鉄名城線を利用した公共交通機関でのアクセスを強くおすすめします。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Utensils className="w-4 h-4 text-amber-700" />
                名店ひつまぶしの時間配分
              </div>
              <p className="leading-relaxed">
                特に土日祝や年末年始の有名鰻店は非常に長い待ち時間が発生します。当日のスケジュールにはゆとりを持ち、店頭で整理券を受け取った後に熱田神宮を参拝すると効率的です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-l-4 border-amber-600 pl-4">
            <span className="text-amber-700 font-bold text-xs uppercase tracking-wider block">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              熱田神宮初詣・ひつまぶしに関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-amber-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-700 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-3 pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links Section */}
        <section className="border-t border-stone-200 pt-10 space-y-6">
          <div className="space-y-1">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 font-serif">
              あわせて読みたい東海の冬景色・初詣・名湯特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-aichi-minamichita-onsen-torafugu-chita-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">愛知・南知多＆日間賀島</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                冬の名物天然とらふぐ尽くしと知多牛・オーシャンビュー温泉名宿
              </span>
            </Link>

            <Link 
              href="/winter-mie-ise-jingu-hatsumode-okageyokocho-iseebi-matsusaka-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">三重・伊勢神宮</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                新春の伊勢神宮初詣とおかげ横丁・伊勢海老＆松阪牛会席名宿
              </span>
            </Link>

            <Link 
              href="/winter-gifu-gero-onsen-fireworks-hida-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">岐阜・下呂温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                冬の花火ミュージカルと日本三名泉美肌の湯・極上飛騨牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-shizuoka-kanzanji-onsen-hamanako-fugu-eel-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">静岡・浜名湖舘山寺</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                冬の遠州灘とらふぐと浜名湖うなぎ会席・レイクビュー温泉名宿
              </span>
            </Link>

            <Link 
              href="/winter-shiga-omihachiman-hikone-snow-castle-omigyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">滋賀・彦根＆近江八幡</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                国宝彦根城の雪景色と八幡堀水郷・極上近江牛すき焼き名宿
              </span>
            </Link>

            <Link 
              href="/winter-nagano-hirugami-onsen-starry-sky-shinshugyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-700 font-bold text-xs block mb-1">長野・昼神温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-800 transition-colors line-clamp-2">
                日本一の星空ナイトツアーと美肌湯・信州牛を味わう冬名宿
              </span>
            </Link>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-8 sm:p-12 text-white text-center space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold font-serif">初詣シーズンの名古屋は宿の確保がカギ</h2>
          <p className="text-amber-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            年末年始の名古屋中心部の人気ホテルは10月頃から予約が埋まり始めます。熱田神宮参拝＆ひつまぶしの旅を計画しているなら、早めに宿を押さえておくのが正解です。
          </p>
          <a
            href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fhotel%2Flist.html%3Ff_teikei%3Dtmp_kw_rt%26f_area%3D23_toukai%26f_keyword%3D%25E5%2590%258D%25E5%258F%25A4%25E5%25B1%258B"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-amber-700 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:bg-amber-50 transition-all"
          >
            <span>名古屋のホテルを楽天トラベルで探す</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </section>
      </main>
    </article>
  );
}
