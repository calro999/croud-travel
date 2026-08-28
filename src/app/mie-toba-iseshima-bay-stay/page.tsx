import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【三重・鳥羽温泉郷】鳥羽水族館・ミキモト真珠島＆伊勢海老会席極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "三重・鳥羽エリア完全特化！飼育種類数日本一の鳥羽水族館（ジュゴン）、ミキモト真珠島、鳥羽湾めぐり遊覧船、答志島・坂手島パノラマと本場伊勢海老・アワビ・牡蠣が味わえるオーシャンビュー温泉旅館を徹底解説。",
  keywords: ["mie-toba-iseshima-bay-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["mie-toba-iseshima-bay-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for mie-toba-iseshima-bay-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "toba_aquarium_walk",
    "title": "1. 鳥羽港・中之郷周辺（飼育種数日本一の水族館と真珠の島）",
    "timing": "通年（雨の日でも楽しめる全天候型リゾート）",
    "desc": "約1,200種もの生きものを飼育する「鳥羽水族館」。日本で唯一飼育されているジュゴンのセレナやラッコの食事タイム。ミキモト真珠島での海女の実演見学など、海と生命の神秘に出逢うエリア。",
    "spots": "鳥羽水族館（12のゾーン・ジュゴン・ラッコ）、ミキモト真珠島（海女の実演ショー・真珠博物館）、鳥羽湾めぐりとイルカ島",
    "access": "近鉄・JR「鳥羽駅」より徒歩約10〜15分、またはかもめバスで約5分。",
    "tip": "鳥羽水族館には順路がなく自由に回れるため、ラッコやアシカショーのタイムスケジュールを先に確認して回るのがコツです。"
  },
  {
    "key": "toba_iseebi_luxury",
    "title": "2. 鳥羽温泉郷・安楽島〜小浜（海にせり出すインフィニティ露天風呂と伊勢海老会席）",
    "timing": "通年（10月〜4月の伊勢海老・冬の浦村牡蠣）",
    "desc": "鳥羽湾を一望する岬の高台に立ち並ぶリゾートホテル・名門旅館。美肌効果の高いアルカリ性単純温泉の露天風呂から、行き交う船や朝日に輝く海を鑑賞。生きた伊勢海老のお造りやアワビの陶板焼きを満喫。",
    "spots": "鳥羽展望台（食国蔵王・天空テラス）、安楽島大橋、鳥羽マリンターミナル",
    "access": "鳥羽駅より各旅館の無料シャトルバスで約5〜15分。",
    "tip": "「鳥羽展望台」の天空カフェテラスから望む太平洋の大パノラマと、名物「伊勢海老ソフトクリーム」がドライブ客に大人気です。"
  },
  {
    "key": "toba_ijika_seafood",
    "title": "3. 相差（おうさつ）・海女と漁師の町（日本一海女が多いまちの豪快舟盛りと石神さん）",
    "timing": "通年（女性の願いを一つ叶えてくれる石神さん参拝）",
    "desc": "現役の海女さんが最も多く暮らす町・相差。女性の願いを一つだけ必ず叶えてくれるとされる「石神さん（神明神社）」や、海女小屋で獲れたてのサザエや大アサリを炭火で焼いて味わう海女小屋体験。",
    "spots": "神明神社（石神さん）、海女小屋相差かまど、千鳥ヶ浜海岸、相差海女文化資料館",
    "access": "鳥羽駅より三重交通バス「国崎行き」で約35分「相差」下車。各宿送迎あり。",
    "tip": "石神さんの参拝時は、ピンク色の祈願紙に願い事を一つだけ書き、願い箱に納めるのが古くからの習わしです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            TOBA BAY RESORT GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【三重・鳥羽温泉郷】鳥羽水族館・ミキモト真珠島＆伊勢海老会席極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            リアス海岸の穏やかな鳥羽湾に浮かぶ島々。日本で唯一ジュゴンに逢える「鳥羽水族館」と真珠王・御木本幸吉の歴史。海を望む展望露天風呂で温まり、伊勢志摩の海の幸を心ゆくまで堪能する海辺の旅。
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
