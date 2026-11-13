import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/nagano-togakushi-shrine-soba-stay/" },
  title: "長野・戸隠＆飯綱高原：戸隠神社五社巡り・奥社杉並木＆日本三大戸隠そば宿 厳選ガイド",
  description: "神話と巨樹の霊山・長野戸隠エリア完全特化！天照大御神の岩戸伝説息づく「戸隠神社五社（奥社・中社・宝光社・九頭龍社・火之御子社）」、樹齢400年奥社杉並木、日本三大そば「戸隠そば（ぼっち盛り）」、戸隠温泉・宿坊旅館を徹底解説。",
  keywords: ["長野", "戸隠", "飯綱高原", "戸隠神社五社巡り", "奥社杉並木", "日本三大戸隠そば宿", "温泉宿"],
  openGraph: {
    title: "長野・戸隠＆飯綱高原：戸隠神社五社巡り・奥社杉並木＆日本三大戸隠そば宿 厳選ガイド",
    description: "神話と巨樹の霊山・長野戸隠エリア完全特化！天照大御神の岩戸伝説息づく「戸隠神社五社（奥社・中社・宝光社・九頭龍社・火之御子社）」、樹齢400年奥社杉並木、日本三大そば「戸隠そば（ぼっち盛り）」、戸隠温泉・宿坊旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "長野・戸隠＆飯綱高原：戸隠神社五社巡り・奥社杉並木＆日本三大戸隠そば宿 厳選ガイド",
    description: "神話と巨樹の霊山・長野戸隠エリア完全特化！天照大御神の岩戸伝説息づく「戸隠神社五社（奥社・中社・宝光社・九頭龍社・火之御子社）」、樹齢400年奥社杉並木、日本三大そば「戸隠そば（ぼっち盛り）」、戸隠温泉・宿坊旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagano-togakushi-shrine-soba-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagano-togakushi-shrine-soba-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "togakushi_shrine_shukubo_stay",
    "title": "1. 戸隠神社奥社〜杉並木参道・中社（樹齢400年の巨樹回廊と五社巡り）",
    "timing": "通年（春〜秋の参拝・紅葉の10月中旬・冬の静寂の雪参道）",
    "desc": "2,000年以上の歴史を誇る聖地「戸隠神社」。奥社参道の随神門をくぐると現れる約500mに及ぶ樹齢400年の巨大な杉並木（国の天然記念物）。天八意思兼命を祀る中社。歴史ある宿坊での朝拝や精進料理の体験。",
    "spots": "戸隠神社（奥社・中社・宝光社・九頭龍社・火之御子社）、奥社参道杉並木、鏡池（戸隠連峰を映す池）",
    "access": "JR長野駅（北陸新幹線）より路線バス「戸隠線」で約60〜70分。上信越道「信濃町IC」より約30分。",
    "tip": "「鏡池」は風のない早朝に訪れると、水面が完全に鏡となり、険しい戸隠連峰と鮮やかな紅葉がシンメトリーに映り込む絶景が楽しめます。"
  },
  {
    "key": "iizuna_highland_resort_stay",
    "title": "2. 飯綱高原〜チビッ子忍者村・戸隠森林植物園（忍者からくり屋敷と水芭蕉の湿原）",
    "timing": "グリーンシーズン：4月下旬〜11月上旬（初夏の水芭蕉・秋の紅葉）",
    "desc": "戸隠流忍術の発祥地。「忍法資料館・からくり屋敷」や子どもから大人まで楽しめる「チビッ子忍者村」。初夏に数十万本の水芭蕉が咲き乱れる「戸隠森林植物園（八十二森のまなびや）」。飯綱高原の静寂な湖畔キャンプ＆ロッジ。",
    "spots": "戸隠流忍法資料館・からくり屋敷、チビッ子忍者村、戸隠森林植物園（みどりが池・水芭蕉園）、大座法師池",
    "access": "長野駅より車・バスで約30〜40分。",
    "tip": "「からくり屋敷」は大人でも出口を見つけるのが難しい本格的な隠し扉や抜け道が満載で、知的好奇心を刺激される大人気スポットです。"
  },
  {
    "key": "togakushi_soba_soba_gourmet",
    "title": "3. 日本三大そば「戸隠そば」＆ぼっち盛り（挽きぐるみ粉と円形ざるの伝統）",
    "timing": "通年（11月上旬の戸隠そば祭り・新そばシーズンは格別）",
    "desc": "わんこそば・出雲そばと並ぶ日本三大そば「戸隠そば」。甘皮を取らずに挽く風味豊かな蕎麦。一口大に束ねて5つ盛る伝統の「ぼっち盛り（戸隠五社に由来）」。辛味大根の絞り汁や戸隠特産のクルミつゆで味わう絶品。",
    "spots": "うずら家（行列の絶えない名店）、極楽坊、そば処 よつかど、戸隠そば博物館とんくるりん（手打ち体験）",
    "access": "戸隠中社周辺・そば街道。",
    "tip": "戸隠そばの名店「うずら家」は早朝から記帳台が出されるため、朝一番に名前を書いてから戸隠神社を参拝するとスムーズに名店の味を堪能できます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【長野・戸隠＆飯綱高原】戸隠神社五社巡り・奥社杉並木＆日本三大戸隠そば宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "神話と巨樹の霊山・長野戸隠エリア完全特化！天照大御神の岩戸伝説息づく「戸隠神社五社（奥社・中社・宝光社・九頭龍社・火之御子社）」、樹齢400年奥社杉並木、日本三大そば「戸隠そば（ぼっち盛り）」、戸隠温泉・宿坊旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/nagano-togakushi-shrine-soba-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【長野・戸隠＆飯綱高原】戸隠神社五社巡り・奥社杉並木＆日本三大戸隠そば宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/nagano-togakushi-shrine-soba-stay/" }
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
            TOGAKUSHI & JINJA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「長野・戸隠＆飯綱高原」戸隠神社五社巡り・奥社杉並木＆日本三大戸隠そば宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            天手力雄命が投げ飛ばした天の岩戸が落ちてできたと伝わる霊峰「戸隠山」。樹齢400年を超える杉並木が続く戸隠神社奥社参道。一本のソバを丁寧に束ねる「ぼっち盛り」の日本三大戸隠そば。歴史ある宿坊や高原リゾートで心洗われる休日へ。
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
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">{guide.title}</h2>
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
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2"><span>{guide.title}周辺のおすすめ厳選宿</span></h3>
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-emerald-950 line-clamp-2">{hotel.hotelName}</h4>
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
                            </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

                    
        {/* Enriched Rakuten Travel Hotel Specs */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">長野・戸隠＆飯綱高原：戸隠神社五社巡り・奥社杉並木＆日本三大戸隠そば宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析</h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「長野・戸隠＆飯綱高原：戸隠神社五社巡り・奥社杉並木＆日本三大戸隠そば宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 旅館　横倉　宿坊（旧十輪院）</td>
                <td className="p-3 text-stone-600">長野県長野市戸隠中社3347</td>
                <td className="p-3 text-stone-600">長野駅周辺</td>
                <td className="p-3 text-stone-600">有り　10台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4（147件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,545〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9370%2F9370.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 黒姫高原　ホテル若月＜長野県＞</td>
                <td className="p-3 text-stone-600">長野県上水内郡信濃町黒姫高原</td>
                <td className="p-3 text-stone-600">黒姫駅周辺</td>
                <td className="p-3 text-stone-600">有り　３０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★5（7件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18707%2F18707.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテルナガノアベニュー</td>
                <td className="p-3 text-stone-600">長野県長野市南千歳2-8-5</td>
                <td className="p-3 text-stone-600">長野駅周辺</td>
                <td className="p-3 text-stone-600">ホテルより徒歩4分TOiGOパーキング入庫より24時間出し入れなし800円（高さ制限2.1M）</td>
                <td className="p-3 font-bold text-amber-600">★4.2（3766件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5208%2F5208.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 宿坊旅館　大西</td>
                <td className="p-3 text-stone-600">長野県長野市戸隠3500</td>
                <td className="p-3 text-stone-600">長野駅周辺</td>
                <td className="p-3 text-stone-600">有り　30台　無料</td>
                <td className="p-3 font-bold text-amber-600">★3.33（26件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8447%2F8447.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">旅の目的に合わせて選ぶ「長野・戸隠＆飯綱高原」各宿の強みと基本情報</h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">旅館　横倉　宿坊（旧十輪院）</h3>
                  <span className="text-xs text-stone-400 ml-2">（りょかん　よこくら　しゅくぼう（きゅうじゅうりんいん））</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,545〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9370/9370_war.jpg" alt="旅館　横倉　宿坊（旧十輪院） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>戸隠神社中社近くにある茅葺屋根の宿坊旅館。土蔵造りのモダンな喫茶室もあるクラシックな宿です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県長野市戸隠中社3347 ／ 最寄り駅：長野 ／ 交通案内：JR長野駅より車・バスで1時間『戸隠中社宮前』下車</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　10台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💡 <strong>旅館　横倉　宿坊（旧十輪院）の滞在ポイント：</strong>「長野・戸隠＆飯綱高原エリアの散策拠点に適した立地。客室タイプや食事の有無・駐車場条件を旅程に合わせて比較するのがおすすめです。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">黒姫高原　ホテル若月＜長野県＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（くろひめこうげん　わかつき＜ながのけん＞）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/18707/18707_r1.jpg" alt="黒姫高原　ホテル若月＜長野県＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>森と清流に恵まれた黒姫高原の宿「ホテル若月」広い敷地内で釣りやBBQも楽しめます♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県上水内郡信濃町黒姫高原 ／ 最寄り駅：黒姫 ／ 交通案内：しなの鉄道北しなの線・黒姫駅からバス【黒姫高原行き】若月前下車徒歩３分／上信越道・信濃町ＩＣから黒姫高原方面約５ｋｍ</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💡 <strong>黒姫高原　ホテル若月＜長野県＞の滞在ポイント：</strong>「長野・戸隠＆飯綱高原エリアの散策拠点に適した立地。客室タイプや食事の有無・駐車場条件を旅程に合わせて比較するのがおすすめです。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルナガノアベニュー</h3>
                  <span className="text-xs text-stone-400 ml-2">（ながのあべにゅー）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5208/5208_sgl.jpg" alt="ホテルナガノアベニュー 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>旅の疲れを癒すお風呂と本格サウナ！◇図書室マンガ約5000冊&amp;amp;地元情報誌沢山！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県長野市南千歳2-8-5 ／ 最寄り駅：長野 ／ 交通案内：JR長野駅（善光寺口）を出て駅を背にして長野大通りを右（北上）へまっすぐ徒歩7～8分◆上信越自動車道長野ICより３０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>ホテルより徒歩4分TOiGOパーキング入庫より24時間出し入れなし800円（高さ制限2.1M）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食が最高で大満足朝食が最高でした」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宿坊旅館　大西</h3>
                  <span className="text-xs text-stone-400 ml-2">（しゅくぼうりょかん　おおにし）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8447/8447_war.jpg" alt="宿坊旅館　大西 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>戸隠パワースポット巡りに最適◎戸隠神社中社徒歩3分の好立地！ 絶品手打ちそばと、心ほどけるひとときを</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県長野市戸隠3500 ／ 最寄り駅：長野 ／ 交通案内：長野道長野ICより車で1時間</p>
                  <p>【長野・戸隠＆飯綱高原：戸隠神社五社巡り・奥社杉並木＆】 <strong>【駐車場・マイカー利用】</strong>有り　30台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💡 <strong>宿坊旅館　大西の滞在ポイント：</strong>「長野・戸隠＆飯綱高原エリアの散策拠点に適した立地。客室タイプや食事の有無・駐車場条件を旅程に合わせて比較するのがおすすめです。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div></section>



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
    
      <HubRelatedPosts currentSlug="nagano-togakushi-shrine-soba-stay" />
</div>
  );
}
