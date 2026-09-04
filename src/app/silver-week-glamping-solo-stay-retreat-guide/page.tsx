import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【おひとり様歓迎 ソログランピング】1人泊プラン確約！静寂の森で読書・サウナ・焚き火を楽しむ秋リトリート ｜ 日本全国・旅宿クラウド",
  description:
    "周りの目を気にせず自分だけの時間を満喫するソログランピング特集！1名利用OK・シングル料金設定のある安心施設、静寂に包まれる森の読書スペース、ソロ専用焚き火台、温泉に浸かるリトリート旅完全ガイド。",
  keywords: [
    "ソログランピング",
    "おひとり様 グランピング",
    "1人泊 グランピング",
    "ソロキャンプ グランピング リトリート",
    "シルバーウィーク 一人旅 宿泊",
    "ソロ 焚き火 サウナ 温泉",
    "秋 静寂 森 グランピング",
    "社会人 リフレッシュ 1人旅",
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
      return data["silver-week-glamping-solo-stay-retreat-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-solo-stay-retreat-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingSoloStayRetreatPage() {
  const hotels = loadHotels();

  const soloRetreatHighlights = [
    {
      icon: "🕯️",
      pillar: "マイペースな焚き火時間",
      title: "誰にも邪魔されない専用ファイヤーピット",
      desc: "誰かと会話を合わせる必要のない完全な静寂。薪のパチパチとはぜる音と炎の揺らぎ（1/fゆらぎ）に意識を委ね、日頃のデジタル疲労や脳の緊張を解放。",
    },
    {
      icon: "📖",
      pillar: "森のブックラウンジ＆珈琲",
      title: "読みたかった本と向き合う贅沢な午後",
      desc: "木漏れ日が差し込むハンモックやウッドデッキで、淹れたてのドリップコーヒーを味わいながら読書。Wi-Fi完備でワーケーションや思考整理のノートタイムにも最適。",
    },
    {
      icon: "♨️",
      pillar: "1名確約・安心セキュリティ",
      title: "ホテルクオリティの快適設備と清潔な水回り",
      desc: "ソロキャンプでネックになる防犯面やテント設営、虫対策も、鍵付きキャビンや独立ドームなら完全クリア。冷暖房・個別のシャワーや温泉で快適そのもの。",
    },
  ];

  const soloTimeline = [
    {
      time: "15:00 - 16:00",
      title: "チェックイン＆森の静寂に身を委ねる",
      detail: "スマートチェックインでスタッフ以外の接触を最小限に。冷たいハーブティーを飲みながら、客室のBluetoothスピーカーでお気に入りの音楽を再生。",
    },
    {
      time: "16:30 - 18:00",
      title: "森の散策・読書・夕暮れのチルアウト",
      detail: "赤く染まる夕空とヒグラシ・秋の虫の音を聴きながらハンモックで読書。日常のタスクから完全に切り離された自由な時間を実感。",
    },
    {
      time: "18:30 - 20:00",
      title: "気兼ねのないソロBBQディナー＆地酒",
      detail: "マイペースに肉を焼き、自分の好きな焼き加減で楽しむ贅沢。地元のクラフトビールや甲州ワインをじっくり味わう大人の晩酌タイム。",
    },
    {
      time: "20:30 - 22:30",
      title: "一人焚き火瞑想＆満天の星空鑑賞",
      detail: "プライベート焚き火台に薪をくべ、ただ炎を見つめるマインドフルネス。温かいスープやウイスキーを口に含みながら夜の深まりを堪能。",
    },
    {
      time: "07:30 - 09:30",
      title: "清々しい朝の深呼吸＆ハンドドリップ珈琲",
      detail: "森の朝露と澄んだ空気の中でゆっくり目覚め。豆から手挽きするコーヒーの芳醇なアロマとホットサンドで贅沢な朝をスタート。",
    },
  ];

  const faqs = [
    {
      question: "グランピング施設は1人（おひとり様）でも予約できますか？",
      answer:
        "一般的なグランピングは2名〜4名設定が多いですが、今回紹介している施設は「1名利用プラン」を明確に設定しており、1人旅でも気兼ねなく歓迎されます。予約サイトで人数を『1名』に設定して空室検索を行えばスムーズに確定できます。",
    },
    {
      question: "女性の1人利用でも防犯面や安全性は大丈夫ですか？",
      answer:
        "鍵の付かない一般的なテントと異なり、本記事で厳選した施設はしっかり施錠できるドームテントや独立ヴィラ、キャビンタイプです。夜間も管理スタッフが常駐またはオートロック等のセキュリティが整っており、女性ソロでも安心して宿泊できます。",
    },
    {
      question: "ソロキャンプ未経験でも道具なしで楽しめますか？",
      answer:
        "はい、設営・撤収・火起こしなどの面倒な作業は一切不要です。焚き火台や着火剤、薪、BBQコンロ、食器類、寝具、アメニティまで全てホテル並みに完備されているため、着替えと愛読書だけで手ぶらで訪れることができます。",
    },
    {
      question: "食事の準備や後片付けはどうすればいいですか？",
      answer:
        "食材付きプランを選べば、下ごしらえ済みの食材が保冷ボックス等で客室に届くため、あとはグリルで焼くだけで本格ディナーが完成します。使用済みのグリルや食器も専用のコンテナにまとめるだけで施設スタッフが回収・洗浄してくれる施設がほとんどです。",
    },
  ];

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
      {/* 構造化データ FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ヒーローセクション（Tealパレット：深閑たる森と心洗われるリトリート） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-950 via-slate-900 to-emerald-950 text-white p-8 md:p-14 shadow-2xl border border-teal-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-teal-500/20 via-emerald-500/10 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-teal-600 text-white px-3.5 py-1 rounded-full uppercase shadow-md">
              SOLO GLAMPING & RETREAT 2026
            </span>
            <span className="text-[10px] md:text-xs font-bold text-teal-200 bg-teal-950/80 border border-teal-400/40 px-3 py-1 rounded-full">
              おひとり様歓迎・1名確約リトリート
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【おひとり様歓迎 ソログランピング】1人泊プラン確約！静寂の森で読書・サウナ・焚き火を楽しむ秋リトリート
          </h1>

          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed font-medium">
            誰にも気兼ねせず、自分の心の声だけに耳を澄ますシルバーウィーク。他人のスケジュールに合わせることなく、読書に没頭し、好きなタイミングでサウナや温泉に入り、静かに燃える焚き火を眺める。ソロキャンプの設営ストレスをゼロにし、ホテルの快適性と大自然の癒やしを両立させた「大人のひとり旅特化型グランピング」を厳選しました。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-teal-200">
            <span className="flex items-center gap-1.5">🕯️ ひとり専用焚き火＆マインドフルネス</span>
            <span className="flex items-center gap-1.5">🔒 女性も安心の鍵付きキャビン＆セキュリティ</span>
            <span className="flex items-center gap-1.5">☕ 静寂の森で味わうハンドドリップ珈琲と読書</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* ソログランピングの3大価値 */}
      <section className="bg-teal-50/60 border border-teal-200/70 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-teal-700 uppercase tracking-wider">Quiet Autumn Retreat</span>
          <h2 className="text-xl sm:text-2xl font-black text-teal-950 font-journal-serif">
            なぜ今、大人が「ひとりで泊まるグランピング」を選ぶのか
          </h2>
          <p className="text-xs sm:text-sm text-teal-900/80">
            日常の人間関係やスマートフォンから少しだけ距離を置き、五感をリセットする秋のリトリート体験。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {soloRetreatHighlights.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-teal-100 shadow-sm space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-[10px] font-bold bg-teal-100 text-teal-800 px-2.5 py-0.5 rounded-full">
                  {item.pillar}
                </span>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-teal-950">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選ソログランピング宿一覧 */}
      <section className="space-y-8" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-teal-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Solo Traveler Friendly</span>
          <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-slate-900 font-journal-serif">
            シルバーウィークに1人泊できる厳選ソログランピング＆リトリート宿
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            山頂絶景のキャビンからノスタルジックな廃校リノベーション宿、富士山を望むプライベートヴィラまで。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-teal-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-teal-950/10">
                {hotel.hotelImageUrl ? (
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-teal-300 text-xs font-bold">
                    {hotel.hotelName}
                  </div>
                )}
                {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 ? (
                  <span className="absolute bottom-2.5 right-2.5 text-[10px] font-black bg-slate-950/85 text-teal-300 px-2.5 py-1 rounded-lg border border-teal-500/30">
                    1名 ¥{hotel.hotelMinCharge.toLocaleString()}〜
                  </span>
                ) : null}
                {hotel.reviewAverage && hotel.reviewAverage > 0 ? (
                  <div className="absolute top-2.5 left-2.5 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-0.5 rounded-lg flex items-center gap-1 border border-white/10">
                    <span className="text-amber-400">★</span>
                    <span>{hotel.reviewAverage.toFixed(2)}</span>
                    {hotel.reviewCount ? (
                      <span className="text-slate-300 text-[9px]">({hotel.reviewCount}件)</span>
                    ) : null}
                  </div>
                ) : null}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-teal-700">
                    <span>📍</span>
                    <span>
                      {hotel.address1} {hotel.address2 ? `· ${hotel.address2}` : ""}
                    </span>
                    {hotel.nearestStation && (
                      <span className="text-slate-400 text-[10px]">（最寄: {hotel.nearestStation}）</span>
                    )}
                  </div>

                  <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-teal-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "静寂の森に囲まれたプライベート空間。マイペースに焚き火や読書を楽しみながら心身をリセットするソロステイ。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-teal-100 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-teal-900 font-bold bg-teal-50 px-2 py-1 rounded-md">
                    ソロ歓迎・リトリート
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-600 hover:to-emerald-600 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
                  >
                    楽天トラベルで空室確認 🕯️
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ソログランピング 1泊2日タイムスケジュール */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-teal-900/60 shadow-xl">
        <div className="max-w-3xl space-y-6">
          <div className="space-y-1">
            <span className="text-teal-400 font-black text-xs uppercase tracking-widest">Solo Retreat Flow</span>
            <h2 className="text-xl sm:text-2xl font-black text-white font-journal-serif">
              大人の秋ソログランピング 1泊2日タイムライン
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              急がず、何もしない贅沢を味わい尽くす、自分を整えるためのモデルスケジュール。
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            {soloTimeline.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                <span className="font-black text-teal-400 shrink-0 w-32 text-sm">{item.time}</span>
                <div className="space-y-1">
                  <strong className="text-white block text-sm">{item.title}</strong>
                  <p className="text-slate-300 text-xs leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ（よくある質問） */}
      <section className="bg-white rounded-3xl border border-teal-100 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-teal-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            おひとり様ソログランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-teal-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-start gap-2">
                <span className="text-teal-600 font-black">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・関連旅行ガイド */}
      <section className="bg-teal-50/40 border border-teal-200/60 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <span>🧭</span> あわせて読みたい車なし一人旅＆長距離アクセスガイド
        </h3>
        <p className="text-xs text-slate-600">
          大自然へのアクセスや車なし旅、夜行バスでの快適な移動術など、ひとり旅を快適にする知恵はこちら。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/kamikochi-matsumoto-car-free-guide"
            className="block p-4 rounded-2xl bg-white border border-teal-200/60 hover:border-teal-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full inline-block mb-1.5">
              車なし北アルプス・清流リトリート
            </span>
            <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-teal-700 transition line-clamp-2">
              【上高地・松本 車なし観光モデルコース】特急あずさ＆上高地線で巡る神降ちる山岳リゾート
            </div>
          </Link>

          <Link
            href="/night-highway-bus-packing-comfort-sleep-guide"
            className="block p-4 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              夜行バス熟睡パッキング術
            </span>
            <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-teal-700 transition line-clamp-2">
              【夜行高速バス 快適パッキング＆熟睡ガイド】首が痛くならない枕・快眠グッズ＆座席選び
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-white hover:bg-teal-50 border border-slate-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🌲</span>
          <span>全国47都道府県の静寂リトリート＆グランピング宿一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
