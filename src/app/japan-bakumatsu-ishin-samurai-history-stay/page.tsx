import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/japan-bakumatsu-ishin-samurai-history-stay/" },
  title: "幕末維新の歴史浪漫宿：萩・会津若松・高知・薩摩・龍馬ゆかりの宿 厳選ガイド",
  description: "幕末の志士たちが駆け抜けた激動の歴史舞台完全特化！明治維新胎動の地「山口・萩城下町＆松下村塾」、会津藩の誇り「福島・会津若松城＆東山温泉」、坂本龍馬の故郷「高知・桂浜」、西郷隆盛・大久保利通の「鹿児島・城山」を徹底解説。",
  keywords: ["幕末維新の歴史浪漫宿", "会津若松", "高知", "薩摩", "龍馬ゆかりの宿", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "幕末維新の歴史浪漫宿：萩・会津若松・高知・薩摩・龍馬ゆかりの宿 厳選ガイド",
    description: "幕末の志士たちが駆け抜けた激動の歴史舞台完全特化！明治維新胎動の地「山口・萩城下町＆松下村塾」、会津藩の誇り「福島・会津若松城＆東山温泉」、坂本龍馬の故郷「高知・桂浜」、西郷隆盛・大久保利通の「鹿児島・城山」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "幕末維新の歴史浪漫宿：萩・会津若松・高知・薩摩・龍馬ゆかりの宿 厳選ガイド",
    description: "幕末の志士たちが駆け抜けた激動の歴史舞台完全特化！明治維新胎動の地「山口・萩城下町＆松下村塾」、会津藩の誇り「福島・会津若松城＆東山温泉」、坂本龍馬の故郷「高知・桂浜」、西郷隆盛・大久保利通の「鹿児島・城山」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-bakumatsu-ishin-samurai-history-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-bakumatsu-ishin-samurai-history-stay", e);
  }
  return {};
}

