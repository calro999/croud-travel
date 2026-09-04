import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【シルバーウィーク2026 富士山・関東グランピング】客室天然温泉＆富士絶景ドームテントおすすめ厳選 ｜ 日本全国・旅宿クラウド",
  description:
    "9月シルバーウィークに行きたい関東・富士五湖周辺の最高峰グランピング特集！部屋から富士山を望む大型ドームテント、客室専用の天然温泉露天風呂、焚き火と秋風を楽しむラグジュアリーステイ予約ガイド。",
  keywords: [
    "シルバーウィーク グランピング 富士山",
    "関東 グランピング 温泉付き 客室露天風呂",
    "富士五湖 グランピング ドームテント",
    "山中湖 グランピング 富士山ビュー",
    "河口湖 グランピング シルバーウィーク 予約",
    "秋 グランピング 関東 連休 旅行",
    "ラグジュアリー グランピング 焚き火 星空",
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
      return data["silver-week-glamping-kanto-fuji-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-kanto-fuji-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingKantoFujiPage() {
  const hotels = loadHotels();

  const faqList = [
    {
      q: "9月下旬の富士五湖（山中湖・河口湖）の気温と服装はどう準備すべきですか？",
      a: "富士五湖エリアは標高800m〜1,000mの高地に位置し、都心より約5〜7℃気温が低くなります。9月下旬のシルバーウィークは日中20℃前後で爽やかですが、日没後は10℃近くまで急冷します。夕食BBQや焚き火を楽しむ際は、厚手のフリースや軽量ダウン、風を通さないマウンテンパーカーを必ず用意してください。",
    },
    {
      q: "客室専用の天然温泉露天風呂が付いているグランピングの利点は何ですか？",
      a: "共同浴場や貸切風呂と異なり、夜間の暗闇を外歩きすることなく、好きなタイミングで何度でも湯浴みができる点です。特に秋の澄んだ夜空の下、客室デッキから富士山の稜線や満天の星を眺めながら入浴できる贅沢は、専用温泉付きヴィラならではの特権です。",
    },
    {
      q: "シルバーウィークの中央自動車道・東名高速の渋滞回避のコツはありますか？",
      a: "下り（東京発）は連休初日・中日の早朝6時前、または11時以降の出発が混雑ピークを避ける鉄則です。上り（東京方面）は夕方15時から小仏トンネルや大和トンネルを先頭に30km規模の渋滞が発生するため、14時前に現地を出発するか、夜20時以降まで現地ディナー・温泉を楽しんでから帰路につく分散移動が有効です。",
    },
    {
      q: "雨天時のバーベキューや焚き火はどう対応されますか？",
      a: "今回厳選したハイエンド施設は、全天候型の屋根付きガゼボまたは専用ダイニングスペースを完備しており、雨天でも濡れずにBBQが可能です。焚き火については強風時を除き、屋根付きエリアで火を眺められる設備が整っています。",
    },
  ];

  return (
    <div className="min-h-screen bg-emerald-50/40 text-slate-800 antialiased selection:bg-emerald-600 selection:text-white font-sans">
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

      {/* ヒーローセクション（Emeraldテーマ：富士山麓の深緑と初秋の澄明な風） */}
      <header className="relative bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 text-white overflow-hidden pt-16 pb-20 px-4 sm:px-6 lg:px-8 border-b border-emerald-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.22),transparent_55%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            2026年秋の連休特選・ラグジュアリーアウトドア
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【シルバーウィーク2026 富士山・関東グランピング】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200">
              客室天然温泉＆富士絶景ドームテント
            </span>
            <br />
            秋風と焚き火に癒やされる極上リゾート厳選
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
            暑さが和らぎ、空気が澄み渡る9月のシルバーウィークは、冠雪前の雄大な富士山を最も美しく仰ぎ見ることができる黄金期。
            客室から一歩も出ずに湯浴みできる専用天然温泉、プライベートデッキでの本格炭火BBQ、夜空に揺らめく焚き火の炎。
            関東近郊から2時間前後でアクセスできる、大人のためのハイエンド・グランピングステイを完全ナビゲートします。
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-emerald-300 text-xs font-semibold">9月平均気温（山中湖）</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">14℃〜21℃</div>
              <div className="text-[11px] text-slate-300 mt-0.5">残暑ゼロの快適な高原気候</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-emerald-300 text-xs font-semibold">富士山眺望率</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">秋晴れ快晴</div>
              <div className="text-[11px] text-slate-300 mt-0.5">秋風で大気が澄むベスト期</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-emerald-300 text-xs font-semibold">専用設備</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">客室温泉＆サウナ</div>
              <div className="text-[11px] text-slate-300 mt-0.5">完全プライベート空間</div>
            </div>
            <div className="bg-white/10 border border-white/10 rounded-2xl p-3.5 backdrop-blur-sm">
              <div className="text-emerald-300 text-xs font-semibold">都心アクセス</div>
              <div className="text-xl sm:text-2xl font-black text-white mt-1">車で約90分〜</div>
              <div className="text-[11px] text-slate-300 mt-0.5">中央道・東名で直行</div>
            </div>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* 楽天トラベル クーポンバナー */}
        <SpecialCouponBanner variant="prominent" />

        {/* 内部リンク導線バー */}
        <nav aria-label="近隣観光モデルコース" className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm">
            <span className="text-xl">🗺️</span>
            <span>富士・関東グランピングと組み合わせたい連休周遊ルート：</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/fuji-five-lakes-car-free-bus-guide"
              className="inline-flex items-center text-xs font-bold text-emerald-900 bg-white border border-emerald-300 hover:bg-emerald-600 hover:text-white px-3 py-1.5 rounded-xl shadow-xs transition"
            >
              富士五湖周遊バスモデルコース →
            </Link>
            <Link
              href="/hakone-autumn-leaves-lightup-hotspring-guide"
              className="inline-flex items-center text-xs font-bold text-emerald-900 bg-white border border-emerald-300 hover:bg-emerald-600 hover:text-white px-3 py-1.5 rounded-xl shadow-xs transition"
            >
              箱根紅葉ライトアップ温泉ガイド →
            </Link>
          </div>
        </nav>

        {/* セクション1: 秋の富士山グランピングが圧倒的に支持される3大理由 */}
        <section aria-labelledby="reasons-heading" className="space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4">
            <h2 id="reasons-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              なぜシルバーウィークの富士五湖グランピングは争奪戦になるのか
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              真夏の猛暑・虫の多さから解放され、冬の凍結路面リスクもない9月下旬こそがアウトドア愛好家の本命時期です。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-lg mb-4">
                01
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">秋晴れの高気圧で富士山の輪郭が鮮明</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                真夏は水蒸気と入道雲に遮られやすい富士山ですが、秋風が吹き始める9月下旬は空気が一気に澄み渡ります。朝焼けに染まる紅富士や夕暮れのシルエット富士を、客室ドームテントのパノラマ窓から心ゆくまで堪能できます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-lg mb-4">
                02
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">冷涼な夜風がもたらす「温泉と焚き火」の至福</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                標高の高い富士北麓は、夜になると気温が12〜15℃まで低下。このひんやりとした外気があるからこそ、専用の露天風呂やロウリュサウナ、そして焚き火の温かさが身体の芯まで染み渡ります。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-xs hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 font-black flex items-center justify-center text-lg mb-4">
                03
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-2">プライベート完結で人混み・行列ストレスゼロ</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                連休中の観光地レストランやホテルバイキングは長蛇の列になりがちですが、独立型ヴィラ・ドームなら食事も温泉もすべて客室内。家族や大切なパートナーと完全なプライベート空間を守れます。
              </p>
            </div>
          </div>
        </section>

        {/* セクション2: 施設一覧 */}
        <section aria-labelledby="hotels-heading" className="space-y-8">
          <div className="border-l-4 border-emerald-600 pl-4">
            <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              【富士山・関東】シルバーウィークに泊まりたい極上グランピング施設
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              富士山眺望・客室専用温泉・サウナ・BBQ設備など、上質を極めた楽天トラベル厳選宿をご紹介します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      富士山絶景グランピングリゾート
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
                    富士山麓ステイ
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-bold text-emerald-800 mb-1">
                      <span>📍</span>
                      <span>{hotel.address1 || "山梨県"} {hotel.nearestStation ? `（最寄り: ${hotel.nearestStation}駅）` : ""}</span>
                    </div>
                    <h3 className="font-black text-slate-900 text-lg leading-snug group-hover:text-emerald-700 transition line-clamp-2">
                      {hotel.hotelName}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {hotel.hotelSpecial || "雄大な富士山を正面に望む極上ロケーション。客室専用露天風呂やプライベートサウナ、地産食材をふんだんに使ったグランピングBBQで非日常を体験できます。"}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-500 block font-medium">最安参考料金（1名）</span>
                      <span className="text-emerald-700 font-black text-xl">
                        {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "空室・料金確認"}
                      </span>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5"
                    >
                      楽天トラベルでプランを見る ➔
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3: 予約と過ごし方のプロ直伝アドバイス */}
        <section className="bg-gradient-to-br from-emerald-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-emerald-800/40 space-y-6">
          <div>
            <span className="text-emerald-400 font-black text-xs uppercase tracking-wider">Autumn Glamping Tips</span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
              富士山グランピングを満喫する【秋の連休攻略法】
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-300">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-emerald-300 text-sm mb-1.5">① 朝5:30の「赤富士・逆さ富士」を見逃さない</h4>
              <p className="text-slate-400 leading-relaxed">
                秋晴れの早朝は湖面が静まり返り、日の出直後に山肌が朱色に染まる絶景チャンス。ドームテントのカーテンを開けておくか、アラームをセットしてテラスへ出ましょう。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-emerald-300 text-sm mb-1.5">② 持ち物は「脱ぎ着しやすい防寒着」が最重要</h4>
              <p className="text-slate-400 leading-relaxed">
                BBQグリル周辺は暖かいものの、風が吹き抜けると一気に冷え込みます。綿やウール混紡のカーディガンや難燃フリースが焚き火の火の粉対策としても最適です。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <h4 className="font-bold text-emerald-300 text-sm mb-1.5">③ シルバーウィーク予約は直前放出枠を狙う</h4>
              <p className="text-slate-400 leading-relaxed">
                連休の客室温泉付きドームは2〜3ヶ月前に満室になりがちですが、宿泊日の14日前〜7日前のキャンセル料発生タイミングで空室が復活することが多々あります。こまめなチェックが吉です。
              </p>
            </div>
          </div>
        </section>

        {/* セクション4: FAQ（構造化データ連動） */}
        <section aria-labelledby="faq-heading" className="bg-white rounded-3xl border border-emerald-200 p-6 sm:p-8">
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-emerald-600">❓</span> 富士山・関東グランピングのよくある質問
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
