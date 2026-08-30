import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【長崎・平戸＆佐世保・九十九島】世界遺産キリシタン史跡・平戸城＆九十九島遊覧・ヒラメ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "異国情緒と多島美の楽園・長崎平戸＆佐世保九十九島エリア完全特化！平戸城（宿泊体験キャッスルステイ）、世界遺産春日集落・生月島サンセットウェイ、九十九島パールシーリゾート、名物「天然ヒラメ・佐世保バーガー宿」を徹底解説。",
  keywords: ["nagasaki-hirado-sasebo-kujukushima-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagasaki-hirado-sasebo-kujukushima-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagasaki-hirado-sasebo-kujukushima-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hirado_castle_heritage_onsen",
    "title": "1. 平戸城〜平戸オランダ商館・寺院と教会の見える風景（和洋折衷の城下町散歩）",
    "timing": "通年（春の平戸城つつじまつり・秋の平戸くんち）",
    "desc": "海に突き出た丘に築かれ、天守閣から平戸瀬戸を一望する「平戸城」。寺院の瓦屋根と聖フランシスコ・ザビエル記念教会の尖塔が重なり合う「寺院と教会の見える風景」。復元された「平戸オランダ商館」と平戸温泉の湯。",
    "spots": "平戸城（懐柔櫓・キャッスルステイ）、寺院と教会の見える風景、平戸オランダ商館、平戸ザビエル記念教会",
    "access": "松浦鉄道「たびら平戸口駅」より車・バスで約15分。西九州道「佐々IC」より約40分。",
    "tip": "日本最西端の駅「たびら平戸口駅」では、駅窓口で「日本最西端駅訪問証明書」を発行してもらえます。"
  },
  {
    "key": "sasebo_kujukushima_resort_stay",
    "title": "2. 九十九島〜弓張岳展望台・生月島サンセットウェイ（208の島々と断崖絶壁ドライブ）",
    "timing": "通年（夕暮れ時に島々のシルエットが黄金色に染まる絶景）",
    "desc": "西海国立公園の代表景観「九十九島（くじゅうくしま）」。九十九島遊覧船パールクィーンや海きらら水族館。標高364mの「弓張岳展望台」からの夜景。映画やCMのロケ地として有名な生月島（いきつきしま）西海岸の断崖道路。",
    "spots": "九十九島パールシーリゾート（遊覧船・海きらら）、弓張岳展望台、展海峰（菜の花・コスモス）、生月サンセットウェイ・大バエ灯台",
    "access": "JR佐世保駅より路線バス約25分。",
    "tip": "生月サンセットウェイは信号が一切なく、垂直に切り立つ断崖と東シナ海の水平線を眺めながら走る日本屈指の絶景ロードです。"
  },
  {
    "key": "hirado_hirame_sasebo_beef_stay",
    "title": "3. 平戸名物「天然ヒラメ」＆佐世保バーガー（冬〜春のヒラメまつりと本場アメリカングルメ）",
    "timing": "通年（天然ヒラメまつり：1月〜3月）",
    "desc": "玄界灘の激流に揉まれて身が締まった「平戸の天然ヒラメ」。透き通るヒラメのお造り、握り寿司、しゃぶしゃぶ。佐世保発祥のジューシーな「佐世保バーガー」や、熱々の鉄板でレモン醤油タレを絡める「レモンステーキ」。",
    "spots": "平戸ヒラメ料理指定店、佐世保バーガー認定店（ヒカリ・ログキット）、蜂の家（ジャンボシュークリーム）",
    "access": "平戸・佐世保市街。",
    "tip": "佐世保のレモンステーキは、お肉を食べ終えた後に鉄板に残ったタレと肉汁の中にご飯を投入して混ぜて食べるのが通のスタイルです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HIRADO & SASEBO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【長崎・平戸＆佐世保・九十九島】世界遺産キリシタン史跡・平戸城＆九十九島遊覧・ヒラメ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            南蛮貿易と潜伏キリシタンの歴史が息づく城下町「平戸」と、208の島々が浮かぶ絶景「九十九島・佐世保」。生月島の断崖絶壁を走るサンセットウェイ。平戸港水揚げの極上「天然ヒラメ」と佐世保のレモンステーキを味わう西端の旅。
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
