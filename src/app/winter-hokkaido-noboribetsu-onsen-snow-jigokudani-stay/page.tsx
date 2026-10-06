import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Mountain, Droplets
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月登別温泉】圧倒的湯量と9つの泉質！名宿5選',
  description: '11月下旬の初雪から12月の白銀世界へと移ろう北海道・登別温泉。荒涼とした岩肌からもうもうと白煙を上げる雪化粧の地獄谷。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '登別温泉 宿泊 11月 12月, 登別 地獄谷 雪景色, 登別温泉 第一滝本館, 登別 毛ガニ 白老牛, 登別温泉 おすすめ 宿, 登別 泉質 露天風呂, 北海道 冬 温泉 モデルコース',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay/",
  },
  openGraph: {
    title: '【11・12月登別温泉】圧倒的湯量と9つの泉質！名宿5選',
    description: '11月下旬の初雪から12月の白銀世界へと移ろう北海道・登別温泉。荒涼とした岩肌からもうもうと白煙を上げる雪化粧の地獄谷。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月登別温泉の白銀地獄谷と極上名湯】圧倒的湯量と9つの泉質・冬の北海道毛ガニ＆白老牛を堪能する名宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月登別温泉の白銀地獄谷と極上名湯】圧倒的湯量と9つの泉質・冬の北海道毛ガニ＆白老牛を堪能する名宿5選",
    description: "11月下旬の初雪から12月の白銀世界へと移ろう北海道・登別温泉。荒涼とした岩肌からもうもうと白煙を上げる雪化粧の地獄谷、世界でも稀な9種類もの多彩な泉質を誇る名湯巡り。冬に身がぎっしり詰まる北海道産毛ガニと地元胆振の最高峰ブランド白老牛ステーキに舌鼓を打つ冬の極上北国旅ガイド。",
  }
};

