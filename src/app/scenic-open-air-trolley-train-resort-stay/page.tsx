import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【絶景観光トロッコ列車＆オープン客車】黒部峡谷・嵯峨野・南阿蘇＆名湯 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "窓のない爽快オープンデッキで風を感じる！全国の人気観光トロッコ列車＆渓谷温泉宿完全特化！富山「黒部峡谷トロッコ電車」、京都嵐山「嵯峨野トロッコ列車」、熊本「南阿蘇鉄道ゆうすげ号」、宇奈月温泉・嵐山温泉宿を徹底解説。",
  keywords: ["scenic-open-air-trolley-train-resort-stay", "鉄道旅行", "乗り物旅", "絶景体験", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["scenic-open-air-trolley-train-resort-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for scenic-open-air-trolley-train-resort-stay", e);
  }
  return {};
}

export default function RailwayActivityHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kurobe_gorge_trolley_unazuki_stay",
    "title": "1. 富山・黒部峡谷鉄道トロッコ電車〜宇奈月温泉・欅平（日本一深いV字峡谷）",
    "timing": "運行期間：4月中旬〜11月30日（新緑の初夏・紅葉の10月中旬〜11月上旬）",
    "desc": "宇奈月駅から欅平駅まで約20.1km（片道約80分）を走る「黒部峡谷鉄道」。真紅の山彦橋、仏石、黒薙温泉の後曳橋、終点欅平の猿飛峡や足湯。黒部川沿いに広がる宇奈月温泉の無色透明な美肌湯。",
    "spots": "黒部峡谷トロッコ電車（宇奈月〜黒薙〜鐘釣〜欅平）、欅平（猿飛峡・奥鐘橋・足湯）、宇奈月温泉（やまびこ遊歩道）",
    "access": "北陸新幹線「黒部宇奈月温泉駅」より富山地方鉄道乗り換え「宇奈月温泉駅」すぐ。",
    "tip": "トロッコ電車は進行方向右側の座席（宇奈月発・下り列車の場合）に座ると、エメラルドグリーンの黒部川と大渓谷の絶景を間近で楽しめます。"
  },
  {
    "key": "sagano_scenic_railway_arashiyama",
    "title": "2. 京都・嵯峨野トロッコ列車〜保津川下り・嵐山（レトロなクラシカル列車）",
    "timing": "通年運行（水曜定休・春の桜トンネル・夏の青もみじ・秋の錦秋ライトアップ）",
    "desc": "トロッコ嵯峨駅からトロッコ亀岡駅まで保津川沿い約7.3kmを走る「嵯峨野トロッコ列車（全席指定）」。窓ガラスがないオープン車両「ザ・リッチ号（5号車）」。帰りはスリル満点の「保津川下り」で船で戻る黄金ルート。",
    "spots": "トロッコ嵯峨駅（19世紀ホール・ジオラマ京都JAPAN）、保津峡駅（吊り橋・タヌキの置物）、保津川下り（亀岡〜嵐山）、渡月橋",
    "access": "JR山陰本線（嵯峨野線）「嵯峨嵐山駅」隣接。",
    "tip": "風をダイレクトに感じる5号車「ザ・リッチ号」は当日券または事前予約で大人気のため、旅程が決まったら早めの座席確保がおすすめです。"
  },
  {
    "key": "minamiaso_railway_trolley_stay",
    "title": "3. 熊本・南阿蘇鉄道トロッコ列車「ゆうすげ号」〜白川水源（全線復旧の阿蘇パノラマ）",
    "timing": "運行日：3月中旬〜11月下旬の土日祝日中心（夏休み毎日運行）",
    "desc": "熊本地震から完全復旧を果たした「南阿蘇鉄道（立野〜高森）」。阿蘇五岳と外輪山に抱かれた南阿蘇をのんびり走る「トロッコ列車ゆうすげ号」。高さ60mの第一白川橋梁からの絶景。毎分60トンの名水が湧き出る「白川水源」。",
    "spots": "高森駅（サニー号トレイン・ONE PIECE像）、第一白川橋梁、白川水源、阿蘇パノラマライン、南阿蘇温泉郷",
    "access": "JR豊肥本線「立野駅」接続。熊本空港より車約40分。",
    "tip": "第一白川橋梁では列車が橋の上で徐行・一時停止し、車掌さんの楽しいガイドとともに足下に広がる深い渓谷を見下ろせます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-cyan-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-cyan-400 to-blue-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            TROLLEY TRAIN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【絶景観光トロッコ列車＆オープン客車】黒部峡谷・嵯峨野・南阿蘇＆名湯 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed">
            窓ガラスのないオープン客車に吹き抜ける心地よい渓谷の風！「絶景観光トロッコ列車」。険しいV字峡谷を縫うように走る黒部峡谷鉄道、保津川の絶壁を望む京都嵯峨野トロッコ、阿蘇の大カルデラを横断する南阿蘇トロッコ。大自然と秘湯を巡る旅へ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆厳選宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-blue-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-blue-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-0.5 rounded-full uppercase">
                    🚂 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-blue-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1.5">
                  <span className="font-bold text-blue-950 block text-[11px]">📍 おすすめスポット＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-1.5">
                  <span className="font-bold text-cyan-950 block text-[11px]">🚅 アクセス＆乗車ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">💡 体験を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-blue-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-blue-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    厳選ステイ
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-blue-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-blue-50 border-b border-blue-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-blue-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-cyan-300 px-2 py-0.5 rounded border border-cyan-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-blue-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-950 bg-white hover:bg-blue-50 border border-blue-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
