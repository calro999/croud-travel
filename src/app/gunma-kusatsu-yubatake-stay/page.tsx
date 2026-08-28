import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【群馬・草津温泉】湯畑・西の河原＆湯もみ体験極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本一の名湯・草津温泉エリア完全特化！湯畑のライトアップ、西の河原大露天風呂、熱乃湯の湯もみショー、温泉街の食べ歩きと源泉かけ流し旅館を徹底解説。",
  keywords: ["gunma-kusatsu-yubatake-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["gunma-kusatsu-yubatake-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for gunma-kusatsu-yubatake-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kusatsu_yubatake_view",
    "title": "1. 湯畑周辺・温泉街中心部（エメラルドグリーンの湯滝と夜のライトアップ）",
    "timing": "通年（冬の湯けむりとイルミネーションが圧巻）",
    "desc": "草津温泉のシンボル「湯畑」。木樋を流れる源泉と滝のように流れ落ちる湯滝。夜には幻想的にライトアップされ、浴衣姿で温泉まんじゅうや焼き鳥を片手にそぞろ歩き。",
    "spots": "湯畑、熱乃湯（湯もみと踊りショー）、湯畑前足湯（湯けむり亭）、御座之湯、光泉寺（遅咲由札観音）",
    "access": "JR吾妻線「長野原草津口駅」よりJRバスで約25分「草津温泉バスターミナル」下車徒歩約5分。",
    "tip": "光泉寺の階段上から見下ろす湯畑の全景は、草津で最も有名な記念撮影スポットです。"
  },
  {
    "key": "kusatsu_sainokawara",
    "title": "2. 西の河原公園〜大露天風呂（至る所から湯が湧く奇観と日本屈指のメガ露天）",
    "timing": "通年（秋の紅葉・冬の雪見露天風呂）",
    "desc": "湯川の河原からあちこち温泉が湧き出し、湯けむりが立ち込める「西の河原公園」。最奥には総面積500平方メートルの圧倒的開放感を誇る「西の河原露天風呂」が広がります。",
    "spots": "西の河原公園、西の河原露天風呂、鬼の茶屋、穴守稲荷神社",
    "access": "湯畑より西の河原通り（お土産・甘味ストリート）を抜けて徒歩約10分。",
    "tip": "金曜日の夜限定で「西の河原露天風呂」が混浴イベント（湯あみ着着用）を開催しておりカップルに人気です。"
  },
  {
    "key": "kusatsu_luxury_hideaway",
    "title": "3. 草津高台・白根山麓（万代鉱源泉や白旗源泉を引く全室離れ・大人宿）",
    "timing": "通年（新緑・夏の避暑・冬のスキーリゾート）",
    "desc": "中心街の賑わいから一歩離れた閑静な高台。つつじ亭や望雲など名門宿が点在し、異なる複数の自家源泉を引く贅沢な湯巡りと、上州牛・群馬の旬食材を使った本格会席を堪能。",
    "spots": "草津温泉スキー場（天狗山プレイゾーン）、草津白根山（湯釜）、ベルツ記念館",
    "access": "草津温泉バスターミナルより各旅館の無料送迎車で約3〜5分。",
    "tip": "草津温泉スキー場の「バンジップテング（日本一急勾配のジップライン）」で空中散歩を楽しむのも爽快です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KUSATSU YUBATAKE MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【群馬・草津温泉】湯畑・西の河原＆湯もみ体験極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            毎分3万2300リットル以上の自然湧出量を誇る日本屈指の温泉地「草津」。もうもうと立ち込める湯けむりとエメラルドグリーンの湯畑。強酸性の名湯で心身を清める極上の温泉旅へ。
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
