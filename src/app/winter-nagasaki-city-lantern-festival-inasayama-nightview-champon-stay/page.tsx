import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Calendar, Utensils, Compass, ExternalLink, Sparkles, Building, Landmark, Snowflake, ShieldCheck, Footprints, Coffee, Camera, Sun, Moon
} from 'lucide-react';

export const metadata: Metadata = {
  title: '【12・1月長崎】名物ちゃんぽんと長崎和牛を味わう！名宿5選',
  description: '冬の長崎は、1万5000個もの極彩色中国提灯が街路を埋め尽くす「長崎ランタンフェスティバル」や世界新三大夜景・稲佐山から見下ろす1000万ド。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
  keywords: '長崎 ホテル, 稲佐山 夜景 ホテル, 長崎ランタンフェスティバル, ガーデンテラス長崎, ルークプラザホテル, ホテルニュー長崎, グラバー園 イルミネーション, 長崎ちゃんぽん, 12月 1月 長崎 観光',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagasaki-city-lantern-festival-inasayama-nightview-champon-stay/"
  },
  openGraph: {
    title: '【12・1月長崎】名物ちゃんぽんと長崎和牛を味わう！名宿5選',
    description: '冬の長崎は、1万5000個もの極彩色中国提灯が街路を埋め尽くす「長崎ランタンフェスティバル」や世界新三大夜景・稲佐山から見下ろす1000万ド。楽天トラベルの最新空室状況・限定割引プランを徹底比較！',
    url: 'https://croud-travel.pages.dev/winter-nagasaki-city-lantern-festival-inasayama-nightview-champon-stay',
    siteName: '地域の宿探訪',
    locale: 'ja_JP',
    type: 'article',
    images: [{
      url: "https://img.travel.rakuten.co.jp/share/HOTEL/74749/74749.jpg",
      width: 1200,
      height: 630,
      alt: '長崎ランタンフェスティバルと稲佐山世界新三大夜景'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: "【12・1月長崎】長崎市＆稲佐山・南山手！1万5千個の長崎ランタンフェスと稲佐山世界新三大夜景・名物ちゃんぽんと長崎和牛を味わう名宿5選",
    description: "冬の長崎は、1万5000個もの極彩色中国提灯が街路を埋め尽くす「長崎ランタンフェスティバル」や世界新三大夜景・稲佐山から見下ろす1000万ドルの冬夜景、南山手グラバー園のロマンチックなイルミネーションに包まれる特別な季節です。総鎮守・諏訪神社での厳かな初詣、白濁鶏白湯と海鮮の旨味が凝縮された熱々の本場長崎ちゃんぽん、出島伝来の伝統卓袱料理、そしてとろける長崎和牛。長崎港を見下ろす丘の上や異国情緒あふれる南山手の厳選名宿5選を徹底解説します。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/74749/74749.jpg"]
  }
};

