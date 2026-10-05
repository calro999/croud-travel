import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Castle
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月信州松本浅間温泉の国宝松本城初雪と城下町名湯】開湯1300年アルカリ単純泉・挽きたて信州新そば＆信州プレミアム牛すき焼きの宿5選",
  description: "11月から12月にかけて長野県・松本平は、雪化粧した北アルプスの山並みが澄み渡る初冬の青空にそびえ立ち、黒漆と白漆喰の国宝松本城が幻想的な冬景色を見せます。飛鳥時代（天武天皇の時代）開湯と伝わり、江戸時代には松本藩主の御殿湯として愛された浅間温泉は、湯量豊富な無色透明の弱アルカリ性単純温泉。11月に旬を迎える香り高い「信州新そば」、長野県が誇る最高峰ブランド「信州プレミアム牛肉」のとろけるすき焼きや陶板焼き、信州サーモン、安曇野わさび、城下町の地酒を堪能する大人の湯宿5選を徹底解説。",
  keywords: '浅間温泉 宿泊, 松本 温泉 11月 12月, 国宝松本城 雪景色, 菊之湯 浅間温泉, ホテル玉之湯, 別亭一花, 梅の湯, 帰郷亭ゆもとや, 信州新そば 宿, 信州プレミアム牛 すき焼き, 松本城 イルミネーション',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagano-asama-onsen-matsumoto-castle-snow-stay/"
  },
  openGraph: {
    title: "【11・12月信州松本浅間温泉の国宝松本城初雪と城下町名湯】開湯1300年アルカリ単純泉・挽きたて信州新そば＆信州プレミアム牛すき焼きの宿5選",
    description: "11月から12月にかけて長野県・松本平は、雪化粧した北アルプスの山並みが澄み渡る初冬の青空にそびえ立ち、黒漆と白漆喰の国宝松本城が幻想的な冬景色を見せます。飛鳥時代（天武天皇の時代）開湯と伝わり、江戸時代には松本藩主の御殿湯として愛された浅間温泉は、湯量豊富な無色透明の弱アルカリ性単純温泉。11月に旬を迎える香り高い「信州新そば」、長野県が誇る最高峰ブランド「信州プレミアム牛肉」のとろけるすき焼きや陶板焼き、信州サーモン、安曇野わさび、城下町の地酒を堪能する大人の湯宿5選を徹底解説。",
    url: 'https://croud-travel.com/winter-nagano-asama-onsen-matsumoto-castle-snow-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の国宝松本城と浅間温泉の名湯'
      }
    ]
  }
};

