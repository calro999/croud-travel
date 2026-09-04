import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import SpecialCouponBanner from "@/app/components/SpecialCouponBanner";

export const metadata: Metadata = {
  title: "【沖縄 雨の日の観光完全ガイド】美ら海水族館・DMMかりゆし・やちむん通り陶芸体験＆屋内プール付きホテル",
  description:
    "スコールや台風でも旅行を諦めない！世界最大級の大水槽「美ら海水族館」、映像美の「DMMかりゆし水族館」、壺屋やちむん通りシーサー作り、屋内温水プール完備の大型リゾートホテル徹底比較。",
  keywords: [
    "沖縄 雨の日 観光",
    "美ら海水族館 雨の日",
    "DMMかりゆし水族館 インドア",
    "沖縄 シーサー作り 体験 室内",
    "壺屋やちむん通り 雨宿り",
    "沖縄 屋内プール ホテル",
    "沖縄 雨の日 ホテル 楽天トラベル"
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
      return data["okinawa-rainy-day-indoor-aquarium-craft-guide"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for okinawa-rainy-day-indoor-aquarium-craft-guide", e);
  }
  return [];
}

export default function OkinawaRainyDayIndoorAquariumCraftGuidePage() {
  const hotels = loadHotels();

  // 沖縄の雨・スコールを吹き飛ばす4大インドアエンタメ
  const indoorAttractions = [
    {
      badge: "北部・世界最大級",
      title: "沖縄美ら海水族館「黒潮の海」",
      highlight: "巨大ジンベエザメとナンヨウマンタが舞う全天候型大水槽",
      description:
        "館内は完全屋内で空調完備。外が大雨や強風でも、深さ10m・幅35mの超巨大アクリルパネルの前に座れば、まるで深海の中に溶け込んだような圧倒的スケール感を堪能できます。カフェ「オーシャンプルー」で水槽横の特等席を確保するのが雨の日の最高の過ごし方。",
      category: "全天候・北部名所"
    },
    {
      badge: "南部・那覇空港近接",
      title: "DMMかりゆし水族館",
      highlight: "最新デジタル映像とリアル生物が融合した新感覚インドア空間",
      description:
        "那覇空港から車で約20分の「イーアス沖縄豊崎」直結。ガラスの床の上を歩いて足元の海を見下ろす体験や、亜熱帯の森を再現したエリアでナマケモノやカピバラと至近距離で触れ合えます。天候に一切左右されず、最終日のフライト前にも最適。",
      category: "ショッピングモール直結"
    },
    {
      badge: "那覇・伝統文化",
      title: "壺屋やちむん通り 陶芸＆シーサー絵付け体験",
      highlight: "雨音響く琉球古民家で世界にひとつの守り神を創る",
      description:
        "那覇の中心部にありながら、石畳と赤瓦屋根のノスタルジックな風景が残る壺屋。雨の日は伝統工房の室内で、ろくろを回すやちむん（焼き物）作りや、漆喰シーサーの絵付けに夢中になれます。屋根付き店舗が密集しているため、やちむんの器巡りもスムーズ。",
      category: "屋根付き工房体験"
    },
    {
      badge: "中部・巨大モール",
      title: "イオンモール沖縄ライカム＆屋根付きスポット",
      highlight: "巨大アクアリウム水槽のある南国最大級インドアリゾート",
      description:
        "館内1階のエントランスには約100トンの大水槽「ライカムアクアリウム」が鎮座し、色鮮やかな熱帯魚がお出迎え。雨の日でも丸一日ショッピング、グルメ、映画、室内アスレチックを満喫できる全天候型オアシス。",
      category: "雨の日ドライブ終着点"
    }
  ];

  // 雨の日モデルコース（北部コース vs 那覇・南部コース）
  const courseOptions = [
    {
      title: "【プランA：美ら海＆インドア充実コース】（名護〜本部）",
      steps: [
        "10:00 那覇出発、沖縄自動車道で許田ICへ",
        "11:30 美ら海水族館にチェックイン。大水槽前カフェでランチ＆ジンベエザメ給餌見学",
        "14:30 名護パイナップルパークへ移動（自動運転カート＆全天候ハウスで雨知らず）",
        "16:30 屋内温水プール完備のリゾートホテルへ。雨を気にせずスパ＆ディナー"
      ]
    },
    {
      title: "【プランB：那覇・南部 濡れずに巡るカルチャー＆水族館コース】",
      steps: [
        "10:00 壺屋やちむん通りの工房でシーサー手作り体験（約90分）",
        "12:00 国際通り・平和通り商店街（全天候アーケード）で沖縄そば＆サーターアンダギー",
        "14:00 DMMかりゆし水族館へ。デジタル空間と動物ふれあい体験を満喫",
        "17:00 イーアス沖縄豊崎で免税ショッピング＆美らSUNビーチ沿いカフェでサンセット待機"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-cyan-950/20 text-slate-800 selection:bg-cyan-500 selection:text-white pb-24">
      {/* ヒーローセクション（Cyan / ディープオーシャンブルー系統） */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-cyan-950 to-slate-900 text-white py-16 sm:py-24 border-b border-cyan-800/40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(6,182,212,0.22),transparent_65%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold tracking-wider mb-6">
            <span>🐠 台風・スコールでも大丈夫！沖縄全天候型インドア完全攻略</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight tracking-tight mb-6">
            【沖縄 雨の日の観光完全ガイド】<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-teal-200">
              美ら海水族館・DMMかりゆし・シーサー陶芸＆屋内プールホテル
            </span>
          </h1>

          <p className="text-cyan-100/90 text-base sm:text-lg leading-relaxed max-w-3xl mb-8">
            南国沖縄の青い空と海を楽しみにしていたのに、滞在予報が雨マークや台風接近…。
            でも、落胆する必要は全くありません！沖縄には世界最大級の屋内水族館をはじめ、
            五感で楽しむデジタルアクアリウム、伝統のシーサー陶芸体験、巨大ショッピングモール、
            そして雨天時でも思いきり泳げる屋内温水プール＆温泉を備えた大型リゾートが目白押しです。
          </p>

          {/* 内部リンクバナー */}
          <div className="flex flex-wrap gap-3">
            <Link
              href="/okinawa-travel-budget-plan"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-cyan-900/80 hover:bg-cyan-800 border border-cyan-500/50 rounded-xl text-cyan-200 text-xs sm:text-sm font-semibold transition"
            >
              <span>💰 沖縄旅行の費用予算プラン（2泊3日・3泊4日）</span>
              <span>→</span>
            </Link>
            <Link
              href="/okinawa-family-trip-how-many-nights-budget"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 rounded-xl text-slate-300 text-xs sm:text-sm font-semibold transition"
            >
              <span>👨‍👩‍👧 子連れ沖縄旅行は何泊がおすすめ？予算と日程</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 楽天トラベルクーポンプロモーション */}
      <section className="max-w-5xl mx-auto px-4 -mt-8 relative z-20">
        <SpecialCouponBanner />
      </section>

      {/* コンテンツ本体 */}
      <div className="max-w-5xl mx-auto px-4 mt-16 space-y-16">
        {/* セクション1：雨の日4大インドアアトラクション */}
        <section>
          <div className="border-l-4 border-cyan-500 pl-4 mb-8">
            <span className="text-cyan-600 text-xs font-black tracking-widest uppercase">ALL-WEATHER ATTRACTIONS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              雨だからこそ行く価値がある！沖縄4大インドアエンタメ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {indoorAttractions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-cyan-100 rounded-3xl p-6 shadow-md hover:shadow-xl hover:border-cyan-400 transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
                      {item.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 leading-snug">{item.title}</h3>
                  <div className="text-xs font-bold text-cyan-700 mb-3">🌊 {item.highlight}</div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">{item.description}</p>
                </div>
                <div className="pt-3 border-t border-cyan-50 text-xs font-semibold text-cyan-800 flex items-center justify-between">
                  <span>✓ 屋内空調完備・雨天決行</span>
                  <span className="text-slate-400 text-[11px]">傘いらずで楽しめます</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* セクション2：選べる2大雨天モデルコース */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-cyan-900 shadow-xl">
          <div className="border-l-4 border-cyan-400 pl-4 mb-8">
            <span className="text-cyan-400 text-xs font-black tracking-widest uppercase">RAINY DAY PLANS</span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
              天候に合わせて選べる！沖縄雨の日ドライブコース2選
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courseOptions.map((course, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-cyan-900/60 rounded-2xl p-6">
                <h3 className="text-base sm:text-lg font-bold text-cyan-300 mb-4 pb-2 border-b border-cyan-800/80">
                  {course.title}
                </h3>
                <ol className="space-y-3">
                  {course.steps.map((step, sIdx) => (
                    <li key={sIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-700/60 flex items-center justify-center shrink-0 text-[11px] font-mono font-bold mt-0.5">
                        {sIdx + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </section>

        {/* セクション3：雨天でも最高に遊べるホテル・リゾート厳選 */}
        <section>
          <div className="border-l-4 border-cyan-500 pl-4 mb-8">
            <span className="text-cyan-600 text-xs font-black tracking-widest uppercase">HOTEL & RESORT</span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              雨の日も館内で遊び尽くす！屋内プール＆立地抜群リゾート
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              屋根付きアーケード直結ホテルや、屋内温水プール・スパ完備の大型リゾートを厳選。
            </p>
          </div>

          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hotels.map((hotel) => {
                const minCharge = hotel.hotelMinCharge ? hotel.hotelMinCharge.toLocaleString() : null;
                return (
                  <div
                    key={hotel.hotelNo}
                    className="flex flex-col justify-between bg-white border border-cyan-200/90 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:border-cyan-400 transition group"
                  >
                    <div>
                      {hotel.hotelImageUrl && (
                        <div className="h-48 overflow-hidden relative">
                          <img
                            src={hotel.hotelImageUrl}
                            alt={hotel.hotelName}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-cyan-300 border border-cyan-500/40">
                            アクセス: {hotel.nearestStation || "那覇空港"}
                          </div>
                          {hotel.reviewAverage && (
                            <div className="absolute top-3 right-3 bg-cyan-600 text-white px-2.5 py-1 rounded-full text-xs font-black shadow flex items-center gap-1">
                              <span>★</span>
                              <span>{hotel.reviewAverage.toFixed(2)}</span>
                            </div>
                          )}
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition">
                          {hotel.hotelName}
                        </h3>
                        <p className="text-xs text-slate-500 mb-3">
                          {hotel.address1} {hotel.address2}
                        </p>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
                          {hotel.hotelSpecial || "全天候型の快適なステイ。雨の日も館内施設や近隣スポットで充実した時間をお過ごしいただけます。"}
                        </p>
                        {hotel.access && (
                          <div className="text-[11px] text-cyan-900 bg-cyan-50/80 p-2.5 rounded-xl border border-cyan-200/60 mb-2">
                            🚗 {hotel.access}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="p-6 pt-0 border-t border-cyan-100 mt-2 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate-400 block">参考最安料金（目安）</span>
                        <span className="text-lg font-black text-cyan-600">
                          {minCharge ? `¥${minCharge}〜` : "料金確認"}
                        </span>
                      </div>
                      <a
                        href={hotel.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-cyan-500/20 transition transform hover:-translate-y-0.5"
                      >
                        <span>空室・宿泊プランを見る</span>
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-8 text-center text-slate-400 border border-slate-200">
              現在、沖縄エリアのおすすめ宿泊プランを読み込み中です。
            </div>
          )}
        </section>

        {/* セクション4：沖縄の雨天ドライブ注意点＆快適テク */}
        <section className="bg-gradient-to-r from-cyan-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
            <span>⚠️</span> 沖縄の雨・スコール時レンタカードライブの必須知識
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm text-slate-300">
            <div className="p-4 bg-slate-800/80 rounded-2xl border border-cyan-800/50">
              <strong className="text-cyan-300 block mb-1 text-sm">① 琉球石灰岩のアスファルトは超滑る！</strong>
              沖縄の道路舗装には石灰岩が含まれており、雨が降り始めると油を引いたように滑りやすくなります。車間距離を本土の1.5倍取りましょう。
            </div>
            <div className="p-4 bg-slate-800/80 rounded-2xl border border-cyan-800/50">
              <strong className="text-cyan-300 block mb-1 text-sm">② スコールは30分で止むことが多い</strong>
              突然の猛烈な雨（カタブイ）は局地的なものが大半。雨雲レーダーを見てカフェや道の駅で30分雨宿りすれば、すぐに晴れ間が戻ることも。
            </div>
            <div className="p-4 bg-slate-800/80 rounded-2xl border border-cyan-800/50">
              <strong className="text-cyan-300 block mb-1 text-sm">③ 屋根付き立体駐車場のある施設を中継</strong>
              ライカムや那覇メインプレイス、豊崎イーアスなど、屋根付き立体駐車場完備の施設をルートに挟むと、乗り降りで一切濡れません。
            </div>
          </div>
        </section>

        {/* 内部リンク回遊 */}
        <div className="pt-8 border-t border-cyan-200/80 text-center">
          <p className="text-xs text-slate-500 mb-3">あわせて読みたい沖縄旅行のお役立ちガイド</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/okinawa-travel-budget-plan"
              className="text-xs sm:text-sm font-semibold text-cyan-700 hover:text-cyan-800 underline underline-offset-4"
            >
              【沖縄旅行 費用】2泊3日・3泊4日いくらかかる？飛行機・レンタカー・ホテル総額
            </Link>
            <span className="text-slate-400">|</span>
            <Link
              href="/okinawa-family-trip-how-many-nights-budget"
              className="text-xs sm:text-sm font-semibold text-cyan-700 hover:text-cyan-800 underline underline-offset-4"
            >
              【子連れ沖縄旅行 何泊がベスト？】家族旅行の費用とおすすめモデルコース
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
