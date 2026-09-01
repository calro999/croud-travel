import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【愛媛・宇和島＆愛南・滑床渓谷】現存天守宇和島城・滑床キャニオニング＆宇和島鯛めし宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "伊達十万石の城下町とキャニオニングの聖地・愛媛宇和島＆南予エリア完全特化！現存十二天守「宇和島城」、日本の滝百選「雪輪の滝・滑床渓谷」、真珠の海「宇和海」、名物「宇和島鯛めし・愛南びやびやかつお宿」を徹底解説。",
  keywords: ["ehime-uwajima-ainan-nametoko-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["ehime-uwajima-ainan-nametoko-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ehime-uwajima-ainan-nametoko-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "uwajima_castle_hotel_stay",
    "title": "1. 宇和島城〜天赦園・市立伊達博物館（現存十二天守と名園）",
    "timing": "通年（春の桜・藤の花・秋の紅葉）",
    "desc": "築城の名手・藤堂高虎が創建し、伊達氏が改修した「現存十二天守・宇和島城（国の重要文化財）」。海城の面影を残す天守からの宇和島湾パノラマ。伊達家の回遊式庭園「天赦園（白玉藤）」。真珠養殖日本一の宇和海。",
    "spots": "宇和島城（天守・上り立ち門）、名勝 天赦園、宇和島市立伊達博物館、道の駅みなとオアシスうわじま きさいや広場",
    "access": "JR予讃線「宇和島駅」下車徒歩約15分。松山空港より特急列車・バスで約80分。",
    "tip": "宇和島城の石垣は「不等辺五角形」という珍しい縄張りで造られており、四角形に見せかけて敵を惑わす高虎の巧みな防衛技術が見どころです。"
  },
  {
    "key": "nametoko_gorge_nature_stay",
    "title": "2. 滑床渓谷〜雪輪の滝（日本屈指のキャニオニング聖地と花崗岩滑床）",
    "timing": "グリーンシーズン：4月下旬〜11月中旬（夏のキャニオニング・秋の紅葉）",
    "desc": "足摺宇和海国立公園に位置する延長約12kmの大渓谷「滑床（なめとこ）渓谷」。巨大な一枚の花崗岩の滑らかな川床。日本の滝百選「雪輪の滝（落差80m）」。天然のウォータースライダーを滑り降りるキャニオニング体験。",
    "spots": "滑床渓谷（雪輪の滝・落合深渕・鳥居岩）、水際のロッジ、森の国ぽっぽ温泉（松野町）",
    "access": "JR予土線「松丸駅」より車約25分。松山道「三間IC」より約40分。",
    "tip": "滑床渓谷のキャニオニングは、雪輪の滝の滑らかな一枚岩をガイドと一緒に天然スライダーとして滑り降りる日本屈指の爽快アクティビティです。"
  },
  {
    "key": "uwajima_taimeshi_seafood_stay",
    "title": "3. 宇和島名物「元祖 宇和島鯛めし」＆じゃこ天（生鯛と生卵の至高のハーモニー）",
    "timing": "通年（新鮮な真鯛・初夏の愛南びやびやかつお）",
    "desc": "炊き込みではなく、新鮮な真鯛の薄切り刺身を生卵・特製タレ・薬味（胡麻・海苔・大葉）と混ぜ、アツアツのご飯にかけて食べる「宇和島鯛めし」。宇和海の小魚を骨ごとすり身にして揚げた熱々の「宇和島じゃこ天」「ふくめん」。",
    "spots": "ほづみ亭、かどや、きさいや広場（ロイズソフトクリーム・真珠販売）、愛南町深浦港",
    "access": "宇和島市内・愛南町。",
    "tip": "「きさいや広場」では、揚げたて熱々の宇和島じゃこ天をその場でテイクアウトして食べ歩きでき、魚本来の旨味と香ばしさをダイレクトに味わえます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            UWAJIMA & NAMETOKO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【愛媛・宇和島＆愛南・滑床渓谷】現存天守宇和島城・滑床キャニオニング＆宇和島鯛めし宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            伊達政宗の長子・秀宗が入封した南予の城下町「宇和島」。天守が現存する貴重な名城「宇和島城」。巨大な一枚岩の滑らかな川床が続く「滑床渓谷」と雪輪の滝。宇和海で育まれた日本一の真珠と、生卵と出汁で食べる絶品「宇和島鯛めし」を味わう旅。
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
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
              {/* エリア見出し */}
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
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
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
