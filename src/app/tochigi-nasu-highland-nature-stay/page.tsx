import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/tochigi-nasu-highland-nature-stay/" },
  title: "栃木・那須高原：茶臼岳・御用邸の森＆ベーカリー・温泉リゾート 厳選ガイド",
  description: "皇室の御用邸があるロイヤルリゾート・那須高原エリア完全特化！那須連山・茶臼岳ロープウェイ、殺生石、ペニーレインなど人気ベーカリーカフェ、那須温泉郷の鹿の湯（にごり湯）とクラシックホテルを徹底解説。",
  keywords: ["栃木", "那須高原", "茶臼岳", "御用邸の森", "ベーカリー", "温泉リゾート", "温泉宿"],
  openGraph: {
    title: "栃木・那須高原：茶臼岳・御用邸の森＆ベーカリー・温泉リゾート 厳選ガイド",
    description: "皇室の御用邸があるロイヤルリゾート・那須高原エリア完全特化！那須連山・茶臼岳ロープウェイ、殺生石、ペニーレインなど人気ベーカリーカフェ、那須温泉郷の鹿の湯（にごり湯）とクラシックホテルを徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "栃木・那須高原：茶臼岳・御用邸の森＆ベーカリー・温泉リゾート 厳選ガイド",
    description: "皇室の御用邸があるロイヤルリゾート・那須高原エリア完全特化！那須連山・茶臼岳ロープウェイ、殺生石、ペニーレインなど人気ベーカリーカフェ、那須温泉郷の鹿の湯（にごり湯）とクラシックホテルを徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tochigi-nasu-highland-nature-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for tochigi-nasu-highland-nature-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "nasu_shikanoyu_onsen",
    "title": "1. 那須湯本・鹿の湯周辺（白濁硫黄泉の元祖と殺生石の奇観）",
    "timing": "通年（冬の雪見風呂・秋の紅葉シーズン）",
    "desc": "630年開湯、栃木県最古の木造共同浴場「鹿の湯」。41度から48度まで分かれた浴槽で短時間入浴を繰り返す伝統の入浴法。九尾の狐伝説が残る「殺生石」の硫黄の香り漂う奇勝。",
    "spots": "元湯 鹿の湯、殺生石（九尾の狐伝説）、那須温泉神社、湯善の里",
    "access": "東北新幹線「那須塩原駅」より関東自動車バス「那須ロープウェイ行き」で約35分「那須湯本温泉」下車。",
    "tip": "鹿の湯はシャンプーや石鹸の使用が禁止されている本格湯治場のため、純粋なお湯の力だけを体感しましょう。"
  },
  {
    "key": "nasu_forest_resort",
    "title": "2. 那須高原・御用邸の森リゾート（暖炉ラウンジ＆那須黒毛和牛ディナー）",
    "timing": "通年（新緑の避暑・秋の全山紅葉）",
    "desc": "那須御用邸に隣接する広大な森林リゾート。暖炉付きラウンジでのワインフリーフローや、那須黒毛和牛のグリルステーキ、地元契約農家の高原野菜を味わう贅沢なオールインクルーシブステイ。",
    "spots": "那須平成の森（御用邸用地の原生林ガイドウォーク）、那須ロープウェイ（茶臼岳九合目）、那須高原展望台（恋人の聖地）",
    "access": "東北新幹線那須塩原駅より各ホテル無料送迎バスで約30分。東北道那須ICより約15分。",
    "tip": "「那須平成の森」では専門ガイドと一緒に歩くガイドウォークに参加すると、手つかずの巨木や野鳥に出逢えます。"
  },
  {
    "key": "nasu_bakery_cafe_stay",
    "title": "3. ベーカリーカフェ＆アートミュージアム（ペニーレインとステンドグラス）",
    "timing": "通年（ビートルズファン・アンティーク好き必見）",
    "desc": "ビートルズの世界観が広がる名門ベーカリー「BAKERY PENNY LANE（ペニーレイン）」。名物ブルーベリーブレッドや、アンティークステンドグラスが輝く美術館、那須どうぶつ王国など充実の観光。",
    "spots": "BAKERY PENNY LANE那須店、那須ステンドグラス美術館、那須どうぶつ王国、那須とりっくあーとぴあ",
    "access": "那須高原広谷地交差点より車で約5〜15分。",
    "tip": "ペニーレインのモーニングは早朝から行列ができるため、オープン前（朝7時半頃）の到着がおすすめです。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【栃木・那須高原】茶臼岳・御用邸の森＆ベーカリー・温泉リゾート 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "皇室の御用邸があるロイヤルリゾート・那須高原エリア完全特化！那須連山・茶臼岳ロープウェイ、殺生石、ペニーレインなど人気ベーカリーカフェ、那須温泉郷の鹿の湯（にごり湯）とクラシックホテルを徹底解説。",
    "url": "https://croud-travel.pages.dev/tochigi-nasu-highland-nature-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【栃木・那須高原】茶臼岳・御用邸の森＆ベーカリー・温泉リゾート 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/tochigi-nasu-highland-nature-stay/" }
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
            NASU HIGHLAND NATURE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「栃木・那須高原」茶臼岳・御用邸の森＆ベーカリー・温泉リゾート 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            標高1,000mを超える那須連山の山裾に広がる「那須高原」。開湯1300年の硫黄泉「鹿の湯」と、パチパチ薪が燃える暖炉付き高原リゾート。澄みきった空気の中で過ごす優雅な休日。
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
              📊 栃木・那須高原：茶臼岳・御用邸の森＆ベーカリー・温泉リゾート 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「栃木・那須高原：茶臼岳・御用邸の森＆ベーカリー・温泉リゾート 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 那須湯本温泉　鹿の湯源泉かけ流しの宿　旅館　清水屋＜栃木県・那須郡＞</td>
                <td className="p-3 text-stone-600">栃木県那須郡那須町湯本73</td>
                <td className="p-3 text-stone-600">那須塩原駅周辺</td>
                <td className="p-3 text-stone-600">有り(10台無料/予約不要) 湯本一丁目バス停が当館の目の前</td>
                <td className="p-3 font-bold text-amber-600">★3.97（289件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F109132%2F109132.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 那須ハイランドパークオフィシャルホテル　ＴＯＷＡピュアコテージ</td>
                <td className="p-3 text-stone-600">栃木県那須郡那須町高久乙3375</td>
                <td className="p-3 text-stone-600">黒磯駅周辺</td>
                <td className="p-3 text-stone-600">有り　１００台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.01（2864件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F15255%2F15255.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. コテージウッドノート　湯本本館</td>
                <td className="p-3 text-stone-600">栃木県那須郡那須町湯本６５６－１９</td>
                <td className="p-3 text-stone-600">黒磯駅周辺</td>
                <td className="p-3 text-stone-600">★湯本本館・湯本山荘１５台無料　★「寺子乙」各コテージ前に1台分ずつ無料</td>
                <td className="p-3 font-bold text-amber-600">★4.76（45件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149151%2F149151.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 成子の森</td>
                <td className="p-3 text-stone-600">栃木県那須郡那須町湯本606-1</td>
                <td className="p-3 text-stone-600">高久駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場6台有（予約不要）</td>
                <td className="p-3 font-bold text-amber-600">★5（7件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184172%2F184172.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">那須湯本温泉　鹿の湯源泉かけ流しの宿　旅館　清水屋＜栃木県・那須郡＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（しかのゆ　げんせんかけながしのやど　りょかん　しみずや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/109132/109132_room.jpg" alt="那須湯本温泉　鹿の湯源泉かけ流しの宿　旅館　清水屋＜栃木県・那須郡＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>老舗旅館■「鹿の湯」源泉かけ流し白濁温泉　24時間OK■お食事処にて栃木牛と季節の懐石膳</p>
                  <p><strong>【所在地・アクセス】</strong>〒 栃木県那須郡那須町湯本73 ／ 最寄り駅：那須塩原 ／ 交通案内：JR那須塩原駅よりバスにて50分、シャトルバス有(要予約)。東北自動車道那須ICより車15分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り(10台無料/予約不要) 湯本一丁目バス停が当館の目の前</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★3.85 ／ 立地 ★3.85 ／ 部屋 ★3.75 ／ 設備 ★3.42 ／ 風呂 ★4.35 ／ 食事 ★4.13</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「良い宿です。源泉掛け流しの温泉は最高でした。料理も美味しくて、量もあります。なんと言っても、温泉にはいつ入っても良いがいいです。クチコミの詳細はこちらから　https://review.tra…　2026-09-29 12:54:57投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">那須ハイランドパークオフィシャルホテル　ＴＯＷＡピュアコテージ</h3>
                  <span className="text-xs text-stone-400 ml-2">（なすはいらんどぱーくおふぃしゃるほてる　とーわ　ぴゅあこてーじ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/15255/15255_room.jpg" alt="那須ハイランドパークオフィシャルホテル　ＴＯＷＡピュアコテージ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>那須ハイランドパーク公式ホテル【お子様無料！】【入園無料！】【30分前入園可能！】</p>
                  <p><strong>【所在地・アクセス】</strong>〒 栃木県那須郡那須町高久乙3375 ／ 最寄り駅：黒磯 ／ 交通案内：【那須塩原駅】無料送迎バスで約40分（要事前予約）／【お車】那須ＩＣより約20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１００台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事の予約枠と大浴場有料に改善の余地あり17:50頃チェックインしたところ、夕食は20:30~、朝食は10時~の回しか空いていないとのことで予定が大幅に狂いました。改善の余地があるように思います。…　2026-08-29 23:15:02投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">コテージウッドノート　湯本本館</h3>
                  <span className="text-xs text-stone-400 ml-2">（こてーじ　うっどのーと　ゆもとほんかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/149151/149151_kan1.jpg" alt="コテージウッドノート　湯本本館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>カップル・ファミリー大歓迎！木の香がたっぷりのリゾートコテージです。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 栃木県那須郡那須町湯本６５６－１９ ／ 最寄り駅：黒磯 ／ 交通案内：那須インターより車で15分（本館）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>★湯本本館・湯本山荘１５台無料　★「寺子乙」各コテージ前に1台分ずつ無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「最高のコテージ何度もリピートさせてもらっています。いつもとてもキレイに清掃されていて何の不満もなく利用しています。BBQも楽しく出来て、敷地内はとても雰囲気が良く、夜は星がキレイに見えて、…　2026-08-17 13:00:06投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">成子の森</h3>
                  <span className="text-xs text-stone-400 ml-2">（せいこのもり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/184172/184172.jpg" alt="成子の森 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>ペニーレインまで徒歩3分！2DKの広々貸別荘で密回避。自然豊かな那須でアウトドアライフを！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 栃木県那須郡那須町湯本606-1 ／ 最寄り駅：高久 ／ 交通案内：那須ICより車で約25分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場6台有（予約不要）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「成子の森は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！栃木県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、栃木県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">日光東照宮</h3>
                <p className="text-xs text-stone-600 leading-relaxed">徳川家康公を祀る世界遺産「日光の社寺」の代表格。陽明門の豪華絢爛な彫刻や「三猿」「眠り猫」など、日本の伝統美と歴史の深さを実感できます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">華厳の滝</h3>
                <p className="text-xs text-stone-600 leading-relaxed">中禅寺湖の水が高さ97mの断崖を一気に落下する日本三大名瀑の一つ。観瀑エレベーターで滝つぼ近くまで下りると、水煙と爆音の圧倒的なスケールに圧倒されます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">あしかがフラワーパーク</h3>
                <p className="text-xs text-stone-600 leading-relaxed">樹齢150年を超える大藤棚や長さ80mの白藤のトンネルが有名な花のテーマパーク。CNN「世界のアメイジングな旅行先10選」にも選ばれた幻想的な美しさです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/20090321%E9%82%A3%E9%A0%88%E5%B2%B3.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail_unscaled" alt="那須高原" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">那須高原</h3>
                <p className="text-xs text-stone-600 leading-relaxed">那須岳の裾野に広がる日本有数のロイヤルリゾート。おしゃれなカフェや美術館、温泉、アミューズメント施設が点在し、爽やかな高原ドライブに最適です。 那須高原（なすこうげん）とは、栃木県北部の那須岳の南側山麓地域を言い、那須岳の標高千数百メートルの地域より東北本線、国道4号が通る標高300m辺りまで、緩やかな斜面が広がる。また、那珂川を挟んで那須野が原、那須高原の北西側は福島県の甲子高原に連なる。…</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 栃木県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 栃木県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="tochigi-nasu-highland-nature-stay" />
</div>
  );
}
