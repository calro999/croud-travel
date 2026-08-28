import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【冬の夜景】工場夜景クルーズ＆煌めくベイサイドホテル 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "空気が澄む冬こそ夜景の絶頂期！神奈川・川崎臨海部、三重・四日市コンビナート、横浜みなとみらい、神戸ベイエリアなど、SF映画のような工場夜景クルーズやパノラマ夜景を客室から望む人気ホテルを徹底解説。",
  keywords: ["winter-bayside-factory-nightview", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["winter-bayside-factory-nightview"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for winter-bayside-factory-nightview", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kawasaki_nightview",
    "title": "1. 神奈川・川崎臨海部（SFの要塞！工場夜景屋形船クルーズと羽田ベイビュー）",
    "timing": "通年（特に秋〜冬の夜間クルーズが最高）",
    "desc": "日本五大工場夜景の代表格・川崎コンビナート（扇町・浮島・千鳥町）。水上から迫力満点のプラントを見上げるクルーズ船ツアーが人気。多摩川対岸の羽田空港を望むリバーサイドホテルが便利です。",
    "spots": "川崎工場夜景クルーズ、千鳥町ヤード前（定番フォトスポット）、東扇島東公園、羽田エアポートガーデン",
    "access": "JR川崎駅・京急川崎駅より路線バス・タクシー。羽田空港から車で約10分。",
    "tip": "工場夜景屋形船クルーズ（特定日運行）がセットになったホテル宿泊プランを利用すると予約が確実です。"
  },
  {
    "key": "yokkaichi_nightview",
    "title": "2. 三重・四日市コンビナート（海と煙突が織りなす大迫力パノラマ工場夜景）",
    "timing": "通年（うみてらす14からの展望）",
    "desc": "四日市港ポートビル展望展示室「うみてらす14」から望む、360度の大パノラマ工場夜景。四日市コンビナートクルーズ船や大正橋周辺の撮影スポットを巡り、四日市名物「とんてき」を味わう滞在。",
    "spots": "四日市港ポートビル（うみてらす14）、四日市コンビナートクルーズ、霞ヶ浦緑地公園、大正橋",
    "access": "近鉄四日市駅・JR四日市駅周辺。名古屋駅から近鉄特急で約30分。東名阪道四日市IC。",
    "tip": "うみてらす14（地上90m）の土日祝夜間開館に合わせて訪れると、三日月の港と光り輝くコンビナートが一望できます。"
  },
  {
    "key": "yokohama_minatomirai",
    "title": "3. 神奈川・横浜みなとみらい（大観覧車コスモクロックとベイブリッジ夜景）",
    "timing": "通年（冬のイルミネーションとクリスマス）",
    "desc": "横浜ランドマークタワー、大観覧車、赤レンガ倉庫が織りなす日本屈指の都市夜景。客室バルコニーから海と夜景を一望できるインターコンチネンタルやベイホテル東急で極上のアニバーサリーを。",
    "spots": "横浜ランドマークタワー（スカイガーデン）、横浜赤レンガ倉庫、大さん橋国際客船ターミナル、山下公園",
    "access": "みなとみらい線「みなとみらい駅」「馬車道駅」直結・徒歩すぐ。羽田空港からリムジンバス約30分。",
    "tip": "海側客室（ベイビュー）をリクエストすると、大観覧車のイルミネーション演出を部屋にいながら独占できます。"
  },
  {
    "key": "kobe_bayside",
    "title": "4. 兵庫・神戸ハーバーランド＆メリケンパーク（1000万ドルの夜景リゾート）",
    "timing": "通年（冬の神戸ルミナリエ・クリスマス夜景）",
    "desc": "神戸ポートタワーや海洋博物館が美しくライトアップされるメリケンパーク。全室テラス付きのオーシャンビューホテルに泊まり、神戸牛ディナーやナイトクルーズ船「ルミナス神戸2」を満喫。",
    "spots": "神戸ポートタワー、神戸ハーバーランドumie（モザイク観覧車）、メリケンパーク、旧居留地",
    "access": "JR・阪神「元町駅」「神戸駅」より徒歩約10〜15分。神戸空港からポートライナーで約20分。",
    "tip": "モザイク前のウッドデッキからの夜景散策や、海を望むホテルテラスでのモーニングビュッフェが至福です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            BAYSIDE NIGHTSCAPE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【冬の夜景】工場夜景クルーズ＆煌めくベイサイドホテル 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            金属のパイプラインや蒸留塔が放つ無数の光、立ち上る白いスチーム。冬の澄み切った夜空に浮かび上がる近未来的な工場夜景と、海越しに望む都市の摩天楼。感動のベイサイドナイトステイへ。
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
