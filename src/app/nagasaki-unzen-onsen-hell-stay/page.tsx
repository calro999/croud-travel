import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【長崎・雲仙温泉】雲仙地獄の湯けむり＆白濁硫黄泉・レトロ洋館宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "長崎・雲仙天草国立公園エリア完全特化！もうもうと白煙が上がる「雲仙地獄」、日本最初の国立公園のクラシックホテル、濃厚な白濁硫黄泉、名物雲仙温泉レモネードと長崎和牛・島原郷土料理旅館を徹底解説。",
  keywords: ["nagasaki-unzen-onsen-hell-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagasaki-unzen-onsen-hell-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagasaki-unzen-onsen-hell-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "unzen_jigoku_walk",
    "title": "1. 雲仙地獄めぐり（大叫喚地獄・お糸地獄の奇観と温泉たまご）",
    "timing": "通年（冬の霧氷・初夏のミヤマキリシマ）",
    "desc": "約30箇所もの地獄から高熱の温泉と白い噴煙が吹き上がる「雲仙地獄」。木道が整備された地獄内を散策し、地熱を直接体感できる「足蒸し」や、地獄の蒸気で蒸し上げた名物「温泉たまご」を味わう。",
    "spots": "雲仙地獄（大叫喚地獄・お糸地獄・邪見地獄）、雲仙地獄工房（温泉たまご）、雲仙温泉足湯ふれあいの湯",
    "access": "JR諫早駅より島鉄バス「雲仙行き」で約80分「雲仙」下車。長崎空港よりバス・レンタカー。",
    "tip": "「雲仙地獄工房」の温泉たまごは、食べると「1個で1年、2個で2年、3個で死ぬまで長生き」と言われる名物です。"
  },
  {
    "key": "unzen_classic_hotel",
    "title": "2. 雲仙クラシックリゾート（昭和10年創業の洋館建築美と長崎和牛フレンチ）",
    "timing": "通年（避暑地として愛されたノスタルジー）",
    "desc": "日本最初の国立公園に指定された雲仙。国の登録有形文化財「雲仙観光ホテル」に代表されるスイス・シャレースタイルのクラシックホテル。重厚な木造建築、ステンドグラス、本格フレンチディナーを堪能。",
    "spots": "雲仙観光ホテル（バー・撞球室）、雲仙ビードロ美術館、古湯・新湯・小地獄温泉街",
    "access": "雲仙温泉街中心部。",
    "tip": "雲仙ビードロ美術館では19世紀のボヘミアンガラスやアンティークオルゴールの音色を楽しめます。"
  },
  {
    "key": "unzen_nita_pass",
    "title": "3. 仁田峠〜妙見岳・平成新山（ロープウェイから望む有明海と活火山の雄姿）",
    "timing": "春（5月のミヤマキリシマ）・秋（10月下旬の紅葉）・冬（霧氷）",
    "desc": "標高1,080mの仁田峠から雲仙ロープウェイで妙見岳山頂へ。平成の噴火で誕生した日本で最も新しい山「平成新山（標高1,483m）」や、有明海・天草諸島を一望する360度の大パノラマ。",
    "spots": "仁田峠循環道路、雲仙ロープウェイ、妙見岳展望台、平成新山（普賢岳）",
    "access": "雲仙温泉街より車・乗合タクシーで約20分「仁田峠」へ。",
    "tip": "冬の仁田峠は木々に氷が結晶化する「霧氷（むひょう）」の銀世界が広がり、幻想的な白銀絶景を楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            UNZEN JIGOKU MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【長崎・雲仙温泉】雲仙地獄の湯けむり＆白濁硫黄泉・レトロ洋館宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            標高700mの高原に広がるキリシタン哀史の地「雲仙地獄」。ゴウゴウと噴き出す白煙と硫黄の香り。明治時代に外国人の避暑地として開かれたクラシックな洋館リゾートと、極上の白濁湯に浸る休日。
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
