import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kamakura-vs-enoshima-day-trip/" },
  title: "鎌倉 vs 江の島 日帰りならどっち？：半日・1日コース別の楽しみ方＆費用を厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "鎌倉と江の島、日帰りで行くならどっちがおすすめ？半日しかないなら鎌倉（大仏＆小町通り食べ歩き）、1日あるなら両方ハシゴ（江ノ電で20分）。拝観料・食べ歩き費用・モデルコースを時間帯別に完全ガイド。",
  keywords: ["鎌倉", "vs", "江の島", "日帰りならどっち？", "半日", "1日コース別の楽しみ方", "費用を"],
  openGraph: {
    title: "鎌倉 vs 江の島 日帰りならどっち？：半日・1日コース別の楽しみ方＆費用を厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "鎌倉と江の島、日帰りで行くならどっちがおすすめ？半日しかないなら鎌倉（大仏＆小町通り食べ歩き）、1日あるなら両方ハシゴ（江ノ電で20分）。拝観料・食べ歩き費用・モデルコースを時間帯別に完全ガイド。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "鎌倉 vs 江の島 日帰りならどっち？：半日・1日コース別の楽しみ方＆費用を厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "鎌倉と江の島、日帰りで行くならどっちがおすすめ？半日しかないなら鎌倉（大仏＆小町通り食べ歩き）、1日あるなら両方ハシゴ（江ノ電で20分）。拝観料・食べ歩き費用・モデルコースを時間帯別に完全ガイド。",
  }
};

function loadHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kamakura-vs-enoshima-day-trip"]?.hotels || [];
    }
  } catch (e) {
    console.error("Failed to load hotels for kamakura-vs-enoshima-day-trip", e);
  }
  return [];
}

