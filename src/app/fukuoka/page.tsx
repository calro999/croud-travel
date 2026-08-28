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
  title: "【福岡・博多旅行 完全計画ガイド 2026】1泊2日・2泊3日モデルコース＆博多駅・天神・中洲屋台・もつ鍋水炊きグルメ・温泉宿 ｜ 旅宿クラウド",
  description:
    "福岡・博多旅行の計画を完全サポート！1泊2日/2泊3日モデルコース、中洲屋台・もつ鍋・ラーメン食べ歩き、博多駅直結ホテル、明太子朝食バイキング宿から温泉旅館までおすすめの宿泊プランまで徹底網羅。",
  keywords: [
    "福岡", "博多", "福岡観光", "福岡観光モデルコース", "博多駅 ホテル", "天神 ホテル",
    "福岡 ホテル 朝食", "福岡 温泉旅館", "楽天トラベル"
  ],
  alternates: { canonical: "https://croud-travel.pages.dev/fukuoka" },
};

function loadFukuokaData(): Record<string, RakutenCategoryData> {
  try {
    const dataPath = path.join(process.cwd(), "src", "data", "all_hubs_rakuten_hotels.json");
    if (fs.existsSync(dataPath)) {
      const all = JSON.parse(fs.readFileSync(dataPath, "utf8"));
      return all.fukuoka || {};
    }
  } catch (e) {
    console.error(e);
  }
  return {};
}

export default function FukuokaHubPage() {
  const fukuokaData = loadFukuokaData();

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures/fukuoka" className="hover:text-teal-800 transition">福岡県</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">福岡・博多旅行 完全ガイド</span>
      </nav>

      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-red-950 via-amber-950 to-stone-900 p-8 md:p-14 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-red-500 text-white px-3.5 py-1 rounded-full uppercase shadow">
            福岡観光 完全計画ハブ 🍜
          </span>
          <span className="text-xs font-bold text-amber-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            1泊2日・2泊3日モデルコース
          </span>
          <span className="text-xs font-bold text-teal-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            おすすめホテル・温泉旅館
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">
          【福岡・博多旅行 完全ガイド】<br />
          <span className="bg-gradient-to-r from-amber-200 via-red-200 to-amber-100 bg-clip-text text-transparent">
            屋台・もつ鍋グルメ・太宰府・糸島＆博多駅周辺ホテル
          </span>
        </h1>

        <p className="text-amber-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          アジアの玄関口・グルメ都市福岡。「空港から博多駅へのアクセスは？」「中洲屋台や太宰府天満宮・糸島の回り方は？」「明太子食べ放題朝食の宿は？」を縦掘りし、おすすめの宿泊施設情報で繋ぐ総合ガイド。
        </p>
      </section>

      {/* 博多駅・天神の楽天API直接取得ホテル */}
      {fukuokaData.hakata_hotel && (
        <section className="space-y-6 bg-white border border-red-950/10 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="space-y-2 border-b border-red-950/10 pb-4">
            <span className="text-[10px] font-extrabold text-red-800 bg-red-50 border border-red-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
              RECOMMENDED STAY
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-900">
              博多駅周辺 おすすめホテル（おすすめ厳選）
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fukuokaData.hakata_hotel.hotels.slice(0, 3).map((hotel) => (
              <article key={hotel.hotelNo} className="flex flex-col justify-between border border-stone-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div>
                  <div className="aspect-video relative overflow-hidden bg-stone-100">
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="lazy" />
                    <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-red-800 text-white px-2.5 py-0.5 rounded-full">博多駅チカ</span>
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
                  <a href={hotel.affiliateUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-red-700 to-red-800 hover:from-red-600 hover:to-red-700 rounded-xl shadow transition">
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
