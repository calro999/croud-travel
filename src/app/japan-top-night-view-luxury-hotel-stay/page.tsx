import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/japan-top-night-view-luxury-hotel-stay/" },
  title: "日本三大夜景＆摩天楼パノラマ宿：函館・長崎・神戸・横浜・東京高層ホテル 厳選ガイド",
  description: "息を呑む1000万ドルの夜景完全特化！函館山を望むベイサイド、長崎稲佐山のすり鉢状パノラマ、神戸六甲山・ハーバーランド、横浜みなとみらい、東京ベイエリア高層階客室の展望露天風呂ホテルを徹底解説。",
  keywords: ["日本三大夜景", "摩天楼パノラマ宿", "函館", "長崎", "神戸", "横浜", "東京高層ホテル"],
  openGraph: {
    title: "日本三大夜景＆摩天楼パノラマ宿：函館・長崎・神戸・横浜・東京高層ホテル 厳選ガイド",
    description: "息を呑む1000万ドルの夜景完全特化！函館山を望むベイサイド、長崎稲佐山のすり鉢状パノラマ、神戸六甲山・ハーバーランド、横浜みなとみらい、東京ベイエリア高層階客室の展望露天風呂ホテルを徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "日本三大夜景＆摩天楼パノラマ宿：函館・長崎・神戸・横浜・東京高層ホテル 厳選ガイド",
    description: "息を呑む1000万ドルの夜景完全特化！函館山を望むベイサイド、長崎稲佐山のすり鉢状パノラマ、神戸六甲山・ハーバーランド、横浜みなとみらい、東京ベイエリア高層階客室の展望露天風呂ホテルを徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-top-night-view-luxury-hotel-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-top-night-view-luxury-hotel-stay", e);
  }
  return {};
}

