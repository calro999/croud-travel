import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【大正ロマンの宿】文化財建築美と木造意匠！老舗名門旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "時を超えて愛される日本の美。山形・銀山温泉、長野・渋温泉金具屋、静岡・伊東温泉、兵庫・城崎温泉など、国の登録有形文化財や宮大工の粋が息づく木造建築旅館を徹底解説。",
  keywords: ["autumn-winter-traditional-ryokan-retro", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-traditional-ryokan-retro"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-traditional-ryokan-retro", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "ginzan_cultural_ryokan",
    "title": "1. 山形・銀山温泉（ガス灯が灯る大正ロマンの木造多層建築街）",
    "timing": "通年（特に冬の雪景色と夜景が最高峰）",
    "desc": "銀山川の両岸に大正から昭和初期に建てられた3層4層の木造旅館が立ち並ぶ奇跡の温泉街。外壁の鏝絵（こてえ）や雪を照らすガス灯の温かい光。名物の尾花沢牛や鴨鍋を味わいながらタイムスリップ気分を。",
    "spots": "銀山温泉街（白銀の滝・疎水坑道）、野天風呂しろがね湯、カリーパンはいからさん通り",
    "access": "山形新幹線「大石田駅」より路線バス「銀山線」で約40分。",
    "tip": "冬の夕暮れ時、ガス灯が一斉に点灯する瞬間（16:30〜17:00頃）の温泉街散策が最もドラマチックです。"
  },
  {
    "key": "shibu_kanaguya_ryokan",
    "title": "2. 長野・信州渋温泉 金具屋（国の登録有形文化財！宮大工の粋が宿る斉月楼）",
    "timing": "通年（昭和初期の木造建築と九湯めぐり）",
    "desc": "昭和11年に完成した木造4階建ての「斉月楼」と「大広間」が国登録有形文化財。館内には8つの異なる源泉と個性的な風呂が点在し、毎夕開催される館内歴史ツアー（金具屋文化財巡り）が大人気です。",
    "spots": "金具屋（斉月楼・大広間）、渋温泉街（石畳の小路）、地獄谷野猿公苑、渋高薬師",
    "access": "長野電鉄特急で湯田中駅まで約45分、バス・タクシー約5分。",
    "tip": "金具屋宿泊者限定の「文化財見学ツアー」に参加すると、宮大工の遊び心ある建築意匠の解説を聞くことができます。"
  },
  {
    "key": "ito_tokai_ryokan",
    "title": "3. 静岡・伊東温泉（木造建築の最高峰「東海館」の意匠を受け継ぐ老舗名門宿）",
    "timing": "通年（伊東の豊富な湯量と海の幸）",
    "desc": "松川沿いに建つ伊東温泉のシンボル「東海館（木造三階建て有形文化財）」。その周辺に佇む数寄屋造りの老舗旅館では、自家源泉かけ流しの豊富な温泉と、相模湾で獲れた新鮮な金目鯛や伊勢海老会席を堪能。",
    "spots": "伊東温泉東海館、松川遊歩道（竹あかり）、音無神社、伊東オレンジビーチ",
    "access": "JR伊東線・伊豆急行線「伊東駅」下車。特急踊り子号で東京から直通約100分。",
    "tip": "松川沿いの遊歩道で行われる「伊東温泉 竹あかり」を浴衣で散策するのが夜のおすすめコースです。"
  },
  {
    "key": "kinosaki_classic_ryokan",
    "title": "4. 兵庫・城崎温泉（文豪・志賀直哉ゆかりの木造老舗宿と七田外湯めぐり）",
    "timing": "通年（冬の松葉ガニシーズンが最高潮）",
    "desc": "志賀直哉が短編小説『城の崎にて』を執筆した名門旅館「三木屋（国登録有形文化財）」をはじめ、太鼓橋と柳並木が美しい城崎温泉。下駄の音を響かせながら7つの外湯を巡り、冬は絶品の松葉ガニに舌鼓。",
    "spots": "城崎温泉外湯めぐり（一の湯・御所の湯等）、柳並木と大谿川、城崎文芸館、城崎ロープウェイ",
    "access": "JR山陰本線特急「こうのとり・きのさき」で大阪・京都から城崎温泉駅まで約2時間40分。",
    "tip": "外湯めぐり券「デジタル外湯券」を使って、庭園露天風呂が自慢の「御所の湯」や洞窟風呂の「一の湯」を制覇しましょう。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HERITAGE & TAISHO ROMAN
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【大正ロマンの宿】文化財建築美と木造意匠！老舗名門旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            飴色に磨かれた木の廊下、精緻な組子細工の障子、職人の技が光る格天井。どこか懐かしく温かい大正ロマンの風情に包まれ、何代にもわたって受け継がれてきた名湯とおもてなしに浸る特別な旅。
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
