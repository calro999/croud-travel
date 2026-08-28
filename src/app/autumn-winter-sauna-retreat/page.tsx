import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【ととのう極上旅】絶景サウナ＆天然水風呂の温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "秋・冬の外気浴が最高に気持ちいい！長野・野尻湖The Sauna、山梨・富士山ビューサウナ、静岡・天然水風呂宿、北海道・十勝アヴァントサウナなど、本格フィンランド式サウナと温泉を兼ね備えた名宿を徹底解説。",
  keywords: ["autumn-winter-sauna-retreat", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-sauna-retreat"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-sauna-retreat", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "lake_sauna",
    "title": "1. 長野・野尻湖＆信濃町（日本サウナの聖地・ログハウス薪サウナ）",
    "timing": "通年（特に秋の紅葉外気浴・冬の雪ダイブが至高）",
    "desc": "大自然に囲まれたフィンランド式薪サウナの聖地「The Sauna」。手作りのログサウナ小屋でセルフロウリュを愉しみ、黒姫山の天然湧水水風呂や野尻湖へダイブ。秋は紅葉、冬はパウダースノーにダイブする極上体験を。",
    "spots": "野尻湖、黒姫高原、戸隠神社（奥社杉並木）、斑尾高原",
    "access": "北陸新幹線「長野駅」よりしなの鉄道で黒姫駅まで約35分。上信越道信濃町ICより車約10分。",
    "tip": "完全予約制のサウナ付き宿泊プランを早めに確保。サウナ後の名物ラム肉ハンバーガーや薬膳カレー（サウナ飯）は絶品です。"
  },
  {
    "key": "fuji_sauna",
    "title": "2. 山梨・富士吉田＆河口湖（雄大な富士山を真正面に望むパノラマサウナ）",
    "timing": "通年（秋・冬は空気が澄んで富士山が最も綺麗）",
    "desc": "サウナ室の窓から雪化粧をまとった富士山をダイナミックに一望。富士山の伏流水（バナジウム天然水）を掛け流した極上の水風呂と、澄んだ秋空・星空の下でのインフィニティ外気浴で深く「ととのう」ことができます。",
    "spots": "新倉山浅間公園、河口湖もみじ回廊、富士急ハイランド、山中湖パノラマ台",
    "access": "新宿駅からJR特急「富士回遊」で直通約1時間55分。中央道河口湖ICより車約10分。",
    "tip": "早朝サウナで朝焼けに赤く染まる「赤富士」を眺めながらの外気浴は感動的。サウナ後は山梨名物ほうとうで温まりましょう。"
  },
  {
    "key": "shizuoka_sauna",
    "title": "3. 静岡・静岡市用宗＆大井川（富士山・南アルプスの伏流水が注ぐ奇跡の水風呂）",
    "timing": "通年（冬のサウナ旅の定番）",
    "desc": "「サウナしきじ」をはじめ全国のサウナーを魅了する静岡の水。駿河湾を望む用宗みなと温泉や大井川沿いのサウナリゾートでは、ミネラル豊富な天然水風呂と海風を感じる外気浴、駿河湾の新鮮生しらすを味わえます。",
    "spots": "用宗海岸・みなと横丁、久能山東照宮、三保松原、寸又峡夢の吊橋",
    "access": "東海道新幹線「静岡駅」よりJR東海道線で用宗駅まで約6分。東名静岡ICより車約15分。",
    "tip": "用宗漁港で水揚げされたばかりの生しらす丼をサウナ飯（サ飯）としていただくのが地元通の楽しみ方です。"
  },
  {
    "key": "hokkaido_sauna",
    "title": "4. 北海道・十勝＆洞爺湖（十勝アヴァント＆モール温泉セルフロウリュ）",
    "timing": "通年（冬は凍結した川・湖に入るアヴァント体験）",
    "desc": "植物性美肌成分を含む「モール温泉」でロウリュを行う十勝サウナ。冬には凍結した川の氷に穴を開けて水風呂にする本場北欧さながらの「アヴァント」や、白銀の白樺林に囲まれたテントサウナが人気を博しています。",
    "spots": "十勝川温泉、白樺並木（十勝牧場）、真鍋庭園、洞爺湖温泉（冬の花火大会）",
    "access": "とかち帯広空港より車で約30分。JR特急おおぞら・とかちで札幌から帯広駅まで約2時間30分。",
    "tip": "十勝名物の豚丼やラクレットチーズ、濃厚ソフトクリームなど北海道ならではの絶品サウナ飯を満喫できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SAUNA & ONSON
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【ととのう極上旅】絶景サウナ＆天然水風呂の温泉宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            澄み渡る秋風やキリリと冷えた冬の空気の中で行う「外気浴」は、サウナ愛好家にとって至高の体験。薪ストーブの芳しい香り、天然地下水かけ流しの水風呂、富士山や湖を望む絶景サウナリゾートへ。
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
