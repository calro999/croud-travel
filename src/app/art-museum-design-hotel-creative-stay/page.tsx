import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【アート・美術館巡り＆デザインホテル】感性を研ぎ澄ますミュージアムステイ 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "アートと建築に浸るクリエイティブな休日！美術館併設ホテル＆デザイナーズホテル完全特化！金沢・直島・箱根・京都、有名建築家が手掛けた空間、現代アートに囲まれる客室、美術館ナイトツアー付き宿を徹底解説。",
  keywords: ["art-museum-design-hotel-creative-stay", "女性一人旅", "ソロ活", "ご褒美ステイ", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["art-museum-design-hotel-creative-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for art-museum-design-hotel-creative-stay", e);
  }
  return {};
}

export default function WomenSoloRetreatHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kanazawa_art_craft_design_hotel",
    "title": "1. 金沢・金沢21世紀美術館〜工芸アートホテル（伝統工芸と現代アートの融合）",
    "timing": "通年（企画展の入れ替え時期・秋の金沢アートイベント）",
    "desc": "レアンドロ・エルリッヒの「スイミング・プール」で有名な「金沢21世紀美術館」至近。客室ごとに異なる現代アーティストの作品が展示されたアートホテル。九谷焼や金箔、加賀友禅の意匠を取り入れたモダンインテリア。",
    "spots": "金沢21世紀美術館、KUMU 金沢 by THE SHARE HOTELS、HOTEL KANAZAWA、KAMU kanazawa（私設現代アート美術館）",
    "access": "JR金沢駅よりバス・徒歩約10〜15分。",
    "tip": "金沢の街中に点在する私設現代美術館「KAMU kanazawa」は、パスポートを購入すると複数の展示スペースを歩いて巡ることができ、街歩きアート散策に最適です。"
  },
  {
    "key": "hakone_art_museum_resort_stay",
    "title": "2. 箱根仙石原〜ポーラ美術館・彫刻の森（森の美術館と自然派デザインリゾート）",
    "timing": "通年（新緑の美術館散策・秋のススキ草原とアート）",
    "desc": "印象派から現代アートまで約1万点を収蔵する「ポーラ美術館（森の遊歩道）」。「箱根ラリック美術館」「彫刻の森美術館」。ブナの原生林に抱かれたデザイナーズリゾート。客室温泉露天風呂から望む箱根外輪山。",
    "spots": "ポーラ美術館、箱根ラリック美術館（オリエント急行カフェ）、彫刻の森美術館、箱根ガラスの森美術館",
    "access": "箱根登山バス「仙石案内所」または強羅駅より路線バス運行。",
    "tip": "ポーラ美術館の「森の遊歩道」はブナやヒメシャラの森を歩く全長1kmの散策路で、鳥のさえずりを聞きながら点在する野外彫刻を鑑賞できます。"
  },
  {
    "key": "kyoto_curated_art_hotel_stay",
    "title": "3. 京都・新世代アートギャラリーホテル（若手アーティストの作品と暮らすステイ）",
    "timing": "通年（京都アンデパンダン展やアートフェアKYOTO）",
    "desc": "ホテルのロビーや客室がそのままギャラリーになっているキュレーションホテル。新進気鋭の現代アーティストが客室壁画を直接手掛けた特別なコンセプトルーム。地下に本格アートスタジオやカフェラウンジを併設。",
    "spots": "Node Hotel（京都四条西洞院）、K庵、BnA Alter Museum（河原町）、アンテルーム京都",
    "access": "地下鉄四条駅・烏丸駅または京都駅よりアクセス。",
    "tip": "「Node Hotel」では、非公開のプライベートコレクション（ゲルハルト・リヒターや荒木経惟など）が館内随所に飾られており、まるでアートコレクターの自宅に招かれたような時間を過ごせます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-rose-950 via-pink-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-rose-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-rose-300 to-pink-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            ART & DESIGN HOTEL GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【アート・美術館巡り＆デザインホテル】感性を研ぎ澄ますミュージアムステイ 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-pink-100/90 leading-relaxed">
            空間そのものがひとつの芸術作品。安藤忠雄や坂茂などの名建築家が手掛けた「アート＆デザインホテル」。直島ベネッセハウス、金沢の工芸アートホテル、箱根のポーラ美術館至近宿。感性を刺激し、日常を忘れさせてくれる美の旅へ。
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
              className="bg-white border border-rose-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-rose-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-0.5 rounded-full uppercase">
                    🌸 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-rose-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-200 space-y-1.5">
                  <span className="font-bold text-pink-950 block text-[11px]">📍 おすすめスポット＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">💡 ひとり旅を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選ソロステイ宿カード */}
              <div className="space-y-4 pt-4 border-t border-rose-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-rose-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
                    女性歓迎プラン
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-rose-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-rose-50 border-b border-rose-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-rose-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-rose-300 px-2 py-0.5 rounded border border-rose-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-rose-950 line-clamp-2">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-rose-950 bg-white hover:bg-rose-50 border border-rose-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
