import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【クリスマスお泊まりデートおすすめ】イルミネーション×温泉×極上ディナーで過ごす冬の記念日旅 ｜ 日本全国・旅宿クラウド",
  description:
    "クリスマスに泊まりたい憧れのデートプラン！軽井沢の星空キャンドルナイト＆暖炉付きリゾート、みなとみらい夜景一望ホテル、雪見露天風呂とローストビーフ懐石を味わう温泉旅館徹底比較。",
  keywords: [
    "クリスマス お泊まりデート ホテル",
    "クリスマス 温泉 デート",
    "軽井沢 クリスマス ホテル",
    "みなとみらい クリスマス 夜景 ホテル",
    "クリスマス ディナー 宿泊 カップル",
    "冬 記念日旅行 ホテル",
    "楽天トラベル クリスマス デート"
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
      return data["christmas-date-onsen-dinner-trip-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for christmas-date-onsen-dinner-trip-guide", e);
  }
  return [];
}

export default function ChristmasDateOnsenDinnerTripGuidePage() {
  const hotels = loadHotels();

  // クリスマスデート宿の選び方 3つのスタイル
  const dateStyles = [
    {
      theme: "STYLE 01",
      title: "避暑地から冬の聖地へ「軽井沢の森＆暖炉フレンチ」",
      desc: "教会に灯る無数のキャンドルナイトと澄み切った星空。静まり返る落葉松の森に佇むクラシックホテルで、パチパチとはぜる暖炉の炎を眺めながら伝統のクリスマスフレンチを堪能します。",
      tag: "キャンドルナイト＆静寂の森"
    },
    {
      theme: "STYLE 02",
      title: "大観覧車と湾岸の煌めき「みなとみらい夜景バルコニー」",
      desc: "赤レンガ倉庫のクリスマスマーケットを楽しんだ後は、ベイブリッジとイルミネーションを部屋一面から見下ろす特等席へ。プライベートバルコニーで乾杯するシャンパンは格別です。",
      tag: "100万ドルの湾岸メガ夜景"
    },
    {
      theme: "STYLE 03",
      title: "極上のぬくもり「雪見露天風呂＆冬の厳選会席」",
      desc: "冬の冷たい外気と熱い名湯のコントラスト。湯けむりに包まれながら二人で入る貸切露天風呂の後は、信州牛やローストビーフを盛り込んだクリスマス特別ディナーに舌鼓。",
      tag: "貸切温泉＆冬の美食"
    }
  ];

  // 聖夜のロマンティック2DAYS タイムライン
  const christmasTimeline = [
    {
      time: "15:00",
      stage: "チェックイン＆クリスマスタッチのウェルカムティー",
      details: "ロビーに飾られた巨大なクリスマスツリーと華やかなオーナメントがお出迎え。ホットワインやジンジャーティーで冷えた身体を温めます。"
    },
    {
      time: "16:30",
      stage: "冬の黄昏時〜イルミネーション点灯の瞬間を散策",
      details: "街中やホテルの庭園が一斉に点灯する幻想的なマジックアワー。手をつないでキャンドル回廊やクリスマスマーケットを巡ります。"
    },
    {
      time: "19:00",
      stage: "シェフ特製 クリスマス特別フルコースディナー",
      details: "フォアグラやトリュフ、特選牛を贅沢に仕立てたノエル限定ディナー。生演奏が流れるラグジュアリーな空間で、とっておきの乾杯。"
    },
    {
      time: "21:30",
      stage: "客室でのクリスマスプレゼント交換＆夜景タイム",
      details: "部屋に戻ると、窓一面にきらめく夜景や静かな雪景色。内緒で用意したプレゼントを渡し合い、二人の絆を確かめ合う時間。"
    },
    {
      time: "23:00",
      stage: "深夜のホットバス＆ゆったりワイン",
      details: "温かいバスタイムや温泉で芯まで温まり、ふかふかのベッドへ。聖夜の特別な余韻を心ゆくまで味わいます。"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-20 font-sans text-slate-800">
      {/* ヒーローセクション（Indigo & Midnight Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white p-8 md:p-14 shadow-2xl border border-indigo-700/50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-indigo-500/40 text-indigo-200 border border-indigo-400/50 px-3.5 py-1 rounded-full uppercase shadow-sm">
              HOLIDAY ROMANCE GUIDE
            </span>
            <span className="text-xs font-semibold text-amber-200 bg-indigo-950/80 px-2.5 py-1 rounded-full border border-amber-400/30">
              🎄 軽井沢の静寂の森 ＆ 横浜みなとみらい夜景
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white drop-shadow-sm font-journal-serif">
            【クリスマスお泊まりデートおすすめ】<br />
            <span className="bg-gradient-to-r from-amber-200 via-indigo-100 to-rose-200 bg-clip-text text-transparent">
              イルミネーション×温泉×極上ディナーで過ごす冬の記念日旅
            </span>
          </h1>

          <p className="text-sm md:text-base text-indigo-100/90 leading-relaxed max-w-2xl font-medium">
            1年に一度のクリスマスだからこそ、いつもと違う特別な空間で二人きりの時間を。静かな森に佇む教会と暖炉フレンチが魅力の軽井沢、まばゆい観覧車と港のイルミネーションをテラスから見下ろす横浜みなとみらい。大人の恋人たちが本当に泊まってよかったと感動する厳選ホテルを特集します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-indigo-200/90">
            <span className="flex items-center gap-1.5 bg-indigo-900/70 px-3 py-1.5 rounded-lg border border-indigo-600/40">
              <span>✨</span> クリスマス特別ディナー確約プラン
            </span>
            <span className="flex items-center gap-1.5 bg-indigo-900/70 px-3 py-1.5 rounded-lg border border-indigo-600/40">
              <span>🍷</span> 夜景ビュー＆バルコニー付き客室
            </span>
            <span className="flex items-center gap-1.5 bg-indigo-900/70 px-3 py-1.5 rounded-lg border border-indigo-600/40">
              <span>🎁</span> プレゼント事前預かり・サプライズ対応
            </span>
          </div>
        </div>
      </section>

      {/* 楽天トラベル クーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* ナビゲーションメニュー */}
      <nav aria-label="目次ナビゲーション" className="bg-gradient-to-r from-indigo-50 via-slate-50 to-white rounded-2xl p-6 border border-indigo-200 shadow-sm">
        <h2 className="text-lg font-black text-indigo-950 mb-3 flex items-center gap-2">
          <span>🕯️</span> このガイドの目次
        </h2>
        <ul className="grid sm:grid-cols-2 gap-2.5 text-xs md:text-sm text-indigo-900 font-bold">
          <li>
            <a href="#style-choice" className="hover:text-indigo-600 flex items-center gap-1.5 transition">
              <span className="text-indigo-500">▶</span> 理想のクリスマスデートを叶える3つのステイスタイル
            </a>
          </li>
          <li>
            <a href="#hotels-section" className="hover:text-indigo-600 flex items-center gap-1.5 transition">
              <span className="text-indigo-500">▶</span> 聖夜に泊まりたい！軽井沢＆みなとみらい厳選ホテル4選
            </a>
          </li>
          <li>
            <a href="#christmas-timeline" className="hover:text-indigo-600 flex items-center gap-1.5 transition">
              <span className="text-indigo-500">▶</span> 二人の距離が縮まるロマンティック滞在時間割
            </a>
          </li>
          <li>
            <a href="#access-guide" className="hover:text-indigo-600 flex items-center gap-1.5 transition">
              <span className="text-indigo-500">▶</span> 軽井沢へのアクセス比較（新幹線 vs 高速バス）
            </a>
          </li>
        </ul>
      </nav>

      {/* スタイル選びセクション */}
      <section id="style-choice" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black tracking-widest text-indigo-600 uppercase bg-indigo-100 px-3 py-1 rounded-full">
            DATE PLAN COMPARISON
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            あなたはどちら派？軽井沢の静寂 vs みなとみらいの煌めき
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            二人の好みの過ごし方に合わせて、最適な滞在拠点を選びましょう。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {dateStyles.map((style, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border-2 border-indigo-100 hover:border-indigo-400 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-indigo-700 bg-indigo-100/80 px-2.5 py-0.5 rounded-md tracking-wider">
                    {style.theme}
                  </span>
                  <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    {style.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {style.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {style.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ホテル一覧セクション */}
      <section id="hotels-section" className="space-y-8">
        <div className="border-l-4 border-indigo-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-indigo-600 tracking-wider">CHRISTMAS LUXURY STAYS</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            聖夜を彩る憧れのおすすめ宿・ホテル一覧
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            クリスマスシーズンの週末やイブは予約が殺到します。早めの空室チェックが鉄則です。
          </p>
        </div>

        <div className="space-y-8">
          {hotels.map((hotel, index) => {
            const specialText = hotel.hotelSpecial || "";
            const minChargeFormatted = hotel.hotelMinCharge
              ? hotel.hotelMinCharge.toLocaleString()
              : "要問い合わせ";

            return (
              <article
                key={hotel.hotelNo}
                className="bg-white rounded-3xl overflow-hidden border border-indigo-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group"
              >
                {/* 写真 */}
                <div className="md:w-5/12 relative min-h-[260px] md:min-h-[320px] bg-slate-100 overflow-hidden shrink-0">
                  {hotel.hotelImageUrl ? (
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-indigo-950 text-indigo-200">
                      <span>No Image Available</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-indigo-950/90 backdrop-blur-sm text-amber-200 text-xs font-black px-3 py-1 rounded-full shadow-md border border-amber-400/40">
                    おすすめ #{index + 1}
                  </div>
                  {hotel.reviewAverage && hotel.reviewAverage > 0 ? (
                    <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-sm text-amber-300 text-xs font-bold px-2.5 py-1 rounded-lg border border-amber-400/30 flex items-center gap-1">
                      <span>★</span>
                      <span className="text-white font-black">{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount ? (
                        <span className="text-[10px] text-slate-300 font-normal">({hotel.reviewCount}件)</span>
                      ) : null}
                    </div>
                  ) : null}
                </div>

                {/* 情報 */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {hotel.address1 ? (
                        <span className="bg-indigo-50 text-indigo-800 font-bold px-2.5 py-0.5 rounded-md border border-indigo-200">
                          {hotel.address1} {hotel.address2 ? hotel.address2.slice(0, 10) : ""}
                        </span>
                      ) : null}
                      {hotel.nearestStation ? (
                        <span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-0.5 rounded-md">
                          最寄: {hotel.nearestStation}駅
                        </span>
                      ) : null}
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-indigo-700 transition">
                      {hotel.hotelName}
                    </h3>

                    {specialText ? (
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed bg-indigo-50/60 p-3.5 rounded-xl border border-indigo-100">
                        {specialText}
                      </p>
                    ) : null}

                    {hotel.access ? (
                      <div className="text-xs text-slate-500 flex items-start gap-1.5">
                        <span className="shrink-0 text-indigo-600 font-bold">アクセス:</span>
                        <span>{hotel.access}</span>
                      </div>
                    ) : null}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <span className="text-[11px] text-slate-500 block">参考宿泊料金（2名1室時/1名あたり）</span>
                      <div className="text-indigo-700 font-black text-2xl md:text-3xl flex items-baseline gap-1">
                        <span>¥{minChargeFormatted}</span>
                        <span className="text-xs text-slate-500 font-medium">〜（税込）</span>
                      </div>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-700 via-indigo-800 to-slate-900 hover:from-indigo-800 hover:to-slate-950 text-white font-black px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm group/btn cursor-pointer"
                    >
                      <span>楽天トラベルで空室・プランを見る</span>
                      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* クリスマス デートタイムライン */}
      <section id="christmas-timeline" className="bg-gradient-to-b from-indigo-950 via-slate-900 to-indigo-900 text-white rounded-3xl p-6 md:p-10 shadow-xl space-y-8 border border-indigo-800/40">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-black tracking-widest text-amber-300 uppercase bg-indigo-900/80 px-3 py-1 rounded-full border border-amber-400/30">
            ROMANTIC TIMELINE
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white font-journal-serif">
            クリスマスの夜を特別にする理想の時間割
          </h2>
          <p className="text-xs md:text-sm text-indigo-200/80">
            混雑するディナー時間やプレゼントの渡しどころなど、スマートな演出のヒント。
          </p>
        </div>

        <div className="relative border-l-2 border-indigo-500/40 ml-4 md:ml-8 pl-6 space-y-6">
          {christmasTimeline.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-4 border-indigo-950 group-hover:scale-125 transition-transform" />
              <div className="bg-indigo-900/40 rounded-2xl p-4 md:p-5 border border-indigo-700/40 hover:border-indigo-500/70 transition">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-amber-300 font-mono font-black text-xs md:text-sm">
                    {step.time}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-white">
                    {step.stage}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-indigo-100/80 leading-relaxed">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 交通ガイド（内部リンク） */}
      <section id="access-guide" className="bg-white rounded-3xl p-6 md:p-8 border border-indigo-200 shadow-sm space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-indigo-600">TRANSIT & PLANNING</span>
          <h2 className="text-xl md:text-2xl font-black text-slate-900">
            軽井沢デートの交通手段を徹底比較
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            冬の軽井沢は路面凍結のおそれがあるため、新幹線や直行高速バスの利用がスムーズです。
          </p>
        </div>

        <div className="grid sm:grid-cols-1 gap-4">
          <Link
            href="/tokyo-nagano-karuizawa-bus-vs-shinkansen"
            className="group block p-5 rounded-2xl border-2 border-indigo-100 hover:border-indigo-400 bg-indigo-50/40 hover:bg-indigo-50 transition-all duration-200"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-xs font-bold text-indigo-700 flex items-center gap-1">
                <span>🚅</span> 交通手段徹底比較
              </span>
              <span className="text-xs font-medium text-slate-500">所要時間・料金シミュレーション</span>
            </div>
            <h3 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-indigo-700 transition">
              【東京〜長野・軽井沢】高速バス vs 新幹線の料金・時間・快適度を徹底比較！
            </h3>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed">
              北陸新幹線なら東京駅から最短1時間で軽井沢駅へ直行！高速バスの格安プランとの価格差や、冬期デートでのメリット・デメリットを分かりやすく解説しています。
            </p>
          </Link>
        </div>
      </section>

      {/* 予約のアドバイス */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 space-y-4">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          <span>💡</span> クリスマスお泊まりデート 予約成功の3大鉄則
        </h2>
        <div className="grid md:grid-cols-3 gap-4 text-xs md:text-sm">
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
            <h3 className="font-bold text-indigo-900">1. ディナー確約プランを確保</h3>
            <p className="text-slate-600 text-xs">
              当日は周辺レストランが満席になりがち。ホテル内レストランのディナー付きプランをセットで予約するのがもっとも安心です。
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
            <h3 className="font-bold text-indigo-900">2. 眺望指定（ベイビュー/フォレスト）</h3>
            <p className="text-slate-600 text-xs">
              夜景が目的なら階数や方角（観覧車側など）の指定があるプランを選択しましょう。街側と海側で雰囲気が大きく変わります。
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
            <h3 className="font-bold text-indigo-900">3. プレゼントの事前預かり相談</h3>
            <p className="text-slate-600 text-xs">
              サプライズの荷物がある場合、事前にホテルへ連絡すればチェックイン前にお部屋にセッティングしてくれる施設も多くあります。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
