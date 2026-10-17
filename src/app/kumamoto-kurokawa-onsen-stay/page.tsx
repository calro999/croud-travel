import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kumamoto-kurokawa-onsen-stay/" },
  title: "熊本・黒川温泉：入湯手形＆渓流露天風呂めぐり極上宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "阿蘇・黒川温泉エリア完全特化！入湯手形での28露天風呂めぐり、川端通りの食べ歩き、囲炉裏料理と渓流沿いの隠れ家木造旅館を徹底解説。",
  keywords: ["熊本", "黒川温泉", "入湯手形", "渓流露天風呂めぐり極上宿", "温泉宿", "宿泊予約", "楽天トラベル"],
  openGraph: {
    title: "熊本・黒川温泉：入湯手形＆渓流露天風呂めぐり極上宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "阿蘇・黒川温泉エリア完全特化！入湯手形での28露天風呂めぐり、川端通りの食べ歩き、囲炉裏料理と渓流沿いの隠れ家木造旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "熊本・黒川温泉：入湯手形＆渓流露天風呂めぐり極上宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "阿蘇・黒川温泉エリア完全特化！入湯手形での28露天風呂めぐり、川端通りの食べ歩き、囲炉裏料理と渓流沿いの隠れ家木造旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kumamoto-kurokawa-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kumamoto-kurokawa-onsen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kurokawa_river",
    "title": "1. 川端通り・温泉街中心部（田の原川のせせらぎと風情ある木造旅館街）",
    "timing": "通年（冬は竹灯籠「湯あかり」開催）",
    "desc": "黒川温泉の中心を流れる田の原川沿い。石段や小径に風情ある旅館が並び、浴衣姿で歩くだけで旅情に浸れます。川のせせらぎを間近に感じる渓流露天風呂と、肥後赤牛や旬の山菜会席を満喫。",
    "spots": "川端通り、ふれあい通り、地蔵堂（首なし地蔵）、べっちん館（入湯手形購入）",
    "access": "熊本空港より車で約80分。博多駅・熊本駅より直行高速バス運行。",
    "tip": "中心部の「どらどら」で味わう出来立ての「どら焼きアイス」や地酒ソフトクリームが食べ歩きに大人気です。"
  },
  {
    "key": "kurokawa_okugomori",
    "title": "2. 奥黒川・静寂の山あいの里（全室離れ・客室専用露天風呂のおこもりステイ）",
    "timing": "通年（新緑・秋の紅葉・冬の雪景色）",
    "desc": "温泉街の中心部から少し離れた静かな森の中に佇む「奥黒川」。広大な敷地に数室限定の独立型ヴィラや離れが点在し、専用の源泉かけ流し露天風呂で誰にも邪魔されない至福の時間を過ごせます。",
    "spots": "平野台親水公園（恋人の聖地・阿蘇パノラマ展望台）、小萩山稲荷神社、夫婦滝",
    "access": "黒川温泉バス停より各旅館の無料送迎車で約5〜10分。",
    "tip": "夕暮れ時に平野台展望台へドライブすると、阿蘇五岳と祖母連山を赤く染める夕日パノラマが楽しめます。"
  },
  {
    "key": "kurokawa_tegata",
    "title": "3. 入湯手形露天風呂めぐり（洞窟風呂・立ち湯・滝見露天風呂の個性派湯めぐり）",
    "timing": "通年（入湯手形1枚で3箇所の露天風呂に入浴可能）",
    "desc": "黒川温泉の代名詞「入湯手形（大人1,500円）」。混浴大露天風呂や、深さ1.5mの「立ち湯」、青い光が差し込む「洞窟風呂」、滝を眺める「滝見風呂」など、趣の異なる名湯を心ゆくまで満喫。",
    "spots": "いこい旅館（日本名湯秘湯百選・立ち湯）、山みず木（幽谷の渓流露天）、黒川荘（びょうぶ岩露天）",
    "access": "各旅館へは温泉街巡回バスや徒歩でアクセス。",
    "tip": "入湯手形を使い終わった後は、旅の記念に持ち帰るか、温泉街の地蔵堂に奉納して旅の安全を祈願できます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【熊本・黒川温泉】入湯手形＆渓流露天風呂めぐり極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "阿蘇・黒川温泉エリア完全特化！入湯手形での28露天風呂めぐり、川端通りの食べ歩き、囲炉裏料理と渓流沿いの隠れ家木造旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/kumamoto-kurokawa-onsen-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【熊本・黒川温泉】入湯手形＆渓流露天風呂めぐり極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/kumamoto-kurokawa-onsen-stay/" }
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
            KUROKAWA ONSEN MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「熊本・黒川温泉」入湯手形＆渓流露天風呂めぐり極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            杉木立に囲まれた山あいの渓流沿いに、統一された黒と木目の落ち着いた旅館が連なる「黒川温泉」。入湯手形を首から下げて下駄を鳴らし、個性豊かな露天風呂を巡る極上の癒やし旅。
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
              📊 熊本・黒川温泉：入湯手形＆渓流露天風呂めぐり極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「熊本・黒川温泉：入湯手形＆渓流露天風呂めぐり極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 黒川温泉　いこい旅館</td>
                <td className="p-3 text-stone-600">熊本県阿蘇郡南小国町黒川温泉川端通り</td>
                <td className="p-3 text-stone-600">阿蘇駅周辺</td>
                <td className="p-3 text-stone-600">１５台収容。無料にてご用意致しております。</td>
                <td className="p-3 font-bold text-amber-600">★4.72（769件）</td>
                <td className="p-3 font-bold text-rose-600">¥20,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F55943%2F55943.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 全室離れの温泉宿　久邸</td>
                <td className="p-3 text-stone-600">熊本県阿蘇郡南小国町満願寺5853-1</td>
                <td className="p-3 text-stone-600">熊本空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　14台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★3.2（12件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187482%2F187482.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 白川温泉　華匠庵＜熊本県＞</td>
                <td className="p-3 text-stone-600">熊本県阿蘇郡南小国町満願寺5704-1</td>
                <td className="p-3 text-stone-600">日田インターからお車で約１時間／熊本インターからお車で約１時間４０分／</td>
                <td className="p-3 text-stone-600">有り　9台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★5（285件）</td>
                <td className="p-3 font-bold text-rose-600">¥18,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F128469%2F128469.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 日田　琴平温泉　旅籠かやうさぎ</td>
                <td className="p-3 text-stone-600">大分県日田市琴平1529-1</td>
                <td className="p-3 text-stone-600">日田駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.79（197件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108589%2F108589.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 飛瀬温泉　天河山荘</td>
                <td className="p-3 text-stone-600">熊本県阿蘇郡南小国町満願寺飛瀬2820</td>
                <td className="p-3 text-stone-600">阿蘇駅周辺</td>
                <td className="p-3 text-stone-600">有り　7台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.56（49件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,850〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79283%2F79283.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 黒川温泉　夢龍胆</td>
                <td className="p-3 text-stone-600">熊本県阿蘇郡南小国町満願寺6430-1</td>
                <td className="p-3 text-stone-600">阿蘇駅周辺</td>
                <td className="p-3 text-stone-600">有り　３０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.32（402件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4725%2F4725.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">黒川温泉　いこい旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（くろかわ　いこい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥20,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/55943/55943_ky.jpg" alt="黒川温泉　いこい旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>黒川温泉で唯一の日本名湯秘湯百選の宿。館内１４のお風呂で湯めぐりが出来ます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県阿蘇郡南小国町黒川温泉川端通り ／ 最寄り駅：阿蘇 ／ 交通案内：JR熊本駅より九州横断バスにて2時間50分。JR博多駅より西鉄バスにて2時間40分。熊本空港より車で1時間30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>１５台収容。無料にてご用意致しております。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「料理と温泉は良いが設備や案内に不安あり料理、温泉は最高でした。でも別館の説明が雑だと思います。通常別館といえば割と近くにあるイメージでしたが、別館が多くある事を詳細に載せる必要があると思います。そ…　2026-08-07 21:47:31投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">全室離れの温泉宿　久邸</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぜんしつはなれのおんせんやど　きゅうてい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥17,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/187482/187482.jpg" alt="全室離れの温泉宿　久邸 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>自然豊かな山の隠れ家　全室離れの温泉宿　贅沢な食と自然に癒される至福のひととき「人と時を癒す宿」</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県阿蘇郡南小国町満願寺5853-1 ／ 最寄り駅：熊本空港 ／ 交通案内：熊本空港よりお車にて約90分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　14台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「全室離れの温泉宿　久邸は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">白川温泉　華匠庵＜熊本県＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（しらかわおんせん　はなしょうあん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥18,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/128469/128469_kya.jpg" alt="白川温泉　華匠庵＜熊本県＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>阿蘇の魅力を五感で感じる！都会の喧騒ざわめきを通り抜け佇む隠れ宿。湯の華舞う温泉郷屈指の良泉</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県阿蘇郡南小国町満願寺5704-1 ／ 最寄り駅：主要駅 ／ 交通案内：日田インターからお車で約１時間／熊本インターからお車で約１時間４０分／黒川温泉から車で5分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　9台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★5 ／ 立地 ★4.77 ／ 部屋 ★4.95 ／ 設備 ★4.82 ／ 風呂 ★4.82 ／ 食事 ★5</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「美味しい食事と温かいおもてなしに大満足着いたら、ウェルカムドリンクとデザートでおもてなしして頂き、夕飯はどれも美味しく一緒に行った両親もとても喜んでいました。朝ごはんも、とっても美味しかったで…　2026-08-18 09:32:55投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">日田　琴平温泉　旅籠かやうさぎ</h3>
                  <span className="text-xs text-stone-400 ml-2">（ひたことひらおんせん　はたご　かやうさぎ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/108589/108589_hy1.jpg" alt="日田　琴平温泉　旅籠かやうさぎ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>日田の奥座敷にひっそりと佇む大正浪漫の宿。高い評価を頂く、食で、滞在をより印象的なものへと導きます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 大分県日田市琴平1529-1 ／ 最寄り駅：日田 ／ 交通案内：JR日田駅、日田バスセンターから車で１０分（送迎可） 日田ICから車で15分、湯布院温泉、別府温泉、黒川温泉迄1時間圏内</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.85 ／ 立地 ★4.76 ／ 部屋 ★4.88 ／ 設備 ★4.78 ／ 風呂 ★4.82 ／ 食事 ★4.9</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「毎年通うほど全てが最高!3年ほど前に見つけた、最高の宿毎年いってます!雰囲気、お風呂、料理全てが最高!他の画像やクチコミの詳細はこちらから　https://review.trave…　2026-10-07 10:12:35投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">飛瀬温泉　天河山荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（とびせおんせん　てんがさんそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,850〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/79283/79283_kya.jpg" alt="飛瀬温泉　天河山荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>山の奥、そのまた奥へと続く、そこはいちばん深い癒しの場所　大切なあの人と至福の時を</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県阿蘇郡南小国町満願寺飛瀬2820 ／ 最寄り駅：阿蘇 ／ 交通案内：阿蘇駅よりお車で４０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　7台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「静かで綺麗な旅館、温泉と食事が最高ホスピタリティ溢れる、綺麗な旅館でした!7部屋しかないので、色々混むことはなく過ごせます。部屋に立派な温泉がついていますが、貸切風呂もすごく良かったです。…　2026-05-06 06:38:01投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">黒川温泉　夢龍胆</h3>
                  <span className="text-xs text-stone-400 ml-2">（くろかわおんせん　ゆめりんどう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4725/4725_heya1.jpg" alt="黒川温泉　夢龍胆 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>黒川温泉中心部に位置し、清流田ノ原川のほとりに面した情緒溢れるお料理自慢の純和風旅館。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 熊本県阿蘇郡南小国町満願寺6430-1 ／ 最寄り駅：阿蘇 ／ 交通案内：大分道日田ＩＣより車で６０分、黒川温泉バス停より徒歩1分。送迎あり(条件あり)事前予約要。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「庭園の風情と美味しい食事に癒やされる再訪以前泊まってとても良かったのでリピートしました!お部屋は1階でしたが目の前に庭園がありとても風情があります。建物は古いですが、露天風呂は広くスタッフ…　2026-08-21 20:12:13投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！熊本県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、熊本県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">日本三名城 熊本城</h3>
                <p className="text-xs text-stone-600 leading-relaxed">加藤清正公が築城した難攻不落の城郭。「武者返し」と呼ばれる美しい曲線を描く石垣や、復元された豪華な「本丸御殿」、漆黒の大天守・小天守が堂々たる佇まいです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">阿蘇山（草千里ヶ浜・中岳火口）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界最大級のカルデラを誇る阿蘇。大草原が広がる草千里ヶ浜での乗馬体験や、白い煙を上げる中岳火口のダイナミックな火山景観が広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://upload.wikimedia.org/wikipedia/commons/4/42/Kurokawa_Onsen_-%E6%B8%A9%E6%B3%89%E8%A1%97.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail_unscaled" alt="黒川温泉" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">黒川温泉</h3>
                <p className="text-xs text-stone-600 leading-relaxed">筑後川の源流・田の原川沿いの閑静な山あいに佇む名湯。「入湯手形」を利用して露天風呂めぐりを楽しみ、杉木立と茅葺き屋根の情緒を満喫できます。 黒川温泉（くろかわおんせん）は、熊本県阿蘇郡南小国町にある温泉である。 阿蘇山の北に位置し、南小国温泉郷の一つを構成する。広義の阿蘇温泉郷に含む場合もある。 全国屈指の人気温泉地として知られ、2009年版ミシュラン・グリーンガイド・ジャポンで、温泉地としては異例の二つ星で掲載された。なお「黒川温泉」の名称は2006年に地域団体商標として商標登録（地域ブランド…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">天草五橋（あまくさごきょう）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">九州本土と天草諸島を結ぶ5つの美しい橋梁ルート。イルカウォッチングや新鮮な海鮮丼、夕日が染める瀬戸の風景が訪れる人々を魅了します。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 熊本県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 熊本県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="kumamoto-kurokawa-onsen-stay" />
</div>
  );
}
