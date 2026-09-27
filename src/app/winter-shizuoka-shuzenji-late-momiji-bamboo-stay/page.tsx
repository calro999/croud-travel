import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Footprints, Trees
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月修善寺温泉の遅咲き紅葉と竹林】伊豆の小京都で桂川の静寂と伊豆牛会席を堪能する極上湯宿5選",
  description: "日本で最も遅い11月中旬から12月上旬にかけて見頃を迎える伊豆最古の名湯・修善寺温泉の紅葉。桂川のせせらぎに寄り添う「竹林の小径」と朱塗りの橋、弘法大師ゆかりの独鈷の湯。天城の清流が育む本生わさびと芳醇な伊豆牛ステーキ、駿河湾の冬魚を味わう静寂の初冬ステイ。",
  keywords: '修善寺温泉 宿泊 11月 12月, 修善寺 紅葉 温泉 宿, 竹林の小径 修善寺 旅館, 伊豆牛 温泉 宿, 修善寺温泉 おすすめ 高級旅館, 天城わさび 修善寺, 修善寺 モデルコース',
  alternates: {
    canonical: 'https://croud-travel.com/winter-shizuoka-shuzenji-late-momiji-bamboo-stay',
  },
  openGraph: {
    title: "【11・12月修善寺温泉の遅咲き紅葉と竹林】伊豆の小京都で桂川の静寂と伊豆牛会席を堪能する極上湯宿5選",
    description: "日本で最も遅い11月中旬から12月上旬にかけて見頃を迎える伊豆最古の名湯・修善寺温泉の紅葉。桂川のせせらぎに寄り添う「竹林の小径」と朱塗りの橋、弘法大師ゆかりの独鈷の湯。天城の清流が育む本生わさびと芳醇な伊豆牛ステーキ、駿河湾の冬魚を味わう静寂の初冬ステイ。",
    url: 'https://croud-travel.com/winter-shizuoka-shuzenji-late-momiji-bamboo-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月修善寺温泉の遅咲き紅葉と竹林】伊豆の小京都で桂川の静寂と伊豆牛会席を堪能する極上湯宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月修善寺温泉の遅咲き紅葉と竹林】伊豆の小京都で桂川の静寂と伊豆牛会席を堪能する極上湯宿5選",
    description: "日本で最も遅い11月中旬から12月上旬にかけて見頃を迎える伊豆最古の名湯・修善寺温泉の紅葉。桂川のせせらぎに寄り添う「竹林の小径」と朱塗りの橋、弘法大師ゆかりの独鈷の湯。天城の清流が育む本生わさびと芳醇な伊豆牛ステーキ、駿河湾の冬魚を味わう静寂の初冬ステイ。",
  }
};

