import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/silver-week-glamping-tokai-shizuoka-aichi-guide/" },
  title: "【東海シルバーウィーク グランピング】静岡・伊豆・愛知おすすめ！海鮮BBQ＆みかん狩り体験 ｜ 日本全国・旅宿クラウド",
  description:
    "名古屋・静岡発着の秋連休旅行！伊豆半島の金目鯛・アワビ浜焼き付きグランピング、浜名湖のレイクビューヴィラ、知多半島のサンセットドームテント。温暖な東海エリアで過ごす秋グランピング特集。",
  keywords: ["東海シルバーウィーク", "グランピング", "静岡", "伊豆", "愛知おすすめ！海鮮BBQ", "みかん狩り体験", "温泉宿"],
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
      return data["silver-week-glamping-tokai-shizuoka-aichi-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-tokai-shizuoka-aichi-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingTokaiShizuokaAichiPage() {
  const hotels = loadHotels();

  const faqList = [
    {
      q: "名古屋・静岡市内から伊豆・静岡グランピングへの車アクセスと連休渋滞回避策は？",
      a: "名古屋方面からは伊勢湾岸道・新東名高速経由で伊豆縦貫道を利用し約3時間〜3時間半、静岡市街からは東名・新東名経由で約1時間半〜2時間です。シルバーウィーク期間中は東名高速（大和トンネル付近や御殿場〜沼津間）および伊豆縦貫道の三島・函南交差点付近で混雑が発生しやすいため、早朝6時台の出発、もしくは熱海峠・伊豆スカイラインへの迂回ルートを選択すると移動時間を大幅に短縮できます。",
    },
    {
      q: "秋の伊豆・東海グランピングならではの味覚と食材調達スポットは？",
      a: "駿河湾・相模湾の新鮮な海の幸（金目鯛、サザエ、伊勢海老、アワビ）の網焼きグリルや、伊豆の朝採れ原木椎茸が格別の美味しさです。現地の道の駅（道の駅 伊東マリンタウン、道の駅 くるら戸田など）や伊東市内のスーパー（ナガヤ、アピタなど）に立ち寄ると、鮮魚コーナーで獲れたての地魚やみかん狩り農園直送の旬柑橘をリーズナブルに入手できます。",
    },
    {
      q: "9月下旬の伊豆高原や東伊豆の気温と服装選びのポイントは？",
      a: "東海地方の沿岸部は秋も温暖ですが、標高300m前後に位置する伊豆高原や大室山周辺は日没とともに海風・山風が吹き込み、夜間は15℃前後まで気温が低下します。日中は半袖や薄手の長袖で快適に過ごせますが、夕方以降の屋外ウッドデッキBBQや焚き火の時間帯には、防風性のあるマウンテンパーカーやフリースベストを1枚携行することをおすすめします。",
    },
    {
      q: "マイカーがなくても伊豆急行線や送迎バスで利用できますか？",
      a: "伊豆エリアのグランピング施設は伊豆急行線沿線（伊東駅・伊豆高原駅・川奈駅・伊豆稲取駅など）に多く集積しており、特急踊り子号や東海道新幹線（熱海乗り換え）でのアクセスが非常に良好です。駅から定時無料送迎バスを運行している施設やタクシー10分〜15分圏内の施設が多いため、電車旅派のグループやカップルでもストレスなく宿泊できます。",
    },
  ];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【東海シルバーウィーク グランピング】静岡・伊豆・愛知おすすめ！海鮮BBQ＆みかん狩り体験 ｜ 日本全国・旅宿クラウド",
    "description": "名古屋・静岡発着の秋連休旅行！伊豆半島の金目鯛・アワビ浜焼き付きグランピング、浜名湖のレイクビューヴィラ、知多半島のサンセットドームテント。温暖な東海エリアで過ごす秋グランピング特集。",
    "url": "https://croud-travel.pages.dev/silver-week-glamping-tokai-shizuoka-aichi-guide/",
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
      { "@type": "ListItem", "position": 2, "name": "【東海シルバーウィーク グランピング】静岡・伊豆・愛知おすすめ！海鮮BBQ＆みかん狩り体験 ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/silver-week-glamping-tokai-shizuoka-aichi-guide/" }
    ]
  };

  return (
    <div className="min-h-screen bg-orange-50/30 text-slate-800 antialiased selection:bg-orange-500 selection:text-white font-sans">
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

      {/* ヒーローセクション（暖かみと秋の味覚を感じさせるテラコッタ＆アンバーオレンジ） */}
      <header className="relative bg-gradient-to-br from-amber-950 via-orange-950 to-stone-900 text-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-orange-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.22),transparent_55%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            東海・静岡・伊豆の秋リゾート特集・2026年秋連休
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【東海シルバーウィーク グランピング】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-200">
              静岡・伊豆・愛知おすすめ宿厳選
            </span>
            <br />
            海鮮浜焼きBBQ＆秋の味覚体験ステイ
          </h1>
          <p className="text-orange-100/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            名古屋・静岡市街から好アクセスの東海リゾート。相模湾を望む伊豆高原のラグジュアリードームから、手ぶらBBQと天然温泉が揃う極上アウトドアヴィラまで厳選してご紹介。
            伊豆の金目鯛やアワビの浜焼きグリル、みかん狩り農園や大室山散策と組み合わせた、秋連休に最適な滞在プランを提案します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-orange-300 text-xs font-semibold">名古屋・静岡発</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">90分〜3時間</div>
              <div className="text-[11px] text-orange-200/80 mt-0.5">新東名・伊豆スカイライン</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-orange-300 text-xs font-semibold">伊豆の秋グルメ</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">金目鯛＆熟成肉</div>
              <div className="text-[11px] text-orange-200/80 mt-0.5">豪華BBQディナー</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-orange-300 text-xs font-semibold">気候＆ロケーション</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">温暖な海風</div>
              <div className="text-[11px] text-orange-200/80 mt-0.5">高原と駿河・相模湾景</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-orange-300 text-xs font-semibold">天然温泉連携</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">名湯貸切風呂</div>
              <div className="text-[11px] text-orange-200/80 mt-0.5">伊豆の源泉かけ流し</div>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* 楽天トラベル クーポンバナー */}
        <SpecialCouponBanner variant="prominent" />

        {/* 内部リンク導線バー */}
        <nav aria-label="東海・中京・伊豆周遊観光ガイド" className="bg-orange-50 border border-orange-200 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-2 text-orange-950 font-bold text-sm">
            <span className="text-xl">🍊</span>
            <span>東海・伊豆連休旅行と合わせてチェックしたい人気ガイド：</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/nagoya-departure-daytrip-bus-tour-guide"
              className="inline-flex items-center text-xs font-bold text-orange-900 bg-white border border-orange-300 hover:bg-orange-600 hover:text-white px-3.5 py-1.5 rounded-xl shadow-xs transition"
            >
              名古屋発日帰りバスツアー特集 →
            </Link>
            <Link
              href="/atami-izu-travel-budget-guide"
              className="inline-flex items-center text-xs font-bold text-orange-900 bg-white border border-orange-300 hover:bg-orange-600 hover:text-white px-3.5 py-1.5 rounded-xl shadow-xs transition"
            >
              熱海・伊豆旅行の費用＆予算節約術 →
            </Link>
          </div>
        </nav>

        {/* セクション1: 東海・伊豆グランピングがシルバーウィークに選ばれる3大理由 */}
        <section aria-labelledby="tokai-features-heading" className="space-y-6">
          <div className="border-l-4 border-orange-600 pl-4">
            <h2 id="tokai-features-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              なぜ秋連休は伊豆・静岡なのか？東海エリアが支持される3大理由
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              朝晩の冷え込みが早い高原リゾートと比べ、海洋性気候の東伊豆・駿河湾沿いは9月下旬も心地よい暖かさが持続します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-orange-200 shadow-xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-xs font-bold rounded-lg mb-3">
                  ① 温暖な気候と快適な夜風
                </div>
                <h3 className="font-black text-slate-900 text-lg mb-2">夜でもテラスBBQが凍えない適温</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  標高の高い山岳グランピングでは9月下旬に防寒着が必須になりますが、伊豆半島や静岡沿岸部は日中23〜26℃、夜間も16〜19℃前後。開放感あふれるデッキでの食事や焚き火を無理なくゆったり楽しめます。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-orange-100 text-[11px] font-bold text-orange-700">
                初秋のアウトドア初心者・ファミリーに最適
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-orange-200 shadow-xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-bold rounded-lg mb-3">
                  ② 駿河湾×相模湾の海鮮浜焼き
                </div>
                <h3 className="font-black text-slate-900 text-lg mb-2">金目鯛・伊勢海老・サザエの贅沢グリル</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  定番のお肉だけでなく、伊豆近海で獲れた地魚や貝類をそのまま炭火でグリルできるのが最大の魅力。道の駅やローカル鮮魚店で生きたサザエを調達して持ち込みBBQする通な楽しみ方も定着しています。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-orange-100 text-[11px] font-bold text-amber-800">
                地元の柑橘や静岡茶とのペアリングも格別
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-orange-200 shadow-xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-900 text-xs font-bold rounded-lg mb-3">
                  ③ 観光農園＆テーマパーク連携
                </div>
                <h3 className="font-black text-slate-900 text-lg mb-2">みかん狩り農園や伊豆シャボテン公園</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  9月中旬からスタートする早生みかん狩り体験や、カピバラと触れ合える人気動物園、大室山リフトなど、宿泊施設から車15分圏内にファミリー・カップルで遊べる名所が集中しています。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-orange-100 text-[11px] font-bold text-yellow-800">
                チェックイン前後も立ち寄り先に困らない充実度
              </div>
            </div>
          </div>
        </section>

        {/* セクション2: 厳選宿泊施設 */}
        <section aria-labelledby="hotels-heading" className="space-y-8">
          <div className="border-l-4 border-orange-600 pl-4">
            <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              【静岡・伊豆】秋連休におすすめの東海グランピング施設
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              本格熟成肉ディナー、源泉かけ流し貸切温泉、テーマパーク隣接ドームなど、個性豊かな厳選リゾート。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-white rounded-3xl border border-orange-200/80 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
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
                      静岡・伊豆グランピングリゾート
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
                  <div className="absolute top-3 right-3 bg-orange-600/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow">
                    静岡・伊豆エリア
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-orange-800 mb-1">
                      <span>📍</span>
                      <span>{hotel.address1} {hotel.address2} {hotel.nearestStation ? `（最寄り: ${hotel.nearestStation}駅）` : ""}</span>
                    </div>
                    <h3 className="font-black text-slate-900 text-lg leading-snug group-hover:text-orange-700 transition line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {hotel.hotelSpecial || "温暖な伊豆の自然に包まれたグランピングリゾート。専用ウッドデッキでの贅沢BBQや天然温泉を満喫できます。"}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block font-medium">最安参考料金（1名）</span>
                      <span className="text-orange-700 font-black text-xl">
                        {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "プラン詳細参照"}
                      </span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                    >
                      楽天トラベルで空室確認 ➔
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3: 伊豆＆東海グランピング満喫モデルコース */}
        <section className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-10 border border-orange-800/40 space-y-6">
          <div>
            <span className="text-orange-400 font-black text-xs uppercase tracking-wider">Autumn Model Itinerary</span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              名古屋・静岡発！伊豆の海鮮BBQ＆みかん狩り1泊2日プラン
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-300">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
              <div className="inline-block px-2.5 py-1 bg-orange-500/20 text-orange-300 font-bold text-xs rounded-md">
                DAY 1：海鮮調達と星空バーベキュー
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">08:30</span>
                  <span>名古屋駅または静岡市内を出発（東名・新東名経由で伊豆方面へ）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">11:30</span>
                  <span>「道の駅 伊東マリンタウン」で海鮮丼ランチ＆金目鯛の干物・サザエを買い出し</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">13:30</span>
                  <span>伊豆の観光農園でみかん狩り体験（摘みたての果実をテイクアウト）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">15:30</span>
                  <span>グランピング施設にチェックイン。貸切風呂やドームテントでひと休み</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-400 font-bold">18:00</span>
                  <span>ウッドデッキで特選牛＆調達した海鮮の浜焼きBBQ。食後は焚き火タイム</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
              <div className="inline-block px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-md">
                DAY 2：絶景大室山パノラマと熱海寄り道
              </div>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">07:30</span>
                  <span>朝の澄んだ空気の中でテラス朝食（焼き立てパンと挽きたてコーヒー）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">10:00</span>
                  <span>チェックアウト後、大室山へ。登山リフトで山頂のすり鉢状噴火口をお鉢巡り</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">12:30</span>
                  <span>伊豆高原の高原カフェでランチ、または城ヶ崎海岸の門脇吊橋でスリル散策</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">15:00</span>
                  <span>伊豆スカイライン経由で熱海方面へ。熱海プリンや干物のお土産を購入して帰路へ</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* セクション4: FAQ（構造化データ連動） */}
        <section aria-labelledby="faq-heading" className="bg-white rounded-3xl border border-orange-200 p-6 sm:p-8">
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-orange-600">❓</span> 東海・静岡グランピングのよくある質問
          </h2>
          <div className="divide-y divide-orange-100">
            {faqList.map((faq, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                  <span className="text-orange-600 font-black">Q.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
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

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/fukushima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/tokushima"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                徳島県の宿・温泉
              </Link>
              <Link
                href="/prefectures/gunma"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                群馬県の宿・温泉
              </Link>
              <Link
                href="/prefectures/wakayama"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                和歌山県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
    
      <HubRelatedPosts currentSlug="silver-week-glamping-tokai-shizuoka-aichi-guide" />
</div>
  );
}
