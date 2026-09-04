import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【清流・渓谷リバーサイドグランピング】川のせせらぎに癒やされる！イワナ釣り＆川遊び体験 ｜ 日本全国・旅宿クラウド",
  description:
    "マイナスイオンたっぷりの渓谷美！清流の目の前に建つドームテント、初心者でも釣れる渓流釣り場、釣った魚をその場で炭火塩焼きにするアウトドア体験。奥多摩・秩父・丹沢のおすすめ施設特集。",
  keywords: [
    "リバーサイド グランピング",
    "渓流 釣り グランピング",
    "イワナ ヤマメ 塩焼き キャンプ",
    "川遊び グランピング 関東",
    "奥多摩 秩父 丹沢 グランピング",
    "せせらぎ 癒やし キャンプ",
    "水辺 グランピング 子連れ",
    "渓谷 ドームテント"
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
      return data["silver-week-glamping-riverside-valley-fishing-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-riverside-valley-fishing-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingRiversideValleyFishingPage() {
  const hotels = loadHotels();

  // 清流＆フィッシンググランピングの4大ハイライト
  const riverHighlights = [
    {
      badge: "渓流直結",
      title: "テントから徒歩3秒！清流のせせらぎ音に包まれるリバーフロント",
      desc: "透明度抜群のエメラルドグリーンの川面が目の前に。朝霧が立ち込める渓谷の冷涼な空気とマイナスイオンを全身に浴びて深呼吸する、水辺ならではの開放感。",
    },
    {
      badge: "手ぶら釣り体験",
      title: "竿・エサ一式レンタル！初心者や子供でも釣れる管理渓流＆釣り堀",
      desc: "施設敷地内や隣接する管理釣り場で、ヤマメやニジマス、イワナのエサ釣り体験。専任スタッフが仕掛けや針の外し方を丁寧にレクチャーするため手ぶらで楽しめます。",
    },
    {
      badge: "炭火塩焼き",
      title: "自ら釣り上げた天然魚をその場で竹串炭火焼きにする食育BBQ",
      desc: "ピチピチと跳ねる釣果をスタッフが下処理。粗塩を振って専用ファイヤーピットの炭火でじっくり遠火焼き。香ばしい皮目とふっくら柔らかな白身の旨みは格別です。",
    },
    {
      badge: "川遊び＆水風呂",
      title: "浅瀬での水遊び＆テントサウナ後の天然川ダイブで究極のととのい",
      desc: "透き通る清流での足水や川遊びはもちろん、川沿いに設置されたバレルサウナで汗を流した後は、シングル水温の天然リバーへ飛び込む至極のアウトドアスパ。",
    },
  ];

  // 清流グランピングの1日アクティビティスケジュール
  const riversideTimeline = [
    {
      time: "14:30〜",
      title: "チェックイン＆清流散策",
      desc: "川のせせらぎを聞きながらドームテントへ。水辺の遊歩道を歩き、冷たい川水に手をつけてリフレッシュ。",
    },
    {
      time: "15:30〜",
      title: "渓流釣り＆魚つかみ取り体験",
      desc: "敷地内の清流ゾーンでイワナ・ニジマス釣り。釣れたての魚を観察し、命をいただくアウトドア食育を体験。",
    },
    {
      time: "18:00〜",
      title: "釣果の竹串塩焼き＆川床BBQ",
      desc: "炭火でじっくり焼き上げた魚の塩焼きと、特選牛ステーキを水辺のオープンデッキで堪能。川風が心地よい夕暮れ。",
    },
    {
      time: "20:30〜",
      title: "せせらぎ焚き火＆ナイトリバービュー",
      desc: "ライトアップされた川面を眺めながら専用ファイヤーピットで薪火タイム。水音をBGMに静かな夜のひととき。",
    },
  ];

  // FAQデータ
  const faqs = [
    {
      question: "釣竿や仕掛け、エサは自分で持参する必要がありますか？",
      answer:
        "ほとんどの提携・併設釣り場では、竿・仕掛け・生エサ（ブドウ虫やイクラ）がセットになった手ぶらレンタルプランが用意されています。バケツや魚を入れるビクも借りられるため、道具を持っていなくても普段着のアウトドアスタイルで気軽に参加できます。",
    },
    {
      question: "釣った魚はその日のBBQディナーで食べられますか？",
      answer:
        "はい、多くの施設でスタッフが内臓の下処理や串打ち（1匹あたり数百円程度または無料）を行ってくれます。客室専用BBQグリルやファイヤーピットの網の上でじっくり炭火焼きにして、ディナーの焼き魚として味わっていただけます。",
    },
    {
      question: "小さな子どもでも安全に川遊びや釣りができますか？",
      answer:
        "整備された人工浅瀬や堰堤プール、専用の釣り堀池を併設している施設が多く、水深数十センチの安全なエリアで安全に楽しめます。ただし自然の河川敷は急な深みや滑りやすい苔があるため、必ずライフジャケット（無料貸出ありの宿多数）を着用し、大人の方が付き添ってください。",
    },
    {
      question: "雨が降った場合、川の増水や安全性はどうなっていますか？",
      answer:
        "宿泊用のドームテントやコテージは、過去数十年の洪水記録に基づいた高台（河川敷より安全な堤防・高台エリア）に設計・建築されています。また大雨による増水時は安全のため川沿いへの立ち入りが制限され、屋根付きテラスでのBBQや屋内アクティビティへの切り替え運用が行われます。",
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

      {/* ヒーローセクション（Tealパレット） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-950 via-stone-900 to-teal-900 text-white p-8 md:p-14 shadow-2xl border border-teal-500/30">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-teal-500 text-stone-950 px-3.5 py-1 rounded-full uppercase shadow-md font-mono">
              RIVERSIDE & FISHING GLAMPING 2026
            </span>
            <span className="text-[10px] md:text-xs font-bold text-teal-200 bg-teal-950/80 border border-teal-500/40 px-3 py-1 rounded-full">
              水音と森のマイナスイオンに抱かれる秋旅
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【清流・渓谷リバーサイドグランピング】川のせせらぎに癒やされる！イワナ釣り＆川遊び体験
          </h1>

          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed font-medium">
            耳をすませば絶え間なく響く澄んだせせらぎ、木漏れ日を反射してきらめくエメラルドグリーンの渓谷。水辺のグランピングは、日々の喧騒を洗い流してくれる天然のヒーリング空間です。竿を垂らしてイワナやヤマメと戯れ、釣れたてを炭火で香ばしく塩焼きにする贅沢。大人も童心にかえる清流アクティビティ付きの厳選宿をご紹介します。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-teal-300">
            <span className="flex items-center gap-1.5">🐟 敷地内・隣接渓流で手ぶら釣り体験</span>
            <span className="flex items-center gap-1.5">🌊 川沿いリバーフロントデッキ完備</span>
            <span className="flex items-center gap-1.5">🔥 釣果の炭火塩焼き＆清流BBQディナー</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 清流グランピングの4大ハイライト */}
      <section className="bg-white border border-teal-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-teal-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Riverside Activities</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            水と戯れ、大自然を味わう！清流グランピング4つの極上体験
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            見る、聴く、触れる、味わう。五感を研ぎ澄ますリバーサイドならではのアウトドア体験。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {riverHighlights.map((hl, i) => (
            <div key={i} className="bg-teal-50/40 rounded-2xl p-6 border border-teal-100 space-y-2.5">
              <span className="text-[10px] font-black text-teal-800 bg-teal-200/80 px-3 py-0.5 rounded-full inline-block">
                {hl.badge}
              </span>
              <h3 className="font-bold text-base text-stone-900 leading-snug">{hl.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-medium">{hl.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 清流グランピングのタイムテーブル */}
      <section className="bg-stone-950 text-white rounded-3xl p-6 sm:p-10 space-y-6 shadow-md border border-teal-900/40">
        <div className="space-y-1">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest font-mono">Valley Flow</span>
          <h2 className="text-xl sm:text-2xl font-black text-white font-journal-serif">
            水音と過ごす1日！清流グランピングの理想アクティビティフロー
          </h2>
          <p className="text-xs sm:text-sm text-teal-200/80">
            昼は渓流釣りと川遊び、夕暮れは塩焼きBBQ、夜はせせらぎを聞きながらの焚き火。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {riversideTimeline.map((item, i) => (
            <div key={i} className="bg-teal-950/40 rounded-2xl p-5 border border-teal-800/40 space-y-2">
              <span className="text-xs font-black text-teal-400 tracking-wider block font-mono">
                {item.time}
              </span>
              <h3 className="font-bold text-sm text-teal-100 leading-snug">{item.title}</h3>
              <p className="text-xs text-stone-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選リバーサイド宿一覧 */}
      <section className="space-y-8" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-teal-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">Selected Riverside Stays</span>
          <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-stone-900 font-journal-serif">
            清流・渓谷美に包まれる！おすすめリバーサイドグランピング施設
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            丹沢・信州・奥山梨・滋賀など、透き通る川沿いで非日常を味わえる厳選6施設。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-2xl border border-teal-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {hotel.hotelImageUrl && (
                <div className="relative h-48 w-full overflow-hidden bg-teal-50">
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {hotel.reviewAverage && (
                    <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                      <span className="text-teal-400">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-[10px] text-teal-200">({hotel.reviewCount})</span>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] text-teal-800 font-bold">
                    🌊 {hotel.address1} {hotel.address2}
                  </div>

                  <h3 className="font-black text-stone-900 text-base leading-snug group-hover:text-teal-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "清流のせせらぎと豊かな森に囲まれ、川遊びやBBQ、自然散策を満喫できるリバーサイドリゾート。"}
                  </p>

                  {hotel.nearestStation && (
                    <p className="text-[11px] text-stone-500 line-clamp-1">
                      🚉 最寄駅: {hotel.nearestStation}
                    </p>
                  )}
                  {hotel.access && (
                    <p className="text-[11px] text-stone-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-teal-100 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-stone-600 font-medium">
                    {hotel.hotelMinCharge ? (
                      <div>
                        最安目安: <span className="text-sm font-black text-teal-900">¥{hotel.hotelMinCharge.toLocaleString()}〜</span>
                      </div>
                    ) : (
                      <span>プラン詳細にて確認</span>
                    )}
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-500 hover:to-teal-600 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
                  >
                    楽天トラベルで空室確認 ✈️
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ（よくある質問） */}
      <section className="bg-white rounded-3xl border border-teal-200 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-teal-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            清流・釣りグランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-teal-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
                <span className="text-teal-700 font-black">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・上高地ハイキング＆アクセスガイド */}
      <section className="bg-teal-50/60 border border-teal-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
          <span>🏔️</span> あわせて読みたい信州・清流ハイキング＆交通ガイド
        </h3>
        <p className="text-xs text-stone-600">
          清流や渓谷でのアウトドアをさらに楽しむための装備選びとアクセス比較情報。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/kamikochi-hiking-shoes-packing-checklist"
            className="block p-4 rounded-2xl bg-white border border-teal-200 hover:border-teal-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              装備＆シューズ選び
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-teal-700 transition line-clamp-2">
              【上高地ハイキング服装＆持ち物完全チェックリスト】失敗しないシューズ選びと寒暖差対策
            </div>
          </Link>

          <Link
            href="/tokyo-matsumoto-kamikochi-bus-vs-train-guide"
            className="block p-4 rounded-2xl bg-white border border-teal-200 hover:border-teal-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              交通徹底比較
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-teal-700 transition line-clamp-2">
              【東京〜松本・上高地】直行バス vs JR特急あずさ徹底比較！料金・所要時間・予約のポイント
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white hover:bg-teal-50 border border-stone-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆グランピング宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
