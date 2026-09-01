import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【ブランドスパ＆エステ付きご褒美ホテル】ロクシタン・THANN＆天然温泉 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "全身を解きほぐす至福のトリートメント！高級コスメブランド直営スパ＆エステ付き温泉宿完全特化！ロクシタン、THANN、クレ・ド・ポー ボーテ、アロマオイルマッサージ付き宿泊プラン、温泉デトックス宿を徹底解説。",
  keywords: ["cosme-spa-facial-treatment-esthetic-stay", "女性一人旅", "ソロ活", "ご褒美ステイ", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["cosme-spa-facial-treatment-esthetic-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for cosme-spa-facial-treatment-esthetic-stay", e);
  }
  return {};
}

export default function WomenSoloRetreatHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "brand_cosme_spa_hotel",
    "title": "1. 世界的コスメブランド直営スパ（ロクシタン・THANN・資生堂）",
    "timing": "通年（誕生日・記念日・自分への特別なプレゼント）",
    "desc": "ホテル椿山荘東京の「悠 YU, THE SPA」や、草津温泉「草津ナウリゾートホテル」のTHANNスパ。南仏プロヴァンスの自然素材を使ったロクシタンスパ。熟練のオールハンド技術でリンパを流し、極上の香りに包まれる至福のトリートメント。",
    "spots": "ホテル椿山荘東京、草津ナウリゾートホテル（THANNスパ）、ロイヤルパークホテル",
    "access": "都内各所、草津温泉など。",
    "tip": "スパトリートメントを受ける前には、温泉やスチームサウナで20〜30分身体を芯から温めておくと、アロマオイルの浸透と血行促進効果が格段に高まります。"
  },
  {
    "key": "onsen_esthetic_ladies_ryokan",
    "title": "2. 温泉旅館の本格エステサロン（美肌の湯×オーガニックオイルマッサージ）",
    "timing": "通年（疲労回復・デトックス・肩こり解消）",
    "desc": "美肌成分を豊富に含む温泉旅館内のプライベートサロン。厳選された100%天然オーガニックアロマオイルを使用した背面トリートメントやデコルテケア。施術後のハーブティータイム。浴衣のまま客室へ戻ってまどろむ贅沢。",
    "spots": "伊豆・修善寺温泉、箱根強羅温泉、有馬温泉、嬉野温泉のサロン付き高級旅館",
    "access": "各温泉地。",
    "tip": "「エステ確約宿泊プラン」で予約すると、混雑しやすい週末でも希望の時間枠を事前に確保でき、チェックイン後のスケジュールがスムーズです。"
  },
  {
    "key": "resort_hotel_detox_spa_stay",
    "title": "3. 海辺＆高原リゾートのタラソスパ（大自然のミネラルで生まれ変わる休日）",
    "timing": "通年（沖縄・伊勢志摩・葉山など）",
    "desc": "温めた海洋深層水プールで運動するタラソテラピーや、海泥（ファンゴ）を使ったボディパック。波の音を聞きながら受けるオープンエアのガゼボエステ。南国フルーツのスムージーやヘルシースパキュイジーヌ。",
    "spots": "ジ・エメラルダ（沖縄）、アマネム（伊勢志摩）、スケープス ザ スイート（葉山）",
    "access": "リゾートエリア各所。",
    "tip": "タラソテラピーは日常のストレスで乱れた自律神経を整える効果が高く、施術後は深い眠りにつき翌朝すっきりと目覚められます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-rose-950 via-pink-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-rose-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-rose-300 to-pink-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            LUXURY SPA & ESTHETIC GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【ブランドスパ＆エステ付きご褒美ホテル】ロクシタン・THANN＆天然温泉 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-pink-100/90 leading-relaxed">
            心地よいアロマの香りとセラピストの極上のハンドテクニック「ブランドスパ＆エステ付きご褒美ホテル」。ロクシタンスパやTHANNサンクチュアリー。天然温泉で身体を温めた後のフェイシャル＆ボディトリートメントで、輝く素肌と深い眠りへ。
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
              className="bg-white border border-rose-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-rose-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-0.5 rounded-full uppercase">
                    🌸 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-rose-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-200 space-y-1.5">
                  <span className="font-bold text-pink-950 block text-[11px]">📍 おすすめスポット＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">💡 ひとり旅を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選ソロステイ宿カード */}
              <div className="space-y-4 pt-4 border-t border-rose-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-rose-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-rose-800 bg-rose-50 border border-rose-200 px-3 py-1 rounded-full">
                    女性歓迎プラン
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-rose-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-rose-50 border-b border-rose-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-rose-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-rose-300 px-2 py-0.5 rounded border border-rose-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-rose-950 line-clamp-2">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-rose-950 bg-white hover:bg-rose-50 border border-rose-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
