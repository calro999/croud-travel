import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/mie-kumano-owase-onigajo-stay/" },
  title: "三重・熊野＆尾鷲・鬼ヶ城：世界遺産鬼ヶ城・獅子岩＆熊野古道伊勢路・尾鷲ガスエビ宿 厳選ガイド",
  description: "荒波が削った奇岩巨岩と世界遺産の祈りの道・三重熊野＆尾鷲エリア完全特化！世界遺産「鬼ヶ城・獅子岩」、熊野古道「松本峠・馬越峠」、七里御浜海岸、尾鷲港水揚げの幻の「ガスエビ」、名物「めはり寿司・熊野牛宿」を徹底解説。",
  keywords: ["三重", "熊野", "尾鷲", "鬼ヶ城", "世界遺産鬼ヶ城", "獅子岩", "熊野古道伊勢路"],
  openGraph: {
    title: "三重・熊野＆尾鷲・鬼ヶ城：世界遺産鬼ヶ城・獅子岩＆熊野古道伊勢路・尾鷲ガスエビ宿 厳選ガイド",
    description: "荒波が削った奇岩巨岩と世界遺産の祈りの道・三重熊野＆尾鷲エリア完全特化！世界遺産「鬼ヶ城・獅子岩」、熊野古道「松本峠・馬越峠」、七里御浜海岸、尾鷲港水揚げの幻の「ガスエビ」、名物「めはり寿司・熊野牛宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "三重・熊野＆尾鷲・鬼ヶ城：世界遺産鬼ヶ城・獅子岩＆熊野古道伊勢路・尾鷲ガスエビ宿 厳選ガイド",
    description: "荒波が削った奇岩巨岩と世界遺産の祈りの道・三重熊野＆尾鷲エリア完全特化！世界遺産「鬼ヶ城・獅子岩」、熊野古道「松本峠・馬越峠」、七里御浜海岸、尾鷲港水揚げの幻の「ガスエビ」、名物「めはり寿司・熊野牛宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["mie-kumano-owase-onigajo-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for mie-kumano-owase-onigajo-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kumano_onigajo_shishi_stay",
    "title": "1. 鬼ヶ城〜獅子岩・七里御浜（世界遺産！波食崖の巨岩トンネルと22kmの海岸線）",
    "timing": "通年（8月17日の熊野大花火大会は日本屈指の迫力）",
    "desc": "国の名勝・世界遺産「鬼ヶ城（おにがじょう）」。約1.2kmにわたって続く海食洞窟と蜂の巣状の奇岩歩道。太平洋に向かって吠える高さ25mの「獅子岩」。玉砂利が敷き詰められた日本一長い砂礫海岸「七里御浜（日本の渚百選）」。",
    "spots": "世界遺産 鬼ヶ城（鬼ヶ城センター・千畳敷・奥の木戸）、世界遺産 獅子岩、七里御浜海岸、花の窟神社（日本最古の神社）",
    "access": "JR紀勢本線「熊野市駅」より路線バス約5分。熊野尾鷲道路「熊野大泊IC」すぐ。",
    "tip": "鬼ヶ城の遊歩道は海の上にせり出すように作られており、足元に打ち寄せる黒潮の白波と頭上に迫る巨岩のオーバーハングが大迫力です。"
  },
  {
    "key": "owase_port_seafood_stay",
    "title": "2. 尾鷲港〜馬越峠（日本屈指の多雨地帯が育む深い森と深海魚の宝庫）",
    "timing": "通年（冬〜春は深海魚まつり・底引き網漁期）",
    "desc": "黒潮の恵みを受ける良港「尾鷲（おわせ）港」。水揚げ直後しか食べられない甘み抜群の幻の深海エビ「ガスエビ（ヒゲナガエビ）」やトロバコ魚。熊野古道伊勢路の中で最も美しい石畳とヒノキ林が続く「馬越峠（まごせとうげ）」。",
    "spots": "尾鷲魚市場おとと、馬越峠（夜泣き地蔵・天狗倉山）、夢古道おわせ（海洋深層水風呂）、三木里海岸",
    "access": "JR紀勢本線「尾鷲駅」下車。",
    "tip": "「夢古道おわせ」では、尾鷲沖の清浄な海洋深層水を汲み上げた露天風呂があり、湯上がり肌がしっとりすべすべになります。"
  },
  {
    "key": "kumano_kodo_isaji_gourmet_stay",
    "title": "3. 郷土の味「めはり寿司」＆熊野地鶏（高菜漬けで包む山林労働者の伝統弁当）",
    "timing": "通年（熊野牛ステーキとの贅沢な組み合わせ）",
    "desc": "炊きたてご飯を特製タレに漬けた高菜の葉で丸ごと包み込む郷土料理「めはり寿司（目をみはるほど美味しいのが語源）」。「熊野地鶏」の香ばしい炭火焼き、赤身の旨味が濃厚な「熊野牛」。地酒・太平洋とともに味わう至福。",
    "spots": "めはり寿司発祥店、熊野地鶏専門店、松本峠（鉄砲傷の残る地蔵）",
    "access": "熊野市・尾鷲市エリア。",
    "tip": "めはり寿司は一口かじると高菜のシャキシャキ感と出汁の染みたご飯の旨味が広がり、熊野古道トレッキングの行動食に最高です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【三重・熊野＆尾鷲・鬼ヶ城】世界遺産鬼ヶ城・獅子岩＆熊野古道伊勢路・尾鷲ガスエビ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "荒波が削った奇岩巨岩と世界遺産の祈りの道・三重熊野＆尾鷲エリア完全特化！世界遺産「鬼ヶ城・獅子岩」、熊野古道「松本峠・馬越峠」、七里御浜海岸、尾鷲港水揚げの幻の「ガスエビ」、名物「めはり寿司・熊野牛宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/mie-kumano-owase-onigajo-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【三重・熊野＆尾鷲・鬼ヶ城】世界遺産鬼ヶ城・獅子岩＆熊野古道伊勢路・尾鷲ガスエビ宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/mie-kumano-owase-onigajo-stay/" }
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
            KUMANO & OWASE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「三重・熊野＆尾鷲・鬼ヶ城」世界遺産鬼ヶ城・獅子岩＆熊野古道伊勢路・尾鷲ガスエビ宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            熊野灘の荒波と風雨が刻んだ大自然の彫刻「世界遺産・鬼ヶ城」と、天に向かって咆哮する「獅子岩」。石畳の苔が美しい熊野古道伊勢路。日本一長い砂礫海岸「七里御浜」。幻の深海エビ「ガスエビ」と熊野地鶏・めはり寿司を味わう旅。
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
              📊 三重・熊野＆尾鷲・鬼ヶ城：世界遺産鬼ヶ城・獅子岩＆熊野古道伊勢路・尾鷲ガスエビ宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「三重・熊野＆尾鷲・鬼ヶ城：世界遺産鬼ヶ城・獅子岩＆熊野古道伊勢路・尾鷲ガスエビ宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ビジネスホテル　河上</td>
                <td className="p-3 text-stone-600">三重県熊野市井戸町446-15</td>
                <td className="p-3 text-stone-600">熊野市駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料  予約不要　但し大型車の場合は予約が必要になります</td>
                <td className="p-3 font-bold text-amber-600">★3.92（278件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F20199%2F20199.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 里創人　熊野倶楽部</td>
                <td className="p-3 text-stone-600">三重県</td>
                <td className="p-3 text-stone-600">ＪＲ 熊野市駅よりお車で10分／送迎バス有り 【熊野古道まで車で15分</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.55（1098件）</td>
                <td className="p-3 font-bold text-rose-600">¥20,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79395%2F79395.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテル　季の座</td>
                <td className="p-3 text-stone-600">三重県北牟婁郡紀北町東長島3043-4</td>
                <td className="p-3 text-stone-600">紀伊長島駅周辺</td>
                <td className="p-3 text-stone-600">有　１００台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.42（912件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,776〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29808%2F29808.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ビジネスホテル　河上</h3>
                  <span className="text-xs text-stone-400 ml-2">（びじねすほてる　かわかみ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/20199/20199_r1.jpg" alt="ビジネスホテル　河上 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>熊野市駅から徒歩5分《シングルは駅近1番の広さ》ビジネス・観光にも最適！お隣はスーパー／WiFi完備</p>
                  <p><strong>【所在地・アクセス】</strong>〒 三重県熊野市井戸町446-15 ／ 最寄り駅：熊野市 ／ 交通案内：ＪＲ熊野市駅　徒歩５分／大泊IC下車～国道42号線　新宮方面　約10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料  予約不要　但し大型車の場合は予約が必要になります</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事は美味しく立地も良いが隣室の音が響く夕飯、とても美味しかったです(^_^)。海岸線に近く観光スポットへのアクセスも良好。部屋の壁が薄いのか隣室の声が聞こえて来るのがマイナス。クチコ…　2026-08-22 19:51:24投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">里創人　熊野倶楽部</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥20,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/79395/79395_ryo.jpg" alt="里創人　熊野倶楽部 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ 熊野市駅よりお車で10分／送迎バス有り 【熊野古道まで車で15分】</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お部屋のアップグレードに母も大喜び母の療養をするための旅行でした。お部屋のランクをご厚意で上げていただき、本当にゆっくりできました。母もとても喜んでいて、完治した際はまた宿泊したいと思います。… 2026-09-05 14:21:36投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル　季の座</h3>
                  <span className="text-xs text-stone-400 ml-2">（ときのざ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,776〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/29808/29808_r.jpg" alt="ホテル　季の座 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>伊勢神宮と熊野三山を結ぶお食事と温泉の宿。世界遺産熊野古道。天然温泉と熊野灘の海の幸をご堪能下さい。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 三重県北牟婁郡紀北町東長島3043-4 ／ 最寄り駅：紀伊長島 ／ 交通案内：ＪＲ紀伊長島駅送迎バス１０分／紀勢自動車道紀勢・紀伊長島ＩＣより約6.5km</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　１００台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「野生の鹿に子供も大喜び、炭火の干物も絶品景色など野生のシカがいてのどかでした!野生の鹿がいたのは子供が喜んでました!朝ごはんの干物を炭火で焼くのはとても美味しかったです!クチコミの詳細…　2026-08-08 20:23:03投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！三重県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、三重県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Naiku_001.jpg/1280px-Naiku_001.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="伊勢神宮（内宮・外宮）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">伊勢神宮（内宮・外宮）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「お伊勢さん」と親しまれる日本人の心のふるさと。五十鈴川の清流を渡り、樹齢数百年の杉木立に囲まれた内宮・正宮でお参りする体験は特別です。 伊勢神宮（いせじんぐう）は、日本の三重県伊勢市にある神社。正式名称は「神宮」（じんぐう）である。他の神宮と区別するために、「伊勢」の地名を冠し伊勢神宮と通称される。出雲国は天照大神であるが、持統天皇から天照大御神を祀り天皇は祭祀とされるようになる。 「伊勢の神宮」、または親しみを込めて「お伊勢さん」「大神宮さん」とも称される。古来、最高の特別格の宮とされ、現…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">ナガシマスパーランド</h3>
                <p className="text-xs text-stone-600 leading-relaxed">アジア最大級のアトラクション数を誇るハイブリッドテーマパーク。世界級ローラーコースター「スチールドラゴン2000」や夏の大海水プールが人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">おかげ横丁・おはらい町</h3>
                <p className="text-xs text-stone-600 leading-relaxed">伊勢神宮内宮の門前町。江戸から明治期の伊勢路の建造物を移築・再現した町並みで名物の赤福餅や伊勢うどん、松阪牛グルメの食べ歩きが楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">熊野古道（伊勢路）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界遺産に登録された聖地熊野への参詣道。苔むした石畳と静かな竹林・杉林が続く馬越峠やツヅラト峠など歴史と自然に浸るトレッキングルートです。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 三重県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 三重県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="mie-kumano-owase-onigajo-stay" />
</div>
  );
}
