import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【観光列車＆極上温泉宿】サフィール踊り子・しまかぜ・ゆふいんの森で行く名旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "プレミアム観光列車で行く極上温泉旅完全特化！「サフィール踊り子」「観光特急しまかぜ」「特急ゆふいんの森」「ろくもん」「雪月花」の豪華車内体験、プレミアムシート、カフェ車両と沿線の名門温泉旅館を徹底解説。",
  keywords: ["scenic-tourist-train-onsen-trip-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["scenic-tourist-train-onsen-trip-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for scenic-tourist-train-onsen-trip-stay", e);
  }
  return {};
}

export default function TransitStyleHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "saphir_odoriko_izu_stay",
    "title": "1. サフィール踊り子（東京・新宿〜伊豆急下田：全席グリーン席のプレミアム列車）",
    "timing": "通年（相模湾の青い海を望む絶景ルート）",
    "desc": "全席がグリーン席以上の豪華特急「サフィール踊り子」。天窓付きのプレミアムグリーン席や個室、カフェテリア（食堂車）で提供される有名シェフ監修のラーメンやスイーツ。相模湾の水平線を眺めながら伊豆の温泉郷へ。",
    "spots": "サフィール踊り子カフェテリア車両、伊豆熱川・伊豆稲取・伊豆急下田駅周辺の名旅館",
    "access": "東京駅・新宿駅より直通約2時間30分。",
    "tip": "4名用・6名用の「グリーン個室」を予約すると、プライベート空間で家族や友人とカフェメニューを部屋に届けてもらえます。"
  },
  {
    "key": "shimakaze_iseshima_resort",
    "title": "2. 観光特急しまかぜ（大阪難波・京都・近鉄名古屋〜賢島：本革電動リクライニング）",
    "timing": "通年（伊勢神宮参拝と伊勢志摩のリアス式海岸リゾート）",
    "desc": "ハイグレードな本革電動リクライニングシートにマッサージ機能付きの「観光特急しまかぜ」。2階建てカフェ車両で味わう松阪牛重や海の幸ピラフ、地ビール。伊勢神宮参拝から英虞湾のラグジュアリーリゾートへ直行。",
    "spots": "しまかぜカフェ車両（2階席パノラマ）、鳥羽駅、鵜方駅、賢島駅周辺の名門リゾート",
    "access": "大阪難波・京都・近鉄名古屋より約2時間〜2時間30分。",
    "tip": "2階建てカフェ車両の「2階席」は、高い視点から伊勢志摩の豊かな自然や海を見渡せる特等席です。"
  },
  {
    "key": "yufuin_mori_kyushu_onsen",
    "title": "3. 特急ゆふいんの森（博多〜由布院・別府：木目調のハイデッカークラシックトレイン）",
    "timing": "通年（耳納連山や慈恩の滝を望む九州横断の旅）",
    "desc": "木の温もりあふれるクラシックなインテリアと高い視線のハイデッカー構造「特急ゆふいんの森」。ビュッフェカウンターで販売される特製スイーツ「ゆふいんわっぱ弁当」や地サイダー。由布岳を望む名旅館へ。",
    "spots": "ゆふいんの森ビュッフェ、由布院駅（足湯併設駅）、湯の坪街道、金鱗湖",
    "access": "博多駅より約2時間15分。",
    "tip": "列車が「慈恩の滝」の横を通過する際、車内アナウンスとともに速度を落として徐行運転してくれる絶景サービスがあります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SCENIC TRAIN & LUXURY RYOKAN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【観光列車＆極上温泉宿】サフィール踊り子・しまかぜ・ゆふいんの森で行く名旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            移動そのものが贅沢なエンターテインメント！パノラマ車窓から海や山を望むプレミアム観光列車「サフィール踊り子」「しまかぜ」「ゆふいんの森」。カフェ車両でスイーツや地ビールを味わい、終着駅で待つ極上の名門温泉宿へ。
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

              {/* アクセス・移動ルート・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要発着点＆ルート</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 スムーズな旅のコツ</span>
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
