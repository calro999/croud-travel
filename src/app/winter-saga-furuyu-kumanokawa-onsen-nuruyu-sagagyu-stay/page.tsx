import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Heart, ShoppingBag, Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月古湯温泉・熊の川温泉】ぬる湯の聖地・嘉瀬川渓谷美と温冷交互浴・極上佐賀牛すき焼き＆三瀬鶏炭火焼き・斎藤茂吉ゆかりの名宿5選",
  description: "11月中旬から12月の初冬、佐賀市北部の脊振山系に抱かれた富士町・三瀬エリアに位置する古湯温泉（ふるゆおんせん）と熊の川温泉（くまのかわおんせん）は、澄んだ山の冷気と嘉瀬川のせせらぎが心地よい静寂の湯治シーズンを迎えます。古湯温泉の代名詞は「ぬる湯」。源泉温度が約38℃前後と体温に近いため、体に負担をかけずに何十分でも浸かっていられる奇跡のアルカリ性単純温泉です。pH9.5前後のとろりとした湯ざわりは「美肌の湯」として名高く、冬にはぬる湯と温かい加温浴槽を交互に行き来する「温冷交互浴」によって、自律神経が整い体の芯からじんわりと温まります。かつて歌人・斎藤茂吉が約1ヶ月逗留し短歌を詠んだ情緒あふれる温泉街。夕食には全国トップクラスの霜降りを誇る最高級「佐賀牛」のすき焼きや陶板焼き、ジューシーな旨味のブランド地鶏「みつせ鶏」の炭火焼きや水炊き、清流が育んだ川魚料理が並びます。初冬の九州で至高の脱力リトリートを約束する厳選5宿をご紹介します。",
  keywords: '古湯温泉 宿泊, 熊の川温泉 旅館, ぬる湯 佐賀, 佐賀牛 すき焼き 宿, みつせ鶏 温泉, 斎藤茂吉 古湯温泉, 温冷交互浴 美肌湯, 11月 12月 佐賀旅行',
  alternates: {
    canonical: 'https://croud-travel.com/winter-saga-furuyu-kumanokawa-onsen-nuruyu-sagagyu-stay'
  },
  openGraph: {
    title: "【11・12月古湯温泉・熊の川温泉】ぬる湯の聖地・嘉瀬川渓谷美と温冷交互浴・極上佐賀牛すき焼き＆三瀬鶏炭火焼き・斎藤茂吉ゆかりの名宿5選",
    description: "11月中旬から12月の初冬、佐賀市北部の脊振山系に抱かれた富士町・三瀬エリアに位置する古湯温泉（ふるゆおんせん）と熊の川温泉（くまのかわおんせん）は、澄んだ山の冷気と嘉瀬川のせせらぎが心地よい静寂の湯治シーズンを迎えます。古湯温泉の代名詞は「ぬる湯」。源泉温度が約38℃前後と体温に近いため、体に負担をかけずに何十分でも浸かっていられる奇跡のアルカリ性単純温泉です。pH9.5前後のとろりとした湯ざわりは「美肌の湯」として名高く、冬にはぬる湯と温かい加温浴槽を交互に行き来する「温冷交互浴」によって、自律神経が整い体の芯からじんわりと温まります。かつて歌人・斎藤茂吉が約1ヶ月逗留し短歌を詠んだ情緒あふれる温泉街。夕食には全国トップクラスの霜降りを誇る最高級「佐賀牛」のすき焼きや陶板焼き、ジューシーな旨味のブランド地鶏「みつせ鶏」の炭火焼きや水炊き、清流が育んだ川魚料理が並びます。初冬の九州で至高の脱力リトリートを約束する厳選5宿をご紹介します。",
    url: 'https://croud-travel.com/winter-saga-furuyu-kumanokawa-onsen-nuruyu-sagagyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '嘉瀬川の清流と初冬の古湯温泉ぬる湯の情景'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月古湯温泉・熊の川温泉】ぬる湯の聖地・嘉瀬川渓谷美と温冷交互浴・極上佐賀牛すき焼き＆三瀬鶏炭火焼き・斎藤茂吉ゆかりの名宿5選",
    description: "11月中旬から12月の初冬、佐賀市北部の脊振山系に抱かれた富士町・三瀬エリアに位置する古湯温泉（ふるゆおんせん）と熊の川温泉（くまのかわおんせん）は、澄んだ山の冷気と嘉瀬川のせせらぎが心地よい静寂の湯治シーズンを迎えます。古湯温泉の代名詞は「ぬる湯」。源泉温度が約38℃前後と体温に近いため、体に負担をかけずに何十分でも浸かっていられる奇跡のアルカリ性単純温泉です。pH9.5前後のとろりとした湯ざわりは「美肌の湯」として名高く、冬にはぬる湯と温かい加温浴槽を交互に行き来する「温冷交互浴」によって、自律神経が整い体の芯からじんわりと温まります。かつて歌人・斎藤茂吉が約1ヶ月逗留し短歌を詠んだ情緒あふれる温泉街。夕食には全国トップクラスの霜降りを誇る最高級「佐賀牛」のすき焼きや陶板焼き、ジューシーな旨味のブランド地鶏「みつせ鶏」の炭火焼きや水炊き、清流が育んだ川魚料理が並びます。初冬の九州で至高の脱力リトリートを約束する厳選5宿をご紹介します。",
    images: ['https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function SagaFuruyuKumanokawaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-saga-furuyu-kumanokawa-onsen-nuruyu-sagagyu-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.com/"
        },
        "headline": "【11・12月古湯温泉・熊の川温泉】ぬる湯の聖地・嘉瀬川渓谷美と温冷交互浴・極上佐賀牛すき焼き＆三瀬鶏炭火焼き・斎藤茂吉ゆかりの名宿5選",
        "description": "11月中旬から12月の初冬、佐賀市北部の脊振山系に抱かれた富士町・三瀬エリアに位置する古湯温泉（ふるゆおんせん）と熊の川温泉（くまのかわおんせん）は、澄んだ山の冷気と嘉瀬川のせせらぎが心地よい静寂の湯治シーズンを迎えます。古湯温泉の代名詞は「ぬる湯」。源泉温度が約38℃前後と体温に近いため、体に負担をかけずに何十分でも浸かっていられる奇跡のアルカリ性単純温泉です。pH9.5前後のとろりとした湯ざわりは「美肌の湯」として名高く、冬にはぬる湯と温かい加温浴槽を交互に行き来する「温冷交互浴」によって、自律神経が整い体の芯からじんわりと温まります。かつて歌人・斎藤茂吉が約1ヶ月逗留し短歌を詠んだ情緒あふれる温泉街。夕食には全国トップクラスの霜降りを誇る最高級「佐賀牛」のすき焼きや陶板焼き、ジューシーな旨味のブランド地鶏「みつせ鶏」の炭火焼きや水炊き、清流が育んだ川魚料理が並びます。初冬の九州で至高の脱力リトリートを約束する厳選5宿をご紹介します。",
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.com/winter-saga-furuyu-kumanokawa-onsen-nuruyu-sagagyu-stay",
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
              "name": "古湯温泉　ＯＮＣＲＩ　／　おんくり",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/40343/40343.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40343%2F40343.html",
              "priceRange": "¥20,200〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "佐賀県",
                "addressLocality": "佐賀市富士町",
                "streetAddress": "佐賀市富士町古湯556",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.32",
                "reviewCount": 750
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "古湯温泉　旅館　大和屋",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/108575/108575.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108575%2F108575.html",
              "priceRange": "¥12,060〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "佐賀県",
                "addressLocality": "佐賀市富士町",
                "streetAddress": "佐賀市富士町古湯860",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.62",
                "reviewCount": 320
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "古湯温泉　旅館　杉乃家",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/15108/15108.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15108%2F15108.html",
              "priceRange": "¥18,700〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "佐賀県",
                "addressLocality": "佐賀市富士町",
                "streetAddress": "佐賀市富士町古湯温泉",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.54",
                "reviewCount": 186
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "古湯温泉　鶴の恩返し　よみがえりの宿　鶴霊泉",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/17807/17807.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17807%2F17807.html",
              "priceRange": "¥19,800〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "佐賀県",
                "addressLocality": "佐賀市富士町",
                "streetAddress": "佐賀市富士町古湯875",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.50",
                "reviewCount": 233
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "古湯温泉　扇屋",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/52577/52577.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52577%2F52577.html",
              "priceRange": "¥8,800〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "佐賀県",
                "addressLocality": "佐賀市富士町",
                "streetAddress": "佐賀市富士町古湯873",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.36",
                "reviewCount": 176
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
            "name": "古湯温泉の「ぬる湯」とはどのような温泉で、冬でも寒く感じない入浴方法（温冷交互浴）とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "古湯温泉の源泉温度は約38℃前後で、人間の体温（約36〜37℃）に極めて近いため、熱さや冷たさの刺激が少なく、心臓や血管に負担をかけずに30分〜1時間ほどじっくり長湯できるのが特徴です。冬場にぬる湯へ入る際は、まず41〜42℃に加温された内湯で体をしっかり温めてから、38℃のぬる湯へ移動します。ぬる湯に浸かると最初はぬるく感じますが、数分経つと体内に熱がこもりじんわりと温かさを実感します。再び温かい浴槽へ入る「温冷交互浴」を2〜3往復繰り返すことで、末梢血管が拡張して自律神経が整い、湯上がり後も驚くほどポカポカ感が持続します。"
            }
          },
          {
            "@type": "Question",
            "name": "古湯温泉と熊の川温泉の泉質・効能の違いと「美肌の湯」と呼ばれる理由は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "古湯温泉の主泉質は「アルカリ性単純温泉」、熊の川温泉は全国的にも希少な「単純弱放射能温泉（ラドン温泉）」です。いずれもpH9.0〜9.5前後の高いアルカリ度を誇り、肌の角質をやさしく軟化させて古い老廃物を洗い流す天然のクレンジング作用があります。湯ざわりはトロトロとしており、まるで高級化粧水に浸かっているかのような感触です。熊の川温泉のラドン成分は微量放射線によるホルミシス効果で免疫力向上や神経痛の緩和に優れ、古湯温泉はリウマチや疲労回復、不眠症改善に高い効果を発揮します。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の古湯・熊の川温泉エリアの気候と道路状況、スタッドレスタイヤは必要？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "古湯・熊の川温泉エリアは標高約200m〜300mの山間部に位置しますが、九州の佐賀市内に近いため11月中は積雪の心配はほとんどありません。ただし12月中旬以降の寒波到来時には、三瀬峠や脊振山系の標高の高い山岳道路（国道263号線など）で路面凍結やうっすらとした降雪が見られることがあります。佐賀市街や長崎自動車道「佐賀大和IC」から国道323号線を経由して古湯温泉へアクセスするルートは、道幅も広く標高も比較的低いため積雪リスクは少ないですが、12月に車で訪れる際は念のためスタッドレスタイヤの装着またはチェーン携行を検討してください。"
            }
          },
          {
            "@type": "Question",
            "name": "佐賀が誇る二大ブランドグルメ「佐賀牛」と「みつせ鶏」の魅力とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「佐賀牛」は、全国の銘柄牛の中でもトップクラスの厳格な基準（肉質等級4等級以上、BMS7番以上）をクリアした最高峰の黒毛和牛です。「艶さし」と呼ばれる見事な霜降りと、舌の上でとろけるような柔らかな肉質、甘い脂の風味が特徴です。一方の「みつせ鶏（三瀬鶏）」は、フランスの優良肉用鶏の血統を受け継ぎ、脊振山麓の澄んだ空気と清流水で長期無薬飼育されたブランド地鶏。程よい弾力と豊かなコク、ジューシーな肉汁が特徴で、炭火焼きや水炊き、つくね鍋で味わうと鶏肉本来の濃厚な旨味が口いっぱいに広がります。"
            }
          },
          {
            "@type": "Question",
            "name": "福岡市街（博多・天神）や佐賀駅からのアクセス方法と所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "佐賀方面からは、JR長崎本線「佐賀駅」バスセンターから昭和バス（古湯温泉・北山行き）に乗車し、約40〜45分で古湯温泉街に到着します。福岡方面からは、天神・博多から高速バス「わかくす号」で佐賀駅へ向かい路線バスに乗り換えるか、車・レンタカーを利用して都市高速・三瀬トンネル経由（国道263号線〜323号線）で福岡市内から約50〜60分と、週末のショートトリップにも抜群のアクセスを誇ります。高速道路利用の場合は、長崎自動車道「佐賀大和IC」から車で約15分です。"
            }
          }
        ]
      }
    ]
  };

  const faqListItems = [
  {
    "q": "古湯温泉の「ぬる湯」とはどのような温泉で、冬でも寒く感じない入浴方法（温冷交互浴）とは？",
    "a": "古湯温泉の源泉温度は約38℃前後で、人間の体温（約36〜37℃）に極めて近いため、熱さや冷たさの刺激が少なく、心臓や血管に負担をかけずに30分〜1時間ほどじっくり長湯できるのが特徴です。冬場にぬる湯へ入る際は、まず41〜42℃に加温された内湯で体をしっかり温めてから、38℃のぬる湯へ移動します。ぬる湯に浸かると最初はぬるく感じますが、数分経つと体内に熱がこもりじんわりと温かさを実感します。再び温かい浴槽へ入る「温冷交互浴」を2〜3往復繰り返すことで、末梢血管が拡張して自律神経が整い、湯上がり後も驚くほどポカポカ感が持続します。"
  },
  {
    "q": "古湯温泉と熊の川温泉の泉質・効能の違いと「美肌の湯」と呼ばれる理由は？",
    "a": "古湯温泉の主泉質は「アルカリ性単純温泉」、熊の川温泉は全国的にも希少な「単純弱放射能温泉（ラドン温泉）」です。いずれもpH9.0〜9.5前後の高いアルカリ度を誇り、肌の角質をやさしく軟化させて古い老廃物を洗い流す天然のクレンジング作用があります。湯ざわりはトロトロとしており、まるで高級化粧水に浸かっているかのような感触です。熊の川温泉のラドン成分は微量放射線によるホルミシス効果で免疫力向上や神経痛の緩和に優れ、古湯温泉はリウマチや疲労回復、不眠症改善に高い効果を発揮します。"
  },
  {
    "q": "11月・12月の古湯・熊の川温泉エリアの気候と道路状況、スタッドレスタイヤは必要？",
    "a": "古湯・熊の川温泉エリアは標高約200m〜300mの山間部に位置しますが、九州の佐賀市内に近いため11月中は積雪の心配はほとんどありません。ただし12月中旬以降の寒波到来時には、三瀬峠や脊振山系の標高の高い山岳道路（国道263号線など）で路面凍結やうっすらとした降雪が見られることがあります。佐賀市街や長崎自動車道「佐賀大和IC」から国道323号線を経由して古湯温泉へアクセスするルートは、道幅も広く標高も比較的低いため積雪リスクは少ないですが、12月に車で訪れる際は念のためスタッドレスタイヤの装着またはチェーン携行を検討してください。"
  },
  {
    "q": "佐賀が誇る二大ブランドグルメ「佐賀牛」と「みつせ鶏」の魅力とは？",
    "a": "「佐賀牛」は、全国の銘柄牛の中でもトップクラスの厳格な基準（肉質等級4等級以上、BMS7番以上）をクリアした最高峰の黒毛和牛です。「艶さし」と呼ばれる見事な霜降りと、舌の上でとろけるような柔らかな肉質、甘い脂の風味が特徴です。一方の「みつせ鶏（三瀬鶏）」は、フランスの優良肉用鶏の血統を受け継ぎ、脊振山麓の澄んだ空気と清流水で長期無薬飼育されたブランド地鶏。程よい弾力と豊かなコク、ジューシーな肉汁が特徴で、炭火焼きや水炊き、つくね鍋で味わうと鶏肉本来の濃厚な旨味が口いっぱいに広がります。"
  },
  {
    "q": "福岡市街（博多・天神）や佐賀駅からのアクセス方法と所要時間は？",
    "a": "佐賀方面からは、JR長崎本線「佐賀駅」バスセンターから昭和バス（古湯温泉・北山行き）に乗車し、約40〜45分で古湯温泉街に到着します。福岡方面からは、天神・博多から高速バス「わかくす号」で佐賀駅へ向かい路線バスに乗り換えるか、車・レンタカーを利用して都市高速・三瀬トンネル経由（国道263号線〜323号線）で福岡市内から約50〜60分と、週末のショートトリップにも抜群のアクセスを誇ります。高速道路利用の場合は、長崎自動車道「佐賀大和IC」から車で約15分です。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "古湯温泉　ＯＮＣＲＩ　／　おんくり",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40343/40343.jpg",
              rating: 4.32,
              reviews: 750,
              price: "¥20,200〜",
              access: "JR佐賀駅より車で30分/長崎道 佐賀大和ＩＣより車で15分　佐賀駅送迎あり(予約要:時間はお問い合わせ下さい）",
              special: "ぬる湯に浸かり、時を忘れる山峡の湯治リゾート",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40343%2F40343.html",
              story: "嘉瀬川の清流を望む山あいに佇み、「ジャパニーズ・コンフォート」をコンセプトに伝統とモダンが美しく融合した大型リゾート旅館「古湯温泉 ＯＮＣＲＩ ／ おんくり」。宿最大の自慢は、男女あわせて6つの多彩な湯船が揃う大浴場「SHIORI（しおり）」です。源泉38℃のぬる湯露天風呂をはじめ、寝湯、立湯、打たせ湯、さらに天然砂蒸し温泉（予約制）まで完備。初冬の澄み渡る冷気の中でぬる湯とあつ湯を交互に愉しむ温冷浴は極上の心地よさです。食事は佐賀の旬食材を贅沢に使ったバーラウンジ＆レストランで。とろける最高ランク佐賀牛のグリルステーキや、新鮮な地元野菜、有明海の海の幸をシェフの洗練された技で味わえます。館内にはライブラリーやキッズスペースも充実し、感性を刺激する上質な休日を過ごせます。",
              roomTip: "脊振山系の山並みまたは中庭を望むラグジュアリーな和洋室。洗練されたインテリアとシモンズ製ベッドで極上の睡眠を約束。",
              gourmetTip: "「最高級佐賀牛ステーキとナチュラルイタリアン会席」。柔らかく甘いサシが溶け出す佐賀牛と地元契約農家の冬根菜が織りなす極上ディナー。",
              highlights: [
                "6種の湯船が揃うモダン大浴場＆ぬる湯露天風呂と天然砂蒸し温泉",
                "最高級佐賀牛ステーキディナー＆洗練されたジャパニーズモダン客室",
                "佐賀大和ICから車で15分の好アクセス＆ライブラリー完備の充実リゾート"
              ]
            },
            {
              id: 2,
              name: "古湯温泉　旅館　大和屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108575/108575.jpg",
              rating: 4.62,
              reviews: 320,
              price: "¥12,060〜",
              access: "佐賀大和ICよりお車にて15分、JR長崎本線佐賀駅→昭和バス乗車→古湯温泉前下車→徒歩2分",
              special: "深い緑の中どこか懐かしい宿。酒樽を用いた貸切露天、懐かしいレコードが流れる焼酎バーで心和む一時を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108575%2F108575.html",
              story: "古湯温泉街の中心に位置し、大正時代から続く心温まるもてなしと地酒の品揃えで多くのリピーターを惹きつける老舗酒宿「古湯温泉 旅館 大和屋」。宿の名物は、地酒を片手に露天風呂で一杯楽しめる「酒風呂」や、古湯特有の極上ぬる湯を堪能できる檜風呂です。pH9.5を誇る源泉はまるで化粧水のように肌に吸い付き、入浴後はしっとりと吸い付くような肌ざわりに。夕食の膳には、佐賀牛の石焼きやしゃぶしゃぶ、そして佐賀が誇るブランド地鶏「みつせ鶏」のつくね鍋や炭火焼きが並びます。さらに利き酒師の資格を持つ館主が厳選した「鍋島」「七田」「東一」など銘酒のペアリングが初冬の夜を格別に演出します。",
              roomTip: "木の香りが心地よい純和風客室。温泉街の静かな通りに面し、夕暮れ時には初冬の温泉情緒に包まれます。",
              gourmetTip: "「佐賀牛陶板焼き＆みつせ鶏つくね鍋会席」。ジューシーな佐賀牛と弾力ある三瀬鶏の旨味を、佐賀のプレミアム地酒とともに堪能。",
              highlights: [
                "地酒を味わえる名物酒風呂＆利き酒師が選ぶ佐賀プレミアム銘酒ペアリング",
                "佐賀牛石焼きとみつせ鶏つくね鍋会席＆pH9.5化粧水のような極上美肌湯",
                "古湯温泉街中心の散策に便利な立地＆一人旅・カップルに大人気の隠れ家"
              ]
            },
            {
              id: 3,
              name: "古湯温泉　旅館　杉乃家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15108/15108.jpg",
              rating: 4.54,
              reviews: 186,
              price: "¥18,700〜",
              access: "ＪＲ　佐賀駅下車／長崎自動車道　佐賀大和ＩＣよりＲ３２３を北へ１０ｋｍ",
              special: "山あいの静かな温泉宿　小高い山の上に位置している　ペットOKの客室もございます",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15108%2F15108.html",
              story: "古湯温泉街を見下ろす高台に佇み、全客室および大浴場から嘉瀬川渓谷と山並みの雄大なパノラマを一望できる絶景宿「古湯温泉 旅館 杉乃家」。高台ならではの清々しい静寂と、眼下に広がる初冬の山景色は息をのむ美しさです。自慢の展望大浴場と露天風呂には、湯量豊富な自家源泉が惜しみなく注がれ、とろとろの美肌湯を心ゆくまで味わえます。夕食は、佐賀の豊かな自然が育んだ食材を一品一品丁寧に仕上げた本格会席。きめ細やかなサシが入った佐賀牛の陶板焼きをはじめ、清流の鮎や山女魚の塩焼き、旬の地物野菜の天ぷらなど、滋味豊かなご馳走が個室食事処でゆったりと振る舞われます。",
              roomTip: "渓谷側の眺望指定和室。窓辺に腰掛けて初冬の澄み渡る青空と嘉瀬川のせせらぎ、夕暮れの茜空を心ゆくまで眺められます。",
              gourmetTip: "「特選佐賀牛陶板焼きと旬の山川会席」。香ばしく焼き上げる佐賀牛の芳醇な香りと、ふっくら炊き上がった佐賀県産米「さがびより」の絶品コンビ。",
              highlights: [
                "高台から嘉瀬川渓谷を一望する絶景展望露天＆とろける佐賀牛陶板焼き会席",
                "個室食事処で味わう山川美食＆全室から初冬の山並みを望む落ち着いた空間",
                "静寂のパノラマ絶景リトリート＆家族連れやシニア旅にも安心の快適施設"
              ]
            },
            {
              id: 4,
              name: "古湯温泉　鶴の恩返し　よみがえりの宿　鶴霊泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17807/17807.jpg",
              rating: 4.50,
              reviews: 233,
              price: "¥19,800〜",
              access: "佐賀駅よりお車で３０分／バスで５０分～古湯バス停下車／※送迎はしておりません",
              special: "佐賀の奥座敷ちょっぴり贅沢な大人「限定」隠れ宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17807%2F17807.html",
              story: "古湯温泉の歴史とともに歩み、歌人・斎藤茂吉が逗留して愛したことでも知られる格式ある老舗旅館「古湯温泉 鶴の恩返し よみがえりの宿 鶴霊泉（かくれいせん）」。宿の最大の誇りは、全国でも極めて珍しい「天然砂敷きの足元湧出温泉」です。浴槽の底に敷き詰められた滑らかな小石の間から、自噴する新鮮なぬる湯がぷくぷくと直接湧き上がり、空気に一切触れていない生まれたての湯に浸かる贅沢は奇跡の体験。夕食は、佐賀の山海の味覚を繊細な割烹仕立てで味わう月替わりの会席料理。最高級佐賀牛の石焼きや有明海の地魚、季節の先付など、一皿ごとに職人の技と心が込められた美食のひとときを堪能できます。",
              roomTip: "歴史ある日本庭園を望む落ち着いた数寄屋造り客室。静謐な和の空間に茂吉の短歌が飾られ、大人の静寂旅にふさわしい風情です。",
              gourmetTip: "「極上佐賀牛石焼き割烹会席」。熱した天然石の上でジューッと焼き上げる佐賀牛の香ばしさと、素材の味を引き立てる自家製タレの妙。",
              highlights: [
                "全国希少な天然砂敷き足元湧出の自噴ぬる湯＆斎藤茂吉ゆかりの伝統数寄屋建築",
                "極上佐賀牛石焼き割烹会席＆美しい日本庭園を眺めながら過ごす大人の静寂",
                "生まれたての新鮮源泉による究極の癒やし＆文化的な香りが漂う老舗の格式"
              ]
            },
            {
              id: 5,
              name: "古湯温泉　扇屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52577/52577.jpg",
              rating: 4.36,
              reviews: 176,
              price: "¥8,800〜",
              access: "佐賀大和ICよりお車にて15分、JR長崎本線佐賀駅→昭和バス乗車→古湯温泉前下車→徒歩3分",
              special: "古湯温泉唯一の畳風呂。絶品佐賀牛料理は満足度◎。朝食もお楽しみに",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52577%2F52577.html",
              story: "嘉瀬川のほとりに位置し、文人・画家に愛されてきた家庭的で温かなもてなしが心地よい老舗小宿「古湯温泉 扇屋」。小規模宿ならではの落ち着きがあり、プライベートな寛ぎを大切にする大人の旅人に愛されています。湯船には古湯のまろやかな源泉が掛け流され、肌に優しいぬる湯にじっくりと身を委ねれば、日頃のストレスや冷えが解けていくのを実感できます。夕食は、佐賀の旬の恵みをふんだんに盛り込んだ手作りの会席料理。柔らかくジューシーな佐賀牛の陶板焼きやすき焼き鍋をはじめ、女将特製の小鉢や三瀬産の新鮮な野菜料理など、温かい手料理の美味しさが染み渡ります。",
              roomTip: "川のせせらぎが心地よい和室。初冬の静かな夜、虫の音と水音に包まれて深い休息が得られます。",
              gourmetTip: "「佐賀牛すき焼き鍋と手作り郷土会席」。特製の割り下で煮込む佐賀牛の濃厚な旨味を、地元産の新鮮な生卵に絡めていただく贅沢。",
              highlights: [
                "嘉瀬川沿いの静かな老舗宿＆佐賀牛すき焼き鍋と女将手作りの温かなもてなし",
                "肌に優しい100%源泉かけ流し湯船＆リーズナブルに味わう本格会席ステイ",
                "嘉瀬川のせせらぎに癒やされる寛ぎ＆アットホームな心温まるサービス"
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
      <header className="bg-gradient-to-r from-emerald-950 via-teal-900 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wide border border-emerald-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            11月・12月初冬の佐賀富士町・ぬる湯の聖地＆極上美食特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {metadata.title as string}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            体温に近い38℃の奇跡のぬる湯と、嘉瀬川のせせらぎが織りなす極上の脱力リトリート。
            とろける最高級A5佐賀牛すき焼きと弾力ある三瀬鶏、銘酒「鍋島」に酔いしれる初冬の佐賀へ。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide">
            <Waves className="w-4 h-4 text-teal-700" />
            副交感神経を解き放つぬる湯文化と斎藤茂吉が愛した文芸の里
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            11月中旬から12月、福岡市街から車でわずか1時間ほどの脊振山南麓に広がる佐賀県富士町・三瀬エリアは、山里の木々が葉を落とし、澄み切った冷気と嘉瀬川の清流の音が響く格別の癒やしシーズンを迎えます。この地に湧く古湯温泉（ふるゆおんせん）と熊の川温泉（くまのかわおんせん）は、全国的にも極めて珍しい「ぬる湯（約38℃前後の源泉）」の聖地として知られています。体温とほぼ同じ温度の湯船に身を沈めると、熱さによる心拍数の上昇や肌への刺激がなく、まるで羊水に抱かれているかのような深い脱力感に包まれます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            pH9.5前後を誇るアルカリ性の源泉は、湯の中に身を入れた瞬間に肌がツルツルと滑らかになる極上の「美肌の湯」。冬場には、約38℃のぬる湯と41〜42℃に加温されたあつ湯を交互に繰り返す「温冷交互浴」を行うことで、血行が促進され自律神経が整い、湯上がり後も体の深部からポカポカとした保温効果が長く続きます。大正時代には歌人・斎藤茂吉が神経衰弱を癒やすために約1ヶ月逗留し、数多くの名歌を残したことでも知られる文学の香る温泉街です。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            そして夕暮れ時の温泉宿で待つのは、豊かな自然の恵みが生み出す佐賀の二大ブランド肉。全国屈指の肉質を誇る「最高級佐賀牛」のすき焼きや陶板焼きは、きめ細やかなサシが舌の上でとろけ、芳醇な肉汁が溢れます。さらに脊振山麓の澄んだ空気で育った「みつせ鶏」の炭火焼きや水炊き、嘉瀬川の清流魚、佐賀県産米「さがびより」のつやつやご飯。初冬の九州で至高の静寂と美食に出会える厳選5宿をご案内します。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <Landmark className="w-4 h-4 text-teal-800" />
              厳選5名宿のご案内
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬のぬる湯と佐賀牛・三瀬鶏を堪能する極上宿
            </h2>
          </div>

          <div className="space-y-8">
            {hotelCards.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative aspect-16/10 md:aspect-auto overflow-hidden bg-stone-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={hotel.img} 
                    alt={hotel.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-teal-950/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>第{hotel.id}選</span>
                  </div>
                </div>

                <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="flex items-center gap-1 text-teal-800 font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        佐賀県佐賀市富士町（古湯温泉）
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
                    <div className="font-semibold text-teal-950 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                      宿の注目ポイント
                    </div>
                    <ul className="space-y-1">
                      {hotel.highlights.map((h: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-stone-100 pt-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base sm:text-lg font-black text-teal-950">{hotel.price}</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs hover:shadow transition-all"
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
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-teal-800" />
              1泊2日モデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の佐賀富士町・ぬる湯と三瀬高原グルメを巡る週末周遊ルート
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-teal-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-teal-700" />
                【1日目】三瀬高原そばランチと古湯温泉ぬる湯体験
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>11:00 福岡市内または佐賀駅を出発：</strong>三瀬トンネルまたは長崎道・佐賀大和ICを経由して三瀬高原へ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>12:00 三瀬そば街道で新そばランチ：</strong>清流脊振山の伏流水で打つ十割手打ち蕎麦と、サクサクのみつせ鶏天ぷらを味わう。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>14:00 斎藤茂吉記念碑と嘉瀬川散策：</strong>古湯温泉街を散策し、歌碑をめぐりながら静かな初冬の風情に触れる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>15:30 宿へチェックイン＆ぬる湯温冷交互浴：</strong>38℃のぬる湯と加温湯を行き来し、日頃の凝りや緊張を完全にリセット。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>18:30 最高級佐賀牛＆みつせ鶏ディナー：</strong>霜降り佐賀牛の陶板焼きやすき焼き、佐賀のプレミアム地酒「鍋島」で至福の乾杯。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-teal-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-teal-700" />
                【2日目】共同浴場「英龍温泉」と三瀬高原ファーム巡り
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>07:30 朝のぬる湯で目覚めの入浴：</strong>嘉瀬川の川霧を眺めながら、やわらかな湯ざわりに包まれる贅沢な朝。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>08:30 佐賀県産米「さがびより」の朝食：</strong>つやつやのご飯と地元産卵、三瀬の焼き海苔で日本の正しい朝ごはん。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>10:00 共同浴場「英龍温泉」立ち寄り：</strong>地元の人々に親しまれる公衆浴場で、異なる源泉のぬる湯を体験。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>11:30 三瀬高原の直売所＆ハム工房立ち寄り：</strong>ドイツ製法の本格ソーセージ「イブスキ」や新鮮な冬野菜をお土産に購入。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-1" />
                  <span><strong>13:00 三瀬バーガーまたは地鶏ランチ＆帰路へ：</strong>みつせ鶏のジューシーな炭火焼きを味わい、福岡・佐賀方面へ帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-teal-800" />
              初冬の富士町・おみやげ＆立ち寄り散策手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              温泉街で手に入れたい初冬の佐賀銘品と立ち寄りスポット
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-700" />
                三瀬そば街道と石臼挽き手打ち十割そば
              </h3>
              <p>
                古湯温泉から車で約15分の三瀬村を貫く国道263号線沿いには、名店が軒を連ねる「三瀬そば街道」があります。脊振山系の清らかな湧水と寒暖差の大きい気候で育った新そば粉を使った手打ち蕎麦は、11月から12月がまさに新そばのベストシーズン。喉越しの良さと豊かな香りが際立ち、名物「板そば」を地元の仲間や家族とシェアして味わうのが定番の楽しみ方です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-teal-700" />
                佐賀銘酒「鍋島」「東一」と三瀬高原の乳製品
              </h3>
              <p>
                佐賀県は全国有数の酒どころ。世界最高峰のワイン品評会IWCでチャンピオンサケに輝いた「鍋島」をはじめ、「東一」「七田」「天吹」など芳醇旨口の純米酒が揃い、温泉街の酒屋や宿で入手できます。また三瀬高原の牧場直営店では、初冬の濃厚なジャージー牛乳で作られたソフトクリームやカマンベールチーズ、ロールケーキが並び、ドライブの立ち寄りに最適です。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-teal-800" />
              初冬の古湯・熊の川温泉・泉質と入浴メカニズム徹底解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ38℃の「ぬる湯」は冬の心身を極限までリラックスさせるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-teal-700" />
              体温同等の「不感温度帯」がもたらす自律神経の劇的リセット
            </h3>
            <p>
              古湯温泉の源泉温度である38℃前後は、医学的に「不感温度帯」と呼ばれます。これは熱さや冷たさを感知する皮膚の受容器が刺激されず、体温調節のためのエネルギー消費が最も少なくなる理想的な温度域です。高温の温泉に入った際に起こる急激な血圧上昇や交感神経の緊張が一切生じないため、心身を急速に副交感神経優位（リラックス状態）へと導きます。初冬の冷気で無意識にこわばった筋肉が自然と弛緩し、30分以上ゆったりと浸かることで脳の緊張が解きほぐされていきます。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-teal-700" />
              pH9.5の高アルカリ性泉質が生み出す天然の乳液効果
            </h3>
            <p>
              古湯・熊の川の湯は、重曹成分やメタケイ酸を含むpH9.0〜9.5のアルカリ性単純温泉。アルカリ性の湯は肌表面の余分な皮脂や古い角質を石鹸のように乳化させて洗い流す作用があり、入浴中から肌がツルツルと滑らかになります。さらに湯上がりの肌は水分を吸収しやすい状態になるため、乾燥しがちな初冬の素肌に驚くほどのしっとり感と透明感をもたらします。熊の川温泉に含まれる微量ラドン成分との相乗効果により、湯冷めしにくい体質改善効果も期待できます。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide bg-teal-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-teal-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の古湯温泉・熊の川温泉旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-teal-800" />
            あわせて読みたい初冬の西日本・名湯美食特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-kumamoto-yamaga-hirayama-onsen-bihada-akagyu-basashi-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">熊本・山鹿平山</span>
              <p className="font-bold text-stone-800 line-clamp-2">八千代座の小江戸情緒と極上とろとろ美肌ぬる湯・熊本あか牛＆馬刺し名宿</p>
            </Link>
            <Link 
              href="/winter-oita-hita-amagase-onsen-mamedamachi-bungogyu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">大分・日田天瀬</span>
              <p className="font-bold text-stone-800 line-clamp-2">水郷ひたの初冬川霧と天領豆田町の小江戸情緒・豊後牛名宿</p>
            </Link>
            <Link 
              href="/winter-wakayama-kawayu-yunomine-onsen-senninburo-kumanogyu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-teal-700 font-bold block text-[10px]">和歌山・熊野本宮</span>
              <p className="font-bold text-stone-800 line-clamp-2">冬の風物詩・大塔川仙人風呂オープンと世界遺産つぼ湯・熊野牛会席名宿</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
