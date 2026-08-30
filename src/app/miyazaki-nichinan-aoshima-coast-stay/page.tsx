import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【宮崎・日南海岸＆青島】青島神社・鬼の洗濯板＆サンメッセ日南モアイ・宮崎牛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "南国のパームツリーと神話の海岸線・宮崎日南海岸＆青島エリア完全特化！国指定天然記念物「青島・鬼の洗濯板」、サンメッセ日南の完全復刻モアイ像、鵜戸神宮の運玉投げ、青島天然温泉、最高級宮崎牛＆日南一本釣りカツオ宿を徹底解説。",
  keywords: ["miyazaki-nichinan-aoshima-coast-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["miyazaki-nichinan-aoshima-coast-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for miyazaki-nichinan-aoshima-coast-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "aoshima_coast_resort_onsen",
    "title": "1. 青島〜青島神社・鬼の洗濯板（弥生橋を渡る縁結びの島と波状岩）",
    "timing": "通年（夏のビーチアクティビティ・冬のプロ野球キャンプ）",
    "desc": "熱帯・亜熱帯植物に覆われた周囲約1.5kmの小島「青島」。島の中央に鎮座する縁結びのパワースポット「青島神社」。干潮時に姿を現す天然記念物「鬼の洗濯板（奇岩波状岩）」。とろみのある炭酸水素塩泉の青島温泉。",
    "spots": "青島（弥生橋・トゥクトゥク）、青島神社（元宮・天の平瓮投げ）、鬼の洗濯板、AOSHIMA BEACH PARK",
    "access": "JR日南線「青島駅」下車徒歩約10分。宮崎空港より車・バスで約15分。",
    "tip": "青島神社奥の「元宮」では、素焼きの小皿（平瓮）を願い事を込めながら投げる神事があり、神聖な熱帯林の空気が漂います。"
  },
  {
    "key": "nichinan_udo_shrine_stay",
    "title": "2. 鵜戸神宮〜サンメッセ日南・堀切峠（洞窟の神社とイースター島公認モアイ像）",
    "timing": "通年（太平洋の水平線パノラマとドライブ）",
    "desc": "太平洋の断崖絶壁の洞窟の中に朱塗りの本殿が鎮座する「鵜戸神宮（うどじんぐう）」。亀石の穴に願いを込めて投げる「運玉投げ」。イースター島の長老会から特別許可を得て完全復刻された「サンメッセ日南」の7体のモアイ像。",
    "spots": "鵜戸神宮（亀石・お乳岩・運玉）、サンメッセ日南（モアイ像・天空のブランコ）、堀切峠・道の駅フェニックス（日向夏ソフト）",
    "access": "宮崎市内より車で約40〜50分。路線バス運行。",
    "tip": "鵜戸神宮の運玉投げは、男性は左手、女性は右手で投げ、亀石の背中の窪みに入ると願いが叶うと伝えられています。"
  },
  {
    "key": "miyazaki_beef_katsuo_gourmet",
    "title": "3. 内閣総理大臣賞「宮崎牛」＆日南カツオ（全国和牛共進会史上初の4大会連続最高賞）",
    "timing": "通年（春〜秋は日南一本釣りカツオが旬）",
    "desc": "全国和牛能力共進会で4大会連続の内閣総理大臣賞を受賞した最高峰黒毛和牛「宮崎牛」。とろけるような霜降りサーロインステーキ。一本釣り漁獲量日本一を誇る日南の「初ガツオ・戻りガツオ」のタタキ、宮崎名物「チキン南蛮」。",
    "spots": "宮崎牛鉄板焼き店、日南一本釣りカツオ炙り重提供店、道の駅なんごう（マンゴースイーツ）",
    "access": "宮崎・青島・日南エリア。",
    "tip": "日南名物「カツオ一本釣り炙り重」は、特製タレに漬けた新鮮なカツオを自分で七輪で炙り、最後に出汁茶漬けにして楽しむ絶品ご当地グルメです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            NICHINAN & AOSHIMA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【宮崎・日南海岸＆青島】青島神社・鬼の洗濯板＆サンメッセ日南モアイ・宮崎牛宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            どこまでも続く青い太平洋とフェニックスの並木道「宮崎・日南海岸」。周囲1.5kmの聖なる島「青島」を囲む奇岩・鬼の洗濯板。洞窟の中に本殿が鎮座する鵜戸神宮。トロピカルなリゾート温泉と、日本一の宮崎牛ステーキを味わう南国ステイ。
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
