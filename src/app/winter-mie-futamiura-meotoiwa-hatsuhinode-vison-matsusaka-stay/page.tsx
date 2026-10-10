import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Star,
  MapPin,
  Calendar,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Info,
  HelpCircle,
  Thermometer,
  Car,
  Compass
} from 'lucide-react';

export const metadata: Metadata = {
  title: '伊勢湾の霊峰・二見浦夫婦岩の初日の出と日本最大級VISON：2026-2027年冬の三重・伊勢二見＆多気！薬草温泉と極上松阪牛名宿5選 | 旅行キュレーション',
  description: '冬の澄んだ朝日に輝く二見興玉神社「夫婦岩」の新春初日の出・初詣と冬の満月の神秘！日本最大級の商業リゾート「VISON」の本草湯と美食巡り、本場伊勢の極上「松阪牛」すき焼きや冬の伊勢海老・的矢牡蠣に満たされる三重の厳選名宿5選。',
  keywords: ['二見浦・多気・伊勢', '冬旅行', '新春初詣', '温泉', '名宿', '三重県観光', '楽天トラベル', 'ふるさと納税'],
  openGraph: {
    title: '伊勢湾の霊峰・二見浦夫婦岩の初日の出と日本最大級VISON：2026-2027年冬の三重・伊勢二見＆多気！薬草温泉と極上松阪牛名宿5選',
    description: '冬の澄んだ朝日に輝く二見興玉神社「夫婦岩」の新春初日の出・初詣と冬の満月の神秘！日本最大級の商業リゾート「VISON」の本草湯と美食巡り、本場伊勢の極上「松阪牛」すき焼きや冬の伊勢海老・的矢牡蠣に満たされる三重の厳選名宿5選。',
    images: ['https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Futamiokitama_jinja_Haiden.jpg/1280px-Futamiokitama_jinja_Haiden.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail'],
    type: 'article',
  },
};

