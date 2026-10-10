import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, ThermometerSun, Heart, ShoppingBag, Shield, Mountain, Landmark
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12・1月栃木】湯西川温泉の雪見露天風呂と名！名宿5選',
  description: '11月から1月、日光国立公園の最深部・平家落人伝説が息づく秘境「湯西川（ゆにしがわ）温泉」は、深山幽谷の静寂と白銀の雪景色に包まれます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '湯西川温泉 宿泊, 湯西川 かまくら祭, 湯西川 囲炉裏料理, 平家落人の里 宿, 花と華 湯西川, 平の高房 湯西川, 揚羽 湯西川, 11月 12月 1月 栃木旅行, 日光 秘湯',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-kamakura-irori-stay/"
  },
  openGraph: {
    title: '【11・12・1月栃木】湯西川温泉の雪見露天風呂と名！名宿5選',
    description: '11月から1月、日光国立公園の最深部・平家落人伝説が息づく秘境「湯西川（ゆにしがわ）温泉」は、深山幽谷の静寂と白銀の雪景色に包まれます。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-kamakura-irori-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '白銀に包まれる湯西川温泉のかまくらと雪景色'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月栃木】平家落人の隠れ里・湯西川温泉の雪見露天風呂と名物平家囲炉裏会席＆日本夜景遺産かまくら祭を巡る名宿5選",
    description: "11月から1月、日光国立公園の最深部・平家落人伝説が息づく秘境「湯西川（ゆにしがわ）温泉」は、深山幽谷の静寂と白銀の雪景色に包まれます。壇ノ浦の合戦に敗れた平家の一門が隠れ住んだとされるこの里には、茅葺き屋根の古民家や清らかな湯西川のせせらぎ、そして何百年も受け継がれてきた「平家囲炉裏料理」の文化が色濃く残ります。囲炉裏端の炭火で香ばしく焼き上げる川魚の塩焼きや名物ばんだい餅、野鳥やジビエの串焼き、竹筒で温める熱燗「かっぽ酒」は、冬の冷えた体に染み渡る至極の郷土の味。アルカリ性単純温泉の柔らかな源泉掛け流し露天風呂から眺める粉雪の渓谷美は格別です。さらに1月下旬から河川敷を数千個のミニかまくらが幻想的に照らし出す「日本夜景遺産・湯西川温泉かまくら祭」の開催時期に合わせて訪れたい、歴史と温もりに満ちた厳選5宿を詳しくご案内します。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function TochigiYunishigawaOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-kamakura-irori-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-kamakura-irori-stay"
        },
        "headline": "【11・12・1月栃木】平家落人の隠れ里・湯西川温泉の雪見露天風呂と名物平家囲炉裏会席＆日本夜景遺産かまくら祭を巡る名宿5選",
        "description": "11月から1月、日光国立公園の最深部・平家落人伝説が息づく秘境「湯西川（ゆにしがわ）温泉」は、深山幽谷の静寂と白銀の雪景色に包まれます。壇ノ浦の合戦に敗れた平家の一門が隠れ住んだとされるこの里には、茅葺き屋根の古民家や清らかな湯西川のせせらぎ、そして何百年も受け継がれてきた「平家囲炉裏料理」の文化が色濃く残ります。囲炉裏端の炭火で香ばしく焼き上げる川魚の塩焼きや名物ばんだい餅、野鳥やジビエの串焼き、竹筒で温める熱燗「かっぽ酒」は、冬の冷えた体に染み渡る至極の郷土の味。アルカリ性単純温泉の柔らかな源泉掛け流し露天風呂から眺める粉雪の渓谷美は格別です。さらに1月下旬から河川敷を数千個のミニかまくらが幻想的に照らし出す「日本夜景遺産・湯西川温泉かまくら祭」の開催時期に合わせて訪れたい、歴史と温もりに満ちた厳選5宿を詳しくご案内します。",
        "image": "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "クラドトラベル 秘湯・歴史探訪取材班",
          "url": "https://croud-travel.pages.dev"
        },
        "publisher": {
          "@type": "Organization",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": "https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-kamakura-irori-stay"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-kamakura-irori-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev"
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
            "name": "栃木・湯西川温泉の囲炉裏料理とかまくら祭特集",
            "item": "https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-kamakura-irori-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-tochigi-yunishigawa-onsen-kamakura-irori-stay#faq",
        "mainEntity": [{"@type":"Question","name":"湯西川温泉の「かまくら祭」とはどのようなイベントですか？開催期間や見どころは？","acceptedAnswer":{"@type":"Answer","text":"「湯西川温泉かまくら祭」は、例年1月下旬から2月下旬にかけて開催される日本夜景遺産認定の冬の一大イベントです。メイン会場の「平家の里」や「沢口河川敷」には、数百個から千個に及ぶミニかまくらが作られ、日没とともにロウソクの火が一斉に灯されます。白銀の河川敷にオレンジ色の無数の光が揺らめく光景は、息を呑むほど幻想的でロマンチックです。また平家の里会場では大型かまくらの中で温かい甘酒やお汁粉を楽しむこともできます。"}},{"@type":"Question","name":"湯西川名物「平家囲炉裏料理（お狩場焼）」とは具体的にどんな料理ですか？","acceptedAnswer":{"@type":"Answer","text":"壇ノ浦の合戦後、平家の落人たちが追っ手を逃れて身を潜めながら、山中で仕留めた鳥獣や川魚、山菜を囲炉裏の灰に竹串を刺して炭火で焼いて食べたのが始まりと伝えられています。現在では、新鮮な岩魚や山女魚の塩焼き、野鳥や鹿・猪などのジビエ串、日光名物の湯波（ゆば）、すりつぶした米を丸めて串に刺し特製じゅうねん味噌（エゴマ味噌）を塗った「ばんだい餅」などを囲炉裏端で香ばしく焼き上げます。青竹の筒に地酒を入れて灰の中で燗をつける「かっぽ酒」とともに味わうのが伝統のスタイルです。"}},{"@type":"Question","name":"湯西川温泉の泉質と特徴、冬の雪見風呂の効能について教えてください。","acceptedAnswer":{"@type":"Answer","text":"湯西川温泉の泉質は主に「アルカリ性単純温泉（低張性アルカリ性高温泉）。」です。pH値が高く無色透明・無味無臭の柔らかな湯触りが特徴で、刺激が少ないため肌がデリケートな方や小さなお子様、高齢の方でも安心して長湯できます。アルカリ性の成分が肌の汚れや角質を優しく落とし、入浴後はすべすべの滑らかな肌に。また神経痛、筋肉痛、冷え性、疲労回復に優れた効能があり、冬の寒さでこわばった体を芯から温めてくれます。"}},{"@type":"Question","name":"11月〜1月の湯西川温泉へのアクセス道路状況と雪道対策はどうですか？","acceptedAnswer":{"@type":"Answer","text":"湯西川温泉は日光市の最北端、山深い豪雪地域に位置しています。11月下旬頃から初雪が降り始め、12月から1月は完全な圧雪・凍結路面となります。車で訪れる場合は必ずスタッドレスタイヤ（4WD車推奨）を装着してください。急ブレーキ・急ハンドルを避け、十分な車間距離を取って走行する必要があります。雪道運転に不安がある方は、東武鉄道・野岩鉄道の「湯西川温泉駅」から発着する日光交通の路線バスを利用するのが最も安全で快適です。"}},{"@type":"Question","name":"湯西川温泉周辺の冬の見どころや立ち寄りスポットはどこですか？","acceptedAnswer":{"@type":"Answer","text":"平家落人の生活様式を再現した民俗資料館「平家の里」では、茅葺き屋根の古民家群が雪に覆われ、雪国ならではの原風景に出会えます。また温泉街から少し足を伸ばした「水の郷」では、巨大な吊り橋からの雪景色鑑賞や足湯、郷土料理が楽しめます。お土産には日光名物の生湯波、ばんだい餅、栃の実せんべい、日光の地酒（四季桜や日光誉）が定番です。"}}]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "湯西川温泉　彩り湯かしき　花と華",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2338/2338.jpg",
              rating: 4.07,
              reviews: 1749,
              price: "¥16,800〜",
              access: "東武鉄道・野岩鉄道にて湯西川温泉駅下車。路線バスにて20分。（1日1回無料送迎バス運行有※要事前電話予約）",
              special: "深山の里の「美肌の湯」で湯めぐりを☆伝統の囲炉裏料理「平家お狩場焼」に舌鼓",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2338%2F2338.html",
              story: "湯西川の渓流沿いに広大な敷地を有し、春・夏・秋・冬それぞれの季節をテーマにした優雅な館内空間と多彩な湯舟を誇る名宿「彩り湯かしき 花と華」。清流・湯西川を望む渓流露天風呂や岩風呂、檜風呂など多彩な湯舟には、肌に優しいアルカリ性単純温泉が贅沢に注がれます。夕食は湯西川の伝統美を今に伝える「平家お狩場焼（囲炉裏料理）」または季節の会席。囲炉裏を囲み、炭火で炙る野鳥や山女魚、名物ばんだい餅を竹筒のかっぽ酒とともに味わう時間は、まさに平家の落人たちの隠れ里の宴そのものです。雪景色を眺めながらの貸切風呂や足湯も充実しています。",
              roomTip: "湯西川の渓流を見下ろす「華の館」または「風の館」の和洋室。一面の銀世界と川のせせらぎが織りなす静寂の雪景色を独り占めできます。",
              gourmetTip: "「名物・平家お狩場焼囲炉裏コース」。炭火の遠赤外線でふっくら焼き上げる川魚と味噌仕立てのばんだい餅、熱々のかっぽ酒が絶品です。",
              highlights: [
                "四季の彩りをテーマにした優雅な館内＆湯西川の清流を望む多彩な雪見露天風呂",
                "名物「平家お狩場焼」囲炉裏炭火焼き会席＆竹筒で温める熱々のかっぽ酒",
                "渓流沿いの雪景色が広がる上質な客室＆日本夜景遺産かまくら祭へのアクセス至便"
              ]
            },
            {
              id: 2,
              name: "いろり会席と源泉１００％秘湯の宿　湯西川温泉　上屋敷　平の高房",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/32086/32086.jpg",
              rating: 4.54,
              reviews: 587,
              price: "¥16,200〜",
              access: "会津鬼怒川線　湯西川温泉駅→バス（約２５分）湯西川温泉→徒歩（２０分）／日光宇都宮道路　今市ＩＣ→121号線経由約６０分",
              special: "湯西川温泉の最も奥にある木造りの秘湯の宿。源泉掛け流しの美肌の湯が自慢。サウナ付き客室もございます！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32086%2F32086.html",
              story: "白川郷から移築された重厚な茅葺き屋根の古民家が建ち並び、まるで平家の時代へとタイムスリップしたかのような圧倒的な世界観を誇る「上屋敷 平の高房」。標高750メートルの高台に位置し、満天の星空と初雪に染まる日光連山の山並みを見渡せます。加水・加温・循環なしの「完全100%源泉掛け流し」にこだわり抜いた温泉は、無色透明でまろやかな極上の湯ざわり。雪が舞い散る庭園露天風呂での湯浴みは至福の極みです。夕食は全席囲炉裏付きの個室食事処で提供される「平家本流・囲炉裏炭火焼会席」。鹿肉や岩魚、手打ち蕎麦など、山の恵みを炭火の炎とともに心ゆくまで味わえます。",
              roomTip: "梁がむき出しになった古民家風の和室または蔵造りの離れ客室。囲炉裏の残り香と木の温もりに包まれ、深山の静寂を静かに味わえます。",
              gourmetTip: "「極上・平家本流囲炉裏炭火焼会席」。地元日光の鹿肉ロースや特大岩魚の串焼き、名物のじゅうねん味噌田楽が舌鼓を打たせます。",
              highlights: [
                "白川郷移築の茅葺き古民家＆加水加温一切なしの完全100%源泉掛け流し名湯",
                "全席囲炉裏付き個室で味わう平家本流炭火焼会席＆日光鹿肉と特大岩魚の串焼き",
                "平家落人の隠れ里の佇まいを肌で感じる非日常空間＆静寂に包まれる大人の冬籠もり"
              ]
            },
            {
              id: 3,
              name: "湯西川温泉　桓武平氏ゆかりの宿　揚羽～ＡＧＥＨＡ～",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108937/108937.jpg",
              rating: 4.27,
              reviews: 5788,
              price: "¥6,050〜",
              access: "東武鉄道会津鬼怒川線湯西川温泉駅～バス20分（桓武平氏ゆかりの宿揚羽前）東北道宇都宮IC～日光宇都宮道路今市IC～50分",
              special: "売上高No1日本最大の宿泊予約サイト楽天トラベル【ゴールドアワード3年連続受賞】栃木県No1の人気宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108937%2F108937.html",
              story: "創業から平家の伝統を守り続け、館内至るところにアンティークな調度品や平家絵巻の装飾が施された情緒溢れる宿「桓武平氏ゆかりの宿 揚羽〜AGEHA〜」。川沿いに位置する大浴場や露天風呂、多彩な貸切露天風呂からは、雪化粧した湯西川の渓谷美を間近に一望できます。美肌効果の高いアルカリ性単純温泉は湯冷めしにくく、冬の冷えた体を芯からポカポカに。夕食は囲炉裏を囲むバイキングまたは和食膳スタイルで、囲炉裏炭火焼きの串料理や日光湯波、地元名物のきのこ鍋などを気兼ねなく楽しめるのが魅力。リーズナブルながら満足度の高い隠れ宿です。",
              roomTip: "清流・湯西川を望む純和風客室。窓の外に広がる雪景色と対岸の自然林が、日常の疲れを忘れさせてくれる穏やかな癒やしを提供します。",
              gourmetTip: "「平家囲炉裏串焼きと日光湯波尽くし」。香ばしい焼き立ての川魚串と、大豆の甘みが凝縮された日光名物の引き上げ湯波が絶品。",
              highlights: [
                "平家絵巻の世界が広がる情緒溢れる館内＆湯西川渓谷を間近に望む貸切露天風呂",
                "囲炉裏炭火串焼きと日光湯波尽くし会席＆気軽で満足度の高い滞在プラン",
                "リーズナブルな価格で楽しめる本格温泉情緒＆湯西川温泉街の散策に最適な立地"
              ]
            },
            {
              id: 4,
              name: "湯西川温泉　湯西川白雲の宿　山城屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15011/15011.jpg",
              rating: 4.13,
              reviews: 554,
              price: "¥10,890〜",
              access: "東武電車湯西川温泉駅より東武バスにて２５分／日光有料道路今市ＩＣから５０ｋｍ",
              special: "自然に囲まれた秘湯「湯西川白雲の宿 山城屋」で大自然と貸切温泉に癒やされるひとときを。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15011%2F15011.html",
              story: "湯西川温泉街の中央に位置し、白雲のように清らかで温かなもてなしと自家製料理でリピーターを惹きつける「湯西川白雲の宿 山城屋」。全12室のアットホームな規模感だからこそ行き届く細やかな心配りが心地よく、雪見の貸切露天風呂が無料で何度でも利用できる贅沢さが大好評です。湯量豊かなアルカリ性温泉は、肌を柔らかく包み込む滑らかな感触。夕食は囲炉裏を囲んで楽しむ手作りの郷土料理。店主自ら仕込む山の幸や新鮮な岩魚、特製ダレのつみれ鍋、手打ち十割蕎麦など、温もりに満ちた手料理が並びます。",
              roomTip: "掘りごたつが設えられた落ち着いた和室。雪の温泉街を見下ろしながら、こたつで温かいお茶とお菓子を楽しむ時間は冬ならではの贅沢です。",
              gourmetTip: "「手作り囲炉裏郷土料理と特製つみれ鍋」。出汁の旨味が染み渡る熱々の鍋料理と、炭火でじっくり焼いた岩魚の骨酒が抜群の調和を見せます。",
              highlights: [
                "全12室のアットホームな温もり＆無料で何度でも利用できる雪見貸切露天風呂",
                "手打ち十割蕎麦と特製つみれ鍋＆囲炉裏端で焼き上げる香ばしい岩魚の骨酒",
                "掘りごたつでぬくもりながら過ごす穏やかな時間＆心温まる手作りのもてなし"
              ]
            },
            {
              id: 5,
              name: "湯西川温泉　ホテル湯西川（伊東園ホテルズ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/149268/149268.jpg",
              rating: 4.05,
              reviews: 954,
              price: "¥6,248〜",
              access: "湯西川温泉駅よりバスにて約20分（ホテル湯西川前下車）",
              special: "平家の落人伝説の残る温泉地。Ph9.2のアルカリ性単純泉『美肌の湯』と言われています。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149268%2F149268.html",
              story: "湯西川の自然に囲まれた高台に佇み、充実した館内設備と良心的なオールインクルーシブ（または夕食時飲み放題付きバイキング）スタイルで気軽に冬の温泉旅を満喫できる「ホテル湯西川（伊東園ホテルズ）」。広々とした大浴場と雪見の露天風呂では、名湯・湯西川の肌触り優しい温泉を心ゆくまで堪能。夕食バイキングでは、和洋中の多彩な料理に加え、季節限定の郷土料理フェアや地酒・アルコール飲み放題が無料で楽しめるのが最大の魅力です。かまくら祭の会場へのアクセスや無料巡回バスも運行され、グループやファミリーでの冬旅に最適です。",
              roomTip: "広々とした和室または和洋室。高台からの眺望が良く、日光の山々と雪景色をパノラマで楽しむことができます。",
              gourmetTip: "「季節のバイキング＆アルコール飲み放題」。冬限定の鍋フェアや日光名物の湯波料理、地元の銘酒を好きなだけ楽しめる気軽なご馳走。",
              highlights: [
                "高台からの雄大な山岳雪景色パノラマ＆夕食時アルコール飲み放題付きバイキング",
                "冬限定のあったか鍋フェア＆日光湯波と季節の味覚を好きなだけ味わえるバイキング",
                "広々とした客室と充実した無料館内施設＆グループや家族旅行に抜群のコスパ"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "湯西川温泉の「かまくら祭」とはどのようなイベントですか？開催期間や見どころは？",
    "a": "「湯西川温泉かまくら祭」は、例年1月下旬から2月下旬にかけて開催される日本夜景遺産認定の冬の一大イベントです。メイン会場の「平家の里」や「沢口河川敷」には、数百個から千個に及ぶミニかまくらが作られ、日没とともにロウソクの火が一斉に灯されます。白銀の河川敷にオレンジ色の無数の光が揺らめく光景は、息を呑むほど幻想的でロマンチックです。また平家の里会場では大型かまくらの中で温かい甘酒やお汁粉を楽しむこともできます。"
  },
  {
    "q": "湯西川名物「平家囲炉裏料理（お狩場焼）」とは具体的にどんな料理ですか？",
    "a": "壇ノ浦の合戦後、平家の落人たちが追っ手を逃れて身を潜めながら、山中で仕留めた鳥獣や川魚、山菜を囲炉裏の灰に竹串を刺して炭火で焼いて食べたのが始まりと伝えられています。現在では、新鮮な岩魚や山女魚の塩焼き、野鳥や鹿・猪などのジビエ串、日光名物の湯波（ゆば）、すりつぶした米を丸めて串に刺し特製じゅうねん味噌（エゴマ味噌）を塗った「ばんだい餅」などを囲炉裏端で香ばしく焼き上げます。青竹の筒に地酒を入れて灰の中で燗をつける「かっぽ酒」とともに味わうのが伝統のスタイルです。"
  },
  {
    "q": "湯西川温泉の泉質と特徴、冬の雪見風呂の効能について教えてください。",
    "a": "湯西川温泉の泉質は主に「アルカリ性単純温泉（低張性アルカリ性高温泉）。」です。pH値が高く無色透明・無味無臭の柔らかな湯触りが特徴で、刺激が少ないため肌がデリケートな方や小さなお子様、高齢の方でも安心して長湯できます。アルカリ性の成分が肌の汚れや角質を優しく落とし、入浴後はすべすべの滑らかな肌に。また神経痛、筋肉痛、冷え性、疲労回復に優れた効能があり、冬の寒さでこわばった体を芯から温めてくれます。"
  },
  {
    "q": "11月〜1月の湯西川温泉へのアクセス道路状況と雪道対策はどうですか？",
    "a": "湯西川温泉は日光市の最北端、山深い豪雪地域に位置しています。11月下旬頃から初雪が降り始め、12月から1月は完全な圧雪・凍結路面となります。車で訪れる場合は必ずスタッドレスタイヤ（4WD車推奨）を装着してください。急ブレーキ・急ハンドルを避け、十分な車間距離を取って走行する必要があります。雪道運転に不安がある方は、東武鉄道・野岩鉄道の「湯西川温泉駅」から発着する日光交通の路線バスを利用するのが最も安全で快適です。"
  },
  {
    "q": "湯西川温泉周辺の冬の見どころや立ち寄りスポットはどこですか？",
    "a": "平家落人の生活様式を再現した民俗資料館「平家の里」では、茅葺き屋根の古民家群が雪に覆われ、雪国ならではの原風景に出会えます。また温泉街から少し足を伸ばした「水の郷」では、巨大な吊り橋からの雪景色鑑賞や足湯、郷土料理が楽しめます。お土産には日光名物の生湯波、ばんだい餅、栃の実せんべい、日光の地酒（四季桜や日光誉）が定番です。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50/50 pb-20 text-stone-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-b from-stone-900 via-amber-950 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1920&q=80" 
            alt="雪に包まれる湯西川温泉の渓谷美" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Flame className="w-3.5 h-3.5" />
            11月・12月・1月限定 平家落人の里・囲炉裏とかまくら祭特集
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            【栃木・湯西川温泉】平家落人の隠れ里・雪見露天風呂と名物平家囲炉裏会席＆日本夜景遺産かまくら祭を巡る名宿5選
          </h1>
          <p className="text-amber-100 text-sm sm:text-base leading-relaxed pt-2">
            壇ノ浦の合戦から800年余。白銀の渓谷に抱かれた日光の最奥・湯西川温泉で、炭火のパチパチとはぜる音を聞きながら味わう名物囲炉裏料理と、日本夜景遺産かまくら祭の幻想世界へ。
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-amber-200/80 pt-2 border-t border-amber-900/60">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> 2026年10月最新取材</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> 栃木県日光市湯西川（湯西川温泉郷）</span>
            <span className="flex items-center gap-1.5"><Waves className="w-3.5 h-3.5" /> アルカリ性単純温泉（肌に優しい美肌のぬくもり湯）</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12">

        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4 text-amber-800" />
              平家落人の里・湯西川温泉の冬の魅力
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初雪が舞う深山幽谷の静寂と、囲炉裏の炎に心温まる隠れ里の冬旅
            </h2>
          </div>

          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              源平の合戦において、壇ノ浦で敗れた平家一門が落ち延び、武士の身分を隠してひっそりと暮らしたと伝わる栃木県日光市の最奥・「湯西川（ゆにしがわ）温泉」。男鹿川の支流である湯西川の清流沿いに佇むこの集落には、今も端午の節句に鯉のぼりを揚げない（敵に見つからないようにするため）、鶏を飼わない（鳴き声で所在が知られないようにするため）といった、切なくも誇り高い平家の落人風習が息づいています。
            </p>
            <p>
              11月下旬の初雪を迎えると、湯西川は劇的な雪景色の世界へと姿を変えます。12月から1月にかけては山深き渓谷一面が純白の雪に覆われ、茅葺き屋根の古民家や川のせせらぎ、湯煙が調和した水墨画のような静寂が里を包みます。
            </p>
            <p>
              この地で何より旅人を惹きつけてやまないのが、伝統の「平家囲炉裏料理（お狩場焼）」です。囲炉裏を囲み、赤々と燃える炭火の灰に竹串を刺してじっくり焼き上げる新鮮な岩魚や山女魚、野鳥や鹿・猪などのジビエ肉、そして特製の香ばしいじゅうねん味噌（エゴマ味噌）を塗った名物「ばんだい餅」。青竹の筒で温められた熱々の「かっぽ酒」を酌み交わしながら過ごす夜は、都会の慌ただしさを完全に忘れさせてくれます。
            </p>
            <p>
              さらに1月下旬からは、全国から旅行者が集う「日本夜景遺産・湯西川温泉かまくら祭」が開幕。河川敷に並ぶ数百個のミニかまくらに灯るロウソクの炎が、雪景色を幻想的なオレンジ色に染め上げます。本記事では、楽天トラベルの最新データを基に、11月・12月・1月の湯西川温泉で最高の冬籠もりを約束する厳選5宿をご紹介します。
            </p>
          </div>
        </section>

        {/* 5 Hot Spring Inns Cards */}
        <section className="space-y-8">
          <div className="border-l-4 border-amber-700 pl-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              11・12・1月に泊まりたい湯西川温泉の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              楽天トラベル公式APIより取得した最新の料金・評価・空室プランを反映しています
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-xs hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                    <img 
                      src={h.img} 
                      alt={h.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-amber-300 px-3 py-1 rounded-full text-xs font-bold border border-amber-400/30">
                      第{h.id}位
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 text-amber-700 text-xs font-bold mb-1">
                        <Flame className="w-3.5 h-3.5" />
                        平家伝承の囲炉裏料理＆雪見露天
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-2 text-xs text-stone-500">
                        <span className="flex items-center gap-1 text-amber-600 font-bold">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          {h.rating}
                        </span>
                        <span>({h.reviews}件のクチコミ)</span>
                        <span className="font-bold text-stone-800">{h.price}</span>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-3">
                        {h.story}
                      </p>

                      <div className="bg-stone-50 rounded-xl p-3 mt-3 border border-stone-100 space-y-1.5 text-xs text-stone-600">
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-stone-800 shrink-0">お部屋のポイント:</span>
                          <span>{h.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="font-bold text-stone-800 shrink-0">冬の味覚:</span>
                          <span>{h.gourmetTip}</span>
                        </div>
                      </div>

                      <ul className="mt-3 space-y-1 text-xs text-stone-600">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <div className="text-[11px] text-stone-500 truncate max-w-[200px]">
                        {h.access}
                      </div>
                      <a 
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-amber-700 hover:bg-amber-800 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition"
                      >
                        楽天トラベルで空室・プランを見る
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1 Night 2 Days Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-amber-800" />
              1泊2日おすすめモデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              平家落人の隠れ里と雪見露天風呂・かまくら祭ライトアップの旅
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-amber-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-amber-700" />
                【1日目】渓谷の雪景色と囲炉裏料理・かまくら鑑賞
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>12:30 鬼怒川温泉駅または今市でランチ：</strong>名物の手打ち日光蕎麦や日光湯波御膳で身体を温める。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>14:00 湯西川温泉駅・湯西川ダム散策：</strong>雪化粧したダム湖のパノラマを眺め、湯西川の奥深い秘境へ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>15:30 湯西川の宿へチェックイン：</strong>雪見の露天風呂に浸かり、湯西川のせせらぎを聞きながら極上の湯浴み。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>17:30 名物・平家囲炉裏料理ディナー：</strong>炭火で焼く香ばしい岩魚、ばんだい餅、ジビエ串、かっぽ酒に舌鼓。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>19:30 湯西川温泉かまくら祭（1月下旬〜2月開催時）：</strong>河川敷に並ぶ無数のミニかまくらのロウソク点灯を鑑賞。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-amber-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-amber-700" />
                【2日目】平家の里散策とお土産めぐり
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>08:00 朝の雪見風呂と温かい郷土朝食：</strong>湯上がりに味わう湯波の味噌汁と地元野菜の小鉢で健康的な朝。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>09:30 「平家の里」雪景色散策：</strong>雪をかぶった茅葺き屋根の古民家群を歩き、800年の歴史ロマンに触れる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>11:00 「水の郷」で足湯＆お買い物：</strong>名物ばんだい餅や栃の実せんべい、地酒を購入し、雪見の足湯でひと休み。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>13:00 鬼怒川・日光方面へ帰路へ：</strong>東武特急スペーシアXやリバティに乗り、温かな思い出とともに帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-amber-800" />
              湯西川・日光奥地の冬みやげ＆立ち寄り手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              湯西川で手に入れたい冬の逸品と伝統の味
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-700" />
                名物「ばんだい餅」＆じゅうねん味噌
              </h3>
              <p>
                湯西川のソウルフード「ばんだい餅」。うるち米を蒸して搗いた素朴な餅で、もち米とは異なる歯切れの良さと米本来の甘みが特徴。エゴマをたっぷり使った香ばしい「じゅうねん味噌」を塗って炭火で香ばしく焼き上げれば、冬の最高のおやつになります。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-700" />
                日光生湯波（ゆば）と栃木の地酒「四季桜」
              </h3>
              <p>
                日光の清らかな水と良質な国産大豆で作られる伝統の「日光湯波」。層になったふっくらとした食感と濃厚なコクは、鍋料理にもお刺身にもぴったり。栃木県を代表する銘酒「四季桜」や「日光誉」の冬限定しぼりたて生酒とともに楽しむのが粋な味わい方です。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-amber-800" />
              湯西川温泉・泉質と平家落人文化の深層解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ11月・12月・1月の湯西川温泉は「日本屈指の冬籠もり秘境」と呼ばれるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-amber-700" />
              肌に優しいアルカリ性単純温泉がもたらす極上の癒やし
            </h3>
            <p>
              湯西川温泉の泉質は「アルカリ性単純温泉」。無色透明でまろやかな感触の源泉は、刺激が極めて少なく肌にスーッとなじむ優しい湯ざわりが特徴です。アルカリ性の働きにより肌表面の角質を優しくオフしながら、温泉成分がじんわりと身体の芯まで浸透。冷え性や筋肉痛、神経痛を和らげ、真冬の寒さでこわばった筋肉をほぐしてくれます。雪見の露天風呂で長湯を楽しんでも湯あたりしにくい理想的な名湯です。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-amber-700" />
              炭火と囲炉裏が醸し出す遠赤外線効果と隠れ里の知恵
            </h3>
            <p>
              何百年も受け継がれてきた「囲炉裏料理」は、単なる郷土料理の枠を超えた冬の最高のもてなしです。囲炉裏の灰に刺した串に炭火の遠赤外線がじっくりと通ることで、川魚は皮目がパリッと香ばしく、身は驚くほどふっくらジューシーに焼き上がります。炭火の温もりとパチパチとはぜる音、薪の香りに包まれる囲炉裏端の時間は、現代人が忘れかけていた団欒と温もりの原風景を取り戻させてくれます。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Snowflake className="w-4 h-4 text-amber-700" />
              日本夜景遺産認定・冬の白銀を彩るかまくら祭の幻想美
            </h3>
            <p>
              1月下旬から開幕する「湯西川温泉かまくら祭」は、雪国の厳しい寒さを奇跡の絶景へと昇華させた日本夜景遺産認定のイベントです。地元の方々が一心に彫り上げた数百個のミニかまくらに灯るロウソクの明かりは、LEDイルミネーションとは全く異なる、揺らぎと温かみのある自然の光。冷気の中で静かに瞬く灯火は、訪れる人の心に一生消えない感動を刻みます。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-amber-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              冬の湯西川温泉旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-700 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-800" />
            あわせて読みたい栃木・北関東の冬温泉＆美食特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-tochigi-nasu-itamuro-onsen-toji-tochigigyu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">栃木・板室温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">開湯1000年「下野の薬湯」板室温泉・名物立ち湯と極上那須黒毛和牛名宿</p>
            </Link>
            <Link 
              href="/winter-tochigi-kinugawa-onsen-valley-snow-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">栃木・鬼怒川温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">鬼怒川渓谷の雪景色と名湯・とちぎ和牛すき焼き＆冬の絶景リゾート</p>
            </Link>
            <Link 
              href="/winter-gunma-oigami-onsen-fukiware-joshugyu-soba-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">群馬・老神温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">初冬の片品渓谷美と美肌単純硫黄泉・極上上州牛すき焼き名宿</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-tochigi-yunishigawa-onsen-kamakura-irori-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
