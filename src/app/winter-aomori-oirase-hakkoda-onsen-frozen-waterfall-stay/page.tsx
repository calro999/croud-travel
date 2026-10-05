import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Mountain
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月奥入瀬渓流温泉と八甲田山樹氷の初冬秘湯】幻想的な氷瀑ライトアップ・白濁名湯露天風呂と青森倉石牛＆陸奥湾ホタテ会席の宿5選",
  description: "11月から12月にかけて青森県・十和田八甲田エリアは、奥入瀬渓流の滝が凍り始める神秘的な「氷瀑（ひょうばく）」や、八甲田山のブナ林やアオモリトドマツが純白の雪と氷を纏う「初期樹氷（スノーモンスター）」の季節を迎えます。千人風呂で知られる酸ヶ湯や足元湧出の蔦温泉、白銀のブナ原生林を望む八甲田リゾートの白濁硫黄泉、雪見露天風呂に浸かり、青森が誇る極上銘柄牛「倉石牛」や陸奥湾直送の甘みたっぷりの肉厚ホタテ、地酒を味わう至極の秘湯宿5選を徹底解説。",
  keywords: '奥入瀬渓流 温泉 宿泊, 八甲田 温泉 11月 12月, 奥入瀬 氷瀑, 酸ヶ湯温泉, 八甲田ホテル, 蔦温泉旅館, ホテル城ヶ倉, 青森 倉石牛, 陸奥湾 ホタテ, 青森 雪見露天',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-aomori-oirase-hakkoda-onsen-frozen-waterfall-stay/",
  },
  openGraph: {
    title: "【11・12月奥入瀬渓流温泉と八甲田山樹氷の初冬秘湯】幻想的な氷瀑ライトアップ・白濁名湯露天風呂と青森倉石牛＆陸奥湾ホタテ会席の宿5選",
    description: "11月から12月にかけて青森県・十和田八甲田エリアは、奥入瀬渓流の滝が凍り始める神秘的な「氷瀑（ひょうばく）」や、八甲田山のブナ林やアオモリトドマツが純白の雪と氷を纏う「初期樹氷（スノーモンスター）」の季節を迎えます。千人風呂で知られる酸ヶ湯や足元湧出の蔦温泉、白銀のブナ原生林を望む八甲田リゾートの白濁硫黄泉、雪見露天風呂に浸かり、青森が誇る極上銘柄牛「倉石牛」や陸奥湾直送の甘みたっぷりの肉厚ホタテ、地酒を味わう至極の秘湯宿5選を徹底解説。",
    url: 'https://croud-travel.com/winter-aomori-oirase-hakkoda-onsen-frozen-waterfall-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月奥入瀬渓流温泉と八甲田山樹氷の初冬秘湯】幻想的な氷瀑ライトアップ・白濁名湯露天風呂と青森倉石牛＆陸奥湾ホタテ会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月奥入瀬渓流温泉と八甲田山樹氷の初冬秘湯】幻想的な氷瀑ライトアップ・白濁名湯露天風呂と青森倉石牛＆陸奥湾ホタテ会席の宿5選",
    description: "11月から12月にかけて青森県・十和田八甲田エリアは、奥入瀬渓流の滝が凍り始める神秘的な「氷瀑（ひょうばく）」や、八甲田山のブナ林やアオモリトドマツが純白の雪と氷を纏う「初期樹氷（スノーモンスター）」の季節を迎えます。千人風呂で知られる酸ヶ湯や足元湧出の蔦温泉、白銀のブナ原生林を望む八甲田リゾートの白濁硫黄泉、雪見露天風呂に浸かり、青森が誇る極上銘柄牛「倉石牛」や陸奥湾直送の甘みたっぷりの肉厚ホタテ、地酒を味わう至極の秘湯宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "奥入瀬渓流と八甲田の11月・12月の気温や雪景色・道路状況は？",
    "a": "11月上旬から八甲田山頂周辺で初冠雪が始まり、11月中旬以降は酸ヶ湯や八甲田ホテル周辺で本格的な積雪期に入ります。12月に入ると気温は氷点下（日中でも0℃〜マイナス4℃、夜間はマイナス8℃以下）となり、奥入瀬渓流の滝も凍り始めて美しい氷瀑が形成されます。国道103号（ゴールドライン）の八甲田酸ヶ湯〜谷地温泉間は11月下旬から冬期通行止めとなるため、アクセス経路の事前確認が必要です。車で訪れる場合は必ずスタッドレスタイヤ（4WD車推奨）を装着してください。"
  },
  {
    "q": "冬の奥入瀬渓流で名物の『氷瀑』やライトアップを見るには？",
    "a": "奥入瀬渓流には「銚子大滝」や「雲井の滝」「馬門岩」など多数の滝があり、12月中旬頃から激しい水流が寒さで徐々に凍結し、巨大な氷の柱「氷瀑（ひょうばく）」や氷柱（つらら）を形成します。星野リゾート奥入瀬渓流ホテル宿泊者専用のツアーや、十和田市が主催する「奥入瀬渓流氷瀑ツアー（昼・夜ライトアップバス）」に参加すると、専門ガイドの解説付きで幻想的に青白くライトアップされた氷瀑を安全に鑑賞できます。"
  },
  {
    "q": "酸ヶ湯温泉や蔦温泉の泉質の違いや湯浴みの注意点は？",
    "a": "酸ヶ湯温泉はpH1.8前後の強酸性「酸性・含硫黄-鉄-ナトリウム-硫酸塩・塩化物温泉」で、白濁した濃厚な硫黄の香りとピリッとした肌ざわりが特徴。強力な殺菌力と血行促進・温まり効果がありますが、酸性が強いため目に入らないよう注意し、肌がデリケートな方は入浴後に真水で洗い流すのがおすすめです。一方の蔦温泉は弱アルカリ性・中性の「ナトリウム・カルシウム-硫酸塩・炭酸水素塩・塩化物泉」で、足元から湧き出る生まれたての無色透明な湯が肌をしっとり包み込みます。"
  },
  {
    "q": "青森・八甲田エリアで11月・12月に味わうべきご当地冬グルメは？",
    "a": "冬の青森は海の幸・山の幸の宝庫です。陸奥湾で育つ肉厚で甘みが凝縮された「ホタテ貝」、津軽海峡で水揚げされる冬の本マグロやヒラメ、そして幻の銘柄黒毛和牛「倉石牛（くらいしぎゅう）」のステーキやすき焼きが絶品です。また、冬野菜や山菜、凍み豆腐を細かく刻んで煮込む津軽の伝統郷土料理「けの汁」や、十和田名物の「牛バラ焼き」、蜜がたっぷり入った冬の青森りんごスイーツも格別です。"
  },
  {
    "q": "青森駅や新青森駅から冬の八甲田・奥入瀬へのアクセスは？",
    "a": "新幹線が発着するJR新青森駅やJR青森駅から、奥入瀬渓流ホテル・八甲田ホテル・ホテル城ヶ倉などは冬季に宿泊者専用の無料送迎バスを運行しています（要事前予約）。また、JRバス東北の「みずうみ号」も運行されています。雪道運転に不安のある方は、自家用車やレンタカーを避け、各宿の無料送迎バスや路線バスの利用を強くおすすめします。"
  }
];

