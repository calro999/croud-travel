import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, SunMedium, Palette
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月徳島・鳴門温泉の冬海峡絶景と激流が育む天然鳴門鯛】大塚国際美術館アート鑑賞・特選阿波牛＆鳴門大橋展望露天の宿5選",
  description: "11月から12月にかけて、四国の東の玄関口・徳島県鳴門市は、鳴門海峡を吹き抜ける心地よい冬の潮風と、世界三大潮流の一つが織りなす大迫力の「冬の渦潮」の雄姿が旅人を迎えます。激しい潮流に逆らって泳ぎ、骨に「鳴門骨」と呼ばれるコブができるほど鍛え上げられた「鳴門鯛（天然真鯛）」は、冬に越冬のための上質な脂を蓄え、一年で最も美味な旬を迎えます。滋味豊かな「鳴門わかめ」、すだちを添えた「阿波牛」「阿波尾鶏」の極上会席。さらに世界の名画を原寸大で再現した「大塚国際美術館」のゆったりとした冬のアート鑑賞と、鳴門海峡や大鳴門橋を一望する海辺の温泉露天風呂に癒やされる厳選宿5選を徹底解説。",
  keywords: '鳴門温泉 宿泊, 鳴門 温泉 11月 12月, アオアヲナルトリゾート, モアナコースト, 鳴門グランドホテル海月, ベイリゾートホテル鳴門海月, 鯛丸海月, 鳴門鯛 宿, 大塚国際美術館 宿泊, 鳴門海峡 露天風呂',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay/"
  },
  openGraph: {
    title: "【11・12月徳島・鳴門温泉の冬海峡絶景と激流が育む天然鳴門鯛】大塚国際美術館アート鑑賞・特選阿波牛＆鳴門大橋展望露天の宿5選",
    description: "11月から12月にかけて、四国の東の玄関口・徳島県鳴門市は、鳴門海峡を吹き抜ける心地よい冬の潮風と、世界三大潮流の一つが織りなす大迫力の「冬の渦潮」の雄姿が旅人を迎えます。激しい潮流に逆らって泳ぎ、骨に「鳴門骨」と呼ばれるコブができるほど鍛え上げられた「鳴門鯛（天然真鯛）」は、冬に越冬のための上質な脂を蓄え、一年で最も美味な旬を迎えます。滋味豊かな「鳴門わかめ」、すだちを添えた「阿波牛」「阿波尾鶏」の極上会席。さらに世界の名画を原寸大で再現した「大塚国際美術館」のゆったりとした冬のアート鑑賞と、鳴門海峡や大鳴門橋を一望する海辺の温泉露天風呂に癒やされる厳選宿5選を徹底解説。",
    url: 'https://croud-travel.com/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '初冬の鳴門海峡と大鳴門橋を望む絶景露天風呂'
      }
    ]
  }
};

