import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kamakura-rainy-day-cafe-museum-guide/" },
  title: "鎌倉・江の島 雨の日の過ごし方：しっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デート",
  description:
    "雨の日こそ風情が増す古都・鎌倉！雨滴が光る長谷寺や一条恵観山荘、屋根付き小町通り食べ歩き、大水槽に癒やされる新江ノ島水族館、オーシャンビュー客室で過ごす贅沢雨の日プラン。",
  keywords: ["鎌倉", "江の島", "雨の日の過ごし方", "しっとり濡れる古刹", "小町通りアーケード", "新江ノ島水族館デート", "温泉宿"],
  openGraph: {
    title: "鎌倉・江の島 雨の日の過ごし方：しっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デート",
    description: "雨の日こそ風情が増す古都・鎌倉！雨滴が光る長谷寺や一条恵観山荘、屋根付き小町通り食べ歩き、大水槽に癒やされる新江ノ島水族館、オーシャンビュー客室で過ごす贅沢雨の日プラン。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "鎌倉・江の島 雨の日の過ごし方：しっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デート",
    description: "雨の日こそ風情が増す古都・鎌倉！雨滴が光る長谷寺や一条恵観山荘、屋根付き小町通り食べ歩き、大水槽に癒やされる新江ノ島水族館、オーシャンビュー客室で過ごす贅沢雨の日プラン。",
  }
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


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【鎌倉・江の島 雨の日の過ごし方】しっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デート",
    "description": "雨の日こそ風情が増す古都・鎌倉！雨滴が光る長谷寺や一条恵観山荘、屋根付き小町通り食べ歩き、大水槽に癒やされる新江ノ島水族館、オーシャンビュー客室で過ごす贅沢雨の日プラン。",
    "url": "https://croud-travel.pages.dev/kamakura-rainy-day-cafe-museum-guide/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "【鎌倉・江の島 雨の日の過ごし方】しっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デート", "item": "https://croud-travel.pages.dev/kamakura-rainy-day-cafe-museum-guide/" }
    ]
  };

  return (
    <div className="min-h-screen bg-indigo-950 text-indigo-100 selection:bg-indigo-700 selection:text-white pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローヘッダー (Indigo / Violet Palette) */}
      <header className="relative bg-gradient-to-b from-slate-950 via-indigo-950 to-indigo-900 border-b border-indigo-800/60 pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-900/80 border border-indigo-700 text-indigo-300 text-xs font-medium tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
            雨の日デート・古刹散歩・えのすい完全ガイド
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">「鎌倉・江の島 雨の日の過ごし方」 <br /> <span className="bg-gradient-to-r from-indigo-200 via-violet-300 to-sky-200 bg-clip-text text-transparent"> しっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デート </span></h1>

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"「しっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デート」を効率よく巡るコツは？","acceptedAnswer":{"@type":"Answer","text":"鎌倉・江の島 雨の日の過ごし方：しっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デートエリアでは、「ホテル法華クラブ湘南藤沢」（楽天評価★4.14・クチコミ3715件、所在地：神奈川県藤沢市鵠沼石上1-6-1）をはじめとする宿を拠点にし、最寄り駅（藤沢）やアクセス条件（ＪＲ・小田急・江ノ電「藤沢駅」南口より徒歩５分。繁華街の中心に位置し、江ノ島、鎌倉観光に最適♪）に合わせて午前中に周辺観光名所を巡り、15時のチェックイン後に温泉や夕食会席を堪能するスケジュールが最も効率的です。"}},{"@type":"Question","name":"事前準備や持ち物で注意すべきポイントは？","acceptedAnswer":{"@type":"Answer","text":"宿泊予約時は最安料金目安（例：「ホテル法華クラブ湘南藤沢」は1名あたり¥3,750〜）や駐車場条件（車高1.9ｍ長さ5.1ｍ重さ2ｔ以内は先着順にて駐車可能。1泊1,100円。その他の場合は要問合せ。）を事前に確認しましょう。連休や紅葉・年末年始シーズンは早期に満室となるため、楽天トラベルの早期割引プランやクーポンの活用がおすすめです。"}}]}) }}
      />
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
        

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）としっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デートの旅ノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 「しっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デート」を効率よく巡るコツは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 鎌倉・江の島 雨の日の過ごし方：しっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デートでは、最寄り駅からの送迎バス運行時間やチェックイン時刻（通常15:00）から逆算し、午前中に主要な景勝地・寺社・市場を巡り、午後は宿の天然温泉や地元食材の会席料理をゆっくり堪能する行程が最も満足度の高い回り方です。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 事前準備や持ち物で注意すべきポイントは？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 楽天トラベルで予約する際は、無料駐車場の台数・予約要否、露天風呂付き客室や部屋食プランの有無、そして5と0のつく日クーポンや早期割引プランの対象期間を事前に比較確認しておくと安心です。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <a href="/winter-yamagata-zao-onsen-snow-jyuhyo-beef-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">山形蔵王温泉で過ごす冬の旅（11・12月）！極上山形牛すき焼き！名宿5選</span>
            </a>
            <a href="/yamagata-solo-business-yamagatagyu-ramen-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">山形出張＆麺王国ひとり旅：山形駅直結・シモンズベッド・絶品山形牛！ラーメン消費量日本一の街を満喫する極上ホテル 厳選3選</span>
            </a>
            <a href="/autumn-budget-yamagata-kajyo-park-momiji-hotels-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">山形：霞城公園の秋紅葉と本場芋煮を満喫！格安・高コスパホテル5選</span>
            </a>
            <a href="/furusato-tax-three-great-fruit-kingdoms-auberge-stay/" className="block p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-200 transition group">
              <span className="text-[10px] font-bold text-amber-700 block mb-1">関連特集ガイド</span>
              <span className="text-xs font-bold text-stone-800 group-hover:text-amber-800 line-clamp-2 leading-relaxed">日本三大フルーツ王国＆もぎたて果実の恵み・果樹園パノラマと美食リゾート×ふるさと納税厳選ガイド山梨・山形・長野</span>
            </a>
          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/yamagata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山形県の宿・温泉
              </Link>
              <Link
                href="/prefectures/gifu"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岐阜県の宿・温泉
              </Link>
              <Link
                href="/prefectures/hyogo"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                兵庫県の宿・温泉
              </Link>
              <Link
                href="/prefectures/kagawa"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                香川県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 鎌倉・江の島 雨の日の過ごし方：しっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デート：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「鎌倉・江の島 雨の日の過ごし方：しっとり濡れる古刹・小町通りアーケード・新江ノ島水族館デート」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. ホテル法華クラブ湘南藤沢</td>
                <td className="p-3 text-stone-600">神奈川県藤沢市鵠沼石上1-6-1</td>
                <td className="p-3 text-stone-600">藤沢駅周辺</td>
                <td className="p-3 text-stone-600">車高1.9ｍ長さ5.1ｍ重さ2ｔ以内は先着順にて駐車可能。1泊1,100円。その他の場合は要問合せ。</td>
                <td className="p-3 font-bold text-amber-600">★4.14（3715件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,750〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F123%2F123.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 湘南台第一ホテル藤沢横浜</td>
                <td className="p-3 text-stone-600">神奈川県藤沢市湘南台2-3-10</td>
                <td className="p-3 text-stone-600">湘南台駅周辺</td>
                <td className="p-3 text-stone-600">周辺コインPへご案内　※一部コインPで使える【割引券】のご用意あり。詳細はフロントまで</td>
                <td className="p-3 font-bold text-amber-600">★4.06（1184件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,050〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80893%2F80893.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 京急ＥＸイン横須賀リサーチパーク（旧：ホテルＹＲＰ）</td>
                <td className="p-3 text-stone-600">神奈川県横須賀市光の丘7-2</td>
                <td className="p-3 text-stone-600">ＹＲＰ野比駅周辺</td>
                <td className="p-3 text-stone-600">有り　45台　無料　普通車のみ予約不要　但しトラック、マイクロバス（9ｍ以下）要予約</td>
                <td className="p-3 font-bold text-amber-600">★4.09（1098件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,605〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20068%2F20068.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル法華クラブ湘南藤沢</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほっけくらぶ　ふじさわ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,750〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/123/123_room.jpg" alt="ホテル法華クラブ湘南藤沢 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>大好評、男・女別浴場あり！旅・ビジネスの疲れを癒してくれます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県藤沢市鵠沼石上1-6-1 ／ 最寄り駅：藤沢 ／ 交通案内：ＪＲ・小田急・江ノ電「藤沢駅」南口より徒歩５分。繁華街の中心に位置し、江ノ島、鎌倉観光に最適♪</p>
                  <p><strong>【駐車場・マイカー利用】</strong>車高1.9ｍ長さ5.1ｍ重さ2ｔ以内は先着順にて駐車可能。1泊1,100円。その他の場合は要問合せ。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「大浴場のシャンプーバーとコーヒーが魅力大浴場が嬉しかった。ドラストで買えるようなシャントリが4種類くらい(ボタニストなど)選べてよかったです。ウェルカムドリンクのコーヒーもカプセル式で美味しか…　2026-08-28 23:52:41投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湘南台第一ホテル藤沢横浜</h3>
                  <span className="text-xs text-stone-400 ml-2">（しょうなんだいだいいちほてるふじさわよこはま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,050〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/80893/80893_hu.jpg" alt="湘南台第一ホテル藤沢横浜 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>湘南台駅西口より徒歩１分！充実のフリーアメニティも好評♪早期～直前まで様々なプランをご用意(^^)/</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県藤沢市湘南台2-3-10 ／ 最寄り駅：湘南台 ／ 交通案内：湘南台駅「Ｃ出口」より徒歩30秒　（小田急線、横浜市営地下鉄線、相鉄線乗り入れ）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>周辺コインPへご案内　※一部コインPで使える【割引券】のご用意あり。詳細はフロントまで</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「必要な備品は揃うが部屋はやや狭めフロント横に必要な備品あり。部屋はやや狭い。可もなく不可もなしでした。お世話になりました。クチコミの詳細はこちらから　https://review.travel…　2026-08-24 19:05:19投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">京急ＥＸイン横須賀リサーチパーク（旧：ホテルＹＲＰ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（けいきゅう　いーえっくすいん　よこすか　りさーちぱーく　わい　あーる　ぴー）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,605〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/20068/20068_one.jpg" alt="京急ＥＸイン横須賀リサーチパーク（旧：ホテルＹＲＰ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>京急線YRP野比駅からバス5分</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県横須賀市光の丘7-2 ／ 最寄り駅：ＹＲＰ野比 ／ 交通案内：京浜急行「ＹＲＰ野比駅」からＹＲＰ行きバス、光の丘５番で下車</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　45台　無料　普通車のみ予約不要　但しトラック、マイクロバス（9ｍ以下）要予約</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋は綺麗だったがダニに刺された部屋はとても綺麗でしたが、ベットでダニに刺されました。クチコミの詳細はこちらから　https://review.travel.rakuten.co.…　2026-08-26 07:10:44投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！山形県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、山形県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">宝珠山 立石寺（山寺）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">松尾芭蕉が「閑さや岩にしみ入る蝉の声」と詠んだことで名高い名刹。1015段の石段を登りきった五大堂からは、山形の大自然と里山を一望する壮大な絶景が広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Evening_twilight_in_Ginzan_Onsen_town_January_2022_A.jpg/1280px-Evening_twilight_in_Ginzan_Onsen_town_January_2022_A.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="銀山温泉" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">銀山温泉</h3>
                <p className="text-xs text-stone-600 leading-relaxed">銀山川の両岸に木造多層の温泉旅館が立ち並ぶ、大正ロマンあふれる温泉街。夕暮れ時にガス灯の温かな光が雪景色や大正建築を照らし出す風景は感動的です。 銀山温泉（ぎんざんおんせん）は、山形県尾花沢市（旧国出羽国、明治以降は羽前国）にある温泉である。 NHK連続テレビ小説『おしん』の舞台となったことで一躍脚光を浴び、全国的にその名を知られることになった。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Zaou_Gongen_Circumstancial_appearance_of_Mount_Yoshino.jpg/1280px-Zaou_Gongen_Circumstancial_appearance_of_Mount_Yoshino.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="蔵王の樹氷" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">蔵王の樹氷</h3>
                <p className="text-xs text-stone-600 leading-relaxed">冬の蔵王連峰で見られる自然の芸術「アイスモンスター」。アオモリトドマツに雪と氷が吹き付けられて巨大化した樹氷群を、ロープウェイやナイターライトアップで楽しめます。 蔵王、藏王（ざ-おう） 読みとしては、「蔵王」の本来の読み、旧仮名づかい「ざう-わう(ぞう-おう)」（音読み）が連声化したもの。 修験道の神である蔵王権現のこと。日本各地にみられる「蔵王」という名称は、後述の地名を含め、その大半が蔵王権現（奈良県吉野の発祥）に由来している（蔵王権現を参照）。 上述の蔵王権現を祭っている神社（蔵王権現社、御嶽神社（御岳神社）、…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">羽黒山 三重塔</h3>
                <p className="text-xs text-stone-600 leading-relaxed">出羽三山神社への参道杉木立の中に佇む、東北最古の国宝木造塔。樹齢数百年の巨大な老杉に囲まれた静寂な空間は、強いパワースポットとして知られています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 山形県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 山形県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="kamakura-rainy-day-cafe-museum-guide" />
</div>
  );
}
