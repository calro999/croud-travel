import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【子連れUSJホテルおすすめ比較】オフィシャルホテル徒歩1分 vs 梅田・なんば駅チカ宿！家族旅行完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "子連れでユニバーサル・スタジオ・ジャパンを満喫するためのホテル選び！パーク徒歩1分のオフィシャルホテルで開園待ち＆疲れたら昼寝できるメリット vs 大阪観光も兼ねた梅田・なんばのファミリー向けホテルを徹底比較。",
  keywords: [
    "子連れUSJ ホテル",
    "USJ オフィシャルホテル 子連れ",
    "ユニバーサルスタジオジャパン 家族旅行",
    "USJ 昼寝 再入場 ホテル",
    "USJ 梅田 なんば ホテル 比較",
    "楽天トラベル USJ"
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
      return data["usj-family-hotel-near-osaka-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for usj-family-hotel-near-osaka-guide", e);
  }
  return [];
}

export default function UsjFamilyHotelGuidePage() {
  const hotels = loadHotels();

  // 比較対決カード
  const comparisonDuel = [
    {
      title: "【戦略A】パーク徒歩1分！オフィシャルホテル滞在",
      subtitle: "「子供が疲れたら部屋で昼寝」ができる唯一無二の安心感",
      idealFor: "乳幼児・ベビーカー連れ・朝イチニンテンドーエリア確約狙い",
      pros: [
        "開園前の行列に徒歩1分で直行！朝イチの整理券・入場確約に圧倒的有利",
        "パーク内で子供がぐずったり寝てしまっても、一度部屋に戻って授乳・お昼寝・おむつ替えが可能",
        "ユニバーサル・シティウォーク直結で、夜遅くてもレストランやお土産屋さんが目の前",
        "ホテル内もミニオンやキャラクタールームなどパークの世界観が持続"
      ],
      cons: [
        "宿泊料金は高め（特に週末や長期休暇シーズン）",
        "道頓堀や通天閣など大阪市内の定番観光地へはJR乗り換えが必要（約20〜25分）"
      ],
      recommendLevel: "乳幼児連れなら満足度No.1",
      borderColor: "border-teal-500",
      headerBg: "bg-teal-700 text-white"
    },
    {
      title: "【戦略B】梅田・なんば・大阪港！市街地駅チカ＆コスパ宿",
      subtitle: "大阪グルメ食い倒れ＆海遊館観光も欲張る欲張りファミリー派",
      idealFor: "小学生以上・大阪観光も楽しみたい・宿泊費を賢く抑えたい家族",
      pros: [
        "1泊あたりの宿泊費を大幅に抑えられ、浮いた予算をパークのエクスプレス・パスやグッズに回せる",
        "夜は道頓堀でたこ焼き・串カツ・お好み焼きなど本場の大阪グルメを満喫できる",
        "大阪港エリア（海遊館・天保山大観覧車）や主要ターミナルへのアクセスが抜群",
        "ロードサイド型やファミリールーム完備の使い勝手抜群な宿が選べる"
      ],
      cons: [
        "閉園後の満員電車（JRゆめ咲線・環状線）に乗って移動する必要がある",
        "途中で部屋に戻って休憩することが難しいため、パーク内での体力配分が必須"
      ],
      recommendLevel: "コスパ＆観光両立なら最強",
      borderColor: "border-cyan-600",
      headerBg: "bg-cyan-800 text-white"
    }
  ];

  // 子連れUSJを120%楽しむための攻略ティップス
  const parkTips = [
    {
      title: "スーパー・ニンテンドー・ワールド™の確約券対策",
      desc: "大人気のマリオエリアは入場整理券が必須。オフィシャルホテル宿泊者なら公式オープン時間（実際には30分〜1時間早く開園することが多い）に合わせて徒歩で早朝待機列に並べるため、無料のエリア入場整理券をアプリで最も獲得しやすいです。",
      tag: "最重要"
    },
    {
      title: "「チャイルドスイッチ」のフル活用",
      desc: "身長制限等で子供が乗れないアトラクションでも、パパママが交代で1回分の待ち時間で順番に乗車できる神システム。待ち列の入口クルーに申告するだけでOKです。",
      tag: "パパママ必見"
    },
    {
      title: "ユニバーサル・ワンダーランドで子供の体力温存",
      desc: "スヌーピー、ハローキティ、セサミストリートが揃う幼児向けエリアは「よやくのり」を活用可能。指定時間までキッズスペースで遊びながら待てるため、長蛇の列でぐずる心配がありません。",
      tag: "幼児向け"
    },
    {
      title: "ベビーカー貸出と雨具・着替えの準備",
      desc: "エントランス右側でベビーカー（リクライニング付き1台1,100円）がレンタル可能。ウォーター系演出や突然の雨対策に、子供の着替え一式とタオルはリュックに常備しましょう。",
      tag: "持ち物"
    }
  ];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-20 font-sans text-slate-800">
      {/* ヒーローセクション（Teal Palette） */}
      <section className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 text-white p-8 md:p-14 shadow-2xl border border-teal-600/50">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-400/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 text-[160px] text-white/5 font-black select-none pointer-events-none">
          USJ
        </div>

        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] md:text-xs font-black tracking-widest bg-teal-400 text-teal-950 px-3.5 py-1 rounded-full uppercase shadow-sm">
              USJ FAMILY RESORT GUIDE
            </span>
            <span className="text-xs font-bold bg-teal-950/40 text-teal-200 border border-teal-400/30 px-3 py-1 rounded-full">
              オフィシャル直結 vs 梅田・なんば
            </span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【子連れUSJホテルおすすめ比較】<br />
            <span className="text-teal-200">オフィシャルホテル徒歩1分 vs 梅田・なんば駅チカ宿！家族旅行完全ガイド</span>
          </h1>

          <p className="text-sm md:text-base text-teal-50/90 leading-relaxed font-normal pt-1">
            スーパー・ニンテンドー・ワールドにミニオン・パーク！大熱狂のUSJ（ユニバーサル・スタジオ・ジャパン）子連れ旅行では、ホテル選びがパークの勝敗を分けます。「パーク目の前のオフィシャルホテルで昼寝＆早朝開園待ち」か「大阪グルメも楽しむ梅田・なんばのコスパ宿」か、徹底比較します。
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs md:text-sm text-teal-100">
            <span className="flex items-center gap-1.5">
              <span className="text-teal-300 font-bold">✓</span> パーク徒歩1分で途中退場・お昼寝可能
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-teal-300 font-bold">✓</span> 朝イチ開園待ちでマリオエリア確約狙い
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-teal-300 font-bold">✓</span> 家族向け広々ルーム＆二段ベッド宿
            </span>
          </div>
        </div>
      </section>

      {/* 楽天トラベル クーポンWEEKバナー */}
      <SpecialCouponBanner variant="prominent" />

      {/* 目次 */}
      <nav className="bg-teal-50/70 border border-teal-200/80 rounded-2xl p-6 shadow-sm">
        <h2 className="text-base font-black text-teal-950 mb-3 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-600"></span>
          本記事のポイント一覧
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-sm text-teal-900">
          <li className="flex items-center gap-2">
            <span className="text-teal-600 font-bold">01.</span>
            <a href="#duel" className="hover:underline hover:text-teal-700">オフィシャル徒歩1分 vs 市街地コスパ宿 徹底比較</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-teal-600 font-bold">02.</span>
            <a href="#tips" className="hover:underline hover:text-teal-700">子連れUSJを攻略する4大テクニック</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-teal-600 font-bold">03.</span>
            <a href="#hotels" className="hover:underline hover:text-teal-700">厳選ファミリー宿＆オフィシャルホテル一覧</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-teal-600 font-bold">04.</span>
            <a href="#transit-budget-links" className="hover:underline hover:text-teal-700">大阪旅行予算＆交通費ガイド連携</a>
          </li>
        </ul>
      </nav>

      {/* セクション1: 宿泊戦略の対決比較 */}
      <section id="duel" className="space-y-6">
        <div className="border-l-4 border-teal-600 pl-4">
          <span className="text-xs font-black text-teal-700 tracking-wider uppercase">STRATEGY COMPARISON</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            あなたはどっち派？子連れUSJの宿泊2大戦略
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            子どもの年齢、体力、滞在日数（1泊2日か2泊3日か）で最適な選択肢がガラリと変わります。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comparisonDuel.map((item, idx) => (
            <div key={idx} className={`rounded-3xl border-2 overflow-hidden shadow-md flex flex-col justify-between bg-white ${item.borderColor}`}>
              <div>
                <div className={`p-5 ${item.headerBg}`}>
                  <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-white/20 text-white inline-block mb-2">
                    {item.recommendLevel}
                  </span>
                  <h3 className="text-lg md:text-xl font-black leading-snug">{item.title}</h3>
                  <p className="text-xs text-teal-100 mt-1">{item.subtitle}</p>
                </div>

                <div className="p-6 space-y-4">
                  <div className="bg-teal-50/70 p-3 rounded-xl border border-teal-100">
                    <span className="text-xs font-bold text-teal-900 block mb-0.5">🎯 おすすめの家族タイプ</span>
                    <span className="text-xs md:text-sm font-black text-teal-950">{item.idealFor}</span>
                  </div>

                  <div>
                    <h4 className="text-xs font-black text-emerald-800 uppercase tracking-wider mb-2">
                      ◎ この戦略のメリット
                    </h4>
                    <ul className="space-y-2">
                      {item.pros.map((pro, pIdx) => (
                        <li key={pIdx} className="text-xs text-slate-700 flex items-start gap-2">
                          <span className="text-teal-600 font-bold shrink-0">✓</span>
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <h4 className="text-xs font-black text-amber-800 uppercase tracking-wider mb-2">
                      ▲ 事前に知っておくべき注意点
                    </h4>
                    <ul className="space-y-1.5">
                      {item.cons.map((con, cIdx) => (
                        <li key={cIdx} className="text-xs text-slate-600 flex items-start gap-2">
                          <span className="text-amber-600 font-bold shrink-0">!</span>
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* セクション2: 子連れUSJ攻略ノウハウ */}
      <section id="tips" className="bg-gradient-to-br from-teal-50 to-cyan-50/50 border border-teal-200 rounded-3xl p-6 md:p-8 space-y-6">
        <div className="border-l-4 border-teal-600 pl-4">
          <h2 className="text-xl md:text-2xl font-black text-teal-950">
            家族全員が笑顔で帰るための子連れUSJ 4大攻略テクニック
          </h2>
          <p className="text-sm text-teal-800 mt-1">
            混雑するパーク内でぐずりを防ぎ、効率的に楽しむための必須知識。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {parkTips.map((tip, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 border border-teal-100 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-black text-slate-900 text-base">{tip.title}</h3>
                <span className="text-[11px] font-bold bg-teal-100 text-teal-900 px-2 py-0.5 rounded-full">
                  {tip.tag}
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* セクション3: 厳選ホテルリスト (all_seasonal_rakuten_hotels.json連携) */}
      <section id="hotels" className="space-y-8">
        <div className="border-l-4 border-teal-600 pl-4">
          <span className="text-xs font-black text-teal-700 tracking-wider uppercase">FEATURED HOTELS</span>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            子連れUSJにおすすめのオフィシャル＆周辺人気ホテル
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            駅チカ・パーク徒歩圏・ファミリー向け客室を完備した楽天トラベル提携宿。
          </p>
        </div>

        <div className="space-y-6">
          {hotels.map((hotel, index) => (
            <article
              key={hotel.hotelNo || index}
              className="bg-white border-2 border-teal-100 rounded-3xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
            >
              {/* ホテル画像 */}
              <div className="md:col-span-4 relative rounded-2xl overflow-hidden aspect-[4/3] bg-teal-50 shadow-inner">
                {hotel.hotelImageUrl ? (
                  <img
                    src={hotel.hotelImageUrl}
                    alt={hotel.hotelName}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-teal-400 text-sm">
                    No Image Available
                  </div>
                )}
                <span className="absolute top-3 left-3 bg-teal-800 text-white text-[11px] font-black px-3 py-1 rounded-full shadow">
                  HOTEL #{index + 1}
                </span>
              </div>

              {/* ホテル情報 */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    {hotel.reviewAverage && (
                      <span className="text-xs font-black bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        ★ {hotel.reviewAverage.toFixed(2)}
                        {hotel.reviewCount && <span className="text-[10px] text-amber-700">({hotel.reviewCount}件)</span>}
                      </span>
                    )}
                    {hotel.nearestStation && (
                      <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        最寄: {hotel.nearestStation}駅
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-snug">
                    {hotel.hotelName}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-slate-700 bg-teal-50/70 p-3.5 rounded-xl border border-teal-100 leading-relaxed font-medium">
                  {hotel.hotelSpecial || "USJ観光の拠点として抜群のロケーションとおもてなし。家族連れの快適な旅をサポートします。"}
                </p>

                {hotel.access && (
                  <p className="text-xs text-slate-500 flex items-start gap-1.5">
                    <span className="font-bold text-teal-800 shrink-0">📍 アクセス:</span>
                    <span>{hotel.access}</span>
                  </p>
                )}

                <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] text-slate-500 block">参考最安料金（1名あたり）</span>
                    <span className="text-2xl font-black text-teal-700">
                      {hotel.hotelMinCharge ? `¥${hotel.hotelMinCharge.toLocaleString()}〜` : "料金プラン参照"}
                    </span>
                    <span className="text-[10px] text-slate-500 ml-1">消費税込み</span>
                  </div>

                  <a
                    href={hotel.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 via-teal-700 to-cyan-800 hover:from-teal-700 hover:to-cyan-900 text-white font-black text-sm px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 text-center group cursor-pointer"
                  >
                    <span>楽天トラベルで空室・プランを見る</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* セクション4: 内部リンク・交通＆予算ガイドへの導線 */}
      <section id="transit-budget-links" className="bg-cyan-50/60 border-2 border-teal-300 rounded-3xl p-6 md:p-8 space-y-5">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🗺️</span>
          <div>
            <h3 className="text-lg md:text-xl font-black text-teal-950">
              大阪旅行をもっとお得に！あわせて読みたい関連ガイド
            </h3>
            <p className="text-xs md:text-sm text-teal-800">
              USJチケット代を含めた旅行総額の予算組みと、東京・関東からの交通費節約術をチェック！
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <Link
            href="/osaka-travel-budget-guide"
            className="p-4 bg-white rounded-2xl border border-teal-200 hover:border-teal-500 shadow-sm hover:shadow-md transition group block"
          >
            <span className="text-xs font-black text-teal-700 block mb-1">【大阪旅行 費用総額】</span>
            <p className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition">
              1泊2日・2泊3日はいくら？USJ込み予算＆道頓堀グルメ食費シミュレーション →
            </p>
          </Link>

          <Link
            href="/tokyo-osaka-bus-vs-shinkansen-guide"
            className="p-4 bg-white rounded-2xl border border-teal-200 hover:border-teal-500 shadow-sm hover:shadow-md transition group block"
          >
            <span className="text-xs font-black text-teal-700 block mb-1">【東京〜大阪 交通費比較】</span>
            <p className="text-sm font-bold text-slate-900 group-hover:text-teal-700 transition">
              新幹線 vs 夜行高速バス徹底比較！差額2万円でUSJ開園待ち直行プラン →
            </p>
          </Link>
        </div>
      </section>

      {/* 楽天トラベル下部バナー */}
      <div className="pt-4">
        <SpecialCouponBanner variant="prominent" />
      </div>
    </div>
  );
}
