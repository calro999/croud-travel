import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【熊本・阿蘇カルデラ＆南阿蘇】大観峰・草千里ヶ浜＆あか牛・白川水源宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界最大級のカルデラ・熊本阿蘇エリア完全特化！大観峰の360度パノラマ、草千里ヶ浜の引き馬体験、名水白川水源、阿蘇五岳を望む展望温泉露天風呂、名物「あか牛丼・あか牛ステーキ会席宿」を徹底解説。",
  keywords: ["kumamoto-aso-caldera-minamiaso-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kumamoto-aso-caldera-minamiaso-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kumamoto-aso-caldera-minamiaso-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "aso_caldera_view_onsen",
    "title": "1. 大観峰〜草千里ヶ浜・阿蘇中岳火口（世界最大級カルデラの絶景パノラマ）",
    "timing": "通年（春〜夏の新緑草原・秋のすすきと雲海・冬の雪化粧）",
    "desc": "標高936m、阿蘇カルデラと阿蘇五岳を一望する最高峰の展望台「大観峰」。噴煙を上げる中岳火口を望む「草千里ヶ浜」での引き馬体験や烏帽子岳ハイク。「阿蘇火山博物館」と火口見学道路（阿蘇パノラマライン）。",
    "spots": "大観峰展望台、草千里ヶ浜（草千里展望デッキ・引き馬）、阿蘇中岳火口、道の駅阿蘇",
    "access": "JR豊肥本線「阿蘇駅」下車。熊本空港より車・バスで約50分。",
    "tip": "秋の早朝（10月〜11月）には大観峰から阿蘇谷を覆い尽くす幻想的な「雲海」が高確率で発生します。"
  },
  {
    "key": "minamiaso_nature_water_stay",
    "title": "2. 南阿蘇〜白川水源・トロッコ列車（毎分60トン湧出する名水と里山風景）",
    "timing": "通年（清涼な名水と四季の花々）",
    "desc": "環境省名水百選に選ばれ、常温14度の名水が毎分60トン自噴する「白川水源」。南阿蘇鉄道の観光トロッコ列車「ゆうすげ号」や新名所「新阿蘇大橋展望所ヨ・ミュール」。阿蘇五岳の南麓に湧く美肌の南阿蘇温泉郷。",
    "spots": "白川水源（水汲み場・名水カフェ）、南阿蘇鉄道（高森駅・立野駅・第一白川橋梁）、あそ望の郷くぎの",
    "access": "南阿蘇鉄道沿線。熊本市内より車で約45分。",
    "tip": "白川水源ではペットボトルを持参すれば、湧き出たまろやかで澄んだ名水をそのまま持ち帰ることができます。"
  },
  {
    "key": "aso_akagyu_gourmet_stay",
    "title": "3. 熊本名物「あか牛」＆極上馬刺し（赤身の旨味が凝縮された褐毛和種）",
    "timing": "通年（脂肪分が少なくヘルシーでジューシーな赤身肉）",
    "desc": "阿蘇の大自然で放牧され、ミネラル豊富な牧草を食べて育つ「熊本あか牛（褐毛和種）」。炭火で香ばしく焼き上げるあか牛サーロインステーキや、甘辛いタレと半熟卵が絡む「あか牛丼」。本場熊本の特選霜降り馬刺し。",
    "spots": "いまきん食堂（あか牛丼発祥店）、阿蘇とり宮（あか牛の油揚げ・コロッケ）、道の駅波野",
    "access": "阿蘇・内牧温泉・南阿蘇。",
    "tip": "「内牧温泉街」にはあか牛料理専門店が多数立ち並んでおり、食べ比べを楽しむのが阿蘇観光の醍醐味です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ASO CALDERA & NATURE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【熊本・阿蘇カルデラ＆南阿蘇】大観峰・草千里ヶ浜＆あか牛・白川水源宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            世界最大級の火山カルデラが織りなす雄大な大地「熊本・阿蘇」。大観峰から見下ろす雲海と阿蘇五岳「涅槃像」。草千里ヶ浜のエメラルドグリーンの草原。名水・白川水源が育むヘルシーな極上「あか牛」に舌鼓を打つ大自然の旅。
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
