import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【北海道・洞爺湖＆登別】地獄谷・洞爺湖花火＆絶景温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "北海道屈指の温泉天国！9種類の多彩な泉質が湧き出す「登別地獄谷」、半年間毎夜打ち上がる「洞爺湖ロングラン花火大会」、世界ジオパーク「有珠山・昭和新山」を徹底解説。レイクビュー露天風呂や老舗硫黄泉旅館を厳選。",
  keywords: ["hokkaido-toya-noboribetsu-jigokudani-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hokkaido-toya-noboribetsu-jigokudani-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hokkaido-toya-noboribetsu-jigokudani-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "noboribetsu_jigokudani_stay",
    "badge": "九種類の泉質が湧く温泉デパート",
    "title": "1. 登別温泉〜地獄谷・大湯沼・倶多楽湖（白濁硫黄泉と立ち上る噴煙）",
    "timing": "通年（冬の雪景色と湯けむり、夏の登別地獄まつり・鬼花火、秋の紅葉地獄谷）",
    "desc": "日量1万トン、自然湧出する温泉のデパート「登別温泉」。巨大な爆裂火口跡「地獄谷」の遊歩道からは、ゴウゴウと音を立てて噴き出すガスと熱湯を間近に見学。硫黄泉、食塩泉、明ばん泉など多彩な湯を巨大な大浴場や露天風呂で湯巡り。神秘のカルデラ湖「倶多楽湖」の絶景ドライブも人気です。",
    "spots": "登別地獄谷、大湯沼・天然足湯、登別クマ牧場（ロープウェイ）、登別伊達時代村、カルルス温泉",
    "access": "JR室蘭本線「登別駅」より道南バスで約15分。新千歳空港より高速バスで直行約65分、道央道「登別東IC」より約10分。",
    "tip": "大湯沼川の天然足湯は、川そのものが温泉となっており、森林浴をしながら天然の温かい川に足を浸すことができる野趣あふれる人気スポットです。"
  },
  {
    "key": "toya_lake_fireworks_stay",
    "badge": "毎夜開催・半年間の光の祭典",
    "title": "2. 洞爺湖温泉〜ロングラン花火大会＆中島遊覧船（客室露天から眺める湖上花火）",
    "timing": "4月下旬〜10月末（洞爺湖ロングラン花火大会）、冬のイルミネーションストリート",
    "desc": "約4万3千年前に形成された周囲約43kmのカルデラ湖「洞爺湖」。毎年4月28日から10月31日までの半年間、毎晩20時45分から約20分間打ち上がる「洞爺湖ロングラン花火大会」は圧巻。湖上を移動しながら打ち上がるため、温泉街の湖畔遊歩道や客室、展望露天風呂の湯船に浸かりながら花火を満喫できます。",
    "spots": "洞爺湖ロングラン花火大会、洞爺湖遊覧船（中島上陸）、洞爺湖畔彫刻公園、サイロ展望台、レイクヒル・ファーム（絶品ジェラート）",
    "access": "JR室蘭本線「洞爺駅」より道南バスで約20分。道央道「虻田洞爺湖IC」より約5分。札幌や新千歳空港からも車で約2時間。",
    "tip": "洞爺湖の花火鑑賞船に乗船すると、湖上から真上に広がる花火の臨場感と水面に映る光の反射を特等席で楽しめます。"
  },
  {
    "key": "shikotsu_toya_nature_stay",
    "badge": "世界ジオパーク・活火山の息吹",
    "title": "3. 有珠山ロープウェイ＆昭和新山・支笏洞爺国立公園（大地のエネルギーを体感）",
    "timing": "通年（春〜秋の爽快トレッキング、冬の銀世界と有珠山テラス）",
    "desc": "20世紀に4度も噴火を繰り返した生きた火山「有珠山（うすざん）」と、畑が突如隆起して誕生した奇跡の赤茶色の溶岩ドーム「昭和新山」。有珠山ロープウェイで山頂へ登れば、洞爺湖や羊蹄山、噴火湾まで見渡す360度の大パノラマと巨大な銀沼火口原の迫力に圧倒されます。",
    "spots": "有珠山ロープウェイ・有珠山テラス、昭和新山クマ牧場、金比羅火口災害遺構散策路、洞爺湖ビジターセンター・火山科学館",
    "access": "洞爺湖温泉バスターミナルより昭和新山行きバスで約15分。",
    "tip": "有珠山頂の「Mt.USUテラス」にはプライベート感のあるソファ席が用意されており、パノラマ絶景を眺めながら地元スイーツや珈琲を楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            TOYA & NOBORIBETSU GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【北海道・洞爺湖＆登別温泉】登別地獄谷・洞爺湖花火＆有珠山ジオパーク宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            もうもうと立ち上る白煙と煮えたぎる熱湯が圧倒的な迫力を放つ「登別地獄谷」。9種類もの異なる泉質が湧き出る日本有数の名湯から、半年間にわたり毎晩夜空を彩る「洞爺湖ロングラン花火大会」の絶景レイクビューへ。大地の鼓動を肌で感じる有珠山ジオパークのダイナミズムと、極上のいで湯と北海道の美食に癒される至高のステイへご案内します。
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
