import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/girls-trip-spa-afternoontea-stay/" },
  title: "大人の女子旅・ご褒美温泉：極上スパエステ・アフタヌーンティー＆美肌宿 厳選ガイド",
  description: "女性同士のご褒美旅行完全特化！高級オーガニックスパエステ、ウェルカムアフタヌーンティー、選べる色浴衣、Refaやダイソンなど高級美容家電完備、絶景インフィニティラウンジと美肌会席宿を徹底解説。",
  keywords: ["大人の女子旅", "ご褒美温泉", "極上スパエステ", "アフタヌーンティー", "美肌宿", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "大人の女子旅・ご褒美温泉：極上スパエステ・アフタヌーンティー＆美肌宿 厳選ガイド",
    description: "女性同士のご褒美旅行完全特化！高級オーガニックスパエステ、ウェルカムアフタヌーンティー、選べる色浴衣、Refaやダイソンなど高級美容家電完備、絶景インフィニティラウンジと美肌会席宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "大人の女子旅・ご褒美温泉：極上スパエステ・アフタヌーンティー＆美肌宿 厳選ガイド",
    description: "女性同士のご褒美旅行完全特化！高級オーガニックスパエステ、ウェルカムアフタヌーンティー、選べる色浴衣、Refaやダイソンなど高級美容家電完備、絶景インフィニティラウンジと美肌会席宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["girls-trip-spa-afternoontea-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for girls-trip-spa-afternoontea-stay", e);
  }
  return {};
}

