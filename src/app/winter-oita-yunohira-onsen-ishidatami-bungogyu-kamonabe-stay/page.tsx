import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Snowflake, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Mountain, Map, Heart, ShoppingBag, Shield
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月由布奥座敷】300個の赤提灯揺れる江戸石畳と名湯五大共同浴場・極上豊後牛＆冬の滋味合鴨鍋を味わう名宿5選",
  description: "11月中旬から12月の初冬、名峰・由布岳の裾野が静かな冬枯れの装いを見せる頃、由布院温泉から車でわずか15分ほど山あいに分け入った渓谷に、別世界のような湯治場情緒が広がります。大分県由布市湯布院町に位置する「湯平温泉（ゆのひらおんせん）」。鎌倉時代開湯、800年を超える歴史を誇り、江戸時代享保年間に敷き詰められた約300メートルに及ぶ美しい石畳の坂道が、花合野川（かごのがわ）のせせらぎとともに旅人を迎えます。初冬の黄昏時、坂道に沿って約300個の赤提灯が一斉に灯ると、石畳に柔らかな朱色の光が揺らめき、息をのむほどノスタルジックな幽玄の世界へ（映画『男はつらいよ』第30作の舞台としても有名）。古くから「胃腸病に名高い胃腸の湯」として親しまれ、温泉街に点在する5つの共同浴場（金の湯、銀の湯、中の湯、砂湯、橋本温泉）の外湯めぐりは湯平ならではの醍醐味です。夕食には、きめ細やかなサシが入った極上黒毛和牛「豊後牛（おおいた和牛）」のすき焼きや陶板焼き、冬の滋味あふれる「合鴨鍋（かもなべ）」が身体を芯から温めます。由布院の喧騒を離れ、静寂と歴史の温もりに浸る大人の冬籠り名宿5選を徹底ガイドします。",
  keywords: '湯平温泉 宿泊, 由布院 奥座敷 温泉, 湯平温泉 赤提灯 石畳, 豊後牛 すき焼き 宿, 合鴨鍋 湯平, 旅館 山城屋, 湯平 五大共同浴場, 11月 12月 大分温泉旅行',
  alternates: {
    canonical: 'https://croud-travel.com/winter-oita-yunohira-onsen-ishidatami-bungogyu-kamonabe-stay'
  },
  openGraph: {
    title: "【11・12月由布奥座敷】300個の赤提灯揺れる江戸石畳と名湯五大共同浴場・極上豊後牛＆冬の滋味合鴨鍋を味わう名宿5選",
    description: "11月中旬から12月の初冬、名峰・由布岳の裾野が静かな冬枯れの装いを見せる頃、由布院温泉から車でわずか15分ほど山あいに分け入った渓谷に、別世界のような湯治場情緒が広がります。大分県由布市湯布院町に位置する「湯平温泉（ゆのひらおんせん）」。鎌倉時代開湯、800年を超える歴史を誇り、江戸時代享保年間に敷き詰められた約300メートルに及ぶ美しい石畳の坂道が、花合野川（かごのがわ）のせせらぎとともに旅人を迎えます。初冬の黄昏時、坂道に沿って約300個の赤提灯が一斉に灯ると、石畳に柔らかな朱色の光が揺らめき、息をのむほどノスタルジックな幽玄の世界へ（映画『男はつらいよ』第30作の舞台としても有名）。古くから「胃腸病に名高い胃腸の湯」として親しまれ、温泉街に点在する5つの共同浴場（金の湯、銀の湯、中の湯、砂湯、橋本温泉）の外湯めぐりは湯平ならではの醍醐味です。夕食には、きめ細やかなサシが入った極上黒毛和牛「豊後牛（おおいた和牛）」のすき焼きや陶板焼き、冬の滋味あふれる「合鴨鍋（かもなべ）」が身体を芯から温めます。由布院の喧騒を離れ、静寂と歴史の温もりに浸る大人の冬籠り名宿5選を徹底ガイドします。",
    url: 'https://croud-travel.com/winter-oita-yunohira-onsen-ishidatami-bungogyu-kamonabe-stay',
    siteName: 'クラドトラベル',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '湯平温泉の初冬に赤提灯が灯る情緒ある石畳の坂道'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月由布奥座敷】300個の赤提灯揺れる江戸石畳と名湯五大共同浴場・極上豊後牛＆冬の滋味合鴨鍋を味わう名宿5選",
    description: "11月中旬から12月の初冬、名峰・由布岳の裾野が静かな冬枯れの装いを見せる頃、由布院温泉から車でわずか15分ほど山あいに分け入った渓谷に、別世界のような湯治場情緒が広がります。大分県由布市湯布院町に位置する「湯平温泉（ゆのひらおんせん）」。鎌倉時代開湯、800年を超える歴史を誇り、江戸時代享保年間に敷き詰められた約300メートルに及ぶ美しい石畳の坂道が、花合野川（かごのがわ）のせせらぎとともに旅人を迎えます。初冬の黄昏時、坂道に沿って約300個の赤提灯が一斉に灯ると、石畳に柔らかな朱色の光が揺らめき、息をのむほどノスタルジックな幽玄の世界へ（映画『男はつらいよ』第30作の舞台としても有名）。古くから「胃腸病に名高い胃腸の湯」として親しまれ、温泉街に点在する5つの共同浴場（金の湯、銀の湯、中の湯、砂湯、橋本温泉）の外湯めぐりは湯平ならではの醍醐味です。夕食には、きめ細やかなサシが入った極上黒毛和牛「豊後牛（おおいた和牛）」のすき焼きや陶板焼き、冬の滋味あふれる「合鴨鍋（かもなべ）」が身体を芯から温めます。由布院の喧騒を離れ、静寂と歴史の温もりに浸る大人の冬籠り名宿5選を徹底ガイドします。",
    images: ['https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&h=630&q=80']
  }
};

