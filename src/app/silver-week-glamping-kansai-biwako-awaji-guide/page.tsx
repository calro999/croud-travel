import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【関西シルバーウィーク グランピング】琵琶湖レイクビュー＆淡路島オーシャンビュー極上ドームヴィラ ｜ 日本全国・旅宿クラウド",
  description:
    "関西の秋連休を彩る水辺のグランピングリゾート！琵琶湖畔のプライベートビーチ付きドーム、淡路島の夕日を望むインフィニティプール付きヴィラ、淡路牛・近江牛のプレミアムBBQプラン徹底比較。",
  keywords: [
    "関西 グランピング シルバーウィーク",
    "琵琶湖 グランピング レイクビュー ドームテント",
    "淡路島 グランピング オーシャンビュー 夕日",
    "滋賀 グランピング 近江牛 BBQ",
    "淡路島 ヴィラ プライベートプール 温泉",
    "関西 秋連休 旅行 ドライブ グランピング",
    "水辺 グランピング 大阪発 神戸発",
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
      return data["silver-week-glamping-kansai-biwako-awaji-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-kansai-biwako-awaji-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingKansaiBiwakoAwajiPage() {
  const hotels = loadHotels();

  const faqList = [
    {
      q: "琵琶湖エリアと淡路島エリア、それぞれのシルバーウィークの魅力はどう違いますか？",
      a: "琵琶湖（滋賀）は比良山系やメタセコイア並木の初秋の山景色と穏やかな湖畔の静けさが魅力で、近江牛の贅沢BBQや湖上SUPを楽しみたい方に最適です。一方、淡路島（兵庫）は瀬戸内海・播磨灘に沈むサンセットの絶景、淡路島玉ねぎや淡路牛・海鮮のバーベキュー、そして西海岸の最新おしゃれカフェ巡りを満喫したい方に支持されています。",
    },
    {
      q: "大阪・神戸からのアクセス所要時間と交通渋滞の傾向は？",
      a: "琵琶湖（大津・近江舞子方面）へは名神高速または湖西道路経由で大阪から約60〜90分。淡路島（淡路IC〜洲本方面）へは阪神高速・神戸淡路鳴門自動車道（明石海峡大橋）経由で神戸から約45〜70分です。連休中は明石海峡大橋（上り夕方）および名神高速（京都東〜大津IC付近）で渋滞が起きやすいため、早朝移動か夜遅めの帰路設定が快適です。",
    },
    {
      q: "9月下旬の水辺（琵琶湖畔・淡路島海沿い）の気候と注意点は？",
      a: "水辺は内陸よりも海風・湖風が強いため、日没後は体感温度がぐっと下がります。日中は半袖や薄手のシャツで快適ですが、夜のウッドデッキBBQ時は風を遮るウインドブレーカーやカーディガンを必ず用意しましょう。",
    },
    {
      q: "車なし（公共交通機関＋路線バス）でもアクセス可能ですか？",
      a: "琵琶湖エリアはJR湖西線（近江舞子駅・マキノ駅）から徒歩圏内や送迎付きの施設があり、電車旅との相性も良好です。淡路島へは三ノ宮駅・高速舞子発の高速バスで主要バス停に直行し、そこからタクシーや送迎を利用するルートが確立されています。",
    },
  ];

  return (
    <div className="min-h-screen bg-cyan-50/40 text-slate-800 antialiased selection:bg-cyan-600 selection:text-white font-sans">
      {/* 構造化データ FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqList.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />

      {/* ヒーローセクション（Cyanテーマ：水辺・湖畔・海風の透明感） */}
      <header className="relative bg-gradient-to-br from-cyan-950 via-slate-900 to-sky-950 text-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-cyan-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.22),transparent_55%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            関西屈指の水辺リゾート特集・2026秋
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【関西シルバーウィーク グランピング】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-sky-200">
              琵琶湖レイクビュー＆淡路島オーシャンビュー
            </span>
            <br />
            極上ドームヴィラ＆ブランド牛BBQステイ
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            関西近郊からのドライブに最適な二大人気エリア「滋賀・琵琶湖」と「兵庫・淡路島」。
            波音を聞きながら過ごすプライベートビーチ直結ドームや、夕陽が海を茜色に染めるインフィニティテラス。
            近江牛や淡路牛を炭火で焼き上げる贅沢なバーベキューとともに、秋連休の記憶に残るウォーターフロント・グランピングをご紹介します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-cyan-300 text-xs font-semibold">大阪・神戸発</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">45分〜90分</div>
              <div className="text-[11px] text-slate-300 mt-0.5">週末連休の好アクセス</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-cyan-300 text-xs font-semibold">二大ロケーション</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">湖畔 vs 海岸</div>
              <div className="text-[11px] text-slate-300 mt-0.5">琵琶湖の森 / 淡路の夕日</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-cyan-300 text-xs font-semibold">特選グルメ</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">近江牛＆淡路牛</div>
              <div className="text-[11px] text-slate-300 mt-0.5">地産プレミアムBBQ</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-cyan-300 text-xs font-semibold">客室タイプ</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">ドーム＆ヴィラ</div>
              <div className="text-[11px] text-slate-300 mt-0.5">プライベートバス完備</div>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* 楽天トラベル クーポンバナー */}
        <SpecialCouponBanner variant="prominent" />

        {/* 内部リンク導線バー */}
        <nav aria-label="関西周遊・ドライブモデルコース" className="bg-cyan-50 border border-cyan-200 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-2 text-cyan-950 font-bold text-sm">
            <span className="text-xl">🌊</span>
            <span>関西グランピングと合わせて楽しみたい観光ガイド：</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/awaji-island-car-free-bus-trip-guide"
              className="inline-flex items-center text-xs font-bold text-cyan-900 bg-white border border-cyan-300 hover:bg-cyan-600 hover:text-white px-3 py-1.5 rounded-xl shadow-xs transition"
            >
              淡路島車なしバス旅ガイド →
            </Link>
            <Link
              href="/osaka-departure-daytrip-bus-tour-guide"
              className="inline-flex items-center text-xs font-bold text-cyan-900 bg-white border border-cyan-300 hover:bg-cyan-600 hover:text-white px-3 py-1.5 rounded-xl shadow-xs transition"
            >
              大阪発日帰りバスツアー特集 →
            </Link>
          </div>
        </nav>

        {/* セクション1: 琵琶湖 vs 淡路島 徹底比較 */}
        <section aria-labelledby="comparison-heading" className="space-y-6">
          <div className="border-l-4 border-cyan-600 pl-4">
            <h2 id="comparison-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              【琵琶湖 vs 淡路島】連休のスタイルで選ぶ水辺ステイ
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              どちらも関西を代表するリゾート地ですが、ロケーションの特徴と体験の質が明確に異なります。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-cyan-200 shadow-xs hover:shadow-md transition">
              <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-lg mb-3">
                静寂と森の湖畔 滋賀・琵琶湖エリア
              </div>
              <h3 className="font-black text-slate-900 text-lg mb-3">比良山の稜線と澄んだ淡水に癒やされるチルステイ</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span><strong>穏やかな水辺環境：</strong>潮風のベタつきがなく、朝霧の幻想的なレイクビューが広がる</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span><strong>滋賀グルメ：</strong>日本三大和牛のひとつ「近江牛」サーロインや地元朝採れ野菜</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span><strong>周辺観光：</strong>メタセコイア並木、白鬚神社、びわ湖バレイなどの絶景スポット</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-cyan-200 shadow-xs hover:shadow-md transition">
              <div className="inline-block px-3 py-1 bg-sky-100 text-sky-800 text-xs font-bold rounded-lg mb-3">
                開放感と西海岸サンセット 兵庫・淡路島エリア
              </div>
              <h3 className="font-black text-slate-900 text-lg mb-3">大海原を染める夕陽とリゾートヴィラの非日常</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span><strong>パノラマオーシャンビュー：</strong>西海岸に沈む「日本の夕陽百選」のサンセットを特等席で</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span><strong>御食国（みけつくに）の美食：</strong>淡路牛、甘み溢れる淡路島玉ねぎ、新鮮な海鮮グリル</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">✓</span>
                  <span><strong>周辺観光：</strong>西海岸シーサイドカフェ、あわじ花さじき、洲本温泉外湯巡り</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション2: 厳選宿泊施設 */}
        <section aria-labelledby="hotels-heading" className="space-y-8">
          <div className="border-l-4 border-cyan-600 pl-4">
            <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              【琵琶湖＆淡路島】秋の連休におすすめのグランピング宿
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              客室ドームテントやオーシャンビューヴィラなど、楽天トラベル掲載の人気施設をラインナップ。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-white rounded-3xl border border-cyan-200/80 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  {hotel.hotelImageUrl ? (
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm font-bold">
                      水辺のグランピングリゾート
                    </div>
                  )}
                  {hotel.reviewAverage && (
                    <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-xs text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow">
                      <span className="text-amber-400 font-bold">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-slate-300 text-[10px]">({hotel.reviewCount}件)</span>
                      )}
                    </div>
                  )}
                  <div className="absolute top-3 right-3 bg-cyan-600/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow">
                    {hotel.address1?.includes("滋賀") ? "琵琶湖エリア" : "淡路島エリア"}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-cyan-800 mb-1">
                      <span>📍</span>
                      <span>{hotel.address1 || "関西リゾート"} {hotel.nearestStation ? `（最寄り: ${hotel.nearestStation}駅）` : ""}</span>
                    </div>
                    <h3 className="font-black text-slate-900 text-lg leading-snug group-hover:text-cyan-700 transition line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {hotel.hotelSpecial || "水辺の開放感と贅沢なアウトドアステイを両立したリゾートヴィラ。特選BBQディナーや星空の下でのひとときをお過ごしいただけます。"}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block font-medium">最安参考料金（1名）</span>
                      <span className="text-cyan-700 font-black text-xl">
                        {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "プラン詳細参照"}
                      </span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                    >
                      楽天トラベルで空室確認 ➔
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3: BBQディナー満喫の心得 */}
        <section className="bg-gradient-to-br from-cyan-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-cyan-800/40 space-y-6">
          <div>
            <span className="text-cyan-400 font-black text-xs uppercase tracking-wider">Gourmet BBQ Strategy</span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              近江牛＆淡路牛を美味しく味わうための3箇条
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-cyan-300 text-sm mb-1.5">① 地元直売所で「旬の京野菜・淡路島玉ねぎ」を追加調達</h4>
              <p className="text-slate-400 leading-relaxed">
                施設のBBQセットに加えて、チェックイン前に道の駅や直売所に立ち寄り、生食用フルーツトマトや生椎茸を買い足すと満足度が跳ね上がります。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-cyan-300 text-sm mb-1.5">② 高級和牛は「強火の遠火」で表面を香ばしく</h4>
              <p className="text-slate-400 leading-relaxed">
                サシの入った近江牛や淡路牛は脂が落ちて炎が上がりやすいため、グリルの端でじっくり熱を通すのが鉄則。付属の岩塩と山葵でシンプルに味わうのが最も贅沢です。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-cyan-300 text-sm mb-1.5">③ 食後は湖畔・海辺のデッキでホットドリンク</h4>
              <p className="text-slate-400 leading-relaxed">
                満腹になった後は、波音に耳を傾けながらハーブティーやホットワイン。秋風が心地よいチルアウトタイムを満喫できます。
              </p>
            </div>
          </div>
        </section>

        {/* セクション4: FAQ（構造化データ連動） */}
        <section aria-labelledby="faq-heading" className="bg-white rounded-3xl border border-cyan-200 p-6 sm:p-8">
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-cyan-600">❓</span> 関西グランピングのよくある質問
          </h2>
          <div className="divide-y divide-cyan-100">
            {faqList.map((faq, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                  <span className="text-cyan-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
