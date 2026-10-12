import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Footprints, Trees, Moon
} from 'lucide-react';

export const metadata: Metadata = {
  title: '黒川温泉で過ごす冬の旅（11・12月）！竹灯籠が彩る渓流露天風呂と阿蘇あか牛！名宿5選',
  description: '11月から12月にかけて阿蘇外輪山の冷涼な風が吹き抜ける熊本・黒川温泉。12月中旬から田の原川の渓流に幻想的な竹灯籠が灯る冬の風物詩「湯あかり」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '黒川温泉 宿泊 11月 12月, 黒川温泉 湯あかり, 黒川温泉 入湯手形, あか牛 温泉 宿, 黒川温泉 おすすめ 旅館, 熊本 馬刺し 温泉, 黒川温泉 冬 モデルコース',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kumamoto-kurokawa-onsen-yuakari-stay/",
  },
  openGraph: {
    title: '黒川温泉で過ごす冬の旅（11・12月）！竹灯籠が彩る渓流露天風呂と阿蘇あか牛！名宿5選',
    description: '11月から12月にかけて阿蘇外輪山の冷涼な風が吹き抜ける熊本・黒川温泉。12月中旬から田の原川の渓流に幻想的な竹灯籠が灯る冬の風物詩「湯あかり」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kumamoto-kurokawa-onsen-yuakari-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月黒川温泉の湯あかりと秘湯情緒】竹灯籠が彩る渓流露天風呂と阿蘇あか牛・肥後会席の名宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "黒川温泉の湯あかりと秘湯情緒で過ごす冬の旅（11・12月）！竹灯籠が彩る渓流露天風呂と阿蘇あか牛・肥後会席の名宿5選",
    description: "11月から12月にかけて阿蘇外輪山の冷涼な風が吹き抜ける熊本・黒川温泉。12月中旬から田の原川の渓流に幻想的な竹灯籠が灯る冬の風物詩「湯あかり」、名物「入湯手形」で巡る湯量豊かな野趣あふれる露天風呂。阿蘇あか牛の溶岩焼きステーキや本場極上馬刺しの美食に酔いしれる冬旅ガイド。",
  }
};