export default function TargetAudienceHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "girls_spa_aesthetic_resort",
    "title": "1. 本格オーガニックスパ＆極上トリートメント（全身を解きほぐすアロマテラピー）",
    "timing": "通年（週末のデトックス＆リラクゼーション）",
    "desc": "厳選されたオーガニック精油や国産ハーブを使用したサロン品質のスパトリートメント。二人同時に施術を受けられるペアルームや、美肌温泉とサウナで身体を温めた後のディープクレンジングフェイシャル＆ボディ。",
    "spots": "ホテル直営スパサロン、アロマミストサウナ、デトックスハーブティーラウンジ、岩盤浴",
    "access": "箱根、軽井沢、伊豆、熱海、京都など景観の美しいリゾート地。",
    "tip": "施術前に入浴して血行を促進しておくと、アロマオイルの浸透率とリラクゼーション効果が劇的に高まります。"
  },
  {
    "key": "afternoon_tea_lounge_stay",
    "title": "2. アフタヌーンティー＆宿泊者専用ラウンジ（優雅なティースタンドとワインフリーフロー）",
    "timing": "通年（チェックイン直後の贅沢なティータイム）",
    "desc": "パティシエ特製の三段ティースタンドで提供されるウェルカムアフタヌーンティー。宿泊者専用ラウンジでのスパークリングワインやクラフト生ビール、ハーブティー、フィンガーフードの無料フリーフロー。",
    "spots": "展望ティーラウンジ、暖炉テラス、ライブラリーカフェ、ナイトバータイム",
    "access": "洗練されたデザインホテルやラグジュアリー旅館。",
    "tip": "チェックイン開始時間（14時〜15時）に合わせて早めに到着し、優雅なアフタヌーンティーを堪能するのがおすすめです。"
  },
  {
    "key": "beauty_amenity_yukata_stay",
    "title": "3. 高級美容家電＆選べる色浴衣（ReFa・ダイソン完備と映える女子旅フォト）",
    "timing": "通年（SNS映えするお洒落な空間とヘアケア体験）",
    "desc": "ReFa（リファ）のシャワーヘッドやドライヤー・ヘアアイロン、Dysonの最新機器が客室にフル完備。数十種類から選べる色浴衣や帯、ロクシタンやTHREEのスキンケアアメニティ。夜はお部屋でゆったりおしゃべり。",
    "spots": "選べる色浴衣コーナー、パウダールーム、インスタ映えテラス、オーガニックアメニティバー",
    "access": "温泉街中心部のお洒落なデザイナーズ旅館。",
    "tip": "色浴衣を着て温泉街のカフェ巡りや足湯散策に出かけると、素敵な旅の写真がたくさん残せます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【大人の女子旅・ご褒美温泉】極上スパエステ・アフタヌーンティー＆美肌宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "女性同士のご褒美旅行完全特化！高級オーガニックスパエステ、ウェルカムアフタヌーンティー、選べる色浴衣、Refaやダイソンなど高級美容家電完備、絶景インフィニティラウンジと美肌会席宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/girls-trip-spa-afternoontea-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【大人の女子旅・ご褒美温泉】極上スパエステ・アフタヌーンティー＆美肌宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/girls-trip-spa-afternoontea-stay/" }
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
            LUXURY GIRLS RETREAT GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「大人の女子旅・ご褒美温泉」極上スパエステ・アフタヌーンティー＆美肌宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日常の忙しさを忘れて自分を解き放つ大人の女子旅！ウェルカムスイーツとアフタヌーンティーで迎えられ、極上のアロマスパで至福のデトックス。Refaドライヤーや高級アメニティが揃う洗練された美の隠れ家へ。
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
              📊 大人の女子旅・ご褒美温泉：極上スパエステ・アフタヌーンティー＆美肌宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「大人の女子旅・ご褒美温泉：極上スパエステ・アフタヌーンティー＆美肌宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ホテル　ラ・スイート神戸ハーバーランド</td>
                <td className="p-3 text-stone-600">兵庫県神戸市中央区波止場町7-2</td>
                <td className="p-3 text-stone-600">神戸（兵庫）駅周辺</td>
                <td className="p-3 text-stone-600">57台(屋内46台、屋外11台) 1000円/泊</td>
                <td className="p-3 font-bold text-amber-600">★4.73（1809件）</td>
                <td className="p-3 font-bold text-rose-600">¥12,130〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F104705%2F104705.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 洞窟風呂の宿　百楽荘</td>
                <td className="p-3 text-stone-600">石川県鳳珠郡能登町越坂11-34</td>
                <td className="p-3 text-stone-600">九十九湾小木駅周辺</td>
                <td className="p-3 text-stone-600">有り　２５台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.73（2657件）</td>
                <td className="p-3 font-bold text-rose-600">¥19,470〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F11228%2F11228.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 山翠楼SANSUIROU</td>
                <td className="p-3 text-stone-600">神奈川県足柄下郡湯河原町宮上673</td>
                <td className="p-3 text-stone-600">湯河原駅周辺</td>
                <td className="p-3 text-stone-600">有り　30台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.28（526件）</td>
                <td className="p-3 font-bold text-rose-600">¥23,485〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28467%2F28467.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. ホテル金沢</td>
                <td className="p-3 text-stone-600">兵庫県</td>
                <td className="p-3 text-stone-600">金沢駅の兼六園口（東口）から徒歩約１分。小松空港からリムジンバスで４０</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.47（1681件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,450〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F1371%2F1371.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ｎｏｌ　ｈａｋｏｎｅ　ｍｙｏｊｉｎｄａｉ</td>
                <td className="p-3 text-stone-600">神奈川県足柄下郡箱根町宮城野1488-205</td>
                <td className="p-3 text-stone-600">箱根湯本駅周辺</td>
                <td className="p-3 text-stone-600">無料　屋外駐車場　39台</td>
                <td className="p-3 font-bold text-amber-600">★4.61（39件）</td>
                <td className="p-3 font-bold text-rose-600">¥16,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188264%2F188264.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 白浜古賀の井リゾート＆スパ</td>
                <td className="p-3 text-stone-600">和歌山県西牟婁郡白浜町3212-1</td>
                <td className="p-3 text-stone-600">白浜駅周辺</td>
                <td className="p-3 text-stone-600">110台（無料）</td>
                <td className="p-3 font-bold text-amber-600">★4.42（5796件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F18253%2F18253.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル　ラ・スイート神戸ハーバーランド</h3>
                  <span className="text-xs text-stone-400 ml-2">（ら・すいーとこうべはーばーらんど）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥12,130〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/104705/104705_spa.jpg" alt="ホテル　ラ・スイート神戸ハーバーランド 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全64室が70㎡以上の大型ジャグジー＆テラス付オーシャンンビュールームのラグジュアリーホテル。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県神戸市中央区波止場町7-2 ／ 最寄り駅：神戸（兵庫） ／ 交通案内：JR「神戸駅」より徒歩約10分／地下鉄海岸線「みなと元町駅」より徒歩約4分／阪神高速3号神戸線「京橋出入口」より車約5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>57台(屋内46台、屋外11台) 1000円/泊</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの温かい対応と夜景に家族全員大満足妻と1歳5ヶ月になる娘の家族3人で宿泊させてもらいました。良く歩き回る娘に対してもスタッフの皆様は温かく対応してくださり、おかげさまで終始笑顔な娘でした。…　2026-08-27 02:10:22投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=104705&quot; class=&quot;3click&quot;」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">洞窟風呂の宿　百楽荘</h3>
                  <span className="text-xs text-stone-400 ml-2">（どうくつぶろのやど　ひゃくらくそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥19,470〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/11228/11228_s.jpg" alt="洞窟風呂の宿　百楽荘 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>静けさと、どこか懐かしい風景に心休まる。緑と海に囲まれた岬の一軒宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県鳳珠郡能登町越坂11-34 ／ 最寄り駅：九十九湾小木 ／ 交通案内：金沢駅から車で2時間半　金沢駅バスで3時間半　能登空港からタクシーで30分／バス停「九十九湾」送迎有り（要予約）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２５台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「家族旅行今回6名の家族旅行で利用しました。丁寧な接客で気持ち良く過ごすことが出来ました。料理は美味しく朝食のプリンに子供たちは大喜び。洞窟風呂と貸切り風呂に妻も大喜びでした。フロント近…　2026-08-21 19:45:09投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">山翠楼SANSUIROU</h3>
                  <span className="text-xs text-stone-400 ml-2">（さんすいろう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥23,485〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/28467/28467_heya.jpg" alt="山翠楼SANSUIROU 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>奥湯河原温泉の雄大な自然を270度満喫できる【展望露天風呂】が自慢。個室食事処で四季折々の会席が魅力</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県足柄下郡湯河原町宮上673 ／ 最寄り駅：湯河原 ／ 交通案内：お車の場合、西湘ＢＰ石橋ＩＣより真鶴道路経由約３５分。電車の場合湯河原駅より奥湯河原行きバスで終点奥湯河原下車徒歩1分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　30台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「すべてが素晴らしく、何度もリピート中!お料理、お風呂、お部屋、接客、すべて素晴らしくてリピートしてます!他の画像やクチコミの詳細はこちらから　https://review.travel.rak…　2026-08-22 21:14:39投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル金沢</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,450〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/1371/1371.jpg" alt="ホテル金沢 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：金沢駅の兼六園口（東口）から徒歩約１分。小松空港からリムジンバスで４０分。北陸自動車道の金沢東インターから車で１０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅前でロケーション最高、朝食も絶品名門ホテルという感じです。スタッフの皆さんは対応はいいと思います。駅前なのでロケーションは最高でした。外観とは違い部屋内も綺麗なため過ごしやすいと思います。朝食ビ…　2026-09-17 08:09:30投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ｎｏｌ　ｈａｋｏｎｅ　ｍｙｏｊｉｎｄａｉ</h3>
                  <span className="text-xs text-stone-400 ml-2">（のる　はこね　みょうじんだい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥16,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/188264/188264.jpg" alt="ｎｏｌ　ｈａｋｏｎｅ　ｍｙｏｊｉｎｄａｉ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>～自分らしく過ごす～もう一つの日常を当ホテルで体験。新しく生まれ変わった朝食で彩り豊かな朝を。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 神奈川県足柄下郡箱根町宮城野1488-205 ／ 最寄り駅：箱根湯本 ／ 交通案内：箱根湯本駅よりお車にて約20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料　屋外駐車場　39台</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「清潔で快適な空間、また伺いたい清潔てま快適に過ごせます。また伺いたいです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/v…　2026-08-15 11:40:12投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">白浜古賀の井リゾート＆スパ</h3>
                  <span className="text-xs text-stone-400 ml-2">（しらはまこがのいりぞーとあんどすぱ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/18253/18253_onsen.jpg" alt="白浜古賀の井リゾート＆スパ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全室オーシャンビュー。ビュッフェが大好評！水盤に浮かぶような露天風呂で贅沢なリゾートステイを。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 和歌山県西牟婁郡白浜町3212-1 ／ 最寄り駅：白浜 ／ 交通案内：JR白浜駅から車で約10分※無料送迎バス運行中／南紀白浜空港から車で約8分／大阪から車で阪和道南紀田辺IC経由で約2時間</p>
                  <p><strong>【駐車場・マイカー利用】</strong>110台（無料）</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.46 ／ 立地 ★4.5 ／ 部屋 ★4.42 ／ 設備 ★4.31 ／ 風呂 ★4.46 ／ 食事 ★4.49</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「イルミネーションと眺望が最高、子供も安心イルミネーションされていてとても綺麗でした部屋からの眺めも辺り見渡せて最高でした子供も安心して遊べるお部屋でしたクチコミの詳細はこちらから　ht…　2026-10-10 16:56:20投稿」
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
          href="/prefectures"
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="girls-trip-spa-afternoontea-stay" />
</div>
  );
}
