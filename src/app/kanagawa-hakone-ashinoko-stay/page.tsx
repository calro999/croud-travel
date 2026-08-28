import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【箱根・芦ノ湖＆元箱根】湖畔鳥居・海賊船＆富士ビュー極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "箱根・芦ノ湖・元箱根エリア完全特化！箱根神社「平和の鳥居」、芦ノ湖遊覧海賊船、成川美術館、湖畔ベーカリーカフェと絶景オーシャンビューならぬレイクビュー温泉ホテルを徹底解説。",
  keywords: ["kanagawa-hakone-ashinoko-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kanagawa-hakone-ashinoko-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kanagawa-hakone-ashinoko-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "motohakone_jingu",
    "title": "1. 元箱根港〜箱根神社（湖上の「平和の鳥居」と九頭龍神社縁結び）",
    "timing": "通年（早朝の湖畔散策・毎月13日の九頭龍神社本祭）",
    "desc": "芦ノ湖の水面に鮮やかに映える箱根神社「平和の鳥居」。早朝の澄んだ空気の中で参拝し、湖畔の「Bakery & Table 東海」で足湯に浸かりながら焼きたてパンを味わう至福のモーニング。",
    "spots": "箱根神社（平和の鳥居・九頭龍神社新宮）、成川美術館（現代日本画と展望ラウンジ）、Bakery & Table 東海",
    "access": "小田急箱根高速バス「元箱根港」下車すぐ。箱根登山バス「元箱根港」行き。",
    "tip": "成川美術館の展望ラウンジの巨大ガラス窓から眺める「芦ノ湖・海賊船・富士山」は箱根随一の絵画のような絶景です。"
  },
  {
    "key": "ashinoko_lake_view",
    "title": "2. 芦ノ湖西岸・桃源台〜箱根町港（箱根海賊船クルーズとレイクビューホテル）",
    "timing": "通年（秋の湖畔紅葉・初夏の新緑）",
    "desc": "芦ノ湖を縦断する「箱根海賊船」。展望デッキで爽快な風を受けながら、桃源台から元箱根・箱根町港へ。湖畔に佇むザ・プリンス箱根芦ノ湖などで、蛸川温泉と極上フレンチ・日本料理を堪能。",
    "spots": "箱根海賊船（クイーン芦ノ湖・ロワイヤルII）、箱根園（箱根園水族館・駒ヶ岳ロープウェー）、箱根関所",
    "access": "箱根ロープウェイ「桃源台駅」直結。新宿から小田急箱根高速バス直通。",
    "tip": "「箱根駒ヶ岳ロープウェー」で標高1,356mの山頂に登ると、駿河湾・富士山・相模湾の360度大パノラマが広がります。"
  },
  {
    "key": "sengokuhara_susuki",
    "title": "3. 仙石原高原（黄金色のすすき草原と世界的ミュージアムリゾート）",
    "timing": "秋（9月下旬〜11月上旬のすすき見頃）",
    "desc": "台ヶ岳の山裾一面に広がる「仙石原すすき草原」。見渡す限りの黄金色の波を歩いた後は、ポーラ美術館や箱根ラリック美術館でアート鑑賞。乳白色の大涌谷温泉を引く高原リゾートで宿泊。",
    "spots": "仙石原すすき草原、ポーラ美術館（印象派絵画・森の遊歩道）、箱根ラリック美術館、箱根湿生花園",
    "access": "強羅駅・箱根湯本駅より箱根登山バス「仙石案内所前」「ポーラ美術館」行き。",
    "tip": "ポーラ美術館の「森の遊歩道」にはブナの原生林に野外彫刻が点在し、森林浴アート散歩が楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HAKONE ASHINOKO MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【箱根・芦ノ湖＆元箱根】湖畔鳥居・海賊船＆富士ビュー極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            湖上に浮かぶ朱塗りの鳥居と、雪化粧した富士山の霊峰パノラマ。海賊船が行き交う波静かな芦ノ湖畔。元箱根の歴史あるパワースポットと、優雅なレイクサイドアートステイ。
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
