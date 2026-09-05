import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【広島・宮島＆嚴島神社】海上大鳥居・弥山＆あなごめし宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界遺産「嚴島神社」の海に浮かぶ朱色の大鳥居、潮の満ち引きが織りなす絶景、原始林が息づく霊峰「弥山」パノラマ、宮島名物「あなごめし」や焼き牡蠣を徹底解説。島内温泉旅館や対岸オーシャンビューホテルを厳選。",
  keywords: ["hiroshima-miyajima-itsukushima-shrine-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hiroshima-miyajima-itsukushima-shrine-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hiroshima-miyajima-itsukushima-shrine-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "itsukushima_floating_torii_stay",
    "badge": "海に浮かぶ世界遺産の神殿",
    "title": "1. 嚴島神社〜海上大鳥居・朱塗り廻廊（満潮の浮遊感と干潮の砂浜歩き）",
    "timing": "通年（満潮・干潮の時間を潮見表で確認して訪れるのが必須。秋の紅葉谷公園、冬の澄んだ夜空ライトアップ）",
    "desc": "推古天皇元年に創建、平清盛が現在の規模に整えた海上社殿「嚴島神社」。国宝の本社本殿や海を渡る朱塗りの廻廊、海中にそびえる高さ約16mの主柱クスノキ大鳥居。満潮時には海面に浮かぶ極楽浄土のような光景となり、干潮時には水が引いて大鳥居の真下まで歩いて触れることができます。",
    "spots": "嚴島神社社殿（国宝・廻廊）、大鳥居、大願寺、千畳閣（豊国神社）・五重塔、紅葉谷公園",
    "access": "JR山陽本線「宮島口駅」よりフェリー乗り場へ徒歩5分、JR西日本宮島フェリーまたは宮島松大汽船で約10分。",
    "tip": "宮島島内の宿に宿泊すれば、最終フェリー後の観光客が引き揚げた静寂の夜に、黄金色にライトアップされた大鳥居をゆっくり鑑賞できます。"
  },
  {
    "key": "misen_ropeway_panorama_stay",
    "badge": "弘法大師開山の霊峰パノラマ",
    "title": "2. 弥山原始林＆宮島ロープウエー（瀬戸内海360度多島美と不滅の霊火）",
    "timing": "通年（晴天時の青い瀬戸内海、春の山桜、秋のモミジの紅葉グラデーション）",
    "desc": "標高535m、天然記念物の原始林に覆われた宮島の最高峰「弥山（みせん）」。宮島ロープウエーを乗り継いで獅子岩展望台へ登れば、青い瀬戸内海に点在する島々や四国山地まで見渡す360度の大パノラマ。山頂付近には弘法大師空海が開創し、1200年間燃え続ける「消えずの火」を守る霊火堂が佇みます。",
    "spots": "宮島ロープウエー（紅葉谷線・獅子岩線）、獅子岩展望台、弥山山頂・巨石群、霊火堂（消えずの火）、くぐり岩",
    "access": "嚴島神社裏手より紅葉谷公園を通ってロープウエー紅葉谷駅まで徒歩約20分（無料送迎バスあり）。",
    "tip": "霊火堂の「消えずの火」で沸かした大茶釜の霊水は、万病に効くご利益があるとされ、参拝者が自由に飲むことができます。"
  },
  {
    "key": "miyajima_oyster_anago_stay",
    "badge": "宮島二大名物グルメを制覇",
    "title": "3. 宮島名物「あなごめし」＆大粒焼き牡蠣（秘伝ダレの香ばしさと海のミルク）",
    "timing": "通年（牡蠣の旬は11月〜3月頃、あなごめしは通年絶品）",
    "desc": "アナゴの骨から取った濃厚な出汁で炊き込んだ醤油ご飯の上に、香ばしく焼き上げたアナゴをぎっしり敷き詰めた宮島名物「あなごめし」。瀬戸内海の豊かな潮流が育んだ大粒でぷりっぷりの「広島牡蠣」の殻付き浜焼き。さらに表参道商店街で味わう揚げもみじ饅頭など、食べ歩きも最高の楽しみです。",
    "spots": "うえの（宮島口のあなごめし元祖）、表参道商店街（牡蠣祝・紅葉堂・やまだ屋）、町家通り",
    "access": "宮島桟橋から嚴島神社へ続く表参道商店街および宮島口周辺。",
    "tip": "宮島口の「うえの」のあなごめし弁当は事前予約が可能。フェリーに乗る前に受け取って島内の絶景スポットで食べるのも通の楽しみ方です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            MIYAJIMA & ITSUKUSHIMA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【広島・宮島＆嚴島神社】世界遺産海上大鳥居・弥山ロープウエー＆あなごめし宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            日本三景の一つにして世界文化遺産、神が宿る島「宮島（厳島）」。満潮時にはまるで海に浮かんでいるかのように佇む嚴島神社の廻廊と朱色の大鳥居。干潮時には歩いて鳥居の足元まで近づける神秘的な潮の満ち引き。瀬戸内海の多島美を一望する霊峰・弥山、そして香ばしい秘伝タレのあなごめしと焼きたて牡蠣。歴史と自然の祈りが息づく安芸の宮島ステイへご案内します。
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide: any) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-teal-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-teal-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-teal-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-teal-950/80 leading-relaxed font-medium">
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
              <div className="space-y-4 pt-4 border-t border-teal-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-teal-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.length > 0 ? (
                    hotels.map((hotel: any) => (
                      <article
                        key={hotel.hotelNo}
                        className="flex flex-col justify-between border border-teal-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                      >
                        <div>
                          <div className="aspect-video relative overflow-hidden bg-teal-50 border-b border-teal-950/5">
                            {hotel.hotelImageUrl ? (
                              <img
                                src={hotel.hotelImageUrl}
                                alt={hotel.hotelName}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-teal-950/30 text-xs font-bold">
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
                            <h4 className="text-xs md:text-sm font-black font-journal-serif text-teal-950 line-clamp-2">
                              {hotel.hotelName}
                            </h4>
                            {hotel.hotelSpecial && (
                              <p className="text-[11px] text-teal-950/70 line-clamp-2 font-medium">
                                {hotel.hotelSpecial}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="p-4 pt-0">
                          <a
                            href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
                          >
                            ✈️ 楽天トラベルで宿泊プラン・空室を見る
                          </a>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="col-span-3 p-6 bg-stone-50 rounded-2xl text-center text-xs text-stone-500">
                      現在おすすめの宿泊施設情報を更新中です。
                    </div>
                  )}
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
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-950 bg-white hover:bg-teal-50 border border-teal-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
