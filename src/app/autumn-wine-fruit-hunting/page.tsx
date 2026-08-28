import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【秋の味覚狩り】ワイナリー巡り＆フルーツ温泉リゾート 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "収穫の秋を満喫！山梨勝沼・石和温泉（新酒ワインとぶどう狩り）、信州千曲川ワインバレー、北海道余市、岡山果実郷など、秋のワイナリーツアーとフルーツ狩り・温泉を満喫できる人気宿を徹底解説。",
  keywords: ["autumn-wine-fruit-hunting", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-wine-fruit-hunting"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-wine-fruit-hunting", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "katsunuma_wine",
    "title": "1. 山梨・勝沼ぶどう郷＆石和温泉（日本ワインの聖地で新酒とシャインマスカット）",
    "timing": "収穫シーズン：8月下旬〜11月上旬（山梨ヌーボー解禁は11月3日）",
    "desc": "約30軒ものワイナリーが密集する日本一のワイン産地・甲州市勝沼。ぶどう畑を見下ろすワイナリーレストランでテイスティングを楽しんだ後は、美肌の湯として名高い石和温泉の露天風呂と甲州ワインビーフディナーを満喫。",
    "spots": "勝沼ぶどうの丘（地下ワインカーヴ）、ルミエールワイナリー、シャトー・メルシャン勝沼ワイナリー、ほったらかし温泉",
    "access": "JR中央本線特急「あずさ・かいじ」で新宿駅から石和温泉駅・山梨市駅まで約90分。中央道勝沼ICより約10分。",
    "tip": "「ぶどうの丘」の地下ワインカーヴでは、タートヴァン（試飲皿）を使って約200種類のワインを自由に試飲できます。"
  },
  {
    "key": "nagano_wine",
    "title": "2. 長野・小布施＆千曲川ワインバレー（秋の栗菓子・ワイン・りんご狩り）",
    "timing": "収穫シーズン：9月中旬〜11月下旬",
    "desc": "栗と北斎の町・小布施や、新進気鋭のワイナリーが集まる千曲川ワインバレー。名物の小布施栗のモンブランやりんご狩りを楽しんだ後は、北信州の山あいに湧く名湯露天風呂で秋の恵みを味わえます。",
    "spots": "小布施堂・竹風堂（小布施栗スイーツ）、北斎館、サンクゼール・ワイナリー（飯綱町）、湯田中渋温泉郷",
    "access": "北陸新幹線「長野駅」より長野電鉄特急で小布施駅・湯田中駅まで約20〜45分。上信越道信州中野ICより車約10分。",
    "tip": "秋限定の「小布施堂・朱雀（生栗のペースト）」を味わうなら朝の整理券確保が必須。宿泊先で手配可能なプランも人気です。"
  },
  {
    "key": "yoichi_wine",
    "title": "3. 北海道・余市＆小樽（世界が注目する余市ワインと日本海の秋海鮮）",
    "timing": "収穫シーズン：9月上旬〜10月下旬",
    "desc": "ピノ・ノワールなど世界水準のワインを生み出す余市町。ニッカウヰスキー余市蒸溜所や個性豊かなワイナリーを巡り、小樽運河沿いのクラシックホテルや温泉宿で、秋サケやイクラ、ウニと北海道産ワインのマリアージュを堪能。",
    "spots": "ニッカウヰスキー余市蒸溜所、登醸造・ドメーヌタカヒコ周辺ぶどう畑、小樽運河、余市フルーツ街道",
    "access": "JR函館本線で札幌駅から小樽駅まで快速約32分、余市駅まで約60分。新千歳空港から快速エアポート直通あり。",
    "tip": "秋は旬を迎える「秋サケの筋子・生イクラ丼」と余市ワインのペアリングが最高。小樽の夜景とともに味わえます。"
  },
  {
    "key": "okayama_fruit",
    "title": "4. 岡山・倉敷＆湯郷温泉（フルーツ王国でシャインマスカット＆白桃パフェ）",
    "timing": "収穫シーズン：7月〜10月下旬",
    "desc": "晴れの国・岡山が誇る最高品質のシャインマスカットやピオーネ。美観地区の白壁の町並みでフルーツパフェを味わい、美作三湯の一つ・湯郷温泉の美肌湯と岡山千屋牛会席をゆったり愉しめます。",
    "spots": "倉敷美観地区（くらしき桃子パフェ）、岡山後楽園、湯郷温泉（鷺の湯）、農園フルーツ狩り",
    "access": "山陽新幹線「岡山駅」よりJR山陽本線で倉敷駅まで約15分。湯郷温泉へは岡山駅より直行バス約80分。",
    "tip": "倉敷美観地区の「くらしき桃子」では、旬のシャインマスカットを惜しみなく使った贅沢パフェが連日大人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            AUTUMN HARVEST
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【秋の味覚狩り】ワイナリー巡り＆フルーツ温泉リゾート 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            もぎたてのシャインマスカットや巨峰、樽出しの出来立て新酒ワイン。心地よい秋風が吹くぶどう畑を巡り、夜は美肌の温泉とご当地マリアージュディナーに舌鼓を打つ大人の収穫祭ステイ。
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
