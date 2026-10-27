import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/hiroshima-onomichi-shimanami-mukoujima-stay/" },
  title: "広島・尾道＆しまなみ海道向島：千光寺坂の街・猫の細道＆尾道ラーメン・サイクリング宿 厳選ガイド",
  description: "瀬戸内のノスタルジーとサイクリストの聖地・広島尾道＆しまなみ海道向島エリア完全特化！千光寺公園ロープウェイ、猫の細道、尾道水道の夕陽、しまなみ海道サイクリング、名物「尾道ラーメン・瀬戸内レモン・鯛めし宿」を徹底解説。",
  keywords: ["広島", "尾道", "しまなみ海道向島", "千光寺坂の街", "猫の細道", "尾道ラーメン", "サイクリング宿"],
  openGraph: {
    title: "広島・尾道＆しまなみ海道向島：千光寺坂の街・猫の細道＆尾道ラーメン・サイクリング宿 厳選ガイド",
    description: "瀬戸内のノスタルジーとサイクリストの聖地・広島尾道＆しまなみ海道向島エリア完全特化！千光寺公園ロープウェイ、猫の細道、尾道水道の夕陽、しまなみ海道サイクリング、名物「尾道ラーメン・瀬戸内レモン・鯛めし宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "広島・尾道＆しまなみ海道向島：千光寺坂の街・猫の細道＆尾道ラーメン・サイクリング宿 厳選ガイド",
    description: "瀬戸内のノスタルジーとサイクリストの聖地・広島尾道＆しまなみ海道向島エリア完全特化！千光寺公園ロープウェイ、猫の細道、尾道水道の夕陽、しまなみ海道サイクリング、名物「尾道ラーメン・瀬戸内レモン・鯛めし宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hiroshima-onomichi-shimanami-mukoujima-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hiroshima-onomichi-shimanami-mukoujima-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "onomichi_senkoji_slope_stay",
    "title": "1. 千光寺公園〜坂の街・猫の細道（大宝山から見下ろす尾道水道パノラマ）",
    "timing": "通年（春の千光寺公園桜百選・秋の文学散歩）",
    "desc": "弘法大師開基と伝わる名刹「千光寺」。朱塗りの本堂や巨岩「玉の岩」。千光寺山ロープウェイで登る山頂展望台「PEAK」からの尾道水道と島々の絶景。福石猫が並ぶノスタルジックな「猫の細道」と古民家カフェ巡り。",
    "spots": "千光寺公園（頂上展望台PEAK・千光寺山ロープウェイ）、猫の細道（初代福石猫）、文学のこみち、ONOMICHI U2",
    "access": "JR山陽本線「尾道駅」下車。新尾道駅（山陽新幹線）より路線バスで約15分。",
    "tip": "「千光寺山頂展望台 PEAK」はウッドデッキのスロープが整備されており、尾道水道と対岸の向島が一望できる最高のフォトスポットです。"
  },
  {
    "key": "shimanami_cycling_mukoujima_stay",
    "title": "2. しまなみ海道〜向島・因島（海の上を爽快に走るサイクリストの聖地）",
    "timing": "通年（春〜秋の爽快シーサイドサイクリング）",
    "desc": "尾道から愛媛・今治まで6つの島と橋を渡る全長約70kmの「しまなみ海道」。尾道駅前から渡船で約5分の「向島（むかいしま）」からスタート。海沿いのレモン畑や因島大橋を眺めながら走る爽快なサイクリングロード。",
    "spots": "尾道渡船、向島（立花海岸・後藤鉱泉所マルゴサイダー）、因島大橋（自転車歩行者道）、耕三寺（未来心の丘・白大理石庭園）",
    "access": "尾道駅前港より渡船で向島へ。",
    "tip": "尾道駅前の「ONOMICHI U2」では、GIANT製ロードバイクのレンタルが可能で、客室内に自転車を持ち込めるサイクリスト専用ホテルが併設されています。"
  },
  {
    "key": "onomichi_ramen_setouchi_fish_stay",
    "title": "3. 本場「尾道ラーメン」＆瀬戸内レモン（鶏ガラ煮干し出汁と大粒背脂の旨味）",
    "timing": "通年（コクがあるのに後味スッキリな伝統ラーメン）",
    "desc": "瀬戸内の小魚（煮干し・イリコ）と鶏ガラをベースにした醤油スープに、ミンチ状の大粒豚背脂が浮く「尾道ラーメン」。平打ち熟成麺のコシ。瀬戸内海の旬の地魚（オコゼ・アコウ・タイ）のお造り、瀬戸内レモンポーク。",
    "spots": "尾道ラーメン老舗店（朱華園跡・つたふじ）、尾道本通り商店街、尾道プリン（おやつとやまねこ）",
    "access": "尾道市街・海岸通り。",
    "tip": "尾道駅近くの「おやつとやまねこ」の「尾道プリン」は、特製レモンシロップをかけて食べる絶品で、行列ができる大人気スイーツです。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【広島・尾道＆しまなみ海道向島】千光寺坂の街・猫の細道＆尾道ラーメン・サイクリング宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "瀬戸内のノスタルジーとサイクリストの聖地・広島尾道＆しまなみ海道向島エリア完全特化！千光寺公園ロープウェイ、猫の細道、尾道水道の夕陽、しまなみ海道サイクリング、名物「尾道ラーメン・瀬戸内レモン・鯛めし宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/hiroshima-onomichi-shimanami-mukoujima-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【広島・尾道＆しまなみ海道向島】千光寺坂の街・猫の細道＆尾道ラーメン・サイクリング宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/hiroshima-onomichi-shimanami-mukoujima-stay/" }
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
            ONOMICHI & SHIMANAMI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「広島・尾道＆しまなみ海道向島」千光寺坂の街・猫の細道＆尾道ラーメン・サイクリング宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            尾道水道を行き交う渡船と、坂道に広がるノスタルジックな石段の街「尾道」。千光寺から見下ろす瀬戸内海の多島美。海の上を走るサイクリストの聖地「しまなみ海道」。レトロな古民家カフェと背脂醤油の尾道ラーメンを味わう旅。
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
              📊 広島・尾道＆しまなみ海道向島：千光寺坂の街・猫の細道＆尾道ラーメン・サイクリング宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「広島・尾道＆しまなみ海道向島：千光寺坂の街・猫の細道＆尾道ラーメン・サイクリング宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 町家旅館　航　ＨＯＴＥＬ　ｗａｔａｒｉ</td>
                <td className="p-3 text-stone-600">広島県尾道市久保3-11-11-2</td>
                <td className="p-3 text-stone-600">尾道駅周辺</td>
                <td className="p-3 text-stone-600">有り　１台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">¥10,426〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196258%2F196258.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 鞆の浦温泉　ホテル鴎風亭</td>
                <td className="p-3 text-stone-600">広島県福山市鞆町鞆136</td>
                <td className="p-3 text-stone-600">福山駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.52（868件）</td>
                <td className="p-3 font-bold text-rose-600">¥22,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F74580%2F74580.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 鞆の浦温泉　景勝館　漣亭</td>
                <td className="p-3 text-stone-600">広島県福山市鞆町鞆421</td>
                <td className="p-3 text-stone-600">福山駅周辺</td>
                <td className="p-3 text-stone-600">無料。 敷地内にはございません。約400ｍ離れた場所にございます。スタッフでご移動かご誘導します。</td>
                <td className="p-3 font-bold text-amber-600">★4.15（954件）</td>
                <td className="p-3 font-bold text-rose-600">¥16,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7099%2F7099.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 尾道やすらぎの宿　しーそー</td>
                <td className="p-3 text-stone-600">広島県尾道市向島町84-2</td>
                <td className="p-3 text-stone-600"></td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.75（91件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166267%2F166267.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 尾道第一ホテル</td>
                <td className="p-3 text-stone-600">広島県尾道市西御所町4-7</td>
                <td className="p-3 text-stone-600">尾道駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場有り　３０台。　※トラックや大型バスなどは有料。（要事前相談）</td>
                <td className="p-3 font-bold text-amber-600">★3.73（901件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,963〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4612%2F4612.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. グリーンヒルホテル尾道</td>
                <td className="p-3 text-stone-600">広島県尾道市東御所町9-1</td>
                <td className="p-3 text-stone-600">尾道駅周辺</td>
                <td className="p-3 text-stone-600">専用駐車場無し。駅前港湾駐車場 2000円/1日 1000円の割引券あり。＊満車の場合有</td>
                <td className="p-3 font-bold text-amber-600">★4.4（1503件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,486〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F783%2F783.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">町家旅館　航　ＨＯＴＥＬ　ｗａｔａｒｉ</h3>
                  <span className="text-xs text-stone-400 ml-2">（まちやりょかん　わたり　ほてる　わたり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,426〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/196258/196258.jpg" alt="町家旅館　航　ＨＯＴＥＬ　ｗａｔａｒｉ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>広島尾道の一棟貸し宿で大人の隠れ家ステイ｜サイクリスト歓迎</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県尾道市久保3-11-11-2 ／ 最寄り駅：尾道 ／ 交通案内：ＪＲ『尾道』駅から徒歩約２３分 、『福山西ＩＣ』から車で約１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「町家旅館　航　ＨＯＴＥＬ　ｗａｔａｒｉは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">鞆の浦温泉　ホテル鴎風亭</h3>
                  <span className="text-xs text-stone-400 ml-2">（おうふうてい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥22,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/74580/74580_wa.jpg" alt="鞆の浦温泉　ホテル鴎風亭 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2022年3月　「2タイプのスイートルーム」　「プレミアムラウンジ」がOPEN！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県福山市鞆町鞆136 ／ 最寄り駅：福山 ／ 交通案内：福山駅南口～予約制シャトルバス1日3便12：00／14：45／16：15　福山東IC・福山西IC共に車で30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ロケーションと料理が最高、清掃も完璧こちらの旅館が1番の楽しみで来ました。まず、クチコミ通りロケーションが素晴らしくお料理も大変美味しかったです。フロントさんの接客も丁寧でおはようございますや…　2026-08-19 12:52:07投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">鞆の浦温泉　景勝館　漣亭</h3>
                  <span className="text-xs text-stone-400 ml-2">（とものうらおんせん　けいしょうかん　さざなみてい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥16,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7099/7099_bath.jpg" alt="鞆の浦温泉　景勝館　漣亭 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【2024年3月全館リニューアルオープン】鞆の浦散策に最適な場所に立地する、料理とおもてなし自慢の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県福山市鞆町鞆421 ／ 最寄り駅：福山 ／ 交通案内：福山駅～予約制シャトルバス1日3便12：00／14：45／16：15　福山東IC・福山西IC共に車で30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料。 敷地内にはございません。約400ｍ離れた場所にございます。スタッフでご移動かご誘導します。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お食事がすごく美味しかったです。品のある味つけ、盛り付け。鯛づくしでなかでも鯛しゃぶと鯛茶漬けは最高に美味しかった。お部屋もステキで、お風呂もよかったです。他の画像やクチコミの詳細はこちら…　2026-08-16 09:44:43投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">尾道やすらぎの宿　しーそー</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                
                <div className="md:col-span-3 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>目の前に広がる尾道の絶景をお楽しみください☆特におすすめは夜景！水面に映る街灯りが幻想的です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県尾道市向島町84-2 ／ 最寄り駅：主要駅 ／ 交通案内：</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「尾道やすらぎの宿　しーそーは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">尾道第一ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（おのみち　だいいちほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,963〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4612/4612_heya.jpg" alt="尾道第一ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【尾道駅から徒歩3分】◆無料駐車場◆しまなみ海道観光＆サイクリングの拠点に＜尾道水道を望む客室あり＞</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県尾道市西御所町4-7 ／ 最寄り駅：尾道 ／ 交通案内：ＪＲ尾道駅より徒歩３分、新尾道駅より車で７分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場有り　３０台。　※トラックや大型バスなどは有料。（要事前相談）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「清潔感があり中心部へも徒歩圏内で大満足綺麗で中心部まで徒歩圏内とロケーションも適度で非常に満足でした。クチコミの詳細はこちらから　https://review.travel.rakuten.c…　2026-08-14 09:05:24投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">グリーンヒルホテル尾道</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぐりーんひるほてる　おのみち）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,486〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/783/783_twn.jpg" alt="グリーンヒルホテル尾道 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＪＲ尾道駅から徒歩２分に位置し、尾道観光やしまなみ海道サイクリングの拠点に最適！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 広島県尾道市東御所町9-1 ／ 最寄り駅：尾道 ／ 交通案内：山陽本線尾道駅駅前　山陽新幹線新尾道駅より車で７分 山陽自動車道福山西・尾道ＩＣより約２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>専用駐車場無し。駅前港湾駐車場 2000円/1日 1000円の割引券あり。＊満車の場合有</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/783?reviewId=33123478319389　2026-08-02 16:31:29投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！広島県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、広島県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Miyajima_From_The_Ferry_%2830093845%29.jpeg/1280px-Miyajima_From_The_Ferry_%2830093845%29.jpeg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="厳島神社（宮島）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">厳島神社（宮島）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界文化遺産に登録された安芸の宮島。海上に浮かぶ鮮やかな朱塗りの大鳥居と社殿は潮の満ち引きで表情を変え、日本三景に相応しい神秘の美しさです。 厳島（いつくしま）は、広島県廿日市市宮島町にある島。瀬戸内海西部、広島湾の北西部に位置する。通称は安芸の宮島（あきのみやじま）、または宮島。かつて島全体が佐伯郡宮島町と一致していたが、2005年（平成17年）に廿日市市と合併した。 古代より、島そのものが自然崇拝の対象であったと考えられる。平安時代末期以降は、厳島神社の影響力の強さや海上交通の拠点としての重要…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">原爆ドーム・平和記念公園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界へ恒久平和を訴え続ける負の遺産・世界文化遺産。元産業奨励館の被爆した姿が今も残され、平和記念資料館には世界中から多くの人が訪れます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">尾道（千光寺公園）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">坂と猫と映画の街として愛される港町。千光寺山の山頂からロープウェイで登れば、尾道水道と造船所、瀬戸内海の島々を一望するノスタルジックな風景が広がります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">呉・大和ミュージアム</h3>
                <p className="text-xs text-stone-600 leading-relaxed">かつて東洋一の軍港・造船の街として栄えた呉の歴史を伝える博物館。館内中央に鎮座する10分の1スケールの戦艦「大和」の精巧な復元モデルは圧巻です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 広島県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 広島県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="hiroshima-onomichi-shimanami-mukoujima-stay" />
</div>
  );
}
