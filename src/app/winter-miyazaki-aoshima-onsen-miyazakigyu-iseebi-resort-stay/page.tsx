import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Sun, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Palmtree, Eye, Waves, Wine, ThermometerSun, Footprints, Sunrise, Sparkle, Landmark
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月宮崎・青島温泉の南国温暖避寒と鬼の洗濯板絶景】最高峰宮崎牛・日向灘伊勢海老＆美肌炭酸泉リゾートの宿5選",
  description: "11月から12月にかけて、日南海岸の玄関口に位置する宮崎・青島温泉は、本州が本格的な冬の寒気に包まれるなか、日中は18〜20℃前後まで気温が上がる温暖な南国リゾート気候に恵まれ、極上の避寒旅行シーズンを迎えます。国の天然記念物「鬼の洗濯板」に囲まれた神秘の青島神社、太平洋・日向灘の青い水平線を望む絶景展望露天風呂、そしてまるで天然の美容液のようなトロトロの美肌炭酸水素塩泉。夕食には4大会連続内閣総理大臣賞に輝く日本一の「宮崎牛」鉄板焼きや、秋から冬にかけて旬を迎える日向灘獲れの「天然伊勢海老」に舌鼓。心も身体も温まる厳選おすすめホテル・温泉旅館5選を徹底解説します。",
  keywords: '青島温泉 宿泊, 宮崎 温泉 11月 12月, ANAホリデイ・インリゾート宮崎, 青島サンクマール, ルートイングランティアあおしま太陽閣, 地蔵庵, 青島フィッシャーマンズ, 宮崎牛 鉄板焼き, 伊勢海老 宿, 鬼の洗濯板 絶景',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay/"
  },
  openGraph: {
    title: "【11・12月宮崎・青島温泉の南国温暖避寒と鬼の洗濯板絶景】最高峰宮崎牛・日向灘伊勢海老＆美肌炭酸泉リゾートの宿5選",
    description: "11月から12月にかけて、日南海岸の玄関口に位置する宮崎・青島温泉は、本州が本格的な冬の寒気に包まれるなか、日中は18〜20℃前後まで気温が上がる温暖な南国リゾート気候に恵まれ、極上の避寒旅行シーズンを迎えます。国の天然記念物「鬼の洗濯板」に囲まれた神秘の青島神社、太平洋・日向灘の青い水平線を望む絶景展望露天風呂、そしてまるで天然の美容液のようなトロトロの美肌炭酸水素塩泉。夕食には4大会連続内閣総理大臣賞に輝く日本一の「宮崎牛」鉄板焼きや、秋から冬にかけて旬を迎える日向灘獲れの「天然伊勢海老」に舌鼓。心も身体も温まる厳選おすすめホテル・温泉旅館5選を徹底解説します。",
    url: 'https://croud-travel.pages.dev/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の宮崎・青島温泉と鬼の洗濯板を望む太平洋絶景露天風呂'
      }
    ]
  }
};

