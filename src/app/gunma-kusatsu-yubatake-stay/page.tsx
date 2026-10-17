import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/gunma-kusatsu-yubatake-stay/" },
  title: "群馬・草津温泉：湯畑・西の河原＆湯もみ体験極上宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本一の名湯・草津温泉エリア完全特化！湯畑のライトアップ、西の河原大露天風呂、熱乃湯の湯もみショー、温泉街の食べ歩きと源泉かけ流し旅館を徹底解説。",
  keywords: ["群馬", "草津温泉", "湯畑", "西の河原", "湯もみ体験極上宿", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "群馬・草津温泉：湯畑・西の河原＆湯もみ体験極上宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "日本一の名湯・草津温泉エリア完全特化！湯畑のライトアップ、西の河原大露天風呂、熱乃湯の湯もみショー、温泉街の食べ歩きと源泉かけ流し旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "群馬・草津温泉：湯畑・西の河原＆湯もみ体験極上宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "日本一の名湯・草津温泉エリア完全特化！湯畑のライトアップ、西の河原大露天風呂、熱乃湯の湯もみショー、温泉街の食べ歩きと源泉かけ流し旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["gunma-kusatsu-yubatake-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for gunma-kusatsu-yubatake-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kusatsu_yubatake_view",
    "title": "1. 湯畑周辺・温泉街中心部（エメラルドグリーンの湯滝と夜のライトアップ）",
    "timing": "通年（冬の湯けむりとイルミネーションが圧巻）",
    "desc": "草津温泉のシンボル「湯畑」。木樋を流れる源泉と滝のように流れ落ちる湯滝。夜には幻想的にライトアップされ、浴衣姿で温泉まんじゅうや焼き鳥を片手にそぞろ歩き。",
    "spots": "湯畑、熱乃湯（湯もみと踊りショー）、湯畑前足湯（湯けむり亭）、御座之湯、光泉寺（遅咲由札観音）",
    "access": "JR吾妻線「長野原草津口駅」よりJRバスで約25分「草津温泉バスターミナル」下車徒歩約5分。",
    "tip": "光泉寺の階段上から見下ろす湯畑の全景は、草津で最も有名な記念撮影スポットです。"
  },
  {
    "key": "kusatsu_sainokawara",
    "title": "2. 西の河原公園〜大露天風呂（至る所から湯が湧く奇観と日本屈指のメガ露天）",
    "timing": "通年（秋の紅葉・冬の雪見露天風呂）",
    "desc": "湯川の河原からあちこち温泉が湧き出し、湯けむりが立ち込める「西の河原公園」。最奥には総面積500平方メートルの圧倒的開放感を誇る「西の河原露天風呂」が広がります。",
    "spots": "西の河原公園、西の河原露天風呂、鬼の茶屋、穴守稲荷神社",
    "access": "湯畑より西の河原通り（お土産・甘味ストリート）を抜けて徒歩約10分。",
    "tip": "金曜日の夜限定で「西の河原露天風呂」が混浴イベント（湯あみ着着用）を開催しておりカップルに人気です。"
  },
  {
    "key": "kusatsu_luxury_hideaway",
    "title": "3. 草津高台・白根山麓（万代鉱源泉や白旗源泉を引く全室離れ・大人宿）",
    "timing": "通年（新緑・夏の避暑・冬のスキーリゾート）",
    "desc": "中心街の賑わいから一歩離れた閑静な高台。つつじ亭や望雲など名門宿が点在し、異なる複数の自家源泉を引く贅沢な湯巡りと、上州牛・群馬の旬食材を使った本格会席を堪能。",
    "spots": "草津温泉スキー場（天狗山プレイゾーン）、草津白根山（湯釜）、ベルツ記念館",
    "access": "草津温泉バスターミナルより各旅館の無料送迎車で約3〜5分。",
    "tip": "草津温泉スキー場の「バンジップテング（日本一急勾配のジップライン）」で空中散歩を楽しむのも爽快です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【群馬・草津温泉】湯畑・西の河原＆湯もみ体験極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "日本一の名湯・草津温泉エリア完全特化！湯畑のライトアップ、西の河原大露天風呂、熱乃湯の湯もみショー、温泉街の食べ歩きと源泉かけ流し旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/gunma-kusatsu-yubatake-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【群馬・草津温泉】湯畑・西の河原＆湯もみ体験極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/gunma-kusatsu-yubatake-stay/" }
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
            KUSATSU YUBATAKE MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「群馬・草津温泉」湯畑・西の河原＆湯もみ体験極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            毎分3万2300リットル以上の自然湧出量を誇る日本屈指の温泉地「草津」。もうもうと立ち込める湯けむりとエメラルドグリーンの湯畑。強酸性の名湯で心身を清める極上の温泉旅へ。
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
              📊 群馬・草津温泉：湯畑・西の河原＆湯もみ体験極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「群馬・草津温泉：湯畑・西の河原＆湯もみ体験極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 草津温泉　湯畑展望露天の宿　ぬ志勇旅館（ぬしゆうりょかん）</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡草津町446</td>
                <td className="p-3 text-stone-600">長野原草津口駅周辺</td>
                <td className="p-3 text-stone-600">有り　１４台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.39（567件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108587%2F108587.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 草津温泉　中村屋旅館＜群馬県＞</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡草津町草津98</td>
                <td className="p-3 text-stone-600">■JR吾妻線■長野原草津口駅下車→草津温泉行きバスで20分→草津温泉バ</td>
                <td className="p-3 text-stone-600">湯畑観光駐車場1階　ご来館時に当日15時〜翌日10時までの駐車サービス券をお渡ししております。</td>
                <td className="p-3 font-bold text-amber-600">★4.74（593件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31675%2F31675.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 草津温泉　十二屋旅館</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡草津町草津155</td>
                <td className="p-3 text-stone-600">長野原草津口駅周辺</td>
                <td className="p-3 text-stone-600">有　10台　無料　（７台目以降はつめこみ駐車です）　当日は１３時から駐車可能</td>
                <td className="p-3 font-bold text-amber-600">★3.67（278件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F41000%2F41000.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 草津温泉　尻焼き風呂の桐島屋旅館</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡草津町大字草津541 桐島屋旅館</td>
                <td className="p-3 text-stone-600">長野原草津口駅周辺</td>
                <td className="p-3 text-stone-600">有り　12台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.27（187件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,145〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2487%2F2487.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 草津温泉　草津ホテル１９１３</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡草津町草津479</td>
                <td className="p-3 text-stone-600">長野原草津口駅周辺</td>
                <td className="p-3 text-stone-600">敷地内に４０台 無料</td>
                <td className="p-3 font-bold text-amber-600">★4.44（1112件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F75162%2F75162.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 草津温泉　源泉かけ流しの宿　ひのき亭　牧水</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡草津町草津19-9</td>
                <td className="p-3 text-stone-600">長野原草津口駅周辺</td>
                <td className="p-3 text-stone-600">有り8台(1組に付き1台/無料)※午後1時より駐車可能。当館前に到着後お電話ください。</td>
                <td className="p-3 font-bold text-amber-600">★4.33（196件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108634%2F108634.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">草津温泉　湯畑展望露天の宿　ぬ志勇旅館（ぬしゆうりょかん）</h3>
                  <span className="text-xs text-stone-400 ml-2">（くさつおんせん　ゆばたけてんぼうろてんのやど　ぬしゆうりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/108587/108587_kan.jpg" alt="草津温泉　湯畑展望露天の宿　ぬ志勇旅館（ぬしゆうりょかん） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>湯畑が望める源泉掛け流し露天風呂が自慢。草津でも名湯といわれ１０軒の宿しか引いていない「白旗の湯」をご堪能頂けます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡草津町446 ／ 最寄り駅：長野原草津口 ／ 交通案内：長野原草津口駅から草津温泉行きバスで約２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１４台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.42 ／ 立地 ★4.48 ／ 部屋 ★4.14 ／ 設備 ★4.02 ／ 風呂 ★4.53 ／ 食事 ★4.49</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「美味しい食事とスタッフの優しさに和むご飯が美味しいスタッフさんも、優しくて和みましたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hote…　2026-10-08 00:46:46投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">草津温泉　中村屋旅館＜群馬県＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（くさつおんせん　なかむらやりょかん＜ぐんまけん＞）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31675/31675_room.jpg" alt="草津温泉　中村屋旅館＜群馬県＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2024シルバーアワード受賞☆看板猫のなかにゃんずがお出迎え！/湯畑まで30秒♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡草津町草津98 ／ 最寄り駅：主要駅 ／ 交通案内：■JR吾妻線■長野原草津口駅下車→草津温泉行きバスで20分→草津温泉バスターミナルより徒歩2分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>湯畑観光駐車場1階　ご来館時に当日15時〜翌日10時までの駐車サービス券をお渡ししております。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.79 ／ 立地 ★4.74 ／ 部屋 ★4.42 ／ 設備 ★4.48 ／ 風呂 ★4.75 ／ 食事 ★4.79</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/31675?reviewId=33123479672627　2026-10-09 14:33:06投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">草津温泉　十二屋旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（くさつおんせん　じゅうにやりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/41000/41000_wa.jpg" alt="草津温泉　十二屋旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>湯畑まで徒歩１分♪　 全１０室の静かな大人宿♪　人気の露天風呂付和室は４部屋あり♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡草津町草津155 ／ 最寄り駅：長野原草津口 ／ 交通案内：草津温泉バスターミナルより徒歩3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　10台　無料　（７台目以降はつめこみ駐車です）　当日は１３時から駐車可能</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.52 ／ 立地 ★3.48 ／ 部屋 ★3.67 ／ 設備 ★3.48 ／ 風呂 ★3.92 ／ 食事 ★3.28</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「大浴場が熱すぎて入れず、価格に見合わない内容大浴場のお湯が熱過ぎて、温度を下げる方法もなく、入るのを諦めました。いくら草津温泉でも、熱ければ良いというわけではないと思います。その他でも総じ…　2026-09-25 16:08:42投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">草津温泉　尻焼き風呂の桐島屋旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（くさつおんせん　しりやきぶろの　きりしまやりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,145〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/2487/2487_heya.jpg" alt="草津温泉　尻焼き風呂の桐島屋旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>湯畑まで徒歩3分！明治時代から続く老舗旅館。100%源泉かけ流しの尻焼き風呂。貸切風呂無料！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡草津町大字草津541 桐島屋旅館 ／ 最寄り駅：長野原草津口 ／ 交通案内：関越道渋川伊香保ICより車で1時間半 or JR長野原草津口駅よりJRバスで草津温泉バスターミナル駅まで約25分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　12台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.36 ／ 立地 ★4.23 ／ 部屋 ★4.23 ／ 設備 ★4.05 ／ 風呂 ★4.64</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉は最高、朝食も程よい満足感温泉は横綱でした。朝食も程よい感じでした。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voic…　2026-09-21 20:20:47投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">草津温泉　草津ホテル１９１３</h3>
                  <span className="text-xs text-stone-400 ml-2">（くさつおんせん　くさつほてる　１９１３）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/75162/75162_gr.jpg" alt="草津温泉　草津ホテル１９１３ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>1913年創業、日本旅館の伝統的建築そして草津の自然と文化を体験できます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡草津町草津479 ／ 最寄り駅：長野原草津口 ／ 交通案内：長野原草津口駅よりＪＲバスに２５分乗車 徒歩8分（長野原までのシャトルバスはございません、最終バスは８４８pm発です）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>敷地内に４０台 無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.27 ／ 立地 ★4.22 ／ 部屋 ★4.37 ／ 設備 ★4.33 ／ 風呂 ★4.63 ／ 食事 ★4.38</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「リフォームされた綺麗な館内と二種の源泉西の河原公園の近くにあります。草津温泉に旅行した際に宿泊しました。夕食なし朝食のみのプランです。歴史ある建物ですが、中はリフォームされていて大…　2026-09-07 21:56:23投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">草津温泉　源泉かけ流しの宿　ひのき亭　牧水</h3>
                  <span className="text-xs text-stone-400 ml-2">（くさつおんせん　げんせんかけながしのやど　ひのきてい　ぼくすい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/108634/108634_wa1.jpg" alt="草津温泉　源泉かけ流しの宿　ひのき亭　牧水 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>草津温泉にある全室木曽檜で数寄屋造の純和風旅館。源泉かけ流しの3つの無料貸切風呂</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡草津町草津19-9 ／ 最寄り駅：長野原草津口 ／ 交通案内：ＪＲ　長野原草津口駅からバスで２０分 草津温泉バスターミナルから徒歩2分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り8台(1組に付き1台/無料)※午後1時より駐車可能。当館前に到着後お電話ください。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.4 ／ 立地 ★4.14 ／ 部屋 ★4.17 ／ 設備 ★4.1 ／ 風呂 ★4.44 ／ 食事 ★4.52</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「古民家の温かさとトロトロの温泉に癒やされる古民家の中庭みたいなところから入っていきます。温かいお迎えしてくれました。お風呂も3種類貸切で檜のにおりが心地よかったです。お湯も化粧水みたいなトロミがあ…　2026-09-16 19:30:51投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=108634&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！群馬県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、群馬県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Yubatake_%28Kusatsu_Onsen%29.jpg/1280px-Yubatake_%28Kusatsu_Onsen%29.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="草津温泉（湯畑）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">草津温泉（湯畑）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三名泉の一つで自然湧出量日本一を誇る温泉街のシンボル。毎分4,000リットルの源泉が湯滝となって湧き出し、湯もみ体験や夜のライトアップも人気です。 草津温泉（くさつおんせん）は、群馬県吾妻郡草津町草津界隈（江戸時代における上野国吾妻郡草津村界隈、幕藩体制下の上州御料草津村界隈〈初期は沼田藩知行〉）に所在する温泉である。草津白根山東麓に位置する。 毎分3万2300リットル以上の自然湧出量は日本一。室町時代には万里集九が有馬温泉や下呂温泉とともに「三名泉」とし、江戸時代には林羅山もこれらの三温泉を「天下の三…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/82/Ikaho_Onsen_03.jpg/1280px-Ikaho_Onsen_03.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="伊香保温泉（石段街）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">伊香保温泉（石段街）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">365段の石段が続く情緒溢れる温泉街。石段の両脇には射的場や土産物店、足湯が立ち並び、温泉まんじゅう発祥の地としても知られています。 伊香保温泉（いかほおんせん）は、群馬県渋川市伊香保町にある温泉。草津温泉と並んで県を代表する名湯で、上毛かるたでは「伊香保温泉 日本の名湯」と歌われている。 「伊香保温泉」として地域団体商標に登録されている。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">富岡製糸場</h3>
                <p className="text-xs text-stone-600 leading-relaxed">明治政府が設立した日本初の本格的な製糸工場であり、世界文化遺産。木骨レンガ造りの巨大な繰糸所や蚕室が良好に保存されており、日本の近代化の足跡を辿れます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">吹割の滝（ふきわれのたき）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「東洋のナイアガラ」と称されるダイナミックな滝。巨大な岩盤が割れ目の中に河川の水が吸い込まれるように流れ落ちる迫力ある景観が魅力です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 群馬県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 群馬県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="gunma-kusatsu-yubatake-stay" />
</div>
  );
}