export default function Page() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "【伊勢湾の霊峰・二見浦夫婦岩の初日の出と日本最大級VISON】2026-2027年冬の三重・伊勢二見＆多気！薬草温泉と極上松阪牛名宿5選",
      "description": "冬の澄んだ朝日に輝く二見興玉神社「夫婦岩」の新春初日の出・初詣と冬の満月の神秘！日本最大級の商業リゾート「VISON」の本草湯と美食巡り、本場伊勢の極上「松阪牛」すき焼きや冬の伊勢海老・的矢牡蠣に満たされる三重の厳選名宿5選。",
      "image": [
        "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Futamiokitama_jinja_Haiden.jpg/1280px-Futamiokitama_jinja_Haiden.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
        "https://img.travel.rakuten.co.jp/share/HOTEL/40332/40332.jpg"
      ],
      "datePublished": "",
      "dateModified": "",
      "author": {
        "@type": "Organization",
        "name": "Japan Travel Curations"
      }
    },
    {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@type": "Hotel",
            "name": "上質の美味とおもてなし。オーシャンビューの宿　旅荘　海の蝶",
            "description": "二見浦の高台、緑豊かな岬に佇み、目の前に広がる伊勢湾の雄大なオーシャンパノラマを独占できる高級温泉旅館。全客室が海に面しており、朝には海から昇る清らかな朝日、夜には静かな潮騒とともに煌めく満月をプライベートな空間から堪能できます。敷地内にはプライベートビーチや散策路が広がり、旅情を満喫。夕食には三重県が誇る最高峰ブランド「松阪牛」の炭火焼きや、獲れたての伊勢海老・アワビなど伊勢志摩の至宝をふんだんに盛り込んだ豪華会席が並び、記念日や新春の特別な滞在に相応しい極上の時間をお届けします。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/40332/40332.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "三重県",
              "streetAddress": "三重県 伊勢市二見町松下1693"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.47",
              "reviewCount": "2716"
            },
            "priceRange": "¥15,400〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@type": "Hotel",
            "name": "ホテルヴィソン",
            "description": "多気の壮大な自然美と共生するように山の斜面にデザインされた、日本最大級リゾートVISONの中核を担うハイエンドリゾートホテル。すべての客室に広々としたテラスが備わり、木々の緑と澄んだ冬の風を感じながら、まるで自然の中に溶け込むような滞在が楽しめます。宿泊者は三重大学と共同研究された薬草温浴施設「本草湯」を自由に利用でき、冬の身体を内側から整える極上の癒やしを体験。夕食にはVISON内の多彩な一流レストランから好みのスタイルを選べ、美食とウェルネスが融合した新しい旅の歓びを満喫できます。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/182683/182683.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "三重県",
              "streetAddress": "三重県 多気郡多気町ヴィソン672-1 ホテルヴィソン"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.41",
              "reviewCount": "1154"
            },
            "priceRange": "¥20,350〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@type": "Hotel",
            "name": "ジャズが流れる海辺のお宿　浜千代館",
            "description": "二見浦の海岸通り沿いに位置し、名所「夫婦岩」まで波打ち際の遊歩道を歩いてわずか5分という絶好のロケーションを誇る海辺の和風旅館。館内には心地よいジャズの名曲が静かに流れ、旅人の心を優しく解きほぐします。夫婦岩の初日の出を拝む早朝散拝にもこれ以上ない便利さ。趣の異なる貸切風呂も備わり、プライベートな湯浴みを楽しめます。夕食には伊勢湾で水揚げされた新鮮な海の幸や、柔らかくジューシーな松阪牛料理が並び、家庭的で温かなもてなしとともに心温まる冬の伊勢旅を演出してくれます。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7563/7563.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "三重県",
              "streetAddress": "三重県 伊勢市二見町茶屋537-26"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.09",
              "reviewCount": "1226"
            },
            "priceRange": "¥10,980〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 4,
          "item": {
            "@type": "Hotel",
            "name": "ホテルキャッスルイン伊勢夫婦岩（旧：ホテルリゾートイン二見）",
            "description": "二見浦の海岸近くに位置し、夫婦岩へのアクセスはもちろん、伊勢志摩スカイラインや国道への合流もスムーズな観光拠点ホテル。館内には伊勢湾を望む大浴場に加え、宿泊者が無料で利用できる趣の異なる複数の貸切風呂が用意されており、家族やカップルで気兼ねなく温まることができます。コストパフォーマンスに優れた宿泊プランが揃い、気軽に伊勢二見の冬景色と初詣を満喫したい旅行者に幅広く支持されています。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/40176/40176.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "三重県",
              "streetAddress": "三重県 伊勢市二見町茶屋537-20"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "3.92",
              "reviewCount": "2285"
            },
            "priceRange": "¥4,070〜"
          }
        },
        {
          "@type": "ListItem",
          "position": 5,
          "item": {
            "@type": "Hotel",
            "name": "伊勢志摩国立公園・二見浦　二見温泉　蘇民の湯　ホテル清海",
            "description": "二見浦の海沿いに建ち、古くから伝わる蘇民将来の伝説にちなんだ自家源泉天然温泉「蘇民の湯」を誇る老舗温泉ホテル。窓の外一面に広がる伊勢湾の大海原を眺めながら入る展望露天風呂は格別の爽快感で、塩分を含む良質な泉質が湯冷めを防ぎ、冬の身体をポカポカに保ちます。夕食には伊勢志摩の荒波で育った新鮮な地魚の舟盛りや、冬ならではの海鮮鍋会席が振る舞われ、雄大な海の景色と名湯の温もりに包まれる旅情豊かなひとときを過ごせます。",
            "image": "https://img.travel.rakuten.co.jp/share/HOTEL/7848/7848.jpg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "三重県",
              "streetAddress": "三重県 伊勢市二見町松下1349－136"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "3.44",
              "reviewCount": "682"
            },
            "priceRange": "¥8,800〜"
          }
        }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "二見興玉神社の夫婦岩で「初日の出」を拝むためのおすすめスポットと時間は？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "元旦の日の出時刻は午前6時55分〜7時00分頃です。夫婦岩の正面にある二見興玉神社境内や参道海岸沿いが定番のビュースポットです。冬期は太陽が夫婦岩の右側（南寄り）の水平線から昇り、茜色の朝焼けと夫婦岩のシルエットが美しく調和します。初日の出の時間帯は周辺駐車場が大変混雑するため、近隣の宿に宿泊して徒歩で向かうのが最も確実でおすすめです。"
          }
        },
        {
          "@type": "Question",
          "name": "「VISON（ヴィソン）」を1日で効率よく楽しむためのポイントは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "敷地が非常に広大なため、到着後はまず「マルシェ ヴィソン」で新鮮な地元食材やスイーツを巡り、午後は「サンセバスチャン通り」でバスク地方のバル文化を体験。夕方に「本草湯」で薬草温泉にゆっくり浸かり、夜は「和ヴィソン」で松阪牛や伊勢志摩の海鮮ディナーを味わう流れがスムーズです。敷地内巡回モビリティやバスも運行されています。"
          }
        },
        {
          "@type": "Question",
          "name": "「浜参宮」として二見浦にお参りしてから伊勢神宮へ向かう正式なルートは？",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "古来の習わしでは、まず二見興玉神社でお祓い（無垢塩祓）を受け、身を清めてから伊勢神宮外宮、そして内宮へと参拝するのが正式な参宮ルートとされています。二見浦から伊勢神宮（外宮・内宮）へは車で15〜20分程度と近いため、朝一番に二見浦でお参りしてから伊勢神宮へ向かう行程が大変おすすめです。"
          }
        }
      ]
    }
  ]
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-stone-50 text-stone-800 pb-20">
        {/* ヒーローヘッダー */}
        <header className="relative bg-gradient-to-b from-stone-900 via-stone-850 to-stone-800 text-white pt-16 pb-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-stone-300">
              <Link href="/" className="hover:text-white transition-colors">ホーム</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              <Link href="/features" className="hover:text-white transition-colors">厳選特集</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              <Link href="/prefectures/mie" className="hover:text-white transition-colors">三重県</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
              <span className="text-cyan-400 font-medium">二見浦・多気・伊勢</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-900/60 border border-cyan-700/50 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>2026-2027年冬（11月・12月・1月）最新厳選ガイド</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">「伊勢湾の霊峰・二見浦夫婦岩の初日の出と日本最大級VISON」2026-2027年冬の三重・伊勢二見＆多気！薬草温泉と極上松阪牛名宿5選</h1>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-3xl pt-2">
              冬の澄んだ朝日に輝く二見興玉神社「夫婦岩」の新春初日の出・初詣と冬の満月の神秘！日本最大級の商業リゾート「VISON」の本草湯と美食巡り、本場伊勢の極上「松阪牛」すき焼きや冬の伊勢海老・的矢牡蠣に満たされる三重の厳選名宿5選。
            </p>
          </div>
        </header>

        {/* リード文セクション */}
        <section className="max-w-4xl mx-auto px-4 -mt-10 relative z-10 mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200/80 space-y-4">
            <div className="flex items-center gap-2 text-cyan-900 font-bold text-sm sm:text-base border-b border-stone-100 pb-2">
              <Compass className="w-5 h-5 text-cyan-700" />
              <span>冬の二見浦・多気・伊勢探訪：静寂と温もりに包まれる旅の魅力</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              神路山を源流とする五十鈴川が注ぎ込む伊勢湾の穏やかな波打ち際、三重県伊勢市二見町。古来、伊勢神宮へ参拝するすべての旅人が、まずその身を清める「浜参宮（禊）」を行った神聖な海岸が「二見浦（ふたみうら）」です。海上に並び立つ大小二つの奇岩を太い注連縄で結んだ「夫婦岩（めおといわ）」は、沖合700mに鎮まる霊石・興玉神石と日の神を拝する鳥居として祀られる二見興玉神社の象徴。11月から1月の冬期は空気が澄み渡り、波静かな伊勢湾の水平線から昇る荘厳な初日の出や、冬の夜空に浮かぶ満月が夫婦岩の真上を渡る神秘的な絶景を求めて、全国から巡礼者が集まります。そして伊勢から車でわずか20分、多気町の広大な山懐に誕生したのが、日本最大級の滞在型商業リゾート「VISON（ヴィソン）」。東京ドーム24個分もの広大な敷地に、三重の伝統薬草を活用した温浴施設「本草湯」をはじめ、国内外の超一流シェフが手掛ける美食パビリオンが集結しています。冬の伊勢路の食卓を飾るのは、世界の美食家を唸らせる肉の芸術品「松阪牛」の極上すき焼きや網焼き、そして冬に旬の最盛期を迎える「伊勢海老」のお造りや鬼殻焼き、的矢湾の清浄な海で育つぷりぷりの「的矢かき」。神聖な祈りと現代の最先端リゾートが融合する、唯一無二の三重・冬の極上旅へご案内します。
            </p>
          </div>
        </section>

        {/* なぜ冬に訪れるべきかの3ポイント */}
        <section className="max-w-4xl mx-auto px-4 mb-14 space-y-4">
          <div className="border-l-4 border-cyan-800 pl-3">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              この冬、二見浦・多気・伊勢を訪れるべき3つの理由
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 pt-0.5">
              11月〜1月ならではの幻想的な光景、開運初詣、そして冬が一番美味しい旬の味覚
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  伊勢神宮参拝前の禊の聖地！二見浦「夫婦岩」の荘厳な新春初日の出と冬の満月
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                猿田彦大神を祀る二見興玉神社。大注連縄で固く結ばれた夫婦岩は、夫婦円満や良縁成就の最強パワースポット。冬は空気が冴え冴えと澄み、海から昇る朝日の光芒が夫婦岩を黄金色に染め上げる瞬間は息を呑む神々しさ。新年の始まりに心身を清める最高の聖地です。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  東京ドーム24個分！日本最大級の美食と癒やしのリゾート「VISON」と本草湯
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                薬草学の知恵を現代に甦らせた「本草湯」では、季節の薬草湯に浸かりながら奥伊勢の山並みを望む極上の湯浴みが楽しめます。敷地内には有名パティシエのスイーツ、ミシュラン星付きシェフのレストラン、三重の地酒や発酵文化を体感できるショップが並び、知的好奇心と五感を満たします。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <h3 className="text-base sm:text-lg font-bold text-stone-900">
                  肉の芸術品「極上松阪牛」と冬に甘みが極まる伊勢海老・的矢牡蠣の饗宴
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-8">
                きめ細やかなサシと芳醇な香りを放つ日本最高峰ブランド牛「松阪牛」。甘辛い割り下で焼き上げる本場のすき焼きは至福の味わい。さらに冬の海が育む伊勢海老の弾力ある甘み、生でも焼きでも濃厚な旨味が弾ける的矢牡蠣など、伊勢志摩の豊かな自然が育んだ冬の味覚を心ゆくまで堪能できます。
              </p>
            </div>
          </div>
        </section>

        {/* アクセス・気候・服装ガイド */}
        <section className="max-w-4xl mx-auto px-4 mb-14">
          <div className="bg-cyan-950/5 border border-cyan-800/20 rounded-2xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2">
              <Thermometer className="w-5 h-5 text-cyan-800" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                アクセス・気候・冬の服装ガイド
              </h2>
            </div>
            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line bg-white/70 p-5 rounded-xl border border-stone-200/60">
              【エリアへのアクセス】