export default function ShuzenjiWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-shizuoka-shuzenji-late-momiji-bamboo-stay#article",
        "headline": "【11・12月修善寺温泉の遅咲き紅葉と竹林】伊豆の小京都で桂川の静寂と伊豆牛会席を堪能する極上湯宿5選",
        "description": "日本で最も遅い11月中旬から12月上旬にかけて見頃を迎える伊豆最古の名湯・修善寺温泉の紅葉。桂川のせせらぎに寄り添う「竹林の小径」と朱塗りの橋、弘法大師ゆかりの独鈷の湯。天城の清流が育む本生わさびと芳醇な伊豆牛ステーキ、駿河湾の冬魚を味わう静寂の初冬ステイ。",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
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
          "@id": "https://croud-travel.com/winter-shizuoka-shuzenji-late-momiji-bamboo-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-shizuoka-shuzenji-late-momiji-bamboo-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "修善寺温泉の紅葉の見頃はいつ頃ですか？12月でも楽しめますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "修善寺温泉および伊豆半島は温暖な気候のため、日本国内で最も紅葉が遅い地域の一つとして知られています。例年11月中旬から色づき始め、見頃のピークは11月下旬から12月上旬頃です。修善寺自然公園のもみじ林や竹林の小径、虹の郷などでは12月上旬まで鮮やかなモミジのグラデーションと朱塗りの橋の美しいコントラストを存分に鑑賞できます。"
            }
          },
          {
            "@type": "Question",
            "name": "修善寺温泉の泉質や効能、湯あたりの心配は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "修善寺温泉の泉質はアルカリ性単純温泉（低張性・弱アルカリ性・高温泉）です。無色透明で無臭、肌への刺激が非常に穏やかなため、赤ちゃんからご年配の方まで安心して長湯を楽しめます。湯上がりは肌がすべすべになり保温効果も高いため、初冬の冷え性改善や疲労回復、筋肉痛の緩和に高い効果を発揮します。"
            }
          },
          {
            "@type": "Question",
            "name": "「竹林の小径」や温泉街の散策におすすめの時間帯は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "おすすめは宿泊当日の夕暮れ時（16時半〜17時半）と、翌朝の早朝（7時〜8時半）です。夕暮れ時は竹林の小径や桂川沿いの橋が温かな光でライトアップされ、幻想的な大人の夜散歩が楽しめます。また早朝は観光客がほとんどおらず、澄んだ冷涼な空気の中で竹の葉が擦れ合う爽やかな音と鳥の声だけが響く極上の静寂を体験できます。"
            }
          },
          {
            "@type": "Question",
            "name": "修善寺温泉へのアクセス方法と道路の凍結や積雪の心配は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "電車の場合はJR三島駅から伊豆箱根鉄道駿豆線に乗り換え約35分で修善寺駅へ。そこから路線バスで約8分です。お車の場合は東駿河湾環状線や伊豆縦貫道が直結しており、首都圏から約2時間半〜3時間。伊豆半島は温暖なため11月・12月に修善寺温泉街で積雪することは極めて稀です。ただし天城峠や箱根越えのルートを通る場合、12月下旬は夜間の路面凍結の恐れがあるため念のため冬用タイヤ装着が安心です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.com/winter-shizuoka-shuzenji-late-momiji-bamboo-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "湯回廊　菊屋（共立リゾート）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7491%2F7491.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "修善寺温泉　宙ＳＯＲＡ　渡月荘金龍",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27983%2F27983.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "修善寺温泉　瑞の里　〇久（まるきゅう）旅館",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29806%2F29806.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "湯めぐりの宿　修善寺温泉　桂川（共立リゾート）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1645%2F1645.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "修善寺温泉　柳生の庄",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72797%2F72797.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "湯回廊　菊屋（共立リゾート）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7491/7491.jpg",
              rating: 4.49,
              reviews: 1710,
              price: "¥21,230〜",
              access: "伊豆箱根鉄道 修善寺駅よりバス約８分※送迎無し／東名高速 沼津ICから国道１号線、国道１３６号線 伊豆中央道経由約３５分",
              special: "文豪も愛した本館、源泉かけ流し風呂付の離れ、2021年～水の語り部(温泉風呂付）、風の語り部が誕生",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7491%2F7491.html",
              story: "創業380余年、夏目漱石が長逗留し名作『修善寺の記』の舞台ともなった名門旅館「湯回廊 菊屋」。宿の象徴である木造の回廊が桂川の支流や日本庭園を渡るように巡らされ、歩みを進めるごとに初冬の移ろいゆく景色が万華鏡のように展開します。館内には趣の異なる多彩な湯処が点在し、歴史を刻む大浴場「菊風呂」や「朱鷺の湯」、そして予約不要で空いていれば何度でも自由に利用できる4つの貸切露天風呂が完備。夜になると回廊の行灯に明かりが灯り、冷涼な初冬の大気とほのかな湯気が幽玄な世界を作り出します。",
              roomTip: "清らかな渓流と庭園の木々を間近に臨む「風の語らい」や離れの露天風呂付き客室がおすすめ。瀬音と鳥のさえずりをBGMに誰にも邪魔されない静寂を満喫できます。",
              gourmetTip: "夕食は月替わりの趣向を凝らした会席料理。メイン料理やご飯物を自分好みに選べるスタイルが好評で、伊豆牛の陶板焼きや駿河湾直送の冬の鮮魚、目の前ですりおろす天城の本生わさびの香りが食欲を刺激します。",
              highlights: [
                "創業380余年の歴史息づく木造回廊＆予約不要の4つの無料貸切露天風呂",
                "夏目漱石逗留のゆかり宿＆桂川を望む歴史的大浴場「菊風呂」「朱鷺の湯」",
                "自分好みに選べる月替わり会席＆伊豆牛ステーキと天城本生わさび"
              ]
            },
            {
              id: 2,
              name: "修善寺温泉　宙ＳＯＲＡ　渡月荘金龍",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/27983/27983.jpg",
              rating: 4.67,
              reviews: 620,
              price: "¥11,000〜",
              access: "伊豆箱根鉄道修善寺駅から路線バスまたはタクシー（送迎不可）/東名高速沼津ICから伊豆縦貫道・伊豆中央道経由約３５分",
              special: "客室からは四季を感じられる自然が一望できます。月替りの会席は人気の絶品です。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27983%2F27983.html",
              story: "修善寺温泉街の奥、豊かな自然林を背負う高台に広がる「宙 SORA 渡月荘金龍」。一歩足を踏み入れると、約1万5千坪もの広大な日本庭園がガラス越しに広がる圧倒的な開放感に息をのみます。数々のドラマや映画のロケ地としても名高いモダンジャパニーズの名宿です。初冬の最大の魅力は、山頂に位置する2つの貸切露天風呂「天」「夕」。澄み切った伊豆の夜空に瞬く無数の星と、眼下に広がる修善寺の灯りを眺めながらの入浴は、日常を完全に忘れさせてくれます。洗練された現代デザインと日本の伝統美が見事に調和しています。",
              roomTip: "広大な庭園を一望するマウンテンビューの和洋室が人気。11月下旬から12月上旬にかけては、窓一面に赤や黄金に染まる遅咲きの紅葉グラデーションが広がります。",
              gourmetTip: "料理長が選び抜いた旬の食材を五感で楽しむ創作和食会席。きめ細やかな肉質の伊豆牛の網焼き、天城軍鶏の滋味あふれるスープ、伊豆近海の真鯛や金目鯛の造りなど、伊豆の贅が詰まった逸品揃いです。",
              highlights: [
                "1万5千坪の日本庭園＆山頂の絶景貸切露天風呂から望む星空パノラマ",
                "ロケ地としても名高い和モダン建築＆11〜12月の庭園紅葉ビュー",
                "伊豆牛網焼きや天城軍鶏・駿河湾鮮魚が彩る五感の創作和食会席"
              ]
            },
            {
              id: 3,
              name: "修善寺温泉　瑞の里　〇久（まるきゅう）旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29806/29806.jpg",
              rating: 4.43,
              reviews: 680,
              price: "¥17,050〜",
              access: "修善寺駅よりタクシー約10分／東名高速　沼津ＩＣより伊豆縦貫道を通り約30分",
              special: "冷蔵庫飲物無料★2024「泳ぎ湯」「寝湯」新設★宴処新装★『お客様が選ぶ人気宿』常連宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29806%2F29806.html",
              story: "桂川の清流沿いに佇み、真心のこもった温かなおもてなしと細やかな心配りで高いリピート率を誇る「瑞の里 〇久（まるきゅう）旅館」。宿の自慢は、館内だけで多彩な湯浴みが完結する充実した温泉施設です。野趣あふれる大浴場のほか、無料の貸切露天風呂が3箇所あり、檜の温もりや岩の感触を楽しみながらプライベートな名湯時間を満喫できます。女性に嬉しい色浴衣の無料貸出や、湯上がりの冷たいハーブティーのサービスなど、細部まで行き届いたホスピタリティが初冬の冷えた心と身体を優しくほぐしてくれます。",
              roomTip: "客室専用露天風呂を備えた特別室が人気。川のせせらぎを聞きながら、いつでも好きな時に好きなだけ修善寺の名湯を独占できます。",
              gourmetTip: "「五色の味覚」をテーマにした彩り鮮やかな月替わり会席。富士山麓で育まれたブランド牛のステーキや、修善寺名産の原木椎茸、天城の生わさびを使った和風創作料理が旅の夜を華やかに彩ります。",
              highlights: [
                "桂川沿いの静寂と真心のおもてなし＆3箇所の無料貸切風呂と充実湯処",
                "女性に嬉しい色浴衣サービス＆清流の瀬音をBGMにした客室専用露天",
                "「五色の味覚」を楽しむ富士山麓ブランド牛と原木椎茸の会席料理"
              ]
            },
            {
              id: 4,
              name: "湯めぐりの宿　修善寺温泉　桂川（共立リゾート）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1645/1645.jpg",
              rating: 4.34,
              reviews: 1965,
              price: "¥12,900〜",
              access: "伊豆箱根鉄道修善寺駅よりタクシーで８分。",
              special: "2021年1月グランドオープン◇無料の7つの貸切風呂で楽しむ美肌の修善寺温泉",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1645%2F1645.html",
              story: "桂川のほとりに位置し、温泉街の中心「竹林の小径」や「独鈷の湯」へも徒歩数分という抜群のロケーションを誇る「修善寺温泉 桂川」。館内に一歩入ると、滝が流れる中庭を望む開放的なロビーが迎えてくれます。最大の魅力は、館内に用意された趣異なる7つの貸切風呂。予約不要で空き状況をランプで確認しながら自由に利用でき、ご家族やカップルでの湯めぐりに最適です。全館に畳敷きや快適なベッドを導入した現代的な和モダン空間で、観光の拠点としても極めてコストパフォーマンスの高い滞在を提供しています。",
              roomTip: "中庭の清流や修善寺の山並みを望むベッド付き和モダン客室がおすすめ。段差が少なく高齢の方から小さなお子様連れまで快適に過ごせます。",
              gourmetTip: "夕食は旬の地元食材をふんだんに取り入れた季節の和食膳や、厳選食材を使ったビュッフェ／会席プラン。揚げたての天ぷらや駿河湾の新鮮な魚介、温かい季節の鍋物が好評です。",
              highlights: [
                "温泉街中心へ徒歩すぐの好立地＆館内7つの無料貸切風呂で湯めぐり三昧",
                "全館畳敷きや快適ベッドを導入した現代和モダン空間でコスパ抜群",
                "揚げたて天ぷらと駿河湾鮮魚・温かい旬鍋を楽しむ季節の和食膳"
              ]
            },
            {
              id: 5,
              name: "修善寺温泉　柳生の庄",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/72797/72797.jpg",
              rating: 5.00,
              reviews: 36,
              price: "¥54,450〜",
              access: "伊豆箱根鉄道　修善寺駅から車で約１０分 東名高速道路沼津ICまたは新東名高速道路長泉沼津ICから30分　",
              special: "修善寺温泉の奥にある閑静な旅館。本格懐石料理と露天風呂が好評。露天風呂付客室や離れもおすすめ。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72797%2F72797.html",
              story: "修善寺温泉の最も静閑な奥座敷に約二千坪の広大な敷地を擁し、日本の数寄屋造りの粋を集めた最高峰の格式を誇る「柳生の庄」。東京・芝白金にあった料亭「柳生」をルーツに持ち、昭和45年に開かれた隠れ宿です。竹林の静寂の中に点在する客室は、宮大工の卓越した技によって一室ごとに異なる意匠で誂えられています。岩肌を包む苔と初冬の竹林を望む大露天風呂「武蔵の湯」は、柔らかな木漏れ日と湯けむりが交錯する至福の空間。日常の喧騒から隔絶された、本物の贅沢と静寂がここに極まります。",
              roomTip: "桂川の支流に面した半露天風呂付きの離れ客室は、完全なプライベート空間。部屋にいながらにして竹林の風情と名湯を堪能できます。",
              gourmetTip: "料亭の伝統を脈々と受け継ぐ、日本屈指の本格京風懐石料理。出汁の引き方から器の選定、盛り付けに至るまで一切の妥協がなく、伊豆の厳選食材が息を呑む芸術的な懐石へと昇華されています。",
              highlights: [
                "約二千坪の敷地に佇む極上の数寄屋造り＆料亭仕込みの本格京風懐石",
                "宮大工の技が光る離れ客室＆初冬の竹林を望む名物大露天「武蔵の湯」",
                "出汁と器に一切の妥協なき至高の懐石料理＆伊豆の厳選食材の饗宴"
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
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85"
          alt="初冬の修善寺温泉・桂川沿いに続く竹林の小径と遅咲き紅葉"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/90 text-emerald-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-emerald-700/50">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>11月・12月限定 伊豆の小京都・遅咲き紅葉特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月修善寺温泉の遅咲き紅葉と竹林】<br className="hidden sm:inline" />
            伊豆の小京都で桂川の静寂と伊豆牛会席を堪能する極上湯宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            日本で最も遅い紅葉が川面を赤く染め、凛と青い竹林が風にそよぐ。弘法大師ゆかりの開湯1200年の名湯に浸かり、芳醇な伊豆牛と天城生わさびの美食に酔いしれる静寂の初冬ステイ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-emerald-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-emerald-400" /> 静岡県伊豆市（修善寺温泉）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-emerald-100">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Trees className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Little Kyoto in Izu</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                12月まで続く奇跡の紅葉と竹林の静寂。文豪たちが愛した伊豆最古の湯
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            静岡県・伊豆半島の山間に抱かれた修善寺温泉。平安時代の大同2（807）年、弘法大師空海が桂川の河原で病気の父の身体を洗う少年の親孝行に心を打たれ、独鈷杵（とっこしょ）で岩を砕いて霊泉を湧出させたという「独鈷の湯」から始まる、伊豆半島最古の歴史を誇る名湯です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            修善寺温泉の11月・12月は、国内で最も優美な季節。温暖な伊豆気候の影響を受け、全国各地で冬枯れを迎える11月下旬から12月上旬にかけて、ようやく深紅や黄色のモミジが最盛期を迎えます。温泉街の中心を流れる桂川沿いの「竹林の小径」では、天を突くようにまっすぐ伸びる青竹の緑と、燃え立つような紅葉、そして桂川に架かる朱塗りの欄干が見事な三位一体を成し、歩く者の心を奪います。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            夏目漱石、芥川龍之介、泉鏡花、川端康成ら錚々たる文豪が長逗留し、数々の名作を紡いだこの地には、今も静かで品格ある空気が流れています。泉質は肌あたりが極めて柔らかなアルカリ性単純温泉。湯上りには肌がしっとりと吸い付くように潤い、冷えた身体を芯から解きほぐします。夕食には、天城山麓の湧水で育まれた香り高い「本生わさび」をたっぷりすりおろし、きめ細やかなサシが入った「伊豆牛」のステーキや駿河湾の冬魚とともに味わう贅沢。静かに自分と向き合う、大人のための冬旅が修善寺にあります。
          </p>
          
          <div className="bg-emerald-50/70 rounded-2xl p-5 border border-emerald-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-emerald-700" />
                <span>11月・12月 修善寺温泉の旅のハイライト</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                12月上旬までの遅咲き紅葉・竹林の小径夕暮れライトアップ・弘法大師ゆかりの美肌名湯・天城生わさびと伊豆牛
              </p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-800 text-white font-bold text-xs whitespace-nowrap shadow-sm">
              東京から特急踊り子号で直通約2時間
            </span>
          </div>
        </section>

        {/* Climate & Travel Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-stone-100 text-stone-700">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Travel Planning Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                初冬の修善寺 気温・見頃・散策の極意
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                <Snowflake className="w-4 h-4 text-emerald-700" /> 気温と服装の目安
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                11月の最高気温は約16℃、最低気温約8℃。12月は最高12℃、最低4℃前後。日中は日差しがあれば暖かいですが、夕暮れ以降は川風で冷え込むため、トレンチコートや厚手のジャケット、ストールが重宝します。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                <Footprints className="w-4 h-4 text-emerald-700" /> 紅葉狩りと小径散策
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                竹林の小径や修善寺自然公園のもみじ林は石畳や遊歩道が整備されています。起伏があるため、ヒールを避け歩きやすいフラットシューズやスニーカーが快適です。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <span className="text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" /> アクセスと道路状況
              </span>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                東名沼津ICまたは新東名長泉沼津ICから伊豆縦貫道経由で約30分。11月・12月の修善寺周辺は積雪の心配はほぼありませんが、夜間の冷え込みによる橋の上の凍結には注意してください。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-widest bg-emerald-100/60 px-3.5 py-1 rounded-full">
              SELECTED LUXURY INNS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900">
              【11・12月】修善寺温泉の極上ステイを叶える名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto">
              楽天トラベルで4.3〜5.0の絶大な評価を誇る、伊豆最古の名湯・洗練された伊豆牛会席・静寂のロケーションを極めた宿を厳選しました。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200/80 hover:shadow-xl transition-all duration-300 flex flex-col lg:flex-row"
              >
                {/* Image Box */}
                <div className="lg:w-5/12 relative min-h-[300px] lg:min-h-full bg-stone-100">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-stone-900/85 backdrop-blur-md text-emerald-300 font-extrabold px-3 py-1.5 rounded-xl text-xs sm:text-sm shadow-md border border-emerald-500/30">
                    第{hotel.id}位 厳選名宿
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-stone-200/80 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-stone-500 font-bold block">楽天トラベル評価</span>
                      <div className="flex items-center gap-1.5 text-emerald-800 font-extrabold text-base">
                        <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                        <span>{hotel.rating}</span>
                        <span className="text-[11px] text-stone-400 font-normal">({hotel.reviews}件)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-stone-500 font-bold block">参考宿泊料金（1名）</span>
                      <span className="text-stone-900 font-black text-sm sm:text-base text-emerald-900">{hotel.price}</span>
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[11px] text-emerald-800 font-bold tracking-wider uppercase block mb-1">
                        {hotel.special}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>
                      <p className="text-xs text-stone-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <p className="text-stone-700 text-sm leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Tips */}
                    <div className="space-y-2.5 pt-2">
                      <div className="bg-emerald-50/60 rounded-xl p-3 border border-emerald-200/60 text-xs leading-relaxed text-stone-700">
                        <strong className="text-emerald-900 font-bold flex items-center gap-1 mb-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" /> おすすめ客室の選び方:
                        </strong>
                        {hotel.roomTip}
                      </div>
                      <div className="bg-stone-50 rounded-xl p-3 border border-stone-200 text-xs leading-relaxed text-stone-700">
                        <strong className="text-stone-900 font-bold flex items-center gap-1 mb-0.5">
                          <Utensils className="w-3.5 h-3.5 text-emerald-700" /> 夕食・ご当地美食のこだわり:
                        </strong>
                        {hotel.gourmetTip}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block">この宿の注目ポイント</span>
                      <ul className="space-y-1">
                        {hotel.highlights.map((item: string, hIdx: number) => (
                          <li key={hIdx} className="text-xs text-stone-600 flex items-start gap-1.5">
                            <span className="text-emerald-700 font-bold mt-0.5">✔</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking Link */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-stone-500 hidden sm:inline">
                      ※空室状況・最新プランは楽天トラベル公式でご確認ください
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-800 to-emerald-950 hover:from-emerald-900 hover:to-stone-950 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
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

        {/* 1泊2日 理想のモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-200">
            <div className="p-2.5 rounded-2xl bg-emerald-50 text-emerald-800">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest">Model Course</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                【1泊2日】遅咲き紅葉と竹林を愛でる修善寺温泉の休日
              </h2>
            </div>
          </div>

          <div className="relative border-l-2 border-emerald-300 ml-4 pl-6 space-y-8 my-6">
            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-emerald-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-emerald-800 tracking-wider">1日目 12:30</span>
                <h3 className="text-base font-bold text-stone-900">修善寺門前で名物「天城生わさび蕎麦」の昼食</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  修禅寺の門前町へ到着。まずは清らかな湧水と手打ち蕎麦が評判の店へ。鮫皮おろしで自らすりおろす天城産の新鮮な生わさびは、辛味の奥に爽やかな甘みがあり、香り高い十割蕎麦と相性抜群です。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-emerald-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-emerald-800 tracking-wider">1日目 13:45</span>
                <h3 className="text-base font-bold text-stone-900">古刹「修禅寺」参拝と境内のもみじ鑑賞</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  弘法大師が開創した名刹・福地山修禅寺へ。手水舎には温かい天然温泉が注がれています。11月下旬から12月上旬にかけては境内の方丈庭園や石畳の参道が見事な紅葉に包まれ、秋の深まりを五感で実感できます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-emerald-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-emerald-800 tracking-wider">1日目 15:30</span>
                <h3 className="text-base font-bold text-stone-900">宿へチェックイン＆柔らかな名湯で癒しのひととき</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  早めのチェックインを済ませ、宿自慢の露天風呂や貸切風呂へ。アルカリ性の肌に優しい湯が散策の疲れを優しく解きほぐし、湯上がりは肌が驚くほど滑らかになります。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-emerald-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-emerald-800 tracking-wider">1日目 17:00</span>
                <h3 className="text-base font-bold text-stone-900">黄昏時の「竹林の小径」と恋の架け橋巡り</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  夕暮れ時にライトアップされる竹林の小径へ。中央の円形ベンチに腰を下ろして見上げる竹林と夜空は息をのむ美しさ。桂川に架かる5つの橋を渡ると恋が実ると伝わる「恋の橋めぐり」を楽しみます。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-emerald-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-emerald-800 tracking-wider">1日目 19:00</span>
                <h3 className="text-base font-bold text-stone-900">伊豆牛ステーキと駿河湾冬魚の贅沢会席</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  夕食は宿の料理人が腕を振るう季節の美味会席。きめ細やかな霜降りの伊豆牛ステーキに天城の生わさびを添えて。駿河湾直送の冬の地魚の造りや地酒「万大醸造」とともに、贅沢な夜を満喫します。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-emerald-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-emerald-800 tracking-wider">2日目 08:30</span>
                <h3 className="text-base font-bold text-stone-900">澄み切った朝の桂川沿いを散策＆足湯「河原湯」</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  朝食後、観光客の少ない清々しい朝の温泉街へ。桂川のほとりにある足湯「河原湯」に足を浸けながら、川のせせらぎと対岸の木立を眺めて心身をリフレッシュします。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-emerald-700 ring-4 ring-emerald-100" />
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-emerald-800 tracking-wider">2日目 10:30</span>
                <h3 className="text-base font-bold text-stone-900">修善寺自然公園「もみじ林」または「虹の郷」の冬景色</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  チェックアウト後は約1,000本のもみじが群生する修善寺自然公園へ。12月上旬まで残る黄金のモミジ絨毯を踏みしめながら、伊豆の遅い秋と初冬のグラデーションを目に焼き付けます。
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
                修善寺温泉の初冬旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-emerald-800 font-extrabold">Q.</span>
                <span>修善寺温泉の紅葉の見頃はいつ頃ですか？12月でも楽しめますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                修善寺温泉および伊豆半島は温暖な気候のため、日本国内で最も紅葉が遅い地域の一つとして知られています。例年11月中旬から色づき始め、見頃のピークは11月下旬から12月上旬頃です。修善寺自然公園のもみじ林や竹林の小径、虹の郷などでは12月上旬まで鮮やかなモミジのグラデーションと朱塗りの橋の美しいコントラストを存分に鑑賞できます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-emerald-800 font-extrabold">Q.</span>
                <span>修善寺温泉の泉質や効能、湯あたりの心配は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                修善寺温泉の泉質はアルカリ性単純温泉（低張性・弱アルカリ性・高温泉）です。無色透明で無臭、肌への刺激が非常に穏やかなため、赤ちゃんからご年配の方まで安心して長湯を楽しめます。湯上がりは肌がすべすべになり保温効果も高いため、初冬の冷え性改善や疲労回復、筋肉痛の緩和に高い効果を発揮します。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-emerald-800 font-extrabold">Q.</span>
                <span>「竹林の小径」や温泉街の散策におすすめの時間帯は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                おすすめは宿泊当日の夕暮れ時（16時半〜17時半）と、翌朝の早朝（7時〜8時半）です。夕暮れ時は竹林の小径や桂川沿いの橋が温かな光でライトアップされ、幻想的な大人の夜散歩が楽しめます。また早朝は観光客がほとんどおらず、澄んだ冷涼な空気の中で竹の葉が擦れ合う爽やかな音と鳥の声だけが響く極上の静寂を体験できます。
              </p>
            </div>

            <div className="bg-stone-50 rounded-2xl p-5 border border-stone-200/70 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-emerald-800 font-extrabold">Q.</span>
                <span>修善寺温泉へのアクセス方法と道路の凍結や積雪の心配は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                電車の場合はJR三島駅から伊豆箱根鉄道駿豆線に乗り換え約35分で修善寺駅へ。そこから路線バスで約8分です。お車の場合は東駿河湾環状線や伊豆縦貫道が直結しており、首都圏から約2時間半〜3時間。伊豆半島は温暖なため11月・12月に修善寺温泉街で積雪することは極めて稀です。ただし天城峠や箱根越えのルートを通る場合、12月下旬は夜間の路面凍結の恐れがあるため念のため冬用タイヤ装着が安心です。
              </p>
            </div>
          </div>
        </section>

        {/* Internal Link Mesh */}
        <section className="bg-stone-100 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest block">EXPLORE MORE WINTER DESTINATIONS</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい！11月・12月の冬特集＆東海・伊豆の名湯ガイド
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link 
              href="/winter-shizuoka-izukogen-granillumi-ito-onsen-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-emerald-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-1">伊豆の冬エンタメ</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition line-clamp-2">
                【伊豆高原】グランイルミ体験型イルミネーションと伊東温泉・金目鯛会席
              </h3>
            </Link>

            <Link 
              href="/winter-izu-kinmedai-shabushabu-luxury-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-emerald-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-1">伊豆の冬美食</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition line-clamp-2">
                【東伊豆・稲取】脂の乗った極上金目鯛しゃぶしゃぶと絶景オーシャンビュー露天
              </h3>
            </Link>

            <Link 
              href="/winter-atami-fireworks-ocean-view-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-emerald-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-1">東海の冬花火</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition line-clamp-2">
                【熱海温泉】冬の澄んだ夜空を彩る熱海海上花火大会と部屋食オーシャンビュー宿
              </h3>
            </Link>

            <Link 
              href="/winter-kanagawa-hakone-fuji-view-onsen-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-emerald-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-1">富士見名湯</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition line-clamp-2">
                【箱根芦ノ湖】冬晴れに輝く富士山絶景と名湯露天風呂・極上リゾート宿
              </h3>
            </Link>

            <Link 
              href="/winter-gifu-gero-onsen-fireworks-hida-beef-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-emerald-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-1">東海の三名泉</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition line-clamp-2">
                【下呂温泉】冬花火ミュージカルと日本三名泉の美肌湯・飛騨牛朴葉味噌焼き
              </h3>
            </Link>

            <Link 
              href="/winter-kyoto-arashiyama-onsen-yudofu-stay"
              className="bg-white p-4 rounded-2xl border border-stone-200/80 hover:border-emerald-700 hover:shadow-md transition group block"
            >
              <span className="text-[10px] font-extrabold text-emerald-800 uppercase block mb-1">関西の小京都</span>
              <h3 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition line-clamp-2">
                【京都嵐山】渡月橋の初冬絶景と嵯峨野竹林散策・名物湯豆腐会席の名宿
              </h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
