import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Info, Heart, Clock, Footprints, ShoppingBag
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月箱根芦ノ湖の冬晴れ富士山絶景】澄み渡る空と雪化粧の富士を望む露天風呂＆極上湯宿5選",
  description: "年間で最も晴天率が高く空気が研ぎ澄まされる11月・12月の箱根芦ノ湖。紺碧の湖面に映る雪化粧の富士山と箱根神社の平和の鳥居。芦ノ湖を望む絶景露天風呂に浸かり、相模湾の冬魚や足柄牛に舌鼓を打つ、首都圏からすぐ行ける至高の冬リゾート温泉ガイド。",
  keywords: '箱根 富士山 見える 温泉 宿 11月 12月, 芦ノ湖 富士山 露天風呂 旅館, 冬の箱根 宿泊, 箱根 温泉 冬景色, 芦ノ湖 温泉 ホテル, 元箱根 宿泊, 箱根 モデルコース',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kanagawa-hakone-fuji-view-onsen-stay/",
  },
  openGraph: {
    title: "【11・12月箱根芦ノ湖の冬晴れ富士山絶景】澄み渡る空と雪化粧の富士を望む露天風呂＆極上湯宿5選",
    description: "年間で最も晴天率が高く空気が研ぎ澄まされる11月・12月の箱根芦ノ湖。紺碧の湖面に映る雪化粧の富士山と箱根神社の平和の鳥居。芦ノ湖を望む絶景露天風呂に浸かり、相模湾の冬魚や足柄牛に舌鼓を打つ、首都圏からすぐ行ける至高の冬リゾート温泉ガイド。",
    url: 'https://croud-travel.com/winter-kanagawa-hakone-fuji-view-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月箱根芦ノ湖の冬晴れ富士山絶景】澄み渡る空と雪化粧の富士を望む露天風呂＆極上湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月箱根芦ノ湖の冬晴れ富士山絶景】澄み渡る空と雪化粧の富士を望む露天風呂＆極上湯宿5選",
    description: "年間で最も晴天率が高く空気が研ぎ澄まされる11月・12月の箱根芦ノ湖。紺碧の湖面に映る雪化粧の富士山と箱根神社の平和の鳥居。芦ノ湖を望む絶景露天風呂に浸かり、相模湾の冬魚や足柄牛に舌鼓を打つ、首都圏からすぐ行ける至高の冬リゾート温泉ガイド。",
  }
};

