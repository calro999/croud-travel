import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Info, Heart 
} from 'lucide-react';

export const metadata: Metadata = {
  title: "伊豆高原グランイルミで過ごす冬の旅（11・12月）！日本一の体験型イルミと伊東温泉・金目鯛姿煮宿5選",
  description: "11月中旬から本格シーズンを迎える全国ランキング第1位の体験型ナイトエンターテインメント「伊豆高原グランイルミ」！光の地上絵やジップラインを満喫した後は、伊東・伊豆高原の美肌温泉露天風呂と、冬に脂が最高に乗る名物・金目鯛の姿煮に舌鼓を打つ極上リゾートステイ。",
  keywords: '伊豆高原 グランイルミ ホテル, 伊豆高原 温泉 旅館, 伊東温泉 金目鯛 宿, 伊豆高原 露天風呂 客室, 静岡 11月 12月 旅行, 伊豆 イルミネーション 宿泊',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-shizuoka-izukogen-granillumi-ito-onsen-stay/",
  },
  openGraph: {
    title: "伊豆高原グランイルミで過ごす冬の旅（11・12月）！日本一の体験型イルミと伊東温泉・金目鯛姿煮宿5選",
    description: "11月中旬から本格シーズンを迎える全国ランキング第1位の体験型ナイトエンターテインメント「伊豆高原グランイルミ」！光の地上絵やジップラインを満喫した後は、伊東・伊豆高原の美肌温泉露天風呂と、冬に脂が最高に乗る名物・金目鯛の姿煮に舌鼓を打つ極上リゾートステイ。",
    url: 'https://croud-travel.pages.dev/winter-shizuoka-izukogen-granillumi-ito-onsen-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月伊豆高原グランイルミ】日本一の体験型イルミと伊東温泉・金目鯛姿煮宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "伊豆高原グランイルミで過ごす冬の旅（11・12月）！日本一の体験型イルミと伊東温泉・金目鯛姿煮宿5選",
    description: "11月中旬から本格シーズンを迎える全国ランキング第1位の体験型ナイトエンターテインメント「伊豆高原グランイルミ」！光の地上絵やジップラインを満喫した後は、伊東・伊豆高原の美肌温泉露天風呂と、冬に脂が最高に乗る名物・金目鯛の姿煮に舌鼓を打つ極上リゾートステイ。",
  }
};

