import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【三重・伊勢志摩】お伊勢参り＆伊勢海老・的矢かき極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "伊勢神宮・鳥羽志摩エリア完全特化！内宮・外宮の両参り、おかげ横丁食べ歩き、英虞湾パノラマと、本場伊勢海老・松阪牛・的矢かきを堪能する名宿を徹底解説。",
  keywords: ["mie-ise-shima-gourmet-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["mie-ise-shima-gourmet-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for mie-ise-shima-gourmet-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "ise_jingu_walk",
    "title": "1. 伊勢神宮・内宮門前＆おかげ横丁（早朝参拝と伊勢うどん・赤福本店）",
    "timing": "通年（年末年始の初詣・毎月1日の朔日参り）",
    "desc": "五十鈴川の清流を渡り、宇治橋をくぐって参拝する伊勢神宮内宮。内宮門前の老舗宿に宿泊すれば、人通りの少ない静寂の早朝参拝（朝5時〜）が叶い、おはらい町・おかげ横丁で赤福や伊勢うどんを満喫。",
    "spots": "伊勢神宮（内宮・外宮）、おかげ横丁、おはらい町（赤福本店・五十鈴川カフェ）、猿田彦神社",
    "access": "近鉄「宇治山田駅」「五十鈴川駅」より三重交通バス「内宮前行き」で約15〜20分。",
    "tip": "おかげ横丁の「赤福本店」でいただく出来立ての柔らかい赤福餅と番茶は、早朝参拝後の最高の朝食です。"
  },
  {
    "key": "toba_bay_view",
    "title": "2. 鳥羽湾・鳥羽温泉郷（海に浮かぶ島々と本場伊勢海老・アワビ会席）",
    "timing": "通年（冬の伊勢海老・牡蠣シーズンが最高）",
    "desc": "鳥羽水族館やミキモト真珠島がある鳥羽湾。海岸沿いの高台に建つ温泉旅館からは、行き交う船や答志島を望むパノラマビュー。夕食には生きた伊勢海老のお造りやアワビの踊り焼きが豪快に並びます。",
    "spots": "鳥羽水族館（飼育種数日本一・ジュゴン）、ミキモト真珠島、鳥羽展望台（天空のドライブイン）、夫婦岩",
    "access": "近鉄・JR「鳥羽駅」下車。名古屋駅から近鉄特急で約1時間40分。各宿送迎バスあり。",
    "tip": "二見浦の「二見興玉神社・夫婦岩」で海から昇る朝日を拝んでから伊勢神宮へ向かうのが古来の正しい参拝順序です。"
  },
  {
    "key": "ago_bay_luxury",
    "title": "3. 志摩・英虞湾＆賢島（サミットの舞台！多島美を望む極上リゾート）",
    "timing": "通年（リアス海岸の美しい夕日）",
    "desc": "伊勢志摩サミットのメイン会場となった賢島。志摩観光ホテルをはじめとする名門リゾートでは、英虞湾の夕景を眺めながら伝統の「アワビのステーキ」や「伊勢海老のビスク」フレンチを堪能できます。",
    "spots": "横山展望台（天空カフェテラス）、賢島エスパーニャクルーズ、志摩スペイン村、英虞湾夕日スポット",
    "access": "近鉄特急「賢島駅」下車。大阪難波・近鉄名古屋から直通特急あり。",
    "tip": "横山展望台の「天空カフェテラス（Mirador Shima）」の木製デッキから見下ろす英虞湾の多島美は息をのむ絶景です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ISE SHIMA MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【三重・伊勢志摩】お伊勢参り＆伊勢海老・的矢かき極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日本人の心のふるさと「伊勢神宮」と、リアス海岸の美しい真珠の海「伊勢志摩」。厳かな神域で新年の多幸を祈り、海の王様・伊勢海老と極上温泉に癒やされる特別な旅路。
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
