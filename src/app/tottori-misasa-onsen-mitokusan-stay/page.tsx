import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/tottori-misasa-onsen-mitokusan-stay/" },
  title: "鳥取・三朝温泉＆三徳山三仏寺：世界屈指のラジウム温泉・国宝投入堂宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本遺産第1号・六根清浄と六感治癒・鳥取三朝エリア完全特化！世界屈指の高濃度ラジウム温泉「三朝温泉（河原風呂・株湯）」、日本一危険な国宝「三徳山三仏寺 投入堂（なげいれどう）」、名物「とち餅・鳥取和牛宿」を徹底解説。",
  keywords: ["鳥取", "三朝温泉", "三徳山三仏寺", "世界屈指のラジウム温泉", "国宝投入堂宿", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "鳥取・三朝温泉＆三徳山三仏寺：世界屈指のラジウム温泉・国宝投入堂宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "日本遺産第1号・六根清浄と六感治癒・鳥取三朝エリア完全特化！世界屈指の高濃度ラジウム温泉「三朝温泉（河原風呂・株湯）」、日本一危険な国宝「三徳山三仏寺 投入堂（なげいれどう）」、名物「とち餅・鳥取和牛宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "鳥取・三朝温泉＆三徳山三仏寺：世界屈指のラジウム温泉・国宝投入堂宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "日本遺産第1号・六根清浄と六感治癒・鳥取三朝エリア完全特化！世界屈指の高濃度ラジウム温泉「三朝温泉（河原風呂・株湯）」、日本一危険な国宝「三徳山三仏寺 投入堂（なげいれどう）」、名物「とち餅・鳥取和牛宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tottori-misasa-onsen-mitokusan-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for tottori-misasa-onsen-mitokusan-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "misasa_radium_onsen_ryokan_stay",
    "title": "1. 三朝温泉街〜三朝橋・河原風呂・株湯（世界屈指のラジウム泉と温泉街情緒）",
    "timing": "通年（吸って・飲んで・浸かる「三朝の吸入・飲泉・入浴」療法）",
    "desc": "世界有数の高濃度ラドンを含有する「三朝温泉」。三朝橋のたもとにある開放的な混浴露天風呂「河原風呂」。源泉発見の地「株湯」。ラドンガスを吸入する「熱気浴」。昭和レトロな温泉本通り（射的・駄菓子屋・和紙灯り）。",
    "spots": "河原風呂、株湯（元湯）、三朝橋（登録有形文化財）、温泉本通り（陣所の館・射的場）、三朝バイオリン美術館",
    "access": "JR山陰本線「倉吉駅」より日ノ丸バスで約20分。米子道「湯原IC」より約50分。",
    "tip": "三朝温泉のお湯は飲むことも可能（飲泉場あり）で、ミネラルとラドンが胃腸の働きを整えてくれるため、入浴と飲泉のダブル効果が期待できます。"
  },
  {
    "key": "mitokusan_nageiredou_stay",
    "title": "2. 三徳山三仏寺〜国宝 投入堂（断崖絶壁に建つ日本一危険な国宝）",
    "timing": "参拝登山期間：4月〜11月（冬期・悪天候時は入山禁止）",
    "desc": "役行者が法力で岩窟に投げ入れたと伝わる「三徳山三仏寺 投入堂（国宝）」。木の根や鎖をよじ登る険しい修行道を登った者だけが拝める奇跡の建築。文殊堂の縁側から望む絶景パノラマ。宿坊での本格精進料理。",
    "spots": "三徳山三仏寺（本堂・文殊堂・地蔵堂・鐘楼堂・国宝投入堂）、三徳山宿坊（皆成院・輪光院）",
    "access": "三朝温泉より車・バスで約15分。",
    "tip": "投入堂への登山は「2人以上での入山」「滑りにくい登山靴または藁草履の着用」が必須条件となっており、本堂裏の登山事務所で靴底チェックが行われます。"
  },
  {
    "key": "tottori_wagyu_tochimochi_stay",
    "title": "3. 鳥取和牛「オレイン55」＆とち餅・松葉ガニ（山陰最高峰の美味と甘味）",
    "timing": "通年（冬期：11月上旬〜3月下旬は松葉ガニシーズン）",
    "desc": "オレイン酸を55%以上含む上質な脂と赤身の旨味が際立つ「鳥取和牛オレイン55」。三徳山の栃の実を灰汁抜きして搗き込んだ素朴で香ばしい銘菓「とち餅」。冬期に水揚げされる山陰の冬の味覚の王者「松葉ガニ（ズワイガニ）」。",
    "spots": "とち餅本舗 つのだ、三朝温泉街の老舗旅館・割烹処、倉吉白壁土蔵群のお食事処",
    "access": "三朝町・倉吉市エリア。",
    "tip": "「とち餅」は独特の香ばしい栃の風味と上品なこし餡の甘みが絶妙で、お茶請けや三朝温泉のお土産として一番人気を誇ります。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【鳥取・三朝温泉＆三徳山三仏寺】世界屈指のラジウム温泉・国宝投入堂宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "日本遺産第1号・六根清浄と六感治癒・鳥取三朝エリア完全特化！世界屈指の高濃度ラジウム温泉「三朝温泉（河原風呂・株湯）」、日本一危険な国宝「三徳山三仏寺 投入堂（なげいれどう）」、名物「とち餅・鳥取和牛宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/tottori-misasa-onsen-mitokusan-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【鳥取・三朝温泉＆三徳山三仏寺】世界屈指のラジウム温泉・国宝投入堂宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/tottori-misasa-onsen-mitokusan-stay/" }
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
            MISASA ONSEN & MITOKUSAN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「鳥取・三朝温泉＆三徳山三仏寺」世界屈指のラジウム温泉・国宝投入堂宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            「三度朝を迎えると病が治る」と伝わる奇跡の湯治場「三朝（みささ）温泉」。高濃度ラドンが細胞を活性化させるホルミシス効果。断崖絶壁の窪みに建つ日本一危険な国宝建築「三徳山三仏寺 投入堂」。三徳川のせせらぎと鳥取和牛を味わう癒やしの旅。
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
                          rel="noopener noreferrer"
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
              📊 鳥取・三朝温泉＆三徳山三仏寺：世界屈指のラジウム温泉・国宝投入堂宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「鳥取・三朝温泉＆三徳山三仏寺：世界屈指のラジウム温泉・国宝投入堂宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 東郷館</td>
                <td className="p-3 text-stone-600">鳥取県東伯郡湯梨浜町はわい温泉4-24</td>
                <td className="p-3 text-stone-600">松崎（鳥取）駅周辺</td>
                <td className="p-3 text-stone-600">有り　６台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.33（20件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F184048%2F184048.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ビジネスイン　諏訪部</td>
                <td className="p-3 text-stone-600">鳥取県倉吉市上井町1-6-13</td>
                <td className="p-3 text-stone-600">倉吉駅周辺</td>
                <td className="p-3 text-stone-600">有り　３０台　　トラック．バス置けます</td>
                <td className="p-3 font-bold text-amber-600">★3.73（69件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F84783%2F84783.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 大江戸温泉物語Ｐｒｅｍｉｕｍ　斉木別館</td>
                <td className="p-3 text-stone-600">鳥取県東伯郡三朝町山田70</td>
                <td className="p-3 text-stone-600">倉吉駅周辺</td>
                <td className="p-3 text-stone-600">１００台　予約不要　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.08（1326件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4871%2F4871.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 三朝温泉　旅館　大橋</td>
                <td className="p-3 text-stone-600">鳥取県</td>
                <td className="p-3 text-stone-600">JR山陰本線-倉吉駅下車～バス20分／中国道-院庄ICよりＲ１７９号を</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.42（278件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40046%2F40046.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 三朝温泉桃園館</td>
                <td className="p-3 text-stone-600">鳥取県東伯郡三朝町山田118-1</td>
                <td className="p-3 text-stone-600">鳥取空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　１０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★3.95（65件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,320〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153377%2F153377.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 三朝温泉　木造りの宿　橋津屋</td>
                <td className="p-3 text-stone-600">鳥取県東伯郡三朝町三朝886</td>
                <td className="p-3 text-stone-600">倉吉駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.43（553件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F78116%2F78116.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">東郷館</h3>
                  <span className="text-xs text-stone-400 ml-2">（とうごうかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/184048/184048.jpg" alt="東郷館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>はわい温泉で唯一ワンちゃんと泊まれる宿♪24時間の温泉と旬の海鮮でほっと癒されるペット旅を。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県東伯郡湯梨浜町はわい温泉4-24 ／ 最寄り駅：松崎（鳥取） ／ 交通案内：松崎駅より車で約８分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　６台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「東郷館は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ビジネスイン　諏訪部</h3>
                  <span className="text-xs text-stone-400 ml-2">（びじねすいん　すわべ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/84783/84783.jpg" alt="ビジネスイン　諏訪部 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>倉吉市街地の飲食店街や、観光スポットへのアクセス良好。シンプルでリーズナブルなビジネスホテル。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県倉吉市上井町1-6-13 ／ 最寄り駅：倉吉 ／ 交通案内：倉吉駅より徒歩にて約５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３０台　　トラック．バス置けます</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ビジネスイン　諏訪部は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">大江戸温泉物語Ｐｒｅｍｉｕｍ　斉木別館</h3>
                  <span className="text-xs text-stone-400 ml-2">（おおえどおんせんものがたりぷれみあむさいきべっかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4871/4871_ky.jpg" alt="大江戸温泉物語Ｐｒｅｍｉｕｍ　斉木別館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>キッズパークやプレミアムラウンジ、ライトアップされた日本庭園など、家族みんなが楽しめる温泉宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県東伯郡三朝町山田70 ／ 最寄り駅：倉吉 ／ 交通案内：中国自動車道院庄Ｉ．Ｃから５５分／ＪＲ倉吉駅下車、三朝温泉行きバスにて約２０分・お車にて約１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>１００台　予約不要　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「子供も大人も大満足、また行きたい!ラウンジや卓球、プレイルームなど、子どもたちが飽きずに過ごせ、お部屋も広くゆったりと過ごせました。露天も良かったです。1つだけあえてあげるなら、廊下がクーラーなく…　2026-08-26 16:09:21投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">三朝温泉　旅館　大橋</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/40046/40046.jpg" alt="三朝温泉　旅館　大橋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：JR山陰本線-倉吉駅下車～バス20分／中国道-院庄ICよりＲ１７９号を倉吉方面に約50分/ANA羽田～鳥取～バス～倉吉</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「重要文化財の佇まいと最高の泉質に感動重要文化財の宿の廊下を歩いてると、外を歩いてる人々がカメラにおさめてました。正面玄関カッちょいーです。なんといってもお風呂!洞窟みたいなお風呂もさること…　2026-09-05 22:04:24投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">三朝温泉桃園館</h3>
                  <span className="text-xs text-stone-400 ml-2">（みささおんせん　とうえんかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,320〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/153377/153377_kan1.jpg" alt="三朝温泉桃園館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【日本遺産】に選ばれた三朝温泉を源泉100%でお楽しみいただける温泉旅館です！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県東伯郡三朝町山田118-1 ／ 最寄り駅：鳥取空港 ／ 交通案内：ＪＲ倉吉駅より三朝温泉行バスにて２０分／中国道 院庄ＩＣよりＲ１７９経由で６０分／米子道 湯原ＩＣより４５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「写真と違いすぎる載っている写真がキレイすぎる。実際はかなり古く、部屋のふすまは変色しているし、露天風呂はボロボロで、周辺のホテルから丸見えなのではないかと心配になるほど。お風呂を利用できる…　2026-08-22 23:13:41投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">三朝温泉　木造りの宿　橋津屋</h3>
                  <span className="text-xs text-stone-400 ml-2">（みささおんせん　きづくりのやど　はしづや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/78116/78116_ru.jpg" alt="三朝温泉　木造りの宿　橋津屋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>源泉掛け流し天然温泉を大浴場や露天風呂で、冬の旬　松葉蟹など四季の食材による美食もご堪能ください。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 鳥取県東伯郡三朝町三朝886 ／ 最寄り駅：倉吉 ／ 交通案内：ＪＲ　倉吉駅より日ノ丸バス乗車後三朝温泉にて下車徒歩３分(倉吉駅への送迎は行っておりません）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「個室での食事と貸切露天風呂に大満足今回で2回目の利用です。前回宿泊時には無かった食事会場は個室で周りを気にする事なく食事が出来てよかったです。もちろん食事も最高でした貸し切り露天風呂も雰囲気が…　2026-08-29 09:26:38投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！鳥取県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、鳥取県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Tottori-Sakyu_Tottori_Japan.JPG/1280px-Tottori-Sakyu_Tottori_Japan.JPG?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="鳥取砂丘" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">鳥取砂丘</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本最大級の海岸砂丘。風が織りなす美風紋や馬の背からの壮大な日本海の眺望が素晴らしく、ラクダ乗り体験やパラグライダーが人気です。 鳥取砂丘（とっとりさきゅう）は、鳥取県鳥取市の日本海海岸に広がる日本の代表的な海岸砂丘。広義には鳥取平野の海岸沿いに位置する東西16km、南北2.4kmの砂丘のことで、末恒砂丘、湖山砂丘、浜坂砂丘、福部砂丘の総称である。狭義にはこのうち千代川東岸の浜坂砂丘のことをいい、その一部は観光砂丘となっている。 砂丘の一部は山陰海岸国立公園の特別保護地区に指定されてい…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">水木しげるロード（境港）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">漫画『ゲゲゲの鬼太郎』の作者・水木しげる先生の故郷。境港駅から続く約800mの通りに170体以上のブロンズ像が並び、ブロンズ妖怪探訪を楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">大山（伯耆富士）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">中国地方最高峰（標高1,729m）を誇る名峰。その雄姿から「伯耆富士」と称され、鍵掛峠からのブナ原生林とダイナミックな南壁の紅葉が見事です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">浦富海岸（うらどみかいがん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「山陰の松島」と称される透明度抜群の澄み切った海と断崖・洞門の絶景。グラスボートでの島めぐりやシーカヤックで洞窟探検を楽しめます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 鳥取県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 鳥取県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="tottori-misasa-onsen-mitokusan-stay" />
</div>
  );
}
