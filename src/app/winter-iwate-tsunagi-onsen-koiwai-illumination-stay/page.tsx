import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Mountain, Lightbulb, ThermometerSun, Footprints
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月盛岡つなぎ温泉の冬名湯と小岩井イルミ】銀河農場の夜・秀峰岩手山雪見露天と極上前沢牛会席の宿5選",
  description: "11月下旬から12月にかけて東北最大級のウインターイルミネーション「小岩井農場 銀河農場の夜」が輝き、御所湖越しに秀峰・岩手山の白銀の初冠雪が広がる盛岡の奥座敷「つなぎ温泉」と「鶯宿温泉」。平安時代・源義家ゆかりの名湯や北東北屈指の自家源泉掛け流し、極上ブランド黒毛和牛「前沢牛」「雫石牛」の鉄板焼きやすき焼き、盛岡三大麺を堪能する厳選名宿5選を徹底解説。",
  keywords: '盛岡 つなぎ温泉 宿泊, つなぎ温泉 11月 12月, 小岩井農場 イルミネーション 銀河農場の夜, ホテル紫苑, 湯守ホテル大観, 愛真館, ホテル森の風鶯宿, 四季亭, 前沢牛 すき焼き, 御所湖 岩手山 雪景色',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-iwate-tsunagi-onsen-koiwai-illumination-stay/",
  },
  openGraph: {
    title: "【11・12月盛岡つなぎ温泉の冬名湯と小岩井イルミ】銀河農場の夜・秀峰岩手山雪見露天と極上前沢牛会席の宿5選",
    description: "11月下旬から12月にかけて東北最大級のウインターイルミネーション「小岩井農場 銀河農場の夜」が輝き、御所湖越しに秀峰・岩手山の白銀の初冠雪が広がる盛岡の奥座敷「つなぎ温泉」と「鶯宿温泉」。平安時代・源義家ゆかりの名湯や北東北屈指の自家源泉掛け流し、極上ブランド黒毛和牛「前沢牛」「雫石牛」の鉄板焼きやすき焼き、盛岡三大麺を堪能する厳選名宿5選を徹底解説。",
    url: 'https://croud-travel.pages.dev/winter-iwate-tsunagi-onsen-koiwai-illumination-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月盛岡つなぎ温泉の冬名湯と小岩井イルミ】銀河農場の夜・秀峰岩手山雪見露天と極上前沢牛会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月盛岡つなぎ温泉の冬名湯と小岩井イルミ】銀河農場の夜・秀峰岩手山雪見露天と極上前沢牛会席の宿5選",
    description: "11月下旬から12月にかけて東北最大級のウインターイルミネーション「小岩井農場 銀河農場の夜」が輝き、御所湖越しに秀峰・岩手山の白銀の初冠雪が広がる盛岡の奥座敷「つなぎ温泉」と「鶯宿温泉」。平安時代・源義家ゆかりの名湯や北東北屈指の自家源泉掛け流し、極上ブランド黒毛和牛「前沢牛」「雫石牛」の鉄板焼きやすき焼き、盛岡三大麺を堪能する厳選名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "盛岡つなぎ温泉の11月・12月の気候や雪の状況はどうですか？車のタイヤは？",
    "a": "盛岡市やつなぎ温泉周辺は、11月上旬〜中旬にかけて朝晩の冷え込みが強まり、最高気温は10℃前後、最低気温は0℃近くまで下がります。11月下旬には例年初雪が観測され、12月に入ると本格的な積雪期に入り、路面凍結（アイスバーン）や雪道が日常的になります。11月中旬以降にお車で訪れる場合は、必ずスタッドレスタイヤの装着またはチェーンの携行が必須です。冬の澄んだ空気のおかげで、御所湖越しに見る岩手山の雪景色が息をのむ美しさになります。"
  },
  {
    "q": "小岩井農場のイルミネーション『銀河農場の夜』はいつ開催されますか？つなぎ温泉からの距離は？",
    "a": "「小岩井農場 KOIWAI Winter Lights 銀河農場の夜」は、例年11月下旬から翌年1月上旬にかけて開催される東北最大級のウインターイルミネーションです。約100万球のLEDが広大な農場を彩り、光のトンネルや巨大ツリー、幻想的な光のSLなどが点灯します。つなぎ温泉からは車で約15〜20分という絶好の近さにあり、宿にチェックインして温泉に入った後、夕暮れに合わせてイルミネーションへ向かい、戻ってから温かい会席料理と夜の雪見風呂を楽しむプランが最も人気です。"
  },
  {
    "q": "つなぎ温泉の泉質や効能、名前の由来について教えてください。",
    "a": "つなぎ温泉の歴史は平安時代末期の康平5年（1062年）、前九年の役の際に源義家（八幡太郎義家）がこの地に陣を敷いた際、愛馬を石に繋いで湧き出る温泉で馬の傷と自身の疲労を癒やしたことに由来します（その石は「繋石」として現存）。泉質はpH8.5〜9.0前後の単純硫黄温泉（低張性弱アルカリ性高温泉）。天然の保湿成分であるメタケイ酸を豊富に含み、硫黄成分が肌を滑らかに整えるため「美肌の湯」として古くから親しまれています。"
  },
  {
    "q": "JR盛岡駅からつなぎ温泉へのアクセス方法はどのようなものがありますか？",
    "a": "JR盛岡駅西口から各旅館の宿泊者専用無料シャトルバス（要事前予約）が定刻運行されており、約25〜30分で直行できます。また、盛岡駅東口バスターミナル（10番乗り場）から岩手県交通の「繋温泉行き」または「鶯宿温泉行き」路線バスも運行されており、約35〜40分で温泉街中心部にアクセスできます。タクシー利用の場合は盛岡駅から約25分、料金は約4,500円〜5,500円程度です。"
  },
  {
    "q": "冬の盛岡・雫石旅行で絶対に味わうべき地元グルメは何ですか？",
    "a": "冬の盛岡で絶対に見逃せないのが「盛岡三大麺（盛岡冷麺・わんこそば・盛岡じゃじゃ麺）」です。特に冬の温泉で温まった後に食べるコシの強い盛岡冷麺と牛骨スープの旨みは格別。さらに、豊かな自然で肥育されるブランド黒毛和牛「前沢牛」や「雫石牛」のすき焼き・ステーキ、三陸海岸から直送される冬の寒ビラメや三陸牡蠣、郷土料理の「ひっつみ（小麦粉をちぎって入れた温かい出汁鍋汁）」は、冬の岩手を代表する極上の味覚です。"
  }
];