・電車・JR・近鉄：JR参宮線「二見浦駅」下車徒歩約15分。または近鉄山田線・鳥羽線「宇治山田駅」「伊勢市駅」より三重交通バス「鳥羽」行きで「夫婦岩東口」下車約20分。名古屋駅から近鉄特急で伊勢市駅まで約1時間25分、大阪難波駅から近鉄特急で約1時間45分。
・VISONへのアクセス：名古屋名鉄バスセンターよりVISON直通高速バスで約1時間40分。伊勢神宮（内宮前）・松阪駅より三重交通路線バスで約40分。
・車・マイカー：伊勢二見鳥羽ライン「二見JCT」より二見浦まで約3分。伊勢自動車道「多気ヴィソンスマートIC」直結（または勢和多気ICより約3分）。伊勢神宮内宮から二見浦まで車で約15分、VISONまで車で約20分。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜1月下旬（夫婦岩の冬の日の出・満月、二見興玉神社新春初詣、VISON本草湯の冬至薬草湯、松阪牛・伊勢海老の旬）。
・気温の目安：伊勢湾沿岸は黒潮の影響で比較的温暖ですが、冬期は海風が吹き抜け、朝晩の体感温度は氷点下近くまで下がります。日中は8〜12℃前後。
・服装のポイント：夫婦岩の参道や海岸沿いは強い潮風が吹くため、風を通さない防寒ダウンジャケット、手袋、マフラーが欠かせません。VISONの敷地内は起伏があり広大なので、歩きやすい防寒シューズが最適です。
            </div>
          </div>
        </section>

        {/* 近隣名所アーカイブ（Wikipedia連携） */}
        <section className="max-w-4xl mx-auto px-4 mb-14">
          <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl text-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4" />
              <span>近隣名所アーカイブ＆公式百科事典連携</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 relative h-56 rounded-xl overflow-hidden bg-stone-800">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a3/Futamiokitama_jinja_Haiden.jpg/1280px-Futamiokitama_jinja_Haiden.jpg?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="禊の聖地・二見興玉神社（伊勢湾の夫婦岩と冬の清らかな初日の出・満月）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-3">
                <div>
                  <span className="text-[11px] text-cyan-300 font-mono">Spot Spotlight</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    禊の聖地・二見興玉神社（伊勢湾の夫婦岩と冬の清らかな初日の出・満月）
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed mt-2">
                    二見興玉神社（ふたみおきたまじんじゃ）は、三重県伊勢市二見町江にある神社である。旧社格は村社で、現在は神社本庁の別表神社。境内の磯合にある夫婦岩（めおといわ）で知られる。 興玉大神（猿田彦大神）と宇迦御魂大神（ここでは神宮外宮の豊受大神の別名とされる）を祭神とする。
                  </p>
                </div>
                <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-700 flex items-center justify-between">
                  <span>出典：ウィキペディア（Wikipedia）公式情報</span>
                  <a
                    href="https://ja.wikipedia.org/wiki/二見興玉神社"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>詳細百科事典</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 厳選名宿一覧 */}
        <section className="max-w-4xl mx-auto px-4 space-y-6 mb-14">
          <div className="border-l-4 border-cyan-800 pl-3">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              二見浦・多気・伊勢 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 pt-0.5">
              楽天トラベルの最新実データより厳選。料理・温泉・立地に秀でた極上宿
            </p>
          </div>

          <div className="space-y-6">
            {/* 宿1: 上質の美味とおもてなし。オーシャンビューの宿　旅荘　海の蝶 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 1
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.47</span>
                    <span className="text-stone-400 text-xs font-normal">（2716件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    上質の美味とおもてなし。オーシャンビューの宿　旅荘　海の蝶
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    伊勢湾を見渡すオーシャンフロントの贅沢宿・プライベートビーチと極上松阪牛
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/40332/40332.jpg"
                      alt="上質の美味とおもてなし。オーシャンビューの宿　旅荘　海の蝶"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      二見浦の高台、緑豊かな岬に佇み、目の前に広がる伊勢湾の雄大なオーシャンパノラマを独占できる高級温泉旅館。全客室が海に面しており、朝には海から昇る清らかな朝日、夜には静かな潮騒とともに煌めく満月をプライベートな空間から堪能できます。敷地内にはプライベートビーチや散策路が広がり、旅情を満喫。夕食には三重県が誇る最高峰ブランド「松阪牛」の炭火焼きや、獲れたての伊勢海老・アワビなど伊勢志摩の至宝をふんだんに盛り込んだ豪華会席が並び、記念日や新春の特別な滞在に相応しい極上の時間をお届けします。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全室オーシャンビュー！伊勢湾の島々と水平線を一望する圧倒的な絶景ロケーション</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>広々とした展望大浴場と海風を感じる露天風呂で心身を解きほぐす至福</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>料理長が技を尽くす極上松阪牛ステーキと伊勢海老・鮑の贅沢会席</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「景色も料理も最高、細やかな配慮に感謝窓からの景色も最高でした!苦手や生ものを変更して頂いたり、朝食もみなさんで共有して頂いていて、本当にありがとうございました。料理も美味しく、お風呂も最高。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 15,400円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40332%2F40332.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿2: ホテルヴィソン */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 2
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.41</span>
                    <span className="text-stone-400 text-xs font-normal">（1154件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテルヴィソン
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    VISON敷地内の高台に佇む次世代リゾート・山並みを望むテラスと本草湯
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/182683/182683.jpg"
                      alt="ホテルヴィソン"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      多気の壮大な自然美と共生するように山の斜面にデザインされた、日本最大級リゾートVISONの中核を担うハイエンドリゾートホテル。すべての客室に広々としたテラスが備わり、木々の緑と澄んだ冬の風を感じながら、まるで自然の中に溶け込むような滞在が楽しめます。宿泊者は三重大学と共同研究された薬草温浴施設「本草湯」を自由に利用でき、冬の身体を内側から整える極上の癒やしを体験。夕食にはVISON内の多彩な一流レストランから好みのスタイルを選べ、美食とウェルネスが融合した新しい旅の歓びを満喫できます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>日本最大級の商業リゾートVISON内に宿泊！美食と体験を余すところなく満喫</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>多気の豊かな森と稜線を見晴らす広々としたプライベートテラス付き客室</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>宿泊者は有名薬草温泉「本草湯」を何度でも無料で利用可能な極上スパステイ</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「カーペットからか?どこからかもイマイチわからず。空気清浄機と消臭スプレーをかけ。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 20,350円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182683%2F182683.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿3: ジャズが流れる海辺のお宿　浜千代館 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 3
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>4.09</span>
                    <span className="text-stone-400 text-xs font-normal">（1226件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ジャズが流れる海辺のお宿　浜千代館
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    二見浦海岸目の前の心地よい海辺宿・ジャズの音色と貸切風呂の温もり
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/7563/7563.jpg"
                      alt="ジャズが流れる海辺のお宿　浜千代館"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      二見浦の海岸通り沿いに位置し、名所「夫婦岩」まで波打ち際の遊歩道を歩いてわずか5分という絶好のロケーションを誇る海辺の和風旅館。館内には心地よいジャズの名曲が静かに流れ、旅人の心を優しく解きほぐします。夫婦岩の初日の出を拝む早朝散拝にもこれ以上ない便利さ。趣の異なる貸切風呂も備わり、プライベートな湯浴みを楽しめます。夕食には伊勢湾で水揚げされた新鮮な海の幸や、柔らかくジューシーな松阪牛料理が並び、家庭的で温かなもてなしとともに心温まる冬の伊勢旅を演出してくれます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>夫婦岩まで海岸沿いの遊歩道を歩いて徒歩約5分！早朝参拝に最高の好立地</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>心地よいジャズの音楽が流れる洗練された和モダンの館内ロビーと癒やしの空間</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>伊勢湾の新鮮な地魚や伊勢海老・松阪牛を味わえる手作りの会席料理</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「食事は最高だが設備と騒音に難ありレトロな感じの雰囲気好きにはたまらない良い感じのお部屋でした。晩ご飯も伊勢海老、鮑、松阪牛と大満足でした。ただ、朝部屋でシャワーをしようと思ったら、6時までお湯が出。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 10,980円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7563%2F7563.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿4: ホテルキャッスルイン伊勢夫婦岩（旧：ホテルリゾートイン二見） */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 4
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>3.92</span>
                    <span className="text-stone-400 text-xs font-normal">（2285件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    ホテルキャッスルイン伊勢夫婦岩（旧：ホテルリゾートイン二見）
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    二見浦の海を望む展望風呂と無料貸切風呂・夫婦岩観光の好拠点
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/40176/40176.jpg"
                      alt="ホテルキャッスルイン伊勢夫婦岩（旧：ホテルリゾートイン二見）"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      二見浦の海岸近くに位置し、夫婦岩へのアクセスはもちろん、伊勢志摩スカイラインや国道への合流もスムーズな観光拠点ホテル。館内には伊勢湾を望む大浴場に加え、宿泊者が無料で利用できる趣の異なる複数の貸切風呂が用意されており、家族やカップルで気兼ねなく温まることができます。コストパフォーマンスに優れた宿泊プランが揃い、気軽に伊勢二見の冬景色と初詣を満喫したい旅行者に幅広く支持されています。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>夫婦岩・二見興玉神社まで徒歩圏内！伊勢神宮や鳥羽への周遊にも便利な立地</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>伊勢湾を見晴らす展望大浴場と趣の異なる複数の無料貸切風呂を完備</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>リーズナブルな価格で快適な客室空間と美味しい朝食バイキングを提供</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「貸し切り風呂と美味しい食事に大満足宿泊先を決めずに旅行。貸し切り風呂にひかれて急遽予約しました。貸し切り風呂はキレイだし、ウェルカムドリンクや貸し出しゲーム。新聞も見れてよかったです。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 4,070円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40176%2F40176.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* 宿5: 伊勢志摩国立公園・二見浦　二見温泉　蘇民の湯　ホテル清海 */}
            <div className="bg-white rounded-2xl border border-stone-200/80 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-100 pb-3">
                  <span className="bg-cyan-800 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    厳選名宿 5
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>3.44</span>
                    <span className="text-stone-400 text-xs font-normal">（682件）</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-stone-900 leading-snug">
                    伊勢志摩国立公園・二見浦　二見温泉　蘇民の湯　ホテル清海
                  </h3>
                  <p className="text-xs sm:text-sm text-cyan-800 font-medium mt-1">
                    二見浦随一の歴史ある名湯「蘇民の湯」・伊勢湾一望の展望露天風呂
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                  <div className="md:col-span-5 relative h-48 sm:h-52 rounded-xl overflow-hidden bg-stone-100">
                    <img
                      src="https://img.travel.rakuten.co.jp/share/HOTEL/7848/7848.jpg"
                      alt="伊勢志摩国立公園・二見浦　二見温泉　蘇民の湯　ホテル清海"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      二見浦の海沿いに建ち、古くから伝わる蘇民将来の伝説にちなんだ自家源泉天然温泉「蘇民の湯」を誇る老舗温泉ホテル。窓の外一面に広がる伊勢湾の大海原を眺めながら入る展望露天風呂は格別の爽快感で、塩分を含む良質な泉質が湯冷めを防ぎ、冬の身体をポカポカに保ちます。夕食には伊勢志摩の荒波で育った新鮮な地魚の舟盛りや、冬ならではの海鮮鍋会席が振る舞われ、雄大な海の景色と名湯の温もりに包まれる旅情豊かなひとときを過ごせます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>自家源泉の天然温泉「蘇民の湯」！冷えた身体を芯から温める薬効豊かな名湯</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全室オーシャンビュー！客室や露天風呂から伊勢湾の大海原を一望</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>伊勢志摩の豊かな海の幸と季節の鍋料理を堪能する心温まる海鮮会席</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-stone-700">
                  <span className="font-bold text-amber-900 mr-1">宿泊者の声：</span>
                  <span>{"「食事内容が期待外れで説明も不十分夕食は伊勢エビ鍋の他ビュッフェになっていたので楽しみにしていましたが、天ぷらも決められた3種類のみ。その他は茶碗蒸し、お新香、ババロアのみで食事処の看板とも内容は異。」"}</span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-stone-100">
                  <div className="text-xs text-stone-500">
                    <span className="block text-[11px] text-stone-400">参考料金（1名）</span>
                    <span className="text-stone-800 font-bold text-sm sm:text-base">税込 8,800円〜</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7848%2F7848.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ふるさと納税セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent rounded-2xl p-6 sm:p-8 border border-amber-500/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                Furusato Tax
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                楽天ふるさと納税で実質2,000円！お得に泊まる賢い旅行術
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-xl leading-relaxed">
                旅行先の自治体へ寄付することで、最大30%相当の楽天トラベル宿泊クーポンが返礼品として付与されます。予約済みの日程にも「あとから割引」で適用可能！
              </p>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl flex items-center gap-2 flex-shrink-0 transition-colors shadow-md shadow-amber-600/20"
            >
              <span>対象宿・クーポンを見る</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* FAQセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-14">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                冬の二見浦・多気・伊勢旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-3">
            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>二見興玉神社の夫婦岩で「初日の出」を拝むためのおすすめスポットと時間は？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                元旦の日の出時刻は午前6時55分〜7時00分頃です。夫婦岩の正面にある二見興玉神社境内や参道海岸沿いが定番のビュースポットです。冬期は太陽が夫婦岩の右側（南寄り）の水平線から昇り、茜色の朝焼けと夫婦岩のシルエットが美しく調和します。初日の出の時間帯は周辺駐車場が大変混雑するため、近隣の宿に宿泊して徒歩で向かうのが最も確実でおすすめです。
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>「VISON（ヴィソン）」を1日で効率よく楽しむためのポイントは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                敷地が非常に広大なため、到着後はまず「マルシェ ヴィソン」で新鮮な地元食材やスイーツを巡り、午後は「サンセバスチャン通り」でバスク地方のバル文化を体験。夕方に「本草湯」で薬草温泉にゆっくり浸かり、夜は「和ヴィソン」で松阪牛や伊勢志摩の海鮮ディナーを味わう流れがスムーズです。敷地内巡回モビリティやバスも運行されています。
              </p>
            </div>

            <div className="bg-white rounded-xl p-5 border border-stone-200/80 space-y-2">
              <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-2">
                <span className="text-cyan-800 font-black">Q.</span>
                <span>「浜参宮」として二見浦にお参りしてから伊勢神宮へ向かう正式なルートは？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                古来の習わしでは、まず二見興玉神社でお祓い（無垢塩祓）を受け、身を清めてから伊勢神宮外宮、そして内宮へと参拝するのが正式な参宮ルートとされています。二見浦から伊勢神宮（外宮・内宮）へは車で15〜20分程度と近いため、朝一番に二見浦でお参りしてから伊勢神宮へ向かう行程が大変おすすめです。
              </p>
            </div>
            </div>
          </div>
        </section>

        {/* 内部リンク・関連回遊ナビゲーション */}
        <section className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-6 border border-stone-200 space-y-4">
            <h3 className="text-sm font-bold text-stone-900 border-b border-stone-100 pb-2">
              あわせて読みたい関連旅行ガイド
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <Link
                href="/prefectures/mie"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>三重県のおすすめ温泉宿・ホテル一覧</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/features"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>全国の季節・目的別厳選特集一覧</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/furusato-tax-luxury-hotspring-ryokan-stay"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>実質2,000円で泊まる高級温泉旅館ガイド</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
              <Link
                href="/furusato-tax-local-gourmet-inn-stay"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>ご当地グルメを堪能する全国美食旅特集</span>
                <ChevronRight className="w-4 h-4 text-stone-400" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
