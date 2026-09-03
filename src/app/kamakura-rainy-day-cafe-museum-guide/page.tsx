import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【鎌倉・江の島 雨の日の過ごし方】しっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デート",
  description:
    "雨の日こそ風情が増す古都・鎌倉！雨滴が光る長谷寺や一条恵観山荘、屋根付き小町通り食べ歩き、大水槽に癒やされる新江ノ島水族館、オーシャンビュー客室で過ごす贅沢雨の日プラン。",
  keywords: [
    "鎌倉 雨の日 過ごし方",
    "鎌倉 雨 デート",
    "新江ノ島水族館 雨の日",
    "小町通り 屋根 アーケード 雨",
    "鎌倉 室内 観光",
    "一条恵観山荘 雨",
    "長谷寺 雨の日",
    "江の島 雨の日 観光",
  ],
};

interface Hotel {
  hotelNo: number;
  hotelName: string;
  hotelSpecial?: string;
  hotelImageUrl?: string;
  hotelMinCharge?: number;
  affiliateUrl: string;
  address1?: string;
  address2?: string;
  access?: string;
  nearestStation?: string;
  reviewAverage?: number;
  reviewCount?: number;
}

function loadHotels(): Hotel[] {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kamakura-rainy-day-cafe-museum-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kamakura-rainy-day-cafe-museum-guide", e);
  }
  return [];
}

