import fs from "fs";
import path from "path";
import Link from "next/link";
import { Metadata } from "next";

interface RakutenHotel {
  hotelNo: number;
  hotelName: string;
  hotelKanaName?: string;
  hotelInformationUrl: string;
  planListUrl: string;
  dpPlanListUrl: string;
  reviewUrl: string;
  hotelImageUrl: string;
  hotelThumbnailUrl?: string;
  roomImageUrl?: string;
  hotelMapImageUrl?: string;
  reviewCount: number;
  reviewAverage: number;
  userReview?: string;
  hotelMinCharge: number;
  address1: string;
  address2: string;
  telephoneNo?: string;
  access?: string;
  parkingInformation?: string;
  nearestStation?: string;
  hotelSpecial?: string;
  affiliateUrl: string;
}

interface RakutenCategoryData {
  label: string;
  query: string;
  hotels: RakutenHotel[];
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://croud-travel.pages.dev";

export const metadata: Metadata = {
  title: "【京都旅行 完全ガイド 2026】1泊2日・2泊3日モデルコース＆カップル・子連れ・女子旅・穴場・おすすめホテル・温泉旅館 ｜ 旅宿クラウド",
  description:
    "京都旅行の計画を完全サポート！1泊2日・2泊3日の王道＆穴場モデルコース、カップルデート・子連れファミリー・女子旅向けプラン、雨の日や夜の観光スポット、春の桜・秋の紅葉名所から、おすすめ厳選による京都駅周辺ホテル・温泉旅館・美味しい朝食付き宿まで徹底網羅。",
  keywords: [
    "京都", "京都観光", "京都観光モデルコース", "京都 1泊2日", "京都 2泊3日",
    "京都 カップル旅行", "京都 子連れ旅行", "京都 女子旅", "京都 穴場", "京都 雨の日",
    "京都 夜 観光", "京都 紅葉", "京都 桜", "京都 ホテル", "京都駅 ホテル",
    "京都 ホテル おすすめ", "京都 旅館", "京都 温泉旅館", "京都 朝食付きホテル",
    "京都 旅行", "京都 デート", "京都 食べ歩き", "京都 車なし", "楽天トラベル"
  ],
  alternates: { canonical: "https://croud-travel.pages.dev/kyoto" },
  openGraph: {
    title: "京都旅行 完全ガイド 2026 ｜ 旅宿クラウド",
    description: "京都旅行を思い立ったらまず読むハブガイド。1泊2日/2泊3日モデルコース・旅行タイプ別・シチュエーション別・楽天API直接取得ホテルを完全連結。",
    url: "https://croud-travel.pages.dev/kyoto",
    siteName: "旅宿クラウド",
    type: "article",
  },
};

function loadDirectRakutenHotels(): Record<string, RakutenCategoryData> {
  try {
    const dataPath = path.join(process.cwd(), "src", "data", "kyoto_rakuten_hotels.json");
    if (fs.existsSync(dataPath)) {
      return JSON.parse(fs.readFileSync(dataPath, "utf8"));
    }
  } catch (e) {
    console.error("Failed to load direct Rakuten hotel data:", e);
  }
  return {};
}

export default function KyotoHubPage() {
  const rakutenData = loadDirectRakutenHotels();

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "京都府 観光ハブ", item: `${baseUrl}/prefectures/kyoto` },
      { "@type": "ListItem", position: 3, name: "京都旅行 完全ガイド", item: `${baseUrl}/kyoto` },
    ],
  };

  const faqList = [
    {
      q: "京都観光の王道モデルコース（1泊2日・2泊3日）はどう回るのが効率的ですか？",
      a: "1泊2日の場合は、1日目に京都駅到着後、清水寺〜産寧坂〜祇園（八坂神社）〜夜の先斗町ディナー。2日目は早朝の伏見稲荷大社千本鳥居から嵐山（竹林の小径・渡月橋）へ移動するコースが最も効率的です。2泊3日なら、金閣寺・銀閣寺・北野天満宮や、宇治（平等院鳳凰堂）、大原三千院、貴船・鞍馬まで足を伸ばすのがおすすめです。"
    },
    {
      q: "京都旅行は車なし・市バスや電車だけでも回れますか？",
      a: "はい、京都観光は車なし（電車・地下鉄・徒歩）が最も推奨されます。京都市内は道路渋滞が多いため、JR、京阪電車、阪急電車、市営地下鉄を組み合わせることでスムーズに移動できます。観光地間の移動は徒歩散策も魅力の一つです。"
    },
    {
      q: "カップル旅行・デートや女子旅におすすめの京都スポットや過ごし方は？",
      a: "カップルには東山・祇園の夕暮れ散策、嵐山の渡月橋や屋形船、湯豆腐や川床ディナー、露天風呂付き客室のある嵐山温泉旅館が人気です。女子旅なら着物レンタルで清水寺や南禅寺水路閣での写真撮影、祇園・町家カフェ巡り、あぶらとり紙やコスメ・お守り集めが定番です。"
    },
    {
      q: "小さな子ども連れや家族旅行で楽しめる京都の観光地は？",
      a: "京都駅近くの「京都鉄道博物館」や「京都水族館」（梅小路公園エリア）、自然豊かな「嵐山モンキーパークいわたやま」、芝生が広がる「京都御苑」などが子連れファミリーに大変人気です。"
    },
    {
      q: "京都の穴場スポットや雨の日、夜の観光はどう楽しめばいいですか？",
      a: "混雑を避ける穴場としては「蓮華寺」「源光庵」「詩仙堂」「実相院」などが静寂を味わえます。雨の日は「京都駅ビル」「錦市場アーケード」「三十三間堂」「京都国立博物館」などの屋内名所が最適です。夜は東寺や高台寺のライトアップ、祇園白川の夜桜・行灯散策、京都タワー展望室からの夜景がおすすめです。"
    },
    {
      q: "京都のホテル選びで迷っています。京都駅周辺・祇園・河原町・温泉宿のどこがおすすめ？",
      a: "新幹線利用や利便性・荷物預け最優先なら「京都駅周辺のホテル」、夜のグルメや食べ歩き・ショッピング重視なら「四条河原町・祇園エリア」、静寂や日本情緒・露天風呂を満喫したいなら「嵐山・湯の花温泉の温泉旅館」が最適です。"
    },
    {
      q: "京都のホテルで「朝食付き」を選ぶメリットは？",
      a: "京都のホテルは朝食バイキングやおばんざい御膳のレベルが非常に高く、京野菜や湯豆腐、自家製漬物、出来立て出汁巻き卵などを朝から堪能できます。楽天トラベルの朝食付きプランを予約することで、贅沢な一日のスタートが切れます。"
    }
  ];

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures/kyoto" className="hover:text-teal-800 transition">京都府</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">京都旅行 完全ガイド（ハブページ）</span>
      </nav>

      {/* ヒーローセクション */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-stone-900 via-rose-950 to-amber-950 p-8 md:p-14 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-rose-500 text-white px-3.5 py-1 rounded-full uppercase shadow">
            京都観光 完全計画ハブ 🍁
          </span>
          <span className="text-xs font-bold text-amber-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            モデルコース・1泊2日・2泊3日
          </span>
          <span className="text-xs font-bold text-emerald-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            おすすめ厳選ホテル完全対応
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">
          【京都旅行 完全ガイド】<br />
          <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100 bg-clip-text text-transparent">
            観光モデルコース・穴場・季節・楽天API公式ホテル＆温泉旅館
          </span>
        </h1>

        <p className="text-rose-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          千年の都・京都。「京都観光は何から計画すればいい？」「1泊2日や2泊3日のおすすめルートは？」「カップルや子連れにぴったりのスポットは？」「雨の日や夜の観光、穴場、おすすめホテルは？」といった検索需要を縦に深掘りし、おすすめの宿泊施設情報で繋ぐ総合ハブガイドです。
        </p>

        {/* クイックアンカーナビゲーション */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 pt-4 border-t border-white/10 text-center">
          <a href="#model-course" className="p-2.5 bg-white/10 hover:bg-rose-500/30 rounded-xl transition space-y-1 border border-white/10">
            <span className="block text-[10px] font-extrabold text-amber-300">ROUTE 1</span>
            <span className="block text-xs font-bold">モデルコース</span>
          </a>
          <a href="#travel-style" className="p-2.5 bg-white/10 hover:bg-rose-500/30 rounded-xl transition space-y-1 border border-white/10">
            <span className="block text-[10px] font-extrabold text-amber-300">STYLE 2</span>
            <span className="block text-xs font-bold">目的・同行者別</span>
          </a>
          <a href="#special-scenes" className="p-2.5 bg-white/10 hover:bg-rose-500/30 rounded-xl transition space-y-1 border border-white/10">
            <span className="block text-[10px] font-extrabold text-amber-300">SCENE 3</span>
            <span className="block text-xs font-bold">穴場・雨・夜・桜紅葉</span>
          </a>
          <a href="#hotel-station" className="p-2.5 bg-white/10 hover:bg-rose-500/30 rounded-xl transition space-y-1 border border-white/10">
            <span className="block text-[10px] font-extrabold text-amber-300">HOTEL 4</span>
            <span className="block text-xs font-bold">京都駅ホテル</span>
          </a>
          <a href="#hotel-breakfast" className="p-2.5 bg-white/10 hover:bg-rose-500/30 rounded-xl transition space-y-1 border border-white/10">
            <span className="block text-[10px] font-extrabold text-amber-300">GOURMET 5</span>
            <span className="block text-xs font-bold">朝食付きホテル</span>
          </a>
          <a href="#hotel-onsen" className="p-2.5 bg-amber-500/40 hover:bg-amber-500/60 rounded-xl transition space-y-1 border border-amber-400/40">
            <span className="block text-[10px] font-black text-amber-200">ONSEN 6</span>
            <span className="block text-xs font-black">温泉旅館・予約</span>
          </a>
        </div>
      </section>

      {/* 1. 京都観光 モデルコース（1泊2日・2泊3日） */}
      <section id="model-course" className="scroll-mt-24 bg-white border border-rose-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-rose-950/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
              京都観光 モデルコース 🗺️
            </span>
            <span className="text-[10px] font-bold text-stone-500">
              #京都観光 #京都観光モデルコース #京都1泊2日 #京都2泊3日
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-900">
            京都観光モデルコース ｜ 1泊2日＆2泊3日で巡る王道・車なしルート
          </h2>
          <p className="text-xs text-stone-700 leading-relaxed font-medium">
            初めての京都旅行からリピーターまで。渋滞を避けて電車と徒歩でスムーズに名所を制覇する鉄板スケジュール。
          </p>
        </div>

        <div className="space-y-6">
          {/* 1泊2日コース */}
          <div className="p-6 rounded-2xl bg-amber-50/50 border border-amber-300/40 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200 pb-3">
              <h3 className="text-base font-black text-amber-950 flex items-center gap-2">
                <span>📍</span> <span>王道！京都1泊2日モデルコース（東山・祇園・嵐山・伏見稲荷）</span>
              </h3>
              <span className="text-[10px] font-extrabold bg-amber-200 text-amber-900 px-3 py-0.5 rounded-full">
                初心者・車なし推奨
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-white rounded-xl border border-amber-200 space-y-2">
                <span className="font-extrabold text-amber-800 block">【1日目：東山・祇園・清水寺・夜の先斗町】</span>
                <ul className="space-y-1.5 text-stone-700 leading-relaxed pl-2">
                  <li>• 10:30 **京都駅到着**（コインロッカーまたはホテルへ荷物預け）</li>
                  <li>• 11:30 **清水寺**（清水の舞台・音羽の滝）＆産寧坂・二年坂散策</li>
                  <li>• 13:00 **八坂神社・祇園**（町家カフェで抹茶パフェ＆和スイーツランチ）</li>
                  <li>• 15:30 **南禅寺 水路閣**（レトロなレンガ造りのアーチ橋で記念撮影）</li>
                  <li>• 18:00 **先斗町・木屋町**で湯豆腐・おばんざい・京料理ディナー</li>
                  <li>• 20:30 **京都駅周辺または祇園のホテル**にチェックイン</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-xl border border-amber-200 space-y-2">
                <span className="font-extrabold text-amber-800 block">【2日目：早朝の千本鳥居・嵐山竹林＆渡月橋】</span>
                <ul className="space-y-1.5 text-stone-700 leading-relaxed pl-2">
                  <li>• 07:30 **伏見稲荷大社**（混雑前の早朝に千本鳥居をゆったり参拝）</li>
                  <li>• 10:00 JRで移動し**嵐山・渡月橋**へ（桂川の絶景と屋形船）</li>
                  <li>• 11:00 **竹林の小径・天龍寺**（世界遺産の庭園と風情ある竹林浴）</li>
                  <li>• 13:00 嵐山商店街で**湯葉チーズ串・湯豆腐・抹茶食べ歩き**</li>
                  <li>• 15:30 京都駅へ戻り**ジェイアール京都伊勢丹・ポルタ**でお土産購入</li>
                  <li>• 17:00 新幹線で快適に帰路へ</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2泊3日コース */}
          <div className="p-6 rounded-2xl bg-rose-50/40 border border-rose-200 space-y-3">
            <h3 className="text-sm font-bold text-rose-950 flex items-center gap-2">
              <span>🧭</span> <span>贅沢満喫！京都2泊3日モデルコース（金閣寺・銀閣寺・宇治・温泉宿ステイ）</span>
            </h3>
            <p className="text-xs text-stone-700 leading-relaxed">
              1日目・2日目の主要観光に加え、3日目は宇治（世界遺産・平等院鳳凰堂と宇治茶本場の茶房巡り）や、北山エリア（金閣寺・龍安寺・北野天満宮）、あるいは大原三千院・貴船神社まで足を伸ばす贅沢なゆったりプラン。2泊目は嵐山温泉や湯の花温泉の温泉旅館に宿泊するのが至高です。
            </p>
          </div>
        </div>
      </section>

      {/* 2. 旅行スタイル・同行者別ガイド（カップル・子連れ・女子旅） */}
      <section id="travel-style" className="scroll-mt-24 bg-white border border-rose-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-rose-950/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
              旅行スタイル別 👥
            </span>
            <span className="text-[10px] font-bold text-stone-500">
              #京都カップル旅行 #京都子連れ旅行 #京都女子旅
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-900">
            京都 カップル旅行・子連れ旅行・女子旅 ｜ 同行者別おすすめプラン
          </h2>
          <p className="text-xs text-stone-700 leading-relaxed font-medium">
            大切なパートナーとの記念日デート、子どもが喜ぶ体験型ファミリー旅行、友達同士で楽しむ写真映え女子旅。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          {/* カップル旅行 */}
          <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold text-rose-800 bg-white border border-rose-300 px-2.5 py-0.5 rounded-full">
                👩‍❤️‍👨 京都 カップル旅行・デート
              </span>
              <h3 className="text-sm font-bold text-rose-950">
                風情ある小路と露天風呂付き客室で過ごす大人の記念日
              </h3>
              <p className="text-stone-700 leading-relaxed">
                鴨川の川床ディナー、祇園白川の夕暮れ散策、嵐山の屋形船、そして夜は客室露天風呂や部屋食のある温泉旅館で二人だけの特別な時間を満喫。
              </p>
            </div>
            <div className="pt-2 border-t border-rose-200/60 text-[11px] font-bold text-rose-900">
              おすすめスポット: 祇園白川 / 鴨川デルタ / 貴船神社 / 嵐山温泉
            </div>
          </div>

          {/* 子連れ旅行 */}
          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold text-amber-800 bg-white border border-amber-300 px-2.5 py-0.5 rounded-full">
                👨‍👩‍👧‍👦 京都 子連れ旅行・ファミリー
              </span>
              <h3 className="text-sm font-bold text-amber-950">
                梅小路公園エリアや体験型スポットで家族みんなが笑顔に
              </h3>
              <p className="text-stone-700 leading-relaxed">
                本物のSLが並ぶ「京都鉄道博物館」、イルカショーが楽しい「京都水族館」、和菓子作りや友禅染の体験教室など、子どもが飽きずに楽しめるスポットが満載。
              </p>
            </div>
            <div className="pt-2 border-t border-amber-200/60 text-[11px] font-bold text-amber-900">
              おすすめスポット: 京都鉄道博物館 / 京都水族館 / 太秦映画村 / 京都御苑
            </div>
          </div>

          {/* 女子旅 */}
          <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200 space-y-3 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-extrabold text-teal-800 bg-white border border-teal-300 px-2.5 py-0.5 rounded-full">
                👘 京都 女子旅・カフェ巡り
              </span>
              <h3 className="text-sm font-bold text-teal-950">
                着物レンタル・映えスイーツ・町家カフェ＆縁結び神社
              </h3>
              <p className="text-stone-700 leading-relaxed">
                レトロモダンな着物を着て南禅寺水路閣や八坂庚申堂で記念撮影。町家を改装した隠れ家カフェで本格抹茶スイーツを味わい、よーじやでコスメ選び。
              </p>
            </div>
            <div className="pt-2 border-t border-teal-200/60 text-[11px] font-bold text-teal-900">
              おすすめスポット: 南禅寺水路閣 / 八坂庚申堂 / 下鴨神社 / 錦市場
            </div>
          </div>
        </div>
      </section>

      {/* 3. シチュエーション＆季節別ガイド（穴場・雨の日・夜観光・紅葉・桜） */}
      <section id="special-scenes" className="scroll-mt-24 bg-white border border-rose-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-rose-950/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
              シチュエーション＆季節 🌸🍁
            </span>
            <span className="text-[10px] font-bold text-stone-500">
              #京都穴場 #京都雨の日 #京都夜観光 #京都紅葉 #京都桜
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-900">
            京都 穴場・雨の日・夜観光・紅葉・桜 ｜ 季節とシーン別の楽しみ方
          </h2>
          <p className="text-xs text-stone-700 leading-relaxed font-medium">
            混雑を避けた静かな名所から、雨天時の快適スポット、幻想的な夜のライトアップ、四季の絶景まで。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {/* 京都 穴場 */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="text-sm font-bold text-stone-900 flex items-center gap-1.5">
              <span>🌿</span> <span>京都 穴場スポット（静寂と庭園）</span>
            </h3>
            <p className="text-stone-700 leading-relaxed">
              観光客の喧騒から離れた「蓮華寺」の額縁庭園、「源光庵」の悟りの窓と迷いの窓、「詩仙堂」の四季の草花。静かに心洗われる時間を過ごせます。
            </p>
          </div>

          {/* 京都 雨の日 */}
          <div className="p-5 rounded-2xl bg-teal-50/40 border border-teal-200 space-y-2">
            <h3 className="text-sm font-bold text-teal-950 flex items-center gap-1.5">
              <span>☔</span> <span>京都 雨の日 観光（濡れずに満喫）</span>
            </h3>
            <p className="text-stone-700 leading-relaxed">
              1001体の観音像が圧巻の「三十三間堂」、アーケードのある「錦市場」での食べ歩き、「京都国立博物館」や「京都駅ビル」のインドア施設が雨の日でも快適。
            </p>
          </div>

          {/* 京都 夜 観光 */}
          <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-200 space-y-2">
            <h3 className="text-sm font-bold text-indigo-950 flex items-center gap-1.5">
              <span>🌙</span> <span>京都 夜 観光・ライトアップ・夜景</span>
            </h3>
            <p className="text-stone-700 leading-relaxed">
              行灯が灯る「祇園白川・花見小路」、東寺の五重塔ライトアップ、京都タワー展望台からの大パノラマ夜景、先斗町の石畳BAR巡りが大人の夜を彩ります。
            </p>
          </div>

          {/* 京都 紅葉 */}
          <div className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-2">
            <h3 className="text-sm font-bold text-rose-950 flex items-center gap-1.5">
              <span>🍁</span> <span>京都 紅葉（11月中旬〜12月上旬）</span>
            </h3>
            <p className="text-stone-700 leading-relaxed">
              東福寺の通天橋から望む紅葉の雲海、永観堂（禅林寺）の「みかえり阿弥陀」とライトアップ、嵐山トロッコ列車から見下ろす保津峡の錦秋は一生の思い出に。
            </p>
          </div>

          {/* 京都 桜 */}
          <div className="p-5 rounded-2xl bg-pink-50/50 border border-pink-200 space-y-2">
            <h3 className="text-sm font-bold text-pink-950 flex items-center gap-1.5">
              <span>🌸</span> <span>京都 桜（3月下旬〜4月上旬）</span>
            </h3>
            <p className="text-stone-700 leading-relaxed">
              哲学の道の桜並木トンネル、円山公園の祇園しだれ桜、嵐山渡月橋沿いの桜景色、平安神宮神苑の紅しだれ桜など、春の京都は街全体がピンクに染まります。
            </p>
          </div>

          {/* 京都 グルメ */}
          <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-2">
            <h3 className="text-sm font-bold text-amber-950 flex items-center gap-1.5">
              <span>🍵</span> <span>京都 グルメ・おばんざい・スイーツ</span>
            </h3>
            <p className="text-stone-700 leading-relaxed">
              朝引き湯葉や名物湯豆腐、出汁の効いた京うどん、旬の京野菜おばんざい、老舗茶商（辻利・中村藤吉）の濃厚抹茶パフェは絶対外せません。
            </p>
          </div>
        </div>
      </section>

      {/* 4. おすすめ厳選：京都駅周辺ホテル */}
      {rakutenData.kyoto_station && rakutenData.kyoto_station.hotels.length > 0 && (
        <section id="hotel-station" className="scroll-mt-24 space-y-6 bg-white border border-rose-950/10 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="space-y-2 border-b border-rose-950/10 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[10px] font-extrabold text-stone-800 bg-stone-100 border border-stone-300 px-3 py-0.5 rounded-full uppercase tracking-wider">
                RECOMMENDED STAY
              </span>
              <span className="text-xs font-bold text-rose-800">
                
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-900">
              京都駅 ホテル ｜ 新幹線・観光アクセス抜群の駅チカ人気宿
            </h2>
            <p className="text-xs text-stone-700 leading-relaxed font-medium">
              新幹線改札から徒歩1〜5分圏内。荷物を預けて手ぶら観光に出発できる、口コミ高評価の駅周辺ホテルを楽天トラベル公式APIから直接厳選。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rakutenData.kyoto_station.hotels.slice(0, 3).map((hotel) => (
              <article
                key={hotel.hotelNo}
                className="flex flex-col justify-between border border-stone-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
              >
                <div>
                  <div className="aspect-video relative overflow-hidden bg-stone-100 border-b border-stone-200">
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-stone-900 text-white px-2.5 py-0.5 rounded-full shadow">
                      京都駅チカ
                    </span>
                    {hotel.hotelMinCharge > 0 && (
                      <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                        ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                      </span>
                    )}
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-bold text-stone-500">
                      <span>{hotel.nearestStation || "京都駅"}周辺</span>
                      {hotel.reviewAverage > 0 && (
                        <span className="text-amber-600 font-extrabold">
                          ⭐ {hotel.reviewAverage} ({hotel.reviewCount}件)
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2">
                      {hotel.hotelSpecial || hotel.access}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 space-y-2">
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-rose-700 to-rose-800 hover:from-rose-600 hover:to-rose-700 rounded-xl shadow transition"
                  >
                    ✈️ 楽天トラベルで最安値・空室を見る
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* 5. おすすめ厳選：京都 朝食付きホテル */}
      {rakutenData.breakfast && rakutenData.breakfast.hotels.length > 0 && (
        <section id="hotel-breakfast" className="scroll-mt-24 space-y-6 bg-white border border-rose-950/10 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="space-y-2 border-b border-rose-950/10 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
                RECOMMENDED STAY
              </span>
              <span className="text-xs font-bold text-amber-800">
                
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-900">
              京都 朝食付きホテル ｜ おばんざい・和洋ビュッフェが絶賛される宿
            </h2>
            <p className="text-xs text-stone-700 leading-relaxed font-medium">
              京野菜の小鉢、炊きたて土鍋ご飯、出汁巻き卵など、贅沢な朝食バイキングで一日をスタートできる楽天トラベル人気ホテル。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rakutenData.breakfast.hotels.slice(0, 3).map((hotel) => (
              <article
                key={hotel.hotelNo}
                className="flex flex-col justify-between border border-stone-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
              >
                <div>
                  <div className="aspect-video relative overflow-hidden bg-stone-100 border-b border-stone-200">
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-amber-600 text-white px-2.5 py-0.5 rounded-full shadow">
                      朝食自慢
                    </span>
                    {hotel.hotelMinCharge > 0 && (
                      <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                        ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                      </span>
                    )}
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-bold text-stone-500">
                      <span>{hotel.address2.replace(/京都市/, '')}</span>
                      {hotel.reviewAverage > 0 && (
                        <span className="text-amber-600 font-extrabold">
                          ⭐ {hotel.reviewAverage} ({hotel.reviewCount}件)
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2">
                      {hotel.hotelSpecial || hotel.access}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 space-y-2">
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 text-xs font-black text-amber-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow transition"
                  >
                    ✈️ 楽天トラベルで朝食プランを見る
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* 6. おすすめ厳選：京都 温泉旅館＆名湯 */}
      {rakutenData.onsen && rakutenData.onsen.hotels.length > 0 && (
        <section id="hotel-onsen" className="scroll-mt-24 space-y-8 bg-gradient-to-br from-stone-900 via-rose-950 to-amber-950 p-6 md:p-10 rounded-3xl text-white shadow-xl">
          <div className="space-y-3 border-b border-white/10 pb-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[10px] font-extrabold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-0.5 rounded-full uppercase tracking-wider">
                RECOMMENDED STAY
              </span>
              <span className="text-xs font-bold text-emerald-200">
                
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-white">
              京都 温泉旅館 ＆ おすすめ宿（楽天トラベルでリアルタイム空室確認）
            </h2>

            <p className="text-xs md:text-sm text-rose-100/90 leading-relaxed font-medium">
              楽天トラベルAPIから直接取得した、京都の温泉旅館・風情ある京町家宿。客室露天風呂や会席料理プランの最安値・空室状況をリアルタイムで確認してご予約いただけます。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rakutenData.onsen.hotels.slice(0, 6).map((hotel) => (
              <article
                key={hotel.hotelNo}
                className="flex flex-col justify-between border border-white/10 bg-white/5 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md hover:bg-white/10 transition duration-200"
              >
                <div>
                  <div className="aspect-video relative overflow-hidden bg-stone-950 border-b border-white/10">
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-rose-600 text-white px-2.5 py-0.5 rounded-full shadow">
                      温泉旅館
                    </span>
                    {hotel.hotelMinCharge > 0 && (
                      <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                        ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                      </span>
                    )}
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-bold text-rose-200/60">
                      <span>{hotel.address1} {hotel.address2.slice(0, 10)}</span>
                      {hotel.reviewAverage > 0 && (
                        <span className="text-amber-400 font-extrabold">
                          ⭐ {hotel.reviewAverage} ({hotel.reviewCount}件)
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-black font-journal-serif text-white line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-rose-100/70 line-clamp-2">
                      {hotel.hotelSpecial || hotel.access}
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0 space-y-2">
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-2.5 text-xs font-black text-stone-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow transition"
                  >
                    ✈️ 楽天トラベルで空室・プランを見る
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* 7. よくある質問（FAQ） */}
      <section className="bg-white border border-rose-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-rose-950/10 pb-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 flex items-center gap-2">
            <span>❓</span> <span>京都旅行のプロが回答！よくある質問（FAQ）</span>
          </h2>
          <p className="text-xs text-stone-600 leading-relaxed font-medium">
            京都観光のモデルコース、車なし移動、カップル・子連れ、雨の日、京都駅ホテルや朝食付き宿の選び方についてお答えします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqList.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-rose-50/30 border border-rose-950/10 space-y-2">
              <h3 className="text-sm font-bold text-rose-950 flex items-start gap-2">
                <span className="text-rose-700 font-extrabold">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 回遊・関連リンクフッター */}
      <section className="p-8 rounded-3xl bg-rose-50/50 border border-rose-900/10 text-center space-y-4">
        <h3 className="text-lg font-bold font-journal-serif text-stone-900">
          京都旅行の準備は整いましたか？
        </h3>
        <p className="text-xs text-stone-600 max-w-xl mx-auto leading-relaxed">
          楽天トラベルの限定クーポンやキャンペーンを活用して、憧れの京都旅行・温泉宿ステイをお得に予約しましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/prefectures/kyoto"
            className="px-8 py-3 text-xs font-bold text-white bg-stone-900 hover:bg-stone-800 rounded-xl shadow transition"
          >
            🗾 京都府の観光名所・お土産・地酒ガイドへ
          </Link>
          <Link
            href="/campaigns"
            className="px-8 py-3 text-xs font-bold text-amber-900 bg-amber-100 hover:bg-amber-200 rounded-xl border border-amber-300 transition"
          >
            🎁 開催中の楽天トラベルキャンペーンを見る
          </Link>
        </div>
      </section>
    </div>
  );
}
