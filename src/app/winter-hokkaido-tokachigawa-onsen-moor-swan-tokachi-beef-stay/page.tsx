import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Fish, Eye, Waves, Wine, ThermometerSun, Footprints, Landmark, Snowflake, Feather
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月北海道・十勝川温泉の初冬白鳥飛来と美肌遺産モール温泉】極上十勝牛ステーキ＆十勝野チーズ会席を愉しむ名宿5選",
  description: "11月から12月にかけて、広大な十勝平野に位置する十勝川温泉は、シベリアから優雅なオオハクチョウが越冬のために飛来し、澄み渡る「十勝晴れ」の青空と雪化粧した日高山脈が織りなす息を呑むような初冬の絶景を迎えます。世界でも極めて希少な太古の植物堆積層から湧く「植物性モール温泉」は、北海道遺産にも選定された天然の美肌化粧水。湯上がりに肌が驚くほどすべすべになり、体の芯までポカポカに温まります。夕食にはジューシーな十勝牛・十勝和牛のステーキ、濃厚な十勝野ラクレットチーズ、越冬野菜を贅沢に味わう厳選名宿5選を徹底解説します。",
  keywords: '十勝川温泉 宿泊, 十勝川温泉 ホテル, モール温泉 北海道, 十勝牛 ステーキ, 十勝川 白鳥 飛来 11月 12月, 十勝川温泉 第一ホテル, 観月苑, 三余庵, ホテル大平原, 笹井ホテル',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hokkaido-tokachigawa-onsen-moor-swan-tokachi-beef-stay/"
  },
  openGraph: {
    title: "【11・12月北海道・十勝川温泉の初冬白鳥飛来と美肌遺産モール温泉】極上十勝牛ステーキ＆十勝野チーズ会席を愉しむ名宿5選",
    description: "11月から12月にかけて、広大な十勝平野に位置する十勝川温泉は、シベリアから優雅なオオハクチョウが越冬のために飛来し、澄み渡る「十勝晴れ」の青空と雪化粧した日高山脈が織りなす息を呑むような初冬の絶景を迎えます。世界でも極めて希少な太古の植物堆積層から湧く「植物性モール温泉」は、北海道遺産にも選定された天然の美肌化粧水。湯上がりに肌が驚くほどすべすべになり、体の芯までポカポカに温まります。夕食にはジューシーな十勝牛・十勝和牛のステーキ、濃厚な十勝野ラクレットチーズ、越冬野菜を贅沢に味わう厳選名宿5選を徹底解説します。",
    url: 'https://croud-travel.com/winter-hokkaido-tokachigawa-onsen-moor-swan-tokachi-beef-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の十勝川温泉と白鳥飛来・モール温泉の絶景'
      }
    ]
  }
};

