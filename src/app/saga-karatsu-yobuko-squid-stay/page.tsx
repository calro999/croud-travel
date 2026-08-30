import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【佐賀・唐津＆呼子】唐津城・虹の松原＆呼子活イカ姿造り・佐賀牛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "玄界灘の絶景と日本一のイカの聖地・佐賀唐津＆呼子エリア完全特化！唐津城（舞鶴城）のパノラマ、日本三大松原「虹の松原」、呼子朝市、透き通る芸術品「呼子の活イカ姿造り」、唐津焼窯元めぐり宿を徹底解説。",
  keywords: ["saga-karatsu-yobuko-squid-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["saga-karatsu-yobuko-squid-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for saga-karatsu-yobuko-squid-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "karatsu_castle_matsubara_stay",
    "title": "1. 唐津城〜虹の松原・鏡山（鶴が翼を広げたような舞鶴城と100万本の松林）",
    "timing": "通年（春の唐津城藤棚ライトアップ・鏡山のツツジと桜）",
    "desc": "唐津湾に突き出た満島山に建つ「唐津城（舞鶴城）」。天守閣展望所から見下ろす長さ約4.5km、100万本の黒松が続く日本三大松原「虹の松原」。標高284mの「鏡山展望台」から望む唐津湾に浮かぶ高島・神集島の絶景。",
    "spots": "唐津城（天守閣・藤棚）、虹の松原（からつバーガー・松原ドライブ）、鏡山展望テラス、旧唐津銀行（辰野金吾監修）",
    "access": "JR筑肥線・唐津線「唐津駅」下車。福岡空港・博多駅より地下鉄・JR直通約80分。",
    "tip": "虹の松原の中にある「からつバーガー（松原本店）」は、特製デミグラスソースとサクサクのバンズが絶品の超人気ご当地バーガーです。"
  },
  {
    "key": "yobuko_squid_fresh_stay",
    "title": "2. 呼子港〜呼子朝市・七ツ釜（透き通る活イカの姿造りと日本三大朝市）",
    "timing": "通年（ケンサキイカ：春〜秋、アオリイカ：秋〜冬、ヤリイカ：冬〜春）",
    "desc": "大正時代から続く日本三大朝市の一つ「呼子朝市」。朝獲れの干物やウニ、イカしゅうまいを売り歩くおばちゃんたちの活気。玄武岩の柱状節理が海に削られた国の天然記念物「七ツ釜」をめぐる遊覧船イカ丸クルーズ。",
    "spots": "呼子朝市通り、呼子大橋・風の見える丘公園、七ツ釜（遊覧船イカ丸）、波戸岬（ハート岬・サザエのつぼ焼き）",
    "access": "唐津市内より車・路線バスで約30分。",
    "tip": "波戸岬（はどみさき）は「ハート岬」の愛称で恋人の聖地に認定されており、名物の香ばしいサザエのつぼ焼き小屋が並びます。"
  },
  {
    "key": "karatsu_saga_beef_pottery_stay",
    "title": "3. 名物「呼子活イカ」＆唐津焼の器（まだ動いている透明なイカと後造り天ぷら）",
    "timing": "通年（注文が入ってから生簀から網ですくい上げる極上鮮度）",
    "desc": "生簀から揚げて数分で捌かれる「呼子の活イカ姿造り」。透き通る身のコリコリした甘み。刺身を食べた後のゲソとミミは「塩焼き」または「サクサクの天ぷら」にする「後造り」。400年の伝統を持つ「唐津焼」の器で楽しむ佐賀牛。",
    "spots": "呼子活イカ料理専門店（河太郎・萬坊海中レストラン）、唐津焼窯元通り",
    "access": "呼子・唐津市街。",
    "tip": "イカの後造り天ぷらは、揚げたて熱々に天つゆや抹茶塩をつけて食べると、お刺身とは全く異なるふんわり柔らかな甘みが楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KARATSU & YOBUKO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【佐賀・唐津＆呼子】唐津城・虹の松原＆呼子活イカ姿造り・佐賀牛宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            玄界灘の青い海に松林が連なる風光明媚な城下町「唐津」と、日本一のイカの聖地「呼子（よぶこ）」。透き通る美しさとコリコリした食感の「呼子活イカ姿造り」。国の特別名勝「虹の松原」と、伝統の唐津焼の器で味わう佐賀牛会席へ。
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
