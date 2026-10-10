import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  ExternalLink,
  MapPin,
  Calendar,
  Sparkles,
  Star,
  CheckCircle2,
  HelpCircle
} from "lucide-react";

export const metadata: Metadata = {
  title: "【光の道夕景と日本一の大注連縄・宮地嶽神社新春初詣】2026-2027年冬の福岡・福津＆玄界灘！天然とらふぐと博多和牛名宿5選 ｜ 日本全国・旅宿クラウド",
  description: "嵐のCMで話題となった「光の道」と日本一の大注連縄を誇る開運神社「宮地嶽神社」新春初詣！冬の澄み渡る玄界灘の夕景、冬に旬を迎える極上「天然とらふぐ」や活ヤリイカ、博多和牛の贅沢会席に舌鼓を打つ冬の厳選名宿5選。",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-fukuoka-fukutsu-miyajidake-shrine-hatsumode-hikari-genkainada-stay",
  },
  openGraph: {
    title: "【光の道夕景と日本一の大注連縄・宮地嶽神社新春初詣】2026-2027年冬の福岡・福津＆玄界灘！天然とらふぐと博多和牛名宿5選",
    description: "嵐のCMで話題となった「光の道」と日本一の大注連縄を誇る開運神社「宮地嶽神社」新春初詣！冬の澄み渡る玄界灘の夕景、冬に旬を迎える極上「天然とらふぐ」や活ヤリイカ、博多和牛の贅沢会席に舌鼓を打つ冬の厳選名宿5選。",
    url: "https://croud-travel.pages.dev/winter-fukuoka-fukutsu-miyajidake-shrine-hatsumode-hikari-genkainada-stay",
    siteName: "日本全国・旅宿クラウド",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "https://img.travel.rakuten.co.jp/share/HOTEL/139901/139901.jpg",
        width: 1200,
        height: 630,
        alt: "【光の道夕景と日本一の大注連縄・宮地嶽神社新春初詣】2026-2027年冬の福岡・福津＆玄界灘！天然とらふぐと博多和牛名宿5選",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "【光の道夕景と日本一の大注連縄・宮地嶽神社新春初詣】2026-2027年冬の福岡・福津＆玄界灘！天然とらふぐと博多和牛名宿5選",
    description: "嵐のCMで話題となった「光の道」と日本一の大注連縄を誇る開運神社「宮地嶽神社」新春初詣！冬の澄み渡る玄界灘の夕景、冬に旬を迎える極上「天然とらふぐ」や活ヤリイカ、博多和牛の贅沢会席に舌鼓を打つ冬の厳選名宿5選。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/139901/139901.jpg"],
  },
};

export const dynamic = "force-static";

