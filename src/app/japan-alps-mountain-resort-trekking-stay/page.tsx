import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【日本アルプス・本格トレッキング＆山岳リゾート宿】上高地・白馬・立山黒部・涸沢 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "標高3000mの稜線と白銀の氷河地形完全特化！神降る地「上高地帝国ホテル・河童橋」、白馬八方尾根・栂池自然園トレッキング、立山黒部アルペンルート・室堂平「ホテル立山」、穂高連峰涸沢カール拠点宿を徹底解説。",
  keywords: ["japan-alps-mountain-resort-trekking-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-alps-mountain-resort-trekking-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-alps-mountain-resort-trekking-stay", e);
  }
  return {};
}

export default function ThemeParkActivityHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kamikochi_highland_luxury_stay",
    "title": "1. 上高地〜河童橋・明神池（国の特別名勝・特別天然記念物の清らかな山岳美）",
    "timing": "開山期間：4月中旬〜11月15日（新緑の6月・紅葉の10月）",
    "desc": "穂高連峰と焼岳を仰ぐ日本屈指の山岳景勝地「上高地」。梓川にかかる木造の「河童橋」。早朝の霧が立ち込める大正池の立ち枯れの木々。日本初の本格山岳リゾート「上高地帝国ホテル」の赤い三角屋根と薪の暖炉。",
    "spots": "河童橋、大正池、明神池（穂高神社奥宮・御船神事）、岳沢湿原、上高地ビジターセンター",
    "access": "松本ICより車で沢渡駐車場へ、シャトルバスで約30分（通年マイカー規制）。",
    "tip": "上高地に宿泊すると、日帰り観光客が帰った後の静寂の夕暮れや、朝もやが水面に立ち込める幻想的な早朝の梓川沿い散策を独占できます。"
  },
  {
    "key": "hakuba_happo_trekking_resort",
    "title": "2. 白馬八方尾根〜八方池・栂池自然園（高山植物の宝庫と白馬三山の雄姿）",
    "timing": "グリーンシーズン：6月中旬〜10月下旬（高山植物百花繚乱の7月〜8月）",
    "desc": "八方アルペンライン（ゴンドラとリフト）で標高1,830mへ。木道を歩いて目指す標高2,060mの「八方池」。水面に映る白馬三山（白馬岳・杓子岳・白馬鑓ヶ岳）。白馬八方温泉の日本屈指の強アルカリ美肌湯。",
    "spots": "八方尾根自然研究路（八方池・第1〜第3ケルン）、白馬ジャンプ競技場、栂池自然園（栂池パノラマウェイ・ワタスゲ湿原）、白馬マウンテンハーバー",
    "access": "JR大糸線「白馬駅」下車。長野駅（北陸新幹線）より特急バスで約75分。",
    "tip": "白馬岩岳マウンテンリゾートの「HAKUBA MOUNTAIN HARBOR」では、テラスから北アルプス白馬三山へダイナミックにせり出した絶景デッキで美味しいベーカリーが楽しめます。"
  },
  {
    "key": "tateyama_murodo_sky_resort",
    "title": "3. 立山黒部アルペンルート〜室堂平（標高2450m・星に一番近いリゾート）",
    "timing": "営業期間：4月中旬〜11月30日（春の「雪の大谷」・秋の立山紅葉）",
    "desc": "標高2,450mの室堂平に建つ日本最高所のホテル「ホテル立山」。高山植物が生い茂る「みくりが池」と立山三山。日本最高所の天然温泉「みくりが池温泉（白濁硫黄泉）」。天上の星空観測会と朝のご来光ツアー。",
    "spots": "室堂平（みくりが池・みくりが池温泉・立山玉殿の湧水）、雪の大谷（高さ20mの雪壁）、黒部ダム（観光放水）、大観峰展望台",
    "access": "富山側（立山駅）または長野側（扇沢駅）よりアルペンルート各種乗り物を乗り継ぎ室堂へ。",
    "tip": "ホテル立山に宿泊すると、夜の天体観測会で肉眼で見える天の川や流れ星、早朝には富山湾雲海からのご来光を専任ネイチャーガイドの案内で体験できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            JAPAN ALPS TREKKING GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【日本アルプス・本格トレッキング＆山岳リゾート宿】上高地・白馬・立山黒部・涸沢 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            梓川のエメラルドグリーンと穂高連峰の険しい岩峰「日本アルプス」。日本初の本格山岳リゾート上高地、高山植物が咲き誇る白馬八方尾根、標高2,450m日本最高所のホテル立山。雲上のパノラマと満天の天の川を仰ぐ山岳ステイへ。
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

              {/* パーク特典・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要アトラクション＆スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆シャトル運行</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 パーク＆アクティビティ満喫のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選ホテル</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    提携プラン
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
