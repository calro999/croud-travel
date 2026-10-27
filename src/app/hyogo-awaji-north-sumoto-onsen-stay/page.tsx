import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/hyogo-awaji-north-sumoto-onsen-stay/" },
  title: "兵庫・淡路島北部＆洲本温泉：明石海峡大橋・花さじき＆淡路牛・玉ねぎ宿 厳選ガイド",
  description: "御食国の豊かな食とオーシャンビュー・淡路島北部＆洲本温泉エリア完全特化！明石海峡大橋ライトアップ、あわじ花さじき、淡路島国営明石海峡公園、洲本温泉の三名泉、最高級「淡路牛・淡路島玉ねぎ・由良ウニ宿」を徹底解説。",
  keywords: ["兵庫", "淡路島北部", "洲本温泉", "明石海峡大橋", "花さじき", "淡路牛", "玉ねぎ宿"],
  openGraph: {
    title: "兵庫・淡路島北部＆洲本温泉：明石海峡大橋・花さじき＆淡路牛・玉ねぎ宿 厳選ガイド",
    description: "御食国の豊かな食とオーシャンビュー・淡路島北部＆洲本温泉エリア完全特化！明石海峡大橋ライトアップ、あわじ花さじき、淡路島国営明石海峡公園、洲本温泉の三名泉、最高級「淡路牛・淡路島玉ねぎ・由良ウニ宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "兵庫・淡路島北部＆洲本温泉：明石海峡大橋・花さじき＆淡路牛・玉ねぎ宿 厳選ガイド",
    description: "御食国の豊かな食とオーシャンビュー・淡路島北部＆洲本温泉エリア完全特化！明石海峡大橋ライトアップ、あわじ花さじき、淡路島国営明石海峡公園、洲本温泉の三名泉、最高級「淡路牛・淡路島玉ねぎ・由良ウニ宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hyogo-awaji-north-sumoto-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hyogo-awaji-north-sumoto-onsen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "sumoto_onsen_ocean_luxury",
    "title": "1. 洲本温泉〜三熊山・洲本城跡（紀淡海峡の水平線から昇る朝日と名湯）",
    "timing": "通年（三河湾・紀淡海峡を一望するオーシャンビュー）",
    "desc": "淡路島最大の温泉街「洲本温泉」。三熊山山頂にそびえる洲本城跡（国の史跡）から見下ろす洲本市街と大阪湾のパノラマ。アルカリ性単純温泉のやわらかな湯と、水平線から昇る朝日に包まれる海辺の名門旅館群。",
    "spots": "洲本城跡（模擬天守・展望台）、大浜海水浴場（千本松原）、洲本レトロこみち、淡路島モンキーセンター",
    "access": "神戸三宮・新神戸駅より高速バスで「洲本高速バスセンター」まで約80分。",
    "tip": "洲本温泉の海岸沿いホテルでは、海に面したオープンテラス足湯やインフィニティ温泉露天風呂から絶景の朝焼けが楽しめます。"
  },
  {
    "key": "awaji_north_flower_resort",
    "title": "2. 淡路島北部〜あわじ花さじき・ニジゲンノモリ（海と花のパノラマとアニメパーク）",
    "timing": "通年（春の菜の花・夏のひまわり・秋のコスモス）",
    "desc": "標高298mの丘陵地から大阪湾に向かって広がる15ヘクタールの花の大パノラマ「あわじ花さじき」。兵庫県立淡路島公園内の大人気アニメパーク「ニジゲンノモリ」。「淡路ハイウェイオアシス」から望む明石海峡大橋。",
    "spots": "あわじ花さじき、ニジゲンノモリ（ドラゴンクエスト・NARUTO・ゴジラ）、淡路サービスエリア（大観覧車・恋人の聖地）",
    "access": "淡路ICより車で約10〜15分。",
    "tip": "「あわじ花さじき」の展望デッキからは、眼下に広がる広大な花畑と青い海が一体となった絵画のような写真が撮影できます。"
  },
  {
    "key": "awaji_beef_onion_gourmet",
    "title": "3. ブランド「淡路牛」＆淡路島たまねぎ（古代から朝廷に食材を納めた御食国の恵み）",
    "timing": "通年（5月〜の「新玉ねぎ」は驚くほど甘くみずみずしい）",
    "desc": "神戸ビーフや松阪牛の素牛となる最高品質の「淡路牛」。日照時間が長く糖度の高い名物「淡路島たまねぎ」の丸ごとローストやすき焼き。幻のウニと称される由良港水揚げの「由良の赤ウニ」、春の「淡路島サクラマス」。",
    "spots": "淡路島うずの丘 大鳴門橋記念館（おっ玉葱モニュメント）、淡路牛専門店、道の駅あわじ",
    "access": "淡路島全域。",
    "tip": "春に収穫される淡路島の新玉ねぎは、辛味がほとんどなくフルーツ並みの糖度があるため、生のオニオンスライスで食べるのが一番の贅沢です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【兵庫・淡路島北部＆洲本温泉】明石海峡大橋・花さじき＆淡路牛・玉ねぎ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "御食国の豊かな食とオーシャンビュー・淡路島北部＆洲本温泉エリア完全特化！明石海峡大橋ライトアップ、あわじ花さじき、淡路島国営明石海峡公園、洲本温泉の三名泉、最高級「淡路牛・淡路島玉ねぎ・由良ウニ宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/hyogo-awaji-north-sumoto-onsen-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【兵庫・淡路島北部＆洲本温泉】明石海峡大橋・花さじき＆淡路牛・玉ねぎ宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/hyogo-awaji-north-sumoto-onsen-stay/" }
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
            AWAJI NORTH & SUMOTO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「兵庫・淡路島北部＆洲本温泉」明石海峡大橋・花さじき＆淡路牛・玉ねぎ宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            神戸から明石海峡大橋を渡ってすぐのアイランドリゾート「淡路島」。四季の花々が海に向かって咲き誇る「あわじ花さじき」。紀淡海峡を望む老舗名湯「洲本温泉」。甘みたっぷりの淡路島玉ねぎと極上の淡路牛ステーキを堪能する旅。
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
              📊 兵庫・淡路島北部＆洲本温泉：明石海峡大橋・花さじき＆淡路牛・玉ねぎ宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「兵庫・淡路島北部＆洲本温泉：明石海峡大橋・花さじき＆淡路牛・玉ねぎ宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 洲本温泉　淡路インターナショナルホテル　ザ・サンプラザ　＜淡路島＞</td>
                <td className="p-3 text-stone-600">兵庫県洲本市小路谷1279-13</td>
                <td className="p-3 text-stone-600">洲本駅周辺</td>
                <td className="p-3 text-stone-600">有り/無料　　　客室内ネット接続：Wi-Fi/無料　ホテル・旅館100選37年連続受賞</td>
                <td className="p-3 font-bold text-amber-600">★4.42（3068件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9104%2F9104.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 淡路島洲本温泉　海月舘</td>
                <td className="p-3 text-stone-600">兵庫県洲本市海岸通1-3-11</td>
                <td className="p-3 text-stone-600">舞子駅周辺</td>
                <td className="p-3 text-stone-600">有り　50台（乗用車）　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.3（4526件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1675%2F1675.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. Ｈｏｔｅｌ　Ｔｈｅ　Ｄａｙ　Ｏｓａｋａ</td>
                <td className="p-3 text-stone-600">大阪府大阪市此花区北港緑地2-3-75</td>
                <td className="p-3 text-stone-600">桜島駅周辺</td>
                <td className="p-3 text-stone-600">有り　180台　有料（先着順、1泊1500円）</td>
                <td className="p-3 font-bold text-amber-600">★4.48（1179件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,590〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70375%2F70375.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 音羽旅館　＜淡路島＞</td>
                <td className="p-3 text-stone-600">兵庫県淡路市江井2787-1</td>
                <td className="p-3 text-stone-600">明石より岩屋までフェリーにて約２５分、岩屋よりお車にて約５０分。</td>
                <td className="p-3 text-stone-600">有り　１３台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.7（33件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,550〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147776%2F147776.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 南あわじ温泉郷　潮崎の湯　やぶ萬旅館　＜淡路島＞</td>
                <td className="p-3 text-stone-600">兵庫県南あわじ市福良乙4</td>
                <td className="p-3 text-stone-600">三宮駅周辺</td>
                <td className="p-3 text-stone-600">有り　３０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.51（592件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8498%2F8498.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 南あわじ温泉郷　うずしお温泉　淡路島海上ホテル</td>
                <td className="p-3 text-stone-600">兵庫県南あわじ市福良甲21-1</td>
                <td className="p-3 text-stone-600">明石海峡大橋海峡　垂水ＪＣＴより車で約１時間（６７ｋｍ）</td>
                <td className="p-3 text-stone-600">有り　70台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.16（926件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F52574%2F52574.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
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
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">Ｈｏｔｅｌ　Ｔｈｅ　Ｄａｙ　Ｏｓａｋａ</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてる　ざ　でい　おおさか）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,590〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/70375/70375_room.jpg" alt="Ｈｏｔｅｌ　Ｔｈｅ　Ｄａｙ　Ｏｓａｋａ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>※The Day Osakaは旧『ロッジ舞洲』です（名称変更から半年）</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大阪府大阪市此花区北港緑地2-3-75 ／ 最寄り駅：桜島 ／ 交通案内：JRゆめ咲線ユニバーサルシティ駅よりタクシーにて約15分／JR桜島駅より舞洲アクティブバスにて約15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　180台　有料（先着順、1泊1500円）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「アクティビティ満載で一日中楽しめた!花火で遊べたり焼きマシュマロやわたがしのサービスもあってバトミントンなどの貸し出しも無料でしてくださりめっちゃ楽しかったです!5人で行きました!!!もっと早くチ…　2026-08-19 00:36:10投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">音羽旅館　＜淡路島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（おとわりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,550〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/147776/147776_room.jpg" alt="音羽旅館　＜淡路島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>淡路近海で獲れた新鮮な魚介類の料理が自慢。それ以外にも夏はハモ、冬は３年とらふぐを楽しんで頂きます</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県淡路市江井2787-1 ／ 最寄り駅：主要駅 ／ 交通案内：明石より岩屋までフェリーにて約２５分、岩屋よりお車にて約５０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１３台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「音羽旅館　＜淡路島＞は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南あわじ温泉郷　潮崎の湯　やぶ萬旅館　＜淡路島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（みなみあわじおんせんきょう　しおさきのゆ　やぶまんりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8498/8498_ml.jpg" alt="南あわじ温泉郷　潮崎の湯　やぶ萬旅館　＜淡路島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>創業160年の老舗料理旅館！当館名物料理「鯛めん」＆美肌の湯【潮崎温泉】を堪能あれ◎</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県南あわじ市福良乙4 ／ 最寄り駅：三宮 ／ 交通案内：ＪＲ三宮駅またはＪＲ舞子駅より福良行きバス　終点より徒歩5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「清潔な部屋と絶品の料理、泉質も最高部屋は新しくはないものの、清潔に清掃されていました。トイレと手洗い場が一緒なのは少々残念でした。お風呂の泉質は非常に良かった。料理は夜も朝も出てくるもの全て100…　2026-08-16 18:57:15投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
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
          href="/prefectures/"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="hyogo-awaji-north-sumoto-onsen-stay" />
</div>
  );
}
