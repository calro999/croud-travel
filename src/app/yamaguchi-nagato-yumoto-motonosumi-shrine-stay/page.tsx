import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【山口・長門湯本温泉＆元乃隅神社】日本海望む123基赤鳥居・恩湯リノベ温泉街宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "CNN世界最長クラスの絶景鳥居と奇跡の再生温泉街・山口長門エリア完全特化！日本海へ連なる123基の赤鳥居「元乃隅神社」、国の名勝「青海島」、星野リゾート監修で美しく再生した「長門湯本温泉（恩湯・飛び石遊歩道・川床宿）」を徹底解説。",
  keywords: ["yamaguchi-nagato-yumoto-motonosumi-shrine-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamaguchi-nagato-yumoto-motonosumi-shrine-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamaguchi-nagato-yumoto-motonosumi-shrine-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "nagato_yumoto_onsen_river_stay",
    "title": "1. 長門湯本温泉〜音信川川床・恩湯（星野リゾート監修で美しく再生した湯街）",
    "timing": "通年（春の桜・初夏のホタル・秋の紅葉・冬の雪灯り）",
    "desc": "開湯約600年、山口県最古の温泉地「長門湯本温泉」。音信川（おとづれがわ）沿いに整備された川床テラス、飛び石、竹林の階段。源泉直上に建つ立ち寄り湯「恩湯（おんとう）」。瓦屋根の宿が軒を連ね、そぞろ歩きが楽しいモダンレトロな温泉街。",
    "spots": "立ち寄り湯 恩湯、音信川川床テラス、おとづれ足湯、竹林の階段、大谷山荘、界 長門",
    "access": "JR美祢線「長門湯本駅」下車徒歩約10分。山口宇部空港より乗合タクシーで約75分。中国道「美祢IC」より約30分。",
    "tip": "音信川の川床テラスにはカフェが併設されており、川のせせらぎを聞きながら地元の長門ゆずきちを使ったドリンクやスイーツをテイクアウトして楽しめます。"
  },
  {
    "key": "motonosumi_shrine_cape_stay",
    "title": "2. 元乃隅神社〜123基の鳥居・龍宮の潮吹（CNNが選ぶ日本の最も美しい場所31選）",
    "timing": "通年（晴天の午前中〜午後は日本海の青と鳥居の赤が鮮烈）",
    "desc": "日本海に向かって朱色の鳥居が123基・100m以上にわたって並ぶ絶景「元乃隅（もとのすみ）神社」。大鳥居の上部に設置された「日本一入れにくい賽銭箱」。波が岩の割れ目に入り込んで吹き上がる「龍宮の潮吹」。広大な草原が広がる「千畳敷」。",
    "spots": "元乃隅神社、龍宮の潮吹、千畳敷（標高333mの草原カフェ）、青海島（海上アルプス・観光遊覧船）",
    "access": "長門湯本温泉より車約30分。JR長門古市駅よりタクシー約20分。",
    "tip": "高さ約6mの大鳥居の上にある賽銭箱に見事賽銭を投げ入れることができると、願い事が叶うと言われています。"
  },
  {
    "key": "nagato_gastro_kawara_soba_stay",
    "title": "3. 山口名物「瓦そば」＆長門やきとり・仙崎イカ（熱々の瓦と新鮮な地鶏）",
    "timing": "通年（初夏〜秋の仙崎活イカ・地鶏長州黒かしわ）",
    "desc": "熱した日本瓦の上で茶そばを香ばしく焼き、錦糸卵や牛肉、レモン、もみじおろしをトッピングして特製つゆにつけて食べる山口名物「瓦そば」。仙崎港で揚がる透明な「ケンサキイカ活造り」。養鶏が盛んな長門名物「長門やきとり（ガーリックパウダー）」。",
    "spots": "瓦そば柳屋（長門湯本温泉街）、仙崎みすゞ通り・センザキッチン、長門やきとり店群",
    "access": "長門市街・長門湯本温泉・仙崎港。",
    "tip": "瓦に接した茶そばがパリパリのおこげになり、上部の柔らかい麺との食感のコントラストが瓦そばの醍醐味です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            NAGATO YUMOTO & MOTONOSUMI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【山口・長門湯本温泉＆元乃隅神社】日本海望む123基赤鳥居・恩湯リノベ温泉街宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            青い日本海と断崖絶壁に向かって123基の朱色鳥居がトンネルのように連なる奇跡の絶景「元乃隅（もとのすみ）神社」。「長門富士」の麓、音信川（おとづれがわ）沿いに竹林や飛び石、川床カフェが美しくリノベーションされた「長門湯本温泉」。名湯「恩湯」と日本海の旬魚を味わう旅。
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
                  {hotels.map((hotel: any) => (
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
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
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
