import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【日本酒飲み放題＆利き酒Bar完備温泉宿】インクルーシブ・銘酒ラウンジ 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "追加料金なしで全国の銘酒を心ゆくまで！日本酒インクルーシブ＆利き酒バー完備温泉宿完全特化！新潟越後湯沢、山形天童、群馬草津、石川加賀温泉、厳選10〜30種の地酒サーバー、湯上がりラウンジ酒、おつまみペアリングを徹底解説。",
  keywords: ["all-inclusive-sake-free-flow-tasting-bar-stay", "日本酒旅行", "酒蔵巡り", "地酒ペアリング", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["all-inclusive-sake-free-flow-tasting-bar-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for all-inclusive-sake-free-flow-tasting-bar-stay", e);
  }
  return {};
}

export default function SakeTourismHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "echigo_yuzawa_sake_server_stay",
    "title": "1. 新潟・越後湯沢〜ぽんしゅ館・地酒サーバー宿（米どころ新潟の純米酒天国）",
    "timing": "通年（冬の雪見露天酒・初秋の新米新酒）",
    "desc": "上越新幹線で東京から約70分の温泉地「越後湯沢」。駅構内の「ぽんしゅ館」には県内約90蔵・100種類以上の利き酒マシンがズラリ。宿泊施設でもラウンジに日本酒サーバーが設置され、「八海山」「久保田」「鶴齢」などが無料で心ゆくまで楽しめる宿が充実。",
    "spots": "越後湯沢駅 ぽんしゅ館（唎酒番所・酒風呂「湯の沢」）、湯沢温泉街、白瀧酒造（上善如水）、魚沼の里",
    "access": "上越新幹線「越後湯沢駅」下車すぐ。関越道「湯沢IC」より約5分。",
    "tip": "ぽんしゅ館では500円でコイン5枚とお猪口をもらい、壁一面のサーバーから好きな銘柄を試飲でき、全国各地の塩や味噌もおつまみとして選べます。"
  },
  {
    "key": "yamagata_tendo_sake_tasting_bar",
    "title": "2. 山形・天童温泉〜出羽桜・十四代利き酒ラウンジ（吟醸王国山形の銘酒バー）",
    "timing": "通年（春の桜・秋の芋煮会・冬の将棋まつり）",
    "desc": "将棋駒の生産日本一と名湯で知られる「天童温泉」。吟醸酒のパイオニア「出羽桜酒造」のお膝元。天童温泉のハイクラス宿では、山形県産地酒30種以上が揃うバーラウンジや、夕食時の日本酒フリーフロープランが大好評。",
    "spots": "出羽桜酒造 出羽桜美術館、天童温泉街（足湯・手湯）、山寺（宝珠山立石寺）、道の駅天童温泉",
    "access": "山形新幹線「天童駅」よりタクシー約5分。山形空港より車約10分。",
    "tip": "出羽桜美術館では、李朝の陶磁器や近代工芸品とともに、登録有形文化財の蔵造りの建物と美しい日本庭園を鑑賞できます。"
  },
  {
    "key": "kaga_onsen_sake_lounge_stay",
    "title": "3. 石川・加賀温泉郷（山代・山中）〜北陸銘酒フリーフロー（九谷焼のお猪口で乾杯）",
    "timing": "通年（冬のズワイガニ・秋ののどぐろ会席）",
    "desc": "開湯1300年の名湯「山代温泉」「山中温泉」。加賀百万石の文化が育んだ銘酒「菊姫」「手取川」「天狗舞」「常きげん」。色鮮やかな九谷焼や山中塗のお猪口を選んで楽しむ利き酒ラウンジ。名物・治部煮や海の幸会席との極上マリアージュ。",
    "spots": "山代温泉 古総湯、山中温泉 鶴仙渓遊歩道、鹿野酒造（常きげん）、九谷焼窯跡展示館",
    "access": "北陸新幹線「加賀温泉駅」より周遊バス「キャン・バス」で約10〜15分。",
    "tip": "山代温泉のシンボル「古総湯」は明治時代の総湯を忠実に復元した木造建築で、ステンドグラスと九谷焼のタイルに囲まれた風情ある空間で源泉かけ流しを味わえます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-stone-900 to-emerald-950 text-white p-8 md:p-14 shadow-xl border border-amber-300/30">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-400 to-yellow-300 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            SAKE FREE FLOW & TASTING BAR GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【日本酒飲み放題＆利き酒Bar完備温泉宿】インクルーシブ・銘酒ラウンジ 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            湯上がりの火照った身体に、冷えた大吟醸をクイッと一杯。館内ラウンジにズラリと並ぶ銘酒サーバーや利き酒Bar。「日本酒飲み放題＆オールインクルーシブ温泉宿」。財布を気にせず、各地の純米大吟醸や季節のひやおろしを心ゆくまで飲み比べ。贅沢な大人の湯浴みへ。
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
