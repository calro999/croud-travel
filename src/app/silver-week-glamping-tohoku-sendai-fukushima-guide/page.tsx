import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【東北シルバーウィーク グランピング】宮城・福島・秋田の雄大な自然＆紅葉先取りステイ ｜ 日本全国・旅宿クラウド",
  description:
    "仙台・福島から好アクセス！蔵王連峰や裏磐梯の秋風を感じる東北グランピング特集。一足早い紅葉の兆し、東北のブランド牛BBQ、天然温泉を併設した絶景アウトドアリゾート完全ガイド。",
  keywords: [
    "東北 グランピング シルバーウィーク",
    "宮城 グランピング 仙台近郊",
    "福島 裏磐梯 グランピング 温泉",
    "岩手 安比高原 グランピング",
    "気仙沼 グランピング 海鮮BBQ",
    "東北 紅葉 グランピング 9月",
    "東北 アウトドアリゾート 予約"
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
      return data["silver-week-glamping-tohoku-sendai-fukushima-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-tohoku-sendai-fukushima-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingTohokuPage() {
  const hotels = loadHotels();

  // 東北グランピングの4大トラベルバリュー
  const tohokuHighlights = [
    {
      num: "01",
      badge: "紅葉の兆しと高原の清涼気候",
      title: "残暑とは無縁！標高の高い高原で味わう一足早い初秋の爽快風",
      desc: "裏磐梯や安比高原など標高の高いエリアでは、9月下旬になると朝夕の気温が20度を下回り心地よい秋風が吹き抜けます。色づき始める落葉樹と澄んだ空気の中でアウトドアを満喫できます。",
    },
    {
      num: "02",
      badge: "東北名産グルメBBQ",
      title: "三陸の獲れたて海鮮＆仙台牛・福島牛の極上炭火ロースト",
      desc: "気仙沼の旬の魚介やサンマ、ホタテをはじめ、東北が誇るブランド牛のサーロインを豪快にグリル。地元産の新米やお野菜とともに、東北ならではの豊かな実りの味覚に舌鼓を打てます。",
    },
    {
      num: "03",
      badge: "名湯・天然温泉の併設",
      title: "グランピングの後は名湯で湯浴み！源泉かけ流し温泉との贅沢融合",
      desc: "アウトドアで焚き火や星空観察を楽しんだ後は、敷地内や併設ホテルの天然温泉露天風呂へ直行。硫黄泉や美肌の湯に浸かり、旅の疲れを芯から癒やすことができます。",
    },
    {
      num: "04",
      badge: "漆黒の夜空と満天の天の川",
      title: "人工の光が届かない大自然！肉眼で天の川を捉える星空鑑賞",
      desc: "都会の喧騒から遠く離れた東北の山林や離島リゾート。街灯の光害が極めて少ないため、テラスに寝転がると降り注ぐような星空と天の川のアーチが視界いっぱいに広がります。",
    },
  ];

  // 首都圏・近郊キャンプ場 vs 東北ディープ大自然グランピング比較
  const comparisonRows = [
    {
      area: "気候・快適性（9月下旬）",
      tohoku: "日中でも涼しく爽やか。朝晩は澄んだ秋風が心地よいベストシーズン",
      kantoNear: "昼間は30度近くまで上がり残暑が厳しく、湿度も高め",
    },
    {
      area: "周囲の景観と自然のスケール",
      tohoku: "蔵王連峰・三陸リアス海岸・裏磐梯の大自然。圧倒的な開放感と静けさ",
      kantoNear: "区画が密集しており、隣のサイトの話し声や車の走行音が届きやすい",
    },
    {
      area: "温泉・付帯施設",
      tohoku: "沼尻温泉や安比高原など本格的な源泉かけ流し天然温泉を併設",
      kantoNear: "簡易シャワー棟、または車で近隣の日帰り入浴施設へ行く必要がある",
    },
    {
      area: "食材の鮮度と地域性",
      tohoku: "気仙沼港直送の海鮮、東北ブランド黒毛和牛、採れたて高原野菜",
      kantoNear: "一般的なスーパー調達肉や加工品セットが主流",
    },
  ];

  // よくある質問
  const faqs = [
    {
      question: "9月の東北グランピングはどのような服装で行くべきですか？",
      answer:
        "日中は長袖シャツや薄手の羽織もので快適に過ごせますが、標高の高い高原エリア（安比や裏磐梯など）では朝晩の気温が10〜15度前後まで冷え込みます。フリースやウインドブレーカー、厚手の靴下など、脱ぎ着しやすい防寒着を必ず1枚ご用意ください。",
    },
    {
      question: "仙台駅や東京駅からの公共交通機関・アクセスは整っていますか？",
      answer:
        "東北新幹線を利用すれば東京駅から仙台・郡山・盛岡まで1〜2時間台でアクセス可能です。各新幹線主要駅でレンタカーを借りてドライブを楽しむのがおすすめですが、施設によっては最寄駅（気仙沼駅や那須塩原駅、猪苗代駅など）からの送迎バスや路線バスが運行されています。",
    },
    {
      question: "雨が降った場合でも温泉やグランピングを楽しめますか？",
      answer:
        "はい、本特集に掲載されているリゾートは、屋根付きのBBQデッキや隣接する温泉ホテル本館の温浴施設・ラウンジが利用できる複合型リゾートが中心です。雨天時でも濡れることなく本格ディナーと天然温泉を満喫できます。",
    },
    {
      question: "紅葉のピーク時期はいつ頃になりますか？",
      answer:
        "東北の高山部（蔵王連峰や八幡平、磐梯吾妻スカイラインの標高1,500m以上）では9月下旬のシルバーウィーク頃から徐々に色づきが始まります。グランピング場周辺の山裾は10月中旬〜11月上旬に見頃を迎えますが、初秋の澄んだ空気と爽やかな気候を味わうには9月下旬が最も快適です。",
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

      {/* ヒーローセクション（Rose/Crimson/Autumn Amber パレット） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-rose-950 via-slate-950 to-stone-950 text-white p-8 md:p-14 shadow-2xl border border-rose-500/30">
        <div className="max-w-3xl space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-rose-400 to-amber-300 text-rose-950 px-3.5 py-1 rounded-full uppercase shadow-md">
              TOHOKU AUTUMN GLAMPING
            </span>
            <span className="text-[10px] md:text-xs font-bold text-rose-200 bg-rose-900/80 border border-rose-400/40 px-3 py-1 rounded-full">
              宮城・福島・岩手・北東北の秋風トリップ
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【東北シルバーウィーク グランピング】宮城・福島・秋田の雄大な自然＆紅葉先取りステイ
          </h1>

          <p className="text-xs md:text-sm text-rose-100/90 leading-relaxed font-medium">
            都会の蒸し暑さを抜け出し、いち早く澄んだ秋空が広がる東北の杜へ。三陸・気仙沼大島の豊かな潮風、裏磐梯や安比高原を渡る爽やかな風、そして名湯・天然温泉のぬくもり。地元で水揚げされた新鮮な海の幸やブランド牛をテラスで焼き上げ、夜は満天の天の川を見上げる——五感で味わう東北のアウトドアリトリートへご案内します。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-rose-300">
            <span className="flex items-center gap-1.5">🍁 標高の高い高原で楽しむ初秋の涼風＆紅葉の気配</span>
            <span className="flex items-center gap-1.5">🥩 三陸直送海鮮＆東北ブランド和牛BBQ</span>
            <span className="flex items-center gap-1.5">♨️ 名湯・源泉かけ流し露天風呂併設リゾート</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 東北グランピングの4大ハイライト */}
      <section className="bg-white border border-rose-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-rose-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">TOHOKU NATURE VALUE</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            圧倒的スケールの大自然！東北グランピングが選ばれる4つの理由
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            冷涼な高原気候、美肌の名湯、極上の食材が揃う東北ならではの至福トリップ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tohokuHighlights.map((item) => (
            <div
              key={item.num}
              className="p-5 rounded-2xl bg-rose-50/40 border border-rose-100 hover:border-rose-400 transition space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-rose-700 tracking-wider font-mono">VALUE {item.num}</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900">
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

      {/* 東北エリアグランピング vs 首都圏近郊キャンプ比較表 */}
      <section className="bg-white border border-rose-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-rose-800 pl-4 space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">REGIONAL COMPARISON</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            東北ディープ大自然リゾート vs 首都圏近郊キャンプ場 徹底比較
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            わざわざ足を伸ばす価値がある、東北グランピングの圧倒的ポテンシャル。
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-rose-200 bg-rose-50/70">
                <th className="py-3 px-4 font-black text-slate-900 w-1/4">比較項目</th>
                <th className="py-3 px-4 font-black text-rose-950 bg-rose-100/90 w-3/8">
                  東北グランピング 🌲
                </th>
                <th className="py-3 px-4 font-bold text-slate-500 w-3/8">
                  首都圏近郊キャンプ場
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-rose-100">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-rose-50/30 transition">
                  <td className="py-3.5 px-4 font-bold text-slate-900 bg-slate-50/50">{row.area}</td>
                  <td className="py-3.5 px-4 font-semibold text-rose-900 bg-rose-50/40">
                    {row.tohoku}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{row.kantoNear}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 厳選東北ホテル一覧 */}
      <section className="space-y-6" aria-labelledby="tohoku-hotels-heading">
        <div className="border-l-4 border-rose-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">SELECTED TOHOKU RESORTS</span>
          <h2 id="tohoku-hotels-heading" className="text-xl sm:text-3xl font-black text-slate-900 font-journal-serif">
            秋風薫る杜の楽園！東北・北関東エリアの厳選グランピング＆ロッジ4選
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            気仙沼大島のオーシャンビュー、裏磐梯の沼尻高原温泉ロッジ、安比高原リゾートまで。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-rose-100 hover:border-rose-400 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
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
                    <div className="absolute bottom-3 right-3 bg-rose-950/85 backdrop-blur-sm text-rose-200 px-3 py-1 rounded-full text-xs font-black shadow-md border border-rose-400/30">
                      1名参考: ¥{hotel.hotelMinCharge.toLocaleString()}〜
                    </div>
                  )}
                  {hotel.reviewAverage && hotel.reviewAverage > 0 && (
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-900 px-2.5 py-1 rounded-full text-[11px] font-black shadow flex items-center gap-1 border border-rose-100">
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

                  <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-rose-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "東北の豊かな自然に包まれた特別なアウトドアステイ。地元の滋味あふれる食材と天然温泉で心ほどける休日をお過ごしください。"}
                  </p>

                  {hotel.access && (
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      🚗 {hotel.access}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-rose-50 flex items-center justify-between gap-2">
                  <div className="text-[10px] text-slate-500 font-medium">
                    <span>{hotel.nearestStation ? `最寄: ${hotel.nearestStation}駅` : "駐車場完備"}</span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 bg-gradient-to-r from-rose-700 to-rose-900 hover:from-rose-600 hover:to-rose-800 text-white font-bold text-xs rounded-xl shadow-md transition transform hover:-translate-y-0.5 shrink-0"
                  >
                    楽天トラベルで空室確認 🍁
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ（よくある質問） */}
      <section className="bg-white rounded-3xl border border-rose-100 p-6 sm:p-10 space-y-6" aria-labelledby="faq-heading">
        <div className="border-l-4 border-rose-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">FAQ</span>
          <h2 id="faq-heading" className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            東北グランピングのよくある質問
          </h2>
        </div>

        <div className="divide-y divide-rose-50">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-4 space-y-2 first:pt-0 last:pb-0">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 flex items-start gap-2">
                <span className="text-rose-600 font-black">Q.</span>
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
          <span>🚄</span> 東北旅行のアクセス＆予算攻略おすすめガイド
        </h3>
        <p className="text-xs text-stone-300">
          仙台・福島・北東北への移動手段や費用節約に役立つ実践ガイドをチェック。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/tokyo-sendai-bus-vs-shinkansen-guide"
            className="block p-4 rounded-2xl bg-stone-800/80 border border-stone-700 hover:border-rose-400 hover:bg-stone-800 transition group"
          >
            <span className="text-[10px] font-bold text-rose-300 bg-rose-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              東京⇄仙台 交通比較
            </span>
            <div className="font-bold text-xs sm:text-sm text-white group-hover:text-rose-200 transition line-clamp-2">
              【東京〜仙台 高速バス vs 新幹線】料金・所要時間・快適度を徹底比較！おすすめ移動ルート解説
            </div>
          </Link>

          <Link
            href="/tohoku-travel-budget-guide"
            className="block p-4 rounded-2xl bg-stone-800/80 border border-stone-700 hover:border-rose-400 hover:bg-stone-800 transition group"
          >
            <span className="text-[10px] font-bold text-rose-300 bg-rose-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              東北旅行 費用相場
            </span>
            <div className="font-bold text-xs sm:text-sm text-white group-hover:text-rose-200 transition line-clamp-2">
              【東北旅行の費用と予算目安】2泊3日モデルコース別の宿泊費・レンタカー・グルメ相場まとめ
            </div>
          </Link>
        </div>
      </section>

      {/* 都道府県一覧への導線 */}
      <div className="text-center pt-4">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-rose-950 bg-rose-50 hover:bg-rose-100 border border-rose-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県のグランピング＆リゾート宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
