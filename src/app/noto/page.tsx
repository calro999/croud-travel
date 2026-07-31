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
  title: "【能登旅行 完全計画ガイド】1泊2日・2泊3日モデルコース＆和倉温泉・白米千枚田・能登島・能登丼・絶景宿おすすめ ｜ 旅びより",
  description:
    "能登旅行の計画をステップバイステップで完全サポート！世界農業遺産・能登の里山里海の魅力、1泊2日/2泊3日ドライブ＆モデルコース、車なしアクセス、和倉温泉・白米千枚田（所要時間・ライトアップあぜの万灯）・のとじま水族館・輪島朝市・見附島、能登丼＆能登牡蠣・能登牛グルメから楽天トラベル予約可能な温泉宿まで網羅。",
  keywords: [
    "能登 観光", "能登 旅行", "能登 旅行 おすすめ", "能登 何がある", "能登 デート", "能登 温泉", "能登 グルメ",
    "能登 1泊2日", "能登 2泊3日", "能登 モデルコース", "能登 ドライブ", "能登 観光 日数", "能登 車なし",
    "能登 初めて", "能登 ベストシーズン", "能登 夕日", "能登 春 観光", "能登 夏 海", "能登 秋 紅葉", "能登 冬 温泉",
    "和倉温泉", "和倉温泉 宿 おすすめ", "輪島 朝市", "白米千枚田", "千枚田 所要時間", "千枚田 ライトアップ",
    "あぜの万灯", "のとじま水族館", "能登島 観光", "見附島", "軍艦島", "九十九湾", "能登金剛 巌門",
    "のと里山空港", "金沢 能登 アクセス", "のと鉄道", "能登 フリーきっぷ", "能登丼", "能登牛",
    "能登 牡蠣 食べ歩き", "能登 海鮮丼", "能登 寿司", "能登 カフェ", "能登 お土産", "揚浜式塩田",
    "能登 温泉宿", "能登 露天風呂付き客室", "能登 オーシャンビュー ホテル", "能登 コスパ 宿", "能登 高級旅館", "楽天トラベル"
  ],
  alternates: { canonical: `${baseUrl}/noto/` },
  openGraph: {
    title: "能登旅行 完全計画サポートガイド ｜ 旅びより",
    description: "能登旅行を思い立った瞬間から宿泊予約まで。和倉温泉・白米千枚田・モデルコース・能登丼・絶景温泉宿徹底比較。",
    url: `${baseUrl}/noto/`,
    siteName: "旅びより",
    type: "article",
  },
};

function loadNotoPosts(): Post[] {
  try {
    const dataPath = path.join(process.cwd(), "public", "data", "posts.json");
    if (fs.existsSync(dataPath)) {
      const posts: Post[] = JSON.parse(fs.readFileSync(dataPath, "utf8"));
      const filtered = posts.filter(
        (p) =>
          p.prefecture?.includes("石川") ||
          p.area?.includes("能登") ||
          p.area?.includes("加賀") ||
          p.title?.includes("能登") ||
          p.title?.includes("和倉") ||
          p.hotel_name?.includes("能登") ||
          p.hotel_name?.includes("和倉") ||
          p.hotel_name?.includes("石川")
      );
      if (filtered.length >= 3) return filtered;
      return posts.slice(0, 6);
    }
  } catch (e) {
    console.error("Failed to load posts for Noto page:", e);
  }
  return [];
}

