import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/heritage-cultural-wooden-ryokan/" },
  title: "登録有形文化財・名建築の宿：宮大工の木造建築・文豪が愛した老舗旅館 厳選ガイド",
  description: "国登録有形文化財・宮大工の名建築旅館完全特化！釘を一本も使わない数寄屋造り、文豪が執筆に訪れた客室、歴史ある磨き上げられた廊下、日本庭園と伝統会席を味わう至高のクラシックステイを徹底解説。",
  keywords: ["登録有形文化財", "名建築の宿", "宮大工の木造建築", "文豪が愛した老舗旅館", "温泉宿", "宿泊予約", "楽天トラベル"],
  openGraph: {
    title: "登録有形文化財・名建築の宿：宮大工の木造建築・文豪が愛した老舗旅館 厳選ガイド",
    description: "国登録有形文化財・宮大工の名建築旅館完全特化！釘を一本も使わない数寄屋造り、文豪が執筆に訪れた客室、歴史ある磨き上げられた廊下、日本庭園と伝統会席を味わう至高のクラシックステイを徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "登録有形文化財・名建築の宿：宮大工の木造建築・文豪が愛した老舗旅館 厳選ガイド",
    description: "国登録有形文化財・宮大工の名建築旅館完全特化！釘を一本も使わない数寄屋造り、文豪が執筆に訪れた客室、歴史ある磨き上げられた廊下、日本庭園と伝統会席を味わう至高のクラシックステイを徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["heritage-cultural-wooden-ryokan"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for heritage-cultural-wooden-ryokan", e);
  }
  return {};
}

