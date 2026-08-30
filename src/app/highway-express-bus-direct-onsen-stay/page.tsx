import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【高速バス直行・バスターミナル直結温泉宿】乗り換えなし・座席指定で楽々アクセス 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "東京・新宿・渋谷・名古屋・大阪から直行！高速バスで行ける温泉宿完全特化！バスタ新宿や主要ターミナルから乗り換えなし。草津温泉・伊香保温泉・白馬・河口湖・南紀白浜などバスターミナル至近の名門旅館を徹底解説。",
  keywords: ["highway-express-bus-direct-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["highway-express-bus-direct-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for highway-express-bus-direct-onsen-stay", e);
  }
  return {};
}

export default function TransitStyleHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "express_bus_kusatsu_ikaho",
    "title": "1. 草津温泉・伊香保温泉（バスタ新宿・東京駅から乗り換えなし直行）",
    "timing": "通年（冬の雪道運転の心配がなく安全・快適）",
    "desc": "バスタ新宿や東京駅八重洲口から毎日多数運行される高速バス「ゆめぐり号」「上州ゆめぐり号」。草津温泉バスターミナルや伊香保温泉バスターミナルに直着。湯畑や石段街まで徒歩数分の老舗旅館にスムーズにチェックイン。",
    "spots": "草津温泉バスターミナル（湯畑まで徒歩5分）、伊香保温泉石段街口、温泉まんじゅう通り",
    "access": "バスタ新宿より高速バスで草津温泉まで直通約3時間45分、伊香保温泉まで約2時間30分。",
    "tip": "冬の草津・伊香保は積雪や凍結がありますが、プロドライバーが運転する高速バスならスタッドレスやチェーンの心配なく安心です。"
  },
  {
    "key": "express_bus_kawaguchiko_fuji",
    "title": "2. 富士五湖・河口湖（新宿・渋谷・東京駅から約100分の高速アクセス）",
    "timing": "通年（外国人観光客にも大人気の富士山絶景ルート）",
    "desc": "首都圏主要ターミナルから約10分〜15分間隔で頻発する河口湖行き高速バス。河口湖駅バスターミナル到着後、各ホテルの無料送迎バスや路線バスで湖畔の温泉リゾートへ。富士山と湖を一望する絶景客室ステイ。",
    "spots": "河口湖駅前、富士急ハイランドバスターミナル、河口湖遊覧船乗り場",
    "access": "バスタ新宿・東京駅より高速バスで約1時間45分。",
    "tip": "高速バスの座席は進行方向「右側（新宿発）」または「左側（富士山発）」を座席指定すると、道中も富士山が見えやすくなります。"
  },
  {
    "key": "express_bus_hakuba_kamikochi",
    "title": "3. 白馬・飛騨高山・白川郷（長距離夜行・昼行バスで行く大自然リゾート）",
    "timing": "通年（冬のスキー・夏の北アルプス登山・秋の高山祭）",
    "desc": "都内や大阪から直行する信州・飛騨方面の高速バス。白馬八方バスターミナルや高山濃飛バスターミナルに到着。重いスキー板やスノーボード、登山リュックをトランクに預けて、終着地まで眠りながら移動できる利便性。",
    "spots": "白馬八方バスターミナル、高山濃飛バスセンター（古い町並み徒歩10分）、平湯バスターミナル（奥飛騨温泉郷）",
    "access": "新宿・名古屋・大阪より高速バス直行。",
    "tip": "夜行便（夜発・翌朝早朝着）を利用すると、朝一番から丸一日ゲレンデや登山、温泉街観光を満喫できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            EXPRESS BUS & DIRECT RESORT GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【高速バス直行・バスターミナル直結温泉宿】乗り換えなし・座席指定で楽々アクセス 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            大きな荷物を持った乗り換えのストレスなし！バスタ新宿や東京駅、梅田から高速バス1本で温泉街の中心へダイレクトアクセス「高速バス直行の温泉宿」。リーズナブルで確実着席、車窓の景色を眺めながらゆったり名湯へ。
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
