import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【長野・白馬＆小谷・栂池高原】北アルプス白馬三山パノラマ・テラス＆信州そば宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界水準のマウンテンリゾート・信州白馬＆栂池エリア完全特化！白馬岩岳「白馬マウンテンハーバー（絶景テラス）」、栂池自然園高層湿原、八方尾根トレッキング、白馬八方温泉（日本屈指の高アルカリ温泉）、名物「信州そば・信州牛宿」を徹底解説。",
  keywords: ["nagano-hakuba-tsugaike-alps-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagano-hakuba-tsugaike-alps-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagano-hakuba-tsugaike-alps-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hakuba_mountain_resort_stay",
    "title": "1. 白馬岩岳〜白馬マウンテンハーバー・八方尾根（北アルプス絶景天空テラス）",
    "timing": "通年（グリーンシーズン：4月下旬〜11月中旬・冬期：スキーリゾート）",
    "desc": "標高1,289mの白馬岩岳山頂に張り出す絶景テラス「HAKUBA MOUNTAIN HARBOR」。白馬三山（白馬岳・杓子岳・白馬鑓ヶ岳）の大パノラマ。巨大ブランコ「ヤッホー！スウィング」。八方尾根ゴンドラで行く八方池トレッキング。",
    "spots": "白馬マウンテンハーバー（THE CITY BAKERY）、八方尾根（八方池・うさぎ平）、白馬ジャンプ競技場、白馬八方温泉（みみずくの湯・八方の湯）",
    "access": "JR大糸線「白馬駅」よりバス・車約10分。長野駅より特急バス「白馬線」で約70分。",
    "tip": "八方尾根の「八方池（標高2,060m）」は、無風の早朝に訪れると、池の水面に逆さ白馬連峰が映し出される息を呑む絶景が広がります。"
  },
  {
    "key": "tsugaike_otari_onsen_stay",
    "title": "2. 栂池自然園〜栂池パノラマウェイ（高山植物の楽園と秘湯小谷温泉）",
    "timing": "グリーンシーズン：6月中旬〜10月下旬（初夏のミズバショウ・秋の紅葉）",
    "desc": "ゴンドラとロープウェイを乗り継ぐ「栂池パノラマウェイ」で行く標高2,000mの「栂池自然園（日本有数の高層湿原）」。木道が整備された園内に咲く数百種類の高山植物。武田信玄の隠し湯と伝わる秘湯「小谷（おたり）温泉」。",
    "spots": "栂池自然園（ミズバショウ湿原・浮島湿原・展望湿原）、栂池パノラマウェイ、小谷温泉（熱泉荘・山田旅館）",
    "access": "白根・白馬駅より路線バス約25〜30分。",
    "tip": "栂池自然園の最奥「展望湿原」からは、白馬大雪渓を目の前に望む圧倒的な迫力の山岳パノラマが楽しめます。"
  },
  {
    "key": "hakuba_shinshu_soba_wagyu_stay",
    "title": "3. 信州名物「手打ちそば」＆信州プレミアム牛（北アルプスの雪解け水が育む美味）",
    "timing": "通年（秋の新そば・冬の熱々そばがき鍋）",
    "desc": "北アルプスの清らかな雪解け水で締める風味豊かな「信州手打ちそば」。長野県が誇るブランド黒毛和牛「信州プレミアム牛」の陶板焼き。小谷村名物の「雪中キャベツ」や天然イワナの塩焼き、地酒「大雪渓」。",
    "spots": "白馬村・小谷村の手打ちそば店（りき・利根川）、道の駅小谷、山岳オーベルジュ",
    "access": "白馬・小谷エリア。",
    "tip": "道の駅小谷では、源泉かけ流しの天然温泉「深山の湯」が併設されており、かまど炊きのご飯と信州そばのセットがドライブ客に大人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HAKUBA & TSUGAIKE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【長野・白馬＆小谷・栂池高原】北アルプス白馬三山パノラマ・テラス＆信州そば宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            残雪と新緑、錦秋の三段紅葉が輝く北アルプス白馬連峰「白馬＆小谷・栂池高原」。白馬岩岳山頂の絶景テラス「HAKUBA MOUNTAIN HARBOR」。標高2,000mの高層湿原「栂池自然園」。pH11を超える美肌の白馬八方温泉と信州グルメを味わう山岳リゾートの旅。
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
