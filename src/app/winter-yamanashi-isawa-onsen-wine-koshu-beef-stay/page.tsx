import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Wine
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月石和温泉】富士を望む甲州名湯と甲州牛ステーキ！名宿5選',
  description: '11月3日の山梨ヌーボー解禁とともに華やぐ甲州・石和温泉。雪化粧した富士山や南アルプスを望み、毎分湧出する豊富な美肌アルカリ単純温泉に身を浸す贅沢。最高峰A5ランク甲州牛のステーキと熱々の甲州かぼちゃほうとう、できたての新酒甲州ワインを味わい尽くす初冬の美食湯宿ガイド。',
  keywords: '石和温泉 宿泊 11月 12月, 石和温泉 甲州牛 旅館, 山梨ヌーボー 温泉 宿, 石和温泉 露天風呂 おすすめ, 石和 ほうとう 温泉, 勝沼 ワイン 温泉 宿, 石和温泉 モデルコース 冬',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamanashi-isawa-onsen-wine-koshu-beef-stay/",
  },
  openGraph: {
    title: '【11・12月石和温泉】富士を望む甲州名湯と甲州牛ステーキ！名宿5選',
    description: '11月3日の山梨ヌーボー解禁とともに華やぐ甲州・石和温泉。雪化粧した富士山や南アルプスを望み、毎分湧出する豊富な美肌アルカリ単純温泉に身を浸す贅沢。最高峰A5ランク甲州牛のステーキと熱々の甲州かぼちゃほうとう、できたての新酒甲州ワインを味わい尽くす初冬の美食湯宿ガイド。',
    url: 'https://croud-travel.pages.dev/winter-yamanashi-isawa-onsen-wine-koshu-beef-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月石和温泉の新酒ワインと美肌湯】富士を望む甲州名湯と甲州牛ステーキ・冬のほうとう会席宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月石和温泉の新酒ワインと美肌湯】富士を望む甲州名湯と甲州牛ステーキ・冬のほうとう会席宿5選",
    description: "11月3日の山梨ヌーボー解禁とともに華やぐ甲州・石和温泉。雪化粧した富士山や南アルプスを望み、毎分湧出する豊富な美肌アルカリ単純温泉に身を浸す贅沢。最高峰A5ランク甲州牛のステーキと熱々の甲州かぼちゃほうとう、できたての新酒甲州ワインを味わい尽くす初冬の美食湯宿ガイド。",
  }
};

