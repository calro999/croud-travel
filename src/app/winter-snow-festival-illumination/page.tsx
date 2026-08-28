import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【白銀の祭典】冬の雪まつり＆巨大かまくら温泉旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "幻想的な氷と雪のエンターテインメント！北海道さっぽろ雪まつり、秋田横手のかまくら、栃木奥日光湯西川温泉かまくら祭、青森十和田湖冬物語など、冬限定の雪まつりイベントと名湯宿を徹底解説。",
  keywords: ["winter-snow-festival-illumination", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["winter-snow-festival-illumination"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for winter-snow-festival-illumination", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "sapporo_snow_fest",
    "title": "1. 北海道・札幌（世界中が熱狂！さっぽろ雪まつり大雪像＆すすきの氷彫刻）",
    "timing": "開催期間：2月上旬（約1週間の開催）",
    "desc": "大通公園の1丁目から11丁目にわたって巨大雪像が並ぶ日本最大の雪の祭典。夜にはプロジェクションマッピングで雪像が鮮やかに彩られます。札幌市内の大浴場付きホテルやすすきのグルメを満喫。",
    "spots": "大通公園（大通会場）、すすきの（すすきの会場・氷の祭典）、つどーむ会場、もいわ山夜景",
    "access": "JR札幌駅・地下鉄大通駅周辺。新千歳空港から快速エアポートで約37分。",
    "tip": "夜のライトアップ鑑賞後は、札幌名物「味噌ラーメン」や「スープカレー」「夜パフェ（シメパフェ）」で温まるのが王道です。"
  },
  {
    "key": "yokote_kamakura",
    "title": "2. 秋田・横手（約450年の伝統！ミニかまくらの灯りと雪景色）",
    "timing": "開催期間：2月中旬（横手の雪まつり・かまくら）",
    "desc": "雪で作られた本物のかまくらの中で子供たちが甘酒やお餅を振る舞う伝統行事。蛇の崎川原に並ぶ無数のミニかまくらに灯るろうそくの光は息をのむ美しさ。横手焼きそばや秋田温泉旅館で温まります。",
    "spots": "横手公園（横手城とかまくら）、蛇の崎川原（ミニかまくら群）、かまくら館、横手市ふれあいセンター",
    "access": "JR奥羽本線・北上線「横手駅」下車。秋田新幹線大曲駅より奥羽本線約20分。",
    "tip": "「かまくら館」ではマイナス10度の体験室に本物のかまくらが通年保存されており、いつでも見学可能です。"
  },
  {
    "key": "yunishigawa_kamakura",
    "title": "3. 栃木・日光湯西川温泉（平家落人の里！日本夜景遺産・かまくら祭）",
    "timing": "開催期間：1月下旬〜2月下旬（湯西川温泉かまくら祭）",
    "desc": "河川敷に並ぶ数百個のミニかまくらにろうそくが灯る「沢口河川敷ミニかまくら」は日本夜景遺産認定。囲炉裏を囲んでジビエや川魚を炭火で焼く「平家落人料理」と美肌の露天風呂を堪能。",
    "spots": "湯西川温泉沢口河川敷、平家の里、湯西川水の郷、湯西川ダム",
    "access": "野岩鉄道「湯西川温泉駅」より日光交通バスで約25分。東武浅草・新宿から直通特急あり。",
    "tip": "「平家の里」会場では、昼間に大きなかまくらの中でBBQ（かまくらバーベキュー）を楽しむ特別プランも人気です。"
  },
  {
    "key": "towada_winter_fest",
    "title": "4. 青森・十和田湖＆奥入瀬渓流（十和田湖冬物語＆奥入瀬氷瀑ライトアップ）",
    "timing": "開催期間：1月下旬〜2月下旬",
    "desc": "十和田湖畔で開催される「十和田湖冬物語」。雪上に打ち上がる冬花火や雪あかりの小径、奥入瀬渓流が完全凍結する「氷瀑（ひょうばく）ライトアップツアー」と十和田湖温泉郷の秘湯ステイ。",
    "spots": "十和田湖畔休屋、乙女の像、奥入瀬渓流（冬の氷瀑ツアー）、十和田神社",
    "access": "JR八戸駅・新青森駅より冬期シャトルバス・路線バス運行。星野リゾート奥入瀬渓流ホテル等。",
    "tip": "夜間に運行される「奥入瀬渓流氷瀑ライトアップツアー（専用バス）」に参加すると、青く照らされた巨大な氷柱を間近で観察できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SNOW FESTIVAL & ICE WORLD
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【白銀の祭典】冬の雪まつり＆巨大かまくら温泉旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            暗闇の中にぽうっと灯る数千個のミニかまくらのろうそく、大迫力の巨大雪像や氷の彫刻。厳しい寒さだからこそ生まれる幻想的な白銀のフェスティバルと、湯けむり立ち上る雪見温泉の旅へ。
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
