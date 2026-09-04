import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【水回り完全個別＆シモンズ製ベッド】ホテル同等以上の快適さ！潔癖派も安心の高規格グランピング ｜ 日本全国・旅宿クラウド",
  description:
    "キャンプ嫌い・虫嫌い・共用トイレが苦手な女性も大満足！客室専用のシャワールーム・温水洗浄便座・冷暖房完備、一流ホテル採用のシモンズ製高級ベッドで快眠できる高規格グランピング厳選。",
  keywords: [
    "グランピング 専用トイレ バス付き",
    "グランピング シモンズベッド",
    "高規格グランピング 潔癖",
    "虫が苦手 グランピング 冷暖房",
    "女性 初心者 グランピング",
    "グランピング 室内水回り",
    "シルバーウィーク グランピング 快適"
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
      return data["silver-week-glamping-air-conditioning-luxury-bed-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-air-conditioning-luxury-bed-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingAirConditioningBedPage() {
  const hotels = loadHotels();

  // 快適性重視層が安心できる4大高規格クオリティ
  const comfortStandards = [
    {
      num: "01",
      badge: "客室専用・完全独立水回り",
      title: "夜中に外へ出る必要なし！客室内温水洗浄トイレ＆個室バス",
      desc: "テントやキャビンの建物内に最新の温水洗浄便座付きトイレ、独立洗面台、個室シャワールーム（またはバスタブ）を直結。暗い夜道を歩いたり共用施設で待たされるストレスはゼロです。",
    },
    {
      num: "02",
      badge: "シモンズ製高級ベッド",
      title: "一流ホテル同等の寝心地！ポケットコイルマットレスで翌朝爽快",
      desc: "アウトドア用エアーベッドや寝袋の腰痛とは無縁。シモンズやシーリーなど高級ホテル御用達のポケットコイルベッドと清潔なリネンを完備し、旅先でも極上の快眠を約束します。",
    },
    {
      num: "03",
      badge: "24時間高性能空調",
      title: "残暑も肌寒い夜もワンタッチで適温！完全密閉の防虫キャビン",
      desc: "業務用の高出力エアコンで常に湿度と室温をベストコントロール。二重サッシや防虫メッシュ構造により、虫の侵入を徹底ブロックして清潔な室内空間を維持します。",
    },
    {
      num: "04",
      badge: "ホテルクオリティのアメニティ",
      title: "ReFa/Dysonドライヤー＆オーガニックスキンケア一式常備",
      desc: "人気ブランドの高機能ヘアドライヤー、使い捨て歯ブラシ、上質タオル、シャンプー類が充実。普段の旅行と同じメイクポーチひとつで気軽に手ぶらチェックインできます。",
    },
  ];

  // 一般キャンプ・旧式グランピング vs 高規格快適グランピング比較
  const comparisonRows = [
    {
      criteria: "トイレ・水回り",
      highGrade: "客室内に専用の温水洗浄トイレ＆個室シャワー直結（完全専有）",
      standardCamp: "数百メートル離れた屋外の共用トイレ・コインシャワー棟を利用",
    },
    {
      criteria: "ベッド＆寝具",
      highGrade: "シモンズ・シーリー製マットレス＋純白のホテルリネン（掛け布団）",
      standardCamp: "マット＋寝袋、または空気抜けしやすい簡易エアーベッド",
    },
    {
      criteria: "空調・防虫対策",
      highGrade: "24時間個別冷暖房エアコン完備。密閉サッシで虫の侵入を遮断",
      standardCamp: "扇風機や小型ポータブルクーラーのみ。隙間から虫が入りやすい",
    },
    {
      criteria: "電源・身支度環境",
      highGrade: "大風量ドライヤー対応コンセント、三面鏡ドレッサー、女優ライト完備",
      standardCamp: "ポータブル電源のみ（ドライヤー不可）、鏡は小さな手鏡のみ",
    },
  ];

  // よくある質問
  const faqs = [
    {
      question: "虫が本当に苦手なのですが、部屋の中に入ってきませんか？",
      answer:
        "本特集で厳選しているキャビンや高規格ドームテントは、一般的な布製テントと異なり気密性の高い二重サッシや防虫スクリーンを装備しています。ドアの開閉時に気をつければ、室内に害虫が侵入することはほとんどありません。また室内用の電子蚊取り器や防虫スプレーも標準配備されています。",
    },
    {
      question: "ドライヤーやヘアアイロンなど消費電力の大きい家電は使えますか？",
      answer:
        "はい、常設キャビンや高規格ドームには家庭用100V電源（複数系統）が引き込まれているため、お持ち込みのヘアアイロンや充電器も問題なくご使用いただけます。施設によっては客室にReFaやDysonの高級ドライヤーが標準装備されています。",
    },
    {
      question: "雨が降った場合、食事場所や移動で濡れることはありますか？",
      answer:
        "本記事掲載の施設は、客室から屋根付きの専用ダイニングデッキへ直接出入りできる構造になっています。雨風を防ぐ防雨カーテンやオーニングが完備されているため、悪天候でも傘を差さずにバーベキューやディナーを快適に楽しめます。",
    },
    {
      question: "小さな子どもやシニア連れのファミリーでも安心して宿泊できますか？",
      answer:
        "客室内に洋式トイレとバスタブ・シャワーが備わっているため、夜間のトイレ移動で転倒する危険もなく、三世代旅行や乳幼児連れのご家族にも非常に好評です。",
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

      {/* ヒーローセクション（Emerald/Forest × Slate パレット） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 text-white p-8 md:p-14 shadow-2xl border border-emerald-500/30">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-emerald-400 to-teal-300 text-emerald-950 px-3.5 py-1 rounded-full uppercase shadow-md">
              ULTIMATE COMFORT & CLEAN
            </span>
            <span className="text-[10px] md:text-xs font-bold text-emerald-200 bg-emerald-900/80 border border-emerald-400/40 px-3 py-1 rounded-full">
              ホテルライクな高規格アウトドア
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【水回り完全個別＆シモンズ製ベッド】ホテル同等以上の快適さ！潔癖派も安心の高規格グランピング
          </h1>

          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed font-medium">
            「大自然には癒やされたいけれど、共用トイレや虫、寝心地の悪さは我慢できない……」。そんな女性やアウトドア初心者の不安を完全に解消する、ホテルグレードの高規格グランピングを厳選。客室直結の温水洗浄便座トイレ、シモンズ製極上ベッド、24時間冷暖房完備で、大自然の爽快感とシティホテルの安心感を同時に手に入れられます。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-emerald-300">
            <span className="flex items-center gap-1.5">🚿 各室専用の個室トイレ・シャワールーム直結</span>
            <span className="flex items-center gap-1.5">🛏️ シモンズ社製ポケットコイルベッドで朝まで熟睡</span>
            <span className="flex items-center gap-1.5">❄️ 24時間個別エアコン＆高気密防虫キャビン設計</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 高規格グランピングの4大安心基準 */}
      <section className="bg-white border border-emerald-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-emerald-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">COMFORT CRITERIA</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            アウトドアの不満を全解消！潔癖派が感動する4つの高規格スペック
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            キャンプに対する「汚い・不便・眠れない」の常識を覆すラグジュアリー設備。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {comfortStandards.map((item) => (
            <div
              key={item.num}
              className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100 hover:border-emerald-400 transition space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-emerald-700 tracking-wider font-mono">SPEC {item.num}</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900">
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

      {/* 一般キャンプ・旧型テント vs 高規格キャビン比較表 */}
      <section className="bg-white border border-emerald-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-emerald-800 pl-4 space-y-1">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">SPEC COMPARISON</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            高規格快適グランピング vs 一般的なキャンプ・旧型テント 設備比較
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            妥協のない快適性が約束された、ホテル同等の住環境をご覧ください。
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-emerald-200 bg-emerald-50/70">
                <th className="py-3 px-4 font-black text-slate-900 w-1/4">チェックポイント</th>
                <th className="py-3 px-4 font-black text-emerald-950 bg-emerald-100/90 w-3/8">
                  高規格グランピング ✨
                </th>
                <th className="py-3 px-4 font-bold text-slate-500 w-3/8">
                  一般的なキャンプ・旧型ドーム
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-100">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-emerald-50/30 transition">
                  <td className="py-3.5 px-4 font-bold text-slate-900 bg-slate-50/50">{row.criteria}</td>
                  <td className="py-3.5 px-4 font-semibold text-emerald-900 bg-emerald-50/40">
                    {row.highGrade}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{row.standardCamp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 厳選ホテル一覧 */}
      <section className="space-y-6" aria-labelledby="comfort-hotels-heading">
        <div className="border-l-4 border-emerald-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">SELECTED COMFORT RETREATS</span>
          <h2 id="comfort-hotels-heading" className="text-xl sm:text-3xl font-black text-slate-900 font-journal-serif">
            水回り安心＆極上快眠！高規格グランピング＆オーベルジュ厳選4選
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            房総の渓谷リゾートから那須の北欧風コテージ、宮古島の絶景ヴィラ、八ヶ岳オーベルジュまで。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-emerald-100 hover:border-emerald-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
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
                    <div className="absolute bottom-3 right-3 bg-emerald-950/85 backdrop-blur-sm text-emerald-200 px-3 py-1 rounded-full text-xs font-black shadow-md border border-emerald-400/30">
                      1名参考: ¥{hotel.hotelMinCharge.toLocaleString()}〜
                    </div>
                  )}
                  {hotel.reviewAverage && hotel.reviewAverage > 0 && (
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-900 px-2.5 py-1 rounded-full text-[11px] font-black shadow flex items-center gap-1 border border-emerald-100">
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

                  <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-emerald-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "清潔な客室設備と充実のアメニティを完備。アウトドアの醍醐味とホテルの寛ぎを両立した高規格ステイを提供します。"}
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
                    楽天トラベルで空室確認 🌿
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
            高規格グランピングのよくある質問
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
      <section className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-emerald-800/40">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <span>🎒</span> 初心者・ファミリー向け安心ステイ関連記事
        </h3>
        <p className="text-xs text-emerald-200/80">
          快適性重視の旅行計画や持ち物チェックに役立つ人気特集記事。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/glamping-first-time-regrets-packing-guide"
            className="block p-4 rounded-2xl bg-emerald-900/60 border border-emerald-700/60 hover:border-emerald-400 hover:bg-emerald-900/90 transition group"
          >
            <span className="text-[10px] font-bold text-emerald-300 bg-emerald-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              初心者必読・持ち物ガイド
            </span>
            <div className="font-bold text-xs sm:text-sm text-white group-hover:text-emerald-200 transition line-clamp-2">
              【グランピング初めての後悔ゼロ計画】女子旅＆カップルの持ち物チェックリストと失敗しない選び方
            </div>
          </Link>

          <Link
            href="/kanto-baby-friendly-onsen-ryokan-guide"
            className="block p-4 rounded-2xl bg-emerald-900/60 border border-emerald-700/60 hover:border-emerald-400 hover:bg-emerald-900/90 transition group"
          >
            <span className="text-[10px] font-bold text-emerald-300 bg-emerald-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              赤ちゃん連れ・快適温泉
            </span>
            <div className="font-bold text-xs sm:text-sm text-white group-hover:text-emerald-200 transition line-clamp-2">
              【関東 赤ちゃん連れ安心温泉旅館】客室露天風呂＆お部屋食で気兼ねなく過ごす家族旅行
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
          <span>全国の高規格グランピング＆リゾート宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
