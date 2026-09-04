import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【星空が綺麗すぎるグランピング2026】天の川が見える標高1,000mの高原！天体望遠鏡＆焚き火シネマ ｜ 日本全国・旅宿クラウド",
  description:
    "9月の澄んだ秋空に広がる満天の星！日本一の星空・長野阿智村周辺や八ヶ岳・那須高原の天体観測グランピング特集。客室専用の天体望遠鏡、星空の下の焚き火カフェ、プラネタリウムのようなドームテント。",
  keywords: [
    "星空 グランピング",
    "天体観測 グランピング",
    "シルバーウィーク 星空 旅行",
    "阿智村 星空 グランピング",
    "天の川 グランピング",
    "天体望遠鏡付き 宿泊",
    "ドームテント プラネタリウム",
    "秋 高原 グランピング 焚き火",
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
      return data["silver-week-glamping-stargazing-astronomy-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-stargazing-astronomy-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingStargazingAstronomyPage() {
  const hotels = loadHotels();

  const astronomyHighlights = [
    {
      icon: "🔭",
      badge: "天体望遠鏡レンタル",
      title: "客室テラスから直結の天体観測ギア",
      desc: "ビクセン製などの高性能天体望遠鏡や高倍率双眼鏡を無料・有料レンタル。月のクレーターや木星の縞模様、土星の輪まで肉眼で鮮明に捉えられます。",
    },
    {
      icon: "🌌",
      badge: "標高1,000mの漆黒の夜空",
      title: "街明かりが届かない高地・盆地の暗黒度",
      desc: "環境省認定の日本一の星空で名高い阿智村エリアや高原地帯は、人工光が極限まで遮断。肉眼で白く帯を引く天の川（ミルキーウェイ）をはっきり鑑賞可能です。",
    },
    {
      icon: "🔥",
      badge: "星空シネマ＆焚き火カフェ",
      title: "ホットワイン片手に野外プラネタリウム",
      desc: "夜のプライベートデッキで焚き火を囲み、温かいココアやホットワイン、焼きマシュマロを味わう贅沢。施設によっては大型スクリーンでの星空野外上映も開催。",
    },
  ];

  const stargazingTimeline = [
    {
      time: "17:30 - 18:30",
      title: "マジックアワーと黄昏の夕暮れBBQ",
      detail: "山並みの稜線に沈む夕日を眺めながら、信州牛や地元野菜の本格BBQを堪能。薄明の空に宵の明星（金星）や明るい一等星が点灯し始めます。",
    },
    {
      time: "19:30 - 20:30",
      title: "焚き火点火＆望遠鏡ピント合わせレクチャー",
      detail: "デッキのファイヤーピットに薪をくべ、施設スタッフによる星座解説や天体望遠鏡の使い方ガイド。スマホを望遠鏡に装着して月の撮影にも挑戦できます。",
    },
    {
      time: "21:00 - 22:30",
      title: "ピークタイム！漆黒の空に浮かぶ秋の四辺形＆天の川鑑賞",
      detail: "施設の消灯時間（ライトダウンタイム）に合わせて周囲の灯りが一斉にオフ。視界いっぱいに広がる秋の大三角やアンドロメダ銀河に息を呑むひととき。",
    },
    {
      time: "23:00 - 深夜",
      title: "透明ドームテントから見上げる天然プラネタリウム",
      detail: "冷え込む屋外から室内のキングサイズベッドへ。天井のクリアパノラマ窓から、横になったまま流れ星を待つ夢のような就寝タイムへ。",
    },
  ];

  const faqs = [
    {
      question: "9月の星空観測グランピングで見るべきおすすめの天体・星座は何ですか？",
      answer:
        "シルバーウィークの初秋は、頭上に残る「夏の大三角（こと座のベガ・わし座のアルタイル・はくちょう座のデネブ）」と天の川が最も見事に見え、東の空からは「ペガススの四辺形（秋の四辺形）」やアンドロメダ銀河が昇ってきます。空気が乾燥し始めるため夏のモヤが抜け、年間でも特にシャープで美しい星空を楽しめる絶好の時期です。",
    },
    {
      question: "星空観測に適した月齢（月の満ち欠け）のタイミングはいつですか？",
      answer:
        "満天の星や淡い天の川を堪能するなら、「新月」の前後1週間がベストです。月明かりが強い満月の前後は天の川が見えにくくなりますが、その代わり高性能望遠鏡で月面のクレーターや影の凹凸を大迫力で観察できるという別の楽しみ方があります。",
    },
    {
      question: "高原の夜はどれくらい冷え込みますか？必要な防寒着は？",
      answer:
        "標高800m〜1,200mの高原エリア（長野阿智村・八ヶ岳・那須など）は、9月下旬の夜間気温が10℃前後まで急低下します。真冬一歩手前の冷え込みとなるため、厚手のフリースやインナーダウン、風を通さないウィンドブレーカー、ニット帽やブランケットを必ず持参してください。",
    },
    {
      question: "万が一曇りや雨天だった場合でも楽しめますか？",
      answer:
        "星空特化型グランピング施設の多くは、室内で使える家庭用プラネタリウムの貸出や、囲炉裏ダイニングでの郷土料理、薪ストーブや室内シアタープロジェクターなど、悪天候でも快適にリトリートできる設備を整えています。温泉やサウナ付きの施設を選べば雨天でも贅沢な癒やしステイが叶います。",
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

      {/* ヒーローセクション（Indigoパレット：深藍の夜空と煌めく星屑） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white p-8 md:p-14 shadow-2xl border border-indigo-500/30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-sky-500/10 to-transparent pointer-events-none" />
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-indigo-600 text-white px-3.5 py-1 rounded-full uppercase shadow-md">
              STARGAZING & ASTRONOMY GLAMPING 2026
            </span>
            <span className="text-[10px] md:text-xs font-bold text-indigo-200 bg-indigo-950/80 border border-indigo-400/40 px-3 py-1 rounded-full">
              標高1,000mの天然プラネタリウム
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【星空が綺麗すぎるグランピング2026】天の川が見える標高1,000mの高原！天体望遠鏡＆焚き火シネマ
          </h1>

          <p className="text-xs md:text-sm text-indigo-100/90 leading-relaxed font-medium">
            夏の蒸し暑さが引き、空気が澄み渡る9月のシルバーウィークは、年間で最も星空観測に適した黄金シーズン。環境省認定の日本一の星空・長野阿智村をはじめ、人工光が遮られた高原リゾートに佇むドームテントから見上げる天の川。客室備え付けの天体望遠鏡、パチパチと爆ぜる焚き火の炎、ホットワインを片手に夜空を仰ぐ大人の天体観測グランピングへご案内します。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-indigo-200">
            <span className="flex items-center gap-1.5">✨ 肉眼で見える天の川・秋の星座</span>
            <span className="flex items-center gap-1.5">🔭 客室専用天体望遠鏡＆双眼鏡</span>
            <span className="flex items-center gap-1.5">🔥 満天の星の下で愉しむ焚き火カフェ</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 星空グランピングが秋に選ばれる3つの理由 */}
      <section className="bg-indigo-50/60 border border-indigo-200/70 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-black text-indigo-700 uppercase tracking-wider">Autumn Night Sky Wonder</span>
          <h2 className="text-xl sm:text-2xl font-black text-indigo-950 font-journal-serif">
            秋の高原グランピングが「日本一の星空」と呼ばれる理由
          </h2>
          <p className="text-xs sm:text-sm text-indigo-900/80">
            夏と冬の星座が交差するシルバーウィーク。湿度が下がり大気の透明度が跳ね上がるこの時期だけの贅沢な星空体験。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {astronomyHighlights.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-indigo-100 shadow-sm space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-[10px] font-bold bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded-full">
                  {item.badge}
                </span>
              </div>
              <h3 className="font-bold text-sm sm:text-base text-indigo-950">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選星空グランピング宿一覧 */}
      <section className="space-y-8" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-indigo-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Recommended Stargazing Stays</span>
          <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-slate-900 font-journal-serif">
            シルバーウィークに訪れたい星空特化型グランピング＆リゾート宿
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            星空の聖地・阿智村の温泉グランピングから、大自然の中で満天の星と焚き火を満喫できる厳選施設。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-indigo-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-indigo-950/10">
                {hotel.hotelImageUrl ? (
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-indigo-300 text-xs font-bold">
                    {hotel.hotelName}
                  </div>
                )}
                {hotel.hotelMinCharge && hotel.hotelMinCharge > 0 ? (
                  <span className="absolute bottom-2.5 right-2.5 text-[10px] font-black bg-slate-950/85 text-indigo-300 px-2.5 py-1 rounded-lg border border-indigo-500/30">
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

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-indigo-700">
                    <span>📍</span>
                    <span>
                      {hotel.address1} {hotel.address2 ? `· ${hotel.address2}` : ""}
                    </span>
                    {hotel.nearestStation && (
                      <span className="text-slate-400 text-[10px]">（最寄: {hotel.nearestStation}）</span>
                    )}
                  </div>

                  <h3 className="font-black text-slate-900 text-lg leading-snug group-hover:text-indigo-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "澄み切った秋空に広がる無数の星々を鑑賞。天体観測と大自然の静寂に癒やされるグランピングリゾート。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-indigo-100 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-indigo-900 font-bold bg-indigo-50 px-2 py-1 rounded-md">
                    星空観測・焚き火
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-indigo-700 to-indigo-800 hover:from-indigo-600 hover:to-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
                  >
                    楽天トラベルで空室確認 🔭
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 星空タイムテーブル・モデルコース */}
      <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-indigo-900/60 shadow-xl">
        <div className="max-w-3xl space-y-6">
          <div className="space-y-1">
            <span className="text-indigo-400 font-black text-xs uppercase tracking-widest">Stargazing Night Routine</span>
            <h2 className="text-xl sm:text-2xl font-black text-white font-journal-serif">
              秋の星空グランピング 1泊2日天体観測タイムライン
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              黄昏のマジックアワーから深夜の天の川ピークタイムまで、星空を逃さず満喫するためのベストスケジュール。
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            {stargazingTimeline.map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                <span className="font-black text-indigo-400 shrink-0 w-32 text-sm">{item.time}</span>
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
      <section className="bg-white rounded-3xl border border-indigo-100 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-indigo-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            星空天体観測グランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-indigo-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-start gap-2">
                <span className="text-indigo-600 font-black">Q.</span>
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
      <section className="bg-indigo-50/40 border border-indigo-200/60 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <span>🧭</span> あわせて読みたい秋の高原・山梨周遊モデルコース
        </h3>
        <p className="text-xs text-slate-600">
          澄んだ空気の高原ドライブやバスツアー、公共交通機関で巡る富士五湖周辺のモデルコースはこちら。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/yamanashi-grape-bus-tour-daytrip-guide"
            className="block p-4 rounded-2xl bg-white border border-indigo-200/60 hover:border-indigo-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full inline-block mb-1.5">
              秋の味覚狩り・日帰りツアー
            </span>
            <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-indigo-700 transition line-clamp-2">
              【山梨ぶどう狩りバスツアー日帰りガイド】シャインマスカット食べ放題＆絶景ワイナリー巡り
            </div>
          </Link>

          <Link
            href="/fuji-five-lakes-car-free-bus-guide"
            className="block p-4 rounded-2xl bg-white border border-slate-200 hover:border-indigo-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              車なし富士観光・周遊バス
            </span>
            <div className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-indigo-700 transition line-clamp-2">
              【富士五湖 車なし観光ガイド】高速バス＆レトロ周遊バスで巡る河口湖・山中湖絶景旅
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 bg-white hover:bg-indigo-50 border border-slate-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🌌</span>
          <span>全国47都道府県の星空スポット＆グランピング宿一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
