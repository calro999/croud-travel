import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【高知・桂浜＆高知城】坂本龍馬・カツオ藁焼き＆ひろめ市場宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "幕末の英雄・坂本龍馬が愛した名勝「桂浜」、現存十二天守にして日本唯一本丸御殿が残る「高知城」、屋台村でカツオの塩たたきと地酒に酔いしれる「ひろめ市場」、三百年続く「土佐の日曜市」を徹底解説。高知市内温泉ホテルや太平洋ビュー宿を厳選。",
  keywords: ["kochi-katsurahama-castle-hirome-market-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kochi-katsurahama-castle-hirome-market-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kochi-katsurahama-castle-hirome-market-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "katsurahama_ryoma_pacific_stay",
    "badge": "坂本龍馬が愛した月の名所",
    "title": "1. 桂浜〜坂本龍馬銅像・竜王岬＆桂浜水族館（弓状の砂浜と太平洋の怒涛）",
    "timing": "通年（「月の名所は桂浜」と歌われる名月、春〜秋の青い太平洋、冬の澄んだ水平線）",
    "desc": "高知市浦戸半島の先端に位置し、白砂青松の弓状の海岸線が美しい「桂浜」。太平洋を遥か見つめる高さ13m余りの「坂本龍馬像」がそびえ立ち、竜王岬の展望台からはどこまでも広がる大海原の絶景が一望。アットホームでユニークな展示が話題の「桂浜水族館」や、リニューアルした商業施設「桂浜 海のテラス」での買い物も楽しめます。",
    "spots": "桂浜公園（坂本龍馬像・竜王岬・海津見神社）、桂浜水族館、高知県立坂本龍馬記念館、桂浜 海のテラス",
    "access": "JR高知駅よりとさでん交通バス「桂浜行き」で約35分。高知龍馬空港より車で約30分。高知ICより約30分。",
    "tip": "春と秋には龍馬像の真横に特設展望台が設置され、龍馬と同じ目線で太平洋の大パノラマを眺めることができる貴重な体験ができます。"
  },
  {
    "key": "kochi_castle_sunday_market_stay",
    "badge": "本丸御殿が現存する日本唯一の名城",
    "title": "2. 高知城＆土佐の日曜市（山内一豊の城郭と三百年続く1kmの街路市）",
    "timing": "通年（毎週日曜日開催の日曜市（雨天決行）、春の高知城桜まつり、秋の城下町紅葉）",
    "desc": "初代土佐藩主・山内一豊が築城した「高知城」。江戸時代からの天守と本丸御殿の両方が現存する日本で唯一の城。追手門と天守を一枚の写真に収められる絶景ビューポイントが有名です。城へと続く追手筋では、元禄3年（1690年）から続く「土佐の日曜市」が開催。約1kmにわたり約300軒の露店が並び、田舎寿司、芋天、文旦、地酒がずらりと並びます。",
    "spots": "高知城（天守・本丸御殿・追手門）、高知城歴史博物館、土佐の日曜市（追手筋）、大橋通り商店街",
    "access": "JR高知駅より路面電車（とさでん）で「高知城前」下車徒歩約3分。日曜市は「蓮池町通」〜「高知城前」間。",
    "tip": "日曜市名物の「大平商店のいも天」は、揚げたてサクサクの甘い衣とホクホクのお芋が絶品で、常に行列ができる名物ソウルフードです。"
  },
  {
    "key": "hirome_market_katsuo_warayaki_stay",
    "badge": "土佐の食のワンダーランド",
    "title": "3. ひろめ市場「カツオの藁焼き塩たたき」＆屋台酒場（炎のパフォーマンスと乾杯文化）",
    "timing": "通年（春の初ガツオ、秋の脂が乗った戻りガツオ、昼から飲める大人の社交場）",
    "desc": "高知城のすぐ隣に位置する巨大な屋内屋台村「ひろめ市場」。約60店舗の飲食店や鮮魚店が集まり、名物「明神丸」や「やいろ亭」ではガラス越しに激しい炎で一気にカツオを焼き上げる藁焼き実演を間近に見学。焼き立てアツアツのカツオを厚切りにし、粗塩と生ニンニクスライスで食べる「塩たたき」は衝撃的な美味しさ。見知らぬ人とも盃を交わす土佐の「おきゃく」文化を満喫できます。",
    "spots": "ひろめ市場（明神丸・やいろ亭・軍鶏伝・安兵衛の餃子）、はりまや橋、帯屋町アーケード",
    "access": "路面電車「大橋通」下車徒歩約2分。高知城前からも徒歩約3分。",
    "tip": "ひろめ市場は昼前から夜遅くまで混雑するため、席を先に確保してから各店で料理やお酒を買い集めるのがスムーズです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KOCHI & KATSURAHAMA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【高知・桂浜＆高知城・ひろめ市場】坂本龍馬銅像・カツオ藁焼き塩たたき＆日曜市宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            黒潮躍る太平洋の荒波に向かって堂々と立つ坂本龍馬銅像の聖地「桂浜」。四層六階の美しい現存天守と本丸御殿が完全な形で残る天下の名城「高知城」。巨大な屋台村「ひろめ市場」で炎を上げて豪快に焼き上げる本場のカツオ藁焼き塩たたき。江戸時代から300年以上続く日本最大級の街路市「日曜市」。豪放磊落な土佐人気質と豊かな山海の美味を満喫する高知ステイへご案内します。
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
