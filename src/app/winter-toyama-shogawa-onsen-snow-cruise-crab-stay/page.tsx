import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Ship
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月富山・庄川温泉郷の雪見庄川峡遊覧船と冬の味覚】富山湾紅ズワイガニ・寒ブリ・白えび＆源泉美肌の宿5選",
  description: "11月下旬から12月にかけて富山県・庄川峡は、両岸の断崖絶壁が白銀の雪化粧をまとい、水墨画のような幽玄の冬景色が広がります。庄川峡遊覧船（小牧ダム〜大牧）から望む雪景色と湖面の水鏡、開湯以来湯治客を癒やし続ける庄川清流温泉・鳥越温泉のにごり湯や炭酸泉、11月に本格シーズンを迎える富山湾の紅ズワイガニ、氷見・新湊直送の脂が乗った極上寒ブリの刺身とブリしゃぶ、宝石のような白えびのかき揚げ、富山牛のサーロインを堪能する名宿5選を徹底解説。",
  keywords: '庄川温泉 宿泊, 庄川峡遊覧船 冬, 富山 11月 12月 温泉, 庄川温泉郷 宿, 人肌の宿 川金, 三楽園, ゆめつづり, となみ野庄川荘一萬亭, 五箇山温泉 赤尾館, 富山湾 紅ズワイガニ 宿, 氷見 寒ブリ 庄川温泉',
  alternates: {
    canonical: 'https://croud-travel.com/winter-toyama-shogawa-onsen-snow-cruise-crab-stay'
  },
  openGraph: {
    title: "【11・12月富山・庄川温泉郷の雪見庄川峡遊覧船と冬の味覚】富山湾紅ズワイガニ・寒ブリ・白えび＆源泉美肌の宿5選",
    description: "11月下旬から12月にかけて富山県・庄川峡は、両岸の断崖絶壁が白銀の雪化粧をまとい、水墨画のような幽玄の冬景色が広がります。庄川峡遊覧船（小牧ダム〜大牧）から望む雪景色と湖面の水鏡、開湯以来湯治客を癒やし続ける庄川清流温泉・鳥越温泉のにごり湯や炭酸泉、11月に本格シーズンを迎える富山湾の紅ズワイガニ、氷見・新湊直送の脂が乗った極上寒ブリの刺身とブリしゃぶ、宝石のような白えびのかき揚げ、富山牛のサーロインを堪能する名宿5選を徹底解説。",
    url: 'https://croud-travel.com/winter-toyama-shogawa-onsen-snow-cruise-crab-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の庄川峡遊覧船と庄川温泉郷の雪景色'
      }
    ]
  }
};