export default function NagasakiCityWinterPage() {
  const hotelsData = [
            {
              id: 1,
              name: "ガーデンテラス長崎ホテル＆リゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/74749/74749.jpg",
              rating: 4.57,
              reviews: 332,
              price: "¥18,410〜",
              access: "長崎駅より車で約10分。稲佐山中腹にある当ホテルまで毎日16：00～19：00長崎駅無料シャトルバス運行あり。",
              special: "全室テラス付。46平米以上の客室から眺める世界新三大夜景と世界遺産の街。大人の夜景リゾートホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74749%2F74749.html",
              story: "稲佐山の中腹、長崎港と市街地を見下ろす絶好のロケーションに佇むデザイナーズリゾート「ガーデンテラス長崎ホテル＆リゾート」。建築家・隈研吾氏が設計を手掛けた幾何学的かつ木を活かしたスタイリッシュな建築美が際立ちます。全客室がオーシャン＆シティビューのクラブフロア仕様となっており、テラスや足元まで広がる大きなピクチャーウィンドウから、世界新三大夜景に選ばれた長崎港のすり鉢状の光のグラデーションを眼下に独占。宿泊者専用クラブラウンジでは、長崎の地酒や厳選ワイン、フィンガーフードがフリーフローで楽しめます。夕食は鉄板焼き、創作料理、鮨、天ぷらなど専門レストランが揃い、長崎和牛の極上フィレや五島列島直送の鮮魚を、宝石箱のような夜景とともに堪能する至福の時間を約束します。",
              roomTip: "タワースイートまたはオーシャンスイート。専用ジャグジーバスや広々としたテラスから、冬の澄んだ大気に瞬く長崎港の夜景を独占。",
              gourmetTip: "「鉄板焼ダイニング 竹彩」。目の前で焼き上げられる長崎和牛の芳醇な香りと、五島の鮑や伊勢海老のグリル。夜景を背にした極上のディナー。",
              highlights: [
                "隈研吾氏設計・全室クラブラウンジアクセス・長崎港一望の絶景ジャグジー",
                "鉄板焼「竹彩」での長崎和牛ディナー・クラブラウンジフリーフロー・極上のホスピタリティ",
                "大人の記念日・冬の贅沢リゾートステイ・非日常のプライベート空間"
              ]
            },
            {
              id: 2,
              name: "ルークプラザホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4676/4676.jpg",
              rating: 4.39,
              reviews: 895,
              price: "¥6,270〜",
              access: "JR長崎駅からタクシーで7分。長崎バス5番系統「稲佐山」または「稲佐高部」乗車、観光ホテル前下車徒歩3分。",
              special: "長崎県口コミランキング総合部門上位★長崎を一望できる一等地★無料シャトルバス",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4676%2F4676.html",
              story: "稲佐山の高台に位置し、長崎港のダイナミックなパノラマ夜景を真正面から望むシティリゾートホテル「ルークプラザホテル」。ヨーロピアンスタイルの優美な館内と高台ならではの圧倒的な眺望が自慢です。客室のバルコニーや窓からは、長崎の女神大橋から大浦天主堂、出島、すり鉢状に広がる街の灯りが一望でき、冬の夕暮れ時には刻々と青から黄金へと移り変わるドラマチックな夜景ショーが繰り広げられます。館内レストラン「ザ・テラス」では、長崎の豊かな旬の食材を活かしたモダンインターナショナルキュイジーヌを提供。朝食ビュッフェでは長崎名物の角煮まんじゅうや五島うどん、焼き立てパンが並び、朝日に輝く港を眺めながら優雅な朝のスタートを切ることができます。",
              roomTip: "プレミアムハーバービューツイン（夜景側確約）。プライベートバルコニーから長崎の立体的なすり鉢夜景を足元に見下ろす特等席。",
              gourmetTip: "ダイニング「THE TERRACE」。一面ガラス張りの窓から広がる1000万ドルの夜景と、冬の長崎産寒魚や長崎牛を用いたフルコースディナー。",
              highlights: [
                "稲佐山中腹・全室バルコニー付きハーバービュー・1000万ドルの夜景特等席",
                "一面ガラス張りの夜景ダイニング「THE TERRACE」・角煮まんじゅう朝食ビュッフェ",
                "高いコスパと絶景の両立・無料シャトルバス運行・カップル旅行に最適"
              ]
            },
            {
              id: 3,
              name: "ホテルニュー長崎（ＨＯＴＥＬ　ＮＥＷ　ＮＡＧＡＳＡＫＩ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4629/4629.jpg",
              rating: 4.44,
              reviews: 1177,
              price: "¥6,400〜",
              access: "ＪＲ長崎駅横☆JR長崎駅東口から徒歩5分☆",
              special: "ＪＲ長崎駅に隣接、観光・ビジネスにとても便利。和洋中レストランとバーラウンジがあるシティホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4629%2F4629.html",
              story: "JR長崎駅東口に隣接し、市内各所への観光やショッピングに最高のアクセスを誇る名門ホテル「ホテルニュー長崎」。長崎ランタンフェスティバルの各会場（新地中華街や中央公園）へ路面電車で数分、出島や眼鏡橋へもスムーズに移動できる抜群の利便性を誇ります。落ち着いたトーンで統一された客室は機能性と快適性を兼ね備え、冬の観光で歩き疲れた体を温かく包み込みます。館内には長崎の伝統を継承する中国料理「錦桃飯店」や日本料理「東林」、本格バーなど名店が勢揃い。中国料理レストランでは、長崎名物・本場の特製ちゃんぽんや皿うどん、冬の温まるフカヒレ料理を上質なホテルクオリティで味わうことができます。",
              roomTip: "スーペリアツイン／ダブル。上品なインテリアとシモンズ製ベッドを備え、駅前でありながら静かで落ち着いた夜の休息を約束。",
              gourmetTip: "中国料理「錦桃飯店」。濃厚な白濁スープに魚介と野菜の旨味が溶け込んだ絶品長崎ちゃんぽんと、熱々の点心をホテルダイニングで。",
              highlights: [
                "JR長崎駅東口直結・ランタンフェス各会場へ抜群のアクセス・名門ホテル",
                "本格中国料理「錦桃飯店」の特製ちゃんぽん・上質なシモンズベッドで快眠",
                "雨風知らずの駅前移動・ビジネスから家族旅行まで安心のブランド力"
              ]
            },
            {
              id: 4,
              name: "ＡＮＡクラウンプラザホテル長崎グラバーヒル　ｂｙ　ＩＨＧ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/11003/11003.jpg",
              rating: 4.27,
              reviews: 1491,
              price: "¥6,150〜",
              access: "長崎駅よりお車にて約７分。長崎空港よりバス約35分長崎新地バスターミナル下車 徒歩10分。ながさき出島道路より車で3分。",
              special: "グラバー園・大浦天主堂などの長崎観光の中心地・長崎南山手地区に位置する大型ホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11003%2F11003.html",
              story: "南山手の丘の麓、国宝・大浦天主堂やグラバー園へと続くグラバー坂の入口に建つ異国情緒あふれるホテル「ANAクラウンプラザホテル長崎グラバーヒル。」。旧外国人居留地の歴史とロマンが漂うエリアに位置し、ヨーロッパのクラシックホテルを思わせる重厚で華やかなロビーが訪れる旅人を迎えます。グラバー園の冬期ライトアップや大浦天主堂へは徒歩わずか数分。夜遅くまで幻想的なイルミネーションを堪能した後にすぐホテルへ戻れる贅沢なロケーションです。客室はクラシカルモダンな落ち着きに満ち、快眠プログラム「スリープ・アドバンテージ」のアロマやアイウォーマーが冷えた冬の体を深くリラックスさせてくれます。",
              roomTip: "デラックスハーバービュールーム。長崎港の灯りとグラバーヒルの丘の夜景を優雅に見渡す落ち着いた和モダン空間。",
              gourmetTip: "レストラン「パヴェ」。長崎名物の卓袱料理の要素を取り入れたディナー会席や、長崎県産黒毛和牛のグリルをワインとともに。",
              highlights: [
                "南山手グラバー坂入口・グラバー園ライトアップ徒歩すぐ・洋館のクラシック美",
                "スリープアドバンテージ快眠プログラム・長崎卓袱会席・大浦天主堂ライトアップ至近",
                "南山手レトロ散策に最高の拠点・石畳の坂道に溶け込む上質ステイ"
              ]
            },
            {
              id: 5,
              name: "にっしょうかん別邸紅葉亭",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/15449/15449.jpg",
              rating: 4.40,
              reviews: 454,
              price: "¥13,500〜",
              access: "ＪＲ長崎本線長崎駅から車で15分　＜ＪＲ長崎駅西口より定時無料送迎バスあり＞　長崎自動車道『多良見IC』より約20分",
              special: "長崎港を見下ろす高台に位置し、全客室と展望風呂から世界新三大夜景に認定された夜景をお楽しみください。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15449%2F15449.html",
              story: "長崎港を見下ろす東側の高台・立山に佇み、全客室から長崎の1000万ドルの夜景を一望できる純和風の数寄屋造り料亭旅館「にっしょうかん別邸紅葉亭」。わずか20室余りの静謐な宿で、全室が広々とした本間と次の間を備えた純和風客室となっており、畳の広縁に座ったまま目の前に広がる長崎市街の立体夜景を独占できます。夕食・朝食ともにお部屋食で提供されるのが最大の贅沢。長崎伝統の「卓袱（しっぽく）料理」や冬の旬魚・長崎和牛を盛り込んだ会席料理を、誰にも気兼ねなく夜景を眺めながらプライベートに堪能できます。大浴場からも港の光が美しく瞬き、肌触り滑らかな湯が体の芯まで温めてくれます。",
              roomTip: "夜景側本間次の間付き純和風客室。大きな窓一面に広がる長崎港と稲佐山の夜景を、畳のぬくもりの中で楽しむ贅沢。",
              gourmetTip: "お部屋食でいただく長崎伝統卓袱会席。名物の豚の角煮（東坡肉）やハトシ、鯛の潮汁（お鰭）など、伝統の祝膳を夜景とともに。",
              highlights: [
                "全室お部屋食の純和風料亭旅館・数寄屋造り・畳の部屋から独占する立体夜景",
                "名物東坡肉（豚角煮）と伝統卓袱会席・展望大浴場・静寂を愛する大人の隠れ宿",
                "わずか20室の贅沢・お部屋から眺める稲佐山と長崎港の光景・極上のおもてなし"
              ]
            }
  ];

  const faqData = [
  {
    "q": "長崎ランタンフェスティバルの開催期間と主要会場・見どころは？",
    "a": "中国の旧正月（春節）に合わせて開催され、例年1月下旬〜2月中旬にかけての約15日間にわたって開催されます。新地中華街、湊公園、中央公園、眼鏡橋、浜町アーケードなど長崎市内中心部が一面約1万5,000個の中国ランタン（赤や黄色の提灯）や大型オブジェで埋め尽くされます。点灯時間は17:00〜22:00頃。湊公園の巨大干支メインオブジェ、眼鏡橋の水面に映るランタン、中島川の黄色いランタン並木、そして大迫力の中国獅子舞や龍踊り（じゃおどり）は必見です。"
  },
  {
    "q": "「稲佐山展望台」からの世界新三大夜景のベストな時間帯とアクセス方法は？",
    "a": "長崎の夜景はモナコ、上海とともに「世界新三大夜景」に認定された名所です。日没直後のブルーアワー（17:30〜18:00頃）から完全な夜景へと移り変わる時間帯が最もドラマチック。アクセスは「長崎ロープウェイ（淵神社駅発）」または「稲佐山スロープカー（中腹駐車場発）」が便利です。山頂展望台は吹きさらしの風で非常に寒いため、ダウンジャケットや防寒具をしっかり着用して訪れてください。"
  },
  {
    "q": "冬のグラバー園・大浦天主堂のライトアップと散策のコツは？",
    "a": "南山手に位置する世界遺産・グラバー園では、冬期に夜間開園やウィンターイルミネーションが実施されます。旧グラバー住宅など歴史的洋館が美しくライトアップされ、高台の展望広場からは長崎港を横断する女神大橋や市街地の夜景が一望できます。坂の下に佇む大浦天主堂も夜間は荘厳に照らし出されます。石畳の坂道や階段が多いため、歩きやすく滑りにくいスニーカーやブーツでの散策をおすすめします。"
  },
  {
    "q": "本場の長崎ちゃんぽん・皿うどん・卓袱料理のおすすめの味わい方は？",
    "a": "冬の寒さの中で食べる長崎ちゃんぽんは、豚骨と鶏ガラを長時間煮込んだ濃厚な白濁白湯スープに、牡蠣やイカ、エビ、豚肉、キャベツなど10種類以上の具材の旨味が溶け込み、体の芯から温まる絶品グルメです。パリパリの細麺に熱々の餡をかけた皿うどんは、ウスターソース（金蝶ソース）を一回りかけて味変するのが長崎の定番。また、出島オランダ商館由来の「卓袱料理」は、朱塗りの円卓を囲んで「お鰭（おひれ）」から始まる伝統宴席料理で、名物の東坡肉（豚角煮）はとろける柔らかさです。"
  },
  {
    "q": "冬の長崎観光における気候と防寒対策・路面電車の利用ポイントは？",
    "a": "長崎は九州に位置しますが、海からの北西風が吹き抜けるため、冬の夜間は5℃前後まで冷え込みます。特に稲佐山山頂や南山手の高台、風頭公園など夜景スポットは体感温度が氷点下近くまで下がりますので、厚手のコート、手袋、マフラーが必須です。市内移動は1回一律運賃の「長崎電気軌道（路面電車）」が便利で、1日乗車券を利用するとランタンフェス会場や主要観光地をスムーズに巡ることができます。"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-nagasaki-city-lantern-festival-inasayama-nightview-champon-stay#article",
        "isPartOf": {
          "@type": "WebPage",
          "@id": "https://croud-travel.pages.dev/winter-nagasaki-city-lantern-festival-inasayama-nightview-champon-stay"
        },
        "headline": "【12・1月長崎】長崎市＆稲佐山・南山手！1万5千個の長崎ランタンフェスと稲佐山世界新三大夜景・名物ちゃんぽんと長崎和牛を味わう名宿5選",
        "description": "冬の長崎は、1万5000個もの極彩色中国提灯が街路を埋め尽くす「長崎ランタンフェスティバル」や世界新三大夜景・稲佐山から見下ろす1000万ドルの冬夜景、南山手グラバー園のロマンチックなイルミネーションに包まれる特別な季節です。総鎮守・諏訪神社での厳かな初詣、白濁鶏白湯と海鮮の旨味が凝縮された熱々の本場長崎ちゃんぽん、出島伝来の伝統卓袱料理、そしてとろける長崎和牛。長崎港を見下ろす丘の上や異国情緒あふれる南山手の厳選名宿5選を徹底解説します。",
        "datePublished": "T00:00:00+09:00",
        "dateModified": "T00:00:00+09:00",
        "inLanguage": "ja",
        "publisher": {
          "@type": "Organization",
          "name": "地域の宿探訪",
          "url": "https://croud-travel.pages.dev"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホーム",
            "item": "https://croud-travel.pages.dev"
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
            "name": "長崎市＆稲佐山・南山手冬特集",
            "item": "https://croud-travel.pages.dev/winter-nagasaki-city-lantern-festival-inasayama-nightview-champon-stay"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };


  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-rose-950 via-slate-900 to-indigo-950 text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(244,63,94,0.25),transparent_60%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-rose-300 text-xs sm:text-sm font-medium">
            <Sparkles className="w-4 h-4 text-rose-300" />
            <span>12月・1月冬の光の祝祭＆世界新三大夜景・長崎美食特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-6">
            長崎市＆稲佐山・南山手！<br className="hidden sm:inline" />
            1万5千個の長崎ランタンフェスと稲佐山世界新三大夜景・名物ちゃんぽんと長崎和牛を味わう名宿5選
          </h1>

          <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mb-8">
            中国旧正月を祝う1万5,000個の極彩色中国提灯が街を染める「長崎ランタンフェスティバル」、稲佐山山頂から見下ろす世界新三大夜景の1,000万ドルの大パノラマ、そして南山手グラバー園のロマンチックな冬イルミネーション。熱々の具だくさん本場長崎ちゃんぽん、出島伝来の伝統卓袱料理、とろける長崎和牛。長崎港を望む丘の上と歴史香る南山手の名宿ステイをお届けします。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-200 border-t border-slate-700/60 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-rose-400 shrink-0" />
              <span>期間：12月上旬〜2月中旬</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-rose-400 shrink-0" />
              <span>1万5000個ランタンフェス</span>
            </div>
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4 text-rose-400 shrink-0" />
              <span>稲佐山世界新三大夜景</span>
            </div>
            <div className="flex items-center gap-2">
              <Landmark className="w-4 h-4 text-rose-400 shrink-0" />
              <span>南山手グラバー園冬ライトアップ</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Section 1: エリア解説 */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Destination Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-rose-500 shrink-0" />
              冬の長崎が魅せる極彩色の光の祝祭と港町のロマン
            </h2>
          </div>

          <div className="text-slate-600 space-y-4 leading-relaxed text-sm sm:text-base">
            <p>
              すり鉢状の地形に家々や教会、洋館が重なり合う坂の街・長崎。冬を迎えると、この街は世界中のどこにもない唯一無二の光の舞台へと変貌を遂げます。12月の南山手グラバー園や大浦天主堂では、洋館のクラシックなシルエットを彩る温かなクリスマスイルミネーションが灯り、夕暮れの長崎港を横断する女神大橋のライトアップとともに港町ならではの情緒を醸し出します。
            </p>
            <p>
              そして1月下旬、旧暦の正月（春節）を迎えると、街の熱気は最高潮に達します。「長崎ランタンフェスティバル」が開幕すると、新地中華街や湊公園、中央公園、中島川の眼鏡橋一帯に約1万5,000個もの中国ランタン（提灯）が一斉に点灯。街路を覆い尽くす深紅や黄金色の提灯の光、川面に揺れる幻想的なリフレクション、そして天高く響く爆竹の音とともに舞い踊る迫力の龍踊り（じゃおどり）や中国獅子舞は、訪れる人々を異国の祝祭空間へと誘います。
            </p>
            <p>
              夜のハイライトは、標高333mの稲佐山展望台から望む「世界新三大夜景」。山頂からは、すり鉢状のすり鉢の底に位置する長崎港を取り囲むように、幾千幾万もの生活の灯り、街灯、港を行き交う船の光跡が360度立体的に広がります。冷たい冬の澄んだ大気によって光の輪郭が一層シャープに研ぎ澄まされ、1,000万ドルの夜景と称される輝きを心ゆくまで堪能できます。
            </p>
          </div>
        </section>

        {/* Section 2: 厳選5ホテル詳細 */}
        <section className="space-y-8">
          <div className="border-l-4 border-rose-600 pl-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Verified Accommodations</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の長崎を満喫する絶景夜景ホテル＆異国情緒の名宿5選
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              楽天トラベルAPIより最新の空室・プラン情報、クチコミ評価を取得。夜景眺望・フェス会場アクセス・長崎美食に優れた宿を厳選
            </p>
          </div>

          <div className="space-y-12">
            {hotelsData.map((h) => (
              <article 
                key={h.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100 flex flex-col lg:flex-row"
              >
                <div className="lg:w-2/5 relative min-h-[260px] lg:min-h-full">
                  <img 
                    src={h.img} 
                    alt={h.name}
                    className="w-full h-full object-cover absolute inset-0"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-rose-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                    第{h.id}位 厳選名宿
                  </div>
                </div>

                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-xs font-semibold text-rose-600 block mb-0.5">{h.access}</span>
                        <h3 className="text-lg sm:text-2xl font-bold text-slate-900 leading-snug">
                          {h.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-lg border border-amber-200">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="font-extrabold text-amber-900 text-sm">{h.rating}</span>
                        <span className="text-xs text-amber-700">({h.reviews.toLocaleString()}件)</span>
                      </div>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {h.story}
                    </p>

                    <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-100 text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <Moon className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-800">夜景・客室の魅力：</strong>
                          <span className="text-slate-600">{h.roomTip}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Utensils className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-slate-800">美食ポイント：</strong>
                          <span className="text-slate-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-slate-700 block">宿の注目ハイライト：</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                        {h.highlights.map((item: string, idx: number) => (
                          <li key={idx} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-slate-400 block">参考宿泊料金（目安）</span>
                      <span className="text-lg sm:text-xl font-black text-rose-950">{h.price}</span>
                      <span className="text-[10px] text-slate-400 ml-1">/ 1名あたり（2名1室利用時）</span>
                    </div>

                    <div className="w-full sm:w-auto">
                      <a 
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-6 rounded-xl bg-gradient-to-r from-rose-600 to-indigo-600 hover:from-rose-500 hover:to-indigo-500 text-white font-bold text-sm shadow-sm hover:shadow transition-all text-center"
                      >
                        <span>楽天トラベルで宿泊プランを確認</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: 気候・防寒ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Climate & Packing</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Snowflake className="w-6 h-6 text-rose-500 shrink-0" />
              12月・1月の気温推移と長崎の坂道散策・夜景鑑賞防寒ガイド
            </h2>
          </div>

          <div className="text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              長崎市は坂が多く徒歩での移動が多いため、歩いている時は体が温まる一方、稲佐山展望台や屋外のランタンフェス会場で立ち止まると海風で急速に冷え込みます。歩きやすさと防風性を両立させた服装選びがポイントです。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-rose-950 text-base flex items-center justify-between">
                <span>12月（クリスマス期）</span>
                <span className="text-xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded">平均 9℃ / 最低 5℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                南山手やグラバー園のイルミネーションを歩く時期。日没後は港からの海風が冷たいため、ウールコートや防風アウター、ストールがあると快適です。石畳用のスニーカーを選びましょう。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-rose-950 text-base flex items-center justify-between">
                <span>1月上旬〜中旬（新春初詣）</span>
                <span className="text-xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded">平均 7℃ / 最低 3℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                諏訪神社の長い石段を登る初詣時期。朝晩の冷え込みが厳しくなります。厚手のニットやダウンジャケット、手袋を装備。稲佐山山頂へ行く場合は完全防寒で臨んでください。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-3 bg-slate-50/50">
              <div className="font-bold text-rose-950 text-base flex items-center justify-between">
                <span>1月下旬（ランタンフェス期）</span>
                <span className="text-xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded">平均 6℃ / 最低 2℃</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                ランタンフェスで夜間の屋外歩行時間が長くなる時期。足元からの底冷えを防ぐ厚手ソックスや保温インナー、使い捨てカイロをポケットに忍ばせておくと快適に楽しめます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: 夜景＆ランタン撮影攻略ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Photography Guide</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Camera className="w-6 h-6 text-rose-500 shrink-0" />
              1000万ドルの光を美しく撮る！稲佐山夜景＆ランタンフェス撮影攻略
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-rose-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                稲佐山展望台のすり鉢パノラマ
              </h3>
              <p className="leading-relaxed">
                日没後15〜30分の「ブルーアワー」がベスト。空に深い藍色が残る時間帯に撮ると、長崎港の地形と街の温かな灯りのコントラストが美しく映えます。風が強いため手ブレ防止に両脇をしっかり締めて撮影を。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-rose-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                眼鏡橋の黄色いランタンリフレクション
              </h3>
              <p className="leading-relaxed">
                中島川に架かる眼鏡橋周辺は黄色いランタンが彩る名所。川岸の遊歩道に降りて水面すれすれから狙うと、二連アーチと水面に揺れる黄金の光が重なる幻想的なシンメトリー構図が完成します。
              </p>
            </div>

            <div className="border border-slate-200 rounded-xl p-5 space-y-2.5 bg-slate-50/50">
              <h3 className="font-bold text-rose-950 text-sm sm:text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                湊公園の巨大干支オブジェと紅提灯
              </h3>
              <p className="leading-relaxed">
                メイン会場の湊公園では、頭上を埋め尽くす真っ赤な提灯越しに巨大な干支メインオブジェを見上げる広角アングルが圧巻。夕暮れ時の17時過ぎは提灯の光が鮮やかに発色します。
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: 冬の美食＆長門お土産ガイド */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Gourmet & Souvenirs</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
              <Utensils className="w-6 h-6 text-rose-500 shrink-0" />
              長崎の冬を彩る異国情緒の美食＆老舗銘菓・角煮まんお土産
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-rose-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                熱々の白濁濃厚スープ「本場長崎ちゃんぽん」
              </h3>
              <p className="leading-relaxed">
                寒風の中で街を散策した後にいただく本場のちゃんぽんは至高の温もり。豚骨と鶏ガラを強火で炊き上げた白濁スープに、冬の牡蠣、イカ、豚肉、たっぷりのキャベツの甘みが溶け出します。もちもちの太麺に濃厚スープが絡み、一口すするごとに体の芯から温まる幸福感に包まれます。
              </p>
            </div>

            <div className="border border-slate-100 rounded-xl p-5 bg-gradient-to-br from-slate-50 to-rose-50/30 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                長崎カステラ＆角煮まんじゅうの絶品土産
              </h3>
              <p className="leading-relaxed">
                創業数百年の伝統を誇る「福砂屋」の手焼きカステラ（ざらめ糖の食感が絶妙）や、ふっくら生地にとろける豚角煮を挟んだ「岩崎本舗の長崎角煮まんじゅう」は長崎土産の最高峰。さらに、卓袱料理のデザートとして愛される「びわゼリー」や長崎和牛の旨味が凝縮されたしぐれ煮など、歴史ある港町ならではの美味を持ち帰ることができます。
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: 1泊2日モデルコース */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-rose-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-bold text-white flex items-center gap-2">
              <Compass className="w-6 h-6 text-rose-400 shrink-0" />
              ランタンフェスと稲佐山夜景を満喫する長崎1泊2日モデルコース
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-rose-300 text-lg">
                <span className="bg-rose-600 text-white text-xs px-2.5 py-1 rounded-md">Day 1</span>
                <span>南山手グラバー園散策＆稲佐山世界新三大夜景とランタン点灯</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>12:30</strong> 長崎駅に到着。路面電車で南山手へ移動し、大浦天主堂とグラバー園を散策。
                </p>
                <p>
                  <strong>15:30</strong> ホテルへチェックイン。荷物を置いて一息つく。
                </p>
                <p>
                  <strong>17:00</strong> 稲佐山展望台へ。日没直後のブルーアワーから輝き始める1000万ドルのすり鉢夜景を鑑賞。
                </p>
                <p>
                  <strong>19:00</strong> 新地中華街・湊公園へ移動。1万5000個の中国ランタンが灯る光の海を歩き、龍踊りを観賞。
                </p>
                <p>
                  <strong>20:30</strong> 本場の特製長崎ちゃんぽんと長崎和牛を味わい、ホテルへ戻る。
                </p>
              </div>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 space-y-4 border border-slate-700">
              <div className="flex items-center gap-2 font-bold text-rose-300 text-lg">
                <span className="bg-rose-600 text-white text-xs px-2.5 py-1 rounded-md">Day 2</span>
                <span>諏訪神社で清らかな新春初詣＆眼鏡橋・出島めぐり</span>
              </div>
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                <p>
                  <strong>08:30</strong> 港を望むダイニングで角煮まんじゅうや郷土色豊かな朝食ビュッフェを楽しむ。
                </p>
                <p>
                  <strong>09:30</strong> 長崎総鎮守「諏訪神社」へ参拝。長崎くんちの舞台となる大石段を登り、新年の開運を祈願。
                </p>
                <p>
                  <strong>11:30</strong> 中島川の眼鏡橋へ。黄色いランタンが架かる水面を眺め、ハートストーンを探して散策。
                </p>
                <p>
                  <strong>13:00</strong> 出島で鎖国時代の歴史に触れた後、長崎カステラや銘菓をお土産に購入して帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: FAQ */}
        <section className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <span className="text-rose-600 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900">
              冬の長崎・ランタンフェスティバル旅行 よくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="border border-slate-200 rounded-xl p-5 bg-slate-50/30 space-y-2">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base flex items-start gap-2">
                  <span className="text-rose-600 font-extrabold shrink-0">Q.</span>
                  <span>{item.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: 周遊内部リンク */}
        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-rose-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Related Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              あわせて楽しむ！長崎・九州の人気イルミネーション＆温泉特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/winter-nagasaki-huistenbosch-christmas-lights-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-rose-400 block mb-1">佐世保・ハウステンボス冬特集</span>
              <span className="font-bold text-white block">世界最大1300万球の光の王国！白銀クリスマス＆直営名宿</span>
            </Link>

            <Link 
              href="/winter-nagasaki-unzen-onsen-jigoku-mist-beef-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-rose-400 block mb-1">雲仙温泉冬特集</span>
              <span className="font-bold text-white block">雲仙地獄の湯煙と霧氷の山並み！酸性硫黄泉と雲仙牛名宿</span>
            </Link>

            <Link 
              href="/winter-saga-takeo-onsen-romon-saga-beef-stay"
              className="p-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors block"
            >
              <span className="text-xs text-rose-400 block mb-1">佐賀・武雄温泉冬特集</span>
              <span className="font-bold text-white block">国重要文化財・武雄温泉楼門と美肌名湯！佐賀牛を味わう名宿</span>
            </Link>
          </div>
        </section>

      </main>

      {/* Footer Navigation */}
      <footer className="max-w-5xl mx-auto px-4 sm:px-6 py-12 border-t border-slate-200 mt-16 text-center text-xs text-slate-500">
        <p>© 2026 地域の宿探訪 - 日本の四季と極上ホテル・旅館を巡る旅</p>
      </footer>
    
      <HubRelatedPosts currentSlug="winter-nagasaki-city-lantern-festival-inasayama-nightview-champon-stay" />
</div>
  );
}
