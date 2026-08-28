import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【新酒の季節】日本酒酒蔵めぐり＆地酒飲み比べ温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "秋のひやおろしから冬の搾りたて新酒まで！新潟越後湯沢（ぽんしゅ館）、福島会津東山温泉、京都伏見酒蔵通り、広島西条酒蔵通りなど、名門酒蔵めぐりと地酒ペアリング会席を堪能する極上温泉宿を徹底解説。",
  keywords: ["autumn-winter-brewery-sake-tour", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-brewery-sake-tour"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-brewery-sake-tour", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "niigata_sake",
    "title": "1. 新潟・越後湯沢＆南魚沼（ぽんしゅ館で全蔵利き酒＆酒風呂温泉）",
    "timing": "通年（冬の新酒・しぼりたてシーズンが最高峰）",
    "desc": "米どころ越後。越後湯沢駅直結の「ぽんしゅ館」では新潟県内全酒蔵（約90蔵）の日本酒コインサーバーで飲み比べが可能。純米酒を注いだ天然温泉「酒風呂」や八海山・八海醸造の魚沼の里を巡る贅沢ステイ。",
    "spots": "ぽんしゅ館（越後湯沢駅構内）、魚沼の里（八海山酒蔵）、八海山ロープウェー、塩沢宿牧之通り",
    "access": "上越新幹線「越後湯沢駅」直結。東京駅から新幹線で約70分。",
    "tip": "温泉旅館の夕食で「新潟地酒3種飲み比べセット」を注文し、南魚沼産コシヒカリの新米と合わせるのが至高です。"
  },
  {
    "key": "aizu_sake",
    "title": "2. 福島・会津若松＆会津東山温泉（全国新酒鑑評会・金賞最多受賞の銘酒郷）",
    "timing": "通年（秋のひやおろし・冬の寒仕込み）",
    "desc": "全国新酒鑑評会で金賞受賞数日本一の記録を持つ福島・会津。「末廣酒造」「宮泉銘醸」など歴史ある蔵元を巡り、会津東山温泉の渓流沿い旅館で会津郷土料理（こづゆ・桜肉・にしん山椒漬け）と銘酒を堪能。",
    "spots": "末廣酒造嘉永蔵、鶴ヶ城（会津若松城）、会津東山温泉街、七日町通り（蔵造りの町並み）",
    "access": "JR磐越西線「会津若松駅」より市内周遊バス「あかべぇ」で東山温泉へ約15分。郡山駅から快速約60分。",
    "tip": "末廣酒造のカフェ「杏」で味わう仕込み水で淹れた珈琲や酒粕スイーツが散策の休憩に大人気です。"
  },
  {
    "key": "fushimi_sake",
    "title": "3. 京都・伏見酒蔵通り＆東山（名水「伏水」が育む月桂冠・黄桜の城下町）",
    "timing": "通年（秋の新米仕込み〜冬の新酒まつり）",
    "desc": "白壁土蔵と赤レンガの煙突が連なる伏見酒蔵通り。十石舟が浮かぶ宇治川派流を散策し、「伏水酒蔵小路」で伏見18蔵のきき酒セットを体験。町家を改装したブティックホテルや温泉宿で京の夜を満喫。",
    "spots": "伏見酒蔵通り（月桂冠大倉記念館・キザクラカッパカントリー）、伏水酒蔵小路、伏見稲荷大社、十石舟",
    "access": "京阪本線「伏見桃山駅」「中書島駅」、近鉄「桃山御陵前駅」下車。京都駅から約15分。",
    "tip": "「伏水酒蔵小路」の名物「粋酔（十八蔵利き酒セット）」は圧巻の迫力。おばんざいとともに少しずつ味わえます。"
  },
  {
    "key": "saijo_sake",
    "title": "4. 広島・東広島西条酒蔵通り（白壁・なまこ壁と赤瓦の煙突が並ぶ吟醸酒の街）",
    "timing": "通年（10月上旬の西条酒まつり・冬の新酒シーズン）",
    "desc": "灘・伏見と並ぶ日本三大酒処の一つ「西条」。JR西条駅周辺の徒歩圏内に7つの蔵元（賀茂鶴・白牡丹・福美人など）が集まり、仕込み水の飲み比べや酒蔵見学を楽しめます。名物「美酒鍋（びしゅなべ）」も絶品。",
    "spots": "西条酒蔵通り（煙突・なまこ壁風景）、賀茂鶴酒造見学室、宮島・厳島神社（電車で約50分）",
    "access": "JR山陽本線「西条駅」下車徒歩すぐ。山陽新幹線東広島駅より車約10分。広島空港より車約25分。",
    "tip": "日本酒で豚肉や野菜を煮込む西条名物「美酒鍋」はアルコールが飛んで旨味だけが残り、お酒が弱い方でも美味しくいただけます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SAKE & BREWERY TOUR
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【新酒の季節】日本酒酒蔵めぐり＆地酒飲み比べ温泉宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            新米で仕込んだ出来立ての新酒や、ひと夏寝かせてまろやかになった秋の「ひやおろし」。歴史ある白壁の酒蔵通りを歩き、夜は厳選された銘酒と郷土料理のマリアージュに酔いしれる大人の旅。
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
