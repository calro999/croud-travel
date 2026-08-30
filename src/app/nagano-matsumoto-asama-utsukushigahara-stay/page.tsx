import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【長野・松本＆浅間温泉・美ヶ原】国宝松本城・クラフトの街＆信州そば・雲海宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "城下町文化と高原パノラマ・長野松本＆浅間温泉・美ヶ原エリア完全特化！国宝五重天守「松本城」、中町通りのなまこ壁、美ヶ原高原の雲海、飛鳥時代開湯の「浅間温泉」、手打ち信州そばと信州サーモン宿を徹底解説。",
  keywords: ["nagano-matsumoto-asama-utsukushigahara-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagano-matsumoto-asama-utsukushigahara-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagano-matsumoto-asama-utsukushigahara-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "matsumoto_asama_onsen_walk",
    "title": "1. 松本城〜中町通り・縄手通り（国宝の黒漆天守となまこ壁クラフト散歩）",
    "timing": "通年（春の松本城桜まつり・秋の松本城太鼓まつり・冬の氷彫フェスティバル）",
    "desc": "現存最古の五重六階天守を誇る国宝「松本城」。北アルプスを背景に水堀に映る漆黒の城影。白と黒の幾何学模様が美しいなまこ壁の蔵が並ぶ「中町通り」や、カエルの街「縄手通り」で雑貨やスイーツ巡り。",
    "spots": "国宝松本城、中町通り（蔵シック館・民藝ショップ）、縄手通り（四柱神社・たい焼き）、松本市美術館（草間彌生コレクション）",
    "access": "JR篠ノ井線「松本駅」下車。浅間温泉まで路線バスで約20分。",
    "tip": "「松本市美術館」では、松本出身の前衛芸術家・草間彌生氏の巨大な野外彫刻や水玉アートが迎えてくれます。"
  },
  {
    "key": "utsukushigahara_plateau_hotel",
    "title": "2. 美ヶ原高原〜王ヶ頭・美しの塔（標高2000mの天空パノラマと大雲海）",
    "timing": "グリーンシーズン：4月下旬〜11月上旬（高山植物と放牧牛・冬の雪上車ツアー）",
    "desc": "八ヶ岳中信高原国定公園の最高峰「美ヶ原高原（標高2,034m）」。北アルプス・中央アルプス・南アルプス・富士山を360度見渡す天空の楽園。朝日に照らされる雲海と、夜の満天の天の川。シンボル「美しの塔」。",
    "spots": "美ヶ原高原（王ヶ頭・王ヶ鼻）、美しの塔、美ヶ原高原美術館（野外彫刻美術館）、山本小屋ふるさと館",
    "access": "松本駅より美ヶ原高原直行バス運行（季節運行）、車で約60分。",
    "tip": "「王ヶ鼻」の先端からは、目の前に槍ヶ岳や穂高連峰など北アルプスの全貌が迫る圧巻のパノラマが広がります。"
  },
  {
    "key": "matsumoto_soba_craft_stay",
    "title": "3. 手打ち「信州そば」＆信州サーモン（アルプスの名水が育む食の芸術）",
    "timing": "秋〜冬期（11月〜の新そばシーズンは特に香り高い）",
    "desc": "北アルプスの清らかな伏流水と信州産そば粉で打つ、喉越し抜群の二八そばや十割そば。長野県水産試験場が開発した上品な脂ととろける食感の「信州サーモン」、信州牛の石焼きステーキと地酒「大信州」「夜明け前」。",
    "spots": "松本そば祭り（秋開催）、浅間温泉手打ちそば処、松本酒蔵巡り",
    "access": "松本市街・浅間温泉。",
    "tip": "松本ご当地グルメ「山賊焼き（鶏もも肉をニンニク醤油タレに漬け込んで揚げた大判唐揚げ）」も大人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            MATSUMOTO & UTSUKUSHIGAHARA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【長野・松本＆浅間温泉・美ヶ原】国宝松本城・クラフトの街＆信州そば・雲海宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            漆黒の天守がアルプスに映える国宝「松本城」と、民藝とクラフトの息づく城下町「松本」。飛鳥時代からの歴史を誇る文人墨客の奥座敷「浅間温泉」。標高2,000mの美ヶ原高原から見下ろす雲海と、香り高い信州手打ちそばへ。
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
