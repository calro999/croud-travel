import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/dog-room-dining-special-course-hotel-stay/" },
  title: "愛犬同伴OK・お部屋食＆愛犬用特製フルコース宿：無添加ごちそう＆記念日 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "愛犬も一緒にお祝いする美食の旅！愛犬用特製フルコース＆お部屋食・レストラン同伴宿完全特化！獣医師・ペット栄養管理士監修の無添加ワンちゃんごはん、バースデーケーキ、飼い主用極上会席・フレンチディナー宿を徹底解説。",
  keywords: ["愛犬同伴OK", "お部屋食", "愛犬用特製フルコース宿", "無添加ごちそう", "記念日", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "愛犬同伴OK・お部屋食＆愛犬用特製フルコース宿：無添加ごちそう＆記念日 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "愛犬も一緒にお祝いする美食の旅！愛犬用特製フルコース＆お部屋食・レストラン同伴宿完全特化！獣医師・ペット栄養管理士監修の無添加ワンちゃんごはん、バースデーケーキ、飼い主用極上会席・フレンチディナー宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "愛犬同伴OK・お部屋食＆愛犬用特製フルコース宿：無添加ごちそう＆記念日 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "愛犬も一緒にお祝いする美食の旅！愛犬用特製フルコース＆お部屋食・レストラン同伴宿完全特化！獣医師・ペット栄養管理士監修の無添加ワンちゃんごはん、バースデーケーキ、飼い主用極上会席・フレンチディナー宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["dog-room-dining-special-course-hotel-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for dog-room-dining-special-course-hotel-stay", e);
  }
  return {};
}

