import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【赤ちゃん・子連れ歓迎温泉宿】ウェルカムベビー認定・部屋食＆貸切風呂 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "ミキハウス子育て総研「ウェルカムベビーのお宿」認定ホテル＆旅館完全特化！調乳ポット・おむつ用ゴミ箱完備、赤ちゃん温泉デビュー、周りを気にせず安心の部屋食・個室食、家族専用貸切風呂付き温泉宿を徹底解説。",
  keywords: ["family-baby-welcome-onsen", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["family-baby-welcome-onsen"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for family-baby-welcome-onsen", e);
  }
  return {};
}

export default function TargetAudienceHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "baby_certified_resort",
    "title": "1. ウェルカムベビー認定リゾート（手ぶらで泊まれる至れり尽くせりの安心設計）",
    "timing": "通年（首すわり後の生後5〜6ヶ月〜ハイハイ期・幼児期まで）",
    "desc": "ミキハウス子育て総研の厳しい100項目基準をクリアした「ウェルカムベビーのお宿」。おむつ使い放題プランや、調乳ポット、ベビーベッド、補助便座、おしりふきが客室に完備。荷物を大幅に減らして快適ステイ。",
    "spots": "ホテル内キッズルーム、授乳室、ベビーカー貸出、離乳食ビュッフェ・温めサービス",
    "access": "新幹線主要駅からの無料送迎バスや、高速ICからアクセスの良いリゾート地。",
    "tip": "フロントで年齢に応じた紙おむつのサイズや離乳食の月齢（初期・中期・完了期）を選べる宿が特に人気です。"
  },
  {
    "key": "baby_private_bath_heya",
    "title": "2. 貸切風呂＆お部屋食（赤ちゃんの泣き声を気にせず家族水入らずの温泉時間）",
    "timing": "通年（パパママのご褒美温泉リフレッシュ）",
    "desc": "他の宿泊客に気兼ねなく温泉を楽しめる「客室露天風呂」や「無料貸切風呂」。ベビーバスやベビーソープ、温度計完備で安心の温泉デビュー。夕朝食はお部屋食または個室ダイニングで、赤ちゃんのペースに合わせて食事。",
    "spots": "客室専用露天風呂、畳敷き浴場、個室食事処、ベビー用バンボ・ハイチェア",
    "access": "箱根、熱海、那須、伊豆、有馬など首都圏・関西圏からアクセスの良い温泉街。",
    "tip": "浴槽の床が滑りにくい「畳敷きの温泉」や、低刺激の単純温泉・弱アルカリ性温泉を選ぶと赤ちゃん肌にも安心です。"
  },
  {
    "key": "kids_theme_play_hotel",
    "title": "3. 巨大キッズパーク＆ファミリービュッフェ（雨の日も退屈しない室内アクティビティ）",
    "timing": "通年（雨の日・冬の寒い日でも館内で一日中遊べる全天候型）",
    "desc": "ボールプールやボルダリング、大型アスレチックが備わるホテル内キッズスペース。温水プールや縁日イベント、夜のビンゴ大会。シェフが目の前で作るキッズバイキングやチョコレートファウンテン。",
    "spots": "ホテル内室内温水プール、アミューズメントコーナー、体験クラフト工房、星空シアター",
    "access": "大型高原リゾートやテーマパーク直結ホテル。",
    "tip": "子供が遊んでいる様子をラウンジから見守りながら、パパママがフリードリンクの珈琲やワインを楽しめる宿が増えています。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            BABY & KIDS WELCOME GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【赤ちゃん・子連れ歓迎温泉宿】ウェルカムベビー認定・部屋食＆貸切風呂 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            初めての家族旅行や赤ちゃんの温泉デビューを全力応援！ミキハウス認定の充実ベビーアメニティ、転んでも痛くない和室・クッションフロア、周囲に気兼ねなく楽しめるお部屋食や貸切風呂完備の極上宿。
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

              {/* 滞在・設備・ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 充実の設備＆サービス特徴</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 おすすめエリア＆アクセス</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 失敗しない予約＆滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選プラン宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選プラン
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
