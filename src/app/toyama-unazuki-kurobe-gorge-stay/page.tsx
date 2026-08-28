import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【富山・黒部宇奈月温泉】トロッコ電車・黒部峡谷断崖美＆富山湾の幸極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "富山・宇奈月温泉＆黒部峡谷エリア完全特化！黒部峡谷トロッコ電車、山彦橋・やまびこ遊歩道、日本一の透明度を誇る弱アルカリ性美肌温泉、富山湾の白えび・紅ズワイガニ会席を徹底解説。",
  keywords: ["toyama-unazuki-kurobe-gorge-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["toyama-unazuki-kurobe-gorge-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for toyama-unazuki-kurobe-gorge-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "unazuki_gorge_view",
    "title": "1. 黒部川リバーサイド・峡谷展望露天風呂（エメラルドグリーンの清流と美肌の湯）",
    "timing": "通年（秋の黒部峡谷全山紅葉・冬の雪景色峡谷）",
    "desc": "黒部川の清流沿いに建つ宇奈月温泉の宿。日本屈指の透明度（弱アルカリ性単純温泉）を誇るお湯は「美肌の湯」として名高い名泉。川のせせらぎを聞きながら入る露天風呂で心身を解放。",
    "spots": "山彦橋・新山彦橋（赤い鉄橋を渡るトロッコ電車のビューポイント）、やまびこ遊歩道、想影展望台",
    "access": "北陸新幹線「黒部宇奈月温泉駅」隣接の新黒部駅より富山地方鉄道で約25分「宇奈月温泉駅」下車。",
    "tip": "「山彦橋」から新山彦橋を渡るトロッコ電車に手を振ると、乗客や車掌さんが笑顔で振り返してくれる名物シーンに出逢えます。"
  },
  {
    "key": "unazuki_torokko_station",
    "title": "2. 黒部峡谷鉄道トロッコ電車（鐘釣温泉・欅平へ向かう秘境アドベンチャー）",
    "timing": "運行期間：4月中旬〜11月30日（冬期は特別運行・雪見ツアーあり）",
    "desc": "宇奈月駅から欅平（けやきだいら）駅まで全長20.1kmを約1時間20分で結ぶオープンデッキのトロッコ電車。猿飛峡や後曳橋（うしろひきばし）、鐘釣温泉の河原露天風呂など、息をのむ絶景が連続。",
    "spots": "黒部峡谷鉄道トロッコ電車、欅平駅（猿飛峡・奥鐘橋）、鐘釣駅（万年雪・河原露天風呂）、宇奈月ダム",
    "access": "富山地方鉄道宇奈月温泉駅より徒歩約5分で黒部峡谷鉄道「宇奈月駅」へ。",
    "tip": "窓のない「普通客車（オープン型）」に乗ると、肌で峡谷の風と水しぶきを感じられるダイナミックな体験ができます。"
  },
  {
    "key": "unazuki_toyama_seafood",
    "title": "3. 富山湾の海の幸づくし（富山湾の宝石「白えび」＆紅ズワイガニ・寒ブリ会席）",
    "timing": "通年（春〜秋の白えび・秋〜冬の紅ズワイガニ・冬の寒ブリ）",
    "desc": "「天然の生け簀」と称される富山湾の極上魚介。一匹ずつ手剥きされた甘みたっぷりの「白えびの刺身」、水揚げ直後の「茹で紅ズワイガニ」、氷見直送の「寒ブリの刺身・ブリ大根」を堪能。",
    "spots": "宇奈月温泉街（足湯おもかげ・足湯いっぷく）、宇奈月麦酒館、セレネ美術館",
    "access": "宇奈月温泉街中心部。",
    "tip": "名水仕込みの「宇奈月ビール（地ビール）」は国際ビール大賞金賞を受賞した名品で、魚介料理との相性抜群です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            UNAZUKI GORGE MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【富山・黒部宇奈月温泉】トロッコ電車・黒部峡谷断崖美＆富山湾の幸極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日本一深いV字峡谷「黒部峡谷」の玄関口に湧く「宇奈月温泉」。トロッコ電車に揺られて大自然の秘境へ。黒部川のエメラルドグリーンを眺め、富山湾の宝石・白えびと美肌の湯に酔いしれる旅。
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
