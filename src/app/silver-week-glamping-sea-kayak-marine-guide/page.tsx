import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【海グランピング SUP＆シーカヤック体験】秋のビーチ直結！波音を聞いて眠るウォーターフロントリゾート ｜ 日本全国・旅宿クラウド",
  description:
    "山だけでなく海も最高！秋風が心地よい9月のシーサイドグランピング特集。目の前のビーチで楽しむSUPやシーカヤック、初心者向け海釣り体験、水平線に沈む夕日と海鮮浜焼きBBQのモデルコース。",
  keywords: [
    "海 グランピング",
    "シーカヤック グランピング",
    "SUP グランピング",
    "シルバーウィーク 海 グランピング",
    "ビーチ直結 グランピング",
    "ウォーターフロント リゾート",
    "海鮮BBQ グランピング",
    "秋 海遊び マリンアクティビティ",
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
      return data["silver-week-glamping-sea-kayak-marine-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-sea-kayak-marine-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingSeaKayakMarinePage() {
  const hotels = loadHotels();

  const marineHighlights = [
    {
      icon: "🏄‍♂️",
      tag: "SUP & シーカヤック",
      title: "プライベートビーチ直結のウォータースポーツ",
      desc: "敷地を出れば即ビーチ。穏やかな入り江やサンセットタイムの水上散歩をSUP（サップ）やシーカヤックで満喫。初心者向けインストラクター常駐施設も多数。",
    },
    {
      icon: "🦐",
      tag: "海鮮浜焼きBBQ",
      title: "活ホタテ・サザエ・伊勢海老の海鮮ディナー",
      desc: "お肉だけでなく、地元漁港から直送されたアワビやサザエ、大アサリを炭火で焼き上げる豪華浜焼き。磯の香りと潮風が最高のスパイスです。",
    },
    {
      icon: "🌅",
      tag: "オーシャンフロント絶景",
      title: "水平線に沈むサンセットと波音のヒーリング",
      desc: "海を一望できるウッドデッキから眺める夕暮れのマジックアワー。夜は心地よい波の音（潮騒）をBGMに眠りにつく贅沢なチルアウト。",
    },
  ];

  const marineSchedule = [
    {
      time: "14:30 - 15:30",
      title: "チェックイン＆ビーチ直結デッキでウェルカムドリンク",
      detail: "目の前に広がる青い海と白い砂浜。冷たいトロピカルドリンクでひと息つき、波打ち際へ散策。",
    },
    {
      time: "16:00 - 17:30",
      title: "サンセットSUP・シーカヤック水上クルージング",
      detail: "黄金色に輝く海面を進む至福のクルーズ。ライフジャケット着用・ガイド付きで初心者や女性でも安心して体験可能。",
    },
    {
      time: "18:30 - 20:30",
      title: "夕暮れテラスでの海鮮浜焼きBBQ＆クラフトビール",
      detail: "新鮮な魚介と特選牛ロースを豪快にグリル。潮風に吹かれながら水平線の漁火（いさりび）を眺めて乾杯。",
    },
    {
      time: "21:00 - 22:30",
      title: "波音を聴きながらのビーチサイド焚き火バー",
      detail: "ビーチサイドのファイヤーピットで波の音に耳を傾ける時間。星空と海が溶け合う幻想的な夜のひととき。",
    },
    {
      time: "06:30 - 08:00",
      title: "爽快な朝焼けビーチヨガ＆モーニングホットサンド",
      detail: "水平線から昇る朝日を浴びながら深呼吸。焼き立ての海老カツサンドと淹れたてコーヒーで目覚める最高の一日。",
    },
  ];

  const faqs = [
    {
      question: "9月下旬（シルバーウィーク）の海は泳げますか？寒くないですか？",
      answer:
        "9月の海水温は2ヶ月遅れで推移するため、実は8月とほぼ同等の温かさ（約24〜26℃）が保たれており、SUPやカヤックなどのマリンアクティビティには絶好の季節です。ただし陸上に上がると秋風で肌寒く感じるため、長袖のラッシュガードやウインドブレーカー、着替え用の速乾タオルを準備しておくと快適です。",
    },
    {
      question: "SUPやシーカヤックの経験が全くない初心者でも参加できますか？",
      answer:
        "はい、大半の施設で専属のインストラクターがパドルの握り方や立ち上がり方を丁寧にレクチャーします。また、波が穏やかな内海や入り江を選定している施設が多いため、初心者や運動が苦手な方でも15分ほどでスムーズに水上散歩を楽しめるようになります。",
    },
    {
      question: "マリンアクティビティに必要な持ち物やレンタル品は何ですか？",
      answer:
        "水着、濡れてもよいマリンシューズ（またはかかとが固定できるスポーツサンダル）、日焼け止め、帽子、サングラス（落下防止ストラップ推奨）、スマートフォン用防水ケースが必要です。ライフジャケット、ボード、パドルは通常施設側で無料または有料レンタルが用意されています。",
    },
    {
      question: "台風や悪天候・高波の場合はどうなりますか？",
      answer:
        "風速や波の高さが安全基準を超える場合、海上アクティビティは中止となることがあります。その場合でも、屋根付きテラスでの海鮮BBQや客室温泉、海を見渡す室内ラウンジやクラフト体験など、室内で快適にリゾートを満喫できるプログラムが提供されます。",
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

      {/* ヒーローセクション（Cyanパレット：透明感あふれる碧海と秋の渚） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-950 via-slate-900 to-sky-950 text-white p-8 md:p-14 shadow-2xl border border-cyan-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/20 via-sky-500/10 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-cyan-600 text-white px-3.5 py-1 rounded-full uppercase shadow-md">
              OCEANFRONT & MARINE GLAMPING 2026
            </span>
            <span className="text-[10px] md:text-xs font-bold text-cyan-200 bg-cyan-950/80 border border-cyan-400/40 px-3 py-1 rounded-full">
              秋のビーチ直結・海アクティビティ
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【海グランピング SUP＆シーカヤック体験】秋のビーチ直結！波音を聞いて眠るウォーターフロントリゾート
          </h1>

          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            夏休みの大混雑が引いた9月のビーチは、穏やかな波と爽やかな秋風に包まれる知る人ぞ知るベストシーズン。海水温は温かく保たれ、SUPやシーカヤックで透明度の高い海へ漕ぎ出す爽快感は格別です。客室の目の前に広がる白い砂浜、夕暮れのグラデーション、新鮮な伊勢海老やアワビの海鮮浜焼きBBQ。秋の海を五感で味わう贅沢なリゾートステイをお届けします。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-cyan-200">
            <span className="flex items-center gap-1.5">🏄 初心者歓迎SUP・シーカヤック</span>
            <span className="flex items-center gap-1.5">🦐 獲れたて魚介の海鮮浜焼きBBQ</span>
            <span className="flex items-center gap-1.5">🌊 ビーチ直結・波音に癒やされる夜</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 海グランピングの3大魅力 */}
      <section className="bg-cyan-50/60 border border-cyan-200/70 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-cyan-700 uppercase tracking-wider">Autumn Marine Resort</span>
          <h2 className="text-xl sm:text-2xl font-black text-cyan-950 font-journal-serif">
            秋の海グランピングが大人に支持される3つの理由
          </h2>
          <p className="text-xs sm:text-sm text-cyan-900/80">
            日差しのジリジリ感がなくなり、潮風が心地よいシルバーウィーク。山派も思わず感動するオーシャンフロントの魅力。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marineHighlights.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-cyan-100 shadow-sm space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-[10px] font-bold bg-cyan-100 text-cyan-800 px-2.5 py-0.5 rounded-full">
                  {item.tag}
                </span>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-cyan-950">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選海グランピング宿一覧 */}
      <section className="space-y-8" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-cyan-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Seaside Glamping Stays</span>
          <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-slate-900 font-journal-serif">
            SUP・シーカヤック・海鮮BBQが楽しめる全国の海グランピング
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            瀬戸内海から九州・奄美大島・沖縄まで、ビーチ直結でマリンアクティビティが満喫できる人気施設。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-cyan-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-cyan-950/10">
                {hotel.hotelImageUrl ? (
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-cyan-300 text-xs font-bold">
                    {hotel.hotelName}
                  </div>
                )}
                {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 ? (
                  <span className="absolute bottom-2.5 right-2.5 text-[10px] font-black bg-slate-950/85 text-cyan-300 px-2.5 py-1 rounded-lg border border-cyan-500/30">
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
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-cyan-700">
                    <span>📍</span>
                    <span>
                      {hotel.address1} {hotel.address2 ? `· ${hotel.address2}` : ""}
                    </span>
                    {hotel.nearestStation && (
                      <span className="text-slate-400 text-[10px]">（最寄: {hotel.nearestStation}）</span>
                    )}
                  </div>

                  <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-cyan-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "目の前に広がる穏やかな海と白い砂浜。SUPやカヤックなど多彩なマリンアクティビティを楽しめるウォーターフロント施設。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-cyan-100 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-cyan-900 font-bold bg-cyan-50 px-2 py-1 rounded-md">
                    ビーチ直結・海遊び
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
                  >
                    楽天トラベルで空室確認 🌊
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ビーチサイド満喫 1泊2日タイムスケジュール */}
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-cyan-900/60 shadow-xl">
        <div className="max-w-3xl space-y-6">
          <div className="space-y-1">
            <span className="text-cyan-400 font-black text-xs uppercase tracking-widest">Marine Trip Schedule</span>
            <h2 className="text-xl sm:text-2xl font-black text-white font-journal-serif">
              秋の海グランピング 1泊2日アクティビティモデルコース
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              SUP・シーカヤック体験から絶品海鮮ディナー、波音を聞く夜まで無駄のない理想的なリゾートプラン。
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            {marineSchedule.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                <span className="font-black text-cyan-400 shrink-0 w-32 text-sm">{item.time}</span>
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
      <section className="bg-white rounded-3xl border border-cyan-100 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-cyan-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            海グランピング・マリンアクティビティのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-cyan-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-start gap-2">
                <span className="text-cyan-600 font-black">Q.</span>
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
      <section className="bg-cyan-50/40 border border-cyan-200/60 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <span>🧭</span> あわせて読みたい海の絶景・リゾート旅行ガイド
        </h3>
        <p className="text-xs text-slate-600">
          伊豆・下田の透明な海を車なしで楽しむ旅や、連休の予算シミュレーションに役立つ厳選記事はこちら。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/izu-shimoda-car-free-travel-guide"
            className="block p-4 rounded-2xl bg-white border border-cyan-200/60 hover:border-cyan-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full inline-block mb-1.5">
              車なし伊豆・エメラルドグリーンの海
            </span>
            <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-cyan-700 transition line-clamp-2">
              【伊豆下田 車なし女子旅・カップル旅行】特急サフィール踊り子で行く白砂ビーチ＆絶景温泉宿
            </div>
          </Link>

          <Link
            href="/atami-izu-travel-budget-guide"
            className="block p-4 rounded-2xl bg-white border border-slate-200 hover:border-cyan-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              熱海・伊豆旅行の費用試算
            </span>
            <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-cyan-700 transition line-clamp-2">
              【熱海・伊豆旅行の費用・予算完全ガイド】新幹線・宿泊・海鮮グルメのリアル相場と節約術
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-white hover:bg-cyan-50 border border-slate-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🏝️</span>
          <span>全国47都道府県の海沿いリゾート＆グランピング宿一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
