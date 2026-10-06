import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Heart, Info, Camera, Compass as CompassIcon 
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月長崎ハウステンボス】日本一1300万球「光の街のクリスマス」とヨーロッパ風リゾート宿5選",
  description: "11月上旬から開幕する世界最大級1300万球の祭典「光の街のクリスマス」！高さ12mの巨大ツリー群、日本初の運河アイススケート、夜空を彩るクリスマス花火を堪能。直営クラシックホテルや源泉温泉付きリゾートで過ごす特別な冬休み。",
  keywords: 'ハウステンボス クリスマス, 光の街のクリスマス, ハウステンボス イルミネーション, ハウステンボス ホテル, ホテルヨーロッパ, ホテルアムステルダム, 長崎 冬旅行 11月 12月',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-nagasaki-huistenbosch-christmas-lights-stay/",
  },
  openGraph: {
    title: "【11・12月長崎ハウステンボス】日本一1300万球「光の街のクリスマス」とヨーロッパ風リゾート宿5選",
    description: "11月上旬から開幕する世界最大級1300万球の祭典「光の街のクリスマス」！高さ12mの巨大ツリー群、日本初の運河アイススケート、夜空を彩るクリスマス花火を堪能。直営クラシックホテルや源泉温泉付きリゾートで過ごす特別な冬休み。",
    url: 'https://croud-travel.pages.dev/winter-nagasaki-huistenbosch-christmas-lights-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月長崎ハウステンボス】日本一1300万球「光の街のクリスマス」とヨーロッパ風リゾート宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月長崎ハウステンボス】日本一1300万球「光の街のクリスマス」とヨーロッパ風リゾート宿5選",
    description: "11月上旬から開幕する世界最大級1300万球の祭典「光の街のクリスマス」！高さ12mの巨大ツリー群、日本初の運河アイススケート、夜空を彩るクリスマス花火を堪能。直営クラシックホテルや源泉温泉付きリゾートで過ごす特別な冬休み。",
  }
};

