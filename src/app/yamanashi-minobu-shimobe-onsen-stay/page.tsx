import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【山梨・身延山＆下部温泉】日蓮宗総本山久遠寺しだれ桜・信玄隠し湯宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "祈りの霊峰と武田信玄公の隠し湯・山梨身延＆下部エリア完全特化！日蓮宗総本山「身延山久遠寺（樹齢400年しだれ桜・菩提梯287段）」、身延山ロープウェイ奥之院、日本の名湯百選「下部温泉（ぬる湯治）」、名物「身延まんじゅう宿」を徹底解説。",
  keywords: ["yamanashi-minobu-shimobe-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamanashi-minobu-shimobe-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamanashi-minobu-shimobe-onsen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shimobe_onsen_shingen_stay",
    "title": "1. 下部温泉郷〜武田信玄公の隠し湯（30℃前後の極上「ぬる湯」交互浴）",
    "timing": "通年（疲労回復・長湯が心地よい夏のぬる湯治）",
    "desc": "開湯1200年、武田信玄公が傷を癒やした古湯「下部（しもべ）温泉」。約30℃前後の冷鉱泉（アルカリ性単純温泉）と加温した熱湯を交互に入る「交互入浴法」。自律神経を整え、何時間でも浸かっていられる奇跡の名湯。",
    "spots": "下部温泉郷（下部ホテル・古湯坊源泉館・裕貴屋）、しもべ黄金の足湯、下部川渓流散策路",
    "access": "JR身延線「下部温泉駅」下車すぐ。中部横断道「下部温泉早川IC」より約5分。",
    "tip": "下部温泉のぬる湯は、浸かって数分経つと体温と一体化するような不思議な感覚になり、副交感神経が優位になって極上のリラックスが得られます。"
  },
  {
    "key": "minobusan_kuonji_shukubo_stay",
    "title": "2. 身延山久遠寺〜奥之院思親閣・身延山ロープウェイ（日蓮宗総本山の桜と絶景）",
    "timing": "春期：3月下旬〜4月上旬のしだれ桜・秋の紅葉・冬のダイヤモンド富士",
    "desc": "鎌倉時代に日蓮聖人によって開創された「身延山久遠寺」。本堂前に枝を広げる国の天然記念物「樹齢400年のしだれ桜」。三門から本堂へと続く287段の急勾配な石段「菩提梯（ぼだいてい）」。ロープウェイで登る標高1,153mの山頂奥之院。",
    "spots": "身延山久遠寺（本堂・五重塔・しだれ桜・菩提梯）、身延山ロープウェイ、奥之院思親閣（御来光・富士山パノラマ）、門前町",
    "access": "JR身延線「身延駅」より山梨交通バス「身延山行」で約12分。",
    "tip": "身延山山頂の展望台からは、東に富士山、南に駿河湾、西に七面山、北に南アルプス八ヶ岳連峰を望む大パノラマが広がります。"
  },
  {
    "key": "minobu_yuba_koshu_beef_stay",
    "title": "3. 身延特産「身延ゆば」＆身延まんじゅう（大豆の濃厚な甘みと門前スイーツ）",
    "timing": "通年（参拝帰りのできたて身延まんじゅうは必食）",
    "desc": "日蓮聖人に弟子が栄養価の高い食事として捧げたのが始まりとされる「身延ゆば（湯葉）」。何層にも巻き上げた角ゆばや生ゆばのお造り。小麦粉の生地に甘さ控えめのこし餡を包んで蒸し上げた名物「身延まんじゅう（栄昇堂）」。",
    "spots": "栄昇堂（身延駅前の名店）、ゆばの里、身延門前町のゆば料理店、下部温泉の会席旅館",
    "access": "身延駅前・身延山門前町。",
    "tip": "アニメ『ゆるキャン△』でも登場した身延駅前の「栄昇堂」の身延まんじゅうは、富士川の河川敷ベンチに座って川風を感じながら食べるのがファンの定番です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            MINOBU & SHIMOBE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【山梨・身延山＆下部温泉】日蓮宗総本山久遠寺しだれ桜・信玄隠し湯宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日蓮聖人が開いた祈りの聖山「身延山久遠寺」。春に境内を覆い尽くす樹齢400年の巨木しだれ桜と、287段の石段・菩提梯。川中島の戦いで傷を癒やしたと伝わる武田信玄公の隠し湯「下部温泉」。ぬる湯と熱湯を交互に楽しむ極上の湯治ステイへ。
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
