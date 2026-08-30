import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【兵庫・淡路島北部＆洲本温泉】明石海峡大橋・花さじき＆淡路牛・玉ねぎ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "御食国の豊かな食とオーシャンビュー・淡路島北部＆洲本温泉エリア完全特化！明石海峡大橋ライトアップ、あわじ花さじき、淡路島国営明石海峡公園、洲本温泉の三名泉、最高級「淡路牛・淡路島玉ねぎ・由良ウニ宿」を徹底解説。",
  keywords: ["hyogo-awaji-north-sumoto-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hyogo-awaji-north-sumoto-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hyogo-awaji-north-sumoto-onsen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "sumoto_onsen_ocean_luxury",
    "title": "1. 洲本温泉〜三熊山・洲本城跡（紀淡海峡の水平線から昇る朝日と名湯）",
    "timing": "通年（三河湾・紀淡海峡を一望するオーシャンビュー）",
    "desc": "淡路島最大の温泉街「洲本温泉」。三熊山山頂にそびえる洲本城跡（国の史跡）から見下ろす洲本市街と大阪湾のパノラマ。アルカリ性単純温泉のやわらかな湯と、水平線から昇る朝日に包まれる海辺の名門旅館群。",
    "spots": "洲本城跡（模擬天守・展望台）、大浜海水浴場（千本松原）、洲本レトロこみち、淡路島モンキーセンター",
    "access": "神戸三宮・新神戸駅より高速バスで「洲本高速バスセンター」まで約80分。",
    "tip": "洲本温泉の海岸沿いホテルでは、海に面したオープンテラス足湯やインフィニティ温泉露天風呂から絶景の朝焼けが楽しめます。"
  },
  {
    "key": "awaji_north_flower_resort",
    "title": "2. 淡路島北部〜あわじ花さじき・ニジゲンノモリ（海と花のパノラマとアニメパーク）",
    "timing": "通年（春の菜の花・夏のひまわり・秋のコスモス）",
    "desc": "標高298mの丘陵地から大阪湾に向かって広がる15ヘクタールの花の大パノラマ「あわじ花さじき」。兵庫県立淡路島公園内の大人気アニメパーク「ニジゲンノモリ」。「淡路ハイウェイオアシス」から望む明石海峡大橋。",
    "spots": "あわじ花さじき、ニジゲンノモリ（ドラゴンクエスト・NARUTO・ゴジラ）、淡路サービスエリア（大観覧車・恋人の聖地）",
    "access": "淡路ICより車で約10〜15分。",
    "tip": "「あわじ花さじき」の展望デッキからは、眼下に広がる広大な花畑と青い海が一体となった絵画のような写真が撮影できます。"
  },
  {
    "key": "awaji_beef_onion_gourmet",
    "title": "3. ブランド「淡路牛」＆淡路島たまねぎ（古代から朝廷に食材を納めた御食国の恵み）",
    "timing": "通年（5月〜の「新玉ねぎ」は驚くほど甘くみずみずしい）",
    "desc": "神戸ビーフや松阪牛の素牛となる最高品質の「淡路牛」。日照時間が長く糖度の高い名物「淡路島たまねぎ」の丸ごとローストやすき焼き。幻のウニと称される由良港水揚げの「由良の赤ウニ」、春の「淡路島サクラマス」。",
    "spots": "淡路島うずの丘 大鳴門橋記念館（おっ玉葱モニュメント）、淡路牛専門店、道の駅あわじ",
    "access": "淡路島全域。",
    "tip": "春に収穫される淡路島の新玉ねぎは、辛味がほとんどなくフルーツ並みの糖度があるため、生のオニオンスライスで食べるのが一番の贅沢です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            AWAJI NORTH & SUMOTO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【兵庫・淡路島北部＆洲本温泉】明石海峡大橋・花さじき＆淡路牛・玉ねぎ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            神戸から明石海峡大橋を渡ってすぐのアイランドリゾート「淡路島」。四季の花々が海に向かって咲き誇る「あわじ花さじき」。紀淡海峡を望む老舗名湯「洲本温泉」。甘みたっぷりの淡路島玉ねぎと極上の淡路牛ステーキを堪能する旅。
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
