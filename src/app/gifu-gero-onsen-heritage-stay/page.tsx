import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/gifu-gero-onsen-heritage-stay/" },
  title: "岐阜・下呂温泉：日本三名泉・美肌の湯＆飛騨牛トマト丼・温泉街湯めぐり 厳選ガイド",
  description: "日本三名泉・岐阜下呂温泉エリア完全特化！草津・有馬と並ぶpH9.2の「つるつる美肌湯」、湯めぐり手形での名旅館外湯めぐり、飛騨川の噴泉池、名物飛騨牛トマト丼・温玉ソフトと飛騨牛朴葉味噌会席宿を徹底解説。",
  keywords: ["岐阜", "下呂温泉", "日本三名泉", "美肌の湯", "飛騨牛トマト丼", "温泉街湯めぐり", "温泉宿"],
  openGraph: {
    title: "岐阜・下呂温泉：日本三名泉・美肌の湯＆飛騨牛トマト丼・温泉街湯めぐり 厳選ガイド",
    description: "日本三名泉・岐阜下呂温泉エリア完全特化！草津・有馬と並ぶpH9.2の「つるつる美肌湯」、湯めぐり手形での名旅館外湯めぐり、飛騨川の噴泉池、名物飛騨牛トマト丼・温玉ソフトと飛騨牛朴葉味噌会席宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "岐阜・下呂温泉：日本三名泉・美肌の湯＆飛騨牛トマト丼・温泉街湯めぐり 厳選ガイド",
    description: "日本三名泉・岐阜下呂温泉エリア完全特化！草津・有馬と並ぶpH9.2の「つるつる美肌湯」、湯めぐり手形での名旅館外湯めぐり、飛騨川の噴泉池、名物飛騨牛トマト丼・温玉ソフトと飛騨牛朴葉味噌会席宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["gifu-gero-onsen-heritage-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for gifu-gero-onsen-heritage-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "gero_bihada_onsen_walk",
    "title": "1. 下呂温泉街〜飛騨川沿い（日本三名泉・つるつる美肌湯と足湯めぐり）",
    "timing": "通年（冬の澄んだ空気と雪見風呂・春の桜並木）",
    "desc": "室町時代の僧・万里集九や江戸時代の儒学者・林羅山が「日本三名泉」と称えた下呂温泉。アルカリ性単純温泉の湯は、絹のように滑らかで肌を包み込む「美人の湯」。「湯めぐり手形」で加盟旅館の銘湯をめぐる旅。",
    "spots": "噴泉池（飛騨川河川敷）、下呂発温泉博物館、足湯各所（さるぼぼ七福神社足湯・加恵瑠神社）、温泉寺（173段の石段）",
    "access": "JR高山本線「下呂駅」下車すぐ。名古屋駅から特急「ワイドビューひだ」で直通約1時間40分。",
    "tip": "「温泉寺」の石段を登りきった境内からは、下呂温泉街と飛騨川を一望するパノラマ夜景が広がります。"
  },
  {
    "key": "gero_gassho_village_stay",
    "title": "2. 下呂温泉合掌村〜いでゆ朝市（白川郷から移築された合掌造りと足湯）",
    "timing": "通年（合掌造りの四季・秋の紅葉・森の滑り台）",
    "desc": "世界遺産・白川郷などから移築された10棟の合掌造り民家が並ぶ野外博物館「下呂温泉合掌村」。国指定重要文化財「旧大戸家住宅」や陶芸・和紙漉き体験。175mのローラースライダー「森の滑り台」。",
    "spots": "下呂温泉合掌村（旧大戸家・影絵劇しらさぎ座）、いでゆ朝市（地場産野菜・地酒）、いでゆ通り",
    "access": "下呂駅より濃飛バス合掌村線で約6分。温泉街より徒歩約15分。",
    "tip": "合掌村内の「市倉」では、炭火でじっくり焼いたイワナ・アユの塩焼きや五平餅を囲炉裏端でいただけます。"
  },
  {
    "key": "gero_hidagyu_tomato_gourmet",
    "title": "3. A5飛騨牛朴葉味噌焼き＆温玉ソフト（下呂ご当地グルメの饗宴）",
    "timing": "通年（香ばしい朴葉味噌ととろける極上霜降り肉）",
    "desc": "自家製味噌にキノコやネギを乗せ、最高ランクA5飛騨牛とともに朴葉の上で香ばしく焼く「飛騨牛朴葉味噌焼き」。特産トマトと飛騨牛を合わせたご当地丼「飛騨牛トマト丼」。下呂温泉の源泉で作る温泉卵を乗せた「温玉ソフト」。",
    "spots": "ゆあみ屋（ほんわかプリン・足湯カフェ）、GEROGEROバタースタンド、飛騨牛料理専門店",
    "access": "下呂温泉街中心部。",
    "tip": "「ゆあみ屋」の足湯に浸かりながら食べる「温玉ソフト」は、温泉卵とソフトクリームを混ぜると濃厚カスタードのような味わいになります。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【岐阜・下呂温泉】日本三名泉・美肌の湯＆飛騨牛トマト丼・温泉街湯めぐり 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "日本三名泉・岐阜下呂温泉エリア完全特化！草津・有馬と並ぶpH9.2の「つるつる美肌湯」、湯めぐり手形での名旅館外湯めぐり、飛騨川の噴泉池、名物飛騨牛トマト丼・温玉ソフトと飛騨牛朴葉味噌会席宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/gifu-gero-onsen-heritage-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【岐阜・下呂温泉】日本三名泉・美肌の湯＆飛騨牛トマト丼・温泉街湯めぐり 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/gifu-gero-onsen-heritage-stay/" }
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
            GERO ONSEN HERITAGE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「岐阜・下呂温泉」日本三名泉・美肌の湯＆飛騨牛トマト丼・温泉街湯めぐり 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            有馬・草津と並び称される日本三名泉「下呂温泉」。pH9.2を誇る天然の石鹸のようなとろりとした美肌湯。飛騨川のせせらぎを聞きながら歩く温泉街の足湯めぐりと、飛騨牛朴葉味噌焼きの香ばしい香りに包まれる休日。
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
              📊 岐阜・下呂温泉：日本三名泉・美肌の湯＆飛騨牛トマト丼・温泉街湯めぐり 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「岐阜・下呂温泉：日本三名泉・美肌の湯＆飛騨牛トマト丼・温泉街湯めぐり 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 下呂温泉　下呂ロイヤルホテル雅亭</td>
                <td className="p-3 text-stone-600">岐阜県下呂市湯之島758-15</td>
                <td className="p-3 text-stone-600">下呂駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場完備</td>
                <td className="p-3 font-bold text-amber-600">★4.22（2534件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5616%2F5616.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 桜　Ｒｉｖｅｒ　Ｓｉｄｅ　Ｓｔａｙ　下呂温泉</td>
                <td className="p-3 text-stone-600">岐阜県下呂市湯之島868-1</td>
                <td className="p-3 text-stone-600">下呂駅周辺</td>
                <td className="p-3 text-stone-600">有り　10台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★3.58（97件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F181693%2F181693.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 下呂温泉　温泉ビジネスホテル富喜屋</td>
                <td className="p-3 text-stone-600">岐阜県下呂市幸田1185</td>
                <td className="p-3 text-stone-600">下呂駅周辺</td>
                <td className="p-3 text-stone-600">当館無料Ｐ満車の際は、隣接の「下呂温泉栄パーキング」をご利用ください。当館にて半額補助いたします</td>
                <td className="p-3 font-bold text-amber-600">★3.79（112件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13738%2F13738.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 下呂温泉　ホテルくさかべアルメリア</td>
                <td className="p-3 text-stone-600">岐阜県下呂市幸田1811</td>
                <td className="p-3 text-stone-600">下呂駅周辺</td>
                <td className="p-3 text-stone-600">有り　２００台　無料　予約不要　電気自動車充電器あり（有料、要ケーブル持込み）</td>
                <td className="p-3 font-bold text-amber-600">★4.21（4605件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,920〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F56778%2F56778.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 下呂温泉　水明館</td>
                <td className="p-3 text-stone-600">岐阜県下呂市幸田1268</td>
                <td className="p-3 text-stone-600">下呂駅周辺</td>
                <td className="p-3 text-stone-600">有り ２００台 【無料】 ※大型車の駐車も可能です。</td>
                <td className="p-3 font-bold text-amber-600">★4.36（6417件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,350〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8886%2F8886.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 下呂温泉　紗々羅</td>
                <td className="p-3 text-stone-600">岐阜県下呂市森1412-1</td>
                <td className="p-3 text-stone-600">下呂駅周辺</td>
                <td className="p-3 text-stone-600">有り　40台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.15（1146件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,670〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15392%2F15392.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">下呂温泉　下呂ロイヤルホテル雅亭</h3>
                  <span className="text-xs text-stone-400 ml-2">（げろおんせん　げろ　ろいやるほてる　みやびてい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5616/5616_an.jpg" alt="下呂温泉　下呂ロイヤルホテル雅亭 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>楽天売れ筋旅館ランキング（１１～５０室）東海エリア１位★貸切露天風呂や露天風呂付客室、お部屋食が人気</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県下呂市湯之島758-15 ／ 最寄り駅：下呂 ／ 交通案内：ＪＲ下呂駅より徒歩５分（送迎あり）【温泉街にある宿】　　　　　　　　　【団体客なし】　【お部屋食】　【コンビニ徒歩１分】</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場完備</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「丁寧な接客と食事、設備は老朽化が目立つ丁寧な接客をしていただきました。夕食を部屋食にしていただいたのですが、食事処も綺麗だったので、そちらでも良かったです。最上階の大浴場、露天風呂は、畳敷…　2026-08-22 18:37:14投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">桜　Ｒｉｖｅｒ　Ｓｉｄｅ　Ｓｔａｙ　下呂温泉</h3>
                  <span className="text-xs text-stone-400 ml-2">（さくら　りばーさいどすてい　げろおんせん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/181693/181693.jpg" alt="桜　Ｒｉｖｅｒ　Ｓｉｄｅ　Ｓｔａｙ　下呂温泉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【食事4.2】源泉かけ流しを超える100%純生貸切温泉は体験型！源泉を使用し全身セルフエステ感覚に！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県下呂市湯之島868-1 ／ 最寄り駅：下呂 ／ 交通案内：JR下呂駅より徒歩9分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　10台　無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.69 ／ 立地 ★3.89 ／ 部屋 ★3.75 ／ 設備 ★3.61 ／ 風呂 ★3.71 ／ 食事 ★3.95</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「飛騨川の景色と温泉、絶品料理に癒される天気も良く、窓から見える飛騨川のキラキラした水面と川の音に心が癒されました。今回で3回目の宿泊でしたが、何度食べてもまた食べたくなるスペアリブとトロト…　2026-10-08 21:13:41投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">下呂温泉　温泉ビジネスホテル富喜屋</h3>
                  <span className="text-xs text-stone-400 ml-2">（げろおんせん　おんせんびじねすほてる　ふきや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13738/13738_you.jpg" alt="下呂温泉　温泉ビジネスホテル富喜屋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>『客室で天然温泉を独り占めできる宿』 全国でも珍しい、全室天然温泉シャワー完備。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県下呂市幸田1185 ／ 最寄り駅：下呂 ／ 交通案内：中央道・中津川ＩＣ／Ｒ２５７～５０分。名神・小牧ＩＣ／Ｒ４１～１０５分。ＪＲ高山線・下呂駅～北方向100ｍ・徒歩２分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>当館無料Ｐ満車の際は、隣接の「下呂温泉栄パーキング」をご利用ください。当館にて半額補助いたします</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「立地は最高だが設備に難あり駅から近くで部屋からは川が望め、コンビニもすぐ隣にあり立地は最高です。内装も綺麗にしておりいい感じなのですが、壁が薄くて音が響きやすい、洗面にハンドソープがない、冷蔵…　2026-04-19 08:44:29投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">下呂温泉　ホテルくさかべアルメリア</h3>
                  <span className="text-xs text-stone-400 ml-2">（げろおんせん　ほてるくさかべあるめりあ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,920〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/56778/56778_ky.jpg" alt="下呂温泉　ホテルくさかべアルメリア 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>下呂市街を一望出来る展望露天風呂！和洋中50種を超えるバイキングや飛騨牛を使用したフルコース会席！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県下呂市幸田1811 ／ 最寄り駅：下呂 ／ 交通案内：ＪＲ高山線　下呂駅より車で３分（無料送迎バス有り）/東海環状道富加関ＩＣより７０分又は中央道中津川ＩＣより６０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２００台　無料　予約不要　電気自動車充電器あり（有料、要ケーブル持込み）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/56778?reviewId=33123479082061　2026-08-22 18:13:33投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">下呂温泉　水明館</h3>
                  <span className="text-xs text-stone-400 ml-2">（げろおんせん　すいめいかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,350〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8886/8886_ryu.jpg" alt="下呂温泉　水明館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>趣のことなる三箇所の大浴場と充実した設備が自慢です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県下呂市幸田1268 ／ 最寄り駅：下呂 ／ 交通案内：ＪＲ高山本線下呂駅より徒歩３分【下呂駅まで随時送迎バス有】／中央自動車道 中津川ＩＣよりＲ２５７で約６０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り ２００台 【無料】 ※大型車の駐車も可能です。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.38 ／ 立地 ★4.38 ／ 部屋 ★4.32 ／ 設備 ★4.26 ／ 風呂 ★4.53 ／ 食事 ★4.36</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「リニューアルされた綺麗な部屋と美味しい食事部屋からの眺めはイマイチだったけど、リニューアルされたお部屋は綺麗で快適でした!畳の空間もあって良き!お夕食もリズミカルに出てきて、食べやすかった…　2026-10-09 15:51:59投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">下呂温泉　紗々羅</h3>
                  <span className="text-xs text-stone-400 ml-2">（げろおんせん　ささら）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,670〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/15392/15392_wa.jpg" alt="下呂温泉　紗々羅 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【受賞歴多数！温泉宿・ホテル総選挙女子旅部門1位】源泉かけ流しの美人の湯を堪能。大人の贅沢滞在。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岐阜県下呂市森1412-1 ／ 最寄り駅：下呂 ／ 交通案内：JR高山本線「下呂駅」よりタクシーで3分（タクシー代は当社持ち）。中央道　中津川ICよりR257経由で60分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　40台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.18 ／ 立地 ★4.12 ／ 部屋 ★4.22 ／ 設備 ★4.06 ／ 風呂 ★4.26 ／ 食事 ★4.24</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事も接客も五つ星、全てが快適で大満足お食事、もてなし、清潔さ、お風呂全て快適で綺麗で申し分ないです。案内も対応も五つ星です!お部屋担当の方にはとても親切にして頂きました。ありがと…　2026-10-01 13:00:47投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！岐阜県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、岐阜県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">白川郷 合掌造り集落</h3>
                <p className="text-xs text-stone-600 leading-relaxed">豪雪地帯ならではの急勾配の茅葺き屋根が立ち並ぶ世界文化遺産の村。春の新緑、秋の紅葉、冬の幻想的な雪景色ライトアップと日本の原風景が広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">飛騨高山（古い町並み）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">江戸時代の出格子と用水路が流れる景観が保存された「飛騨の小京都」。名物の飛騨牛串焼きや地酒の酒蔵巡り、朝市散策が全国の旅人に大人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">岐阜城・長良川鵜飼</h3>
                <p className="text-xs text-stone-600 leading-relaxed">金華山頂に聳え立つ織田信長公ゆかりの岐阜城と、1300年以上の歴史を誇る長良川の伝統鵜飼。篝火の明かりが川面を照らす幽玄の世界は必見です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/260125_Gero_Onsen_Gero_Gifu_pref_Japan01s3.jpg/1280px-260125_Gero_Onsen_Gero_Gifu_pref_Japan01s3.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="下呂温泉" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">下呂温泉</h3>
                <p className="text-xs text-stone-600 leading-relaxed">草津・有馬と並ぶ日本三名泉の一つ。滑らかな肌触りの「美人の湯」で知られ、飛騨川のせせらぎを聞きながら足湯巡りや温泉街のグルメを堪能できます。 下呂温泉（げろおんせん）は、岐阜県下呂市（旧飛騨国、岐阜県益田郡下呂町）にある温泉。室町時代には万里集九が有馬温泉や草津温泉とともに「三名泉」とし、江戸時代には林羅山もこれらの三温泉を「天下の三名泉」と記した（日本三名泉）（ただし、当時は下呂ではなく湯島と表記）。…</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 岐阜県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 岐阜県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="gifu-gero-onsen-heritage-stay" />
</div>
  );
}
