import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/silver-week-glamping-kyushu-fukuoka-kumamoto-guide/" },
  title: "【九州シルバーウィーク グランピング】阿蘇カルデラ・糸島ビーチ・由布院温泉の極上ステイ ｜ 日本全国・旅宿クラウド",
  description:
    "九州の豊かな大自然と名湯を味わう秋連休！阿蘇の大草原パノラマ、糸島のおしゃれなシーサイドドーム、由布院・別府エリアの天然温泉付きグランピング施設を徹底比較。",
  keywords: ["九州シルバーウィーク", "グランピング", "阿蘇カルデラ", "糸島ビーチ", "由布院温泉の極上ステイ", "温泉宿", "宿泊予約"],
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
      return data["silver-week-glamping-kyushu-fukuoka-kumamoto-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-kyushu-fukuoka-kumamoto-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingKyushuFukuokaKumamotoPage() {
  const hotels = loadHotels();

  const faqList = [
    {
      q: "福岡・熊本・大分各空港や博多駅からの移動所要時間と交通手段は？",
      a: "博多・福岡空港から飯塚のリゾートへは八木山バイパス経由で車約50分。別府・由布院へは大分自動車道経由で約1時間40分〜2時間、JR特急「ゆふいんの森」や「ソニック」でも約2時間です。また南九州（霧島・鹿児島方面）へは九州新幹線で博多から約1時間20分でアクセスでき、駅レンタカーとの組み合わせが最も渋滞を避けて快適に移動できます。",
    },
    {
      q: "九州グランピングならではの「天然温泉付き」の魅力と選び方は？",
      a: "本州のグランピングと九州の決定的な差別化ポイントが「全室客室温泉・源泉かけ流し」の多さです。例えば別府鉄輪の蒸気を利用した地獄蒸し付きドームや、霧島・こしかの温泉の自家源泉かけ流し美肌炭酸泉など、アウトドアの爽快感と本格湯治旅館の効能を同時に享受できます。予約時は『客室専用露天風呂付き』か『共用貸切風呂タイプ』かを確認しておくと満足度が高まります。",
    },
    {
      q: "9月下旬の阿蘇や九州山間部・高原の気温と服装は？",
      a: "平野部（福岡市内など）は初秋で25℃前後の過ごしやすい陽気ですが、阿蘇カルデラや霧島連山の山麓、飯塚の内陸部は放射冷却により朝晩13〜15℃程度まで冷え込みます。夜の星空観察やテラスBBQを快適に楽しむため、フリースジャケット、ストール、足首を覆うロングパンツなどの防寒ウェアを忘れずに準備してください。",
    },
    {
      q: "九州の秋の味覚！持ち込みや夕食BBQで味わうべき食材は？",
      a: "九州産黒毛和牛（あか牛・宮崎牛・鹿児島黒牛）や黒豚、地鶏（博多地鶏・みつせ鶏）の炭火焼きはもちろん、秋に旬を迎える大分のかぼすをたっぷり絞ったタレで味わうのが九州流です。直売所で入手できる地元の採れたて椎茸やサツマイモ（安納芋・紅はるか）をアルミホイルで包んで焚き火に投入する焼き芋も絶品です。",
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-50/30 text-slate-800 antialiased selection:bg-emerald-600 selection:text-white font-sans">
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

      {/* ヒーローセクション（深いエメラルドグリーンとカルデラの森の透明感） */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-950 text-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.22),transparent_55%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            大自然×天然名湯 九州グランピング特集・2026秋
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【九州シルバーウィーク グランピング】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-200">
              阿蘇カルデラ・糸島ビーチ・別府由布院
            </span>
            <br />
            源泉かけ流し温泉＆九州黒毛和牛BBQステイ
          </h1>
          <p className="text-emerald-100/90 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            雄大な阿蘇カルデラの大草原パノラマ、波音響くシーサイドドーム、そして日本有数の名湯が湧く別府・由布院・霧島。
            大自然の爽快感と本格的な源泉かけ流し温泉を同時に満喫できる、九州ならではのラグジュアリー・アウトドア体験を厳選紹介します。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-emerald-300 text-xs font-semibold">福岡・博多発</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">50分〜2時間</div>
              <div className="text-[11px] text-emerald-200/80 mt-0.5">高速道路・特急アクセス</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-emerald-300 text-xs font-semibold">客室専用風呂</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">源泉かけ流し</div>
              <div className="text-[11px] text-emerald-200/80 mt-0.5">美肌炭酸泉＆鉄輪名湯</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-emerald-300 text-xs font-semibold">特選ディナー</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">黒毛和牛＆地鶏</div>
              <div className="text-[11px] text-emerald-200/80 mt-0.5">かぼす香る炭火グリル</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-emerald-300 text-xs font-semibold">自然ロケーション</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">カルデラ＆森</div>
              <div className="text-[11px] text-emerald-200/80 mt-0.5">圧倒的な満天の星空</div>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* 楽天トラベル クーポンバナー */}
        <SpecialCouponBanner variant="prominent" />

        {/* 内部リンク導線バー */}
        <nav aria-label="九州周遊・温泉観光ガイド" className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
            <span className="text-xl">♨️</span>
            <span>九州グランピングとセットで回りたい名湯＆絶景モデルコース：</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/aso-kumamoto-car-free-trip-guide"
              className="inline-flex items-center text-xs font-bold text-emerald-900 bg-white border border-emerald-300 hover:bg-emerald-600 hover:text-white px-3.5 py-1.5 rounded-xl shadow-xs transition"
            >
              阿蘇・熊本 車なし絶景トリップガイド →
            </Link>
            <Link
              href="/yufuin-vs-beppu-which-stay"
              className="inline-flex items-center text-xs font-bold text-emerald-900 bg-white border border-emerald-300 hover:bg-emerald-600 hover:text-white px-3.5 py-1.5 rounded-xl shadow-xs transition"
            >
              由布院 vs 別府 どっちに泊まる？徹底比較 →
            </Link>
          </div>
        </nav>

        {/* セクション1: 九州グランピング 3大エリアの特徴と選び方 */}
        <section aria-labelledby="kyushu-areas-heading" className="space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <h2 id="kyushu-areas-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              【阿蘇・糸島・別府由布院】スタイルで選ぶ九州3大リゾート
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              大自然のスケール、海辺の開放感、名湯の癒やし。旅の目的に応じて最適なエリアを見極めましょう。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-6 border border-emerald-200 shadow-xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-lg mb-3">
                  大草原とカルデラ 熊本・阿蘇
                </div>
                <h3 className="font-black text-slate-900 text-lg mb-2">360度パノラマと満天の星空ステイ</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  世界最大級のカルデラが織りなす阿蘇五岳の絶景。澄み切った秋の夜空には天の川が肉眼で広がり、赤身の旨みが凝縮した「阿蘇あか牛」のバーベキューを味わえます。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-100 text-[11px] font-bold text-emerald-700">
                大自然の絶景と星空観察を重視したい方に
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-emerald-200 shadow-xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-lg mb-3">
                  カフェ＆ビーチ 福岡・糸島＆飯塚
                </div>
                <h3 className="font-black text-slate-900 text-lg mb-2">都心近郊の洗練されたリトリート</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  福岡市内から1時間足らずで非日常へ。おしゃれなシーサイドドームや、ヨガ・アクティビティ・フリードリンクが充実した次世代型グランピングで優雅にリフレッシュ。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-100 text-[11px] font-bold text-teal-700">
                移動時間を短縮し女子旅やカップルで楽しみたい方に
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-emerald-200 shadow-xs hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-lg mb-3">
                  名湯×地獄蒸し 大分・別府＆由布院
                </div>
                <h3 className="font-black text-slate-900 text-lg mb-2">客室半露天風呂と天然スチーム料理</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  各ドームに源泉かけ流し半露天風呂を完備。温泉蒸気で旬の野菜や海鮮をヘルシーに蒸し上げる「地獄蒸し」など、おんせん県ならではの贅沢ステイが堪能できます。
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-100 text-[11px] font-bold text-cyan-700">
                温泉療養とご当地グルメを極めたい方に
              </div>
            </div>
          </div>
        </section>

        {/* セクション2: 厳選宿泊施設 */}
        <section aria-labelledby="hotels-heading" className="space-y-8">
          <div className="border-l-4 border-emerald-600 pl-4">
            <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              【九州】秋のシルバーウィークにおすすめのグランピング宿
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              全棟源泉かけ流し温泉付き宿から、アクティビティ完備リゾートまで厳選ラインナップ。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <div
                key={hotel.hotelNo}
                className="bg-white rounded-3xl border border-emerald-200/80 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group"
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
                      九州リゾートグランピング
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
                  <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow">
                    {hotel.address1}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-800 mb-1">
                      <span>📍</span>
                      <span>{hotel.address1} {hotel.address2} {hotel.nearestStation ? `（最寄り: ${hotel.nearestStation}駅）` : ""}</span>
                    </div>
                    <h3 className="font-black text-slate-900 text-lg leading-snug group-hover:text-emerald-700 transition line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {hotel.hotelSpecial || "九州屈指の自然環境と源泉かけ流しの名湯を味わえるリゾート。プライベートなグランピング空間で特別な連休をお過ごしいただけます。"}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block font-medium">最安参考料金（1名）</span>
                      <span className="text-emerald-700 font-black text-xl">
                        {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "プラン詳細参照"}
                      </span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                    >
                      楽天トラベルで空室確認 ➔
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3: 九州BBQ×天然温泉の贅沢ルーティン */}
        <section className="bg-gradient-to-br from-slate-950 to-emerald-950 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800/40 space-y-6">
          <div>
            <span className="text-emerald-400 font-black text-xs uppercase tracking-wider">Kyushu Onsen Glamping Ritual</span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              源泉かけ流し×九州BBQを満喫する「最高の滞在ルーティン」
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-emerald-300 text-sm mb-1.5">① チェックイン直後に夕暮れ温泉</h4>
              <p className="text-slate-400 leading-relaxed">
                移動の疲れを癒やすため、到着後すぐに客室専用の源泉へ。夕日が山並みや水平線を染めるマジックアワーを湯船から堪能するのが贅沢の極みです。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-emerald-300 text-sm mb-1.5">② 黒毛和牛＆かぼす醤油の直火BBQ</h4>
              <p className="text-slate-400 leading-relaxed">
                サシが上質な九州和牛は、炭火で表面をカリッと焼き上げ、大分特産かぼすを絞ったポン酢や岩塩で。さっぱりとした後味でいくらでも箸が進みます。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-emerald-300 text-sm mb-1.5">③ 満天の星空の下でナイトサウナ＆寝湯</h4>
              <p className="text-slate-400 leading-relaxed">
                人工の明かりが少ない大自然の中で、焚き火のパチパチという音を聞きながら就寝前の温泉へ。炭酸泉や美肌湯の効果で芯まで温まり、深い睡眠へ導かれます。
              </p>
            </div>
          </div>
        </section>

        {/* セクション4: FAQ（構造化データ連動） */}
        <section aria-labelledby="faq-heading" className="bg-white rounded-3xl border border-emerald-200 p-6 sm:p-8">
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-emerald-600">❓</span> 九州グランピングのよくある質問
          </h2>
          <div className="divide-y divide-emerald-100">
            {faqList.map((faq, idx) => (
              <div key={idx} className="py-4 first:pt-0 last:pb-0">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5 flex items-start gap-2">
                  <span className="text-emerald-600 font-black">Q.</span>
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
                href="/prefectures/gifu"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                岐阜県の宿・温泉
              </Link>
              <Link
                href="/prefectures/fukuoka"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福岡県の宿・温泉
              </Link>
              <Link
                href="/prefectures/fukui"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                福井県の宿・温泉
              </Link>
              <Link
                href="/prefectures/nagano"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                長野県の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
