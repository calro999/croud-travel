import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/okinawa-miyakojima-irabu-kurima-stay/" },
  title: "沖縄・宮古島＆伊良部島・来間島：宮古ブルー・与那覇前浜＆伊良部大橋・宮古牛宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "東洋一の白い砂浜と透き通る宮古ブルー完全特化！東洋一美しい「与那覇前浜ビーチ」、絶景の無料橋「伊良部大橋」、下地島空港17END、来間島竜宮城展望台、シギラセブンマイルズリゾート、最高級宮古牛＆宮古島産マンゴー宿を徹底解説。",
  keywords: ["沖縄", "宮古島", "伊良部島", "来間島", "宮古ブルー", "与那覇前浜", "伊良部大橋"],
  openGraph: {
    title: "沖縄・宮古島＆伊良部島・来間島：宮古ブルー・与那覇前浜＆伊良部大橋・宮古牛宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "東洋一の白い砂浜と透き通る宮古ブルー完全特化！東洋一美しい「与那覇前浜ビーチ」、絶景の無料橋「伊良部大橋」、下地島空港17END、来間島竜宮城展望台、シギラセブンマイルズリゾート、最高級宮古牛＆宮古島産マンゴー宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "沖縄・宮古島＆伊良部島・来間島：宮古ブルー・与那覇前浜＆伊良部大橋・宮古牛宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "東洋一の白い砂浜と透き通る宮古ブルー完全特化！東洋一美しい「与那覇前浜ビーチ」、絶景の無料橋「伊良部大橋」、下地島空港17END、来間島竜宮城展望台、シギラセブンマイルズリゾート、最高級宮古牛＆宮古島産マンゴー宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["okinawa-miyakojima-irabu-kurima-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for okinawa-miyakojima-irabu-kurima-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "yonaha_maehama_beach_resort",
    "title": "1. 与那覇前浜ビーチ〜来間島・竜宮城展望台（「東洋一の美しさ」と称される白砂7km）",
    "timing": "通年（4月〜10月はビーチアクティビティ・冬は静寂の宮古ブルー）",
    "desc": "きめ細やかなパウダーサンドが約7km続く「与那覇前浜ビーチ（マイパマビーチ）」。来間大橋を渡って訪れる来間島の「竜宮城展望台」から見下ろす宮古ブルーのグラデーション。ビーチ直結のラグジュアリーリゾートホテル。",
    "spots": "与那覇前浜ビーチ（マリンアクティビティ・サンセット）、来間大橋、竜宮城展望台、パチャビーチ",
    "access": "宮古空港より車で約15分。下地島空港より車で約35分。",
    "tip": "与那覇前浜ビーチは、午前中の太陽が真上から差し込む時間帯が最も青の透明度が高く、夕方は水平線に沈むドラマチックな夕陽が楽しめます。"
  },
  {
    "key": "irabu_shimojishima_17end_stay",
    "title": "2. 伊良部大橋〜下地島空港17END・通り池（日本最長の無料橋と奇跡の幻の砂浜）",
    "timing": "通年（干潮時に現れる17ENDの白い砂紋は必見）",
    "desc": "宮古島と伊良部島を結ぶ全長3,540mの「伊良部大橋（通行無料の橋として日本最長）」。下地島空港北端の滑走路誘導路「17END（ワンセブンエンド）」。国の名勝・天然記念物の神秘の青い池「通り池」。",
    "spots": "伊良部大橋、下地島空港17END（干潮時の幻のビーチ）、通り池（人魚伝説・ダイビングスポット）、牧山展望台（サシバの形）",
    "access": "宮古空港より伊良部大橋経由で車約25分。下地島空港より車約5分。",
    "tip": "下地島空港17ENDへは、干潮時間帯（大潮の日がベスト）に合わせて訪れると、遠浅の海に白い砂紋が浮き上がる天国のような光景に出会えます。"
  },
  {
    "key": "miyakojima_beef_mango_luxury",
    "title": "3. 幻の黒毛和牛「宮古牛」＆シギラ黄金温泉（ミネラル豊富な牧草で育つ極上牛）",
    "timing": "通年（完熟宮古島マンゴーは6月下旬〜8月が旬）",
    "desc": "宮古島の大自然で育ち、流通量が少なく幻の和牛と呼ばれる「宮古牛」。とろけるようなサーロインステーキや握り寿司。糖度が高く濃厚な「完熟宮古島マンゴー」。南国植物に囲まれた天然温泉「シギラ黄金温泉」でのリラクゼーション。",
    "spots": "宮古牛炭火焼肉店・鉄板焼き、シギラセブンマイルズリゾート（シギラ黄金温泉・リフト）、うえのドイツ文化村",
    "access": "宮古島南部・シギラリゾートエリア。",
    "tip": "シギラリゾート内を走る「シギラペアリフト カギマナ」に乗ると、空中からエメラルドグリーンの海と南国の花々を見下ろす爽快な空中散歩が楽しめます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【沖縄・宮古島＆伊良部島・来間島】宮古ブルー・与那覇前浜＆伊良部大橋・宮古牛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "東洋一の白い砂浜と透き通る宮古ブルー完全特化！東洋一美しい「与那覇前浜ビーチ」、絶景の無料橋「伊良部大橋」、下地島空港17END、来間島竜宮城展望台、シギラセブンマイルズリゾート、最高級宮古牛＆宮古島産マンゴー宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/okinawa-miyakojima-irabu-kurima-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【沖縄・宮古島＆伊良部島・来間島】宮古ブルー・与那覇前浜＆伊良部大橋・宮古牛宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/okinawa-miyakojima-irabu-kurima-stay/" }
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
            MIYAKOJIMA & IRABU GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「沖縄・宮古島＆伊良部島・来間島」宮古ブルー・与那覇前浜＆伊良部大橋・宮古牛宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            どこまでも透き通る奇跡の海「宮古ブルー」と、パウダーサンドが続く「与那覇前浜ビーチ」。海の上を滑るように渡る全長3,540mの伊良部大橋。下地島空港17ENDのエメラルドグリーンの浅瀬。プライベートプール付きヴィラで極上の島時間を過ごす旅。
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
              📊 沖縄・宮古島＆伊良部島・来間島：宮古ブルー・与那覇前浜＆伊良部大橋・宮古牛宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「沖縄・宮古島＆伊良部島・来間島：宮古ブルー・与那覇前浜＆伊良部大橋・宮古牛宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. グレースヴィラ宮古島＜宮古島＞</td>
                <td className="p-3 text-stone-600">沖縄県宮古島市下地字嘉手苅283-5</td>
                <td className="p-3 text-stone-600">宮古空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　10台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4（10件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,540〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183727%2F183727.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 下地島コーラルホテル　＜伊良部島＞</td>
                <td className="p-3 text-stone-600">沖縄県宮古島市伊良部国仲925-1</td>
                <td className="p-3 text-stone-600">宮古島空港から車で30分</td>
                <td className="p-3 text-stone-600">有り　２０台無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.43（91件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,236〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147595%2F147595.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ＨＯＴＥＬ　Ｋｕｕ＜伊良部島＞</td>
                <td className="p-3 text-stone-600">沖縄県【本館】宮古島市伊良部前里添594-2　【Sarahama別館】宮古島市伊良部前里添1708-2</td>
                <td className="p-3 text-stone-600">宮古空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　本館24台、 別館10台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.29（73件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,850〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183958%2F183958.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテル　サウス　アイランド　＜伊良部島＞</td>
                <td className="p-3 text-stone-600">沖縄県宮古島市伊良部町伊良部1493-1</td>
                <td className="p-3 text-stone-600">宮古空港から車で25分♪下地島空港から車で10分♪</td>
                <td className="p-3 text-stone-600">★有り★　約10台無料　予約不要！</td>
                <td className="p-3 font-bold text-amber-600">★4.06（195件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,660〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130627%2F130627.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ウォーターマークホテル沖縄　宮古島＜伊良部島＞</td>
                <td className="p-3 text-stone-600">沖縄県宮古島市伊良部佐和田前原1725</td>
                <td className="p-3 text-stone-600">宮古空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　50台　1室につき1台無料　（予約不要）</td>
                <td className="p-3 font-bold text-amber-600">★4.41（249件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,265〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184118%2F184118.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. ｔｈｅ　ｒｅｓｃａｐｅ（ザ・リスケープ）＜宮古島＞</td>
                <td className="p-3 text-stone-600">沖縄県宮古島市城辺長間1901-1</td>
                <td className="p-3 text-stone-600">宮古空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.68（123件）</td>
                <td className="p-3 font-bold text-rose-600">¥21,220〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F171984%2F171984.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">グレースヴィラ宮古島＜宮古島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぐれーすヴぃらみやこじま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,540〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/183727/183727.jpg" alt="グレースヴィラ宮古島＜宮古島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【1日限定2組】最大8名まで宿泊できる1棟貸切ヴィラホテル。BBQ設備やジャグジーもございます</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県宮古島市下地字嘉手苅283-5 ／ 最寄り駅：宮古空港 ／ 交通案内：宮古空港より車で約13分、下地島空港より車で約30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　10台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「グレースヴィラ宮古島＜宮古島＞は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">下地島コーラルホテル　＜伊良部島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（しもじしまこーらるほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,236〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/147595/147595_room.jpg" alt="下地島コーラルホテル　＜伊良部島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★宮古空港から「伊良部大橋」を渡って車で30分♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県宮古島市伊良部国仲925-1 ／ 最寄り駅：主要駅 ／ 交通案内：宮古島空港から車で30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「下地島コーラルホテル　＜伊良部島＞は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＨＯＴＥＬ　Ｋｕｕ＜伊良部島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてる　くー）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,850〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/183958/183958.jpg" alt="ＨＯＴＥＬ　Ｋｕｕ＜伊良部島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>エメラルドグリーンに輝く青い海に囲まれた伊良部島に「2022年2月新築オープン♪」</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県【本館】宮古島市伊良部前里添594-2　【Sarahama別館】宮古島市伊良部前里添1708-2 ／ 最寄り駅：宮古空港 ／ 交通案内：下地島空港よりお車にて約10分、宮古島空港よりお車にて約30分　マップコード721 309 689*76</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　本館24台、 別館10台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの説明がまどろっこしく不快スタッフの説明がまどろっこしく、めんどくさかった。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hote…　2026-08-21 11:32:58投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル　サウス　アイランド　＜伊良部島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（さうす　あいらんど）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,660〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/130627/130627_room.jpg" alt="ホテル　サウス　アイランド　＜伊良部島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>宮古島空港から車で30分。徒歩10分の静かなビーチに新鮮な海鮮、沖縄島暮らしを愉しむ伊良部島滞在。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県宮古島市伊良部町伊良部1493-1 ／ 最寄り駅：主要駅 ／ 交通案内：宮古空港から車で25分♪下地島空港から車で10分♪</p>
                  <p><strong>【駐車場・マイカー利用】</strong>★有り★　約10台無料　予約不要！</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋のニオイと清掃状況に不満、対応も残念部屋に入ると男性用制汗剤のような強烈なニオイ。カビのニオイなのか室内にあった芳香剤のにおいなのかわからないがとにかくきつかった。布団カバーのキルトは…　2026-08-19 12:51:38投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ウォーターマークホテル沖縄　宮古島＜伊良部島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（うぉーたーまーくほてるおきなわ　みやこじま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,265〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/184118/184118.jpg" alt="ウォーターマークホテル沖縄　宮古島＜伊良部島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>日本の渚100選に選ばれた美しいビーチで、夕陽の名所ホテルより青い海も、夕陽も一望できます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県宮古島市伊良部佐和田前原1725 ／ 最寄り駅：宮古空港 ／ 交通案内：宮古島空港より車で約35分、みやこ下地島空港より車で約5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　50台　1室につき1台無料　（予約不要）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.33 ／ 立地 ★4.57 ／ 部屋 ★4.42 ／ 設備 ★4.26 ／ 風呂 ★4.39 ／ 食事 ★4.48</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「窓から宮古島の景色を感じられて最高窓からの眺めは宮古島を感じられてよかったですクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/v…　2026-10-09 10:50:11投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ｔｈｅ　ｒｅｓｃａｐｅ（ザ・リスケープ）＜宮古島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ざ　りすけーぷ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥21,220〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/171984/171984_kan1.jpg" alt="ｔｈｅ　ｒｅｓｃａｐｅ（ザ・リスケープ）＜宮古島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【特別な島体験】プライベートハイダウェイの贅沢、時間を五感で感じるザ・リスケープ</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県宮古島市城辺長間1901-1 ／ 最寄り駅：宮古空港 ／ 交通案内：宮古空港よりお車にて約１５分｜下地島空港から車で45分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝ヨガと健康朝食、プールを満喫した4日間静かな場所で朝ヨガに健康朝食、最高な4日間でした。プールも部屋のと大きなプールとたくさん入って楽しかったです。クチコミの詳細はこちらから　https:/…　2026-08-21 17:18:24投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！沖縄県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、沖縄県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">沖縄美ら海水族館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">本部半島の国営沖縄記念公園内にある世界最大級の水族館。巨大アクリルパネル越しに大水槽「黒潮の海」を泳ぐジンベエザメやナンヨウマンタのダイナミックな姿は必見です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">首里城公園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">かつて琉球王国の政治・外交・文化の中心であった世界遺産。朱塗りの守礼門や守礼の邦の精神、琉球独自のアジアと日本の融合した建築美を感じられます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">古宇利島（古宇利大橋）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">エメラルドグリーンの透き通る海の上に架かる全長1,960mの直線の橋。「恋の島」とも呼ばれ、古宇利オーシャンタワーやハートロックが人気を呼んでいます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">万座毛（まんざも）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「万人が座するに足る毛（草原）」が由来の景勝地。隆起サンゴ礁が侵食された象の鼻のような形状の断崖絶壁と、そこに打ち寄せる東シナ海の青い波が壮観です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 沖縄県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 沖縄県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="okinawa-miyakojima-irabu-kurima-stay" />
</div>
  );
}
