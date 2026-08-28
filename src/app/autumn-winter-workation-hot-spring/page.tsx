import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【温泉ワーケーション】高速Wi-Fi＆名湯！大人のリトリート宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "仕事も旅も妥協しない！長野・軽井沢、静岡・熱海温泉、神奈川・箱根湯本、京都・烏丸御池など、コワーキングラウンジ、高速Wi-Fi、デスク環境と極上天然温泉を備えた秋・冬の温泉ワーケーションホテルを徹底解説。",
  keywords: ["autumn-winter-workation-hot-spring", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-workation-hot-spring"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-workation-hot-spring", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "karuizawa_workation",
    "title": "1. 長野・軽井沢（森のコワーキングスペースと源泉かけ流しリゾート）",
    "timing": "通年（秋の紅葉・冬の静寂ワーケーション）",
    "desc": "新幹線で東京から約65分。広大な森の中に開放的なコワーキングカフェや個室ブースを備えたリゾートホテルが充実。仕事の合間にハルニレテラスを散策し、美肌のトンボの湯でリフレッシュ。",
    "spots": "ハルニレテラス、軽井沢星野エリア（星野温泉トンボの湯）、雲場池、旧軽井沢銀座",
    "access": "北陸新幹線「軽井沢駅」下車。",
    "tip": "平日の連泊プランを活用すると、週末よりも大幅にお得な料金で長期滞在ワーケーションが可能です。"
  },
  {
    "key": "atami_workation",
    "title": "2. 静岡・熱海温泉（都心45分！青い海を望むデスクとオーシャンビュー温泉）",
    "timing": "通年（冬も温暖で仕事が捗る）",
    "desc": "新幹線でわずか45分の近さ。客室の窓から相模湾を見下ろすワークデスクや、Wi-Fi完備のオーシャンビューラウンジ。仕事終わりには海風を感じる露天風呂と熱海の地魚寿司を堪能。",
    "spots": "熱海サンビーチ、ACAO FOREST、起雲閣、熱海銀座商店街（レトロ喫茶）",
    "access": "東海道新幹線で東京駅から熱海駅まで直通約45分。",
    "tip": "熱海駅前の商店街で温泉まんじゅうをテイクアウトして、ラウンジでの作業のお供にするのが人気です。"
  },
  {
    "key": "hakone_workation",
    "title": "3. 神奈川・箱根湯本（ブックカフェラウンジ＆清流を望む温泉リトリート）",
    "timing": "通年（都心からロマンスカー直通）",
    "desc": "数千冊の本が並ぶブックラウンジや、電源・高速Wi-Fi完備のオープンラウンジを備えた温泉ホテル。早川のせせらぎを聞きながら作業し、疲れたら弱アルカリ性の箱根の名湯に飛び込めます。",
    "spots": "箱根湯本駅前商店街、早川渓流遊歩道、玉簾の滝、フォレストアドベンチャー箱根",
    "access": "新宿駅から小田急ロマンスカーで箱根湯本駅まで直通約85分。",
    "tip": "チェックイン前やチェックアウト後も利用できるコワーキングラウンジ付きプランを選ぶと、1日中無駄なく仕事ができます。"
  },
  {
    "key": "kyoto_workation",
    "title": "4. 京都・烏丸御池＆四条（大浴場付きデザインホテルと町家カフェワーク）",
    "timing": "通年（秋の寺院散策・冬の文化体験）",
    "desc": "京都の中心部・烏丸御池周辺。広々としたワークデスクや大浴場を備えたモダンホテルに宿泊。朝は鴨川沿いを散歩し、日中は町家カフェで仕事、夜は先斗町でおばんざいを味わう理想のデュアルライフ。",
    "spots": "京都国際マンガミュージアム、錦市場、鴨川遊歩道、先斗町、京都御所",
    "access": "地下鉄烏丸線・東西線「烏丸御池駅」「四条駅」下車。JR京都駅から地下鉄約5分。",
    "tip": "京都御所や二条城周辺の静かな緑地でテイクアウト珈琲を飲みながらのリモートワークも爽快です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HOT SPRING WORKATION
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【温泉ワーケーション】高速Wi-Fi＆名湯！大人のリトリート宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            午前中は集中してリモートワーク、午後は澄んだ空気の中を散策し、夜は効能豊かな名湯露天風呂と美味しい地酒でリフレッシュ。日常を離れて生産性とウェルビーイングを高める温泉ワーケーションへ。
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
