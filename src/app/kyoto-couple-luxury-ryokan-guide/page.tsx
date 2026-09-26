import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【京都カップル旅行 おすすめ高級旅館＆町家ホテル】祇園・嵐山で二人きりの特別な夜を過ごす大人の宿",
  description: "大人の京都カップル旅におすすめの極上宿！坪庭を望む町家一棟貸し、嵐山の静寂に包まれる客室露天風呂付き旅館、旬の京懐石ディナーを味わう風情あふれる記念日ステイ完全ガイド。",
  keywords: [
    "京都 カップル 高級旅館",
    "京都 記念日 宿",
    "京都 客室露天風呂 カップル",
    "京都 町家ホテル 坪庭",
    "Nazuna 京都 椿通",
    "京都 北白川天然ラジウム温泉 えいせん京",
    "京都 露天風呂付き客室",
    "京都 大人の隠れ家 宿",
    "祇園 嵐山 カップル 旅館"
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
      return data["kyoto-couple-luxury-ryokan-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kyoto-couple-luxury-ryokan-guide", e);
  }
  return [];
}

export default function KyotoCoupleLuxuryRyokanPage() {
  const hotels = loadHotels();

  // 大人の京都デートスポット 厳選エリア比較
  const kyotoAreas = [
    {
      area: "四条大宮・町家小路エリア",
      vibe: "築百年の町家が連なる花街の情緒とおこもり露天風呂",
      charm: "石畳の路地に提灯が揺れるプライベートな別世界。町家を一棟丸ごとリノベーションした贅沢な空間で、誰にも邪魔されない二人だけの夜を過ごせます。",
      spots: "錦市場、先斗町、祇園白川の夕暮れ散策"
    },
    {
      area: "嵐山・嵯峨野の奥座敷",
      vibe: "竹林の静寂と保津川のせせらぎに包まれる湯浴み",
      charm: "観光客が引けた夕刻以降、静寂に包まれる嵐山。客室露天風呂から四季の山並みを眺め、料理人が腕を振るう京懐石に舌鼓を打つ極上のひととき。",
      spots: "竹林の小径、渡月橋、天龍寺庭園、嵯峨野トロッコ"
    },
    {
      area: "左京・東山・美山の大自然",
      vibe: "名湯ラジウム温泉と清流の川床料理に癒やされる隠れ宿",
      charm: "市内中心部から少し足を伸ばし、豊かな自然と静寂に浸る贅沢。全国屈指の天然温泉や美山川の鮎・ジビエ・旬菜を味わう料理旅館で心身を解き放ちます。",
      spots: "銀閣寺、哲学の道、美山かやぶきの里、貴船神社"
    }
  ];

  return (
    <div className="bg-[#f7f9f6] text-stone-800 min-h-screen font-sans antialiased">
      {/* ヒーローヘッダー（Emerald & Moss Green Heritage） */}
      <header className="relative bg-gradient-to-b from-[#062419] via-[#0d3827] to-[#122a20] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="relative max-w-4xl mx-auto px-4 pt-14 pb-16 md:pt-20 md:pb-24 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs md:text-sm font-medium tracking-wide">
            <span>🌿</span>
            <span>KYOTO LUXURY RYOKAN & MACHIYA GUIDE</span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight md:leading-[1.25] text-emerald-50">
            【京都カップル旅行 おすすめ高級旅館＆町家ホテル】<br className="hidden sm:inline" />
            祇園・嵐山で二人きりの特別な夜を過ごす大人の宿
          </h1>

          <p className="text-sm md:text-base text-emerald-100/90 max-w-2xl mx-auto leading-relaxed font-light">
            喧騒を離れ、風情ある町家の石畳や竹林のささやきに包まれる旅路。坪庭を望む半露天風呂、伝統と革新が織りなす本格京懐石、記念日にふさわしい大人の隠れ家ステイをご提案します。
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 pt-2 text-xs text-emerald-200">
            <span className="bg-emerald-900/60 border border-emerald-700/50 px-3 py-1 rounded-lg">🏮 坪庭・客室露天風呂付き客室</span>
            <span className="bg-emerald-900/60 border border-emerald-700/50 px-3 py-1 rounded-lg">🍶 伝統の旬味・本格京懐石ディナー</span>
            <span className="bg-emerald-900/60 border border-emerald-700/50 px-3 py-1 rounded-lg">👘 町家一棟貸し＆名湯ラジウム温泉</span>
            <span className="bg-emerald-900/60 border border-emerald-700/50 px-3 py-1 rounded-lg">💎 記念日アニバーサリー対応</span>
          </div>
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        {/* 大人の京都滞在 エリア別魅力 */}
        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-emerald-200/80 space-y-6">
          <div className="border-b border-emerald-100 pb-4 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">AREA SELECTION</span>
            <h2 className="text-xl md:text-2xl font-bold font-journal-serif text-stone-900 mt-1">
              大人のカップル旅で選びたい京都の3大宿泊ロケーション
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {kyotoAreas.map((item, idx) => (
              <div
                key={idx}
                className="bg-emerald-50/40 border border-emerald-200/70 rounded-2xl p-5 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-black text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block">
                    {item.area}
                  </span>
                  <h3 className="font-bold text-stone-900 text-sm md:text-base leading-snug">
                    {item.vibe}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {item.charm}
                  </p>
                </div>
                <div className="pt-2 border-t border-emerald-200/50 text-[11px] text-stone-500">
                  <span className="font-bold text-emerald-800">周辺散策：</span>{item.spots}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 楽天トラベル クーポンバナー */}
        <SpecialCouponBanner variant="prominent" />

        {/* 内部リンク（京都・金沢 予算比較） */}
        <nav className="bg-emerald-100/60 border border-emerald-300/80 rounded-2xl p-5 md:p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-xs md:text-sm font-bold text-emerald-950 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-700" />
              京都旅行計画の関連ガイド（あわせて読む）
            </h2>
            <span className="text-[10px] text-emerald-800 bg-emerald-200/80 font-bold px-2 py-0.5 rounded">
              必見旅ガイド
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs md:text-sm">
            <Link
              href="/kyoto-travel-budget-how-many-nights"
              className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-200/90 hover:border-emerald-500 hover:shadow-md transition group"
            >
              <span className="text-emerald-700 font-bold text-base">💴</span>
              <div>
                <span className="font-bold text-stone-900 group-hover:text-emerald-700 transition block">
                  京都旅行 何泊がベスト？予算＆日程シミュレーション
                </span>
                <span className="text-[11px] text-stone-500">
                  1泊2日・2泊3日の宿泊費、新幹線代、京料理ディナーの総額相場を徹底解説
                </span>
              </div>
            </Link>
            <Link
              href="/kanazawa-vs-kyoto-comparison"
              className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-emerald-200/90 hover:border-emerald-500 hover:shadow-md transition group"
            >
              <span className="text-emerald-700 font-bold text-base">⛩️</span>
              <div>
                <span className="font-bold text-stone-900 group-hover:text-emerald-700 transition block">
                  金沢 vs 京都 どっちに行く？古都の魅力徹底比較
                </span>
                <span className="text-[11px] text-stone-500">
                  風情ある街並み、美食、カップルでの歩きやすさ・混雑回避を本音レビュー
                </span>
              </div>
            </Link>
          </div>
        </nav>

        {/* 厳選！京都の高級旅館＆町家宿一覧 */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 border-b border-emerald-200 pb-3">
            <div>
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                <span>🏮 SELECTED KYOTO STAYS</span>
              </div>
              <h2 className="text-xl md:text-2xl font-black font-journal-serif text-stone-900 mt-1">
                大人の二人が選ぶべき京都の洗練宿・高級旅館
              </h2>
            </div>
            <span className="text-xs text-stone-500 font-medium">
              楽天トラベル宿泊プラン・露天風呂客室プラン掲載
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {hotels.length > 0 ? (
              hotels.map((hotel, index) => (
                <article
                  key={hotel.hotelNo || index}
                  className="bg-white rounded-3xl overflow-hidden border border-emerald-200/80 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* 画像 */}
                    <div className="relative aspect-[16/10] w-full bg-stone-100 overflow-hidden">
                      {hotel.hotelImageUrl ? (
                        <img
                          src={hotel.hotelImageUrl}
                          alt={hotel.hotelName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs">
                          画像準備中
                        </div>
                      )}
                      <div className="absolute top-3 left-3 bg-emerald-800 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
                        厳選宿 #{index + 1}
                      </div>
                      {hotel.hotelMinCharge ? (
                        <div className="absolute bottom-3 right-3 bg-stone-900/85 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold shadow">
                          <span className="text-[10px] text-emerald-200 font-normal">最安目安 </span>
                          ¥{hotel.hotelMinCharge.toLocaleString()}〜
                          <span className="text-[10px] text-stone-300 font-normal"> /人</span>
                        </div>
                      ) : null}
                    </div>

                    {/* 詳細 */}
                    <div className="p-5 space-y-3">
                      <div>
                        <h3 className="font-bold font-journal-serif text-base md:text-lg text-stone-900 leading-snug">
                          {hotel.hotelName}
                        </h3>
                        {hotel.address1 && hotel.address2 ? (
                          <p className="text-[11px] text-stone-500 mt-1 flex items-center gap-1">
                            <span>📍</span>
                            <span>{hotel.address1}{hotel.address2}</span>
                          </p>
                        ) : null}
                      </div>

                      {/* レビュー評価 */}
                      <div className="flex items-center gap-3 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100 text-xs">
                        <div className="flex items-center gap-1 text-amber-500 font-bold">
                          <span>★</span>
                          <span className="text-stone-900">{hotel.reviewAverage ? hotel.reviewAverage.toFixed(1) : "高評価"}</span>
                        </div>
                        {hotel.reviewCount ? (
                          <span className="text-stone-500 text-[11px]">
                            ({hotel.reviewCount.toLocaleString()}件のクチコミ)
                          </span>
                        ) : null}
                        {hotel.nearestStation ? (
                          <span className="text-[11px] text-stone-600 truncate ml-auto">
                            最寄: {hotel.nearestStation}駅
                          </span>
                        ) : null}
                      </div>

                      <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                        {hotel.hotelSpecial || ""}
                      </p>
                    </div>
                  </div>

                  {/* 予約ボタン */}
                  <div className="p-5 pt-0">
                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 text-xs md:text-sm font-bold text-white bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 hover:from-emerald-600 hover:to-teal-600 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
                    >
                      🌿 楽天トラベルで宿泊プラン・空室を見る
                    </a>
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-2 p-10 text-center text-stone-500 text-xs">
                提携宿の情報を読み込み中です。
              </div>
            )}
          </div>
        </section>

        {/* 京都の宿で記念日を最高にするマナー＆おもてなしの受け方 */}
        <section className="bg-gradient-to-br from-[#0c2e21] to-stone-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-emerald-800/60 space-y-6">
          <div className="border-b border-emerald-800/80 pb-4">
            <span className="text-[11px] font-bold tracking-widest text-emerald-300 uppercase">RYOKAN CONCIERGE</span>
            <h2 className="text-xl md:text-2xl font-black font-journal-serif text-white mt-1">
              大人の京都宿ステイをより豊かにする「3つの心得」
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs md:text-sm">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-emerald-300 block">1. 夕食の開始時間には遅れない</span>
              <p className="text-emerald-100/90 text-xs leading-relaxed">
                京懐石はお客様の食事ペースや着席時間に合わせて一品ずつ最上の温度で出されます。チェックイン時間や夕食スタート時刻をあらかじめ宿に伝え、ゆとりを持って入室するのが粋なマナーです。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-emerald-300 block">2. 苦手な食材やアレルギーは事前申告</span>
              <p className="text-emerald-100/90 text-xs leading-relaxed">
                出汁や旬素材にこだわる老舗旅館では、当日の急なメニュー変更が難しい場合があります。予約時の連絡事項で「生魚」「甲殻類」などのアレルギーやパートナーの好みを伝えておくと安心です。
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-emerald-300 block">3. 朝夕の静寂と庭園美を愛でる</span>
              <p className="text-emerald-100/90 text-xs leading-relaxed">
                木造建築や町家ならではの凛とした静けさ。朝の澄んだ空気の中で坪庭を眺めながらいただくお抹茶や朝粥は、都会では決して味わえない贅沢な癒やしを二人に届けてくれます。
              </p>
            </div>
          </div>
        </section>
      
        {/* Model Course Section */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              【1泊2日】おすすめモデルコース＆旅の過ごし方
            </h2>
          </div>
          <p className="text-stone-600 mb-8 text-sm md:text-base leading-relaxed">
            本特集の魅力を最大限に満喫するための理想的な1泊2日旅程モデルプランです。周辺の観光名所やグルメスポットとあわせて、無理のないスケジュールで最高の旅をお楽しみください。
          </p>
          <div className="space-y-6">
            <div className="border-l-2 border-amber-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded">1日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">出発〜チェックイン・夕食と名湯を満喫</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">13:30〜</strong> 現地到着後、周辺の散策や名物カフェ・観光スポットをのんびり観光。</li>
                <li>・<strong className="text-stone-800">15:00〜</strong> お宿へチェックイン。ウェルカムドリンクや特製スイーツを楽しみながら客室で一息。</li>
                <li>・<strong className="text-stone-800">16:30〜</strong> 夕暮れ時の露天風呂・サウナで日頃の疲れを癒やす極上の湯浴み。</li>
                <li>・<strong className="text-stone-800">18:30〜</strong> 地元厳選食材をふんだんに使用した旬の会席料理やディナーを堪能。</li>
                <li>・<strong className="text-stone-800">21:00〜</strong> 星空を仰ぐ夜の露天風呂やラウンジで贅沢な大人の時間を。</li>
              </ul>
            </div>
            <div className="border-l-2 border-teal-500 pl-4 md:pl-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="bg-teal-600 text-white text-xs font-bold px-2.5 py-1 rounded">2日目</span>
                <h3 className="font-bold text-stone-900 text-base md:text-lg">朝風呂〜朝食・お土産選びと帰路へ</h3>
              </div>
              <ul className="text-xs md:text-sm text-stone-600 space-y-2 leading-relaxed">
                <li>・<strong className="text-stone-800">07:00〜</strong> 朝の清々しい空気の中で目覚めの朝風呂・サウナ。</li>
                <li>・<strong className="text-stone-800">08:00〜</strong> 炊きたて地元産ごはんと郷土の味覚が並ぶこだわりの朝食。</li>
                <li>・<strong className="text-stone-800">10:00〜</strong> チェックアウト後、近隣の道の駅や特産品店でお土産選び。</li>
                <li>・<strong className="text-stone-800">12:00〜</strong> 地元で愛される名物ランチを堪能して、大満足の帰路へ。</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone-50 rounded-2xl p-6 md:p-10 border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
              よくある質問（FAQ）と旅のノウハウ
            </h2>
          </div>
          <div className="space-y-4">
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 予約に最適な時期やタイミングはいつ頃ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 露天風呂付き客室や特選料理プランは数ヶ月前から予約が埋まりやすいため、旅行日程が決まり次第2〜3ヶ月前の早期予約が最も確実です。楽天トラベルの限定クーポンや早期割引プランを活用するとお得に宿泊できます。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 車でのアクセスと公共交通機関のどちらが便利ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの主要旅館・リゾートホテルは最寄り駅から無料送迎バスを運行しています。周辺の観光名所や景勝地を巡る場合は、最寄り駅前でレンタカーを借りると移動がスムーズでおすすめです。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 食事のアレルギー対応や部屋食の指定は可能ですか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. 多くの宿泊施設で事前連絡によりアレルギー対応が可能です。部屋食や個室食事処プランはプラン予約時に指定するか、予約時の備考欄で宿へ相談することをおすすめします。
              </p>
            </details>
            <details className="bg-white p-4 md:p-6 rounded-xl border border-stone-200/60 group">
              <summary className="font-bold text-stone-900 cursor-pointer flex items-center justify-between text-sm md:text-base">
                <span>Q. 一人旅や子連れファミリーでの宿泊にも向いていますか？</span>
                <span className="text-amber-500 font-bold group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-3 text-xs md:text-sm text-stone-600 leading-relaxed">
                A. はい。一人旅歓迎プランや、家族向けの広い和洋室・貸切風呂完備の宿を厳選しています。プラン詳細の受入条件をご確認の上、安心してお申し込みください。
              </p>
            </details>
          </div>
        </section>

        {/* Internal Link Mesh: Related Features & Prefectures */}
        <section className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200/80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2.5 h-8 bg-amber-500 rounded-full" />
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              あわせて読みたい人気特集＆全国エリアガイド
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">

          </div>
          <div className="pt-6 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">人気の都道府県から宿を探す</h3>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/prefectures/nara"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                奈良県の宿・温泉
              </Link>
              <Link
                href="/prefectures/yamagata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                山形県の宿・温泉
              </Link>
              <Link
                href="/prefectures/niigata"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                新潟県の宿・温泉
              </Link>
              <Link
                href="/prefectures/hokkaido"
                className="text-xs px-3 py-1.5 rounded-lg bg-stone-100 hover:bg-amber-500 hover:text-white text-stone-700 transition font-medium"
              >
                北海道の宿・温泉
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
