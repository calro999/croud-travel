import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【週末おこもり・読書＆ブックホテル】数万冊の本に囲まれるライブラリー宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "本の世界に没頭する最高のおこもり休日！ブックホテル＆ライブラリー温泉宿完全特化！箱根「箱根本箱」、蔵書数万冊の温泉ライブラリーリゾート、ブックカフェ併設デザイナーズホテル、読書専用ラウンジ宿を徹底解説。",
  keywords: ["book-hotel-library-stay-reading-retreat", "女性一人旅", "ソロ活", "ご褒美ステイ", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["book-hotel-library-stay-reading-retreat"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for book-hotel-library-stay-reading-retreat", e);
  }
  return {};
}

export default function WomenSoloRetreatHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hakone_book_hotel_retreat",
    "title": "1. 箱根本箱〜中強羅（約1.2万冊の本に囲まれる「本箱」のオーベルジュ）",
    "timing": "通年（静かな雨の日や雪の日の読書ステイは格別）",
    "desc": "全館に約1.2万冊の本が並ぶブックホテル「箱根本箱」。客室の露天風呂から望む箱根の山々。本棚の隙間に作られた秘密基地のような読書スペース「おこもりボックス」。地元の自然派イタリアンディナー。",
    "spots": "箱根本箱、彫刻の森美術館、箱根美術館（苔庭）、中強羅駅",
    "access": "箱根登山ケーブルカー「中強羅駅」下車徒歩約4分。小田原駅より送迎・車。",
    "tip": "箱根本箱の館内の本はすべて購入可能で、「あの人の本箱」コーナーでは著名人が選書した特別な本棚から思いがけない一冊と出会えます。"
  },
  {
    "key": "library_resort_reading_onsen",
    "title": "2. 温泉ライブラリーリゾート（名湯と読書ラウンジで目を休める休日）",
    "timing": "通年（何もしない贅沢を味わう連泊ステイ）",
    "desc": "大浴場や露天風呂のすぐそばに設けられた暖炉付き読書ラウンジ。アートブック、小説、旅のエッセイ、コミックまで揃う圧巻のコレクション。フリードリンクのコーヒーやハーブティーを飲みながらクッションに身を委ねる時間。",
    "spots": "松本本箱（長野・浅間温泉）、おちあいろう（伊豆・文化財ラウンジ）、星野リゾート 界",
    "access": "信州・伊豆・北陸・東北各温泉地。",
    "tip": "温泉と読書を交互に繰り返すと、副交感神経が優位になり、日頃のスマートフォンのブルーライト疲れや脳疲労が劇的に回復します。"
  },
  {
    "key": "urban_book_boutique_hotel",
    "title": "3. 東京＆京都・都市型ブックホテル（本棚の中に埋もれて眠るユニーク体験）",
    "timing": "通年（週末の気軽なひとりステイ・観光拠点）",
    "desc": "「泊まれる本屋」をコンセプトにしたデザインホテル。本棚の中にベッドが組み込まれた秘密基地のような空間や、専門のブックディレクターがテーマごとに選書したライブラリーホテル。お気に入りの本を抱えて眠りに落ちる幸せ。",
    "spots": "BOOK AND BED TOKYO、芝パークホテル（ライブラリーホテル）、TUNE STAY KYOTO（京都）",
    "access": "東京・新宿、京都駅周辺など。",
    "tip": "京都の「TUNE STAY KYOTO」では、約2,500冊の京都に関する本が集まる巨大な階段本棚があり、夜のショートフィルム上映会も楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-rose-950 via-pink-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-rose-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-rose-300 to-pink-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            BOOK HOTEL & RETREAT GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【週末おこもり・読書＆ブックホテル】数万冊の本に囲まれるライブラリー宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-pink-100/90 leading-relaxed">
            コーヒーを片手にページをめくり、活字の海に溺れる「読書＆ブックホテル」。壁一面に本が並ぶライブラリーラウンジ。客室に持ち込んで朝まで読書に浸る贅沢。温泉で目を休め、美味しい食事と本の世界に包まれる至福のおこもりステイへ。
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
              className="bg-white border border-rose-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-rose-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-0.5 rounded-full uppercase">
                    🌸 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-rose-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-200 space-y-1.5">
                  <span className="font-bold text-pink-950 block text-[11px]">📍 おすすめスポット＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">💡 ひとり旅を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選ソロステイ宿カード */}
              <div className="space-y-4 pt-4 border-t border-rose-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-rose-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
                    女性歓迎プラン
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-rose-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-rose-50 border-b border-rose-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-rose-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-rose-300 px-2 py-0.5 rounded border border-rose-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-rose-950 line-clamp-2">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-rose-950 bg-white hover:bg-rose-50 border border-rose-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
