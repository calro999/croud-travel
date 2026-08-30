import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【日本三大夜景＆摩天楼パノラマ宿】函館・長崎・神戸・横浜・東京高層ホテル 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "息を呑む1000万ドルの夜景完全特化！函館山を望むベイサイド、長崎稲佐山のすり鉢状パノラマ、神戸六甲山・ハーバーランド、横浜みなとみらい、東京ベイエリア高層階客室の展望露天風呂ホテルを徹底解説。",
  keywords: ["japan-top-night-view-luxury-hotel-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-top-night-view-luxury-hotel-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-top-night-view-luxury-hotel-stay", e);
  }
  return {};
}

export default function ScenicViewHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hakodate_nagasaki_nightview",
    "title": "1. 函館山＆長崎稲佐山（世界新三大夜景と扇状に広がる光の絨毯）",
    "timing": "通年（日没後30分〜1時間の「マジックアワー」が最も幻想的）",
    "desc": "津軽海峡と函館湾に挟まれたくびれが美しい「函館山からの夜景」。すり鉢状の地形に家々の明かりが立体的に煌めく「長崎・稲佐山からの夜景（世界新三大夜景）」。客室や屋上展望台から光の海を見下ろす贅沢。",
    "spots": "函館山山頂展望台、長崎稲佐山山頂展望テラス、グラバー園ライトアップ、鍋冠山公園",
    "access": "函館駅・長崎駅周辺から車・ロープウェイで約10〜15分。",
    "tip": "日没の20分前頃から部屋のカーテンを開けて待機すると、空が深い青から紫へと変わり街の灯りが一斉に点灯する感動的な瞬間を見届けられます。"
  },
  {
    "key": "kobe_yokohama_harbor_nightview",
    "title": "2. 神戸ハーバーランド＆横浜みなとみらい（海と光が織りなす1000万ドルの港夜景）",
    "timing": "通年（クリスマス・年末年始・イルミネーション期間はさらに華やか）",
    "desc": "ポートタワーや海洋博物館が照らされる「神戸ウォーターフロント」と六甲山からのパノラマ。コスモクロック21（大観覧車）やベイブリッジを望む「横浜みなとみらい」。バルコニー付き客室で潮風と夜景を満喫。",
    "spots": "神戸ハーバーランドumie、メリケンパーク、横浜みなとみらい21、万国橋、大さん橋",
    "access": "神戸三宮・元町駅、横浜・桜木町・みなとみらい駅至近。",
    "tip": "バルコニー付きのお部屋を予約すると、心地よい夜風を感じながらプライベート空間で夜景とドリンクを楽しめます。"
  },
  {
    "key": "tokyo_skyscraper_luxury_nightview",
    "title": "3. 東京摩天楼＆東京タワービュー（高層階から見下ろす首都のダイナミズム）",
    "timing": "通年（空気の澄んだ秋〜冬は遠く富士山のシルエットも）",
    "desc": "地上30階以上の高層階に位置するラグジュアリーホテル。眼下に広がるビル群の光の海、赤くライトアップされた東京タワーやレインボーブリッジ。クラブラウンジでイブニングカクテルを味わいながら過ごす特別な夜。",
    "spots": "東京タワー、レインボーブリッジ、お台場ベイエリア、六本木ヒルズ展望台、渋谷スクランブルスクエア",
    "access": "都内主要ターミナル駅直結・至近。",
    "tip": "東京タワーが見える「東京タワービュー確約プラン」を選ぶと、記念日やプロポーズのサプライズに最高の演出ができます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            JAPAN TOP NIGHT VIEW GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【日本三大夜景＆摩天楼パノラマ宿】函館・長崎・神戸・横浜・東京高層ホテル 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            部屋の明かりを消した瞬間、目の前に広がる光の宝石箱！世界新三大夜景「長崎」、日本三大夜景「函館・神戸」、そして横浜・東京の煌めく摩天楼。シャンパンを傾けながら夜景に包まれるロマンチックな極上ステイへ。
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

              {/* 絶景ポイント・アクセス・撮影のコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 絶景ビュースポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 最高の景色を楽しむコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの絶景展望宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    絶景プラン
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
