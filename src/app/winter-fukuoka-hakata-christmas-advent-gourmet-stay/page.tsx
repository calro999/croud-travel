import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, ChevronRight, Sparkles, Coffee, ShieldCheck, 
  Award, Calendar, Snowflake, Utensils, Compass, HelpCircle, ExternalLink, Flame, Info, ShoppingBag 
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12月福岡クリスマスアドベント】博多駅・天神の光の街と本場もつ鍋・水炊き極上宿5選",
  description: "11月中旬から博多駅・天神・中洲が煌めく日本最大級の祭典「福岡クリスマスアドベント」！限定マグカップで楽しむホットワインと冬の博多名物（もつ鍋・水炊き）、冷えた体を芯から温める天然温泉・大浴場付きの厳選ホテルステイ。",
  keywords: '福岡 クリスマスアドベント, 博多 クリスマスマーケット, 天神 イルミネーション, 博多 もつ鍋 ホテル, 福岡 温泉 ホテル, 博多駅 大浴場, 冬旅行 11月 12月',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-fukuoka-hakata-christmas-advent-gourmet-stay/",
  },
  openGraph: {
    title: "【11・12月福岡クリスマスアドベント】博多駅・天神の光の街と本場もつ鍋・水炊き極上宿5選",
    description: "11月中旬から博多駅・天神・中洲が煌めく日本最大級の祭典「福岡クリスマスアドベント」！限定マグカップで楽しむホットワインと冬の博多名物（もつ鍋・水炊き）、冷えた体を芯から温める天然温泉・大浴場付きの厳選ホテルステイ。",
    url: 'https://croud-travel.com/winter-fukuoka-hakata-christmas-advent-gourmet-stay',
    siteName: '日本全国・旅宿クラウド',
    type: 'article',
    locale: 'ja_JP',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: "【11・12月福岡クリスマスアドベント】博多駅・天神の光の街と本場もつ鍋・水炊き極上宿5選",
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12月福岡クリスマスアドベント】博多駅・天神の光の街と本場もつ鍋・水炊き極上宿5選",
    description: "11月中旬から博多駅・天神・中洲が煌めく日本最大級の祭典「福岡クリスマスアドベント」！限定マグカップで楽しむホットワインと冬の博多名物（もつ鍋・水炊き）、冷えた体を芯から温める天然温泉・大浴場付きの厳選ホテルステイ。",
  }
};

