import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【まだ間に合う！シルバーウィーク直前予約グランピング】空室ありの穴場施設＆キャンセル拾いの極意 ｜ 日本全国・旅宿クラウド",
  description:
    "連休直前でも諦めない！シルバーウィーク直前に空きが出やすい穴場エリア、キャンセル料発生直前（7日前〜3日前）を狙うキャンセル拾いテクニック、即時予約可能な高評価グランピング施設特集。",
  keywords: [
    "シルバーウィーク グランピング 直前予約",
    "グランピング 空室 まだ間に合う",
    "連休 グランピング 穴場 予約",
    "グランピング キャンセル拾い コツ",
    "連休 直前 宿泊予約 アウトドア",
    "秋休み グランピング 直前空き状況",
    "関東近郊 グランピング 駆け込み予約"
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
      return data["silver-week-glamping-last-minute-empty-rooms-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-last-minute-empty-rooms-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingLastMinuteGuidePage() {
  const hotels = loadHotels();

  // 直前予約・キャンセル拾い 4大実践テクニック
  const tactics = [
    {
      num: "STEP 01",
      badge: "7日前・3日前の境界線",
      title: "キャンセル料発生直前（7日前・3日前24時）の空室放出タイミングを狙う",
      desc: "多くのグランピング施設は「宿泊日の7日前」または「3日前」からキャンセル料規定（20%〜50%）が始まります。仮押さえをしていた旅行者がペナルティを避けるため、規定期限の数時間前に一斉にキャンセルを放出します。このタイミングに楽天トラベルのリアルタイム空室検索を更新するのが最も確実です。",
    },
    {
      num: "STEP 02",
      badge: "穴場エリアの選定",
      title: "知名度高の過密観光地を外し、車で2時間圏の『内陸・準高原』を攻める",
      desc: "富士五湖や軽井沢、伊豆といった超王道エリアは数ヶ月前から満室が続きますが、栃木・群馬の内陸丘陵地や、大型温浴・ホテル敷地内に増設された複合型グランピングは客室数にゆとりがあり、直前でも空室が残る傾向にあります。アクセス道路の渋滞も回避しやすいのがメリットです。",
    },
    {
      num: "STEP 03",
      badge: "日程の組み換え戦略",
      title: "連休中日を避け『連休初日チェックイン』または『最終日前泊』へシフト",
      desc: "連休の真ん中（2日目・3日目）は争奪戦が激化しますが、連休初日や最終日の前日は急な空き枠が点灯することが多々あります。有給休暇を半日足す、あるいは帰宅時間を早朝に設定することで、予約難易度が大幅に下がります。",
    },
    {
      num: "STEP 04",
      badge: "即時決済とアプリ通知",
      title: "楽天トラベルアプリのお気に入り登録と直前割引クーポンの併用",
      desc: "狙っている候補施設をあらかじめお気に入り登録しておき、空室が出た瞬間に迷わず即時カード決済で確定させることが鉄則です。直前限定のタイムセールや直前クーポンが突然配布されることもあるため、素早い意思決定が勝敗を分けます。",
    },
  ];

  // 直前予約 vs 通常早期予約の比較表
  const comparisonData = [
    {
      point: "予約のタイミング",
      lastMinute: "宿泊日の7日前〜前日（キャンセル枠の放出期）",
      earlyBird: "宿泊日の2〜3ヶ月前（連休計画の初期段階）",
    },
    {
      point: "狙い目となる施設タイプ",
      lastMinute: "客室規模の大きい複合型施設、穴場内陸リゾート、温泉ホテル併設棟",
      earlyBird: "1日1組限定の超隠れ家ヴィラ、富士山パノラマ最前列ドーム",
    },
    {
      point: "宿泊料金の傾向",
      lastMinute: "直前割引やクーポン適用で割安になるケースもあるが選択肢はタイト",
      earlyBird: "早期割プランが使え、最もコスパの高い部屋タイプを自由に選べる",
    },
    {
      point: "予約確定の勝率を高めるコツ",
      lastMinute: "キャンセル料発生直前の夜21時〜24時に空室カレンダーを集中監視",
      earlyBird: "楽天スーパーSALEやお買い物マラソンの開始直後に即確保",
    },
  ];

  // よくある質問
  const faqs = [
    {
      question: "連休直前の予約でも、夕食BBQや朝食付きプランは手配できますか？",
      answer:
        "食材仕入れの都合上、多くの施設では2〜3日前までに食事付きプランの予約締め切りを設定しています。直前当日予約の場合は素泊まりプランに限定されるケースがあるため、BBQ食材の持ち込みが可能かどうか、または近隣に新鮮なご当地食材を購入できる道の駅や精肉店があるかを事前にご確認ください。",
    },
    {
      question: "キャンセル拾いをする場合、1日の中で空きが出やすい時間帯はありますか？",
      answer:
        "キャンセル料発生日の前夜（21:00〜23:59）に加えて、平日の午前9:00〜10:00および夕方17:00〜18:00が狙い目です。仕事の都合や同行者の予定変更が判明したタイミングで手動キャンセル手続きが行われるため、この時間帯に空室確認ボタンをチェックすることをおすすめします。",
    },
    {
      question: "直前予約で天候が雨や台風予報になった場合のキャンセル料はどうなりますか？",
      answer:
        "一般的な悪天候（通常の降雨や曇天）では通常通りのキャンセル料が発生します。ただし、気象庁より警報が発令されたり、公共交通機関や高速道路が通行止めになったりした場合は、施設側の判断でキャンセル料免除となることがあります。直前予約の際は施設のキャンセルポリシー詳細を必ず一読しましょう。",
    },
  ];

  // JSON-LD FAQPage 構造化データ
  const jsonLd = {
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
    <div className="min-h-screen bg-emerald-950/5 text-slate-800 space-y-12 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 text-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold">
            <span>⚡ 直前駆け込み予約・空室レスキュー特集</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-snug font-journal-serif">
            【まだ間に合う！シルバーウィーク直前予約グランピング】
            <br />
            <span className="text-emerald-300">空室ありの穴場施設＆キャンセル拾いの極意</span>
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed max-w-3xl">
            「シルバーウィーク直前なのにどこも満室で諦めかけている…」という方に朗報です。連休直前は、規定ペナルティを避ける仮押さえキャンセルの大放出期。空室が出やすい穴場エリアの選定術と、今すぐ即時予約を狙える実力派リゾートを厳選してご案内します。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-emerald-200">
            <span className="flex items-center gap-1.5">✓ キャンセル料発生前（7日前〜3日前）の空枠を捕捉</span>
            <span className="flex items-center gap-1.5">✓ 混雑を避ける内陸・複合型リゾートの穴場宿</span>
            <span className="flex items-center gap-1.5">✓ 手ぶらBBQ＆本格温泉併設の即決候補</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* キャンセル拾い＆直前予約 4大戦術 */}
      <section className="bg-white border border-emerald-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-emerald-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">TACTICS FOR EMPTY ROOMS</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            直前でも空室を掴み取る！グランピング「キャンセル拾い」4つの極意
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            満室表示に騙されない！プロが実践する直前予約のタイミングと穴場選びのセオリー。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tactics.map((tactic) => (
            <div
              key={tactic.num}
              className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100 hover:border-emerald-400 transition space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-700 tracking-wider font-mono">{tactic.num}</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900">
                  {tactic.badge}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {tactic.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {tactic.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 直前予約 vs 通常早期予約の比較表 */}
      <section className="bg-white border border-emerald-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-emerald-800 pl-4 space-y-1">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest">COMPARISON ANALYSIS</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            直前予約（キャンセル拾い） vs 通常早期予約 徹底比較
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            直前だからこそのメリットと注意点を把握して、スマートに秋の連休ステイを勝ち取りましょう。
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-emerald-200 bg-emerald-50/60">
                <th className="py-3 px-4 font-black text-slate-900 w-1/4">比較軸</th>
                <th className="py-3 px-4 font-black text-emerald-950 bg-emerald-100/80 w-3/8">
                  直前駆け込み予約・キャンセル拾い 🎯
                </th>
                <th className="py-3 px-4 font-bold text-slate-500 w-3/8">
                  一般的な早期予約（数ヶ月前）
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-100">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-emerald-50/30 transition">
                  <td className="py-3.5 px-4 font-bold text-slate-900 bg-slate-50/50">{row.point}</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-950 bg-emerald-50/40">
                    {row.lastMinute}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{row.earlyBird}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 厳選グランピング施設リスト */}
      <section className="space-y-6" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-emerald-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">RECOMMENDED RESORTS</span>
          <h2 id="hotels-heading" className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            直前空室チェック推奨！シルバーウィーク穴場の厳選アウトドア＆温泉ステイ
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            客室キャパシティや立地特性から直前でも予約が成立しやすい実力派リゾートです。空き枠を見つけたら即予約をおすすめします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-emerald-100 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col group"
            >
              {hotel.hotelImageUrl ? (
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                  {hotel.hotelMinCharge && (
                    <div className="absolute bottom-3 right-3 bg-emerald-950/80 backdrop-blur-sm text-emerald-200 text-xs font-black px-3 py-1.5 rounded-xl">
                      1名あたり ¥{hotel.hotelMinCharge.toLocaleString()}〜
                    </div>
                  )}
                  {hotel.reviewAverage && hotel.reviewAverage > 0 ? (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-emerald-900 text-xs font-black px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                      <span className="text-amber-500">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && hotel.reviewCount > 0 && (
                        <span className="text-[10px] text-slate-400 font-normal">({hotel.reviewCount}件)</span>
                      )}
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="aspect-[16/10] bg-emerald-50 flex items-center justify-center text-emerald-400 text-xs">
                  画像準備中
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

                  <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-emerald-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "直前予約でも満足度の高い本格グランピング＆温泉リゾート。快適な客室空間と美味しい食事で秋の連休を彩ります。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-emerald-50 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-slate-500 font-medium">
                    <span>{hotel.nearestStation ? `最寄: ${hotel.nearestStation}駅` : "駐車場完備"}</span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
                  >
                    直前の空室・プラン確認 ⚡
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ（よくある質問） */}
      <section className="bg-white rounded-3xl border border-emerald-100 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-emerald-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            連休直前予約・グランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-emerald-50">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-start gap-2">
                <span className="text-emerald-600 font-black">Q.</span>
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
      <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <span>🚌</span> 連休の直前お出かけに！手軽な日帰りバスツアー特集
        </h3>
        <p className="text-xs text-slate-300">
          もしグランピングの宿泊予約が間に合わなかった場合でも、直前予約可能な日帰りバスツアーならシルバーウィークのアウトドアや味覚狩りを手軽に満喫できます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/tokyo-departure-daytrip-bus-tour-guide"
            className="block p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-emerald-400 hover:bg-slate-800 transition group"
          >
            <span className="text-[10px] font-bold text-emerald-300 bg-emerald-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              東京発 日帰りツアー
            </span>
            <div className="font-bold text-xs sm:text-sm text-white group-hover:text-emerald-200 transition line-clamp-2">
              【東京発 日帰りバスツアー攻略】ぶどう狩り・絶景温泉・手ぶらアウトドアを満喫する人気コース徹底比較
            </div>
          </Link>

          <Link
            href="/osaka-departure-daytrip-bus-tour-guide"
            className="block p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-emerald-400 hover:bg-slate-800 transition group"
          >
            <span className="text-[10px] font-bold text-emerald-300 bg-emerald-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              関西・大阪発 日帰りツアー
            </span>
            <div className="font-bold text-xs sm:text-sm text-white group-hover:text-emerald-200 transition line-clamp-2">
              【大阪発 日帰りバスツアー特集】淡路島・丹波・琵琶湖の味覚と絶景を巡る週末モデルコースまとめ
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県のグランピング＆リゾート宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
