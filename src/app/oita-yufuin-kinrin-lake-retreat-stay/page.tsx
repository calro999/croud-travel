import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【大分・由布院＆金鱗湖】朝霧の湖・離れ客室露天宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "湯布院のシンボル「金鱗湖」の幻想的な冬の朝霧、豊後富士「由布岳」を仰ぐ大自然、お洒落なショップやアートカフェが連なる「湯の坪街道」、全室離れ・客室露天風呂付きの隠れ家高級旅館を徹底解説。憧れの由布院ステイを厳選。",
  keywords: ["oita-yufuin-kinrin-lake-retreat-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["oita-yufuin-kinrin-lake-retreat-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for oita-yufuin-kinrin-lake-retreat-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kinrin_lake_morning_mist_stay",
    "badge": "湖面から立ち上る奇跡の朝霧",
    "title": "1. 金鱗湖〜朝霧の幻想風景＆天祖神社（清水と温泉が湧き出す神秘の湖）",
    "timing": "通年（秋〜冬の早朝（10月〜2月）に発生する「朝霧」は必見。春の新緑、秋の紅葉も格別）",
    "desc": "湖底から清水と熱い温泉が同時に湧き出ているため、秋から冬にかけての早朝、外気温との温度差によって湖面から白い霧が立ち上る奇跡の絶景「金鱗湖の朝霧」。湖畔に佇む天祖神社の水中鳥居や、藁葺き屋根のカフェが朝霧のベールに包まれる光景は息をのむ美しさです。",
    "spots": "金鱗湖、天祖神社（湖上の水中鳥居）、マルク・シャガールゆふいん金鱗湖美術館、カフェ・ラ・リューシュ",
    "access": "JR久大本線「由布院駅」より徒歩約20分（タクシーで約5分）。大分道「湯布院IC」より約10分。",
    "tip": "朝霧を見るなら日の出直後から午前8時頃までの冷え込んだ風のない早朝が狙い目。湖畔のカフェで温かい珈琲を片手に眺めるのが極上です。"
  },
  {
    "key": "yunotsubo_street_retreat_stay",
    "badge": "クラフト・アートとお洒落カフェ",
    "title": "2. 湯の坪街道＆COMICO ART MUSEUM（由布岳を仰ぐモダンレトロな散策路）",
    "timing": "通年（四季折々の山並みとスイーツ巡り・アート鑑賞）",
    "desc": "由布院駅から金鱗湖へと続くメインストリート「湯の坪街道」。名物の金賞コロッケ、ロールケーキ（B-speak）、プリンどら焼きなどのご当地スイーツ店や、木工・竹細工のクラフトショップが軒を連ねます。世界的建築家・隈研吾が設計した「COMICO ART MUSEUM YUFUIN」など現代アートスポットも充実。",
    "spots": "湯の坪街道、COMICO ART MUSEUM YUFUIN、湯布院フローラルヴィレッジ、B-speak、山水館",
    "access": "由布院駅より金鱗湖方面へ徒歩すぐ。",
    "tip": "湯の坪街道から一本外れた大分川沿いの遊歩道は、菜の花や桜、コスモスが咲き誇り、由布岳の全景をバックに混雑なく散策できる隠れ道です。"
  },
  {
    "key": "yufuin_exclusive_villa_stay",
    "badge": "全室離れ・大人の隠れ家リゾート",
    "title": "3. 全室離れ・客室露天風呂付き極上宿（静寂の森で過ごすプライベート湯浴み）",
    "timing": "通年（星空露天風呂、初夏の新緑陰、秋の紅葉、冬の静寂雪見風呂）",
    "desc": "由布院温泉の真骨頂は、街の喧騒から少し離れた静かな森や田園に佇む「全室離れ形式」のラグジュアリー旅館。広々とした和モダン客室に、由布岳を望む専用の内湯や庭園露天風呂を完備。豊後牛の炭火焼きや関アジ・関サバなど大分の豊かな山海の幸をお部屋で堪能できます。",
    "spots": "亀の井別荘、玉の湯、山荘無量塔（由布院御三家）、名峰由布岳ビュー各宿",
    "access": "由布院駅周辺各宿より無料送迎サービスあり（事前予約推奨）。",
    "tip": "由布院は日本第2位の湧出量を誇り、お湯は肌触りの柔らかな単純温泉。赤ちゃんからお年寄りまで肌に優しく何度でも湯浴みを楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            YUFUIN & KINRIN LAKE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【大分・由布院＆金鱗湖】朝霧の湖畔・由布岳望む離れ客室露天風呂＆湯の坪街道宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            豊後富士と呼ばれる秀峰・由布岳の裾野に広がる日本屈指の温泉保養地「由布院（湯布院）」。清水と温泉が同時に湧き出る不思議な「金鱗湖」に立ちこめる幻想的な朝霧。木立の中に静かに佇む数奇屋造りの離れ宿、鳥のさえずりと共に楽しむ客室専用露天風呂、そして湯の坪街道のアート散策。大人が心から寛げる洗練された隠れ家リゾートへご案内します。
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
