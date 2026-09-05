import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【沖縄・石垣島＆八重山】川平湾・離島ホッピング＆石垣牛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "ミシュラン・グリーンガイド三ツ星の絶景「川平湾」のグラスボート、竹富島・西表島へのアイランドホッピング拠点、日本初の国際星空保護区、最高級A5石垣牛ステーキを徹底解説。プライベートプール付きヴィラやオーシャンフロントリゾートを厳選。",
  keywords: ["okinawa-ishigaki-yaeyama-kabira-bay-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["okinawa-ishigaki-yaeyama-kabira-bay-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for okinawa-ishigaki-yaeyama-kabira-bay-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kabira_bay_manta_coral_stay",
    "badge": "ミシュラン三ツ星の奇跡の海",
    "title": "1. 川平湾〜エメラルドグラスボート＆マンタポイント（黒真珠が育つ世界屈指の景勝地）",
    "timing": "通年（晴天の満潮時が最も美しいエメラルドグリーン。冬でも温暖な南国リゾート）",
    "desc": "ミシュラン・グリーンガイド・ジャポンで最高評価の「三ツ星」を獲得した石垣島屈指の絶景「川平湾」。潮流が速いため遊泳は禁止されていますが、グラスボートに乗れば、海底に広がる色鮮やかなサンゴ礁やカクレクマノミなど熱帯魚の楽園を間近に観察できます。近海は世界的な「マンタ（オニイトマキエイ）」の遭遇スポットとしても有名です。",
    "spots": "川平湾展望台、川平湾グラスボート、川平公園、石垣島川平タヒチ黒真珠養殖場、底地ビーチ",
    "access": "南ぬ島石垣空港より車で約35分。石垣港離島ターミナルより車で約30分（路線バスもあり）。",
    "tip": "川平湾の展望台からは、白い砂浜とエメラルドグリーンから群青色へとグラデーションを描く海と小島の絶景パノラマ写真が撮影できます。"
  },
  {
    "key": "yaeyama_island_hopping_stay",
    "badge": "八重山離島ホッピングの拠点",
    "title": "2. 八重山諸島アイランドホッピング＆石垣港離島ターミナル（竹富島・西表島・波照間島）",
    "timing": "通年（フェリーでわずか15分の竹富島、世界自然遺産の西表島カヤック探検）",
    "desc": "石垣島市街地に位置する「石垣港離島ターミナル」は、八重山諸島各島を結ぶフェリーのハブ。水牛車が歩き白砂の道と赤瓦屋根が残る「竹富島」へは高速船でわずか約15分。世界自然遺産のマングローブ原生林が広がる「西表島」や日本最南端の「波照間島」へも日帰り観光が可能。ターミナル周辺のホテルを拠点にすれば多彩な離島旅が叶います。",
    "spots": "石垣港離島ターミナル、ユーグレナモール（石垣島最大のアーケード商店街）、具志堅用高モニュメント、サザンゲートブリッジ",
    "access": "新石垣空港より直行バスで約30〜40分。市街地中心部に位置し飲食街へのアクセスも抜群。",
    "tip": "離島ターミナル内の売店「七人本舗」で販売されている名物「マリヤシェイク」は、石垣島マリヤ乳業の新鮮ミルクを使った濃厚絶品スイーツです。"
  },
  {
    "key": "ishigaki_beef_starry_sky_stay",
    "badge": "国際星空保護区と最高峰石垣牛",
    "title": "3. A5等級「石垣牛」炭火焼肉＆国際星空保護区（天の川と南十字星を望むヴィラ）",
    "timing": "通年（南十字星観測は12月下旬〜6月中旬頃、夏の天の川は7月〜10月が最盛期）",
    "desc": "八重山の温暖な気候と豊かな海風のミネラルを含んだ牧草で育つブランド黒毛和牛「石垣牛」。きめ細やかな肉質と、しつこさのない上質な脂の甘みは炭火焼肉やサーロインステーキで絶品。また西表石垣国立公園はアジアで2番目に「国際星空保護区」に認定された満天の星空の島。プライベートプール付きヴィラで星空を見上げながらの滞在は至福です。",
    "spots": "炭火焼肉やまもと（石垣牛予約必須名店）、フサキビーチ、御神崎（サンセット）、プライベートヴィラリゾート群",
    "access": "石垣島市街地・川平・フサキ・北部エリア各所。",
    "tip": "「炭火焼肉やまもと」をはじめとする石垣牛の名店は数ヶ月前から予約が埋まるため、航空券や宿の手配と同時に予約するのが鉄則です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ISHIGAKI & YAEYAMA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【沖縄・石垣島＆八重山諸島・川平湾】ミシュラン三ツ星川平ブルー・離島巡り＆石垣牛宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            八重山諸島の玄関口にして、世界屈指の透明度を誇るエメラルドブルーの海に囲まれた南国パラダイス「石垣島」。太陽の光で刻一刻と海の色を変える「川平湾（かびらわん）」の奇跡の美しさ。赤瓦集落が残る竹富島や大自然の西表島へのアイランドホッピング。日本初の国際星空保護区に認定された満天の天の川と、石垣牛の芳醇な肉汁を味わう極上のアイランドリゾートステイへご案内します。
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
