import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Sparkle, ThermometerSun, Footprints, Landmark, Mountain, Map, Heart, ShoppingBag, Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: '山鹿温泉＆平山温泉で過ごす冬の旅（11・12月）！熊本あか牛溶岩焼き！名宿5選',
  description: '11月中旬から12月の初冬を迎えた火の国・熊本の北部に位置する「山鹿温泉」と、その山懐に抱かれた秘湯「平山温泉」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '山鹿温泉 宿泊, 平山温泉 旅館, 熊本あか牛 溶岩焼き, 本場馬刺し 熊本, 八千代座 観光, さくら湯 元湯, 強アルカリ性 美肌ぬる湯, 11月 12月 熊本旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kumamoto-yamaga-hirayama-onsen-bihada-akagyu-basashi-stay/"
  },
  openGraph: {
    title: '山鹿温泉＆平山温泉で過ごす冬の旅（11・12月）！熊本あか牛溶岩焼き！名宿5選',
    description: '11月中旬から12月の初冬を迎えた火の国・熊本の北部に位置する「山鹿温泉」と、その山懐に抱かれた秘湯「平山温泉」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kumamoto-yamaga-hirayama-onsen-bihada-akagyu-basashi-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '豊前街道の歴史ある街並みと極上とろとろ美肌湯の山鹿・平山温泉'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "山鹿温泉＆平山温泉で過ごす冬の旅（11・12月）！八千代座の小江戸情緒と極上とろとろ美肌ぬる湯・熊本あか牛溶岩焼き＆極上霜降り馬刺しを堪能する名宿5選",
    description: "11月中旬から12月の初冬を迎えた火の国・熊本の北部に位置する「山鹿温泉」と、その山懐に抱かれた秘湯「平山温泉」。菊池川の水面から幻想的な川霧が立ち込めるこの季節、豊前街道沿いの白壁土蔵や国指定重要文化財の芝居小屋「八千代座」には凛とした初冬の静寂が広がり、旅情をそそる小江戸情緒に包まれます。平安時代の古書にも記された歴史を持つ山鹿温泉は、肌に吸い付くようにまろやかなアルカリ性単純温泉。そして車で約15分の平山温泉は、全国屈指のpH9.8を超える強アルカリ性硫黄泉で、まるで高級美容液に浸かっているかのようなトロトロの「ぬる湯」が自噴する奇跡の美肌湯治場です。湯上がりの肌は驚くほど滑らかになり、体の芯からポカポカとしたぬくもりが長く続きます。夕食の膳を彩るのは、初冬に旨味を凝縮させた熊本のブランド肉・食材の饗宴。赤身の力強い旨味と上質なサシが溶け合う「熊本あか牛」の溶岩焼きやすき焼き、本場ならではの鮮度を誇る極上霜降り「馬刺し」の食べ比べ、そして冬の根菜と小麦団子を煮込んだ温かい郷土料理「だご汁」。温泉街の元湯「さくら湯」の総檜風呂巡りとともに、心身を再生させる初冬の贅沢な滞在が叶う厳選宿5選を詳しく紹介します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function KumamotoYamagaHirayamaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-kumamoto-yamaga-hirayama-onsen-bihada-akagyu-basashi-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev/"
        },
        "headline": "【11・12月山鹿温泉＆平山温泉】八千代座の小江戸情緒と極上とろとろ美肌ぬる湯・熊本あか牛溶岩焼き＆極上霜降り馬刺しを堪能する名宿5選",
        "description": "11月中旬から12月の初冬を迎えた火の国・熊本の北部に位置する「山鹿温泉」と、その山懐に抱かれた秘湯「平山温泉」。菊池川の水面から幻想的な川霧が立ち込めるこの季節、豊前街道沿いの白壁土蔵や国指定重要文化財の芝居小屋「八千代座」には凛とした初冬の静寂が広がり、旅情をそそる小江戸情緒に包まれます。平安時代の古書にも記された歴史を持つ山鹿温泉は、肌に吸い付くようにまろやかなアルカリ性単純温泉。そして車で約15分の平山温泉は、全国屈指のpH9.8を超える強アルカリ性硫黄泉で、まるで高級美容液に浸かっているかのようなトロトロの「ぬる湯」が自噴する奇跡の美肌湯治場です。湯上がりの肌は驚くほど滑らかになり、体の芯からポカポカとしたぬくもりが長く続きます。夕食の膳を彩るのは、初冬に旨味を凝縮させた熊本のブランド肉・食材の饗宴。赤身の力強い旨味と上質なサシが溶け合う「熊本あか牛」の溶岩焼きやすき焼き、本場ならではの鮮度を誇る極上霜降り「馬刺し」の食べ比べ、そして冬の根菜と小麦団子を煮込んだ温かい郷土料理「だご汁」。温泉街の元湯「さくら湯」の総檜風呂巡りとともに、心身を再生させる初冬の贅沢な滞在が叶う厳選宿5選を詳しく紹介します。",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.pages.dev/winter-kumamoto-yamaga-hirayama-onsen-bihada-akagyu-basashi-stay",
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
              "name": "山鹿温泉　清流荘",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/16334/16334.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16334%2F16334.html",
              "priceRange": "¥19,855〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "熊本県",
                "addressLocality": "山鹿市",
                "streetAddress": "山鹿市山鹿1768",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.76",
                "reviewCount": 345
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "山鹿温泉　眺山庭",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/184556/184556.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184556%2F184556.html",
              "priceRange": "¥16,500〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "熊本県",
                "addressLocality": "山鹿市",
                "streetAddress": "山鹿市志々岐2508",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.24",
                "reviewCount": 102
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "山鹿温泉　熊本旬彩の宿ゆとりろ山鹿",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/109403/109403.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109403%2F109403.html",
              "priceRange": "¥7,700〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "熊本県",
                "addressLocality": "山鹿市",
                "streetAddress": "山鹿市宗方通702",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "3.89",
                "reviewCount": 1360
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "平山温泉　旅館　善屋",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/16189/16189.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16189%2F16189.html",
              "priceRange": "¥10,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "熊本県",
                "addressLocality": "山鹿市",
                "streetAddress": "山鹿市平山432",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.37",
                "reviewCount": 451
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "山鹿温泉　富士ホテル",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/39572/39572.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39572%2F39572.html",
              "priceRange": "¥7,315〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "熊本県",
                "addressLocality": "山鹿市",
                "streetAddress": "山鹿市昭和町506",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "3.94",
                "reviewCount": 376
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
            "name": "山鹿温泉と平山温泉の違いは何ですか？両方をめぐることはできますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "山鹿温泉と平山温泉は車でわずか約15分（約8km）の距離にあり、1回の旅行で両方の名湯をめぐる湯めぐりが非常に人気です。山鹿温泉は菊池川沿いに栄えた歴史ある宿場町で、弱アルカリ性の単純温泉は「乙女の柔肌」と呼ばれるほど刺激が少なくまろやか。一方、山あいの里山に佇む平山温泉は、全国屈指のpH9.8を超える強アルカリ性硫黄温泉で、まるで化粧水やローションに浸かっているかのようなトロトロ感が特徴です。泉質と街の風情がまったく異なるため、双方をハシゴすることで極上の美肌湯比べが楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の山鹿温泉・平山温泉周辺の気候と気温、雪の心配はありますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "熊本県北部に位置する山鹿・平山エリアは内陸部のため、初冬の11月・12月は朝晩の冷え込みがやや強まりますが、南国九州の気候により日中は最高気温13〜17℃前後と比較的穏やかです。11月・12月に雪が積もることは極めて稀で、平野部・温泉街の幹線道路はノーマルタイヤで問題なくアクセス可能です。ただし、朝霧が深く立ち込める早朝や、山間部の橋梁部では路面凍結の可能性があるため、急発進・急ブレーキを避けた慎重な運転を心がけてください。"
            }
          },
          {
            "@type": "Question",
            "name": "山鹿温泉のシンボル「八千代座（やちよざ）」と「さくら湯」の見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「八千代座」は明治43年（1910年）に旦那衆によって建てられた江戸歌舞伎劇場の様式を伝える芝居小屋で、国指定重要文化財です。枡席や廻り舞台、奈落（舞台裏地下）などをガイド付きで見学でき、当時の華やかな小江戸文化を体感できます。また「さくら湯」は江戸時代の細川藩主の御前湯をルーツとする歴史的公衆浴場で、重厚な唐破風の木造建築と総檜造りの大浴場が圧巻。市民や観光客に親しまれる山鹿温泉の元湯です。"
            }
          },
          {
            "@type": "Question",
            "name": "熊本グルメの「あか牛」と「馬刺し」の特徴と美味しい食べ方は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「熊本あか牛（褐毛和種）」は、阿蘇の広大な草原で放牧され健康的に育てられる和牛です。黒毛和牛に比べて赤身の割合が高く、タウリンや鉄分が豊富でヘルシー。肉本来の力強い旨味と上品な甘い脂が特徴で、溶岩焼きやステーキ、すき焼きに最適です。また熊本名物の「馬刺し」は、美しいサシの入った特上霜降りや赤身、コラーゲンたっぷりのタテガミ（コウネ）など部位ごとの食感の違いが魅力。甘口の九州醤油とおろし生姜、ニンニクでいただくのが本場の醍醐味です。"
            }
          },
          {
            "@type": "Question",
            "name": "福岡空港や熊本駅、九州新幹線からのアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "九州新幹線を利用する場合、「新玉名駅」または「新大牟田駅」から路線バスまたはタクシーで約25〜30分です。熊本駅からは桜町バスターミナル経由の路線バスで約70分。福岡方面から車の場合は、九州自動車道「菊水IC」から山鹿温泉まで約15分、福岡市内から高速利用で約1時間15分と好アクセスです。平山温泉へは山鹿温泉街から県道経由で約10〜15分で到着します。"
            }
          }
        ]
      }
    ]
  };

  const faqListItems = [
  {
    "q": "山鹿温泉と平山温泉の違いは何ですか？両方をめぐることはできますか？",
    "a": "山鹿温泉と平山温泉は車でわずか約15分（約8km）の距離にあり、1回の旅行で両方の名湯をめぐる湯めぐりが非常に人気です。山鹿温泉は菊池川沿いに栄えた歴史ある宿場町で、弱アルカリ性の単純温泉は「乙女の柔肌」と呼ばれるほど刺激が少なくまろやか。一方、山あいの里山に佇む平山温泉は、全国屈指のpH9.8を超える強アルカリ性硫黄温泉で、まるで化粧水やローションに浸かっているかのようなトロトロ感が特徴です。泉質と街の風情がまったく異なるため、双方をハシゴすることで極上の美肌湯比べが楽しめます。"
  },
  {
    "q": "11月・12月の山鹿温泉・平山温泉周辺の気候と気温、雪の心配はありますか？",
    "a": "熊本県北部に位置する山鹿・平山エリアは内陸部のため、初冬の11月・12月は朝晩の冷え込みがやや強まりますが、南国九州の気候により日中は最高気温13〜17℃前後と比較的穏やかです。11月・12月に雪が積もることは極めて稀で、平野部・温泉街の幹線道路はノーマルタイヤで問題なくアクセス可能です。ただし、朝霧が深く立ち込める早朝や、山間部の橋梁部では路面凍結の可能性があるため、急発進・急ブレーキを避けた慎重な運転を心がけてください。"
  },
  {
    "q": "山鹿温泉のシンボル「八千代座（やちよざ）」と「さくら湯」の見どころは？",
    "a": "「八千代座」は明治43年（1910年）に旦那衆によって建てられた江戸歌舞伎劇場の様式を伝える芝居小屋で、国指定重要文化財です。枡席や廻り舞台、奈落（舞台裏地下）などをガイド付きで見学でき、当時の華やかな小江戸文化を体感できます。また「さくら湯」は江戸時代の細川藩主の御前湯をルーツとする歴史的公衆浴場で、重厚な唐破風の木造建築と総檜造りの大浴場が圧巻。市民や観光客に親しまれる山鹿温泉の元湯です。"
  },
  {
    "q": "熊本グルメの「あか牛」と「馬刺し」の特徴と美味しい食べ方は？",
    "a": "「熊本あか牛（褐毛和種）」は、阿蘇の広大な草原で放牧され健康的に育てられる和牛です。黒毛和牛に比べて赤身の割合が高く、タウリンや鉄分が豊富でヘルシー。肉本来の力強い旨味と上品な甘い脂が特徴で、溶岩焼きやステーキ、すき焼きに最適です。また熊本名物の「馬刺し」は、美しいサシの入った特上霜降りや赤身、コラーゲンたっぷりのタテガミ（コウネ）など部位ごとの食感の違いが魅力。甘口の九州醤油とおろし生姜、ニンニクでいただくのが本場の醍醐味です。"
  },
  {
    "q": "福岡空港や熊本駅、九州新幹線からのアクセス方法は？",
    "a": "九州新幹線を利用する場合、「新玉名駅」または「新大牟田駅」から路線バスまたはタクシーで約25〜30分です。熊本駅からは桜町バスターミナル経由の路線バスで約70分。福岡方面から車の場合は、九州自動車道「菊水IC」から山鹿温泉まで約15分、福岡市内から高速利用で約1時間15分と好アクセスです。平山温泉へは山鹿温泉街から県道経由で約10〜15分で到着します。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "山鹿温泉　清流荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16334/16334.jpg",
              rating: 4.76,
              reviews: 345,
              price: "¥19,855〜",
              access: "九州新幹線：JR新玉名駅よりバスで60分 ／ 車：菊水IC若しくは植木ICより車で15分",
              special: "こだわりの会席料理を楽しむ【鹿門亭】創作会席料理と露天風呂付和洋室の上質な空間【水鏡庵】",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16334%2F16334.html",
              story: "清流・菊池川のほとりに佇み、創業以来きめ細やかなもてなしと四季折々の風情で愛され続ける山鹿温泉を代表する名門旅館「山鹿温泉 清流荘」。宿の最大の誇りは、川のせせらぎを間近に感じる開放感抜群の露天風呂と、自家源泉から贅沢に掛け流される良質なアルカリ性単純温泉です。「乙女の柔肌」と称される柔らかなお湯は、肌への刺激が少なく、初冬の冷気で乾燥しがちな素肌をしっとりと潤してくれます。夕食は熊本の大自然の恵みをふんだんに取り入れた季節の特選会席。口に入れた瞬間に赤身の豊かな香りと肉汁が広がる「熊本あか牛」の陶板焼きをはじめ、本場直送の極上霜降り馬刺し、菊池川の清流米、冬の旬野菜を彩り豊かに盛り込んだ料理が並びます。川側の客室からは初冬の川霧と山並みが望め、上質で静かな休息を約束します。",
              roomTip: "菊池川を眼下に望むバルコニー付き和室。夕暮れどきに水面が夕陽に染まる絶景と、夜の静寂な川音に包まれる贅沢なひととき。",
              gourmetTip: "「熊本あか牛陶板焼き＆本場極上馬刺し会席」。適度な霜降りのあか牛と、甘みあふれる馬刺しを地元特産の甘口醤油と生姜で味わう至高の晩餐。",
              highlights: [
                "菊池川沿いの名門旅館＆川風を感じる開放的露天風呂と熊本あか牛会席",
                "「乙女の柔肌」と称される極上単純温泉＆本場極上霜降り馬刺し盛り合わせ",
                "全室リバービューの落ち着いた和室＆山鹿灯籠民芸館や豊前街道散策至近"
              ]
            },
            {
              id: 2,
              name: "山鹿温泉　眺山庭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184556/184556.jpg",
              rating: 4.24,
              reviews: 102,
              price: "¥16,500〜",
              access: "玉名駅より車で約30分　山鹿バスセンターより車で5分",
              special: "熊本の奥座敷山鹿温泉　全客室かけ流し内湯付き 2023年3月別館オープン",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184556%2F184556.html",
              story: "山鹿温泉街の高台に位置し、遠く阿蘇の山並みと山鹿の街並みを一望する絶景のロケーションを誇る隠れ宿「山鹿温泉 眺山庭」。全館に落ち着いた和の風情が漂い、喧騒から離れてゆったりと過ごしたい旅人に絶大な人気を誇ります。展望大浴場や露天風呂からは、初冬の澄み渡る青空と夕暮れの茜色グラデーションが眼前に広がり、ぬるめのまろやかな温泉に身を委ねながら至福の湯浴みを堪能できます。食事は熊本の旬の郷土食材を贅沢に仕立てた創作和会席。きめ細やかな肉質のあか牛ステーキや、新鮮な馬刺しの盛り合わせ、冬大根風呂吹きや手作りのだご汁小鍋など、心も体も温まる手料理の数々が並びます。眺望の良さと温かなおもてなしで、夫婦旅行や一人旅のリトリートに最適です。",
              roomTip: "山鹿の街並みと阿蘇連峰を望む最上階の和モダン客室。広縁のソファから初冬の夕景や夜景を眺めながら、静かに地酒を楽しむ贅沢な空間。",
              gourmetTip: "「厳選熊本あか牛ステーキと郷土味覚会席」。香ばしく焼き上げたあか牛のジューシーな旨味と、季節の地元野菜の甘みが織りなす絶妙な調和。",
              highlights: [
                "高台から阿蘇連峰を一望する眺望宿＆絶景露天風呂とあか牛ステーキ",
                "静寂に包まれた大人の隠れ家＆広縁から初冬の夕景と夜景を望む客室",
                "阿蘇と街並みの初冬グラデーションパノラマ＆心温まる手作り郷土会席"
              ]
            },
            {
              id: 3,
              name: "山鹿温泉　熊本旬彩の宿ゆとりろ山鹿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/109403/109403.jpg",
              rating: 3.89,
              reviews: 1360,
              price: "¥7,700〜",
              access: "■福岡空港/熊本空港/熊本駅から車　菊水ICより約15分■新玉名駅からバス　バス停「山鹿バスセンター」より徒歩約10分",
              special: "お得情報＆無料特典についてはスマホ版では宿からの情報をご覧ください",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109403%2F109403.html",
              story: "「和モダンな癒やしと地域の旬彩」をテーマに、洗練された空間と温泉文化が融合した人気のスタイリッシュ温泉宿「山鹿温泉 熊本旬彩の宿ゆとりろ山鹿」。館内にはモダンなラウンジや選べる浴衣サービス、充実したリラクゼーション設備が整い、若い世代やカップル、女子旅にも大好評です。大浴場と露天風呂には山鹿の名湯が溢れ、肌を包み込む柔らかなシルクのような湯触りが日頃の疲れをすっきりと解きほぐします。夕食は熊本の旬を五感で楽しむ創作和食会席。あか牛のすき焼き鍋や溶岩焼き、鮮度抜群の馬刺し、熊本県産ブランド豚の蒸ししゃぶなど、多彩なプランから好みに合わせて選べます。バーラウンジでのウェルカムドリンクや焼酎バーなど、滞在を豊かに彩るコンテンツが充実しています。",
              roomTip: "洗練されたデザインの和モダンツインルーム。シモンズ製ベッドを配置し、快適な睡眠と畳の寛ぎを両立させた心地よい空間。",
              gourmetTip: "「熊本あか牛すき焼き鍋と旬彩創作会席」。特製の割り下でさっと煮込むあか牛の濃厚な旨味を、新鮮な地卵にくぐらせて味わう冬の定番ご馳走。",
              highlights: [
                "和モダンデザインのスタイリッシュ空間＆ウェルカムサービスとあか牛すき焼き",
                "シモンズベッド導入の和モダン客室＆女子旅やカップルに大人気",
                "選べる色浴衣や焼酎バーの無料サービス＆温泉街散策の拠点に便利"
              ]
            },
            {
              id: 4,
              name: "平山温泉　旅館　善屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/16189/16189.jpg",
              rating: 4.37,
              reviews: 451,
              price: "¥12,500〜",
              access: "新玉名駅よりお車で２５分／南関ＩＣよりお車で２０分",
              special: "平山温泉の源泉掛け流し100％の良質天然いで湯。 良質な温泉で体と心に安らぎのひとときをどうぞ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F16189%2F16189.html",
              story: "山鹿温泉から車で約15分、豊かな山懐に佇む平山温泉屈指の老舗名旅館「平山温泉 旅館 善屋」。平山温泉の最大の特長である「pH9.8を超える強アルカリ性硫黄温泉」を贅沢に源泉かけ流しで堪能できます。湯船に浸かった瞬間、肌にまとわりつくような驚異のトロトロ感とほのかな硫黄の香りに誰もが息をのみます。ぬるめの湯温設定のため、30分でも1時間でもゆったりと浸かっていられ、上がった後は全身がしっとりツルツルに生まれ変わる「美肌の奇跡」を体感できます。夕食は料理長が素材を吟味した極上の山里会席。上質な熊本あか牛の炭火焼きをはじめ、霜降り馬刺し、山女魚の塩焼き、冬のキノコや根菜の鍋など、滋味豊かな料理が並び、本物の名湯と静寂を愛する温泉通を唸らせています。",
              roomTip: "離れ風の落ち着いた和室。窓外に広がる初冬の竹林と里山の風景を眺めながら、誰にも邪魔されない至福のプライベート時間を過ごせます。",
              gourmetTip: "「熊本あか牛炭火焼きと極上平山山里会席」。炭火でじっくりと旨味を閉じ込めたあか牛の芳醇な味わいと、清流山女魚の香ばしさが格別。",
              highlights: [
                "平山温泉のpH9.8超極上とろとろ強アルカリ性硫黄泉＆あか牛炭火焼き会席",
                "天然美容液に包まれる感動のぬる湯体験＆山里の静寂に佇む離れ風客室",
                "温泉通絶賛の極上美肌湯治ステイ＆清流山女魚と冬の根菜手造り膳"
              ]
            },
            {
              id: 5,
              name: "山鹿温泉　富士ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39572/39572.jpg",
              rating: 3.94,
              reviews: 376,
              price: "¥7,315〜",
              access: "九州自動車道菊水ＩＣより車で約15分／熊本市内より車で50分",
              special: "山鹿市街を一望する温泉は源泉かけ流し100％！情緒あふれる街散策にも便利",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39572%2F39572.html",
              story: "山鹿温泉の中心街に位置し、観光拠点として抜群の利便性と昭和レトロな温泉情緒を兼ね備えた温泉ホテル「山鹿温泉 富士ホテル」。開湯以来の名湯を引いた広々とした大浴場では、加水を抑えた新鮮なアルカリ性単純温泉が絶え間なく注がれ、肌に優しい湯浴みを楽しめます。夕食は熊本の味覚を手軽に堪能できる和食膳。柔らかく風味豊かなあか牛の陶板焼きや、本場ならではの新鮮な馬刺し、熱々のだご汁鍋など、手作り感あふれる温かい料理が並びます。芝居小屋「八千代座」や元湯「さくら湯」まで徒歩圏内という好立地でありながら、リーズナブルな宿泊料金を実現しており、一人旅からビジネス、家族旅行まで幅広く支持されています。",
              roomTip: "清潔で広々とした純和室。窓からは山鹿温泉街の落ち着いた風情が望め、夜には静かな環境でゆったりと休息をとることができます。",
              gourmetTip: "「熊本あか牛陶板焼きと馬刺し付き郷土膳」。手頃な価格でありながら、あか牛と馬刺しの2大名物をしっかりと味わえる満足度の高い夕食。",
              highlights: [
                "八千代座やさくら湯徒歩圏内の好立地＆コスパ抜群のあか牛と馬刺し膳",
                "昭和レトロな温泉街情緒を満喫＆手頃な料金で味わう本格郷土料理",
                "九州新幹線・高速ICからの良好アクセス＆一人旅歓迎の温かなもてなし"
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
      <header className="bg-gradient-to-r from-red-950 via-stone-900 to-amber-950 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-semibold tracking-wide border border-red-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            11月・12月初冬の肥後名湯＆あか牛・馬刺し特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">{metadata.title as string}</h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            菊池川の朝霧と八千代座の小江戸風情、pH9.8超を誇る奇跡のとろとろ美肌ぬる湯。
            口の中でとろける熊本あか牛の溶岩焼き、鮮度抜群の極上霜降り馬刺し、郷土だご汁に癒やされる初冬の休日。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月山鹿温泉＆平山温泉】熊本あか牛溶岩焼き！名宿5選","item":"https://croud-travel.pages.dev/winter-kumamoto-yamaga-hirayama-onsen-bihada-akagyu-basashi-stay"}]}) }}
      />

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-red-900 font-bold text-sm tracking-wide">
            <Footprints className="w-4 h-4 text-red-700" />
            豊前街道の歴史情緒と奇跡の極上美肌ぬる湯
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            11月中旬から12月、菊池川の川面から白い川霧が幻想的に立ち込める初冬の熊本県北部。古くから豊前街道の宿場町として栄えた「山鹿温泉」は、白壁土蔵が連なるレトロな街並みや、明治期の芝居小屋「八千代座」、そして総檜造りの元湯「さくら湯」に温かな明かりが灯り、一年で最も風情あふれる季節を迎えます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            山鹿温泉の泉質は「乙女の柔肌」と称されるほど滑らかなアルカリ性単純温泉。そして山鹿の街から車で約15分、山あいの里山に隠れるように佇む「平山温泉」は、全国でも屈指のpH9.8以上を誇る強アルカリ性硫黄温泉です。湯船に身を沈めた瞬間、まるで化粧水や高級美容液に包まれているかのようなトロットロの湯触りはまさに感動的。ぬるめの湯温のため、長湯をしても湯あたりせず、湯上がりには驚くほどすべすべの素肌へと導かれます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            そして冬の肥後旅の醍醐味は、火の国・熊本が誇る極上の美味の数々。阿蘇の大自然で育まれた赤身肉の最高峰「熊本あか牛」の溶岩焼きやすき焼き、本場直送の鮮度を誇る美しい霜降り「馬刺し」、地元菊池川流域の美味しいお米と地酒、冬の根菜を煮込んだ熱々の郷土料理「だご汁」。心も体も芯から温まる、至高の九州初冬リトリートを体験しましょう。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-red-900 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <Landmark className="w-4 h-4 text-red-800" />
              厳選5名宿のご案内
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              とろとろ美肌ぬる湯と熊本あか牛・極上馬刺しを堪能する名宿
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
                      <span className="inline-block text-xs font-bold text-red-800 bg-red-50 px-2.5 py-0.5 rounded-full mb-1">
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
                      <span className="text-sm sm:text-base font-extrabold text-red-800">
                        {hotel.price}
                      </span>
                    </div>
                  </div>

                  {/* Image & Description Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="w-full relative aspect-[16/9] sm:aspect-[21/9]">
                      <img 
                        src={hotel.img} 
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-full space-y-4">
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {hotel.story}
                      </p>
                      
                      <div className="bg-stone-50 rounded-xl p-3.5 space-y-2 text-xs border border-stone-100">
                        <div className="flex items-start gap-2">
                          <Eye className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                          <span className="text-stone-700"><strong>客室の魅力：</strong>{hotel.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Utensils className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                          <span className="text-stone-700"><strong>初冬の美食：</strong>{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        {hotel.highlights.map((hl: string, idx: number) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-stone-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Access & Booking Link */}
                  <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5 text-xs text-stone-500">
                      <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span>{hotel.access}</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-xs"
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

        {/* Model Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-900 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-red-800" />
              1泊2日モデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              新玉名・熊本から行く！八千代座と平山美肌ぬる湯の至福周遊ルート
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-red-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-red-700" />
                【1日目】新玉名駅から山鹿へ＆八千代座とさくら湯
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>11:00 九州新幹線「新玉名駅」または菊水ICを出発：</strong>レンタカーまたは路線バスで山鹿温泉へ（約25分）。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>12:00 豊前街道の古民家カフェでランチ：</strong>名物山鹿手打ちうどんや、郷土料理のだご汁定食を味わう。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>13:30 国指定重要文化財「八千代座」見学：</strong>明治の芝居小屋の内部をガイド案内で見学。桝席や廻り舞台、奈落の仕掛けに感動。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>15:00 山鹿温泉元湯「さくら湯」で立ち寄り湯：</strong>重厚な唐破風の木造建築と総檜大浴場でまろやかな一番風呂を体感。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>16:30 山鹿温泉または平山温泉の宿へチェックイン：</strong>pH9.8超のとろとろ美肌湯に浸かり、日頃の疲れをリセット。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>18:30 熊本あか牛溶岩焼き＆極上馬刺しディナー：</strong>柔らかいあか牛ステーキと霜降り馬刺し、熊本の地酒「香露」で乾杯。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-red-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-red-700" />
                【2日目】平山温泉ぬる湯ハシゴ＆山鹿灯籠民芸館
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>07:30 朝のとろとろ美肌風呂：</strong>美容液のような湯船でゆっくりと目覚める贅沢な朝のひととき。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>08:30 菊池川清流米と郷土朝食：</strong>ふっくら炊き立てのご飯と焼き魚、具だくさん味噌汁でエネルギー補給。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>10:00 山鹿灯籠民芸館見学：</strong>和紙と糊だけで作られる国指定伝統工芸「山鹿灯籠」の精緻な職人技を鑑賞。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>11:30 道の駅「水辺プラザかもと」でお買い物：</strong>温泉パンや地元産フルーツ、新鮮な熊本野菜をお土産に購入。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>13:30 新玉名駅または熊本空港へ：</strong>心地よい肌のすべすべ感とともに帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-900 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-red-800" />
              初冬の山鹿・平山・おみやげ＆立ち寄り散策手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              豊前街道と里山で手に入れたい初冬の肥後銘品＆立ち寄りスポット
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Landmark className="w-4 h-4 text-red-700" />
                国指定伝統工芸・山鹿灯籠もなかと銘菓「山鹿羊羹」
              </h3>
              <p>
                豊前街道沿いの老舗和菓子処には、頭に載せる金灯籠の優美な形をかたどった「山鹿灯籠もなか」が並びます。香ばしい皮と北海道産小豆の粒餡が絶妙。また、薄い求肥餅でこし餡をくるんだ昔ながらの素朴な「山鹿羊羹」は、日持ちは短いものの出来立ての柔らかな食感が旅人に愛され続けています。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-700" />
                平山温泉の源泉ミスト化粧水と水辺プラザかもとの温泉パン
              </h3>
              <p>
                平山温泉街の各旅館や売店では、pH9.8超の濃厚な強アルカリ性硫黄源泉をそのままボトリングした「平山温泉ミスト化粧水」が大人気。防腐剤無添加で敏感肌にも優しく、自宅でも極上ぬる湯の潤いを再現できます。また、車で10分の「道の駅 水辺プラザかもと」では、天然温泉水で仕込むふわふわの「温泉食パン」や米粉スイーツがお土産に好評です。
              </p>
            </div>
          </div>
        </section>

        {/* Climate & Access Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-900 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <Shield className="w-4 h-4 text-red-800" />
              11月・12月の気候・服装・快適アクセス案内
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の山鹿・平山旅行のポイントと防寒・移動のコツ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-red-700" />
                肥後内陸の朝晩冷え込みと日中の穏やかさ
              </h3>
              <p>
                熊本県北部は盆地状の地形のため、11月下旬以降は朝晩の気温が3〜7℃前後まで冷え込み、菊池川沿いには深い朝霧が発生します。しかし日中は南国の暖かな日差しで14〜18℃まで上昇し、散策には非常に過ごしやすい気候です。脱ぎ着しやすい上着やカーディガンを用意し、夜の露天風呂や八千代座周辺の散策にはマフラーやストールを携帯すると安心です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-red-700" />
                九州新幹線新玉名駅・新大牟田駅＆九州道アクセス
              </h3>
              <p>
                遠方からは九州新幹線が極めて快適。「新玉名駅」または「新大牟田駅」から路線バスまたはタクシーで約25〜30分で山鹿温泉へアクセスできます。車の場合は九州自動車道「菊水IC」から約15分、福岡市内中心部からも高速道路利用で約75分と良好なアクセス。平山温泉へは山鹿温泉街から山あいの県道を車で約10〜15分で到着します。
              </p>
            </div>
          </div>
        </section>

        {/* Local Gourmet Deep Dive */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-900 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <Utensils className="w-4 h-4 text-red-800" />
              名物グルメ＆泉質の深掘り
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の山鹿・平山を彩る3大美食と奇跡のぬる湯
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-3">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <Waves className="w-4 h-4 text-red-600" />
                pH9.8超の強アルカリ性ぬる湯
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                平山温泉の源泉は全国有数のpH9.8を超える高アルカリ性硫黄温泉。皮膚の角質を優しく分解するピーリング効果と、硫黄成分によるメラニン分解・美白作用が共存。とろりとした美容液のような浴感で、湯上がりはゆで卵のようなツルツル肌を実感できます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-3">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <Flame className="w-4 h-4 text-amber-600" />
                熊本あか牛の溶岩焼き
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                阿蘇の大自然で育まれた褐毛和種「あか牛」。適度なサシと濃厚な赤身の旨味が特徴で、余分な脂っぽさがなくヘルシー。阿蘇の天然溶岩プレートで焼き上げることで遠赤外線効果により旨味が閉じ込められ、ふっくらジューシーに仕上がります。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-3">
              <div className="flex items-center gap-2 font-bold text-stone-900 text-sm">
                <Utensils className="w-4 h-4 text-emerald-600" />
                本場熊本の極上馬刺し
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                熊本の食文化を象徴する馬刺し。初冬の時期は脂が乗り、霜降りの「特選霜降り」や、あっさりとした「赤身」、希少部位の「タテガミ（コウネ）」など、異なる食感と旨味のグラデーションを楽しめます。甘口醤油と生姜の相性が抜群です。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-900 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-red-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の山鹿温泉＆平山温泉旅行・よくある質問（FAQ）
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-red-700 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links / Related Features Section */}
        <section className="bg-gradient-to-br from-stone-100 to-red-50/50 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-6">
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">
              熊本・九州エリアのあわせて読みたい人気温泉特集
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              山鹿・平山温泉とあわせて巡りたい、九州屈指の名湯と冬の美味特集をご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/winter-kumamoto-kurokawa-yuakari-illumination-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-red-500 hover:shadow-xs transition group space-y-2"
            >
              <span className="text-[11px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md">熊本・黒川温泉</span>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-red-700 transition line-clamp-2">
                黒川温泉の湯あかりイルミネーションと入湯手形めぐり名宿
              </h4>
            </Link>

            <Link
              href="/winter-kumamoto-aso-uchinomaki-onsen-akagyu-caldera-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-red-500 hover:shadow-xs transition group space-y-2"
            >
              <span className="text-[11px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md">熊本・阿蘇内牧温泉</span>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-red-700 transition line-clamp-2">
                阿蘇カルデラの初冬絶景とあか牛丼・自家源泉かけ流し宿
              </h4>
            </Link>

            <Link
              href="/winter-saga-ureshino-onsen-bihada-yudofu-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-red-500 hover:shadow-xs transition group space-y-2"
            >
              <span className="text-[11px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md">佐賀・嬉野温泉</span>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-red-700 transition line-clamp-2">
                日本三大美肌の湯ととろける温泉湯豆腐・極上佐賀牛ステイ
              </h4>
            </Link>

            <Link
              href="/winter-oita-hita-amagase-onsen-mamedamachi-bungogyu-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-red-500 hover:shadow-xs transition group space-y-2"
            >
              <span className="text-[11px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md">大分・日田＆天瀬温泉</span>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-red-700 transition line-clamp-2">
                水郷ひたの初冬川霧と天領小江戸・玖珠川渓流露天とおおいた豊後牛
              </h4>
            </Link>

            <Link
              href="/winter-kumamoto-tsuetate-waita-onsen-steaming-higogyu-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-red-500 hover:shadow-xs transition group space-y-2"
            >
              <span className="text-[11px] font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded-md">熊本・杖立温泉</span>
              <h4 className="text-xs sm:text-sm font-bold text-stone-900 group-hover:text-red-700 transition line-clamp-2">
                立ちのぼる湯煙とむし湯体験・肥後牛と昭和レトロ温泉街
              </h4>
            </Link>

            <Link
              href="/features"
              className="bg-white p-4 rounded-2xl border border-stone-200 hover:border-red-500 hover:shadow-xs transition group space-y-2 flex flex-col justify-center items-center text-center"
            >
              <span className="text-xs font-bold text-red-700">全国の旬の温泉特集一覧へ</span>
              <span className="text-[11px] text-stone-500">11月・12月おすすめの厳選特集</span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kumamoto-yamaga-hirayama-onsen-bihada-akagyu-basashi-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
