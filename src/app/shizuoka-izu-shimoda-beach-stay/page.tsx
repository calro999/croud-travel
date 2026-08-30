import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【静岡・伊豆下田＆白浜海岸】エメラルドの海・白浜大浜＆金目鯛水揚げ日本一宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "南伊豆・下田エリア完全特化！透明度抜群の「白浜大浜海水浴場」、ペリーロードのなまこ壁、下田海中水族館、下田ロープウェイ寝姿山、水揚げ日本一の下田港「金目鯛づくし会席」と絶景オーシャンビュー温泉旅館を徹底解説。",
  keywords: ["shizuoka-izu-shimoda-beach-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shizuoka-izu-shimoda-beach-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shizuoka-izu-shimoda-beach-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shimoda_shirahama_beach",
    "title": "1. 白浜海岸〜外浦・爪木崎（沖縄に匹敵する透明度のビーチと野水仙の群生）",
    "timing": "通年（夏の海水浴・冬の12月〜1月爪木崎水仙まつり・サーフィン）",
    "desc": "白い砂浜とエメラルドグリーンの海が700m続く「白浜大浜海水浴場」。波が穏やかでプライベート感ある「外浦海岸」。爪木崎岬に咲き乱れる約300万本の野水仙と白亜の爪木崎灯台。",
    "spots": "白浜大浜海水浴場、白浜神社（海上の鳥居）、爪木崎（水仙群生地・俵磯の柱状節理）、外浦海岸",
    "access": "伊豆急行線「伊豆急下田駅」より東海バス「白浜海岸行き」で約15分。東京駅から特急「サフィール踊り子」直通約2時間40分。",
    "tip": "白浜神社の海岸にある「明神鳥居」は、青い海と白い波を背景に鳥居が立つ絶好のフォトスポットです。"
  },
  {
    "key": "shimoda_perry_road_walk",
    "title": "2. ペリーロード〜下田海中水族館・寝姿山（黒船来航の歴史となまこ壁の小径）",
    "timing": "通年（歴史散歩とお洒落な古民家カフェめぐり）",
    "desc": "平滑川沿いに石畳となまこ壁・伊豆石の古民家が並ぶ「ペリーロード」。自然の入り江を利用した「下田海中水族館」でのイルカふれあい。「下田ロープウェイ」で登る寝姿山山頂からの下田港パノラマビュー。",
    "spots": "ペリーロード、了仙寺（日米和親条約交渉の地）、下田海中水族館、下田ロープウェイ（寝姿山自然公園・THE ROYAL HOUSE）",
    "access": "伊豆急下田駅より徒歩約10〜15分。",
    "tip": "寝姿山山頂にあるレストラン「THE ROYAL HOUSE」は、水戸岡鋭治氏デザインの組子細工が美しい絶景カフェです。"
  },
  {
    "key": "shimoda_kinmedai_luxury",
    "title": "3. 下田港直送「金目鯛づくし」＆伊豆の地魚（水揚げ日本一の秘伝煮付け）",
    "timing": "通年（冬〜春の脂がのった寒金目鯛）",
    "desc": "日本一の金目鯛水揚げ量を誇る下田港。丸ごと一匹を甘辛い秘伝のタレで煮上げた「金目鯛の姿煮」、皮目を炙った香ばしい「金目鯛のしゃぶしゃぶ」、握り寿司。伊豆近海の伊勢海老やサザエのつぼ焼き。",
    "spots": "道の駅開国下田みなと（魚市場食堂・地金目バーガー）、下田港遊覧船「黒船サスケハナ」",
    "access": "下田港・道の駅周辺。",
    "tip": "金目鯛の中でも、日帰り一本釣りで獲れる「地金目（じきんめ）」は傷がなく脂の乗りが抜群の最高級ブランドです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            IZU SHIMODA & BEACH GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【静岡・伊豆下田＆白浜海岸】エメラルドの海・白浜大浜＆金目鯛水揚げ日本一宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            本州屈指の透明度を誇るエメラルドグリーンの海「伊豆下田」。白砂が輝く白浜海岸と、黒船来航の歴史が薫るペリーロード。日本一の水揚げ量を誇る極上の「金目鯛の姿煮」と、海に沈む夕日を眺めるリゾートステイ。
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
