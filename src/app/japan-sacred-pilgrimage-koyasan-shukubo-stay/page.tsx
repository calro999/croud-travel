import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【世界遺産・霊場巡り＆宿坊体験宿】高野山宿坊・熊野古道・比叡山延暦寺 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "千年の祈りと静寂に包まれる聖地巡礼完全特化！弘法大師空海が開いた天空の宗教都市「高野山宿坊（精進料理・阿字観・朝のお勤め）」、神々が宿る「熊野三山＆熊野古道歩き」、天台宗総本山「比叡山延暦寺 延暦寺会館」を徹底解説。",
  keywords: ["japan-sacred-pilgrimage-koyasan-shukubo-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-sacred-pilgrimage-koyasan-shukubo-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-sacred-pilgrimage-koyasan-shukubo-stay", e);
  }
  return {};
}

export default function HistoryHeritageHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "koyasan_shukubo_temple_stay",
    "title": "1. 高野山〜奥之院・壇上伽藍（弘法大師が瞑想を続ける天空の仏教都市）",
    "timing": "通年（秋の紅葉回廊・春の桜・冬の静寂の雪景色）",
    "desc": "標高約800mの山上に開かれた真言密教の聖地「高野山」。約20万基の墓石や供養塔が杉木立の中に並ぶ「奥之院」。根本大塔がそびえる「壇上伽藍」。数百年続く名門宿坊に宿泊し、僧侶による朝のお勤め（勤行）や阿字観瞑想。",
    "spots": "高野山奥之院（御廟・燈籠堂・杉木立）、壇上伽藍（根本大塔・金堂）、金剛峯寺（蟠龍庭）、大門",
    "access": "南海高野線「極楽橋駅」より高野山ケーブルで約5分、南海りんかんバスで各寺院へ。",
    "tip": "奥之院の早朝散策（朝6時頃）は参拝客がほとんどおらず、鳥のさえずりと杉の香りに包まれる最も神聖な時間を体験できます。"
  },
  {
    "key": "kumano_kodo_yunomine_stay",
    "title": "2. 熊野三山〜熊野古道・湯の峰温泉（神々が鎮座する蘇りの聖地と世界遺産の温泉）",
    "timing": "通年（春〜秋のトレッキングシーズン・中辺路歩き）",
    "desc": "熊野本宮大社・熊野速玉大社・熊野那智大社の「熊野三山」を結ぶ巡礼道「熊野古道」。開湯1800年、参詣者が身を清めた日本最古の共同浴場「湯の峰温泉 つぼ湯（世界遺産）」。川底から温泉が湧く川湯温泉の仙人風呂。",
    "spots": "熊野本宮大社（大斎原・大鳥居）、熊野古道中辺路（発心門王子〜本宮大社）、湯の峰温泉（つぼ湯・湯筒）、川湯温泉",
    "access": "JR紀勢本線「新宮駅」または「紀伊田辺駅」より路線バス運行。",
    "tip": "湯の峰温泉の「湯筒」では、90度の源泉に生卵や野菜を浸して、美味しい温泉たまごを自分で茹でて食べることができます。"
  },
  {
    "key": "hieizan_enryakuji_lake_stay",
    "title": "3. 比叡山延暦寺〜延暦寺会館（千二百年間灯り続ける不滅の法灯と琵琶湖ビュー）",
    "timing": "通年（東塔・西塔・横川の三塔巡礼）",
    "desc": "伝教大師最澄が開創した天台宗の総本山「比叡山延暦寺」。国宝・根本中堂に1200年間燃え続ける「不滅の法灯」。延暦寺境内に位置する宿坊施設「延暦寺会館」。客室やレストランから見下ろす琵琶湖の日の出パノラマ。",
    "spots": "比叡山延暦寺（東塔根本中堂・西塔釈迦堂・横川中堂）、比叡山ドライブウェイ、ガーデンミュージアム比叡",
    "access": "比叡山坂本ケーブル「ケーブル延暦寺駅」徒歩約8分。京都駅より比叡山ドライブバス運行。",
    "tip": "延暦寺会館に宿泊すると、一般拝観時間外の早朝に根本中堂で行われる「朝のお勤め（国宝堂内での読経と法話）」に特別参加できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SACRED PILGRIMAGE & SHUKUBO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【世界遺産・霊場巡り＆宿坊体験宿】高野山宿坊・熊野古道・比叡山延暦寺 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            樹齢数百年の杉木立に霧が立ち込める神聖な祈りの道「世界遺産・霊場」。高野山の宿坊で味わう五味五色の美しい精進料理と朝の勤行、写経体験。熊野古道の中辺路を歩き、名湯・湯の峰温泉のつぼ湯に浸かる心の浄化の旅へ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
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
              {/* テーマ見出し */}
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

              {/* 歴史見どころ・アクセス・旅のコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要史跡＆名所</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 歴史探訪を深めるコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの歴史・名門宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    歴史探訪プラン
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
