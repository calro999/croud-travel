import { Metadata } from "next";
import Link from "next/link";
import FloatingMobileCTA from "@/app/components/FloatingMobileCTA";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://croud-travel.pages.dev";
const AFFILIATE_FURUSATO_URL = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F";

export const metadata: Metadata = {
  title: "【実質2,000円】楽天トラベルふるさと納税宿泊クーポン完全攻略｜月別・目的別・季節別おすすめ宿まとめ",
  description: "楽天トラベルのふるさと納税宿泊クーポンを徹底解説！実質2,000円負担で泊まれる憧れの高級旅館・露天風呂付き客室・リゾートホテルを厳選。1月〜12月の月別おすすめ、露天風呂・記念日・家族旅行・グルメなど目的別、雪見温泉や避暑リゾートなど季節別に完全網羅。あとから予約への適用方法や上限額目安も分かりやすくご紹介。",
  keywords: [
    "楽天トラベル ふるさと納税",
    "ふるさと納税 宿泊クーポン",
    "ふるさと納税 旅行",
    "ふるさと納税 高級旅館",
    "ふるさと納税 温泉宿",
    "実質2000円 旅行",
    "ふるさと納税 月別 おすすめ",
    "ふるさと納税 家族旅行",
    "ふるさと納税 露天風呂付き客室"
  ],
  alternates: { canonical: `${baseUrl}/furusato/` },
  openGraph: {
    title: "【実質2,000円】楽天トラベルふるさと納税宿泊クーポン完全攻略｜月別・目的別・季節別おすすめ宿",
    description: "実質2,000円の自己負担で高級温泉旅館やリゾートホテルに泊まれる！楽天トラベルふるさと納税クーポンの賢い使い方、月別・季節別・目的別の厳選おすすめ宿を徹底解説。",
    url: `${baseUrl}/furusato/`,
    siteName: "旅宿クラウド",
    type: "article",
  },
};

// 月別おすすめデータ
const MONTHLY_RECOMMENDATIONS = [
  {
    month: "1月・2月",
    title: "真冬の雪見露天風呂＆極上冬グルメ（カニ・フグ・寒ブリ）",
    tag: "真冬の温泉ごもり",
    description: "白銀の雪景色に包まれる絶景雪見風呂や、越前がに・松葉ガニ・とらふぐなど冬の味覚の王様を堪能する旅。寒さが厳しい季節だからこそ、ふるさと納税でワンランク上の名旅館へ。",
    popularAreas: ["北海道（登別・定山渓）", "東北（乳頭温泉・銀山温泉・秋保）", "北陸（加賀・山代・あわら）", "城崎・天橋立"],
    sampleBudget: "寄付額 50,000円〜150,000円（クーポン 15,000円〜45,000円分）"
  },
  {
    month: "3月・4月",
    title: "春の桜花爛漫＆早春の息吹を感じる温泉旅",
    tag: "桜・春の芽吹き",
    description: "桜の名所や庭園自慢の宿で、春の訪れを満喫。卒業旅行や新年度の門出祝いにも最適。気候も穏やかになり、露天風呂からの景色が最も華やかになる季節です。",
    popularAreas: ["京都（嵐山・東山）", "伊豆・熱海（河津桜・染井吉野）", "奈良・吉野山", "熊本（阿蘇・黒川温泉）"],
    sampleBudget: "寄付額 40,000円〜100,000円（クーポン 12,000円〜30,000円分）"
  },
  {
    month: "5月・6月",
    title: "初夏の新緑・絶景ドライブ＆爽快高原ステイ",
    tag: "新緑・避暑の先取り",
    description: "ゴールデンウィークの思い出作りや、初夏の眩しい青葉に包まれる森林浴リフレッシュ。混雑が落ち着く初夏の平日旅行にクーポンを使うのも賢い選択です。",
    popularAreas: ["軽井沢・草津温泉", "那須・日光・鬼怒川", "信州（上高地・白馬）", "富士五湖・箱根"],
    sampleBudget: "寄付額 30,000円〜80,000円（クーポン 9,000円〜24,000円分）"
  },
  {
    month: "7月・8月",
    title: "夏休みファミリー旅行＆南国ビーチ・高原リゾート",
    tag: "夏休み・水遊び・花火",
    description: "家族で楽しむプール付き大型リゾートや、沖縄の透明度抜群の美ら海、北海道の富良野ラベンダー畑。高単価になりがちな夏休みハイシーズンこそふるさと納税クーポンの割引恩恵が絶大。",
    popularAreas: ["沖縄本島・恩納村・宮古島", "北海道（富良野・美瑛・トマム）", "淡路島・白浜", "伊豆白浜・熱海花火"],
    sampleBudget: "寄付額 60,000円〜200,000円（クーポン 18,000円〜60,000円分）"
  },
  {
    month: "9月・10月",
    title: "錦秋の紅葉絶景＆実りの秋・贅沢グルメ三昧",
    tag: "紅葉・秋の美食",
    description: "山々が鮮やかに染まる紅葉グラデーションと、松茸・新米・ブランド牛・戻りカツオなど食欲の秋を堪能。涼しく過ごしやすい秋は、温泉めぐりや街歩きにも最高のベストシーズン。",
    popularAreas: ["日光・中禅寺湖", "信州・乗鞍・美ヶ原", "東北（八幡平・鳴子温泉）", "京都（洛北・高尾）"],
    sampleBudget: "寄付額 50,000円〜120,000円（クーポン 15,000円〜36,000円分）"
  },
  {
    month: "11月・12月",
    title: "年末駆け込み寄付の決定版！翌年使える旅のストック",
    tag: "年末最大チャンス",
    description: "年間控除枠のラストスパート！「どこに寄付するか迷っている」「今年の枠を使い切りたい」方は、有効期限最長3年間の宿泊クーポンに変えておくのが一番損をしない鉄則ルートです。",
    popularAreas: ["全国47都道府県の全温泉地", "箱根・湯河原", "有馬温泉・城崎", "由布院・別府"],
    sampleBudget: "寄付額 50,000円〜300,000円以上（枠をまとめて消化）"
  }
];

