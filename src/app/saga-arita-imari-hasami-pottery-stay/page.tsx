import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【佐賀＆長崎・有田＆伊万里・波佐見】日本磁器発祥の地・トンバイ塀の窯元＆伊万里牛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "400年の伝統を誇る肥前やきものロード完全特化！日本磁器のふるさと「有田焼（トンバイ塀・泉山磁石場）」、秘窯の里「伊万里・大川内山」、モダンで大人気の「波佐見焼（陶器市・西の原）」、武雄温泉、名物「伊万里牛・器の美食宿」を徹底解説。",
  keywords: ["saga-arita-imari-hasami-pottery-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["saga-arita-imari-hasami-pottery-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for saga-arita-imari-hasami-pottery-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "arita_porcelain_town_stay",
    "title": "1. 有田〜トンバイ塀のある裏通り・泉山磁石場（日本磁器発祥400年の歴史）",
    "timing": "通年（ゴールデンウィークの「有田陶器市」は100万人超の来場）",
    "desc": "元和2年（1616年）朝鮮人陶工・李参平が白磁鉱を発見した「泉山磁石場」。登り窯を築くレンガ（トンバイ）を赤土で固めた塀が続く「トンバイ塀のある裏通り」。有田焼の鳥居が立つ「陶山神社」。有田ポーセリンパークのツヴィンガー宮殿。",
    "spots": "トンバイ塀の裏通り、泉山磁石場、陶山神社（有田焼の鳥居・狛犬）、有田内山重伝建地区、有田ポーセリンパーク",
    "access": "JR佐世保線「上有田駅」または「有田駅」下車。西九州新幹線「武雄温泉駅」より車約20分。",
    "tip": "「陶山神社（すえやまじんじゃ）」は境内の中央をJR佐世保線の線路が横切っており、有田焼の鳥居のすぐ横を列車が通過する全国的にも珍しい撮影名所です。"
  },
  {
    "key": "imari_okawachiyama_secret_kiln",
    "title": "2. 伊万里・大川内山〜秘窯の里（山水画のような奇岩と鍋島藩窯の気品）",
    "timing": "通年（夏の風鈴まつり・秋の窯元市）",
    "desc": "三方を険しい山に囲まれ、将軍家への献上品「鍋島焼」の秘法を守り続けた「秘窯の里・大川内山（おおかわちやま）」。約30軒の窯元が軒を連ねる石畳の坂道。陶板で飾られた橋や登り窯跡。伊万里湾の風光明媚な景色。",
    "spots": "大川内山（鍋島藩窯公園・トンバイ橋・めおとしの塔）、伊万里神社、海のシルクロード館",
    "access": "JR筑肥線・松浦鉄道「伊万里駅」よりバス・車で約10〜15分。",
    "tip": "夏に開催される「風鈴まつり」では、各窯元が手掛けた数千個の磁器風鈴が町中に吊るされ、涼やかで澄んだ音色が谷間に響き渡ります。"
  },
  {
    "key": "imari_beef_hasami_pottery_stay",
    "title": "3. 長崎・波佐見〜西の原＆最高級「伊万里牛」（モダンな日常食器と極上黒毛和牛）",
    "timing": "通年（波佐見陶器市：GW期間）",
    "desc": "シンプルでモダンな北欧風デザインが若者に大人気の「波佐見焼（はさみやき）」。製陶所跡をおしゃれなカフェや雑貨店に再生した「西の原」。きめ細やかなサシと濃厚な甘みが特徴のブランド黒毛和牛「伊万里牛（佐賀牛）」ステーキ。",
    "spots": "西の原（モンネ・ルギ・ムック）、波佐見陶芸の館（くらわん館）、伊万里牛ステーキ店、武雄温泉元湯",
    "access": "有田・伊万里・波佐見エリア。",
    "tip": "「西の原」エリアは昭和レトロな製陶所の木造建築がそのまま残されており、波佐見焼のセレクトショップや自家焙煎コーヒー巡りが楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ARITA & IMARI POTTERY GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【佐賀＆長崎・有田＆伊万里・波佐見】日本磁器発祥の地・トンバイ塀の窯元＆伊万里牛宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            白い磁肌に華やかな赤絵が映える「有田焼」、鍋島藩窯の気品漂う「伊万里焼」、日常を彩るモダンな「波佐見焼」。登り窯のレンガを再利用したトンバイ塀の小径。陶磁器の器で味わう最高級伊万里牛ステーキと、開湯1300年の名湯武雄温泉へ。
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
