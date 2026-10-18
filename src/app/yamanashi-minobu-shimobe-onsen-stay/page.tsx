import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/yamanashi-minobu-shimobe-onsen-stay/" },
  title: "山梨・身延山＆下部温泉：日蓮宗総本山久遠寺しだれ桜・信玄隠し湯宿 厳選ガイド",
  description: "祈りの霊峰と武田信玄公の隠し湯・山梨身延＆下部エリア完全特化！日蓮宗総本山「身延山久遠寺（樹齢400年しだれ桜・菩提梯287段）」、身延山ロープウェイ奥之院、日本の名湯百選「下部温泉（ぬる湯治）」、名物「身延まんじゅう宿」を徹底解説。",
  keywords: ["山梨", "身延山", "下部温泉", "日蓮宗総本山久遠寺しだれ桜", "信玄隠し湯宿", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "山梨・身延山＆下部温泉：日蓮宗総本山久遠寺しだれ桜・信玄隠し湯宿 厳選ガイド",
    description: "祈りの霊峰と武田信玄公の隠し湯・山梨身延＆下部エリア完全特化！日蓮宗総本山「身延山久遠寺（樹齢400年しだれ桜・菩提梯287段）」、身延山ロープウェイ奥之院、日本の名湯百選「下部温泉（ぬる湯治）」、名物「身延まんじゅう宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "山梨・身延山＆下部温泉：日蓮宗総本山久遠寺しだれ桜・信玄隠し湯宿 厳選ガイド",
    description: "祈りの霊峰と武田信玄公の隠し湯・山梨身延＆下部エリア完全特化！日蓮宗総本山「身延山久遠寺（樹齢400年しだれ桜・菩提梯287段）」、身延山ロープウェイ奥之院、日本の名湯百選「下部温泉（ぬる湯治）」、名物「身延まんじゅう宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamanashi-minobu-shimobe-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamanashi-minobu-shimobe-onsen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shimobe_onsen_shingen_stay",
    "title": "1. 下部温泉郷〜武田信玄公の隠し湯（30℃前後の極上「ぬる湯」交互浴）",
    "timing": "通年（疲労回復・長湯が心地よい夏のぬる湯治）",
    "desc": "開湯1200年、武田信玄公が傷を癒やした古湯「下部（しもべ）温泉」。約30℃前後の冷鉱泉（アルカリ性単純温泉）と加温した熱湯を交互に入る「交互入浴法」。自律神経を整え、何時間でも浸かっていられる奇跡の名湯。",
    "spots": "下部温泉郷（下部ホテル・古湯坊源泉館・裕貴屋）、しもべ黄金の足湯、下部川渓流散策路",
    "access": "JR身延線「下部温泉駅」下車すぐ。中部横断道「下部温泉早川IC」より約5分。",
    "tip": "下部温泉のぬる湯は、浸かって数分経つと体温と一体化するような不思議な感覚になり、副交感神経が優位になって極上のリラックスが得られます。"
  },
  {
    "key": "minobusan_kuonji_shukubo_stay",
    "title": "2. 身延山久遠寺〜奥之院思親閣・身延山ロープウェイ（日蓮宗総本山の桜と絶景）",
    "timing": "春期：3月下旬〜4月上旬のしだれ桜・秋の紅葉・冬のダイヤモンド富士",
    "desc": "鎌倉時代に日蓮聖人によって開創された「身延山久遠寺」。本堂前に枝を広げる国の天然記念物「樹齢400年のしだれ桜」。三門から本堂へと続く287段の急勾配な石段「菩提梯（ぼだいてい）」。ロープウェイで登る標高1,153mの山頂奥之院。",
    "spots": "身延山久遠寺（本堂・五重塔・しだれ桜・菩提梯）、身延山ロープウェイ、奥之院思親閣（御来光・富士山パノラマ）、門前町",
    "access": "JR身延線「身延駅」より山梨交通バス「身延山行」で約12分。",
    "tip": "身延山山頂の展望台からは、東に富士山、南に駿河湾、西に七面山、北に南アルプス八ヶ岳連峰を望む大パノラマが広がります。"
  },
  {
    "key": "minobu_yuba_koshu_beef_stay",
    "title": "3. 身延特産「身延ゆば」＆身延まんじゅう（大豆の濃厚な甘みと門前スイーツ）",
    "timing": "通年（参拝帰りのできたて身延まんじゅうは必食）",
    "desc": "日蓮聖人に弟子が栄養価の高い食事として捧げたのが始まりとされる「身延ゆば（湯葉）」。何層にも巻き上げた角ゆばや生ゆばのお造り。小麦粉の生地に甘さ控えめのこし餡を包んで蒸し上げた名物「身延まんじゅう（栄昇堂）」。",
    "spots": "栄昇堂（身延駅前の名店）、ゆばの里、身延門前町のゆば料理店、下部温泉の会席旅館",
    "access": "身延駅前・身延山門前町。",
    "tip": "アニメ『ゆるキャン△』でも登場した身延駅前の「栄昇堂」の身延まんじゅうは、富士川の河川敷ベンチに座って川風を感じながら食べるのがファンの定番です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【山梨・身延山＆下部温泉】日蓮宗総本山久遠寺しだれ桜・信玄隠し湯宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "祈りの霊峰と武田信玄公の隠し湯・山梨身延＆下部エリア完全特化！日蓮宗総本山「身延山久遠寺（樹齢400年しだれ桜・菩提梯287段）」、身延山ロープウェイ奥之院、日本の名湯百選「下部温泉（ぬる湯治）」、名物「身延まんじゅう宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/yamanashi-minobu-shimobe-onsen-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【山梨・身延山＆下部温泉】日蓮宗総本山久遠寺しだれ桜・信玄隠し湯宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/yamanashi-minobu-shimobe-onsen-stay/" }
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
            MINOBU & SHIMOBE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「山梨・身延山＆下部温泉」日蓮宗総本山久遠寺しだれ桜・信玄隠し湯宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日蓮聖人が開いた祈りの聖山「身延山久遠寺」。春に境内を覆い尽くす樹齢400年の巨木しだれ桜と、287段の石段・菩提梯。川中島の戦いで傷を癒やしたと伝わる武田信玄公の隠し湯「下部温泉」。ぬる湯と熱湯を交互に楽しむ極上の湯治ステイへ。
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
              📊 山梨・身延山＆下部温泉：日蓮宗総本山久遠寺しだれ桜・信玄隠し湯宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「山梨・身延山＆下部温泉：日蓮宗総本山久遠寺しだれ桜・信玄隠し湯宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 山梨県の温泉旅館　下部温泉郷　下部ホテル</td>
                <td className="p-3 text-stone-600">山梨県南巨摩郡身延町上之平1900</td>
                <td className="p-3 text-stone-600">下部温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　１００台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.36（1307件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,050〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40916%2F40916.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 健康・旬彩の宿　下部温泉　ホテル守田</td>
                <td className="p-3 text-stone-600">山梨県南巨摩郡身延町下部990</td>
                <td className="p-3 text-stone-600">下部温泉駅周辺</td>
                <td className="p-3 text-stone-600">【有】5台無料／それ以上の場合は近くの空いている場所にお停めください（先着順）</td>
                <td className="p-3 font-bold text-amber-600">★4.41（251件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2501%2F2501.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 下部温泉　湯元ホテル</td>
                <td className="p-3 text-stone-600">山梨県南巨摩郡身延町下部35</td>
                <td className="p-3 text-stone-600">下部温泉駅周辺</td>
                <td className="p-3 text-stone-600">事前にご案内をお送りしますので、メールアドレスをお知らせください。</td>
                <td className="p-3 font-bold text-amber-600">★3.5（451件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,350〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8911%2F8911.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 世界最古の宿・ギネスブック認定　全館源泉掛け流し　西山温泉　慶雲館（２０２６年３月リニューアル）</td>
                <td className="p-3 text-stone-600">山梨県南巨摩郡早川町湯島白沢８３</td>
                <td className="p-3 text-stone-600">身延駅周辺</td>
                <td className="p-3 text-stone-600">有り　６０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.6（799件）</td>
                <td className="p-3 font-bold text-rose-600">¥30,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67121%2F67121.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">山梨県の温泉旅館　下部温泉郷　下部ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（やまなしけんのおんせんりょかん　しもべおんせんきょう　しもべほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥17,050〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/40916/40916_hu.jpg" alt="山梨県の温泉旅館　下部温泉郷　下部ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>泉質の異なる「三種類の源泉」を、七つの露天風呂を含む大浴場など「十二の湯舟」でご堪能いただけます</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県南巨摩郡身延町上之平1900 ／ 最寄り駅：下部温泉 ／ 交通案内：ＪＲ身延線下部温泉駅徒歩１分／車：中部横断道下部温泉早川ＩＣより５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１００台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.58 ／ 立地 ★4.31 ／ 部屋 ★4.27 ／ 設備 ★4.27 ／ 風呂 ★4.54 ／ 食事 ★4.45</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフのイベントが魅力的で大満足!8月のお盆休みで、子供達、孫達と宿泊させて頂きました。スタッフのイベントの取り組みが、いっぱいでとても魅力的で。楽しませてもらいましたも足湯も、とて…　2026-10-10 21:38:24投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">健康・旬彩の宿　下部温泉　ホテル守田</h3>
                  <span className="text-xs text-stone-400 ml-2">（けんこう・しゅんさいのやど　しもべおんせん　ほてるもりた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/2501/2501_heya.jpg" alt="健康・旬彩の宿　下部温泉　ホテル守田 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【薬石サウナも人気】あつ湯とぬる湯を交互に楽しむ「武田信玄のかくし湯」が有名</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県南巨摩郡身延町下部990 ／ 最寄り駅：下部温泉 ／ 交通案内：ＪＲ身延線下部温泉駅下車（送迎車で3分）／中部横断自動車道下部温泉早川ＩＣよりＲ300号経由8分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>【有】5台無料／それ以上の場合は近くの空いている場所にお停めください（先着順）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「子供が完食する食事と家族風呂で癒やされる1月に初めて泊まって、2回目の宿泊です。お宿の方もみんな親切です。子どもが旅行に行くとご飯を食べないことがあるけど、ここのお宿のご飯は完食してくれます。味も…　2026-08-29 09:37:59投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">下部温泉　湯元ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（しもべおんせん　ゆもとほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,350〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8911/8911_room.jpg" alt="下部温泉　湯元ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>自家屋内に湯口を有し、湧出量は下部温泉 No,1。山間部の湯治旅館です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県南巨摩郡身延町下部35 ／ 最寄り駅：下部温泉 ／ 交通案内：JR下部温泉駅より徒歩18分。駐車場あり。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>事前にご案内をお送りしますので、メールアドレスをお知らせください。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉を楽しむには最適、設備は古め昭和の遺構的なホテル。温泉を楽しむ為ならとても良いです。綺麗や快適さを求めるならオススメしません。他の画像やクチコミの詳細はこちらから　https://…　2026-08-25 08:00:14投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">世界最古の宿・ギネスブック認定　全館源泉掛け流し　西山温泉　慶雲館（２０２６年３月リニューアル）</h3>
                  <span className="text-xs text-stone-400 ml-2">（せかいさいこのやど・ぎねすぶっくにんてい　ぜんかんげんせんかけながし　にしやまおんせん　けいうんかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥30,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/67121/67121_kw.jpg" alt="世界最古の宿・ギネスブック認定　全館源泉掛け流し　西山温泉　慶雲館（２０２６年３月リニューアル） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>２０２６年３月リニューアル★日本随一の湯量。毎分１６３０リットル、 全館全て源泉掛け流し ギネス登録</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県南巨摩郡早川町湯島白沢８３ ／ 最寄り駅：身延 ／ 交通案内：ＪＲ身延線　身延駅よりバスに乗車（送迎バス有り）13:40発 　翌日送り　9:50発　(※1日1便。要事前予約)</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　６０台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.69 ／ 立地 ★4.62 ／ 部屋 ★4.49 ／ 設備 ★4.42 ／ 風呂 ★4.76</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋のアップグレードと温泉に大満足まずは部屋のアップグレードありがとう御座いました。広くて綺麗な部屋で、より一層ゆっくりできました。宿の方は親切で愛想よく、料理も全て美味しい。源泉かけ流し、飲…　2026-10-10 17:33:00投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！山梨県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、山梨県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">富士山（吉田ルート/五合目）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本の最高峰であり世界文化遺産の象徴。富士スバルラインで行く五合目は観光施設が充実し、眼下に雲海を望む圧巻のスタート地点です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">新倉山浅間公園（忠霊塔）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">五重塔（忠霊塔）越しに雄大な富士山と満開の桜を一望できる、世界中の観光客が熱望する「これぞ日本」という究極のアジアンビジュアルスポット。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">富士五湖（河口湖）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富士山の北麓に位置する静かな湖畔リゾート。四季折々の富士山が水面に映る「逆さ富士」や、大石公園のコキア・ラベンダー越しのアングルが人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">勝沼ぶどうの丘</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本有数のワイン産地・勝沼の高台に立つ総合ワインリゾート。タパスとともに100種類以上の甲州ワインを試飲できる地下ワインカーヴが魅力です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 山梨県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 山梨県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="yamanashi-minobu-shimobe-onsen-stay" />
</div>
  );
}
