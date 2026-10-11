import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Info, Mountain 
} from 'lucide-react';

export const metadata: Metadata = {
  title: '奥日光で過ごす冬の旅（11・12月）！日本屈指のエメラルド硫黄泉と日光湯波会席！名宿5選',
  description: '11月中旬から雪化粧が始まり、12月には息を呑む白銀の静寂が広がる標高約1500mの奥日光・湯元温泉。日本で4番目に濃いエメラルドグリーンから乳白色へ変わる神秘の硫黄泉露天風呂と、伝統の日光湯波・とちぎ和牛に舌鼓を打つ極上の雪見温泉旅。',
  keywords: '日光湯元温泉 旅館, 奥日光 温泉 宿泊, 日光 雪見 温泉, 奥日光 にごり湯 宿, 日光湯波 会席 旅館, 栃木 11月 12月 旅行, 冬の日光 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-tochigi-okunikko-yumoto-snow-onsen-stay/",
  },
  openGraph: {
    title: '奥日光で過ごす冬の旅（11・12月）！日本屈指のエメラルド硫黄泉と日光湯波会席！名宿5選',
    description: '11月中旬から雪化粧が始まり、12月には息を呑む白銀の静寂が広がる標高約1500mの奥日光・湯元温泉。日本で4番目に濃いエメラルドグリーンから乳白色へ変わる神秘の硫黄泉露天風呂と、伝統の日光湯波・とちぎ和牛に舌鼓を打つ極上の雪見温泉旅。',
    url: 'https://croud-travel.pages.dev/winter-tochigi-okunikko-yumoto-snow-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月奥日光の白銀世界と濃厚にごり湯】日本屈指のエメラルド硫黄泉と日光湯波会席宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "奥日光の白銀世界と濃厚にごり湯で過ごす冬の旅（11・12月）！日本屈指のエメラルド硫黄泉と日光湯波会席宿5選",
    description: "11月中旬から雪化粧が始まり、12月には息を呑む白銀の静寂が広がる標高約1500mの奥日光・湯元温泉。日本で4番目に濃いエメラルドグリーンから乳白色へ変わる神秘の硫黄泉露天風呂と、伝統の日光湯波・とちぎ和牛に舌鼓を打つ極上の雪見温泉旅。",
  }
};

