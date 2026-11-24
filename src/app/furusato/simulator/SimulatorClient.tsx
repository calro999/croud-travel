"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import ShareButtons from "@/app/components/ShareButtons";
import FloatingMobileCTA from "@/app/components/FloatingMobileCTA";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://croud-travel.pages.dev";
const AFFILIATE_FURUSATO_URL = "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Ffurusato%2F";

// 家族構成別の基準控除上限テーブル（年収万円: 控除上限目安円）
// 総務省 ふるさと納税の上限額目安データに基づく標準値
const INCOME_BRACKETS = [300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1200, 1500, 2000];

type FamilyType = "single" | "married_no_child" | "married_child_high" | "married_child_univ" | "couple_child_high";

const LIMIT_TABLE: Record<FamilyType, Record<number, number>> = {
  // 独身 または 共働き（配偶者控除なし）
  single: {
    300: 28000, 350: 34000, 400: 42000, 450: 52000, 500: 61000, 550: 69000,
    600: 77000, 650: 97000, 700: 108000, 750: 119000, 800: 129000, 850: 140000,
    900: 152000, 950: 164000, 1000: 176000, 1200: 242000, 1500: 389000, 2000: 564000
  },
  // 夫婦（配偶者控除あり・子どもなし）
  married_no_child: {
    300: 19000, 350: 26000, 400: 33000, 450: 41000, 500: 49000, 550: 59000,
    600: 69000, 650: 79000, 700: 86000, 750: 106000, 800: 118000, 850: 128000,
    900: 139000, 950: 151000, 1000: 163000, 1200: 231000, 1500: 378000, 2000: 553000
  },
  // 夫婦＋子ども1人（高校生 16〜18歳）
  married_child_high: {
    300: 15000, 350: 21000, 400: 29000, 450: 37000, 500: 44000, 550: 53000,
    600: 60000, 650: 71000, 700: 78000, 750: 89000, 800: 107000, 850: 118000,
    900: 129000, 950: 141000, 1000: 153000, 1200: 221000, 1500: 368000, 2000: 543000
  },
  // 夫婦＋子ども1人（大学生 19〜22歳）
  married_child_univ: {
    300: 11000, 350: 18000, 400: 25000, 450: 33000, 500: 40000, 550: 48000,
    600: 56000, 650: 66000, 700: 73000, 750: 84000, 800: 97000, 850: 113000,
    900: 124000, 950: 136000, 1000: 147000, 1200: 214000, 1500: 361000, 2000: 536000
  },
  // 共働き＋子ども1人（高校生）
  couple_child_high: {
    300: 23000, 350: 30000, 400: 38000, 450: 47000, 500: 56000, 550: 64000,
    600: 72000, 650: 89000, 700: 99000, 750: 110000, 800: 120000, 850: 131000,
    900: 143000, 950: 154000, 1000: 166000, 1200: 232000, 1500: 379000, 2000: 554000
  }
};

// 代表的な楽天トラベルクーポン寄付金額
const TYPICAL_DONATIONS = [100000, 50000, 30000, 20000, 10000];

// おすすめ特集記事リンクマッピング
const RECOMMEND_POSTS = [
  { minRem: 100000, slug: "furusato-tax-karuizawa-luxury-resort-villa-stay", title: "軽井沢ラグジュアリーホテル＆露天風呂ヴィラ特集", label: "高額寄付・極上宿" },
  { minRem: 50000, slug: "furusato-tax-hakone-gora-onsen-art-luxury-stay", title: "箱根強羅温泉 名門旅館＆客室露天風呂特集", label: "人気温泉宿" },
  { minRem: 30000, slug: "furusato-tax-kusatsu-onsen-yubatake-heritage-stay", title: "草津温泉 湯畑周辺老舗名旅館特集", label: "名湯・湯巡り" },
  { minRem: 20000, slug: "furusato-tax-beppu-kannawa-onsen-jigokumushi-stay", title: "別府鉄輪温泉 源泉かけ流し湯治宿特集", label: "手頃な寄付枠" },
  { minRem: 10000, slug: "furusato-tax-yearend-rush-rakuten-travel-coupon-guide", title: "年末駆け込み対応！あとから適用OK温泉宿20選", label: "1万円〜使い切り" }
];