export default function KamakuraRainyDayCafeMuseumPage() {
  const hotels = loadHotels();

  // 鎌倉・江の島 雨の日デートプラン（3つのエリア別切り口）
  const rainyThemes = [
    {
      title: "鎌倉駅周辺：屋根付きアーケード小町通り＆隠れ家ブックカフェ",
      colorBadge: "bg-indigo-900/60 text-indigo-300 border-indigo-700",
      description:
        "雨足が強い時間帯は、JR鎌倉駅東口からすぐの小町通りアーケード沿いで傘を閉じ、温かいご当地グルメや焼き立てワッフル、抹茶スイーツを食べ歩き。少し路地に入れば、雨音を聞きながら読書や自家焙煎珈琲を楽しめる静謐な古民家カフェが点在しています。",
      highlights: [
        "小町通り前半は屋根や軒先が多く、雨の日の食べ歩きも快適",
        "文豪が愛した「イワタ珈琲店」の極厚ホットケーキで雨宿り",
        "雨粒がガラスを伝うジャズ喫茶や路地裏の日本茶スタンド",
      ],
    },
    {
      title: "長谷・浄妙寺エリア：雨露に濡れる苔庭と花手水・雨情古刹巡り",
      colorBadge: "bg-indigo-950/80 text-violet-300 border-violet-700",
      description:
        "鎌倉の真骨頂は「雨の寺社」。長谷寺のしっとりと濡れる庭園や弁天窟、一条恵観山荘の鮮やかな花手水や濡れ縁から望む滑川のせせらぎ。雨粒に濡れて深みを増す緑と苔のグラデーションは、晴れた日には決して見られない幽玄な美しさを湛えています。",
      highlights: [
        "一条恵観山荘（国の重要文化財）：濡れ縁のカフェ「かふぇ楊梅亭」から眺める雨の枯山水",
        "長谷寺：雨露をまとう木々と洞窟「弁天窟」で灯籠の揺らめきを体感",
        "江ノ電に揺られながら眺める雨煙に包まれた由比ヶ浜海岸",
      ],
    },
    {
      title: "片瀬江ノ島：完全屋内の巨大マリンリゾート「新江ノ島水族館」",
      colorBadge: "bg-blue-950/80 text-cyan-300 border-blue-700",
      description:
        "雨脚が強まっても安心！片瀬海岸に建つ新江ノ島水族館（えのすい）は、全天候型で雨の日デートの聖地。相模湾大水槽の銀色に輝くイワシの群泳や、幻想的なクラゲファンタジーホールで時間を忘れて没入。館内カフェでクラゲソーダを片手にロマンチックな午後を。",
      highlights: [
        "相模湾大水槽：約8,000匹のマイワシの大群が雨の海のようにうねる圧巻のスケール",
        "クラゲファンタジーホール：半ドーム状の癒やし空間で座りながらリラックス",
        "片瀬江ノ島駅直結エリアのため、江ノ電・小田急線からの移動もスムーズ",
      ],
    },
  ];

  // 雨の日モデルコース（時間割）
  const dayPlan = [
    {
      time: "10:30",
      spot: "鎌倉駅東口集合 ＆ 小町通りの軒下スイーツ散歩",
      detail:
        "雨の日でも賑わう小町通り。焼き立ての鎌倉焼きや熱々のコロッケ、お団子をほおばりながら散策。雨宿りを兼ねてクラシックな純喫茶でモーニング珈琲。",
    },
    {
      time: "12:00",
      spot: "一条恵観山荘 ＆ かふぇ楊梅亭（やまももてい）で抹茶ランチ",
      detail:
        "バスで浄妙寺方面へ。京都から移築された数寄屋建築の美しい屋敷。雨に洗われた庭園の花手水（はなちょうず）と苔庭を鑑賞し、川のせせらぎを聞きながら上生菓子とお抹茶を堪能。",
    },
    {
      time: "14:15",
      spot: "江ノ電で長谷へ移動 ＆ 鎌倉文学館の緑陰・路地カフェ",
      detail:
        "雨に濡れるアジサイや木々の葉先をすれすれに通る江ノ電。窓の外に広がる灰色の海と波しぶきの風情を楽しみながら長谷へ。レトロな古民家カフェで雨宿りスイーツ。",
    },
    {
      time: "16:00",
      spot: "新江ノ島水族館（えのすい）：夕暮れのクラゲホールと大水槽",
      detail:
        "雨の夕方は水族館が一番幻想的。暗がりの中で青く照らされる巨大水槽と優美に漂うクラゲたちに包まれ、雨の日の疲れが完全にリセットされます。",
    },
    {
      time: "18:30",
      spot: "藤沢・湘南エリアの快適ホテルへチェックイン ＆ 地魚ディナー",
      detail:
        "夜は濡れた靴を脱いでゆったりおこもり。駅チカの快適ホテルを拠点に、館内大浴場や近隣の湘南しらす・海鮮居酒屋で乾杯。",
    },
  ];

  return (
    <div className="min-h-screen bg-indigo-950 text-indigo-100 selection:bg-indigo-700 selection:text-white pb-20">
      {/* ヒーローヘッダー (Indigo / Violet Palette) */}
      <header className="relative bg-gradient-to-b from-slate-950 via-indigo-950 to-indigo-900 border-b border-indigo-800/60 pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-900/80 border border-indigo-700 text-indigo-300 text-xs font-medium tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
            雨の日デート・古刹散歩・えのすい完全ガイド
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            【鎌倉・江の島 雨の日の過ごし方】
            <br />
            <span className="bg-gradient-to-r from-indigo-200 via-violet-300 to-sky-200 bg-clip-text text-transparent">
              しっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デート
            </span>
          </h1>

          <p className="text-indigo-200 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto mb-8">
            「雨の日の鎌倉はどこに行けばいい？」と迷ったら、雨露に濡れて一層鮮やかさを増す庭園や、雨宿りにぴったりの屋根付き商店街、そして天候を一切気にせず幻想世界に浸れる新江ノ島水族館へ。古都の情緒と湘南の海辺リゾートが融合した、雨の日ならではの極上デートプランをご案内します。
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-indigo-300">
            <span className="flex items-center gap-1.5 bg-indigo-900/70 px-3 py-1.5 rounded-lg border border-indigo-700/80">
              🌧️ 屋根付きアーケード散策
            </span>
            <span className="flex items-center gap-1.5 bg-indigo-900/70 px-3 py-1.5 rounded-lg border border-indigo-700/80">
              🪼 新江ノ島水族館クラゲホール
            </span>
            <span className="flex items-center gap-1.5 bg-indigo-900/70 px-3 py-1.5 rounded-lg border border-indigo-700/80">
              🍵 一条恵観山荘・花手水カフェ
            </span>
          </div>
        </div>
      </header>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        <div className="bg-indigo-900/90 backdrop-blur-md rounded-2xl p-5 border border-indigo-700 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="inline-block px-2.5 py-0.5 rounded bg-violet-500/20 text-violet-300 text-xs font-bold border border-violet-500/30 mb-1">
                湘南・鎌倉・藤沢の宿泊特典
              </span>
              <h2 className="text-base sm:text-lg font-bold text-white">
                楽天トラベル 鎌倉・江の島ホテル割引クーポン配布中！
              </h2>
              <p className="text-xs text-indigo-200">
                新江ノ島水族館アクセス抜群の藤沢・湘南エリア宿がお得に予約可能
              </p>
            </div>
            <div className="w-full sm:w-auto">
              <SpecialCouponBanner variant="inline" />
            </div>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 mt-14 space-y-16">
        {/* セクション1: 3大エリア別 雨の日の過ごし方 */}
        <section className="space-y-6">
          <div className="border-b border-indigo-800/80 pb-3">
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest block mb-1">
              AREA HIGHLIGHTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              雨だからこそ輝く！鎌倉・江の島 3大エリアの巡り方
            </h2>
          </div>

          <div className="space-y-6">
            {rainyThemes.map((theme, idx) => (
              <div
                key={idx}
                className="bg-indigo-900/40 rounded-2xl p-6 sm:p-8 border border-indigo-800 shadow-lg space-y-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${theme.colorBadge}`}>
                    FEATURE 0{idx + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{theme.title}</h3>
                </div>

                <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed">
                  {theme.description}
                </p>

                <div className="bg-indigo-950/60 rounded-xl p-4 border border-indigo-800/60">
                  <span className="text-xs font-bold text-indigo-300 block mb-2">
                    ✨ ここが雨の日の見どころ:
                  </span>
                  <ul className="space-y-1.5 text-xs text-indigo-200">
                    {theme.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-violet-400">💧</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション2: 雨の日デートモデルコース行程 */}
        <section className="space-y-6">
          <div className="border-b border-indigo-800/80 pb-3">
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest block mb-1">
              DAY TRIP ITINERARY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              雨の鎌倉・江の島 1日ゆったりデートタイムテーブル
            </h2>
            <p className="text-xs sm:text-sm text-indigo-200 mt-1">
              午前中は屋根付き通りとお茶処、午後は水族館の癒やし空間へ。無理なく濡れずに回る黄金コース。
            </p>
          </div>

          <div className="bg-indigo-900/30 rounded-2xl p-6 sm:p-8 border border-indigo-800">
            <div className="relative border-l-2 border-indigo-700 ml-4 pl-6 space-y-8">
              {dayPlan.map((plan, pIdx) => (
                <div key={pIdx} className="relative group">
                  <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-violet-500 border-2 border-indigo-950 group-hover:scale-125 transition-transform"></div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-violet-300 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-800">
                      {plan.time}
                    </span>
                    <h3 className="text-base font-bold text-white">{plan.spot}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed">{plan.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* セクション3: 掲載宿一覧（loadHotels() による楽天トラベル提携宿） */}
        <section className="space-y-6">
          <div className="border-b border-indigo-800/80 pb-3">
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest block mb-1">
              RECOMMENDED HOTELS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              雨の鎌倉・湘南観光の拠点に便利な快適ホテル
            </h2>
            <p className="text-xs sm:text-sm text-indigo-200 mt-1">
              江ノ電・小田急線直通で新江ノ島水族館や鎌倉駅へのアクセスが良く、大浴場や快適な客室を備えた宿泊施設です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hotels.map((hotel) => {
              const special = hotel.hotelSpecial || "";
              const minCharge = hotel.hotelMinCharge
                ? `${hotel.hotelMinCharge.toLocaleString()}円〜`
                : "プラン一覧参照";

              return (
                <article
                  key={hotel.hotelNo}
                  className="bg-indigo-900/60 rounded-2xl overflow-hidden border border-indigo-700/80 shadow-xl flex flex-col justify-between hover:border-violet-500 transition-all duration-300"
                >
                  <div>
                    {hotel.hotelImageUrl ? (
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-indigo-950">
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-indigo-950/80 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-bold text-violet-300 border border-indigo-700">
                          {hotel.nearestStation ? `${hotel.nearestStation}駅` : "湘南エリア"}
                        </div>
                      </div>
                    ) : (
                      <div className="aspect-[16/10] w-full bg-indigo-950 flex items-center justify-center text-indigo-400">
                        🏨 画像準備中
                      </div>
                    )}

                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        {hotel.reviewAverage && (
                          <div className="flex items-center gap-1 text-xs font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-700/60">
                            <span>★</span>
                            <span>{hotel.reviewAverage.toFixed(2)}</span>
                            {hotel.reviewCount && (
                              <span className="text-indigo-300 text-[10px]">({hotel.reviewCount}件)</span>
                            )}
                          </div>
                        )}
                        <span className="text-[11px] text-indigo-300 truncate">
                          {hotel.address1}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white line-clamp-2 leading-snug">
                        {hotel.hotelName}
                      </h3>

                      {special && (
                        <p className="text-xs text-indigo-200 line-clamp-3 leading-relaxed bg-indigo-950/50 p-2.5 rounded-lg border border-indigo-800/60">
                          {special}
                        </p>
                      )}

                      {hotel.access && (
                        <p className="text-[11px] text-indigo-300">
                          🚃 {hotel.access}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="p-5 pt-0 border-t border-indigo-800/60 mt-2">
                    <div className="flex items-baseline justify-between pt-3 mb-3">
                      <span className="text-xs text-indigo-300 font-medium">最安参考料金:</span>
                      <span className="text-lg font-extrabold text-violet-300 font-mono">
                        {minCharge}
                      </span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-xs sm:text-sm text-center shadow-lg shadow-indigo-950/50 transition-all flex items-center justify-center gap-2"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <span>✈️</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* 内部リンク・関連ガイド */}
        <section className="bg-indigo-900/40 rounded-2xl p-6 sm:p-8 border border-indigo-800">
          <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <span>🔗</span> 鎌倉・江の島旅行の比較＆関連ガイド
          </h2>
          <p className="text-xs text-indigo-200 mb-4">
            鎌倉と江の島のどちらをメインにするか迷っている方は、こちらの比較徹底ガイドも参考にしてください。
          </p>

          <Link
            href="/kamakura-vs-enoshima-day-trip"
            className="group block p-4 rounded-xl bg-indigo-950/80 border border-indigo-700 hover:border-violet-500/60 transition-all max-w-xl"
          >
            <span className="text-xs font-bold text-violet-400 block mb-1">エリア比較ガイド 🧭</span>
            <h3 className="text-sm font-bold text-white group-hover:text-violet-200 transition-colors">
              【鎌倉 vs 江の島】日帰りはどっちがおすすめ？観光名所・グルメ・移動時間を徹底比較
            </h3>
            <p className="text-xs text-indigo-300 mt-1">
              古都の歴史情緒と海辺の絶景スポット、それぞれの所要時間や見どころを多角的に比較検証。
            </p>
          </Link>
        </section>
      </main>
    </div>
  );
}
