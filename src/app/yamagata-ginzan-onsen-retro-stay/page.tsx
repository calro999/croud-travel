import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【山形・銀山温泉】ガス灯揺れる大正ロマン木造街＆尾花沢牛極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "山形・銀山温泉エリア完全特化！銀山川沿いの木造三層四層楼閣、ガス灯の夜景、隈研吾設計の藤屋、尾花沢牛・鴨鍋グルメと雪景色露天風呂旅館を徹底解説。",
  keywords: ["yamagata-ginzan-onsen-retro-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamagata-ginzan-onsen-retro-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamagata-ginzan-onsen-retro-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "ginzan_river_side",
    "title": "1. 銀山川沿い・温泉街中心部（ガス灯が灯る木造多層楼閣と鏝絵の景観）",
    "timing": "通年（特に12月下旬〜3月上旬の白銀の雪景色が最高潮）",
    "desc": "銀山川の両岸に大正末期から昭和初期に建てられた洋風木造多層建築が立ち並ぶメインストリート。壁面に描かれた色鮮やかな「鏝絵（こてえ）」や、夜のガス灯ライトアップを眺めながらそぞろ歩き。",
    "spots": "銀山温泉街（ガス灯ライトアップ）、和楽足湯（わらしゆ）、しろがね湯（隈研吾設計）、能登屋旅館（登録有形文化財）",
    "access": "JR山形新幹線「大石田駅」より銀山線路線バス「はながさバス」で約40分。各旅館の無料送迎バスあり。",
    "tip": "夕暮れから日没後30分（ブルーアワー）は、雪景色とガス灯のオレンジ色の光が最も美しく重なる奇跡の時間帯です。"
  },
  {
    "key": "ginzan_obanazawa_wagyu",
    "title": "2. 尾花沢牛＆山形郷土の味覚（極上の霜降り和牛と名物カリーパン食べ歩き）",
    "timing": "通年（冬の鴨鍋・山菜料理）",
    "desc": "寒暖差の激しい気候で育まれた最高級黒毛和牛「尾花沢牛」。銀山温泉の老舗宿で味わうすき焼きや陶板焼き会席。「はいからさんのカリーパン」や出来立ての「立ち喰い豆腐」など散策グルメも充実。",
    "spots": "はいからさんのカリーパン、野川とうふや（立ち喰い生揚げ）、伊豆の華（蕎麦カフェ）",
    "access": "温泉街の中心部、徒歩圏内に点在。",
    "tip": "「野川とうふや」の手作り生揚げは、外はカリッと中は熱々ジューシーで、足湯に浸かりながら食べるのが定番です。"
  },
  {
    "key": "ginzan_takimidai",
    "title": "3. 白銀公園〜延沢銀坑道（落差22mの名瀑と歴史ある銀山跡トレッキング）",
    "timing": "グリーンシーズン：5月〜11月（冬期は積雪のため一部立ち入り制限あり）",
    "desc": "温泉街の最奥に広がる自然公園。豪快な水しぶきを上げる「白銀の滝」や、かつて日本三大銀山と称された「延沢銀坑道」。静かなせせらぎを聞きながらのマイナスイオン散策。",
    "spots": "白銀の滝、籟音滝（らいおんのたき）、延沢銀坑道（銀鉱洞・国の史跡）、滝見館周辺",
    "access": "温泉街奥より遊歩道徒歩約5〜20分。",
    "tip": "滝見館の高台露天風呂からは、四季折々の山並みと白銀の渓谷を一望する絶景湯あみが楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            GINZAN ONSEN MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【山形・銀山温泉】ガス灯揺れる大正ロマン木造街＆尾花沢牛極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            まるで大正時代にタイムスリップしたかのような木造多層建築の温泉街。夕暮れ時にオレンジ色のガス灯が灯り、川面から立ち上る湯けむり。冬の白銀に包まれる日本一フォトジェニックな名湯へ。
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