// 目的別おすすめデータ
const PURPOSE_CATEGORIES = [
  {
    icon: "👑",
    title: "憧れの最高峰ラグジュアリー宿・老舗名旅館",
    desc: "一度は泊まってみたい名門旅館や5つ星リゾート。ふるさと納税で数万円のクーポンを活用すれば、普段は手の届かない憧れのスイートルームや離れの客室に手が届きます。",
    targets: ["結婚記念日・銀婚式", "親孝行・還暦祝い", "自分へのご褒美ステイ"],
    keywords: "離れ・専用庭園・バトラーサービス・客室半露天"
  },
  {
    icon: "♨️",
    title: "客室露天風呂・源泉かけ流し付きプライベート温泉",
    desc: "誰にも邪魔されず、24時間好きな時に名湯を満喫できる客室露天風呂。大浴場が苦手な方やおこもりステイを重視したいカップル・ご夫婦に絶大な人気を誇ります。",
    targets: ["カップル・夫婦旅行", "マタニティ旅行", "静寂を愛する大人の湯治"],
    keywords: "自家源泉・ウッドデッキ露天・オーシャンビュー風呂"
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "子連れ歓迎・3世代で楽しむファミリーリゾート",
    desc: "キッズスペース、屋内温水プール、部屋食プラン、充実のバイキングなど、子どもも大人も大満足できる設備が充実した宿。旅行費用がかさむ家族旅行の家計を強力サポート。",
    targets: ["赤ちゃんの温泉デビュー", "小学生の夏休み", "祖父母との3世代旅行"],
    keywords: "ウェルカムベビーのお宿・ファミリールーム・バイキング"
  },
  {
    icon: "🥩",
    title: "ご当地の旬を極める贅沢グルメ旅（ブランド牛・海鮮）",
    desc: "米沢牛・飛騨牛・近江牛などの極上ブランド和牛や、朝獲れの伊勢海老・アワビ・寒ブリなど、その土地でしか味わえない極上料理を懐石や炭火焼きで贅沢にいただく旅。",
    targets: ["食通グルメ仲間", "美味しいもの巡り", "記念日のディナー"],
    keywords: "A5ランク黒毛和牛・地魚舟盛り・料理長特選会席"
  },
  {
    icon: "🐶",
    title: "愛犬・ペットと一緒に泊まれるドッグリゾート",
    desc: "愛犬専用ドッグラン、足洗い場、一緒に食べられるペット用ご飯など、家族の一員であるワンちゃんと気兼ねなく過ごせるリゾートやコテージもふるさと納税の対象。",
    targets: ["愛犬同伴旅行", "大型犬・多頭飼い", "自然豊かなコテージステイ"],
    keywords: "ドッグラン完備・室内同伴OK・ペットアメニティ"
  },
  {
    icon: "💆",
    title: "絶景インフィニティ温泉＆極上サウナ・ととのい宿",
    desc: "海や湖と一体になるインフィニティ露天風呂や、セルフロウリュ完備の本格フィンランド式サウナ、富士山を望む外気浴デッキなど、究極のリフレッシュと癒やしを約束。",
    targets: ["サ活・サウナー", "週末リフレッシュ", "一人旅・女子旅"],
    keywords: "セルフロウリュ・水風呂完備・絶景外気浴デッキ"
  }
];

