import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月月岡温泉のエメラルド美肌名湯と初冬味覚】国内屈指の硫黄泉雪見露天と村上牛・初冬寒ブリ＆新潟地酒の宿5選",
  description: "国内第2位の硫黄含有量を誇り、神秘のエメラルドグリーンに輝く越後の名湯「月岡温泉」。「もっと美人になれる温泉」と謳われる美肌の湯に浸かり、11月下旬の初雪から12月の白銀雪景色を望む雪見露天風呂、A5ランク村上牛と日本海の寒ブリ、新潟新酒地酒を味わう名宿5選。",
  keywords: '月岡温泉 宿泊 11月 12月, 月岡温泉 エメラルドグリーン 硫黄泉, 白玉の湯 華鳳, 白玉の湯 泉慶, 摩周 月岡, ホテル清風苑, 村上牛 新潟 冬 温泉, 雪見露天風呂',
  alternates: {
    canonical: 'https://croud-travel.com/winter-niigata-tsukioka-onsen-emerald-bihada-stay',
  },
  openGraph: {
    title: "【11・12月月岡温泉のエメラルド美肌名湯と初冬味覚】国内屈指の硫黄泉雪見露天と村上牛・初冬寒ブリ＆新潟地酒の宿5選",
    description: "国内第2位の硫黄含有量を誇り、神秘のエメラルドグリーンに輝く越後の名湯「月岡温泉」。「もっと美人になれる温泉」と謳われる美肌の湯に浸かり、11月下旬の初雪から12月の白銀雪景色を望む雪見露天風呂、A5ランク村上牛と日本海の寒ブリ、新潟新酒地酒を味わう名宿5選。",
    url: 'https://croud-travel.com/winter-niigata-tsukioka-onsen-emerald-bihada-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月月岡温泉のエメラルド美肌名湯と初冬味覚】国内屈指の硫黄泉雪見露天と村上牛・初冬寒ブリ＆新潟地酒の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月月岡温泉のエメラルド美肌名湯と初冬味覚】国内屈指の硫黄泉雪見露天と村上牛・初冬寒ブリ＆新潟地酒の宿5選",
    description: "国内第2位の硫黄含有量を誇り、神秘のエメラルドグリーンに輝く越後の名湯「月岡温泉」。「もっと美人になれる温泉」と謳われる美肌の湯に浸かり、11月下旬の初雪から12月の白銀雪景色を望む雪見露天風呂、A5ランク村上牛と日本海の寒ブリ、新潟新酒地酒を味わう名宿5選。",
  }
};