export default function KamakuraVsEnoshimaPage() {
  const hotels = loadHotels();


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【鎌倉 vs 江の島 日帰りならどっち？】半日・1日コース別の楽しみ方＆費用を完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "鎌倉と江の島、日帰りで行くならどっちがおすすめ？半日しかないなら鎌倉（大仏＆小町通り食べ歩き）、1日あるなら両方ハシゴ（江ノ電で20分）。拝観料・食べ歩き費用・モデルコースを時間帯別に完全ガイド。",
    "url": "https://croud-travel.pages.dev/kamakura-vs-enoshima-day-trip/",
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
      { "@type": "ListItem", "position": 2, "name": "【鎌倉 vs 江の島 日帰りならどっち？】半日・1日コース別の楽しみ方＆費用を完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/kamakura-vs-enoshima-day-trip/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16 font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <section className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 rounded-3xl p-8 md:p-14 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/4 opacity-10 text-[300px] leading-none pointer-events-none">⛩️</div>
        <div className="relative z-10 space-y-5">
          <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
            Kamakura & Enoshima Day Trip Guide
          </div>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif leading-tight">「鎌倉 vs 江の島 日帰りならどっち？」<br className="hidden md:block"/>半日・1日コース別の楽しみ方＆費用</h1>
          <p className="text-sm md:text-base font-medium text-blue-50 max-w-2xl bg-black/10 p-4 rounded-xl backdrop-blur-sm">
            東京からわずか1時間。アクセス抜群の「鎌倉」と「江の島」ですが、いざ日帰りで行くとなると「どっちに行こう？」「両方回れる？」と悩みますよね。<br/>
            実は、<strong>使える時間が「半日」か「丸1日」かで、最適なルートは全く異なります。</strong>
          </p>
        </div>
      </section>

      <section className="px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-journal-serif text-center">
          ⏳ 時間別ベストアンサー
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border-t-8 border-indigo-500 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <span className="bg-indigo-100 text-indigo-700 font-bold px-4 py-2 rounded-full text-sm">滞在時間 3〜4時間</span>
              <h3 className="text-2xl font-bold mt-4">半日しかないなら</h3>
              <p className="text-3xl font-black text-indigo-600 mt-2">鎌倉をじっくり</p>
            </div>
            <p className="text-gray-600 mb-6">
              滞在時間が短い場合は、移動を減らして鎌倉エリア（大仏、長谷寺、小町通りなど）に絞るのが正解。ギュッと詰まった観光が楽しめます。
            </p>
          </div>
          <div className="bg-white border-t-8 border-purple-500 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-6">
              <span className="bg-purple-100 text-purple-700 font-bold px-4 py-2 rounded-full text-sm">滞在時間 7〜8時間</span>
              <h3 className="text-2xl font-bold mt-4">丸1日あるなら</h3>
              <p className="text-3xl font-black text-purple-600 mt-2">両方ハシゴ一択</p>
            </div>
            <p className="text-gray-600 mb-6">
              朝から動けるなら、江ノ電を活用して午前は鎌倉、午後は江の島へ。20分で移動できるので、全く違う景色を1日で堪能できます。
            </p>
          </div>
        </div>
      </section>

      <section className="px-4">
        <div className="bg-gray-50 rounded-3xl p-6 md:p-10 border border-gray-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 font-journal-serif">
            🚃 交通費・移動の基本情報
          </h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-sm text-gray-500 mb-1">東京駅から鎌倉駅</div>
              <div className="font-bold text-lg text-gray-800">JR横須賀線：950円</div>
              <div className="text-xs text-gray-400 mt-1">所要時間 約50分</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-sm text-gray-500 mb-1">新宿から藤沢経由 江の島</div>
              <div className="font-bold text-lg text-gray-800">小田急線：610円</div>
              <div className="text-xs text-gray-400 mt-1">藤沢〜片瀬江ノ島 所要時間 約10分(藤沢から)</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-sm text-gray-500 mb-1">鎌倉〜江の島 乗り放題</div>
              <div className="font-bold text-lg text-gray-800">江ノ電1日乗車券「のりおりくん」</div>
              <div className="text-xs font-bold text-indigo-600 mt-1">800円（※ハシゴするなら必須！）</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-journal-serif flex items-center">
          <span className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 text-lg">半</span>
          半日コース（3〜4時間）モデルプラン
        </h2>
        
        <div className="space-y-8">
          {/* 鎌倉半日 */}
          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-900">プランA：鎌倉王道つまみ食いコース</h3>
              <p className="text-sm text-indigo-600">小町通り食べ歩き予算：約1,500〜2,500円</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-200 before:to-indigo-200">
                <li className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">1</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-800">北鎌倉・長谷</h4>
                    <p className="text-sm text-gray-600 mt-1">鎌倉大仏（拝観料 300円）、長谷寺（拝観料 400円）で歴史を感じる。</p>
                  </div>
                </li>
                <li className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">2</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-800">小町通り食べ歩き</h4>
                    <p className="text-sm text-gray-600 mt-1">紅谷クルミッ子（350円）、鎌倉ビール（650円）、しらすソフト（400円）を満喫！</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* 江の島半日 */}
          <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="bg-purple-50 px-6 py-4 border-b border-purple-100">
              <h3 className="text-xl font-bold text-purple-900">プランB：江の島絶景リフレッシュコース</h3>
              <p className="text-sm text-purple-600">江の島食べ歩き・ランチ予算：約1,200〜2,000円</p>
            </div>
            <div className="p-6">
              <ul className="space-y-4 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-purple-200 before:to-purple-200">
                <li className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-purple-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">1</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-800">弁天橋・江島神社</h4>
                    <p className="text-sm text-gray-600 mt-1">江ノ電江の島駅から弁天橋を渡り、江島神社（無料）へ参拝。</p>
                  </div>
                </li>
                <li className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border-4 border-white bg-purple-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">2</div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                    <h4 className="font-bold text-gray-800">展望・しらす丼</h4>
                    <p className="text-sm text-gray-600 mt-1">シーキャンドル展望灯台（500円）からの絶景後、名物しらす丼ランチ（約1,400円）。</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-journal-serif flex items-center">
          <span className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-3 text-lg">1日</span>
          1日コース（7〜8時間）最強ハシゴプラン
        </h2>
        
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-gray-200">
          <p className="text-gray-700 mb-8 leading-relaxed">
            丸一日使えるなら、江ノ電1日乗車券（800円）を活用して、午前は緑豊かな鎌倉、午後は海を感じる江の島という欲張りルートが最強です。
          </p>
          
          <div className="flex flex-col gap-6 items-center">
            <div className="flex-1 bg-green-50 p-6 rounded-2xl w-full">
              <div className="text-green-800 font-bold mb-2">☀️ 午前：鎌倉エリア</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>・報国寺 竹の庭（拝観料 300円）</li>
                <li>・鶴岡八幡宮で参拝</li>
                <li>・小町通りで早めのランチ＆食べ歩き</li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-xs text-gray-500 font-bold mb-1">江ノ電で移動</div>
              <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center font-bold">
                20分
              </div>
              <div className="text-xs text-gray-500 mt-1">片道260円</div>
            </div>
            
            <div className="flex-1 bg-blue-50 p-6 rounded-2xl w-full">
              <div className="text-blue-800 font-bold mb-2">🌇 午後：江の島エリア</div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>・江の島大橋を渡って上陸</li>
                <li>・岩屋洞窟（500円）を探検</li>
                <li>・海沿いのカフェで絶景サンセット</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {hotels.length > 0 && (
        <section className="px-4 mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 font-journal-serif mb-3">
              鎌倉・湘南エリアのおすすめ宿
            </h2>
            <p className="text-gray-600">日帰りもいいけど、1泊すればもっとゆっくり湘南の海と歴史を満喫できます。</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {hotels.map((hotel: any, index: number) => (
              <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 flex flex-col transition-transform hover:-translate-y-1">
                {hotel.hotelImageUrl && (
                  <div className="relative h-60 w-full bg-gray-100">
                    <img
                      src={hotel.hotelImageUrl}
                      alt={hotel.hotelName}
                      className="object-cover w-full h-full"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {hotel.hotelName}
                  </h3>
                  {hotel.hotelMinCharge && (
                    <div className="text-indigo-600 font-bold text-lg mb-4">
                      目安：{hotel.hotelMinCharge.toLocaleString()}円〜 /人
                    </div>
                  )}
                  {hotel.hotelSpecial && (
                    <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                      {hotel.hotelSpecial}
                    </p>
                  )}
                  {hotel.affiliateUrl && (
                    <a
                      href={hotel.affiliateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto block text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
                    >
                      楽天トラベルで空室を見る
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    
      
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 鎌倉 vs 江の島 日帰りならどっち？：半日・1日コース別の楽しみ方＆費用を厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「鎌倉 vs 江の島 日帰りならどっち？：半日・1日コース別の楽しみ方＆費用を厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. トーセイホテルココネ鎌倉</td>
                <td className="p-3 text-stone-600">神奈川県鎌倉市御成町7番10-1号</td>
                <td className="p-3 text-stone-600">鎌倉駅周辺</td>
                <td className="p-3 text-stone-600">完全予約制。当ホテル公式ホームぺージをご覧ください。</td>
                <td className="p-3 font-bold text-amber-600">★4.46（724件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,797〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F182420%2F182420.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 古都鎌倉のリゾートホテル　ＷｅＢａｓｅ鎌倉</td>
                <td className="p-3 text-stone-600">神奈川県鎌倉市由比ガ浜4丁目10-7</td>
                <td className="p-3 text-stone-600">由比ヶ浜駅周辺</td>
                <td className="p-3 text-stone-600">事前予約制/台数限定/1泊3000円 （15時-翌11時）※12/31～1/3はご利用不可</td>
                <td className="p-3 font-bold text-amber-600">★4.63（328件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F161178%2F161178.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. Hotel　鎌倉　mori</td>
                <td className="p-3 text-stone-600">神奈川県鎌倉市小町1-5-21</td>
                <td className="p-3 text-stone-600">鎌倉駅周辺</td>
                <td className="p-3 text-stone-600">有り　２台　1泊（15:00～翌10:00）2000円(税込）※必ず事前に電話にてご予約下さい。</td>
                <td className="p-3 font-bold text-amber-600">★4.2（471件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37896%2F37896.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 江の島ホテル</td>
                <td className="p-3 text-stone-600">神奈川県藤沢市江の島-1-3-8</td>
                <td className="p-3 text-stone-600">片瀬江ノ島駅周辺</td>
                <td className="p-3 text-stone-600">提携：観光協会江の島駐車場　駐車チケット(24時間/2,000円)のお取り扱い有　その他駐車場は除外</td>
                <td className="p-3 font-bold text-amber-600">★4.19（175件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179415%2F179415.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 天然温泉　伝馬の湯　スーパーホテル湘南・藤沢駅南口</td>
                <td className="p-3 text-stone-600">神奈川県藤沢市南藤沢23-7</td>
                <td className="p-3 text-stone-600">藤沢駅周辺</td>
                <td className="p-3 text-stone-600">■提携駐車場■タイムズ藤沢リラパーキング・台数：137台（先着順）入庫後24時間1,200円</td>
                <td className="p-3 font-bold text-amber-600">★4.46（1614件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,830〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172349%2F172349.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. ８ｈｏｔｅｌ湘南藤沢（エイトホテル湘南藤沢）</td>
                <td className="p-3 text-stone-600">神奈川県藤沢市鵠沼花沢町1-5</td>
                <td className="p-3 text-stone-600">藤沢駅周辺</td>
                <td className="p-3 text-stone-600">提携駐車場有、タイムズ藤沢石上第九駐車場（先着順）入庫後24H￥1,200</td>
                <td className="p-3 font-bold text-amber-600">★4.09（2181件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,270〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130658%2F130658.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">トーセイホテルココネ鎌倉</h3>
                  <span className="text-xs text-stone-400 ml-2">（とーせいほてるここねかまくら）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,797〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/182420/182420.jpg" alt="トーセイホテルココネ鎌倉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2021年10月1日グランドオープン！鎌倉駅西口より徒歩4分。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県鎌倉市御成町7番10-1号 ／ 最寄り駅：鎌倉 ／ 交通案内：JR鎌倉駅西口から徒歩4分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>完全予約制。当ホテル公式ホームぺージをご覧ください。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ロケーションもサービスも最高、また利用したいロケーションもサービスも大変満足しております。また鎌倉に行く機会があればまたここに泊まりに行きます。ありがとうございました!クチコミの詳細はこちらか…　2026-08-29 19:23:38投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">古都鎌倉のリゾートホテル　ＷｅＢａｓｅ鎌倉</h3>
                  <span className="text-xs text-stone-400 ml-2">（ことかまくらのりぞーとほてる　うぃーべーすかまくら）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/161178/161178_kan1.jpg" alt="古都鎌倉のリゾートホテル　ＷｅＢａｓｅ鎌倉 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【クラブラウンジ】ホテルメイドの焼き菓子や軽食、各種アルコール類やソフトドリンクをお楽しみください！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県鎌倉市由比ガ浜4丁目10-7 ／ 最寄り駅：由比ヶ浜 ／ 交通案内：JR鎌倉駅直結江ノ島電鉄線に乗り換え、鎌倉駅から由比ヶ浜駅で下車、徒歩3分！　（※長谷駅から由比ヶ浜駅まで乗車時間１分）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>事前予約制/台数限定/1泊3000円 （15時-翌11時）※12/31～1/3はご利用不可</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事の量や風呂の設備に物足りなさを感じたクチコミが良かったので宿泊してみました。施設は普通です。食事は美味しいですが量が少ないので物足りません。ライブキッチンを推しにしているようで…　2026-07-14 23:05:47投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">Hotel　鎌倉　mori</h3>
                  <span className="text-xs text-stone-400 ml-2">（かまくら　もり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/37896/37896_he.jpg" alt="Hotel　鎌倉　mori 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>鎌倉駅より徒歩１分。チェックイン前後のお荷物の預かりもＯＫ！観光・ビジネスの拠点として最適です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県鎌倉市小町1-5-21 ／ 最寄り駅：鎌倉 ／ 交通案内：鎌倉駅東口より徒歩1分。横浜横須賀道路 朝比奈ＩＣより１５分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２台　1泊（15:00～翌10:00）2000円(税込）※必ず事前に電話にてご予約下さい。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「観光に便利な立地と親切な接客に大満足ホテルから鎌倉駅や小町通り、鶴岡八幡宮等がとても近い。観光や食事、お土産購入等に便利だった。従業員の方々も親切で感じがよい。建物は新しくはないが、掃除が…　2026-08-04 21:25:11投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">江の島ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（えのしまほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/179415/179415_kan1.jpg" alt="江の島ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>江の島ホテル2020年3月開業。江ノ島大橋近くに位置し「江の島アイランドスパ」や観光拠点に便利</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県藤沢市江の島-1-3-8 ／ 最寄り駅：片瀬江ノ島 ／ 交通案内：小田急江ノ島線～片瀬江ノ島駅より徒歩約１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>提携：観光協会江の島駐車場　駐車チケット(24時間/2,000円)のお取り扱い有　その他駐車場は除外</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「立地も海景色も最高、また利用したい立地も最高で、お部屋からの海景色もいい感じでまた利用したいと思います。クチコミの詳細はこちらから　https://review.travel.rakute…　2026-08-22 12:22:13投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">天然温泉　伝馬の湯　スーパーホテル湘南・藤沢駅南口</h3>
                  <span className="text-xs text-stone-400 ml-2">（てんねんおんせん　でんまのゆ　すーぱーほてる　しょうなん　ふじさわえき　みなみぐち）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,830〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/172349/172349_kan1.jpg" alt="天然温泉　伝馬の湯　スーパーホテル湘南・藤沢駅南口 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ＪＲ・小田急電鉄・江ノ島電鉄　藤沢駅より徒歩２分！ビジネスはもちろん、観光としても大変便利です！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県藤沢市南藤沢23-7 ／ 最寄り駅：藤沢 ／ 交通案内：藤沢駅より徒歩にて約２分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>■提携駐車場■タイムズ藤沢リラパーキング・台数：137台（先着順）入庫後24時間1,200円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅近で温泉と朝食を満喫、娘も大満足駅近で温泉もついているので、温泉好きな7歳の娘と宿泊しました。従業員の皆さん親切で優しく感じの良い方ばかりでした。お風呂は少し狭く、上がってから脱衣所が混んでいて…　2026-08-21 10:56:22投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=172349&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">８ｈｏｔｅｌ湘南藤沢（エイトホテル湘南藤沢）</h3>
                  <span className="text-xs text-stone-400 ml-2">（えいとほてるしょうなんふじさわ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,270〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/130658/130658.jpg" alt="８ｈｏｔｅｌ湘南藤沢（エイトホテル湘南藤沢） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>藤沢駅南口徒歩２分／スパ有／館内ラウンジ有／SAUNACHELIN2022受賞！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県藤沢市鵠沼花沢町1-5 ／ 最寄り駅：藤沢 ／ 交通案内：東海道線・小田急江ノ島線・江ノ島電鉄【藤沢駅南口より徒歩2分】電車で江の島まで約7分/鎌倉まで約15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>提携駐車場有、タイムズ藤沢石上第九駐車場（先着順）入庫後24H￥1,200</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「最高かよ最高すぎてまた来月もいきます!クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/130658?review…　2026-08-21 22:16:54投稿」
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

      <HubRelatedPosts currentSlug="kamakura-vs-enoshima-day-trip" />
</div>
  );
}
