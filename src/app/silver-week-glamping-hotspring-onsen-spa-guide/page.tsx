import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【源泉かけ流し温泉付きグランピング】キャンプ飯×名湯の極み！名門温泉地直結の露天風呂リゾート ｜ 日本全国・旅宿クラウド",
  description:
    "簡易シャワーのグランピングとは別次元！敷地内に本格的な自家源泉を引いた温泉宿直営グランピング特集。客室専用の半露天風呂、美肌の湯、湯上りのビールと焚き火を同時に満喫する大人ステイ。",
  keywords: [
    "源泉かけ流し グランピング",
    "温泉付き グランピング おすすめ",
    "露天風呂付き客室 グランピング",
    "由布院 温泉 グランピング",
    "こしかの温泉 グランピング",
    "美肌の湯 グランピング",
    "シルバーウィーク 温泉キャンプ"
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
      return data["silver-week-glamping-hotspring-onsen-spa-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-hotspring-onsen-spa-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingHotspringOnsenSpaPage() {
  const hotels = loadHotels();

  // 温泉グランピングの醍醐味・3大特長
  const onsenFeatures = [
    {
      step: "01",
      title: "プライベート源泉かけ流し露天風呂",
      desc: "客室ウッドデッキや専用棟に備え付けられた天然温泉。24時間いつでも好きなタイミングで、加水・加温なしの本物の湯に浸かれます。",
    },
    {
      step: "02",
      title: "美肌成分たっぷりの名湯＆サウナ連携",
      desc: "炭酸水素塩泉や弱アルカリ性単純泉など、湯上がりの肌がしっとり潤う美人の湯。冷えた秋風を感じながらの外気浴は至福のひととき。",
    },
    {
      step: "03",
      title: "湯上がり生ビールと炭火BBQの黄金コンビ",
      desc: "身体を芯から温めた後は、テラスで夕暮れの風を感じながら冷えた地ビールで乾杯。グランピングならではの開放感と旅館の快適性が両立。",
    },
  ];

  // 簡易シャワー型グランピング vs 本格温泉グランピング
  const comparisonRows = [
    {
      item: "入浴設備",
      simple: "共用ユニットシャワーまたは狭いプレハブバス",
      onsen: "客室専用の自家源泉半露天風呂、または老舗旅館の総檜大浴場",
    },
    {
      item: "湯質・効能",
      simple: "通常の水道水・沸かし湯",
      onsen: "毎分数十リットル自噴する天然温泉（ナトリウム・炭酸水素塩泉など）",
    },
    {
      item: "秋夜の冷え込み対策",
      simple: "シャワー後は足元から冷えやすく湯冷めの心配",
      onsen: "芯まで温まり保温効果が持続。秋の夜長もポカポカ快適",
    },
    {
      item: "同行者の満足度",
      simple: "「水回りが落ち着かない」とシニアや女性に不評なことも",
      onsen: "「旅館以上に贅沢」と親世代・カップル・温泉通からも絶賛",
    },
  ];

  // FAQデータ
  const faqs = [
    {
      question: "温泉は各テントの専用ですか？それとも本館の大浴場ですか？",
      answer:
        "施設によってタイプが分かれます。「こしかの温泉」や「風の響き」のように全棟に客室専用の源泉かけ流し露天・半露天風呂が直結している完全プライベート型と、併設された老舗旅館の大浴場・露天風呂に入り放題のタイプがあります。水着不要でいつでも入れる客室風呂付きが特に人気です。",
    },
    {
      question: "タオルやバスローブ、スキンケアアメニティは用意されていますか？",
      answer:
        "今回厳選した温泉グランピング施設は、高級旅館と同等水準の厚手バスタオル、フェイスタオル、ブランドシャンプー、化粧水・乳液、ドライヤーなどを完備しています。手ぶらで上質なスパステイを楽しめます。",
    },
    {
      question: "小さな子どもや年配の両親と一緒でも安心して宿泊できますか？",
      answer:
        "客室に専用の温泉があるため、他のお客様に気兼ねなく家族水入らずで入浴できます。また、段差が少ないフラットなウッドデッキ設計や、冷暖房・ふかふかのベッドが完備されているため、キャンプ未経験のシニア層でも疲れを残さず快適に過ごせます。",
    },
    {
      question: "温泉とバーベキューの順番はどちらがおすすめですか？",
      answer:
        "チェックイン直後の明るい時間にまず1回目の湯浴みで旅の移動疲れを癒やし、さっぱりした状態で夕食BBQと乾杯を楽しむのがおすすめです。食後、少し時間を空けて星空を眺めながらのナイトバスを堪能すると深い快眠が得られます。",
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

      {/* ヒーローセクション（Amberパレット） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-amber-950 via-amber-900 to-stone-900 text-white p-8 md:p-14 shadow-2xl border border-amber-600/30">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase shadow-md">
              NATURAL HOT SPRING GLAMPING
            </span>
            <span className="text-[10px] md:text-xs font-bold text-amber-200 bg-amber-900/80 border border-amber-500/50 px-3 py-1 rounded-full">
              自家源泉かけ流し×絶品キャンプ飯
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【源泉かけ流し温泉付きグランピング】キャンプ飯×名湯の極み！名門温泉地直結の露天風呂リゾート
          </h1>

          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed font-medium">
            「アウトドアの開放感は好きだけど、共用シャワーだけでは物足りない」「本物の名湯にゆっくり浸かって日頃の疲れを癒やしたい」。そんな大人に選ばれているのが、由布院や霧島・こしかの温泉など名門温泉地に佇む自家源泉直結の温泉グランピング。客室専用の源泉半露天風呂、美肌の湯、湯上がりのクラフトビールと炭火肉料理を組み合わせた、最上級の秋旅をお届けします。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-amber-300">
            <span className="flex items-center gap-1.5">♨️ 自家源泉かけ流し露天風呂完備</span>
            <span className="flex items-center gap-1.5">🥩 名産牛ステーキ＆地元旬食材BBQ</span>
            <span className="flex items-center gap-1.5">✨ シニア・女性も満足の旅館直営クオリティ</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 温泉グランピングの醍醐味 */}
      <section className="bg-white border border-amber-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-amber-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Ultimate Luxury</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            ただのキャンプとは別格！温泉グランピング3つの極上体験
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            名湯の癒やしと大自然のアウトドア体験が一度に手に入る、大人の贅沢ステイ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {onsenFeatures.map((feat, i) => (
            <div key={i} className="bg-amber-50/50 rounded-2xl p-6 border border-amber-200/70 space-y-3">
              <span className="text-2xl font-black text-amber-600 font-journal-serif">{feat.step}</span>
              <h3 className="font-bold text-base text-stone-900 leading-snug">{feat.title}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 比較表：簡易シャワー型 vs 本格温泉グランピング */}
      <section className="bg-white border border-amber-200 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-amber-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Comparison</span>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            簡易シャワー型グランピング vs 本格源泉かけ流し温泉宿
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            水回りの快適性は旅全体の満足度を大きく左右します。
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-amber-200 bg-amber-100/50">
                <th className="py-3 px-4 font-black text-stone-900 w-1/4">比較ポイント</th>
                <th className="py-3 px-4 font-bold text-stone-500 w-3/8">一般的なグランピング</th>
                <th className="py-3 px-4 font-black text-amber-900 bg-amber-200/50 w-3/8">
                  源泉かけ流し温泉グランピング ♨️
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-100">
              {comparisonRows.map((row, i) => (
                <tr key={i} className="hover:bg-amber-50/40 transition">
                  <td className="py-3.5 px-4 font-bold text-stone-900">{row.item}</td>
                  <td className="py-3.5 px-4 text-stone-600 leading-relaxed">{row.simple}</td>
                  <td className="py-3.5 px-4 font-medium text-amber-950 bg-amber-50/70 leading-relaxed">
                    {row.onsen}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 厳選温泉グランピング宿一覧 */}
      <section className="space-y-8" aria-labelledby="hotels-heading">
        <div className="border-l-4 border-amber-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">Selected Onsen Resorts</span>
          <h2 id="hotels-heading" className="text-2xl sm:text-3xl font-black text-stone-900 font-journal-serif">
            源泉かけ流し風呂を完備！おすすめ名湯グランピング宿
          </h2>
          <p className="text-xs sm:text-sm text-stone-600">
            由布院や霧島の名湯を客室露天や敷地内温泉で堪能できる、屈指の高評価グランピング。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-2xl border border-amber-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {hotel.hotelImageUrl && (
                <div className="relative h-48 w-full overflow-hidden bg-amber-50">
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  {hotel.reviewAverage && (
                    <div className="absolute top-3 right-3 bg-amber-950/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow">
                      <span className="text-yellow-400">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && (
                        <span className="text-[10px] text-amber-200">({hotel.reviewCount})</span>
                      )}
                    </div>
                  )}
                </div>
              )}

              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="text-[11px] text-amber-700 font-bold">
                    ♨️ {hotel.address1} {hotel.address2}
                  </div>

                  <h3 className="font-black text-stone-900 text-base leading-snug group-hover:text-amber-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "天然温泉の豊かな恵みと本格的なグランピングBBQを同時に味わえる至高のリゾート。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-stone-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-amber-100 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-stone-600 font-medium">
                    {hotel.hotelMinCharge ? (
                      <div>
                        最安目安: <span className="text-sm font-black text-amber-800">¥{hotel.hotelMinCharge.toLocaleString()}〜</span>
                      </div>
                    ) : (
                      <span>プラン詳細にて確認</span>
                    )}
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
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
      <section className="bg-white rounded-3xl border border-amber-200 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-amber-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-stone-900 font-journal-serif">
            温泉付きグランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-amber-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-stone-900 flex items-start gap-2">
                <span className="text-amber-700 font-black">Q.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 内部リンク・名湯＆紅葉温泉ガイド */}
      <section className="bg-amber-50/50 border border-amber-200 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-stone-900 flex items-center gap-2">
          <span>♨️</span> あわせて読みたい秋の温泉名所ガイド
        </h3>
        <p className="text-xs text-stone-600">
          全国屈指の名湯巡りや紅葉ライトアップと組み合わせた秋の温泉旅行プラン。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/kusatsu-onsen-travel-budget-guide"
            className="block p-4 rounded-2xl bg-white border border-amber-200 hover:border-amber-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              草津温泉予算ガイド
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-amber-700 transition line-clamp-2">
              【草津温泉旅行の予算と費用相場】湯畑周辺の人気宿・湯もみ体験・食べ歩きまで完全解説
            </div>
          </Link>

          <Link
            href="/hakone-autumn-leaves-lightup-hotspring-guide"
            className="block p-4 rounded-2xl bg-white border border-amber-200 hover:border-amber-400 hover:shadow-md transition group"
          >
            <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full inline-block mb-1.5">
              箱根紅葉＆露天風呂
            </span>
            <div className="font-bold text-xs sm:text-sm text-stone-900 group-hover:text-amber-700 transition line-clamp-2">
              【箱根紅葉ライトアップ＆名湯宿特集】秋の夜長を彩る絶景露天風呂と紅葉庭園ガイド
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-700 bg-white hover:bg-amber-50 border border-stone-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆温泉宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
