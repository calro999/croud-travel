import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/three-generation-family-celebration-stay/" },
  title: "三世代旅行＆還暦・長寿祝い温泉宿：バリアフリー・個室宴会＆二間続き客室 厳選ガイド",
  description: "祖父母・両親・孫の三世代旅行＆還暦・古希・喜寿・米寿のお祝い温泉宿完全特化！車椅子対応バリアフリー客室、大人数で泊まれる二間続き・コネクティングルーム、祝い膳＆赤いちゃんちゃんこ貸出、個室宴会場付き名門旅館を徹底解説。",
  keywords: ["三世代旅行", "還暦", "長寿祝い温泉宿", "バリアフリー", "個室宴会", "二間続き客室", "温泉宿"],
  openGraph: {
    title: "三世代旅行＆還暦・長寿祝い温泉宿：バリアフリー・個室宴会＆二間続き客室 厳選ガイド",
    description: "祖父母・両親・孫の三世代旅行＆還暦・古希・喜寿・米寿のお祝い温泉宿完全特化！車椅子対応バリアフリー客室、大人数で泊まれる二間続き・コネクティングルーム、祝い膳＆赤いちゃんちゃんこ貸出、個室宴会場付き名門旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "三世代旅行＆還暦・長寿祝い温泉宿：バリアフリー・個室宴会＆二間続き客室 厳選ガイド",
    description: "祖父母・両親・孫の三世代旅行＆還暦・古希・喜寿・米寿のお祝い温泉宿完全特化！車椅子対応バリアフリー客室、大人数で泊まれる二間続き・コネクティングルーム、祝い膳＆赤いちゃんちゃんこ貸出、個室宴会場付き名門旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["three-generation-family-celebration-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for three-generation-family-celebration-stay", e);
  }
  return {};
}

