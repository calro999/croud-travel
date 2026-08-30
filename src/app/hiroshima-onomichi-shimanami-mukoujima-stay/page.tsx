import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【広島・尾道＆しまなみ海道向島】千光寺坂の街・猫の細道＆尾道ラーメン・サイクリング宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "瀬戸内のノスタルジーとサイクリストの聖地・広島尾道＆しまなみ海道向島エリア完全特化！千光寺公園ロープウェイ、猫の細道、尾道水道の夕陽、しまなみ海道サイクリング、名物「尾道ラーメン・瀬戸内レモン・鯛めし宿」を徹底解説。",
  keywords: ["hiroshima-onomichi-shimanami-mukoujima-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hiroshima-onomichi-shimanami-mukoujima-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hiroshima-onomichi-shimanami-mukoujima-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "onomichi_senkoji_slope_stay",
    "title": "1. 千光寺公園〜坂の街・猫の細道（大宝山から見下ろす尾道水道パノラマ）",
    "timing": "通年（春の千光寺公園桜百選・秋の文学散歩）",
    "desc": "弘法大師開基と伝わる名刹「千光寺」。朱塗りの本堂や巨岩「玉の岩」。千光寺山ロープウェイで登る山頂展望台「PEAK」からの尾道水道と島々の絶景。福石猫が並ぶノスタルジックな「猫の細道」と古民家カフェ巡り。",
    "spots": "千光寺公園（頂上展望台PEAK・千光寺山ロープウェイ）、猫の細道（初代福石猫）、文学のこみち、ONOMICHI U2",
    "access": "JR山陽本線「尾道駅」下車。新尾道駅（山陽新幹線）より路線バスで約15分。",
    "tip": "「千光寺山頂展望台 PEAK」はウッドデッキのスロープが整備されており、尾道水道と対岸の向島が一望できる最高のフォトスポットです。"
  },
  {
    "key": "shimanami_cycling_mukoujima_stay",
    "title": "2. しまなみ海道〜向島・因島（海の上を爽快に走るサイクリストの聖地）",
    "timing": "通年（春〜秋の爽快シーサイドサイクリング）",
    "desc": "尾道から愛媛・今治まで6つの島と橋を渡る全長約70kmの「しまなみ海道」。尾道駅前から渡船で約5分の「向島（むかいしま）」からスタート。海沿いのレモン畑や因島大橋を眺めながら走る爽快なサイクリングロード。",
    "spots": "尾道渡船、向島（立花海岸・後藤鉱泉所マルゴサイダー）、因島大橋（自転車歩行者道）、耕三寺（未来心の丘・白大理石庭園）",
    "access": "尾道駅前港より渡船で向島へ。",
    "tip": "尾道駅前の「ONOMICHI U2」では、GIANT製ロードバイクのレンタルが可能で、客室内に自転車を持ち込めるサイクリスト専用ホテルが併設されています。"
  },
  {
    "key": "onomichi_ramen_setouchi_fish_stay",
    "title": "3. 本場「尾道ラーメン」＆瀬戸内レモン（鶏ガラ煮干し出汁と大粒背脂の旨味）",
    "timing": "通年（コクがあるのに後味スッキリな伝統ラーメン）",
    "desc": "瀬戸内の小魚（煮干し・イリコ）と鶏ガラをベースにした醤油スープに、ミンチ状の大粒豚背脂が浮く「尾道ラーメン」。平打ち熟成麺のコシ。瀬戸内海の旬の地魚（オコゼ・アコウ・タイ）のお造り、瀬戸内レモンポーク。",
    "spots": "尾道ラーメン老舗店（朱華園跡・つたふじ）、尾道本通り商店街、尾道プリン（おやつとやまねこ）",
    "access": "尾道市街・海岸通り。",
    "tip": "尾道駅近くの「おやつとやまねこ」の「尾道プリン」は、特製レモンシロップをかけて食べる絶品で、行列ができる大人気スイーツです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ONOMICHI & SHIMANAMI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【広島・尾道＆しまなみ海道向島】千光寺坂の街・猫の細道＆尾道ラーメン・サイクリング宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            尾道水道を行き交う渡船と、坂道に広がるノスタルジックな石段の街「尾道」。千光寺から見下ろす瀬戸内海の多島美。海の上を走るサイクリストの聖地「しまなみ海道」。レトロな古民家カフェと背脂醤油の尾道ラーメンを味わう旅。
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