const faqList = [
  {
    "q": "月岡温泉のお湯が『エメラルドグリーン』に輝く理由と美肌効果は？",
    "a": "月岡温泉は、日本全国の温泉の中でも第2位（自噴温泉としては実質トップクラス）の遊離硫化水素（硫黄成分）含有量を誇ります。湧き出した瞬間は無色透明ですが、空気に触れて硫黄成分が微細なコロイド粒子に変化し、太陽光の波長が散乱されることで、息をのむほど鮮やかなエメラルドグリーンに発色します。泉質は含硫黄-ナトリウム-塩化物温泉（弱アルカリ性）。余分な角質を取り除いて肌を滑らかにするピーリング効果と、塩分による高い保湿・保温効果を併せ持つため、『もっと美人になれる温泉』『不老長寿の湯』として古くから絶賛されています。"
  },
  {
    "q": "月岡温泉の11月・12月の雪景色や降雪時期は？スタッドレスタイヤは必要？",
    "a": "月岡温泉が位置する新発田市は越後平野の東部にあり、11月中旬までは平野部で雪が積もることは稀ですが、11月下旬になると山沿いから初雪が降り始めます。12月に入ると本格的な冬景色となり、庭園露天風呂の木々や屋根に純白の雪が積もる美しい『雪見風呂』のシーズンが到来します。11月下旬以降にお車で訪れる場合は、高速道路（関越道・北陸道・日本海東北道）および一般道ともに冬用タイヤ規制や凍結路面が発生するため、必ずスタッドレスタイヤを装着してお越しください。"
  },
  {
    "q": "新潟の最高峰黒毛和牛『村上牛』とはどのようなお肉ですか？",
    "a": "『村上牛（むらかみぎゅう）』は、新潟県北部の村上市や関川村で丹精込めて育てられた黒毛和牛の中でも、肉質等級が最高ランクのA4・A5ランクに格付けされたものだけに名乗ることが許される超希少ブランド牛です。コシヒカリの稲わらなど良質な飼料と清らかな雪解け水で育てられ、赤身にきめ細かく散りばめられたサシは融点が低く、口に入れた瞬間にとろけるような柔らかさと芳醇な甘みが広がります。月岡温泉の名宿では、ステーキやしゃぶしゃぶ、陶板焼きとして贅沢に供されます。"
  },
  {
    "q": "東京や関西から月岡温泉へのアクセス方法は？新幹線利用時のルートは？",
    "a": "東京駅からは上越新幹線で『新潟駅』まで最速約1時間30分〜1時間40分。新潟駅からJR白新線に乗換えて『豊栄駅（とよさかえき）』まで約15〜20分。豊栄駅からは月岡温泉行きの直行シャトルバスが運行されており、約20分で温泉街へ到着します（東京から合計約2時間30分）。また新潟駅や新発田駅からレンタカーを利用するルートも快適です。関西・名古屋方面からは東海道新幹線または飛行機（新潟空港）経由でアクセスできます。"
  },
  {
    "q": "月岡温泉街の散策スポットや名物『足湯湯足美（ゆたび）』について教えてください。",
    "a": "温泉街の中心部には、入浴料無料の大型足湯施設『あしゆ 湯足美（ゆたび）』があり、夜間は和傘の美しいライトアップが実施されます。また温泉街には、新潟全酒蔵の地酒の試飲ができる『新潟地酒 蔵』、新潟特産の干物や珍味を炭火で炙って食べられる『新潟地魚 旨』、煎餅の手焼きや絵付け体験ができる『新潟米 煎』など、新潟の魅力を五感で体験できるテーマショップが点在しており、浴衣姿で情緒ある街歩きが楽しめます。"
  }
];

