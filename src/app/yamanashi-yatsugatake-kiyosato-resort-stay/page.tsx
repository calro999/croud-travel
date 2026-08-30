import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【山梨・八ヶ岳＆清里高原】清里テラス・萌木の村＆八ヶ岳南麓・星空温泉リゾート 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "八ヶ岳南麓・清里高原エリア完全特化！標高1,900mの絶景パノラマ「清里テラス」、森のクラフト村「萌木の村」、清泉寮の濃厚ソフトクリーム、天の川輝く星空と甲州ワイン・高原リゾートホテルを徹底解説。",
  keywords: ["yamanashi-yatsugatake-kiyosato-resort-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamanashi-yatsugatake-kiyosato-resort-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamanashi-yatsugatake-kiyosato-resort-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kiyosato_terrace_view",
    "title": "1. サンメドウズ清里〜清里テラス（標高1900mの天空特等席ソファと富士山ビュー）",
    "timing": "グリーンシーズン：4月下旬〜11月上旬（初夏の爽快な高原・秋の紅葉パノラマ）",
    "desc": "パノラマリフトで標高1,900mの山頂へ。野辺山高原や富士山、南アルプスを見渡すウッドデッキに円形大型ソファが並ぶ「清里テラス」。清里スカイパフェを味わいながら雲の上に浮かぶような至福のひととき。",
    "spots": "サンメドウズ清里（パノラマリフト・清里テラス・カフェスタンド）、美し森（展望台・ツツジ群生地）",
    "access": "JR小海線「清里駅」より清里ピクニックバスで約20分。中央道須玉IC・小淵沢ICより車約25分。",
    "tip": "清里テラスのプレミアムシート（要予約・有料エリア）は、専用のガゼボベッドでシャンパンやスイーツを独占できます。"
  },
  {
    "key": "moeginomura_seisenryo_stay",
    "title": "2. 萌木の村〜清泉寮（森の中のメリーゴーラウンドと元祖濃厚ソフトクリーム）",
    "timing": "通年（新緑の散策・秋のクラフト市・冬の雪景色とイルミネーション）",
    "desc": "広大な森の中にクラフト工房やレストランが集まる「萌木の村」。森の中に佇むアンティークなメリーゴーラウンドや、八ヶ岳地ビール「タッチダウン」醸造所「ROCK」。清泉寮のジャージー牛濃厚ソフトクリーム。",
    "spots": "萌木の村（森のメリーゴーラウンド・オルゴール博物館ホール・オブ・ホールズ・ROCKのビーフカレー）、清泉寮（ジャージーハット・足湯）",
    "access": "清里駅より徒歩約10分（萌木の村）、清泉寮まで車・バス約5分。",
    "tip": "「ROCK」の名物ビーフカレーは、甲州ワインと地ビールでじっくり煮込んだ濃厚なルーに山盛りサラダが添えられた必食グルメです。"
  },
  {
    "key": "yatsugatake_wine_beef_luxury",
    "title": "3. 八ヶ岳南麓の高原美食＆星空露天（甲州ワインビーフと天の川ステイ）",
    "timing": "通年（満点の星空と澄みきった高原の空気）",
    "desc": "八ヶ岳の伏流水と澄んだ空気の中で育まれた「甲州ワインビーフ」や八ヶ岳湧水鱒。宿のディナーでは、勝沼や八ヶ岳のワイナリーから厳選された甲州ワインとのペアリング。夜は客室テラスや露天風呂から天の川を鑑賞。",
    "spots": "山梨県立八ヶ岳自然ふれあいセンター、道の駅南きよさと（ケーブルカー・花の森公園）",
    "access": "八ヶ岳南麓リゾートエリア。",
    "tip": "八ヶ岳エリアは街明かりが少なく空気の透明度が高いため、日本屈指の天体観測スポットとして知られています。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            YATSUGATAKE KIYOSATO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【山梨・八ヶ岳＆清里高原】清里テラス・萌木の村＆八ヶ岳南麓・星空温泉リゾート 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            南アルプスと富士山を一望する標高1,000m超の天空リゾート「山梨・八ヶ岳清里高原」。サンメドウズ清里の山頂デッキ「清里テラス」の特等席ソファ。小鳥のさえずりと満天の星空に包まれ、極上の休日へ。
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