export default function SimulatorClient() {
  const [incomeMan, setIncomeMan] = useState<number>(600);
  const [familyType, setFamilyType] = useState<FamilyType>("single");
  const [alreadyDonated, setAlreadyDonated] = useState<number>(0);
  const [usedMunicipalities, setUsedMunicipalities] = useState<number>(0);

  // 控除上限目安を補間計算
  const estimatedLimit = useMemo(() => {
    const table = LIMIT_TABLE[familyType];
    if (table[incomeMan]) return table[incomeMan];

    // 線形補間
    const brackets = INCOME_BRACKETS;
    if (incomeMan <= brackets[0]) return table[brackets[0]];
    if (incomeMan >= brackets[brackets.length - 1]) return table[brackets[brackets.length - 1]];

    let lower = brackets[0];
    let upper = brackets[brackets.length - 1];
    for (let i = 0; i < brackets.length - 1; i++) {
      if (incomeMan >= brackets[i] && incomeMan <= brackets[i + 1]) {
        lower = brackets[i];
        upper = brackets[i + 1];
        break;
      }
    }

    const lowerVal = table[lower];
    const upperVal = table[upper];
    const ratio = (incomeMan - lower) / (upper - lower);
    const interpolated = Math.round(lowerVal + ratio * (upperVal - lowerVal));
    return Math.round(interpolated / 1000) * 1000;
  }, [incomeMan, familyType]);

  // 残り枠の計算
  const remainingAllowance = useMemo(() => {
    return Math.max(0, estimatedLimit - (alreadyDonated || 0));
  }, [estimatedLimit, alreadyDonated]);

  // 残り枠ぴったり提案（貪欲法によるクーポン組み合わせ）
  const couponCombination = useMemo(() => {
    let rem = remainingAllowance;
    const plan: { donation: number; coupon: number; count: number }[] = [];

    for (const d of TYPICAL_DONATIONS) {
      if (rem >= d) {
        const cnt = Math.floor(rem / d);
        plan.push({
          donation: d,
          coupon: Math.round(d * 0.3),
          count: cnt
        });
        rem = rem % d;
      }
    }

    const totalDonation = plan.reduce((sum, item) => sum + item.donation * item.count, 0);
    const totalCoupon = plan.reduce((sum, item) => sum + item.coupon * item.count, 0);
    const leftover = rem;

    return { plan, totalDonation, totalCoupon, leftover };
  }, [remainingAllowance]);

  // ワンストップ特例残数
  const remainingMunicipalities = Math.max(0, 5 - usedMunicipalities);

  return (
    <div className="space-y-10">
      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs text-emerald-950/60 flex items-center gap-2">
        <Link href="/" className="hover:text-emerald-900 transition underline underline-offset-2">ホーム</Link>
        <span>›</span>
        <Link href="/furusato/" className="hover:text-emerald-900 transition underline underline-offset-2">ふるさと納税宿泊クーポン完全攻略</Link>
        <span>›</span>
        <span className="text-emerald-950 font-bold">控除シミュレーター＆残り枠提案</span>
      </nav>

      {/* ヒーロータイトル */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-black">
          <span>💡</span>
          <span>年収・家族構成から上限目安を即座に判定</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-black font-journal-serif text-emerald-950 leading-tight">
          ふるさと納税 控除上限シミュレーター＆残り枠ぴったり使い切り提案
        </h1>
        <p className="text-xs md:text-sm text-emerald-950/75 leading-relaxed max-w-3xl">
          年間の控除枠をオーバーしてしまうと実質負担が増え、余らせてしまうと本来受けられるはずの宿泊割引を逃してしまいます。年収と家族構成を入力し、今年使える「残り枠」をぴったり使い切る楽天トラベル宿泊クーポンの組み合わせを確認しましょう。
        </p>
      </div>

      <ShareButtons
        title="【控除上限シミュレーター＆残り枠ぴったり提案】楽天トラベルふるさと納税旅行クーポン計算ツール"
        url={`${baseUrl}/furusato/simulator/`}
      />

      {/* シミュレーターメイングリッド */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* 左側：入力フォーム (7/12) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-emerald-950/10 shadow-sm space-y-6">
          <div className="border-b border-emerald-950/10 pb-4">
            <h2 className="text-lg md:text-xl font-black text-emerald-950 font-journal-serif flex items-center gap-2">
              <span>①</span>
              <span>あなたの条件を入力</span>
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              給与年収と家族構成を選択すると、年間の控除上限額（目安）が自動計算されます。
            </p>
          </div>

          {/* 年収スライダー＆直接入力 */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800">
                本人の税込年収（給与収入）
              </label>
              <span className="text-base font-black text-teal-900 font-mono">
                {incomeMan.toLocaleString()} 万円
              </span>
            </div>
            <input
              type="range"
              min="300"
              max="2000"
              step="10"
              value={incomeMan}
              onChange={(e) => setIncomeMan(Number(e.target.value))}
              className="w-full accent-teal-800 h-2 bg-slate-200 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-mono">
              <span>300万円</span>
              <span>700万円</span>
              <span>1,200万円</span>
              <span>2,000万円</span>
            </div>
          </div>

          {/* 家族構成 */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800 block">
              家族構成（扶養控除の状況）
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {[
                { id: "single", label: "独身 / 共働き（配偶者控除なし）" },
                { id: "married_no_child", label: "夫婦（配偶者控除あり・子なし）" },
                { id: "married_child_high", label: "夫婦＋高校生の子1人" },
                { id: "married_child_univ", label: "夫婦＋大学生の子1人" },
                { id: "couple_child_high", label: "共働き＋高校生の子1人" }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setFamilyType(opt.id as FamilyType)}
                  className={`p-3 rounded-xl border text-left transition ${
                    familyType === opt.id
                      ? "border-teal-800 bg-teal-50/80 font-bold text-teal-950 shadow-xs"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-stone-500">
              ※中学生以下（15歳以下）のお子様は税制上の扶養控除対象外のため、上限額に影響しません。
            </p>
          </div>

          {/* 今年の寄付済み額 */}
          <div className="border-t border-emerald-950/10 pt-5 space-y-2">
            <label className="text-xs font-bold text-slate-800 block">
              ② すでに今年寄付した合計金額（任意入力）
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="0"
                step="5000"
                value={alreadyDonated === 0 ? "" : alreadyDonated}
                onChange={(e) => setAlreadyDonated(Number(e.target.value) || 0)}
                placeholder="例: 30000"
                className="w-full px-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-700 font-mono"
              />
              <span className="text-xs font-bold text-slate-700 whitespace-nowrap">円</span>
            </div>
            <p className="text-[10px] text-stone-500">
              返礼品（肉や米など）で既に寄付した金額があれば入力してください。残りの枠が自動計算されます。
            </p>
          </div>

          {/* ワンストップ特例 自治体カウンター */}
          <div className="border-t border-emerald-950/10 pt-5 space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-slate-800">
                ③ ワンストップ特例：今年寄付した自治体数
              </label>
              <span className="text-xs font-black text-amber-800">
                残り {remainingMunicipalities} 自治体 / 5
              </span>
            </div>
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setUsedMunicipalities(num)}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg border transition ${
                    usedMunicipalities === num
                      ? "bg-amber-600 text-white border-amber-600 shadow-xs"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {num}件
                </button>
              ))}
            </div>
            {usedMunicipalities >= 5 && (
              <p className="text-[11px] text-rose-600 font-medium">
                ⚠️ すでに5自治体に達しているため、今後さらに別の自治体へ寄付する場合はワンストップ特例ではなく確定申告が必要になります（同じ自治体への追加寄付であれば5自治体枠を消費しません）。
              </p>
            )}
          </div>
        </div>

        {/* 右側：計算結果＆残り枠ぴったり提案 (5/12) */}
        <div className="lg:col-span-5 space-y-6">
          {/* 上限目安＆残り枠カード */}
          <div className="bg-gradient-to-br from-teal-950 via-emerald-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-teal-700/40 space-y-5">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-300">
                ESTIMATED ALLOWANCE
              </span>
              <h3 className="text-sm font-bold text-teal-100">
                あなたの控除上限額の目安
              </h3>
              <div className="text-3xl md:text-4xl font-black text-amber-300 font-mono tracking-tight">
                約 {estimatedLimit.toLocaleString()} <span className="text-lg text-white">円</span>
              </div>
            </div>

            <div className="pt-4 border-t border-teal-800/80 space-y-2">
              <div className="flex justify-between text-xs text-teal-200">
                <span>寄付済み額:</span>
                <span className="font-mono">{alreadyDonated.toLocaleString()} 円</span>
              </div>
              <div className="flex justify-between items-baseline pt-1">
                <span className="text-xs font-bold text-white">今年の残り枠:</span>
                <span className="text-2xl font-black text-emerald-300 font-mono">
                  約 {remainingAllowance.toLocaleString()} <span className="text-xs text-white">円</span>
                </span>
              </div>
              <p className="text-[11px] text-teal-200/80 leading-relaxed pt-1">
                自己負担2,000円のみで獲得できる宿泊クーポンの最大額面は <strong className="text-amber-300">約 {Math.round(remainingAllowance * 0.3).toLocaleString()} 円分</strong> です。
              </p>
            </div>
          </div>

          {/* ぴったり使い切りクーポン組み合わせ提案 */}
          <div className="bg-white rounded-3xl p-6 border border-emerald-950/10 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-950/10 pb-3">
              <h3 className="text-sm font-bold text-emerald-950 flex items-center gap-1.5">
                <span>🎯</span>
                <span>残り枠をぴったり使う組み合わせ例</span>
              </h3>
              <span className="text-[10px] font-black bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                最大30%クーポン
              </span>
            </div>

            {remainingAllowance <= 0 ? (
              <p className="text-xs text-slate-600 leading-relaxed">
                すでに今年の控除枠を上限まで寄付されています。無理な追加寄付は自己負担になるためご注意ください。
              </p>
            ) : couponCombination.plan.length === 0 ? (
              <p className="text-xs text-slate-600 leading-relaxed">
                残り枠が1万円未満です。楽天トラベルの宿泊クーポンは通常1万円以上の寄付から設定されています。
              </p>
            ) : (
              <div className="space-y-3">
                <div className="space-y-2">
                  {couponCombination.plan.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="font-bold text-slate-800">
                          {item.donation.toLocaleString()}円 寄付 × {item.count}口
                        </span>
                        <span className="text-[10px] text-emerald-700 block">
                          （宿泊クーポン {item.coupon.toLocaleString()}円分 × {item.count}枚）
                        </span>
                      </div>
                      <span className="font-black text-amber-800 font-mono text-sm">
                        {(item.donation * item.count).toLocaleString()}円
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 border-t border-slate-200 text-xs space-y-1">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>おすすめ寄付合計:</span>
                    <span className="font-mono text-sm">{couponCombination.totalDonation.toLocaleString()} 円</span>
                  </div>
                  <div className="flex justify-between font-bold text-emerald-800">
                    <span>獲得できる旅行クーポン:</span>
                    <span className="font-mono text-sm">計 {couponCombination.totalCoupon.toLocaleString()} 円分</span>
                  </div>
                  {couponCombination.leftover > 0 && (
                    <div className="flex justify-between text-[11px] text-slate-500">
                      <span>端数（残る枠）:</span>
                      <span className="font-mono">{couponCombination.leftover.toLocaleString()} 円</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="pt-3">
              <a
                href={AFFILIATE_FURUSATO_URL}
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="block w-full py-3 text-center text-xs md:text-sm font-black text-white bg-amber-700 hover:bg-amber-800 rounded-xl shadow-xs transition"
              >
                👉 楽天ふるさと納税で対象宿を探す ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ⚠️ 必須注意書き */}
      <section className="bg-amber-50/70 border border-amber-300/80 rounded-2xl p-5 md:p-6 text-xs text-amber-950 space-y-2">
        <h4 className="font-bold text-amber-900 flex items-center gap-1.5">
          <span>⚠️</span>
          <span>控除上限シミュレーターご利用上のご注意事項</span>
        </h4>
        <p className="leading-relaxed text-amber-900/90">
          ※本シミュレーターの算出結果は、総務省発表の給与収入別目安表に基づく概算シミュレーションです。
          住宅ローン控除や医療費控除、iDeCo（個人型確定拠出年金）、ふるさと納税以外の寄付金控除などがある場合は、実際の控除上限額が異なります。
          正確な上限額につきましては、お住まいの市区町村の税務窓口、税理士、または楽天ふるさと納税などの詳細シミュレーションツールにて必ずご確認ください。
        </p>
      </section>

      {/* 関連専用記事へのリンク */}
      <section className="space-y-4">
        <div className="space-y-1">
          <span className="text-[10px] font-black uppercase tracking-wider text-teal-800">
            RECOMMENDED DESTINATIONS
          </span>
          <h3 className="text-lg md:text-xl font-black font-journal-serif text-emerald-950">
            残り枠で泊まりたい！ふるさと納税おすすめ温泉宿ルポ
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {RECOMMEND_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}/`}
              className="group p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-700 hover:shadow-xs transition flex flex-col justify-between space-y-3"
            >
              <div className="space-y-1.5">
                <span className="text-[10px] font-bold text-teal-900 bg-teal-50 px-2 py-0.5 rounded inline-block">
                  {post.label}
                </span>
                <h4 className="text-xs md:text-sm font-bold text-slate-900 group-hover:text-teal-800 leading-snug">
                  {post.title}
                </h4>
              </div>
              <span className="text-xs font-bold text-teal-700 flex items-center gap-1">
                特集記事を見る →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <FloatingMobileCTA
        affiliateUrl={AFFILIATE_FURUSATO_URL}
        hotelName="楽天ふるさと納税 宿泊クーポン"
        price="控除上限内で実質2,000円負担"
      />
    </div>
  );
}