export default function TsukiokaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-niigata-tsukioka-onsen-emerald-bihada-stay#article",
        "headline": "【11・12月月岡温泉のエメラルド美肌名湯と初冬味覚】国内屈指の硫黄泉雪見露天と村上牛・初冬寒ブリ＆新潟地酒の宿5選",
        "description": "国内第2位の硫黄含有量を誇り、神秘のエメラルドグリーンに輝く越後の名湯「月岡温泉」。「もっと美人になれる温泉」と謳われる美肌の湯に浸かり、11月下旬の初雪から12月の白銀雪景色を望む雪見露天風呂、A5ランク村上牛と日本海の寒ブリ、新潟新酒地酒を味わう名宿5選。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-27T00:00:00+09:00",
        "dateModified": "2026-09-27T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-niigata-tsukioka-onsen-emerald-bihada-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-niigata-tsukioka-onsen-emerald-bihada-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "月岡温泉のお湯が『エメラルドグリーン』に輝く理由と美肌効果は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "月岡温泉は、日本全国の温泉の中でも第2位（自噴温泉としては実質トップクラス）の遊離硫化水素（硫黄成分）含有量を誇ります。湧き出した瞬間は無色透明ですが、空気に触れて硫黄成分が微細なコロイド粒子に変化し、太陽光の波長が散乱されることで、息をのむほど鮮やかなエメラルドグリーンに発色します。泉質は含硫黄-ナトリウム-塩化物温泉（弱アルカリ性）。余分な角質を取り除いて肌を滑らかにするピーリング効果と、塩分による高い保湿・保温効果を併せ持つため、『もっと美人になれる温泉』『不老長寿の湯』として古くから絶賛されています。"
            }
          },
          {
            "@type": "Question",
            "name": "月岡温泉の11月・12月の雪景色や降雪時期は？スタッドレスタイヤは必要？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "月岡温泉が位置する新発田市は越後平野の東部にあり、11月中旬までは平野部で雪が積もることは稀ですが、11月下旬になると山沿いから初雪が降り始めます。12月に入ると本格的な冬景色となり、庭園露天風呂の木々や屋根に純白の雪が積もる美しい『雪見風呂』のシーズンが到来します。11月下旬以降にお車で訪れる場合は、高速道路（関越道・北陸道・日本海東北道）および一般道ともに冬用タイヤ規制や凍結路面が発生するため、必ずスタッドレスタイヤを装着してお越しください。"
            }
          },
          {
            "@type": "Question",
            "name": "新潟の最高峰黒毛和牛『村上牛』とはどのようなお肉ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "『村上牛（むらかみぎゅう）』は、新潟県北部の村上市や関川村で丹精込めて育てられた黒毛和牛の中でも、肉質等級が最高ランクのA4・A5ランクに格付けされたものだけに名乗ることが許される超希少ブランド牛です。コシヒカリの稲わらなど良質な飼料と清らかな雪解け水で育てられ、赤身にきめ細かく散りばめられたサシは融点が低く、口に入れた瞬間にとろけるような柔らかさと芳醇な甘みが広がります。月岡温泉の名宿では、ステーキやしゃぶしゃぶ、陶板焼きとして贅沢に供されます。"
            }
          },
          {
            "@type": "Question",
            "name": "東京や関西から月岡温泉へのアクセス方法は？新幹線利用時のルートは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "東京駅からは上越新幹線で『新潟駅』まで最速約1時間30分〜1時間40分。新潟駅からJR白新線に乗換えて『豊栄駅（とよさかえき）』まで約15〜20分。豊栄駅からは月岡温泉行きの直行シャトルバスが運行されており、約20分で温泉街へ到着します（東京から合計約2時間30分）。また新潟駅や新発田駅からレンタカーを利用するルートも快適です。関西・名古屋方面からは東海道新幹線または飛行機（新潟空港）経由でアクセスできます。"
            }
          },
          {
            "@type": "Question",
            "name": "月岡温泉街の散策スポットや名物『足湯湯足美（ゆたび）』について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "温泉街の中心部には、入浴料無料の大型足湯施設『あしゆ 湯足美（ゆたび）』があり、夜間は和傘の美しいライトアップが実施されます。また温泉街には、新潟全酒蔵の地酒の試飲ができる『新潟地酒 蔵』、新潟特産の干物や珍味を炭火で炙って食べられる『新潟地魚 旨』、煎餅の手焼きや絵付け体験ができる『新潟米 煎』など、新潟の魅力を五感で体験できるテーマショップが点在しており、浴衣姿で情緒ある街歩きが楽しめます。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.com/winter-niigata-tsukioka-onsen-emerald-bihada-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "月岡温泉　白玉の湯　華鳳",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32388%2F32388.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "月岡温泉　白玉の湯　泉慶",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29709%2F29709.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "月岡温泉　摩周",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80539%2F80539.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "月岡温泉　ホテル清風苑",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29424%2F29424.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "月岡温泉　風鈴屋（ホテルエリアワングループ）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54967%2F54967.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "月岡温泉　白玉の湯　華鳳",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/32388/32388.jpg",
              rating: 4.77,
              reviews: 1687,
              price: "¥23,100〜",
              access: "新潟駅や空港から最も近い温泉地／JR新発田駅より有料定時シャトルバス運行",
              special: "2025年プロが選ぶ日本のホテル・旅館100選★総合1位★白玉の湯は全国屈指の硫黄含有量",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32388%2F32388.html",
              story: "広大な六千坪の大庭園を抱き、プロが選ぶ日本のホテル・旅館100選で常に全国トップクラスに輝き続ける最高峰の和風旅館「白玉の湯 華鳳」。宿の最大の誇りは、自家源泉「白玉の湯」を贅沢に注ぎ込んだ回遊式の庭園露天風呂です。天候や気温によって鮮やかなエメラルドグリーンから白濁へと色を変える神秘の湯は、豊かな硫黄の香りと絹のようになめらかな肌触りを誇ります。広大な日本庭園には11月下旬から冬囲いや雪吊りが施され、初冬の静謐な美しさを演出。能舞台を模した豪壮なロビーや室内プール、美術品の数々が非日常の極上の休日を約束してくれます。",
              roomTip: "プライベートな源泉露天風呂を備えた別邸「越の里」や、優雅な庭園ビュー客室。窓の外に広がる初冬の越後連山と庭園の雪景色を望む贅沢なひととき。",
              gourmetTip: "新潟の海・山・里の贅を尽くした極上会席。新潟県最北の銘柄黒毛和牛「村上牛」のサーロインステーキ、日本海直送の寒ブリや南蛮エビのお造り、新潟県産コシヒカリの釜炊きご飯を個室料亭で堪能できます。",
              highlights: [
                "プロが選ぶ日本のホテル旅館トップクラス「白玉の湯」＆6000坪大庭園の雪吊りパノラマ",
                "神秘のエメラルドグリーンから白濁へ移ろう自家源泉＆能舞台ロビーの圧倒的格式",
                "最高峰A5村上牛サーロイン＆日本海寒ブリ・南蛮エビ造りと新米コシヒカリ極上会席"
              ]
            },
            {
              id: 2,
              name: "月岡温泉　白玉の湯　泉慶",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29709/29709.jpg",
              rating: 4.74,
              reviews: 1833,
              price: "¥17,600〜",
              access: "ＪＲ月岡駅より車で１０分／ＪＲ豊栄駅より車で２０分／磐越道　安田ＩＣより車で２０分",
              special: "硫黄の効能豊かな自家源泉“白玉の湯”の大露天風呂と旬の越後の創作会席料理が好評。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29709%2F29709.html",
              story: "巨石を配した豪快な庭園大浴場と、華やかな越後のおもてなしで高い支持を集める「白玉の湯 泉慶」。姉妹館の華鳳と同じく、国内屈指の硫黄含有量を誇る自家源泉「白玉の湯」を引湯しており、自家源泉ならではの鮮度抜群なエメラルドグリーンの湯が湯船からこんこんと溢れています。巨石露天風呂では、澄み切った初冬の夜空と湯煙のコントラストを楽しみながら、身体の芯から温まることができます。充実したアメニティや温かなスタッフの接客も定評があり、ファミリーや記念日旅行にも最適です。",
              roomTip: "展望風呂付き客室や、畳の清々しさが心地よい上質な和洋室。落ち着いた木の香りに包まれ、日頃の疲れをゆったりと解き放てます。",
              gourmetTip: "旬の食材を目の前で仕上げるオープンキッチンダイニングまたは個室会席。冬の日本海で揚がった寒ブリのしゃぶしゃぶ、村上牛陶板焼き、のどぐろ塩焼きなど、新潟の冬の旨味が勢揃い。",
              highlights: [
                "巨石大浴場と庭園露天風呂に注ぐ濃厚なエメラルド硫黄泉＆オープンキッチンの出来立て美味",
                "澄み渡る初冬の夜空を見上げる巨石露天風呂＆心温まるおもてなしと快適客室",
                "冬の寒ブリしゃぶしゃぶ＆村上牛陶板焼き・のどぐろ塩焼きと新潟地酒の饗宴"
              ]
            },
            {
              id: 3,
              name: "月岡温泉　摩周",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/80539/80539.jpg",
              rating: 4.70,
              reviews: 1964,
              price: "¥21,000〜",
              access: "新潟駅から直通シャトルバス有。磐越道安田ＩＣから２０分・日東道豊栄新潟東港ＩＣからは１５分。",
              special: "【シルバーアワード・日本の宿2023受賞】新潟の旬菜料理と4つの露天風呂が魅力。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80539%2F80539.html",
              story: "全四十二室の落ち着きある純和風旅館で、エメラルドグリーンの自家源泉を引いた四つの庭園露天風呂が自慢の「月岡温泉 摩周」。湯上がり処から望む美しい日本庭園には初冬の雪化粧が映え、露天風呂では湯船に浸かりながら冬の庭園美を愛でることができます。お湯は入浴した瞬間に肌がツルツルになる抜群の泉質力を誇り、硫黄泉特有の美白・保湿効果を余すところなく体感できます。きめ細やかなおもてなしと静けさを愛するリピーターが絶えない名宿です。",
              roomTip: "源泉かけ流しの露天風呂を備えた客室や、和モダンベッドルーム。障子越しに初冬の庭園を眺めながら、自分たちだけの贅沢な時間を過ごせます。",
              gourmetTip: "地元新潟・新発田の契約農家から仕入れる無農薬野菜と、日本海の新鮮魚介が調和する月替わり創作会席。越後牛や村上牛のローストビーフ、寒ヒラメの薄造り、新潟のしぼりたて地酒とのペアリング。",
              highlights: [
                "全42室の大人の隠れ宿＆4つの庭園露天風呂で味わう国内有数のエメラルド美人の湯",
                "日本庭園の初冬雪化粧を望む露天風呂＆硫黄の香りと肌にとろける湯触りの至福",
                "新発田契約農家無農薬野菜＆村上牛ローストビーフと寒ヒラメ薄造りの創作会席"
              ]
            },
            {
              id: 4,
              name: "月岡温泉　ホテル清風苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29424/29424.jpg",
              rating: 4.17,
              reviews: 1768,
              price: "¥11,000〜",
              access: "ＪＲ月岡駅より車で約５分／ＪＲ豊栄駅より車で１５分／磐越道　安田ＩＣより車で約１５分",
              special: "5つ星の宿〇プロが選ぶ日本の旅館１００選受賞！ビュッフェスタイルから特撰会席まで多彩なお料理をご用意",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29424%2F29424.html",
              story: "月岡温泉街の中心部に位置し、屋上庭園露天風呂や多彩な温泉施設を備えた大型名旅館「ホテル清風苑」。弱アルカリ性の含硫黄ナトリウム塩化物温泉が注ぐ大浴場には、檜風呂や信楽焼のつぼ湯、サウナが完備され、肌に優しいエメラルドの湯浴みを心ゆくまで楽しめます。館内には温泉街散策に便利な無料色浴衣サービスや、リラクゼーションサロンも完備。清潔感あふれるモダンな設備と親しみやすいサービスが人気です。",
              roomTip: "明るく開放感のある和室や、ベッドでくつろげる和洋ツイン。窓からは月岡温泉街の湯煙や遠くの越後平野の山並みを望めます。",
              gourmetTip: "冬の味覚満載のバイキングまたは和食会席。日本海直送の冬の寒ブリや紅ズワイガニ料理、揚げたて天ぷら、新潟県産豚のつゆしゃぶ、名物笹団子など、新潟グルメを贅沢に食べ比べ。",
              highlights: [
                "屋上庭園露天風呂と檜風呂・つぼ湯巡り＆温泉街散策に最適な好立地と充実施設",
                "弱アルカリ性硫黄泉でつるつる美肌体験＆色浴衣で巡る月岡温泉街のスイーツ散歩",
                "日本海寒ブリ＆紅ズワイガニ料理・越後もち豚つゆしゃぶの贅沢冬バイキング"
              ]
            },
            {
              id: 5,
              name: "月岡温泉　風鈴屋（ホテルエリアワングループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54967/54967.jpg",
              rating: 3.82,
              reviews: 704,
              price: "¥6,500〜",
              access: "羽越線　月岡駅、白新線　豊栄駅より車で２０分（新発田駅より新潟交通のシャトルバス有り：片道500円）新潟市内から車３５分",
              special: "温泉・ロビー　リニューアル完了★ライトアップされた大日本庭園など癒しや寛ぎの風を感じる宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54967%2F54967.html",
              story: "温泉街を望む高台に建ち、和モダンなリゾート感覚と伝統の月岡の名湯を手軽に満喫できる「月岡温泉 風鈴屋」。エメラルドグリーンに輝く大浴場と露天風呂には、月岡特有の濃厚な硫黄泉が注がれ、湯の花が舞う本格的な温泉力を堪能できます。館内には吹き抜けの開放的なラウンジがあり、無料のウェルカムドリンクやスイーツを楽しめるのも嬉しいポイント。コストパフォーマンスに優れ、友人同士やカップルの初冬旅行に選ばれています。",
              roomTip: "和モダンに改装された快適なツインルームや広々とした純和室。シンプルで居心地がよく、温泉街の夜景や星空を眺めて寛げます。",
              gourmetTip: "新潟の海の幸と山の幸を取り入れた季節のビュッフェまたは和食膳。冬の日本海鮮魚の刺身盛り合わせ、越後もち豚の鍋料理、新米コシヒカリの炊き立てご飯を味わえます。",
              highlights: [
                "エメラルドグリーンの硫黄泉露天風呂とラウンジ無料サービス＆快適な和モダンリゾート空間",
                "コスパ抜群の滞在＆湯の花舞う本格硫黄泉と新米コシヒカリの滋味あふれる料理",
                "日本海直送鮮魚のお造り盛り合わせ＆越後もち豚鍋と新潟しぼりたて新酒の夕食"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-emerald-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="月岡温泉のエメラルドグリーン硫黄泉雪見露天風呂と最高峰A5村上牛"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/90 text-emerald-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-emerald-800/50">
            <Eye className="w-4 h-4 text-emerald-300" />
            <span>11月・12月限定 エメラルドグリーン美肌硫黄泉＆村上牛・新潟新酒地酒特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月月岡温泉のエメラルド美肌名湯と初冬味覚】<br className="hidden sm:inline" />
            国内屈指の硫黄泉雪見露天と村上牛・初冬寒ブリ＆新潟地酒の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            国内第2位の硫黄含有量を誇り、神秘のエメラルドグリーンに輝く「白玉の湯」。11月下旬の初雪から12月の白銀雪化粧へと移ろう越後の原風景。とろける極上肉「村上牛」と日本海の寒ブリ、新米コシヒカリと搾りたて地酒に心酔する初冬の名宿ガイド。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> 新潟県新発田市月岡温泉</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Tsukioka Emerald Waters & Echigo Bounty</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                石油発掘から生まれた奇跡の碧湯。「もっと美人になれる温泉」の真髄
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            越後平野の東部、雄大な越後山脈の稜線を遠くに望む田園地帯に湯煙を上げる「月岡温泉（つきおかおんせん）」。大正4年（1915年）、石油の試掘を行っていた際に高温の温泉が噴出したことから開湯した、歴史ある名湯です。温泉街に近づくだけでふわりと立ち上る芳醇な硫黄の香り。そして湯船を満たすのは、まるで宝石を溶かし込んだかのような息をのむほど鮮やかなエメラルドグリーンの湯です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            月岡温泉の硫黄含有量（遊離硫化水素含有量）は1リットルあたり約50mgと、国内の全温泉地の中でも第2位という驚異的な数値を誇ります。弱アルカリ性の含硫黄ナトリウム塩化物泉は、古い角質を落として肌をつるつるに整えるピーリング作用と、塩化物成分による潤い保護膜の形成という、美肌のための理想的な二重構造を持ち合わせています。湯上がりの肌は「まるでひと皮むけたように白く滑らかになる」と賞賛され、全国の温泉ファンから「美人の湯」として絶大な支持を集めています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月から12月にかけての月岡温泉は、冬の味覚と雪景色が重なり合う特別な季節。越後平野に初雪が舞い始め、日本庭園や露天風呂の木々が白銀に包まれる「雪見露天風呂」のシーズンが幕を開けます。そして夕餉には、新潟が誇る至高の黒毛和牛「村上牛」の芳醇なステーキ、日本海の荒波で身を引き締めた冬の寒ブリ、収穫を終えたばかりの新米コシヒカリ、そして冬に仕込まれる新酒のしぼりたて地酒が卓を彩ります。
          </p>
          
          <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-emerald-700" />
                11月・12月月岡温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                国内屈指のエメラルドグリーン硫黄泉・初冬の白銀雪見露天風呂・最高峰A5村上牛ステーキ・日本海寒ブリ造り・新潟新酒地酒巡り＆あしゆ湯足美ライトアップ
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-emerald-800" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#emerald-spring" className="hover:text-emerald-800 hover:underline flex items-center gap-1.5">
              <span>1. 神秘のエメラルドグリーン：国内第2位の硫黄泉と美肌メカニズム</span>
            </a>
            <a href="#snow-season" className="hover:text-emerald-800 hover:underline flex items-center gap-1.5">
              <span>2. 11月下旬の初雪と12月の白銀世界：越後雪見露天風呂の醍醐味</span>
            </a>
            <a href="#murakami-beef" className="hover:text-emerald-800 hover:underline flex items-center gap-1.5">
              <span>3. 冬の越後美食：幻の最高峰「村上牛」と日本海寒ブリ・新米コシヒカリ</span>
            </a>
            <a href="#hotels" className="hover:text-emerald-800 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたい月岡温泉の厳選名宿5選</span>
            </a>
            <a href="#town-spots" className="hover:text-emerald-800 hover:underline flex items-center gap-1.5">
              <span>5. 足湯湯足美と地酒・地魚テーマショップ巡り</span>
            </a>
            <a href="#itinerary" className="hover:text-emerald-800 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 新潟・月岡温泉〜新発田城下町 王道モデルコース</span>
            </a>
            <a href="#faq" className="hover:text-emerald-800 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と初冬の防寒対策・スタッドレス情報</span>
            </a>
          </nav>
        </section>

        {/* Section 1: Emerald Spring */}
        <section id="emerald-spring" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Emerald Miracle</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                なぜエメラルド色に輝くのか？硫黄と光が織りなす七色の変幻
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            月岡温泉の源泉は、地下約1,000メートルから湧出する瞬間は澄み切った無色透明です。しかし空気に触れると、大量に溶け込んでいる硫黄（硫化水素イオン）が酸化し、目に見えないほど微細なコロイド粒子へと結晶化します。この微粒子に太陽光や露天風呂の照明が当たると、波長の短い青緑色の光だけが散乱され、神秘的なエメラルドグリーンとなって私たちの瞳に映ります。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            天候、気温、湿度、風の吹き抜け方によって、澄んだ淡い翡翠色から、濃いミルキーグリーン、さらには白濁したエメラルドへと湯の色が刻一刻と変化します。古くから「七色に変わる温泉」とも呼ばれ、湯船に身体を沈めると、肌一面にきめ細やかな気泡が付着し、湯上がりの肌がシルクのように吸い付く感覚を味わえます。
          </p>
        </section>

        {/* Section 2: Snow Season */}
        <section id="snow-season" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Snowflake className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Winter Atmosphere</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月下旬の初雪から12月の白銀雪景色：五感で味わう雪見露天
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            越後平野が初冬を迎える11月、田園の稲刈りが終わり、山々の頂から白銀の便りが届き始めます。11月中旬までは晩秋の肌寒さですが、11月下旬になると時折みぞれや初雪が舞い、12月に入ると温泉街全体がしっとりとした雪景色に包まれます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            冷たく澄み切った北風が頬をかすめる中、42度前後の熱めに調整された濃厚なエメラルドグリーンの湯船に肩まで浸かる瞬間は、冬の温泉旅における無上の歓び。雪の結晶が湯気の中に溶けゆく様を眺めながら、静まり返った越後の夜に身を委ねる時間は、心身の奥底にある緊張を完全に溶きほぐしてくれます。
          </p>
        </section>

        {/* Section 3: Murakami Beef */}
        <section id="murakami-beef" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Niigata Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                幻のブランド「村上牛」と日本海寒ブリ・冬の搾りたて地酒
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            月岡温泉の宿で供される冬のディナーは、食の宝庫・新潟の本領が遺憾なく発揮されます。その主役となるのが「村上牛」。全国肉用牛枝肉共励会で名誉賞（最高位）を幾度も受賞した新潟県最北の黒毛和牛で、A4・A5等級のみが選別されます。人肌の温度でとろけ出す融点の低いサシと、噛むほどに溢れる濃厚な赤身の肉汁は、一度味わうと牛肉の概念が変わるほどの衝撃です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            これに加えて、冬の日本海で丸々と肥えた寒ブリのお造りやブリしゃぶ、甘みたっぷりの南蛮エビ、高級魚のどぐろ。そして酒どころ新潟の酒蔵が11月・12月に仕込む、フルーティーでフレッシュな「しぼりたて新酒」が、会席料理の美味しさを何倍にも引き立ててくれます。
          </p>
        </section>

        {/* Hotel List Section */}
        <section id="hotels" className="space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Rakuten Travel Official API Verified</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              11月・12月に泊まりたい月岡温泉の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              楽天トラベルAPIより最新の空室・料金・レビュー情報を取得。エメラルド美肌湯と村上牛会席で高評価を獲得している宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[260px] bg-stone-100">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-sm text-white text-xs font-bold">
                      厳選第 {hotel.id} 位
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/50">
                          {hotel.special}
                        </span>
                        <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-xs text-stone-400 font-normal">({hotel.reviews}件)</span>
                        </div>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                        {hotel.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-stone-100 text-xs text-stone-600">
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-stone-800 whitespace-nowrap">客室の魅力:</span>
                          <span>{hotel.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-bold text-stone-800 whitespace-nowrap">冬の美食:</span>
                          <span>{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      <div className="bg-stone-50 rounded-xl p-3 space-y-1.5 border border-stone-100">
                        <span className="text-[11px] font-bold text-stone-700 block">宿の注目ポイント</span>
                        <ul className="space-y-1 text-xs text-stone-600">
                          {hotel.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-[11px] text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-lg sm:text-xl font-extrabold text-stone-900">{hotel.price}</span>
                        <span className="text-[11px] text-stone-500 ml-1">（2名1室利用時）</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md transition-all duration-200 group"
                      >
                        <span>プラン一覧・空室確認</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Town Spots */}
        <section id="town-spots" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Town Attractions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                足湯湯足美と地酒・地魚のテーマショップ巡り
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            月岡温泉街は、歩いて楽しめる工夫が凝らされた魅力あふれる街づくりが行われています。温泉街の中心にある「あしゆ 湯足美（ゆたび）」では、足湯に浸かりながら和傘のアートと演舞場を鑑賞可能。さらに新潟の特産品をテーマにした専門店が点在しています。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/60">
              <h4 className="font-bold text-stone-900 text-sm mb-1">新潟地酒 蔵（KURA）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                新潟県内全酒蔵のプレミアムな日本酒が勢揃い。専用コインでお猪口に注ぎ、冬の銘酒を少量ずつ飲み比べできます。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/60">
              <h4 className="font-bold text-stone-900 text-sm mb-1">新潟地魚 旨（UMAMI）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                日本海の新鮮な干物や海鮮珍味をセレクト。店内の囲炉裏炭火で香ばしく炙って熱々を味わう極上の体験。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/60">
              <h4 className="font-bold text-stone-900 text-sm mb-1">あしゆ 湯足美（YUTABI）</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                無料で利用できる広々とした足湯。夜間には色とりどりの和傘が幻想的な光で照らされ、初冬の温泉街をロマンチックに彩ります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Itinerary */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Suggested Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1泊2日 新潟・月岡温泉〜新発田城下町 王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-emerald-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">【1日目】上越新幹線で新潟へ〜月岡温泉街散策とエメラルド美肌湯</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                12:30 新潟駅到着 → ぽんしゅ館＆名物へぎそばランチ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                新潟駅直結のぽんしゅ館で地酒を試飲し、布海苔をつなぎに使ったツルツルのへぎそばを堪能。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                15:00 月岡温泉の名宿にチェックイン → エメラルド硫黄泉で雪見湯浴み
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                日本第2位の硫黄泉に浸かり、美肌効果を実感。露天風呂から初冬の庭園を眺める至福の時間。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                18:30 A5村上牛ステーキ＆日本海寒ブリの極上会席ディナー
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                とろける村上牛サーロインと獲れたて寒ブリ、新米コシヒカリを新潟のしぼりたて新酒とともに味わう。
              </p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">【2日目】足湯湯足美散歩〜国指定名勝・旧新発田藩庭園へ</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                08:30 朝の露天風呂入浴 → 新潟郷土料理バイキング
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                のっぺ汁や鮭の塩引き、コシヒカリの炊き立てご飯で大満足の朝食。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                10:00 あしゆ湯足美＆温泉街の地酒「蔵」で買い物 → 新発田城見学
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                温泉街をぶらりと散策し、国の重要文化財・新発田城表門や旧新発田藩下屋敷「清水園」の初冬庭園を見学。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-emerald-50 text-emerald-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Traveler's FAQ</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                よくある質問（FAQ）と初冬の旅のアドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-emerald-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links / Related Guides */}
        <section className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">Related Winter Hot Spring Guides</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい甲信越・北陸の冬・雪見・美食温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              11月・12月ならではの旬の味覚や雪景色を堪能できる全国各地の名湯ガイドを多数公開中。次の旅の計画にぜひお役立てください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-niigata-echigo-yuzawa-snow-sake-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">新潟・越後湯沢</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">越後湯沢温泉 川端康成『雪国』の白銀世界と地酒の宿</h3>
            </Link>
            <Link 
              href="/winter-nagano-shirahone-onsen-milky-snow-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">長野・白骨</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">白骨温泉 北アルプス乳白色秘湯と信州プレミアム牛の宿</h3>
            </Link>
            <Link 
              href="/winter-toyama-unazuki-onsen-kurobe-snow-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">富山・宇奈月</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">宇奈月温泉 黒部峡谷雪景色と富山湾寒ブリ・紅ズワイガニの宿</h3>
            </Link>
            <Link 
              href="/winter-fukui-awara-onsen-echizen-crab-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">福井・あわら</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">あわら温泉 庭園露天風呂と黄色いタグ付き越前がにの宿</h3>
            </Link>
            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">山形・銀山</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">銀山温泉 大正ロマンガス灯雪景色と尾花沢牛の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-emerald-900/80 hover:bg-emerald-900 p-4 rounded-2xl transition border border-emerald-800/50 block group"
            >
              <span className="text-xs text-emerald-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-emerald-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
