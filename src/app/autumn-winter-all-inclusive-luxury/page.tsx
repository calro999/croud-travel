import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【贅沢フリーフロー】お財布フリー！秋・冬の極上オールインクルーシブ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "滞在中の飲食・アクティビティがすべて無料！神奈川・箱根、栃木・那須高原、静岡・東伊豆、宮城・作並秋保温泉など、生ビールや地酒、暖炉ラウンジの軽食を心ゆくまで堪能できる人気宿を徹底解説。",
  keywords: ["autumn-winter-all-inclusive-luxury", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-all-inclusive-luxury"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-all-inclusive-luxury", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hakone_all_inclusive",
    "title": "1. 神奈川・箱根温泉郷（プレミアムラウンジで地酒・ワインと名湯を味わい尽くす）",
    "timing": "通年（秋の紅葉・冬の温泉シーズン）",
    "desc": "都心からロマンスカーで気軽に行ける箱根。暖炉のあるラウンジでワインやクラフトビール、フィンガーフードがフリー。客室露天風呂で温まった後は、バーで特製カクテルを傾ける贅沢な夜。",
    "spots": "箱根登山鉄道、彫刻の森美術館、大涌谷、芦ノ湖スカイライン",
    "access": "箱根登山鉄道強羅駅・箱根湯本駅より送迎あり。新宿から約85分。",
    "tip": "夕食前のアペリティフ（食前酒タイム）からディナーのペアリング、食後のナイトバーまでフル活用するのがコツです。"
  },
  {
    "key": "nasu_all_inclusive",
    "title": "2. 栃木・那須高原（北欧風暖炉ラウンジ＆高原マルシェの極上インクルーシブ）",
    "timing": "通年（秋の紅葉狩り・冬の雪見焚き火）",
    "desc": "那須の森林に囲まれたリゾートホテル。パチパチ薪が燃える暖炉を囲み、栃木の地ビールや厳選ワイン、焼きマシュマロを満喫。ビュッフェでは那須名物牛ステーキや地元産チーズが食べ飲み放題。",
    "spots": "那須高原展望台、那須どうぶつ王国、那須ステンドグラス美術館、殺生石",
    "access": "東北新幹線「那須塩原駅」より無料シャトルバス・車で約30分。",
    "tip": "湯上がり処のアイスキャンディーやご当地牛乳、夜食の特製ラーメンサービスなど宿ごとの無料特典が充実しています。"
  },
  {
    "key": "izu_all_inclusive",
    "title": "3. 静岡・東伊豆＆伊豆高原（海を望む絶景バー＆伊豆海の幸ディナーフリーフロー）",
    "timing": "通年（冬も温暖なオーシャンビューリゾート）",
    "desc": "相模湾を一望するテラスラウンジ。水平線を眺めながら生ビールやスパークリングワインを楽しみ、夕食時は金目鯛や伊勢海老料理とともに地酒やカクテルを好きなだけ味わえる海辺のリトリート。",
    "spots": "城ヶ崎海岸門脇吊橋、大室山、伊豆シャボテン動物公園、稲取細野高原",
    "access": "伊豆急行線「伊豆高原駅」「伊豆熱川駅」下車。特急踊り子号利用。",
    "tip": "早朝の「日の出タイム」にラウンジで提供される挽きたて珈琲を片手に、海から昇る朝日を眺める時間が至福です。"
  },
  {
    "key": "miyagi_all_inclusive",
    "title": "4. 宮城・作並＆秋保温泉（渓流を望む湯上がりビールバーと宮城の地酒飲み比べ）",
    "timing": "通年（秋の宮城峡紅葉・冬の雪見風呂）",
    "desc": "仙台の奥座敷・作並温泉の「一の坊」など、オールインクルーシブを極めた名宿。ニッカウヰスキー宮城峡蒸溜所に近く、本格ウイスキーや宮城の純米酒が飲み放題。広瀬川の渓流露天風呂で心身を解放。",
    "spots": "ニッカウヰスキー宮城峡蒸溜所、鳳鳴四十八滝、秋保大滝、定義如来西方寺（三角油揚げ）",
    "access": "JR仙山線「作並駅」より無料送迎バス約5分。JR仙台駅より車・バス約40分。",
    "tip": "敷地内のサイクリングバイシクルレンタルやヨガ体験、コンサートなどのアクティビティもすべて無料で楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ALL-INCLUSIVE RESORT
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【贅沢フリーフロー】お財布フリー！秋・冬の極上オールインクルーシブ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            チェックインした瞬間から始まるストレスフリーな極上時間。ウェルカムスイーツ、湯上がりの生ビール、バーラウンジの銘酒、豪華ディナーのドリンクまですべて宿泊代金込み。大人のおこもり贅沢ステイへ。
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
