import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/ehime-matsuyama-dogo-onsen-stay/" },
  title: "愛媛・道後温泉：本館・飛鳥乃湯泉＆坊っちゃん文学・鯛めし極上宿 厳選ガイド",
  description: "日本最古の温泉・道後温泉エリア完全特化！道後温泉本館（保存修理完了）、飛鳥乃湯泉、椿の湯、坊っちゃん列車、宇和島風＆松山風鯛めし食べ歩きと名門旅館を徹底解説。",
  keywords: ["愛媛", "道後温泉", "本館", "飛鳥乃湯泉", "坊っちゃん文学", "鯛めし極上宿", "温泉宿"],
  openGraph: {
    title: "愛媛・道後温泉：本館・飛鳥乃湯泉＆坊っちゃん文学・鯛めし極上宿 厳選ガイド",
    description: "日本最古の温泉・道後温泉エリア完全特化！道後温泉本館（保存修理完了）、飛鳥乃湯泉、椿の湯、坊っちゃん列車、宇和島風＆松山風鯛めし食べ歩きと名門旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "愛媛・道後温泉：本館・飛鳥乃湯泉＆坊っちゃん文学・鯛めし極上宿 厳選ガイド",
    description: "日本最古の温泉・道後温泉エリア完全特化！道後温泉本館（保存修理完了）、飛鳥乃湯泉、椿の湯、坊っちゃん列車、宇和島風＆松山風鯛めし食べ歩きと名門旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["ehime-matsuyama-dogo-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ehime-matsuyama-dogo-onsen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "dogo_honkan_walk",
    "title": "1. 道後温泉本館〜飛鳥乃湯泉・椿の湯（名湯三湯めぐりと湯の街そぞろ歩き）",
    "timing": "通年（全館営業再開でますます賑わう歴史の湯）",
    "desc": "国の重要文化財「道後温泉本館」。太鼓の音で開館を告げる「振鷺閣（しんろかく）」や神の湯・霊の湯。飛鳥時代の建築様式を取り入れた「飛鳥乃湯泉（あすかのゆ）」の開放的な露天風呂。",
    "spots": "道後温泉本館、道後温泉別館 飛鳥乃湯泉、椿の湯、道後ハイカラ通り（道後商店街）、坊っちゃんカラクリ時計",
    "access": "伊予鉄道市内電車（路面電車）「道後温泉駅」下車徒歩約3〜5分。松山空港よりリムジンバス約40分。",
    "tip": "道後ハイカラ通りの「一六本舗」でいただく揚げたての一六タルトの天ぷらは、新感覚の絶品スイーツです。"
  },
  {
    "key": "dogo_taimeshi_gourmet",
    "title": "2. 愛媛の二大鯛めし食べ比べ（炊き込み松山鯛めし＆生卵タレ漬け宇和島鯛めし）",
    "timing": "通年（瀬戸内の真鯛は年中美味）",
    "desc": "土鍋で鯛を一匹丸ごと炊き込む香ばしい「中予風（松山）鯛めし」と、新鮮な真鯛の刺身を生卵と特製醤油ダレに絡めて熱々ご飯にかける「南予風（宇和島）鯛めし」。道後の宿で贅沢に味わい尽くす。",
    "spots": "丸水（がんすい・元祖鯛めし）、かどや道後店、道後麦酒館（道後ビールとじゃこ天）",
    "access": "道後温泉本館周辺、ハイカラ通り沿いに名店が集中。",
    "tip": "道後温泉本館の真向かいにある「道後麦酒館」で、湯上がりに生ビール「坊っちゃんビール」と揚げたてじゃこ天を味わうのが至高です。"
  },
  {
    "key": "dogo_onsen_view_luxury",
    "title": "3. 道後高台・松山城パノラマ（湯築城跡・道後公園と贅沢な客室露天風呂宿）",
    "timing": "通年（春の道後公園桜・秋の紅葉）",
    "desc": "道後温泉街を見晴らす高台の静かな別荘エリア。「ふなや」や「茶玻瑠」「山の手ホテル」など洗練された宿が並び、客室露天風呂から松山市街や夜景を眺めながら極上のプライベートステイ。",
    "spots": "道後公園（湯築城跡・展望台）、松山城（ロープウェイ・現存十二天守）、坂の上の雲ミュージアム",
    "access": "道後温泉駅より徒歩約5〜10分、または各旅館送迎車。",
    "tip": "日本最古の歴史を持つ創業390余年の「ふなや」の日本庭園「詠風庭」は、小川が流れる美しい散策路です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【愛媛・道後温泉】本館・飛鳥乃湯泉＆坊っちゃん文学・鯛めし極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "日本最古の温泉・道後温泉エリア完全特化！道後温泉本館（保存修理完了）、飛鳥乃湯泉、椿の湯、坊っちゃん列車、宇和島風＆松山風鯛めし食べ歩きと名門旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/ehime-matsuyama-dogo-onsen-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【愛媛・道後温泉】本館・飛鳥乃湯泉＆坊っちゃん文学・鯛めし極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/ehime-matsuyama-dogo-onsen-stay/" }
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
            DOGO ONSEN MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「愛媛・道後温泉」本館・飛鳥乃湯泉＆坊っちゃん文学・鯛めし極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            3000年の歴史を刻む日本最古の温泉「道後」。夏目漱石の小説『坊っちゃん』の舞台となった道後温泉本館の木造建築。からくり時計の音色を聞き、瀬戸内の鯛めしと滑らかな美肌湯に癒やされる旅。
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
              📊 愛媛・道後温泉：本館・飛鳥乃湯泉＆坊っちゃん文学・鯛めし極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「愛媛・道後温泉：本館・飛鳥乃湯泉＆坊っちゃん文学・鯛めし極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 道後温泉　道後グランドホテル</td>
                <td className="p-3 text-stone-600">愛媛県松山市道後湯之町16-21</td>
                <td className="p-3 text-stone-600">松山空港駅周辺</td>
                <td className="p-3 text-stone-600">1台1,000円／1日当たり・税込（トラック・キャンピングカー不可）全50台（バレーサービス式）</td>
                <td className="p-3 font-bold text-amber-600">★4.21（3015件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,450〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6001%2F6001.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 道後温泉　旅亭　うめ乃や</td>
                <td className="p-3 text-stone-600">愛媛県松山市上市2-8-9</td>
                <td className="p-3 text-stone-600">道後温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　８台　無料　予約必要</td>
                <td className="p-3 font-bold text-amber-600">★4.65（137件）</td>
                <td className="p-3 font-bold text-rose-600">¥25,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145017%2F145017.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 道後温泉　ふなや</td>
                <td className="p-3 text-stone-600">愛媛県松山市道後湯之町1-33</td>
                <td className="p-3 text-stone-600">松山市駅周辺</td>
                <td className="p-3 text-stone-600">有料・予約不要（乗用車＠880円/1日）★二輪車（＠440円/1日）屋根付きガレージも完備。</td>
                <td className="p-3 font-bold text-amber-600">★4.73（2054件）</td>
                <td className="p-3 font-bold text-rose-600">¥25,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11332%2F11332.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 道後温泉　道後舘</td>
                <td className="p-3 text-stone-600">愛媛県松山市道後多幸町7-26</td>
                <td className="p-3 text-stone-600">松山（愛媛）駅周辺</td>
                <td className="p-3 text-stone-600">有り　６０台　有料（１台880円）となります。</td>
                <td className="p-3 font-bold text-amber-600">★4.66（2091件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,050〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10788%2F10788.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 道後プリンスホテル～旬華趣湯　あったらいいな、が湧く湯宿～</td>
                <td className="p-3 text-stone-600">愛媛県松山市道後姫塚100</td>
                <td className="p-3 text-stone-600">松山（愛媛）駅周辺</td>
                <td className="p-3 text-stone-600">【ハイルーフも安心】平面大駐車場♪(1泊につき770円/台) 当館正面玄関前にお車をお付け下さい</td>
                <td className="p-3 font-bold text-amber-600">★4.47（2240件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8384%2F8384.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 奥道後　壱湯の守（いちゆのもり）</td>
                <td className="p-3 text-stone-600">愛媛県松山市末町267</td>
                <td className="p-3 text-stone-600">松山（愛媛）駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場300台完備(先着順)</td>
                <td className="p-3 font-bold text-amber-600">★4.4（2723件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27716%2F27716.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">道後温泉　道後グランドホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（どうごおんせん　どうごぐらんどほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,450〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/6001/6001_room.jpg" alt="道後温泉　道後グランドホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>◆道後本館まで【坂道なし】徒歩４分◆≪直前予約がお得なプラン販売中♪≫〜全館無料Wi-Fi接続可〜</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市道後湯之町16-21 ／ 最寄り駅：松山空港 ／ 交通案内：伊予鉄道後温泉駅より徒歩5分・ 松山インターより車にて２５分・ 松山空港より車にて30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1台1,000円／1日当たり・税込（トラック・キャンピングカー不可）全50台（バレーサービス式）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.37 ／ 立地 ★4.11 ／ 部屋 ★4.09 ／ 設備 ★3.97 ／ 風呂 ★4.18 ／ 食事 ★4.35</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「チェックインの時間よりも2時間近く前に車で到着してしまったのですが、停めさせて頂くことが出来、お陰様で道後温泉周辺をゆっくり観光出来ました。夕食のお刺身の種類も多く、とにかくボリュームが凄かったです。…　2026-10-09 20:21:03投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=6001&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">道後温泉　旅亭　うめ乃や</h3>
                  <span className="text-xs text-stone-400 ml-2">（どうごおんせん　りょてい　うめのや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥25,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/145017/145017_room.jpg" alt="道後温泉　旅亭　うめ乃や 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>湯築の杜を望む静かな落ち着き。数寄屋造りの歴史感じる温泉宿で過ごす大人の贅沢。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市上市2-8-9 ／ 最寄り駅：道後温泉 ／ 交通案内：伊予鉄松山市駅・JR松山駅から伊予鉄で道後温泉駅へ。道後温泉駅・道後温泉本館から徒歩5分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　８台　無料　予約必要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.82 ／ 立地 ★4.76 ／ 部屋 ★4.47 ／ 設備 ★4.35 ／ 風呂 ★4.65 ／ 食事 ★4.88</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「趣ある建物と丁寧な対応、美味しい料理に満足趣きのある建物で、部屋の雰囲気も良かったです。従業員の方々も、どなたも明るく感じの良い対応でした。料理も出汁に拘っておられ、とても美味しく頂きまし…　2026-05-26 16:06:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">道後温泉　ふなや</h3>
                  <span className="text-xs text-stone-400 ml-2">（どうごおんせん　ふなや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥25,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/11332/11332_war.jpg" alt="道後温泉　ふなや 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★文人ゆかりの宿・道後一の老舗★　日本庭園には、自然の川が流れ四季折々の風情がお楽しみいただけます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市道後湯之町1-33 ／ 最寄り駅：松山市 ／ 交通案内：道後温泉駅から徒歩3分 松山ＩＣより車で25分 ＪＲ松山駅前から市内電車で30分 空港からリムジンバスで35分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有料・予約不要（乗用車＠880円/1日）★二輪車（＠440円/1日）屋根付きガレージも完備。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.76 ／ 立地 ★4.69 ／ 部屋 ★4.7 ／ 設備 ★4.62 ／ 風呂 ★4.66 ／ 食事 ★4.79</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉も晩ご飯も部屋もすべて大満足温泉も晩ご飯も部屋にも大満足です。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/1…　2026-10-04 17:56:00投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">道後温泉　道後舘</h3>
                  <span className="text-xs text-stone-400 ml-2">（どうごおんせん　どうごかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥17,050〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/10788/10788_war.jpg" alt="道後温泉　道後舘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>巨匠・黒川紀章が全館を設計。懐しく新しい近代和風空間と本物のおもてなしで、心からの満足をお約束します</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市道後多幸町7-26 ／ 最寄り駅：松山（愛媛） ／ 交通案内：◆道後温泉本館まで徒歩５分◆飛鳥乃湯泉は坂道降りてすぐ徒歩３分◆道後温泉駅徒歩７分◆</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　６０台　有料（１台880円）となります。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.75 ／ 立地 ★4.56 ／ 部屋 ★4.61 ／ 設備 ★4.58 ／ 風呂 ★4.62 ／ 食事 ★4.72</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お風呂が最高、また予約したい!お風呂が最高でした!また予約したいと思います!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/vo…　2026-10-08 12:30:27投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">道後プリンスホテル～旬華趣湯　あったらいいな、が湧く湯宿～</h3>
                  <span className="text-xs text-stone-400 ml-2">（どうごおんせん　どうごぷりんすほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8384/8384_room.jpg" alt="道後プリンスホテル～旬華趣湯　あったらいいな、が湧く湯宿～ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>シルバーアワード受賞♪あったらいいな、が沸く湯宿＊wi-fi完備・道後温泉駅～レトロバスで無料送迎</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市道後姫塚100 ／ 最寄り駅：松山（愛媛） ／ 交通案内：【車】松山道松山ICより30分。【リムジンバス】松山空港より40分。松山観光港より45分。道後温泉駅到着後、電話で送迎有</p>
                  <p><strong>【駐車場・マイカー利用】</strong>【ハイルーフも安心】平面大駐車場♪(1泊につき770円/台) 当館正面玄関前にお車をお付け下さい</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「リピーターです2回目の利用。お風呂は大浴場が広くてお湯も温度が私にはちょうど良く(40度ぐらい)気持ちいいです。シャンプーの種類が豊富で悩ましい。朝食は美味しくつい食べ過ぎてしまいます。だし巻…　2026-09-02 17:48:05投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">奥道後　壱湯の守（いちゆのもり）</h3>
                  <span className="text-xs text-stone-400 ml-2">（おくどうご）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/27716/27716_t.jpg" alt="奥道後　壱湯の守（いちゆのもり） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【西日本最大級の露天風呂で湯巡り♪】道後から車で１０分！大自然に佇む美人湯の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市末町267 ／ 最寄り駅：松山（愛媛） ／ 交通案内：ＪＲ松山駅よりお車もしくは伊予鉄バス(奥道後行)で３０分／松山ＩＣから国道３１７号線を通って今治方面に４０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場300台完備(先着順)</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.5 ／ 立地 ★4.36 ／ 部屋 ★4.25 ／ 設備 ★4.12 ／ 風呂 ★4.53 ／ 食事 ★4.47</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お湯とバイキングは最高、階段移動は大変お部屋タイプおまかせのプランでしたが、腰痛に配慮して洋室にしてもらえ、当日は色浴衣の無料デーだったのもとてもうれしいポイントでした。到着時に駐車場に誰もお…　2026-10-04 07:42:07投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！愛媛県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、愛媛県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/D%C5%8Dgo_Onsen.jpg/1280px-D%C5%8Dgo_Onsen.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="道後温泉本館" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">道後温泉本館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本最古の温泉の一つとされる道後温泉のシンボル。木造三層楼の重厚な和風建築は国指定重要文化財であり、『千と千尋の神隠し』のモデルとも言われています。 道後温泉（どうごおんせん）は、四国・愛媛県松山市（旧国伊予国）に湧出する温泉。有馬温泉や白浜温泉と並ぶ日本三古湯の一つである。その存在は古代から知られ、万葉集巻一にも見える。なおかつてはこの周辺が温泉郡（おんせんぐん）（湯郡）と呼ばれていたが、これはこの温泉にちなむ地名である。 夏目漱石の小説『坊つちやん』（1905年）にも描かれ、愛媛県の代表的な観光地とな…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">松山城</h3>
                <p className="text-xs text-stone-600 leading-relaxed">松山市の中心・勝山山頂に建つ現存12天守の一つ。ロープウェイやリフトで登ることができ、天守からは瀬戸内海と松山平野の360度パノラマが見渡せます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">しまなみ海道（来島海峡大橋）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">愛媛県今治市と広島県尾道市を結ぶ海上架橋ルート。「サイクリストの聖地」として世界中から絶賛され、世界初の3連吊橋から瀬戸内海の多島美を一望できます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">佐田岬（さだみさき）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本一細長い佐田岬半島。風力発電の風車が並ぶドライブコースを抜け、岬の先端の白い灯台からは豊予海峡を挟んで九州・大分県を望むダイナミックな景色です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 愛媛県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 愛媛県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="ehime-matsuyama-dogo-onsen-stay" />
</div>
  );
}
