import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kyoto-ujigawa-greentea-stay/" },
  title: "京都・宇治：平等院鳳凰堂・宇治茶＆源氏物語ゆかりの川畔宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界遺産・京都宇治エリア完全特化！十円玉に描かれた平等院鳳凰堂、宇治川の鵜飼い・橘橋、創業数百年の宇治茶老舗（辻利・中村藤吉）の抹茶パフェ、源氏物語宇治十帖と川畔温泉旅館を徹底解説。",
  keywords: ["京都", "宇治", "平等院鳳凰堂", "宇治茶", "源氏物語ゆかりの川畔宿", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "京都・宇治：平等院鳳凰堂・宇治茶＆源氏物語ゆかりの川畔宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "世界遺産・京都宇治エリア完全特化！十円玉に描かれた平等院鳳凰堂、宇治川の鵜飼い・橘橋、創業数百年の宇治茶老舗（辻利・中村藤吉）の抹茶パフェ、源氏物語宇治十帖と川畔温泉旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "京都・宇治：平等院鳳凰堂・宇治茶＆源氏物語ゆかりの川畔宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "世界遺産・京都宇治エリア完全特化！十円玉に描かれた平等院鳳凰堂、宇治川の鵜飼い・橘橋、創業数百年の宇治茶老舗（辻利・中村藤吉）の抹茶パフェ、源氏物語宇治十帖と川畔温泉旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kyoto-ujigawa-greentea-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kyoto-ujigawa-greentea-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "uji_byodoin_view",
    "title": "1. 平等院鳳凰堂〜宇治川リバーサイド（極楽浄土の建築美と川畔の朝散歩）",
    "timing": "通年（春の藤棚・秋の紅葉ライトアップ）",
    "desc": "永承7年（1053年）関白藤原頼通によって建立された国宝「平等院鳳凰堂」。阿字池に映る優美な鳳凰堂の姿。宇治川の中州（塔の島・橘島）にかかる喜撰橋や橘橋を渡る風情ある散策。",
    "spots": "平等院（鳳凰堂内部拝観・ミュージアム鳳翔館）、宇治川（橘橋・喜撰橋・十三重石塔）、宇治川の鵜飼い（夏期）",
    "access": "JR奈良線「宇治駅」南出口より徒歩約10分。京阪宇治線「宇治駅」より徒歩約10分。",
    "tip": "平等院鳳凰堂の内部拝観は当日受付の先着順（定員制）のため、開門直後の朝9時に予約を済ませましょう。"
  },
  {
    "key": "uji_greentea_sweets",
    "title": "2. 平等院表参道〜宇治茶老舗めぐり（挽きたて宇治抹茶パフェ＆茶団子食べ歩き）",
    "timing": "通年（新茶の季節：5月〜6月）",
    "desc": "茶香炉から漂うお茶の香りに包まれる「平等院表参道」。「中村藤吉本店」の竹筒に入った生茶ゼリイや「伊藤久右衛門」の宇治抹茶パフェ。宿の夕食では、抹茶塩でいただく天ぷらや茶粥会席を堪能。",
    "spots": "平等院表参道、中村藤吉本店（生茶ゼリイ）、伊藤久右衛門宇治本店、辻利一本店",
    "access": "JR宇治駅・京阪宇治駅より表参道まで徒歩約5〜8分。",
    "tip": "「中村藤吉本店」のカフェは整理券発券機で順番待ちができるため、発券後に平等院を参拝すると効率的です。"
  },
  {
    "key": "uji_genji_heritage",
    "title": "3. 宇治上神社〜さわらびの道（世界遺産の日本最古神社建築と源氏物語）",
    "timing": "通年（緑豊かな歴史の散策路）",
    "desc": "日本最古の本殿建築（国宝）を有する世界遺産「宇治上神社」と「宇治神社」。宇治川東岸の「さわらびの道」を歩き、紫式部が描いた『源氏物語』宇治十帖の舞台となった文学の里を巡る。",
    "spots": "宇治上神社（国宝本殿・桐原水）、宇治神社（みかえり兎）、源氏物語ミュージアム、興聖寺（琴坂の紅葉）",
    "access": "京阪宇治駅より徒歩約10分。JR宇治駅より徒歩約20分。",
    "tip": "宇治上神社の境内にある「桐原水（とうげんすい）」は、宇治七名水の中で唯一現存する名水湧水です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【京都・宇治】平等院鳳凰堂・宇治茶＆源氏物語ゆかりの川畔宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "世界遺産・京都宇治エリア完全特化！十円玉に描かれた平等院鳳凰堂、宇治川の鵜飼い・橘橋、創業数百年の宇治茶老舗（辻利・中村藤吉）の抹茶パフェ、源氏物語宇治十帖と川畔温泉旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/kyoto-ujigawa-greentea-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【京都・宇治】平等院鳳凰堂・宇治茶＆源氏物語ゆかりの川畔宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/kyoto-ujigawa-greentea-stay/" }
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
            KYOTO UJI TEA & HERITAGE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「京都・宇治」平等院鳳凰堂・宇治茶＆源氏物語ゆかりの川畔宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            宇治川の滔々たる清流と、極楽浄土を現世に再現した「平等院鳳凰堂」。香ばしい宇治茶の焙じ香が漂う参道。源氏物語の舞台となった歴史の古都で、極上の抹茶スイーツと川畔の静寂に浸る旅。
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
              📊 京都・宇治：平等院鳳凰堂・宇治茶＆源氏物語ゆかりの川畔宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「京都・宇治：平等院鳳凰堂・宇治茶＆源氏物語ゆかりの川畔宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 宇治壱番宿にがうり</td>
                <td className="p-3 text-stone-600">京都府宇治市宇治里尻2-17</td>
                <td className="p-3 text-stone-600">宇治（京都）駅周辺</td>
                <td className="p-3 text-stone-600">★徒歩2分以内に専用駐車場がございます(無料)★</td>
                <td className="p-3 font-bold text-amber-600">★4.13（94件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153403%2F153403.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 旅館あづまや　＜京都府＞</td>
                <td className="p-3 text-stone-600">京都府京都市下京区堀川通り七条上ル（西本願寺前）</td>
                <td className="p-3 text-stone-600">京都駅周辺</td>
                <td className="p-3 text-stone-600">なし</td>
                <td className="p-3 font-bold text-amber-600">★4.17（418件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,970〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151223%2F151223.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテル日航大阪</td>
                <td className="p-3 text-stone-600">大阪府大阪市中央区西心斎橋1-3-3</td>
                <td className="p-3 text-stone-600">心斎橋駅周辺</td>
                <td className="p-3 text-stone-600">有り　 ご宿泊のお客様は１泊 3000円（12：00～翌12：00まで）にて利用可能！　１６０台</td>
                <td className="p-3 font-bold text-amber-600">★4.51（5584件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,525〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167%2F167.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 京都タワーホテルアネックス</td>
                <td className="p-3 text-stone-600">京都府京都市下京区新町通七条下る東塩小路町 595-1</td>
                <td className="p-3 text-stone-600">京都駅周辺</td>
                <td className="p-3 text-stone-600">無し（提携駐車場もございません。周辺コインパーキングをご利用ください。）</td>
                <td className="p-3 font-bold text-amber-600">★4.12（2164件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,420〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4841%2F4841.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテルトレンドＪＲ宇治駅前</td>
                <td className="p-3 text-stone-600">京都府宇治市宇治壱番19-2</td>
                <td className="p-3 text-stone-600">JR宇治駅より徒歩にて約3分</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.04（335件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F180370%2F180370.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宇治壱番宿にがうり</h3>
                  <span className="text-xs text-stone-400 ml-2">（うじいちばん　やどにがうり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/153403/153403_kan1.jpg" alt="宇治壱番宿にがうり 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR宇治駅徒歩5分★１日１組限定の一棟貸切タイプ旅館★平等院も徒歩10分★お茶の街「宇治」に宿泊♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府宇治市宇治里尻2-17 ／ 最寄り駅：宇治（京都） ／ 交通案内：ＪＲ宇治駅及び京阪宇治駅より徒歩にて約５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>★徒歩2分以内に専用駐車場がございます(無料)★</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「宇治壱番宿にがうりは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">旅館あづまや　＜京都府＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（あづまや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,970〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/151223/151223_kan1.jpg" alt="旅館あづまや　＜京都府＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>西本願寺からすぐ！アクセス抜群の素泊まり旅館です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京都市下京区堀川通り七条上ル（西本願寺前） ／ 最寄り駅：京都 ／ 交通案内：ＪＲ　京都駅より徒歩にて約12分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>なし</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.33 ／ 立地 ★4.25 ／ 部屋 ★4.06 ／ 設備 ★4 ／ 風呂 ★4.05</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「施設は古いが子供向けサービスが充実子供連れでの利用でした。施設は古いですが、子供向けの寝間着やお菓子などサービスは色々と充実していて、満足でした。宿泊客に対して、大浴場があまり大きくないの…　2026-09-23 13:41:05投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル日航大阪</h3>
                  <span className="text-xs text-stone-400 ml-2">（にっこう　おおさか）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,525〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/167/167_lob.jpg" alt="ホテル日航大阪 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>大阪メトロ「心斎橋駅」直結！道頓堀まで徒歩約9分！観光・ビジネスに大変便利な立地です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大阪府大阪市中央区西心斎橋1-3-3 ／ 最寄り駅：心斎橋 ／ 交通案内：大阪メトロ御堂筋線、長堀鶴見緑地線「心斎橋駅」8番出口直結、梅田、難波、京セラドームなど主要エリアへ抜群のアクセスです。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　 ご宿泊のお客様は１泊 3000円（12：00～翌12：00まで）にて利用可能！　１６０台</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お部屋のグレードアップに感激!とても良いお部屋にグレードアップして下さって夢のようでしたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/…　2026-08-21 22:10:54投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">京都タワーホテルアネックス</h3>
                  <span className="text-xs text-stone-400 ml-2">（きょうと　たわーほてる　あねっくす）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,420〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4841/4841_heya.jpg" alt="京都タワーホテルアネックス 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>アメニティ・ピローバーで快適旅をクリエイト！コワーキングスペースもございます！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京都市下京区新町通七条下る東塩小路町 595-1 ／ 最寄り駅：京都 ／ 交通案内：ＪＲ京都駅徒歩約3分。京都市営地下鉄京都駅(C10出口)徒歩約1分。チェックイン前＆チェックアウト後の荷物預かりOK！</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無し（提携駐車場もございません。周辺コインパーキングをご利用ください。）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「立地と接客が良く、ベッドも広くて快適立地良く、スタッフさんの対応も丁寧でした。部屋は広くなかったものの、ベッドは広く寝心地良かったです。クチコミの詳細はこちらから　https://review…　2026-08-17 17:32:34投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルトレンドＪＲ宇治駅前</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるとれんど　じぇいあーるうじえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/180370/180370.jpg" alt="ホテルトレンドＪＲ宇治駅前 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR宇治駅南口より徒歩約3分♪源氏物語ミュージアムや平等院鳳凰堂など観光にGood☆</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府宇治市宇治壱番19-2 ／ 最寄り駅：主要駅 ／ 交通案内：JR宇治駅より徒歩にて約3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で便利、駐車場の手配もスムーズJR宇治駅から1番近いですが、今回は仕事で訪れました。車で向かう予定でしたので事前にその旨を伝えたところ、駐車場の手配もして頂きありがとうございます。公共…　2026-08-22 17:29:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！京都府の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、京都府を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Kiyomizu-dera%2C_Kyoto%2C_November_2016_-02.jpg/1280px-Kiyomizu-dera%2C_Kyoto%2C_November_2016_-02.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="清水寺" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">清水寺</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「清水の舞台」で世界的に有名な古都京都の象徴。「清水の舞台から飛び下りる」の語源となった木造大舞台からの京都市街の眺望と音羽の滝が名高いです。 清水寺（きよみずでら、英: Kiyomizu-dera Temple）は、京都市東山区清水1丁目にある北法相宗の大本山の寺院。山号は音羽山。本尊は十一面千手観世音菩薩。正式には音羽山清水寺（おとわさんきよみずでら）と号する。もとは法相宗に属していたが、現在は独立して北法相宗を名乗る。西国三十三所第16番札所。洛陽三十三所観音霊場第10から14番札所。境内（敷…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">金閣寺（鹿苑寺）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">鏡湖池に黄金の輝きを映し出す室町文化の傑作。層ごとに建築様式が異なる三層構造の金閣と繊細に手入れされた庭園美が世界中の人々を魅了します。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">伏見稲荷大社</h3>
                <p className="text-xs text-stone-600 leading-relaxed">全国に約3万社ある稲荷神社の総本宮。朱塗りの鳥居がどこまでも続く「千本鳥居」は幻想的な雰囲気に満ち、トリップアドバイザー外国人に人気のスポット1位の常連です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Arashiyama_%288741759830%29.jpg/1280px-Arashiyama_%288741759830%29.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="嵐山 竹林の小径" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">嵐山 竹林の小径</h3>
                <p className="text-xs text-stone-600 leading-relaxed">渡月橋から野宮神社を経て大河内山荘へ続く、数万本の竹が天を覆う清涼な小道。風が吹くたびに竹同士が触れ合う笹の葉の音が優しく響き渡ります。 嵐山（あらしやま）は、京都市西部にある標高382メートル（m）の山。また、大堰川（おおいがわ）を挟んで西側の松尾山・嵐山・烏ヶ岳の嵐山三山と、東側の小倉山・亀山、さらにはその麓を含んだ地域を一般的に嵐山と称し、山麓は多数の寺社が立地する観光名所でもある。 近くには嵯峨嵐山駅があり、この辺り一体が嵯峨野と呼ばれる事も多い。 また、近くのトロッコ嵐山駅からは嵯峨…</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 京都府エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 京都府の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="kyoto-ujigawa-greentea-stay" />
</div>
  );
}