// 季節別おすすめエリア
const SEASONAL_REGIONS = [
  {
    season: "冬（12月〜2月）",
    area: "北海道・東北・北陸の雪見名湯＆越前・松葉ガニ",
    features: "雪深い渓谷の露天風呂から眺める粉雪、熱々の郷土鍋や日本海の旬ガニ。冬の日本の情緒が最も凝縮されたエリア。"
  },
  {
    season: "春（3月〜5月）",
    area: "京都・伊豆・奈良の古都桜＆富士を望むリゾート",
    features: "歴史ある寺社仏閣のしだれ桜、伊豆の温暖な海岸線と金目鯛、富士山と満開の桜のコラボレーション。"
  },
  {
    season: "夏（6月〜8月）",
    area: "沖縄・八重山諸島＆北海道・信州の高原避暑地",
    features: "エメラルドグリーンのサンゴ礁ビーチリゾート、白樺林に囲まれた爽やかな軽井沢や上高地の清流ステイ。"
  },
  {
    season: "秋（9月〜11月）",
    area: "箱根・日光・信州・九州の錦秋紅葉＆美食温泉",
    features: "芦ノ湖や中禅寺湖を彩る紅葉パノラマ、由布院や黒川温泉の秋色そぞろ歩き、実りの恵みを味わう会席料理。"
  }
];

