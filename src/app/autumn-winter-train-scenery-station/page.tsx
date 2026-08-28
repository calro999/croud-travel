import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【車窓の旅】紅葉＆雪景色！絶景観光列車と駅近温泉旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "車窓を流れる息をのむ紅葉と銀世界！京都嵯峨野トロッコ列車、福島奥会津只見線、富山黒部峡谷トロッコ、青森津軽鉄道ストーブ列車など、日本屈指の絶景ローカル線と温泉宿を徹底解説。",
  keywords: ["autumn-winter-train-scenery-station", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-train-scenery-station"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-train-scenery-station", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "sagano_train",
    "title": "1. 京都・嵯峨野トロッコ列車＆嵐山温泉（保津川渓谷の燃えるような紅葉美）",
    "timing": "紅葉シーズン：11月中旬〜12月上旬",
    "desc": "嵯峨野から亀岡まで保津川渓谷に沿って走る観光トロッコ列車。窓ガラスのないオープン車両「リッチ号」で秋風と紅葉のシャワーを浴び、嵐山温泉の老舗旅館で湯豆腐と京会席を堪能。",
    "spots": "嵯峨野トロッコ列車（トロッコ嵯峨駅〜トロッコ亀岡駅）、保津川下り、渡月橋、天龍寺、竹林の小径",
    "access": "JR嵯峨野線「嵯峨嵐山駅」隣接。京都駅からJR快速で約16分。",
    "tip": "紅葉期のトロッコ列車は乗車1ヶ月前の予約開始直後に完売するため、宿泊と乗車券がセットになったプランが便利です。"
  },
  {
    "key": "tadami_train",
    "title": "2. 福島・奥会津只見線＆会津柳津温泉（世界が絶賛する雪景色の一枚絵）",
    "timing": "絶景シーズン：10月下旬（紅葉）／12月〜2月（雪景色）",
    "desc": "只見川の渓谷美を縫うように走るJR只見線。第一只見川橋梁展望台から眺める雪景色の列車風景は世界的絶景として有名。沿線の会津柳津温泉や早戸温泉つるの湯で湯治情緒を満喫。",
    "spots": "第一只見川橋梁ビューポイント、道の駅みしま宿、円蔵寺（粟饅頭）、早戸温泉つるの湯",
    "access": "JR只見線「会津柳津駅」「会津宮下駅」。JR会津若松駅より接続。",
    "tip": "早戸温泉「つるの湯」の露天風呂は只見川の川面が目の前に迫り、雪見風呂の聖地として絶大な人気を誇ります。"
  },
  {
    "key": "kurobe_gorge_train",
    "title": "3. 富山・黒部峡谷トロッコ電車＆宇奈月温泉（大峡谷を染める錦秋の紅葉トンネル）",
    "timing": "紅葉シーズン：10月下旬〜11月中旬（冬期運休前）",
    "desc": "宇奈月駅から欅平駅まで、黒部川の深いV字峡を駆け抜けるトロッコ電車。鮮やかな赤や黄に染まる断崖絶壁とエメラルドグリーンの湖水。宇奈月温泉の無色透明・つべつべ美肌湯で癒やされます。",
    "spots": "黒部峡谷トロッコ電車、宇奈月ダム、やまびこ遊歩道、黒薙温泉（秘湯）",
    "access": "北陸新幹線「黒部宇奈月温泉駅」より富山地方鉄道に乗り換え宇奈月温泉駅まで約25分。",
    "tip": "トロッコ電車の「鐘釣駅」周辺の万年雪や、宇奈月温泉街の足湯めぐりが散策の定番です。"
  },
  {
    "key": "tsugaru_stove_train",
    "title": "4. 青森・津軽鉄道ストーブ列車＆弘前（石炭ストーブでスルメを焼く冬の風物詩）",
    "timing": "運行期間：12月1日〜翌年3月31日",
    "desc": "客車内に設置された昔ながらの「だるまストーブ」。車内で車掌さんが焼いてくれる香ばしいスルメをつまみに地酒を味わい、津軽平野の吹雪と岩木山を車窓から眺めるノスタルジックな旅。",
    "spots": "津軽鉄道ストーブ列車（津軽五所川原〜津軽中里）、斜陽館（太宰治生家）、弘前城雪燈籠まつり",
    "access": "JR奥羽本線・五能線「五所川原駅」隣接の津軽五所川原駅。弘前駅からJR約40分。",
    "tip": "弘前市内の洋館建築巡りや名物アップルパイの食べ比べとセットで巡るのがおすすめです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SCENIC TRAIN JOURNEY
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【車窓の旅】紅葉＆雪景色！絶景観光列車と駅近温泉旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ガタゴトと揺れる列車に身を委ね、窓の外に広がる山々の錦秋や白銀の雪景色を眺める贅沢。名物駅弁を広げ、終着駅や沿線の名湯に降り立つ、心温まる鉄道旅へ。
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
