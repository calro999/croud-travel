import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【プライベートサウナ付きグランピング2026】秋のシルバーウィークにととのう！バレルサウナ＆天然水風呂 ｜ 日本全国・旅宿クラウド",
  description:
    "涼しい秋風の中で究極の外気浴！完全貸切のフィンランド式バレルサウナ、富士山天然水や地下水の水風呂、星空の下でのインフィニティチェア外気浴が楽しめる極上サウナ付きグランピング特集。",
  keywords: [
    "プライベートサウナ グランピング",
    "シルバーウィーク サウナ付きグランピング",
    "バレルサウナ 宿泊",
    "富士山 サウナ グランピング",
    "客室専用サウナ 貸切水風呂",
    "セルフロウリュ キャンプ",
    "秋 ととのい 外気浴"
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
      return data["silver-week-glamping-private-sauna-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-private-sauna-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingPrivateSaunaPage() {
  const hotels = loadHotels();

  // サウナの特徴・滞在ポイント
  const saunaFeatures = [
    {
      icon: "🪵",
      title: "本格木製バレル＆フィンランド式サウナを完全貸切",
      desc: "共用サウナと異なり、時間や他人の視線を一切気にせず24時間いつでもセルフロウリュ可能。ヒノキやスギの芳醇なアロマ水蒸気に包まれます。",
    },
    {
      icon: "💧",
      title: "富士山伏流水や地下水かけ流しの極冷水風呂",
      desc: "チラー冷却水風呂や山麓の清涼な天然水を使用。水温14〜16℃の滑らかな肌当たりで、羽衣をまとうような爽快なアイシングを実感。",
    },
    {
      icon: "💺",
      title: "秋の澄んだ空気と満天の星空に包まれるインフィニティ外気浴",
      desc: "真夏のような蒸し暑さがなく、爽やかな秋風がそよぐシルバーウィークは外気浴の黄金期。リクライニングチェアで深呼吸し、極上のととのいへ。",
    },
  ];

  // 1泊2日のサウナトリップタイムスケジュール
  const saunaSchedule = [
    {
      time: "15:00",
      title: "チェックイン＆サウナ室の予熱開始",
      detail: "専用デッキのバレルサウナの薪ストーブや電気ヒーターを点火。好みの天然アロマ水を調合してロウリュ用バケットを用意。",
    },
    {
      time: "16:30",
      title: "サンセット・サウナセッション（1st Round）",
      detail: "夕暮れ空のグラデーションを眺めながら8〜10分。天然水風呂で急速冷却し、秋風が抜けるテラスのインフィニティチェアでディープリラックス。",
    },
    {
      time: "18:30",
      title: "サウナ飯（サ飯）BBQ＆地ビールで乾杯",
      detail: "研ぎ澄まされた味覚で味わう黒毛和牛ステーキ、地元野菜のホイル焼き、スパイスカレー。乾いた喉に流し込むクラフトビールは別格。",
    },
    {
      time: "21:30",
      title: "ナイトサウナ＆満天の星空外気浴（2nd Round）",
      detail: "照明を落とした静寂の暗闇サウナ。焚き火の炎が揺れる屋外スペースで、秋の星座を見上げながら心身をリセット。",
    },
    {
      time: "07:00",
      title: "朝ウナで爽快な目覚めとモーニングコーヒー",
      detail: "朝霧が立ち込める澄み切った空気の中で軽い1セット。朝食のホットサンドとドリップコーヒーで体が内側から温まります。",
    },
  ];

  // FAQデータ
  const faqs = [
    {
      question: "グランピングのサウナを利用する際の水着や持ち物は何が必要ですか？",
      answer:
        "水着（または濡れても速乾性のあるラッシュガード・スポーツウェア）、サウナハット、サンダルを持参してください。ポンチョやサウナマットは施設によって備え付けがある場合とレンタル・持参が必要な場合があります。秋の夜は外気浴中に身体が冷えやすいため、厚手のサウナポンチョがあると重宝します。",
    },
    {
      question: "雨天や強風時でも客室専用サウナや外気浴は利用できますか？",
      answer:
        "客室デッキに屋根が設置されている施設や独立したキャビン型サウナであれば、通常の雨天でも問題なく利用可能です。ただし、薪ストーブサウナや屋外焚き火を伴う施設では、台風などの強風警報発令時に火気使用が制限されることがあります。予約時に全天候型ルーフの有無を確認するのがおすすめです。",
    },
    {
      question: "セルフロウリュ用のアロマオイルや水は持ち込みできますか？",
      answer:
        "多くの施設で専用のアロマウォーターが用意されていますが、持ち込みの可否は施設規則によって異なります。純度の高い天然エッセンシャルオイルのみ許可されている場合や、ストーブ故障防止のため施設指定水のみに限定されている場合があるため、事前に施設案内をご確認ください。",
    },
    {
      question: "サウナ初心者や子どもでも一緒に楽しめますか？",
      answer:
        "完全プライベート空間のため、温度を低めに設定したり、足湯感覚で腰掛けたりと自由なペースで利用できます。ただし小学生以下のお子様は体温調節機能が未発達なため、長時間の高温サウナ浴は避け、ぬるめの温度や外気浴チェアでのリラックスを中心にするなど安全に配慮してください。",
    },
  ];

  // JSON-LD FAQPage 構造化データ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 px-4 sm:px-6">
      {/* 構造化データ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ヒーローセクション（Roseパレット） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-stone-950 via-rose-950 to-rose-900 text-white p-8 md:p-14 shadow-2xl border border-rose-500/20">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-rose-500 text-white px-3.5 py-1 rounded-full uppercase shadow-md">
              PRIVATE SAUNA & GLAMPING 2026
            </span>
            <span className="text-[10px] md:text-xs font-bold text-rose-200 bg-rose-900/60 border border-rose-400/40 px-3 py-1 rounded-full">
              シルバーウィーク秋のととのい特化
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【プライベートサウナ付きグランピング2026】秋のシルバーウィークにととのう！バレルサウナ＆天然水風呂
          </h1>

          <p className="text-xs md:text-sm text-rose-100/90 leading-relaxed font-medium">
            涼しい秋風が吹き抜けるシルバーウィークは、1年の中で最も外気浴が気持ちいいサウナのベストシーズン。他人の目を気にせず好きなアロマでセルフロウリュを楽しめる本格バレルサウナ、富士山伏流水や地下水のかけ流し水風呂、満天の星空を見上げるインフィニティチェア。サウナー仲間や大切なパートナーと過ごす極上のアウトドアサウナステイを厳選しました。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-rose-200">
            <span className="flex items-center gap-1.5">✓ 完全プライベート貸切サウナ</span>
            <span className="flex items-center gap-1.5">✓ 天然水風呂・チラー完備</span>
            <span className="flex items-center gap-1.5">✓ サ飯BBQ＆満天星空外気浴</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* サウナグランピングの魅力3箇条 */}
      <section className="bg-rose-50/50 border border-rose-200/80 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-rose-600 uppercase tracking-wider">Autumn Sauna Retreat</span>
          <h2 className="text-xl sm:text-2xl font-black text-rose-950 font-journal-serif">
            なぜ秋の連休に「サウナ付きグランピング」が選ばれるのか
          </h2>
          <p className="text-xs sm:text-sm text-rose-900/80">
            真夏の猛暑が去り、朝晩の涼しさが心地よいシルバーウィーク。サウナ施設とは一線を画す、大自然プライベート空間ならではの体験価値があります。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {saunaFeatures.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-rose-100 shadow-sm space-y-2.5">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="font-bold text-sm sm:text-base text-rose-950">{item.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選プライベートサウナ付きグランピング宿一覧 */}
      <section className="space-y-8" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-rose-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">Recommended Luxury Stays</span>
          <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-stone-900 font-journal-serif">
            シルバーウィークに泊まりたい極上プライベートサウナグランピング
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            客室内サウナ・本格バレルサウナ・源泉温泉・絶景水風呂を備えた全国の人気宿をピックアップ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-rose-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-rose-50">
                {hotel.hotelImageUrl ? (
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-rose-300 text-xs font-bold">
                    {hotel.hotelName}
                  </div>
                )}
                {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 ? (
                  <span className="absolute bottom-2.5 right-2.5 text-[10px] font-black bg-stone-950/85 text-rose-300 px-2.5 py-1 rounded-lg border border-rose-500/30">
                    1名 ¥{hotel.hotelMinCharge.toLocaleString()}〜
                  </span>
                ) : null}
                {hotel.reviewAverage && hotel.reviewAverage > 0 ? (
                  <div className="absolute top-2.5 left-2.5 bg-stone-950/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-0.5 rounded-lg flex items-center gap-1 border border-white/10">
                    <span className="text-amber-400">★</span>
                    <span>{hotel.reviewAverage.toFixed(2)}</span>
                    {hotel.reviewCount ? (
                      <span className="text-stone-300 text-[9px]">({hotel.reviewCount}件)</span>
                    ) : null}
                  </div>
                ) : null}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-rose-700">
                    <span>📍</span>
                    <span>
                      {hotel.address1} {hotel.address2 ? `· ${hotel.address2.split("町")[0]}町` : ""}
                    </span>
                    {hotel.nearestStation && (
                      <span className="text-stone-400 text-[10px]">（最寄: {hotel.nearestStation}）</span>
                    )}
                  </div>

                  <h3 className="font-black text-stone-900 text-base leading-snug group-hover:text-rose-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "客室専用の本格サウナと外気浴スペースを完備。大自然に囲まれながら心ゆくまでととのうグランピングリゾート。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-stone-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-rose-100 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-stone-500">
                    <span>専用サウナ付</span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
                  >
                    楽天トラベルで空室確認 ✈️
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* サウナ満喫 1泊2日モデルスケジュール */}
      <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-rose-950 shadow-lg">
        <div className="max-w-3xl space-y-6">
          <div className="space-y-1">
            <span className="text-rose-400 font-black text-xs uppercase tracking-widest">Sauna Trip Schedule</span>
            <h2 className="text-xl sm:text-2xl font-black text-white font-journal-serif">
              秋のサウナグランピング 1泊2日ととのいシミュレーション
            </h2>
            <p className="text-xs sm:text-sm text-stone-300">
              チェックインから翌朝の出発まで、サウナとアウトドア料理を無理なく最高潮で楽しむための黄金ルートです。
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            {saunaSchedule.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border-b border-stone-800 pb-4 last:border-0 last:pb-0">
                <span className="font-black text-rose-400 shrink-0 w-24 text-sm">{item.time}</span>
                <div className="space-y-1">
                  <strong className="text-white block text-sm">{item.title}</strong>
                  <p className="text-stone-300 text-xs leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ（よくある質問） */}
      <section className="bg-white rounded-3xl border border-rose-200 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-rose-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            プライベートサウナ付きグランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-rose-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
                <span className="text-rose-600 font-black">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・関連旅行ガイド */}
      <section className="bg-stone-50 border border-stone-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
          <span>🧭</span> あわせて読みたい秋の連休・温泉旅行ガイド
        </h3>
        <p className="text-xs text-stone-600">
          客室温泉や記念日旅行、予算重視の滞在計画に役立つ厳選モデルコースはこちら。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/hakone-couple-1night2days-anniversary-guide"
            className="block p-4 rounded-2xl bg-white border border-rose-200/60 hover:border-rose-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full inline-block mb-1.5">
              記念日・客室露天風呂
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-rose-600 transition line-clamp-2">
              【箱根カップル温泉旅行 1泊2日モデルコース】客室露天風呂・フレンチ懐石ディナー＆サプライズ宿
            </div>
          </Link>

          <Link
            href="/atami-izu-travel-budget-guide"
            className="block p-4 rounded-2xl bg-white border border-stone-200 hover:border-rose-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-stone-600 bg-stone-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              予算シミュレーション
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-rose-600 transition line-clamp-2">
              【熱海・伊豆旅行の費用・予算完全ガイド】新幹線・宿泊・海鮮グルメのリアル相場と節約術
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white hover:bg-rose-50 border border-stone-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆グランピング宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
