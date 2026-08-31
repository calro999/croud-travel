import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【国宝五城＆現存十二天守を巡る宿】姫路城・松本城・犬山城・彦根城・松江城 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "江戸時代の天守がそのまま現存する奇跡の城郭めぐり完全特化！世界遺産「白鷺城・姫路城」、漆黒の国宝「松本城」、木曽川にそびえる最古の天守「犬山城」、琵琶湖畔の「彦根城」、宍道湖畔の「千鳥城・松江城」と城郭ビュー名宿を徹底解説。",
  keywords: ["japan-national-treasure-castle-heritage-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-national-treasure-castle-heritage-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-national-treasure-castle-heritage-stay", e);
  }
  return {};
}

export default function HistoryHeritageHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "himeji_matsumoto_castle_stay",
    "title": "1. 世界遺産・姫路城＆国宝・松本城（白鷺と烏の対比！白漆喰と黒漆塗り天守）",
    "timing": "通年（春の城郭桜まつり・秋の好古園紅葉ライトアップ）",
    "desc": "日本初の世界文化遺産に登録された「姫路城（白鷺城）」。五層六階の大天守と三つの小天守が渡櫓で結ばれた連立式天守。北アルプスを背景に漆黒の姿を堀の水面に映す「松本城（烏城）」。城郭を望む高層ホテルでの滞在。",
    "spots": "姫路城（大天守・百間廊下・お菊井戸）、好古園（日本庭園）、国宝松本城（埋橋・月見櫓）、松本縄手通り・中町通り",
    "access": "JR山陽新幹線「姫路駅」徒歩約15分、JR篠ノ井線「松本駅」徒歩約15分。",
    "tip": "松本城には戦国期の大天守に加えて平和な江戸初期に増築された開放的な「月見櫓」があり、武骨と優美が同居する唯一無二の構造です。"
  },
  {
    "key": "inuyama_hikone_castle_stay",
    "title": "2. 国宝・犬山城＆国宝・彦根城（木曽川の断崖と琵琶湖を望む名城）",
    "timing": "通年（犬山城下町の食べ歩き・彦根城玄宮園の虫聞き）",
    "desc": "木曽川沿いの小高い山に建つ日本最古の木造天守「犬山城（白帝城）」。最上階の廻縁から望む木曽川と濃尾平野の大パノラマ。井伊家三十五万石の居城「彦根城」と、天守を借景にした大名庭園「玄宮園」。",
    "spots": "国宝犬山城（天守・望楼・犬山城下町）、有楽苑（国宝茶室如庵）、国宝彦根城（天守・天秤櫓・玄宮園）、夢京橋キャッスルロード",
    "access": "名鉄「犬山駅」徒歩約15分、JR東海道本線「彦根駅」徒歩約15分。",
    "tip": "犬山城下町では、国の登録有形文化財の町家をリノベーションしたカフェや食べ歩きスイーツ店が並び、着物姿での散策に最適です。"
  },
  {
    "key": "matsue_maruoka_heritage_castle_stay",
    "title": "3. 国宝・松江城＆現存天守群（堀川めぐりの遊覧船と宍道湖の夕陽）",
    "timing": "通年（春の桜とお城まつり・冬のこたつ遊覧船）",
    "desc": "千鳥が羽を広げたような千鳥破風が美しい「松江城（千鳥城）」。お城を囲む堀を小舟でめぐる「ぐるっと松江堀川めぐり」。現存最古級の野面積み石垣を持つ福井の「丸岡城」。松江しんじ湖温泉や芦原温泉での至福の湯浴み。",
    "spots": "国宝松江城（天守閣・祈祷札）、ぐるっと松江堀川めぐり、塩見縄手（武家屋敷・小泉八雲旧居）、丸岡城（日本最古級天守）",
    "access": "JR山陰本線「松江駅」よりバス約10分、JR北陸新幹線「芦原温泉駅」よりバス。",
    "tip": "松江城の堀川遊覧船は、低い橋をくぐる際に屋根が自動で下がるアトラクション性があり、冬は船内に「豆炭こたつ」が設置されます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            NATIONAL TREASURE CASTLE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【国宝五城＆現存十二天守を巡る宿】姫路城・松本城・犬山城・彦根城・松江城 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            幾多の戦火や天災を乗り越え、江戸の威容を今に伝える「現存十二天守」と「国宝五城」。白漆喰総塗籠の白鷺城・姫路城、北アルプスを背負う漆黒の松本城。天守のライトアップを客室や展望ラウンジから愛でる歴史浪漫の旅へ。
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

              {/* 歴史見どころ・アクセス・旅のコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要史跡＆名所</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 歴史探訪を深めるコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの歴史・名門宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    歴史探訪プラン
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
