import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【心洗われる神域】開運パワースポット＆歴史の宿坊・温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "新年の開運・心の浄化！和歌山・高野山（宿坊ステイ＆精進料理）、長野・戸隠神社（白銀の杉並木）、島根・出雲大社（玉造温泉）、和歌山・熊野三山（那智の滝）など、静寂の聖地と名湯宿を徹底解説。",
  keywords: ["autumn-winter-sacred-power-spot", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-sacred-power-spot"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-sacred-power-spot", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "koyasan_shukubo",
    "title": "1. 和歌山・世界遺産高野山（1200年の聖地！宿坊で精進料理＆朝の勤行・瞑想体験）",
    "timing": "通年（秋の紅葉・冬の白銀に包まれる壇上伽藍）",
    "desc": "弘法大師空海が開いた天空の聖地。50箇所以上ある寺院宿坊に宿泊し、庭園を眺めながら伝統の精進料理を味わい、早朝の勤行（おつとめ）や阿字観（瞑想）、写経で心を整える唯一無二の体験。",
    "spots": "奥之院（弘法大師御廟・杉木立）、壇上伽藍（根本大塔・金堂）、金剛峯寺、大門",
    "access": "南海高野線「極楽橋駅」より高野山ケーブルカーで約5分、南海りんかんバス接続。",
    "tip": "宿坊の多くには本格的な大浴場や枯山水庭園が備わっており、初めての宿坊泊でも快適に過ごせます。"
  },
  {
    "key": "togakushi_shrine",
    "title": "2. 長野・信州戸隠神社（樹齢400年を超える白銀の奥社杉並木と戸隠手打ち蕎麦）",
    "timing": "通年（秋の紅葉鏡池・冬の雪化粧杉並木）",
    "desc": "天照大御神の天岩戸伝説が残る霊山・戸隠。奥社参道に連なる樹齢400年以上の巨大な杉並木は圧巻のパワースポット。宿坊や温泉旅館で名物の戸隠手打ち蕎麦（ぼっち盛り）と信州牛を堪能。",
    "spots": "戸隠神社五社（奥社・中社・宝光社・九頭龍社・火之御子社）、鏡池、戸隠民俗館",
    "access": "JR長野駅善光寺口よりアルピコ交通バス「戸隠線」で約60〜70分。",
    "tip": "冬の奥社参道は雪道となるため長靴やスノーブーツのレンタルを活用しましょう。鏡池の紅葉リフレクションも絶景。"
  },
  {
    "key": "izumo_taisha",
    "title": "3. 島根・出雲大社＆玉造温泉（全国の神々が集う縁結びの聖地と日本最古の美肌温泉）",
    "timing": "通年（旧暦10月の神在月・年末年始の初詣）",
    "desc": "大国主大神を祀る日本屈指の大社。巨大な大注連縄（しめなわ）が迎える神楽殿で良縁を祈願し、車で約40分の玉造温泉へ。『出雲国風土記』に「一度洗えば容貌が端正になり」と記された奇跡の化粧水温泉を満喫。",
    "spots": "出雲大社（本殿・神楽殿・勢溜の鳥居）、稲佐の浜（神迎えの浜）、玉造温泉街（足湯・玉作湯神社）、宍道湖夕日",
    "access": "一畑電車「出雲大社前駅」下車。出雲縁結び空港より連絡バス。JR玉造温泉駅接続。",
    "tip": "玉作湯神社で「叶い石」を授かり、境内の願い石に重ねて自分だけのお守りを作る参拝が女性やカップルに大人気です。"
  },
  {
    "key": "kumano_kodo",
    "title": "4. 和歌山・熊野三山＆南紀勝浦温泉（世界遺産熊野古道・那智の滝と大洞窟温泉「忘帰洞」）",
    "timing": "通年（冬の澄んだ滝飛沫と海景色）",
    "desc": "黄泉がえりの聖地・熊野。落差133mの名瀑「那智の滝」や熊野那智大社を参拝し、南紀勝浦温泉の海食洞窟風呂「忘帰洞」へ。太平洋の荒波が打ち寄せる大洞窟露天風呂で心身を清める極上の旅。",
    "spots": "那智の滝（飛瀧神社）、熊野那智大社、青岸渡寺（三重塔）、熊野古道大門坂、勝浦港（生マグロ市場）",
    "access": "JR特急くろしおで新大阪駅から紀伊勝浦駅まで約3時間30分。南紀白浜空港よりバス・レンタカー。",
    "tip": "勝浦港は生鮮マグロの水揚げ日本一。宿で冷凍していない本物の「生マグロ会席」を味わうのが最高の贅沢です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SACRED RETREAT & POWER SPOT
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【心洗われる神域】開運パワースポット＆歴史の宿坊・温泉宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            澄み渡る神聖な空気に包まれ、日頃の雑踏から離れて自分自身と向き合うリトリート。歴史ある寺院宿坊での朝勤行や護摩焚き体験、神話の息づく古社参拝と美肌温泉で心身を清める極上の旅へ。
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