const faqList = [
  {
    "q": "信州松本・浅間温泉の11月・12月の気候や気温、積雪状況はどうですか？",
    "a": "松本市（浅間温泉）は標高約600mの盆地に位置し、典型的な内陸性気候です。11月に入ると朝晩の放射冷却が強まり、最低気温は0〜3℃前後、11月下旬からは氷点下に下がります。12月の最高気温は6〜9℃、朝晩はマイナス3〜マイナス6℃まで冷え込みます。松本市街地では12月中旬頃に初雪が降ることがありますが、豪雪地帯ではないため大雪になることは稀です。ただし朝晩の路面凍結（ブラックアイスバーン）が多発するため、防寒コート、手袋、マフラー、滑り止め付きの靴が必要です。"
  },
  {
    "q": "国宝松本城の冬の見どころや、冬限定のイベントはありますか？",
    "a": "冬の松本城は、澄み切った青空を背景に雪化粧した北アルプス（常念岳・乗鞍岳など）がそびえ、お堀の水面に天守閣とアルプスが映り込む水鏡の絶景が見られます。また、例年12月上旬から2月中旬にかけて「松本城城鏡（イルミネーション＆プロジェクションマッピング）」が開催され、天守閣が光と音の幻想的なデジタルアートで彩られます。夜間も冷え込むため、温かい服装でお出かけください。"
  },
  {
    "q": "11月・12月は「信州そば（新そば）」の旬ですか？特徴を教えてください。",
    "a": "はい、11月は長野県内の各地で「信州新そば（秋そば）」の収穫が本格化し、1年で最もそばが美味しい黄金期です。夏に収穫される夏そばに比べ、秋の新そばは豊かな緑色を帯び、噛むほどに広がる香ばしい風味と甘みが段違いに優れています。浅間温泉の多くの宿では、宿の主や料理人が自ら毎朝手打ちする打ちたて・挽きたての新そばを夕食や朝食で提供しています。"
  },
  {
    "q": "浅間温泉のお湯（泉質）と歴史的な背景について教えてください。",
    "a": "浅間温泉の歴史は古く、飛鳥時代の天武天皇（白鳳年間）の束間邑（つかまのむら）の湯に始まると伝わります。江戸時代には松本城主（松平家・戸田家）の別邸・御殿湯が置かれ、城下町の奥座敷として栄えました。泉質は「アルカリ性単純温泉（低張性 アルカリ性 高温泉）」。無色透明で無味無臭、肌への刺激が少なく角質を優しく落とすため「美肌の湯」として親しまれ、湯上がりも身体の芯までぽかぽかと温かさが持続します。"
  },
  {
    "q": "冬の松本・浅間温泉へ車で行く場合、スタッドレスタイヤは必要ですか？",
    "a": "11月中旬以降に長野道（松本IC周辺）や浅間温泉へ車でお越しの際は、スタッドレスタイヤの装着を強く推奨します。松本平は降雪量はそれほど多くありませんが、夜間や早朝に路面温度が氷点下となり、橋の上や日陰のカーブが凍結するブラックアイスバーンが頻発します。公共交通機関を利用する場合は、JR松本駅から浅間温泉行きの路線バスが約15〜20分間隔で頻発しており、雪道運転の心配なくスムーズにアクセスできます。"
  }
];

