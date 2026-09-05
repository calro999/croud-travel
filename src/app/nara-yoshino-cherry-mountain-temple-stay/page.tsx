import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【奈良・吉野山＆金峯山寺】一目千本桜・蔵王堂＆柿の葉寿司宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "山全体が約3万本の桜で埋め尽くされる世界遺産「吉野山（下千本・中千本・上千本・奥千本）」、修験道の根本道場・金峯山寺の秘仏本尊「金剛蔵王権現（青の神仏）」、吉水神社、吉野本葛料理や柿の葉寿司を徹底解説。歴史ある宿坊やパノラマ旅館を厳選。",
  keywords: ["nara-yoshino-cherry-mountain-temple-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nara-yoshino-cherry-mountain-temple-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nara-yoshino-cherry-mountain-temple-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "yoshino_thousand_cherries_stay",
    "badge": "三万本の桜が山を駆け上がる奇跡",
    "title": "1. 吉野山「一目千本桜」（下千本・中千本・上千本・奥千本の桜グラデーション）",
    "timing": "4月上旬〜4月下旬（標高差により下千本から奥千本へと約1ヶ月かけて開花が進む春、秋の全山紅葉）",
    "desc": "約3万本もの白山桜が尾根から谷へと埋め尽くす吉野山。桜がご神木として献木されてきた歴史を持ち、麓から山頂へ向かって「下千本」「中千本」「上千本」「奥千本」と標高差約600mを駆け上がるように咲き進みます。吉水神社から望む「一目千本」の絶景や、花矢倉展望台から見下ろす上千本・中千本のパノラマは息をのむ美しさです。",
    "spots": "吉水神社（一目千本テラス）、花矢倉展望台、下千本展望所、七曲り坂、西行庵（奥千本）",
    "access": "近鉄吉野線「吉野駅」下車（大阪阿部野橋駅より特急で直通約1時間15分、京都駅より約1時間40分）。吉野山ロープウェイ利用。",
    "tip": "吉野山内の宿に宿泊すれば、日帰り観光客の混雑が引いた夕暮れや早朝に、鳥のさえずりと共に静寂の桜景色を心ゆくまで堪能できます。"
  },
  {
    "key": "kinpusenji_zao_gongen_stay",
    "badge": "世界遺産・修験道の根本道場",
    "title": "2. 金峯山寺蔵王堂＆青い秘仏本尊（東大寺大仏殿に次ぐ日本屈指の大木造建築）",
    "timing": "春・秋の特別ご開帳期間（秘仏・金剛蔵王権現三尊特別公開）、通年の境内拝観",
    "desc": "白鳳時代に役行者が開いた修験道の総本山「金峯山寺（きんぷせんじ）」。堂々たる威容を誇る本堂「蔵王堂（国宝）」は木造古建築として世界遺産。特別公開される本尊「金剛蔵王権現三尊」は、高さ約7mにも達する青く憤怒の形相をした巨大な秘仏で、悪魔を降伏させ慈悲の心で人々を救う圧倒的な存在感と神気が漂います。",
    "spots": "金峯山寺蔵王堂（国宝）、仁王門、吉野水分神社（世界遺産）、吉水神社（義経潜居の間・後醍醐天皇玉座）、脳天大神龍王院",
    "access": "吉野山ロープウェイ「吉野山駅」下車徒歩約10分。",
    "tip": "蔵王堂の朝の勤行（毎朝開催）への参加は、山伏の吹き鳴らす法螺貝の重低音と太鼓・読経が堂内に響き渡り、魂が震えるような体験ができます。"
  },
  {
    "key": "yoshino_kuzu_kaki_leaf_sushi_stay",
    "badge": "吉野の二大伝統郷土グルメ",
    "title": "3. 吉野本葛料理（葛きり・葛もち）＆伝統の「柿の葉寿司」（鯖と鮭の押し寿司）",
    "timing": "通年（作りたて透明な温葛もち、柿の葉の香りが移った押し寿司）",
    "desc": "清らかな水と冬の寒冷な気候で作られる最高級デンプン「吉野本葛」。注文を受けてから練り上げる出来立ての「葛きり」や「葛もち」は、賞味期限わずか10分の透き通る弾力と喉越しが極上。また、塩締めした鯖や鮭を酢飯に乗せ、抗菌作用のある柿の葉で包んで重石で押しを効かせた「柿の葉寿司」は、吉野の旅の定番名物です。",
    "spots": "中井春風堂（賞味期限10分の本葛もち実演）、八十吉、やっこ（柿の葉寿司名店）、ひょうたろう",
    "access": "吉野山中千本・下千本の門前商店街沿い各所。",
    "tip": "「ひょうたろう」の柿の葉寿司は、製造2日目が味が馴染んで最も美味しいとされるこだわり。お土産にも喜ばれます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            YOSHINO & SAKURA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【奈良・吉野山＆金峯山寺】一目千本桜・世界遺産蔵王堂青神仏＆吉野葛・柿の葉寿司宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            山肌を桜色のグラデーションで染め上げ「一目千本」と称えられる日本一の桜の聖地「吉野山」。役行者（えんのぎょうじゃ）が桜の木に彫ったとされる修験道の守護仏、金峯山寺蔵王堂の三尊の青い秘仏「金剛蔵王権現」。源義経と静御前の哀話や後醍醐天皇の南朝悲話が息づく歴史の尾根道。伝統の柿の葉寿司と吉野本葛の滑らかな舌触りを堪能する、世界遺産・吉野ステイへご案内します。
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
