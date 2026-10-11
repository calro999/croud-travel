import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints
} from 'lucide-react';

export const metadata: Metadata = {
  title: '別府・鉄輪温泉で過ごす冬の旅（11・12月）！初冬の別府湾絶景露天！名宿5選',
  description: '11月から12月にかけて冷気により街一面の湯けむりが最も美しく立ち昇る日本一の湧出量を誇る大分「別府温泉郷」と湯治情緒漂う「鉄輪（かんなわ）温泉」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '別府温泉 宿泊, 鉄輪温泉 11月 12月, 杉乃井ホテル, 潮騒の宿 晴海, 山荘 神和苑, ホテル白菊, 花べっぷ, 鉄輪 湯けむり展望台, 豊後牛 ステーキ, 関アジ 関サバ 刺身, 地獄蒸し料理',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay/",
  },
  openGraph: {
    title: '別府・鉄輪温泉で過ごす冬の旅（11・12月）！初冬の別府湾絶景露天！名宿5選',
    description: '11月から12月にかけて冷気により街一面の湯けむりが最も美しく立ち昇る日本一の湧出量を誇る大分「別府温泉郷」と湯治情緒漂う「鉄輪（かんなわ）温泉」。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月別府・鉄輪温泉の冬湯けむりと海鮮美食】初冬の別府湾絶景露天・鉄輪湯けむり展望と極上豊後牛＆関アジ関サバ会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "別府・鉄輪温泉の冬湯けむりと海鮮美食で過ごす冬の旅（11・12月）！初冬の別府湾絶景露天・鉄輪湯けむり展望と極上豊後牛＆関アジ関サバ会席の宿5選",
    description: "11月から12月にかけて冷気により街一面の湯けむりが最も美しく立ち昇る日本一の湧出量を誇る大分「別府温泉郷」と湯治情緒漂う「鉄輪（かんなわ）温泉」。海抜ゼロメートルから高原まで広がる雄大な別府湾の初冬の朝焼けを望む絶景露天風呂、伝統の地獄蒸し料理、大分が誇る豊後水道の荒波で育った「関アジ・関サバ」の活造りや「豊後牛（おおいた和牛）」の極上ステーキを堪能する至高の名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "別府温泉と鉄輪（かんなわ）温泉の違いは何ですか？",
    "a": "別府市には「別府八湯（別府、鉄輪、観海寺、明礬、柴石、亀川、浜脇、堀田）。」と呼ばれる8つの代表的な温泉郷が存在します。その中でも「鉄輪温泉」は、鎌倉時代に一遍上人が開いたとされる最も湯治情緒の濃い温泉街です。街のあちこちから勢いよく噴き出す白い湯煙、石畳の小路、伝統の「地獄蒸し風呂」や無料の足湯・足蒸しなど、昔ながらの温泉文化が色濃く残っています。一方、観海寺や海沿いの別府温泉は、別府湾を一望する大型パノラマリゾートホテルやラグジュアリーな隠れ宿が多く、眺望やエンターテインメント性に優れています。"
  },
  {
    "q": "11月・12月の別府の気候や服装は？寒さは厳しいですか？",
    "a": "別府市は瀬戸内海気候に属するため、比較的温暖ですが、11月下旬から12月にかけては海からの北風や鶴見岳からの吹き下ろしにより体感温度がぐっと下がります。11月の平均気温は日中15℃前後、朝晩は8℃前後。12月になると日中11℃前後、朝晩は3℃〜5℃程度まで冷え込みます。冬の冷たい空気があるからこそ、街中に立ち上る湯煙が一層白く濃く見え、絶景の湯煙夜景を楽しむことができます。観光の際は風を通さない厚手のコートやジャケット、マフラーをご用意ください。"
  },
  {
    "q": "『鉄輪湯けむり展望台』から見る夜景の見どころは？",
    "a": "鉄輪温泉街を見下ろす「湯けむり展望台」は、国の重要文化的景観に選定され、日本夜景遺産にも登録されている別府屈指の絶景スポットです。特に11月から12月は外気温が低いため、家庭や旅館の温泉排気口から立ち昇る湯煙の量が年間で最もダイナミックになります。週末の夜には湯煙が色鮮やかにライトアップされ、市街地の夜景や別府湾の灯りと織りなす幻想的な風景は息をのむ美しさです。"
  },
  {
    "q": "別府名物『地獄蒸し』とはどのような料理ですか？",
    "a": "「地獄蒸し」とは、約100度の天然温泉の噴気（スチーム）を利用して、食材を一気に蒸し上げる鉄輪温泉伝統の調理法です。温泉のミネラル分と微量な塩分が食材に移ることで、野菜は驚くほど甘く、肉や魚介は余分な脂が落ちてジューシーに仕上がります。「地獄蒸し工房 鉄輪」などでは観光客が自分で食材を持ち込んで蒸し体験を楽しむこともでき、ヘルシーで旨味の詰まった冬のごちそうとして大人気です。"
  },
  {
    "q": "冬の別府で食べるべき高級魚『関アジ・関サバ』の特徴と旬は？",
    "a": "「関アジ」「関サバ」は、大分県の佐賀関沖（豊後水道）の潮流が非常に激しい「速吸の瀬戸（はやすひのせと）」で一本釣りされる最高級ブランド魚です。激流で育つため身が引き締まり、回遊せずプランクトンを豊富に食べるため脂の乗りが抜群。特に11月から12月は冬の寒さで脂が最高潮に達するゴールデンシーズンです。新鮮な身は透き通るような弾力があり、一般的なアジやサバとは一線を画す極上の刺身を味わえます。"
  }
];

