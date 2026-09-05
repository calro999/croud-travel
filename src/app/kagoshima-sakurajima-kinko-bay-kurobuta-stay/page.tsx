import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【鹿児島・桜島＆城山】活火山パノラマ・黒豚しゃぶ＆展望温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "今なお噴煙を上げる世界的な活火山「桜島」、穏やかな錦江湾のオーシャンビュー、西郷隆盛最期の地「城山展望台」、最高峰ブランド「かごしま黒豚しゃぶしゃぶ」を徹底解説。桜島を望む展望露天風呂ホテルや名門温泉宿を厳選。",
  keywords: ["kagoshima-sakurajima-kinko-bay-kurobuta-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kagoshima-sakurajima-kinko-bay-kurobuta-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kagoshima-sakurajima-kinko-bay-kurobuta-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "sakurajima_volcano_view_stay",
    "badge": "世界でも稀な都市近接活火山",
    "title": "1. 桜島〜湯之平展望所・溶岩なぎさ遊歩道＆桜島フェリー（24時間運航の海の散歩道）",
    "timing": "通年（快晴時の青い空と錦江湾、夕陽に赤く染まる夕暮れの桜島、朝焼けのシルエット）",
    "desc": "周囲約55km、市街地からわずか4kmの距離に位置する生きた火山「桜島」。鹿児島港と桜島港を約15分で結ぶ「桜島フェリー」は24時間運航。一般人が立ち入れる最高地点（標高373m）の「湯之平展望所」からは、荒々しい火口の岩肌と眼下に広がる鹿児島市街地を一望。全長約3kmの溶岩なぎさ遊歩道ではゴツゴツとした大正溶岩原を散策できます。",
    "spots": "湯之平展望所、有村溶岩展望所、桜島溶岩なぎさ公園（全長100mの無料足湯）、黒神埋没鳥居、桜島フェリー名物うどん",
    "access": "鹿児島港フェリーターミナルより桜島フェリーで約15分（片道大人200円、車載も可能）。",
    "tip": "桜島フェリー船内のうどん店「やぶ金」のさつま揚げ入りうどんは、15分の短い乗船時間中に多くの乗客がすすり込む鹿児島の隠れた名物です。"
  },
  {
    "key": "kurobuta_shabu_gourmet_stay",
    "badge": "白身と称される上質な脂の甘み",
    "title": "2. かごしま黒豚しゃぶしゃぶ＆黒毛和牛・地鶏刺し（特製そばつゆと芋焼酎の饗宴）",
    "timing": "通年（冬のあったか黒豚しゃぶしゃぶ、鹿児島の本格芋焼酎とのペアリング）",
    "desc": "サツマイモを飼料に約8ヶ月間じっくり育てられた「かごしま黒豚」。きめ細やかな肉質と、白身と呼ばれる良質な脂身の甘みと歯切れの良さが特徴。鹿児島ではポン酢やごまだれだけでなく、鰹節の効いた特製「そばつゆ」とネギで食べるのが本場のスタイル。さらに新鮮な黒さつま鶏の鳥刺しや、きびなごの刺身など郷土料理が並びます。",
    "spots": "天文館通（鹿児島一の繁華街・黒豚料理名店群）、あぢもり（黒豚しゃぶしゃぶ発祥）、華蓮、天文館むじゃき（白熊かき氷）",
    "access": "鹿児島市電「天文館通」またはJR鹿児島中央駅周辺各所。",
    "tip": "食後のデザートには、フルーツと練乳がたっぷりかかった天文館むじゃきの名物「白熊（しろくま）」アイスが外せません。"
  },
  {
    "key": "shiroyama_observatory_stay",
    "badge": "標高108mからの天下の絶景",
    "title": "3. 城山展望台＆城山ホテル鹿児島・展望温泉（桜島と錦江湾を正面に望む特等席）",
    "timing": "通年（朝日に輝く桜島露天風呂、城山から望む鹿児島の夜景）",
    "desc": "西南戦争の最終激戦地であり、西郷隆盛の終焉の地として知られる「城山」。その山頂展望台に隣接して建つ名門「SHIROYAMA HOTEL kagoshima（城山ホテル鹿児島）」の展望露天風呂「さつま乃湯」は、地下1000mから湧き出る美肌温泉に浸かりながら、遮るもののない桜島と錦江湾の大パノラマを正面に望む全国屈指の絶景風呂です。",
    "spots": "城山展望台、城山自然遊歩道、西郷洞窟、西郷隆盛銅像、仙巌園（磯庭園・世界文化遺産）",
    "access": "JR鹿児島中央駅より車で約10分、またはカゴシマシティビュー（観光周遊バス）で城山下車。",
    "tip": "早朝の「さつま乃湯」からは、桜島の背後から太陽が昇る息をのむようなご来光を湯船の中から拝むことができます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SAKURAJIMA & KINKO BAY GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【鹿児島・桜島＆錦江湾・城山】活火山パノラマ・かごしま黒豚しゃぶ＆城山展望宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            鹿児島市街地の目の前にそびえ立ち、青い錦江湾（鹿児島湾）の海原越しに雄大な噴煙を上げる国際的活火山「桜島」。標高107mの高台「城山展望台」から見下ろす桜島と街並みのダイナミックなパノラマ。西郷隆盛や大久保利通ら幕末維新の英傑たちが愛した薩摩の風土。そして旨味と甘みが詰まった「かごしま黒豚しゃぶしゃぶ」と芋焼酎に酔いしれる南国・鹿児島ステイへご案内します。
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