export default function PetDogResortHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "dog_gourmet_room_dining_stay",
    "title": "1. お部屋食確約旅館（他のワンちゃんが苦手な子も安心の完全個室）",
    "timing": "通年（周囲に気兼ねなくゆっくり味わう温泉会席）",
    "desc": "朝夕ともにお部屋出しされる温泉旅館。他の犬や宿泊者と接触することがないため、臆病なワンちゃんや高齢犬でもストレスフリー。料理長が腕を振るう旬の会席料理と、愛犬用の茹で鶏ササミや温野菜プレート。",
    "spots": "伊豆修善寺温泉、鬼怒川温泉、鳥羽温泉郷、有馬温泉の愛犬同伴老舗旅館",
    "access": "各温泉地。",
    "tip": "お部屋食プランなら、食事中も愛犬をケージに入れる必要がなく、座布団の上でくつろぐ愛犬の様子を見守りながら食事を楽しめます。"
  },
  {
    "key": "dog_course_dining_luxury_hotel",
    "title": "2. 愛犬同伴専用レストラン（フレンチ・イタリアンの愛犬専用フルコース）",
    "timing": "通年（愛犬用カート貸出・リードフック完備）",
    "desc": "愛犬と一緒にテーブル席で食事ができる専用ダイニング。ペット栄養管理士が監修した「エゾ鹿肉のロースト」「馬肉のタルタル」「米粉のパン」。飼い主には本格的なフレンチフルコースや鉄板焼きディナー。",
    "spots": "レジーナリゾート（富士・軽井沢・箱根・鴨川・蓼科）、ホテルフォレストヒルズ那須、ルシアン旧軽井沢",
    "access": "主要リゾート地。",
    "tip": "「レジーナリゾート」各施設では、レストラン内に愛犬用バギーが用意されており、大型犬から小型犬まで落ち着いて一緒にディナーを堪能できます。"
  },
  {
    "key": "dog_birthday_anniversary_resort",
    "title": "3. 愛犬のアニバーサリープラン（無添加特製ドッグケーキ＆記念撮影）",
    "timing": "通年（愛犬の誕生日・うちの子記念日）",
    "desc": "米粉とサツマイモ、豆乳クリームで作られた無添加の愛犬専用アニバーサリーケーキ。ネームプレート付き。プロカメラマンによる記念撮影や、特製フォトフレームのプレゼント特典。愛犬用のおしゃれなアメニティギフト。",
    "spots": "キサラピア・愛犬記念日リゾート、Wan's Resort（山中湖・城ヶ崎）、CARO FORESTA",
    "access": "富士五湖・伊豆・那須エリア。",
    "tip": "バースデープランを予約すると、スタッフ一同からの温かいバースデーカードや記念写真のプレゼントがあり、一生の思い出に残る家族旅行になります。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【愛犬同伴OK・お部屋食＆愛犬用特製フルコース宿】無添加ごちそう＆記念日 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "愛犬も一緒にお祝いする美食の旅！愛犬用特製フルコース＆お部屋食・レストラン同伴宿完全特化！獣医師・ペット栄養管理士監修の無添加ワンちゃんごはん、バースデーケーキ、飼い主用極上会席・フレンチディナー宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/dog-room-dining-special-course-hotel-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【愛犬同伴OK・お部屋食＆愛犬用特製フルコース宿】無添加ごちそう＆記念日 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/dog-room-dining-special-course-hotel-stay/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-emerald-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-amber-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-yellow-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            DOG GOURMET DINING GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「愛犬同伴OK・お部屋食＆愛犬用特製フルコース宿」無添加ごちそう＆記念日 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            旅行中もずっと一緒、食事の時間も離れない！「愛犬同伴お部屋食＆愛犬用フルコース宿」。お部屋食または愛犬同伴専用ダイニング。獣医師監修の厳選鹿肉や温野菜プレート。愛犬の誕生日や記念日を祝う特製ドッグケーキ付きプランへ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆厳選宿 */}
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
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    🐾 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめスポット＆お散歩エリア</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                  <span className="font-bold text-emerald-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-1.5">
                  <span className="font-bold text-orange-950 block text-[11px]">💡 愛犬と快適に過ごすコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選ドッグフレンドリー宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの愛犬同伴厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    愛犬歓迎宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-emerald-700 hover:from-amber-500 hover:to-emerald-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで愛犬同伴プランを見る
                        </a>
                      </div>
                    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 愛犬同伴OK・お部屋食＆愛犬用特製フルコース宿：無添加ごちそう＆記念日 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「愛犬同伴OK・お部屋食＆愛犬用特製フルコース宿：無添加ごちそう＆記念日 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ラ・ドッグリゾート　伊豆高原　全室露天付き客室と部屋食の愛犬の宿</td>
                <td className="p-3 text-stone-600">静岡県伊東市八幡野1254-25</td>
                <td className="p-3 text-stone-600">伊豆高原駅周辺</td>
                <td className="p-3 text-stone-600">有り　14台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.76（77件）</td>
                <td className="p-3 font-bold text-rose-600">¥43,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183473%2F183473.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 愛犬と泊まれる海と夕陽の楽園　頬杖の刻</td>
                <td className="p-3 text-stone-600">静岡県伊豆市小土肥309-1</td>
                <td className="p-3 text-stone-600">修善寺駅より東海バスで土肥・松崎行</td>
                <td className="p-3 text-stone-600">有り　１０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.3（802件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F137970%2F137970.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 静かな湖畔の愛犬同伴専門宿「ペロはまなこ」</td>
                <td className="p-3 text-stone-600">静岡県湖西市新所5957-6</td>
                <td className="p-3 text-stone-600">鷲津駅周辺</td>
                <td className="p-3 text-stone-600">有り　１0台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.41（113件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F129403%2F129403.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 伊勢二見　愛犬と泊まれる旅館　まつしん</td>
                <td className="p-3 text-stone-600">三重県伊勢市二見町茶屋５７０－３</td>
                <td className="p-3 text-stone-600">二見浦駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.17（726件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7564%2F7564.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 下田温泉　黒船ホテル</td>
                <td className="p-3 text-stone-600">静岡県下田市柿崎3-8</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">当館の駐車場は建物の地下部分にございます。(高さ制限2.3ｍ/狭めのスペース/台数制限有り/無料)</td>
                <td className="p-3 font-bold text-amber-600">★4.21（2266件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,165〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1307%2F1307.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. Ｈｏｔｅｌ　Ｓｅａ　Ｓｈｅｌｌ</td>
                <td className="p-3 text-stone-600">静岡県下田市白浜1755</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">有り　室数分　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.35（137件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142536%2F142536.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ラ・ドッグリゾート　伊豆高原　全室露天付き客室と部屋食の愛犬の宿</h3>
                  <span className="text-xs text-stone-400 ml-2">（ら　どっぐりぞーと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥43,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/183473/183473.jpg" alt="ラ・ドッグリゾート　伊豆高原　全室露天付き客室と部屋食の愛犬の宿 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【全室露天風呂付・お部屋食】愛犬とゆっくりくつろげる伊豆高原のドッグリゾート</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊東市八幡野1254-25 ／ 最寄り駅：伊豆高原 ／ 交通案内：伊豆高原駅よりタクシーで10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　14台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋は清潔で食事も美味しく大満足部屋も清潔で匂いもせず、ご飯も美味しくて満足でしたクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hot…　2026-08-26 12:30:39投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">愛犬と泊まれる海と夕陽の楽園　頬杖の刻</h3>
                  <span className="text-xs text-stone-400 ml-2">（あいけんととまれるうみとゆうひのらくえん　ほおづえのとき）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/137970/137970_kya.jpg" alt="愛犬と泊まれる海と夕陽の楽園　頬杖の刻 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>オーシャンビューのテラスから海と夕日を一望。全10室の温泉露天風呂付客室で日常の疲れを癒す至福の刻</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県伊豆市小土肥309-1 ／ 最寄り駅：主要駅 ／ 交通案内：修善寺駅より東海バスで土肥・松崎行</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「愛犬と一緒に絶景を眺めて楽しいひととき愛犬と泊まることができて、景色もきれいで、とても楽しい時間を過ごせました!クチコミの詳細はこちらから　https://review.travel.raku…　2026-08-18 21:03:39投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">静かな湖畔の愛犬同伴専門宿「ペロはまなこ」</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぺろはまなこ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/129403/129403_kya.jpg" alt="静かな湖畔の愛犬同伴専門宿「ペロはまなこ」 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>浜名湖随一の絶景パノラマロケーション！ワンちゃんの為に設備された、浜名湖ドッグリゾートです。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県湖西市新所5957-6 ／ 最寄り駅：鷲津 ／ 交通案内：東名高速道路・三ケ日ＩＣから約20分　ＪＲ東海道線・鷲津駅よりお車で約10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１0台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事もドッグランも大満足、愛犬と楽しめた夕食、朝食ともにボリュームがすごいだけでなく、とても美味しい食事でした。アメニティやペット用のグッズもちゃんと準備され、ドッグランも楽しめました。ベッドが柔…　2026-08-13 08:26:16投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=129403&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">伊勢二見　愛犬と泊まれる旅館　まつしん</h3>
                  <span className="text-xs text-stone-400 ml-2">（あいけんととまれるりょかん　まつしん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7564/7564_room.jpg" alt="伊勢二見　愛犬と泊まれる旅館　まつしん 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【伊勢神宮へ車20分】☆ペットと泊まれる宿☆看板犬がお出迎え♪展望風呂より夫婦岩を眺める☆</p>
                  <p><strong>【所在地・アクセス】</strong>〒 三重県伊勢市二見町茶屋５７０－３ ／ 最寄り駅：二見浦 ／ 交通案内：伊勢自動車道経由伊勢二見鳥羽ライン二見ＩＣより５分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「夕食は豪華でロケーション最高、愛犬も大満足夕食が食べきれないくらいでお腹いっぱいになりました!お風呂と部屋が普通すぎるくらい普通でした。夫婦岩が部屋から見えてロケーションは最高でしたがクー…　2026-08-29 11:05:38投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">下田温泉　黒船ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（しもだおんせん　くろふねほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,165〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1307/1307_heya.jpg" alt="下田温泉　黒船ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【全室オーシャンビュー】離れや客室露天風呂、プールをご堪能。伊豆・下田温泉の味覚に舌鼓。ペット可！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県下田市柿崎3-8 ／ 最寄り駅：伊豆急下田 ／ 交通案内：伊豆急線「伊豆急下田駅」から徒歩13分、タクシーで3分。 車で沼津から当館まで伊豆縦貫道で90分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>当館の駐車場は建物の地下部分にございます。(高さ制限2.3ｍ/狭めのスペース/台数制限有り/無料)</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事の種類も味も最高、また行きたい!夕食、朝食共にご飯が全て美味しかったです!種類も多く本当にまだまだ食べたいと思うほど美味しくて大満足でした!毎年伊豆には行き、いろんなところに泊まり美味しい…　2026-08-29 21:17:15投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">Ｈｏｔｅｌ　Ｓｅａ　Ｓｈｅｌｌ</h3>
                  <span className="text-xs text-stone-400 ml-2">（ほてる　しーしぇる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/142536/142536_kya.jpg" alt="Ｈｏｔｅｌ　Ｓｅａ　Ｓｈｅｌｌ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全室オーシャンビューのゲストルーム。 東京から2時間のリゾート</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県下田市白浜1755 ／ 最寄り駅：伊豆急下田 ／ 交通案内：伊豆急下田駅よりバスにて15分。白浜神社前下車</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　室数分　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「・車で行く人は結構道が狭いです。・歩きの方は坂がとにかくきついので注意が必要です。・ホテル内にエレベーターはありません。それでも素晴らしいホテルでした。おもてなしも素敵でしたし、客…　2026-08-04 07:40:01投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！静岡県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、静岡県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">三島スカイウォーク</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本一長い歩行者専用吊り橋（全長400m）。富士山と駿河湾のパノラマ絶景を空中散歩感覚で楽しめ、ジップラインなどのアクティビティも充実しています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">熱海温泉・サンビーチ</h3>
                <p className="text-xs text-stone-600 leading-relaxed">都心からのアクセスが抜群な海辺の温泉リゾート。地中海リゾートを彷彿とさせるサンビーチや年間を通して開催される熱海海上花火大会が人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">伊豆シャボテン動物公園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">1,500種類のサボテンと世界中の動物たちが暮らすテーマパーク。冬限定の「元祖カピバラの露天風呂」の癒やされる姿は全国的に有名です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">白糸の滝</h3>
                <p className="text-xs text-stone-600 leading-relaxed">富士山の湧水が幅150mの湾曲した絶壁から千本の絹糸のように流れ落ちる国指定の名勝・天然記念物。清涼なマイナスイオンと富士の恵みを体感できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 静岡県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 静岡県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="dog-room-dining-special-course-hotel-stay" />
</div>
  );
}