export default function BeppuOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay#article",
        "headline": "【11・12月別府・鉄輪温泉の冬湯けむりと海鮮美食】初冬の別府湾絶景露天・鉄輪湯けむり展望と極上豊後牛＆関アジ関サバ会席の宿5選",
        "description": "11月から12月にかけて冷気により街一面の湯けむりが最も美しく立ち昇る日本一の湧出量を誇る大分「別府温泉郷」と湯治情緒漂う「鉄輪（かんなわ）温泉」。海抜ゼロメートルから高原まで広がる雄大な別府湾の初冬の朝焼けを望む絶景露天風呂、伝統の地獄蒸し料理、大分が誇る豊後水道の荒波で育った「関アジ・関サバ」の活造りや「豊後牛（おおいた和牛）」の極上ステーキを堪能する至高の名宿5選を徹底解説。",
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
          "@id": "https://croud-travel.pages.dev/winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "別府温泉と鉄輪（かんなわ）温泉の違いは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "別府市には「別府八湯（別府、鉄輪、観海寺、明礬、柴石、亀川、浜脇、堀田）。」と呼ばれる8つの代表的な温泉郷が存在します。その中でも「鉄輪温泉」は、鎌倉時代に一遍上人が開いたとされる最も湯治情緒の濃い温泉街です。街のあちこちから勢いよく噴き出す白い湯煙、石畳の小路、伝統の「地獄蒸し風呂」や無料の足湯・足蒸しなど、昔ながらの温泉文化が色濃く残っています。一方、観海寺や海沿いの別府温泉は、別府湾を一望する大型パノラマリゾートホテルやラグジュアリーな隠れ宿が多く、眺望やエンターテインメント性に優れています。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月の別府の気候や服装は？寒さは厳しいですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "別府市は瀬戸内海気候に属するため、比較的温暖ですが、11月下旬から12月にかけては海からの北風や鶴見岳からの吹き下ろしにより体感温度がぐっと下がります。11月の平均気温は日中15℃前後、朝晩は8℃前後。12月になると日中11℃前後、朝晩は3℃〜5℃程度まで冷え込みます。冬の冷たい空気があるからこそ、街中に立ち上る湯煙が一層白く濃く見え、絶景の湯煙夜景を楽しむことができます。観光の際は風を通さない厚手のコートやジャケット、マフラーをご用意ください。"
            }
          },
          {
            "@type": "Question",
            "name": "『鉄輪湯けむり展望台』から見る夜景の見どころは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "鉄輪温泉街を見下ろす「湯けむり展望台」は、国の重要文化的景観に選定され、日本夜景遺産にも登録されている別府屈指の絶景スポットです。特に11月から12月は外気温が低いため、家庭や旅館の温泉排気口から立ち昇る湯煙の量が年間で最もダイナミックになります。週末の夜には湯煙が色鮮やかにライトアップされ、市街地の夜景や別府湾の灯りと織りなす幻想的な風景は息をのむ美しさです。"
            }
          },
          {
            "@type": "Question",
            "name": "別府名物『地獄蒸し』とはどのような料理ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「地獄蒸し」とは、約100度の天然温泉の噴気（スチーム）を利用して、食材を一気に蒸し上げる鉄輪温泉伝統の調理法です。温泉のミネラル分と微量な塩分が食材に移ることで、野菜は驚くほど甘く、肉や魚介は余分な脂が落ちてジューシーに仕上がります。「地獄蒸し工房 鉄輪」などでは観光客が自分で食材を持ち込んで蒸し体験を楽しむこともでき、ヘルシーで旨味の詰まった冬のごちそうとして大人気です。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の別府で食べるべき高級魚『関アジ・関サバ』の特徴と旬は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「関アジ」「関サバ」は、大分県の佐賀関沖（豊後水道）の潮流が非常に激しい「速吸の瀬戸（はやすひのせと）」で一本釣りされる最高級ブランド魚です。激流で育つため身が引き締まり、回遊せずプランクトンを豊富に食べるため脂の乗りが抜群。特に11月から12月は冬の寒さで脂が最高潮に達するゴールデンシーズンです。新鮮な身は透き通るような弾力があり、一般的なアジやサバとは一線を画す極上の刺身を味わえます。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "別府温泉　杉乃井ホテル（オリックスホテルズ＆リゾーツ）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5547%2F5547.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "ＡＭＡＮＥ　ＲＥＳＯＲＴ　ＳＥＩＫＡＩ（潮騒の宿　晴海）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78242%2F78242.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "別府鉄輪温泉　山荘　神和苑",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158425%2F158425.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "別府温泉　ホテル白菊",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12660%2F12660.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "別府温泉　竹と椿のお宿　花べっぷ",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30691%2F30691.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "別府温泉　杉乃井ホテル（オリックスホテルズ＆リゾーツ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5547/5547.jpg",
              rating: 4.63,
              reviews: 13024,
              price: "¥17,700〜",
              access: "大分自動車道別府ＩＣより観海寺方面へ車で５分。ＪＲ別府駅より車で１０分。JR別府駅とホテル間を結ぶ無料シャトルバス有り。",
              special: "別府の夜空に光る星のように、心ときめく時間を過ごす新棟「星館」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5547%2F5547.html",
              story: "別府湾を見下ろす高台・観海寺温泉に位置し、圧倒的なスケールと最新のラグジュアリー設備を誇る「別府温泉 杉乃井ホテル」。特にフラッグシップ棟「宙館（そらかん）」の最上階に位置する海抜約250メートルの大展望露天風呂「宙湯（そらゆ）」からは、初冬の澄み渡る別府湾の水面と、湯煙が立ち上る市街地の夜景を一望する圧倒的なパノラマが広がります。棚田状に広がる名物大展望露天風呂「棚湯」や、五感を刺激するプロジェクションマッピング噴水ショーなど、初冬の家族旅行やカップルステイに極上のエンターテインメントを提供します。",
              roomTip: "「宙館」または「虹館」のデラックスベイビュー客室。大きなピクチャーウィンドウから朝焼けに染まる別府湾と初冬のグラデーションを静かに一望できます。",
              gourmetTip: "「TERRACE & DINING SORA。」での豪華プレミアムビュッフェ。シェフが目の前で焼き上げる大分県産豊後牛のグリルや、別府湾直送の新鮮な海の幸、地獄蒸しコーナーなど、圧巻のクオリティ。",
              highlights: [
                "海抜250mのフラッグシップ「宙館」最上階展望露天風呂「宙湯」＆別府湾絶景パノラマ",
                "棚田状の圧巻大展望露天「棚湯」＆大分県産豊後牛や海の幸を味わう豪華ビュッフェ",
                "初冬の澄んだ夜空に広がる別府市街の夜景と光と音のエンターテインメント噴水ショー"
              ]
            },
            {
              id: 2,
              name: "ＡＭＡＮＥ　ＲＥＳＯＲＴ　ＳＥＩＫＡＩ（潮騒の宿　晴海）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/78242/78242.jpg",
              rating: 4.62,
              reviews: 689,
              price: "¥22,264〜",
              access: "別府大学駅より徒歩１０分",
              special: "青い海、青い空。美味しいお食事、多彩なお部屋。あなただけの旅スタイル、きっと、見つかる。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78242%2F78242.html",
              story: "別府湾の渚に抱かれ、客室のテラスの真下に波が打ち寄せる至高のシーサイドリゾート「AMANE RESORT SEIKAI（潮騒の宿 晴海）。」。全室が源泉掛け流しの露天風呂を備えたオーシャンビュー仕様。海抜ゼロメートルの潮風を肌で感じる大浴場「潮騒の湯」では、初冬の水平線から昇る神々しい朝日を湯船に浸かりながら拝むことができます。木の温もりと現代デザインが調和した洗練された館内には、モダンなカフェやバーも併設され、静かな波音とともに優雅な大人の休息を約束してくれます。",
              roomTip: "海の棟または空の棟の露天風呂付き客室。海にせり出すようなバルコニーで、初冬の澄んだ夜空の星と対岸の大分市街の灯りを独占できます。",
              gourmetTip: "館内の本格海鮮料理「えいたろう」または創作フレンチ。豊後水道名物の活関アジ・関サバのお造り、豊後牛のフィレステーキなど、極上の冬の味覚を心ゆくまで堪能。",
              highlights: [
                "全室海一望の客室露天風呂付き＆海抜0mで波音と昇る朝日に包まれる潮騒の湯",
                "豊後水道直送の活関アジ・関サバ造りと豊後牛フィレ肉を味わう本格会席",
                "渚に建つ唯一無二のロケーション＆全室テラス付きの贅沢なオーシャンビュー"
              ]
            },
            {
              id: 3,
              name: "別府鉄輪温泉　山荘　神和苑",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/158425/158425.jpg",
              rating: 4.53,
              reviews: 743,
              price: "¥15,950〜",
              access: "JR別府駅から車・20分／鉄輪口バス停・徒歩５分／別府IC・車で５分　※送迎サービス有（定期便／条件・注意事項 要確認）",
              special: "「能楽堂」や「茅葺の茶室」を設け、庭園には歴史的な有形指定文化財の史跡や石塔も有する温泉宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158425%2F158425.html",
              story: "鉄輪温泉の歴史ある湯煙地帯に広がる、約二万坪もの雄大な日本庭園に抱かれた名宿「別府鉄輪温泉 山荘 神和苑（かんなわえん）。」。敷地内には能舞台や茶室、歴史ある石塔が点在し、凛とした日本の伝統美が息づいています。地下から自噴する2本の自家源泉は加水・加温一切なしの100%源泉掛け流し。青みを帯びた神秘的なメタケイ酸豊富な美肌湯が、初冬の肌をしっとりと潤します。日本の古き良き雅と現代のラグジュアリーが完璧に調和した、別府最高峰の隠れ宿です。",
              roomTip: "離れの露天風呂付き客室または本館和洋室。手入れの行き届いた日本庭園の冬景色と、湯煙立ち上る鉄輪の情景を静かに楽しめます。",
              gourmetTip: "庭園を望む鉄板焼きレストランでの極上ディナー。A5ランクのおおいた和牛サーロイン、近海で獲れた伊勢海老や鮑を、熟練の焼き手が目の前で華麗に焼き上げます。",
              highlights: [
                "約二万坪の壮大な日本庭園と能舞台＆2本の自家源泉掛け流しを引く最高峰の離れ",
                "A5ランクおおいた和牛サーロインと活伊勢海老のプレミアム鉄板焼き",
                "青みを帯びた神秘的なメタケイ酸豊富な自家源泉掛け流し露天風呂"
              ]
            },
            {
              id: 4,
              name: "別府温泉　ホテル白菊",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/12660/12660.jpg",
              rating: 4.54,
              reviews: 1472,
              price: "¥17,050〜",
              access: "JR日豊本線別府駅西口より徒歩7分／別府ICより車で13分／大分空港より車で50分／博多駅より2時間10分（別府駅下車）",
              special: "朝食の和洋ビュッフェは、出来たて焼きたてをはじめ60種類が食べ放題！大分の贅を味わう料理の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F12660%2F12660.html",
              story: "別府駅より徒歩8分、楠の巨木が鬱蒼と茂る美しい日本庭園に囲まれた本格温泉ホテル「別府温泉 ホテル白菊」。名物の大浴場「楠湯殿（くすゆどの）」は樹齢数百年のクスノキをふんだんに使った総ヒノキ造りで、豊かな木の香りと天然温泉の湯けむりが疲れた心身を深く包み込みます。「プロが選ぶ日本のホテル・旅館100選」に選ばれ続ける料理へのこだわりは別府随一。スタッフの温かな笑顔ときめ細やかな心配りが、初冬の旅路を心地よく彩ります。",
              roomTip: "温泉情緒あふれる和洋室「菊華万葉」または高層階の和室。別府の街並みと高崎山の雄大な稜線を望み、ゆったりと足を伸ばして寛げます。",
              gourmetTip: "料理長厳選の旬会席。豊後牛のすき焼きやしゃぶしゃぶ、関アジの姿造り、初冬の甘みが増した大分県産カボス平目など、大分の山海の恵みが贅沢に並びます。",
              highlights: [
                "総ヒノキ造りの名物大浴場「楠湯殿」＆「料理100選」に選ばれ続ける極上会席",
                "別府駅徒歩8分の好立地＆スタッフの温かなおもてなしと四季折々の庭園美",
                "豊後牛すき焼き・カボス平目など大分の旬の味覚を散りばめた伝統会席"
              ]
            },
            {
              id: 5,
              name: "別府温泉　竹と椿のお宿　花べっぷ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/30691/30691.jpg",
              rating: 4.49,
              reviews: 1237,
              price: "¥16,632〜",
              access: "ＪＲ別府駅より徒歩６分／高速道路別府ＩＣより５．３ｋｍ",
              special: "リニューアルオープン。オールインクルーシブラウンジを備えた「竹籠リトリート空間」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30691%2F30691.html",
              story: "「女性に優しい温泉宿」をコンセプトに、別府の伝統工芸である「竹細工」と雅な「椿」をモチーフにデザインされた和モダン旅館「別府温泉 竹と椿のお宿 花べっぷ」。館内全館が畳敷きとなっており、スリッパを脱いで素足で心地よく歩くことができます。大浴場には超微細気泡で肌の奥まで汚れを落とし潤いを与える「マイクロバブルバス」や、天然温泉の蒸気を活かしたスチームサウナを完備。体に優しい料理と心温まるおもてなしが評判を呼んでいます。",
              roomTip: "モダンな和洋室または竹細工のインテリアが映えるツインルーム。清潔感あふれる空間に初冬の優しい日差しが差し込み、穏やかな時間を約束します。",
              gourmetTip: "目にも鮮やかな創作和食会席。豊後牛の陶板焼きをはじめ、大分特産の椎茸や旬の野菜を使ったヘルシーで出汁の効いた優しい料理がテーブルを華やかに彩ります。",
              highlights: [
                "全館畳敷きの和モダン空間＆超微細マイクロバブル美肌風呂と豊後牛会席",
                "別府伝統の竹細工に囲まれた寛ぎの空間＆女性に嬉しい天然スチームサウナ",
                "大分特産の旬素材とヘルシーな出汁使いが光る色彩豊かな月替わり創作和食"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-teal-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-slate-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="初冬の別府湾から昇る朝日と鉄輪温泉街から立ち昇る無数の湯けむりパノラマ"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-950/90 text-teal-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-teal-800/50">
            <Waves className="w-4 h-4 text-teal-300" />
            <span>11月・12月限定 日本一の湧出量 鉄輪湯けむり展望と極上豊後牛＆関アジ関サバ</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">別府・鉄輪温泉の冬湯けむりと海鮮美食で過ごす冬の旅（11・12月）！<br className="hidden sm:inline" /> 初冬の別府湾絶景露天・鉄輪湯けむり展望と極上豊後牛＆関アジ関サバ会席の宿5選</h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            毎分十万リットルを誇るおんせん県おおいたの至宝。冷気により白く輝く鉄輪の湯煙、海抜ゼロメートルから高原まで広がる別府湾の初冬絶景露天、旬を迎えた関アジ関サバと豊後牛ステーキを堪能する極上冬旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-teal-400" /> 大分県別府市（JR別府駅・鉄輪温泉エリア）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月別府・鉄輪温泉】初冬の別府湾絶景露天！名宿5選","item":"https://croud-travel.pages.dev/winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Beppu Kannawa Onsen Winter Splendor</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                源泉数・湧出量ともに日本一。初冬の冷気に映える壮大な湯けむりパノラマと豊後美味
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            大分県の中東部に位置し、世界中から湯治客が集まる「別府温泉郷」。源泉総数は2,800箇所以上、湧出量は毎分約10万リットルと、いずれも日本国内で群を抜く第1位を誇ります。地球の息吹をそのまま感じさせる地獄地帯から、海抜ゼロメートルの海岸、そして鶴見岳の裾野に広がる標高数百メートルの高台まで、多彩な表情を持つ8つの温泉地「別府八湯」が広がっています。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            別府が一年で最もドラマチックな美しさに包まれるのが、11月から12月にかけての初冬です。冬の冷たい外気が街を包み込むことで、街中のいたるところから立ち昇る白い湯煙が一気に濃く太くなり、高台の「湯けむり展望台」から眺める風景は、国の重要文化的景観や日本夜景遺産にも選ばれる奇跡の絶景となります。夜には湯煙が優美にライトアップされ、別府湾の夜景と重なり合って神秘的な世界を紡ぎ出します。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            初冬の別府旅をさらに贅沢にするのが、豊後水道が育む海の幸と高原の恵み。寒さによって脂の乗りが最高潮に達するブランド魚「関アジ」「関サバ」の引き締まった刺身、大分県が誇る極上黒毛和牛「おおいた和牛（豊後牛）」のとろけるステーキ、温泉の蒸気で一気に蒸し上げる伝統の「地獄蒸し」料理など、五感を満たす美食の旅を堪能できます。
          </p>
          
          <div className="bg-teal-50/70 rounded-2xl p-5 border border-teal-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-900 tracking-wider">初冬の別府・鉄輪 旅のチェックポイント</span>
              <p className="text-xs sm:text-sm text-slate-700">
                海沿いと山沿い（高台）で気温差があります。夜の湯けむり展望台散策や海辺の露天風呂では風を通さない防寒ジャケットをご着用ください。
              </p>
            </div>
            <div className="shrink-0 bg-teal-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
              日本一の湧出量
            </div>
          </div>
        </section>

        {/* Section 2: Hot Springs & Steam Cooking */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Beppu Springs & Jigokumushi</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                地球のエネルギーを五感で味わう「別府八湯」と「地獄蒸し」の魅力
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            別府には単純温泉、炭酸水素塩泉、塩化物泉、硫黄泉など多種多様な泉質が揃っています。さらに鉄輪温泉に古くから伝わる「地獄蒸し」は、約100度の天然噴気を利用して食材の旨味を凝縮させる究極のエコ調理法です。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">観海寺・高台リゾート</span>
                <span className="text-xs bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">海抜約250m</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                別府湾を一望するパノラマビューが自慢。海抜250mのインフィニティ露天風呂など、近代的な大型リゾートで圧倒的な解放感を満喫できます。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">鉄輪（かんなわ）温泉</span>
                <span className="text-xs bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">湯治の聖地</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                石畳の路地に白い湯けむりが噴き出す昔ながらの温泉街。メタケイ酸豊富な美肌湯や名物の地獄蒸し料理など、濃厚な温泉情緒に浸れます。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">渚のシーサイド別府</span>
                <span className="text-xs bg-teal-100 text-teal-800 font-bold px-2 py-0.5 rounded">海抜ゼロメートル</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                波打ち際に佇み、客室露天風呂から初冬の朝日を独占。心地よい波音を聞きながら潮風に吹かれる贅沢なオーシャンフロントステイが叶います。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2.5: Three Reasons to Visit in Nov & Dec */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Seasonal Appeal</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の別府・鉄輪温泉が旅人を魅了する3つの理由
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-teal-900 text-white flex items-center justify-center text-xs font-bold">1</span>
                <h3 className="font-bold text-slate-900 text-sm">冷気で湯けむりが最大化する日本屈指の夜景</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                外気温が下がる初冬は、鉄輪温泉街から立ち昇る白い湯煙の迫力が年間最大に達します。湯けむり展望台からのライトアップ夜景は息をのむ美しさです。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-teal-900 text-white flex items-center justify-center text-xs font-bold">2</span>
                <h3 className="font-bold text-slate-900 text-sm">豊後水道の冬魚「関アジ・関サバ」の最盛期</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                冬の荒波に揉まれる佐賀関沖で一本釣りされる関サバ・関アジは、11〜12月に極上の脂を蓄えます。透明感ある身の締まりと濃厚な旨味は別格です。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full bg-teal-900 text-white flex items-center justify-center text-xs font-bold">3</span>
                <h3 className="font-bold text-slate-900 text-sm">澄み切った朝焼けの別府湾絶景露天風呂</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                冬の早朝、大気が乾燥して澄み渡る別府湾。水平線から昇る深紅の朝日を温泉露天風呂から眺める時間は、心洗われる感動の瞬間です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: 5 Recommended Hotels */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Selected Luxury Inns</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              【11・12月】別府・鉄輪温泉の至福を約束する厳選名宿5選
            </h2>
            <p className="text-sm text-slate-600">
              楽天トラベルの最新APIデータに基づき、源泉掛け流しの湯質、別府湾や湯煙の絶景、大分県産豊後牛や関アジ関サバ会席、宿泊者レビュー評価で選び抜いた5軒。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow duration-300 flex flex-col"
              >
                <div className="relative md:w-2/5 h-64 md:h-auto min-h-[260px] bg-slate-100 shrink-0">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    第{hotel.id}選
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold drop-shadow">
                    <span className="flex items-center gap-1 bg-amber-500/90 text-slate-950 px-2.5 py-1 rounded-md">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      {hotel.rating} ({hotel.reviews}件)
                    </span>
                    <span className="bg-slate-900/80 px-2.5 py-1 rounded-md text-amber-200">
                      目安 {hotel.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 w-full flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-teal-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="space-y-2 pt-1 border-t border-slate-100 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-teal-900 bg-teal-50 px-2 py-0.5 rounded shrink-0">客室の魅力</span>
                        <span className="text-slate-600">{hotel.roomTip}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded shrink-0">冬の極上食</span>
                        <span className="text-slate-600">{hotel.gourmetTip}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      {hotel.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                      楽天トラベル公認リンク・最新宿泊プラン
                    </span>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-900 hover:bg-teal-800 text-white text-xs sm:text-sm font-bold shadow transition group w-full sm:w-auto justify-center"
                    >
                      <span>空室・宿泊プランを確認</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Bungo Winter Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                豊後水道の荒波が育む高級魚と大分県産ブランド黒毛和牛の贅
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            大分県は全国有数の美食の宝庫。太平洋と瀬戸内海の海水が激しくぶつかり合う豊後水道で育った「関アジ」「関サバ」は、冬になると身に極上の脂を蓄え、刺身でいただくとプリプリとした歯ごたえと豊かな甘みが口いっぱいに広がります。また、百年の歴史を誇る「豊後牛（おおいた和牛）」は、オレイン酸を豊富に含み、とろけるような口溶けと胃もたれしない上質な旨味が特徴です。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-1.5">
              <h4 className="font-bold text-teal-900 text-sm">関アジ・関サバ＆カボス平目の活造り</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                冬の引き締まった身と上質な脂が絶品。大分特産カボスをキュッと絞れば、魚本来の旨味がさらに引き立ちます。
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 space-y-1.5">
              <h4 className="font-bold text-teal-900 text-sm">おおいた和牛（豊後牛）のステーキ＆しゃぶしゃぶ</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                全国和牛能力共進会でも数々の最高賞に輝く名肉。鉄板焼きやしゃぶしゃぶで、肉本来の芳醇な香りを堪能。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の別府・鉄輪温泉を満喫する1泊2日王道モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-20 text-xs font-bold bg-teal-100 text-teal-900 px-3 py-1.5 rounded-lg text-center shrink-0">
                1日目 13:00
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">別府到着・別府地獄めぐり（海地獄・血の池地獄）</strong>
                別府駅到着後、路線バスまたはレンタカーで鉄輪へ。コバルトブルーに輝く「海地獄」の湯煙や「血の池地獄」を見学し、温泉蒸気たまごを味わう。
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-20 text-xs font-bold bg-teal-100 text-teal-900 px-3 py-1.5 rounded-lg text-center shrink-0">
                1日目 15:30
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">名宿チェックイン・別府湾パノラマ露天風呂</strong>
                宿にチェックインし、別府湾や市街地を見下ろす露天風呂へ。初冬の清々しい風を受けながら、豊富な源泉掛け流しの湯を贅沢に独占。
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-20 text-xs font-bold bg-teal-100 text-teal-900 px-3 py-1.5 rounded-lg text-center shrink-0">
                1日目 18:00
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">極上豊後牛＆関アジ関サバ会席・夜の湯けむり展望台</strong>
                夕食に豊後牛ステーキと関アジの活造りを堪能。夕食後は車で「湯けむり展望台」へ向かい、ライトアップされた鉄輪の湯煙と街の夜景の共演に息をのむ。
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-20 text-xs font-bold bg-teal-100 text-teal-900 px-3 py-1.5 rounded-lg text-center shrink-0">
                2日目 09:30
              </div>
              <div className="text-xs sm:text-sm text-slate-700">
                <strong className="text-slate-900 block mb-0.5">鉄輪温泉街のレトロ散策＆地獄蒸し体験工房</strong>
                チェックアウト後、石畳が美しい鉄輪の路地を散策。無料の「足蒸し」を体験し、「地獄蒸し工房 鉄輪」で蒸したての温かい野菜や海鮮プリンを頬張る。
              </div>
            </div>
          </div>
        </section>

        {/* Section 5.5: Climate, Clothing & Transportation */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Travel Preparation</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の気候・おすすめの服装・アクセス＆エリア移動のコツ
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-teal-700" />
                <span>気温と海風・高台の寒暖差対策</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                別府市街は温暖ですが、11月下旬〜12月は海からの北風や鶴見岳からの吹き下ろしにより、体感温度がぐっと下がります。特に海辺の散策や高台の露天風呂では風を通さないマウンテンパーカーやウールコート、ストールがあると安心です。12月朝晩は5℃前後まで冷え込むため、防寒インナーのご着用をおすすめします。
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>空港特急バス・JR・レンタカー移動のポイント</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                大分空港から別府駅・鉄輪温泉へは空港特急バス「エアライナー」で約45〜50分と極めて快適。JR博多駅からは特急「ソニック」で約2時間直通です。別府八湯の湯巡りや湯けむり展望台、アフリカンサファリ方面への観光はレンタカーが便利ですが、平野部では積雪の心配はほとんどありません（やまなみハイウェイや阿蘇越えをする場合はスタッドレス推奨）。
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
                よくある質問（FAQ）と初冬の別府・鉄輪温泉旅行アドバイス
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
            <span className="text-xs font-bold text-teal-300 uppercase tracking-widest">Related Kyushu Winter Hotspring Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい九州の冬名湯＆極上グルメ特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月ならではの湯けむり、夜景、旬の黒毛和牛や海鮮を味わい尽くす全国の名宿ガイドを多数公開中。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-kumamoto-kurokawa-onsen-yuakari-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">熊本・黒川温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">黒川温泉 竹灯篭イルミネーション「湯あかり」と入湯手形の宿</h3>
            </Link>
            <Link 
              href="/winter-nagasaki-unzen-onsen-jigoku-mist-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">長崎・雲仙温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">雲仙温泉 普賢岳初冬霧氷と雲仙地獄湯煙・極上雲仙あかね牛の宿</h3>
            </Link>
            <Link 
              href="/winter-saga-takeo-onsen-romon-saga-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">佐賀・武雄温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">武雄温泉 辰野金吾設計の楼門と美肌名湯・佐賀牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-saga-ureshino-onsen-bihada-yudofu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">佐賀・嬉野温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">嬉野温泉 日本三大美肌の湯と名物温泉湯豆腐・とろける美食宿</h3>
            </Link>
            <Link 
              href="/winter-kumamoto-amakusa-shimoda-onsen-sunset-seafood-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">熊本・天草下田温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">天草下田温泉 東シナ海初冬サンセット露天と伊勢海老・車海老の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-oita-beppu-kannawa-onsen-yukemuri-bungo-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
