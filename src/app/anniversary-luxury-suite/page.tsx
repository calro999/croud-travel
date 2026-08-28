import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【記念日・誕生日】客室露天風呂＆贅沢スイート極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "大切な記念日、プロポーズ、ご両親へのプレゼントに。箱根・伊豆の離れ露天風呂付き客室、京都の極上ラグジュアリーホテル、東京の高層階夜景スイートなど最高峰の宿泊体験を完全網羅。",
  keywords: ["anniversary-luxury-suite", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["anniversary-luxury-suite"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for anniversary-luxury-suite", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hakone_luxury",
    "title": "1. 神奈川・箱根温泉（全室客室露天風呂付きの大人の隠れ宿）",
    "timing": "通年おすすめ（四季折々の景色）",
    "desc": "強羅や仙石原の静かな森に佇む、プライベート感を極めた離れやスイートルーム。美肌の天然温泉を客室で24時間気兼ねなく愉しみ、個室食事処や部屋食で極上の懐石料理を味わえます。",
    "spots": "箱根ガラスの森美術館、ポーラ美術館、芦ノ湖スカイライン（絶景ドライブ）、成川美術館",
    "access": "小田急ロマンスカーで新宿から箱根湯本まで直通約85分。タクシー・送迎で各宿へ。",
    "tip": "アニバーサリー特典（シャンパンサービス、ホールケーキ、花束手配など）がセットになった記念日専用プランの利用がスマートです。"
  },
  {
    "key": "izu_luxury",
    "title": "2. 静岡・伊豆修善寺＆伊豆高原（竹林の小径と森に包まれる極上ヴィラ）",
    "timing": "通年おすすめ（新緑・紅葉・避暑）",
    "desc": "伊豆の小京都・修善寺温泉や伊豆高原の別荘地。数千坪の敷地にわずか数室のみの贅沢な離れ宿が多く、広々とした専用テラスで森林浴や源泉かけ流し温泉を心ゆくまで堪能できます。",
    "spots": "修善寺温泉（竹林の小径・修禅寺・独鈷の湯）、城ヶ崎海岸、大室山、伊豆テディベア・ミュージアム",
    "access": "特急「踊り子号」で東京駅から修善寺駅まで直通約2時間。新幹線三島駅から伊豆箱根鉄道接続。",
    "tip": "チェックインからチェックアウトまで宿から一歩も出ずに過ごす「おこもりステイ」に最適。アロマエステ付きプランも女性に大人気です。"
  },
  {
    "key": "kyoto_luxury",
    "title": "3. 京都・東山祇園＆嵐山（伝統と洗練が融合する最高峰ラグジュアリー）",
    "timing": "通年おすすめ（桜・新緑・紅葉・雪景色）",
    "desc": "八坂の塔や鴨川を望む歴史的景観地区に佇むラグジュアリーホテル。京都の伝統美を取り入れたモダンな客室、専属コンシェルジュによるオーダーメイドな観光手配、ミシュラン星付きディナーが特別な日を彩ります。",
    "spots": "八坂神社、清水寺、祇園白川、高台寺（夜間ライトアップ）、南禅寺水路閣",
    "access": "JR京都駅からタクシーで約10〜15分。地下鉄東西線「東山駅」周辺。",
    "tip": "夕暮れ時に東山の街並みを一望できるルーフトップバーでのアペリティフ（食前酒）は記念日デートに最高の演出となります。"
  },
  {
    "key": "tokyo_luxury",
    "title": "4. 東京・高層階夜景ホテル（地上200mのパノラマビュー＆クラブラウンジ）",
    "timing": "通年おすすめ（記念日・サプライズ）",
    "desc": "東京タワーやレインボーブリッジ、摩天楼の夜景をベッドやバスルームから一望できる五つ星ホテル。アフタヌーンティーやカクテルを楽しめる専用クラブラウンジアクセス付きプランで極上のホテルステイを。",
    "spots": "東京タワー、六本木ヒルズ展望台（東京シティビュー）、銀座中央通り、お台場海浜公園",
    "access": "東京駅・品川駅・羽田空港から地下鉄・タクシーで10〜20分。",
    "tip": "予約時に「記念日宿泊」の旨を伝えると、高層階リクエストやメッセージプレートなどの細やかなおもてなしを受けられることがあります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            LUXURY ANNIVERSARY
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【記念日・誕生日】客室露天風呂＆贅沢スイート極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            誕生日、結婚記念日、特別なご褒美旅行。誰にも邪魔されない客室専用露天風呂、一流シェフが腕を振るう記念日ディナー、夜景を一望するクラブラウンジなど、感動の記念日ステイを叶える名宿をご紹介。
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
