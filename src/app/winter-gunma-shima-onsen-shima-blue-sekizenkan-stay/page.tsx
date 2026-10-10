import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Mountain, Droplets
} from 'lucide-react';

export const metadata: Metadata = {
  title: '四万温泉で過ごす冬の旅（11・12月）！清流雪見露天！名宿5選',
  description: '11月から12月にかけて上州・群馬の奥座敷「四万温泉」は、四万川や奥四万湖が年間で最も澄み渡る奇跡のコバルトブルー「四万ブルー」を湛え。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '四万温泉 宿泊, 四万温泉 11月 12月, 積善館 四万温泉, 四万やまぐち館, 四万たむら, 柏屋旅館 四万, 豊島屋 四万温泉, 四万ブルー, 上州牛 すき焼き 宿, 群馬 温泉 冬旅',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-gunma-shima-onsen-shima-blue-sekizenkan-stay/"
  },
  openGraph: {
    title: '四万温泉で過ごす冬の旅（11・12月）！清流雪見露天！名宿5選',
    description: '11月から12月にかけて上州・群馬の奥座敷「四万温泉」は、四万川や奥四万湖が年間で最も澄み渡る奇跡のコバルトブルー「四万ブルー」を湛え。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-gunma-shima-onsen-shima-blue-sekizenkan-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の四万温泉と四万ブルーの渓谷美'
      }
    ]
  }
};

const faqList = [
  {
    "q": "四万温泉の11月・12月の気候や気温、積雪状況はどうですか？",
    "a": "群馬県北西部の山あいに位置する四万温泉（標高約650m〜750m）は、11月に入ると急速に冷え込みが進みます。11月上旬から中旬は最高気温が10〜14℃、最低気温は2〜5℃前後で、晩秋の澄み切った冷気の中で紅葉の落ち葉と四万ブルーの鮮やかな対比が楽しめます。11月下旬からは初雪が観測される年があり、12月に入ると最高気温5℃前後、朝晩は氷点下（-2〜-5℃）まで下がります。12月中旬以降は本格的な積雪期に入り、路面凍結や20〜40cm程度の積雪となる日が増えます。厚手のダウンコート、保温機能インナー、防滑性のあるスノーブーツや手袋・マフラーなどの万全の防寒具をご準備ください。"
  },
  {
    "q": "四万温泉の泉質の特徴と「四万の病を癒やす」と言われる理由は？",
    "a": "四万温泉は平安時代の延暦年間（788〜806年）、征夷大将軍・坂上田村麻呂が東征の折に入浴した伝説や、永延3年（989年）源頼光の家臣・碓氷貞光が夢枕で童子から「四万の病を癒やす霊泉を授ける」とのお告げを受け発見したという開湯伝説が残る名湯です。泉質は「ナトリウム・カルシウム-塩化物・硫酸塩温泉（低張性中性高温泉）。」。塩分が肌を包んで保温効果を高め、硫酸塩が肌のキメを整えて潤いを与えるため「日本三大美肌の湯」にも数えられます。さらに弱食塩泉の特性から、昔から「草津の上がり湯」として愛され、飲泉による慢性胃腸病の改善効果も医学的に広く認められています。"
  },
  {
    "q": "「四万ブルー」とは何ですか？11月・12月も見られますか？",
    "a": "「四万ブルー」とは、四万川やその上流にある奥四万湖（四万川ダム）の湖面に見られる、息をのむほど深いコバルトブルー・エメラルドグリーンの水色のことです。水中に含まれる微細なケイ酸やアロフェンというアルミニウムケイ酸塩粒子に太陽光の青い波長が散乱することと、極めて高い透明度によって生じます。秋から冬（11月〜12月）は降雨量が少なくなり水中のプランクトンも減少するため、年間を通じて透明度が最も高まる時期です。特に晴天の午前中から昼過ぎにかけて、初雪の白銀と澄み渡る群青色の水面が織りなす息をのむ絶景パノラマに出会えます。"
  },
  {
    "q": "東京方面からのアクセス方法と、冬道の運転・タイヤの注意点は？",
    "a": "公共交通機関を利用する場合、東京駅八重洲通りから四万温泉直行の高速バス「四万温泉号」（関越交通）が毎日運行しており、乗り換えなし約3時間30分で温泉街中心部に直着するため、冬道の運転が不安な方に最もおすすめです。電車の場合はJR上野駅から特急「草津・四万」で中之条駅まで約2時間、そこから路線バスで約40分です。自家用車で訪れる場合は関越自動車道・渋川伊香保ICから国道353号を経由して約60分ですが、11月下旬以降は峠道や日陰・橋梁部で路面凍結が発生するため、必ずスタッドレスタイヤ（またはタイヤチェーン携行）を装着してください。"
  },
  {
    "q": "四万温泉で味わうべき冬の味覚やご当地グルメは？",
    "a": "四万温泉の冬の味覚の主役は、群馬県が世界に誇る最高峰の黒毛和牛「上州牛」です。豊かな自然と清流で育まれた上州牛は、きめ細かなサシと赤身の凝縮した旨味が特徴で、冬のすき焼き、しゃぶしゃぶ、ステーキで至福の美味を誇ります。また、冬が最盛期となる甘みたっぷりの「下仁田ねぎ」、群馬特産の歯ごたえ豊かな「生芋こんにゃく」、四万川の清流で育つ「岩魚や山女魚の塩焼き」、具だくさんの郷土料理「おっきりこみ（幅広うどんの煮込み）」などが温泉街の旅館や食事処で楽しめます。"
  }
];