export default function NotoGuidePage() {
  const posts = loadNotoPosts();

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "石川県 観光ガイド", item: `${baseUrl}/prefectures/ishikawa/` },
      { "@type": "ListItem", position: 3, name: "能登旅行 完全計画ガイド", item: `${baseUrl}/noto/` },
    ],
  };

  const faqList = [
    {
      q: "初めての能登旅行でおすすめの観光コースや日数・モデルコースは？",
      a: "初めての能登旅行は「1泊2日ドライブ」または「2泊3日ゆったり周遊」がおすすめです。1日目は金沢またはのと里山空港から能登島（のとじま水族館）→和倉温泉で名湯と絶景オーシャンビューの宿に宿泊。2日目は輪島朝市→白米千枚田（所要時間約1時間）→見附島（軍艦島）を巡るルートが感動的です。"
    },
    {
      q: "能登旅行は車なし・電車・バスでも観光できますか？",
      a: "はい、車なしでも観光可能です。金沢駅から七尾線・のと鉄道（観光列車「のと里山里海号」）に乗車して和倉温泉駅や穴水駅へアクセスできます。また、金沢駅から和倉温泉・輪島を結ぶ北鉄能登特急バスや、「のと里山空港」からの予約制ふるさとタクシー（定期乗合）を利用すれば主要名所を巡ることができます。"
    },
    {
      q: "白米千枚田の所要時間やライトアップ（あぜの万灯）の見どころは？",
      a: "白米千枚田の散策所要時間は「約45分〜1時間」です。日本海に面した急斜面に1,004枚の棚田が連なる絶景で、秋から冬にかけて開催されるLEDライトアップ「あぜの万灯（あぜのきらめき）」は幻想的で世界的人気です。"
    },
    {
      q: "和倉温泉の特徴やカップル・家族におすすめのホテル・温泉宿は？",
      a: "和倉温泉は開湯1200年の歴史を誇る開の湯・海の温泉です。日本一の老舗旅館「加賀屋」をはじめ、全室オーシャンビューの露天風呂付き客室を備えた高級旅館や、源泉掛け流しの大浴場がある和モダン温泉宿が集まっており、カップルデートや結婚記念日旅行に最高のロケーションです。"
    },
    {
      q: "能登で絶対に食べたい名物グルメ「能登丼」や海の幸・お土産は？",
      a: "能登半島の名物「能登丼」は、能登産の米・水・海の幸（寒ブリ、加能ガニ、サザエ）や能登牛を贅沢に盛り付け、特製の輪島塗箸がお土産として持ち帰れる人気の逸品です。また冬の「能登牡蠣の炭火焼き」や「揚浜式塩田」の天然塩、能登の地酒も大人気です。"
    },
    {
      q: "金沢から能登へのアクセスや所要時間はどれくらい？",
      a: "金沢駅から和倉温泉までは「特急能登かがり火」で約1時間。車・レンタカーなら「のと里山海道」（通行無料の自動車専用道路）を利用して金沢から和倉温泉・輪島まで約1時間20分〜1時間40分とアクセス良好です。"
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
        <span className="text-emerald-950 font-bold">能登旅行 完全計画ガイド</span>
      </nav>

      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-950 via-teal-900 to-amber-950 p-8 md:p-14 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-amber-400 text-teal-950 px-3.5 py-1 rounded-full uppercase shadow">
            能登旅行 計画サポート 🌊
          </span>
          <span className="text-xs font-bold text-amber-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            世界農業遺産 能登の里山里海
          </span>
          <span className="text-xs font-bold text-emerald-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            和倉温泉・白米千枚田・能登島
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">
          【能登旅行 完全計画ガイド】<br />
          <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-teal-100 bg-clip-text text-transparent">
            モデルコース・和倉温泉・白米千枚田・能登丼・宿選びから予約まで
          </span>
        </h1>

        <p className="text-emerald-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          日本海に突き出た美しい能登半島。「能登には何がある？」「白米千枚田の所要時間は？」「和倉温泉のおすすめ宿は？」「車なしでも楽しめる？」といった疑問をすべて解決。能登旅行の計画を7つのステップでスムーズにサポートします。
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 pt-4 border-t border-white/10 text-center">
          <a href="#step1" className="p-2 bg-white/10 hover:bg-amber-500/30 rounded-xl transition space-y-1 border border-white/10">
            <span className="block text-[10px] font-extrabold text-amber-300">STEP 1</span>
            <span className="block text-xs font-bold">旅行を考える</span>
          </a>
          <a href="#step2" className="p-2 bg-white/10 hover:bg-amber-500/30 rounded-xl transition space-y-1 border border-white/10">
            <span className="block text-[10px] font-extrabold text-amber-300">STEP 2</span>
            <span className="block text-xs font-bold">能登の魅力</span>
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
            STEP 1 🚘
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
            能登旅行を考える ｜ のと里山海道ドライブ・のと鉄道・車なしアクセス
          </h2>
          <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">
            金沢からのドライブ（のと里山海道）、羽田からの「のと里山空港」、JR特急・のと鉄道・特急バスでの車なしアクセス方法を解説。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-5 rounded-2xl bg-teal-50/40 border border-teal-900/10 space-y-2">
            <h3 className="text-sm font-bold text-teal-950 flex items-center gap-1.5">
              <span>🚗</span> <span>金沢から能登 ドライブ（のと里山海道）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              通行無料の自動車専用道路「のと里山海道」を利用すれば、金沢から和倉温泉まで約1時間20分、輪島まで約1時間40分。日本で唯一車で砂浜を走れる「千里浜なぎさドライブウェイ」も絶景です。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-teal-50/40 border border-teal-900/10 space-y-2">
            <h3 className="text-sm font-bold text-teal-950 flex items-center gap-1.5">
              <span>✈️</span> <span>のと里山空港（羽田から直行便）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              羽田空港から「のと里山空港」まで約1時間。空港から輪島や和倉温泉までは予約制「ふるさとタクシー（1人1,000円〜2,000円程度）」が利用でき非常に便利です。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-500/20 space-y-2">
            <h3 className="text-sm font-bold text-amber-900 flex items-center gap-1.5">
              <span>🚃</span> <span>能登 車なしアクセス・のと鉄道</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              金沢駅から特急「能登かがり火」で和倉温泉駅へ。そこから七尾湾を臨む「のと鉄道（観光列車 のと里山里海号）」で穴水駅へ向かう車なし旅も人気です。
            </p>
          </div>
        </div>
      </section>

      <section id="step2" className="scroll-mt-24 bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-emerald-950/10 pb-4">
          <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
            STEP 2 🌊
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
            能登の魅力 ｜ 和倉温泉・白米千枚田・能登島・夕日・ベストシーズン
          </h2>
          <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">
            「能登 何がある？」「初めての能登旅行の魅力は？」に答える、日本海の絶景と開の湯温泉。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-950/5 space-y-2">
            <h3 className="text-sm font-bold text-emerald-950 flex items-center gap-1.5">
              <span>🌾</span> <span>白米千枚田・あぜの万灯（ベストシーズン）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              日本海に切り立つ斜面に1,004枚の棚田が広がる世界景観。5月の水引き、夏の青々とした稲穂、秋の黄金色の稲穂、冬のLEDライトアップ「あぜの万灯」と通年楽しめます。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/40 border border-amber-950/5 space-y-2">
            <h3 className="text-sm font-bold text-amber-950 flex items-center gap-1.5">
              <span>♨️</span> <span>和倉温泉（開湯1200年の海の温泉）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              七尾湾を望む名湯。海から湧き出る豊富な塩分を含んだ温泉は保温・美肌効果抜群。「加賀屋」をはじめ日本最高峰のおもてなし宿が集結しています。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
              <span>🐬</span> <span>能登島（のとじま水族館＆透明な海）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              七尾湾に浮かぶ自然豊かな島。ジンベエザメが泳ぐ「のとじま水族館」や、イルカウォッチング、ガラス工芸体験、透明度の高い海での海水浴が楽しめます。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-teal-50/40 border border-teal-900/10 space-y-2">
            <h3 className="text-sm font-bold text-teal-950 flex items-center gap-1.5">
              <span>🦀</span> <span>冬の味覚（能登カニ・寒ブリ・能登牡蠣）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              11月に解禁される「加能ガニ・香箱ガニ」、脂がのった「ひみ寒ぶり・能登寒ブリ」、穴水湾で育つ「能登牡蠣の炭火焼き」は冬の能登旅行の一番の醍醐味です。
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
            能登 モデルコース ｜ 1泊2日ドライブ・2泊3日奥能登周遊コース
          </h2>
          <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">
            絶景海岸線を走る能登ドライブと和倉温泉宿泊の黄金モデルコース。
          </p>
        </div>

        <div className="space-y-6 text-xs">
          <div className="p-6 rounded-2xl bg-amber-50/40 border border-amber-300/40 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-200 pb-3">
              <h3 className="text-base font-black text-amber-950 flex items-center gap-2">
                <span>📍</span> <span>王道！能登1泊2日 ドライブ＆和倉温泉モデルコース</span>
              </h3>
              <span className="text-[10px] font-extrabold bg-amber-200 text-amber-900 px-3 py-0.5 rounded-full">
                カップル・ファミリー向き
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-amber-200 space-y-2">
                <span className="font-extrabold text-amber-800 block">【DAY 1】千里浜となぎさドライブ＆和倉温泉</span>
                <ul className="space-y-1.5 text-emerald-950/80 leading-relaxed pl-2">
                  <li>• 10:00 金沢からレンタカー出発（のと里山海道）</li>
                  <li>• 10:45 <strong className="font-bold text-amber-950">千里浜なぎさドライブウェイ</strong>（砂浜ドライブ）</li>
                  <li>• 12:30 <strong className="font-bold text-amber-950">能登島</strong>（のとじま水族館＆能登島大橋絶景）</li>
                  <li>• 15:30 <strong className="font-bold text-amber-950">和倉温泉</strong>チェックイン（海を望む露天風呂）</li>
                  <li>• 18:00 旅館で<strong className="font-bold text-amber-950">能登の海鮮・能登牛の豪華夕食</strong></li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-xl border border-amber-200 space-y-2">
                <span className="font-extrabold text-amber-800 block">【DAY 2】輪島朝市と白米千枚田・奥能登絶景</span>
                <ul className="space-y-1.5 text-emerald-950/80 leading-relaxed pl-2">
                  <li>• 08:30 和倉温泉出発→輪島へ</li>
                  <li>• 09:30 <strong className="font-bold text-amber-950">輪島朝市</strong>（海鮮干物・漆器の買い物＆食べ歩き）</li>
                  <li>• 11:30 <strong className="font-bold text-amber-950">白米千枚田</strong>（日本海と棚田の絶景散策/所要時間1時間）</li>
                  <li>• 13:00 輪島市内で<strong className="font-bold text-amber-950">名物「能登丼」ランチ</strong></li>
                  <li>• 15:00 帰路（のと里山空港または金沢へ）</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-teal-500/10 to-emerald-500/10 border border-amber-400/40 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-300/40 pb-3">
              <h3 className="text-base font-black text-amber-950 flex items-center gap-2">
                <span>⚡</span> <span>【超目玉】2026年最新「能登×ポケモンコラボ」聖地巡礼モデルコース</span>
              </h3>
              <span className="text-[10px] font-black bg-gradient-to-r from-amber-400 to-amber-300 text-teal-950 px-3 py-1 rounded-full shadow">
                必見！ご当地ポケモンスポット
              </span>
            </div>
            <p className="text-emerald-950/90 leading-relaxed font-medium">
              輪島・七尾・穴水の「ポケふた」マンホール巡り、和倉温泉「わくらポケモン足湯」、世界初の「のと里山ポケモン・ウィズ・ユー空港」を効率よく網羅するスペシャルモデルコース！
            </p>
            <div className="pt-2">
              <Link
                href="/posts/noto-pokemon-travel-guide/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-black rounded-xl shadow transition"
              >
                <span>⚡</span>
                <span>能登×ポケモンコラボ（ポケふた・わくら足湯・空港）完全攻略記事を読む</span>
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-teal-50/40 border border-teal-200 space-y-3">
            <h3 className="text-sm font-bold text-teal-950 flex items-center gap-2">
              <span>🧭</span> <span>奥能登完全制覇！能登2泊3日 モデルコース（見附島・九十九湾めぐり）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed">
              1泊目を和倉温泉、2泊目を珠洲・輪島の温泉宿にする贅沢コース。軍艦島こと「見附島」や、リアス式海岸の美しい「九十九湾」、揚浜式塩田の塩づくり体験まで奥能登の魅力を全網羅。
            </p>
          </div>
        </div>
      </section>

      <section id="step4" className="scroll-mt-24 bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-emerald-950/10 pb-4">
          <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
            STEP 4 🏝️
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
            能登 観光スポット ｜ 白米千枚田・のとじま水族館・輪島朝市・見附島
          </h2>
          <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">
            絶対外せない能登の主要景勝地・観光名所の所要時間と見どころ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="p-5 rounded-2xl bg-emerald-50/30 border border-emerald-950/5 space-y-2">
            <h3 className="text-sm font-extrabold text-teal-950 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-800 text-white text-[10px] flex items-center justify-center font-bold">1</span>
              <span>白米千枚田（しろよねせんまいだ）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed font-medium">
              <strong className="font-bold text-amber-950">所要時間：約45分〜1時間</strong><br />
              国の名勝。急斜面に1,004枚もの小さな田んぼが重なる世界農業遺産のシンボル。道の駅「千枚田ポケットパーク」からの見下ろしが絶景。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/30 border border-emerald-950/5 space-y-2">
            <h3 className="text-sm font-extrabold text-teal-950 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-800 text-white text-[10px] flex items-center justify-center font-bold">2</span>
              <span>のとじま水族館（能登島）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed font-medium">
              <strong className="font-bold text-amber-950">所要時間：約1.5時間〜2時間</strong><br />
              日本海側で唯一ジンベエザメを飼育する大水族館。プロジェクションマッピングによる幻想的なクラゲ回廊やイルカショーが大人気。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/30 border border-emerald-950/5 space-y-2">
            <h3 className="text-sm font-extrabold text-teal-950 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-800 text-white text-[10px] flex items-center justify-center font-bold">3</span>
              <span>輪島朝市（わじまあさいち）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed font-medium">
              <strong className="font-bold text-amber-950">所要時間：約1時間〜1.5時間</strong><br />
              千年の歴史をもつ日本三大朝市の一つ。おばあちゃん達の威勢の良い掛け声とともに、海鮮干物、柚子餅、伝統の輪島塗が並びます。
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/30 border border-emerald-950/5 space-y-2">
            <h3 className="text-sm font-extrabold text-teal-950 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-teal-800 text-white text-[10px] flex items-center justify-center font-bold">4</span>
              <span>見附島（軍艦島 / 珠洲市）</span>
            </h3>
            <p className="text-emerald-950/80 leading-relaxed font-medium">
              <strong className="font-bold text-amber-950">所要時間：約30分〜45分</strong><br />
              高さ28mの島が軍艦のようにそびえ立つ珠洲のシンボル。引き潮時には踏み石を渡って島の近くまで歩くことができ、えんむすびーちとしても有名。
            </p>
          </div>
        </div>
      </section>

      <section id="step5" className="scroll-mt-24 bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-6">
        <div className="space-y-2 border-b border-emerald-950/10 pb-4">
          <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
            STEP 5 🍱
          </span>
          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
            能登 グルメ＆カフェ ｜ 能登丼・能登牛・能登牡蠣・絶景カフェ・手土産
          </h2>
          <p className="text-xs text-emerald-950/80 leading-relaxed font-medium">
            能登に来たら外せない名物ご当地海鮮＆和牛グルメ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-5 bg-amber-50/40 rounded-2xl border border-amber-200 space-y-2">
            <h3 className="text-sm font-bold text-amber-950">🍱 能登名物「能登丼」</h3>
            <p className="text-emerald-950/80 leading-relaxed">
              能登産のコシヒカリと天然水を使用し、新鮮な地魚や能登牛を盛り付けた丼。食事に使用した特製の「輪島塗箸」を持ち帰れるのが嬉しい名物。
            </p>
          </div>

          <div className="p-5 bg-amber-50/40 rounded-2xl border border-amber-200 space-y-2">
            <h3 className="text-sm font-bold text-amber-950">🥩 能登牛ステーキ＆能登牡蠣炭火焼き</h3>
            <p className="text-emerald-950/80 leading-relaxed">
              出荷数が少なく希少価値の高いブランド和牛「能登牛」の極上ステーキ。冬場は七尾湾・穴水で獲れるプリプリの「能登牡蠣」の焼き牡蠣が最高。
            </p>
          </div>

          <div className="p-5 bg-amber-50/40 rounded-2xl border border-amber-200 space-y-2">
            <h3 className="text-sm font-bold text-amber-950">☕ 能登島カフェ＆揚浜式塩田お土産</h3>
            <p className="text-emerald-950/80 leading-relaxed">
              七尾湾を眺める能登島のおしゃれカフェ。日本で唯一伝承される「揚浜式塩田」の手作り天然塩やいしる（魚醤油）、いも菓子はお土産に最適。
            </p>
          </div>
        </div>
      </section>

      <section id="step6" className="scroll-mt-24 space-y-8 bg-gradient-to-br from-indigo-950 via-teal-950 to-amber-950 p-6 md:p-10 rounded-3xl text-white shadow-xl">
        <div id="step7" className="space-y-3 border-b border-white/10 pb-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-[10px] font-extrabold text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-0.5 rounded-full uppercase tracking-wider">
              STEP 6 & STEP 7 ♨️
            </span>
            <span className="text-xs font-bold text-emerald-200">
              ※楽天API公式画像＆アフィリエイトリンクのみを使用
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-white">
            能登・和倉温泉 宿選び ＆ 宿泊予約（楽天トラベルで空室・最安値確認）
          </h2>

          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed font-medium">
            「和倉温泉の高級旅館」「全室オーシャンビュー宿」「露天風呂付き客室のある温泉宿」「コスパ抜群ホテル」まで厳選。楽天トラベルからリアルタイムの空室状況・プランを確認して直接予約いただけます。
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
                      alt={post.hotel_name || "能登おすすめホテル・温泉宿"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-emerald-200 text-xs font-bold">
                      {post.hotel_name}
                    </div>
                  )}
                  <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-amber-500 text-teal-950 px-2.5 py-0.5 rounded-full shadow">
                    {post.area || "能登エリア"}
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
            <span>❓</span> <span>能登旅行のプロが回答！よくある質問（FAQ）</span>
          </h2>
          <p className="text-xs text-emerald-950/60 leading-relaxed font-medium">
            能登旅行のモデルコース、車なし観光、和倉温泉宿、白米千枚田の所要時間についてお答えします。
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
          能登旅行の準備は整いましたか？
        </h3>
        <p className="text-xs text-emerald-950/70 max-w-xl mx-auto leading-relaxed">
          楽天トラベルの限定クーポンや「5と0のつく日セール」を活用して、憧れの和倉温泉・能登旅行をお得に予約しましょう。
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link
            href="/kanazawa"
            className="px-8 py-3 text-xs font-bold text-white bg-amber-700 hover:bg-amber-600 rounded-xl shadow transition"
          >
            🌸 金沢旅行 完全計画ガイドを見る
          </Link>
          <Link
            href="/prefectures/ishikawa"
            className="px-8 py-3 text-xs font-bold text-white bg-teal-800 hover:bg-teal-700 rounded-xl shadow transition"
          >
            🗾 石川県・能登の観光ハブへ戻る
          </Link>
        </div>
      </section>
    </div>
  );
}
