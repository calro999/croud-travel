import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【群馬・みなかみ＆谷川岳】一ノ倉沢・宝川温泉大露天＆利根川宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "首都圏から近い大自然！魔の山にして世界一のロッククライミング聖地「谷川岳（一ノ倉沢・ロープウェイ）」、世界が認めた巨大露天風呂「宝川温泉」、みなかみ十八湯の源泉かけ流し、利根川源流のアクティビティを徹底解説。渓流露天風呂や高原ロッジを厳選。",
  keywords: ["gunma-minakami-tanigawadake-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["gunma-minakami-tanigawadake-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for gunma-minakami-tanigawadake-onsen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tanigawadake_ropeway_ichinokura_stay",
    "badge": "標高1500m雲上のマウンテンテラス",
    "title": "1. 谷川岳ロープウェイ＆天神平・一ノ倉沢（大岩壁の迫力と高山植物の楽園）",
    "timing": "通年（初夏〜夏の高山植物と避暑、10月の紅葉ロープウェイ、冬〜春のパウダースキー）",
    "desc": "土合口駅から標高1319mの天神平までを約15分で結ぶ「谷川岳ロープウェイ」。全面ガラス張りのゴンドラからは、秋には山全体が燃えるような紅葉パノラマ、冬には銀世界の谷川連峰を一望。さらに電気バスやハイキングで行く「一ノ倉沢」は、垂直に切り立った標高差1000m近い大岩壁が眼前に迫る大迫力の景勝地です。",
    "spots": "谷川岳ロープウェイ・天神平展望台、一ノ倉沢出合（電気ガイドバス）、JR土合駅（日本一のモグラ駅・地下階段462段）、谷川岳山岳資料館",
    "access": "上越新幹線「上毛高原駅」より関越交通バスで約50分。関越道「水上IC」より国道291号経由で約25分。",
    "tip": "JR土合駅（モグラ駅）は地下ホームから改札口まで462段の階段を約10分かけて登る名物駅。ひんやりとした地底探検気分を味わえます。"
  },
  {
    "key": "minakami_eighteen_hotsprings_stay",
    "badge": "世界に誇る巨石大露天風呂と名湯",
    "title": "2. みなかみ十八湯＆宝川温泉「汪泉閣」（利根川源流渓谷の源泉かけ流し）",
    "timing": "通年（冬の豪雪雪見露天風呂、新緑の初夏、秋の渓流紅葉風呂）",
    "desc": "水上、谷川、宝川、法師、湯檜曽など18の個性豊かな温泉地が集まる「みなかみ十八湯」。中でも宝川渓流沿いに広がる「宝川温泉 汪泉閣」は、延べ470畳にも及ぶ4つの巨石大露天風呂（混浴・女性専用）を有し、映画『テルマエ・ロマエII』の舞台や海外メディアでも絶賛された世界遺産級の温泉ワンダーランドです。",
    "spots": "宝川温泉 汪泉閣、水上温泉街（湯原温泉・水上館）、谷川温泉（別邸仙寿庵）、湯檜曽温泉、たくみの里（伝統工芸の里）",
    "access": "水上駅より各温泉地へ路線バスまたは宿の送迎バスが運行。宝川温泉へは水上駅よりバス約35分。",
    "tip": "宝川温泉の露天風呂は専用の湯浴み着（レンタル・購入）を着用して入浴するスタイルのため、混浴でも女性やカップルが安心して利用できます。"
  },
  {
    "key": "tone_river_rafting_canyon_stay",
    "badge": "日本屈指のアウトドアの聖地",
    "title": "3. 利根川源流ラフティング・キャニオニング＆上州牛ステーキ（大自然アクティビティ）",
    "timing": "春〜秋（4〜6月の雪解け激流ラフティング、夏のキャニオニング・SUP・カヌー）",
    "desc": "日本一の流域面積を誇る利根川の源流部・みなかみは、日本のアウトドア・アドベンチャーツーリズム発祥の地。春の雪解けシーズンには世界クラスの激流を下るラフティング、夏は天然のウォータースライダーを滑り降りるキャニオニングや奥利根湖でのレイクカヌーが大人気。運動した後は、群馬の最高級ブランド「上州牛」や上州麦豚、旬の山菜料理を堪能できます。",
    "spots": "利根川ラフティング・キャニオニングベース群、奥利根湖（ならまた湖・洞元湖）、月夜野びーどろパーク、道の駅みなかみ水紀行館",
    "access": "水上IC周辺、JR水上駅周辺各所。",
    "tip": "奥利根湖や洞元湖での早朝カヌー・SUP体験は、風がなく鏡のような湖面に山々が映り込み、息をのむ静寂と感動を味わえます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            MINAKAMI & TANIGAWA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【群馬・水上温泉郷＆谷川岳】一ノ倉沢大岩壁・宝川温泉巨石大露天＆利根川宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            標高1977m、日本百名山の一つにして急峻な岩壁が迫る「谷川岳」。ロープウェイで登る天神平からの雲上パノラマと、日本三大岩場「一ノ倉沢」の圧倒的な絶壁美。利根川の最上流部に点在する「みなかみ十八湯」の中でも、巨石を配した野趣あふれる大露天風呂で世界的に有名な「宝川温泉」。激流ラフティングから静寂の雪見露天まで、五感で自然を体感するみなかみステイへご案内します。
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