export default function ScenicViewHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hakodate_nagasaki_nightview",
    "title": "1. 函館山＆長崎稲佐山（世界新三大夜景と扇状に広がる光の絨毯）",
    "timing": "通年（日没後30分〜1時間の「マジックアワー」が最も幻想的）",
    "desc": "津軽海峡と函館湾に挟まれたくびれが美しい「函館山からの夜景」。すり鉢状の地形に家々の明かりが立体的に煌めく「長崎・稲佐山からの夜景（世界新三大夜景）」。客室や屋上展望台から光の海を見下ろす贅沢。",
    "spots": "函館山山頂展望台、長崎稲佐山山頂展望テラス、グラバー園ライトアップ、鍋冠山公園",
    "access": "函館駅・長崎駅周辺から車・ロープウェイで約10〜15分。",
    "tip": "日没の20分前頃から部屋のカーテンを開けて待機すると、空が深い青から紫へと変わり街の灯りが一斉に点灯する感動的な瞬間を見届けられます。"
  },
  {
    "key": "kobe_yokohama_harbor_nightview",
    "title": "2. 神戸ハーバーランド＆横浜みなとみらい（海と光が織りなす1000万ドルの港夜景）",
    "timing": "通年（クリスマス・年末年始・イルミネーション期間はさらに華やか）",
    "desc": "ポートタワーや海洋博物館が照らされる「神戸ウォーターフロント」と六甲山からのパノラマ。コスモクロック21（大観覧車）やベイブリッジを望む「横浜みなとみらい」。バルコニー付き客室で潮風と夜景を満喫。",
    "spots": "神戸ハーバーランドumie、メリケンパーク、横浜みなとみらい21、万国橋、大さん橋",
    "access": "神戸三宮・元町駅、横浜・桜木町・みなとみらい駅至近。",
    "tip": "バルコニー付きのお部屋を予約すると、心地よい夜風を感じながらプライベート空間で夜景とドリンクを楽しめます。"
  },
  {
    "key": "tokyo_skyscraper_luxury_nightview",
    "title": "3. 東京摩天楼＆東京タワービュー（高層階から見下ろす首都のダイナミズム）",
    "timing": "通年（空気の澄んだ秋〜冬は遠く富士山のシルエットも）",
    "desc": "地上30階以上の高層階に位置するラグジュアリーホテル。眼下に広がるビル群の光の海、赤くライトアップされた東京タワーやレインボーブリッジ。クラブラウンジでイブニングカクテルを味わいながら過ごす特別な夜。",
    "spots": "東京タワー、レインボーブリッジ、お台場ベイエリア、六本木ヒルズ展望台、渋谷スクランブルスクエア",
    "access": "都内主要ターミナル駅直結・至近。",
    "tip": "東京タワーが見える「東京タワービュー確約プラン」を選ぶと、記念日やプロポーズのサプライズに最高の演出ができます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【日本三大夜景＆摩天楼パノラマ宿】函館・長崎・神戸・横浜・東京高層ホテル 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "息を呑む1000万ドルの夜景完全特化！函館山を望むベイサイド、長崎稲佐山のすり鉢状パノラマ、神戸六甲山・ハーバーランド、横浜みなとみらい、東京ベイエリア高層階客室の展望露天風呂ホテルを徹底解説。",
    "url": "https://croud-travel.pages.dev/japan-top-night-view-luxury-hotel-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【日本三大夜景＆摩天楼パノラマ宿】函館・長崎・神戸・横浜・東京高層ホテル 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/japan-top-night-view-luxury-hotel-stay/" }
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
            JAPAN TOP NIGHT VIEW GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「日本三大夜景＆摩天楼パノラマ宿」函館・長崎・神戸・横浜・東京高層ホテル 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            部屋の明かりを消した瞬間、目の前に広がる光の宝石箱！世界新三大夜景「長崎」、日本三大夜景「函館・神戸」、そして横浜・東京の煌めく摩天楼。シャンパンを傾けながら夜景に包まれるロマンチックな極上ステイへ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
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
              {/* テーマ見出し */}
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

              {/* 絶景ポイント・アクセス・撮影のコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 絶景ビュースポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 最高の景色を楽しむコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの絶景展望宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    絶景プラン
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
                          rel="sponsored noopener noreferrer"
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
              📊 日本三大夜景＆摩天楼パノラマ宿：函館・長崎・神戸・横浜・東京高層ホテル 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「日本三大夜景＆摩天楼パノラマ宿：函館・長崎・神戸・横浜・東京高層ホテル 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 稲佐山温泉　ホテルアマンディ　〜長崎の日本三大夜景を一望〜</td>
                <td className="p-3 text-stone-600">長崎県長崎市曙町39-38</td>
                <td className="p-3 text-stone-600">長崎（長崎）駅周辺</td>
                <td className="p-3 text-stone-600">有り　１２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.94（747件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108257%2F108257.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 稲佐山観光ホテル</td>
                <td className="p-3 text-stone-600">長崎県長崎市曙町40-23</td>
                <td className="p-3 text-stone-600">長崎（長崎）駅周辺</td>
                <td className="p-3 text-stone-600">有 ６０台（1泊1台1,000円）※電気自動車急速充電設備あり</td>
                <td className="p-3 font-bold text-amber-600">★4.36（1258件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,880〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8438%2F8438.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 大江戸温泉物語Ｐｒｅｍｉｕｍ　長崎ホテル清風（２０２６年４月２９日リニューアルオープン）</td>
                <td className="p-3 text-stone-600">長崎県長崎市大鳥町523</td>
                <td className="p-3 text-stone-600">長崎（長崎）駅周辺</td>
                <td className="p-3 text-stone-600">あり　約80台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.05（111件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F198507%2F198507.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 長崎マリオットホテル</td>
                <td className="p-3 text-stone-600">長崎県長崎市尾上町1-1</td>
                <td className="p-3 text-stone-600">長崎（長崎）駅周辺</td>
                <td className="p-3 text-stone-600">アミュプラザ長崎立体駐車場をご利用いただけます。(宿泊者料金：当日13時～翌日13時　3,000円)</td>
                <td className="p-3 font-bold text-amber-600">★4.59（243件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,678〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188465%2F188465.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテル　ラ・スイート神戸ハーバーランド</td>
                <td className="p-3 text-stone-600">兵庫県神戸市中央区波止場町7-2</td>
                <td className="p-3 text-stone-600">神戸（兵庫）駅周辺</td>
                <td className="p-3 text-stone-600">57台(屋内46台、屋外11台) 1000円/泊</td>
                <td className="p-3 font-bold text-amber-600">★4.73（1809件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,130〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104705%2F104705.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. ホテルオークラ神戸</td>
                <td className="p-3 text-stone-600">兵庫県神戸市中央区波止場町2-1  メリケンパーク内</td>
                <td className="p-3 text-stone-600">元町（兵庫）駅周辺</td>
                <td className="p-3 text-stone-600">1泊1500円 ※予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.57（8846件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1648%2F1648.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">稲佐山温泉　ホテルアマンディ　〜長崎の日本三大夜景を一望〜</h3>
                  <span className="text-xs text-stone-400 ml-2">（いなさやまおんせん　ほてるあまんでぃ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/108257/108257_ky1.jpg" alt="稲佐山温泉　ホテルアマンディ　〜長崎の日本三大夜景を一望〜 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>日本三大夜景を一望！100％源泉の露天風呂や岩盤浴が人気のリゾートホテル。駐車場無料・Wi-Fi完備</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県長崎市曙町39-38 ／ 最寄り駅：長崎（長崎） ／ 交通案内：JR長崎駅からお車で7分。長崎バス5番系統「稲佐山」または「稲佐山中腹」行きバス乗車　無料送迎バス有</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１２０台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.99 ／ 立地 ★4.12 ／ 部屋 ★3.87 ／ 設備 ★3.7 ／ 風呂 ★3.99 ／ 食事 ★4.03</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「直前割でお得に利用、大浴場と夜景を満喫急な法事で長崎に行くことになったため、比較的お手頃な値段で探したところ、直前割プランと楽天のクーポンで通常よりかなり安くなっており助かりました。和室でベッ…　2026-10-08 14:40:50投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">稲佐山観光ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（いなさやまかんこうほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,880〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8438/8438_room.jpg" alt="稲佐山観光ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>長崎の夜景を最高にお楽しみいただけます。季節感を大切にしたお料理をご提供！全館無料Wi-Fi接続</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県長崎市曙町40-23 ／ 最寄り駅：長崎（長崎） ／ 交通案内：ＪＲ長崎駅より車で10分◆長崎駅から「稲佐山高部」行きバス「観光ホテル前」下車◆長崎駅から無料送迎有（1日2便、要予約）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有 ６０台（1泊1台1,000円）※電気自動車急速充電設備あり</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.38 ／ 立地 ★4.44 ／ 部屋 ★4.37 ／ 設備 ★4.18 ／ 風呂 ★4.11 ／ 食事 ★4.36</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉と朝食が最高、また長崎で泊まりたい全体的に素敵なホテルでした。仕事で利用させてもらったのですが温泉の作りが良かったし、泉質もすごく良くて長湯したくなる感じの温泉でした。(2個ありました)…　2026-10-09 17:09:19投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">大江戸温泉物語Ｐｒｅｍｉｕｍ　長崎ホテル清風（２０２６年４月２９日リニューアルオープン）</h3>
                  <span className="text-xs text-stone-400 ml-2">（おおえどおんせんものがたりぷれみあむ ながさきほてるせいふう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/198507/198507.jpg" alt="大江戸温泉物語Ｐｒｅｍｉｕｍ　長崎ホテル清風（２０２６年４月２９日リニューアルオープン） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>露天風呂や客室、プレミアムラウンジから世界新三大夜景を望む温泉ホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県長崎市大鳥町523 ／ 最寄り駅：長崎（長崎） ／ 交通案内：JR長崎駅より送迎バスで約15分、長崎自動車道 長崎ICより約20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>あり　約80台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「長崎の夜景が最高、食事も接客も満足とにかく夜景が最高でした!部屋からもラウンジからも展望温泉からも長崎の夜景が美しかったです。食事も美味しく、接客も丁寧でした。設備はリニューアルし…　2026-08-21 15:17:02投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">長崎マリオットホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（ナガサキ　マリオットホテル）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,678〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/188465/188465.jpg" alt="長崎マリオットホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>稲佐山と長崎港を望む抜群の立地に客船を思わせる外観の「長崎マリオットホテル」が誕生します。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長崎県長崎市尾上町1-1 ／ 最寄り駅：長崎（長崎） ／ 交通案内：JR長崎駅かもめ口より徒歩約１分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>アミュプラザ長崎立体駐車場をご利用いただけます。(宿泊者料金：当日13時～翌日13時　3,000円)</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ゆとりある空間と長崎らしさを感じる装丁外資系のホテルだけあってハード面のゆとり感に満足しました。波打ち際をイメージするラグやクッションカバー、歯ブラシの長崎のハタの装丁など、ご当地長崎を大切に思う…　2026-08-18 16:09:17投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=188465&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル　ラ・スイート神戸ハーバーランド</h3>
                  <span className="text-xs text-stone-400 ml-2">（ら・すいーとこうべはーばーらんど）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,130〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/104705/104705_spa.jpg" alt="ホテル　ラ・スイート神戸ハーバーランド 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全64室が70㎡以上の大型ジャグジー＆テラス付オーシャンンビュールームのラグジュアリーホテル。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県神戸市中央区波止場町7-2 ／ 最寄り駅：神戸（兵庫） ／ 交通案内：JR「神戸駅」より徒歩約10分／地下鉄海岸線「みなと元町駅」より徒歩約4分／阪神高速3号神戸線「京橋出入口」より車約5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>57台(屋内46台、屋外11台) 1000円/泊</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの温かい対応と夜景に家族全員大満足妻と1歳5ヶ月になる娘の家族3人で宿泊させてもらいました。良く歩き回る娘に対してもスタッフの皆様は温かく対応してくださり、おかげさまで終始笑顔な娘でした。…　2026-08-27 02:10:22投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=104705&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルオークラ神戸</h3>
                  <span className="text-xs text-stone-400 ml-2">（おーくら　こうべ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1648/1648_sgl.jpg" alt="ホテルオークラ神戸 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>神戸ポートタワーのとなり、35階建てホテル。夜景が自慢。ホテル～三宮間無料シャトルバス毎日運行</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県神戸市中央区波止場町2-1  メリケンパーク内 ／ 最寄り駅：元町（兵庫） ／ 交通案内：ＪＲ神戸線・阪神線 元町駅から徒歩で10分。 新幹線 新神戸駅から 車で15分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1泊1500円 ※予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「LIVE後の利用に最適、清潔で親切な対応LIVE終わりの宿泊に利便性を考慮して選んだホテルですが最高のホテルでした三宮や元町方面にも徒歩可能ですが...暑い夏には少し距離感ありましたホテル…　2026-08-21 17:47:55投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！長崎県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、長崎県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Huis_Ten_Bosch_-_01.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail_unscaled" alt="ハウステンボス" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">ハウステンボス</h3>
                <p className="text-xs text-stone-600 leading-relaxed">オランダの街並みを忠実に再現した日本最大級のテーマパーク。四季折々の花々とヨーロッパ風建築、日本最大級のイルミネーションが年間を通じて輝きます。 ハウステンボス（蘭: Huis Ten Bosch）は、長崎県佐世保市にあるテーマパーク。略称は「HTB」、テンボス。オランダの街並みを再現し、ヨーロッパ全体をテーマとしている。東京ディズニーリゾートの1.5倍の敷地面積で、単独テーマパークとしては日本最大。ドラマ・映画・CMなどのロケ地としても使われている。佐世保市の町にもなっており、所在地の住所は「佐世保…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">長崎原爆資料館・平和公園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">1945年8月9日の被爆の惨状と核兵器廃絶の願いを世界に伝える静聖な場所。天を指す高さ9.7mの平和祈念像の前で平和を祈念します。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">グラバー園・大浦天主堂</h3>
                <p className="text-xs text-stone-600 leading-relaxed">長崎港を見下ろす南山手の丘に立つ世界遺産。旧グラバー住宅をはじめとする幕末の西洋館と、現存する日本最古の木造教会「大浦天主堂」が異国情緒を醸します。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">軍艦島（端島）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">かつて海底炭鉱の島として世界一の人口密度を誇った廃墟の離島・世界文化遺産。高層鉄筋コンクリートアパートがひしめく独特の遺構を上陸クルーズで見学できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 長崎県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 長崎県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="japan-top-night-view-luxury-hotel-stay" />
</div>
  );
}
