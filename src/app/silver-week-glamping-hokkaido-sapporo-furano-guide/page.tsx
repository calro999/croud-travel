import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【北海道シルバーウィーク グランピング】札幌・富良野・トマム！秋晴れの爽快リゾートヴィラ ｜ 日本全国・旅宿クラウド",
  description:
    "湿気ゼロの圧倒的爽やかさ！初秋を迎える北海道の大自然グランピング。富良野の広大な丘陵パノラマ、トマムの雲海テラス連動ステイ、道産ブランド牛と秋サケのちゃんちゃん焼きBBQ完全ガイド。",
  keywords: [
    "北海道 グランピング シルバーウィーク",
    "富良野 グランピング 秋",
    "トマム 雲海 グランピング",
    "札幌近郊 グランピング リゾート",
    "十勝 中札内 コテージ グランピング",
    "北海道 秋キャンプ 手ぶらBBQ",
    "北海道 シルバーウィーク 宿泊"
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
      return data["silver-week-glamping-hokkaido-sapporo-furano-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for silver-week-glamping-hokkaido-sapporo-furano-guide", e);
  }
  return [];
}

export default function SilverWeekGlampingHokkaidoPage() {
  const hotels = loadHotels();

  // 北海道グランピング 4大エクスペリエンス
  const hokkaidoFeatures = [
    {
      badge: "爽快な初秋の気候",
      tag: "CLIMATE 01",
      title: "湿度ゼロの澄み切った青空と、夜の心地よい薪火暖炉",
      desc: "9月下旬の北海道は、本州の蒸し暑い残暑から完全に解き放たれるベストシーズン。日中は爽やかな秋晴れのカラッとした心地よさに包まれ、夕暮れ以降は薪ストーブや焚き火の温もりが心地よい季節です。虫の発生も大幅に減少し、屋外でストレスフリーに寛げます。",
    },
    {
      badge: "ダイナミックな大自然",
      tag: "LANDSCAPE 02",
      title: "富良野の丘陵パノラマと、早朝トマムの幻想的な雲海テラス",
      desc: "十勝岳連峰を望む広大なファームビューや、占冠村のトマムで発生率が高まる秋のダイナミックな雲海。人工的な遮蔽物が一切ない圧倒的スケールの北海道の大自然に囲まれ、朝のモーニングコーヒーを片手に息をのむ絶景パノラマを堪能できます。",
    },
    {
      badge: "収穫祭・秋の味覚BBQ",
      tag: "GASTRONOMY 03",
      title: "十勝若牛・道産ラム・秋鮭の豪快ちゃんちゃん焼きグリル",
      desc: "実りの秋を迎えた北海道はまさに食の宝庫。ブランド和牛のサーロインや柔らかい生ラム肉のジンギスカングリルに加え、獲れたての秋サケを丸ごと味噌とバターで蒸し焼きにする郷土料理「ちゃんちゃん焼き」、甘みたっぷりのインカのめざめなど、北の大地ならではの収穫祭BBQが揃います。",
    },
    {
      badge: "天然温泉＆北欧サウナ",
      tag: "WELLNESS 04",
      title: "白樺の森で整う本格フィンランドサウナ＆美肌の天然温泉",
      desc: "十勝やトマムの大自然に佇むリゾートでは、白樺の原生林に囲まれた木造サウナ小屋や敷地内の天然温泉大浴場が充実。澄み切った冷気の中で外気浴を楽しんだり、温かい湯に身を沈めたりと、極上のウェルネスステイが叶います。",
    },
  ];

  // 北海道グランピング（初秋） vs 本州グランピング（9月下旬）比較
  const comparisonList = [
    {
      item: "気温・湿度環境",
      hokkaido: "昼は20度前後の爽快気候、夜は10度前後で焚き火や暖炉が最高",
      honshu: "昼間は28〜30度近くまで上がり湿度が高く、まだ残暑が残る",
    },
    {
      item: "虫の発生状況",
      hokkaido: "9月下旬には蚊や羽虫が激減し、屋外デッキでも極めて快適",
      honshu: "夕暮れ時にブヨや蚊が活発で、虫除け対策が必須",
    },
    {
      item: "朝の絶景体験",
      hokkaido: "トマムの雄大な雲海テラスや十勝岳連峰の初冠雪パノラマ",
      honshu: "朝霧や湖畔の景色が中心で、スケール感は限定的",
    },
    {
      item: "BBQ食材の特長",
      hokkaido: "秋鮭、十勝牛、ラムチョップ、獲れたてホタテ、新じゃが",
      honshu: "一般的な輸入牛や標準的なソーセージ・野菜セットが中心",
    },
  ];

  // よくある質問
  const faqs = [
    {
      question: "9月下旬の北海道グランピング、夜の防寒着はどれくらい必要ですか？",
      answer:
        "日中は長袖シャツ1枚で過ごせますが、日が沈むと一気に冷え込み、気温が10度を下回ることもあります。フリースや厚手のマウンテンパーカー、インナーダウン、足元を温める厚手の靴下やブランケットを必ずご持参ください。",
    },
    {
      question: "新千歳空港や旭川空港からの移動・レンタカーは必須ですか？",
      answer:
        "北海道の広大な自然を巡る旅ではレンタカーの利用が最も効率的です。トマムや富良野、十勝エリアへは高速道路を利用して1時間半〜2時間半ほどで快適にドライブできます。新千歳空港発着のレンタカーはシルバーウィークに予約が埋まりやすいため、航空券・宿と同時に早期確保をおすすめします。",
    },
    {
      question: "札幌市内観光と富良野・トマムのグランピングを組み合わせることはできますか？",
      answer:
        "はい、1泊目は札幌市内の天然温泉付きプレミアホテル（中島公園など）に宿泊してススキノの夜景や海鮮グルメを堪能し、2泊目に富良野やトマム、十勝のグランピングリゾートへ移動する「都市観光×大自然アウトドア」の2泊3日ゴールデン周遊ルートが非常に人気です。",
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
    <div className="min-h-screen bg-cyan-950/5 text-slate-800 space-y-12 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ヒーローセクション */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-950 via-teal-900 to-slate-950 text-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:18px_18px]" />
        <div className="relative max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-semibold">
            <span>❄️ 残暑ゼロ！初秋の北の大地リゾート</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-snug font-journal-serif">
            【北海道シルバーウィーク グランピング】
            <br />
            <span className="text-cyan-300">札幌・富良野・トマム！秋晴れの爽快リゾートヴィラ</span>
          </h1>

          <p className="text-sm sm:text-base text-cyan-100/90 leading-relaxed max-w-3xl">
            本州の厳しい残暑から抜け出し、湿気のない爽快な初秋を迎える北海道へ。見渡す限りの丘陵が広がる富良野、奇跡の雲海テラスが待つトマム、森に包まれた十勝フェーリエンドルフ。極上の道産牛と秋サケのちゃんちゃん焼きBBQで彩る至高の北国アウトドア旅を徹底解説します。
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-cyan-200">
            <span className="flex items-center gap-1.5">✓ 湿度ゼロの澄んだ空気＆虫が少ない快適環境</span>
            <span className="flex items-center gap-1.5">✓ 雲海テラス連動ステイ＆十勝岳パノラマビュー</span>
            <span className="flex items-center gap-1.5">✓ 十勝若牛・道産ラム・天然温泉付きリゾート</span>
          </div>
        </div>
      </section>

      {/* 楽天トラベルスペシャルクーポンバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 北海道初秋グランピング 4大エクスペリエンス */}
      <section className="bg-white border border-cyan-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-cyan-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">HOKKAIDO ESSENCE</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            秋の北海道グランピングが圧倒的に支持される4つの理由
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            本州では味わえない澄み切った大気、実りの味覚、雄大なパノラマスケールがここにあります。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {hokkaidoFeatures.map((feat) => (
            <div
              key={feat.tag}
              className="p-5 rounded-2xl bg-cyan-50/40 border border-cyan-100 hover:border-cyan-400 transition space-y-2.5"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black text-cyan-700 tracking-wider font-mono">{feat.tag}</span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-900">
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

      {/* 北海道 vs 本州 9月下旬比較表 */}
      <section className="bg-white border border-cyan-100 rounded-3xl p-6 sm:p-10 space-y-6 shadow-sm">
        <div className="border-l-4 border-cyan-800 pl-4 space-y-1">
          <span className="text-xs font-bold text-cyan-700 uppercase tracking-widest">REGIONAL COMPARISON</span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            北海道（富良野・トマム・十勝） vs 本州グランピング 徹底比較
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            なぜ秋の大型連休に飛行機に乗って北海道のアウトドアへ向かう価値があるのか。
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-cyan-200 bg-cyan-50/60">
                <th className="py-3 px-4 font-black text-slate-900 w-1/4">比較ポイント</th>
                <th className="py-3 px-4 font-black text-cyan-950 bg-cyan-100/80 w-3/8">
                  北海道グランピング（初秋） 🌾
                </th>
                <th className="py-3 px-4 font-bold text-slate-500 w-3/8">
                  本州近郊グランピング（9月下旬）
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyan-100">
              {comparisonList.map((row, idx) => (
                <tr key={idx} className="hover:bg-cyan-50/30 transition">
                  <td className="py-3.5 px-4 font-bold text-slate-900 bg-slate-50/50">{row.item}</td>
                  <td className="py-3.5 px-4 font-semibold text-cyan-950 bg-cyan-50/40">
                    {row.hokkaido}
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{row.honshu}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 厳選北海道グランピング宿一覧 */}
      <section className="space-y-6" aria-labelledby="hokkaido-hotels-heading">
        <div className="border-l-4 border-cyan-600 pl-4 space-y-1">
          <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">SELECTED STAYS</span>
          <h2 id="hokkaido-hotels-heading" className="text-xl sm:text-2xl font-black text-slate-900 font-journal-serif">
            シルバーウィークに訪れたい北海道の厳選グランピング＆プレミアムリゾート
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            富良野の丘、トマムの雲海、十勝の森コテージ、札幌の温泉拠点ホテルをピックアップ。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <article
              key={hotel.hotelNo}
              className="bg-white rounded-3xl border border-cyan-100 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col group"
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
                    <div className="absolute bottom-3 right-3 bg-cyan-950/80 backdrop-blur-sm text-cyan-200 text-xs font-black px-3 py-1.5 rounded-xl">
                      1名あたり ¥{hotel.hotelMinCharge.toLocaleString()}〜
                    </div>
                  )}
                  {hotel.reviewAverage && hotel.reviewAverage > 0 ? (
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-cyan-900 text-xs font-black px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                      <span className="text-amber-500">★</span>
                      <span>{hotel.reviewAverage.toFixed(1)}</span>
                      {hotel.reviewCount && hotel.reviewCount > 0 && (
                        <span className="text-[10px] text-slate-400 font-normal">({hotel.reviewCount}件)</span>
                      )}
                    </div>
                  ) : null}
                </div>
              ) : (
                <div className="aspect-[16/10] bg-cyan-50 flex items-center justify-center text-cyan-400 text-xs">
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

                  <h3 className="font-black text-slate-900 text-base leading-snug group-hover:text-cyan-700 transition line-clamp-2 font-journal-serif">
                    {hotel.hotelName}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-medium">
                    {hotel.hotelSpecial || "北海道の雄大な大地で過ごす爽快なアウトドアステイ。澄み切った秋の風と道産食材の滋味をお楽しみください。"}
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
                    楽天トラベルで空室確認 🌾
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
            北海道グランピング旅行のよくある質問
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
      <section className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <span>✈️</span> 北海道旅行の費用計画＆モデルコースガイド
        </h3>
        <p className="text-xs text-slate-300">
          レンタカー代や飛行機代を含めた予算シミュレーションと、大自然・観光地を効率よく巡るファミリー向けモデルコースをチェック。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <Link
            href="/hokkaido-travel-budget-plan"
            className="block p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400 hover:bg-slate-900 transition group"
          >
            <span className="text-[10px] font-bold text-cyan-300 bg-cyan-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              北海道 予算シミュレーション
            </span>
            <div className="font-bold text-xs sm:text-sm text-white group-hover:text-cyan-200 transition line-clamp-2">
              【北海道旅行の予算・費用完全ガイド】2泊3日〜3泊4日の航空券・レンタカー・宿泊費・グルメ相場まとめ
            </div>
          </Link>

          <Link
            href="/hokkaido-family-trip-zoo-nature-guide"
            className="block p-4 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400 hover:bg-slate-900 transition group"
          >
            <span className="text-[10px] font-bold text-cyan-300 bg-cyan-400/20 px-2 py-0.5 rounded-full inline-block mb-1.5">
              家族旅行＆大自然モデルコース
            </span>
            <div className="font-bold text-xs sm:text-sm text-white group-hover:text-cyan-200 transition line-clamp-2">
              【北海道ファミリー旅行】旭山動物園・富良野ファーム・大自然を巡る子連れ安心のモデルコース徹底解説
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
          <span>全国47都道府県のグランピング＆リゾート宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
