import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Waves, ShieldCheck, Snowflake, Footprints, Flame, Flower2, Wine, AlertTriangle, Sunrise, HeartHandshake, Eye, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: '11・12・1月島根：幻の石見和牛厳選！名宿5選',
  description: '周囲を山々に囲まれた山陰の小京都・島根県津和野。11〜1月は雪化粧した武家屋敷の白壁となまこ壁。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '太皷谷稲成神社 初詣 千本鳥居, 津和野 殿町通り 雪景色, うずめ飯 元祖 津和野, 石見和牛 冬, ゆとりろ津和野, 若槻 津和野, 島根 冬 旅行, 山陰の小京都 津和野 観光',
  alternates: {
    canonical: 'https://croud-travel.pages.dev/winter-shimane-tsuwano-taikodani-inari-hatsumode-uzumemeshi-iwamigyu-stay'
  },
  openGraph: {
    title: '11・12・1月島根：幻の石見和牛厳選！名宿5選',
    description: '周囲を山々に囲まれた山陰の小京都・島根県津和野。11〜1月は雪化粧した武家屋敷の白壁となまこ壁。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-shimane-tsuwano-taikodani-inari-hatsumode-uzumemeshi-iwamigyu-stay',
    siteName: 'クラドトラベル',
    type: 'article',
    locale: 'ja_JP',
    images: [{
      url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
      width: 1200,
      height: 630,
      alt: '冬の津和野 太皷谷稲成神社の千本鳥居と殿町通りの雪景色'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "11・12・1月島根：山陰の小京都「津和野」雪化粧の殿町通りとなまこ壁・朱塗りの千本鳥居「太皷谷稲成神社」新春初詣！日本五大稲荷・冬の伝統熱々郷土料理「うずめ飯」＆幻の石見和牛厳選名宿5選",
    description: "周囲を山々に囲まれた山陰の小京都・島根県津和野。11〜1月は雪化粧した武家屋敷の白壁となまこ壁、堀割を泳ぐ色鮮やかな錦鯉が情緒あふれる冬景色を描き出します。日本五大稲荷の一つ「太皷谷稲成神社」では、約1000本の朱塗りの千本鳥居トンネルを登り新年の願望成就を祈る新春初詣。江戸時代から伝わる熱々の伝統郷土料理「うずめ飯」に舌鼓を打ち、幻の黒毛和牛「石見和牛」や銘酒「初陣」を堪能。歴史と静寂に包まれる名湯宿に寛ぐ冬の特選名宿5選。",
    images: ['https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function ShimaneTsuwanoWinterFeaturePage() {
  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【11・12・1月島根】山陰の小京都「津和野」雪化粧の殿町通りとなまこ壁・朱塗りの千本鳥居「太皷谷稲成神社」新春初詣！日本五大稲荷・冬の伝統熱々郷土料理「うずめ飯」＆幻の石見和牛厳選名宿5選",
    "description": "周囲を山々に囲まれた山陰の小京都・島根県津和野。11〜1月は雪化粧した武家屋敷の白壁となまこ壁、堀割を泳ぐ色鮮やかな錦鯉が情緒あふれる冬景色を描き出します。日本五大稲荷の一つ「太皷谷稲成神社」では、約1000本の朱塗りの千本鳥居トンネルを登り新年の願望成就を祈る新春初詣。江戸時代から伝わる熱々の伝統郷土料理「うずめ飯」に舌鼓を打ち、幻の黒毛和牛「石見和牛」や銘酒「初陣」を堪能。歴史と静寂に包まれる名湯宿に寛ぐ冬の特選名宿5選。",
    "image": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    "datePublished": "T09:00:00+09:00",
    "dateModified": "T09:00:00+09:00",
    "author": {
      "@type": "Organization",
      "name": "クラドトラベル編集部 温泉・神社仏閣取材班"
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
      "@id": "https://croud-travel.pages.dev/winter-shimane-tsuwano-taikodani-inari-hatsumode-uzumemeshi-iwamigyu-stay"
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
        "name": "島根・津和野＆太皷谷稲成神社 冬の初詣とうずめ飯",
        "item": "https://croud-travel.pages.dev/winter-shimane-tsuwano-taikodani-inari-hatsumode-uzumemeshi-iwamigyu-stay"
      }
    ]
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "日本五大稲荷「太皷谷稲成神社」の由緒と、なぜ「稲荷」ではなく「稲成」と書く？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "太皷谷稲成神社（たいこだにいなりじんじゃ）は、江戸時代の安永2年（1773年）、津和野藩第7代藩主・亀井矩貞公が藩の安寧と領民の幸福を祈願し、京都の伏見稲荷大社から勧請して城山の太皷谷に創祀したのが始まりです。全国に約3万社ある稲荷神社の中で「稲荷」ではなく「稲成」の文字を用いる極めて珍しい神社で、これは「お願い事がよく成就する（願いが成る）」という意味が込められています。約1000本もの朱塗りの鳥居が連なる石段の参道は壮観で、新春には開運厄除け・商売繁盛・願望成就を願う参拝者で賑わいます。"
        }
      },
      {
        "@type": "Question",
        "name": "津和野の冬の伝統郷土料理「うずめ飯」とは？その歴史と独特の食べ方は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "「うずめ飯（うずめめし）」は、日本五大名飯の一つにも数えられる津和野に古くから伝わる伝統郷土料理です。江戸時代、倹約令が出されていた時代に役人の目を盗んで具材を贅沢に楽しむため、あるいは山陰の厳しい冬に来客をもてなすため、ご飯の下に具材を「埋めた（うずめた）」ことが名前の由来とされています。丼の底に細かく刻んで煮込んだ椎茸、人参、里芋、豆腐などを敷き詰め、その上にご飯を盛り、刻み海苔と本わさびを乗せ、熱々の鰹出汁をかけていただきます。わさびを溶かしながらご飯をかき混ぜると、下から滋味豊かな具材が次々と現れ、身体の芯から温まる絶妙な一杯です。"
        }
      },
      {
        "@type": "Question",
        "name": "冬の津和野「殿町通り」となまこ壁・掘割の錦鯉の見どころは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "殿町通り（とのまちどおり）は、津和野藩の家老屋敷が建ち並んでいた歴史的な通りで、白壁となまこ壁、武家屋敷門が連なる山陰の小京都の象徴です。通りの脇を流れる掘割には、約2万匹もの色鮮やかな錦鯉が泳いでいます。冬（12〜1月）に雪が降ると、屋根や塀の上に積もった白い雪となまこ壁のコントラストが格別の風雅さを醸し出し、冷たい水の中を優雅に泳ぐ赤や白の錦鯉の姿が情緒豊かな絵画のような情景を創り出します。"
        }
      },
      {
        "@type": "Question",
        "name": "幻の黒毛和牛「石見和牛」の特徴と、冬におすすめの調理法は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "石見和牛（いわみぎゅう）は、島根県西部（石見地方）の豊かな自然環境の中で、厳格な基準のもと未経産の雌牛を中心に肥育される希少な黒毛和牛です。年間の出荷頭数が数百頭程度と非常に少なく、幻の和牛と称されています。肉質は赤身の味が非常に濃厚で、脂の融点が低いため、口の中の温度でさらりと溶けるのが特徴。冬は陶板焼きやステーキで香ばしく焼き上げるか、すき焼きにして旨味を凝縮させるのがおすすめ。津和野の老舗酒蔵の地酒「初陣」と合わせると至高の相性を誇ります。"
        }
      },
      {
        "@type": "Question",
        "name": "冬（11・12・1月）の津和野へのアクセスと、山陰の雪道・運転の注意点は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "鉄道を利用する場合、新幹線停車駅のJR小郡（新山口）駅からJR山口線の特急「スーパーおき」で津和野駅まで約1時間で快適に直結しています。車を利用する場合、中国自動車道（六日市ICまたは小郡IC）を経由して国道9号線を利用します。津和野は盆地かつ山間部に位置するため、12月中旬〜2月は日本海側気候の影響で積雪や路面凍結が発生します。特に峠越えの区間は積雪が多いため、冬期に車で訪れる際は必ずスタッドレスタイヤを装着し、チェーンを携行してください。"
        }
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "津和野温泉　ゆとりろ津和野",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184494/184494.jpg",
              rating: 4.12,
              reviews: 564,
              price: "¥7,700〜",
              access: "JR津和野駅より徒歩6分/中国道「六日市ＩＣ」より車で約50分/「太鼓谷稲荷神社」より車で約5分",
              special: "【日本遺産の町】 津和野百景図 を紐解く 創作会席が自慢―　この地唯一の温泉宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184494%2F184494.html",
              story: "津和野川のほとり、津和野駅から徒歩圏内の好立地に位置する温泉リゾート旅館「津和野温泉 ゆとりろ津和野」。歴史ある城下町の風情にモダンな和の意匠を融合させた館内は、女性やカップル、歴史好きの旅人に高い人気を誇ります。自家源泉の天然温泉「津和野温泉」は、さらりとした肌触りが心地よい単純温泉。冬の寒さで冷えた身体を広々とした大浴場で芯から温められます。料理は島根の山海の幸を活かした創作和食会席で、冬の味覚や石見和牛の陶板焼きを地酒とともに味わえます。太皷谷稲成神社や殿町通りへの散策拠点として抜群の機動性を発揮します。",
              roomTip: "和モダンツインまたは露天風呂付き和洋室。畳の心地よさとベッドの快適性を両立し、窓外に広がる津和野の山並みを眺めながらゆったり休息。",
              gourmetTip: "季節の特選会席「石見和牛と山陰の恵み」。霜降り石見和牛の陶板焼きと、地元の冬野菜、津和野地酒のペアリングが絶品。",
              highlights: [
                "津和野川沿いの好立地・自家源泉の津和野温泉大浴場と石見和牛陶板焼き会席" ,
                "和モダンの洗練された空間・太皷谷稲成神社や殿町通りへの散策拠点に最適" ,
                "津和野駅徒歩圏内・山陰の小京都の歴史情緒をじっくりと味わい尽くす温泉リゾート"
              ]
            },
            {
              id: 2,
              name: "若槻　津和野",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/196546/196546.jpg",
              rating: 4.50,
              reviews: 2,
              price: "¥11,667〜",
              access: "ＪＲ　津和野駅より徒歩約10分",
              special: "4組限定ー山陰の小京都・津和野ー文化財の旧酒造で愉しむ和モダンガストロノミー〈2025.10月開業〉",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196546%2F196546.html",
              story: "津和野の歴史的景観が色濃く残る本町通り沿いに佇む風雅な宿泊施設「若槻 津和野」。かつての商家や町家の趣を現代に美しく蘇らせたデザイナーズ空間で、1棟貸し切りやプライベート感あふれる滞在を提供しています。一歩外に出れば、なまこ壁の蔵や古い格子戸が連なる小京都の町並みが広がり、朝夕の静寂な散策を思いのままに楽しめます。冬の雪が降る日には、白壁と黒い瓦屋根、そして白銀の雪が織りなすモノトーンの美しい世界に包まれ、まるで江戸時代にタイムスリップしたかのような非日常感を深く味わえます。",
              roomTip: "町家スイート。高い天井と太い梁が印象的な和モダン空間で、こだわりの家具やキッチン設備を備え、暮らすような優雅な逗留が叶います。",
              gourmetTip: "本町通り周辺の老舗割烹で味わう「元祖うずめ飯」。出汁の香りと本わさびの爽やかな辛みがご飯の下の具材と調和する感動の味。",
              highlights: [
                "本町通り沿いの歴史的町家リノベーション・プライベート感溢れる小京都逗留" ,
                "江戸の面影残すなまこ壁の蔵に囲まれた静寂・元祖うずめ飯の名店へ直結" ,
                "白壁と雪が織りなすモノトーンの美しい世界・暮らすように楽しむ町家滞在"
              ]
            },
            {
              id: 3,
              name: "益田グリーンホテルモーリス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52979/52979.jpg",
              rating: 4.64,
              reviews: 2677,
              price: "¥4,675〜",
              access: "ＪＲ　益田駅より徒歩１分",
              special: "島根県西部、ＪＲ益田駅前に位置するビジネスと観光のアクセス拠点。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52979%2F52979.html",
              story: "津和野から車またはJR山口線で結ばれた山陰の海の玄関口・益田駅前に位置する「益田グリーンホテルモーリス」。広々とした館内には男女別の大浴場と本格的な高温サウナ、水風呂を完備し、旅人の疲労回復に最高の設備を誇ります。清潔でモダンな客室にはシモンズ社製上質ベッドと加湿空気清浄機を完備。無料のマッサージチェアコーナーや充実の漫画コーナーなど、充実したリラクゼーションが魅力です。日本海で揚がる新鮮な地魚料理が楽しめる駅前の名店街へも徒歩数分でアクセスできます。",
              roomTip: "デラックスシングルまたはツインルーム。ワイドデスクと高速Wi-Fi完備で、機能的かつ上質なプライベート空間を確保。",
              gourmetTip: "駅前割烹での日本海の冬魚グルメ。冬が旬の真鱈やアンコウ鍋、山陰名物のノドグロ塩焼きを地酒「扶桑鶴」とともに。",
              highlights: [
                "益田駅前徒歩圏内・大浴場＆本格高温サウナ完備で高評価を獲得するモーリスホテル" ,
                "シモンズ製ベッドと加湿空気清浄機完備・山陰の冬魚が味わえる駅前名店街へ至近" ,
                "無料マッサージチェアコーナー完備・冬の長旅の疲れを完璧にリフレッシュ"
              ]
            },
            {
              id: 4,
              name: "ホテルルートイン益田",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/172960/172960.jpg",
              rating: 4.31,
              reviews: 492,
              price: "¥6,150〜",
              access: "ＪＲ山陰本線　益田駅より徒歩にて約１5分  萩・石見空港よりお車で約15分",
              special: "★WOWOW全室無料★男女別大浴場完備★バイキング朝食無料★萩・石見空港から車で１5分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172960%2F172960.html",
              story: "益田市街地、国道沿いに位置し、車での石見・津和野周遊に抜群のフットワークを提供する「ホテルルートイン益田」。平面無料駐車場を完備し、津和野の城下町まで車で約35分というアクセスの良さを誇ります。館内にはラジウム人工温泉大浴場「旅人の湯」があり、無色無臭の肌に優しいお湯が長旅の疲れを解きほぐします。全客室に加湿空気清浄機とWi-Fiを完備し、無料の和洋朝食バイキングではヨーロッパ直輸入の焼きたてクロワッサンや温かい総菜が並び、清々しい冬の朝を迎えることができます。",
              roomTip: "コンフォートルーム（ダブルまたはツイン）。清潔で落ち着いた色調のインテリアとエアウィーヴマットレスで快適な睡眠。",
              gourmetTip: "無料朝食バイキングの温かいスープと和惣菜。ホテル周辺のレストランで味わう島根和牛ハンバーグも人気。",
              highlights: [
                "平面無料駐車場完備・ラジウム人工温泉大浴場と充実の無料朝食バイキング" ,
                "国道沿いで津和野へのドライブに便利・全室Wi-Fi完備のルートイン品質" ,
                "焼きたてクロワッサンと温かい総菜朝食・ビジネスから観光まで幅広く対応"
              ]
            },
            {
              id: 5,
              name: "瑞穂イン石見益田",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9639/9639.jpg",
              rating: 3.85,
              reviews: 1141,
              price: "¥3,600〜",
              access: "「JR益田駅」より車で約3分／「萩・石見空港」より車で約10分／「コンビ二」まで徒歩約1分",
              special: "【島根県西部 益田駅より徒歩7分】ビジネス・観光の拠点に最適で無料平面駐車場完備！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9639%2F9639.html",
              story: "益田市中心部に位置し、リーズナブルな価格設定と真心のこもったサービスで定評のある「瑞穂イン石見益田」。益田駅から徒歩圏内にあり、ビジネスから山陰観光まで幅広く利用されています。館内は手入れが行き届き清潔感にあふれ、全室に無料Wi-Fiと液晶テレビ、個別空調を完備。周辺にはコンビニや郷土料理店が多数あり、夕食の選択肢も豊富です。津和野の歴史探訪や太皷谷稲成神社への初詣ドライブの拠点として、スマートで無駄のない旅をサポートします。",
              roomTip: "スタンダードシングルまたはツイン。コンパクトながら機能的な設えで、気兼ねなくのんびりと過ごせる空間。",
              gourmetTip: "ホテル周辺の居酒屋で楽しむ山陰郷土料理。名物の赤天（魚肉の練り物に唐辛子を練り込み揚げた郷土食）と日本酒の組み合わせ。",
              highlights: [
                "益田市中心部の機能的拠点・リーズナブルな料金と安心の快適ステイ" ,
                "周辺に飲食店やコンビニ充実・石見和牛や山陰の地酒探訪のフットワーク良好" ,
                "親切でアットホームなおもてなし・コストパフォーマンスに優れた快適和洋室"
              ]
            }
  ];

  const faqList = [
  {
    "q": "日本五大稲荷「太皷谷稲成神社」の由緒と、なぜ「稲荷」ではなく「稲成」と書く？",
    "a": "太皷谷稲成神社（たいこだにいなりじんじゃ）は、江戸時代の安永2年（1773年）、津和野藩第7代藩主・亀井矩貞公が藩の安寧と領民の幸福を祈願し、京都の伏見稲荷大社から勧請して城山の太皷谷に創祀したのが始まりです。全国に約3万社ある稲荷神社の中で「稲荷」ではなく「稲成」の文字を用いる極めて珍しい神社で、これは「お願い事がよく成就する（願いが成る）」という意味が込められています。約1000本もの朱塗りの鳥居が連なる石段の参道は壮観で、新春には開運厄除け・商売繁盛・願望成就を願う参拝者で賑わいます。"
  },
  {
    "q": "津和野の冬の伝統郷土料理「うずめ飯」とは？その歴史と独特の食べ方は？",
    "a": "「うずめ飯（うずめめし）」は、日本五大名飯の一つにも数えられる津和野に古くから伝わる伝統郷土料理です。江戸時代、倹約令が出されていた時代に役人の目を盗んで具材を贅沢に楽しむため、あるいは山陰の厳しい冬に来客をもてなすため、ご飯の下に具材を「埋めた（うずめた）」ことが名前の由来とされています。丼の底に細かく刻んで煮込んだ椎茸、人参、里芋、豆腐などを敷き詰め、その上にご飯を盛り、刻み海苔と本わさびを乗せ、熱々の鰹出汁をかけていただきます。わさびを溶かしながらご飯をかき混ぜると、下から滋味豊かな具材が次々と現れ、身体の芯から温まる絶妙な一杯です。"
  },
  {
    "q": "冬の津和野「殿町通り」となまこ壁・掘割の錦鯉の見どころは？",
    "a": "殿町通り（とのまちどおり）は、津和野藩の家老屋敷が建ち並んでいた歴史的な通りで、白壁となまこ壁、武家屋敷門が連なる山陰の小京都の象徴です。通りの脇を流れる掘割には、約2万匹もの色鮮やかな錦鯉が泳いでいます。冬（12〜1月）に雪が降ると、屋根や塀の上に積もった白い雪となまこ壁のコントラストが格別の風雅さを醸し出し、冷たい水の中を優雅に泳ぐ赤や白の錦鯉の姿が情緒豊かな絵画のような情景を創り出します。"
  },
  {
    "q": "幻の黒毛和牛「石見和牛」の特徴と、冬におすすめの調理法は？",
    "a": "石見和牛（いわみぎゅう）は、島根県西部（石見地方）の豊かな自然環境の中で、厳格な基準のもと未経産の雌牛を中心に肥育される希少な黒毛和牛です。年間の出荷頭数が数百頭程度と非常に少なく、幻の和牛と称されています。肉質は赤身の味が非常に濃厚で、脂の融点が低いため、口の中の温度でさらりと溶けるのが特徴。冬は陶板焼きやステーキで香ばしく焼き上げるか、すき焼きにして旨味を凝縮させるのがおすすめ。津和野の老舗酒蔵の地酒「初陣」と合わせると至高の相性を誇ります。"
  },
  {
    "q": "冬（11・12・1月）の津和野へのアクセスと、山陰の雪道・運転の注意点は？",
    "a": "鉄道を利用する場合、新幹線停車駅のJR小郡（新山口）駅からJR山口線の特急「スーパーおき」で津和野駅まで約1時間で快適に直結しています。車を利用する場合、中国自動車道（六日市ICまたは小郡IC）を経由して国道9号線を利用します。津和野は盆地かつ山間部に位置するため、12月中旬〜2月は日本海側気候の影響で積雪や路面凍結が発生します。特に峠越えの区間は積雪が多いため、冬期に車で訪れる際は必ずスタッドレスタイヤを装着し、チェーンを携行してください。"
  }
];

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

      <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-red-600 selection:text-white">
        {/* Breadcrumb Bar */}
        <nav aria-label="パンくずリスト" className="bg-white border-b border-stone-200 text-xs text-stone-500 py-3 px-4 sm:px-8">
          <div className="max-w-5xl mx-auto flex items-center space-x-2">
            <Link href="/" className="hover:text-red-600 transition">ホーム</Link>
            <span>/</span>
            <Link href="/features" className="hover:text-red-600 transition">特集一覧</Link>
            <span>/</span>
            <Link href="/prefectures/shimane" className="hover:text-red-600 transition">島根県</Link>
            <span>/</span>
            <span className="text-stone-800 font-medium">津和野太皷谷稲成神社初詣＆うずめ飯</span>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative bg-gradient-to-b from-stone-900 via-stone-850 to-stone-900 text-white py-16 sm:py-24 px-4 sm:px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/20 text-red-300 border border-red-400/30 text-xs sm:text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4 text-red-400" />
              11月・12月・1月冬の山陰の小京都・津和野探訪スペシャル
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">「島根・津和野＆太皷谷稲成神社」<br className="hidden sm:inline" /> 日本五大稲荷「太皷谷稲成神社」千本鳥居の新春初詣と雪の殿町通り！<br /> 熱々伝統「うずめ飯」＆幻の石見和牛を味わう厳選名宿</h1>
            <p className="text-sm sm:text-base md:text-lg text-stone-300 leading-relaxed max-w-3xl mx-auto mb-8 font-normal">
              静謐な山あいに佇む山陰の小京都・津和野。白銀の雪化粧をまとう武家屋敷のなまこ壁と、清らかな掘割を泳ぐ優雅な錦鯉。約1000本もの朱塗りの鳥居トンネルが山肌を彩る日本五大稲荷「太皷谷稲成神社」で迎える新春初詣。江戸の知恵が息づく熱々の伝統郷土料理「うずめ飯」と、口の中でとろける幻の「石見和牛」。津和野温泉の柔らかな湯に浸かり、歴史の深奥に触れる冬の特選旅をご案内します。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-stone-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Calendar className="w-4 h-4 text-red-400" /> 最適期: 11月中旬〜1月下旬
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <MapPin className="w-4 h-4 text-red-400" /> エリア: 島根県鹿足郡津和野町・益田市
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-md backdrop-blur-sm">
                <Flame className="w-4 h-4 text-red-400" /> 伝統食: 日本五大名飯「うずめ飯」・石見和牛
              </span>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          
          {/* Section 1: 太皷谷稲成神社の千本鳥居と新春初詣 */}
          <section className="mb-16">
            <div className="border-l-4 border-red-600 pl-4 mb-6">
              <span className="text-xs font-bold text-red-600 tracking-wider uppercase">Sacred Inari Pilgrimage</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                約1000本の朱塗り鳥居が雪に映える！日本五大稲荷「太皷谷稲成神社」新春初詣
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                津和野城跡の東北、鬼門にあたる城山の太皷谷に鎮座する「太皷谷稲成神社（たいこだにいなりじんじゃ）。」。江戸時代の安永2年（1773年）、津和野藩第7代藩主・亀井矩貞公が領民の平安と城の守護を祈願し、京都の伏見稲荷大社から神霊を勧請して創建された大社です。日本三大稲荷、あるいは日本五大稲荷の一つに数えられ、年間を通じて多くの崇敬者が足を運びます。
              </p>
              <p>
                この神社が全国的に特別なのは、「稲荷」ではなく「稲成」の字を用いる点です。これは矩貞公が「お願い事がよく成就するように（願いが成る）。」という切なる祈りを込めて名付けたもので、商売繁盛だけでなく、開運厄除、願望成就、失せ物発見のご神徳で広く信仰を集めています。
              </p>
              <p>
                麓の鳥居口から本殿へと続く参道には、約1000本もの鮮やかな朱塗りの鳥居がトンネルのように連なります。冬の雪が降る時期、純白の雪と鮮烈な朱色の鳥居が織りなす情景は、比類なき神聖な荘厳美。約300段の石段を一歩一歩踏みしめて登り切ると、朱塗りの荘厳な本殿が姿を現し、眼下には雪化粧した津和野の町並みが一望できます。油揚げと蝋燭をお供えして手を合わせる伝統の参拝作法で、新年の力強い開運を祈願できます。
              </p>
            </div>
          </section>

          {/* Section 2: 殿町通りとなまこ壁・掘割の冬景色 */}
          <section className="mb-16">
            <div className="border-l-4 border-stone-600 pl-4 mb-6">
              <span className="text-xs font-bold text-stone-600 tracking-wider uppercase">Little Kyoto Heritage</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                白壁となまこ壁に舞う粉雪！殿町通りの武家屋敷と清冽な掘割を泳ぐ錦鯉
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                太皷谷稲成神社の麓に広がる城下町の中でも、最も格式高い風情を今に残すのが「殿町通り（とのまちどおり）」です。江戸時代、津和野藩の筆頭家老・多胡家の屋敷をはじめとする重臣たちの武家屋敷が立ち並んでいた通りで、白い漆喰壁となまこ壁、重厚な門構えが整然と連なります。
              </p>
              <p>
                通りの脇を流れる清らかな水路（掘割）には、約2万匹もの色鮮やかな錦鯉が群れ遊んでいます。かつて生活用水や防火用水として整備された掘割に、昭和初期から鯉が放流されるようになりました。冬の静かな朝、瓦屋根やなまこ壁の上にうっすらと雪が積もると、町全体が静謐な水墨画の世界へと姿を変えます。
              </p>
              <p>
                冷たく澄み切った水の中を、紅や金の錦鯉がゆっくりと泳ぐ優雅な姿は、小京都・津和野ならではの冬の風物詩。森鴎外や西周（にしあまね）など近代日本を代表する文豪や啓蒙思想家を輩出した学問と文化の町の息吹を、足音を忍ばせながら静かに体感できます。
              </p>
            </div>
          </section>

          {/* Section 3: 伝統郷土料理うずめ飯と石見和牛 */}
          <section className="mb-16">
            <div className="border-l-4 border-amber-600 pl-4 mb-6">
              <span className="text-xs font-bold text-amber-600 tracking-wider uppercase">Traditional Culinary Culture</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                日本五大名飯「うずめ飯」の温もりと、口の中でとろける幻の「石見和牛」
              </h2>
            </div>
            <div className="prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-4">
              <p>
                津和野の冬の食文化を語る上で欠かせないのが、江戸時代から伝わる郷土料理「うずめ飯（うずめめし）」です。宮内庁が選定した「日本五大名飯（深川飯、忠七飯、かやく飯、さより飯、うずめ飯）。」の一つに数えられる格式ある伝統食です。
              </p>
              <p>
                その成り立ちには諸説あり、江戸時代の厳しい倹約令の下で庶民が役人の目を盗んで贅沢な具材を味わうためご飯の下に「埋めた（うずめた）」とも、また山陰の厳しい冬に来訪した客人をもてなすため、冷めないように具をご飯の下に隠したとも言われています。丼の底には甘辛く炊いた椎茸、人参、里芋、高野豆腐などが敷き詰められ、上にご飯をかぶせ、薬味の本わさびと刻み海苔が添えられます。熱々の澄んだ出汁を注ぎ、わさびを溶かしながらかき混ぜて頬張ると、出汁の深い旨味と具材の素朴な味わいが一気に口いっぱいに広がり、身体の芯までぽかぽかと温まります。
              </p>
              <p>
                さらに贅沢を極めるなら、島根県西部が誇る幻の黒毛和牛「石見和牛（いわみぎゅう）」を。未経産の雌牛のみをじっくりと育て上げたその肉質は、赤身の味が深く濃厚で、きめ細やかなサシの上質な脂が特徴です。香ばしく焼き上げた陶板焼きやすき焼きでいただけば、津和野の老舗酒蔵が醸す地酒「初陣（おいづち）」との相性も抜群で、冬の山陰旅の夜を最高の口福で満たしてくれます。
              </p>
            </div>
          </section>

          {/* Section 4: 厳選名宿5選 */}
          <section className="mb-16">
            <div className="border-l-4 border-red-600 pl-4 mb-8">
              <span className="text-xs font-bold text-red-600 tracking-wider uppercase">Verified Hotels via Rakuten API</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【楽天トラベル実データ連携】津和野・益田周辺の厳選名宿5選
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
                      <span className="inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded bg-red-50 text-red-700 border border-red-200">
                        厳選第{h.id}位
                      </span>
                      <div className="flex items-center gap-3 text-xs sm:text-sm">
                        <span className="flex items-center text-amber-500 font-bold">
                          <Star className="w-4 h-4 fill-amber-400 stroke-amber-400 mr-1" />
                          {h.rating}
                        </span>
                        <span className="text-stone-400">({h.reviews.toLocaleString()}件)</span>
                        <span className="text-red-600 font-black text-sm sm:text-base">
                          {h.price}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 mb-2">
                      {h.name}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
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
                        <strong className="text-stone-800 font-semibold mr-1">冬の美食:</strong>
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
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
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
                        className="inline-flex items-center justify-center w-full sm:w-auto gap-2 px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-sm transition"
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
            <div className="border-l-4 border-red-600 pl-4 mb-6">
              <span className="text-xs font-bold text-red-600 tracking-wider uppercase">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【1泊2日モデルコース】津和野城下町散策・太皷谷稲成初詣＆うずめ飯満喫ルート
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">1</span>
                  1日目：山陰の小京都・殿町通り散策と元祖うずめ飯・津和野温泉
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">11:00 JR津和野駅到着・殿町通りへ</strong><br />
                    新山口駅から特急スーパーおきで津和野駅へ。白壁となまこ壁が連なる殿町通りを散策し、掘割の錦鯉を見学。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">12:30 老舗割烹で伝統郷土料理「うずめ飯」ランチ</strong><br />
                    熱々の出汁と本わさびを利かせたうずめ飯を堪能。椎茸や里芋の素朴で深い滋味を味わう。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">14:00 森鴎外記念館＆旧宅・津和野カトリック教会見学</strong><br />
                    文豪・森鴎外の生家や、畳敷きの美しいステンドグラスが輝くカトリック教会を拝観。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">16:30 津和野温泉の宿へチェックイン</strong><br />
                    温泉宿に到着。柔らかな単純温泉に浸かり、冬の散策で冷えた身体を芯からぽかぽかに温める。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">18:30 幻の石見和牛陶板焼き会席ディナー</strong><br />
                    濃厚な旨味がとろける石見和牛を地酒「初陣」とともに味わい、小京都の静かな夜を満喫。
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs font-bold">2</span>
                  2日目：太皷谷稲成神社千本鳥居初詣＆益田・日本海グルメ
                </h3>
                <ol className="relative border-l border-stone-200 ml-3 space-y-4 text-xs sm:text-sm text-stone-600">
                  <li className="pl-4">
                    <strong className="text-stone-800">08:00 宿で朝風呂と地元産食材の和朝食</strong><br />
                    朝の清々しい空気の中で温泉を楽しみ、地元の手作り豆腐と炊きたて仁多米ご飯で朝食。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">09:30 太皷谷稲成神社で千本鳥居参拝・新春初詣</strong><br />
                    約1000本の朱塗り鳥居トンネルを登り本殿へ。油揚げと蝋燭をお供えし、一年の願望成就を祈願。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">11:30 本町通りで銘菓「源氏巻」焼き立て実演見学</strong><br />
                    薄いカステラ生地で餡を包んだ津和野名物「源氏巻」の焼き立てを熱々で味わい、お土産に購入。
                  </li>
                  <li className="pl-4">
                    <strong className="text-stone-800">13:30 益田市街地へ移動・山陰の冬魚ランチ</strong><br />
                    日本海沿いの益田で獲れたての地魚海鮮丼やノドグロを味わい、山陰の冬の恵みを楽しんで帰路へ。
                  </li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 6: 冬（11・12・1月）の参拝・旅行攻略 */}
          <section className="mb-16">
            <div className="border-l-4 border-rose-600 pl-4 mb-6">
              <span className="text-xs font-bold text-rose-600 tracking-wider uppercase">Travel Guide & Tips</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                【11・12・1月】津和野の気候・雪道対策と参拝攻略のポイント
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Snowflake className="w-4 h-4 text-blue-500" />
                  山陰特有の雪道とスタッドレスタイヤ
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  津和野は盆地山間部に位置するため、12月中旬〜2月は日本海からの雪雲により積雪や路面凍結が発生します。特に六日市ICや小郡ICからの峠越えルートは日陰が多く凍結しやすいため、車で訪れる際は必ずスタッドレスタイヤを装着してください。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Footprints className="w-4 h-4 text-red-500" />
                  太皷谷稲成神社の千本鳥居石段対策
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  太皷谷稲成神社の千本鳥居参道は約300段の石段が続きます。冬期は石段に雪が積もったり凍結したりして滑りやすくなるため、革靴やヒールは避け、滑り止めの効いたトレッキングシューズや防寒ブーツでお出かけください。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Compass className="w-4 h-4 text-emerald-500" />
                  特急スーパーおきを活用した快適アクセス
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  山陽新幹線の新山口駅からJR山口線の特急「スーパーおき」を利用すれば、雪道運転の心配なく約1時間で津和野駅へ到着できます。車窓から眺める雪化粧の長門峡や山あいの風景も美しく、冬の鉄道旅として極めて快適です。
                </p>
              </div>

              <div className="bg-white rounded-xl border border-stone-200 p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-1.5 text-sm">
                  <Calendar className="w-4 h-4 text-amber-500" />
                  新春初詣の混雑ピークと参拝時間
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  太皷谷稲成神社は山陰屈指の初詣名所であり、正月三が日には約10万人の参拝者が訪れます。山上の駐車場は混雑するため、麓の町営駐車場に車を止めて表参道を歩いて登るか、早朝8時台または夕方16時以降の静かな時間帯の参拝がおすすめです。
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: FAQセクション */}
          <section className="mb-16">
            <div className="border-l-4 border-red-600 pl-4 mb-6">
              <span className="text-xs font-bold text-red-600 tracking-wider uppercase">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 mt-1">
                津和野初詣＆うずめ飯冬旅 よくある質問（FAQ）
              </h2>
            </div>

            <div className="space-y-4">
              {faqList.map((f, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-stone-200 p-5 sm:p-6 shadow-sm">
                  <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                    <span className="text-red-600 font-black">Q.</span>
                    <span>{f.q}</span>
                  </h3>
                  <div className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5 border-l-2 border-red-100 mt-2">
                    <p>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 8: まとめ＆内部リンク */}
          <section className="border-t border-stone-200 pt-10 text-center">
            <h2 className="text-lg sm:text-xl font-bold text-stone-900 mb-4">
              朱塗りの鳥居と雪の町並み、熱々のうずめ飯が待つ冬の津和野へ
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto mb-8">
              太皷谷稲成神社の千本鳥居が誘う願望成就の新春初詣、雪の殿町通りに泳ぐ錦鯉、熱々の出汁が染み渡る伝統のうずめ飯、そして極上の石見和牛。静寂と温もりが同居する山陰の小京都で、心に残る新年の旅をお楽しみください。
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <Link href="/features" className="px-4 py-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition">
                ← 特集一覧に戻る
              </Link>
              <Link href="/prefectures/shimane" className="px-4 py-2 rounded-full bg-red-50 hover:bg-red-100 text-red-700 font-semibold transition">
                島根県の旅行ガイド・宿一覧
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
