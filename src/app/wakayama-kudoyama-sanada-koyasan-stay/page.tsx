import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【和歌山・高野山山麓＆九度山】真田幸村蟄居の地・善名称院＆世界遺産慈尊院・富有柿宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "戦国最後の英雄・真田幸村が14年間過ごした隠れ里・和歌山九度山エリア完全特化！真田屋敷跡「善名称院（真田庵）」、九度山・真田ミュージアム、世界遺産「慈尊院・丹生官省符神社」、高野参詣道町石道、名産「九度山の富有柿宿」を徹底解説。",
  keywords: ["wakayama-kudoyama-sanada-koyasan-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["wakayama-kudoyama-sanada-koyasan-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for wakayama-kudoyama-sanada-koyasan-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kudoyama_sanada_heritage_stay",
    "title": "1. 真田庵（善名称院）〜九度山・真田ミュージアム（真田昌幸・幸村父子の足跡）",
    "timing": "通年（5月4・5日の真田まつり武者行列・秋の柿収穫期）",
    "desc": "関ヶ原の合戦後に蟄居を命じられた真田昌幸・幸村が14年間暮らした屋敷跡「善名称院（真田庵）」。真田の抜け穴伝説が残る古墳。「九度山・真田ミュージアム」での大坂の陣シアター展示。南海高野線「九度山駅」の真田装飾。",
    "spots": "真田庵（善名称院・真田昌幸の墓・真田宝物資料館）、九度山・真田ミュージアム、真田のみち（商店街）、道の駅柿の郷くどやま",
    "access": "南海高野線「九度山駅」下車徒歩約10分。難波駅から急行で約50分。",
    "tip": "南海電鉄「九度山駅」の駅舎内には「おむすびスタンド くど」があり、地元産のお米をかまどで炊き上げた絶品おむすびが朝食に大人気です。"
  },
  {
    "key": "jisonin_koyasan_gateway_stay",
    "title": "2. 世界遺産・慈尊院〜丹生官省符神社・町石道（女人高野と高野山への表参道）",
    "timing": "通年（春の桜・初夏の新緑・秋の紅葉）",
    "desc": "弘法大師空海の母公が暮らしたことから「女人高野」と呼ばれる世界遺産「慈尊院（乳癌平癒・安産祈願）」。高野山開創の地主神を祀る世界遺産「丹生官省符神社」。慈尊院から高野山壇上伽藍まで続く約24kmの祈りの古道「高野参詣道 町石道」。",
    "spots": "世界遺産 慈尊院（弥勒堂・多宝塔）、世界遺産 丹生官省符神社（朱塗り大鳥居）、町石道（一町ごとに立つ五輪卒塔婆）",
    "access": "九度山駅より徒歩約20分。",
    "tip": "慈尊院は女性の健康と子授け・安産祈願の寺院として有名で、境内には手作りの「乳房型絵馬」が無数に奉納されている全国的にも珍しい聖地です。"
  },
  {
    "key": "kudoyama_persimmon_kisyu_gourmet",
    "title": "3. 日本一の味「九度山の富有柿」＆柿の葉すし（紀ノ川の陽光が育む甘み）",
    "timing": "秋〜冬期（10月下旬〜12月中旬は富有柿の最盛期）",
    "desc": "昼夜の寒暖差と排水の良い赤土が育む最高峰の甘柿「九度山の富有柿」。シャキッとした歯ごたえと極上の糖度。柿の葉でサバや鮭を包んだ伝統の「柿の葉すし」。紀の川の鮎料理や和歌山特産の「熊野牛」。",
    "spots": "道の駅柿の郷くどやま（産直市場・ベーカリー）、柿の葉すし九和楽、紀の川沿い割烹",
    "access": "九度山町・橋本市エリア。",
    "tip": "秋のシーズンには、道の駅柿の郷くどやまに朝獲れの完熟富有柿がずらりと並び、全国から柿を求める人々で賑わいます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KUDOYAMA & SANADA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【和歌山・高野山山麓＆九度山】真田幸村蟄居の地・善名称院＆世界遺産慈尊院・富有柿宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            関ヶ原の戦い後、真田昌幸・幸村父子が再起を期して雌伏の時を過ごした「紀州・九度山」。六文銭の旗印が掲げられる真田庵とミュージアム。弘法大師の母が眠る女人高野「慈尊院」。高野山への表参道町石道を歩き、日本一の富有柿と紀州グルメを味わう旅。
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