export default function HeritageOnsenHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tangible_cultural_heritage_ryokan",
    "title": "1. 国登録有形文化財・数寄屋造り名旅館（宮大工の技が光る組子細工と漆黒の廊下）",
    "timing": "通年（四季折々の日本庭園美と木造建築の温もり）",
    "desc": "樹齢数百年の銘木を用い、釘を一本も使わずに組み上げられた木造多層階建築。欄間に施された精緻な組子細工や職人の手彫り彫刻。年月を経て黒光りする廊下や階段が、日本の伝統美と静寂を醸し出します。",
    "spots": "客室の床の間・違い棚、職人手彫りの欄間彫刻、手吹きガラスの波打ち窓、大正ロマンの意匠",
    "access": "修善寺、湯河原、箱根塔ノ沢、渋温泉、角館などの歴史ある宿場町・温泉街。",
    "tip": "館内ツアーを実施している宿も多く、宮大工の隠された細工や建物の歴史について女将や支配人から解説を聞くことができます。"
  },
  {
    "key": "bungo_literary_master_stay",
    "title": "2. 文豪が逗留した客室＆日本庭園（川端康成・夏目漱石・太宰治が愛した静寂）",
    "timing": "通年（読書や思索にふける静かな執筆リトリート）",
    "desc": "『伊豆の踊子』『城の崎にて』『雪国』など、日本文学史に輝く名作が執筆された客室。文豪が実際に使った文机や硯、直筆の書や原稿が残る宿。窓外に広がる手入れの行き届いた日本庭園を眺めながら過ごす贅沢。",
    "spots": "文豪逗留客室、歴史資料展示室・ギャラリー、池泉回遊式日本庭園、書斎風ラウンジ",
    "access": "城崎温泉、湯ヶ島温泉、湯河原温泉、越後湯沢温泉など。",
    "tip": "文豪が好んだ銘菓や地酒をいただきながら、その宿で生まれた小説を読み返す時間は格別の体験です。"
  },
  {
    "key": "classic_hotel_modern_heritage",
    "title": "3. 日本のクラシックホテル＆洋館（明治・大正の鹿鳴館時代を偲ぶクラシックステイ）",
    "timing": "通年（重厚なメインダイニングと伝統フレンチ）",
    "desc": "日光金谷ホテル、富士屋ホテル、奈良ホテル、東京ステーションホテルなど「日本クラシックホテルの会」加盟ホテル。格天井やアンティーク家具、高い天井に響く足音。歴代の総料理長から受け継がれる伝統のコンソメスープ。",
    "spots": "格天井のメインダイニング、アンティークバー、ミュージアム、歴史的ロビー",
    "access": "日光、箱根宮ノ下、軽井沢、横浜、奈良など。",
    "tip": "パスポート型「クラシックホテルパスポート」にスタンプを集めながら、全国の名門ホテルを巡る旅が大人の間で人気です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【登録有形文化財・名建築の宿】宮大工の木造建築・文豪が愛した老舗旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "国登録有形文化財・宮大工の名建築旅館完全特化！釘を一本も使わない数寄屋造り、文豪が執筆に訪れた客室、歴史ある磨き上げられた廊下、日本庭園と伝統会席を味わう至高のクラシックステイを徹底解説。",
    "url": "https://croud-travel.pages.dev/heritage-cultural-wooden-ryokan/",
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
      { "@type": "ListItem", "position": 2, "name": "【登録有形文化財・名建築の宿】宮大工の木造建築・文豪が愛した老舗旅館 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/heritage-cultural-wooden-ryokan/" }
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
            HERITAGE ARCHITECTURE RYOKAN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「登録有形文化財・名建築の宿」宮大工の木造建築・文豪が愛した老舗旅館 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日本の美意識と宮大工の匠の技が息づく「登録有形文化財の宿」。明治・大正・昭和の文豪や皇族が愛した伝統木造建築、釘を使わない数寄屋造り、磨き抜かれた艶やかな廊下。時を超えて受け継がれる極上のおもてなしへ。
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

              {/* 建築美・泉質・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 建築美・泉質・設備の魅力</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 代表的エリア＆アクセス</span>
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
                      <span>🏨</span> <span>{guide.title}におすすめの厳選名宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選名宿
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
              📊 登録有形文化財・名建築の宿：宮大工の木造建築・文豪が愛した老舗旅館 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「登録有形文化財・名建築の宿：宮大工の木造建築・文豪が愛した老舗旅館 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 修善寺温泉　国の登録文化財の宿　新井旅館</td>
                <td className="p-3 text-stone-600">静岡県伊豆市修善寺970</td>
                <td className="p-3 text-stone-600">修善寺駅周辺</td>
                <td className="p-3 text-stone-600">あり　40台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.56（267件）</td>
                <td className="p-3 font-bold text-rose-600">¥24,420〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31865%2F31865.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 四万温泉　積善館　佳松亭・山荘</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡中之条町四万甲4236</td>
                <td className="p-3 text-stone-600">中之条駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.66（1224件）</td>
                <td className="p-3 font-bold text-rose-600">¥23,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76361%2F76361.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 信玄の湯　湯村温泉　旅館明治　太宰治ゆかりの宿</td>
                <td className="p-3 text-stone-600">山梨県甲府市湯村3-10-14</td>
                <td className="p-3 text-stone-600">甲府駅よりお車で約10分、中央自動車双葉ＩＣより約10分</td>
                <td className="p-3 text-stone-600">15台　無料　★要予約※駐車場所についてはご到着先着順です。近くの空地スペースになる場合がございます</td>
                <td className="p-3 font-bold text-amber-600">★4.43（132件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196489%2F196489.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 島崎藤村ゆかりの宿　中棚荘</td>
                <td className="p-3 text-stone-600">長野県小諸市乙1210</td>
                <td className="p-3 text-stone-600">小諸駅周辺</td>
                <td className="p-3 text-stone-600">有り　３０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.7（543件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F25164%2F25164.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 田沢温泉　ますや旅館＜長野県小県郡＞</td>
                <td className="p-3 text-stone-600">長野県小県郡青木村田沢温泉2686</td>
                <td className="p-3 text-stone-600">上田（長野）駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.73（134件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,550〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F70675%2F70675.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 半月庵</td>
                <td className="p-3 text-stone-600">山口県岩国市岩国1-17-27</td>
                <td className="p-3 text-stone-600">岩国駅周辺</td>
                <td className="p-3 text-stone-600">有り　20台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★3.4（188件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14172%2F14172.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">修善寺温泉　国の登録文化財の宿　新井旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（しゅぜんじおんせん　くにのとうろくぶんかざいのやど　あらいりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥24,420〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31865/31865_he.jpg" alt="修善寺温泉　国の登録文化財の宿　新井旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ミシュランで二つ星の竹林の小径まで徒歩2分、修善寺温泉の中心で観光に便利です</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊豆市修善寺970 ／ 最寄り駅：修善寺 ／ 交通案内：伊豆箱根鉄道線 修善寺駅よりバスまたはタクシーで10分／東名・新東名高速 沼津ICより伊豆縦貫道経由45分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>あり　40台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.67 ／ 立地 ★4.67 ／ 部屋 ★4.72 ／ 設備 ★4.56 ／ 風呂 ★4.72 ／ 食事 ★4.56</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「よくメンテされた登録文化財施設は漸次更新されており(文化財なので許認可大変だと思います)食事も美味しく仲居さんもフレッシュで素晴らしいと思います。ただし、寝具類がせんべい布団で朝が来るのが待ち…　2026-09-14 20:40:38投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">四万温泉　積善館　佳松亭・山荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（しまおんせん　せきぜんかん　かしょうてい・さんそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥23,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/76361/76361_ky1.jpg" alt="四万温泉　積善館　佳松亭・山荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>『歴史と浪漫・優雅と静寂』の旅館棟。国の重要文化財のある「山荘」・贅を尽くした「佳松亭」</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡中之条町四万甲4236 ／ 最寄り駅：中之条 ／ 交通案内：中之条駅からバス４０分終点下車・車で２５分／渋川伊香保ＩＣ→Ｒ１７→Ｒ３５３で約３９ｋｍ６０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.67 ／ 立地 ★4.6 ／ 部屋 ★4.6 ／ 設備 ★4.52 ／ 風呂 ★4.69 ／ 食事 ★4.72</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「館内ツアーで歴史を学び有意義なひととき歴史ある宿で館内ツアーもあり建物や過去の時代の詳しい説明があり有意義な時間を過ごせました。クチコミの詳細はこちらから　https://review.tra…　2026-10-05 05:10:21投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">信玄の湯　湯村温泉　旅館明治　太宰治ゆかりの宿</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/196489/196489.jpg" alt="信玄の湯　湯村温泉　旅館明治　太宰治ゆかりの宿 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2025年8月1日新規オープン！信玄の湯とこだわりの朝ごはんで心ほぐれるひと時を。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県甲府市湯村3-10-14 ／ 最寄り駅：主要駅 ／ 交通案内：甲府駅よりお車で約10分、中央自動車双葉ＩＣより約10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>15台　無料　★要予約※駐車場所についてはご到着先着順です。近くの空地スペースになる場合がございます</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉と朝食に大満足、ゆっくり過ごせた温泉も大変よくまた朝の朝食も大変美味しく頂きました。本当にゆっくり出来るお宿でした。またお泊りしたいです。クチコミの詳細はこちらから　https://rev…　2026-09-08 06:39:26投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">島崎藤村ゆかりの宿　中棚荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（しまざきとうそんゆかりのやど　なかだなそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/25164/25164_t.jpg" alt="島崎藤村ゆかりの宿　中棚荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>文豪・島崎藤村が愛した創業百年の老舗宿。源泉かけ流し天然温泉で自然を感じるひと時を＜軽井沢観光にも＞</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県小諸市乙1210 ／ 最寄り駅：小諸 ／ 交通案内：しなの鉄道「小諸駅」又はJR小海線「小諸駅」／上信越自動車道 小諸ＩＣより車で10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「自家製のお米とあゆの塩焼きが絶品ご飯がとてもおいしかったです。旅館で育て、天日干しをしたお米だそうです。お醤油も手作りでした。あゆの塩焼きも絶品で、頭から食べられました。世代を超え、口…　2026-07-26 09:06:16投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">田沢温泉　ますや旅館＜長野県小県郡＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（たざわおんせん　ますやりょかん　ながのけんちいさがたぐん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,550〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/70675/70675_f.jpg" alt="田沢温泉　ますや旅館＜長野県小県郡＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>■全国旅行支援利用の際はクーポンを獲得下さい■最大5000円オフ＋地域クーポン券最大3,000円分</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県小県郡青木村田沢温泉2686 ／ 最寄り駅：上田（長野） ／ 交通案内：上信越自動車道上田菅平ＩＣ若しくは長野自動車道麻績より30分／新幹線上田駅下車、バスで30分（タクシー20分）青木行</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.81 ／ 立地 ★4.54 ／ 部屋 ★4.62 ／ 設備 ★4.44 ／ 風呂 ★4.62 ／ 食事 ★4.77</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「文化財の建物とマツタケ料理に感動文化財となっているだけあって、素晴らしい建物でした。お部屋をグレードアップしてくださり、ゆったりゆっくりできました。木造で階段が多いので、HPにあった通り足腰の弱い…　2026-10-05 17:31:11投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">半月庵</h3>
                  <span className="text-xs text-stone-400 ml-2">（はんげつあん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥17,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/14172/14172_heya.jpg" alt="半月庵 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>創業明治2年。多くの著名人に愛されてきた老舗宿。美しい庭園の中で厳選食材を使った料理をご賞味ください</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山口県岩国市岩国1-17-27 ／ 最寄り駅：岩国 ／ 交通案内：JR岩国駅から車で約10分、山陽新幹線・新岩国駅より車で約10分、山陽自動車道・岩国ICより約10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　20台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「半月庵は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
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
    
      <HubRelatedPosts currentSlug="heritage-cultural-wooden-ryokan" />
</div>
  );
}
