import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Mountain, Eye, Waves, Wine, ThermometerSun, Footprints, Trees, Coffee
} from 'lucide-react';

export const metadata: Metadata = {
  title: '北海道・層雲峡温泉で過ごす冬の旅（11・12月）！名湯硫黄泉！名宿5選',
  description: '11月から12月にかけて、北海道屋根・大雪山連峰の麓に位置する層雲峡温泉は、巨大な柱状節理の断崖絶壁が白銀に染まり。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '層雲峡温泉 宿泊, 北海道 温泉 11月 12月, ホテル大雪, 層雲峡 朝陽亭, 層雲閣, 朝陽リゾートホテル, 層雲峡マウントビューホテル, 大雪山 雪見露天, 上川十勝牛, オホーツク冬海鮮',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hokkaido-sounkyo-onsen-snow-gorge-stay/"
  },
  openGraph: {
    title: '北海道・層雲峡温泉で過ごす冬の旅（11・12月）！名湯硫黄泉！名宿5選',
    description: '11月から12月にかけて、北海道屋根・大雪山連峰の麓に位置する層雲峡温泉は、巨大な柱状節理の断崖絶壁が白銀に染まり。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-hokkaido-sounkyo-onsen-snow-gorge-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の層雲峡温泉と雪景色の大雪山峡谷露天風呂'
      }
    ]
  }
};

const faqList = [
  {
    "q": "層雲峡温泉の11月・12月の気温・積雪状況と冬観光に適した服装・靴は？",
    "a": "大雪山の山麓、標高約670mに位置する層雲峡温泉は、北海道内でも早く冬が訪れる地域です。11月上旬から中旬には初雪が降り、下旬には路面が圧雪または凍結状態になります。11月の平均気温は氷点下〜5℃前後、12月に入ると最高気温でも氷点下（真冬日）が続き、夜間はマイナス10℃以下まで冷え込みます。観光の際は、防風・防水性に優れた厚手のロングダウンジャケット、保温インナー（ヒートテック等）、マフラー、手袋、耳当て付きニット帽が必須です。また、歩道や温泉街の坂道は滑りやすいため、靴底にしっかりとした溝やスパイクが付いた防寒スノーブーツをご着用ください。"
  },
  {
    "q": "11月・12月に層雲峡へ行くメリットやおすすめの見どころは？",
    "a": "11月から12月にかけての層雲峡温泉は、1月下旬から始まる有名な「層雲峡温泉氷瀑まつり」の本格的な混雑期の前であり、静かに雪景色と上質な名湯を独占できる穴場のベストシーズンです。周囲の約200mに及ぶ巨大な柱状節理の断崖絶壁に新雪が積もり、白と黒のモノトーンが織りなす荘厳な水墨画のような景観が広がります。また、大雪山黒岳ロープウェイを利用すれば、標高1,300mの五合目展望台から一面の純白に染まる大雪山連峰の雲海や雪山パノラマを気軽に楽しむことができます。"
  },
  {
    "q": "層雲峡温泉の泉質や効能、湯冷めしにくい入り方は？",
    "a": "層雲峡温泉の主たる泉質は「単純硫黄温泉（硫化水素型）」です。硫黄成分を含みながらも刺激が強すぎず、肌触りがまろやかで肌に優しいのが特徴です。硫黄の働きにより末梢血管が拡張して血流が促進されるため、慢性的な冷え性、神経痛、筋肉痛、疲労回復に優れた効能があります。外気温が氷点下になる11月・12月の露天風呂では、急な温度変化によるヒートショックを防ぐため、内湯でしっかりと身体を芯まで温めてから露天風呂に出るのがポイントです。湯上がりは肌の水分が蒸発しやすいため、保湿ケアをお忘れなく。"
  },
  {
    "q": "旭川駅や札幌・旭川空港から層雲峡温泉へのアクセス・冬の移動手段は？",
    "a": "冬の層雲峡へは公共交通機関または宿泊ホテルの送迎バス利用が最も安全でおすすめです。JR旭川駅からは道北バス「層雲峡行き」で約1時間50分。また、JR石北本線で「上川駅」まで行き、そこから道北バスで約30分でアクセスできます。主要なホテル（朝陽亭、朝陽リゾートホテル、ホテル大雪など）では、札幌駅や旭川駅から宿泊者限定の無料または格安送迎バスを運行しています（事前完全予約制）。冬の峠道やアイスバーン運転の心配がなく、雪景色を眺めながら快適に移動できるため事前予約を強く推奨します。"
  },
  {
    "q": "11月・12月の層雲峡で味わえるおすすめの冬グルメやご当地食材は？",
    "a": "層雲峡が位置する上川町は大雪山の清らかな雪解け水に恵まれた農業・畜産の盛んな地です。きめ細やかな肉質と上品な脂の甘みが特徴の「渓谷味豚（上川ポーク）」や、近隣の十勝地方から届く「十勝牛」のステーキ・すき焼きは冬のごちそうの定番です。また、冬が旬のオホーツク海から仕入れる新鮮な帆立、毛ガニ、脂の乗ったサーモンやイクラ、そして旭川近郊で収穫された甘みたっぷりの越冬根菜を使った鍋料理など、北海道ならではの大自然の恵みを心ゆくまで堪能できます。"
  }
];