const faqList = [
  {
    "q": "鳴門温泉の11月・12月の気候や気温、渦潮の見頃はどうですか？",
    "a": "徳島県鳴門市は瀬戸内海式気候に属しており、冬でも降水量が少なく晴天の日が多い温暖な地域です。11月の最高気温は16〜18℃、最低気温は8〜11℃で、日中は快適な観光日和となります。12月に入ると最高気温は11〜13℃、最低気温は3〜6℃まで下がります。鳴門海峡は海風が吹き抜けるため、体感温度は低くなりますので風を通さないコートやストールが必須です。冬の「渦潮」は、大潮の日の満潮・干潮の時刻前後（1日2回）が最も大きくなります。冬は大気の透明度が高いため、渦の道（大鳴門橋の遊歩道）や観潮船から渦巻く激流の迫力を一段と鮮明に鑑賞できます。"
  },
  {
    "q": "冬の「鳴門鯛（なるとたい）」はなぜ他の地域の真鯛より美味しいのですか？",
    "a": "鳴門海峡は日本一、世界でも第3位の潮流速度（最大時速20km）を誇る激流の海です。鳴門鯛はこの激しい海流の中で泳ぎ続けるため、筋肉が極限まで鍛え上げられ、骨の一部に「鳴門骨（なるとぼね）」と呼ばれるコブのような肥大が生じるほどです。初冬の11月・12月は、真鯛が厳しい冬を乗り越えるために栄養を蓄える時期であり、きめ細かな脂が全身に回って身の締まりと旨味が最高潮に達します。コリコリとした心地よい歯ごたえと、噛むほどに溢れる濃厚な甘みは、一度味わうと真鯛の概念が変わるほどの逸品です。"
  },
  {
    "q": "鳴門温泉の泉質と大鳴門橋・海峡の眺望露天風呂の魅力は？",
    "a": "鳴門温泉の泉質は主に「ナトリウム-塩化物温泉（中性〜弱アルカリ性高張性温泉）」。海に近いロケーションから湧出するため、豊富な塩分を含んでおり、入浴すると塩分が皮膚をコーティングして体温の発散を防ぎます。湯上がり後は何時間もポカポカとした温もりが続き、冬の冷え性や疲労回復、筋肉痛に優れた効果を発揮します。また、多くの旅館の露天風呂からは大鳴門橋や瀬戸内海、鳴門海峡が一望でき、夕方には海と空が茜色に染まる夕景、夜には大鳴門橋の優美な夜景を眺めながら潮風を感じる極上の湯浴みが楽しめます。"
  },
  {
    "q": "関西（大阪・神戸）や四国各地からのアクセス方法は？",
    "a": "神戸淡路鳴門自動車道（明石海峡大橋・大鳴門橋）を経由するアクセスが抜群に優れています。高速バスを利用すれば、JR三ノ宮駅から鳴門公園口または鳴門高速バスターミナルまで約1時間20分、JR大阪駅から約2時間で直通アクセス可能です。車の場合は、阪神高速・明石海峡大橋経由で神戸から約1時間15分、大阪から約1時間45分。鳴門北ICを降りて約2〜5分で温泉街に到着します。鳴門阿波おどり空港からも車で約20分と近く、東京方面からの航空機アクセスも非常にスムーズです。"
  },
  {
    "q": "11月・12月に鳴門で必見の周辺観光スポット「大塚国際美術館」の楽しみ方は？",
    "a": "世界26カ国の西洋名画1,000点以上を特殊技術で原寸大の陶板で再現した世界初の陶板名画美術館「大塚国際美術館」は、鳴門温泉から車でわずか3〜5分の距離にあります。システィーナ礼拝堂の完全再現空間やモネの「大睡蓮」、ダ・ヴィンチの「最後の晩餐」、フェルメールの「真珠の耳飾りの少女」などを間近で鑑賞できます。陶板なので絵画に触れることも写真撮影も可能。秋・冬は夏休み期間に比べて館内が落ち着いており、鑑賞ルート約4kmの壮大なアートの世界を心ゆくまでじっくり堪能できるベストシーズンです。また、海上45mからガラス床越しに渦潮を覗く「渦の道」も必見です。"
  }
];

