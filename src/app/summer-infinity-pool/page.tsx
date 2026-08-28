import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【夏休み・リゾート】絶景インフィニティプール＆オーシャンビュー宿ガイド ｜ 日本全国・旅宿クラウド",
  description: "空と海が溶け合う絶景！沖縄（恩納村・石垣島宮古島）、和歌山白浜、関東近郊（房総鴨川）でインフィニティプールやプール付き客室を完備した極上リゾートホテルを徹底比較。",
  keywords: ["summer-infinity-pool", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["summer-infinity-pool"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for summer-infinity-pool", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "okinawa_pool",
    "title": "1. 沖縄・恩納村（ビーチ直結＆県内屈指のラグジュアリープール）",
    "timing": "おすすめ時期：4月〜10月（真夏〜秋口）",
    "desc": "沖縄本島屈指の美しい海が広がる西海岸リゾート。サンセットを望むインフィニティプールやウォータースライダー付きキッズプール、プライベートビーチを併設した憧れのホテルが立ち並びます。",
    "spots": "万座毛、真栄田岬（青の洞窟）、恩納海浜公園ナビービーチ、琉球村",
    "access": "那覇空港から沖縄自動車道利用で車約50分。空港直行リムジンバスも多数運行。",
    "tip": "クラブラウンジ付き客室を予約すると、プールサイド専用バーでのカクテルタイムや専用チェックインなどワンランク上の滞在が楽しめます。"
  },
  {
    "key": "ishigaki_pool",
    "title": "2. 沖縄・石垣島＆宮古島（プライベートプール付き極上ヴィラステイ）",
    "timing": "おすすめ時期：3月〜11月",
    "desc": "東洋一と称される宮古ブルーや石垣島の透明度抜群の海。客室に専用プールを備えた独立型ヴィラなら、他の宿泊者を気にせず24時間いつでも泳ぎ、満天の星空を眺めるプライベートな休日を過ごせます。",
    "spots": "川平湾（石垣島）、与那覇前浜ビーチ（宮古島）、伊良部大橋、川平タバガー",
    "access": "羽田・関空・名古屋・福岡から石垣空港・宮古空港（下地島空港）へ直行便多数運航。",
    "tip": "レンタカーの早期確保が必須。夕暮れ時はヴィラのプールサイドでバーベキューや島野菜ディナーを楽しむプランが人気です。"
  },
  {
    "key": "shirahama_pool",
    "title": "3. 和歌山・南紀白浜温泉（白良浜一望＆天然温泉とプールの融合）",
    "timing": "おすすめ時期：6月〜9月",
    "desc": "白い砂浜が美しい白良浜まで徒歩すぐ。海を見下ろす高台のインフィニティプールやナイトプールが充実した温泉ホテルが多く、プールで遊んだ後はそのまま源泉かけ流し温泉でリフレッシュできます。",
    "spots": "白良浜海水浴場、アドベンチャーワールド、三段壁・千畳敷、白浜海中展望塔",
    "access": "南紀白浜空港より車で約10分（羽田から飛行機約70分）。JR特急くろしおで天王寺から約2時間。",
    "tip": "アドベンチャーワールド（パンダやサファリ）の観光と組み合わせたファミリー・カップル旅行に最適です。"
  },
  {
    "key": "shonan_chiba_pool",
    "title": "4. 関東近郊・房総半島＆鴨川（都心から車で90分のオーシャンリゾート）",
    "timing": "おすすめ時期：6月〜9月",
    "desc": "東京湾アクアラインで都心から快適アクセス。太平洋の水平線を望む海沿いのリゾートホテルでは、海風を感じる屋外プールや天然温泉スパが充実しており、週末の気軽なプチバカンスに最適です。",
    "spots": "鴨川シーワールド、マザー牧場、大山千枚田、城崎海岸（千葉）、守谷海水浴場",
    "access": "東京・横浜から車でアクアライン経由約80〜90分。JR特急わかしおで東京駅から安房鴨川まで約1時間50分。",
    "tip": "鴨川シーワールドのシャチパフォーマンス観賞とセットになった宿泊プランが子連れファミリーに大人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SUMMER RESORT
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【夏休み・リゾート】絶景インフィニティプール＆オーシャンビュー宿ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            どこまでも続く青い空と水平線。水面に身を委ねて夕日を眺めるインフィニティプールは夏の最高のご褒美。子連れファミリー歓迎の大型プールから大人のプライベートヴィラまで厳選紹介。
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