export default function OkunikkoWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-tochigi-okunikko-yumoto-snow-onsen-stay#article",
        "headline": "【11・12月奥日光の白銀世界と濃厚にごり湯】日本屈指のエメラルド硫黄泉と日光湯波会席宿5選",
        "description": "11月中旬から雪化粧が始まり、12月には息を呑む白銀の静寂が広がる標高約1500mの奥日光・湯元温泉。日本で4番目に濃いエメラルドグリーンから乳白色へ変わる神秘の硫黄泉露天風呂と、伝統の日光湯波・とちぎ和牛に舌鼓を打つ極上の雪見温泉旅。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "author": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド 編集部",
          "url": "https://croud-travel.pages.dev"
        },
        "publisher": {
          "@type": "Organization",
          "name": "日本全国・旅宿クラウド",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-tochigi-okunikko-yumoto-snow-onsen-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-tochigi-okunikko-yumoto-snow-onsen-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "奥日光湯元温泉の11月・12月の雪の状況と道路の路面凍結は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "標高約1500mに位置する奥日光湯元温泉では、例年11月中旬頃に初雪が降り、12月に入ると完全な積雪・圧雪路面となります。いろは坂を越えた中禅寺湖畔から湯元温泉にかけては路面凍結（アイスバーン）が頻発するため、お車でお越しの場合は必ずスタッドレスタイヤの装着またはタイヤチェーンの携行が必須です。冬道運転に不慣れな方は、JR・東武日光駅から発着する東武路線バスのご利用を強くおすすめします。"
            }
          },
          {
            "@type": "Question",
            "name": "日光湯元温泉のにごり湯（硫黄泉）の特徴と入浴効果は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "日光湯元温泉は開湯1200年の歴史を持つ名湯で、泉質は含硫黄-カルシウム・ナトリウム-硫酸塩・炭酸水素塩温泉です。日本で第4位の硫黄含有量を誇り、湧出時は無色透明〜エメラルドグリーンですが、空気に触れて酸化することで白濁のミルキーなにごり湯になります。動脈硬化症、高血圧症、慢性皮膚病、冷え性や関節痛に優れた効能があり、天然の保湿成分メタケイ酸も豊富に含まれるため美肌効果も抜群です。"
            }
          },
          {
            "@type": "Question",
            "name": "日光の「湯波（ゆば）」と京都の「湯葉」の違いは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "京都では「湯葉」と書き、豆乳の膜の端から1枚で引き上げるため薄く繊細な食感が特徴です。一方、日光では「湯波」と書き、豆乳の膜の中央に串を入れて2つ折りに巻き上げるように引き上げるため、厚みがあり中央に波のような層ができます。出汁をたっぷり含んだふっくらジューシーな食べ応えが日光湯波ならではの魅力です。"
            }
          },
          {
            "@type": "Question",
            "name": "11月〜12月の奥日光の気温とおすすめの防寒着は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月の平均気温は約3℃〜5℃、12月には氷点下（日中でも0℃前後、朝晩はマイナス5℃〜10℃以下）まで冷え込みます。真冬用のロングダウンコート、防風性のあるインナー、厚手のフリース、ウール製マフラー、耳当て付きニット帽、手袋、靴底に滑り止めが付いた防寒スノーブーツをご用意ください。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-tochigi-okunikko-yumoto-snow-onsen-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "奥日光湯元温泉　湯元板屋",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108140%2F108140.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "日光湯元温泉　奥日光パークロッジ深山",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40862%2F40862.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "奥日光湯元温泉　奥日光高原ホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8337%2F8337.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "日光湯元温泉　奥日光　森のホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15755%2F15755.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "奥日光湯元温泉　ゆの森",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54497%2F54497.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "奥日光湯元温泉　湯元板屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108140/108140.jpg",
              rating: 4.56,
              reviews: 178,
              price: "¥20,600〜",
              access: "東武日光駅／ＪＲ　日光駅より湯元行き東武バスに乗車８０分。終点湯元バス停で下車し徒歩３分",
              special: "温泉クチコミ★4.8！日本で4番目に濃いといわれてる源泉かけ流しの乳白色のにごり湯が自慢の温泉宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108140%2F108140.html",
              story: "創業は江戸中期の慶応年間、150年以上の歴史を誇る奥日光湯元温泉屈指の老舗旅館。宿の命である温泉は、裏山の源泉地から直接引き湯した一切加水なしの100%源泉かけ流し硫黄泉。空気に触れることで湧き立ての透明なエメラルドグリーンから、柔らかな乳白色へと刻一刻と表情を変える神秘的な名湯です。木の香が心地よい総檜造りの内湯と、雪景色に包まれる石造りの露天風呂「薬師の湯」では、濃厚な湯花が舞い、身体の芯から温まり湯冷めを寄せ付けません。館内には宿の歴史を物語る調度品が飾られ、落ち着いた和の風情が旅情を深めます。",
              roomTip: "純和風の客室からは湯ノ湖周辺の白銀の山並みや雪化粧した木々を眺めることができ、冬ならではの静寂に浸りながらゆったりと読書やお茶を楽しめます。",
              gourmetTip: "夕食は日光名産の伝統「引き上げ湯波」の刺身や煮物をはじめ、地元栃木県産のとちぎ和牛ステーキ、清流で育った岩魚の塩焼きなど、滋味あふれる里山会席に舌鼓を打てます。",
              highlights: [
                "創業150年の老舗＆加水なし100%源泉かけ流しの濃厚硫黄泉露天",
                "総檜造りの内湯と石造り露天風呂で神秘の乳白色湯を堪能",
                "日光名産生湯波のお造りととちぎ和牛の贅沢会席を部屋食または個室で"
              ]
            },
            {
              id: 2,
              name: "日光湯元温泉　奥日光パークロッジ深山",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40862/40862.jpg",
              rating: 4.47,
              reviews: 207,
              price: "¥5,700〜",
              access: "東武日光駅から直通バス乗車約70分　日光湯本温泉停留所下車　目の前／東武日光駅より車で約40分",
              special: "日光湯元温泉スキー場徒歩7分◆源泉かけ流し温泉24時間OK◆山川の幸の手作り料理◆卓球無料",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40862%2F40862.html",
              story: "奥日光の雄大な自然に囲まれた、アットホームで心温まるおもてなしが評判の山の温泉宿。湯元温泉の源泉から引く自慢のにごり湯は、メタケイ酸や硫黄成分が極めて豊富で、古くから湯治場として親しまれてきた本物の名湯です。露天風呂に身を沈めれば、澄み切った氷点下の空気と熱い湯のコントラストが心地よく、夜には頭上に広がる満天の星空を眺めながら贅沢な雪見露天が堪能できます。館内は清潔感に溢れ、暖炉のあるラウンジでは温かいお茶やコーヒーを片手に雪景色を眺めながら静かな時間を過ごせます。",
              roomTip: "和室を中心とした温もりある客室は、しっかりと暖房が効いており冬でも快適そのもの。畳の温かさに癒やされながら雪国の夜を過ごせます。",
              gourmetTip: "料理長が一品一品心を込めて作る和食膳。日光湯波の包み揚げや、季節の根菜をじっくり炊き上げた煮物、熱々の鍋料理など、冷えた身体に染み渡る手作りの温かさが絶賛されています。",
              highlights: [
                "源泉地至近の濃厚にごり湯＆満天の星空を仰ぐパノラマ雪見露天風呂",
                "アットホームな温かいおもてなしと手作りの日光湯波包み料理",
                "心安らぐアットホームな宿と暖炉ラウンジでのコーヒーサービス"
              ]
            },
            {
              id: 3,
              name: "奥日光湯元温泉　奥日光高原ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8337/8337.jpg",
              rating: 4.53,
              reviews: 1084,
              price: "¥11,827〜",
              access: "お車で、日光道清滝I.Cより40分、関越道沼田I.Cより90分(冬季閉鎖)。電車・バスで、日光駅より路線バスで80分。",
              special: "本物の天然温泉にごり湯／喧騒を忘れられる奥日光の大自然",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8337%2F8337.html",
              story: "白樺とカラマツの原生林に抱かれた、奥日光湯元温泉の中でも最大級の規模を誇る本格温泉リゾートホテル。広々とした大浴場と大露天風呂「白樺の湯」には、湯元温泉の濃厚な硫黄泉が並々と注がれています。冬には露天風呂の周囲がふかふかの純白の雪で埋め尽くされ、真っ白な雪景色と乳白色の湯船が溶け合う幻想的なコントラストが出現。夜にはライトアップされた雪景色と澄み渡る満天の冬の星空を同時に楽しめます。スキーロッカーや乾燥室も完備されており、冬のアクティビティの拠点としても抜群の利便性を誇ります。",
              roomTip: "広々とした和室や和洋室が揃い、ファミリーやグループ旅行にもゆとりある広さ。窓からは雪化粧した日光連山の雄姿をパノラマで一望できます。",
              gourmetTip: "夕食は地元栃木の厳選食材を用いた「彩り会席膳」。霜降りのとちぎ霧降高原牛のしゃぶしゃぶや、日光湯波の重ね蒸しなど、ボリュームと上品な味わいを兼ね備えた料理が並びます。",
              highlights: [
                "白樺林に囲まれた大浴場「白樺の湯」＆雪景色ライトアップ",
                "奥日光最大級の湯量を誇る広々露天風呂ととちぎ高原牛しゃぶしゃぶ",
                "ゆとりある和洋室完備でファミリーやグループのスキー温泉旅にも最適"
              ]
            },
            {
              id: 4,
              name: "日光湯元温泉　奥日光　森のホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15755/15755.jpg",
              rating: 4.59,
              reviews: 592,
              price: "¥25,000〜",
              access: "東武・JR日光駅～バス75分～湯元温泉バスターミナル～徒歩2分/日光宇都宮道路清滝ICより約45分 日光東照宮～車60分",
              special: "食事口コミ4.7、朝食高評価。硫黄泉の源泉かけ流しの湯と共に森の中の非日常空間をご堪能下さい。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15755%2F15755.html",
              story: "北欧の山岳リゾートを思わせるスタイリッシュな木造建築と、和の繊細なおもてなしが見事に融合した奥日光屈指の人気デザインホテル。大浴場「光徳の湯」に併設された露天風呂は、ウッドデッキの周囲に広がる針葉樹林の雪景色を眺めながら浸かれる開放感あふれる造り。エメラルドグリーンから乳白色へと濁る濃厚な硫黄泉は美肌効果が高く、入浴後のお肌は驚くほどすべすべに。ラウンジには本物の薪ストーブが揺らめき、パチパチとはぜる炎を眺めながら挽き立てコーヒーやワインを愉しむ贅沢な大人の休日が叶います。",
              roomTip: "全室禁煙で落ち着いた間接照明が配された客室は、シモンズ製高級ベッドを採用。モダンな畳スペースも設けられ、極上のリラックス空間が広がります。",
              gourmetTip: "オープンキッチンから出来立てが運ばれる創作会席「日光モダンキュイジーヌ」。栃木県産牛の低温ローストや、日光湯波のテリーヌ風仕立てなど、目にも鮮やかな絶品料理が続きます。",
              highlights: [
                "北欧風モダンデザイン宿＆薪ストーブのあるラウンジと美肌露天",
                "エメラルドグリーンから乳白色へ変化する極上泉質と創作和食会席",
                "シモンズ製高級ベッドと禁煙の上質なモダン客室でぐっすり快眠"
              ]
            },
            {
              id: 5,
              name: "奥日光湯元温泉　ゆの森",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54497/54497.jpg",
              rating: 4.73,
              reviews: 114,
              price: "¥41,800〜",
              access: "東武日光駅から東武バス乗車、終点「湯元温泉」下車（約６０分）　日光東照宮まで車60分",
              special: "全12室◇天然温泉100％のにごり湯掛流しの露天風呂付◇美食＆名湯のスロータイムな癒し旅",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54497%2F54497.html",
              story: "奥日光の静寂な森の中に佇む、全12室すべてに源泉かけ流しの専用ウッドデッキ露天風呂を備えた最高峰のラグジュアリー隠れ家宿。プライベートな客室露天風呂からは、雪化粧した原生林の森を目の前に望み、誰にも邪魔されることなく24時間いつでも神秘のにごり湯に浸かることができます。自然木をふんだんに使用した館内は静寂と品格に満ち、日常の喧騒から完全に解き放たれる極上のリトリート空間。客室数の少なさゆえに行き届く専属バトラーのような温かいホスピタリティが、特別な記念日やご夫婦旅に圧倒的な支持を集めています。",
              roomTip: "広々とした客室テラスに設えられた信楽焼や檜の露天風呂。雪が舞い散るなか、お好みの温度で好きなだけ名湯を独占できる究極のプライベートステイです。",
              gourmetTip: "個室食事処でいただく夕食は、料理長がこだわり抜いた特選和牛会席。最高ランクのとちぎ和牛フィレ肉ステーキや、引き立ての極上出汁でいただく日光生湯波など、至高の味覚が揃います。",
              highlights: [
                "全12室すべて源泉かけ流し客室露天風呂付き＆静寂の森の最高峰隠れ家",
                "完全プライベートな雪見露天風呂と最高ランクとちぎ和牛フィレ肉会席",
                "記念日やご夫婦のご褒美旅行に選ばれ続ける奥日光の最高級リゾート"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-teal-700 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-900">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="奥日光湯元温泉の白銀に染まる雪景色と立ち上る白濁の温泉湯けむり"
          fill
          priority
          className="object-cover object-center opacity-45 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-800/90 text-teal-100 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-teal-600/40">
            <Snowflake className="w-4 h-4 text-cyan-300" />
            <span>11月・12月限定 奥日光の本格雪見温泉</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">奥日光の白銀世界と濃厚にごり湯で過ごす冬の旅（11・12月）！<br className="hidden sm:inline" /> 日本屈指のエメラルド硫黄泉と日光湯波会席宿5選</h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            標高約1500mの雲上に広がる純白の雪国。空気に触れるとエメラルドグリーンから乳白色へと変化する奇跡の硫黄泉露天風呂で温まり、名物日光湯波ととちぎ和牛に舌鼓を打つ極上の冬旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-teal-400" /> 栃木県日光市（奥日光湯元温泉・湯ノ湖畔）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月奥日光】日本屈指のエメラルド硫黄泉と日光湯波会席！名宿5選","item":"https://croud-travel.pages.dev/winter-tochigi-okunikko-yumoto-snow-onsen-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-700">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Alpine Snow & Hot Spring</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                首都圏からわずか2時間半。標高1500mに広がる奇跡の雪見天国
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            いろは坂を登りきり、中禅寺湖と戦場ヶ原を抜けた最奥部に位置する「奥日光・湯元温泉」。標高は約1500メートルにおよび、北海道に匹敵する冷涼な気候がもたらす冬の景色は、関東圏とは思えないほどの圧倒的な白銀の世界を描き出します。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月中旬、山々に最初の雪化粧が施されると、静かな湯ノ湖の湖面には周囲の針葉樹林と雪山の姿が鏡のように映り込みます。そして12月に入れば、一面に降り積もる極上のパウダースノー。温泉街のあちこちから立ち上る真っ白な湯けむりと硫黄の芳しいアロマが、旅人の旅情をいや応なくかき立てます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            湯元温泉の最大の宝は、全国第4位の硫黄含有量を誇る濃厚な温泉です。湯口から注がれる湧き立ての湯は透明なエメラルドグリーンを帯び、空気に触れて湯船に満たされるにつれて、優しい乳白色へと変化を遂げます。氷点下の澄み切った空気が顔を撫でるなか、肩までたっぷりと湯に浸かる「雪見露天風呂」の多幸感は、一度味わえば生涯忘れられない感動となります。
          </p>
          <div className="bg-teal-50/70 rounded-2xl p-5 border border-teal-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-teal-700" />
                奥日光の冬旅は「バス移動＋にごり湯宿」が鉄則
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                雪道運転の不安を解消する東武バスのフリーパスが便利。湯上がり後は湯冷め知らずの濃厚硫黄泉で極楽のひとときを。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              奥日光の厳選宿5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Winter Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の奥日光湯元温泉で感動する3つの特別な体験
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">日本屈指の濃厚エメラルド硫黄泉</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                全国第4位の硫黄含有量。エメラルドグリーンから乳白色へ移ろう神秘のにごり湯は、美肌と温まり効果が圧倒的です。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">一面の白銀世界と静寂の雪見露天</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                標高1500mの澄み切った氷点下の空気と、熱い源泉のコントラスト。夜は満天の星空が降り注ぐ天然プラネタリウムに。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">ふっくら日光湯波＆とちぎ和牛</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                二重に巻き上げる伝統の日光湯波は出汁の旨味がぎっしり。とろける極上のとちぎ和牛ステーキとともに冬の味覚を堪能。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Selected Hot Spring Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              奥日光湯元の極上にごり湯と美食を味わう名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              楽天トラベルで4.0以上の高評価を誇る奥日光湯元温泉の宿。加水なしの源泉かけ流し、雪見露天の絶景、日光湯波料理に優れた宿を厳選。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200 hover:border-teal-400 transition-all duration-300 flex flex-col"
              >
                {/* Hotel Image Container */}
                <div className="lg:w-2/5 relative min-h-[280px] lg:min-h-full">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Award className="w-3.5 h-3.5 text-teal-400" />
                    <span>厳選 #{hotel.id}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-3 rounded-2xl text-white text-xs">
                    <p className="font-semibold flex items-center gap-1 text-teal-300">
                      <Star className="w-3.5 h-3.5 fill-teal-400 text-teal-400" />
                      評価 {hotel.rating} / 5.0
                    </p>
                    <p className="text-[11px] text-stone-300 line-clamp-1">{hotel.access}</p>
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200">
                        {hotel.special}
                      </span>
                      <span className="text-xs font-semibold text-stone-500">
                        宿泊目安: <strong className="text-stone-900 text-sm">{hotel.price}</strong> /名
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug hover:text-teal-800 transition-colors">
                      <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                        {hotel.name}
                      </a>
                    </h3>

                    <p className="text-stone-700 text-sm leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 text-xs space-y-1">
                        <strong className="text-teal-900 flex items-center gap-1 font-bold">
                          <Coffee className="w-3.5 h-3.5 text-teal-700" /> お部屋・快適性
                        </strong>
                        <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 text-xs space-y-1">
                        <strong className="text-teal-900 flex items-center gap-1 font-bold">
                          <Utensils className="w-3.5 h-3.5 text-teal-700" /> 冬の味覚・料理自慢
                        </strong>
                        <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                      </div>
                    </div>

                    {/* Highlights Badges */}
                    <div className="space-y-1.5 pt-1">
                      {hotel.highlights.map((hl, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-stone-500 text-center sm:text-left">
                      ※ 11・12月は雪見露天風呂のピーク期のため早期予約が推奨されます。
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-98"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日おすすめモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Suggested Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              【1泊2日】白銀の奥日光湯元温泉を満喫する雪見リトリートモデルコース
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              東武バスを活用して雪道運転なし！中禅寺湖の冬景色、華厳の滝の氷瀑予兆、にごり湯三昧を楽しむ王道プラン。
            </p>
          </div>

          <div className="relative border-l-2 border-teal-200 ml-4 pl-6 space-y-8">
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-teal-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">1日目 11:30</span>
              <h3 className="text-base font-bold text-stone-900">東武日光駅到着 〜 東武バス「湯元温泉フリーパス」を購入</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                特急スペーシアXやリバティで東武日光駅へ。駅構内の観光案内所で「湯元温泉フリーパス」を購入し、雪道運転の心配なく奥日光行きのバスへ乗車します。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-teal-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">1日目 13:00</span>
              <h3 className="text-base font-bold text-stone-900">中禅寺湖・華厳の滝で壮大な冬景色を観賞</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                中禅寺温泉で途中下車。エレベーターで観瀑台へ降り、冬の寒さで一部が青い氷柱へと変わり始める華厳の滝を間近に体感。温かい日光湯波うどんのランチ。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-teal-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">1日目 15:30</span>
              <h3 className="text-base font-bold text-stone-900">湯元温泉に到着 〜 源泉小屋の木道散策とチェックイン</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                終点の湯元温泉に到着。地面からボコボコと湯が湧き出る「湯元温泉源泉地」の木道を散策し、硫黄の香りを満喫。宿へチェックイン。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-teal-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">1日目 16:30</span>
              <h3 className="text-base font-bold text-stone-900">白銀の雪見露天風呂へ！エメラルド硫黄泉で極楽の湯浴み</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                氷点下の空気の中、湯けむり立ち込める露天風呂へ。エメラルドグリーンから乳白色へ移ろう湯に浸かり、降り積もる白雪を眺める至福のひととき。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-teal-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">1日目 18:30</span>
              <h3 className="text-base font-bold text-stone-900">夕食：伝統の日光湯波ととちぎ和牛会席</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                出汁がたっぷり染み込んだ日光湯波の煮物、とろける甘みのとちぎ和牛ステーキ、地元の根菜鍋など、冷えた身体に染み渡る極上の料理を堪能。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-teal-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">2日目 08:00</span>
              <h3 className="text-base font-bold text-stone-900">朝の雪景色を眺めながらの朝風呂＆湯波朝食</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                朝日に輝く湯ノ湖の雪景色を愛でながら贅沢な朝風呂。出来立ての湯波粥や日光名産の漬物とともに滋味あふれる朝食をいただきます。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-teal-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">2日目 10:30</span>
              <h3 className="text-base font-bold text-stone-900">湯ノ湖畔スノーシュー散策 〜 日光東照宮の初冬参拝へ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                凍結した湯ノ湖畔の雪道を静かに散策。バスで山を下り、世界遺産・日光東照宮で陽明門を参拝し、門前町で湯波まんじゅうをお土産に購入して帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* 旬の日光名物グルメガイド */}
        <section className="bg-stone-100/70 rounded-3xl p-6 sm:p-10 border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-teal-800 text-white">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Local Specialties</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                奥日光・湯元温泉で絶対に味わいたい冬の美食4選
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-teal-700">●</span> 伝統製法の「日光巻き湯波（ゆば）」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                二重に巻き上げた日光独自の製法。出汁をたっぷり含んだふくよかな厚みがあり、煮物にすると噛むほどに旨味エキスが口いっぱいに広がります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-teal-700">●</span> 極上の霜降り「とちぎ和牛」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                指定生産者が丹精込めて育てた黒毛和牛。きめ細やかなサシと芳醇な香り、とろけるような柔らかさが陶板焼きやしゃぶしゃぶで際立ちます。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-teal-700">●</span> 奥日光の清流が育む「ヤシオマス・岩魚」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                日光山系の清らかな伏流水で育った高級サーモン「ヤシオマス」。脂が上品にのったお刺身や、炭火でじっくり焼き上げた岩魚の塩焼きは絶品。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-teal-700">●</span> 冬季限定の銘菓「揚げ湯波まんじゅう」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                日光駅前で行列を作る名物。湯波を練り込んだ衣で漉し餡まんじゅうをカラッと揚げ、天然塩をパラリ。甘じょっぱさと熱々のサクサク感が癖になります。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-teal-100 text-teal-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Q&A Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の奥日光湯元温泉旅行 よくある質問と雪道対策
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-teal-700 font-extrabold">Q.</span>
                11月・12月の奥日光湯元温泉へノーマルタイヤの車で行けますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                絶対に不可です。奥日光は標高1500mの高地であり、11月中旬以降はいろは坂の上部や戦場ヶ原、湯元温泉周辺で降雪や日陰のアイスバーン（凍結路面）が発生します。必ずスタッドレスタイヤを装着し、チェーンを携行してください。運転に少しでも不安がある場合は、日光駅からの東武路線バスのご利用を強くおすすめします。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-teal-700 font-extrabold">Q.</span>
                東武バスの「湯元温泉フリーパス」はお得ですか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                非常にお得です。JR・東武日光駅から湯元温泉までの片道通常運賃は約1,950円ですが、2日間乗り降り自由の「湯元温泉フリーパス」（約3,500円）を使えば往復だけで元が取れ、さらに中禅寺湖や竜頭の滝、東照宮周辺での途中下車も自由になります。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-teal-700 font-extrabold">Q.</span>
                硫黄泉に入浴する際の注意点はありますか？（貴金属など）
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                日光湯元温泉の泉質は硫黄分が極めて濃厚なため、銀製品（シルバーアクセサリーや指輪）や金・プラチナの合金は一瞬で黒く変色してしまいます。必ず入浴前に貴金属類はすべて外してください。また、湯あたりを防ぐため、1回の入浴時間は10〜15分程度を目安にし、しっかり水分補給を行ってください。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-teal-700 font-extrabold">Q.</span>
                冬の奥日光散策に適した靴や服装は何ですか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                12月は氷点下の日が多いため、防寒スノーブーツ（防水性があり靴底に深い溝があるもの）が必須です。普通のスニーカーや革靴は雪が浸みて冷えるだけでなく、凍結路面で転倒の危険があります。服装はダウンジャケット、厚手の靴下、手袋、耳が隠れるニット帽、携帯用カイロを必ずご用意ください。
              </p>
            </div>
          </div>
        </section>

        {/* 内部リンク網羅（GEOリンク＆関連冬特集） */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Related Guides & Areas</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の旅をさらに広げる関連特集＆エリア別ガイド
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              日本全国・旅宿クラウドが厳選する、11月・12月の冬旅行特集や近隣エリアの温泉宿ガイドをチェック。
            </p>
          </div>

          {/* 関連特集リンクカード */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link 
              href="/winter-gunma-manza-snow-milky-hotspring-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-teal-50/60 border border-stone-200 hover:border-teal-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">標高1800m雪見にごり湯</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-teal-900 transition-colors">
                万座温泉の日本一濃厚硫黄泉と雪見星空宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                群馬・標高1800mの白銀世界！乳白色のにごり湯露天風呂と満天の星空。
              </p>
            </Link>

            <Link 
              href="/winter-gunma-kusatsu-yukimi-onsen-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-teal-50/60 border border-stone-200 hover:border-teal-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">名湯雪見特集</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                草津温泉の湯畑ライトアップと雪見露天風呂
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                日本三名泉・草津温泉の圧倒的な湯量と冬の幻想的な湯けむり散策。
              </p>
            </Link>

            <Link 
              href="/winter-chichibu-icicle-misotsuchi-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-teal-50/60 border border-stone-200 hover:border-teal-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-cyan-800 bg-cyan-100/80 px-2 py-0.5 rounded">冬の氷の絶景</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-cyan-900 transition-colors">
                秩父三十槌の氷柱ライトアップと秩父温泉宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                大自然が生み出す巨大な氷のカーテンと秩父の温かい郷土鍋料理。
              </p>
            </Link>
          </div>

          {/* 都道府県GEOリンク */}
          <div className="pt-4 border-t border-stone-100 space-y-3">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              近隣・全国の都道府県別おすすめ宿
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/prefectures/tochigi" className="px-3 py-1.5 bg-stone-100 hover:bg-teal-100 text-stone-700 hover:text-teal-900 rounded-lg transition-colors font-medium">栃木県の宿一覧</Link>
              <Link href="/prefectures/gunma" className="px-3 py-1.5 bg-stone-100 hover:bg-teal-100 text-stone-700 hover:text-teal-900 rounded-lg transition-colors font-medium">群馬県の宿一覧</Link>
              <Link href="/prefectures/fukushima" className="px-3 py-1.5 bg-stone-100 hover:bg-teal-100 text-stone-700 hover:text-teal-900 rounded-lg transition-colors font-medium">福島県の宿一覧</Link>
              <Link href="/prefectures/ibaraki" className="px-3 py-1.5 bg-stone-100 hover:bg-teal-100 text-stone-700 hover:text-teal-900 rounded-lg transition-colors font-medium">茨城県の宿一覧</Link>
              <Link href="/prefectures/saitama" className="px-3 py-1.5 bg-stone-100 hover:bg-teal-100 text-stone-700 hover:text-teal-900 rounded-lg transition-colors font-medium">埼玉県の宿一覧</Link>
              <Link href="/prefectures/nagano" className="px-3 py-1.5 bg-stone-100 hover:bg-teal-100 text-stone-700 hover:text-teal-900 rounded-lg transition-colors font-medium">長野県の宿一覧</Link>
              <Link href="/prefectures/niigata" className="px-3 py-1.5 bg-stone-100 hover:bg-teal-100 text-stone-700 hover:text-teal-900 rounded-lg transition-colors font-medium">新潟県の宿一覧</Link>
            </div>
          
      <HubRelatedPosts currentSlug="winter-tochigi-okunikko-yumoto-snow-onsen-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
