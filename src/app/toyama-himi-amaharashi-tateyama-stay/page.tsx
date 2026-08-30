import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【富山・氷見＆雨晴海岸】富山湾越し立山連峰・女岩パノラマ＆ひみ寒ぶり宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "海越しの3000m級立山連峰パノラマ・富山氷見＆雨晴海岸エリア完全特化！万葉集に詠まれた「雨晴海岸・女岩」、氷見温泉郷の海辺露天風呂、ブランド魚「ひみ寒ぶり・白えび・富山湾鮨」、氷見うどん宿を徹底解説。",
  keywords: ["toyama-himi-amaharashi-tateyama-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
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
    "key": "amaharashi_tateyama_view_stay",
    "title": "1. 雨晴海岸〜女岩・義経岩（海越しに3000m級の立山連峰を仰ぐ世界屈指の絶景）",
    "timing": "通年（特に11月〜3月の冬期は雪を被った立山連峰が最も鮮明に見える）",
    "desc": "源義経が奥州へ落ち延びる際に雨宿りをした伝説が残る「雨晴海岸（あまはらしかいがん）」。富山湾に浮かぶ「女岩」と、海越しに雪化粧した立山連峰が連なる世界的にも稀有な風景。「道の駅雨晴」の展望デッキとJR氷見線。",
    "spots": "雨晴海岸（女岩・義経岩）、道の駅雨晴（展望デッキ・カフェ）、JR氷見線（キハ40系・絶景車窓）",
    "access": "JR氷見線「雨晴駅」下車徒歩約5分。能越道「高岡北IC」より約15分。",
    "tip": "冬の早朝、氷点下の寒さの中で海面から水蒸気が立ち上る「気嵐（けあらし）」と立山連峰の朝焼けが重なる光景は圧巻の一言です。"
  },
  {
    "key": "himi_seaside_onsen_luxury",
    "title": "2. 氷見温泉郷〜ひみ番屋街・氷見漁港（ナトリウム塩化物泉と天然の生簀）",
    "timing": "通年（海のミネラルを豊富に含むあたたまりの湯）",
    "desc": "富山湾沿いに宿が連なる「氷見温泉郷」。化石海水と呼ばれる塩分濃度の高い温泉は、湯上がり後もポカポカが持続する美肌・保温の名湯。氷見漁港直送の朝獲れ魚介が並ぶ「ひみ番屋街」での買い物や足湯。",
    "spots": "ひみ番屋街（氷見温泉郷総湯・鮮魚市場）、氷見漁港（朝セリ見学・魚市場食堂）、氷見市海浜植物園",
    "access": "JR氷見線「氷見駅」下車。加越能バス運行。",
    "tip": "「氷見漁港 魚市場食堂」では、朝獲れたばかりの地魚が器からこぼれる「氷見浜丼（あら汁付き）」が早朝から楽しめます。"
  },
  {
    "key": "himi_kanburi_sushi_gourmet",
    "title": "3. 日本一の美味「ひみ寒ぶり」＆富山湾鮨（寒ブリ宣言が出される冬の王者）",
    "timing": "冬期限定：11月下旬〜2月（「ひみ寒ぶり宣言」期間）",
    "desc": "富山湾の定置網で獲れ、厳しい重量・品質基準をクリアした「ひみ寒ぶり」。全身にきめ細かく脂が乗り、とろけるような「ブリ刺し」「ブリしゃぶ」「ブリ大根」。「富山湾の宝石」白えび、手延べ「氷見うどん」、ブランド「氷見牛」。",
    "spots": "ひみ寒ぶり料理指定旅館、富山湾鮨提供店、高澤酒造場（曙）",
    "access": "氷見市内・氷見温泉郷。",
    "tip": "「富山湾鮨」は、富山湾の朝獲れ地魚10貫と特製汁物がセットになった富山県の公式ブランド寿司で、職人の技を堪能できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HIMI & AMAHARASHI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【富山・氷見＆雨晴海岸】富山湾越し立山連峰・女岩パノラマ＆ひみ寒ぶり宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            標高3,000mの白い立山連峰が海の上にそびえ立つ奇跡の絶景「富山・雨晴海岸＆氷見」。富山湾の定置網から揚がる最高峰「ひみ寒ぶり」。美肌の塩化物泉・氷見温泉郷に浸かりながら、富山湾の海の幸と雄大な山並みに心を奪われる旅。
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
