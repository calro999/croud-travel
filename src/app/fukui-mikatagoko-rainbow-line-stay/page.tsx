import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【福井・三方五湖＆レインボーライン】天空テラス・五色水鏡＆三方口細うなぎ・若狭ふぐ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "水質と水深が異なる5つの奇跡の湖・福井三方五湖エリア完全特化！三方五湖レインボーライン山頂公園「天空の足湯・美浜テラス」、年縞博物館、名物「三方五湖口細うなぎ（天然うなぎ）」、冬の「若狭ふぐ・越前ガニ宿」を徹底解説。",
  keywords: ["fukui-mikatagoko-rainbow-line-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["fukui-mikatagoko-rainbow-line-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for fukui-mikatagoko-rainbow-line-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "mikatagoko_rainbow_resort_stay",
    "title": "1. レインボーライン山頂公園〜美浜テラス（天空の足湯から望む五色の水鏡）",
    "timing": "通年（春〜秋の爽快パノラマ・秋のバラ園・冬の澄んだ湖面）",
    "desc": "梅丈岳（ばいじょうだけ）山頂に広がる「レインボーライン山頂公園（天空テラス）」。リフト・ケーブルカーで登る山頂。三方五湖と日本海若狭湾を同時に見下ろす「天空の足湯」「ソファーテラス」。恋人の聖地（幸せの鐘・かわらけ投げ）。",
    "spots": "レインボーライン山頂公園（美浜テラス・若狭テラス・中央テラス・足湯）、三方五湖（三方湖・水月湖・菅湖・久々子湖・日向湖）",
    "access": "JR小浜線「美浜駅」または「三方駅」より車・タクシーで約15〜20分。舞鶴若狭道「若狭三方IC」より約15分。",
    "tip": "山頂公園の「美浜テラス」にある足湯に浸かりながら、五つの湖がそれぞれ異なる青色のグラデーションを描く絶景を眺める時間は至福のひとときです。"
  },
  {
    "key": "mikatagoko_unagi_gourmet_stay",
    "title": "2. 三方五湖名物「口細うなぎ」＆年縞博物館（7万年の奇跡の地層と天然鰻）",
    "timing": "通年（天然うなぎシーズン：5月〜11月）",
    "desc": "三方五湖の豊かなプランクトンとシジミを食べて育つ「口細青うなぎ（くちぼそうなぎ）」。口先が細く脂が乗って皮が柔らかい最高級天然鰻。7万年分の縞模様が堆積し年代測定の世界標準となった「福井県年縞（ねんこう）博物館」。",
    "spots": "うなぎ料理店（徳右衛門・源与門）、福井県年縞博物館（ステンドグラス状の年縞展示）、若狭三方縄文博物館",
    "access": "三方湖・水月湖周辺。",
    "tip": "「源与門（げんよもん）」などの老舗うなぎ店では、備長炭でじっくり香ばしく焼き上げた関西風地焼きのうな重が堪能できます。"
  },
  {
    "key": "wakasa_fugu_crab_winter_stay",
    "title": "3. 若狭の冬の王様「若狭ふぐ」＆越前ガニ（日本最北限のとらふぐ養殖地）",
    "timing": "冬期（11月〜3月は若狭ふぐ・越前ガニの最盛期）",
    "desc": "日本海の冷たい海水で身が引き締まり、プリプリとした歯ごたえと旨味が抜群の「若狭ふぐ（トラフグ）」。透き通るてっさ（刺身）、熱々のてっちり（鍋）、香ばしいひれ酒。冬の味覚の王者「越前ガニ（ズワイガニ）」との贅沢な競演。",
    "spots": "阿納・日向・世久見のふぐ料理民宿・旅館、みかた温泉きららの湯",
    "access": "若狭町・美浜町沿岸エリア。",
    "tip": "若狭ふぐは全国の有名フグ産地と比べてもリーズナブルに本場のとらふぐフルコースが堪能できるため、冬のグルメ旅行に絶大な人気を誇ります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            MIKATAGOKO & RAINBOW LINE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【福井・三方五湖＆レインボーライン】天空テラス・五色水鏡＆三方口細うなぎ・若狭ふぐ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            三方湖・水月湖・菅湖・久々子湖・日向湖が織りなす神秘の水鏡「国指定名勝・三方五湖」。レインボーライン山頂公園の天空テラスから見下ろす360度の大パノラマ。7万年の時を刻む水月湖の「年縞」。三方名物の口細うなぎと若狭ふぐを味わう若狭湾の旅。
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
