import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【三重・熊野＆尾鷲・鬼ヶ城】世界遺産鬼ヶ城・獅子岩＆熊野古道伊勢路・尾鷲ガスエビ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "荒波が削った奇岩巨岩と世界遺産の祈りの道・三重熊野＆尾鷲エリア完全特化！世界遺産「鬼ヶ城・獅子岩」、熊野古道「松本峠・馬越峠」、七里御浜海岸、尾鷲港水揚げの幻の「ガスエビ」、名物「めはり寿司・熊野牛宿」を徹底解説。",
  keywords: ["mie-kumano-owase-onigajo-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["mie-kumano-owase-onigajo-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for mie-kumano-owase-onigajo-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kumano_onigajo_shishi_stay",
    "title": "1. 鬼ヶ城〜獅子岩・七里御浜（世界遺産！波食崖の巨岩トンネルと22kmの海岸線）",
    "timing": "通年（8月17日の熊野大花火大会は日本屈指の迫力）",
    "desc": "国の名勝・世界遺産「鬼ヶ城（おにがじょう）」。約1.2kmにわたって続く海食洞窟と蜂の巣状の奇岩歩道。太平洋に向かって吠える高さ25mの「獅子岩」。玉砂利が敷き詰められた日本一長い砂礫海岸「七里御浜（日本の渚百選）」。",
    "spots": "世界遺産 鬼ヶ城（鬼ヶ城センター・千畳敷・奥の木戸）、世界遺産 獅子岩、七里御浜海岸、花の窟神社（日本最古の神社）",
    "access": "JR紀勢本線「熊野市駅」より路線バス約5分。熊野尾鷲道路「熊野大泊IC」すぐ。",
    "tip": "鬼ヶ城の遊歩道は海の上にせり出すように作られており、足元に打ち寄せる黒潮の白波と頭上に迫る巨岩のオーバーハングが大迫力です。"
  },
  {
    "key": "owase_port_seafood_stay",
    "title": "2. 尾鷲港〜馬越峠（日本屈指の多雨地帯が育む深い森と深海魚の宝庫）",
    "timing": "通年（冬〜春は深海魚まつり・底引き網漁期）",
    "desc": "黒潮の恵みを受ける良港「尾鷲（おわせ）港」。水揚げ直後しか食べられない甘み抜群の幻の深海エビ「ガスエビ（ヒゲナガエビ）」やトロバコ魚。熊野古道伊勢路の中で最も美しい石畳とヒノキ林が続く「馬越峠（まごせとうげ）」。",
    "spots": "尾鷲魚市場おとと、馬越峠（夜泣き地蔵・天狗倉山）、夢古道おわせ（海洋深層水風呂）、三木里海岸",
    "access": "JR紀勢本線「尾鷲駅」下車。",
    "tip": "「夢古道おわせ」では、尾鷲沖の清浄な海洋深層水を汲み上げた露天風呂があり、湯上がり肌がしっとりすべすべになります。"
  },
  {
    "key": "kumano_kodo_isaji_gourmet_stay",
    "title": "3. 郷土の味「めはり寿司」＆熊野地鶏（高菜漬けで包む山林労働者の伝統弁当）",
    "timing": "通年（熊野牛ステーキとの贅沢な組み合わせ）",
    "desc": "炊きたてご飯を特製タレに漬けた高菜の葉で丸ごと包み込む郷土料理「めはり寿司（目をみはるほど美味しいのが語源）」。「熊野地鶏」の香ばしい炭火焼き、赤身の旨味が濃厚な「熊野牛」。地酒・太平洋とともに味わう至福。",
    "spots": "めはり寿司発祥店、熊野地鶏専門店、松本峠（鉄砲傷の残る地蔵）",
    "access": "熊野市・尾鷲市エリア。",
    "tip": "めはり寿司は一口かじると高菜のシャキシャキ感と出汁の染みたご飯の旨味が広がり、熊野古道トレッキングの行動食に最高です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KUMANO & OWASE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【三重・熊野＆尾鷲・鬼ヶ城】世界遺産鬼ヶ城・獅子岩＆熊野古道伊勢路・尾鷲ガスエビ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            熊野灘の荒波と風雨が刻んだ大自然の彫刻「世界遺産・鬼ヶ城」と、天に向かって咆哮する「獅子岩」。石畳の苔が美しい熊野古道伊勢路。日本一長い砂礫海岸「七里御浜」。幻の深海エビ「ガスエビ」と熊野地鶏・めはり寿司を味わう旅。
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
