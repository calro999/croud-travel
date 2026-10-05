import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, Fish
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月富山氷見温泉郷のひみ寒ぶりと雪化粧立山連峰】海越しの白銀絶景露天風呂・極上氷見牛＆寒ブリづくし会席の宿5選",
  description: "11月下旬から12月にかけて富山湾で水揚げのピークを迎える冬の味覚の王様「ひみ寒ぶり」と、海越しに白銀の3,000m級立山連峰を望む富山県・氷見温泉郷。冷え込んだ早朝に富山湾から立ち上る幻想的な「気嵐（けあらし）」、太古の化石海水を湛えた美肌と保温の強塩泉露天風呂、脂が乗った極上の寒ブリ刺身・ブリしゃぶ・ブリ大根、希少な黒毛和牛「氷見牛」のステーキを心ゆくまで堪能する名宿5選を徹底解説。",
  keywords: '氷見温泉 宿泊, 氷見 11月 12月, ひみ寒ぶり宣言, 寒ブリ ブリしゃぶ, 立山連峰 絶景, くつろぎの宿 うみあかり, 永芳閣, 磯はなび, イミグレ, 民宿 叶, 氷見牛, 富山 温泉 旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-toyama-himi-onsen-kanburi-tateyama-himi-beef-stay/",
  },
  openGraph: {
    title: "【11・12月富山氷見温泉郷のひみ寒ぶりと雪化粧立山連峰】海越しの白銀絶景露天風呂・極上氷見牛＆寒ブリづくし会席の宿5選",
    description: "11月下旬から12月にかけて富山湾で水揚げのピークを迎える冬の味覚の王様「ひみ寒ぶり」と、海越しに白銀の3,000m級立山連峰を望む富山県・氷見温泉郷。冷え込んだ早朝に富山湾から立ち上る幻想的な「気嵐（けあらし）」、太古の化石海水を湛えた美肌と保温の強塩泉露天風呂、脂が乗った極上の寒ブリ刺身・ブリしゃぶ・ブリ大根、希少な黒毛和牛「氷見牛」のステーキを心ゆくまで堪能する名宿5選を徹底解説。",
    url: 'https://croud-travel.com/winter-toyama-himi-onsen-kanburi-tateyama-himi-beef-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月富山氷見温泉郷のひみ寒ぶりと雪化粧立山連峰】海越しの白銀絶景露天風呂・極上氷見牛＆寒ブリづくし会席の宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月富山氷見温泉郷のひみ寒ぶりと雪化粧立山連峰】海越しの白銀絶景露天風呂・極上氷見牛＆寒ブリづくし会席の宿5選",
    description: "11月下旬から12月にかけて富山湾で水揚げのピークを迎える冬の味覚の王様「ひみ寒ぶり」と、海越しに白銀の3,000m級立山連峰を望む富山県・氷見温泉郷。冷え込んだ早朝に富山湾から立ち上る幻想的な「気嵐（けあらし）」、太古の化石海水を湛えた美肌と保温の強塩泉露天風呂、脂が乗った極上の寒ブリ刺身・ブリしゃぶ・ブリ大根、希少な黒毛和牛「氷見牛」のステーキを心ゆくまで堪能する名宿5選を徹底解説。",
    images: ['https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'],
  }
};

