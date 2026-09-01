import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【愛犬専用温泉付き客室＆露天風呂宿】伊豆・那須・箱根・関西 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "愛犬と一緒に温泉で極上の癒やし！客室専用愛犬用温泉・足湯＆露天風呂付き宿完全特化！伊豆高原、那須高原、箱根、京都・関西、愛犬専用バスタブ完備、滑りにくい床素材、美肌の天然温泉宿を徹底解説。",
  keywords: ["dog-friendly-private-onsen-bath-resort-stay", "ペットと泊まれる宿", "愛犬同伴", "ドッグリゾート", "プライベートドッグラン", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["dog-friendly-private-onsen-bath-resort-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for dog-friendly-private-onsen-bath-resort-stay", e);
  }
  return {};
}

export default function PetDogResortHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "izu_kogen_dog_onsen_resort",
    "title": "1. 静岡・伊豆高原（愛犬の聖地！客室専用ドッグ温泉露天風呂）",
    "timing": "通年（温暖な気候で一年中ドッグフレンドリーなリゾート）",
    "desc": "日本有数の愛犬同伴リゾート地「伊豆高原」。客室テラスに飼い主用と愛犬用の温泉露天風呂が並んで設置された贅沢な宿。アルカリ性単純温泉で愛犬の毛並みもつやつやに。滑りにくい防水床や愛犬専用アメニティ完備。",
    "spots": "伊豆高原ドッグフォレスト、城ヶ崎海岸遊歩道、大室山（リフト愛犬同伴可）、伊豆シャボテン動物公園",
    "access": "東名高速・厚木ICまたは小田原厚木道路経由。JR伊豆急行線「伊豆高原駅」周辺。",
    "tip": "大室山登山リフトは小型犬〜中型犬（抱っこ可能サイズ）であれば愛犬と一緒に山頂まで登ることができ、山頂お鉢巡りのお散歩が爽快です。"
  },
  {
    "key": "nasu_hakone_dog_luxury_onsen",
    "title": "2. 栃木・那須高原＆神奈川・箱根（涼冷な高原と大自然のドッグスパ）",
    "timing": "通年（夏期の避暑・秋の紅葉ドッグラン散策）",
    "desc": "広大な森に包まれた那須高原や箱根強羅のラグジュアリードッグホテル。客室露天風呂の横に愛犬専用の温泉シャワーや足湯。愛犬用バスローブ、プロ仕様のブロアー＆ドライヤーコーナー完備。森のプライベートドッグラン直結。",
    "spots": "那須ハイランドパーク（愛犬同伴アトラクション）、箱根芦ノ湖遊覧船、那須ガーデンアウトレット、仙石原ススキ草原",
    "access": "東北道「那須IC」または東名「御殿場IC」より車約15〜20分。",
    "tip": "那須高原は愛犬同伴可能なカフェやレストランが日本一の密度で集積しており、散策の途中にテラス席で一緒にランチやカフェを楽しめます。"
  },
  {
    "key": "kansai_dog_private_bath_stay",
    "title": "3. 関西・京都天橋立＆兵庫淡路島（海と温泉を愛犬と独占するヴィラ）",
    "timing": "通年（京阪神から車で90〜120分の好アクセス）",
    "desc": "京都・天橋立や兵庫・淡路島の海岸沿いに建つプライベートヴィラ。客室専用の天然温泉（金温泉・美肌の湯）と愛犬用足湯。客室からそのまま出られるオーシャンビューのプライベート天然芝ドッグラン。",
    "spots": "天橋立公園（松並木お散歩）、淡路島国営明石海峡公園、淡路シェフガーデン",
    "access": "京阪神より車で約1〜2時間。",
    "tip": "天橋立の約3.6kmに及ぶ白砂青松の松並木道は、日陰が多く地面も砂地のため、愛犬の足腰に優しく最高のお散歩コースになります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-emerald-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-amber-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-yellow-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            DOG PRIVATE ONSEN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【愛犬専用温泉付き客室＆露天風呂宿】伊豆・那須・箱根・関西 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            大好きな愛犬と一緒に湯浴みを楽しむ夢の休日「愛犬専用温泉付き客室＆露天風呂宿」。客室テラスに設えられた愛犬専用の天然温泉バスタブや足湯。飼い主の露天風呂のすぐ隣で一緒に温まる至福。愛犬用ドライヤーやトリミング台完備の名宿へ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆厳選宿 */}
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
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    🐾 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめスポット＆お散歩エリア</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                  <span className="font-bold text-emerald-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-1.5">
                  <span className="font-bold text-orange-950 block text-[11px]">💡 愛犬と快適に過ごすコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選ドッグフレンドリー宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの愛犬同伴厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    愛犬歓迎宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-emerald-700 hover:from-amber-500 hover:to-emerald-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで愛犬同伴プランを見る
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
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