export default function TsunagiOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-iwate-tsunagi-onsen-koiwai-illumination-stay#article",
        "headline": "【11・12月盛岡つなぎ温泉の冬名湯と小岩井イルミ】銀河農場の夜・秀峰岩手山雪見露天と極上前沢牛会席の宿5選",
        "description": "11月下旬から12月にかけて東北最大級のウインターイルミネーション「小岩井農場 銀河農場の夜」が輝き、御所湖越しに秀峰・岩手山の白銀の初冠雪が広がる盛岡の奥座敷「つなぎ温泉」と「鶯宿温泉」。平安時代・源義家ゆかりの名湯や北東北屈指の自家源泉掛け流し、極上ブランド黒毛和牛「前沢牛」「雫石牛」の鉄板焼きやすき焼き、盛岡三大麺を堪能する厳選名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-27T00:00:00+09:00",
        "dateModified": "2026-09-27T00:00:00+09:00",
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
          "@id": "https://croud-travel.pages.dev/winter-iwate-tsunagi-onsen-koiwai-illumination-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-iwate-tsunagi-onsen-koiwai-illumination-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "盛岡つなぎ温泉の11月・12月の気候や雪の状況はどうですか？車のタイヤは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "盛岡市やつなぎ温泉周辺は、11月上旬〜中旬にかけて朝晩の冷え込みが強まり、最高気温は10℃前後、最低気温は0℃近くまで下がります。11月下旬には例年初雪が観測され、12月に入ると本格的な積雪期に入り、路面凍結（アイスバーン）や雪道が日常的になります。11月中旬以降にお車で訪れる場合は、必ずスタッドレスタイヤの装着またはチェーンの携行が必須です。冬の澄んだ空気のおかげで、御所湖越しに見る岩手山の雪景色が息をのむ美しさになります。"
            }
          },
          {
            "@type": "Question",
            "name": "小岩井農場のイルミネーション『銀河農場の夜』はいつ開催されますか？つなぎ温泉からの距離は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「小岩井農場 KOIWAI Winter Lights 銀河農場の夜」は、例年11月下旬から翌年1月上旬にかけて開催される東北最大級のウインターイルミネーションです。約100万球のLEDが広大な農場を彩り、光のトンネルや巨大ツリー、幻想的な光のSLなどが点灯します。つなぎ温泉からは車で約15〜20分という絶好の近さにあり、宿にチェックインして温泉に入った後、夕暮れに合わせてイルミネーションへ向かい、戻ってから温かい会席料理と夜の雪見風呂を楽しむプランが最も人気です。"
            }
          },
          {
            "@type": "Question",
            "name": "つなぎ温泉の泉質や効能、名前の由来について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "つなぎ温泉の歴史は平安時代末期の康平5年（1062年）、前九年の役の際に源義家（八幡太郎義家）がこの地に陣を敷いた際、愛馬を石に繋いで湧き出る温泉で馬の傷と自身の疲労を癒やしたことに由来します（その石は「繋石」として現存）。泉質はpH8.5〜9.0前後の単純硫黄温泉（低張性弱アルカリ性高温泉）。天然の保湿成分であるメタケイ酸を豊富に含み、硫黄成分が肌を滑らかに整えるため「美肌の湯」として古くから親しまれています。"
            }
          },
          {
            "@type": "Question",
            "name": "JR盛岡駅からつなぎ温泉へのアクセス方法はどのようなものがありますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "JR盛岡駅西口から各旅館の宿泊者専用無料シャトルバス（要事前予約）が定刻運行されており、約25〜30分で直行できます。また、盛岡駅東口バスターミナル（10番乗り場）から岩手県交通の「繋温泉行き」または「鶯宿温泉行き」路線バスも運行されており、約35〜40分で温泉街中心部にアクセスできます。タクシー利用の場合は盛岡駅から約25分、料金は約4,500円〜5,500円程度です。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の盛岡・雫石旅行で絶対に味わうべき地元グルメは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬の盛岡で絶対に見逃せないのが「盛岡三大麺（盛岡冷麺・わんこそば・盛岡じゃじゃ麺）」です。特に冬の温泉で温まった後に食べるコシの強い盛岡冷麺と牛骨スープの旨みは格別。さらに、豊かな自然で肥育されるブランド黒毛和牛「前沢牛」や「雫石牛」のすき焼き・ステーキ、三陸海岸から直送される冬の寒ビラメや三陸牡蠣、郷土料理の「ひっつみ（小麦粉をちぎって入れた温かい出汁鍋汁）」は、冬の岩手を代表する極上の味覚です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-iwate-tsunagi-onsen-koiwai-illumination-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "盛岡つなぎ温泉　ホテル紫苑",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10629%2F10629.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "盛岡つなぎ温泉　湯守ホテル大観（伊東園ホテルズ）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F193449%2F193449.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "盛岡つなぎ温泉　愛真館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9552%2F9552.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "鶯宿温泉　ホテル森の風　鶯宿",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9572%2F9572.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "盛岡つなぎ温泉　四季亭",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56830%2F56830.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "盛岡つなぎ温泉　ホテル紫苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10629/10629.jpg",
              rating: 4.41,
              reviews: 1964,
              price: "¥7,700〜",
              access: "■電車／JR盛岡駅西口より定刻運行シャトルバス【要予約有料】■お車／東北道盛岡ICより国道46号を秋田方面へ約15分",
              special: "「全室がレイクビュー」 湖畔に佇み上質な時間が流れる和のリゾートへ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10629%2F10629.html",
              story: "御所湖の畔に佇み、全客室および露天風呂からパノラマのレイクビューと雄大な岩手山を一望できるつなぎ温泉屈指の大型名宿「ホテル紫苑」。11月下旬から12月にかけて、湖面越しに冠雪した「南部片富士」岩手山の荘厳な姿を眺めながら湯浴みを楽しめます。南部曲り家をモチーフにした赤松造りの風情ある大浴場「南部曲り家の湯」と、湖と一体化するような「ひとりじめの湯」の2つの自家源泉を引いており、美肌効果抜群の弱アルカリ性単純硫黄泉が旅の疲れを優雅に解き放ちます。",
              roomTip: "御所湖側上層階の和洋室または露天風呂付き客室。夕暮れどきに赤く染まる御所湖の水面と、朝日に輝く冠雪の岩手山をプライベートな空間から独占鑑賞できます。",
              gourmetTip: "岩手が誇る最高峰ブランド黒毛和牛「前沢牛」や「雫石牛」の陶板ステーキ、三陸直送の初冬寒ヒラメや鮑、三陸ホタテの陶板焼き、郷土の温かいひっつみ汁を取り入れた料理長特選の季節会席。",
              highlights: [
                "全室レイクビュー＆南部曲り家の湯とひとりじめの湯の2大自家源泉掛け流し",
                "初冬の澄んだ湖面に映える秀峰岩手山の白銀初冠雪パノラマビュー",
                "最高級前沢牛の陶板ステーキ＆三陸直送寒ヒラメ・ホタテの季節会席"
              ]
            },
            {
              id: 2,
              name: "盛岡つなぎ温泉　湯守ホテル大観（伊東園ホテルズ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/193449/193449.jpg",
              rating: 3.85,
              reviews: 485,
              price: "¥6,798〜",
              access: "盛岡駅よりお車で約20分/盛岡駅よりバスで約30分",
              special: "北東北随一の湯量を誇る天然温泉。源泉100%掛け流しでご堪能ください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F193449%2F193449.html",
              story: "創業から数百年の歴史を受け継ぎ、敷地内に毎分千リットルを超える驚異的な湧出量を誇る自家源泉を保有する「湯守 ホテル大観」。北東北随一とも評される湯量を活かし、加水・加温を一切行わない100%源泉掛け流しの湯船は、温泉通も唸る本物の名湯です。大浴場の広大な露天風呂からは、初冬の澄み渡る冷気の中で御所湖の波音を聞きながら、硫黄の香る豊かな源泉にゆったりと体を委ねることができます。",
              roomTip: "御所湖を望む広々とした本館和室。窓いっぱいに広がる湖畔の冬景色を眺めながら、気兼ねなく足を伸ばしてリラックスできる静かな空間です。",
              gourmetTip: "季節のバイキングまたは和食会席。三陸の海の幸やお肉料理、地元盛岡名物の温かい麺料理など、バラエティ豊かでボリューム満点の味覚を気兼ねなく味わえます。",
              highlights: [
                "北東北随一の湯量を誇る自家源泉100%掛け流し大露天風呂＆御所湖の冬絶景",
                "加水加温なしの濃厚な弱アルカリ性単純硫黄泉で芯から温まる極上湯浴み",
                "三陸の海の幸とお肉料理を味わうボリューム満点の和洋バイキング"
              ]
            },
            {
              id: 3,
              name: "盛岡つなぎ温泉　愛真館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9552/9552.jpg",
              rating: 4.25,
              reviews: 2094,
              price: "¥7,150〜",
              access: "■電車／JR盛岡駅西口より定刻運行シャトル【要予約】約25分　■お車／東北道盛岡ICより国道46号を秋田方面へ約15分",
              special: "ドリンクインクルーシブ/17の湯舟ではしご風呂/老舗人気店「焼肉・冷麺　髭」プロデュース焼肉",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9552%2F9552.html",
              story: "館内に趣の異なる17もの湯船を備え、館内にいながらにして本格的な「湯めぐり」を満喫できる温泉自慢の宿「愛真館」。名物の平安絵巻を思わせる庭園露天風呂「かわせみの湯」や、ヒノキ風呂、打たせ湯、深湯など、多彩な湯船で源泉の温もりを体感できます。地元盛岡の名店「焼肉・冷麺 髭」がプロデュースする本格盛岡冷麺や黒毛和牛を館内で堪能できるユニークなプランや、アルコール含むドリンクインクルーシブサービスも大好評です。",
              roomTip: "モダン和洋室または広々とした12畳の純和室。ファミリーやグループでもゆったり寛げる設計で、館内湯めぐりの合間に心地よい休息を取ることができます。",
              gourmetTip: "老舗人気焼肉店「髭」直伝の盛岡冷麺と特選黒毛和牛焼肉、または岩手の旬の食材を散りばめた季節の和食膳。ツルッとした強いコシの盛岡冷麺は、冬の温かい温泉上がりに驚くほど美味しく喉を潤します。",
              highlights: [
                "館内17の多彩な湯舟めぐり＆名店「髭」プロデュース本格盛岡冷麺と焼肉",
                "ドリンクインクルーシブで地酒や生ビールを心ゆくまで堪能できる上質空間",
                "強いコシの盛岡冷麺＆特選黒毛和牛焼肉を湯上がりに味わう唯一無二の食体験"
              ]
            },
            {
              id: 4,
              name: "鶯宿温泉　ホテル森の風　鶯宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9572/9572.jpg",
              rating: 4.36,
              reviews: 2486,
              price: "¥8,800〜",
              access: "東北自動車道盛岡ICより約20分/JR東北新幹線盛岡駅西口バスターミナル29番付近より無料シャトルバス約40分",
              special: "岩手山一望の空中露天風呂は安らぎと潤いのパノラマ※盛岡駅西口より無料シャトルバス完備",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9572%2F9572.html",
              story: "開湯450年の歴史を誇る鶯宿温泉の高台に位置し、岩手山と雫石の大自然を眼下に見晴らす北東北屈指の大型温泉リゾート「ホテル森の風 鶯宿」。最上階に位置する空中露天風呂からは、初冬の銀世界に染まりゆく奥羽山脈の山並みと岩手山の大パノラマを望む絶景が広がります。館内には江戸時代の宿場町を再現した「お祭り広場」があり、太鼓ショーや縁日など毎夜心躍るイベントが開催され、世代を問わず非日常の旅情に浸ることができます。",
              roomTip: "最上階フロアの展望客室または和洋特別室。大きな窓から雪化粧を始めた山並みを見晴らし、夜には満天の冬の星空を眺める極上のプライベートステイが叶います。",
              gourmetTip: "雫石牛の鉄板焼きや、岩手県産の旬の山海の幸を職人が目の前で調理する創作会席または豪華和洋中ビュッフェ。三陸沿岸の新鮮魚介や岩手県産ブランド豚の陶板焼きなど、郷土の旨みが凝縮されています。",
              highlights: [
                "岩手山一望の最上階空中露天風呂＆毎夜開催されるお祭り広場イベント",
                "小岩井農場まで車で約20分、イルミネーション鑑賞へのアクセスも抜群",
                "雫石牛鉄板焼きと三陸沿岸の初冬魚介を盛り込んだ豪華創作会席コース"
              ]
            },
            {
              id: 5,
              name: "盛岡つなぎ温泉　四季亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/56830/56830.jpg",
              rating: 4.64,
              reviews: 517,
              price: "¥14,300〜",
              access: "ＪＲ盛岡駅より車で約２５分、路線バスで約４０分（駅からの送迎サービスはございません）",
              special: "日本の季節を愛でるお宿、四季折々に心づくしのおもてなし。季を彩る和風旅館、つなぎ温泉四季亭へどうぞ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56830%2F56830.html",
              story: "盛岡の奥座敷に佇む数寄屋造りの風格ある純和風料理旅館「盛岡つなぎ温泉 四季亭」。客室数を抑えた静寂の空間で、行き届いた心づくしのおもてなしと、研ぎ澄まされた本格京風会席を堪能できる大人の隠れ家です。源泉掛け流しの湯船にはつなぎ温泉の名湯が豊かに注がれ、木のぬくもり溢れる檜露天風呂で初冬の冷気を感じながら、まろやかな美肌の湯を静かに愉しむことができます。",
              roomTip: "職人の技が光る数寄屋造りの特別室または温泉風呂付き客室。凛とした和の静けさの中、雪吊りの施された日本庭園を眺めながら優雅なひとときを過ごせます。",
              gourmetTip: "全国各地の名料亭で研鑽を積んだ料理長が手がける本格懐石料理。最高級前沢牛の石焼きやしゃぶしゃぶ、三陸直送の極上ウニ・鮑、初冬の寒ブリ、旬の京野菜を繊細な出汁で仕立てた芸術的な一皿が並びます。",
              highlights: [
                "数寄屋造りの風格ある純和風料理旅館＆極上前沢牛と三陸旬魚介の本格懐石",
                "源泉掛け流し檜風呂付き客室で過ごす大人のプライベートな静寂と贅沢",
                "全国から称賛される料理長厳選の前沢牛石焼きと繊細な出汁が香る伝統京風懐石"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-slate-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="盛岡つなぎ温泉の御所湖と初冬の岩手山冠雪を望む絶景雪見露天風呂"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/90 text-indigo-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-indigo-800/50">
            <Lightbulb className="w-4 h-4 text-amber-300" />
            <span>11月・12月限定 小岩井農場銀河イルミネーションと秀峰岩手山の雪見露天</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月盛岡つなぎ温泉の冬名湯と小岩井イルミ】<br className="hidden sm:inline" />
            銀河農場の夜・秀峰岩手山雪見露天と極上前沢牛会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            初冬の御所湖越しに白銀を纏う岩手山の絶景。開湯900年を超える名湯・つなぎ温泉と鶯宿温泉に浸かり、東北最大級の「小岩井農場 銀河農場の夜」イルミネーションと極上前沢牛・雫石牛の贅沢会席を堪能する大人の冬旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> 岩手県盛岡市繋・岩手郡雫石町（盛岡駅送迎25分）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Morioka Tsunagi Onsen Winter Elegance</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                源義家ゆかりの繋石と御所湖の静寂、北東北の冬が育む温もりの美肌湯
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            新幹線が発着するJR盛岡駅から車でわずか25分。盛岡の奥座敷として古くから親しまれてきた「つなぎ温泉」は、広大な御所湖の湖畔に旅館が建ち並ぶ情緒豊かな名湯地です。その歴史は平安時代末期、康平5年（1062年）の前九年の役に遡ります。奥州安倍氏討伐のためこの地を訪れた八幡太郎源義家が、陣中の愛馬を湖畔の穴の空いた巨石に繋ぎ、湧き出でるいで湯で愛馬の傷と自身の戦陣の疲労を癒やしたという伝説から「繋（つなぎ）」の名が付けられました。その「繋石」は今も温泉街の一角に大切に祀られ、古湯のロマンを今に伝えています。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            つなぎ温泉の最大の特徴は、pH8.5〜9.0前後の天然弱アルカリ性単純硫黄泉。天然の保湿成分として名高い「メタケイ酸」を豊富に含み、肌の古い角質を優しく落としながら潤いを与える「美肌の湯」として高い評価を得ています。湖から吹き抜ける冷涼な初冬の風を受けながら、硫黄の香る豊かな源泉露天風呂に肩まで浸かれば、冷えた体の隅々まで温もりが染み渡ります。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            さらに11月下旬から12月にかけて、車で約15分の小岩井農場では東北最大級の光の祭典「KOIWAI Winter Lights 銀河農場の夜」が開幕。澄み切った初冬の夜空の下で約100万球の光が大地を染め上げる幻想的な絶景を楽しんだ後は、宿に戻って最高級黒毛和牛「前沢牛」や「雫石牛」、三陸直送の海の幸を味わう至高の滞在が叶います。
          </p>
          
          <div className="bg-indigo-50/70 rounded-2xl p-5 border border-indigo-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-indigo-700" /> 11月・12月の旅のハイライト
              </span>
              <p className="text-xs sm:text-sm text-indigo-900 font-medium">
                御所湖越しの岩手山初冠雪・小岩井農場100万球イルミネーション・極上前沢牛すき焼き＆盛岡冷麺
              </p>
            </div>
            <a 
              href="#hotels"
              className="px-5 py-2.5 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white text-xs sm:text-sm font-bold shadow-md transition shrink-0"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Section: Spring Characteristics & Bathing */}
        <section id="spring-characteristics" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <ThermometerSun className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Natural Hot Spring Features</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                つなぎ温泉＆鶯宿温泉の泉質スペックと極上の「温まり＆美肌入浴法」
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            つなぎ温泉の源泉温度は約50℃〜65℃の高温泉で、加水をせずとも湯守の手によって適温に保たれ、贅沢に湯船へ掛け流されています。泉質は「単純硫黄温泉（低張性弱アルカリ性高温泉）」。硫黄泉特有のほのかなゆで卵のような香りと、肌に吸い付くようなとろみのある滑らかな感触が特徴です。弱アルカリ性の石鹸効果によって古い角質を落としつつ、天然保湿成分「メタケイ酸」が肌に潤いのヴェールを形成するため、入浴後は化粧水が不要なほどツルスベの肌触りになると女性旅行者からも絶大な支持を得ています。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            また、隣接する鶯宿温泉は開湯450年の歴史を持ち、傷ついたウグイスが湯で傷を癒やしたという開湯伝説が残る名湯。こちらも毎分3,000リットルを超える豊かな湧出量を誇るアルカリ性単純温泉で、刺激が少なく赤ちゃんからお年寄りまで安心して長湯を楽しめます。初冬の露天風呂では、外気の冷たさと湯船の温かさのコントラストが自律神経を整え、極上のリラックス効果をもたらします。
          </p>
        </section>

        {/* Section: Koiwai Winter Lights Special */}
        <section id="koiwai-lights-guide" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Koiwai Farm Winter Spectacular</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                東北最大級！小岩井農場『銀河農場の夜』100万球イルミネーション徹底ガイド
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            小岩井農場のまきば園を舞台に開催される冬の祭典「KOIWAI Winter Lights 銀河農場の夜」。東京ドーム数個分もの広大な大地が、約100万個のLEDイルミネーションによって幻想的な光の宇宙へと姿を変えます。宮沢賢治の童話『銀河鉄道の夜』の着想の地でもある岩手ならではの演出として、実物大のSL機関車（D51）が光り輝く「光のSL」や、全長数十メートルに及ぶ光のトンネル、満天の星空の下でライトアップされる巨大ツリーなど、見どころが満載です。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            点灯時間は例年16:00頃から。冷え込む夜の農場では、園内の「山ろく館」レストランで提供される熱々の小岩井チーズフォンデュやホットミルク、搾りたて生乳を使用した濃厚なホットココアで温まりながら散策するのがおすすめ。つなぎ温泉の各宿からは車でわずか15〜20分のため、チェックインして温泉に入った後に訪れるのが王道の楽しみ方です。
          </p>
        </section>

        {/* Section 2: Highlights of Nov-Dec */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Mountain className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Seasonal Appeal</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月のつなぎ温泉・雫石が旅人を魅了する3つの理由
              </h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-sm">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base">御所湖越しの岩手山初冠雪美</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                11月中旬以降、標高2,038mの岩手山は山頂から真っ白な雪帽子を被り始めます。湖畔の露天風呂から、静まり返る御所湖の水面に映る白銀の冠雪パノラマを眺める時間はまさに絶景。
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-sm">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base">小岩井農場『銀河農場の夜』</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                広大な小岩井農場を彩る東北随一のイルミネーション。光の迷路や巨大ツリー、光のトンネルが初冬の夜空に瞬き、温泉街から車で15分ほどでアクセスできる冬の風物詩です。
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/70 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-sm">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base">最高峰前沢牛と三陸冬海鮮</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                霜降りの芸術と称される岩手のブランド牛「前沢牛」「雫石牛」の陶板ステーキやすいすき焼き。さらに初冬に脂が乗る三陸の寒ヒラメや鮑、温かいひっつみ汁など美食の数々が集結。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section id="hotels" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Featured Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              盛岡つなぎ温泉＆鶯宿温泉 11月・12月におすすめの名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              楽天トラベルの最新APIから取得した公式データをもとに、御所湖の絶景露天・源泉掛け流し・前沢牛会席を誇る宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 flex flex-col md:flex-row"
              >
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
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
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-indigo-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-indigo-700 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="space-y-2 pt-1 border-t border-slate-100 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-indigo-900 bg-indigo-50 px-2 py-0.5 rounded shrink-0">客室の魅力</span>
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
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-700 shrink-0 mt-0.5" />
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-900 hover:bg-indigo-800 text-white text-xs sm:text-sm font-bold shadow transition group w-full sm:w-auto justify-center"
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

        {/* Section 4: Gourmet Guide */}
        <section id="gourmet" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Morioka & Shizukuishi Winter Food</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                4. 盛岡・雫石の初冬グルメ：前沢牛・雫石牛の贅と盛岡三大麺の真髄
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            岩手県の食文化は、豊かな自然と職人技が織り成す深い旨みに満ちています。冬のつなぎ温泉で絶対に味わいたいのが、全国最高峰の肉質を誇る「前沢牛」や地元雫石町が誇る「雫石牛」。きめ細やかな霜降りが舌の上でとろけ、甘みのある上質な脂が口いっぱいに広がるすき焼きや陶板焼きは、冬の温泉旅行の記憶を決定づける至高の贅沢です。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            さらに盛岡の代名詞である「盛岡三大麺」も見逃せません。冬でも温かい温泉上がりにツルッといただく強いコシの「盛岡冷麺」は、牛骨ダシの深いコクと爽やかな辛味が絶妙。また熱々の特製肉味噌を絡めて最後にチータンタン（卵スープ）で締める「盛岡じゃじゃ麺」、掛け声とともに楽しむ「わんこそば」など、麺文化の奥深さを満喫できます。
          </p>
        </section>

        {/* Section 5: Model Course */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Recommended Winter Course</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                5. 1泊2日 つなぎ温泉〜小岩井農場イルミ・盛岡麺めぐり 王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-indigo-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-indigo-800 uppercase tracking-wider">【1日目】盛岡駅到着〜小岩井農場銀河イルミネーション＆名湯雪見露天</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                12:00 JR盛岡駅到着 → 駅近くの老舗で「盛岡冷麺」ランチ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                駅前や大通りの人気店で本場の冷麺を堪能。牛骨出汁と手打ち麺のコシを体感。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                14:00 盛岡駅西口より無料送迎バスまたはレンタカーでつなぎ温泉へ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                車で約25分。チェックイン後、まずは御所湖を望む露天風呂で初冬の冷気を忘れる湯浴み。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                16:30 小岩井農場へ移動 → 『銀河農場の夜』イルミネーション鑑賞
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                宿から車で約15〜20分。日没とともに点灯する約100万球の光の回廊や光のSLを散策。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                19:30 宿に戻り極上前沢牛・雫石牛会席 → 夜の雪見露天風呂
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                とろける前沢牛のすき焼きや三陸海の幸に舌鼓。星空と湖面を眺めながら芯まで温まります。
              </p>
            </div>

            <div className="border-l-2 border-slate-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">【2日目】朝の湖畔露天風呂〜盛岡城跡公園＆赤レンガ館散策</span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                07:30 朝陽に輝く岩手山冠雪を眺めながら朝風呂 → 郷土朝食
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                御所湖の朝霧と岩手山のシルエットが織り成す絵画のような絶景を眺めながら入浴。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                09:30 御所湖畔の盛岡手づくり村散策（南部鉄器や南部せんべい焼き体験）
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                職人の技を間近で見学し、伝統の南部鉄器や焼きたての南部せんべいをお土産に購入。
              </p>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base pt-2">
                12:00 盛岡市街へ戻り「盛岡じゃじゃ麺」ランチ → 盛岡駅より新幹線で帰路へ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                レトロな赤レンガの岩手銀行赤レンガ館や盛岡城跡を散策し、充実の1泊2日を締めくくります。
              </p>
            </div>
          </div>
        </section>

        {/* Section: Climate, Clothing & Transport */}
        <section id="climate-transport" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Footprints className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Winter Travel Preparation</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の気候・おすすめの服装・冬道アクセス対策
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            盛岡・雫石エリアの冬は、朝晩を中心に氷点下まで冷え込みます。特に小岩井農場のイルミネーション鑑賞は野外を1時間以上歩くため、防寒対策が極めて重要です。防風性の高いロングダウンコート、発熱インナー、厚手の靴下、手袋、ニット帽、ネックウォーマーを必ず着用してください。また、御所湖周辺や温泉街の散策路は降雪や凍結により滑りやすくなるため、靴底に深い溝がある滑り止め付きのスノーブーツが強く推奨されます。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            お車を利用される場合、11月中旬以降は必ず全車スタッドレスタイヤの装着が必要です。特に早朝や深夜の橋の上（繋大橋など）や日陰のカーブはブラックアイスバーンになりやすいため、急ブレーキ・急ハンドルを避けた慎重な運転を心がけましょう。雪道運転に不慣れな方は、JR盛岡駅西口から発着する各旅館の無料送迎バスや路線バスを利用するのが最も安全で快適なアクセス方法です。
          </p>
        </section>

        {/* Section 6: FAQ */}
        <section id="faq" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                よくある質問（FAQ）と初冬のつなぎ温泉旅行アドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-indigo-800 font-extrabold">Q.</span>
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
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Related Tohoku & Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい東北・東日本の冬名湯＆雪景色特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月ならではの雪景色、温泉街のイルミネーション、旬の郷土グルメを味わい尽くす全国の名宿ガイドを多数公開中。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">岩手・花巻</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">花巻温泉郷 宮沢賢治ゆかりの渓谷雪見露天と前沢牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-iwate-appi-kogen-snow-resort-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">岩手・安比高原</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">安比高原 極上パウダースノーと白銀リゾートステイ</h3>
            </Link>
            <Link 
              href="/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">秋田・乳頭温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">乳頭温泉郷 秘湯の雪見風呂ときりたんぽ鍋の宿</h3>
            </Link>
            <Link 
              href="/winter-miyagi-akiu-onsen-sendai-beef-serinabe-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">宮城・秋保温泉</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">秋保温泉 名取川渓谷美と仙台牛・せり鍋会席の宿</h3>
            </Link>
            <Link 
              href="/winter-aomori-sukayu-hakkoda-yukimi-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">青森・酸ヶ湯八甲田</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">八甲田・酸ヶ湯温泉 千人風呂と豪雪白銀世界の秘湯宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-iwate-tsunagi-onsen-koiwai-illumination-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
