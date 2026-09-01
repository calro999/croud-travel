import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【ハウステンボス直営＆オフィシャルホテル】ヨーロッパの街並み＆イルミネーション宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本一の広さを誇るテーマパーク完全特化！長崎ハウステンボス直営・オフィシャルホテル！パーク内運河に佇む「ホテルヨーロッパ」、場内唯一の天然温泉宿、1300万球の光の王国イルミネーション確約ビューホテルを徹底解説。",
  keywords: ["huistenbosch-official-hotel-nagasaki-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["huistenbosch-official-hotel-nagasaki-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for huistenbosch-official-hotel-nagasaki-stay", e);
  }
  return {};
}

export default function ThemeParkActivityHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "huistenbosch_direct_luxury_hotel",
    "title": "1. ハウステンボス場内直営ホテル（専用クルーザーで運河を渡るチェックイン）",
    "timing": "通年（春のチューリップ祭・秋のハロウィーン・冬の光の街のクリスマス）",
    "desc": "ハウステンボス場内に位置する直営ホテル「ホテルヨーロッパ」「ホテルアムステルダム」。ウェルカムゲートから宿泊者専用カナルクルーザーで運河を進みホテルへチェックイン。毎夜ロビーで開催されるクラシック生演奏コンサート。",
    "spots": "ハウステンボス（タワーシティ、光のファンタジアシティ、フラワーロード、アンブレラストリート）",
    "access": "JR大村線「ハウステンボス駅」下車徒歩約5分。長崎空港より高速船で約50分。",
    "tip": "「ホテルヨーロッパ」に宿泊すると、開園前の静寂に包まれた朝のヨーロッパの街並みを誰もいない状態で優雅に散策できる特別な特権があります。"
  },
  {
    "key": "huistenbosch_official_onsen_stay",
    "title": "2. ハウステンボス温泉＆オフィシャルホテル群（黄金の湯と充実のバイキング）",
    "timing": "通年（ファミリー・カップルに快適なスパリゾート）",
    "desc": "JRハウステンボス駅前にそびえる「ホテルオークラJRハウステンボス」や「ホテル日航ハウステンボス」。100%源泉かけ流しの天然温泉「琴乃湯（黄金色のナトリウム塩化物泉）」。佐世保名物レモンステーキや長崎名物が並ぶ朝食。",
    "spots": "ホテルオークラJRハウステンボス（天然温泉・ベーカリー）、ホテル日航ハウステンボス（専用再入場ゲート）",
    "access": "JRハウステンボス駅前。",
    "tip": "ホテルオークラJRハウステンボスはアムステルダム中央駅を模した美しい外観で、館内の天然温泉露天風呂からはハウステンボスのカナルが望めます。"
  },
  {
    "key": "huistenbosch_illumination_view_stay",
    "title": "3. 日本一1300万球「光の王国」イルミネーション（客室の窓から望む光の海）",
    "timing": "通年（世界最大級のイルミネーションフェスティバル）",
    "desc": "全国イルミネーションランキングで10年連続第1位に輝く「光の王国」。光と音楽の噴水ショー「ウォーターマジック」、シンボルタワー「ドムトールン」の展望台。パークビュー客室の窓一面に広がる幻想的な光のパノラマ。",
    "spots": "アートガーデン（光の滝・光のオーケストラ）、ドムトールン展望台、白銀の世界、ファンタジアストリート",
    "access": "ハウステンボス場内各所。",
    "tip": "ドムトールン展望室（地上80m）へは夕暮れ時に登ると、夕陽に染まる大村湾と一斉に点灯する1300万球のイルミネーションを360度見渡せます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HUIS TEN BOSCH HOTEL GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【ハウステンボス直営＆オフィシャルホテル】ヨーロッパの街並み＆イルミネーション宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ヨーロッパの街並みと運河が広がる異国情緒のワンダーランド「ハウステンボス」。専用クルーザーでチェックインする最高級ホテルヨーロッパや、パーク内直営ホテル。日本一の1300万球イルミネーションを客室から見下ろす贅沢な休日へ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* パーク特典・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要アトラクション＆スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆シャトル運行</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 パーク＆アクティビティ満喫のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選ホテル</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    提携プラン
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                              ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                            </span>
                          )}
                        </div>

                        <div className="p-4 space-y-2">
                          {hotel.reviewAverage > 0 && (
                            <div className="flex items-center justify-between text-[9px] font-bold text-amber-600">
                              <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                            </div>
                          )}
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
                              {hotel.hotelSpecial}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-8">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
