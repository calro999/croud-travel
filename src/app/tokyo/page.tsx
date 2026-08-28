import fs from "fs";
import path from "path";
import Link from "next/link";
import { Metadata } from "next";

interface RakutenHotel {
  hotelNo: number;
  hotelName: string;
  hotelInformationUrl: string;
  hotelImageUrl: string;
  reviewCount: number;
  reviewAverage: number;
  hotelMinCharge: number;
  address1: string;
  address2: string;
  hotelSpecial?: string;
  access?: string;
  affiliateUrl: string;
}

interface RakutenCategoryData {
  label: string;
  query: string;
  hotels: RakutenHotel[];
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://croud-travel.pages.dev";

export const metadata: Metadata = {
  title: "【東京観光 完全計画ガイド 2026】1泊2日・2泊3日モデルコース＆東京駅・新宿・渋谷・浅草・夜景ホテル・朝食ビュッフェ ｜ 旅宿クラウド",
  description:
    "東京観光の計画を完全サポート！1泊2日・2泊3日モデルコース、東京駅・新宿・渋谷・浅草・銀座のエリア別攻略法、夜景の見えるホテル、絶品朝食ビュッフェ宿までおすすめの宿泊プランまで徹底網羅。",
  keywords: [
    "東京", "東京観光", "東京観光モデルコース", "東京 1泊2日", "東京 2泊3日",
    "東京駅 ホテル", "新宿 ホテル", "東京 ホテル 夜景", "東京 ホテル 朝食", "楽天トラベル"
  ],
  alternates: { canonical: "https://croud-travel.pages.dev/tokyo" },
};

function loadTokyoData(): Record<string, RakutenCategoryData> {
  try {
    const dataPath = path.join(process.cwd(), "src", "data", "all_hubs_rakuten_hotels.json");
    if (fs.existsSync(dataPath)) {
      const all = JSON.parse(fs.readFileSync(dataPath, "utf8"));
      return all.tokyo || {};
    }
  } catch (e) {
    console.error(e);
  }
  return {};
}

export default function TokyoHubPage() {
  const tokyoData = loadTokyoData();

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures/tokyo" className="hover:text-teal-800 transition">東京都</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">東京観光 完全ガイド</span>
      </nav>

      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-stone-900 via-indigo-950 to-slate-900 p-8 md:p-14 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-indigo-500 text-white px-3.5 py-1 rounded-full uppercase shadow">
            東京観光 完全計画ハブ 🗼
          </span>
          <span className="text-xs font-bold text-amber-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            1泊2日・2泊3日モデルコース
          </span>
          <span className="text-xs font-bold text-teal-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            おすすめホテル・温泉旅館
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">
          【東京観光 完全ガイド】<br />
          <span className="bg-gradient-to-r from-amber-200 via-indigo-200 to-teal-100 bg-clip-text text-transparent">
            最先端トレンド・下町名所・夜景ホテル＆東京駅・新宿拠点
          </span>
        </h1>

        <p className="text-indigo-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          世界を魅了する大都市・東京。「1泊2日で効率よく回るには？」「東京駅・新宿・渋谷のホテル選びは？」「夜景や朝食がすごいホテルは？」を縦掘りし、おすすめの宿泊施設情報で繋ぐ総合ガイド。
        </p>
      </section>

      {/* 東京駅・新宿・渋谷の楽天API直接取得ホテル */}
      {tokyoData.station_hotel && (
        <section className="space-y-6 bg-white border border-indigo-950/10 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="space-y-2 border-b border-indigo-950/10 pb-4">
            <span className="text-[10px] font-extrabold text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
              RECOMMENDED STAY
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-900">
              東京駅・銀座 周辺 おすすめホテル（おすすめ厳選）
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tokyoData.station_hotel.hotels.slice(0, 3).map((hotel) => (
              <article key={hotel.hotelNo} className="flex flex-col justify-between border border-stone-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div>
                  <div className="aspect-video relative overflow-hidden bg-stone-100">
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="lazy" />
                    <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-indigo-800 text-white px-2.5 py-0.5 rounded-full">東京駅チカ</span>
                    {hotel.hotelMinCharge > 0 && (
                      <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">¥{Number(hotel.hotelMinCharge).toLocaleString()}〜</span>
                    )}
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-bold text-stone-500">
                      <span>{hotel.address1} {hotel.address2.slice(0, 8)}</span>
                      {hotel.reviewAverage > 0 && <span className="text-amber-600 font-extrabold">⭐ {hotel.reviewAverage} ({hotel.reviewCount}件)</span>}
                    </div>
                    <h3 className="text-sm font-black font-journal-serif text-stone-900 line-clamp-2">{hotel.hotelName}</h3>
                    <p className="text-xs text-stone-600 line-clamp-2">{hotel.hotelSpecial || hotel.access}</p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <a href={hotel.affiliateUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-indigo-700 to-indigo-800 hover:from-indigo-600 hover:to-indigo-700 rounded-xl shadow transition">
                    ✈️ 楽天トラベルで空室・プランを見る
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
