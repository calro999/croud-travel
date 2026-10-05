import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Heart, ShoppingBag, Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月初冬】枕草子三名泉「七栗の湯」の極上美肌ぬる湯・最高峰伊賀牛すき焼き＆初冬の赤目四十八滝を巡る名宿5選",
  description: "11月中旬から12月の初冬、伊勢平野から布引山地へと連なる三重県津市榊原町は、山裾の紅葉が静かに散り敷き、凛とした澄んだ空気が漂う季節を迎えます。平安の才女・清少納言が『枕草子』において「湯は七栗の湯、有馬の湯、玉造の湯」と日本三名泉の筆頭に讃えたのが、ここ榊原温泉（古名：七栗の湯）。かつて伊勢神宮に参拝する皇族や貴族が、身を清める「湯垢離（ゆごり）」の地として栄えた聖なる名湯です。源泉温度約31〜32℃の「生源泉ぬる湯」は、pH9.4〜9.6を誇る無色透明のアルカリ性単純温泉。浸かった瞬間に肌へ吸い付くようなトロトロの湯触りは、まさに天然の美容液そのものです。加温された湯船とぬる湯源泉を交互に浸かる「温冷交互浴」は、初冬の冷えや自律神経を優しく整え、体の芯から極上のリラックスへ誘います。さらに西へ車を走らせれば、国の名勝「赤目四十八滝」の初冬渓谷美と「赤目渓谷竹あかり」の幻想的なライトアップ。夕食には、市場にほとんど出回らない肉の芸術品「伊賀牛」のとろけるすき焼きや陶板焼きが舌鼓を打たせます。心身を極限まで清める初冬の美肌温泉リトリートを叶える厳選5宿をご紹介します。",
  keywords: '榊原温泉 宿泊, 枕草子 七栗の湯, 榊原館 ぬる湯, 伊賀牛 すき焼き 宿, 赤目四十八滝 温泉, 赤目温泉 対泉閣, 11月 12月 三重温泉旅行, ぬる湯 温冷交互浴',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-mie-sakakibara-onsen-akame-igagyu-bihada-stay/"
  },
  openGraph: {
    title: "【11・12月初冬】枕草子三名泉「七栗の湯」の極上美肌ぬる湯・最高峰伊賀牛すき焼き＆初冬の赤目四十八滝を巡る名宿5選",
    description: "11月中旬から12月の初冬、伊勢平野から布引山地へと連なる三重県津市榊原町は、山裾の紅葉が静かに散り敷き、凛とした澄んだ空気が漂う季節を迎えます。平安の才女・清少納言が『枕草子』において「湯は七栗の湯、有馬の湯、玉造の湯」と日本三名泉の筆頭に讃えたのが、ここ榊原温泉（古名：七栗の湯）。かつて伊勢神宮に参拝する皇族や貴族が、身を清める「湯垢離（ゆごり）」の地として栄えた聖なる名湯です。源泉温度約31〜32℃の「生源泉ぬる湯」は、pH9.4〜9.6を誇る無色透明のアルカリ性単純温泉。浸かった瞬間に肌へ吸い付くようなトロトロの湯触りは、まさに天然の美容液そのものです。加温された湯船とぬる湯源泉を交互に浸かる「温冷交互浴」は、初冬の冷えや自律神経を優しく整え、体の芯から極上のリラックスへ誘います。さらに西へ車を走らせれば、国の名勝「赤目四十八滝」の初冬渓谷美と「赤目渓谷竹あかり」の幻想的なライトアップ。夕食には、市場にほとんど出回らない肉の芸術品「伊賀牛」のとろけるすき焼きや陶板焼きが舌鼓を打たせます。心身を極限まで清める初冬の美肌温泉リトリートを叶える厳選5宿をご紹介します。",
    url: 'https://croud-travel.com/winter-mie-sakakibara-onsen-akame-igagyu-bihada-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '榊原温泉の清らかなぬる湯と赤目渓谷の初冬風景'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月初冬】枕草子三名泉「七栗の湯」の極上美肌ぬる湯・最高峰伊賀牛すき焼き＆初冬の赤目四十八滝を巡る名宿5選",
    description: "11月中旬から12月の初冬、伊勢平野から布引山地へと連なる三重県津市榊原町は、山裾の紅葉が静かに散り敷き、凛とした澄んだ空気が漂う季節を迎えます。平安の才女・清少納言が『枕草子』において「湯は七栗の湯、有馬の湯、玉造の湯」と日本三名泉の筆頭に讃えたのが、ここ榊原温泉（古名：七栗の湯）。かつて伊勢神宮に参拝する皇族や貴族が、身を清める「湯垢離（ゆごり）」の地として栄えた聖なる名湯です。源泉温度約31〜32℃の「生源泉ぬる湯」は、pH9.4〜9.6を誇る無色透明のアルカリ性単純温泉。浸かった瞬間に肌へ吸い付くようなトロトロの湯触りは、まさに天然の美容液そのものです。加温された湯船とぬる湯源泉を交互に浸かる「温冷交互浴」は、初冬の冷えや自律神経を優しく整え、体の芯から極上のリラックスへ誘います。さらに西へ車を走らせれば、国の名勝「赤目四十八滝」の初冬渓谷美と「赤目渓谷竹あかり」の幻想的なライトアップ。夕食には、市場にほとんど出回らない肉の芸術品「伊賀牛」のとろけるすき焼きや陶板焼きが舌鼓を打たせます。心身を極限まで清める初冬の美肌温泉リトリートを叶える厳選5宿をご紹介します。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function MieSakakibaraAkameWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-mie-sakakibara-onsen-akame-igagyu-bihada-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.com/"
        },
        "headline": "【11・12月初冬】枕草子三名泉「七栗の湯」の極上美肌ぬる湯・最高峰伊賀牛すき焼き＆初冬の赤目四十八滝を巡る名宿5選",
        "description": "11月中旬から12月の初冬、伊勢平野から布引山地へと連なる三重県津市榊原町は、山裾の紅葉が静かに散り敷き、凛とした澄んだ空気が漂う季節を迎えます。平安の才女・清少納言が『枕草子』において「湯は七栗の湯、有馬の湯、玉造の湯」と日本三名泉の筆頭に讃えたのが、ここ榊原温泉（古名：七栗の湯）。かつて伊勢神宮に参拝する皇族や貴族が、身を清める「湯垢離（ゆごり）」の地として栄えた聖なる名湯です。源泉温度約31〜32℃の「生源泉ぬる湯」は、pH9.4〜9.6を誇る無色透明のアルカリ性単純温泉。浸かった瞬間に肌へ吸い付くようなトロトロの湯触りは、まさに天然の美容液そのものです。加温された湯船とぬる湯源泉を交互に浸かる「温冷交互浴」は、初冬の冷えや自律神経を優しく整え、体の芯から極上のリラックスへ誘います。さらに西へ車を走らせれば、国の名勝「赤目四十八滝」の初冬渓谷美と「赤目渓谷竹あかり」の幻想的なライトアップ。夕食には、市場にほとんど出回らない肉の芸術品「伊賀牛」のとろけるすき焼きや陶板焼きが舌鼓を打たせます。心身を極限まで清める初冬の美肌温泉リトリートを叶える厳選5宿をご紹介します。",
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.com/winter-mie-sakakibara-onsen-akame-igagyu-bihada-stay",
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
              "name": "榊原温泉　まろき湯の宿　湯元　榊原舘",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/39548/39548.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39548%2F39548.html",
              "priceRange": "¥15,817〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "三重県",
                "addressLocality": "津市榊原町",
                "streetAddress": "津市榊原町5970",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.20",
                "reviewCount": 1427
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "榊原温泉　旅館　清少納言",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/37898/37898.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37898%2F37898.html",
              "priceRange": "¥8,250〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "三重県",
                "addressLocality": "津市榊原町",
                "streetAddress": "津市榊原町6010",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "3.96",
                "reviewCount": 775
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "榊原温泉　湯の瀬",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/184544/184544.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184544%2F184544.html",
              "priceRange": "¥3,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "三重県",
                "addressLocality": "津市榊原町",
                "streetAddress": "津市榊原町6103",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.21",
                "reviewCount": 39
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "伊賀のかくれ宿　赤目温泉隠れの湯　対泉閣",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7155/7155.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7155%2F7155.html",
              "priceRange": "¥15,950〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "三重県",
                "addressLocality": "名張市赤目町",
                "streetAddress": "名張市赤目町長坂682番地",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.42",
                "reviewCount": 802
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "赤目温泉　山の湯　湯元赤目　山水園",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7624/7624.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7624%2F7624.html",
              "priceRange": "¥9,900〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "三重県",
                "addressLocality": "名張市赤目町",
                "streetAddress": "名張市赤目町柏原1203",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.45",
                "reviewCount": 502
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
            "name": "清少納言が『枕草子』で讃えた「七栗の湯」とは榊原温泉のこと？その歴史と由来は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、平安時代の随筆『枕草子』第117段に「湯は七栗の湯、有馬の湯、玉造の湯」と記されており、この「七栗（ななくり）の湯」が現在の三重県津市にある「榊原温泉」のことです。有馬温泉（兵庫）、玉造温泉（島根）と並ぶ「日本三名泉」の筆頭として平安貴族に愛されました。また、古来より伊勢神宮に参拝する前に榊原の温泉に入って身と心を清める「湯垢離（ゆごり）」の神聖な場所として重用されてきた歴史を持ちます。"
            }
          },
          {
            "@type": "Question",
            "name": "榊原温泉の泉質の特徴と「ぬる湯・温冷交互浴」の正しい入浴法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "榊原温泉の泉質はアルカリ性単純温泉で、pH値は9.4〜9.6という極めて高いアルカリ度を誇ります。無色透明で、湯の中に手を入れた瞬間にトロリとした美容液をまとったような感触が広がります。源泉温度が約31℃〜32℃と体温よりやや低めの「ぬる湯」であることが最大の特徴。加温された約41℃の湯船に5〜10分浸かって体を十分に温めた後、31℃の生源泉風呂に3〜5分身を浸す「温冷交互浴」を2〜3回繰り返すことで、血管が拡張・収縮して血行が促進され、自律神経が整って深い睡眠と極上の美肌効果が得られます。"
            }
          },
          {
            "@type": "Question",
            "name": "市場にほとんど出回らない「幻の伊賀牛」とはどんなお肉？味の特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「伊賀牛（いがぎゅう）」は、伊賀盆地の寒暖差の激しい気候と清らかな伏流水で丹精込めて育てられた黒毛和牛です。肉質は非常に柔らかく、脂の融点が低いためくどさがなく、赤身本来の濃厚な旨味と上品な甘みが口いっぱいに広がります。その生産量の約8割が伊賀地域や三重県内で消費されるため、「幻の牛肉」とも称されます。すき焼き、陶板石焼き、しゃぶしゃぶで味わうと、肉の繊維がほろりと解ける至福の美味しさを実感できます。"
            }
          },
          {
            "@type": "Question",
            "name": "初冬の「赤目四十八滝」の散策コースや「竹あかり」ライトアップの開催情報は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "赤目四十八滝は、室生赤目青山国定公園に位置する往復約3〜4時間の清流渓谷遊歩道です。11月下旬の紅葉の余韻から12月の初冬にかけては、観光客が落ち着き、苔むした岩肌や澄んだエメラルドグリーンの滝壺、凛とした滝の音に包まれる静寂の散策が楽しめます。また、秋から冬にかけて夕暮れ時から夜間に開催される「赤目渓谷 幽玄の竹あかり」では、数百本に及ぶ手彫りの竹灯籠が渓谷沿いに灯され、竹林と滝が織りなす幻想的なライトアップ風景を鑑賞できます。"
            }
          },
          {
            "@type": "Question",
            "name": "名古屋や大阪・京都方面から榊原温泉・赤目温泉へのアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "近鉄特急を利用すると大変スムーズです。榊原温泉へは、近鉄名古屋駅から近鉄特急で「榊原温泉口駅」まで約1時間15分。大阪難波駅からも近鉄特急で約1時間15分、京都駅からは約1時間40分です。榊原温泉口駅からは各宿の無料送迎バスで約10〜15分。赤目四十八滝・赤目温泉へは、近鉄大阪線「赤目口駅」で下車し、三重交通バス「赤目滝」行きで約10分です。車の場合は、伊勢自動車道久居ICより国道165号線経由で約20分（榊原）、名阪国道上野ICより約30分（赤目）です。"
            }
          }
        ]
      }
    ]
  };

  const faqListItems = [
  {
    "q": "清少納言が『枕草子』で讃えた「七栗の湯」とは榊原温泉のこと？その歴史と由来は？",
    "a": "はい、平安時代の随筆『枕草子』第117段に「湯は七栗の湯、有馬の湯、玉造の湯」と記されており、この「七栗（ななくり）の湯」が現在の三重県津市にある「榊原温泉」のことです。有馬温泉（兵庫）、玉造温泉（島根）と並ぶ「日本三名泉」の筆頭として平安貴族に愛されました。また、古来より伊勢神宮に参拝する前に榊原の温泉に入って身と心を清める「湯垢離（ゆごり）」の神聖な場所として重用されてきた歴史を持ちます。"
  },
  {
    "q": "榊原温泉の泉質の特徴と「ぬる湯・温冷交互浴」の正しい入浴法は？",
    "a": "榊原温泉の泉質はアルカリ性単純温泉で、pH値は9.4〜9.6という極めて高いアルカリ度を誇ります。無色透明で、湯の中に手を入れた瞬間にトロリとした美容液をまとったような感触が広がります。源泉温度が約31℃〜32℃と体温よりやや低めの「ぬる湯」であることが最大の特徴。加温された約41℃の湯船に5〜10分浸かって体を十分に温めた後、31℃の生源泉風呂に3〜5分身を浸す「温冷交互浴」を2〜3回繰り返すことで、血管が拡張・収縮して血行が促進され、自律神経が整って深い睡眠と極上の美肌効果が得られます。"
  },
  {
    "q": "市場にほとんど出回らない「幻の伊賀牛」とはどんなお肉？味の特徴は？",
    "a": "「伊賀牛（いがぎゅう）」は、伊賀盆地の寒暖差の激しい気候と清らかな伏流水で丹精込めて育てられた黒毛和牛です。肉質は非常に柔らかく、脂の融点が低いためくどさがなく、赤身本来の濃厚な旨味と上品な甘みが口いっぱいに広がります。その生産量の約8割が伊賀地域や三重県内で消費されるため、「幻の牛肉」とも称されます。すき焼き、陶板石焼き、しゃぶしゃぶで味わうと、肉の繊維がほろりと解ける至福の美味しさを実感できます。"
  },
  {
    "q": "初冬の「赤目四十八滝」の散策コースや「竹あかり」ライトアップの開催情報は？",
    "a": "赤目四十八滝は、室生赤目青山国定公園に位置する往復約3〜4時間の清流渓谷遊歩道です。11月下旬の紅葉の余韻から12月の初冬にかけては、観光客が落ち着き、苔むした岩肌や澄んだエメラルドグリーンの滝壺、凛とした滝の音に包まれる静寂の散策が楽しめます。また、秋から冬にかけて夕暮れ時から夜間に開催される「赤目渓谷 幽玄の竹あかり」では、数百本に及ぶ手彫りの竹灯籠が渓谷沿いに灯され、竹林と滝が織りなす幻想的なライトアップ風景を鑑賞できます。"
  },
  {
    "q": "名古屋や大阪・京都方面から榊原温泉・赤目温泉へのアクセス方法は？",
    "a": "近鉄特急を利用すると大変スムーズです。榊原温泉へは、近鉄名古屋駅から近鉄特急で「榊原温泉口駅」まで約1時間15分。大阪難波駅からも近鉄特急で約1時間15分、京都駅からは約1時間40分です。榊原温泉口駅からは各宿の無料送迎バスで約10〜15分。赤目四十八滝・赤目温泉へは、近鉄大阪線「赤目口駅」で下車し、三重交通バス「赤目滝」行きで約10分です。車の場合は、伊勢自動車道久居ICより国道165号線経由で約20分（榊原）、名阪国道上野ICより約30分（赤目）です。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "榊原温泉　まろき湯の宿　湯元　榊原舘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39548/39548.jpg",
              rating: 4.20,
              reviews: 1427,
              price: "¥15,817〜",
              access: "■近鉄榊原温泉口駅より送迎可※要事前予約：１４時半、１５時半、１６時半、１７時半■車：伊勢自動車道久居ＩＣより約２０分",
              special: "圧倒的温泉力！榊原温泉唯一の源泉かけ流し宿と「温泉野菜蒸し」を堪能。松阪牛メインプランもあります",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39548%2F39548.html",
              story: "清少納言ゆかりの榊原温泉街の中心に佇み、敷地内に良質な自家源泉を保有する格式宿「榊原温泉 まろき湯の宿 湯元 榊原舘」。宿自慢の大浴場「もえぎの湯」では、加温した適温浴槽の隣に、湧き出たままの31.2℃の「生源泉風呂」が並び、贅沢な源泉かけ流しの温冷交互浴を心ゆくまで満喫できます。トロリとした美容液のような湯ざわりは全国の温泉通を唸らせる名湯。夕食には、幻のブランド和牛「伊賀牛」のすき焼きや陶板ステーキをメインに、伊勢湾の新鮮な海の幸や地元農家の採れたて冬野菜を織り交ぜた美しい和会席が並びます。露天風呂付き客室も充実し、初冬の静かな大人の休日を贅沢に彩ります。",
              roomTip: "榊原川のせせらぎや山並みを望む温泉露天風呂付き客室または和モダンツイン。プライベート空間でいつでも名湯のぬる湯を堪能できます。",
              gourmetTip: "「特選伊賀牛会席」。きめ細かな霜降りと上品な脂の甘みが際立つ最高ランク伊賀牛を、地酒とともに特製割り下で味わう至高の膳。",
              highlights: [
                "31.2℃生源泉ぬる湯と加温湯の本格温冷交互浴＆清少納言も愛したpH9.4天然美容液泉",
                "幻の極上黒毛和牛「伊賀牛」すき焼き会席＆榊原川沿いの閑静な露天風呂付き客室",
                "伊勢神宮湯垢離の伝統を受け継ぐ格式ある宿＆自律神経を整える究極のリラクゼーション"
              ]
            },
            {
              id: 2,
              name: "榊原温泉　旅館　清少納言",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/37898/37898.jpg",
              rating: 3.96,
              reviews: 775,
              price: "¥8,250〜",
              access: "近畿日本鉄道大阪線「榊原温泉口駅」より車で約10分 送迎あり／伊勢自動車道ICより車で約15分",
              special: "枕草子にも 【三大名泉】 と謳われた、湯治にも最適の湯宿。温泉自慢！ 堂々の【クチコミ★4.0以上】",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37898%2F37898.html",
              story: "枕草子の世界観を館内随所に散りばめ、女性やカップルに細やかなもてなしで愛される老舗温泉旅館「榊原温泉 旅館 清少納言」。平安朝の雅やかな雰囲気が漂うロビーと、広々とした大浴場には榊原の源泉がたっぷりと注がれ、湯上がりの肌が絹のようにしっとり滑らかになると評判です。初冬の夕食には、伊賀牛をはじめ、三重県が誇る松阪牛や新鮮な伊勢海老、旬の地魚を取り入れた多彩なプランを用意。リーズナブルな価格設定ながら、心のこもった料理ともてなしでコストパフォーマンス抜群の温泉ステイが楽しめます。",
              roomTip: "静けさに包まれた純和風客室。初冬の澄んだ夜風を感じながら、畳のぬくもりで旅の疲れを心地よく癒やせます。",
              gourmetTip: "「伊賀牛陶板焼き＆伊勢湾鮮魚会席」。柔らかな伊賀牛の旨味を閉じ込めた陶板焼きと、朝獲れ白身魚の鮮烈なお造り。",
              highlights: [
                "平安ロマン香る雅やかな純和風旅館＆伊賀牛陶板焼きと伊勢湾鮮魚の贅沢会席",
                "肌がしっとり潤う名湯大浴場＆カップルや家族に嬉しい高コスパなおもてなし",
                "榊原温泉口駅からの無料送迎対応＆伊勢志摩観光や奈良へのアクセス拠点"
              ]
            },
            {
              id: 3,
              name: "榊原温泉　湯の瀬",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184544/184544.jpg",
              rating: 4.21,
              reviews: 39,
              price: "¥3,000〜",
              access: "近畿日本鉄道利用「久居」駅→バス（11㎞）　近畿日本鉄道利用「榊原温泉口」下車→タクシー（6㎞）",
              special: "湯の瀬は、アンチエイジングを掲げており、誰もがほっとできる、心も体もバリアフリーな温泉福祉旅館です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184544%2F184544.html",
              story: "自然豊かな榊原の里山に佇み、日帰り温泉施設と宿泊棟が融合した地域密着の憩いの宿「榊原温泉 湯の瀬」。近年リニューアルされた館内は木の温もりがあふれる清潔で開放的な空間です。pH9.6超を誇るアルカリ性の高温泉は、角質を優しく落としてくれる極上のクレンジング効果があり、大浴場や露天風呂、サウナも完備。地元津市や伊賀の旬食材を活かした素朴で温かいお食事膳やBBQ施設もあり、ファミリーや友人同士、一人旅でも気兼ねなく楽しめるカジュアルな美肌ステイに最適です。",
              roomTip: "木の香りが心地よい洋室ツインまたは和洋室。里山の穏やかな田園風景を眺めながらゆったりとした時間を過ごせます。",
              gourmetTip: "「三重の恵み膳」。伊賀豚や地元野菜のせいろ蒸しなど、素材本来の旨味を引き出したヘルシーで優しい郷土料理。",
              highlights: [
                "リニューアルされた清潔な里山リゾート＆pH9.6超の美肌クレンジング温泉とサウナ",
                "一人旅やワーケーションにも最適な設備＆地元津市の旬野菜や伊賀豚のせいろ蒸し",
                "自然豊かな里山風景と澄んだ初冬の星空＆地元産品が揃うショップスペース"
              ]
            },
            {
              id: 4,
              name: "伊賀のかくれ宿　赤目温泉隠れの湯　対泉閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7155/7155.jpg",
              rating: 4.42,
              reviews: 802,
              price: "¥15,950〜",
              access: "近鉄「赤目口」まで無料送迎バス。約10分（要予約）【大阪方面】名阪針IC～約30分【名古屋方面】名阪上野IC～約35分",
              special: "【美と静寂を楽しむ】赤目四十八滝！★森のリゾートリニューアル☆絶品伊賀牛と美食と温泉☆",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7155%2F7155.html",
              story: "名勝・赤目四十八滝の入り口に佇み、伊賀忍者の隠れ里のような風情を醸し出す名門旅館「伊賀のかくれ宿 赤目温泉隠れの湯 対泉閣」。赤目渓谷の自然林に包まれた露天風呂「八景の湯」や明治風呂では、初冬の澄んだ冷気を感じながら自家源泉の単純温泉に浸かる贅沢な湯浴みが叶います。夕食は、料理長が腕によりをかける「元祖・伊賀牛の石焼き会席」や「伊賀牛すき焼き会席」。伊賀の里で手塩にかけて育てられた黒毛和牛の芳醇な肉汁と香ばしさは圧巻。夜には赤目渓谷で開催される竹あかりの散策にも最も便利なロケーションです。",
              roomTip: "赤目渓谷の自然林を望む渓流側和室。窓を開ければ清らかな滝川のせせらぎが心地よく響き渡ります。",
              gourmetTip: "「元祖伊賀牛石焼き＆伊賀地酒ペアリング」。厚切りの極上伊賀牛を熱した石の上でジューシーに焼き上げ、地元銘酒「義左衛門」と合わせる贅沢。",
              highlights: [
                "赤目四十八滝徒歩すぐの好立地＆元祖伊賀牛石焼き会席と初冬竹あかり鑑賞",
                "赤目渓谷の自然林を望む露天風呂八景の湯＆伊賀忍者の隠れ里を思わせる情緒",
                "夜の赤目渓谷竹あかりイベントへのお出かけに最適＆歴史ある老舗宿の気品"
              ]
            },
            {
              id: 5,
              name: "赤目温泉　山の湯　湯元赤目　山水園",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7624/7624.jpg",
              rating: 4.45,
              reviews: 502,
              price: "¥9,900〜",
              access: "近鉄大阪線「赤目口駅」より車で5分。送迎もございます（事前予約は不要ですが、当日の到着時間はお電話でご連絡ください）",
              special: "赤目四十八滝へ車で5分とアクセス便利。恵まれた自然の中、肌に優しい温泉とだわりの料理を堪能！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7624%2F7624.html",
              story: "赤目四十八滝から少し離れた静かな山あいに位置し、約2500坪の広大な日本庭園と数寄屋造りの離れ客室が点在する隠れ宿「赤目温泉 山の湯 湯元赤目 山水園」。館内に湧き出る天然ラドン温泉は、微弱な放射能成分が細胞を活性化し、免疫力を高める「万病の湯」として親しまれています。庭園に囲まれた露天風呂や家族貸切風呂は、初冬の木立と落葉の風情が見事。夕食は、伊賀牛のしゃぶしゃぶやステーキに加え、山菜や川魚、伊賀米をふんだんに使った山里会席で、都会の喧騒を完全に離れた静寂の湯治ステイを約束します。",
              roomTip: "広大な敷地に佇む数寄屋造りの離れ和室。誰にも邪魔されない完全プライベートな空間で、極上の隠れ家時間を満喫できます。",
              gourmetTip: "「伊賀牛と滋味山里会席」。じっくり煮込んだ冬の根菜と、サッと火を通した柔らかな伊賀牛しゃぶしゃぶの絶妙なバランス。",
              highlights: [
                "2500坪の日本庭園に佇む数寄屋離れ客室＆万病に効く天然ラドン山の湯と山里会席",
                "庭園露天風呂と無料貸切風呂のプライベート湯浴み＆伊賀米と地酒を味わう贅沢",
                "都会の喧騒から隔絶された静寂の隠れ家ステイ＆心洗われる庭園散策"
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
      <header className="bg-gradient-to-r from-emerald-950 via-teal-950 to-stone-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wide border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            11月・12月初冬三重特集・枕草子三名泉＆幻の伊賀牛探訪
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {metadata.title as string}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            清少納言が称えた日本三名泉「七栗の湯」が誇るpH9.4超のトロトロ美肌生源泉。
            31℃ぬる湯と加温湯の温冷交互浴で整い、幻の最高峰「伊賀牛」と赤目四十八滝の静寂を味わう初冬の旅へ。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm tracking-wide">
            <Flame className="w-4 h-4 text-emerald-700" />
            伊勢神宮湯垢離の聖地と天然美容液のようなトロトロぬる湯
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            11月中旬から12月にかけて、伊勢平野の西に連なる青山高原の麓は、錦秋の紅葉が静かに散り落ち、凛とした透明な冬の気配が漂い始めます。三重県津市榊原町に湧く「榊原温泉（さかきばらおんせん）」は、平安時代の随筆『枕草子』で清少納言が「湯は七栗の湯、有馬の湯、玉造の湯」と記し、日本三名泉の筆頭に挙げた伝説の古湯（古名：七栗の湯）。かつて伊勢神宮に参拝する人々が、神前に出る前に心身を清める「湯垢離（ゆごり）」を行った格式ある霊泉です。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            榊原温泉の最大の特徴は、pH9.4〜9.6に達する驚異的な高アルカリ度と、約31℃の源泉温度。無色透明でほのかな硫黄臭を帯びたお湯は、まるで濃密な美容液そのもののようにトロリとしており、肌をなでると指先が吸い付くような至高の滑らかさを実感します。加温した温かい浴槽と湧き立ての「生源泉ぬる湯」を交互に行き来する「温冷交互浴」は、初冬の冷えた自律神経を優しく整え、湯上がりには驚くほど肌がもっちりと潤います。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            温泉街を流れる榊原川のほとりには、温泉の守護神を祀る式内社「射和神社」や、清少納言が愛でた歌碑が静かに佇み、古の貴族たちが都から遥々旅をしてこの名湯に身を委ねたロマンが今なお息づいています。初冬の朝霧が川面を覆う光景は幽玄そのもので、冷涼な空気と湯煙のコントラストが旅情をこの上なく高めてくれます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            さらに車を少し走らせれば、忍者の里・伊賀や名勝「赤目四十八滝」が広がり、初冬の澄み切った渓谷美と夕暮れの竹灯籠ライトアップが旅人を迎えます。夕食には、県外には滅多に出回らない肉の芸術品「伊賀牛」のすき焼きや石焼きステーキを地酒とともに堪能。平安の宮廷人が愛した名湯の癒やしと極上グルメを巡る、厳選5宿をご紹介します。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-900 font-bold text-sm tracking-wide bg-emerald-100/60 px-3 py-1 rounded-full">
              <Landmark className="w-4 h-4 text-emerald-800" />
              厳選5名宿のご案内
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              七栗の美肌湯と幻の伊賀牛を満喫する初冬の名宿
            </h2>
          </div>

          <div className="space-y-10">
            {hotelCards.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>三重県中勢・伊賀エリア</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                        {hotel.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60 text-amber-900 text-xs font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{hotel.rating}</span>
                        <span className="text-stone-400 font-normal">({hotel.reviews}件)</span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-stone-500 block">参考宿泊料金</span>
                        <span className="text-base sm:text-lg font-black text-rose-600">{hotel.price}</span>
                      </div>
                    </div>
                  </div>

                  {/* Image and Story Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    <div className="md:col-span-5 space-y-2">
                      <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={hotel.img} 
                          alt={hotel.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <p className="text-[11px] text-stone-500 leading-normal">
                        {hotel.access}
                      </p>
                    </div>

                    <div className="md:col-span-7 space-y-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
                      <p>{hotel.story}</p>
                      
                      <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100 space-y-2">
                        <div className="font-bold text-stone-900 text-xs flex items-center gap-1.5">
                          <Eye className="w-3.5 h-3.5 text-emerald-700" />
                          客室の過ごし方
                        </div>
                        <p className="text-[11px] sm:text-xs text-stone-600">{hotel.roomTip}</p>
                        
                        <div className="font-bold text-stone-900 text-xs flex items-center gap-1.5 pt-1 border-t border-stone-200/50">
                          <Utensils className="w-3.5 h-3.5 text-emerald-700" />
                          美食のこだわり
                        </div>
                        <p className="text-[11px] sm:text-xs text-stone-600">{hotel.gourmetTip}</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 pt-2 border-t border-stone-100">
                    <span className="text-xs font-bold text-stone-900 block">宿の注目ポイント：</span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {hotel.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-1.5 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/50 text-[11px] text-emerald-950 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-2 flex justify-end">
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-800 to-teal-900 hover:from-emerald-900 hover:to-teal-950 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-xs hover:shadow-md transition duration-200"
                    >
                      <span>楽天トラベルでプラン詳細・空室確認</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Model Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-900 font-bold text-sm tracking-wide bg-emerald-100/60 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4 text-emerald-800" />
              11月・12月おすすめ1泊2日モデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              七栗の美肌ぬる湯と赤目渓谷竹あかり・伊賀牛を巡る初冬の三重旅
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-emerald-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-emerald-700" />
                【1日目】枕草子の名湯体験と赤目渓谷の竹あかり散策
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>11:30 近鉄榊原温泉口駅を出発：</strong>宿の送迎車またはレンタカーで里山ののどかな風景を抜けて榊原温泉街へ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>12:30 射和神社・湯の瀬周辺散策：</strong>清少納言も訪れたとされる古社に参拝し、初冬の静かな温泉街を歩く。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>15:00 宿へチェックイン＆温冷交互浴：</strong>31℃の生源泉ぬる湯と加温湯を交互に浸かり、美容液のような泉質で肌をリセット。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>17:30 赤目渓谷「幽玄の竹あかり」へ：</strong>名張・赤目四十八滝の入り口で、手彫りの竹灯籠が織りなす幻想的な光の小径を鑑賞。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>19:30 幻の伊賀牛すき焼きディナー：</strong>霜降り伊賀牛のとろける旨味と地元の銘酒で心温まる夕食を満喫。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-emerald-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-emerald-700" />
                【2日目】初冬の赤目渓谷トレッキングと伊賀城下町
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>08:00 朝のぬる湯入浴と温泉朝食：</strong>伊賀米コシヒカリと源泉粥、地元名産の温かいお味噌汁で清々しい朝のスタート。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>10:00 赤目四十八滝の渓谷遊歩道へ：</strong>不動滝や千手滝の澄み渡る滝壺を眺めながら、初冬のマイナスイオンを浴びる森林浴。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>12:30 名物「へこきまんじゅう」ランチ：</strong>さつまいも生地を香ばしく焼き上げた名物スイーツを味わい伊賀上野へ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-1" />
                  <span><strong>14:00 伊賀上野城と忍者屋敷見学：</strong>日本屈指の高石垣を誇る伊賀上野城を散策し、伊賀くみひものおみやげを探して帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-900 font-bold text-sm tracking-wide bg-emerald-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-emerald-800" />
              初冬の三重・中勢＆伊賀・おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              温泉街と城下町で手に入れたい初冬の銘品と立ち寄りスポット
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-700" />
                榊原温泉水配合コスメと源泉せんべい
              </h3>
              <p>
                pH9.5前後の強アルカリ天然美肌源泉をそのままボトリングした「さかきばら温泉ミスト」や石鹸は、防腐剤無添加で冬の乾燥肌にしっとりと浸透する大人気のおみやげ。また、源泉水で練り上げた素朴で香ばしい「温泉せんべい」は、サクサクとした軽い歯ざわりとほんのりとした甘みが特徴で、お茶請けにぴったりです。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-700" />
                伝統工芸「伊賀くみひも」と伊賀の地酒
              </h3>
              <p>
                映画のモチーフとしても有名になった伝統工芸「伊賀くみひも」は、絹糸が織りなす美しい色彩と丈夫な締め心地が魅力。ブレスレットやキーホルダー、帯締めなど現代的なデザインも多数揃います。また、良質な伊賀米と清流で作られる地酒「半蔵」「義左衛門」「るみ子の酒」は、冬の鍋料理や伊賀牛と抜群の相性を誇ります。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-900 font-bold text-sm tracking-wide bg-emerald-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-emerald-800" />
              初冬の榊原温泉・泉質と入浴メカニズムの徹底解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ31℃の「生源泉ぬる湯」が究極の美肌と自律神経調整をもたらすのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-emerald-700" />
              pH9.5超のアルカリ性単純温泉がもたらす天然ピーリング作用
            </h3>
            <p>
              榊原温泉の泉質は、無色透明のアルカリ性単純温泉（単純硫黄温泉）。特筆すべきはpH9.4〜9.6という日本有数のアルカリ度です。アルカリ性泉は皮膚表面の古い角質を軟化させ、余分な皮脂汚れを優しく石鹸のように乳化させて洗い流す「天然のピーリング効果」を持ちます。さらに微量に含まれる硫黄成分がメラニンの生成を抑え、湯上がりにはくすみが抜けてワントーン明るい透明感のある肌へと導いてくれます。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-emerald-700" />
              31℃ぬる湯と41℃加温湯の「温冷交互浴」が自律神経をリセットする科学
            </h3>
            <p>
              一般的な温泉は40℃〜42℃に加温されますが、榊原温泉では自噴する31℃前後の源泉をそのまま浴槽に注ぎ込む「生源泉風呂」が大切に守られています。体温よりやや低い31℃のお湯は、心拍数を上げず副交感神経を優位にする鎮静効果があります。まず温かい湯船（41℃）で血行を促進し、次にぬる湯（31℃）で体を冷まさず鎮静させる「温冷交互浴」を繰り返すことで、末梢血管が柔軟に伸縮し、冬特有の冷え症や不眠、慢性的疲労を劇的にリセットしてくれます。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              幻の伊賀牛と伊賀米がもたらす冬の滋養強壮
            </h3>
            <p>
              伊賀盆地は四方を山に囲まれた特異な地形で、昼夜の寒暖差が極めて大きいのが特徴です。この厳しい気候環境と、淀川水系の清冽な伏流水で肥育される伊賀牛は、肉繊維がきめ細かくサシが細微に分散するため、加熱しても肉汁が逃げず極めてジューシー。さらに伊賀盆地の粘土質土壌で栽培される伊賀米コシヒカリは、甘みともっちり感が全国トップクラスと評価され、伊賀牛すき焼きの割り下を吸ったご飯の美味しさは格別です。名湯でデトックスした後に極上の滋養を取り入れることで、初冬の免疫力を高める理想的なウェルネス旅が完成します。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-emerald-900 font-bold text-sm tracking-wide bg-emerald-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-emerald-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の榊原温泉・赤目四十八滝旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-emerald-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-emerald-800" />
            あわせて読みたい初冬の全国名湯・美食特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-mie-yunoyama-onsen-gozaisho-snow-sohei-nabe-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-emerald-700 font-bold block text-[10px]">三重・湯の山温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">御在所岳の樹氷ロープウェイと開湯1300年鹿の湯・僧兵鍋名宿</p>
            </Link>
            <Link 
              href="/winter-mie-toba-osaatsu-onsen-seafood-torasawara-matsusaka-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-emerald-700 font-bold block text-[10px]">三重・鳥羽相差</span>
              <p className="font-bold text-stone-800 line-clamp-2">伊勢志摩の冬の恵み・答志島トロサワラ＆極上松阪牛と美肌露天風呂</p>
            </Link>
            <Link 
              href="/winter-wakayama-kawayu-yunomine-onsen-senninburo-kumanogyu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-emerald-700 font-bold block text-[10px]">和歌山・熊野本宮</span>
              <p className="font-bold text-stone-800 line-clamp-2">大塔川仙人風呂オープンと世界遺産つぼ湯・熊野牛会席＆名物温泉粥</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
