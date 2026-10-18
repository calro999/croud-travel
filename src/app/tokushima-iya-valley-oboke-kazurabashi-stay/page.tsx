import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/tokushima-iya-valley-oboke-kazurabashi-stay/" },
  title: "徳島・祖谷渓＆大歩危・かずら橋：日本三大秘境・スリルのかずら橋＆大歩危峡舟下り・祖谷そば宿 厳選ガイド",
  description: "切り立つ断崖とエメラルドグリーンの清流・徳島祖谷渓＆大歩危峡エリア完全特化！国指定重要有形民俗文化財「祖谷のかずら橋」、断崖絶壁に立つ「小便小僧」、大歩危峡遊覧船、渓谷ケーブルカーで行く祖谷温泉、名物「祖谷そば・鮎の塩焼き宿」を徹底解説。",
  keywords: ["徳島", "祖谷渓", "大歩危", "かずら橋", "日本三大秘境", "スリルのかずら橋", "大歩危峡舟下り"],
  openGraph: {
    title: "徳島・祖谷渓＆大歩危・かずら橋：日本三大秘境・スリルのかずら橋＆大歩危峡舟下り・祖谷そば宿 厳選ガイド",
    description: "切り立つ断崖とエメラルドグリーンの清流・徳島祖谷渓＆大歩危峡エリア完全特化！国指定重要有形民俗文化財「祖谷のかずら橋」、断崖絶壁に立つ「小便小僧」、大歩危峡遊覧船、渓谷ケーブルカーで行く祖谷温泉、名物「祖谷そば・鮎の塩焼き宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "徳島・祖谷渓＆大歩危・かずら橋：日本三大秘境・スリルのかずら橋＆大歩危峡舟下り・祖谷そば宿 厳選ガイド",
    description: "切り立つ断崖とエメラルドグリーンの清流・徳島祖谷渓＆大歩危峡エリア完全特化！国指定重要有形民俗文化財「祖谷のかずら橋」、断崖絶壁に立つ「小便小僧」、大歩危峡遊覧船、渓谷ケーブルカーで行く祖谷温泉、名物「祖谷そば・鮎の塩焼き宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokushima-iya-valley-oboke-kazurabashi-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for tokushima-iya-valley-oboke-kazurabashi-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "iya_kazurabashi_secret_onsen",
    "title": "1. 祖谷のかずら橋〜祖谷渓・小便小僧（平家落人の悲話を伝える吊り橋と断崖絶壁）",
    "timing": "通年（新緑の5月・紅葉の11月上旬〜中旬は錦秋の絶景）",
    "desc": "自生するシラクチカズラを編んで作られた長さ45mの吊り橋「祖谷のかずら橋（国指定重要有形民俗文化財）」。足元の隙間から見える祖谷川の急流。祖谷街道の断崖絶壁に立つ「小便小僧」。ケーブルカーで下る秘湯・祖谷温泉。",
    "spots": "祖谷のかずら橋（夜間ライトアップ・びわの滝）、祖谷渓の小便小僧（高さ200m断崖）、新祖谷温泉 ホテルかずら橋（天空露天風呂スロープカー）",
    "access": "JR土讃線「大歩危駅」より路線バスで約20〜30分。井川池田ICより約50分。",
    "tip": "「和の宿 ホテル祖谷温泉」では、傾斜角42度の専用ケーブルカーで約170m下の谷底へ下り、祖谷川のせせらぎを聞きながら入る自噴源泉かけ流し露天風呂が最高です。"
  },
  {
    "key": "oboke_koboke_gorge_stay",
    "title": "2. 大歩危峡・小歩危峡〜大歩危峡観光遊覧船（2億年の歳月が削った結晶片岩の回廊）",
    "timing": "通年（春の鯉のぼり・ラフティングの夏・紅葉の秋）",
    "desc": "吉野川の激流が結晶片岩を削り出してできた約8kmの渓谷「大歩危（おおぼけ）・小歩危（こぼけ）」。国指定天然記念物。「大歩危峡観光遊覧船」に乗り、船頭のガイドを聞きながら間近で仰ぐ奇岩怪石。大歩危温泉での癒やし。",
    "spots": "大歩危峡観光遊覧船（レストラン・妖怪屋敷）、道の駅大歩危、小歩危峡（吉野川ラフティングの世界的聖地）",
    "access": "JR土讃線「大歩危駅」下車徒歩約20分。",
    "tip": "春（3月下旬〜5月末）には、大歩危峡の川の上に無数の鯉のぼりが風になびく「大歩危峡鯉のぼり」が開催され、船上からの眺めが圧巻です。"
  },
  {
    "key": "iya_soba_ayu_gourmet_stay",
    "title": "3. 秘境の味「祖谷そば」＆でこまわし（つなぎを使わない太くて短い十割蕎麦）",
    "timing": "通年（秋の新そばシーズン・冬のしし鍋）",
    "desc": "昼夜の寒暖差が大きい祖谷地方で育つ香り高いソバ。つなぎをほとんど使わず太くて切れやすい素朴な「祖谷そば」。味噌を塗った豆腐や里芋を囲炉裏で回しながら焼く郷土料理「でこまわし」。徳島の地鶏「阿波尾鶏」と清流の鮎。",
    "spots": "祖谷そば処、祖谷のかずら橋周辺茶屋、祖谷の里山料理宿",
    "access": "三好市祖谷・大歩危エリア。",
    "tip": "祖谷そばは、すするのではなくお出汁と一緒にレンゲやスプーンですくって食べるのが伝統で、素朴なソバ本来の甘みが口いっぱいに広がります。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【徳島・祖谷渓＆大歩危・かずら橋】日本三大秘境・スリルのかずら橋＆大歩危峡舟下り・祖谷そば宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "切り立つ断崖とエメラルドグリーンの清流・徳島祖谷渓＆大歩危峡エリア完全特化！国指定重要有形民俗文化財「祖谷のかずら橋」、断崖絶壁に立つ「小便小僧」、大歩危峡遊覧船、渓谷ケーブルカーで行く祖谷温泉、名物「祖谷そば・鮎の塩焼き宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/tokushima-iya-valley-oboke-kazurabashi-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【徳島・祖谷渓＆大歩危・かずら橋】日本三大秘境・スリルのかずら橋＆大歩危峡舟下り・祖谷そば宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/tokushima-iya-valley-oboke-kazurabashi-stay/" }
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
            IYA VALLEY & OBOKE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「徳島・祖谷渓＆大歩危・かずら橋」日本三大秘境・スリルのかずら橋＆大歩危峡舟下り・祖谷そば宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            平家落人伝説が息づく日本三大秘境「徳島・祖谷渓＆大歩危峡」。シラクチカズラで編まれたスリル満点の「祖谷のかずら橋」。200mの断崖を見下ろす小便小僧。専用ケーブルカーで渓谷底へ下る秘境の露天風呂と、素朴な祖谷そばを味わう旅。
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
              📊 徳島・祖谷渓＆大歩危・かずら橋：日本三大秘境・スリルのかずら橋＆大歩危峡舟下り・祖谷そば宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「徳島・祖谷渓＆大歩危・かずら橋：日本三大秘境・スリルのかずら橋＆大歩危峡舟下り・祖谷そば宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 新祖谷温泉　ホテルかずら橋</td>
                <td className="p-3 text-stone-600">徳島県三好市西祖谷山村善徳３３－１</td>
                <td className="p-3 text-stone-600">ＪＲのお客様 大歩危駅～路線バス20分（タクシー15分）・お車のお客様</td>
                <td className="p-3 text-stone-600">有り　３０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.71（987件）</td>
                <td className="p-3 font-bold text-rose-600">¥19,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20228%2F20228.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 白地温泉　小西旅館</td>
                <td className="p-3 text-stone-600">徳島県三好市池田町白地本名76-2</td>
                <td className="p-3 text-stone-600">阿波池田駅周辺</td>
                <td className="p-3 text-stone-600">有り　１５台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★3.33（54件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14619%2F14619.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 神山温泉　ホテル四季の里＆いやしの湯</td>
                <td className="p-3 text-stone-600">徳島県名西郡神山町神領本上角80-2</td>
                <td className="p-3 text-stone-600">徳島駅周辺</td>
                <td className="p-3 text-stone-600">有り120台（無料・先着順）</td>
                <td className="p-3 font-bold text-amber-600">★4.36（263件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,490〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14442%2F14442.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 阿波の国・昴宿よしの</td>
                <td className="p-3 text-stone-600">徳島県徳島市一番町3-18</td>
                <td className="p-3 text-stone-600">徳島駅周辺</td>
                <td className="p-3 text-stone-600">有り　3０台　1000円（税込み／泊）　　但し、阿波踊り期間中は￥3000です。</td>
                <td className="p-3 font-bold text-amber-600">★4.12（276件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,420〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74531%2F74531.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">新祖谷温泉　ホテルかずら橋</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥19,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/20228/20228_h.jpg" alt="新祖谷温泉　ホテルかずら橋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ケーブルカーで登る天空露天風呂と囲炉裏の宿。渓谷の絶景と郷土料理、温かなおもてなしでお迎えいたします</p>
                  <p><strong>【所在地・アクセス】</strong>〒 徳島県三好市西祖谷山村善徳３３－１ ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲのお客様 大歩危駅～路線バス20分（タクシー15分）・お車のお客様　徳島自動車道井川池田ＩＣより大歩危経由で５０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「心配りが行き届き、かずら橋ツアーも最高スタッフの方、お料理、温泉等、みんな心配りが行き届いており、とても良かったです。両親もすごく満足してくれました。また、夜のかずら橋ツアーは、ホテルのボンネット…　2026-09-05 22:04:36投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">白地温泉　小西旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（はくちおんせん　こにし　りょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/14619/14619_heya.jpg" alt="白地温泉　小西旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>林芙美子ゆかりの宿。芙美子も愛した吉野川と山々を眺めながら、山の幸を温泉でのんびり癒しのひと時を</p>
                  <p><strong>【所在地・アクセス】</strong>〒 徳島県三好市池田町白地本名76-2 ／ 最寄り駅：阿波池田 ／ 交通案内：徳島自動車道　井川・池田ＩＣより高知方面へ5.8ｋｍ   大歩危祖谷観光やラフティングにも最適です。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１５台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「白地温泉　小西旅館は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">神山温泉　ホテル四季の里＆いやしの湯</h3>
                  <span className="text-xs text-stone-400 ml-2">（かみやまおんせん　しきのさと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,490〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/14442/14442_room.jpg" alt="神山温泉　ホテル四季の里＆いやしの湯 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>県都徳島市より車で35分の里山環境。地産の料理とぬるぬるとした泉質が自慢。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 徳島県名西郡神山町神領本上角80-2 ／ 最寄り駅：徳島 ／ 交通案内：ＪＲ徳島駅よりバスにて約60分／徳島自動車道藍住ＩＣより45分／高松自動車道坂野ＩＣより55分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り120台（無料・先着順）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「邪馬台国阿波説探訪邪馬台国阿波説探訪に丁度良い温泉ホテルでした。近くに上一宮大粟神社や雨乞の滝もあり、日本の田舎の夏を満喫致しました。又、邪馬台国阿波説探訪に是非訪れたいと思っております。有難うご…　2026-08-25 13:49:05投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">阿波の国・昴宿よしの</h3>
                  <span className="text-xs text-stone-400 ml-2">（あわのくに・すばるやどよしの）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,420〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/74531/74531_s.jpg" alt="阿波の国・昴宿よしの 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>駅前の便利さと旅館のぬくもりを。多彩な客室と大浴場、真心を込めたおもてなしでお迎えする和風旅館</p>
                  <p><strong>【所在地・アクセス】</strong>〒 徳島県徳島市一番町3-18 ／ 最寄り駅：徳島 ／ 交通案内：徳島駅・高速バス乗り場より徒歩2分。徳島空港よりお車で１５分。神戸・淡路鳴門自動車道、徳島ＩＣ．より1０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　3０台　1000円（税込み／泊）　　但し、阿波踊り期間中は￥3000です。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「リノベーションはされているものの施設の老朽化・埃や汚れ等も気になりました。敷き布団はマットレスは無く薄めの物が1枚なので腰痛持ちには辛いです。ただ、金額・立地・職員の対応には満足なので金額…　2026-08-28 13:56:04投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！徳島県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、徳島県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">鳴門の渦潮（大鳴門橋）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">播磨灘と紀伊水道の干満差によって発生する世界最大級の渦潮。「渦の道」の海上遊歩道ガラス床から見下ろす激しい潮流と渦巻きは大迫力です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">祖谷のかずら橋（秘境・祖谷）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三大秘境・祖谷渓谷に架かるシラクチカズラで作られたスリル満点の吊り橋。一歩踏みだすたびにギシギシと揺れ、足下の隙間から見える吉野川が爽快です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">大塚国際美術館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界初の陶板名画美術館。レオナルド・ダ・ヴィンチの『最後の晩餐』やフェルメールの『真珠の耳飾りの少女』など1,000点以上の西洋名画が原寸大で完全再現されています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">眉山（びざん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">徳島市街の中心に位置し「眉の如く雲居に見ゆる」と万葉集にも詠まれた徳島のシンボル。ロープウェイで登る山頂からは吉野川と徳島平野を一望できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 徳島県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 徳島県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="tokushima-iya-valley-oboke-kazurabashi-stay" />
</div>
  );
}
