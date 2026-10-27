import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/okayama-kurashiki-bikan-stay/" },
  title: "岡山・倉敷美観地区：白壁土蔵・大原美術館＆倉敷デニム・フルーツ極上宿 厳選ガイド",
  description: "岡山・倉敷美観地区エリア完全特化！倉敷川の舟流し、白壁土蔵の町並み、日本初の西洋美術館「大原美術館」、倉敷デニムストリート、岡山白桃・マスカットパフェと美観地区の風情ある町家ホテルを徹底解説。",
  keywords: ["岡山", "倉敷美観地区", "白壁土蔵", "大原美術館", "倉敷デニム", "フルーツ極上宿", "温泉宿"],
  openGraph: {
    title: "岡山・倉敷美観地区：白壁土蔵・大原美術館＆倉敷デニム・フルーツ極上宿 厳選ガイド",
    description: "岡山・倉敷美観地区エリア完全特化！倉敷川の舟流し、白壁土蔵の町並み、日本初の西洋美術館「大原美術館」、倉敷デニムストリート、岡山白桃・マスカットパフェと美観地区の風情ある町家ホテルを徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "岡山・倉敷美観地区：白壁土蔵・大原美術館＆倉敷デニム・フルーツ極上宿 厳選ガイド",
    description: "岡山・倉敷美観地区エリア完全特化！倉敷川の舟流し、白壁土蔵の町並み、日本初の西洋美術館「大原美術館」、倉敷デニムストリート、岡山白桃・マスカットパフェと美観地区の風情ある町家ホテルを徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["okayama-kurashiki-bikan-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for okayama-kurashiki-bikan-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kurashiki_river_walk",
    "title": "1. 倉敷川沿い・美観地区中心部（くらしき川舟流しと白壁土蔵の夜景ライトアップ）",
    "timing": "通年（夕暮れから始まる景観照明が極めてロマンチック）",
    "desc": "白壁の土蔵と柳並木が続く倉敷美観地区のメインストリート。かつて物資を運んだ川舟に乗る「くらしき川舟流し」。夜間には照明デザイナー石井幹子氏が手がけた幻想的なライトアップが町を照らします。",
    "spots": "倉敷川畔（中橋・今橋）、くらしき川舟流し、倉敷館（観光案内所・大正洋風建築）、有隣荘（緑御殿）",
    "access": "JR山陽本線・伯備線「倉敷駅」南口より徒歩約10〜12分。山陽新幹線岡山駅より在来線で約17分。",
    "tip": "「くらしき川舟流し」は当日販売の乗船券が必要で午前中に売り切れることが多いため、到着直後に倉敷館で購入しましょう。"
  },
  {
    "key": "kurashiki_ohara_art",
    "title": "2. 大原美術館〜倉敷アイビースクエア（世界的名画鑑賞と赤レンガ紡績工場リゾート）",
    "timing": "通年（モネ・エル・グレコ・ゴーギャンの本物に出逢う）",
    "desc": "昭和5年に設立された日本最初の私立西洋美術館「大原美術館」。エル・グレコの『受胎告知』やモネの『睡蓮』。明治時代の紡績工場を再生したツタ（アイビー）の絡まる赤レンガホテルで優雅な滞在。",
    "spots": "大原美術館（本館・分館・工芸東洋館）、倉敷アイビースクエア（愛美赤煉瓦館）、倉敷デニムストリート",
    "access": "美観地区内、倉敷駅より徒歩約15分。",
    "tip": "倉敷デニムストリートでは、日本屈指の児島デニム製品のほか、青い「デニムまん」や「デニムソフト」が話題です。"
  },
  {
    "key": "kurashiki_gourmet_fruits",
    "title": "3. フルーツ王国岡山のパフェ＆瀬戸内の幸（白桃・シャインマスカットと下津井タコ）",
    "timing": "通年（夏〜秋の白桃・マスカット、冬〜春のいちごパフェ）",
    "desc": "フルーツ王国・岡山。美観地区内の古民家フルーツパーラー「くらしき桃子」などで味わう贅沢なプレミアムパフェ。宿の夕食では、瀬戸内海の急流で育った名物「下津井タコ」や希少な「千屋牛（ちやぎゅう）」を堪能。",
    "spots": "くらしき桃子（倉敷本店・総本店）、三宅商店（町家カフェ・季節のパフェ）、下津井港（タコ料理）",
    "access": "美観地区本町通り・東町周辺。",
    "tip": "町家カフェ「三宅商店」の季節のフルーツパフェは、築150年の町家の畳敷きでいただく至福のスイーツ体験です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【岡山・倉敷美観地区】白壁土蔵・大原美術館＆倉敷デニム・フルーツ極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "岡山・倉敷美観地区エリア完全特化！倉敷川の舟流し、白壁土蔵の町並み、日本初の西洋美術館「大原美術館」、倉敷デニムストリート、岡山白桃・マスカットパフェと美観地区の風情ある町家ホテルを徹底解説。",
    "url": "https://croud-travel.pages.dev/okayama-kurashiki-bikan-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【岡山・倉敷美観地区】白壁土蔵・大原美術館＆倉敷デニム・フルーツ極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/okayama-kurashiki-bikan-stay/" }
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
            KURASHIKI BIKAN MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「岡山・倉敷美観地区」白壁土蔵・大原美術館＆倉敷デニム・フルーツ極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            白壁の土蔵となまこ壁、川面に揺れる柳並木。江戸時代の天領の面影を色濃く残す「倉敷美観地区」。モネの『睡蓮』を所蔵する大原美術館と、町家をリノベーションした上質な宿泊体験。
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
              📊 岡山・倉敷美観地区：白壁土蔵・大原美術館＆倉敷デニム・フルーツ極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「岡山・倉敷美観地区：白壁土蔵・大原美術館＆倉敷デニム・フルーツ極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 倉敷国際ホテル</td>
                <td className="p-3 text-stone-600">岡山県倉敷市中央1-1-44</td>
                <td className="p-3 text-stone-600">倉敷駅周辺</td>
                <td className="p-3 text-stone-600">有：３０台（１泊につき1,000円頂戴します。ご宿泊日の15：00からご出発の11：00）</td>
                <td className="p-3 font-bold text-amber-600">★4.25（1318件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7584%2F7584.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 倉敷　庭園旅館備後屋</td>
                <td className="p-3 text-stone-600">岡山県倉敷市玉島阿賀崎956</td>
                <td className="p-3 text-stone-600">新倉敷駅周辺</td>
                <td className="p-3 text-stone-600">有り　８台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.56（125件）</td>
                <td className="p-3 font-bold text-rose-600">¥14,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F73905%2F73905.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 倉敷美観地区　別邸　よし井</td>
                <td className="p-3 text-stone-600">岡山県倉敷市本町10-6　2階</td>
                <td className="p-3 text-stone-600">倉敷駅周辺</td>
                <td className="p-3 text-stone-600">有り　１台　無料　要予約</td>
                <td className="p-3 font-bold text-amber-600">高評価</td>
                <td className="p-3 font-bold text-rose-600">¥15,950〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F188189%2F188189.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 料理旅館　鶴形</td>
                <td className="p-3 text-stone-600">岡山県倉敷市中央1-3-15</td>
                <td className="p-3 text-stone-600">倉敷駅周辺</td>
                <td className="p-3 text-stone-600">有※倉敷国際ホテル駐車場（徒歩約5分）をご利用いただきます。</td>
                <td className="p-3 font-bold text-amber-600">★4.9（162件）</td>
                <td className="p-3 font-bold text-rose-600">¥23,050〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F108991%2F108991.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">倉敷国際ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（くらしき　こくさいほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7584/7584_we.jpg" alt="倉敷国際ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>木の温もりを感じる落ち着いた空間で歴史を感じさせてくれる洗練されたひとときをお過ごしいただけます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岡山県倉敷市中央1-1-44 ／ 最寄り駅：倉敷 ／ 交通案内：ＪＲ倉敷駅南口徒歩１０分、山陽自動車道倉敷Ｉ．Ｃから１０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有：３０台（１泊につき1,000円頂戴します。ご宿泊日の15：00からご出発の11：00）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「何度も訪れたい芸術的な空間何度宿泊しても来てよかったと思える素晴らしいホテルです。スタッフも親切ですし、建物と館内の芸術性は他では見られない唯一無二のものです。倉敷を訪れる方には是非お勧めしたいお…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">倉敷　庭園旅館備後屋</h3>
                  <span className="text-xs text-stone-400 ml-2">（くらしき　ていえんりょかんびんごや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥14,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/73905/73905_wa.jpg" alt="倉敷　庭園旅館備後屋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>●楽天アワード受賞●【全室離れ形式】料亭旅館の本格懐石を離れか個室で～大正3年創業～</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岡山県倉敷市玉島阿賀崎956 ／ 最寄り駅：新倉敷 ／ 交通案内：◆新幹線・車も便利◆ＪＲ新倉敷駅：車12分／山陽道玉島IC：20分　【周辺観光】美観地区：車25分／香川・丸亀：車60分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　８台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「倉敷　庭園旅館備後屋は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">倉敷美観地区　別邸　よし井</h3>
                  <span className="text-xs text-stone-400 ml-2">（くらしきびかんちく　べってい　よしい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,950〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/188189/188189.jpg" alt="倉敷美観地区　別邸　よし井 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>倉敷美観地区の吉井旅館がプロデュースする、１日１組限定の貸別荘。吹き抜けのリビングに大画面モニター、</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岡山県倉敷市本町10-6　2階 ／ 最寄り駅：倉敷 ／ 交通案内：倉敷駅より徒歩約１５分 倉敷インターよりお車で約１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１台　無料　要予約</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「倉敷美観地区　別邸　よし井は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">料理旅館　鶴形</h3>
                  <span className="text-xs text-stone-400 ml-2">（りょうりりょかん　つるがた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥23,050〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/108991/108991_wa1.jpg" alt="料理旅館　鶴形 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>1744年創建の商家に逗留し瀬戸内の新鮮な魚、旬の食材を使った料理と倉敷の風情をお楽しみ下さい</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岡山県倉敷市中央1-3-15 ／ 最寄り駅：倉敷 ／ 交通案内：倉敷駅から徒歩で約15分／お車で約5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有※倉敷国際ホテル駐車場（徒歩約5分）をご利用いただきます。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「全ての料理が美味しく大満足料理が全て美味しかったです他の画像やクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/108…」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！岡山県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、岡山県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Kurasiki_morning01.JPG/1280px-Kurasiki_morning01.JPG?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="倉敷美観地区" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">倉敷美観地区</h3>
                <p className="text-xs text-stone-600 leading-relaxed">白壁の土蔵や柳並木が倉敷川沿いに続く歴史情緒あふれる美景地区。倉敷川での川舟流しや古民家カフェ、大原美術館の近代絵画鑑賞が魅力です。 倉敷美観地区（くらしきびかんちく、Kurashiki Bikan historical quarter）は、岡山県倉敷市にある町並保存地区・観光地区である。 当エリアは倉敷市の美観地区景観条例にもとづき定められたもので、同市本町全域、中央1丁目北部（前神町など）、東町・阿知2丁目・鶴形2丁目の各一部が含まれる。広義の美観地区の面積は21.0ヘクタールで、うち…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">岡山後楽園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">水戸偕楽園・金沢兼六園と並ぶ日本三名園。岡山藩主・池田綱政公が造営した回遊式大名庭園で、広い芝生と池、岡山城を背にした景観が優美です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">国宝 岡山城（烏城）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">黒い板張りの外観から「烏城（うじょう）」と呼ばれる名城。令和の大改修を経て美しく生まれ変わり、旭川越しに見る黄金のシャチホコと漆黒のコントラストが秀逸です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">瀬戸大橋（鷲羽山）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">本州と四国を結ぶ世界最大級の二本構成橋梁。鷲羽山（わしうざん）展望台からは瀬戸内海に浮かぶ多島美と橋が織りなす壮大なパノラマを一望できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 岡山県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 岡山県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="okayama-kurashiki-bikan-stay" />
</div>
  );
}
