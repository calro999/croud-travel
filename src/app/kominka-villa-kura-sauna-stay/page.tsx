import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【古民家一棟貸し・蔵サウナの宿】築100年再生邸宅・プライベート薪サウナ 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "贅沢な古民家一棟貸し＆プライベートサウナ宿完全特化！築100年以上の重厚な古民家リノベーション、蔵を改装した本格セルフロウリュ薪サウナ、地下水掛け流し水風呂、囲炉裏炭火焼きと星空外気浴を徹底解説。",
  keywords: ["kominka-villa-kura-sauna-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kominka-villa-kura-sauna-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kominka-villa-kura-sauna-stay", e);
  }
  return {};
}

export default function HeritageOnsenHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kominka_kura_sauna_villa",
    "title": "1. 蔵サウナ＆地下水水風呂（100年の歴史を持つ蔵の中でととのう極上体験）",
    "timing": "通年（冬の薪ストーブの暖かさと夏の澄んだ外気浴）",
    "desc": "重厚な土壁の「蔵（くら）」をそのまま改装したプライベートサウナ。フィンランド製薪ストーブに地元のほうじ茶やアロマ水をかけてセルフロウリュ。天然地下水の冷水風呂から、庭園のインフィニティチェアで満天の星空外気浴。",
    "spots": "プライベート蔵サウナ、地下水掛け流し壺水風呂、星空ととのいデッキ、焚き火スペース",
    "access": "長野、山梨、千葉・房総、兵庫・丹波篠山、高知などの自然豊かな里山エリア。",
    "tip": "サウナポンチョを着て焚き火を眺めながらの外気浴は、日常のストレスを完全にリセットしてくれます。"
  },
  {
    "key": "irori_charcoal_kominka",
    "title": "2. 囲炉裏炭火焼き＆地元ジビエ会席（パチパチと爆ぜる炭火を囲む団らんの夜）",
    "timing": "通年（秋〜冬の囲炉裏鍋・イワナの塩焼き・ジビエ炭火焼き）",
    "desc": "部屋の中央に据えられた本格的な囲炉裏。自在鉤に鉄鍋を掛け、炭火でじっくり焼く川魚の塩焼きや地元産黒毛和牛、猪・鹿などの天然ジビエ。薪のはぜる音を聞きながら地酒を酌み交わす特別な夜。",
    "spots": "本格囲炉裏の間、土間キッチン、羽釜ご飯炊き体験、縁側ラウンジ",
    "access": "里山の古民家再生ヴィラ。",
    "tip": "釜戸（かまど）や羽釜を使って自分で炊き上げる地元産コシヒカリのご飯は、おこげが香ばしく格別の美味しさです。"
  },
  {
    "key": "machiya_traditional_suite",
    "title": "3. 京都・金沢の伝統町家ステイ（坪庭を望む檜風呂と暮らすような旅）",
    "timing": "通年（静かな古都の風情と格子戸の美）",
    "desc": "石畳の路地奥に佇む京町家や金沢の町家。格子戸や通り庭、坪庭を望む半露天の檜風呂。最新の床暖房やシモンズ製ベッドを備え、伝統の趣と現代の快適性を両立。早朝の観光名所を独占できる立地の良さ。",
    "spots": "坪庭付き檜風呂、吹き抜けの火袋、格子戸の座敷、町家専用茶室",
    "access": "京都（祇園・東山・西陣）、金沢（ひがし茶屋街・主計町）など。",
    "tip": "老舗料亭からの仕出し料理（朝食・夕食）をお部屋に届けてもらうと、料亭の味をプライベート空間でゆっくり味わえます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KOMINKA VILLA & KURA SAUNA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【古民家一棟貸し・蔵サウナの宿】築100年再生邸宅・プライベート薪サウナ 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            築100年を超える豪農の屋敷や町家を贅沢に独占する「古民家一棟貸し」。太い梁と漆喰壁が包み込む歴史空間に、最新の快適設備とプライベート蔵サウナを完備。囲炉裏を囲んで炭火焼きを味わい、星空の下でととのう究極の休日。
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

              {/* 建築美・泉質・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 建築美・泉質・設備の魅力</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 代表的エリア＆アクセス</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 満足度を高める滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選名宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選名宿
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
