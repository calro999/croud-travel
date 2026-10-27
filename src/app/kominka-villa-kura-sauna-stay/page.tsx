import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kominka-villa-kura-sauna-stay/" },
  title: "古民家一棟貸し・蔵サウナの宿：築100年再生邸宅・プライベート薪サウナ 厳選ガイド",
  description: "贅沢な古民家一棟貸し＆プライベートサウナ宿完全特化！築100年以上の重厚な古民家リノベーション、蔵を改装した本格セルフロウリュ薪サウナ、地下水掛け流し水風呂、囲炉裏炭火焼きと星空外気浴を徹底解説。",
  keywords: ["古民家一棟貸し", "蔵サウナの宿", "築100年再生邸宅", "プライベート薪サウナ", "温泉宿", "宿泊予約", "楽天トラベル"],
  openGraph: {
    title: "古民家一棟貸し・蔵サウナの宿：築100年再生邸宅・プライベート薪サウナ 厳選ガイド",
    description: "贅沢な古民家一棟貸し＆プライベートサウナ宿完全特化！築100年以上の重厚な古民家リノベーション、蔵を改装した本格セルフロウリュ薪サウナ、地下水掛け流し水風呂、囲炉裏炭火焼きと星空外気浴を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "古民家一棟貸し・蔵サウナの宿：築100年再生邸宅・プライベート薪サウナ 厳選ガイド",
    description: "贅沢な古民家一棟貸し＆プライベートサウナ宿完全特化！築100年以上の重厚な古民家リノベーション、蔵を改装した本格セルフロウリュ薪サウナ、地下水掛け流し水風呂、囲炉裏炭火焼きと星空外気浴を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kominka-villa-kura-sauna-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kominka-villa-kura-sauna-stay", e);
  }
  return {};
}

