import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【山形・鶴岡＆羽黒山・出羽三山】国宝羽黒山五重塔・杉並木＆精進料理・庄内浜宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "生まれ変わりの旅・出羽三山（羽黒山・月山・湯殿山）＆鶴岡エリア完全特化！国宝「羽黒山五重塔」、樹齢1000年爺杉と2446段石段杉並木、羽黒修験の伝統「精進料理」、湯野浜温泉、名物「庄内浜海の幸宿」を徹底解説。",
  keywords: ["yamagata-tsuruoka-hagurosan-dewasanzan-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamagata-tsuruoka-hagurosan-dewasanzan-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamagata-tsuruoka-hagurosan-dewasanzan-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hagurosan_shukubo_onsen_stay",
    "title": "1. 羽黒山〜国宝五重塔・爺杉・2446段石段（ミシュラン三ツ星の巨樹回廊）",
    "timing": "通年（新緑の5〜6月・秋の紅葉・冬の雪中参拝）",
    "desc": "約1400年の歴史を持つ修験道の霊場。随神門をくぐると続く約1.7km・2446段の石段と樹齢300〜500年の杉並木（国の特別天然記念物）。東北最古の「国宝 羽黒山五重塔」。樹齢1000年の巨木「爺杉」。山頂の三神合祭殿。",
    "spots": "国宝 羽黒山五重塔、羽黒山杉並木・石段、爺杉、三神合祭殿（国の重要文化財）、手向（とうげ）宿坊街",
    "access": "JR鶴岡駅より庄内交通バス「羽黒山頂行」で約40〜50分。庄内空港より車約40分。",
    "tip": "羽黒山の石段には盃やひょうたんなど33個の彫刻が彫られており、すべて見つけると願いが叶うと言われています。"
  },
  {
    "key": "tsuruoka_gastronomy_stay",
    "title": "2. 日本初ユネスコ食文化創造都市・鶴岡〜致道館・加茂水族館（クラゲドリーム館）",
    "timing": "通年（世界一のクラゲ展示・庄内映画村）",
    "desc": "日本で初めてユネスコ食文化創造都市に認定された鶴岡市。約80種類のクラゲを展示する「加茂水族館（クラゲドリーム館）」。庄内藩主酒井家の旧致道館。鶴岡カトリック教会天主堂。日本海の海岸美・由良海岸。",
    "spots": "加茂水族館（クラゲドリームシアター）、庄内藩校 致道館、鶴岡カトリック教会、由良海岸（白山島）",
    "access": "JR鶴岡駅周辺・加茂港。",
    "tip": "加茂水族館の直径5mの円形水槽「クラゲドリームシアター」は約1万匹のミズクラゲが浮遊し、幻想的な癒やしのフォトスポットです。"
  },
  {
    "key": "haguro_shojin_seafood_stay",
    "title": "3. 出羽三山「精進料理」＆庄内浜の海の幸（山伏の知恵と日本海の旬魚）",
    "timing": "通年（春の山菜・夏の岩ガキ・秋の庄内柿・冬の寒鱈汁）",
    "desc": "羽黒山伏の修行食から生まれた伝統の「精進料理」。吉野葛と炒り胡麻を丁寧に練り上げた「ごま豆腐」や月山筍、山菜料理。庄内浜の冷たい海で獲れるズワイガニ、のどぐろ、冬の名物「寒鱈汁（どんがら汁）」。",
    "spots": "斎館（羽黒山頂の精進料理食事処）、手向宿坊の郷土料理、湯野浜温泉の割烹旅館",
    "access": "鶴岡市・湯野浜温泉・羽黒町。",
    "tip": "羽黒山頂の「斎館」では、月山や羽黒山の豊かな伏流水と野山で採れた山菜・キノコを使った本格的な精進料理を完全予約制でいただけます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            DEWA SANZAN & HAGURO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【山形・鶴岡＆羽黒山・出羽三山】国宝羽黒山五重塔・杉並木＆精進料理・庄内浜宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            現世の幸せを祈る「羽黒山」、過去を清める「月山」、未来の生まれ変わりを願う「湯殿山」の出羽三山。樹齢数百年の杉並木と国宝五重塔。修験僧が受け継いできた精進料理のごま豆腐や山菜。日本海の絶景夕陽を望む湯野浜温泉と庄内美食の旅。
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
