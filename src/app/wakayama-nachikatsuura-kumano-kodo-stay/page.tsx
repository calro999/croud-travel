import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【和歌山・那智勝浦＆熊野古道】熊野那智大社・那智の滝＆生マグロ・洞窟風呂宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界遺産・熊野古道と日本一の生マグロ・和歌山那智勝浦エリア完全特化！落差日本一「那智の滝」、熊野那智大社・青岸渡寺、大門坂の石畳、勝浦港水揚げ生マグロ食べ尽くし、海に浮かぶ絶景洞窟風呂温泉宿を徹底解説。",
  keywords: ["wakayama-nachikatsuura-kumano-kodo-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["wakayama-nachikatsuura-kumano-kodo-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for wakayama-nachikatsuura-kumano-kodo-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "katsuura_cave_onsen_luxury",
    "title": "1. 南紀勝浦温泉〜忘帰洞・紀の松島（太平洋の荒波が迫る巨大海食洞窟風呂）",
    "timing": "通年（専用船で渡る海に浮かぶ温泉リゾートと水平線パノラマ）",
    "desc": "勝浦港から専用客船で渡る「ホテル浦島」の名物大洞窟温泉「忘帰洞（帰るのを忘れるほどの絶景湯）」や「碧き島の宿 熊野別邸 中の島」の海中露天風呂。波しぶきが届くほどの臨場感と、紺碧の太平洋・朝日の絶景。",
    "spots": "忘帰洞・玄武洞（巨大洞窟露天）、紀の松島めぐり遊覧船、勝浦足湯巡り",
    "access": "JR紀勢本線（きのくに線）「紀伊勝浦駅」下車。勝浦港観光桟橋より専用船数分。",
    "tip": "「忘帰洞」は早朝の日の出時間帯に入浴すると、洞窟の向こう側の水平線から真っ赤な太陽が昇る息を呑む光景に出会えます。"
  },
  {
    "key": "kumano_kodo_daimonzaka_stay",
    "title": "2. 熊野那智大社〜那智の滝・大門坂（世界遺産・熊野古道のハイライト）",
    "timing": "通年（苔むす石畳と平安衣装の記念撮影体験）",
    "desc": "樹齢数百年の夫婦杉がそびえる「大門坂」の石畳古道。熊野三山の一つ「熊野那智大社」と西国第一番札所「青岸渡寺（三重塔）」。三重塔越しに望む落差133m・銚子口の幅10mの神聖な御神体「那智の滝（飛瀧神社）」。",
    "spots": "大門坂（大門坂茶屋・平安衣装レンタル）、熊野那智大社、那智山青岸渡寺、那智の滝（飛瀧神社）",
    "access": "紀伊勝浦駅より熊野御坊南海バス「那智山行き」で約25分。",
    "tip": "大門坂茶屋で「平安衣装」をレンタルして大門坂や那智山を歩くと、まるで千年前の巡礼者にタイムスリップしたような写真が撮れます。"
  },
  {
    "key": "katsuura_fresh_tuna_gourmet",
    "title": "3. 勝浦名物「生まぐろ」＆幻の高級魚クエ（一度も冷凍されない極上のモッチリ食感）",
    "timing": "通年（一度も凍結しない生マグロの水揚げ日本一の港）",
    "desc": "はえ縄漁船が水揚げする「勝浦の生まぐろ」。一度も冷凍されていないため、ドリップが出ず、モチッとした吸い付くような食感と濃厚な旨味。大トロ、中トロ、赤身の食べ比べや、冬の南紀名物「天然クエ鍋」、霜降り「熊野牛」。",
    "spots": "勝浦地方卸売市場（マグロ競り見学・にぎわい市場）、勝浦まぐろ専門店",
    "access": "勝浦港・温泉街周辺。",
    "tip": "勝浦漁港の「にぎわい市場」では、朝獲れ生マグロの解体ショーや、出来立てのマグロ握り寿司・海鮮丼をその場で味わえます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KACHIKATSUURA & KUMANO KODO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【和歌山・那智勝浦＆熊野古道】熊野那智大社・那智の滝＆生マグロ・洞窟風呂宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            神々が宿る世界遺産「熊野古道」の聖地「熊野那智大社」と、落差133m日本一の名瀑「那智の滝」。延々と続く大門坂の苔むす杉木立の石畳。勝浦漁港直送の新鮮な「生マグロ」と、太平洋の荒波が打ち寄せる大洞窟温泉へ。
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
