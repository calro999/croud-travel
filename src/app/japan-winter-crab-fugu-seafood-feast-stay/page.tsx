import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/japan-winter-crab-fugu-seafood-feast-stay/" },
  title: "冬の四大味覚極上宿：松葉ガニ・越前ガニ・下関とらふぐ・寒ブリ 厳選ガイド",
  description: "冬の日本を代表する高級海鮮グルメ完全特化！山陰・北陸のタグ付き「松葉ガニ・越前ガニ」フルコース、本場下関の「天然とらふぐ刺し・ふぐちり鍋」、富山氷見＆京都伊根の「寒ブリしゃぶ」宿を徹底解説。",
  keywords: ["冬の四大味覚極上宿", "松葉ガニ", "越前ガニ", "下関とらふぐ", "寒ブリ", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "冬の四大味覚極上宿：松葉ガニ・越前ガニ・下関とらふぐ・寒ブリ 厳選ガイド",
    description: "冬の日本を代表する高級海鮮グルメ完全特化！山陰・北陸のタグ付き「松葉ガニ・越前ガニ」フルコース、本場下関の「天然とらふぐ刺し・ふぐちり鍋」、富山氷見＆京都伊根の「寒ブリしゃぶ」宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "冬の四大味覚極上宿：松葉ガニ・越前ガニ・下関とらふぐ・寒ブリ 厳選ガイド",
    description: "冬の日本を代表する高級海鮮グルメ完全特化！山陰・北陸のタグ付き「松葉ガニ・越前ガニ」フルコース、本場下関の「天然とらふぐ刺し・ふぐちり鍋」、富山氷見＆京都伊根の「寒ブリしゃぶ」宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-winter-crab-fugu-seafood-feast-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-winter-crab-fugu-seafood-feast-stay", e);
  }
  return {};
}

