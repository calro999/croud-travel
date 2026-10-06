import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月長門湯本温泉】山口県産和牛！名宿5選',
  description: '室町時代に住吉大明神の神託によって開かれた山口県最古の名湯「長門湯本温泉」。音信川のせせらぎと竹林の小径が冬の灯りに照らされる幻想的な温泉街。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '長門湯本温泉 宿泊 11月 12月, 長門湯本温泉 ふぐ 下関とらふぐ, 音信川 川床 冬灯り, 大谷山荘 長門湯本, 別邸 音信, 恩湯 美肌の湯, 山口 冬 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-yamaguchi-nagato-yumoto-onsen-fugu-stay/",
  },
  openGraph: {
    title: '【11・12月長門湯本温泉】山口県産和牛！名宿5選',
    description: '室町時代に住吉大明神の神託によって開かれた山口県最古の名湯「長門湯本温泉」。音信川のせせらぎと竹林の小径が冬の灯りに照らされる幻想的な温泉街。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-yamaguchi-nagato-yumoto-onsen-fugu-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月長門湯本温泉の冬情緒と名湯】音信川の冬灯りと開湯600年美肌泉・本場下関直送本とらふぐ＆山口県産和牛の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月長門湯本温泉の冬情緒と名湯】音信川の冬灯りと開湯600年美肌泉・本場下関直送本とらふぐ＆山口県産和牛の宿5選",
    description: "室町時代に住吉大明神の神託によって開かれた山口県最古の名湯「長門湯本温泉」。音信川のせせらぎと竹林の小径が冬の灯りに照らされる幻想的な温泉街。pH9.6を誇る化粧水のような美肌泉と、11月〜12月に最盛期を迎える本場下関直送の「活本とらふぐ」フルコースを堪能する名宿ガイド。",
  }
};

const faqList = [
  {
    "q": "長門湯本温泉の11月・12月の気候や降雪は？スタッドレスタイヤは必要？",
    "a": "長門湯本温泉は山口県北部の日本海側に位置しますが、積雪が多い地域ではありません。11月は秋の気配が残り日中は比較的過ごしやすいですが、朝晩は冷え込みます。12月に入ると冷たい日本海からの北風が吹き込み、時折みぞれや初雪が降る日もあります。幹線道路が長期間積雪・凍結することは稀ですが、12月中旬以降にお車で中国山地（美祢IC周辺など）を越えてお越しの際は、念のため冬用タイヤ（スタッドレスタイヤ）の装着またはチェーンの携行をおすすめします。"
  },
  {
    "q": "山口県の下関・仙崎の『本とらふぐ』の旬の時期は？なぜ冬が美味しい？",
    "a": "山口県は『ふく（福）』と呼ばれるフグの本場です。特に天然・極上の『本とらふぐ』は、水温が下がる11月から2月にかけて最も美味しくなります。寒さに耐えるために身が引き締まり、アミノ酸などの旨味成分が凝縮されるためです。薄く引いた透き通る『てっさ』は噛むほどに芳醇な甘みが広がり、熱々の『てっちり鍋』や骨付き身の唐揚げ、香ばしく炙ったヒレを入れた熱燗『ひれ酒』は、冬の長門湯本温泉でしか味わえない最高の贅沢です。"
  },
  {
    "q": "温泉街の中心にある立ち寄り公衆浴場『恩湯（おんとう）』とは？",
    "a": "『恩湯』は長門湯本温泉のシンボルであり、開湯約600年の歴史を持つ元湯です。室町時代に住吉大明神からのお告げによって発見された伝説に由来し、神仏からいただいたご恩の湯として親しまれてきました。2020年に伝統的な木造建築でスタイリッシュにリニューアルされ、浴槽の底の岩盤からプクプクと自噴するぬるめの新鮮な源泉（足元湧出）に浸かることができます。泉質はpH9.9のアルカリ性単純温泉で、極上の美肌効果を誇ります。"
  },
  {
    "q": "新山口駅や山口宇部空港からのアクセス方法は？",
    "a": "山陽新幹線の停車駅である『新山口駅』から、長門湯本温泉直行の路線バス（おとずれ号等）が毎日運行しており、約60分で温泉街に到着します。またJR美祢線を利用して長門湯本駅下車、徒歩約10分というルートもあります。山口宇部空港からは乗り合いタクシーやレンタカーで約70分です。温泉街は歩いて巡れるコンパクトな規模で、音信川沿いの散策路が美しく整備されています。"
  }
];

