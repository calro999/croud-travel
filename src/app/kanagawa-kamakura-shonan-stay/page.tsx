import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【古都鎌倉＆湘南江の島】鶴岡八幡宮・江ノ電・富士夕景ホテル 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "鎌倉・湘南・江の島エリア完全特化！鶴岡八幡宮、小町通り、高徳院大仏、江ノ電沿線、七里ヶ浜オーシャンビューホテルと相模湾の地魚・しらすグルメを徹底解説。",
  keywords: ["kanagawa-kamakura-shonan-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kanagawa-kamakura-shonan-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kanagawa-kamakura-shonan-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kamakura_station_walk",
    "title": "1. 鎌倉駅〜小町通り＆鶴岡八幡宮（古都の歴史散策と食べ歩き）",
    "timing": "通年（春の段葛桜並木・秋の紅葉・年末年始初詣）",
    "desc": "源頼朝ゆかりの鶴岡八幡宮へ続く「段葛」と、人気スイーツ店や伝統工芸店が並ぶ「小町通り」。朝の静かな時間に八幡宮を参拝し、鎌倉野菜や手打ち蕎麦を味わう贅沢な散策ステイ。",
    "spots": "鶴岡八幡宮、段葛、小町通り、鎌倉国宝館、銭洗弁財天宇賀福神社",
    "access": "JR横須賀線・湘南新宿ライン「鎌倉駅」東口下車徒歩すぐ。東京・新宿から直通約55分。",
    "tip": "早朝の段葛散策（朝7時〜8時頃）は人通りが少なく、鶴岡八幡宮の清々しい神域の空気を満喫できます。"
  },
  {
    "key": "shichirigahama_ocean",
    "title": "2. 七里ヶ浜＆由比ヶ浜（相模湾越しに富士山と江の島を望む特等席）",
    "timing": "通年（秋・冬の澄んだ夕景・サンセットタイムが至高）",
    "desc": "江ノ電の車窓に広がる青い海。七里ヶ浜沿いのラグジュアリーホテルや由比ヶ浜の古民家宿では、客室のテラスから海に沈む夕日と富士山のシルエットを眺め、名物ブレックファーストを満喫。",
    "spots": "七里ヶ浜海岸、稲村ヶ崎（夕日スポット）、bills七里ヶ浜、由比ヶ浜海岸",
    "access": "江ノ島電鉄「七里ヶ浜駅」「由比ヶ浜駅」下車。",
    "tip": "稲村ヶ崎から眺める「江の島と富士山の夕景」はかながわの景勝50選に選ばれる絶景フォトスポットです。"
  },
  {
    "key": "enoshima_bayside",
    "title": "3. 江の島島内＆片瀬海岸（江島神社参拝と天然温泉・生しらすグルメ）",
    "timing": "通年（冬期は湘南の宝石イルミネーション開催）",
    "desc": "江の島弁天橋を渡って島内へ。江島神社の三宮巡りや江の島シーキャンドル展望台からの360度パノラマ。片瀬海岸沿いの天然温泉付きホテルで、名物「生しらす丼」やサザエの壺焼きを堪能。",
    "spots": "江島神社（辺津宮・中津宮・奥津宮）、江の島シーキャンドル（展望灯台）、江の島岩屋、新江ノ島水族館",
    "access": "小田急江ノ島線「片瀬江ノ島駅」、江ノ電「江ノ島駅」、湘南モノレール「湘南江の島駅」。",
    "tip": "冬に開催される「湘南の宝石（江の島イルミネーション）」は関東三大イルミネーション認定の圧巻の輝きです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KAMAKURA & ENOSHIMA MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【古都鎌倉＆湘南江の島】鶴岡八幡宮・江ノ電・富士夕景ホテル 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            江ノ電がコトコト走る相模湾沿い。由緒ある古社寺の静寂と、夕日に染まる富士山と江の島シーキャンドル。都心から1時間で出逢える極上の湘南リゾートステイ。
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
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
              {/* エリア見出し */}
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

              {/* 観光・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ見どころ・スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 満足度を高める滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
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
