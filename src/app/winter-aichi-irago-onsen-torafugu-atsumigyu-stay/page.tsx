import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Heart, ShoppingBag, Shield, Anchor
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月愛知】伊良湖天然とらふぐと新源泉「伊良湖温泉」美肌の湯・極上渥美牛＆伊良湖岬の夕日パノラマを巡る名宿5選",
  description: "11月から12月、太平洋と三河湾の黒潮が交差する愛知県渥美半島の先端・伊良湖岬（田原市）は、冬の最高級美食「伊良湖天然とらふぐ」の最盛期を迎えます。遠州灘の荒波で育った天然とらふぐは、身の引き締まりと濃厚な旨味が格別。てっさ、てっちり、香ばしいひれ酒、そして渥美半島の大自然で育まれた霜降り「渥美牛」の陶板焼きが初冬の食卓を贅沢に彩ります。さらに近年開湯した注目の新源泉「伊良湖温泉」は、塩化物泉特有の優れた保温・保湿力を誇り「美肌と冷え性改善の温まり湯」として評判。冬の澄み渡る空の下、伊良湖岬灯台や恋路ヶ浜に沈む夕日と満天の星空を眺めながら優雅に寛げる厳選5宿を詳しくご案内します。",
  keywords: '伊良湖温泉 宿泊, 伊良湖 天然とらふぐ, 渥美牛 宿, 伊良湖岬 温泉宿, 伊良湖オーシャンリゾート, 角上楼 ふぐ, 11月 12月 愛知旅行, 渥美半島 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-aichi-irago-onsen-torafugu-atsumigyu-stay/"
  },
  openGraph: {
    title: "【11・12月愛知】伊良湖天然とらふぐと新源泉「伊良湖温泉」美肌の湯・極上渥美牛＆伊良湖岬の夕日パノラマを巡る名宿5選",
    description: "11月から12月、太平洋と三河湾の黒潮が交差する愛知県渥美半島の先端・伊良湖岬（田原市）は、冬の最高級美食「伊良湖天然とらふぐ」の最盛期を迎えます。遠州灘の荒波で育った天然とらふぐは、身の引き締まりと濃厚な旨味が格別。てっさ、てっちり、香ばしいひれ酒、そして渥美半島の大自然で育まれた霜降り「渥美牛」の陶板焼きが初冬の食卓を贅沢に彩ります。さらに近年開湯した注目の新源泉「伊良湖温泉」は、塩化物泉特有の優れた保温・保湿力を誇り「美肌と冷え性改善の温まり湯」として評判。冬の澄み渡る空の下、伊良湖岬灯台や恋路ヶ浜に沈む夕日と満天の星空を眺めながら優雅に寛げる厳選5宿を詳しくご案内します。",
    url: 'https://croud-travel.com/winter-aichi-irago-onsen-torafugu-atsumigyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '伊良湖岬の夕日と太平洋のパノラマ'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月愛知】伊良湖天然とらふぐと新源泉「伊良湖温泉」美肌の湯・極上渥美牛＆伊良湖岬の夕日パノラマを巡る名宿5選",
    description: "11月から12月、太平洋と三河湾の黒潮が交差する愛知県渥美半島の先端・伊良湖岬（田原市）は、冬の最高級美食「伊良湖天然とらふぐ」の最盛期を迎えます。遠州灘の荒波で育った天然とらふぐは、身の引き締まりと濃厚な旨味が格別。てっさ、てっちり、香ばしいひれ酒、そして渥美半島の大自然で育まれた霜降り「渥美牛」の陶板焼きが初冬の食卓を贅沢に彩ります。さらに近年開湯した注目の新源泉「伊良湖温泉」は、塩化物泉特有の優れた保温・保湿力を誇り「美肌と冷え性改善の温まり湯」として評判。冬の澄み渡る空の下、伊良湖岬灯台や恋路ヶ浜に沈む夕日と満天の星空を眺めながら優雅に寛げる厳選5宿を詳しくご案内します。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function AichiIragoOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-aichi-irago-onsen-torafugu-atsumigyu-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.com/"
        },
        "headline": "【11・12月愛知】伊良湖天然とらふぐと新源泉「伊良湖温泉」美肌の湯・極上渥美牛＆伊良湖岬の夕日パノラマを巡る名宿5選",
        "description": "11月から12月、太平洋と三河湾の黒潮が交差する愛知県渥美半島の先端・伊良湖岬（田原市）は、冬の最高級美食「伊良湖天然とらふぐ」の最盛期を迎えます。遠州灘の荒波で育った天然とらふぐは、身の引き締まりと濃厚な旨味が格別。てっさ、てっちり、香ばしいひれ酒、そして渥美半島の大自然で育まれた霜降り「渥美牛」の陶板焼きが初冬の食卓を贅沢に彩ります。さらに近年開湯した注目の新源泉「伊良湖温泉」は、塩化物泉特有の優れた保温・保湿力を誇り「美肌と冷え性改善の温まり湯」として評判。冬の澄み渡る空の下、伊良湖岬灯台や恋路ヶ浜に沈む夕日と満天の星空を眺めながら優雅に寛げる厳選5宿を詳しくご案内します。",
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.com/winter-aichi-irago-onsen-torafugu-atsumigyu-stay",
        "publisher": {
          "@type": "Organization",
          "name": "クラドトラベル編集部",
          "url": "https://croud-travel.com/"
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
              "name": "伊良湖オーシャンリゾート",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/4991/4991.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4991%2F4991.html",
              "priceRange": "¥3,045〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "愛知県",
                "addressLocality": "田原市",
                "streetAddress": "田原市日出町骨山1460-36",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.36",
                "reviewCount": 3864
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "伊良湖温泉　和味の宿　角上楼",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/50838/50838.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50838%2F50838.html",
              "priceRange": "¥17,050〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "愛知県",
                "addressLocality": "田原市",
                "streetAddress": "田原市福江町下地38",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.46",
                "reviewCount": 230
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "休暇村　伊良湖",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/38766/38766.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38766%2F38766.html",
              "priceRange": "¥10,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "愛知県",
                "addressLocality": "田原市",
                "streetAddress": "田原市中山町大松上１",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.17",
                "reviewCount": 479
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "伊良湖温泉　浪漫の宿　井筒楼",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/108198/108198.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108198%2F108198.html",
              "priceRange": "¥17,050〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "愛知県",
                "addressLocality": "田原市",
                "streetAddress": "田原市福江町下地13",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.42",
                "reviewCount": 132
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "おやど螢",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/147549/147549.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147549%2F147549.html",
              "priceRange": "¥8,800〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "愛知県",
                "addressLocality": "田原市",
                "streetAddress": "高山市一之宮町1676",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.00",
                "reviewCount": 11
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
            "name": "伊良湖の「天然とらふぐ」の旬や特徴、下関や知多との違いは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "愛知県の遠州灘・三河湾（伊良湖沖）は、実は日本有数の天然とらふぐの好漁場であり、全国のふぐの名産地や高級料亭へも多く出荷されています。伊良湖港や福江港に水揚げされる「伊良湖天然とらふぐ」は、11月から翌年2月頃が最も脂と旨味が乗る最盛期です。荒波で鍛えられた身は繊維が緻密で、噛めば噛むほど濃厚な甘みと弾力が広がります。中間マージンを挟まない産地ならではの鮮度と価格で、てっさ・てっちり・白子・唐揚げ・ひれ酒まで本物の天然とらふぐを食べ尽くせるのが最大の魅力です。"
            }
          },
          {
            "@type": "Question",
            "name": "近年開湯した新源泉「伊良湖温泉」の泉質と美肌効果について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "伊良湖温泉は2022年に配湯が開始された比較的新しい源泉で、泉質は「ナトリウム・カルシウム-塩化物温泉（低張性弱アルカリ性低温泉）」です。塩化物泉特有の塩分が肌表面を優しくコーティングして体温の蒸発を防ぐため、湯上がりのポカポカ感が非常に長く持続し、「温まりの湯」「熱の湯」として親しまれています。さらに弱アルカリ性の性質が古い角質をやわらげ、カルシウム成分が肌をしっとりと引き締めるため、乾燥しやすい初冬の肌に潤いを与える「美肌の湯」として高く評価されています。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の渥美半島・伊良湖岬の気候や服装、道路状況はどうですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "渥美半島は黒潮の影響を受けるため、愛知県内でも非常に温暖な気候です。11月・12月でも雪が積もることは極めて稀で、冬でもノーマルタイヤで快適にドライブを楽しむことができます。ただし、伊良湖岬や海岸沿いは冬特有の海風（からっ風）が強く吹く日があるため、体感温度は低くなります。岬めぐりや灯台散策、恋路ヶ浜を歩く際は、風を通さない防風性のあるダウンジャケットやウィンドブレーカー、手袋などの防寒着を用意しておくと安心です。"
            }
          },
          {
            "@type": "Question",
            "name": "伊良湖岬周辺の見どころや冬ならではの絶景スポットはどこですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬の伊良湖岬は空気が澄み渡り、夕景と星空が一年で最も美しい季節です。おすすめは日本の渚百選にも選ばれた「恋路ヶ浜」と白亜の「伊良湖岬灯台」。初冬の夕暮れ時には、太平洋の水平線に沈む黄金色の夕日と富士山や南アルプスの遠景が望める日もあります。また、近隣の「日出の石門（ひいのせきもん）」や、渥美半島の特産品が集まる道の駅「伊良湖クリスタルポルト」「めっくんハウス」での冬野菜・フルーツ・お土産探しも定番の楽しみ方です。"
            }
          },
          {
            "@type": "Question",
            "name": "名古屋や東京・静岡方面から伊良湖温泉へのアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "車の場合、東名高速道路「豊川IC」または「音羽蒲郡IC」から国道259号線または国道42号線を経由して約70〜90分です。公共交通機関を利用する場合は、JR東海道新幹線・名鉄「豊橋駅」から豊鉄バス「伊良湖本線」に乗り換えて約90分で伊良湖岬に到着します。また、伊良湖港からは三重県鳥羽市を結ぶ「伊勢湾フェリー」が運航しており、わずか55分で鳥羽と結ばれているため、伊勢志摩と渥美半島を組み合わせたドライブ旅行ルートも大変人気です。"
            }
          }
        ]
      }
    ]
  };

  const faqListItems = [
  {
    "q": "伊良湖の「天然とらふぐ」の旬や特徴、下関や知多との違いは？",
    "a": "愛知県の遠州灘・三河湾（伊良湖沖）は、実は日本有数の天然とらふぐの好漁場であり、全国のふぐの名産地や高級料亭へも多く出荷されています。伊良湖港や福江港に水揚げされる「伊良湖天然とらふぐ」は、11月から翌年2月頃が最も脂と旨味が乗る最盛期です。荒波で鍛えられた身は繊維が緻密で、噛めば噛むほど濃厚な甘みと弾力が広がります。中間マージンを挟まない産地ならではの鮮度と価格で、てっさ・てっちり・白子・唐揚げ・ひれ酒まで本物の天然とらふぐを食べ尽くせるのが最大の魅力です。"
  },
  {
    "q": "近年開湯した新源泉「伊良湖温泉」の泉質と美肌効果について教えてください。",
    "a": "伊良湖温泉は2022年に配湯が開始された比較的新しい源泉で、泉質は「ナトリウム・カルシウム-塩化物温泉（低張性弱アルカリ性低温泉）」です。塩化物泉特有の塩分が肌表面を優しくコーティングして体温の蒸発を防ぐため、湯上がりのポカポカ感が非常に長く持続し、「温まりの湯」「熱の湯」として親しまれています。さらに弱アルカリ性の性質が古い角質をやわらげ、カルシウム成分が肌をしっとりと引き締めるため、乾燥しやすい初冬の肌に潤いを与える「美肌の湯」として高く評価されています。"
  },
  {
    "q": "11月・12月の渥美半島・伊良湖岬の気候や服装、道路状況はどうですか？",
    "a": "渥美半島は黒潮の影響を受けるため、愛知県内でも非常に温暖な気候です。11月・12月でも雪が積もることは極めて稀で、冬でもノーマルタイヤで快適にドライブを楽しむことができます。ただし、伊良湖岬や海岸沿いは冬特有の海風（からっ風）が強く吹く日があるため、体感温度は低くなります。岬めぐりや灯台散策、恋路ヶ浜を歩く際は、風を通さない防風性のあるダウンジャケットやウィンドブレーカー、手袋などの防寒着を用意しておくと安心です。"
  },
  {
    "q": "伊良湖岬周辺の見どころや冬ならではの絶景スポットはどこですか？",
    "a": "冬の伊良湖岬は空気が澄み渡り、夕景と星空が一年で最も美しい季節です。おすすめは日本の渚百選にも選ばれた「恋路ヶ浜」と白亜の「伊良湖岬灯台」。初冬の夕暮れ時には、太平洋の水平線に沈む黄金色の夕日と富士山や南アルプスの遠景が望める日もあります。また、近隣の「日出の石門（ひいのせきもん）」や、渥美半島の特産品が集まる道の駅「伊良湖クリスタルポルト」「めっくんハウス」での冬野菜・フルーツ・お土産探しも定番の楽しみ方です。"
  },
  {
    "q": "名古屋や東京・静岡方面から伊良湖温泉へのアクセス方法は？",
    "a": "車の場合、東名高速道路「豊川IC」または「音羽蒲郡IC」から国道259号線または国道42号線を経由して約70〜90分です。公共交通機関を利用する場合は、JR東海道新幹線・名鉄「豊橋駅」から豊鉄バス「伊良湖本線」に乗り換えて約90分で伊良湖岬に到着します。また、伊良湖港からは三重県鳥羽市を結ぶ「伊勢湾フェリー」が運航しており、わずか55分で鳥羽と結ばれているため、伊勢志摩と渥美半島を組み合わせたドライブ旅行ルートも大変人気です。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "伊良湖オーシャンリゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4991/4991.jpg",
              rating: 4.36,
              reviews: 3864,
              price: "¥3,045〜",
              access: "豊橋駅より70分（無料送迎バス有 要予約）浜松西IC・豊川ICより約90分 鳥羽港より伊勢湾フェリー60分（無料送迎有）",
              special: "2025年7月一部客室リニューアル♪愛犬や3世代旅行にもおすすめ！全室オーシャンビューの絶景リゾート",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4991%2F4991.html",
              story: "伊良湖岬の高台に君臨し、太平洋と三河湾を270度の大パノラマで見渡す絶景リゾートホテル「伊良湖オーシャンリゾート」。全室オーシャンビューの客室からは、初冬の澄みきった青空と海原、そして夕暮れ時には海を茜色に染め上げる感動的な日没景観が広がります。館内の展望大浴場「満天の湯」には、近年開湯して美肌効果が話題の伊良湖温泉（ナトリウム・カルシウム-塩化物泉）を導入。寝湯やシルク風呂、潮風が心地よい露天風呂で体の芯まで温まります。夕食は和洋中多彩なビュッフェや季節の会席で、三河湾直送の旬魚や渥美半島産野菜、渥美牛を存分に堪能できます。",
              roomTip: "海側に面したオーシャンビューツインまたは和洋室。夕景から星空、朝の日の出まで刻々と変わる海の表情をバルコニーから楽しめます。",
              gourmetTip: "「渥美牛と旬の三河湾地魚を味わう季節会席」。冬の脂がのった鮮魚の舟盛りと、香ばしく焼き上げるブランド牛が絶品です。",
              highlights: [
                "太平洋と三河湾を見渡す270度絶景展望風呂＆伊良湖温泉導入の多彩なスパ施設",
                "全室オーシャンビューの開放的な客室＆伊良湖岬灯台や恋路ヶ浜へのアクセス至便",
                "水平線に沈む夕日と満天の星空ビュー＆初冬の澄んだ空気を感じる優雅なリゾート滞在"
              ]
            },
            {
              id: 2,
              name: "伊良湖温泉　和味の宿　角上楼",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/50838/50838.jpg",
              rating: 4.46,
              reviews: 230,
              price: "¥17,050〜",
              access: "お車／東名道豊川ICより伊良湖方面へ約80分 ・ 鉄道／豊橋鉄道三河田原駅より予約制有料送迎（片道800円）にて約25分",
              special: "本館・別館は国の登録有形文化財に指定。天然とらふぐや新鮮な魚貝の味わいと伊良湖温泉で寛ぎ時間をどうぞ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50838%2F50838.html",
              story: "創業昭和初期の老舗であり、伊良湖の天然とらふぐ料理の最高峰として全国の美食家が訪れる名宿「伊良湖温泉 和味の宿 角上楼」。登録有形文化財に指定された昭和レトロな木造建築が醸し出す温もりと、細部まで手入れの行き届いた数寄屋造りの空間が旅人を非日常へと誘います。11月・12月には、福江港で水揚げされた活天然とらふぐを贅沢に使ったフルコースが登場。透き通るような美しい薄造り（てっさ）、ふっくら香ばしい唐揚げ、濃厚な白子焼き、旨味が溶け出したてっちり鍋と雑炊まで、天然物ならではの深いコクと弾力に圧倒されます。新源泉・伊良湖温泉の貸切露天風呂も完備。",
              roomTip: "露天風呂付きの離れ客室「翠上楼」または本館数寄屋客室。静謐な日本庭園を眺めながら、ゆったりとプライベートな時間を満喫できます。",
              gourmetTip: "「名物・伊良湖天然とらふぐづくし会席」。本物の天然とらふぐの刺身と白子、てっちりは一度味わうと忘れられない冬の極上体験です。",
              highlights: [
                "昭和レトロな登録有形文化財の木造建築＆福江港直送の本場天然とらふぐフルコース",
                "全国の食通を魅了するてっさ・てっちり・白子焼き＆風情ある貸切露天風呂",
                "文化財に泊まる特別な記念日ステイ＆上質なヒレ酒とともに味わう冬の最高峰味覚"
              ]
            },
            {
              id: 3,
              name: "休暇村　伊良湖",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38766/38766.jpg",
              rating: 4.17,
              reviews: 479,
              price: "¥10,000〜",
              access: "三河田原駅より車にて40分、また、新豊橋駅から三河田原駅まで電車で40分　バスで30分",
              special: "渥美半島の先端、温暖な伊良湖岬に立地。わんちゃんと同泊できるコテージも完備。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38766%2F38766.html",
              story: "渥美半島の豊かな松林と自然に囲まれ、広大な敷地でゆったりとしたリゾートライフを満喫できる「休暇村 伊良湖」。伊良湖温泉を引いた大浴場「いらご美人の湯」は、内湯・露天風呂ともに広々としており、微細な気泡が肌を包むシルク風呂や炭酸泉も備え、初冬の肌をしっとりと滑らかに潤します。夕食は渥美半島の恵みをふんだんに盛り込んだ「渥美半島ごちそうビュッフェ」。目の前で焼き上げる渥美牛ステーキや、三河湾・遠州灘の新鮮なお造り、名物あさりご飯や冬野菜が並び、ファミリーからシニアまで満足度の高い滞在が叶います。",
              roomTip: "和モダン洋室または落ち着いた和室。松林越しに抜ける海風を感じながら、静かにリラックスできる快適な造りです。",
              gourmetTip: "「渥美牛ステーキ＆冬の三河湾お造りビュッフェ」。オープンキッチンで焼き立てが提供される渥美牛のジューシーな旨味がたまりません。",
              highlights: [
                "松林に囲まれた広大な自然環境＆渥美牛ステーキと三河湾地魚が並ぶ豪華ビュッフェ",
                "美肌の湯「いらご美人の湯」でしっとり潤う湯浴み＆家族や夫婦で寛げる充実設備",
                "伊良湖岬散策やサイクリングの拠点に最適＆安心の休暇村クオリティとサービス"
              ]
            },
            {
              id: 4,
              name: "伊良湖温泉　浪漫の宿　井筒楼",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108198/108198.jpg",
              rating: 4.42,
              reviews: 132,
              price: "¥17,050〜",
              access: "お車／東名道豊川ICより伊良湖方面へ約80分 ・ 鉄道／豊橋鉄道三河田原駅より予約制有料送迎（片道500円）にて約25分",
              special: "【2022年夏リニューアルオープン】国の登録有形文化財指定。築150年の趣きの中、新鮮な海鮮を堪能。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108198%2F108198.html",
              story: "江戸末期創業の旅籠をルーツに持ち、大正・昭和のノスタルジックな風情を色濃く残す大人の隠れ宿「伊良湖温泉 浪漫の宿 井筒楼」。角上楼の姉妹館として知られ、アンティークな調度品や格天井、ステンドグラスが彩る館内はまるでタイムスリップしたかのような静けさと情緒に満ちています。自慢の食事は角上楼の板場が腕を振るう本格日本料理。11月・12月は旬を迎える天然とらふぐや地魚会席、上質な渥美牛のすき焼きなどを落ち着いた食事処で堪能。姉妹館・角上楼の湯めぐりも利用可能で、贅沢な湯治気分を味わえます。",
              roomTip: "レトロな梁や柱を生かした和モダン客室。静かに本を読んだり、大切な人と語らう大人の冬籠もりにぴったりの空間です。",
              gourmetTip: "「初冬の伊良湖天然ふぐ会席」。職人の技が光る繊細なてっさと、ヒレ酒の芳醇な香りが冷えた体を芯から温めてくれます。",
              highlights: [
                "大正浪漫漂うアンティークな隠れ宿＆角上楼の板場が手がける極上ふぐ料理と温泉湯めぐり",
                "わずか数室の大人の静寂空間＆歴史あるノスタルジックな館内で楽しむ非日常の休日",
                "喧騒から離れた大人の冬籠もり＆丁寧な接客と歴史美に心癒やされる至福のひととき"
              ]
            },
            {
              id: 5,
              name: "おやど螢",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/147549/147549.jpg",
              rating: 5.00,
              reviews: 11,
              price: "¥8,800〜",
              access: "飛騨一ノ宮駅よりお車にて約５分。JR高山本線飛騨一之宮駅からの無料送迎をいたします。",
              special: "とろけるような飛騨牛と、季節により日本海氷見港から取り寄せた新鮮な魚を四季折々の地元野菜・山菜とご一緒にご堪能いただけます。 JR高山本線飛騨一之宮駅からの無料送迎をいたします。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147549%2F147549.html",
              story: "渥美半島の静かな漁師町・福江に佇み、一日数組限定の温かなおもてなしと圧倒的な鮮度を誇る魚介料理で愛される美食の隠れ宿「おやど螢」。店主自ら福江港のセリに赴いて仕入れる極上の海の幸は、食通を唸らせるボリュームと味わい。11月からは遠州灘の天然とらふぐ鍋会席や、伊良湖近海で揚がる寒平目、地ダコ、車海老、そして厳選された渥美牛の陶板焼きが並びます。家庭的で気配りの行き届いた接客と清潔な館内で、気兼ねなく美味しい冬の味覚を心ゆくまで堪能できる穴場旅館です。",
              roomTip: "い草の香りが心地よい清潔な和室。窓を開けると穏やかな潮風が吹き抜け、静かな夜の眠りを約束してくれます。",
              gourmetTip: "「天然ふぐ鍋＆三河湾地魚舟盛り会席」。獲れたての鮮魚を惜しみなく盛り込んだ舟盛りと熱々のふぐ雑炊は至福の味わいです。",
              highlights: [
                "福江港セリ買付の圧倒的鮮度を誇る魚介料理＆アットホームなもてなしが心地よい穴場宿",
                "冬限定の天然ふぐ鍋と豪華舟盛り＆渥美牛陶板焼きを味わう贅沢な美食ディナー",
                "地元漁師町ならではのリーズナブルで本物の魚介体験＆リピーターの多い温かいお宿"
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
      <header className="bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold tracking-wide border border-blue-400/30">
            <Anchor className="w-3.5 h-3.5" />
            11月・12月愛知初冬特集・伊良湖天然とらふぐ＆新源泉名湯探訪
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {metadata.title as string}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            遠州灘と三河湾の荒波が育む「伊良湖天然とらふぐ」の引き締まった歯応えと至高の旨味。
            新源泉「伊良湖温泉」の温まり美肌湯と、霜降り渥美牛、伊良湖岬の水平線に沈む冬夕日を巡る旅へ。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-blue-950 font-bold text-sm tracking-wide">
            <Flame className="w-4 h-4 text-blue-700" />
            黒潮がもたらす冬の味覚王と海辺の新源泉リゾート
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            愛知県の南端、太平洋と三河湾を二分するように細長く突き出た渥美半島。その最先端に位置する伊良湖岬（田原市）は、冬でも雪が降らない温暖な気候と、壮大な海のパノラマに抱かれた風光明媚なリゾート地です。初冬の11月から12月にかけて、この海辺の町が最も熱気を帯びる理由が、冬の味覚の王様「伊良湖天然とらふぐ」の水揚げです。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            遠州灘の激しい潮流にもまれて育った天然とらふぐは、身が驚くほど引き締まり、養殖物とは比較にならない力強い歯触りと上品かつ濃厚な甘みを蓄えています。伊良湖港や福江港に水揚げされる獲れたてのふぐは、職人の見事な包丁さばきによって皿の絵柄が透き通る美しい「てっさ」へ、そしてふっくらジューシーな唐揚げ、旨味が出汁に溶け出す「てっちり鍋」、香ばしい「ひれ酒」へと昇華。これらを産地ならではの贅沢なボリュームで心ゆくまで味わえるのは、冬の渥美半島旅の醍醐味です。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            さらに伊良湖エリアで今大きな注目を集めているのが、2022年に誕生した新源泉「伊良湖温泉」。地下約1200メートルから湧出するナトリウム・カルシウム-塩化物温泉は、塩分が肌に薄いヴェールを作って熱を閉じ込めるため、湯冷めしにくく体の芯からポカポカに温まります。弱アルカリ性の柔らかな湯触りは肌をしっとりと整え、冬の乾燥対策や疲労回復にも効果抜群です。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            夕暮れ時には恋路ヶ浜から眺める海と空のグラデーション、夜には都会では見られない満天の星空。渥美半島の大地が育んだブランド黒毛和牛「渥美牛」の陶板焼きやすき焼きとともに、初冬の贅を味わい尽くす厳選5宿をご紹介します。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              伊良湖温泉＆渥美半島のおすすめ名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              楽天トラベルAPIよりリアルタイムの空室料金・クチコミ評価・アクセス情報を取得して掲載
            </p>
          </div>

          <div className="space-y-8">
            {hotelCards.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-blue-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                  <div className="md:col-span-5 relative min-h-[240px] md:min-h-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={hotel.img} 
                      alt={hotel.name}
                      className="w-full h-full object-cover absolute inset-0"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-blue-950/80 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-full font-bold">
                      厳選第{hotel.id}位
                    </div>
                  </div>

                  <div className="md:col-span-7 p-6 sm:p-7 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                          <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                          ★ {hotel.rating}
                        </span>
                        <span className="text-xs text-stone-500">
                          ({hotel.reviews.toLocaleString()}件のクチコミ)
                        </span>
                        <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded-md ml-auto">
                          目安: {hotel.price}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-blue-900 transition-colors">
                        {hotel.name}
                      </h3>

                      <p className="text-xs text-stone-500 flex items-center gap-1 mt-1 mb-3">
                        <MapPin className="w-3.5 h-3.5 shrink-0 text-stone-400" />
                        {hotel.access}
                      </p>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                        {hotel.story}
                      </p>

                      <div className="space-y-2 border-t border-stone-100 pt-3 text-xs">
                        <div className="flex items-start gap-2 text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span><strong>お部屋の選び方：</strong>{hotel.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2 text-stone-600">
                          <Utensils className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>冬の美食Tips：</strong>{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      <div className="mt-4 bg-stone-50 rounded-2xl p-3 border border-stone-100">
                        <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-1.5">
                          宿泊ポイント・ハイライト
                        </span>
                        <ul className="space-y-1 text-xs text-stone-700">
                          {hotel.highlights.map((hl: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                      <div className="text-xs text-stone-500">
                        公式楽天トラベル連携
                      </div>
                      <a 
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-bold text-xs sm:text-sm hover:from-blue-800 hover:to-indigo-800 transition-all shadow-xs hover:shadow-md"
                      >
                        楽天トラベルでプラン詳細を見る
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1 Night 2 Days Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-blue-950 font-bold text-sm tracking-wide bg-blue-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-blue-800" />
              1泊2日おすすめモデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              伊良湖天然とらふぐと伊良湖温泉・絶景岬ドライブの旅
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-blue-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-blue-700" />
                【1日目】渥美半島爽快ドライブと岬の冬夕日
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-1" />
                  <span><strong>11:30 道の駅田原めっくんハウス：</strong>名物メロン加工品や採れたて冬野菜、ご当地グルメを散策。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-1" />
                  <span><strong>13:30 太平洋ロングビーチ＆日出の石門：</strong>冬の澄んだ青空と太平洋の荒波が作り出した奇岩絶景を散策。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-1" />
                  <span><strong>15:30 伊良湖温泉の宿へチェックイン：</strong>新源泉の塩化物温泉に浸かり、ドライブの疲れを癒やしながら夕暮れを待つ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-1" />
                  <span><strong>16:45 恋路ヶ浜＆伊良湖岬灯台の夕日：</strong>水平線に沈む黄金色の太陽とグラデーションの空を鑑賞。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-1" />
                  <span><strong>19:00 伊良湖天然とらふぐフルコース＆渥美牛：</strong>てっさ、てっちり、香ばしいひれ酒と極上牛を心ゆくまで堪能。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-blue-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-blue-700" />
                【2日目】岬の朝散歩と産直マーケットめぐり
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-1" />
                  <span><strong>07:30 朝の展望露天風呂と郷土朝食：</strong>朝陽に輝く三河湾を望みながら朝風呂を満喫。名物あさりご飯でパワー補給。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-1" />
                  <span><strong>09:30 恋路ヶ浜の冬朝散策：</strong>人影もまばらな白砂の浜辺を歩き、清々しい海風と潮騒を感じる贅沢な時間。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-1" />
                  <span><strong>11:00 道の駅あかばねロコステーション：</strong>赤羽根漁港直送の干物やしらす、渥美半島の新鮮な農産物をお土産に選定。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-1" />
                  <span><strong>13:00 豊橋・東名方面へ帰路へ：</strong>伊勢湾フェリーで鳥羽へ渡るか、豊橋名物のカレーうどんを味わって帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-blue-950 font-bold text-sm tracking-wide bg-blue-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-blue-800" />
              渥美半島・冬のおみやげ＆立ち寄り散策手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              伊良湖・田原で手に入れたい初冬の逸品と絶景スポット
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-700" />
                恋路ヶ浜と伊良湖岬灯台の初冬夕景
              </h3>
              <p>
                伊良湖岬の先端に広がる白砂の弓状海岸「恋路ヶ浜」は、島崎藤村の抒情詩『椰子の実』の舞台としても名高いロマンチックな名所。冬は空気が乾燥して澄み渡るため、水平線に沈む夕日が息を呑むほど鮮やかに輝きます。白亜の伊良湖岬灯台へと続く遊歩道は、潮風を感じながらの散策に最適です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-blue-700" />
                渥美半島の冬キャベツ・ブランド干物＆あさりせんべい
              </h3>
              <p>
                日本一の農業産出額を誇る田原市は、冬キャベツやブロッコリーなど甘みたっぷりの高原・平地野菜の宝庫。道の駅では採れたての冬野菜が格安で並びます。また、三河湾名物の生あさりを丸ごとプレス焼きした香ばしい「あさりせんべい」や、地元漁港で天日干しされたカマス・アジの干物は絶品のお土産です。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-blue-950 font-bold text-sm tracking-wide bg-blue-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-blue-800" />
              初冬の伊良湖温泉・泉質と気候の徹底解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ11月・12月の伊良湖は「冬の極上美食温泉」と呼ばれるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-blue-700" />
              新源泉・塩化物温泉がもたらす抜群の保温持続力
            </h3>
            <p>
              伊良湖温泉の泉質は「ナトリウム・カルシウム-塩化物温泉」。入浴すると塩分が皮膚の表面を覆い、汗の蒸発を抑える「パック効果」を発揮するため、入浴後も体が冷めにくく、手足の先までポカポカとした温もりが長時間続きます。また弱アルカリ性のpH値により肌の角質が優しくオフされ、カルシウムイオンが肌の引き締めと滑らかさをサポート。海辺の心地よい潮風を感じながら、冬の乾燥に負けない極上の湯浴みが楽しめます。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-blue-700" />
              遠州灘の荒波と三河湾の栄養が生む天然とらふぐの力強い旨味
            </h3>
            <p>
              伊良湖沖の海域は、太平洋の荒々しい外洋と穏やかでプランクトンが豊富な三河湾の海水がぶつかり合う豊かな漁場です。この過酷な海流を泳ぎ回る天然とらふぐは、運動量が多いため筋肉質で引き締まり、歯応えが極めてシャープ。熟成させることでイノシン酸などの旨味成分が爆発的に凝縮し、噛みしめるほどに奥深い甘みが溢れ出します。養殖ふぐとは一線を画す天然物ならではの香気とコクは、冬の伊良湖ならではの贅沢です。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Sparkles className="w-4 h-4 text-blue-700" />
              温暖な気候と澄み切った大気が約束する冬のオープンリゾート
            </h3>
            <p>
              豪雪地帯とは対照的に、渥美半島は冬でも雪の心配がほぼない温暖な常春の地。ドライブ旅行でも積雪や凍結を過度に警戒する必要がなく、快適なクルージングを楽しめます。さらに冬場は太平洋高気圧の澄んだ空気により、空の透明度が年間で最も高くなり、海と空の雄大な青、夕暮れの茜色、夜の星空が鮮明に広がります。寒さを気にせずリゾート気分に浸れる絶好のロケーションです。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-blue-950 font-bold text-sm tracking-wide bg-blue-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-blue-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の伊良湖温泉・渥美半島旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-blue-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-blue-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-blue-800" />
            あわせて読みたい初冬の東海・全国美食温泉特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-aichi-minamichita-onsen-torafugu-chita-beef-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-blue-700 font-bold block text-[10px]">愛知・南知多</span>
              <p className="font-bold text-stone-800 line-clamp-2">日間賀島のとらふぐと知多牛・伊勢湾を望む美肌温泉名宿</p>
            </Link>
            <Link 
              href="/winter-shizuoka-kanzanji-onsen-hamanako-fugu-eel-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-blue-700 font-bold block text-[10px]">静岡・浜名湖舘山寺</span>
              <p className="font-bold text-stone-800 line-clamp-2">浜名湖の天然トラフグと名物うなぎ・湖畔の絶景露天風呂宿</p>
            </Link>
            <Link 
              href="/winter-mie-toba-onsen-ise-ebi-matoya-oyster-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-blue-700 font-bold block text-[10px]">三重・鳥羽温泉郷</span>
              <p className="font-bold text-stone-800 line-clamp-2">冬の伊勢海老と的矢かき会席・伊勢湾フェリーで行く海辺の湯宿</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
