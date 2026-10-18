import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/hyogo-takeda-castle-asago-ikuno-stay/" },
  title: "兵庫・竹田城跡＆朝来・生野銀山：雲海に浮かぶ天空の城・生野鉱山坑道＆但馬牛宿 厳選ガイド",
  description: "日本のマチュピチュ・天空の城跡と産業遺産・兵庫朝来エリア完全特化！国史跡「竹田城跡（雲海展望台・立雲峡）」、日本遺産「生野銀山（観光坑道・鉱山町）」、あさご芸術の森、名物「但馬牛・岩津ねぎ宿」を徹底解説。",
  keywords: ["兵庫", "竹田城跡", "朝来", "生野銀山", "雲海に浮かぶ天空の城", "生野鉱山坑道", "但馬牛宿"],
  openGraph: {
    title: "兵庫・竹田城跡＆朝来・生野銀山：雲海に浮かぶ天空の城・生野鉱山坑道＆但馬牛宿 厳選ガイド",
    description: "日本のマチュピチュ・天空の城跡と産業遺産・兵庫朝来エリア完全特化！国史跡「竹田城跡（雲海展望台・立雲峡）」、日本遺産「生野銀山（観光坑道・鉱山町）」、あさご芸術の森、名物「但馬牛・岩津ねぎ宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "兵庫・竹田城跡＆朝来・生野銀山：雲海に浮かぶ天空の城・生野鉱山坑道＆但馬牛宿 厳選ガイド",
    description: "日本のマチュピチュ・天空の城跡と産業遺産・兵庫朝来エリア完全特化！国史跡「竹田城跡（雲海展望台・立雲峡）」、日本遺産「生野銀山（観光坑道・鉱山町）」、あさご芸術の森、名物「但馬牛・岩津ねぎ宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hyogo-takeda-castle-asago-ikuno-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hyogo-takeda-castle-asago-ikuno-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "takeda_castle_view_inn_stay",
    "title": "1. 竹田城跡〜立雲峡（日本のマチュピチュ！雲海に浮かぶ天空の城）",
    "timing": "通年（雲海シーズン：9月下旬〜12月上旬の早朝、特に10月〜11月）",
    "desc": "完存する山城石垣としては全国屈指の規模を誇る「竹田城跡（国の史跡・虎臥城）」。対岸の朝来山中腹にある「立雲峡（りつうんきょう）」展望台から望む、円山川の朝もや（雲海）に浮かぶ竹田城の絶景。城下町の寺町通り。",
    "spots": "竹田城跡（天守台・南千畳・本丸）、立雲峡（第1〜第3展望台）、竹田城下町（寺町通り・竹田まちなかの館）",
    "access": "JR播但線「竹田駅」下車。北近畿豊岡道「和田山IC」より車約10分。",
    "tip": "雲海が発生しやすい条件は「前日と当日の寒暖差が大きい晴天の早朝（日の出〜朝8時頃）」で、立雲峡第1展望台へは登山口から徒歩約30分で到達できます。"
  },
  {
    "key": "ikuno_silver_mine_heritage_stay",
    "title": "2. 生野銀山〜鉱山町・あさご芸術の森（800年の歴史を誇る巨大地下迷宮）",
    "timing": "通年（坑道内は年間を通じて約13℃と夏でも涼しい）",
    "desc": "織田信長・豊臣秀吉・徳川家康の直轄鉱山として栄えた「史跡 生野銀山」。全長約350kmに及ぶ坑道のうち約1kmを歩く観光坑道（近代鉱山・江戸時代手掘りゾーン）。赤瓦と生野石の鉱山町情景。巨大ダム湖畔のあさご芸術の森。",
    "spots": "史跡 生野銀山（観光坑道・鉱山資料館・超スーパー地下アイドルGIN48）、生野鉱山町（甲社宅・志村喬記念館）、あさご芸術の森美術館",
    "access": "JR播但線「生野駅」よりバス・タクシー約10分。播但連絡道「生野IC」より約10分。",
    "tip": "生野銀山の観光坑道内にはマネキン人形の鉱夫たち「GIN48」が配置されており、それぞれのプロフィールや歌がSNSで話題を呼んでいます。"
  },
  {
    "key": "tajima_beef_iwatsu_negi_stay",
    "title": "3. 日本三大和牛の素牛「但馬牛」＆幻の「岩津ねぎ」（冬の極上鍋とステーキ）",
    "timing": "通年（岩津ねぎ販売期間：11月下旬〜3月下旬）",
    "desc": "神戸牛や松阪牛・近江牛など全国のブランド和牛のルーツである最高峰黒毛和牛「但馬牛（たじまぎゅう）」。甘みととろけるような柔らかさが自慢の日本三大葱「岩津ねぎ」。但馬牛と岩津ねぎをたっぷりと使ったすき焼き。",
    "spots": "道の駅但馬のまほろば（朝来の特産品販売）、竹田城下町の町家フレンチ・和食処",
    "access": "朝来市全域。",
    "tip": "岩津ねぎは青葉から白根まで余すところなく食べられ、加熱するとトロリとした甘みが増すため、但馬牛とのすき焼きは冬の究極の贅沢です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【兵庫・竹田城跡＆朝来・生野銀山】雲海に浮かぶ天空の城・生野鉱山坑道＆但馬牛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "日本のマチュピチュ・天空の城跡と産業遺産・兵庫朝来エリア完全特化！国史跡「竹田城跡（雲海展望台・立雲峡）」、日本遺産「生野銀山（観光坑道・鉱山町）」、あさご芸術の森、名物「但馬牛・岩津ねぎ宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/hyogo-takeda-castle-asago-ikuno-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【兵庫・竹田城跡＆朝来・生野銀山】雲海に浮かぶ天空の城・生野鉱山坑道＆但馬牛宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/hyogo-takeda-castle-asago-ikuno-stay/" }
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
            TAKEDA CASTLE & ASAGO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「兵庫・竹田城跡＆朝来・生野銀山」雲海に浮かぶ天空の城・生野鉱山坑道＆但馬牛宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            標高353mの古城山山頂に広がる石垣遺構「国史跡・天空の城 竹田城跡」。秋の早朝、濃密な朝霧に包まれて雲海に浮かぶ幻想の姿。戦国時代から昭和まで稼働した「生野銀山」の地下鉱山探検。日本三大和牛のルーツ但馬牛と日本三大葱・岩津ねぎを味わう旅。
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
              📊 兵庫・竹田城跡＆朝来・生野銀山：雲海に浮かぶ天空の城・生野鉱山坑道＆但馬牛宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「兵庫・竹田城跡＆朝来・生野銀山：雲海に浮かぶ天空の城・生野鉱山坑道＆但馬牛宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ファーストホテルいずみ（旧：いずみ旅館　＜兵庫県＞）</td>
                <td className="p-3 text-stone-600">兵庫県朝来市和田山町寺谷712-10</td>
                <td className="p-3 text-stone-600">和田山駅周辺</td>
                <td className="p-3 text-stone-600">有り　無料</td>
                <td className="p-3 font-bold text-amber-600">★3.88（206件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F136998%2F136998.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 山陰湯村温泉　湧泉の宿　ゆあむ</td>
                <td className="p-3 text-stone-600">兵庫県</td>
                <td className="p-3 text-stone-600">近畿豊岡道日高神鍋高原ICより約35分/大阪梅田より阪急特急バス「湯村</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.47（1528件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10636%2F10636.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 群鶴亭</td>
                <td className="p-3 text-stone-600">兵庫県朝来市和田山町和田山283</td>
                <td className="p-3 text-stone-600">和田山駅周辺</td>
                <td className="p-3 text-stone-600">有り　４台　無料　要予約</td>
                <td className="p-3 font-bold text-amber-600">★4.5（77件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,750〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167271%2F167271.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 湯村温泉郷　御宿コトブキ</td>
                <td className="p-3 text-stone-600">兵庫県美方郡新温泉町湯1561-1</td>
                <td className="p-3 text-stone-600">浜坂駅周辺</td>
                <td className="p-3 text-stone-600">有り　16台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.51（173件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183930%2F183930.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ファーストホテルいずみ（旧：いずみ旅館　＜兵庫県＞）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふぁーすとほてるいずみ（旧：いずみりょかん））</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/136998/136998_kya.jpg" alt="ファーストホテルいずみ（旧：いずみ旅館　＜兵庫県＞） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ふるさとの温もりとホテルの快適さを兼ね揃えた静かな憩いの宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県朝来市和田山町寺谷712-10 ／ 最寄り駅：和田山 ／ 交通案内：和田山駅より徒歩にて３分  和田山インターより車で１0分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「丁寧な対応と清潔な部屋で快適な時間を過ごせた対応がとても丁寧で、お部屋も綺麗にお掃除されていて、とても快適でした。和田山駅から徒歩圏内のため、竹田城へのアクセスも良く、また次回も利用させていただき…　2026-08-11 21:54:20投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=136998&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">山陰湯村温泉　湧泉の宿　ゆあむ</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/10636/10636.jpg" alt="山陰湯村温泉　湧泉の宿　ゆあむ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：近畿豊岡道日高神鍋高原ICより約35分/大阪梅田より阪急特急バス「湯村温泉行」1日1～2便</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの対応と地産地消の食事が最高従業員さんがとても素敵でした。食事も地産地消の食材を使ってとても美味しい!温泉もとてもいいお湯でした。雨で露天風呂が楽しめなかったのが残念でしたが2連泊だったの…　2026-09-19 17:22:07投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">群鶴亭</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぐんかくてい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,750〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/167271/167271_kan1.jpg" alt="群鶴亭 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>風情のある旅館で、心を込めたお料理をご用意いたします。天空の城「竹田城跡」へ１０分程のお宿です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県朝来市和田山町和田山283 ／ 最寄り駅：和田山 ／ 交通案内：ＪＲ　和田山駅より徒歩にて約７分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　４台　無料　要予約</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「他の画像やクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/167271?reviewId=33123478388860　2026-08-04 13:22:34投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯村温泉郷　御宿コトブキ</h3>
                  <span className="text-xs text-stone-400 ml-2">（おんやどことぶき）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/183930/183930.jpg" alt="湯村温泉郷　御宿コトブキ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>7月8月は白いか姿造り（2、3名様に1匹）、9月10月は香住ガニを全ての夕食にお付けします。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県美方郡新温泉町湯1561-1 ／ 最寄り駅：浜坂 ／ 交通案内：JR浜坂駅よりバスで約15分　八鹿氷ノ山ICより車で50分（冬期は冬用タイヤの着用をお願いします）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　16台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「シックな空間と囲炉裏会席に大満足部屋をはじめ建物内はシックで落ち着いた佇まいで非常に素晴らしいと思いました。夕食の囲炉裏会席は他では体験出来ない楽しいものでした。また、大変美味しくいただきまし…　2026-08-22 17:36:35投稿」
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
    
      <HubRelatedPosts currentSlug="hyogo-takeda-castle-asago-ikuno-stay" />
</div>
  );
}
