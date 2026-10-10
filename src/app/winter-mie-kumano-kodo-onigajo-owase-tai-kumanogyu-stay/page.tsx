import React from "react";
import Link from "next/link";
import { Metadata } from "next";
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
  title: "【世界遺産熊野古道と鬼ヶ城の絶景】2026-2027年冬の三重・熊野＆尾鷲！尾鷲真鯛と熊野牛名宿5選 ｜ 日本全国・旅宿クラウド",
  description: "冬こそ歩き頃を迎える世界遺産「熊野古道伊勢路」と奇岩怪石の景勝「鬼ヶ城」！冬に旬を迎える極上「尾鷲真鯛」や幻の銘柄和牛「熊野牛」、名湯・湯ノ口温泉に寛ぎ心洗われる新春の紀伊半島おすすめ名宿5選。",
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-mie-kumano-kodo-onigajo-owase-tai-kumanogyu-stay",
  },
  openGraph: {
    title: "【世界遺産熊野古道と鬼ヶ城の絶景】2026-2027年冬の三重・熊野＆尾鷲！尾鷲真鯛と熊野牛名宿5選",
    description: "冬こそ歩き頃を迎える世界遺産「熊野古道伊勢路」と奇岩怪石の景勝「鬼ヶ城」！冬に旬を迎える極上「尾鷲真鯛」や幻の銘柄和牛「熊野牛」、名湯・湯ノ口温泉に寛ぎ心洗われる新春の紀伊半島おすすめ名宿5選。",
    url: "https://croud-travel.pages.dev/winter-mie-kumano-kodo-onigajo-owase-tai-kumanogyu-stay",
    siteName: "日本全国・旅宿クラウド",
    locale: "ja_JP",
    type: "article",
    images: [
      {
        url: "https://img.travel.rakuten.co.jp/share/HOTEL/79395/79395.jpg",
        width: 1200,
        height: 630,
        alt: "【世界遺産熊野古道と鬼ヶ城の絶景】2026-2027年冬の三重・熊野＆尾鷲！尾鷲真鯛と熊野牛名宿5選",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "【世界遺産熊野古道と鬼ヶ城の絶景】2026-2027年冬の三重・熊野＆尾鷲！尾鷲真鯛と熊野牛名宿5選",
    description: "冬こそ歩き頃を迎える世界遺産「熊野古道伊勢路」と奇岩怪石の景勝「鬼ヶ城」！冬に旬を迎える極上「尾鷲真鯛」や幻の銘柄和牛「熊野牛」、名湯・湯ノ口温泉に寛ぎ心洗われる新春の紀伊半島おすすめ名宿5選。",
    images: ["https://img.travel.rakuten.co.jp/share/HOTEL/79395/79395.jpg"],
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
      "name": "熊野古道伊勢路（馬越峠や松本峠）は冬でも積雪なく歩けますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。南紀・東紀州の沿岸部は黒潮の影響で真冬でも積雪することは極めて稀です。11月から1月は天候が安定し雨量も年間で最も少ないため、快適にトレッキングを楽しめます。ただし日陰の石畳は露で滑りやすい場合があるため、しっかりした登山靴やトレッキングシューズでお歩きください。"
      }
    },
    {
      "@type": "Question",
      "name": "名物「尾鷲真鯛」や「熊野牛」を一番美味しく味わえる時期はいつですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "尾鷲真鯛は海水温が下がる11月から2月にかけて脂が乗り、身が引き締まるため冬がベストシーズンです。熊野牛は通年で安定した品質ですが、冬は温かいすき焼き鍋やしゃぶしゃぶ、ステーキ会席として提供されるプランが多く、温泉後の身体に染み渡る極上の味わいとなります。"
      }
    },
    {
      "@type": "Question",
      "name": "公共交通機関（電車・バス）だけでも熊野古道や鬼ヶ城を巡れますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "十分に巡ることが可能です。JR熊野市駅から鬼ヶ城センターへは路線バスで約5分（徒歩でも約25分）。松本峠や馬越峠の登山口へも路線バスが運行しています。また瀞流荘や湯ノ口温泉へはJR熊野市駅からの送迎バスや路線バスが運行されており、山間部の秘湯へもアクセス可能です。"
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
      "name": "三重県の宿",
      "item": "https://croud-travel.pages.dev/prefectures/mie"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "【世界遺産熊野古道と鬼ヶ城の絶景】2026-2027年冬の三重・熊野＆尾鷲！尾鷲真鯛と熊野牛名宿5選",
      "item": "https://croud-travel.pages.dev/winter-mie-kumano-kodo-onigajo-owase-tai-kumanogyu-stay"
    }
  ]
};
  const touristAttractionSchema = {
  "@context": "https://schema.org",
  "@type": "TouristAttraction",
  "name": "世界遺産・鬼ヶ城（荒波が削り出した奇岩断崖と熊野古道）",
  "description": "鬼ヶ城（おにがじょう）は、三重県熊野市木本町にある海岸景勝地。国の名勝（「熊野の鬼ケ城 附 獅子巖」〈くまののおにがじょう つけたり ししいわ〉）の一部である。 熊野灘の荒波に削られた大小無数の海食洞が、地震による隆起によって階段上に並び、熊野灘に面して約1.2km続いている。志摩半島から続くリアス式海岸の最南端で、これより南はなだらかな砂浜の海岸（七里御浜）へと変わる。東口から山頂へ通じるハイキングコースには桜が植えられており、春には4種類の桜が次から次へと開花して長期間花…",
  "image": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Oniga-jo01.JPG/1280px-Oniga-jo01.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
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
            href="/prefectures/mie"
            className="hover:text-stone-900 transition-colors"
          >
            三重県
          </Link>
          <ChevronRight className="w-3 h-3 text-stone-400" />
          <span className="text-stone-800 font-medium truncate max-w-xs sm:max-w-md">
            【世界遺産熊野古道と鬼ヶ城の絶景】2026-2027年冬の三重・熊野＆尾鷲！尾鷲真鯛と熊野牛名宿5選
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
                熊野・尾鷲・熊野古道（三重県）
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight">
              【世界遺産熊野古道と鬼ヶ城の絶景】2026-2027年冬の三重・熊野＆尾鷲！尾鷲真鯛と熊野牛名宿5選
            </h1>

            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-3xl pt-2">
              紀伊半島の南東部に位置し、紺碧の熊野灘と峻険な紀伊山地に抱かれた三重県熊野市および尾鷲市。世界遺産「紀伊山地の霊場と参詣道」の重要な一角を担う熊野古道伊勢路（馬越峠や松本峠）は、真夏の酷暑や湿気とは無縁の11月から1月の冬こそが、温暖な黒潮気候に恵まれて最も快適に踏破できる黄金期を迎えます。熊野灘の荒波が削り出した国の名勝「鬼ヶ城」や巨岩「獅子岩」は、冬の澄み渡る青空と白波のコントラストで一年で最も劇的な景観を現出。そして何より旅人を惹きつけるのが、寒さとともに身が引き締まり上質な脂を蓄える「尾鷲真鯛」や近海寒ブリ、そして三重が誇る幻の黒毛和牛「熊野牛」のすき焼き・ステーキです。太古の修験と祈りの歴史が息づく山懐で、湯ノ口温泉や入鹿温泉の源泉に身を委ね、心洗われる新春の開運旅をご案内します。
            </p>
          </div>
        </header>

        {/* なぜこの冬訪れるべきか */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-700" />
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                この冬、熊野・尾鷲・熊野古道を訪れるべき3つの理由
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 01</span>
              <h3 className="font-bold text-stone-900 text-base">黒潮の恩恵で真冬も温暖！世界遺産「熊野古道伊勢路」を快適に歩くベストシーズン</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">日本海側の豪雪とは対照的に、冬の東紀州は日中10〜15℃前後と極めて過ごしやすい気候。馬越峠の苔むす美しい石畳や、松本峠から望む七里御浜の雄大な海岸線パノラマを、汗をかかずに澄んだ大気の中でじっくりと歩き抜くことができます。</p>
            </div>
            

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 02</span>
              <h3 className="font-bold text-stone-900 text-base">奇岩怪石の断崖美「鬼ヶ城」と七里御浜に轟く太平洋の白波絶景</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">地震の隆起と熊野灘の怒涛が創り出した約1.2kmの海蝕洞窟群・鬼ヶ城。冬の強い季節風によって打ち寄せる迫力満点の白波と、どこまでも青い冬空の対比は息を呑む迫力。隣接する獅子岩や花の窟神社での新春祈願も格別の清々しさです。</p>
            </div>
            

            <div className="bg-white rounded-xl p-5 border border-stone-200 space-y-2">
              <span className="text-xs font-bold text-cyan-700 tracking-wider">REASON 03</span>
              <h3 className="font-bold text-stone-900 text-base">冬に極まる「尾鷲真鯛」の濃厚な旨味と幻の銘柄黒毛和牛「熊野牛」の饗宴</h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">黒潮の潮流で揉まれた尾鷲真鯛は、冬に最も脂が乗り上品な甘みが際立ちます。お造りや鯛しゃぶ、郷土の鯛飯は至高の味わい。さらに年間出荷数が限られる希少なブランド牛「熊野牛」の芳醇な肉質を合わせ、美食の限りを尽くす冬の晩餐が叶います。</p>
            </div>
            
            </div>
          </div>
        </section>

        {/* 現地アクセス・服装ガイド */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <h3 className="font-bold text-stone-900 text-base sm:text-lg flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-700" />
                アクセス・気候・おすすめの服装
              </h3>
            </div>
            <div className="whitespace-pre-line text-xs sm:text-sm text-stone-600 leading-relaxed">
              【エリアへのアクセス】
・電車・JR特急：JR名古屋駅から特急「南紀」で熊野市駅まで直通約3時間、尾鷲駅まで約2時間40分。新大阪・天王寺方面からは特急「くろしお」で新宮駅経由、または名古屋回り特急利用。
・車・マイカー：伊勢自動車道・紀勢自動車道「尾鷲北IC」「熊野大泊IC」まで直結。名古屋ICから約2時間15分、大阪松原JCTから西名阪道・名阪国道・伊勢道経由で約3時間。
・熊野古道各峠への移動：熊野市駅・尾鷲駅前から三交バス（三重交通）が運行しており、登山口バス停へのアクセスが良好。無料駐車場も整備されています。

【見頃・気候・おすすめの服装】
・ベストシーズン：11月中旬〜1月下旬（古道歩きに最適な冷涼晴天が続き、冬の魚介と新春初詣の好期）。
・気温の目安：太平洋側の平野部は日中10〜13℃程度と温暖ですが、早朝や峠の山影では3〜5℃前後まで冷え込みます。
・服装のポイント：峠歩きには脱ぎ着しやすい吸汗速乾インナーと防風ウインドブレーカーのレイヤリングが最適。石畳は湿気や落ち葉で滑りやすいため、グリップ力の高いトレッキングシューズを推奨します。海岸沿いの鬼ヶ城散策では海風が強いため、風を通さないアウターが便利です。
            </div>
          </div>
        </section>

        {/* Wikipedia公式連携スポットセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-bold text-stone-900">
                近隣名所アーカイブ：世界遺産・鬼ヶ城（荒波が削り出した奇岩断崖と熊野古道）
              </h2>
              <span className="text-[11px] text-stone-400">Wikipedia公式情報連携</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 overflow-hidden rounded-xl border border-stone-200 bg-stone-100">
                <img
                  src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Oniga-jo01.JPG/1280px-Oniga-jo01.JPG?utm_source=ja.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
                  alt="世界遺産・鬼ヶ城（荒波が削り出した奇岩断崖と熊野古道）"
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-7 space-y-2">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base">
                  世界遺産・鬼ヶ城（荒波が削り出した奇岩断崖と熊野古道） の見どころと歴史
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  鬼ヶ城（おにがじょう）は、三重県熊野市木本町にある海岸景勝地。国の名勝（「熊野の鬼ケ城 附 獅子巖」〈くまののおにがじょう つけたり ししいわ〉）の一部である。 熊野灘の荒波に削られた大小無数の海食洞が、地震による隆起によって階段上に並び、熊野灘に面して約1.2km続いている。志摩半島から続くリアス式海岸の最南端で、これより南はなだらかな砂浜の海岸（七里御浜）へと変わる。東口から山頂へ通じるハイキングコースには桜が植えられており、春には4種類の桜が次から次へと開花して長期間花…
                </p>
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>出典: フリー百科事典『ウィキペディア（Wikipedia）』</span>
                  <span className="text-cyan-700 font-semibold">冬の探訪推奨スポット</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 宿一覧セクション */}
        <section className="max-w-4xl mx-auto px-4 space-y-8 mb-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              熊野・尾鷲・熊野古道 厳選の温泉＆名宿5選
            </h2>
            <p className="text-xs sm:text-sm text-stone-500">
              楽天トラベルの最新空室・クチコミ・宿泊料金データをリアルタイム連携しています
            </p>
          </div>


            <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-[280px]">
                  <img
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/79395/79395.jpg"
                    alt="里創人　熊野倶楽部"
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
                        全室スイート仕様・広大な里山に佇む世界遺産の極上隠れ家リゾート
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.53</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      里創人　熊野倶楽部
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      世界遺産・熊野古道の麓に広がる約3万平米もの広大な里山空間に佇む最高峰リゾート。全客室が離れ形式のスイート仕様となっており、木の温もりと開放感あふれるプライベート空間が約束されます。館内には自家源泉の内湯と開放的な露天風呂を備え、湯上がりにラウンジで三重の銘酒やフィンガーフードを自由に楽しめるオールインクルーシブスタイルが好評。冬のディナーには厳選された熊野牛の鉄板焼きや、熊野灘から届く鮮魚を贅沢に仕立てた創作会席が並び、日常を忘れる極上の冬籠もりが叶います。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>熊野杉を贅沢に使った離れスイートルームと満天の星空露天</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>オールインクルーシブで三重の地酒やクラフトビールを満喫</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>熊野牛ステーキや伊勢海老・熊野灘の旬魚を味わう四季の特別会席</span></li>
                    </ul>
                    
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「部屋にも、食事中も虫がたくさんいて困った。食事は少し品数が少なかった。スタッフの方々はとても親切で丁寧でサービスも大変良かったです。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥20,900〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79395%2F79395.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/79263/79263.jpg"
                    alt="入鹿温泉ホテル瀞流荘"
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
                        トロッコ列車で結ぶ秘湯・清流北山川の自然と湯ノ口温泉の源泉宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.45</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      入鹿温泉ホテル瀞流荘
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      奥熊野の秘境・入鹿温泉に位置し、清流北山川のせせらぎを眼下に望む温泉宿。最大の名物は、かつて鉱山で使われていたレールを走る専用トロッコ列車で約10分の湯ノ口温泉へ移動できること。湯ノ口温泉は加水・加温一切なしの源泉掛け流しで、身体の芯から温まると湯治客からも絶賛されています。館内の大浴場からも冬の渓谷美をパノラマで一望。夕食には三重県が誇る熊野牛の陶板焼きや、紀伊半島の旬の山海の幸をふんだんに盛り込んだ滋味豊かな会席料理が堪能できます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>北山川の雄大な渓流を望む展望大浴場と露天風呂</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>専用トロッコ列車で往復できる名湯「湯ノ口温泉」の源泉掛け流し</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>熊野牛陶板焼きや清流の恵み・冬の郷土料理会席</span></li>
                    </ul>
                    
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「騒音はあったがスタッフの対応が丁寧で安心連泊で予約しました。宿泊日当日の夜は若者のグループに明け方近くまで騒がれ、ゆっくり眠ることができず辛い思いをしました。翌朝にこのことをフロントに申し上げ、同… 投。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥7,000〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79263%2F79263.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/78210/78210.jpg"
                    alt="ホテルなみ"
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
                        鬼ヶ城・七里御浜至近！全室オーシャンビューと熊野灘の海鮮を味わう名宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.37</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      ホテルなみ
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      世界遺産・鬼ヶ城や七里御浜のすぐそばの高台に建ち、全客室の窓から紺碧の太平洋を見渡せるロケーション抜群のホテル。冬の早朝には水平線から昇る感動的な初日の出や朝焼けを部屋にいながら拝むことができます。熊野古道散策の拠点としても極めて機能的。夕食は併設のレストランで、近隣の漁港から直送される新鮮な地魚の姿造りや、柔らかくジューシーな熊野牛の石焼きを味わうプランが人気。清潔でモダンな空間と温かい接客で、一人旅から家族旅行まで幅広く支持されています。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>目の前に広がる雄大な熊野灘と七里御浜の絶景パノラマビュー</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>名勝「鬼ヶ城」まで車で約2分！観光拠点に抜群のロケーション</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>朝水揚げされた地魚のお造りや熊野牛を気軽に味わえる贅沢御膳</span></li>
                    </ul>
                    
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「新鮮な刺身と夕食に大満足、また利用したい刺身は新鮮でおいしかったです。夜ご飯もおいしく、大変満足でした。また利用したいと思います。つづ。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥4,950〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78210%2F78210.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/72729/72729.jpg"
                    alt="尾鷲シーサイドビュー"
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
                        三木浦湾を望む全室オーシャンフロント・本場尾鷲真鯛と地魚づくしの名料理宿
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>4.66</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      尾鷲シーサイドビュー
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      尾鷲市街から少し南、美しい三木浦湾の入り江を見下ろす高台に佇む料理自慢の隠れ家宿。全客室が海に面しており、穏やかな波音と港の灯りが旅情をかき立てます。宿の最大の誇りは、全国屈指のブランド「尾鷲真鯛」を余すところなく味わえる料理。真鯛の薄造り、皮目をサッと湯通しした絶品鯛しゃぶ、じっくり炊き上げた鯛の兜煮など、冬に脂が乗った真鯛の旨味を心ゆくまで堪能できます。展望風呂からは刻々と色を変える海の夕景が広がり、美食を愛する旅人に愛され続けています。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>静穏なリアス式海岸・三木浦湾を一望する静かな隠れ家宿</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>冬に極まる「尾鷲真鯛」のしゃぶしゃぶ・兜煮・お造りフルコース</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>海を眺めながら温まる貸切展望風呂と心尽くしのおもてなし</span></li>
                    </ul>
                    
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「女性にも優しい魚が美味しい宿素敵なホテルでした目の前が魚釣りできるところなので男性が多いのではないかと思うのですが女性にも優しい宿です食事も残してしまって(品数多くて)申し訳なかったのです… つづ。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥8,400〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72729%2F72729.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
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
                    src="https://img.travel.rakuten.co.jp/share/HOTEL/20199/20199.jpg"
                    alt="ビジネスホテル　河上"
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
                        熊野市駅徒歩圏内・古道歩きとビジネスを支える快適機能派ステイ
                      </span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold text-xs">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span>3.84</span>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
                      ビジネスホテル　河上
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      熊野市の中心市街地に位置し、JR熊野市駅やバスターミナルから徒歩すぐという利便性を誇るホテル。熊野古道伊勢路のトレッキングや、鬼ヶ城・花の窟神社巡りをアクティブに楽しみたい旅人にとって最高のベースキャンプです。客室は手入れが行き届き機能的で、ゆったりとしたベッドが歩き疲れた身体を心地よく休ませてくれます。夕食は徒歩圏内にある地元の割烹や居酒屋で、冬の熊野灘で獲れたモチガツオや地魚、地酒を味わい、自由気ままな冬の紀州旅を満喫できます。
                    </p>
                    <ul className="text-xs text-stone-700 space-y-1 pt-1 border-t border-stone-100">
                      <li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>JR熊野市駅から徒歩約5分！電車旅や早朝出発のトレッキングに最適</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>清潔で機能的な客室と無料Wi-Fi・充実のアメニティ</span></li><li className="flex items-start gap-1.5"><span className="text-cyan-700 font-bold">✓</span><span>周辺には郷土料理店や地魚居酒屋が多数点在しグルメ巡りも軽快</span></li>
                    </ul>
                    
                <div className="bg-stone-50 rounded-xl p-3 text-xs text-stone-600 border border-stone-200/60">
                  <span className="font-bold text-stone-800 block mb-1">宿泊者のクチコミ抜粋</span>
                  <p className="leading-relaxed">{"「感想選択肢が無かったので宿泊したが駅前と利便性が良いと思っていたのに食事を取る場所が徒歩圏内に全く無くてビックリ!決して安価では無かったので低レベルのビジネスホテルと言わざる得ない宿だっ… つづ。」"}</p>
                </div>
            
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-stone-400 block">参考宿泊料金（1名あたり）</span>
                      <span className="text-base font-extrabold text-stone-900">¥5,000〜</span>
                    </div>
                    <a
                      href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20199%2F20199.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-700 hover:bg-cyan-800 text-white font-bold text-xs transition-colors shadow-sm"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
        </section>

        {/* ふるさと納税クーポンセクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-2xl p-6 sm:p-8 text-white shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-white/20 border border-white/30">
                  楽天トラベル×ふるさと納税
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">
                  三重県の宿に実質2,000円で泊まる賢い方法
                </h3>
                <p className="text-xs sm:text-sm text-white/90 max-w-xl leading-relaxed">
                  楽天ふるさと納税の宿泊クーポンを活用すれば、寄付額に応じて宿泊代金が大幅割引。予約済みの宿泊にも「あとから割引」が適用可能です。憧れの露天風呂付き客室や旬の特別会席プランもお手軽に予約できます。
                </p>
              </div>
              <a
                href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-6 py-3 rounded-xl bg-white text-amber-700 font-bold text-sm shadow hover:bg-amber-50 transition-colors"
              >
                ふるさと納税対象宿を探す
              </a>
            </div>
          </div>
        </section>

        {/* よくある質問 (FAQ) */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-600" />
              冬の熊野・尾鷲・熊野古道旅行でよくある質問（FAQ）
            </h2>

            <div className="space-y-4">

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>熊野古道伊勢路（馬越峠や松本峠）は冬でも積雪なく歩けますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                はい。南紀・東紀州の沿岸部は黒潮の影響で真冬でも積雪することは極めて稀です。11月から1月は天候が安定し雨量も年間で最も少ないため、快適にトレッキングを楽しめます。ただし日陰の石畳は露で滑りやすい場合があるため、しっかりした登山靴やトレッキングシューズでお歩きください。
              </p>
            </div>
            

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>名物「尾鷲真鯛」や「熊野牛」を一番美味しく味わえる時期はいつですか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                尾鷲真鯛は海水温が下がる11月から2月にかけて脂が乗り、身が引き締まるため冬がベストシーズンです。熊野牛は通年で安定した品質ですが、冬は温かいすき焼き鍋やしゃぶしゃぶ、ステーキ会席として提供されるプランが多く、温泉後の身体に染み渡る極上の味わいとなります。
              </p>
            </div>
            

            <div className="border-b border-stone-200 pb-4 last:border-0 last:pb-0">
              <h3 className="text-sm sm:text-base font-bold text-stone-900 mb-2 flex items-start gap-2">
                <span className="text-cyan-700 font-extrabold">Q.</span>
                <span>公共交通機関（電車・バス）だけでも熊野古道や鬼ヶ城を巡れますか？</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-5">
                十分に巡ることが可能です。JR熊野市駅から鬼ヶ城センターへは路線バスで約5分（徒歩でも約25分）。松本峠や馬越峠の登山口へも路線バスが運行しています。また瀞流荘や湯ノ口温泉へはJR熊野市駅からの送迎バスや路線バスが運行されており、山間部の秘湯へもアクセス可能です。
              </p>
            </div>
            
            </div>
          </div>
        </section>

        {/* 内部リンク・関連特集セクション */}
        <section className="max-w-4xl mx-auto px-4 mb-12">
          <div className="bg-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-200 space-y-4">
            <h3 className="text-base sm:text-lg font-bold text-stone-900">あわせて読みたい三重県＆冬の厳選温泉特集</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link href="/prefectures/mie" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>三重県のおすすめ観光名所＆温泉宿一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/features" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>全国の季節・目的別旅行特集一覧</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-luxury-hotspring-ryokan-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>実質2,000円で泊まる名湯・高級温泉旅館ガイド</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
              <Link href="/furusato-tax-local-gourmet-inn-stay" className="p-3 bg-white rounded-xl border border-stone-200 text-xs font-semibold text-stone-800 hover:text-cyan-700 hover:border-cyan-300 transition flex items-center justify-between">
                <span>ご当地グルメを堪能する全国美食旅特集</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