const faqList = [
  {
    "q": "庄川温泉郷の11月・12月の気温や気候、初雪の時期はいつ頃ですか？",
    "a": "庄川温泉郷（富山県砺波市）の11月上旬から中旬は紅葉の終盤から晩秋の気候で、最高気温は12〜16℃、朝晩は5〜8℃前後まで下がります。11月下旬になると山沿いから初雪が降り始め、12月に入ると最高気温も5〜8℃、最低気温は氷点下近くまで冷え込み、庄川峡周辺にも本格的な積雪が見られます。厚手のダウンコート、手袋、マフラー、滑り止め付きの防寒ブーツを必ず準備してください。"
  },
  {
    "q": "冬の庄川峡遊覧船（大牧温泉コース）は11月・12月も運航していますか？見どころは？",
    "a": "庄川峡遊覧船は年中無休で運航しており、11月下旬から12月にかけての初冬シーズンは特に人気があります。小牧ダムから大牧温泉の間を約1時間で往復する定期航路では、両岸の断崖絶壁に積もる白雪とエメラルドグリーンの湖面が織りなす「水墨画のような絶景」を暖房の効いた船内やデッキから鑑賞できます。湖面が風で波立たない日は、雪景色が湖面に鏡のように映り込む神秘的な水鏡が見られます。"
  },
  {
    "q": "冬の富山・庄川周辺を車でドライブする際の注意点とノーマルタイヤでの可否は？",
    "a": "11月中旬以降の庄川温泉郷や五箇山・白川郷方面へのアクセスは、ノーマルタイヤでの走行は極めて危険です。特に庄川沿いの国道156号線や山間部のトンネル出入口、橋梁部は路面凍結（ブラックアイスバーン）が発生しやすくなります。11月下旬〜4月上旬は必ずスタッドレスタイヤを装着してください。雪道運転に不安がある方は、北陸新幹線・新高岡駅から路線バスやタクシーを利用するのが安心です。"
  },
  {
    "q": "11月・12月の庄川温泉郷で楽しめる冬の富山グルメ（海の幸・山の幸）は何ですか？",
    "a": "11月は富山湾の「紅ズワイガニ漁」が最盛期を迎え、さらに11月下旬からは「氷見の寒ブリ」「新湊の寒ブリ」の宣言が出され、極上の脂が乗った寒ブリが楽しめます。庄川温泉郷では、これら富山湾の海の幸（寒ブリ刺身・ブリしゃぶ・白えび・紅ズワイガニ）に加え、庄川清流で育った名物「落ち鮎（子持ち鮎）」の塩焼きや甘露煮、富山牛のステーキ、五箇山堅豆腐など、海と山の恵みが一度に味わえる贅沢な季節です。"
  },
  {
    "q": "庄川温泉郷の泉質と美肌効果について教えてください。",
    "a": "庄川温泉郷には複数の源泉があり、主にアルカリ性単純温泉、炭酸水素塩泉、含鉄炭酸泉、硫酸塩泉などが湧出しています。アルカリ性のお湯は角質を優しく落とし肌をつるつるにするクレンジング効果があり、鳥越温泉の三楽園のように炭酸鉄泉と白湯の2種類の泉質を持つ宿では、血行促進と肌の保湿を同時に得られます。湯冷めしにくく身体の芯まで温まるため、冬の冷え性改善や疲労回復に最適です。"
  }
];

