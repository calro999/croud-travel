import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月熱海温泉】インフィニティ温泉と極上金目鯛姿煮！名宿5選',
  description: '11月から12月にかけて澄み切った冬の夜空に大輪の花火が咲き誇る伝統の「熱海海上花火大会」と、都心から新幹線で最速35分の名湯「熱海温泉」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '熱海温泉 宿泊, 熱海 11月 12月, 熱海後楽園ホテル, 古屋旅館, ホテルニューアカオ, 熱海パールスターホテル, 秀花園湯の花膳, 熱海海上花火大会 冬, インフィニティ露天風呂, 金目鯛姿煮, 熱海 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay/",
  },
  openGraph: {
    title: '【11・12月熱海温泉】インフィニティ温泉と極上金目鯛姿煮！名宿5選',
    description: '11月から12月にかけて澄み切った冬の夜空に大輪の花火が咲き誇る伝統の「熱海海上花火大会」と、都心から新幹線で最速35分の名湯「熱海温泉」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月熱海温泉の冬花火と相模湾絶景露天】澄み渡る夜空の初冬海上花火・インフィニティ温泉と極上金目鯛姿煮＆伊豆美味会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月熱海温泉の冬花火と相模湾絶景露天】澄み渡る夜空の初冬海上花火・インフィニティ温泉と極上金目鯛姿煮＆伊豆美味会席の宿5選",
    description: "11月から12月にかけて澄み切った冬の夜空に大輪の花火が咲き誇る伝統の「熱海海上花火大会」と、都心から新幹線で最速35分の名湯「熱海温泉」。すり鉢状の熱海湾に響き渡る花火の轟音を客室や露天風呂から間近に体感できる贅沢なロケーション。相模湾を一望する絶景インフィニティ露天風呂、徳川家康公も愛した名湯、脂の乗った伊豆名物「金目鯛の姿煮」や新鮮な鮑・伊勢海老会席を満喫する厳選名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "熱海海上花火大会は11月・12月にも開催されますか？冬の花火の見どころは？",
    "a": "はい、熱海海上花火大会は年間を通じて開催されており、例年11月・12月にも冬期花火大会が複数回開催されます。冬の花火は、夏場に比べて大気中の水蒸気が少なく空気が澄み渡っているため、煙が滞留せず、赤・青・緑・金などの光の発色が年間で最も鮮明に輝くのが最大の特徴です。さらに熱海湾は三方を山に囲まれた「すり鉢状」の天然のスタジアム地形をしているため、海上で打ち上げられる花火の轟音が山に跳ね返り、まるで巨大なコンサートホールのような重低音サラウンドの迫力を体感できます。"
  },
  {
    "q": "11月・12月の熱海の気候は？東京と比べて暖かいですか？",
    "a": "熱海市は相模湾の黒潮の影響を受け、背後に山を背負っているため、冬でも非常に温暖な海洋性気候に恵まれています。東京や横浜と比べても平均気温が2℃〜3℃高く、雪が積もることは極めて稀です。11月の日中は16℃〜18℃前後とポカポカと過ごしやすく、12月でも日中は12℃〜14℃程度まで上がります。ただし、夜間の花火大会観覧や海沿いの露天風呂では海風によって体感温度が下がりますので、風を通さない厚手のコートやストール、マフラーをご準備ください。"
  },
  {
    "q": "熱海温泉の泉質と歴史について教えてください。",
    "a": "熱海温泉は開湯から約1,500年の歴史を誇り、古くは徳川家康公が関ヶ原の戦いの直前に湯治に訪れ、その効能に感服して江戸城まで温泉を運ばせた「御汲湯（おくみゆ）」の伝統で知られます。主な泉質は「弱アルカリ性高温泉（ナトリウム・カルシウム-塩化物・硫酸塩温泉）。」で、豊富な塩分が肌をベールのように包み込むため、入浴後も熱が逃げにくく、湯冷めしにくい抜群の保温効果があります。また肌あたりが柔らかく、美肌効果と疲労回復効果を兼ね備えています。"
  },
  {
    "q": "伊豆・熱海名物『金目鯛の姿煮』の美味しさの秘密は？",
    "a": "伊豆近海（相模湾・駿河湾・伊豆諸島沖）で獲れる「地金目鯛」は、深海で良質な餌を食べて育つため、初冬から真冬にかけて最も上質な脂をたっぷりと蓄えます。熱海の名旅館では、この金目鯛を一尾丸ごと、酒・醤油・味醂・生姜・ざらめなどを合わせた秘伝の濃厚な煮汁で強火で一気に煮上げます。ふっくらとした肉厚の白身に濃厚なタレが絡み合い、皮のゼラチン質の甘みと相まって、ご飯にも地酒にも最高に合う冬の極上料理となります。"
  },
  {
    "q": "東京から熱海温泉へのアクセス方法は？新幹線での所要時間は？",
    "a": "熱海温泉は首都圏からのアクセスが抜群に優れています。東京駅から東海道新幹線「ひかり」で約35分、「こだま」でも約45分でJR熱海駅に直通します。また、特急「踊り子」「サフィール踊り子」を利用すれば乗り換えなしでゆったりと車窓の海景色を楽しめます。お車の場合は、東名高速道路・小田原厚木道路から国道135号線を経由して約1時間30分〜2時間程度でアクセス可能です。"
  }
];