export default function HokkaidoSounkyoWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-hokkaido-sounkyo-onsen-snow-gorge-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-hokkaido-sounkyo-onsen-snow-gorge-stay"
        },
        "headline": "【11・12月北海道・層雲峡温泉の初冬峡谷美と大雪山雪見露天】名湯硫黄泉＆上川十勝牛・オホーツク冬海鮮会席の宿5選",
        "description": "11月から12月にかけて、北海道屋根・大雪山連峰の麓に位置する層雲峡温泉は、巨大な柱状節理の断崖絶壁が白銀に染まり、水墨画のような渓谷美が広がる初冬の雪景色を迎えます。厳冬期の氷瀑まつり本番前のこの時期は、静寂に包まれた峡谷でゆったりと雪見露天を満喫できる絶好の隠れシーズン。冷えた身体を芯から温める単純硫黄泉の湯けむり、地元・上川町産ポークやジューシーな十勝牛、オホーツク海直送の冬の味覚を心ゆくまで堪能する厳選温泉ホテル・名旅館5選を徹底ガイドします。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "T10:00:00+09:00",
        "dateModified": "T10:00:00+09:00",
        "publisher": {
          "@type": "Organization",
          "name": "Croud Travel",
          "logo": {
            "@type": "ImageObject",
            "url": "https://croud-travel.pages.dev/logo.png"
          }
        },
        "author": {
          "@type": "Organization",
          "name": "Croud Travel 北海道温泉山岳紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-hokkaido-sounkyo-onsen-snow-gorge-stay#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "特集一覧",
            "item": "https://croud-travel.pages.dev/features"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "北海道・層雲峡温泉 初冬の峡谷雪景色と雪見露天・十勝牛会席の宿",
            "item": "https://croud-travel.pages.dev/winter-hokkaido-sounkyo-onsen-snow-gorge-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-hokkaido-sounkyo-onsen-snow-gorge-stay#faq",
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
              name: "ホテル大雪　ＯＮＳＥＮ＆ＣＡＮＹＯＮ　ＲＥＳＯＲＴ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/40960/40960.jpg",
              rating: 4.39,
              reviews: 1585,
              price: "¥10,750〜",
              access: "車のお越しで、札幌からは約１８０分。旭川空港からは約１００分。旭山動物園からは８０分。",
              special: "層雲峡温泉で一番高台にあり、道内唯一源泉かけ流しの３つの大浴場と２つの露天風呂を持ったホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40960%2F40960.html",
              story: "層雲峡温泉街の中で最も高い標高に位置し、大雪山連峰と峡谷を一望する絶好のロケーションを誇る「ホテル大雪 ONSEN＆CANYON RESORT。」。館内には趣の異なる3つの大浴場と2つの露天風呂があり、特に最上階の展望大浴場「大雪乃湯」や峡谷を眼下に見下ろす露天風呂からのパノラマビューは圧巻です。11月・12月には周囲の針葉樹林と断崖に純白の雪が降り積もり、湯面から立ち上る真っ白な湯けむりと冬の澄んだ青空とのコントラストに息を呑みます。夕食は上川町の大自然が育んだ上川ポークや北海道産牛、旬の海鮮を炭火やグリルで香ばしく仕上げるビュッフェまたは特選和食会席。ゆったりとしたキャニオンラウンジで無料の地酒や珈琲を味わいながら過ごす上質なリゾート滞在が叶います。",
              roomTip: "最上階フロアの和モダン洋室またはキャニオンビュー客室。窓いっぱいに広がる雪化粧した峡谷のダイナミックな岩肌と、静まり返る原生林の雪景色を独占。",
              gourmetTip: "「上川・オホーツク冬の味覚ビュッフェ＆特選会席。」。目の前で焼き上げる上川牛ステーキ、オホーツク直送の帆立・サーモンの刺身、北海道産冬野菜の温野菜せいろ蒸し。",
              highlights: [
                "層雲峡随一の高台から見下ろす峡谷パノラマ＆3つの趣異なる大浴場と2つの雪見絶景露天",
                "地元上川産食材を活かした贅沢ビュッフェ＆居心地の良いキャニオンラウンジでの寛ぎ時間",
                "無料の地酒・珈琲テイスティングサービス＆大雪山連峰の雄大な自然に囲まれたプレミアム滞在"
              ]
            },
            {
              id: 2,
              name: "層雲峡　朝陽亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5502/5502.jpg",
              rating: 3.87,
              reviews: 1867,
              price: "¥12,980〜",
              access: "上川層雲峡ICよりR39号線を北見方面に車で25分/JR上川駅よりバスで30分/札幌旭川送迎バス運行（3/31迄・要予約",
              special: "「最上階天空露天風呂」からは四季折々の渓谷と、満天の星空をお楽しみいただけます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5502%2F5502.html",
              story: "大雪山黒岳の雄姿を正面に仰ぎ、和の情緒と洗練されたモダン空間が調和する名門宿「層雲峡 朝陽亭」。宿自慢の展望大浴場「黒岳」は、ガラス越しに広がる雪を戴く名峰の山並みを眺めながら、さらりとした単純硫黄泉を存分に堪能できる特等席です。また、木造りの温もりあふれる癒しの湯「桂月」では、初冬の澄み切った冷気を感じながら雪見風呂が楽しめます。夕食は囲炉裏を囲む落ち着いた料亭での創作和食会席や、北海道の郷土料理を豊富に取り揃えたバイキング。冬の味覚である石狩鍋や北海カニ汁、道産牛の陶板焼きが身体の芯まで温めてくれます。無料送迎バス（札幌・旭川発着、要予約）も運行しており、冬道の運転が不安な旅行者にも安心です。",
              roomTip: "黒岳を望むマウントビュー和室またはシモンズベッドを配した和モダンツイン。畳の香りに癒やされながら、夕暮れ時に茜色に染まる雪山をゆったり観賞。",
              gourmetTip: "「冬の道産山海の恵み会席」。アツアツの道産牛すき焼き鍋、新鮮な北海魚介の盛り合わせ、香ばしい焼きホタテ、地元上川名物の手打ち風蕎麦。",
              highlights: [
                "大雪山黒岳を正面に望むパノラマ展望大浴場「黒岳」＆木造りの温もりあふれる雪見風呂",
                "落ち着いた料亭での道産山海会席＆札幌・旭川からの無料送迎バス運行で冬道も安心",
                "囲炉裏会席で味わう北海冬の味覚鍋＆広々とした和室で雪山グラデーションを望む休日"
              ]
            },
            {
              id: 3,
              name: "層雲閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/52319/52319.jpg",
              rating: 4.19,
              reviews: 1462,
              price: "¥15,400〜",
              access: "※旭山動物園より車で９０分※ＪＲ石北本線　上川駅よりローカルバスで３５分※上川層雲峡ICより車で２０分",
              special: "2024年 12月28日スタート！オールインクルーシブ～ラウンジでお飲み物、軽食をお愉しみください",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52319%2F52319.html",
              story: "大正年間の開湯以来、層雲峡の歴史とともに歩んできた100年以上の歴史を誇る老舗旅館「層雲閣（旧・層雲閣グランドホテル）」。2022年以降の大規模リニューアルにより、伝統の格式を守りつつ北欧テイストの洗練されたリゾートへと進化しました。最大の魅力は峡谷の自然林に抱かれた野趣あふれる渓谷露天風呂。清らかな層雲峡の沢音と針葉樹に降り積もる新雪を間近に感じながら、名湯掛け流しの湯浴みが楽しめます。食事はオープンキッチンを備えたビュッフェレストランで、目の前でシェフが調理する北海道産牛肉のローストや焼き立てピッツァ、新鮮な刺身や寿司が食べ放題。世代を問わず贅沢な冬の休日を満喫できます。",
              roomTip: "リニューアルされた峡谷側のモダン和洋室。無垢材の温かみを感じるインテリアと広々とした窓辺で、白銀に輝く柱状節理の渓谷美を堪能。",
              gourmetTip: "「北海道厳選プレミアムビュッフェ」。ジューシーな道産牛ロースステーキ、オホーツク産タコとホタテのマリネ、揚げたてサクサクの天ぷら、濃厚な北海道ミルクジェラート。",
              highlights: [
                "創業100余年の老舗が誇る渓谷美一体型露天風呂＆全面改装されたモダンな和洋室",
                "ライブキッチンで職人が仕立てる道産牛ステーキ＆オホーツク海直送の新鮮魚介ビュッフェ",
                "柱状節理の断崖絶壁を間近に感じる圧倒的ロケーション＆三世代ファミリーにも快適な設備"
              ]
            },
            {
              id: 4,
              name: "層雲峡温泉　朝陽リゾートホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29716/29716.jpg",
              rating: 4.01,
              reviews: 2363,
              price: "¥12,650〜",
              access: "JR上川駅下車　道北バスで約３０分/札幌・旭川発の送迎バス運行（迄）",
              special: "２種の源泉「白濁の湯」と「赤茶の湯」は層雲峡エリアで当館だけ！貸切風呂と岩盤浴も利用できます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29716%2F29716.html",
              story: "スイスの山岳山小屋を思わせる赤い三角屋根が印象的なアルペンリゾート「層雲峡温泉 朝陽リゾートホテル」。この宿の最大の特徴は、層雲峡エリアで唯一、性質の異なる「白濁の湯（硫黄泉）」と「赤茶色の湯（含鉄泉）」の2種類の天然温泉を一度に楽しめる点です。木立に囲まれた露天風呂では、舞い散る粉雪を手で受け止めながら濃厚な硫黄の香りに包まれる極上の雪見風呂を体験できます。夕食はスイス料理の要素を取り入れた創作バイキングで、熱々とろとろの特製チーズフォンデュや北海道産ビーフの赤ワイン煮込み、地元の新鮮野菜が並び、洋風の華やかなディナーが楽しめます。カップルや女子旅、一人旅にも人気のスタイリッシュな宿です。",
              roomTip: "北欧山岳リゾート風のツインルームまたは和モダン客室。間接照明が灯る温かな空間で、雪降る白銀の森を眺めながらゆったり読書やティータイム。",
              gourmetTip: "「アルプス＆北海道コラボレーション冬ディナー。」。熱々のとろけるチーズフォンデュ、十勝牛のローストビーフ、オホーツク産魚介のアクアパッツァ、自家製アップルパイ。",
              highlights: [
                "層雲峡唯一の「白濁湯」と「赤茶色の湯」の2大源泉を満喫＆とろける特製チーズフォンデュ",
                "アルペンスタイルの洗練された館内デザイン＆雪景色に映える木立の静寂な露天風呂",
                "女子旅やカップルに大好評の洋風リゾートディナー＆2つの泉質による美肌温浴効果"
              ]
            },
            {
              id: 5,
              name: "層雲峡温泉　層雲峡マウントビューホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41466/41466.jpg",
              rating: 3.88,
              reviews: 475,
              price: "¥8,250〜",
              access: "ＪＲ上川駅よりタクシーで３０分／旭川空港より車で９０分",
              special: "静かな洋風のたたずまいの中で、温泉を楽しみ落ち着いて過ごせる「秘境の森に彩られた天然のいで湯」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41466%2F41466.html",
              story: "層雲峡バスターミナルから徒歩すぐ、ロープウェイ山麓駅にも近い抜群の立地と、リーズナブルな価格設定で高い支持を得る「層雲峡マウントビューホテル」。外観・ロビーは欧風アルペン調のレトロな山小屋の趣があり、登山愛好家や一人旅の旅行者からも厚い信頼を集めています。大浴場には加水・加温を最小限に抑えた天然温泉が満たされており、しっとりと肌を包み込む柔らかな単純硫黄泉が、冬の観光で冷え切った身体を温めてくれます。夕食は北海道の定番・特製豚しゃぶしゃぶ鍋を中心としたアットホームな和食膳。過度な華美さを排し、静かに雪山の情緒と温泉を味わいたい大人旅にうってつけの隠れ宿です。",
              roomTip: "落ち着いた純和室または洋室ツイン。過不足のない清潔な空間で、温泉街の夜景と周囲を取り囲む険しい雪山のシルエットを静かに眺望。",
              gourmetTip: "「上川ポークの温まる特製豚しゃぶ鍋会席」。きめ細かく甘みのある上川町産豚肉を昆布出汁でくぐらせ、自家製ポン酢と胡麻ダレで味わう冬の定番料理。",
              highlights: [
                "バスターミナル徒歩すぐの好立地＆上川ポークしゃぶしゃぶ鍋と加温加水最小限の良質な天然温泉",
                "コストパフォーマンス抜群の宿泊プラン＆静かに雪山の情緒に浸る一人旅や登山拠点に最適",
                "気兼ねなく過ごせるアットホームなおもてなし＆冬の層雲峡峡谷散策のベースキャンプ"
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
          src="https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1600&q=80"
          alt="雪化粧した大雪山連峰と初冬の層雲峡温泉峡谷"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold">
            <Snowflake className="w-4 h-4" />
            11月・12月 冬の雪見露天＆北海グルメ特集｜北海道・層雲峡温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">初冬の峡谷美と大雪山雪見露天<br className="hidden sm:inline" /> 単純硫黄泉＆上川十勝牛・オホーツク海鮮の極上宿5選</h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            白銀に染まる柱状節理の巨大峡谷。氷点下の凛とした寒気の中で立ち上る湯けむりと、芯まで温まる名湯硫黄泉。冬の北海道の醍醐味を凝縮した贅沢なひととき。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-cyan-400" /> 11月〜12月が静寂の穴場期</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-cyan-400" /> 効能豊かな単純硫黄泉</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-cyan-400" /> 上川十勝牛＆冬海鮮会席</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Section 1: Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Mountain className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Sounkyo Winter Wonder</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                白銀の峡谷美と澄み切った雪見風呂｜11月・12月の層雲峡温泉が旅人を魅了する理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              北海道の中央部、大雪山国立公園の北東山麓に位置する「層雲峡温泉（そううんきょうおんせん）」は、石狩川が刻み込んだ約24kmにおよぶ大峡谷の懐に湧く名湯です。秋の紅葉シーズンが終わりを告げる11月上旬から中旬にかけて、標高約670mの温泉街には早くも初雪が舞い降り、12月には周囲の針葉樹林と切り立った柱状節理の巨大な岩壁が一面の純白に染まります。
            </p>
            <p>
              この11月から12月にかけての初冬シーズンは、実は層雲峡温泉を知り尽くした温泉ファンにとって「最高の穴場時期」です。1月下旬から2月にかけて開催される有名な冬の祭典「層雲峡温泉氷瀑まつり」の期間は国内外から非常に多くの観光客が押し寄せますが、11月・12月は温泉街全体が静まり返り、静寂の中でしんしんと降り積もる雪を眺めながら、極上の雪見露天風呂を心ゆくまで堪能できるからです。
            </p>
            <p>
              層雲峡のお湯は、身体を芯から温めて冷え性を改善する「単純硫黄温泉」。湯船から立ち上る硫黄の心地よい香りと、氷点下の外気で引き締まった澄んだ空気が、日々の疲労やストレスを一瞬で解き放ってくれます。夕食には大雪山の豊かな雪解け水で育った上川町産の銘柄ポークや十勝牛のステーキ、そして冷たいオホーツク海から直送される脂の乗った冬の魚介類が贅沢に並びます。冬の北海道旅行で一度は訪れたい、至高の温泉宿5選を詳しくご紹介します。
            </p>
          </div>
        </section>

        {/* Section 1.5: Detailed Winter Landscape & Attractions */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Trees className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Natural Splendor</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                柱状節理の巨大断崖と銀世界のコントラスト｜初冬の大雪山が織りなす荘厳な風景美
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              層雲峡を世界的に有名たらしめているのが、約3万年前の大雪山大噴火によって形成された大規模な柱状節理の断崖絶壁です。高さ200メートルにも達する垂直の岩肌が何キロメートルにもわたって連なり、その間を縫うように清らかな石狩川が流れます。11月から12月にかけて、この巨大な岩肌の窪みや段差に降り積もる新雪が、まるで水墨画の筆使いのように繊細で力強い陰影を生み出します。
            </p>
            <p>
              名瀑として名高い「流星の滝」「銀河の滝」周辺では、初冬の冷え込みとともに飛沫が凍りつき、巨大な氷柱へと成長していく神秘的な過程を観察できます。完全な氷壁となる真冬の姿とはまた異なり、轟々と流れ落ちる清流と、その周囲を取り囲む青白い氷の造形美が共存する姿は、この初冬の時期にしか出逢えない奇跡の絶景です。
            </p>
            <p>
              また、温泉街を見下ろす大雪山黒岳（標高1,984m）は、11月にはすでに完全な白銀の冠雪を戴き、晴れた日の青空とのコントラストは息を呑む美しさです。標高差があるため、山麓の温泉街が穏やかな曇り空であっても、ロープウェイで五合目に登れば雲海の上に突き抜ける快晴が広がることも珍しくありません。
            </p>
          </div>
        </section>

        {/* Section 1.8: Winter 2-Day 1-Night Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Sounkyo Winter Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の層雲峡温泉1泊2日満喫モデルコース｜雪見露天と大雪山雲海パノラマ紀行
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              <strong>【1日目：白銀の峡谷美と名湯チェックイン】</strong><br />
              JR旭川駅から宿泊ホテルの無料送迎バスまたは路線バスに乗車し、白銀に染まる上川盆地を抜けて層雲峡温泉へ向かいます。正午過ぎに層雲峡温泉バスターミナルへ到着後、まずは温泉街の食事処で上川名物の温かい手打ち蕎麦や旭川ラーメンでランチ。午後は「大雪山黒岳ロープウェイ」に乗車し、わずか7分で標高1,300mの五合目展望デッキへ。足元に広がる純白の雲海と大雪山の主峰群を見晴らす大パノラマを堪能します。15時に宿泊ホテルへチェックイン。夕暮れ前に早速、雪化粧した峡谷を見下ろす展望露天風呂へ。氷点下の冷気で頭をすっきりさせながら、熱々の単純硫黄泉に浸かる至福を味わいます。夕食は上川牛のステーキやオホーツク海の冬魚介を味わう特選ビュッフェや個室会席を堪能。
            </p>
            <p>
              <strong>【2日目：初冬の朝湯と渓谷散策・お土産めぐり】</strong><br />
              朝は少し早起きして、朝日に輝く雪山を眺めながらの朝風呂を満喫。朝食バイキングで北海道産いくらや焼き立てパン、温かい郷土汁をしっかり補給。チェックアウト後は、タクシーまたは路線バスで「銀河・流星の滝」へ足を伸ばし、滝が凍結し始める初冬ならではのダイナミックな渓谷美を鑑賞します。温泉街へ戻り、層雲峡ビジターセンターで大雪山の自然や動物たちの越冬生態について学び、特産の上川ポーク加工品や地酒「神川」をお土産に購入。旭川行きのバスに乗車し、充実の冬旅を締めくくります。
            </p>
          </div>
        </section>

        {/* Section 2: Recommended Hotels List */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Selected Ryokan & Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              初冬の層雲峡温泉を満喫する厳選おすすめ宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
              大雪山連峰を望む絶景展望露天風呂、極上ビュッフェや個室会席、アクセス至便な温泉宿まで、現地取材に基づき厳選しました。
            </p>
          </div>

          <div className="space-y-10">
            {hotels.map((h) => (
              <div 
                key={h.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/90 hover:shadow-md transition duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Image Column */}
                  <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px] bg-slate-100">
                    <Image
                      src={h.img}
                      alt={h.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                          <span className="inline-flex items-center gap-1 text-amber-600 font-bold bg-amber-50 px-2.5 py-1 rounded-md">
                            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                            {h.rating} ({h.reviews}件のクチコミ)
                          </span>
                          <span className="text-slate-500 flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-slate-400" />
                            北海道上川郡上川町層雲峡
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                          {h.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-cyan-800 font-medium bg-cyan-50/70 px-3 py-1.5 rounded-lg border border-cyan-100/80">
                          {h.special}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {h.story}
                      </p>

                      {/* Detail Points */}
                      <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs sm:text-sm">
                        <div className="flex items-start gap-2 text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-cyan-800 shrink-0 mt-0.5" />
                          <span><strong className="text-slate-900 font-semibold">客室の魅力：</strong>{h.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2 text-slate-700">
                          <Utensils className="w-4 h-4 text-cyan-800 shrink-0 mt-0.5" />
                          <span><strong className="text-slate-900 font-semibold">冬の美食：</strong>{h.gourmetTip}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="bg-slate-50 rounded-2xl p-4 space-y-2 text-xs text-slate-600">
                        <span className="font-bold text-slate-800 block text-xs uppercase tracking-wide">この宿の注目ポイント</span>
                        <ul className="space-y-1.5">
                          {h.highlights.map((hl: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-slate-400 block">参考宿泊料金（2名1室時・1名あたり）</span>
                        <span className="text-2xl font-extrabold text-cyan-800">{h.price}</span>
                        <span className="text-xs text-slate-500 ml-1">※プラン・日程により変動</span>
                      </div>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm shadow-md shadow-cyan-900/10 transition duration-200 group"
                      >
                        <span>空室・宿泊プランを確認する</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Winter Gourmet & Attractions */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Winter Gastronomy & Sightseeing</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の層雲峡で味わう極上グルメと初冬の絶景アクティビティ
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <div className="bg-slate-50 rounded-2xl p-6 space-y-3 border border-slate-200/70">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500" />
                上川銘柄豚と十勝牛・オホーツク冬海鮮
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                層雲峡が位置する上川地方は、大雪山のミネラル豊富な伏流水で育つ「上川ポーク（渓谷味豚）」が名物。きめ細かく柔らかい肉質と甘い脂身は、冬のしゃぶしゃぶやすき焼きに格別の味わいです。さらに十勝平野から届くジューシーな黒毛和牛ステーキや、オホーツク海で獲れたばかりの冬ホタテ、毛ガニ、鮭いくらが膳を彩ります。
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 space-y-3 border border-slate-200/70">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Mountain className="w-5 h-5 text-cyan-600" />
                大雪山黒岳ロープウェイと白銀の大パノラマ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                温泉街から徒歩ですぐの大雪山層雲峡・黒岳ロープウェイに乗れば、約7分で標高1,300mの五合目へアクセス可能。11月・12月には山頂部から山腹にかけて純白のパウダースノーに覆われ、眼下に広がる雄大な雲海や白銀の針葉樹林を見渡す感動の雪山パノラマが眼前に広がります。冬の澄んだ空気ならではの透明感ある眺望は必見です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Hot Spring Qualities */}
        <section className="bg-gradient-to-br from-cyan-900 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-800">
            <div className="p-2.5 rounded-2xl bg-cyan-800/80 text-cyan-300">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">Healing Hot Springs</span>
              <h2 className="text-xl sm:text-2xl font-bold">
                身体の芯から温まる単純硫黄泉｜層雲峡の湯力と冷え性改善効果
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-200 leading-relaxed">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 space-y-2">
              <h4 className="font-bold text-cyan-300 text-sm">まろやかな単純硫黄泉</h4>
              <p>
                層雲峡の源泉は刺激が強すぎず、肌にやさしく馴染む単純硫黄温泉。ほのかな硫黄の香りが心地よく、古い角質を落として肌をなめらかに整える美肌効果が期待できます。
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 space-y-2">
              <h4 className="font-bold text-cyan-300 text-sm">血行促進と抜群の保温力</h4>
              <p>
                硫黄成分が末梢血管を優しく広げ、血流を促すことで全身がぽかぽかに温まります。外気温が氷点下になる冬の北海道でも湯冷めしにくく、冷え性や関節痛に優れた効果を発揮します。
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 space-y-2">
              <h4 className="font-bold text-cyan-300 text-sm">幻想的な雪見露天風呂</h4>
              <p>
                氷点下の凛とした寒気の中で浸かる熱々の露天風呂は格別の贅沢。舞い散る粉雪と湯面から立ち上る湯けむり、白銀の柱状節理の岩肌が織りなす冬だけの幻想的な癒やしを体験できます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Access & Winter Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Travel Planning & Route</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                層雲峡温泉へのアクセスと冬旅を快適に楽しむポイント
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              冬期の北海道内陸部は降雪や路面凍結が日常的であるため、レンタカーでの移動よりも<strong>公共交通機関や宿泊ホテルの送迎バス</strong>を利用するのが最も安心で確実です。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">JR・路線バスを利用する場合</span>
                <p className="text-slate-600">
                  JR旭川駅から道北バス「層雲峡行き」で約1時間50分（片道約2,140円）。またはJR石北本線「上川駅」から道北バスで約30分。定時運行で安全にアクセスできます。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">各ホテルの無料・格安送迎バス</span>
                <p className="text-slate-600">
                  朝陽亭、朝陽リゾートホテル、ホテル大雪などでは、JR札幌駅北口やJR旭川駅前から直通送迎バスを運行しています（事前完全予約制）。冬道運転のストレスなく快適に直行できます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                北海道・層雲峡温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-cyan-800 font-extrabold">Q.</span>
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
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Related Hokkaido & Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい北海道の冬名湯＆極上雪景色特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の初冬から真冬にかけて訪れたい北海道各地の名湯・雪見露天・冬グルメ特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-hokkaido-toyako-onsen-lakeview-illumination-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">北海道・洞爺湖温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">初冬イルミネーションと冠雪羊蹄山絶景・インフィニティ露天の宿</h3>
            </Link>
            <Link 
              href="/winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">北海道・登別温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">白銀の地獄谷と名湯九泉・初冬雪見露天風呂の宿</h3>
            </Link>
            <Link 
              href="/winter-hokkaido-niseko-onsen-powder-snow-yotei-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">北海道・ニセコ温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">極上パウダースノーと羊蹄山ビュー露天・美食リゾートの宿</h3>
            </Link>
            <Link 
              href="/winter-aomori-asamushi-onsen-mutsu-bay-maguro-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">青森・浅虫温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">陸奥湾の初冬夕景と肉厚ホタテ・津軽三味線ライブの宿</h3>
            </Link>
            <Link 
              href="/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">秋田・乳頭温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">秘湯白濁の湯とブナ原生林の雪景色・比内地鶏きりたんぽ鍋の宿</h3>
            </Link>
            <Link 
              href="/winter-zao-snow-monster-ice-tree-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">山形・蔵王温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">樹氷スノーモンスターと強酸性美肌硫黄泉・山形牛すき焼きの宿</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-hokkaido-sounkyo-onsen-snow-gorge-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
