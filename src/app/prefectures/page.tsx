import { Metadata } from "next";
import Link from "next/link";
import { REGIONS_MAP, PREFECTURES_DATA, getPrefectureByName } from "@/data/prefecturesData";

export const metadata: Metadata = {
  title: "【全国47都道府県】エリア別観光見所ガイド＆厳選宿ハブ ｜ 日本全国・旅びより",
  description: "北海道から沖縄まで全47都道府県を細分化エリア（例: 金沢・能登・加賀温泉郷、浅草・新宿・銀座など）に分け、観光名所・ご当地グルメ・おすすめ近隣ホテルルポをご案内。",
  keywords: ["47都道府県", "観光ガイド", "エリア別見所", "観光名所", "ご当地グルメ", "温泉宿", "ホテル予約"],
};

export default function PrefecturesIndexPage() {
  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">47都道府県の見所・宿ハブ</span>
      </nav>

      {/* ヒーロー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-900 via-emerald-900 to-amber-950 p-8 md:p-12 text-white shadow-lg space-y-4">
        <span className="inline-block text-[10px] font-extrabold tracking-widest bg-amber-400 text-teal-950 px-3.5 py-1 rounded-full uppercase shadow">
          日本全国 エリア別完全攻略 🗾
        </span>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-snug">
          47都道府県 エリア別観光名所ガイド＆近隣宿ハブ
        </h1>
        <p className="text-emerald-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          各都道府県を地域エリア（例：石川県なら金沢・能登・加賀・白山など）ごとに詳しく細分化。観光名所や絶景スポット、ご当地グルメの紹介とともに、近隣のおすすめホテル・温泉宿をご案内します。
        </p>
      </section>

      {/* 9エリアごとのグリッドナビ */}
      <div className="space-y-12">
        {Object.entries(REGIONS_MAP).map(([regionName, prefNames]) => (
          <section key={regionName} className="space-y-5">
            <div className="flex items-center gap-3 border-b border-emerald-950/10 pb-3">
              <span className="w-3 h-3 rounded-full bg-amber-600 inline-block" />
              <h2 className="text-xl font-black font-journal-serif text-emerald-950">
                {regionName}エリア
              </h2>
              <span className="text-xs font-bold text-teal-900/40">
                （{prefNames.length}都道府県）
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {prefNames.map((prefName) => {
                const prefInfo = getPrefectureByName(prefName);
                if (!prefInfo) return null;

                return (
                  <Link
                    key={prefInfo.slug}
                    href={`/prefectures/${prefInfo.slug}`}
                    className="group border border-emerald-950/10 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-teal-800/40 transition duration-200 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-extrabold text-emerald-950 group-hover:text-teal-800 transition font-journal-serif">
                          {prefInfo.name}
                        </span>
                        <span className="text-xs text-amber-700 font-bold group-hover:translate-x-1 transition">
                          エリア名所を見る →
                        </span>
                      </div>
                      <p className="text-xs text-emerald-950/70 line-clamp-2 leading-relaxed font-medium">
                        {prefInfo.description}
                      </p>
                    </div>

                    {/* 収録サブエリア一覧タグ */}
                    <div className="pt-3 border-t border-emerald-950/5 space-y-1.5">
                      <span className="text-[9px] font-extrabold text-teal-900/60 uppercase tracking-widest block">
                        収録主要エリア:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {prefInfo.subAreas.map((sa) => (
                          <span key={sa.slug} className="text-[9px] font-bold text-amber-900 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-md">
                            🧭 {sa.areaName}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