export default function HakoneWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-kanagawa-hakone-fuji-view-onsen-stay#article",
        "headline": "【11・12月箱根芦ノ湖の冬晴れ富士山絶景】澄み渡る空と雪化粧の富士を望む露天風呂＆極上湯宿5選",
        "description": "年間で最も晴天率が高く空気が研ぎ澄まされる11月・12月の箱根芦ノ湖。紺碧の湖面に映る雪化粧の富士山と箱根神社の平和の鳥居。芦ノ湖を望む絶景露天風呂に浸かり、相模湾の冬魚や足柄牛に舌鼓を打つ、首都圏からすぐ行ける至高の冬リゾート温泉ガイド。",
        "image": "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1200&q=80",
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
          "@id": "https://croud-travel.com/winter-kanagawa-hakone-fuji-view-onsen-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-kanagawa-hakone-fuji-view-onsen-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "11月・12月の箱根・芦ノ湖から富士山が見える確率はどのくらいですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月から12月は冬型の気圧配置が安定し、1年の中で最も晴天率が高くなる季節です。気象データによると初冬の箱根エリアの晴天率は70%〜80%に達し、夏場（30%前後）と比べて富士山をくっきりと望める確率が圧倒的に高くなります。特に早朝から午前10時頃までは雲が湧きにくく、青空と純白の雪を冠した富士山の絶景に出会えます。"
            }
          },
          {
            "@type": "Question",
            "name": "芦ノ湖周辺で富士山の絶景が楽しめるおすすめスポットはどこですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "代表的なスポットは、元箱根港周辺の遊歩道、箱根神社「平和の鳥居」付近、旧東海道杉並木近くの恩賜箱根公園展望館です。恩賜箱根公園からは芦ノ湖の青い湖水、行き交う海賊船、そして富士山の裾野までが絵画のように重なり合う絶景が望めます。また箱根ロープウェイ（大涌谷〜早雲山）のゴンドラからの空中パノラマも圧巻です。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の箱根の気温と道路の凍結・積雪状況は？ノーマルタイヤでも行けますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "芦ノ湖周辺は標高約720mの高地に位置するため、平野部（小田原や東京）より気温が5℃〜7℃ほど低くなります。11月下旬以降は朝晩の気温が0℃前後に冷え込み、12月に入ると降雪や路面凍結のリスクが高まります。車で訪れる場合は必ずスタッドレスタイヤを装着するか、箱根登山鉄道・路線バス等の公共交通機関を利用してください。"
            }
          },
          {
            "@type": "Question",
            "name": "芦ノ湖温泉の泉質や特徴について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "芦ノ湖周辺の温泉は、単純温泉や塩化物泉、硫黄泉など宿や源泉井戸によって多彩な泉質を持ちます。弱アルカリ性の柔らかな美肌の湯や、姥子温泉の滑らかな単純温泉、元箱根周辺のにごり湯など、冷えた身体を芯から温める保温・保湿効果に優れた湯処が揃っています。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.com/winter-kanagawa-hakone-fuji-view-onsen-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "箱根芦ノ湖温泉　源泉100％の宿　ＨＯＴＥＬ　Ｒａ　Ｋｕｕｎ　(ホテルラクーン）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10956%2F10956.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "ザ・プリンス　箱根芦ノ湖",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F59637%2F59637.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Ｒａｋｕｔｅｎ　ＳＴＡＹ　ＦＵＪＩＭＩ　ＴＥＲＲＡＣＥ　箱根芦ノ湖",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F189383%2F189383.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "ホテル四季の館箱根芦ノ湖",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183100%2F183100.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "箱根・芦ノ湖　はなをり（オリックスホテルズ＆リゾーツ）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F162650%2F162650.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "箱根芦ノ湖温泉　源泉100％の宿　ＨＯＴＥＬ　Ｒａ　Ｋｕｕｎ　(ホテルラクーン）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/10956/10956.jpg",
              rating: 3.98,
              reviews: 608,
              price: "¥10,800〜",
              access: "箱根湯本駅→箱根町元箱根行バス３０分「双子茶屋」下車(送迎不可）／小田原厚木道路小田原西IC→国道１号で約１５km",
              special: "芦ノ湖の高台にたたずむ「HOTEL RaKuun」 自分らしいステイスタイルで、芦ノ湖を遊びつくす",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10956%2F10956.html",
              story: "芦ノ湖を見下ろす高台の閑静な別荘地に佇み、源泉100％かけ流しの名湯が自慢の「HOTEL Ra Kuun（ホテルラクーン）」。箱根の温泉の中でも希少な硫黄を含むにごり湯を引いており、乳白色の湯船からは芦ノ湖の青い湖面と冬枯れの山々を一望できます。お湯は保温効果が非常に高く、冬の冷たい風を頬に受けながらの露天風呂入浴はまさに至福。リーズナブルな価格設定ながら、ロビーでのフリードリンクサービスや温かなもてなしが好評で、箱根神社や元箱根港の富士山ビュースポットへも車で数分という好アクセスを誇ります。気取らずに本物の名湯と冬の箱根絶景を楽しみたい方に愛される湯宿です。",
              roomTip: "芦ノ湖側の客室指定がおすすめ。晴れた日の朝には澄み切った青空の下に広がる芦ノ湖の穏やかな水面を窓一面に眺めることができます。",
              gourmetTip: "夕食は地元の旬素材を取り入れた和洋折衷コース。熱々の小鍋仕立てやジューシーな肉料理、地酒とともにゆったりと楽しめます。",
              highlights: [
                "芦ノ湖を見下ろす高台＆源泉100％の乳白色にごり湯露天風呂",
                "フリードリンクや高コスパな価格設定＆箱根神社へ好アクセス",
                "地場野菜と肉料理の和洋折衷コースとアットホームな温かいもてなし"
              ]
            },
            {
              id: 2,
              name: "ザ・プリンス　箱根芦ノ湖",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/59637/59637.jpg",
              rating: 4.56,
              reviews: 1406,
              price: "¥11,700〜",
              access: "小田原駅西口より無料送迎バス（定時運行・要予約）にて45分／箱根湯本駅から伊豆箱根バス約65分／元箱根より循環バスあり",
              special: "コンセプトは“リラクゼーション＆ネイチャー",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F59637%2F59637.html",
              story: "昭和の日本建築界を代表する巨匠・村野藤吾が設計した円形建築が芦ノ湖畔に美しく調和する名門リゾート「ザ・プリンス 箱根芦ノ湖」。宿の敷地は芦ノ湖の波打ち際まで広がり、湖畔の専用桟橋や広大な芝生庭園からは、雪化粧をまとった雄大な富士山が正面にくっきりと聳え立ちます。敷地内に湧出する自家源泉「箱根蛸川温泉」を満たした開放的な露天風呂からは、遮るもののない芦ノ湖のパノラマが広がり、朝には朝霧が湖面を滑る幻想的な情景に出会えます。歴史と格式に彩られた館内には洗練されたアートと静寂が満ち、大人の冬の休日にふさわしい贅沢な時間が流れます。",
              roomTip: "「本館レイクビュー客室」なら、バルコニーから芦ノ湖と富士山、湖畔の自然林を独占。刻一刻と表情を変える夕景のグラデーションは必見です。",
              gourmetTip: "伝統のフレンチレストラン「ル・トリアノン」でのクラシカルなフランス料理コース、または富士山を望む和食レストランでの懐石料理から選べます。",
              highlights: [
                "巨匠・村野藤吾設計の円形美＆芦ノ湖畔庭園から正面に仰ぐ雪化粧富士",
                "自家源泉「蛸川温泉」の湖畔露天風呂＆伝統の本格フレンチコース",
                "歴史あるクラシカルな格式と芦ノ湖の冬の静寂に浸る大人の休日"
              ]
            },
            {
              id: 3,
              name: "Ｒａｋｕｔｅｎ　ＳＴＡＹ　ＦＵＪＩＭＩ　ＴＥＲＲＡＣＥ　箱根芦ノ湖",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/189383/189383.jpg",
              rating: 4.53,
              reviews: 164,
              price: "¥11,900〜",
              access: "箱根湯本駅から車で約１５分 ／ 箱根登山バス・東海バスにて元箱根港 下車 徒歩 ３分",
              special: "★2024年3月グランドオープン★芦ノ湖、富士山が一望できる好立地！ゆったり流れる贅沢な時間を堪能",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F189383%2F189383.html",
              story: "芦ノ湖畔の元箱根エリアに誕生した、全室から芦ノ湖と富士山を望む最上級プライベートヴィラ「Rakuten STAY FUJIMI TERRACE 箱根芦ノ湖」。全客室が広々としたテラスを備え、テラスにはなんと天然温泉を引いた「展望足湯」と「半露天風呂」を完備。冬の澄み渡る青空に輝く白銀の富士山と芦ノ湖の絶景を、誰にも気兼ねすることなくプライベートな湯浴みとともに独占できます。キッチンや大型スクリーン、上質なベッドを備えたスマートな空間は、非日常のラグジュアリーステイを叶えてくれます。箱根神社の鳥居へも徒歩圏内で、早朝の澄んだ空気の中での参拝にも最高の立地です。",
              roomTip: "最上階プレミアムルームは天井が高く圧倒的な開放感。テラスの温泉足湯に足を浸しながらワインを傾ける至福の時間を過ごせます。",
              gourmetTip: "信州牛や足柄牛のすき焼きセットなど、客室のダイニングで気兼ねなく楽しめる厳選食材のインルームダイニングプランが充実しています。",
              highlights: [
                "全室テラス付き富士山＆芦ノ湖ビュー＆客室天然温泉足湯と半露天風呂",
                "箱根神社平和の鳥居へ徒歩圏内＆最新設備を備えた上質なスマートステイ",
                "足柄牛すき焼きのインルームダイニングプランで水入らずの滞在"
              ]
            },
            {
              id: 4,
              name: "ホテル四季の館箱根芦ノ湖",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/183100/183100.jpg",
              rating: 4.37,
              reviews: 49,
              price: "¥40,700〜",
              access: "小田原駅よりバス　ホテルより無料送迎あり（要予約）",
              special: "芦ノ湖を見眼下に見下ろす抜群のロケーションと檜の香りに包まれた全30室の露天風呂の宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183100%2F183100.html",
              story: "芦ノ湖北岸の豊かな原生林に包まれた、全室に客室専用温泉露天風呂を備える極上リゾート「ホテル四季の館箱根芦ノ湖」。わずか数十室のみに限定された館内は、木と石の温もりが融合した大人のための隠れ家です。全客室のテラスに備えられた露天風呂には名湯・姥子温泉の源泉が注がれ、冬の森の澄んだ空気と木々のざわめきを感じながら、24時間好きな時に贅沢な湯浴みを楽しめます。ダイニングでは相模湾の新鮮な地魚や旬の冬野菜、銘柄牛を用いた本格フレンチ会席が供され、五感で味わう至高の美食体験が約束されます。",
              roomTip: "フォレストビューまたはレイクサイドビューのテラス付きスイート。冬の星空を眺めながらの客室露天風呂は格別の贅沢です。",
              gourmetTip: "シェフが腕を振るうフレンチジャポネのコース料理。小田原港直送の旬魚のポワレや厳選和牛のグリルなど、繊細な火入れとソースの技が光ります。",
              highlights: [
                "全室温泉露天風呂付きの隠れ家＆姥子温泉の滑らかな美肌湯と本格フレンチ",
                "全室スイート仕様のプライベート空間＆小田原港直送の旬魚と特選牛",
                "24時間いつでも好きな時に楽しめる客室専用露天風呂と厳選ワイン"
              ]
            },
            {
              id: 5,
              name: "箱根・芦ノ湖　はなをり（オリックスホテルズ＆リゾーツ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/162650/162650.jpg",
              rating: 4.40,
              reviews: 1500,
              price: "¥25,407〜",
              access: "桃源台駅より徒歩にて約2分",
              special: "SNSで話題の水盤テラス＆足湯♪ 色浴衣を身にまとい、五感が喜ぶ温泉リゾートでフォトジェニックな旅を",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F162650%2F162650.html",
              story: "芦ノ湖畔・桃源台のすぐそばに位置し、芦ノ湖と一体になれるような絶景演出で圧倒的人気を誇る「箱根・芦ノ湖 はなをり」。宿のシンボルであるオープンエアの「水盤テラス」には円形のソファーや足湯カフェが配され、湖面と水盤の水がひとつに溶け合うインフィニティの絶景が広がります。大浴場「四季の湯」には開放感あふれる庭園露天風呂と棚湯があり、芦ノ湖を渡る冬の爽快な風を感じながら柔らかな名湯に浸かれます。夕食は彩り豊かな小鉢が並ぶ新感覚の和洋ビュッフェで、ライブキッチンから出来立ての温かな料理が次々と提供されます。",
              roomTip: "「湖畔側露天風呂付き客室」なら、テラスの信楽焼露天風呂から芦ノ湖の夕暮れや朝霧をプライベートに鑑賞できます。",
              gourmetTip: "目にも鮮やかな旬の小鉢ビュッフェ。冬は熱々の肉料理や旬魚のグリル、特製スイーツまで、好きなものを好きなだけ贅沢に楽しめます。",
              highlights: [
                "芦ノ湖を一望する絶景水盤テラス＆足湯カフェと彩り豊かな旬菜ビュッフェ",
                "広々とした棚湯露天風呂と開放的な大浴場＆桃源台ロープウェイ至近",
                "オープンキッチンから出来立てが届くライブ感あふれるダイニング"
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
          src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1600&q=85"
          alt="冬の箱根芦ノ湖・雪化粧をまとった雄大な富士山と静かな湖面"
          fill
          priority
          className="object-cover object-center opacity-45 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/90 text-cyan-100 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-cyan-700/40">
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>11月・12月限定 箱根富士山絶景特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月箱根芦ノ湖の冬晴れ富士山絶景】<br className="hidden sm:inline" />
            澄み渡る空と雪化粧の富士を望む露天風呂＆極上湯宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            年間で最も晴天率が高く、空気が凛と澄み渡る初冬の芦ノ湖。紺碧の湖面に映る雪化粧の白銀富士、朱色の箱根神社平和の鳥居。絶景露天風呂で身体を温め、相模湾の冬魚と足柄牛に舌鼓を打つ極上の箱根リゾートステイ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> 神奈川県足柄下郡箱根町（芦ノ湖・元箱根）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-700">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Clear Sky & Majestic Mt. Fuji</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1年で最も空気が研ぎ澄まされる季節。芦ノ湖に広がる白銀富士の絶景
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            首都圏から小田急ロマンスカーや車でわずか80分から90分。日本を代表する名門温泉リゾート「箱根」。その最深部に位置するカルデラ湖「芦ノ湖」は、標高約723mの高地にあり、11月中旬から12月にかけて、1年で最もドラマチックな美しさを誇る季節を迎えます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            夏場や春先には湿気や霞で見え隠れしがちな富士山ですが、西高東低の冬型の気圧配置が決まる初冬は空気が乾燥し、雲ひとつない快晴の日が続きます。冠雪をまとった純白の富士山が、抜けるような冬の青空の下にクッキリと浮かび上がるその雄姿は、まさに息を呑むスケール。元箱根港の湖畔から望む「波静かな芦ノ湖」「朱塗りの平和の鳥居」「遊覧船」そして「白銀の富士」が織りなすパノラマは、古今の浮世絵や絵画に描かれ続けてきた日本最高の美景そのものです。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            冬の芦ノ湖滞在の真髄は、冷涼な高原の空気のなかで浸かる温かな名湯にあります。湖畔を渡る冬風が火照った顔を優しく冷まし、湯船に身を委ねながら眺める夕暮れ時の赤富士や、朝霧が立ち込める静謐な湖面。湯上がりには、相模湾や小田原港から届く脂の乗った旬の地魚、滋味豊かな箱根西麓野菜、足柄牛のすき焼きや本格フランス料理。都心の喧騒からわずか1時間半で辿り着ける、贅沢極まりない大人の冬のオアシスがここに広がっています。
          </p>
          <div className="bg-cyan-50/70 rounded-2xl p-5 border border-cyan-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-cyan-700" />
                富士山を確実に狙うなら「早朝の芦ノ湖畔」がベスト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                初冬の富士山は午前中に最も美しく姿を現します。芦ノ湖畔の宿に宿泊していれば、観光客の少ない朝一番の澄み切った絶景を独占できます。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              厳選の芦ノ湖名宿5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Winter Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月の冬の箱根芦ノ湖で満喫する3つの特権
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">冬晴れに聳える雪化粧の白銀富士</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                晴天率80%を誇る初冬のベストシーズン。紺碧の湖水と朱色の鳥居、純白の富士山が織りなす大パノラマは息をのむ美しさです。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">湖畔を望む絶景露天風呂</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                冷え込む高原の空気の中で湯煙に包まれる至福。蛸川温泉や姥子温泉の肌触り柔らかな名湯が、日々の疲れを芯から洗い流します。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">相模湾の旬魚と足柄牛の美食</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                小田原港直送の脂の乗った冬魚、甘み際立つ箱根西麓野菜、上質な足柄牛のすき焼きや本格フレンチ。冬の箱根の美食を優雅に堪能。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Recommended Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月に泊まりたい箱根芦ノ湖の厳選宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              楽天トラベルの最新空室状況・宿泊プランと連携。富士山ビューの名門ホテルから客室露天風呂付き隠れ家までを厳選。
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
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 font-bold text-xs">
                          第{index + 1}選
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
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
                      <span className="text-2xl font-extrabold text-cyan-800">{hotel.price}</span>
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
                          <h4 className="text-xs font-bold text-cyan-900 flex items-center gap-1.5 mb-1">
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
                  <div className="bg-cyan-50/50 rounded-2xl p-4 sm:p-5 border border-cyan-100/80 space-y-2.5">
                    <h4 className="text-xs font-bold text-cyan-950 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                      この宿のおすすめポイント
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {hotel.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-stone-700">
                          <span className="text-cyan-600 font-bold">✓</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <span className="text-xs text-stone-500 italic">
                      ※富士山ビュールームや温泉露天風呂付き客室は週末を中心に早期満室となります。
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-900 hover:bg-cyan-950 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
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

        {/* 1泊2日 富士山絶景＆温泉リゾート満喫モデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-700">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                初冬の箱根芦ノ湖を満喫する「1泊2日 富士山絶景＆極上温泉リゾートモデルコース」
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs sm:text-sm text-stone-700 leading-relaxed">
            {/* Day 1 */}
            <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-200/80">
              <div className="flex items-center gap-2 pb-2 border-b border-cyan-200">
                <span className="px-3 py-1 rounded-full bg-cyan-900 text-white font-bold text-xs">1日目</span>
                <h3 className="font-bold text-stone-900 text-base">ロマンスカーで箱根へ＆芦ノ湖畔の白銀富士</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-900 shrink-0">10:30</span>
                  <div>
                    <strong>新宿駅から小田急特急ロマンスカーに乗車</strong>
                    <p className="text-stone-500 text-xs mt-0.5">車窓の富士山を眺めながら約85分で箱根湯本駅へ。箱根登山バスに乗り換えて芦ノ湖（元箱根港）へ直行。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-900 shrink-0">12:30</span>
                  <div>
                    <strong>元箱根港に到着＆名物「芦ノ湖ワカサギ天丼」ランチ</strong>
                    <p className="text-stone-500 text-xs mt-0.5">バスを降りた瞬間、目の前に広がる芦ノ湖と雪化粧した白銀富士！湖畔の食事処で冬が旬のワカサギをサクサク天ぷらで。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-900 shrink-0">14:00</span>
                  <div>
                    <strong>箱根神社参拝＆平和の鳥居で記念撮影</strong>
                    <p className="text-stone-500 text-xs mt-0.5">樹齢数百年の杉並木を歩き本殿で開運祈願。湖上に浮かぶ朱色の「平和の鳥居」と青空のコントラストを満喫。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-900 shrink-0">15:30</span>
                  <div>
                    <strong>宿へチェックイン＆夕暮れの赤富士を望む露天風呂</strong>
                    <p className="text-stone-500 text-xs mt-0.5">客室テラスや大浴場露天風呂から、夕陽に染まる富士山の稜線を眺める贅沢。冷涼な高原の風と熱い名湯が至高の心地よさ。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-900 shrink-0">18:30</span>
                  <div>
                    <strong>相模湾の旬魚と足柄牛のディナー</strong>
                    <p className="text-stone-500 text-xs mt-0.5">小田原港直送の金目鯛や寒ブリ、上質な足柄牛のすき焼きや本格フランス料理。ワインや地酒とともに大人の夜を満喫。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-900 shrink-0">21:00</span>
                  <div>
                    <strong>澄天の満天の星空を仰ぐ夜の湯浴み</strong>
                    <p className="text-stone-500 text-xs mt-0.5">標高720mの芦ノ湖畔は人工の光が少なく、冬の夜空には無数の星が瞬きます。静寂のなかで心身を解き放つ時間。</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Day 2 */}
            <div className="space-y-4 bg-stone-50 p-6 rounded-2xl border border-stone-200/80">
              <div className="flex items-center gap-2 pb-2 border-b border-cyan-200">
                <span className="px-3 py-1 rounded-full bg-cyan-900 text-white font-bold text-xs">2日目</span>
                <h3 className="font-bold text-stone-900 text-base">空中散歩の大涌谷と名物自然薯蕎麦</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-900 shrink-0">07:00</span>
                  <div>
                    <strong>早朝の芦ノ湖畔散策（朝霧と逆さ富士）</strong>
                    <p className="text-stone-500 text-xs mt-0.5">風のない冬の早朝、静まり返った湖面に富士山がくっきりと上下逆さまに映る「逆さ富士」に出会えるチャンス。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-900 shrink-0">08:00</span>
                  <div>
                    <strong>レイクビューレストランで朝食ビュッフェ</strong>
                    <p className="text-stone-500 text-xs mt-0.5">焼き立てパンや箱根西麓野菜のサラダ、小田原蒲鉾など彩り豊かな朝食を芦ノ湖を眺めながら優雅に味わう。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-900 shrink-0">09:30</span>
                  <div>
                    <strong>チェックアウト＆箱根海賊船クルーズ</strong>
                    <p className="text-stone-500 text-xs mt-0.5">元箱根港から桃源台港へ海賊船で横断。デッキから望む360度パノラマの芦ノ湖と富士山の絶景に大歓声。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-900 shrink-0">10:45</span>
                  <div>
                    <strong>箱根ロープウェイで大涌谷へ！黒たまごで延命祈願</strong>
                    <p className="text-stone-500 text-xs mt-0.5">白煙立ち込める大涌谷の地獄谷をゴンドラから見下ろす大迫力。1個食べれば7年寿命が延びる名物「黒たまご」を賞味。</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-900 shrink-0">12:30</span>
                  <div>
                    <strong>箱根湯本で名物「自然薯とろろ蕎麦」ランチ＆お土産</strong>
                    <p className="text-stone-500 text-xs mt-0.5">登山電車で湯本へ下り、粘り気抜群の自然薯蕎麦を堪能。伝統の寄木細工や銘菓「湯もち」を買いロマンスカーで帰路へ。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 泉質・温泉科学＆温冷効果 */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-700">
              <Footprints className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Onsen Science & Wellness</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                箱根芦ノ湖エリアの泉質特徴と冬の高原リフレッシュ入浴法
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-cyan-600" />
                蛸川温泉・姥子温泉の多彩な泉質
              </h3>
              <p>
                芦ノ湖周辺には、敷地内から湧出する蛸川温泉（単純温泉・カルシウム硫酸塩泉）や、歴史ある姥子温泉（単純温泉）などがあります。
              </p>
              <p>
                肌への刺激が少なく非常にまろやかな泉質で、入浴後も肌がカサつかずしっとりとした潤いが残ります。筋肉疲労、冷え性、関節痛を癒やし、冬の箱根散策で歩き疲れた脚を素早く回復させてくれます。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                高原の冷涼な空気と温湯による自律神経の整え
              </h3>
              <p>
                標高720mの芦ノ湖畔は冬期、気温がぐっと下がります。熱めの露天風呂に浸かりながら、顔や頭部だけ冷たい外気に触れることで「頭寒足熱」の理想的な血行循環が生まれます。
              </p>
              <p>
                この温冷のコントラストが交感神経と副交感神経の切り替えをスムーズにし、日常のストレスや睡眠の乱れを劇的にリセットしてくれます。
              </p>
            </div>
          </div>
        </section>

        {/* お土産・ご当地スイーツ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-700">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Souvenirs & Crafts</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の箱根旅行で手に入れたい伝統工芸＆厳選銘菓
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 font-bold text-[11px]">伝統工芸</span>
              <h3 className="font-bold text-stone-900">箱根寄木細工の秘密箱</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                様々な自然木の幾何学模様を組み合わせた箱根独自の木工芸。仕掛けを順番に解かないと開かない「からくり箱」は国内外で大人気。
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 font-bold text-[11px]">箱根銘菓</span>
              <h3 className="font-bold text-stone-900">ちもと「湯もち」</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                国産白玉粉を使用したマシュマロのように柔らかなお餅の中に、箱根を流れる早川の岩に見立てた本練羊羹を散りばめた極上和菓子。
              </p>
            </div>

            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/70 space-y-2">
              <span className="px-2 py-0.5 rounded bg-cyan-100 text-cyan-800 font-bold text-[11px]">大涌谷名物</span>
              <h3 className="font-bold text-stone-900">大涌谷 黒たまご</h3>
              <p className="text-stone-600 text-xs leading-relaxed">
                地熱と火山ガスの化学反応で真っ黒に染まった茹で卵。出来立て熱々を頬張れば、温泉のミネラルが染み込んだ濃厚な黄身のコクが広がります。
              </p>
            </div>
          </div>
        </section>

        {/* Practical Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-700">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Travel & Photo Tips</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の箱根芦ノ湖 富士山撮影と観光の実用アドバイス
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Snowflake className="w-4 h-4 text-cyan-600" />
                富士山撮影のゴールデンタイムと撮影ポイント
              </h3>
              <p>
                富士山を最もクリアに撮影できる時間帯は、日の出直後から午前9時〜10時頃です。午後になると気温上昇に伴って上昇気流が発生し、山頂付近に雲がかかりやすくなります。
              </p>
              <p>
                元箱根港の湖畔から平和の鳥居越しに狙う構図や、恩賜箱根公園の展望台から芦ノ湖全体を見下ろすアングルが定番かつ最も美しい構図です。三脚を使用する際は足場の凍結に十分注意してください。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/80">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                標高720mの寒さ対策と交通アクセス
              </h3>
              <p>
                芦ノ湖は箱根湯本よりも大幅に標高が高く、真冬並みの防寒が必要です。防風性のあるコート、マフラー、手袋、カイロを必ず携行しましょう。
              </p>
              <p>
                交通手段としては、箱根フリーパスを利用した箱根登山バス、海賊船、ロープウェイの周遊が最も便利でお得です。車の場合は箱根新道やターンパイク利用が便利ですが、12月は日陰の凍結に備えてスタッドレスタイヤを準備しましょう。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-700">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Frequently Asked Questions</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月・12月の箱根芦ノ湖旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-extrabold">Q.</span>
                11月と12月ではどちらが富士山が綺麗に見えますか？紅葉との兼ね合いは？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                11月上旬〜中旬は芦ノ湖畔の紅葉が美しく、紅葉越しの富士山が楽しめます。11月下旬から12月にかけては富士山の冠雪が裾野近くまで広がり、大気中の湿度がさらに下がって空気の透明度が最高潮に達します。純白の富士山をくっきりと見たい方には12月が最もおすすめです。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-extrabold">Q.</span>
                冬の芦ノ湖海賊船は運行していますか？寒さは厳しいですか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                箱根海賊船は冬期も通常運行しています（天候・強風による運休を除く）。デッキに出ると湖上の冷たい風が強く吹き付けるため、防寒着や耳当て、手袋が必須です。船内には暖房の効いた快適な客室があり、大きな窓から暖かく富士山と芦ノ湖を眺めることもできます。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-extrabold">Q.</span>
                箱根神社の平和の鳥居での写真撮影の混雑状況は？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                日中の時間帯は平和の鳥居前で記念撮影を行う観光客で行列ができることが多く、30分〜1時間待ちになることもあります。芦ノ湖畔に宿泊すれば、朝7時台〜8時台の静かな時間帯に訪れることができるため、待ち時間なしで幻想的な朝日と鳥居の写真が撮影できます。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-extrabold">Q.</span>
                冬の箱根グルメでおすすめのものは何ですか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                芦ノ湖名物のワカサギ料理（フライや天ぷら）、箱根山麓で育つ「足柄牛」のすき焼き・ステーキ、小田原漁港直送の新鮮な金目鯛や寒ブリなどの地魚、そして冬に粘りと甘みが増す箱根名物の「自然薯（じねんじょ）とろろ蕎麦」が絶品です。
              </p>
            </div>
          </div>
        </section>

        {/* 内部リンク網羅（GEOリンク＆関連冬特集） */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Related Guides & Areas</span>
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
              href="/winter-fujikawaguchiko-momiji-fuji-view-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-cyan-50/60 border border-stone-200 hover:border-cyan-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-rose-800 bg-rose-100/80 px-2 py-0.5 rounded">富士山特集</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-cyan-900 transition-colors">
                富士河口湖紅葉まつりと逆さ富士を望む露天風呂宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                もみじ回廊ライトアップと湖畔から望む圧倒的な冬富士パノラマ。
              </p>
            </Link>

            <Link 
              href="/winter-izu-kinmedai-shabushabu-luxury-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-cyan-50/60 border border-stone-200 hover:border-cyan-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">近隣温泉特集</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                伊豆の極上金目鯛しゃぶしゃぶとオーシャンビュー温泉
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                箱根から足を伸ばせる伊豆半島で冬が旬の脂の乗った金目鯛を堪能。
              </p>
            </Link>

            <Link 
              href="/winter-tokyo-marunouchi-illumination-luxury-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-cyan-50/60 border border-stone-200 hover:border-cyan-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded">首都圏冬ステイ</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-teal-900 transition-colors">
                東京丸の内シャンパンゴールドイルミネーション宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                丸の内仲通りの光の並木道と東京駅周辺のラグジュアリーホテル。
              </p>
            </Link>
          </div>

          {/* 都道府県GEOリンク */}
          <div className="pt-4 border-t border-stone-100 space-y-3">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              神奈川県および関東・甲信越エリアのおすすめ温泉宿一覧
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/prefectures/kanagawa" className="px-3 py-1.5 bg-stone-100 hover:bg-cyan-100 text-stone-700 hover:text-cyan-900 rounded-lg transition-colors font-medium">神奈川県の宿一覧</Link>
              <Link href="/prefectures/shizuoka" className="px-3 py-1.5 bg-stone-100 hover:bg-cyan-100 text-stone-700 hover:text-cyan-900 rounded-lg transition-colors font-medium">静岡県の宿一覧</Link>
              <Link href="/prefectures/yamanashi" className="px-3 py-1.5 bg-stone-100 hover:bg-cyan-100 text-stone-700 hover:text-cyan-900 rounded-lg transition-colors font-medium">山梨県の宿一覧</Link>
              <Link href="/prefectures/tokyo" className="px-3 py-1.5 bg-stone-100 hover:bg-cyan-100 text-stone-700 hover:text-cyan-900 rounded-lg transition-colors font-medium">東京都の宿一覧</Link>
              <Link href="/prefectures/chiba" className="px-3 py-1.5 bg-stone-100 hover:bg-cyan-100 text-stone-700 hover:text-cyan-900 rounded-lg transition-colors font-medium">千葉県の宿一覧</Link>
              <Link href="/prefectures/saitama" className="px-3 py-1.5 bg-stone-100 hover:bg-cyan-100 text-stone-700 hover:text-cyan-900 rounded-lg transition-colors font-medium">埼玉県の宿一覧</Link>
            </div>
          </div>
        </section>

      </main>
    </article>
  );
}
