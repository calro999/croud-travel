import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【長崎・ハウステンボス＆佐世保】ヨーロッパ街並み・世界最大イルミ＆佐世保バーガー極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本一広いテーマパーク・長崎ハウステンボスエリア完全特化！中世オランダの街並みと運河、世界最大1300万球のイルミネーション、直営オフィシャルホテル、九十九島パノラマと本場佐世保バーガー・レモンステーキ宿を徹底解説。",
  keywords: ["nagasaki-huistenbosch-sasebo-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagasaki-huistenbosch-sasebo-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagasaki-huistenbosch-sasebo-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "huistenbosch_official_hotel",
    "title": "1. ハウステンボス街並み〜世界最大1300万球イルミネーション（光と花の王国）",
    "timing": "通年（冬の白銀の世界・春の100万本のチューリップ祭・秋のハロウィン＆光の王国）",
    "desc": "東京ドーム約33個分の広大な敷地にオランダの街並みを再現した「ハウステンボス」。シンボルタワー「ドムトールン」からのパノラマ、運河カナルクルーザー。夜には1300万球が輝く世界最大級のイルミネーション。",
    "spots": "ハウステンボス（ドムトールン・パレスハウステンボス・アンブレラストリート・光の滝）、ホテルヨーロッパ（専用チェックインクルーザー）",
    "access": "JR大村線「ハウステンボス駅」下車徒歩約5分。長崎空港より高速船で約50分。博多駅から特急「ハウステンボス」直通約1時間45分。",
    "tip": "「ホテルヨーロッパ」などの直営オフィシャルホテルに宿泊すると、開園前アーリー入場や専用クルーザー送迎など豪華特典が付いてきます。"
  },
  {
    "key": "sasebo_kujukushima_view",
    "title": "2. 九十九島パノラマ〜展海峰・遊覧船（208の島々が織りなすリアス式海岸美）",
    "timing": "通年（春・秋のコスモスと夕日グラデーション）",
    "desc": "西海国立公園に指定された大小208の島々が浮かぶ「九十九島（くじゅうくしま）」。大パノラマが広がる「展海峰」や「弓張岳展望台」。「九十九島遊覧船パールクィーン」で島々の間を縫う爽快クルーズ。",
    "spots": "展海峰（展望台・菜の花＆コスモス）、弓張岳展望台（佐世保湾夜景）、九十九島パールシーリゾート（遊覧船・水族館海きらら）",
    "access": "JR佐世保駅よりバスで約25分。",
    "tip": "「弓張岳展望台」は、昼の九十九島の多島美と夜の佐世保市街・造船所の工場夜景を両方楽しめるビュースポットです。"
  },
  {
    "key": "sasebo_gourmet_burger_steak",
    "title": "3. 佐世保バーガー＆レモンステーキ（アメリカ海軍文化と長崎和牛の旨味）",
    "timing": "通年（本場アメリカンサイズのご当地グルメ）",
    "desc": "米海軍直伝のレシピから生まれたBIGサイズの「佐世保バーガー」。熱々の鉄板で薄切り長崎和牛を焼き、爽やかなレモン醤油ソースをジュワッとかける「レモンステーキ」。九十九島の生牡蠣（冬期）も名物。",
    "spots": "佐世保バーガー有名店（ヒカリ・ログキット・ビッグマン）、時代屋（レモンステーキ発祥店）、三浦町カトリック教会",
    "access": "佐世保駅周辺および市街地中心部。",
    "tip": "レモンステーキを食べ終わった鉄板に、残ったソースと絡めるようにご飯を入れて食べるのが佐世保通の食べ方です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HUIS TEN BOSCH RESORT GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【長崎・ハウステンボス＆佐世保】ヨーロッパ街並み・世界最大イルミ＆佐世保バーガー極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            中世ヨーロッパの壮大な宮殿と運河が広がる「ハウステンボス」。1300万球が輝く世界最大のイルミネーションと、四季折々の花の王国。九十九島の絶景と佐世保バーガー、長崎和牛に舌鼓を打つ極上の滞在へ。
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
