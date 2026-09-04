import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【プライベートプール＆温水ジャグジー付きグランピング】シルバーウィークに楽しむ極上リゾートヴィラ ｜ 日本全国・旅宿クラウド",
  description:
    "まだまだ暖かい9月シルバーウィークにプライベートプールを独占！客室専用温水プール、ジェットバスジャグジー、プールサイドでのBBQとシャンパンを楽しむラグジュアリーステイ特集。",
  keywords: [
    "プライベートプール グランピング",
    "温水ジャグジー グランピング",
    "客室専用プール リゾートヴィラ",
    "シルバーウィーク プール付き宿",
    "カップル グランピング ジャグジー",
    "女子旅 映え グランピング プール",
    "ナイトプール グランピング 予約"
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
      return data["silver-week-glamping-private-pool-jacuzzi-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-private-pool-jacuzzi-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingPrivatePoolJacuzziPage() {
  const hotels = loadHotels();

  // プライベートプール＆ジャグジー体験の4大ポイント
  const poolHighlights = [
    {
      num: "01",
      badge: "温水プール＆デイベッド",
      title: "初秋の澄んだ空の下、いつでも適温で遊泳できる専用プール",
      desc: "水温が自動調節されるヒートポンプ式温水プールなら、朝夕の涼風が心地よい9月下旬でも冷えを感じずにスイミング。プールサイドのデイベッドで読書やシャンパンを楽しめます。",
    },
    {
      num: "02",
      badge: "ジェットバブル機能",
      title: "満天の星と夜景を眺めながらほぐされる屋外ジェットジャグジー",
      desc: "温かいバブルジェットが身体の疲れを解きほぐす客室専用ジャグジー。日没後のライトアップとともに、誰の視線も気にせずナイトバスを満喫する贅沢が叶います。",
    },
    {
      num: "03",
      badge: "フォトジェニック体験",
      title: "夕暮れのマジックアワーと水盤のきらめきを切り取る写真美",
      desc: "夕焼け空が水面に反射するトワイライトタイムは、スマートフォンのカメラを構えるだけで絵になる瞬間。SNS映えを狙う女子旅やふたりの記念写真にも抜群のロケーションです。",
    },
    {
      num: "04",
      badge: "プールサイドグリル",
      title: "水辺の特等席テラスで味わう本格アメリカンBBQ＆ワイン",
      desc: "プールサイドに備え付けられた大型ガスグリルで、厚切りステーキや海鮮を豪快にロースト。水音のせせらぎをBGMに、プライベートなディナータイムが夜遅くまで続きます。",
    },
  ];

  // 共用プール施設 vs プライベートプール＆ジャグジーヴィラ比較
  const comparisonRows = [
    {
      point: "利用時間とプライバシー",
      privatePool: "24時間いつでも入水可能。水着選びや視線を気にする必要一切なし",
      publicPool: "営業時間制限あり。混雑時は芋洗い状態になり周囲の目が気になる",
    },
    {
      point: "水温と9月の快適性",
      privatePool: "温水ヒーター対応や隣接ジャグジー完備で、秋の夕暮れや夜でも快適",
      publicPool: "屋外冷水プールは9月になると水が冷たく、長時間の遊泳は厳しい",
    },
    {
      point: "飲食・アルコールの持ち込み",
      privatePool: "プールサイドのデッキでシャンパンやカクテル、BBQを直前まで満喫可能",
      publicPool: "プールサイドでの飲食・アルコール持ち込みは厳格に禁止されている",
    },
    {
      point: "撮影・SNS利用",
      privatePool: "周囲の写り込みがなく、マジックアワーやナイトライトアップを自由自在に撮影",
      publicPool: "他人のプライバシー保護のため、スマホやカメラの持ち込み・撮影が制限される",
    },
  ];

  // よくある質問
  const faqs = [
    {
      question: "9月下旬のシルバーウィークでもプールは寒くなく入れますか？",
      answer:
        "温水循環機能（ヒートポンプ加温）を備えたヴィラであれば、外気温が下がる初秋でも28〜32度前後の快適な水温が保たれています。また、屋外ジャグジー併設施設であれば40度前後の温かいジェットバスに浸かりながら外気浴を楽しめるため、9月のシルバーウィークシーズンはむしろ真夏の熱帯夜よりも心地よく過ごせるベストシーズンです。",
    },
    {
      question: "浮き輪やビーチタオルの貸し出し・アメニティはありますか？",
      answer:
        "多くのプライベートプール付きグランピングヴィラでは、プール専用の大判バスタオルやバスローブ、大型の映え系浮き輪、電動空気入れを常備しています。水着のみ持参すれば手ぶらでウォーターアクティビティをお楽しみいただけます。",
    },
    {
      question: "雨天や強風の場合でもプールやジャグジーは利用できますか？",
      answer:
        "小雨程度であれば温水プールや温水ジャグジーの利用は可能です。ただし台風接近時や雷注意報が発令された場合は安全のため屋外水盤への立ち入りが制限されることがあります。開閉式ルーフやガゼボ付きのテラスを備えた施設を選ぶと天候に左右されず安心です。",
    },
    {
      question: "プールサイドでのバーベキュー時に煙や水跳ねの心配はありませんか？",
      answer:
        "高級ヴィラではダイニングデッキとプール水面が適度な段差や強化ガラスフェンスでセパレートされており、煙が水面にこもらない換気構造や、水跳ねが食事エリアに届かない設計が施されています。",
    },
  ];

  // FAQPage JSON-LD構造化データ
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
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

      {/* ヒーローセクション（Cyan/Teal × Deep Navy パレット） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-950 via-slate-950 to-teal-950 text-white p-8 md:p-14 shadow-2xl border border-cyan-500/30">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-cyan-400 to-teal-300 text-cyan-950 px-3.5 py-1 rounded-full uppercase shadow-md">
              PRIVATE POOL & HEATED JACUZZI
            </span>
            <span className="text-[10px] md:text-xs font-bold text-cyan-200 bg-cyan-900/80 border border-cyan-400/40 px-3 py-1 rounded-full">
              9月秋連休・誰にも邪魔されない水辺リゾート
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【プライベートプール＆温水ジャグジー付きグランピング】シルバーウィークに楽しむ極上リゾートヴィラ
          </h1>

          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed font-medium">
            夏の暑さが和らぎ、澄み切った秋空が広がる9月シルバーウィーク。自分たちだけのテラスに広がるプライベートプールと温水ジャグジーで、人混みとは無縁の贅沢なウォーターリトリートを満喫しませんか。水面に映る夕日、プールサイドでの本格グリル、満天の星を見上げるナイトジャグジーまで、大人の休日を彩る極上ヴィラを厳選しました。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-cyan-300">
            <span className="flex items-center gap-1.5">🌊 専有プール＆温水ジェットジャグジー完備</span>
            <span className="flex items-center gap-1.5">🥂 水辺デッキで楽しむプライベートBBQ＆カクテル</span>
            <span className="flex items-center gap-1.5">📸 写真映え抜群のトワイライト＆ナイトライトアップ</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* プライベートプール＆ジャグジーの4大ハイライト */}
      <section className="bg-white border border-cyan-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-cyan-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">RESORT HIGHLIGHTS</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            水辺を独占する贅沢！専用プール＆ジャグジー滞在が選ばれる理由
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            初秋のシルバーウィークだからこそ味わえる、温水スイミングと心地よい外気浴のコンビネーション。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {poolHighlights.map((item) => (
            <div
              key={item.num}
              className="p-5 rounded-2xl bg-cyan-50/40 border border-cyan-100 hover:border-cyan-400 transition space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-cyan-700 tracking-wider font-mono">POINT {item.num}</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-900">
                  {item.badge}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* プライベートプール vs 共用プール 徹底比較 */}
      <section className="bg-white border border-cyan-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-cyan-800 pl-4 space-y-1">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">WHY PRIVATE POOL</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            客室専用プール＆ジャグジー vs 一般ホテルの共用プール 徹底比較
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            人目を気にせず水着でくつろげる、完全プライベート空間のアドバンテージ。
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-cyan-200 bg-cyan-50/70">
                <th className="py-3 px-4 font-black text-slate-900 w-1/4">比較ポイント</th>
                <th className="py-3 px-4 font-black text-cyan-950 bg-cyan-100/90 w-3/8">
                  客室専用プール＆ジャグジー 🏊
                </th>
                <th className="py-3 px-4 font-bold text-slate-500 w-3/8">
                  共用リゾートプール
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-100">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-cyan-50/30 transition">
                  <td className="py-3.5 px-4 font-bold text-slate-900 bg-slate-50/50">{row.point}</td>
                  <td className="py-3.5 px-4 font-semibold text-cyan-900 bg-cyan-50/40">
                    {row.privatePool}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{row.publicPool}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 厳選リゾートヴィラ宿一覧 */}
      <section className="space-y-6" aria-labelledby="pool-hotels-heading">
        <div className="border-l-4 border-cyan-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">CURATED POOL & JACUZZI RESORTS</span>
          <h2 id="pool-hotels-heading" className="text-xl sm:text-3xl font-black text-slate-900 font-journal-serif">
            水辺の絶景とリラクゼーション！プール＆ジャグジー付きグランピング宿
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            伊豆の海を望む天空ヴィラから瀬戸内の天然温泉リゾート、富士山麓の森林プールまで厳選。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-cyan-100 hover:border-cyan-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {hotel.hotelImageUrl && (
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  {hotel.hotelMinCharge && (
                    <div className="absolute bottom-3 right-3 bg-cyan-950/85 backdrop-blur-sm text-cyan-200 px-3 py-1 rounded-full text-xs font-black shadow-md border border-cyan-400/30">
                      1名参考: ¥{hotel.hotelMinCharge.toLocaleString()}〜
                    </div>
                  )}
                  {hotel.reviewAverage && (
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-900 px-2.5 py-1 rounded-full text-[11px] font-black shadow flex items-center gap-1 border border-cyan-100">
                      <span className="text-amber-500">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-slate-500 font-normal text-[10px]">
                          ({hotel.reviewCount})
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                    <span>📍</span>
                    <span>
                      {hotel.address1} {hotel.address2}
                    </span>
                  </div>

                  <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-cyan-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "開放感あふれるプライベートプールやジャグジーを備えた水辺のリゾートヴィラ。夕暮れのトワイライトから星空ナイトプールまで特別な時間をお楽しみいただけます。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-cyan-50 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-slate-500 font-medium">
                    <span>{hotel.nearestStation ? `最寄: ${hotel.nearestStation}駅` : "駐車場完備"}</span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-cyan-600 to-teal-700 hover:from-cyan-500 hover:to-teal-600 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
                  >
                    楽天トラベルで空室確認 🏊
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ（よくある質問） */}
      <section className="bg-white rounded-3xl border border-cyan-100 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-cyan-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            プール＆ジャグジー付きグランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-cyan-50">
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
      <section className="bg-cyan-950 text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-cyan-800/40">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <span>🍹</span> 極上リゾートステイにあわせて読みたい厳選ガイド
        </h3>
        <p className="text-xs text-cyan-200/80">
          客室プールや記念日旅行をお探しの方におすすめのモデルコース＆リゾート特集。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/okinawa-luxury-anniversary-resort-guide"
            className="block p-4 rounded-2xl bg-cyan-900/60 border border-cyan-700/60 hover:border-cyan-400 hover:bg-cyan-900/90 transition group"
          >
            <span className="text-[10px] font-bold text-cyan-300 bg-cyan-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              プライベートプール特化
            </span>
            <div className="font-bold text-xs sm:text-sm text-white group-hover:text-cyan-200 transition line-clamp-2">
              【沖縄ラグジュアリー記念日リゾート】全室プール付きスイートヴィラ＆至高のインフィニティ絶景
            </div>
          </Link>

          <Link
            href="/hakone-couple-1night2days-anniversary-guide"
            className="block p-4 rounded-2xl bg-cyan-900/60 border border-cyan-700/60 hover:border-cyan-400 hover:bg-cyan-900/90 transition group"
          >
            <span className="text-[10px] font-bold text-cyan-300 bg-cyan-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              記念日＆ジャグジー客室
            </span>
            <div className="font-bold text-xs sm:text-sm text-white group-hover:text-cyan-200 transition line-clamp-2">
              【箱根カップル記念日旅行 1泊2日】露天風呂付き客室と美食フレンチで祝う極上アニバーサリー
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-cyan-950 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国のプール付きヴィラ＆グランピング宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
