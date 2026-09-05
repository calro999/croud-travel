import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【宮崎・高千穂峡＆天岩戸】真名井の滝・天安河原＆神話宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "天孫降臨の地・神話の里「高千穂」！柱状節理の峡谷に水しぶきを上げる「真名井の滝」の手漕ぎボート、天照大神がお隠れになった「天岩戸神社」と八百万の神が集まった「天安河原」、毎夜奉納される高千穂夜神楽、最高峰高千穂牛を徹底解説。",
  keywords: ["miyazaki-takachiho-gorge-myth-power-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["miyazaki-takachiho-gorge-myth-power-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for miyazaki-takachiho-gorge-myth-power-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "takachiho_gorge_boat_stay",
    "badge": "国の名勝・天然記念物の神秘峡谷",
    "title": "1. 高千穂峡〜真名井の滝・貸ボート体験（マイナスイオン降り注ぐ奇跡の渓谷）",
    "timing": "通年（新緑の5〜6月、夏のエメラルドグリーンと涼風、秋の峡谷紅葉（11月中旬〜下旬））",
    "desc": "阿蘇山の火山活動によって噴出した火砕流が五ヶ瀬川に沿って流れ出し、急激に冷却されてできた柱状節理の懸崖「高千穂峡」。日本の滝百選に選ばれた落差約17mの「真名井（まない）の滝」を真下から見上げる手漕ぎの「貸しボート」は高千穂観光のハイライト。エメラルドグリーンの水面を進み、降り注ぐマイナスイオンと岩肌の迫力を体感できます。",
    "spots": "高千穂峡（真名井の滝・槍飛・仙人の屏風岩）、高千穂峡貸しボート、高千穂神社（夫婦杉・国指定重文）、おのころ池",
    "access": "延岡駅より路線バスで約90分。熊本空港より特急バスで約2時間。九州道「御船IC」より約90分。",
    "tip": "貸しボートは事前インターネット予約制（高千穂町観光協会公式HP）となっており、連休や週末は早期満席となるため旅程が決まり次第の即予約が必須です。"
  },
  {
    "key": "amanoyasu_kawara_myth_stay",
    "badge": "八百万の神が集った神秘の洞窟",
    "title": "2. 天岩戸神社＆天安河原・高千穂夜神楽（神話の原風景と国の重要無形民俗文化財）",
    "timing": "通年（毎夜20時より高千穂神社神楽殿で「高千穂神楽」奉納、11月中旬〜2月の夜神楽）",
    "desc": "太陽の神・天照大神（アマテラスオオミカミ）がお隠れになった洞窟「天岩戸」をご神体とする天岩戸神社。そこから岩戸川沿いの清流を歩いて約10分の場所にある巨大な洞窟「天安河原（あまのやすかわら）」。神々が集まって策を練った場所と伝えられ、参拝者の祈りが込められた無数の「重ね石」が立ち並ぶ光景は鳥肌が立つほどの神気が漂います。",
    "spots": "天岩戸神社（西本宮・東本宮・天岩戸遥拝所）、天安河原宮（仰慕窟）、高千穂神社神楽殿（観光夜神楽）、国見ヶ丘（雲海名所）",
    "access": "高千穂バスセンターより路線バスで天岩戸神社まで約15分。無料駐車場完備。",
    "tip": "天安河原では願い事をしながら小石を積むと願いが叶うと言われています。静かに心を込めて石を積んでみましょう。"
  },
  {
    "key": "takachiho_beef_gourmet_stay",
    "badge": "内閣総理大臣賞に輝いた最高峰和牛",
    "title": "3. 最高峰ブランド「高千穂牛」ステーキ＆神話の里の隠れ家宿（極上の霜降りと竹筒かっぽ酒）",
    "timing": "通年（宮崎牛のルーツとも称される高千穂牛、冬の神楽酒と地鍋会席）",
    "desc": "和牛のオリンピック（全国和牛能力共進会）で内閣総理大臣賞を受賞した宮崎牛の中でも、高千穂生まれ・高千穂育ちのA4・A5等級のみに許される幻のブランド「高千穂牛」。脂にしつこさがなく、赤身の芳醇な旨味が口いっぱいに広がるステーキや陶板焼きは絶品。竹の筒に地酒を入れて炭火で温めて飲む郷土の「かっぽ酒」とともに味わう夜は格別です。",
    "spots": "高千穂牛レストラン和（なごみ）、高千穂温泉、離れ宿神仙、旅館深雪、高千穂がまだせ市場",
    "access": "高千穂町中心部各所。",
    "tip": "秋から初冬（9月中旬〜11月下旬）の早朝には、標高513mの「国見ヶ丘」から高千穂盆地を覆い尽くす幻想的な雲海を望むことができます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            TAKACHIHO & MYTH GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【宮崎・高千穂峡＆天岩戸神社】真名井の滝貸ボート・八百万の神天安河原＆高千穂牛宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            日本神話の舞台として古事記や日本書紀に記された神々の降臨の地「高千穂（たかちほ）」。阿蘇の火砕流が削り出だした高さ100mの柱状節理の断崖と、エメラルドグリーンの水面に流れ落ちる名瀑「真名井の滝」。天照大神が隠れた洞窟を祀る天岩戸神社、無数の祈りの積石が並ぶ神秘の「天安河原」。日本古来の信仰と神秘的なエネルギーに包まれる、九州最高峰のパワースポットステイへご案内します。
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
