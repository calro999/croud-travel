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
  title: "【11・12月那須温泉郷の初冬高原美と名湯】茶臼岳雪化粧と開湯千三百年鹿の湯・最高峰那須与一牛＆高原温泉会席の宿5選",
  description: "舒明天皇の御代、白鹿の傷を癒やした伝説から千三百年。那須連山茶臼岳の山懐に湧く栃木県最古の名湯「那須温泉郷」。11月中旬の冠雪から12月の白銀パノラマへと移ろう初冬のロイヤルリゾート。名湯「鹿の湯」源泉を引く白濁露天と、最高峰ブランド「那須与一牛」を味わう名宿ガイド。",
  keywords: '那須温泉 宿泊 11月 12月, 那須温泉 鹿の湯 露天風呂, 那須与一牛 とちぎ和牛, 那須温泉 山楽, ホテルエピナール那須, 星野リゾート リゾナーレ那須, 休暇村 那須, 栃木 冬 温泉',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-tochigi-nasu-onsen-shikanoyu-snow-stay/",
  },
  openGraph: {
    title: "【11・12月那須温泉郷の初冬高原美と名湯】茶臼岳雪化粧と開湯千三百年鹿の湯・最高峰那須与一牛＆高原温泉会席の宿5選",
    description: "舒明天皇の御代、白鹿の傷を癒やした伝説から千三百年。那須連山茶臼岳の山懐に湧く栃木県最古の名湯「那須温泉郷」。11月中旬の冠雪から12月の白銀パノラマへと移ろう初冬のロイヤルリゾート。名湯「鹿の湯」源泉を引く白濁露天と、最高峰ブランド「那須与一牛」を味わう名宿ガイド。",
    url: 'https://croud-travel.com/winter-tochigi-nasu-onsen-shikanoyu-snow-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月那須温泉郷の初冬高原美と名湯】茶臼岳雪化粧と開湯千三百年鹿の湯・最高峰那須与一牛＆高原温泉会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月那須温泉郷の初冬高原美と名湯】茶臼岳雪化粧と開湯千三百年鹿の湯・最高峰那須与一牛＆高原温泉会席の宿5選",
    description: "舒明天皇の御代、白鹿の傷を癒やした伝説から千三百年。那須連山茶臼岳の山懐に湧く栃木県最古の名湯「那須温泉郷」。11月中旬の冠雪から12月の白銀パノラマへと移ろう初冬のロイヤルリゾート。名湯「鹿の湯」源泉を引く白濁露天と、最高峰ブランド「那須与一牛」を味わう名宿ガイド。",
  }
};

const faqList = [
  {
    "q": "那須温泉の11月・12月の気候や降雪状況は？ノーマルタイヤで行けますか？",
    "a": "那須温泉郷は標高約600m〜1,200mに位置するため、平野部（宇都宮や東京）よりも気温が5℃〜10℃低くなります。11月中旬からは茶臼岳山頂が冠雪し、朝晩の冷え込みが厳しくなります。11月下旬から12月にかけては、標高の高い那須湯本や大丸温泉周辺では降雪・路面凍結が発生します。11月下旬以降にお車で訪れる場合は、【スタッドレスタイヤの装着が必須】です。ノーマルタイヤでの冬期山道走行は大変危険ですのでお控えください。"
  },
  {
    "q": "歴史ある元湯『鹿の湯（しかのゆ）』の特徴と入り方は？",
    "a": "『鹿の湯』は舒明天皇2年（630年）開湯、約1380年の歴史を誇る栃木県最古の共同浴場です。木造の風情ある湯屋には、41度から48度まで温度別に区切られた6つの浴槽（女湯は5つ）が並びます。泉質は強い硫黄臭と乳白色のにごり湯が特徴の酸性含硫黄泉。入浴前には柄杓で頭から湯をかぶる『かぶり湯』を数十回行い、徐々に身体を慣らしてから短時間の入浴を繰り返すのが伝統の湯治作法です。"
  },
  {
    "q": "那須の最高峰ブランド牛『那須与一牛』とはどんなお肉？",
    "a": "那須与一牛（なすのよいちぎゅう）は、源平合戦の扇の的で名高い武将・那須与一にちなんで命名された那須地域指定牧場の最高級黒毛和牛です。肉質等級4等級以上のみが認定され、きめ細かなサシ（霜降り）と、とろけるような甘み、深い赤身のコクが特徴です。ステーキやすき焼きで火を通すと、芳醇な和牛の香りが立ち上り、噛むごとに上質な脂の旨味が広がります。"
  },
  {
    "q": "東京方面からのアクセス方法は？新幹線と高速道路の所要時間は？",
    "a": "東京駅からは東北新幹線「なすの」または「やまびこ」で「那須塩原駅」まで約70分と抜群の近さです。那須塩原駅西口からは主要旅館の無料送迎バスや路線バス（関東自動車・東野交通）で約30〜45分で温泉街に到着します。お車の場合は、東北自動車道・川口JCTより那須ICまで約100分、インターを降りて那須街道を直進して約15〜20分とドライブにも最適な好立地です。"
  }
];

