import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【名水百選・酒の仕込み水が湧く秘湯宿】清流と伏流水・美肌温泉 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "名酒が生まれる土地には奇跡の名水と極上温泉がある！全国の日本名水百選・酒造りの仕込み水と美肌温泉宿完全特化！富山黒部・立山連峰伏流水、静岡富士山伏流水、島根奥出雲、熊本阿蘇名水、清冽な天然水風呂と美肌湯を徹底解説。",
  keywords: ["pure-spring-water-sake-brewing-source-onsen-stay", "日本酒旅行", "酒蔵巡り", "地酒ペアリング", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["pure-spring-water-sake-brewing-source-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for pure-spring-water-sake-brewing-source-onsen-stay", e);
  }
  return {};
}

export default function SakeTourismHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tateyama_kurobe_pure_water_stay",
    "title": "1. 富山・黒部＆立山連峰〜宇奈月温泉（北アルプスの雪解け天然水と銘酒銀盤）",
    "timing": "通年（春の新緑・夏の黒部峡谷・秋の紅葉）",
    "desc": "北アルプス3,000m級の山々から湧き出る清冽な雪解け水「黒部川扇状地湧水群（名水百選）」。その伏流水で醸される「銀盤」「皇国晴（幻の瀧）」。弱アルカリ性単純泉で日本有数の透明度を誇る宇奈月温泉の湯。",
    "spots": "黒部川扇状地湧水群、生地（いくじ）の湧水（清水）めぐり、皇国晴酒造、宇奈月温泉やまびこ遊歩道",
    "access": "北陸新幹線「黒部宇奈月温泉駅」より富山地方鉄道乗り換え約25分。",
    "tip": "黒部市生地地区では「清水（しょうず）」と呼ばれる自噴湧水が街の各所に湧き出ており、湧水巡り用のマイボトルを持って散策するのがおすすめです。"
  },
  {
    "key": "fuji_spring_water_sake_stay",
    "title": "2. 静岡＆山梨・富士山麓〜忍野八海・富士宮（数百年磨かれた溶岩伏流水の恵み）",
    "timing": "通年（澄んだ冬の富士山展望・秋の紅葉）",
    "desc": "富士山に降った雪や雨が溶岩層で数十年〜数百年かけて濾過された「忍野八海」と富士宮の湧水。その名水で醸される「高砂」「白隠正宗」「初亀」のキレ味。富士山を目の前に望む絶景露天風呂と伏流水の水風呂。",
    "spots": "忍野八海（国の天然記念物）、富士山本宮浅間大社 湧玉池、富士高砂酒造、富士山パノラマ温泉",
    "access": "東名高速「富士IC」または中央道「河口湖IC」より車約20分。",
    "tip": "富士山本宮浅間大社の境内にある「湧玉池」は特別天然記念物に指定されており、毎秒3.6トンもの富士山伏流水が年中一定の水温（約13℃）で湧き出ています。"
  },
  {
    "key": "shimane_okuizumo_sake_spring_stay",
    "title": "3. 島根・奥出雲＆玉造温泉〜日本酒発祥の地（斐伊川の清流と神話の美肌湯）",
    "timing": "通年（秋の新米収穫期・冬の松葉ガニ）",
    "desc": "『古事記』のスサノオノミコトが八岐大蛇を退治する際に酒を醸したと伝わる「日本酒発祥の地・島根」。「仁多米」の産地・奥出雲の酒蔵「奥出雲酒造」。1300年前から「神の湯」と称えられた玉造温泉の硫酸塩・塩化物泉。",
    "spots": "佐香神社（酒造りの神・松尾神社）、玉造温泉街（湯薬師広場・足湯）、奥出雲酒造、出雲大社",
    "access": "JR山陰本線「玉造温泉駅」より車約5分。出雲空港より車約30分。",
    "tip": "玉造温泉の源泉は温泉水自体が高級化粧水並みの成分バランスを持っており、温泉街の美肌スポットで専用ボトルに源泉を詰めて持ち帰ることができます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-stone-900 to-emerald-950 text-white p-8 md:p-14 shadow-xl border border-amber-300/30">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-400 to-yellow-300 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            SAKE BREWING SPRING WATER ONSEN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【名水百選・酒の仕込み水が湧く秘湯宿】清流と伏流水・美肌温泉 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            銘酒の命である「清冽な仕込み水」。雪解け水が幾重もの地層で磨かれた日本名水百選の湧水地には、奇跡のように豊かな温泉が湧き出します。口に含むと甘やかな伏流水で喉を潤し、名水で仕込まれた極上の地酒を嗜み、肌を包み込む柔らかな源泉に浸かる至高の癒やし旅へ。
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
