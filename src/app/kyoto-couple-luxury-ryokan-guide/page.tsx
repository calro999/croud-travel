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
      </main>
    </div>
  );
}
