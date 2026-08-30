import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【山口・萩＆長門湯本温泉】維新の城下町・川床テラス＆元乃隅神社・瓦そば宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "明治維新の故郷とリノベーション温泉街・山口萩＆長門湯本温泉エリア完全特化！萩城下町の白壁・夏みかん、音信川の川床テラス、アメリカCNN絶賛の「元乃隅神社」123基鳥居、名物「瓦そば・ふぐ会席宿」を徹底解説。",
  keywords: ["yamaguchi-hagi-nagato-yumoto-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamaguchi-hagi-nagato-yumoto-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamaguchi-hagi-nagato-yumoto-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "nagato_yumoto_kawadoko_stay",
    "title": "1. 長門湯本温泉〜音信川沿い（星野リゾート監修・川床と飛び石の温泉街散策）",
    "timing": "通年（春の桜・初夏の川床カフェ・秋の紅葉ライトアップ）",
    "desc": "開湯約600年、室町時代から続く長門湯本温泉。音信川の清流沿いに川床テラスや飛び石、足湯、竹林の階段が整備されたモダンな温泉街。公衆浴場「恩湯（おんとう）」の足元湧出岩盤風呂と、地ビール・萩焼ギャラリー巡り。",
    "spots": "恩湯（立ち寄り温泉）、川床テラス（おとずれ足湯・クラフトビールバー）、竹林の階段、元乃隅神社",
    "access": "JR美祢線「長門湯本駅」下車。山口宇部空港より乗合タクシーで約70分。",
    "tip": "夕暮れ時には温泉街全体が暖色系のライトアップに包まれ、川床テラスで川のせせらぎを聞きながら地ビールを味わうのが最高です。"
  },
  {
    "key": "hagi_castle_heritage_walk",
    "title": "2. 萩城下町〜松下村塾（世界遺産の白壁となまこ壁・明治維新胎動の地）",
    "timing": "通年（歴史散歩と萩焼窯元めぐり）",
    "desc": "江戸時代の町割りがそのまま残る「萩城下町」。重厚な武家屋敷の白壁からのぞく黄色い夏みかんのコントラスト。吉田松陰が指導した「松下村塾（世界文化遺産）」や高杉晋作・木戸孝允の生家をめぐる維新浪漫。",
    "spots": "萩城下町（菊屋家住宅・木戸孝允旧宅）、松陰神社（松下村塾・至誠館）、萩城跡指月公園、萩焼会館",
    "access": "JR山陰本線「東萩駅」下車。長門湯本温泉より車で約35分。",
    "tip": "萩城下町はレンタサイクルでの散策が快適で、夏みかんソフトクリームや夏みかんピールのお土産が名物です。"
  },
  {
    "key": "yamaguchi_kawarasoba_fugu_stay",
    "title": "3. 山口名物「瓦そば」＆日本海のふぐ（熱々の日本瓦で焼く茶そばの香ばしさ）",
    "timing": "通年（秋〜冬の天然とらふぐ解禁シーズン）",
    "desc": "熱した日本瓦の上に茶そば、錦糸卵、甘辛い牛肉、ネギ、レモン、もみじおろしを乗せて食べる山口名物「瓦そば」。下関や仙崎港直送の「ふぐ刺し・ふぐちり鍋」。長州黒かしわや長州藤光ポークなど山口の極上グルメ。",
    "spots": "元祖瓦そば たかせ、仙崎人工島（センザキッチン・金子みすゞ記念館）、道の駅萩しーまーと",
    "access": "長門・萩エリア。",
    "tip": "瓦そばは、最初はそのままつゆにつけて、途中でレモンともみじおろしをつゆに絞って味変するのが本場の美味しい食べ方です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HAGI & NAGATO YUMOTO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【山口・萩＆長門湯本温泉】維新の城下町・川床テラス＆元乃隅神社・瓦そば宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            白壁となまこ壁に夏みかんが揺れる世界遺産の城下町「萩」。音信川（おとずれがわ）沿いに川床や飛び石、竹林のライトアップが広がる「長門湯本温泉」。日本海へ連なる元乃隅神社の赤い鳥居と、熱々瓦そば・ふぐ会席を味わう旅。
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
