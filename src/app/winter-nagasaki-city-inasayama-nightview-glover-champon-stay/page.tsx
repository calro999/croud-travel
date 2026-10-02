import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月長崎】世界新三大夜景・稲佐山1000万ドルの冬夜景とグラバー園イルミネーション＆本場ちゃんぽん・卓袱料理を巡る夜景特等席名宿5選",
  description: "11月から1月、大気が澄み渡る冬の長崎は、モナコ・上海と並び「世界新三大夜景」に認定された稲佐山からのパノラマ夜景が年間で最も美しく輝く最高のシーズンを迎えます。洋館が温かな光に包まれるグラバー園のウィンターイルミネーション、石畳のオランダ坂、湯気立ち上る長崎新地中華街の濃厚ちゃんぽんや皿うどん・熱々の角煮まんじゅう、老舗料亭で受け継がれる長崎伝統「卓袱（しっぽく）料理」、そしてお諏訪さん（鎮西大社 諏訪神社）での冬の初詣。すり鉢状の港町を見下ろす夜景特等席の名宿5選とモデルコースをご紹介します。",
  keywords: '稲佐山 夜景 冬, 世界新三大夜景 長崎, グラバー園 イルミネーション, 長崎ちゃんぽん 新地中華街, 卓袱料理 長崎, 稲佐山観光ホテル, ガーデンテラス長崎, ルークプラザホテル, ホテルニュー長崎, 諏訪神社 初詣, 11月 12月 1月 長崎旅行',
  alternates: {
    canonical: 'https://croud-travel.com/winter-nagasaki-city-inasayama-nightview-glover-champon-stay'
  },
  openGraph: {
    title: "【11・12・1月長崎】世界新三大夜景・稲佐山1000万ドルの冬夜景とグラバー園イルミネーション＆本場ちゃんぽん・卓袱料理を巡る夜景特等席名宿5選",
    description: "11月から1月、大気が澄み渡る冬の長崎は、モナコ・上海と並び「世界新三大夜景」に認定された稲佐山からのパノラマ夜景が年間で最も美しく輝く最高のシーズンを迎えます。洋館が温かな光に包まれるグラバー園のウィンターイルミネーション、石畳のオランダ坂、湯気立ち上る長崎新地中華街の濃厚ちゃんぽんや皿うどん・熱々の角煮まんじゅう、老舗料亭で受け継がれる長崎伝統「卓袱（しっぽく）料理」、そしてお諏訪さん（鎮西大社 諏訪神社）での冬の初詣。すり鉢状の港町を見下ろす夜景特等席の名宿5選とモデルコースをご紹介します。",
    url: 'https://croud-travel.com/winter-nagasaki-city-inasayama-nightview-glover-champon-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の長崎・稲佐山から望む世界新三大夜景'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月長崎】世界新三大夜景・稲佐山1000万ドルの冬夜景とグラバー園イルミネーション＆本場ちゃんぽん・卓袱料理を巡る夜景特等席名宿5選",
    description: "11月から1月、大気が澄み渡る冬の長崎は、モナコ・上海と並び「世界新三大夜景」に認定された稲佐山からのパノラマ夜景が年間で最も美しく輝く最高のシーズンを迎えます。洋館が温かな光に包まれるグラバー園のウィンターイルミネーション、石畳のオランダ坂、湯気立ち上る長崎新地中華街の濃厚ちゃんぽんや皿うどん・熱々の角煮まんじゅう、老舗料亭で受け継がれる長崎伝統「卓袱（しっぽく）料理」、そしてお諏訪さん（鎮西大社 諏訪神社）での冬の初詣。すり鉢状の港町を見下ろす夜景特等席の名宿5選とモデルコースをご紹介します。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function NagasakiCityInasayamaWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月長崎】世界新三大夜景・稲佐山1000万ドルの冬夜景とグラバー園イルミネーション＆本場ちゃんぽん・卓袱料理を巡る夜景特等席名宿5選",
    description: "11月から1月、大気が澄み渡る冬の長崎は、モナコ・上海と並び「世界新三大夜景」に認定された稲佐山からのパノラマ夜景が年間で最も美しく輝く最高のシーズンを迎えます。洋館が温かな光に包まれるグラバー園のウィンターイルミネーション、石畳のオランダ坂、湯気立ち上る長崎新地中華街の濃厚ちゃんぽんや皿うどん・熱々の角煮まんじゅう、老舗料亭で受け継がれる長崎伝統「卓袱（しっぽく）料理」、そしてお諏訪さん（鎮西大社 諏訪神社）での冬の初詣。すり鉢状の港町を見下ろす夜景特等席の名宿5選とモデルコースをご紹介します。",
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-10-02',
    dateModified: '2026-10-02',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      url: 'https://croud-travel.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.com/winter-nagasaki-city-inasayama-nightview-glover-champon-stay'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.com/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.com/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '長崎市街＆稲佐山 世界新三大夜景と冬グルメ名宿',
        item: 'https://croud-travel.com/winter-nagasaki-city-inasayama-nightview-glover-champon-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "長崎の夜景が「世界新三大夜景」と呼ばれる理由と冬の鑑賞ベストシーズンは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "長崎の夜景は、2012年および2021年の「夜景サミット」において、モナコ、上海とともに「世界新三大夜景」に認定されています。すり鉢状の独特な地形を取り囲む山々の斜面に住宅街の灯りが立体的に重なり合い、中央に静かな長崎港と女神大橋が横たわるダイナミックな景観が最大の魅力です。特に11月〜1月の冬期は、空気中の水蒸気が減少し大気の透明度が年間で最も高くなるため、光の輪郭がくっきりと輝き、1年で最も鮮明で美しい1000万ドルの夜景を鑑賞できます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬のグラバー園のイルミネーションと見どころについて教えてください。",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "世界文化遺産「明治日本の産業革命遺産」の構成資産である旧グラバー住宅をはじめ、レトロな洋館が立ち並ぶグラバー園では、例年11月下旬から1月下旬にかけて「グラバー園ウィンターフェスティバル」が開催されます。園内の石畳や洋館が温かなイルミネーションで彩られ、高台の展望広場からはライトアップされた洋館越しに長崎港の夜景を一望できます。16時以降のトワイライトタイムから夜景への移り変わりは息を呑む美しさです。"
        }
      },
      {
        '@type': 'Question',
        name: "長崎新地中華街で味わう冬の名物グルメ「長崎ちゃんぽん・皿うどん」と「卓袱料理」の違いは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "日本三大中華街の一つ「長崎新地中華街」では、寒さが染みる冬に熱々の「長崎ちゃんぽん」が格別の美味しさです。鶏ガラと豚骨を長時間煮込んだ濃厚な白湯スープに、牡蠣・イカ・エビなどの魚介とキャベツ・豚肉が山盛りに合わさり身体を芯から温めます。一方「卓袱（しっぽく）料理」は、朱塗りの円卓を囲んで大皿料理を直箸で取り分けて食べる長崎独自の宴会料理で、和食・中華・オランダ料理が融合した「和華乱（わからん）文化」の象徴です。「お鰭（おひれ）」と呼ばれる吸い物から始まり、豚の角煮（東坡肉）やハトシなどが並びます。"
        }
      },
      {
        '@type': 'Question',
        name: "年末年始の初詣スポット「鎮西大社 諏訪神社（お諏訪さん）」の特徴は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "地元で「お諏訪さん」と親しまれる鎮西大社 諏訪神社は、秋の大祭「長崎くんち」で全国的に知られる長崎の総氏神です。大門へと続く長い石段（長坂）を登りきると、長崎の街並みを見下ろす壮大な景観が広がります。厄除け・縁結び・海上安全の神様として篤い信仰を集め、元日から三が日にかけては県内外から数十万人の初詣客で賑わいます。参道で売られる温かい名物「長崎カステラ」や甘酒を味わいながらの新春参拝が冬の恒例です。"
        }
      },
      {
        '@type': 'Question',
        name: "稲佐山山頂展望台へのアクセス方法と冬の寒さ対策は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "稲佐山山頂へは、山麓の淵神社駅から「長崎ロープウェイ」を利用するか、中腹駐車場から「スロープカー」に乗車してアクセスするのが人気です。また車やタクシーで山頂展望台へ直接行くことも可能です。山頂は標高333mあり、海からの風が吹き抜けるため、冬の夜間は市街地よりも体感温度が3〜5度低くなります。夜景鑑賞には厚手のダウンジャケット、手袋、マフラーなどの防寒装備が必須です。中腹の夜景ホテルに宿泊すれば、部屋の窓や温かい露天風呂から寒さを気にせず夜景を満喫できます。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "稲佐山観光ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/8438/8438.jpg",
              rating: 4.35,
              reviews: 1243,
              price: "¥15,210〜",
              access: "ＪＲ長崎駅より車で10分◆長崎駅から「稲佐山高部」行きバス「観光ホテル前」下車◆長崎駅から無料送迎有（1日2便、要予約）",
              special: "長崎の夜景を最高にお楽しみいただけます。季節感を大切にしたお料理をご提供！全館無料Wi-Fi接続",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8438%2F8438.html",
              story: "稲佐山の中腹に位置し、長崎港と市街地を眼下に見晴らす絶好のロケーションを誇る名門ホテル「稲佐山観光ホテル」。最上階の展望ラウンジや露天風呂からは、宝石を散りばめたような世界新三大夜景がパノラマで広がります。冬の澄み切った夜空の下、湯船に浸かりながら眺める夜景は感動の極み。夕食には長崎近海で獲れた旬の地魚の造りや、伝統の卓袱料理を現代風にアレンジした会席コース。冬の特選として長崎和牛の陶板焼きや名物の角煮が並び、港町の歴史と美食を贅沢に体感できます。無料の送迎バスも運行しており、夜の稲佐山展望台観光へのサポートも手厚い安心の宿です。",
              roomTip: "夜景側スーペリア和洋室。大きなピクチャーウィンドウの前に設えられたリラックスチェアから、長崎港の灯りと女神大橋のライトアップを独り占めできます。",
              gourmetTip: "「長崎美味三昧会席」。長崎和牛のステーキ、旬魚の造り盛り合わせ、長崎伝統のじっくり煮込んだ豚角煮が付いた贅沢プラン。",
              highlights: [
                "稲佐山中腹からのパノラマ夜景・展望大浴場と露天風呂から眺める1000万ドルの絶景",
                "長崎和牛の陶板焼きと旬魚のお造り・長崎伝統の卓袱料理を取り入れた豪華会席",
                "夜景側客室を多数完備・カップルの記念日旅行から家族旅行まで幅広く愛される定番宿"
              ]
            },
            {
              id: 2,
              name: "ガーデンテラス長崎ホテル＆リゾート",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/74749/74749.jpg",
              rating: 4.57,
              reviews: 332,
              price: "¥17,100〜",
              access: "長崎駅より車で約10分。稲佐山中腹にある当ホテルまで毎日16：00～19：00長崎駅無料シャトルバス運行あり。",
              special: "全室テラス付。46平米以上の客室から眺める世界新三大夜景と世界遺産の街。大人の夜景リゾートホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74749%2F74749.html",
              story: "世界的建築家・隈研吾氏が設計を手掛け、稲佐山の中腹に凛と佇む全室オーシャン＆夜景ビューのラグジュアリーデザイナーズホテル「ガーデンテラス長崎ホテル＆リゾート」。木を基調とした洗練されたモダン建築と、長崎港の美しいパノラマが一体となった非日常の空間が広がります。全室にバルコニーとビューバスが備えられ、バスルームから夜景を眺める至福の湯浴みが叶います。館内には創作フレンチ、鉄板焼き、天ぷら、鮨の4つの専門レストランがあり、長崎の冬の厳選食材を使った至高のディナーを夜景とともに堪能できます。特別な記念日やご褒美旅行に最適な最高峰の隠れ家です。",
              roomTip: "タワースイート。広々としたテラスと独立したリビングスペースを備え、刻一刻と表情を変える夕暮れから満天の夜景へのグラデーションを楽しめます。",
              gourmetTip: "「鉄板焼き・長崎和牛＆冬アワビコース」。目の前の鉄板でダイナミックに焼き上げられる長崎和牛フィレと、冬に旨味が増す近海アワビの極上コース。",
              highlights: [
                "世界的建築家・隈研吾氏設計のデザイナーズリゾート・全室バルコニー＆ビューバス完備",
                "鉄板焼き・フレンチなど4つの洗練されたレストラン・長崎の冬食材を極めた美食",
                "贅を尽くしたプライベートステイ・大人のための記念日・冬のラグジュアリートリップ"
              ]
            },
            {
              id: 3,
              name: "ルークプラザホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4676/4676.jpg",
              rating: 4.39,
              reviews: 895,
              price: "¥6,520〜",
              access: "JR長崎駅からタクシーで7分。長崎バス5番系統「稲佐山」または「稲佐高部」乗車、観光ホテル前下車徒歩3分。",
              special: "長崎県口コミランキング総合部門上位★長崎を一望できる一等地★無料シャトルバス",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4676%2F4676.html",
              story: "稲佐山の中腹、長崎の街並みと港を正面から見下ろす高台に建ち、ヨーロッパ調のエレガントな佇まいが魅力のシティリゾート「ルークプラザホテル」。ロビーに一歩足を踏み入れた瞬間から、ガラス越しに広がる大パノラマ夜景が出迎えてくれます。客室は広々とした設計で、夜景を眺めながら静かにくつろげるプライベート感が抜群。レストランでは長崎の新鮮な海の幸と地元野菜を活かした洋食コースや、和洋折衷のディナーを提供。長崎駅からの無料シャトルバスも運行しており、観光とアクセスの利便性も申し分ありません。",
              roomTip: "プレミアムハーバービュールーム。高層階から長崎駅周辺や出島、南山手方面のきらめく夜景をワイドな視界で見渡せます。",
              gourmetTip: "「シェフ特選・長崎テロワールディナー」。長崎産真鯛のポワレや長崎和牛のグリルを特製赤ワインソースで味わう洗練された洋食コース。",
              highlights: [
                "ヨーロッパ調のエレガントなホテル・長崎港正面のワイドな夜景ビューと高いホスピタリティ",
                "長崎駅からの無料シャトルバス運行・地元食材を活かしたシェフ特選ディナー",
                "落ち着いた静寂な滞在環境・夜景ラウンジでのロマンチックなひととき"
              ]
            },
            {
              id: 4,
              name: "ホテルニュー長崎（ＨＯＴＥＬ　ＮＥＷ　ＮＡＧＡＳＡＫＩ）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/4629/4629.jpg",
              rating: 4.44,
              reviews: 1177,
              price: "¥6,400〜",
              access: "ＪＲ長崎駅横☆JR長崎駅東口から徒歩5分☆",
              special: "ＪＲ長崎駅に隣接、観光・ビジネスにとても便利。和洋中レストランとバーラウンジがあるシティホテル。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4629%2F4629.html",
              story: "JR長崎駅のすぐ隣、観光やグルメ巡りにこれ以上ない抜群の利便性を誇る長崎のランドマークホテル「ホテルニュー長崎」。駅直結のロケーションでありながら、格式高いホスピタリティと落ち着いた上質な空間が旅の疲れを優しく癒やします。グラバー園や大浦天主堂、新地中華街、出島への路面電車乗り場も至近。ホテル内には中国料理「桃華林」をはじめとする名店が揃い、冬の寒さに染み渡る本格的な長崎ちゃんぽんやフカヒレ料理、広東料理の粋を尽くしたディナーを心ゆくまで味わえます。洗練されたサービスは一人旅から家族旅行まで高い評価を得ています。",
              roomTip: "エグゼクティブツインルーム。上質なシモンズ社製ベッドと落ち着いたインテリアで、ビジネスから冬の観光まで快適な滞在を約束。",
              gourmetTip: "「中国料理 桃華林・特選ディナーコース」。本場の技法で仕立てる極上長崎ちゃんぽんと、じっくり蒸し上げた豚角煮、海鮮炒めの名品コース。",
              highlights: [
                "JR長崎駅直結の抜群の利便性・路面電車や観光地へのアクセス抜群と本格中国料理",
                "中国料理「桃華林」の極上長崎ちゃんぽんと角煮・快適なシモンズベッドでの睡眠",
                "出島・グラバー園・新地中華街の観光拠点に最適・ビジネス・一人旅にも高い評価"
              ]
            },
            {
              id: 5,
              name: "長崎にっしょうかん",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/72046/72046.jpg",
              rating: 3.57,
              reviews: 1704,
              price: "¥8,200〜",
              access: "ＪＲ長崎駅西口からホテルまでの定時無料送迎バスを運行しております。詳しくはアクセスページをご確認ください。",
              special: "長崎港を見下ろす高台に位置し、街側のお部屋や展望大浴場からは美しい長崎夜景がお楽しみいただけます。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72046%2F72046.html",
              story: "長崎港を見下ろす金比羅山の高台に建ち、稲佐山とは対岸の位置から長崎の立体的なすり鉢状夜景を一望できる眺望自慢の宿「長崎にっしょうかん」。夜には長崎港を挟んでそびえる稲佐山のイルミネーションと市街地の灯りがパノラマで広がり、独特の情緒ある景観を楽しめます。広々とした大浴場からも夜景を望むことができ、旅の疲れを湯の中でゆっくりと癒やせます。夕食には長崎名物の卓袱料理の要素を取り入れた和食会席や、海鮮を中心としたバイキングなど、多彩なプランが用意されており、ファミリーやグループ旅行にも大人気です。",
              roomTip: "港側和室。畳の部屋から長崎港の灯りをのんびりと見渡すことができ、グループ旅行や家族連れに安心の寛ぎ空間です。",
              gourmetTip: "「長崎郷土会席プラン」。長崎名物ハトシ（海老のすり身トースト揚げ）や豚の角煮、近海産鮮魚のお造りを味わう定番の郷土膳。",
              highlights: [
                "長崎港を挟んだ対岸の高台から望むすり鉢状夜景・広々とした展望大浴場と郷土会席",
                "名物ハトシや豚角煮の郷土料理プラン・家族連れやグループにも安心の和室完備",
                "コストパフォーマンス抜群の夜景ステイ・朝食バイキングで長崎の味覚を堪能"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "長崎の夜景が「世界新三大夜景」と呼ばれる理由と冬の鑑賞ベストシーズンは？",
    "a": "長崎の夜景は、2012年および2021年の「夜景サミット」において、モナコ、上海とともに「世界新三大夜景」に認定されています。すり鉢状の独特な地形を取り囲む山々の斜面に住宅街の灯りが立体的に重なり合い、中央に静かな長崎港と女神大橋が横たわるダイナミックな景観が最大の魅力です。特に11月〜1月の冬期は、空気中の水蒸気が減少し大気の透明度が年間で最も高くなるため、光の輪郭がくっきりと輝き、1年で最も鮮明で美しい1000万ドルの夜景を鑑賞できます。"
  },
  {
    "q": "冬のグラバー園のイルミネーションと見どころについて教えてください。",
    "a": "世界文化遺産「明治日本の産業革命遺産」の構成資産である旧グラバー住宅をはじめ、レトロな洋館が立ち並ぶグラバー園では、例年11月下旬から1月下旬にかけて「グラバー園ウィンターフェスティバル」が開催されます。園内の石畳や洋館が温かなイルミネーションで彩られ、高台の展望広場からはライトアップされた洋館越しに長崎港の夜景を一望できます。16時以降のトワイライトタイムから夜景への移り変わりは息を呑む美しさです。"
  },
  {
    "q": "長崎新地中華街で味わう冬の名物グルメ「長崎ちゃんぽん・皿うどん」と「卓袱料理」の違いは？",
    "a": "日本三大中華街の一つ「長崎新地中華街」では、寒さが染みる冬に熱々の「長崎ちゃんぽん」が格別の美味しさです。鶏ガラと豚骨を長時間煮込んだ濃厚な白湯スープに、牡蠣・イカ・エビなどの魚介とキャベツ・豚肉が山盛りに合わさり身体を芯から温めます。一方「卓袱（しっぽく）料理」は、朱塗りの円卓を囲んで大皿料理を直箸で取り分けて食べる長崎独自の宴会料理で、和食・中華・オランダ料理が融合した「和華乱（わからん）文化」の象徴です。「お鰭（おひれ）」と呼ばれる吸い物から始まり、豚の角煮（東坡肉）やハトシなどが並びます。"
  },
  {
    "q": "年末年始の初詣スポット「鎮西大社 諏訪神社（お諏訪さん）」の特徴は？",
    "a": "地元で「お諏訪さん」と親しまれる鎮西大社 諏訪神社は、秋の大祭「長崎くんち」で全国的に知られる長崎の総氏神です。大門へと続く長い石段（長坂）を登りきると、長崎の街並みを見下ろす壮大な景観が広がります。厄除け・縁結び・海上安全の神様として篤い信仰を集め、元日から三が日にかけては県内外から数十万人の初詣客で賑わいます。参道で売られる温かい名物「長崎カステラ」や甘酒を味わいながらの新春参拝が冬の恒例です。"
  },
  {
    "q": "稲佐山山頂展望台へのアクセス方法と冬の寒さ対策は？",
    "a": "稲佐山山頂へは、山麓の淵神社駅から「長崎ロープウェイ」を利用するか、中腹駐車場から「スロープカー」に乗車してアクセスするのが人気です。また車やタクシーで山頂展望台へ直接行くことも可能です。山頂は標高333mあり、海からの風が吹き抜けるため、冬の夜間は市街地よりも体感温度が3〜5度低くなります。夜景鑑賞には厚手のダウンジャケット、手袋、マフラーなどの防寒装備が必須です。中腹の夜景ホテルに宿泊すれば、部屋の窓や温かい露天風呂から寒さを気にせず夜景を満喫できます。"
  }
];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-amber-100 selection:text-amber-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の長崎・稲佐山山頂から見下ろす世界新三大夜景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-amber-900/80 backdrop-blur-md text-amber-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-amber-400/30">
            <Sparkles className="w-4 h-4 text-amber-300" />
            11月・12月・1月 冬の長崎・世界新三大夜景＆グラバー園イルミネーション特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月長崎】世界新三大夜景・稲佐山1000万ドルの冬夜景とグラバー園イルミネーション＆本場ちゃんぽん・卓袱料理を巡る夜景特等席名宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            1年の中で大気の透明度が最高潮に達する冬の長崎。標高333mの稲佐山から見渡す光の海は、モナコや上海と並び称される「世界新三大夜景」の真骨頂。石畳の南山手を彩るグラバー園のイルミネーション、湯気立ち上る新地中華街の濃厚ちゃんぽんや角煮まんじゅう、和華乱文化が息づく伝統の卓袱料理、そして新春の諏訪神社初詣。すり鉢状の美しい港町を見下ろす特等席のホテルで過ごす、心あたたまる冬の異国情緒ステイへ。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 最適時期：11月中旬〜1月下旬（大気清澄・イルミネーション開催）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> エリア：長崎県長崎市（稲佐山・南山手・新地中華街）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-amber-400" /> 名物：長崎ちゃんぽん・皿うどん・卓袱料理・長崎和牛・角煮まん</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              澄んだ冬空に輝く1000万ドルのパノラマと、港町を包む異国情緒の温もり
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              西の果ての港町・長崎は、鎖国時代から唯一西洋に開かれた窓口として、独自の「和華乱（日本・中国・オランダ）」文化を育んできました。その異国情緒あふれる街並みが最もドラマチックな美しさを放つのが、11月から1月にかけての冬のシーズンです。冷え込みとともに空気中の湿度が下がり、大気が凛と澄み渡るこの季節、標高333メートルの稲佐山から見下ろす夜景は、息を呑むほどの鮮烈な輝きを放ちます。
            </p>
            <p>
              長崎の夜景が「世界新三大夜景」として世界中の旅人を魅了する理由は、その類まれな地形にあります。すり鉢状に海を取り囲む山々の斜面にまで民家が立ち並び、光がまるで立体的なタペストリーのように重なり合います。中心に静かに横たわる長崎港の水面には灯りが反射し、遠くにはライトアップされた女神大橋が優美な曲線を描く。まさに1000万ドルと讃えられる光のスペクタクルがそこにあります。
            </p>
            <p>
              日中は、世界遺産の旧グラバー住宅が建つ南山手のグラバー園へ。冬期にはレトロな洋館や樹木がイルミネーションで照らされ、トワイライトタイムには港の夕景と光の競演が楽しめます。石畳のオランダ坂を散策した後は、日本三大中華街の一つ「長崎新地中華街」へ。冷えた身体に染み渡る濃厚な白湯スープの長崎ちゃんぽん、パリパリの麺に具だくさんの餡がかかった皿うどん、ふんわり生地にとろける豚肉を挟んだ角煮まんじゅうの湯気が、旅人の心を芯から温めてくれます。
            </p>
            <p>
              夜は稲佐山の中腹に佇むホテルへチェックイン。客室の窓一面に広がる夜景を眺めながら、長崎和牛や近海の地魚、伝統の卓袱料理を取り入れたディナーに舌鼓。展望風呂から長崎港の灯りを眺めながら湯に浸かるひとときは、日常の喧騒を忘れさせてくれる至高の癒やしです。年末年始には長崎の総氏神・鎮西大社 諏訪神社（お諏訪さん）での初詣も組み込み、歴史と絶景に彩られた贅沢な冬の旅を満喫できます。
            </p>
          </div>
        </section>

        {/* 3 Major Winter Highlights */}
        <section className="space-y-6">
          <div className="border-b border-stone-200 pb-3">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の長崎を満喫する3大感動体験
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 稲佐山からの世界新三大夜景パノラマ
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                冬の澄んだ大気のもと、光の粒が立体的にきらめく1000万ドルの絶景。稲佐山山頂展望台や中腹ホテルの客室・露天風呂から、長崎港を取り囲む光の海を独り占めする贅沢。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. グラバー園イルミネーション＆異国情緒
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                冬の夜を彩る洋館のライトアップと園内の温かな光。石畳の小径、大浦天主堂、東山手のオランダ坂を巡り、歴史ある居留地のロマンチックな雰囲気に浸る時間。
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-yellow-50 border border-yellow-200 flex items-center justify-center text-yellow-700">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 本場長崎ちゃんぽん＆伝統卓袱料理
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                新地中華街で味わう冬の海鮮・野菜たっぷりの濃厚ちゃんぽん。老舗料亭で受け継がれる円卓の卓袱料理や長崎和牛ステーキなど、東西の食文化が融合した至福の美食。
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Timeline Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-amber-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】世界新三大夜景と異国情緒を満喫する長崎の冬黄金モデルコース
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              JR長崎駅を拠点に、路面電車やシャトルバスを活用して冬の絶景夜景とグルメを無駄なく巡る王道観光プラン。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-amber-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  11:30 JR長崎駅到着 ➔ 長崎新地中華街で本場ちゃんぽん＆角煮まんランチ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  西九州新幹線かもめで長崎駅へ。路面電車で新地中華街へ移動し、名店「江山楼」などで熱々の長崎ちゃんぽん、具材の旨味が染み出た皿うどん、蒸したての豚角煮まんじゅうを頬張り、身体を温めます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  13:30 出島散策 ➔ オランダ坂からグラバー園イルミネーションへ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  復元された出島の和蘭商館跡を見学後、風情あふれるオランダ坂の石畳を散策。夕暮れに合わせて南山手のグラバー園へ入場。トワイライトタイムに点灯する洋館のイルミネーションと長崎港の夕景を堪能します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  17:30 稲佐山の夜景ホテルへチェックイン ➔ 1000万ドルのパノラマ夜景＆長崎和牛ディナー
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  稲佐山中腹の特等席ホテルへ。客室の大きな窓や展望テラスから、すり鉢状の街並みが無数の宝石のように輝く世界新三大夜景を一望。夕食は長崎和牛や卓袱の技が光る会席ディナーを味わいます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:00 鎮西大社 諏訪神社（お諏訪さん）初詣 ➔ 老舗カステラ本舗めぐり
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  長崎の総氏神・諏訪神社の長坂石段を登り新春の開運祈願。その後、福砂屋や松翁軒などの老舗で伝統手焼きカステラをお土産に購入し、長崎出島ワーフで海を眺めて帰路へ就きます。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Gastronomy & Culture Guide Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              和華乱の美学が生んだ長崎独自の食文化と伝統の銘品
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-amber-700" />
                円卓を囲む和華乱の粋「卓袱（しっぽく）料理」の礼儀作法
              </h3>
              <p>
                卓袱料理は、朱塗りの円卓を囲み、身分の上下なく直箸で料理を取り分ける長崎独自のスタイル。宴の始まりは当主の「お鰭（おひれ）をどうぞ」という挨拶から。お鰭とは鯛のヒレが入った吸い物のことで、「お客様一人に対し魚一匹を使って歓迎します」という誠意を表します。この吸い物を飲み干した後は自由にお酒や料理を歓談とともに楽しむのが粋な長崎の流儀です。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-amber-700" />
                四百年受け継がれる手焼きカステラと南蛮菓子の歴史
              </h3>
              <p>
                室町時代末期にポルトガル人によって伝えられたカステラは、長崎の職人たちの手で日本独自の極上和菓子へと進化しました。底にザラメ糖を残す製法や、小麦粉・卵・砂糖・水飴のみで泡立てる「別立て法」など、老舗ごとに秘伝の技が継承されています。冬には熱い緑茶や淹れたての珈琲とともにいただくしっとりとしたカステラが至福のひとときをもたらします。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel Recommendations Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Selected Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              世界新三大夜景と冬の長崎グルメを堪能する特等席名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              楽天トラベル公式APIより取得した最新データに基づく、夜景眺望・料理・立地が高評価の宿。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px]">
                    <img 
                      src={h.img} 
                      alt={h.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                          {h.access}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-stone-600">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-stone-900 text-sm">{h.rating}</span>
                          <span>({h.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 font-medium">
                        {h.special}
                      </p>

                      <p className="text-sm text-stone-700 leading-relaxed pt-2">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 bg-stone-50 rounded-2xl p-4 border border-stone-200/70 text-xs sm:text-sm text-stone-700">
                      <div className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        この宿の注目ポイント
                      </div>
                      <ul className="space-y-1.5 list-disc list-inside text-stone-600">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="leading-relaxed">{hl}</li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-stone-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="font-bold text-stone-900">客室の提案：</span>
                          <span className="text-stone-600">{h.roomTip}</span>
                        </div>
                        <div>
                          <span className="font-bold text-stone-900">料理の提案：</span>
                          <span className="text-stone-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-lg sm:text-xl font-black text-amber-900">{h.price}</span>
                      </div>

                      <a
                        href={h.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-amber-800 hover:bg-amber-900 text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-xl shadow-xs transition-colors"
                      >
                        楽天トラベルで空室・プランを見る
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-amber-50/60 rounded-3xl p-6 sm:p-10 border border-amber-200/60 space-y-6">
          <div className="border-b border-amber-200/80 pb-4">
            <span className="text-amber-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
              冬の長崎市街＆稲佐山を快適に旅するための実践アドバイス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-amber-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-amber-700" />
                稲佐山山頂の防寒対策
              </div>
              <p className="leading-relaxed text-stone-700">
                稲佐山山頂（標高333m）は海風が強く吹き抜け、市街地より体感温度がぐっと下がります。夜景鑑賞には厚手の手袋、マフラー、ダウンコートを用意しましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-amber-700" />
                坂の街・歩きやすい靴選び
              </div>
              <p className="leading-relaxed text-stone-700">
                長崎市内はオランダ坂やグラバー園周辺をはじめ、石畳の階段や坂道が多く存在します。冬は足元が冷えやすく滑りやすいため、クッション性の高いスニーカーやウォーキングシューズが必須です。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-700" />
                夜景側客室の早期予約
              </div>
              <p className="leading-relaxed text-stone-700">
                稲佐山周辺のホテルは「夜景側」と「山側」で景観が大きく異なります。冬の澄んだ夜景を部屋から楽しみたい場合は、必ずプラン名に「夜景側」「ハーバービュー」と明記された客室を早めに確保してください。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の長崎市街・稲佐山夜景＆グルメに関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-amber-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-3 pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links Section */}
        <section className="border-t border-stone-200 pt-10 space-y-6">
          <div className="space-y-1">
            <span className="text-amber-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい全国の冬景色・夜景・温泉特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-nagasaki-huistenbosch-christmas-lights-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-800 font-bold text-xs block mb-1">長崎・佐世保</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-900 transition-colors line-clamp-2">
                世界最大1300万球・ハウステンボスの光の王国クリスマス＆直営名宿
              </span>
            </Link>

            <Link 
              href="/winter-nagasaki-unzen-onsen-jigoku-muhyo-unzen-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-800 font-bold text-xs block mb-1">長崎・雲仙温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-900 transition-colors line-clamp-2">
                白煙上げる雲仙地獄と普賢岳の霧氷絶景・濃厚硫黄泉＆雲仙牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-nagasaki-hirado-onsen-kue-hirame-hirado-beef-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-800 font-bold text-xs block mb-1">長崎・平戸</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-900 transition-colors line-clamp-2">
                冬の高級魚クエ＆平目まつり・平戸牛と南蛮情緒の平戸温泉名宿
              </span>
            </Link>

            <Link 
              href="/winter-saga-tara-takezaki-crab-yutoku-inari-ureshino-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-800 font-bold text-xs block mb-1">佐賀・太良町＆嬉野</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-900 transition-colors line-clamp-2">
                冬の内子たっぷり竹崎カニと日本三大稲荷・祐徳稲荷神社初詣名宿
              </span>
            </Link>

            <Link 
              href="/winter-miyazaki-takachiho-night-kagura-beef-onsen-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-800 font-bold text-xs block mb-1">宮崎・高千穂</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-900 transition-colors line-clamp-2">
                国の重要無形文化財・高千穂の夜神楽と真名井の滝・高千穂牛名宿
              </span>
            </Link>

            <Link 
              href="/winter-hokkaido-hakodate-yunokawa-onsen-isaribi-seafood-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-amber-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-amber-800 font-bold text-xs block mb-1">北海道・函館</span>
              <span className="text-stone-900 font-bold group-hover:text-amber-900 transition-colors line-clamp-2">
                冬の函館山100万ドルの雪夜景といさり火・湯の川温泉の海鮮名宿
              </span>
            </Link>
          </div>
        </section>
      </main>
    </article>
  );
}
