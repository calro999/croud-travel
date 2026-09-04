import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【瀬戸内・中四国シルバーウィーク グランピング】しまなみ海道の多島美＆オリーブ牛BBQ ｜ 日本全国・旅宿クラウド",
  description:
    "穏やかな海と島々を望むシーサイドグランピング！しまなみ海道サイクリングの拠点、小豆島や香川のオリーブ牛＆瀬戸内真鯛グリル、夕暮れのマジックアワーをテラスで過ごす絶景ステイ。",
  keywords: [
    "瀬戸内 グランピング シルバーウィーク",
    "しまなみ海道 グランピング 生口島",
    "香川 観音寺 グランピング 温泉",
    "尾道 百島 離島 グランピング",
    "高知 宿毛 リゾート 海一望",
    "瀬戸内 シーサイド グランピング BBQ",
    "中四国 連休 旅行 穴場"
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
      return data["silver-week-glamping-chugoku-shikoku-setouchi-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-chugoku-shikoku-setouchi-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingSetouchiPage() {
  const hotels = loadHotels();

  // 瀬戸内・中四国グランピング 4大魅力
  const setouchiHighlights = [
    {
      num: "01",
      badge: "多島美と穏やかな海辺",
      title: "波の音が静かに響くオーシャンビューと瀬戸内の夕暮れマジックアワー",
      desc: "瀬戸内海特有の内海が生み出す、波静かな凪の海と点在する島々のコントラスト。日没時には空と海が茜色から深い藍色へと染まる幻想的なマジックアワーが広がり、客室ウッドデッキから誰にも邪魔されずに絶景を独り占めできます。",
    },
    {
      num: "02",
      badge: "しまなみ海道サイクリング拠点",
      title: "生口島レモン畑や離島フェリー旅と連動したアクティブな島時間",
      desc: "世界中のサイクリストが憧れるしまなみ海道。生口島のレモン谷散策や、尾道からフェリーで渡る百島の隠れ家ヴィラなど、アイランドホッピングの拠点としてグランピングを満喫。心地よい潮風を感じながらのアウトドアは格別です。",
    },
    {
      num: "03",
      badge: "瀬戸内の極上ガストロノミー",
      title: "讃岐オリーブ牛・瀬戸内真鯛のハーブグリル・獲れたて海鮮BBQ",
      desc: "香川特産のオリーブ牛ステーキ、脂の乗った瀬戸内真鯛のアクアパッツァ、高知の獲れたてカツオなど、山海の幸が凝縮された贅沢ディナー。爽やかな瀬戸内レモンを搾って味わう炭火料理は、旅のハイライトにふさわしい美味しさです。",
    },
    {
      num: "04",
      badge: "天然温泉＆SUP体験",
      title: "海を臨む天然温泉露天風呂と、穏やかな水面で楽しむサンセットSUP",
      desc: "観音寺のグランプレミア瀬戸内や高知宿毛の棚田状露天風呂など、海と一体化するインフィニティ温泉を完備したリゾートが豊富。波が極めて穏やかな瀬戸内海なら、初心者でも安心してSUPクルージングに挑戦できます。",
    },
  ];

  // 瀬戸内シーサイド vs 太平洋外洋・内陸リゾート比較表
  const comparisonRows = [
    {
      factor: "海と波の環境",
      setouchi: "島々に囲まれた内海のため波が極めて穏やか。潮騒が心地よく静寂",
      oceanCoast: "外洋に面しており白波や高波が立ちやすく、風が強い日は音も大きい",
    },
    {
      factor: "サンセット・景観",
      setouchi: "島々のシルエットと海が茜色に染まる多島美マジックアワー",
      oceanCoast: "水平線一本の直線的な日の入りが中心",
    },
    {
      factor: "周辺アクティビティ",
      setouchi: "しまなみ海道サイクリング、レモン狩り、離島フェリー巡り、SUP",
      oceanCoast: "サーフィンや本格外洋フィッシングなど上級者向け中心",
    },
    {
      factor: "特産グルメ",
      setouchi: "香川オリーブ牛、瀬戸内真鯛、生口島レモン、讃岐うどん巡り",
      oceanCoast: "マグロや伊勢海老など一般的な海鮮料理が主体",
    },
  ];

  // よくある質問
  const faqs = [
    {
      question: "しまなみ海道サイクリングを兼ねて宿泊する場合のアクセスはどうすれば良いですか？",
      answer:
        "尾道駅や今治駅周辺でレンタサイクル（クロスバイクやE-BIKE）を借りて島へ渡るか、車に自転車を積載して向かうのがスムーズです。「LEMONE FARM GLAMPING しまなみ」がある生口島は西瀬戸自動車道の生口島北IC・南ICから直接アクセス可能なため、車と自転車を組み合わせた旅に最適です。",
    },
    {
      question: "小さな子供連れやペット同伴でも安心して泊まれる施設はありますか？",
      answer:
        "はい、香川の「グランプレミア瀬戸内」は広大なプライベートドッグラン付き客室を備えており、天然温泉も併設されているため3世代ファミリーや愛犬連れに大人気です。また広島の「ヒトツル瀬戸内グランピング」や「LEMON FARM」もペット可の棟が用意されています。",
    },
    {
      question: "秋の瀬戸内海の気候や服装の注意点はありますか？",
      answer:
        "瀬戸内地域は全国的にも雨が少なく温暖な気候ですが、9月下旬の海辺は夕方以降に心地よい海風が吹き込みます。昼間は半袖で十分ですが、サンセット鑑賞やテラスBBQの際には長袖のシャツや薄手のカーディガンがあると快適です。",
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
    <div className="min-h-screen bg-amber-950/5 text-slate-800 space-y-12 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-950 via-stone-900 to-slate-950 text-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
            <span>🌅 穏やかな内海と多島美リゾート</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-snug font-journal-serif">
            【瀬戸内・中四国シルバーウィーク グランピング】
            <br />
            <span className="text-amber-300">しまなみ海道の多島美＆オリーブ牛BBQ</span>
          </h1>

          <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed max-w-3xl">
            どこまでも穏やかな凪の海と、夕暮れに染まる無数の島影。しまなみ海道の潮風を感じるレモンの島・生口島、尾道沖の離島貸別荘、香川の天然温泉付きオーシャンビューヴィラ。特産のオリーブ牛と瀬戸内真鯛をテラスでグリルする、至高のアイランドリゾートへご案内します。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-amber-200">
            <span className="flex items-center gap-1.5">✓ しまなみ海道＆瀬戸内の夕暮れ多島美パノラマ</span>
            <span className="flex items-center gap-1.5">✓ 讃岐オリーブ牛＆瀬戸内真鯛のハーブグリル</span>
            <span className="flex items-center gap-1.5">✓ 海を臨む天然温泉露天風呂＆愛犬同伴OK客室</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 瀬戸内グランピング 4大ハイライト */}
      <section className="bg-white border border-amber-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-amber-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">SETOUCHI HIGHLIGHTS</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            心ほどける島時間。瀬戸内グランピングを特別な旅にする4つの魅力
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            静寂に包まれた波の音、絶品の島食材、海と一体になる天然温泉が織りなす極上の休日。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {setouchiHighlights.map((feat) => (
            <div
              key={feat.num}
              className="p-5 rounded-2xl bg-amber-50/40 border border-amber-100 hover:border-amber-400 transition space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-amber-700 tracking-wider font-mono">POINT {feat.num}</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">
                  {feat.badge}
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                {feat.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 瀬戸内シーサイド vs 外洋リゾート比較表 */}
      <section className="bg-white border border-amber-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-amber-800 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-700 uppercase tracking-widest">SEASIDE COMPARISON</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            瀬戸内シーサイドグランピング vs 一般的な外洋・海岸キャンプ 比較
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            穏やかな内海だからこそ味わえる安心感と、島々が連なる唯一無二のロケーション。
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-amber-200 bg-amber-50/60">
                <th className="py-3 px-4 font-black text-slate-900 w-1/4">比較軸</th>
                <th className="py-3 px-4 font-black text-amber-950 bg-amber-100/80 w-3/8">
                  瀬戸内・中四国グランピング 🏝️
                </th>
                <th className="py-3 px-4 font-bold text-slate-500 w-3/8">
                  外洋沿岸の一般キャンプ場
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-100">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-amber-50/30 transition">
                  <td className="py-3.5 px-4 font-bold text-slate-900 bg-slate-50/50">{row.factor}</td>
                  <td className="py-3.5 px-4 font-semibold text-amber-950 bg-amber-50/40">
                    {row.setouchi}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{row.oceanCoast}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 厳選瀬戸内・中四国グランピング施設一覧 */}
      <section className="space-y-6" aria-labelledby="setouchi-hotels-heading">
        <div className="border-l-4 border-amber-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">SETOUCHI LUXURY RESORTS</span>
          <h2 id="setouchi-hotels-heading" className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            シルバーウィークに泊まりたい瀬戸内・中四国の厳選オーシャンビューヴィラ
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            しまなみ海道の島リゾート、香川の天然温泉グランピング、隠れ家離島のプライベートヴィラを厳選。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-amber-100 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col group"
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
                    <div className="absolute bottom-3 right-3 bg-amber-950/80 backdrop-blur-sm text-amber-200 text-xs font-black px-3 py-1.5 rounded-xl">
                      1名あたり ¥{hotel.hotelMinCharge.toLocaleString()}〜
                    </div>
                  )}
                  {hotel.reviewAverage && hotel.reviewAverage > 0 ? (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-amber-900 text-xs font-black px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                      <span className="text-amber-500">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && hotel.reviewCount > 0 && (
                        <span className="text-[10px] text-slate-400 font-normal">({hotel.reviewCount}件)</span>
                      )}
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="aspect-[16/10] bg-amber-50 flex items-center justify-center text-amber-400 text-xs">
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

                  <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-amber-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "瀬戸内海の美しい島並みと海風に癒やされる贅沢なリゾートステイ。新鮮な海山の幸と上質な客室空間をお楽しみください。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-amber-50 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-slate-500 font-medium">
                    <span>{hotel.nearestStation ? `最寄: ${hotel.nearestStation}駅` : "駐車場完備"}</span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
                  >
                    楽天トラベルで空室確認 🌊
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ（よくある質問） */}
      <section className="bg-white rounded-3xl border border-amber-100 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-amber-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            瀬戸内グランピング旅行のよくある質問
          </h2>
        </div>

        <div className="divide-y divide-amber-50">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-start gap-2">
                <span className="text-amber-600 font-black">Q.</span>
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
      <section className="bg-stone-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-stone-800">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <span>🚢</span> 淡路島＆関西発のおすすめ旅行ガイド
        </h3>
        <p className="text-xs text-stone-300">
          瀬戸内海エリアの車なし旅行や、大阪・関西発の便利な日帰りバスツアー情報も合わせてチェック。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/awaji-island-car-free-bus-trip-guide"
            className="block p-4 rounded-2xl bg-stone-800/80 border border-stone-700 hover:border-amber-400 hover:bg-stone-800 transition group"
          >
            <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              淡路島 車なし観光
            </span>
            <div className="font-bold text-xs sm:text-sm text-white group-hover:text-amber-200 transition line-clamp-2">
              【淡路島 車なし女子旅・一人旅】高速バスで行くおすすめ観光地・リゾートカフェ・モデルコース徹底ガイド
            </div>
          </Link>

          <Link
            href="/osaka-departure-daytrip-bus-tour-guide"
            className="block p-4 rounded-2xl bg-stone-800/80 border border-stone-700 hover:border-amber-400 hover:bg-stone-800 transition group"
          >
            <span className="text-[10px] font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              大阪発 日帰りバスツアー
            </span>
            <div className="font-bold text-xs sm:text-sm text-white group-hover:text-amber-200 transition line-clamp-2">
              【大阪発 日帰りバスツアー特集】淡路島・丹波・琵琶湖の味覚と絶景を巡る週末モデルコースまとめ
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-amber-950 bg-amber-50 hover:bg-amber-100 border border-amber-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県のグランピング＆リゾート宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
