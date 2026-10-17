import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/hyogo-awaji-naruto-whirlpool-stay/" },
  title: "兵庫・淡路島＆鳴門海峡：うずしおクルーズ・淡路牛＆玉ねぎ・オーシャンビュー宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "関西屈指のリゾートアイランド・兵庫淡路島エリア完全特化！世界最大級の「鳴門の渦潮」クルーズ、明石海峡大橋、ニジゲンノモリ、淡路島玉ねぎ＆淡路牛・由良ウニ・3年とらふぐを味わう絶景温泉ホテルを徹底解説。",
  keywords: ["兵庫", "淡路島", "鳴門海峡", "うずしおクルーズ", "淡路牛", "玉ねぎ", "オーシャンビュー宿"],
  openGraph: {
    title: "兵庫・淡路島＆鳴門海峡：うずしおクルーズ・淡路牛＆玉ねぎ・オーシャンビュー宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "関西屈指のリゾートアイランド・兵庫淡路島エリア完全特化！世界最大級の「鳴門の渦潮」クルーズ、明石海峡大橋、ニジゲンノモリ、淡路島玉ねぎ＆淡路牛・由良ウニ・3年とらふぐを味わう絶景温泉ホテルを徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "兵庫・淡路島＆鳴門海峡：うずしおクルーズ・淡路牛＆玉ねぎ・オーシャンビュー宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "関西屈指のリゾートアイランド・兵庫淡路島エリア完全特化！世界最大級の「鳴門の渦潮」クルーズ、明石海峡大橋、ニジゲンノモリ、淡路島玉ねぎ＆淡路牛・由良ウニ・3年とらふぐを味わう絶景温泉ホテルを徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hyogo-awaji-naruto-whirlpool-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hyogo-awaji-naruto-whirlpool-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "awaji_naruto_whirlpool_view",
    "title": "1. 南あわじ・福良港〜鳴門海峡（世界一の渦潮を間近で体感するうずしおクルーズ）",
    "timing": "通年（春と秋の大潮の時期は直径最大20mの巨大渦潮が出現）",
    "desc": "瀬戸内海と太平洋の潮の干満差によって生まれる世界最大級の自然現象「鳴門の渦潮」。「うずしおクルーズ（咸臨丸・日本丸）」に乗船して、足元で轟音とともに巻く大迫力の渦潮を体感。大鳴門橋を見下ろす岬の温泉。",
    "spots": "うずしおクルーズ（福良港発着）、道の駅うずしお（大鳴門橋展望台・あわじ島バーガー）、うずの丘 大鳴門橋記念館（おっ玉葱オブジェ）",
    "access": "神戸・三宮より高速バスで約80分「福良」下車。各旅館無料送迎あり。",
    "tip": "「道の駅うずしお」の「あわじ島オニオンビーフバーガー」は、全国ご当地バーガーグランプリ1位に輝いた必食グルメです。"
  },
  {
    "key": "awaji_ocean_infinity",
    "title": "2. 洲本温泉・海岸フロント（紀淡海峡を望むインフィニティ展望露天風呂）",
    "timing": "通年（海から昇る感動の朝日サンライズと夜の波音）",
    "desc": "淡路島最大の温泉郷「洲本温泉」。「ホテルニューアワジ」をはじめとする海岸沿いの名門リゾート。海と空と湯船がひとつに溶け合うインフィニティ露天風呂から、紀淡海峡を行き交う船や朝日の絶景を鑑賞。",
    "spots": "洲本城跡（三熊山山頂・紀淡海峡パノラマ）、大浜海水浴場、洲本レトロこみち",
    "access": "三宮・大阪駅より高速バス「洲本高速バスセンター」行きで約80〜100分。各宿送迎あり。",
    "tip": "「洲本レトロこみち」は城下町の古民家を再生したお洒落なカフェやジェラート店、雑貨屋が並ぶ人気の散策小路です。"
  },
  {
    "key": "awaji_beef_onion_gourmet",
    "title": "3. 淡路島三大美食づくし（淡路牛ステーキ・甘い淡路玉ねぎ・淡路島3年とらふぐ）",
    "timing": "通年（冬期：11月〜3月の淡路島3年とらふぐ、夏の由良赤ウニ）",
    "desc": "御食国（みけつくに）として朝廷に食材を納めてきた食の宝庫・淡路島。糖度が高く甘い「淡路島玉ねぎ」のステーキ、神戸牛の素牛となる「淡路牛」、鳴門の激流で3年間育てた濃厚な旨味の「淡路島3年とらふぐ」を堪能。",
    "spots": "淡路ハイウェイオアシス（明石海峡大橋絶景）、ニジゲンノモリ（県立淡路島公園）、クラフトサーカス",
    "access": "神戸淡路鳴門自動車道沿線。",
    "tip": "淡路島3年とらふぐは、通常の2年物より一回り大きく育ち、白子や身の締まり・濃厚な旨味が段違いの冬の最高峰グルメです。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【兵庫・淡路島＆鳴門海峡】うずしおクルーズ・淡路牛＆玉ねぎ・オーシャンビュー宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "関西屈指のリゾートアイランド・兵庫淡路島エリア完全特化！世界最大級の「鳴門の渦潮」クルーズ、明石海峡大橋、ニジゲンノモリ、淡路島玉ねぎ＆淡路牛・由良ウニ・3年とらふぐを味わう絶景温泉ホテルを徹底解説。",
    "url": "https://croud-travel.pages.dev/hyogo-awaji-naruto-whirlpool-stay/",
    "publisher": {
      "@type": "Organization",
      "name": "日本全国・旅宿クラウド",
      "logo": { "@type": "ImageObject", "url": "https://croud-travel.pages.dev/icon.png" }
    }
  };
  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://croud-travel.pages.dev" },
      { "@type": "ListItem", "position": 2, "name": "【兵庫・淡路島＆鳴門海峡】うずしおクルーズ・淡路牛＆玉ねぎ・オーシャンビュー宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/hyogo-awaji-naruto-whirlpool-stay/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            AWAJI ISLAND RESORT GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「兵庫・淡路島＆鳴門海峡」うずしおクルーズ・淡路牛＆玉ねぎ・オーシャンビュー宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            明石海峡大橋を渡れば広がる青い海と緑の島「淡路島」。鳴門海峡で激しく渦巻く世界最大級の「うずしお」。波打ち際のインフィニティ温泉露天風呂から海を眺め、甘み豊かな淡路島玉ねぎと淡路牛ステーキに舌鼓を打つリゾートへ。
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-emerald-950/80 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 観光・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ見どころ・スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 満足度を高める滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded">
                              ¥{Number(hotel.hotelMinCharge).toLocaleString()}〜
                            </span>
                          )}
                        </div>

                        <div className="p-4 space-y-2">
                          {hotel.reviewAverage > 0 && (
                            <div className="flex items-center justify-between text-[9px] font-bold text-amber-600">
                              <span>⭐ {hotel.reviewAverage}点（{hotel.reviewCount}件）</span>
                            </div>
                          )}
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-emerald-950/70 line-clamp-2 font-medium">
                              {hotel.hotelSpecial}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 pt-0">
                        <a
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで宿泊プラン・空室を見る
                        </a>
                      </div>
                    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 兵庫・淡路島＆鳴門海峡：うずしおクルーズ・淡路牛＆玉ねぎ・オーシャンビュー宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「兵庫・淡路島＆鳴門海峡：うずしおクルーズ・淡路牛＆玉ねぎ・オーシャンビュー宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-xl overflow-hidden border border-stone-200">
              <thead>
                <tr className="bg-stone-900 text-white font-bold">
                  <th className="p-3">宿名</th>
                  <th className="p-3">所在地</th>
                  <th className="p-3">最寄り駅・交通</th>
                  <th className="p-3">駐車場情報</th>
                  <th className="p-3">楽天評価</th>
                  <th className="p-3">最安目安</th>
                  <th className="p-3">予約・詳細</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">1. 南あわじ温泉郷　うずしお温泉　淡路島海上ホテル</td>
                <td className="p-3 text-stone-600">兵庫県南あわじ市福良甲21-1</td>
                <td className="p-3 text-stone-600">明石海峡大橋海峡　垂水ＪＣＴより車で約１時間（６７ｋｍ）</td>
                <td className="p-3 text-stone-600">有り　70台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.16（926件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52574%2F52574.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ベイリゾートホテル　鳴門海月</td>
                <td className="p-3 text-stone-600">徳島県鳴門市鳴門町土佐泊浦福池65-7</td>
                <td className="p-3 text-stone-600">鳴門駅周辺</td>
                <td className="p-3 text-stone-600">有３０台　無料　予約不要。当館まではアクセスページに掲載の写真付き道順をご覧ください</td>
                <td className="p-3 font-bold text-amber-600">★4.45（3088件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17766%2F17766.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 洲本温泉　淡路インターナショナルホテル　ザ・サンプラザ　＜淡路島＞</td>
                <td className="p-3 text-stone-600">兵庫県洲本市小路谷1279-13</td>
                <td className="p-3 text-stone-600">洲本駅周辺</td>
                <td className="p-3 text-stone-600">有り/無料　　　客室内ネット接続：Wi-Fi/無料　ホテル・旅館100選37年連続受賞</td>
                <td className="p-3 font-bold text-amber-600">★4.42（3068件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9104%2F9104.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 洲本温泉　ホテルニューアワジ別亭　淡路夢泉景　＜淡路島＞</td>
                <td className="p-3 text-stone-600">兵庫県洲本市小路谷1052-2</td>
                <td className="p-3 text-stone-600">三ノ宮駅周辺</td>
                <td className="p-3 text-stone-600">有り（無料）</td>
                <td className="p-3 font-bold text-amber-600">★4.66（1558件）</td>
                <td className="p-3 font-bold text-rose-600">¥16,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17856%2F17856.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 淡路島リゾートホテル　Ｄｉｏｓ　Ｈｏｔｅｌ　＾</td>
                <td className="p-3 text-stone-600">兵庫県淡路市志筑3111-38　Ｈｏｔｅｌ　Ｄｉｏｓ</td>
                <td className="p-3 text-stone-600">舞子駅周辺</td>
                <td className="p-3 text-stone-600">有り</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">¥10,652〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F186538%2F186538.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 淡路島洲本温泉　海月舘</td>
                <td className="p-3 text-stone-600">兵庫県洲本市海岸通1-3-11</td>
                <td className="p-3 text-stone-600">舞子駅周辺</td>
                <td className="p-3 text-stone-600">有り　50台（乗用車）　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.3（4526件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1675%2F1675.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 各宿の宿泊者リアルクチコミ・客室イメージ・項目別評価データ
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南あわじ温泉郷　うずしお温泉　淡路島海上ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（みなみあわじおんせんきょう　うずしおおんせん　あわじしまかいじょうほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/52574/52574_syo.jpg" alt="南あわじ温泉郷　うずしお温泉　淡路島海上ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>淡路島・福良湾が目の前！全室で夕日と海が見え、旬食材を取り入れた会席料理と温泉と当館専用釣り桟橋！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県南あわじ市福良甲21-1 ／ 最寄り駅：主要駅 ／ 交通案内：明石海峡大橋海峡　垂水ＪＣＴより車で約１時間（６７ｋｍ）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　70台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.18 ／ 立地 ★4.3 ／ 部屋 ★4.13 ／ 設備 ★3.85 ／ 風呂 ★3.94 ／ 食事 ★4.32</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「夕焼けは綺麗だが部屋食の対応が残念6階の部屋でお天気も良く、夕焼けがとても綺麗でした。夕食は、部屋食でしたが人手が足りないのか、お酒の注文も、部屋から出て配膳の所に言いに行ったり、ご飯を食べる…　2026-10-09 17:02:57投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ベイリゾートホテル　鳴門海月</h3>
                  <span className="text-xs text-stone-400 ml-2">（なるとかいげつ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/17766/17766_kan.jpg" alt="ベイリゾートホテル　鳴門海月 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>部屋食で鳴門の会席を♪鳴門うず潮に一番近い景色に感動の旅館</p>
                  <p><strong>【所在地・アクセス】</strong>〒 徳島県鳴門市鳴門町土佐泊浦福池65-7 ／ 最寄り駅：鳴門 ／ 交通案内：高速道路　鳴門北ICより車で６分。高速バス鳴門公園口より徒歩10分。大塚美術館バス停などからシャトルバス送迎有。要予約</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有３０台　無料　予約不要。当館まではアクセスページに掲載の写真付き道順をご覧ください</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「手入れの行き届いた空間と充実したサービス建物自体はふるいようですが、手入れと管理が行き届いていて不便なく過ごせました。周りにあまり店や食事処がないので、立地があまりよくないのかもしれませんが、なる…　2026-08-20 06:12:14投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">洲本温泉　淡路インターナショナルホテル　ザ・サンプラザ　＜淡路島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（すもとおんせん　あわじいんたーなしょなるほてる　ざ・さんぷらざ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9104/9104_w.jpg" alt="洲本温泉　淡路インターナショナルホテル　ザ・サンプラザ　＜淡路島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>海を一望するオーシャンビューに包まれ、四季の移ろいを五感で味わう、特別な旅を。洲本温泉うるおいの湯。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県洲本市小路谷1279-13 ／ 最寄り駅：洲本 ／ 交通案内：大阪駅より高速バス120分/三宮駅より高速バス80分/神戸淡路鳴門道洲本ICより15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り/無料　　　客室内ネット接続：Wi-Fi/無料　ホテル・旅館100選37年連続受賞</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.53 ／ 立地 ★4.55 ／ 部屋 ★4.33 ／ 設備 ★4.21 ／ 風呂 ★4.38 ／ 食事 ★4.57</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「豪華な部屋食と朝日が最高部屋食で高齢の母でも安心して食べれるよう椅子に座って食事が出来、助かったのと、すごく豪華な食事に感動しましたお刺身が大量盛りで美味しかったです。朝食もミニお重で可愛く盛…　2026-10-10 09:07:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">洲本温泉　ホテルニューアワジ別亭　淡路夢泉景　＜淡路島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（にゅーあわじ　べってい　あわじゆめせんけい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥16,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/17856/17856_room.jpg" alt="洲本温泉　ホテルニューアワジ別亭　淡路夢泉景　＜淡路島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>見たかった海がここにある。朝陽の絶景を眺めるインフィニティバスで海・空・湯の一体感にどっぷりと。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県洲本市小路谷1052-2 ／ 最寄り駅：三ノ宮 ／ 交通案内：車:洲本ICから15分／高速バス:大阪120分・三宮80分で洲本BCへ</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（無料）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お料理を持ってきてくださった男性の方。ありがとうございます。大変感じがよかったです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/…　2026-08-22 13:05:02投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">淡路島リゾートホテル　Ｄｉｏｓ　Ｈｏｔｅｌ　＾</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,652〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/186538/186538.jpg" alt="淡路島リゾートホテル　Ｄｉｏｓ　Ｈｏｔｅｌ　＾ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>プレオープン中！！２０２３年９月１日オープン！地元企業だからこそ提供できる強みがそこにある。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県淡路市志筑3111-38　Ｈｏｔｅｌ　Ｄｉｏｓ ／ 最寄り駅：舞子 ／ 交通案内：舞子駅から車で約４５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「淡路島リゾートホテル　Ｄｉｏｓ　Ｈｏｔｅｌ　＾は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">淡路島洲本温泉　海月舘</h3>
                  <span className="text-xs text-stone-400 ml-2">（すもとおんせん　かいげつかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1675/1675_heya.jpg" alt="淡路島洲本温泉　海月舘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>《楽天アワード１２年連続受賞の温泉宿≫赤ちゃんお子様歓迎の宿☆立地条件№１☆ビーチ目の前☆</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県洲本市海岸通1-3-11 ／ 最寄り駅：舞子 ／ 交通案内：洲本高速バスターミナルより徒歩5分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　50台（乗用車）　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「海月館さんに宿泊するためだけに淡路島に来たい!夏休みの思い出に淡路島へ...とただ毎年恒例の夏休みの思い出のつもりでした。フロリックシーアドベンチャーパークとニジゲンノモリがメインでした。…　2026-08-22 22:46:20投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！兵庫県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、兵庫県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">国宝 姫路城（白鷺城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">鮮やかな白漆喰の城壁が羽ばたく白鷺のように美しい日本初のユネスコ世界文化遺産。大天守をはじめ保存状態が完璧な城郭建築の最高峰です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">神戸ポートタワー・ハーバーランド</h3>
                <p className="text-xs text-stone-600 leading-relaxed">神戸港のウォーターフロントエリア。赤いつづみの形をしたポートタワーやメリケンパークの夜景、海辺のショッピングモールがロマンチックです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/161030_Kinosaki-Onsen_Station_Toyooka_Hyogo_pref_Japan01bs3.jpg/1280px-161030_Kinosaki-Onsen_Station_Toyooka_Hyogo_pref_Japan01bs3.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="城崎温泉（外湯めぐり）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">城崎温泉（外湯めぐり）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">大谷川沿いに柳並木と木造旅館が並ぶ、1300年の歴史を持つ名湯。「一の湯」「御所の湯」など7つの個性豊かな外湯を浴衣姿で巡る街歩きが魅力です。 城崎温泉駅（きのさきおんせんえき）は、兵庫県豊岡市城崎町今津字稗田にある、西日本旅客鉄道（JR西日本）山陰本線の駅である。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">竹田城跡（天空の城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">標高353mの古城山山頂に築かれた山城遺跡。秋の早朝には雲海に包まれ、まるで空に浮かんでいるかのような幻想的な景色から「天空の城」と呼ばれます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 兵庫県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 兵庫県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* 47都道府県トップへのリンク */}
      <div className="text-center pt-8">
        <Link
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="hyogo-awaji-naruto-whirlpool-stay" />
</div>
  );
}
