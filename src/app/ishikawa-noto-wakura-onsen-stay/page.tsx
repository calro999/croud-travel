import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【石川・能登和倉温泉】七尾湾オーシャンビュー＆能登牛・寒ブリ極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "石川・能登半島和倉温泉エリア完全特化！七尾湾を一望する展望露天風呂、開湯1200年の海の温泉、能登牛・寒ブリ・のどぐろ会席と名門老舗旅館を徹底解説。",
  keywords: ["ishikawa-noto-wakura-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["ishikawa-noto-wakura-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ishikawa-noto-wakura-onsen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "wakura_bay_luxury",
    "title": "1. 和倉温泉街・七尾湾沿い（海に突き出す展望露天風呂と名門のおもてなし）",
    "timing": "通年（冬の雪景色と寒ブリシーズンが最高峰）",
    "desc": "七尾湾の穏やかな海を目の前に望む和倉温泉街。塩分を多く含む無色透明の泉質は保温・美肌効果抜群。名門旅館「加賀屋」をはじめ、海と一体になる絶景インフィニティ露天風呂を満喫。",
    "spots": "湯元の広場（飲泉・温泉卵作り）、和倉温泉総湯、弁天崎源泉公園、辻口博啓美術館（ル ミュゼ ドゥ アッシュ）",
    "access": "JR七尾線特急「能登かがり火号」で金沢駅から和倉温泉駅まで約60分。のと里山海道経由。",
    "tip": "パティシエ辻口博啓氏のミュージアムカフェ「ル ミュゼ ドゥ アッシュ」で七尾湾を眺めながらいただく限定スイーツが絶品です。"
  },
  {
    "key": "wakura_seafood_gourmet",
    "title": "2. 能登半島美食ステイ（冬の寒ブリ・幻の能登牛・高級魚のどぐろ会席）",
    "timing": "冬期（寒ブリ・ズワイガニ・牡蠣の冬の三大味覚）",
    "desc": "豊かな里山里海が育む能登の極上食材。脂がのった「能登寒ブリのしゃぶしゃぶ」、炭火で香ばしく焼き上げる「のどぐろの塩焼き」、希少な「能登牛のサーロインステーキ」を堪能。",
    "spots": "能登島大橋、のとじま水族館、七尾フィッシャーマンズ・ワーフ能登食祭市場",
    "access": "和倉温泉駅から車・路線バスで能登島・七尾市内へ。",
    "tip": "七尾食祭市場では、館内で購入した新鮮な魚介をその場で炭火焼きにして味わえる「浜焼きコーナー」が大人気です。"
  },
  {
    "key": "nanao_bay_resort",
    "title": "3. 能登島＆ツインブリッジのと（イルカが棲む海と絶景アイランドドライブ）",
    "timing": "通年（能登島のガラス工房体験）",
    "desc": "和倉温泉から能登島大橋を渡って能登島へ。野生のミナミハンドウイルカが暮らす穏やかな内海。島内のガラス工房での吹きガラス体験や、ツインブリッジのとからのパノラマ絶景。",
    "spots": "石川県能登島ガラス美術館、ツインブリッジのと、能登島マリンパーク海族公園",
    "access": "和倉温泉街より能登島大橋経由で車約10分。",
    "tip": "ツインブリッジのとの展望台からは、七尾北湾に浮かぶ牡蠣棚と吊り橋の優美なコントラストを一望できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            NOTO WAKURA MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【石川・能登和倉温泉】七尾湾オーシャンビュー＆能登牛・寒ブリ極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            波静かな七尾湾の海辺に湧き出す、国内屈指の高温泉「和倉温泉」。日本海の旬の恵み（寒ブリ・能登牛・加能ガニ）と、加賀屋をはじめとする名門旅館の極上のおもてなしに浸る旅。
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
