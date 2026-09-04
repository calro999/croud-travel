import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【九州シルバーウィーク グランピング】阿蘇カルデラ・糸島ビーチ・由布院温泉の極上ステイ ｜ 日本全国・旅宿クラウド",
  description:
    "九州の豊かな大自然と名湯を味わう秋連休！阿蘇の大草原パノラマ、糸島のおしゃれなシーサイドドーム、由布院・別府エリアの天然温泉付きグランピング施設を徹底比較。",
  keywords: [
    "九州 グランピング シルバーウィーク",
    "福岡 グランピング 糸島 飯塚",
    "熊本 グランピング 阿蘇 カルデラ",
    "大分 別府 由布院 温泉グランピング",
    "九州 秋連休 ドライブ グランピング",
    "源泉かけ流し グランピング 九州",
    "炭酸泉 霧島 九州旅行",
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
      </main>
    </div>
  );
}