export default function ShogawaOnsenWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-toyama-shogawa-onsen-snow-cruise-crab-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-toyama-shogawa-onsen-snow-cruise-crab-stay"
        },
        "headline": "【11・12月富山・庄川温泉郷の雪見庄川峡遊覧船と冬の味覚】富山湾紅ズワイガニ・寒ブリ・白えび＆源泉美肌の宿5選",
        "description": "11月下旬から12月にかけて富山県・庄川峡は、両岸の断崖絶壁が白銀の雪化粧をまとい、水墨画のような幽玄の冬景色が広がります。庄川峡遊覧船（小牧ダム〜大牧）から望む雪景色と湖面の水鏡、開湯以来湯治客を癒やし続ける庄川清流温泉・鳥越温泉のにごり湯や炭酸泉、11月に本格シーズンを迎える富山湾の紅ズワイガニ、氷見・新湊直送の脂が乗った極上寒ブリの刺身とブリしゃぶ、宝石のような白えびのかき揚げ、富山牛のサーロインを堪能する名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T04:00:00+09:00",
        "dateModified": "2026-09-28T04:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 温泉・冬旅取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-toyama-shogawa-onsen-snow-cruise-crab-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "富山・庄川温泉郷 冬の雪見峡谷と冬の味覚の宿",
            "item": "https://croud-travel.com/winter-toyama-shogawa-onsen-snow-cruise-crab-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-toyama-shogawa-onsen-snow-cruise-crab-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "庄川温泉郷の11月・12月の気温や気候、初雪の時期はいつ頃ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "庄川温泉郷（富山県砺波市）の11月上旬から中旬は紅葉の終盤から晩秋の気候で、最高気温は12〜16℃、朝晩は5〜8℃前後まで下がります。11月下旬になると山沿いから初雪が降り始め、12月に入ると最高気温も5〜8℃、最低気温は氷点下近くまで冷え込み、庄川峡周辺にも本格的な積雪が見られます。厚手のダウンコート、手袋、マフラー、滑り止め付きの防寒ブーツを必ず準備してください。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の庄川峡遊覧船（大牧温泉コース）は11月・12月も運航していますか？見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "庄川峡遊覧船は年中無休で運航しており、11月下旬から12月にかけての初冬シーズンは特に人気があります。小牧ダムから大牧温泉の間を約1時間で往復する定期航路では、両岸の断崖絶壁に積もる白雪とエメラルドグリーンの湖面が織りなす「水墨画のような絶景」を暖房の効いた船内やデッキから鑑賞できます。湖面が風で波立たない日は、雪景色が湖面に鏡のように映り込む神秘的な水鏡が見られます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の富山・庄川周辺を車でドライブする際の注意点とノーマルタイヤでの可否は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月中旬以降の庄川温泉郷や五箇山・白川郷方面へのアクセスは、ノーマルタイヤでの走行は極めて危険です。特に庄川沿いの国道156号線や山間部のトンネル出入口、橋梁部は路面凍結（ブラックアイスバーン）が発生しやすくなります。11月下旬〜4月上旬は必ずスタッドレスタイヤを装着してください。雪道運転に不安がある方は、北陸新幹線・新高岡駅から路線バスやタクシーを利用するのが安心です。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の庄川温泉郷で楽しめる冬の富山グルメ（海の幸・山の幸）は何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月は富山湾の「紅ズワイガニ漁」が最盛期を迎え、さらに11月下旬からは「氷見の寒ブリ」「新湊の寒ブリ」の宣言が出され、極上の脂が乗った寒ブリが楽しめます。庄川温泉郷では、これら富山湾の海の幸（寒ブリ刺身・ブリしゃぶ・白えび・紅ズワイガニ）に加え、庄川清流で育った名物「落ち鮎（子持ち鮎）」の塩焼きや甘露煮、富山牛のステーキ、五箇山堅豆腐など、海と山の恵みが一度に味わえる贅沢な季節です。"
            }
          },
          {
            "@type": "Question",
            "name": "庄川温泉郷の泉質と美肌効果について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "庄川温泉郷には複数の源泉があり、主にアルカリ性単純温泉、炭酸水素塩泉、含鉄炭酸泉、硫酸塩泉などが湧出しています。アルカリ性のお湯は角質を優しく落とし肌をつるつるにするクレンジング効果があり、鳥越温泉の三楽園のように炭酸鉄泉と白湯の2種類の泉質を持つ宿では、血行促進と肌の保湿を同時に得られます。湯冷めしにくく身体の芯まで温まるため、冬の冷え性改善や疲労回復に最適です。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "人肌の宿　川金",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10937/10937.jpg",
              rating: 4.80,
              reviews: 67,
              price: "¥15,400〜",
              access: "北陸自動車道 砺波ＩＣより約１０分　ＪＲ城端線：砺波駅より送迎サービスあり(事前予約制)",
              special: "庄川の鮎や、北陸の山海の幸を使った手づくり会席料理と心安らぐ宿泊でおもてなし致します。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10937%2F10937.html",
              story: "庄川の清らかな流れを眼下に望み、創業明治初期から文人墨客に愛されてきた名門割烹旅館「人肌の宿 川金」。庄川名産の鮎料理で名高く、初冬には子持ち鮎の甘露煮や塩焼きに加え、富山湾から届く獲れたての紅ズワイガニや新湊・氷見の寒ブリを贅沢に盛り込んだ極上の冬会席が供されます。宿の代名詞でもある「人肌の湯」は、創業以来絶えることなく注がれる天然温泉。ほのかな硫黄の香りと肌を優しく包み込む柔らかな泉質が、旅の冷えた身体を芯からじんわりと温めほぐします。",
              roomTip: "清流庄川を望む和洋室または離れ客室。窓の外に広がる庄川の静かな水面と雪化粧した山肌を眺めながら、静謐なプライベート時間を心ゆくまで堪能できます。",
              gourmetTip: "名物「鮎のうるか和え」や炭火でじっくり焼き上げた冬の川魚料理、富山湾直送の寒ブリの薄造りとブリしゃぶ鍋、富山牛の陶板ステーキ。地元の銘酒「立山」「三笑楽」とのペアリングが絶品です。",
              highlights: [
                "明治創業の歴史を紡ぐ割烹旅館＆庄川名物子持ち鮎と富山湾寒ブリ・紅ズワイガニ",
                "絶妙な温度でじんわり温まる名湯「人肌の湯」＆雪景色を望む庄川清流沿いの静寂",
                "富山の銘酒「立山」「三笑楽」とともに味わう冬の日本海の至高の幸"
              ]
            },
            {
              id: 2,
              name: "庄川温泉郷　鳥越の宿　三楽園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12602/12602.jpg",
              rating: 4.58,
              reviews: 831,
              price: "¥15,279〜",
              access: "お車：北陸自動車道 砺波ICより156号線岐阜方面へ8km(15分) 　JR：城端線・砺波駅下車（送迎あり・事前予約制）",
              special: "美肌の湯＆極上エステで女性に大人気！富山の海の幸も堪能！！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12602%2F12602.html",
              story: "全国的にも極めて珍しい「白湯（炭酸水素塩・塩化物泉）」と「赤茶色の炭酸鉄泉（含鉄・ナトリウム・塩化物泉）」という、色も効能も全く異なる2つの自家源泉を同一館内で楽しめる奇跡の名宿「庄川温泉郷 鳥越の宿 三楽園」。世界的にも注目される天然温泉泥を用いた「ファンゴセラピー」を日本でいち早く導入した温泉宿としても知られます。初冬の冷え込む季節、ミネラル豊富な泥パックと炭酸泉の相乗効果で、身体の芯から温まり肌が驚くほど滑らかに生まれ変わる極上のエステ湯治を体験できます。",
              roomTip: "庄川峡の自然をパノラマで望む露天風呂付き客室「風の音」または「水の音」。お部屋にいながらにして庄川のせせらぎと初雪の渓谷美を独り占めできます。",
              gourmetTip: "富山湾の海の幸と砺波平野の豊かな里の恵みを織り交ぜた創作会席料理。富山湾の宝石「白えび」のお造りや天ぷら、解禁直後の富山産紅ズワイガニの甲羅焼き、極上富山牛のロースト。",
              highlights: [
                "白湯と赤茶色炭酸鉄泉の異なる2種自家源泉＆日本初の天然温泉泥ファンゴセラピー",
                "庄川峡の絶景を独占する露天風呂付き客室＆富山湾の白えびと紅ズワイガニ創作会席",
                "初冬の冷気の中で湯けむりが立ち上る渓谷露天風呂と肌を潤す泥パック体験"
              ]
            },
            {
              id: 3,
              name: "庄川温泉風流味道座敷　ゆめつづり",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52137/52137.jpg",
              rating: 4.51,
              reviews: 346,
              price: "¥13,310〜",
              access: "北陸新幹線　新高岡駅乗換　ＪＲ城端線　砺波駅より車で１５分   砺波ⅠCより車で１５分",
              special: "庄川峡から広がる散居村にひっそりと佇む温泉宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52137%2F52137.html",
              story: "数寄屋造りの風雅な佇まいと、女性目線のおもてなしが細やかに行き届いた庄川の隠れ宿「庄川温泉風流味道座敷 ゆめつづり」。館内に一歩足を踏み入れると、季節の野花とほのかなお香の香りが迎えてくれます。四季折々の風情を映す日本庭園に面した大浴場や、檜と岩が香る露天風呂「木漏れ日の湯」では、初冬の静かな雪見風呂を満喫。湯上がりには冷たい富山名水や黒豆茶のサービスがあり、至れり尽くせりの寛ぎを満喫できます。",
              roomTip: "庭園露天風呂付きスイートまたはゆったりとした和洋室。檜の香りに包まれた専用露天風呂から、雪吊りが施された風雅な庭園の冬景色を好きな時間に眺められます。",
              gourmetTip: "料理長が一品一品に趣向を凝らす「味道座敷」の本格懐石。冬の富山湾から揚がる脂の乗った寒ブリの雪見鍋や、新湊港の紅ズワイガニ、名水で育った庄川鮎、氷見うどんなど五感で味わう美食が並びます。",
              highlights: [
                "数寄屋造りの風雅な数寄屋建築＆日本庭園を望む檜露天風呂と富山湾味道会席",
                "女性目線の行き届いた細やかなサービス＆旬の寒ブリ雪見鍋と新湊紅ズワイガニ",
                "館内に漂う白檀のお香と四季の野花に癒やされる大人のリトリートステイ"
              ]
            },
            {
              id: 4,
              name: "庄川温泉郷　美肌の湯　となみ野庄川荘一萬亭（ＢＢＨホテルグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/187181/187181.jpg",
              rating: 4.09,
              reviews: 151,
              price: "¥6,500〜",
              access: "JR城端線砺波駅南口より車で15分",
              special: "世界遺産「五箇山」、加賀百万石「金沢」巡り行楽地！観光地巡りを満喫した後は、富山地酒に酔いしれる♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187181%2F187181.html",
              story: "庄川峡の壮大なパノラマを望む高台に建ち、トロトロとした肌触りの良質なアルカリ性単純温泉を心ゆくまで堪能できる「庄川温泉郷 となみ野庄川荘一萬亭」。美肌の湯として古くから親しまれるお湯は、湯上がりに肌がしっとりと潤う保湿効果の高さが自慢です。開放的な大浴場と渓流を眼下に見下ろす露天風呂からは、初冬の澄み切った冷気の中で雪化粧した山並みと庄川のエメラルドグリーンの水面が織りなす絶景を一望できます。",
              roomTip: "庄川ビューのスタンダード和室またはリニューアルツインルーム。ワイドな窓から庄川峡の渓谷美を見下ろすことができ、朝夕で表情を変える冬の光景をゆったり鑑賞できます。",
              gourmetTip: "富山の山海の幸をふんだんに取り入れた季節の和食会席。富山湾の新鮮なお刺身盛り合わせや旬の蟹料理、富山名産の白えびかき揚げ、熱々の郷土鍋など、気兼ねなく楽しめる料理が揃います。",
              highlights: [
                "庄川峡のパノラマを見下ろす展望露天風呂＆トロトロのアルカリ性単純美肌温泉",
                "広々とした客室から望む初冬の庄川峡グラデーション＆富山郷土の味覚を気兼ねなく満喫",
                "コストパフォーマンス抜群の温泉旅行＆北陸観光・五箇山周遊の快適拠点"
              ]
            },
            {
              id: 5,
              name: "五箇山温泉　赤尾館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14958/14958.jpg",
              rating: 4.00,
              reviews: 188,
              price: "¥11,000〜",
              access: "新高岡駅より世界遺産バス　白川郷五箇山行きで１時間２０分　西赤尾バス停前／五箇山ＩＣより車で５分",
              special: "世界遺産五箇山白川郷の合掌造り集落に近く,郷土料理が自慢の天然温泉の宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14958%2F14958.html",
              story: "白川郷と並ぶ世界遺産「五箇山合掌造り集落（菅沼・相倉）」へのアクセス拠点に位置し、庄川の上流に佇む歴史ある名宿「五箇山温泉 赤尾館」。開湯以来、険しい山々に囲まれた秘境の湯として旅人を温めてきた天然温泉は、硫酸塩・塩化物泉のじんわり温まる良泉です。囲炉裏端の温もりが心地よい館内では、雪深い五箇山で育まれた伝統の「五箇山豆腐」や山菜、庄川源流の清流イワナの塩焼き、飛騨牛など、素朴でありながら滋味深い山の恵みを存分に味わえます。",
              roomTip: "合掌造りの意匠を取り入れた和室または清流側和洋室。窓の外に広がる五箇山の雄大な山々と清らかな庄川の源流を望み、都会の喧騒を完全に忘れさせてくれます。",
              gourmetTip: "五箇山名物の「堅豆腐」の刺身や田楽、炭火でじっくり香ばしく焼き上げたイワナの塩焼きと香ばしいイワナの骨酒、地元ブランド牛「飛騨牛・富山牛」の朴葉味噌焼きなど、雪国ならではの郷土料理。",
              highlights: [
                "世界遺産五箇山合掌集落近くの秘湯宿＆炭火焼きイワナ塩焼き・骨酒と五箇山堅豆腐",
                "ミネラル豊富な硫酸塩・塩化物泉の温まり湯＆飛騨牛・富山牛の香ばしい朴葉味噌焼き",
                "雪深い合掌集落の冬の静寂と素朴な温もりに包まれる昔懐かしい山里の滞在"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative w-full h-[360px] sm:h-[480px] flex items-end justify-center bg-slate-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
          alt="冬の富山庄川峡遊覧船と雪見温泉"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold">
            <Snowflake className="w-4 h-4" />
            11月・12月 冬の極上温泉特集｜富山・北陸
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月富山・庄川温泉郷】<br className="hidden sm:inline" />
            雪見庄川峡遊覧船と富山湾紅ズワイガニ・寒ブリ・白えびの宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            水墨画のように静まり返る庄川峡の断崖絶壁とエメラルドグリーンの水鏡。開湯以来の美肌名湯に身を委ね、旬を迎えた富山湾の紅ズワイガニ、寒ブリ、白えびを堪能する大人の冬旅。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Ship className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Winter Heritage Cruise & Onsen</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の庄川峡が魅せる水墨画の世界と、小牧ダム遊覧船の情趣
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              富山県の南西部、飛騨高山から流れる庄川が悠久の年月をかけて削り出した「庄川峡（しょうがわきょう）」は、11月下旬を迎えると晩秋の紅葉が散り果て、両岸の険しい岩肌がうっすらと白銀の雪化粧をまとい始めます。小牧ダムから大牧温泉へと進む「庄川峡遊覧船」のデッキに立てば、冷たく澄み切った大気の中、鏡のようなエメラルドグリーンの湖面に雪山が映り込む息をのむ絶景が広がります。
            </p>
            <p>
              大正から昭和初期にかけて完成した小牧ダムによって生まれた人造湖は、かつて飛騨の山林から切り出された木材を流送する重要な拠点として栄えました。今日では、陸路が途絶え船でしか辿り着けない秘湯「大牧温泉」への唯一の交通路として、そして世界各国の旅人を魅了する絶景クルーズとして親しまれています。湖面を渡る風が静まる早朝には、粉雪が舞う渓谷全体が白と黒のモノトーンに染まり、まるで東洋の水墨画の中に迷い込んだかのような静謐な美しさに包まれます。
            </p>
            <p>
              庄川温泉郷の立地は、北陸新幹線の新高岡駅から車で約40分というアクセスの良さを誇りながら、白川郷や五箇山の世界遺産集落への玄関口でもあります。山峡の厳しい冷気で冷えた身体を、宿の温かなもてなしと湯煙が優しく解きほぐしてくれる冬のオアシスです。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Eye className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">庄川峡遊覧船の雪景色</div>
              <div className="text-xs text-slate-600">小牧ダム〜大牧温泉を結ぶ定期航路。暖房船内から眺める雪の水墨画パノラマ。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <ThermometerSun className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">希少なにごり炭酸鉄泉＆白湯</div>
              <div className="text-xs text-slate-600">身体を芯から温める炭酸鉄泉と美肌を促すアルカリ泉。日本初の温泉泥ファンゴも。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Utensils className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">富山湾三大美味＆庄川鮎</div>
              <div className="text-xs text-slate-600">獲れたて紅ズワイガニ、氷見寒ブリしゃぶ、白えび天ぷら、庄川子持ち鮎の炭火焼き。</div>
            </div>
          </div>
        </section>

        {/* Section 2: Geology & Gastronomy Science */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Thermal Science & Coastal Bounty</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                白湯と赤茶色炭酸鉄泉の地質構造と、富山湾「天然の生簀」冬の味覚サイエンス
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-teal-700" />
              <span>同一敷地で湧出する2つの異なる自家源泉とファンゴセラピーの治癒力</span>
            </h3>
            <p>
              庄川温泉郷が温泉通から絶賛される最大の理由は、その複雑な断層地質によって生み出される泉質の多様性にあります。代表格である「鳥越の宿 三楽園」では、地下深層から湧き出る「白湯（炭酸水素塩・塩化物泉）」と、地上近くの鉱床を通る「赤茶色の炭酸鉄泉（含鉄-ナトリウム-塩化物泉）」という、色も主成分も全く異なる2つの源泉を同一館内で引き分けています。
            </p>
            <p>
              赤茶色の炭酸鉄泉には、溶存遊離炭酸（CO2）と二価の鉄イオンが極めて高濃度で含まれており、皮膚毛細血管をダイレクトに拡張して血流量を数倍に高めます。冷え切った手足の抹消まで温かい血液が巡り、入浴後数時間が経過してもポカポカとした保温持続効果が実感できます。さらに、イタリア・アバノ温泉群に匹敵する天然温泉泥を用いた「ファンゴセラピー」は、ミネラルを熟成させた温熱泥パックが関節痛や筋肉のコリを和らげ、老廃物の排出を強力に促進します。
            </p>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 pt-2">
              <Utensils className="w-4 h-4 text-teal-700" />
              <span>海底谷「あいがめ」が生む紅ズワイガニの甘みと、初冬の寒ブリ・白えびの贅沢</span>
            </h3>
            <p>
              庄川温泉郷は山間の秘境でありながら、富山湾沿岸の新湊漁港や氷見漁港まで車で約40分という距離に位置します。富山湾は岸からわずか数キロで水深数百メートルから1,000メートルに達する急峻な海底谷「あいがめ」を持ち、立山連峰から注ぐ冷涼でミネラル豊富な雪解け水が満ちる「天然の生簀（いけす）」です。
            </p>
            <p>
              9月に解禁され11月から12月に最高潮を迎える富山湾特産の「紅ズワイガニ」は、水深1,000mの冷水塊で育つため、アミノ酸（グリシンやアラニン）の含有量が高く、本ズワイガニを凌ぐほどの強い甘みとジューシーな肉汁を誇ります。さらに11月下旬には「氷見の寒ブリ」の宣言が出され、日本海の荒波に揉まれて脂質が乗り切った背肉の刺身や、サッと昆布出汁にくぐらせる「ブリしゃぶ」が食卓を彩ります。透明に輝く白えびの軍艦巻きや天ぷら、そして庄川の清流で秋に産卵を控えて脂を蓄えた「子持ち落ち鮎」の塩焼きまで、北陸随一の美食三昧が約束されます。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Recommended Ryokan & Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              庄川温泉郷・冬の滞在を彩る厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              楽天トラベル公式APIより最新の宿泊プラン・評価情報を取得。11月・12月の冬旅行に心からおすすめできる宿を徹底比較。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div 
                key={h.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Title & Rating */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-teal-800 text-white text-xs font-bold">
                          厳選第{h.id}位
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                          <Star className="w-4 h-4 fill-current" />
                          <span>{h.rating}</span>
                          <span className="text-slate-400 font-normal text-xs">({h.reviews}件)</span>
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-teal-800 transition">
                        <a href={h.url} target="_blank" rel="noopener noreferrer">
                          {h.name}
                        </a>
                      </h3>
                    </div>
                    <div className="text-right flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center">
                      <span className="text-xs text-slate-500">1名あたり参考料金（税込）</span>
                      <span className="text-2xl font-black text-amber-600">{h.price}</span>
                    </div>
                  </div>

                  {/* Image & Story Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-5 relative h-60 sm:h-72 rounded-2xl overflow-hidden bg-slate-100">
                      <Image
                        src={h.img}
                        alt={h.name}
                        fill
                        className="object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {h.story}
                      </p>
                      <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                          <Utensils className="w-4 h-4 text-amber-700" />
                          <span>冬の絶品料理のこだわり</span>
                        </div>
                        <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/60 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-teal-900">
                          <Landmark className="w-4 h-4 text-teal-800" />
                          <span>おすすめ客室・眺望のポイント</span>
                        </div>
                        <p className="text-xs sm:text-sm text-teal-950 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      この宿の注目ポイント
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {h.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Access & Booking Button */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-start gap-2 text-xs text-slate-600 max-w-xl">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-800 to-teal-900 hover:from-teal-900 hover:to-slate-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
                    >
                      <span>楽天トラベルでプラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">1泊2日 満喫ルート</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                庄川温泉郷＆庄川峡雪見遊覧船と五箇山合掌集落を巡るモデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs">1</span>
                <span>1日目：新高岡駅 〜 庄川水記念公園 〜 庄川温泉郷チェックイン＆冬の味覚懐石</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                北陸新幹線・新高岡駅よりレンタカーまたは路線バスで出発。庄川水記念公園に立ち寄り、庄川ウッドプラザで名物のゆずソフトや足湯を体験。午後は早めに庄川温泉の宿へチェックイン。白湯やにごり炭酸鉄泉の露天風呂で温まり、夕食には富山湾の紅ズワイガニや新湊の寒ブリしゃぶ、香ばしい庄川鮎の炭火焼きを地酒立山とともに堪能。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs">2</span>
                <span>2日目：庄川峡雪見遊覧船クルーズ 〜 世界遺産五箇山菅沼合掌集落 〜 新湊きっときと市場</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                宿をチェックアウト後、小牧ダム船着場へ。庄川峡遊覧船に乗り込み、水墨画のような渓谷美と雪景色を約1時間満喫。下船後は車で約25分の世界遺産「五箇山菅沼合掌造り集落」を散策し、伝統の堅豆腐や五箇山そばを昼食に。午後は富山湾沿いの「新湊きっときと市場」へ向かい、茹でたての紅ズワイガニや白えび、寒ブリのお土産を購入して帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Climate & Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Travel Advisory</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の庄川温泉郷 冬旅の注意点と服装・交通アクセス
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-teal-800" />
                気温と防寒対策
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月上旬から中旬は朝晩の冷え込みが厳しくなり、11月下旬からは雪が舞い始めます。12月は日中でも5℃を下回り、朝晩は氷点下に達します。庄川峡遊覧船のデッキは川風が非常に冷たいため、防風性の高いダウンジャケット、耳まで覆えるニット帽、手袋、マフラーが欠かせません。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-teal-800" />
                雪道運転とスタッドレスタイヤ
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月下旬以降にレンタカーや自家用車で訪れる場合は、スタッドレスタイヤの装着が必須です。特に庄川沿いの国道156号線や五箇山方面は路面凍結（ブラックアイスバーン）が頻発します。急発進・急ブレーキを避け、車間距離を十分に確保してください。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                庄川温泉郷冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Related Winter Features & Hot Springs</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい北陸・甲信越の冬名湯＆蟹・寒ブリ特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の初雪や雪景色、富山湾・日本海の極上海の幸を味わう人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-toyama-himi-onsen-kanburi-tateyama-himi-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">富山・氷見温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">富山湾越し立山連峰雪景色と氷見寒ブリ・氷見牛の宿</h3>
            </Link>
            <Link 
              href="/winter-toyama-unazuki-onsen-kurobe-snow-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">富山・宇奈月温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">黒部峡谷雪景色と日本一の透明度美肌温泉・富山湾の幸の宿</h3>
            </Link>
            <Link 
              href="/winter-fukui-mikuni-onsen-echizen-crab-tojinbo-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">福井・越前三国温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">解禁越前がにと東尋坊冬絶景・日本海パノラマ露天の宿</h3>
            </Link>
            <Link 
              href="/winter-kanazawa-kenrokuen-yukizuri-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">石川・金沢</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">兼六園の雪吊りと金沢の冬味覚・加能蟹と寒ブリ会席の宿</h3>
            </Link>
            <Link 
              href="/winter-shirakawago-gassho-snow-illumination-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">岐阜・白川郷</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">世界遺産白川郷の雪景色ライトアップと飛騨牛会席の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">全国の厳選温泉・旬旅特集まとめを見る</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
