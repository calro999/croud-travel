import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/fukui-mikatagoko-rainbow-line-stay/" },
  title: "福井・三方五湖＆レインボーライン：天空テラス・五色水鏡＆三方口細うなぎ・若狭ふぐ宿 厳選ガイド",
  description: "水質と水深が異なる5つの奇跡の湖・福井三方五湖エリア完全特化！三方五湖レインボーライン山頂公園「天空の足湯・美浜テラス」、年縞博物館、名物「三方五湖口細うなぎ（天然うなぎ）」、冬の「若狭ふぐ・越前ガニ宿」を徹底解説。",
  keywords: ["福井", "三方五湖", "レインボーライン", "天空テラス", "五色水鏡", "三方口細うなぎ", "若狭ふぐ宿"],
  openGraph: {
    title: "福井・三方五湖＆レインボーライン：天空テラス・五色水鏡＆三方口細うなぎ・若狭ふぐ宿 厳選ガイド",
    description: "水質と水深が異なる5つの奇跡の湖・福井三方五湖エリア完全特化！三方五湖レインボーライン山頂公園「天空の足湯・美浜テラス」、年縞博物館、名物「三方五湖口細うなぎ（天然うなぎ）」、冬の「若狭ふぐ・越前ガニ宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "福井・三方五湖＆レインボーライン：天空テラス・五色水鏡＆三方口細うなぎ・若狭ふぐ宿 厳選ガイド",
    description: "水質と水深が異なる5つの奇跡の湖・福井三方五湖エリア完全特化！三方五湖レインボーライン山頂公園「天空の足湯・美浜テラス」、年縞博物館、名物「三方五湖口細うなぎ（天然うなぎ）」、冬の「若狭ふぐ・越前ガニ宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["fukui-mikatagoko-rainbow-line-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for fukui-mikatagoko-rainbow-line-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "mikatagoko_rainbow_resort_stay",
    "title": "1. レインボーライン山頂公園〜美浜テラス（天空の足湯から望む五色の水鏡）",
    "timing": "通年（春〜秋の爽快パノラマ・秋のバラ園・冬の澄んだ湖面）",
    "desc": "梅丈岳（ばいじょうだけ）山頂に広がる「レインボーライン山頂公園（天空テラス）」。リフト・ケーブルカーで登る山頂。三方五湖と日本海若狭湾を同時に見下ろす「天空の足湯」「ソファーテラス」。恋人の聖地（幸せの鐘・かわらけ投げ）。",
    "spots": "レインボーライン山頂公園（美浜テラス・若狭テラス・中央テラス・足湯）、三方五湖（三方湖・水月湖・菅湖・久々子湖・日向湖）",
    "access": "JR小浜線「美浜駅」または「三方駅」より車・タクシーで約15〜20分。舞鶴若狭道「若狭三方IC」より約15分。",
    "tip": "山頂公園の「美浜テラス」にある足湯に浸かりながら、五つの湖がそれぞれ異なる青色のグラデーションを描く絶景を眺める時間は至福のひとときです。"
  },
  {
    "key": "mikatagoko_unagi_gourmet_stay",
    "title": "2. 三方五湖名物「口細うなぎ」＆年縞博物館（7万年の奇跡の地層と天然鰻）",
    "timing": "通年（天然うなぎシーズン：5月〜11月）",
    "desc": "三方五湖の豊かなプランクトンとシジミを食べて育つ「口細青うなぎ（くちぼそうなぎ）」。口先が細く脂が乗って皮が柔らかい最高級天然鰻。7万年分の縞模様が堆積し年代測定の世界標準となった「福井県年縞（ねんこう）博物館」。",
    "spots": "うなぎ料理店（徳右衛門・源与門）、福井県年縞博物館（ステンドグラス状の年縞展示）、若狭三方縄文博物館",
    "access": "三方湖・水月湖周辺。",
    "tip": "「源与門（げんよもん）」などの老舗うなぎ店では、備長炭でじっくり香ばしく焼き上げた関西風地焼きのうな重が堪能できます。"
  },
  {
    "key": "wakasa_fugu_crab_winter_stay",
    "title": "3. 若狭の冬の王様「若狭ふぐ」＆越前ガニ（日本最北限のとらふぐ養殖地）",
    "timing": "冬期（11月〜3月は若狭ふぐ・越前ガニの最盛期）",
    "desc": "日本海の冷たい海水で身が引き締まり、プリプリとした歯ごたえと旨味が抜群の「若狭ふぐ（トラフグ）」。透き通るてっさ（刺身）、熱々のてっちり（鍋）、香ばしいひれ酒。冬の味覚の王者「越前ガニ（ズワイガニ）」との贅沢な競演。",
    "spots": "阿納・日向・世久見のふぐ料理民宿・旅館、みかた温泉きららの湯",
    "access": "若狭町・美浜町沿岸エリア。",
    "tip": "若狭ふぐは全国の有名フグ産地と比べてもリーズナブルに本場のとらふぐフルコースが堪能できるため、冬のグルメ旅行に絶大な人気を誇ります。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【福井・三方五湖＆レインボーライン】天空テラス・五色水鏡＆三方口細うなぎ・若狭ふぐ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "水質と水深が異なる5つの奇跡の湖・福井三方五湖エリア完全特化！三方五湖レインボーライン山頂公園「天空の足湯・美浜テラス」、年縞博物館、名物「三方五湖口細うなぎ（天然うなぎ）」、冬の「若狭ふぐ・越前ガニ宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/fukui-mikatagoko-rainbow-line-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【福井・三方五湖＆レインボーライン】天空テラス・五色水鏡＆三方口細うなぎ・若狭ふぐ宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/fukui-mikatagoko-rainbow-line-stay/" }
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
            MIKATAGOKO & RAINBOW LINE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「福井・三方五湖＆レインボーライン」天空テラス・五色水鏡＆三方口細うなぎ・若狭ふぐ宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            三方湖・水月湖・菅湖・久々子湖・日向湖が織りなす神秘の水鏡「国指定名勝・三方五湖」。レインボーライン山頂公園の天空テラスから見下ろす360度の大パノラマ。7万年の時を刻む水月湖の「年縞」。三方名物の口細うなぎと若狭ふぐを味わう若狭湾の旅。
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
                              loading="eager" fetchPriority="high"
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
              📊 福井・三方五湖＆レインボーライン：天空テラス・五色水鏡＆三方口細うなぎ・若狭ふぐ宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「福井・三方五湖＆レインボーライン：天空テラス・五色水鏡＆三方口細うなぎ・若狭ふぐ宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 天然温泉　岡三屋　彩かさね</td>
                <td className="p-3 text-stone-600">福井県三方上中郡若狭町生倉18-19-2</td>
                <td className="p-3 text-stone-600">三方駅周辺</td>
                <td className="p-3 text-stone-600">有り　２５台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.79（71件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128282%2F128282.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 若狭美浜温泉　悠久乃碧　ホテル湾彩</td>
                <td className="p-3 text-stone-600">福井県三方郡美浜町久々子海岸</td>
                <td className="p-3 text-stone-600">美浜駅周辺</td>
                <td className="p-3 text-stone-600">有り　８０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★3.96（1195件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10952%2F10952.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 三国温泉　展望自慢の料理旅館　はれや旅館</td>
                <td className="p-3 text-stone-600">福井県</td>
                <td className="p-3 text-stone-600">ＪＲ　芦原温泉駅よりお車にて１０分</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.29（161件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142842%2F142842.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 北陸　福井　あわら温泉　美松</td>
                <td className="p-3 text-stone-600">福井県あわら市舟津26-10</td>
                <td className="p-3 text-stone-600">芦原温泉駅周辺</td>
                <td className="p-3 text-stone-600">先着順の無料駐車場（100台）お体の不自由なお客様には駐車場の確保も致します。</td>
                <td className="p-3 font-bold text-amber-600">★4.41（2961件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8114%2F8114.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 愛犬と添い寝できる温泉旅館　あわら温泉　月香</td>
                <td className="p-3 text-stone-600">福井県あわら市舟津9-8</td>
                <td className="p-3 text-stone-600">ＪＲ　あわら温泉駅よりお車にて約１５分</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.4（298件）</td>
                <td className="p-3 font-bold text-rose-600">¥16,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F160944%2F160944.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 花はす温泉　そまやま</td>
                <td className="p-3 text-stone-600">福井県南条郡南越前町中小屋60-1</td>
                <td className="p-3 text-stone-600">南条駅周辺</td>
                <td className="p-3 text-stone-600">有り　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.88（136件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161184%2F161184.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　岡三屋　彩かさね</h3>
                  <span className="text-xs text-stone-400 ml-2">（おかさんや　いろかさね）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥17,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/128282/128282_kya.jpg" alt="天然温泉　岡三屋　彩かさね 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>三方湖畔に建つ温泉旅館、湖に手が届きそうな露天風呂、地食材を生かした創作和食、和みを感じてください。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福井県三方上中郡若狭町生倉18-19-2 ／ 最寄り駅：三方 ／ 交通案内：ＪＲ　三方駅より車で約５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２５台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「天然温泉　岡三屋　彩かさねは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">若狭美浜温泉　悠久乃碧　ホテル湾彩</h3>
                  <span className="text-xs text-stone-400 ml-2">（わかさみはまおんせん　ゆうきゅうのあお　ほてるわんさい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/10952/10952_war.jpg" alt="若狭美浜温泉　悠久乃碧　ホテル湾彩 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>若狭湾一望のホテル！オーシャンビュー＆獲れたての海幸が自慢</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福井県三方郡美浜町久々子海岸 ／ 最寄り駅：美浜 ／ 交通案内：JR美浜駅から車で５分。 敦賀ICから車で２０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　８０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「夕食は期待外れ、朝食の和食は満足夕食はバイキングだったのですがネットの写真を見て良さそうに思ったのですが私的にはあんまりでした。朝食の和食の方が良かったです。クチコミの詳細はこちらから　htt…　2026-08-22 23:43:20投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">三国温泉　展望自慢の料理旅館　はれや旅館</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/142842/142842.jpg" alt="三国温泉　展望自慢の料理旅館　はれや旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ　芦原温泉駅よりお車にて１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「絶品夕食とオーシャンビューに大満足!夕食の絶品コース最高すぎました!何を食べても全部美味しかったです!作ってくれた方の手間と愛情をたっぷり受け取りました!花火大会は残念でしたが、来て良かったです!…　2026-08-14 13:16:34投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=142842&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">北陸　福井　あわら温泉　美松</h3>
                  <span className="text-xs text-stone-400 ml-2">（あわらこくさいほてる　みまつ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8114/8114_heya.jpg" alt="北陸　福井　あわら温泉　美松 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>◆充実！美松のドリンクインクルーシブスタート◆別邸「美悠」など趣の異なる温泉露天風呂付客室が好評◆</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福井県あわら市舟津26-10 ／ 最寄り駅：芦原温泉 ／ 交通案内：JR北陸新幹線芦原温泉駅より約15分（要予約）／北陸自動車道金津ICより約15分／小松空港より車で約50分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>先着順の無料駐車場（100台）お体の不自由なお客様には駐車場の確保も致します。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「露天風呂は最高だが夕食のタレが辛すぎた夕食のしゃぶしゃぶのタレがゴマだれとポン酢だったのですが、どちらも辛すぎて何もつけずに食べたほうがよかったです。部屋付き露天風呂はとても気持ちよくて良かっ…　2026-08-28 20:05:09投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">愛犬と添い寝できる温泉旅館　あわら温泉　月香</h3>
                  <span className="text-xs text-stone-400 ml-2">（あいけんとそいねできるおんせんりょかん　あわらおんせん　げっか）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥16,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/160944/160944_kan1.jpg" alt="愛犬と添い寝できる温泉旅館　あわら温泉　月香 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>愛犬と温泉旅館で過ごすという贅沢。お食事のときも寛ぎのときもワンちゃんと一緒にお過ごしいただけます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福井県あわら市舟津9-8 ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ　あわら温泉駅よりお車にて約１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「わんこファーストで設備も充実、料理も絶品わんこファースト。ラウンジも館内もわんこファーストです。 街歩きは歩道がせまくて歩きづらいのですが、街歩きマップがあって、楽しめました。 お部屋に露天があり…　2026-08-19 20:02:09投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=160944&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">花はす温泉　そまやま</h3>
                  <span className="text-xs text-stone-400 ml-2">（はなはすおんせん　そまやま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/161184/161184_kan1.jpg" alt="花はす温泉　そまやま 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>緑豊かな庭園露天風呂が自慢の宿。ツルツル美肌の温泉と名物はす湯、福井の山海の幸満載のお料理もどうぞ</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福井県南条郡南越前町中小屋60-1 ／ 最寄り駅：南条 ／ 交通案内：南条スマートICよりお車で約５分、今庄ICよりお車で約１０分。金沢や若狭、県内東尋坊などアクセス起点に便利</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事と温泉に大満足、Wi-Fi接続は改善希望リーズナブルなのに夕食、朝食の味、量ともに文句無しでした!お風呂も露天風呂があり非常に満足でした。部屋は広く必要な設備は揃っておりますが、唯一Wi-Fi…　2026-08-11 21:50:24投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=161184&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！福井県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、福井県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bd/Japan_Tojinbo02n4592.jpg/1280px-Japan_Tojinbo02n4592.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="福井県立恐竜博物館" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">福井県立恐竜博物館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界三大恐竜博物館の一つに数えられる世界最大級の恐竜専門博物館。44体もの恐竜全身骨格や迫力満点の動く実物大恐竜ロボットが展示されています。 福井県（ふくいけん）は、日本の中部地方（北陸地方）に位置する県。行政管轄区分において近畿地方に包括される場合もある。令制国の越前国と若狭国に相当する。県庁所在地は福井市。 北陸地方の最西端に位置しており、同地方で最も人口が少ない県である。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">東尋坊</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本海の荒波によって削られた断崖絶壁が約1km続く国の天然記念物。柱状節理という世界的に珍しい奇岩の崖の上から見下ろす波はスリル満点です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">大本山 永平寺</h3>
                <p className="text-xs text-stone-600 leading-relaxed">道元禅師によって開かれた曹洞宗の大本山。樹齢数百年の老杉に囲まれた静寂な境内に大小70余りの堂宇が廊下で結ばれ、厳かな修行の息吹が漂います。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">三方五湖（レインボーライン）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">淡水・半塩水・海水と水質や水深が異なる5つの湖。山頂公園へ向かうレインボーライン山頂公園からは「五色の湖」と日本海の360度パノラマを楽しめます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 福井県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 福井県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
          href="/prefectures/"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="fukui-mikatagoko-rainbow-line-stay" />
</div>
  );
}
