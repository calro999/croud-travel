import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, ShieldCheck, 
  Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Clock, Landmark, Eye, Waves, Wine, ThermometerSun, Footprints, SunMedium
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【11・12月小豆島温泉】海一望露天風呂！名宿5選',
  description: '11月下旬から12月にかけて瀬戸内海の小豆島は、温暖で穏やかな気候の中、日本三大渓谷美「寒霞渓」の紅葉から初冬の岩肌へと移ろうダイナミックな景観と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '小豆島 温泉 宿泊, 小豆島 11月 12月, 小豆島国際ホテル, ベイリゾートホテル小豆島, 島宿真里, 海音真里, 国民宿舎小豆島, 寒霞渓 冬, エンジェルロード 夕日, 小豆島オリーブ牛 宿, 讃岐でんぶく フグ',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay/"
  },
  openGraph: {
    title: '【11・12月小豆島温泉】海一望露天風呂！名宿5選',
    description: '11月下旬から12月にかけて瀬戸内海の小豆島は、温暖で穏やかな気候の中、日本三大渓谷美「寒霞渓」の紅葉から初冬の岩肌へと移ろうダイナミックな景観と。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay',
    siteName: 'クラドトラベル (Croud Travel)',
    locale: 'ja_JP',
    type: 'article',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: '冬の小豆島エンジェルロードと海一望温泉'
      }
    ]
  }
};

const faqList = [
  {
    "q": "小豆島の11月・12月の気候や気温は？冬でも寒くないですか？",
    "a": "小豆島を含む瀬戸内海地域は「瀬戸内海式気候」に属し、年間を通じて降水量が少なく温暖で晴天率が高いのが特徴です。11月の最高気温は15〜18℃、最低気温は8〜11℃と日中は秋の爽やかさが残ります。12月に入ると最高気温は11〜13℃、朝晩は3〜6℃前後まで冷え込みますが、雪が積もることは山間部の寒霞渓山頂を除いて平地ではほとんどありません。日中は厚手のコートやセーターで快適に観光できますが、朝晩の海風や寒霞渓山頂は冷え込むため、マフラーや手袋をご用意ください。"
  },
  {
    "q": "初冬の「寒霞渓（かんかけい）」の見どころと紅葉の時期はいつですか？",
    "a": "寒霞渓は日本三大渓谷美のひとつに数えられ、1300万年前の火山活動によってできた奇岩怪石がそびえる名勝です。紅葉の見頃は例年11月上旬から下旬にかけて山頂から山麓へと移り変わります。11月下旬から12月上旬にかけては、残る紅葉と冬の露出したダイナミックな岩肌が美しいグラデーションを描きます。寒霞渓ロープウェイから見下ろす渓谷美と、山頂展望台から望む瀬戸内海の多島美パノラマは初冬の必見スポットです。"
  },
  {
    "q": "11月・12月が旬の「小豆島オリーブ」と初摘みオリーブオイルについて教えてください。",
    "a": "小豆島では毎年10月から11月下旬にかけてオリーブの実の収穫が行われます。11月中旬から12月にかけては、その年に収穫された新鮮な果実から搾油されたばかりの「初摘みエキストラバージンオリーブオイル（新油）。」が解禁される特別なシーズンです。フレッシュな青リンゴや若草のような爽やかな香りとスパイシーな辛味が特徴で、島内の宿では搾りたてのオイルを地魚の刺身や小豆島オリーブ牛にかけて味わう贅沢な料理が楽しめます。"
  },
  {
    "q": "冬の小豆島名物「讃岐でんぶく（フグ）」とはどんな魚ですか？",
    "a": "「讃岐でんぶく」とは、瀬戸内海で漁獲される「ナシフグ」の香川県ブランド名です。全国でも香川県と岡山県の有資格者のみが処理・提供を許されている希少なフグで、トラフグに匹敵する上品な甘みと適度な歯ごたえを持っています。初冬から冬にかけて旨味が最も凝縮され、薄造り（てっさ）、唐揚げ、鍋（てっちり）などで手頃かつ贅沢に堪能できます。"
  },
  {
    "q": "小豆島へのアクセス方法とフェリーの注意点は？車で行くべきですか？",
    "a": "小豆島へは香川県（高松港）、岡山県（新岡山港・宇野港・日生港）、兵庫県（姫路港・神戸港）から多数のフェリー・高速艇が運航しています。観光スポットが島内各地に点在しているため、自家用車をフェリーに載せて渡るか、島内の港（土庄港など）でレンタカーを借りるのが最も効率的です。11月・12月の週末や連休はフェリーの車両積載が混み合うことがあるため、事前予約をおすすめします。"
  }
];

