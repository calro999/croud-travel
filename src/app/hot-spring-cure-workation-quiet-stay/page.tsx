import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【静寂の長期滞在＆温泉ワーケーション宿】高速Wi-Fi・書斎デスク＆美肌湯 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "働きながら心身をととのえる現代のリトリートステイ完全特化！高速Wi-Fi完備、集中できる書斎デスク、24時間温泉入浴、疲労回復サウナ、キッチン付きコンドミニアム・長期連泊優待プランを徹底解説。",
  keywords: ["hot-spring-cure-workation-quiet-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hot-spring-cure-workation-quiet-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hot-spring-cure-workation-quiet-stay", e);
  }
  return {};
}

export default function WellnessRetreatHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "workation_desk_wifi_onsen",
    "title": "1. コワーキングスペース＆書斎付き客室（仕事の生産性を極限まで高める環境）",
    "timing": "通年（平日連泊・ワーケーション補助金活用）",
    "desc": "全館高速光Wi-Fi、エルゴノミクスチェア、デュアルモニター貸出、電源完備のコワーキングラウンジ。煮詰まったら24時間入れる源泉かけ流し温泉で血行を促進。ひらめきと集中が途切れない理想のワーク環境。",
    "spots": "軽井沢、箱根、越後湯沢、熱海、別府、白馬のワーケーション対応施設",
    "access": "新幹線や特急停車駅からアクセス良好な温泉地。",
    "tip": "多くの施設で「連泊割引プラン（3泊以上・ウィークリー）」が用意されており、通常料金よりも大幅にお得に滞在できます。"
  },
  {
    "key": "condo_kitchen_long_stay",
    "title": "2. キッチン付きコンドミニアム＆暮らすような滞在（地元の食材で自炊・長期ステイ）",
    "timing": "通年（1週間〜1ヶ月の長期滞在・多拠点生活）",
    "desc": "IHキッチン、大型冷蔵庫、電子レンジ、調理器具、洗濯乾燥機を完備したラグジュアリーアパートメントホテル。道の駅で買った朝獲れ野菜や地魚を自分で調理。自分のペースで気兼ねなく過ごす温泉ライフ。",
    "spots": "ニセコ、白馬、宮古島、那須、草津、伊豆高原",
    "access": "長期滞在リゾート地。",
    "tip": "洗濯乾燥機がお部屋にある宿を選ぶと、持参する着替えを最小限に抑えられ、荷物が非常にコンパクトになります。"
  },
  {
    "key": "quiet_reading_retreat_stay",
    "title": "3. ブックホテル＆ライブラリーラウンジ（本の世界に没頭する静寂のおこもりステイ）",
    "timing": "通年（読書好き・ひとりの時間を愛する大人）",
    "desc": "壁一面を埋め尽くす数千冊〜1万冊の本やアートブック。読書のために設計された照明と心地よいソファ。コーヒーやハーブティーを片手に、時間を忘れて本の世界に浸る至福。温泉と読書のマリアージュ。",
    "spots": "箱根（箱根本箱）、松本（松本本箱）、長野（小布施）、兵庫（城崎温泉 文芸館周辺）",
    "access": "文化と歴史が息づく温泉街。",
    "tip": "「箱根本箱」などでは、選書家がセレクトした客室ごとの本棚があり、普段出会えない運命の一冊に出会えるのが醍醐味です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HEALTH & WORKATION RETREAT GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【静寂の長期滞在＆温泉ワーケーション宿】高速Wi-Fi・書斎デスク＆美肌湯 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            PCを開けば最高の執筆環境、顔を上げれば広がる山の緑「温泉ワーケーション＆静寂の長期滞在」。集中した仕事の合間に名湯で頭をリフレッシュ。地元の旬菜を味わい、オンとオフを極上のバランスで調和させる新しい旅の形。
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

              {/* プログラム内容・ロケーション・ととのうコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要エリア＆専門プログラム</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆おすすめロケーション</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 リトリート効果を高めるコツ</span>
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
