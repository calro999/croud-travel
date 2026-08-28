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
  title: "【北海道旅行 完全計画ガイド 2026】2泊3日・3泊4日モデルコース＆札幌・小樽・函館・富良野・海鮮グルメ・絶景温泉宿 ｜ 旅宿クラウド",
  description:
    "北海道旅行の計画を完全サポート！札幌・小樽・函館・富良野の王道＆広域モデルコース、絶品海鮮丼＆朝食自慢ホテル、登別・定山渓温泉旅館、カップル・子連れファミリー向け宿までおすすめの宿泊プランまで完全網羅。",
  keywords: [
    "北海道", "北海道観光", "北海道観光モデルコース", "北海道 2泊3日", "北海道 3泊4日",
    "札幌 ホテル", "函館 ホテル 朝食", "登別温泉 旅館", "北海道 海鮮", "北海道 ドライブ", "楽天トラベル"
  ],
  alternates: { canonical: "https://croud-travel.pages.dev/hokkaido" },
};

function loadHokkaidoData(): Record<string, RakutenCategoryData> {
  try {
    const dataPath = path.join(process.cwd(), "src", "data", "all_hubs_rakuten_hotels.json");
    if (fs.existsSync(dataPath)) {
      const all = JSON.parse(fs.readFileSync(dataPath, "utf8"));
      return all.hokkaido || {};
    }
  } catch (e) {
    console.error(e);
  }
  return {};
}

export default function HokkaidoHubPage() {
  const hokkaidoData = loadHokkaidoData();

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures/hokkaido" className="hover:text-teal-800 transition">北海道</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">北海道旅行 完全ガイド</span>
      </nav>

      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-teal-950 p-8 md:p-14 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-blue-400 text-slate-950 px-3.5 py-1 rounded-full uppercase shadow">
            北海道観光 完全計画ハブ 🏔️
          </span>
          <span className="text-xs font-bold text-blue-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            2泊3日・3泊4日モデルコース
          </span>
          <span className="text-xs font-bold text-teal-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            おすすめホテル・温泉旅館
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">
          【北海道旅行 完全ガイド】<br />
          <span className="bg-gradient-to-r from-blue-200 via-teal-100 to-amber-100 bg-clip-text text-transparent">
            壮大な自然・海鮮グルメ・名湯温泉＆札幌・函館・富良野
          </span>
        </h1>

        <p className="text-blue-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          大自然と美食の宝庫・北海道。「広すぎて回り方がわからない」「札幌・小樽・函館・富良野の移動時間は？」「朝食日本一のホテルや名湯温泉は？」を縦掘りし、おすすめの宿泊施設情報で繋ぐ総合ガイド。
        </p>
      </section>

      {/* 札幌・函館・登別温泉の楽天API直接取得ホテル */}
      {hokkaidoData.sapporo_hotel && (
        <section className="space-y-6 bg-white border border-blue-950/10 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="space-y-2 border-b border-blue-950/10 pb-4">
            <span className="text-[10px] font-extrabold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
              RECOMMENDED STAY
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-slate-900">
              札幌駅・大通周辺 おすすめホテル（おすすめ厳選）
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hokkaidoData.sapporo_hotel.hotels.slice(0, 3).map((hotel) => (
              <article key={hotel.hotelNo} className="flex flex-col justify-between border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div>
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="lazy" />
                    <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-blue-800 text-white px-2.5 py-0.5 rounded-full">札幌駅チカ</span>
                    {hotel.hotelMinCharge > 0 && (
                      <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">¥{Number(hotel.hotelMinCharge).toLocaleString()}〜</span>
                    )}
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-bold text-slate-500">
                      <span>{hotel.address1} {hotel.address2.slice(0, 8)}</span>
                      {hotel.reviewAverage > 0 && <span className="text-amber-600 font-extrabold">⭐ {hotel.reviewAverage} ({hotel.reviewCount}件)</span>}
                    </div>
                    <h3 className="text-sm font-black font-journal-serif text-slate-900 line-clamp-2">{hotel.hotelName}</h3>
                    <p className="text-xs text-slate-600 line-clamp-2">{hotel.hotelSpecial || hotel.access}</p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <a href={hotel.affiliateUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 rounded-xl shadow transition">
                    ✈️ 楽天トラベルで空室・プランを見る
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {hokkaidoData.hakodate_hotel && (
        <section className="space-y-6 bg-white border border-blue-950/10 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="space-y-2 border-b border-blue-950/10 pb-4">
            <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
              RECOMMENDED STAY
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-slate-900">
              函館 海鮮＆朝食バイキングが絶品の宿（おすすめ厳選）
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hokkaidoData.hakodate_hotel.hotels.slice(0, 3).map((hotel) => (
              <article key={hotel.hotelNo} className="flex flex-col justify-between border border-slate-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div>
                  <div className="aspect-video relative overflow-hidden bg-slate-100">
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="lazy" />
                    <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-amber-600 text-white px-2.5 py-0.5 rounded-full">海鮮朝食自慢</span>
                    {hotel.hotelMinCharge > 0 && (
                      <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">¥{Number(hotel.hotelMinCharge).toLocaleString()}〜</span>
                    )}
                  </div>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[9px] font-bold text-slate-500">
                      <span>{hotel.address1} {hotel.address2.slice(0, 8)}</span>
                      {hotel.reviewAverage > 0 && <span className="text-amber-600 font-extrabold">⭐ {hotel.reviewAverage} ({hotel.reviewCount}件)</span>}
                    </div>
                    <h3 className="text-sm font-black font-journal-serif text-slate-900 line-clamp-2">{hotel.hotelName}</h3>
                    <p className="text-xs text-slate-600 line-clamp-2">{hotel.hotelSpecial || hotel.access}</p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <a href={hotel.affiliateUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 text-xs font-black text-amber-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow transition">
                    ✈️ 楽天トラベルで朝食プランを見る
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
