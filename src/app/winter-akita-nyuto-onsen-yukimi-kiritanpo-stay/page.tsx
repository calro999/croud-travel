import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Info, Heart, Clock, Footprints, ShoppingBag
} from 'lucide-react';

export const metadata: Metadata = {
  title: '乳頭温泉郷で過ごす冬の旅（11・12月）！ブナ原生林の雪見露天風呂と本！名宿5選',
  description: '11月中旬からブナの原生林が純白の雪に包まれる十和田八幡平国立公園・乳頭温泉郷。乳白色の湯けむりが立ち上る野趣あふれる雪見露天風呂と、囲炉裏端でいただく比内地鶏の出汁が染み渡る熱々の本場きりたんぽ鍋。冬の東北が誇る究極の秘湯旅ガイド。',
  keywords: '乳頭温泉 宿泊 11月 12月, 乳頭温泉郷 雪見露天 旅館, 鶴の湯 秘湯 冬, 秋田 きりたんぽ 温泉宿, 乳頭温泉 秘湯めぐり, 田沢湖 温泉, 乳頭温泉 モデルコース',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay/",
  },
  openGraph: {
    title: '乳頭温泉郷で過ごす冬の旅（11・12月）！ブナ原生林の雪見露天風呂と本！名宿5選',
    description: '11月中旬からブナの原生林が純白の雪に包まれる十和田八幡平国立公園・乳頭温泉郷。乳白色の湯けむりが立ち上る野趣あふれる雪見露天風呂と、囲炉裏端でいただく比内地鶏の出汁が染み渡る熱々の本場きりたんぽ鍋。冬の東北が誇る究極の秘湯旅ガイド。',
    url: 'https://croud-travel.pages.dev/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月乳頭温泉郷の白銀秘湯めぐり】ブナ原生林の雪見露天風呂と本場きりたんぽ鍋の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "乳頭温泉郷の白銀秘湯めぐりで過ごす冬の旅（11・12月）！ブナ原生林の雪見露天風呂と本場きりたんぽ鍋の宿5選",
    description: "11月中旬からブナの原生林が純白の雪に包まれる十和田八幡平国立公園・乳頭温泉郷。乳白色の湯けむりが立ち上る野趣あふれる雪見露天風呂と、囲炉裏端でいただく比内地鶏の出汁が染み渡る熱々の本場きりたんぽ鍋。冬の東北が誇る究極の秘湯旅ガイド。",
  }
};

