import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【夜空の芸術】冬の雪上花火＆湖畔温泉ホテル 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "澄んだ冬空に響く大迫力の轟音！山梨・河口湖冬花火、静岡・熱海海上花火大会（冬の部）、岐阜・下呂温泉花火ミュージカル、栃木・奥日光中禅寺湖など、客室や露天風呂から花火を仰ぐ人気宿を徹底解説。",
  keywords: ["winter-snow-fireworks-festivals", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["winter-snow-fireworks-festivals"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for winter-snow-fireworks-festivals", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "lake_kawaguchi_winter_fireworks",
    "title": "1. 山梨・河口湖畔（富士山と冬花火の共演！湖畔に広がる光のファンタジー）",
    "timing": "開催期間：1月中旬〜2月中旬の毎週末（約20分間の打ち上げ）",
    "desc": "雪化粧の富士山を背景に、河口湖の大池公園・畳岩・八木崎公園の3箇所から一斉に打ち上がる冬花火。湖畔の温泉旅館なら、客室の窓や展望露天風呂から真正面に大輪の花火を鑑賞できます。",
    "spots": "河口湖大池公園（メイン観覧席）、八木崎公園、河口湖オルゴールの森、富士急ハイランド",
    "access": "中央自動車道河口湖ICより約10分。新宿駅から直通バス・JR特急富士回遊。",
    "tip": "花火の打ち上げ開始は20:00から。夕食を18:00スタートにして、食後に部屋のベランダや露天風呂から鑑賞するのがベストです。"
  },
  {
    "key": "atami_winter_fireworks",
    "title": "2. 静岡・熱海温泉（すり鉢状の熱海湾に響く！大迫力の熱海海上冬花火）",
    "timing": "開催期間：12月・1月・2月の特定日（歴史ある名物花火）",
    "desc": "三方を山に囲まれた熱海湾の地形が天然のスタジアム音響を生み出す熱海海上花火大会。フィナーレを飾る「大空中ナイアガラ」は銀色の閃光が夜空と海面を埋め尽くす圧巻のスケール。",
    "spots": "熱海サンビーチ、親水公園ムーンテラス、熱海城（展望台）、来宮神社",
    "access": "東海道新幹線で東京駅から熱海駅まで直通約45分。",
    "tip": "熱海サンビーチ沿いのオーシャンビューホテルを予約すれば、大混雑の海岸に出ることなくお部屋から大迫力の花火を独占できます。"
  },
  {
    "key": "gero_winter_fireworks",
    "title": "3. 岐阜・下呂温泉（音楽と光のシンクロ！冬の下呂温泉花火ミュージカル）",
    "timing": "開催期間：12月〜3月の毎週土曜日（冬花火物語）",
    "desc": "日本三名泉・下呂温泉の益田川河川敷で打ち上がる冬花火。最新ヒット曲やクリスマスソングに合わせて打ち上がる花火ミュージカルは感動的。飛騨牛料理と美肌の湯を堪能しながら冬の夜を満喫。",
    "spots": "益田川河川敷（花火打ち上げ場所）、下呂温泉合掌村、噴泉池（足湯）、いでゆ朝市",
    "access": "JR高山本線特急「ひだ」で名古屋駅から下呂駅まで約1時間40分。",
    "tip": "益田川沿いに建つ老舗旅館の川側客室なら、温かいお部屋にいながら音楽とともに打ち上がる花火を特等席で楽しめます。"
  },
  {
    "key": "lake_chuzenji_winter_fireworks",
    "title": "4. 栃木・奥日光中禅寺湖＆湯元温泉（静寂の雪原と湖畔に打ち上がる幻想冬花火）",
    "timing": "開催期間：1月下旬〜2月上旬（奥日光湯元温泉雪まつり冬花火）",
    "desc": "標高1,200mを超える奥日光。凍てつく静寂の中、中禅寺湖や湯元温泉の雪原から夜空へ放たれる冬花火。乳白色の濃厚な硫黄泉で温まり、名物の湯波（ゆば）料理を味わう奥日光の冬籠り。",
    "spots": "中禅寺湖畔、華厳の滝（冬の氷瀑）、湯ノ湖、日光湯元ビジターセンター",
    "access": "JR日光駅・東武日光駅より東武バス「湯元温泉行き」で約75分。",
    "tip": "湯元温泉街のかまくら雪あかりと冬花火の組み合わせが幻想的。道路が凍結するため冬用タイヤまたは路線バスが必須です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            WINTER FIREWORKS
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【夜空の芸術】冬の雪上花火＆湖畔温泉ホテル 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            湿度が低くチリの少ない冬の夜空は、夏以上に花火が鮮明に輝く絶好の季節。雪山や湖畔を鮮やかに染める大輪の華を、温かい温泉露天風呂やお部屋の特等席から眺めるロマンチックな冬の夜。
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