export default function HeritageOnsenHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kominka_kura_sauna_villa",
    "title": "1. 蔵サウナ＆地下水水風呂（100年の歴史を持つ蔵の中でととのう極上体験）",
    "timing": "通年（冬の薪ストーブの暖かさと夏の澄んだ外気浴）",
    "desc": "重厚な土壁の「蔵（くら）」をそのまま改装したプライベートサウナ。フィンランド製薪ストーブに地元のほうじ茶やアロマ水をかけてセルフロウリュ。天然地下水の冷水風呂から、庭園のインフィニティチェアで満天の星空外気浴。",
    "spots": "プライベート蔵サウナ、地下水掛け流し壺水風呂、星空ととのいデッキ、焚き火スペース",
    "access": "長野、山梨、千葉・房総、兵庫・丹波篠山、高知などの自然豊かな里山エリア。",
    "tip": "サウナポンチョを着て焚き火を眺めながらの外気浴は、日常のストレスを完全にリセットしてくれます。"
  },
  {
    "key": "irori_charcoal_kominka",
    "title": "2. 囲炉裏炭火焼き＆地元ジビエ会席（パチパチと爆ぜる炭火を囲む団らんの夜）",
    "timing": "通年（秋〜冬の囲炉裏鍋・イワナの塩焼き・ジビエ炭火焼き）",
    "desc": "部屋の中央に据えられた本格的な囲炉裏。自在鉤に鉄鍋を掛け、炭火でじっくり焼く川魚の塩焼きや地元産黒毛和牛、猪・鹿などの天然ジビエ。薪のはぜる音を聞きながら地酒を酌み交わす特別な夜。",
    "spots": "本格囲炉裏の間、土間キッチン、羽釜ご飯炊き体験、縁側ラウンジ",
    "access": "里山の古民家再生ヴィラ。",
    "tip": "釜戸（かまど）や羽釜を使って自分で炊き上げる地元産コシヒカリのご飯は、おこげが香ばしく格別の美味しさです。"
  },
  {
    "key": "machiya_traditional_suite",
    "title": "3. 京都・金沢の伝統町家ステイ（坪庭を望む檜風呂と暮らすような旅）",
    "timing": "通年（静かな古都の風情と格子戸の美）",
    "desc": "石畳の路地奥に佇む京町家や金沢の町家。格子戸や通り庭、坪庭を望む半露天の檜風呂。最新の床暖房やシモンズ製ベッドを備え、伝統の趣と現代の快適性を両立。早朝の観光名所を独占できる立地の良さ。",
    "spots": "坪庭付き檜風呂、吹き抜けの火袋、格子戸の座敷、町家専用茶室",
    "access": "京都（祇園・東山・西陣）、金沢（ひがし茶屋街・主計町）など。",
    "tip": "老舗料亭からの仕出し料理（朝食・夕食）をお部屋に届けてもらうと、料亭の味をプライベート空間でゆっくり味わえます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【古民家一棟貸し・蔵サウナの宿】築100年再生邸宅・プライベート薪サウナ 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "贅沢な古民家一棟貸し＆プライベートサウナ宿完全特化！築100年以上の重厚な古民家リノベーション、蔵を改装した本格セルフロウリュ薪サウナ、地下水掛け流し水風呂、囲炉裏炭火焼きと星空外気浴を徹底解説。",
    "url": "https://croud-travel.pages.dev/kominka-villa-kura-sauna-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【古民家一棟貸し・蔵サウナの宿】築100年再生邸宅・プライベート薪サウナ 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/kominka-villa-kura-sauna-stay/" }
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
            KOMINKA VILLA & KURA SAUNA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「古民家一棟貸し・蔵サウナの宿」築100年再生邸宅・プライベート薪サウナ 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            築100年を超える豪農の屋敷や町家を贅沢に独占する「古民家一棟貸し」。太い梁と漆喰壁が包み込む歴史空間に、最新の快適設備とプライベート蔵サウナを完備。囲炉裏を囲んで炭火焼きを味わい、星空の下でととのう究極の休日。
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

              {/* 建築美・泉質・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 建築美・泉質・設備の魅力</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 代表的エリア＆アクセス</span>
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
                      <span>🏨</span> <span>{guide.title}におすすめの厳選名宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選名宿
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
              📊 古民家一棟貸し・蔵サウナの宿：築100年再生邸宅・プライベート薪サウナ 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「古民家一棟貸し・蔵サウナの宿：築100年再生邸宅・プライベート薪サウナ 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 古民家宿　ＡＫＩＹＡ　ｃｏｒｎｅｒｓｔｏｎｅ　淡路島</td>
                <td className="p-3 text-stone-600">兵庫県淡路市浅野南574-6</td>
                <td className="p-3 text-stone-600">林崎松江海岸駅周辺</td>
                <td className="p-3 text-stone-600">有り　２台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">¥13,680〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188150%2F188150.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 離れのある囲炉裏温泉旅館　早水荘</td>
                <td className="p-3 text-stone-600">鹿児島県伊佐市菱刈川北2280-14</td>
                <td className="p-3 text-stone-600">栗野駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.5（93件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F53420%2F53420.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 古民家宿　むかしのいえ</td>
                <td className="p-3 text-stone-600">岡山県津山市加茂町物見162</td>
                <td className="p-3 text-stone-600">岡山駅周辺</td>
                <td className="p-3 text-stone-600">有り　３台　無料　要予約</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">プラン参照</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F192077%2F192077.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 一里野高原ホテル　ろあん</td>
                <td className="p-3 text-stone-600">石川県白山市尾添チ70-4</td>
                <td className="p-3 text-stone-600">小松空港駅周辺</td>
                <td className="p-3 text-stone-600">有り45台/無料（EV充電スポット2ヶ所）</td>
                <td className="p-3 font-bold text-amber-600">★4.12（152件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,530〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4817%2F4817.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 兜家旅館</td>
                <td className="p-3 text-stone-600">東京都西多摩郡檜原村数馬2612</td>
                <td className="p-3 text-stone-600">武蔵五日市駅周辺</td>
                <td className="p-3 text-stone-600">有り　５０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.56（232件）</td>
                <td className="p-3 font-bold text-rose-600">¥19,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72893%2F72893.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 『　モダン町家　一棟貸し　一日一組限定　』京都中心エリア　　＾</td>
                <td className="p-3 text-stone-600">京都府京都市中京区壬生相合町4-9　ｋｏｍｏｒｅｂｉ</td>
                <td className="p-3 text-stone-600">四条大宮駅周辺</td>
                <td className="p-3 text-stone-600">無し</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">¥8,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F169601%2F169601.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">古民家宿　ＡＫＩＹＡ　ｃｏｒｎｅｒｓｔｏｎｅ　淡路島</h3>
                  <span className="text-xs text-stone-400 ml-2">（こみんかやど　あきや　こーなーすとーん　あわじしま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,680〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/188150/188150.jpg" alt="古民家宿　ＡＫＩＹＡ　ｃｏｒｎｅｒｓｔｏｎｅ　淡路島 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>国際夫婦が元廃墟をセルフリノベして1日1組限定の古民家宿に。薪サウナと天然芝生のドッグラン。ペット可</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県淡路市浅野南574-6 ／ 最寄り駅：林崎松江海岸 ／ 交通案内：北淡ＩＣから車で約５分。観光にも便利な淡路島の西海岸から少し入った静かな立地のバケーションレンタル。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「古民家宿　ＡＫＩＹＡ　ｃｏｒｎｅｒｓｔｏｎｅ　淡路島は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">離れのある囲炉裏温泉旅館　早水荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（はなれのあるいろりおんせんりょかん　はやみずそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/53420/53420_da.jpg" alt="離れのある囲炉裏温泉旅館　早水荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>囲炉裏があり、、昔懐かしい雰囲気の静かな温泉宿です。離れはペットも一緒に泊まれます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鹿児島県伊佐市菱刈川北2280-14 ／ 最寄り駅：栗野 ／ 交通案内：肥薩線　栗野駅より南国交通バスで１２～１３分／鹿児島本線　水俣駅より南国交通バスで１時間</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「愛犬と一緒に離れに泊まりました。直前に人数変更があったり、当日、到着予定時刻がズレて夕食開始時間も変更していただきましたが、笑顔で対応してくださいました。ありがとうございました。ご飯は、量もあ…　2026-07-30 10:45:44投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">古民家宿　むかしのいえ</h3>
                  <span className="text-xs text-stone-400 ml-2">（コミンカヤド　ムカシノイエ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: プランにより変動</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/192077/192077.jpg" alt="古民家宿　むかしのいえ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>築２６０年山あいの田舎暮らし古民家宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岡山県津山市加茂町物見162 ／ 最寄り駅：岡山 ／ 交通案内：岡山駅よりお車で約２時間、中国自動車道津山ＩＣより約３０分、</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３台　無料　要予約</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「古民家宿　むかしのいえは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">一里野高原ホテル　ろあん</h3>
                  <span className="text-xs text-stone-400 ml-2">（いちりのこうげん　ろあん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,530〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4817/4817_f.jpg" alt="一里野高原ホテル　ろあん 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県白山市尾添チ70-4 ／ 最寄り駅：小松空港 ／ 交通案内：金沢駅より車で９０分｜北陸自動車道白山ＩＣ６０分｜北陸鉄道バス瀬女まで無料送迎可（前日までの予約制）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り45台/無料（EV充電スポット2ヶ所）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「炉端焼とロボット接客に子供も大満足家族4人で避暑目的でお得に泊まれる宿を探していたところ、夕飯の炉端焼に惹かれて予約しました。建物自体は古いのですが、趣味のよい小物も多く、趣あるホテルといった…　2026-08-25 01:10:30投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">兜家旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（かぶとやりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥19,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/72893/72893_gr.jpg" alt="兜家旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>緑ふかい山々に抱かれた、奥多摩檜原村。南北朝時代の落人伝説を秘めた数馬の里に当兜家旅館はあります。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 東京都西多摩郡檜原村数馬2612 ／ 最寄り駅：武蔵五日市 ／ 交通案内：武蔵五日市駅より西東京バス「数馬行き」乗車１時間。終点下車徒歩１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　５０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「滝の見える景色と丁寧な料理に大満足滝の見えるお部屋の景色がとてもよく、静かに快適に過ごせました。ご飯も丁寧に作られており、宿のサービスもとても良かったです。クチコミの詳細はこちらから　http…　2026-09-07 11:33:04投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">『　モダン町家　一棟貸し　一日一組限定　』京都中心エリア　　＾</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/169601/169601.jpg" alt="『　モダン町家　一棟貸し　一日一組限定　』京都中心エリア　　＾ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>＊一組限定　一棟貸し切り＊</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京都市中京区壬生相合町4-9　ｋｏｍｏｒｅｂｉ ／ 最寄り駅：四条大宮 ／ 交通案内：四条大宮駅から徒歩で約３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無し</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「『　モダン町家　一棟貸し　一日一組限定　』京都中心エリア　　＾は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！兵庫県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、兵庫県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">国宝 姫路城（白鷺城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">鮮やかな白漆喰の城壁が羽ばたく白鷺のように美しい日本初のユネスコ世界文化遺産。大天守をはじめ保存状態が完璧な城郭建築の最高峰です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">神戸ポートタワー・ハーバーランド</h3>
                <p className="text-xs text-stone-600 leading-relaxed">神戸港のウォーターフロントエリア。赤いつづみの形をしたポートタワーやメリケンパークの夜景、海辺のショッピングモールがロマンチックです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/161030_Kinosaki-Onsen_Station_Toyooka_Hyogo_pref_Japan01bs3.jpg/1280px-161030_Kinosaki-Onsen_Station_Toyooka_Hyogo_pref_Japan01bs3.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="城崎温泉（外湯めぐり）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">城崎温泉（外湯めぐり）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">大谷川沿いに柳並木と木造旅館が並ぶ、1300年の歴史を持つ名湯。「一の湯」「御所の湯」など7つの個性豊かな外湯を浴衣姿で巡る街歩きが魅力です。 城崎温泉駅（きのさきおんせんえき）は、兵庫県豊岡市城崎町今津字稗田にある、西日本旅客鉄道（JR西日本）山陰本線の駅である。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">竹田城跡（天空の城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">標高353mの古城山山頂に築かれた山城遺跡。秋の早朝には雲海に包まれ、まるで空に浮かんでいるかのような幻想的な景色から「天空の城」と呼ばれます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 兵庫県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 兵庫県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="kominka-villa-kura-sauna-stay" />
</div>
  );
}
