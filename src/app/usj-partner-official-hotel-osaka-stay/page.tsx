import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【ユニバーサル・スタジオ・ジャパン（USJ）公認ホテル】オフィシャルホテル＆駅直結宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "パークまで徒歩数分の感動体験！ユニバーサル・スタジオ・ジャパン（USJ）オフィシャルホテル完全特化！ユニバーサルシティ駅直結、ミニオンやセサミストリートのキャラクタールーム、パークチケット確約、展望天然温泉スパ宿を徹底解説。",
  keywords: ["usj-partner-official-hotel-osaka-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["usj-partner-official-hotel-osaka-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for usj-partner-official-hotel-osaka-stay", e);
  }
  return {};
}

export default function ThemeParkActivityHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "universal_city_official_hotel",
    "title": "1. ユニバーサルシティウォーク〜メインゲート（パークまで徒歩1〜3分の最高立地）",
    "timing": "通年（ハロウィーン・クリスマス・春休み・新エリアオープン期）",
    "desc": "JRユニバーサルシティ駅とUSJメインゲートを結ぶユニバーサル・シティウォーク大阪沿いのホテル群。パークまで徒歩1〜3分。ミニオンやスヌーピーなどの世界観を再現したキャラクタールーム。ホテル内でアトラクションの待ち時間をリアルタイム確認。",
    "spots": "ユニバーサル・スタジオ・ジャパン（スーパー・ニンテンドー・ワールド™、ウィザーディング・ワールド・オブ・ハリー・ポッター™）、ユニバーサル・シティウォーク大阪",
    "access": "JRゆめ咲線「ユニバーサルシティ駅」直結・徒歩すぐ。大阪駅（梅田）より直通電車で約11分。",
    "tip": "オフィシャルホテル内のロビーモニターでアトラクションの待ち時間情報を確認できるため、混雑状況に合わせたスムーズな入園計画が立てられます。"
  },
  {
    "key": "usj_onsen_spa_luxury_stay",
    "title": "2. 最上階展望天然温泉＆ルーフトップスパ（パーク夜景と足の疲れを癒やす名湯）",
    "timing": "通年（1日歩き回った後の極上リラクゼーション）",
    "desc": "地下約1,000mから湧き出る天然温泉を地上高層階に設えたラグジュアリーホテル。湯船から見下ろすパークの夜景と大阪ベイエリアのパノラマ。サウナやジェットバスで歩き疲れた足をリフレッシュ。充実の朝食ビュッフェ。",
    "spots": "ホテル京阪 ユニバーサル・タワー（天然展望温泉）、リーベルホテル（スパ＆テラス）",
    "access": "ユニバーサルシティ駅・桜島駅周辺。",
    "tip": "天然温泉スパ付きホテルを選ぶと、パークで遊び疲れた身体を広いお風呂とサウナで芯から回復させ、翌朝も元気に観光を楽しめます。"
  },
  {
    "key": "osaka_bay_usj_alliance_stay",
    "title": "3. 大阪ベイエリア〜天保山・海遊館（シャトル船で結ばれる水族館＆ベイリゾート）",
    "timing": "通年（海遊館とUSJを両方楽しむ大阪観光）",
    "desc": "対岸の天保山（海遊館・天保山大観覧車）とUSJをわずか10分で結ぶシャトル船「キャプテンライン」。大阪港の潮風を感じるオーシャンビューホテル。広々としたファミリールームと大阪グルメ（たこ焼き・串カツ）が並ぶ朝食。",
    "spots": "海遊館（ジンベエザメ・太平洋水槽）、天保山大観覧車、キャプテンライン（海上シャトル船）、咲洲コスモタワー展望台",
    "access": "大阪メトロ中央線「大阪港駅」、キャプテンライン乗り場周辺。",
    "tip": "「キャプテンライン」を利用すると、USJと海遊館の間をユニークなクルージング感覚で移動でき、移動時間の大幅な短縮にもなります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            USJ OFFICIAL HOTEL GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【ユニバーサル・スタジオ・ジャパン（USJ）公認ホテル】オフィシャルホテル＆駅直結宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ゲートをくぐればすぐそこは熱狂のエンターテインメント！ユニバーサル・スタジオ・ジャパン（USJ）のオフィシャルホテル。パークまで徒歩1〜3分の抜群のロケーション。人気キャラクターのコンセプトルームや夜景スパで余韻に浸る旅。
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
