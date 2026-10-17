import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/shizuoka-izu-shimoda-beach-stay/" },
  title: "静岡・伊豆下田＆白浜海岸：エメラルドの海・白浜大浜＆金目鯛水揚げ日本一宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "南伊豆・下田エリア完全特化！透明度抜群の「白浜大浜海水浴場」、ペリーロードのなまこ壁、下田海中水族館、下田ロープウェイ寝姿山、水揚げ日本一の下田港「金目鯛づくし会席」と絶景オーシャンビュー温泉旅館を徹底解説。",
  keywords: ["静岡", "伊豆下田", "白浜海岸", "エメラルドの海", "白浜大浜", "金目鯛水揚げ日本一宿", "温泉宿"],
  openGraph: {
    title: "静岡・伊豆下田＆白浜海岸：エメラルドの海・白浜大浜＆金目鯛水揚げ日本一宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "南伊豆・下田エリア完全特化！透明度抜群の「白浜大浜海水浴場」、ペリーロードのなまこ壁、下田海中水族館、下田ロープウェイ寝姿山、水揚げ日本一の下田港「金目鯛づくし会席」と絶景オーシャンビュー温泉旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "静岡・伊豆下田＆白浜海岸：エメラルドの海・白浜大浜＆金目鯛水揚げ日本一宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "南伊豆・下田エリア完全特化！透明度抜群の「白浜大浜海水浴場」、ペリーロードのなまこ壁、下田海中水族館、下田ロープウェイ寝姿山、水揚げ日本一の下田港「金目鯛づくし会席」と絶景オーシャンビュー温泉旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shizuoka-izu-shimoda-beach-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shizuoka-izu-shimoda-beach-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shimoda_shirahama_beach",
    "title": "1. 白浜海岸〜外浦・爪木崎（沖縄に匹敵する透明度のビーチと野水仙の群生）",
    "timing": "通年（夏の海水浴・冬の12月〜1月爪木崎水仙まつり・サーフィン）",
    "desc": "白い砂浜とエメラルドグリーンの海が700m続く「白浜大浜海水浴場」。波が穏やかでプライベート感ある「外浦海岸」。爪木崎岬に咲き乱れる約300万本の野水仙と白亜の爪木崎灯台。",
    "spots": "白浜大浜海水浴場、白浜神社（海上の鳥居）、爪木崎（水仙群生地・俵磯の柱状節理）、外浦海岸",
    "access": "伊豆急行線「伊豆急下田駅」より東海バス「白浜海岸行き」で約15分。東京駅から特急「サフィール踊り子」直通約2時間40分。",
    "tip": "白浜神社の海岸にある「明神鳥居」は、青い海と白い波を背景に鳥居が立つ絶好のフォトスポットです。"
  },
  {
    "key": "shimoda_perry_road_walk",
    "title": "2. ペリーロード〜下田海中水族館・寝姿山（黒船来航の歴史となまこ壁の小径）",
    "timing": "通年（歴史散歩とお洒落な古民家カフェめぐり）",
    "desc": "平滑川沿いに石畳となまこ壁・伊豆石の古民家が並ぶ「ペリーロード」。自然の入り江を利用した「下田海中水族館」でのイルカふれあい。「下田ロープウェイ」で登る寝姿山山頂からの下田港パノラマビュー。",
    "spots": "ペリーロード、了仙寺（日米和親条約交渉の地）、下田海中水族館、下田ロープウェイ（寝姿山自然公園・THE ROYAL HOUSE）",
    "access": "伊豆急下田駅より徒歩約10〜15分。",
    "tip": "寝姿山山頂にあるレストラン「THE ROYAL HOUSE」は、水戸岡鋭治氏デザインの組子細工が美しい絶景カフェです。"
  },
  {
    "key": "shimoda_kinmedai_luxury",
    "title": "3. 下田港直送「金目鯛づくし」＆伊豆の地魚（水揚げ日本一の秘伝煮付け）",
    "timing": "通年（冬〜春の脂がのった寒金目鯛）",
    "desc": "日本一の金目鯛水揚げ量を誇る下田港。丸ごと一匹を甘辛い秘伝のタレで煮上げた「金目鯛の姿煮」、皮目を炙った香ばしい「金目鯛のしゃぶしゃぶ」、握り寿司。伊豆近海の伊勢海老やサザエのつぼ焼き。",
    "spots": "道の駅開国下田みなと（魚市場食堂・地金目バーガー）、下田港遊覧船「黒船サスケハナ」",
    "access": "下田港・道の駅周辺。",
    "tip": "金目鯛の中でも、日帰り一本釣りで獲れる「地金目（じきんめ）」は傷がなく脂の乗りが抜群の最高級ブランドです。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【静岡・伊豆下田＆白浜海岸】エメラルドの海・白浜大浜＆金目鯛水揚げ日本一宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "南伊豆・下田エリア完全特化！透明度抜群の「白浜大浜海水浴場」、ペリーロードのなまこ壁、下田海中水族館、下田ロープウェイ寝姿山、水揚げ日本一の下田港「金目鯛づくし会席」と絶景オーシャンビュー温泉旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/shizuoka-izu-shimoda-beach-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【静岡・伊豆下田＆白浜海岸】エメラルドの海・白浜大浜＆金目鯛水揚げ日本一宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/shizuoka-izu-shimoda-beach-stay/" }
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
            IZU SHIMODA & BEACH GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「静岡・伊豆下田＆白浜海岸」エメラルドの海・白浜大浜＆金目鯛水揚げ日本一宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            本州屈指の透明度を誇るエメラルドグリーンの海「伊豆下田」。白砂が輝く白浜海岸と、黒船来航の歴史が薫るペリーロード。日本一の水揚げ量を誇る極上の「金目鯛の姿煮」と、海に沈む夕日を眺めるリゾートステイ。
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
              📊 静岡・伊豆下田＆白浜海岸：エメラルドの海・白浜大浜＆金目鯛水揚げ日本一宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「静岡・伊豆下田＆白浜海岸：エメラルドの海・白浜大浜＆金目鯛水揚げ日本一宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. Ｈｏｔｅｌ　Ｓｅａ　Ｓｈｅｌｌ</td>
                <td className="p-3 text-stone-600">静岡県下田市白浜1755</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">有り　室数分　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.35（137件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142536%2F142536.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 下田温泉　下田ベイクロシオ</td>
                <td className="p-3 text-stone-600">静岡県下田市柿崎4-1</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">有り　２５台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.7（513件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5645%2F5645.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 野の花亭こむらさき</td>
                <td className="p-3 text-stone-600">静岡県下田市西本郷1-5-30</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">同敷地内旅館建物沿い裏手に屋外駐車場有り　宿泊者無料</td>
                <td className="p-3 font-bold text-amber-600">★4.18（57件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F138065%2F138065.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 絶景温泉と魚介満腹の宿　稲取東海ホテル湯苑</td>
                <td className="p-3 text-stone-600">静岡県賀茂郡東伊豆町稲取1599-1</td>
                <td className="p-3 text-stone-600">伊豆稲取駅周辺</td>
                <td className="p-3 text-stone-600">有り　50台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.51（955件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5261%2F5261.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">下田温泉　下田ベイクロシオ</h3>
                  <span className="text-xs text-stone-400 ml-2">（しもだおんせん　しもだ　べいくろしお）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5645/5645_heya.jpg" alt="下田温泉　下田ベイクロシオ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>伊豆急下田駅から1.3km・白浜海岸まで3.5Km　海抜16mの高台から下田湾が一望</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県下田市柿崎4-1 ／ 最寄り駅：伊豆急下田 ／ 交通案内：伊豆急下田駅より送迎はご連絡をお願いいたします。お車はＲ135「柿崎西」信号付近のセブンイレブン横の坂を上る</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２５台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「景色と接客は最高、清掃面で少し残念お部屋の窓からの景色と海側露天風呂からの景色が最高でしたスタッフの方々の対応も穏やかでこちらもゆったりとした気分で過ごせました。子連れにも優しいサービスが…　2026-08-02 19:27:21投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">野の花亭こむらさき</h3>
                  <span className="text-xs text-stone-400 ml-2">（ののはなていこむらさき）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/138065/138065_rm1.jpg" alt="野の花亭こむらさき 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>１日僅か５組みだけ　おもてなしの日本旅館　全室露天風呂付き客室</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県下田市西本郷1-5-30 ／ 最寄り駅：伊豆急下田 ／ 交通案内：伊豆急下田駅から徒歩３分　降車改札を出て右に進む、線路沿いを進みビジネスホテルTSUMEKIの角を左に曲がり道路を渡る。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>同敷地内旅館建物沿い裏手に屋外駐車場有り　宿泊者無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事の美味しさに大満足ご飯美味しかったですクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/138065?review…　2026-08-16 22:53:58投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">絶景温泉と魚介満腹の宿　稲取東海ホテル湯苑</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぜっけいおんせんとぎょかいまんぷくのやど　いなとりとうかいほてるゆえん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5261/5261_kw.jpg" alt="絶景温泉と魚介満腹の宿　稲取東海ホテル湯苑 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>伊豆七島を一望する波打際のホテル。新鮮な魚介を使った海鮮料理を満喫頂けます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県賀茂郡東伊豆町稲取1599-1 ／ 最寄り駅：伊豆稲取 ／ 交通案内：伊豆急線伊豆稲取駅下車。徒歩約１５分。無料送迎バスあり　※要事前予約（13：30～18：00）　明朝は定期便あります。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　50台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「間近で見る花火と美味しい食事に大満足部屋から海と花火が見たくて花火が近くて上がる日で予約しました。半露天の角部屋にグレードアップしていただき、間近で花火が見れて嬉しかったです。建物は年季が入ってい…　2026-08-29 17:15:06投稿」
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
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="shizuoka-izu-shimoda-beach-stay" />
</div>
  );
}
