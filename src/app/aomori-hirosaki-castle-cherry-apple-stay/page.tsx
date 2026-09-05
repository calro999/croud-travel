import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【青森・弘前】弘前城桜・津軽りんご＆三味線宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "死ぬまでに行きたい世界の絶景「弘前公園の花筏（はないかだ）」、現存十二天守「弘前城」、生産量日本一の津軽りんご＆アップルパイ巡り、明治大正のレトロ洋館群、生演奏を聴ける津軽三味線の宿を徹底解説。弘前市内ホテルや名湯温泉旅館を厳選。",
  keywords: ["aomori-hirosaki-castle-cherry-apple-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["aomori-hirosaki-castle-cherry-apple-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for aomori-hirosaki-castle-cherry-apple-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hirosaki_castle_cherry_moat_stay",
    "badge": "死ぬまでに行きたい世界の絶景",
    "title": "1. 弘前公園（鷹揚公園）〜弘前城天守・桜のトンネル＆花筏（日本一の桜の名所）",
    "timing": "4月下旬〜5月上旬（弘前さくらまつり）、秋の紅葉まつり、冬の弘前城雪燈籠まつり",
    "desc": "約2600本もの桜が咲き誇る日本一の桜の名所「弘前公園」。りんごの剪定技術を応用した手入れにより、一枝に複数の花がボリューム満点に咲くのが特徴。満開を過ぎると外堀の水面が散った花びらで埋め尽くされる「花筏（はないかだ）」は世界中の旅人を魅了。石垣修理のため本丸内へ曳屋（ひきや）された現存天守と名峰岩木山のコラボレーションも必見です。",
    "spots": "弘前城天守・本丸、弘前公園外堀（花筏スポット・春陽橋）、桜のトンネル、中濠観光舟、藤田記念庭園",
    "access": "JR奥羽本線「弘前駅」より弘南バスで約15分（市役所前下車徒歩すぐ）。青森空港より連絡バスで約55分。東北道「大鰐弘前IC」より約25分。",
    "tip": "夜の弘前城ライトアップは幻想的。風のない夜には、お堀の水鏡に満開の夜桜が完璧に映り込み息をのむ美しさです。"
  },
  {
    "key": "tsugaru_apple_french_cider_stay",
    "badge": "生産量日本一・りんごの街",
    "title": "2. 津軽りんごスイーツ巡り＆アップルパイガイド・弘前フレンチ（地元シードルとの饗宴）",
    "timing": "通年（秋〜冬の獲れたてりんごシーズン、通年のアップルパイ巡り）",
    "desc": "日本全国のりんご生産量の約2割を占める日本一のりんごの街・弘前。市内には40軒以上の洋菓子店やカフェが独自のアップルパイを提供しており、「弘前アップルパイガイドマップ」を片手に食べ歩きが大人気。また弘前は人口比でフランス料理店が多い「フレンチの街」としても知られ、津軽の旬野菜や海鮮、地元のクラフトシードルとのマリアージュが楽しめます。",
    "spots": "弘前市りんご公園、藤田記念庭園洋館「大正浪漫喫茶室」、ル・ブルジョン、レストラン山崎（奇跡のりんごフレンチ）",
    "access": "弘前市街地各所。大正浪漫喫茶室は弘前公園に隣接。",
    "tip": "「大正浪漫喫茶室」では市内の名店から集められた複数種類のアップルパイをテラス席で一度に注文・食べ比べできます。"
  },
  {
    "key": "hirosaki_western_architecture_stay",
    "badge": "モダンな洋館群と津軽三味線の魂",
    "title": "3. 弘前レトロ洋館群＆迫力の津軽三味線生演奏（明治モダニズムと津軽富士のいで湯）",
    "timing": "通年（夏の弘前ねぷたまつり（8月1〜7日）、冬の洋館雪景色ライトアップ）",
    "desc": "明治時代、学都として発展した弘前には、名棟梁・堀江佐吉が手掛けた「旧弘前市立図書館」や「旧第五十九銀行本店本館（青森銀行記念館）」など、赤や緑のドーム屋根が美しいハイカラな洋館群が現存。夜は津軽三味線の力強い撥（ばち）さばきが響き渡るライブ居酒屋や温泉宿へ。岩木山麓の嶽温泉（白濁硫黄泉）や大鰐温泉のいで湯も至近です。",
    "spots": "旧弘前市立図書館、旧東奥義塾外人教師館、カトリック弘前教会、津軽藩ねぷた村（三味線生演奏）、嶽温泉・岩木山神社",
    "access": "洋館群は弘前公園追手門周辺に集中（徒歩圏内）。嶽温泉へは弘前駅よりバス約50分。",
    "tip": "津軽藩ねぷた村では、実物大の巨大な扇ねぷたの見学とともに、日本一の腕前を持つ奏者による迫力満点の津軽三味線生演奏を間近で鑑賞できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HIROSAKI & APPLE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【青森・弘前＆津軽りんご】弘前公園日本一の桜花筏・洋館建築＆津軽三味線宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            春、お堀一面がピンクの花びらの絨毯で埋め尽くされる奇跡の絶景「弘前公園の花筏（はないかだ）」。重要文化財の現存天守を彩る約2600本の桜の古木。弘前アップルパイの香ばしい香り、明治期に外国人教師を迎えて建てられたモダンな洋館群、そして力強く魂を揺さぶる「津軽三味線」の生演奏。津軽富士・岩木山の麓で文化と美食に浸る弘前ステイへご案内します。
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
