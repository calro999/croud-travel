import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Anchor, Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: '日田温泉＆天瀬温泉で過ごす冬の旅（11・12月）！水郷ひたの初冬川霧と天領豆田！名宿5選',
  description: '11月中旬から12月の初冬を迎えた大分県日田市は、阿蘇や九重連山を源流とする清流・三隈川（みくまがわ）から立ちのぼる幻想的な朝霧「川霧」に包まれ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '日田温泉 宿泊, 天瀬温泉 旅館, 豆田町 小江戸, おおいた豊後牛, 三隈川 川霧, 山荘天水 亀山亭 うめひびき, 天領 日田観光, 玖珠川 露天風呂, 11月 12月 大分旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-oita-hita-amagase-onsen-mamedamachi-bungogyu-stay/"
  },
  openGraph: {
    title: '日田温泉＆天瀬温泉で過ごす冬の旅（11・12月）！水郷ひたの初冬川霧と天領豆田！名宿5選',
    description: '11月中旬から12月の初冬を迎えた大分県日田市は、阿蘇や九重連山を源流とする清流・三隈川（みくまがわ）から立ちのぼる幻想的な朝霧「川霧」に包まれ。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-oita-hita-amagase-onsen-mamedamachi-bungogyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の三隈川を包む幻想的な川霧と日田温泉の屋形船'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "日田温泉＆天瀬温泉で過ごす冬の旅（11・12月）！水郷ひたの初冬川霧と天領豆田町の小江戸情緒・玖珠川渓流露天とおおいた豊後牛・初冬鮎うるかを味わう名宿5選",
    description: "11月中旬から12月の初冬を迎えた大分県日田市は、阿蘇や九重連山を源流とする清流・三隈川（みくまがわ）から立ちのぼる幻想的な朝霧「川霧」に包まれ、水郷情緒が最もロマンチックに高まる季節を迎えます。江戸幕府の西国筋郡代が置かれた天領として繁栄した豆田町（まめだまち）には、白壁土蔵や格子窓の商家が連なり、まるで江戸時代にタイムスリップしたかのような風情が漂います。日田温泉の屋形船が浮かぶ川沿いの温泉街から、少し足を伸ばせば玖珠川（くすがわ）の渓流沿いに野趣あふれる露天風呂が点在する「天瀬温泉（あまがせおんせん）」、さらには響渓谷の断崖絶景を見下ろす「奥日田温泉」まで、多彩な名湯が旅人を迎えます。初冬の食卓を飾るのは、美しい霜降りと芳醇な脂の甘みが際立つ「おおいた豊後牛（おおいた和牛）」のすき焼きやステーキ、卵を抱いた冬の子持ち鮎の甘露煮や珍味「鮎うるか」、地鶏鍋、そして地元で愛されるパリッと香ばしい「日田やきそば」。水と緑と歴史が織りなす初冬の豊後路を満喫する厳選宿5選を詳しく紹介します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function OitaHitaAmagaseWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-oita-hita-amagase-onsen-mamedamachi-bungogyu-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev/"
        },
        "headline": "【11・12月日田温泉＆天瀬温泉】水郷ひたの初冬川霧と天領豆田町の小江戸情緒・玖珠川渓流露天とおおいた豊後牛・初冬鮎うるかを味わう名宿5選",
        "description": "11月中旬から12月の初冬を迎えた大分県日田市は、阿蘇や九重連山を源流とする清流・三隈川（みくまがわ）から立ちのぼる幻想的な朝霧「川霧」に包まれ、水郷情緒が最もロマンチックに高まる季節を迎えます。江戸幕府の西国筋郡代が置かれた天領として繁栄した豆田町（まめだまち）には、白壁土蔵や格子窓の商家が連なり、まるで江戸時代にタイムスリップしたかのような風情が漂います。日田温泉の屋形船が浮かぶ川沿いの温泉街から、少し足を伸ばせば玖珠川（くすがわ）の渓流沿いに野趣あふれる露天風呂が点在する「天瀬温泉（あまがせおんせん）」、さらには響渓谷の断崖絶景を見下ろす「奥日田温泉」まで、多彩な名湯が旅人を迎えます。初冬の食卓を飾るのは、美しい霜降りと芳醇な脂の甘みが際立つ「おおいた豊後牛（おおいた和牛）」のすき焼きやステーキ、卵を抱いた冬の子持ち鮎の甘露煮や珍味「鮎うるか」、地鶏鍋、そして地元で愛されるパリッと香ばしい「日田やきそば」。水と緑と歴史が織りなす初冬の豊後路を満喫する厳選宿5選を詳しく紹介します。",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.pages.dev/winter-oita-hita-amagase-onsen-mamedamachi-bungogyu-stay",
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
              "name": "日田温泉　亀山亭ホテル",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/67038/67038.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67038%2F67038.html",
              "priceRange": "¥7,065〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "大分県",
                "addressLocality": "日田市",
                "streetAddress": "日田市隈1-3-10",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.06",
                "reviewCount": 578
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "日田温泉　小京都の湯　みくまホテル",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/40499/40499.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40499%2F40499.html",
              "priceRange": "¥7,700〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "大分県",
                "addressLocality": "日田市",
                "streetAddress": "日田市隈1丁目3-19",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.06",
                "reviewCount": 476
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "天ヶ瀬温泉　山荘　天水",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/40204/40204.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40204%2F40204.html",
              "priceRange": "¥36,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "大分県",
                "addressLocality": "日田市",
                "streetAddress": "日田市天瀬町桜竹601",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.79",
                "reviewCount": 388
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "瀬音・湯音の宿　浮羽",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/49324/49324.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F49324%2F49324.html",
              "priceRange": "¥10,560〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "大分県",
                "addressLocality": "日田市",
                "streetAddress": "日田市天瀬町赤岩3-5",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "3.75",
                "reviewCount": 162
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "奥日田温泉　うめひびき",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/40907/40907.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40907%2F40907.html",
              "priceRange": "¥20,115〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "大分県",
                "addressLocality": "日田市",
                "streetAddress": "日田市大山町西大山4587",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.73",
                "reviewCount": 641
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
            "name": "水郷日田の初冬に見られる「川霧（朝霧）」の発生時期とおすすめ観賞スポットは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "日田盆地は山々に囲まれた地形のため、晩秋の11月から初冬の12月にかけて、夜間の放射冷却によって冷え込んだ大気が三隈川の水温との温度差によって水面から湯煙のように立ちのぼる「川霧（かわぎり）」が頻繁に発生します。発生しやすい時間帯は早朝の日の出前後から午前8時頃まで。おすすめ観賞スポットは、三隈川沿いの旅館最上階にある展望大浴場や客室、沈下橋周辺、そして少し高台にある「亀山公園（きざんこうえん）」です。朝日に照らされて霧が黄金色に輝く光景は幻想的です。"
            }
          },
          {
            "@type": "Question",
            "name": "江戸の天領「豆田町（まめだまち）」の見どころと所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "豆田町は江戸時代に幕府直轄地「天領」として日田商人たちが栄華を極めた歴史ある商家町で、国の重要伝統的建造物群保存地区に選定されています。国の重要文化財「草野本家」をはじめ、伝統的な下駄作りを受け継ぐ履物店、江戸時代創業の醤油・味噌蔵「原次郎左衛門」、酒蔵「クンチョウ酒造」などが軒を連ねます。古い白壁土蔵の町並みを歩き、日田下駄や羊羹、醤油の買い物を楽しむなら、所要時間は約1.5〜2時間程度が目安です。"
            }
          },
          {
            "@type": "Question",
            "name": "天瀬温泉（あまがせおんせん）の特徴と、名物の共同露天風呂とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "天瀬温泉は開湯1300年以上の歴史を誇り、別府・由布院と並ぶ「豊後三大温泉」の一つです。玖珠川の川沿いや河原に、川のせせらぎを間近に感じる開放的な共同露天風呂（「神田湯（じんでんゆ）」「益次郎温泉」「薬師湯」など・入浴料100円）が点在しているのが最大の特徴です。豊富な湯量と硫黄の香る良質な単純温泉は、入浴後すぐに肌がすべすべになる美肌の湯として古くから湯治客に親しまれています。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の日田・天瀬の気候と気温、服装の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "日田市は典型的な盆地気候のため、初冬の寒暖差が非常に大きいのが特徴です。11月の日中は15〜18℃前後と穏やかですが、朝晩は5℃以下まで冷え込みます。12月に入ると最高気温は10℃前後、朝晩は氷点近くまで下がります。特に早朝の川霧散策や夜の温泉街歩きには、厚手のダウンジャケットやコート、マフラー、手袋などのしっかりとした防寒着が必須です。"
            }
          },
          {
            "@type": "Question",
            "name": "福岡（博多）・大分空港・熊本方面からのアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "福岡・博多駅からは、JR久大本線の特急「ゆふいんの森」または特急「ゆふ」で日田駅まで直通約1時間15分、天ヶ瀬駅まで約1時間30分。高速バス「ひた号」（西鉄天神・博多駅〜日田）も約1時間40分で頻発しています。車の場合は、大分自動車道「日田IC」または「天瀬高塚IC」を利用。福岡ICから日田ICまでは高速道路で約1時間と、九州各都市からのアクセスが非常に良好です。"
            }
          }
        ]
      }
    ]
  };

  const faqList = [
  {
    "q": "水郷日田の初冬に見られる「川霧（朝霧）」の発生時期とおすすめ観賞スポットは？",
    "a": "日田盆地は山々に囲まれた地形のため、晩秋の11月から初冬の12月にかけて、夜間の放射冷却によって冷え込んだ大気が三隈川の水温との温度差によって水面から湯煙のように立ちのぼる「川霧（かわぎり）」が頻繁に発生します。発生しやすい時間帯は早朝の日の出前後から午前8時頃まで。おすすめ観賞スポットは、三隈川沿いの旅館最上階にある展望大浴場や客室、沈下橋周辺、そして少し高台にある「亀山公園（きざんこうえん）」です。朝日に照らされて霧が黄金色に輝く光景は幻想的です。"
  },
  {
    "q": "江戸の天領「豆田町（まめだまち）」の見どころと所要時間は？",
    "a": "豆田町は江戸時代に幕府直轄地「天領」として日田商人たちが栄華を極めた歴史ある商家町で、国の重要伝統的建造物群保存地区に選定されています。国の重要文化財「草野本家」をはじめ、伝統的な下駄作りを受け継ぐ履物店、江戸時代創業の醤油・味噌蔵「原次郎左衛門」、酒蔵「クンチョウ酒造」などが軒を連ねます。古い白壁土蔵の町並みを歩き、日田下駄や羊羹、醤油の買い物を楽しむなら、所要時間は約1.5〜2時間程度が目安です。"
  },
  {
    "q": "天瀬温泉（あまがせおんせん）の特徴と、名物の共同露天風呂とは？",
    "a": "天瀬温泉は開湯1300年以上の歴史を誇り、別府・由布院と並ぶ「豊後三大温泉」の一つです。玖珠川の川沿いや河原に、川のせせらぎを間近に感じる開放的な共同露天風呂（「神田湯（じんでんゆ）」「益次郎温泉」「薬師湯」など・入浴料100円）が点在しているのが最大の特徴です。豊富な湯量と硫黄の香る良質な単純温泉は、入浴後すぐに肌がすべすべになる美肌の湯として古くから湯治客に親しまれています。"
  },
  {
    "q": "11月・12月の日田・天瀬の気候と気温、服装の注意点は？",
    "a": "日田市は典型的な盆地気候のため、初冬の寒暖差が非常に大きいのが特徴です。11月の日中は15〜18℃前後と穏やかですが、朝晩は5℃以下まで冷え込みます。12月に入ると最高気温は10℃前後、朝晩は氷点近くまで下がります。特に早朝の川霧散策や夜の温泉街歩きには、厚手のダウンジャケットやコート、マフラー、手袋などのしっかりとした防寒着が必須です。"
  },
  {
    "q": "福岡（博多）・大分空港・熊本方面からのアクセス方法は？",
    "a": "福岡・博多駅からは、JR久大本線の特急「ゆふいんの森」または特急「ゆふ」で日田駅まで直通約1時間15分、天ヶ瀬駅まで約1時間30分。高速バス「ひた号」（西鉄天神・博多駅〜日田）も約1時間40分で頻発しています。車の場合は、大分自動車道「日田IC」または「天瀬高塚IC」を利用。福岡ICから日田ICまでは高速道路で約1時間と、九州各都市からのアクセスが非常に良好です。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "日田温泉　亀山亭ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67038/67038.jpg",
              rating: 4.06,
              reviews: 578,
              price: "¥7,065〜",
              access: "ＪＲ日田駅から徒歩１０分・車で２～３分（日田駅・日田バスからは、お電話を頂ければ送迎致します※19時まで）",
              special: "【3月リニューアルオープン！】伝統と格式はそのままに眺望温泉付客室、貸切湯などが新設！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67038%2F67038.html",
              story: "三隈川の畔に佇み、創業から百四十余年の歴史を誇る老舗旅館「日田温泉 亀山亭ホテル」。館内へ足を踏み入れると、ロビーのパノラマガラス越しに悠々と流れる三隈川と対岸の中ノ島が一望できます。最上階の展望大浴場と露天風呂からは、初冬の早朝に水面を覆い尽くす幻想的な「川霧」を眼下に見下ろすことができ、まるで雲の上に浮かんでいるかのような神秘的な湯浴みを体験できます。夕食は豊後の豊かな自然の恵みをふんだんに盛り込んだ本格和会席。きめ細やかなサシが入った「おおいた豊後牛」の陶板ステーキを中心に、清流の鮎料理、初冬の根菜を炊き合わせた煮物椀など、料理人が腕によりをかけた逸品が並びます。屋形船の情緒を感じながら、川のせせらぎに耳を傾ける贅沢な初冬の夜が静かに更けていきます。",
              roomTip: "三隈川を正面に見渡すリバービュー和室または和モダン客室。初冬の朝、水面から立ち上る川霧が朝日に照らされて黄金色に輝く瞬間は息をのむ絶景です。",
              gourmetTip: "「おおいた豊後牛陶板焼き＆鮎の初冬会席」。豊後牛の甘い肉汁と香ばしい焼き目、そして骨まで柔らかく煮込まれた鮎の甘露煮が絶妙な調和を見せます。",
              highlights: [
                "三隈川の畔に佇む創業百四十余年の老舗＆最上階展望露天風呂から見下ろす初冬の幻想的川霧",
                "おおいた豊後牛陶板ステーキ会席＆骨まで柔らかい鮎甘露煮と地酒ペアリング",
                "川沿いの静かな散策路と屋形船情緒＆広々とした和室で寛ぐ初冬のリバーサイドステイ"
              ]
            },
            {
              id: 2,
              name: "日田温泉　小京都の湯　みくまホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40499/40499.jpg",
              rating: 4.06,
              reviews: 476,
              price: "¥7,700〜",
              access: "高速で博多から日田まで約１時間。日田ＩＣより５分。日田駅/日田バスセンターよりお迎え有り（要予約１９時頃迄）",
              special: "三隅川に面した展望風呂、総檜露天風呂は九州で一番高い地上５０ｍにあります。夏には鵜飼いもございます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40499%2F40499.html",
              story: "三隈川の絶景を地上から望む屈指の高層階展望風呂を擁し、「小京都の風情と名湯」を堪能できる「日田温泉 小京都の湯 みくまホテル」。最上階の展望露天風呂「みくまの湯」は、日田の町並みと三隈川の大パノラマを遮るものなく見渡せる特等席。初冬の澄みきった大気の中、柔らかな弱アルカリ性単純温泉に浸かれば、日々の疲れがすっと解きほぐされていきます。夕食は地産地消にこだわった季節の郷土会席。柔らかなおおいた豊後牛のすき焼き小鍋をはじめ、朝獲れの川魚料理、地元の旬野菜を使った天ぷらなど、温かいものは温かいうちに運ばれる心のこもったもてなしが評判です。豆田町の古い町並み散策への拠点としても便利な立地で、家族旅行から一人旅まで心地よい滞在を約束してくれます。",
              roomTip: "最上階フロアのリバービュー展望客室。窓辺のソファに身を委ね、刻一刻と表情を変える三隈川の水鏡と夕暮れの空のグラデーションを楽しめます。",
              gourmetTip: "「豊後牛すき焼きと郷土の旬彩会席」。特製の甘辛い割り下で煮込む豊後牛の深いコクを、新鮮な地卵にたっぷりと絡めて味わう冬の贅沢。",
              highlights: [
                "地上高層階の展望露天「みくまの湯」から小京都日田のパノラマ＆豊後牛すき焼き小鍋会席",
                "豆田町の小江戸町並み散策への好立地＆地産地消にこだわった温かな手作り料理",
                "ファミリーから一人旅まで心地よいもてなし＆朝日に輝く三隈川の絶景モーニング"
              ]
            },
            {
              id: 3,
              name: "天ヶ瀬温泉　山荘　天水",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40204/40204.jpg",
              rating: 4.79,
              reviews: 388,
              price: "¥36,000〜",
              access: "JR天ヶ瀬駅から車で10分(送迎可)/天ヶ瀬高塚ＩＣから車で25分(送迎可)",
              special: "趣向の違う7種の秘湯を愉しめる隠れ宿◆旬会席と心温まるおもてなしも自慢です",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40204%2F40204.html",
              story: "天瀬温泉の温泉街から少し離れた合楽川（ごうらくがわ）の深い渓谷沿いにひっそりと佇む、全国の温泉通が憧れる最高峰の隠れ宿「天ヶ瀬温泉 山荘 天水（てんすい）」。手入れの行き届いた広大な雑木林に囲まれ、初冬の澄んだ森の香りと滝の瀑音が旅人を別世界へと誘います。名物の露天風呂「滝観庵（ろうかんあん）」からは、目の前を流れ落ちる名瀑「桜滝」の飛瀑を眺めながら野趣あふれる湯浴みが楽しめ、その迫力と清涼感は圧巻の一言。源泉かけ流しの清らかな湯は肌にしっとりと馴染みます。夕食は山の幸と川の恵み、そして近海から届く海の幸を芸術的な盛り付けで供する創作山里懐石。極上のおおいた豊後牛フィレ肉の炭火焼きや冬の根菜料理など、一品一品に料理長の感性が光る至極の美食が供されます。",
              roomTip: "渓流のせせらぎを間近に聴く露天風呂付き離れ客室。プライベートなテラスから冬枯れの森と清流を眺め、何もしない贅沢な時間を堪能できます。",
              gourmetTip: "「山里創作懐石＆極上おおいた豊後牛炭火焼き。」。炭火の香ばしさをまとった豊後牛のジューシーな旨味と、旬の山菜・川魚が織りなす極上のハーモニー。",
              highlights: [
                "雑木林に抱かれた最高峰の隠れ宿＆桜滝を眼前に望む名物露天「滝観庵」と創作山里懐石",
                "渓流露天風呂付き離れ客室の静寂美＆炭火で香ばしく焼き上げる豊後牛フィレ肉",
                "全国の温泉通を唸らせる極上の美空間＆四季折々の自然と響き合う非日常体験"
              ]
            },
            {
              id: 4,
              name: "瀬音・湯音の宿　浮羽",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/49324/49324.jpg",
              rating: 3.75,
              reviews: 162,
              price: "¥10,560〜",
              access: "ＪＲ九大本線　天ヶ瀬駅より徒歩１０分",
              special: "和をコンセプトとした空間には静かに音楽が流れ、落ち着いたムードの中で旬の会席と地酒が楽しめる。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F49324%2F49324.html",
              story: "玖珠川の清流のせせらぎに寄り添うように建ち、古き良き湯治場の温もりを今に伝える「瀬音・湯音の宿 浮羽（うきは）」。宿の自慢は、玖珠川を眼下に見下ろす絶景露天風呂。湯船に身を沈めれば、川のせせらぎ（瀬音）とこんこんと湧き出る温泉の音（湯音）が心地よく重なり合い、天然のヒーリングミュージックとなって心身を癒やしてくれます。天瀬温泉特有の豊富な湯量を誇る弱アルカリ性の湯は、湯上がりの肌がつるつるになると女性客にも大好評。夕食は日田・天瀬の家庭的な温かさを感じる郷土料理会席。おおいた豊後牛の陶板焼きをはじめ、清流で育ったヤマメの塩焼き、手作りの小鉢料理が並び、どこか懐かしく温かな味わいに心が満たされます。気取らないおもてなしと良心的な価格設定も魅力です。",
              roomTip: "玖珠川の渓谷美を望む和室。川沿いの静かな環境で、窓を開けると心地よいせせらぎの音と初冬の澄んだ空気が部屋いっぱいに満ちわたります。",
              gourmetTip: "「豊後牛陶板焼きと清流ヤマメ炭火焼き会席」。皮目をパリッと焼き上げたヤマメのホクホクとした白身と、柔らかな豊後牛の滋味が食欲をそそります。",
              highlights: [
                "玖珠川のせせらぎに包まれる絶景渓流露天風呂＆良質な天然温泉とアットホームな郷土料理",
                "美肌効果抜群の弱アルカリ性源泉＆清流ヤマメ炭火焼きと豊後牛の贅沢小鍋",
                "瀬音と湯音に癒やされる昔ながらの湯治情緒＆リーズナブルに楽しむ本物の名湯"
              ]
            },
            {
              id: 5,
              name: "奥日田温泉　うめひびき",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40907/40907.jpg",
              rating: 4.73,
              reviews: 641,
              price: "¥20,115〜",
              access: "福岡空港→日田IC（九州自動車道→大分自動車道）約60分→奥日田温泉うめひびき（国道212号）約25分",
              special: "奥日田の雄大な景色を眺めながら温泉や食事、そして梅酒を楽しめる宿　",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40907%2F40907.html",
              story: "日田の奥座敷、梅の郷として知られる大山町の響渓谷を望む高台に建つ高級温泉リゾート「奥日田温泉 うめひびき」。エントランスを抜けると、目の前には切り立った響渓谷の雄大な岩壁と冬枯れの木々が織りなすパノラマビューが広がり、訪れる者を圧倒します。展望大浴場「緑宝」や露天風呂、さらには活盤浴（岩盤浴）など充実したスパ施設を備え、初冬の澄み渡る空気の中で渓谷美を眺めながら極上のリラクゼーションを体感できます。夕食は地元大山の特産品である梅を巧みに取り入れた創作和会席。おおいた豊後牛の極上ロース肉をはじめ、地元の契約農家から仕入れる新鮮野菜、初冬の川魚などを、大山特産の熟成梅酒とともに楽しめます。静寂と贅沢を極めた大人のためのリトリート空間です。",
              roomTip: "響渓谷の絶壁を一望する温泉半露天風呂付きプレミアム和洋室。プライベートな湯船から大自然の静寂と雄大な山肌を眺める非日常の滞在が叶います。",
              gourmetTip: "「奥日田旬彩会席＆おおいた和牛ステーキ」。熟成梅酒の豊かな香りと、口の中でとろける最高ランク豊後牛の旨味が響き合う至高のディナー。",
              highlights: [
                "響渓谷の絶壁を見下ろす圧倒的な絶景リゾート＆大山特産梅酒と極上おおいた豊後牛ステーキ",
                "展望大浴場「緑宝」と充実の活盤浴スパ＆大人のためのラグジュアリーリトリート",
                "梅の郷大山ならではの豊かな食と文化＆洗練された和モダン建築の落ち着き"
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
      <header className="bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wide border border-teal-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            11月・12月初冬の水郷名湯＆豊後美食特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">{metadata.title as string}</h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            三隈川を包む幻想的な朝霧「川霧」と天領豆田町の白壁土蔵。
            玖珠川渓流露天風呂のせせらぎ、最高峰おおいた豊後牛と初冬鮎料理、大山の芳醇な梅酒に酔いしれる初冬の旅。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月日田温泉＆天瀬温泉】水郷ひたの初冬川霧と天領豆田！名宿5選","item":"https://croud-travel.pages.dev/winter-oita-hita-amagase-onsen-mamedamachi-bungogyu-stay"}]}) }}
      />

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-teal-900 font-bold text-sm tracking-wide">
            <Footprints className="w-4 h-4 text-teal-700" />
            水郷ひたが魅せる初冬の川霧と天領小江戸の歴史
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            朝夕の冷え込みが深まる11月中旬から12月、大分県西部の盆地に位置する「水郷・日田（ひた）」は、一年で最も幻想的な美しさに包まれる季節を迎えます。山々から流れ込む清流・三隈川（みくまがわ）からは、夜の冷気と温かい川の水温差によって「川霧（朝霧）」が立ちのぼり、川沿いの温泉街や屋形船が朝露の中に幽玄に浮かび上がります。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            江戸時代に幕府直轄の「天領」として西国筋郡代が置かれ、豪商たちが独自の文化を開花させた日田。国の重要伝統的建造物群保存地区に選定されている「豆田町（まめだまち）」には、白壁土蔵や格子戸の商家、歴史ある酒蔵や醤油蔵が今も連なり、初冬の静かな散策に格別の情緒を添えてくれます。さらに少し足を伸ばせば、清流・玖珠川沿いに共同露天風呂が点在する「天瀬温泉（あまがせおんせん）」や、切り立った響渓谷を望む「奥日田温泉」など、豊かな自然に抱かれた名湯が湯煙を上げています。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            そして冬の旅の大きな楽しみが、大分の大自然が育んだ極上の味覚。美しい霜降りとオレイン酸を豊富に含み、口の中でとろける最高峰ブランド黒毛和牛「おおいた豊後牛（おおいた和牛）」のすき焼きやステーキ、卵をたっぷり抱えた冬の子持ち鮎の甘露煮や珍味「鮎うるか」、地鶏鍋、そして特産の梅酒。心まで温まる豊後路の初冬旅へ出かけましょう。
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
              初冬の川霧絶景と豊後牛を堪能する日田・天瀬の名宿
            </h2>
          </div>

          <div className="space-y-8">
            {hotelCards.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xs border border-stone-200 transition hover:shadow-md duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-100 pb-4">
                    <div>
                      <span className="inline-block text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full mb-1">
                        第{hotel.id}選
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                        {hotel.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center text-amber-500 font-bold text-sm">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span>{hotel.rating}</span>
                        <span className="text-stone-400 text-xs ml-1">({hotel.reviews}件)</span>
                      </div>
                      <span className="text-sm sm:text-base font-extrabold text-teal-900">
                        {hotel.price}
                      </span>
                    </div>
                  </div>

                  {/* Image & Description Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-5 relative h-56 md:h-auto min-h-[220px] rounded-2xl overflow-hidden bg-stone-100">
                      <img 
                        src={hotel.img} 
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:col-span-7 space-y-4">
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-stone-100">
                        <div className="text-xs text-stone-700 bg-stone-50 p-2.5 rounded-xl">
                          <span className="font-bold text-teal-950 block mb-0.5">客室滞在のポイント：</span>
                          {hotel.roomTip}
                        </div>
                        <div className="text-xs text-stone-700 bg-teal-50/50 p-2.5 rounded-xl border border-teal-100/50">
                          <span className="font-bold text-teal-950 block mb-0.5">初冬の味覚おすすめ：</span>
                          {hotel.gourmetTip}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-1.5 pt-2">
                    <h4 className="text-xs font-bold text-stone-800 tracking-wider">
                      この宿の初冬ステイおすすめポイント
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                      {hotel.highlights.map((hl, hlIdx) => (
                        <li key={hlIdx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA & Access */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-stone-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>{hotel.access}</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-teal-900 hover:bg-teal-950 text-white text-xs sm:text-sm font-bold rounded-xl transition duration-200 shadow-xs"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet Section */}
        <section className="bg-gradient-to-br from-slate-900 via-teal-950 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4 text-teal-300" />
            初冬の日田・天瀬美食手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            11月・12月の日田で味わい尽くす極上豊後牛・初冬鮎・名水地鶏
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-teal-400" />
                最高峰「おおいた豊後牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                百年の歴史を誇る大分県産黒毛和牛の最高峰。オレイン酸を豊富に含み、舌の上でとろけるような口溶けと赤身の深い旨味が特徴。すき焼き小鍋や陶板ステーキで熱々のまま味わうのが冬の醍醐味です。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Waves className="w-4 h-4 text-teal-400" />
                冬の子持ち鮎甘露煮＆うるか
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                三隈川の清流で育った鮎は日田の象徴。初冬には卵をたっぷり抱えた子持ち鮎を骨までじっくり煮込んだ甘露煮や、鮎の内臓を塩漬けにして熟成させた伝統の珍味「うるか」が地酒の最高の供になります。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Wine className="w-4 h-4 text-teal-400" />
                大山特産「熟成梅酒」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                「梅栗植えてハワイへ行こう」のキャッチフレーズで知られる奥日田・大山町。厳選された鶯宿梅や南高梅をじっくり漬け込み熟成させたプレミアム梅酒は、芳醇な香りと上品な酸味が肉料理の旨味を引き立てます。
              </p>
            </div>
          </div>
        </section>

        {/* 1 Night 2 Days Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-900 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <Footprints className="w-4 h-4" />
            おすすめ滞在プラン
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の水郷小江戸と渓流露天風呂を満喫する1泊2日モデルコース
          </h2>
          <div className="space-y-6 pt-2">
            <div className="border-l-2 border-teal-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-teal-100 text-teal-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                1日目：日田駅到着から豆田町天領小江戸散策・三隈川温泉ステイ
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                白壁土蔵の町家と酒蔵を巡り、川沿いの展望露天風呂とおおいた豊後牛を堪能
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                午前中にJR日田駅へ到着。まずは豆田町へ向かい、草野本家や薫長酒造の白壁土蔵が連なる町並みを散策。名物の日田焼きそばでランチを済ませた後、伝統の日田下駄や柚子胡椒のお土産を購入。15時に三隈川沿いまたは天瀬の温泉宿へチェックイン。展望大浴場から三隈川や玖珠川のせせらぎを眺めながら、弱アルカリ性の柔らかな美肌湯を満喫。夕食には美しい霜降りのおおいた豊後牛すき焼き、冬の子持ち鮎甘露煮、大山特産の梅酒に舌鼓を打ちます。
              </p>
            </div>

            <div className="border-l-2 border-teal-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-teal-100 text-teal-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                2日目：幻想的な川霧の朝風呂・天瀬温泉の渓流共同露天巡りへ
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                黄金色に輝く川霧を眺め、桜滝の飛瀑と野趣あふれる川沿い名湯で心身を再生
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                早朝、三隈川の水面から立ち上る幻想的な「川霧」を展望露天風呂から鑑賞。朝食後にチェックアウトし、天瀬温泉方面へ移動。天瀬駅近くの名瀑「桜滝」を訪れ、初冬の澄んだ空気の中で豪快な瀑布を体感。川沿いに佇む風情ある共同露天風呂（神田湯など）を巡り、硫黄が香る掛け流しの湯で足元から温まります。水郷日田の豊かな自然と温かなおもてなしの記憶を胸に帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-900 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <Footprints className="w-4 h-4" />
            初冬の日田・天瀬・おみやげ＆天領散策手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            天領の歴史と名水が育んだ初冬の伝統工芸と名物みやげ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Landmark className="w-4 h-4 text-teal-600" />
                日田杉の伝統下駄と木工クラフト
              </h3>
              <p>
                江戸時代の天領時代から杉の産地として栄えた日田は、日本屈指の「下駄（げた）」の生産地です。豆田町の履物店には、日田杉の美しい木目を生かした素焼き下駄や塗り下駄、モダンな室内用サンダルなどが並びます。足裏に心地よくフィットする温もりある木製品は、旅の記念やお土産に大変喜ばれています。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-600" />
                創業160年原次郎左衛門の鮎魚醤と柚子胡椒
              </h3>
              <p>
                安政6年創業の老舗蔵元「原次郎左衛門（まるはら）」が手がける「鮎魚醤（あゆぎょしょう）」は、新鮮な鮎と塩のみで長期熟成させた世界唯一の調味料。臭みが全くなく、上品で奥深い旨味がひと垂らしで料理を劇的に引き立てます。また、大分特産の青唐辛子と黄柚子で作る風味豊かな柚子胡椒や赤司羊羹も、初冬の温泉土産の定番です。
              </p>
            </div>
          </div>
        </section>

        {/* Climate & Access Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-900 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <Sun className="w-4 h-4" />
            11月・12月の気候・服装・快適アクセス案内
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の日田・天瀬旅行のポイントと防寒・移動のコツ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-teal-600" />
                盆地特有の朝晩の寒暖差対策
              </h3>
              <p>
                日田市は周囲を山に囲まれた盆地のため、日中は穏やかでも朝晩の冷え込みが急速に進みます。11月・12月の早朝に川霧を見学したり豆田町を歩く際は、厚手のダウンコートや裏起毛のパンツ、マフラー、手袋を着用してください。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-teal-600" />
                福岡・大分からの快適アクセス
              </h3>
              <p>
                JR博多駅から特急「ゆふいんの森」や「ゆふ」で日田駅まで直通約1時間15分、天ヶ瀬駅まで約1時間30分。高速バス「ひた号」も頻発しています。車の場合は大分道日田ICまたは天瀬高塚ICから約15分。平野部は積雪の心配が少なく快適にドライブできます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-teal-900 text-sm font-bold bg-teal-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の日田・天瀬温泉旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-teal-800 shrink-0 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Link Section */}
        <section className="bg-gradient-to-br from-slate-900 to-teal-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-teal-300" />
              あわせて読みたい九州・豊後路の冬名湯・美食特集
            </h3>
            <p className="text-xs sm:text-sm text-teal-200">
              冬の味覚と雪見露天風呂、極上豊後牛を堪能するおすすめ旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-oita-sujiyu-onsen-kuju-bungo-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-300 bg-teal-400/20 px-2 py-0.5 rounded-full inline-block">大分・九重筋湯</span>
              <h4 className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
                筋湯温泉 うたせ湯雪見露天＆極上豊後牛名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                九重連山の雄大な初冬雪景色と日本一の打たせ湯、豊後牛すき焼きを味わう秘湯旅。
              </p>
            </Link>

            <Link 
              href="/winter-kumamoto-tsuetate-waita-onsen-steam-akagyu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-300 bg-teal-400/20 px-2 py-0.5 rounded-full inline-block">熊本・杖立わいた</span>
              <h4 className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
                杖立地獄蒸し＆わいた温泉郷・あか牛名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                立ちのぼる白い湯煙と名物地獄蒸し料理、阿蘇あか牛と青白く輝くコイン式露天風呂巡り。
              </p>
            </Link>

            <Link 
              href="/winter-fukuoka-harazuru-onsen-w-bihada-hakata-beef-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-teal-300 bg-teal-400/20 px-2 py-0.5 rounded-full inline-block">福岡・筑後川</span>
              <h4 className="text-xs font-bold text-white group-hover:text-teal-200 transition line-clamp-2">
                原鶴温泉 W美肌湯＆博多和牛すき焼き名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                弱アルカリ性と硫黄泉のダブル美肌湯と、筑後川の初冬夕景・博多和牛を味わう温泉旅。
              </p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-oita-hita-amagase-onsen-mamedamachi-bungogyu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
