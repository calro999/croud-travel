import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/modern-toji-fasting-detox-retreat-stay/" },
  title: "現代版プチ湯治＆ファスティング宿：デトックス・薬膳料理＆温泉リトリート 厳選ガイド",
  description: "心と体を根本からリセットする現代湯治＆ファスティング宿完全特化！草津・伊豆・八ヶ岳・別府の専門プログラム、発酵ジュース断食、体に優しい薬膳会席、温泉療法士による入浴指導、長期滞在ワークスペースを徹底解説。",
  keywords: ["現代版プチ湯治", "ファスティング宿", "デトックス", "薬膳料理", "温泉リトリート", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "現代版プチ湯治＆ファスティング宿：デトックス・薬膳料理＆温泉リトリート 厳選ガイド",
    description: "心と体を根本からリセットする現代湯治＆ファスティング宿完全特化！草津・伊豆・八ヶ岳・別府の専門プログラム、発酵ジュース断食、体に優しい薬膳会席、温泉療法士による入浴指導、長期滞在ワークスペースを徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "現代版プチ湯治＆ファスティング宿：デトックス・薬膳料理＆温泉リトリート 厳選ガイド",
    description: "心と体を根本からリセットする現代湯治＆ファスティング宿完全特化！草津・伊豆・八ヶ岳・別府の専門プログラム、発酵ジュース断食、体に優しい薬膳会席、温泉療法士による入浴指導、長期滞在ワークスペースを徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["modern-toji-fasting-detox-retreat-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for modern-toji-fasting-detox-retreat-stay", e);
  }
  return {};
}

