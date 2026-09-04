import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【焚き火BAR＆焼きマシュマロ体験】秋の夜長をウイスキーと楽しむ！大人の焚き火グランピング特集 ｜ 日本全国・旅宿クラウド",
  description:
    "パチパチと爆ぜる薪の音と揺れる炎に癒やされる秋の夜。フリーフローのクラフトビールやウイスキーBAR、巨大スモア体験、アコースティック音楽が流れる夜特化型グランピングの過ごし方。",
  keywords: [
    "焚き火BAR グランピング",
    "焼きマシュマロ グランピング",
    "大人のグランピング ウイスキー",
    "フリーフロー グランピング",
    "スモア体験 キャンプ",
    "カップル グランピング 夜",
    "秋の夜長 焚き火リゾート"
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
      return data["silver-week-glamping-bonfire-marshmallow-bar-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-bonfire-marshmallow-bar-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingBonfireMarshmallowBarPage() {
  const hotels = loadHotels();

  // 焚き火ナイトの4大ハイライト
  const bonfireHighlights = [
    {
      badge: "ナイトBAR",
      title: "焚き火BAR＆ウイスキー・クラフトビール飲み放題",
      desc: "薪の香りに包まれる特設BARカウンター。地元産クラフトジンやスモーキーなシングルモルトウイスキーを片手に、大人だけの静寂なバータイムを満喫。",
    },
    {
      badge: "スモア体験",
      title: "極厚焼きマシュマロ＆自家製スモアバイキング",
      desc: "じっくり狐色に炙った大粒マシュマロを、ビターチョコと香ばしいグラハムクラッカーでサンド。口いっぱいに広がる濃厚な甘みと熱々のとろける食感。",
    },
    {
      badge: "空間演出",
      title: "ランタンの灯りとアコースティックサウンド",
      desc: "温かみのあるガスランタンの光と、遠くでかすかに流れるジャズ・アコースティックBGM。喧騒から完全に切り離された非日常空間。",
    },
    {
      badge: "星空観賞",
      title: "リクライニングチェアで楽しむ秋の星座観察",
      desc: "焚き火の火を少し落とし、テラスのデッキチェアに身を委ねて見上げる満天の秋空。澄んだ空気の中に広がる天の川や秋の四辺形に息を呑みます。",
    },
  ];

  // 焚き火グランピングの夜のタイムテーブル例
  const nightTimeline = [
    {
      time: "17:30〜",
      title: "夕暮れの乾杯＆トワイライトBBQ",
      desc: "夕焼け色に染まる空を眺めながら、シェフ特製の肉料理と地元ワインでディナーを開始。",
    },
    {
      time: "19:30〜",
      title: "専用ファイヤーピットに着火＆焚き火BARオープン",
      desc: "スタッフによる薪割りレクチャーや着火サービス。フリーフロースタイルのナイトBARが点灯。",
    },
    {
      time: "20:30〜",
      title: "スモア作り体験＆ウイスキーペアリング",
      desc: "炙りマシュマロをビターチョコで挟む本格スモアと、ピートの効いたスコッチウイスキーのマリアージュ。",
    },
    {
      time: "22:00〜",
      title: "サイレントタイム＆星空リラックス",
      desc: "炎が熾火（おきび）になる幻想的な光景を見つめながら、静かに語り合う秋の夜更け。",
    },
  ];

  // FAQデータ
  const faqs = [
    {
      question: "焚き火の薪や着火剤は有料ですか？初心者でも火を起こせますか？",
      answer:
        "宿泊プランに薪1束〜2束や着火剤、耐熱グローブ、火バサミが一式含まれている施設がほとんどです。火起こしに不安がある場合も、専任のアウトドアスタッフが最初の着火や薪のくべ方をレクチャーまたは代行してくれるため、初心者の方でも安心して楽しめます。",
    },
    {
      question: "焚き火BARのドリンク代は宿泊料金に含まれますか？",
      answer:
        "「GLAMPROOK飯綱高原」のようにオールインクルーシブでアルコールやBARタイムのドリンクが完全無料の施設と、一部の限定銘柄ウイスキーのみ有料キャッシュオンスタイルの施設があります。プラン内容に「フリーフロー」や「BAR無料」の記載があるかご確認ください。",
    },
    {
      question: "風が強い日や雨の夜でも焚き火はできますか？",
      answer:
        "屋根付きガゼボや開閉式スクリーン内蔵の専用テラスにファイヤーピットが設置されている施設では、小雨程度なら問題なく焚き火が可能です。ただし強風警報時など安全上の理由により屋外での焚き火が制限される場合は、屋内の暖炉ラウンジやエタノール暖炉付きリビングへの代替案内となります。",
    },
    {
      question: "煙の匂いが洋服につかないか心配です。対策はありますか？",
      answer:
        "煙が少ない乾燥ナラ薪や二次燃焼焚き火台（ソロストーブ等）を導入している施設が増えており、従来よりも煙や灰が衣服につきにくくなっています。気になる方は、ナイロン製のアウターや専用の貸出ポンチョを活用するのがおすすめです。",
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
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-rose-950 via-stone-900 to-rose-900 text-white p-8 md:p-14 shadow-2xl border border-rose-500/30">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-rose-500 text-white px-3.5 py-1 rounded-full uppercase shadow-md">
              BONFIRE & NIGHT BAR 2026
            </span>
            <span className="text-[10px] md:text-xs font-bold text-rose-200 bg-rose-950/80 border border-rose-500/40 px-3 py-1 rounded-full">
              炎とウイスキーに酔いしれる大人の夜
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【焚き火BAR＆焼きマシュマロ体験】秋の夜長をウイスキーと楽しむ！大人の焚き火グランピング特集
          </h1>

          <p className="text-xs md:text-sm text-rose-100/90 leading-relaxed font-medium">
            パチパチと爆ぜる薪の音、暗闇にゆらめく琥珀色の炎、そしてグラスに注がれる芳醇なウイスキー。夜が長くなるシルバーウィークのグランピングは「夜時間の過ごし方」こそが最大の醍醐味です。フリーフローのナイトBARや本格的な焼きマシュマロ（スモア）体験、星空の下で静かに語り合えるファイヤーピットを完備した、大人のための夜特化型リゾートをご案内します。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-rose-300">
            <span className="flex items-center gap-1.5">🔥 全室専用ファイヤーピット完備</span>
            <span className="flex items-center gap-1.5">🥃 クラフトビール＆ウイスキーBAR併設</span>
            <span className="flex items-center gap-1.5">🍫 巨大マシュマロ＆本格スモア体験</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 焚き火グランピングの夜の魅力 */}
      <section className="bg-white border border-rose-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-rose-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">Night Experience</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            秋の夜長を彩る！大人の焚き火リゾート4つの極上体験
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            都会のバーでは決して味わえない、澄んだ夜風と揺れる炎に包まれる特別なひととき。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {bonfireHighlights.map((hl, i) => (
            <div key={i} className="bg-rose-50/40 rounded-2xl p-6 border border-rose-100 space-y-2.5">
              <span className="text-[10px] font-black text-rose-700 bg-rose-100 px-3 py-0.5 rounded-full inline-block">
                {hl.badge}
              </span>
              <h3 className="font-bold text-base text-stone-900 leading-snug">{hl.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-medium">{hl.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 理想のナイトタイムスケジュール */}
      <section className="bg-stone-950 text-white rounded-3xl p-6 sm:p-10 space-y-6 shadow-md border border-rose-900/30">
        <div className="space-y-1">
          <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">Night Schedule</span>
          <h2 className="text-xl sm:text-2xl font-black text-white font-journal-serif">
            焚き火グランピングで過ごす理想のサンセット＆ナイトフロー
          </h2>
          <p className="text-xs sm:text-sm text-rose-200/80">
            日没から深夜まで、余韻を味わい尽くすタイムデザイン。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {nightTimeline.map((item, i) => (
            <div key={i} className="bg-rose-950/40 rounded-2xl p-5 border border-rose-800/40 space-y-2">
              <span className="text-xs font-black text-rose-400 tracking-wider block font-mono">
                {item.time}
              </span>
              <h3 className="font-bold text-sm text-rose-100 leading-snug">{item.title}</h3>
              <p className="text-xs text-stone-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 厳選焚き火グランピング宿一覧 */}
      <section className="space-y-8" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-rose-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">Selected Bonfire Stays</span>
          <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-stone-900 font-journal-serif">
            焚き火BAR＆ファイヤーピット完備！おすすめグランピング宿
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            河口湖や信州の澄んだ夜空の下、薪火と美酒に浸れる大人のための厳選リゾート。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-2xl border border-rose-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {hotel.hotelImageUrl && (
                <div className="relative h-48 w-full overflow-hidden bg-rose-50">
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {hotel.reviewAverage && (
                    <div className="absolute top-3 right-3 bg-stone-950/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                      <span className="text-yellow-400">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-[10px] text-rose-200">({hotel.reviewCount})</span>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] text-rose-700 font-bold">
                    🔥 {hotel.address1} {hotel.address2}
                  </div>

                  <h3 className="font-black text-stone-900 text-base leading-snug group-hover:text-rose-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "専用ファイヤーピットや薪火演出、充実のドリンクBARで大人時間を満喫する極上グランピング。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-stone-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-rose-100 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-stone-600 font-medium">
                    {hotel.hotelMinCharge ? (
                      <div>
                        最安目安: <span className="text-sm font-black text-rose-800">¥{hotel.hotelMinCharge.toLocaleString()}〜</span>
                      </div>
                    ) : (
                      <span>プラン詳細にて確認</span>
                    )}
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-rose-700 to-rose-800 hover:from-rose-600 hover:to-rose-700 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
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
      <section className="bg-white rounded-3xl border border-rose-200 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-rose-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            焚き火グランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-rose-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
                <span className="text-rose-700 font-black">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・大人のナイトステイ＆夜スイーツガイド */}
      <section className="bg-rose-50/50 border border-rose-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
          <span>🌙</span> あわせて読みたい大人の夜デート＆ナイトガイド
        </h3>
        <p className="text-xs text-stone-600">
          記念日や特別な夜を過ごすための上質な温泉ディナーや夜パフェ特集。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/christmas-date-onsen-dinner-trip-guide"
            className="block p-4 rounded-2xl bg-white border border-rose-200 hover:border-rose-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              記念日＆温泉デート
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-rose-700 transition line-clamp-2">
              【冬の記念日＆温泉デート】露天風呂付き客室と美食ディナーで過ごす二人だけの特別旅ガイド
            </div>
          </Link>

          <Link
            href="/sapporo-shime-parfait-late-night-guide"
            className="block p-4 rounded-2xl bg-white border border-rose-200 hover:border-rose-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              大人の夜スイーツ
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-rose-700 transition line-clamp-2">
              【札幌締めパフェ完全攻略】お酒の後に味わう夜限定スイーツの名店とおすすめペアリング
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