export default function OitaYunohiraYufuWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-oita-yunohira-onsen-ishidatami-bungogyu-kamonabe-stay#article",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://croud-travel.com/#website",
          "name": "クラドトラベル",
          "url": "https://croud-travel.com/"
        },
        "headline": "【11・12月由布奥座敷】300個の赤提灯揺れる江戸石畳と名湯五大共同浴場・極上豊後牛＆冬の滋味合鴨鍋を味わう名宿5選",
        "description": "11月中旬から12月の初冬、名峰・由布岳の裾野が静かな冬枯れの装いを見せる頃、由布院温泉から車でわずか15分ほど山あいに分け入った渓谷に、別世界のような湯治場情緒が広がります。大分県由布市湯布院町に位置する「湯平温泉（ゆのひらおんせん）」。鎌倉時代開湯、800年を超える歴史を誇り、江戸時代享保年間に敷き詰められた約300メートルに及ぶ美しい石畳の坂道が、花合野川（かごのがわ）のせせらぎとともに旅人を迎えます。初冬の黄昏時、坂道に沿って約300個の赤提灯が一斉に灯ると、石畳に柔らかな朱色の光が揺らめき、息をのむほどノスタルジックな幽玄の世界へ（映画『男はつらいよ』第30作の舞台としても有名）。古くから「胃腸病に名高い胃腸の湯」として親しまれ、温泉街に点在する5つの共同浴場（金の湯、銀の湯、中の湯、砂湯、橋本温泉）の外湯めぐりは湯平ならではの醍醐味です。夕食には、きめ細やかなサシが入った極上黒毛和牛「豊後牛（おおいた和牛）」のすき焼きや陶板焼き、冬の滋味あふれる「合鴨鍋（かもなべ）」が身体を芯から温めます。由布院の喧騒を離れ、静寂と歴史の温もりに浸る大人の冬籠り名宿5選を徹底ガイドします。",
        "datePublished": "2026-09-30T00:00:00+09:00",
        "dateModified": "2026-09-30T00:00:00+09:00",
        "inLanguage": "ja",
        "mainEntityOfPage": "https://croud-travel.com/winter-oita-yunohira-onsen-ishidatami-bungogyu-kamonabe-stay",
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
              "name": "湯平温泉　旅館　山城屋",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/129937/129937.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129937%2F129937.html",
              "priceRange": "¥20,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "大分県",
                "addressLocality": "由布市湯布院町湯平",
                "streetAddress": "由布市湯布院町湯平309-1",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.67",
                "reviewCount": 42
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Hotel",
              "name": "ゆふいん　湯平温泉　山荘松屋",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/70905/70905.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70905%2F70905.html",
              "priceRange": "¥11,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "大分県",
                "addressLocality": "由布市湯布院町湯平",
                "streetAddress": "由布市湯布院町湯平803-1",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.64",
                "reviewCount": 207
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Hotel",
              "name": "湯平温泉　右丸旅館",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/139405/139405.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139405%2F139405.html",
              "priceRange": "¥16,500〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "大分県",
                "addressLocality": "由布市湯布院町湯平",
                "streetAddress": "由布市湯布院町湯平331",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.52",
                "reviewCount": 173
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Hotel",
              "name": "湯平温泉　ゆけむりの宿　花木綿",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/141260/141260.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F141260%2F141260.html",
              "priceRange": "¥17,800〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "大分県",
                "addressLocality": "由布市湯布院町湯平",
                "streetAddress": "由布市湯布院町湯平1022",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.81",
                "reviewCount": 101
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Hotel",
              "name": "湯平温泉　癒しの宿　鷹勝",
              "image": "https://img.travel.rakuten.co.jp/share/HOTEL/144993/144993.jpg",
              "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144993%2F144993.html",
              "priceRange": "¥25,000〜",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "大分県",
                "addressLocality": "由布市湯布院町湯平",
                "streetAddress": "由布市湯布院町湯平791",
                "addressCountry": "JP"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.85",
                "reviewCount": 675
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
            "name": "湯平温泉の「石畳の坂道」と「赤提灯」の点灯時間や歴史は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "湯平温泉の石畳は、江戸時代中期の享保年間（約300年前）、度重なる花合野川の洪水から温泉街を守るため、僧侶・工藤三助の指導のもと地元住民が河原の自然石を約300メートルにわたって敷き詰めて築いた歴史的な坂道です。映画『男はつらいよ』第30作「花も嵐も寅次郎」の主要ロケ地としても全国に知られます。赤提灯は通年設置されており、毎日夕暮れの17時頃から深夜にかけて約300個の提灯に柔らかな火が灯ります。初冬の冷気と湯煙が立ち上る中、朱色に染まる石畳の風情は息をのむほど幻想的です。"
            }
          },
          {
            "@type": "Question",
            "name": "湯平温泉に点在する「五大共同浴場」の入浴方法と泉質の特徴は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "湯平温泉街には、花合野川沿いに「金の湯」「銀の湯」「中の湯」「砂湯」「橋本温泉」という5つの歴史ある共同浴場（外湯）が点在しています。利用料金は各施設200円〜300円程度で、無人の場合は料金箱に投入します。泉質はナトリウム-塩化物・炭酸水素塩泉（弱アルカリ性低張性高温泉）。古くから「胃腸病に効く名湯」として全国に名を馳せ、飲むこともできる良質な源泉です。弱アルカリ性の石鹸効果と塩化物泉の温まり効果を兼ね備え、湯上がりは肌がつるつるになり芯から温まります。"
            }
          },
          {
            "@type": "Question",
            "name": "大分県が誇るブランド牛「豊後牛（おおいた和牛）」の特徴とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「豊後牛（ぶんごぎゅう）」は、大分県の豊かな自然と澄んだ空気、名水の中で丹精込めて育てられた黒毛和牛です。肉質等級4等級以上の最高ランクのものは「おおいた和牛」ブランドとして全国の品評会で最高賞を受賞しています。美しい霜降りと、オレイン酸を豊富に含む良質な脂は融点が低く、口に運んだ瞬間に舌の上でとろけるような柔らかさと芳醇なコクが広がります。すき焼きや陶板焼きで地元の新鮮野菜とともに味わうのが絶品です。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の湯平・由布院エリアの気候と道路状況、冬用タイヤは必要？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "湯平温泉は標高約350〜400mの山間渓谷に位置するため、平野部よりも気温が3〜5℃低くなります。11月下旬以降は朝晩の冷え込みが厳しくなり、最低気温が0℃近くまで下がる日が増えます。12月中旬以降は、強い冬型の気圧配置になると雪が降ったり、水分を含んだ石畳の坂道や周辺の峠道（やまなみハイウェイや水分峠付近）が凍結することがあります。12月に車やレンタカーで訪れる際は、念のためスタッドレスタイヤ装着車を選ぶかタイヤチェーンを携行することをおすすめします。"
            }
          },
          {
            "@type": "Question",
            "name": "博多や大分空港から湯平温泉へのアクセス方法と所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "電車の場合は、博多駅からJR特急「ゆふいんの森」または「ゆふ」でJR久大本線「由布院駅」まで約2時間15分、由布院駅から普通列車で2駅約15分の「湯平駅」へ。湯平駅からは宿の無料送迎車またはタクシーで約10分です。大分空港からの場合は、空港特急バスで由布院駅前バスセンターまで約55分。車の場合は、大分自動車道「湯布院IC」から国道210号線を経由して約25分です。由布院観光とセットで訪れる旅行者が非常に多い人気のロケーションです。"
            }
          }
        ]
      }
    ]
  };

  const faqListItems = [
  {
    "q": "湯平温泉の「石畳の坂道」と「赤提灯」の点灯時間や歴史は？",
    "a": "湯平温泉の石畳は、江戸時代中期の享保年間（約300年前）、度重なる花合野川の洪水から温泉街を守るため、僧侶・工藤三助の指導のもと地元住民が河原の自然石を約300メートルにわたって敷き詰めて築いた歴史的な坂道です。映画『男はつらいよ』第30作「花も嵐も寅次郎」の主要ロケ地としても全国に知られます。赤提灯は通年設置されており、毎日夕暮れの17時頃から深夜にかけて約300個の提灯に柔らかな火が灯ります。初冬の冷気と湯煙が立ち上る中、朱色に染まる石畳の風情は息をのむほど幻想的です。"
  },
  {
    "q": "湯平温泉に点在する「五大共同浴場」の入浴方法と泉質の特徴は？",
    "a": "湯平温泉街には、花合野川沿いに「金の湯」「銀の湯」「中の湯」「砂湯」「橋本温泉」という5つの歴史ある共同浴場（外湯）が点在しています。利用料金は各施設200円〜300円程度で、無人の場合は料金箱に投入します。泉質はナトリウム-塩化物・炭酸水素塩泉（弱アルカリ性低張性高温泉）。古くから「胃腸病に効く名湯」として全国に名を馳せ、飲むこともできる良質な源泉です。弱アルカリ性の石鹸効果と塩化物泉の温まり効果を兼ね備え、湯上がりは肌がつるつるになり芯から温まります。"
  },
  {
    "q": "大分県が誇るブランド牛「豊後牛（おおいた和牛）」の特徴とは？",
    "a": "「豊後牛（ぶんごぎゅう）」は、大分県の豊かな自然と澄んだ空気、名水の中で丹精込めて育てられた黒毛和牛です。肉質等級4等級以上の最高ランクのものは「おおいた和牛」ブランドとして全国の品評会で最高賞を受賞しています。美しい霜降りと、オレイン酸を豊富に含む良質な脂は融点が低く、口に運んだ瞬間に舌の上でとろけるような柔らかさと芳醇なコクが広がります。すき焼きや陶板焼きで地元の新鮮野菜とともに味わうのが絶品です。"
  },
  {
    "q": "11月・12月の湯平・由布院エリアの気候と道路状況、冬用タイヤは必要？",
    "a": "湯平温泉は標高約350〜400mの山間渓谷に位置するため、平野部よりも気温が3〜5℃低くなります。11月下旬以降は朝晩の冷え込みが厳しくなり、最低気温が0℃近くまで下がる日が増えます。12月中旬以降は、強い冬型の気圧配置になると雪が降ったり、水分を含んだ石畳の坂道や周辺の峠道（やまなみハイウェイや水分峠付近）が凍結することがあります。12月に車やレンタカーで訪れる際は、念のためスタッドレスタイヤ装着車を選ぶかタイヤチェーンを携行することをおすすめします。"
  },
  {
    "q": "博多や大分空港から湯平温泉へのアクセス方法と所要時間は？",
    "a": "電車の場合は、博多駅からJR特急「ゆふいんの森」または「ゆふ」でJR久大本線「由布院駅」まで約2時間15分、由布院駅から普通列車で2駅約15分の「湯平駅」へ。湯平駅からは宿の無料送迎車またはタクシーで約10分です。大分空港からの場合は、空港特急バスで由布院駅前バスセンターまで約55分。車の場合は、大分自動車道「湯布院IC」から国道210号線を経由して約25分です。由布院観光とセットで訪れる旅行者が非常に多い人気のロケーションです。"
  }
];

  const hotelCards = [
            {
              id: 1,
              name: "湯平温泉　旅館　山城屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/129937/129937.jpg",
              rating: 4.67,
              reviews: 42,
              price: "¥20,000〜",
              access: "湯平駅よりお車にて7分 ※事前にご連絡を頂けましたら駅まで送迎いたします。",
              special: "世界最大の旅行口コミサイトTripAdvisor旅館部門2026 日本全国第１位",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129937%2F129937.html",
              story: "湯平温泉の石畳坂の中腹に佇み、海外のトラベラーや全国の温泉愛好家から絶賛される老舗宿「湯平温泉 旅館 山城屋」。宿最大の名物は、館内に趣の異なる4つの源泉かけ流し貸切風呂（露天風呂・内湯）を備え、空いていればいつでも何度でも無料でプライベート湯浴みが楽しめる点です。弱アルカリ性の柔らかい温泉は、初冬の乾燥した肌をしっとりと包み込みます。夕食には、最高級ランクの「豊後牛（おおいた和牛）」陶板ステーキをメインに、花合野川の清流で育った川魚の塩焼き、契約農家の採れたて冬野菜を使った心温まる手作り創作会席が並びます。温かな家族のもてなしと、赤提灯の灯る石畳の眺めが旅情を深めます。",
              roomTip: "石畳の坂道や花合野川の渓谷を望む和室。夕暮れ時に窓の外に灯る赤提灯の幻想的な灯りを眺めながら、静かなひとときを過ごせます。",
              gourmetTip: "「極上豊後牛陶板ステーキ＆旬菜創作会席」。ジューシーで甘みのある豊後牛の肉汁と、地元野菜の素朴な旨味が調和する絶品。",
              highlights: [
                "趣の異なる4つの貸切風呂が何度でも無料＆赤提灯揺れる石畳坂の絶景と豊後牛ステーキ",
                "海外ゲストにも高評価の温かな家族のもてなし＆花合野川の清流魚や冬の契約農家野菜",
                "五大共同浴場めぐりの拠点に便利な立地＆映画男はつらいよの舞台となったレトロ情緒"
              ]
            },
            {
              id: 2,
              name: "ゆふいん　湯平温泉　山荘松屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70905/70905.jpg",
              rating: 4.64,
              reviews: 207,
              price: "¥11,000〜",
              access: "ＪＲ湯平駅より車で10分　 湯平駅より無料送迎あり（要予約）",
              special: "■温泉は全て無料貸切OK■全室禁煙・湯布院の奥座敷・湯平温泉に佇む全9室の湯宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70905%2F70905.html",
              story: "石畳通りの最上部に位置し、どこか懐かしい民芸調の温かさと広々とした展望が魅力の隠れ宿「ゆふいん 湯平温泉 山荘松屋」。自家源泉から引き込む塩化物・炭酸水素塩泉は、肌の角質をなめらかに整えるとともに、湯冷めしにくい優れた保温効果を持ちます。風情ある露天風呂や広々とした岩風呂で初冬の澄んだ山風を感じながらの入浴は格別。夕食は、大分の豊かな大自然が育んだ豊後牛のしゃぶしゃぶやすき焼きに加え、冬に脂が乗る合鴨を使った特製鍋、地元産椎茸や根菜の煮物など、滋味豊かな田舎料理がお腹と心を満たします。",
              roomTip: "湯平の山並みを見晴らす落ち着いた和室。冬の澄み渡る星空と、夜の静寂に響く川のせせらぎが極上の眠りを誘います。",
              gourmetTip: "「豊後牛と冬の味覚会席」。口の中でとろける豊後牛と、地元特産の柚子胡椒を添えた旬の小鍋仕立て。",
              highlights: [
                "石畳通りの最上部に佇む民芸調の温もり宿＆豊後牛すき焼きと冬の滋味合鴨鍋会席",
                "山並みを見晴らす展望露天風呂＆塩化物炭酸水素塩泉の優れた保温効果で湯冷め知らず",
                "アットホームで気兼ねのない湯治ステイ＆一人旅や家族連れにも安心の温もり"
              ]
            },
            {
              id: 3,
              name: "湯平温泉　右丸旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/139405/139405.jpg",
              rating: 4.52,
              reviews: 173,
              price: "¥16,500〜",
              access: "　",
              special: "湯平温泉の情緒ある石畳の坂道に立つ明治創業の老舗旅館。お食事は部屋食（離れは専用個室食事処）",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139405%2F139405.html",
              story: "花合野川の清流に面して建ち、川のせせらぎが心地よく館内に響く純和風宿「湯平温泉 右丸旅館」。男女別の大浴場に加え、初冬の星空を仰ぐ貸切露天風呂を完備。湯平の伝統的な泉質はメタケイ酸を豊富に含み、入浴後は肌がつるつるになると女性客にも好評です。夕食には、大分県が誇るブランド牛「豊後牛」の陶板焼きをはじめ、冬の味覚である新鮮な合鴨鍋、女将特製の茶碗蒸しや川魚料理が美しく並びます。石畳通りへも徒歩すぐで、夕食後の提灯散策や共同浴場めぐりにも抜群のロケーションです。",
              roomTip: "清流花合野川に面したリバービュー和室。初冬の清涼な川風とせせらぎの音に癒やされる贅沢なプライベート空間です。",
              gourmetTip: "「豊後牛陶板焼きと手作り合鴨鍋会席」。鴨の濃厚な旨味が溶け出した特製出汁と、地元白葱の甘みがたまらない冬の定番鍋。",
              highlights: [
                "花合野川のせせらぎに癒やされるリバービュー＆メタケイ酸豊富な美肌湯と手作り郷土料理",
                "星空を仰ぐ貸切露天風呂＆石畳通り徒歩すぐで夜の提灯散策や共同浴場めぐりに最適",
                "女将特製の心温まる手作り料理＆ノスタルジックな石畳の坂道散歩を満喫"
              ]
            },
            {
              id: 4,
              name: "湯平温泉　ゆけむりの宿　花木綿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/141260/141260.jpg",
              rating: 4.81,
              reviews: 101,
              price: "¥17,800〜",
              access: "湯平駅よりお車にて５分",
              special: "清流花合野川沿いに佇む全８室の温泉宿。天然湯平温泉と女将手作りの花御膳をご堪能下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F141260%2F141260.html",
              story: "石畳通りから一本入った静閑な高台に佇み、全室離れ風の造りで高いプライベート感を誇る大人の隠れ宿「湯平温泉 ゆけむりの宿 花木綿」。すべての客室に専用の温泉風呂または露天風呂が備わっており、誰にも気兼ねすることなく24時間いつでも好きな時に源泉かけ流しの名湯を満喫できます。食事は個室の食事処でいただく贅沢な豊後会席。霜降りおおいた和牛のステーキ、豊後水道直送の旬魚のお造り、手打ち蕎麦など、洗練された料理の数々が特別な冬の夜を演出します。カップルや記念日旅行に最もおすすめの名宿です。",
              roomTip: "客室専用温泉風呂付きの和モダン離れ客室。窓の外に広がる湯平の湯煙と山里の風景を眺めながら、極上のプライベートステイ。",
              gourmetTip: "「おおいた和牛サーロインステーキ＆季節の創作懐石」。絶妙な火入れで焼き上げる和牛ステーキと、彩り豊かな前菜の数々。",
              highlights: [
                "全室客室専用温泉風呂付きの贅沢な離れ仕様＆個室食事処で味わう最高級おおいた和牛",
                "24時間いつでも好きな時に楽しめる源泉かけ流し＆記念日やカップル旅行に最高の空間",
                "由布院の喧騒を離れた静寂のステイ＆細部まで行き届いた上質なサービス"
              ]
            },
            {
              id: 5,
              name: "湯平温泉　癒しの宿　鷹勝",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/144993/144993.jpg",
              rating: 4.85,
              reviews: 675,
              price: "¥25,000〜",
              access: "湯布院ICよりお車で30分＜ＪＲ湯平駅への送迎サービス有り。※5日前までのご予約を＞",
              special: "2022アワード受賞。福岡市内・銀座に生け簀料理店と会員制寿司店を構える鷹勝の「和風旅館」。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F144993%2F144993.html",
              story: "九州屈指の海鮮の名門「鷹勝」が手掛ける、食通のための極上温泉リゾート「湯平温泉 癒しの宿 鷹勝」。湯平の豊かな自然林に囲まれた広大な敷地に、贅を尽くした客室と源泉かけ流しの温泉棟が佇みます。宿の最大の魅力は何と言っても圧倒的な料理のクオリティ。冬の豊後水道で獲れた天然クエ、関アジ・関サバ、とらふぐなどの超一級鮮魚と、最高ランクのおおいた和牛が贅沢に競演します。上質な温泉と日本最高峰の割烹料理を同時に味わう、極上のラグジュアリーステイを叶えてくれます。",
              roomTip: "贅沢な設えの温泉半露天風呂付き特別和洋室。床暖房や上質なベッドを備え、冬でも極上の快適性を約束します。",
              gourmetTip: "「豊後水道天然鮮魚と最高級おおいた和牛極み会席」。冬の脂が乗った天然魚のお造りと、とろける和牛の贅沢な組み合わせ。",
              highlights: [
                "豊後水道の超一級天然鮮魚と最高級和牛の割烹料理＆ラグジュアリーな大人の温泉隠れ家",
                "天然クエやとらふぐなど冬の最高峰海鮮＆贅を尽くした設えと極上のプライベート感",
                "料理人魂が光る割烹クオリティ＆心身を極限まで解きほぐす特別なリトリート"
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
      <header className="bg-gradient-to-r from-stone-950 via-amber-950 to-orange-950 text-white py-12 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold tracking-wide border border-amber-400/30">
            <Sparkles className="w-3.5 h-3.5" />
            11月・12月由布奥座敷初冬特集・赤提灯石畳と豊後牛＆合鴨鍋
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            {metadata.title as string}
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
            黄昏時に約300個の赤提灯が灯る江戸情緒の石畳坂道と、鎌倉時代開湯の胃腸の名湯。
            最高級おおいた和牛のすき焼きと、冬の滋味あふれる合鴨鍋に心温まる由布院奥座敷の休日へ。
          </p>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-4">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide">
            <Flame className="w-4 h-4 text-amber-700" />
            寅さんも歩いた石畳の坂道と鎌倉時代から続く胃腸の名湯
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            11月中旬から12月にかけて、由布岳の雄大な山容が初冬の澄んだ青空に凛とそびえる季節。賑わう由布院の中心街から車でわずか15分ほど、山深い渓谷へと分け入った場所に佇むのが「湯平温泉（ゆのひらおんせん）」です。その歴史は古く、鎌倉時代に遡る800余年の歴史を誇る古湯。江戸時代中期の享保年間に敷設されたという約300メートルに及ぶ美しい石畳の坂道が、清流・花合野川（かごのがわ）に寄り添うように続いています。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            漂泊の俳人・種田山頭火もこの湯平の湯と石畳をこよなく愛し、「しぐるるや人のなさけに涙ぐむ」という名句を残しました。初冬の冷気の中、下駄をカランコロンと鳴らしながら坂道を登れば、路地から立ち上る白い湯煙と清流のせせらぎが重なり合い、旅人の心を優しく包み込みます。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            初冬の夕暮れ、冷え込んできた山あいに約300個の赤提灯が一斉に灯る光景は、息をのむほどノスタルジック。映画『男はつらいよ』第30作の舞台にもなったこの石畳通りは、まるでタイムスリップしたかのような静謐な湯治場情緒に満ちています。泉質はナトリウム-塩化物・炭酸水素塩泉で、古来「胃腸病に効く名湯」として知られ、湯平に点在する5つの共同浴場（金の湯、銀の湯、中の湯、砂湯、橋本温泉）の外湯めぐりも旅情をそそります。
          </p>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
            冷えた体を温める夕食には、大分県が誇る最高峰の黒毛和牛「豊後牛（おおいた和牛）」のすき焼きや陶板ステーキ、そして冬の定番である滋味深い「合鴨鍋（かもなべ）」が登場。女将の手作り柚子胡椒や採れたて地野菜とともに、都会の喧騒を忘れて心身をリセットできる厳選5宿をご紹介します。
          </p>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <Landmark className="w-4 h-4 text-amber-800" />
              厳選5名宿のご案内
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              赤提灯の情緒と豊後牛＆合鴨鍋を堪能する由布院奥座敷の名宿
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
                      <div className="flex items-center gap-2 text-xs font-semibold text-amber-700 mb-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>大分県由布市湯布院町湯平</span>
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
                          <Eye className="w-3.5 h-3.5 text-amber-700" />
                          客室の過ごし方
                        </div>
                        <p className="text-[11px] sm:text-xs text-stone-600">{hotel.roomTip}</p>
                        
                        <div className="font-bold text-stone-900 text-xs flex items-center gap-1.5 pt-1 border-t border-stone-200/50">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" />
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
                        <div key={idx} className="flex items-start gap-1.5 bg-amber-50/50 p-2.5 rounded-xl border border-amber-100/50 text-[11px] text-amber-950 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
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
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-800 to-orange-900 hover:from-amber-900 hover:to-orange-950 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-xs hover:shadow-md transition duration-200"
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
            <div className="inline-flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <Calendar className="w-4 h-4 text-amber-800" />
              11月・12月おすすめ1泊2日モデルコース
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              由布院観光と湯平石畳赤提灯・豊後牛合鴨鍋を満喫する冬の休日
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-amber-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-amber-700" />
                【1日目】由布院散策と湯平石畳の赤提灯ナイトウォーク
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>11:30 由布院駅を出発：</strong>湯の坪街道を散策し、金鱗湖の初冬の朝霧や湖畔のカフェで優雅なランチ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>14:30 湯平温泉へ移動（車で15分）：</strong>花合野川沿いの静寂な渓谷を抜け、江戸情緒の湯平温泉へ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>15:30 宿へチェックイン＆共同浴場めぐり：</strong>「金の湯」や「中の湯」をめぐり、胃腸の名湯で体を芯から温める。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>17:30 夕暮れの石畳赤提灯散策：</strong>約300個の赤提灯が一斉に灯る幻想的な石畳坂を浴衣と下駄で歩く贅沢。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>19:00 極上豊後牛＆冬の合鴨鍋ディナー：</strong>熱々の合鴨鍋と霜降り和牛ステーキに舌鼓を打ち、地酒「八鹿」で乾杯。</span>
                </li>
              </ul>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-100 space-y-4">
              <h3 className="font-bold text-amber-900 flex items-center gap-2 text-sm sm:text-base">
                <Calendar className="w-4 h-4 text-amber-700" />
                【2日目】初冬の朝霧と湯平の手作りみやげ散歩
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>08:00 朝の貸切露天風呂と田舎朝食：</strong>地元野菜たっぷりの味噌汁と炊きたて大分米、源泉仕込みの温泉たまご。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>09:30 朝の石畳通りでお買い物：</strong>特製ゆず練りや手作り柚子胡椒、素朴な竹細工など名物を散策しながら購入。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>11:30 狭霧台展望所へドライブ：</strong>初冬の由布院盆地と雄大な由布岳パノラマを一望。</span>
                </li>
                <li className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-1" />
                  <span><strong>13:00 別府・大分方面へ移動＆帰路：</strong>とり天ランチや別府湾の冬絶景を楽しみながら帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Local Souvenir & Spot Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4 text-amber-800" />
              初冬の湯平・由布院・おみやげ手帖
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              石畳通りで手に入れたい初冬の郷土銘品と立ち寄りスポット
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-700" />
                湯平名物「ゆず練り」と生青唐辛子柚子胡椒
              </h3>
              <p>
                湯平温泉の伝統銘菓「ゆず練り」は、地元で採れる完熟柚子の皮と果汁を砂糖・水飴でじっくり練り上げた素朴で爽やかなお菓子。お茶請けとしてはもちろん、ヨーグルトやトーストにもよく合います。また、各旅館の女将や農家が手作りする無添加の「柚子胡椒」は、鮮烈な香りとピリッとした辛味が冬の鍋料理や肉料理の味を格段に引き立てます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-amber-700" />
                花合野川の天然クレソンと大分のかぼすリキュール
              </h3>
              <p>
                花合野川の清らかな伏流水で自生・栽培される「天然クレソン」は、初冬に最も柔らかく爽やかな苦みが楽しめ、合鴨鍋やお肉料理の付け合わせとして重宝されます。また、大分特産のかぼす果汁を贅沢に使った「かぼすリキュール」は、すっきりとした酸味と甘みで女性にも大人気のお土産です。
              </p>
            </div>
          </div>
        </section>

        {/* Deep Dive Knowledge Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <ThermometerSun className="w-4 h-4 text-amber-800" />
              初冬の湯平温泉・泉質と歴史の徹底解説
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              なぜ湯平の湯は「胃腸の湯」として800年間愛され続けるのか
            </h2>
          </div>

          <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
              <Waves className="w-4 h-4 text-amber-700" />
              ナトリウム-塩化物・炭酸水素塩泉がもたらす消化器系への効能
            </h3>
            <p>
              湯平温泉の泉質は、ナトリウム-塩化物・炭酸水素塩泉（低張性弱アルカリ性高温泉）。源泉温度は60℃〜75℃と高温で、温泉街を流れる花合野川の河床や岩盤から湧出しています。炭酸水素塩成分（重曹成分）は胃酸を中和し胃腸の粘膜を保護・修復する働きがあり、飲泉所でも飲むことが推奨されてきました。さらに塩化物成分が皮膚をコーティングして体温を逃がさないため、冬の寒冷地でも湯冷めしにくく、冷えからくる胃腸の不調や神経痛の改善に極めて高い効能を示します。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Landmark className="w-4 h-4 text-amber-700" />
              洪水に耐え抜いた300年の石畳と五大共同浴場の外湯文化
            </h3>
            <p>
              江戸時代、山津波や暴風雨でたびたび土砂崩れに見舞われた湯平温泉を救ったのが、享保年間に僧侶・三助が発起した石畳工事でした。青石や川石を噛み合わせるように敷き詰めた強固な石畳は、水害を防ぐインフラであると同時に、湯治客が下駄を鳴らして5つの共同浴場（金の湯、銀の湯、中の湯、砂湯、橋本温泉）を行き交う社交の場として機能しました。この共助の外湯文化と石畳がそのまま現代に残されているからこそ、湯平は日本で最も心温まる湯治場景観を保ち続けています。
            </p>

            <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2 pt-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              極上豊後牛と滋味合鴨鍋が織りなす冬の薬膳的温もり
            </h3>
            <p>
              大分の豊かな山林と良質な牧草地で育まれた「豊後牛（おおいた和牛）」は、オレイン酸を豊富に含み、脂の融点が低いため口溶けが非常に滑らかです。さらに初冬に旬を迎える合鴨は、良質な不飽和脂肪酸と鉄分・ビタミンB群を豊富に含み、冷えた体を内側から温めて疲労を回復させる効果があります。湯平の旅館で提供される合鴨鍋は、花合野川の清流で栽培された爽やかな辛味の生クレソンや地元産白葱を合わせ、特製出汁で煮込むことで、脂のコクと野菜の甘みが完璧に調和した冬の極上養生食となります。
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-stone-200 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <div className="inline-flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide bg-amber-100/60 px-3 py-1 rounded-full">
              <HelpCircle className="w-4 h-4 text-amber-800" />
              よくある質問
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 mt-2">
              初冬の湯平温泉・由布院奥座敷旅行 Q&A
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
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm tracking-wide">
            <Sparkles className="w-4 h-4 text-amber-800" />
            あわせて読みたい初冬の全国名湯・美食特集
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
            <Link 
              href="/winter-oita-yufuin-onsen-kinrinko-asamiri-bungo-beef-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">大分・由布院温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">金鱗湖の幻想的な冬朝霧と極上豊後牛・由布岳を望む露天名宿</p>
            </Link>
            <Link 
              href="/winter-oita-hita-amagase-onsen-mamedamachi-bungogyu-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">大分・日田＆天ヶ瀬</span>
              <p className="font-bold text-stone-800 line-clamp-2">豆田町の初冬蔵屋敷散策と玖珠川清流露天風呂・豊後牛名宿</p>
            </Link>
            <Link 
              href="/winter-kumamoto-kurokawa-onsen-yuakari-stay" 
              className="bg-white p-4 rounded-xl shadow-2xs hover:shadow-xs transition border border-stone-200/60 block space-y-1"
            >
              <span className="text-amber-700 font-bold block text-[10px]">熊本・黒川温泉</span>
              <p className="font-bold text-stone-800 line-clamp-2">冬の風物詩「湯あかり」竹灯籠と渓流雪見露天風呂・肥後牛の贅沢</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
