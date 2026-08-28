import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【全国】桜・お花見絶景宿＆客室露天風呂 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "春の息吹！全国屈指の桜名所（京都祇園・嵐山、伊豆河津桜、奈良吉野山、青森弘前）と、客室や露天風呂から満開の桜を一望できる厳選お花見温泉旅館・ホテルを徹底ガイド。",
  keywords: ["spring-cherry-blossoms", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["spring-cherry-blossoms"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for spring-cherry-blossoms", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kyoto_sakura",
    "title": "1. 京都・祇園東山＆嵐山（古都を彩るしだれ桜と名刹）",
    "timing": "見頃：3月下旬〜4月上旬",
    "desc": "円山公園の祇園枝垂桜や哲学の道の桜回廊、嵐山渡月橋を借景にした桜景色。風情ある京町家ホテルや奥嵐山の温泉宿で、ライトアップされた夜桜と京料理を味わう極上の春旅が叶います。",
    "spots": "円山公園、蹴上インクライン、哲学の道、嵐山渡月橋、仁和寺（御室桜）",
    "access": "JR京都駅から地下鉄・市バスで市内主要桜名所へ15〜25分。嵐山へはJR嵯峨野線で約16分。",
    "tip": "早朝6時〜7時台の哲学の道や蹴上インクラインは人が少なく絶好の撮影タイム。夕方は宿でゆっくり桜御膳を堪能するのがおすすめです。"
  },
  {
    "key": "izu_kawazu",
    "title": "2. 静岡・伊豆河津＆南伊豆（日本一早い春を告げる早咲き河津桜）",
    "timing": "見頃：2月中旬〜3月上旬",
    "desc": "本州でいち早く満開を迎える濃いピンクの河津桜と菜の花の絨毯。河津川沿いの桜並木を散策した後は、伊豆の名湯露天風呂と金目鯛の煮付けを堪能する早春の王道ドライブ旅行。",
    "spots": "河津川沿い桜並木（約850本）、みなみの桜と菜の花まつり、今井浜海岸、浄蓮の滝",
    "access": "特急「踊り子号」で東京駅から河津駅まで直通約2時間30分。東名沼津IC・伊豆縦貫道経由。",
    "tip": "見頃時期の国道135号は大変混雑するため、電車（伊豆急行線）利用または早朝8時前のご到着が安心です。"
  },
  {
    "key": "yoshino_sakura",
    "title": "3. 奈良・吉野山（山全体を染める一目千本桜の神域）",
    "timing": "見頃：4月上旬〜4月中旬",
    "desc": "下千本から奥千本へと山肌を駆け上がるように咲き誇る約3万本の山桜。世界遺産・金峯山寺蔵王堂を望む絶景宿に泊まり、朝靄に包まれる幻想的な桜の谷を見下ろす体験は一生の思い出になります。",
    "spots": "吉野山（下千本・中千本・上千本・奥千本）、金峯山寺蔵王堂、吉水神社（一目千本景勝地）",
    "access": "近鉄特急で大阪阿部野橋駅から吉野駅まで約75分、京都駅から約100分。駅前からロープウェイ・バス接続。",
    "tip": "吉野山の桜は標高差があるため見頃が長く続きます。日帰り客が帰った夕方〜早朝の静寂な時間帯を過ごせるのは宿泊者だけの特権です。"
  },
  {
    "key": "hirosaki_sakura",
    "title": "4. 青森・弘前公園（日本一と称される桜回廊と花筏）",
    "timing": "見頃：4月下旬〜5月上旬（GW期間）",
    "desc": "弘前城天守と約2,600本の桜が織りなす圧巻の光景。満開後の外濠をピンク色に埋め尽くす「花筏（はないかだ）」や桜のトンネルは息をのむ美しさ。津軽の地酒と郷土料理を楽しめる温泉宿が人気です。",
    "spots": "弘前公園・弘前城（花筏・桜のトンネル）、藤田記念庭園、岩木山神社、嶽温泉",
    "access": "JR奥羽本線「弘前駅」より市内循環バスで約10分。青森空港から空港連絡バスで約55分。",
    "tip": "夜間のライトアップ（西濠の桜リフレクション）は必見。GW時期は冷え込むため、厚手の上着を持参し、嶽温泉や浅虫温泉で体を温めましょう。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SPRING SPECIAL
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【全国】桜・お花見絶景宿＆客室露天風呂 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            春風が心地よい季節。客室のテラスや露天風呂から淡いピンクの桜を独り占めする贅沢。京都、伊豆、吉野山、弘前など、一生に一度は見たい全国の桜絶景宿をご紹介。
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
