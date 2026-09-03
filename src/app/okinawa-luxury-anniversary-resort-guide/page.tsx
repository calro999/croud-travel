import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【沖縄・宮古島 記念日ヴィラ＆極上リゾート】プライベートプール付き客室で過ごすプロポーズ・ハネムーン旅 ｜ 日本全国・旅宿クラウド",
  description:
    "一生に一度の記念日・ハネムーン・プロポーズにふさわしい沖縄本島＆宮古島の最高峰リゾートヴィラ！プライベートプール・ジェットバス・サンセットディナー付きの極上ラグジュアリーステイガイド。",
  keywords: [
    "沖縄 記念日 ヴィラ",
    "宮古島 プライベートプール付き客室",
    "宮古島 ハネムーン ホテル",
    "沖縄 プロポーズ リゾート",
    "宮古島 高級ヴィラ 記念日",
    "沖縄 プライベートヴィラ カップル",
    "楽天トラベル 沖縄 高級リゾート"
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
      return data["okinawa-luxury-anniversary-resort-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for okinawa-luxury-anniversary-resort-guide", e);
  }
  return [];
}

export default function OkinawaLuxuryAnniversaryResortGuidePage() {
  const hotels = loadHotels();

  // 極上ヴィラステイを彩る3大ラグジュアリー体験
  const luxuryFeatures = [
    {
      step: "FEATURE 01",
      title: "完全独立型の「プライベート温水プール＆デイベッド」",
      desc: "誰にも邪魔されない専用の中庭に広がるエメラルドグリーンのプール。宮古ブルーの空の下、デイベッドでシャンパンを傾けながら二人だけの至福の南国バカンスを満喫できます。",
      accent: "完全プライベート空間"
    },
    {
      step: "FEATURE 02",
      title: "専属シェフの出張BBQ または 黄金色に染まるサンセットディナー",
      desc: "宮古牛や近海魚、島野菜をふんだんに使った贅沢なコース料理。ヴィラのテラスで夕陽が沈むマジックアワーを眺めながら、プロポーズや記念日の特別なお祝いを。",
      accent: "宮古牛×極上ワイン"
    },
    {
      step: "FEATURE 03",
      title: "部屋の照明を落とせば広がる「満天の天然プラネタリウム」",
      desc: "人工の明かりが少ない離島ならではの特権。夜風が心地よいプールサイドやジェットバスに浸かりながら、夜空いっぱいに瞬く天の川や流れ星を二人で見上げるロマンティックな時間。",
      accent: "南十字星・満天の天の川"
    }
  ];

  // ハネムーン＆記念日のモデルステイスケジュール
  const honeymoonSchedule = [
    {
      time: "14:00",
      headline: "宮古空港到着・レンタカーで絶景ドライブへ",
      detail: "空港から海沿いを爽快にドライブ。伊良部大橋を渡り、圧倒的な宮古ブルーのグラデーションに息を呑みながらヴィラへ向かいます。"
    },
    {
      time: "15:30",
      headline: "プライベートヴィラへチェックイン＆ウェルカムシャンパン",
      detail: "広々としたリビングと、リビングから直結する専用プール。ウェルカムフラワーや冷えたシャンパンで、非日常の記念日ステイが開幕。"
    },
    {
      time: "17:00",
      headline: "専用プールサイドでくつろぐサンセットタイム",
      detail: "夕陽が海を茜色に染めていくマジックアワー。水着のままプールサイドのデイベッドに寝そべり、波音と鳥の声に包まれます。"
    },
    {
      time: "19:00",
      headline: "プールサイドでのプライベート宮古牛ディナー＆サプライズ",
      detail: "とろけるような宮古牛ステーキと新鮮な伊勢海老。デザートプレートのサプライズメッセージとともに、花束や手紙を手渡す感動のひととき。"
    },
    {
      time: "21:30",
      headline: "満天の星空を眺めるプライベートジェットバス",
      detail: "ヴィラの照明をすべて消してテラスへ。目の前に広がる無数の星々と静寂に包まれ、一生の宝物になる夜を刻みます。"
    },
    {
      time: "08:30",
      headline: "南国の果実と焼きたてパンをテラスで味わうフローティング朝食",
      detail: "プールに浮かべるフローティングトレイやテラスダイニングでいただく優雅な朝食。どこまでも澄み渡る宮古島の海風とともに一日がスタート。"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-20 font-sans text-slate-800">
      {/* ヒーローセクション（Violet & Tropical Luxury Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-950 via-purple-950 to-indigo-950 text-white p-8 md:p-14 shadow-2xl border border-violet-700/50">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-fuchsia-400/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-violet-500/30 text-violet-200 border border-violet-400/40 px-3.5 py-1 rounded-full uppercase shadow-sm">
              HONEYMOON & PRIVATE VILLA
            </span>
            <span className="text-xs font-semibold text-fuchsia-200 bg-violet-950/80 px-2.5 py-1 rounded-full border border-fuchsia-500/30">
              🌺 沖縄・宮古島の最高峰リゾートヴィラ
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-white drop-shadow-sm font-journal-serif">
            【沖縄・宮古島 記念日ヴィラ＆極上リゾート】<br />
            <span className="bg-gradient-to-r from-violet-200 via-fuchsia-100 to-amber-200 bg-clip-text text-transparent">
              プライベートプール付き客室で過ごすプロポーズ・ハネムーン旅
            </span>
          </h1>

          <p className="text-sm md:text-base text-violet-100/90 leading-relaxed max-w-2xl font-medium">
            周囲の目を一切気にせず、息を呑む宮古ブルーの海と満天の星空を二人だけで独占するプライベートヴィラ。専用温水プール、テラスでの極上宮古牛ディナー、波音を聞きながら過ごす至極のリゾートステイは、ハネムーンやプロポーズ、大切な結婚記念日にふさわしい最高峰の体験を約束します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-violet-200/90">
            <span className="flex items-center gap-1.5 bg-violet-900/60 px-3 py-1.5 rounded-lg border border-violet-600/40">
              <span>🏊</span> 全棟プライベートプール＆専用テラス
            </span>
            <span className="flex items-center gap-1.5 bg-violet-900/60 px-3 py-1.5 rounded-lg border border-violet-600/40">
              <span>🥩</span> 宮古牛・島野菜の贅沢ディナー対応
            </span>
            <span className="flex items-center gap-1.5 bg-violet-900/60 px-3 py-1.5 rounded-lg border border-violet-600/40">
              <span>💍</span> サプライズプロポーズ・フラワー手配
            </span>
          </div>
        </div>
      </section>

      {/* 楽天トラベル クーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* ナビゲーションメニュー */}
      <nav aria-label="目次ナビゲーション" className="bg-gradient-to-r from-violet-50 via-purple-50/50 to-white rounded-2xl p-6 border border-violet-200 shadow-sm">
        <h2 className="text-lg font-black text-violet-950 mb-3 flex items-center gap-2">
          <span>🏝️</span> このリゾートガイドの目次
        </h2>
        <ul className="grid sm:grid-cols-2 gap-2.5 text-xs md:text-sm text-violet-900 font-bold">
          <li>
            <a href="#villa-features" className="hover:text-violet-600 flex items-center gap-1.5 transition">
              <span className="text-violet-500">▶</span> 宮古島プライベートヴィラが記念日に選ばれる3つの理由
            </a>
          </li>
          <li>
            <a href="#villa-hotels" className="hover:text-violet-600 flex items-center gap-1.5 transition">
              <span className="text-violet-500">▶</span> 宮古島 厳選ラグジュアリープールヴィラ一覧
            </a>
          </li>
          <li>
            <a href="#honeymoon-itinerary" className="hover:text-violet-600 flex items-center gap-1.5 transition">
              <span className="text-violet-500">▶</span> ハネムーン＆記念日の極上ステイ時間割
            </a>
          </li>
          <li>
            <a href="#budget-guides" className="hover:text-violet-600 flex items-center gap-1.5 transition">
              <span className="text-violet-500">▶</span> 沖縄旅行の予算計画＆泊数シミュレーション
            </a>
          </li>
        </ul>
      </nav>

      {/* ヴィラの魅力 3つの特徴 */}
      <section id="villa-features" className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black tracking-widest text-violet-600 uppercase bg-violet-100 px-3 py-1 rounded-full">
            THE LUXURY VILLA ESSENCE
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            なぜ記念日には「大型ホテル」ではなく「プライベートヴィラ」なのか
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            ロビーの混雑やエレベーターの待ち時間は一切なし。チェックインからチェックアウトまで、二人きりの完全な隠れ家が手に入ります。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {luxuryFeatures.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border-2 border-violet-100 hover:border-violet-400 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-violet-700 bg-violet-100/80 px-2.5 py-0.5 rounded-md tracking-wider">
                    {feat.step}
                  </span>
                  <span className="text-[11px] font-bold text-fuchsia-700 bg-fuchsia-50 border border-fuchsia-200 px-2 py-0.5 rounded-full">
                    {feat.accent}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {feat.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選ホテルリスト */}
      <section id="villa-hotels" className="space-y-8">
        <div className="border-l-4 border-violet-500 pl-4 space-y-1">
          <span className="text-xs font-bold text-violet-600 tracking-wider">EXCLUSIVE VILLAS & RESORTS</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            宮古島 プライベートプール＆絶景を誇る最高峰ヴィラ
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            楽天トラベルで予約可能な、記念日・ハネムーン特典が充実した大人の隠れ家ヴィラです。
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
                className="bg-white rounded-3xl overflow-hidden border border-violet-200 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row group"
              >
                {/* 画像 */}
                <div className="md:w-5/12 relative min-h-[260px] md:min-h-[320px] bg-slate-100 overflow-hidden shrink-0">
                  {hotel.hotelImageUrl ? (
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-violet-950 text-violet-200">
                      <span>No Image Available</span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3 bg-violet-950/90 backdrop-blur-sm text-violet-200 text-xs font-black px-3 py-1 rounded-full shadow-md border border-violet-400/40">
                    特選ヴィラ #{index + 1}
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
                        <span className="bg-violet-50 text-violet-800 font-bold px-2.5 py-0.5 rounded-md border border-violet-200">
                          {hotel.address1} {hotel.address2 ? hotel.address2.slice(0, 10) : ""}
                        </span>
                      ) : null}
                      {hotel.nearestStation ? (
                        <span className="bg-slate-100 text-slate-700 font-medium px-2.5 py-0.5 rounded-md">
                          空港: {hotel.nearestStation}
                        </span>
                      ) : null}
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-slate-900 group-hover:text-violet-700 transition">
                      {hotel.hotelName}
                    </h3>

                    {specialText ? (
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed bg-violet-50/60 p-3.5 rounded-xl border border-violet-100">
                        {specialText}
                      </p>
                    ) : null}

                    {hotel.access ? (
                      <div className="text-xs text-slate-500 flex items-start gap-1.5">
                        <span className="shrink-0 text-violet-600 font-bold">アクセス:</span>
                        <span>{hotel.access}</span>
                      </div>
                    ) : null}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <span className="text-[11px] text-slate-500 block">参考宿泊料金（2名1室時/1名あたり）</span>
                      <div className="text-violet-700 font-black text-2xl md:text-3xl flex items-baseline gap-1">
                        <span>¥{minChargeFormatted}</span>
                        <span className="text-xs text-slate-500 font-medium">〜（税込）</span>
                      </div>
                    </div>

                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 hover:from-violet-700 hover:to-indigo-800 text-white font-black px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm group/btn cursor-pointer"
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

      {/* ハネムーン タイムスケジュール */}
      <section id="honeymoon-itinerary" className="bg-gradient-to-b from-violet-950 via-purple-950 to-slate-950 text-white rounded-3xl p-6 md:p-10 shadow-xl space-y-8 border border-violet-800/40">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-black tracking-widest text-violet-300 uppercase bg-violet-900/80 px-3 py-1 rounded-full border border-violet-500/30">
            LUXURY STAY SCHEDULE
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white font-journal-serif">
            プールヴィラで過ごす至高の記念日ステイ時間割
          </h2>
          <p className="text-xs md:text-sm text-violet-200/80">
            チェックインから星空ジェットバス、フローティング朝食までの極上タイムライン。
          </p>
        </div>

        <div className="relative border-l-2 border-violet-500/40 ml-4 md:ml-8 pl-6 space-y-6">
          {honeymoonSchedule.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-fuchsia-400 border-4 border-violet-950 group-hover:scale-125 transition-transform" />
              <div className="bg-violet-900/30 rounded-2xl p-4 md:p-5 border border-violet-700/30 hover:border-violet-500/60 transition">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-violet-300 font-mono font-black text-xs md:text-sm">
                    {step.time}
                  </span>
                  <h3 className="text-sm md:text-base font-bold text-white">
                    {step.headline}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-violet-100/80 leading-relaxed">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク セクション */}
      <section id="budget-guides" className="bg-white rounded-3xl p-6 md:p-8 border border-violet-200 shadow-sm space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-violet-600">TRIP PLANNING</span>
          <h2 className="text-xl md:text-2xl font-black text-slate-900">
            沖縄・宮古島旅行の予算＆日程計画ガイド
          </h2>
          <p className="text-xs md:text-sm text-slate-600">
            航空券やレンタカー代を含めたトータル旅費や、何泊するのが最適かを詳しく解説しています。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/okinawa-travel-budget-plan"
            className="group block p-5 rounded-2xl border-2 border-slate-100 hover:border-violet-400 bg-slate-50 hover:bg-violet-50/40 transition-all duration-200"
          >
            <div className="text-xs font-bold text-violet-600 mb-1 flex items-center gap-1">
              <span>✈️</span> 旅費・予算シミュレーション
            </div>
            <h3 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-violet-700 transition">
              【沖縄旅行 費用】2泊3日・3泊4日でいくら？航空券・ホテル・レンタカーの全予算
            </h3>
            <p className="text-xs text-slate-500 mt-2 line-clamp-2">
              シーズン別の航空券相場から、リゾートホテル宿泊費、アクティビティ代までリアルな費用内訳を大公開。
            </p>
          </Link>

          <Link
            href="/okinawa-family-trip-how-many-nights-budget"
            className="group block p-5 rounded-2xl border-2 border-slate-100 hover:border-violet-400 bg-slate-50 hover:bg-violet-50/40 transition-all duration-200"
          >
            <div className="text-xs font-bold text-violet-600 mb-1 flex items-center gap-1">
              <span>📅</span> 泊数＆スケジュール設計
            </div>
            <h3 className="font-bold text-slate-900 text-sm md:text-base group-hover:text-violet-700 transition">
              【沖縄旅行 何泊がベスト？】2泊3日〜4泊5日のモデルコースと費用総額まとめ
            </h3>
            <p className="text-xs text-slate-500 mt-2 line-clamp-2">
              宮古島・離島巡りやのんびりヴィラ滞在に最適な宿泊数と、失敗しない旅程の組み立て方を徹底アドバイス。
            </p>
          </Link>
        </div>
      </section>

      {/* サプライズ＆プロポーズ成功のポイント */}
      <section className="bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200 space-y-6">
        <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
          <span>💍</span> ヴィラでのプロポーズ・記念日サプライズを成功させる秘訣
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-xs md:text-sm text-slate-700">
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
            <h3 className="font-bold text-violet-900">コンシェルジュやスタッフへの事前相談</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              プライベートヴィラでは、ベッドの花びらアート、冷えたシャンパンのセット、フラワーブーケの手配など細やかな要望に柔軟に応えてくれる施設が多くあります。予約完了後、早めに宿泊先に要望を伝えましょう。
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
            <h3 className="font-bold text-violet-900">温水プールとレンタカーの手配</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              春先や秋冬の滞在では、温水プール対応のヴィラを選ぶことで季節を問わず快適に水辺を楽しめます。また、宮古島内の移動には空港送迎付きまたは空港配車のレンタカー予約が必須です。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
