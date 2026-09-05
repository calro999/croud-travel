import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【北海道・函館＆五稜郭】世界三大夜景・星形城郭＆朝市海鮮宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "函館山からの100万ドルの世界三大夜景、星形稜堡を誇る特別史跡「五稜郭」、元町の洋館・赤レンガ倉庫群、名湯「湯の川温泉」、函館朝市の活イカ釣りと豪華朝食バイキングホテルを徹底解説。",
  keywords: ["hokkaido-hakodate-motomachi-goryokaku-nightview-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hokkaido-hakodate-motomachi-goryokaku-nightview-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hokkaido-hakodate-motomachi-goryokaku-nightview-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hakodate_nightview_motomachi_stay",
    "badge": "100万ドルの世界三大夜景",
    "title": "1. 函館山夜景＆元町教会群・金森赤レンガ倉庫（ロマンチックな異国情緒散策）",
    "timing": "通年（日没後30分のマジックアワー、冬の函館イルミネーション、秋の澄んだ夜空）",
    "desc": "香港・ナポリと並び称される函館山からの夜景。ロープウェイで登れば、両側に海が迫るくびれた地形に街の灯りが宝石のように煌めきます。麓の元町エリアには八幡坂、ハリストス正教会、旧函館区公会堂など異国情緒漂う洋館が立ち並び、ベイエリアの金森赤レンガ倉庫ではお洒落なショッピングやクラフトビールを楽しめます。",
    "spots": "函館山ロープウェイ・山頂展望台、八幡坂、旧函館区公会堂、函館ハリストス正教会、金森赤レンガ倉庫",
    "access": "JR函館駅より市電で「十字街」電停下車徒歩約10分（ロープウェイ山麓駅）。函館空港よりシャトルバスで約20分。",
    "tip": "八幡坂の頂上から函館港を見下ろすアングルは数々のCMや映画に登場する絶景フォトスポットです。"
  },
  {
    "key": "goryokaku_star_fortress_stay",
    "badge": "星形要塞と名湯湯の川温泉",
    "title": "2. 特別史跡「五稜郭」＆湯の川温泉（幕末の星形城郭桜と津軽海峡を望むいで湯）",
    "timing": "通年（4月下旬〜5月上旬の約1500本のソメイヨシノ、初夏の新緑、秋の紅葉、冬の五稜星の夢ライトアップ）",
    "desc": "日本初のフランス式星形稜堡要塞「五稜郭」。隣接する高さ107mの五稜郭タワー展望台からは、綺麗な星形の城郭全景と函館山を一望。春には星形を縁取るように桜が咲き誇る絶景が広がります。観光後は車で約10分の名湯「湯の川温泉」へ。海沿いの展望露天風呂から津軽海峡の漁火を眺める癒しの時間が叶います。",
    "spots": "五稜郭公園・箱館奉行所、五稜郭タワー、湯の川温泉街、湯倉神社、函館市熱帯植物園（温泉に入るサル）",
    "access": "五稜郭へは市電「五稜郭公園前」徒歩約15分。湯の川温泉へは市電「湯の川温泉」下車、函館空港から車でわずか約5分。",
    "tip": "湯の川温泉は函館空港に最も近い温泉地。到着日や帰着日の宿泊に抜群の利便性を誇ります。"
  },
  {
    "key": "hakodate_morning_market_squid_stay",
    "badge": "活イカ釣り＆朝食の美味しいホテル",
    "title": "3. 函館朝市「活イカ釣堀」＆日本一激戦区の朝食バイキング（イクラかけ放題の贅）",
    "timing": "通年（真イカ（スルメイカ）は6月〜12月、ヤリイカは1月〜5月）",
    "desc": "JR函館駅すぐ横に約250店舗がひしめく「函館朝市」。名物の「駅二市場活いか釣堀」では、自分で釣り上げた透明なイカをその場で職人が刺身にさばいてくれ、コリコリとした感動の食感を体験できます。また函館市内のホテルは「朝食の美味しいホテル」日本一を競い合う激戦区で、いくら盛り放題の海鮮丼や北海道産ステーキが名物です。",
    "spots": "函館朝市（どんぶり横丁市場・駅二市場活いか釣堀）、センチュリーマリーナ函館、ラビスタ函館ベイ、函館国際ホテル",
    "access": "JR函館駅より徒歩1分。朝市各店は朝6時頃から営業。",
    "tip": "活イカは当日の漁模様によって入荷数が決まるため、イカ釣りを体験したい場合は朝一番（7〜8時頃）の訪問が確実です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HAKODATE & GORYOKAKU GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【北海道・函館＆五稜郭・湯の川】世界三大夜景・星形城郭桜＆朝市活イカ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            津軽海峡と函館湾に挟まれた独特の扇状地形が織りなす「函館山からの100万ドルの夜景」。幕末の歴史が息づく星形要塞「五稜郭」の桜と新緑、元町坂道の洋館教会群、そして函館朝市でピチピチ跳ねる活イカやイクラ。名湯・湯の川温泉の海を望む露天風呂と日本屈指の朝食バイキングを満喫する極上の函館ステイへご案内します。
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide: any) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-teal-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-teal-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-teal-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-teal-950/80 leading-relaxed font-medium">
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
              <div className="space-y-4 pt-4 border-t border-teal-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-teal-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.length > 0 ? (
                    hotels.map((hotel: any) => (
                      <article
                        key={hotel.hotelNo}
                        className="flex flex-col justify-between border border-teal-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                      >
                        <div>
                          <div className="aspect-video relative overflow-hidden bg-teal-50 border-b border-teal-950/5">
                            {hotel.hotelImageUrl ? (
                              <img
                                src={hotel.hotelImageUrl}
                                alt={hotel.hotelName}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-teal-950/30 text-xs font-bold">
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
                            <h4 className="text-xs md:text-sm font-black font-journal-serif text-teal-950 line-clamp-2">
                              {hotel.hotelName}
                            </h4>
                            {hotel.hotelSpecial && (
                              <p className="text-[11px] text-teal-950/70 line-clamp-2 font-medium">
                                {hotel.hotelSpecial}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="p-4 pt-0">
                          <a
                            href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
                          >
                            ✈️ 楽天トラベルで宿泊プラン・空室を見る
                          </a>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="col-span-3 p-6 bg-stone-50 rounded-2xl text-center text-xs text-stone-500">
                      現在おすすめの宿泊施設情報を更新中です。
                    </div>
                  )}
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
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-950 bg-white hover:bg-teal-50 border border-teal-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
