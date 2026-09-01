import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【北海道・阿寒湖＆摩周湖・屈斜路湖】神秘のカルデラ三湖・阿寒アイヌコタン＆まりも・硫黄山温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "阿寒摩周国立公園の神秘の湖めぐり完全特化！特別天然記念物「阿寒湖のマリモ」、北海道最大のアイヌ集落「阿寒湖アイヌコタン」、奇跡の透明度「摩周ブルー・摩周湖」、日本最大のカルデラ湖「屈斜路湖・砂湯」、阿寒湖温泉・川湯温泉宿を徹底解説。",
  keywords: ["hokkaido-akan-mashu-kussharo-lake-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hokkaido-akan-mashu-kussharo-lake-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hokkaido-akan-mashu-kussharo-lake-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "akan_lake_onsen_marimo_stay",
    "title": "1. 阿寒湖〜阿寒湖アイヌコタン・マリモ展示（雄阿寒岳を望む湖畔温泉と先住民族文化）",
    "timing": "通年（秋の紅葉・冬の阿寒湖氷上フェスティバル「冬華美」）",
    "desc": "球状の集合体を形成する国の特別天然記念物「阿寒湖のマリモ」。阿寒湖遊覧船で訪れるチュウルイ島マリモ展示観察センター。北海道最大級のアイヌ集落「阿寒湖アイヌコタン（伝統舞踊・木彫り民芸品）」。阿寒湖温泉のインフィニティ展望露天風呂。",
    "spots": "阿寒湖遊覧船、チュウルイ島（マリモ展示観察センター）、阿寒湖アイヌコタン（アイヌシアター「イコロ」）、ボッケ（泥火山遊歩道）",
    "access": "たんちょう釧路空港より車・バスで約60分。JR釧路駅より阿寒バス運行。",
    "tip": "「阿寒湖アイヌシアター イコロ」で上演される「ロストカムイ」は、現代舞踊とデジタルアート、アイヌ古式舞踊が融合した圧巻の舞台です。"
  },
  {
    "key": "mashu_kussharo_crater_stay",
    "title": "2. 摩周湖〜屈斜路湖・硫黄山・川湯温泉（「霧の摩周湖」摩周ブルーと日本最大のカルデラ湖）",
    "timing": "通年（6月〜8月の早朝雲海・秋の紅葉・冬の白鳥飛来）",
    "desc": "バイカル湖に次ぐ世界第2位の透明度を誇る「摩周湖（摩周ブルー）」。周囲約57kmの日本最大のカルデラ湖「屈斜路湖」。湖畔の砂を掘ると温泉が湧く「砂湯」や「コタン露天風呂」。噴煙が上がる「硫黄山（アトサヌプリ）」と川湯温泉。",
    "spots": "摩周湖（第1・第3展望台・カムイテラス）、屈斜路湖（砂湯・美幌峠・コタン温泉）、硫黄山（アトサヌプリ）、川湯温泉街",
    "access": "JR釧網本線「摩周駅」または「川湯温泉駅」より車・バス。女満別空港より車約60分。",
    "tip": "美幌峠（びほろとうげ）展望台からの屈斜路湖の眺望は「天下の絶景」と称され、ぐるりと湖を見渡す大パノラマが広がります。"
  },
  {
    "key": "doto_seafood_jibie_gourmet",
    "title": "3. 道東グルメ・オホーツク毛ガニ＆エゾシカ肉（豊かな森と海がもたらす大自然の恵み）",
    "timing": "通年（冬のオホーツク海明け毛ガニ・秋のエゾシカ）",
    "desc": "身がぎっしり詰まり濃厚なカニ味噌が絶品の「オホーツク海産毛ガニ」。肉質が柔らかくヘルシーな「エゾシカ肉（ジビエ）」のローストやすき焼き。阿寒湖名物の「ヒメマス（チップ）」「ワカサギ天ぷら」。道東の大地の恵み。",
    "spots": "阿寒湖・川湯温泉の割烹旅館、弟子屈ラーメン総本店、道の駅摩周温泉",
    "access": "阿寒・弟子屈・川湯エリア。",
    "tip": "「弟子屈ラーメン」は、摩周湖の清らかな水と北海道産素材をじっくり煮込んだ特製スープが特徴で、全国にファンを持つ名店です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            AKAN & MASHU CRATER LAKE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【北海道・阿寒湖＆摩周湖・屈斜路湖】神秘のカルデラ三湖・阿寒アイヌコタン＆まりも・硫黄山温泉宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            世界屈指の透明度を誇る「摩周湖」と、特別天然記念物マリモが眠る「阿寒湖」、砂を掘れば温泉が湧く「屈斜路湖」。阿寒湖アイヌコタンの伝統舞踊と木彫り文化。川湯温泉の強酸性硫黄泉に浸かり、道東の大自然とオホーツクの海鮮を味わう旅。
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