export default function TokushimaNarutoWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.com/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay"
        },
        "headline": "【11・12月徳島・鳴門温泉の冬海峡絶景と激流が育む天然鳴門鯛】大塚国際美術館アート鑑賞・特選阿波牛＆鳴門大橋展望露天の宿5選",
        "description": "11月から12月にかけて、四国の東の玄関口・徳島県鳴門市は、鳴門海峡を吹き抜ける心地よい冬の潮風と、世界三大潮流の一つが織りなす大迫力の「冬の渦潮」の雄姿が旅人を迎えます。激しい潮流に逆らって泳ぎ、骨に「鳴門骨」と呼ばれるコブができるほど鍛え上げられた「鳴門鯛（天然真鯛）」は、冬に越冬のための上質な脂を蓄え、一年で最も美味な旬を迎えます。滋味豊かな「鳴門わかめ」、すだちを添えた「阿波牛」「阿波尾鶏」の極上会席。さらに世界の名画を原寸大で再現した「大塚国際美術館」のゆったりとした冬のアート鑑賞と、鳴門海峡や大鳴門橋を一望する海辺の温泉露天風呂に癒やされる厳選宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "2026-09-28T08:00:00+09:00",
        "dateModified": "2026-09-28T08:00:00+09:00",
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
          "name": "Croud Travel 鳴門海峡絶景・真鯛美食取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.com/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay#breadcrumb",
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
            "name": "徳島・鳴門温泉 冬海峡絶景と天然鳴門鯛・大塚国際美術館アートの宿",
            "item": "https://croud-travel.com/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-tokushima-naruto-onsen-uzushio-naruto-tai-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "鳴門温泉の11月・12月の気候や気温、渦潮の見頃はどうですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "徳島県鳴門市は瀬戸内海式気候に属しており、冬でも降水量が少なく晴天の日が多い温暖な地域です。11月の最高気温は16〜18℃、最低気温は8〜11℃で、日中は快適な観光日和となります。12月に入ると最高気温は11〜13℃、最低気温は3〜6℃まで下がります。鳴門海峡は海風が吹き抜けるため、体感温度は低くなりますので風を通さないコートやストールが必須です。冬の「渦潮」は、大潮の日の満潮・干潮の時刻前後（1日2回）が最も大きくなります。冬は大気の透明度が高いため、渦の道（大鳴門橋の遊歩道）や観潮船から渦巻く激流の迫力を一段と鮮明に鑑賞できます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の「鳴門鯛（なるとたい）」はなぜ他の地域の真鯛より美味しいのですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "鳴門海峡は日本一、世界でも第3位の潮流速度（最大時速20km）を誇る激流の海です。鳴門鯛はこの激しい海流の中で泳ぎ続けるため、筋肉が極限まで鍛え上げられ、骨の一部に「鳴門骨（なるとぼね）」と呼ばれるコブのような肥大が生じるほどです。初冬の11月・12月は、真鯛が厳しい冬を乗り越えるために栄養を蓄える時期であり、きめ細かな脂が全身に回って身の締まりと旨味が最高潮に達します。コリコリとした心地よい歯ごたえと、噛むほどに溢れる濃厚な甘みは、一度味わうと真鯛の概念が変わるほどの逸品です。"
            }
          },
          {
            "@type": "Question",
            "name": "鳴門温泉の泉質と大鳴門橋・海峡の眺望露天風呂の魅力は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "鳴門温泉の泉質は主に「ナトリウム-塩化物温泉（中性〜弱アルカリ性高張性温泉）」。海に近いロケーションから湧出するため、豊富な塩分を含んでおり、入浴すると塩分が皮膚をコーティングして体温の発散を防ぎます。湯上がり後は何時間もポカポカとした温もりが続き、冬の冷え性や疲労回復、筋肉痛に優れた効果を発揮します。また、多くの旅館の露天風呂からは大鳴門橋や瀬戸内海、鳴門海峡が一望でき、夕方には海と空が茜色に染まる夕景、夜には大鳴門橋の優美な夜景を眺めながら潮風を感じる極上の湯浴みが楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "関西（大阪・神戸）や四国各地からのアクセス方法は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "神戸淡路鳴門自動車道（明石海峡大橋・大鳴門橋）を経由するアクセスが抜群に優れています。高速バスを利用すれば、JR三ノ宮駅から鳴門公園口または鳴門高速バスターミナルまで約1時間20分、JR大阪駅から約2時間で直通アクセス可能です。車の場合は、阪神高速・明石海峡大橋経由で神戸から約1時間15分、大阪から約1時間45分。鳴門北ICを降りて約2〜5分で温泉街に到着します。鳴門阿波おどり空港からも車で約20分と近く、東京方面からの航空機アクセスも非常にスムーズです。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月に鳴門で必見の周辺観光スポット「大塚国際美術館」の楽しみ方は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "世界26カ国の西洋名画1,000点以上を特殊技術で原寸大の陶板で再現した世界初の陶板名画美術館「大塚国際美術館」は、鳴門温泉から車でわずか3〜5分の距離にあります。システィーナ礼拝堂の完全再現空間やモネの「大睡蓮」、ダ・ヴィンチの「最後の晩餐」、フェルメールの「真珠の耳飾りの少女」などを間近で鑑賞できます。陶板なので絵画に触れることも写真撮影も可能。秋・冬は夏休み期間に比べて館内が落ち着いており、鑑賞ルート約4kmの壮大なアートの世界を心ゆくまでじっくり堪能できるベストシーズンです。また、海上45mからガラス床越しに渦潮を覗く「渦の道」も必見です。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "アオアヲナルトリゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/6123/6123.jpg",
              rating: 4.46,
              reviews: 4297,
              price: "¥16,500〜",
              access: "神戸淡路鳴門自動車道　鳴門北ＩＣより１分　ＪＲ鳴門駅より車で約１０分　大塚美術館まで車で3分",
              special: "温泉もお部屋もオーシャンビュー！瀬戸内海国立公園内に位置する南欧風リゾートホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6123%2F6123.html",
              story: "瀬戸内海国立公園内、鳴門海峡を一望する広大な海岸沿いに建つ南欧風の極上リゾート「アオアヲ ナルト リゾート」。全室オーシャンビューの開放的な客室からは、11月・12月の朝日にきらめく瀬戸内海と大鳴門橋の優美な姿が広がります。館内には鳴門温泉を引き湯した展望風呂や、海辺の露天風呂など多彩な湯処を完備。夕食は鳴門海峡の激流で育った天然真鯛の姿造りや、阿波牛・阿波尾鶏を炭火で焼き上げる贅沢バイキング、または落ち着いたフレンチや和会席から選択可能。大塚国際美術館への無料送迎バスも運行し、アートと海峡リゾートの滞在を優雅に満喫できます。",
              roomTip: "鳴門海峡をバルコニーから見渡すオーシャンフロントルームまたはスイート。波音をBGMに、刻々と色彩を変える海と空のドラマを独占。",
              gourmetTip: "「阿波郷土料理バイキングまたは鳴門鯛尽くし会席」。身が引き締まった鳴門鯛の刺身・鯛飯・鯛しゃぶ、すだち香る阿波牛ステーキ。",
              highlights: [
                "南欧風リゾートの開放感＆全室オーシャンビューと大鳴門橋・朝日に輝く展望温泉露天風呂",
                "鳴門鯛刺身や阿波牛の贅沢バイキング＆大塚国際美術館への無料送迎バス運行の充実設備",
                "鳴門北ICから車で2分の快適アクセス＆家族連れからカップルまで誰もが満足するリゾート"
              ]
            },
            {
              id: 2,
              name: "リゾートホテル　モアナコースト",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/7769/7769.jpg",
              rating: 4.65,
              reviews: 791,
              price: "¥18,040〜",
              access: "大阪から車で２時間。鳴門北ＩＣより車で３分・高速鳴門バス乗り場より５分・JR鳴門駅より10分（無料送迎有※要予約）",
              special: "メゾネットスタイルのリゾートホテル。本格イタリア家庭料理と、客室専用ジャグジーで鳴門リゾートを満喫♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7769%2F7769.html",
              story: "鳴門の海辺に広がる約3,000坪の敷地に、全室スイートルーム＆客室専用露天風呂・ジャグジーを備えた大人の極上隠れ家リゾート「リゾートホテル モアナコースト」。本館および離れ「ヴィラ・ベル・フォレスト」のすべての部屋に専用露天風呂が備わり、誰にも邪魔されない至高のプライベートタイムが約束されています。自家農園のオーガニック野菜と鳴門海峡の天然魚介、阿波牛をふんだんに取り入れた本格イタリアンコース「リストランテ・フィッシュボーン」は四国有数の名店として絶賛され、記念日や大人の贅沢旅にふさわしい至福の一夜を演出します。",
              roomTip: "全室客室露天風呂・ジャグジー付きのメゾネットスイート。屋上テラスから満天の星空と初冬の澄んだ海を眺め、優雅なバスタイムを満喫。",
              gourmetTip: "「モアナ特選・冬の鳴門海鮮＆阿波牛イタリアンディナー」。鳴門鯛のカルパッチョ、自家製手打ちパスタ、阿波牛フィレ肉のロースト、絶品ドルチェ。",
              highlights: [
                "全室客室専用露天風呂付きメゾネットスイート＆自家農園野菜と鳴門鯛・阿波牛の絶品イタリアン",
                "約3,000坪にわずか数室の大人の隠れ家＆記念日や夫婦の特別な旅に愛される上質空間",
                "四国有数のイタリアン名店リストランテ・フィッシュボーン＆厳選ワインのペアリング"
              ]
            },
            {
              id: 3,
              name: "鳴門グランドホテル海月",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/149301/149301.jpg",
              rating: 4.45,
              reviews: 2255,
              price: "¥6,600〜",
              access: "神戸淡路鳴門自動車道：鳴門北ＩＣより２分。ＪＲ鳴門駅より車で約１０分。大塚国際美術館まで車で約２分。",
              special: "アワード受賞！徳島の幸満載の会席料理が食べ放題のブッフェ！鳴門海峡の絶景！大浴場には露天風呂も",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149301%2F149301.html",
              story: "鳴門海峡と大鳴門橋を眼下に望む小高い丘の上に建ち、圧倒的なパノラマビューで訪れる人々を魅了する「鳴門グランドホテル海月」。海にせり出すように造られた展望大浴場や露天風呂からは、11月・12月の澄み切った大気の中に広がる大鳴門橋のシルエットと、渦巻く海峡の潮の流れを一望できます。夕食は鳴門海峡の海の幸をふんだんに使った贅沢ビュッフェで、名物鳴門鯛の舟盛りや鯛しゃぶ、徳島ラーメン、阿波の郷土料理をオープンキッチンから出来立てで堪能。コストパフォーマンスの高さでも圧倒的な人気を誇ります。",
              roomTip: "鳴門海峡パノラマ和洋室。大きな窓一面に広がる大鳴門橋のライトアップや、朝日に輝く海峡の雄大な眺めを堪能。",
              gourmetTip: "「鳴門鯛＆阿波味覚ビュッフェ」。脂の乗った鳴門鯛の刺身食べ放題、鯛のあら炊き、揚げたての蓮根天ぷら、阿波牛の鉄板焼き。",
              highlights: [
                "鳴門海峡を見下ろす高台パノラマ絶景露天＆名物鳴門鯛刺身食べ放題と阿波郷土バイキング",
                "大鳴門橋ライトアップを望む客室＆オープンキッチンで提供される出来立て海鮮ビュッフェ",
                "無料送迎バスや充実したアメニティ＆三世代旅行でも気兼ねなく楽しめる広々和洋室"
              ]
            },
            {
              id: 4,
              name: "ベイリゾートホテル　鳴門海月",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17766/17766.jpg",
              rating: 4.45,
              reviews: 3136,
              price: "¥6,000〜",
              access: "高速道路　鳴門北ICより車で６分。高速バス鳴門公園口より徒歩10分。大塚美術館バス停などからシャトルバス送迎有。要予約",
              special: "部屋食で鳴門の会席を♪鳴門うず潮に一番近い景色に感動の旅館",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17766%2F17766.html",
              story: "大鳴門橋に最も近い絶好のロケーションに位置し、客室や露天風呂の目の前に鳴門海峡の大迫力が迫る「ベイリゾートホテル 鳴門海月」。鳴門温泉を湛えた展望風呂からは、渦潮が発生する海峡の白波と行き交う船の姿をダイナミックに眺めることができます。大塚国際美術館まで車でわずか3分という観光利便性の高さも魅力。夕食は創業以来の伝統を受け継ぐ鳴門鯛のフルコース会席で、姿造り、鯛の宝楽焼き、鯛釜飯など、激流に鍛えられた天然真鯛の引き締まった身の旨味を余すところなく味わい尽くせます。",
              roomTip: "大鳴門橋真正面のオーシャンフロント客室。窓の外に広がる海峡の迫力ある潮の流れと大橋のパノラマを独占。",
              gourmetTip: "「名物・鳴門鯛会席」。激流が生んだ鳴門鯛の姿造り、香ばしい鯛の宝楽焼き、鯛荒炊き、出汁が染み渡る鯛釜飯。",
              highlights: [
                "大鳴門橋に最も近い絶景ロケーション＆創業伝統の鳴門鯛姿造り・宝楽焼きフルコース会席",
                "大塚国際美術館まで車で3分の好アクセス＆海峡の白波と行き交う船を目前にする展望大浴場",
                "渦の道や千畳敷展望台へ徒歩圏内＆鳴門の観光名所を存分に満喫できる絶好のロケーション"
              ]
            },
            {
              id: 5,
              name: "鳴門海月別亭　シーサイドホテル鯛丸海月",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/151154/151154.jpg",
              rating: 4.44,
              reviews: 1263,
              price: "¥4,900〜",
              access: "高速道路　鳴門北ICより車で約２分♪大塚国際美術館前バス停より徒歩約３分・高速鳴門バス停・JR鳴門駅より送迎バスあり",
              special: "大塚国際美術館徒歩約３分！鳴門海峡のオーシャンビュー。鳴門鯛の会席や鳴門グランドホテルのバイキング",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151154%2F151154.html",
              story: "鳴門海峡の波打ち際に佇み、料理自慢の隠れ宿として多くの魚好きから愛される「鳴門海月別亭 シーサイドホテル鯛丸海月」。宿の自慢は何と言っても、毎朝鳴門の漁港から直接仕入れる新鮮な鳴門鯛と瀬戸内の旬魚。熟練の料理人が素材の持ち味を最大限に引き出した料理は、シンプルながら力強い美味しさに満ちています。海を眺める展望大浴場でナトリウム-塩化物温泉に浸かり、気取らない温かなおもてなしとともに極上の鯛料理を心ゆくまで堪能できる、アットホームな名宿です。",
              roomTip: "海側に面した落ち着きある和室。窓辺に腰掛けて穏やかな波音に耳を傾け、どこか懐かしい海辺の旅館情緒を満喫。",
              gourmetTip: "「鳴門鯛フルコース御膳」。コリコリとした弾力がたまらない鳴門鯛のお造り、鯛の骨蒸し、サクサクの鯛天ぷら、名物鯛茶漬け。",
              highlights: [
                "鳴門海峡の波打ち際の風情ある隠れ宿＆毎朝漁港直送の新鮮な天然鳴門鯛とアットホームなもてなし",
                "鳴門温泉の身体が温まる名湯＆鯛の骨蒸しやサクサク鯛天ぷらを手頃な価格で味わう高コスパ旅",
                "海岸線の静かな環境＆魚好きのリピーターが通い詰める素材の旨味が際立つ海鮮御膳"
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
          alt="初冬の大鳴門橋と鳴門海峡の絶景パノラマ露天風呂"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold">
            <Palette className="w-4 h-4" />
            11月・12月 海峡絶景＆アート美食特集｜徳島・鳴門温泉
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月徳島・鳴門温泉】<br className="hidden sm:inline" />
            冬海峡絶景と天然鳴門鯛・大塚国際美術館アート＆展望露天の宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            神戸から車でわずか75分。世界三大潮流・鳴門海峡の荒波が育む極上天然鳴門鯛と阿波牛。大塚国際美術館の至高のアート鑑賞と、大鳴門橋を一望する海辺の温泉露天風呂に癒やされる休日。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <SunMedium className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Naruto Strait Whirlpools & Art Retreat</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                世界三大潮流の迫力と名画の森｜初冬の鳴門海峡が魅せる大自然と文化の饗宴
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              四国の東端、淡路島との間に横たわる鳴門海峡。イタリアのメッシーナ海峡、カナダのセイモア海峡と並び「世界三大潮流」の一つに数えられるこの海は、最大時速20kmにも達する激しい潮流がダイナミックな「渦潮」を描き出します。
            </p>
            <p>
              11月から12月にかけて、鳴門は空気が澄み渡り、青く輝く瀬戸内海と紀伊水道の境目に架かる雄大な「大鳴門橋」の絶景が最も美しく映えるシーズンを迎えます。この激流に揉まれて育つ「鳴門鯛」は、身に極上の脂を蓄え、一年で最も歯ごたえと甘みが際立つ冬の旬へと突入します。
            </p>
            <p>
              さらに、世界の名画1,000点以上を原寸大の陶板で再現した世界的文化遺産「大塚国際美術館」では、冬の落ち着いた空気の中でゆったりと至高のアート鑑賞を満喫できます。神戸から明石海峡大橋を渡ればわずか1時間強。大鳴門橋と海峡の白波を見渡す展望温泉露天風呂で温まり、鳴門鯛と阿波牛を味わい尽くす贅沢な初冬旅がここにあります。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Waves className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">激流が育む天然鳴門鯛</div>
              <div className="text-xs text-slate-600">鳴門骨ができるほど引き締まった身。冬に脂が乗る鯛刺身・鯛飯・宝楽焼き。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Palette className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">大塚国際美術館アート旅</div>
              <div className="text-xs text-slate-600">世界の名画1000点を原寸大で再現。冬の静けさの中で楽しむ至高の芸術。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Eye className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">大鳴門橋海峡パノラマ露天</div>
              <div className="text-xs text-slate-600">海面を見下ろす展望温泉。塩化物泉の温もりと夕暮れのマジックアワー。</div>
            </div>
          </div>
        </section>

        {/* Section 2: Onsen Qualities */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Marine Sodium Springs & Deep Heat</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                潮風を受けながら身体を芯から温める「鳴門温泉の塩化物泉」
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              鳴門海峡の波打ち際から湧出する鳴門温泉は、海水の恵みを濃厚に受け継いだ「ナトリウム-塩化物温泉（中性高張性温泉）」です。
            </p>
            <p>
              塩分を多く含む泉質は、入浴時に皮膚に塩分の薄い膜（皮膜）を形成します。この天然の塩のベールが皮膚呼吸を妨げることなく毛穴を覆い、体内の水分蒸発と熱の放散を徹底的にガードします。そのため、初冬の海風が吹き付ける露天風呂であっても、湯上がり後はポカポカとした温感が長く続き、「熱の湯」として冷え性の劇的な改善や疲労回復、筋肉痛の緩和に高い効果をもたらします。
            </p>
            <p>
              さらに、弱アルカリ性のやさしい泉質は肌をすべすべに整える美肌作用も兼ね備えています。広大な海峡と大鳴門橋を眺めながら、寄せては返す波の音に包まれて入浴する時間は、日常のストレスを優しく洗い流してくれます。
            </p>
          </div>
        </section>

        {/* Section 3: Winter Gourmet */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Utensils className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Naruto Sea Bounties & Awa Beef</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                激流が鍛え上げた日本一の真鯛「鳴門鯛」と徳島が誇る「阿波牛」の饗宴
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              鳴門の冬グルメの絶対的王者が「鳴門鯛（天然真鯛）」です。潮の干満差によって生じる激しい急流の中を泳ぎ回る鳴門鯛は、全身の筋肉が鍛え抜かれ、運動量の多さから骨にコブができる「鳴門骨」を持つことで知られます。初冬の11月・12月は越冬に向けて脂を蓄え、身の弾力と脂の甘みがピークに達します。
            </p>
            <p>
              薄造りに引いた刺身は、口に入れた瞬間のコリコリとした心地よい歯ごたえと、噛みしめるほどに広がる芳醇な甘みが圧巻。さらに、鯛の頭や骨から出る濃厚な出汁と鳴門わかめを合わせた「鯛しゃぶ」、昆布の旨味を米一粒一粒に染み込ませた「鯛釜飯」、陶板で蒸し焼きにする郷土料理「宝楽焼き」など、鯛の美味しさを余すことなく楽しめます。
            </p>
            <p>
              また、徳島県特産の最高級黒毛和牛「阿波牛」やすだちの酸味を合わせたステーキ、地鶏「阿波尾鶏」の炭火焼きなど、山海の贅が競演するディナーは、旅の夜を最高の感動で満たしてくれます。
            </p>
          </div>
        </section>

        {/* Section 3.5: Model Course */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Naruto Scenic & Museum Route</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の鳴門満喫モデルコース｜大塚国際美術館から大鳴門橋「渦の道」へ
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              神戸・大阪から高速道路または高速バスで明石海峡大橋と淡路島を抜け、大鳴門橋を渡って鳴門へ。午前中は「大塚国際美術館」へ直行。広大な館内でシスティーナ・ホールやモネの睡蓮、フェルメールの名画など、世界の至宝を心ゆくまで鑑賞します。冬は混雑が落ち着いており、落ち着いてアートと向き合える最高の季節です。
            </p>
            <p>
              ランチには美術館内カフェや門前の海鮮処で鳴門鯛の海鮮丼や鯛茶漬けを堪能。午後は大鳴門橋の車道下に造られた海上遊歩道「渦の道」へ。海上45メートルのガラス床から見下ろす激しい潮流と渦潮のスリルを体感します。
            </p>
            <p>
              夕刻前には鳴門温泉のホテルへチェックイン。大鳴門橋を一望する展望露天風呂に浸かり、夕日に染まる播磨灘と紀伊水道の茜色のグラデーションを鑑賞。夜は鳴門鯛尽くしの会席や阿波牛ディナーに舌鼓を打ち、翌朝は海から昇る朝日の光を浴びながら贅沢な朝湯を楽しむ、充実の1泊2日モデルコースです。
            </p>
          </div>
        </section>

        {/* Section 4: 5 Selected Inns */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Featured Oceanview Resorts & Gourmet Inns</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              鳴門海峡の絶景と真鯛美食｜鳴門温泉の厳選ホテル・旅館5選
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              すべて楽天トラベルで高い評価を獲得し、鳴門鯛料理や海峡ビュー露天風呂、大塚国際美術館への好アクセスを誇る宿を厳選。
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
                    <span className="text-teal-400 font-extrabold">#{h.id}</span>
                    <span>鳴門の名宿</span>
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
                      <div className="p-3.5 rounded-2xl bg-teal-50/60 border border-teal-100/80 space-y-1">
                        <div className="text-[11px] font-bold text-teal-900 flex items-center gap-1.5">
                          <Landmark className="w-3.5 h-3.5 text-teal-700" />
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
                        <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                        この宿のおすすめポイント
                      </div>
                      <ul className="space-y-1.5">
                        {h.highlights.map((item, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
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
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm px-6 py-3 rounded-2xl shadow-sm hover:shadow transition group flex-shrink-0"
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
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Snowflake className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Travel Planning & Climate</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の鳴門冬旅｜温暖な気候と海風対策・大塚国際美術館の回り方
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-teal-800" />
                晴天率の高さと海峡沿いの防風対策
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                鳴門は冬でも晴れが多く温暖ですが、鳴門海峡沿いや渦の道、展望台は強い海風が吹き込みます。体感温度が下がりやすいため、風を通さないコートやマフラー、歩きやすいフラットシューズでの散策をおすすめします。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-teal-800" />
                大塚国際美術館は朝一番または半日じっくり
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                鑑賞距離約4kmに及ぶ大塚国際美術館を存分に堪能するなら、午前中の早い時間からの入場が理想です。宿から車で数分の距離にあるため、チェックイン前またはチェックアウト後にゆったりと時間を確保して巡るのがおすすめです。
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
                徳島・鳴門温泉冬旅のよくある質問（FAQ）
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
            <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Related Winter Features & Shikoku Onsen</span>
            <h2 className="text-xl sm:text-2xl font-bold">
              あわせて読みたい四国・瀬戸内の冬名湯＆極上味覚特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の淡路島3年とらふぐ、播州赤穂坂越牡蠣、祖谷渓温泉、小豆島オリーブ牛をめぐる人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-hyogo-awajishima-sumoto-3year-torafugu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">兵庫・淡路島温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">鳴門海峡の荒波が育む淡路島3年とらふぐフルコースと美肌露天の宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-ako-onsen-sakoshi-oyster-infinity-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">兵庫・播州赤穂温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">播磨灘夕景と11月解禁坂越牡蠣・赤穂義士祭とインフィニティ露天の宿</h3>
            </Link>
            <Link 
              href="/winter-tokushima-iya-valley-onsen-hikyo-awa-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">徳島・祖谷温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">日本三大秘境の祖谷渓谷ケーブルカー露天風呂と阿波牛・郷土囲炉裏会席</h3>
            </Link>
            <Link 
              href="/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">香川・ことひら温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">金刀比羅宮の初冬参拝と讃岐オリーブ牛・門前町の温泉情緒を味わう宿</h3>
            </Link>
            <Link 
              href="/winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">香川・小豆島温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">寒霞渓の冬絶景とオリーブ牛ステーキ・瀬戸内海一望の海辺露天風呂</h3>
            </Link>
            <Link 
              href="/winter-ehime-dogo-onsen-taimeshi-heritage-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">愛媛・道後温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">日本最古の名湯本館と宇和島・松山名物鯛めし・飛鳥乃湯泉を巡る名宿</h3>
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
