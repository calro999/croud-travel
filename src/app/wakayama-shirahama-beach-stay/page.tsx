import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/wakayama-shirahama-beach-stay/" },
  title: "和歌山・南紀白浜：白良浜・アドベンチャーワールド＆崎の湯・クエ極上宿 厳選ガイド",
  description: "関西屈指のビーチリゾート南紀白浜エリア完全特化！真っ白な砂浜「白良浜」、アドベンチャーワールド、日本最古の野天風呂「崎の湯」、三段壁、幻の高級魚クエ料理とオーシャンビュー温泉旅館を徹底解説。",
  keywords: ["和歌山", "南紀白浜", "白良浜", "アドベンチャーワールド", "崎の湯", "クエ極上宿", "温泉宿"],
  openGraph: {
    title: "和歌山・南紀白浜：白良浜・アドベンチャーワールド＆崎の湯・クエ極上宿 厳選ガイド",
    description: "関西屈指のビーチリゾート南紀白浜エリア完全特化！真っ白な砂浜「白良浜」、アドベンチャーワールド、日本最古の野天風呂「崎の湯」、三段壁、幻の高級魚クエ料理とオーシャンビュー温泉旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "和歌山・南紀白浜：白良浜・アドベンチャーワールド＆崎の湯・クエ極上宿 厳選ガイド",
    description: "関西屈指のビーチリゾート南紀白浜エリア完全特化！真っ白な砂浜「白良浜」、アドベンチャーワールド、日本最古の野天風呂「崎の湯」、三段壁、幻の高級魚クエ料理とオーシャンビュー温泉旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["wakayama-shirahama-beach-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for wakayama-shirahama-beach-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shirahama_beach_front",
    "title": "1. 白良浜〜崎の湯・円月島（真っ白なサラサラ砂浜と波打ち際の古湯）",
    "timing": "通年（夏の海水浴・冬のライトアップ・通年の温泉）",
    "desc": "延長620mの白砂の浜「白良浜」。波の浸食でできた洞窟に夕日が沈む名所「円月島」。太平洋の荒波が湯船に押し寄せる日本最古の天然野天風呂「崎の湯」で、万葉の時代から愛される硫黄泉を体感。",
    "spots": "白良浜海水浴場、円月島（夕日名所）、崎の湯（海辺露天風呂）、千畳敷（畳を敷き詰めたような大岩盤）、三段壁（洞窟エレベーター）",
    "access": "JRきのくに線「白浜駅」より明光バスで約15分「白良浜」下車。南紀白浜空港より車約10分。東京羽田から飛行機約75分。",
    "tip": "「崎の湯」は強風高波の日は入浴中止になる場合があるため、波が穏やかな午前中の訪問がおすすめです。"
  },
  {
    "key": "shirahama_adventure_world_walk",
    "title": "2. アドベンチャーワールド（陸・海・空の動物たちとふれあうテーマパーク）",
    "timing": "通年（全天候型・ファミリー＆カップル大人気）",
    "desc": "ジャイアントパンダの飼育頭数日本一を誇る「アドベンチャーワールド」。サファリワールドを巡るケニア号や、イルカ・クジラのダイナミックなマリンライブ。温泉ホテルとセットで楽しむ充実の休日。",
    "spots": "アドベンチャーワールド（パンダラブ・ブリーディングセンター・サファリワールド・マリンワールド）、とれとれ市場南紀白浜",
    "access": "白浜駅より路線バスで約10分。白浜温泉街より車で約15分。",
    "tip": "「とれとれ市場」では、マグロの解体ショー見学や、市場で買った海鮮をその場で炭火焼きできるBBQコーナーが大人気です。"
  },
  {
    "key": "shirahama_kue_seafood_gourmet",
    "title": "3. 幻の高級魚「紀州本クエ」＆勝浦マグロ（コラーゲンたっぷりの天然クエ鍋）",
    "timing": "秋〜冬期（10月〜3月の本クエ鍋シーズン）",
    "desc": "「クエを食ったら他の魚は食えん」と言われる幻の高級魚クエ。上品な白身とゼラチン質のコラーゲンが溶け出す「クエ鍋」や「クエ薄造り」。勝浦直送の生マグロや熊野牛の鉄板焼きなど、和歌山屈指の美食。",
    "spots": "白浜銀座商店街（クエ料理専門店）、フィッシャーマンズワーフ白浜（海鮮イタリアン・地魚直売）",
    "access": "白浜温泉街中心部。",
    "tip": "白浜のクエ鍋の締めは、クエの骨から出た濃厚な極上出汁で作る雑炊が至福の味わいです。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【和歌山・南紀白浜】白良浜・アドベンチャーワールド＆崎の湯・クエ極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "関西屈指のビーチリゾート南紀白浜エリア完全特化！真っ白な砂浜「白良浜」、アドベンチャーワールド、日本最古の野天風呂「崎の湯」、三段壁、幻の高級魚クエ料理とオーシャンビュー温泉旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/wakayama-shirahama-beach-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【和歌山・南紀白浜】白良浜・アドベンチャーワールド＆崎の湯・クエ極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/wakayama-shirahama-beach-stay/" }
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
            SHIRAHAMA RESORT GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「和歌山・南紀白浜」白良浜・アドベンチャーワールド＆崎の湯・クエ極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            白砂がまぶしいエメラルドグリーンのビーチ「白良浜」。波しぶきがかかる日本最古の海辺露天風呂「崎の湯」。ジャイアントパンダに出逢える「アドベンチャーワールド」と、幻の高級魚クエ鍋に舌鼓を打つリゾートステイ。
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
              📊 和歌山・南紀白浜：白良浜・アドベンチャーワールド＆崎の湯・クエ極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「和歌山・南紀白浜：白良浜・アドベンチャーワールド＆崎の湯・クエ極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 白浜温泉　ホテル三楽荘</td>
                <td className="p-3 text-stone-600">和歌山県西牟婁郡白浜町3078</td>
                <td className="p-3 text-stone-600">白浜駅周辺</td>
                <td className="p-3 text-stone-600">有り　100台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.55（2591件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8226%2F8226.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 白浜温泉　ホテルサンリゾート白浜</td>
                <td className="p-3 text-stone-600">和歌山県西牟婁郡白浜町堅田2500-185</td>
                <td className="p-3 text-stone-600">白浜駅周辺</td>
                <td className="p-3 text-stone-600">有り　35台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.72（479件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44251%2F44251.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 南紀白浜　和みの湯　花鳥風月</td>
                <td className="p-3 text-stone-600">和歌山県西牟婁郡白浜町3729-32</td>
                <td className="p-3 text-stone-600">白浜駅周辺</td>
                <td className="p-3 text-stone-600">24台（無料）</td>
                <td className="p-3 font-bold text-amber-600">★4.59（486件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183409%2F183409.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 白浜温泉　ＫＫＲ白浜　美浜荘（国家公務員共済組合連合会白浜保養所）</td>
                <td className="p-3 text-stone-600">和歌山県西牟婁郡白浜町1564-2</td>
                <td className="p-3 text-stone-600">白浜駅周辺</td>
                <td className="p-3 text-stone-600">有　【20台】　　無料です。</td>
                <td className="p-3 font-bold text-amber-600">★4.46（387件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17665%2F17665.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">白浜温泉　ホテル三楽荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（しらはまおんせん　さんらくそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8226/8226_room.jpg" alt="白浜温泉　ホテル三楽荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>得旅ポイント最大15倍■全室オーシャンビュー&amp;amp;白良浜徒歩1分■露天風呂付き客室はすべて源泉掛け流し</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県西牟婁郡白浜町3078 ／ 最寄り駅：白浜 ／ 交通案内：車：紀勢自動車道南紀白浜ICより県道34号線を白浜温泉方面へ約20分 電車：JR白浜駅よりバスで15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　100台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「海が見える絶景とアドベンチャーワールドへの近さ部屋の窓から海が見えるので夕陽がみえてよかった。海にすぐ行けるのもいい。ご飯は普通でした。特別感がなかったし、種類も少なかった。アドベンチャーワールド…　2026-08-22 10:16:45投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">白浜温泉　ホテルサンリゾート白浜</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるさんりぞーと　しらはま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/44251/44251_wa.jpg" alt="白浜温泉　ホテルサンリゾート白浜 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>本館”全室で露天壺湯が楽しめる温泉宿♪お得なクーポン配布中！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県西牟婁郡白浜町堅田2500-185 ／ 最寄り駅：白浜 ／ 交通案内：JR白浜駅より車で約5分・南紀白浜空港より車で約10分・JR白浜駅より旅館組合運営無料シャトルバス運行（運休日あり）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　35台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「外観に驚くも食事とプールが大満足!オレンジ色のド派手な建物!なんか不安でしたが大当たりでした。スタッフも親切でセルフのお茶やご飯もやってくれました。1人でプールを貸し切りで満喫しました…　2026-08-26 09:34:55投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南紀白浜　和みの湯　花鳥風月</h3>
                  <span className="text-xs text-stone-400 ml-2">（なんきしらはま　なごみのゆ　かちょうふうげつ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/183409/183409.jpg" alt="南紀白浜　和みの湯　花鳥風月 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【楽天アワード2023Ｗ受賞の宿】海抜27ｍの高台にございます全室天然温泉半露天風呂付の宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県西牟婁郡白浜町3729-32 ／ 最寄り駅：白浜 ／ 交通案内：JR白浜駅より車で15分／南紀白浜空港より車で約15分／アドベンチャーワールドより車で約15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>24台（無料）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「毎年恒例の楽しみ、変わらぬ綺麗さと気配り3回目の宿泊で毎年楽しみにしている宿の一つとなりました。オープン当初と変わらずきれいな館内、部屋もとても綺麗で気持ちよく過ごすことができました。ちょっとした…　2026-08-11 22:21:13投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=183409&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">白浜温泉　ＫＫＲ白浜　美浜荘（国家公務員共済組合連合会白浜保養所）</h3>
                  <span className="text-xs text-stone-400 ml-2">（しらはまおんせん　けーけーあーる　しらはま　みはまそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/17665/17665_w.jpg" alt="白浜温泉　ＫＫＲ白浜　美浜荘（国家公務員共済組合連合会白浜保養所） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>白良浜海水浴場まで徒歩2分！源泉かけ流し温泉と紀州海の幸が自慢の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県西牟婁郡白浜町1564-2 ／ 最寄り駅：白浜 ／ 交通案内：JRきのくに線 白浜駅下車 路線バス 温泉行き 白良浜バス停より徒歩２分  阪和自動車道を南紀田辺ＩＣ～車で25分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　【20台】　　無料です。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフさんの様子が少し気になったスタッフさん少しお疲れのようでしたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/…　2026-08-24 06:44:35投稿」
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
    
      <HubRelatedPosts currentSlug="wakayama-shirahama-beach-stay" />
</div>
  );
}
