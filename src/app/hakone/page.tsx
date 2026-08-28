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
  title: "【箱根温泉 完全計画ガイド 2026】1泊2日・2泊3日モデルコース＆箱根湯本・強羅・芦ノ湖・露天風呂付き客室・カップル温泉宿 ｜ 旅宿クラウド",
  description:
    "箱根温泉旅行の計画を完全サポート！ロマンスカーで行く1泊2日王道モデルコース、箱根湯本・強羅・仙石原・芦ノ湖のエリア別見所、客室露天風呂・部屋食付き高級温泉旅館から日帰り温泉までおすすめの宿泊プランまで徹底網羅。",
  keywords: [
    "箱根", "箱根温泉", "箱根観光", "箱根 モデルコース", "箱根 1泊2日", "箱根湯本 ホテル",
    "強羅 温泉 旅館", "箱根 露天風呂付き客室", "箱根 カップル 温泉", "楽天トラベル"
  ],
  alternates: { canonical: "https://croud-travel.pages.dev/hakone" },
};

function loadHakoneData(): Record<string, RakutenCategoryData> {
  try {
    const dataPath = path.join(process.cwd(), "src", "data", "all_hubs_rakuten_hotels.json");
    if (fs.existsSync(dataPath)) {
      const all = JSON.parse(fs.readFileSync(dataPath, "utf8"));
      return all.hakone || {};
    }
  } catch (e) {
    console.error(e);
  }
  return {};
}

export default function HakoneHubPage() {
  const hakoneData = loadHakoneData();

  return (
    <div className="space-y-12 max-w-5xl mx-auto">
      <nav aria-label="Breadcrumb" className="text-xs font-bold text-teal-900/60 flex items-center gap-2">
        <Link href="/" className="hover:text-teal-800 transition">ホーム</Link>
        <span>/</span>
        <Link href="/prefectures/kanagawa" className="hover:text-teal-800 transition">神奈川県</Link>
        <span>/</span>
        <span className="text-emerald-950 font-bold">箱根温泉 完全ガイド</span>
      </nav>

      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-stone-900 via-emerald-950 to-amber-950 p-8 md:p-14 text-white shadow-xl space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-extrabold tracking-widest bg-emerald-400 text-emerald-950 px-3.5 py-1 rounded-full uppercase shadow">
            箱根温泉 完全計画ハブ ♨️
          </span>
          <span className="text-xs font-bold text-amber-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            1泊2日・2泊3日モデルコース
          </span>
          <span className="text-xs font-bold text-emerald-200 bg-white/10 px-3 py-1 rounded-full border border-white/20">
            おすすめホテル・温泉旅館
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight text-white">
          【箱根温泉 完全ガイド】<br />
          <span className="bg-gradient-to-r from-amber-200 via-emerald-200 to-amber-100 bg-clip-text text-transparent">
            名湯露天風呂・富士山絶景・芦ノ湖＆箱根湯本・強羅宿
          </span>
        </h1>

        <p className="text-emerald-100/90 text-xs md:text-sm max-w-3xl leading-relaxed font-medium">
          首都圏屈指の温泉郷・箱根。「箱根フリーパスを使った周遊ルートは？」「箱根湯本と強羅、どっちに泊まるべき？」「記念日デートにぴったりの客室露天風呂宿は？」を縦掘りし、おすすめの宿泊施設情報で繋ぐ総合ガイド。
        </p>
      </section>

      {/* 箱根湯本・強羅の楽天API直接取得温泉旅館 */}
      {hakoneData.yumoto_ryokan && (
        <section className="space-y-6 bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm">
          <div className="space-y-2 border-b border-emerald-950/10 pb-4">
            <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase tracking-wider">
              RECOMMENDED STAY
            </span>
            <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-900">
              箱根湯本・強羅 おすすめ温泉旅館（おすすめ厳選）
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hakoneData.yumoto_ryokan.hotels.slice(0, 3).map((hotel) => (
              <article key={hotel.hotelNo} className="flex flex-col justify-between border border-stone-200 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
                <div>
                  <div className="aspect-video relative overflow-hidden bg-stone-100">
                    <img src={hotel.hotelImageUrl} alt={hotel.hotelName} className="w-full h-full object-cover" loading="lazy" />
                    <span className="absolute top-2 left-2 text-[9px] font-extrabold bg-emerald-800 text-white px-2.5 py-0.5 rounded-full">箱根温泉</span>
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
                  <a href={hotel.affiliateUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-emerald-700 to-teal-800 hover:from-emerald-600 hover:to-teal-700 rounded-xl shadow transition">
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