export default function AtamiOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay#article",
        "headline": "【11・12月熱海温泉の冬花火と相模湾絶景露天】澄み渡る夜空の初冬海上花火・インフィニティ温泉と極上金目鯛姿煮＆伊豆美味会席の宿5選",
        "description": "11月から12月にかけて澄み切った冬の夜空に大輪の花火が咲き誇る伝統の「熱海海上花火大会」と、都心から新幹線で最速35分の名湯「熱海温泉」。すり鉢状の熱海湾に響き渡る花火の轟音を客室や露天風呂から間近に体感できる贅沢なロケーション。相模湾を一望する絶景インフィニティ露天風呂、徳川家康公も愛した名湯、脂の乗った伊豆名物「金目鯛の姿煮」や新鮮な鮑・伊勢海老会席を満喫する厳選名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.pages.dev"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "熱海海上花火大会は11月・12月にも開催されますか？冬の花火の見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、熱海海上花火大会は年間を通じて開催されており、例年11月・12月にも冬期花火大会が複数回開催されます。冬の花火は、夏場に比べて大気中の水蒸気が少なく空気が澄み渡っているため、煙が滞留せず、赤・青・緑・金などの光の発色が年間で最も鮮明に輝くのが最大の特徴です。さらに熱海湾は三方を山に囲まれた「すり鉢状」の天然のスタジアム地形をしているため、海上で打ち上げられる花火の轟音が山に跳ね返り、まるで巨大なコンサートホールのような重低音サラウンドの迫力を体感できます。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の熱海の気候は？東京と比べて暖かいですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "熱海市は相模湾の黒潮の影響を受け、背後に山を背負っているため、冬でも非常に温暖な海洋性気候に恵まれています。東京や横浜と比べても平均気温が2℃〜3℃高く、雪が積もることは極めて稀です。11月の日中は16℃〜18℃前後とポカポカと過ごしやすく、12月でも日中は12℃〜14℃程度まで上がります。ただし、夜間の花火大会観覧や海沿いの露天風呂では海風によって体感温度が下がりますので、風を通さない厚手のコートやストール、マフラーをご準備ください。"
            }
          },
          {
            "@type": "Question",
            "name": "熱海温泉の泉質と歴史について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "熱海温泉は開湯から約1,500年の歴史を誇り、古くは徳川家康公が関ヶ原の戦いの直前に湯治に訪れ、その効能に感服して江戸城まで温泉を運ばせた「御汲湯（おくみゆ）」の伝統で知られます。主な泉質は「弱アルカリ性高温泉（ナトリウム・カルシウム-塩化物・硫酸塩温泉）。」で、豊富な塩分が肌をベールのように包み込むため、入浴後も熱が逃げにくく、湯冷めしにくい抜群の保温効果があります。また肌あたりが柔らかく、美肌効果と疲労回復効果を兼ね備えています。"
            }
          },
          {
            "@type": "Question",
            "name": "伊豆・熱海名物『金目鯛の姿煮』の美味しさの秘密は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "伊豆近海（相模湾・駿河湾・伊豆諸島沖）で獲れる「地金目鯛」は、深海で良質な餌を食べて育つため、初冬から真冬にかけて最も上質な脂をたっぷりと蓄えます。熱海の名旅館では、この金目鯛を一尾丸ごと、酒・醤油・味醂・生姜・ざらめなどを合わせた秘伝の濃厚な煮汁で強火で一気に煮上げます。ふっくらとした肉厚の白身に濃厚なタレが絡み合い、皮のゼラチン質の甘みと相まって、ご飯にも地酒にも最高に合う冬の極上料理となります。"
            }
          },
          {
            "@type": "Question",
            "name": "東京から熱海温泉へのアクセス方法は？新幹線での所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "熱海温泉は首都圏からのアクセスが抜群に優れています。東京駅から東海道新幹線「ひかり」で約35分、「こだま」でも約45分でJR熱海駅に直通します。また、特急「踊り子」「サフィール踊り子」を利用すれば乗り換えなしでゆったりと車窓の海景色を楽しめます。お車の場合は、東名高速道路・小田原厚木道路から国道135号線を経由して約1時間30分〜2時間程度でアクセス可能です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "熱海温泉　熱海後楽園ホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1656%2F1656.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "熱海温泉　古屋旅館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16668%2F16668.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "ホテルニューアカオ",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5417%2F5417.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "熱海パールスターホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181405%2F181405.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "熱海温泉　秀花園湯の花膳",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7666%2F7666.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "熱海温泉　熱海後楽園ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1656/1656.jpg",
              rating: 4.41,
              reviews: 3173,
              price: "¥9,790〜",
              access: "東京から新幹線で50分！熱海駅よりタクシーで約10分。送迎バス　9:40～19:00まで40分毎",
              special: "熱海の夜景と相模灘を眼前に望める絶好のロケーション！源泉を使用した大展望風呂で、ゆっくりと温泉三昧。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1656%2F1656.html",
              story: "熱海港の最先端、相模湾を独り占めする特等席に聳える一大リゾート「熱海後楽園ホテル」。海と街の煌めく夜景を眼下に収める「タワー館」と、洗練されたリゾート空間「AQUA SQUARE」から構成されます。敷地内から湧き出る豊富な自家源泉を引き込んだ大浴場「海望の湯」や、国内最大級の露天立ち湯を備えた併設の日帰り温泉施設「オーシャンスパ Fuua（フーア）」からは、水平線と一体になるような圧倒的な開放感を味わえます。熱海海上花火大会の打ち上げ場所に極めて近く、客室バルコニーから見上げる大輪の花火は息をのむ大迫力です。",
              roomTip: "「タワー館」のエクセレンシィフロアまたはオーシャンビュー和洋室。遮るもののない相模湾のパノラマと、熱海市街の美しい夜景を静かに鑑賞できます。",
              gourmetTip: "伊豆の山海の幸をふんだんに取り入れた豪華和洋中ブッフェまたは割烹会席。脂の乗った金目鯛の煮付けや揚げたて天ぷら、静岡県産牛のローストなど、上質な味覚が勢揃い。",
              highlights: [
                "熱海港最先端の絶景ロケーション＆海望の湯とオーシャンスパFuuaの露天立ち湯",
                "熱海海上花火の打ち上げ至近＆タワー館客室バルコニーから望む大迫力パノラマ",
                "伊豆の海鮮と静岡県産牛を味わう豪華ビュッフェ＆広大なエンタメ施設"
              ]
            },
            {
              id: 2,
              name: "熱海温泉　古屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16668/16668.jpg",
              rating: 4.86,
              reviews: 571,
              price: "¥39,380〜",
              access: "ＪＲ熱海駅からタクシーで５分。徒歩１３分。熱海サンビーチまでは徒歩３分♪",
              special: "【創業220周年】安心の全室部屋食！2026年7月新タイプの露天付き客室OPEN！源泉かけ流し温泉",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16668%2F16668.html",
              story: "文化三年（1806年）創業、熱海で二百十余年の最も古い歴史を誇る名門中の名門「熱海温泉 古屋旅館」。熱海七湯の一つに数えられる歴史的な名源泉「清左衛門の湯」を敷地内に所有し、一切の加水・加熱・循環を行わない100%源泉掛け流しで湯船へと注いでいます。樹齢二百年のヒノキ風呂や露天風呂付き客室で楽しむ湯は、肌にしっとりと吸い付くような至高の泉質。夕食はお部屋食にこだわり、全国から集まる食通を唸らせる極上の京風懐石を提供しています。",
              roomTip: "源泉掛け流し露天風呂付き和室スイート。数寄屋造りの洗練された静寂空間で、人目を気にせず名湯「清左衛門の湯」を心ゆくまで独占。",
              gourmetTip: "お部屋でゆったりといただく本格京風懐石。名物である金目鯛の煮付けは秘伝のタレでふっくらと炊き上げられ、厳選された国産黒毛和牛陶板焼きとともに至高の味を奏でます。",
              highlights: [
                "文化三年創業・熱海七湯「清左衛門の湯」を100%掛け流しで守る格式高い老舗",
                "全室お部屋食の徹底＆秘伝のタレで炊き上げる金目鯛姿煮と本格京風懐石",
                "樹齢二百年のヒノキ風呂と露天風呂付き客室で過ごす静寂の大人ステイ"
              ]
            },
            {
              id: 3,
              name: "ホテルニューアカオ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5417/5417.jpg",
              rating: 4.28,
              reviews: 3478,
              price: "¥13,900〜",
              access: "宿泊棟によりフロントが異なります。【ホライゾン】⇒ホライゾン・ウイング【オーシャン】⇒オーシャン・ウイング",
              special: "全352室がオーシャンビュー 海上リゾートで唯一無二の絶景体験を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5417%2F5417.html",
              story: "熱海屈指の景勝地・錦ヶ浦の断崖絶壁にダイナミックに建ち、昭和モダン建築の華麗な美しさを今に伝える伝説の温泉ホテル「ホテルニューアカオ」。全客室が相模湾に面したオーシャンフロント設計。波打ち際にせり出すように作られた露天風呂「波音（なみね）」では、打ち寄せる白波の飛沫と潮騒を間近に感じながら湯浴みを楽しめます。さらに海抜数十メートルの高台に位置する「スパリウムニシキ」からは、初冬の澄んだ相模湾と初島、遠く伊豆大島まで見渡すパノラマビューが広がります。",
              roomTip: "オーシャンフロント客室。窓いっぱいに広がる初冬の碧い海と、水平線から昇る朝日のグラデーションが旅の感動を最高潮に高めます。",
              gourmetTip: "大迫力のシアターレストラン「メインダイニング錦」での豪華ビュッフェまたは和食会席。伊豆近海の旬魚のお刺身や金目鯛、オープンキッチンで焼き上げる牛ステーキなど彩り豊か。",
              highlights: [
                "錦ヶ浦の断崖に建つ昭和モダン建築＆波打ち際露天風呂「波音」とスパリウムニシキ",
                "全室オーシャンフロント＆大迫力のメインダイニング錦で味わう豪華ビュッフェ",
                "海と一体化する圧倒的インフィニティ温泉＆水平線から昇る初冬の朝日"
              ]
            },
            {
              id: 4,
              name: "熱海パールスターホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/181405/181405.jpg",
              rating: 4.61,
              reviews: 125,
              price: "¥28,454〜",
              access: "熱海駅より徒歩10分　タクシーで約5分　バスで約10分（お宮の松前下車/徒歩1分）",
              special: "熱海海上花火大会は6Fテラスからも海側のお部屋からも、インフィニティバスからもご覧いただけます",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181405%2F181405.html",
              story: "熱海サンビーチの目の前、かつての名門つるやホテルの跡地に誕生したラグジュアリーホテル「熱海パールスターホテル」。最上階の10階に位置する大浴場には、相模湾の水平線と水面が一体化するインフィニティ露天風呂が設けられ、湯船に浸かりながら熱海の海と空をパノラマで望むことができます。館内にはバトラーサービスや専用クラブラウンジが備わり、現代の洗練されたホスピタリティと優雅なプライベートステイを提供しています。",
              roomTip: "全室に自家源泉を引き込んだ温泉内風呂または露天風呂を完備。テラスのデイベッドで海風を感じながら過ごす時間は極上の贅沢。",
              gourmetTip: "日本料理「行庵」での本格会席、鉄板焼き、またはモダンフレンチ。伊豆近海の活鮑や伊勢海老、厳選黒毛和牛を使った一皿一皿が芸術品のような美しさ。",
              highlights: [
                "熱海サンビーチ前の天空ラグジュアリー＆最上階インフィニティ露天風呂",
                "全客室に自家源泉温泉風呂完備＆洗練されたバトラーサービスと上質空間",
                "伊豆の活鮑・伊勢海老・厳選黒毛和牛を味わう最高峰の日本料理と鉄板焼き"
              ]
            },
            {
              id: 5,
              name: "熱海温泉　秀花園湯の花膳",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7666/7666.jpg",
              rating: 4.61,
              reviews: 1450,
              price: "¥8,000〜",
              access: "JR熱海駅よりタクシー７分※熱海駅より玄関前にてスタッフがお出迎えする無料送迎バス有【要予約】",
              special: "【旅館甲子園優勝の宿】9/25(金)、28(月)～30(水)空室わずか！限定3000円クーポン有！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7666%2F7666.html",
              story: "熱海港を見下ろす絶好の高台に建ち、熱海海上花火大会の観覧スポットとして名高い純和風料理旅館「熱海温泉 秀花園 湯の花膳」。屋上に位置する展望露天風呂「月下美人」からは、日中は初島や大島を望む相模湾の大パノラマ、夜は熱海市街地の煌めく夜景が一望できます。特に冬の花火大会の日には、湯船に浸かりながら夜空いっぱいに広がる大輪の花火を見上げるという、全国でも類を見ない贅沢な体験が叶います。",
              roomTip: "海と夜景を一望する露天風呂付き客室または純和風客室。夕暮れどきに街の明かりが灯り始めるトワイライトタイムの眺望は圧巻。",
              gourmetTip: "創業以来の伝統を守るお部屋食会席。丸ごと一尾を贅沢に煮付けた特大「金目鯛の姿煮」、新鮮な海の幸のお造り、旬の素材を活かした小鉢など、料理自慢の宿ならではの味わい。",
              highlights: [
                "熱海港一望の高台屋上展望露天「月下美人」＆熱海海上花火が目の前に広がる特等席",
                "名物「金目鯛の姿煮」をお部屋食で堪能＆純和風の温もりあるおもてなし",
                "相模湾の夜景と初島の灯りを眺めながら浸かる屋上絶景露天風呂"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-cyan-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-slate-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="初冬の澄み渡る夜空に打ち上がる熱海海上花火大会と相模湾の夜景パノラマ"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 text-cyan-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-cyan-800/50">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>11月・12月限定 澄み渡る冬夜空の熱海海上花火大会と相模湾インフィニティ露天</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月熱海温泉の冬花火と相模湾絶景露天】<br className="hidden sm:inline" />
            澄み渡る夜空の初冬海上花火・インフィニティ温泉と極上金目鯛姿煮＆伊豆美味会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            都心から新幹線で最速35分。澄み切った初冬の夜空を焦がす熱海海上花火の轟音、相模湾の水平線と溶け合うインフィニティ露天風呂、脂が乗った名物「金目鯛の姿煮」と新鮮な鮑を堪能する極上ステイ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> 静岡県熱海市（JR熱海駅・熱海湾沿岸エリア）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月熱海温泉】インフィニティ温泉と極上金目鯛姿煮！名宿5選","item":"https://croud-travel.pages.dev/winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Atami Onsen Winter Splendor</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                徳川家康公も愛した名湯。澄み切った冬空に響き渡る海上花火と温暖な相模湾の情趣
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            相模湾の碧い海に面し、背後を緑豊かな山々に囲まれた静岡県「熱海温泉」。開湯から千五百年の歴史を誇り、江戸幕府を開いた徳川家康公が関ヶ原の戦いの前に逗留し、あまりの湯の良さに江戸城まで温泉を運ばせた「御汲湯（おくみゆ）」の逸話でも名高い、日本屈指の温泉リゾートです。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            熱海が一年で最も華やかかつドラマチックに輝くのが、11月から12月にかけての初冬シーズンです。昭和27年（1952年）から続く伝統の「熱海海上花火大会」は冬期にも開催され、澄み切った冬の夜空に鮮やかな大輪の花火が咲き誇ります。三方を山に囲まれたすり鉢状の熱海湾は、花火の轟音が反響してまるで巨大な屋外スタジアムのような迫力。海辺の露天風呂や客室バルコニーから見上げる光と音の饗宴は、言葉を失うほどの感動をもたらします。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            黒潮の影響を受ける熱海は、冬でも雪が降ることは極めて稀で温暖な気候。水平線と一体化するインフィニティ露天風呂に浸かり、初冬の澄んだ海風を感じながら相模湾を一望できます。夕食には、脂の乗った伊豆名物の高級魚「金目鯛の姿煮」や、目の前で踊る活鮑、伊勢海老のお造りなど、伊豆の豊かな海の幸を贅沢に味わい尽くす至福のひとときが待っています。
          </p>
          
          <div className="bg-cyan-50/70 rounded-2xl p-5 border border-cyan-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-cyan-900 tracking-wider">初冬の熱海温泉 旅のチェックポイント</span>
              <p className="text-xs sm:text-sm text-slate-700">
                東京から東海道新幹線で最速35分の快適アクセス。冬の花火大会開催日は混雑するため、海が見える客室や送迎付きプランの早期予約が鉄則です。
              </p>
            </div>
            <div className="shrink-0 bg-cyan-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
              東京から新幹線35分
            </div>
          </div>
        </section>

        {/* Section 2: Winter Fireworks & Ocean View Bath */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Winter Fireworks & Ocean Bath</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の夜空を焦がす熱海海上花火とインフィニティ露天風呂の極上体験
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            冬の熱海ならではの2大魅力。澄んだ大気と地形が生み出す圧倒的な花火の臨場感と、相模湾の海原を見渡す絶景温泉が旅人を魅了します。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">初冬の熱海海上花火</span>
                <span className="text-xs bg-cyan-100 text-cyan-800 font-bold px-2 py-0.5 rounded">澄んだ夜空</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                湿度が低く大気が澄んでいるため、発色が鮮明で煙が残らない。すり鉢状の山に反響するスタジアム級の重低音は冬こそ最高潮。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">インフィニティ露天風呂</span>
                <span className="text-xs bg-cyan-100 text-cyan-800 font-bold px-2 py-0.5 rounded">海抜ゼロ〜高台</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                相模湾の水面と空がシームレスに繋がる絶景湯船。初冬の朝日に輝く海や夜の熱海市街地の灯りを眺めながら長湯を楽しめます。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">保温性抜群の塩化物泉</span>
                <span className="text-xs bg-cyan-100 text-cyan-800 font-bold px-2 py-0.5 rounded">湯冷め知らず</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                塩分が肌の表面に皮膜を形成し、体の深部まで温まり熱を逃がさない。冬の寒風に吹かれてもポカポカが持続する美肌の名湯。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2.2: Atami Seven Springs & Tokugawa Legend */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Heritage of Atami Seven Springs</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                徳川家康が愛した名湯。「熱海七湯」の源泉散策と江戸城への御汲湯伝説
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            熱海温泉の市街地には、古くから自噴し街の歴史を支えてきた7つの代表的な源泉「熱海七湯（大湯間歇泉・清左衛門の湯・風呂の湯・小沢の湯・野中の湯・佐治郎の湯・河原湯）。」が大切に保存されています。立ち上る湯煙とともにボコボコと湧き出る源泉モニュメントを巡る散策は、熱海ならではの風情ある旅の楽しみです。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            特に慶長九年（1604年）、徳川家康公が熱海に湯治に訪れて以来、熱海の湯は幕府の御用湯となり、熱海から江戸城まで檜の湯樽に詰めて昼夜兼行で運ばせる「御汲湯（おくみゆ）」の制度が確立されました。往復約100kmの道のりをわずか15時間余りで運ばせたという熱海の湯は、数百年の時を経た今も変わらず、旅人の心と体を芯から潤し続けています。
          </p>
        </section>

        {/* Section 2.5: Three Reasons to Visit in Nov & Dec */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Seasonal Appeal</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の熱海温泉が選ばれ続ける3つの理由
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-cyan-900 text-white flex items-center justify-center text-xs font-bold">1</span>
                <h3 className="font-bold text-slate-900 text-sm">澄み切った空気で発色冴え渡る冬花火</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                夏の湿気とは異なり、冬の乾燥した大気は花火の閃光をよりシャープに魅せます。すり鉢状の山肌に轟音が反響する迫力は冬期限定の圧巻体験です。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-cyan-900 text-white flex items-center justify-center text-xs font-bold">2</span>
                <h3 className="font-bold text-slate-900 text-sm">雪知らずの温暖リゾートと絶景インフィニティ</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                黒潮の影響で冬も温暖。雪道運転の不安なく訪れられ、相模湾の水平線と一体になるインフィニティ露天風呂で初冬の朝日を独占できます。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-cyan-50/60 border border-cyan-100 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-cyan-900 text-white flex items-center justify-center text-xs font-bold">3</span>
                <h3 className="font-bold text-slate-900 text-sm">初冬に脂が乗る地金目鯛の姿煮と活鮑</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                深海で栄養を蓄えた地金目鯛は11〜12月が最高峰。老舗秘伝の甘辛ダレでふっくら炊き上げた姿煮は、熱燗とともに至福の贅沢を約束します。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: 5 Recommended Hotels */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Selected Luxury Inns</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              【11・12月】熱海温泉の冬花火と絶景を約束する厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600">
              楽天トラベルの最新APIデータに基づき、相模湾のオーシャンビュー、花火観覧の好立地、金目鯛姿煮会席、宿泊者レビュー評価で選び抜いた5軒。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row"
              >
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 shrink-0">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    第{hotel.id}選
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold drop-shadow">
                    <span className="flex items-center gap-1 bg-amber-500/90 text-slate-950 px-2.5 py-1 rounded-md">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {hotel.rating} ({hotel.reviews}件)
                    </span>
                    <span className="bg-slate-900/80 px-2.5 py-1 rounded-md text-amber-200">
                      目安 {hotel.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-cyan-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="space-y-2 pt-1 border-t border-slate-100 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-cyan-900 bg-cyan-50 px-2 py-0.5 rounded shrink-0">客室の魅力</span>
                        <span className="text-slate-600">{hotel.roomTip}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded shrink-0">冬の極上食</span>
                        <span className="text-slate-600">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      {hotel.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                      楽天トラベル公認リンク・最新宿泊プラン
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-900 hover:bg-cyan-800 text-white text-xs sm:text-sm font-bold shadow transition group w-full sm:w-auto justify-center"
                    >
                      <span>空室・宿泊プランを確認</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Winter Gourmet & Kinmedai */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Izu Winter Seafood Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                伊豆の最高峰「金目鯛の姿煮」と相模湾直送の極上海鮮会席
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            相模湾と駿河湾に抱かれた伊豆半島は、全国有数の海の幸の宝庫。中でも冬に旬を迎える「金目鯛（キンメダイ）」は、深海で蓄えた極上の脂が身全体に回り、煮付けにするとふっくらと柔らかな食感と濃厚な旨味が溢れ出します。熱海の老舗宿では、継ぎ足し使われてきた秘伝の甘辛い煮汁で一尾丸ごと姿煮にし、熱々のご飯やお酒とともに提供されます。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-cyan-50/50 border border-cyan-100 space-y-1.5">
              <h4 className="font-bold text-cyan-900 text-sm">特大金目鯛の姿煮＆伊豆地魚のお造り</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                丸ごと一尾を秘伝のタレでふっくら炊き上げた名物料理。アジやカンパチ、地魚の刺身とともに伊豆の海を味わい尽くす。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-cyan-50/50 border border-cyan-100 space-y-1.5">
              <h4 className="font-bold text-cyan-900 text-sm">活鮑の踊り焼き＆伊豆クラフトビール・地酒</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                陶板の上で柔らかく蒸し焼きにする活鮑のステーキ。静岡の清らかな湧水で醸された地酒「花の舞」や熱海ビールとのペアリング。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の熱海温泉を満喫する1泊2日王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-20 text-xs font-bold bg-cyan-100 text-cyan-900 px-3 py-1.5 rounded-lg text-center shrink-0">
                1日目 13:00
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">熱海駅到着・平和通り商店街散策＆來宮神社参拝</strong>
                東京駅から新幹線で熱海駅へ。レトロな商店街で熱海プリンや温泉まんじゅうを食べ歩き、樹齢二千年の大楠が茂る「來宮（きのみや）神社」へ参拝。
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-20 text-xs font-bold bg-cyan-100 text-cyan-900 px-3 py-1.5 rounded-lg text-center shrink-0">
                1日目 15:30
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">名宿チェックイン・相模湾インフィニティ温泉露天風呂</strong>
                宿にチェックインし、相模湾を一望する絶景露天風呂へ。夕暮れどきに刻々と表情を変える海と空のグラデーションを眺めながら長湯を楽しむ。
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-20 text-xs font-bold bg-cyan-100 text-cyan-900 px-3 py-1.5 rounded-lg text-center shrink-0">
                1日目 18:00
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">金目鯛姿煮会席＆熱海海上花火大会を特等席で観覧</strong>
                夕食に極上金目鯛の姿煮と海の幸会席を堪能。20:20から打ち上がる熱海海上花火を、客室バルコニーや海沿いの特等席から大迫力の音とともに体感。
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-20 text-xs font-bold bg-cyan-100 text-cyan-900 px-3 py-1.5 rounded-lg text-center shrink-0">
                2日目 09:30
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">熱海サンビーチ朝散策＆ACAO FORESTの絶景カフェ</strong>
                チェックアウト後、ヤシの木が揺れるサンビーチを散策。海を見下ろす丘陵庭園「ACAO FOREST」で隈研吾設計の絶景カフェ「COEDA HOUSE」に立ち寄る。
              </div>
            </div>
          </div>
        </section>

        {/* Section 5.5: Climate, Clothing & Fireworks Watching Tips */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Travel Preparation</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の気候・おすすめの服装・花火観覧＆アクセス対策
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-cyan-700" />
                <span>温暖な気候と夜の海風対策</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                熱海は冬でも温暖で、日中は12〜16℃と過ごしやすい陽気です。ただし、20:20から開催される海上花火大会の鑑賞時や海沿い・屋上露天風呂では海風が直接吹き付けるため、体感温度は5℃近くまで下がります。風を通さない防風コート、大判ストール、手袋をご用意ください。
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-700" />
                <span>花火開催日の新幹線・道路渋滞対策</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                花火大会当日は東海道新幹線や特急「踊り子」、国道135号線が混雑します。お車の方はチェックイン時刻（15:00前）より早めの到着がスムーズです。新幹線利用の方は事前に指定席を確保しておくと、帰路もストレスなく快適に移動できます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                よくある質問（FAQ）と初冬の熱海温泉旅行アドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-cyan-800 font-extrabold">Q.</span>
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
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Related Izu & Shizuoka Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい伊豆・東海の冬名湯＆オーシャンビュー特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月ならではの冬花火、イルミネーション、海鮮会席を味わい尽くす全国の名宿ガイドを多数公開中。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-shizuoka-shuzenji-late-momiji-bamboo-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">静岡・修善寺温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">修善寺温泉 遅咲き紅葉と竹林の小径・伊豆最古の名湯宿</h3>
            </Link>
            <Link 
              href="/winter-shizuoka-izukogen-granillumi-ito-onsen-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">静岡・伊豆高原＆伊東温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">伊豆高原グランイルミと伊東温泉 オーシャンビュー露天の宿</h3>
            </Link>
            <Link 
              href="/winter-kanagawa-yugawara-onsen-bungo-kaiseki-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">神奈川・湯河原温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">湯河原温泉 万葉の古湯と文豪ゆかりの隠れ家会席宿</h3>
            </Link>
            <Link 
              href="/winter-kanagawa-hakone-fuji-view-onsen-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">神奈川・箱根温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">箱根温泉 澄んだ冬空に輝く富士山絶景露天風呂の宿</h3>
            </Link>
            <Link 
              href="/winter-yamanashi-isawa-onsen-wine-koshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">山梨・石和温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">石和温泉 甲州ヌーボー解禁ワインと甲州牛ステーキ会席の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-shizuoka-atami-onsen-winter-fireworks-kinmedai-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
