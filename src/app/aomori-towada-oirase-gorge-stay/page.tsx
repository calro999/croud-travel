import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【青森・十和田湖＆奥入瀬渓流】特別名勝奥入瀬・銚子大滝＆十和田バラ焼き・ヒメマス宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "苔むす渓流とブナの原生林・青森奥入瀬＆十和田湖エリア完全特化！国の特別名勝・天然記念物「奥入瀬渓流（阿修羅の流れ・銚子大滝）」、神秘の「十和田湖遊覧船・十和田神社」、星野リゾート奥入瀬渓流ホテル、名物「十和田バラ焼き・ヒメマス宿」を徹底解説。",
  keywords: ["aomori-towada-oirase-gorge-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["aomori-towada-oirase-gorge-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for aomori-towada-oirase-gorge-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "oirase_keiryu_nature_resort",
    "title": "1. 奥入瀬渓流〜阿修羅の流れ・銚子大滝（特別名勝！14kmの苔と滝の回廊）",
    "timing": "通年（新緑の5月下旬〜6月・錦秋の10月中旬〜下旬・冬の氷瀑ツアー）",
    "desc": "十和田湖子ノ口から焼山まで約14km続く「奥入瀬渓流（国の特別名勝・天然記念物）」。激しい水しぶきが上がる「阿修羅の流れ」、幅20m高さ7mの「銚子大滝」、苔むす奇岩「雲井の滝」。星野リゾート奥入瀬渓流ホテルの露天風呂。",
    "spots": "奥入瀬渓流遊歩道（阿修羅の流れ・銚子大滝・雲井の滝・三乱の流れ）、奥入瀬湧水館、星野リゾート 奥入瀬渓流ホテル（氷瀑の湯）",
    "access": "JR八戸駅または青森駅よりJRバス東北「みずうみ号・おいらせ号」運行（約90〜120分）。",
    "tip": "早朝の奥入瀬渓流は、朝もやとブナの葉の隙間から差し込む光芒が木漏れ日となって水面を照らし、絵画のように美しい瞬間に出会えます。"
  },
  {
    "key": "towadako_lake_onsen_stay",
    "title": "2. 十和田湖〜休屋・十和田神社・乙女の像（神秘のカルデラ湖と開運の杜）",
    "timing": "通年（十和田湖遊覧船運行：4月中旬〜11月上旬）",
    "desc": "周囲約46kmの二重カルデラ湖「十和田湖」。高村光太郎作のブロンズ像「乙女の像」。日本武尊を祀り東北屈指のパワースポットとされる杉木立の「十和田神社（おより紙での占い）」。十和田湖遊覧船での湖上クルージング。",
    "spots": "十和田神社、乙女の像（御前ヶ浜）、十和田湖遊覧船（休屋〜子ノ口）、発荷峠展望台、宇樽部キャンプ場",
    "access": "十和田湖休屋バスターミナル周辺。",
    "tip": "発荷峠（はっかとうげ）展望台からは、十和田湖の南岸から湖全体と遠く八甲田連峰までを360度見渡す雄大なパノラマが楽しめます。"
  },
  {
    "key": "towada_barayaki_himemasu_stay",
    "title": "3. 十和田湖名物「ヒメマス」＆十和田バラ焼き（清らかな湖水とB級グルメの王者）",
    "timing": "通年（ヒメマス漁解禁：夏〜秋）",
    "desc": "十和田湖の冷たく清らかな水で育つサケ科の淡水魚「十和田湖ヒメマス（十和田湖ひめます）」。繊細で甘みのある塩焼きやお造り。大量の玉ねぎと牛バラ肉を甘辛い醤油タレで炒めたB-1グランプリ王者「十和田バラ焼き」。",
    "spots": "休屋・子ノ口のヒメマス料理店、十和田バラ焼き専門店、道の駅とわだ",
    "access": "十和田湖・十和田市街エリア。",
    "tip": "十和田バラ焼きは、鉄板の上で飴色になるまでじっくり炒めた玉ねぎの甘みとタレが絡んだ牛肉をご飯に乗せて食べるのが最高です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            OIRASE & TOWADA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【青森・十和田湖＆奥入瀬渓流】特別名勝奥入瀬・銚子大滝＆十和田バラ焼き・ヒメマス宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            幾重にも重なる滝とエメラルドグリーンの激流が織りなす大自然の回廊「奥入瀬渓流」と、二重カルデラ湖「十和田湖」。ブナの巨木に囲まれた渓流遊歩道。十和田湖畔に鎮座する十和田神社の神聖な空気。名物ヒメマス料理と十和田バラ焼きを味わう旅。
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
