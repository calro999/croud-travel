import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【岩手・三陸宮古＆浄土ヶ浜】極楽浄土の白い奇岩・青の洞窟＆名物「瓶ドン」宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "三陸復興国立公園の白砂と青松の絶景・岩手宮古エリア完全特化！国の名勝「浄土ヶ浜」、さっぱ船で行く「青の洞窟（八戸穴）」、三陸鉄道リアス線、三陸の海の幸を牛乳瓶に詰めた名物「瓶ドン」、宮古トラウトサーモン宿を徹底解説。",
  keywords: ["iwate-sanriku-miyako-jodogahama-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["iwate-sanriku-miyako-jodogahama-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for iwate-sanriku-miyako-jodogahama-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "jodogahama_ocean_resort",
    "title": "1. 浄土ヶ浜〜青の洞窟・さっぱ船（白流紋岩と緑の松が織りなす極楽浄土）",
    "timing": "通年（夏の海水浴・春〜秋のさっぱ船遊覧・冬の澄んだ海）",
    "desc": "天和年間に霊鏡和尚が「さながら極楽浄土のごとし」と感嘆した国の名勝「浄土ヶ浜」。透き通る入り江にそびえる白い巨岩群。小型の「さっぱ船」に乗ってヘルメット着用で入る「青の洞窟（八戸穴）」のエメラルドグリーンの輝き。",
    "spots": "浄土ヶ浜（浄土ヶ浜ビジターセンター・奥浄土ヶ浜）、青の洞窟（さっぱ船遊覧）、みやこ浄土ヶ浜遊覧船「うみねこ丸」、御台場展望台",
    "access": "JR山田線・三陸鉄道「宮古駅」より路線バスで約20分。盛岡駅より特急バス「106急行」で約2時間。",
    "tip": "浄土ヶ浜マリンハウスから出航する「さっぱ船」では、ウミネコに餌をあげながら青の洞窟へ向かい、洞窟内の水面がコバルトブルーに輝く神秘的な光景を間近で見られます。"
  },
  {
    "key": "miyako_port_seafood_stay",
    "title": "2. 宮古港〜三陸鉄道リアス線（本州最東端の岬と復興のローカル線）",
    "timing": "通年（三陸鉄道イベント列車や紅葉シーズン）",
    "desc": "本州最東端に位置する「魹ヶ崎（とどがさき）灯台」。太平洋の水平線を望む三陸海岸の絶景。三陸鉄道リアス線（盛〜久慈間）の宮古駅。宮古港魚市場に水揚げされる新鮮な真鱈・毛ガニ・キチジ（キンキ）の贅沢な味わい。",
    "spots": "魹ヶ崎灯台（本州最東端の碑）、三陸鉄道宮古駅、宮古市魚市場、道の駅みやこ（シートピアなあど）",
    "access": "宮古市内。",
    "tip": "本州最東端の「魹ヶ崎」へは、姉吉キャンプ場から自然歩道を約1時間歩くトレッキングルートで、到達すると本州最東端訪問証明書が発行されます。"
  },
  {
    "key": "sanriku_bindon_salmon_stay",
    "title": "3. 元祖ご当地名物「瓶ドン」＆宮古トラウトサーモン（自分でご飯にかける海の宝石箱）",
    "timing": "通年（ウニ・イクラ・めかぶ・サーモンなど季節の魚介）",
    "desc": "牛乳瓶の中にウニ・イクラ・めかぶ・宮古トラウトサーモンを層状に詰め込んだ宮古発祥の新名物「瓶ドン」。ホカホカのご飯の上に自分で豪快に回しかけて食べる楽しさ。上品な脂が乗った宮古産トラウトサーモンのお造り。",
    "spots": "蛇の目本店（寿司割烹）、魚正、浄土ヶ浜レストハウス、宮古市内の郷土料理宿",
    "access": "宮古市全域。",
    "tip": "瓶ドンは店ごとに具材の組み合わせが異なり、春は焼きウニ、秋は生イクラ、冬はタラコなど、季節ごとの旬の味覚を楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            MIYAKO & JODOGAHAMA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【岩手・三陸宮古＆浄土ヶ浜】極楽浄土の白い奇岩・青の洞窟＆名物「瓶ドン」宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            まるで極楽浄土のような白流紋岩の奇岩と透明な海「浄土ヶ浜」。小型さっぱ船で潜入する神秘の青の洞窟。三陸鉄道リアス線の絶景オーシャンビュー車窓。ウニ・イクラ・サーモンがぎっしり詰まった名物「瓶ドン」を味わう三陸海岸の旅。
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
