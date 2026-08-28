import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【石川・加賀温泉郷】山中温泉・山代温泉＆鶴仙渓川床・加能ガニ極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "石川・加賀温泉郷（山中温泉・山代温泉・片山津温泉・粟津温泉）エリア完全特化！鶴仙渓のあやとりはしと川床、魯山人寓居跡いろは草庵、九谷焼・山中漆器体験、冬の加能ガニ・香箱ガニ会席と老舗名門旅館を徹底解説。",
  keywords: ["ishikawa-kaga-onsen-valley-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["ishikawa-kaga-onsen-valley-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ishikawa-kaga-onsen-valley-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kaga_yamanaka_kakusenkei",
    "title": "1. 山中温泉・鶴仙渓（あやとりはし・こおろぎ橋と清流の川床カフェ）",
    "timing": "通年（4月〜11月の鶴仙渓川床・秋の全山紅葉・冬の雪景色）",
    "desc": "北陸随一の渓谷美を誇る「鶴仙渓（かくせんけい）」。ユニークなS字型の紅色「あやとりはし」や総檜造りの「こおろぎ橋」。清流沿いの「鶴仙渓川床」で道場六三郎レシピのスイーツや加賀棒茶を味わう至福の散策。",
    "spots": "鶴仙渓（川床・あやとりはし・こおろぎ橋・黒谷橋）、山中温泉総湯「菊の湯」、ゆげ街道（山中漆器・食べ歩きコロッケ）",
    "access": "北陸新幹線「加賀温泉駅」より路線バス・加賀周遊キャンバスで約25分「山中温泉」下車。各宿送迎あり。",
    "tip": "「ゆげ街道」の肉のいづみやの「手作りコロッケ」を片手に、山中漆器や九谷焼のギャラリーを巡るのが定番です。"
  },
  {
    "key": "kaga_yamashiro_luxury",
    "title": "2. 山代温泉・湯の曲輪（紅殻格子の街並みと魯山人ゆかりの文化財ステイ）",
    "timing": "通年（歴史と文化に触れる大人旅）",
    "desc": "温泉街の中心に共同浴場「古総湯」を配した伝統の街並み「湯の曲輪（ゆのがわ）」。明治時代の総湯を復元したステンドグラス輝く古総湯での入浴体験。北大路魯山人が逗留した「いろは草庵」で芸術に触れる。",
    "spots": "山代温泉古総湯・総湯、魯山人寓居跡いろは草庵、九谷焼窯跡展示館、服部神社",
    "access": "加賀温泉駅より車・バスで約10〜15分。",
    "tip": "山代温泉古総湯はシャンプーや石鹸を使わず、源泉かけ流しの湯船と九谷焼タイルの壁画を純粋に楽しむ体験型温泉です。"
  },
  {
    "key": "kaga_kanogani_gourmet",
    "title": "3. 加賀美食ステイ（冬の加能ガニ・香箱ガニと九谷焼・山中漆器の器）",
    "timing": "冬期（11月6日解禁の加能ガニ・香箱ガニシーズン）",
    "desc": "石川県が誇るブランドズワイガニ「加能ガニ」と、内子・外子が濃厚な雌ガニ「香箱ガニ」。高級魚のどぐろの塩焼きや、華やかな九谷焼・山中漆器の器に盛り付けられた加賀懐石を個室で堪能。",
    "spots": "片山津温泉（柴山潟・浮御堂・中谷宇吉郎雪の科学館）、月うさぎの里、ゆのくにの森（伝統工芸村）",
    "access": "加賀温泉駅より各エリアへアクセス。",
    "tip": "「ゆのくにの森」では築数百年の古民家で九谷焼の絵付けや金箔貼り、山中漆器の蒔絵体験が楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KAGA YAMANAKA YAMASHIRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【石川・加賀温泉郷】山中温泉・山代温泉＆鶴仙渓川床・加能ガニ極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            芭蕉が愛した山中温泉と、魯山人が逗留した山代温泉。鶴仙渓のせせらぎを聞きながらいただく川床スイーツと、紅殻格子の温泉街。名門旅館の庭園露天風呂で温まり、北陸の冬の味覚・加能ガニに酔いしれる旅。
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