const faqList = [
  {
    "q": "宮崎・青島温泉の11月・12月の気温・気候や服装は？なぜ避寒旅行に最適？",
    "a": "宮崎県は「日本のひなた」と呼ばれる通り、日照時間が全国トップクラスで冬でも温暖な気候です。青島周辺の11月の平均最高気温は19〜21℃前後、12月でも15〜17℃程度あり、天気の良い日中は長袖シャツや薄手のジャケット1枚で快適に過ごせます。本州の厳しい寒さや雪を完全に避けられるため、シニアのご夫婦や避寒リゾートを求める旅行者に大人気です。ただし朝夕や海岸沿いで風が強い時間帯は10℃前後まで下がるため、薄手のカーディガンやウインドブレーカーを一枚携行すると安心です。"
  },
  {
    "q": "青島温泉の泉質や効能、肌への「美肌効果」の特徴は？",
    "a": "青島温泉の泉質は主に「ナトリウム-炭酸水素塩・塩化物温泉（弱アルカリ性）」です。お湯に浸かった瞬間に肌がぬるぬると包み込まれるような独特のとろみがあり、重曹成分が古い角質や皮脂を優しく洗い流すクレンジング作用を発揮します。さらに塩分が肌の表面を保護して潤いを逃さないため、入浴後はまるで上質な化粧水を全身に浴びたかのようにしっとりすべすべになります。「美人の湯」「絹肌の湯」として女性旅行者から絶大な支持を集めています。"
  },
  {
    "q": "国の天然記念物「鬼の洗濯板」と青島神社を訪れるおすすめの時間帯は？",
    "a": "青島を取り囲む「鬼の洗濯板（隆起海蝕痕）」は、約700万年前に海中の砂岩と泥岩が交互に堆積してできた地層が隆起し、波の浸食を受けて規則正しいギザギザの岩肌になった奇勝です。見学のベストタイミングは「干潮時」。潮が引くと沖合数百メートルまで洗濯板の奇岩が姿を現し、実際に歩いて渡ることができます。また、青島神社へ渡る弥生橋から眺める初冬の日の出（午前6時半〜7時頃）は、水平線と鳥居が黄金色に染まる神々しい絶景スポットとして必見です。"
  },
  {
    "q": "11月・12月の青島・宮崎で味わうべき最高峰グルメは？",
    "a": "何と言っても全国和牛能力共進会で4大会連続の内閣総理大臣賞に輝いた「宮崎牛」です。極上の霜降りと上品な赤身の旨味は、鉄板焼きステーキや溶岩焼き、すき焼きで驚くほどの柔らかさを誇ります。また、日向灘では秋から冬にかけて「天然伊勢海老」が旬を迎え、ぷりぷりの刺身や鬼殻焼き、出汁が効いた味噌汁で堪能できます。さらに噛むほどに旨味が溢れる「みやざき地頭鶏」の炭火焼きや、本場の甘酢とタルタルソースが絡む「チキン南蛮」など、美食の宝庫です。"
  },
  {
    "q": "宮崎空港や宮崎駅からの青島温泉へのアクセス方法・移動時間は？",
    "a": "青島温泉は全国の温泉地の中でもトップクラスのアクセスの良さを誇ります。宮崎空港（宮崎ブーゲンビリア空港）からは車・タクシーでわずか約15分。路線バス（宮崎交通）を利用しても約25分で青島へ直行できます。JR宮崎駅からはJR日南線で「青島駅」または「子供の国駅」まで約30分。車の場合は宮崎自動車道「宮崎IC」から国道220号線（青島バイパス）を経由して約15分と、飛行機を降りてからあっという間に南国の海辺温泉リゾートに到着できるのが大きな魅力です。"
  }
];

