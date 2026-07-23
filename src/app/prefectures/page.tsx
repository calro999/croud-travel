import { Metadata } from "next";
import Link from "next/link";
import { REGIONS_MAP, PREFECTURES_DATA } from "@/data/prefecturesData";

export const metadata: Metadata = {
  title: "全国47都道府県の見所・観光ガイド＆厳選宿一覧 ｜ 日本全国・旅びより",
  description: "北海道から沖縄まで、日本全国47都道府県の観光の魅力、見所スポット、名物グルメ、おすすめの旅テーマと厳選宿・ホテルルポを地域別にご案内します。",
  keywords: ["47都道府県", "観光ガイド", "見所", "旅マガジン", "温泉宿", "観光地", "ご当地グルメ"],
};

export default function PrefecturesIndexPage() {
  return (
    <div className="space-y-10 max-w-5xl mx-auto">
      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">47都道府県の見所・宿一覧</span>
      </nav>

      {/* ヒーロー */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-teal-900 via-emerald-900 to-teal-800 p-8 md:p-12 text-white shadow-md space-y-4">
        <span className="inline-block text-[10px] font-extrabold tracking-widest bg-amber-500/20 border border-amber-500/30 text-amber-300 px-3.5 py-1 rounded-full uppercase">
          日本全国 旅めぐり 🗾
        </span>
        <h1 className="text-2xl md:text-4xl font-black font-journal-serif leading-snug">
          47都道府県の見所・観光ガイド＆厳選宿ハブ
        </h1>
        <p className="text-emerald-100/90 text-xs md:text-sm max-w-2xl leading-relaxed font-medium">
          行きたい都道府県を選ぶだけで、その地域の代表的な見所、名物グルメ、旅行ライターが絶賛する厳選の温泉宿・リゾートホテル特集記事を一目でチェックできます。
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {prefNames.map((prefName) => {
                const prefInfo = PREFECTURES_DATA.find((p) => p.name === prefName);
                if (!prefInfo) return null;

                return (
                  <Link
                    key={prefInfo.slug}
                    href={`/prefectures/${prefInfo.slug}`}
                    className="group border border-emerald-950/5 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-teal-800/30 transition duration-200 flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-base font-extrabold text-emerald-950 group-hover:text-teal-800 transition font-journal-serif">
                          {prefInfo.name}
                        </span>
                        <span className="text-xs text-amber-700 font-bold group-hover:translate-x-1 transition">
                          見所と宿を見る →
                        </span>
                      </div>
                      <p className="text-xs text-emerald-950/70 line-clamp-2 leading-relaxed font-medium">
                        {prefInfo.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-emerald-950/5 flex flex-wrap gap-1">
                      {prefInfo.highlights.slice(0, 3).map((h) => (
                        <span key={h} className="text-[9px] font-bold text-teal-800 bg-teal-50 px-2 py-0.5 rounded-md">
                          #{h}
                        </span>
                      ))}
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
