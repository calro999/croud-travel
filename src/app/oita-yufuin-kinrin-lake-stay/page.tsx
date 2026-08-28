import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【大分・由布院】金鱗湖・湯の坪街道＆由布岳パノラマ極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "大分・由布院（湯布院）エリア完全特化！朝霧立ち込める金鱗湖、湯の坪街道のスイーツ食べ歩き、由布岳を仰ぐ全室離れ・客室露天風呂旅館を徹底解説。",
  keywords: ["oita-yufuin-kinrin-lake-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["oita-yufuin-kinrin-lake-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for oita-yufuin-kinrin-lake-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kinrin_lake_walk",
    "title": "1. 金鱗湖周辺・岳本エリア（湖底から湧く温泉の朝霧とカフェテラス）",
    "timing": "通年（秋〜冬の早朝に現れる幻想的な朝霧が最高潮）",
    "desc": "湖底から温泉と清水が湧き出る不思議な湖「金鱗湖」。冬の冷え込んだ早朝、湖面から立ち上る湯けむりの朝霧は息をのむ美しさ。湖畔のカフェ「シャガール美術館カフェ」や茅葺き屋根の隠れ宿で過ごす時間。",
    "spots": "金鱗湖、天祖神社（湖上の鳥居）、豊の国商人館、マルク・シャガールゆふいん金鱗湖美術館",
    "access": "JR久大本線「由布院駅」より徒歩約20分、またはタクシー約5分。",
    "tip": "朝霧を見るなら日の出直後から朝8時頃までが勝負。湖畔の宿に泊まれば早朝散歩ですぐに絶景に出逢えます。"
  },
  {
    "key": "yunotsubo_street",
    "title": "2. 湯の坪街道〜由布院駅前（スイーツ食べ歩きとギャラリー散策）",
    "timing": "通年（ロールケーキ・プリンどら・コロッケ）",
    "desc": "由布院駅から金鱗湖へ続くメインストリート「湯の坪街道」。名物のB-speakロールケーキや金賞コロッケ、抹茶スイーツの食べ歩きや、個性豊かなクラフトギャラリーが並ぶ賑やかな散策路。",
    "spots": "湯の坪街道、湯布院フローラルヴィレッジ、コミコアートミュージアム由布院、B-speak",
    "access": "JR由布院駅下車すぐ。博多駅から特急「ゆふいんの森号」で約2時間15分。",
    "tip": "隈研吾設計の「COMICO ART MUSEUM YUFUIN」では、草間彌生や村上隆の現代アートを由布岳を借景に鑑賞できます。"
  },
  {
    "key": "yufudake_luxury_villa",
    "title": "3. 鳥越・川上・由布岳山麓（雄大な由布岳を仰ぐ全室離れの極上リトリート）",
    "timing": "通年（新緑の由布岳・秋のススキ草原・冬の雪化粧）",
    "desc": "由布院の奥座敷・鳥越地区や山麓の高台。広大な敷地にわずか数室〜十数室の全室離れ宿が点在。「御三家（亀の井別荘・由布院玉の湯・山荘無量塔）」に代表される日本最高峰のおもてなしと豊後牛炭火焼き。",
    "spots": "由布岳（豊後富士・標高1,583m）、狭霧台（さぎりだい展望台）、蛇越展望所",
    "access": "由布院駅より車・タクシーで約5〜10分。大分道湯布院ICより車約10分。",
    "tip": "由布岳の中腹にある「狭霧台展望台」からは、由布院盆地を一望する大パノラマと秋の朝霧雲海を望めます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            YUFUIN KINRIN LAKE MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【大分・由布院】金鱗湖・湯の坪街道＆由布岳パノラマ極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            豊後富士と称される美しい「由布岳」の麓。温泉と冷泉が同時に湧き出る神秘の「金鱗湖」に立ち上る朝霧。大人の上質な隠れ家旅館が点在する日本屈指の温泉リゾートへ。
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
