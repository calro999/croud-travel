import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/wakayama-nachikatsuura-kumano-kodo-stay/" },
  title: "和歌山・那智勝浦＆熊野古道：熊野那智大社・那智の滝＆生マグロ・洞窟風呂宿 厳選ガイド",
  description: "世界遺産・熊野古道と日本一の生マグロ・和歌山那智勝浦エリア完全特化！落差日本一「那智の滝」、熊野那智大社・青岸渡寺、大門坂の石畳、勝浦港水揚げ生マグロ食べ尽くし、海に浮かぶ絶景洞窟風呂温泉宿を徹底解説。",
  keywords: ["和歌山", "那智勝浦", "熊野古道", "熊野那智大社", "那智の滝", "生マグロ", "洞窟風呂宿"],
  openGraph: {
    title: "和歌山・那智勝浦＆熊野古道：熊野那智大社・那智の滝＆生マグロ・洞窟風呂宿 厳選ガイド",
    description: "世界遺産・熊野古道と日本一の生マグロ・和歌山那智勝浦エリア完全特化！落差日本一「那智の滝」、熊野那智大社・青岸渡寺、大門坂の石畳、勝浦港水揚げ生マグロ食べ尽くし、海に浮かぶ絶景洞窟風呂温泉宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "和歌山・那智勝浦＆熊野古道：熊野那智大社・那智の滝＆生マグロ・洞窟風呂宿 厳選ガイド",
    description: "世界遺産・熊野古道と日本一の生マグロ・和歌山那智勝浦エリア完全特化！落差日本一「那智の滝」、熊野那智大社・青岸渡寺、大門坂の石畳、勝浦港水揚げ生マグロ食べ尽くし、海に浮かぶ絶景洞窟風呂温泉宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["wakayama-nachikatsuura-kumano-kodo-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for wakayama-nachikatsuura-kumano-kodo-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "katsuura_cave_onsen_luxury",
    "title": "1. 南紀勝浦温泉〜忘帰洞・紀の松島（太平洋の荒波が迫る巨大海食洞窟風呂）",
    "timing": "通年（専用船で渡る海に浮かぶ温泉リゾートと水平線パノラマ）",
    "desc": "勝浦港から専用客船で渡る「ホテル浦島」の名物大洞窟温泉「忘帰洞（帰るのを忘れるほどの絶景湯）」や「碧き島の宿 熊野別邸 中の島」の海中露天風呂。波しぶきが届くほどの臨場感と、紺碧の太平洋・朝日の絶景。",
    "spots": "忘帰洞・玄武洞（巨大洞窟露天）、紀の松島めぐり遊覧船、勝浦足湯巡り",
    "access": "JR紀勢本線（きのくに線）「紀伊勝浦駅」下車。勝浦港観光桟橋より専用船数分。",
    "tip": "「忘帰洞」は早朝の日の出時間帯に入浴すると、洞窟の向こう側の水平線から真っ赤な太陽が昇る息を呑む光景に出会えます。"
  },
  {
    "key": "kumano_kodo_daimonzaka_stay",
    "title": "2. 熊野那智大社〜那智の滝・大門坂（世界遺産・熊野古道のハイライト）",
    "timing": "通年（苔むす石畳と平安衣装の記念撮影体験）",
    "desc": "樹齢数百年の夫婦杉がそびえる「大門坂」の石畳古道。熊野三山の一つ「熊野那智大社」と西国第一番札所「青岸渡寺（三重塔）」。三重塔越しに望む落差133m・銚子口の幅10mの神聖な御神体「那智の滝（飛瀧神社）」。",
    "spots": "大門坂（大門坂茶屋・平安衣装レンタル）、熊野那智大社、那智山青岸渡寺、那智の滝（飛瀧神社）",
    "access": "紀伊勝浦駅より熊野御坊南海バス「那智山行き」で約25分。",
    "tip": "大門坂茶屋で「平安衣装」をレンタルして大門坂や那智山を歩くと、まるで千年前の巡礼者にタイムスリップしたような写真が撮れます。"
  },
  {
    "key": "katsuura_fresh_tuna_gourmet",
    "title": "3. 勝浦名物「生まぐろ」＆幻の高級魚クエ（一度も冷凍されない極上のモッチリ食感）",
    "timing": "通年（一度も凍結しない生マグロの水揚げ日本一の港）",
    "desc": "はえ縄漁船が水揚げする「勝浦の生まぐろ」。一度も冷凍されていないため、ドリップが出ず、モチッとした吸い付くような食感と濃厚な旨味。大トロ、中トロ、赤身の食べ比べや、冬の南紀名物「天然クエ鍋」、霜降り「熊野牛」。",
    "spots": "勝浦地方卸売市場（マグロ競り見学・にぎわい市場）、勝浦まぐろ専門店",
    "access": "勝浦港・温泉街周辺。",
    "tip": "勝浦漁港の「にぎわい市場」では、朝獲れ生マグロの解体ショーや、出来立てのマグロ握り寿司・海鮮丼をその場で味わえます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【和歌山・那智勝浦＆熊野古道】熊野那智大社・那智の滝＆生マグロ・洞窟風呂宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "世界遺産・熊野古道と日本一の生マグロ・和歌山那智勝浦エリア完全特化！落差日本一「那智の滝」、熊野那智大社・青岸渡寺、大門坂の石畳、勝浦港水揚げ生マグロ食べ尽くし、海に浮かぶ絶景洞窟風呂温泉宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/wakayama-nachikatsuura-kumano-kodo-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【和歌山・那智勝浦＆熊野古道】熊野那智大社・那智の滝＆生マグロ・洞窟風呂宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/wakayama-nachikatsuura-kumano-kodo-stay/" }
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
            KACHIKATSUURA & KUMANO KODO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「和歌山・那智勝浦＆熊野古道」熊野那智大社・那智の滝＆生マグロ・洞窟風呂宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            神々が宿る世界遺産「熊野古道」の聖地「熊野那智大社」と、落差133m日本一の名瀑「那智の滝」。延々と続く大門坂の苔むす杉木立の石畳。勝浦漁港直送の新鮮な「生マグロ」と、太平洋の荒波が打ち寄せる大洞窟温泉へ。
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
              📊 和歌山・那智勝浦＆熊野古道：熊野那智大社・那智の滝＆生マグロ・洞窟風呂宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「和歌山・那智勝浦＆熊野古道：熊野那智大社・那智の滝＆生マグロ・洞窟風呂宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 南紀勝浦温泉　くつろぎの宿　料理旅館　万清楼</td>
                <td className="p-3 text-stone-600">和歌山県東牟婁郡那智勝浦町勝浦448</td>
                <td className="p-3 text-stone-600">紀伊勝浦駅周辺</td>
                <td className="p-3 text-stone-600">20台（無料）／専用駐車場は当館横と裏側にあります。</td>
                <td className="p-3 font-bold text-amber-600">★4.39（821件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F68247%2F68247.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 大江戸温泉物語　南紀串本</td>
                <td className="p-3 text-stone-600">和歌山県東牟婁郡串本町串本2300-1</td>
                <td className="p-3 text-stone-600">串本駅周辺</td>
                <td className="p-3 text-stone-600">有り　144台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.82（1593件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F166123%2F166123.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 海辺を散策できる温泉宿　サンセットすさみ</td>
                <td className="p-3 text-stone-600">和歌山県西牟婁郡すさみ町周参見5351-10</td>
                <td className="p-3 text-stone-600">周参見駅周辺</td>
                <td className="p-3 text-stone-600">有り　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.47（488件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F164778%2F164778.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 南紀勝浦温泉　ホテルなぎさや</td>
                <td className="p-3 text-stone-600">和歌山県東牟婁郡那智勝浦町大字湯川955番地の1</td>
                <td className="p-3 text-stone-600">紀伊勝浦駅周辺</td>
                <td className="p-3 text-stone-600">50台（無料）</td>
                <td className="p-3 font-bold text-amber-600">★3.94（697件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6002%2F6002.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 民宿　美滝山荘</td>
                <td className="p-3 text-stone-600">和歌山県東牟婁郡那智勝浦町那智山545-1</td>
                <td className="p-3 text-stone-600">紀伊勝浦駅周辺</td>
                <td className="p-3 text-stone-600">15台（無料）</td>
                <td className="p-3 font-bold text-amber-600">★4.75（214件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,110〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13918%2F13918.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 南紀勝浦　湯川温泉　恵比須屋＜和歌山県＞</td>
                <td className="p-3 text-stone-600">和歌山県東牟婁郡那智勝浦町湯川1065</td>
                <td className="p-3 text-stone-600">湯川駅周辺</td>
                <td className="p-3 text-stone-600">有り　１０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★3.56（81件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7719%2F7719.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南紀勝浦温泉　くつろぎの宿　料理旅館　万清楼</h3>
                  <span className="text-xs text-stone-400 ml-2">（まんせいろう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/68247/68247_w.jpg" alt="南紀勝浦温泉　くつろぎの宿　料理旅館　万清楼 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【ホテル浦島の温泉も利用可】紀州勝浦産の生まぐろや南紀の食材を使った会席料理をお楽しみください。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県東牟婁郡那智勝浦町勝浦448 ／ 最寄り駅：紀伊勝浦 ／ 交通案内：JR「紀伊勝浦駅」より徒歩約7分／大阪から紀勢自動車道「すさみ南IC」経由で約3時間半</p>
                  <p><strong>【駐車場・マイカー利用】</strong>20台（無料）／専用駐車場は当館横と裏側にあります。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「15年振りの利用も変わらぬ美味しさと親切な接客約15年振りに利用させてもらいました。朝夕食は変わらず大変美味しく本当に大満足でした!給仕の方も皆さん親切で気持ちよく過ごすことができました。ありがと…　2026-08-21 19:44:03投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">大江戸温泉物語　南紀串本</h3>
                  <span className="text-xs text-stone-400 ml-2">（おおえどおんせんものがたり　なんきくしもと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/166123/166123_kan1.jpg" alt="大江戸温泉物語　南紀串本 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>勝浦港水揚げの生まぐろを満喫！オーシャンビューの絶景温泉宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県東牟婁郡串本町串本2300-1 ／ 最寄り駅：串本 ／ 交通案内：紀勢本線　串本駅よりお車にて約５分　シャトルバスあり(事前予約制)</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　144台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「眺めも温泉も食事もすべてが最高!部屋からの眺めがとても良い。部屋がきれい。焼きたてパンが美味しかった。温泉が気持ちいい。など、いろいろ良かった。クチコミの詳細はこちらから　http…　2026-08-19 21:52:00投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">海辺を散策できる温泉宿　サンセットすさみ</h3>
                  <span className="text-xs text-stone-400 ml-2">（うみべをさんさくできるおんせんやど　さんせっとすさみ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/164778/164778_kan1.jpg" alt="海辺を散策できる温泉宿　サンセットすさみ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>絶景を巡るツーリングやサイクリングの拠点に！夕日と星空を眺め、とろとろ天然温泉と絶品の旬の食材を満喫</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県西牟婁郡すさみ町周参見5351-10 ／ 最寄り駅：周参見 ／ 交通案内：JR周参見駅より徒歩約7分／大阪から車で阪和自動車道日置川IC経由で約2時間半／アドベンチャーワールドより車で約25分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉と豪華な朝食に大満足、コスパ最高ビジネスで利用しました。チェックイン後、部屋へ入るとエアコンを入れてくれていて快適でした。建物は古さを感じますが、清掃が行き届いており洗面台や壁紙などもリフォー…　2026-08-22 16:37:11投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=164778&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南紀勝浦温泉　ホテルなぎさや</h3>
                  <span className="text-xs text-stone-400 ml-2">（なんきかつうらおんせん　ほてるなぎさや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/6002/6002_bath.jpg" alt="南紀勝浦温泉　ホテルなぎさや 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>トンネルを抜けるとそこは…映画のような入り江の中にある秘密のお宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県東牟婁郡那智勝浦町大字湯川955番地の1 ／ 最寄り駅：紀伊勝浦 ／ 交通案内：JR「紀伊勝浦駅」より車で約5分（事前予約で送迎サービス有）／大阪から紀勢自動車道「すさみ南IC」経由で約3時間半</p>
                  <p><strong>【駐車場・マイカー利用】</strong>50台（無料）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.9 ／ 立地 ★4.14 ／ 部屋 ★3.71 ／ 設備 ★3.59 ／ 風呂 ★4.05 ／ 食事 ★4.03</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「露天風呂への移動が怖く食事も不便潮見の湯という露天風呂は、大浴場から また衣服を着て移動します。その経路が夜間は1人では怖い気がします。また、露天風呂からの海の眺めは期待したほどではなかっ…　2026-10-09 16:33:18投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">民宿　美滝山荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（みたきさんそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,110〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13918/13918_heya.jpg" alt="民宿　美滝山荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>熊野古道。那智大社詣りにピッタリの立地　お鍋の夕食や地酒も大人気　那智の滝を眺められるお部屋も</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県東牟婁郡那智勝浦町那智山545-1 ／ 最寄り駅：紀伊勝浦 ／ 交通案内：国道42号那智駅前交差点より那智山方面へ約8㎞／紀伊勝浦駅よりバスで約25分「那智山神社お寺前駐車場」で下車し徒歩約2分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>15台（無料）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「民宿　美滝山荘は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南紀勝浦　湯川温泉　恵比須屋＜和歌山県＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（なんきかつうら　ゆかわおんせん　えびすや＜わかやま＞）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7719/7719_heya.jpg" alt="南紀勝浦　湯川温泉　恵比須屋＜和歌山県＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>無色透明なめらかなイオウ泉　家族でもてなし新鮮魚料理</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県東牟婁郡那智勝浦町湯川1065 ／ 最寄り駅：湯川 ／ 交通案内：車で国道４２号線より５０ｍ中に入った所</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉良いロケーションは元々窓側が駐車場側だったので。とても古くからの旅館という印象なので設備や環境、清潔さなどは評価しません(^^)温泉が人肌程度の温度夏でも入れる温泉なんですと、…　2026-07-28 11:49:23投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！和歌山県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、和歌山県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">高野山（奥の院・壇上伽藍）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">弘法大師空海がひらいた真言密教の聖地であり世界遺産。樹齢数百年の杉木立の中に弘法大師の御廟が佇む「奥の院」は神聖な気が満ちています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">熊野那智大社・那智の滝</h3>
                <p className="text-xs text-stone-600 leading-relaxed">熊野三山の一つであり、日本一の落差（133m）を誇る神体「那智の滝」。朱塗りの三重塔越しに直下する滝の景観は熊野古道を象徴する一枚です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">南紀白浜・千畳敷・三段壁</h3>
                <p className="text-xs text-stone-600 leading-relaxed">真っ白なサラサラの砂が広がる白良浜リゾートと、太平洋の荒波が削り出した巨大な岩盤「千畳敷」「三段壁」。温泉と海の絶景を満喫できます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">和歌山城</h3>
                <p className="text-xs text-stone-600 leading-relaxed">紀州徳川家55万石の居城。緑豊かな虎伏山に建ち、白亜の天守閣からは和歌山市街と紀の川のゆったりとした流れを一望できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 和歌山県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 和歌山県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="wakayama-nachikatsuura-kumano-kodo-stay" />
</div>
  );
}