export default function GourmetCuisineHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "matsuba_echizen_crab_feast",
    "title": "1. 松葉ガニ＆越前ガニ（日本海の冬の王様・黄色と青のタグ付きブランドガニ）",
    "timing": "冬期限定：11月6日解禁〜3月下旬（旬の最も甘みとミソが詰まった時期）",
    "desc": "福井県が誇る皇室献上ガニ「越前ガニ（黄色タグ）」と、山陰地方の「松葉ガニ（緑・青・白タグ）」「間人ガニ」「津居山ガニ」。活けガニをその場で捌く「カニ刺し」、香ばしい「焼きガニ」、濃厚な「甲羅カニミソ焼き」、締め雑炊。",
    "spots": "越前ガニ本場（芦原温泉・三国温泉・越前海岸）、松葉ガニ本場（城崎温泉・夕日ヶ浦・皆生温泉）",
    "access": "北陸新幹線「芦原温泉駅」、JR山陰本線「城崎温泉駅」「米子駅」。",
    "tip": "「焼きガニ」は炭火で殻がほんのり焦げる程度にサッと焼くと、カニ本来の甘みとジューシーな水分が閉じ込められます。"
  },
  {
    "key": "shimonoseki_torafugu_feast",
    "title": "2. 下関直送「天然とらふぐ」＆ふぐちり鍋（職人技の菊花盛りてっさと香ばしいひれ酒）",
    "timing": "秋〜冬期：10月〜3月（「秋の彼岸から春の彼岸まで」が最も美味）",
    "desc": "ふぐの本場・下関南風泊市場（はえどまり）で競り落とされる最高峰の「天然とらふぐ」。大皿に美しく透き通るように並べられた「てっさ（ふぐ刺し）」、骨から極上の出汁が出る「てっちり（ふぐ鍋）」、香ばしく炙った「ひれ酒」。",
    "spots": "下関唐戸市場、長門湯本温泉、萩温泉、湯田温泉、別府温泉",
    "access": "山陽新幹線「新下関駅」、JR下関駅。",
    "tip": "ふぐ刺しは2〜3枚を箸で豪快にすくい、たっぷりの安岡小ネギを巻いて特製ポン酢ともみじおろしでいただくのが通の食べ方です。"
  },
  {
    "key": "himi_ine_kanburi_shabu",
    "title": "3. 氷見＆伊根の「寒ブリ」しゃぶしゃぶ（荒波で身が引き締まり脂が乗った極上魚）",
    "timing": "冬期限定：11月下旬〜2月（「寒ブリ宣言」が出される厳冬期）",
    "desc": "富山湾の定置網で獲れる「ひみ寒ぶり」や、日本海の荒波と伊根湾の冷水で育つ「伊根の寒ブリ」。包丁を入れると脂で白く輝く切り身を、昆布出汁にサッとくぐらせる「ブリしゃぶ」。大根おろしとポン酢で味わう至福。",
    "spots": "氷見温泉郷（氷見漁港・ひみ番屋街）、伊根の舟屋（伊根湾）、天橋立温泉",
    "access": "JR氷見線「氷見駅」、京都丹後鉄道「天橋立駅」。",
    "tip": "寒ブリしゃぶしゃぶの出汁には千切りネギをたっぷり入れ、ブリと一緒に巻いて食べるとシャキシャキ感と脂の甘みが絶妙にマッチします。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【冬の四大味覚極上宿】松葉ガニ・越前ガニ・下関とらふぐ・寒ブリ 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "冬の日本を代表する高級海鮮グルメ完全特化！山陰・北陸のタグ付き「松葉ガニ・越前ガニ」フルコース、本場下関の「天然とらふぐ刺し・ふぐちり鍋」、富山氷見＆京都伊根の「寒ブリしゃぶ」宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/japan-winter-crab-fugu-seafood-feast-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【冬の四大味覚極上宿】松葉ガニ・越前ガニ・下関とらふぐ・寒ブリ 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/japan-winter-crab-fugu-seafood-feast-stay/" }
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
            WINTER SEAFOOD CRAB & FUGU GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「冬の四大味覚極上宿」松葉ガニ・越前ガニ・下関とらふぐ・寒ブリ 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            冬の訪れとともに解禁される日本の至高の海の幸！黄色や青のタグが輝く「松葉ガニ・越前ガニ」の茹で・焼き・カニ刺し。透き通る芸術品「下関とらふぐ」、脂の乗った「氷見・伊根の寒ブリしゃぶ」。冬の贅沢を極める温泉旅。
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

              {/* 食材の魅力・産地・味わいポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要産地＆代表的料理</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 主なアクセス＆名湯地</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 美味しく味わう極意</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの美食厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    美食プラン
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
              📊 冬の四大味覚極上宿：松葉ガニ・越前ガニ・下関とらふぐ・寒ブリ 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「冬の四大味覚極上宿：松葉ガニ・越前ガニ・下関とらふぐ・寒ブリ 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. つるぎ恋月　立山連峰を望む天然温泉旅館</td>
                <td className="p-3 text-stone-600">富山県中新川郡上市町湯上野1</td>
                <td className="p-3 text-stone-600">上市駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.1（1086件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F69393%2F69393.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 下関温泉　風の海</td>
                <td className="p-3 text-stone-600">山口県下関市長府外浦町2-1</td>
                <td className="p-3 text-stone-600">新下関駅周辺</td>
                <td className="p-3 text-stone-600">有り　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.81（249件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,050〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F165855%2F165855.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 割烹旅館　寿美礼</td>
                <td className="p-3 text-stone-600">福井県</td>
                <td className="p-3 text-stone-600">ＪＲ　下関駅より徒歩にて3分</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.54（174件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,650〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76822%2F76822.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 関門の宿　源平荘</td>
                <td className="p-3 text-stone-600">山口県下関市みもすそ川町8-8</td>
                <td className="p-3 text-stone-600">下関駅周辺</td>
                <td className="p-3 text-stone-600">２５台。 全館Ｗｉ-Ｆｉ利用可。禁煙室なし（極力消臭対応）※分煙のご協力お願い致します</td>
                <td className="p-3 font-bold text-amber-600">★4.17（519件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72022%2F72022.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 唐戸セントラルホテル</td>
                <td className="p-3 text-stone-600">山口県下関市幸町11-1</td>
                <td className="p-3 text-stone-600">下関駅周辺</td>
                <td className="p-3 text-stone-600">有料　※現金精算のみ オートバイ、軽・普通車７００円　マイクロバスまでの大型車１３００円</td>
                <td className="p-3 font-bold text-amber-600">★3.54（405件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,750〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17800%2F17800.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. ＴＯＧＥＮ　黒部　宇奈月温泉</td>
                <td className="p-3 text-stone-600">富山県黒部市宇奈月温泉22-1</td>
                <td className="p-3 text-stone-600">宇奈月温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　50台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.41（1180件）</td>
                <td className="p-3 font-bold text-rose-600">¥25,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10634%2F10634.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">つるぎ恋月　立山連峰を望む天然温泉旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（つるぎこいづき　たてやまれんぽうをのぞむてんねんおんせんりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/69393/69393_ro.jpg" alt="つるぎ恋月　立山連峰を望む天然温泉旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【美肌効果】で湯上がり時には肌もしっとり。心ゆくまでゆっくりとお寛ぎ下さいませ。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 富山県中新川郡上市町湯上野1 ／ 最寄り駅：上市 ／ 交通案内：立山ICより10分。上市駅より車にて7分。アルペンルート立山駅、宇奈月トロッコまで各50分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.02 ／ 立地 ★3.99 ／ 部屋 ★4.05 ／ 設備 ★3.88 ／ 風呂 ★4.11 ／ 食事 ★4.27</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「静かな環境と日本のおもてなしに大満足広くて静かで、落ち着いた宿泊ができました。線状降水帯のためずっと雨で立山連峰は望めませんでしたが、晴れていれば綺麗に眺められたことでしょう。スタ…　2026-10-10 15:08:36投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">下関温泉　風の海</h3>
                  <span className="text-xs text-stone-400 ml-2">（しものせきおんせん　かぜのうみ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥17,050〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/165855/165855_kan1.jpg" alt="下関温泉　風の海 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全室オーシャンビュー！温泉展望風呂付客室。海峡の風と海が織りなす極上のときをお過ごしください。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山口県下関市長府外浦町2-1 ／ 最寄り駅：新下関 ／ 交通案内：ＪＲ　新下関駅よりお車にて約２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「他の画像やクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/165855?reviewId=33123478025780　2026-07-04 17:44:37投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">割烹旅館　寿美礼</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,650〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/76822/76822.jpg" alt="割烹旅館　寿美礼 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ　下関駅より徒歩にて3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ふく料理と骨酒が最高、お風呂も充実朝夕共にお食事がふく料理でとっても美味しかったです。お酒の種類も色々あり選ぶ楽しみもあります。ふくの骨酒最高でした!貸切風呂や食事で宿を決めたい方に是非泊まってほ…　2026-09-18 22:59:10投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">関門の宿　源平荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（かんもんのやど　げんぺいそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/72022/72022_furo.jpg" alt="関門の宿　源平荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>◆ ふぐ料理が人気！全１９室の宿！ ◆ ふぐ刺しは日本一のふぐ市場より直送！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山口県下関市みもすそ川町8-8 ／ 最寄り駅：下関 ／ 交通案内：下関駅→車で12分／関門橋まで徒歩5分・唐戸市場、海響館まで車5分！</p>
                  <p><strong>【駐車場・マイカー利用】</strong>２５台。 全館Ｗｉ-Ｆｉ利用可。禁煙室なし（極力消臭対応）※分煙のご協力お願い致します</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「フグ料理も朝食も大満足、スタッフも親切フクフグコースでしたが、フグの刺身も1人前にしても多く、他の料理もとても美味しかったです。朝食も品数多くお腹一杯になりました。スタッフの皆さんも明るく親切でし…　2026-08-09 11:22:59投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">唐戸セントラルホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（からと　せんとらるほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,750〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/17800/17800_sig.jpg" alt="唐戸セントラルホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>関門海峡エリアの下関界隈と、対岸の門司港レトロの散策、角島など山陰方面へのドライブの観光拠点です！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山口県下関市幸町11-1 ／ 最寄り駅：下関 ／ 交通案内：ＪＲ下関駅より車で7分.下関I..Cから車で10分／バス停「唐戸」から０.6ｋｍ、「西の端」から0.2ｋｍ。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有料　※現金精算のみ オートバイ、軽・普通車７００円　マイクロバスまでの大型車１３００円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「建物は古いがスタッフの対応と立地は抜群初めて泊まりました。全体的に古い感じで暗い感じのホテルでした。スタッフの方達は皆さん凄く感じいいかたでした。お風呂は、私廊下渡って隣接している施設…　2026-08-11 10:04:17投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＴＯＧＥＮ　黒部　宇奈月温泉</h3>
                  <span className="text-xs text-stone-400 ml-2">（とうげん　くろべ　うなづきおんせん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥25,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/10634/10634_rm.jpg" alt="ＴＯＧＥＮ　黒部　宇奈月温泉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>黒部峡谷や立山黒部アルペンルートの観光の拠点にぴったり！黒部川の眺望抜群♪貸切露天風呂の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 富山県黒部市宇奈月温泉22-1 ／ 最寄り駅：宇奈月温泉 ／ 交通案内：富山地方鉄道「宇奈月温泉駅」より徒歩５分。北陸HW黒部ＩＣより２０分。立山・黒部アルペンルート立山駅まで約８０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　50台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.49 ／ 立地 ★4.47 ／ 部屋 ★4.34 ／ 設備 ★4.27 ／ 風呂 ★4.37 ／ 食事 ★4.52</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事は満腹、24時間入れる熱めのお風呂お料理に重点を置いたホテル 夕朝食共にお腹いっぱいになりましたお風呂は24時間入れるところが良かった(男女入れ替え清掃時間有り)温度は熱めクチコミ…　2026-09-24 11:46:32投稿」
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
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="japan-winter-crab-fugu-seafood-feast-stay" />
</div>
  );
}