export default function NoboribetsuWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay#article",
        "headline": "【11・12月登別温泉の白銀地獄谷と極上名湯】圧倒的湯量と9つの泉質・冬の北海道毛ガニ＆白老牛を堪能する名宿5選",
        "description": "11月下旬の初雪から12月の白銀世界へと移ろう北海道・登別温泉。荒涼とした岩肌からもうもうと白煙を上げる雪化粧の地獄谷、世界でも稀な9種類もの多彩な泉質を誇る名湯巡り。冬に身がぎっしり詰まる北海道産毛ガニと地元胆振の最高峰ブランド白老牛ステーキに舌鼓を打つ冬の極上北国旅ガイド。",
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
          "@id": "https://croud-travel.pages.dev/winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "登別温泉の11月・12月の雪の状況と気温、服装のアドバイスは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "登別温泉は11月中旬頃に初雪が降り、12月に入ると本格的な積雪期に入ります。11月の平均気温は約3〜5度、朝晩は0度前後に冷え込みます。12月は日中でも氷点下になる日が多く、朝晩はマイナス5度以下まで下がります。ダウンジャケットや厚手のウールコート、手袋、マフラー、ニット帽の防寒具が必須です。道路や歩道は圧雪や凍結（ブラックアイスバーン）になるため、靴底にしっかりとした溝のあるスノーブーツや滑り止め付きの靴をご用意ください。"
            }
          },
          {
            "@type": "Question",
            "name": "登別温泉の「9種類の泉質」とは具体的にどのようなものですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "登別温泉は1日に1万トン以上湧出する世界的にも稀有な温泉地で、代表的な『硫黄泉』（白濁し血管を拡張・血行促進）、『食塩泉』（温まりの湯で保温効果抜群）、『明礬泉』（肌を引き締める）、『芒硝泉』（美肌と動脈硬化予防）、『緑礬泉』（鉄分を含み貧血改善）、『鉄泉』、『酸性鉄泉』、『重曹泉』（肌を滑らかにする美人の湯）、『ラジウム泉』の9種類が存在します。宿の大浴場ごとに引いている源泉が異なるため、多彩な効能の湯めぐりが楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "新千歳空港や札幌からのアクセス方法と冬の移動時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "新千歳空港からは、直行の高速バス『高速登別温泉エアポート号』で約1時間15分、またはJR快速エアポートと特急北斗を乗り継いでJR登別駅まで約50分＋路線バス約15分です。札幌駅からは直行の都市間高速バス『高速おんせん号』で約1時間40分、またはJR特急で約1時間10分＋路線バスです。冬場は降雪により道路の遅延やJRの徐行運転が発生することがあるため、移動時間には余裕を持ったスケジュールをおすすめします。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の登別温泉で味わうべきご当地グルメは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬に身がぎっしりと詰まり濃厚なカニ味噌が絶品の『北海道産毛ガニ』、地元胆振の洞爺・白老地区で肥育される最高峰黒毛和牛『白老牛（しらおいぎゅう）』のステーキやすき焼き、冬の噴火湾で獲れる肉厚なホタテや真タラの白子（タチ）、地元B級グルメとして人気の『登別閻魔やきそば』などが代表的です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "登別温泉　第一滝本館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30109%2F30109.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "登別温泉　ホテル　まほろば",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12568%2F12568.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "望楼ＮＯＧＵＣＨＩ登別",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51198%2F51198.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "登別温泉　登別グランドホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39175%2F39175.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "花鐘亭はなや",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54865%2F54865.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "登別温泉　第一滝本館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30109/30109.jpg",
              rating: 4.55,
              reviews: 3942,
              price: "¥17,290〜",
              access: "JR登別駅よりバス又はタクシーで約15分／道央道登別東ＩＣから車で約10分／新千歳空港から車で約60分",
              special: "地獄谷と対峙するロケーション。湧き出る5つの泉質を35種の浴槽で。ようこそ、『第一滝本館』へ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30109%2F30109.html",
              story: "創業安政5（1858）年、登別温泉の開祖・滝本金蔵の志を今に受け継ぐ「第一滝本館」。地獄谷に最も近い特等席に位置し、圧巻は総敷地面積約1,500坪を誇る3階建ての巨大な大浴場「温泉天国」です。登別に湧く多彩な泉質のうち、硫黄泉、食塩泉、芒硝泉、酸性緑礬泉、重曹泉という5つの異なる源泉を贅沢に引き込み、大小35もの浴槽で湯めぐりが楽しめます。特に初冬の白銀に覆われた地獄谷を一望するパノラマ大浴殿からの眺めは圧巻の一言。雪が舞い散る中、もうもうと立ち上る噴煙を眺めながら白濁した硫黄泉に浸かるひとときは、まさに北国の冬の真骨頂です。",
              roomTip: "地獄谷側の上層階客室がおすすめ。障子を開ければ、初雪に化粧された荒涼たる地獄谷の谷底から立ち昇る神秘的な白い湯けむりを独占できます。",
              gourmetTip: "夕食は北海道の冬の味覚を極めた豪華バイキングまたは個室会席。身がぎっしり詰まった本場北海道産毛ガニやズワイガニの食べ比べ、脂の乗った旬の刺身、北海道産牛ステーキの鉄板焼きなど北の恵みが咲き誇ります。",
              highlights: [
                "総敷地1500坪の巨大大浴場「温泉天国」＆5つの泉質・35の湯船巡り",
                "雪化粧の地獄谷を一望する大パノラマ露天風呂＆乳白色硫黄泉の極楽",
                "北海道産毛ガニや旬刺身・道産牛ステーキを堪能する豪華会席ビュッフェ"
              ]
            },
            {
              id: 2,
              name: "登別温泉　ホテル　まほろば",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12568/12568.jpg",
              rating: 4.32,
              reviews: 2906,
              price: "¥11,500〜",
              access: "ＪＲ登別駅～登別温泉行バス約15分+徒歩約3分/道央道～登別東ＩＣより約10分※JR特急札幌より約70分・千歳約50分",
              special: "日本最大級露天風呂と３１のお風呂で本物の温泉リゾートを満喫！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12568%2F12568.html",
              story: "日本最大級の広さを誇る大浴場に、実に31種類もの浴槽を備えた一大エンターテインメント温泉旅館「ホテル まほろば」。登別の名湯である硫黄泉、食塩泉、単純温泉、酸性鉄泉の4種類の源泉を贅沢に引き込み、地下1階と地下2階に広がる風情異なる大浴場「すずらん」と「ささらい」で湯めぐり三昧が叶います。日本庭園を模した広大な露天風呂には打たせ湯や檜風呂、滑り台付きのファミリースパまで完備。11月・12月の冷え込む夜、雪吊りが施された庭園の木々を眺めながら乳白色の硫黄泉に体を沈めれば、日々の喧騒が嘘のように溶け去っていきます。",
              roomTip: "広々としたモダン和洋室や、プライベートな源泉露天風呂付きスイートが人気。上質なシモンズ製ベッドで冬の温泉旅の眠りを快適にサポートします。",
              gourmetTip: "名物「三大ガニ食べ放題バイキング」。毛ガニ、タラバガニ、ズワイガニの豪華競演に加え、いくら掛け放題の海鮮丼、目の前で焼き上げる熱々の牛ステーキなど、冬の北海道の贅を尽くした圧巻のメニューです。",
              highlights: [
                "日本最大級31の浴槽＆硫黄泉・食塩泉・単純泉・酸性鉄泉の4源泉",
                "雪吊り庭園露天風呂＆三大ガニ（毛ガニ・ズワイ・タラバ）食べ放題バイキング",
                "いくら掛け放題海鮮丼と熱々焼き立て牛ステーキの圧倒的満足度"
              ]
            },
            {
              id: 3,
              name: "望楼ＮＯＧＵＣＨＩ登別",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/51198/51198.jpg",
              rating: 4.52,
              reviews: 458,
              price: "¥43,500〜",
              access: "札幌・新千歳空港より有料送迎バス運行。ＪＲ登別駅よりバスで２０分（「足湯入口」行きへ乗車「足湯入口」で下車）",
              special: "全室スイートルーム、登別の自然を望む温泉かけ流し展望風呂付。夕食・朝食ともに個室食事処。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51198%2F51198.html",
              story: "登別の温泉街奥深くに佇み、全客室が50平米以上の広さを誇る展望温泉風呂付きスイートという極上の大人の隠れ宿「望楼NOGUCHI登別」。現代美術館を思わせる洗練されたモダン建築と静寂が、贅沢な非日常ステイを演出します。客室のリビング奥に設えられたプライベートな温泉展望風呂には、登別の名湯が惜しげもなく注がれ、窓越しに初冬の原生林の雪景色を眺めながら誰にも邪魔されない至福の入浴が可能。大人のためのバーラウンジやライブラリーも充実しており、夫婦の記念日や大切な人との冬の特別な旅に選ばれ続けています。",
              roomTip: "全室が温泉展望風呂付きのスイートルーム。初冬の森に面した大きな一枚ガラスの窓辺に湯船が配置され、贅沢なプライベート雪見風呂を心ゆくまで堪能できます。",
              gourmetTip: "北海道の食材をフレンチの技法と和の繊細さで昇華させた創作会席料理。地元白老牛のフィレステーキ、噴火湾産ホタテや真タラの白子、蝦夷鮑など、器と盛り付けにも美意識が宿る珠玉のフルコースです。",
              highlights: [
                "全室50平米以上の展望温泉風呂付きスイート＆建築美に包まれる大人の隠れ宿",
                "原生林の初雪を望む客室温泉風呂＆白老牛フィレ肉と冬魚介の創作和フレンチ",
                "プライベート空間で味わう噴火湾ホタテや蝦夷鮑のハイエンドディナー"
              ]
            },
            {
              id: 4,
              name: "登別温泉　登別グランドホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/39175/39175.jpg",
              rating: 4.25,
              reviews: 3320,
              price: "¥16,500〜",
              access: "JR登別駅からタクシーにて約13分、路線バスにて登別駅⇒登別温泉ターミナル約15分（バス運賃片道350円）",
              special: "鬼サウナで、鬼ととのう。「サウナシュラン2023」5位受賞！【楽天トラベルアワード2年連続金賞受賞】",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39175%2F39175.html",
              story: "昭和13（1938）年創業、「登別の迎賓館」と称され昭和天皇もご宿泊された由緒正しきクラシックホテル「登別グランドホテル」。洋の気品と和の寛ぎが調和した館内には、登別で唯一の本格的なドーム型ローマ風大浴場が広がります。天井高くまで響く温泉の音と湯気に包まれ、硫黄泉、食塩泉、鉄泉の3つの名湯を満喫。さらに近年新設された日本庭園を望む鬼サウナ・清流サウナは全国のサウナ愛好家からも熱烈な支持を集めています。雪化粧した巨大な滝が流れ落ちる庭園露天風呂で外気浴を楽しめば、冬の澄んだ空気とともに究極の「ととのい」へと導かれます。",
              roomTip: "クラシカルな気品漂う洋室や、落ち着きある和洋室が人気。庭園の白銀風景を望みながら優雅なティータイムを過ごせます。",
              gourmetTip: "北海道の旬を味わう洋食・和食のグランビュッフェまたは割烹会席。登別近郊の白老牛のローストビーフや、冬の噴火湾で獲れた新鮮な魚介の握り寿司、熱々のブイヤベースなど洗練された味わいが並びます。",
              highlights: [
                "創業昭和13年の迎賓館格式＆本格ドーム型ローマ風大浴場と極上サウナ",
                "冬の滝が流れる庭園露天風呂での外気浴＆白老牛ローストビーフの贅",
                "和洋の技が光る洗練されたグランビュッフェ＆噴火湾海の幸握り"
              ]
            },
            {
              id: 5,
              name: "花鐘亭はなや",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/54865/54865.jpg",
              rating: 4.52,
              reviews: 722,
              price: "¥17,700〜",
              access: "登別駅より無料送迎バス（要予約）。または登別温泉行きバス乗車つつじ橋バス停（はなや前）下車。登別東インターから車で５分。",
              special: "「野に咲く小さな花のように」をモットーに小さくてもゆっくりとおくつろぎ頂けます様、努めております。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54865%2F54865.html",
              story: "登別温泉街のメインストリートから少し離れた静かな高台に建つ、全21室の純和風の小宿「花鐘亭はなや」。大型ホテルが建ち並ぶ登別において、きめ細やかなおもてなしと静寂を愛する旅人に支持される隠れ家です。源泉かけ流しの天然温泉は、登別の象徴である乳白色の硫黄泉。小さな宿だからこそ湯の鮮度が極めて高く、浴槽には湯の花が舞い、独特の硫黄の香りが旅情をそそります。夕食・朝食ともにお部屋食または個室食事処で提供され、周りを気にせずゆったりとプライベートな食事の時間を過ごせるのも嬉しい魅力です。",
              roomTip: "落ち着いた畳の香りが心地よい純和風客室。窓の外に広がる山あいの雪景色を眺めながら、静かに流れる時間に癒されます。",
              gourmetTip: "料理長が一品一品手間暇をかけて仕立てる本格京風会席。北海道の冬の恵みである毛ガニや旬の刺身、道産牛の陶板焼きなど、温かいものは温かいうちに運ばれる心のこもった料理が堪能できます。",
              highlights: [
                "全21室の静寂な純和風小宿＆乳白色の極上生硫黄泉かけ流しとお部屋食",
                "湯の花舞う鮮度抜群の源泉＆板前が腕を振るう京風本格会席の滋味",
                "温かなものは温かいうちに運ばれるお部屋食＆冬の毛ガニと道産牛陶板焼き"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-cyan-900 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="冬の登別温泉・白銀の雪化粧に包まれた地獄谷と立ち上る白煙の湯けむり"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 text-cyan-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-cyan-800/50">
            <Snowflake className="w-4 h-4 text-cyan-300" />
            <span>11月・12月限定 北海道名湯・白銀地獄谷と極上名湯特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月登別温泉の白銀地獄谷と極上名湯】<br className="hidden sm:inline" />
            圧倒的湯量と9つの泉質・冬の北海道毛ガニ＆白老牛を堪能する名宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            初雪に染まる北の大地。荒涼とした地獄谷の岩肌から天を突くように立ち昇る圧倒的な白煙。世界でも類を見ない9種類の泉質を誇る名湯に身を沈め、身入りの良い冬の毛ガニととろける極上白老牛に舌鼓を打つ、感動の冬旅へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> 北海道登別市（登別温泉）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Mountain className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Geological Wonder & Thermal Power</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                雪煙舞う白銀の地獄谷。大地の鼓動を肌で感じる世界的温泉デパート
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            北海道南西部、太平洋を臨む胆振地方に位置する登別温泉。日和山の爆発火口跡である周囲約4キロメートルの「地獄谷」からは、毎分3,000リットル以上もの高温の源泉がごうごうと音を立てて湧出しています。アイヌの人々が古くから「ヌプルペッ（色の濃い川・濁った川）」と呼び、傷や病を癒やす聖なる湯として尊んできた歴史を持ちます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月下旬を迎えると、山肌を覆う原生林が純白の雪で覆われ始め、12月には本格的な銀世界へと変貌を遂げます。黒々とした荒々しい岩肌と純白の雪、そして地底から吹き上がる純白の噴煙が織りなす冬の地獄谷の景観は、息をのむほどの壮絶な美しさ。冷涼な風が吹き抜ける展望台に立つと、立ち上る白煙が視界を覆い、かすかな硫黄の香りが旅人の五感を刺激します。夜には地獄谷の遊歩道に「鬼火の路」が灯り、雪の中に幽玄な光の道が浮かび上がります。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            登別の真髄は何と言っても「1つの温泉地に9種類もの泉質が集結している」という世界的な奇跡にあります。濃厚な乳白色で血行を促す硫黄泉、塩分の皮膜で湯冷めを防ぐ食塩泉、皮膚の角質をなめらかに整える重曹泉や明礬泉など、宿の大浴場ごとに多彩な湯船が用意されています。氷点下の外気の中で雪見露天風呂に浸かり、身体の芯まで熱が染み渡った後は、冬に最も甘みと身の締まりが増す北海道産毛ガニと、霜降りの美しさを誇るブランド黒毛和牛「白老牛」を味わう。これこそが北の大地が旅人に与える最高の至福です。
          </p>
          
          <div className="bg-cyan-50/70 rounded-2xl p-5 border border-cyan-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-cyan-800" />
                <span>冬の地獄谷ライトアップ「鬼火の路」</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                日没から21:30まで点灯。雪化粧した地獄谷の谷底へ続く木道がフットライトで照らされ、幻想的な夜の散策が楽しめます。
              </p>
            </div>
            <div className="px-4 py-2 bg-cyan-800 text-white rounded-xl text-xs font-bold whitespace-nowrap shadow-sm">
              通年点灯・冬景色必見
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-800 flex items-center justify-center font-black text-xl">
              1
            </div>
            <h3 className="font-bold text-stone-900 text-base">世界有数の9大泉質を誇る温泉天国</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              硫黄泉・食塩泉・明礬泉・重曹泉など9つの泉質が集中して湧出。1つの宿で多彩な源泉のかけ流し湯めぐりが楽しめる圧倒的な湯力。
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center font-black text-xl">
              2
            </div>
            <h3 className="font-bold text-stone-900 text-base">初雪と白煙が織りなす地獄谷の大パノラマ</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              11月下旬から12月にかけて雪化粧する地獄谷。雪の白と噴煙の白が重なり合うダイナミックな冬の絶景と幻想的な「鬼火の路」散策。
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-800 flex items-center justify-center font-black text-xl">
              3
            </div>
            <h3 className="font-bold text-stone-900 text-base">北海道産冬の毛ガニ＆最高峰白老牛</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              冬に身入りが最高となる北海道産毛ガニの濃厚なカニ味噌、地元胆振が誇る最高峰ブランド黒毛和牛「白老牛」ステーキの至福の味覚。
            </p>
          </div>
        </section>

        {/* Hotel List Section */}
        <section className="space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest bg-cyan-50 px-3.5 py-1.5 rounded-full border border-cyan-200">
              Selected 5 Ryokan & Hotels
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              【11・12月】登別温泉で泊まりたい極上名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              楽天トラベルで圧倒的な支持を集める老舗宿から、35の湯船を誇る温泉天国、全室スイートの最高級宿まで、登別の冬を堪能できる5軒を厳選。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row group"
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
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
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
                      <span className="text-xs font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-lg">
                        {hotel.access}
                      </span>
                      <div className="flex items-center gap-1.5 text-stone-700 text-xs sm:text-sm font-bold">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-stone-900 font-extrabold text-base">{hotel.rating}</span>
                        <span className="text-stone-400 font-normal">（{hotel.reviews}件のクチコミ）</span>
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-cyan-800 transition">
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
                          <CheckCircle2 className="w-4 h-4 text-cyan-700 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                    <div className="text-xs text-stone-500 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-700" />
                      <span>楽天トラベル公式連携・最低価格保証プランあり</span>
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
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
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                【1泊2日】初冬の登別温泉 地獄谷絶景＆北国美食満喫モデルコース
              </h2>
            </div>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-200 space-y-8">
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-cyan-700 ring-4 ring-cyan-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-cyan-800 tracking-wider">1日目 13:00</span>
                <h3 className="text-base font-bold text-stone-900">新千歳空港または札幌から登別温泉街へ到着</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  高速バスまたはJRで登別温泉へ。巨大な赤鬼のモニュメントが迎える温泉街の玄関口に到着。まずは極楽通り商店街の閻魔堂でカラクリ仕掛けの閻魔大王の変相を観賞。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-cyan-700 ring-4 ring-cyan-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-cyan-800 tracking-wider">1日目 14:00</span>
                <h3 className="text-base font-bold text-stone-900">初冬の地獄谷展望台へ・白煙上がる雪景色を体感</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  温泉街の奥に広がる地獄谷展望台へ。初雪に覆われた荒涼たる岩肌と、至る所から噴き出す純白の蒸気が織りなす大自然の驚異を散策路から間近に体感します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-cyan-700 ring-4 ring-cyan-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-cyan-800 tracking-wider">1日目 15:30</span>
                <h3 className="text-base font-bold text-stone-900">宿へチェックイン・多彩な源泉めぐりと雪見露天風呂</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  宿にチェックイン後、大浴場へ直行。濃厚な乳白色の硫黄泉や食塩泉など、登別が誇る極上泉質をじっくりと湯めぐり。舞い散る雪を眺めながらの露天風呂で旅の疲れを洗い流します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-cyan-700 ring-4 ring-cyan-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-cyan-800 tracking-wider">1日目 17:30</span>
                <h3 className="text-base font-bold text-stone-900">夜の地獄谷「鬼火の路」幻想的なライトアップ散策</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  夕食前に防寒具を着込んで再び地獄谷へ。雪の積もる木道にフットライトが灯り、闇夜に白煙が青白く浮かび上がる幽玄な「鬼火の路」を散策します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-cyan-700 ring-4 ring-cyan-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-cyan-800 tracking-wider">1日目 19:00</span>
                <h3 className="text-base font-bold text-stone-900">夕食・北海道産毛ガニと白老牛ステーキの豪華会席</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  身入りのぎっしり詰まった冬の毛ガニ、きめ細やかな霜降りの白老牛ステーキ、噴火湾産ホタテや真タラの白子など、北海道の冬のオールスター食材を満喫。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-cyan-700 ring-4 ring-cyan-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-cyan-800 tracking-wider">2日目 08:00</span>
                <h3 className="text-base font-bold text-stone-900">朝の清涼な空気で浸かる朝風呂＆北海道名物朝食</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  早朝の澄んだ空気の中で朝露天風呂へ。朝食にはいくら掛け放題の海鮮丼や焼き立ての鮭、北海道産米のふっくらご飯をたっぷり堪能。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-cyan-700 ring-4 ring-cyan-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-cyan-800 tracking-wider">2日目 10:30</span>
                <h3 className="text-base font-bold text-stone-900">登別クマ牧場ロープウェイまたは大湯沼天然足湯へ</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  ロープウェイで登別クマ牧場へ登り、ユーモラスなヒグマたちと倶多楽湖の絶景パノラマを見学。冬ならではの北国の自然を満喫して帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Q & A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                登別温泉の初冬旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-cyan-800 font-extrabold">Q.</span>
                <span>登別温泉の11月・12月の雪の状況と気温、服装のアドバイスは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                登別温泉は11月中旬頃に初雪が降り、12月に入ると本格的な積雪期に入ります。11月の平均気温は約3〜5度、朝晩は0度前後に冷え込みます。12月は日中でも氷点下になる日が多く、朝晩はマイナス5度以下まで下がります。ダウンジャケットや厚手のウールコート、手袋、マフラー、ニット帽の防寒具が必須です。道路や歩道は圧雪や凍結（ブラックアイスバーン）になるため、靴底にしっかりとした溝のあるスノーブーツや滑り止め付きの靴をご用意ください。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-cyan-800 font-extrabold">Q.</span>
                <span>登別温泉の「9種類の泉質」とは具体的にどのようなものですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                登別温泉は1日に1万トン以上湧出する世界的にも稀有な温泉地で、代表的な『硫黄泉』（白濁し血管を拡張・血行促進）、『食塩泉』（温まりの湯で保温効果抜群）、『明礬泉』（肌を引き締める）、『芒硝泉』（美肌と動脈硬化予防）、『緑礬泉』（鉄分を含み貧血改善）、『鉄泉』、『酸性鉄泉』、『重曹泉』（肌を滑らかにする美人の湯）、『ラジウム泉』の9種類が存在します。宿の大浴場ごとに引いている源泉が異なるため、多彩な効能の湯めぐりが楽しめます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-cyan-800 font-extrabold">Q.</span>
                <span>新千歳空港や札幌からのアクセス方法と冬の移動時間は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                新千歳空港からは、直行の高速バス『高速登別温泉エアポート号』で約1時間15分、またはJR快速エアポートと特急北斗を乗り継いでJR登別駅まで約50分＋路線バス約15分です。札幌駅からは直行の都市間高速バス『高速おんせん号』で約1時間40分、またはJR特急で約1時間10分＋路線バスです。冬場は降雪により道路の遅延やJRの徐行運転が発生することがあるため、移動時間には余裕を持ったスケジュールをおすすめします。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-cyan-800 font-extrabold">Q.</span>
                <span>冬の登別温泉で味わうべきご当地グルメは何ですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                冬に身がぎっしりと詰まり濃厚なカニ味噌が絶品の『北海道産毛ガニ』、地元胆振の洞爺・白老地区で肥育される最高峰黒毛和牛『白老牛（しらおいぎゅう）』のステーキやすき焼き、冬の噴火湾で獲れる肉厚なホタテや真タラの白子（タチ）、地元B級グルメとして人気の『登別閻魔やきそば』などが代表的です。
              </p>
            </div>
          </div>
        </section>

        {/* Internal Link Mesh */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-cyan-800 uppercase tracking-widest block">EXPLORE MORE WINTER DESTINATIONS</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい！11月・12月の冬特集＆雪見名湯ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/winter-yamagata-ginzan-onsen-snow-taisho-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-cyan-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-cyan-800 uppercase block mb-1">東北の雪見名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-cyan-800 transition line-clamp-2">
                【銀山温泉】白銀の温泉街に灯るガス灯と尾花沢牛会席・極上雪見宿
              </h3>
            </Link>

            <Link 
              href="/winter-akita-nyuto-onsen-yukimi-kiritanpo-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-cyan-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-cyan-800 uppercase block mb-1">秘湯の雪見露天</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-cyan-800 transition line-clamp-2">
                【乳頭温泉郷】雪深いブナ原生林の秘湯とにごり湯・比内地鶏きりたんぽ鍋
              </h3>
            </Link>

            <Link 
              href="/winter-tochigi-okunikko-yumoto-snow-onsen-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-cyan-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-cyan-800 uppercase block mb-1">北関東の雪見秘湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-cyan-800 transition line-clamp-2">
                【奥日光湯元温泉】乳白色のにごり湯と白銀の静寂・雪見露天宿
              </h3>
            </Link>

            <Link 
              href="/winter-crab-gourmet-luxury-inn-ranking"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-cyan-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-cyan-800 uppercase block mb-1">冬の味覚の王様</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-cyan-800 transition line-clamp-2">
                【極上カニ宿ランキング】冬の味覚・本場活ガニをフルコースで味わう至高の温泉旅館
              </h3>
            </Link>

            <Link 
              href="/winter-nagano-nozawa-onsen-powder-snow-sotoyu-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-cyan-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-cyan-800 uppercase block mb-1">信州の白銀名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-cyan-800 transition line-clamp-2">
                【野沢温泉】極上パウダースノーと十三外湯めぐり・信州牛郷土会席
              </h3>
            </Link>

            <Link 
              href="/winter-fukushima-aizu-higashiyama-snow-heritage-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-cyan-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-cyan-800 uppercase block mb-1">会津の初雪名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-cyan-800 transition line-clamp-2">
                【会津東山温泉】雪化粧の湯川渓谷露天と会津地鶏・極上馬刺し会席の宿
              </h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-hokkaido-noboribetsu-onsen-snow-jigokudani-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
