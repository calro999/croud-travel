import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/ehime-shimanami-kaido-imabari-stay/" },
  title: "愛媛・しまなみ海道＆今治：来島海峡大橋・多島美サイクリング＆来島鯛極上宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "サイクリストの聖地・瀬戸内しまなみ海道＆今治エリア完全特化！世界初の三連吊橋「来島海峡大橋」、亀老山展望公園パノラマ、急流観潮船、今治タオル、来島海峡の急流で育つ「来島鯛」とオーシャンビュー宿を徹底解説。",
  keywords: ["愛媛", "しまなみ海道", "今治", "来島海峡大橋", "多島美サイクリング", "来島鯛極上宿", "温泉宿"],
  openGraph: {
    title: "愛媛・しまなみ海道＆今治：来島海峡大橋・多島美サイクリング＆来島鯛極上宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "サイクリストの聖地・瀬戸内しまなみ海道＆今治エリア完全特化！世界初の三連吊橋「来島海峡大橋」、亀老山展望公園パノラマ、急流観潮船、今治タオル、来島海峡の急流で育つ「来島鯛」とオーシャンビュー宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "愛媛・しまなみ海道＆今治：来島海峡大橋・多島美サイクリング＆来島鯛極上宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "サイクリストの聖地・瀬戸内しまなみ海道＆今治エリア完全特化！世界初の三連吊橋「来島海峡大橋」、亀老山展望公園パノラマ、急流観潮船、今治タオル、来島海峡の急流で育つ「来島鯛」とオーシャンビュー宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["ehime-shimanami-kaido-imabari-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ehime-shimanami-kaido-imabari-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shimanami_bridge_cycling_view",
    "title": "1. サンライズ糸山〜来島海峡大橋（海の上を走る絶景サイクリングと急流観潮船）",
    "timing": "通年（春〜秋の爽快サイクリング・夜の大橋ライトアップ）",
    "desc": "しまなみ海道の四国側拠点「サンライズ糸山」。世界初の三連吊橋「来島海峡大橋（全長4,105m）」を自転車や徒歩で渡る爽快感。日本三大急流「来島海峡」の渦潮を間近で見る「急流観潮船」の冒険。",
    "spots": "サンライズ糸山（サイクリングターミナル・SHIMANAMIモニュメント）、来島海峡大橋、糸山展望台、来島海峡急流観潮船（下田水港発着）",
    "access": "JR予讃線「今治駅」より路線バスで約20分「展望館前」下車。西瀬戸自動車道今治北ICより車約5分。",
    "tip": "サンライズ糸山の「SHIMANAMIモニュメント」前は、自転車と一緒に来島海峡大橋をバックに撮影できる記念撮影の聖地です。"
  },
  {
    "key": "kirosan_sunset_view_stay",
    "title": "2. 大島・亀老山展望公園（隈研吾設計の展望デッキから望む夕陽と瀬戸内多島美）",
    "timing": "通年（日本の夕陽百選・日没前後のマジックアワー）",
    "desc": "大島の南端、標高307.8mに位置する「亀老山（きろうさん）展望公園」。建築家・隈研吾氏が自然の地形に埋め込むように設計したモダンな展望台。来島海峡大橋と瀬戸内海の島々が茜色に染まる息をのむ大パノラマ。",
    "spots": "亀老山展望公園（展望デッキ・藻塩ジェラート）、よしうみバラ公園、道の駅よしうみいきいき館（七輪海鮮バーベキュー）",
    "access": "今治市街より車で約20分（大島南IC下車）。",
    "tip": "亀老山の売店で販売されている「藻塩ジェラート」は、伯方の塩を使った塩味と甘みのバランスが絶品のスイーツです。"
  },
  {
    "key": "imabari_kurushima_tai_gourmet",
    "title": "3. 来島海峡の天然真鯛＆今治鉄板焼鳥（身の締まった来島鯛と今治タオルの贅沢）",
    "timing": "通年（春の桜鯛・秋のもみじ鯛）",
    "desc": "最大時速10ノット（約18km/h）の激流で育つ「来島海峡の天然鯛」。お造りや鯛の宝楽焼き、炊きたての今治鯛めし。重しでプレスしてカリッと焼き上げるご当地グルメ「今治焼鳥」。肌触り極上の今治タオルアメニティ。",
    "spots": "今治城（日本三大水城・海水を引き入れた堀）、テクスポート今治（今治タオル本店）、タオル美術館ICHIHIRO",
    "access": "今治市街地中心部。",
    "tip": "「タオル美術館ICHIHIRO」では、広大なヨーロピアンガーデンとタオルの製造工程見学、限定タオルの購入が楽しめます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【愛媛・しまなみ海道＆今治】来島海峡大橋・多島美サイクリング＆来島鯛極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "サイクリストの聖地・瀬戸内しまなみ海道＆今治エリア完全特化！世界初の三連吊橋「来島海峡大橋」、亀老山展望公園パノラマ、急流観潮船、今治タオル、来島海峡の急流で育つ「来島鯛」とオーシャンビュー宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/ehime-shimanami-kaido-imabari-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【愛媛・しまなみ海道＆今治】来島海峡大橋・多島美サイクリング＆来島鯛極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/ehime-shimanami-kaido-imabari-stay/" }
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
            SHIMANAMI KAIDO RESORT GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「愛媛・しまなみ海道＆今治」来島海峡大橋・多島美サイクリング＆来島鯛極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            瀬戸内海の島々を6つの橋で結ぶ海の道「しまなみ海道」。世界初の三連吊橋「来島海峡大橋」と青い海。隈研吾設計の「亀老山展望公園」から望む夕日の多島美。身が引き締まった名物「来島鯛」と今治タオルの心地よさに包まれる旅。
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
              📊 愛媛・しまなみ海道＆今治：来島海峡大橋・多島美サイクリング＆来島鯛極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「愛媛・しまなみ海道＆今治：来島海峡大橋・多島美サイクリング＆来島鯛極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ＧＬＡＭＰＲＯＯＫしまなみ（グランルーク）</td>
                <td className="p-3 text-stone-600">愛媛県今治市馬島1006</td>
                <td className="p-3 text-stone-600">今治駅周辺</td>
                <td className="p-3 text-stone-600">今治港に専用駐車場10台有(無料) ※馬島へは自家用車での入島はできません(今治港から無料送迎有)</td>
                <td className="p-3 font-bold text-amber-600">★4.87（319件）</td>
                <td className="p-3 font-bold text-rose-600">¥21,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180620%2F180620.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 料理旅館せと</td>
                <td className="p-3 text-stone-600">愛媛県今治市伯方町有津甲1853</td>
                <td className="p-3 text-stone-600">今治駅周辺</td>
                <td className="p-3 text-stone-600">有り　１０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.75（40件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149158%2F149158.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 旅館さわき</td>
                <td className="p-3 text-stone-600">愛媛県今治市大三島町宮浦5460</td>
                <td className="p-3 text-stone-600">しまなみ海道大三島IC・バスストップから車で１０分。</td>
                <td className="p-3 text-stone-600">無料駐車場有り　10台</td>
                <td className="p-3 font-bold text-amber-600">★4.64（212件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109177%2F109177.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 湯ノ浦温泉　汐の丸　瀬戸内の水軍浪漫をたどる宿</td>
                <td className="p-3 text-stone-600">愛媛県今治市湯ノ浦30番地</td>
                <td className="p-3 text-stone-600">今治駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場　100台</td>
                <td className="p-3 font-bold text-amber-600">★4（2215件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,650〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7249%2F7249.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 道後温泉　旅亭　うめ乃や</td>
                <td className="p-3 text-stone-600">愛媛県松山市上市2-8-9</td>
                <td className="p-3 text-stone-600">道後温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　８台　無料　予約必要</td>
                <td className="p-3 font-bold text-amber-600">★4.65（137件）</td>
                <td className="p-3 font-bold text-rose-600">¥25,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145017%2F145017.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 道後温泉　大和屋本店</td>
                <td className="p-3 text-stone-600">愛媛県松山市道後湯之町20-8</td>
                <td className="p-3 text-stone-600">松山（愛媛）駅周辺</td>
                <td className="p-3 text-stone-600">有り　50台　有料：1泊につき1,000円/1台</td>
                <td className="p-3 font-bold text-amber-600">★4.62（2248件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,701〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13429%2F13429.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＧＬＡＭＰＲＯＯＫしまなみ（グランルーク）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぐらんるーくしまなみ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥21,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/180620/180620.jpg" alt="ＧＬＡＭＰＲＯＯＫしまなみ（グランルーク） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>オールインクルーシブで過ごす大人の島旅。ホテルとグランピング、お好みのスタイルでお楽しみください。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県今治市馬島1006 ／ 最寄り駅：今治 ／ 交通案内：今治港より送迎車での無料送迎（要予約・先着順）／今治駅より路線バスで約16分 馬島バスストップ下車徒歩10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>今治港に専用駐車場10台有(無料) ※馬島へは自家用車での入島はできません(今治港から無料送迎有)</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「個室感があり快適、アメニティも充実グランピング側に宿泊すると少し不便が多いですが、個室感を味わえて快適に過ごせました。トイレやお風呂の時にホテル棟へ行かないといけないので雨だと大変かなと思いま…　2026-08-19 12:42:10投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">料理旅館せと</h3>
                  <span className="text-xs text-stone-400 ml-2">（りょうりりょかんせと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/149158/149158_kan1.jpg" alt="料理旅館せと 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>船折瀬戸に面する唯一の旅館。どの部屋からも潮流や瀬戸を行き交う船が見られ、料理が自慢の宿です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県今治市伯方町有津甲1853 ／ 最寄り駅：今治 ／ 交通案内：今治駅よりお車にて約３５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「料理旅館せとは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">旅館さわき</h3>
                  <span className="text-xs text-stone-400 ml-2">（さわき）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/109177/109177_ka.jpg" alt="旅館さわき 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>瀬戸内の海の幸尽くしの夕食が人気。しまなみ海道の真ん中・大三島の大山祇神社近くの料理旅館です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県今治市大三島町宮浦5460 ／ 最寄り駅：主要駅 ／ 交通案内：しまなみ海道大三島IC・バスストップから車で１０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場有り　10台</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「自転車を室内保管でき、料理と接客も最高自転車旅行で2回目の使用でした。自転車を室内保管して頂けるので助かります。料理はアコウと鯛の刺身が絶品でした。そして中居さんのさっちゃんもw今…　2026-07-29 18:47:13投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯ノ浦温泉　汐の丸　瀬戸内の水軍浪漫をたどる宿</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆのうらおんせん　しおのまる　せとうちのすいぐんろまんをたどるやど）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,650〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7249/7249_twn.jpg" alt="湯ノ浦温泉　汐の丸　瀬戸内の水軍浪漫をたどる宿 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全面滑りづらい畳敷の大浴場でお子様・シニアもご安心！地元名物〈宝楽焼き〉や〈鯛めし〉なども大好評。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県今治市湯ノ浦30番地 ／ 最寄り駅：今治 ／ 交通案内：今治湯ノ浦ＩＣより車で3分／今治ＩＣより車で20分／松山空港から松山ＩＣより車で約1時間３０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場　100台</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋のグレードアップと海の幸に大満足予約した部屋よりグレードアップした和洋室を準備してくださったおかげで広く気持ち良く使わせて頂きました。お料理も海の幸をふんだんに使ってあり大変満足しました。近く…　2026-08-22 18:53:48投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">道後温泉　旅亭　うめ乃や</h3>
                  <span className="text-xs text-stone-400 ml-2">（どうごおんせん　りょてい　うめのや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥25,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/145017/145017_room.jpg" alt="道後温泉　旅亭　うめ乃や 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>湯築の杜を望む静かな落ち着き。数寄屋造りの歴史感じる温泉宿で過ごす大人の贅沢。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市上市2-8-9 ／ 最寄り駅：道後温泉 ／ 交通案内：伊予鉄松山市駅・JR松山駅から伊予鉄で道後温泉駅へ。道後温泉駅・道後温泉本館から徒歩5分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　８台　無料　予約必要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.82 ／ 立地 ★4.76 ／ 部屋 ★4.47 ／ 設備 ★4.35 ／ 風呂 ★4.65 ／ 食事 ★4.88</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「趣ある建物と丁寧な対応、美味しい料理に満足趣きのある建物で、部屋の雰囲気も良かったです。従業員の方々も、どなたも明るく感じの良い対応でした。料理も出汁に拘っておられ、とても美味しく頂きまし…　2026-05-26 16:06:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">道後温泉　大和屋本店</h3>
                  <span className="text-xs text-stone-400 ml-2">（どうごおんせん　やまとやほんてん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,701〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13429/13429_wa.jpg" alt="道後温泉　大和屋本店 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>慶応4年創業、道後温泉本館徒歩すぐの老舗宿。能舞台「千寿殿」や名物鯛めしの朝食で格式ある滞在を。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市道後湯之町20-8 ／ 最寄り駅：松山（愛媛） ／ 交通案内：ＪＲ『松山駅』より車で約20分・松山ＩＣより車で約２０分／松山空港より車で約３０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　50台　有料：1泊につき1,000円/1台</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「立地が良く、夕食と朝食も最高!立地もよく、夕食と朝食は最高でした。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/1…　2026-08-22 15:26:46投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！愛媛県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、愛媛県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/D%C5%8Dgo_Onsen.jpg/1280px-D%C5%8Dgo_Onsen.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="道後温泉本館" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">道後温泉本館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本最古の温泉の一つとされる道後温泉のシンボル。木造三層楼の重厚な和風建築は国指定重要文化財であり、『千と千尋の神隠し』のモデルとも言われています。 道後温泉（どうごおんせん）は、四国・愛媛県松山市（旧国伊予国）に湧出する温泉。有馬温泉や白浜温泉と並ぶ日本三古湯の一つである。その存在は古代から知られ、万葉集巻一にも見える。なおかつてはこの周辺が温泉郡（おんせんぐん）（湯郡）と呼ばれていたが、これはこの温泉にちなむ地名である。 夏目漱石の小説『坊つちやん』（1905年）にも描かれ、愛媛県の代表的な観光地とな…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">松山城</h3>
                <p className="text-xs text-stone-600 leading-relaxed">松山市の中心・勝山山頂に建つ現存12天守の一つ。ロープウェイやリフトで登ることができ、天守からは瀬戸内海と松山平野の360度パノラマが見渡せます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">しまなみ海道（来島海峡大橋）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">愛媛県今治市と広島県尾道市を結ぶ海上架橋ルート。「サイクリストの聖地」として世界中から絶賛され、世界初の3連吊橋から瀬戸内海の多島美を一望できます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">佐田岬（さだみさき）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本一細長い佐田岬半島。風力発電の風車が並ぶドライブコースを抜け、岬の先端の白い灯台からは豊予海峡を挟んで九州・大分県を望むダイナミックな景色です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 愛媛県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 愛媛県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="ehime-shimanami-kaido-imabari-stay" />
</div>
  );
}
