import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【全室離れ・源泉かけ流し露天風呂付き隠れ家宿】大人の静寂＆名門温泉割烹 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "静寂とプライベートを極めた大人のための聖域！全室離れ・客室専用源泉かけ流し露天風呂付き名旅館完全特化！由布院・黒川温泉・箱根・伊豆・飛騨高山、誰にも会わずに部屋食と名湯を堪能する極上宿を徹底解説。",
  keywords: ["japan-exclusive-detached-villa-private-onsen-stay", "宿泊予約", "高級リゾート", "記念日ホテル", "ラグジュアリーステイ", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-exclusive-detached-villa-private-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-exclusive-detached-villa-private-onsen-stay", e);
  }
  return {};
}

export default function LuxuryPremiumHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kyushu_yufuin_kurokawa_detached_villa",
    "title": "1. 九州・由布院＆黒川温泉・クヌギ林と清流に抱かれる全室離れ名旅館",
    "timing": "通年（由布岳の朝霧が立ち込める秋冬は特に幻想的）",
    "desc": "広大な敷地にわずか数室〜十数室のみの離れを配置した由布院や黒川温泉の最高峰旅館。茅葺き屋根の重厚な佇まい。リビングから直接続く巨石をくり抜いた源泉かけ流し露天風呂。豊後牛やすっぽん、山菜を使った繊細な会席。",
    "spots": "由布院 御三家（亀の井別荘・由布院玉の湯・山荘無量塔）、黒川温泉 山みず木別邸 深山山荘、竹ふえ（白川温泉）",
    "access": "大分空港または熊本空港より車・特急バス。",
    "tip": "白川温泉の「竹ふえ」では、約4,000坪の広大な竹林にわずか12室の離れのみが点在し、専用露天風呂に浮かべられる竹筒アイスや地酒サービスが人気です。"
  },
  {
    "key": "hakone_izu_luxury_detached_villa",
    "title": "2. 箱根＆伊豆・竹林と早川渓谷のせせらぎに癒やされる極上の数寄屋離れ",
    "timing": "通年（都心からロマンスカー・新幹線で約1時間の別天地）",
    "desc": "名建築家が手掛けた数寄屋造りの数々。宮ノ下・強羅・仙石原の静寂な森に佇む名門離れ宿。箱根十七湯の美肌温泉を独占。伊豆・修善寺の竹林小径沿いの老舗旅館別邸。相模湾と駿河湾の朝獲れ海鮮を部屋食で味わう贅沢。",
    "spots": "箱根・強羅花壇、金乃竹 仙石原、修善寺温泉 あさば（能舞台を望む名旅館）",
    "access": "小田急ロマンスカー「箱根湯本駅」または東海道新幹線「三島駅」よりタクシー・送迎車。",
    "tip": "「強羅花壇」は旧閑院宮別邸跡地に建ち、伝統的な和の美とモダンな機能性、ミシュラン星付き級の本格懐石料理が世界中のセレブに愛されています。"
  },
  {
    "key": "kansai_tokai_private_onsen_villa",
    "title": "3. 有馬温泉＆飛騨高山・日本最古の名湯「金泉」と飛騨牛を味わう離れ別邸",
    "timing": "通年（有馬の紅葉・高山の古い町並みと雪景色）",
    "desc": "鉄分と塩分が濃厚な有馬温泉の「金泉」を客室専用露天風呂に贅沢に引湯した離れ宿。飛騨高山の奥座敷・福地温泉の囲炉裏付き古民家離れ。A5等級飛騨牛の炭火焼きや神戸牛のしゃぶしゃぶ。専属仲居によるきめ細やかなおもてなし。",
    "spots": "有馬温泉 欽山（大人の隠れ家料亭旅館）、中の坊 瑞苑、奥飛騨温泉郷 隠庵 ひだ路",
    "access": "新神戸駅またはJR高山駅より車・送迎バス。",
    "tip": "有馬温泉の離れ宿では、赤褐色の濃厚な金泉と無色透明の炭酸泉・銀泉の両方を客室で入り比べできる贅沢なプランが用意されている宿もあります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 text-white p-8 md:p-14 shadow-2xl border border-amber-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-amber-500 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            ALL DETACHED ONSEN VILLA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【全室離れ・源泉かけ流し露天風呂付き隠れ家宿】大人の静寂＆名門温泉割烹 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            門をくぐれば、回廊の先に佇む独立した「離れ」の客室。24時間いつでも好きな時に湯浴みができる源泉かけ流しの専用露天風呂。部屋出しの本格京懐石やブランド牛尽くし。チェックインからアウトまで誰にも会わない究極のプライベートステイへ。
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
              className="bg-white border border-amber-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-amber-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    💎 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">👑 代表的な宿・建築の特徴</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <span className="font-bold text-stone-950 block text-[11px]">🛥️ アクセス＆送迎案内</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">✨ 極上ステイを叶えるポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選プレミアム宿カード */}
              <div className="space-y-4 pt-4 border-t border-amber-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-stone-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの最高峰宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-amber-900 bg-amber-100/70 border border-amber-300 px-3 py-1 rounded-full">
                    極上プレミアム
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-amber-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-stone-100 border-b border-stone-200">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-stone-950/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-950 line-clamp-2">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-950 bg-white hover:bg-stone-50 border border-stone-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