export default function FurusatoPage() {
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: `${baseUrl}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "楽天トラベルふるさと納税宿泊クーポン完全攻略ガイド",
        item: `${baseUrl}/furusato/`,
      },
    ],
  };

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "楽天トラベルのふるさと納税クーポンの実質負担が2,000円になる仕組みとは？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ふるさと納税制度では、年間の寄付総額のうち2,000円を超える部分について、原則として所得税の還付および住民税の控除が受けられます。寄付金額の最大30%相当の楽天トラベル宿泊クーポンが進呈されるため、上限額の範囲内であれば自己負担実質2,000円のみで宿泊券クーポンを獲得できます。"
        }
      },
      {
        "@type": "Question",
        name: "すでに予約済みの宿泊予約にふるさと納税クーポンを後から適用できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、楽天トラベルのふるさと納税クーポンは「予約後のあとから適用」に対応しています。予約詳細画面から獲得したふるさと納税クーポンを選択して再計算するだけで、予約を取り直すことなく割引が適用されます。"
        }
      },
      {
        "@type": "Question",
        name: "ふるさと納税宿泊クーポンの有効期限はどのくらいありますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "楽天トラベルのふるさと納税クーポンは、寄付翌日から「最長3年間」有効です。年末の駆け込み寄付でクーポンだけ確保しておき、翌年や翌々年のゴールデンウィーク・夏休み・記念日旅行にゆっくり使うことが可能です。"
        }
      },
      {
        "@type": "Question",
        name: "楽天の「5と0のつく日」クーポンや他の割引と併用できますか？",
        acceptedAnswer: {
          "@type": "Answer",
          text: "はい、楽天トラベルでは自治体発行クーポン（ふるさと納税クーポン）と、楽天トラベルが発行する他のキャンペーンクーポン（例: 宿クーポンや5と0のつく日クーポンなど）の併用が可能なプランが多数用意されています。併用することで半額以下の破格で宿泊することも可能です。"
        }
      }
    ]
  };

  return (
    <div className="space-y-12 md:space-y-16 max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-10">
      {/* 構造化データ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs text-emerald-950/60 flex items-center gap-2">
        <Link href="/" className="hover:text-emerald-900 transition underline underline-offset-2">ホーム</Link>
        <span>›</span>
        <span className="text-emerald-950 font-bold">ふるさと納税宿泊クーポン完全攻略</span>
      </nav>

      {/* ヒーローヘッダー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-950 via-emerald-900 to-amber-950 p-8 md:p-12 text-white shadow-xl border border-amber-500/30">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-400/10 rounded-full filter blur-3xl pointer-events-none" />
        
        <div className="relative space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-teal-950 text-xs font-black tracking-wider uppercase shadow-md">
            <span>🎁</span> <span>実質自己負担2,000円で泊まる極意</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight">
            楽天トラベルふるさと納税<br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent">
              宿泊クーポン完全活用ガイド
            </span>
          </h1>

          <p className="text-emerald-100/90 text-sm md:text-base leading-relaxed font-medium">
            寄付金額の最大30%が宿泊割引クーポンとして即座に還元！有効期限は最長3年間、あとから予約への適用もOK。
            憧れの高級旅館・露天風呂付き客室・ご当地美食ステイを、月別・目的別・季節別の切り口で徹底ナビゲートします。
          </p>

          <div className="pt-3 flex flex-wrap items-center gap-3">
            <a
              href={AFFILIATE_FURUSATO_URL}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm md:text-base font-black text-teal-950 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-300 hover:from-amber-300 hover:to-yellow-200 rounded-2xl shadow-xl transition transform hover:-translate-y-0.5"
            >
              <span>🎟️ 楽天ふるさと納税トラベル公式を見る</span>
              <span>↗</span>
            </a>
            <a
              href="#monthly-section"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl transition"
            >
              <span>📅 月別おすすめを見る</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3つの圧倒的メリット */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-amber-500/20 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-2xl font-black">
            💰
          </div>
          <h3 className="text-base font-bold text-emerald-950">実質2,000円で高級宿に泊まれる</h3>
          <p className="text-xs text-emerald-950/70 leading-relaxed">
            控除上限額の範囲内であれば、寄付総額から自己負担2,000円を除いた全額が税金控除。寄付額の最大30%相当のクーポンがもらえるため実質負担を最小限に抑えて憧れの宿に宿泊できます。
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-teal-500/20 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-2xl font-black">
            🔄
          </div>
          <h3 className="text-base font-bold text-emerald-950">予約完了後でも「あとから適用」可能</h3>
          <p className="text-xs text-emerald-950/70 leading-relaxed">
            「先に宿の部屋だけ押さえておきたい」という場合でも安心。予約した後に寄付を行ってクーポンを獲得すれば、予約詳細画面からワンクリックで後から割引を適用できます。
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-emerald-500/20 shadow-sm space-y-3">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-black">
            ⏳
          </div>
          <h3 className="text-base font-bold text-emerald-950">有効期限はたっぷり最長3年間</h3>
          <p className="text-xs text-emerald-950/70 leading-relaxed">
            クーポンの有効期限は寄付日の翌日から最大3年間と非常に長いため、年末の枠消化で寄付しておき、翌年の大型連休や記念日旅行の計画に合わせてじっくり使用可能です。
          </p>
        </div>
      </section>

      {/* 楽天トラベルふるさと納税 3ステップ利用手順 */}
      <section className="bg-emerald-950/5 border border-emerald-950/10 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-teal-800 uppercase tracking-widest block">HOW TO USE</span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950">
            かんたん3ステップ！ふるさと納税クーポンの使い方
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-emerald-950/10 shadow-sm space-y-2">
            <span className="inline-block text-xs font-black text-amber-700 bg-amber-100 px-3 py-1 rounded-full">STEP 1</span>
            <h4 className="text-sm font-bold text-emerald-950">寄付上限額を確認＆自治体へ寄付</h4>
            <p className="text-xs text-emerald-950/70 leading-relaxed">
              年収や家族構成からシミュレーターで寄付上限額を確認し、泊まりたいホテル・温泉旅館のある自治体に寄付を申し込みます。
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-emerald-950/10 shadow-sm space-y-2">
            <span className="inline-block text-xs font-black text-teal-700 bg-teal-100 px-3 py-1 rounded-full">STEP 2</span>
            <h4 className="text-sm font-bold text-emerald-950">クーポンを即時獲得（自動付与）</h4>
            <p className="text-xs text-emerald-950/70 leading-relaxed">
              寄付完了後、楽天会員IDに寄付金額の最大30%相当の「楽天トラベル宿泊クーポン」が即座に自動付与されます（紙の発送待ちは不要）。
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-emerald-950/10 shadow-sm space-y-2">
            <span className="inline-block text-xs font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">STEP 3</span>
            <h4 className="text-sm font-bold text-emerald-950">宿泊予約時にクーポンを選択して割引</h4>
            <p className="text-xs text-emerald-950/70 leading-relaxed">
              対象の宿泊施設を予約する際、支払いステップで獲得したクーポンを選択。その場で宿泊代金が大幅値引きされます。
            </p>
          </div>
        </div>

        <div className="text-center pt-2">
          <a
            href={AFFILIATE_FURUSATO_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs md:text-sm font-bold text-white bg-teal-900 hover:bg-teal-800 rounded-xl shadow transition"
          >
            <span>👉 楽天トラベルで寄付限度額シミュレーター＆対象宿を確認する</span>
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* 📅 月別おすすめガイド */}
      <section id="monthly-section" className="space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-amber-700 uppercase tracking-widest block">MONTHLY CALENDAR</span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>📅</span> <span>【月別】ふるさと納税で行くベストシーズン宿・旅カレンダー</span>
          </h2>
          <p className="text-xs md:text-sm text-emerald-950/70 font-medium">
            季節の移ろいに合わせて、最も旬な体験ができるエリアと寄付額の目安をご紹介します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MONTHLY_RECOMMENDATIONS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-emerald-950/10 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-base font-black text-amber-800 bg-amber-100 px-3 py-1 rounded-xl font-journal-serif">
                    {item.month}
                  </span>
                  <span className="text-[10px] font-bold text-teal-800 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-bold text-emerald-950 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-emerald-950/75 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-1 pt-1 border-t border-emerald-950/5">
                  <span className="text-[11px] font-bold text-emerald-950 block">おすすめ人気エリア:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.popularAreas.map((area, aIdx) => (
                      <span key={aIdx} className="text-[11px] bg-emerald-50 text-emerald-900 border border-emerald-200/60 px-2 py-0.5 rounded-md">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-emerald-950/10 flex items-center justify-between text-xs">
                <span className="text-[11px] text-emerald-950/60 font-medium">目安寄付額: {item.sampleBudget}</span>
                <a
                  href={AFFILIATE_FURUSATO_URL}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                >
                  <span>対象宿を探す</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🎯 目的別おすすめ特集 */}
      <section className="space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-teal-800 uppercase tracking-widest block">PURPOSE & THEMES</span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>🎯</span> <span>【目的別】こだわりテーマで選ぶふるさと納税トラベル</span>
          </h2>
          <p className="text-xs md:text-sm text-emerald-950/70 font-medium">
            誰と行くか、どんな旅にしたいかに合わせて最適な宿泊プランをお選びいただけます。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PURPOSE_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-emerald-950/10 shadow-sm space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="text-sm font-bold text-emerald-950 leading-snug">{cat.title}</h3>
                </div>
                <p className="text-xs text-emerald-950/75 leading-relaxed">{cat.desc}</p>
                <div className="bg-amber-50/50 p-2.5 rounded-xl border border-amber-500/10 space-y-1">
                  <span className="text-[10px] font-bold text-amber-900 block">こんな旅行におすすめ:</span>
                  <ul className="text-[11px] text-emerald-950/80 space-y-0.5">
                    {cat.targets.map((t, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-1">
                        <span className="text-amber-600 text-[10px]">✔</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pt-2 border-t border-emerald-950/5">
                <span className="text-[10px] text-teal-800/80 font-mono block">キーワード: {cat.keywords}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🌸 季節別おすすめエリアまとめ */}
      <section className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-amber-700 uppercase tracking-widest block">FOUR SEASONS IN JAPAN</span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>🍁</span> <span>【季節別】日本の四季を五感で味わうおすすめ旅行先</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SEASONAL_REGIONS.map((s, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-950/5 space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-teal-900 bg-teal-100 px-2.5 py-0.5 rounded-full">{s.season}</span>
                <h4 className="text-sm font-bold text-emerald-950">{s.area}</h4>
              </div>
              <p className="text-xs text-emerald-950/75 leading-relaxed">{s.features}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ❓ よくある質問（FAQ） */}
      <section className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
        <div className="space-y-1">
          <span className="text-[10px] font-extrabold text-teal-800 uppercase tracking-widest block">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span> <span>ふるさと納税宿泊クーポンに関するよくある質問</span>
          </h2>
        </div>

        <div className="space-y-4 divide-y divide-emerald-950/10">
          <div className="pt-4 first:pt-0 space-y-1.5">
            <h4 className="text-sm font-bold text-emerald-950 flex items-start gap-2">
              <span className="text-amber-600 font-black">Q.</span>
              <span>なぜ実質2,000円で高級ホテルや温泉旅館に泊まれるのですか？</span>
            </h4>
            <p className="text-xs text-emerald-950/75 leading-relaxed pl-5">
              ふるさと納税は、年間の寄付総額から自己負担金2,000円を差し引いた金額が、翌年の所得税還付や住民税控除として全額戻ってくる国の制度です。寄付額の最大30%相当の楽天トラベル宿泊クーポンが進呈されるため、上限額の範囲内であれば実質負担わずか2,000円で宿泊できる仕組みです。
            </p>
          </div>

          <div className="pt-4 space-y-1.5">
            <h4 className="text-sm font-bold text-emerald-950 flex items-start gap-2">
              <span className="text-amber-600 font-black">Q.</span>
              <span>先に予約してしまった宿にも、後からふるさと納税クーポンを適用できますか？</span>
            </h4>
            <p className="text-xs text-emerald-950/75 leading-relaxed pl-5">
              はい、可能です。楽天トラベルのふるさと納税クーポンは「予約後のあとから適用」に完全対応しています。行きたい宿を先に予約しておき、後から寄付してクーポンを獲得後、予約確認画面からワンクリックで適用できます。
            </p>
          </div>

          <div className="pt-4 space-y-1.5">
            <h4 className="text-sm font-bold text-emerald-950 flex items-start gap-2">
              <span className="text-amber-600 font-black">Q.</span>
              <span>クーポンの有効期限はいつまでですか？ 年末に寄付しても来年使えますか？</span>
            </h4>
            <p className="text-xs text-emerald-950/75 leading-relaxed pl-5">
              クーポンの有効期限は寄付翌日から「最長3年間」です。12月の年末調整時期に年間の控除枠を使い切るためにまとめて寄付しておき、翌年や翌々年のゴールデンウィーク、夏休み、シルバーウィークなどの旅行でゆっくり利用できます。
            </p>
          </div>

          <div className="pt-4 space-y-1.5">
            <h4 className="text-sm font-bold text-emerald-950 flex items-start gap-2">
              <span className="text-amber-600 font-black">Q.</span>
              <span>「5と0のつく日」セールなどの他の割引クーポンと併用できますか？</span>
            </h4>
            <p className="text-xs text-emerald-950/75 leading-relaxed pl-5">
              自治体クーポン（ふるさと納税クーポン）と楽天トラベル公式発行の割引クーポンは、併用可能なプランが多数用意されています。5と0のつく日の最大20%OFFクーポンや宿限定クーポンと組み合わせることで、信じられないほどの割引価格で予約することができます。
            </p>
          </div>
        </div>
      </section>

      {/* 特大予約CTAバナー */}
      <section className="bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 rounded-3xl p-8 md:p-10 text-white shadow-xl text-center space-y-4 border border-amber-400">
        <span className="inline-block text-xs font-black uppercase tracking-widest bg-black/20 px-3.5 py-1 rounded-full">
          お得な旅のチャンスを逃さない！
        </span>
        <h3 className="text-2xl md:text-3xl font-black font-journal-serif">
          楽天トラベル ふるさと納税クーポンを今すぐチェック
        </h3>
        <p className="text-amber-100 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
          実質2,000円で憧れの高級旅館やリゾートホテルへ。寄付上限額シミュレーターで今年の枠を確認して、お得な宿泊クーポンをゲットしましょう！
        </p>
        <div className="pt-3">
          <a
            href={AFFILIATE_FURUSATO_URL}
            target="_blank"
            rel="sponsored noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 text-base md:text-lg font-black text-amber-950 bg-white hover:bg-amber-50 rounded-2xl shadow-2xl transition transform hover:scale-105"
          >
            <span>👉 楽天ふるさと納税で対象宿・クーポンを見る</span>
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* 画面下部 スマホ追従CTAバー */}
      <FloatingMobileCTA
        affiliateUrl={AFFILIATE_FURUSATO_URL}
        hotelName="楽天トラベル ふるさと納税宿泊クーポン"
        price="実質2,000円自己負担"
      />
    </div>
  );
}