export default function NyutoWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay#article",
        "headline": "【11・12月乳頭温泉郷の白銀秘湯めぐり】ブナ原生林の雪見露天風呂と本場きりたんぽ鍋の宿5選",
        "description": "11月中旬からブナの原生林が純白の雪に包まれる十和田八幡平国立公園・乳頭温泉郷。乳白色の湯けむりが立ち上る野趣あふれる雪見露天風呂と、囲炉裏端でいただく比内地鶏の出汁が染み渡る熱々の本場きりたんぽ鍋。冬の東北が誇る究極の秘湯旅ガイド。",
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
          "@id": "https://croud-travel.pages.dev/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "乳頭温泉郷の初雪と積雪時期は？11月や12月の雪景色はどうですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "乳頭温泉郷は標高約600〜800mの豪雪地帯に位置し、例年11月上旬〜中旬に初雪が降ります。11月下旬にはブナの森が雪化粧をまとい、12月に入ると完全な白銀世界が完成します。12月下旬には積雪が1mを超えることもあり、湯船の周囲に雪の壁ができる本格的な雪見露天風呂が楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "乳頭温泉郷の「湯めぐり号」や湯めぐり帖は冬でも利用できますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "乳頭温泉郷の宿泊者限定で販売される「湯めぐり帖」を利用すれば、七湯（鶴の湯・妙乃湯・黒湯・蟹場・孫六・大釜・休暇村）の温泉をお得に巡ることができます（※黒湯など一部冬期休業の宿を除く）。宿泊者専用の巡回バス「湯めぐり号」も冬期運行されており、雪道運転の心配なく名湯巡りを満喫できます。"
            }
          },
          {
            "@type": "Question",
            "name": "本場秋田の「きりたんぽ鍋」の美味しい特徴と具材は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "本場のきりたんぽ鍋は、比内地鶏の丸鶏やガラから丁寧にとった澄んだ黄金色の出汁がベースです。具材には比内地鶏のモモ肉・ムネ肉、香ばしく焼いたきりたんぽ、舞茸、ゴボウ、長ネギ、そして根付きのセリが欠かせません。セリの爽やかな苦味と比内地鶏の濃厚な脂の甘みが、新米あきたこまちのたんぽに染み込んで至福の味わいです。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の乳頭温泉・田沢湖へのアクセスと服装の注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "秋田新幹線こまち号で「JR田沢湖駅」まで直通。駅前から羽後交通の路線バス（乳頭線）が運行されています。冬期は完全な圧雪・凍結路面となるため、自家用車の場合は4WDスタッドレスタイヤが必須です。服装はスキー場と同等の完全防寒着（ダウン、防水防寒ブーツ、手袋、耳当て、マフラー）をご用意ください。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "休暇村　乳頭温泉郷",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72803%2F72803.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "乳頭温泉郷　大釜温泉",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F59623%2F59623.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "ホテルグランド天空",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129680%2F129680.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "天然温泉　田沢湖レイクリゾート",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4624%2F4624.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "亀の井ホテル　田沢湖",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11222%2F11222.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "休暇村　乳頭温泉郷",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/72803/72803.jpg",
              rating: 4.55,
              reviews: 554,
              price: "¥17,500〜",
              access: "ＪＲ　田沢湖駅より羽後交通乳頭温泉行「休暇村」下車、徒歩０分",
              special: "美しいブナ林に囲まれた静かな宿です。温泉浴や森林浴が楽しめ、ここでは時間がゆっくりと流れています。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72803%2F72803.html",
              story: "十和田八幡平国立公園のブナの原生林に囲まれ、乳頭温泉郷の中で最も近代的な快適性を誇る名宿「休暇村 乳頭温泉郷」。館内には「田沢湖高原温泉（単純硫黄温泉）」と「乳頭温泉（ナトリウム・炭酸水素塩温泉）」という泉質の異なる2つの自家源泉が引かれており、贅沢な入り比べを満喫できます。特に冬のブナ林を望む露天風呂では、純白の雪とブナの木立を間近に仰ぎながら、ほのかな硫黄の香りに包まれる極上の雪見風呂を体験できます。夕食は秋田の味覚がずらりと並ぶビュッフェスタイルで、料理人が目の前で焼き上げる比内地鶏の炭火焼きや、地鶏ガラをじっくり煮込んだ黄金スープの本場「きりたんぽ鍋」が冷え切った身体に染み渡ります。",
              roomTip: "ブナ林側の和洋室がおすすめ。大きな窓いっぱいに広がる白銀の樹林帯と雪の結晶は、まるで絵画を眺めているような静けさです。",
              gourmetTip: "本場大館仕込みのきりたんぽ鍋は絶品。表面を香ばしく焼いたきりたんぽに舞茸やセリ、比内地鶏の旨味が凝縮した出汁がたっぷり染み込んでいます。",
              highlights: [
                "ブナ原生林に囲まれた2つの自家源泉＆比内地鶏きりたんぽビュッフェ",
                "乳頭温泉郷の湯めぐり拠点に最適＆清潔で近代的な快適空間",
                "手作りの焼きたてきりたんぽと秋田銘酒の豊富なラインナップ"
              ]
            },
            {
              id: 2,
              name: "乳頭温泉郷　大釜温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/59623/59623.jpg",
              rating: 3.54,
              reviews: 407,
              price: "¥10,000〜",
              access: "田沢湖駅よりバス羽後交通乳頭温泉郷行終点下車徒歩１分",
              special: "温泉ファンをうならせる乳頭温泉は24時間入浴OK。露天・内湯ともに男女別。家庭的な山里料理に舌鼓。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F59623%2F59623.html",
              story: "かつての木造校舎を移築して建てられた、どこか懐かしいノスタルジックな佇まいが旅情をそそる秘湯宿「大釜温泉」。玄関前の足湯からはもうもうと湯煙が立ち上り、木造建築の廊下を歩くたびに素朴な木の温もりが伝わってきます。浴室は男女別の内湯と雪見露天風呂を備え、湯口からは茶褐色のにごり湯（酸性含ヒ素・ナトリウム・塩化物硫酸塩泉）が掛け流されています。ピリッとした酸性の湯は殺菌力が高く、身体の芯まで熱がじっくりと浸透。湯めぐり号を利用して近隣の「鶴の湯」や「妙乃湯」など乳頭七湯を巡る拠点としても最高のロケーションを誇ります。",
              roomTip: "素朴な畳敷きの和室は昭和レトロな落ち着きに満ち、障子越しに舞い散る雪を眺めながら静かな時間を過ごせます。",
              gourmetTip: "山菜やきのこ、岩魚の塩焼きなど、秋田の山の幸を中心とした素朴で温かい田舎料理。手作りのきりたんぽ小鍋が心も胃袋も温めてくれます。",
              highlights: [
                "旧木造校舎を移築した秘湯風情＆茶褐色のにごり湯酸性泉雪見露天",
                "湯めぐり号で鶴の湯など乳頭七湯を巡るのに抜群のロケーション",
                "素朴で温かい手作りの田舎料理と素顔の秘湯情緒に浸る冬時間"
              ]
            },
            {
              id: 3,
              name: "ホテルグランド天空",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/129680/129680.jpg",
              rating: 4.46,
              reviews: 421,
              price: "¥6,800〜",
              access: "ＪＲ　田沢湖駅からバスで約36分　乳頭行バスでアルパこまくさ停留所か次の上高原バス停",
              special: "ブナ林に囲まれた田沢湖高原に佇む「ホテルグランド天空」は、全室から水深日本一の田沢湖が望めます",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129680%2F129680.html",
              story: "田沢湖を見下ろす高原の高台に堂々と建ち、客室や露天風呂から雄大なパノラマを一望できる「ホテルグランド天空」。日本一深い湖として知られる田沢湖の神秘的な瑠璃色の湖面と、雪化粧した秋田駒ヶ岳の稜線が視界いっぱいに広がります。天然温泉の大浴場と露天風呂には田沢湖高原温泉の良質な源泉が満ちており、澄み切った冬空と雪景色を仰ぎながらゆったりと湯浴みを楽しめます。乳頭温泉郷の入口に位置するため、秘湯めぐりと田沢湖周辺観光の双方へのアクセスが抜群。冬の高原リゾートとしての華やかさと落ち着きを兼ね備えています。",
              roomTip: "田沢湖眺望側の客室指定プランがイチオシ。朝日に輝く湖面のグラデーションや夕暮れの雪山の陰影を部屋の窓から独占できます。",
              gourmetTip: "秋田の郷土色を散りばめた季節会席。メインにはきりたんぽ鍋や秋田錦牛のステーキ、ハタハタのしょっつる仕立てなど、冬の秋田の美食が並びます。",
              highlights: [
                "田沢湖を見下ろす高台の絶景露天風呂＆比内地鶏と秋田錦牛の美食会席",
                "神秘の瑠璃色に輝く田沢湖パノラマ＆静寂に包まれる高原ステイ",
                "ハタハタのしょっつる仕立てや秋田美酒を個室風食事処で堪能"
              ]
            },
            {
              id: 4,
              name: "天然温泉　田沢湖レイクリゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4624/4624.jpg",
              rating: 4.17,
              reviews: 1963,
              price: "¥6,237〜",
              access: "JR秋田新幹線田沢湖駅からバスで２０分、盛岡Ｉ．Ｃから５０分。田沢湖駅から送迎バスにて約15分（要事前予約）",
              special: "静寂の美、田沢湖まで車で約15分　わんちゃんと一緒の宿泊も人気です♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4624%2F4624.html",
              story: "田沢湖畔に佇む北欧風のモダンなリゾートホテル「天然温泉 田沢湖レイクリゾート」。広々とした館内は木の温もりと開放感にあふれ、カップルからファミリーまで快適な冬滞在が叶います。自慢の大浴場「かたくりの湯」には美肌効果の高い単純硫黄温泉が注がれ、雪見露天風呂では高原の澄んだ空気を胸いっぱいに吸い込みながら心身をリフレッシュできます。夕食バイキングでは、職人が握る寿司や熱々の天ぷらに加え、秋田名物の比内地鶏きりたんぽ鍋、稲庭うどん、ハタハタの塩焼きなど、ご当地名物が勢揃い。愛犬と一緒に泊まれる専用客室も完備しています。",
              roomTip: "広々としたスーペリアツインや和洋室が快適。冬の田沢湖高原の自然林を望みながらゆったりと寛げます。",
              gourmetTip: "名物きりたんぽ鍋や郷土料理バイキング。秋田県産あきたこまちのツヤツヤご飯や、比内地鶏の濃厚な旨味スープが食べ放題で楽しめます。",
              highlights: [
                "美肌硫黄泉の雪見露天＆秋田名物郷土料理ビュッフェときりたんぽ鍋",
                "広々とした客室と充実の館内施設＆愛犬同伴対応ルームも完備",
                "寿司や天ぷらから稲庭うどんまで味わえる大満足のディナー"
              ]
            },
            {
              id: 5,
              name: "亀の井ホテル　田沢湖",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/11222/11222.jpg",
              rating: 4.05,
              reviews: 1661,
              price: "¥5,376〜",
              access: "JR田沢湖駅より乳頭温泉行バス約35分「杉谷地」下車　駒ケ岳登山口行きバス停まで徒歩約10分　乳頭温泉まで車で約10分",
              special: "ブナの森に包まれる泉質自慢の温泉と旬の郷土料理を味わうくつろぎの宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11222%2F11222.html",
              story: "秋田駒ヶ岳の裾野、標高約650mの高原に位置する「亀の井ホテル 田沢湖」。開放的なロビーには暖炉の温もりが広がり、北国の冬らしい旅情を感じさせてくれます。天然温泉の大浴場と露天風呂では、ほのかな硫黄の香りと肌をなめらかに包み込む上質な湯が旅の疲れを心地よく解き放ちます。宿泊者全員に夜間に無料で提供される「名物・夜鳴き担々麺」は、ピリッとした辛味と胡麻のコクが冬の夜にぴったりの名物サービス。乳頭温泉郷への湯めぐりバスの停留所も近く、冬のアクティビティや観光の拠点として絶大な安心感があります。",
              roomTip: "和モダンなツインベッドルームは居心地抜群。窓の外にはブナや白樺の雪景色が広がり、静寂な夜の眠りを約束します。",
              gourmetTip: "料理長特選の和食会席。秋田名物のきりたんぽ鍋はもちろん、季節の旬魚や秋田牛の陶板焼きなど、滋味豊かな北国の味覚を味わえます。",
              highlights: [
                "暖炉が迎える高原リゾート＆名湯露天風呂と名物無料夜鳴き担々麺",
                "乳頭温泉郷へのアクセス良好＆地場食材を活かしたこだわりの季節会席",
                "夜の小腹を満たす特製担々麺サービスと温かなスタッフのもてなし"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-700 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-900">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="冬の乳頭温泉郷・ブナ原生林の雪見露天風呂と立ち上る乳白色の湯けむり"
          fill
          priority
          className="object-cover object-center opacity-45 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/90 text-emerald-100 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-emerald-700/40">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>11月・12月限定 日本屈指の秘湯雪見旅</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">乳頭温泉郷の白銀秘湯めぐりで過ごす冬の旅（11・12月）！<br className="hidden sm:inline" /> ブナ原生林の雪見露天風呂と本場きりたんぽ鍋の宿5選</h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            十和田八幡平の深い山懐、樹齢数百年のブナ原生林が雪に包まれる季節。乳白色や茶褐色の湯けむりが舞い上がる雪見露天風呂に浸かり、囲炉裏端でいただく本場比内地鶏の出汁が染みた熱々きりたんぽ鍋。冬の日本が誇る究極の秘湯旅へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> 秋田県仙北市（乳頭温泉郷・田沢湖高原）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月乳頭温泉郷】ブナ原生林の雪見露天風呂と本！名宿5選","item":"https://croud-travel.pages.dev/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-700">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Secret Hot Spring & Winter Snow</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                雪深きブナの原生林に抱かれた、日本人の原風景が息づく桃源郷
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            秋田県東部、十和田八幡平国立公園に位置する乳頭山麓。その谷あいに点在する七つの温泉宿からなる「乳頭温泉郷」は、日本全国の温泉ファンが「人生で一度は訪れたい」と憧れる秘湯中の秘湯です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月中旬、色鮮やかだった錦秋のブナの葉が落ちると、北国からの初雪が音もなく舞い降ります。12月に入るとあたり一面はメートル級の深い雪に覆われ、静寂の世界が完成します。黒光りする太い梁の木造湯屋、湯気とともに立ち上る硫黄の香り、そして視界を埋め尽くす純白の樹氷。乳白色やエメラルドグリーン、茶褐色など、宿ごとに全く異なる多彩な泉質の源泉が雪見露天風呂に掛け流され、冷え切った冬の空気の中で浸かる湯浴みは、言葉を失うほどの法悦をもたらします。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            冬の乳頭温泉のもう一つの主役が、秋田の誇る郷土の味「きりたんぽ鍋」です。新米あきたこまちのご飯をすり鉢で軽く潰して杉の棒に巻きつけ、香ばしく炭火で焼き上げたきりたんぽ。日本三大地鶏・比内地鶏のガラから贅沢に取った黄金色のスープで、舞茸やゴボウ、シャキシャキの根付きセリとともに煮込む熱々の鍋は、一口すするごとに体の芯から寒さを吹き飛ばしてくれます。雪見酒に秋田の銘酒「新政」「高清水」を合わせれば、これ以上ない冬の贅沢が完結します。
          </p>
          <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-emerald-700" />
                乳頭温泉郷の冬は「宿泊者専用・湯めぐり号」の活用が賢い
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                雪道運転の心配なし。宿泊者限定の「湯めぐり帖」を購入すれば、専用巡回バス「湯めぐり号」で乳頭七湯の名湯露天を楽々ホッピングできます。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              厳選の乳頭・田沢湖名宿5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Winter Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月の冬の乳頭温泉郷で味わうべき3つの奇跡
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">ブナ原生林の雪見露天風呂</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                降りしきる粉雪を眺めながら入る乳白色のにごり湯。硫黄の香りと清冽な冬の森の空気に包まれる時間は、まさに秘境の極楽です。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">本場比内地鶏のきりたんぽ鍋</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                香ばしい炭火焼ききりたんぽと、濃厚な比内地鶏の黄金出汁。根付きセリのシャキシャキ感と舞茸の香りが織りなす本物の郷土鍋。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">七湯めぐりと田沢湖の碧</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                それぞれ泉質が異なる七つの名湯を巡る贅沢。雪化粧した秋田駒ヶ岳と、水深423mの日本一深い田沢湖の神秘的な瑠璃色の絶景。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Recommended Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月に泊まりたい乳頭温泉郷・田沢湖の厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              楽天トラベルの最新空室状況・宿泊プランと連携。ブナ林の国立公園リゾートから秘湯情緒あふれる名宿までを厳選。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel, index) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Hotel Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-stone-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs">
                          第{index + 1}選
                        </span>
                        <div className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-stone-400">({hotel.reviews}件のクチコミ)</span>
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
                        {hotel.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-stone-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                        {hotel.access}
                      </p>
                    </div>
                    <div className="text-left sm:text-right shrink-0">
                      <span className="text-xs text-stone-400 block">宿泊料金の目安（1名あたり）</span>
                      <span className="text-2xl font-extrabold text-emerald-800">{hotel.price}</span>
                    </div>
                  </div>

                  {/* Image & Story Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                      <Image
                        src={hotel.img}
                        alt={hotel.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/70">
                          <h4 className="text-xs font-bold text-emerald-900 flex items-center gap-1.5 mb-1">
                            <Coffee className="w-3.5 h-3.5" /> 客室選びのポイント
                          </h4>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            {hotel.roomTip}
                          </p>
                        </div>
                        <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/70">
                          <h4 className="text-xs font-bold text-rose-800 flex items-center gap-1.5 mb-1">
                            <Utensils className="w-3.5 h-3.5" /> 冬の料理・グルメのこだわり
                          </h4>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            {hotel.gourmetTip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="bg-emerald-50/50 rounded-2xl p-4 sm:p-5 border border-emerald-100/80 space-y-2.5">
                    <h4 className="text-xs font-bold text-emerald-950 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      この宿のおすすめポイント
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {hotel.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-stone-700">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <span className="text-xs text-stone-500 italic">
                      ※乳頭温泉郷の冬期宿泊は予約が大変取りにくいため、空室を見つけたら即座の確保をおすすめします。
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                    >
                      <span>楽天トラベルでプラン・空室を見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日 白銀の秘湯めぐりモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-700">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                初冬の乳頭温泉郷を満喫する「1泊2日 白銀の秘湯めぐりモデルコース」
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
            {/* Day 1 */}
            <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-200/80">
              <div className="flex items-center gap-2 pb-2 border-b border-emerald-200">
                <span className="px-3 py-1 rounded-full bg-emerald-900 text-white font-bold text-xs">1日目</span>
                <h3 className="font-bold text-stone-900 text-base">新幹線こまち号で秘境へ＆憧れの鶴の湯へ</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-emerald-900 shrink-0">12:30</span>
                  <div>
                    <strong>秋田新幹線「こまち」でJR田沢湖駅到着</strong>
                    <p className="text-stone-500 text-xs mt-0.5">東京駅から乗り換えなしで直通。駅前から羽後交通の路線バス「乳頭線」に乗車し、雪深き山道へ。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-emerald-900 shrink-0">13:30</span>
                  <div>
                    <strong>乳頭温泉郷に到着＆宿へチェックイン</strong>
                    <p className="text-stone-500 text-xs mt-0.5">ブナの原生林に囲まれた宿に荷物を置き、フロントで宿泊者限定の「湯めぐり帖」を購入。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-emerald-900 shrink-0">14:15</span>
                  <div>
                    <strong>巡回バス「湯めぐり号」で鶴の湯温泉へ</strong>
                    <p className="text-stone-500 text-xs mt-0.5">茅葺き屋根の本陣が雪に埋もれる幻想的な情景。足元からぷくぷくと湧き出る名物・乳白色混浴露天風呂を堪能。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-emerald-900 shrink-0">16:30</span>
                  <div>
                    <strong>宿へ戻り、自館の雪見露天風呂を満喫</strong>
                    <p className="text-stone-500 text-xs mt-0.5">ブナの木立に積もる雪を眺めながら、ほのかな硫黄泉で手足を伸ばす極上のリラックスタイム。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-emerald-900 shrink-0">18:30</span>
                  <div>
                    <strong>囲炉裏端でいただく本場比内地鶏のきりたんぽ鍋</strong>
                    <p className="text-stone-500 text-xs mt-0.5">香ばしい焼き目のきりたんぽに、濃厚な比内地鶏の出汁と根付きセリ。秋田銘酒「新政」や「雪の茅舎」とともに。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-emerald-900 shrink-0">21:00</span>
                  <div>
                    <strong>満天の星と雪灯りに包まれる夜露天</strong>
                    <p className="text-stone-500 text-xs mt-0.5">漆黒の原生林に降る雪と、湯煙がライトアップされた幻想的な夜の湯浴み。体の芯まで温まってぐっすり熟睡。</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-200/80">
              <div className="flex items-center gap-2 pb-2 border-b border-emerald-200">
                <span className="px-3 py-1 rounded-full bg-emerald-900 text-white font-bold text-xs">2日目</span>
                <h3 className="font-bold text-stone-900 text-base">神秘の田沢湖周遊と名物稲庭うどん</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-emerald-900 shrink-0">07:00</span>
                  <div>
                    <strong>清々しい朝の雪見露天風呂</strong>
                    <p className="text-stone-500 text-xs mt-0.5">夜の間に新雪が降り積もったブナの原生林を仰ぎながらの朝風呂。清冽な山の空気で頭がスッキリ冴え渡ります。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-emerald-900 shrink-0">08:00</span>
                  <div>
                    <strong>秋田の郷土色豊かな朝食膳</strong>
                    <p className="text-stone-500 text-xs mt-0.5">炊きたてあきたこまちご飯に、秋田名物「いぶりがっこ」や山菜小鉢、温泉卵で元気なエネルギーをチャージ。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-emerald-900 shrink-0">09:30</span>
                  <div>
                    <strong>チェックアウト＆路線バスで田沢湖畔へ</strong>
                    <p className="text-stone-500 text-xs mt-0.5">高原を下りながら日本一深い田沢湖へ。水深423mの不凍湖が魅せる神秘の瑠璃色パノラマ。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-emerald-900 shrink-0">10:30</span>
                  <div>
                    <strong>田沢湖名所めぐり（たつこ像＆御座石神社）</strong>
                    <p className="text-stone-500 text-xs mt-0.5">雪山を背景に金色に輝く伝説の「たつこ像」や、湖面に朱塗りの鳥居が浮かぶ絶景神社で記念撮影。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-emerald-900 shrink-0">12:30</span>
                  <div>
                    <strong>田沢湖駅前で名物「稲庭うどん」ランチ＆お土産</strong>
                    <p className="text-stone-500 text-xs mt-0.5">喉越しの滑らかな日本三大うどん「稲庭うどん」を温かい比内地鶏つけ汁で。角館の樺細工や地酒を購入して新幹線へ。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 泉質・温泉科学＆雪見入浴法 */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-700">
              <Footprints className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Onsen Science & Nature</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                乳頭温泉郷の七湯七色！多様な泉質メカニズムと雪見入浴の心得
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-emerald-600" />
                宿ごとに泉質が異なる「七湯七色」の奇跡
              </h3>
              <p>
                乳頭温泉郷の最大の特徴は、わずか数キロ圏内に点在する宿がそれぞれ独自の源泉井戸を持ち、泉質が全く異なる点にあります。
              </p>
              <p>
                鶴の湯の乳白色硫黄泉（美肌と保温）、大釜の茶褐色酸性塩化物泉（殺菌と皮膚病改善）、休暇村の炭酸水素塩泉（角質軟化）など、泉質の違いを肌で体感する湯巡りは世界でも稀な温泉体験です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                豪雪地帯での安全な露天風呂入浴作法
              </h3>
              <p>
                冬の乳頭温泉郷は外気温がマイナス5℃以下になるため、脱衣所から露天風呂までの移動時は足元の凍結に細心の注意を払いましょう。
              </p>
              <p>
                頭に冷たい水で濡らしたタオルを乗せて入浴することで、のぼせを防ぎながら長時間の心地よい雪見風呂を楽しむことができます。
              </p>
            </div>
          </div>
        </section>

        {/* お土産・ご当地スイーツ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-700">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Souvenirs & Crafts</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の秋田・乳頭温泉郷で手に入れたい厳選名物土産
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px]">秋田名物</span>
              <h3 className="font-bold text-stone-900">本場手作り いぶりがっこ</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                楢（なら）や桜の薪で燻製にした秋田の伝統たくあん。香ばしい燻製の香りとポリポリとした歯ごたえがクリームチーズや地酒に抜群。
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px]">伝統工芸</span>
              <h3 className="font-bold text-stone-900">角館 樺細工（桜皮細工）</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                山桜の樹皮を用いて作られる江戸時代からの伝統木工芸。防湿・密閉性に優れ、茶筒や名刺入れなど一生モノの実用工芸品として重宝されます。
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold text-[11px]">ご当地鍋</span>
              <h3 className="font-bold text-stone-900">比内地鶏きりたんぽ鍋セット</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                本場あきたこまちの香ばしいたんぽと濃厚な比内地鶏スープ、舞茸やセリがワンパッケージになったお土産。自宅で乳頭の冬の味を再現。
              </p>
            </div>
          </div>
        </section>

        {/* Practical Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-700">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Practical Winter Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の乳頭温泉郷 湯めぐりと寒さ対策の実用アドバイス
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Snowflake className="w-4 h-4 text-emerald-600" />
                雪山秘湯の防寒着とスノーシューズ
              </h3>
              <p>
                12月の乳頭温泉郷は気温がマイナス5℃以下になる日が多く、露天風呂への渡り廊下や脱衣所も非常に冷え込みます。脱ぎ着しやすい防寒着や長めのダウンコート、厚手の靴下を持参しましょう。
              </p>
              <p>
                宿の外を歩く際、雪道は踏み固められて滑りやすいため、靴底にしっかりとした滑り止めがついた完全防水のスノーブーツが必須です。宿によっては長靴の無料貸出もあります。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                秋田新幹線＋路線バスの快適アクセス
              </h3>
              <p>
                東京駅から秋田新幹線「こまち」で田沢湖駅まで直通約2時間50分。駅前から乳頭温泉行きの路線バスで約45分〜50分です。冬の山道は吹雪や圧雪があるため、公共交通機関の利用が最も安全です。
              </p>
              <p>
                各宿にチェックイン後は、宿泊者限定の「湯めぐり号」を活用して他の温泉を巡るのが便利。バスの運行ダイヤをフロントで事前に確認しておきましょう。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-700">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月・12月の乳頭温泉旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-emerald-800 font-extrabold">Q.</span>
                乳頭温泉郷の七湯は冬でもすべて営業していますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                乳頭七湯のうち「黒湯温泉」は豪雪のため11月上旬〜中旬から4月頃まで冬期休業に入ります。鶴の湯、妙乃湯、大釜、蟹場、孫六、休暇村の6つの宿は冬期も営業しており、白銀の秘湯めぐりを楽しむことができます（天候等により臨時休止の場合あり）。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-emerald-800 font-extrabold">Q.</span>
                有名な「鶴の湯温泉」の混浴露天風呂は女性でも入れますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                鶴の湯の混浴大露天風呂は白濁した乳白色の硫黄泉のため、湯船に入ってしまえば身体が透けて見える心配はありません。また、女性専用の大きな露天風呂や内湯（白湯・黒湯）も完備されているため、混浴に抵抗がある女性の方でも安心して名湯を堪能できます。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-emerald-800 font-extrabold">Q.</span>
                田沢湖周辺の観光名所や冬の見どころは？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                水深423.4mと日本一の深さを誇る田沢湖は、冬でも湖水が凍ることがなく、澄み切った瑠璃色（ラピスラズリブルー）の輝きを放ちます。湖畔に立つ黄金の「たつこ像」や、湖面に朱塗りの鳥居が浮かぶ「御座石神社」など、雪山を背景にした絶景フォトスポットが満載です。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-emerald-800 font-extrabold">Q.</span>
                冬の秋田名物「ハタハタ」とはどんな魚ですか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                ハタハタ（鰰）は11月下旬から12月の雷が鳴る荒れた日本海に産卵のため接岸する秋田の県魚です。プチプチとした弾ける食感がたまらない卵（ブリコ）を持った雌や、淡白で上品な白身を、伝統の魚醤「しょっつる鍋」や塩焼き、田楽でいただくのが冬の秋田の最高の贅沢です。
              </p>
            </div>
          </div>
        </section>

        {/* 内部リンク網羅（GEOリンク＆関連冬特集） */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Related Guides & Areas</span>
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
              href="/winter-aomori-sukayu-hakkoda-yukimi-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-emerald-50/60 border border-stone-200 hover:border-emerald-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">東北雪見秘湯</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-teal-900 transition-colors">
                青森酸ヶ湯温泉の千人風呂と八甲田雪見ステイ
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                総ヒバ造りの巨大な混浴千人風呂と濃厚な白濁硫黄泉、豪雪の秘湯。
              </p>
            </Link>

            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-emerald-50/60 border border-stone-200 hover:border-emerald-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">山形冬特集</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                銀山温泉の初雪と大正浪漫・白銀のガス灯宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                銀山川沿いに並ぶ木造建築群とオレンジのガス灯、尾花沢牛会席。
              </p>
            </Link>

            <Link 
              href="/winter-gunma-manza-snow-milky-hotspring-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-emerald-50/60 border border-stone-200 hover:border-emerald-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-sky-800 bg-sky-100/80 px-2 py-0.5 rounded">にごり湯特集</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-sky-900 transition-colors">
                万座温泉の標高1800m乳白色にごり湯と星空雪見風呂
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                日本一の硫黄含有量を誇る濃厚にごり湯と満天の星空を仰ぐパノラマ露天。
              </p>
            </Link>
          </div>

          {/* 都道府県GEOリンク */}
          <div className="pt-4 border-t border-stone-100 space-y-3">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              秋田県および東北エリアのおすすめ温泉宿一覧
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/prefectures/akita" className="px-3 py-1.5 bg-stone-100 hover:bg-emerald-100 text-stone-700 hover:text-emerald-900 rounded-lg transition-colors font-medium">秋田県の宿一覧</Link>
              <Link href="/prefectures/iwate" className="px-3 py-1.5 bg-stone-100 hover:bg-emerald-100 text-stone-700 hover:text-emerald-900 rounded-lg transition-colors font-medium">岩手県の宿一覧</Link>
              <Link href="/prefectures/aomori" className="px-3 py-1.5 bg-stone-100 hover:bg-emerald-100 text-stone-700 hover:text-emerald-900 rounded-lg transition-colors font-medium">青森県の宿一覧</Link>
              <Link href="/prefectures/yamagata" className="px-3 py-1.5 bg-stone-100 hover:bg-emerald-100 text-stone-700 hover:text-emerald-900 rounded-lg transition-colors font-medium">山形県の宿一覧</Link>
              <Link href="/prefectures/miyagi" className="px-3 py-1.5 bg-stone-100 hover:bg-emerald-100 text-stone-700 hover:text-emerald-900 rounded-lg transition-colors font-medium">宮城県の宿一覧</Link>
              <Link href="/prefectures/fukushima" className="px-3 py-1.5 bg-stone-100 hover:bg-emerald-100 text-stone-700 hover:text-emerald-900 rounded-lg transition-colors font-medium">福島県の宿一覧</Link>
            </div>
          
      <HubRelatedPosts currentSlug="winter-akita-nyuto-onsen-yukimi-kiritanpo-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
