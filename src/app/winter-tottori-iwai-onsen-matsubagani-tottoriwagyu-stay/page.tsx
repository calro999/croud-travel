import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Heart, ShoppingBag, Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月山陰】11月解禁の本場鳥取松葉ガニと山陰最古1300年の名湯「湯かむり」・鳥取和牛＆世界ジオパーク浦富海岸を巡る名宿5選",
  description: "毎年11月6日、日本海の荒波が冬の始まりを告げると同時に、山陰の海岸線は歓喜に包まれます。冬の味覚の絶対王者「松葉ガニ（ズワイガニの雄）」の漁がついに解禁。11月中旬から12月にかけて、鳥取県東部の岩美町は、獲れたての極上松葉ガニを求めて全国から食通が集まる至福の季節を迎えます。近隣の網代港や田後港から直送される松葉ガニは、ぎっしりと詰まった繊細な甘みの身、濃厚で芳醇なカニ味噌が別格。花咲くカニ刺し、香ばしい炭火焼きガニ、熱々のカニ鍋に甲羅酒と、贅を尽くしたカニ尽くし会席は冬旅の最高峰です。この美食の拠点となるのが、奈良時代神亀年間に開湯したと伝わる山陰最古の名湯「岩井温泉（いわいおんせん）」。頭に手ぬぐいを乗せ、柄杓で湯をかぶりながら長湯する奇習「湯かむり」が今に息づく源泉完全かけ流しの硫酸塩泉は、芯まで体を温めて冷えを寄せ付けません。さらに車で10分の浦富海岸では、ユネスコ世界ジオパークに認定された荒波削る洞門や奇岩の冬絶景が広がります。霜降り鳥取和牛オレイン55とともに、初冬の山陰の真髄を味わい尽くす厳選5宿を徹底ガイドします。",
  keywords: '岩井温泉 宿泊, 鳥取 松葉ガニ 宿, 活松葉ガニ 解禁 11月 12月, 岩井屋 民藝, 湯かむり温泉, 浦富海岸 ジオパーク, 鳥取和牛オレイン55, 山陰最古の温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-tottori-iwai-onsen-matsubagani-tottoriwagyu-stay/"
  },
  openGraph: {
    title: "【11・12月山陰】11月解禁の本場鳥取松葉ガニと山陰最古1300年の名湯「湯かむり」・鳥取和牛＆世界ジオパーク浦富海岸を巡る名宿5選",
    description: "毎年11月6日、日本海の荒波が冬の始まりを告げると同時に、山陰の海岸線は歓喜に包まれます。冬の味覚の絶対王者「松葉ガニ（ズワイガニの雄）」の漁がついに解禁。11月中旬から12月にかけて、鳥取県東部の岩美町は、獲れたての極上松葉ガニを求めて全国から食通が集まる至福の季節を迎えます。近隣の網代港や田後港から直送される松葉ガニは、ぎっしりと詰まった繊細な甘みの身、濃厚で芳醇なカニ味噌が別格。花咲くカニ刺し、香ばしい炭火焼きガニ、熱々のカニ鍋に甲羅酒と、贅を尽くしたカニ尽くし会席は冬旅の最高峰です。この美食の拠点となるのが、奈良時代神亀年間に開湯したと伝わる山陰最古の名湯「岩井温泉（いわいおんせん）」。頭に手ぬぐいを乗せ、柄杓で湯をかぶりながら長湯する奇習「湯かむり」が今に息づく源泉完全かけ流しの硫酸塩泉は、芯まで体を温めて冷えを寄せ付けません。さらに車で10分の浦富海岸では、ユネスコ世界ジオパークに認定された荒波削る洞門や奇岩の冬絶景が広がります。霜降り鳥取和牛オレイン55とともに、初冬の山陰の真髄を味わい尽くす厳選5宿を徹底ガイドします。",
    url: 'https://croud-travel.com/winter-tottori-iwai-onsen-matsubagani-tottoriwagyu-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '日本海の初冬荒波と本場鳥取の極上松葉ガニ'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月山陰】11月解禁の本場鳥取松葉ガニと山陰最古1300年の名湯「湯かむり」・鳥取和牛＆世界ジオパーク浦富海岸を巡る名宿5選",
    description: "毎年11月6日、日本海の荒波が冬の始まりを告げると同時に、山陰の海岸線は歓喜に包まれます。冬の味覚の絶対王者「松葉ガニ（ズワイガニの雄）」の漁がついに解禁。11月中旬から12月にかけて、鳥取県東部の岩美町は、獲れたての極上松葉ガニを求めて全国から食通が集まる至福の季節を迎えます。近隣の網代港や田後港から直送される松葉ガニは、ぎっしりと詰まった繊細な甘みの身、濃厚で芳醇なカニ味噌が別格。花咲くカニ刺し、香ばしい炭火焼きガニ、熱々のカニ鍋に甲羅酒と、贅を尽くしたカニ尽くし会席は冬旅の最高峰です。この美食の拠点となるのが、奈良時代神亀年間に開湯したと伝わる山陰最古の名湯「岩井温泉（いわいおんせん）」。頭に手ぬぐいを乗せ、柄杓で湯をかぶりながら長湯する奇習「湯かむり」が今に息づく源泉完全かけ流しの硫酸塩泉は、芯まで体を温めて冷えを寄せ付けません。さらに車で10分の浦富海岸では、ユネスコ世界ジオパークに認定された荒波削る洞門や奇岩の冬絶景が広がります。霜降り鳥取和牛オレイン55とともに、初冬の山陰の真髄を味わい尽くす厳選5宿を徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function TottoriIwaiUradomeWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-tottori-iwai-onsen-matsubagani-tottoriwagyu-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.com/"
        },
        "headline": "【11・12月山陰】11月解禁の本場鳥取松葉ガニと山陰最古1300年の名湯「湯かむり」・鳥取和牛＆世界ジオパーク浦富海岸を巡る名宿5選",
        "description": "毎年11月6日、日本海の荒波が冬の始まりを告げると同時に、山陰の海岸線は歓喜に包まれます。冬の味覚の絶対王者「松葉ガニ（ズワイガニの雄）」の漁がついに解禁。11月中旬から12月にかけて、鳥取県東部の岩美町は、獲れたての極上松葉ガニを求めて全国から食通が集まる至福の季節を迎えます。近隣の網代港や田後港から直送される松葉ガニは、ぎっしりと詰まった繊細な甘みの身、濃厚で芳醇なカニ味噌が別格。花咲くカニ刺し、香ばしい炭火焼きガニ、熱々のカニ鍋に甲羅酒と、贅を尽くしたカニ尽くし会席は冬旅の最高峰です。この美食の拠点となるのが、奈良時代神亀年間に開湯したと伝わる山陰最古の名湯「岩井温泉（いわいおんせん）」。頭に手ぬぐいを乗せ、柄杓で湯をかぶりながら長湯する奇習「湯かむり」が今に息づく源泉完全かけ流しの硫酸塩泉は、芯まで体を温めて冷えを寄せ付けません。さらに車で10分の浦富海岸では、ユネスコ世界ジオパークに認定された荒波削る洞門や奇岩の冬絶景が広がります。霜降り鳥取和牛オレイン55とともに、初冬の山陰の真髄を味わい尽くす厳選5宿を徹底ガイドします。",
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.com/winter-tottori-iwai-onsen-matsubagani-tottoriwagyu-stay",
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
              "name": "岩井温泉　岩井屋",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/68150/68150.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68150%2F68150.html",
              "priceRange": "¥13,200〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "鳥取県",
                "addressLocality": "岩美郡岩美町",
                "streetAddress": "岩美郡岩美町岩井544",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.49",
                "reviewCount": 195
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "岩井温泉　浪漫伝承の宿　明石家",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/67018/67018.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67018%2F67018.html",
              "priceRange": "¥16,335〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "鳥取県",
                "addressLocality": "岩美郡岩美町",
                "streetAddress": "岩美郡岩美町岩井536",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.30",
                "reviewCount": 240
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "かまや旅館",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/153130/153130.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153130%2F153130.html",
              "priceRange": "¥6,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "鳥取県",
                "addressLocality": "岩美郡岩美町",
                "streetAddress": "岩美郡岩美町浦富1892",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.38",
                "reviewCount": 43
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "シーサイド　うらどめ",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/14852/14852.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14852%2F14852.html",
              "priceRange": "¥4,950〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "鳥取県",
                "addressLocality": "岩美郡岩美町",
                "streetAddress": "岩美郡岩美町浦富2475-18",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.67",
                "reviewCount": 151
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "鳥取温泉　観水庭こぜにや",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/14072/14072.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14072%2F14072.html",
              "priceRange": "¥7,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "鳥取県",
                "addressLocality": "鳥取市",
                "streetAddress": "鳥取市永楽温泉町651",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.75",
                "reviewCount": 1479
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
            "name": "鳥取の「松葉ガニ」の漁期と11月・12月が最もおすすめな理由は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "山陰地方における松葉ガニ（ズワイガニの雄）の漁期は、毎年11月6日から翌年3月20日までと法律で厳格に定められています。特に11月中旬から12月にかけては、解禁直後の初競りで活気にあふれ、脱皮を終えて甲羅が硬くなり身がパンパンに詰まった最も上質なカニが水揚げされます。冷たい日本海の荒波にもまれた松葉ガニは、繊維一本一本に芳醇な甘みがあり、ぎっしり詰まったカニ味噌は濃厚そのもの。初冬こそが本場鳥取で松葉ガニを味わう最高の黄金期です。"
            }
          },
          {
            "@type": "Question",
            "name": "岩井温泉に伝わる奇習「湯かむり」とは？その歴史と健康効果は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「湯かむり」は、開湯1300年の歴史を持つ岩井温泉に江戸時代から伝わる独自の入浴法です。手ぬぐいを頭に乗せ、柄杓（ひしゃく）で源泉を頭から何十回もかぶりながら長湯をします。これは、温泉成分によるのぼせを防ぎつつ、頭部の血行を促進して脳卒中や高血圧を予防するための先人の知恵。泉質はカルシウム・ナトリウム-硫酸塩泉（低張性中性高温泉）で、動脈硬化症や慢性皮膚病、冷え性に優れた効能を持ちます。"
            }
          },
          {
            "@type": "Question",
            "name": "鳥取が誇るブランド牛「鳥取和牛オレイン55」の特徴とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「鳥取和牛オレイン55」は、肉の風味と口どけの良さを決定づけるオリーブオイルの主成分「オレイン酸」の含有率が55%以上という極めて厳しい基準をクリアした鳥取県自慢の最高級黒毛和牛です。脂の融点が約16℃と人の体温よりも低いため、口に入れた瞬間にサラリと溶け出し、しつこさのない上品な甘みと芳醇な香りが広がります。すき焼きや陶板ステーキで松葉ガニとともに味わうのが贅沢な山陰の冬の楽しみです。"
            }
          },
          {
            "@type": "Question",
            "name": "ユネスコ世界ジオパーク「浦富海岸」の初冬の見どころと冬期の楽しみ方は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "浦富海岸（うらどめかいがん）は、日本海の激しい波浪や風雪によって侵食された花崗岩の海食崖、洞門、洞窟、奇岩が約15kmにわたって連なる国の名勝・天然記念物です。11月・12月の初冬は、日本海特有の白い波しぶきと荒涼とした岩肌がダイナミックな冬の景観を作り出し、千貫松島や菜種五島を巡る遊歩道からの眺めは圧巻です。冬期は遊覧船が運航休止となる場合がありますが、展望所からの散策や海辺の絶景ドライブが存分に楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "東京や大阪・京都方面から岩井温泉・岩美エリアへのアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "関西方面からは、JR大阪駅・京都駅から特急「スーパーはくと」で鳥取駅まで約2時間30分。鳥取駅からJR山陰本線で岩美駅まで約25分、岩美駅からは町営バスまたはタクシーで約10分で岩井温泉に到着します。東京方面からは、羽田空港から鳥取砂丘コナン空港まで飛行機で約1時間15分、空港から連絡バスまたはレンタカーで約40分です。車の場合は、鳥取自動車道「鳥取IC」から国道9号線を経由して約30分でアクセス可能です。"
            }
          }
        ]
      }
    ]
  };

  const faqListItems = [
  {
    "q": "鳥取の「松葉ガニ」の漁期と11月・12月が最もおすすめな理由は？",
    "a": "山陰地方における松葉ガニ（ズワイガニの雄）の漁期は、毎年11月6日から翌年3月20日までと法律で厳格に定められています。特に11月中旬から12月にかけては、解禁直後の初競りで活気にあふれ、脱皮を終えて甲羅が硬くなり身がパンパンに詰まった最も上質なカニが水揚げされます。冷たい日本海の荒波にもまれた松葉ガニは、繊維一本一本に芳醇な甘みがあり、ぎっしり詰まったカニ味噌は濃厚そのもの。初冬こそが本場鳥取で松葉ガニを味わう最高の黄金期です。"
  },
  {
    "q": "岩井温泉に伝わる奇習「湯かむり」とは？その歴史と健康効果は？",
    "a": "「湯かむり」は、開湯1300年の歴史を持つ岩井温泉に江戸時代から伝わる独自の入浴法です。手ぬぐいを頭に乗せ、柄杓（ひしゃく）で源泉を頭から何十回もかぶりながら長湯をします。これは、温泉成分によるのぼせを防ぎつつ、頭部の血行を促進して脳卒中や高血圧を予防するための先人の知恵。泉質はカルシウム・ナトリウム-硫酸塩泉（低張性中性高温泉）で、動脈硬化症や慢性皮膚病、冷え性に優れた効能を持ちます。"
  },
  {
    "q": "鳥取が誇るブランド牛「鳥取和牛オレイン55」の特徴とは？",
    "a": "「鳥取和牛オレイン55」は、肉の風味と口どけの良さを決定づけるオリーブオイルの主成分「オレイン酸」の含有率が55%以上という極めて厳しい基準をクリアした鳥取県自慢の最高級黒毛和牛です。脂の融点が約16℃と人の体温よりも低いため、口に入れた瞬間にサラリと溶け出し、しつこさのない上品な甘みと芳醇な香りが広がります。すき焼きや陶板ステーキで松葉ガニとともに味わうのが贅沢な山陰の冬の楽しみです。"
  },
  {
    "q": "ユネスコ世界ジオパーク「浦富海岸」の初冬の見どころと冬期の楽しみ方は？",
    "a": "浦富海岸（うらどめかいがん）は、日本海の激しい波浪や風雪によって侵食された花崗岩の海食崖、洞門、洞窟、奇岩が約15kmにわたって連なる国の名勝・天然記念物です。11月・12月の初冬は、日本海特有の白い波しぶきと荒涼とした岩肌がダイナミックな冬の景観を作り出し、千貫松島や菜種五島を巡る遊歩道からの眺めは圧巻です。冬期は遊覧船が運航休止となる場合がありますが、展望所からの散策や海辺の絶景ドライブが存分に楽しめます。"
  },
  {
    "q": "東京や大阪・京都方面から岩井温泉・岩美エリアへのアクセス方法は？",
    "a": "関西方面からは、JR大阪駅・京都駅から特急「スーパーはくと」で鳥取駅まで約2時間30分。鳥取駅からJR山陰本線で岩美駅まで約25分、岩美駅からは町営バスまたはタクシーで約10分で岩井温泉に到着します。東京方面からは、羽田空港から鳥取砂丘コナン空港まで飛行機で約1時間15分、空港から連絡バスまたはレンタカーで約40分です。車の場合は、鳥取自動車道「鳥取IC」から国道9号線を経由して約30分でアクセス可能です。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "岩井温泉　岩井屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/68150/68150.jpg",
              rating: 4.49,
              reviews: 195,
              price: "¥13,200〜",
              access: "岩美駅より日交バス≪岩井温泉行き≫約１０分、岩井温泉下車後徒歩すぐ",
              special: "開湯1300年山陰最古の源泉かけながし～民藝の心息づく13室の旅籠",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68150%2F68150.html",
              story: "創業百三十余年、民藝運動の創始者・柳宗悦やバーナード・リーチらが足繁く通い、その美しさを絶賛した山陰を代表する民藝の老舗格式旅館「岩井温泉 岩井屋」。重厚な木造三階建ての館内には、丹精込められた民藝の器や調度品が飾られ、温かな木のぬくもりと静謐な美意識に満ちています。宿の真骨頂は、湯船の底から生まれたての源泉が自噴する「源泉完全かけ流し」の深湯。初冬の夕食には、田後港や網代港で水揚げされた極上の「活松葉ガニ」を一人丸ごと一杯以上使った贅沢なフルコース会席が登場。上品な甘みのカニ刺し、芳醇な香りの炭火焼きガニ、濃厚な甲羅味噌焼きなど、民藝の器に盛られた冬の至宝に五感が震えます。",
              roomTip: "数寄屋造りの落ち着いた和室やベッド付き和モダン客室。木の手触りと障子越しの柔らかい光に包まれ、静かな読書や休息に最適です。",
              gourmetTip: "「活松葉ガニ特選フルコース会席＆鳥取和牛」。新鮮な活ガニならではの弾ける甘みと、オレイン酸豊富な鳥取和牛の旨味が織りなす究極の饗宴。",
              highlights: [
                "柳宗悦が愛した民藝の木造老舗格式宿＆足元湧出の自噴深湯と活松葉ガニフルコース",
                "手仕事の器に盛られる絶品カニ料理＆山陰最古1300年の湯かむりの歴史を伝える空間",
                "浦富海岸まで車で約10分＆日常の喧騒を忘れて美と温泉に浸る大人の隠れ宿"
              ]
            },
            {
              id: 2,
              name: "岩井温泉　浪漫伝承の宿　明石家",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67018/67018.jpg",
              rating: 4.30,
              reviews: 240,
              price: "¥16,335〜",
              access: "【車】鳥取自動車道「鳥取IC」より30分　【JR】山陰線「岩美駅」よりバス８分「岩井温泉」下車すぐ",
              special: "《創業400年の老舗宿》源泉かけ流し温泉と因幡の山海の幸が織りなす、心ゆくまで味わえる贅沢滞在",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67018%2F67018.html",
              story: "開湯1300年の岩井温泉の歴史を今に伝え、自家源泉3本から湧き出る豊富な湯量を誇る文人墨客ゆかりの宿「岩井温泉 浪漫伝承の宿 明石家」。自慢の大庭園を囲むように配置された客室からは、初冬のしっとりとした山陰の庭園風景が広がり、旅情を深く誘います。庭園を望む大浴場や野趣あふれる露天風呂には、毎分豊富な硫酸塩泉が惜しみなく注がれ、湯かむりの歴史を感じる心地よい長湯が楽しめます。11月・12月には、厳選された山陰産松葉ガニの茹でガニやカニすき鍋、鳥取名物モサエビ、鳥取和牛のステーキなど、山陰の旬を網羅した華やかな会席料理が提供されます。",
              roomTip: "日本庭園を一望する数寄屋風客室。初冬の澄んだ庭の池に映る木立を眺めながら、ゆったりとお抹茶をいただく贅沢な時間。",
              gourmetTip: "「松葉ガニづくし会席と鳥取和牛陶板焼き」。濃厚なカニ味噌が詰まった甲羅酒と、熱々の陶板で焼き上げる鳥取和牛の豊かな風味。",
              highlights: [
                "自家源泉3本かけ流しの名湯と大日本庭園＆山陰産松葉ガニづくし会席と鳥取和牛",
                "庭園露天風呂の初冬情趣＆鳥取名物モサエビや地魚を散りばめた贅沢な会席料理",
                "ゆったりとした広さの数寄屋風和室＆家族連れやシニア層にも安心の細やかなもてなし"
              ]
            },
            {
              id: 3,
              name: "かまや旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/153130/153130.jpg",
              rating: 4.38,
              reviews: 43,
              price: "¥6,000〜",
              access: "岩美駅よりお車にて約５分",
              special: "春休み到来◎女将の人柄と新鮮な海の幸を使った料理が自慢★鳥取砂丘まで車で約15分の好立地！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153130%2F153130.html",
              story: "岩井温泉街の素朴な温もりに抱かれ、源泉かけ流しの天然温泉と家庭的なもてなしが心地よい隠れた名宿「かまや旅館」。昔ながらの湯治場の面影を残す館内は清潔に保たれ、まるで故郷に帰ってきたかのような寛ぎを与えてくれます。浴室には一切加水・加温のない純度100%の硫酸塩泉が満たされ、肌に染み渡るまろやかな湯触りが旅の疲労を優しく解きほぐします。冬期には地元岩美の港から仕入れる新鮮なカニや日本海の鮮魚を使った手作り料理が膳を彩り、リーズナブルに山陰の冬の味覚と名湯を楽しみたい旅行者から熱い支持を集めています。",
              roomTip: "どこか懐かしい昭和レトロの温もりある和室。一人旅や静かに温泉を楽しみたい大人の湯治ステイに心地よい空間です。",
              gourmetTip: "「日本海カニ会席と地魚小鍋膳」。気取らない手作りの味わいの中に、山陰の冬の恵みがぎゅっと詰まった心温まる郷土料理。",
              highlights: [
                "源泉100%完全かけ流しの硫酸塩泉＆心温まる女将の手作り料理とアットホームな湯治",
                "一人旅やリーズナブルな冬旅に最適＆芯まで温まる湯かむり温泉の豊かな薬効",
                "岩井温泉街の中心に位置する便利なロケーション＆昔ながらの湯治場風情の休息"
              ]
            },
            {
              id: 4,
              name: "シーサイド　うらどめ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14852/14852.jpg",
              rating: 4.67,
              reviews: 151,
              price: "¥4,950〜",
              access: "ＪＲ岩美駅下車／中国自動車道作用ＩＣ→Ｒ３７３→Ｒ５３→Ｒ９→Ｒ１７８",
              special: "名物磯の炭火焼＆カニ料理　沖に漁火　渚がお庭の海の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14852%2F14852.html",
              story: "浦富海岸の白砂青松が広がる渚まで徒歩1分、世界ジオパークの雄大な海景を間近に感じる海辺の料理宿「シーサイド うらどめ」。岩美町網代港や田後港の仲買人でもあるオーナーが自ら厳選して競り落とす松葉ガニの鮮度と目利きは地域屈指。11月の漁解禁とともに生簀には活きの良い松葉ガニやモサエビが並びます。冬の海を眺めながらいただくカニ尽くし料理は、カニ刺し、茹でガニ、焼きガニ、カニちり鍋、カニ雑炊と一切の妥協なし。日本海の荒波が奏でる潮騒を聞きながら、カニを味わい尽くす贅沢なひとときを過ごせます。",
              roomTip: "浦富海岸の美しい海を望むオーシャンビュー客室。冬の澄み渡る日本海の夕景と朝の渚の散策を心ゆくまで堪能できます。",
              gourmetTip: "「仲買人直営！活松葉ガニ極みフルコース」。セリ落としたばかりの極上活ガニを贅沢に使用。甘いカニ刺しと熱々の焼きガニの香ばしさは別格。",
              highlights: [
                "仲買人直営の圧倒的な目利きと鮮度＆浦富海岸目の前で味わう活松葉ガニ極みコース",
                "カニ刺し・炭火焼き・カニすき鍋・雑炊まで網羅＆山陰海岸ジオパーク散策に最適",
                "冬の日本海の絶景オーシャンビュー＆波の音を聞きながら過ごす海辺のリフレッシュ"
              ]
            },
            {
              id: 5,
              name: "鳥取温泉　観水庭こぜにや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14072/14072.jpg",
              rating: 4.75,
              reviews: 1479,
              price: "¥7,000〜",
              access: "鳥取駅より徒歩10分・無料送迎バス有 / 中国道佐用JCT経由鳥取ＩＣより車８分　鳥取砂丘へ車２０分　コンビニ徒歩2分",
              special: "鳥取市街地にありながら天然温泉かけ流しの湯を満喫できる閑静な佇まいの小宿。◆WIFI全室対応◆",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14072%2F14072.html",
              story: "鳥取駅からも徒歩圏内、鳥取市街地に湧く全国でも珍しい自家源泉かけ流しの老舗温泉旅館「鳥取温泉 観水庭こぜにや」。白砂青松の美しい日本庭園と池を泳ぐ色鮮やかな錦鯉が訪れる人を優雅に迎えます。敷地内の2本の自家源泉から湧出するナトリウム-硫酸塩・塩化物泉は、加水・加温・循環一切なしの純生温泉。初冬の夕食には、鳥取港直送の獲れたて松葉ガニ会席や、オレイン酸を55%以上含む最高級「鳥取和牛オレイン55」のすき焼き・ステーキ会席が用意され、山陰観光の拠点としても極めて利便性の高い名宿です。",
              roomTip: "日本庭園と鯉の池を望む風情ある和室。市街地にありながら驚くほどの静寂が広がり、プライベートな寛ぎを約束します。",
              gourmetTip: "「特選松葉ガニ会席＆鳥取和牛オレイン55」。きめ細やかな霜降り和牛の上品な甘みと、冬の日本海が育んだ濃厚な松葉ガニの贅沢なコラボレーション。",
              highlights: [
                "鳥取駅徒歩圏内の自家源泉かけ流し天然温泉＆鳥取和牛オレイン55と日本庭園の錦鯉",
                "加水・加温・循環一切なしの純生温泉＆ビジネスや一人旅でも楽しめる上質な格式",
                "鳥取砂丘や白兎神社観光の拠点に絶好＆館内貸切風呂や庭園露天風呂での癒やし"
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
      <header className="bg-gradient-to-r from-sky-950 via-blue-950 to-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold tracking-wide border border-sky-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            11月・12月山陰初冬特集・11月解禁本場松葉ガニ＆開湯1300年湯かむり
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {metadata.title as string}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            11月6日のカニ漁解禁とともに湧き立つ鳥取岩美の港町。獲れたて活松葉ガニの甘みと濃厚な甲羅味噌。
            奈良時代開湯の山陰最古「湯かむり」硫酸塩泉と、世界ジオパーク浦富海岸の荒波景観に浸る初冬の贅沢。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-sky-900 font-bold text-sm tracking-wide">
            <Flame className="w-4 h-4 text-sky-700" />
            11月6日解禁！冬の味覚の王様と山陰最古の湯かむり文化
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            毎年11月6日、日本海に冬の訪れを告げる号砲とともに、山陰一帯の漁港からカニ漁船が一斉に出漁します。山陰の冬を象徴する最高峰の味覚「松葉ガニ（ズワイガニの雄）」。鳥取県東部に位置する岩美町（いわみちょう）の網代港や田後港には、荒れ狂う日本海の水深200〜400mの深海から引き揚げられた活きの良い極上ガニが続々と水揚げされます。11月中旬から12月にかけての松葉ガニは、脱皮後の甲羅がしっかりと硬くなり、脚の隅々までぎっしりと甘い身が詰まった最高の状態。透き通るようなカニ刺し、炭火で香ばしく炙る焼きガニ、熱々のカニすき鍋、そしてカニ味噌を溶いた濃厚な甲羅酒は、まさに冬の日本海の至宝です。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            この贅沢なカニ料理とともに楽しみたいのが、奈良時代（神亀年間）の開湯と伝えられ、山陰地方で最も古い歴史を誇る「岩井温泉（いわいおんせん）」。頭に手ぬぐいを乗せて柄杓で源泉をかぶりながら長湯する奇習「湯かむり」が今なお息づく名湯です。豊富な湧出量を誇る完全かけ流しの硫酸塩泉は、肌をしっとりと包み込み、湯上がり後も湯冷めせず体の芯までポカポカが持続します。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            岩井温泉はまた、昭和初期に柳宗悦やバーナード・リーチらが魅了された「用の美」が息づく民藝の里でもあります。木造の素朴な温泉街には窯元が点在し、手仕事のぬくもりが残る器で供されるカニ料理は、味覚だけでなく視覚や触覚までも贅沢に満たしてくれます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            さらに車で10分ほどの海岸線には、ユネスコ世界ジオパークに認定された「浦富海岸（うらどめかいがん）」のダイナミックな海食崖や洞門が広がり、初冬の日本海の白波と奇岩のコントラストが圧倒的な景観を描き出します。口の中でとろける「鳥取和牛オレイン55」やすき焼きとともに、初冬の山陰旅情を極限まで堪能できる厳選5宿をご紹介します。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-sky-900 font-bold text-sm tracking-wide bg-sky-100/60 px-3 py-1 rounded-full">
              <Landmark className="w-4 h-4 text-sky-800" />
              厳選5名宿のご案内
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              本場鳥取松葉ガニと山陰最古の湯かむり温泉を満喫する名宿
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
                      <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>鳥取県岩美町・鳥取市エリア</span>
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
                          <Eye className="w-3.5 h-3.5 text-sky-700" />
                          客室の過ごし方
                        </div>
                        <p className="text-[11px] sm:text-xs text-stone-600">{hotel.roomTip}</p>
                        
                        <div className="font-bold text-stone-900 text-xs flex items-center gap-1.5 pt-1 border-t border-stone-200/50">
                          <Utensils className="w-3.5 h-3.5 text-sky-700" />
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
                        <div key={idx} className="flex items-start gap-1.5 bg-sky-50/50 p-2.5 rounded-xl border border-sky-100/50 text-[11px] text-sky-950 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
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
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-800 to-blue-900 hover:from-sky-900 hover:to-blue-950 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-xs hover:shadow-md transition duration-200"
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
            <div className="inline-flex items-center gap-2 text-sky-900 font-bold text-sm tracking-wide bg-sky-100/60 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4 text-sky-800" />
              11月・12月おすすめ1泊2日モデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              解禁松葉ガニと山陰最古の湯かむり・世界ジオパークを巡る冬旅
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-sky-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-sky-700" />
                【1日目】鳥取砂丘散策と解禁松葉ガニフルコース
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>11:30 鳥取駅または鳥取空港を出発：</strong>レンタカーで日本海沿いの風光明媚な国道9号線を東へドライブ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>12:30 鳥取砂丘＆砂の美術館：</strong>初冬の澄んだ風が抜ける雄大な風紋を眺め、世界トップクラスの砂像アートを鑑賞。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>15:30 岩井温泉の宿へチェックイン：</strong>開湯1300年の源泉完全かけ流し風呂で「湯かむり」の温もりを体感。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>17:00 静かな温泉街の木造町並み散歩：</strong>ゆかむり温泉共同浴場やレトロな路地を巡り、歴史ある湯治場情緒に浸る。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>18:30 本場活松葉ガニづくし会席：</strong>活ガニ刺し、焼きガニ、甲羅酒、カニすき鍋、雑炊と続く究極のカニ宴。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-sky-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-sky-700" />
                【2日目】世界ジオパーク浦富海岸と海産市場めぐり
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>08:00 朝の自噴泉入浴と滋味朝食：</strong>鳥取の銘米とカニ身入りの贅沢なお味噌汁で温かな目覚め。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>09:30 浦富海岸の絶景遊歩道散策：</strong>千貫松島や城原海岸の展望所から、初冬の日本海の迫力ある白波と奇岩を眺望。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>11:30 網代港・鳥取港海鮮市場でおみやげ：</strong>生簀に泳ぐ茹でたて松葉ガニやモサエビ、干物を家族へのお土産に選定。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>13:30 鳥取和牛オレイン55ランチ＆帰路へ：</strong>口どけ滑らかな鳥取和牛丼やステーキを味わい、駅・空港へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-sky-900 font-bold text-sm tracking-wide bg-sky-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-sky-800" />
              初冬の因幡・岩美・おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              港町と温泉街で手に入れたい初冬の山陰銘品と立ち寄りスポット
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-700" />
                幻のエビ「モサエビ」と浜茹で松葉ガニ
              </h3>
              <p>
                地元以外では滅多に出回らない幻のエビ「モサエビ（クロザコエビ）」。鮮度落ちが早いため産地でしか食べられませんが、その甘みと旨味は甘エビ以上と絶賛されます。また港近くの直売所では、職人が絶妙な塩加減で茹で上げた「浜茹で松葉ガニ」が並び、タグ付きのブランドガニを自宅へ産地直送できます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-sky-700" />
                因久山焼・岩井窯の民藝陶器と二十世紀梨リキュール
              </h3>
              <p>
                鳥取は全国有数の民藝の地。岩美町には「岩井窯」や歴史ある「因久山焼」などの窯元が点在し、用の美を極めた素朴で温かい器はおみやげに最適です。また、鳥取名産の二十世紀梨を使ったフルーティーな梨酒や、冷酒でキリリと冴える地酒「日置桜」「弁天娘」はカニ料理の余韻を深めてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-sky-900 font-bold text-sm tracking-wide bg-sky-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-sky-800" />
              初冬の岩井温泉・泉質と湯かむりの歴史徹底解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ1300年続く「湯かむり」が冬の湯治に最も適しているのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-sky-700" />
              硫酸塩泉の優れた保湿被膜と血管拡張作用
            </h3>
            <p>
              岩井温泉の泉質は、カルシウム・ナトリウム-硫酸塩泉（低張性中性高温泉）。無色透明でわずかに石膏臭を帯びた源泉は、湯船の底や岩の間から直接自噴する極めてピュアな状態です。硫酸塩泉は「傷の湯」「脳卒中の湯」とも呼ばれ、皮膚の角質をなめらかに保護するだけでなく、末梢血管を拡張して血圧を安定させ、血行を力強く促進します。冬の厳しい寒風にさらされた冷えた体に、これ以上ない温まりをもたらします。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-sky-700" />
              手ぬぐいを乗せ柄杓で湯を注ぐ「湯かむり」の医学的合理性
            </h3>
            <p>
              江戸時代から伝わる「湯かむり」は、頭に手ぬぐいを乗せ、柄杓で源泉を頭頂部の百会（ひゃくえ）のツボへ百回以上かぶりながら長湯する独特の入浴作法です。一見ユニークな奇習に見えますが、頭部に温湯をかけ続けることで脳血管の急激な血圧変動を防ぎ、のぼせを予防しながら全身を均一に深部体温まで温めるという、極めて高度な医学的合理性を備えています。先人の知恵が結晶したこの入浴法こそ、岩井温泉が長寿の湯治場として栄えた理由です。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Sparkles className="w-4 h-4 text-sky-700" />
              活松葉ガニの鮮度見極めと芳醇な甲羅酒の極意
            </h3>
            <p>
              初冬の松葉ガニの真骨頂は、網代港や田後港から届く「活ガニ」にあります。甲羅に黒い粒状のカニビル卵が多く付着しているのは、脱皮から長い期間が経過し身入りが極限まで充実している証拠。カニ味噌を半分ほど味わった後の甲羅に、熱々に燗をつけた鳥取の辛口地酒を注ぎ、炭火で軽く炙る「甲羅酒」は、カニの脂と旨味が出汁のように日本酒に溶け出し、冬の山陰でしか味わえない至高の贅沢です。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-sky-900 font-bold text-sm tracking-wide bg-sky-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-sky-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の鳥取・岩井温泉・松葉ガニ旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-sky-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-sky-900 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-sky-800" />
            あわせて読みたい初冬の全国名湯・美食特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-sky-700 font-bold block text-[10px]">鳥取・三朝温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">世界屈指のラジウム温泉と松葉ガニ・三徳山投入堂の冬情趣名宿</p>
            </Link>
            <Link 
              href="/winter-tottori-kaike-onsen-matsuba-crab-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-sky-700 font-bold block text-[10px]">鳥取・皆生温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">米子白砂青松の海中温泉と境港直送松葉ガニ・大山雪見露天風呂</p>
            </Link>
            <Link 
              href="/winter-hyogo-kasumi-onsen-shibayama-crab-matsuba-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-sky-700 font-bold block text-[10px]">兵庫・香住＆柴山</span>
              <p className="font-bold text-stone-800 line-clamp-2">最高級柴山ゴールド松葉ガニと香住温泉・日本海冬美食名宿</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