export default function KurokawaWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-kumamoto-kurokawa-onsen-yuakari-stay#article",
        "headline": "【11・12月黒川温泉の湯あかりと秘湯情緒】竹灯籠が彩る渓流露天風呂と阿蘇あか牛・肥後会席の名宿5選",
        "description": "11月から12月にかけて阿蘇外輪山の冷涼な風が吹き抜ける熊本・黒川温泉。12月中旬から田の原川の渓流に幻想的な竹灯籠が灯る冬の風物詩「湯あかり」、名物「入湯手形」で巡る湯量豊かな野趣あふれる露天風呂。阿蘇あか牛の溶岩焼きステーキや本場極上馬刺しの美食に酔いしれる冬旅ガイド。",
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
          "@id": "https://croud-travel.pages.dev/winter-kumamoto-kurokawa-onsen-yuakari-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-kumamoto-kurokawa-onsen-yuakari-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "黒川温泉の「湯あかり」はいつからいつまで開催されますか？点灯時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "黒川温泉の冬の風物詩「湯あかり」は、例年12月中旬（または下旬）から翌年3月末〜4月上旬まで開催されます。点灯時間は日没（概ね17時頃）から22時までです。田の原川の渓流沿いや丸鈴橋周辺、川端通りなどに数百個の竹鞠灯籠や筒灯籠が設置され、柔らかな橙色の光が水面と湯けむりを照らし出す幻想的な光景を楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "黒川温泉の11月・12月の気温と積雪、車でのアクセス注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "黒川温泉は標高約700m前後の阿蘇外輪山山麓に位置するため、熊本市内や福岡市内よりも気温が約5〜7度低くなります。11月は朝晩の冷え込みが強く（最低気温3〜5度）、12月に入ると朝晩は氷点下に達します。12月中旬以降は寒波によって積雪や路面凍結が発生することがあるため、お車の場合は冬用タイヤ（スタッドレスタイヤ）の装着またはチェーンの携行が必須です。厚手の防寒コート、手袋、マフラーを必ずご用意ください。"
            }
          },
          {
            "@type": "Question",
            "name": "「入湯手形」の仕組みと使い方のルールを教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "入湯手形は地元小国杉で作られた木製の手形で、黒川温泉旅館組合の案内所「風の舎」または加盟各旅館で1枚1,500円（税込）で購入できます。手形1枚につき加盟旅館の指定露天風呂の中からお好きな3箇所に入浴できるか、または2箇所入浴＋飲食やお土産の利用券1回分として使えます。有効期限は半年間あり、日帰りだけでなく宿泊中の湯めぐりにも最適です。"
            }
          },
          {
            "@type": "Question",
            "name": "黒川温泉で絶対に味わうべき地元名物グルメは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "阿蘇の広大な草原で放牧された脂肪分が少なく赤身の旨味が濃厚な「阿蘇あか牛」のステーキ・溶岩焼き、本場熊本ならではの新鮮な「極上霜降り馬刺し」、具だくさんの汁に小麦粉を練った団子を入れた郷土料理「だご汁」、濃厚でコクのある「小国ジャージー牛乳」のスイーツやプリン、ピリッとした辛みが食欲をそそる「高菜めし」が定番の名物グルメです。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-kumamoto-kurokawa-onsen-yuakari-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "黒川温泉　優彩別館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151280%2F151280.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "黒川温泉　やまびこ旅館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67974%2F67974.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "黒川温泉　旅館　奥の湯",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54108%2F54108.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "黒川温泉　ふもと旅館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54971%2F54971.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "黒川温泉　瀬の本高原ホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37963%2F37963.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "黒川温泉　優彩別館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/151280/151280.jpg",
              rating: 3.87,
              reviews: 143,
              price: "¥11,055〜",
              access: "ＪＲ豊肥線　阿蘇駅より別府行バスで約５０分　黒川温泉下車徒歩１０分",
              special: "湯峡の響き優彩の夕朝食付プランの販売スタート！その他のプランも優彩のバーラウンジ、大浴場利用可能です",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151280%2F151280.html",
              story: "田の原川の清流沿いに佇み、温泉街の中心部にありながら広大な敷地と落ち着いた日本美を湛える「優彩別館」。宿の象徴は、竹林と渓流のせせらぎに包まれた開放感抜群の露天風呂と、木肌の温もりを生かした大浴場です。11月の晩秋から12月にかけて冷え込みが厳しくなるにつれ、もうもうと立ち上る湯けむりと冷涼な山の空気とのコントラストが際立ちます。黒川ならではの柔らかな弱酸性単純泉が体を優しく包み込み、日頃の緊張を芯から解きほぐしてくれます。館内は和モダンな意匠で統一され、天文台や足湯サロンなど、静かな夜をゆったり過ごす大人の寛ぎ空間が充実しています。",
              roomTip: "川のせせらぎが心地よい渓流側客室がおすすめ。夜になると窓の外に幻想的な竹灯籠の明かりが揺らめき、黒川ならではの冬情緒を静かに堪能できます。",
              gourmetTip: "夕食は熊本の旬を贅沢に織り交ぜた創作会席。阿蘇の大自然で育まれたブランド黒毛和牛やあか牛の陶板焼き、本場熊本ならではの鮮度を誇る霜降り馬刺し、地元小国の新鮮な高原野菜が食卓を彩ります。",
              highlights: [
                "田の原川沿いの閑静なロケーション＆和モダンな寛ぎの天文台・足湯",
                "弱酸性単純泉のまろやかな湯ざわり＆冷えた身体を芯から温める名湯",
                "あか牛の陶板焼きと本場熊本の極上霜降り馬刺しを味わう季節会席"
              ]
            },
            {
              id: 2,
              name: "黒川温泉　やまびこ旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67974/67974.jpg",
              rating: 4.62,
              reviews: 365,
              price: "¥19,800〜",
              access: "ＪＲ阿蘇駅より車で４０分。ＪＲ日田駅より車で６０分。バスは九州横断バスほか、福岡より直行バスも４往復ございます。　　",
              special: "大きな露天風呂が自慢の宿！看板犬のえんちゃん(レオンベルガー　人見知り)もよろしくおねがいします＾＾",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67974%2F67974.html",
              story: "黒川温泉きっての広さを誇る名物大露天風呂「仙人の湯」で知られる「やまびこ旅館」。田の原川の上流、豊かな落葉樹の森に抱かれた水車小屋が目印の老舗宿です。巨岩を豪快に配した大露天風呂は、男湯・女湯ともに川のすぐ間際に造られており、冬の清冽な川風を感じながらダイナミックな野天風呂を満喫できます。さらに館内には趣の異なる6つの個性豊かな家族風呂が点在し、宿泊者は24時間いつでも無料で貸切利用が可能。看板犬のグレートピレニーズが温かく出迎えてくれるアットホームなおもてなしも多くの旅人の心を惹きつけてやみません。",
              roomTip: "清流を見下ろす本館和室や、露天風呂付き離れ客室が人気。冬の澄んだ夜空を見上げながら、プライベートな源泉かけ流し湯を贅沢に独り占めできます。",
              gourmetTip: "名物「肥後牛と肥後地鶏の炭火囲炉裏会席」。炭火の遠赤外線で香ばしく焼き上げる地元産牛肉や川魚の塩焼き、具だくさんの郷土料理だご汁など、身体の芯まで温まる素朴で力強い味わいです。",
              highlights: [
                "巨岩が迫る名物大露天「仙人の湯」＆24時間無料の6つの貸切風呂",
                "田の原川のせせらぎが響く野趣あふれる川沿い露天の圧倒的開放感",
                "炭火で香ばしく焼き上げる肥後牛・地鶏の囲炉裏料理と熱々だご汁"
              ]
            },
            {
              id: 3,
              name: "黒川温泉　旅館　奥の湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54108/54108.jpg",
              rating: 4.17,
              reviews: 345,
              price: "¥13,500〜",
              access: "【車】熊本ＩＣより約100分、日田ＩＣより約60分。湯布院ICより約70分。",
              special: "渓流沿いの混浴露天風呂をはじめ、全9種の湯巡りと3つの無料貸切風呂、温泉熱プールが楽しめる宿！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54108%2F54108.html",
              story: "温泉街の最上流、田の原川の源頭にほど近い杉木立の静寂に隠れるように佇む「旅館 奥の湯」。約2000坪もの広大な敷地に本館、新館、離れが点在し、黒川温泉随一の豊富な自家源泉の湧出量を誇ります。名物は川のせせらぎを間近に臨む大露天風呂をはじめ、茅葺き屋根の風情ある「もみじの湯」、全国でも珍しい温泉熱を利用した「地獄蒸し蒸し風呂」など、館内だけで9種類もの多彩な湯めぐりが完結する温泉パラダイス。11月下旬の初雪や12月の霜降る朝、湯面から舞い上がる神秘的な湯気の中で浸かる朝風呂はまさに極楽のひとときです。",
              roomTip: "田の原川の渓流沿いに建つ離れ客室は、専用の源泉風呂を備えた贅沢な造り。川音と木々のざわめきだけが響く完全なプライベート空間で寛げます。",
              gourmetTip: "熊本の誇る「あか牛」のサーロインステーキをメインとした山里会席。余分な脂がなく赤身本来の濃厚な旨味が広がるあか牛に、地元農家の採れたて根菜や手作り蒟蒻が絶妙な調和を見せます。",
              highlights: [
                "2000坪の敷地に9種の風呂＆茅葺きもみじの湯や地獄蒸し蒸し風呂",
                "川の源頭に位置する豊富な自家源泉かけ流し＆冬の雪見朝風呂",
                "肉の旨味が際立つあか牛サーロインと阿蘇山里の恵み会席膳"
              ]
            },
            {
              id: 4,
              name: "黒川温泉　ふもと旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54971/54971.jpg",
              rating: 4.30,
              reviews: 125,
              price: "¥23,100〜",
              access: "ＪＲ　阿蘇駅より九州横断観光バスで別府方面へ約６０分、「黒川温泉」下車、徒歩約１５分",
              special: "黒川温泉の中央に位置し、館内には13種15のお風呂有り♪夕食は和牛の鉄板焼など和洋折衷料理を！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54971%2F54971.html",
              story: "黒川温泉街のメインストリート・川端通りの中ほどに位置し、昔ながらの温泉街情緒を最も色濃く体感できる「ふもと旅館」。館内には大小合わせて13箇所もの多彩な風呂があり、その多くが空いていれば何度でも自由に貸切利用できるのが最大の魅力です。竹林に囲まれた立ち湯や檜風呂、石風呂など、手形めぐりに出かけずとも宿の中だけで黒川の名湯を満喫し尽くせます。宿を出ればすぐ目の前に土産物屋や甘味処が軒を連ね、浴衣に下駄を鳴らして夕暮れの湯あかり散策へ繰り出すにはこれ以上ない絶好の拠点です。",
              roomTip: "温泉街の通りに面した格子窓の和室や、静かな山側の特別室が人気。どこか懐かしい木造旅館の温もりが、旅の疲れをやさしく包み込みます。",
              gourmetTip: "手作りにこだわる郷土会席料理。とろける極上馬刺しの三種盛り合わせや、特製味噌でいただくあか牛の朴葉味噌焼き、阿蘇の湧水で育った鮎の塩焼きなど、一品一品に板前の心がこもっています。",
              highlights: [
                "温泉街ど真ん中の好立地＆空いていれば何度でも入れる13の多彩な湯",
                "竹林の立ち湯や巨石風呂など個性あふれる貸切湯めぐりの醍醐味",
                "手作りの温もりあふれるあか牛朴葉味噌焼きと鮮度抜群の特選馬刺し"
              ]
            },
            {
              id: 5,
              name: "黒川温泉　瀬の本高原ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/37963/37963.jpg",
              rating: 4.40,
              reviews: 1146,
              price: "¥11,300〜",
              access: "大分道・日田ICから車で70分／黒川温泉バス停から車で10分／",
              special: "楽天トラベル　ゴールドアワード2022　受賞致しました！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37963%2F37963.html",
              story: "黒川温泉街から車で約10分、標高920mの雄大な瀬の本高原に建ち、阿蘇五岳とくじゅう連山を360度見晴らす絶好のロケーションを誇る「瀬の本高原ホテル」。温泉街の谷あいの秘湯情緒とは対照的に、阿蘇の大自然と空の広大さを肌で感じられる高原リゾートです。圧巻は草原の中に突き出すように作られた展望露天風呂「絶景の湯」。視界を遮るもののない大パノラマが広がり、11月・12月の澄み切った初冬の夜には、降るような満天の星空を眺めながら奇跡のような湯あみが楽しめます。",
              roomTip: "南側に阿蘇五岳、北側にくじゅう連山を望むパノラマビュー客室が抜群。早朝、運が良ければ阿蘇谷を覆う幻想的な雲海に出会えることもあります。",
              gourmetTip: "阿蘇・くじゅうの食材を贅沢に使用した高原会席ディナー。あか牛のグリルステーキや地元産高原野菜のバーニャカウダ、名物ジャージー牛の乳製品をふんだんに取り入れたデザートまで大満足の内容です。",
              highlights: [
                "標高920mの高原パノラマ露天風呂＆満天の星空と阿蘇五岳の絶景",
                "阿蘇の大草原と初冬の澄んだ夜空を独占する絶景のインフィニティ温泉",
                "あか牛グリルステーキと小国ジャージー牛乳の恵みを味わう高原ディナー"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-emerald-900 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="冬の黒川温泉・田の原川を彩る幻想的な竹灯籠の湯あかりと渓流露天風呂"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/90 text-emerald-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-emerald-700/50">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>11月・12月限定 阿蘇名湯・冬の竹灯籠と秘湯情緒特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">黒川温泉の湯あかりと秘湯情緒で過ごす冬の旅（11・12月）！<br className="hidden sm:inline" /> 竹灯籠が彩る渓流露天風呂と阿蘇あか牛・肥後会席の名宿5選</h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            阿蘇外輪山の深い緑と渓谷に佇む山あいの秘湯。12月中旬の夜、田の原川を照らし出す無数の竹毬灯籠「湯あかり」が幻想的な光景を創り出す。名物「入湯手形」を手に巡る野趣あふれる露天風呂と、阿蘇あか牛・極上馬刺しの美食に満たされる贅沢な冬の旅へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> 熊本県阿蘇郡南小国町（黒川温泉）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月黒川温泉】竹灯籠が彩る渓流露天風呂と阿蘇あか牛！名宿5選","item":"https://croud-travel.pages.dev/winter-kumamoto-kurokawa-onsen-yuakari-stay"}]}) }}
      />
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Trees className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Heritage & Winter Spirit</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                街全体がひとつの宿。里山と調和する黒川の冬の奇跡「湯あかり」
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            熊本県北部、阿蘇山と九重連山に挟まれた南小国町の山峡に位置する黒川温泉。標高約700メートルの山あいを流れる田の原川の渓谷に沿って、約30軒の旅館がひっそりと軒を連ねています。「街全体をひとつの旅館に見立て、道は廊下、旅館は客室、露天風呂はお風呂。」という理念のもと、過度な看板を廃し、木造建築と土塀、石畳の小道を守り抜いてきた景観美は、日本を代表する温泉郷の奇跡として国内外から絶賛されています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月に入ると阿蘇外輪山の紅葉が深まり、下旬には凛とした初冬の清涼な空気が温泉街を包み込みます。そして12月中旬を迎えると、冬の風物詩である「湯あかり」が点灯。地元の竹林を守る間伐材を活用し、職人たちが丹精込めて編み上げた丸い「竹毬（たけまり）」や高さのある竹筒灯籠が、田の原川の清流や丸鈴橋の周囲に幾重にも吊り下げられます。夕暮れとともに柔らかな橙色のあかりが灯ると、水面に光が揺らめき、もうもうと立ち上る温泉の白煙と溶け合って、まるで昔話の世界に迷い込んだかのような神秘的な絶景が現れます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            黒川温泉の最大の魅力は、宿ごとに源泉と泉質が異なる豊富な湯量にあります。硫黄泉、弱酸性単純泉、硫酸塩泉、ナトリウム塩化物泉など、半径数百メートルのエリアに実に7種類以上もの泉質が湧出。地元小国杉で作られた名物「入湯手形」を首から提げ、湯けむり立ち上る石畳を歩きながら巡る露天風呂は至福の体験です。川風に吹かれながら熱い湯に身を沈め、夜は囲炉裏や個室で阿蘇の大草原が育んだ「あか牛」の芳醇な旨味と、本場熊本ならではの新鮮な霜降り馬刺しに舌鼓を打つ。これ以上ない贅沢な冬の時間がここに流れています。
          </p>
          
          <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Moon className="w-5 h-5 text-emerald-800" />
                <span>冬の「湯あかり」鑑賞のベストタイム</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                点灯は17:00〜22:00。夕暮れ直後の17:30〜18:30が青暗い空と灯籠のコントラストが最も美しい時間帯です。
              </p>
            </div>
            <div className="px-4 py-2 bg-emerald-800 text-white rounded-xl text-xs font-bold whitespace-nowrap shadow-sm">
              開催: 12月中旬〜3月下旬
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-black text-xl">
              1
            </div>
            <h3 className="font-bold text-stone-900 text-base">名物「入湯手形」で3つの露天湯めぐり</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              地元小国杉でできた手形（1,500円）で加盟宿の野趣あふれる露天風呂を自由に3軒巡れる黒川温泉の代名詞。宿ごとの異なる泉質とロケーションを満喫。
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-black text-xl">
              2
            </div>
            <h3 className="font-bold text-stone-900 text-base">渓谷を照らす竹灯籠「湯あかり」の幻想美</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              12月中旬から田の原川の清流沿いに広がる無数の竹灯籠。冷たく澄み切った初冬の夜空と立ち上る温泉の湯けむりが織りなす温かな光のファンタジー。
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-800 flex items-center justify-center font-black text-xl">
              3
            </div>
            <h3 className="font-bold text-stone-900 text-base">阿蘇あか牛溶岩焼き＆本場熊本の極上馬刺し</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              赤身肉本来の芳醇な旨味が溢れるヘルシーな「阿蘇あか牛」、鮮度抜群のとろける霜降り馬刺し、具だくさんの郷土料理だご汁など肥後の冬の滋味。
            </p>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              Selected 5 Ryokan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              【11・12月】黒川温泉で泊まりたい極上名旅館5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              楽天トラベルで高評価を獲得する実力派から、渓流露天・星空パノラマ・美食自慢の宿まで、初冬の黒川を満喫できる名宿を厳選してご紹介します。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image Box */}
                <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-[420px] overflow-hidden bg-stone-100">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    厳選宿 #{hotel.id}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-3 rounded-2xl text-white text-xs">
                    <span className="font-semibold block text-stone-200 mb-0.5">参考宿泊料金目安:</span>
                    <span className="text-lg font-black text-amber-300">{hotel.price}</span>
                    <span className="text-stone-300 text-[11px] ml-1">（2名1室利用時・1名あたり/消費税込）</span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                      <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg">
                        {hotel.access}
                      </span>
                      <div className="flex items-center gap-1.5 text-stone-700 text-xs sm:text-sm font-bold">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-stone-900 font-extrabold text-base">{hotel.rating}</span>
                        <span className="text-stone-400 font-normal">（{hotel.reviews}件のクチコミ）</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-emerald-800 transition">
                      {hotel.name}
                    </h3>

                    <p className="text-stone-700 leading-relaxed text-sm">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-stone-50 rounded-2xl p-3.5 border border-stone-200/70">
                        <span className="text-[11px] font-extrabold text-stone-500 uppercase tracking-wider block mb-1">
                          客室のこだわり
                        </span>
                        <p className="text-xs text-stone-700 leading-relaxed">
                          {hotel.roomTip}
                        </p>
                      </div>

                      <div className="bg-amber-50/60 rounded-2xl p-3.5 border border-amber-200/70">
                        <span className="text-[11px] font-extrabold text-amber-800 uppercase tracking-wider block mb-1">
                          冬の美食会席
                        </span>
                        <p className="text-xs text-stone-700 leading-relaxed">
                          {hotel.gourmetTip}
                        </p>
                      </div>
                    </div>

                    {/* Highlights bullets */}
                    <div className="space-y-1.5 pt-1">
                      {hotel.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="text-xs text-stone-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-700" />
                      <span>楽天トラベル公式連携・最低価格保証プランあり</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                    >
                      <span>宿泊プラン・空室を確認する</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                【1泊2日】初冬の黒川温泉 湯あかり＆阿蘇美食満喫モデルコース
              </h2>
            </div>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-200 space-y-8">
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-emerald-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-emerald-800 tracking-wider">1日目 13:30</span>
                <h3 className="text-base font-bold text-stone-900">黒川温泉「風の舎」で入湯手形を購入＆温泉街散策</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  温泉街の総合案内所「風の舎」に到着。地元小国杉の香る入湯手形（1,500円）を入手し、加盟旅館の露天風呂マップをチェック。川端通りの石畳をそぞろ歩きながら名物のどら焼きや小国ジャージーシュークリームをテイクアウト。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-emerald-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-emerald-800 tracking-wider">1日目 14:30</span>
                <h3 className="text-base font-bold text-stone-900">1軒目の手形めぐり・野趣あふれる渓流露天風呂へ</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  チェックイン前にまずは1軒目の露天風呂へ。田の原川のせせらぎが眼前に迫る川沿いの露天風呂に浸かり、初冬の澄み切った冷気の中でじんわりと温まります。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-emerald-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-emerald-800 tracking-wider">1日目 15:30</span>
                <h3 className="text-base font-bold text-stone-900">宿へチェックイン・客室で阿蘇の山並みを眺めて一服</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  宿にチェックインし、畳の香る和室で温かいお茶と温泉銘菓を堪能。浴衣に着替えて丹前を羽織り、宿自慢の自家源泉大浴場でゆったりと身体をほぐします。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-emerald-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-emerald-800 tracking-wider">1日目 17:30</span>
                <h3 className="text-base font-bold text-stone-900">夕暮れの丸鈴橋へ・「湯あかり」竹灯籠の幻想世界を鑑賞</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  日が沈むとともに田の原川に数百個の竹毬灯籠が点灯。川面に揺らめく温かな橙色の光と立ち上る白い湯けむりが織りなす冬の絶景を丸鈴橋の上から眺め、静かな冬の旅情に浸ります。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-emerald-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-emerald-800 tracking-wider">1日目 19:00</span>
                <h3 className="text-base font-bold text-stone-900">夕食・阿蘇あか牛溶岩焼きと極上馬刺しの肥後会席</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  個室または食事処で夕食。熱々の溶岩プレートで香ばしく焼き上げる阿蘇あか牛ステーキ、熊本直送の霜降り馬刺し、具だくさんのだご汁など、滋味豊かな地元の恵みに舌鼓。地元の米焼酎や地ビールとともにじっくり味わいます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-emerald-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-emerald-800 tracking-wider">2日目 07:30</span>
                <h3 className="text-base font-bold text-stone-900">朝の清冽な空気の中で浸かる露天風呂＆里山朝食</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  霜が降りる初冬の朝、もうもうと湯気を上げる朝露天へ。朝食には炊きたての地元産米、小国ジャージー牛乳、温泉卵、具だくさん味噌汁など体に優しい里山膳をいただきます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-emerald-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-emerald-800 tracking-wider">2日目 10:00</span>
                <h3 className="text-base font-bold text-stone-900">大観峰へドライブ・阿蘇五岳とカルデラの大パノラマ</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  チェックアウト後、車でミルクロードを抜け阿蘇随一のビュースポット「大観峰」へ。冬晴れの澄んだ青空の下、まるで釈迦の涅槃像のように横たわる阿蘇五岳と雄大なカルデラ盆地の絶景を目に焼き付けます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Q & A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                黒川温泉の初冬旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-emerald-800 font-extrabold">Q.</span>
                <span>黒川温泉の「湯あかり」はいつからいつまで開催されますか？点灯時間は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                黒川温泉の冬の風物詩「湯あかり」は、例年12月中旬（または下旬）から翌年3月末〜4月上旬まで開催されます。点灯時間は日没（概ね17時頃）から22時までです。田の原川の渓流沿いや丸鈴橋周辺、川端通りなどに数百個の竹毬灯籠や筒灯籠が設置され、柔らかな橙色の光が水面と湯けむりを照らし出す幻想的な光景を楽しめます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-emerald-800 font-extrabold">Q.</span>
                <span>黒川温泉の11月・12月の気温と積雪、車でのアクセス注意点は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                黒川温泉は標高約700m前後の阿蘇外輪山山麓に位置するため、熊本市内や福岡市内よりも気温が約5〜7度低くなります。11月は朝晩の冷え込みが強く（最低気温3〜5度）、12月に入ると朝晩は氷点下に達します。12月中旬以降は寒波によって積雪や路面凍結が発生することがあるため、お車の場合は冬用タイヤ（スタッドレスタイヤ）の装着またはチェーンの携行が必須です。厚手の防寒コート、手袋、マフラーを必ずご用意ください。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-emerald-800 font-extrabold">Q.</span>
                <span>「入湯手形」の仕組みと使い方のルールを教えてください。</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                入湯手形は地元小国杉で作られた木製の手形で、黒川温泉旅館組合の案内所「風の舎」または加盟各旅館で1枚1,500円（税込）で購入できます。手形1枚につき加盟旅館の指定露天風呂の中からお好きな3箇所に入浴できるか、または2箇所入浴＋飲食やお土産の利用券1回分として使えます。有効期限は半年間あり、日帰りだけでなく宿泊中の湯めぐりにも最適です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-emerald-800 font-extrabold">Q.</span>
                <span>黒川温泉で絶対に味わうべき地元名物グルメは何ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                阿蘇の広大な草原で放牧された脂肪分が少なく赤身の旨味が濃厚な「阿蘇あか牛」のステーキ・溶岩焼き、本場熊本ならではの新鮮な「極上霜降り馬刺し」、具だくさんの汁に小麦粉を練った団子を入れた郷土料理「だご汁」、濃厚でコクのある「小国ジャージー牛乳」のスイーツやプリン、ピリッとした辛みが食欲をそそる「高菜めし」が定番の名物グルメです。
              </p>
            </div>
          </div>
        </section>

        {/* Internal Link Mesh */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest block">EXPLORE MORE WINTER DESTINATIONS</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい！11月・12月の冬特集＆全国の名湯ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/winter-fukuoka-hakata-christmas-advent-gourmet-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-emerald-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-1">九州の冬グルメ</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition line-clamp-2">
                【博多】クリスマスアドベント＆本場もつ鍋・水炊きを堪能する冬宿
              </h3>
            </Link>

            <Link 
              href="/winter-nagasaki-huistenbosch-christmas-lights-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-emerald-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-1">九州のイルミ名所</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition line-clamp-2">
                【ハウステンボス】世界最大級1300万球の光の街＆極上ホテルステイ
              </h3>
            </Link>

            <Link 
              href="/winter-ehime-dogo-onsen-taimeshi-heritage-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-emerald-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-1">西日本の名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition line-clamp-2">
                【道後温泉】保存修理完了の本館と真鯛鯛めし・伊予牛会席の宿
              </h3>
            </Link>

            <Link 
              href="/winter-gunma-ikaho-stone-steps-joshu-beef-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-emerald-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-1">関東の石段名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition line-clamp-2">
                【伊香保温泉】365段の石段街と黄金の湯・上州牛会席を味わう名旅館
              </h3>
            </Link>

            <Link 
              href="/winter-tottori-misasa-onsen-matsuba-crab-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-emerald-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-1">山陰の冬の味覚</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition line-clamp-2">
                【三朝温泉】世界屈指のラジウム泉と冬の極上松葉がにフルコース
              </h3>
            </Link>

            <Link 
              href="/winter-gifu-gero-onsen-fireworks-hida-beef-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-emerald-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-1">東海の冬花火</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition line-clamp-2">
                【下呂温泉】冬花火ミュージカルと日本三名泉美肌湯・飛騨牛会席
              </h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kumamoto-kurokawa-onsen-yuakari-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
