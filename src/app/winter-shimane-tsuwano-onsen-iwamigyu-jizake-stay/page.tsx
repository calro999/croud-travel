import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Heart, ShoppingBag, Shield, Castle
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月山陰】山陰の小京都！名宿5選',
  description: '11月から12月の初冬、石州瓦の赤茶色の屋根と白い漆喰壁が美しいコントラストを描く島根県津和野町は。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '津和野 宿泊, 津和野温泉, 石見牛 宿, 津和野 冬の旅, ゆとりろ津和野, 若槻 津和野, マスコスホテル, 荒磯館, 11月 12月 島根観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shimane-tsuwano-onsen-iwamigyu-jizake-stay/"
  },
  openGraph: {
    title: '【11・12月山陰】山陰の小京都！名宿5選',
    description: '11月から12月の初冬、石州瓦の赤茶色の屋根と白い漆喰壁が美しいコントラストを描く島根県津和野町は。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-shimane-tsuwano-onsen-iwamigyu-jizake-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '山陰の小京都津和野の町並みと冬景色'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月山陰】山陰の小京都・津和野の冬情緒と冬の新酒蔵開き・幻の石見牛＆津和野温泉の静謐な湯浴みを堪能する名宿5選",
    description: "11月から12月の初冬、石州瓦の赤茶色の屋根と白い漆喰壁が美しいコントラストを描く島根県津和野町は、山陰の小京都と呼ばれるにふさわしい静寂と深い歴史情趣に包まれます。殿町通りの掘割をゆったりと泳ぐ色鮮やかな錦鯉、津和野城跡から見下ろす早朝の幻想的な「朝霧雲海」、千本鳥居が山肌を朱色に染め上げる太鼓谷稲成神社など、初冬の津和野はどこを切り取っても風情ある絵画のよう。名水百選に恵まれた津和野では、11月下旬から冬の新酒仕込みと蔵開きが始まり、搾りたての芳醇な地酒の香りが町を包みます。美食の主役は、年間わずかしか出荷されない幻のブランド黒毛和牛「石見牛（いわみぎゅう）」のステーキや陶板焼き、そしてご飯の下に旬の野菜を隠した伝統郷土料理「うずめ飯」。津和野唯一の天然温泉や益田の日本海を望む荒磯温泉など、大人の初冬旅情を満喫する厳選5宿をご案内します。",
    images: ['https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function ShimaneTsuwanoOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-shimane-tsuwano-onsen-iwamigyu-jizake-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.pages.dev/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.pages.dev/"
        },
        "headline": "【11・12月山陰】山陰の小京都・津和野の冬情緒と冬の新酒蔵開き・幻の石見牛＆津和野温泉の静謐な湯浴みを堪能する名宿5選",
        "description": "11月から12月の初冬、石州瓦の赤茶色の屋根と白い漆喰壁が美しいコントラストを描く島根県津和野町は、山陰の小京都と呼ばれるにふさわしい静寂と深い歴史情趣に包まれます。殿町通りの掘割をゆったりと泳ぐ色鮮やかな錦鯉、津和野城跡から見下ろす早朝の幻想的な「朝霧雲海」、千本鳥居が山肌を朱色に染め上げる太鼓谷稲成神社など、初冬の津和野はどこを切り取っても風情ある絵画のよう。名水百選に恵まれた津和野では、11月下旬から冬の新酒仕込みと蔵開きが始まり、搾りたての芳醇な地酒の香りが町を包みます。美食の主役は、年間わずかしか出荷されない幻のブランド黒毛和牛「石見牛（いわみぎゅう）」のステーキや陶板焼き、そしてご飯の下に旬の野菜を隠した伝統郷土料理「うずめ飯」。津和野唯一の天然温泉や益田の日本海を望む荒磯温泉など、大人の初冬旅情を満喫する厳選5宿をご案内します。",
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.pages.dev/winter-shimane-tsuwano-onsen-iwamigyu-jizake-stay",
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
              "name": "津和野温泉　ゆとりろ津和野",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/184494/184494.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184494%2F184494.html",
              "priceRange": "¥6,050〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "島根県",
                "addressLocality": "島根県",
                "streetAddress": "鹿足郡津和野町後田ロ82-3",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.12",
                "reviewCount": 560
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "若槻　津和野",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/196546/196546.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196546%2F196546.html",
              "priceRange": "¥11,667〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "島根県",
                "addressLocality": "島根県",
                "streetAddress": "鹿足郡津和野町後田ロ218【本町通り沿いにあるホテルです】",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.40",
                "reviewCount": 2
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "コンドミニアム　津和野荘",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/179133/179133.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179133%2F179133.html",
              "priceRange": "¥8,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "島根県",
                "addressLocality": "島根県",
                "streetAddress": "鹿足郡津和野町森村ロ84-4",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.40",
                "reviewCount": 2
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "ＭＡＳＣＯＳ　ＨＯＴＥＬ",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/172875/172875.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172875%2F172875.html",
              "priceRange": "¥4,300〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "島根県",
                "addressLocality": "島根県",
                "streetAddress": "益田市駅前町30-20",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.51",
                "reviewCount": 868
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "荒磯温泉　荒磯館",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/12640/12640.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12640%2F12640.html",
              "priceRange": "¥17,600〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "島根県",
                "addressLocality": "島根県",
                "streetAddress": "益田市西平原町1019-1",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.59",
                "reviewCount": 87
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
            "name": "津和野が「山陰の小京都」と呼ばれる理由と、11月・12月の冬ならではの見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "津和野は鎌倉時代からの城下町の面影を色濃く残し、石州瓦の赤茶色の屋根、白壁土塀の武家屋敷、そして通り沿いの掘割を色鮮やかな錦鯉が泳ぐ風情ある景観から「山陰の小京都」と称えられています。11月から12月にかけては、晩秋の紅葉が散り敷き、初冬の澄んだ空気とともに街全体が静けさに包まれます。特に早朝、津和野城跡（リフト利用または登山道）から見下ろすと、津和野盆地一面を白い霧が覆う「朝霧雲海」が発生しやすく、まるで天空に浮かぶ城のような絶景に出会えます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の津和野で楽しめる「新酒蔵開き」や地酒の魅力について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "津和野は青野山の伏流水である清らかな名水と、寒冷な盆地気候に恵まれ、江戸時代から酒造りが非常に盛んな銘酒の町です。古橋酒造（初陣）や華泉酒造など、町内に歴史ある造り酒屋が点在しています。毎年11月下旬から12月にかけて冬の新酒仕込みが本格化し、軒先に新しい緑の「杉玉（酒林）」が掲げられます。搾りたての新酒はフレッシュな発泡感と米本来の華やかな香りが際立ち、冬の宿の夕食や町歩きの試飲で最高の味わいを楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "津和野の郷土料理「うずめ飯」やブランド牛「石見牛」とはどんなグルメ？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「うずめ飯」は日本五大名飯の一つに数えられる津和野の伝統郷土料理です。ご飯の下に煮含めた椎茸、人参、里芋、豆腐などの具材を「うずめ（隠し）」、その上から温かい特製出汁をかけてワサビを添えていただきます。江戸時代の倹約令から贅沢を隠すために生まれたとも言われ、素朴ながら滋味深く体が温まる冬の朝夕にぴったりの味です。また「石見牛」は島根県西部で年間わずか数百頭しか生産されない希少な黒毛和牛で、融点の低い上質な脂と濃厚な赤身の旨味が特徴です。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の津和野の気候と積雪状況、道路凍結の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "津和野は山間に囲まれた盆地のため、初冬の11月中旬以降は朝晩の冷え込みが厳しくなり、最低気温が0℃近くまで下がる日が増えます。12月に入ると初雪が降ることがあり、津和野城跡や山道、日陰の道路では路面凍結が発生します。車やレンタカーで訪れる際は、11月下旬以降はスタッドレスタイヤ（冬用タイヤ）の装着をおすすめします。観光中は、石畳や坂道を歩きやすい滑り止めの効いた靴と、しっかりとした防寒コート・マフラーをご用意ください。"
            }
          },
          {
            "@type": "Question",
            "name": "広島・萩・新山口方面から津和野へのアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "新幹線を利用する場合、JR新山口駅からJR山口線の「特急スーパーおき」で津和野駅まで約1時間。または新山口駅から路線バス（防長交通）で約1時間40分です。萩方面からはJR山陰本線・山口線を乗り継いで約1時間30分、車なら国道9号線を経由して約1時間。広島方面からは中国自動車道「六日市IC」を下り、国道187号・県道を経由して約50分です。SLやまぐち号が運行するシーズンには観光列車でのレトロな旅も楽しめます。"
            }
          }
        ]
      }
    ]
  };

  const faqListItems = [
  {
    "q": "津和野が「山陰の小京都」と呼ばれる理由と、11月・12月の冬ならではの見どころは？",
    "a": "津和野は鎌倉時代からの城下町の面影を色濃く残し、石州瓦の赤茶色の屋根、白壁土塀の武家屋敷、そして通り沿いの掘割を色鮮やかな錦鯉が泳ぐ風情ある景観から「山陰の小京都」と称えられています。11月から12月にかけては、晩秋の紅葉が散り敷き、初冬の澄んだ空気とともに街全体が静けさに包まれます。特に早朝、津和野城跡（リフト利用または登山道）から見下ろすと、津和野盆地一面を白い霧が覆う「朝霧雲海」が発生しやすく、まるで天空に浮かぶ城のような絶景に出会えます。"
  },
  {
    "q": "冬の津和野で楽しめる「新酒蔵開き」や地酒の魅力について教えてください。",
    "a": "津和野は青野山の伏流水である清らかな名水と、寒冷な盆地気候に恵まれ、江戸時代から酒造りが非常に盛んな銘酒の町です。古橋酒造（初陣）や華泉酒造など、町内に歴史ある造り酒屋が点在しています。毎年11月下旬から12月にかけて冬の新酒仕込みが本格化し、軒先に新しい緑の「杉玉（酒林）」が掲げられます。搾りたての新酒はフレッシュな発泡感と米本来の華やかな香りが際立ち、冬の宿の夕食や町歩きの試飲で最高の味わいを楽しめます。"
  },
  {
    "q": "津和野の郷土料理「うずめ飯」やブランド牛「石見牛」とはどんなグルメ？",
    "a": "「うずめ飯」は日本五大名飯の一つに数えられる津和野の伝統郷土料理です。ご飯の下に煮含めた椎茸、人参、里芋、豆腐などの具材を「うずめ（隠し）」、その上から温かい特製出汁をかけてワサビを添えていただきます。江戸時代の倹約令から贅沢を隠すために生まれたとも言われ、素朴ながら滋味深く体が温まる冬の朝夕にぴったりの味です。また「石見牛」は島根県西部で年間わずか数百頭しか生産されない希少な黒毛和牛で、融点の低い上質な脂と濃厚な赤身の旨味が特徴です。"
  },
  {
    "q": "11月・12月の津和野の気候と積雪状況、道路凍結の注意点は？",
    "a": "津和野は山間に囲まれた盆地のため、初冬の11月中旬以降は朝晩の冷え込みが厳しくなり、最低気温が0℃近くまで下がる日が増えます。12月に入ると初雪が降ることがあり、津和野城跡や山道、日陰の道路では路面凍結が発生します。車やレンタカーで訪れる際は、11月下旬以降はスタッドレスタイヤ（冬用タイヤ）の装着をおすすめします。観光中は、石畳や坂道を歩きやすい滑り止めの効いた靴と、しっかりとした防寒コート・マフラーをご用意ください。"
  },
  {
    "q": "広島・萩・新山口方面から津和野へのアクセス方法は？",
    "a": "新幹線を利用する場合、JR新山口駅からJR山口線の「特急スーパーおき」で津和野駅まで約1時間。または新山口駅から路線バス（防長交通）で約1時間40分です。萩方面からはJR山陰本線・山口線を乗り継いで約1時間30分、車なら国道9号線を経由して約1時間。広島方面からは中国自動車道「六日市IC」を下り、国道187号・県道を経由して約50分です。SLやまぐち号が運行するシーズンには観光列車でのレトロな旅も楽しめます。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "津和野温泉　ゆとりろ津和野",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/184494/184494.jpg",
              rating: 4.12,
              reviews: 560,
              price: "¥6,050〜",
              access: "JR津和野駅より徒歩6分/中国道「六日市ＩＣ」より車で約50分/「太鼓谷稲荷神社」より車で約5分",
              special: "【日本遺産の町】 津和野百景図 を紐解く 創作会席が自慢―　この地唯一の温泉宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184494%2F184494.html",
              story: "津和野のシンボル・津和野川のほとりに佇み、町内唯一の天然温泉自家源泉を有する癒やしの温泉旅館「津和野温泉 ゆとりろ津和野」。モダンな和の設えと温かなもてなしが融合した空間で、津和野の歴史散策の拠点として最適です。無色透明でまろやかなナトリウム-炭酸水素塩・塩化物温泉の大浴場は、入浴後すぐに肌がすべすべになる「美肌の湯」。露天風呂からは初冬の澄んだ山並みと満天の星空が望めます。夕食は石見の大自然が育んだ幻の「石見和牛」をメインに据えた季節の創作和会席。地元の名水で醸された津和野の銘酒とともに、贅沢な冬の美食時間を過ごせます。",
              roomTip: "津和野の町並みや青野山を望む和洋室またはモダンツイン。清潔で落ち着いた空間で静かに旅の余韻に浸ることができます。",
              gourmetTip: "「石見和牛ステーキと山陰の幸会席」。赤身の芳醇な旨味と口どけの良いサシが特徴の石見牛と、初冬の新酒ペアリングが抜群。",
              highlights: [
                "津和野町内唯一の天然温泉自家源泉＆美肌効果の高い炭酸水素塩・塩化物泉露天風呂",
                "石見の大自然が育んだ幻の石見和牛会席＆名水仕込みの津和野地酒ペアリング",
                "殿町通りや津和野城跡へのアクセス抜群＆和モダンな寛ぎの空間で心身をリセット"
              ]
            },
            {
              id: 2,
              name: "若槻　津和野",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/196546/196546.jpg",
              rating: 4.80,
              reviews: 2,
              price: "¥11,667〜",
              access: "ＪＲ　津和野駅より徒歩約10分",
              special: "4組限定ー山陰の小京都・津和野ー文化財の旧酒造で愉しむ和モダンガストロノミー〈2025.10月開業〉",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196546%2F196546.html",
              story: "津和野城下の由緒ある武家屋敷が並ぶエリアに位置し、築100年を超える伝統的な古民家を再生した一日一組限定の高級町家一棟貸し宿「若槻 津和野」。太い梁や石州瓦、格子戸など当時の職人技を残しながら、最新の床暖房やデザイナーズバスルームを完備した極上のプライベート空間です。初冬の冷え込みも心地よい暖気に包まれ、プライベートガーデンを眺めながら静かに読書や思索を楽しむことができます。食事は津和野の老舗割烹や名店からのケータリング、または自炊キッチンでの地元食材調理など、自由気ままな小京都ステイが叶います。",
              roomTip: "母屋全体を一棟貸切。日本庭園を眺める和室や開放感あふれるリビングで、暮らすように泊まる特別な滞在を体感できます。",
              gourmetTip: "「提携割烹からの津和野郷土会席ケータリング」。名物うずめ飯や石見牛、地酒とともに宿のプライベート空間で味わう贅沢。",
              highlights: [
                "築100年の武家屋敷を再生した一日一組限定の高級町家＆石州瓦と日本庭園が彩る上質空間",
                "最新の床暖房とデザイナーズ設備完備＆暮らすように泊まるプライベート小京都ステイ",
                "大切な記念日や大人の隠れ家旅行に最適＆歴史の息吹が五感に響く贅沢なひととき"
              ]
            },
            {
              id: 3,
              name: "コンドミニアム　津和野荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/179133/179133.jpg",
              rating: 4.30,
              reviews: 2,
              price: "¥5,500〜",
              access: "ＪＲ　津和野駅よりお車にて約5分",
              special: "津和野河畔にたたずむコンドミニアムタイプの一棟貸し宿舎",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179133%2F179133.html",
              story: "津和野駅から徒歩圏内、殿町通りや太鼓谷稲成神社へのアクセスに優れたアパートメントスタイルの快適宿「コンドミニアム 津和野荘」。全室にキッチンや大型冷蔵庫、洗濯機を備え、連泊での湯治やワーケーション、家族旅行の滞在拠点として抜群の利便性を誇ります。初冬の津和野を暮らすように巡り、地元のスーパーや直売所で仕入れた新鮮な石見野菜や石見ポークを調理して楽しむ旅スタイルも人気。清潔で広々としたお部屋で、マイペースに津和野の冬景色と文化に浸ることができます。",
              roomTip: "広々としたリビングと寝室を備えたファミリールーム。プライベート空間がしっかり確保され、気兼ねなく寛げます。",
              gourmetTip: "「津和野の蔵元直送地酒とおつまみ晩酌」。町内の老舗造り酒屋で搾りたての新酒を買い込み、部屋でのんびり味わうのが至高。",
              highlights: [
                "津和野駅徒歩圏内の快適コンドミニアム＆殿町通り散策や長期滞在に最適なフルキッチン",
                "広々とした客室で気兼ねなく寛ぐ冬時間＆地元の食材を調達して楽しむ自由な旅",
                "リーズナブルな価格設定でコスパ抜群＆家族やグループでの津和野旅行拠点"
              ]
            },
            {
              id: 4,
              name: "ＭＡＳＣＯＳ　ＨＯＴＥＬ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/172875/172875.jpg",
              rating: 4.51,
              reviews: 868,
              price: "¥4,300〜",
              access: "益田駅より徒歩にて約5分 ／ 萩・石見空港から車で約10分",
              special: "地下から湧き出る美肌天然温泉・サウナ・水風呂完備！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172875%2F172875.html",
              story: "津和野からJR特急でわずか約30分、日本海と清流高津川が出会う益田駅前に位置し、石見の伝統工芸と現代デザインが融合したライフスタイルホテル「MASCOS HOTEL（マスコスホテル）」。館内には石見焼のタイルや地元の木材が贅沢にあしらわれ、洗練された空間が広がります。自慢の大浴場には地下から湧出する天然温泉「益田温泉」を湛え、美肌効果の高いアルカリ性の湯が旅の疲れを優しく癒やします。レストランでは石見の契約農家から届く新鮮野菜や日本海直送の魚介、石見牛の薪火グリルが楽しめ、津和野観光と組み合わせた宿泊に大人気です。",
              roomTip: "職人の温もりが宿るオリジナル家具と石見焼のマグカップが備えられたスーペリアダブル。居心地抜群のモダン客室です。",
              gourmetTip: "「石見の恵みを味わう薪火グリルディナー」。香ばしく焼き上げた石見和牛や益田の旬魚をクラフトビールや地酒とともに堪能。",
              highlights: [
                "石見の工芸とモダン建築が融合した洗練ホテル＆地下天然温泉「益田温泉」と薪火グリル",
                "石見焼のマグやオリジナル家具の温もり＆地元クラフトビールと石見食材のディナー",
                "津和野観光と益田の海の幸を両方楽しむ新定番拠点＆ビジネス・一人旅にも高評価"
              ]
            },
            {
              id: 5,
              name: "荒磯温泉　荒磯館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12640/12640.jpg",
              rating: 4.59,
              reviews: 87,
              price: "¥17,600〜",
              access: "ＪＲ山陰本線『鎌手駅』下車／浜田自動車道『浜田ＩＣ』より３０分／石見空港より車で２０分",
              special: "眼下に広がる日本海、五感の全てで堪能できる絶景の宿。石見銀山まで約２時間。山陰観光の拠点にどうぞ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12640%2F12640.html",
              story: "津和野から車で約45分、日本海の荒波が打ち寄せる断崖絶壁に建ち、全室オーシャンビューを誇る海辺の一軒宿「荒磯温泉 荒磯館」。波しぶきが届きそうなほど海に近い名物の絶景露天風呂は、刻々と表情を変える日本海の初冬の海原と夕日を一望する圧巻のロケーション。ナトリウム-塩化物泉の湯が冷えた体を芯から包み込みます。11月・12月の夕食は、益田港や浜田港直送の冬の日本海の幸を贅沢に盛り込んだ会席料理。脂ののった寒平目、のどぐろの塩焼き、石見和牛の陶板焼きが並び、津和野の山と益田の海を両方味わう旅を締めくくります。",
              roomTip: "日本海を正面に望む純和室。窓外に広がる打ち寄せる白波と波の音に包まれながら、静かな夜を過ごすことができます。",
              gourmetTip: "「冬の日本海旬魚とのどぐろ塩焼き会席」。脂ののった高級魚のどぐろと、石見牛の陶板焼きを同時に味わえる至高の冬膳。",
              highlights: [
                "波打ち際の絶景露天風呂から日本海を一望＆高級魚のどぐろと石見和牛の贅沢会席",
                "全室オーシャンビューの息を呑む景観＆冬の荒波と夕日を眺めながら過ごす静寂の休日",
                "日本海の海の幸を堪能する美食旅館＆波音に包まれてぐっすり眠る海辺の癒やし"
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
            <Castle className="w-3.5 h-3.5" />
            11月・12月山陰初冬特集・山陰の小京都津和野＆新酒と石見牛探訪
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {metadata.title as string}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            赤瓦と白壁土塀の殿町通りに揺れる錦鯉と、津和野城跡から見下ろす早朝の朝霧雲海。
            11月下旬からの新酒蔵開きと搾りたて地酒、幻の石見牛ステーキ＆津和野温泉の静謐な湯治へ。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide">
            <Flame className="w-4 h-4 text-red-700" />
            石州瓦の赤屋根に初冬の霧が降りる歴史の薫る町
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            島根県の西南部、青野山をはじめとする緑深き山々に囲まれた盆地に広がる津和野町。石州瓦と呼ばれる赤茶色の独特な瓦屋根と白い漆喰壁の武家屋敷が立ち並び、江戸時代から続く城下町の姿をそのままに残すこの地は、「山陰の小京都」として古くから旅人を惹きつけてきました。初冬の11月から12月にかけて、津和野は一年のうちで最もしっとりとした情緒と静寂をたたえる特別な季節を迎えます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            津和野のメインストリートである「殿町通り」では、掘割の清流の中を数百匹もの丸々と肥えた色鮮やかな錦鯉が泳ぎ、初冬の澄んだ水面を優雅に揺らします。太鼓谷の山肌には、日本五大稲荷の一つである「太鼓谷稲成神社」の約1000本もの朱塗りの鳥居がトンネルのように連なり、冬の凛とした空気の中で神々しい輝きを放ちます。さらに早朝、津和野城跡の天守台跡へ登れば、盆地全体を覆い尽くす幻想的な「朝霧雲海」が広がり、雲の上にぽっかりと浮かぶ天空の城の神秘を肌で体感できます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            また、11月下旬から12月は津和野の銘酒が生まれる蔵開きの季節。青野山の清冽な伏流水で仕込まれた冬の新酒が搾り始められ、造り酒屋の軒先には青々とした新しい杉玉が掲げられます。搾りたてならではのフレッシュな微発泡感と米の豊かな旨味は、この時期に津和野を訪れた者だけが味わえる至福の美酒です。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            夕食には、年間出荷数が極めて少なく幻の黒毛和牛と呼ばれる「石見牛」のステーキや、ご飯の下に具材を忍ばせた伝統の「うずめ飯」。津和野唯一の天然温泉や日本海を望む荒磯温泉など、大人の冬旅を彩る厳選5宿をご紹介します。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
              津和野・益田のおすすめ名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              楽天トラベルAPIよりリアルタイムの空室料金・クチコミ評価・アクセス情報を取得して掲載
            </p>
          </div>

          <div className="space-y-8">
            {hotelCards.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl border border-stone-200 shadow-xs overflow-hidden transition-all duration-300 hover:shadow-md hover:border-red-300"
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
                    <div className="absolute top-3 left-3 bg-red-950/80 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-full font-bold">
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
                        <span className="text-xs font-bold text-red-800 bg-red-50 px-2 py-0.5 rounded-md ml-auto">
                          目安: {hotel.price}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-red-900 transition-colors">
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
                          <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
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
                              <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
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
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-700 to-amber-800 text-white font-bold text-xs sm:text-sm hover:from-red-800 hover:to-amber-900 transition-all shadow-xs hover:shadow-md"
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
            <div className="inline-flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-red-800" />
              1泊2日おすすめモデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              山陰の小京都散策と新酒蔵元めぐり・石見牛を味わう旅
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-red-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-red-700" />
                【1日目】殿町通りの鯉と朱塗りの千本鳥居参拝
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>11:30 津和野駅到着＆名物うずめ飯ランチ：</strong>駅前の老舗食事処で熱々のご当地名物うずめ飯を堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>13:00 殿町通り散策＆新酒の蔵元立ち寄り：</strong>白壁土塀の掘割で錦鯉を愛で、老舗酒蔵で新酒の試飲。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>14:30 太鼓谷稲成神社参拝：</strong>山肌に連なる約1000本の朱色の千本鳥居をくぐり、高台からの町並みを一望。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>16:00 宿へチェックイン＆美肌温泉：</strong>津和野温泉の柔らかな湯に浸かり、初冬の冷えた体を芯から温める。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>19:00 極上石見牛ステーキ＆地酒会席：</strong>幻の和牛のジューシーな旨味と、搾りたての初冬新酒のマリアージュに舌鼓。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-red-950 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-red-700" />
                【2日目】早朝の朝霧雲海と森鴎外ゆかりの文化巡礼
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>06:45 津和野城跡からの朝霧雲海：</strong>早朝の澄んだ空気の中、天守台跡から雲海に包まれる城下町を見下ろす。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>08:30 朝の温泉と郷土朝食：</strong>宿に戻り朝風呂を浴び、地元産米と新鮮な石見野菜の朝食をいただく。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>10:00 森鴎外記念館＆旧宅見学：</strong>津和野が生んだ文豪・森鴎外の足跡に触れ、歴史ロマンに思いを馳せる。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>11:30 源氏巻の焼き立て体験とお土産購入：</strong>津和野銘菓「源氏巻」の製造実演を見学し、出来立ての温かい味を堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-red-600 shrink-0 mt-1" />
                  <span><strong>13:30 益田・日本海方面へ：</strong>荒磯温泉で海を眺めるか、JR特急スーパーおきで山口・新幹線方面へ帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-red-800" />
              津和野・冬のおみやげ＆立ち寄り散策手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              津和野で手に入れたい初冬の銘菓・地酒と名所
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-red-700" />
                津和野伝統銘菓「源氏巻」の素朴な甘み
              </h3>
              <p>
                江戸時代、元禄赤穂事件の際に吉良上野介への進物として贈られたことが起源とされる津和野の伝統銘菓「源氏巻」。薄く伸ばしたカステラ生地で上質なこしあんをくるりと巻いた上品な和菓子で、町内の各和菓子店で焼き立ての実演販売が行われています。冬はお茶請けとして熱い緑茶やコーヒーとの相性も抜群です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-700" />
                冬仕込みの新酒日本酒と石見焼の器
              </h3>
              <p>
                11月下旬から出荷が始まる初冬の新酒は、津和野旅行の最高のお土産。古橋酒造の「初陣」や華泉酒造の生原酒など、フルーティーでキレのある地酒が揃います。また、島根県西部で受け継がれる「石見焼（いわみやき）」のぐい呑みや徳利を合わせれば、自宅でも津和野の冬情趣をそのまま楽しむことができます。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-red-800" />
              初冬の津和野・泉質と気候の徹底解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ11月・12月の津和野は「大人の静謐な冬旅」に選ばれるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-red-700" />
              炭酸水素塩泉と塩化物泉がもたらす角質ケアと保温効果
            </h3>
            <p>
              津和野温泉の泉質は、ナトリウム-炭酸水素塩・塩化物温泉（低張性弱アルカリ性温泉）。炭酸水素塩成分（重曹成分）が肌の余分な皮脂や角質をやわらかく洗い流す「クレンジング作用」を持ち、入浴中から肌がつるつると滑らかになります。さらに塩化物成分が薄い塩のベールを肌表面に形成して熱を閉じ込めるため、湯上がりの保温効果が非常に長く持続。盆地特有の初冬の冷気に対して、芯からポカポカと温めてくれる理想的な美肌湯です。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-red-700" />
              盆地地形が生み出す「朝霧雲海」と酒造りに適した清冽な冬環境
            </h3>
            <p>
              津和野は四方を標高数百メートルの山々に囲まれた典型的な盆地地形です。秋から初冬にかけて、放射冷却によって夜間の気温が急激に下がると、津和野川の水蒸気が冷やされて深い霧となり、盆地全体を覆い尽くす「朝霧雲海」が発生します。この昼夜の大きな寒暖差と、冬の厳しい冷え込みこそが、雑菌の繁殖を防ぎ、きめ細やかで芳醇な名酒を醸す酒造りの絶好の条件となっています。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Sparkles className="w-4 h-4 text-red-700" />
              年間わずか数百頭の幻のブランド黒毛和牛「石見牛」の希少価値
            </h3>
            <p>
              島根県西部の大自然の中で、澄んだ地下水と厳選された良質な穀物飼料で丹精込めて育てられる「石見牛」。出荷頭数が極めて少ないため全国的な流通は稀で、「幻の和牛」と称されます。石見牛の特徴は、人間の体温で溶け出すほど融点の低い上質なオレイン酸豊富な脂身と、噛むほどに旨味が溢れるきめ細やかな赤身の絶妙なバランス。初冬の陶板焼きやすき焼きで火を入れると、芳醇な香りが立ち上り、至福の口どけを堪能できます。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide bg-red-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-red-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の津和野・益田旅行 Q&A
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq, idx) => (
              <div key={idx} className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-red-700 font-extrabold">Q.</span>
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
          <div className="flex items-center gap-2 text-red-950 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-red-800" />
            あわせて読みたい初冬の山陰・全国名湯美食特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-shimane-yunotsu-onsen-iwamiginzan-nodoguro-wagyu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-red-700 font-bold block text-[10px]">島根・温泉津温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">石見銀山の世界遺産名湯と冬の極上のどぐろ・石見和牛を味わうレトロ宿</p>
            </Link>
            <Link 
              href="/winter-shimane-tamatsukuri-onsen-kamiarizuki-matsuba-crab-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-red-700 font-bold block text-[10px]">島根・玉造温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">神の湯の天然化粧水風呂と11月解禁松葉ガニ・出雲大社初冬参拝</p>
            </Link>
            <Link 
              href="/winter-yamaguchi-yuda-onsen-torafugu-byakko-choshu-beef-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-red-700 font-bold block text-[10px]">山口・湯田温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">白狐伝説の名湯足湯めぐりと冬の本場とらふぐ・長州黒かしわ会席</p>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-shimane-tsuwano-onsen-iwamigyu-jizake-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
