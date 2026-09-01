import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【長野・戸隠＆飯綱高原】戸隠神社五社巡り・奥社杉並木＆日本三大戸隠そば宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "神話と巨樹の霊山・長野戸隠エリア完全特化！天照大御神の岩戸伝説息づく「戸隠神社五社（奥社・中社・宝光社・九頭龍社・火之御子社）」、樹齢400年奥社杉並木、日本三大そば「戸隠そば（ぼっち盛り）」、戸隠温泉・宿坊旅館を徹底解説。",
  keywords: ["nagano-togakushi-shrine-soba-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagano-togakushi-shrine-soba-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagano-togakushi-shrine-soba-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "togakushi_shrine_shukubo_stay",
    "title": "1. 戸隠神社奥社〜杉並木参道・中社（樹齢400年の巨樹回廊と五社巡り）",
    "timing": "通年（春〜秋の参拝・紅葉の10月中旬・冬の静寂の雪参道）",
    "desc": "2,000年以上の歴史を誇る聖地「戸隠神社」。奥社参道の随神門をくぐると現れる約500mに及ぶ樹齢400年の巨大な杉並木（国の天然記念物）。天八意思兼命を祀る中社。歴史ある宿坊での朝拝や精進料理の体験。",
    "spots": "戸隠神社（奥社・中社・宝光社・九頭龍社・火之御子社）、奥社参道杉並木、鏡池（戸隠連峰を映す池）",
    "access": "JR長野駅（北陸新幹線）より路線バス「戸隠線」で約60〜70分。上信越道「信濃町IC」より約30分。",
    "tip": "「鏡池」は風のない早朝に訪れると、水面が完全に鏡となり、険しい戸隠連峰と鮮やかな紅葉がシンメトリーに映り込む絶景が楽しめます。"
  },
  {
    "key": "iizuna_highland_resort_stay",
    "title": "2. 飯綱高原〜チビッ子忍者村・戸隠森林植物園（忍者からくり屋敷と水芭蕉の湿原）",
    "timing": "グリーンシーズン：4月下旬〜11月上旬（初夏の水芭蕉・秋の紅葉）",
    "desc": "戸隠流忍術の発祥地。「忍法資料館・からくり屋敷」や子どもから大人まで楽しめる「チビッ子忍者村」。初夏に数十万本の水芭蕉が咲き乱れる「戸隠森林植物園（八十二森のまなびや）」。飯綱高原の静寂な湖畔キャンプ＆ロッジ。",
    "spots": "戸隠流忍法資料館・からくり屋敷、チビッ子忍者村、戸隠森林植物園（みどりが池・水芭蕉園）、大座法師池",
    "access": "長野駅より車・バスで約30〜40分。",
    "tip": "「からくり屋敷」は大人でも出口を見つけるのが難しい本格的な隠し扉や抜け道が満載で、知的好奇心を刺激される大人気スポットです。"
  },
  {
    "key": "togakushi_soba_soba_gourmet",
    "title": "3. 日本三大そば「戸隠そば」＆ぼっち盛り（挽きぐるみ粉と円形ざるの伝統）",
    "timing": "通年（11月上旬の戸隠そば祭り・新そばシーズンは格別）",
    "desc": "わんこそば・出雲そばと並ぶ日本三大そば「戸隠そば」。甘皮を取らずに挽く風味豊かな蕎麦。一口大に束ねて5つ盛る伝統の「ぼっち盛り（戸隠五社に由来）」。辛味大根の絞り汁や戸隠特産のクルミつゆで味わう絶品。",
    "spots": "うずら家（行列の絶えない名店）、極楽坊、そば処 よつかど、戸隠そば博物館とんくるりん（手打ち体験）",
    "access": "戸隠中社周辺・そば街道。",
    "tip": "戸隠そばの名店「うずら家」は早朝から記帳台が出されるため、朝一番に名前を書いてから戸隠神社を参拝するとスムーズに名店の味を堪能できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            TOGAKUSHI & JINJA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【長野・戸隠＆飯綱高原】戸隠神社五社巡り・奥社杉並木＆日本三大戸隠そば宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            天手力雄命が投げ飛ばした天の岩戸が落ちてできたと伝わる霊峰「戸隠山」。樹齢400年を超える杉並木が続く戸隠神社奥社参道。一本のソバを丁寧に束ねる「ぼっち盛り」の日本三大戸隠そば。歴史ある宿坊や高原リゾートで心洗われる休日へ。
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
