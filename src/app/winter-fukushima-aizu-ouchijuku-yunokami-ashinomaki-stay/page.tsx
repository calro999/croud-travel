import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月福島】白銀の茅葺き宿場町・大内宿の雪景色と名物「一本ねぎそば」＆阿賀川渓谷雪見露天風呂・会津馬刺し名宿5選",
  description: "11月下旬から1月、会津盆地に雪が降り積もると、江戸時代の面影を今に留める国の重要伝統的建造物群保存地区「大内宿（おおうちじゅく）」は、まるで日本昔話の世界に迷い込んだかのような白銀の絶景に包まれます。太い白ネギを箸代わりに手繰る名物「高遠そば（一本ねぎそば）」と、日本唯一の茅葺き屋根駅舎「湯野上温泉駅」の温かな囲炉裏。阿賀川（大川）の切り立った渓谷を見下ろす芦ノ牧温泉のダイナミックな棚田状雪見露天風呂、極上の赤身がとろける会津馬刺しと会津地鶏鍋、全国金賞連覇を誇る福島の銘酒。冬の会津の郷愁と名湯を堪能する名宿5選をお届けします。",
  keywords: '大内宿 冬 雪景色, 大内宿 一本ねぎそば, 湯野上温泉 茅葺き駅舎, 芦ノ牧温泉 雪見露天, 大川荘 芦ノ牧, 丸峰観光ホテル, 藤龍館 湯野上温泉, 会津馬刺し, 会津牛, 11月 12月 1月 福島旅行',
  alternates: {
    canonical: 'https://croud-travel.com/winter-fukushima-aizu-ouchijuku-yunokami-ashinomaki-stay'
  },
  openGraph: {
    title: "【11・12・1月福島】白銀の茅葺き宿場町・大内宿の雪景色と名物「一本ねぎそば」＆阿賀川渓谷雪見露天風呂・会津馬刺し名宿5選",
    description: "11月下旬から1月、会津盆地に雪が降り積もると、江戸時代の面影を今に留める国の重要伝統的建造物群保存地区「大内宿（おおうちじゅく）」は、まるで日本昔話の世界に迷い込んだかのような白銀の絶景に包まれます。太い白ネギを箸代わりに手繰る名物「高遠そば（一本ねぎそば）」と、日本唯一の茅葺き屋根駅舎「湯野上温泉駅」の温かな囲炉裏。阿賀川（大川）の切り立った渓谷を見下ろす芦ノ牧温泉のダイナミックな棚田状雪見露天風呂、極上の赤身がとろける会津馬刺しと会津地鶏鍋、全国金賞連覇を誇る福島の銘酒。冬の会津の郷愁と名湯を堪能する名宿5選をお届けします。",
    url: 'https://croud-travel.com/winter-fukushima-aizu-ouchijuku-yunokami-ashinomaki-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の福島・大内宿の白銀の茅葺き宿場町と芦ノ牧温泉'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月福島】白銀の茅葺き宿場町・大内宿の雪景色と名物「一本ねぎそば」＆阿賀川渓谷雪見露天風呂・会津馬刺し名宿5選",
    description: "11月下旬から1月、会津盆地に雪が降り積もると、江戸時代の面影を今に留める国の重要伝統的建造物群保存地区「大内宿（おおうちじゅく）」は、まるで日本昔話の世界に迷い込んだかのような白銀の絶景に包まれます。太い白ネギを箸代わりに手繰る名物「高遠そば（一本ねぎそば）」と、日本唯一の茅葺き屋根駅舎「湯野上温泉駅」の温かな囲炉裏。阿賀川（大川）の切り立った渓谷を見下ろす芦ノ牧温泉のダイナミックな棚田状雪見露天風呂、極上の赤身がとろける会津馬刺しと会津地鶏鍋、全国金賞連覇を誇る福島の銘酒。冬の会津の郷愁と名湯を堪能する名宿5選をお届けします。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function FukushimaAizuOuchijukuWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月福島】白銀の茅葺き宿場町・大内宿の雪景色と名物「一本ねぎそば」＆阿賀川渓谷雪見露天風呂・会津馬刺し名宿5選",
    description: "11月下旬から1月、会津盆地に雪が降り積もると、江戸時代の面影を今に留める国の重要伝統的建造物群保存地区「大内宿（おおうちじゅく）」は、まるで日本昔話の世界に迷い込んだかのような白銀の絶景に包まれます。太い白ネギを箸代わりに手繰る名物「高遠そば（一本ねぎそば）」と、日本唯一の茅葺き屋根駅舎「湯野上温泉駅」の温かな囲炉裏。阿賀川（大川）の切り立った渓谷を見下ろす芦ノ牧温泉のダイナミックな棚田状雪見露天風呂、極上の赤身がとろける会津馬刺しと会津地鶏鍋、全国金賞連覇を誇る福島の銘酒。冬の会津の郷愁と名湯を堪能する名宿5選をお届けします。",
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-10-02',
    dateModified: '2026-10-02',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      url: 'https://croud-travel.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.com/winter-fukushima-aizu-ouchijuku-yunokami-ashinomaki-stay'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.com/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '大内宿＆湯野上・芦ノ牧温泉 白銀宿場町と渓谷雪見露天名宿',
        item: 'https://croud-travel.com/winter-fukushima-aizu-ouchijuku-yunokami-ashinomaki-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "冬の「大内宿」の雪景色の見どころとベストシーズンは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "福島県南会津郡下郷町に位置する大内宿は、江戸時代に会津若松と日光を結ぶ会津西街道の宿場町として栄えた集落です。寄棟造りの茅葺き屋根民家が約30軒立ち並びます。11月下旬〜12月上旬に初雪を迎え、12月中旬〜1月には約1メートルの雪に覆われ、完全な白銀の世界となります。集落の最奥にある「見晴台（湯殿山神社の階段上）」から見下ろす宿場町全体の雪景色は息を呑む絶景です。例年2月第2土日には雪灯籠に火が灯る「大内宿雪まつり」も開催されます。"
        }
      },
      {
        '@type': 'Question',
        name: "大内宿名物「高遠そば（一本ねぎそば）」の食べ方と由来は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "大内宿の名物「高遠そば」は、箸を使わず、丸ごと1本の生の白ネギ（曲がりネギ）を使って蕎麦をすくい上げ、ネギをかじりながら薬味代わりに食べる独特の郷土そばです。会津藩主・保科正之公が信州高遠から伝えたとされ、大内宿の「三澤屋」が発祥です。ピリッとしたネギの辛みと大根おろしのつゆ、風味豊かな十割そばが絶妙に調和します。冬には囲炉裏でじっくり焼いた名物「岩魚の塩焼き」や、エゴマ味噌を塗って焼いた郷土菓子「しんごろう」も外せない逸品です。"
        }
      },
      {
        '@type': 'Question',
        name: "日本唯一の茅葺き屋根駅舎「湯野上温泉駅」の見どころは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "会津鉄道の「湯野上温泉駅（ゆのかみおんせんえき）」は、日本で唯一の茅葺き屋根を持つ木造駅舎として鉄道ファンや旅行者に親しまれています。駅舎内には本物の「囲炉裏（いろり）」が切られており、冬には実際に火が焚かれ、パチパチとはぜる炭の温もりと煙の香りが漂います。雪をかぶった茅葺き屋根の駅舎と、時折発着する気動車の姿はまるで絵画のようなノスタルジーを醸し出します。駅前には無料の足湯「親子地蔵の湯」も設置されています。"
        }
      },
      {
        '@type': 'Question',
        name: "芦ノ牧温泉・湯野上温泉の泉質と冬の雪見風呂の魅力は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "芦ノ牧温泉は開湯千二百年を誇り、弱アルカリ性単純温泉や塩化物・硫酸塩泉の泉質を持ちます。阿賀川（大川）が削り出した切り立った断崖絶景に面しており、露天風呂から見下ろす白銀の渓谷美は東北屈指の迫力です。一方の湯野上温泉は、毎分約3000リットルもの豊富な湯量を誇る単純温泉（弱アルカリ性）で、肌にしっとりと馴染む「美肌の湯」として知られます。冬の冷気の中で頭を冷やしながら、身体の芯まで温まる雪見露天は格別の贅沢です。"
        }
      },
      {
        '@type': 'Question',
        name: "冬に車で大内宿・芦ノ牧温泉へ行く際の道路状況と服装対策は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "会津若松市街地から芦ノ牧温泉、湯野上温泉、大内宿へ向かう国道118号線および県道は、12月〜1月は完全な積雪・圧雪路面やアイスバーンになります。車で訪れる場合は必ず4WD車のスタッドレスタイヤ装着が必須です。特に大内宿周辺は山間部のため急カーブや坂道があります。服装は大内宿の散策道が雪道となるため、滑り止めの効いた防水スノーブーツ、厚手のダウンコート、手袋、耳当てなど万全の防寒装備を整えてお出かけください。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "会津芦ノ牧温泉　大川荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12682/12682.jpg",
              rating: 4.54,
              reviews: 2338,
              price: "¥11,000〜",
              access: "会津若松ＩＣより約40分／芦ノ牧温泉駅より送迎有り（要予約）／大内宿まで約20分／鶴ヶ城まで約25分／飯盛山まで約30分",
              special: "★渓流を望む源泉掛け流しの絶景露天風呂と会津ならではのお食事★",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12682%2F12682.html",
              story: "阿賀川の渓谷美を望む断崖に建ち、浮き舞台を備えた吹き抜けロビーが幻想的な名宿「会津芦ノ牧温泉 大川荘」。館内に響く三味線の音色が出迎えてくれる非日常の空間が広がります。最大の自慢は、渓谷に向かって段々にせり出すように設えられた名物露天風呂「四季舞台たな田」。冬には雪をかぶった対岸の断崖絶景とエメラルドグリーンの渓流を見下ろしながら、源泉掛け流しの湯に浸かる至福の雪見露天が叶います。夕食には会津の旬の味覚をふんだんに取り入れた和食会席。極上の会津牛ステーキや新鮮な馬刺し、会津郷土料理が彩り豊かに並びます。",
              roomTip: "渓谷側和室「宵待亭」。大きな窓から雪化粧した阿賀川渓谷を眼下に一望でき、静寂な冬の時間をゆったりと過ごせます。",
              gourmetTip: "「会津美味三昧会席」。極上会津牛の陶板焼きと、臭みがなく甘み際立つ極上の会津馬刺し、冬の旬魚を盛り込んだ贅沢プラン。",
              highlights: [
                "三味線が響く浮き舞台と渓谷の断崖露天「四季舞台たな田」・阿賀川の雪見露天風呂",
                "A5会津牛の陶板焼きと極上会津馬刺し・福島の金賞銘酒とともに味わう贅沢会席",
                "芦ノ牧温泉駅からの無料送迎完備・館内設備が充実した東北屈指の人気大型温泉旅館"
              ]
            },
            {
              id: 2,
              name: "会津芦ノ牧温泉　丸峰観光ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/20623/20623.jpg",
              rating: 4.28,
              reviews: 3334,
              price: "¥8,800〜",
              access: "会津鉄道・芦ノ牧温泉駅／JR会津若松駅～タクシーで40分／磐越道・会津若松IC～40分/東北道・白河ＩＣ～60分",
              special: "2024年3月1日ビュッフェレストランオープン！山々に抱かれた渓谷美を望む【露天風呂付き客室】が人気",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20623%2F20623.html",
              story: "芦ノ牧温泉の渓谷沿いに広大な敷地を誇り、清流大川のせせらぎとともに上質な寛ぎを提供する老舗旅館「会津芦ノ牧温泉 丸峰観光ホテル」。長さ30メートルにも及ぶ総檜造りの大浴場「渓流展望風呂」や、渓谷の冷気と温かい名湯のコントラストが心地よい露天風呂を完備。冬の雪景色を眺めながらの湯浴みは旅の疲労を芯から解きほぐします。夕食には料理長が腕を振るう四季折々の創作会席。会津の清らかな水で育まれた食材を活かし、冬の滋味あふれる鍋料理や地元の銘酒とのペアリングを堪能できます。",
              roomTip: "峰貴館和室。広々とした畳敷きの空間で、落ち着いた調度品とともに雪の渓谷パノラマを楽しめます。",
              gourmetTip: "「会津牛陶板焼き＆冬の味覚会席」。柔らかくジューシーな会津牛の陶板焼きと、地元の冬野菜、手作り味噌の鍋仕立て。",
              highlights: [
                "長さ30mの総檜造り渓流大浴場・渓谷の雪景色と澄んだ清流を望む癒やしの湯処",
                "四季折々の創作料理と会津郷土鍋・伝統の技が光る繊細な日本料理",
                "大川のせせらぎに包まれる静寂・広々とした和室で雪景色を愛でる大人の旅"
              ]
            },
            {
              id: 3,
              name: "会津湯野上温泉　花鳥華やか風月の宿　藤龍館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17905/17905.jpg",
              rating: 4.75,
              reviews: 262,
              price: "¥22,080〜",
              access: "湯野上温泉駅より徒歩１２分／東北自動車道・白河ＩＣより６０分／磐越自動車道・会津若松ＩＣより５０分",
              special: "会津湯野上温泉の渓谷に佇む、全室源泉かけ流し風呂付絶景の隠れ宿。四季の旬を盛り込んだ懐石料理に舌鼓。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17905%2F17905.html",
              story: "大内宿まで車で約15分、湯野上温泉の静かな山あいに佇む全室離れ風・源泉掛け流しの高級隠れ宿「会津湯野上温泉 花鳥華やか風月の宿 藤龍館」。全12室の客室にはそれぞれ専用の源泉風呂が備えられ、誰にも気兼ねすることなく24時間いつでも新鮮な美肌の湯に浸かることができます。館内には数寄屋造りの雅な和の風情が漂い、冬の雪景色と静寂が大人の贅沢な時間を演出。夕食は朝夕ともにお部屋食または個室食事処で、会津地鶏や極上馬刺し、岩魚の塩焼きなど素材を極めた本格懐石料理が供されます。",
              roomTip: "温泉内湯付き特別室。専用の檜風呂から雪の庭園を眺めながら、源泉かけ流しの贅沢な湯浴みを堪能できます。",
              gourmetTip: "「藤龍館特選・会津贅沢懐石」。会津馬刺しの赤身とタテガミの盛り合わせ、香ばしい岩魚炭火焼き、福島牛すき焼きの極上コース。",
              highlights: [
                "全室客室専用温泉風呂完備・大内宿至近の湯野上温泉で過ごす大人の静謐な隠れ家",
                "朝夕お部屋食の贅沢懐石・会津地鶏や岩魚塩焼きと極上馬刺しの美食三昧",
                "クチコミ高評価4.7超の最高峰ホスピタリティ・源泉かけ流しの美肌の湯を満喫"
              ]
            },
            {
              id: 4,
              name: "会津芦ノ牧温泉　芦ノ牧グランドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5196/5196.jpg",
              rating: 4.33,
              reviews: 1239,
              price: "¥9,100〜",
              access: "芦ノ牧温泉駅より無料送迎有（要予約）８時～１８時台のみ／会津若松ICより約50分／大内宿迄約25分／鶴ヶ城迄約30分",
              special: "新鮮な海の恵み、極上の山の幸。心をこめた逸品と新感覚の前面畳張りの和風大浴場で至福のひと時を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5196%2F5196.html",
              story: "芦ノ牧温泉の高台に位置し、阿賀川渓谷のパノラマと充実した館内設備でファミリーからご年配まで幅広い旅行者に親しまれる宿「会津芦ノ牧温泉 芦ノ牧グランドホテル」。自然光が差し込む広々とした展望大浴場と岩造りの露天風呂からは、冬の澄んだ大気のもとで雪化粧した山並みを見渡せます。毎分豊富な湧出量を誇る温泉は肌に柔らかく、冷えた身体をじっくりと温めてくれます。夕食には会津の郷土料理を中心としたバイキングや和食膳を提供。会津の郷土料理「こづゆ」や熱々のすき焼き鍋が楽しめます。",
              roomTip: "展望和室。高台ならではの見晴らしの良さで、朝靄に包まれる冬の会津の山々を眺めながらゆったりと寛げます。",
              gourmetTip: "「会津郷土バイキング」。具だくさんの伝統料理「こづゆ」や揚げたての天ぷら、会津地鶏の温かい鍋を好きなだけ堪能。",
              highlights: [
                "高台から見渡す雪化粧の山並み・豊富な自家源泉の温まりの湯と広々とした大浴場",
                "郷土料理「こづゆ」が並ぶバイキング・家族連れや三世代にも安心の設備",
                "観光拠点として動きやすいロケーション・ゆったりとした寛ぎの和室"
              ]
            },
            {
              id: 5,
              name: "ホテル　いづみや＜福島県会津若松市＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/32091/32091.jpg",
              rating: 3.65,
              reviews: 34,
              price: "¥5,130〜",
              access: "ＪＲ会津若松駅より車で１０分／会津若松ＩＣより車で２０分",
              special: "現在リニューアルオープンに向けて改装を行っております。ホテル名の変更含めご迷惑をお掛けいたします。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32091%2F32091.html",
              story: "会津若松市街地と芦ノ牧・大内宿を結ぶ観光ルート沿いに位置し、温かなアットホームなおもてなしとコストパフォーマンスの高さで愛される宿「ホテル いづみや」。歴史ある城下町・会津若松の鶴ヶ城や飯盛山へのアクセスが容易で、大内宿観光の拠点としても非常に便利です。館内には長旅の疲れを癒やす温かい大浴場を完備。夕食には会津の郷土の味を感じさせる手作りの和食膳が並び、地元の契約農家から仕入れた会津コシヒカリの炊きたてご飯と温かい汁物が旅人の心とお腹を満たしてくれます。",
              roomTip: "スタンダード和室。清潔で静かな畳の部屋で、足を伸ばしてゆったりと旅の夜を過ごせます。",
              gourmetTip: "「女将手作りの会津家庭料理膳」。地元産の冬根菜を使った煮物や会津味噌汁、香ばしい焼き魚など素朴で温かな味覚。",
              highlights: [
                "会津若松市街と大内宿を結ぶ好立地・温かい手作り郷土料理とリーズナブルな宿泊体験",
                "女将手作りの素朴で温かな和食膳・会津コシヒカリの炊きたてご飯",
                "ビジネス・一人旅・ドライブ旅行にも最適・気取らないアットホームなおもてなし"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬の「大内宿」の雪景色の見どころとベストシーズンは？",
    "a": "福島県南会津郡下郷町に位置する大内宿は、江戸時代に会津若松と日光を結ぶ会津西街道の宿場町として栄えた集落です。寄棟造りの茅葺き屋根民家が約30軒立ち並びます。11月下旬〜12月上旬に初雪を迎え、12月中旬〜1月には約1メートルの雪に覆われ、完全な白銀の世界となります。集落の最奥にある「見晴台（湯殿山神社の階段上）」から見下ろす宿場町全体の雪景色は息を呑む絶景です。例年2月第2土日には雪灯籠に火が灯る「大内宿雪まつり」も開催されます。"
  },
  {
    "q": "大内宿名物「高遠そば（一本ねぎそば）」の食べ方と由来は？",
    "a": "大内宿の名物「高遠そば」は、箸を使わず、丸ごと1本の生の白ネギ（曲がりネギ）を使って蕎麦をすくい上げ、ネギをかじりながら薬味代わりに食べる独特の郷土そばです。会津藩主・保科正之公が信州高遠から伝えたとされ、大内宿の「三澤屋」が発祥です。ピリッとしたネギの辛みと大根おろしのつゆ、風味豊かな十割そばが絶妙に調和します。冬には囲炉裏でじっくり焼いた名物「岩魚の塩焼き」や、エゴマ味噌を塗って焼いた郷土菓子「しんごろう」も外せない逸品です。"
  },
  {
    "q": "日本唯一の茅葺き屋根駅舎「湯野上温泉駅」の見どころは？",
    "a": "会津鉄道の「湯野上温泉駅（ゆのかみおんせんえき）」は、日本で唯一の茅葺き屋根を持つ木造駅舎として鉄道ファンや旅行者に親しまれています。駅舎内には本物の「囲炉裏（いろり）」が切られており、冬には実際に火が焚かれ、パチパチとはぜる炭の温もりと煙の香りが漂います。雪をかぶった茅葺き屋根の駅舎と、時折発着する気動車の姿はまるで絵画のようなノスタルジーを醸し出します。駅前には無料の足湯「親子地蔵の湯」も設置されています。"
  },
  {
    "q": "芦ノ牧温泉・湯野上温泉の泉質と冬の雪見風呂の魅力は？",
    "a": "芦ノ牧温泉は開湯千二百年を誇り、弱アルカリ性単純温泉や塩化物・硫酸塩泉の泉質を持ちます。阿賀川（大川）が削り出した切り立った断崖絶景に面しており、露天風呂から見下ろす白銀の渓谷美は東北屈指の迫力です。一方の湯野上温泉は、毎分約3000リットルもの豊富な湯量を誇る単純温泉（弱アルカリ性）で、肌にしっとりと馴染む「美肌の湯」として知られます。冬の冷気の中で頭を冷やしながら、身体の芯まで温まる雪見露天は格別の贅沢です。"
  },
  {
    "q": "冬に車で大内宿・芦ノ牧温泉へ行く際の道路状況と服装対策は？",
    "a": "会津若松市街地から芦ノ牧温泉、湯野上温泉、大内宿へ向かう国道118号線および県道は、12月〜1月は完全な積雪・圧雪路面やアイスバーンになります。車で訪れる場合は必ず4WD車のスタッドレスタイヤ装着が必須です。特に大内宿周辺は山間部のため急カーブや坂道があります。服装は大内宿の散策道が雪道となるため、滑り止めの効いた防水スノーブーツ、厚手のダウンコート、手袋、耳当てなど万全の防寒装備を整えてお出かけください。"
  }
];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-orange-100 selection:text-orange-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の福島・白銀の大内宿と阿賀川渓谷の雪景色" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-orange-950/80 backdrop-blur-md text-orange-200 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-orange-500/30">
            <Snowflake className="w-4 h-4 text-orange-300" />
            11月・12月・1月 冬の会津・白銀の茅葺き大内宿＆阿賀川渓谷雪見露天風呂特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月福島】白銀の茅葺き宿場町・大内宿の雪景色と名物「一本ねぎそば」＆阿賀川渓谷雪見露天風呂・会津馬刺し名宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            江戸時代の街道情緒を今に伝える国の重伝建「大内宿」。11月下旬から1月、厚い茅葺き屋根に純白の雪が降り積もると、宿場町は息を呑む白銀の日本昔話の世界へと変わります。太い一本の生ネギを箸にして豪快に手繰る名物「高遠そば（ねぎそば）」、茅葺き屋根の囲炉裏が温かい「湯野上温泉駅」。そして阿賀川の断崖絶壁に棚田状にせり出す芦ノ牧温泉のダイナミックな雪見露天風呂。極上の会津牛や新鮮な会津馬刺し、全国金賞の銘酒に酔いしれる冬の郷愁旅へ。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-orange-400" /> 最適時期：11月下旬〜1月下旬（大内宿白銀雪景色・渓谷雪見露天）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-orange-400" /> エリア：福島県南会津郡下郷町（大内宿・湯野上温泉）・会津若松市芦ノ牧温泉</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-orange-400" /> 名物：一本ねぎそば・しんごろう・会津馬刺し・会津牛・郷土料理こづゆ</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              白銀に包まれる江戸の宿場町と、断崖絶景に湧く清流の雪見秘湯
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              会津盆地から南へ、深い山々に抱かれた下郷町に位置する「大内宿（おおうちじゅく）」。かつて会津若松と日光今市を結ぶ会津西街道（下野街道）の宿場町として栄え、参勤交代の大名や旅人が行き交った往時の佇まいを今に残しています。
            </p>
            <p>
              11月下旬、山々が初冠雪を迎えると、街道沿いに整然と並ぶ約30軒の寄棟造り茅葺き民家は、ふっくらとした雪の綿帽子をかぶり始めます。12月から1月の厳冬期には、あたり一面が深い銀世界となり、まるで時が止まったかのような静寂に包まれます。宿場の奥の小高い見晴台から見下ろす街並みは、現代の電柱や電線が地中化されているため、まさに江戸時代そのもの。雪煙を上げる街道を歩けば、家々の軒先から立ち上る暖かな煙と囲炉裏の香りが鼻腔をくすぐります。
            </p>
            <p>
              寒さでかじかんだ身体を温めてくれるのが、大内宿名物の「高遠そば（一本ねぎそば）」です。箸の代わりに長ネギを丸ごと1本持ち、蕎麦を引っ掛けて口へと運び、ネギをガブリとかじる。辛み大根の爽快な刺激とネギの甘み、蕎麦の香ばしさが一体となった味わいは、この地ならではの唯一無二の食体験です。さらに炭火でじっくり焼いたエゴマ味噌の「しんごろう」や香ばしい岩魚の塩焼きも冬の味覚を彩ります。
            </p>
            <p>
              大内宿から車で約15分の湯野上温泉や芦ノ牧温泉へと足を伸ばせば、阿賀川（大川）が削り出したダイナミックな渓谷雪景色が目の前に迫ります。断崖にせり出す露天風呂に浸かり、粉雪が舞う渓流を眺めながら入る雪見風呂は東北の温泉旅の極み。夜には鮮度抜群の極上会津馬刺しと会津牛のすき焼き鍋、金賞受賞の会津地酒に酔いしれる、心温まる冬の休日が待っています。
            </p>
          </div>
        </section>

        {/* 3 Major Winter Highlights */}
        <section className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <span className="text-orange-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の大内宿・芦ノ牧温泉を満喫する3大感動体験
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-800">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 白銀の茅葺き宿場町・大内宿の絶景
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                雪の綿帽子をかぶった約30軒の茅葺き民家が連なる街道。見晴台から望む一面の銀世界と、茅葺き屋根の駅舎「湯野上温泉駅」の囲炉裏が醸し出す郷愁の風景。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 丸ごと一本ねぎそば＆会津馬刺し・会津牛
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                箸を使わず長ネギで食べる名物「高遠そば」の痛快な美味。さらに宿で味わう極上の赤身会津馬刺し、A5会津牛の陶板焼き、郷土料理こづゆの温かい美食。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-800">
                <Waves className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 阿賀川渓谷を見下ろす段々棚田の雪見露天
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                大川の切り立った渓谷に向かって棚田状に配された大川荘の名物露天風呂「四季舞台たな田」。粉雪が舞う渓流を眼下に望む極上の雪見風呂体験。
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Timeline Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-orange-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】白銀の大内宿と阿賀川渓谷雪見露天を巡る会津冬旅黄金モデルコース
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              会津若松駅または郡山駅を起点に、会津鉄道やスタッドレス車で冬の宿場町と渓谷秘湯を快適に巡るドライブプラン。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-orange-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-orange-400 tracking-wider uppercase">DAY 1 昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  11:30 湯野上温泉駅到着 ➔ 囲炉裏と足湯で暖まり大内宿へ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  日本唯一の茅葺き屋根駅舎・湯野上温泉駅へ。駅舎内の囲炉裏でパチパチとはぜる薪の火にあたり、駅前足湯を満喫。路線バス「猿游号」またはタクシーで雪の大内宿へ向かいます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-orange-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  12:30 大内宿「一本ねぎそば」ランチ ➔ 白銀の宿場町散策と見晴台絶景
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  老舗「三澤屋」などで太い長ネギを箸にしてすする名物そばと香ばしい岩魚塩焼きに舌鼓。食後は雪の街道を歩き、集落最奥の見晴台から一面白銀の茅葺き屋根パノラマをカメラに収めます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-orange-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  16:00 芦ノ牧温泉の名宿へチェックイン ➔ 阿賀川渓谷棚田露天「四季舞台たな田」
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  大川荘など渓谷沿いの宿へ。三味線の音色に迎えられ、阿賀川を見下ろす段々棚田露天風呂で雪見風呂を堪能。夕食は極上会津牛ステーキ、新鮮な会津馬刺し、会津地酒で乾杯します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-orange-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-orange-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:00 朝の渓谷露天風呂 ➔ 鶴ヶ城雪景色見学と七日町通り散策
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  朝霧漂う渓谷を眺めながら湯浴み。チェックアウト後は会津若松市内へ移動し、赤瓦に白雪が映える名城「鶴ヶ城」を見学。レトロな七日町通りで漆器や赤べこを購入して帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Gastronomy & Culture Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              会津の厳しい風土が育んだ極上の馬刺しと全国金賞連覇の美酒
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-orange-800" />
                力道山が広めた会津馬刺しと特製「辛子味噌」の絶妙な調和
              </h3>
              <p>
                会津の馬刺しは、熊本などの霜降り馬肉とは異なり、運動量の多い上質な「赤身」が主流です。脂っぽさが一切なく、柔らかで濃厚な赤身肉の旨味が凝縮されています。昭和30年代、巡業で会津を訪れたプロレスラー・力道山が、特製の辛子にんにく味噌を醤油に溶いて生肉に付けて食べたのが始まりとされ、現在も会津独自の食べ方として全国の食通に愛されています。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-orange-800" />
                全国新酒鑑評会で金賞日本一を誇る福島の日本酒王国
              </h3>
              <p>
                福島県は全国新酒鑑評会において前人未到の金賞受賞数日本一を何度も達成している銘酒どころ。会津若松には「末廣」「名倉山」「宮泉（冩樂）」など名門酒蔵がひしめきます。米の豊かな甘みと華やかな吟醸香、透明感のある喉越しは、冬の濃厚な会津牛や馬刺し、郷土料理こづゆと完璧なペアリングを奏でます。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Recommendations Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-orange-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Selected Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の大内宿観光と阿賀川渓谷雪見露天を堪能する厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              楽天トラベル公式APIより取得した最新データに基づく、渓谷露天・会津料理・立地が高評価の宿。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px]">
                    <img 
                      src={h.img} 
                      alt={h.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-orange-950 bg-orange-50 px-2.5 py-1 rounded-md border border-orange-200/60">
                          {h.access}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-stone-600">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-stone-900 text-sm">{h.rating}</span>
                          <span>({h.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 font-medium">
                        {h.special}
                      </p>

                      <p className="text-sm text-stone-700 leading-relaxed pt-2">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 bg-stone-50 rounded-2xl p-4 border border-stone-200/70 text-xs sm:text-sm text-stone-700">
                      <div className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-orange-700" />
                        この宿の注目ポイント
                      </div>
                      <ul className="space-y-1.5 list-disc list-inside text-stone-600">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="leading-relaxed">{hl}</li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-stone-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="font-bold text-stone-900">客室の提案：</span>
                          <span className="text-stone-600">{h.roomTip}</span>
                        </div>
                        <div>
                          <span className="font-bold text-stone-900">料理の提案：</span>
                          <span className="text-stone-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-lg sm:text-xl font-black text-orange-950">{h.price}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-orange-900 hover:bg-orange-950 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xs transition-colors"
                      >
                        楽天トラベルで空室・プランを見る
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-orange-50/60 rounded-3xl p-6 sm:p-10 border border-orange-200/60 space-y-6">
          <div className="border-b border-orange-200/80 pb-4">
            <span className="text-orange-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-orange-950">
              冬の大内宿・芦ノ牧温泉を快適に巡るための実践アドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-orange-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-orange-700" />
                大内宿の積雪とスノーブーツ
              </div>
              <p className="leading-relaxed text-stone-700">
                大内宿の街道や見晴台への階段は未舗装で雪が踏み固められ、大変滑りやすくなります。革靴やスニーカーは避け、滑り止めの溝が深いスノーブーツや防寒長靴を必ず着用してください。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-orange-700" />
                国道118号線の凍結と4WD車
              </div>
              <p className="leading-relaxed text-stone-700">
                会津若松から芦ノ牧温泉・大内宿へ至る山岳道路は、12月〜1月は完全なアイスバーンや圧雪になります。車で訪れる場合は必ず4WD車のスタッドレスタイヤ装着車を選び、急発進・急ブレーキを避けましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-orange-700" />
                大内宿の店舗営業時間
              </div>
              <p className="leading-relaxed text-stone-700">
                冬期の大内宿は日没が早く、各蕎麦店や土産店は15時〜16時頃には閉店します。お目当ての食事や買い物は11時〜13時半頃の早めの時間帯に済ませるスケジュールを組みましょう。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-orange-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の大内宿＆芦ノ牧・湯野上温泉に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-orange-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-orange-900 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-3 pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links Section */}
        <section className="border-t border-stone-200 pt-10 space-y-6">
          <div className="space-y-1">
            <span className="text-orange-900 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい全国の冬景色・秘湯・雪見特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-fukushima-urabandai-onsen-goshikinuma-snow-fukushimagyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-orange-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-orange-900 font-bold text-xs block mb-1">福島・裏磐梯</span>
              <span className="text-stone-900 font-bold group-hover:text-orange-950 transition-colors line-clamp-2">
                神秘の五色沼雪景色と磐梯山パノラマ・源泉掛け流し福島牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-fukushima-bandai-atami-onsen-bihada-swan-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-orange-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-orange-900 font-bold text-xs block mb-1">福島・磐梯熱海</span>
              <span className="text-stone-900 font-bold group-hover:text-orange-950 transition-colors line-clamp-2">
                猪苗代湖のしぶき氷と白鳥・美人の湯磐梯熱海温泉＆会津牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-orange-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-orange-900 font-bold text-xs block mb-1">山形・銀山温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-orange-950 transition-colors line-clamp-2">
                大正ロマンのガス灯雪景色と木造多層建築・尾花沢牛と名湯名宿
              </span>
            </Link>

            <Link 
              href="/winter-tochigi-yunishigawa-onsen-kamakura-irori-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-orange-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-orange-900 font-bold text-xs block mb-1">栃木・湯西川温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-orange-950 transition-colors line-clamp-2">
                かまくら祭の幻想的な雪あかりと平家落人伝説・囲炉裏会席名宿
              </span>
            </Link>

            <Link 
              href="/winter-shirakawago-gassho-snow-illumination-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-orange-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-orange-900 font-bold text-xs block mb-1">岐阜・白川郷</span>
              <span className="text-stone-900 font-bold group-hover:text-orange-950 transition-colors line-clamp-2">
                世界遺産白川郷の合掌造り雪景色ライトアップと飛騨牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-ibaraki-fukuroda-waterfall-ice-onsen-shamo-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-orange-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-orange-900 font-bold text-xs block mb-1">茨城・奥久慈袋田</span>
              <span className="text-stone-900 font-bold group-hover:text-orange-950 transition-colors line-clamp-2">
                袋田の滝の完全凍結氷瀑と奥久慈軍鶏鍋・常陸牛温泉名宿
              </span>
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}