const faqList = [
  {
    "q": "氷見の『ひみ寒ぶり宣言』とは何ですか？いつからいつまで食べられますか？",
    "a": "「ひみ寒ぶり宣言」とは、富山湾の定置網で漁獲され、氷見漁港で競りにかけられたブリの中で、脂の乗り・形・重量（概ね6kg以上）などの厳しい品質基準を満たした最高級ブランドブリに対して、氷見魚ブランド対策協議会が出す公式の宣言です。例年11月下旬から12月上旬にかけて宣言が出され、翌年2月頃までが最も脂の乗った旬の時期となります。初冬の荒波（鰤起こしと呼ばれる雷）を経験した寒ブリは、背肉の引き締まったコリコリ感と腹身のとろける脂の甘みが絶品です。"
  },
  {
    "q": "富山湾越しに立山連峰が見える条件やおすすめの時期・時間帯は？",
    "a": "海越しに3,000m級の立山連峰が見える景観は、世界でも極めて珍しい自然の絶景です。最もくっきりと見える確率が高いのは、大気が乾燥して澄み渡る11月から2月にかけての冬季です。特に放射冷却で冷え込んだ、冬晴れの早朝（日の出直後から午前9時頃まで）がベストタイミング。冷たい空気によって海面から水蒸気が立ち上る「気嵐（けあらし）」が発生し、海上に雪化粧した立山連峰が浮かび上がる幻想的な光景に出会えます。"
  },
  {
    "q": "氷見温泉郷の泉質や特徴、効能について教えてください。",
    "a": "氷見温泉郷の温泉は、主に「ナトリウム・塩化物強塩温泉」です。太古に地中に閉じ込められた海水が地熱で温められて湧き出している「化石海水型温泉」で、塩分濃度が非常に高いのが特徴です。塩分が肌に膜を形成して汗の蒸発を防ぐため、抜群の保温効果を誇り、「熱の湯」「温まりの湯」と呼ばれています。冬の寒風で冷えた体を芯からポカポカに温め、神経痛や筋肉痛、冷え性、乾燥肌の改善に高い効果を発揮します。"
  },
  {
    "q": "冬の富山・氷見旅行での車運転や雪道対策は必要ですか？",
    "a": "11月下旬から12月にかけての氷見エリアは、初雪が降る時期を迎えます。平野部では積雪が少なくても、朝晩の路面凍結や、北陸道・能越道などの高速道路、峠道での降雪が考えられます。お車で訪れる場合は、11月下旬以降は必ずスタッドレスタイヤを装着してください。北陸新幹線を利用される場合は、「新高岡駅」からJR城端線・氷見線、または加越能バスの「わくライナー（特急バス）」を利用して氷見温泉街へスムーズにアクセスできます。"
  },
  {
    "q": "寒ブリ以外に冬の氷見で味わうべきご当地グルメは何ですか？",
    "a": "冬の氷見では、寒ブリのほかに「富山湾の宝石」と呼ばれる白えびや、冬に身がぎっしり詰まる紅ズワイガニが名物です。また、緑豊かな氷見の中山間地で清らかな水と澄んだ空気で育てられるブランド黒毛和牛「氷見牛（ひみぎゅう）」は、年間出荷頭数が少なく「幻の和牛」と呼ばれ、霜降りの甘みと芳醇な香りが絶品です。さらに、手延べ製法で作られるモチモチとした強いコシが魅力の「氷見うどん」も必食の郷土グルメです。"
  }
];

