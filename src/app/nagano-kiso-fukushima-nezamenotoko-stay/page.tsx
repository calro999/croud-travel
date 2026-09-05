import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【長野・木曽福島＆寝覚の床・御嶽山】中山道関所宿場町・木曽そば＆五平餅宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "中山道木曽路の中心・木曽福島＆寝覚の床エリア完全特化！日本四大関所「木曽福島関所」、浦島太郎伝説の名勝「寝覚の床」、霊峰御嶽山、木曽川の清流と名物「木曽手打ちそば・五平餅・朴葉巻き宿」を徹底解説。",
  keywords: ["nagano-kiso-fukushima-nezamenotoko-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagano-kiso-fukushima-nezamenotoko-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagano-kiso-fukushima-nezamenotoko-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kiso_fukushima_post_town_stay",
    "title": "1. 木曽福島宿場町〜福島関所・上の段通り（崖家造りと木曽川の清流）",
    "timing": "通年（新緑の5〜6月・秋の紅葉・夏の避暑）",
    "desc": "中山道六十九次のほぼ中間に位置する交通と政治の要衝「木曽福島」。箱根・碓氷・新居と並ぶ日本四大関所「木曽福島関所跡」。木曽川の断崖にせり出すように建てられた独特の「崖家造り（がけやつくり）」。上の段通りの水路と格子戸の町並み。",
    "spots": "木曽福島関所資料館、上の段通り、山村代官屋敷、興禅寺（木曽義仲公の墓・東洋一の枯山水庭園）、木曽川親水公園足湯",
    "access": "JR中央本線（特急しなの）「木曽福島駅」下車すぐ。中央道「伊那IC」より権兵衛トンネル経由約30分。",
    "tip": "木曽福島駅前の観光案内所では、宿場町散策用の絵図（マップ）が手に入り、歴史解説を聞きながら上の段通りの名水巡りが楽しめます。"
  },
  {
    "key": "nezamenotoko_agetsu_nature_stay",
    "title": "2. 寝覚の床〜臨川寺（木曽川のエメラルド激流が削り出した国の名勝奇岩）",
    "timing": "通年（秋の木曽谷紅葉・新緑の渓谷美）",
    "desc": "竜宮城から戻った浦島太郎が玉手箱を開けた場所と伝わる国の名勝「寝覚の床（ねざめのとこ）」。木曽川の激流が巨大な白い花崗岩を square 状に削り出した自然の彫刻美。中央の岩礁に建つ「浦島堂」。崖の上に建つ臨川寺からの見下ろし絶景。",
    "spots": "寝覚の床（浦島堂・奇岩群）、臨川寺（弁才天・宝物館）、ねざめ亭、赤沢自然休養林（森林鉄道）",
    "access": "JR中央本線「上松駅」より車・バス約5分、または木曽福島駅より車約15分。",
    "tip": "寝覚の床の巨岩群の上を歩いて浦島堂へ渡るルートは岩肌が滑りやすいため、スニーカーなど歩きやすい靴での散策が必須です。"
  },
  {
    "key": "ontake_kiso_soba_inn_stay",
    "title": "3. 木曽名物「手打ちそば」＆五平餅・朴葉巻き（冷涼な木曽谷の郷土の味）",
    "timing": "通年（秋の新そば・初夏の朴葉巻き・冬のすんきそば）",
    "desc": "昼夜の寒暖差が大きい開田高原のそば粉と清らかな湧水で打つコシの強い「木曽そば」。クルミと胡麻の甘辛タレをたっぷり塗って香ばしく焼き上げたわらじ型の「五平餅」。塩を使わずに乳酸菌発酵させた冬限定の健康食「すんき漬け・すんきそば」。",
    "spots": "くるまや本店（木曽そば名店）、道の駅木曽福島、開田高原アイスクリーム工房、木曽谷の老舗料理旅館",
    "access": "木曽町・上松町・開田高原。",
    "tip": "「すんきそば」は長野県木曽地方でしか作られない無塩乳酸発酵の赤かぶ菜が入った郷土そばで、独特の爽やかな酸味が温かい出汁と絶妙に調和します。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-emerald-950 to-teal-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KISO FUKUSHIMA & ONTAKE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【長野・木曽福島＆寝覚の床・御嶽山】中山道関所宿場町・木曽そば＆五平餅宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed">
            島崎藤村の『夜明け前』の舞台、深い木曽谷の歴史薫る宿場町「木曽福島」。中山道を取り締まった「福島関所」と崖家造りの町並み。木曽川のエメラルドグリーンの激流が花崗岩を削り出した奇勝「寝覚の床」。冷涼な木曽谷の天然温泉と信州手打ちそばの旅。
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
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-emerald-800 hover:from-teal-600 hover:to-emerald-700 rounded-xl shadow transition"
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
