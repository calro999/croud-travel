import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【青森・十和田湖＆奥入瀬渓流】苔むす清流・銚子大滝＆青森りんご極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "特別名勝・青森奥入瀬渓流＆十和田湖エリア完全特化！全長14kmの清流散策、銚子大滝、阿修羅の流れ、星野リゾート奥入瀬渓流ホテル、十和田湖遊覧船、十和田バラ焼きと青森食材フレンチ宿を徹底解説。",
  keywords: ["aomori-oirase-towada-nature-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["aomori-oirase-towada-nature-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for aomori-oirase-towada-nature-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "oirase_stream_luxury",
    "title": "1. 奥入瀬渓流ウォーク〜阿修羅の流れ・銚子大滝（苔と水しぶきの天然美術館）",
    "timing": "通年（5月〜6月の新緑、10月中旬〜下旬の全山紅葉、冬の氷瀑・氷柱）",
    "desc": "国の特別名勝・天然記念物に指定された約14kmの「奥入瀬渓流」。激しい水流が岩を洗う「阿修羅の流れ」や、幅20m・落差7mの「銚子大滝」。渓流沿いの遊歩道を歩き、300種以上の苔が織りなす緑のミクロ世界を堪能。",
    "spots": "阿修羅の流れ、銚子大滝、雲井の滝、三乱の流れ、奥入瀬渓流館（苔ソフト・こけ玉作り体験）",
    "access": "JR八戸駅・新青森駅よりJRバス「おいらせ号・みずうみ号」で約1時間30分〜2時間。各ホテル無料送迎あり。",
    "tip": "渓流散策にはレンタサイクル（電動アシスト自転車）の利用が便利。各拠点で乗り捨てができるサービスもあります。"
  },
  {
    "key": "towada_lake_view",
    "title": "2. 十和田湖・休屋周辺（二重カルデラ湖のパノラマと高村光太郎の乙女の像）",
    "timing": "通年（十和田湖遊覧船・湖畔カヌーツアー）",
    "desc": "周囲約46km、最大水深326.8mを誇る神秘のカルデラ湖「十和田湖」。「十和田湖遊覧船」から見上げる御倉半島と中山半島の断崖美。湖畔のシンボル高村光太郎作「乙女の像」や、杉木立に囲まれた古刹「十和田神社」。",
    "spots": "十和田湖遊覧船（休屋〜子ノ口航路）、乙女の像、十和田神社（開運占い・青龍権現）、発荷峠展望台",
    "access": "奥入瀬渓流子ノ口より遊覧船または車で約15分「休屋」へ。",
    "tip": "「発荷峠展望台」は十和田湖の全景と八甲田連峰を一望できる随一のビューポイントで、早朝の雲海も格別です。"
  },
  {
    "key": "oirase_apple_gourmet",
    "title": "3. 青森りんごスイーツ＆十和田バラ焼き（青森の恵みを味わうビュッフェ）",
    "timing": "通年（秋の収穫期りんご・冬の熱々バラ焼き）",
    "desc": "日本一のりんご王国・青森。焼きたてアップルパイやりんごジャム、シードル。B級ご当地グルメの王道「十和田バラ焼き（牛バラ肉と玉ねぎの甘辛炒め）」や、新鮮な八戸前沖サバ、青森県産牛のロースト。",
    "spots": "十和田バラ焼き専門店、道の駅奥入瀬（奥入瀬ビール・ピザ）、十和田市現代美術館（アート散策）",
    "access": "十和田市街地・奥入瀬エリア。",
    "tip": "「十和田市現代美術館」では、草間彌生やロン・ミュエクの巨大アート作品が展示されており、必見の立ち寄りスポットです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            OIRASE GORGE NATURE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【青森・十和田湖＆奥入瀬渓流】苔むす清流・銚子大滝＆青森りんご極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ブナやカエデの原生林を縫うように流れる「奥入瀬渓流（おいらせけいりゅう）」。岩を覆う鮮やかな苔と、激しく水しぶきを上げる滝の数々。十和田湖の深い青と、満点の星空、名湯に癒やされるネイチャーステイ。
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