export default function WellnessRetreatHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "fasting_detox_resort_stay",
    "title": "1. 専門ファスティング・プログラム（無理のない酵素ジュース断食＆回復食）",
    "timing": "通年（週末2泊3日〜1週間の集中デトックス）",
    "desc": "専門スタッフや看護師・管理栄養士のサポートのもとで行う安心のファスティング。特製酵素ドリンクやフレッシュスムージーでの断食期、胃腸に優しいおかゆや発酵食品を中心とした「回復食」。代謝アップと体質改善。",
    "spots": "伊豆高原ファスティングホテル、八ヶ岳ヘルスリゾート、草津温泉断食道場",
    "access": "首都圏・関西圏から特急・新幹線で約90分〜2時間。",
    "tip": "ファスティングの成否は「回復食」にかかっています。宿が用意する丁寧な回復食プログラムを利用することでリバウンドを防ぎ、クリアな体感を持続できます。"
  },
  {
    "key": "modern_toji_herb_cuisine_stay",
    "title": "2. 現代版プチ湯治＆オーガニック薬膳料理（名湯の自然治癒力と東洋医学の知恵）",
    "timing": "通年（慢性疲労・冷え性改善・自律神経の調整）",
    "desc": "昔ながらの湯治文化をモダンにアップデートした「プチ湯治」。温泉ソムリエや温泉療法医の入浴アドバイスを受けながら、効能豊かな源泉に浸かる日々。地元無農薬野菜や和漢植物をふんだんに使った滋味あふれる薬膳料理。",
    "spots": "草津温泉（時間湯・クアパーク）、別府鉄輪温泉（地獄蒸し自炊）、山形肘折温泉",
    "access": "全国の歴史ある名湯地。",
    "tip": "別府・鉄輪温泉では、温泉の噴気を利用した「地獄蒸し」で新鮮野菜や魚介を蒸し上げると、油を使わずビタミンを逃さない最高にヘルシーな食事が楽しめます。"
  },
  {
    "key": "mental_retreat_solo_stay",
    "title": "3. デジタルデトックス＆森林リトリート（スマホを手放し、五感を研ぎ澄ます静寂）",
    "timing": "通年（脳疲労リセット・睡眠の質の向上）",
    "desc": "客室にWi-Fiやテレビをあえて置かず、自然の音だけに包まれるデジタルデトックス空間。早朝の森のウォーキング、川のせせらぎを聞きながらの瞑想、暖炉の火を見つめる時間。深い眠りと心の平穏を取り戻す休日。",
    "spots": "八ヶ岳山麓、箱根の森、奥日光、屋久島、阿蘇の森",
    "access": "大自然に囲まれた静寂のロケーション。",
    "tip": "チェックイン時にスマートフォンをフロントに預ける「デジタルデトックス宿泊プラン」を利用すると、驚くほど思考がクリアになります。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【現代版プチ湯治＆ファスティング宿】デトックス・薬膳料理＆温泉リトリート 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "心と体を根本からリセットする現代湯治＆ファスティング宿完全特化！草津・伊豆・八ヶ岳・別府の専門プログラム、発酵ジュース断食、体に優しい薬膳会席、温泉療法士による入浴指導、長期滞在ワークスペースを徹底解説。",
    "url": "https://croud-travel.pages.dev/modern-toji-fasting-detox-retreat-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【現代版プチ湯治＆ファスティング宿】デトックス・薬膳料理＆温泉リトリート 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/modern-toji-fasting-detox-retreat-stay/" }
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
            MODERN TOJI & FASTING GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「現代版プチ湯治＆ファスティング宿」デトックス・薬膳料理＆温泉リトリート 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日々の疲れやストレスを手放し、本来の自分を取り戻す「現代版プチ湯治＆ファスティングリトリート」。管理栄養士監修の酵素ジュース断食、滋味あふれる薬膳料理、歴史ある名湯での湯治体験で、体の内側から輝く美と健康を。
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

              {/* プログラム内容・ロケーション・ととのうコツ */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要エリア＆専門プログラム</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆おすすめロケーション</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 リトリート効果を高めるコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選プラン
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
              📊 現代版プチ湯治＆ファスティング宿：デトックス・薬膳料理＆温泉リトリート 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「現代版プチ湯治＆ファスティング宿：デトックス・薬膳料理＆温泉リトリート 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 鳴子温泉郷　極上の貸切露天風呂　旅館大沼</td>
                <td className="p-3 text-stone-600">群馬県</td>
                <td className="p-3 text-stone-600">東北新幹線『古川駅』よりＪＲ陸羽東線に乗り換え、『鳴子御殿湯駅』下車、</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.58（614件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,530〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F106139%2F106139.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 草津温泉　ホテルクアビオ（Ｈｏｔｅｌ　ＫＵＲＢＩＯ）</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡草津町草津226-63</td>
                <td className="p-3 text-stone-600">長野原草津口駅周辺</td>
                <td className="p-3 text-stone-600">有り　１０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.76（97件）</td>
                <td className="p-3 font-bold text-rose-600">¥21,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F143278%2F143278.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 湯田上温泉　なつかしの宿　末廣館</td>
                <td className="p-3 text-stone-600">新潟県南蒲原郡田上町大字田上乙535-3</td>
                <td className="p-3 text-stone-600">田上（新潟）駅周辺</td>
                <td className="p-3 text-stone-600">有り　20台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.31（253件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1406%2F1406.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 渓谷に佇む源泉湯宿　四万やまぐち館</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡中之条町四万3876-1</td>
                <td className="p-3 text-stone-600">中之条駅周辺</td>
                <td className="p-3 text-stone-600">有り　90台　無料、まずは当館玄関前にお越しください、お車のキーはお預かりしております。</td>
                <td className="p-3 font-bold text-amber-600">★4.42（2165件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,350〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5948%2F5948.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 四万温泉　積善館　佳松亭・山荘</td>
                <td className="p-3 text-stone-600">群馬県吾妻郡中之条町四万甲4236</td>
                <td className="p-3 text-stone-600">中之条駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.66（1224件）</td>
                <td className="p-3 font-bold text-rose-600">¥23,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76361%2F76361.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 宙の森ホテル　花郷里</td>
                <td className="p-3 text-stone-600">兵庫県美方郡香美町小代区大谷300</td>
                <td className="p-3 text-stone-600">八鹿駅周辺</td>
                <td className="p-3 text-stone-600">有り　１０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.43（38件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,850〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F167316%2F167316.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">鳴子温泉郷　極上の貸切露天風呂　旅館大沼</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,530〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/106139/106139.jpg" alt="鳴子温泉郷　極上の貸切露天風呂　旅館大沼 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：東北新幹線『古川駅』よりＪＲ陸羽東線に乗り換え、『鳴子御殿湯駅』下車、徒歩５分。鳴子温泉からはタクシーで約5分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「またゆきたい設備は古いが、清潔に保たれてます。夕食とても美味しかったです。離れた所にある露天風呂も良い。蒸し風呂(サウナ)に入れます方法が内湯から入れるようになると入りやすいと思います…　2026-09-12 11:02:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">草津温泉　ホテルクアビオ（Ｈｏｔｅｌ　ＫＵＲＢＩＯ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるくあびお）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥21,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/143278/143278_kya.jpg" alt="草津温泉　ホテルクアビオ（Ｈｏｔｅｌ　ＫＵＲＢＩＯ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>マクロビ料理やファスティング。草津の上質な湯で生まれ変わる、心と体。木々のなかのウェルネスリゾート。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡草津町草津226-63 ／ 最寄り駅：長野原草津口 ／ 交通案内：ＪＲ長野原草津口駅よりバス草津バスターミナル行きにて２５分草津バスターミナル下車徒歩にて１３分、お車にて５分（送迎あり）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ファスティングで体調改善、母娘で大満足胃腸を休めることを目的に「ファスティング」が体験できるホテルを探していたところ、ホテルクアビオと出会いました。料金はやや高めですが、ファスティングによって得ら…　2026-08-23 17:53:40投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=143278&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯田上温泉　なつかしの宿　末廣館</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆだかみおんせん　なつかしのやど　すえひろかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1406/1406_rb.jpg" alt="湯田上温泉　なつかしの宿　末廣館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>緑あふれる露天風呂と新潟の新鮮な海の幸・里の幸を味わえるお宿★</p>
                  <p><strong>【所在地・アクセス】</strong>〒 新潟県南蒲原郡田上町大字田上乙535-3 ／ 最寄り駅：田上（新潟） ／ 交通案内：北陸自動車道三条燕ＩＣより車で30分。ＪＲ信越線田上駅より車で5分（田上駅前タクシー無し）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　20台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「懐かしくてホッコリする素朴な宿とってもローカルな感じのお宿でした。自販機もなくクーラーボックスに入って飲み物が売ってました。笑ビール冷えてました!何か凄く良いと言う感じではありませんが…　2026-08-19 21:49:56投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">渓谷に佇む源泉湯宿　四万やまぐち館</h3>
                  <span className="text-xs text-stone-400 ml-2">（けいこくにただずむげんせんゆやど　しまやまぐちかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,350〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5948/5948_bath.jpg" alt="渓谷に佇む源泉湯宿　四万やまぐち館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季の味覚を織り交ぜた美食と美肌の湯、女将の紙芝居に和む。檜香る渓流露天で過ごす癒しの湯宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県吾妻郡中之条町四万3876-1 ／ 最寄り駅：中之条 ／ 交通案内：高崎駅→中之条駅→関越交通バス「山口」下車0分。関越道→月夜野IC・渋川伊香保ICより約60分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　90台　無料、まずは当館玄関前にお越しください、お車のキーはお預かりしております。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.41 ／ 立地 ★4.43 ／ 部屋 ★4.33 ／ 設備 ★4.24 ／ 風呂 ★4.67 ／ 食事 ★4.33</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「長時間滞在と温泉、食事に大満足!チェックイン14:30、チェックアウト11:00には驚きました。たっぷり温泉に入りたい身にはありがたいサービスです。4回、入れました。泉質は申し分ないです。温泉…　2026-10-10 21:42:51投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
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
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宙の森ホテル　花郷里</h3>
                  <span className="text-xs text-stone-400 ml-2">（そらのもりほてる　はなごうり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,850〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/167316/167316_kan1.jpg" alt="宙の森ホテル　花郷里 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>宙（そら）を見上げて心も体もリフレッシュ！メイン客室の他にグランピングやキャンピングカーもあり♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県美方郡香美町小代区大谷300 ／ 最寄り駅：八鹿 ／ 交通案内：八鹿駅より全但バス「秋岡」行に乗車（約1時間）、「小代大谷」バス停下車、徒歩で約10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「宙の森ホテル　花郷里は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
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
          href="/prefectures/"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="modern-toji-fasting-detox-retreat-stay" />
</div>
  );
}
