import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【現代版プチ湯治＆ファスティング宿】デトックス・薬膳料理＆温泉リトリート 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "心と体を根本からリセットする現代湯治＆ファスティング宿完全特化！草津・伊豆・八ヶ岳・別府の専門プログラム、発酵ジュース断食、体に優しい薬膳会席、温泉療法士による入浴指導、長期滞在ワークスペースを徹底解説。",
  keywords: ["modern-toji-fasting-detox-retreat-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["modern-toji-fasting-detox-retreat-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for modern-toji-fasting-detox-retreat-stay", e);
  }
  return {};
}

export default function WellnessRetreatHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "fasting_detox_resort_stay",
    "title": "1. 専門ファスティング・プログラム（無理のない酵素ジュース断食＆回復食）",
    "timing": "通年（週末2泊3日〜1週間の集中デトックス）",
    "desc": "専門スタッフや看護師・管理栄養士のサポートのもとで行う安心のファスティング。特製酵素ドリンクやフレッシュスムージーでの断食期、胃腸に優しいおかゆや発酵食品を中心とした「回復食」。代謝アップと体質改善。",
    "spots": "伊豆高原ファスティングホテル、八ヶ岳ヘルスリゾート、草津温泉断食道場",
    "access": "首都圏・関西圏から特急・新幹線で約90分〜2時間。",
    "tip": "ファスティングの成否は「回復食」にかかっています。宿が用意する丁寧な回復食プログラムを利用することでリバウンドを防ぎ、クリアな体感を持続できます。"
  },
  {
    "key": "modern_toji_herb_cuisine_stay",
    "title": "2. 現代版プチ湯治＆オーガニック薬膳料理（名湯の自然治癒力と東洋医学の知恵）",
    "timing": "通年（慢性疲労・冷え性改善・自律神経の調整）",
    "desc": "昔ながらの湯治文化をモダンにアップデートした「プチ湯治」。温泉ソムリエや温泉療法医の入浴アドバイスを受けながら、効能豊かな源泉に浸かる日々。地元無農薬野菜や和漢植物をふんだんに使った滋味あふれる薬膳料理。",
    "spots": "草津温泉（時間湯・クアパーク）、別府鉄輪温泉（地獄蒸し自炊）、山形肘折温泉",
    "access": "全国の歴史ある名湯地。",
    "tip": "別府・鉄輪温泉では、温泉の噴気を利用した「地獄蒸し」で新鮮野菜や魚介を蒸し上げると、油を使わずビタミンを逃さない最高にヘルシーな食事が楽しめます。"
  },
  {
    "key": "mental_retreat_solo_stay",
    "title": "3. デジタルデトックス＆森林リトリート（スマホを手放し、五感を研ぎ澄ます静寂）",
    "timing": "通年（脳疲労リセット・睡眠の質の向上）",
    "desc": "客室にWi-Fiやテレビをあえて置かず、自然の音だけに包まれるデジタルデトックス空間。早朝の森のウォーキング、川のせせらぎを聞きながらの瞑想、暖炉の火を見つめる時間。深い眠りと心の平穏を取り戻す休日。",
    "spots": "八ヶ岳山麓、箱根の森、奥日光、屋久島、阿蘇の森",
    "access": "大自然に囲まれた静寂のロケーション。",
    "tip": "チェックイン時にスマートフォンをフロントに預ける「デジタルデトックス宿泊プラン」を利用すると、驚くほど思考がクリアになります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            MODERN TOJI & FASTING GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【現代版プチ湯治＆ファスティング宿】デトックス・薬膳料理＆温泉リトリート 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日々の疲れやストレスを手放し、本来の自分を取り戻す「現代版プチ湯治＆ファスティングリトリート」。管理栄養士監修の酵素ジュース断食、滋味あふれる薬膳料理、歴史ある名湯での湯治体験で、体の内側から輝く美と健康を。
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

              {/* プログラム内容・ロケーション・ととのうコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要エリア＆専門プログラム</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆おすすめロケーション</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 リトリート効果を高めるコツ</span>
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
