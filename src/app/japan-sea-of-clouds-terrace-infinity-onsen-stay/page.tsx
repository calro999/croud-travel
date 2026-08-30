import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【雲海テラス＆天空インフィニティ温泉宿】トマム・竜王・秩父・竹田城 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "雲の上に浮かぶ奇跡の絶景完全特化！星野リゾート トマム「雲海テラス」、長野SORA terrace、兵庫「天空の城・竹田城跡」、埼玉「秩父ミューズパーク」、早朝雲海ツアーと天空インフィニティ露天風呂宿を徹底解説。",
  keywords: ["japan-sea-of-clouds-terrace-infinity-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-sea-of-clouds-terrace-infinity-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-sea-of-clouds-terrace-infinity-onsen-stay", e);
  }
  return {};
}

export default function ScenicViewHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tomamu_ryuo_cloud_terrace_stay",
    "title": "1. 北海道・トマム＆長野・竜王SORA terrace（雲の上を歩くような空中デッキ）",
    "timing": "グリーンシーズン：5月中旬〜10月中旬（発生確率約40〜60%）",
    "desc": "ゴンドラで標高1,088mへ登る「星野リゾート トマム 雲海テラス」。せり出す展望デッキ「クラウドウォーク」や雲の形をした巨大ハンモック。標高1,770mの「竜王マウンテンリゾート SORA terrace」の夕陽と雲海。",
    "spots": "トマム雲海テラス（クラウドウォーク・てんぼうかふぇ）、竜王SORA terrace（SORA terrace cafe）、志賀高原",
    "access": "JR石勝線「トマム駅」、長野電鉄「湯田中駅」よりシャトルバス。",
    "tip": "前日の夜に雨が降り、翌朝風がなく晴れ予報の日は、放射冷却によって高確率でダイナミックな雲海が発生します。"
  },
  {
    "key": "takeda_castle_sky_ruins_stay",
    "title": "2. 兵庫・竹田城跡〜立雲峡（「日本のマチュピチュ」朝霧に浮かぶ天空の山城）",
    "timing": "秋期限定：9月下旬〜12月上旬（特に10月〜11月の早朝がベストシーズン）",
    "desc": "標高353mの古城山山頂に築かれた国の史跡「竹田城跡」。円山川から立ち上る川霧が城跡を包み込み、まるで雲の上に浮かんでいるかのような幻想風景。対岸の「立雲峡（りつうんきょう）」展望台からの全景撮影。",
    "spots": "竹田城跡（天守台・南千畳）、立雲峡（第1〜第3展望台）、竹田城下町（寺町通り・古民家ホテル）",
    "access": "JR播但線「竹田駅」下車。北近畿豊岡道「和田山IC」より約10分。",
    "tip": "立雲峡の第1展望台へは駐車場から登山道を約30分歩くため、懐中電灯とトレッキングシューズを用意して日の出前に登りましょう。"
  },
  {
    "key": "chichibu_bisei_sky_onsen_stay",
    "title": "3. 埼玉・秩父盆地雲海（都心から西武特急で約80分の雲海ビュースポット）",
    "timing": "春・秋：4月〜5月、10月〜11月（発生率高）",
    "desc": "秩父盆地特有の地形と荒川の水蒸気が生み出す「秩父雲海」。秩父ミューズパーク展望台や三峯神社から見下ろす街明かりが透ける工場夜景雲海。雲海を眺められる客室露天風呂や山頂展望温泉。",
    "spots": "秩父ミューズパーク展望台、美の山公園（国民休養地）、三峯神社（遥拝殿）、羊山公園",
    "access": "西武池袋線「西武秩父駅」より車・バスで約15〜20分。",
    "tip": "秩父ミューズパークでは、早朝の雲海に街の工場や電波塔の光が透過する「夜景雲海」が全国の写真愛好家に大人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SEA OF CLOUDS & SKY INFINITY GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【雲海テラス＆天空インフィニティ温泉宿】トマム・竜王・秩父・竹田城 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            朝起きると、そこは一面の白い雲の海「雲海リゾート」。ゴンドラで登るトマムの雲海テラス、北アルプスに沈む夕陽と雲海を望むSORA terrace、朝霧に浮かぶ天空の城・竹田城跡。雲を見下ろしながら浸かる天空露天風呂へ。
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
