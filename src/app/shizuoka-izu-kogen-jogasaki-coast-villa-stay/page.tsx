import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【静岡・伊豆高原＆城ヶ崎】城ヶ崎門脇吊橋・大室山＆露天風呂ヴィラ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "約4000年前の溶岩が創り出した城ヶ崎海岸の断崖絶壁と門脇吊橋、緑のすり鉢状火山・大室山、お洒落な別荘地・伊豆高原の隠れ家リゾートを巡る特化ガイド。客室露天風呂ヴィラや金目鯛美食宿を厳選。",
  keywords: ["shizuoka-izu-kogen-jogasaki-coast-villa-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shizuoka-izu-kogen-jogasaki-coast-villa-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shizuoka-izu-kogen-jogasaki-coast-villa-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "jogasaki_suspension_bridge_stay",
    "title": "1. 城ヶ崎海岸〜門脇吊橋・門脇埼灯台（断崖絶壁と太平洋の怒涛パノラマ）",
    "timing": "通年（晴天時の青い海と白波、初夏のアジサイ、冬のツワブキと澄んだ空気）",
    "desc": "大室山が約4000年前に噴火した溶岩が海に流れ込み、波の浸食によって形成された城ヶ崎海岸。高さ23m、長さ48mの「門脇吊橋」からは、真下に激しく打ち寄せる波が望めスリル満点。門脇埼灯台の展望台からは伊豆諸島を一望できます。",
    "spots": "門脇吊橋、門脇埼灯台、城ヶ崎ピクニカルコース（海岸遊歩道）、ニューヨークランプミュージアム＆フラワーガーデン",
    "access": "伊豆急行線「城ヶ崎海岸駅」より徒歩約25分、または「伊豆高原駅」よりバス約10分。東名「厚木IC」より小田原厚木道路経由で約90分。",
    "tip": "ニューヨークランプミュージアムのテラスカフェからは城ヶ崎海岸の絶景を眺めながらティータイムを楽しめます。"
  },
  {
    "key": "omuro_mountain_cherry_stay",
    "title": "2. 大室山リフト〜お鉢巡り＆さくらの里（伊豆高原のシンボル・緑のすり鉢火山）",
    "timing": "通年（2月の山焼き・春のさくらの里桜まつり・初夏〜秋の緑の山肌）",
    "desc": "標高580m、国の天然記念物に指定されているすり鉢状のスコリア丘「大室山」。爽快なペアリフトで山頂に登ると、直径300mの火口を一周する「お鉢巡り（約1km）」ができ、富士山や南アルプス、伊豆諸島の360度大パノラマが広がります。麓の「さくらの里」は約40種の名所です。",
    "spots": "大室山山頂遊歩道（お鉢巡り）、大室山登山リフト、さくらの里、伊豆シャボテン動物公園（カピバラ露天風呂）",
    "access": "伊豆急行線「伊豆高原駅」よりバスで約15〜20分。",
    "tip": "毎年2月第2日曜日に行われる「大室山の山焼き」は、山全体が炎に包まれる早春の伊豆の大迫力風物詩です。"
  },
  {
    "key": "izu_kogen_private_cottage_stay",
    "title": "3. 伊豆高原隠れ家ヴィラ＆地金目鯛の極上ディナー（森のプライベート別荘ステイ）",
    "timing": "通年（冬〜春の脂の乗った地金目鯛、温泉露天風呂付客室）",
    "desc": "広大な別荘地として発展した伊豆高原は、客室わずか数室のラグジュアリーな隠れ家オーベルジュや、離れ・コテージ形式のプライベート温泉ヴィラが充実。伊豆近海で水揚げされた極上の「地金目鯛の煮付け」や伊勢海老、あしたか牛の創作フレンチや会席料理が旅の夜を彩ります。",
    "spots": "伊豆高原アートギャラリー群、カフェテラス通り、赤沢日帰り温泉館、大室高原別荘地",
    "access": "伊豆急行線「伊豆高原駅」各宿より無料送迎あり（要予約）。",
    "tip": "露天風呂付き客室を選べば、小鳥のさえずりや満天の星空を眺めながら誰にも邪魔されない至福の湯浴みを満喫できます。"
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
            【静岡・伊豆高原＆城ヶ崎】城ヶ崎門脇吊橋・大室山リフト＆露天風呂ヴィラ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            相模湾の紺碧の海と、大室山の噴火が生んだダイナミックな溶岩海岸「城ヶ崎」。高さ23mのスリルあふれる門脇吊橋、リフトで登る大室山山頂のお鉢巡り、高原の別荘地に点在する隠れ家オーベルジュやプライベート露天風呂ヴィラ。洗練された大人の休日を叶える伊豆高原ステイへご案内します。
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
