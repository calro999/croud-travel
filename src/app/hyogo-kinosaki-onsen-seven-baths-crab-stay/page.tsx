import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【兵庫・城崎温泉＆円山川】七つの外湯めぐり・浴衣柳並木＆松葉ガニ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "1300年の名湯「城崎温泉」の七つの外湯めぐりと大谿川の柳並木、津居山港・柴山港直送の本松葉ガニ懐石、円山川のコウノトリ湿地を巡る兵庫・但馬特化ガイド。伝統木造旅館や川沿いリゾートを厳選。",
  keywords: ["hyogo-kinosaki-onsen-seven-baths-crab-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hyogo-kinosaki-onsen-seven-baths-crab-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hyogo-kinosaki-onsen-seven-baths-crab-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kinosaki_seven_bath_pass_stay",
    "title": "1. 城崎温泉「七つの外湯めぐり」＆大谿川の柳並木（浴衣と下駄で歩く情緒湯街）",
    "timing": "通年（冬の雪景色と湯けむり、夏の城崎夢花火、春の桜並木と柳の芽吹き）",
    "desc": "「まち全体が一つの大きな温泉宿」という理念を持つ城崎温泉。宿にチェックインしたら色浴衣に着替え、下駄を鳴らして「さとの湯」「一の湯」「御所の湯」「曼陀羅湯」「鴻の湯」「柳湯」「地蔵湯」の七つの外湯へ。それぞれ異なる建築様式とご利益を楽しめます。",
    "spots": "御所の湯（滝の露天風呂）、一の湯（洞窟風呂）、さとの湯（駅前展望露天風呂）、鴻の湯（庭園露天風呂）、木屋町小路",
    "access": "JR山陰本線「城崎温泉駅」下車徒歩すぐ。特急こうのとり（新大阪より約2時間40分）、特急きのさき（京都より約2時間20分）。北近畿豊岡道「但馬空港IC」より約25分。",
    "tip": "旅館に宿泊すると無料の「外湯めぐりデジタルパス（ゆめぱ）」が発行され、滞在中は七つの外湯に何度でも入り放題になります。"
  },
  {
    "key": "kinosaki_matsuba_crab_feast_stay",
    "title": "2. 津居山港直送「本松葉ガニ」フルコース（焼き・刺し・甲羅味噌の極み）",
    "timing": "冬季限定（11月6日のカニ漁解禁〜翌年3月下旬）",
    "desc": "城崎温泉のすぐ隣、津居山港や柴山港で水揚げされる青いタグ付きのズワイガニのオス「本松葉ガニ」。透明感あふれる甘いカニ刺し、香ばしい炭火焼きガニ、熱々のカニすき鍋、濃厚な甲羅味噌焼きなど、冬の日本海最高峰の贅を尽くしたカニ料理を堪能できます。",
    "spots": "城崎温泉おみやげ街道（鮮魚店・カニ直売店）、但馬牛・城崎スイーツ店群",
    "access": "城崎温泉街の各料亭旅館・飲食店。",
    "tip": "冷凍ではない「活け松葉ガニ」を使用したプランを選ぶと、繊細な身の甘みとジューシーさの格別の違いを体験できます。"
  },
  {
    "key": "maruyama_river_stork_stay",
    "title": "3. 円山川下流湿地・コウノトリの郷＆玄武洞（奇跡の自然再生と六角柱状節理）",
    "timing": "通年（秋の円山川朝霧、冬の渡り鳥飛来、新緑の玄武洞）",
    "desc": "特別天然記念物・コウノトリが悠然と空を舞う円山川流域。ラムサール条約湿地にも登録された豊かな生態系が広がる「コウノトリの郷公園」や、約160万年前の火山活動が生み出した神秘的な六角形石柱群「玄武洞公園」。城崎の奥深い自然と地球の歴史を体感できます。",
    "spots": "玄武洞公園（玄武洞ミュージアム）、兵庫県立コウノトリの郷公園、円山川公苑（カヌー・スケート）",
    "access": "玄武洞公園へは城崎温泉駅より車・タクシーで約10分（対岸のJR玄武洞駅より渡し船もあり）。コウノトリの郷公園へは車で約20分。",
    "tip": "リニューアルされた玄武洞公園のライトアップやガイドツアーに参加すると、世界で初めて「地磁気の逆転」が発見された歴史を学べます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            undefined
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【兵庫・城崎温泉＆円山川】七つの外湯めぐり・浴衣柳並木＆津居山港松葉ガニ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            開湯1300年、志賀直哉の『城の崎にて』でも名高い名湯「城崎温泉」。大谿川（おおたにがわ）にかかる太鼓橋と柳並木、色浴衣と下駄を鳴らして巡る個性豊かな「七つの外湯」。そして冬の日本海がもたらす最高峰の味覚・津居山港直送の「本松葉ガニ」。情緒と美食が極まる関西屈指の名湯ステイへご案内します。
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
