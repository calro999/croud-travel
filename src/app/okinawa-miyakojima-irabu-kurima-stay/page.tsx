import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【沖縄・宮古島＆伊良部島・来間島】宮古ブルー・与那覇前浜＆伊良部大橋・宮古牛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "東洋一の白い砂浜と透き通る宮古ブルー完全特化！東洋一美しい「与那覇前浜ビーチ」、絶景の無料橋「伊良部大橋」、下地島空港17END、来間島竜宮城展望台、シギラセブンマイルズリゾート、最高級宮古牛＆宮古島産マンゴー宿を徹底解説。",
  keywords: ["okinawa-miyakojima-irabu-kurima-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["okinawa-miyakojima-irabu-kurima-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for okinawa-miyakojima-irabu-kurima-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "yonaha_maehama_beach_resort",
    "title": "1. 与那覇前浜ビーチ〜来間島・竜宮城展望台（「東洋一の美しさ」と称される白砂7km）",
    "timing": "通年（4月〜10月はビーチアクティビティ・冬は静寂の宮古ブルー）",
    "desc": "きめ細やかなパウダーサンドが約7km続く「与那覇前浜ビーチ（マイパマビーチ）」。来間大橋を渡って訪れる来間島の「竜宮城展望台」から見下ろす宮古ブルーのグラデーション。ビーチ直結のラグジュアリーリゾートホテル。",
    "spots": "与那覇前浜ビーチ（マリンアクティビティ・サンセット）、来間大橋、竜宮城展望台、パチャビーチ",
    "access": "宮古空港より車で約15分。下地島空港より車で約35分。",
    "tip": "与那覇前浜ビーチは、午前中の太陽が真上から差し込む時間帯が最も青の透明度が高く、夕方は水平線に沈むドラマチックな夕陽が楽しめます。"
  },
  {
    "key": "irabu_shimojishima_17end_stay",
    "title": "2. 伊良部大橋〜下地島空港17END・通り池（日本最長の無料橋と奇跡の幻の砂浜）",
    "timing": "通年（干潮時に現れる17ENDの白い砂紋は必見）",
    "desc": "宮古島と伊良部島を結ぶ全長3,540mの「伊良部大橋（通行無料の橋として日本最長）」。下地島空港北端の滑走路誘導路「17END（ワンセブンエンド）」。国の名勝・天然記念物の神秘の青い池「通り池」。",
    "spots": "伊良部大橋、下地島空港17END（干潮時の幻のビーチ）、通り池（人魚伝説・ダイビングスポット）、牧山展望台（サシバの形）",
    "access": "宮古空港より伊良部大橋経由で車約25分。下地島空港より車約5分。",
    "tip": "下地島空港17ENDへは、干潮時間帯（大潮の日がベスト）に合わせて訪れると、遠浅の海に白い砂紋が浮き上がる天国のような光景に出会えます。"
  },
  {
    "key": "miyakojima_beef_mango_luxury",
    "title": "3. 幻の黒毛和牛「宮古牛」＆シギラ黄金温泉（ミネラル豊富な牧草で育つ極上牛）",
    "timing": "通年（完熟宮古島マンゴーは6月下旬〜8月が旬）",
    "desc": "宮古島の大自然で育ち、流通量が少なく幻の和牛と呼ばれる「宮古牛」。とろけるようなサーロインステーキや握り寿司。糖度が高く濃厚な「完熟宮古島マンゴー」。南国植物に囲まれた天然温泉「シギラ黄金温泉」でのリラクゼーション。",
    "spots": "宮古牛炭火焼肉店・鉄板焼き、シギラセブンマイルズリゾート（シギラ黄金温泉・リフト）、うえのドイツ文化村",
    "access": "宮古島南部・シギラリゾートエリア。",
    "tip": "シギラリゾート内を走る「シギラペアリフト カギマナ」に乗ると、空中からエメラルドグリーンの海と南国の花々を見下ろす爽快な空中散歩が楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            MIYAKOJIMA & IRABU GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【沖縄・宮古島＆伊良部島・来間島】宮古ブルー・与那覇前浜＆伊良部大橋・宮古牛宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            どこまでも透き通る奇跡の海「宮古ブルー」と、パウダーサンドが続く「与那覇前浜ビーチ」。海の上を滑るように渡る全長3,540mの伊良部大橋。下地島空港17ENDのエメラルドグリーンの浅瀬。プライベートプール付きヴィラで極上の島時間を過ごす旅。
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
