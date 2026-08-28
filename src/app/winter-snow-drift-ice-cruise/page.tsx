import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【冬のオホーツク】流氷クルーズ＆知床世界遺産ホテル 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "白銀のオホーツク海を覆い尽くす流氷の絶景！網走「おーろら号」、紋別「ガリンコ号」、知床ウトロの流氷ウォーク、阿寒湖の丹頂鶴など、冬の北海道東部でしか体験できない極上流氷ステイを徹底解説。",
  keywords: ["winter-snow-drift-ice-cruise", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["winter-snow-drift-ice-cruise"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for winter-snow-drift-ice-cruise", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "abashiri_drift_ice",
    "title": "1. 北海道・網走（流氷砕氷船おーろら号＆オホーツク海鮮ビュッフェ）",
    "timing": "流氷シーズン：1月下旬〜3月中旬（ベスト：2月）",
    "desc": "大型流氷砕氷船「おーろら号」が氷を割りながら進む大迫力のクルーズ。オホーツク海を見下ろす高台のリゾート温泉ホテルに宿泊し、網走湖のワカサギ釣りやオホーツクサーモン・タラバガニを堪能。",
    "spots": "網走流氷観光砕氷船おーろら、博物館網走監獄、オホーツク流氷館、能取岬",
    "access": "女満別空港より連絡バスで網走市内まで約30分。JR石北本線網走駅下車。",
    "tip": "流氷砕氷船は天候・流氷の接岸状況により運航が変わるため、事前予約と当日の運航状況確認が必須です。"
  },
  {
    "key": "shiretoko_winter",
    "title": "2. 北海道・知床ウトロ温泉（世界自然遺産！流氷ウォークと天然温泉）",
    "timing": "流氷シーズン：2月上旬〜3月下旬",
    "desc": "ドライスーツを着用して流氷の上を歩く「流氷ウォーク」が大人気。知床半島の断崖に建つ温泉ホテルでは、客室や露天風呂から海一面に広がる流氷原と夕日のコラボレーションを楽しめます。",
    "spots": "知床五湖（冬期ガイドツアー）、フレペの滝（乙女の涙）、オシンコシンの滝、プユニ岬",
    "access": "女満別空港より知床エアポートライナーで約2時間（冬期運行）。網走駅から車・バス約90分。",
    "tip": "流氷ウォークツアー（ガイド同行）付きの宿泊プランがおすすめ。運が良ければオオワシやアザラシに出会えます。"
  },
  {
    "key": "monbetsu_drift_ice",
    "title": "3. 北海道・紋別（ドリルで流氷を砕くガリンコ号＆本場カニ尽くし）",
    "timing": "流氷シーズン：1月下旬〜3月上旬",
    "desc": "スクリュー型の巨大ドリルで流氷をガリガリ砕きながら突き進む「ガリンコ号Ⅲ・IMERU」。紋別港周辺の温泉ホテルでは、オホーツク海で獲れた本ズワイガニやホタテを贅沢に使った料理を堪能できます。",
    "spots": "流氷砕氷船ガリンコ号Ⅲ、オホーツクタワー（海底自然観測室）、アザラシシーパラダイス、カニの爪オブジェ",
    "access": "オホーツク紋別空港より無料連絡バスで市内へ約15分（羽田から直行便あり）。旭川駅から特急バス約3時間。",
    "tip": "サンライズクルーズに乗船すると、真っ赤に染まる朝焼けの海と流氷の神秘的なグラデーションを拝めます。"
  },
  {
    "key": "kushiro_cranes",
    "title": "4. 北海道・釧路＆阿寒湖温泉（白銀の湿原を舞う特別天然記念物タンチョウ鶴）",
    "timing": "観賞シーズン：12月〜3月（雪原に映える求愛ダンス）",
    "desc": "白銀の釧路湿原で優雅に舞うタンチョウ鶴の姿を観察。夜は阿寒湖温泉のアイヌコタンを散策し、湖畔の露天風呂から冬の星空を眺め、釧路名物「炉端焼き」や勝手丼を味わう冬の道東周遊旅。",
    "spots": "鶴見台・阿寒国際ツルセンター、阿寒湖アイヌコタン、釧路湿原展望台、和商市場（勝手丼）",
    "access": "たんちょう釧路空港より車・空港連絡バス。JR釧路駅より阿寒湖温泉まで直行バス約110分。",
    "tip": "釧路の「炉端焼き発祥の店」で炭火で焼くキンキやホタテ、地酒福司を味わうのが冬の醍醐味です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            DRIFT ICE & WILDLIFE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【冬のオホーツク】流氷クルーズ＆知床世界遺産ホテル 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ロシアのアムール川から南下し、海一面を真っ白に埋め尽くす大自然のスペクタクル「流氷」。砕氷船から眺める大迫力の流氷原、オホーツクの海鮮バイキング、流氷を望む展望露天風呂へ。
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
