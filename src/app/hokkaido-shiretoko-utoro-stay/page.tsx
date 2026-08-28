import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【北海道・世界遺産知床ウトロ】オホーツク流氷・知床五湖＆エゾシカ海鮮極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界自然遺産・北海道知床ウトロエリア完全特化！オホーツク海の流氷クルーズ、知床五湖の高架木道散策、フレペの滝、オシンコシンの滝、知床産イクラ・ウニ・鮭とオホーツク海を一望する温泉リゾートを徹底解説。",
  keywords: ["hokkaido-shiretoko-utoro-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hokkaido-shiretoko-utoro-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hokkaido-shiretoko-utoro-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shiretoko_drift_ice_view",
    "title": "1. ウトロ温泉・オホーツク海フロント（冬の流氷原パノラマと夕陽の特等席）",
    "timing": "冬期：1月下旬〜3月中旬（流氷ウォーク・流氷観光砕氷船おーろら）／通年（夕日絶景）",
    "desc": "ウトロ港や高台に位置する温泉ホテル群。客室や展望大浴場から、オホーツク海を埋め尽くす白銀の流氷原や、水平線に沈む黄金色の夕日を一望。ドライスーツを着て流氷の上を歩く「流氷ウォーク」体験。",
    "spots": "ウトロ港（ゴジラ岩・オロンコ岩）、夕陽台展望台、プユニ岬、流氷ウォーク体験",
    "access": "女満別空港より知床エアポートライナーで約2時間15分「ウトロ温泉各ホテル」下車。JR網走駅・斜里駅よりバス。",
    "tip": "「オロンコ岩」の巨岩頂上まで階段を登ると、ウトロの街並みとオホーツク海を360度見渡す大パノラマが広がります。"
  },
  {
    "key": "shiretoko_goko_nature",
    "title": "2. 知床五湖〜フレペの滝（原生林に佇む神秘の湖沼群とエゾシカ・ヒグマの楽園）",
    "timing": "グリーンシーズン：4月下旬〜11月上旬（高架木道は安全に通年散策可能）",
    "desc": "知床連山を湖面に映す幻想的な「知床五湖」。往復約1.6kmの電気柵付き「高架木道」なら初心者でも安全に一湖の絶景を堪能。断崖絶壁からオホーツク海へ湧水が流れ落ちる「フレペの滝（乙女の涙）」の絶景トレッキング。",
    "spots": "知床五湖（高架木道・地上遊歩道）、知床自然センター、フレペの滝、カムイワッカ湯の滝",
    "access": "ウトロ温泉街より知床五湖行き路線バスで約20分。",
    "tip": "地上遊歩道を歩く場合は、ヒグマ活動期（5月〜7月末）は登録引率ガイドツアーへの参加が必要です。"
  },
  {
    "key": "shiretoko_seafood_gourmet",
    "title": "3. 知床オホーツク海の幸づくし（知床産天然鮭・いくら・タラバガニバイキング）",
    "timing": "通年（秋の鮭・いくらシーズン、冬の毛ガニ・タラバガニ）",
    "desc": "日本一の鮭の水揚げ量を誇る斜里町・知床。ぷちぷち弾けるイクラのかけ放題、脂がのった鮭のチャンチャン焼き、オホーツク海の新鮮なウニやホタテ。地元のエゾシカ肉ローストなど北の大地の恵み。",
    "spots": "道の駅うとろ・シリエトク、オシンコシンの滝（日本の滝百選）、知床世界遺産センター",
    "access": "ウトロ温泉街中心部。",
    "tip": "「道の駅うとろ・シリエトク」のレストランで味わう「鮭親子丼（いくら＆鮭）」は、知床観光の定番グルメです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SHIRETOKO WILDERNESS GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【北海道・世界遺産知床ウトロ】オホーツク流氷・知床五湖＆エゾシカ海鮮極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            世界自然遺産「知床」。冬にはオホーツク海を真っ白に埋め尽くす神秘の流氷群。原生林に抱かれた知床五湖と、エゾシカやヒグマが暮らす手つかずの大自然。オホーツク海に沈む夕日を眺め、極上の海の幸を味わう旅。
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
