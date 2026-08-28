import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【熊本・黒川温泉】入湯手形＆渓流露天風呂めぐり極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "阿蘇・黒川温泉エリア完全特化！入湯手形での28露天風呂めぐり、川端通りの食べ歩き、囲炉裏料理と渓流沿いの隠れ家木造旅館を徹底解説。",
  keywords: ["kumamoto-kurokawa-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kumamoto-kurokawa-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kumamoto-kurokawa-onsen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kurokawa_river",
    "title": "1. 川端通り・温泉街中心部（田の原川のせせらぎと風情ある木造旅館街）",
    "timing": "通年（冬は竹灯籠「湯あかり」開催）",
    "desc": "黒川温泉の中心を流れる田の原川沿い。石段や小径に風情ある旅館が並び、浴衣姿で歩くだけで旅情に浸れます。川のせせらぎを間近に感じる渓流露天風呂と、肥後赤牛や旬の山菜会席を満喫。",
    "spots": "川端通り、ふれあい通り、地蔵堂（首なし地蔵）、べっちん館（入湯手形購入）",
    "access": "熊本空港より車で約80分。博多駅・熊本駅より直行高速バス運行。",
    "tip": "中心部の「どらどら」で味わう出来立ての「どら焼きアイス」や地酒ソフトクリームが食べ歩きに大人気です。"
  },
  {
    "key": "kurokawa_okugomori",
    "title": "2. 奥黒川・静寂の山あいの里（全室離れ・客室専用露天風呂のおこもりステイ）",
    "timing": "通年（新緑・秋の紅葉・冬の雪景色）",
    "desc": "温泉街の中心部から少し離れた静かな森の中に佇む「奥黒川」。広大な敷地に数室限定の独立型ヴィラや離れが点在し、専用の源泉かけ流し露天風呂で誰にも邪魔されない至福の時間を過ごせます。",
    "spots": "平野台親水公園（恋人の聖地・阿蘇パノラマ展望台）、小萩山稲荷神社、夫婦滝",
    "access": "黒川温泉バス停より各旅館の無料送迎車で約5〜10分。",
    "tip": "夕暮れ時に平野台展望台へドライブすると、阿蘇五岳と祖母連山を赤く染める夕日パノラマが楽しめます。"
  },
  {
    "key": "kurokawa_tegata",
    "title": "3. 入湯手形露天風呂めぐり（洞窟風呂・立ち湯・滝見露天風呂の個性派湯めぐり）",
    "timing": "通年（入湯手形1枚で3箇所の露天風呂に入浴可能）",
    "desc": "黒川温泉の代名詞「入湯手形（大人1,500円）」。混浴大露天風呂や、深さ1.5mの「立ち湯」、青い光が差し込む「洞窟風呂」、滝を眺める「滝見風呂」など、趣の異なる名湯を心ゆくまで満喫。",
    "spots": "いこい旅館（日本名湯秘湯百選・立ち湯）、山みず木（幽谷の渓流露天）、黒川荘（びょうぶ岩露天）",
    "access": "各旅館へは温泉街巡回バスや徒歩でアクセス。",
    "tip": "入湯手形を使い終わった後は、旅の記念に持ち帰るか、温泉街の地蔵堂に奉納して旅の安全を祈願できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KUROKAWA ONSEN MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【熊本・黒川温泉】入湯手形＆渓流露天風呂めぐり極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            杉木立に囲まれた山あいの渓流沿いに、統一された黒と木目の落ち着いた旅館が連なる「黒川温泉」。入湯手形を首から下げて下駄を鳴らし、個性豊かな露天風呂を巡る極上の癒やし旅。
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