const faqList = [
  {
    "q": "十勝川温泉の「植物性モール温泉」とは何ですか？他の温泉との違いは？",
    "a": "十勝川温泉のモール温泉は、一般的な鉱物性温泉とは大きく異なり、太古の時代に地下深くに堆積したアシや湿原植物などの植物性有機物（亜炭層）を通って湧き出る世界でも極めて希少な温泉です。ドイツのバーデンバーデンと北海道十勝川の二大地域にしかないとされ、その希少性と優れた効能から「北海道遺産」にも選定されています。天然の化粧水成分である「フミン酸」や「フルボ酸」を豊富に含み、琥珀色（ウーロン茶のような色）をしており、肌に触れると驚くほどとろみがあります。皮膚を滑らかにし、湯上がり後も高い保湿効果が持続するため「美人の湯」「奇跡の美肌湯」として全国に知られています。"
  },
  {
    "q": "11月・12月の十勝川温泉の気候や気温、おすすめの服装は？",
    "a": "十勝地方は初冬に入ると「十勝晴れ」と呼ばれる澄み渡った青空が広がる日が多くなりますが、気温は急速に低下します。11月の平均最高気温は6〜9℃、最低気温は-2〜1℃前後まで下がり、朝晩は氷点下の冬日になります。12月に入ると最高気温でも0〜2℃、最低気温は-8〜-12℃近くまで冷え込み、本格的な冬を迎えます。道路の凍結や降雪も始まります。観光にはダウンコートや厚手のウールコート、風を通さない防寒ジャケット、マフラー、手袋、ニット帽が必須です。また、足元は滑り止め付きのスノーブーツや防寒靴をご用意ください。"
  },
  {
    "q": "11月・12月に見られる「十勝川の白鳥飛来」について教えてください。",
    "a": "例年11月中旬頃から、遠くシベリアから越冬のためにオオハクチョウの群れが十勝川河畔に飛来し始めます。十勝川はモール温泉の温かい湯が一部流れ込んでいるため水温が極端に下がりにくく、白鳥たちにとって格好の越冬地となっています。十勝が丘公園の十勝川河川敷（白鳥飛来地）では、朝霧が立ち込める川面に優美に浮かぶ白鳥たちの姿を間近で観察できます。澄んだ青空をバックに白い翼を広げて舞い降りる姿や、朝陽を浴びて輝くシルエットは初冬ならではの息を呑む絶景です。"
  },
  {
    "q": "十勝川温泉で冬に味わえる名物グルメや特産品は何ですか？",
    "a": "十勝は「日本の食料基地」と呼ばれる大農業地帯であり、冬は美食の宝庫です。代表格は広大な牧場で育った「十勝牛」「十勝黒毛和牛」のステーキやすき焼き。赤身の旨味と上質な脂の甘みが絶品です。また、十勝野フロマージュをはじめとする本場の「十勝産ナチュラルチーズ」やラクレット、越冬して糖度が増した「インカのめざめ」などの十勝じゃがいも、甘い玉ねぎ、中札内田舎どり、そして帯広名物の香ばしい炭火焼き「豚丼」など、北の大地ならではの濃厚な味わいを楽しめます。"
  },
  {
    "q": "帯広駅やとかち帯広空港から十勝川温泉へのアクセス方法は？",
    "a": "JR帯広駅からは、駅前バスターミナルより十勝バス（十勝川温泉行き）に乗車し、約30分で十勝川温泉各ホテルに到着します。路線バスは日中1時間に1本程度運行されています。とかち帯広空港からは車または連絡バスで帯広駅へ出てバスを乗り継ぐか、空港からレンタカー・タクシーで約40分です。新千歳空港からはJR特急「おおぞら」「とかち」で帯広駅まで約2時間15分、道東自動車道を利用した車移動では約2時間30分です。冬期は路面が凍結するため、レンタカー利用時は冬用スタッドレスタイヤの装着と十分な車間距離の確保が必要です。"
  }
];

export default function HokkaidoTokachigawaWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-hokkaido-tokachigawa-onsen-moor-swan-tokachi-beef-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-hokkaido-tokachigawa-onsen-moor-swan-tokachi-beef-stay"
        },
        "headline": "【11・12月北海道・十勝川温泉の初冬白鳥飛来と美肌遺産モール温泉】極上十勝牛ステーキ＆十勝野チーズ会席を愉しむ名宿5選",
        "description": "11月から12月にかけて、広大な十勝平野に位置する十勝川温泉は、シベリアから優雅なオオハクチョウが越冬のために飛来し、澄み渡る「十勝晴れ」の青空と雪化粧した日高山脈が織りなす息を呑むような初冬の絶景を迎えます。世界でも極めて希少な太古の植物堆積層から湧く「植物性モール温泉」は、北海道遺産にも選定された天然の美肌化粧水。湯上がりに肌が驚くほどすべすべになり、体の芯までポカポカに温まります。夕食にはジューシーな十勝牛・十勝和牛のステーキ、濃厚な十勝野ラクレットチーズ、越冬野菜を贅沢に味わう厳選名宿5選を徹底解説します。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T12:00:00+09:00",
        "dateModified": "2026-09-28T12:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.com/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 北海道・名湯紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-hokkaido-tokachigawa-onsen-moor-swan-tokachi-beef-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "特集一覧",
            "item": "https://croud-travel.com/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "北海道・十勝川温泉 初冬白鳥飛来と植物性モール温泉の宿",
            "item": "https://croud-travel.com/winter-hokkaido-tokachigawa-onsen-moor-swan-tokachi-beef-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-hokkaido-tokachigawa-onsen-moor-swan-tokachi-beef-stay#faq",
        "mainEntity": faqList.map(f => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.a
          }
        }))
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "十勝川温泉　第一ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5818/5818.jpg",
              rating: 4.59,
              reviews: 1442,
              price: "¥17,480〜",
              access: "JR帯広駅より車で２０分。札幌より車で約3時間／札幌⇔[札幌北ＩＣ～音更帯広ＩＣ]⇔十勝川温泉",
              special: "北海道遺産に選定されたモール温泉。美人の湯を心ゆくまでご堪能下さい",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5818%2F5818.html",
              story: "十勝川の雄大な流れを間近に望み、創業より培われた格式と洗練されたおもてなしで名高い最高峰の老舗ホテル「十勝川温泉 第一ホテル」。上質を極めた特別室棟「豊洲亭（ほうしゅうてい）」と、温かみあふれる和モダン棟「豆陽亭（とうようてい）」の2つの館からなり、滞スタイルに合わせて贅沢な休日を過ごせます。自慢の大浴場「湯楽」は、庭園露天風呂や立ち湯、ジャグジーなど多彩な湯船を備え、希少な植物性モール温泉が掛け流しで注がれます。夕食は鉄板焼きダイニングや個室料亭での本格和食会席。霜降りが美しい十勝黒毛和牛のフィレステーキ、近海産の新鮮なホタテや寒鱈、十勝産チーズを用いた創作料理など、北の大地の恵みが惜しみなく振る舞われます。初冬の朝、客室や露天風呂から十勝川に舞い降りる白鳥の姿を眺める時間は格別です。",
              roomTip: "豊洲亭の十勝川一望・源泉掛け流し露天風呂付き客室。初冬の凛とした空気の中、湯けむりの向こうに広がる白鳥の飛来地と十勝の大自然を完全プライベートで堪能。",
              gourmetTip: "「冬の十勝極味会席」。最高級十勝黒毛和牛の陶板焼きステーキ、十勝野チーズのフォンデュ仕立て、旬の蝦夷鮑の踊り焼き、ふっくら炊き上げた北海道産ゆめぴりかの釜飯。",
              highlights: [
                "十勝川一望の最高峰老舗宿＆豊洲亭露天風呂付き客室と大浴場「湯楽」の琥珀色モール温泉",
                "最高級十勝黒毛和牛のフィレステーキ＆十勝野チーズや旬の海鮮を堪能する極味会席",
                "シベリアから越冬に訪れるオオハクチョウの飛来地に隣接する絶好のロケーション"
              ]
            },
            {
              id: 2,
              name: "十勝川温泉　観月苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/19237/19237.jpg",
              rating: 4.47,
              reviews: 2021,
              price: "¥13,750〜",
              access: "【バス】JR帯広駅より30分（観月苑前下車）｜【お車】帯広駅より20分、音更帯広ICより20分、帯広空港より40分",
              special: "十勝川温泉初！２０２０年５月フィンランド式サウナへリニューアル！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19237%2F19237.html",
              story: "十勝川のシンボルである十勝中央大橋のたもとに佇み、川のせせらぎと広大な大空に抱かれた和風情緒あふれる名宿「十勝川温泉 観月苑（かんげつえん）」。館内に一歩足を踏み入れると、木の温もりあふれるロビーと初冬の十勝川を見渡すパノラマビューが出迎えてくれます。自慢の露天風呂は十勝川に面して大きく張り出し、琥珀色のモール温泉に身を浸しながら、冬の朝霧や川面に憩う白鳥の優雅な羽ばたきを間近に観賞できます。さらに本場フィンランド式サウナやセルフロウリュ、十勝川の伏流水を用いた水風呂も完備され、サウナ愛好家からも熱烈な支持を集めています。食事は十勝の豊かな実りを五感で楽しむビュッフェまたは旬の和食会席。オープンキッチンで焼き上げる十勝牛ステーキや揚げたて天ぷらが絶品です。",
              roomTip: "十勝川ビューの展望露天風呂付き客室または和モダンツイン。夕暮れ時に茜色に染まる十勝中央大橋と川面のコントラストを静かに見下ろす寛ぎのひととき。",
              gourmetTip: "「十勝美食彩りビュッフェ／冬の特選和食膳」。目の前で焼き上げる十勝産牛ロースステーキ、中札内田舎どりのロースト、十勝産じゃがいも「インカのめざめ」のラクレットがけ。",
              highlights: [
                "十勝中央大橋の絶景露天風呂＆本場フィンランド式ロウリュサウナと十勝牛ビュッフェ",
                "十勝川のせせらぎと白鳥の飛来を眼前に望む開放感抜群のパノラマ露天風呂",
                "十勝川の伏流水を使用した冷水風呂と外気浴デッキで最高のととのい体験"
              ]
            },
            {
              id: 3,
              name: "十勝川温泉　三余庵",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/43848/43848.jpg",
              rating: 4.80,
              reviews: 92,
              price: "¥47,225〜",
              access: "●ＪＲ帯広駅より車で20分　●JR帯広駅⇔十勝川温泉[宿泊者限定バス無料有]※当館までお問い合わせください。",
              special: "お客様との出会いの瞬間を大切に、心尽くしのおもてなしを。日常を忘れ心ゆくまでおくつろぎください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F43848%2F43848.html",
              story: "十勝の自然と静寂に包まれたわずか11室のみの大人の隠れ家「十勝川温泉 三余庵（さんよあん）」。建築・インテリアからアロマの香り、手触りの良い木や土壁の質感に至るまで、五感のすべてを解き放つために設計された至高のスモールラグジュアリーホテルです。全館に流れる静謐な空気の中、大浴場や客室露天風呂には化粧水のようにトロトロとした純度100%の天然モール温泉が惜しみなく掛け流されています。三余庵の真骨頂は、素材の本質を追求した独創的な創作和食会席。生産者から毎朝直送されるオーガニック冬野菜、選び抜かれた極上の十勝牛、オホーツクや釧路港から仕入れる冬の海の幸が、器の美しさとともにお客の目の前へ届けられます。初冬の北海道で贅沢なプライベート時間を過ごしたい大人に最適です。",
              roomTip: "源泉掛け流しモール温泉付き特別室。専用バルコニーから初冬の静まり返る十勝の原生林を眺め、自分たちだけの贅沢な読書と湯浴みを楽しめます。",
              gourmetTip: "「料理長特選・冬の十勝創作和食会席」。低温でじっくり旨味を閉じ込めた十勝和牛のロースト、冬トリュフと十勝マッシュルームのスープ、旬の北寄貝と寒平目のお造り。",
              highlights: [
                "全11室の大人のスモールラグジュアリー＆掛け流しモール温泉と至高の創作和食会席",
                "五感を癒やす木と和紙のデザイナーズ空間＆毎朝直送される冬野菜と十勝和牛",
                "プライベート感を徹底重視した静寂の空間＆記念日や特別なご褒美旅行に最適"
              ]
            },
            {
              id: 4,
              name: "十勝川温泉　ホテル大平原",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54836/54836.jpg",
              rating: 3.95,
              reviews: 882,
              price: "¥7,700〜",
              access: "帯広駅より車で約２０分",
              special: "世界でも珍しい植物性モール温泉を掛け流し♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54836%2F54836.html",
              story: "広大な敷地内に自家農園を持ち、「食の安全と十勝の大地の恵み」にとことんこだわるファミリーからシニアまで人気の温泉ホテル「十勝川温泉 ホテル大平原」。自家農園「大平原農園」で減農薬・有機栽培された安心安全な新鮮野菜やハーブをふんだんに使用したお料理は、心も体も健やかに満たしてくれます。大浴場にはモール温泉が贅沢に注がれ、エステ風呂や低周波風呂、寝湯、打たせ湯、初冬の澄んだ夜空を見上げる大露天風呂など多彩な湯巡りが楽しめます。また、広大な敷地を活かした熱気球体験やスノーアクティビティなど、初冬の十勝を遊び尽くす体験プログラムも豊富。夕食は十勝牛ステーキをメインとした大人気の大平原バイキング、または旬の味覚をじっくり味わう個室和食膳から選べます。",
              roomTip: "広々とした和洋室またはガーデンビュー客室。窓の外に広がる十勝平野の広大な雪景色を眺めながら、三世代旅行や夫婦旅でゆったりと団らんを満喫。",
              gourmetTip: "「自家農園野菜と十勝牛ステーキのディナーバイキング」。シェフが豪快に焼き上げる十勝牛ステーキ、大平原農園の越冬根菜の煮物、十勝産牛乳を使った濃厚ソフトクリーム。",
              highlights: [
                "自家農園のオーガニック野菜＆十勝牛ステーキバイキングと多彩な大浴場スパ施設",
                "広大な敷地での熱気球体験や初冬アクティビティ＆三世代でゆったり過ごせる和洋室",
                "低周波風呂・打たせ湯・寝湯など多彩な湯巡り＆安心の自家農園食材のおもてなし"
              ]
            },
            {
              id: 5,
              name: "十勝川温泉　笹井ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30897/30897.jpg",
              rating: 4.21,
              reviews: 1203,
              price: "¥10,100〜",
              access: "ＪＲ帯広駅前バスターミナルからバスで25分／道東道帯広・音更ＩＣより車で15分／帯広空港より車で45分",
              special: "かけ流しのモール温泉が人気の老舗ホテル。昨年改装したレストランでは和洋中のバイキングで楽しいお食事を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30897%2F30897.html",
              story: "明治32年（1899年）創業、十勝川温泉の歴史の扉を開いた開湯草創期からの歴史を刻む名門老舗「十勝川温泉 笹井ホテル」。120年以上の伝統を誇り、創業当時から地元住民や歴代の旅人に愛され続けてきた自家源泉のモール温泉は、湯量豊富で抜群の鮮度を誇ります。広々とした大浴場「笹の湯」には、琥珀色に輝く高温・中温の浴槽や初冬の冷気を感じながら入る庭園露天風呂、ヒノキ風呂、サウナが完備され、肌にまとわりつくような極上のシルクのような湯触りを存分に堪能できます。食事処では、十勝名物の豚丼コーナーや十勝牛の鉄板焼き、北海道沿岸から直送されるカニやホタテ、いくらなど、北海道旅行の夢を叶える豪快な山海ビュッフェが圧巻のボリュームで並びます。",
              roomTip: "伝統美を残すモダン和室またはベッド付き和洋室。創業120年の歴史ロマンに思いを馳せながら、足を伸ばしてくつろげる落ち着いた和のプライベート空間。",
              gourmetTip: "「北海道・十勝の山海味覚バイキング」。目の前で炙る十勝名物豚丼、十勝牛の鉄板ステーキ、旬の秋鮭・いくらの海鮮丼、十勝産長いもとチーズのオーブン焼き。",
              highlights: [
                "明治32年創業の温泉街最古の名門＆豊富な自家源泉掛け流し湯と豪快な北海道山海ビュッフェ",
                "十勝名物豚丼の実演や十勝牛鉄板焼き＆カニやイクラが並ぶ贅沢バイキング",
                "広々とした大浴場「笹の湯」で楽しむ美肌成分たっぷりの琥珀色の名湯"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <header className="relative w-full h-[360px] sm:h-[480px] flex items-end justify-center bg-slate-900 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80"
          alt="十勝川の初冬絶景と白鳥飛来・モール温泉"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold">
            <Feather className="w-4 h-4" />
            11月・12月 北海道遺産モール温泉＆白鳥飛来特集｜北海道・十勝川温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            初冬白鳥飛来と美肌遺産モール温泉<br className="hidden sm:inline" />
            極上十勝牛ステーキ＆十勝野チーズ会席を愉しむ名宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            澄み切った十勝晴れの青空と冠雪した日高山脈。シベリアから飛来するオオハクチョウの優雅な姿を眺め、琥珀色にとろける奇跡の植物性モール温泉で温まる、冬の北海道の贅沢な休日。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-amber-400" /> 11月中旬〜12月が白鳥飛来の旬</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-amber-400" /> 北海道遺産・植物性モール温泉</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-amber-400" /> 極上十勝牛＆本場十勝チーズ</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Sun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Hokkaido Heritage & Winter Swan</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の十勝晴れと琥珀色の奇跡｜11月・12月に十勝川温泉を訪れるべき理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              北海道の南東部に広がる十勝平野は、初冬を迎えると「十勝晴れ」と呼ばれるどこまでも深く透き通ったスカイブルーの空が広がり、遠くには雪化粧をまとった雄大な日高山脈がくっきりと浮かび上がります。この清涼な大気の中、十勝川河畔に位置する「十勝川温泉」は、年間を通じて最もドラマチックな季節を迎えます。
            </p>
            <p>
              例年11月中旬になると、遠く極寒のシベリアから越冬のために優美なオオハクチョウの群れが十勝川へと飛来します。朝霧が立ち込める静かな川面に翼を休め、陽光を浴びて白銀に輝く姿は、まるで絵画のような美しさです。さらに十勝川温泉を唯一無二の存在たらしめているのが、世界でもドイツとここにしかないと言われる「植物性モール温泉」です。太古の葦や湿原植物が蓄積した亜炭層を通って湧き出る湯は、天然の化粧水成分であるフミン酸やフルボ酸を豊富に含み、琥珀色に輝くとろとろの湯触りが特徴。北海道遺産にも認定された極上の美肌湯が、冬の乾いた肌をやさしく潤します。
            </p>
            <p>
              湯上がりの楽しみは、日本の食料基地と称される十勝の大地が育んだ極上の美食。広大な大地で育てられた「十勝牛」「十勝和牛」のとろけるステーキやすき焼きをはじめ、十勝野チーズ工房などの職人が手がける濃厚なナチュラルチーズ、越冬によって甘みを極限まで蓄えたインカのめざめなどの根菜類など、冬の十勝でしか出会えない至福の味覚が揃っています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <Waves className="w-4 h-4 text-amber-600" />
                北海道遺産・植物性モール温泉
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                太古の植物堆積層から湧く天然化粧水の湯。フミン酸・フルボ酸を含み、驚くほどの保湿力とつるすべ感を実感。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <Feather className="w-4 h-4 text-amber-600" />
                初冬の風物詩・オオハクチョウ飛来
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月中旬からシベリアより飛来。川面を漂う朝霧と白鳥たちの優美な姿が十勝川河畔に幻想的な冬景色を演出。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-2">
              <div className="flex items-center gap-2 font-bold text-amber-900 text-sm">
                <Utensils className="w-4 h-4 text-amber-600" />
                十勝牛ステーキ＆十勝チーズ
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                赤身の旨味が凝縮した十勝牛の鉄板ステーキ、本場ラクレットチーズや越冬じゃがいもの濃厚な冬の味覚を堪能。
              </p>
            </div>
          </div>
        </section>

        {/* Section 1.5: Landscape & Swan Ecology */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Natural Phenomena & Wildlife</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                太古の亜炭層が育んだ琥珀色のモール泉と白鳥たちの越冬生態系
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              十勝川温泉のモール温泉は、一般的な火山性鉱物温泉とは成り立ちが根本から異なります。数万年もの遥かな昔、十勝平野を覆っていたアシやヨシなどの自生植物が地中深くに堆積し、長い時間をかけて亜炭層へと変化しました。その地下層を通り抜けて湧き出る地下水が地熱で熱せられたものが、現在のモール温泉です。「モール（Moor）」とはドイツ語で湿原・亜炭を意味し、ヨーロッパでは古くから外傷治療や皮膚病の泥湿療法として愛用されてきました。
            </p>
            <p>
              この大地の恵みは、人々の身体を潤すだけでなく、冬の厳しい自然を生き抜く野生生物の命も支えています。十勝川はモール温泉が流れ込む支流や湧水が存在するため、氷点下10度を下回る初冬でも一部の水域が完全には凍結しません。そのためシベリアから数千キロを旅してきたオオハクチョウにとって絶好の安全な給餌・休息地となっています。白鳥テラスから見つめる白鳥たちの睦まじい姿は、大自然の調和と命の温もりを旅人に静かに伝えてくれます。
            </p>
          </div>
        </section>

        {/* Section 2: Hotel Cards */}
        <section className="space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">Selected Luxury Ryokan & Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              【十勝川温泉】初冬のモール温泉と美食を味わう厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
              十勝川の雄大な自然を望む露天風呂、極上十勝牛ステーキ、名門ホスピタリティを備えたおすすめの宿を詳しく紹介します。
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((h) => (
              <div 
                key={h.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-all flex flex-col md:flex-row"
              >
                <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    第{h.id}位
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-800 rounded-md">
                        {h.special}
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-400 text-xs font-normal">({h.reviews.toLocaleString()}件)</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-amber-700 transition-colors">
                      <a href={h.url} target="_blank" rel="noopener noreferrer">
                        {h.name}
                      </a>
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                      <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-100">
                        <span className="font-bold text-amber-900 block mb-1">【客室のこだわり】</span>
                        <p className="text-slate-600">{h.roomTip}</p>
                      </div>
                      <div className="p-3 bg-rose-50/50 rounded-xl border border-rose-100">
                        <span className="font-bold text-rose-900 block mb-1">【冬の味覚プラン】</span>
                        <p className="text-slate-600">{h.gourmetTip}</p>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <span className="text-xs font-bold text-slate-700 block">おすすめのハイライト：</span>
                      {h.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-0.5">
                      <span className="text-[11px] text-slate-400 block">参考宿泊料金（2名1室時・1名あたり）</span>
                      <div className="text-xl font-extrabold text-amber-700">{h.price}</div>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-sm hover:shadow transition-all"
                    >
                      楽天トラベルで空室・プランを見る
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2.5: Gourmet & Hot Spring Science */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Gourmet & Thermal Science</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                十勝黒毛和牛の芳醇な赤身肉と十勝産ナチュラルチーズの熟成美学
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              日高山脈からの清冽な雪解け水と冷涼な空気、広大な牧草地を有する十勝は、日本屈指の黒毛和牛生産地です。「十勝和牛」「十勝牛」は、良質な乾草とトウモロコシなどを配合した厳選飼料で丹精込めて育てられます。初冬の十勝牛は、赤身の中に適度で繊細なサシが均等に入り、鉄板で焼き上げると香ばしい和牛香が立ち上ります。噛むごとに溢れ出す濃厚な肉汁は、しつこさがなく後味が爽やか。
            </p>
            <p>
              さらに十勝は「日本のチーズ工房の聖地」としても名高く、ヨーロッパの伝統製法を受け継いだ職人たちが手作りするカマンベールやラクレット、ゴーダチーズは国内外のコンテストで最高位の栄誉に輝いています。冬野菜のオーブン焼きに熱々のラクレットをかける瞬間や、赤ワインとともに楽しむチーズ会席は、北の大地の豊穣を実感する至極の瞬間です。
            </p>
          </div>
        </section>

        {/* Section 3: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                【1泊2日モデルコース】初冬の十勝晴れ満喫・白鳥観察と十勝牛ステーキ＆モール温泉の休日
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-amber-600" />
                【1日目】帯広スイーツ・豚丼巡りと琥珀色モール温泉の癒やし
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">12:00</span>
                  <span><strong>JR帯広駅到着＆元祖豚丼ランチ：</strong>駅前の有名老舗店で香ばしい炭火焼き豚丼を味わい、六花亭本店で限定スイーツを堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">14:30</span>
                  <span><strong>十勝川温泉へ移動＆チェックイン：</strong>路線バスまたは車で約25分。十勝川を望む名宿にチェックインし、ウェルカムスイーツで一息。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">16:00</span>
                  <span><strong>天然モール温泉の露天風呂：</strong>夕暮れに染まる十勝中央大橋を眺めながら、琥珀色にとろける植物性モール温泉で肌を潤す。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">18:30</span>
                  <span><strong>極上十勝牛ステーキ会席：</strong>ジューシーな十勝和牛のサーロインステーキ、十勝野ラクレットチーズ、北海道産いくらご飯を堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">20:30</span>
                  <span><strong>初冬の満天星空鑑賞＆サウナ：</strong>澄み切った十勝晴れの夜空に広がる冬の星座を露天風呂から見上げ、ロウリュサウナでととのう。</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/60 space-y-4">
              <div className="flex items-center gap-2 text-amber-800 font-bold text-base pb-2 border-b border-slate-200">
                <Clock className="w-5 h-5 text-amber-600" />
                【2日目】十勝川河畔の白鳥観察と道の駅マルシェ巡り
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">07:00</span>
                  <span><strong>白鳥テラスでバードウォッチング：</strong>朝霧が立ち込める十勝川河川敷へ。シベリアから飛来したオオハクチョウの優美な姿を観察。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">08:15</span>
                  <span><strong>宿で朝食ビュッフェ：</strong>十勝産牛乳、焼きたてパン、地卵のオムレツなど北海道の新鮮素材の朝食を味わいチェックアウト。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">09:45</span>
                  <span><strong>ガーデンスパ十勝川温泉：</strong>マルシェで十勝産チーズや特産品をお土産に購入し、無料のモール温泉足湯でポカポカに。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-bold text-xs shrink-0 mt-0.5">11:30</span>
                  <span><strong>十勝が丘展望台から日高山脈を遠望：</strong>十勝平野の大パノラマを目に焼き付け、帯広駅またはとかち帯広空港へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Travel Tips & Highlights */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Travel Advice & Highlights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の十勝川温泉旅行を120%楽しむための旅の秘訣
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700 leading-relaxed">
            <div className="bg-amber-50/40 rounded-2xl p-5 border border-amber-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <ThermometerSun className="w-5 h-5 text-amber-600" />
                十勝晴れ特有の「放射冷却」に注意
              </h3>
              <p className="leading-relaxed">
                初冬の十勝は雲一つない快晴が広がる日が多い反面、夜間から早朝にかけて地表の熱が奪われる「放射冷却現象」により、氷点下10度前後まで急激に冷え込みます。白鳥観察や夜景鑑賞には厚手の手袋、耳当て、マフラーの着用が必須です。
              </p>
            </div>

            <div className="bg-amber-50/40 rounded-2xl p-5 border border-amber-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Feather className="w-5 h-5 text-amber-600" />
                白鳥観察のゴールデンタイムは朝7時〜8時
              </h3>
              <p className="leading-relaxed">
                オオハクチョウが十勝川河畔で最も活発に活動するのは、朝陽が昇り始める早朝時間帯です。川面から立ち上る川霧（けあらし）と、黄金色に輝く朝日を背景に飛び立つ白鳥たちのシルエットは、息を呑むほど美しい決定的瞬間です。
              </p>
            </div>

            <div className="bg-amber-50/40 rounded-2xl p-5 border border-amber-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-600" />
                冬道運転はスタッドレスタイヤ＆早めのライト点灯
              </h3>
              <p className="leading-relaxed">
                11月下旬以降は降雪やブラックアイスバーン（路面凍結）が発生しやすくなります。レンタカーを利用する場合は必ずスタッドレスタイヤを装着し、急ブレーキ・急ハンドルを避け、車間距離を通常の2倍以上確保して安全運転を心がけてください。
              </p>
            </div>

            <div className="bg-amber-50/40 rounded-2xl p-5 border border-amber-100/60 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Wine className="w-5 h-5 text-amber-600" />
                十勝ワイン「清見」や地ビールとの極上マリアージュ
              </h3>
              <p className="leading-relaxed">
                池田町で栽培される耐寒性ブドウから醸造される「十勝ワイン」は、引き締まった酸味と芳醇な果実味が特徴。濃厚な十勝牛ステーキや十勝産チーズ料理との相乗効果は抜群で、夕食のひとときをより一層優雅に彩ってくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                十勝川温泉の初冬旅行に関するよくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200/60 space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-amber-800 font-extrabold shrink-0">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Internal Links */}
        <section className="bg-gradient-to-br from-slate-900 to-amber-950 text-white rounded-3xl p-8 sm:p-10 space-y-6 shadow-md">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい！北海道＆北日本の冬雪見温泉・美食特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              北海道の大自然に抱かれた名湯や、東北・北陸の極上の雪見露天風呂特集もぜひあわせてチェックしてください。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            <Link 
              href="/winter-hokkaido-toyako-onsen-lakeview-illumination-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-sky-500/40 text-sky-200 font-bold text-[10px]">洞爺湖・雪景色</span>
              <h3 className="font-bold text-white text-sm">洞爺湖温泉・レイクビュー露天と冬のイルミネーションの宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">不凍湖・洞爺湖のパノラマ露天と冬のイルミネーショントンネル。</p>
            </Link>

            <Link 
              href="/winter-hokkaido-sounkyo-onsen-snow-gorge-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-blue-500/40 text-blue-200 font-bold text-[10px]">層雲峡・峡谷美</span>
              <h3 className="font-bold text-white text-sm">層雲峡温泉・大雪山初冬雪景色と名湯源泉掛け流しの宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">大雪山の断崖絶壁が雪化粧をまとう峡谷美と名物上川そば・白滝じゃが。</p>
            </Link>

            <Link 
              href="/winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-amber-500/40 text-amber-200 font-bold text-[10px]">登別・地獄谷雪見</span>
              <h3 className="font-bold text-white text-sm">登別温泉・地獄谷の雪見湯けむりと多彩な名湯巡りの宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">9種類もの泉質が湧く日本有数の温泉郷で味わう北海道海の幸。</p>
            </Link>

            <Link 
              href="/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/15 transition-all text-xs space-y-2 block"
            >
              <span className="px-2 py-0.5 rounded bg-emerald-500/40 text-emerald-200 font-bold text-[10px]">乳頭温泉・秘湯雪見</span>
              <h3 className="font-bold text-white text-sm">乳頭温泉郷・雪見秘湯露天ときりたんぽ鍋・比内地鶏の宿</h3>
              <p className="text-slate-300 text-[11px] line-clamp-2">ブナの原生林に抱かれた乳白色の秘湯と秋田郷土料理のぬくもり。</p>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