export default function NagatoWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-yamaguchi-nagato-yumoto-onsen-fugu-stay#article",
        "headline": "【11・12月長門湯本温泉の冬情緒と名湯】音信川の冬灯りと開湯600年美肌泉・本場下関直送本とらふぐ＆山口県産和牛の宿5選",
        "description": "室町時代に住吉大明神の神託によって開かれた山口県最古の名湯「長門湯本温泉」。音信川のせせらぎと竹林の小径が冬の灯りに照らされる幻想的な温泉街。pH9.6を誇る化粧水のような美肌泉と、11月〜12月に最盛期を迎える本場下関直送の「活本とらふぐ」フルコースを堪能する名宿ガイド。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-27T00:00:00+09:00",
        "dateModified": "2026-09-27T00:00:00+09:00",
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
          "@id": "https://croud-travel.pages.dev/winter-yamaguchi-nagato-yumoto-onsen-fugu-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-yamaguchi-nagato-yumoto-onsen-fugu-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "長門湯本温泉の11月・12月の気候や降雪は？スタッドレスタイヤは必要？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "長門湯本温泉は山口県北部の日本海側に位置しますが、積雪が多い地域ではありません。11月は秋の気配が残り日中は比較的過ごしやすいですが、朝晩は冷え込みます。12月に入ると冷たい日本海からの北風が吹き込み、時折みぞれや初雪が降る日もあります。幹線道路が長期間積雪・凍結することは稀ですが、12月中旬以降にお車で中国山地（美祢IC周辺など）を越えてお越しの際は、念のため冬用タイヤ（スタッドレスタイヤ）の装着またはチェーンの携行をおすすめします。"
            }
          },
          {
            "@type": "Question",
            "name": "山口県の下関・仙崎の『本とらふぐ』の旬の時期は？なぜ冬が美味しい？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "山口県は『ふく（福）』と呼ばれるフグの本場です。特に天然・極上の『本とらふぐ』は、水温が下がる11月から2月にかけて最も美味しくなります。寒さに耐えるために身が引き締まり、アミノ酸などの旨味成分が凝縮されるためです。薄く引いた透き通る『てっさ』は噛むほどに芳醇な甘みが広がり、熱々の『てっちり鍋』や骨付き身の唐揚げ、香ばしく炙ったヒレを入れた熱燗『ひれ酒』は、冬の長門湯本温泉でしか味わえない最高の贅沢です。"
            }
          },
          {
            "@type": "Question",
            "name": "温泉街の中心にある立ち寄り公衆浴場『恩湯（おんとう）』とは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "『恩湯』は長門湯本温泉のシンボルであり、開湯約600年の歴史を持つ元湯です。室町時代に住吉大明神からのお告げによって発見された伝説に由来し、神仏からいただいたご恩の湯として親しまれてきました。2020年に伝統的な木造建築でスタイリッシュにリニューアルされ、浴槽の底の岩盤からプクプクと自噴するぬるめの新鮮な源泉（足元湧出）に浸かることができます。泉質はpH9.9のアルカリ性単純温泉で、極上の美肌効果を誇ります。"
            }
          },
          {
            "@type": "Question",
            "name": "新山口駅や山口宇部空港からのアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "山陽新幹線の停車駅である『新山口駅』から、長門湯本温泉直行の路線バス（おとずれ号等）が毎日運行しており、約60分で温泉街に到着します。またJR美祢線を利用して長門湯本駅下車、徒歩約10分というルートもあります。山口宇部空港からは乗り合いタクシーやレンタカーで約70分です。温泉街は歩いて巡れるコンパクトな規模で、音信川沿いの散策路が美しく整備されています。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-yamaguchi-nagato-yumoto-onsen-fugu-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "山口県　長門湯本温泉　大谷山荘",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8178%2F8178.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "長門湯本温泉　別邸　音信",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80652%2F80652.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "長門湯本温泉　湯本観光ホテル　西京",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7243%2F7243.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "長門湯本温泉　山村別館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5670%2F5670.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "長門湯本温泉　楊貴妃浪漫の宿　玉仙閣",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14980%2F14980.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "山口県　長門湯本温泉　大谷山荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8178/8178.jpg",
              rating: 4.77,
              reviews: 1474,
              price: "¥23,100〜",
              access: "お車で角島・JR新山口駅へ60分／宇部空港へ70分／絶景元乃隅神社・萩へ35分／JR長門湯本駅より無料送迎5分",
              special: "山間の自然に佇む明治14年創業の温泉旅館。長州藩主も湯治に訪れた長門湯本温泉で、四季折々のお寛ぎを",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8178%2F8178.html",
              story: "創業百三十余年、歴代の総理大臣や各国の要人を迎えてきた山口県を代表する格式高い名旅館「大谷山荘」。音信川（おとずれがわ）の清流沿いに佇み、ロビーラウンジに響く滝の水音とピアノの生演奏が非日常へと誘います。大浴場「せせらぎの湯」や檜露天風呂では、初冬の澄み渡る夜空と川のせせらぎに包まれながら、pH9.6を誇る無色透明のとろりとした美肌泉を満喫。天体望遠鏡を備えた本格的な天体ドームも完備されており、冬の澄んだ星空を観察できるなど、大人の知的好奇心を刺激する極上のもてなしが息づいています。",
              roomTip: "音信川の清流を見下ろす露天風呂付き客室や、上質な和モダンツイン。初冬の川霧が晴れ渡る朝、窓辺から温泉街の山並みを眺めながら優雅な時間を過ごせます。",
              gourmetTip: "本場山口の冬の味覚を極めた特選会席。下関から直送される極上の本とらふぐを使った薄造り「てっさ」や熱々の「てっちり鍋」、香ばしいひれ酒、そして最高峰「やまぐち和牛」のフィレステーキなど、至高の美味に酔いしれる一夜。",
              highlights: [
                "総理大臣や各国首脳を迎えた格式誇る名宿＆せせらぎの湯・檜露天風呂と本格天体ドーム",
                "音信川の清流と初冬の澄んだ夜空を見上げる露天風呂＆贅を尽くした和モダン空間",
                "下関直送本とらふぐ薄造り「てっさ」＆てっちり鍋・やまぐち和牛フィレステーキ会席"
              ]
            },
            {
              id: 2,
              name: "長門湯本温泉　別邸　音信",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/80652/80652.jpg",
              rating: 4.62,
              reviews: 156,
              price: "¥51,700〜",
              access: "★ＪＲ長門湯本駅より無料送迎あり（無料）※事前予約制",
              special: "昔ながらの湯治宿の風情と、機能的で上質なリゾートのエッセンスが融合した「湯治モダン」がコンセプトです",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80652%2F80652.html",
              story: "「湯治モダニズム」をコンセプトに掲げ、日本の伝統的な宿文化と現代のリゾート様式を昇華させた最高級の離れ宿「別邸 音信（おとずれ）」。わずか18室の客室はすべて露天風呂を備えたスイート仕様。池を配した水盤テラスや茶室、本格スパが揃い、凛とした初冬の静寂が館内全体を包み込みます。客室専用の露天風呂には、長門湯本の源泉がこんこんと注がれ、湯船から見上げる冬の星空は格別の美しさ。専任のスタッフによる細やかな気配りとともに、誰にも邪魔されない完全なプライベートステイが叶います。",
              roomTip: "水盤庭園を望むメゾネットスイートや広々としたテラス付き客室。初冬の冷気を感じながら、いつでも好きな時に専用露天風呂のぬくもりに身を委ねることができます。",
              gourmetTip: "料理長が一期一会の想いを込めて仕立てる至高の日本料理。冬の仙崎港で揚がる活本とらふぐの贅沢な刺身や白子焼き、幻の長州黒かしわ、A5ランク山口県産黒毛和牛の炭火焼きなど、器から盛り付けまで芸術品のような料理を個室で堪能。",
              highlights: [
                "全18室に客室露天風呂を備えた最高峰ラグジュアリー離れ＆水盤テラスと本格スパ",
                "誰にも邪魔されない至高のプライベート湯治＆源泉かけ流しの贅沢な湯浴み体験",
                "冬の活本とらふぐ白子焼き＆長州黒かしわ・A5ランク山口県産和牛の極上懐石"
              ]
            },
            {
              id: 3,
              name: "長門湯本温泉　湯本観光ホテル　西京",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7243/7243.jpg",
              rating: 4.00,
              reviews: 930,
              price: "¥6,800〜",
              access: "中国道美称ICより車で30分／JR美祢線長門湯本駅より徒歩10分",
              special: "広々とした大浴場や多彩な館内施設をお楽しみいただける温泉旅館■無料屋外駐車場100台収容可能！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7243%2F7243.html",
              story: "長門湯本温泉の高台に位置し、大浴場や露天風呂、ボウリング場や足湯など多彩なエンターテインメント施設を兼ね備えた大型名宿「湯本観光ホテル 西京」。広大な敷地を誇る露天風呂は、緑豊かな庭園に囲まれ、冬の澄んだ空気を吸い込みながらゆったりと名湯に浸かることができます。アルカリ性の滑らかな湯は、肌の古い角質を落としすべすべに整えてくれる美肌効果が抜群。館内では毎夜様々なイベントや大衆演劇が開催されることもあり、三世代家族やグループ旅行でも笑顔あふれる滞在が楽しめます。",
              roomTip: "ゆったりとくつろげる純和風客室やバリアフリー対応の洋室。窓からは初冬の長門湯本温泉街の街並みと周囲の穏やかな山並みを一望できます。",
              gourmetTip: "日本海と瀬戸内海の味覚が一堂に会する豪華季節会席。冬の定番であるふぐ刺しやふぐちり小鍋、山口県産牛のすき焼き、仙崎名物の蒲鉾や旬魚のお造りなど、地元の味覚がふんだんに盛り込まれたボリューム満点の料理が楽しめます。",
              highlights: [
                "庭園露天風呂と多彩な館内エンタメ施設＆家族やグループで楽しめる充実のリゾートステイ",
                "pH9.6を誇る化粧水のような美肌泉＆初冬の澄んだ星空を眺める広々とした露天風呂",
                "ふぐ刺し＆ふぐちり小鍋・山口県産牛すき焼きと仙崎直送鮮魚の豪華会席"
              ]
            },
            {
              id: 4,
              name: "長門湯本温泉　山村別館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5670/5670.jpg",
              rating: 4.26,
              reviews: 1024,
              price: "¥8,800〜",
              access: "マイカー・中国縦貫自動車道美称ＩＣより長門湯本車で３０分 ＪＲ長門湯本駅より徒歩１３分（送迎あり）",
              special: "本場フィンランドのロウリュウ式バレルサウナ！四季を観望できる洋風造りの露天風呂を備えた宿です",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5670%2F5670.html",
              story: "音信川のせせらぎが心地よい温泉街の中心部に佇み、心温まる家庭的なもてなしと細やかな料理でリピーターに愛される純和風旅館「山村別館」。木と畳の温もりが心地よい大浴場と露天風呂には、長門湯本が誇る美肌の単純温泉が注がれ、湯船を満たす滑らかな湯が冷えた身体をやさしく解きほぐします。静かで落ち着いた館内には季節の花が生けられ、初冬の温泉街のそぞろ歩きにも絶好のロケーション。肩肘張らずにのんびりと冬の温泉情緒に浸りたい方に最適の宿です。",
              roomTip: "清流のせせらぎが聞こえる静かな和室。畳の香りに包まれながら、初冬の夕暮れ時に温かいお茶と季節の和菓子をいただく贅沢な寛ぎが味わえます。",
              gourmetTip: "板前が丹精込めて手作りする季節の美味会席。冬の贅沢とらふぐ刺しをはじめ、長州どりのつみれ鍋、県産黒毛和牛の陶板焼き、仙崎港直送の鮮魚など、素材の良さをストレートに活かした心づくしの料理が好評です。",
              highlights: [
                "音信川のせせらぎを聞く純和風宿＆細やかな心づくしのおもてなしと季節の美味会席",
                "温泉街そぞろ歩きに絶好のロケーション＆肩肘張らずにくつろげる温かな滞在",
                "手作りとらふぐ刺し＆長州どりつみれ鍋・県産黒毛和牛陶板焼き会席"
              ]
            },
            {
              id: 5,
              name: "長門湯本温泉　楊貴妃浪漫の宿　玉仙閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14980/14980.jpg",
              rating: 4.41,
              reviews: 787,
              price: "¥11,000〜",
              access: "ＪＲ長門湯本駅より徒歩約７分 送迎有、要予約／中国自動車道美祢ＩＣより３０分／路線バス停：門前（もんぜん）より徒歩１分",
              special: "２０２４年にお食事会場と客室４室をリノベーション、ライトアップされた長門湯本温泉街まで徒歩5分！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14980%2F14980.html",
              story: "世界三大美女の一人・楊貴妃が長門の地に漂着したというロマンあふれる伝説をテーマにした個性豊かな名宿「楊貴妃浪漫の宿 玉仙閣」。宿の名物は、中国の宮廷風呂を再現した深さ1.2メートルの立ち湯「貴妃湯」。立ったまま入浴することで水圧が身体全体に均等にかかり、血行促進と美脚効果が期待できるユニークな名湯です。初冬の凛とした空気の中、エキゾチックな異国情緒と和のくつろぎが融合した不思議な魅力に包まれ、女性の一人旅やカップルにも高い人気を誇ります。",
              roomTip: "オリエンタルな情緒が漂うモダン和室や広々とした二間続きの客室。窓の外に広がる冬の温泉街の情緒を楽しみながら、ゆったりと過ごせます。",
              gourmetTip: "美と健康をテーマにした「楊貴妃会席」。下関直送の本とらふぐ料理や、コラーゲンたっぷりの地鶏鍋、山口県産ブランド牛のグリル、旬の仙崎鮮魚など、身体の内側から美しくなれるような美味が並びます。",
              highlights: [
                "深さ1.2mの中国宮廷風立ち湯「貴妃湯」＆楊貴妃伝説が薫る美と健康のオリエンタル空間",
                "立ち湯の水圧効果で血行促進と美脚＆楊貴妃の美意識を受け継ぐ癒やしの湯処",
                "本とらふぐ料理＆コラーゲン地鶏鍋・山口県産牛グリルを味わう特選楊貴妃会席"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"
          alt="長門湯本温泉・音信川の冬の竹あかりと開湯600年の名湯露天風呂"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/90 text-indigo-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-indigo-800/50">
            <Eye className="w-4 h-4 text-indigo-300" />
            <span>11月・12月限定 山口最古名湯の冬情緒＆下関直送本とらふぐ特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月長門湯本温泉の冬情緒と名湯】<br className="hidden sm:inline" />
            音信川の冬灯りと開湯600年美肌泉・本場下関直送本とらふぐ＆山口県産和牛の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            室町時代に応永の神託により拓かれた山口県最古の名湯「長門湯本温泉」。清流・音信川の川床と竹林が揺らめく灯りに包まれる初冬。pH9.6を誇る化粧水のような美肌泉と、11月〜12月に最盛期を迎える下関直送の極上「活本とらふぐ」フルコースに酔いしれる優雅な冬旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> 山口県長門市深川湯本</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Nagato Yumoto 600-Year Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                住吉大明神の神託がもたらした霊泉。音信川の冬灯りと本場ふぐの贅
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            山口県北部の山あいを流れる清流・音信川（おとずれがわ）。その両岸に風情ある温泉街を形成する「長門湯本温泉（ながとゆもとおんせん）」は、室町時代の応永34年（1427年）、曹洞宗の名刹・大寧寺の定庵禅師が住吉大明神からのお告げを受けて発見したと伝えられる、山口県で最も古い歴史を誇る名湯です。江戸時代には萩藩の歴代藩主も湯治に訪れ、専用の「御茶屋屋敷」が構えられるなど、長州藩の奥座敷として重用されてきました。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            近年、日本を代表する温泉街再生プロジェクトにより劇的に生まれ変わり、音信川沿いには川床テラスや飛び石、竹林の小径、クラフトカフェなどが美しく整備されました。11月から12月にかけての初冬は、空気が澄み渡り、夕暮れとともに温泉街全体が暖色のランタンや竹あかりの温かな光に包まれます。川のせせらぎを聞きながら浴衣に羽織を重ねてそぞろ歩き、立ち寄り湯「恩湯」の足元湧出の源泉に浸かる時間は、まさに大人の贅沢そのものです。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして冬の長門湯本を訪れる最大の歓びが、本場・山口県が世界に誇る冬の味覚の王様「活本とらふぐ」です。11月から12月は水温の低下とともに身が最も引き締まり、濃厚な旨味が凝縮される最高の旬。皿の絵柄が透けるほど薄く美しく引かれた「てっさ」、出汁の旨味が染みわたる「てっちり鍋」、香ばしいヒレ酒、そして霜降り極上の「やまぐち和牛」とともに味わう特別な夜は、至福の記憶として心に刻まれます。
          </p>
          
          <div className="bg-indigo-50/70 rounded-2xl p-5 border border-indigo-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-indigo-700" />
                11月・12月長門湯本温泉 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                音信川の幻想的な竹あかり冬情緒・開湯600年のpH9.6美肌泉・本場下関直送の活本とらふぐフルコース・最高峰やまぐち和牛ステーキ・足元湧出の名湯「恩湯」
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-indigo-800 hover:bg-indigo-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-indigo-800" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#otozure-winter" className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
              <span>1. 音信川の冬情緒：川床テラス・飛び石と竹あかりライトアップ</span>
            </a>
            <a href="#spring-feature" className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
              <span>2. まるで天然の化粧水：pH9.6を誇る強アルカリ性美肌泉</span>
            </a>
            <a href="#onto-heritage" className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
              <span>3. 開湯600年の元湯「恩湯」：岩盤から直接湧く奇跡の足元湧出</span>
            </a>
            <a href="#hotels" className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたい長門湯本温泉の厳選名宿5選</span>
            </a>
            <a href="#gourmet" className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
              <span>5. 本場山口冬の味覚：下関直送活本とらふぐ＆やまぐち和牛</span>
            </a>
            <a href="#itinerary" className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 王道モデルコース（新幹線直行バスと元乃隅神社）</span>
            </a>
            <a href="#faq" className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と冬の気候・アクセス情報</span>
            </a>
          </nav>
        </section>

        {/* Otozure Winter Section */}
        <section id="otozure-winter" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Otozure River Atmosphere</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                音信川の冬情緒：川床テラス・飛び石と竹あかりライトアップ
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            清流・音信川の川沿いには、誰でも腰を下ろしてくつろげる川床テラスや飛び石、情緒豊かな木製ベンチが配されています。11月中旬の紅葉の落ち葉が川面を流れる晩秋から、12月のキリッと冷えた冬空へと季節が移り変わる頃、夕暮れとともに「竹あかり」のライトアップが点灯します。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            竹筒から漏れる柔らかな暖色の光が川面に揺らめき、浴衣姿で歩く観光客の足元を照らし出します。川沿いのカフェで温かいホットチョコレートや萩焼の器で淹れた珈琲をテイクアウトし、冬の川風を感じながらのんびりと過ごす時間は、長門湯本温泉ならではの洗練された過ごし方です。
          </p>
        </section>

        {/* Hot Spring Features */}
        <section id="spring-feature" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Pure Mineral Qualities</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                まるで天然の化粧水：pH9.6以上の高アルカリ性単純温泉
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600" />
                とろりとした肌触りの美肌泉
              </h3>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                pH9.6を超える強アルカリ性単純温泉。古い角質を優しく溶かしてクレンジングし、入浴した瞬間に肌がツルツルになる極上の「美肌の湯」です。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600" />
                刺激が少なく身体に優しい
              </h3>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                成分がマイルドな単純温泉のため、赤ちゃんからご高齢の方まで安心して長湯を楽しめます。湯疲れしにくく、日々のストレスを穏やかに解きほぐします。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600" />
                岩盤から直接湧き出る新鮮な源泉
              </h3>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                共同浴場「恩湯」をはじめ、温泉街の各宿には深層の岩盤から空気に触れずに自噴する新鮮な源泉が注がれ、大自然の生命力をそのまま肌で吸収できます。
              </p>
            </div>
          </div>
        </section>

        {/* Onto Heritage Section */}
        <section id="onto-heritage" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Landmark className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Sacred Bath Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                開湯600年の元湯「恩湯」：岩盤から直接湧く奇跡の足元湧出
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            長門湯本温泉の中心に位置する立ち寄り湯「恩湯（おんとう）」。室町時代に大寧寺の禅師が住吉大明神からのお告げによって掘り当てた元湯であり、2020年に伝統的な木造建築の美しい佇まいでリニューアルされました。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            恩湯の最大の特徴は、浴槽の底の岩盤から空気に一度も触れずにぷくぷくと自然湧出する「足元湧出」の奇跡の源泉です。湯温は約39度とぬるめのため、身体に負担をかけずに20分〜30分とじっくり浸かることができ、深部からじんわりと温まります。湯上がり後のお肌のしっとり感は感動的です。
          </p>
        </section>

        {/* Hotel List */}
        <section id="hotels" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-indigo-800 uppercase tracking-widest">Selected Ryokans</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              11月・12月に泊まりたい長門湯本温泉の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              音信川の冬情緒を望む露天風呂、本場下関直送の本とらふぐと山口県産牛を堪能できる宿を厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-200/80 hover:shadow-md transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-indigo-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                      第{hotel.id}位
                    </div>
                  </div>
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center text-amber-500 font-bold text-sm">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                            <span>{hotel.rating}</span>
                          </div>
                          <span className="text-xs text-stone-400">（口コミ {hotel.reviews}件）</span>
                        </div>
                        <span className="text-xs text-indigo-800 font-semibold bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                          長門湯本温泉・音信川
                        </span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {hotel.story}
                      </p>

                      <div className="space-y-2 pt-2 border-t border-stone-100 text-xs sm:text-sm">
                        <div className="flex items-start gap-2 text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
                          <span><strong>客室の魅力：</strong>{hotel.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2 text-stone-700">
                          <Utensils className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" />
                          <span><strong>冬の料理：</strong>{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2">
                        {hotel.highlights.map((hl: string, hIdx: number) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-stone-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0 mt-1.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1泊2食付／2名1室時1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-extrabold text-indigo-800">
                          {hotel.price}
                        </span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-800 hover:bg-indigo-900 text-white font-bold rounded-xl shadow-md transition-all duration-200 text-sm hover:scale-[1.02]"
                      >
                        <span>空室状況・プラン一覧</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gourmet Section */}
        <section id="gourmet" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Winter Delicacies</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                本場山口が誇る冬の至高美味：「本とらふぐ」と「やまぐち和牛」
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-stone-700">
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-700" />
                下関直送！冬の味覚の王様「本とらふぐ」
              </h3>
              <p className="leading-relaxed text-sm">
                11月から2月にかけて、身の締まりと旨味が頂点を極める本とらふぐ。職人が熟練の包丁技で極限まで薄く引いた「てっさ」は、噛み締めるほどに上品で濃厚な甘みが口中に広がります。熱々の昆布出汁で野菜とともに煮込む「てっちり鍋」や、香ばしい「ふぐ唐揚げ」、炙ったヒレを注いだ熱々の「ひれ酒」まで、本場ならではのフルコースは冬の醍醐味です。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-700" />
                清らかな水と温暖な風土が育む「やまぐち和牛」
              </h3>
              <p className="leading-relaxed text-sm">
                山口県の美しい自然の中で、丹精込めて肥育された黒毛和牛。赤身のきめ細やかな肉質と、融点の低い上質な不飽和脂肪酸を含んだサシの甘みが特徴です。炭火ステーキやすき焼きで味わうと、肉汁がじゅわっと溢れ出し、重すぎず軽やかな旨味が喉を通り抜けます。
              </p>
            </div>
          </div>
        </section>

        {/* Itinerary Section */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-indigo-50 text-indigo-800">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-800 uppercase tracking-widest">Recommended 2-Day Tour</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1泊2日 王道モデルコース：新山口駅から直行！音信川の冬灯りと本場ふぐ満喫の旅
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-indigo-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-indigo-800 uppercase tracking-wider">【1日目】新幹線から直行バスへ〜音信川散策と名宿チェックイン</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                12:15 山陽新幹線でJR新山口駅に到着 → 直行バス「おとずれ号」に乗車
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                中国山地の穏やかな冬景色を眺めながら約60分で長門湯本温泉にスムーズ到着。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                13:30 温泉街のカフェでランチ＆音信川の飛び石と竹林の小径散歩
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                川床カフェで長州鶏サンドや珈琲を味わい、木々の紅葉残る川沿いをのんびり散策。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                15:00 旅館へチェックイン → アルカリ性美肌泉の露天風呂へ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                化粧水のような滑らかな名湯で肌を潤す。湯上がりは夕暮れの温泉街へ足湯散歩。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                18:30 本場下関直送の活本とらふぐフルコース＆山口県産和牛会席
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                てっさ、てっちり鍋、香ばしいひれ酒、そして極上牛ステーキの贅を尽くしたディナー。
              </p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">【2日目】朝の清涼露天風呂〜立ち寄り湯「恩湯」と元乃隅神社へ</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                08:00 朝の露天風呂 → 仙崎の干物と地産米の贅沢和朝食
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                朝の清々しい川風を感じながら入る朝風呂。ふっくら炊き上がった山口県産コシヒカリの朝食。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                10:00 立ち寄り公衆浴場「恩湯」で足元湧出の名湯体験＆元乃隅神社へドライブ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                岩盤から直接湧き出る霊泉で温まった後、日本海に面した朱色の鳥居が連なる「元乃隅神社」の絶景を見学して帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        

        {/* Internal Links / Related Guides */}
        <section className="bg-indigo-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Related Winter Hot Spring Guides</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい中国・四国の冬・美食温泉特集
            </h2>
            <p className="text-xs sm:text-sm text-indigo-100/90 leading-relaxed">
              11月・12月ならではの雪景色や旬の郷土グルメを堪能できる全国各地の名湯ガイドを多数公開中。次の旅の計画にぜひお役立てください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-shimonoseki-fugu-torafugu-luxury-stay"
              className="bg-indigo-900/80 hover:bg-indigo-900 p-4 rounded-2xl transition border border-indigo-800/50 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">山口・下関</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">下関 本場とらふぐフルコースと関門海峡絶景の宿</h3>
            </Link>
            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="bg-indigo-900/80 hover:bg-indigo-900 p-4 rounded-2xl transition border border-indigo-800/50 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">鳥取・三朝</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">三朝温泉 世界屈指のラジウム泉と松葉ガニ会席の宿</h3>
            </Link>
            <Link 
              href="/winter-tottori-kaike-onsen-matsuba-crab-stay"
              className="bg-indigo-900/80 hover:bg-indigo-900 p-4 rounded-2xl transition border border-indigo-800/50 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">鳥取・皆生</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">皆生温泉 大山雪景色と境港活松葉ガニ解禁の宿</h3>
            </Link>
            <Link 
              href="/winter-ehime-dogo-onsen-taimeshi-heritage-stay"
              className="bg-indigo-900/80 hover:bg-indigo-900 p-4 rounded-2xl transition border border-indigo-800/50 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">愛媛・道後</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">道後温泉 日本最古の湯と名物宇和島鯛めしの宿</h3>
            </Link>
            <Link 
              href="/winter-saga-ureshino-onsen-bihada-yudofu-stay"
              className="bg-indigo-900/80 hover:bg-indigo-900 p-4 rounded-2xl transition border border-indigo-800/50 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">佐賀・嬉野</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">嬉野温泉 日本三大美肌の湯ととろける温泉湯豆腐の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-indigo-900/80 hover:bg-indigo-900 p-4 rounded-2xl transition border border-indigo-800/50 block group"
            >
              <span className="text-xs text-indigo-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-indigo-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-yamaguchi-nagato-yumoto-onsen-fugu-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