export default function NasuWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-tochigi-nasu-onsen-shikanoyu-snow-stay#article",
        "headline": "【11・12月那須温泉郷の初冬高原美と名湯】茶臼岳雪化粧と開湯千三百年鹿の湯・最高峰那須与一牛＆高原温泉会席の宿5選",
        "description": "舒明天皇の御代、白鹿の傷を癒やした伝説から千三百年。那須連山茶臼岳の山懐に湧く栃木県最古の名湯「那須温泉郷」。11月中旬の冠雪から12月の白銀パノラマへと移ろう初冬のロイヤルリゾート。名湯「鹿の湯」源泉を引く白濁露天と、最高峰ブランド「那須与一牛」を味わう名宿ガイド。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
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
          "@id": "https://croud-travel.com/winter-tochigi-nasu-onsen-shikanoyu-snow-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-tochigi-nasu-onsen-shikanoyu-snow-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "那須温泉の11月・12月の気候や降雪状況は？ノーマルタイヤで行けますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "那須温泉郷は標高約600m〜1,200mに位置するため、平野部（宇都宮や東京）よりも気温が5℃〜10℃低くなります。11月中旬からは茶臼岳山頂が冠雪し、朝晩の冷え込みが厳しくなります。11月下旬から12月にかけては、標高の高い那須湯本や大丸温泉周辺では降雪・路面凍結が発生します。11月下旬以降にお車で訪れる場合は、【スタッドレスタイヤの装着が必須】です。ノーマルタイヤでの冬期山道走行は大変危険ですのでお控えください。"
            }
          },
          {
            "@type": "Question",
            "name": "歴史ある元湯『鹿の湯（しかのゆ）』の特徴と入り方は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "『鹿の湯』は舒明天皇2年（630年）開湯、約1380年の歴史を誇る栃木県最古の共同浴場です。木造の風情ある湯屋には、41度から48度まで温度別に区切られた6つの浴槽（女湯は5つ）が並びます。泉質は強い硫黄臭と乳白色のにごり湯が特徴の酸性含硫黄泉。入浴前には柄杓で頭から湯をかぶる『かぶり湯』を数十回行い、徐々に身体を慣らしてから短時間の入浴を繰り返すのが伝統の湯治作法です。"
            }
          },
          {
            "@type": "Question",
            "name": "那須の最高峰ブランド牛『那須与一牛』とはどんなお肉？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "那須与一牛（なすのよいちぎゅう）は、源平合戦の扇の的で名高い武将・那須与一にちなんで命名された那須地域指定牧場の最高級黒毛和牛です。肉質等級4等級以上のみが認定され、きめ細かなサシ（霜降り）と、とろけるような甘み、深い赤身のコクが特徴です。ステーキやすき焼きで火を通すと、芳醇な和牛の香りが立ち上り、噛むごとに上質な脂の旨味が広がります。"
            }
          },
          {
            "@type": "Question",
            "name": "東京方面からのアクセス方法は？新幹線と高速道路の所要時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "東京駅からは東北新幹線「なすの」または「やまびこ」で「那須塩原駅」まで約70分と抜群の近さです。那須塩原駅西口からは主要旅館の無料送迎バスや路線バス（関東自動車・東野交通）で約30〜45分で温泉街に到着します。お車の場合は、東北自動車道・川口JCTより那須ICまで約100分、インターを降りて那須街道を直進して約15〜20分とドライブにも最適な好立地です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.com/winter-tochigi-nasu-onsen-shikanoyu-snow-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "那須温泉山楽",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56935%2F56935.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "那須温泉　ホテルエピナール那須",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7335%2F7335.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "リゾナーレ那須",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177663%2F177663.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "那須温泉　休暇村那須",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76817%2F76817.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "那須温泉　森旬の籠／ヒューイットリゾート",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F192854%2F192854.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "那須温泉山楽",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/56935/56935.jpg",
              rating: 4.66,
              reviews: 388,
              price: "¥27,600〜",
              access: "那須塩原駅より車で約３５分／東北自動車道　那須ＩＣより約１５分/無料送迎バスあり。要事前予約",
              special: "五感で四季を感じられる会席料理と大露天風呂。日本情緒あふれる純和風のご滞在をご満喫いただけるお宿です",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56935%2F56935.html",
              story: "大正十二年の創業以来、昭和天皇をはじめとする皇族方や多くの賓客を迎えてきた那須随一の格式を誇る純和風名旅館「那須温泉 山楽（さんらく）」。門をくぐると手入れの行き届いた広大な日本庭園が広がり、初冬の澄んだ冷気の中に凛とした静寂が漂います。自家源泉から湧き出る毎分二百リットル以上の良質な単純温泉は、三十畳を超える広々とした庭園大露天風呂に掛け流され、夜にはライトアップされた木々と満天の冬星空を眺めながら優雅な湯浴みを愉しめます。日本の伝統美と現代の心地よさが完璧に調和した格式高い空間です。",
              roomTip: "日本庭園を一望する数寄屋造りの贅沢な和室や、源泉かけ流しの露天風呂付き客室。初冬の雪化粧をまとった庭園の木々を眺めながら、極上のプライベートな時間を過ごせます。",
              gourmetTip: "職人の繊細な技が光る本格京風懐石料理。地元の指定牧場で丹精込めて肥育された最高峰「とちぎ和牛」のしゃぶしゃぶやステーキをはじめ、冬に甘みを増す高原根菜、契約農家から届く新鮮野菜を贅沢に使った目にも鮮やかな料理が部屋食で楽しめます。",
              highlights: [
                "大正12年創業・昭和天皇もご宿泊された由緒正しき名門＆自家源泉掛け流しの三十畳大露天風呂",
                "初冬の静寂が包む広大な日本庭園の四季美＆職人が技を凝らす部屋食京風懐石のおもてなし",
                "最高峰とちぎ和牛しゃぶしゃぶ＆冬の那須高原根菜と契約農家野菜の部屋食会席"
              ]
            },
            {
              id: 2,
              name: "那須温泉　ホテルエピナール那須",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7335/7335.jpg",
              rating: 4.44,
              reviews: 8618,
              price: "¥7,770〜",
              access: "【お車で】那須I.Cより10分、【JRで】東北新幹線・東北本線　那須塩原駅から無料シャトルバスで30分（要予約）",
              special: "地元の旬菜にこだわる食事＆施設充実のトップリゾート",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7335%2F7335.html",
              story: "那須高原の雄大な自然に囲まれ、温泉・美食・アクティビティのすべてが高水準で揃う大人気総合リゾートホテル「ホテルエピナール那須」。ホテル自慢の温泉大浴場と広大な露天風呂には、那須温泉の柔らかな単純泉がたっぷりと注がれ、湯船の周囲を取り囲む木々や渓流のせせらぎが初冬の旅情を盛り上げます。館内には室内温水プールや本格エステ、陶芸体験工房などが充実。敷地内にはイルミネーションが煌めき、カップルからファミリーまで誰もが笑顔になれる充実のリゾートライフを約束してくれます。",
              roomTip: "那須連山のパノラマビューを望む最上階展望客室や、靴を脱いで寛げるファミリー向け和洋室。大きなピクチャーウィンドウから初冬の澄み渡る高原と山並みを一望できます。",
              gourmetTip: "口コミで絶賛される豪華フレンチレストランまたは和洋中バイキング「エルバージュ」。ライブキッチンで焼き上げる栃木県産和牛ステーキや、新鮮な那須高原野菜のサラダバー、冬限定の濃厚チーズフォンデュや熱々鍋など、90種以上の多彩な美食が並びます。",
              highlights: [
                "那須高原随一の大型リゾート＆敷地内イルミネーションと90種バイキング・室内温水プール",
                "那須連山のパノラマビューを望む最上階客室＆エステや陶芸体験など多彩な館内アクティビティ",
                "とちぎ和牛ステーキ実演＆90種以上の豪華バイキング・冬限定チーズフォンデュ"
              ]
            },
            {
              id: 3,
              name: "リゾナーレ那須",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/177663/177663.jpg",
              rating: 4.46,
              reviews: 166,
              price: "¥19,140〜",
              access: "那須塩原駅よりお車にて約４０分",
              special: "那須の自然豊かな敷地で地域の風景に親しみふれあいながら暮らすように過ごすアグリツーリズモリゾート",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F177663%2F177663.html",
              story: "那須の豊かな原生林の中に溶け込むように佇み、アグリツーリズモリゾートとして国内外から高い評価を受ける「星野リゾート リゾナーレ那須」。敷地内には広大なアグリガーデンやハーブ園が広がり、初冬の静まり返った森の息吹を五感で感じることができます。大浴場「森の湯」は、木造の温もりあふれる内湯と、木々に囲まれた露天風呂からなり、澄んだ冬の風に吹かれながら浸かる湯浴みは爽快そのもの。焚き火を囲んでのマシュマロ焼きや冬の星空観察など、日常を忘れさせてくれる特別な体験が待っています。",
              roomTip: "森の木立に囲まれたデザイナーズ客室やヴィラ。暖炉の火を眺めながら過ごせるリビングスペースや、天井が高く開放感あふれる空間で、大人の高原ステイを満喫できます。",
              gourmetTip: "メインダイニング「OTTO SETTE NASU」でいただく極上のイタリアンコース。冬の那須高原野菜の力強い味わいを引き出した前菜や、手打ちパスタ、厳選された那須黒毛和牛の炭火ローストなど、上質なワインペアリングとともに感動のディナーを体験。",
              highlights: [
                "原生林に佇む星野リゾートのアグリツーリズモ＆「森の湯」露天風呂と本格イタリアンコース",
                "焚き火を囲む冬のアクティビティ＆洗練されたデザイナーズ客室で過ごす非日常の高原ステイ",
                "OTTO SETTE NASUで味わう厳選和牛炭火ロースト＆冬の高原野菜イタリアンコース"
              ]
            },
            {
              id: 4,
              name: "那須温泉　休暇村那須",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76817/76817.jpg",
              rating: 4.42,
              reviews: 307,
              price: "¥20,000〜",
              access: "ＪＲ　那須塩原駅より関東自動車路線バス　那須ロープウェイ行きにて約６５分、休暇村那須前下車（徒歩１分）",
              special: "標高１２００ｍの別天地。新緑、紅葉、スキーなど四季を通じて楽しめるリゾート。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76817%2F76817.html",
              story: "那須連山の主峰・茶臼岳の標高約千二百メートルに位置し、那須七湯のうち「大丸温泉」と「弁天温泉」の二つの異なる源泉を引く眺望絶佳の公共の宿「休暇村 那須」。宿の露天風呂からは、眼下に広がる広大な那須野ヶ原のパノラマと、初冬の関東平野の夜景を一望できます。日中は澄み切った青空と白銀の茶臼岳の山肌、夜には満天の星と地上の煌めきが織りなす絶景に包まれながら浸かる名湯は格別の開放感。自然散策路も整備され、澄んだ高原の空気を満喫できます。",
              roomTip: "那須野ヶ原を見下ろす南向きの展望和室や洋室。天気の良い冬の朝には、遠く富士山や筑波山のシルエットまで見渡せる贅沢なパノラマが広がります。",
              gourmetTip: "地産地消にこだわったプレミアムビュッフェまたは会席コース。栃木県産ブランド牛「とちぎ霧降高原牛」の鉄板焼きや、冬の郷土鍋「巻狩り鍋」、那須高原の新鮮な乳製品を使ったスイーツなど、地域の恵みを余すところなく味わえます。",
              highlights: [
                "標高1200mから那須野ヶ原を一望する絶景露天風呂＆大丸・弁天の2源泉と霧降高原牛鉄板焼き",
                "夜には満天の冬星空と関東平野の夜景パノラマ＆茶臼岳登山口にも近い抜群のロケーション",
                "とちぎ霧降高原牛鉄板焼き＆那須郷土「巻狩り鍋」と高原プレミアムビュッフェ"
              ]
            },
            {
              id: 5,
              name: "那須温泉　森旬の籠／ヒューイットリゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/192854/192854.jpg",
              rating: 4.57,
              reviews: 35,
              price: "¥30,837〜",
              access: "那須塩原駅西口よりバスで約３５分「一軒茶屋」下車徒歩約１２分　那須ＩＣ東北自動車道より湯本・那須街道県道１７号を進む",
              special: "全室半露天風呂付の客室で癒しのひと時を。客室・温泉・お食事、那須の自然豊かな空間をご用意。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F192854%2F192854.html",
              story: "那須御用邸にほど近い閑静な別荘地の一角に佇み、全室に源泉かけ流しの半露天風呂を備えた隠れ家ホテル「那須温泉 森旬の籠（しゅんのかご）／ヒューイットリゾート」。那須温泉の美肌泉を客室でプライベートに心ゆくまで堪能できる贅沢な設えが自慢です。周囲の別荘林は初冬になると落葉し、木々の向こうに澄んだ青空と柔らかな木漏れ日が差し込みます。静寂の中で大切な人とゆっくり過ごす大人の休日にぴったりのプライベートリゾートです。",
              roomTip: "源泉かけ流し半露天風呂付きのモダン和洋室。大きな窓を開ければ初冬の高原の冷気を感じながら、誰にも気兼ねなくいつでも湯船に身を沈めることができます。",
              gourmetTip: "旬の食材を繊細な感性で仕上げた創作和食会席。最高格付けの那須与一牛やとちぎ和牛のステーキ、冬の川魚料理、地元の新鮮な野菜を使った温かい小鍋など、出来立ての温かみを感じる贅沢なディナーを半個室で落ち着いて味わえます。",
              highlights: [
                "全室に源泉かけ流し半露天風呂完備の隠れ宿＆那須与一牛ステーキと創作和食の贅沢ディナー",
                "御用邸近くの閑静な別荘地に佇む大人の隠れ家＆誰にも邪魔されない至高のプライベート湯浴み",
                "最高格付け那須与一牛ステーキ＆冬の創作和食会席を半個室でゆったり堪能"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="那須連山茶臼岳の初冬雪化粧と那須温泉郷の湯煙・冬露天風呂の風情"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/90 text-amber-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-amber-800/50">
            <Eye className="w-4 h-4 text-amber-300" />
            <span>11月・12月限定 開湯1380年鹿の湯の歴史＆那須与一牛・ロイヤルリゾート特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月那須温泉郷の初冬高原美と名湯】<br className="hidden sm:inline" />
            茶臼岳雪化粧と開湯千三百年鹿の湯・最高峰那須与一牛＆高原温泉会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            白鹿が傷を癒やした伝説から千三百年余。皇室の那須御用邸が置かれ、茶臼岳の壮大なパノラマを望む「那須温泉郷」。初冬の澄んだ空気の中に立ち上る硫黄の湯煙。名湯「鹿の湯」の乳白色露天風呂と、最高峰黒毛和牛「那須与一牛」＆高原会席に心満たされる極上の休日。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> 栃木県那須郡那須町湯本</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-amber-100">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-800">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Nasu 1380-Year Royal Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                白鹿伝説と御用邸が紡ぐ格式の地。初冬の茶臼岳と名湯の温もり
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            東京から新幹線でわずか70分。関東平野の北端、活火山・茶臼岳の山麓に広がる「那須温泉郷（なすおんせんきょう）」。その歴史の起源は飛鳥時代の舒明天皇2年（630年）に遡ります。狩人・狩野三郎行広が放った矢で傷を負った白鹿が、谷間に湧き出る温泉で傷を癒やしている姿を発見したことから「鹿の湯」と名付けられ、草津や有馬と並ぶ東日本最古の霊泉として信仰を集めてきました。大正時代には皇室の那須御用邸が置かれ、洗練されたロイヤルリゾートとしての品格を今に伝えています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            那須の11月・12月は、高原全体が澄み切った清涼な空気に包まれる美しい季節です。11月中旬には主峰・茶臼岳の山頂付近が純白の雪で覆われ、青空との鮮やかなコントラストを描き出します。11月下旬から12月にかけては、温泉街の随所から立ち上る湯煙が白くたなびき、初冬の旅情を際立たせます。標高の高低差によって泉質が異なる「那須七湯（鹿の湯、大丸、弁天、北、八幡、高雄、三斗小屋）」の湯巡りも、冬の那須ならではの贅沢な楽しみです。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして冬の那須高原を訪れる醍醐味は、豊かな大地が育む極上グルメにあります。源平合戦の英雄・那須与一公の名を冠した幻のブランド牛「那須与一牛」や「とちぎ和牛」のとろけるサーロインステーキやすき焼き。寒風の中で甘みを凝縮させた高原野菜やキノコをたっぷり使った温かい郷土鍋、そして搾りたての新鮮な牛乳から作られる濃厚な乳製品やチーズ料理が、冷えた身体を温かく満たしてくれます。
          </p>
          
          <div className="bg-amber-50/70 rounded-2xl p-5 border border-amber-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-700" />
                11月・12月那須温泉郷 旅のハイライト
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                茶臼岳の白銀雪化粧パノラマ・開湯1380年「鹿の湯」の乳白色硫黄泉・最高峰ブランド「那須与一牛」ステーキ・高原野菜と濃厚チーズ会席・東京から新幹線70分の好アクセス
              </p>
            </div>
            <a
              href="#hotels"
              className="px-5 py-2.5 bg-amber-800 hover:bg-amber-900 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap shadow-sm"
            >
              厳選名宿5選を見る
            </a>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="bg-stone-100/80 rounded-2xl p-6 border border-stone-200">
          <h2 className="text-base font-bold text-stone-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-amber-800" />
            目次・インデックス
          </h2>
          <nav className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-stone-700">
            <a href="#chause-winter" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>1. 茶臼岳の初冬冠雪パノラマと殺生石の荒涼美</span>
            </a>
            <a href="#spring-feature" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>2. 酸性含硫黄泉の奇跡：那須七湯の多彩な泉質と効能</span>
            </a>
            <a href="#shikanoyu-tradition" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>3. 開湯1380年「鹿の湯」の伝統入浴作法とかぶり湯</span>
            </a>
            <a href="#hotels" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>4. 11・12月に泊まりたい那須温泉郷の厳選名宿5選</span>
            </a>
            <a href="#gourmet" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>5. 那須の大地が育む極上美食：最高峰那須与一牛と高原野菜</span>
            </a>
            <a href="#itinerary" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>6. 1泊2日 王道モデルコース（新幹線70分とロイヤルリゾート）</span>
            </a>
            <a href="#faq" className="hover:text-amber-800 hover:underline flex items-center gap-1.5">
              <span>7. よくある質問（FAQ）と冬期スタッドレスタイヤ情報</span>
            </a>
          </nav>
        </section>

        {/* Chause Winter Section */}
        <section id="chause-winter" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Chause Snow Panorama</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                茶臼岳の初冬冠雪パノラマと殺生石の荒涼美
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            那須連山の主峰であり、現在も活発に噴煙を上げる「茶臼岳（標高1,915m）」。11月中旬を迎えると山頂付近に真っ白な初雪が降り積もり、麓の那須高原から見上げる冠雪の山肌は息をのむ雄大さです。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            また、九尾の狐伝説で有名な「殺生石（せっしょうせき）」周辺は、硫黄の噴気が立ち込める荒涼とした岩場が広がり、初冬の薄雪と相まって幻想的な雰囲気を醸し出します。澄み切った冬空の下、標高の高さを実感しながら眺める関東平野の大パノラマは、那須ならではの壮大な景観です。
          </p>
        </section>

        {/* Hot Spring Features */}
        <section id="spring-feature" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Ancient Mineral Qualities</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                茶臼岳のマグマが生み出す恵み：酸性含硫黄泉と多彩な那須七湯
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                白濁の濃厚な酸性含硫黄泉
              </h3>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                元湯「鹿の湯」をはじめとする源泉は、強い硫黄臭と乳白色の濁り湯が特徴。強い殺菌力と角質軟化作用を持ち、慢性皮膚病や切り傷、疲労回復に抜群の効能を誇ります。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                標高ごとに異なる「那須七湯」
              </h3>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                那須湯本の酸性硫黄泉から、標高の高い大丸温泉の単純温泉、弁天温泉の炭酸水素塩泉まで、標高によって泉質がガラリと変化。多彩な湯巡りが楽しめます。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-stone-50 border border-stone-100 space-y-2">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600" />
                短時間の入浴でも芯まで温まる
              </h3>
              <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                高濃度の天然ミネラルが血流を急速に活性化させ、冬の厳しい寒さで縮こまった身体を深部からほぐし、湯上がり後もポカポカ感が驚くほど持続します。
              </p>
            </div>
          </div>
        </section>

        {/* Shikanoyu Tradition Section */}
        <section id="shikanoyu-tradition" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Snowflake className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Ancient Bathing Tradition</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                開湯1380年「鹿の湯」の伝統入浴作法とかぶり湯の知恵
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            飛鳥時代から続く木造の共同浴場「鹿の湯」。中に入ると白濁した湯煙と硫黄の香りが充満し、ヒノキ造りの浴槽が温度別に41度から48度まで並んでいます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            鹿の湯には独自の入浴作法があります。まずは浴槽の横で手桶を使い、頭から温かい温泉を数十回かぶる「かぶり湯」を行います。これにより急激な血圧上昇を防ぎ、脳の血管を保護します。その後、41度や42度のぬるめの浴槽からゆっくりと浸かり、短時間（2〜3分）入って休む「短時間反復浴」を行うのが、千三百年の歴史が証明する正しい湯治法です。
          </p>
        </section>

        {/* Hotel List */}
        <section id="hotels" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-amber-800 uppercase tracking-widest">Selected Ryokans</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              11月・12月に泊まりたい那須温泉郷の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              茶臼岳の雪景色を望む露天風呂、最高峰那須与一牛やとちぎ和牛会席を堪能できる宿を厳選。
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
                    <div className="absolute top-4 left-4 bg-amber-950/80 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
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
                        <span className="text-xs text-amber-800 font-semibold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                          那須温泉郷・茶臼岳
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
                          <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <span><strong>客室の魅力：</strong>{hotel.roomTip}</span>
                        </div>
                        <div className="flex items-start gap-2 text-stone-700">
                          <Utensils className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <span><strong>冬の料理：</strong>{hotel.gourmetTip}</span>
                        </div>
                      </div>

                      <div className="space-y-1.5 pt-2">
                        {hotel.highlights.map((hl: string, hIdx: number) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-stone-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1泊2食付／2名1室時1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-extrabold text-amber-800">
                          {hotel.price}
                        </span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-800 hover:bg-amber-900 text-white font-bold rounded-xl shadow-md transition-all duration-200 text-sm hover:scale-[1.02]"
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
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Winter Delicacies</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                那須の大地が育む極上美食：「那須与一牛」と冬の高原温泉会席
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm sm:text-base text-stone-700">
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-700" />
                幻の最高峰黒毛和牛「那須与一牛」
              </h3>
              <p className="leading-relaxed text-sm">
                那須地域の指定牧場で、清らかな伏流水と良質な穀物飼料で手塩にかけて育てられた最高等級黒毛和牛。肉質は非常に柔らかく、口に含むと芳醇な甘みを持つサシがすっと溶け出し、赤身の濃厚な旨味が溢れます。炭火ステーキやしゃぶしゃぶで、肉本来のポテンシャルを存分に堪能できます。
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-700" />
                寒さで甘みを増す高原野菜と濃厚乳製品
              </h3>
              <p className="leading-relaxed text-sm">
                初冬の厳しい朝晩の冷え込みによって、大根やカブ、人参などの根菜は自ら糖度を蓄え、驚くほど甘く育ちます。地元の酪農家から届く絞りたて生乳を使ったチーズやバター、熱々のチーズフォンデュやクリーム仕立ての鍋料理は、冬の那須ステイならではの至福の味覚です。
              </p>
            </div>
          </div>
        </section>

        {/* Itinerary Section */}
        <section id="itinerary" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Recommended 2-Day Tour</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                1泊2日 王道モデルコース：新幹線で70分！鹿の湯巡りと茶臼岳雪景色・高原リゾート満喫旅
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-800 pl-4 sm:pl-6 space-y-2">
              <span className="text-xs font-extrabold text-amber-800 uppercase tracking-wider">【1日目】新幹線から那須高原へ〜鹿の湯入浴と名宿チェックイン</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                11:30 東北新幹線でJR那須塩原駅に到着 → 路線バスまたは送迎バスに乗車
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                車窓から雄大な那須連山の初冬冠雪パノラマを眺めながら、那須街道を登る。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                12:30 那須湯本で名物「すいとん」ランチ＆開湯1380年「鹿の湯」へ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                木造湯屋の「鹿の湯」で乳白色の硫黄泉に浸かる。かぶり湯作法でじっくり温まる。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                15:00 旅館へチェックイン → 庭園露天風呂で初冬の雪見風呂
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                肌に優しい単純泉で長湯を楽しむ。夕暮れの高原林を眺めながら優雅なひととき。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                18:30 最高峰那須与一牛ステーキ＆高原野菜会席ディナー
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                とろける和牛のサシと冬の高原野菜、栃木の銘酒「惣誉」とのマリアージュに舌鼓。
              </p>
            </div>

            <div className="border-l-2 border-stone-300 pl-4 sm:pl-6 space-y-2 pt-2">
              <span className="text-xs font-extrabold text-stone-500 uppercase tracking-wider">【2日目】朝の清涼露天風呂〜那須ガーデンアウトレットとスイーツ巡り</span>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                08:00 朝の露天風呂 → 栃木産コシヒカリと御養卵の朝食
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                澄み切った朝の高原の冷気が心地よい露天風呂。濃厚な那須御養卵の卵かけご飯。
              </p>
              <h3 className="font-bold text-stone-900 text-sm sm:text-base pt-2">
                10:30 「チーズガーデン 那須本店」でお土産購入＆那須塩原駅へ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                名物「御用邸チーズケーキ」や冬限定スイーツを購入。新幹線で快適に帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Traveler's FAQ</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                よくある質問（FAQ）と初冬の旅のアドバイス
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            {faqList.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-stone-50 border border-stone-200/70 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-amber-800 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links / Related Guides */}
        <section className="bg-amber-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">Related Winter Hot Spring Guides</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい北関東・東日本の冬・名湯特集
            </h2>
            <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
              11月・12月ならではの雪景色や旬の郷土グルメを堪能できる全国各地の名湯ガイドを多数公開中。次の旅の計画にぜひお役立てください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-tochigi-kinugawa-onsen-valley-snow-stay"
              className="bg-amber-900/80 hover:bg-amber-900 p-4 rounded-2xl transition border border-amber-800/50 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">栃木・鬼怒川</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">鬼怒川温泉 初冬渓谷美と日光生ゆば＆とちぎ和牛の宿</h3>
            </Link>
            <Link 
              href="/winter-tochigi-okunikko-yumoto-snow-onsen-stay"
              className="bg-amber-900/80 hover:bg-amber-900 p-4 rounded-2xl transition border border-amber-800/50 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">栃木・奥日光湯元</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">奥日光湯元温泉 湯ノ湖雪景色と乳白色硫黄泉の宿</h3>
            </Link>
            <Link 
              href="/winter-gunma-ikaho-stone-steps-joshu-beef-stay"
              className="bg-amber-900/80 hover:bg-amber-900 p-4 rounded-2xl transition border border-amber-800/50 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">群馬・伊香保</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">伊香保温泉 石段街の冬情緒と黄金の湯・上州牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-gunma-kusatsu-yukimi-onsen-stay"
              className="bg-amber-900/80 hover:bg-amber-900 p-4 rounded-2xl transition border border-amber-800/50 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">群馬・草津</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">草津温泉 湯畑雪景色と日本一の強酸性泉・雪見露天の宿</h3>
            </Link>
            <Link 
              href="/winter-fukushima-aizu-higashiyama-snow-heritage-stay"
              className="bg-amber-900/80 hover:bg-amber-900 p-4 rounded-2xl transition border border-amber-800/50 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">福島・会津東山</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">会津東山温泉 雪化粧の渓谷美と武家屋敷情緒の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-amber-900/80 hover:bg-amber-900 p-4 rounded-2xl transition border border-amber-800/50 block group"
            >
              <span className="text-xs text-amber-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-amber-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-tochigi-nasu-onsen-shikanoyu-snow-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
