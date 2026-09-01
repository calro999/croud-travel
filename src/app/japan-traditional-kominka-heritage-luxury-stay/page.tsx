import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【一棟貸し古民家・登録有形文化財宿】築100年以上の歴史建築＆モダンラグジュアリー 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本の美意識と現代の快適性が調和する最高峰の隠れ家！一棟貸し古民家・登録有形文化財リノベーション宿完全特化！京都町家、信州・飛騨の豪農屋敷、瀬戸内・出雲の蔵サウナ付き邸宅、出張料理人付き古民家宿を徹底解説。",
  keywords: ["japan-traditional-kominka-heritage-luxury-stay", "宿泊予約", "高級リゾート", "記念日ホテル", "ラグジュアリーステイ", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-traditional-kominka-heritage-luxury-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-traditional-kominka-heritage-luxury-stay", e);
  }
  return {};
}

export default function LuxuryPremiumHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kyoto_machiya_heritage_luxury",
    "title": "1. 京都・坪庭と数寄屋建築を独占する一棟貸しプレミアム町家",
    "timing": "通年（桜の春・新緑の初夏・紅葉の秋・静寂の雪景色）",
    "desc": "祇園や東山、西陣の路地奥に佇む伝統町家。職人の手による漆喰壁と網代天井。手入れの行き届いた坪庭を眺める高野槇風呂。ミシュラン星付き料亭からの仕出し会席や、専属シェフが目の前の町家キッチンで腕を振るう出張割烹。",
    "spots": "祇園・宮川町の町家宿、nazuna 京都 椿通、Nazuna 京都 二条城、町家レジデンスイン京都",
    "access": "JR京都駅よりタクシー約10〜15分。",
    "tip": "一棟貸し町家では、早朝の観光客がいない静寂な京都の路地を散策し、老舗茶舗の抹茶を坪庭の前で点てていただく優雅な時間を過ごせます。"
  },
  {
    "key": "shinshu_hida_mansion_kominka",
    "title": "2. 信州・飛騨・東北・築200年の豪農屋敷＆蔵サウナ付き古民家ヴィラ",
    "timing": "通年（薪ストーブの炎が揺れる冬期は格別の情緒）",
    "desc": "豪雪地帯の巨大なケヤキの梁を活かした重厚な古民家。かつて米蔵や酒蔵として使われていた蔵を本格フィンランドサウナへ改装。囲炉裏を囲んで味わうジビエ鍋や信州牛の炭火焼き。現代アートと古家具が調和する空間。",
    "spots": "Satoyama villa DEN（松本）、BYAKU Narai（奈良井宿）、ヤマガタ サウナ ヴィラ",
    "access": "中央道または北陸道経由、車でのアクセス。",
    "tip": "蔵を改装したプライベートサウナでは、セルフロウリュを楽しんだ後、清らかな雪解け水の水風呂に入り、満天の星空の下で外気浴ができます。"
  },
  {
    "key": "setouchi_sanin_ocean_kominka",
    "title": "3. 瀬戸内＆山陰・重要文化財リノベーション＆海を望む歴史邸宅",
    "timing": "通年（穏やかな瀬戸内海の多島美と山陰の城下町）",
    "desc": "瀬戸内の港町や出雲・石見の旧商家・船宿を再生した高級宿。国の登録有形文化財に指定された格式高い建築。海を見渡すウッドデッキ、地元漁師から直接仕入れる新鮮な魚介を使った地産地消ディナー。",
    "spots": "Azumi Setoda（生口島）、せとうち 湊のやど（尾道）、NIPPONIA 出雲平田 木綿街道",
    "access": "山陽新幹線・広島空港または出雲空港より車。",
    "tip": "アマンの創業者エイドリアン・ゼッカが手掛けた「Azumi Setoda」では、築140年の豪商邸宅の意匠と世界最高峰のホスピタリティが融合した体験が味わえます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 text-white p-8 md:p-14 shadow-2xl border border-amber-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-amber-500 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            KOMINKA LUXURY GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【一棟貸し古民家・登録有形文化財宿】築100年以上の歴史建築＆モダンラグジュアリー 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            太い梁、黒光りする柱、土壁と坪庭。百年の時を紡ぐ日本建築の美しさをそのままに、最高級ベッドや檜風呂、薪ストーブを備えた「一棟貸し古民家ラグジュアリー宿」。誰にも邪魔されないプライベート空間で、本物の和の贅沢を味わう旅へ。
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
                    💎 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">👑 代表的な宿・建築の特徴</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <span className="font-bold text-stone-950 block text-[11px]">🛥️ アクセス＆送迎案内</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">✨ 極上ステイを叶えるポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選プレミアム宿カード */}
              <div className="space-y-4 pt-4 border-t border-amber-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-stone-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの最高峰宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-amber-900 bg-amber-100/70 border border-amber-300 px-3 py-1 rounded-full">
                    極上プレミアム
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-amber-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-stone-100 border-b border-stone-200">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-stone-950/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-950 line-clamp-2">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-950 bg-white hover:bg-stone-50 border border-stone-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
