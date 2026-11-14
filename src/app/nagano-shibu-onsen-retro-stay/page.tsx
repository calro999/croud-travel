import ShareButtons from "@/app/components/ShareButtons";
import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/nagano-shibu-onsen-retro-stay/" },
  title: "長野・信州渋温泉：九湯めぐり＆金具屋・スノーモンキー極上宿 厳選ガイド",
  description: "信州・渋温泉エリア完全特化！九つの外湯めぐり（厄除巡浴外湯めぐり）、国登録有形文化財「歴史の宿 金具屋」、地獄谷野猿公苑（スノーモンキー）と石畳温泉街の老舗旅館を徹底解説。",
  keywords: ["長野", "信州渋温泉", "九湯めぐり", "金具屋", "スノーモンキー極上宿", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "長野・信州渋温泉：九湯めぐり＆金具屋・スノーモンキー極上宿 厳選ガイド",
    description: "信州・渋温泉エリア完全特化！九つの外湯めぐり（厄除巡浴外湯めぐり）、国登録有形文化財「歴史の宿 金具屋」、地獄谷野猿公苑（スノーモンキー）と石畳温泉街の老舗旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "長野・信州渋温泉：九湯めぐり＆金具屋・スノーモンキー極上宿 厳選ガイド",
    description: "信州・渋温泉エリア完全特化！九つの外湯めぐり（厄除巡浴外湯めぐり）、国登録有形文化財「歴史の宿 金具屋」、地獄谷野猿公苑（スノーモンキー）と石畳温泉街の老舗旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagano-shibu-onsen-retro-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagano-shibu-onsen-retro-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shibu_kanaguya_history",
    "title": "1. 金具屋・斉月楼周辺（宮大工が腕を競った木造建築の最高峰と大正浪漫）",
    "timing": "通年（夜のライトアップは年中無休で幻想的）",
    "desc": "昭和11年に完成した国登録有形文化財「斉月楼（木造四階建て）」と「大広間」。ジブリ映画の舞台を彷彿とさせる圧倒的な建築美。夜のライトアップされた木造楼閣と、自家源泉から引く8つの風呂を巡る贅沢。",
    "spots": "金具屋（斉月楼・居人風呂・浪漫風呂）、渋高薬師（温泉街を見下ろす高台）、石畳通り",
    "access": "長野電鉄長野線「湯田中駅」より路線バス・タクシーで約7分。各旅館の送迎バスあり。",
    "tip": "金具屋に宿泊すると毎日夕方に開催される「文化財建築解説ツアー」に参加でき、宮大工の粋なこだわりを学べます。"
  },
  {
    "key": "shibu_kyuto_sotoyu",
    "title": "2. 厄除巡浴九湯めぐり（宿泊者専用の鍵で巡る一番湯〜九番湯「渋大湯」）",
    "timing": "通年（手ぬぐいにスタンプを集めて満願成就祈願）",
    "desc": "渋温泉の宿に宿泊すると渡される「九湯の鍵」。初湯から大湯まで異なる源泉・効能の9つの共同浴場を巡り、祈願手ぬぐいに朱印を集めて高台の渋高薬師にお参りする伝統の湯めぐり。",
    "spots": "九番湯・渋大湯（名物蒸し風呂・足湯）、一番湯・初湯、羽織屋（温泉まんじゅう）、小石屋旅館（カフェバー）",
    "access": "石畳の温泉街沿いに9箇所の外湯が点在（すべて徒歩数分圏内）。",
    "tip": "「羽織屋」の焼きたて温泉まんじゅうや「小石屋旅館」のクラフトビールを湯上がりに味わうのが最高の楽しみです。"
  },
  {
    "key": "jigokudani_snow_monkey",
    "title": "3. 地獄谷野猿公苑（世界で唯一！温泉に入る野生ニホンザルの楽園）",
    "timing": "冬期（12月〜3月の雪景色の中での入浴が世界的人気）",
    "desc": "世界中から旅行者が訪れる「Snow Monkey Park（地獄谷野猿公苑）」。雪が舞う露天風呂で気持ちよさそうに目を細めて温泉に浸かる野生の猿たち。上林温泉の自然豊かな宿で信州プレミアム牛を満喫。",
    "spots": "地獄谷野猿公苑（スノーモンキー）、地獄谷噴泉（国の天然記念物）、上林温泉、志賀高原ロマン美術館",
    "access": "湯田中駅よりバスで「上林温泉」下車、遊歩道を徒歩約30分。",
    "tip": "冬の遊歩道は雪道となるため、上林温泉のインフォメーションセンターでスノーブーツやスパイクのレンタルがおすすめです。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【長野・信州渋温泉】九湯めぐり＆金具屋・スノーモンキー極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "信州・渋温泉エリア完全特化！九つの外湯めぐり（厄除巡浴外湯めぐり）、国登録有形文化財「歴史の宿 金具屋」、地獄谷野猿公苑（スノーモンキー）と石畳温泉街の老舗旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/nagano-shibu-onsen-retro-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【長野・信州渋温泉】九湯めぐり＆金具屋・スノーモンキー極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/nagano-shibu-onsen-retro-stay/" }
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
            SHIBU ONSEN RETRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「長野・信州渋温泉」九湯めぐり＆金具屋・スノーモンキー極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            石畳が敷き詰められたレトロな小径と、下駄の音が心地よく響く「信州渋温泉」。宿泊者限定で鍵が渡される9つの外湯めぐり、木造建築美の極致・金具屋。ノスタルジーに浸る大人の温泉旅路。
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-6">
        <ShareButtons title={"長野・信州渋温泉：九湯めぐり＆金具屋・スノーモンキー極上宿 厳選ガイド"} url={"https://croud-travel.pages.dev/nagano-shibu-onsen-retro-stay/"} />
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
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">長野・信州渋温泉：九湯めぐり＆金具屋・スノーモンキー極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析</h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「長野・信州渋温泉：九湯めぐり＆金具屋・スノーモンキー極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 渋温泉　歴史の宿　金具屋</td>
                <td className="p-3 text-stone-600">長野県下高井郡山ノ内町平穏2202</td>
                <td className="p-3 text-stone-600">湯田中駅周辺</td>
                <td className="p-3 text-stone-600">有　３０台　無料　屋外のみ　マイクロバス以上は有料</td>
                <td className="p-3 font-bold text-amber-600">★4.54（981件）</td>
                <td className="p-3 font-bold text-rose-600">¥18,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F32044%2F32044.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 渋温泉　ふる里の宿　天川荘</td>
                <td className="p-3 text-stone-600">長野県下高井郡山ノ内町平穏1263-イ</td>
                <td className="p-3 text-stone-600">湯田中駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.5（224件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51754%2F51754.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 虎杖浜温泉ホテル</td>
                <td className="p-3 text-stone-600">北海道白老郡白老町虎杖浜73-5</td>
                <td className="p-3 text-stone-600">新千歳空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.34（367件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,808〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F162792%2F162792.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 天然温泉　旅人の湯（源泉名：延徳温泉）ホテルルートインＧｒａｎｄ中野小布施－信州中野駅前－</td>
                <td className="p-3 text-stone-600">長野県中野市西1-3-27</td>
                <td className="p-3 text-stone-600">信州中野駅周辺</td>
                <td className="p-3 text-stone-600">有り　109台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.41（205件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187457%2F187457.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 湯田中渋温泉郷　ホテル水明館（伊東園ホテルズ）</td>
                <td className="p-3 text-stone-600">長野県</td>
                <td className="p-3 text-stone-600">長野電鉄　湯田中駅より徒歩にて約5分</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★3.81（755件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,698〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F146144%2F146144.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 湯田中温泉　ホテル豊生</td>
                <td className="p-3 text-stone-600">長野県下高井郡山ノ内町佐野2562</td>
                <td className="p-3 text-stone-600">湯田中駅周辺</td>
                <td className="p-3 text-stone-600">有り　７０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.96（153件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F43824%2F43824.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">長野・信州渋温泉エリアの宿泊施設別スペック＆滞在チェックポイント</h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">渋温泉　歴史の宿　金具屋</h3>
                  <span className="text-xs text-stone-400 ml-2">（しぶおんせん　れきしのやど　かなぐや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥18,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/32044/32044_r1.jpg" alt="渋温泉　歴史の宿　金具屋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>国登録文化財の建築や豊富な源泉からなるかけ流しの風呂など、昔ながらの温泉旅情をお楽しみ下さい。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下高井郡山ノ内町平穏2202 ／ 最寄り駅：湯田中 ／ 交通案内：長野電鉄線　湯田中駅／上信越自動車道　信州中野ＩＣより国道２９２号線を志賀高原方面へ約１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　３０台　無料　屋外のみ　マイクロバス以上は有料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「5種類の貸切風呂と親切な接客に大満足9月1日宿泊、貸切風呂が5種類ありました。外には無料で入れるお風呂が沢山あり2箇所行きました。男女分かれていて外のお風呂は熱めです。お肌スベスベになりました。ま…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">渋温泉　ふる里の宿　天川荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（しぶおんせん　ふるさとのやど　あまがわそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/51754/51754_wa.jpg" alt="渋温泉　ふる里の宿　天川荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>九つの外湯めぐりが楽しめる信州・渋温泉の一番奥に位置する閑静な宿。貸し切り露天風呂有。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下高井郡山ノ内町平穏1263-イ ／ 最寄り駅：湯田中 ／ 交通案内：長野電鉄　湯田中駅より車で２ｋｍ／上林温泉行バス乗車約７分、渋和合橋下車、徒歩５分</p>
                  <p>【長野・信州渋温泉：九湯めぐり＆金具屋・スノーモンキー】 <strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💡 <strong>渋温泉　ふる里の宿　天川荘の滞在ポイント：</strong>「長野・信州渋温泉エリアの散策拠点に適した立地。客室タイプや食事の有無・駐車場条件を旅程に合わせて比較するのがおすすめです。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">虎杖浜温泉ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（こじょうはまおんせんほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,808〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/162792/162792_kan1.jpg" alt="虎杖浜温泉ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>２０２４年３月２日、温泉棟新築！豊富な湯量の源泉かけ流し温泉！ 登別駅ー当館の無料バス運行中</p>
                  <p><strong>【所在地・アクセス】</strong>〒 北海道白老郡白老町虎杖浜73-5 ／ 最寄り駅：新千歳空港 ／ 交通案内：新千歳空港よりお車にて約１時間(マップコード：603 145 860*56) JR登別駅より無料送迎バスで約10分.</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「とろとろの温泉と強めのジャグジーが最高きれいで気持ちいいお風呂でした。温泉がとろとろしてるのもよかったですが、ジャグジーが強いのと水風呂がいい気持ちでした。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　旅人の湯（源泉名：延徳温泉）ホテルルートインＧｒａｎｄ中野小布施－信州中野駅前－</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるるーといんぐらんどなかのおぶせ　しんしゅうなかのえきまえ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/187457/187457.jpg" alt="天然温泉　旅人の湯（源泉名：延徳温泉）ホテルルートインＧｒａｎｄ中野小布施－信州中野駅前－ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>長野電鉄信州中野駅より徒歩3分！無料駐車場・天然温泉大浴場完備！小布施町・志賀高原へ良アクセス！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県中野市西1-3-27 ／ 最寄り駅：信州中野 ／ 交通案内：信州中野駅より徒歩で約3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　109台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「綺麗な館内と豊富な朝食、充電器完備で快適すごく綺麗なホテルでした朝食いただきましたが、種類も豊富で美味しくとても良かったです。お部屋に各種充電コードもあって助かりました。子供達と宿泊し…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯田中渋温泉郷　ホテル水明館（伊東園ホテルズ）</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,698〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/146144/146144.jpg" alt="湯田中渋温泉郷　ホテル水明館（伊東園ホテルズ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>「長野・信州渋温泉（九湯めぐり＆金具屋・スノーモンキー極上宿 厳選ガイド）」の旅の拠点として、落ち着いた客室環境と丁寧なおもてなしを備えた人気の宿泊施設です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：長野電鉄　湯田中駅より徒歩にて約5分</p>
                  <p>【長野・信州渋温泉：九湯めぐり＆金具屋・スノーモンキー】 <strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「隅々まで清潔に保たれていました清潔に保たれてました。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯田中温泉　ホテル豊生</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆだなかおんせ　ほうせい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/43824/43824_k.jpg" alt="湯田中温泉　ホテル豊生 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>自館で温泉の源泉をお見せできる、湯田中唯一のホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下高井郡山ノ内町佐野2562 ／ 最寄り駅：湯田中 ／ 交通案内：湯田中駅より徒歩５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　７０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「この価格でこの内容。全く文句ありません。部屋、設備はそれなりですが、狭いわけでもなく、普通にゆったりと過ごせます。食事も高級食材のつるべうちというわけではないものの、これも普通に美味しく頂けま…」
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
    
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-8">
        <ShareButtons title={"長野・信州渋温泉：九湯めぐり＆金具屋・スノーモンキー極上宿 厳選ガイド"} url={"https://croud-travel.pages.dev/nagano-shibu-onsen-retro-stay/"} />
      </div>
      <HubRelatedPosts currentSlug="nagano-shibu-onsen-retro-stay" />
</div>
  );
}
