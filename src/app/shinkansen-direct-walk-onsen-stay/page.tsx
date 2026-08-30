import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【新幹線駅直結・徒歩5分温泉宿】車なし・レンタカー不要！手ぶら温泉旅 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "運転不要・新幹線駅から徒歩圏内の温泉宿完全特化！東京・名古屋・新大阪・博多から新幹線1本で直行。駅直結ホテル、徒歩5分以内の源泉かけ流し温泉旅館、駅前商店街食べ歩きと手ぶら極上旅を徹底解説。",
  keywords: ["shinkansen-direct-walk-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shinkansen-direct-walk-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shinkansen-direct-walk-onsen-stay", e);
  }
  return {};
}

export default function TransitStyleHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shinkansen_station_walk_onsen",
    "title": "1. 新幹線駅直結・徒歩3分ホテル（改札を出て雨に濡れずにチェックイン）",
    "timing": "通年（仕事帰りの金曜夜泊や気軽な週末温泉トリップ）",
    "desc": "新幹線改札から連絡通路で直結、または駅前ロータリー徒歩数分。重い荷物を預けてすぐに温泉大浴場やサウナへ直行。悪天候でも雨に濡れることなく移動でき、チェックアウト後も新幹線の発車直前まで部屋やラウンジで寛げる快適性。",
    "spots": "駅直結ペデストリアンデッキ、駅前温泉展望大浴場、エキナカ商業施設、クラブラウンジ",
    "access": "越後湯沢駅、熱海駅、軽井沢駅、京都駅、新大阪駅、富山駅、金沢駅など。",
    "tip": "駅直結ホテルなら、チェックイン前後にフロントへ荷物を預けて手ぶらで周辺観光や名物グルメ散策に出かけられます。"
  },
  {
    "key": "atami_yuzawa_shinkansen_ryokan",
    "title": "2. 新幹線停車駅の温泉街（熱海・越後湯沢・軽井沢・嬉野・武雄など）",
    "timing": "通年（東京から最速35分〜70分で温泉街に到着）",
    "desc": "東海道新幹線で東京から最速約35分の「熱海温泉」、上越新幹線で最速約70分の「越後湯沢温泉」、西九州新幹線直結の「嬉野温泉」「武雄温泉」。駅前から続く温泉街の商店街で名物プリンや温泉まんじゅうを食べ歩き。",
    "spots": "熱海平和通り商店街、越後湯沢ぽんしゅ館、軽井沢プリンスショッピングプラザ、嬉野温泉街",
    "access": "新幹線主要駅から徒歩または路線バス数分。",
    "tip": "熱海駅前や越後湯沢駅前には無料の足湯があり、新幹線の待ち時間にも気軽に名湯を楽しめます。"
  },
  {
    "key": "no_car_transit_station_stay",
    "title": "3. 車なし・レンタカー不要の旅（地酒を心置きなく味わう自由な温泉旅）",
    "timing": "通年（運転免許がない方やシニア世代・お酒好きに最適）",
    "desc": "運転の心配がないため、昼から地ビールや地酒の飲み比べを心ゆくまで堪能。観光案内所から発着する周遊観光バスやシェアサイクル、レトロな路面電車を活用して名所を効率よく巡るスマートな旅のスタイル。",
    "spots": "市内周遊レトロバス、観光案内所レンタサイクル、駅前地酒バル、老舗居酒屋",
    "access": "路面電車や路線バス網が発達した観光都市。",
    "tip": "各都市で販売されている「1日乗車券」を購入すると、路面電車や観光周遊バスが乗り放題になり非常にお得です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SHINKANSEN DIRECT & NO CAR GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【新幹線駅直結・徒歩5分温泉宿】車なし・レンタカー不要！手ぶら温泉旅 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            渋滞知らず、運転疲れゼロ！新幹線改札を出てすぐにチェックインできる「新幹線駅直結・徒歩5分の温泉宿」。ビールを飲みながら駅弁を味わう優雅な移動時間と、駅からすぐの極上名湯に癒やされるスマートな大人の休日。
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

              {/* アクセス・移動ルート・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要発着点＆ルート</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 スムーズな旅のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選プラン
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
