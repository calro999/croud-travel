import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【山形・酒田＆鶴岡・羽黒山・庄内】山居倉庫・出羽三山＆クラゲ水族館・庄内豚宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "北前船の歴史と修験の霊峰・山形庄内エリア完全特化！ケヤキ並木が美しい酒田「山居倉庫」、世界一のクラゲ水族館「加茂水族館」、ミシュラン三ツ星・出羽三山羽黒山国宝五重塔、湯野浜温泉・あつみ温泉、ブランド庄内豚宿を徹底解説。",
  keywords: ["yamagata-sakata-tsuruoka-shonai-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamagata-sakata-tsuruoka-shonai-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamagata-sakata-tsuruoka-shonai-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "sakata_sankyo_kura_stay",
    "title": "1. 酒田・山居倉庫〜日和山公園・相馬樓（ケヤキ並木の米蔵と北前船文化）",
    "timing": "通年（春の日和山公園桜まつり・秋の黄金色の庄内平野）",
    "desc": "明治26年建造、現在も現役の米保管倉庫として使われる「山居倉庫」。西日と潮風を防ぐ樹齢150年以上のケヤキ並木。北前船交易の繁栄を今に伝える「本間家旧本邸」や、酒田舞娘の演舞が鑑賞できる「相馬樓」。",
    "spots": "山居倉庫（酒田夢の倶楽・ケヤキ並木）、相馬樓（竹久夢二美術館・酒田舞娘演舞）、日和山公園（日本最古級木造六角灯台）、本間家旧本邸",
    "access": "JR羽越本線「酒田駅」よりバス・車で約5〜10分。庄内空港よりバス約30分。",
    "tip": "山居倉庫の裏手にあるケヤキ並木は、朝の清々しい木漏れ日や夕方のライトアップが特に美しく、絵画のような写真が撮れる絶好のスポットです。"
  },
  {
    "key": "tsuruoka_haguro_yunohama_stay",
    "title": "2. 出羽三山羽黒山〜加茂水族館・湯野浜温泉（国宝五重塔と世界一のクラゲドリーム）",
    "timing": "通年（羽黒山石段杉並木：4月〜11月、クラゲ展示：通年）",
    "desc": "ミシュラン・グリーンガイド・ジャポン三ツ星の「羽黒山杉並木（2446段の石段）」と「国宝羽黒山五重塔」。約80種以上のクラゲを展示する「鶴岡市立加茂水族館（クラゲドリーム館）」。日本海に面した名湯「湯野浜温泉」。",
    "spots": "出羽三山羽黒山（国宝五重塔・爺杉・山頂三神合祭殿）、加茂水族館（クラゲドリームシアター）、湯野浜温泉、あつみ温泉",
    "access": "JR羽越本線「鶴岡駅」より路線バス運行。",
    "tip": "加茂水族館の直径5mの円形水槽「クラゲドリームシアター」では、約1万匹のミズクラゲが幻想的に浮遊し、究極の癒やし空間が広がります。"
  },
  {
    "key": "shonai_pork_yamagata_beef_stay",
    "title": "3. ブランド「庄内豚」＆ユネスコ食文化創造都市・鶴岡（大自然が育む極上の肉質）",
    "timing": "通年（日本海寒ダラ汁まつり：1月）",
    "desc": "日本初のユネスコ食文化創造都市に認定された鶴岡市。澄んだ空気ときれいな水で育つキメ細やかな「庄内豚・平牧三元豚」。日本海の高級魚「のどぐろ」「寒ダラ」、甘みあふれる「山形牛」。地酒・初孫や大山とともに味わう至福。",
    "spots": "鶴岡・酒田の郷土料理店、アル・ケッチァーノ（奥田政行シェフの地産地消イタリアン）、酒田ラーメン店",
    "access": "庄内全域。",
    "tip": "酒田ラーメンは、自家製極薄ワンタンとトビウオ（アゴ）出汁の澄んだ醤油スープが特徴で、ラーメン消費量日本一を争う山形を代表する名物です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SAKATA & TSURUOKA SHONAI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【山形・酒田＆鶴岡・羽黒山・庄内】山居倉庫・出羽三山＆クラゲ水族館・庄内豚宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            米どころ庄内平野と日本海の豊かな恵みが交差する「酒田＆鶴岡」。北前船交易で栄えた酒田の山居倉庫と舞娘茶屋。修験道の聖地・出羽三山羽黒山の杉並木。日本海に沈む夕陽を望む海辺の温泉宿と、山形牛・庄内豚を味わう美食の旅。
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
