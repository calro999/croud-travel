import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【岩手・遠野＆カッパ淵】遠野物語の民話の里・南部曲り家＆ジンギスカン・暮坪かぶ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "柳田國男『遠野物語』の妖怪と神話息づく里山・岩手遠野エリア完全特化！キュウリでカッパ釣り「カッパ淵・常堅寺」、国の重要文化財「南部曲り家（伝承園・千葉家）」、遠野郷八幡宮、名物「遠野ジンギスカン・暮坪かぶ宿」を徹底解説。",
  keywords: ["iwate-tono-folklore-kappa-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["iwate-tono-folklore-kappa-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for iwate-tono-folklore-kappa-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tono_folklore_magariya_stay",
    "title": "1. カッパ淵〜常堅寺・伝承園（カッパ捕獲許可証と座敷わらしの民話）",
    "timing": "通年（新緑の5月・黄金色の稲穂が揺れる秋の遠野盆地）",
    "desc": "さらさらと流れる小川にカッパが住んでいたと伝わる「カッパ淵（常堅寺裏）」。釣り竿にキュウリをつけてカッパを釣る体験（カッパ捕獲許可証）。国の重要文化財「菊池家住宅」を移築した「伝承園」での千匹のオシラサマ展示。",
    "spots": "カッパ淵（常堅寺・カッパ狛犬）、伝承園（オシラ堂・御蚕神堂）、とおの物語の館、旧千葉家住宅（南部曲り家）",
    "access": "JR釜石線「遠野駅」より車・バスで約10〜15分。遠野駅前でレンタサイクルあり。",
    "tip": "遠野市観光協会で発行している「カッパ捕獲許可証」を購入すると、カッパ淵で公式にカッパ釣りに挑戦でき、ユニークな旅の記念になります。"
  },
  {
    "key": "tono_nature_kura_stay",
    "title": "2. ホップの里・遠野〜クラフトビールと里山サイクリング（日本一のホップ生産地）",
    "timing": "通年（夏〜初秋のホップ収穫期・秋の遠野ホップ収穫祭）",
    "desc": "日本有数のホップ生産量を誇る遠野。「ビールの里」として進化を遂げるブルワリーレストランや蔵サウナ付きホテル。田園風景の中を走り抜けるサイクリングロード。語り部による遠野昔話の生朗読。",
    "spots": "遠野醸造 TAPROOM、こども本の森 遠野、続石（巨石のパワースポット）、福泉寺（木造十一面観音菩薩）",
    "access": "JR遠野駅周辺。",
    "tip": "遠野醸造TAPROOMでは、遠野産生ホップを使ったフレッシュなクラフトビールと地元食材のペアリングが楽しめます。"
  },
  {
    "key": "tono_jingisukan_lamb_stay",
    "title": "3. 遠野名物「遠野ジンギスカン」＆暮坪かぶ（穴あきバケツで焼く極上生ラム）",
    "timing": "通年（遠野市民のソウルフード）",
    "desc": "遠野では一家に一台ある「穴あきバケツ」に固形燃料を入れてジンギスカン鍋で焼く独特のスタイル。臭みが全くない新鮮な「生ラム肉」と特製秘伝タレ。『美味しんぼ』でも究極の薬味と称賛された「暮坪（くれつぼ）かぶ」のすりおろし。",
    "spots": "あんべ（元祖ジンギスカン店）、じんぎすかんハウス、道の駅遠野風の丘",
    "access": "遠野市内各所。",
    "tip": "「あんべ」の秘伝タレに暮坪かぶのピリッとした辛味を溶かし、ジューシーに焼いた生ラム肉をつけて食べると、さっぱりとして何枚でも食べられます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            TONO FOLKLORE & NATURE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【岩手・遠野＆カッパ淵】遠野物語の民話の里・南部曲り家＆ジンギスカン・暮坪かぶ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日本の民俗学の夜明けを告げた民話のふるさと「遠野」。常堅寺裏手の小川にカッパ伝説が残る「カッパ淵」。馬と人が同じ屋根の下で暮らした「南部曲り家」。バケツ型ジンギスカン鍋で味わう極上ラム肉と、わさびのような辛味の暮坪かぶを味わう旅。
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