export default function MiyazakiAoshimaWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay"
        },
        "headline": "【11・12月宮崎・青島温泉の南国温暖避寒と鬼の洗濯板絶景】最高峰宮崎牛・日向灘伊勢海老＆美肌炭酸泉リゾートの宿5選",
        "description": "11月から12月にかけて、日南海岸の玄関口に位置する宮崎・青島温泉は、本州が本格的な冬の寒気に包まれるなか、日中は18〜20℃前後まで気温が上がる温暖な南国リゾート気候に恵まれ、極上の避寒旅行シーズンを迎えます。国の天然記念物「鬼の洗濯板」に囲まれた神秘の青島神社、太平洋・日向灘の青い水平線を望む絶景展望露天風呂、そしてまるで天然の美容液のようなトロトロの美肌炭酸水素塩泉。夕食には4大会連続内閣総理大臣賞に輝く日本一の「宮崎牛」鉄板焼きや、秋から冬にかけて旬を迎える日向灘獲れの「天然伊勢海老」に舌鼓。心も身体も温まる厳選おすすめホテル・温泉旅館5選を徹底解説します。",
        "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T10:00:00+09:00",
        "dateModified": "2026-09-28T10:00:00+09:00",
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
          "name": "Croud Travel 九州南国リゾート取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay#breadcrumb",
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
            "name": "宮崎・青島温泉 南国温暖避寒と鬼の洗濯板絶景・宮崎牛会席の宿",
            "item": "https://croud-travel.pages.dev/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay#faq",
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
              name: "ＡＮＡホリデイ・インリゾート宮崎　ｂｙ　ＩＨＧ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8782/8782.jpg",
              rating: 4.36,
              reviews: 2174,
              price: "¥5,072〜",
              access: "宮崎自動車道宮崎ICから国道220号線で15分。宮崎ブーゲンビリア空港から車で15分。JRこどものくに駅から徒歩7分。",
              special: "サウナ付天然温泉完備で泉質は美肌の湯、海を眺めながらご入浴が可能な展望大浴場です",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8782%2F8782.html",
              story: "青島海岸の広大な白浜ビーチを目前に望み、南国リゾートの開放感と国際基準の快適さを兼ね備えた大型オーシャンフロントホテル「ＡＮＡホリデイ・インリゾート宮崎 ｂｙ ＩＨＧ」。地下深層から湧出する青島温泉の大浴場「熱の湯」は、とろりとした肌触りの弱アルカリ性炭酸水素塩泉で、入浴後はお肌がしっとりと潤います。広々としたインドアプールやサウナ、フィットネスも完備。夕食は日向灘の海の幸と厳選された宮崎牛をダイナミックに調理するレストランビュッフェ、または落ち着いた個室での日本料理会席。椰子の木が揺れるプライベートガーデンを散策しながら、初冬の澄んだ夜空に輝く満天の星と波音に癒やされるプレミアムな滞在が楽しめます。",
              roomTip: "太平洋と青島を一望するオーシャンビューバルコニー付き客室。朝目覚めると水平線から昇る神々しい朝日が部屋いっぱいに差し込む絶景。",
              gourmetTip: "「宮崎牛ステーキと日向灘旬魚の特選リゾートディナー」。目の前の鉄板でジューシーに焼き上げるA5宮崎牛、近海獲れ鮮魚のカルパッチョ、地頭鶏の炭火焼き。",
              highlights: [
                "青島海岸直結のオーシャンフロント＆とろとろ美肌炭酸水素塩泉大浴場「熱の湯」",
                "国際基準の上質なリゾート空間＆目の前で焼くA5宮崎牛ステーキと日向灘鮮魚ディナー",
                "宮崎空港から車でわずか15分の好アクセス＆南国パームツリー揺れるガーデン散策"
              ]
            },
            {
              id: 2,
              name: "ホテル　青島サンクマール",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18414/18414.jpg",
              rating: 4.43,
              reviews: 780,
              price: "¥10,000〜",
              access: "[宮崎空港]から車20分／高速道路[宮崎IC]から車20分／JR日南線[青島駅]から車7分",
              special: "≪広々とした海・空の絶景と温泉が自慢のホテル≫目の前に広がる大自然をお楽しみください",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18414%2F18414.html",
              story: "国の天然記念物「鬼の洗濯板」が目の前の海一面に広がる圧倒的なロケーションに建つ絶景リゾートホテル「ホテル 青島サンクマール」。海抜約20mの高台に位置する展望露天風呂からは、打ち寄せる白波と規則正しく刻まれた奇岩・鬼の洗濯板、そして果てしない日向灘の水平線を180度の大パノラマで見渡せます。毎分300リットル以上湧出する自家源泉は、ナトリウム-炭酸水素塩・塩化物泉で、肌に吸い付くようなとろみがあり「美人の湯」として評判です。夕食は宮崎の旬を詰め込んだ豪華会席料理で、日向灘産の伊勢海老お造りや鬼殻焼き、霜降り宮崎牛のしゃぶしゃぶやすき焼きを心ゆくまで堪能できます。",
              roomTip: "海側に面したパノラマ和室または展望風呂付き特別室。窓辺の広縁から鬼の洗濯板と行き交う漁船を眺め、波の音をBGMに贅沢な読書や湯浴み。",
              gourmetTip: "「日向灘伊勢海老まつり＆宮崎牛会席」。ぷりぷりと甘い活伊勢海老の姿造り、伊勢海老の濃厚な頭汁、柔らかくとろける宮崎牛の陶板ステーキ。",
              highlights: [
                "鬼の洗濯板を眼下に望む海抜20mの展望露天風呂＆180度日向灘パノラマビュー",
                "活伊勢海老の姿造りと霜降り宮崎牛の豪華会席＆水平線から昇る朝日の絶景",
                "全室オーシャンフロントの贅沢な眺望＆波の音を聞きながら浸かる温泉展望風呂"
              ]
            },
            {
              id: 3,
              name: "青島天然温泉ルートイングランティアあおしま太陽閣",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/68070/68070.jpg",
              rating: 4.29,
              reviews: 1389,
              price: "¥4,800〜",
              access: "宮崎ICより車で１２分、宮崎空港より車で１３分、ＪＲ日南線こどもの国駅から徒歩約１３分",
              special: "◇サンマリンスタジアム宮崎まで車で7分◇朝食は日向灘オーシャンビュー◇天然温泉◇露天風呂◇夕食◇",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68070%2F68070.html",
              story: "青島駅から徒歩圏に位置し、観光にもビジネスにも便利な好立地と、充実したスパ施設が自慢の「青島天然温泉ルートイングランティアあおしま太陽閣」。地下1000mから湧き出る自家源泉「華の湯」は、神経痛や冷え性に優れた効能を持つ天然温泉で、開放感あふれる岩露天風呂や広々とした内湯、サウナを完備しています。初冬のゴルフ旅行や日南海岸ドライブの拠点としても抜群の使い勝手を誇り、リーズナブルな価格ながら温泉リゾートの満足感をしっかり味わえます。夕食は館内レストランにて、名物のチキン南蛮やみやざき地頭鶏料理、宮崎牛の御膳など、本場のご当地グルメを気軽に楽しめます。",
              roomTip: "清潔感あふれる洋室ツインまたは和洋室。機能的な設備とシモンズ製ベッドで、旅の疲れをぐっすり癒やす快適な睡眠空間。",
              gourmetTip: "「宮崎郷土の味覚御膳」。外はカリッと中はジューシーな本場チキン南蛮、香ばしい地鶏の炭火焼き、宮崎牛のミニ陶板焼き。",
              highlights: [
                "地下1000m湧出の自家源泉「華の湯」岩露天風呂＆ビジネス・観光に快適な設備",
                "本場チキン南蛮やみやざき地頭鶏などご当地味覚＆駅徒歩圏の抜群のフットワーク",
                "サウナ・岩盤浴完備でリフレッシュ＆無料平面駐車場完備でドライブ旅行に最適"
              ]
            },
            {
              id: 4,
              name: "『祈願の宿』青島・地蔵庵（旧：『子宝・安産の宿』　地蔵庵）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76378/76378.jpg",
              rating: 4.00,
              reviews: 47,
              price: "¥20,000〜",
              access: "日南線　子供の国駅より徒歩８分",
              special: "【貸切ステイ】１日１組限定！～青島の美しい海と贅沢なひとときを～",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76378%2F76378.html",
              story: "青島神社の参道近く、閑静な住宅街の一角にひっそりと佇む隠れ家風の純和風湯宿「『祈願の宿』青島・地蔵庵」。敷地内に祀られた霊験あらたかなお地蔵様に見守られ、子宝・安産祈願や良縁成就の宿としても全国から厚い信仰を集めています。最大の自慢は、化粧水のように驚くほどトロトロ・ツルツルとした極上の自家源泉。湯船に身を沈めた瞬間に肌が滑らかに包まれる感触は感動的で、温泉通からも絶賛されています。夕食は料理長が一品一品真心を込めて仕立てる本格京風会席。宮崎牛の石焼きや新鮮な地魚の刺身を、静寂に包まれた個室食事処でゆったりと味わう大人の休日が過ごせます。",
              roomTip: "坪庭を望む落ち着いた数寄屋造りの純和室。お香のほのかな香りが漂う静謐な空間で、日常の喧騒を完全に忘れて心身をリセット。",
              gourmetTip: "「祈願の宿・特選宮崎牛会席膳」。厳選されたA4〜A5等級宮崎牛の富士山溶岩石焼き、日向灘鮮魚の薄造り、旬の地元野菜の炊き合わせ。",
              highlights: [
                "驚異のとろみ触感を誇る奇跡の美肌天然温泉＆祈願のお地蔵様が鎮座する隠れ家宿",
                "個室食事処で味わう宮崎牛溶岩石焼き会席＆心身が浄化される静謐なプライベート空間",
                "子宝・安産祈願や良縁成就のパワースポット宿＆女性やカップルに大絶賛の美肌湯"
              ]
            },
            {
              id: 5,
              name: "青島フィッシャーマンズビーチサイドホステル＆スパ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/165151/165151.jpg",
              rating: 4.16,
              reviews: 472,
              price: "¥1,980〜",
              access: "ＪＲ日南線　青島駅より徒歩にて約３分〇車：宮崎駅より約30分宮崎ICより約１５分宮崎空港より約１５分",
              special: "気軽に手軽に宿泊できるホステル。天然温泉と青島沖どれの新鮮な魚介を楽しめる新感覚ホステルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165151%2F165151.html",
              story: "青島漁港のすぐ目の前、スタイリッシュなデザインと良質な天然温泉、そして新鮮な海鮮料理が融合した新感覚の温泉複合施設「青島フィッシャーマンズビーチサイドホステル＆スパ」。ドミトリーから個室まで多彩な客室を備え、一人旅から若者グループ、長期滞在まで幅広いニーズに応えます。館内の天然温泉「神話の湯」は源泉掛け流しで、とろみのある炭酸水素塩泉が日頃の疲れを洗い流してくれます。併設の海鮮レストラン「魚益（うおます）」では、目の前の青島港から揚がる獲れたての伊勢海老や地魚の刺身、名物海鮮丼を驚きの高コスパで堪能できます。自由でアクティブな冬の青島ステイに最適です。",
              roomTip: "シンプルモダンな個室ツインまたは和室。機能的で清潔感あふれる空間に滞在し、目の前の港の風景や潮風を感じる自由な旅。",
              gourmetTip: "「併設レストラン魚益・青島海鮮御膳」。朝獲れ地魚の刺身盛り合わせ、香ばしい伊勢海老の鬼瓦焼き、熱々のあら汁、名物海鮮丼。",
              highlights: [
                "青島漁港直結のスタイリッシュ複合施設＆源泉掛け流し天然温泉「神話の湯」",
                "併設「魚益」で味わう鮮度抜群の海鮮丼・伊勢海老料理＆圧倒的なコストパフォーマンス",
                "一人旅からグループ旅行まで自由に選べる客室タイプ＆青島神社参拝の拠点に最適"
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
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
          alt="青島の鬼の洗濯板と南国宮崎の青い海"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold">
            <Palmtree className="w-4 h-4" />
            11月・12月 冬の南国温暖避寒＆絶景温泉特集｜宮崎・青島温泉
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            南国温暖避寒と鬼の洗濯板絶景<br className="hidden sm:inline" />
            最高峰宮崎牛・伊勢海老＆美肌炭酸泉リゾートの宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            寒風吹きすさぶ冬を逃れて南国宮崎へ。奇跡の絶景「鬼の洗濯板」と美容液のようなとろとろ美肌炭酸泉、日本一の宮崎牛と日向灘伊勢海老を味わう極上ステイ。
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300 pt-2">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-amber-400" /> 日中20℃前後の快適避寒</span>
            <span className="flex items-center gap-1"><Waves className="w-4 h-4 text-amber-400" /> とろとろ美肌炭酸水素塩泉</span>
            <span className="flex items-center gap-1"><Utensils className="w-4 h-4 text-amber-400" /> 日本一宮崎牛＆日向灘伊勢海老</span>
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
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Sunny Winter Getaway</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                青い海と椰子の木が揺れる温暖避寒地｜11月・12月の宮崎青島温泉が選ばれる理由
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              日本列島の大部分が初冬の冷気と木枯らしに包まれる11月から12月。宮崎空港から南へ車でわずか15分の海岸線に広がる「青島温泉（あおしまおんせん）」は、日差しが眩しく降り注ぎ、日中の気温が20℃前後に達する「南国リゾートの楽園」です。コートを脱ぎ捨てて軽やかな装いでビーチを散策できる温暖な気候は、冬の寒さに疲れた身体にとって何よりの癒やしとなります。
            </p>
            <p>
              青島温泉の象徴である「青島」は、周囲約1.5kmの小島全体が国の特別天然記念物である亜熱帯植物群落に覆われ、周囲を波状岩「鬼の洗濯板」がびっしりと取り囲む神秘のパワースポット。島の中央に鎮座する青島神社は、神話・海幸彦山幸彦の舞台として古くから縁結びや安産のご利益で知られています。
            </p>
            <p>
              そして青島温泉のもう一つの奇跡が、地下深層から湧き出る「炭酸水素塩温泉」。浸かった瞬間に誰もが声を上げるほどの強烈な「とろみ」があり、肌の角質を優しくオフして潤いを与える天然の美容液のような泉質です。夕食には4大会連続内閣総理大臣賞を受賞した最高峰「宮崎牛」のステーキや、冬に最も甘みを増す日向灘の「活伊勢海老」が並びます。冬を忘れる至福の温泉宿5選をご紹介します。
            </p>
          </div>
        </section>

        {/* Section 1.5: Detailed Spiritual Aoshima & Oni no Sentakuiwa */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Spiritual Coastline</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                神話の島・青島と鬼の洗濯板が放つ神秘のエネルギー｜初冬の干潮時に現れる絶景
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              青島を取り囲む「鬼の洗濯板」は、約700万年前に水深数百メートルの海底に堆積した硬い砂岩と柔らかい泥岩が交互に重なり、長い年月をかけて波で侵食された自然の芸術です。初冬の澄み渡る青空のもと、干潮時には海の中から幾重もの直線的な岩肌が一斉に姿を現し、まるで古代遺跡のような圧倒的な造形美を見せてくれます。
            </p>
            <p>
              島の中央にある青島神社は、ビロウ樹をはじめとする約5,000本もの亜熱帯植物が自生する原生林に抱かれ、本殿奥へと続く参道はまさに南国の神域。素焼きの皿を投げて願いを占う「天の平瓮投げ（あめのひらかのげ）」や、夫婦円満・良縁を願う「産霊紙縒（むすびこより）」など、多彩な神事体験が旅行者に深い感動とご利益をもたらします。
            </p>
          </div>
        </section>

        {/* Section 1.8: Aoshima 2-Day 1-Night Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Aoshima Winter Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の宮崎青島1泊2日満喫モデルコース｜南国ドライブと最高峰宮崎牛・伊勢海老紀行
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              <strong>【1日目：宮崎空港からすぐ南国へ・青島神社参拝と極上温泉リゾート】</strong><br />
              羽田や伊丹から飛行機で宮崎ブーゲンビリア空港へ午前中に到着。レンタカーまたはタクシーでわずか15分、あっという間に青島エリアへ。まずは青島参道商店街のカフェや食堂で、本場のチキン南蛮や日向夏スイーツでランチ。干潮のタイミングに合わせて弥生橋を渡り、鬼の洗濯板の岩肌を歩きながら青島神社へ参拝します。午後は日南フェニックスロードを爽快に南下ドライブ。「堀切峠」や「道の駅フェニックス」から太平洋の青い水平線を眺め、名物の明日葉ソフトクリームを味わいます。15時に青島温泉の宿へチェックイン。とろとろの炭酸水素塩泉大浴場でリフレッシュし、夕食は目の前の鉄板で焼かれるA5宮崎牛ステーキと日向灘獲れの天然伊勢海老に舌鼓。
            </p>
            <p>
              <strong>【2日目：水平線の神々しい朝日・鵜戸神宮と港町のお買い物】</strong><br />
              朝は波音とともに目覚め、太平洋の水平線から昇る神々しい初冬の朝日を客室や展望風呂から拝みます。朝食ビュッフェで冷汁や新鮮な魚介を堪能した後はチェックアウト。車で約30分南下し、洞窟の中に本殿が鎮座する奇勝「鵜戸神宮（うどじんぐう）」へ。運玉投げで運試しを楽しんだ後、青島漁港直営の「魚益」でお土産の干物や海産物を購入。空港までわずか15分で戻れるため、フライト直前まで南国の休日を余すことなく満喫できます。
            </p>
          </div>
        </section>

        {/* Section 2: Recommended Hotels List */}
        <section className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Selected Aoshima Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              初冬の青島温泉を満喫する厳選おすすめ宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
              ビーチ直結の大型リゾートホテルから、鬼の洗濯板一望の絶景宿、極上トロトロ湯の隠れ宿まで、現地取材に基づき厳選しました。
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
                      <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
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
                            宮崎県宮崎市青島
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
                          {h.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-amber-800 font-medium bg-amber-50/70 px-3 py-1.5 rounded-lg border border-amber-100/80">
                          {h.special}
                        </p>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {h.story}
                      </p>

                      {/* Detail Points */}
                      <div className="space-y-2.5 pt-2 border-t border-slate-100 text-xs sm:text-sm">
                        <div className="flex items-start gap-2 text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                          <span><strong className="text-slate-900 font-semibold">客室の魅力：</strong>{h.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2 text-slate-700">
                          <Utensils className="w-4 h-4 text-amber-800 shrink-0 mt-0.5" />
                          <span><strong className="text-slate-900 font-semibold">冬の美食：</strong>{h.gourmetTip}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="bg-slate-50 rounded-2xl p-4 space-y-2 text-xs text-slate-600">
                        <span className="font-bold text-slate-800 block text-xs uppercase tracking-wide">この宿の注目ポイント</span>
                        <ul className="space-y-1.5">
                          {h.highlights.map((hl: string, idx: number) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
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
                        <span className="text-2xl font-extrabold text-amber-800">{h.price}</span>
                        <span className="text-xs text-slate-500 ml-1">※プラン・日程により変動</span>
                      </div>
                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-sm shadow-md shadow-amber-900/10 transition duration-200 group"
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

        {/* Section 3: Miyazaki Beef & Ise Ebi */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Miyazaki Gourmet Royalty</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                日本一の最高峰「宮崎牛」と冬の日向灘「天然伊勢海老」を味わい尽くす
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-slate-700 leading-relaxed">
            <div className="bg-slate-50 rounded-2xl p-6 space-y-3 border border-slate-200/70">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500" />
                内閣総理大臣賞4連覇・至高の「宮崎牛」ステーキ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                5年に一度開催される和牛のオリンピックで、史上初の4大会連続内閣総理大臣賞に輝いた宮崎牛。美しいサシと芳醇な香り、口に入れた瞬間に溶け出す上品な脂はまさに別格。鉄板焼きや溶岩焼きで香ばしく焼き上げ、宮崎特産の柑橘「へべす」や塩でシンプルにいただくのが最高の贅沢です。
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 space-y-3 border border-slate-200/70">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Waves className="w-5 h-5 text-sky-600" />
                黒潮が育む日向灘獲れ「天然活伊勢海老」
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                初秋から冬にかけて解禁され、身がぎゅっと引き締まる日向灘の天然伊勢海老。透き通る身の強い甘みとプリッとした弾力を堪能できる活造り、香ばしい味噌の風味がたまらない鬼殻焼き、そして翌朝の味噌汁に染み渡る濃厚な出汁まで、伊勢海老の全てを味わい尽くせます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Hot Spring Qualities */}
        <section className="bg-gradient-to-br from-amber-950 via-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-900">
            <div className="p-2.5 rounded-2xl bg-amber-900/60 text-amber-300">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">Natural Serum Spring</span>
              <h2 className="text-xl sm:text-2xl font-bold">
                驚異のとろみ触感｜青島炭酸水素塩泉のクレンジング＆美肌効果
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-200 leading-relaxed">
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 space-y-2">
              <h4 className="font-bold text-amber-300 text-sm">天然の美肌クレンジング</h4>
              <p>
                炭酸水素塩泉（重曹泉）が、余分な皮脂や古い角質を優しく溶かして洗い流し、ざらつきのない滑らかな素肌へとリセットしてくれます。
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 space-y-2">
              <h4 className="font-bold text-amber-300 text-sm">美容液のようなトロトロ湯</h4>
              <p>
                弱アルカリ性のぬるぬるした湯触りは、まるで高級美容液のお風呂に浸かっているかのような心地よさ。湯上がりは肌が吸い付くようにしっとり潤います。
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 space-y-2">
              <h4 className="font-bold text-amber-300 text-sm">太平洋パノラマ露天風呂</h4>
              <p>
                潮風を感じながら浸かるオーシャンビュー露天風呂。水平線から昇る朝日や、夕暮れに茜色に染まる海を眺めながら極上のリラクゼーションに浸れます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Access & Travel Planning */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Travel Planning & Route</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                青島温泉へのアクセスと冬旅を快適に楽しむポイント
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              青島温泉は<strong>宮崎空港から車でわずか15分</strong>という圧倒的なアクセスの良さを誇ります。羽田や伊丹からひとっ飛びで南国リゾートへ直行できます。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">宮崎空港からのアクセス（最速）</span>
                <p className="text-slate-600">
                  宮崎空港からタクシー・レンタカーで約15分。または宮崎交通バス「飫肥・日南行き」で約25分「青島」下車。空港到着後すぐに温泉と海を満喫できます。
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="font-bold text-slate-900 block">JR・車でのアクセス</span>
                <p className="text-slate-600">
                  JR宮崎駅から日南線で「青島駅」まで約30分。車の場合は宮崎自動車道「宮崎IC」から青島バイパス経由で約15分。日南海岸沿いの爽快なドライブが楽しめます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                宮崎・青島温泉冬旅のよくある質問（FAQ）
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-800 font-extrabold">Q.</span>
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
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Related Kyushu & Resort Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい九州の冬名湯＆極上グルメ特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の九州各地の温暖な避寒旅、名湯めぐり、絶景露天風呂をめぐる厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-ibusuki-onsen-sand-bath-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">鹿児島・指宿温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">名物天然砂むし温泉と錦江湾絶景・南国避寒黒豚会席の宿</h3>
            </Link>
            <Link 
              href="/winter-kumamoto-kurokawa-yuakari-illumination-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">熊本・黒川温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">幻想の竹灯籠湯あかりと湯巡り手形・あか牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-saga-ureshino-onsen-bihada-yudofu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">佐賀・嬉野温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">日本三大美肌の湯と名物温泉湯豆腐・佐賀牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-kagoshima-kirishima-onsen-ryoma-black-pork-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">鹿児島・霧島温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">白濁硫黄泉の湯けむりと黒豚しゃぶしゃぶ・龍馬ゆかりの名宿</h3>
            </Link>
            <Link 
              href="/winter-fukuoka-harazuru-onsen-w-bihada-hakata-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">福岡・原鶴温泉</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">筑後川冬情緒と奇跡のW美肌泉・博多和牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-chiba-minamiboso-onsen-ise-ebi-oceanview-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">千葉・南房総温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">温暖避寒旅と旬の房州伊勢海老・太平洋パノラマ露天の宿</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-miyazaki-aoshima-onsen-miyazakigyu-iseebi-resort-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
