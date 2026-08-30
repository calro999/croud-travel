import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【大人の女子旅・ご褒美温泉】極上スパエステ・アフタヌーンティー＆美肌宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "女性同士のご褒美旅行完全特化！高級オーガニックスパエステ、ウェルカムアフタヌーンティー、選べる色浴衣、Refaやダイソンなど高級美容家電完備、絶景インフィニティラウンジと美肌会席宿を徹底解説。",
  keywords: ["girls-trip-spa-afternoontea-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["girls-trip-spa-afternoontea-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for girls-trip-spa-afternoontea-stay", e);
  }
  return {};
}

export default function TargetAudienceHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "girls_spa_aesthetic_resort",
    "title": "1. 本格オーガニックスパ＆極上トリートメント（全身を解きほぐすアロマテラピー）",
    "timing": "通年（週末のデトックス＆リラクゼーション）",
    "desc": "厳選されたオーガニック精油や国産ハーブを使用したサロン品質のスパトリートメント。二人同時に施術を受けられるペアルームや、美肌温泉とサウナで身体を温めた後のディープクレンジングフェイシャル＆ボディ。",
    "spots": "ホテル直営スパサロン、アロマミストサウナ、デトックスハーブティーラウンジ、岩盤浴",
    "access": "箱根、軽井沢、伊豆、熱海、京都など景観の美しいリゾート地。",
    "tip": "施術前に入浴して血行を促進しておくと、アロマオイルの浸透率とリラクゼーション効果が劇的に高まります。"
  },
  {
    "key": "afternoon_tea_lounge_stay",
    "title": "2. アフタヌーンティー＆宿泊者専用ラウンジ（優雅なティースタンドとワインフリーフロー）",
    "timing": "通年（チェックイン直後の贅沢なティータイム）",
    "desc": "パティシエ特製の三段ティースタンドで提供されるウェルカムアフタヌーンティー。宿泊者専用ラウンジでのスパークリングワインやクラフト生ビール、ハーブティー、フィンガーフードの無料フリーフロー。",
    "spots": "展望ティーラウンジ、暖炉テラス、ライブラリーカフェ、ナイトバータイム",
    "access": "洗練されたデザインホテルやラグジュアリー旅館。",
    "tip": "チェックイン開始時間（14時〜15時）に合わせて早めに到着し、優雅なアフタヌーンティーを堪能するのがおすすめです。"
  },
  {
    "key": "beauty_amenity_yukata_stay",
    "title": "3. 高級美容家電＆選べる色浴衣（ReFa・ダイソン完備と映える女子旅フォト）",
    "timing": "通年（SNS映えするお洒落な空間とヘアケア体験）",
    "desc": "ReFa（リファ）のシャワーヘッドやドライヤー・ヘアアイロン、Dysonの最新機器が客室にフル完備。数十種類から選べる色浴衣や帯、ロクシタンやTHREEのスキンケアアメニティ。夜はお部屋でゆったりおしゃべり。",
    "spots": "選べる色浴衣コーナー、パウダールーム、インスタ映えテラス、オーガニックアメニティバー",
    "access": "温泉街中心部のお洒落なデザイナーズ旅館。",
    "tip": "色浴衣を着て温泉街のカフェ巡りや足湯散策に出かけると、素敵な旅の写真がたくさん残せます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            LUXURY GIRLS RETREAT GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【大人の女子旅・ご褒美温泉】極上スパエステ・アフタヌーンティー＆美肌宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日常の忙しさを忘れて自分を解き放つ大人の女子旅！ウェルカムスイーツとアフタヌーンティーで迎えられ、極上のアロマスパで至福のデトックス。Refaドライヤーや高級アメニティが揃う洗練された美の隠れ家へ。
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
