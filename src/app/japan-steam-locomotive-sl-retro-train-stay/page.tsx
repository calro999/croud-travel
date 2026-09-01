import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【SL蒸気機関車＆レトロ列車旅】大井川鐵道・SLばんえつ物語＆温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "汽笛と白煙のノスタルジー！全国の現役SL（蒸気機関車）運行路線＆駅近温泉宿完全特化！静岡「大井川鐵道（きかんしゃトーマス号）」、福島＆新潟「SLばんえつ物語」、秩父鉄道「SLパレオエクスプレス」、寸又峡温泉・東山温泉宿を徹底解説。",
  keywords: ["japan-steam-locomotive-sl-retro-train-stay", "鉄道旅行", "乗り物旅", "絶景体験", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-steam-locomotive-sl-retro-train-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-steam-locomotive-sl-retro-train-stay", e);
  }
  return {};
}

export default function RailwayActivityHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "oigawa_railway_sl_thomas_stay",
    "title": "1. 静岡・大井川鐵道〜川根温泉・寸又峡（日本一のSL動態保存路線）",
    "timing": "通年（きかんしゃトーマス号運行時期・新茶の春・紅葉の秋）",
    "desc": "年間300日以上SLが走る日本屈指の動態保存鉄道「大井川鐵道」。大人気「きかんしゃトーマス号」。大井川第一橋梁を渡るSLの勇姿。線路沿いの露天風呂からSLに手を振れる「川根温泉ふれあいの泉」。エメラルドグリーンの夢の吊橋が有名な寸又峡温泉。",
    "spots": "新金谷駅（SL転車台・プラザロコ）、川根温泉笹間渡駅、千頭駅（トーマスフェア）、寸又峡温泉（夢の吊橋）",
    "access": "JR東海道線「金谷駅」乗り換え。新東名「島田金谷IC」より約10分。",
    "tip": "新金谷駅では出発前にSLの整備点検作業や石炭の投入風景、転車台（ターンテーブル）で方向転換する迫力のシーンを間近で見学できます。"
  },
  {
    "key": "sl_banetsu_aizu_higashiyama_stay",
    "title": "2. 福島＆新潟・SLばんえつ物語〜磐越西線・会津若松（森と水とロマンの鉄道）",
    "timing": "運転日：4月〜11月の土休日中心（紅葉の10月下旬〜11月上旬は絶景）",
    "desc": "「貴婦人」の愛称で親しまれるC57 180号機が牽引する「SLばんえつ物語（新津〜会津若松）」。阿賀野川沿いの深い渓谷美。グリーン車展望パノラマ室やオコジョ展望車。終着の会津若松城下町と開湯1300年の東山温泉。",
    "spots": "会津若松駅、東山温泉（御宿東鳳・向瀧）、芦ノ牧温泉、阿賀野川深戸橋梁（有名撮影地）、津川駅（給水・点検）",
    "access": "JR磐越西線。磐越道「会津若松IC」より。",
    "tip": "津川駅では約15分間の停車時間があり、機関士が給水や点検を行う様子をホームから記念撮影できる人気のシャッターチャンスです。"
  },
  {
    "key": "chichibu_sl_paleo_express_stay",
    "title": "3. 埼玉・秩父鉄道 SLパレオエクスプレス〜長瀞（都心から一番近い蒸気機関車）",
    "timing": "運転日：3月下旬〜12月上旬の土休日中心",
    "desc": "熊谷〜三峰口間を約2時間40分かけてのんびり走る「SLパレオエクスプレス（C58 363号機）」。荒川橋梁を渡る大迫力の光景。名勝「長瀞ラインくだり」や天然氷のかき氷。秩父の豊かな自然に包まれた温泉旅館。",
    "spots": "長瀞岩畳、三峰口駅（SL転車台公園）、秩父神社、秩父温泉、長瀞ラインくだり",
    "access": "西武秩父駅またはJR熊谷駅より秩父鉄道。関越道「花園IC」より約30分。",
    "tip": "終点の三峰口駅隣接「SL転車台公園」では、SLが転車台で回転する様子や機関車のメカニズムを解説付きで間近に見学できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-cyan-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-cyan-400 to-blue-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            STEAM LOCOMOTIVE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【SL蒸気機関車＆レトロ列車旅】大井川鐵道・SLばんえつ物語＆温泉宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed">
            勇壮な汽笛を響かせ、モクモクと煙を上げて力強く走る「SL蒸気機関車」。昭和レトロな木造客車に揺られ、車窓に流れる茶畑や渓谷。大井川鐵道のきかんしゃトーマス号や磐越西線の貴婦人。終着駅の温泉街で湯に浸かる鉄道浪漫の旅へ。
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