export default function HuistenboschChristmasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.pages.dev/winter-nagasaki-huistenbosch-christmas-lights-stay#article",
        "headline": "【11・12月長崎ハウステンボス】日本一1300万球「光の街のクリスマス」とヨーロッパ風リゾート宿5選",
        "description": "11月上旬から開幕する世界最大級1300万球の祭典「光の街のクリスマス」！高さ12mの巨大ツリー群、日本初の運河アイススケート、夜空を彩るクリスマス花火を堪能。直営クラシックホテルや源泉温泉付きリゾートで過ごす特別な冬休み。",
        "image": "https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=1200&q=80",
        "datePublished": "2026-09-27T00:00:00+09:00",
        "dateModified": "2026-09-27T00:00:00+09:00",
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
          "@id": "https://croud-travel.pages.dev/winter-nagasaki-huistenbosch-christmas-lights-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.pages.dev/winter-nagasaki-huistenbosch-christmas-lights-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "ハウステンボスのクリスマスイルミネーションの点灯時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "日没時間に合わせて毎日点灯します。11月〜12月は17:00〜17:30頃にアムステルダム広場やアートガーデンが一斉に点灯し、閉園時間（通常21:00〜22:00）まで壮大な光の海が広がります。"
            }
          },
          {
            "@type": "Question",
            "name": "直営ホテル（オフィシャルホテル）に宿泊するメリットは何ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "パーク開園前の静寂な街並みを散策できるアーリーエントリー特典や、手荷物をウェルカムゲートからホテルまで無料で配送してくれるサービス、専用クルーザーでの移動（ホテルヨーロッパ等）、夜遅くまで遊んでもすぐ部屋に戻れる圧倒的な利便性があります。"
            }
          },
          {
            "@type": "Question",
            "name": "11月・12月のハウステンボスの寒さ対策は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "大村湾に面しているため海風が吹き抜け、夜間は体感温度がぐっと下がります。特に運河クルーズやアイススケート、花火観賞時には厚手のダウンコート、手袋、マフラー、貼るカイロなどの万全な防寒対策をおすすめします。"
            }
          },
          {
            "@type": "Question",
            "name": "クリスマス花火の観賞スポットや日時は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "12月中旬〜下旬の特定日（週末やクリスマス前後）に開催されます。ハーバータウンやアートガーデン、場内ホテルの客室から大迫力の花火を観賞できます。特別観覧席付きプランの事前予約がスムーズです。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.pages.dev/winter-nagasaki-huistenbosch-christmas-lights-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "ホテルオークラＪＲハウステンボス",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9057%2F9057.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "ホテル日航ハウステンボス",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1793%2F1793.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "ホテルヨーロッパ　ハウステンボス",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9159%2F9159.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "ホテルアムステルダム　ハウステンボス",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9157%2F9157.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "ホテルデンハーグ　ハウステンボス",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130617%2F130617.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "ホテルオークラＪＲハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9057/9057.jpg",
              rating: 4.60,
              reviews: 3256,
              price: "¥5,500〜",
              access: "西九州自動車道　佐世保大塔ICより車で15分/長崎空港よりバスで70分／JR博多駅より特急ハウステンボス号で110分",
              special: "スタッフのおもてなしに心和らぎ、天然温泉が疲れを癒す魅力あるリゾートホテルです。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9057%2F9057.html",
              story: "アムステルダム中央駅をモチーフにした壮麗な赤レンガ造りの外観が目を引くプレミアムホテル。JRハウステンボス駅から徒歩すぐ、入国ゲートの目前という抜群のロケーションに位置します。最大の自慢は、敷地内から自噴する100%天然温泉「琴乃湯（ことのゆ）」。鉄分と塩分を豊富に含んだ茶褐色のにごり湯は、体の芯まで熱を届け、湯冷めしにくいのが特徴です。広々とした露天風呂には日本庭園が配され、冷え込む冬の夜でも贅沢な温もりを堪能できます。客室はオランダの風情が漂う上品な洋室で、パークビューの部屋からは夜のライトアップを一望できます。",
              roomTip: "パークビューのプレミアムフロア客室を予約すれば、暖かい部屋の中にいながらハウステンボスの象徴であるドムトールンや花火の煌めきを贅沢に独り占めできます。",
              gourmetTip: "館内には鉄板焼「大村湾」や日本料理、中国料理など多彩な美食レストランが集結。長崎県産黒毛和牛のフィレステーキや、冬の近海産真鯛の昆布締めなど極上のコースが揃います。",
              highlights: [
                "オランダ・アムステルダム中央駅を模した優美な外観と源泉かけ流し天然温泉「琴乃湯」完備",
                "冷えた体を芯から温める鉄分豊富な茶褐色の天然温泉露天風呂とサウナ",
                "長崎県産黒毛和牛や近海鮮魚を味わう日本料理・鉄板焼レストラン"
              ]
            },
            {
              id: 2,
              name: "ホテル日航ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/1793/1793.jpg",
              rating: 4.45,
              reviews: 3099,
              price: "¥4,500〜",
              access: "●ＪＲハウステンボス駅から徒歩で10分●長崎市内から車で９０分●佐世保駅より車で30分",
              special: "ハウステンボスまでは徒歩３分♪花と緑に囲まれたリゾートホテル",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1793%2F1793.html",
              story: "ハウステンボス入国棟まで徒歩わずか3分、花と緑に囲まれた中庭が美しいリゾートホテル。テーマパークへの出入りが非常にスムーズで、小さな子ども連れのファミリーからシニアまで圧倒的な支持を得ています。館内には広々とした宿泊者専用の大浴場を完備しており、一日中パーク内を歩き回った足をゆったりと伸ばしてリフレッシュできます。客室は明るい南欧風のトーンでまとめられ、ゆとりのあるツインやファミリールームが充実。スタッフの温かなホスピタリティと細やかな配慮が、冬の旅を一層快適にしてくれます。",
              roomTip: "中庭に面したコートヤードルームは静けさに包まれ、朝には小鳥のさえずりと共にヨーロッパのリゾートで目覚めたような清々しい気分を味わえます。",
              gourmetTip: "朝食ビュッフェでは長崎名物カステラや島原手延べそうめんの温かいにゅうめん、シェフ特製オムレツなど、長崎の豊かな食文化を朝からお腹いっぱい楽しめます。",
              highlights: [
                "ハウステンボス入国棟まで徒歩3分の好立地！花と緑に囲まれた中庭と大浴場付き",
                "パーク再入場もスムーズ！ファミリーやカップルに優しいホスピタリティ",
                "地元長崎の味覚が並ぶ朝食和洋ビュッフェと広々とした客室"
              ]
            },
            {
              id: 3,
              name: "ホテルヨーロッパ　ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9159/9159.jpg",
              rating: 4.63,
              reviews: 2482,
              price: "¥16,000〜",
              access: "博多駅→特急約100分／長崎駅→快速約90分／長崎空港→高速船約45分・バス約60分",
              special: "ハウステンボス直営／ハウステンボス最上位ホテル。クラシカルな世界観と専用クルーズで贅沢なひと時を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9159%2F9159.html",
              story: "ハウステンボスの最上位に君臨する、19世紀オランダの貴族の邸宅を思わせるクラシックホテル。最大の特権は、ウェルカムゲートから宿泊者専用のチェックインクルーザーに乗り、運河を優雅に進みながらホテルの専用船着き場へと到着する特別なアプローチです。ロビーに足を踏み入れると、季節の生花が咲き誇る豪華なフラワーアレンジメントと、生演奏されるクラシック音楽の優美な音色に包まれます。運河に面した客室には重厚なアンティーク調の家具が配され、まさにヨーロッパの一流ホテルに滞在しているかのような非日常感を味わえます。",
              roomTip: "内海（カナル）に面した客室テラスからは、白鳥が優雅に泳ぐ運河と中世の街並みが一望でき、朝夕の表情の変化を静かに眺める至高の時間が流れます。",
              gourmetTip: "メインダイニング「デ・アミラル」では、長崎近海の旬の伊勢海老やアワビ、黒毛和牛を贅沢に用いた本格フレンチと、ソムリエ厳選の極上ヴィンテージワインのマリアージュを堪能できます。",
              highlights: [
                "ハウステンボス最上位ホテル！専用クルーザーでのチェックインと毎夜開催されるクラシック生演奏",
                "19世紀オランダの邸宅を思わせる重厚な調度品と極上のフレンチコース",
                "宿泊者専用クルーズ船での優雅な運河クルージング"
              ]
            },
            {
              id: 4,
              name: "ホテルアムステルダム　ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/9157/9157.jpg",
              rating: 4.59,
              reviews: 2519,
              price: "¥12,400〜",
              access: "博多駅→特急約100分／長崎駅→快速約90分／長崎空港→高速船約45分・バス約60分",
              special: "ハウステンボス直営／ハウステンボステーマパーク内に位置する唯一のホテルで、抜群の立地と癒しの滞在を。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9157%2F9157.html",
              story: "広大なハウステンボスの中心地「アムステルダム広場」の目の前に位置する、テーマパークエリア内に建つ唯一のホテル。日没後にアムステルダム広場で行われる光と音楽の点灯式やナイトショーを、客室から徒歩0分で体感できる圧倒的な立地の良さが最大の強みです。夜遅くまでイルミネーションやクリスマスマーケットを満喫したあとも、混雑や移動のストレスなくすぐにお部屋へ戻れる快適さは格別。宿泊者限定の「開園前・閉園後の静寂なパーク散策」は、一般の来園者がいない石畳の街を独占できる感動的な特典です。",
              roomTip: "広場側の客室「パークビュールーム」は、窓一面にクリスマスタウンの巨大ツリーとプロジェクションマッピングが広がる特等席。ロマンチックな夜を過ごしたいカップルに最適です。",
              gourmetTip: "ホテル内レストラン「アァ ベルクーヘ」では、地元長崎の食材をふんだんに取り入れたディナービュッフェやシェフ特製のクリスマスプレートが楽しめます。",
              highlights: [
                "パークの中心「アムステルダム広場」に位置する唯一の場内ホテル！客室からイルミネーションを一望",
                "夜遅くまで光の街を散策したあとも徒歩0分でお部屋へ戻れる圧倒的利便性",
                "宿泊者限定の開園前・閉園後の静寂なヨーロッパ街並み散策特典"
              ]
            },
            {
              id: 5,
              name: "ホテルデンハーグ　ハウステンボス",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/130617/130617.jpg",
              rating: 4.32,
              reviews: 3060,
              price: "¥11,900〜",
              access: "博多駅→特急約100分／長崎駅→快速約90分／長崎空港→高速船約45分・バス約60分",
              special: "ハウステンボス直営／静かな海辺に建つ、オールインクルーシブホテル。添い寝のお子様はお食事無料！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130617%2F130617.html",
              story: "ハウステンボスの最奥、大村湾の静かな波が打ち寄せるハーバーサイドに佇む白亜のリゾートホテル。喧騒から完全に離れた穏やかなロケーションが特徴で、海と空の雄大なパノラマを一望できます。広々としたエントランスや吹き抜けのロビーは開放感に満ち、ゆったりとした時間の流れを肌で感じられます。客室は全室30平米以上のゆとりある設計で、大村湾を望むオーシャンビュールームと緑豊かな森林側の客室を用意。海風を感じながらのんびりと冬のリゾートステイを楽しみたい大人旅にぴったりの隠れ家です。",
              roomTip: "オーシャンビュールームのバルコニーからは、朝焼けに染まる穏やかな大村湾や、夜空に打ち上がるクリスマス花火の全景を大パノラマで楽しめます。",
              gourmetTip: "ハーバーを望ぬテラスレストラン「エクセルシオール」では、長崎名物レモンステーキや魚介たっぷりのブイヤベースなど、西海の豊かな海の幸・山の幸を堪能できます。",
              highlights: [
                "大村湾の静かな入江に佇むハーバーサイドホテル！開放的なオーシャンビューと地元旬食材ディナー",
                "異国情緒あふれる静寂のロケーションとゆったり広い客室レイアウト",
                "海風を感じるテラスレストランと海辺の贅沢なリゾート空間"
              ]
            }
  ];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-indigo-600 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-950">
        <Image
          src="https://images.unsplash.com/photo-1513297887119-d46091b24bfa?auto=format&fit=crop&w=1600&q=85"
          alt="ハウステンボスの壮大なクリスマスイルミネーションとヨーロッパの街並み"
          fill
          priority
          className="object-cover object-center opacity-40 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600/90 text-white text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-indigo-400/30">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>日本一1,300万球の輝き 冬の特別リゾート特集</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月長崎ハウステンボス】<br className="hidden sm:inline" />
            日本一1300万球「光の街のクリスマス」とヨーロッパ風リゾート宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            中世ヨーロッパのレンガ造りの街並みが、1300万球のまばゆい光で満たされる奇跡の季節。運河アイススケートやクリスマス花火に胸躍らせ、直営オフィシャルホテルの気品と温もりに包まれる至福の冬旅へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-indigo-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-indigo-400" /> 長崎県（佐世保・ハウステンボス）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-indigo-100">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">European Fantasy</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                本場ヨーロッパ以上の美しさと温もり。冬のハウステンボスが魅せる奇跡
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            長崎県佐世保市、大村湾の穏やかな入江に広がる「ハウステンボス」。11月上旬から12月下旬にかけて開催される「光の街のクリスマス」は、日本全国のイルミネーションランキングで10年連続1位を獲得し続ける、まさに世界最高峰の光のエンターテインメントです。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            広大な敷地を埋め尽くす1,300万球のイルミネーションは、ただ煌びやかなだけではありません。高さ12mの巨大なツリーが立ち並ぶ「クリスマスタウン」では、本場ヨーロッパ直輸入のオーナメントやホットアップルサイダーを味わい、日本初の「運河アイススケート」では光の運河の上を滑走するロマンチックな体験が待っています。さらに日没後の点灯式では、アムステルダム広場に響き渡る聖歌隊の生歌とともに街が一瞬にして光の海へと姿を変えます。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            この贅沢な冬の世界を真に堪能するなら、パーク内外のオフィシャルホテル・厳選リゾートへの宿泊が不可欠です。専用クルーザーで運河を進みホテルロビーへ直接チェックインする「ホテルヨーロッパ」、パークの中心でイルミネーションの夜景を部屋の窓から見下ろす「ホテルアムステルダム」、そして冷えた体を源泉かけ流しの天然温泉露天風呂で温められる「ホテルオークラJRハウステンボス」。冬の特別な思い出を約束する最高峰の滞在をご紹介します。
          </p>
          <div className="bg-indigo-50/60 rounded-2xl p-5 border border-indigo-200/60 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Heart className="w-5 h-5 text-indigo-600" />
                宿泊者だけの特権：開園前の静寂なヨーロッパ街並み散策
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                場内ホテルに泊まれば、一般来園者がいない澄み切った朝の静寂の街をのんびり散策できます。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              厳選リゾート5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Winter Magic</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬のハウステンボスで絶対に体験したい3大ハイライト
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">日本一1300万球の光の王国</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                アートガーデン一面に広がる光の滝や、白銀のプロムナード。最新技術を取り入れた光と音楽のナイトショーは圧巻のスケールです。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">クリスマスタウン＆アイススケート</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                ヨーロッパ直輸入の可愛い雑貨やグルメ屋台が並ぶマーケット。運河沿いに設置される氷のリンクで幻想的なスケート体験を。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">直営クラシックホテル＆温泉</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                格調高いインテリアに囲まれた客室、長崎和牛ディナー、専用クルーズ船での送迎、さらに天然温泉露天風呂で優雅な寛ぎを。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Selected Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              光の街のクリスマスを堪能するヨーロッパ風リゾート＆名湯宿5選
            </h2>
            <p className="text-stone-500 text-sm mt-2">
              楽天トラベル公式APIから取得した最新の料金・クチコミ評価とともに、冬のハウステンボス観光に最適な5軒を詳細解説。
            </p>
          </div>

          <div className="space-y-12">
            {hotelList.map((hotel) => (
              <div 
                key={hotel.id} 
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 sm:h-72 lg:h-auto min-h-[300px] bg-stone-100">
                    <Image
                      src={hotel.img}
                      alt={hotel.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-amber-400" />
                      <span>厳選 NO.{hotel.id}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                          ハウステンボス直営・オフィシャル
                        </span>
                        <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span>{hotel.rating}</span>
                          <span className="text-stone-400 font-normal text-xs">({hotel.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {hotel.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 mt-2 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-stone-400 shrink-0" />
                        <span>{hotel.access}</span>
                      </p>

                      {/* Detailed Story & Deep Dive Review */}
                      <div className="mt-4 pt-4 border-t border-stone-100 space-y-3">
                        <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider flex items-center gap-1.5">
                          <Info className="w-4 h-4 text-indigo-600" />
                          ホテルの魅力と滞在・グルメ体験レビュー
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {hotel.story}
                        </p>
                        <div className="bg-stone-50 rounded-xl p-3 border border-stone-200/60 text-xs text-stone-600 space-y-1">
                          <div><strong className="text-stone-800">客室選びのポイント:</strong> {hotel.roomTip}</div>
                          <div><strong className="text-stone-800">ディナー＆朝食の魅力:</strong> {hotel.gourmetTip}</div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-stone-100 space-y-2">
                        <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">主な特徴・サービス</h4>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600">
                          {hotel.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-stone-400 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-indigo-600">{hotel.price}</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition-all hover:scale-[1.02]"
                      >
                        <span>楽天トラベルでプラン・空室を見る</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-50 text-amber-600">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Comparison</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                ハウステンボス厳選5ホテルのロケーション＆滞在特典比較
              </h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700">
                  <th className="py-3 px-4 font-bold">ホテル名</th>
                  <th className="py-3 px-4 font-bold">立地エリア</th>
                  <th className="py-3 px-4 font-bold">温泉・大浴場</th>
                  <th className="py-3 px-4 font-bold">おすすめの滞在スタイル</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-600">
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">ホテルオークラJRハウステンボス</td>
                  <td className="py-3 px-4">入国ゲート前</td>
                  <td className="py-3 px-4">天然温泉「琴乃湯」露天風呂</td>
                  <td className="py-3 px-4">寒さを癒やす本格天然温泉と駅チカを重視する方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">ホテル日航ハウステンボス</td>
                  <td className="py-3 px-4">入国棟 徒歩3分</td>
                  <td className="py-3 px-4">宿泊者専用大浴場</td>
                  <td className="py-3 px-4">家族旅行やコスパ重視で快適ステイを求める方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">ホテルヨーロッパ</td>
                  <td className="py-3 px-4">場内・ハーバーエリア</td>
                  <td className="py-3 px-4">客室バスタブ（大浴場なし）</td>
                  <td className="py-3 px-4">記念日・カップルで最高峰のラグジュアリーを体験したい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">ホテルアムステルダム</td>
                  <td className="py-3 px-4">場内・中心広場</td>
                  <td className="py-3 px-4">客室バスタブ（大浴場なし）</td>
                  <td className="py-3 px-4">夜景・イルミネーションを客室や目前で楽しみたい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">ホテルデンハーグ</td>
                  <td className="py-3 px-4">場内・静かな海辺</td>
                  <td className="py-3 px-4">客室バスタブ（大浴場なし）</td>
                  <td className="py-3 px-4">オーシャンビューとリゾートの静けさを満喫したい方</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Expert Winter Tips */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600">
              <Camera className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Resort Tips</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬のハウステンボスを120%楽しむためのエキスパート情報
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                光の滝とアンブレラストリートは日没直後がベスト
              </h3>
              <p>
                完全な夜景も綺麗ですが、空が深い青色に染まる「マジックアワー（17:15〜17:45頃）」に撮影すると、ヨーロッパの石造りの街並みとイルミネーションのコントラストが最もドラマチックに写ります。
              </p>
            </div>
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Coffee className="w-4 h-4 text-indigo-600" />
                場内専用パスポートの選び方
              </h3>
              <p>
                直営オフィシャルホテルに宿泊する場合、1.5デイパスポートや翌日再入場パスポートなど、宿泊者限定のお得なチケットプランが利用できます。チェックイン時にホテルフロントで確認するのが一番確実です。
              </p>
            </div>
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Award className="w-4 h-4 text-indigo-600" />
                冬限定の長崎カステラ＆輸入チョコレート
              </h3>
              <p>
                場内のカステラの城には日本屈指の品揃えを誇る長崎カステラが集結。冬限定のチョコレートカステラや、オランダ直輸入のチーズ・ワインは、旅の思い出やお土産として大変喜ばれます。
              </p>
            </div>
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-indigo-600" />
                巨大ツリー前での記念撮影サービス
              </h3>
              <p>
                高さ12mのメインクリスマスツリー前ではプロカメラマンによるフォトサービスも実施。自身のスマートフォンでもシャッターを押してもらえるため、カップルや家族全員での集合写真に最適です。
              </p>
            </div>
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-gradient-to-br from-indigo-50/70 via-white to-stone-50 rounded-3xl p-6 sm:p-10 border border-indigo-200/80 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Model Course</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              【1泊2日】光の街のクリスマスとヨーロッパ風情を満喫する王道プラン
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              11月・12月の冬期限定イベントを最も美しく、無理のない動線で巡るタイムスケジュール。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-2 pb-2 border-b border-indigo-100">
                <span className="px-3 py-1 bg-indigo-600 text-white font-bold text-xs rounded-full">DAY 1</span>
                <h3 className="font-bold text-stone-900 text-base">ヨーロッパ散策と1,300万球点灯の瞬間</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">13:00</strong>
                  <span>ハウステンボス到着。ウェルカムゲート手荷物預かり所で荷物をホテルへ事前配送。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">14:00</strong>
                  <span>カナルクルーザーで運河を進み、中世オランダの街並み散策。昼の風車と花畑を撮影。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">15:30</strong>
                  <span>ホテルチェックイン。クラシカルなお部屋で一息つき、防寒具をしっかり準備。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">17:15</strong>
                  <span>アムステルダム広場の点灯式へ。聖歌隊の歌声とともに1300万球のイルミネーションが一斉点灯！</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">18:30</strong>
                  <span>クリスマスタウンでホットワインと本場ソーセージ。運河アイススケートを楽しむ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">20:30</strong>
                  <span>夜空を彩るクリスマス花火とプロジェクションマッピングを観賞。ホテル温泉またはラウンジで贅沢な余韻。</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-2 pb-2 border-b border-amber-100">
                <span className="px-3 py-1 bg-amber-600 text-white font-bold text-xs rounded-full">DAY 2</span>
                <h3 className="font-bold text-stone-900 text-base">開園前の静寂散策と佐世保グルメ</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">07:30</strong>
                  <span>運河を望むレストランで、焼きたてクロワッサンと長崎県産野菜の朝食ビュッフェ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">08:30</strong>
                  <span>【宿泊者限定特典】一般開園前の静寂なパーク内を散策。誰もいないレンガ道で記念撮影。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">10:30</strong>
                  <span>人気アトラクションや美術館を巡り、ショップでクリスマス限定チョコレートやお菓子を購入。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">12:30</strong>
                  <span>名物「佐世保バーガー」または熱々の「長崎ちゃんぽん」で大満足のランチ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">14:00</strong>
                  <span>特急ハウステンボス号または長崎空港行きバスに乗車し、笑顔とともに帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-50 text-indigo-600">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">FAQ</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬のハウステンボス旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. クリスマスイルミネーションの点灯時間は何時から何時までですか？</span>
                <span className="text-indigo-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                日没時間に合わせて毎日点灯します。11月〜12月は17:00〜17:30頃にアムステルダム広場やアートガーデンが一斉に点灯し、閉園時間（通常21:00〜22:00）まで壮大な光の海が広がります。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 直営ホテル（オフィシャルホテル）に宿泊するメリットは何ですか？</span>
                <span className="text-indigo-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                パーク開園前の静寂な街並みを散策できるアーリーエントリー特典や、手荷物をウェルカムゲートからホテルまで無料で配送してくれるサービス、専用クルーザーでの移動（ホテルヨーロッパ等）、夜遅くまで遊んでもすぐ部屋に戻れる圧倒的な利便性があります。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 11月・12月のハウステンボスの気候とおすすめの服装は？</span>
                <span className="text-indigo-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                大村湾に面しているため海風が吹き抜け、夜間は体感温度がぐっと下がります。特に運河クルーズやアイススケート、花火観賞時には厚手のダウンコート、手袋、マフラー、貼るカイロなどの万全な防寒対策をおすすめします。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. クリスマス花火の日程やおすすめの観賞場所は？</span>
                <span className="text-indigo-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                12月中旬〜下旬の特定日（週末やクリスマス前後）に開催されます。ハーバータウンやアートガーデン、場内ホテルの客室から大迫力の花火を観賞できます。特別観覧席付きプランの事前予約がスムーズです。
              </p>
            </details>
          </div>
        </section>

        {/* GEO & Internal Link Mesh */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-stone-100 text-stone-700">
              <Compass className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-stone-500 uppercase tracking-widest">Internal Links</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                長崎・九州のイルミネーション＆温泉特集を探す
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm">
            <Link 
              href="/prefectures/nagasaki" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-indigo-50 hover:text-indigo-600 transition font-medium border border-stone-100"
            >
              長崎県の観光・温泉宿一覧 →
            </Link>
            <Link 
              href="/winter-fukuoka-hakata-christmas-advent-gourmet-stay" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-indigo-50 hover:text-indigo-600 transition font-medium border border-stone-100"
            >
              福岡 クリスマスアドベント特集 →
            </Link>
            <Link 
              href="/winter-kumamoto-kurokawa-yuakari-illumination-stay" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-indigo-50 hover:text-indigo-600 transition font-medium border border-stone-100"
            >
              熊本 黒川温泉湯あかり特集 →
            </Link>
            <Link 
              href="/prefectures/saga" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-indigo-50 hover:text-indigo-600 transition font-medium border border-stone-100"
            >
              佐賀県（武雄・嬉野温泉）の宿 →
            </Link>
            <Link 
              href="/prefectures/fukuoka" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-indigo-50 hover:text-indigo-600 transition font-medium border border-stone-100"
            >
              福岡県の温泉ホテル一覧 →
            </Link>
            <Link 
              href="/winter-kobe-luminarie-illumination-stay" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-indigo-50 hover:text-indigo-600 transition font-medium border border-stone-100"
            >
              神戸ルミナリエ特集 →
            </Link>
            <Link 
              href="/winter-yokohama-minatomirai-christmas-stay" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-indigo-50 hover:text-indigo-600 transition font-medium border border-stone-100"
            >
              横浜みなとみらいクリスマス特集 →
            </Link>
            <Link 
              href="/features" 
              className="p-3 rounded-xl bg-stone-900 text-white hover:bg-stone-800 transition font-bold text-center flex items-center justify-center gap-1"
            >
              <span>全国の特集一覧を見る</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          
      <HubRelatedPosts currentSlug="winter-nagasaki-huistenbosch-christmas-lights-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
