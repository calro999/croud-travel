import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【幕末維新の歴史浪漫宿】萩・会津若松・高知・薩摩・龍馬ゆかりの宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "幕末の志士たちが駆け抜けた激動の歴史舞台完全特化！明治維新胎動の地「山口・萩城下町＆松下村塾」、会津藩の誇り「福島・会津若松城＆東山温泉」、坂本龍馬の故郷「高知・桂浜」、西郷隆盛・大久保利通の「鹿児島・城山」を徹底解説。",
  keywords: ["japan-bakumatsu-ishin-samurai-history-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-bakumatsu-ishin-samurai-history-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-bakumatsu-ishin-samurai-history-stay", e);
  }
  return {};
}

export default function HistoryHeritageHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hagi_meiji_revolution_stay",
    "title": "1. 山口・萩城下町〜松下村塾（高杉晋作・伊藤博文らを輩出した維新の源流）",
    "timing": "通年（春の萩往還梅まつり・秋の萩城跡紅葉）",
    "desc": "白壁となまこ壁が美しい世界遺産「萩城下町」。吉田松陰が教えを説いたわずか8畳の「松下村塾」。高杉晋作や木戸孝允の生家。萩焼の器で楽しむ日本海の活魚や見蘭牛。肌になめらかな萩温泉郷の露天風呂。",
    "spots": "世界遺産 松下村塾（松陰神社・至誠館）、萩城下町（菊屋家住宅・木戸孝允旧宅）、萩城跡指月公園、笠山",
    "access": "JR山陰本線「東萩駅」下車。新山口駅（新幹線）より特急バス「はぎ号」で約70分。",
    "tip": "萩城下町では、夏みかんの黄色い実が白壁の土塀から顔をのぞかせる独特の景観があり、夏みかんソフトや夏みかんピールがお土産に最適です。"
  },
  {
    "key": "aizu_samurai_higashiyama_stay",
    "title": "2. 福島・会津若松〜鶴ヶ城・東山温泉（義に生きた会津藩の誇りと白虎隊の記憶）",
    "timing": "通年（春の鶴ヶ城千本桜・秋の紅葉・冬の雪景色）",
    "desc": "幕末の戊辰戦争で一ヶ月に及ぶ籠城戦に耐えた名城「鶴ヶ城（若松城）」。日本唯一の赤瓦天守。白虎隊自刃の地「飯盛山」と不思議な二重螺旋建築「さざえ堂」。開湯1300年、土方歳三も傷を癒やした名湯「会津東山温泉」。",
    "spots": "鶴ヶ城（天守閣・茶室麟閣）、飯盛山（白虎隊士の墓・円通三匝堂さざえ堂）、会津武家屋敷、七日町通り",
    "access": "JR磐越西線「会津若松駅」よりまちなか周遊バス「あかべぇ・ハイカラさん」運行。",
    "tip": "東山温泉の渓流沿い旅館では、川のせせらぎを聞きながら入る露天風呂と、会津の郷土料理「こづゆ」や名物「馬刺し」が絶品です。"
  },
  {
    "key": "kochi_ryoma_katsurahama_stay",
    "title": "3. 高知・桂浜〜高知城（太平洋を望む坂本龍馬像と南海の名城）",
    "timing": "通年（初夏〜秋のカツオシーズン・よさこい祭り）",
    "desc": "雄大な太平洋を望む月の名所「桂浜」。海を見つめる巨大な「坂本龍馬像」。山内一豊が築き天守と本丸御殿が両方現存する唯一の城「高知城」。巨大な大皿に旬の海の幸・山の幸を豪快に盛る伝統宴会料理「皿鉢（さわち）料理」。",
    "spots": "桂浜（坂本龍馬像・坂本龍馬記念館・桂浜水族館）、高知城（追手門・天守閣）、ひろめ市場、日曜市",
    "access": "JR土讃線「高知駅」下車。高知龍馬空港より連絡バス約30分。",
    "tip": "「ひろめ市場」では、名物「明神丸」の藁焼きカツオのタタキを塩とニンニクスライスで注文し、地元客と相席で土佐鶴を酌み交わすのが最高の醍醐味です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            BAKUMATSU & SAMURAI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【幕末維新の歴史浪漫宿】萩・会津若松・高知・薩摩・龍馬ゆかりの宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日本の夜明けを夢見た若き志士たちの足跡をたどる「幕末維新の歴史旅」。吉田松陰の松下村塾、白虎隊の悲話が伝わる飯盛山、龍馬が愛した名湯や会津の武家屋敷。激動の時代に思いを馳せながら、地元の名酒と郷土料理を味わう宿へ。
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

              {/* 歴史見どころ・アクセス・旅のコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要史跡＆名所</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 歴史探訪を深めるコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの歴史・名門宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    歴史探訪プラン
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
