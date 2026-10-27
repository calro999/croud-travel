import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kanagawa-hakone-ashinoko-stay/" },
  title: "箱根・芦ノ湖＆元箱根：湖畔鳥居・海賊船＆富士ビュー極上宿 厳選ガイド",
  description: "箱根・芦ノ湖・元箱根エリア完全特化！箱根神社「平和の鳥居」、芦ノ湖遊覧海賊船、成川美術館、湖畔ベーカリーカフェと絶景オーシャンビューならぬレイクビュー温泉ホテルを徹底解説。",
  keywords: ["箱根", "芦ノ湖", "元箱根", "湖畔鳥居", "海賊船", "富士ビュー極上宿", "温泉宿"],
  openGraph: {
    title: "箱根・芦ノ湖＆元箱根：湖畔鳥居・海賊船＆富士ビュー極上宿 厳選ガイド",
    description: "箱根・芦ノ湖・元箱根エリア完全特化！箱根神社「平和の鳥居」、芦ノ湖遊覧海賊船、成川美術館、湖畔ベーカリーカフェと絶景オーシャンビューならぬレイクビュー温泉ホテルを徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "箱根・芦ノ湖＆元箱根：湖畔鳥居・海賊船＆富士ビュー極上宿 厳選ガイド",
    description: "箱根・芦ノ湖・元箱根エリア完全特化！箱根神社「平和の鳥居」、芦ノ湖遊覧海賊船、成川美術館、湖畔ベーカリーカフェと絶景オーシャンビューならぬレイクビュー温泉ホテルを徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kanagawa-hakone-ashinoko-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kanagawa-hakone-ashinoko-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "motohakone_jingu",
    "title": "1. 元箱根港〜箱根神社（湖上の「平和の鳥居」と九頭龍神社縁結び）",
    "timing": "通年（早朝の湖畔散策・毎月13日の九頭龍神社本祭）",
    "desc": "芦ノ湖の水面に鮮やかに映える箱根神社「平和の鳥居」。早朝の澄んだ空気の中で参拝し、湖畔の「Bakery & Table 東海」で足湯に浸かりながら焼きたてパンを味わう至福のモーニング。",
    "spots": "箱根神社（平和の鳥居・九頭龍神社新宮）、成川美術館（現代日本画と展望ラウンジ）、Bakery & Table 東海",
    "access": "小田急箱根高速バス「元箱根港」下車すぐ。箱根登山バス「元箱根港」行き。",
    "tip": "成川美術館の展望ラウンジの巨大ガラス窓から眺める「芦ノ湖・海賊船・富士山」は箱根随一の絵画のような絶景です。"
  },
  {
    "key": "ashinoko_lake_view",
    "title": "2. 芦ノ湖西岸・桃源台〜箱根町港（箱根海賊船クルーズとレイクビューホテル）",
    "timing": "通年（秋の湖畔紅葉・初夏の新緑）",
    "desc": "芦ノ湖を縦断する「箱根海賊船」。展望デッキで爽快な風を受けながら、桃源台から元箱根・箱根町港へ。湖畔に佇むザ・プリンス箱根芦ノ湖などで、蛸川温泉と極上フレンチ・日本料理を堪能。",
    "spots": "箱根海賊船（クイーン芦ノ湖・ロワイヤルII）、箱根園（箱根園水族館・駒ヶ岳ロープウェー）、箱根関所",
    "access": "箱根ロープウェイ「桃源台駅」直結。新宿から小田急箱根高速バス直通。",
    "tip": "「箱根駒ヶ岳ロープウェー」で標高1,356mの山頂に登ると、駿河湾・富士山・相模湾の360度大パノラマが広がります。"
  },
  {
    "key": "sengokuhara_susuki",
    "title": "3. 仙石原高原（黄金色のすすき草原と世界的ミュージアムリゾート）",
    "timing": "秋（9月下旬〜11月上旬のすすき見頃）",
    "desc": "台ヶ岳の山裾一面に広がる「仙石原すすき草原」。見渡す限りの黄金色の波を歩いた後は、ポーラ美術館や箱根ラリック美術館でアート鑑賞。乳白色の大涌谷温泉を引く高原リゾートで宿泊。",
    "spots": "仙石原すすき草原、ポーラ美術館（印象派絵画・森の遊歩道）、箱根ラリック美術館、箱根湿生花園",
    "access": "強羅駅・箱根湯本駅より箱根登山バス「仙石案内所前」「ポーラ美術館」行き。",
    "tip": "ポーラ美術館の「森の遊歩道」にはブナの原生林に野外彫刻が点在し、森林浴アート散歩が楽しめます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【箱根・芦ノ湖＆元箱根】湖畔鳥居・海賊船＆富士ビュー極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "箱根・芦ノ湖・元箱根エリア完全特化！箱根神社「平和の鳥居」、芦ノ湖遊覧海賊船、成川美術館、湖畔ベーカリーカフェと絶景オーシャンビューならぬレイクビュー温泉ホテルを徹底解説。",
    "url": "https://croud-travel.pages.dev/kanagawa-hakone-ashinoko-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【箱根・芦ノ湖＆元箱根】湖畔鳥居・海賊船＆富士ビュー極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/kanagawa-hakone-ashinoko-stay/" }
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
            HAKONE ASHINOKO MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「箱根・芦ノ湖＆元箱根」湖畔鳥居・海賊船＆富士ビュー極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            湖上に浮かぶ朱塗りの鳥居と、雪化粧した富士山の霊峰パノラマ。海賊船が行き交う波静かな芦ノ湖畔。元箱根の歴史あるパワースポットと、優雅なレイクサイドアートステイ。
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
              📊 箱根・芦ノ湖＆元箱根：湖畔鳥居・海賊船＆富士ビュー極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「箱根・芦ノ湖＆元箱根：湖畔鳥居・海賊船＆富士ビュー極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 箱根・芦ノ湖　はなをり（オリックスホテルズ＆リゾーツ）</td>
                <td className="p-3 text-stone-600">神奈川県足柄下郡箱根町元箱根桃源台160</td>
                <td className="p-3 text-stone-600">桃源台駅より徒歩にて約2分</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.38（1483件）</td>
                <td className="p-3 font-bold text-rose-600">¥24,597〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F162650%2F162650.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 箱根芦ノ湖温泉　源泉100％の宿　ＨＯＴＥＬ　Ｒａ　Ｋｕｕｎ　(ホテルラクーン）</td>
                <td className="p-3 text-stone-600">神奈川県足柄下郡箱根町元箱根103-227</td>
                <td className="p-3 text-stone-600">箱根湯本駅周辺</td>
                <td className="p-3 text-stone-600">あり　２０台(1グループ1台まで）　先着順　無料（マイクロバス等の駐車はできません）</td>
                <td className="p-3 font-bold text-amber-600">★3.94（615件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10956%2F10956.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテル四季の館箱根芦ノ湖</td>
                <td className="p-3 text-stone-600">神奈川県足柄下郡箱根町元箱根103-241</td>
                <td className="p-3 text-stone-600">小田原駅周辺</td>
                <td className="p-3 text-stone-600">有り　30台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.41（49件）</td>
                <td className="p-3 font-bold text-rose-600">¥40,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183100%2F183100.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ザ・プリンス　箱根芦ノ湖</td>
                <td className="p-3 text-stone-600">神奈川県足柄下郡箱根町元箱根144</td>
                <td className="p-3 text-stone-600">箱根湯本駅周辺</td>
                <td className="p-3 text-stone-600">有り／屋外282台（宿泊者無料・予約不要）※12月より3月までは、積雪の恐れがございます。</td>
                <td className="p-3 font-bold text-amber-600">★4.59（1391件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F59637%2F59637.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ホテル森の風箱根仙石原</td>
                <td className="p-3 text-stone-600">神奈川県足柄下郡箱根町仙石原817-444</td>
                <td className="p-3 text-stone-600">強羅駅周辺</td>
                <td className="p-3 text-stone-600">有り　45台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.31（73件）</td>
                <td className="p-3 font-bold text-rose-600">¥18,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184193%2F184193.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. Ｒａｋｕｔｅｎ　ＳＴＡＹ　ＶＩＬＬＡ　箱根仙石原</td>
                <td className="p-3 text-stone-600">神奈川県足柄下郡箱根町仙石原1246-748、1246-761</td>
                <td className="p-3 text-stone-600">箱根湯本駅周辺</td>
                <td className="p-3 text-stone-600">【北館】南館隣接駐車場に1室2台まで【南館】部屋により駐車場・台数が異なります※EV充電可能・先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.31（258件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,400〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F170212%2F170212.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">箱根・芦ノ湖　はなをり（オリックスホテルズ＆リゾーツ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（はこね・あしのこ　はなをり（おりっくすほてるず＆りぞーと））</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥24,597〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/162650/162650_kan1.jpg" alt="箱根・芦ノ湖　はなをり（オリックスホテルズ＆リゾーツ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>SNSで話題の水盤テラス＆足湯♪ 色浴衣を身にまとい、五感が喜ぶ温泉リゾートでフォトジェニックな旅を</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県足柄下郡箱根町元箱根桃源台160 ／ 最寄り駅：主要駅 ／ 交通案内：桃源台駅より徒歩にて約2分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「芦ノ湖の絶景と充実のビュッフェに大満足部屋からの芦ノ湖の景色が良く、ビュッフェも充実していて美味しかったです。従業員の方の対応も良く、機会があればまた訪れたいです。クチコミの詳細はこちらから　…　2026-08-30 20:38:00投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">箱根芦ノ湖温泉　源泉100％の宿　ＨＯＴＥＬ　Ｒａ　Ｋｕｕｎ　(ホテルラクーン）</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるらくーん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/10956/10956_kan.jpg" alt="箱根芦ノ湖温泉　源泉100％の宿　ＨＯＴＥＬ　Ｒａ　Ｋｕｕｎ　(ホテルラクーン） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>芦ノ湖の高台にたたずむ「HOTEL RaKuun」 自分らしいステイスタイルで、芦ノ湖を遊びつくす</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県足柄下郡箱根町元箱根103-227 ／ 最寄り駅：箱根湯本 ／ 交通案内：箱根湯本駅→箱根町元箱根行バス３０分「双子茶屋」下車(送迎不可）／小田原厚木道路小田原西IC→国道１号で約１５km</p>
                  <p><strong>【駐車場・マイカー利用】</strong>あり　２０台(1グループ1台まで）　先着順　無料（マイクロバス等の駐車はできません）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.19 ／ 立地 ★3.66 ／ 部屋 ★3.74 ／ 設備 ★3.68 ／ 風呂 ★3.92 ／ 食事 ★4.3</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「大浴場は熱かったが対応が早く満足大浴場のお湯が熱くてゆっくり浸かれませんでしたがスタックに伝えたところ翌朝は適温で浸かることが出来ました 総合的には満足ですクチコミの詳細はこちらから　…　2026-09-20 07:03:39投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル四季の館箱根芦ノ湖</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるしきのやかたはこねあしのこ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥40,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/183100/183100.jpg" alt="ホテル四季の館箱根芦ノ湖 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>芦ノ湖を見眼下に見下ろす抜群のロケーションと檜の香りに包まれた全30室の露天風呂の宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県足柄下郡箱根町元箱根103-241 ／ 最寄り駅：小田原 ／ 交通案内：小田原駅よりバス　ホテルより無料送迎あり（要予約）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　30台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉でのんびり、良い時間を過ごせました温泉に入ってのんびりできて、良かったです。有難うございました。クチコミの詳細はこちらから　https://review.travel.rakuten.co…　2026-05-01 18:03:37投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ザ・プリンス　箱根芦ノ湖</h3>
                  <span className="text-xs text-stone-400 ml-2">（ざ・ぷりんすはこね）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/59637/59637_ro.jpg" alt="ザ・プリンス　箱根芦ノ湖 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>コンセプトは“リラクゼーション＆ネイチャー</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県足柄下郡箱根町元箱根144 ／ 最寄り駅：箱根湯本 ／ 交通案内：小田原駅西口より無料送迎バス（定時運行・要予約）にて45分／箱根湯本駅から伊豆箱根バス約65分／元箱根より循環バスあり</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り／屋外282台（宿泊者無料・予約不要）※12月より3月までは、積雪の恐れがございます。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「家族で快適に過ごせて朝食も大満足!今回、スーペリアツインに宿泊。大人2人、小学生2人で泊まりましたが快適な広さでした。プレイルームには卓球台や色々なゲームがあり、子どもたちは楽しんでいました。…　2026-08-16 12:21:42投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル森の風箱根仙石原</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてるもりのかぜ　はこねせんごくはら）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥18,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/184193/184193.jpg" alt="ホテル森の風箱根仙石原 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>すすき草原まで徒歩8分。自然と触れ合う趣ある庭園に高級感ある和モダンの檜造りの宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県足柄下郡箱根町仙石原817-444 ／ 最寄り駅：強羅 ／ 交通案内：強羅駅よりタクシーで15分、箱根湯本駅よりバスで30分、小田原駅よりバスで45分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　45台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「誕生日のお祝いに宿泊しました子どもの誕生日当日に宿泊しました。デザートのプレートにメッセージを入れてもらうようお願いしましたが、子どもはとても喜んでいました。鱧など季節の食材も取り入れて美味しかっ…　2026-07-21 19:41:38投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=184193&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">Ｒａｋｕｔｅｎ　ＳＴＡＹ　ＶＩＬＬＡ　箱根仙石原</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,400〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/170212/170212.jpg" alt="Ｒａｋｕｔｅｎ　ＳＴＡＹ　ＶＩＬＬＡ　箱根仙石原 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全室温泉＆足湯付き！最大10名宿泊可能なメゾネットヴィラ！仙石原草原へは徒歩約10分</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県足柄下郡箱根町仙石原1246-748、1246-761 ／ 最寄り駅：箱根湯本 ／ 交通案内：御殿場IC20分、「東京放送入口」バス停すぐ、マップコード北館57 300 219*17南館57 300 098*30</p>
                  <p><strong>【駐車場・マイカー利用】</strong>【北館】南館隣接駐車場に1室2台まで【南館】部屋により駐車場・台数が異なります※EV充電可能・先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「愛犬との初旅行、お風呂と足湯に大満足清潔感があり、お風呂も足湯も最高でした。ドッグランが芝生だとなお良かったです。はじめての愛犬との旅行でしたが楽しく過ごす事ができました。またぜひ利用…　2026-08-19 20:37:39投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！神奈川県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、神奈川県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">横浜みなとみらい21</h3>
                <p className="text-xs text-stone-600 leading-relaxed">ランドマークタワーや大観覧車「コスモクロック21」、赤レンガ倉庫が立ち並ぶ近代都市リゾート。港町の海風を感じながらショッピングや夜景を楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">鎌倉大仏（高徳院）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">高さ約11.3mを誇る鎌倉のシンボル的な国宝銅造阿弥陀如来坐像。四季折々の花々や歴史ある古刹巡り、小町通りの食べ歩きとともに鎌倉散策の定番です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ec/Lake_Ashi_from_Mt.Komagatake_03-2.jpg/1280px-Lake_Ashi_from_Mt.Komagatake_03-2.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="箱根 芦ノ湖・大涌谷" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">箱根 芦ノ湖・大涌谷</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富士山を望む箱根海賊船クルーズが人気の芦ノ湖と、現在も硫黄煙が噴き出す火山地帯・大涌谷。名物の「黒たまご」を食べると寿命が延びると伝えられます。 箱根（はこね、古くは「函根」、「函嶺」とも呼ばれた）は、静岡県に近い神奈川県南西部の一角、箱根カルデラ近辺の一帯を指す地名。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">江の島</h3>
                <p className="text-xs text-stone-600 leading-relaxed">湘南海岸に浮かぶ美しい島。江島神社への参道散策やシーキャンドル（展望灯台）からの太平洋の絶景、新鮮な生しらす丼など魅力が詰まっています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 神奈川県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 神奈川県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="kanagawa-hakone-ashinoko-stay" />
</div>
  );
}