export default function OiraseOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-aomori-oirase-hakkoda-onsen-frozen-waterfall-stay#article",
        "headline": "【11・12月奥入瀬渓流温泉と八甲田山樹氷の初冬秘湯】幻想的な氷瀑ライトアップ・白濁名湯露天風呂と青森倉石牛＆陸奥湾ホタテ会席の宿5選",
        "description": "11月から12月にかけて青森県・十和田八甲田エリアは、奥入瀬渓流の滝が凍り始める神秘的な「氷瀑（ひょうばく）」や、八甲田山のブナ林やアオモリトドマツが純白の雪と氷を纏う「初期樹氷（スノーモンスター）」の季節を迎えます。千人風呂で知られる酸ヶ湯や足元湧出の蔦温泉、白銀のブナ原生林を望む八甲田リゾートの白濁硫黄泉、雪見露天風呂に浸かり、青森が誇る極上銘柄牛「倉石牛」や陸奥湾直送の甘みたっぷりの肉厚ホタテ、地酒を味わう至極の秘湯宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-28T00:00:00+09:00",
        "dateModified": "2026-09-28T00:00:00+09:00",
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
          "@id": "https://croud-travel.com/winter-aomori-oirase-hakkoda-onsen-frozen-waterfall-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-aomori-oirase-hakkoda-onsen-frozen-waterfall-stay#faq",
        "mainEntity": faqList.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "奥入瀬渓流ホテル　ｂｙ　星野リゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40434/40434.jpg",
              rating: 4.35,
              reviews: 1269,
              price: "¥31,500〜",
              access: "東北新幹線　八戸駅／無料送迎バス（要予約）、青森駅／有料送迎バス（要予約）、ＪＲバス　十和田湖行き、奥入瀬渓流館下車",
              special: "日本屈指の景勝地奥入瀬渓流。その畔に佇むリゾートホテルで大自然が演出する非日常空間をご堪能下さい",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40434%2F40434.html",
              story: "奥入瀬渓流の畔に唯一佇む、星野リゾート屈指のネイチャーラグジュアリーホテル「奥入瀬渓流ホテル ｂｙ 星野リゾート」。11月下旬から12月にかけて渓流沿いの樹木や滝は徐々に凍てつき、冬限定の神秘的な「氷瀑（ひょうばく）」が姿を現します。館内の露天風呂には、本物の氷瀑を再現した「氷瀑露天風呂」が設えられ、夜には青白くライトアップされた氷の造形美を眺めながら温かい名湯に浸かる幻想的な湯浴みが体験できます。岡本太郎作の巨大暖炉「森の神話」が鎮座するラウンジで、薪の炎を眺めながら過ごす冬の宵は格別の贅沢です。",
              roomTip: "渓流を望む半露天風呂付き客室またはモダン和室。大きな窓の外を流れる雪景色の渓流を眼下に眺め、せせらぎの音を聞きながら誰にも気兼ねのないプライベート温泉を満喫。",
              gourmetTip: "フレンチレストラン「Sonore（ソノール）」またはビュッフェレストラン「青森りんごキッチン」。青森県産牛のローストや陸奥湾産帆立のグラタン、旬のりんごを使った独創的なデザートが並びます。",
              highlights: [
                "奥入瀬渓流沿い唯一のリゾート＆冬限定の青く輝く「氷瀑露天風呂」",
                "岡本太郎作の巨大暖炉「森の神話」＆氷瀑ライトアップ冬のガイドツアー",
                "青森りんごを使った創作料理や陸奥湾産ホタテ・県産牛の極上フレンチ"
              ]
            },
            {
              id: 2,
              name: "酸ヶ湯温泉　八甲田ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40565/40565.jpg",
              rating: 4.57,
              reviews: 407,
              price: "¥32,395〜",
              access: "ＪＲ青森駅よりＪＲバスで７０分／青森空港より車で４０分／新青森駅～無料送迎あり（要予約）",
              special: "雪道でも安心！新青森駅から無料送迎運行中～大自然に抱かれた日本最大級のログホテルで、特別な休日を～",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40565%2F40565.html",
              story: "標高約900メートル、八甲田連峰の深山幽谷に佇む日本最大級の洋風ログ建築リゾート「酸ヶ湯温泉 八甲田ホテル」。カナダ産の大径レッドシダーを贅沢に組み上げた重厚なロッジで、一歩足を踏み入れると木の芳醇な香りとクラシックな静謐さに包まれます。客室やレストランからは、初雪を被った八甲田のブナ原生林が一望でき、冬の訪れとともに静寂の白銀世界が広がります。館内の大浴場には酸ヶ湯温泉と同じ強酸性の硫黄泉とは異なる、肌当たりの柔らかな自家源泉「ナトリウム・カルシウム・炭酸水素塩・硫酸塩泉」が注がれ、身体の芯までぽかぽかに温まります。",
              roomTip: "ブナ原生林側の洋室ツインまたは特別室メゾネット。天井の高い木の温もりに抱かれながら、窓の外に広がる八甲田の白銀パノラマと野鳥の姿を眺める静かな休日を堪能。",
              gourmetTip: "メインダイニング「MeDeRu」での本格フレンチまたは和食会席。青森の最高峰ブランド黒毛和牛「倉石牛」のフィレステーキや、津軽海峡直送の本マグロ、近海アワビを取り入れた極上コース。",
              highlights: [
                "日本最大級のカナディアン・ログリゾート＆八甲田山麓の静寂な美肌自家源泉",
                "ブナ原生林に囲まれた総木造ロッジ＆本格フレンチと倉石牛ステーキ",
                "メインダイニング「MeDeRu」で味わう最高級倉石牛フィレ肉と津軽の味覚"
              ]
            },
            {
              id: 3,
              name: "酸ヶ湯温泉旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41009/41009.jpg",
              rating: 4.41,
              reviews: 1535,
              price: "¥15,675〜",
              access: "ＪＲ　青森駅より十和田湖行ＪＲバスで７０分",
              special: "広さ１６０畳の大浴場「ひば千人風呂」にぜひ一度お入り下さい。昔ながらの混浴を守っています。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41009%2F41009.html",
              story: "江戸時代・貞享元年の開湯以来、300年以上にわたり湯治場としての伝統を受け継ぐ日本を代表する名湯「酸ヶ湯温泉旅館」。総ヒバ造りの巨大な「ヒバ千人風呂」は160畳もの広さを誇り、熱湯・四分六分の湯・鹿の湯・滝湯など複数の異なる源泉が贅沢に掛け流されています。もうもうと立ち込める白い湯煙と、木造建築の荘厳な梁、乳白色に濁る強酸性の硫黄泉は、日本古来の温泉文化の極致。11月から12月にかけて豪雪地帯・八甲田は本格的な冬へと移り変わり、宿の外には白銀の雪壁と樹氷の世界が広がります。",
              roomTip: "旅館棟の落ち着いた和室または湯治棟。ヒバの香りが漂う館内で温泉三昧の時間を過ごし、窓の外に降るしんしんとした雪の音に耳を傾ける本物の湯治情緒を味わえます。",
              gourmetTip: "滋味あふれる山の恵みを取り入れた湯治膳や会席料理。八甲田山麓の山菜や根菜を煮込んだ青森の郷土汁「けの汁」、津軽鶏の鍋物、近海の新鮮なホタテや刺身を地酒「田酒」とともに堪能。",
              highlights: [
                "開湯300年・160畳の総ヒバ造り「ヒバ千人風呂」＆白濁濃厚な強酸性硫黄泉",
                "熱湯・四分六分の湯・鹿の湯・打たせ湯など多彩な源泉掛け流し湯めぐり",
                "滋味深い青森の伝統郷土汁「けの汁」と山の幸・陸奥湾ホタテを味わう湯治膳"
              ]
            },
            {
              id: 4,
              name: "蔦温泉旅館－足元から源泉湧出の自噴温泉－",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/142919/142919.jpg",
              rating: 4.78,
              reviews: 376,
              price: "¥21,300〜",
              access: "七戸十和田駅よりお車にて１時間／青森駅よりお車にて1時間20分",
              special: "約千年前から源泉のやさしい湯が湧き出てくる全国でも希少な「源泉湧き流し」の湯をお楽しみ下さい",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142919%2F142919.html",
              story: "奥入瀬渓流の入口近く、十和田樹海に囲まれた神秘的な蔦沼の畔にひっそりと佇む秘湯の一軒宿「蔦温泉旅館」。平安時代・久安3年に開湯したとされる歴史ある宿で、最大の特長は日本でも極めて希少な「足元湧出の自噴温泉」。「久安の湯」「泉響の湯」ともに、浴槽の底に敷き詰められたブナのすのこの隙間から、空気に一度も触れていない新鮮無垢な源泉がぷくぷくと自然湧出しています。初冬の冷気の中、静まり返ったブナ原生林の雪景色を眺めながら入る生まれたての名湯は、温泉ファン垂涎の感動体験です。",
              roomTip: "本館の歴史ある純和風客室または西館のモダン和室。大正ロマンの風情漂う木造建築の温もりの中、窓の外に広がる雪化粧したブナの梢を眺めながら静かな時間を過ごせます。",
              gourmetTip: "お食事処でいただく青森の四季会席。陸奥湾産の肉厚なホタテの陶板焼きをはじめ、県産牛のすき焼き、清流で育った岩魚の塩焼き、十和田名物の冬野菜鍋など、地の味覚を贅沢に味わえます。",
              highlights: [
                "平安開湯・浴槽底から湧き出る「奇跡の足元湧出自噴温泉」＆ブナ原生林の雪景色",
                "大正ロマン薫る木造建築と静まり返った蔦沼雪原へのネイチャー散策",
                "陸奥湾ホタテ陶板焼きと県産牛すき焼き・清流岩魚が彩る十和田山里会席"
              ]
            },
            {
              id: 5,
              name: "八甲田城ヶ倉温泉　ホテル城ヶ倉－ＨＯＴＥＬ　Ｊｏｇａｋｕｒａ－",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/79432/79432.jpg",
              rating: 4.51,
              reviews: 421,
              price: "¥5,900〜",
              access: "ＪＲ　青森駅よりＪＲバス十和田湖行き乗車後、城ヶ倉温泉前にて下車",
              special: "源泉かけ流し温泉を八甲田の自然と共に楽しむ北欧風マウンテンリゾート。地元青森の旬の味覚をご用意。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79432%2F79432.html",
              story: "八甲田山の中腹、城ヶ倉渓谷を見下ろす大自然の中に佇む北欧風の山岳リゾートホテル「八甲田城ヶ倉温泉 ホテル城ヶ倉」。初冬になると周辺のブナ林やアオモリトドマツは白銀の雪に覆われ、八甲田ロープウェーや城ヶ倉大橋への冬観光の拠点としても抜群の立地を誇ります。宿自慢の天然温泉露天風呂は、通年で雪見露天を楽しめる八甲田でも数少ないスポットで、初雪が舞い散るブナ林を目の前に望むパノラマビューは圧巻。木のぬくもりを活かした館内には本格的なサウナも完備され、冬のウェルネス滞在が叶います。",
              roomTip: "マウンテンビューのツインルームまたは和洋室。窓いっぱいに広がる八甲田の白銀パノラマを眺めながら、北欧テイストの落ち着いたインテリアの中でゆったりと寛げます。",
              gourmetTip: "レストランで供される青森の旬を散りばめた和洋折衷ディナー。柔らかくジューシーな県産黒毛和牛ステーキや、八戸港直送の新鮮な魚介造り、冬の温野菜ポトフなど心温まる料理が揃います。",
              highlights: [
                "通年オープンの八甲田山岳リゾート＆ブナ林に囲まれた大自然の雪見露天風呂",
                "八甲田の白銀パノラマを望む客室＆本格フィンランドサウナ完備",
                "八戸港直送の鮮魚造りと青森県産黒毛和牛ステーキを堪能する和洋折衷会席"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-teal-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 text-white overflow-hidden py-16 sm:py-24 border-b border-teal-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_50%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-medium backdrop-blur-sm">
            <Snowflake className="w-4 h-4 text-teal-400 animate-spin-slow" />
            <span>11月・12月 冬の青森・奥入瀬＆八甲田特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月奥入瀬渓流温泉と八甲田山樹氷の初冬秘湯】幻想的な氷瀑ライトアップ・白濁名湯露天風呂と青森倉石牛＆陸奥湾ホタテ会席の宿5選
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-4xl">
            11月から12月にかけて、青森県・奥入瀬渓流と八甲田連峰は、厳しい寒さと日本海の雪雲が織りなす息をのむような白銀の芸術世界へと変貌します。渓流の激流が凍てついて青く輝く「氷瀑（ひょうばく）」、八甲田のブナ原生林やアオモリトドマツに純白の雪と氷が張り付く「初期樹氷（スノーモンスター）」、そして300年の歴史を誇る総ヒバ造り千人風呂や足元湧出の奇跡の秘湯。雪見露天風呂で温まり、青森最高峰のブランド黒毛和牛「倉石牛」や陸奥湾直送の甘みたっぷりのホタテを地酒とともに味わう、至福の冬旅をお届けします。
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 11月中旬〜12月が見頃</span>
            <span className="flex items-center gap-1.5"><Mountain className="w-4 h-4 text-teal-400" /> 八甲田山樹氷＆氷瀑</span>
            <span className="flex items-center gap-1.5"><Waves className="w-4 h-4 text-teal-400" /> 酸性硫黄泉・足元湧出泉</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-teal-400" /> 青森倉石牛・陸奥湾ホタテ</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Section 1: Intro Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Seasonal Highlights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の奥入瀬・八甲田が誇る冬の奇跡と秘湯の魅力
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              十和田八幡平国立公園に属する奥入瀬渓流と八甲田連峰は、本州でも最も早く本格的な冬が訪れるエリアの一つです。11月に入ると標高の高い八甲田山頂から徐々に初雪が降り積もり、11月下旬から12月にかけてはブナの巨木が立ち並ぶ原生林が一面純白の雪原へと塗り替えられます。八甲田山頂周辺では、氷点下の過冷却水滴が針葉樹に吹き付けられて凍結する「樹氷（スノーモンスター）」が徐々に成長を始め、静寂に包まれた神秘的な自然美を創り出します。
            </p>
            <p>
              奥入瀬渓流の冬の主役は、なんといっても「氷瀑（ひょうばく）」です。銚子大滝や馬門岩などの名瀑から滴り落ちる水滴が、連日の厳しい寒さによって幾重にも重なって凍りつき、まるで巨大な青白いシャンデリアのように渓流沿いを彩ります。夜間にはライトアップツアーが運行され、漆黒の森の中に青く浮かび上がる氷の芸術は、訪れる人々を圧倒します。
            </p>
            <p>
              そして、寒さで冷えた身体を包み込むのは、日本有数の歴史と薬効を誇る名湯の数々です。開湯300年を超える酸ヶ湯温泉の総ヒバ造り「ヒバ千人風呂」で白濁した強酸性硫黄泉の湯煙に包まれ、蔦温泉では浴槽の底板からぷくぷくと自然自噴する生まれたての名湯を堪能。夕食には、柔らかな肉質と芳醇な香りを誇る青森の銘牛「倉石牛」のステーキや、冬の荒波で身を引き締めた陸奥湾の肉厚ホタテ、地酒「田酒」や「八仙」を味わう、贅を尽くした美食のひとときが待っています。
            </p>
          </div>
        </section>

        {/* Section 2: Deep Dive into Onsen Chemistry & Gastronomy */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Onsen Science & Tohoku Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                八甲田の強酸性硫黄泉と蔦温泉の足元自噴、冬の陸奥湾海鮮の真価
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-teal-700" />
              <span>pH1.8の火山性強酸性泉と、空気に触れない「完全自噴生温泉」の神秘</span>
            </h3>
            <p>
              八甲田・十和田エリアの温泉が全国の湯治客や温泉通を惹きつけてやまない理由は、地球のマグマの息吹をダイレクトに感じる泉質の特異性にあります。標高900mに位置する酸ヶ湯温泉は、pH1.8という強烈な酸性度を誇る「酸性・含硫黄-鉄-ナトリウム-硫酸塩・塩化物温泉」です。豊富な遊離硫化水素と鉄イオンが溶け込んだ白濁の湯は、毛細血管を強力に拡張させて血流を劇的に改善し、慢性的な神経痛や冷え性を芯から解きほぐします。
            </p>
            <p>
              これと鮮やかな対比をなすのが、ブナ原生林の奥底に湧く蔦温泉の「足元湧出温泉」です。通常、温泉はポンプで汲み上げられたりパイプを通る過程で空気に触れ、成分の酸化が始まりますが、蔦温泉ではブナの浴槽の底板の隙間から源泉が自然湧出しています。40℃前後の生まれたての無色透明な炭酸水素塩・硫酸塩泉は、空気に一度も触れていない純度100%の生温泉。肌の角質を優しく整え、シルクをまとったかのような潤いをもたらします。
            </p>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 pt-2">
              <Utensils className="w-4 h-4 text-teal-700" />
              <span>幻の黒毛和牛「倉石牛」と、冬の冷水で甘みが極まる陸奥湾ホタテ</span>
            </h3>
            <p>
              青森の冬の夜長を彩る料理には、厳寒の気候が生み出す驚くべき旨味が凝縮されています。青森県南部地方の清らかな空気と良質な牧草で手塩にかけて育てられる「倉石牛（くらいしぎゅう）」は、年間出荷頭数が極めて少ない幻の黒毛和牛。きめ細かなサシ（霜降り）は融点が低く、熱を加えると甘い香りを放ち、舌の上でとろけるような至高の食感を生み出します。
            </p>
            <p>
              また、八甲田山系と白神山地からミネラル豊富な雪解け水が注ぎ込む陸奥湾は、日本屈指のホタテの産地です。11月から12月にかけて海水温が急激に低下すると、ホタテは凍結を防ぐために細胞内にグリコーゲンを大量に蓄積します。これにより、貝柱の甘みと旨味が年間で最高のピークに達し、肉厚なホタテを炭火焼きや刺身で頬張ると、口いっぱいに濃厚な海のミルクが広がります。これに八甲田山麓の根菜をじっくり煮込んだ郷土汁「けの汁」と、青森が世界に誇る銘酒「田酒」の純米酒が合わさることで、至福の東北冬旅が完成します。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-teal-700 text-teal-700" />
              <span>Rakuten Travel Verified Secret Hot Springs</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              11月・12月におすすめの奥入瀬・八甲田名湯の宿5選
            </h2>
            <p className="text-sm text-slate-600">
              楽天トラベルの最新APIデータに基づき、雪見露天の絶景、源泉掛け流しの泉質、倉石牛や陸奥湾ホタテの美食評価が高い名宿を厳選しました。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div 
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 flex flex-col md:flex-row group"
              >
                {/* Image */}
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 overflow-hidden">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    第{h.id}選
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 text-slate-900 text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-sm backdrop-blur-sm flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{h.rating}</span>
                    <span className="text-slate-400 font-normal">({h.reviews}件)</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                        {h.name}
                      </h3>
                    </div>
                    <p className="text-xs text-teal-800 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                      <span>{h.special}</span>
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    {/* Room & Gourmet Tips */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="font-bold text-slate-800">おすすめの客室：</span>
                        <span>{h.roomTip}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <span className="font-bold text-slate-800">注目の冬グルメ：</span>
                        <span>{h.gourmetTip}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="grid grid-cols-1 gap-1.5 pt-1 text-xs text-slate-700">
                      {h.highlights.map((hl, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer & CTA */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[11px] text-slate-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base sm:text-lg font-extrabold text-slate-900">
                        {h.price}
                      </span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-800 to-teal-900 hover:from-teal-900 hover:to-slate-900 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-sm hover:shadow transition-all group/btn"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Winter Model Itinerary */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                奥入瀬氷瀑と八甲田秘湯を巡る1泊2日冬モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-4 text-slate-700 text-sm sm:text-base">
            <div className="border-l-2 border-teal-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-teal-800 text-white px-2 py-0.5 rounded">1日目 午前〜午後</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">新青森駅出発〜八甲田ロープウェー樹氷観賞と城ヶ倉大橋絶景</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                東北新幹線で新青森駅に到着後、送迎バスやレンタカーで八甲田山麓へ。八甲田ロープウェーに乗車し、山頂公園駅から眼下に広がる純白のブナ林と初期樹氷の360度大パノラマを堪能。途中、日本一の上路式アーチ橋「城ヶ倉大橋」から白銀の渓谷を見下ろした後、奥入瀬または八甲田の温泉宿へチェックイン。
              </p>
            </div>

            <div className="border-l-2 border-teal-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-teal-800 text-white px-2 py-0.5 rounded">1日目 夕方〜夜</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">白濁秘湯雪見露天〜倉石牛と陸奥湾ホタテ会席＆氷瀑ライトアップ鑑賞</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                宿に到着後は名湯露天風呂へ。立ち上る湯煙の向こうに広がる雪景色を眺めながら温まり、夕食には最高級倉石牛ステーキや陸奥湾産ホタテの陶板焼きを地酒とともに味わいます。夜はライトアップされた幻想的な奥入瀬の氷瀑ツアーに参加し、青く照らし出された氷柱の迫力に息をのみます。
              </p>
            </div>

            <div className="border-l-2 border-teal-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-teal-800 text-white px-2 py-0.5 rounded">2日目 早朝〜午前</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">静寂の雪原散策〜酸ヶ湯ヒバ千人風呂や蔦温泉の足元自噴湯めぐり</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                朝の澄んだ空気の中、雪に覆われた静謐なブナの森をスノーシューで軽く散策。宿をチェックアウトした後は、酸ヶ湯温泉の歴史ある総ヒバ千人風呂で白濁硫黄泉に浸かるか、蔦温泉でブナの板から湧く生まれたての自噴泉を体験し、秘湯のハシゴを満喫します。
              </p>
            </div>

            <div className="border-l-2 border-teal-800 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-teal-800 text-white px-2 py-0.5 rounded">2日目 午後</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">十和田湖畔と十和田バラ焼きランチ〜青森駅でお土産選び</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                十和田湖畔の休屋で静まり返った湖面を眺め、名物の「十和田牛バラ焼き」や温かい山菜そばをランチに。青森駅前の「A-FACTORY」や「ねぶたの家 ワ・ラッセ」に立ち寄り、青森シードルやりんごパイ、地酒をお土産に購入して新幹線で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Travel Preparation */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Travel Preparation</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の八甲田・奥入瀬の気候と防寒装備・冬期交通対策
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-teal-700" />
                <span>厳しい寒さに備える防寒服装</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月中旬以降の八甲田・奥入瀬は日中でも氷点下近くまで下がり、12月に入るとマイナス5℃〜マイナス10℃前後の厳しい真冬日になります。防風・防水性のある厚手ダウンジャケット、ヒートテック等の保温下着、厚手のフリースやセーターを重ね着してください。氷瀑見学や雪道歩行には、滑り止めの付いた防水スノーブーツ、厚手の手袋、耳まで覆うニット帽、マフラーが欠かせません。
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>冬期道路閉鎖と送迎バスの活用</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                八甲田山を越える国道103号（酸ヶ湯〜谷地温泉間）は例年11月下旬から冬期通行止めとなります。山道は完全な圧雪・凍結路面となり、地吹雪によるホワイトアウトも発生するため、雪道運転に不慣れな方の車利用は避け、JR新青森駅や青森駅からの各宿の無料送迎バスやJR路線バスを必ず利用しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                よくある質問（FAQ）と奥入瀬・八甲田の冬旅アドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-teal-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Related Tohoku & Winter Hotspring Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい東北の冬名湯＆全国の雪見露天特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月ならではの雪景色や冬の郷土味覚を味わう東北・東日本の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-yamagata-zao-onsen-snow-jyuhyo-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">山形・蔵王温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">白銀の樹氷群と強酸性硫黄泉露天風呂・極上山形牛すき焼きの宿</h3>
            </Link>
            <Link 
              href="/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">秋田・乳頭温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">秘湯白濁雪見露天と本場きりたんぽ鍋・比内地鶏会席の宿</h3>
            </Link>
            <Link 
              href="/winter-miyagi-naruko-onsen-yukimi-sendai-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">宮城・鳴子温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">多彩な湯めぐりと雪見露天風呂・最高級仙台牛ステーキの宿</h3>
            </Link>
            <Link 
              href="/winter-iwate-hanamaki-onsen-yukimi-maesawa-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">岩手・花巻温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">渓流雪見露天風呂と最高峰前沢牛すき焼き・宮沢賢治ゆかりの宿</h3>
            </Link>
            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">山形・銀山温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">ガス灯照らす大正ロマン雪景色と名湯・尾花沢牛会席の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
