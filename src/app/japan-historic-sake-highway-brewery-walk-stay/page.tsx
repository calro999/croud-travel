import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【日本銘酒街道・酒蔵の町並み巡り宿】灘・西条・伏見・魚沼・諏訪街道 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "白壁土蔵と杉玉が揺れる歴史の酒蔵通り！日本屈指の銘酒街道巡り＆温泉宿完全特化！兵庫灘五郷（有馬温泉）、広島西条酒蔵通り、京都伏見酒蔵水辺散策、新潟魚沼銘酒街道、長野諏訪甲州街道、歴史的蔵元見学と門前町ステイを徹底解説。",
  keywords: ["japan-historic-sake-highway-brewery-walk-stay", "日本酒旅行", "酒蔵巡り", "地酒ペアリング", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-historic-sake-highway-brewery-walk-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-historic-sake-highway-brewery-walk-stay", e);
  }
  return {};
}

export default function SakeTourismHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "nada_gogou_arima_onsen_stay",
    "title": "1. 兵庫・灘五郷〜有馬温泉（日本最大の酒処と日本最古の名湯）",
    "timing": "通年（蔵開きシーズン：1月〜3月・秋の灘の酒まつり）",
    "desc": "全国の清酒生産量の約25%を誇る日本最大の酒処「灘五郷（西郷・御影郷・魚崎郷・西宮郷・今津郷）」。宮水と山田錦、六甲おろしが生む「灘の男酒」。「白鶴酒造資料館」や「菊正宗酒造記念館」。六甲山を越えた先にある日本最古の温泉・有馬温泉の金泉銀泉。",
    "spots": "白鶴酒造資料館、菊正宗酒造記念館、沢の鶴資料館、神戸酒心館（福寿）、有馬温泉（金の湯・銀の湯）",
    "access": "阪神電車各駅（御影駅・住吉駅・魚崎駅等）徒歩圏内。有馬温泉へは六甲有馬ロープウェーまたはバスで約30分。",
    "tip": "灘五郷の酒蔵記念館では、昔の酒造り道具の展示だけでなく、蔵元限定の生原酒の試飲や酒スイーツ（酒粕ソフトクリーム）が楽しめます。"
  },
  {
    "key": "hiroshima_saijo_sake_town_stay",
    "title": "2. 広島・西条酒蔵通り〜東広島（赤瓦と白壁・赤レンガ煙突が続く日本三大酒処）",
    "timing": "通年（10月上旬の「酒まつり」・冬の新酒造り）",
    "desc": "灘・伏見と並び称される日本三大酒処のひとつ「西条」。「酒都西条」を象徴する赤レンガ煙突と白壁なまこ壁の酒蔵がJR西条駅周辺に7軒立ち並ぶ「西条酒蔵通り」。「賀茂鶴」「白牡丹」「福美人」。「美酒鍋（びしゅなべ）」を味わう旅。",
    "spots": "西条酒蔵通り（賀茂鶴酒造・福美人酒造・白牡丹酒造等7蔵）、くぐり門、西条酒蔵通り観光案内所、仏並温泉",
    "access": "JR山陽本線「西条駅」南口すぐ。広島空港よりリムジンバス・連絡バスで約25分。",
    "tip": "各酒蔵の前には「仕込み水（名水）」を自由に汲める水汲み場が設けられており、蔵ごとに硬度や味わいが微妙に異なる名水を飲み比べできます。"
  },
  {
    "key": "kyoto_fushimi_sake_canal_stay",
    "title": "3. 京都・伏見酒蔵水辺散策〜十石舟・名水伏水（柳並木と白壁土蔵の風情）",
    "timing": "通年（春の十石舟桜クルーズ・新緑・秋の紅葉）",
    "desc": "宇治川派流の運河沿いに黒板塀と白壁土蔵が連なる「伏見酒蔵の町並み」。桃山丘陵から湧き出る「伏水（中軟水）」が生むまろやかな「伏見の女酒」。「月桂冠大倉記念館」「キザクラカッパカントリー」。川沿いをゆったり進む観光船「十石舟」。",
    "spots": "月桂冠大倉記念館、キザクラカッパカントリー、十石舟乗船場、伏見十名水（御香宮神社の御香水）、寺田屋",
    "access": "京阪本線「中書島駅」または「伏見桃山駅」より徒歩約5〜10分。",
    "tip": "春と秋に運航される「十石舟」は、柳が揺れる濠川を酒蔵を眺めながら進む風情満点の水上散策で、事前予約がおすすめです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-stone-900 to-emerald-950 text-white p-8 md:p-14 shadow-xl border border-amber-300/30">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-400 to-yellow-300 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            HISTORIC SAKE HIGHWAY GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【日本銘酒街道・酒蔵の町並み巡り宿】灘・西条・伏見・魚沼・諏訪街道 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            軒先に掲げられた青々とした「杉玉」、黒板塀と白壁土蔵、赤レンガの煙突が連なる「酒蔵の町並み」。江戸時代から日本の酒造りを牽引してきた灘五郷、赤瓦の酒蔵が並ぶ西条、十石舟が往く京都伏見。歴史ある酒蔵をそぞろ歩き、名湯の宿で酔いしれる旅へ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆厳選宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-amber-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-amber-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    🍶 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-amber-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ酒蔵＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <span className="font-bold text-stone-950 block text-[11px]">🚅 アクセス＆蔵巡り目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                  <span className="font-bold text-emerald-950 block text-[11px]">💡 地酒体験を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-amber-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-amber-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                    銘酒厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-amber-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-amber-50/50 border-b border-amber-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-amber-800/40 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
                              {hotel.hotelSpecial}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-700 to-stone-800 hover:from-amber-600 hover:to-stone-700 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    </article>
                  ))}
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
          className="inline-flex items-center gap-2 text-xs font-bold text-amber-950 bg-white hover:bg-amber-50 border border-amber-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