export default function FukuokaChristmasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://croud-travel.com/winter-fukuoka-hakata-christmas-advent-gourmet-stay#article",
        "headline": "【11・12月福岡クリスマスアドベント】博多駅・天神の光の街と本場もつ鍋・水炊き極上宿5選",
        "description": "11月中旬から博多駅・天神・中洲が煌めく日本最大級の祭典「福岡クリスマスアドベント」！限定マグカップで楽しむホットワインと冬の博多名物（もつ鍋・水炊き）、冷えた体を芯から温める天然温泉・大浴場付きの厳選ホテルステイ。",
        "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
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
          "@id": "https://croud-travel.com/winter-fukuoka-hakata-christmas-advent-gourmet-stay"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://croud-travel.com/winter-fukuoka-hakata-christmas-advent-gourmet-stay#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "福岡クリスマスアドベント（旧クリスマスマーケット）の開催期間と点灯時間は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "例年11月中旬から12月25日（一部エリアは翌年1月初旬）まで開催されます。JR博多駅前広場や天神中央公園、福岡市役所西側ふれあい広場など主要会場では夕方17:00頃から23:00頃までイルミネーションが点灯し、屋台やステージイベントで賑わいます。"
            }
          },
          {
            "@type": "Question",
            "name": "名物の限定マグカップはどうやって購入できますか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "各会場のホットワイン（グリューワイン）やホットチョコレートを購入すると、その会場限定デザインのマグカップに注いで提供されます。会場ごとに異なるオリジナルデザインとなっており、毎年コレクションするリピーターも多い人気アイテムです。"
            }
          },
          {
            "@type": "Question",
            "name": "11月〜12月の福岡の気候とおすすめの服装は？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "玄界灘からの北風が吹き込むため、体感温度は想像以上に低くなります。夜間の屋外散策にはウールコートやダウンジャケット、マフラー、手袋が必須です。また、歩きやすい靴での移動をおすすめします。"
            }
          },
          {
            "@type": "Question",
            "name": "冬の博多グルメ（もつ鍋・水炊き・屋台）の事前予約は必要ですか？",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "クリスマスシーズンや週末は人気店が非常に混み合います。特に老舗のもつ鍋店や水炊き店は2〜3週間前までの事前予約を強く推奨します。屋台は予約不可のところが多いため、開店直後の18:00頃を狙うのがスムーズです。"
            }
          }
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://croud-travel.com/winter-fukuoka-hakata-christmas-advent-gourmet-stay#hotels",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "博多天然温泉「旅人の湯」ホテルルートイン博多駅前　－博多口－",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F65439%2F65439.html"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "スーパーホテルＰｒｅｍｉｅｒ博多駅・筑紫口天然温泉",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F163065%2F163065.html"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "天然温泉　八百治の湯　八百治博多ホテル",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5012%2F5012.html"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "西鉄ホテル　クルーム博多",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41372%2F41372.html"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "天然温泉　御笠の湯　ドーミーイン博多祇園（２０２６年４月１日リニューアルオープン）",
            "url": "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76404%2F76404.html"
          }
        ]
      }
    ]
  };

  const hotelList = [
            {
              id: 1,
              name: "博多天然温泉「旅人の湯」ホテルルートイン博多駅前　－博多口－",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/65439/65439.jpg",
              rating: 3.96,
              reviews: 3283,
              price: "¥8,300〜",
              access: "JR博多駅より徒歩3分(博多口右のバスターミナル前)／福岡空港より地下鉄約10分／福岡都市高速呉服町ランプより車で約５分",
              special: "☆博多駅が目の前でアクセス抜群！雨の日でもほぼ濡れずに直行！天然温泉大浴場、バイキング朝食無料♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F65439%2F65439.html",
              story: "JR博多駅博多口の目の前に位置し、駅前広場のクリスマスアドベント会場まで徒歩1〜2分という驚異的な立地を誇ります。冬の夜、イルミネーションを満喫して冷えた体を、男女別の天然温泉大浴場「旅人の湯」ですぐに温められるのが最大の魅力。ラジウム人工温泉の柔らかな湯あたりが、長時間の散策による足腰の疲れをじんわりとほぐしてくれます。客室は機能的で清潔感に溢れ、加湿機能付き空気清浄機を完備。朝食バイキングでは、ヨーロッパ直輸入の焼き立てクロワッサンやデニッシュに加え、福岡名物のがめ煮や辛子明太子も並び、朝からエネルギッシュに出発できます。",
              roomTip: "高層階の駅前側客室からは、部屋の窓から博多駅前広場の光り輝くイルミネーションを眼下に見下ろすことができ、カップルや一人旅にも特別な夜を演出してくれます。",
              gourmetTip: "徒歩3〜5分圏内に「博多名物もつ鍋 笑楽」や「もつ料理 幸」など屈指の老舗名店が密集。チェックイン後に予約を入れておけば、湯上がり後に湯冷めすることなく本場の熱々鍋を堪能できます。",
              highlights: [
                "博多駅博多口の目の前！クリスマスアドベント会場まで徒歩ですぐの超好立地",
                "男女別天然温泉「旅人の湯」で冷えた夜もポカポカ温まる",
                "朝食バイキングで味わう焼き立てパンと郷土料理"
              ]
            },
            {
              id: 2,
              name: "スーパーホテルＰｒｅｍｉｅｒ博多駅・筑紫口天然温泉",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/163065/163065.jpg",
              rating: 4.28,
              reviews: 2174,
              price: "¥7,410〜",
              access: "JR博多駅・筑紫口徒歩約８分！福岡空港から車で約10分！地下鉄博多駅東5番出口！博多駅東３丁目交差点セブンイレブン前",
              special: "博多駅から徒歩約８分☆福岡「原鶴温泉」直送の天然温泉＆ウェルカムバーでリフレッシュ☆",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F163065%2F163065.html",
              story: "博多駅筑紫口から徒歩約8分、ビジネス街の喧騒から少し離れた落ち着いたエリアに佇む進化型ホテル。最大の自慢は、福岡の名湯「原鶴温泉（はらづるおんせん）」から毎日直送される本物の天然温泉大浴場です。アルカリ性単純温泉のトロリとした肌触りは「美肌の湯」として名高く、冬の乾燥しがちな肌をしっとりと包み込んでくれます。さらに宿泊者専用のウェルカムバーでは、17:00〜19:00までワインや各種カクテル、ソフトドリンクが無料で飲み放題。クリスマス散策前のウォーミングアップや、夕食後の語らいの場として宿泊者から絶大な支持を集めています。",
              roomTip: "8種類から好みの高さ・硬さを選べる快眠枕コーナーがあり、旅先でもぐっすり熟睡できると評判。レディースフロアも完備されており女性グループ旅にも安心です。",
              gourmetTip: "健康朝食ビュッフェでは、有機JAS認定の新鮮野菜サラダバーや日替わりの焼き魚、福岡名物の明太子ご飯が食べ放題。ヘルシーかつスタミナ満点の朝食で冬の寒さに負けない活力をチャージできます。",
              highlights: [
                "原鶴温泉から直送の美肌天然温泉大浴場＆宿泊者専用ウェルカムバーが無料",
                "好みの枕が選べる快眠コーナーと朝食ビュッフェのオーガニックサラダ",
                "筑紫口の賑やかな飲食店街も至近で夜のもつ鍋巡りに最適"
              ]
            },
            {
              id: 3,
              name: "天然温泉　八百治の湯　八百治博多ホテル",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/5012/5012.jpg",
              rating: 4.19,
              reviews: 4582,
              price: "¥7,450〜",
              access: "博多駅博多口より徒歩５分（福岡空港から博多駅まで地下鉄で５分。）",
              special: "博多駅徒歩5分!!天然温泉大浴場完備!!Wi-Fi無料＆加湿機能付空気清浄機完備♪",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5012%2F5012.html",
              story: "博多駅から徒歩わずか5分でありながら、地下数千メートルから湧き出る自家源泉「八百治の湯」を引いた本格的な大浴場を有する都市型温泉ホテル。都心のホテルとは思えない広々とした湯船には、神経痛や筋肉痛、冷え性に効果的なナトリウム・カルシウム-塩化物泉がたっぷりと湛えられています。高温ドライサウナと水風呂も完備されており、サウナーにとっても満足度の高い「ととのい」環境が整っています。客室は全室ゆったりとした広さが確保され、ライティングデスクやクローゼットも充実。落ち着いた色調の内装が上質な寛ぎを約束します。",
              roomTip: "広めのツインルームやデラックスツインはスーツケースを広げても余裕の広さ。クリスマスマーケットで購入した雑貨やお土産をゆっくり整理するのにも最適です。",
              gourmetTip: "ホテル周辺は名店居酒屋の宝庫。中洲川端方面へも徒歩15分ほどでアクセスでき、冬の味覚「寒サバの胡麻鯖」や「博多一口餃子」をつまみながら地酒を味わう大人の夜にぴったりです。",
              highlights: [
                "博多駅から徒歩5分！広々とした自家源泉の天然温泉「八百治の湯」サウナ完備",
                "ゆったり足を伸ばせる大浴槽と高温サウナで極上のととのい体験",
                "落ち着いた大人の寛ぎ空間と加湿空気清浄機完備の清潔な客室"
              ]
            },
            {
              id: 4,
              name: "西鉄ホテル　クルーム博多",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/41372/41372.jpg",
              rating: 4.27,
              reviews: 6902,
              price: "¥9,000〜",
              access: "ＪＲ　博多駅「博多口」より徒歩約４分    　　　地下鉄　博多駅「西４番出口」より徒歩約４分",
              special: "天然温泉・サウナ完備／博多駅すぐ隣／開放的で居心地のよいロビー空間／コンビニ併設",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41372%2F41372.html",
              story: "JR博多駅博多口から徒歩約4分、地下鉄西4番出口からも直結感覚でアクセスできるハイクラスなホテル。館内に入ると心地よいアロマの香りとモダンな和のデザインが旅人を迎え、旅の期待感を高めてくれます。地下1階には宿泊者専用の天然温泉スパがあり、御影石造りの広々とした内湯と、外気を感じられる開放的な半露天風呂、さらには本格的なロウリュサウナまで完備。街の真ん中にいながらリゾート旅館のような贅沢な湯浴みが叶います。客室には上質なシモンズ製ベッドとマッサージクッションが用意され、癒やしへのこだわりが随所に光ります。",
              roomTip: "プレミアムフロアの客室にはカプセル式コーヒーマシンや特別なバスアメニティが揃い、洗練されたインテリアの中で優雅なホテルステイを満喫できます。",
              gourmetTip: "館内レストラン「ジャコズ」で提供される朝食は、福岡・九州各地の厳選食材を用いた和洋ビュッフェ。シェフが目の前で焼き上げるオムレツや、熱々のもつ鍋、明太子食べ比べなど朝から贅を尽くした美食が並びます。",
              highlights: [
                "博多駅直結級の快適アクセス！露天風呂付き天然温泉スパ＆スタイリッシュ客室",
                "地元福岡の旬素材を取り入れた贅沢な朝食和洋ビュッフェ",
                "カフェラウンジを併設し女子旅やカップルステイにも大好評"
              ]
            },
            {
              id: 5,
              name: "天然温泉　御笠の湯　ドーミーイン博多祇園（２０２６年４月１日リニューアルオープン）",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76404/76404.jpg",
              rating: 4.27,
              reviews: 4835,
              price: "¥9,605〜",
              access: "地下鉄空港線「祗園駅」3番出口から徒歩1分、博多駅から徒歩約10分",
              special: "【4月リニューアルオープン】天然温泉大浴場＆サウナ完備！ 繁華街近くの好立地！ 夜鳴きそばサービス！",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76404%2F76404.html",
              story: "地下鉄祇園駅3番出口から徒歩わずか1分、博多駅からも徒歩10分という好立地にあり、2026年4月にリニューアルオープンを遂げた大人気ホテル。最上階に備えられた天然温泉「御笠の湯」は、内湯・露天風呂・水風呂・高温サウナが揃った本格派。男湯にはドライサウナ、女湯にはスチームサウナが完備され、旅の疲れを徹底的にリセットできます。湯上がり処では夜間にアイスキャンディー、朝には乳酸菌飲料が無料で振る舞われるほか、名物の特製醤油ラーメン「夜鳴きそば」の無料提供も大好評。中洲の屋台街やキャナルシティ博多へも歩いてすぐのロケーションです。",
              roomTip: "サータ社製ベッドを配した機能的な客室は、コンパクトながらデスクや電源配置が工夫され、一人旅からビジネス・観光まで抜群の快適性を誇ります。",
              gourmetTip: "朝食ビュッフェの看板メニューは「ご当地逸品 揚げたて天ぷらと季節の炊き込みご飯」。博多名物の辛子明太子や水炊き風スープも用意され、朝から福岡グルメの真髄を味わえます。",
              highlights: [
                "祗園駅徒歩1分＆キャナルシティ徒歩圏内！天然温泉大浴場と名物夜鳴きそば",
                "湯上がりアイス・乳酸菌飲料無料サービスと夜遅くのサウナ満喫",
                "水炊きやもつ鍋の名店が密集する中洲・春吉エリアへ徒歩アクセス"
              ]
            }
  ];

  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-rose-500 selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <header className="relative h-[520px] md:h-[620px] flex items-center justify-center text-white overflow-hidden bg-stone-900">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85"
          alt="福岡クリスマスアドベントの華やかな夜景と博多の冬の街並み"
          fill
          priority
          className="object-cover object-center opacity-45 transform scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-600/90 text-white text-xs md:text-sm font-semibold tracking-wider mb-5 shadow-lg backdrop-blur-sm border border-rose-400/30">
            <Sparkles className="w-4 h-4 text-amber-300" />
            <span>11月・12月限定 冬の特選ガイド</span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-6 drop-shadow-md">
            【11・12月福岡クリスマスアドベント】<br className="hidden sm:inline" />
            博多駅・天神の光の街と本場もつ鍋・水炊き極上宿5選
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            街全体が温かな光とホットワインの香りに包まれる冬の福岡。イルミネーションを満喫した後は、本場のもつ鍋や水炊きに舌鼓を打ち、極上の天然温泉付きホテルで芯から温まる贅沢な旅へ。
          </p>
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-stone-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-rose-400" /> 取材・更新: 2026年9月最新</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-rose-400" /> 福岡県（博多駅・天神・中洲）</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-16">
        
        {/* Intro Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-stone-200/80 leading-relaxed space-y-6">
          <div className="flex items-center gap-3 pb-3 border-b border-rose-100">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-600">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">Introduction</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                光と美食が共鳴する、九州一華やかな冬の風物詩へようこそ
              </h2>
            </div>
          </div>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            11月中旬を迎えると、福岡の街は劇的な変貌を遂げます。JR博多駅前広場を埋め尽くす数十万球のシャンパンゴールドのイルミネーション、天神中央公園を彩る幻想的な光のシンボルツリー、そして那珂川の川面に光が揺れる中洲エリア。かつて「福岡クリスマスマーケット」として親しまれ、今や市街地全体がひとつのフェスティバルへと進化した「福岡クリスマスアドベント」の季節です。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            会場を歩けば、欧州直輸入のスパイスが効いたグリューワイン（ホットワイン）の芳醇なアロマと、香ばしく焼き上げられる本格ソーセージの煙が鼻腔をくすぐります。毎年コレクターが殺到する各会場限定デザインのマグカップを片手に、アコースティックライブの歌声に耳を傾けるひとときは、寒さを忘れさせるほどの幸福感に満ちています。
          </p>
          <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
            そして博多の冬といえば、絶対に外せないのが滋味あふれる郷土グルメ。プリップリの国産牛モツと甘みのあるキャベツが山盛りになった熱々の「もつ鍋」、丸鶏をじっくり煮込み旨味を凝縮させた白濁スープが染み渡る「博多水炊き」、玄界灘の冬の荒波が育んだ極上の「寒サバの胡麻鯖」。冷たい冬風のなか散策を楽しんだ夜だからこそ、体の芯から染み入る温かさが旅の記憶を鮮やかに彩ります。
          </p>
          <div className="bg-rose-50/60 rounded-2xl p-5 border border-rose-200/60 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                <Flame className="w-5 h-5 text-rose-600" />
                冬の博多ステイを最高にする秘訣
              </h3>
              <p className="text-xs sm:text-sm text-stone-600">
                屋外の光の祭典を楽しんだ後は、宿に大浴場や天然温泉があるかどうかが満足度を大きく左右します。
              </p>
            </div>
            <a 
              href="#hotel-list" 
              className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-sm transition-all"
            >
              厳選ホテル5選を見る ↓
            </a>
          </div>
        </section>

        {/* 3 Core Highlights */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">Key Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              11月・12月の福岡博多旅で満喫すべき3つの醍醐味
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg">
                01
              </div>
              <h3 className="text-lg font-bold text-stone-900">巨大イルミと限定マグカップ</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                博多駅前・天神・中洲の各エリアで異なるテーマの光が輝きます。会場限定デザインのマグカップで味わうホットワインは冬の福岡旅行の最高の思い出に。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold text-lg">
                02
              </div>
              <h3 className="text-lg font-bold text-stone-900">冬が旬！本場もつ鍋＆博多水炊き</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                寒さが深まる11〜12月は鍋のベストシーズン。ニンニク香る醤油や味噌のもつ鍋、コラーゲンたっぷりの濃厚水炊きが冷えた体を温めます。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-lg">
                03
              </div>
              <h3 className="text-lg font-bold text-stone-900">駅前天然温泉＆サウナで極楽</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                博多駅周辺には本格的な天然温泉大浴場やドライサウナを備えたホテルが充実。夜遅くまで散策してもすぐに温かい湯船に浸かれる安心感が魅力。
              </p>
            </div>
          </div>
        </section>

        {/* Hotel List Section */}
        <section id="hotel-list" className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">Recommended Hotels</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              福岡クリスマスアドベントを満喫する天然温泉・大浴場付き厳選宿5選
            </h2>
            <p className="text-stone-500 text-sm mt-2">
              楽天トラベルの最新空室・料金データをもとに、アクセス・湯浴み・グルメ利便性に優れた5軒を厳選紹介。
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
                        <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-md">
                          博多駅・中洲エリア至近
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
                          <Info className="w-4 h-4 text-rose-600" />
                          宿の魅力と温泉・宿泊体験レビュー
                        </h4>
                        <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                          {hotel.story}
                        </p>
                        <div className="bg-stone-50 rounded-xl p-3 border border-stone-200/60 text-xs text-stone-600 space-y-1">
                          <div><strong className="text-stone-800">客室のワンポイント:</strong> {hotel.roomTip}</div>
                          <div><strong className="text-stone-800">周辺グルメのコツ:</strong> {hotel.gourmetTip}</div>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-stone-100 space-y-2">
                        <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">主な特徴・サービス</h4>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-stone-600">
                          {hotel.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div>
                        <span className="text-xs text-stone-400 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-rose-600">{hotel.price}</span>
                      </div>
                      <a
                        href={hotel.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-sm transition-all hover:scale-[1.02]"
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
                厳選5ホテルの特徴・温泉・アクセス比較表
              </h2>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-stone-50 border-b border-stone-200 text-stone-700">
                  <th className="py-3 px-4 font-bold">ホテル名</th>
                  <th className="py-3 px-4 font-bold">温泉・浴場タイプ</th>
                  <th className="py-3 px-4 font-bold">駅アクセス</th>
                  <th className="py-3 px-4 font-bold">おすすめの滞在スタイル</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-stone-600">
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">ホテルルートイン博多駅前</td>
                  <td className="py-3 px-4">天然温泉「旅人の湯」</td>
                  <td className="py-3 px-4">博多口 徒歩1分</td>
                  <td className="py-3 px-4">博多駅前広場会場へ即アクセスしたい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">スーパーホテルPremier博多駅</td>
                  <td className="py-3 px-4">原鶴温泉直送 天然温泉</td>
                  <td className="py-3 px-4">筑紫口 徒歩8分</td>
                  <td className="py-3 px-4">美肌の湯＆無料ウェルカムバーを満喫したい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">八百治博多ホテル</td>
                  <td className="py-3 px-4">自家源泉「八百治の湯」サウナ</td>
                  <td className="py-3 px-4">博多口 徒歩5分</td>
                  <td className="py-3 px-4">広大な天然温泉大浴槽でサ活も楽しみたい方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">西鉄ホテル クルーム博多</td>
                  <td className="py-3 px-4">半露天付き天然温泉スパ</td>
                  <td className="py-3 px-4">博多口 徒歩4分</td>
                  <td className="py-3 px-4">女子旅やカップルで洗練された空間を好む方</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-stone-900">ドーミーイン博多祇園</td>
                  <td className="py-3 px-4">天然温泉「御笠の湯」サウナ</td>
                  <td className="py-3 px-4">祇園駅 徒歩1分</td>
                  <td className="py-3 px-4">中洲の屋台街・もつ鍋店巡りを遊び尽くしたい方</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Expert Winter Tips */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-600">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">Travel Tips</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                現地編集部直伝！冬の博多・クリスマスアドベント満喫のコツとお土産
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-stone-600 leading-relaxed">
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Coffee className="w-4 h-4 text-rose-600" />
                会場間移動は地下鉄七隈線が圧倒的に便利！
              </h3>
              <p>
                博多駅から天神南駅まで延伸された地下鉄七隈線を使えば、博多駅前広場会場から天神中央公園会場までわずか3分で移動可能。寒風の中を歩き続けることなく、複数のクリスマスマーケットをスムーズに梯子できます。
              </p>
            </div>
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-rose-600" />
                限定マグカップの持ち帰り用ビニール袋を持参
              </h3>
              <p>
                ホットワインを飲み終わったマグカップは、会場の洗い場で軽くすすぐことができますが、完全に乾かすのは難しいため、ジッパー付きのビニール袋やプチプチ（緩衝材）を持参しておくと、バッグを汚さず安全に持ち帰れます。
              </p>
            </div>
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-600" />
                中洲・天神の屋台めぐり初心者ルール
              </h3>
              <p>
                冬の屋台は防寒用のビニールカーテンで覆われており、中は熱気で意外と暖か。長居は無粋とされるため、名物のおでんや焼きラーメン、一口餃子を2〜3品楽しんだら、次のお客さんに席を譲るのが粋な博多の屋台マナーです。
              </p>
            </div>
            <div className="space-y-2 bg-stone-50 p-5 rounded-2xl border border-stone-100">
              <h3 className="font-bold text-stone-900 text-sm flex items-center gap-2">
                <Award className="w-4 h-4 text-rose-600" />
                冬に喜ばれる博多の鉄板お土産BEST3
              </h3>
              <p>
                定番の「博多通りもん」はもちろん、冬限定のあまおう苺を使ったスイーツ、有名料亭（稚加榮やふくや）の「無着色辛子明太子」、ピリ辛がクセになる「めんべい」は、博多駅構内のマイングで全て揃います。
              </p>
            </div>
          </div>
        </section>

        {/* 1泊2日モデルコース */}
        <section className="bg-gradient-to-br from-rose-50/70 via-white to-stone-50 rounded-3xl p-6 sm:p-10 border border-rose-200/80 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">Model Course</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              【1泊2日】光の街と冬グルメを味わい尽くす博多満喫モデルプラン
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              11月・12月ならではのイルミネーションと温かい名物グルメを最も効率よく巡るタイムスケジュール。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-2 pb-2 border-b border-rose-100">
                <span className="px-3 py-1 bg-rose-600 text-white font-bold text-xs rounded-full">DAY 1</span>
                <h3 className="font-bold text-stone-900 text-base">光のマーケット巡りと本場もつ鍋の夜</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">14:00</strong>
                  <span>博多駅到着。ホテルに荷物を預け、櫛田神社へ参拝。川端通商店街で散策。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">16:00</strong>
                  <span>ホテルにチェックイン。夕方の冷え込みに備えて一度天然温泉で軽くリフレッシュ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">17:30</strong>
                  <span>JR博多駅前広場へ。点灯したクリスマスツリーの下、限定マグカップでホットワインを堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">19:30</strong>
                  <span>予約しておいた名店で本場「もつ鍋」または「博多水炊き」。〆のちゃんぽん麺まで満喫。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">21:30</strong>
                  <span>中洲「ナカス ヒカリノサト」の煌めく川沿いを散策。宿の大浴場＆サウナで芯まで温まり就寝。</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-2 pb-2 border-b border-teal-100">
                <span className="px-3 py-1 bg-teal-600 text-white font-bold text-xs rounded-full">DAY 2</span>
                <h3 className="font-bold text-stone-900 text-base">朝風呂・明太子朝食と天神お買い物</h3>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-stone-600">
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">07:30</strong>
                  <span>清々しい朝の天然温泉大浴場で目覚まし入浴。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">08:30</strong>
                  <span>ホテルの朝食ビュッフェで、名物明太子やがめ煮（筑前煮）など郷土の味を朝から堪能。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">10:30</strong>
                  <span>地下鉄で天神へ。大名エリアのおしゃれなカフェ巡りや冬のショッピングを楽しむ。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">12:30</strong>
                  <span>昼食はあっさり豚骨ラーメンまたは胡麻鯖定食。</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-stone-900 shrink-0">14:30</strong>
                  <span>博多駅デイトスやマイングでお土産（明太子・通りもん・めんべい等）を購入し、大満足で帰路へ。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-rose-50 text-rose-600">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">FAQ</span>
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
                冬の福岡・クリスマスアドベント旅行 よくある質問
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 福岡クリスマスアドベントの開催期間と点灯時間は何時までですか？</span>
                <span className="text-rose-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                例年11月中旬から12月25日（一部エリアは翌年1月初旬）まで開催されます。JR博多駅前広場や天神中央公園、福岡市役所西側ふれあい広場など主要会場では夕方17:00頃から23:00頃までイルミネーションが点灯し、屋台やステージイベントで賑わいます。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 会場限定のオリジナルマグカップはどうやって手に入りますか？</span>
                <span className="text-rose-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                各会場のホットワイン（グリューワイン）やホットチョコレートを購入すると、その会場限定デザインのマグカップに注いで提供されます。会場ごとに異なるオリジナルデザインとなっており、毎年コレクションするリピーターも多い人気アイテムです。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 11月〜12月の福岡の気候とおすすめの服装は？</span>
                <span className="text-rose-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                玄界灘からの北風が吹き込むため、体感温度は想像以上に低くなります。夜間の屋外散策にはウールコートやダウンジャケット、マフラー、手袋が必須です。また、歩きやすい靴での移動をおすすめします。
              </p>
            </details>

            <details className="p-5 rounded-2xl bg-stone-50 border border-stone-200/80 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm sm:text-base list-none">
                <span>Q. 冬の博多グルメ（もつ鍋・水炊き）の予約はいつ頃取ればいいですか？</span>
                <span className="text-rose-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                クリスマスシーズンや週末は人気店が非常に混み合います。特に老舗のもつ鍋店や水炊き店は2〜3週間前までの事前予約を強く推奨します。屋台は予約不可のところが多いため、開店直後の18:00頃を狙うのがスムーズです。
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
                九州エリアの宿・特集記事を探す
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm">
            <Link 
              href="/prefectures/fukuoka" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-rose-50 hover:text-rose-600 transition font-medium border border-stone-100"
            >
              福岡県の温泉宿・ホテル一覧 →
            </Link>
            <Link 
              href="/prefectures/saga" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-rose-50 hover:text-rose-600 transition font-medium border border-stone-100"
            >
              佐賀県（嬉野・武雄）の宿 →
            </Link>
            <Link 
              href="/prefectures/nagasaki" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-rose-50 hover:text-rose-600 transition font-medium border border-stone-100"
            >
              長崎県（ハウステンボス等）の宿 →
            </Link>
            <Link 
              href="/prefectures/oita" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-rose-50 hover:text-rose-600 transition font-medium border border-stone-100"
            >
              大分県（別府・由布院）の宿 →
            </Link>
            <Link 
              href="/prefectures/kumamoto" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-rose-50 hover:text-rose-600 transition font-medium border border-stone-100"
            >
              熊本県（黒川温泉・阿蘇）の宿 →
            </Link>
            <Link 
              href="/winter-kumamoto-kurokawa-yuakari-illumination-stay" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-rose-50 hover:text-rose-600 transition font-medium border border-stone-100"
            >
              黒川温泉 湯あかり特集 →
            </Link>
            <Link 
              href="/winter-oita-beppu-jigokumushi-hotspring-stay" 
              className="p-3 rounded-xl bg-stone-50 hover:bg-rose-50 hover:text-rose-600 transition font-medium border border-stone-100"
            >
              別府温泉 地獄蒸し特集 →
            </Link>
            <Link 
              href="/features" 
              className="p-3 rounded-xl bg-stone-900 text-white hover:bg-stone-800 transition font-bold text-center flex items-center justify-center gap-1"
            >
              <span>全国の特集一覧を見る</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

      </main>
    </article>
  );
}