export default function HimiOnsenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-toyama-himi-onsen-kanburi-tateyama-himi-beef-stay#article",
        "headline": "【11・12月富山氷見温泉郷のひみ寒ぶりと雪化粧立山連峰】海越しの白銀絶景露天風呂・極上氷見牛＆寒ブリづくし会席の宿5選",
        "description": "11月下旬から12月にかけて富山湾で水揚げのピークを迎える冬の味覚の王様「ひみ寒ぶり」と、海越しに白銀の3,000m級立山連峰を望む富山県・氷見温泉郷。冷え込んだ早朝に富山湾から立ち上る幻想的な「気嵐（けあらし）」、太古の化石海水を湛えた美肌と保温の強塩泉露天風呂、脂が乗った極上の寒ブリ刺身・ブリしゃぶ・ブリ大根、希少な黒毛和牛「氷見牛」のステーキを心ゆくまで堪能する名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-28T00:00:00+09:00",
        "dateModified": "2026-09-28T00:00:00+09:00",
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
          "@id": "https://croud-travel.com/winter-toyama-himi-onsen-kanburi-tateyama-himi-beef-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-toyama-himi-onsen-kanburi-tateyama-himi-beef-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "氷見の『ひみ寒ぶり宣言』とは何ですか？いつからいつまで食べられますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「ひみ寒ぶり宣言」とは、富山湾の定置網で漁獲され、氷見漁港で競りにかけられたブリの中で、脂の乗り・形・重量（概ね6kg以上）などの厳しい品質基準を満たした最高級ブランドブリに対して、氷見魚ブランド対策協議会が出す公式の宣言です。例年11月下旬から12月上旬にかけて宣言が出され、翌年2月頃までが最も脂の乗った旬の時期となります。初冬の荒波（鰤起こしと呼ばれる雷）を経験した寒ブリは、背肉の引き締まったコリコリ感と腹身のとろける脂の甘みが絶品です。"
            }
          },
          {
            "@type": "Question",
            "name": "富山湾越しに立山連峰が見える条件やおすすめの時期・時間帯は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "海越しに3,000m級の立山連峰が見える景観は、世界でも極めて珍しい自然の絶景です。最もくっきりと見える確率が高いのは、大気が乾燥して澄み渡る11月から2月にかけての冬季です。特に放射冷却で冷え込んだ、冬晴れの早朝（日の出直後から午前9時頃まで）がベストタイミング。冷たい空気によって海面から水蒸気が立ち上る「気嵐（けあらし）」が発生し、海上に雪化粧した立山連峰が浮かび上がる幻想的な光景に出会えます。"
            }
          },
          {
            "@type": "Question",
            "name": "氷見温泉郷の泉質や特徴、効能について教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "氷見温泉郷の温泉は、主に「ナトリウム・塩化物強塩温泉」です。太古に地中に閉じ込められた海水が地熱で温められて湧き出している「化石海水型温泉」で、塩分濃度が非常に高いのが特徴です。塩分が肌に膜を形成して汗の蒸発を防ぐため、抜群の保温効果を誇り、「熱の湯」「温まりの湯」と呼ばれています。冬の寒風で冷えた体を芯からポカポカに温め、神経痛や筋肉痛、冷え性、乾燥肌の改善に高い効果を発揮します。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の富山・氷見旅行での車運転や雪道対策は必要ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "11月下旬から12月にかけての氷見エリアは、初雪が降る時期を迎えます。平野部では積雪が少なくても、朝晩の路面凍結や、北陸道・能越道などの高速道路、峠道での降雪が考えられます。お車で訪れる場合は、11月下旬以降は必ずスタッドレスタイヤを装着してください。北陸新幹線を利用される場合は、「新高岡駅」からJR城端線・氷見線、または加越能バスの「わくライナー（特急バス）」を利用して氷見温泉街へスムーズにアクセスできます。"
            }
          },
          {
            "@type": "Question",
            "name": "寒ブリ以外に冬の氷見で味わうべきご当地グルメは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "冬の氷見では、寒ブリのほかに「富山湾の宝石」と呼ばれる白えびや、冬に身がぎっしり詰まる紅ズワイガニが名物です。また、緑豊かな氷見の中山間地で清らかな水と澄んだ空気で育てられるブランド黒毛和牛「氷見牛（ひみぎゅう）」は、年間出荷頭数が少なく「幻の和牛」と呼ばれ、霜降りの甘みと芳醇な香りが絶品です。さらに、手延べ製法で作られるモチモチとした強いコシが魅力の「氷見うどん」も必食の郷土グルメです。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.com/winter-toyama-himi-onsen-kanburi-tateyama-himi-beef-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "氷見温泉郷　くつろぎの宿　うみあかり",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20589%2F20589.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "氷見温泉郷　魚巡りの宿　永芳閣（ＢＢＨホテルグループ）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29954%2F29954.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "雨晴温泉　磯はなび",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108675%2F108675.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "移り住みたくなる宿『イミグレ』",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F171911%2F171911.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "ブリと氷見牛の宿　ひみ栄和温泉元湯　民宿　叶",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108620%2F108620.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "氷見温泉郷　くつろぎの宿　うみあかり",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/20589/20589.jpg",
              rating: 4.41,
              reviews: 1855,
              price: "¥14,630〜",
              access: "ＪＲ氷見駅よりお車で約１５分／灘浦ＩＣより約3分／小杉ＩＣより約５０分",
              special: "朝夕に輝く富山湾の海や雄大な立山連峰の自然の景色の中で氷見の海の幸・山の幸を堪能。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20589%2F20589.html",
              story: "富山湾の波打ち際に佇み、雄大な海と立山連峰の絶景を心ゆくまで満喫できる海辺の名宿「くつろぎの宿 うみあかり」。宿の最大の誇りは、富山湾を一望する展望露天風呂。11月から12月にかけて澄み切った早朝、海から立ち昇る気嵐（けあらし）の向こうに、朝日に染まる純白の立山連峰が海上に浮かび上がる奇跡のパノラマが広がります。泉質はナトリウム・塩化物強塩泉で、海水の成分をたっぷり含んだ天然温泉が身体の芯までぽかぽかに温め、湯冷めを防ぎます。別棟の岩風呂「潮の香亭」など多彩な湯巡りも楽しめます。",
              roomTip: "オーシャンビューの和モダン客室または展望露天風呂付き特別室。窓一面に広がる富山湾の水平線と、海上に浮かぶ白銀の立山連峰を誰にも邪魔されず眺める贅沢。",
              gourmetTip: "11月下旬からの「ひみ寒ぶり宣言」に合わせて供される本格寒ブリ会席。とろける脂がのった寒ブリの刺身、黄金出汁にくぐらせるブリしゃぶ鍋、照り焼きやブリ大根など、氷見ならではの寒ブリ尽くしを堪能。",
              highlights: [
                "富山湾と立山連峰の絶景を望む海辺露天風呂＆太古の化石海水強塩泉",
                "早朝の海上に現れる神秘の気嵐（けあらし）と雪化粧した立山連峰",
                "「ひみ寒ぶり宣言」の脂が乗った寒ブリ刺身・ブリしゃぶ尽くし会席"
              ]
            },
            {
              id: 2,
              name: "氷見温泉郷　魚巡りの宿　永芳閣（ＢＢＨホテルグループ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/29954/29954.jpg",
              rating: 4.40,
              reviews: 1690,
              price: "¥8,200〜",
              access: "【ＪＲ】氷見線　氷見駅から車で１０分（無料送迎あり）/【車】北陸（東海北陸）自動車道⇒能越自動車道　氷見北ＩＣより５分",
              special: "北陸の富山を代表する、お魚処氷見の旅館。評判の魚料理と絶景の露天。海一望の客室。貸切風呂無料プランも",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29954%2F29954.html",
              story: "創業以来、魚屋直営ならではの圧倒的な鮮度と目利きを誇り、氷見の美味を極める温泉旅館「魚巡りの宿 永芳閣（えいほうかく）」。全客室が富山湾に面したオーシャンビュー設計で、初冬の日本海の雄大な景色と潮騒に包まれます。館内の展望大浴場と露天風呂からは、天候に恵まれれば雪化粧した立山連峰の稜線がくっきりと浮かび上がります。毎朝氷見漁港で競り落とされる最高級の寒ブリや紅ズワイガニ、白えびなど、富山湾の「天然の生簀（いけす）」から届く新鮮な魚介を惜しみなく使った会席料理は全国から集まる食通を唸らせています。",
              roomTip: "最上階フロアのプレミアム客室または露天風呂付き和洋室。朝の澄み切った海と雪山をベッドや湯船から一望でき、刻一刻と変化する富山湾の情景に癒やされます。",
              gourmetTip: "名物「寒ブリ会席」と富山湾の味覚三昧。寒ブリのトロ刺身、さっと出汁にくぐらせる贅沢なブリしゃぶ、氷見牛の陶板ステーキや富山名物白えびのかき揚げなど贅を尽くした膳。",
              highlights: [
                "創業以来の魚屋直営宿・全室オーシャンビュー＆富山湾の旬魚三昧",
                "毎朝氷見漁港の競りから直行する新鮮な寒ブリ・紅ズワイガニ・白えび",
                "料理人が腕を振るう寒ブリづくし膳と氷見牛ステーキの贅沢会席"
              ]
            },
            {
              id: 3,
              name: "雨晴温泉　磯はなび",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108675/108675.jpg",
              rating: 4.27,
              reviews: 1066,
              price: "¥10,450〜",
              access: "あいの風とやま鉄道高岡駅よりJR氷見線に乗換えてJR雨晴駅で下車（無料送迎有／要連絡）",
              special: "富山湾でとれた海の幸と北陸随一を誇る雨晴の絶景をお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108675%2F108675.html",
              story: "「日本の渚百選」に選ばれた名勝・雨晴海岸（あまはらしのかいがん）を見下ろす高台に堂々と建ち、富山随一の絶景パノラマを誇る「雨晴温泉 磯はなび」。海抜約60メートルの崖上に位置するため、露天風呂「白砂の湯」や大浴場からは、遮るもののない大パノラマで富山湾と義経岩、そして海越しにそびえる3,000m級の白銀立山連峰を一望できます。特に11月・12月の早朝、海面に靄が立ち込める気嵐と冠雪した立山の峰々が朝焼けに染まる瞬間は、息をのむほどの神々しさに満ちています。",
              roomTip: "海側上層階の「特別フロア」客室。パノラマウィンドウから広大な富山湾の水平線と立山連峰の雄姿を眼下に収め、贅沢なプライベート空間を満喫できます。",
              gourmetTip: "冬の富山湾の王様「寒ブリ」をメインにした会席料理。脂の乗ったブリしゃぶ小鍋、旬の寒ブリお造り、香ばしいカマ塩焼きに加えて、富山湾の紅ズワイガニや氷見牛料理を組み合わせた豪華会席。",
              highlights: [
                "海抜約60mの崖上から望む雨晴海岸と3,000m級白銀立山連峰のパノラマ",
                "源泉掛け流し展望露天「白砂の湯」から眺める冬の富山湾の朝焼け",
                "冬の富山湾の恵みを凝縮した寒ブリ会席と富山名産の白えび・地酒"
              ]
            },
            {
              id: 4,
              name: "移り住みたくなる宿『イミグレ』",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/171911/171911.jpg",
              rating: 4.52,
              reviews: 79,
              price: "¥10,390〜",
              access: "ＪＲ氷見駅よりお車にて約１０分。能越自動車道 氷見北ＩＣよりお車にて約５分、高岡ＩＣよりお車にて約２５分。",
              special: "イミグレは世界三大景観“海越しの立山連峰”を臨む山海の幸が絶品の海辺のホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F171911%2F171911.html",
              story: "氷見の美しい海岸沿いに誕生した、北欧テイストの洗練されたデザインと美食が融合する新感覚オーベルジュ「移り住みたくなる宿『イミグレ』」。従来の和風温泉旅館とは一線を画し、全客室の大きなピクチャーウィンドウから富山湾と初冬の雪景色が絵画のように広がります。敷地内にはプライベート感あふれるドームテントやウッドデッキがあり、澄み渡る初冬の星空を眺めることも可能。地元の極上食材をフレンチの技法で昇華させた創作ディナーは、ワインとのマリアージュとともに大人の冬旅を華やかに演出します。",
              roomTip: "オーシャンビューのデザイナーズツインまたはグランピングスイート。スタイリッシュな家具に囲まれながら、海から昇る初冬の朝日と立山連峰の絶景を優雅に鑑賞。",
              gourmetTip: "地元氷見の新鮮な寒ブリや魚介、氷見牛をフレンチの手法で美しく仕立てたコース料理。寒ブリのカルパッチョ、氷見牛のロースト、富山湾の魚介スープなど、見た目も華やかな極上ディナー。",
              highlights: [
                "北欧テイストの洗練オーベルジュ＆富山湾の寒ブリと氷見牛フレンチ",
                "ピクチャーウィンドウから富山湾を望む客室と初冬の澄んだ満天星空",
                "富山産ワインとともに味わう創作フレンチとオーシャンフロントの贅沢"
              ]
            },
            {
              id: 5,
              name: "ブリと氷見牛の宿　ひみ栄和温泉元湯　民宿　叶",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/108620/108620.jpg",
              rating: 4.53,
              reviews: 478,
              price: "¥15,180〜",
              access: "能越自動車道「氷見北IC」より車で約3分、加越能バス「ひみ阿尾の浦温泉」バス停から徒歩2分、氷見駅からタクシーで約７分　",
              special: "氷見牛と海の幸、ほんのり潮の香りの天然温泉の老舗民宿 〇「ひみ阿尾の浦温泉」バス停から徒歩2分",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108620%2F108620.html",
              story: "氷見漁港で水揚げされる本物の魚の旨さを知り尽くした店主が営む、美食自慢の隠れ家「ブリと氷見牛の宿 ひみ栄和温泉元湯 民宿 叶（かのう）」。宿の最大の魅力は、店主自らが市場で厳選して買い付ける最高品質の「ひみ寒ぶり」と、富山が誇る幻の黒毛和牛「氷見牛」を惜しみなく提供する料理のボリュームとクオリティ。さらに館内には希少な自家源泉を有し、茶褐色のモール泉系の塩化物泉が源泉掛け流しで注がれています。飾らない温かなおもてなしと、本物の氷見の美味を追求するリピーターが絶えない名宿です。",
              roomTip: "純和風の落ち着きある和室。畳の香りと潮騒の音に包まれながら、温泉街の喧騒から離れた静かな冬の夜をゆったりと過ごせます。",
              gourmetTip: "圧倒的なボリュームを誇る「ひみ寒ぶり＆氷見牛ダブル極上会席」。厚切りの寒ブリ刺身、大鍋のブリしゃぶ、ブリ大根、さらにA5ランク氷見牛の陶板焼きまで付く贅沢の極み。",
              highlights: [
                "希少な茶褐色自家源泉元湯＆店主が目利きする最高峰ひみ寒ぶりと氷見牛",
                "厚切り寒ブリ刺身・特製ブリしゃぶ鍋・A5氷見牛陶板焼きの圧倒的美味",
                "温泉ファンの評価も高い芯まで温まるモール系強塩泉の源泉風呂"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-cyan-950 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-slate-950">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85"
          alt="富山湾の海越しに浮かび上がる純白の立山連峰と気嵐の絶景"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/90 text-cyan-200 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-cyan-800/50">
            <Fish className="w-4 h-4 text-cyan-400" />
            <span>11月・12月開幕 旬の「ひみ寒ぶり宣言」と海越し雪化粧立山連峰の絶景</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月富山氷見温泉郷のひみ寒ぶりと雪化粧立山連峰】<br className="hidden sm:inline" />
            海越しの白銀絶景露天風呂・極上氷見牛＆寒ブリづくし会席の宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            富山湾を望む波打ち際で、海上に浮かぶ白銀の立山連峰に息をのむ。身体の芯まで温める強塩泉の名湯、脂が極限まで乗った本場「ひみ寒ぶり」の刺身とブリしゃぶ、幻の氷見牛を味わい尽くす冬の贅沢旅。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> 富山県氷見市・高岡市（雨晴海岸・氷見漁港周辺）</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">World Rare Miracle Landscape</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                海抜ゼロメートルから望む3,000m級の白銀立山。冬の富山湾が魅せる奇跡のパノラマ
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            能登半島の基部に位置し、穏やかな富山湾に面した富山県氷見市。ここから望む景観は、世界でもイタリアのベネチアから見るアルプス山脈など、地球上でわずか数カ所しか存在しない奇跡のパノラマとして知られています。広大な海抜ゼロメートルの青い海越しに、標高3,000m級の北アルプス・立山連峰が壁のように海上にそびえ立つ姿は、まさに息をのむ美しさです。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            この奇跡の絶景が最も鮮やかに現れるのが、大気が乾燥して澄み渡る11月から12月にかけての冬季です。北西の季節風が吹き、富山湾に「鰤起こし（ぶりおこし）」と呼ばれる激しい冬の雷が鳴り響くと、立山連峰は純白の雪を纏い、海辺には冷え込みによって水蒸気が立ち昇る「気嵐（けあらし）」が発生します。海面を白い霧が覆い、その上空に朝日に照らされた雪山が神々しく輝く情景は、訪れる旅人の心を強く揺さぶります。
          </p>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            そして初冬の氷見といえば、全国にその名を轟かせる「ひみ寒ぶり」の解禁です。富山湾の特殊な海底地形「藍瓶（あいがめ）」と定置網漁によって、傷ひとつつかずに水揚げされる脂の乗った最高峰のブリ。海を望む露天風呂で太古の塩化物泉に浸かり、とろける寒ブリと幻のブランド牛「氷見牛」に舌鼓を打つ贅沢な時間がここにあります。
          </p>
          
          <div className="bg-cyan-50/70 rounded-2xl p-5 border border-cyan-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-bold text-cyan-900 tracking-wider">立山連峰鑑賞のベストタイミング</span>
              <p className="text-xs sm:text-sm text-slate-700">
                11月〜12月の冬晴れの早朝（日の出〜午前9時頃）が最もくっきりと見られます。宿の海側客室や海辺露天風呂から、刻々と赤く染まる朝焼けの立山連峰を狙うのがおすすめです。
              </p>
            </div>
            <div className="shrink-0 bg-cyan-900 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm">
              海越し立山3,000m
            </div>
          </div>
        </section>

        {/* Section 2: Springs and Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Fossil Seawater Hot Spring & Gourmet</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                太古の化石海水が育む「温まりの湯」と、冬の味覚の頂点「ひみ寒ぶり＆氷見牛」
              </h2>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            氷見温泉郷の泉質は、約1500万年前の太古の海水が地層に閉じ込められて湧き出す「ナトリウム・塩化物強塩温泉」。塩分濃度が高いため浸透圧が高く、湯に入ると成分が身体の奥深くまで浸透します。皮膚に付着した塩分が汗の蒸発をピタリと防ぐため、入浴後も何時間もポカポカとした温もりが持続する「熱の湯」として親しまれています。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">ブランドの頂点 ひみ寒ぶり</span>
                <span className="text-xs bg-cyan-100 text-cyan-800 font-bold px-2 py-0.5 rounded">11月下旬解禁</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                6kg以上の厳選された極上ブリ。刺身のコリコリとした歯ごたえと甘い脂、出汁にサッと通すことで余分な脂が落ち旨味が凝縮する「ブリしゃぶ」は冬の至高の美味です。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">幻の黒毛和牛「氷見牛」</span>
                <span className="text-xs bg-cyan-100 text-cyan-800 font-bold px-2 py-0.5 rounded">肉質A4・A5</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                氷見の豊かな里山で手塩にかけて育てられる希少なブランド牛。上品な脂のサシときめ細かな赤身の旨味が調和し、ステーキや陶板焼きでその真価を発揮します。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900 text-base">化石海水強塩泉</span>
                <span className="text-xs bg-cyan-100 text-cyan-800 font-bold px-2 py-0.5 rounded">保温・保湿</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                海水のミネラルが凝縮した強塩泉。冬の乾燥した肌をしっとり潤し、末端の血行を促進して冷え性を改善。潮風を感じながら浸かる海辺露天風呂は格別の爽快感です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 2.5: 3 Reasons to Visit in Nov & Dec */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Seasonal Highlights</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の氷見温泉郷が旅人を魅了してやまない3つの決定的な理由
              </h2>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-900 text-white flex items-center justify-center text-xs">1</span>
                <span>冬の富山湾の王様「ひみ寒ぶり宣言」直後の最高潮の脂の乗り</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                北海道から日本海を南下してきたブリは、富山湾の冷たい荒波で鍛えられ、脂の乗りが最高潮に達します。「ひみ寒ぶり宣言」が出された直後の11月下旬〜12月は、まさに年間で最も美味しい初物寒ブリに出会える黄金期。刺身に醤油を弾くほどの極上の脂、出汁に数秒くぐらせることで甘みが花開くブリしゃぶなど、本場氷見でしか味わえない感動が待っています。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-900 text-white flex items-center justify-center text-xs">2</span>
                <span>初雪を纏った白銀の立山連峰と海面の気嵐が創り出す世界遺産級の絶景</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                雨晴海岸や氷見海岸から富山湾を挟んで望む立山連峰は、冬にこそ真骨頂を発揮します。11月中旬以降に初雪が積もり、白銀に輝く3,000m級の峰々が朝日に照らされる光景は息をのむ美しさ。さらに海水温と冷え込んだ大気との温度差で発生する「気嵐」が海面を包み、まるで雲海の上に雪山が浮かんでいるかのような幻想的なパノラマが広がります。
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-900 text-white flex items-center justify-center text-xs">3</span>
                <span>太古の化石海水強塩泉で楽しむ海辺のぬくもり露天風呂</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                日本海の寒風が吹き付ける初冬だからこそ、氷見の強塩泉の温まり効果が身体にしみわたります。湯船から富山湾の水平線を眺めながら波音を聞き、身体の奥底までじんわりと温める極上の湯浴み。塩分が肌に薄い膜を作るため、湯上がり後も暖房なしで過ごせるほど保温効果が持続し、旅の疲労をきれいに解消してくれます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: 5 Recommended Hotels */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Selected Luxury Inns</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              【11・12月】富山・氷見温泉郷の寒ぶりと海景を極める厳選宿5選
            </h2>
            <p className="text-sm text-slate-600">
              楽天トラベルの最新APIデータに基づき、富山湾と立山連峰の眺望、寒ブリと氷見牛の料理内容、源泉掛け流しの湯質、口コミ評価で選び抜いた5軒。
            </p>
          </div>

          <div className="space-y-8">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row"
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

                <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 hover:text-cyan-800 transition">
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                          {hotel.name}
                        </a>
                      </h3>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-cyan-700 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {hotel.story}
                    </p>

                    <div className="space-y-2 pt-1 border-t border-slate-100 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-cyan-900 bg-cyan-50 px-2 py-0.5 rounded shrink-0">客室の魅力</span>
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
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-700 shrink-0 mt-0.5" />
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
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-900 hover:bg-cyan-800 text-white text-xs sm:text-sm font-bold shadow transition group w-full sm:w-auto justify-center"
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

        {/* Section 3.5: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Recommended Itinerary</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の氷見を満喫する1泊2日寒ぶり＆絶景モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="border-l-2 border-cyan-900 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-cyan-900 text-white px-2 py-0.5 rounded">1日目 午後</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">新高岡駅到着〜雨晴海岸散策〜氷見温泉チェックイン</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                北陸新幹線・新高岡駅からJR氷見線またはレンタカーで雨晴海岸へ。海岸沿いの展望デッキから、義経岩と富山湾越しにそびえる雪化粧した立山連峰を鑑賞。道の駅「雨晴」で温かいコーヒーを楽しんだ後、海辺の温泉宿へチェックイン。富山湾の水平線を一望する展望露天風呂に浸かり、太古の化石海水強塩泉で身体の芯までポカポカに温まります。
              </p>
            </div>

            <div className="border-l-2 border-cyan-900 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-cyan-900 text-white px-2 py-0.5 rounded">1日目 夜</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">「ひみ寒ぶり尽くし会席」と極上氷見牛〜潮騒の夜</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                夕食は待望の「ひみ寒ぶり会席」。脂の乗った寒ブリのトロ刺身、さっと出汁にくぐらせる特製ブリしゃぶ、ブリ大根、カマの塩焼きを贅沢に食べ比べ。さらにA5ランク氷見牛の陶板焼きを合わせ、富山の銘酒「勝駒」や「満寿泉」の冷酒とともに至極の美食時間を堪能します。
              </p>
            </div>

            <div className="border-l-2 border-cyan-900 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-cyan-900 text-white px-2 py-0.5 rounded">2日目 早朝</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">富山湾の気嵐と立山連峰の朝焼け鑑賞〜朝風呂</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                日の出時刻に合わせて起床し、客室テラスや海辺露天風呂へ。冷え切った海面から立ち昇る神秘的な白い気嵐と、朝日に照らされて純白から黄金色へと輝く立山連峰のパノラマを鑑賞。朝風呂で再び強塩泉に浸かり、富山産コシヒカリと新鮮な焼き魚が並ぶ朝食をゆっくり味わいます。
              </p>
            </div>

            <div className="border-l-2 border-cyan-900 pl-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-cyan-900 text-white px-2 py-0.5 rounded">2日目 午前〜午後</span>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">ひみ番屋街散策〜名物氷見うどんランチとお土産選び</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                チェックアウト後は「氷見漁港場外市場 ひみ番屋街」へ。朝獲れの鮮魚や寒ブリの加工品、白えびせんべい、地酒を購入。お昼は伝統の手延べ製法で作られるコシの強い熱々の「氷見うどん」を味わい、充実感に満ちた北陸冬旅を締めくくります。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Travel Preparation */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <ThermometerSun className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Travel Preparation</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の気候・おすすめの服装・北陸冬道ドライブ対策
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-cyan-700" />
                <span>気温と服装のポイント</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                氷見の11月は最高気温15℃前後ですが、海からの北西風により体感温度は低くなります。12月に入ると最高気温は8℃前後、夜間や早朝は2℃〜0℃近くまで冷え込みます。海岸沿いは風が強いため、防風性のあるダウンジャケット、マフラー、手袋、耳当てなどの防寒小物が不可欠です。海辺散策の際は足元を冷やさない厚手の靴下と歩きやすい防水シューズが役立ちます。
              </p>
            </div>
            <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-700" />
                <span>冬道ドライブとアクセス</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                能越自動車道「氷見北IC」や「氷見IC」、国道160号線など主要幹線道路は消雪パイプや除雪体制が整っていますが、11月下旬以降は突然の降雪や早朝の凍結（ブラックアイスバーン）に注意が必要です。お車の場合はスタッドレスタイヤを必ず装着してください。公共交通機関利用の場合は、北陸新幹線・新高岡駅からJR氷見線または特急バス「わくライナー」の利用が便利です。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-cyan-100">
            <div className="p-2.5 rounded-2xl bg-cyan-50 text-cyan-800">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-800 uppercase tracking-widest">Traveler's Q&A</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                よくある質問（FAQ）と初冬の氷見温泉郷旅行アドバイス
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

        {/* Section 6: Internal Links */}
        <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Related Hokuriku & Winter Hotspring Features</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい北陸の冬名湯＆全国の雪見露天特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              越前ガニや加能ガニ、白銀の峡谷美など、北陸・中部の冬の絶景と美食を満喫する特集記事を多数公開中。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-toyama-unazuki-onsen-kurobe-snow-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">富山・宇奈月温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">宇奈月温泉 黒部峡谷の雪景色と名水透明美肌の湯・富山湾旬魚の宿</h3>
            </Link>
            <Link 
              href="/winter-ishikawa-yamanaka-onsen-kakusenkei-kano-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">石川・山中温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">山中温泉 鶴仙渓雪景色と極上加能ガニ会席・九谷焼器の宿</h3>
            </Link>
            <Link 
              href="/winter-fukui-awara-onsen-echizen-crab-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">福井・あわら温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">あわら温泉 越前ガニ黄色タグ尽くしと関西の奥座敷名湯の宿</h3>
            </Link>
            <Link 
              href="/winter-gifu-okuhida-onsen-yukimi-roten-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">岐阜・奥飛騨温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">奥飛騨温泉郷 北アルプス雪見野天風呂と飛騨牛朴葉味噌ステーキの宿</h3>
            </Link>
            <Link 
              href="/winter-niigata-tsukioka-onsen-emerald-bihada-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">新潟・月岡温泉</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">月岡温泉 エメラルドグリーンの含硫黄美肌湯と新潟地酒の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-cyan-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-cyan-200 transition">全国の厳選温泉・宿特集まとめを見る</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
