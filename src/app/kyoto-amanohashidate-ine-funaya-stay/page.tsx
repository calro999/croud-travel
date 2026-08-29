import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【京都・天橋立＆伊根の舟屋】日本三景・股のぞき＆海に浮かぶ舟屋・丹後地魚宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "海の京都・天橋立＆伊根の舟屋エリア完全特化！日本三景「天橋立」の股のぞき、笠松公園ケーブルカー、海に面した約230軒の「伊根の舟屋」、天橋立温泉と丹後とり貝・松葉ガニ・寒ブリ会席宿を徹底解説。",
  keywords: ["kyoto-amanohashidate-ine-funaya-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kyoto-amanohashidate-ine-funaya-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kyoto-amanohashidate-ine-funaya-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "amanohashidate_view_onsen",
    "title": "1. 天橋立・傘松公園〜天橋立ビューランド（天翔ける龍を見る「股のぞき」と白砂青松散策）",
    "timing": "通年（四季折々の日本三景・新緑と雪化粧）",
    "desc": "宮津湾と阿蘇海を隔てる約3.6kmの砂州に約8000本の松が茂る「天橋立」。傘松公園からの「昇龍観」やビューランドからの「飛龍観」。股の間から天地逆さに眺めると、天に架かる青空の架け橋のように見える神秘の景観。",
    "spots": "天橋立公園（日本三景碑・天橋立神社・廻旋橋）、傘松公園（股のぞき発祥地・ケーブルカー）、天橋立ビューランド（観覧車・飛龍観）、智恩寺（文殊堂・知恵の輪）",
    "access": "京都丹後鉄道「天橋立駅」下車すぐ。JR京都駅より特急「はしだて」で直通約2時間。各宿送迎あり。",
    "tip": "天橋立の松並木はレンタサイクル（約20分）または観光船（約12分）で渡るのが快適で、阿蘇海の風を感じられます。"
  },
  {
    "key": "ine_funaya_stay",
    "title": "2. 伊根の舟屋群〜伊根湾めぐり（海の上に家が浮かぶ重要伝統的建造物群保存地区）",
    "timing": "通年（夕暮れ時の静寂な伊根湾クルーズとカモメの餌付け）",
    "desc": "1階が船のガレージ、2階が住居になった独特の木造建築「伊根の舟屋」が約230軒連なる美しい港町。「伊根湾めぐり遊覧船」から眺める海に浮かぶ家並みや、舟屋を改装した1日1組限定の宿での宿泊体験。",
    "spots": "伊根の舟屋群（七面山駐車場・舟屋見学）、伊根湾めぐり遊覧船（カモメの餌付け）、道の駅 舟屋の里伊根（展望レストラン）、向井酒造（古代米赤米酒「伊根満開」）",
    "access": "天橋立駅より丹後海陸交通路線バス「伊根線」で約55分「伊根」下車。車で約35分。",
    "tip": "女性杜氏が醸す「向井酒造」のロゼワインのような赤い日本酒「伊根満開」は、舟屋散策のお土産人気No.1です。"
  },
  {
    "key": "tango_seafood_crab_gourmet",
    "title": "3. 丹後・海の京都美食（冬の間人ガニ・伊根ブリしゃぶ＆春の丹後とり貝）",
    "timing": "冬期（11月〜3月の松葉ガニ・間人ガニ・寒ブリしゃぶ）、春期（丹後とり貝）",
    "desc": "幻のカニと呼ばれる「間人（たいざ）ガニ」や「津居山ガニ」。脂ののった「伊根の寒ブリ」のブリしゃぶ、肉厚で甘みが強い「丹後とり貝」。丹後コシヒカリとともに味わう海の京都の贅沢会席。",
    "spots": "宮津港（地魚料理店・海鮮丼）、道の駅海の京都宮津（おさかなキッチン宮津）",
    "access": "天橋立・宮津エリア。",
    "tip": "冬の伊根湾名物「伊根のブリしゃぶ」は、昆布出汁にサッとくぐらせることで余分な脂が落ち、甘みと旨味が引き立ちます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            AMANOHASHIDATE & INE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【京都・天橋立＆伊根の舟屋】日本三景・股のぞき＆海に浮かぶ舟屋・丹後地魚宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            天に架かる緑の架け橋「日本三景・天橋立」。傘松公園からの「股のぞき」と、海に直接建ち並ぶ「伊根の舟屋」のノスタルジー。丹後の海が育む極上の海の幸と、美肌の天橋立温泉に癒やされる旅。
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
