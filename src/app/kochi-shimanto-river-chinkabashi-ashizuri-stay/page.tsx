import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【高知・四万十川＆沈下橋・足摺岬】日本最後の清流カヌー・天然うなぎ＆カツオ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "最後の清流と四国最南端・高知四万十＆足摺エリア完全特化！欄干のない「佐田の沈下橋・岩間沈下橋」、四万十川カヌー・屋形船遊覧、足摺岬灯台・金剛福寺、名物「天然鮎・四万十うなぎ・初鰹タタキ宿」を徹底解説。",
  keywords: ["kochi-shimanto-river-chinkabashi-ashizuri-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kochi-shimanto-river-chinkabashi-ashizuri-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kochi-shimanto-river-chinkabashi-ashizuri-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shimanto_river_chinkabashi_inn",
    "title": "1. 四万十川沈下橋めぐり〜佐田沈下橋・屋形船（日本最後の清流と原風景）",
    "timing": "通年（4月〜10月のカヌー・SUP・川遊び・新緑）",
    "desc": "本流に大規模なダムがない「日本最後の清流 四万十川（全長196km）」。最下流に位置し最も長く親しまれている「佐田の沈下橋（今成橋）」。ポスターでおなじみの「岩間沈下橋」。エンジン付きの伝統屋形船や、風を受けて進む帆掛け舟での遊覧。",
    "spots": "佐田沈下橋、三里沈下橋、岩間沈下橋、四万十の碧（屋形船遊覧）、四万十カヌーとキャンプの里 かわらっこ",
    "access": "土佐くろしお鉄道「中村駅」より車約15分。高知道「四万十町中央IC」より約60分。",
    "tip": "佐田の沈下橋はレンタサイクルで渡ることができ、欄干のない橋の上からエメラルドグリーンの川面を真下に見下ろすスリルと開放感が味わえます。"
  },
  {
    "key": "ashizurimisaki_ocean_onsen_stay",
    "title": "2. 足摺岬〜あしずり温泉郷（四国最南端の白亜の灯台と弘法大師の霊場）",
    "timing": "通年（年間を通じて温暖・冬の椿まつり・満天の星空）",
    "desc": "黒潮が直接打ち寄せる四国最南端の岬「足摺岬（あしずりみさき）」。高さ約80mの断崖絶壁に立つ白亜の「足摺岬灯台」。四国八十八ヶ所第38番札所「金剛福寺」。弘法大師ゆかりの足摺七不思議。雄大な太平洋の水平線アーチを望む温泉露天風呂。",
    "spots": "足摺岬展望台・灯台、金剛福寺、白山洞門（日本最大級の花崗岩洞門）、あしずり温泉郷、足摺海底館",
    "access": "中村駅より高知西南交通バス「足摺岬行」で約100分。",
    "tip": "足摺岬展望台からは、視界270度に広がる水平線が丸くカーブして見え、地球が丸いことを肉眼で実感できる壮大なスケールが体験できます。"
  },
  {
    "key": "shimanto_unagi_katsuo_stay",
    "title": "3. 四万十名物「天然うなぎ」＆カツオの藁焼きタタキ（大自然が育む至高の美味）",
    "timing": "通年（うなぎ漁期：4月〜11月・初夏と秋の戻り鰹）",
    "desc": "清流四万十川で獲れる希少な「四万十天然うなぎ」。身が引き締まり、天然ならではの爽やかな川魚の香りと上質な脂の旨味。四万十川の青のりや川エビの唐揚げ。土佐名物・豪快な火柱で一気に焼き上げるカツオの塩タタキ。",
    "spots": "四万十屋（うなぎ専門店）、味劇場 ちか（郷土料理居酒屋）、中村駅周辺の老舗料理旅館",
    "access": "四万十市中村エリア・四万十川沿い。",
    "tip": "「四万十屋」では四万十川のせせらぎを眺めながら、炭火で香ばしく焼き上げた天然うな重を特製の秘伝タレで贅沢に堪能できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-emerald-950 to-teal-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SHIMANTO & ASHIZURI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【高知・四万十川＆沈下橋・足摺岬】日本最後の清流カヌー・天然うなぎ＆カツオ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed">
            大自然の原風景がそのまま息づく日本最後の清流「四万十川」。増水時に川底に沈むように設計された欄干のない「沈下橋」。清流を滑るように進むカヌーや帆掛け舟。四国最南端・足摺岬の断崖絶壁と太平洋の大海原。極上の天然うなぎとカツオの藁焼きを味わう旅。
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
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-emerald-800 hover:from-teal-600 hover:to-emerald-700 rounded-xl shadow transition"
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
