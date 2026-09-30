import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Heart, ShoppingBag, Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月小安峡・秋の宮温泉】白い湯煙の大噴湯と渓谷初雪・秋田最古の湯・極上皆瀬牛ステーキ＆本場三関せり鍋・稲庭うどん名宿5選",
  description: "11月中旬から12月の初冬を迎えた秋田県湯沢市の奥羽山脈の懐、小安峡温泉（おやすきょうおんせん）と秋の宮温泉郷（あきのみやおんせんきょう）は、山肌が純白の雪をまとい、澄み渡る冷気の中に轟音とともに純白の蒸気が立ちのぼる格別の秘湯シーズンを迎えます。皆瀬川の浸食によってできた落差約60mのV字渓谷「小安峡大噴湯」は、岩壁の裂け目から98℃の温泉蒸気が勢いよく吹き出す地球の鼓動を感じる絶景。初雪と岩肌に下がる氷柱（つらら）、立ちのぼる白煙の対比は冬ならではの圧巻の美しさです。さらに役内川沿いに広がる秋の宮温泉郷は、開湯から約1200年を誇る秋田県内最古の温泉地で、武者小路実篤をはじめ多くの文人が逗留した静寂の里。夕食には地元・皆瀬で丹精込めて肥育された幻の黒毛和牛「皆瀬牛」のステーキ、根っこが白く甘みたっぷりの湯沢名物「三関セリ」と比内地鶏の極上せり鍋、そして日本三大うどん「手綯い本場稲庭うどん」が並びます。初冬の秋田の贅を心ゆくまで堪能できる厳選5宿をご紹介します。",
  keywords: '小安峡温泉 宿泊, 秋の宮温泉郷 旅館, 小安峡 大噴湯 冬, 皆瀬牛 ステーキ, 三関せり鍋 湯沢, 本場稲庭うどん 秋田, 秘湯 秋田 雪見風呂, 11月 12月 秋田旅行',
  alternates: {
    canonical: 'https://croud-travel.com/winter-akita-oyasukyo-akinomiya-onsen-minasegyu-seri-stay'
  },
  openGraph: {
    title: "【11・12月小安峡・秋の宮温泉】白い湯煙の大噴湯と渓谷初雪・秋田最古の湯・極上皆瀬牛ステーキ＆本場三関せり鍋・稲庭うどん名宿5選",
    description: "11月中旬から12月の初冬を迎えた秋田県湯沢市の奥羽山脈の懐、小安峡温泉（おやすきょうおんせん）と秋の宮温泉郷（あきのみやおんせんきょう）は、山肌が純白の雪をまとい、澄み渡る冷気の中に轟音とともに純白の蒸気が立ちのぼる格別の秘湯シーズンを迎えます。皆瀬川の浸食によってできた落差約60mのV字渓谷「小安峡大噴湯」は、岩壁の裂け目から98℃の温泉蒸気が勢いよく吹き出す地球の鼓動を感じる絶景。初雪と岩肌に下がる氷柱（つらら）、立ちのぼる白煙の対比は冬ならではの圧巻の美しさです。さらに役内川沿いに広がる秋の宮温泉郷は、開湯から約1200年を誇る秋田県内最古の温泉地で、武者小路実篤をはじめ多くの文人が逗留した静寂の里。夕食には地元・皆瀬で丹精込めて肥育された幻の黒毛和牛「皆瀬牛」のステーキ、根っこが白く甘みたっぷりの湯沢名物「三関セリ」と比内地鶏の極上せり鍋、そして日本三大うどん「手綯い本場稲庭うどん」が並びます。初冬の秋田の贅を心ゆくまで堪能できる厳選5宿をご紹介します。",
    url: 'https://croud-travel.com/winter-akita-oyasukyo-akinomiya-onsen-minasegyu-seri-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '小安峡大噴湯の白煙と初雪の渓谷美'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月小安峡・秋の宮温泉】白い湯煙の大噴湯と渓谷初雪・秋田最古の湯・極上皆瀬牛ステーキ＆本場三関せり鍋・稲庭うどん名宿5選",
    description: "11月中旬から12月の初冬を迎えた秋田県湯沢市の奥羽山脈の懐、小安峡温泉（おやすきょうおんせん）と秋の宮温泉郷（あきのみやおんせんきょう）は、山肌が純白の雪をまとい、澄み渡る冷気の中に轟音とともに純白の蒸気が立ちのぼる格別の秘湯シーズンを迎えます。皆瀬川の浸食によってできた落差約60mのV字渓谷「小安峡大噴湯」は、岩壁の裂け目から98℃の温泉蒸気が勢いよく吹き出す地球の鼓動を感じる絶景。初雪と岩肌に下がる氷柱（つらら）、立ちのぼる白煙の対比は冬ならではの圧巻の美しさです。さらに役内川沿いに広がる秋の宮温泉郷は、開湯から約1200年を誇る秋田県内最古の温泉地で、武者小路実篤をはじめ多くの文人が逗留した静寂の里。夕食には地元・皆瀬で丹精込めて肥育された幻の黒毛和牛「皆瀬牛」のステーキ、根っこが白く甘みたっぷりの湯沢名物「三関セリ」と比内地鶏の極上せり鍋、そして日本三大うどん「手綯い本場稲庭うどん」が並びます。初冬の秋田の贅を心ゆくまで堪能できる厳選5宿をご紹介します。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function AkitaOyasukyoAkinomiyaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-akita-oyasukyo-akinomiya-onsen-minasegyu-seri-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.com/"
        },
        "headline": "【11・12月小安峡・秋の宮温泉】白い湯煙の大噴湯と渓谷初雪・秋田最古の湯・極上皆瀬牛ステーキ＆本場三関せり鍋・稲庭うどん名宿5選",
        "description": "11月中旬から12月の初冬を迎えた秋田県湯沢市の奥羽山脈の懐、小安峡温泉（おやすきょうおんせん）と秋の宮温泉郷（あきのみやおんせんきょう）は、山肌が純白の雪をまとい、澄み渡る冷気の中に轟音とともに純白の蒸気が立ちのぼる格別の秘湯シーズンを迎えます。皆瀬川の浸食によってできた落差約60mのV字渓谷「小安峡大噴湯」は、岩壁の裂け目から98℃の温泉蒸気が勢いよく吹き出す地球の鼓動を感じる絶景。初雪と岩肌に下がる氷柱（つらら）、立ちのぼる白煙の対比は冬ならではの圧巻の美しさです。さらに役内川沿いに広がる秋の宮温泉郷は、開湯から約1200年を誇る秋田県内最古の温泉地で、武者小路実篤をはじめ多くの文人が逗留した静寂の里。夕食には地元・皆瀬で丹精込めて肥育された幻の黒毛和牛「皆瀬牛」のステーキ、根っこが白く甘みたっぷりの湯沢名物「三関セリ」と比内地鶏の極上せり鍋、そして日本三大うどん「手綯い本場稲庭うどん」が並びます。初冬の秋田の贅を心ゆくまで堪能できる厳選5宿をご紹介します。",
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.com/winter-akita-oyasukyo-akinomiya-onsen-minasegyu-seri-stay",
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
              "name": "秋の宮温泉郷　湯けむりの宿　稲住温泉（共立リゾート）",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/176789/176789.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176789%2F176789.html",
              "priceRange": "¥27,720〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "秋田県",
                "addressLocality": "湯沢市",
                "streetAddress": "湯沢市秋ノ宮山居野11-1",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.67",
                "reviewCount": 248
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "小安峡温泉　旅館　多郎兵衛",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/54673/54673.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54673%2F54673.html",
              "priceRange": "¥9,350〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "秋田県",
                "addressLocality": "湯沢市",
                "streetAddress": "湯沢市皆瀬湯元121-5",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.62",
                "reviewCount": 684
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "小安峡温泉　湯の宿　元湯くらぶ",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/161215/161215.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161215%2F161215.html",
              "priceRange": "¥7,700〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "秋田県",
                "addressLocality": "湯沢市",
                "streetAddress": "湯沢市皆瀬湯元100-1",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.63",
                "reviewCount": 125
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "秋の宮温泉郷　鷹の湯温泉",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/149260/149260.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149260%2F149260.html",
              "priceRange": "¥19,800〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "秋田県",
                "addressLocality": "湯沢市",
                "streetAddress": "湯沢市秋ノ宮殿上１",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.00",
                "reviewCount": 33
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "小安峡温泉のお宿　秋仙",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/165598/165598.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165598%2F165598.html",
              "priceRange": "¥12,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "秋田県",
                "addressLocality": "湯沢市",
                "streetAddress": "湯沢市皆瀬小湯ノ上20-5",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.60",
                "reviewCount": 150
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
            "name": "11月・12月の小安峡温泉・秋の宮温泉郷の積雪状況と道路の路面凍結、冬用タイヤは必要？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "小安峡温泉および秋の宮温泉郷は栗駒山麓・奥羽山脈の山間部に位置するため、11月中旬以降は初雪が観測され、朝晩の路面凍結（アイスバーン）が頻発します。12月に入ると完全な積雪期となり、道路脇に雪の壁ができる本格的な雪国となります。したがって、11月中旬以降に車やレンタカーで訪れる場合は、スタッドレスタイヤ（冬用タイヤ）の装着が必須です。また、国道398号線の栗駒山を越えて宮城県側へ抜けるルートなど山岳道路は冬季通行止めとなるため、湯沢市街地（国道13号線・湯沢IC）側からのアクセスルートを確認してください。"
            }
          },
          {
            "@type": "Question",
            "name": "小安峡大噴湯（だいふんとう）は冬でも見学できる？遊歩道の歩きやすさと見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "小安峡大噴湯は冬でも見学可能ですが、積雪状況や遊歩道の凍結により一部通行止めとなる区間があります。国道398号線沿いの「大噴湯パーキング」から見下ろす展望スペースからは、冬期でも白い蒸気が立ちのぼる大噴湯の全景を安全に眺めることができます。遊歩道を降りる際は階段が約200段あり、初冬は雪や凍結で滑りやすくなるため、防滑性の高いスノーブーツや長靴の着用が強く推奨されます。冬の冷気によって蒸気が真っ白に際立ち、岩壁から下がる氷柱とのコントラストは冬にしか見られない絶景です。"
            }
          },
          {
            "@type": "Question",
            "name": "湯沢名物「三関（みつせき）せり」とはどんなセリで、なぜ冬の鍋に欠かせないのですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "湯沢市三関地区で江戸時代から栽培されている「三関せり」は、奥羽山脈の冷涼な伏流水と厳しい冬の寒さによって育まれる秋田屈指の伝統野菜です。特徴は、茎や葉よりも長く伸びる真っ白な「根っこ」。通常のセリに比べて根が太くシャキシャキとした抜群の歯ごたえがあり、噛むほどに芳醇な甘みと香りが広がります。11月から翌年2月がまさに最盛期で、比内地鶏の出汁で根っこごとサッと煮ていただく「三関せり鍋」は、冬の湯沢・秋田を代表する究極のご馳走です。"
            }
          },
          {
            "@type": "Question",
            "name": "秋の宮温泉郷の歴史と小安峡温泉との泉質・雰囲気の違いは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "秋の宮温泉郷は開湯約1200年前と伝わり、秋田県内で最も古い温泉地です。役内川沿いに旅館が点在し、かつて武者小路実篤が長期滞在して執筆活動を行ったことでも知られる静寂の湯治場です。泉質は保温効果の高いナトリウム-塩化物・炭酸水素塩泉が中心。一方の小安峡温泉は皆瀬川のダイナミックなV字渓谷に位置し、大噴湯の蒸気が立ち込める活気ある温泉街。泉質は弱アルカリ性単純温泉が多く、肌触りが柔らかで癖がなく長湯に適しています。車で約20分の距離なので、両方の温泉情緒を比較する湯めぐりが人気です。"
            }
          },
          {
            "@type": "Question",
            "name": "東京や仙台方面からのアクセス方法と所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "新幹線をご利用の場合、秋田新幹線「大曲駅」でJR奥羽本線に乗り換えて「湯沢駅」まで約3時間30分、または山形新幹線「新庄駅」から奥羽本線で湯沢駅へ約4時間。湯沢駅からは羽後交通バス（小安温泉行き）で約50分です。秋の宮温泉郷へは、湯沢駅から乗合タクシーや路線バス利用、またはJR奥羽本線「横堀駅」からタクシーで約20分。車の場合は東北中央自動車道（湯沢横手道路）「湯沢IC」または「三関IC」から国道398号線または108号線経由で約35〜45分です。"
            }
          }
        ]
      }
    ]
  };

  const faqListItems = [
  {
    "q": "11月・12月の小安峡温泉・秋の宮温泉郷の積雪状況と道路の路面凍結、冬用タイヤは必要？",
    "a": "小安峡温泉および秋の宮温泉郷は栗駒山麓・奥羽山脈の山間部に位置するため、11月中旬以降は初雪が観測され、朝晩の路面凍結（アイスバーン）が頻発します。12月に入ると完全な積雪期となり、道路脇に雪の壁ができる本格的な雪国となります。したがって、11月中旬以降に車やレンタカーで訪れる場合は、スタッドレスタイヤ（冬用タイヤ）の装着が必須です。また、国道398号線の栗駒山を越えて宮城県側へ抜けるルートなど山岳道路は冬季通行止めとなるため、湯沢市街地（国道13号線・湯沢IC）側からのアクセスルートを確認してください。"
  },
  {
    "q": "小安峡大噴湯（だいふんとう）は冬でも見学できる？遊歩道の歩きやすさと見どころは？",
    "a": "小安峡大噴湯は冬でも見学可能ですが、積雪状況や遊歩道の凍結により一部通行止めとなる区間があります。国道398号線沿いの「大噴湯パーキング」から見下ろす展望スペースからは、冬期でも白い蒸気が立ちのぼる大噴湯の全景を安全に眺めることができます。遊歩道を降りる際は階段が約200段あり、初冬は雪や凍結で滑りやすくなるため、防滑性の高いスノーブーツや長靴の着用が強く推奨されます。冬の冷気によって蒸気が真っ白に際立ち、岩壁から下がる氷柱とのコントラストは冬にしか見られない絶景です。"
  },
  {
    "q": "湯沢名物「三関（みつせき）せり」とはどんなセリで、なぜ冬の鍋に欠かせないのですか？",
    "a": "湯沢市三関地区で江戸時代から栽培されている「三関せり」は、奥羽山脈の冷涼な伏流水と厳しい冬の寒さによって育まれる秋田屈指の伝統野菜です。特徴は、茎や葉よりも長く伸びる真っ白な「根っこ」。通常のセリに比べて根が太くシャキシャキとした抜群の歯ごたえがあり、噛むほどに芳醇な甘みと香りが広がります。11月から翌年2月がまさに最盛期で、比内地鶏の出汁で根っこごとサッと煮ていただく「三関せり鍋」は、冬の湯沢・秋田を代表する究極のご馳走です。"
  },
  {
    "q": "秋の宮温泉郷の歴史と小安峡温泉との泉質・雰囲気の違いは？",
    "a": "秋の宮温泉郷は開湯約1200年前と伝わり、秋田県内で最も古い温泉地です。役内川沿いに旅館が点在し、かつて武者小路実篤が長期滞在して執筆活動を行ったことでも知られる静寂の湯治場です。泉質は保温効果の高いナトリウム-塩化物・炭酸水素塩泉が中心。一方の小安峡温泉は皆瀬川のダイナミックなV字渓谷に位置し、大噴湯の蒸気が立ち込める活気ある温泉街。泉質は弱アルカリ性単純温泉が多く、肌触りが柔らかで癖がなく長湯に適しています。車で約20分の距離なので、両方の温泉情緒を比較する湯めぐりが人気です。"
  },
  {
    "q": "東京や仙台方面からのアクセス方法と所要時間は？",
    "a": "新幹線をご利用の場合、秋田新幹線「大曲駅」でJR奥羽本線に乗り換えて「湯沢駅」まで約3時間30分、または山形新幹線「新庄駅」から奥羽本線で湯沢駅へ約4時間。湯沢駅からは羽後交通バス（小安温泉行き）で約50分です。秋の宮温泉郷へは、湯沢駅から乗合タクシーや路線バス利用、またはJR奥羽本線「横堀駅」からタクシーで約20分。車の場合は東北中央自動車道（湯沢横手道路）「湯沢IC」または「三関IC」から国道398号線または108号線経由で約35〜45分です。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "秋の宮温泉郷　湯けむりの宿　稲住温泉（共立リゾート）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/176789/176789.jpg",
              rating: 4.67,
              reviews: 248,
              price: "¥27,720〜",
              access: "【新庄駅】よりお車で約５０分/【鳴子温泉駅】よりお車で約４０分/【秋田空港】よりお車で約９０分",
              special: "多くの著名人に愛された昭和の名宿「稲住温泉」！令和元年リニューアル！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F176789%2F176789.html",
              story: "秋の宮温泉郷の豊かな自然に抱かれた約1万坪の広大な敷地に佇み、昭和の文豪や皇族にも愛された名宿の歴史を受け継ぐ上質湯宿「秋の宮温泉郷 湯けむりの宿 稲住温泉（共立リゾート）」。荒川の渓流を望む離れ客室や内湯付き客室は、木の温もりと和モダンが美しく融合した贅沢な造りです。自慢の温泉は、敷地内から滾々と湧き出る自家源泉を贅沢にかけ流すナトリウム-塩化物・炭酸水素塩泉。初冬の雪景色を望む大浴場や露天風呂、趣の異なる2つの無料貸切風呂で極上の湯浴みを満喫できます。夕食は秋田の滋味あふれる食材をふんだんに取り入れた季節の和食会席。幻の極上和牛「皆瀬牛」の陶板焼きをはじめ、旬の川魚や湯沢特産の三関せり、きりたんぽ鍋など、東北の豊かな恵みを落ち着いた食事処で堪能できます。",
              roomTip: "荒川のせせらぎと初雪木立を望む温泉露天風呂付き客室。好きな時にいつでも極上の美肌湯に浸かりながら贅沢な静寂に浸れます。",
              gourmetTip: "「皆瀬牛の陶板焼き＆季節の秋田会席」。キメ細やかな霜降りと上品な脂の甘みが口いっぱいに広がる希少なブランド牛を堪能。",
              highlights: [
                "広大な1万坪の敷地に佇む離れ湯宿＆自家源泉かけ流しの雪見露天風呂と無料貸切風呂",
                "幻のブランド牛「皆瀬牛」陶板焼き会席＆夜の静寂を彩るラウンジサービス",
                "文人墨客ゆかりの秋の宮温泉郷の格式＆初冬の雪化粧した日本庭園の美しさ"
              ]
            },
            {
              id: 2,
              name: "小安峡温泉　旅館　多郎兵衛",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54673/54673.jpg",
              rating: 4.62,
              reviews: 684,
              price: "¥9,350〜",
              access: "車⇒湯沢ＩＣ・十文字ＩＣより398号線経由40分/　奥羽本線湯沢駅下車⇒バス50分「元湯」下車すぐ",
              special: "土地の食材を季節に注意し、女将自ら腕をふるって無添加手作り料理でおもてなしをしております。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54673%2F54673.html",
              story: "小安峡の温泉街に佇み、創業以来数百年にわたり旅人を温かいもてなしで迎え入れてきた老舗旅館「小安峡温泉 旅館 多郎兵衛」。宿の最大の魅力は、樹齢100年を超える秋田杉をふんだんに使った重厚な梁が目を引く名物大浴場「大鳥の湯」をはじめとする多彩な湯船巡りです。熱めに注がれる天然温泉は、無色透明で肌触りの柔らかな単純温泉。初冬の冷気で冷えた体を芯からポカポカに温め、湯冷めしにくいと評判です。夕食には、地元の契約農家から届く新鮮な根菜や山菜、地元・皆瀬の特選牛、そして本場の職人が丹精込めて打った手綯い稲庭うどんが並びます。秋田の田舎の温もりに満ちた館内で、心温まる冬の休息を過ごせます。",
              roomTip: "純和風の落ち着いた本館客室。窓からは小安峡の初冬の山並みと立ち上る温泉の白煙を望み、古き良き湯治宿の情緒が漂います。",
              gourmetTip: "「秋田名物三関せり鍋と手綯い稲庭うどん膳」。シャキシャキの長い根っこが香る三関せりと、比内地鶏の濃厚な出汁で味わう極上鍋。",
              highlights: [
                "樹齢100年秋田杉の重厚な大鳥の湯＆皆瀬牛と手綯い稲庭うどんを味わう老舗もてなし",
                "弱アルカリ性の柔らかな美肌源泉＆小安峡大噴湯散策に最も便利なロケーション",
                "趣の異なる複数の木造大浴場めぐり＆手作りの郷土料理小鉢が並ぶ朝食"
              ]
            },
            {
              id: 3,
              name: "小安峡温泉　湯の宿　元湯くらぶ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/161215/161215.jpg",
              rating: 4.63,
              reviews: 125,
              price: "¥7,700〜",
              access: "湯沢駅よりお車にて約１時間",
              special: "いいお湯と　食膳を賑わす手料理の数々　のんびりと　やすらげるお部屋　ぬくもりが優しい湯の宿元湯くらぶ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161215%2F161215.html",
              story: "小安峡の渓谷沿いに位置し、全室から四季折々の雄大な山並みを望むアットホームな寛ぎの宿「小安峡温泉 湯の宿 元湯くらぶ」。大浴場と露天風呂は源泉かけ流しの天然温泉で、初冬の澄み渡る冷気の中で雪化粧した山肌を眺めながらゆったりと湯船に浸かれます。弱アルカリ性の単純温泉は肌に優しく、旅の疲れを心地よく解きほぐします。食事は、女将と料理長の手作りによる郷土会席。比内地鶏の出汁がしっかりと染み込んだ「きりたんぽ鍋」や、手作りの胡麻豆腐、岩魚の塩焼き、さらには湯沢名物の稲庭手綯いうどんなど、秋田の素朴ながら贅沢な手料理がテーブルいっぱいに並び、一人旅からカップル、家族連れまで高い支持を得ています。",
              roomTip: "小安峡の渓谷を見下ろす明るい和室。清流皆瀬川のせせらぎが遠くに聞こえ、日常の喧騒から離れた穏やかな時間が流れます。",
              gourmetTip: "「本場比内地鶏のきりたんぽ鍋会席」。手作りの香ばしい焼ききりたんぽと、コク深い地鶏スープの黄金コンビネーション。",
              highlights: [
                "全室リバービューの絶景ロケーション＆比内地鶏きりたんぽ鍋と女将手作りの温かな郷土膳",
                "源泉かけ流しの天然露天風呂＆ファミリーや一人旅でも安心のアットホームステイ",
                "皆瀬川渓谷を眼下に望むパノラマ和室＆リーズナブルに楽しむ本格秘湯ステイ"
              ]
            },
            {
              id: 4,
              name: "秋の宮温泉郷　鷹の湯温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/149260/149260.jpg",
              rating: 5.00,
              reviews: 33,
              price: "¥19,800〜",
              access: "【電車】ＪＲ奥羽本線・横堀駅から乗り合いタクシーにて約40分／【飛行機】秋田空港からタクシーで約90分",
              special: "【創業明治１８年】　渓流沿いの一軒宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149260%2F149260.html",
              story: "秋の宮温泉郷の役内川沿いにひっそりと佇み、日本秘湯を守る会にも加盟する秘湯情緒あふれる名宿「秋の宮温泉郷 鷹の湯温泉」。開湯1200年の歴史を誇る自家源泉は、川底から自然湧出する極上のナトリウム-塩化物泉。名物は深さ130cmもある名物の立ち湯「立湯露天風呂」や、清流のせせらぎを真横に望む混浴野天風呂です。初冬には雪見風呂となり、白い雪に覆われた渓流と澄み渡る空気の中で自然と一体になる湯浴みが楽しめます。食事は秋田の山川の幸をふんだんに使った山里料理。岩魚の骨酒や皆瀬牛の網焼き、手作りの山菜料理など、秘湯ならではの滋味深いご馳走が初冬の夜を豊かに彩ります。",
              roomTip: "役内川の渓流に面した素朴な和室。川のせせらぎと初雪が降り積もる静寂の中で、日常を忘れるディープな癒やしを体感。",
              gourmetTip: "「岩魚骨酒と秋田山里炭火焼き膳」。香ばしく焼き上げた岩魚に熱燗を注いだ骨酒と、地元牛のジューシーな炭火焼きが抜群の相性。",
              highlights: [
                "開湯1200年の自家源泉立ち湯露天＆日本秘湯を守る会の風情と名物岩魚骨酒",
                "役内川の清流を望む混浴野天雪見風呂＆山里の滋味を凝縮した炭火焼き料理",
                "自然湧出の純度100%塩化物泉＆日常を完全に遮断する秘境リトリート"
              ]
            },
            {
              id: 5,
              name: "小安峡温泉のお宿　秋仙",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165598/165598.jpg",
              rating: 4.50,
              reviews: 60,
              price: "¥14,000〜",
              access: "湯沢駅からお車で約４０分（雪道の場合は約１時間）",
              special: "開放感抜群の貸切露天風呂と季節のお料理でおもてなし！「真心の宿」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165598%2F165598.html",
              story: "小安峡温泉の静かな一角に佇み、全客室わずか数室ならではの行き届いた心温まるもてなしが評判の隠れ家割烹旅館「小安峡温泉のお宿 秋仙」。小規模宿ならではの静寂と、料理長が一品一品心を込めて仕立てる本格的な秋田郷土料理が最大の魅力です。温泉は24時間入浴可能な源泉かけ流しの天然温泉。貸切感覚でゆったりとプライベートな湯浴みが楽しめます。夕食の膳には、厳しい寒さで旨味を凝縮させた湯沢名産「三関せり」の根っこまで味わう特製鍋や、A5ランク皆瀬牛の陶板ステーキ、つるりとした喉越しが自慢の本場稲庭うどんが並び、美食通のリピーターを唸らせています。",
              roomTip: "清潔感あふれる和モダン客室。静かな山あいの環境で、誰にも邪魔されないプライベートな初冬の休日を過ごせます。",
              gourmetTip: "「A5皆瀬牛ステーキと根付き三関せり尽くし会席」。湯沢の二大ブランド食材を料理長の繊細な技で仕立てた究極の美食体験。",
              highlights: [
                "全室少数のプライベート隠れ家割烹＆A5皆瀬牛ステーキと根付き三関せり特製鍋",
                "24時間利用可能な源泉かけ流し湯船＆職人手打ちの本場稲庭うどん締め",
                "きめ細やかな女将のもてなし＆静かな山あいで味わう大人の美食休息"
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
      <header className="bg-gradient-to-r from-sky-950 via-slate-900 to-blue-950 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold tracking-wide border border-sky-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            11月・12月初冬の秋田湯沢・小安峡大噴湯＆最古の秘湯特集
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {metadata.title as string}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            大地が息吹く小安峡大噴湯の壮大な白煙と、開湯1200年を誇る秋田最古・秋の宮温泉郷の静寂。
            根っこまで甘い三関セリ鍋、幻の皆瀬牛、手綯い本場稲庭うどんを味わい尽くす初冬の秋田秘湯旅へ。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-sky-900 font-bold text-sm tracking-wide">
            <Mountain className="w-4 h-4 text-sky-800" />
            地球の息吹を感じる大噴湯と文豪が愛した秋田最古の隠し湯
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            11月中旬、奥羽山脈の懐に抱かれた秋田県南部の湯沢市は、栗駒山系の頂から初雪が降り始め、深い原生林が静寂に包まれます。この初冬の時期に圧倒的な存在感を放つのが、皆瀬川が刻んだV字渓谷に位置する小安峡温泉（おやすきょうおんせん）の「大噴湯（だいふんとう）」です。落差約60メートルの岩壁の割れ目から、98℃の熱湯と白い蒸気が轟音を轟かせながら激しく噴出する様子は、まさに生きている大地の息吹そのもの。冬の冷え切った外気によって蒸気はより一層白く立ち昇り、岩肌に下がる巨大な氷柱と相まって息を呑むような大迫力の初冬絵巻を見せてくれます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            小安峡から車で南へ約20分、役内川の清流沿いに広がる秋の宮温泉郷（あきのみやおんせんきょう）は、平安時代の開湯と伝わる秋田県内最古の温泉地。かつて白樺派の文豪・武者小路実篤が長期滞在し小説を執筆したことでも知られ、山里の静けさと川のせせらぎが旅人の心を深く癒やします。豊富な湧出量を誇るナトリウム-塩化物泉や単純温泉は、保温効果が高く、入浴後も体がいつまでも芯からポカポカと温まり、厳しい東北の冬の寒さを優しく忘れさせてくれます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            そして冬の湯沢のもう一つの主役が、この土地ならではの極上の郷土美食。11月に最盛期を迎える「三関セリ」は、真っ白で長い根っこに豊かな甘みと香りが凝縮された逸品で、比内地鶏の出汁で煮込む「三関せり鍋」は冬の秋田でしか味わえない贅沢。さらに地元皆瀬の大自然で育てられた幻の黒毛和牛「皆瀬牛」のステーキ、300年以上の歴史を誇る伝統の「手綯い本場稲庭うどん」。初冬の秋田の温もりに満ちた厳選5名宿を心ゆくまでお楽しみください。
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
              初冬の小安峡大噴湯＆秋の宮温泉郷を満喫する至極の隠れ家宿
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
                  <div className="absolute top-3 left-3 bg-sky-950/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>第{hotel.id}選</span>
                  </div>
                </div>

                <div className="p-6 md:w-7/12 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-stone-500">
                      <span className="flex items-center gap-1 text-sky-800 font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        秋田県湯沢市（小安峡・秋の宮）
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
                    <div className="font-semibold text-sky-950 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-700" />
                      宿の注目ポイント
                    </div>
                    <ul className="space-y-1">
                      {hotel.highlights.map((h: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-stone-100 pt-3 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base sm:text-lg font-black text-sky-950">{hotel.price}</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-sky-800 hover:bg-sky-900 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-xs hover:shadow transition-all"
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
            <div className="inline-flex items-center gap-2 text-sky-900 font-bold text-sm tracking-wide bg-sky-100/60 px-3 py-1 rounded-full">
              <Compass className="w-4 h-4 text-sky-800" />
              1泊2日モデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の湯沢・小安峡大噴湯と本場稲庭うどん・秘湯を満喫する旅程
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-sky-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-sky-700" />
                【1日目】本場稲庭うどんランチと大迫力の小安峡大噴湯へ
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>11:30 湯沢駅に到着＆レンタカー出発：</strong>奥羽本線の湯沢駅から国道398号線を通って稲庭・皆瀬方面へ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>12:15 稲庭町で本場手綯いうどんランチ：</strong>「佐藤養助総本店」などで職人の技を間近で見学し、ツルツルの二味せいろを堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>14:00 小安峡大噴湯の見学：</strong>大噴湯展望台から白い湯煙と初雪の渓谷美をパノラマ鑑賞。地球の息吹に圧倒される。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>15:30 温泉宿へチェックイン：</strong>秋田杉の梁が美しい大浴場や雪見露天風呂で冷えた体を芯から温める。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>18:30 皆瀬牛ステーキ＆三関せり鍋ディナー：</strong>シャキシャキの甘いセリの根っこととろける皆瀬牛、秋田の銘酒「爛漫」「両関」で乾杯。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-sky-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-sky-700" />
                【2日目】秋の宮温泉郷の秘湯立ち寄りと湯沢の銘酒巡り
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>07:30 朝の雪見露天風呂＆源泉浴：</strong>澄み渡る初冬の朝の冷気を感じながら、湯煙に包まれる至福の目覚め風呂。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>08:30 秋田の郷土朝食：</strong>あきたこまちの炊きたてご飯と地元山菜の小鉢、熱々の味噌汁で活力チャージ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>10:00 秋の宮温泉郷へ移動＆川原の湯っこ散策：</strong>役内川沿いの歴史ある温泉街を散策し、開湯1200年の秘湯の空気に浸る。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>11:30 湯沢市街の酒蔵通り見学：</strong>「美酒王国秋田」の酒蔵を訪ね、仕込み水や限定の新酒、三関セリをお土産に購入。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-1" />
                  <span><strong>13:00 比内地鶏親子丼ランチ＆帰路へ：</strong>濃厚な比内地鶏の卵と炭火焼き肉を使った親子丼を味わい、湯沢駅へ。</span>
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
              初冬の湯沢・おみやげ＆立ち寄り散策手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              湯沢・小安峡で手に入れたい初冬の伝統銘品と立ち寄りスポット
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-700" />
                佐藤養助総本店の本場手綯い稲庭うどん
              </h3>
              <p>
                寛文五年（1665年）創業、宮内省御用達の栄誉にも輝いた稲庭うどんの宗家「佐藤養助」。手作業で生地を綯い（ない）、延ばし、乾燥させる伝統製法によって生まれる麺は、絹のような滑らかな舌触りと独特のコシが特徴です。総本店では職人の製造工程をガラス越しに見学できるほか、直営レストランでの食事、ギフト用や家庭用のお得な徳用切り落とし麺などを購入できます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-sky-700" />
                三関の泥付きセリと秋田の冬の漬物「いぶりがっこ」
              </h3>
              <p>
                11月中旬以降、湯沢市内の道の駅や直売所には、朝採れの泥付き「三関セリ」がずらりと並びます。根の白さと香りの強さは別格で、自宅用やお土産用として大変な人気です。また、楢や桜の木煙で大根を燻製にして米糠と塩でじっくり漬け込んだ秋田名物「いぶりがっこ」も初冬が漬け上がりの新物シーズン。クリームチーズと合わせれば極上の日本酒の肴になります。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-sky-900 font-bold text-sm tracking-wide bg-sky-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-sky-800" />
              初冬の小安峡・秋の宮温泉・泉質と気候の徹底解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ11月・12月の小安峡大噴湯は神秘の絶景を生み出すのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-sky-700" />
              栗駒山の火山活動が育む高温蒸気と98℃の熱湯噴出メカニズム
            </h3>
            <p>
              小安峡大噴湯は、栗駒火山のマグマ活動に起因する地熱地帯に位置しています。地下深くでマグマによって熱せられた地下水が高圧の高温水蒸気となり、皆瀬川によって削り取られた断層の裂け目から一気に地表へ噴出します。その温度は約98℃。初冬の冷気（気温0℃前後）と接触することで急激に凝結し、濃密で巨大な白い湯煙の柱を形成します。夏場は水蒸気が拡散しやすいのに対し、11月下旬から12月にかけての氷点下の冷気は湯煙を白く濃密に保ち、轟音とともに立ち昇る姿は冬ならではの迫真のスペクタクルです。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-sky-700" />
              秋の宮温泉郷の塩化物泉が生む持続的な保温効果と美肌作用
            </h3>
            <p>
              一方の秋の宮温泉郷は、役内川沿いに40以上の自然湧出源泉が存在する湯量無尽蔵の秘湯。主泉質はナトリウム-塩化物泉および単純温泉です。塩化物泉に含まれる塩分が肌の表面に薄い皮膜を形成し、入浴後の汗の蒸発を防ぐため「温まりの湯」「熱の湯」として親しまれています。さらに炭酸水素塩や弱アルカリ性の成分が古い角質を優しく落とし、乾燥しがちな初冬の素肌にしっとりとした潤いを取り戻してくれます。
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
              初冬の小安峡温泉・秋の宮温泉郷旅行 Q&A
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
            あわせて読みたい初冬の東北・名湯美食特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-miyagi-togatta-onsen-zao-snow-sendaigyu-kamonabe-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-sky-700 font-bold block text-[10px]">宮城・遠刈田温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">初冠雪の蔵王連峰を望む開湯400年の名湯・仙台牛＆蔵王鴨せり鍋名宿</p>
            </Link>
            <Link 
              href="/winter-fukushima-iwaki-yumoto-onsen-ankou-jobanmono-fukushimagyu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-sky-700 font-bold block text-[10px]">福島・いわき湯本</span>
              <p className="font-bold text-stone-800 line-clamp-2">冬の味覚常磐もの寒アンコウ濃厚どぶ汁鍋＆目光唐揚げ・日本三古湯名宿</p>
            </Link>
            <Link 
              href="/winter-wakayama-kawayu-yunomine-onsen-senninburo-kumanogyu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-sky-700 font-bold block text-[10px]">和歌山・熊野本宮</span>
              <p className="font-bold text-stone-800 line-clamp-2">冬の風物詩・大塔川仙人風呂オープンと世界遺産つぼ湯・熊野牛会席名宿</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
