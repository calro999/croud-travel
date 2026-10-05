import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Apple, Heart
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月戸倉上山田温泉】善光寺精進落としの美肌硫黄泉と初冬の味覚・極上信州プレミアム牛＆蜜入り完熟サンふじ・辛味大根おしぼりうどんを味わう名宿5選",
  description: "11月中旬から12月の初冬を迎えた信州千曲川のほとり、戸倉上山田温泉は山々が初雪をまとい、澄み渡る冷気の中に情緒ある湯煙が立ちのぼる名湯の季節を迎えます。古くより善光寺参りの「精進落としの湯」として親しまれ、旅人や文人墨客の心身を癒やし続けてきたこの温泉地は、肌をすべすべに整えるエメラルドグリーンの良質な単純硫黄泉が自噴する屈指の湯量を誇ります。初冬の食卓を飾るのは、脂の甘みと赤身の旨味が凝縮した「信州プレミアム牛」のすき焼きや陶板焼き、清流が育んだ「信州サーモン」、そして千曲川流域特有の伝統郷土料理「おしぼりうどん」。ねずみ大根の強烈な辛味絞り汁に信州味噌を溶いて味わう熱々のうどんは、体の芯から温まる冬ならではの風物詩です。さらに11月下旬から12月にかけて最盛期を迎える蜜入り完熟りんご「サンふじ」の果樹園直売や、冠着山（姨捨山）を望む絶景展望露天風呂まで、信州の初冬の贅を味わい尽くす厳選宿5選を詳しく紹介します。",
  keywords: '戸倉上山田温泉 宿泊, 善光寺 精進落とし 温泉, 信州プレミアム牛 旅館, サンふじ リンゴ 信州, おしぼりうどん 千曲市, 単純硫黄泉 美肌湯, 長野 初冬 温泉旅行, 笹屋ホテル 豊年虫, 11月 12月 長野旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagano-togura-kamiyamada-onsen-shinshugyu-apple-stay/"
  },
  openGraph: {
    title: "【11・12月戸倉上山田温泉】善光寺精進落としの美肌硫黄泉と初冬の味覚・極上信州プレミアム牛＆蜜入り完熟サンふじ・辛味大根おしぼりうどんを味わう名宿5選",
    description: "11月中旬から12月の初冬を迎えた信州千曲川のほとり、戸倉上山田温泉は山々が初雪をまとい、澄み渡る冷気の中に情緒ある湯煙が立ちのぼる名湯の季節を迎えます。古くより善光寺参りの「精進落としの湯」として親しまれ、旅人や文人墨客の心身を癒やし続けてきたこの温泉地は、肌をすべすべに整えるエメラルドグリーンの良質な単純硫黄泉が自噴する屈指の湯量を誇ります。初冬の食卓を飾るのは、脂の甘みと赤身の旨味が凝縮した「信州プレミアム牛」のすき焼きや陶板焼き、清流が育んだ「信州サーモン」、そして千曲川流域特有の伝統郷土料理「おしぼりうどん」。ねずみ大根の強烈な辛味絞り汁に信州味噌を溶いて味わう熱々のうどんは、体の芯から温まる冬ならではの風物詩です。さらに11月下旬から12月にかけて最盛期を迎える蜜入り完熟りんご「サンふじ」の果樹園直売や、冠着山（姨捨山）を望む絶景展望露天風呂まで、信州の初冬の贅を味わい尽くす厳選宿5選を詳しく紹介します。",
    url: 'https://croud-travel.com/winter-nagano-togura-kamiyamada-onsen-shinshugyu-apple-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の千曲川と戸倉上山田温泉の立ちのぼる湯煙'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月戸倉上山田温泉】善光寺精進落としの美肌硫黄泉と初冬の味覚・極上信州プレミアム牛＆蜜入り完熟サンふじ・辛味大根おしぼりうどんを味わう名宿5選",
    description: "11月中旬から12月の初冬を迎えた信州千曲川のほとり、戸倉上山田温泉は山々が初雪をまとい、澄み渡る冷気の中に情緒ある湯煙が立ちのぼる名湯の季節を迎えます。古くより善光寺参りの「精進落としの湯」として親しまれ、旅人や文人墨客の心身を癒やし続けてきたこの温泉地は、肌をすべすべに整えるエメラルドグリーンの良質な単純硫黄泉が自噴する屈指の湯量を誇ります。初冬の食卓を飾るのは、脂の甘みと赤身の旨味が凝縮した「信州プレミアム牛」のすき焼きや陶板焼き、清流が育んだ「信州サーモン」、そして千曲川流域特有の伝統郷土料理「おしぼりうどん」。ねずみ大根の強烈な辛味絞り汁に信州味噌を溶いて味わう熱々のうどんは、体の芯から温まる冬ならではの風物詩です。さらに11月下旬から12月にかけて最盛期を迎える蜜入り完熟りんご「サンふじ」の果樹園直売や、冠着山（姨捨山）を望む絶景展望露天風呂まで、信州の初冬の贅を味わい尽くす厳選宿5選を詳しく紹介します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function NaganoToguraKamiyamadaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-nagano-togura-kamiyamada-onsen-shinshugyu-apple-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.com/"
        },
        "headline": "【11・12月戸倉上山田温泉】善光寺精進落としの美肌硫黄泉と初冬の味覚・極上信州プレミアム牛＆蜜入り完熟サンふじ・辛味大根おしぼりうどんを味わう名宿5選",
        "description": "11月中旬から12月の初冬を迎えた信州千曲川のほとり、戸倉上山田温泉は山々が初雪をまとい、澄み渡る冷気の中に情緒ある湯煙が立ちのぼる名湯の季節を迎えます。古くより善光寺参りの「精進落としの湯」として親しまれ、旅人や文人墨客の心身を癒やし続けてきたこの温泉地は、肌をすべすべに整えるエメラルドグリーンの良質な単純硫黄泉が自噴する屈指の湯量を誇ります。初冬の食卓を飾るのは、脂の甘みと赤身の旨味が凝縮した「信州プレミアム牛」のすき焼きや陶板焼き、清流が育んだ「信州サーモン」、そして千曲川流域特有の伝統郷土料理「おしぼりうどん」。ねずみ大根の強烈な辛味絞り汁に信州味噌を溶いて味わう熱々のうどんは、体の芯から温まる冬ならではの風物詩です。さらに11月下旬から12月にかけて最盛期を迎える蜜入り完熟りんご「サンふじ」の果樹園直売や、冠着山（姨捨山）を望む絶景展望露天風呂まで、信州の初冬の贅を味わい尽くす厳選宿5選を詳しく紹介します。",
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.com/winter-nagano-togura-kamiyamada-onsen-shinshugyu-apple-stay",
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
              "name": "戸倉上山田温泉　湯元　上山田ホテル",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7240/7240.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7240%2F7240.html",
              "priceRange": "¥13,282〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "長野県",
                "addressLocality": "千曲市上山田温泉",
                "streetAddress": "千曲市上山田温泉1-69-3",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.21",
                "reviewCount": 795
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "戸倉上山田温泉　源泉掛け流しの宿　ホテル亀屋本店",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/5194/5194.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5194%2F5194.html",
              "priceRange": "¥9,900〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "長野県",
                "addressLocality": "千曲市上山田温泉",
                "streetAddress": "千曲市上山田温泉１－３７－１",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.28",
                "reviewCount": 1764
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "戸倉上山田温泉　荻原館",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/5676/5676.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5676%2F5676.html",
              "priceRange": "¥9,240〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "長野県",
                "addressLocality": "千曲市上山田温泉",
                "streetAddress": "千曲市上山田温泉1-31-3",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.48",
                "reviewCount": 544
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "戸倉上山田温泉　笹屋ホテル",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/72823/72823.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72823%2F72823.html",
              "priceRange": "¥26,400〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "長野県",
                "addressLocality": "千曲市上山田温泉",
                "streetAddress": "千曲市戸倉温泉3055",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.71",
                "reviewCount": 227
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "戸倉上山田温泉　ホテル圓山荘",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/72768/72768.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72768%2F72768.html",
              "priceRange": "¥9,700〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "長野県",
                "addressLocality": "千曲市上山田温泉",
                "streetAddress": "千曲市上山田温泉2-9-6",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.16",
                "reviewCount": 403
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
            "name": "戸倉上山田温泉の「善光寺精進落としの湯」とはどういう歴史や由来があるのですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "古来より「一生に一度は善光寺詣り」と称された信州善光寺参拝において、厳しい精進潔斎（肉食や飲酒を絶ち心身を清める修行）を終えた巡礼者たちが、帰途に疲れを癒やし日常の生活へと戻るために立ち寄った温泉が「精進落とし（精進明け）の湯」です。戸倉上山田温泉は善光寺から南へ千曲川を遡った北国街道の要衝に位置し、豊富な湯量と優れた美肌効能から、旅人たちが精進を解いて信州の酒や山の幸を楽しみ、心身を再生させる湯治場として栄えてきました。"
            }
          },
          {
            "@type": "Question",
            "name": "千曲市名物の郷土料理「おしぼりうどん」とはどのようなうどんで、どこで食べられますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「おしぼりうどん」は、千曲市特産の辛味大根である「ねずみ大根」をすりおろし、布巾で固く絞った辛い絞り汁（おしぼり）に、信州味噌を好みの量溶かし入れ、茹でたての釜揚げうどんを浸けて食べる千曲川流域の伝統郷土料理です。大根おろしの鮮烈な辛味の奥にほのかな甘みがあり、信州味噌の発酵の旨味と合わさることで、一度食べたら癖になる深い味わいが生まれます。戸倉上山田温泉街や周辺のうどん店・蕎麦店で初冬の名物として親しまれています。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の戸倉上山田温泉周辺の気候と積雪状況、必要な防寒具は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月の千曲市周辺は紅葉の終わりとともに朝晩の冷え込みが厳しくなり、平均気温は約8〜13℃、最低気温は0℃近くまで下がります。12月に入ると最高気温は約5〜9℃、氷点下の日が増えますが、千曲川流域の平野部は雪国のような豪雪地帯ではなく、12月前半に激しい積雪があることは稀です。ただし路面の凍結や朝晩の霜には注意が必要です。服装は風を通さない厚手のダウンコートや裏起毛のインナー、マフラーや手袋などの防寒対策を万全に整えてください。"
            }
          },
          {
            "@type": "Question",
            "name": "戸倉上山田温泉への車や電車でのアクセス方法と、冬タイヤの必要性は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "電車の場合は、北陸新幹線「上田駅」または「長野駅」からしなの鉄道に乗り換え、「戸倉駅」下車。戸倉駅からは各旅館の送迎バスやタクシーで約5〜7分とアクセス抜群です。車の場合は、上信越自動車道「坂城IC」または長野自動車道「更埴IC」から国道18号線経由で約15分です。11月下旬以降は峠越えや早朝深夜の道路凍結の可能性があるため、自家用車やレンタカーで訪れる際はスタッドレスタイヤの装着が推奨されます。"
            }
          },
          {
            "@type": "Question",
            "name": "初冬の戸倉上山田温泉とあわせて巡りたいおすすめ観光スポットは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "国の重要文化的景観に指定され「姨捨の棚田」として名高い姨捨エリア（JR姨捨駅からの善光寺平夜景や冠着山の眺望）、千曲川沿いに広がる信州リンゴ園での完熟サンふじ直売所巡り、真田十万石の城下町「松代」（松代城跡や真田邸）、そして本堂が国宝の「善光寺」参拝が定番です。戸倉駅から長野駅までしなの鉄道で約30分のため、善光寺と戸倉上山田温泉を組み合わせた初冬の信州周遊ルートが非常に快適です。"
            }
          }
        ]
      }
    ]
  };

  const faqList = [
  {
    "q": "戸倉上山田温泉の「善光寺精進落としの湯」とはどういう歴史や由来があるのですか？",
    "a": "古来より「一生に一度は善光寺詣り」と称された信州善光寺参拝において、厳しい精進潔斎（肉食や飲酒を絶ち心身を清める修行）を終えた巡礼者たちが、帰途に疲れを癒やし日常の生活へと戻るために立ち寄った温泉が「精進落とし（精進明け）の湯」です。戸倉上山田温泉は善光寺から南へ千曲川を遡った北国街道の要衝に位置し、豊富な湯量と優れた美肌効能から、旅人たちが精進を解いて信州の酒や山の幸を楽しみ、心身を再生させる湯治場として栄えてきました。"
  },
  {
    "q": "千曲市名物の郷土料理「おしぼりうどん」とはどのようなうどんで、どこで食べられますか？",
    "a": "「おしぼりうどん」は、千曲市特産の辛味大根である「ねずみ大根」をすりおろし、布巾で固く絞った辛い絞り汁（おしぼり）に、信州味噌を好みの量溶かし入れ、茹でたての釜揚げうどんを浸けて食べる千曲川流域の伝統郷土料理です。大根おろしの鮮烈な辛味の奥にほのかな甘みがあり、信州味噌の発酵の旨味と合わさることで、一度食べたら癖になる深い味わいが生まれます。戸倉上山田温泉街や周辺のうどん店・蕎麦店で初冬の名物として親しまれています。"
  },
  {
    "q": "11月・12月の戸倉上山田温泉周辺の気候と積雪状況、必要な防寒具は？",
    "a": "11月の千曲市周辺は紅葉の終わりとともに朝晩の冷え込みが厳しくなり、平均気温は約8〜13℃、最低気温は0℃近くまで下がります。12月に入ると最高気温は約5〜9℃、氷点下の日が増えますが、千曲川流域の平野部は雪国のような豪雪地帯ではなく、12月前半に激しい積雪があることは稀です。ただし路面の凍結や朝晩の霜には注意が必要です。服装は風を通さない厚手のダウンコートや裏起毛のインナー、マフラーや手袋などの防寒対策を万全に整えてください。"
  },
  {
    "q": "戸倉上山田温泉への車や電車でのアクセス方法と、冬タイヤの必要性は？",
    "a": "電車の場合は、北陸新幹線「上田駅」または「長野駅」からしなの鉄道に乗り換え、「戸倉駅」下車。戸倉駅からは各旅館の送迎バスやタクシーで約5〜7分とアクセス抜群です。車の場合は、上信越自動車道「坂城IC」または長野自動車道「更埴IC」から国道18号線経由で約15分です。11月下旬以降は峠越えや早朝深夜の道路凍結の可能性があるため、自家用車やレンタカーで訪れる際はスタッドレスタイヤの装着が推奨されます。"
  },
  {
    "q": "初冬の戸倉上山田温泉とあわせて巡りたいおすすめ観光スポットは？",
    "a": "国の重要文化的景観に指定され「姨捨の棚田」として名高い姨捨エリア（JR姨捨駅からの善光寺平夜景や冠着山の眺望）、千曲川沿いに広がる信州リンゴ園での完熟サンふじ直売所巡り、真田十万石の城下町「松代」（松代城跡や真田邸）、そして本堂が国宝の「善光寺」参拝が定番です。戸倉駅から長野駅までしなの鉄道で約30分のため、善光寺と戸倉上山田温泉を組み合わせた初冬の信州周遊ルートが非常に快適です。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "戸倉上山田温泉　湯元　上山田ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7240/7240.jpg",
              rating: 4.21,
              reviews: 795,
              price: "¥13,282〜",
              access: "長野道更埴ICより車で20分／上信越道坂城ICより車で15分／しなの鉄道戸倉駅から車で7分 送迎可能　■コンビニ徒歩3分",
              special: "源泉かけ流し温泉の情緒あふれるホテル　■無料貸し切り風呂や露天風呂付客室が人気です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7240%2F7240.html",
              story: "明治36年の開湯以来、戸倉上山田温泉の歴史とともに歩み続けてきた老舗旅館「湯元 上山田ホテル」。アール・デコ調の気品ある意匠が随所に漂い、皇族や多くの文人墨客を迎えてきた格式高い湯宿です。自家源泉から贅沢に注がれる温泉は、無色透明から空気に触れることで柔らかなエメラルドグリーンへと色合いを変える天然の単純硫黄泉。肌に吸い付くような滑らかな浴感で、湯上がりは湯冷めしにくくしっとりと潤います。夕食は信州の豊かな大地が育んだ旬の恵みを凝縮した本格会席。A5ランク信州プレミアム牛の陶板焼きをメインに、千曲川の清流で育まれた信州サーモンのお造り、初冬の根菜を炊き合わせた郷土の椀物が彩り豊かに並びます。中庭を望む落ち着いた数寄屋造りの客室で、千曲川の川風を感じながら静かな初冬の夜を心ゆくまで過ごせます。",
              roomTip: "日本庭園を眼下に望む本館の数寄屋風和室。手入れの行き届いた中庭の初冬木立を眺めながら、静寂に包まれた上質な休息を堪能できます。",
              gourmetTip: "「信州プレミアム牛陶板焼き＆初冬の信州郷土会席」。きめ細やかなサシが入った信州牛を香ばしく焼き上げ、地元の地酒とともに味わう贅沢なひととき。",
              highlights: [
                "開湯百余年の名門老舗＆エメラルドグリーンの良質自家源泉と格調高きアール・デコ調建築",
                "信州プレミアム牛陶板焼き会席＆清流信州サーモンと地酒のペアリング",
                "善光寺や姨捨山観光への抜群アクセス＆数寄屋造り客室の静寂な初冬の夜"
              ]
            },
            {
              id: 2,
              name: "戸倉上山田温泉　源泉掛け流しの宿　ホテル亀屋本店",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5194/5194.jpg",
              rating: 4.28,
              reviews: 1764,
              price: "¥9,900〜",
              access: "しなの鉄道戸倉駅約2ｋｍ　上信越道坂城ICから約８ｋｍ　長野自動車道更埴ＩＣから約１２ｋｍ",
              special: "名湯百選認定！源泉を満喫★露天付3室新装！選べる貸切風呂1回無料！ 会食場＆カフェ20種の飲物無料♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5194%2F5194.html",
              story: "「源泉かけ流しの贅沢とアットホームなもてなし」を信条とする名湯宿「源泉掛け流しの宿 ホテル亀屋本店」。館内にある大浴場や露天風呂、そして趣の異なる貸切風呂に至るまで、すべて一切の加水・加温・循環を行わない本物の生きた源泉100%かけ流しを徹底しています。ほのかに漂う硫黄の香りと、湯の花が舞うエメラルドグリーンから乳白色へと天候により移ろう湯は、美肌の湯として温泉通からも絶賛されています。夕食は信州牛のしゃぶしゃぶやすき焼きを選べる会席コース。甘みたっぷりの信州リンゴを食べて育った信州牛の柔らかさは格別で、口に入れた瞬間にとろけるような肉の旨味が広がります。宿名物の信州そばや辛味大根を用いた郷土の小鉢も好評で、温泉情緒と美味しい料理を手頃な価格で満喫できる高い満足度が魅力です。",
              roomTip: "広々とした二間続きの純和風客室。初冬の柔らかな日差しが差し込む縁側で、湯上がりに冷たい信州リンゴジュースを飲みながら寛ぐのがおすすめです。",
              gourmetTip: "「信州牛しゃぶしゃぶ鍋と旬菜手創り会席」。あっさりとした出汁にサッとくぐらせる信州牛の甘みと、地元農家から届く新鮮な冬野菜の絶妙な調和。",
              highlights: [
                "源泉100%完全かけ流しの湯宿＆湯の花舞う硫黄泉と信州牛しゃぶしゃぶ鍋のコスパ抜群滞在",
                "肌に優しい弱アルカリ性硫黄泉＆無料貸切風呂でプライベートな美肌湯浴み",
                "辛味大根おしぼりうどん名店巡り至近＆温泉街中心部の便利なロケーション"
              ]
            },
            {
              id: 3,
              name: "戸倉上山田温泉　荻原館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5676/5676.jpg",
              rating: 4.48,
              reviews: 544,
              price: "¥9,240〜",
              access: "長野道更埴ICから車20分／上信越道坂城ICから車15分／姨捨スマートICから車15分／しなの鉄道戸倉駅から送迎可",
              special: "★月と星空を仰ぐ「美白の湯」・旬を味わう手づくり料理・心やすらぐ御母手成志（おもてなし）の宿★",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5676%2F5676.html",
              story: "創業から百余年、きめ細やかなおもてなしと露天風呂からの眺望で旅人を魅了する「荻原館」。最上階に設けられた展望大浴場と露天風呂からは、戸倉上山田の温泉街と遠く北信濃の連峰が一望でき、初冬の澄み渡る夕暮れ時には山々が茜色に染まる幻想的な光景に出会えます。源泉かけ流しの湯は弱アルカリ性単純硫黄泉で、湯船に身を沈めると微細な気泡が肌を包み込み、毛穴の汚れを優しく落としてすべすべの素肌へと導きます。お楽しみの夕食は、料理長が一品一品心を込めて仕立てる創作和会席。霜降り信州プレミアム牛の石焼きステーキをはじめ、信州サーモンの瞬間燻製、冬大根の風呂吹き、そして信州手打ちそばなど、地の利を生かした滋味あふれる料理が並びます。全館に生けられた可憐な野の花の香りに心和む癒やしの宿です。",
              roomTip: "最上階フロアの展望和モダン客室。初冬の冠着山や千曲川の風景をプライベート空間からゆったりと眺める贅沢な時間が流れます。",
              gourmetTip: "「信州プレミアム牛石焼きステーキ会席」。高温の溶岩石で旨味を閉じ込めた信州牛のジューシーな肉汁と、地元産山葵の清々しい辛味がベストマッチ。",
              highlights: [
                "最上階展望露天風呂から北信濃連峰の初冬絶景＆信州プレミアム牛石焼きステーキ会席",
                "生花が薫る館内とおもてなし＆冬大根風呂吹きや手打ち信州そばの滋味",
                "夕暮れの山並みグラデーションを望む湯浴み＆和モダン客室でのリトリート"
              ]
            },
            {
              id: 4,
              name: "戸倉上山田温泉　笹屋ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/72823/72823.jpg",
              rating: 4.71,
              reviews: 227,
              price: "¥26,400〜",
              access: "北陸新幹線上田駅→しなの鉄道「戸倉駅」より車で７分",
              special: "温泉は全て源泉かけ流しの天然温泉。館内のゆったりとした空間がくつろぎのひと時をお約束致します。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72823%2F72823.html",
              story: "志賀直哉をはじめとする文豪や各界の著名人に愛されてきた、戸倉上山田を代表する名門クラシックホテル「笹屋ホテル」。建築界の巨匠・遠藤新（フランク・ロイド・ライトの高弟）が設計を手掛けた別荘建築の傑作「豊年虫（登録有形文化財）」を擁し、大正・昭和のモダニズムと日本の伝統美が見事に調和しています。庭園の奥深くに湧き出る自家源泉は、湯量豊富な単純硫黄泉。開放感あふれる大浴場「福徳の湯」では、檜の香りと硫黄の芳香が混ざり合い、至福の湯浴み体験を約束します。夕食は中国四川料理の銘店としても知られる本格四川料理会席、または繊細な日本料理会席から選択可能。信州のブランド食材を伝統の技で昇華させた料理の数々は、美食を求める旅人の舌を唸らせて止みません。",
              roomTip: "登録有形文化財の別棟「豊年虫」の客室。ライト建築の意匠を受け継ぐ幾何学デザインと数寄屋の雅が融合した、唯一無二の空間美に浸れます。",
              gourmetTip: "「名門四川料理コースまたは信州牛日本料理会席」。麻辣の深いコクが信州牛の旨味を引き立てる本格四川鍋、または旬の信州牛陶板会席から選べる極上の美食。",
              highlights: [
                "登録有形文化財「豊年虫」のライト建築美＆自家源泉「福徳の湯」と名門四川料理・日本料理",
                "文豪志賀直哉ゆかりの静寂空間＆洗練された中庭とプライベート天然温泉",
                "巨匠遠藤新設計の文化財空間＆歴史ある名湯で味わう至高のクラシックステイ"
              ]
            },
            {
              id: 5,
              name: "戸倉上山田温泉　ホテル圓山荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/72768/72768.jpg",
              rating: 4.16,
              reviews: 403,
              price: "¥9,700〜",
              access: "戸倉駅より車7分★宿泊前日の17:30までにご連絡をいただければ、2名様より戸倉駅まで無料送迎を承ります。※時間確認要",
              special: "天然温泉100%～2種の源泉かけ流し～／【夕食個室】確約プランあり／全館WiFi無料",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72768%2F72768.html",
              story: "千曲川のせせらぎを間近に感じる閑静な地に佇み、温泉街屈指の広大な庭園露天風呂を誇る「ホテル圓山荘」。宿の最大の自慢は、敷地内に湧く2つの異なる自家源泉を引いた湯船の数々です。巨石を配した野趣あふれる大露天風呂「弥生の湯」や木漏れ日の湯では、硫黄の香りに包まれながら手足を伸ばしてゆったりと入浴でき、初冬の澄んだ夜には満天の星空を見上げることができます。夕食は信州の豊かな味覚を豪快に味わう季節会席。柔らかな信州牛のすき焼き鍋を中心に、信州サーモンのお造り、千曲名物の杏を使った特製前菜、そして契約農家直送の甘いコシヒカリと熱々のけんちん汁が心を満たします。朝夕ともに充実したおもてなしで、家族旅行から一人旅まで心地よい滞在を提供しています。",
              roomTip: "千曲川側を望む清潔で落ち着いた和室。窓の外に広がる冬枯れの河原と山並みの雄大なコントラストが旅情をかき立てます。",
              gourmetTip: "「信州牛すき焼き小鍋と千曲の味覚会席」。甘辛い割り下で煮込む信州牛の濃厚な旨味を、新鮮な地卵に絡めて味わう冬の定番ご馳走。",
              highlights: [
                "敷地内2源泉を引く広大な巨石庭園露天風呂＆信州牛すき焼きと千曲川のせせらぎに癒やされる宿",
                "千曲名産の杏スイーツと郷土料理＆ファミリーから一人旅まで寛げる快適和室",
                "夜空を仰ぐ開放感満点の大浴場＆契約農家産コシヒカリと熱々けんちん汁"
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
            11月・12月初冬の信州名湯＆美食特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {metadata.title as string}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            千曲川の朝霧と冠着山の初雪、善光寺精進落としの歴史を刻むエメラルドグリーンの単純硫黄泉。
            口の中でほどける極上信州プレミアム牛と完熟サンふじリンゴ、辛味大根おしぼりうどんを味わう至高の初冬旅。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm tracking-wide">
            <Footprints className="w-4 h-4 text-emerald-700" />
            信州千曲川の初冬風情と美肌の名湯
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            北信濃の山々が初雪をまとい、千曲川の水面から幻想的な川霧が立ち込める11月から12月。信州屈指の温泉街として栄える「戸倉上山田温泉」は、一年で最も湯の温もりと風情が心に染み渡る季節を迎えます。全国各地から善光寺へと足を運んだ旅人たちが、過酷な巡礼と精進潔斎を終えた後に立ち寄り、肉食や酒を解いて心身を再生させた「精進落としの湯」としての歴史は今も色濃く息づいています。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            戸倉上山田温泉の最大の魅力は、湧出量毎分8,000リットルを超える圧倒的な湯量と、エメラルドグリーンに輝く良質な天然単純硫黄泉。肌の余分な角質を取り除き、血行を促進して体の芯からぽかぽかに温めてくれる美肌効果は折り紙付きです。夕暮れ時に硫黄の香る温泉街を歩けば、どこか懐かしい昭和レトロな街並みが旅人を温かく迎えてくれます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            そして初冬の信州を語る上で欠かせないのが、大地の恵みを凝縮した味覚の数々。きめ細やかな霜降りと上品な甘みが特徴の「信州プレミアム牛」、千曲川の澄んだ伏流水が育む「信州サーモン」、辛味大根の絞り汁に信州味噌を溶いて味わう伝統の「おしぼりうどん」、そして果汁と蜜がぎっしり詰まった初冬限定の完熟「サンふじ」りんご。寒さが増すごとに美味しさを極める信州の初冬旅へ出かけましょう。
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
              善光寺精進落としの美肌湯と信州牛を堪能する戸倉上山田の名宿
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
                      <span className="inline-block text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full mb-1">
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
                      <span className="text-sm sm:text-base font-extrabold text-emerald-800">
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
                          <span className="font-bold text-emerald-900 block mb-0.5">客室滞在のポイント：</span>
                          {hotel.roomTip}
                        </div>
                        <div className="text-xs text-stone-700 bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/50">
                          <span className="font-bold text-emerald-900 block mb-0.5">初冬の味覚おすすめ：</span>
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
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
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
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-bold rounded-xl transition duration-200 shadow-xs"
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
          <div className="inline-flex items-center gap-2 text-emerald-300 text-sm font-bold bg-white/10 px-3 py-1 rounded-full">
            <Utensils className="w-4 h-4 text-emerald-300" />
            初冬の信州・千曲美食手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            11月・12月の戸倉上山田で味わう極上肉・郷土麺・蜜入り果実
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-emerald-400" />
                極上「信州プレミアム牛」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                長野県の独自基準であるオレイン酸含有率と脂肪交雑（サシ）をクリアした最高峰の黒毛和牛。すき焼きや陶板焼きで熱を加えると、芳醇な脂の甘みと赤身の深いコクが口いっぱいに広がり、重たさを感じさせない軽やかな後味が特徴です。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Waves className="w-4 h-4 text-emerald-400" />
                名物「おしぼりうどん」
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                千曲市特産の辛味大根「ねずみ大根」をすりおろし、布巾で固く絞った強烈な辛味汁に信州味噌を溶いて味わう伝統郷土麺。釜揚げうどんを熱々のつゆに浸けて啜れば、ツンとした辛味の後に大根の自然な甘みが追いかけ、体の芯から温まります。
              </p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-2">
              <h3 className="font-bold text-white text-base flex items-center gap-2">
                <Apple className="w-4 h-4 text-emerald-400" />
                完熟「サンふじ」りんご
              </h3>
              <p className="text-xs leading-relaxed text-stone-300">
                11月下旬から12月にかけて最盛期を迎える信州りんごの王様「サンふじ」。千曲川沿いの豊かな日照と昼夜の寒暖差によって蜜がたっぷりと入り、シャキッとした心地よい歯ごたえと甘酸っぱい果汁が溢れ出します。直売所での食べ比べも人気です。
              </p>
            </div>
          </div>
        </section>

        {/* 1 Night 2 Days Itinerary Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-emerald-900 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full">
            <Footprints className="w-4 h-4" />
            おすすめ滞在プラン
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の善光寺参拝と戸倉上山田温泉を満喫する1泊2日モデルコース
          </h2>
          <div className="space-y-6 pt-2">
            <div className="border-l-2 border-emerald-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-emerald-100 text-emerald-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                1日目：善光寺参拝から千曲川リンゴ狩り・戸倉上山田の名湯へ
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                国宝善光寺の初冬の静けさに触れ、エメラルドグリーンの美肌硫黄泉と信州牛に舌鼓
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                午前中に北陸新幹線長野駅へ到着。国宝「善光寺」を参拝し、仲見世通りでおやきを味わいながら初冬の澄んだ空気に包まれます。昼過ぎにしなの鉄道で戸倉駅へ移動。千曲川沿いの果樹園直売所に立ち寄り、収穫最盛期の完熟サンふじリンゴを購入。15時に戸倉上山田温泉の旅館へチェックイン。湯の花が舞うエメラルドグリーンの天然硫黄泉に浸かり、巡礼の旅人を癒やしてきた精進落としの名湯を堪能。夕食には信州プレミアム牛のすき焼きと信州サーモン、地酒のペアリングを贅沢に味わいます。
              </p>
            </div>

            <div className="border-l-2 border-emerald-600 pl-4 sm:pl-6 space-y-2">
              <div className="inline-block bg-emerald-100 text-emerald-900 text-xs font-bold px-2.5 py-0.5 rounded-md">
                2日目：千曲川の朝露天・姨捨の棚田絶景から名物おしぼりうどんへ
              </div>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                冠着山を望む朝風呂を満喫し、姨捨の絶景パノラマと伝統の辛味うどんを堪能
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                早朝、千曲川の川霧が静かに漂う中、展望露天風呂で心地よい朝の湯浴み。温泉街の足湯や温泉卵作りを楽しんだ後、チェックアウト。車またはタクシーで「姨捨の棚田」へ。国の重要文化的景観に指定された棚田越しに善光寺平を一望する雄大なパノラマを満喫します。昼食は温泉街近くの名店で、ねずみ大根の辛味汁と信州味噌で味わう名物「おしぼりうどん」を実食。体の芯まで温まり、千曲川の豊かな初冬の風情を胸に帰路へと就きます。
              </p>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-emerald-900 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full">
            <Apple className="w-4 h-4" />
            初冬の千曲・おみやげ＆立ち寄り散策手帖
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            温泉街で手に入れたい初冬の信州銘菓と名物みやげ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                温泉まんじゅう食べ比べと特産あんず銘菓
              </h3>
              <p>
                戸倉上山田温泉街には、湯煙とともに香ばしい蒸気を上げる老舗の温泉まんじゅう店が点在しています。黒糖を練り込んだ薄皮に甘さ控えめのこし餡が詰まった出来立ての熱々まんじゅうは、初冬の街歩きの定番おやつ。また、千曲市は日本有数の「杏（あんず）」の産地でもあり、初冬には上品な酸味が広がるあんずジャム、あんずシロップ漬け、あんず羊羹や焼き菓子など、お土産に喜ばれる特産品が店頭に並びます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Wine className="w-4 h-4 text-emerald-600" />
                千曲川ワインバレーと蔵元直営の純米地酒
              </h3>
              <p>
                千曲川流域は日照時間が長く少雨という葡萄栽培に適した気候から、近年「千曲川ワインバレー」として国内外から熱い注目を集めています。温泉街周辺のワイナリーでは、初冬にリリースされるフレッシュな新酒ワインや限定醸造のメルロー、シャルドネが手に入ります。また、北信濃の厳しい寒気の中で仕込まれる辛口の純米酒やにごり酒も揃い、夕食の信州牛やすき焼きとの相性も格別です。
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
            初冬の千曲・戸倉上山田旅行のポイントと防寒・移動のコツ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-emerald-600" />
                内陸性気候の冷え込みと防寒対策
              </h3>
              <p>
                千曲市周辺は典型的な内陸性盆地気候のため、11月下旬以降は昼夜の寒暖差が激しくなります。日中は10〜15℃程度まで上がる日もありますが、朝晩は0〜4℃近くまで急激に冷え込みます。風を通さないダウンコートや裏起毛のパンツ、マフラーや手袋、保温性のある歩きやすい靴を用意し、温泉街の夜の散策時にもしっかり防寒してください。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Compass className="w-4 h-4 text-emerald-600" />
                快適な鉄道・高速道路アクセス
              </h3>
              <p>
                鉄道利用の場合、北陸新幹線上田駅または長野駅からしなの鉄道で戸倉駅まで約15〜30分。戸倉駅からは各旅館の送迎バス（予約制）で約5〜7分と非常に便利です。車の場合は上信越道坂城ICまたは更埴ICから約15分。初冬の平野部は雪国のような豪雪地帯ではありませんが、11月下旬以降は朝晩の路面凍結に備えてスタッドレスタイヤの装着をおすすめします。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200 space-y-6">
          <div className="inline-flex items-center gap-2 text-emerald-900 text-sm font-bold bg-emerald-50 px-3 py-1 rounded-full">
            <HelpCircle className="w-4 h-4" />
            よくある質問
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
            初冬の戸倉上山田温泉旅行 FAQ
          </h2>
          <div className="space-y-4">
            {faqList.map((faq, fIdx) => (
              <div key={fIdx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="text-sm sm:text-base font-bold text-stone-900 flex items-start gap-2">
                  <span className="text-emerald-800 shrink-0 font-black">Q.</span>
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
        <section className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Map className="w-5 h-5 text-emerald-300" />
              あわせて読みたい信州・甲信越の冬名湯・美食特集
            </h3>
            <p className="text-xs sm:text-sm text-emerald-200">
              冬の味覚と雪見露天風呂、極上信州牛を堪能するおすすめ旅ガイド
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-nagano-kakeyu-onsen-toji-shinshugyu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-emerald-300 bg-emerald-400/20 px-2 py-0.5 rounded-full inline-block">長野・上田鹿教湯</span>
              <h4 className="text-xs font-bold text-white group-hover:text-emerald-200 transition line-clamp-2">
                鹿教湯温泉 文殊堂雪景色＆信州牛湯治宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                環境庁指定保養温泉地の名湯と、氷灯ろう夢まつり・信州牛を味わう冬の湯治旅。
              </p>
            </Link>

            <Link 
              href="/winter-nagano-yamada-matsukawa-keikoku-onsen-shinshugyu-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-emerald-300 bg-emerald-400/20 px-2 py-0.5 rounded-full inline-block">長野・信州高山</span>
              <h4 className="text-xs font-bold text-white group-hover:text-emerald-200 transition line-clamp-2">
                松川渓流雪見露天＆信州プレミアム牛名宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                松川渓谷の雪景色と白濁硫黄泉、信州プレミアム牛のすき焼きを味わう秘湯旅。
              </p>
            </Link>

            <Link 
              href="/winter-nagano-achimura-hirugami-starry-sky-stay"
              className="group p-4 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition duration-200 space-y-2"
            >
              <span className="text-[10px] font-bold text-emerald-300 bg-emerald-400/20 px-2 py-0.5 rounded-full inline-block">長野・阿智村昼神</span>
              <h4 className="text-xs font-bold text-white group-hover:text-emerald-200 transition line-clamp-2">
                日本一の星空ナイトツアー＆美肌湯宿
              </h4>
              <p className="text-[11px] text-stone-200 line-clamp-2">
                初冬の澄み渡る満天の星とpH9.7の超アルカリ性美肌温泉、南信州牛を味わう旅。
              </p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