export default function IzukogenWinterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-shizuoka-izukogen-granillumi-ito-onsen-stay#article",
        "headline": "【11・12月伊豆高原グランイルミ】日本一の体験型イルミと伊東温泉・金目鯛姿煮宿5選",
        "description": "11月中旬から本格シーズンを迎える全国ランキング第1位の体験型ナイトエンターテインメント「伊豆高原グランイルミ」！光の地上絵やジップラインを満喫した後は、伊東・伊豆高原の美肌温泉露天風呂と、冬に脂が最高に乗る名物・金目鯛の姿煮に舌鼓を打つ極上リゾートステイ。",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
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
          "@id": "https://croud-travel.pages.dev/winter-shizuoka-izukogen-granillumi-ito-onsen-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-shizuoka-izukogen-granillumi-ito-onsen-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "伊豆高原グランイルミの開催期間と点灯時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "伊豆高原グランイルミは例年11月中旬から翌年8月末頃まで長期開催されます。11月・12月の点灯時間は17:00〜21:30頃（日没時間や曜日により変動あり）。伊豆シャボテン動物公園の敷地内特設エリアで開催され、東京ドーム約2個分に及ぶ広大な敷地が数百〜数千万球のLEDで埋め尽くされます。"
            }
          },
          {
            "@type": "Question",
            "name": "グランイルミが「体験型イルミネーション」と呼ばれる理由は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ただ見て歩くだけでなく、往復400mのきらめくイルミネーションの上空を滑空する「ジップライン〜流星〜」や、イルミの中を滑り降りるロングスライダー、実物大の動く恐竜エリアを巡るゴーカート、光と音のレーザーショーなど、アトラクションに乗って光の世界を全身で体感できるためです。全国イルミネーションアワードでプロが選ぶ第1位を連続受賞しています。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の伊豆名物「金目鯛」が一番美味しい時期はいつですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "相模湾・駿河湾の金目鯛（特に地キンメと呼ばれる日帰り一本釣りの金目鯛）は、産卵を終えて冬の寒さに備えて餌をたっぷり食べる11月から2月にかけてが最も脂が乗る旬のトップシーズンです。煮付けにすると黄金色の脂がタレに溶け出し、身はふっくら柔らかく濃厚な旨味が堪能できます。"
            }
          },
          {
            "@type": "Question",
            "name": "グランイルミ観賞時の服装と寒さ対策は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "伊豆高原は海沿いですが高原地帯のため、夜間は11月下旬で5℃前後、12月には0℃近くまで冷え込みます。風が吹くと体感温度がさらに下がるため、風を通さない厚手のダウンジャケットやコート、手袋、マフラーを着用してください。敷地内は坂道や階段が多いため、歩きやすいフラットなスニーカーが必須です。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-shizuoka-izukogen-granillumi-ito-onsen-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホテル＆スパ　アンダリゾート伊豆高原",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20532%2F20532.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "伊豆高原温泉　客室露天風呂付リゾートホテル　コルテラルゴ伊豆高原",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38761%2F38761.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "亀の井ホテル　伊豆高原",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70875%2F70875.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "かえで庵　伊豆高原　英国調アンティークホテル　全室露天風呂付き客室の宿",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14738%2F14738.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "ＳＫＹ－ＨＩＬＬ　ＨＯＴＥＬ　伊豆高原",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187179%2F187179.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "ホテル＆スパ　アンダリゾート伊豆高原",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/20532/20532.jpg",
              rating: 4.55,
              reviews: 3465,
              price: "¥16,800〜",
              access: "伊豆高原駅より徒歩９分（送迎有）／東名厚木ＩＣ→小田原厚木道路・小田原IC→R１３５号より約８５分",
              special: "1日中遊べるアンダワールド！10箇の貸切温泉やカラオケ・飲み放題もぜんぶ無料のオールインクルーシブ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20532%2F20532.html",
              story: "バリ島の高級ウブドリゾートの風情と日本の温泉文化が完璧に調和した、伊豆高原を代表する大人気オールインクルーシブホテル。館内に一歩足を踏み入れれば、お香のオリエンタルな香りとガムランの調べが旅情を盛り上げます。滞在中のアルコール・ソフトドリンク、ダーツやカラオケ、卓球、足湯などのアクティビティがすべて無料。大浴場に加え、原生林に囲まれた趣の異なる複数の貸切露天風呂が何度でも無料で利用可能です。グランイルミ会場（伊豆シャボテン動物公園）までも車で約10〜15分と至近で、冬のイルミネーションデートや女子旅、ファミリー旅行に絶大な人気を誇ります。",
              roomTip: "天蓋付きベッドが備わるバリ風洋室や和洋室など異国情緒あふれる空間。無料の作務衣や選べるアメニティバーが充実し手ぶら感覚で宿泊できます。",
              gourmetTip: "夕食は伊豆の新鮮な海の幸と旬の食材を取り入れた贅沢なコース料理。さらに夜間には宿泊者専用のバータイムがあり、無料の夜食ラーメンや各種カクテルを愉しめます。",
              highlights: [
                "バリ風オールインクルーシブ＆無料貸切露天風呂・バータイム飲み放題",
                "グランイルミ会場まで車で約10分！無料のアクティビティ充実で大満足",
                "カップルデートや女子旅に大好評の天蓋付きベッドと豊富なアメニティ"
              ]
            },
            {
              id: 2,
              name: "伊豆高原温泉　客室露天風呂付リゾートホテル　コルテラルゴ伊豆高原",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/38761/38761.jpg",
              rating: 4.87,
              reviews: 401,
              price: "¥21,360〜",
              access: "伊豆急行線　伊豆高原駅より車にて１０分／東名　厚木ＩＣより小田原厚木道路経由、Ｒ１３５を下田方面へ１２０分",
              special: "全室天然温泉の露天風呂付◇熟練シェフによる創作イタリアンと健康志向こだわりの朝食",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F38761%2F38761.html",
              story: "地中海やサンタフェ、バリのリゾートをモチーフにした全6室のみの大人の隠れ家リゾートホテル。すべての客室にしつらえられた専用のオープンテラスには、天然温泉を湛えた広々とした客室露天風呂を完備。誰にも気兼ねすることなく、冬の澄んだ星空を仰ぎながらプライベートな雪見・星空温泉を満喫できます。オーナーシェフが腕を振るう本格イタリアンディナーは、伊豆の厳選食材と自家製パスタ、朝獲れ魚介を巧みに使った芸術的な逸品揃いで、特別な記念日ステイに選ばれ続けています。",
              roomTip: "客室ごとに異なる海外リゾートテイストのインテリア。ジェットバス付き客室露天風呂やデイベッドが備わり、まるで海外の高級ヴィラに滞在しているかのような非日常感。",
              gourmetTip: "夕食は駿河湾・相模湾の新鮮魚介と地元契約農家の冬野菜をふんだんに使ったフルコース。冬限定の金目鯛のアクアパッツァや黒毛和牛のグリルは絶品です。",
              highlights: [
                "全6室限定の海外リゾートヴィラ＆全室オープンテラス客室露天風呂",
                "シェフ自慢の本格イタリアンフルコースと満天の星空雪見温泉",
                "非日常を極めたプライベート空間で記念日やプロポーズステイに最適"
              ]
            },
            {
              id: 3,
              name: "亀の井ホテル　伊豆高原",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/70875/70875.jpg",
              rating: 4.57,
              reviews: 898,
              price: "¥17,460〜",
              access: "伊豆急行・伊豆高原駅から無料送迎バス（4便）で約５分／東名高速厚木ICから約１２０分",
              special: "伊豆諸島を望む水盤テラスとオーシャンビューの客室でくつろぐ絶景リゾート",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70875%2F70875.html",
              story: "伊豆高原の高台に位置し、すべての客室から相模湾と伊豆諸島を一望できるハイクラスな大型温泉リゾートホテル。全客室に温泉露天風呂（または温泉半露天風呂）が備え付けられており、窓の外に広がる水平線から昇る神々しい朝日は感動の一言です。館内の大浴場には海と空に溶け込むようなインフィニティ露天風呂があり、弱アルカリ性の柔らかな美肌温泉に浸かりながら贅沢なパノラマ絶景を堪能できます。グランイルミ会場へのアクセスもスムーズで、冬の観光拠点として文句なしのクオリティを誇ります。",
              roomTip: "スタイリッシュなモダン和洋室はバルコニー付き。全室温泉露天風呂付きなので、冬の澄み渡る海風を感じながら好きな時にいつでも温かい温泉に浸かれます。",
              gourmetTip: "伊豆名物の「金目鯛の姿煮」をはじめ、近海地魚のお造り、静岡県産牛ステーキなど、オープンキッチンで出来立てが振る舞われる贅沢なディナーブッフェまたは特選会席コース。",
              highlights: [
                "全室オーシャンビュー温泉露天付き＆海と空に溶け込むインフィニティ大浴場",
                "近海金目鯛の姿煮と豪華海鮮ディナー＆水平線から昇る感動の朝日",
                "ファミリーやシニアにも優しい充実の館内設備と絶景パノラマテラス"
              ]
            },
            {
              id: 4,
              name: "かえで庵　伊豆高原　英国調アンティークホテル　全室露天風呂付き客室の宿",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/14738/14738.jpg",
              rating: 4.78,
              reviews: 762,
              price: "¥17,020〜",
              access: "東名厚木ＩＣ、沼津ＩＣより約９０分／伊豆急伊豆高原駅よりタクシー５分",
              special: "お誕生日などの記念日旅行、マタニティの産前旅行として。全室露天風呂付客室のプライベートステイ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14738%2F14738.html",
              story: "英国コッツウォルズ地方のマナーハウスを再現した、アンティーク家具に囲まれた全室露天風呂付きのクラシックホテル。館内には100年以上前のステンドグラスや調度品が配され、まるでイギリスの貴族の館に迷い込んだかのようなロマンチックな雰囲気が漂います。全室のテラスに備えられた信楽焼や猫足バスタブの客室露天風呂には伊豆高原の天然温泉が注がれ、二人だけのプライベートなバスタイムを約束。イルミネーションを楽しんだ後の冷えた身体を優しく包み込みます。",
              roomTip: "天蓋付きダブルベッドやアンティークドレッサーが配されたメルヘンチックな客室。英国直輸入の紅茶セットが用意され優雅なティータイムを過ごせます。",
              gourmetTip: "厳選された極上牛フィレ肉ステーキを中心とした洋食フルコースをお部屋食で提供。人目を気にせず、ドレスアップした特別なディナータイムをゆったり楽しめます。",
              highlights: [
                "英国コッツウォルズ風マナーハウス＆全室専用露天風呂とお部屋食ディナー",
                "極上牛フィレ肉ステーキコースと100年のステンドグラスが彩る館内",
                "英国直輸入アンティーク家具と信楽焼露天風呂での贅沢な二人時間"
              ]
            },
            {
              id: 5,
              name: "ＳＫＹ－ＨＩＬＬ　ＨＯＴＥＬ　伊豆高原",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/187179/187179.jpg",
              rating: 4.21,
              reviews: 143,
              price: "¥11,300〜",
              access: "伊豆高原駅よりバス17分　バス停より徒歩10分",
              special: "伊豆シャボテン動物公園がゼロ距離！大室山を身近に体感できる全室オーシャンビューのホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187179%2F187179.html",
              story: "伊豆高原のシンボルである大室山の麓、相模湾を見下ろす高台の好立地に佇むリゾートホテル。広々とした敷地からは青い太平洋と天城連山の両方を望むことができ、開放感あふれるロケーションが魅力です。伊豆シャボテン動物公園のグランイルミ会場まで車でわずか数分という近さも大きなアドバンテージ。イルミネーションを点灯直後から閉園間際までたっぷり楽しんだ後、冷え切った身体ですぐにホテルの天然温泉大浴場へ直行できるのが最大の強みです。",
              roomTip: "高層階のオーシャンビュー客室からは、晴れた冬の日に初島や大島までくっきりと見渡せます。洋室・和洋室ともに広々としたスペースが確保されています。",
              gourmetTip: "伊豆の旬の海鮮を贅沢に使った和食会席。脂の乗った金目鯛の煮付けや、サザエのつぼ焼き、季節の鍋料理など、冬の伊豆の味覚がテーブルいっぱいに並びます。",
              highlights: [
                "大室山と海を一望するパノラマ絶景＆グランイルミ会場まで車ですぐの好立地",
                "広々とした天然温泉大浴場と金目鯛煮付け付きの贅沢和食会席",
                "グランイルミを閉園まで満喫できる快適アクセスと手頃な宿泊プラン"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-purple-700 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-900">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
          alt="伊豆高原グランイルミの壮大な光の地上絵と夜空を彩るイルミネーション"
          fill
          priority
          className="object-cover object-center opacity-45 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/90 text-purple-100 text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-purple-700/40">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>11月・12月開幕！日本一の体験型イルミ</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">伊豆高原グランイルミで過ごす冬の旅（11・12月）！<br className="hidden sm:inline" /> 日本一の体験型イルミと伊東温泉・金目鯛姿煮宿5選</h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            全国第1位に輝く体験型イルミ「伊豆高原グランイルミ」の圧倒的な光の祭典！ジップラインで光の海を飛び、伊豆高原の美肌温泉露天風呂と冬が旬の脂の乗った金目鯛姿煮に癒やされる冬休み。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-purple-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-purple-400" /> 静岡県伊東市（伊豆高原・大室山・城ヶ崎海岸）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"ホーム","item":"https://croud-travel.pages.dev/"},{"@type":"ListItem","position":2,"name":"特集一覧","item":"https://croud-travel.pages.dev/features"},{"@type":"ListItem","position":3,"name":"【11・12月伊豆高原グランイルミ】日本一の体験型イルミと伊東温泉・金目鯛姿煮宿5選","item":"https://croud-travel.pages.dev/winter-shizuoka-izukogen-granillumi-ito-onsen-stay"}]}) }}
      />
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-purple-100">
            <div className="p-2.5 rounded-2xl bg-purple-50 text-purple-700">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">Grand Illumination & Onsen</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                光の海を滑空し、美肌の名湯に浸かる。五感を刺激する伊豆の冬リゾート
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月中旬、澄み切った冬空が広がる伊豆半島で、待望のシーズン本番を迎えるのが「伊豆高原グランイルミ」です。プロが選ぶ全国イルミネーションランキングで連続第1位に君臨するこのイベントは、単に美しい電飾を眺めるだけにとどまらない、日本初の「体験型イルミネーション」として絶大な人気を誇ります。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            東京ドーム約2個分もの広大なエリアに広がるのは、息を呑むような巨大3Dランタンや光の地上絵。さらに、煌めくイルミネーションの上空をワイヤーロープで滑空する「ジップライン〜流星〜」は、まるで光の海に飛び込むような異次元の爽快感を味わえます。実物大の動く恐竜たちの間をゴーカートで駆け抜けるアドベンチャーなど、大人から子どもまで童心に帰って夢中になれるナイトアトラクションが目白押しです。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            夜の光の冒険を存分に満喫した後は、伊豆高原や伊東温泉のぬくもりへ。日本屈指の豊富な湧出量を誇る温泉は、弱アルカリ性の柔らかな泉質でお肌をしっとりと潤し、冷えた身体を芯からポカポカに温めてくれます。そして夕食には、冬の相模湾で最も脂が乗る名物「金目鯛の姿煮」。甘辛い秘伝のタレを絡めたふっくらとした身を口に運べば、伊豆の豊かな自然の恵みがじんわりと染み渡ります。
          </p>
          <div className="bg-purple-50/70 rounded-2xl p-5 border border-purple-200/70 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-purple-700" />
                特急踊り子で東京から直行！車なしでも快適アクセス
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                JR特急「踊り子号」「サフィール踊り子」で東京駅から伊豆高原駅まで約2時間。駅からのシャトルバスや送迎付き宿を活用すれば雪道運転の心配もゼロ。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-purple-800 hover:bg-purple-900 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              伊豆高原の厳選リゾート5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">Winter Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の伊豆高原グランイルミ旅で体験すべき3大魅力
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">日本一！光の海を滑空するジップライン</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                往復400mのイルミ上空を駆け抜けるジップライン。レーザー光線と音楽が織りなす光のショーを空から見下ろす感動体験。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">冬が旬！脂の乗った「金目鯛の姿煮」</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                11月〜2月は地キンメが最も脂を蓄えるベストシーズン。甘辛の秘伝タレでふっくら煮付けた濃厚な旨味はご飯もお酒も進みます。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">満天の星空を仰ぐ客室露天風呂</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                伊豆高原には客室露天風呂付きのリゾートや隠れ家ヴィラが密集。冷えた身体を温かい美肌温泉で解きほぐす贅沢なプライベート時間。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">Recommended Hotels & Resorts</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              グランイルミと伊東温泉を満喫する厳選ホテル5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              楽天トラベルで4.2以上の高評価を獲得している伊豆高原の宿。グランイルミ会場への近さ、客室露天風呂の有無、金目鯛ディナーの満足度で厳選。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md border border-stone-200 hover:border-purple-400 transition-all duration-300 flex flex-col"
              >
                {/* Hotel Image Container */}
                <div className="lg:w-2/5 relative min-h-[280px] lg:min-h-full">
                  <Image
                    src={hotel.img}
                    alt={hotel.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Award className="w-3.5 h-3.5 text-purple-400" />
                    <span>厳選 #{hotel.id}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-stone-950/90 via-stone-950/60 to-transparent p-3 rounded-2xl text-white text-xs">
                    <p className="font-semibold flex items-center gap-1 text-purple-300">
                      <Star className="w-3.5 h-3.5 fill-purple-400 text-purple-400" />
                      評価 {hotel.rating} / 5.0
                    </p>
                    <p className="text-[11px] text-stone-300 line-clamp-1">{hotel.access}</p>
                  </div>
                </div>

                {/* Hotel Content */}
                <div className="lg:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2.5 py-1 rounded-md border border-purple-200">
                        {hotel.special}
                      </span>
                      <span className="text-xs font-semibold text-stone-500">
                        宿泊目安: <strong className="text-stone-900 text-sm">{hotel.price}</strong> /名
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug hover:text-purple-800 transition-colors">
                      <a href={hotel.url} target="_blank" rel="noopener noreferrer">
                        {hotel.name}
                      </a>
                    </h3>

                    <p className="text-stone-700 text-sm leading-relaxed">
                      {hotel.story}
                    </p>

                    {/* Room & Gourmet Tips */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 text-xs space-y-1">
                        <strong className="text-purple-900 flex items-center gap-1 font-bold">
                          <Coffee className="w-3.5 h-3.5 text-purple-700" /> お部屋・イルミアクセス
                        </strong>
                        <p className="text-stone-600 leading-relaxed">{hotel.roomTip}</p>
                      </div>
                      <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/70 text-xs space-y-1">
                        <strong className="text-purple-900 flex items-center gap-1 font-bold">
                          <Utensils className="w-3.5 h-3.5 text-purple-700" /> 金目鯛・冬のディナー
                        </strong>
                        <p className="text-stone-600 leading-relaxed">{hotel.gourmetTip}</p>
                      </div>
                    </div>

                    {/* Highlights Badges */}
                    <div className="space-y-1.5 pt-1">
                      {hotel.highlights.map((hl, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Booking CTA Button */}
                  <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-stone-500 text-center sm:text-left">
                      ※ 11・12月はグランイルミ開幕とクリスマスシーズンで満室が早まります。
                    </div>
                    <a
                      href={hotel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-800 hover:bg-purple-900 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-98"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 1泊2日おすすめモデルコース */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200 space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">Suggested Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              【1泊2日】グランイルミと金目鯛温泉を遊び尽くす冬の伊豆高原モデルコース
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              特急踊り子で直行！大室山のリフト観光、グランイルミのジップライン、夜の客室露天風呂を満喫する鉄板プラン。
            </p>
          </div>

          <div className="relative border-l-2 border-purple-200 ml-4 pl-6 space-y-8">
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2 py-0.5 rounded">1日目 12:30</span>
              <h3 className="text-base font-bold text-stone-900">特急踊り子で伊豆高原駅到着 〜 海鮮丼ランチ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                東京駅から乗り換えなしで伊豆高原駅へ。駅周辺の名店で、相模湾直送の鯵のたたきや金目鯛、伊豆の地魚が山盛りの海鮮丼ランチを味わいます。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2 py-0.5 rounded">1日目 14:00</span>
              <h3 className="text-base font-bold text-stone-900">大室山リフト 〜 山頂お鉢巡りで富士山と海の絶景</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                伊豆高原のシンボル・大室山へ。登山リフトで山頂へ登り、火口をぐるりと一周する「お鉢巡り」。空気が澄んだ冬は雪を冠した富士山や伊豆七島がくっきりと見渡せます。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2 py-0.5 rounded">1日目 15:30</span>
              <h3 className="text-base font-bold text-stone-900">宿にチェックイン 〜 早めの夕食で金目鯛を堪能</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                宿へチェックイン。グランイルミの夜間開園に備えて、早めの時間帯に夕食をいただきます。脂の乗った金目鯛の姿煮や静岡そだち牛のグリルでエネルギーチャージ。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2 py-0.5 rounded">1日目 17:30</span>
              <h3 className="text-base font-bold text-stone-900">伊豆高原グランイルミ入場！光の海とジップライン</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                伊豆シャボテン動物公園のグランイルミ会場へ！点灯とともに広がる光の地上絵に大歓声。ジップラインで光の上を滑空し、レーザーショーや動く恐竜エリアを存分に体験。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2 py-0.5 rounded">1日目 20:30</span>
              <h3 className="text-base font-bold text-stone-900">宿へ帰還 〜 客室露天風呂で満天の星空温泉浴</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                夜風で冷え切った身体で宿へ戻り、すぐに露天風呂へ！湯船から立ち上る湯けむりと頭上に広がる満天の星空を眺めながら、体の芯までじっくりと温まります。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2 py-0.5 rounded">2日目 08:00</span>
              <h3 className="text-base font-bold text-stone-900">相模湾の日の出を望む朝風呂＆焼きたて鯵の干物朝食</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                水平線から昇る朝日を眺めながら贅沢な朝風呂。炭火で香ばしく焼かれた熱々の鯵の開き干物と、名物わさびご飯の美味しい朝食をいただきます。
              </p>
            </div>

            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-700 border-4 border-white shadow" />
              <span className="text-xs font-bold text-purple-800 bg-purple-50 px-2 py-0.5 rounded">2日目 10:30</span>
              <h3 className="text-base font-bold text-stone-900">城ヶ崎海岸・門脇吊り橋散策 〜 伊東銘菓のお土産</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                断崖絶壁に架かるスリル満点の「門脇吊り橋」へ。冬の澄んだ青い海と豪快な白波を見学し、駅前でお土産の干物や金目鯛せんべいを購入して特急で帰路へ。
              </p>
            </div>
          </div>
        </section>

        {/* 旬の伊豆名物グルメガイド */}
        <section className="bg-stone-100/70 rounded-3xl p-6 sm:p-10 border border-stone-200/80 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-800 text-white">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-800 uppercase tracking-widest">Local Delicacies</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                11月・12月の伊豆半島で絶対に味わいたい絶品名物4選
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-purple-700">●</span> 秘伝タレで煮立てる「金目鯛の姿煮」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                冬に脂乗りが最高潮を迎える近海物の地キンメ。甘辛の照り煮にすることで、ふっくらとした白身に濃厚なタレが絡み合い、ご飯が止まらない絶品料理に。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-purple-700">●</span> 活きの良さが自慢の「活伊勢海老の鬼殻焼き」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                秋に漁が解禁された伊豆特産の活伊勢海老。炭火で香ばしく焼き上げた鬼殻焼きは、プリッとした身の強い甘みと香ばしい味噌の風味が格別です。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-purple-700">●</span> 天城の清流が育んだ「本わさび丼」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                熱々の炊きたてご飯にかつお節を敷き、鮫皮でおろしたての生わさびをこんもり。醤油をひと垂らししてかき混ぜれば、爽やかな香りとツンとした辛味が広がります。
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-stone-200 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <span className="text-purple-700">●</span> 伊豆の伝統「天日干し 鯵の開き」
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                冬の冷たい浜風と天日でじっくり乾燥させた鯵の干物。朝食の定番として皮はパリッと身はふっくらジューシーに焼き上がり、伊豆の朝を贅沢に彩ります。
              </p>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-100 text-purple-800">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">Q&A Guide</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                伊豆高原グランイルミ旅行 よくある質問と観賞アドバイス
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-purple-700 font-extrabold">Q.</span>
                グランイルミの前売りチケットは購入した方がいいですか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                前売り電子チケットの購入を強くおすすめします。週末やクリスマス、年末年始の入場ゲートはチケット購入窓口で長蛇の列ができることがあります。スマホで事前購入しておけば、QRコード提示で専用ゲートからスムーズに入場でき、寒空の下で待つ時間を大幅に節約できます。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-purple-700 font-extrabold">Q.</span>
                ジップラインなどのアトラクションの混雑状況や注意点は？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                名物の「ジップライン〜流星〜」は非常に人気が高く、混雑時は1時間以上の待ち時間が発生することがあります。開園直後（17:00の点灯直後）または20:00以降の遅い時間帯を狙うと比較的スムーズに体験できます。安全上の理由からスカートやサンダル・ヒール靴では利用できないため、ズボンとスニーカーで参加してください。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-purple-700 font-extrabold">Q.</span>
                電車とバスで行く場合、帰りの交通手段はどうなりますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                伊豆高原駅から伊豆シャボテン公園（グランイルミ会場）までは路線バスが運行していますが、夜間の復路バスは本数が限られます。タクシーを利用するか、ホテルによってはグランイルミ会場への無料送迎バスを運行している宿もありますので、予約時に送迎サービスの有無をチェックしておくと安心です。
              </p>
            </div>

            <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-purple-700 font-extrabold">Q.</span>
                ペット連れでグランイルミやホテルを利用できますか？
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                伊豆高原グランイルミはリード着用（またはペットカート）で愛犬と同伴入場が可能です。園内には専用のドッグランも設置されています。また、伊豆高原エリアには愛犬と同室宿泊できる専用温泉リゾートやヴィラも多数揃っており、ペット連れ旅行者にも非常に優しい地域です。
              </p>
            </div>
          </div>
        </section>

        {/* 内部リンク網羅（GEOリンク＆関連冬特集） */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-widest">Related Guides & Areas</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の旅をさらに広げる関連特集＆エリア別ガイド
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              日本全国・旅宿クラウドが厳選する、11月・12月の冬旅行特集や近隣エリアの温泉宿ガイドをチェック。
            </p>
          </div>

          {/* 関連特集リンクカード */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link 
              href="/winter-mie-nabana-no-sato-illumination-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-purple-50/60 border border-stone-200 hover:border-purple-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">国内最大級イルミ</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-amber-900 transition-colors">
                なばなの里イルミネーションと長島温泉リゾート宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                圧倒的スケールの光のトンネルと天然温泉大露天風呂、松阪牛グルメ。
              </p>
            </Link>

            <Link 
              href="/winter-izu-kinmedai-shabushabu-luxury-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-purple-50/60 border border-stone-200 hover:border-purple-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-rose-800 bg-rose-100/80 px-2 py-0.5 rounded">伊豆冬グルメ</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-rose-900 transition-colors">
                伊豆金目鯛しゃぶしゃぶとオーシャンビュー露天宿
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                熱々の出汁にさっとくぐらせる金目鯛しゃぶしゃぶと相模湾絶景温泉。
              </p>
            </Link>

            <Link 
              href="/winter-atami-fireworks-ocean-view-stay"
              className="p-4 rounded-2xl bg-stone-50 hover:bg-purple-50/60 border border-stone-200 hover:border-purple-300 transition-all space-y-1.5 group"
            >
              <span className="text-[11px] font-bold text-cyan-800 bg-cyan-100/80 px-2 py-0.5 rounded">冬の熱海海上花火</span>
              <h3 className="font-bold text-stone-900 text-sm group-hover:text-cyan-900 transition-colors">
                熱海海上花火大会をお部屋から眺める特等席ホテル
              </h3>
              <p className="text-xs text-stone-500 line-clamp-2">
                澄んだ冬の夜空に大輪の花火！客室や露天風呂から観賞する贅沢ステイ。
              </p>
            </Link>
          </div>

          {/* 都道府県GEOリンク */}
          <div className="pt-4 border-t border-stone-100 space-y-3">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider">
              東海・関東・全国の都道府県別おすすめ宿
            </h3>
            <div className="flex flex-wrap gap-2 text-xs">
              <Link href="/prefectures/shizuoka" className="px-3 py-1.5 bg-stone-100 hover:bg-purple-100 text-stone-700 hover:text-purple-900 rounded-lg transition-colors font-medium">静岡県の宿一覧</Link>
              <Link href="/prefectures/kanagawa" className="px-3 py-1.5 bg-stone-100 hover:bg-purple-100 text-stone-700 hover:text-purple-900 rounded-lg transition-colors font-medium">神奈川県の宿一覧</Link>
              <Link href="/prefectures/tokyo" className="px-3 py-1.5 bg-stone-100 hover:bg-purple-100 text-stone-700 hover:text-purple-900 rounded-lg transition-colors font-medium">東京都の宿一覧</Link>
              <Link href="/prefectures/yamanashi" className="px-3 py-1.5 bg-stone-100 hover:bg-purple-100 text-stone-700 hover:text-purple-900 rounded-lg transition-colors font-medium">山梨県の宿一覧</Link>
              <Link href="/prefectures/aichi" className="px-3 py-1.5 bg-stone-100 hover:bg-purple-100 text-stone-700 hover:text-purple-900 rounded-lg transition-colors font-medium">愛知県の宿一覧</Link>
              <Link href="/prefectures/mie" className="px-3 py-1.5 bg-stone-100 hover:bg-purple-100 text-stone-700 hover:text-purple-900 rounded-lg transition-colors font-medium">三重県の宿一覧</Link>
              <Link href="/prefectures/chiba" className="px-3 py-1.5 bg-stone-100 hover:bg-purple-100 text-stone-700 hover:text-purple-900 rounded-lg transition-colors font-medium">千葉県の宿一覧</Link>
            </div>
          
      <HubRelatedPosts currentSlug="winter-shizuoka-izukogen-granillumi-ito-onsen-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
