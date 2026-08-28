import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【冬の避寒リゾート】寒さ知らず！沖縄・奄美大島ぽかぽか旅 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "真冬でも気温20度前後！沖縄本島（那覇・恩納村）、奄美大島、石垣島・宮古島など、本州の厳しい寒さを抜け出して暖かな南国でゆったり過ごす大人の冬旅リゾートを徹底解説。",
  keywords: ["winter-warm-island-escape", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["winter-warm-island-escape"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for winter-warm-island-escape", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "naha_warm_stay",
    "title": "1. 沖縄・那覇＆糸満（冬の街歩き・琉球グルメ＆天然温泉ホテル）",
    "timing": "おすすめ時期：11月〜3月（平均気温18〜22℃で快適）",
    "desc": "夏の猛暑では歩けない国際通りややちむん通り（陶器街）の散策に最適な冬の那覇。美ら海の恵みを含む「琉球温泉」や天然温泉大浴場を備えたシティリゾートで、あぐー豚しゃぶしゃぶや泡盛を堪能。",
    "spots": "国際通り、首里城公園、壺屋やちむん通り、瀬長島ウミカジテラス（天然温泉龍神の湯）",
    "access": "那覇空港直結ゆいレールで県庁前駅・牧志駅まで約15分。",
    "tip": "瀬長島ウミカジテラスの温泉露天風呂からは、青い海と那覇空港へ離着陸する飛行機を大迫力で眺められます。"
  },
  {
    "key": "amami_resort",
    "title": "2. 鹿児島・東洋のガラパゴス奄美大島（冬のマングローブ原生林カヤック）",
    "timing": "おすすめ時期：11月〜3月（ホエールウォッチングは1月〜3月）",
    "desc": "世界自然遺産の島・奄美大島。冬でも温暖な気候の中、金作原原生林ウォーキングやマングローブカヤックを楽しめます。海沿いのプライベートヴィラに宿泊し、名物「鶏飯（けいはん）」と黒糖焼酎を満喫。",
    "spots": "マングローブ原生林、金作原（きんさくばる）原生林、あやまる岬、ハートロック",
    "access": "羽田・成田・関空・福岡・鹿児島から奄美空港へ直行便運航。",
    "tip": "1月〜3月はザトウクジラが出産・子育てのために来遊する「ホエールウォッチング」のベストシーズンです。"
  },
  {
    "key": "yaeyama_warm",
    "title": "3. 沖縄・石垣島＆竹富島（静寂に包まれる冬の離島リゾート＆水牛車散策）",
    "timing": "おすすめ時期：11月〜3月（混雑ゼロで過ごしやすい）",
    "desc": "夏休みの大混雑が嘘のように静まり返る冬の八重山。赤瓦の集落が残る竹富島を水牛車でのんびり巡り、石垣牛の鉄板焼きディナーと南十字星が輝く夜空を満喫する大人の隠れ家リゾートステイ。",
    "spots": "竹富島（コンドイビーチ・カイジ浜）、川平湾（グラスボート）、平久保崎灯台、ユーグレナモール",
    "access": "石垣空港より市内・リゾートエリアへ直行バス・レンタカーで約20〜30分。",
    "tip": "冬の石垣島は風が心地よく、日差しを気にせず快適に島内ドライブやサイクリングを楽しめます。"
  },
  {
    "key": "miyako_warm",
    "title": "4. 沖縄・宮古島＆伊良部島（冬の澄み渡る宮古ブルーと贅沢オールインクルーシブ）",
    "timing": "おすすめ時期：11月〜3月（海の透明度が年間最高レベル）",
    "desc": "冬はプランクトンが減少し「宮古ブルー」の透明度が最高潮に達する季節。飲食やアクティビティがすべて宿泊費に含まれる「オールインクルーシブ」リゾートで、贅沢な南国ステイを満喫できます。",
    "spots": "与那覇前浜ビーチ、伊良部大橋（全長3,540m）、東平安名崎、砂山ビーチ",
    "access": "羽田・関空・名古屋から宮古空港・下地島空港へ直行便運航。",
    "tip": "伊良部大橋を渡る爽快ドライブと、ホテル内の温水インフィニティプールや温水ジャグジーでのリラックスが至福です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            WARM WINTER ESCAPE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【冬の避寒リゾート】寒さ知らず！沖縄・奄美大島ぽかぽか旅 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            コートを脱ぎ捨てて、心地よい南風が吹き抜ける楽園へ。冬の沖縄・奄美は観光のオフシーズンで混雑がなく、ホテル料金もお得。静寂のプライベートリゾートで極上のリフレッシュを。
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
