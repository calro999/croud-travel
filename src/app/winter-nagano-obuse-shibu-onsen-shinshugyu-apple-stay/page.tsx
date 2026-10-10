import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Heart, ShoppingBag, Shield, Apple
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月北信州】小布施の冬栗おこわ！名宿5選',
  description: '11月中旬から12月の初冬、北信五岳の山々が白銀の雪化粧をまとい、信州の大地に凛とした清澄な空気が満ちる季節。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '渋温泉 宿泊, 小布施 栗おこわ, 金具屋 渋温泉, 渋温泉 九湯めぐり, 湯田中温泉 よろづや, 信州プレミアム牛, サンふじ りんご, 11月 12月 長野温泉, スノーモンキー',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagano-obuse-shibu-onsen-shinshugyu-apple-stay/"
  },
  openGraph: {
    title: '【11・12月北信州】小布施の冬栗おこわ！名宿5選',
    description: '11月中旬から12月の初冬、北信五岳の山々が白銀の雪化粧をまとい、信州の大地に凛とした清澄な空気が満ちる季節。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-nagano-obuse-shibu-onsen-shinshugyu-apple-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '雪化粧の渋温泉石畳と金具屋のライトアップ'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月北信州】小布施の冬栗おこわ＆完熟サンふじ・石畳の渋温泉「九湯めぐり」と信州プレミアム牛を味わう名宿5選",
    description: "11月中旬から12月の初冬、北信五岳の山々が白銀の雪化粧をまとい、信州の大地に凛とした清澄な空気が満ちる季節。葛飾北斎が晩年逗留した栗と歴史の町・小布施（おぶせ）では、秋から初冬限定の蒸したて「栗おこわ」や濃厚な栗菓子、そして蜜がたっぷりと詰まった信州りんごの王様「完熟サンふじ」が最盛期を迎えます。小布施から車で約20分の湯田中・渋温泉郷は、開湯1300年を超える名湯。下駄の音をカランコロンと響かせながら浴衣で巡る石畳の「渋温泉九湯めぐり（外湯厄除け巡浴）」は、冬の北信州を象徴する情趣あふれる風物詩です。国の登録有形文化財・金具屋をはじめとする木造建築の美、湯煙が立ち上る地獄谷野猿公苑の愛らしいスノーモンキー、夕食には霜降り信州プレミアム牛肉のすき焼きと薫り高い十割新そばの贅沢。冬の信州旅情を心ゆくまで堪能できる厳選5宿をご案内します。",
    images: ['https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function NaganoObuseShibuWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-nagano-obuse-shibu-onsen-shinshugyu-apple-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev/"
        },
        "headline": "【11・12月北信州】小布施の冬栗おこわ＆完熟サンふじ・石畳の渋温泉「九湯めぐり」と信州プレミアム牛を味わう名宿5選",
        "description": "11月中旬から12月の初冬、北信五岳の山々が白銀の雪化粧をまとい、信州の大地に凛とした清澄な空気が満ちる季節。葛飾北斎が晩年逗留した栗と歴史の町・小布施（おぶせ）では、秋から初冬限定の蒸したて「栗おこわ」や濃厚な栗菓子、そして蜜がたっぷりと詰まった信州りんごの王様「完熟サンふじ」が最盛期を迎えます。小布施から車で約20分の湯田中・渋温泉郷は、開湯1300年を超える名湯。下駄の音をカランコロンと響かせながら浴衣で巡る石畳の「渋温泉九湯めぐり（外湯厄除け巡浴）」は、冬の北信州を象徴する情趣あふれる風物詩です。国の登録有形文化財・金具屋をはじめとする木造建築の美、湯煙が立ち上る地獄谷野猿公苑の愛らしいスノーモンキー、夕食には霜降り信州プレミアム牛肉のすき焼きと薫り高い十割新そばの贅沢。冬の信州旅情を心ゆくまで堪能できる厳選5宿をご案内します。",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.pages.dev/winter-nagano-obuse-shibu-onsen-shinshugyu-apple-stay",
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
              "name": "渋温泉　歴史の宿　金具屋",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/32044/32044.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32044%2F32044.html",
              "priceRange": "¥18,700〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "長野県",
                "addressLocality": "長野県",
                "streetAddress": "下高井郡山ノ内町平穏2202",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.52",
                "reviewCount": 1016
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "渋温泉　春蘭の宿　さかえや",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/3139/3139.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3139%2F3139.html",
              "priceRange": "¥18,810〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "長野県",
                "addressLocality": "長野県",
                "streetAddress": "下高井郡山ノ内町大字平穏2171",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.89",
                "reviewCount": 1256
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "湯田中温泉　よろづや",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/52848/52848.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52848%2F52848.html",
              "priceRange": "¥17,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "長野県",
                "addressLocality": "長野県",
                "streetAddress": "下高井郡山ノ内町平穏3137",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.62",
                "reviewCount": 1207
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "小布施温泉あけびの湯",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/149041/149041.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149041%2F149041.html",
              "priceRange": "¥11,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "長野県",
                "addressLocality": "長野県",
                "streetAddress": "上高井郡小布施町雁田1311",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.25",
                "reviewCount": 343
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "信州　渋温泉　古久屋",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/2724/2724.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2724%2F2724.html",
              "priceRange": "¥36,300〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "長野県",
                "addressLocality": "長野県",
                "streetAddress": "下高井郡山ノ内町渋温泉2200",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.09",
                "reviewCount": 289
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
            "name": "小布施の「冬栗おこわ」やりんご「完熟サンふじ」の旬・特徴について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "長野県小布施町は江戸時代から将軍家への献上栗として名を馳せた栗の名産地です。秋に収穫された大粒の栗を蒸し上げた「栗おこわ」や「栗かの子」「栗羊羹」は、冬になっても風味豊かで濃厚な甘みを保ち、町内の老舗（竹風堂・小布施堂・桜井甘精堂など）で蒸したての温かい味を楽しめます。また、11月中旬から12月にかけて最盛期を迎える「完熟サンふじ」は、太陽の光をたっぷり浴びて芯まで蜜が入った信州りんごの最高峰。シャキシャキとした食感と濃厚な果汁は、冬の小布施・北信州を訪れたら絶対に入手したい逸品です。"
            }
          },
          {
            "@type": "Question",
            "name": "渋温泉の伝統「九湯めぐり（厄除け巡浴外湯めぐり）」のルールや入浴方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "渋温泉の宿泊客には、温泉街に点在する9つの共同浴場（外湯）の専用鍵（宿泊者専用の巡浴キー）が無料で貸し出されます。一番湯「初湯」から九番湯「大湯」まで順番に巡り、専用の手ぬぐいに記念スタンプを押しながら最後に高薬師へ参詣すると、満願成就・厄除け・不老長寿のご利益があるとされています。大湯以外は地元の人々が日常的に管理する素朴な木造湯屋で、源泉温度が高いため、湯もみ板でかき混ぜたり適度に適温にして入浴するのが作法です。浴衣に下駄を履き、カランコロンと石畳を歩く時間は北信州ならではの情緒です。"
            }
          },
          {
            "@type": "Question",
            "name": "地獄谷野猿公苑（スノーモンキー）の見どころや、渋温泉からのアクセスは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "世界で唯一、温泉に浸かる野生のニホンザル（スノーモンキー）を間近で観察できる「地獄谷野猿公苑」は、渋温泉から車で約10分の「上林温泉」無料駐車場、または渋温泉からの直行路線バスで向かいます。駐車場・バス停からは雪の降る針葉樹林の遊歩道を約30分（約1.6km）徒歩で進みます。11月下旬〜12月の雪が舞う寒い日ほど、サルたちが暖を求めて気持ちよさそうに露天風呂に浸かる姿を見られる確率が高くなります。雪道・山道を歩くため、滑り止めの効いたスノーブーツや防寒防水のアウターが必須です。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の小布施・渋温泉・湯田中の気候と積雪、車の装備は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月中旬以降、北信州エリアは朝晩の気温が0℃を下回り、山沿いから初雪が降り始めます。12月に入ると渋温泉や地獄谷周辺は本格的な雪景色となり、道路の積雪や路面凍結（アイスバーン）が日常的になります。そのため、車やレンタカーで訪れる際は必ずスタッドレスタイヤ（冬用タイヤ）の装着車を利用してください。また、雪道運転に不慣れな場合は、長野駅から長野電鉄の特急「ゆけむり」「スノーモンキー」を利用し、湯田中駅まで電車でアクセスするのが安全で快適です。"
            }
          },
          {
            "@type": "Question",
            "name": "東京や名古屋・金沢方面から小布施・渋温泉へのアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "新幹線を利用する場合、JR東京駅から北陸新幹線（かがやき・はくたか）で長野駅まで約1時間20〜30分。長野駅で長野電鉄長野線（特急電車）に乗り換えて、小布施駅まで約20分、終点の湯田中駅まで約45分です。湯田中駅からは各旅館の送迎バスまたは路線バスで渋温泉まで約7〜10分。名古屋方面からはJR特急しなので長野駅へ約3時間、金沢方面からは北陸新幹線で約1時間5分で長野駅に到着します。高速道路の場合は、上信越自動車道「信州中野IC」または「小布施スマートIC」から約15〜20分です。"
            }
          }
        ]
      }
    ]
  };

  const faqListItems = [
  {
    "q": "小布施の「冬栗おこわ」やりんご「完熟サンふじ」の旬・特徴について教えてください。",
    "a": "長野県小布施町は江戸時代から将軍家への献上栗として名を馳せた栗の名産地です。秋に収穫された大粒の栗を蒸し上げた「栗おこわ」や「栗かの子」「栗羊羹」は、冬になっても風味豊かで濃厚な甘みを保ち、町内の老舗（竹風堂・小布施堂・桜井甘精堂など）で蒸したての温かい味を楽しめます。また、11月中旬から12月にかけて最盛期を迎える「完熟サンふじ」は、太陽の光をたっぷり浴びて芯まで蜜が入った信州りんごの最高峰。シャキシャキとした食感と濃厚な果汁は、冬の小布施・北信州を訪れたら絶対に入手したい逸品です。"
  },
  {
    "q": "渋温泉の伝統「九湯めぐり（厄除け巡浴外湯めぐり）」のルールや入浴方法は？",
    "a": "渋温泉の宿泊客には、温泉街に点在する9つの共同浴場（外湯）の専用鍵（宿泊者専用の巡浴キー）が無料で貸し出されます。一番湯「初湯」から九番湯「大湯」まで順番に巡り、専用の手ぬぐいに記念スタンプを押しながら最後に高薬師へ参詣すると、満願成就・厄除け・不老長寿のご利益があるとされています。大湯以外は地元の人々が日常的に管理する素朴な木造湯屋で、源泉温度が高いため、湯もみ板でかき混ぜたり適度に適温にして入浴するのが作法です。浴衣に下駄を履き、カランコロンと石畳を歩く時間は北信州ならではの情緒です。"
  },
  {
    "q": "地獄谷野猿公苑（スノーモンキー）の見どころや、渋温泉からのアクセスは？",
    "a": "世界で唯一、温泉に浸かる野生のニホンザル（スノーモンキー）を間近で観察できる「地獄谷野猿公苑」は、渋温泉から車で約10分の「上林温泉」無料駐車場、または渋温泉からの直行路線バスで向かいます。駐車場・バス停からは雪の降る針葉樹林の遊歩道を約30分（約1.6km）徒歩で進みます。11月下旬〜12月の雪が舞う寒い日ほど、サルたちが暖を求めて気持ちよさそうに露天風呂に浸かる姿を見られる確率が高くなります。雪道・山道を歩くため、滑り止めの効いたスノーブーツや防寒防水のアウターが必須です。"
  },
  {
    "q": "11月・12月の小布施・渋温泉・湯田中の気候と積雪、車の装備は？",
    "a": "11月中旬以降、北信州エリアは朝晩の気温が0℃を下回り、山沿いから初雪が降り始めます。12月に入ると渋温泉や地獄谷周辺は本格的な雪景色となり、道路の積雪や路面凍結（アイスバーン）が日常的になります。そのため、車やレンタカーで訪れる際は必ずスタッドレスタイヤ（冬用タイヤ）の装着車を利用してください。また、雪道運転に不慣れな場合は、長野駅から長野電鉄の特急「ゆけむり」「スノーモンキー」を利用し、湯田中駅まで電車でアクセスするのが安全で快適です。"
  },
  {
    "q": "東京や名古屋・金沢方面から小布施・渋温泉へのアクセス方法は？",
    "a": "新幹線を利用する場合、JR東京駅から北陸新幹線（かがやき・はくたか）で長野駅まで約1時間20〜30分。長野駅で長野電鉄長野線（特急電車）に乗り換えて、小布施駅まで約20分、終点の湯田中駅まで約45分です。湯田中駅からは各旅館の送迎バスまたは路線バスで渋温泉まで約7〜10分。名古屋方面からはJR特急しなので長野駅へ約3時間、金沢方面からは北陸新幹線で約1時間5分で長野駅に到着します。高速道路の場合は、上信越自動車道「信州中野IC」または「小布施スマートIC」から約15〜20分です。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "渋温泉　歴史の宿　金具屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/32044/32044.jpg",
              rating: 4.52,
              reviews: 1016,
              price: "¥18,700〜",
              access: "長野電鉄線　湯田中駅／上信越自動車道　信州中野ＩＣより国道２９２号線を志賀高原方面へ約１５分",
              special: "国登録文化財の建築や豊富な源泉からなるかけ流しの風呂など、昔ながらの温泉旅情をお楽しみ下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32044%2F32044.html",
              story: "創業260余年、木造四階建ての「斉月楼」と大広間が国の登録有形文化財に指定され、昭和初期の宮大工の粋を集めた圧倒的な建築美を誇る歴史の名旅館「渋温泉 歴史の宿 金具屋」。夜になると木造建築が美しくライトアップされ、まるで異世界に迷い込んだかのような幻想的な美しさに息を呑みます。館内には4つの自家源泉から引く4つの大浴場と5つの貸切風呂があり、すべて源泉かけ流し。含硫黄泉や塩化物泉など異なる泉質を館内だけで湯めぐりできます。夕食は信州サーモンや信州プレミアム牛、地元の冬野菜をふんだんに盛り込んだ伝統会席で、歴史と名湯に浸る唯一無二の冬ステイが叶います。",
              roomTip: "登録有形文化財の斉月楼客室または格式ある居人荘。職人の技が光る障子や欄間の細工に包まれ、静かな冬の夜を過ごせます。",
              gourmetTip: "「信州牛鍋と季節の信州会席」。特製割り下に染み渡る信州プレミアム牛の上品な甘みと、地酒「縁喜」の相性が抜群。",
              highlights: [
                "登録有形文化財・斉月楼の圧倒的木造建築美＆4つの自家源泉と8つの風呂めぐり",
                "夜の木造四階建てライトアップの幻想美＆信州牛鍋と季節の郷土料理",
                "日本を代表する名旅館での特別な滞在体験＆冬の静寂と歴史の温もりに浸る"
              ]
            },
            {
              id: 2,
              name: "渋温泉　春蘭の宿　さかえや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/3139/3139.jpg",
              rating: 4.89,
              reviews: 1256,
              price: "¥18,810〜",
              access: "上信越自動車道信州中野ＩＣより車で１５分、ＪＲ湯田中駅よりバス",
              special: "【ロウリュサウナ付き貸切風呂と高気圧酸素カプセルルーム】源泉かけ流しで至福のひとときを。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F3139%2F3139.html",
              story: "「おもてなしの心」と信州の美食で常に高いクチコミ評価を誇る渋温泉の人気旅館「渋温泉 春蘭の宿 さかえや」。モダンな和の設えと温かなサービスが心地よく、露天風呂付き客室や温泉付きスイートも完備しています。大浴場には渋温泉の良質な源泉がかけ流され、初冬の冷えた体を芯からポカポカに温めてくれます。特筆すべきは料理長が腕を振るう創作懐石。信州プレミアム牛肉の炭火焼きや冬の根菜料理、そして契約農家直送の甘いサンふじりんごを使ったデザートなど、目にも鮮やかな一皿一皿が旅の夜を華やかに彩ります。渋温泉の九湯めぐりの鍵も貸し出されます。",
              roomTip: "源泉かけ流しの半露天風呂を備えた和モダン客室。初冬の石畳温泉街を見下ろしながら、プライベートな湯浴みを楽しめます。",
              gourmetTip: "「信州プレミアム牛ステーキと冬の創作懐石」。口の中でとろける最高ランク和牛と信州ワインのマリアージュは感動の美味。",
              highlights: [
                "クチコミ絶賛の温かなもてなし＆信州プレミアム牛ステーキと冬の創作懐石",
                "渋温泉九湯めぐりの外湯鍵付き＆露天風呂付き客室で過ごすプライベートな冬時間",
                "地獄谷野猿公苑スノーモンキーへのアクセス良好＆記念日や夫婦旅に大人気"
              ]
            },
            {
              id: 3,
              name: "湯田中温泉　よろづや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52848/52848.jpg",
              rating: 4.62,
              reviews: 1207,
              price: "¥17,000〜",
              access: "長野電鉄 湯田中駅より 徒歩7分　【地獄谷野猿公苑入口まで車で20分】",
              special: "歴史に触れる宿へようこそ。登録有形文化財「桃山風呂」で、ゆっくり寛ぎの一時を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52848%2F52848.html",
              story: "寛政年間の創業、桃山風建築の傑作として国の登録有形文化財に指定された名物風呂「桃山風呂」を有する湯田中温泉の最高峰老舗旅館「湯田中温泉 よろづや」。日本の温泉建築の白眉と称される桃山風呂は、純木造の伽藍建築様式で造られ、天井の梁や彫刻の美しさは圧巻。広大な庭園露天風呂とともに、豊富な自家源泉がなみなみと注がれます。夕食は北信州の豊かな大地と清流が育んだ旬の食材を活かした本格京風会席。信州黒毛和牛のすき焼きや信州新そば、地元の手作り味噌を使った郷土料理が、格式ある個室食事処でゆったりと提供されます。",
              roomTip: "有形文化財の風情を伝える本館和室または庭園を望む松籟荘の特別室。日本の伝統美と静寂が息づく最高級の寛ぎ空間です。",
              gourmetTip: "「信州牛すき焼きと冬の旬彩会席」。伝統のタレでいただく柔らかな牛肉と、冬の信州ネギ・キノコの旨味が溶け合う絶品鍋。",
              highlights: [
                "国登録有形文化財「桃山風呂」の社寺建築美＆名湯かけ流しの日本庭園露天風呂",
                "寛政創業の歴史が息づく雅な設え＆信州黒毛和牛すき焼きと薫り高い新そば",
                "一度は入浴したい日本の名湯建築の傑作＆静けさに包まれた格式高い冬籠もり"
              ]
            },
            {
              id: 4,
              name: "小布施温泉あけびの湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/149041/149041.jpg",
              rating: 4.25,
              reviews: 343,
              price: "¥11,000〜",
              access: "小布施スマートICより車で約10分。長野電鉄小布施駅よりタクシーで約5分、徒歩約30分。",
              special: "全室から北アルプスや北信五岳を一望できる絶好のロケーションの小布施で唯一の温泉宿となります。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149041%2F149041.html",
              story: "小布施の町の高台に位置し、天候や気温によってエメラルドグリーンから白濁色へと湯の色が変わる神秘的な名湯を持つ一軒宿「小布施温泉あけびの湯」。高台の展望露天風呂からは、北信五岳の山並みと小布施の町並み、そして冬晴れの日には遠く北アルプスの雪景色までが一望できます。含硫黄-ナトリウム・カルシウム-塩化物温泉の源泉は美肌効果と保温効果が抜群。夕食には名物の小布施栗を使った栗おこわや栗料理、信州牛の陶板焼き、信州サーモンのお造りなどが並び、小布施観光と温泉を両方満喫したい旅行者に愛されています。",
              roomTip: "北信五岳と小布施の町を一望する展望和室。初冬の朝、雪化粧した山並みから昇る朝日を窓辺から眺める清々しいひととき。",
              gourmetTip: "「名物小布施栗おこわと信州牛陶板焼き膳」。ふっくら蒸し上げた大粒栗の自然な甘みと、香ばしく焼いた信州牛の贅沢な組み合わせ。",
              highlights: [
                "エメラルドグリーンから白濁へ変わる神秘の美肌温泉＆名物小布施栗おこわ膳",
                "高台から北信五岳と小布施の町並みを一望する展望露天風呂＆信州サーモン料理",
                "小布施の栗散策と温泉を同時に楽しむ好立地＆コスパ抜群の北信州旅行"
              ]
            },
            {
              id: 5,
              name: "信州　渋温泉　古久屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2724/2724.jpg",
              rating: 4.09,
              reviews: 289,
              price: "¥36,300〜",
              access: "JR長野駅から長野電鉄に乗換、終点湯田中駅下車後、タクシーで５分。",
              special: "【総合口コミ5.0】館内全て貸切で6種の源泉・九湯14槽の湯めぐりと信州牛や四季折々豊かな食材を堪能",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2724%2F2724.html",
              story: "寛文年間の創業より十七代にわたり渋温泉で湯を守り続ける老舗宿「信州 渋温泉 古久屋」。館内に6つの自家源泉を所有し、渋温泉の源泉の約半分を保有する圧倒的な湯量を誇ります。天然温泉100%完全かけ流しの湯船は、加水・加温・循環一切なし。大浴場「一茶風呂」をはじめ露天風呂や家族風呂など、館内だけで贅沢な泉質の違いを体感できます。料理は信州の豊かな里山食材を熟練の職人が仕立てる月替わりの会席。信州プレミアム牛肉のしゃぶしゃぶやすき焼き、冬のイワナ骨酒など、古き良き湯宿の温もりを五感で堪能できます。",
              roomTip: "源泉かけ流しの天然温泉露天風呂が付いた贅沢な客室。何時でも好きな時に名湯を満喫できる大人の湯治空間です。",
              gourmetTip: "「信州プレミアム牛しゃぶしゃぶ会席」。出汁にくぐらせるだけで甘い脂が広がる極上牛と、地元の冬野菜を自家製ポン酢で。",
              highlights: [
                "6つの自家源泉を持つ豊富な湯量＆天然温泉100%完全かけ流しの湯巡りと信州牛会席",
                "露天風呂付き客室で過ごす至高の湯治ステイ＆信州プレミアム牛しゃぶしゃぶの贅沢",
                "十七代続く本物の湯守の宿＆温泉通を唸らせる極上の泉質とアットホームなもてなし"
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
      <header className="bg-gradient-to-r from-amber-950 via-stone-900 to-orange-950 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wide border border-amber-400/30">
            <Apple className="w-3.5 h-3.5" />
            11月・12月北信州初冬特集・小布施冬栗＆渋温泉九湯めぐり
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {metadata.title as string}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            北斎ゆかりの小布施で味わう出来立て栗おこわと、蜜あふれる信州完熟サンふじりんご。
            開湯1300年・石畳の渋温泉九湯めぐりと登録有形文化財・金具屋、信州牛すき焼きの贅沢へ。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月北信州】小布施の冬栗おこわ！名宿5選","item":"https://croud-travel.pages.dev/winter-nagano-obuse-shibu-onsen-shinshugyu-apple-stay"}]}) }}
      />

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide">
            <Flame className="w-4 h-4 text-amber-700" />
            北斎の愛した栗の町と千三百年湧き続ける石畳の名湯
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            11月中旬を過ぎると、信州北部の妙高山、黒姫山、戸隠山、飯縄山、斑尾山からなる「北信五岳」は初雪をまとい、白銀の神々しい姿を見せ始めます。北信州の盆地に冷涼で清澄な冬の空気が満ちるこの季節、全国の旅人や美食家を引き寄せてやまないのが、葛飾北斎が晩年を過ごした「小布施（おぶせ）」と、その奥に佇む「渋温泉郷」です。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            江戸時代に将軍家への献上品として名を馳せた小布施栗は、寒暖差の激しい気候と酸性の火山灰土壌によって、類まれな大粒と濃厚な甘みを誇ります。11月・12月の初冬には、ふっくらと蒸し上げられた名物の「栗おこわ」が湯気を上げ、栗鹿ノ子や栗羊羹など職人の技が光る銘菓が町並みを彩ります。さらにこの時期は、太陽の光を限界まで浴びて芯までたっぷりと蜜を溜め込んだ信州りんごの最高峰「完熟サンふじ」の収穫最盛期。もぎたての芳醇な果汁とシャキシャキの食感は、冬の信州ならではの至福の味覚です。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            小布施から車で約20分の山あいに位置する「渋温泉」は、奈良時代の高僧・行基が発見したと伝わる開湯1300年の古湯。浴衣と下駄でカランコロンと音を立てながら石畳の坂道を歩き、一番湯から九番湯までを巡る「渋温泉九湯めぐり」は、冬の温泉情緒の極致です。国の登録有形文化財に指定された「金具屋」の木造四階建て斉月楼が雪の中に灯火を宿す景観は息を呑む美しさ。さらに近くの地獄谷野猿公苑では、雪の中で温泉に浸かるスノーモンキーの愛らしい姿に出会えます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            夕食には、きめ細やかな霜降りと上品な甘みが際立つ最高ランク「信州プレミアム牛」のすき焼きや陶板焼き、そして秋に収穫された十割新そば。冬の北信州の文化と味覚を余すところなく堪能できる厳選5宿をご紹介します。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              渋温泉・湯田中・小布施のおすすめ名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              楽天トラベルAPIよりリアルタイムの空室料金・クチコミ評価・アクセス情報を取得して掲載
            </p>
          </div>

          <div className="space-y-8">
            {hotelCards.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-amber-300"
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
                    <div className="absolute top-3 left-3 bg-amber-950/80 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-full font-bold">
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
                        <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md ml-auto">
                          目安: {hotel.price}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-amber-900 transition-colors">
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
                          <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                          <span><strong>お部屋の選び方：</strong>{hotel.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2 text-stone-600">
                          <Utensils className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
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
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-700 to-orange-800 text-white font-bold text-xs sm:text-sm hover:from-amber-800 hover:to-orange-900 transition-all shadow-xs hover:shadow-md"
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
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-amber-800" />
              1泊2日おすすめモデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              北斎の栗散歩と渋温泉九湯めぐり・スノーモンキーの旅
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-amber-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-amber-700" />
                【1日目】小布施の栗おこわランチと渋温泉九湯めぐり
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>11:30 小布施の老舗で栗おこわランチ：</strong>竹風堂や小布施堂で蒸したて熱々の名物栗おこわ定食を堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>13:00 北斎館と栗の小径散策：</strong>葛飾北斎の肉筆画を鑑賞し、栗の木レンガが敷かれた美しい小径を歩く。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>15:30 渋温泉の宿へチェックイン：</strong>金具屋やさかえやに到着。九湯めぐりの巡浴手ぬぐいと鍵を受け取る。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>16:30 石畳の九湯めぐりスタート：</strong>浴衣と下駄で石畳を歩き、大湯をはじめとする共同浴場に浸かって厄除け。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>19:00 信州プレミアム牛すき焼き＆新そば会席：</strong>とろける霜降り和牛鍋と薫り高い信州十割新そばに地酒で乾杯。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-amber-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-amber-700" />
                【2日目】地獄谷スノーモンキーと完熟サンふじ直売所
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>07:30 朝の源泉風呂と信州郷土朝食：</strong>名湯で温まり、温泉たまごや手作り信州味噌汁、炊きたてご飯を味わう。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>09:30 地獄谷野猿公苑へ：</strong>雪降る針葉樹林の遊歩道を歩き、温泉に浸かる可愛いスノーモンキーを見学。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>12:00 完熟サンふじりんご直売所めぐり：</strong>中野・小布施街道沿いの農園で、蜜入りの完熟サンふじをお土産に購入。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>14:00 長野駅・北陸新幹線へ：</strong>長野電鉄特急スノーモンキーで長野駅へ向かい、善光寺参拝または帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-amber-800" />
              北信州・冬のおみやげ＆立ち寄り散策手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              小布施・渋温泉で手に入れたい初冬の絶品みやげと名所
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-700" />
                伝統の小布施栗銘菓「栗かの子」と「栗羊羹」
              </h3>
              <p>
                小布施の栗菓子は栗と砂糖のみで丹念に練り上げられ、栗本来の豊かな風味と素朴な甘みが凝縮されています。竹風堂の「栗かの子」や小布施堂の「栗羊羹」は、日持ちも良く冬の信州土産の最高峰。温かい緑茶はもちろん、ビターなコーヒーやウイスキーとも相性抜群です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-700" />
                蜜入り完熟サンふじと信州の搾りたて地酒
              </h3>
              <p>
                11月中旬から12月にかけて出荷される「完熟サンふじ」は、太陽光を浴びて自然に蜜がたっぷり入る信州の奇跡の果実。直売所ではもぎたてが箱買いできます。また、志賀高原の清冽な伏流水で醸される玉村本店の名酒「縁喜」やクラフトビール「志賀高原ビール」も旅の思い出に欠かせません。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-amber-800" />
              初冬の渋温泉・泉質と気候の徹底解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ11月・12月の渋温泉九湯めぐりは「冬の風情の極み」なのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-amber-700" />
              含硫黄泉・塩化物泉・硫酸塩泉が混ざり合う圧倒的多様性
            </h3>
            <p>
              渋温泉には数十ヶ所もの源泉が存在し、浴場ごとに泉質や色、香りが微妙に異なります。代表的な泉質は「含硫黄-ナトリウム・カルシウム-塩化物・硫酸塩温泉。」。高温の源泉から立ち上る硫黄の香りは温泉情緒を高めるだけでなく、末梢血管を拡張して血圧を下げ、冷え切った関節の痛みを和らげます。さらに塩分が皮膚をコーティングして保温し、硫酸塩が肌をしっとりと滑らかに整えるため、冬の外湯めぐりで湯冷めしない卓越した温まり効果を発揮します。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-amber-700" />
              九湯めぐりの温冷交互浴と巡浴手ぬぐい祈願の歴史
            </h3>
            <p>
              渋温泉の九つの外湯は、それぞれ「胃腸の湯」「目の湯」「笹の湯」「大湯」など効能が異なり、地元民の生活共同風呂として守られてきました。各外湯は源泉温度が50〜60℃以上と熱く、初冬の冷気の中でサッと浸かっては石畳を歩くサイクルが、毛細血管の収縮と拡張を促す「温冷交代浴」のような自律神経リフレッシュ作用をもたらします。専用手ぬぐいに朱印を押しながら巡る古来の風習は、心身の健康と開運を同時に叶える日本の誇るべき温泉文化です。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              厳しい寒暖差が果実の糖度を高める北信州の奇跡の気候
            </h3>
            <p>
              小布施や山ノ内町が位置する千曲川・夜間瀬川流域は、内陸性気候のため昼夜の寒暖差が非常に大きいのが特徴です。秋から初冬にかけて夜間の気温が氷点下近くまで下がることで、りんごや栗の樹木は果実を守るために自己糖化作用を促進。その結果、他地域では出せない驚異的な糖度と濃厚なコクが凝縮されます。冬の訪れとともに極上の味覚が完成する、まさに大自然の恵みです。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-amber-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の小布施・渋温泉・湯田中旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-800" />
            あわせて読みたい初冬の甲信越・全国名湯特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-nagano-shibu-onsen-nine-sotoyu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">長野・渋温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">名湯九湯めぐりと石畳の情緒・信州牛すき焼きを味わう冬の湯治宿</p>
            </Link>
            <Link 
              href="/winter-nagano-yudanaka-onsen-snow-monkey-shinshu-beef-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">長野・湯田中温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">開湯1350年の歴史と桃山風呂・スノーモンキー散策と信州プレミアム牛</p>
            </Link>
            <Link 
              href="/winter-nagano-jigokudani-snow-monkey-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">長野・地獄谷温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">温泉に浸かる野生ザルの神秘と冬の秘湯・信州そばと温まりの露天風呂</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-nagano-obuse-shibu-onsen-shinshugyu-apple-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
