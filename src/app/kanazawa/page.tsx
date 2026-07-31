import fs from "fs";
import path from "path";
import Link from "next/link";
import { Metadata } from "next";

interface Post {
  id: string;
  title: string;
  hotel_name: string;
  description?: string;
  review: string;
  image: string;
  other_images: string[];
  affiliate_url: string;
  prefecture: string;
  area: string;
  categories: string[];
  price: string | number;
  rating: string | number;
  date: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://croud-travel.pages.dev";

export const metadata: Metadata = {
  title: "【金沢旅行 完全計画ガイド】1泊2日・2泊3日モデルコース＆観光・海鮮グルメ・車なし徒歩案内・おすすめホテル ｜ 旅びより",
  description:
    "金沢旅行の計画をステップバイステップで完全サポート！金沢の魅力、1泊2日/2泊3日モデルコース、車なし徒歩観光、兼六園（所要時間）・近江町市場（食べ歩き）・ひがし茶屋街・21世紀美術館、のどぐろ＆寿司ランチ、雨の日・雪の観光法から楽天トラベルで予約できるおすすめホテル・温泉宿まで網羅。",
  keywords: [
    "金沢 観光", "金沢 旅行", "金沢 旅行 おすすめ", "金沢 何がある", "金沢 デート", "金沢 温泉", "金沢 グルメ",
    "金沢 1泊2日", "金沢 2泊3日", "金沢 モデルコース", "金沢 観光 日数", "金沢 車なし", "金沢 徒歩観光",
    "金沢 初めて", "金沢 ベストシーズン", "金沢 紅葉", "金沢 雪", "金沢 冬 観光", "金沢 春 観光", "金沢 雨",
    "東京 金沢 新幹線", "東京 金沢 飛行機", "東京 金沢 安く行く方法", "金沢 新幹線 時間", "金沢 フリーきっぷ",
    "金沢 ホテル おすすめ", "金沢駅 ホテル", "金沢 カップル ホテル", "金沢 温泉宿", "金沢 コスパ ホテル",
    "金沢 朝食 おいしい ホテル", "金沢 大浴場 ホテル", "金沢 露天風呂付き客室", "金沢 観光スポット",
    "兼六園 所要時間", "近江町市場 食べ歩き", "ひがし茶屋街 食べ歩き", "金沢 21世紀美術館", "金沢 雨の日 観光",
    "金沢 寿司 ランチ", "金沢 海鮮丼", "金沢 のどぐろ", "金沢 居酒屋", "金沢 カフェ", "金沢 夜ご飯", "金沢 お土産",
    "金沢 駐車場", "金沢 夜景", "金沢 温泉 日帰り", "楽天トラベル"
  ],
  alternates: { canonical: `${baseUrl}/kanazawa/` },
  openGraph: {
    title: "金沢旅行 完全計画サポートガイド ｜ 旅びより",
    description: "金沢旅行を思い立った瞬間から宿泊予約まで。モデルコース・車なし散策・海鮮グルメ・おすすめホテル徹底比較。",
    url: `${baseUrl}/kanazawa/`,
    siteName: "旅びより",
    type: "article",
  },
};

function loadKanazawaPosts(): Post[] {
  try {
    const dataPath = path.join(process.cwd(), "public", "data", "posts.json");
    if (fs.existsSync(dataPath)) {
      const posts: Post[] = JSON.parse(fs.readFileSync(dataPath, "utf8"));
      return posts.filter(
        (p) =>
          p.prefecture?.includes("石川") ||
          p.prefecture?.includes("金沢") ||
          p.area?.includes("金沢") ||
          p.title?.includes("金沢") ||
          p.hotel_name?.includes("金沢")
      );
    }
  } catch (e) {
    console.error("Failed to load posts for Kanazawa page:", e);
  }
  return [];
}

export default function KanazawaGuidePage() {
  const posts = loadKanazawaPosts();

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "石川県 観光ガイド", item: `${baseUrl}/prefectures/ishikawa/` },
      { "@type": "ListItem", position: 3, name: "金沢旅行 完全計画ガイド", item: `${baseUrl}/kanazawa/` },
    ],
  };

  const faqList = [
    {
      q: "初めての金沢旅行でおすすめの観光コースや日数・モデルコースは？",
      a: "初めての金沢旅行は「1泊2日」が王道モデルコースです。1日目は金沢駅から城下町バスで近江町市場（海鮮丼ランチ）→ひがし茶屋街（徒歩散策＆カフェ）→兼六園・金沢城公園。2日目は金沢21世紀美術館（所要時間約1.5時間）→長町武家屋敷跡→金沢駅でお土産購入という流れが効率的です。2泊3日なら加賀温泉郷や和倉温泉まで足を伸ばすのもおすすめです。"
    },
    {
      q: "金沢旅行は車なし・徒歩観光でも回れますか？",
      a: "はい、金沢は「車なし・徒歩観光」に最も適した街の一つです。金沢駅から主要観光スポット（近江町市場、ひがし茶屋街、兼六園、21世紀美術館）までは城下まち金沢周遊バス（金沢フリーきっぷ/1日乗車券）が数分おきに運行しており、徒歩圏内に観光名所が集中しています。"
    },
    {
      q: "兼六園の所要時間や見どころはどれくらいですか？",
      a: "兼六園の標準的な見学所要時間は「約1時間〜1時間半」です。徽軫灯籠（ことじとうろう）や唐崎の松、霞ヶ池などの見どころを中心に巡ることができます。春の桜、秋の紅葉、冬の雪吊りと四季折々のベストシーズンごとに異なる表情が楽しめます。"
    },
    {
      q: "東京から金沢へ安く行く方法や新幹線の所要時間は？",
      a: "東京駅から金沢駅までは「北陸新幹線（かがやき）」で最速約2時間25分です。安く行く方法としては、JRの「えきねっとトクだ値」や「早特チケット」を事前に予約することや、新幹線とホテルがセットになった「楽天トラベル パックツアー」を利用するのが最もコスパ抜群です。"
    },
    {
      q: "近江町市場やひがし茶屋街での食べ歩き・グルメのおすすめは？",
      a: "近江町市場では新鮮な生牡蠣やウニ、金沢名物「のどぐろ炙り串」、贅沢な海鮮丼や金沢寿司ランチが人気です。ひがし茶屋街では「箔一」の金箔ソフトクリームや、老舗和菓子店の生菓子・加賀棒茶の食べ歩き・カフェ巡りが大人気です。"
    },
    {
      q: "金沢で雨の日や冬・雪の日の観光はどう楽しめばいいですか？",
      a: "金沢は「弁当忘れても傘忘れるな」と言われるほど雨が多い街です。雨の日でも金沢21世紀美術館や金沢駅鼓門・もてなしドーム、近江町市場のアーケード街、金沢クラフト広場などのインドア施設で快適に楽しめます。雨や雪に濡れるひがし茶屋街の情緒も格別です。"
    },
    {
      q: "金沢でホテルを選ぶならどのエリア（金沢駅・兼六園・近江町市場）がおすすめ？",
      a: "新幹線利用や夜ご飯・居酒屋巡りメインなら「金沢駅周辺のホテル」、近江町市場で美味しい朝食を食べたい・早朝散策したいなら「近江町市場・武蔵ヶ辻エリア」、大浴場や温泉で癒やされたい・露天風呂付き客室でカップルデートなら「兼六園・温泉宿エリア」がおすすめです。"
    },
    {
      q: "金沢のカップル・デートにおすすめの雰囲気の良いホテルや温泉宿は？",
      a: "カップルデートには、天然温泉大浴場とサウナを備えた和モダン宿「天然温泉 加賀の宝泉 御宿 野乃金沢」や、兼六園すぐ近くのクラシックホテル「金沢白鳥路 ホテル山楽」、露天風呂付き客室がある「湯湧温泉」の隠れ家旅館が大変人気です。"
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

      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures/ishikawa" className="hover:text-teal-800 transition">石川県</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">金沢旅行 完全計画ガイド</span>
      </nav>

      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-950 via-emerald-900 to-amber-950 p-8 md:p-14 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-amber-400 text-teal-950 px-3.5 py-1 rounded-full uppercase shadow">
            金沢旅行 計画サポート 🌸
          </span>
          <span className="text-xs font-bold text-amber-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            1泊2日・2泊3日モデルコース対応
          </span>
          <span className="text-xs font-bold text-emerald-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            車なし・徒歩観光完全解説
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">
          【金沢旅行 完全計画ガイド】<br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-teal-100 bg-clip-text text-transparent">
            モデルコース・観光スポット・海鮮グルメ・宿選びから予約まで
          </span>
        </h1>

        <p className="text-emerald-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          加賀百万石の城下町・金沢。「金沢には何がある？」「兼六園の所要時間は？」「車なしでも楽しめる？」「雨や雪の日の散策は？」といった疑問をすべて解決。金沢旅行の計画を7つのステップでスムーズにサポートします。
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 pt-4 border-t border-white/10 text-center">
          <a href="#step1" className="p-2 bg-white/10 hover:bg-amber-500/30 rounded-xl transition space-y-1 border border-white/10">
            <span className="block text-[10px] font-extrabold text-amber-300">STEP 1</span>
            <span className="block text-xs font-bold">旅行を考える</span>
          </a>
          <a href="#step2" className="p-2 bg-white/10 hover:bg-amber-500/30 rounded-xl transition space-y-1 border border-white/10">
            <span className="block text-[10px] font-extrabold text-amber-300">STEP 2</span>
            <span className="block text-xs font-bold">金沢の魅力</span>
          </a>
          <a href="#step3" className="p-2 bg-white/10 hover:bg-amber-500/30 rounded-xl transition space-y-1 border border-white/10">
            <span className="block text-[10px] font-extrabold text-amber-300">STEP 3</span>
            <span className="block text-xs font-bold">モデルコース</span>
          </a>
          <a href="#step4" className="p-2 bg-white/10 hover:bg-amber-500/30 rounded-xl transition space-y-1 border border-white/10">
            <span className="block text-[10px] font-extrabold text-amber-300">STEP 4</span>
            <span className="block text-xs font-bold">観光スポット</span>
          </a>
          <a href="#step5" className="p-2 bg-white/10 hover:bg-amber-500/30 rounded-xl transition space-y-1 border border-white/10">
            <span className="block text-[10px] font-extrabold text-amber-300">STEP 5</span>
            <span className="block text-xs font-bold">グルメ＆カフェ</span>
          </a>
          <a href="#step6" className="p-2 bg-white/10 hover:bg-amber-500/30 rounded-xl transition space-y-1 border border-white/10">
            <span className="block text-[10px] font-extrabold text-amber-300">STEP 6</span>
            <span className="block text-xs font-bold">ホテル選び</span>
          </a>
          <a href="#step7" className="p-2 bg-amber-500/40 hover:bg-amber-500/60 rounded-xl transition space-y-1 border border-amber-400/40">
            <span className="block text-[10px] font-black text-amber-200">STEP 7</span>
            <span className="block text-xs font-black">宿泊予約</span>
          </a>
        </div>
      </section>

      <section id="step1" className="scroll-mt-24 bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-emerald-950/10 pb-4">
          <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
            STEP 1 🚅
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
            金沢旅行を考える ｜ 新幹線・飛行機・安く行く方法＆アクセス
          </h2>
          <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">
            東京・大阪・名古屋から金沢へのアクセス、新幹線の所要時間、お得なフリーきっぷ、安く行く方法を解説。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-5 rounded-2xl bg-teal-50/40 border border-teal-900/10 space-y-2">
            <h3 className="text-sm font-bold text-teal-950 flex items-center gap-1.5">
              <span>🚅</span> <span>東京から金沢 新幹線＆時間</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              東京駅から北陸新幹線「かがやき」で最速約2時間25分、「はくたか」で約3時間。乗換なしでダイレクトに金沢駅へ到着します。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-teal-50/40 border border-teal-900/10 space-y-2">
            <h3 className="text-sm font-bold text-teal-950 flex items-center gap-1.5">
              <span>✈️</span> <span>東京 金沢 飛行機＆アクセス</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              羽田空港から小松空港まで約1時間。小松空港から金沢駅までは特急リムジンバスで約40分です。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-500/20 space-y-2">
            <h3 className="text-sm font-bold text-amber-900 flex items-center gap-1.5">
              <span>💰</span> <span>東京 金沢 安く行く方法</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              JR「えきねっとトクだ値」や事前予約チケットの活用、または「新幹線＋ホテルがセット」になった楽天トラベルのダイナミックパッケージが最もコスパ良くお得です。
            </p>
          </div>
        </div>
      </section>

      <section id="step2" className="scroll-mt-24 bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-emerald-950/10 pb-4">
          <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
            STEP 2 ✨
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
            金沢の魅力 ｜ ベストシーズン・紅葉・冬の雪景色・春の桜・雨の風情
          </h2>
          <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">
            「金沢 何がある？」「初めての金沢旅行は何が魅力？」に答える、四季折々の絶景と伝統文化。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-950/5 space-y-2">
            <h3 className="text-sm font-bold text-emerald-950 flex items-center gap-1.5">
              <span>🌸</span> <span>金沢 春 観光＆ベストシーズン</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              4月上旬〜中旬は兼六園や金沢城公園の桜が見頃を迎えます。新緑の城下町散策にも心地よく、気候が安定している春と秋は金沢のベストシーズンです。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/40 border border-amber-950/5 space-y-2">
            <h3 className="text-sm font-bold text-amber-950 flex items-center gap-1.5">
              <span>🍁</span> <span>金沢 紅葉（11月上旬〜下旬）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              兼六園の山紅葉やモミジが赤く染まり、霞ヶ池の水面に映り込む紅葉ライトアップは息を呑む美しさ。カップルデートにもぴったり。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <span>❄️</span> <span>金沢 雪・冬 観光（12月〜2月）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              兼六園名物「雪吊り」と深々と降る雪景色は冬の金沢の風物詩。解禁されたカニ（加能ガニ・香箱ガニ）やのどぐろが最も美味しい季節です。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-teal-50/40 border border-teal-900/10 space-y-2">
            <h3 className="text-sm font-bold text-teal-950 flex items-center gap-1.5">
              <span>☔</span> <span>金沢 雨・雨の日 観光</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              「弁当忘れても傘忘れるな」と言われる金沢。雨に濡れるひがし茶屋街の木目が美しく映え、21世紀美術館や近江町市場など雨の日でも濡れずに楽しめるスポットが豊富です。
            </p>
          </div>
        </div>
      </section>

      <section id="step3" className="scroll-mt-24 bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-emerald-950/10 pb-4">
          <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
            STEP 3 🗺️
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
            金沢 モデルコース ｜ 1泊2日・2泊3日・車なし徒歩散策コース
          </h2>
          <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">
            初心者からデート利用まで。車なしで城下町金沢周遊バス（金沢フリーきっぷ）を使って効率良く回る王道モデルコース。
          </p>
        </div>

        <div className="space-y-6 text-xs">
          <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-300/40 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200 pb-3">
              <h3 className="text-base font-black text-amber-950 flex items-center gap-2">
                <span>📍</span> <span>王道！金沢1泊2日 モデルコース（車なし・徒歩観光）</span>
              </h3>
              <span className="text-[10px] font-extrabold bg-amber-200 text-amber-900 px-3 py-0.5 rounded-full">
                初心者＆カップル向き
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-amber-200 space-y-2">
                <span className="font-extrabold text-amber-800 block">【DAY 1】城下町の風情と海鮮グルメ</span>
                <ul className="space-y-1.5 text-emerald-950/80 leading-relaxed pl-2">
                  <li>• 11:00 金沢駅到着（鼓門・もてなしドームで記念撮影）</li>
                  <li>• 11:30 <strong className="font-bold text-amber-950">近江町市場</strong>（絶品海鮮丼・のどぐろランチ＆食べ歩き）</li>
                  <li>• 13:30 <strong className="font-bold text-amber-950">ひがし茶屋街</strong>（出格子の街並み徒歩散策＆金箔ソフトクリーム・町家カフェ）</li>
                  <li>• 16:00 <strong className="font-bold text-amber-950">兼六園</strong>（所要時間1.5時間・霞ヶ池＆徽軫灯籠）</li>
                  <li>• 18:00 金沢駅・片町で<strong className="font-bold text-amber-950">居酒屋・のどぐろ・金沢料理ディナー</strong></li>
                  <li>• 20:00 金沢市内のホテル・温泉宿チェックイン</li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-xl border border-amber-200 space-y-2">
                <span className="font-extrabold text-amber-800 block">【DAY 2】現代アートと武家屋敷散策</span>
                <ul className="space-y-1.5 text-emerald-950/80 leading-relaxed pl-2">
                  <li>• 09:00 <strong className="font-bold text-amber-950">金沢21世紀美術館</strong>（スイミング・プール＆アート鑑賞/所要時間1.5時間）</li>
                  <li>• 11:30 <strong className="font-bold text-amber-950">長町武家屋敷跡</strong>（土塀の広がる情緒ある街並みを徒歩散策）</li>
                  <li>• 13:00 <strong className="font-bold text-amber-950">金沢寿司ランチ</strong>（金沢港直送の廻る寿司・職人握り）</li>
                  <li>• 14:30 金沢駅百番街「あんと」で<strong className="font-bold text-amber-950">銘菓・加賀棒茶お土産買い出し</strong></li>
                  <li>• 16:00 新幹線で帰路へ</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-teal-50/40 border border-teal-200 space-y-3">
            <h3 className="text-sm font-bold text-teal-950 flex items-center gap-2">
              <span>🧭</span> <span>ゆっくり愉しむ！金沢2泊3日 モデルコース（加賀温泉・和倉温泉足を伸ばし）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              金沢市内1泊＋湯湧温泉または和倉温泉・加賀温泉郷1泊の組み合わせ。昼は金沢市内の名所巡り、夜は名湯温泉旅館で露天風呂と会席料理を贅沢に堪能する大人旅。
            </p>
          </div>
        </div>
      </section>

      <section id="step4" className="scroll-mt-24 bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-emerald-950/10 pb-4">
          <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
            STEP 4 🏯
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
            金沢 観光スポット ｜ 兼六園 所要時間・21世紀美術館・ひがし茶屋街・近江町市場
          </h2>
          <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">
            見逃せない金沢の主要観光名所の見どころ、滞在所要時間、駐車場・アクセス情報。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="p-5 rounded-2xl bg-emerald-50/30 border border-emerald-950/5 space-y-2">
            <h3 className="text-sm font-extrabold text-teal-950 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-800 text-white text-[10px] flex items-center justify-center font-bold">1</span>
              <span>兼六園（けんろくえん）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed font-medium">
              <strong className="font-bold text-amber-950">所要時間：約1時間〜1.5時間</strong><br />
              加賀藩主によって造営された日本三名園の一つ。徽軫灯籠、唐崎の松、霞ヶ池など見どころ多数。春の桜や秋の紅葉ライトアップ、冬の雪吊りは感動的です。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/30 border border-emerald-950/5 space-y-2">
            <h3 className="text-sm font-extrabold text-teal-950 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-800 text-white text-[10px] flex items-center justify-center font-bold">2</span>
              <span>近江町市場（おうみちょういちば）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed font-medium">
              <strong className="font-bold text-amber-950">所要時間：約1時間〜2時間</strong><br />
              「金沢の市民の台所」として約300年続く市場。新鮮な魚介類の食べ歩き（生牡蠣・うに・のどぐろ串）や海鮮丼・寿司ランチの名店が軒を連ねます。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/30 border border-emerald-950/5 space-y-2">
            <h3 className="text-sm font-extrabold text-teal-950 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-800 text-white text-[10px] flex items-center justify-center font-bold">3</span>
              <span>ひがし茶屋街（ひがしちゃやがい）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed font-medium">
              <strong className="font-bold text-amber-950">所要時間：約1時間〜1.5時間</strong><br />
              美しい出格子の町家が並ぶ金沢を代表する茶屋街。着物での徒歩散策に大人気。箔一の「金箔ソフト」や伝統工芸ショップ、町家カフェが充実。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/30 border border-emerald-950/5 space-y-2">
            <h3 className="text-sm font-extrabold text-teal-950 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-800 text-white text-[10px] flex items-center justify-center font-bold">4</span>
              <span>金沢21世紀美術館</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed font-medium">
              <strong className="font-bold text-amber-950">所要時間：約1.5時間〜2時間</strong><br />
              レアンドロ・エルリッヒの「スイミング・プール」で有名な現代美術館。円形の開放的な建物と体感型アートでカップルや若者に大人気。
            </p>
          </div>
        </div>
      </section>

      <section id="step5" className="scroll-mt-24 bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-emerald-950/10 pb-4">
          <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
            STEP 5 🍣
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
            金沢 グルメ＆カフェ ｜ 近江町市場食べ歩き・のどぐろ・寿司ランチ・カフェ・お土産
          </h2>
          <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">
            金沢に来たら絶対味わいたい海鮮丼・のどぐろ・金沢寿司・居酒屋夜ご飯・絶景カフェ・手土産。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-5 bg-amber-50/40 rounded-2xl border border-amber-200 space-y-2">
            <h3 className="text-sm font-bold text-amber-950">🍣 金沢 寿司 ランチ・海鮮丼</h3>
            <p className="text-emerald-950/80 leading-relaxed">
              金沢港・七尾港直送の「回転寿司（まいもん寿司・もりもり寿司・すし食いねぇ！）」は回らない寿司に匹敵する極上のクオリティ。近江町市場の豪華海鮮丼も必食。
            </p>
          </div>

          <div className="p-5 bg-amber-50/40 rounded-2xl border border-amber-200 space-y-2">
            <h3 className="text-sm font-bold text-amber-950">🐟 金沢 のどぐろ・居酒屋 夜ご飯</h3>
            <p className="text-emerald-950/80 leading-relaxed">
              「白身のトロ」と称される高級魚のどぐろ。炙り刺身や塩焼き、のどぐろ釜飯は格別。片町や金沢駅周辺の居酒屋で金沢の地酒と一緒に味わう夜ご飯は最高の贅沢。
            </p>
          </div>

          <div className="p-5 bg-amber-50/40 rounded-2xl border border-amber-200 space-y-2">
            <h3 className="text-sm font-bold text-amber-950">☕ 金沢 カフェ・食べ歩き・お土産</h3>
            <p className="text-emerald-950/80 leading-relaxed">
              ひがし茶屋街の「茶房 素心」や金箔ソフト「箔一」、老舗あんころ餅「圓八」、加賀棒茶、烏骨鶏かすていらは旅のお土産・食べ歩きに絶対外せません。
            </p>
          </div>
        </div>
      </section>

      <section id="step6" className="scroll-mt-24 space-y-8 bg-gradient-to-br from-teal-900 via-emerald-950 to-amber-950 p-6 md:p-10 rounded-3xl text-white shadow-xl">
        <div id="step7" className="space-y-3 border-b border-white/10 pb-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[10px] font-extrabold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-0.5 rounded-full uppercase tracking-wider">
              STEP 6 & STEP 7 🏨
            </span>
            <span className="text-xs font-bold text-emerald-200">
              ※楽天API公式画像＆アフィリエイトリンクのみを使用
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-white">
            金沢 ホテル選び ＆ 宿泊予約（楽天トラベルで空室・最安値確認）
          </h2>

          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed font-medium">
            「金沢駅近くのホテル」「コスパ抜群ホテル」「朝食がおいしいホテル」「大浴場・温泉付き宿」「カップルにおすすめの露天風呂付き客室」まで、目的に合わせて厳選。楽天トラベルからリアルタイムの最安値・空室状況を確認して予約可能です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0, 6).map((post) => (
            <article
              key={post.id}
              className="flex flex-col justify-between border border-white/10 bg-white/5 rounded-2xl overflow-hidden shadow-lg backdrop-blur-md hover:bg-white/10 transition duration-200"
            >
              <div>
                <div className="aspect-video relative overflow-hidden bg-emerald-950 border-b border-white/10">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.hotel_name || "金沢おすすめホテル・宿"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-emerald-200 text-xs font-bold">
                      {post.hotel_name}
                    </div>
                  )}
                  <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-amber-500 text-teal-950 px-2.5 py-0.5 rounded-full shadow">
                    {post.area || "金沢エリア"}
                  </span>
                  {post.price && (
                    <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                      ¥{Number(post.price).toLocaleString()}〜
                    </span>
                  )}
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-[9px] font-bold text-emerald-200/60">
                    <span>{post.prefecture} / {post.area}</span>
                    {post.rating && (
                      <span className="text-amber-400 font-extrabold">
                        ⭐ {post.rating}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-black font-journal-serif text-white line-clamp-2">
                    {post.hotel_name}
                  </h3>
                  <p className="text-xs text-emerald-100/70 line-clamp-2">
                    {post.description || post.title}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 space-y-2">
                <a
                  href={post.affiliate_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-2.5 text-xs font-black text-teal-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow transition"
                >
                  ✈️ 楽天トラベルで最安値・空室を見る
                </a>
                <Link
                  href={`/posts/${post.id}`}
                  className="block w-full text-center py-2 text-[11px] font-bold text-white bg-white/10 hover:bg-white/20 rounded-xl transition border border-white/20"
                >
                  📖 宿泊ルポ記事を読む
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-emerald-950/10 pb-4">
          <h2 className="text-xl md:text-2xl font-black font-journal-serif text-emerald-950 flex items-center gap-2">
            <span>❓</span> <span>金沢旅行のプロが回答！よくある質問（FAQ）</span>
          </h2>
          <p className="text-xs text-emerald-950/60 leading-relaxed font-medium">
            金沢旅行のモデルコース、車なし観光、兼六園の所要時間、東京からのアクセスについてお答えします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqList.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-teal-50/40 border border-teal-900/10 space-y-2">
              <h3 className="text-sm font-bold text-teal-950 flex items-start gap-2">
                <span className="text-teal-800 font-extrabold">Q.</span>
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs text-emerald-950/80 leading-relaxed pl-6">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="p-8 rounded-3xl bg-teal-50/50 border border-teal-900/10 text-center space-y-4">
        <h3 className="text-lg font-bold font-journal-serif text-emerald-950">
          金沢旅行の準備は整いましたか？
        </h3>
        <p className="text-xs text-emerald-950/70 max-w-xl mx-auto leading-relaxed">
          楽天トラベルの限定クーポンや「5と0のつく日セール」を活用して、憧れの金沢旅行をお得に予約しましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/prefectures/ishikawa"
            className="px-8 py-3 text-xs font-bold text-white bg-teal-800 hover:bg-teal-700 rounded-xl shadow transition"
          >
            🗾 石川県・金沢の観光ハブへ戻る
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
