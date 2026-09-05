import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【鹿児島・屋久島＆白谷雲水峡・縄文杉】世界自然遺産・苔むす森トレッキング＆首折れ鯖宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "洋上のアルプス・世界自然遺産屋久島エリア完全特化！太古の巨木「縄文杉トレッキング」、映画の舞台「白谷雲水峡（苔むす森）」、大川の滝、名物「首折れ鯖・トビウオ料理・屋久島温泉リゾート」を徹底解説。",
  keywords: ["kagoshima-yakushima-shiratani-jomon-sugi-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kagoshima-yakushima-shiratani-jomon-sugi-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kagoshima-yakushima-shiratani-jomon-sugi-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "yakushima_luxury_resort_stay",
    "title": "1. 世界自然遺産・屋久島ネイチャーステイ〜尾之間温泉・平内海中温泉",
    "timing": "通年（春〜秋の登山シーズン・初夏のウミガメ産卵）",
    "desc": "日本で初めて世界自然遺産に登録された屋久島。九州最高峰・宮之浦岳（1,936m）をはじめとする洋上のアルプス。海岸沿いに湧き出る源泉かけ流しの「尾之間温泉」や、干潮時のみ入浴できる波打ち際の「平内海中温泉」。大自然に抱かれたリゾートホテル。",
    "spots": "大川（おおこ）の滝（日本の滝百選）、千尋（せんぴろ）の滝、平内海中温泉、尾之間温泉、屋久島環境文化村センター",
    "access": "鹿児島空港より飛行機約40分（屋久島空港）、または鹿児島本港より高速船トッピーで約110〜150分。",
    "tip": "平内海中温泉は1日2回の干潮前後の約2時間だけ海の中から現れる野趣あふれる天然混浴露天風呂で、満天の星空の下の入浴は格別です（水着不可・バスタオル巻き可）。"
  },
  {
    "key": "shiratani_unsuikyo_trekking_stay",
    "title": "2. 白谷雲水峡〜苔むす森・太鼓岩（スタジオジブリ映画の舞台となった原生林）",
    "timing": "通年（雨上がりの霧に包まれた苔の森は息を呑む美しさ）",
    "desc": "標高600〜1,050mに広がるヤクスギ原生林「白谷雲水峡」。花崗岩の巨石と清流、数百種類のコケが岩や倒木を覆い尽くす「苔むす森（もののけの森）」。巨岩の頂・太鼓岩から見下ろす宮之浦岳と広大な屋久杉の森の大パノラマ。",
    "spots": "白谷雲水峡（苔むす森・太鼓岩・弥生杉・飛流おとし）、宮之浦港、屋久神社",
    "access": "宮之浦港より路線バスで約30〜35分。",
    "tip": "白谷雲水峡は半日コース（約3〜4時間）で気軽に太鼓岩まで往復でき、縄文杉トレッキングよりも体力的なハードルが低く初心者にもおすすめです。"
  },
  {
    "key": "yakushima_mackerel_flyingfish_stay",
    "title": "3. 屋久島名物「首折れ鯖」＆トビウオひつまぶし（黒潮が育む驚きの鮮度）",
    "timing": "通年（首折れ鯖：旬は春〜秋・トビウオ料理は通年）",
    "desc": "屋久島近海の一本釣りで獲れたゴマサバを、船上で首を折って即座に血抜き・氷締めする「首折れ鯖（くびおれさば）」。生臭さが一切なく、ブリブリとした弾力と上品な脂の甘み。羽を広げた姿揚げが名物の「トビウオのから揚げ」。",
    "spots": "潮騒（宮之浦の人気店）、いその香り（安房）、屋久島ヴィータキッチン、安房港周辺の居酒屋",
    "access": "安房港・宮之浦港周辺。",
    "tip": "首折れ鯖のお造りは、屋久島特有の甘口醤油とすりおろし生姜でいただくのが地元流で、刺身の概念が変わるほどの驚異的な歯ごたえが楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-emerald-950 to-teal-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            YAKUSHIMA & WORLD HERITAGE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【鹿児島・屋久島＆白谷雲水峡・縄文杉】世界自然遺産・苔むす森トレッキング＆首折れ鯖宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed">
            樹齢数千年の巨木が呼吸する世界自然遺産の島「屋久島」。生命の神秘をたたえる「縄文杉」への巡礼。どこまでも深い緑の絨毯が広がる「白谷雲水峡・苔むす森」。屋久島近海で獲れる新鮮な「首折れ鯖」のお造りとトビウオのから揚げ。悠久の時を体感する大人の大自然旅。
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
