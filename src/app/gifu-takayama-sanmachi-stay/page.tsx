import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【岐阜・飛騨高山】古い町並・宮川朝市＆飛騨牛尽くし極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "飛騨高山エリア完全特化！ミシュラン三つ星「さんまち通り（古い町並）」、宮川朝市、高山陣屋、飛騨牛にぎり寿司食べ歩きと飛騨高山温泉の老舗宿を徹底解説。",
  keywords: ["gifu-takayama-sanmachi-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["gifu-takayama-sanmachi-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for gifu-takayama-sanmachi-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "takayama_old_town",
    "title": "1. 上三之町・古い町並み（江戸時代の面影を残す黒木格子の町家と造り酒屋）",
    "timing": "通年（4月・10月の高山祭・冬の雪景色）",
    "desc": "国の重要伝統的建造物群保存地区「さんまち通り」。杉玉が下がる造り酒屋での地酒試飲や、みたらし団子、飛騨牛にぎり寿司の食べ歩き。夕暮れ時は提灯が灯り格別の風情に。",
    "spots": "上三之町・上二之町、高山陣屋（日本唯一現存の江戸幕府郡代役所）、中橋（赤い中橋）、舩坂酒造店",
    "access": "JR高山本線「高山駅」東口より徒歩約10〜12分。",
    "tip": "舩坂酒造店の中庭にあるコイン式日本酒サーバーで、名醸「深山菊」などを少しずつ飲み比べるのが人気です。"
  },
  {
    "key": "takayama_hidagyu_gourmet",
    "title": "2. 飛騨牛づくし美食ステイ（きめ細やかな霜降りA5飛騨牛ステーキ・朴葉味噌焼き）",
    "timing": "通年（冬の飛騨牛すき焼き・しゃぶしゃぶ）",
    "desc": "きめ細やかなサシと芳醇な香りが自慢の最高級黒毛和牛「飛騨牛」。飛騨高山温泉の名宿で、郷土の朴葉味噌（ほおばみそ）ステーキや、口の中でとろけるサーロインを個室で堪能。",
    "spots": "宮川朝市（毎朝開催・果物・漬物・民芸品）、陣屋前朝市、東山遊歩道（寺町散策）",
    "access": "高山駅より車・タクシーで約5分。",
    "tip": "「宮川朝市」で販売されている「おわら玉天」や焼きたてのみたらし団子は、高山の朝の定番名物です。"
  },
  {
    "key": "takayama_station_walk",
    "title": "3. 高山駅周辺〜白川郷アクセス拠点（温泉大浴場付きデザイナーズホテル）",
    "timing": "通年（冬の白川郷ライトアップ観光の拠点）",
    "desc": "JR高山駅および濃飛バスターミナル周辺。世界遺産・白川郷合掌造り集落への直行バス発着拠点として最適。最上階に展望露天風呂を備えたモダンホテルで快適な滞在。",
    "spots": "濃飛バスターミナル（白川郷行きバス約50分）、飛騨民俗村・飛騨の里、高山祭屋台会館",
    "access": "JR高山駅下車すぐ。名古屋駅から特急「ひだ号」で約2時間20分。",
    "tip": "白川郷へ向かう高速バスは予約制のため、宿泊予約と同時にバスチケットも確保しておくのが鉄則です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HIDA TAKAYAMA MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【岐阜・飛騨高山】古い町並・宮川朝市＆飛騨牛尽くし極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            出格子の町家と用水路が続く「飛騨の小京都・高山」。朝の宮川沿いで地元のおばあちゃんと会話を楽しむ朝市、芳ばしい香りの飛騨牛串焼き。歴史と木の温もりに包まれる名宿へ。
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
