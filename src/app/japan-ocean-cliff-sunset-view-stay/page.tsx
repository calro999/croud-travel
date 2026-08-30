import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【絶景断崖オーシャン＆夕陽パノラマ宿】三陸・男鹿・越前・室戸岬・天草 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "荒波が削り出した断崖絶壁と燃えるような夕陽完全特化！三陸復興国立公園・北山崎、男鹿半島・入道崎、福井・東尋坊、高知・室戸岬、熊本・天草松島の夕陽百選、波打ち際の絶景露天風呂温泉旅館を徹底解説。",
  keywords: ["japan-ocean-cliff-sunset-view-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-ocean-cliff-sunset-view-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-ocean-cliff-sunset-view-stay", e);
  }
  return {};
}

export default function ScenicViewHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "sanriku_oga_cliff_sunset_stay",
    "title": "1. 三陸・北山崎＆秋田・男鹿半島（高さ200mの海のアルプスと入道崎の夕陽）",
    "timing": "通年（初夏の新緑・秋の透明度の高い海と夕暮れ）",
    "desc": "高さ200mの断崖が約8kmにわたって連なる「三陸海岸・北山崎（海のアルプス）」。サッパ船で断崖の真下をくぐるアドベンチャー。男鹿半島・入道崎の白黒灯台と日本海に沈む夕日、名物「ゴジラ岩」の夕陽シルエット。",
    "spots": "北山崎展望台（サッパ船アドベンチャーズ）、浄土ヶ浜、男鹿半島入道崎（北緯40度モニュメント）、ゴジラ岩",
    "access": "三陸鉄道リアス線「普代駅」、JR男鹿線「男鹿駅」周辺。",
    "tip": "男鹿温泉郷の伝統料理「石焼料理（桶に入れた魚介と味噌出汁に、真っ赤に熱した溶岩を投入して一瞬で沸騰させる料理）」は必見の大迫力です。"
  },
  {
    "key": "tojinbo_echizen_sunset_stay",
    "title": "2. 福井・東尋坊〜三国温泉・越前海岸（国の天然記念物・柱状節理と日本の夕陽百選）",
    "timing": "通年（冬の荒波「波の花」と越前ガニシーズンは圧巻）",
    "desc": "輝石安山岩の柱状節理が約1km続く国の名勝「東尋坊」。断崖絶壁に打ち寄せる日本海の白波。三国温泉の展望露天風呂から望む、空と海を黄金色に染め上げる夕陽。夕食には三国港直送の越前ガニや甘エビ。",
    "spots": "東尋坊（東尋坊タワー・遊覧船）、三国サンセットビーチ、越前松島水族館、雄島（朱塗りの橋）",
    "access": "えちぜん鉄道「三国港駅」下車。北陸新幹線「芦原温泉駅」より車・バス約25分。",
    "tip": "三国港周辺の旅館では、夕食時間を日没に合わせて調整してくれる宿が多く、食事処の窓一面に広がる夕陽を眺めながら乾杯できます。"
  },
  {
    "key": "amakusa_muroto_ocean_resort",
    "title": "3. 熊本・天草五橋＆高知・室戸岬（多島美を染める天草夕景と太平洋の丸い水平線）",
    "timing": "通年（イルカウォッチング・南国の爽快シーサイド）",
    "desc": "大小120余の島々が浮かぶ天草松島の多島美を渡る「天草五橋（天草パールライン）」。日本の夕陽百選に選ばれた西平椿公園の夕陽。室戸岬の地球の丸さを実感できる270度の大パノラマと、黒潮が育む伊勢海老やカツオ。",
    "spots": "天草五橋（天草クルーズ・イルカウォッチング）、大江天主堂・﨑津集落（世界遺産）、室戸岬灯台、中岡慎太郎像",
    "access": "JR三角駅より車・定期船、高知空港より車で約100分。",
    "tip": "天草・下島西海岸の「﨑津集落」では、波静かな羊角湾に面して建つゴシック様式の﨑津教会が夕暮れ時に水面に映り、息を呑む美しさです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            OCEAN CLIFF & SUNSET VIEW GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【絶景断崖オーシャン＆夕陽パノラマ宿】三陸・男鹿・越前・室戸岬・天草 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            見渡す限りの水平線に沈みゆく黄金の太陽！日本の名勝・断崖絶壁に建つ「絶景オーシャン＆夕陽の宿」。三陸海岸の高さ200mの絶壁、男鹿半島のゴジラ岩、東尋坊の夕暮れ。打ち寄せる波音をBGMに湯船に浸かるドラマチックな休日。
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

              {/* 絶景ポイント・アクセス・撮影のコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 絶景ビュースポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 最高の景色を楽しむコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの絶景展望宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    絶景プラン
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
