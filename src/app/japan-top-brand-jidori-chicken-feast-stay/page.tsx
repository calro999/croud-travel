import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【日本三大地鶏＆銘柄鶏の宿】比内地鶏・名古屋コーチン・さつま地鶏・阿波尾鶏 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "全国の最高級ブランド地鶏完全特化！秋田「比内地鶏」のきりたんぽ鍋、愛知「名古屋コーチン」のひきずり鍋、鹿児島「さつま若しゃも・地鶏刺し」、徳島「阿波尾鶏」の炭火焼きと名門温泉旅館を徹底解説。",
  keywords: ["japan-top-brand-jidori-chicken-feast-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-top-brand-jidori-chicken-feast-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-top-brand-jidori-chicken-feast-stay", e);
  }
  return {};
}

export default function GourmetCuisineHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hinai_jidori_akita_stay",
    "title": "1. 秋田・比内地鶏（日本三大地鶏・濃厚なガラ出汁と本場きりたんぽ鍋）",
    "timing": "通年（秋の新米・冬の熱々きりたんぽ鍋シーズンは格別）",
    "desc": "国の天然記念物「比内鶏」とロードアイランドレッドを交配した最高峰地鶏「比内地鶏」。比内地鶏のガラをじっくり煮込んだ黄金色の出汁、手揉みで炭火焼きした新米のきりたんぽ、セリの根っこ、舞茸とともに味わう秋田伝統の味。",
    "spots": "大館・鹿角・田沢湖・乳頭温泉郷・男鹿温泉郷",
    "access": "秋田新幹線「田沢湖駅」「大曲駅」、JR奥羽本線「大館駅」。",
    "tip": "きりたんぽ鍋は、比内地鶏の脂が出汁に溶け出したスープをたっぷり吸い込んだきりたんぽが最高の贅沢です。"
  },
  {
    "key": "nagoya_cochin_aichi_stay",
    "title": "2. 愛知・名古屋コーチン（100年以上の歴史を誇るコクと弾力・濃厚卵）",
    "timing": "通年（すき焼き仕立ての「ひきずり鍋」や親子丼）",
    "desc": "明治初期に作出された純血の地鶏「名古屋コーチン」。赤みを帯びた肉質は適度な脂肪と強いコク、弾力ある歯ごたえ。すき焼き仕立てで鶏肉を食べる「ひきずり鍋」や、濃厚な黄身を使った極上プリン・茶碗蒸し。",
    "spots": "名古屋市内、三河温泉郷（西浦温泉・三谷温泉）、下呂温泉、長良川温泉",
    "access": "東海道新幹線「名古屋駅」、名鉄・近鉄沿線。",
    "tip": "名古屋コーチンの卵は一般的な卵より卵黄が大きく濃厚で、お肉を溶き卵に絡めて食べると極上のハーモニーが生まれます。"
  },
  {
    "key": "satsuma_awaodori_south_stay",
    "title": "3. 鹿児島・さつま地鶏＆徳島・阿波尾鶏（南国の太陽が育むジューシーな旨味）",
    "timing": "通年（炭火の煙をまとわせる豪快な黒焼き）",
    "desc": "薩摩藩の闘鶏から生まれた「さつま地鶏」の新鮮な鳥刺しや炭火黒焼き。徳島県が誇る出荷量日本一の地鶏「阿波尾鶏」のジューシーなステーキやすだち添え。甘口の九州醤油や阿波すだちとともに味わう南国の旨味。",
    "spots": "鹿児島（霧島温泉・指宿温泉）、徳島（祖谷温泉・鳴門温泉）",
    "access": "九州新幹線「鹿児島中央駅」、JR徳島駅・高松駅。",
    "tip": "さつま地鶏の炭火焼きは、立ち上る炭の煙で真っ黒に燻すように焼くことで、独特の香ばしさと旨味が凝縮されます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            JAPAN TOP BRAND JIDORI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【日本三大地鶏＆銘柄鶏の宿】比内地鶏・名古屋コーチン・さつま地鶏・阿波尾鶏 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            噛むほどに溢れ出す濃厚な旨味と抜群の歯ごたえ！日本三大地鶏「比内地鶏」「名古屋コーチン」「さつま地鶏」そして出荷量日本一の「阿波尾鶏」。炭火でじっくり焼き上げる香ばしい焼き鳥や、伝統の郷土鍋に舌鼓を打つ美食の旅。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 食材の魅力・産地・味わいポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要産地＆代表的料理</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 主なアクセス＆名湯地</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 美味しく味わう極意</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの美食厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    美食プラン
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
