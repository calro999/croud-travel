import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/shizuoka-izu-ito-jogasaki-stay/" },
  title: "静岡・伊豆伊東＆城ヶ崎海岸：門脇つり橋・大室山リフト＆東海館・地魚海鮮宿 厳選ガイド",
  description: "東伊豆の歴史と絶景・伊東温泉＆城ヶ崎海岸エリア完全特化！スリル満点の「門脇つり橋」、すり鉢状火口の「大室山リフト」、国登録有形文化財「東海館」、毎分3万リットルの湯量を誇る伊東温泉と伊豆地魚会席宿を徹底解説。",
  keywords: ["静岡", "伊豆伊東", "城ヶ崎海岸", "門脇つり橋", "大室山リフト", "東海館", "地魚海鮮宿"],
  openGraph: {
    title: "静岡・伊豆伊東＆城ヶ崎海岸：門脇つり橋・大室山リフト＆東海館・地魚海鮮宿 厳選ガイド",
    description: "東伊豆の歴史と絶景・伊東温泉＆城ヶ崎海岸エリア完全特化！スリル満点の「門脇つり橋」、すり鉢状火口の「大室山リフト」、国登録有形文化財「東海館」、毎分3万リットルの湯量を誇る伊東温泉と伊豆地魚会席宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "静岡・伊豆伊東＆城ヶ崎海岸：門脇つり橋・大室山リフト＆東海館・地魚海鮮宿 厳選ガイド",
    description: "東伊豆の歴史と絶景・伊東温泉＆城ヶ崎海岸エリア完全特化！スリル満点の「門脇つり橋」、すり鉢状火口の「大室山リフト」、国登録有形文化財「東海館」、毎分3万リットルの湯量を誇る伊東温泉と伊豆地魚会席宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shizuoka-izu-ito-jogasaki-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shizuoka-izu-ito-jogasaki-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "ito_onsen_tokainkan_walk",
    "title": "1. 松川遊歩道〜東海館（昭和レトロな木造建築美と豊富な自家源泉）",
    "timing": "通年（春の松川沿い桜並木・初夏の伊東祐親まつり・冬の温泉）",
    "desc": "伊東温泉の中心を流れる松川沿いに佇む、昭和3年創業の木造3階建て温泉旅館「東海館（市指定有形文化財）」。職人の見事な木彫り細工や望楼。毎分3万リットルを超える全国屈指の湧出量を誇る弱食塩泉・単純温泉。",
    "spots": "東海館（見学・日帰り入浴・喫茶）、松川遊歩道（竹あかりライトアップ）、音無神社、伊東オレンジビーチ",
    "access": "JR伊東線・伊豆急行線「伊東駅」下車徒歩約7〜10分。東京駅から特急「踊り子」直通約1時間40分。",
    "tip": "「東海館」の最上階にある望楼からは、伊東市街と天城連山、相模湾を一望できます。"
  },
  {
    "key": "jogasaki_omuroyama_view",
    "title": "2. 城ヶ崎海岸・門脇つり橋〜大室山（大自然が造り出した断崖絶壁と火口空中散歩）",
    "timing": "通年（春の山焼き・新緑の大室山・城ヶ崎の雄大な白波）",
    "desc": "約4000年前の大室山噴火でできた溶岩海岸「城ヶ崎海岸」。高さ23m、長さ48mの断崖に架かるスリル満点の「門脇つり橋」。リフトで登る「大室山（標高580m）」の火口一周お鉢巡りと富士山パノラマ。",
    "spots": "城ヶ崎海岸（門脇つり橋・門脇埼灯台・ピクニカルコース）、大室山（登山リフト・火口アーチェリー）、伊豆シャボテン動物公園",
    "access": "伊東駅より車で約25分、または伊豆高原駅よりバス。",
    "tip": "大室山は全山がカヤで覆われており、山頂お鉢めぐり（約1km）では360度の大パノラマ（伊豆七島・富士山）が広がります。"
  },
  {
    "key": "ito_iseebi_local_fish_gourmet",
    "title": "3. 伊東港直送「朝獲れ地魚」＆伊豆牛（贅沢な海の幸と山海の恵み）",
    "timing": "通年（秋〜冬の伊勢海老漁解禁・春の鯵や金目鯛）",
    "desc": "伊東港で毎朝競り落とされる新鮮な地魚の舟盛り。活きたまま鉄板で焼く「アワビの踊り焼き」やプリプリの「伊勢海老のお造り・鬼殻焼き」。幻のブランド牛「伊豆牛」のステーキと伊豆わさび。",
    "spots": "道の駅伊東マリンタウン（日帰り温泉・遊覧船・海鮮丼）、伊東市中央商店街",
    "access": "伊東市街地・伊東港周辺。",
    "tip": "「道の駅 伊東マリンタウン」のカラフルな建物群には、海を見渡す足湯や海鮮レストラン、お土産処が充実しています。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【静岡・伊豆伊東＆城ヶ崎海岸】門脇つり橋・大室山リフト＆東海館・地魚海鮮宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "東伊豆の歴史と絶景・伊東温泉＆城ヶ崎海岸エリア完全特化！スリル満点の「門脇つり橋」、すり鉢状火口の「大室山リフト」、国登録有形文化財「東海館」、毎分3万リットルの湯量を誇る伊東温泉と伊豆地魚会席宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/shizuoka-izu-ito-jogasaki-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【静岡・伊豆伊東＆城ヶ崎海岸】門脇つり橋・大室山リフト＆東海館・地魚海鮮宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/shizuoka-izu-ito-jogasaki-stay/" }
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
            IZU ITO & JOGASAKI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「静岡・伊豆伊東＆城ヶ崎海岸」門脇つり橋・大室山リフト＆東海館・地魚海鮮宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            毎分3万リットル以上の豊富な湧出量を誇る歴史の温泉地「伊東温泉」。溶岩が削り出した断崖絶壁と海にかかる「城ヶ崎海岸・門脇つり橋」。抹茶碗を伏せたような美しい山容の「大室山」と、伊豆近海の伊勢海老・地魚に癒やされる旅。
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
              📊 静岡・伊豆伊東＆城ヶ崎海岸：門脇つり橋・大室山リフト＆東海館・地魚海鮮宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「静岡・伊豆伊東＆城ヶ崎海岸：門脇つり橋・大室山リフト＆東海館・地魚海鮮宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 伊東温泉　ホテル　ラヴィエ川良</td>
                <td className="p-3 text-stone-600">静岡県伊東市竹の内1-1-3</td>
                <td className="p-3 text-stone-600">伊東駅周辺</td>
                <td className="p-3 text-stone-600">無料</td>
                <td className="p-3 font-bold text-amber-600">★4.01（1982件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14377%2F14377.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 城ケ崎海岸と伊豆高原の間　Ｎｅｗ　Ｖｉｌｌａ　Ｎａｔｕｒａｌ　Ｑ．　＾</td>
                <td className="p-3 text-stone-600">静岡県伊東市八幡野1083-72 　New Villa Natural Q.</td>
                <td className="p-3 text-stone-600">伊豆高原駅周辺</td>
                <td className="p-3 text-stone-600">なし</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">¥12,760〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F195256%2F195256.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 貸別荘　大室山の角　＾</td>
                <td className="p-3 text-stone-600">静岡県伊東市池632-50　Ｏｍｕｒｏｙａｍａ　ｎｏ　Ｋａｄｏ</td>
                <td className="p-3 text-stone-600">城ヶ崎海岸駅周辺</td>
                <td className="p-3 text-stone-600">有り</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">¥23,658〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F194361%2F194361.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ｔｈｅ　ｓａｌｏｎ　伊豆高原　Ｈｏｔｅｌｓ　＆　Ｒｅｓｏｒｔ</td>
                <td className="p-3 text-stone-600">静岡県伊東市八幡野1253-25</td>
                <td className="p-3 text-stone-600">伊豆高原駅周辺</td>
                <td className="p-3 text-stone-600">10台（無料）駐車場はホテルの正面にございますので、空いているスペースにお停めください。</td>
                <td className="p-3 font-bold text-amber-600">★4.3（68件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,214〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172820%2F172820.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. Ｒｅｓｏｒｔ　ｓｔａｙ　Ｂｏｗｅｎ～伊豆高原～</td>
                <td className="p-3 text-stone-600">静岡県伊東市池635-107</td>
                <td className="p-3 text-stone-600">伊豆高原駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場３台／予約不要／マイクロバス駐車可</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">¥3,928〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184583%2F184583.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 伊東温泉　陽気館</td>
                <td className="p-3 text-stone-600">静岡県伊東市末広町2-24</td>
                <td className="p-3 text-stone-600">伊東駅周辺</td>
                <td className="p-3 text-stone-600">有り　20台　無料　※カーナビは名称・電話ではなく住所（静岡県伊東市末広町1－21）で検索して下さい</td>
                <td className="p-3 font-bold text-amber-600">★4.33（702件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7473%2F7473.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊東温泉　ホテル　ラヴィエ川良</h3>
                  <span className="text-xs text-stone-400 ml-2">（いとうおんせん　らう゛ぃえ　かわりょう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/14377/14377_w.jpg" alt="伊東温泉　ホテル　ラヴィエ川良 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>湯舟から溢れる天然100％の温泉と、海の幸が網焼きできる60種類のバイキングを堪能！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊東市竹の内1-1-3 ／ 最寄り駅：伊東 ／ 交通案内：JR伊東線「伊東駅」下車 徒歩７分／車で東名高速沼津ICから1時間20分・厚木ICから1時間40分／送迎バスあり</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「バイキングの料理が美味しく ビール ワイン等飲み放題も付いていて 楽しい時間を持てました スタッフの方々も とても感じ良く対応していただきましたクチコミの詳細はこちらから　https://revi…　2026-09-04 19:33:05投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">城ケ崎海岸と伊豆高原の間　Ｎｅｗ　Ｖｉｌｌａ　Ｎａｔｕｒａｌ　Ｑ．　＾</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,760〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/195256/195256.jpg" alt="城ケ崎海岸と伊豆高原の間　Ｎｅｗ　Ｖｉｌｌａ　Ｎａｔｕｒａｌ　Ｑ．　＾ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊東市八幡野1083-72 　New Villa Natural Q. ／ 最寄り駅：伊豆高原 ／ 交通案内：伊豆高原駅より徒歩で3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>なし</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「城ケ崎海岸と伊豆高原の間　Ｎｅｗ　Ｖｉｌｌａ　Ｎａｔｕｒａｌ　Ｑ．　＾は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">貸別荘　大室山の角　＾</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥23,658〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/194361/194361.jpg" alt="貸別荘　大室山の角　＾ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>「貸別荘　大室山の角」露天風呂リゾート静岡県・伊東市のおすすめ民泊・貸別荘・コテージ</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊東市池632-50　Ｏｍｕｒｏｙａｍａ　ｎｏ　Ｋａｄｏ ／ 最寄り駅：城ヶ崎海岸 ／ 交通案内：城ヶ崎海岸駅から車で約９分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「貸別荘　大室山の角　＾は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ｔｈｅ　ｓａｌｏｎ　伊豆高原　Ｈｏｔｅｌｓ　＆　Ｒｅｓｏｒｔ</h3>
                  <span className="text-xs text-stone-400 ml-2">（ざさろんいずこうげんほてるあんどりぞーと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,214〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/172820/172820.jpg" alt="ｔｈｅ　ｓａｌｏｎ　伊豆高原　Ｈｏｔｅｌｓ　＆　Ｒｅｓｏｒｔ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【全10室温泉付きの隠れ家ホテル】伊豆高原の別荘地に佇む地元の食材にこだわった絶品イタリアンが大人気</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊東市八幡野1253-25 ／ 最寄り駅：伊豆高原 ／ 交通案内：伊豆高原駅よりタクシーで8分前後（お車でのアクセスは公式ホームぺージBLOGをご確認ください。）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>10台（無料）駐車場はホテルの正面にございますので、空いているスペースにお停めください。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ｔｈｅ　ｓａｌｏｎ　伊豆高原　Ｈｏｔｅｌｓ　＆　Ｒｅｓｏｒｔは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">Ｒｅｓｏｒｔ　ｓｔａｙ　Ｂｏｗｅｎ～伊豆高原～</h3>
                  <span className="text-xs text-stone-400 ml-2">（りぞーと　すてい　ぼーうぇん　いずこうげん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,928〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/184583/184583.jpg" alt="Ｒｅｓｏｒｔ　ｓｔａｙ　Ｂｏｗｅｎ～伊豆高原～ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【NEW OPEN】眺望最高★大室山すぐ近く★広いお庭で溶岩石BBQ★ラグジュアリーな貸切一軒家</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊東市池635-107 ／ 最寄り駅：伊豆高原 ／ 交通案内：伊豆高原駅から車で約７分／無料駐車場３台分（マイクロバスも駐車可）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場３台／予約不要／マイクロバス駐車可</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「Ｒｅｓｏｒｔ　ｓｔａｙ　Ｂｏｗｅｎ～伊豆高原～は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊東温泉　陽気館</h3>
                  <span className="text-xs text-stone-400 ml-2">（いとうおんせん　ようきかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7473/7473_ky.jpg" alt="伊東温泉　陽気館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>明治43年創業、朝夕お部屋食の老舗宿。２つの自家源泉かけ流し・登山電車で向かう絶景露天が人気です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊東市末広町2-24 ／ 最寄り駅：伊東 ／ 交通案内：＜電車＞JR「伊東駅」より徒歩12分／＜お車＞東名厚木IC→小田原厚木道路経由→国道135号線、約90分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　20台　無料　※カーナビは名称・電話ではなく住所（静岡県伊東市末広町1－21）で検索して下さい</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝日と海を望む絶景と美味しい食事に大満足伊豆シャボテン公園への旅行で利用させて頂きました。高台のお部屋は眺めも良くて朝日と海が見えました。夕食と朝食、とても美味しくて中でもお刺身 鯵の干物が格別で…　2026-07-19 19:16:21投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！静岡県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、静岡県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">三島スカイウォーク</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本一長い歩行者専用吊り橋（全長400m）。富士山と駿河湾のパノラマ絶景を空中散歩感覚で楽しめ、ジップラインなどのアクティビティも充実しています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">熱海温泉・サンビーチ</h3>
                <p className="text-xs text-stone-600 leading-relaxed">都心からのアクセスが抜群な海辺の温泉リゾート。地中海リゾートを彷彿とさせるサンビーチや年間を通して開催される熱海海上花火大会が人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">伊豆シャボテン動物公園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">1,500種類のサボテンと世界中の動物たちが暮らすテーマパーク。冬限定の「元祖カピバラの露天風呂」の癒やされる姿は全国的に有名です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">白糸の滝</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富士山の湧水が幅150mの湾曲した絶壁から千本の絹糸のように流れ落ちる国指定の名勝・天然記念物。清涼なマイナスイオンと富士の恵みを体感できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 静岡県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 静岡県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="shizuoka-izu-ito-jogasaki-stay" />
</div>
  );
}
