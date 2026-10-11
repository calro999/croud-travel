import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Heart, ShoppingBag, Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: '老神温泉で過ごす冬の旅（11・12月）！赤城山北麓！名宿5選',
  description: '11月中旬から12月の初冬を迎えた群馬県沼田市の利根町、老神温泉（おいがみおんせん）は、赤城山と日光白根山に挟まれた片品川の深い渓谷に佇み。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '老神温泉 宿泊, 吹割の滝 旅館, 上州牛 すき焼き 宿, 上州麦豚 温泉, 手打ち十割蕎麦 沼田, 単純硫黄泉 美肌湯, 混浴露天風呂 老神, 11月 12月 群馬旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-gunma-oigami-onsen-fukiware-joshugyu-soba-stay/"
  },
  openGraph: {
    title: '老神温泉で過ごす冬の旅（11・12月）！赤城山北麓！名宿5選',
    description: '11月中旬から12月の初冬を迎えた群馬県沼田市の利根町、老神温泉（おいがみおんせん）は、赤城山と日光白根山に挟まれた片品川の深い渓谷に佇み。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-gunma-oigami-onsen-fukiware-joshugyu-soba-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '片品渓谷と初冬の老神温泉の湯煙風景'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "老神温泉で過ごす冬の旅（11・12月）！赤城山北麓・初冬の片品渓谷美と美肌単純硫黄泉・極上上州牛すき焼き＆上州麦豚・手打ち十割蕎麦を味わう名宿5選",
    description: "11月中旬から12月の初冬を迎えた群馬県沼田市の利根町、老神温泉（おいがみおんせん）は、赤城山と日光白根山に挟まれた片品川の深い渓谷に佇み、凛とした澄み渡る冷気の中に情緒ある湯煙が立ちのぼる格別の秘湯シーズンを迎えます。赤城の神（大蛇）と日光男体山の神（大百足）の神話伝説が残る歴史ある名湯は、肌あたりが柔らかくほのかな硫黄の香りが漂う単純硫黄温泉。湯船に身を沈めれば、冷えた体の芯からじんわりと温まり、湯上がりも潤いと保温が持続します。車で約10分の距離には「東洋のナイアガラ」と称される名勝・吹割の滝が静寂に包まれ、初冬の澄んだ水流と奇岩の絶景が広がります。夕食には群馬の大自然が育んだ最高峰ブランド「上州牛」のすき焼き鍋や陶板ステーキ、きめ細やかな肉質の「上州麦豚」、尾瀬山麓の清らかな伏流水で打つ風味豊かな「手打ち十割蕎麦」、大粒の名物「尾瀬花豆」など滋味豊かな上州の恵みが勢揃い。初冬の北関東で心温まる山里リトリートを約束する厳選宿5選をご紹介します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function GunmaOigamiWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-gunma-oigami-onsen-fukiware-joshugyu-soba-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev/"
        },
        "headline": "【11・12月老神温泉】赤城山北麓・初冬の片品渓谷美と美肌単純硫黄泉・極上上州牛すき焼き＆上州麦豚・手打ち十割蕎麦を味わう名宿5選",
        "description": "11月中旬から12月の初冬を迎えた群馬県沼田市の利根町、老神温泉（おいがみおんせん）は、赤城山と日光白根山に挟まれた片品川の深い渓谷に佇み、凛とした澄み渡る冷気の中に情緒ある湯煙が立ちのぼる格別の秘湯シーズンを迎えます。赤城の神（大蛇）と日光男体山の神（大百足）の神話伝説が残る歴史ある名湯は、肌あたりが柔らかくほのかな硫黄の香りが漂う単純硫黄温泉。湯船に身を沈めれば、冷えた体の芯からじんわりと温まり、湯上がりも潤いと保温が持続します。車で約10分の距離には「東洋のナイアガラ」と称される名勝・吹割の滝が静寂に包まれ、初冬の澄んだ水流と奇岩の絶景が広がります。夕食には群馬の大自然が育んだ最高峰ブランド「上州牛」のすき焼き鍋や陶板ステーキ、きめ細やかな肉質の「上州麦豚」、尾瀬山麓の清らかな伏流水で打つ風味豊かな「手打ち十割蕎麦」、大粒の名物「尾瀬花豆」など滋味豊かな上州の恵みが勢揃い。初冬の北関東で心温まる山里リトリートを約束する厳選宿5選をご紹介します。",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.pages.dev/winter-gunma-oigami-onsen-fukiware-joshugyu-soba-stay",
        "publisher": {
          "@type": "Organization",
          "name": "クラドトラベル編集部",
          "url": "https://croud-travel.pages.dev/"
        }
      },
      {
        "@type": "ItemList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Hotel",
              "name": "群馬県・老神温泉　仙郷",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/8427/8427.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8427%2F8427.html",
              "priceRange": "¥15,246〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "群馬県",
                "addressLocality": "沼田市利根町老神",
                "streetAddress": "沼田市利根町大楊2-1",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.33",
                "reviewCount": 467
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "老神温泉　吟松亭　あわしま",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/20354/20354.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20354%2F20354.html",
              "priceRange": "¥6,600〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "群馬県",
                "addressLocality": "沼田市利根町老神",
                "streetAddress": "沼田市利根町老神温泉603",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "3.97",
                "reviewCount": 897
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "老神温泉　源泉湯の宿　紫翠亭",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/16555/16555.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16555%2F16555.html",
              "priceRange": "¥12,100〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "群馬県",
                "addressLocality": "沼田市利根町老神",
                "streetAddress": "沼田市利根町老神550",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.12",
                "reviewCount": 1112
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "老神温泉　伍楼閣",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/30761/30761.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30761%2F30761.html",
              "priceRange": "¥13,450〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "群馬県",
                "addressLocality": "沼田市利根町老神",
                "streetAddress": "沼田市利根町老神602",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.35",
                "reviewCount": 838
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "老神温泉　源泉かけ流しの宿　金龍園",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/29972/29972.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29972%2F29972.html",
              "priceRange": "¥11,550〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "群馬県",
                "addressLocality": "沼田市利根町老神",
                "streetAddress": "沼田市利根町老神592",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.51",
                "reviewCount": 247
              }
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "11月・12月の老神温泉・吹割の滝の積雪状況と道路の路面凍結、ノーマルタイヤでのアクセス可否は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "老神温泉は標高約600m前後の山間部に位置するため、11月下旬以降は朝晩の気温が氷点下近くまで下がり、路面凍結（ブラックアイスバーン）が発生しやすくなります。12月に入ると初雪が降り、雪道の走行が必要となる日が増加します。そのため、11月中旬以降に車やレンタカーで訪れる際は、スタッドレスタイヤ（冬用タイヤ）の装着が不可欠です。関越自動車道の沼田ICから老神温泉へ至る国道120号線（日本ロマンチック街道）は除雪体制が整っていますが、日陰や橋の上、早朝・夜間の運転には十分ご注意ください。"
            }
          },
          {
            "@type": "Question",
            "name": "初冬の「吹割の滝（ふきわれのたき）」は見学可能？冬期閉鎖期間や歩行時の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "名勝「吹割の滝」の遊歩道は、例年12月中旬頃から翌年3月下旬まで安全確保のため冬季閉鎖（立ち入り禁止）となります。ただし、11月中旬から12月上旬の閉鎖前までは、初冬の澄み切った冷気の中で水量豊かな滝の絶景を観賞できます。冬の間は岩場や階段が凍結して滑りやすくなるため、ヒールや革靴は避け、滑りにくいスニーカーやトレッキングシューズで訪れるのが鉄則です。閉鎖期間中であっても、国道120号線沿いの展望台やドライブインからは遠景を眺めることができます。"
            }
          },
          {
            "@type": "Question",
            "name": "老神温泉の泉質と効能、そして「大蛇伝説」の由来とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "老神温泉の泉質は、主に単純硫黄温泉（アルカリ性低張性温泉）です。無色透明ながらほのかに心地よい硫黄の香りが漂い、美肌成分メタケイ酸を豊富に含みます。皮膚の古い角質を軟化させ、血行を促進して冷えた体を芯から温めてくれるため「傷治しの湯」「美肌の湯」として親しまれてきました。大蛇伝説とは、赤城山の神（大蛇）が日光男体山の神（大百足）と戦って傷を負った際、この地に湧く温泉に矢を刺して傷を癒やし、男体山の神を追い返した（追神＝おいがみ）ことから名付けられたと伝えられています。"
            }
          },
          {
            "@type": "Question",
            "name": "群馬・沼田エリアの冬の名物グルメ「上州牛」や「上州麦豚」「十割蕎麦」の特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「上州牛」は、利根川水系の清らかな水と群馬の大自然で育まれた上質な黒毛和種・交雑種の牛肉で、きめ細やかな霜降りと赤身のしっかりとした旨味、くどさのない上質な脂の甘みが特徴です。すき焼きや陶板焼きステーキでいただくのが極上です。また、「上州麦豚」は麦類を多く含む専用飼料で育てられた豚で、肉質が柔らかく白身（脂）の甘みが際立ち、しゃぶしゃぶ鍋に最適。さらに利根・尾瀬山麓はそば処としても名高く、初冬の新そば時期には香り高い手打ち十割蕎麦が楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "東京（上野・東京駅）からの公共交通機関・車でのアクセス方法と所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "電車の場合、上越新幹線で「上毛高原駅」まで約1時間15分。駅前から関越交通バス（尾瀬・鳩待峠方面行き等）に乗車し、約60分で老神温泉バス停に到着します。また、JR上越線「沼田駅」からも路線バスで約45分です。車の場合は、関越自動車道「沼田IC」から国道120号線（日光・尾瀬方面）を経由して約25分（約16km）。日光方面から金精峠を越えるルートは11月下旬以降冬季閉鎖となるため、必ず沼田IC側からアクセスしてください。"
            }
          }
        ]
      }
    ]
  };

  const faqListItems = [
  {
    "q": "11月・12月の老神温泉・吹割の滝の積雪状況と道路の路面凍結、ノーマルタイヤでのアクセス可否は？",
    "a": "老神温泉は標高約600m前後の山間部に位置するため、11月下旬以降は朝晩の気温が氷点下近くまで下がり、路面凍結（ブラックアイスバーン）が発生しやすくなります。12月に入ると初雪が降り、雪道の走行が必要となる日が増加します。そのため、11月中旬以降に車やレンタカーで訪れる際は、スタッドレスタイヤ（冬用タイヤ）の装着が不可欠です。関越自動車道の沼田ICから老神温泉へ至る国道120号線（日本ロマンチック街道）は除雪体制が整っていますが、日陰や橋の上、早朝・夜間の運転には十分ご注意ください。"
  },
  {
    "q": "初冬の「吹割の滝（ふきわれのたき）」は見学可能？冬期閉鎖期間や歩行時の注意点は？",
    "a": "名勝「吹割の滝」の遊歩道は、例年12月中旬頃から翌年3月下旬まで安全確保のため冬季閉鎖（立ち入り禁止）となります。ただし、11月中旬から12月上旬の閉鎖前までは、初冬の澄み切った冷気の中で水量豊かな滝の絶景を観賞できます。冬の間は岩場や階段が凍結して滑りやすくなるため、ヒールや革靴は避け、滑りにくいスニーカーやトレッキングシューズで訪れるのが鉄則です。閉鎖期間中であっても、国道120号線沿いの展望台やドライブインからは遠景を眺めることができます。"
  },
  {
    "q": "老神温泉の泉質と効能、そして「大蛇伝説」の由来とは？",
    "a": "老神温泉の泉質は、主に単純硫黄温泉（アルカリ性低張性温泉）です。無色透明ながらほのかに心地よい硫黄の香りが漂い、美肌成分メタケイ酸を豊富に含みます。皮膚の古い角質を軟化させ、血行を促進して冷えた体を芯から温めてくれるため「傷治しの湯」「美肌の湯」として親しまれてきました。大蛇伝説とは、赤城山の神（大蛇）が日光男体山の神（大百足）と戦って傷を負った際、この地に湧く温泉に矢を刺して傷を癒やし、男体山の神を追い返した（追神＝おいがみ）ことから名付けられたと伝えられています。"
  },
  {
    "q": "群馬・沼田エリアの冬の名物グルメ「上州牛」や「上州麦豚」「十割蕎麦」の特徴は？",
    "a": "「上州牛」は、利根川水系の清らかな水と群馬の大自然で育まれた上質な黒毛和種・交雑種の牛肉で、きめ細やかな霜降りと赤身のしっかりとした旨味、くどさのない上質な脂の甘みが特徴です。すき焼きや陶板焼きステーキでいただくのが極上です。また、「上州麦豚」は麦類を多く含む専用飼料で育てられた豚で、肉質が柔らかく白身（脂）の甘みが際立ち、しゃぶしゃぶ鍋に最適。さらに利根・尾瀬山麓はそば処としても名高く、初冬の新そば時期には香り高い手打ち十割蕎麦が楽しめます。"
  },
  {
    "q": "東京（上野・東京駅）からの公共交通機関・車でのアクセス方法と所要時間は？",
    "a": "電車の場合、上越新幹線で「上毛高原駅」まで約1時間15分。駅前から関越交通バス（尾瀬・鳩待峠方面行き等）に乗車し、約60分で老神温泉バス停に到着します。また、JR上越線「沼田駅」からも路線バスで約45分です。車の場合は、関越自動車道「沼田IC」から国道120号線（日光・尾瀬方面）を経由して約25分（約16km）。日光方面から金精峠を越えるルートは11月下旬以降冬季閉鎖となるため、必ず沼田IC側からアクセスしてください。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "群馬県・老神温泉　仙郷",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8427/8427.jpg",
              rating: 4.33,
              reviews: 467,
              price: "¥15,246〜",
              access: "関越道沼田ICより約18Km車で約20分。上毛高原駅14:00～沼田駅経由14:20の無料送迎バス有（※要問い合わせ）",
              special: "心づくしのおもてなし。奥利根の大自然に抱かれた癒しと静寂の宿。尾瀬の拠点に最適。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8427%2F8427.html",
              story: "片品川の清流を望む静寂な高台に約1万坪の広大な敷地を有し、皇族も宿泊された格式と贅沢な静寂を誇る老神随一の高級老舗宿「群馬県・老神温泉 仙郷」。宿の自慢は、美しい日本庭園越しに片品渓谷の初冬風景を望む大浴場と野趣あふれる露天風呂です。加水を行わない純粋な自家源泉は、ほのかな硫黄の香りとメタケイ酸を豊富に含み、肌にしっとりと吸い付くような美肌の湯。夕食は、料理長が一品一品丹精込めて仕立てる本格月替わり会席。見事な霜降りを誇る極上上州牛の石焼きステーキやしゃぶしゃぶをはじめ、沼田特産の朝採れ冬野菜や岩魚料理が並びます。全客室が広々とした間取りで、日常の喧騒から完全に解き放たれる極上の休息を約束します。",
              roomTip: "片品渓谷または手入れの行き届いた日本庭園を望む贅沢な和室。窓外の初冬木立と静寂を眺めながら心豊かな時間が流れます。",
              gourmetTip: "「最高級上州牛ステーキと旬彩山里会席」。柔らかく甘みのある上州牛の旨味を天然塩と本わさびでシンプルかつ贅沢に堪能。",
              highlights: [
                "1万坪の広大な敷地と日本庭園＆皇族ゆかりの格式と加水なしの極上自家源泉",
                "最高級上州牛ステーキ会席＆広々とした贅沢な間取りの渓谷ビュー和室",
                "吹割の滝まで車で10分の好立地＆静寂を愛する大人のためのプレミアム休息"
              ]
            },
            {
              id: 2,
              name: "老神温泉　吟松亭　あわしま",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/20354/20354.jpg",
              rating: 3.97,
              reviews: 897,
              price: "¥6,600〜",
              access: "ＪＲ上越線沼田駅からバスで約45分又は新幹線(上越）上毛高原駅からバスで約60分／関越自動車沼田ＩＣより約２０分",
              special: "国立公園尾瀬に近く、尾瀬散策の拠点に最適　創業以来変らぬ山賊鍋と天然温泉かけ流しの温泉を楽しむ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20354%2F20354.html",
              story: "片品川の断崖に寄り添うように建ち、客室や露天風呂から眼下に広がる壮大な渓谷美をパノラマで堪能できる絶景宿「老神温泉 吟松亭 あわしま」。宿最大の名物は、渓流のせせらぎを真下に聞きながら初冬の澄んだ空気の中で湯浴みができる源泉露天風呂「渓谷美の湯」です。単純硫黄温泉の柔らかな湯ざわりは、冷え性の改善や疲労回復に抜群の効能を発揮。夕食は上州の郷土富士を望む個室食事処で。名物の上州牛と上州麦豚の食べ比べすき焼き鍋や、職人が目の前で揚げる熱々の旬菜天ぷら、尾瀬名物の大粒花豆蜜煮など、群馬ならではの温かい手料理が膳を豊かに彩ります。",
              roomTip: "片品川渓谷を一望する渓谷ビュー和室。初冬の川霧が谷を流れる幻想的な朝の景色を部屋にいながらにして鑑賞できます。",
              gourmetTip: "「上州牛＆上州麦豚の特製すき焼き会席」。群馬が誇る二大ブランド肉の旨味を濃厚な甘辛割り下と地元産新鮮卵で味わう至福。",
              highlights: [
                "片品川断崖の絶景露天「渓谷美の湯」＆上州牛と上州麦豚の食べ比べすき焼き",
                "個室食事処で味わう揚げたて天ぷら＆片品渓谷の初冬川霧を望むパノラマ絶景",
                "コスパ抜群の料金設定＆家族旅行やグループ旅行にも選ばれる人気宿"
              ]
            },
            {
              id: 3,
              name: "老神温泉　源泉湯の宿　紫翠亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16555/16555.jpg",
              rating: 4.12,
              reviews: 1112,
              price: "¥12,100〜",
              access: "【上越新幹線】上毛高原駅・【上越線】沼田駅（両駅無料送迎有り・時間指定・要事前予約）／【関越自動車道】沼田ＩＣより20分",
              special: "「お料理が美味しい」とお客様からお喜びいただいております。お食事と温泉で癒しの旅を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16555%2F16555.html",
              story: "老神温泉の豊かな自然に包まれた約3,000坪の敷地に佇み、全室から四季折々の山景を望む和モダンな温泉リゾート「老神温泉 源泉湯の宿 紫翠亭」。宿の誇りは、2本の自家源泉をブレンドした湯量豊富な源泉かけ流しの天然温泉です。広々とした大浴場と庭園露天風呂に加え、プライベートな湯浴みを楽しめる有料・無料の貸切風呂も完備。夕食には、群馬の豊かな大地で育まれた上州牛の陶板焼きをメインに、料理長が毎朝仕入れる地元沼田産の旬野菜や清流魚を散りばめた華やかな和創作会席を提供。館内にはリラクゼーションスペースや充実したライブラリーも整い、ゆったりと心身を整える現代の湯治スタイルに最適です。",
              roomTip: "落ち着いたトーンで統一されたベッド付き和洋室。プライベート感を重視した設計で、カップルや一人旅にも大好評。",
              gourmetTip: "「上州牛陶板焼き＆季節の和創作会席」。肉の香ばしい焼き目とジューシーな旨味を、自家製の和風オニオンソースでさっぱりと。",
              highlights: [
                "3000坪の静寂リゾート＆2本の自家源泉ブレンドかけ流しと和モダン客室",
                "プライベート貸切露天風呂完備＆料理長自慢の上州牛陶板焼き和創作ディナー",
                "沼田ICから25分の快適アクセス＆カップルや一人旅に最適なリトリート環境"
              ]
            },
            {
              id: 4,
              name: "老神温泉　伍楼閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30761/30761.jpg",
              rating: 4.35,
              reviews: 838,
              price: "¥13,450〜",
              access: "上越線　沼田駅／上越新幹線　上毛高原駅／関越高速　沼田IC下車→国道　車で２５分",
              special: "内風呂２つ混浴露天２つ交代制露天１つ貸切専用露天１つ、すべて眺望の良いお風呂自慢の宿です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30761%2F30761.html",
              story: "全国でも珍しい「全国露天風呂百景」に選定された露天風呂をはじめ、趣の異なる6つの多彩な湯船めぐりが楽しめる名湯自慢の宿「老神温泉 伍楼閣」。片品川の自然美を借景にした混浴露天風呂「赤城の湯（女性専用時間あり）」や、檜の香る貸切風呂など、館内だけで贅沢な湯めぐりが完結します。無色透明でほのかに硫黄が香る源泉は完全かけ流し。夕食は、群馬県産の厳選食材をふんだんに取り入れた手作りの山里会席。上州牛の陶板焼きやすき焼き、地元契約農家から届く新鮮な根菜の炊き合わせ、尾瀬の湧水で仕込んだ手打ち十割蕎麦など、素朴ながら滋味あふれる味わいが旅情を温かく満たします。",
              roomTip: "昭和レトロな温もりを残す木造純和室。窓の外に広がる山並みと片品川のせせらぎが、昔懐かしい湯治宿の安らぎを醸し出します。",
              gourmetTip: "「上州牛すき焼きと手打ち十割蕎麦膳」。打ちたてならではのコシと香り高い十割蕎麦と、柔らかい上州牛の絶妙な調和。",
              highlights: [
                "全国露天風呂百景選定の混浴露天風呂＆趣の異なる6つの多彩な湯船めぐり",
                "打ちたて手打ち十割蕎麦と上州牛陶板焼き会席＆昭和レトロな木造数寄屋の情緒",
                "温泉ツウを唸らせる豊富な湯量＆老神温泉の伝統と大蛇伝説を感じる館内"
              ]
            },
            {
              id: 5,
              name: "老神温泉　源泉かけ流しの宿　金龍園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29972/29972.jpg",
              rating: 4.51,
              reviews: 247,
              price: "¥11,550〜",
              access: "ＪＲ上越線　沼田駅より路線バス４５分／関越道　沼田ＩＣより３０分",
              special: "2006年8月に★リニューアルオープン★全館畳敷きの木の香漂う宿。貸切露天・上州牛付ぷらんが好評！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29972%2F29972.html",
              story: "老神温泉街の奥にひっそりと佇み、毎分毎秒自噴する新鮮な源泉を一切の加水・加温・循環なしで贅沢に掛け流す本格温泉宿「老神温泉 源泉かけ流しの宿 金龍園」。温泉通から絶大な信頼を集める湯船には、淡い緑褐色を帯びた湯の花がゆらゆらと舞い、生まれたての源泉が持つ生命力を肌でダイレクトに体感できます。大浴場と岩造りの露天風呂は24時間入浴可能。夕食には、上州麦豚のしゃぶしゃぶ鍋やジューシーな上州牛の陶板焼き、地元の山菜やきのこをたっぷり使った天ぷらなど、派手さはないものの手作りの真心が込められた田舎会席が並び、心休まるアットホームな滞在が叶います。",
              roomTip: "清潔で静かな純和室。川のせせらぎと初冬の澄んだ空気の中で、余計な音のない本物の静寂に包まれてぐっすりと眠れます。",
              gourmetTip: "「上州麦豚しゃぶしゃぶ鍋と田舎ごちそう膳」。麦を食べて育った上州麦豚の脂身の上品な甘さと、地元野菜のシャキシャキ感が抜群。",
              highlights: [
                "完全100%源泉かけ流しの湯の花舞う名湯＆24時間入浴可能な本物志向の湯治宿",
                "上州麦豚しゃぶしゃぶ鍋と田舎手作り料理＆温かな家族もてなしの隠れ宿",
                "手頃な宿泊料金で味わう純度100%の源泉浴＆静かに過ごせる素朴な休息"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-900 leading-relaxed font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="bg-gradient-to-r from-orange-950 via-amber-900 to-stone-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wide border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            11月・12月初冬の群馬沼田・老神温泉＆吹割の滝特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">{metadata.title as string}</h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            片品川の深い渓谷に漂う硫黄の湯煙と、大蛇伝説が息づく開湯の歴史。
            とろける最高峰上州牛すき焼き、上州麦豚、尾瀬の湧水で打つ十割蕎麦を堪能する初冬の群馬旅へ。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月老神温泉】赤城山北麓！名宿5選","item":"https://croud-travel.pages.dev/winter-gunma-oigami-onsen-fukiware-joshugyu-soba-stay"}]}) }}
      />

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide">
            <Mountain className="w-4 h-4 text-amber-700" />
            片品渓谷の静寂美と大蛇伝説が息づく古き良き湯治郷
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            11月中旬、赤城山や上州武尊山の山頂がうっすらと雪化粧を始めると、群馬県沼田市の片品川渓谷に広がる老神温泉（おいがみおんせん）は、秋の喧騒が去り静寂に満ちた初冬の季節を迎えます。清流片品川が削り出した断崖絶壁に沿って木造の宿が建ち並び、冷涼な空気の中に立ち昇る白い湯煙と、谷底から響く川のせせらぎが旅情をかき立てます。温泉街から車でわずか10分の距離には「東洋のナイアガラ」と称賛される吹割の滝が鎮座し、初冬の透き通る水流と巨大な柱状節理の岩肌が織りなす荘厳な景観が広がります。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            老神温泉の湯は、ほのかに硫黄が薫る単純硫黄温泉。赤城山の神（大蛇）が傷を癒やしたという伝説の通り、古くから切り傷や皮膚病、神経痛を和らげる湯治場として栄えてきました。肌にしっとりと吸い付くような柔らかな湯ざわりで、入浴後も体が芯から温まり、毛穴を引き締めて潤いを保つ美肌効果に優れています。渓谷を眼下に望む露天風呂で冷たい冬風を感じながら温かい湯に身を委ねる時間は、冬旅ならではの贅沢です。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            そして冬の老神で味わいたいのが、上州の豊かな風土が育んだ極上の山里グルメ。群馬が誇る最高峰の黒毛和牛「上州牛」のすき焼きやすきしゃぶは、上品な霜降りの甘みと濃厚なコクが絶品。きめ細やかな肉質の「上州麦豚」、尾瀬山麓の清らかな伏流水で手打ちする風味豊かな「十割蕎麦」、大粒の名物「尾瀬花豆」の甘煮など、冬の寒さを吹き飛ばす温かなご馳走が揃う厳選5名宿をご案内します。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <Landmark className="w-4 h-4 text-amber-800" />
              厳選5名宿のご案内
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の片品渓谷美と上州牛・手打ち蕎麦を堪能する名宿
            </h2>
          </div>

          <div className="space-y-8">
            {hotelCards.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col"
              >
                <div className="md:w-5/12 relative aspect-16/10 md:aspect-auto overflow-hidden bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-amber-950/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>第{hotel.id}選</span>
                  </div>
                </div>

                <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="flex items-center gap-1 text-amber-800 font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        群馬県沼田市利根町（老神温泉）
                      </span>
                      <span className="flex items-center gap-1 font-bold text-amber-600">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        {hotel.rating} ({hotel.reviews}件)
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                      {hotel.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {hotel.story}
                    </p>
                  </div>

                  <div className="space-y-2 bg-stone-50 rounded-2xl p-3 text-xs text-stone-600">
                    <div className="font-semibold text-amber-950 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                      宿の注目ポイント
                    </div>
                    <ul className="space-y-1">
                      {hotel.highlights.map((h: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-stone-100 pt-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base sm:text-lg font-black text-amber-950">{hotel.price}</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs hover:shadow transition-all"
                    >
                      楽天トラベルでプランを見る
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-amber-800" />
              1泊2日モデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の沼田・老神温泉と名勝吹割の滝を満喫するドライブ周遊ルート
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-amber-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-amber-700" />
                【1日目】名勝吹割の滝観賞と老神の名湯チェックイン
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>11:30 沼田ICまたは沼田駅を出発：</strong>国道120号線（日本ロマンチック街道）を日光・尾瀬方面へドライブ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>12:15 尾瀬の手打ち十割蕎麦ランチ：</strong>利根町の蕎麦処で挽きたて・打ちたての新蕎麦と舞茸の天ぷらを堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>13:30 東洋のナイアガラ「吹割の滝」散策：</strong>轟音を響かせる吹割渓谷を歩き、澄み渡る初冬の青空と奇岩の絶景に感動。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>15:30 老神温泉の宿へチェックイン：</strong>渓谷美を眼下に望む露天風呂で、ほのかに硫黄香る名湯に浸かり体を芯から温める。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>18:30 極上上州牛すき焼きディナー：</strong>甘辛い特製割り下にくぐらせる柔らかな上州牛と、群馬の銘酒「水芭蕉」で乾杯。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-amber-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-amber-700" />
                【2日目】老神の朝市散策と沼田城下町の歴史巡り
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>07:30 朝の片品渓谷を眺める朝風呂：</strong>川霧が立ち込める渓谷美を見下ろしながら、清々しい目覚めの湯浴み。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>08:30 地元農家の新鮮朝食：</strong>地元産米と新鮮卵、上州の味噌汁、手作りの小鉢でほっとする和朝食。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>10:00 老神朝市散策：</strong>温泉街の広場で開かれる朝市（11月中開催）で、尾瀬花豆やりんご、冬野菜を購入。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>11:30 沼田城址公園＆真田ゆかりの城下町散策：</strong>河岸段丘の上に広がる真田の城下町を歩き、名物焼きまんじゅうを頬張る。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>13:00 上州麦豚とんかつランチ＆帰路へ：</strong>サクサクでジューシーな上州麦豚ロースかつを味わい、関越道沼田ICへ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-amber-800" />
              初冬の利根・沼田・おみやげ＆立ち寄り散策手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              温泉街で手に入れたい初冬の上州銘品と立ち寄りスポット
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-700" />
                尾瀬名物「花豆」の甘露煮と沼田の完熟りんご
              </h3>
              <p>
                標高の高い冷涼な高原でしか育たない大粒の「高原花豆（紫花豆）」は、老神温泉を訪れたら必ず手に入れたい名物です。ふっくらと艶やかに炊き上げられた花豆の蜜煮は、上品な甘みとほくほくとした食感がお茶請けにぴったり。また、11月の沼田エリアは「ふじ」を中心とする完熟りんごの収穫最盛期で、道沿いのりんご園での直売やりんご狩りも大人気です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-700" />
                名物「焼きまんじゅう」と群馬の地酒「水芭蕉」
              </h3>
              <p>
                蒸したふかふかの酒まんじゅうを竹串に刺し、甘じょっぱい濃厚な味噌ダレを塗って香ばしく焦がし焼きにした群馬のソウルフード「焼きまんじゅう」。焼きたての熱々を頬張ると、冬の散策で冷えた体が温まります。また、利根郡川場村の名蔵「永井酒造」が醸す純米大吟醸「水芭蕉」や「谷川岳」は、透明感あふれるキレの良さで上州牛料理との相性が抜群です。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-amber-800" />
              初冬の老神温泉・泉質と気候の徹底解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ初冬の片品渓谷の湯は「傷治しの名湯」と称えられるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-amber-700" />
              片品川の断層が生み出す毎分豊かな自噴泉と硫黄成分の働き
            </h3>
            <p>
              老神温泉は、片品川の浸食によって露出した深い断層崖に沿って多数の源泉が自然湧出しています。主泉質は単純硫黄温泉（アルカリ性低張性温泉）。無色透明でありながら、空気に触れると微かに湯の花を形成し、心地よい硫黄臭を漂わせます。微量の硫化水素イオンが毛細血管を拡張して血流を飛躍的に改善し、手足の先までしっかりと温熱を行き渡らせます。慢性皮膚疾患や神経痛、関節痛に対する効能が高く、昔から「傷の老神、目の川場」と並び称されてきた歴史がその確かな実力を物語っています。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-amber-700" />
              メタケイ酸がもたらす天然の保湿ベールと弱アルカリ性のクレンジング力
            </h3>
            <p>
              老神の湯には、天然の保湿成分として知られる「メタケイ酸」が基準値（50mg/kg）を大幅に上回る約80〜100mg/kg含まれています。弱アルカリ性のマイルドなクレンジング効果で肌の余分な古い角質を落とした後、メタケイ酸が肌の表面に潤いの保護膜を形成するため、入浴後の乾燥を防ぎ、湯上がりの肌がもっちりと吸い付くように仕上がります。初冬の乾いた冷風にさらされた素肌をケアするのに最も適したコンディションを備えています。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-amber-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の老神温泉・吹割の滝旅行 Q&A
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
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-800" />
            あわせて読みたい初冬の関東・甲信越名湯特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-chiba-yoro-keikoku-onsen-kuroyu-kazusagyu-jibier-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">千葉・養老渓谷</span>
              <p className="font-bold text-stone-800 line-clamp-2">本州一遅い初冬の紅葉と美肌黒湯天然温泉・房総かずさ和牛＆猪鍋名宿</p>
            </Link>
            <Link 
              href="/winter-nagano-togura-kamiyamada-onsen-shinshugyu-apple-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">長野・戸倉上山田</span>
              <p className="font-bold text-stone-800 line-clamp-2">善光寺精進落としの美肌硫黄泉と極上信州プレミアム牛＆完熟サンふじ名宿</p>
            </Link>
            <Link 
              href="/winter-miyagi-togatta-onsen-zao-snow-sendaigyu-kamonabe-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">宮城・遠刈田温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">初冠雪の蔵王連峰を望む開湯400年の名湯・仙台牛＆蔵王鴨せり鍋名宿</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-gunma-oigami-onsen-fukiware-joshugyu-soba-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
