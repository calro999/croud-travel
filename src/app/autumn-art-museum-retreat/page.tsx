import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【芸術の秋】名作アート鑑賞＆美術館リゾートホテル 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "感性を刺激する極上ステイ！香川・直島（ベネッセハウス）、神奈川・箱根（ポーラ美術館＆彫刻の森）、徳島・鳴門（大塚国際美術館）、石川・金沢（21世紀美術館）など、美術館に隣接・内包する人気アートホテルを徹底解説。",
  keywords: ["autumn-art-museum-retreat", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-art-museum-retreat"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-art-museum-retreat", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "naoshima_art",
    "title": "1. 香川・瀬戸内直島（美術館とホテルが一体化した現代アートの聖地）",
    "timing": "通年（瀬戸内海の穏やかな気候）",
    "desc": "安藤忠雄設計の「ベネッセハウス」をはじめ、草間彌生の「赤かぼちゃ・黄かぼちゃ」、家プロジェクトなど島全体が現代アートの宝庫。夜間も宿泊者限定で美術館を鑑賞できる特別な滞在が叶います。",
    "spots": "地中美術館、ベネッセハウス ミュージアム、草間彌生「黄かぼちゃ」、家プロジェクト（本村地区）、直島銭湯「I♥湯」",
    "access": "岡山・宇野港よりフェリーで約20分、高松港より約50分（宮浦港着）。",
    "tip": "地中美術館は完全日時指定予約制のため、宿泊予約と同時にチケットを確保するのが鉄則です。島内はレンタサイクル移動が快適。"
  },
  {
    "key": "hakone_art",
    "title": "2. 神奈川・箱根仙石原＆強羅（名画モネと大自然彫刻を巡る森の美術館ホテル）",
    "timing": "通年（秋のススキ草原と紅葉アート散策）",
    "desc": "モネの「睡蓮」を所蔵するポーラ美術館や、箱根ガラスの森美術館、彫刻の森美術館が集中する仙石原・強羅。森に溶け込むデザイナーズホテルや客室露天風呂付き宿で、アートと名湯を堪能できます。",
    "spots": "ポーラ美術館、彫刻の森美術館、箱根ガラスの森美術館、仙石原すすき草原、箱根ラリック美術館",
    "access": "新宿駅から小田急ロマンスカーで箱根湯本まで85分、箱根登山バスで仙石原方面へ接続。",
    "tip": "ポーラ美術館の「森の遊歩道」散策と館内レストランでの本格フレンチランチが人気コースです。"
  },
  {
    "key": "otsuka_art",
    "title": "3. 徳島・鳴門（世界26カ国の名画1,000余点を原寸大再現！大塚国際美術館）",
    "timing": "通年（鳴門海峡の渦潮鑑賞とセット）",
    "desc": "システィーナ礼拝堂天井画やモネの大睡蓮、最後の晩餐など西洋名画を陶板で原寸大再現した日本最大級の美術館。鳴門海峡のオーシャンビュー温泉リゾートに宿泊し、鳴門鯛フレンチや温泉を満喫。",
    "spots": "大塚国際美術館（鑑賞ルート約4km）、鳴門の渦潮（うずしおクルーズ）、鳴門公園千畳敷展望台",
    "access": "徳島空港より路線バス約30分。神戸・三宮から高速バスで「高速鳴門」まで約80分。",
    "tip": "美術館は広大なため鑑賞に最低3〜4時間必要。ホテルで入場券付きプランを予約するとスムーズに入館できます。"
  },
  {
    "key": "kanazawa_art",
    "title": "4. 石川・金沢（21世紀美術館と兼六園！伝統工芸と現代アートが交差する街）",
    "timing": "通年（秋の兼六園雪吊り・冬の味覚）",
    "desc": "レアンドロ・エルリッヒの「スイミング・プール」で有名な金沢21世紀美術館。兼六園や国立工芸館へも徒歩圏内。加賀友禅や九谷焼を館内に配したデザインホテルで金沢の美意識を五感で体感できます。",
    "spots": "金沢21世紀美術館、兼六園、国立工芸館、石川県立美術館（ル ミュゼ ドゥ アッシュ カフェ）、ひがし茶屋街",
    "access": "北陸新幹線「金沢駅」より城下まち金沢周遊バスで約10〜15分（広坂・21世紀美術館下車）。",
    "tip": "21世紀美術館の屋外展示作品（カラー・アクティビティ・ハウスなど）は夜間ライトアップされ幻想的です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ART & MUSEUM RETREAT
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【芸術の秋】名作アート鑑賞＆美術館リゾートホテル 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            名画や現代アートの世界に一日中浸り、夜は静かにアートブックを開く贅沢。美しい建築、庭園、美食ディナーと温泉を兼ね備えた、知的好奇心を満たす大人の文化リゾートへ。
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
