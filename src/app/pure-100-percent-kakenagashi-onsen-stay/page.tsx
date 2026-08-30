import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【自家源泉かけ流し100%の宿】加水なし・加温なし・循環なし！本物の名湯 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "温泉通が選ぶ「自家源泉100%完全かけ流し」宿完全特化！加水なし・加温なし・循環ろ過なし・消毒なしの純生温泉。毎分数百リットルの湧出量、湯の花が舞う鮮度抜群の湯口、飲泉許可、湯守のこだわり宿を徹底解説。",
  keywords: ["pure-100-percent-kakenagashi-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["pure-100-percent-kakenagashi-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for pure-100-percent-kakenagashi-onsen-stay", e);
  }
  return {};
}

export default function HeritageOnsenHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "pure_natural_kakenagashi",
    "title": "1. 純度100%の生源泉（加水・加温・循環・消毒一切なしの奇跡の湯船）",
    "timing": "通年（温泉成分が最も濃い生まれたての湯を堪能）",
    "desc": "温泉法で認められた加水や加温すら行わず、源泉の温度と湧出量のバランスだけで湯温を保つ究極の湯守の技術。湯口から絶え間なく溢れ出る生まれたての温泉。空気に触れる時間が短いため酸化せず、圧倒的な還元力と美肌効果を誇ります。",
    "spots": "毎分数百リットル自噴の湯口、オーバーフローする湯船、湯の花が舞う天然温泉、檜風呂",
    "access": "草津、万座、野沢、渋、奥飛騨、別府、霧島などの湯量豊富な名湯エリア。",
    "tip": "湯船の縁から常に温泉がドバドバと床へ流れ出ている（オーバーフロー）のが、本物の完全かけ流しの証です。"
  },
  {
    "key": "footbath_bottom_spring",
    "title": "2. 足元湧出（湯船の底の岩盤からポコポコと自噴する奇跡の温泉）",
    "timing": "通年（空気に一切触れない日本屈指の鮮度）",
    "desc": "パイプを通すことなく、浴槽の底にある岩盤の割れ目から直接温泉が湧き出す「足元湧出」。全国でも数十箇所しか存在しない極めて貴重な温泉。生まれたての気泡が肌にまとわりつく極上の入浴体験。",
    "spots": "足元湧出天然岩風呂、川底自噴露天風呂、混浴・女性専用時間ありの名湯",
    "access": "酸ヶ湯、蔦温泉、法師温泉、湯抱温泉、壁湯温泉など。",
    "tip": "足元から気泡とともに湧き上がる温もりを肌で感じながら、静かに目を閉じて浸かるのが足元湧出の真髄です。"
  },
  {
    "key": "onsen_sommelier_yumori",
    "title": "3. 湯守の技＆飲泉処（温泉ソムリエも絶賛する鮮度と身体の内側からの治癒）",
    "timing": "通年（本格的な現代湯治・デトックス滞在）",
    "desc": "外気温や天候に合わせて湯量をミリ単位で調整する「湯守（ゆもり）」の存在。保健所の飲泉許可を取得した飲泉処で、新鮮な温泉水をコップに注いで飲む内臓ケア。身体の外からも中からも温泉成分を吸収する贅沢。",
    "spots": "館内飲泉処、源泉蒸し風呂、温泉熱利用オンドル部屋、温泉卓球",
    "access": "歴史ある湯治場・名湯温泉街。",
    "tip": "飲泉は食前30分〜1時間前にゆっくり飲むのが効果的で、胃腸の調子を整え便秘や貧血を改善する効果が期待できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            100% PURE NATURAL ONSEN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【自家源泉かけ流し100%の宿】加水なし・加温なし・循環なし！本物の名湯 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            一切の妥協なし。湧き出たままの地球の恵みをダイレクトに味わう「自家源泉100%完全かけ流し」。加水・加温・循環・塩素消毒を一切行わない「純生温泉」。湯守が湯量を調整して保つ奇跡の適温と、濃厚な温泉成分を体感。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
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
              {/* テーマ見出し */}
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

              {/* 建築美・泉質・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 建築美・泉質・設備の魅力</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 代表的エリア＆アクセス</span>
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
                      <span>🏨</span> <span>{guide.title}におすすめの厳選名宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選名宿
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
