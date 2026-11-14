import ShareButtons from "@/app/components/ShareButtons";
import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kochi-shimanto-river-chinkabashi-ashizuri-stay/" },
  title: "高知・四万十川＆沈下橋・足摺岬：日本最後の清流カヌー・天然うなぎ＆カツオ宿 厳選ガイド",
  description: "最後の清流と四国最南端・高知四万十＆足摺エリア完全特化！欄干のない「佐田の沈下橋・岩間沈下橋」、四万十川カヌー・屋形船遊覧、足摺岬灯台・金剛福寺、名物「天然鮎・四万十うなぎ・初鰹タタキ宿」を徹底解説。",
  keywords: ["高知", "四万十川", "沈下橋", "足摺岬", "日本最後の清流カヌー", "天然うなぎ", "カツオ宿"],
  openGraph: {
    title: "高知・四万十川＆沈下橋・足摺岬：日本最後の清流カヌー・天然うなぎ＆カツオ宿 厳選ガイド",
    description: "最後の清流と四国最南端・高知四万十＆足摺エリア完全特化！欄干のない「佐田の沈下橋・岩間沈下橋」、四万十川カヌー・屋形船遊覧、足摺岬灯台・金剛福寺、名物「天然鮎・四万十うなぎ・初鰹タタキ宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "高知・四万十川＆沈下橋・足摺岬：日本最後の清流カヌー・天然うなぎ＆カツオ宿 厳選ガイド",
    description: "最後の清流と四国最南端・高知四万十＆足摺エリア完全特化！欄干のない「佐田の沈下橋・岩間沈下橋」、四万十川カヌー・屋形船遊覧、足摺岬灯台・金剛福寺、名物「天然鮎・四万十うなぎ・初鰹タタキ宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kochi-shimanto-river-chinkabashi-ashizuri-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kochi-shimanto-river-chinkabashi-ashizuri-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shimanto_river_chinkabashi_inn",
    "title": "1. 四万十川沈下橋めぐり〜佐田沈下橋・屋形船（日本最後の清流と原風景）",
    "timing": "通年（4月〜10月のカヌー・SUP・川遊び・新緑）",
    "desc": "本流に大規模なダムがない「日本最後の清流 四万十川（全長196km）」。最下流に位置し最も長く親しまれている「佐田の沈下橋（今成橋）」。ポスターでおなじみの「岩間沈下橋」。エンジン付きの伝統屋形船や、風を受けて進む帆掛け舟での遊覧。",
    "spots": "佐田沈下橋、三里沈下橋、岩間沈下橋、四万十の碧（屋形船遊覧）、四万十カヌーとキャンプの里 かわらっこ",
    "access": "土佐くろしお鉄道「中村駅」より車約15分。高知道「四万十町中央IC」より約60分。",
    "tip": "佐田の沈下橋はレンタサイクルで渡ることができ、欄干のない橋の上からエメラルドグリーンの川面を真下に見下ろすスリルと開放感が味わえます。"
  },
  {
    "key": "ashizurimisaki_ocean_onsen_stay",
    "title": "2. 足摺岬〜あしずり温泉郷（四国最南端の白亜の灯台と弘法大師の霊場）",
    "timing": "通年（年間を通じて温暖・冬の椿まつり・満天の星空）",
    "desc": "黒潮が直接打ち寄せる四国最南端の岬「足摺岬（あしずりみさき）」。高さ約80mの断崖絶壁に立つ白亜の「足摺岬灯台」。四国八十八ヶ所第38番札所「金剛福寺」。弘法大師ゆかりの足摺七不思議。雄大な太平洋の水平線アーチを望む温泉露天風呂。",
    "spots": "足摺岬展望台・灯台、金剛福寺、白山洞門（日本最大級の花崗岩洞門）、あしずり温泉郷、足摺海底館",
    "access": "中村駅より高知西南交通バス「足摺岬行」で約100分。",
    "tip": "足摺岬展望台からは、視界270度に広がる水平線が丸くカーブして見え、地球が丸いことを肉眼で実感できる壮大なスケールが体験できます。"
  },
  {
    "key": "shimanto_unagi_katsuo_stay",
    "title": "3. 四万十名物「天然うなぎ」＆カツオの藁焼きタタキ（大自然が育む至高の美味）",
    "timing": "通年（うなぎ漁期：4月〜11月・初夏と秋の戻り鰹）",
    "desc": "清流四万十川で獲れる希少な「四万十天然うなぎ」。身が引き締まり、天然ならではの爽やかな川魚の香りと上質な脂の旨味。四万十川の青のりや川エビの唐揚げ。土佐名物・豪快な火柱で一気に焼き上げるカツオの塩タタキ。",
    "spots": "四万十屋（うなぎ専門店）、味劇場 ちか（郷土料理居酒屋）、中村駅周辺の老舗料理旅館",
    "access": "四万十市中村エリア・四万十川沿い。",
    "tip": "「四万十屋」では四万十川のせせらぎを眺めながら、炭火で香ばしく焼き上げた天然うな重を特製の秘伝タレで贅沢に堪能できます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【高知・四万十川＆沈下橋・足摺岬】日本最後の清流カヌー・天然うなぎ＆カツオ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "最後の清流と四国最南端・高知四万十＆足摺エリア完全特化！欄干のない「佐田の沈下橋・岩間沈下橋」、四万十川カヌー・屋形船遊覧、足摺岬灯台・金剛福寺、名物「天然鮎・四万十うなぎ・初鰹タタキ宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/kochi-shimanto-river-chinkabashi-ashizuri-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【高知・四万十川＆沈下橋・足摺岬】日本最後の清流カヌー・天然うなぎ＆カツオ宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/kochi-shimanto-river-chinkabashi-ashizuri-stay/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-emerald-950 to-teal-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SHIMANTO & ASHIZURI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「高知・四万十川＆沈下橋・足摺岬」日本最後の清流カヌー・天然うなぎ＆カツオ宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-emerald-100/90 leading-relaxed">
            大自然の原風景がそのまま息づく日本最後の清流「四万十川」。増水時に川底に沈むように設計された欄干のない「沈下橋」。清流を滑るように進むカヌーや帆掛け舟。四国最南端・足摺岬の断崖絶壁と太平洋の大海原。極上の天然うなぎとカツオの藁焼きを味わう旅。
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 my-6">
        <ShareButtons title={"高知・四万十川＆沈下橋・足摺岬：日本最後の清流カヌー・天然うなぎ＆カツオ宿 厳選ガイド"} url={"https://croud-travel.pages.dev/kochi-shimanto-river-chinkabashi-ashizuri-stay/"} />
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
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-emerald-800 hover:from-teal-600 hover:to-emerald-700 rounded-xl shadow transition"
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
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">高知・四万十川＆沈下橋・足摺岬：日本最後の清流カヌー・天然うなぎ＆カツオ宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析</h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「高知・四万十川＆沈下橋・足摺岬：日本最後の清流カヌー・天然うなぎ＆カツオ宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 中村プリンスホテル</td>
                <td className="p-3 text-stone-600">高知県四万十市中村弥生町4-1</td>
                <td className="p-3 text-stone-600">中村駅周辺</td>
                <td className="p-3 text-stone-600">ご宿泊者様は皆様駐車可能（場所は先着順・無料です。ご予約は承っておりません。ご了承下さいませ）</td>
                <td className="p-3 font-bold text-amber-600">★3.88（1125件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8989%2F8989.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ゆのごう温泉　ホテル湯の杜（旧：ホテル湯の杜美春閣）</td>
                <td className="p-3 text-stone-600">岡山県美作市中山1144</td>
                <td className="p-3 text-stone-600">林野駅周辺</td>
                <td className="p-3 text-stone-600">有り　８０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.64（1289件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67099%2F67099.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 新安並温泉　なごみ宿　安住庵</td>
                <td className="p-3 text-stone-600">高知県四万十市中村1815為松公園頂上</td>
                <td className="p-3 text-stone-600">中村駅周辺</td>
                <td className="p-3 text-stone-600">有り　１５台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.57（194件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10838%2F10838.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 土佐御苑(とさぎょえん)</td>
                <td className="p-3 text-stone-600">高知県高知市大川筋1-4-8</td>
                <td className="p-3 text-stone-600">高知駅周辺</td>
                <td className="p-3 text-stone-600">駐車料金：普通車1100円・二輪800円</td>
                <td className="p-3 font-bold text-amber-600">★4.26（2159件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,550〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10680%2F10680.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. あしずり温泉郷　足摺国際ホテル</td>
                <td className="p-3 text-stone-600">高知県土佐清水市足摺岬662</td>
                <td className="p-3 text-stone-600">高知自動車道四万十町中央ICより国道56号線経由で140分／土佐くろし</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.44（747件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,240〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F8329%2F8329.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">「高知・四万十川＆沈下橋・足摺岬」掲載宿の所在地・アクセス・特徴データ一覧</h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">中村プリンスホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（なかむら　ぷりんすほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8989/8989_sigl.jpg" alt="中村プリンスホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四万十川のほとりに建ち、繁華街まで徒歩約５分、コンビニ目の前</p>
                  <p><strong>【所在地・アクセス】</strong>〒 高知県四万十市中村弥生町4-1 ／ 最寄り駅：中村 ／ 交通案内：中村駅より車で約５分(駅ご到着時,お電話頂きましたらタクシー《有料》をお呼び致します)</p>
                  <p><strong>【駐車場・マイカー利用】</strong>ご宿泊者様は皆様駐車可能（場所は先着順・無料です。ご予約は承っておりません。ご了承下さいませ）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「室内にノミがいて噛まれた。室内にノミがいて3箇所噛まれた。夏はもう泊まらん。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ゆのごう温泉　ホテル湯の杜（旧：ホテル湯の杜美春閣）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆのごうおんせん　ほてるゆのもり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/67099/67099_kr.jpg" alt="ゆのごう温泉　ホテル湯の杜（旧：ホテル湯の杜美春閣） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>様々な旅の目的にお応えできる本格和風旅館</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岡山県美作市中山1144 ／ 最寄り駅：林野 ／ 交通案内：ＪＲ姫新線　林野駅より車で１０分  中国自動車道　美作インターより車で15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　８０台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.69 ／ 立地 ★4.46 ／ 部屋 ★4.6 ／ 設備 ★4.54 ／ 風呂 ★4.58 ／ 食事 ★4.74</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事も温泉も接客も最高で大満足の旅今回、夫婦で宿泊させていただきましたが、到着から出発まで大変気持ちよく過ごすことができ、本当に大満足のお宿でした。何より印象に残ったのは、スタッフの皆さん…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">新安並温泉　なごみ宿　安住庵</h3>
                  <span className="text-xs text-stone-400 ml-2">（しんやすなみおんせん　なごみやど　あんじゅうあん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/10838/10838_room.jpg" alt="新安並温泉　なごみ宿　安住庵 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>城山の山頂に建つ四万十の川と街を眼下に望む一軒宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 高知県四万十市中村1815為松公園頂上 ／ 最寄り駅：中村 ／ 交通案内：土佐くろしお鉄道中村駅下車　タクシーで約１０分（徒歩４０分） / 高知自動車道四万十町中央ICより国道５６号線で約６０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１５台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💡 <strong>新安並温泉　なごみ宿　安住庵の滞在ポイント：</strong>「高知・四万十川＆沈下橋・足摺岬エリアの散策拠点に適した立地。客室タイプや食事の有無・駐車場条件を旅程に合わせて比較するのがおすすめです。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">土佐御苑(とさぎょえん)</h3>
                  <span className="text-xs text-stone-400 ml-2">（とさぎょえん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,550〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/10680/10680_war.jpg" alt="土佐御苑(とさぎょえん) 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>プロが選ぶ日本のホテル旅館100選料理部門連続受賞中|高知駅徒歩5分の鰹料理とおもてなしの宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 高知県高知市大川筋1-4-8 ／ 最寄り駅：高知 ／ 交通案内：高知ICよりお車で１０分　高知駅より徒歩５分　高知空港よりお車で３０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>駐車料金：普通車1100円・二輪800円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの笑顔とアンパンマン布団で良い思い出宿のスタッフの皆様の笑顔が素敵で快適に過ごすことができました。初めての三世代旅行でしたが、アンパン布団も用意して頂き良い思い出になりました!!ク…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">あしずり温泉郷　足摺国際ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（あしずりおんせんごう　あしずりこくさいほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,240〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/8329/8329_room.jpg" alt="あしずり温泉郷　足摺国際ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四国最南端、あしずり温泉郷にあって果てしなく広がる真っ青な大空と紺碧の太平洋がお出迎え致します。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 高知県土佐清水市足摺岬662 ／ 最寄り駅：主要駅 ／ 交通案内：高知自動車道四万十町中央ICより国道56号線経由で140分／土佐くろしお鉄道中村駅よりバス100分、タクシー60分</p>
                  <p>【高知・四万十川＆沈下橋・足摺岬：日本最後の清流カヌー】 <strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事と眺望は最高、お風呂は熱すぎて...海の見えるベッドのお部屋が満室、高齢者を連れて和室は少々不安もありながらの予約。しかしエレベーター降りてすぐの部屋で助かったのと、畳も綺麗で清潔感があり、掃…」
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
        <ShareButtons title={"高知・四万十川＆沈下橋・足摺岬：日本最後の清流カヌー・天然うなぎ＆カツオ宿 厳選ガイド"} url={"https://croud-travel.pages.dev/kochi-shimanto-river-chinkabashi-ashizuri-stay/"} />
      </div>
      <HubRelatedPosts currentSlug="kochi-shimanto-river-chinkabashi-ashizuri-stay" />
</div>
  );
}
