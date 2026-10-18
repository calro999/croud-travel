import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/miyagi-matsushima-shiogama-bay-seafood-stay/" },
  title: "宮城・松島＆塩竈：日本三景松島・塩竈生マグロ＆焼き牡蠣温泉宿 厳選ガイド",
  description: "芭蕉が愛した日本三景「松島」の島々パノラマと、日本屈指の生マグロ水揚げ港「塩竈」の美食を巡る特化ガイド。国宝瑞巌寺、五大堂、塩竈神社、焼き牡蠣小屋、美肌の松島温泉宿を徹底解説。",
  keywords: ["宮城", "松島", "塩竈", "日本三景松島", "塩竈生マグロ", "焼き牡蠣温泉宿", "温泉宿"],
  openGraph: {
    title: "宮城・松島＆塩竈：日本三景松島・塩竈生マグロ＆焼き牡蠣温泉宿 厳選ガイド",
    description: "芭蕉が愛した日本三景「松島」の島々パノラマと、日本屈指の生マグロ水揚げ港「塩竈」の美食を巡る特化ガイド。国宝瑞巌寺、五大堂、塩竈神社、焼き牡蠣小屋、美肌の松島温泉宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "宮城・松島＆塩竈：日本三景松島・塩竈生マグロ＆焼き牡蠣温泉宿 厳選ガイド",
    description: "芭蕉が愛した日本三景「松島」の島々パノラマと、日本屈指の生マグロ水揚げ港「塩竈」の美食を巡る特化ガイド。国宝瑞巌寺、五大堂、塩竈神社、焼き牡蠣小屋、美肌の松島温泉宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["miyagi-matsushima-shiogama-bay-seafood-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for miyagi-matsushima-shiogama-bay-seafood-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "matsushima_bay_view_stay",
    "title": "1. 日本三景松島〜五大堂・福浦橋・瑞巌寺（海に浮かぶ小島パノラマと伊達文化）",
    "timing": "通年（春の桜、初夏の松島湾クルーズ、秋の瑞巌寺紅葉ライトアップ、冬の朝焼け）",
    "desc": "松島湾に浮かぶ260余の島々が織りなす絶景。すかし橋で海を渡る「五大堂」、252mの朱塗りの橋が架かる「福浦島」、伊達政宗の美意識が凝縮された国宝「瑞巌寺」や「円通院」の枯山水庭園。湾内を巡る遊覧船からは仁王島など奇岩を間近に望めます。",
    "spots": "五大堂、福浦橋（出会い橋）、国宝瑞巌寺、円通院、松島湾観光遊覧船、西行戻しの松公園",
    "access": "JR仙石線「松島海岸駅」下車徒歩すぐ（仙台駅より約40分）。三陸沿岸道路「松島海岸IC」より約10分。",
    "tip": "西行戻しの松公園の高台にあるカフェからは、松島湾全体と桜・新緑・紅葉が一望できる隠れた絶景展望ポイントです。"
  },
  {
    "key": "shiogama_seafood_sushi_stay",
    "title": "2. 塩竈港仲卸市場＆塩竈神社（生マグロ日本一の港町と千二百年の古社）",
    "timing": "通年（秋〜冬の「三陸塩竈ひがしもの」ブランドメバチマグロ、春の塩竈桜）",
    "desc": "近海東沖で獲れる最高級メバチマグロ「三陸塩竈ひがしもの」で全国に名を知られる塩竈。一般人も買い物できる「塩竈市仲卸市場」では、購入した新鮮な刺身をその場でご飯に乗せて作る「マイ海鮮丼」が大人気。塩竈神社の荘厳な202段の石段と歴史も圧巻です。",
    "spots": "塩竈市仲卸市場（マイ海鮮丼）、志波彦神社・鹽竈神社、本塩釜すし激戦区、浦霞（佐浦）・一ノ蔵酒蔵処",
    "access": "JR仙石線「本塩釜駅」または「東塩釜駅」下車。松島海岸駅から電車でわずか約10分。仙台駅からも約30分。",
    "tip": "塩竈は人口あたりの寿司屋密度が日本一とも言われ、どの店でも格別の鮮度と職人技のマグロ握りを味わえます。"
  },
  {
    "key": "matsushima_oyster_hotspring_stay",
    "title": "3. 松島名物「焼き牡蠣小屋」＆美肌の松島温泉（太古の地層から湧くトロトロ湯）",
    "timing": "秋〜春（10月〜3月の牡蠣シーズン最盛期、焼き牡蠣食べ放題）",
    "desc": "松島湾の豊かなプランクトンで育った松島牡蠣は、小ぶりながら身が引き締まり濃厚な旨味が凝縮。鉄板の上に山盛りの牡蠣を豪快に蒸し焼きにして食べる「かき小屋」は冬の名物詩。さらに太古の地層から湧出する「松島温泉」の琥珀色の美肌湯が旅の疲れを癒します。",
    "spots": "松島さかな市場（焼き牡蠣ハウス）、松島かき小屋、松島温泉各宿の展望露天風呂",
    "access": "松島海岸駅周辺各所。各温泉旅館へは無料送迎バスも多数運行。",
    "tip": "松島温泉はメタケイ酸を豊富に含むアルカリ性単純温泉で、入浴後にお肌がツルツルになると女性客からも絶賛されています。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【宮城・松島＆塩竈】日本三景松島・塩竈生マグロ＆焼き牡蠣温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "芭蕉が愛した日本三景「松島」の島々パノラマと、日本屈指の生マグロ水揚げ港「塩竈」の美食を巡る特化ガイド。国宝瑞巌寺、五大堂、塩竈神社、焼き牡蠣小屋、美肌の松島温泉宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/miyagi-matsushima-shiogama-bay-seafood-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【宮城・松島＆塩竈】日本三景松島・塩竈生マグロ＆焼き牡蠣温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/miyagi-matsushima-shiogama-bay-seafood-stay/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            MATSUSHIMA & SHIOGAMA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「宮城・松島＆塩竈」日本三景松島湾の島々・塩竈極上生マグロ＆焼き牡蠣温泉宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            松尾芭蕉も言葉を失ったといわれる日本三景・松島湾の260余の島々。伊達政宗が再建した国宝・瑞巌寺の威厳と、塩竈港に揚がる極上の生マグロや冬の松島名物・焼き牡蠣。海風香る絶景温泉露天風呂から茜色に染まる朝日と湾を眺める、至福の宮城ステイへご案内します。
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide: any) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-teal-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-teal-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-teal-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-teal-950/80 leading-relaxed font-medium">
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
              <div className="space-y-4 pt-4 border-t border-teal-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-teal-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.length > 0 ? (
                    hotels.map((hotel: any) => (
                      <article
                        key={hotel.hotelNo}
                        className="flex flex-col justify-between border border-teal-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                      >
                        <div>
                          <div className="aspect-video relative overflow-hidden bg-teal-50 border-b border-teal-950/5">
                            {hotel.hotelImageUrl ? (
                              <img
                                src={hotel.hotelImageUrl}
                                alt={hotel.hotelName}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-teal-950/30 text-xs font-bold">
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
                            <h4 className="text-xs md:text-sm font-black font-journal-serif text-teal-950 line-clamp-2">
                              {hotel.hotelName}
                            </h4>
                            {hotel.hotelSpecial && (
                              <p className="text-[11px] text-teal-950/70 line-clamp-2 font-medium">
                                {hotel.hotelSpecial}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="p-4 pt-0">
                          <a
                            href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                            target="_blank"
                            rel="sponsored noopener noreferrer"
                            className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
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
              📊 宮城・松島＆塩竈：日本三景松島・塩竈生マグロ＆焼き牡蠣温泉宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「宮城・松島＆塩竈：日本三景松島・塩竈生マグロ＆焼き牡蠣温泉宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 松島温泉　ホテル絶景の館</td>
                <td className="p-3 text-stone-600">宮城県宮城郡松島町松島東浜4-6</td>
                <td className="p-3 text-stone-600">松島海岸駅周辺</td>
                <td className="p-3 text-stone-600">無料　４０台</td>
                <td className="p-3 font-bold text-amber-600">★4.53（1637件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29538%2F29538.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 松島温泉　松島センチュリーホテル</td>
                <td className="p-3 text-stone-600">宮城県宮城郡松島町松島字仙随８番地</td>
                <td className="p-3 text-stone-600">松島海岸駅周辺</td>
                <td className="p-3 text-stone-600">有り　100台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.44（1951件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4964%2F4964.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 松島温泉　ホテル大松荘</td>
                <td className="p-3 text-stone-600">宮城県宮城郡松島町松島字町内25</td>
                <td className="p-3 text-stone-600">松島海岸駅周辺</td>
                <td className="p-3 text-stone-600">有り　50台　無料</td>
                <td className="p-3 font-bold text-amber-600">★3.97（598件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2047%2F2047.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 松島温泉　パレス松洲</td>
                <td className="p-3 text-stone-600">宮城県宮城郡松島町高城浜38</td>
                <td className="p-3 text-stone-600">松島駅周辺</td>
                <td className="p-3 text-stone-600">有り 80台 無料 予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.5（461件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51231%2F51231.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテルグランドパレス塩釜</td>
                <td className="p-3 text-stone-600">宮城県塩釜市尾島町3-5</td>
                <td className="p-3 text-stone-600">本塩釜駅周辺</td>
                <td className="p-3 text-stone-600">有り　46台　無料　※大型車は要事前連絡。状況により、大型車はお断りさせて頂く場合あり。</td>
                <td className="p-3 font-bold text-amber-600">★4.08（967件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,225〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51699%2F51699.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. スマイルホテル塩釜</td>
                <td className="p-3 text-stone-600">宮城県塩竈市新富町18-31</td>
                <td className="p-3 text-stone-600">本塩釜駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場完備（敷地外含む普通車65台）</td>
                <td className="p-3 font-bold text-amber-600">★3.95（2514件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,550〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15104%2F15104.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">松島温泉　ホテル絶景の館</h3>
                  <span className="text-xs text-stone-400 ml-2">（まつしまおんせん　ぜっけいのやかた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/29538/29538_kw.jpg" alt="松島温泉　ホテル絶景の館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>お部屋から刻々変化する180°のパノラマを体験しませんか</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮城県宮城郡松島町松島東浜4-6 ／ 最寄り駅：松島海岸 ／ 交通案内：仙石線 松島海岸駅・東北本線　松島駅　（15：00～21：00まで送迎有・予約不可）／三陸道松島ICより１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料　４０台</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「景色と食事が最高、脱衣所の清掃に改善希望部屋からの景色がとても綺麗でした。部屋とバス・トイレも清潔でした。夕飯はお刺身が美味しかったです。 脱衣所は狭く、混んでるときは大変だなとおもいました。ドラ…　2026-08-21 10:36:53投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">松島温泉　松島センチュリーホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（まつしま　せんちゅりーほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4964/4964_roten.jpg" alt="松島温泉　松島センチュリーホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>日本三景松島の中心部に位置し、主な観光施設へは徒歩圏内。目の前に広がる松島湾の風景は最高の贅沢。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮城県宮城郡松島町松島字仙随８番地 ／ 最寄り駅：松島海岸 ／ 交通案内：ＪＲ仙石線松島海岸駅下車徒歩10分、ＪＲ東北本線松島駅下車徒歩15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　100台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「花火の配慮が嬉しく素敵な夜を過ごせた家族旅行で利用しました。子どもに花火をいただきましたが、夕飯との兼ね合いでできそうにないねと子どもと話しといたところ、花火の時間を延長しますと言っていただけ…　2026-08-22 22:23:35投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">松島温泉　ホテル大松荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（まつしまおんせん　ほてるだいまつそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/2047/2047_bas.jpg" alt="松島温泉　ホテル大松荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>松島海岸駅から徒歩１分、天然温泉とおいしいお料理でおもてなしいたします。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮城県宮城郡松島町松島字町内25 ／ 最寄り駅：松島海岸 ／ 交通案内：ＪＲ松島海岸駅より徒歩１分。東北自動車道仙台南IC～南部道路～三陸自動車道　松島海岸ICより３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　50台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「好立地で清掃も行き届くが設備に難あり夏に素泊まりの利用でした。写真は部屋からの景色です。駅から徒歩3分もかからず、なお車なら駐車場も無料利用が可能な好立地のホテル。福浦橋までが割と歩きます…　2026-08-24 12:26:38投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">松島温泉　パレス松洲</h3>
                  <span className="text-xs text-stone-400 ml-2">（まつしまおんせん　ぱれすまつしま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/51231/51231_room.jpg" alt="松島温泉　パレス松洲 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全室から松島の絶景が楽しめる小さなリゾートホテル。三陸の旬と寛ぎの時間をリーズナブルに提供します。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮城県宮城郡松島町高城浜38 ／ 最寄り駅：松島 ／ 交通案内：ＪＲ松島駅より徒歩10分　東北本線松島駅、仙石線松島海岸駅・高城町駅より送迎あり　三陸自動車道　松島海岸ＩＣより15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り 80台 無料 予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「松島の絶景と温泉、食事に大満足の休日8月の週末に利用しました。お部屋、ロビー、浴場から眺める松島は絶景です。ウエルカムドリンクがあり、到着後、入浴前後にいただきました。温泉はトロリとした泉質で、混…　2026-08-24 20:21:53投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルグランドパレス塩釜</h3>
                  <span className="text-xs text-stone-400 ml-2">（ホテルグランドパレスしおがま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,225〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/51699/51699_room.jpg" alt="ホテルグランドパレス塩釜 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＪＲ本塩釜駅より徒歩３分の便利さ！！ビジネス・観光に最適！宴会場・レストランも充実！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮城県塩釜市尾島町3-5 ／ 最寄り駅：本塩釜 ／ 交通案内：ＪＲ仙石線　本塩釜駅より徒歩3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　46台　無料　※大型車は要事前連絡。状況により、大型車はお断りさせて頂く場合あり。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「静かな部屋と丁寧な接客で快適な睡眠遮音性が良く部屋の外部から煩い音が聞こえないので、ぐっすり眠れました。また、空調・衛生設備機器もしっかりして、室内は綺麗に清掃が行き届いていると感じました。…　2026-08-28 13:28:18投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">スマイルホテル塩釜</h3>
                  <span className="text-xs text-stone-400 ml-2">（スマイルホテル　しおがま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,550〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/15104/15104_kya.jpg" alt="スマイルホテル塩釜 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>寿司の町塩釜に位置し、お車でなら松島、多賀城、利府にも便利。全館有線ＬＡＮ＆Ｗｉ－Ｆｉ使用可能！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 宮城県塩竈市新富町18-31 ／ 最寄り駅：本塩釜 ／ 交通案内：JR仙石線「本塩釜駅」より車で4分 / 仙台港北ICまたは利府塩釜ICより10分 45号線沿い</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場完備（敷地外含む普通車65台）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「丁寧な接客と隅々まで行き届いた清掃フロントのスタッフさんの対応が丁寧で心地よかったです。施設の古さを少し感じましたが、全体に掃除が行き届いていて気持ちよく過ごせました。クチコミの詳細はこち…　2026-08-29 17:23:18投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！宮城県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、宮城県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Matsushima_miyagi_z.JPG/1280px-Matsushima_miyagi_z.JPG?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="松島（日本三景）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">松島（日本三景）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">松島湾に浮かぶ260余りの島々が描く、日本三景の一つに数えられる美景。瑞巌寺や五大堂といった歴史的建造物と、遊覧船からの島々の眺望が訪れる者を魅了します。 松島（まつしま）は、宮城県北東部の松島湾内外にある約260の島々からなる諸島やそれを擁する多島海（島の数については諸説ある後述）。または、湾周囲を囲む松島丘陵も含めた修景地区のことである。日本三景の一つに数えられている。2019年の観光入込客数は約598万人。かつては「東の松島 西の象潟」と謳われ、同じく東北地方に存在していた修景地の象潟と並び称されていた。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">仙台城跡（青葉城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">伊達政宗公が築城した仙台藩の拠点。本丸跡に立つ政宗公の騎馬像越しに仙台市街を一望でき、日暮れには眼下に広がる輝く夜景スポットとしても大人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Zaou_Gongen_Circumstancial_appearance_of_Mount_Yoshino.jpg/1280px-Zaou_Gongen_Circumstancial_appearance_of_Mount_Yoshino.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="蔵王の御釜" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">蔵王の御釜</h3>
                <p className="text-xs text-stone-600 leading-relaxed">蔵王連峰の標高高台に位置する、エメラルドグリーンの神秘的なカルデラ湖。光の当たり方で色合いが変化することから「五色沼」とも呼ばれる圧巻の火山絶景です。 蔵王、藏王（ざ-おう） 読みとしては、「蔵王」の本来の読み、旧仮名づかい「ざう-わう(ぞう-おう)」（音読み）が連声化したもの。 修験道の神である蔵王権現のこと。日本各地にみられる「蔵王」という名称は、後述の地名を含め、その大半が蔵王権現（奈良県吉野の発祥）に由来している（蔵王権現を参照）。 上述の蔵王権現を祭っている神社（蔵王権現社、御嶽神社（御岳神社）、…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">瑞鳳殿</h3>
                <p className="text-xs text-stone-600 leading-relaxed">仙台藩祖・伊達政宗公の霊屋。桃山文化の華麗な建築様式を今に伝える絢欄豪華な装飾と、周囲の静寂な杉木立が見事な対比を見せています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 宮城県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 宮城県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
            </p>
            <p>
              <strong>2. 夕食・朝食プランと部屋タイプの選び方：</strong> 地元産の旬魚介やブランド牛会席を味わうなら「夕朝食付きプラン」、周辺の屋台・老舗居酒屋・ご当地グルメを食べ歩くなら「朝食付き」または「素泊まり＋天然温泉大浴場付きホテル」を選ぶと予算と満足度のバランスが最適化されます。
            </p>
          </div>
        </section>

      </article>
                    ))
                  ) : (
                    <div className="col-span-3 p-6 bg-stone-50 rounded-2xl text-center text-xs text-stone-500">
                      現在おすすめの宿泊施設情報を更新中です。
                    </div>
                  )}
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
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-950 bg-white hover:bg-teal-50 border border-teal-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="miyagi-matsushima-shiogama-bay-seafood-stay" />
</div>
  );
}
