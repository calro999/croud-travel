import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【絶景ヨガ＆マインドフルネス宿】朝霧テラス・森林セラピー＆オーガニック美肌スパ 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "呼吸をととのえ五感をひらくヨガ＆マインドフルネスリゾート完全特化！雲海を望む朝ヨガテラス、森林セラピー基地のガイドツアー、星空ナイトヨガ、美肌クレイセラピー、ヴィーガン＆マクロビオティック対応宿を徹底解説。",
  keywords: ["scenic-yoga-mindfulness-forest-therapy-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["scenic-yoga-mindfulness-forest-therapy-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for scenic-yoga-mindfulness-forest-therapy-stay", e);
  }
  return {};
}

export default function WellnessRetreatHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "morning_yoga_terrace_stay",
    "title": "1. 絶景サンライズヨガ（雲海や海を望むオープンテラスで朝の目覚め）",
    "timing": "通年（朝6時〜7時の清らかな時間帯）",
    "desc": "標高1,000mの高原テラスや、波音が響くビーチサイドデッキで開催されるモーニングヨガ。昇る朝日のエネルギーを浴びながら、身体をゆっくりほぐし、呼吸を深める。インストラクターが初心者にも丁寧に指導。",
    "spots": "長野（八ヶ岳・蓼科）、山梨（清里）、沖縄（恩納村・宮古島）、湘南・逗子",
    "access": "リゾートホテル内テラス・ビーチ。",
    "tip": "朝ヨガの前に白湯やハーブティーを1杯飲むと、内臓が温まりデトックス効果と柔軟性がさらに高まります。"
  },
  {
    "key": "forest_therapy_healer_stay",
    "title": "2. 認定「森林セラピー」ガイドウォーク（フィトンチッドに包まれる科学的癒やし）",
    "timing": "グリーンシーズン：5月〜10月（新緑・初夏の森）",
    "desc": "医学的なエビデンスに基づき心身の健康増進効果が認められた「森林セラピー基地」。専門の森林セラピストとともに歩く森の散策路。樹木から放出されるフィトンチッドを浴び、ストレスホルモン（コルチゾール）を低減。",
    "spots": "長野（信濃町・赤沢自然休養林）、屋久島、奥入瀬渓流、高野山",
    "access": "全国の森林セラピー基地指定エリア。",
    "tip": "森の中で靴を脱いで裸足で大地を踏みしめる「アーシング」を体験すると、体に溜まった静電気が抜け驚くほどリフレッシュできます。"
  },
  {
    "key": "organic_vegan_beauty_spa_stay",
    "title": "3. オーガニック美肌スパ＆クリーンイーティング（身体の内外から美を整える）",
    "timing": "通年（ブライダル前や自分への最高のご褒美）",
    "desc": "100%天然由来のエッセンシャルオイルを用いた極上トリートメントスパ。温泉ミネラルと植物幹細胞エキスを融合したフェイシャル。地場産有機無農薬野菜やスーパーフードを使った彩り豊かなクリーンイーティング料理。",
    "spots": "軽井沢、京都嵐山、伊豆修善寺、箱根強羅などの名門ウェルネスリゾート",
    "access": "主要リゾート地。",
    "tip": "スパトリートメントは、温泉入浴後30分〜1時間後（身体が芯から温まり血行が促進された状態）に受けると施術効果が倍増します。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SCENIC YOGA & FOREST THERAPY GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【絶景ヨガ＆マインドフルネス宿】朝霧テラス・森林セラピー＆オーガニック美肌スパ 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            澄み渡る朝の空気の中で、深く息を吸い込む心地よさ「絶景ヨガ＆マインドフルネス宿」。朝露輝く森のテラスでのサンライズヨガ、満天の星の下でのメディテーション。認定セラピストによる森林浴と、体に染み渡るオーガニック朝食へ。
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

              {/* プログラム内容・ロケーション・ととのうコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要エリア＆専門プログラム</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆おすすめロケーション</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 リトリート効果を高めるコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選プラン
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