export default function TargetAudienceHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "three_gen_barrier_free",
    "title": "1. バリアフリー・ユニバーサルデザイン客室（車椅子や足腰に優しい安心設計）",
    "timing": "通年（シニア世代も安心して移動できる館内動線）",
    "desc": "館内の段差を極力排除したスロープ設計やエレベーター完備。客室内も段差のないフラットフロア、手すり付きトイレ、シャワーキャリーでそのまま入れる温泉露天風呂。車椅子の無料貸出やベッド完備の和洋室。",
    "spots": "段差なしフラット和洋室、手すり付き大浴場・貸切風呂、車椅子対応トイレ、エレベーター至近客室",
    "access": "最寄り新幹線駅から車で15分以内の平坦な温泉街や大型ホテル。",
    "tip": "予約時に「足腰が不安なためエレベーターに近い客室希望」や「ベッドの高さ」を伝えておくと配慮してもらえます。"
  },
  {
    "key": "celebration_longevity_kanreki",
    "title": "2. 還暦・長寿のお祝いプラン（赤いちゃんちゃんこ・祝い膳＆記念写真サービス）",
    "timing": "通年（還暦60歳・古希70歳・喜寿77歳・傘寿80歳・米寿88歳・白寿99歳のお祝い）",
    "desc": "人生の節目を祝う記念日ステイ。各年齢に応じた色（赤・紫・黄・白）の「ちゃんちゃんこ・頭巾」無料貸出。鯛の姿焼きや赤飯がついた豪華「祝い会席」、専属スタッフによる記念写真撮影とフォトフレーム進呈。",
    "spots": "完全個室宴会場、お祝い演出（ケーキ・花束・ワイン手配）、記念写真撮影サービス",
    "access": "名門老舗旅館や高級温泉リゾート。",
    "tip": "家族水入らずで盛り上がれる「完全個室の食事処・宴会場」を確約できるプランを選ぶのが成功の秘訣です。"
  },
  {
    "key": "connecting_spacious_suite",
    "title": "3. 二間続き・コネクティング客室（プライベートを保ちながら団らんできる広々空間）",
    "timing": "通年（祖父母・両親・子供それぞれの就寝リズムに配慮）",
    "desc": "80平米〜100平米を超える広々とした二間続き客室や、隣り合う客室が内ドアで繋がるコネクティングルーム。昼間はみんなでリビングに集まり、夜は早寝の祖父母と夜更かしの子供で部屋を分けられる快適設計。",
    "spots": "二間続き和洋室、コネクティングルーム、広々リビング付き特別室、プライベートテラス",
    "access": "広大な敷地を持つ温泉リゾートや大型名門旅館。",
    "tip": "客室専用の露天風呂が付いている特別室なら、大浴場まで歩かずにいつでも好きな時に温泉を満喫できます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【三世代旅行＆還暦・長寿祝い温泉宿】バリアフリー・個室宴会＆二間続き客室 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "祖父母・両親・孫の三世代旅行＆還暦・古希・喜寿・米寿のお祝い温泉宿完全特化！車椅子対応バリアフリー客室、大人数で泊まれる二間続き・コネクティングルーム、祝い膳＆赤いちゃんちゃんこ貸出、個室宴会場付き名門旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/three-generation-family-celebration-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【三世代旅行＆還暦・長寿祝い温泉宿】バリアフリー・個室宴会＆二間続き客室 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/three-generation-family-celebration-stay/" }
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
            3-GENERATION & CELEBRATION GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「三世代旅行＆還暦・長寿祝い温泉宿」バリアフリー・個室宴会＆二間続き客室 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            おじいちゃん・おばあちゃんからお孫さんまで笑顔があふれる三世代旅行！車椅子でも安心の段差なしフラット設計、ゆったり寛げる二間続きの広々和洋室、お祝いのちゃんちゃんこや記念写真付きプランで一生の思い出を。
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

              {/* 滞在・設備・ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 充実の設備＆サービス特徴</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 おすすめエリア＆アクセス</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 失敗しない予約＆滞在のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選プラン宿</span>
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
              📊 三世代旅行＆還暦・長寿祝い温泉宿：バリアフリー・個室宴会＆二間続き客室 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「三世代旅行＆還暦・長寿祝い温泉宿：バリアフリー・個室宴会＆二間続き客室 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 信玄の湯　湯村温泉　旅館明治　太宰治ゆかりの宿</td>
                <td className="p-3 text-stone-600">山梨県甲府市湯村3-10-14</td>
                <td className="p-3 text-stone-600">甲府駅よりお車で約10分、中央自動車双葉ＩＣより約10分</td>
                <td className="p-3 text-stone-600">15台　無料　★要予約※駐車場所についてはご到着先着順です。近くの空地スペースになる場合がございます</td>
                <td className="p-3 font-bold text-amber-600">★4.43（132件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196489%2F196489.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 嬉野温泉　割烹旅館　鯉登苑（りとうえん）</td>
                <td className="p-3 text-stone-600">佐賀県嬉野市嬉野町岩屋川内甲437</td>
                <td className="p-3 text-stone-600">嬉野ICより車で約５分、嬉野温泉駅から約１０分</td>
                <td className="p-3 text-stone-600">有り　25台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.37（285件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,130〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F80886%2F80886.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 伊香保温泉　森秋旅館</td>
                <td className="p-3 text-stone-600">群馬県渋川市伊香保町伊香保60</td>
                <td className="p-3 text-stone-600">渋川駅周辺</td>
                <td className="p-3 text-stone-600">有（無料）</td>
                <td className="p-3 font-bold text-amber-600">★4.26（2256件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17741%2F17741.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 赤穂温泉　料理旅館　呑海楼</td>
                <td className="p-3 text-stone-600">兵庫県赤穂市御崎131</td>
                <td className="p-3 text-stone-600">播州赤穂駅周辺</td>
                <td className="p-3 text-stone-600">有り　２５台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.49（763件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,100〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F147688%2F147688.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 赤穂温泉　絶景露天風呂の宿　銀波荘</td>
                <td className="p-3 text-stone-600">山梨県</td>
                <td className="p-3 text-stone-600">JR山陽本線・播州赤穂駅より路線バス約20分「御崎バス停」より徒歩1分</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.45（1381件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F19403%2F19403.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 湯田川温泉　つかさや旅館</td>
                <td className="p-3 text-stone-600">山梨県</td>
                <td className="p-3 text-stone-600">ＪＲ　鶴岡駅よりタクシーにて２０分／バスにて３０分　庄内空港より車30</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.83（104件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,350〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F79497%2F79497.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">信玄の湯　湯村温泉　旅館明治　太宰治ゆかりの宿</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/196489/196489.jpg" alt="信玄の湯　湯村温泉　旅館明治　太宰治ゆかりの宿 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2025年8月1日新規オープン！信玄の湯とこだわりの朝ごはんで心ほぐれるひと時を。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山梨県甲府市湯村3-10-14 ／ 最寄り駅：主要駅 ／ 交通案内：甲府駅よりお車で約10分、中央自動車双葉ＩＣより約10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>15台　無料　★要予約※駐車場所についてはご到着先着順です。近くの空地スペースになる場合がございます</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温泉と朝食に大満足、ゆっくり過ごせた温泉も大変よくまた朝の朝食も大変美味しく頂きました。本当にゆっくり出来るお宿でした。またお泊りしたいです。クチコミの詳細はこちらから　https://rev…　2026-09-08 06:39:26投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">嬉野温泉　割烹旅館　鯉登苑（りとうえん）</h3>
                  <span className="text-xs text-stone-400 ml-2">（うれしのおんせん　かっぽうりょかん　りとうえん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,130〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/80886/80886_dai.jpg" alt="嬉野温泉　割烹旅館　鯉登苑（りとうえん） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【総合★4.5】趣異なる全10室の料理旅館。日本三大美肌の湯嬉野温泉と絶品料理で心を満たす滞在を</p>
                  <p><strong>【所在地・アクセス】</strong>〒 佐賀県嬉野市嬉野町岩屋川内甲437 ／ 最寄り駅：主要駅 ／ 交通案内：嬉野ICより車で約５分、嬉野温泉駅から約１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　25台　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.46 ／ 立地 ★4.15 ／ 部屋 ★4.45 ／ 設備 ★4.33 ／ 風呂 ★4.51 ／ 食事 ★4.59</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「夕食は量が多く、朝食の方がバランス良好夕食については食事の量が大変多く食べきれないぐらいありましたが、内容については 特筆するものはなかったと思います。朝食の方がバランスが取れてて良かったと思…　2026-09-08 16:16:36投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊香保温泉　森秋旅館</h3>
                  <span className="text-xs text-stone-400 ml-2">（いかほおんせん　もりあきりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/17741/17741_rote.jpg" alt="伊香保温泉　森秋旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★名湯「黄金の湯」源泉掛け流しが自慢の宿♪ ★観光名所「石段街」まで徒歩３分♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 群馬県渋川市伊香保町伊香保60 ／ 最寄り駅：渋川 ／ 交通案内：ＪＲ渋川駅下車バスで25分！新宿から高速バスで2時間半！伊香保の名物石段街から徒歩３分と好立地♪散策に抜群の好立地</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有（無料）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「石段への好立地とスタッフの温かいおもてなし伊香保温泉の石段までのアクセスが近く初めての伊香保温泉観光を満喫出来ました。お料理も美味しくて何よりスタッフの方のおもてなしは素晴らしかったです。リピ…　2026-08-21 19:19:03投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">赤穂温泉　料理旅館　呑海楼</h3>
                  <span className="text-xs text-stone-400 ml-2">（あこうおんせん　りょうりりょかん　どんかいろう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,100〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/147688/147688_kan1.jpg" alt="赤穂温泉　料理旅館　呑海楼 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>美しい瀬戸内海を望む全室オーシャンビュー赤穂温泉の宿。趣向を凝らした料理と絶景露天風呂を是非。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県赤穂市御崎131 ／ 最寄り駅：播州赤穂 ／ 交通案内：ＪＲ　播州赤穂駅よりお車にて約１０分（無料送迎バス有り）。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２５台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.55 ／ 立地 ★4.63 ／ 部屋 ★4.49 ／ 設備 ★4.28 ／ 風呂 ★4.45 ／ 食事 ★4.59</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「瀬戸内の絶景と清潔な館内、温泉に癒される旅播州赤穂温泉に予定して瀬戸内を望む旅館で呑海楼に決めました!大きな客室からは壮大な海の景色で天候に恵まれて綺麗な風景に癒されました^^古い旅館と仰…　2026-10-09 11:02:24投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">赤穂温泉　絶景露天風呂の宿　銀波荘</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/19403/19403.jpg" alt="赤穂温泉　絶景露天風呂の宿　銀波荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：JR山陽本線・播州赤穂駅より路線バス約20分「御崎バス停」より徒歩1分・無料送迎あり／山陽自動車道・赤穂ＩＣより約10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/19403?reviewId=33123479420008　2026-09-17 15:34:16投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湯田川温泉　つかさや旅館</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,350〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/79497/79497.jpg" alt="湯田川温泉　つかさや旅館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ　鶴岡駅よりタクシーにて２０分／バスにて３０分　庄内空港より車30分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「絶景のロケーションとおもてなしに心から癒やされました。」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！山梨県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、山梨県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">富士山（吉田ルート/五合目）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本の最高峰であり世界文化遺産の象徴。富士スバルラインで行く五合目は観光施設が充実し、眼下に雲海を望む圧巻のスタート地点です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">新倉山浅間公園（忠霊塔）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">五重塔（忠霊塔）越しに雄大な富士山と満開の桜を一望できる、世界中の観光客が熱望する「これぞ日本」という究極のアジアンビジュアルスポット。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">富士五湖（河口湖）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富士山の北麓に位置する静かな湖畔リゾート。四季折々の富士山が水面に映る「逆さ富士」や、大石公園のコキア・ラベンダー越しのアングルが人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">勝沼ぶどうの丘</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本有数のワイン産地・勝沼の高台に立つ総合ワインリゾート。タパスとともに100種類以上の甲州ワインを試飲できる地下ワインカーヴが魅力です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 山梨県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 山梨県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="three-generation-family-celebration-stay" />
</div>
  );
}