export default function HistoryHeritageHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hagi_meiji_revolution_stay",
    "title": "1. 山口・萩城下町〜松下村塾（高杉晋作・伊藤博文らを輩出した維新の源流）",
    "timing": "通年（春の萩往還梅まつり・秋の萩城跡紅葉）",
    "desc": "白壁となまこ壁が美しい世界遺産「萩城下町」。吉田松陰が教えを説いたわずか8畳の「松下村塾」。高杉晋作や木戸孝允の生家。萩焼の器で楽しむ日本海の活魚や見蘭牛。肌になめらかな萩温泉郷の露天風呂。",
    "spots": "世界遺産 松下村塾（松陰神社・至誠館）、萩城下町（菊屋家住宅・木戸孝允旧宅）、萩城跡指月公園、笠山",
    "access": "JR山陰本線「東萩駅」下車。新山口駅（新幹線）より特急バス「はぎ号」で約70分。",
    "tip": "萩城下町では、夏みかんの黄色い実が白壁の土塀から顔をのぞかせる独特の景観があり、夏みかんソフトや夏みかんピールがお土産に最適です。"
  },
  {
    "key": "aizu_samurai_higashiyama_stay",
    "title": "2. 福島・会津若松〜鶴ヶ城・東山温泉（義に生きた会津藩の誇りと白虎隊の記憶）",
    "timing": "通年（春の鶴ヶ城千本桜・秋の紅葉・冬の雪景色）",
    "desc": "幕末の戊辰戦争で一ヶ月に及ぶ籠城戦に耐えた名城「鶴ヶ城（若松城）」。日本唯一の赤瓦天守。白虎隊自刃の地「飯盛山」と不思議な二重螺旋建築「さざえ堂」。開湯1300年、土方歳三も傷を癒やした名湯「会津東山温泉」。",
    "spots": "鶴ヶ城（天守閣・茶室麟閣）、飯盛山（白虎隊士の墓・円通三匝堂さざえ堂）、会津武家屋敷、七日町通り",
    "access": "JR磐越西線「会津若松駅」よりまちなか周遊バス「あかべぇ・ハイカラさん」運行。",
    "tip": "東山温泉の渓流沿い旅館では、川のせせらぎを聞きながら入る露天風呂と、会津の郷土料理「こづゆ」や名物「馬刺し」が絶品です。"
  },
  {
    "key": "kochi_ryoma_katsurahama_stay",
    "title": "3. 高知・桂浜〜高知城（太平洋を望む坂本龍馬像と南海の名城）",
    "timing": "通年（初夏〜秋のカツオシーズン・よさこい祭り）",
    "desc": "雄大な太平洋を望む月の名所「桂浜」。海を見つめる巨大な「坂本龍馬像」。山内一豊が築き天守と本丸御殿が両方現存する唯一の城「高知城」。巨大な大皿に旬の海の幸・山の幸を豪快に盛る伝統宴会料理「皿鉢（さわち）料理」。",
    "spots": "桂浜（坂本龍馬像・坂本龍馬記念館・桂浜水族館）、高知城（追手門・天守閣）、ひろめ市場、日曜市",
    "access": "JR土讃線「高知駅」下車。高知龍馬空港より連絡バス約30分。",
    "tip": "「ひろめ市場」では、名物「明神丸」の藁焼きカツオのタタキを塩とニンニクスライスで注文し、地元客と相席で土佐鶴を酌み交わすのが最高の醍醐味です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【幕末維新の歴史浪漫宿】萩・会津若松・高知・薩摩・龍馬ゆかりの宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "幕末の志士たちが駆け抜けた激動の歴史舞台完全特化！明治維新胎動の地「山口・萩城下町＆松下村塾」、会津藩の誇り「福島・会津若松城＆東山温泉」、坂本龍馬の故郷「高知・桂浜」、西郷隆盛・大久保利通の「鹿児島・城山」を徹底解説。",
    "url": "https://croud-travel.pages.dev/japan-bakumatsu-ishin-samurai-history-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【幕末維新の歴史浪漫宿】萩・会津若松・高知・薩摩・龍馬ゆかりの宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/japan-bakumatsu-ishin-samurai-history-stay/" }
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
            BAKUMATSU & SAMURAI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「幕末維新の歴史浪漫宿」萩・会津若松・高知・薩摩・龍馬ゆかりの宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日本の夜明けを夢見た若き志士たちの足跡をたどる「幕末維新の歴史旅」。吉田松陰の松下村塾、白虎隊の悲話が伝わる飯盛山、龍馬が愛した名湯や会津の武家屋敷。激動の時代に思いを馳せながら、地元の名酒と郷土料理を味わう宿へ。
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

              {/* 歴史見どころ・アクセス・旅のコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要史跡＆名所</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆移動目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 歴史探訪を深めるコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの歴史・名門宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    歴史探訪プラン
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
              📊 幕末維新の歴史浪漫宿：萩・会津若松・高知・薩摩・龍馬ゆかりの宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「幕末維新の歴史浪漫宿：萩・会津若松・高知・薩摩・龍馬ゆかりの宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 萩温泉郷　夕景の宿　海のゆりかご　萩小町</td>
                <td className="p-3 text-stone-600">山口県萩市椿東越ヶ浜6509</td>
                <td className="p-3 text-stone-600">東萩駅周辺</td>
                <td className="p-3 text-stone-600">60台（無料）／予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.36（5230件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54096%2F54096.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 会津東山温泉　今昔亭（こんじゃくてい）</td>
                <td className="p-3 text-stone-600">福島県会津若松市東山町湯本247</td>
                <td className="p-3 text-stone-600">会津若松駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.32（400件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39377%2F39377.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 東山温泉　元湯有馬屋</td>
                <td className="p-3 text-stone-600">福島県会津若松市東山町湯本居平118</td>
                <td className="p-3 text-stone-600">会津若松駅周辺</td>
                <td className="p-3 text-stone-600">有り　20台　先着順　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.63（80件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7330%2F7330.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 会津東山温泉　くつろぎ宿　新滝</td>
                <td className="p-3 text-stone-600">福島県会津若松市東山町湯本川向222</td>
                <td className="p-3 text-stone-600">会津若松駅周辺</td>
                <td className="p-3 text-stone-600">駐車場は80台まで無料で可能です★予約は不要です★大型車でのご来館は事前にご相談ください★</td>
                <td className="p-3 font-bold text-amber-600">★4.65（2487件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7526%2F7526.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 会津東山温泉　いろりの宿　芦名</td>
                <td className="p-3 text-stone-600">福島県会津若松市東山町湯本下原232-1</td>
                <td className="p-3 text-stone-600">会津若松駅周辺</td>
                <td className="p-3 text-stone-600">有り　10台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.3（203件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,470〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5887%2F5887.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 土佐龍温泉　三陽荘</td>
                <td className="p-3 text-stone-600">高知県土佐市宇佐町竜504-1</td>
                <td className="p-3 text-stone-600">朝倉（高知）駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.32（405件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,730〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84592%2F84592.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">萩温泉郷　夕景の宿　海のゆりかご　萩小町</h3>
                  <span className="text-xs text-stone-400 ml-2">（はぎおんせんきょう　ゆうけいのやど うみのゆりかご はぎこまち）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/54096/54096_room.jpg" alt="萩温泉郷　夕景の宿　海のゆりかご　萩小町 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【楽天トラベルアワード　10年連続受賞】～日本海の絶景が楽しめる・癒し＆遊びが盛り沢山の宿～</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山口県萩市椿東越ヶ浜6509 ／ 最寄り駅：東萩 ／ 交通案内：「JR東萩駅」より車で10分／世界遺産「松下村塾」より車で10分／無料送迎サービスも有り！詳細はお気軽に問合せ下さい。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>60台（無料）／予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「料理が美味しく、静かにのんびり過ごせた料理がすごく美味しいです。夕日が見える温泉、当日は小雨で夕日が見られませんでしたが、とても気持ちのよいお風呂でした。宿はとても広いのですが、他の客とあ…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">会津東山温泉　今昔亭（こんじゃくてい）</h3>
                  <span className="text-xs text-stone-400 ml-2">（あいづひがしやまおんせん　こんじゃくてい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/39377/39377_ba.jpg" alt="会津東山温泉　今昔亭（こんじゃくてい） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>美しき隠れ家「今昔亭」へようこそ。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福島県会津若松市東山町湯本247 ／ 最寄り駅：会津若松 ／ 交通案内：ＪＲ磐越西線　会津若松駅からタクシーで１５分／磐越自動車道　会津若松ＩＣから２０分☆送迎は要連絡☆</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.52 ／ 立地 ★4.12 ／ 部屋 ★4.13 ／ 設備 ★4.06 ／ 風呂 ★4.34 ／ 食事 ★4.41</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「丁寧な接客と美味しい食事、清潔感のある空間接客は丁寧で食事も美味しかったです。設備は多少古いですが、清潔さは感じました。クチコミの詳細はこちらから　https://review.travel.…　2026-10-07 23:57:31投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">東山温泉　元湯有馬屋</h3>
                  <span className="text-xs text-stone-400 ml-2">（ひがしやまおんせん　もとゆありまや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7330/7330_war.jpg" alt="東山温泉　元湯有馬屋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>囲炉裏でのお食事と源泉掛け流しの宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福島県会津若松市東山町湯本居平118 ／ 最寄り駅：会津若松 ／ 交通案内：JR磐越西線会津若松駅よりバスで20分／磐越自動車道会津若松ICより車で15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　20台　先着順　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「東山温泉　元湯有馬屋は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">会津東山温泉　くつろぎ宿　新滝</h3>
                  <span className="text-xs text-stone-400 ml-2">（あいづひがしやまおんせん　くつろぎじゅく　しんたき）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7526/7526_fr.jpg" alt="会津東山温泉　くつろぎ宿　新滝 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>明治、大正、昭和と多くの文人、墨客に愛された宿です。趣の異なる多彩な湯処が自慢。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福島県会津若松市東山町湯本川向222 ／ 最寄り駅：会津若松 ／ 交通案内：【お車】会津若松ＩＣ～約２０分【会津若松駅より】タクシー１３分／周遊バス「あかべぇ」１６分「東山温泉駅バス停」～徒歩３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>駐車場は80台まで無料で可能です★予約は不要です★大型車でのご来館は事前にご相談ください★</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.62 ／ 立地 ★4.49 ／ 部屋 ★4.66 ／ 設備 ★4.57 ／ 風呂 ★4.7 ／ 食事 ★4.72</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「料理と温泉は最高だが部屋のタバコ臭が残念お料理は郷土料理が中心でとても満足しました!アルコール類もたくさんあり今回は飲み比べをチョイスし大満足です。お風呂は種類もあり各々のお風呂にタオルも用意され…　2026-10-08 14:22:39投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">会津東山温泉　いろりの宿　芦名</h3>
                  <span className="text-xs text-stone-400 ml-2">（あいずひがしやまおんせん　いろりのやど　あしな）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,470〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5887/5887_nk.jpg" alt="会津東山温泉　いろりの宿　芦名 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>7つの囲炉裏に7つの客室。懐かしい佇まいのいろりの宿。お客様より４つ星以上の人気宿に選ばれました</p>
                  <p><strong>【所在地・アクセス】</strong>〒 福島県会津若松市東山町湯本下原232-1 ／ 最寄り駅：会津若松 ／ 交通案内：最寄駅：会津若松駅からタクシー又は「東山温泉」へ向かう路線バスで約20分　最寄IC:会津若松から約15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　10台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「2回目の宿泊でした。夕食も朝食もシンプルながらも素材の味が生かせれていて、とても美味しくいただきました。お風呂も熱々で気持ち良く、またリピートします!クチコミの詳細はこちらから　https…　2026-08-15 20:18:28投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">土佐龍温泉　三陽荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（さんようそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,730〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/84592/84592_war.jpg" alt="土佐龍温泉　三陽荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>高知県土佐市初　天然温泉。お四国参り、マリンレジャーと幅広くご利用いただけます。３６番札所青龍寺入口</p>
                  <p><strong>【所在地・アクセス】</strong>〒 高知県土佐市宇佐町竜504-1 ／ 最寄り駅：朝倉（高知） ／ 交通案内：自家用車の方は、高知自動車道「土佐IC」より約20分。公共交通の方は、事前予約で最寄りバス停まで送迎あり。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「藁焼きカツオの演出と夕食に大満足夕食がとても素晴らしかった。カツオを藁で炙る様子も間近で見せてもらって面白かったです。クチコミの詳細はこちらから　https://review.travel…　2026-08-29 23:36:23投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！山口県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、山口県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Tsunoshima_Island%2C_Yamaguchi_Aerial_photograph.2008.jpg/1280px-Tsunoshima_Island%2C_Yamaguchi_Aerial_photograph.2008.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="角島大橋（つのしまおおはし）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">角島大橋（つのしまおおはし）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">コバルトブルーの澄み切った海を跨ぐ全長1,780mの離島架橋。まるで海の上を飛んでいるかのような爽快なドライブが楽しめるSNS大人気の絶景スポットです。 角島（つのしま）は、山口県下関市豊北町大字角島の日本海（響灘）上にある島。山口県の北西端。北長門海岸国定公園に含まれる。人口726人（平成27年国勢調査）。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">元乃隅神社（もとのすみじんじゃ）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">断崖に向かって123基の朱塗りの鳥居が龍のように連なる絶景神社。アメリカCNN「日本の最も美しい場所31選」にも選ばれた圧倒的なビジュアルです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">秋吉台・秋芳洞（あきよしだい・あきよしどう）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本最大級のカルスト台地・秋吉台と、その地下100mに広がる巨大大鍾乳洞・秋芳洞。「百枚皿」や「黄金柱」など地球の神秘を感じる大自然のアートです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">錦帯橋（きんたいきょう）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">清流錦川に架かる木造5連のアーチ橋。釘を一本も使わずに組み上げられた独自の木造構造技術は日本三名橋に数えられ、春の桜とのコラボレーションが見事です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 山口県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 山口県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="japan-bakumatsu-ishin-samurai-history-stay" />
</div>
  );
}
