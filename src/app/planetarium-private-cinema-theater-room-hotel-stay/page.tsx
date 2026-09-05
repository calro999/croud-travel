import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【プラネタリウム＆大画面シアタールーム完備宿】部屋ごもり・星空上映 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "お部屋の中が満天の星空に！客室プラネタリウム＆大画面プロジェクター完備ホテル完全特化！東京、大阪、京都、軽井沢、家庭用最高峰ホームスター設置ルーム、天井いっぱいの星座パノラマ、映画・星空鑑賞カップル＆ファミリー記念日ステイを徹底解説。",
  keywords: ["planetarium-private-cinema-theater-room-hotel-stay", "星空旅行", "天体観測", "夜景ホテル", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["planetarium-private-cinema-theater-room-hotel-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for planetarium-private-cinema-theater-room-hotel-stay", e);
  }
  return {};
}

export default function StargazingHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tokyo_planetarium_concept_stay",
    "title": "1. 東京・都心ラグジュアリー〜客室プラネタリウム＆シアター（天候に左右されない星空デート）",
    "timing": "通年（誕生日・記念日・女子会・クリスマス）",
    "desc": "都心のデザイナーズホテルやタワーホテルに導入された客室プラネタリウム（大平貴之氏監修MEGASTARやホームスター）。100インチ超の大画面プロジェクターと高音質スピーカー。満天の星空を眺めながらルームサービスやシャンパンで乾杯する贅沢。",
    "spots": "東京スカイツリー（コニカミノルタプラネタリウム天空）、有楽町プラネタリアTOKYO、お台場ベイエリア",
    "access": "都内各線主要駅（新宿・渋谷・銀座・浅草）至近。",
    "tip": "Bluetoothスピーカーとスマホを接続し、お気に入りのアコースティック音楽やBGMを流しながら星空を投影すると、極上のプライベートリラックス空間が完成します。"
  },
  {
    "key": "kansai_cinema_star_suite_stay",
    "title": "2. 関西・大阪＆京都〜プライベートシアタースイート（ポップコーン片手に映画＆星空上映）",
    "timing": "通年（雨の日の京都観光・ホテルステイケーション）",
    "desc": "最新スマートプロジェクター（popIn Aladdin等）や高輝度4Kプロジェクターを完備したスタイリッシュホテル。推し活や動画鑑賞、さらにはヒーリング星空モードでの癒やし。京都の町家ホテルや大阪のアーバンライフスタイルホテル。",
    "spots": "道頓堀・難波エリア、京都鴨川沿い、嵐山竹林、梅田スカイビル（空中庭園展望台）",
    "access": "大阪駅・京都駅周辺。",
    "tip": "プロジェクター付き客室では各種動画配信サービス（Netflix, YouTube, Amazon Prime等）に対応しているため、自分たちのアカウントで好きな映画やライブ映像を満喫できます。"
  },
  {
    "key": "karuizawa_forest_planetarium_stay",
    "title": "3. 長野・軽井沢高原〜森の中のシアターヴィラ（星降る高原のプライベートリゾート）",
    "timing": "通年（夏の避暑・冬の暖炉シアターナイト）",
    "desc": "浅間山の裾野に広がる軽井沢の静寂な森。独立した一棟貸しヴィラに設置された大型スクリーンと音響システム。屋外のウッドデッキで実際の星空を仰ぎ、室内では暖炉の火とプラネタリウムの星空を愛でる贅沢な高原リゾートステイ。",
    "spots": "軽井沢星野エリア（ハルニレテラス・星野温泉 トンボの湯）、白糸の滝、雲場池、旧軽井沢銀座通り",
    "access": "北陸新幹線「軽井沢駅」より車約10〜15分。上信越道「碓氷軽井沢IC」より約20分。",
    "tip": "冬の軽井沢は空気が極限まで乾燥して星が一段と輝くため、ヴィラのデッキで星空観察を楽しんだ後、室内の暖炉前で温かいココアを飲むのが至福の過ごし方です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-950 via-indigo-950 to-purple-950 text-white p-8 md:p-14 shadow-xl border border-indigo-400/30">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-cyan-400 to-indigo-300 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            PLANETARIUM & CINEMA SUITE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【プラネタリウム＆大画面シアタールーム完備宿】部屋ごもり・星空上映 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-indigo-100/90 leading-relaxed">
            部屋の照明を落とした瞬間、天井や壁一面に広がる数万個の恒星。「客室プラネタリウム＆ホームシアター完備ホテル」。ベッドに寝転んだまま、二人きりで満天の星空やヒーリング音楽に包まれる至福。天候に左右されず、いつでも満天の星空デートが叶う非日常の隠れ家へ。
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
              className="bg-white border border-indigo-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-indigo-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-0.5 rounded-full uppercase">
                    🌌 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-indigo-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200 space-y-1.5">
                  <span className="font-bold text-indigo-950 block text-[11px]">📍 おすすめスポット＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-1.5">
                  <span className="font-bold text-purple-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-1.5">
                  <span className="font-bold text-cyan-950 block text-[11px]">💡 星空鑑賞を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-indigo-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-indigo-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-indigo-800 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
                    星空展望宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-indigo-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-indigo-50/50 border-b border-indigo-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-indigo-800/40 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-cyan-300 px-2 py-0.5 rounded border border-cyan-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-indigo-600 hover:to-purple-700 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-indigo-950 bg-white hover:bg-indigo-50 border border-indigo-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