export default function ShimaOnsenWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-gunma-shima-onsen-shima-blue-sekizenkan-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-gunma-shima-onsen-shima-blue-sekizenkan-stay"
        },
        "headline": "【11・12月群馬・四万温泉の神秘の四万ブルーと千二百年霊泉】積善館の歴史情緒・上州牛会席＆清流雪見露天の宿5選",
        "description": "11月から12月にかけて上州・群馬の奥座敷「四万温泉」は、四万川や奥四万湖が年間で最も澄み渡る奇跡のコバルトブルー「四万ブルー」を湛え、渓谷の木々が晩秋の落葉から初雪の白銀へと移ろう幽玄の季節を迎えます。「四万の病を癒やす霊泉」として開湯1200年の歴史を誇る名湯は、胃腸病や美肌に効能高い弱食塩・硫酸塩泉。日本最古の木造湯宿建築として名高い積善館をはじめ、四万川の渓流沿いに佇む自家源泉掛け流しの名旅館、甘みあふれる群馬の特選上州牛や冬の旬菜会席を堪能する極上宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "T06:00:00+09:00",
        "dateModified": "T06:00:00+09:00",
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
          "name": "Croud Travel 上州名湯・渓谷紀行取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-gunma-shima-onsen-shima-blue-sekizenkan-stay#breadcrumb",
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
            "name": "群馬・四万温泉 神秘の四万ブルーと積善館・上州牛の宿",
            "item": "https://croud-travel.pages.dev/winter-gunma-shima-onsen-shima-blue-sekizenkan-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-gunma-shima-onsen-shima-blue-sekizenkan-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "四万温泉の11月・12月の気候や気温、積雪状況はどうですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "群馬県北西部の山あいに位置する四万温泉（標高約650m〜750m）は、11月に入ると急速に冷え込みが進みます。11月上旬から中旬は最高気温が10〜14℃、最低気温は2〜5℃前後で、晩秋の澄み切った冷気の中で紅葉の落ち葉と四万ブルーの鮮やかな対比が楽しめます。11月下旬からは初雪が観測される年があり、12月に入ると最高気温5℃前後、朝晩は氷点下（-2〜-5℃）まで下がります。12月中旬以降は本格的な積雪期に入り、路面凍結や20〜40cm程度の積雪となる日が増えます。厚手のダウンコート、保温機能インナー、防滑性のあるスノーブーツや手袋・マフラーなどの万全の防寒具をご準備ください。"
            }
          },
          {
            "@type": "Question",
            "name": "四万温泉の泉質の特徴と「四万の病を癒やす」と言われる理由は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "四万温泉は平安時代の延暦年間（788〜806年）、征夷大将軍・坂上田村麻呂が東征の折に入浴した伝説や、永延3年（989年）源頼光の家臣・碓氷貞光が夢枕で童子から「四万の病を癒やす霊泉を授ける」とのお告げを受け発見したという開湯伝説が残る名湯です。泉質は「ナトリウム・カルシウム-塩化物・硫酸塩温泉（低張性中性高温泉）。」。塩分が肌を包んで保温効果を高め、硫酸塩が肌のキメを整えて潤いを与えるため「日本三大美肌の湯」にも数えられます。さらに弱食塩泉の特性から、昔から「草津の上がり湯」として愛され、飲泉による慢性胃腸病の改善効果も医学的に広く認められています。"
            }
          },
          {
            "@type": "Question",
            "name": "「四万ブルー」とは何ですか？11月・12月も見られますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「四万ブルー」とは、四万川やその上流にある奥四万湖（四万川ダム）の湖面に見られる、息をのむほど深いコバルトブルー・エメラルドグリーンの水色のことです。水中に含まれる微細なケイ酸やアロフェンというアルミニウムケイ酸塩粒子に太陽光の青い波長が散乱することと、極めて高い透明度によって生じます。秋から冬（11月〜12月）は降雨量が少なくなり水中のプランクトンも減少するため、年間を通じて透明度が最も高まる時期です。特に晴天の午前中から昼過ぎにかけて、初雪の白銀と澄み渡る群青色の水面が織りなす息をのむ絶景パノラマに出会えます。"
            }
          },
          {
            "@type": "Question",
            "name": "東京方面からのアクセス方法と、冬道の運転・タイヤの注意点は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "公共交通機関を利用する場合、東京駅八重洲通りから四万温泉直行の高速バス「四万温泉号」（関越交通）が毎日運行しており、乗り換えなし約3時間30分で温泉街中心部に直着するため、冬道の運転が不安な方に最もおすすめです。電車の場合はJR上野駅から特急「草津・四万」で中之条駅まで約2時間、そこから路線バスで約40分です。自家用車で訪れる場合は関越自動車道・渋川伊香保ICから国道353号を経由して約60分ですが、11月下旬以降は峠道や日陰・橋梁部で路面凍結が発生するため、必ずスタッドレスタイヤ（またはタイヤチェーン携行）を装着してください。"
            }
          },
          {
            "@type": "Question",
            "name": "四万温泉で味わうべき冬の味覚やご当地グルメは？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "四万温泉の冬の味覚の主役は、群馬県が世界に誇る最高峰の黒毛和牛「上州牛」です。豊かな自然と清流で育まれた上州牛は、きめ細かなサシと赤身の凝縮した旨味が特徴で、冬のすき焼き、しゃぶしゃぶ、ステーキで至福の美味を誇ります。また、冬が最盛期となる甘みたっぷりの「下仁田ねぎ」、群馬特産の歯ごたえ豊かな「生芋こんにゃく」、四万川の清流で育つ「岩魚や山女魚の塩焼き」、具だくさんの郷土料理「おっきりこみ（幅広うどんの煮込み）」などが温泉街の旅館や食事処で楽しめます。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "四万温泉　積善館　佳松亭・山荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76361/76361.jpg",
              rating: 4.68,
              reviews: 1215,
              price: "¥22,330〜",
              access: "中之条駅からバス４０分終点下車・車で２５分／渋川伊香保ＩＣ→Ｒ１７→Ｒ３５３で約３９ｋｍ６０分",
              special: "『歴史と浪漫・優雅と静寂』の旅館棟。国の重要文化財のある「山荘」・贅を尽くした「佳松亭」",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76361%2F76361.html",
              story: "元禄4年（1691年）創業、日本最古の木造湯宿建築として群馬県指定重要文化財に指定されている「四万温泉 積善館」。赤い欄干の慶雲橋を渡ると、まるで映画『千と千尋の神隠し』の幻想的な世界へタイムスリップしたかのような圧倒的な歴史美に包まれます。大正モダン様式が息づくアーチ窓の「元禄の湯」には、タイルの湯船が並び、自噴する極上の源泉が絶え間なく注がれます。静寂に包まれた松林の高台に佇む「佳松亭」と国の登録有形文化財「山荘」では、上州黒毛和牛をメインとした四季折々の本格会席と上質なプライベート空間が約束されます。",
              roomTip: "佳松亭の露天風呂付き客室または山荘の組子障子が美しい数寄屋造り客室。松林の雪景色を眺めながら、贅沢な静寂と歴史の重みに浸れます。",
              gourmetTip: "「特選上州牛の陶板焼き会席」。赤身とサシのバランスが絶妙な上州牛のジューシーな旨味と、群馬県産の原木椎茸や下仁田ねぎの深い甘みを堪能。",
              highlights: [
                "元禄4年創業・日本最古の木造湯宿建築と大正モダン重要文化財「元禄の湯」の神秘",
                "高台の佳松亭で味わう特選上州黒毛和牛陶板焼き会席と静寂に包まれた松林庭園",
                "映画の舞台を彷彿とさせる赤い欄干の慶雲橋とトンネルを抜けた先に広がる別世界"
              ]
            },
            {
              id: 2,
              name: "渓谷に佇む源泉湯宿　四万やまぐち館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5948/5948.jpg",
              rating: 4.42,
              reviews: 2125,
              price: "¥9,900〜",
              access: "高崎駅→中之条駅→関越交通バス「山口」下車0分。関越道→月夜野IC・渋川伊香保ICより約60分。",
              special: "四季の味覚を織り交ぜた美食と美肌の湯、女将の紙芝居に和む。檜香る渓流露天で過ごす癒しの湯宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5948%2F5948.html",
              story: "四万川の清流のすぐ水際、川のせせらぎが心地よく響く渓谷美に寄り添う老舗湯宿「四万やまぐち館」。毎分ドラム缶数本分という驚異的な自噴湧出量を誇り、四万川の岩肌と一体化した名物「お題目大露天風呂」や檜造りの「四万川の湯」では、初冬の澄んだ空気の中で湯けむりに包まれる至福の湯浴みが叶います。夕暮れ時には毎夜恒例の名物女将による紙芝居と民踊がロビーで披露され、昔ながらの心温まる湯治場の情緒と洗練されたもてなしが旅情を深く満たしてくれます。",
              roomTip: "四万川の清流を真下に見下ろす渓流沿い和室または露天風呂付き特別室。窓を開ければせせらぎの音と初冬の澄んだ風が心地よく吹き抜けます。",
              gourmetTip: "「上州ブランド肉と山渓の味覚会席」。地元吾妻郡の採れたて冬野菜、上州麦豚と上州牛の食べ比べ、川魚の塩焼きなど素朴で力強い味覚の数々。",
              highlights: [
                "四万川の清流にせり出す大迫力のお題目大露天風呂＆毎分ドラム缶数本分の驚異的自噴湯量",
                "名物女将による心温まる紙芝居と民踊の夕べ＆上州牛と上州麦豚の食べ比べ会席",
                "川のせせらぎが客室まで響く抜群のロケーション＆四万温泉街散策への好アクセス"
              ]
            },
            {
              id: 3,
              name: "四万温泉　温泉三昧の宿　四万たむら",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/32127/32127.jpg",
              rating: 4.37,
              reviews: 2293,
              price: "¥14,300〜",
              access: "ＪＲ吾妻線中之条駅／関越交通四万温泉行き終点下車３分／関越道渋川伊香保ＩＣより国道１７号・３５３号線経由約３９ｋｍ６０分",
              special: "創業500年　露天グランプリ群馬県第1位＆6つの温泉を楽しめる料理旅館",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32127%2F32127.html",
              story: "室町時代享徳年間（1452〜1455年）の開業以来、500年以上にわたり四万の湯を守り続けてきた歴史ある名旅館「四万温泉 温泉三昧の宿 四万たむら」。敷地内に7本の自家源泉を所有し、毎分1,600リットルもの天然温泉が完全放流式で注がれています。名物の茅葺き屋根が風情ある露天風呂「森のこだま」、滝を望む大浴場「甌穴の湯」、庭園を望む檜風呂など、館内だけで7つの異なる湯船をめぐる贅沢な温泉三昧が楽しめます。格調高い数寄屋造りの館内は、冬の凛とした空気と木の香りが調和しています。",
              roomTip: "水輪館または木涌館の純和風客室。広々とした和室の窓からは、初雪に白く化粧された庭園や山並みを一望できます。",
              gourmetTip: "「料亭旅館の本格会席料理」。厳選された上州牛のしゃぶしゃぶやすき焼き、日本海直送の鮮魚、契約農家から届く冬根菜を盛り込んだ繊細な日本料理。",
              highlights: [
                "室町時代から500年続く名門旅館＆敷地内7本の自家源泉から注ぐ名物「森のこだま」",
                "毎分1600Lの天然温泉を完全放流式で満喫＆幻の滝見風呂や檜風呂など7つの湯めぐり",
                "格調高い数寄屋建築と初冬の雪景色が織りなす日本の伝統美と至福のおもてなし"
              ]
            },
            {
              id: 4,
              name: "四万温泉　柏屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/2948/2948.jpg",
              rating: 4.58,
              reviews: 572,
              price: "¥21,000〜",
              access: "車：関越道渋川伊香保ICよりR17、353を四万温泉方面６０分。電車：中之条駅から四万温泉行バス３５分、清流の湯入口下車",
              special: "2つの露天風呂付き客室、3つの無料貸切風呂、チェックアウト12時。カップルや記念日におすすめの小宿",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2948%2F2948.html",
              story: "四万温泉の温泉街入口近く、四万川のほとりに佇むノスタルジックなモダン和風旅館「四万温泉 柏屋旅館」。全14室というプライベート感あふれる宿の自慢は、空いていれば何度でも無料で利用できる「月乃湯」「櫻乃湯」「楓乃湯」という3つの貸切露天風呂。四万川の清流と初冬の山景色を眺めながら、誰にも気兼ねなく良泉を独占できます。館内には心地よいジャズが流れ、ライブラリーやカフェ風ラウンジが備わり、現代の旅人が求める静かな寛ぎの時間が流れています。",
              roomTip: "テラス付き和モダン客室または露天風呂付き客室。シモンズ社製ベッドを備えた和洋室で、冬の川風を感じながら至福の読書時間を。",
              gourmetTip: "「柏屋流・和創作ディナー」。上州牛ステーキや地元産こんにゃく料理、彩り豊かな前菜盛り合わせ。朝食は板前手作りの和食か焼き立てパンの洋食を選べるのも好評。",
              highlights: [
                "3つの趣異なる無料貸切露天風呂＆ジャズが流れる和モダン空間とプライベートステイ",
                "板前手作りの和創作ディナーと上州牛ステーキ＆選べる朝食（和食膳または焼き立てパン）",
                "全14室の大人の隠れ家＆カップルや一人旅にも愛される快適な設備と洗練されたホスピタリティ"
              ]
            },
            {
              id: 5,
              name: "四万温泉　豊島屋",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/67434/67434.jpg",
              rating: 4.51,
              reviews: 992,
              price: "¥14,900〜",
              access: "ＪＲ吾妻線　中之条駅から関越交通バス「四万温泉行き」乗車→山口バス停下車、徒歩１分",
              special: "源泉100%の温泉をかけ流し！極上美肌湯と山・川・畑の幸をふんだん使った懐石料理が自慢の温泉旅館",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67434%2F67434.html",
              story: "四万川沿いの絶好のロケーションに建ち、すべての客室が渓流に面した隠れ家的な温泉宿「四万温泉 豊島屋（としまや）」。宿の源泉は敷地内の河原から自噴しており、一切の加水・加温を行わない新鮮な生源泉がそのまま大浴場や露天風呂に注がれています。湯口の温泉は飲泉可能で、胃腸の働きを整える効能を持ちます。四万の自然を知り尽くした料理長が腕を振るう「山渓料理」は、岩魚や山菜、地元吾妻の旬素材を丁寧に仕上げた逸品揃いです。",
              roomTip: "渓流露天風呂付き客室または清流を望む和洋室。目の前を流れる四万川のエメラルドグリーンと初雪のコントラストを独り占めできます。",
              gourmetTip: "「上州牛石焼きと岩魚の炭火焼き会席」。遠赤外線でジューシーに焼き上げる上州牛サーロインと、清流で育った川魚の香ばしい塩焼きが絶品。",
              highlights: [
                "敷地内河原から自噴する新鮮な生源泉の掛け流し＆四万川の清流美を望む全室渓流客室",
                "胃腸病に効く新鮮な飲泉処＆料理長が腕を振るう上州牛石焼きと岩魚の山渓炭火料理",
                "手つかずの自然に包まれた渓流露天風呂で心洗われる静寂の初冬湯浴み体験"
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
          alt="冬の四万温泉と四万ブルーの渓谷風景"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 text-cyan-300 text-xs sm:text-sm font-semibold">
            <Snowflake className="w-4 h-4" />
            11月・12月 冬の極上名湯特集｜群馬・上州四万温泉
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">群馬・四万温泉で過ごす冬の旅（11・12月）！<br className="hidden sm:inline" /> 神秘の四万ブルーと千二百年霊泉・積善館の歴史美＆上州牛の宿5選</h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            四万の病を癒やすと伝わる千二百年の霊泉郷。四万川が澄み切る初冬の奇跡のコバルトブルーを仰ぎ、重要文化財積善館のノスタルジーと特選上州牛の会席料理に心奪われる大人の冬湯治。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Droplets className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Shima Blue & 1200 Years Healing Springs</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                透明度極まる初冬の「四万ブルー」と、四万の病を癒やす名湯の歴史
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              上州・群馬の山深き渓谷、三国連山から流れ出る清流・四万川（しまがわ）に沿って細長く広がる四万温泉。11月から12月にかけてのこの地は、喧騒を離れた大人の旅人にふさわしい静謐と幻想の季節を迎えます。落葉によって見通しが開けた渓谷には、年間で最も水質が澄み切る「四万ブルー」の奇跡的なコバルトブルーが輝き、11月下旬を過ぎると山肌や木造の古い宿の屋根に純白の初雪が舞い降ります。
            </p>
            <p>
              四万温泉の開湯は、千二百年余り前の平安時代。坂上田村麻呂が東征の際に戦乱の疲れを癒やした伝説や、源頼光の家臣・碓氷貞光が読経の夜に童子から「四万（よんまん）の病を治す霊泉を授けよう。」と告げられたという伝説が語り継がれます。古くから「胃腸によい四万の湯、肌によい草津の上がり湯。」と称され、塩分と硫酸塩が絶妙なバランスで溶け込む泉質は、体の芯からポカポカと温め、肌をしっとりと滑らかに整えます。
            </p>
            <p>
              温泉街には元禄時代から続く日本最古の木造湯宿・積善館をはじめ、昭和初期の佇まいを残す木造旅館が軒を連ね、川のせせらぎと立ち上る白い湯けむりがノスタルジックな旅情を醸し出します。初雪に彩られた渓流露天風呂に身を沈め、群馬の大地が育んだ極上の「上州牛」や冬の根菜を味わう旅は、心身の深い再生をもたらしてくれます。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Eye className="w-5 h-5 text-cyan-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">初冬の四万ブルー</div>
              <div className="text-xs text-slate-600">不純物が減り年間で最も青く透き通る四万川と奥四万湖の奇跡の絶景。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Landmark className="w-5 h-5 text-cyan-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">元禄4年創業 積善館の情緒</div>
              <div className="text-xs text-slate-600">日本最古の木造湯宿と大正モダン元禄の湯。千と千尋の世界観に浸る。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Utensils className="w-5 h-5 text-cyan-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">特選上州牛＆下仁田ねぎ</div>
              <div className="text-xs text-slate-600">サシの甘みがとろける上州牛すき焼き・石焼きと、冬の上州旬菜の饗宴。</div>
            </div>
          </div>
        </section>

        {/* Section 2: Onsen Qualities */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Natural Healing Hot Spring Mechanism</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                「飲んで効く、浸かって美肌」四万温泉の泉質と効能メカニズム
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              四万温泉の主たる泉質は「ナトリウム・カルシウム-塩化物・硫酸塩温泉（低張性中性高温泉）。」。無色透明でさらりとした優しい肌触りながら、温泉分析表に裏打ちされた極めて豊かなミネラル成分を含んでいます。
            </p>
            <p>
              塩化物泉の成分（食塩）は入浴時に肌の表面に薄い塩分皮膜を形成し、汗の蒸発を防いで体温を逃がさない「熱の湯」効果を発揮します。冬の厳しい寒さの中でも湯冷めしにくく、冷え性や末梢血行障害の改善に絶大な威力を発揮します。同時に含まれる硫酸塩泉（芒硝・石膏）は肌の古い角質を軟化させて弾力を蘇らせる「傷の湯・美肌の湯」として作用。さらに天然の保湿成分であるメタケイ酸が100mg/kg以上と豊富に含まれ、入浴後は美容液を浸したようなキメの整った肌へと導かれます。
            </p>
            <p>
              また、四万温泉は「日本三大胃腸病の湯」としても全国的に知られており、温泉街の各所に設けられた飲泉所で源泉を飲むことができます。弱食塩泉の穏やかな塩分とミネラルが胃液の分泌を調整し、慢性胃炎や消化不良、便秘の解消に効果を発揮するとされています。
            </p>
          </div>
        </section>

        {/* Section 3: Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Joshu Winter Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の味覚を味わい尽くす｜特選上州牛・下仁田ねぎ・生芋こんにゃく
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              群馬県の大自然が育んだ冬の美食は、素朴でありながら奥深い滋味に満ち溢れています。その頂点に立つのが、澄んだ空気と清らかな伏流水で丹精込めて育てられた黒毛和牛「上州牛」です。脂身の融点が低く、熱を加えると甘く上品な香りが立ち上り、噛みしめるほどに赤身の濃厚な旨味が口いっぱいに広がります。冬の四万の宿では、すき焼きやしゃぶしゃぶ、陶板焼きなどで贅沢に提供されます。
            </p>
            <p>
              上州牛の相棒として欠かせないのが、冬に旬を迎える「下仁田ねぎ」。加熱するとトロリととろけるような滑らかな舌触りと濃厚な甘みが生まれ、特製割り下との相性は抜群です。さらに、生産量日本一を誇る群馬の「手練り生芋こんにゃく」や、四万川の清流で育った岩魚（イワナ）の塩焼き・骨酒、寒さで甘みを増した大根や里芋の煮物など、雪見露天風呂の後にいただく冬の会席膳は、旅人の五感を至福で満たします。
            </p>
          </div>
        </section>

        {/* Section 3.5: Model Course & Sightseeing */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Scenic Winter Route & Historic Walk</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の四万散策モデルコース｜奥四万湖の絶景ダムとノスタルジックな温泉街
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              四万温泉の冬の旅情を深く味わうなら、四万川の源流から温泉街へと下る散策ルートがおすすめです。まずは温泉街の最奥に位置する「奥四万湖（四万川ダム）」へ。ダム湖を囲む遊歩道からは、初雪をまとった山並みと、吸い込まれそうなほど深いコバルトブルーの水面が広がる圧巻の大パノラマが出迎えてくれます。冬の澄んだ午前中の光を浴びて輝く湖面は、言葉を失うほどの静寂と美しさを湛えています。
            </p>
            <p>
              続いて四万川の下流へ向かうと、群馬県指定天然記念物の「四万の甌穴群（おうけつぐん）」が現れます。何万年もの歳月をかけて清流の渦が川底の巨岩を削り出した丸い穴には、透明なエメラルドグリーンの水が満ち、自然の造形の神秘を感じさせます。
            </p>
            <p>
              散策の後半は、落合通りを中心としたレトロな温泉街へ。昔ながらのスマートボールや射的場が残り、昭和の温もりを残す路地には焼きまんじゅうの香ばしい匂いが漂います。「塩之湯飲泉所」に立ち寄って温かい源泉を一口味わい、胃腸を温めてから宿へとチェックインするのが、心も身体も癒やされる四万温泉の王道モデルコースです。
            </p>
          </div>
        </section>

        {/* Section 4: 5 Selected Inns */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">Featured Historic & Luxury Ryokan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              四万川の清流と歴史に抱かれる｜四万温泉の厳選名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              すべて楽天トラベルで高評価を獲得し、自家源泉や上州牛会席に強いこだわりを持つ本物の名宿だけを厳選。
            </p>
          </div>

          <div className="space-y-8">
            {hotels.map((h) => (
              <div
                key={h.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition duration-300 flex flex-col md:flex-row"
              >
                <div className="md:w-5/12 relative h-64 md:h-auto min-h-[260px] bg-slate-100 flex-shrink-0">
                  <Image
                    src={h.img}
                    alt={h.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/20">
                    <span className="text-cyan-400 font-extrabold">#{h.id}</span>
                    <span>四万の名宿</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    目安料金: {h.price}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                        {h.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-amber-50 text-amber-900 px-2.5 py-1 rounded-full text-xs font-semibold border border-amber-200/60">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span>{h.rating}</span>
                        <span className="text-slate-500 font-normal">({h.reviews}件)</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {h.story}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="p-3.5 rounded-2xl bg-cyan-50/60 border border-cyan-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-cyan-900 flex items-center gap-1.5">
                          <Landmark className="w-3.5 h-3.5 text-cyan-700" />
                          客室・滞在のこだわり
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.roomTip}
                        </p>
                      </div>
                      <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-amber-900 flex items-center gap-1.5">
                          <Utensils className="w-3.5 h-3.5 text-amber-700" />
                          旬の極上グルメ
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {h.gourmetTip}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
                        この宿のおすすめポイント
                      </div>
                      <ul className="space-y-1.5">
                        {h.highlights.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-700 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-[11px] text-slate-500">
                      <span>交通: {h.access}</span>
                    </div>
                    <a
                      href={h.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm hover:shadow transition group flex-shrink-0"
                    >
                      <span>楽天トラベルでプランを見る</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Travel Planning & Climate</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の四万冬旅の気温・服装と快適アクセスのポイント
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-cyan-800" />
                標高700mの初冬冷え込みと積雪対策
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                四万温泉は標高約700mの高地に位置するため、平地よりも気温が5〜8℃低くなります。11月下旬からは朝晩の気温が0℃を下回り、12月中旬以降は雪が舞う白銀の世界となります。散策には防風性の高いダウンジャケットやコート、滑りにくいソールを備えた防水スノーブーツ、マフラー、手袋が不可欠です。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-cyan-800" />
                直行バス「四万温泉号」と雪道ドライブの注意
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                東京駅八重洲通りから運行する高速バス「四万温泉号」を利用すれば、雪道運転の不安なく乗り換えなしで温泉街へ直行できます。自家用車で向かう場合は関越道・渋川伊香保ICより国道353号を経由しますが、11月下旬以降は日陰や橋梁の凍結に備え必ずスタッドレスタイヤを装着して安全運転を心がけてください。
              </p>
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
                群馬四万温泉冬旅のよくある質問（FAQ）
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
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Related Winter Features & Hot Springs</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい群馬・関東甲信越の冬名湯＆極上和牛特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の初雪や雪景色、上州牛やすき焼き、歴史ある名湯をめぐる人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-gunma-kusatsu-onsen-yubatake-joshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">群馬・草津温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">湯畑ライトアップと天下の名湯強酸性泉・上州牛すき焼きの宿</h3>
            </Link>
            <Link 
              href="/winter-gunma-ikaho-stone-steps-joshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">群馬・伊香保温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">365段の石段街と黄金の湯・白銀の湯・上州牛会席を満喫する宿</h3>
            </Link>
            <Link 
              href="/winter-gunma-minakami-onsen-tanigawa-yukimi-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">群馬・水上温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">谷川岳初雪パノラマと利根川渓流雪見露天・みなかみ旬会席の宿</h3>
            </Link>
            <Link 
              href="/winter-tochigi-nasu-onsen-shikanoyu-snow-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">栃木・那須温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">開湯千三百年鹿の湯白濁硫黄泉と那須黒毛和牛ステーキの宿</h3>
            </Link>
            <Link 
              href="/winter-nagano-yudanaka-onsen-snow-monkey-shinshu-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">長野・湯田中渋温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">地獄谷スノーモンキーと九つの外湯めぐり・信州牛すき焼きの宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">全国の厳選温泉・旬旅特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-gunma-shima-onsen-shima-blue-sekizenkan-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
