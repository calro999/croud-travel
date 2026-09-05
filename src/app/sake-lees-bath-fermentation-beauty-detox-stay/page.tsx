import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【酒粕風呂・日本酒風呂＆発酵美肌デトックス宿】杜氏の手の白さ・糀スパ 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "杜氏の手の美しさの秘密！酒粕風呂・日本酒風呂＆発酵料理デトックス宿完全特化！新潟松之山、京都丹後、栃木日光、純米酒の天然アミノ酸とコウジ酸がもたらす全身しっとり美肌体験、塩糀・甘酒の発酵朝食バイキング、温活スパを徹底解説。",
  keywords: ["sake-lees-bath-fermentation-beauty-detox-stay", "日本酒旅行", "酒蔵巡り", "地酒ペアリング", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["sake-lees-bath-fermentation-beauty-detox-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for sake-lees-bath-fermentation-beauty-detox-stay", e);
  }
  return {};
}

export default function SakeTourismHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "matsunoyama_sake_bath_stay",
    "title": "1. 新潟・松之山温泉＆十日町〜日本三大薬湯（純米酒投入風呂と発酵薬膳）",
    "timing": "通年（冬の豪雪雪見風呂・春の新緑棚田）",
    "desc": "草津・有馬と並ぶ日本三大薬湯「松之山温泉」。約1200万年前の化石海水分が湧き出る超濃厚な塩化物泉。地元の銘酒「松乃井」「雪男」の純米原酒を贅沢に湯船に注ぎ入れる日本酒風呂。山菜や発酵調味料を使った里山薬膳料理。",
    "spots": "松之山温泉街（里山ビジターセンター）、美人林（樹齢約100年のブナ林）、星峠の棚田、十日町銘醸（松乃井酒造場）",
    "access": "北越急行ほくほく線「まつだい駅」よりバス約20分。関越道「塩沢石打IC」より約45分。",
    "tip": "松之山温泉の泉温は90℃以上あり、温泉熱を利用した「低温調理」で作られる温泉卵や、地元の山菜を発酵熟成させた里山料理が絶品です。"
  },
  {
    "key": "kyoto_tango_sake_ferment_stay",
    "title": "2. 京都・丹後＆夕日ヶ浦温泉〜木下酒造「玉川」（英国人杜氏の酒粕美肌エステ）",
    "timing": "通年（冬の松葉ガニ・初夏の夕日パノラマ）",
    "desc": "日本酒界で話題の英国人杜氏フィリップ・ハーパー氏が醸す銘酒「玉川（木下酒造）」のふるさと丹後。純米酵母と酒粕をふんだんに使った酒粕トリートメントや酒風呂。夕日ヶ浦温泉の弱アルカリ性美人の湯と丹後海鮮発酵会席。",
    "spots": "木下酒造（玉川の酒蔵見学）、夕日ヶ浦温泉（夕日の丘・ビーチブランコゆらり）、天橋立、伊根の舟屋",
    "access": "京都丹後鉄道「夕日ヶ浦木津温泉駅」下車。京都縦貫道「与謝天橋立IC」より約40分。",
    "tip": "木下酒造では、昔ながらの「生酛（きもと）造り」による力強い純米酒のほか、夏限定の「アイスブレーカー」など個性豊かな地酒を蔵元限定で購入できます。"
  },
  {
    "key": "nikko_tochigi_sake_spa_stay",
    "title": "3. 栃木・日光＆鬼怒川温泉〜地酒の湯＆湯波発酵モーニング（日光連山の名水仕込み）",
    "timing": "通年（秋の紅葉・冬の雪見風呂・世界遺産参拝）",
    "desc": "世界遺産・日光の社寺の門前町。男体山の伏流水で仕込まれる名酒「日光誉」「四季桜」。鬼怒川温泉の渓谷美を望む露天風呂での日本酒投入風呂。日光名物「日光湯波」や自家製米糀の甘酒、塩糀漬け魚の発酵朝食。",
    "spots": "日光東照宮・日光二荒山神社、渡邊佐平商店（酒蔵見学・日光誉）、鬼怒川温泉郷、中禅寺湖",
    "access": "東武特急スペーシア「東武日光駅」「鬼怒川温泉駅」直通約110分。",
    "tip": "渡邊佐平商店では、江戸時代末期の創業以来受け継がれてきた仕込み蔵の見学と、純米酒のきき酒体験が無料で楽しめます（要事前確認）。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-stone-900 to-emerald-950 text-white p-8 md:p-14 shadow-xl border border-amber-300/30">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-400 to-yellow-300 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            SAKE LEES BATH & FERMENTATION GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【酒粕風呂・日本酒風呂＆発酵美肌デトックス宿】杜氏の手の白さ・糀スパ 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            「酒造りに携わる杜氏の手は、なぜ白くすべすべなのか」。その秘密は、米と糀が醸し出す天然アミノ酸とコウジ酸。湯船にたっぷりと注がれる純米酒や、酒粕を溶かしたミルキーな酒粕風呂。身体の芯から温まり、発酵美食で体内から美しく整うデトックスステイへ。
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
              className="bg-white border border-amber-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-amber-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    🍶 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-amber-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ酒蔵＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <span className="font-bold text-stone-950 block text-[11px]">🚅 アクセス＆蔵巡り目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                  <span className="font-bold text-emerald-950 block text-[11px]">💡 地酒体験を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-amber-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-amber-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                    銘酒厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-amber-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-amber-50/50 border-b border-amber-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-amber-800/40 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-700 to-stone-800 hover:from-amber-600 hover:to-stone-700 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-amber-950 bg-white hover:bg-amber-50 border border-amber-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