export default function AsamaOnsenWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-nagano-asama-onsen-matsumoto-castle-snow-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-nagano-asama-onsen-matsumoto-castle-snow-stay"
        },
        "headline": "【11・12月信州松本浅間温泉の国宝松本城初雪と城下町名湯】開湯1300年アルカリ単純泉・挽きたて信州新そば＆信州プレミアム牛すき焼きの宿5選",
        "description": "11月から12月にかけて長野県・松本平は、雪化粧した北アルプスの山並みが澄み渡る初冬の青空にそびえ立ち、黒漆と白漆喰の国宝松本城が幻想的な冬景色を見せます。飛鳥時代（天武天皇の時代）開湯と伝わり、江戸時代には松本藩主の御殿湯として愛された浅間温泉は、湯量豊富な無色透明の弱アルカリ性単純温泉。11月に旬を迎える香り高い「信州新そば」、長野県が誇る最高峰ブランド「信州プレミアム牛肉」のとろけるすき焼きや陶板焼き、信州サーモン、安曇野わさび、城下町の地酒を堪能する大人の湯宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T04:00:00+09:00",
        "dateModified": "2026-09-28T04:00:00+09:00",
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
          "name": "Croud Travel 温泉・冬旅取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-nagano-asama-onsen-matsumoto-castle-snow-stay#breadcrumb",
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
            "name": "長野・松本浅間温泉 国宝松本城初雪と新そば・信州牛の宿",
            "item": "https://croud-travel.com/winter-nagano-asama-onsen-matsumoto-castle-snow-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-nagano-asama-onsen-matsumoto-castle-snow-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "信州松本・浅間温泉の11月・12月の気候や気温、積雪状況はどうですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "松本市（浅間温泉）は標高約600mの盆地に位置し、典型的な内陸性気候です。11月に入ると朝晩の放射冷却が強まり、最低気温は0〜3℃前後、11月下旬からは氷点下に下がります。12月の最高気温は6〜9℃、朝晩はマイナス3〜マイナス6℃まで冷え込みます。松本市街地では12月中旬頃に初雪が降ることがありますが、豪雪地帯ではないため大雪になることは稀です。ただし朝晩の路面凍結（ブラックアイスバーン）が多発するため、防寒コート、手袋、マフラー、滑り止め付きの靴が必要です。"
            }
          },
          {
            "@type": "Question",
            "name": "国宝松本城の冬の見どころや、冬限定のイベントはありますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬の松本城は、澄み切った青空を背景に雪化粧した北アルプス（常念岳・乗鞍岳など）がそびえ、お堀の水面に天守閣とアルプスが映り込む水鏡の絶景が見られます。また、例年12月上旬から2月中旬にかけて「松本城城鏡（イルミネーション＆プロジェクションマッピング）」が開催され、天守閣が光と音の幻想的なデジタルアートで彩られます。夜間も冷え込むため、温かい服装でお出かけください。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月は「信州そば（新そば）」の旬ですか？特徴を教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "はい、11月は長野県内の各地で「信州新そば（秋そば）」の収穫が本格化し、1年で最もそばが美味しい黄金期です。夏に収穫される夏そばに比べ、秋の新そばは豊かな緑色を帯び、噛むほどに広がる香ばしい風味と甘みが段違いに優れています。浅間温泉の多くの宿では、宿の主や料理人が自ら毎朝手打ちする打ちたて・挽きたての新そばを夕食や朝食で提供しています。"
            }
          },
          {
            "@type": "Question",
            "name": "浅間温泉のお湯（泉質）と歴史的な背景について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "浅間温泉の歴史は古く、飛鳥時代の天武天皇（白鳳年間）の束間邑（つかまのむら）の湯に始まると伝わります。江戸時代には松本城主（松平家・戸田家）の別邸・御殿湯が置かれ、城下町の奥座敷として栄えました。泉質は「アルカリ性単純温泉（低張性 アルカリ性 高温泉）」。無色透明で無味無臭、肌への刺激が少なく角質を優しく落とすため「美肌の湯」として親しまれ、湯上がりも身体の芯までぽかぽかと温かさが持続します。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の松本・浅間温泉へ車で行く場合、スタッドレスタイヤは必要ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月中旬以降に長野道（松本IC周辺）や浅間温泉へ車でお越しの際は、スタッドレスタイヤの装着を強く推奨します。松本平は降雪量はそれほど多くありませんが、夜間や早朝に路面温度が氷点下となり、橋の上や日陰のカーブが凍結するブラックアイスバーンが頻発します。公共交通機関を利用する場合は、JR松本駅から浅間温泉行きの路線バスが約15〜20分間隔で頻発しており、雪道運転の心配なくスムーズにアクセスできます。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "浅間温泉　菊之湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/50116/50116.jpg",
              rating: 4.62,
              reviews: 198,
              price: "¥23,000〜",
              access: "長野自動車道　松本ＩＣよりお車で約20分。JR松本駅より浅間温泉行きバス約25分「下浅間」下車、徒歩約1分。",
              special: "明治24年創業　本棟造りの重厚な空間で寛ぐ大人の宿。大人の休日を彩る信州懐石と名湯を満喫",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F50116%2F50116.html",
              story: "創業明治24年、松本民芸家具の温もりある木肌と手漉き和紙の照明が静謐な和の美を紡ぎ出す名門クラシック宿「浅間温泉 菊之湯」。白壁土蔵造りの重厚な門構えをくぐると、欅や檜の銘木を惜しみなく用いた本館の風情ある空間が広がります。宿最大の自慢は、敷地内の自家源泉から絶え間なく注がれる無色透明のアルカリ性単純温泉「菊風呂」。湯口から滔々と流れる良泉は肌触りが極めて柔らかく、初冬の冷気で強張った身体を芯からじんわりと解きほぐします。",
              roomTip: "本館次の間付き和室または民芸家具をしつらえた和モダン特別室。職人の技が光る松本民芸家具の椅子に腰掛け、初冬の静かな日本庭園を眺めながら読書や語らいの時間を楽しめます。",
              gourmetTip: "信州の旬と郷土の恵みを極めた深山会席。霜降りの「信州プレミアム牛肉」のすき焼きや鉄板焼き、料理長自らが毎朝手打ちする挽きたて・打ちたての「十割信州新そば」、安曇野の清流で育った信州サーモンのお造り。",
              highlights: [
                "明治24年創業の松本民芸家具と手漉き和紙の宿＆自家源泉掛け流しの名湯「菊風呂」",
                "料理長自らが手打ちする十割信州新そば＆A5信州プレミアム牛肉すき焼き会席",
                "松本城下町の文化と職人技息づく上質な空間で過ごす特別な大人のリトリート"
              ]
            },
            {
              id: 2,
              name: "松本　浅間温泉　ホテル玉之湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7179/7179.jpg",
              rating: 4.54,
              reviews: 863,
              price: "¥15,950〜",
              access: "JR松本駅よりバスで約20分／松本ICよりお車で約20分　■当館から国宝松本城まではお車で約10分",
              special: "「心と体を元気に」バリアフリーの宿  個室で愉しむ郷土の味＜3つの無料貸切露天風呂＞",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7179%2F7179.html",
              story: "「誰もが気兼ねなく温泉を楽しめる宿」を理念に掲げ、車椅子や高齢の方にも優しいバリアフリー設計と心尽くしのおもてなしが評判の「信州・松本 浅間温泉 ホテル玉之湯」。館内には趣の異なる4つの貸切風呂（木曽檜風呂・信楽焼風呂など）があり、宿泊者は無料でプライベートな湯浴みを満喫できます。毎夜ロビーで開催されるクラシックやジャズの生演奏「車座ふれあいコンサート」も名物で、初冬の夜を温かい感動で包み込んでくれます。",
              roomTip: "展望風呂付きスイートルームまたはユニバーサルデザイン和洋室。フラットなフロア設計で居心地が良く、大きな窓から松本市街地の街明かりや美ヶ原高原の稜線を一望できます。",
              gourmetTip: "手打ちそば職人でもある館主が打つ本格信州二八新そば、旬の信州牛の陶板ステーキ、地場産野菜をたっぷり使った季節の小鍋仕立て。信州の地酒利き酒セットとともに味わう美食膳。",
              highlights: [
                "4つの無料貸切風呂と全館バリアフリー＆毎夜開催の車座ふれあいコンサート",
                "館主自慢の本格手打ち二八信州新そば＆信州牛陶板ステーキと地酒利き酒",
                "車椅子でも安心のユニバーサル対応＆心温まる音楽の夕べに癒やされる滞在"
              ]
            },
            {
              id: 3,
              name: "信州松本　浅間温泉　別亭　一花",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70272/70272.jpg",
              rating: 4.55,
              reviews: 315,
              price: "¥27,500〜",
              access: "ＪＲ松本駅より車で１０分、下浅間広場バス停より徒歩１分　",
              special: "信州松本の奥座敷、浅間温泉でわずか１０室のきめ細やかなおもてなしが人気の宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70272%2F70272.html",
              story: "浅間温泉の閑静な高台に佇み、全館に畳が敷き詰められた数寄屋造りの大人の隠れ宿「信州松本 浅間温泉 別亭 一花（いっか）」。客室はわずか10室のみに限定され、喧騒から切り離された静寂のプライベート時間が約束されています。館内は大浴場や露天風呂も含めてすべて素足や足袋で心地よく過ごせる贅沢な造り。湯量豊かな浅間温泉の源泉が注がれる大浴場では、初冬の澄んだ空気を感じながら、心洗われる静かな湯浴みを堪能できます。",
              roomTip: "温泉半露天風呂付き和洋室「花あかり」または数寄屋造り特別和室。いつでも好きな時に源泉掛け流しの湯に身を委ね、坪庭の初冬の情緒を眺めながら優雅なひとときを過ごせます。",
              gourmetTip: "月替わりの創作懐石「一花会席」。A5ランク信州プレミアム牛のロースステーキ、信州サーモンの昆布締め、冬の根菜を彩り豊かに仕立てた前菜など、料理人の繊細な技が光る逸品揃い。",
              highlights: [
                "全館畳敷きの数寄屋造り・限定10室の贅沢空間＆源泉露天風呂付き客室",
                "A5信州プレミアム牛ロースステーキ＆繊細な技が光る月替わり創作一花会席",
                "全館素足で過ごせる開放感＆大切な記念日や夫婦旅に選ばれる極上の隠れ家"
              ]
            },
            {
              id: 4,
              name: "浅間温泉　梅の湯",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7352/7352.jpg",
              rating: 4.14,
              reviews: 506,
              price: "¥8,000〜",
              access: "JR中央線「松本駅」よりバス20分「湯坂」下車、徒歩5分／長野自動車道松本ICより20分　■無料駐車場30台完備",
              special: "信州創作料理とかけ流しの湯でごゆっくり。 お一人さまもどうぞ！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7352%2F7352.html",
              story: "明治初頭に創業し、アットホームで心温まるおもてなしと良質な源泉掛け流しの湯が長く愛され続ける湯宿「浅間温泉 梅の湯」。宿のシンボルである大浴場には木曽檜が贅沢にあしらわれ、ほのかな木の香りと天然温泉の湯けむりが満ちています。浅間温泉の共同源泉から引かれるアルカリ性単純温泉は、入浴後も肌がぽかぽかと温まり続ける保温効果の高さが魅力。一人旅から家族旅行まで、気兼ねなく信州の温泉情緒を満喫できる温かな宿です。",
              roomTip: "落ち着いた純和室（8畳〜12畳）。障子を通した柔らかな光と畳の香りに包まれ、窓からは松本平の街並みや初冬の山並みを静かに眺めることができます。",
              gourmetTip: "手作りのぬくもりが伝わる信州郷土会席。信州牛の朴葉味噌焼きや陶板焼き、打ちたての信州そば、山菜やきのこの天ぷら、長野県産米の炊きたてご飯など、素朴ながら贅沢な地元の味覚。",
              highlights: [
                "明治創業の木曽檜大浴場＆アットホームなもてなしと信州牛朴葉味噌焼き",
                "保温効果抜群のアルカリ性単純温泉＆手打ちそばと信州郷土の味覚膳",
                "一人旅からファミリーまで気兼ねなく寛げる温泉街の温かな老舗湯宿"
              ]
            },
            {
              id: 5,
              name: "帰郷亭　ゆもとや＜長野県＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/18857/18857.jpg",
              rating: 3.76,
              reviews: 283,
              price: "¥8,250〜",
              access: "ＪＲ松本駅よりバス20分／長野自動車道　松本ＩＣより約３０分／松本空港よりバス６０分",
              special: "六つのお風呂と、旬のお料理が自慢の心落ち着く旅館。北アルプスを望む無料貸切展望風呂が人気！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18857%2F18857.html",
              story: "浅間温泉の高台に位置し、最上階の展望大浴場「スカイパノラマ風呂」から松本市街地の夜景や北アルプスの山並みを一望できる「帰郷亭 ゆもとや」。開湯以来、旅人を迎え続けてきた浅間温泉の名湯を、開放感あふれる絶景露天風呂から心ゆくまで堪能できます。リーズナブルな価格設定でありながら、充実した館内施設と心のこもった接客が人気。国宝松本城や美ヶ原高原への観光拠点としても抜群の利便性を誇ります。",
              roomTip: "展望和室または和モダンツイン。高台ならではの眺望が広がり、夕暮れ時には松本城下町の茜色の空と、初雪を冠した北アルプスの稜線が美しいコントラストを描きます。",
              gourmetTip: "季節の味覚を取り入れた和食会席。信州牛のしゃぶしゃぶやすき焼き、信州サーモンのお刺身、手打ち信州そば、信州味噌を使った鍋料理など、信州の伝統の味を存分に堪能。",
              highlights: [
                "高台最上階の展望パノラマ大浴場＆松本夜景と北アルプスを望む露天風呂",
                "抜群の眺望とコストパフォーマンス＆信州牛しゃぶしゃぶと信州サーモン会席",
                "国宝松本城や美ヶ原高原・中町通り散策へのアクセス拠点として最適"
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
          alt="冬の国宝松本城と浅間温泉の名湯"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold">
            <Snowflake className="w-4 h-4" />
            11月・12月 冬の極上温泉特集｜長野・信州松本
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月信州松本浅間温泉】<br className="hidden sm:inline" />
            国宝松本城の初雪と開湯1300年名湯・新そば＆信州牛すき焼きの宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            雪冠の北アルプスを仰ぐ城下町の奥座敷。松本藩主が愛した弱アルカリ性単純温泉に浸かり、11月解禁の香り高い信州新そばと最高峰ブランド信州プレミアム牛を堪能する大人の贅沢旅。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Castle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Heritage Castle Town & Alpine Beauty</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                国宝松本城の黒漆と白漆喰に映える北アルプス冠雪美と城下町情緒
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              北アルプスの険しい稜線が純白の初雪をまとい始める11月から12月、長野県・松本平は澄み渡る初冬の青空と冷涼な空気に包まれます。現存十二天守のひとつにして五重六階の天守としては日本最古の「国宝松本城」は、黒漆塗りの下見板張りと白漆喰の壁面が織りなす力強いコントラストが特徴。冬の澄んだ陽光を浴びて冠雪した常念岳や乗鞍岳を借景に、外堀の静かな水面に天守閣が逆さに映り込む「逆さ松本城」の情景は、訪れる者の息をのむ美しさを誇ります。
            </p>
            <p>
              例年12月上旬からは、夜間の城内を光と音のデジタルアートで演出する「松本城城鏡（イルミネーション＆レーザーマッピング）」が開催され、闇夜に浮かび上がる幻想的な光景が楽しめます。また、城下町の中町通りには江戸・明治期に建てられた白壁と黒のなまこ壁の土蔵造りの町並みが今なお美しく残り、柳が揺れるなわて通りや松本民芸家具の工房、クラフトギャラリーを巡る散策も初冬ならではの落ち着いた大人の旅の醍醐味です。
            </p>
            <p>
              市街地の北東、美ヶ原高原の山麓に寄り添うように位置する「浅間温泉」へは松本駅から車で約15分。城下町の文化と山の静寂が心地よく溶け合う奥座敷として、冬の旅人を温かく迎えてくれます。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Eye className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">国宝松本城と北アルプス水鏡</div>
              <div className="text-xs text-slate-600">冬の澄んだ大気とお堀の水面に映る天守閣。夜は城鏡ライトアップも開催。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <ThermometerSun className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">開湯1300年の藩主御殿湯</div>
              <div className="text-xs text-slate-600">肌に優しい無色透明の弱アルカリ性単純泉。冷えを芯から癒やす豊富な湯量。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Utensils className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">信州新そば＆信州牛すき焼き</div>
              <div className="text-xs text-slate-600">11月解禁の挽きたて打ちたて新そば、とろける信州プレミアム牛、地酒ペアリング。</div>
            </div>
          </div>
        </section>

        {/* Section 2: Geology & Gastronomy Science */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Heritage Spring & Soba Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                飛鳥時代開湯1300年の藩主御殿湯と「信州新そば・プレミアム牛」の食文化
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-teal-700" />
              <span>毎分4,000L超の湧出量を誇る弱アルカリ単純泉と天然保湿メタケイ酸</span>
            </h3>
            <p>
              浅間温泉の起源は、飛鳥時代の天武天皇（白鳳年間）の時代、束間邑（つかまのむら）の湯として『日本書紀』や貴族の文献に記されたことに始まります。江戸時代に入ると、松本城主（石川氏・小笠原氏・戸田氏）がこの地に別邸と専用の湯殿「御殿湯」を設置。武士たちの心身を癒やす格式高い湯治場として栄えました。
            </p>
            <p>
              泉質は無色透明・無味無臭の「アルカリ性単純温泉（低張性 アルカリ性 高温泉）」。pH値は8.5〜9.0の弱アルカリ性を示し、肌への刺激が非常に少なく、赤ちゃんの産湯にも使われるほど優しい肌触りです。角質を軟化させる作用に加え、天然の保湿成分として知られる「メタケイ酸」が豊富に含まれており、入浴後は肌がスベスベになるとともに、身体の芯まで蓄熱された温かさが長時間持続します。冬の厳しい底冷えに晒された松本平にあって、芯から温まる極上の治癒泉です。
            </p>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 pt-2">
              <Utensils className="w-4 h-4 text-teal-700" />
              <span>11月収穫「信州新そば」の芳香と、基準をクリアした「信州プレミアム牛肉」</span>
            </h3>
            <p>
              11月から12月にかけての信州旅行最大の醍醐味は、年に一度の「秋の新そば（信州新そば）」です。昼夜の寒暖差が大きい信州の高原で秋口に収穫されたばかりのソバの実は、薄緑色を帯び、ルチンやアミノ酸、香気成分（ヘキサナールなど）が最高潮に達します。浅間温泉の多くの宿では、毎朝料理人や館主が自ら石臼挽きの粉を手打ちし、茹でたての十割・二八そばを供します。噛みしめた瞬間に鼻に抜ける爽やかな甘い香りとコシは、この季節だけの贅沢です。
            </p>
            <p>
              さらに、長野県独自の厳格な基準（脂肪交雑基準およびオレイン酸含有率55%以上）をクリアした最高峰の黒毛和牛「信州プレミアム牛肉」は、融点が低く、口に入れた瞬間に上質な脂がさらりと溶けて深いコクを残します。甘辛い特製割り下で仕上げるすき焼きや、陶板ステーキで安曇野産本わさびを添えて味わう美味は、城下町の地酒「大信州」「笹の誉」との相性も抜群です。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Recommended Ryokan & Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              浅間温泉・冬の滞在を彩る厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              楽天トラベル公式APIより最新の宿泊プラン・評価情報を取得。11月・12月の冬旅行に心からおすすめできる宿を徹底比較。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div 
                key={h.id} 
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col"
              >
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Title & Rating */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-teal-800 text-white text-xs font-bold">
                          厳選第{h.id}位
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 text-sm font-bold">
                          <Star className="w-4 h-4 fill-current" />
                          <span>{h.rating}</span>
                          <span className="text-slate-400 font-normal text-xs">({h.reviews}件)</span>
                        </div>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-teal-800 transition">
                        <a href={h.url} target="_blank" rel="noopener noreferrer">
                          {h.name}
                        </a>
                      </h3>
                    </div>
                    <div className="text-right flex sm:flex-col items-baseline sm:items-end justify-between sm:justify-center">
                      <span className="text-xs text-slate-500">1名あたり参考料金（税込）</span>
                      <span className="text-2xl font-black text-amber-600">{h.price}</span>
                    </div>
                  </div>

                  {/* Image & Story Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-5 relative h-60 sm:h-72 rounded-2xl overflow-hidden bg-slate-100">
                      <Image
                        src={h.img}
                        alt={h.name}
                        fill
                        className="object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                        {h.story}
                      </p>
                      <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-amber-900">
                          <Utensils className="w-4 h-4 text-amber-700" />
                          <span>冬の絶品料理のこだわり</span>
                        </div>
                        <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>
                      <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-200/60 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-teal-900">
                          <Landmark className="w-4 h-4 text-teal-800" />
                          <span>おすすめ客室・眺望のポイント</span>
                        </div>
                        <p className="text-xs sm:text-sm text-teal-950 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 pt-2 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      この宿の注目ポイント
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {h.highlights.map((hl: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-teal-800 shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Access & Booking Button */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-start gap-2 text-xs text-slate-600 max-w-xl">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-teal-800 to-teal-900 hover:from-teal-900 hover:to-slate-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
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

        {/* Section 4: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">1泊2日 満喫ルート</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                国宝松本城＆中町通りクラフト散策と浅間温泉新そば三昧モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs">1</span>
                <span>1日目：JR松本駅 〜 中町通り白壁土蔵街散策 〜 国宝松本城 〜 浅間温泉チェックイン</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                特急あずさまたはしなの号で松本駅に到着後、白壁となまこ壁が美しい「中町通り」やなわて通りを散策し、松本民芸家具やクラフトショップを巡る。午後、国宝松本城へ登閣し、澄み切った青空に映える黒漆の天守とお堀の水鏡を鑑賞。夕方に浅間温泉へチェックイン。弱アルカリ性単純泉の名湯で温まり、夕食には打ちたての信州新そばと信州プレミアム牛すき焼きを地酒「大信州」とともに堪能。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs">2</span>
                <span>2日目：浅間温泉朝湯 〜 松本市美術館（草間彌生アート） 〜 安曇野大王わさび農場</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                朝の清々しい冷気の中で朝湯を満喫し、美味しい和朝食をいただいてチェックアウト。松本出身の前衛芸術家・草間彌生のコレクションで名高い「松本市美術館」を鑑賞。午後は少し足を伸ばして安曇野の「大王わさび農場」を訪れ、冬の湧水が流れる清流わさび田を眺めながら本わさび丼やわさびソフトを味わって帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Climate & Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Travel Advisory</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の松本・浅間温泉 冬旅の注意点と服装・足元の心得
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-teal-800" />
                盆地特有の厳しい底冷え
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                松本平は標高600m前後の内陸性盆地のため、日没後の冷え込みが非常に急激です。12月の夜間はマイナス5℃前後まで下がります。国宝松本城の城内見学は土足厳禁でスリッパでの見学となるため、厚手の靴下を着用し、暖かいダウンジャケットと手袋をご用意ください。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-teal-800" />
                夜間・早朝の路面凍結注意
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                11月下旬以降は降雪がなくても路面凍結が発生します。マイカー利用の場合は必ずスタッドレスタイヤを装着してください。松本駅から浅間温泉へは路線バスが頻繁に運行しているため、雪道運転を避けたい方は公共交通機関の利用がおすすめです。
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
                浅間温泉冬旅のよくある質問（FAQ）
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
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Related Winter Features & Hot Springs</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい長野・信州の冬名湯＆雪見露天特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の初雪や雪景色、極上グルメを味わう人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-nagano-suwa-onsen-lake-view-shinshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">長野・諏訪湖温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">諏訪湖一望の絶景露天風呂と信州牛・地酒蔵めぐりの宿</h3>
            </Link>
            <Link 
              href="/winter-nagano-shirahone-onsen-milky-snow-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">長野・白骨温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">3日入れば3年風邪ひかぬ乳白色にごり湯と雪見露天の宿</h3>
            </Link>
            <Link 
              href="/winter-nagano-hakuba-onsen-powder-snow-alps-shinshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">長野・白馬温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">白銀の北アルプス絶景とパウダースノー・信州牛ステーキの宿</h3>
            </Link>
            <Link 
              href="/winter-nagano-achimura-hirugami-starry-sky-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">長野・阿智村昼神温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">日本一の星空ナイトツアーと美肌名湯・南信州牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-gifu-gero-onsen-fireworks-hida-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">岐阜・下呂温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">冬の花火ミュージカルと日本三名泉・飛騨牛づくしの宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">全国の厳選温泉・旬旅特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-nagano-asama-onsen-matsumoto-castle-snow-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
