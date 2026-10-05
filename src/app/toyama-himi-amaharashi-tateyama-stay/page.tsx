import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/toyama-himi-amaharashi-tateyama-stay/" },
  title: "【富山・氷見＆雨晴海岸・立山連峰】海越しに望む3000m立山連峰・氷見寒ブリ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界屈指の絶景・海越しにそびえる立山連峰と海の幸王国・富山氷見エリア完全特化！義経伝説の雨晴海岸（女岩）、氷見漁港直送「氷見寒ブリ・白えび」、ひみ番屋街、氷見温泉郷のオーシャンビュー美肌宿を徹底解説。",
  keywords: ["富山", "氷見", "雨晴海岸", "立山連峰", "海越しに望む3000m立山連峰", "氷見寒ブリ宿", "温泉宿"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["toyama-himi-amaharashi-tateyama-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for toyama-himi-amaharashi-tateyama-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "himi_winter_yellowtail_inn_stay",
    "title": "1. 氷見漁港〜氷見寒ブリ・氷見うどん（富山湾の冬の王者を味わい尽くす）",
    "timing": "冬期（11月下旬〜2月の「ひみ寒ぶり宣言」期間は極上）",
    "desc": "日本屈指の好漁場・富山湾の定置網で水揚げされる「ひみ寒ぶり」。丸々と太り、脂が乗りに乗った大トロの刺身、熱々のブリしゃぶ、旨味が染み渡るブリ大根。手延べならではの強いコシと滑らかな喉越しが特徴の「氷見うどん」。",
    "spots": "ひみ番屋街（氷見漁港場外市場）、氷見漁港魚市場食堂（朝獲れ海鮮丼）、氷見温泉郷総湯、氷見牛専門店",
    "access": "JR氷見線「氷見駅」よりバス約5分。能越自動車道「氷見IC」より約8分。",
    "tip": "「ひみ寒ぶり宣言」が出された期間の寒ブリは、重さや形、脂の乗りなど厳しい基準をクリアした証明書が付けられ、日本一と称される極上の旨味を誇ります。"
  },
  {
    "key": "amaharashi_tateyama_view_stay",
    "title": "2. 雨晴海岸〜女岩・義経岩（海越しに3000m立山連峰を望む奇跡のパノラマ）",
    "timing": "通年（特に空気が澄んで立山連峰が白銀に染まる12月〜2月の早朝は神々しい美しさ）",
    "desc": "白い砂浜と松林が続く「日本の渚百選・雨晴（あまはらし）海岸」。富山湾に浮かぶ小島「女岩」の背後に、標高3,000m級の立山連峰が壁のようにそびえ立つ世界でも数ヶ所しかない絶景。源義経がにわか雨の晴れるのを待った「義経岩」。",
    "spots": "道の駅雨晴（展望デッキ・カフェ）、雨晴海岸（女岩・義経岩）、JR氷見線（海沿いを走るローカル列車）",
    "access": "JR氷見線「雨晴駅」下車徒歩約5分。能越道「高岡北IC」より車約15分。",
    "tip": "道の駅雨晴の2階・3階展望デッキからは、JR氷見線のレトロな列車が海岸線と立山連峰をバックに駆け抜ける絶好の撮影スポットとなっています。"
  },
  {
    "key": "himi_banyagai_gourmet_stay",
    "title": "3. 氷見温泉郷〜富山湾一望の塩湯＆白えび・氷見牛（潮風薫る美肌の湯）",
    "timing": "通年（春のシロエビ漁解禁・夏の岩ガキ・秋ののどぐろ）",
    "desc": "約1500万年前の化石海水分が湧き出る「氷見温泉郷」。富山湾の水平線と朝日を望む露天風呂。富山湾の宝石と呼ばれる「白えび」の刺身や天ぷら。中山間地で育まれた上質な肉質のブランド黒毛和牛「氷見牛」。",
    "spots": "氷見温泉郷（海辺の露天風呂宿）、潮風通り（藤子不二雄Aまんがロード）、光禅寺",
    "access": "氷見市内・海岸線沿い。",
    "tip": "氷見温泉の源泉は塩分を多く含むため保温効果が非常に高く、湯冷めしにくいため「熱の湯」「子宝の湯」として親しまれています。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-emerald-950 to-teal-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HIMI & AMAHARASHI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【富山・氷見＆雨晴海岸・立山連峰】海越しに望む3000m立山連峰・氷見寒ブリ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed">
            富山湾の青い海の向こうに、標高3,000m級の北アルプス立山連峰が白銀に輝く奇跡のパノラマ「雨晴海岸」。冬の日本海の王者「氷見寒ブリ」の極上刺身とブリしゃぶ。潮風を感じる氷見温泉郷のナトリウム塩化物泉。富山湾のキトキトな美味に酔いしれる旅。
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
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-emerald-800 hover:from-teal-600 hover:to-emerald-700 rounded-xl shadow transition"
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