export default function ShodoshimaOnsenWinterFeature() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay"
        },
        "headline": "【11・12月小豆島温泉の初冬寒霞渓奇岩絶景とエンジェルロード夕日】海一望露天風呂・小豆島オリーブ牛ステーキ＆冬の讃岐でんぶく会席の宿5選",
        "description": "11月下旬から12月にかけて瀬戸内海の小豆島は、温暖で穏やかな気候の中、日本三大渓谷美「寒霞渓」の紅葉から初冬の岩肌へと移ろうダイナミックな景観と、オリーブの収穫・搾りたて初摘みオリーブオイルの豊かな香りに包まれます。干潮時に海の中から現れる神秘の砂の道「エンジェルロード」の冬の澄んだ夕景、瀬戸内海を行き交う船を眺めながら癒やされる絶景温泉露天風呂、オリーブの搾り果実で育った最高級黒毛和牛「小豆島オリーブ牛」、冬の瀬戸内海の隠れた極上フグ「讃岐でんぶく」、島仕込み手延べそうめんや木桶仕込み醤油会席を味わう至高のアイランド名宿5選を徹底解説。",
        "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&h=630&q=80",
        "datePublished": "T04:00:00+09:00",
        "dateModified": "T04:00:00+09:00",
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
          "name": "Croud Travel 温泉・冬旅取材班"
        },
        "inLanguage": "ja"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://croud-travel.pages.dev/winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay#breadcrumb",
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
            "name": "香川・小豆島温泉 初冬寒霞渓とエンジェルロードの宿",
            "item": "https://croud-travel.pages.dev/winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "小豆島の11月・12月の気候や気温は？冬でも寒くないですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "小豆島を含む瀬戸内海地域は「瀬戸内海式気候」に属し、年間を通じて降水量が少なく温暖で晴天率が高いのが特徴です。11月の最高気温は15〜18℃、最低気温は8〜11℃と日中は秋の爽やかさが残ります。12月に入ると最高気温は11〜13℃、朝晩は3〜6℃前後まで冷え込みますが、雪が積もることは山間部の寒霞渓山頂を除いて平地ではほとんどありません。日中は厚手のコートやセーターで快適に観光できますが、朝晩の海風や寒霞渓山頂は冷え込むため、マフラーや手袋をご用意ください。"
            }
          },
          {
            "@type": "Question",
            "name": "初冬の「寒霞渓（かんかけい）」の見どころと紅葉の時期はいつですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "寒霞渓は日本三大渓谷美のひとつに数えられ、1300万年前の火山活動によってできた奇岩怪石がそびえる名勝です。紅葉の見頃は例年11月上旬から下旬にかけて山頂から山麓へと移り変わります。11月下旬から12月上旬にかけては、残る紅葉と冬の露出したダイナミックな岩肌が美しいグラデーションを描きます。寒霞渓ロープウェイから見下ろす渓谷美と、山頂展望台から望む瀬戸内海の多島美パノラマは初冬の必見スポットです。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月が旬の「小豆島オリーブ」と初摘みオリーブオイルについて教えてください。",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "小豆島では毎年10月から11月下旬にかけてオリーブの実の収穫が行われます。11月中旬から12月にかけては、その年に収穫された新鮮な果実から搾油されたばかりの「初摘みエキストラバージンオリーブオイル（新油）。」が解禁される特別なシーズンです。フレッシュな青リンゴや若草のような爽やかな香りとスパイシーな辛味が特徴で、島内の宿では搾りたてのオイルを地魚の刺身や小豆島オリーブ牛にかけて味わう贅沢な料理が楽しめます。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の小豆島名物「讃岐でんぶく（フグ）」とはどんな魚ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "「讃岐でんぶく」とは、瀬戸内海で漁獲される「ナシフグ」の香川県ブランド名です。全国でも香川県と岡山県の有資格者のみが処理・提供を許されている希少なフグで、トラフグに匹敵する上品な甘みと適度な歯ごたえを持っています。初冬から冬にかけて旨味が最も凝縮され、薄造り（てっさ）、唐揚げ、鍋（てっちり）などで手頃かつ贅沢に堪能できます。"
            }
          },
          {
            "@type": "Question",
            "name": "小豆島へのアクセス方法とフェリーの注意点は？車で行くべきですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "小豆島へは香川県（高松港）、岡山県（新岡山港・宇野港・日生港）、兵庫県（姫路港・神戸港）から多数のフェリー・高速艇が運航しています。観光スポットが島内各地に点在しているため、自家用車をフェリーに載せて渡るか、島内の港（土庄港など）でレンタカーを借りるのが最も効率的です。11月・12月の週末や連休はフェリーの車両積載が混み合うことがあるため、事前予約をおすすめします。"
            }
          }
        ]
      }
    ]
  };

  const hotels = [
            {
              id: 1,
              name: "小豆島国際ホテル　＜小豆島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/17990/17990.jpg",
              rating: 4.39,
              reviews: 2106,
              price: "¥8,800〜",
              access: "土庄港よりお車にて約７分",
              special: "小豆島で最もエンジェルロードに近いオーシャンビュー絶景リゾート",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17990%2F17990.html",
              story: "潮の満ち引きによって1日2回だけ海の中から砂の道が現れる恋人の聖地「エンジェルロード」に隣接し、敷地から直接歩いて渡ることができる絶景リゾート「小豆島国際ホテル」。全客室が穏やかな瀬戸内海を望むオーシャンビュー設計で、波打ち際の露天風呂「浜辺の湯」では、潮騒を間近に聞きながら海と一体化するような極上の湯浴みが楽しめます。初冬の澄み渡る夕暮れ時、茜色から紫へと移ろう空とエンジェルロードのシルエットは息をのむ美しさです。",
              roomTip: "エンジェルロード側エグゼクティブルームまたは展望風呂付き客室。刻一刻と表情を変えるエンジェルロードの出現と消失を、お部屋にいながらプライベートに独占できます。",
              gourmetTip: "瀬戸内の旬魚とブランド肉を散りばめた特選和洋会席。冬に旨味が増す「讃岐でんぶく」の薄造りや唐揚げ、サシのきめ細やかな「小豆島オリーブ牛」の鉄板焼き、島仕込みオリーブオイルのカルパッチョ。",
              highlights: [
                "エンジェルロードに敷地直結＆全室オーシャンビューと波打ち際露天風呂「浜辺の湯」",
                "小豆島オリーブ牛鉄板焼き＆冬の高級魚「讃岐でんぶく」薄造りと唐揚げ",
                "1日2回現れる砂の道を客室から鑑賞＆初冬の澄んだ夕景と朝の静寂"
              ]
            },
            {
              id: 2,
              name: "ベイリゾートホテル小豆島",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/44874/44874.jpg",
              rating: 4.27,
              reviews: 1939,
              price: "¥5,500〜",
              access: "（車）坂手港3分/福田港30分/土庄港30分/草壁港10分/池田港20分★大部港以外の無料送迎有（2日前までに予約要）",
              special: "◆全室オーシャンビュー◆自家源泉の最上階展望露天風呂＆個室貸切露天風呂が魅力★",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44874%2F44874.html",
              story: "波穏やかな内海湾（うちのみわん）の突端に位置し、全室オーシャンビューの開放的な客室と最上階12階の展望大浴場が自慢の「ベイリゾートホテル小豆島」。地下1,600mから湧き出る自家源泉「小豆島温泉」は肌にしっとり馴染む塩化物泉で、入浴後も身体がポカポカと温まり続けます。海を見下ろす展望露天風呂や広々とした貸切露天風呂からは、冬の澄んだ空気の中で瀬戸内海の島々を行き交うフェリーや漁船ののどかな情景を一望できます。",
              roomTip: "最上階プレミアムフロア和洋室。大きなピクチャーウィンドウから内海湾のパノラマビューが広がり、夜には静かな水面に映る月明かりを鑑賞できます。",
              gourmetTip: "小豆島ならではのオリーブバイキング、または料理長特選の瀬戸内会席。搾りたてエキストラバージンオリーブオイルをかける地魚のお造りや、小豆島オリーブ牛ステーキ、名物の手延べそうめん。",
              highlights: [
                "最上階12階の展望パノラマ大浴場＆地下1,600m湧出の自家源泉塩化物温泉",
                "内海湾を見下ろす開放的ロケーション＆小豆島オリーブバイキングと島会席",
                "フェリー乗り場や寒霞渓へのアクセス抜群＆家族連れにも安心の充実設備"
              ]
            },
            {
              id: 3,
              name: "島宿真里＜小豆島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/188332/188332.jpg",
              rating: 5.00,
              reviews: 10,
              price: "¥29,205〜",
              access: "高松駅よりお車でフェリーを使い約100分",
              special: "醤の香り漂う 醤油蔵通りをぬけるとそこは… 味わう、もろみの島宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188332%2F188332.html",
              story: "国の登録有形文化財に指定された木造建築が連なり、醤油蔵が立ち並ぶ「醤の郷（ひしおのさと）」の奥深くに佇む全8室の隠れ宿「島宿 真里（しまやど まり）」。創業以来の伝統と美意識が息づく館内には、自家源泉の掛け流し温泉が注がれる貸切風呂が点在。最大の魅力は、島で400年受け継がれてきた木桶仕込み醤油の個性を引き出す唯一無二の「醤油会席」。初冬の穏やかな島時間の中で、五感を研ぎ澄ます至高の食体験を堪能できます。",
              roomTip: "離れ客室「ひし」「さけ」「おもや」。それぞれ異なる間取りと趣を持ち、古材の梁や職人の手仕事が温かいプライベート空間で、誰にも邪魔されない贅沢な時を過ごせます。",
              gourmetTip: "名物「醤油会席」。二段仕込み生揚げ醤油、淡口、濃口、もろみなど数種類の醤油を使い分け、瀬戸内の朝獲れ地魚や島野菜、小豆島オリーブ牛の炭火焼きをそれぞれの醤油に合わせて味わう芸術的料理。",
              highlights: [
                "国の登録有形文化財の宿＆木桶仕込み醤油の個性を引き出す名物「醤油会席」",
                "全8室の贅沢な静寂空間＆自家源泉掛け流し貸切風呂で過ごす特別な大人の休日",
                "醤の郷の風情ある散策＆400年の醸造文化を五感で味わう唯一無二の滞在"
              ]
            },
            {
              id: 4,
              name: "海音真里＜小豆島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/188333/188333.jpg",
              rating: 4.88,
              reviews: 24,
              price: "¥50,003〜",
              access: "高松駅から車でフェリーを使い約100分",
              special: "刻々と移ろいゆく 淡い瀬戸内のグラデーション… 海のしじまにつむぐ宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188333%2F188333.html",
              story: "瀬戸内海の波打ち際ギリギリに佇み、全6室すべてが温泉露天風呂を備えた大人のための至高のスモールラグジュアリーリゾート「海音真里（うみおとまり）」。お部屋のテラスに出れば、手が届きそうなほど近い海から寄せては返す潮騒が心地よく響き渡ります。宿のテーマは「オリーブオイル」。小豆島のオリーブ農家が初冬に収穫・搾油したばかりの新鮮な初摘みエキストラバージンオイルを贅沢に使った「オリーブ会席」は、世界中の美食家を唸らせています。",
              roomTip: "海辺の離れスイート（テラス温泉露天風呂付き）。テラスに設えられた信楽焼や檜の浴槽に身を沈め、初冬の静かな海面と朝陽・夕陽のグラデーションを独占できます。",
              gourmetTip: "「オリーブ会席」。搾油時期や品種の異なるエキストラバージンオイルを料理ごとにペアリング。旬の讃岐でんぶくや伊勢海老、小豆島オリーブ牛フィレ肉のグリルに最高の一滴を纏わせる極上ディナー。",
              highlights: [
                "全6室テラス温泉露天風呂付き離れ＆搾りたて初摘みオリーブオイルを楽しむ「オリーブ会席」",
                "波打ち際の特等席で潮騒に包まれる滞在＆小豆島オリーブ牛フィレ肉グリル",
                "ワインとオリーブオイルのマリアージュ＆日常を完全に離れる極上リトリート"
              ]
            },
            {
              id: 5,
              name: "国民宿舎　小豆島　＜小豆島＞",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/28288/28288.jpg",
              rating: 4.27,
              reviews: 1116,
              price: "¥4,550〜",
              access: "池田港より車で5分（池田港バス停より無料送迎。要連絡）、土庄港より車で15分、坂手港より車で25分、福田港より車で40分",
              special: "瀬戸内海を一望する風景や日本夕陽百選の夕陽が自慢♪地元食材にこだわった料理も人気！◇全館WiFi完備",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28288%2F28288.html",
              story: "日本の夕陽百選に選ばれた三笠山の高台に建ち、播磨灘から瀬戸内海の多島美を眼下に見下ろす絶景自慢の「国民宿舎 小豆島」。高台の露天風呂から眺める夕日は圧巻で、海と空が燃えるような茜色に染まりゆくトワイライトタイムは感動的な美しさです。公共の宿ならではの安心でリーズナブルな価格設定ながら、瀬戸内の新鮮な海の幸と展望温泉を存分に楽しめる、家族連れや一人旅にも大人気の宿です。",
              roomTip: "オーシャンビュー和室または洋室。標高約100mの高台から播磨灘を一望でき、天気の良い初冬の澄んだ日には遠く四国本土や本州の山並みまで見渡せます。",
              gourmetTip: "瀬戸内の恵みを盛り込んだ和食会席。鯛やハマチなど瀬戸内海鮮の舟盛り、讃岐オリーブ豚のしゃぶしゃぶ鍋、小豆島そうめんなど、ボリューム満点で温まる料理。",
              highlights: [
                "日本の夕陽百選・三笠山高台からの多島美絶景＆高台展望露天風呂と瀬戸内海鮮",
                "コストパフォーマンス抜群の滞在＆瀬戸内海の旬魚舟盛りと讃岐オリーブ豚鍋",
                "夕暮れ時に空と海が茜色に染まる感動の夕景鑑賞＆家族旅行や一人旅に最適"
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
          alt="冬の小豆島エンジェルロードと海一望温泉"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-md border border-teal-400/30 text-teal-300 text-xs sm:text-sm font-semibold">
            <SunMedium className="w-4 h-4" />
            11月・12月 冬の極上温泉特集｜香川・瀬戸内海小豆島
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            【11・12月小豆島温泉】<br className="hidden sm:inline" />
            初冬の寒霞渓奇岩絶景とエンジェルロード夕日・オリーブ牛＆でんぶくの宿5選
          </h1>
          <p className="text-xs sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            穏やかな瀬戸内海に抱かれたオリーブ香る島。潮の満ち引きが現す神秘の砂の道、寒霞渓のダイナミックな渓谷美、初摘みオリーブオイルと最高級小豆島オリーブ牛を堪能する大人のアイランドステイ。
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Section 1: Seasonal Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <Waves className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Island Retreat & Olive Heritage</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                初冬の温暖な瀬戸内海と、寒霞渓・エンジェルロードが描く奇跡の風景
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <p>
              本州や四国本土が本格的な冬の寒さに包まれる11月下旬から12月、瀬戸内海に浮かぶ香川県・小豆島は、年間降水量が少なく日照時間に恵まれた「瀬戸内海式気候」ならではの、穏やかで心地よい陽光に包まれます。島の中央にそびえる「寒霞渓（かんかけい）」は、およそ1300万年前の火山活動によって形成された奇岩怪石の断崖絶壁が広がる日本屈指の名勝。晩秋の鮮やかなモミジから初冬の凛とした岩肌へと移ろいゆくダイナミックな景観を、渓谷を渡るロープウェイから360度の大パノラマで空中鑑賞できます。
            </p>
            <p>
              また、潮の満ち引きによって1日2回だけ海の中から現れる「エンジェルロード（天使の散歩道）」では、冬の澄み渡る大気の中で水平線が黄金色から茜色、そして藍色へと移ろう日本の夕陽百選に選ばれた絶景サンセットに出会えます。明治41年（1908年）に日本で初めてオリーブの試験栽培に成功した歴史を持つ小豆島は、初冬を迎えると島内のオリーブ畑が銀白色の葉を揺らし、地中海を思わせる優雅な異国情緒を漂わせます。
            </p>
            <p>
              冷たい海風を避けて波穏やかな内海湾や土庄港周辺の温泉宿に身を寄せれば、潮騒を聞きながら温まる露天風呂と、心温まる島の人々のおもてなしが旅人を包み込みます。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Eye className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">エンジェルロード＆寒霞渓</div>
              <div className="text-xs text-slate-600">干潮時に現れる砂の道と冬の夕日。寒霞渓ロープウェイから望む奇岩パノラマ。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <ThermometerSun className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">海一望の自家源泉温泉</div>
              <div className="text-xs text-slate-600">波打ち際や高台から瀬戸内海の多島美を望む露天風呂。身体を芯から温める塩化物泉。</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-2 text-center">
              <Utensils className="w-5 h-5 text-teal-800 mx-auto" />
              <div className="font-bold text-slate-900 text-sm">オリーブ牛＆讃岐でんぶく</div>
              <div className="text-xs text-slate-600">搾りたて初摘みオリーブオイル、極上オリーブ牛ステーキ、木桶醤油会席。</div>
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
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Thermal Science & Island Gastronomy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                搾りたて初摘みオリーブオイル解禁と「小豆島オリーブ牛・讃岐でんぶく」の奇跡
              </h2>
            </div>
          </div>
          <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-teal-700" />
              <span>初摘み新油のフルーティな芳香と、脂肪融点24℃の「小豆島オリーブ牛」</span>
            </h3>
            <p>
              小豆島では毎年10月から11月下旬にかけてオリーブの収穫が行われます。11月中旬以降は、収穫されたばかりの新鮮な緑色・紫色の果実をその日のうちにコールドプレス（低温圧搾）した「初摘みエキストラバージンオリーブオイル（新油）。」が解禁される特別な季節です。ポリフェノールやオレイン酸を豊富に含み、青リンゴや刈りたての若草のような鮮烈なアロマと心地よいスパイシーな辛味を持っています。
            </p>
            <p>
              このオリーブの搾り粕を乾燥・焙煎し、出荷前2カ月以上にわたって給餌して育てるのが香川県が誇る幻の黒毛和牛「小豆島オリーブ牛」です。オリーブに含まれる良質なオレイン酸が牛の体脂肪に蓄積され、脂の融点はわずか約24℃（一般的な和牛は28〜32℃）。人の体温で舌の上に乗せた瞬間に脂がさらりと溶け出し、赤身に含まれる遊離グルタミン酸などの旨味成分が濃厚に広がります。鉄板焼きやローストで、初摘みオリーブオイルと天日塩を添えて味わう一口は、世界最高峰の肉料理の感動を与えてくれます。
            </p>
            <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2 pt-2">
              <Utensils className="w-4 h-4 text-teal-700" />
              <span>冬の瀬戸内の隠れた至宝「讃岐でんぶく」と400年木桶醤油仕込み</span>
            </h3>
            <p>
              冬の瀬戸内海のもう一つの主役が、香川県ブランドの高級フグ「讃岐でんぶく（ナシフグ）」です。漁獲が認められている海域が限定され、厳しい衛生管理のもとで処理される希少な魚で、繊維が緻密でしっかりとした歯ごたえと上品な甘みを誇ります。冬の初風が吹く頃から脂と旨味が一段と凝縮し、花びらのように並べられた薄造りや、サクサクの唐揚げ、出汁が絶品のてっちり鍋で楽しめます。
            </p>
            <p>
              さらに、小豆島「醤の郷（ひしおのさと）」で400年以上にわたり受け継がれる「木桶仕込み天然醸造醤油」は、杉樽に住み着く独自の酵母菌や乳酸菌が冬の低温下でじっくり熟成させた至高の調味料。生揚げ醤油、再仕込み醤油、もろみタレなど、素材の個性を引き出す醤油の食べ比べ会席は、小豆島でしか体験できない文化遺産級の美味です。
            </p>
          </div>
        </section>

        {/* Section 3: Hotel Cards */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Recommended Ryokan & Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              小豆島温泉・冬の滞在を彩る厳選名宿5選
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
                寒霞渓ロープウェイ＆エンジェルロードと醤の郷を巡る小豆島周遊モデルコース
              </h2>
            </div>
          </div>
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs">1</span>
                <span>1日目：高松港フェリー 〜 土庄港 〜 小豆島オリーブ公園 〜 宿チェックイン＆エンジェルロード夕日</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                高松港よりフェリーに乗り約60分で土庄港に到着。レンタカーで出発し、ギリシャ風車が佇む「道の駅 小豆島オリーブ公園」でオリーブ畑を散策し、初摘みオリーブオイルをテイスティング。午後は宿へチェックイン。夕方の干潮時刻に合わせてエンジェルロードを歩き、海風を感じながら波打ち際の露天風呂へ。夕食には讃岐でんぶくの薄造りと小豆島オリーブ牛ステーキを堪能。
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70 space-y-3">
              <div className="flex items-center gap-2 font-bold text-slate-900 text-sm sm:text-base">
                <span className="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs">2</span>
                <span>2日目：寒霞渓ロープウェイ渓谷絶景 〜 醤の郷（木桶醤油蔵見学） 〜 迷路のまち散策</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                朝の爽やかな瀬戸内海を眺めて朝食後に出発。日本三大渓谷美「寒霞渓」へ向かい、ロープウェイで奇岩怪石と残る紅葉のパノラマを空中散歩。山頂展望台で名物の「かわらけ投げ」を体験。下山後は「醤の郷」へ立ち寄り、登録有形文化財の醤油蔵を見学して木桶仕込み醤油や佃煮をお土産に購入。土庄港よりフェリーで帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Climate & Travel Advice */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-teal-100">
            <div className="p-2.5 rounded-2xl bg-teal-50 text-teal-800">
              <SunMedium className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-bold text-teal-800 uppercase tracking-widest">Travel Advisory</span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                11月・12月の小豆島 冬旅の注意点と服装・フェリー利用のコツ
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <ThermometerSun className="w-4 h-4 text-teal-800" />
                温暖な気候と海風対策
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                本州に比べて温暖で雪の心配は平地ではありませんが、海沿いやフェリーのデッキ、標高約600mの寒霞渓山頂は風が強く体感温度が下がります。着脱しやすい風を通さないコートやウインドブレーカー、ストールを1枚持参すると快適です。
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <Footprints className="w-4 h-4 text-teal-800" />
                エンジェルロードの干潮時刻確認
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                エンジェルロードを渡れるのは、干潮時刻の前後約2〜3時間です。毎日時間が変わるため、事前に小豆島観光協会の潮見表を確認して行程を組むのが必須です。また砂浜や足場が濡れている場所を歩くため、歩きやすいスニーカーがおすすめです。
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
                小豆島温泉冬旅のよくある質問（FAQ）
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
              あわせて読みたい四国・瀬戸内の冬名湯＆極上グルメ特集
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              11月・12月の穏やかな海絶景と、瀬戸内海の旬の味覚を味わう人気の厳選特集もぜひご覧ください。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <Link 
              href="/winter-kagawa-kotohira-onsen-konpira-olive-beef-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">香川・ことひら温泉郷</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">金刀比羅宮参拝と名湯露天・讃岐オリーブ牛ステーキの宿</h3>
            </Link>
            <Link 
              href="/winter-ehime-dogo-onsen-taimeshi-heritage-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">愛媛・道後温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">日本最古の名湯本館と宇和海天然鯛めし・伊予牛会席の宿</h3>
            </Link>
            <Link 
              href="/winter-hyogo-awajishima-sumoto-3year-torafugu-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">兵庫・淡路島洲本温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">鳴門海峡の淡路島3年とらふぐ尽くしと海一望露天の宿</h3>
            </Link>
            <Link 
              href="/winter-kochi-yuzu-hotspring-stay"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">高知・北川村ゆず温泉</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">黄金色に実る北川村の冬ゆず風呂と土佐赤牛・藁焼き鰹の宿</h3>
            </Link>
            <Link 
              href="/winter-warm-island-escape"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">冬の離島特集</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">冬でも暖かい島旅・青い海と絶景オーシャンビュー露天の宿</h3>
            </Link>
            <Link 
              href="/features"
              className="bg-slate-900/90 hover:bg-slate-800 p-4 rounded-2xl transition border border-slate-800 block group"
            >
              <span className="text-xs text-teal-300 font-semibold block mb-1">特集一覧</span>
              <h3 className="text-sm font-bold group-hover:text-teal-200 transition">全国の厳選温泉・旬旅特集まとめを見る</h3>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-kagawa-shodoshima-onsen-kankakei-olive-beef-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
