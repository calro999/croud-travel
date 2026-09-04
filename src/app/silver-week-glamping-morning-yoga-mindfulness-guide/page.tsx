import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【朝ヨガ＆森林セラピー グランピング】朝陽と鳥の声で目覚める！美と健康のリトリート女子旅 ｜ 日本全国・旅宿クラウド",
  description:
    "心と体をデトックスする秋のグランピング！ウッドデッキでの朝ヨガ体験、ハーブティーとオーガニック朝食、フィトンチッド溢れる森林浴セラピーで日頃のストレスをリセットする週末リフレッシュ旅。",
  keywords: [
    "朝ヨガ グランピング",
    "森林セラピー グランピング",
    "リトリート 女子旅 グランピング",
    "マインドフルネス 宿泊",
    "オーガニック朝食 グランピング",
    "週末 デトックス旅",
    "ウェルネス グランピング",
    "シルバーウィーク 女子旅 自然"
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
      return data["silver-week-glamping-morning-yoga-mindfulness-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-morning-yoga-mindfulness-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingMorningYogaMindfulnessPage() {
  const hotels = loadHotels();

  // ウェルネスリトリートを極める4つのエッセンス
  const retreatElements = [
    {
      badge: "朝陽モーニングフロー",
      title: "小鳥のさえずりと澄んだ空気の中で行うウッドデッキヨガ",
      desc: "朝霧が立ち込める森のデッキや芝生の上で、インストラクターの導きとともに深い呼吸。身体の強ばりを解きほぐし、自律神経を整えて爽快な一日をスタートできます。",
    },
    {
      badge: "フィトンチッド浴",
      title: "五感をひらく森林浴セラピー＆ネイチャートレイル",
      desc: "樹木が発する天然の芳香成分「フィトンチッド」に満たされた森を散策。足裏で踏みしめる土の感触や木々のざわめきに集中し、デジタルデトックスを体感。",
    },
    {
      badge: "インナービューティー",
      title: "摘みたてフレッシュハーブティー＆発酵オーガニック朝食",
      desc: "地元有機農家の採れたて高原野菜や自家製グラノーラ、発酵ドレッシングのスムージーボウルなど、腸内環境を内側から整える身体想いのモーニングミール。",
    },
    {
      badge: "静寂のマインドフルネス",
      title: "星空瞑想＆焚き火の「1/fゆらぎ」による深い休息",
      desc: "夜は満天の星空の下、焚き火の炎を見つめるメディテーション。スマートフォンを手放し、ただ炎のパチパチという音に耳を澄ませることで、脳疲労を解消します。",
    },
  ];

  // 1泊2日ウェルネス・デトックス滞在スケジュール
  const retreatSchedule = [
    {
      time: "15:00",
      theme: "デジタルデトックスの始まり",
      desc: "チェックイン時にハーブウォーターで潤い補給。客室テラスで深呼吸し、仕事の通知をオフにしてリラックスモードへ。",
    },
    {
      time: "16:30",
      theme: "森のウォーキングメディテーション",
      desc: "夕暮れ前の涼しい森をゆっくり散策。木々の香りや秋の風を感じながら、日常の思考を手放すウォーキング。",
    },
    {
      time: "18:30",
      theme: "彩り野菜と薬膳・発酵ローカルディナー",
      desc: "ビタミンとミネラルが豊富な地元野菜たっぷりのヘルシーBBQ。重すぎず胃腸に優しいこだわりの調味料でいただきます。",
    },
    {
      time: "20:30",
      theme: "焚き火瞑想＆ホットカモミールティー",
      desc: "パチパチと爆ぜる薪火を眺めながら静かな対話。ハーブティーで芯から温まり、副交感神経を優位に導きます。",
    },
    {
      time: "06:30",
      theme: "目覚めのサンライズ朝ヨガ",
      desc: "朝の光を浴びながら、呼吸とポーズを連動させるヴィンヤサフロー。体が目覚め、内側からエネルギーが満ちてきます。",
    },
    {
      time: "08:00",
      theme: "オーガニックブレックファスト",
      desc: "焼きたて天然酵母パンと地元産ヨーグルト、季節果実のコンポート。澄んだ空気の中で味わう格別の朝ごはん。",
    },
  ];

  // FAQデータ
  const faqs = [
    {
      question: "ヨガの初心者や身体が硬い人でも参加できますか？",
      answer:
        "全く問題ありません。リトリート施設の朝ヨガは、難しいポーズを目指すのではなく、深い呼吸と心地よいストレッチを重視したプログラムが中心です。経験豊富なインストラクターが個々の柔軟性に合わせて丁寧にアジャストしてくれます。",
    },
    {
      question: "ヨガマットやウェアなどの持ち物は必要ですか？",
      answer:
        "ほとんどの提携宿でヨガマットは無料レンタル可能です。朝晩の高原や森林は秋口になると冷え込むため、伸縮性のある動きやすいレギンスやパンツに加え、脱ぎ着しやすい薄手のフリースやパーカー、大判ストールがあると重宝します。",
    },
    {
      question: "雨天時の朝ヨガ体験はどうなりますか？",
      answer:
        "屋根付きの開放的なウッドデッキや、ガラス張りの温室スタジオ・ラウンジなど、雨音をBGMに楽しめる室内スペースに振り替えて開催されます。雨の日の森はマイナスイオンがより豊かになり、幻想的な雰囲気の中で瞑想できます。",
    },
    {
      question: "一人旅（ソロステイ）での参加は浮かないでしょうか？",
      answer:
        "近年は自分自身と向き合う「ソロリトリート」として一人で滞在される女性が非常に増えています。プライベートなドームテントや静かなコテージで気兼ねなく過ごせるため、一人参加でも周りを気にせず没頭できます。",
    },
  ];

  // 構造化データ (FAQPage Schema)
  const faqSchema = {
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
    <div className="min-h-screen bg-indigo-950/5 text-stone-800 py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      {/* 構造化データ挿入 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* パンくずリスト */}
      <nav aria-label="Breadcrumb" className="text-xs text-indigo-900/70 font-medium">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-indigo-700 underline">ホーム</Link>
          </li>
          <li><span className="text-indigo-300">/</span></li>
          <li>
            <Link href="/prefectures" className="hover:text-indigo-700 underline">グランピング特集</Link>
          </li>
          <li><span className="text-indigo-300">/</span></li>
          <li className="text-indigo-950 font-bold" aria-current="page">朝ヨガ＆森林セラピーガイド</li>
        </ol>
      </nav>

      {/* ヒーローヘッダー */}
      <header className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 backdrop-blur-md border border-indigo-300/30 text-indigo-100 text-xs font-semibold">
            <span>🧘‍♀️</span>
            <span>美と健康のウェルネスリトリート</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-snug font-journal-serif">
            【朝ヨガ＆森林セラピー グランピング】朝陽と鳥の声で目覚める！美と健康のリトリート女子旅
          </h1>

          <p className="text-indigo-100/90 text-sm sm:text-base leading-relaxed pt-1">
            日々の喧騒やPC・スマートフォンの画面から離れ、澄んだ秋風と緑の香りに包まれる癒やしのステイ。森のデッキで迎える朝陽ヨガ、身体を潤すオーガニックハーブティー、焚き火を見つめるマインドフルネス瞑想で、心身の巡りを整えるリセットの旅へ。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-indigo-200">
            <span className="flex items-center gap-1">
              <strong className="text-white">✓</strong> 朝露香るデッキで目覚めのヨガ体験
            </span>
            <span className="flex items-center gap-1">
              <strong className="text-white">✓</strong> 腸活を意識した無農薬野菜ブレックファスト
            </span>
            <span className="flex items-center gap-1">
              <strong className="text-white">✓</strong> 星空下の焚き火マインドフルネス
            </span>
          </div>
        </div>
      </header>

      {/* 楽天トラベル クーポンバナー */}
      <SpecialCouponBanner />

      {/* リトリートを構成する4つのエッセンス */}
      <section className="bg-white rounded-3xl border border-indigo-100 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="border-l-4 border-indigo-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">RETREAT PILLARS</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            五感を満たし自律神経を整える！4つのリトリート体験
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {retreatElements.map((item, idx) => (
            <div key={idx} className="bg-indigo-50/40 rounded-2xl p-5 border border-indigo-100/80 space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md bg-indigo-600 text-white text-[11px] font-bold">
                  {item.badge}
                </span>
                <h3 className="text-base font-bold text-indigo-950">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 1泊2日タイムスケジュール */}
      <section className="bg-white rounded-3xl border border-indigo-100 p-6 sm:p-10 shadow-sm space-y-6">
        <div className="border-l-4 border-indigo-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">SCHEDULE</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            心と体が呼吸を取り戻す！1泊2日デトックスタイムライン
          </h2>
        </div>

        <div className="space-y-4 pt-2">
          {retreatSchedule.map((flow, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row gap-2 sm:gap-6 pb-4 border-b border-indigo-50 last:border-0 last:pb-0">
              <div className="sm:w-28 shrink-0 flex items-center sm:items-start gap-2">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-900 rounded-lg font-black text-xs sm:text-sm tracking-wider">
                  {flow.time}
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm sm:text-base text-stone-900">{flow.theme}</h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{flow.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選リトリート＆ヨガ宿一覧 */}
      <section className="space-y-6" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-indigo-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">RECOMMENDED STAY</span>
          <h2 id="hotels-heading" className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            朝ヨガ・森林浴・ウェルネスに浸れる厳選グランピング施設
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            ヨガプログラムや広大な自然フォレスト、美肌の湯を備えた評判の施設を厳選。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-indigo-100 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video bg-stone-100 overflow-hidden">
                  {hotel.hotelImageUrl ? (
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-indigo-300 text-xs">
                      画像準備中
                    </div>
                  )}
                  {hotel.reviewAverage && (
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-black text-indigo-900 shadow-sm flex items-center gap-1">
                      <span>★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-[10px] text-stone-400 font-normal">({hotel.reviewCount})</span>
                      )}
                    </div>
                  )}
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="font-bold text-base sm:text-lg text-stone-900 leading-snug line-clamp-2">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                    {hotel.hotelSpecial || "森の静寂に包まれながらヨガや瞑想を満喫できるウェルネスリゾート。旬の自然食と心温まるおもてなしでお迎えします。"}
                  </p>

                  <div className="pt-2 text-[11px] text-stone-500 space-y-1">
                    {(hotel.address1 || hotel.address2) && (
                      <div className="flex items-start gap-1">
                        <span className="text-indigo-600 font-bold shrink-0">住所:</span>
                        <span>{hotel.address1}{hotel.address2}</span>
                      </div>
                    )}
                    {(hotel.nearestStation || hotel.access) && (
                      <div className="flex items-start gap-1">
                        <span className="text-indigo-600 font-bold shrink-0">交通:</span>
                        <span>{hotel.nearestStation ? `最寄駅: ${hotel.nearestStation} / ` : ""}{hotel.access}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-indigo-50 mt-auto">
                <div className="pt-3 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-stone-600 font-medium">
                    {hotel.hotelMinCharge ? (
                      <div>
                        参考最安料金: <span className="text-sm font-black text-indigo-950">¥{hotel.hotelMinCharge.toLocaleString()}〜</span>
                      </div>
                    ) : (
                      <span>プラン詳細にて確認</span>
                    )}
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-indigo-700 to-purple-800 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-xs rounded-xl shadow-sm transition transform hover:-translate-y-0.5 shrink-0"
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
      <section className="bg-white rounded-3xl border border-indigo-100 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-indigo-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            朝ヨガ＆リトリートグランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-indigo-50">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
                <span className="text-indigo-700 font-black">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・上高地ハイキング＆記念日ホテル */}
      <section className="bg-indigo-50/60 border border-indigo-100 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-indigo-950 flex items-center gap-2">
          <span>🌿</span> あわせて読みたい自然散策＆ご褒美ステイ
        </h3>
        <p className="text-xs text-stone-600">
          自然の中でのリフレッシュを深める上高地の散策パッキングや、特別な記念日ステイのアイデアもチェック。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/kamikochi-hiking-shoes-packing-checklist"
            className="block p-4 rounded-2xl bg-white border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-indigo-800 bg-indigo-100/70 px-2 py-0.5 rounded-full inline-block mb-1.5">
              自然ハイキング・装備
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-indigo-700 transition line-clamp-2">
              【上高地ハイキング】スニーカーでも大丈夫？服装・シューズ・女子旅の持ち物チェックリスト
            </div>
          </Link>

          <Link
            href="/tokyo-birthday-surprise-luxury-hotel-guide"
            className="block p-4 rounded-2xl bg-white border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-indigo-800 bg-indigo-100/70 px-2 py-0.5 rounded-full inline-block mb-1.5">
              ご褒美ホテルステイ
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-indigo-700 transition line-clamp-2">
              【東京】誕生日・記念日サプライズにおすすめのラグジュアリーホテル特集！絶景夜景と極上スパ
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white hover:bg-indigo-50 border border-stone-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆グランピング宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