export default function IsawaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-yamanashi-isawa-onsen-wine-koshu-beef-stay#article",
        "headline": "【11・12月石和温泉の新酒ワインと美肌湯】富士を望む甲州名湯と甲州牛ステーキ・冬のほうとう会席宿5選",
        "description": "11月3日の山梨ヌーボー解禁とともに華やぐ甲州・石和温泉。雪化粧した富士山や南アルプスを望み、毎分湧出する豊富な美肌アルカリ単純温泉に身を浸す贅沢。最高峰A5ランク甲州牛のステーキと熱々の甲州かぼちゃほうとう、できたての新酒甲州ワインを味わい尽くす初冬の美食湯宿ガイド。",
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
          "@id": "https://croud-travel.pages.dev/winter-yamanashi-isawa-onsen-wine-koshu-beef-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-yamanashi-isawa-onsen-wine-koshu-beef-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "「山梨ヌーボー」とは何ですか？解禁日やおすすめの楽しみ方は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "山梨ヌーボーとは、山梨県でその年に収穫された日本固有のブドウ品種「甲州（白）」と「マスカット・ベーリーA（赤）」で造られた新酒ワインのことです。毎年11月3日に全国一斉解禁されます。フレッシュでフルーティーな香りと軽快な酸味が特徴で、11月・12月の石和温泉の旅館では、解禁されたばかりの新酒ワインを甲州牛ステーキや旬の和会席とペアリングして楽しむのが最大の醍醐味です。"
            }
          },
          {
            "@type": "Question",
            "name": "石和温泉の泉質と美肌効果の特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "石和温泉の泉質はアルカリ性単純温泉で、pH8.5〜9.1の高アルカリ性を誇る美肌の湯です。無色透明で無臭、肌の古い角質をやさしく落としてツルツルにするクレンジング効果があります。刺激が少なく肌に吸い付くように優しいため、長湯をしても湯疲れしにくく、湯冷めもしにくいため初冬の冷え性改善に最適です。"
            }
          },
          {
            "@type": "Question",
            "name": "冬（11月・12月）の石和温泉の気候と富士山鑑賞のポイントは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "甲府盆地に位置する石和温泉は、年間を通じて晴天率が非常に高い地域です。11月・12月は特に空気が乾燥して澄み渡るため、雪化粧をまとった富士山や南アルプス連峰が最も美しくくっきりと見える絶好の季節です。11月平均気温は約10℃、12月は約4℃で、朝晩は氷点下に冷え込みます。厚手のダウンコートやマフラーなどの防寒対策をお忘れなく。"
            }
          },
          {
            "@type": "Question",
            "name": "都心（東京）から石和温泉へのアクセス方法は？雪道運転は必要？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "電車の場合はJR新宿駅からJR中央線特急「あずさ」「かいじ」で石和温泉駅まで直通約1時間30分とアクセス抜群です。お車の場合は中央自動車道の一宮御坂ICから温泉街まで約10分。甲府盆地の平野部にあるため、11月・12月前半に温泉街で大雪が積もることは稀ですが、12月中旬以降や山間部・勝沼方面へ足を伸ばす場合は念のためスタッドレスタイヤ装着が推奨されます。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-yamanashi-isawa-onsen-wine-koshu-beef-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "石和温泉　華やぎの章　慶山",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19894%2F19894.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "石和温泉　銘石の宿　かげつ",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16653%2F16653.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "石和温泉　糸柳こやど　ゆわ",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20033%2F20033.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "シャトレーゼホテル　旅館　富士野屋",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9121%2F9121.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "銘庭の宿　ホテル甲子園",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18659%2F18659.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "石和温泉　華やぎの章　慶山",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19894/19894.jpg",
              rating: 4.71,
              reviews: 1997,
              price: "¥16,500〜",
              access: "JR中央本線石和温泉駅より徒歩5分、送迎有（要予約）。中央自動車道一宮御坂ICより10分",
              special: "石和温泉駅から徒歩で行ける好立地、県下最大の温泉郷の中にあって規模も施設も充実の館内",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19894%2F19894.html",
              story: "石和温泉駅から徒歩約5分、温泉街の中心に堂々たる威容を誇る老舗旅館「華やぎの章 慶山（けいざん）」。楽天トラベルでも4.71という圧倒的な高評価を維持する名宿です。宿の誇りは、敷地内から自噴する豊富な自家源泉を贅沢にかけ流しにした広大な大浴殿「六花仙（ろっかせん）」と野趣あふれる庭園露天風呂。pH9.1を誇る高アルカリ性の湯は、湯上がりに肌がまるで一皮むけたようにつるつるになる「美肌の湯」。毎晩ロビーで開催される大迫力の「風林火山甲州太鼓」の実演演奏は、旅の夜を最高潮に盛り上げてくれます。",
              roomTip: "自家源泉かけ流しの客室露天風呂を備えた特別室が人気。誰にも邪魔されず、好きな時に何度でも名湯を独占できる贅沢が味わえます。",
              gourmetTip: "料理人が目の前で焼き上げる極上の「甲州牛ステーキ」が自慢の季節会席。サシの融点が低く芳醇な香りと甘みが口いっぱいに広がります。山梨ヌーボー（甲州新酒ワイン）とのマリアージュも完璧です。",
              highlights: [
                "自噴自家源泉かけ流しの大浴場「六花仙」＆毎晩開催の風林火山甲州太鼓ショー",
                "pH9.1を誇る圧倒的ツルツル美肌の湯＆石和温泉駅徒歩5分の抜群の立地",
                "最高峰A5ランク甲州牛ステーキと山梨ヌーボー新酒ワインのマリアージュ"
              ]
            },
            {
              id: 2,
              name: "石和温泉　銘石の宿　かげつ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16653/16653.jpg",
              rating: 4.48,
              reviews: 1191,
              price: "¥9,460〜",
              access: "JR中央線 石和温泉駅より徒歩20分（北口より無料送迎有）／中央道 一宮御坂ICより約10分／昭和ICより約30分",
              special: "全国から集めた巨石・奇石・銘石と現代造園技術の粋を凝らして造られた壮観な日本庭園！気品ある空間を♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16653%2F16653.html",
              story: "全国各地から集められた銘石、巨岩、奇岩と、約5,000坪もの広大な敷地に広がる日本庭園が圧巻の「銘石の宿 かげつ」。一歩足を踏み入れると、滝の音と池を優雅に泳ぐ錦鯉、初冬の静寂が旅人を非日常へと誘います。大浴場や大露天風呂にも贅沢に巨岩が配され、自然の岩肌に囲まれながら浸かるアルカリ単純温泉は格別の心地よさ。冬の澄んだ夜空を見上げながらの露天風呂は、日頃のストレスを完全に洗い流してくれます。日本の伝統美と贅を尽くした建築美は、大人の記念日旅行に最適です。",
              roomTip: "広大な日本庭園に面した純和風客室がおすすめ。障子を開ければ、職人が丹精込めて手入れした庭園の石と緑のパノラマが目の前に広がります。",
              gourmetTip: "山梨の旬の味覚を優雅に仕立てた「かげつ甲州牛会席」。きめ細やかな霜降りの甲州牛サーロイン陶板焼きをメインに、甲斐サーモンの造りや季節の炊き込みご飯など、五感で味わう至高の日本料理が揃います。",
              highlights: [
                "約5,000坪の圧巻の銘石日本庭園＆巨岩大露天風呂で味わう非日常の静寂",
                "全国の名石と錦鯉が織りなす伝統建築美＆記念日や特別な旅行に最適な格式",
                "極上の甲州牛サーロイン陶板焼きと甲斐サーモンが彩る伝統会席料理"
              ]
            },
            {
              id: 3,
              name: "石和温泉　糸柳こやど　ゆわ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/20033/20033.jpg",
              rating: 4.69,
              reviews: 824,
              price: "¥12,100〜",
              access: "JR中央本線 石和温泉駅・送迎あり／中央自動車道一宮・御坂ICより石和へ車で約15分",
              special: "心ほどける、くつろぎの時を。嵐の湯に癒される全19室の小さな宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20033%2F20033.html",
              story: "明治12（1879）年創業の老舗「糸柳」の別邸として誕生した、大人のための全室わずか数室の贅沢な隠れ宿「糸柳こやど ゆわ」。楽天トラベルでも4.69と極めて高い満足度を誇ります。自家源泉から引き込む新鮮な美肌湯をゆったりと楽しめる温泉処や、畳敷きにシモンズ製高級ベッドを配した洗練された和モダン客室が魅力。大型ホテルにはない静けさと、細やかで温かなおもてなしがプライベートな休日を上質に彩ってくれます。女性同士の温泉旅やご夫婦の寛ぎステイに絶大な支持を集めています。",
              roomTip: "テラス付きの和モダンベッドルームや半露天風呂付き客室がおすすめ。木の温もりに包まれた空間で、時間を忘れてリラックスできます。",
              gourmetTip: "糸柳伝統の出汁をベースにした創作和食会席。甲州牛の石焼きやすき焼きに加え、糸柳名物の伝統の朝食「名物ジョイアルカレー」や季節の野菜料理など、一品一品に料理人の真心が感じられる美食です。",
              highlights: [
                "明治創業の老舗糸柳の別邸＆全室わずか数室の洗練された和モダン大人の隠れ宿",
                "シモンズベッド導入の快適客室＆自家源泉の滑らかな湯と細やかな心配り",
                "甲州牛石焼き会席＆創業以来受け継がれる糸柳名物ジョイアルカレー"
              ]
            },
            {
              id: 4,
              name: "シャトレーゼホテル　旅館　富士野屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9121/9121.jpg",
              rating: 4.36,
              reviews: 2427,
              price: "¥7,700〜",
              access: "JR「石和温泉駅」から無料送迎車で5分程／中央道 「一宮御坂IC」または「笛吹八代スマートIC」から車で10分程",
              special: "【PH値8.8】肌に優しい「アルカリ性単純温泉」で最大7つの湯巡り",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9121%2F9121.html",
              story: "笛吹川の清流沿いに佇み、創業以来「完全源泉100％かけ流し」にこだわり続ける名湯宿「富士野屋」。菓子メーカー・シャトレーゼグループのホテルとしてリニューアルし、伝統の温泉情緒とシャトレーゼならではの嬉しいスイーツ体験が見事に融合しています。大浴場「八文字の湯」や屋上展望露天風呂には、一切の加水・加温・循環を行わない極上の源泉が絶え間なく注がれ、飲泉も可能。湯上がりのラウンジでは、シャトレーゼ特製の淹れたてワインやスイーツが楽しめるユニークな魅力が話題を呼んでいます。",
              roomTip: "笛吹川を眼下に望むリバービューの和洋室が人気。川のせせらぎを聞きながら、初冬の澄んだ大気と遠くの山並みを眺めて過ごせます。",
              gourmetTip: "山梨の郷土の味覚をスタイリッシュにアレンジした会席料理。富士桜ポークや甲州ワインビーフを使ったグリル料理、契約農家の採れたて冬野菜に加え、デザートにはシャトレーゼ特製のパティシエ特製ケーキが並びます。",
              highlights: [
                "笛吹川沿いの源泉100％完全かけ流し＆シャトレーゼ特製スイーツと美肌湯",
                "屋上展望露天風呂や飲泉処完備＆ウェルカムスイーツやワインサービス",
                "甲州ワインビーフや富士桜ポーク会席＆パティシエ特製デザート"
              ]
            },
            {
              id: 5,
              name: "銘庭の宿　ホテル甲子園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18659/18659.jpg",
              rating: 4.13,
              reviews: 1063,
              price: "¥7,000〜",
              access: "ＪＲ中央本線石和温泉駅／中央道一宮・御坂ＩＣ（Ｒ２０で１０分）",
              special: "喧騒を離れ、庭園の美と貸切風呂・岩盤浴・サウナで整う。大切な人と静けさに満たされる特別な一日を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18659%2F18659.html",
              story: "四季折々の情緒を湛える約千坪の日本庭園を囲むように建つ、落ち着きある湯宿「銘庭の宿 ホテル甲子園」。庭園の池には色鮮やかな錦鯉が群れ泳ぎ、初冬の静かな風情を醸し出しています。宿の温泉は肌に優しいアルカリ性単純温泉で、広々とした大浴場のほか、庭園の緑を間近に臨む岩露天風呂や檜風呂を完備。無料の貸切露天風呂も用意されており、ご家族やカップルで気兼ねなく名湯を堪能できます。リーズナブルでありながら充実した設備とおもてなしが揃うコストパフォーマンス抜群の宿です。",
              roomTip: "日本庭園を一望する和室や、露天風呂付き客室がおすすめ。夜にはライトアップされた庭園の木々と池の風情が旅情を深めてくれます。",
              gourmetTip: "山梨名物「甲州牛のすき焼き」または陶板焼きをメインとした季節の会席。さらに熱々の自家製「甲州かぼちゃほうとう」が身体の芯まで温めてくれます。勝沼直送の地ワインとともに気軽に楽しめます。",
              highlights: [
                "千坪の日本庭園と錦鯉泳ぐ池を望む宿＆無料貸切風呂と名物ほうとう会席",
                "庭園露天風呂付き客室あり＆勝沼ワイナリー巡りにも最適な高コスパの滞在",
                "熱々の甲州かぼちゃほうとう鍋と甲州牛すき焼き・勝沼地ワインの夕食"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-purple-900 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="冬の石和温泉・甲府盆地から望む雪化粧の富士山と湯けむり"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/90 text-purple-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-purple-700/50">
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span>11月・12月限定 山梨ヌーボー解禁＆甲州牛特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月石和温泉の新酒ワインと美肌湯】<br className="hidden sm:inline" />
            富士を望む甲州名湯と甲州牛ステーキ・冬のほうとう会席宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            11月3日解禁の山梨ヌーボーと雪化粧の富士山。毎分湧出する豊富な美肌アルカリ単純泉に癒やされ、A5ランク甲州牛のステーキと熱々の甲州かぼちゃほうとうに舌鼓を打つ極上の初冬ステイ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-purple-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-purple-400" /> 山梨県笛吹市（石和温泉）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月石和温泉】富士を望む甲州名湯と甲州牛ステーキ！名宿5選","item":"https://croud-travel.pages.dev/winter-yamanashi-isawa-onsen-wine-koshu-beef-stay"}]}) }}
      />
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-purple-100">
            <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-800">
              <Wine className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-800 uppercase tracking-widest">Wine & Hot Spring Resort</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                ブドウ畑から生まれた青空温泉。新酒ワインの香りと美肌湯に酔いしれる冬
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            山梨県甲府盆地の東部、笛吹川の清流沿いに広がる「石和（いさわ）温泉」。昭和36（1961）年、ブドウ畑の井戸掘削中に突如として毎分約2,000リットルもの高温の温泉が吹き出し、川へ流れ出して「青空温泉」として一躍全国にその名を知らしめたドラマチックな歴史を持ちます。新日本観光地100選で第3位に選出された、甲州を代表する温泉郷です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            石和温泉の11月・12月は、美食とワイン愛好家にとって年間で最も心躍るシーズン。毎年11月3日、山梨県産ブドウ100％で仕込まれた新酒ワイン「山梨ヌーボー（甲州＆マスカット・ベーリーA）」が一斉に解禁されます。隣接する日本屈指のワイン銘醸地・勝沼のワイナリーから届けられる搾りたての新酒ワインは、みずみずしくフルーティーな香りと軽快な酸味が魅力。温泉宿の夕食で、山梨ヌーボーとともに味わう最高峰黒毛和牛「甲州牛」のステーキは、一度味わえば忘れられない極上の幸福感をもたらします。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            泉質はpH8.5〜9.1を誇る高アルカリ性単純温泉。無色透明で刺激が少なく、肌の古い角質をやさしく包み込んでつるつるに仕上げる「美肌の湯」として女性にも大人気です。初冬の澄み切った青空の下、遠く雪化粧した富士山や南アルプス連峰を望みながら手足を伸ばす露天風呂の心地よさは格別。冷えた身体を煮込み鍋で温めてくれる郷土名物「甲州かぼちゃほうとう」とともに、五感すべてが満たされる至福の冬旅をお楽しみください。
          </p>
          
          <div className="bg-purple-50/70 rounded-2xl p-5 border border-purple-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-purple-700" />
                <span>11月・12月 石和温泉の旅のハイライト</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                11月3日山梨ヌーボー新酒解禁・雪化粧の富士山絶景・pH9超のツルツル美肌湯・A5ランク甲州牛＆熱々ほうとう
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-purple-900 text-white font-bold text-xs whitespace-nowrap shadow-sm">
              新宿から特急あずさ・かいじで直通約90分
            </span>
          </div>
        </section>

        {/* Climate & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-stone-100 text-stone-700">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-800 uppercase tracking-widest">Travel Planning Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                初冬の甲州 気候・服装・ワイナリー巡りの極意
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-purple-800 flex items-center gap-1.5">
                <Snowflake className="w-4 h-4 text-purple-700" /> 盆地の気候と服装
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                甲府盆地特有の内陸性気候。晴天率が高く日中はポカポカ陽気ですが、日没後は急激に放射冷却で冷え込みます。11月平均約10℃、12月は約4℃。厚手のコートやダウンジャケット、手袋を携帯しましょう。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-purple-800 flex items-center gap-1.5">
                <Wine className="w-4 h-4 text-purple-700" /> 勝沼ワイナリー巡り
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                石和温泉駅から車や電車で約15分の勝沼エリアには30軒以上のワイナリーが集結。試飲を楽しむなら電車（中央本線）やタクシーの利用がおすすめ。ぶどうの丘では約200種類のワインをタートヴァンで試飲できます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-purple-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-700" /> 車と電車のアクセス
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                中央道一宮御坂ICから約10分。平野部の石和温泉街は11月・12月に積雪することは稀ですが、笹子峠や御坂峠を越えるルートや12月下旬は夜間路面凍結の可能性があるため、冬用タイヤ装着が安心です。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold text-purple-800 uppercase tracking-widest bg-purple-100/60 px-3.5 py-1 rounded-full">
              SELECTED LUXURY HOTELS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900">
              【11・12月】石和温泉の極上滞在を叶える名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto">
              楽天トラベルで4.1〜4.71の最高水準の評価を誇る、美肌源泉・甲州牛会席・新酒ワイン・日本庭園のすべてに秀でた名旅館を厳選しました。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200/80 hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row"
              >
                {/* Image Box */}
                <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-full bg-stone-100">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-purple-300 font-extrabold px-3 py-1.5 rounded-xl text-xs sm:text-sm shadow-md border border-purple-500/30">
                    第{hotel.id}位 厳選名宿
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-stone-200/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-500 font-bold block">楽天トラベル評価</span>
                      <div className="flex items-center gap-1.5 text-purple-800 font-extrabold text-base">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        <span>{hotel.rating}</span>
                        <span className="text-[11px] text-stone-400 font-normal">({hotel.reviews}件)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-stone-500 font-bold block">参考宿泊料金（1名）</span>
                      <span className="text-stone-900 font-black text-sm sm:text-base text-purple-900">{hotel.price}</span>
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] text-purple-800 font-bold tracking-wider uppercase block mb-1">
                        {hotel.special}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-purple-700" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <p className="text-stone-700 text-sm leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Tips */}
                    <div className="space-y-2.5 pt-2">
                      <div className="bg-purple-50/60 rounded-xl p-3 border border-purple-200/60 text-xs leading-relaxed text-stone-700">
                        <strong className="text-purple-900 font-bold flex items-center gap-1 mb-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-700" /> おすすめ客室の選び方:
                        </strong>
                        {hotel.roomTip}
                      </div>
                      <div className="bg-stone-50 rounded-xl p-3 border border-stone-200 text-xs leading-relaxed text-stone-700">
                        <strong className="text-stone-900 font-bold flex items-center gap-1 mb-0.5">
                          <Utensils className="w-3.5 h-3.5 text-purple-700" /> 夕食・ご当地美食のこだわり:
                        </strong>
                        {hotel.gourmetTip}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">この宿の注目ポイント</span>
                      <ul className="space-y-1">
                        {hotel.highlights.map((item: string, hIdx: number) => (
                          <li key={hIdx} className="text-xs text-stone-600 flex items-start gap-1.5">
                            <span className="text-purple-700 font-bold mt-0.5">✔</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking Link */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-stone-500 hidden sm:inline">
                      ※空室状況・最新プランは楽天トラベル公式でご確認ください
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-800 to-stone-900 hover:from-purple-900 hover:to-black text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
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

        {/* 1泊2日 理想のモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-800">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-800 uppercase tracking-widest">Model Course</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                【1泊2日】山梨ヌーボーと富士山絶景・美肌湯を巡る甲州旅
              </h2>
            </div>
          </div>

          <div className="relative border-l-2 border-purple-300 ml-4 pl-6 space-y-8 my-6">
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-purple-700 ring-4 ring-purple-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-purple-800 tracking-wider">1日目 12:00</span>
                <h3 className="text-base font-bold text-stone-900">勝沼ぶどうの丘で新酒ワインの試飲と展望ランチ</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  勝沼ぶどうの丘へ到着。地下ワインカーヴで解禁されたばかりの「山梨ヌーボー」を試飲。展望レストランで甲府盆地と雪を被った南アルプス連峰のパノラマを眺めながらランチを楽しみます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-purple-700 ring-4 ring-purple-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-purple-800 tracking-wider">1日目 14:00</span>
                <h3 className="text-base font-bold text-stone-900">老舗ワイナリー見学と石和温泉へ移動</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  日本のワイン発祥の地・勝沼の歴史あるワイナリーへ立ち寄り、ブドウ畑や樽熟成庫を見学。お気に入りの新酒ワインを購入後、車または電車で石和温泉へ向かいます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-purple-700 ring-4 ring-purple-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-purple-800 tracking-wider">1日目 15:30</span>
                <h3 className="text-base font-bold text-stone-900">宿にチェックイン＆高アルカリ性「美肌の湯」を満喫</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  宿に到着後、広々とした庭園露天風呂や大浴場へ。pH9前後のツルツルとした名湯が肌を包み込み、湯上がりは肌がしっとりすべすべに。冷えた身体の芯までぽかぽかに温まります。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-purple-700 ring-4 ring-purple-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-purple-800 tracking-wider">1日目 18:30</span>
                <h3 className="text-base font-bold text-stone-900">A5甲州牛ステーキと山梨ヌーボーの贅沢ディナー</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  夕食は山梨が誇る最高峰「甲州牛」のステーキや陶板焼き会席。とろけるような肉の甘みと、フレッシュな甲州ワイン新酒のフルーティーな酸味が抜群の調和を奏でます。食後には熱々のほうとうで身体を温めます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-purple-700 ring-4 ring-purple-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-purple-800 tracking-wider">2日目 08:00</span>
                <h3 className="text-base font-bold text-stone-900">冬晴れの朝露天風呂と山梨の郷土健康朝食</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  澄み切った朝の冷気を感じながら朝露天風呂へ。朝食には炊きたてのご飯、地元養鶏場の新鮮卵かけご飯、甲州味噌の具だくさん味噌汁を堪能します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-purple-700 ring-4 ring-purple-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-purple-800 tracking-wider">2日目 10:30</span>
                <h3 className="text-base font-bold text-stone-900">新倉山浅間公園へ・雪化粧の富士山と五重塔の絶景</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  チェックアウト後は富士吉田方面へドライブ。世界的な絶景スポット「新倉山浅間公園」へ。398段の階段を登ると、朱塗りの五重塔「忠霊塔」と純白に輝く雄大な富士山が織りなす日本一の絶景に出会えます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-800 uppercase tracking-widest">Q & A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                石和温泉の初冬旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-purple-800 font-extrabold">Q.</span>
                <span>「山梨ヌーボー」とは何ですか？解禁日やおすすめの楽しみ方は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                山梨ヌーボーとは、山梨県でその年に収穫された日本固有のブドウ品種「甲州（白）」と「マスカット・ベーリーA（赤）」で造られた新酒ワインのことです。毎年11月3日に全国一斉解禁されます。フレッシュでフルーティーな香りと軽快な酸味が特徴で、11月・12月の石和温泉の旅館では、解禁されたばかりの新酒ワインを甲州牛ステーキや旬の和会席とペアリングして楽しむのが最大の醍醐味です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-purple-800 font-extrabold">Q.</span>
                <span>石和温泉の泉質と美肌効果の特徴は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                石和温泉の泉質はアルカリ性単純温泉で、pH8.5〜9.1の高アルカリ性を誇る美肌の湯です。無色透明で無臭、肌の古い角質をやさしく落としてツルツルにするクレンジング効果があります。刺激が少なく肌に吸い付くように優しいため、長湯をしても湯疲れしにくく、湯冷めもしにくいため初冬の冷え性改善に最適です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-purple-800 font-extrabold">Q.</span>
                <span>冬（11月・12月）の石和温泉の気候と富士山鑑賞のポイントは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                甲府盆地に位置する石和温泉は、年間を通じて晴天率が非常に高い地域です。11月・12月は特に空気が乾燥して澄み渡るため、雪化粧をまとった富士山や南アルプス連峰が最も美しくくっきりと見える絶好の季節です。11月平均気温は約10℃、12月は約4℃で、朝晩は氷点下に冷え込みます。厚手のダウンコートやマフラーなどの防寒対策をお忘れなく。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-purple-800 font-extrabold">Q.</span>
                <span>都心（東京）から石和温泉へのアクセス方法は？雪道運転は必要？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                電車の場合はJR新宿駅からJR中央線特急「あずさ」「かいじ」で石和温泉駅まで直通約1時間30分とアクセス抜群です。お車の場合は中央自動車道の一宮御坂ICから温泉街まで約10分。甲府盆地の平野部にあるため、11月・12月前半に温泉街で大雪が積もることは稀ですが、12月中旬以降や山間部・勝沼方面へ足を伸ばす場合は念のためスタッドレスタイヤ装着が推奨されます。
              </p>
            </div>
          </div>
        </section>

        {/* Internal Link Mesh */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-purple-800 uppercase tracking-widest block">EXPLORE MORE WINTER DESTINATIONS</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい！11月・12月の冬特集＆甲信越・富士見名湯ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/winter-kanagawa-hakone-fuji-view-onsen-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-purple-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-purple-800 uppercase block mb-1">富士見名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-purple-800 transition line-clamp-2">
                【箱根芦ノ湖】冬晴れの雪化粧富士を望む絶景露天風呂＆極上リゾート宿
              </h3>
            </Link>

            <Link 
              href="/winter-fujikawaguchiko-momiji-fuji-view-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-purple-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-purple-800 uppercase block mb-1">山梨の富士絶景</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-purple-800 transition line-clamp-2">
                【河口湖】もみじ回廊ライトアップと逆さ富士を望む湖畔の温泉旅館
              </h3>
            </Link>

            <Link 
              href="/winter-nagano-achimura-hirugami-starry-sky-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-purple-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-purple-800 uppercase block mb-1">信州の星空名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-purple-800 transition line-clamp-2">
                【阿智村・昼神温泉】日本一の星空ナイトツアーと極上美肌湯・南信州冬味覚
              </h3>
            </Link>

            <Link 
              href="/winter-shizuoka-shuzenji-late-momiji-bamboo-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-purple-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-purple-800 uppercase block mb-1">伊豆の小京都</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-purple-800 transition line-clamp-2">
                【修善寺温泉】遅咲き紅葉と竹林の小径・伊豆牛会席と名湯宿
              </h3>
            </Link>

            <Link 
              href="/winter-gunma-ikaho-stone-steps-joshu-beef-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-purple-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-purple-800 uppercase block mb-1">上州の名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-purple-800 transition line-clamp-2">
                【伊香保温泉】365段の石段街と黄金の湯・上州牛会席を味わう名旅館
              </h3>
            </Link>

            <Link 
              href="/winter-gifu-gero-onsen-fireworks-hida-beef-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-purple-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-purple-800 uppercase block mb-1">東海の三名泉</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-purple-800 transition line-clamp-2">
                【下呂温泉】冬花火ミュージカルと日本三名泉の美肌湯・飛騨牛会席
              </h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-yamanashi-isawa-onsen-wine-koshu-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
