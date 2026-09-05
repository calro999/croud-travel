import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【香川・琴平＆こんぴら温泉】金刀比羅宮・讃岐うどん＆名湯宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "「さぬきのこんぴらさん」金刀比羅宮の本宮785段・奥社1368段参拝、日本最古の芝居小屋「旧金毘羅大芝居（金丸座）」、本場讃岐うどん手打ち体験＆名店巡り、名湯「こんぴら温泉郷」を徹底解説。石段街の老舗旅館や庭園露天宿を厳選。",
  keywords: ["kagawa-kotohira-konpira-shrine-sanuki-udon-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kagawa-kotohira-konpira-shrine-sanuki-udon-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kagawa-kotohira-konpira-shrine-sanuki-udon-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "konpira_thousand_stairs_stay",
    "badge": "一生に一度のこんぴら参り",
    "title": "1. 金刀比羅宮〜785段の本宮・奥社1368段（石段街参道と讃岐平野の絶景）",
    "timing": "通年（春の桜並木参道、新緑の初夏、秋の紅葉谷、初詣の賑わい）",
    "desc": "象頭山の中腹に鎮座する全国の金刀比羅神社の総本宮。お土産屋が並ぶ石段街から、大門、国の重要文化財の旭社を経て、本宮（785段）へ。本宮の展望デッキからは丸亀城や讃岐富士（飯野山）、遠く瀬戸大橋まで見渡す大パノラマが広がります。さらに体力に自信のある方はパワースポット「奥社（厳魂神社・1368段）」を目指すのがおすすめです。",
    "spots": "金刀比羅宮（大門・旭社・本宮・厳魂神社奥社）、表参道石段街、資生堂パーラー神椿（境内カフェ）、金刀比羅宮表書院（円山応挙障壁画）",
    "access": "JR土讃線「琴平駅」または琴電「琴電琴平駅」下車徒歩約15分（石段登り口）。高松空港より琴空バス（リムジン）で約50分。",
    "tip": "参道の登り口各店や旅館では「参拝用杖」を無料レンタルしています。登り始める前に杖を借りておくと足腰の負担が大幅に軽減されます。"
  },
  {
    "key": "sanuki_udon_craft_gourmet_stay",
    "badge": "本場讃岐うどん名店＆手打ち体験",
    "title": "2. 本場讃岐うどん巡り＆中野うどん学校・香川名物「骨付鳥」（コシの極みとジューシーな地鶏）",
    "timing": "通年（朝うどんから楽しむ名店巡り、夜の骨付鳥と地酒）",
    "desc": "うどん県・香川の中心地、琴平周辺は讃岐うどんの有名店がひしめく激戦区。いりこ出汁が香る透き通るつゆと、力強いコシの麺。「中野うどん学校」では音楽に合わせて麺を踏んで打つ大人気の手打ち体験が楽しめます。また夜には、スパイスを効かせて皮をパリッと焼き上げた香川のソウルフード「骨付鳥（おやどり・ひなどり）」をビールと共に堪能できます。",
    "spots": "中野うどん学校 琴平校、こんぴらうどん（参道名店）、骨付鳥田中屋、しょうゆ豆本舗",
    "access": "琴平町内各所。高松市内や三豊エリアのうどん名店へも車や電車で30分圏内。",
    "tip": "骨付鳥は噛めば噛むほど濃厚な旨味が広がる「おや」と、柔らかくジューシーな「ひな」があり、好みに合わせて選ぶか食べ比べるのが通です。"
  },
  {
    "key": "kotohira_kabuki_theatre_stay",
    "badge": "日本最古の芝居小屋と名湯",
    "title": "3. 旧金毘羅大芝居「金丸座」＆こんぴら温泉郷（江戸の芝居町情緒と美肌露天風呂）",
    "timing": "通年（毎年4月の四国こんぴら歌舞伎大芝居、通年の内部見学）",
    "desc": "天保6年（1835年）に建築された現存する日本最古の芝居小屋「旧金毘羅大芝居（金丸座・国指定重要文化財）」。人力で動かす廻り舞台や奈落、ぶどう棚など江戸時代の劇場構造をそのまま見学できます。参拝と観光の後は、門前町に湧く「こんぴら温泉郷」へ。庭園露天風呂や讃岐平野を一望する展望風呂で至福のリラクゼーションを満喫できます。",
    "spots": "旧金毘羅大芝居（金丸座）、ことひら温泉琴参閣、湯元八千代、桜の抄、敷島館（登録有形文化財復元宿）",
    "access": "金丸座へは琴平駅より徒歩約20分。温泉街は琴平駅周辺から参道沿いに広がる。",
    "tip": "金丸座は歌舞伎公演期間中を除き、内部や舞台裏・奈落を一般公開しており、江戸時代の歌舞伎役者や観客の熱気を肌で体感できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KOTOHIRA & KONPIRA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【香川・琴平＆こんぴら温泉・讃岐うどん】金刀比羅宮785段階段・金丸座＆うどん宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            古くから「一生に一度はこんぴら参り」と庶民の憧れを集めた海の神様「金刀比羅宮」。門前町から本宮まで785段、奥社まで1368段の石段を登り切った先に広がる讃岐平野と讃岐富士の絶景パノラマ。江戸時代の天保6年に建てられた日本最古の芝居小屋「金丸座」、本場の打ちたて讃岐うどん、そして石段登りの疲れを癒す「こんぴら温泉」のまろやかな名湯に浸かる香川・琴平ステイへご案内します。
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