export default function FeaturePage() {
  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "宮地嶽神社の新春初詣の混雑状況とおすすめの参拝時間帯は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "正月三が日（特に元旦から1月3日の日中）は毎年200万人以上が訪れるため、参道や周辺道路が大変混雑します。混雑を避けてゆっくり参拝したい場合は、早朝（朝8時前）または夕方16時以降の参拝がおすすめです。またJR福間駅からの臨時シャトルバスや公共交通機関を利用すると渋滞を回避できます。"
      }
    },
    {
      "@type": "Question",
      "name": "玄界灘の天然とらふぐ料理は冬のどの時期が最も美味しいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "玄界灘のとらふぐは11月から2月にかけてが最盛期です。海水温が下がることで身が締まり、旨味成分が凝縮されます。てっさ（刺身）、てっちり（ふぐ鍋）、唐揚げ、そして香ばしいヒレ酒まで、フルコースで味わうのが冬の醍醐味です。"
      }
    },
    {
      "@type": "Question",
      "name": "宮地嶽神社と宗像大社を1日で両方巡ることはできますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、両社間の距離は約10km、車やタクシーで約15分程度ですので1日で十分に両参りが可能です。午前中に宗像大社で世界遺産の神聖な空気に触れ、午後に宮地嶽神社で大注連縄と夕景を鑑賞するルートが冬の開運ドライブとして非常に人気があります。"
      }
    }
  ]
};
  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
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
      "name": "福岡県の宿",
      "item": "https://croud-travel.pages.dev/prefectures/fukuoka"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "【光の道夕景と日本一の大注連縄・宮地嶽神社新春初詣】2026-2027年冬の福岡・福津＆玄界灘！天然とらふぐと博多和牛名宿5選",
      "item": "https://croud-travel.pages.dev/winter-fukuoka-fukutsu-miyajidake-shrine-hatsumode-hikari-genkainada-stay"
    }
  ]
};
  const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "開運の巨刹・宮地嶽神社（日本一の大注連縄と夕日絶景「光の道」）",
  "description": "宮地嶽神社（みやじだけじんじゃ）は、福岡県福津市にある神社。年に2度、「光の道」とよばれる境内石段から玄界灘に浮かぶ相島まで真っすぐ伸びる参道の延長線上に夕日が沈むことで知られる。",
  "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Haiden_of_Miyajidake_Shrine.JPG/1280px-Haiden_of_Miyajidake_Shrine.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />

      <main className="min-h-screen bg-stone-50 pb-20">
        {/* パンくずリスト */}
        <nav
          aria-label="Breadcrumb"
          className="max-w-5xl mx-auto px-4 py-4 text-xs text-stone-500 flex items-center gap-1.5 flex-wrap"
        >
          <Link href="/" className="hover:text-stone-900 transition-colors">
            ホーム
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <Link href="/features" className="hover:text-stone-900 transition-colors">
            特集一覧
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <Link
            href="/prefectures/fukuoka"
            className="hover:text-stone-900 transition-colors"
          >
            福岡県
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-xs sm:max-w-md">
            【光の道夕景と日本一の大注連縄・宮地嶽神社新春初詣】2026-2027年冬の福岡・福津＆玄界灘！天然とらふぐと博多和牛名宿5選
          </span>
        </nav>

        {/* ヒーローセクション */}
        <header className="relative bg-gradient-to-b from-stone-900 to-stone-800 text-white py-12 md:py-20 mb-10">
          <div className="max-w-4xl mx-auto px-4 space-y-4">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2.5 py-0.5 rounded-full font-semibold">
                2026-2027年 冬季厳選特集
              </span>
              <span className="bg-white/10 text-stone-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                福津・宗像・玄界灘（福岡県）
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              【光の道夕景と日本一の大注連縄・宮地嶽神社新春初詣】2026-2027年冬の福岡・福津＆玄界灘！天然とらふぐと博多和牛名宿5選
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl pt-2">
              福岡市街と北九州市の中間に位置し、玄界灘の白波と豊かな松林が広がる福岡県福津市および宗像市。ここに鎮座する「宮地嶽神社」は、約1700年の歴史を誇り、息長足姫命（神功皇后）を祀る全国の宮地嶽神社の総本宮です。境内正面に掲げられた大注連縄は直径2.6m・長さ11m・重さ3tにおよび、名実ともに日本一の威容。毎年10月下旬と2月下旬には神社石段から玄界灘の相島へと沈む夕日が一直線の黄金の参道を照らし出す奇跡の絶景「光の道」で世界的な脚光を浴びましたが、11月から1月の冬期も、凛とした澄んだ冬空に夕日が沈む感動的な夕景と、毎年200万人以上の参拝者が押し寄せる九州屈指の新春開運初詣で賑わいます。さらに、玄界灘の荒波に揉まれて身が締まり、冬に脂の乗りが最高潮を迎える「天然とらふぐ」の薄造り（てっさ）やてっちり鍋、透き通る活ヤリイカ、福岡の銘柄牛「博多和牛」や地元宗像の「むなかた牛」の極上会席。海と祈りの聖地で、身体を温める展望風呂や離れの隠れ家に憩う極上の冬旅をお届けします。
            </p>
          </div>
        </header>

        {/* なぜこの冬訪れるべきか */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                この冬、福津・宗像・玄界灘を訪れるべき3つの理由
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    日本一の大注連縄と新春開運初詣！200万人が集う「宮地嶽神社」の荘厳な祈り
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  息長足姫命（神功皇后）を主祭神とし、開運・商売繁盛の神として崇敬される宮地嶽神社。直径2.6m・長さ11m・重さ3tの日本一の大注連縄は圧巻の迫力。新春には九州各地から200万人を超える参拝者が訪れ、境内奥の「奥の院八社巡り」でさらなるご利益を授かる冬の巡礼が人気です。
                </p>
              </div>
            

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    冬の澄み渡る玄界灘と夕暮れの「光の道」参道が生み出す息を呑む夕景
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  福津の海岸線から宮地嶽神社へと一直線に伸びる参道。冬期は空気が澄み渡り、夕暮れ時には玄界灘に浮かぶ島影と海面が茜色から紫紺へと染まりゆくドラマチックなマジックアワーを体感できます。冬の海岸散策と神社参拝が織りなす美しい旅情が心を浄化します。
                </p>
              </div>
            

              <div className="bg-white rounded-2xl p-5 md:p-6 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    冬に極まる玄界灘の至宝「天然とらふぐ」と活ヤリイカ・極上博多和牛の饗宴
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-stone-600 leading-relaxed pl-8">
                  冬の玄界灘はまさに海の幸の宝庫。荒波で身が引き締まった天然とらふぐの繊細な旨味とコリコリとした歯ごたえ、甘みあふれる活ヤリイカ、そして柔らかな肉質と芳醇なサシを誇る博多和牛のすき焼き・ステーキなど、美食王国・福岡の粋を集めた冬の晩餐が楽しめます。
                </p>
              </div>
            
            </div>
          </div>
        </section>

        {/* 現地アクセス・服装ガイド */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-700" />
                <h2 className="text-base sm:text-lg font-bold text-stone-900">
                  冬の現地アクセス・気候・おすすめの服装
                </h2>
              </div>
            </div>
            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed whitespace-pre-line space-y-2">
              【エリアへのアクセス】
・電車・JR：JR鹿児島本線「福間駅」下車。福間駅みやじ口より西鉄バス「宮地嶽神社前」行きで約5〜10分（徒歩約25分）。博多駅から福間駅まで快速で約25分、小倉駅から快速で約40分とアクセス至便。
・車・マイカー：九州自動車道「古賀IC」または「若宮IC」より国道3号・県道経由で宮地嶽神社まで約15〜20分。福岡空港・博多駅周辺から車で約45分。
・宗像大社・玄海エリアへの周遊：宮地嶽神社から世界遺産「宗像大社辺津宮」へは車で約15分。海岸沿いの宿へも車で15〜20分で移動可能。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜1月下旬（冬の玄界灘の夕景、新春開運初詣、とらふぐ・寒ブリの最盛期）。
・気温の目安：玄界灘沿岸部は対馬暖流の影響を受けるものの、冬期は北西の季節風が強く吹き付け、体感温度は5℃前後まで冷え込みます。日中は8〜12℃前後。
・服装のポイント：海岸沿いや神社境内は海風が吹き抜けるため、防風性の高いダウンジャケットやコート、マフラー、手袋が必須。奥の院巡り（八社巡り）や参道の石段を歩くため、歩きやすいスニーカーでお出かけください。
            </div>
          </div>
        </section>

        {/* Wikipedia 公式アーカイブ連携スポット */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-900 text-white rounded-2xl overflow-hidden shadow-lg border border-stone-800">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              <div className="md:col-span-6 relative min-h-[240px]">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Haiden_of_Miyajidake_Shrine.JPG/1280px-Haiden_of_Miyajidake_Shrine.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="開運の巨刹・宮地嶽神社（日本一の大注連縄と夕日絶景「光の道」）"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-cyan-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  名所アーカイブ
                </div>
              </div>
              <div className="md:col-span-6 p-6 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="text-xs text-cyan-400 font-semibold">
                    近隣の主要観光地
                  </div>
                  <h3 className="text-lg md:text-xl font-bold">
                    開運の巨刹・宮地嶽神社（日本一の大注連縄と夕日絶景「光の道」）
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    宮地嶽神社（みやじだけじんじゃ）は、福岡県福津市にある神社。年に2度、「光の道」とよばれる境内石段から玄界灘に浮かぶ相島まで真っすぐ伸びる参道の延長線上に夕日が沈むことで知られる。
                  </p>
                </div>
                <div className="text-[11px] text-stone-400 pt-2 border-t border-stone-800 flex items-center justify-between">
                  <span>出典：ウィキペディア（Wikipedia）</span>
                  <a
                    href="https://ja.wikipedia.org/wiki/宮地嶽神社"
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
              福津・宗像・玄界灘 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 pt-0.5">
              楽天トラベルの最新実データより厳選。料理・温泉・眺望に秀でた極上宿
            </p>
          </div>

          <div className="space-y-6">

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/139901/139901.jpg"
                    alt="御宿　はなわらび"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第1位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        約三千坪の日本庭園に佇む数寄屋造りの隠れ家・玄界灘の海の幸と美肌湯
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.69</span>
                        <span className="text-stone-400 font-normal">（198件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139901%2F139901.html" target="_blank" rel="noopener noreferrer">
                        御宿　はなわらび
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      宗像の豊かな自然に包まれた約3,000坪もの日本庭園の中に、静かに佇む数寄屋造りの高級隠れ家旅館。四季折々の植栽が手入れされた庭園を眺めながら過ごす客室は、都会の喧騒を完全に忘れさせてくれる極上の癒やし空間です。自慢の料理は、毎朝玄界灘から水揚げされるピチピチの活魚や冬の天然とらふぐ、甘みが際立つイカの姿造りなど、素材の力を最大限に引き出した華やかな日本会席。大浴場からは木々の緑を眺められ、新春の初詣帰りに心静かに寛ぐ大人の冬籠もりに相応しい名宿です。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>約3,000坪の広大な敷地にわずか数室の贅沢な離れ和室</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>玄界灘直送のとらふぐ・ヤリイカ・地魚を贅沢に盛り込んだ極上会席</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>庭園の緑を望む大浴場と季節の薬湯で心身を解きほぐす静寂のひととき</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「スタッフの気配りと食事が最高なお宿こちらのお宿は、とにかくスタッフさんがみなさん感じが良く、気配りができる方ばかりで感動しました。愛犬と一緒に泊まったのですが、愛犬のことも気にかけてくれ、お声…。」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥14,300〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F139901%2F139901.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm shadow-amber-600/20"
                    >
                      <span>空室確認・予約</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/165802/165802.jpg"
                    alt="ぶどうの樹ふくつ海岸通り　光の海ホテル＆リゾート　波の音（旧：グランピング福岡）"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第2位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        福津海岸通り目の前！オーシャンフロントの贅沢リゾートと極上鮨ディナー
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.59</span>
                        <span className="text-stone-400 font-normal">（39件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165802%2F165802.html" target="_blank" rel="noopener noreferrer">
                        ぶどうの樹ふくつ海岸通り　光の海ホテル＆リゾート　波の音（旧：グランピング福岡）
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      福津海岸沿いに位置し、目の前に果てしなく広がる玄界灘の絶景を望むラグジュアリーなビーチリゾートホテル。すべての客室が海に面しており、夕暮れ時には空と海が茜色に染まりゆく感動的なサンセットをプライベートなテラスから一望できます。ディナーは「ぶどうの樹」がプロデュースする本格鮨割烹にて、近海で獲れた冬のとらふぐや脂の乗った寒ブリ、極上の博多和牛を贅沢に使用した創作コースを堪能。潮騒をBGMに眠りにつく、上質でロマンチックな冬のリゾートステイが叶います。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>全室オーシャンフロント！テラスから玄界灘の絶景夕日と潮騒を独占</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>ぶどうの樹直営の鮨割烹で味わう冬の極上とらふぐと玄界灘の鮮魚</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>波の音に包まれる上質なデザイナーズ空間と温かなホスピタリティ</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「砂遊び 貝拾い ブランコとても楽しんでいました。上がり口に水道があり足やおも。」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥9,900〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165802%2F165802.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm shadow-amber-600/20"
                    >
                      <span>空室確認・予約</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/172253/172253.jpg"
                    alt="お寺で過ごすやすらぎのひととき　明石寺　大日屋旅館"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第3位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        歴史ある寺院宿坊の温もり・静寂の中で心を整える癒やしの和モダン宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.56</span>
                        <span className="text-stone-400 font-normal">（25件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172253%2F172253.html" target="_blank" rel="noopener noreferrer">
                        お寺で過ごすやすらぎのひととき　明石寺　大日屋旅館
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      宗像の歴史ある名刹・明石寺の境内に佇み、まるでお寺の離れに泊まるかのような静謐な時間を過ごせる人気の温泉旅館。日常の喧騒から離れ、澄んだ空気の中で自分自身と向き合う特別なひとときを提供します。夕食には宗像の豊かな海と大地の恵みをふんだんに使った手作りの会席料理が並び、素材本来の滋味深い味わいが心と身体に優しく染み渡ります。朝には静かな境内を散策し、宮地嶽神社や宗像大社への新春参拝と合わせることで、心身ともに清められる極上の開運旅が実現します。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>弘法大師ゆかりの寺院・明石寺に隣接する心洗われる宿坊ステイ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>地元の旬野菜や玄界灘の海の幸を丁寧に仕立てた手作り精進・和食会席</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>清潔で落ち着きのある和空間と温かいおもてなしでリピーター多数</span></li>
                    </ul>
                  </div>

                  

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥10,550〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172253%2F172253.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm shadow-amber-600/20"
                    >
                      <span>空室確認・予約</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/109125/109125.jpg"
                    alt="玄海旅館"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第4位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        玄界灘を一望する老舗料理旅館・本場鐘崎とらふぐと活魚料理の最高峰
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.39</span>
                        <span className="text-stone-400 font-normal">（97件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109125%2F109125.html" target="_blank" rel="noopener noreferrer">
                        玄海旅館
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      全国屈指の水揚げを誇る鐘崎漁港のすぐ近く、玄界灘の荒波を見下ろす高台に建つ老舗料理旅館。宿の最大の誇りは、長年培われた確かな目利きと職人技で振る舞われる冬の魚介料理。特に冬期限定の「鐘崎天然とらふぐ会席」は、大皿に美しく引かれた透き通るてっさ、ふっくら香ばしい唐揚げ、旨味たっぷりのてっちり鍋と雑炊まで、本場の味を心ゆくまで堪能できます。海を見渡す展望風呂で温まった後は、波音を聞きながら贅沢な美食の余韻に浸れます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>客室から雄大な玄界灘をパノラマで望むオーシャンビューの好立地</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>鐘崎漁港直送！冬の王様「天然とらふぐ」のフルコースと地魚づくし</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>海を眺める展望大浴場と創業以来受け継がれる老舗の真心</span></li>
                    </ul>
                  </div>

                  
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「夕食は豪華で部屋は木の香りが心地よい夕食は素晴らしかったです少食の方は食べきれない?部屋は新しく、木の香りがしました^o^本館からお風呂や部屋は屋外を歩くので、雨除けがあると尚いい… つづきはこち。」"}</p>
                </div>
            

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥10,500〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109125%2F109125.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm shadow-amber-600/20"
                    >
                      <span>空室確認・予約</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            

            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/106165/106165.jpg"
                    alt="桝屋旅館"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
                    第5位
                  </div>
                </div>
                <div className="md:col-span-7 p-5 md:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-bold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-100">
                        神湊港すぐの温かな港宿・世界遺産大島への拠点と気取らない海鮮美食
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.29</span>
                        <span className="text-stone-400 font-normal">（69件）</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 hover:text-cyan-800 transition-colors">
                      <a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106165%2F106165.html" target="_blank" rel="noopener noreferrer">
                        桝屋旅館
                      </a>
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      世界遺産「神宿る島」宗像・沖ノ島と関連遺産群の玄関口である神湊港のすぐそばに佇む、気取らない温かな港町の和風旅館。宮地嶽神社や宗像大社への参拝はもちろん、大島への渡航拠点としても抜群のロケーションを誇ります。家族経営ならではの細やかな気配りと清潔な客室が旅人の心をほぐします。夕食にはその日に水揚げされたピチピチの近海魚のお造りや煮付け、冬の鍋料理が並び、港町ならではの圧倒的な鮮度とボリュームで大満足の滞在を約束してくれます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>世界遺産・宗像大社中津宮のある大島行きフェリー乗り場（神湊港）至近</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>港町ならではの鮮度抜群の地魚刺身盛り合わせと郷土料理</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>アットホームで心温まるもてなしとコストパフォーマンス抜群の宿泊プラン</span></li>
                    </ul>
                  </div>

                  

                  <div className="pt-2 border-t border-stone-100 flex items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-sm md:text-base font-extrabold text-stone-900">¥7,200〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106165%2F106165.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition-colors shadow-sm shadow-amber-600/20"
                    >
                      <span>空室確認・予約</span>
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
                冬の福津・宗像・玄界灘旅行 よくある質問（FAQ）
              </h2>
            </div>
            <div className="space-y-3">

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    宮地嶽神社の新春初詣の混雑状況とおすすめの参拝時間帯は？
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    正月三が日（特に元旦から1月3日の日中）は毎年200万人以上が訪れるため、参道や周辺道路が大変混雑します。混雑を避けてゆっくり参拝したい場合は、早朝（朝8時前）または夕方16時以降の参拝がおすすめです。またJR福間駅からの臨時シャトルバスや公共交通機関を利用すると渋滞を回避できます。
                  </p>
                </div>
              </div>
            

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    玄界灘の天然とらふぐ料理は冬のどの時期が最も美味しいですか？
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    玄界灘のとらふぐは11月から2月にかけてが最盛期です。海水温が下がることで身が締まり、旨味成分が凝縮されます。てっさ（刺身）、てっちり（ふぐ鍋）、唐揚げ、そして香ばしいヒレ酒まで、フルコースで味わうのが冬の醍醐味です。
                  </p>
                </div>
              </div>
            

              <div className="bg-white rounded-2xl p-5 border border-stone-200/80 shadow-sm space-y-2">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-cyan-800 text-sm flex-shrink-0 mt-0.5">Q.</span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base">
                    宮地嶽神社と宗像大社を1日で両方巡ることはできますか？
                  </h3>
                </div>
                <div className="flex items-start gap-2.5 pl-6">
                  <span className="font-bold text-amber-600 text-sm flex-shrink-0 mt-0.5">A.</span>
                  <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
                    はい、両社間の距離は約10km、車やタクシーで約15分程度ですので1日で十分に両参りが可能です。午前中に宗像大社で世界遺産の神聖な空気に触れ、午後に宮地嶽神社で大注連縄と夕景を鑑賞するルートが冬の開運ドライブとして非常に人気があります。
                  </p>
                </div>
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
                href="/prefectures/fukuoka"
                className="p-3 rounded-xl bg-stone-50 hover:bg-cyan-50 hover:text-cyan-800 transition-colors flex items-center justify-between font-medium text-stone-700 border border-stone-200/60"
              >
                <span>福岡県のおすすめ温泉宿・ホテル一覧</span>
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
