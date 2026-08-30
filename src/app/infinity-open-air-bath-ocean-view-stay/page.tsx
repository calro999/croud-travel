import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【絶景インフィニティ露天風呂の宿】海・空・湖と一体化する圧倒的パノラマ 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "視界を遮るものがない「絶景インフィニティ露天風呂」宿完全特化！湯船が海や湖の水面と溶け合うインフィニティ温泉、朝焼けのサンライズ・夕暮れのマジックアワー・満天の星空、絶景テラスと美食宿を徹底解説。",
  keywords: ["infinity-open-air-bath-ocean-view-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["infinity-open-air-bath-ocean-view-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for infinity-open-air-bath-ocean-view-stay", e);
  }
  return {};
}

export default function HeritageOnsenHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "infinity_ocean_view_bath",
    "title": "1. オーシャンインフィニティ露天（海と一体化する水平線パノラマ）",
    "timing": "通年（日の出サンライズ・夕暮れのマジックアワー・満月のムーンロード）",
    "desc": "湯船の水面とどこまでも広がる大海原の境界線が消え去るインフィニティ設計。潮風を感じながら浸かる弱食塩泉や炭酸水素塩泉。波の音をBGMに、刻一刻と表情を変える空と海の色を眺める至福の時間。",
    "spots": "屋上インフィニティ展望露天風呂、海辺のデッキチェア、展望足湯ラウンジ、ナイトライトアップ",
    "access": "熱海、伊豆、勝浦、南紀白浜、淡路島、指宿、沖縄など海沿いのリゾート地。",
    "tip": "満月の前後数日間に現れる、海面に月光が描く一本の光の道「ムーンロード」を湯船から眺めるのは奇跡的な絶景です。"
  },
  {
    "key": "infinity_lake_sky_bath",
    "title": "2. レイク＆マウンテンインフィニティ（湖面に映る逆さ富士と雲上の絶景）",
    "timing": "通年（早朝の朝霧と鏡のような湖面・夕暮れの赤富士）",
    "desc": "河口湖や芦ノ湖、洞爺湖の水面、そして雄大な山並みと一体化する天空のインフィニティ温泉。無風の早朝には湖面に鏡のように山が映り込む「逆さ富士」や「逆さ連峰」。標高の高い山岳リゾートから見下ろす雲海。",
    "spots": "湖畔パノラマ露天風呂、展望サウナ、水上テラス、パノラマバー",
    "access": "河口湖、箱根芦ノ湖、日光中禅寺湖、洞爺湖、阿寒湖など。",
    "tip": "風が止む早朝の露天風呂は、湖面が波立たず完全な鏡面反射となり、最も息をのむ絶景が広がります。"
  },
  {
    "key": "private_infinity_suite",
    "title": "3. 客室専用インフィニティ露天スイート（誰にも邪魔されない特等席の絶景独占）",
    "timing": "通年（大切なパートナーとの記念日やご褒美ステイ）",
    "desc": "客室のテラスに備わる専用のインフィニティ露天風呂。好きな時間に何度でも、誰にも邪魔されることなく絶景を独占。湯上がりはテラスのデイベッドでシャンパンを傾け、星空を眺める究極のプライベートステイ。",
    "spots": "客室専用インフィニティ露天風呂、テラスデイベッド、バイオエタノール暖炉、専用クラブラウンジ",
    "access": "最高級温泉旅館やスモールラグジュアリーホテル。",
    "tip": "夕暮れ時の15分間だけの「マジックアワー」に合わせて客室露天風呂に浸かると、言葉を失う美しさに包まれます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            INFINITY OPEN-AIR BATH GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【絶景インフィニティ露天風呂の宿】海・空・湖と一体化する圧倒的パノラマ 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            湯船の縁がなく、視界一面の海や湖、大空と溶け合う奇跡の絶景「インフィニティ露天風呂」。まるで大自然に浮かんでいるかのような圧倒的な開放感。夕陽が水平線に沈む黄金のマジックアワーと、波音に包まれる至高の温泉体験。
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

              {/* 建築美・泉質・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 建築美・泉質・設備の魅力</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 代表的エリア＆アクセス</span>
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
                      <span>🏨</span> <span>{guide.title}におすすめの厳選名宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選名宿
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
