import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【奥入瀬渓流・十和田湖 紅葉2026完全ガイド】見頃・散策モデルコース＆星野リゾート・秘湯酸ヶ湯ステイ ｜ 日本全国・旅宿クラウド",
  description: "ブナとカエデが黄金に輝く奇跡の森！奥入瀬渓流の紅葉散策ベストシーズン（10月中旬〜下旬）、十和田湖遊覧船、渓流沿いに佇む人気リゾートホテル、日本有数のヒバ千人風呂「酸ヶ湯温泉」予約ガイド。",
  keywords: [
    "奥入瀬渓流 紅葉 2026",
    "十和田湖 紅葉",
    "奥入瀬渓流 散策コース",
    "星野リゾート 奥入瀬渓流ホテル",
    "酸ヶ湯温泉 千人風呂",
    "蔦温泉 自噴温泉",
    "青森 紅葉 温泉宿",
    "楽天トラベル 青森紅葉"
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
      return data["oirase-autumn-leaves-hotspring-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for oirase-autumn-leaves-hotspring-guide", e);
  }
  return [];
}

export default function OiraseAutumnLeavesHotspringPage() {
  const hotels = loadHotels();

  // 散策コース
  const walkingStages = [
    {
      time: "08:30",
      spot: "石ヶ戸（いしけど）スタート",
      distance: "起点",
      desc: "売店・トイレ・バス停完備のトレッキング拠点。ここから渓流沿いの木道遊歩道へ踏み出します。朝の木漏れ日と川霧が幻想的。"
    },
    {
      time: "09:30",
      spot: "阿修羅の流れ（あしゅらのながれ）",
      distance: "石ヶ戸から約1.2km",
      desc: "奥入瀬で最もダイナミックな激流スポット。苔むした岩礁の間を白波を立てて奔流する水と、黄金のブナ・カエデの対比が圧巻の撮影ポイント。"
    },
    {
      time: "10:30",
      spot: "雲井の滝（くもいのたき）",
      distance: "阿修羅の流れから約1.4km",
      desc: "落差25m、二段になって豪快に水煙を上げる名瀑。マイナスイオンを浴びながら休憩。周辺にはバス停もあり途中リタイアや調整も容易。"
    },
    {
      time: "11:45",
      spot: "銚子大滝（ちょうしおおたき）",
      distance: "雲井の滝から約4.4km",
      desc: "幅20m・落差7mの奥入瀬本流唯一の滝。魚止め滝とも呼ばれる圧倒的な水量と轟音。紅葉のカーテンを背に豪快に水しぶきを上げるハイライト。"
    },
    {
      time: "12:30",
      spot: "子ノ口（ねのくち）・十和田湖畔ゴール",
      distance: "銚子大滝から約1.6km",
      desc: "十和田湖への流出口。穏やかに広がる紺碧のカルデラ湖と周囲を染める紅葉連峰。名物のヒメマス塩焼き定食を湖畔の食事処で堪能。"
    }
  ];

  // 秘湯＆温泉ハイライト
  const onsenFeatures = [
    {
      title: "星野リゾート 奥入瀬渓流ホテル",
      type: "渓流リゾート",
      spring: "十和田八幡平温泉郷",
      feature: "渓流を間近に望む「渓流露天風呂」や岡本太郎の大暖炉が鎮座するラウンジ。秋限定の紅葉ガイドツアーやバス送迎サービスも充実。"
    },
    {
      title: "蔦温泉旅館（つたおんせん）",
      type: "秘湯・足元湧出",
      spring: "ナトリウム-硫酸塩・炭酸水素塩・塩化物泉",
      feature: "平安時代から続く秘湯。ブナの湯船の底板からぷくぷくと生の源泉が自噴する「源泉湧き流し」。鏡面の蔦沼朝焼け紅葉まで徒歩圏内。"
    },
    {
      title: "八甲田酸ヶ湯温泉（すかゆ）",
      type: "名湯・湯治場",
      spring: "酸性・含硫黄-鉄・アルミニウム-硫酸塩・塩化物泉",
      feature: "国民保養温泉地第1号。160畳もの総ヒバ造り「ヒバ千人風呂」の圧倒的な木造湯屋空間と白濁した強酸性硫黄泉で身体の芯から温まる。"
    }
  ];

  return (
    <div className="min-h-screen bg-emerald-950 text-emerald-50 selection:bg-amber-500 selection:text-stone-950 pb-20 space-y-16">
      {/* 🌲 HERO: 深緑の森と黄金のブナのグラデーション */}
      <header className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-stone-950 via-emerald-950 to-stone-950 border-b border-emerald-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-emerald-600/10 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-600/50 text-emerald-300 text-xs tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            2026 Oirase Stream & Lake Towada Autumn Guide
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif tracking-tight text-white leading-snug">
            【奥入瀬渓流・十和田湖 紅葉2026完全ガイド】
            <span className="block mt-2 bg-gradient-to-r from-amber-300 via-emerald-200 to-amber-400 bg-clip-text text-transparent">
              見頃・散策モデルコース＆星野リゾート・秘湯酸ヶ湯ステイ
            </span>
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-3xl leading-relaxed">
            十和田八幡平国立公園が誇る原生の森と清流。千変万化の渓流美と、黄金色に輝くブナやトチノキの原生林が約14kmにわたって連なります。10月中旬〜下旬のベストシーズンに歩く黄金ルート、マイカー規制情報、十和田湖遊覧船リフレクション、そして名湯「星野リゾート」「蔦温泉」「酸ヶ湯温泉」を巡る至高の紅葉温泉旅へご案内します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 text-xs">
            <div className="bg-emerald-900/60 border border-emerald-700/50 p-3 rounded-xl">
              <span className="text-amber-300 font-bold block">🍁 ベスト見頃</span>
              <span className="text-white font-medium">10月中旬〜10月下旬</span>
            </div>
            <div className="bg-emerald-900/60 border border-emerald-700/50 p-3 rounded-xl">
              <span className="text-amber-300 font-bold block">👟 散策推奨</span>
              <span className="text-white font-medium">石ヶ戸〜子ノ口（約9km/3.5h）</span>
            </div>
            <div className="bg-emerald-900/60 border border-emerald-700/50 p-3 rounded-xl">
              <span className="text-amber-300 font-bold block">♨️ 代表名湯</span>
              <span className="text-white font-medium">奥入瀬・蔦温泉・酸ヶ湯</span>
            </div>
            <div className="bg-emerald-900/60 border border-emerald-700/50 p-3 rounded-xl">
              <span className="text-amber-300 font-bold block">🚢 十和田湖</span>
              <span className="text-white font-medium">休屋〜子ノ口遊覧船あり</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* 🗺️ 奥入瀬渓流 散策タイムスケジュール・黄金モデルコース */}
        <section className="bg-stone-900/90 border border-emerald-800/40 rounded-3xl p-6 sm:p-10 space-y-8 shadow-xl">
          <div className="border-l-4 border-emerald-400 pl-4 space-y-1">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Walking Itinerary</span>
            <h2 className="text-xl sm:text-3xl font-black font-serif text-white">
              白波と黄金樹海を歩く！石ヶ戸〜子ノ口 絶景散策コース
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200/80">
              勾配がゆるやかな下流から上流へ歩くことで、流れに向かい合う迫力ある景色を楽しめます。
            </p>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2.5 sm:before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-emerald-700/60">
            {walkingStages.map((stage, idx) => (
              <div key={idx} className="relative space-y-2">
                <div className="absolute -left-[27px] sm:-left-[31px] top-1.5 w-4 h-4 rounded-full bg-amber-400 border-4 border-stone-900 shadow" />
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-xs font-black text-amber-300 bg-emerald-950 border border-emerald-700 px-2.5 py-0.5 rounded">
                    {stage.time}
                  </span>
                  <span className="text-xs text-emerald-300 font-semibold">
                    [{stage.distance}]
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-serif text-white">
                    {stage.spot}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal bg-stone-950/50 p-3.5 rounded-xl border border-emerald-900/40">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 散策アドバイスボックス */}
          <div className="bg-gradient-to-r from-emerald-900/60 to-stone-900 p-5 rounded-2xl border border-emerald-700/50 space-y-3">
            <h4 className="text-sm font-bold text-amber-300 flex items-center gap-2">
              <span>⚠️</span>
              <span>奥入瀬散策の重要ポイント＆エコロードフェスタ（マイカー規制）</span>
            </h4>
            <p className="text-xs text-emerald-100/90 leading-relaxed">
              例年10月下旬の週末には「奥入瀬渓流エコロードフェスタ」が実施され、惣辺交差点〜子ノ口間（国道102号）の一般車両通行規制が行われます。指定駐車場からのシャトルバス利用が必須となるため、事前に青森県公式サイトで該当日程をご確認ください。また、遊歩道は水滴や落ち葉で滑りやすいため、防水トレッキングシューズと防寒レインウェアの着用を強く推奨します。
            </p>
          </div>
        </section>

        {/* ♨️ 憧れの秘湯＆極上温泉特集 */}
        <section className="space-y-6">
          <div className="border-l-4 border-amber-400 pl-4 space-y-1">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Hot Spring Features</span>
            <h2 className="text-xl sm:text-3xl font-black font-serif text-white">
              散策の疲れを癒やす！奥入瀬・八甲田の3大名湯
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200/80">
              渓流リゾートから足元自噴の秘湯、白濁のヒバ千人風呂まで、個性豊かな温泉郷が広がります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {onsenFeatures.map((item, idx) => (
              <div
                key={idx}
                className="bg-stone-900/90 border border-emerald-800/50 hover:border-amber-400/50 rounded-2xl p-6 transition duration-300 space-y-3 shadow-lg flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-[11px] font-bold text-amber-300 bg-amber-950/60 border border-amber-700/40 px-2 py-0.5 rounded">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-bold font-serif text-white">
                    {item.title}
                  </h3>
                  <div className="text-[11px] text-emerald-300 font-medium">
                    泉質：{item.spring}
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {item.feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🏨 奥入瀬・十和田・八甲田 厳選宿泊施設（Rakuten Hotels） */}
        <section className="space-y-6">
          <div className="border-l-4 border-emerald-400 pl-4 space-y-1">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Recommended Hotels</span>
            <h2 className="text-xl sm:text-3xl font-black font-serif text-white">
              奥入瀬・十和田湖エリアのおすすめ宿泊施設
            </h2>
            <p className="text-xs sm:text-sm text-emerald-200/80">
              奥入瀬渓流沿いのリゾートから八甲田山麓の秘湯旅館まで。秋の紅葉シーズンは満室が早いため早期予約を推奨します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-stone-900 border border-emerald-900/60 hover:border-emerald-500/60 rounded-2xl overflow-hidden flex flex-col justify-between transition duration-300 group shadow-md"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-stone-800 overflow-hidden">
                    {hotel.hotelImageUrl ? (
                      <img
                        src={hotel.hotelImageUrl}
                        alt={hotel.hotelName}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-stone-500 text-xs">
                        写真準備中
                      </div>
                    )}
                    {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 && (
                      <span className="absolute bottom-2.5 right-2.5 bg-stone-950/90 text-amber-300 text-xs font-bold px-2.5 py-1 rounded border border-amber-900/40">
                        ¥{hotel.hotelMinCharge.toLocaleString()}〜 / 人
                      </span>
                    )}
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      {hotel.nearestStation && (
                        <span className="text-emerald-300 bg-emerald-950/80 px-2 py-0.5 rounded text-[11px] border border-emerald-800/60">
                          拠点駅: {hotel.nearestStation}
                        </span>
                      )}
                      {hotel.reviewAverage && hotel.reviewAverage > 0 && (
                        <span className="text-amber-300 font-bold text-xs flex items-center gap-1">
                          ★ {hotel.reviewAverage.toFixed(1)}
                          <span className="text-stone-500 font-normal text-[10px]">({hotel.reviewCount}件)</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold font-serif text-white line-clamp-2 group-hover:text-amber-300 transition">
                      {hotel.hotelName}
                    </h3>

                    {hotel.hotelSpecial && (
                      <p className="text-xs text-stone-300 line-clamp-3 leading-relaxed">
                        {hotel.hotelSpecial}
                      </p>
                    )}

                    {(hotel.address1 || hotel.address2) && (
                      <p className="text-[11px] text-stone-400 line-clamp-1 border-t border-emerald-900/50 pt-2">
                        📍 {hotel.address1}{hotel.address2}
                      </p>
                    )}
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-xs rounded-xl shadow transition duration-200 flex items-center justify-center gap-2 text-center"
                  >
                    <span>楽天トラベルでプラン・空室を見る</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🍁 楽天トラベル 東北紅葉ツアー＆温泉特集 */}
        <section className="bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 border border-emerald-700/40 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-emerald-800/40 pb-5">
            <div>
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Rakuten Travel Campaign</span>
              <h2 className="text-xl sm:text-2xl font-black font-serif text-white mt-1">
                東北紅葉バスツアー＆温泉宿特別割引
              </h2>
            </div>
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fseason%2Fautumn%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-stone-950 font-black text-xs transition shadow-md whitespace-nowrap"
            >
              東北紅葉特集を見る →
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fbus%2Ftour%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-950/70 hover:bg-stone-950/90 border border-emerald-800/50 hover:border-amber-400/50 p-4 rounded-xl space-y-2 transition block group"
            >
              <div className="text-2xl">🚌</div>
              <h3 className="font-bold text-white group-hover:text-amber-300">
                新幹線＋奥入瀬・八甲田周遊バスツアー
              </h3>
              <p className="text-stone-300 leading-relaxed text-xs">
                新青森・八戸発着の観光バスで、奥入瀬渓流散策・十和田湖遊覧船・八甲田ロープウェーを効率よく巡る人気ツアー。
              </p>
            </a>

            <a
              href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2Fspecial%2Fcoupon%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-950/70 hover:bg-stone-950/90 border border-emerald-800/50 hover:border-amber-400/50 p-4 rounded-xl space-y-2 transition block group"
            >
              <div className="text-2xl">♨️</div>
              <h3 className="font-bold text-white group-hover:text-amber-300">
                楽天トラベル 青森・東北の温泉クーポン
              </h3>
              <p className="text-stone-300 leading-relaxed text-xs">
                源泉かけ流しの一軒宿やリゾートホテルで利用できる限定クーポン。連泊割引や早期割プランも掲載中。
              </p>
            </a>
          </div>
        </section>

        {/* 🔗 内部リンク */}
        <nav className="border-t border-emerald-900/60 pt-8 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-300">関連記事・あわせて読みたい東北アクセスガイド</h2>
          <div>
            <Link
              href="/tokyo-aomori-bus-vs-shinkansen-guide"
              className="p-5 rounded-2xl bg-stone-900/80 border border-emerald-800/60 hover:border-amber-400/50 transition block group shadow"
            >
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold mb-1">
                <span>🚅 VS 🚌 移動手段比較</span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-stone-100 group-hover:text-white">
                【東京〜青森 高速バスvs新幹線 徹底比較】料金・所要時間・快適性と安く行く方法完全ガイド →
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                はやぶさ号と夜行高速バスのコスパ比較や、八戸・新青森から奥入瀬渓流への乗り継ぎアクセスまで詳しく解説。
              </p>
            </Link>
          </div>
        </nav>
      </main>
    </div>
  );
}
