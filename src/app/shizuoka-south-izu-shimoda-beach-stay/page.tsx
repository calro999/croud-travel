import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/shizuoka-south-izu-shimoda-beach-stay/" },
  title: "静岡・南伊豆＆下田・ヒリゾ浜：開国の港街・白浜海岸＆秘境シュノーケリング・金目鯛宿 厳選ガイド",
  description: "伊豆半島最南端のエメラルドグリーンパラダイス・南伊豆＆下田エリア完全特化！ペリー来航の歴史「下田ペリーロード」、本州屈指の透明度「ヒリゾ浜」、白砂の「白浜大浜海岸」、石廊崎オーシャンパーク、下田温泉・南伊豆金目鯛宿を徹底解説。",
  keywords: ["静岡", "南伊豆", "下田", "ヒリゾ浜", "開国の港街", "白浜海岸", "秘境シュノーケリング"],
  openGraph: {
    title: "静岡・南伊豆＆下田・ヒリゾ浜：開国の港街・白浜海岸＆秘境シュノーケリング・金目鯛宿 厳選ガイド",
    description: "伊豆半島最南端のエメラルドグリーンパラダイス・南伊豆＆下田エリア完全特化！ペリー来航の歴史「下田ペリーロード」、本州屈指の透明度「ヒリゾ浜」、白砂の「白浜大浜海岸」、石廊崎オーシャンパーク、下田温泉・南伊豆金目鯛宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "静岡・南伊豆＆下田・ヒリゾ浜：開国の港街・白浜海岸＆秘境シュノーケリング・金目鯛宿 厳選ガイド",
    description: "伊豆半島最南端のエメラルドグリーンパラダイス・南伊豆＆下田エリア完全特化！ペリー来航の歴史「下田ペリーロード」、本州屈指の透明度「ヒリゾ浜」、白砂の「白浜大浜海岸」、石廊崎オーシャンパーク、下田温泉・南伊豆金目鯛宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shizuoka-south-izu-shimoda-beach-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shizuoka-south-izu-shimoda-beach-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shimoda_perry_heritage_stay",
    "title": "1. 下田港〜ペリーロード・了仙寺（黒船来航の歴史薫るなまこ壁の小径）",
    "timing": "通年（5月の黒船祭・6月下田公園あじさい祭）",
    "desc": "嘉永7年（1854年）マシュー・ペリー提督が上陸した開国の街「下田」。平滑川沿いに石畳となまこ壁の古民家カフェが連なる「ペリーロード」。日米下田条約が締結された「了仙寺」。下田湾を行き交う遊覧船黒船サスケハナ号。",
    "spots": "ペリーロード、了仙寺（ジャスミン寺・黒船ミュージアム）、下田公園（日本一300万輪のあじさい）、下田ロープウェイ（寝姿山展望台）",
    "access": "伊豆急行線「伊豆急下田駅」下車。特急踊り子号で東京駅から直通約2時間40分。",
    "tip": "下田ロープウェイで登る「寝姿山山頂展望台」からは、下田港全景と伊豆七島を見渡す絶景が広がり、縁結びの愛染堂が鎮座します。"
  },
  {
    "key": "south_izu_hirizo_ocean_resort",
    "title": "2. 南伊豆・ヒリゾ浜〜弓ヶ浜・石廊崎（本州屈指の透明度を誇る秘境シュノーケリング）",
    "timing": "通年（ヒリゾ浜渡し船運行：7月上旬〜9月下旬、春のみなみの桜と菜の花まつり）",
    "desc": "船でしか行けない秘境ビーチ「ヒリゾ浜」。抜群の透明度と色鮮やかな熱帯魚が泳ぐシュノーケリングの聖地。扇形の美しい白砂海岸「弓ヶ浜」。伊豆半島最南端の断崖絶壁に建つ「石廊崎オーシャンパーク（石室神社）」。",
    "spots": "ヒリゾ浜（中木港より渡し船）、弓ヶ浜海水浴場（日本の渚百選）、石廊崎灯台・石室神社、みなみの桜と菜の花まつり（青野川沿い）",
    "access": "伊豆急下田駅より路線バス運行。",
    "tip": "石廊崎の断崖に張り付くように建つ「石室神社（いろうじんじゃ）」は、社殿の床下に海が見えるスリリングな絶景パワースポットです。"
  },
  {
    "key": "shirahama_beach_luxury_stay",
    "title": "3. 下田名物「金目鯛」＆白浜海岸（水揚げ日本一の下田港が誇る脂の乗り）",
    "timing": "通年（冬〜初夏の金目鯛は特に脂が乗って極上）",
    "desc": "下田港は金目鯛の水揚げ量日本一。伝統のタレでふっくら煮付けた「金目鯛の姿煮」、皮目をサッと炙った「金目鯛のしゃぶしゃぶ」、金目鯛バーガー。真っ白な砂浜とコバルトブルーの海が広がる「白浜大浜海岸」でのリゾートステイ。",
    "spots": "下田金目鯛専門店、道の駅開国下田みなと、白浜神社（白浜海岸の赤い鳥居）",
    "access": "下田・白浜・南伊豆エリア。",
    "tip": "白浜海岸の磯場に立つ「白浜神社（伊古奈比咩命神社）の赤い鳥居」は、青い海と白い波が打ち寄せる神秘的な写真が撮れる名所です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【静岡・南伊豆＆下田・ヒリゾ浜】開国の港街・白浜海岸＆秘境シュノーケリング・金目鯛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "伊豆半島最南端のエメラルドグリーンパラダイス・南伊豆＆下田エリア完全特化！ペリー来航の歴史「下田ペリーロード」、本州屈指の透明度「ヒリゾ浜」、白砂の「白浜大浜海岸」、石廊崎オーシャンパーク、下田温泉・南伊豆金目鯛宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/shizuoka-south-izu-shimoda-beach-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【静岡・南伊豆＆下田・ヒリゾ浜】開国の港街・白浜海岸＆秘境シュノーケリング・金目鯛宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/shizuoka-south-izu-shimoda-beach-stay/" }
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
            SOUTH IZU & SHIMODA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「静岡・南伊豆＆下田・ヒリゾ浜」開国の港街・白浜海岸＆秘境シュノーケリング・金目鯛宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            幕末の開国舞台となったレトロな港町「下田」と、伊豆最南端の大自然「南伊豆・ヒリゾ浜」。本州とは思えない驚異の透明度を誇るエメラルドグリーンの海。白砂の白浜海岸、石廊崎の断崖。下田港直送の金目鯛と下田温泉を味わう楽園の旅。
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
              📊 静岡・南伊豆＆下田・ヒリゾ浜：開国の港街・白浜海岸＆秘境シュノーケリング・金目鯛宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「静岡・南伊豆＆下田・ヒリゾ浜：開国の港街・白浜海岸＆秘境シュノーケリング・金目鯛宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 野の花亭こむらさき</td>
                <td className="p-3 text-stone-600">静岡県下田市西本郷1-5-30</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">同敷地内旅館建物沿い裏手に屋外駐車場有り　宿泊者無料</td>
                <td className="p-3 font-bold text-amber-600">★4.18（57件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F138065%2F138065.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 南伊豆弓ヶ浜温泉　季一遊</td>
                <td className="p-3 text-stone-600">静岡県賀茂郡南伊豆町湊川口902-1</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">有り　４０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.52（708件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,750〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67430%2F67430.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 南伊豆弓ヶ浜温泉　古民家の宿　山海</td>
                <td className="p-3 text-stone-600">静岡県賀茂郡南伊豆町湊1709</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">有り（無料）　乗用車15台</td>
                <td className="p-3 font-bold text-amber-600">★4.19（1043件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5252%2F5252.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 南伊豆弓ヶ浜温泉　なごみ詩</td>
                <td className="p-3 text-stone-600">静岡県賀茂郡南伊豆町湊891-12</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">アスファルト舗装　６台　無料　平らで一台分のスペース広く止めやすさ抜群　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.64（214件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72672%2F72672.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 弓ヶ浜温泉　くつろぎと料理の御宿　花さと</td>
                <td className="p-3 text-stone-600">静岡県賀茂郡南伊豆町湊417</td>
                <td className="p-3 text-stone-600">伊豆急下田駅周辺</td>
                <td className="p-3 text-stone-600">有り　１０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.64（495件）</td>
                <td className="p-3 font-bold text-rose-600">¥20,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40166%2F40166.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. ホテル四季の蔵　高台から海を臨む　貸切温泉のペットリゾート</td>
                <td className="p-3 text-stone-600">静岡県</td>
                <td className="p-3 text-stone-600">東名高速沼津ＩＣから５０ｋｍ、９０分</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.38（351件）</td>
                <td className="p-3 font-bold text-rose-600">¥17,710〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F30048%2F30048.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南伊豆弓ヶ浜温泉　季一遊</h3>
                  <span className="text-xs text-stone-400 ml-2">（みなみいずゆみがはま　ときいちゆう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,750〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/67430/67430_fu.jpg" alt="南伊豆弓ヶ浜温泉　季一遊 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>旅館のスタイルにこだわらない自由な発想。南伊豆の「今日の美味」をお届けします。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県賀茂郡南伊豆町湊川口902-1 ／ 最寄り駅：伊豆急下田 ／ 交通案内：伊豆急下田駅より送迎バスにて約20分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　４０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「サービスが行き届いていてゆっくりした時間を過ごす事が出来ました!ご飯もすごく美味しくて大満足ですクチコミの詳細はこちらから　https://review.travel.rakuten.co…　2026-08-29 18:16:06投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南伊豆弓ヶ浜温泉　古民家の宿　山海</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆみがはまおんせん　さんかい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5252/5252_irr.jpg" alt="南伊豆弓ヶ浜温泉　古民家の宿　山海 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>どこか懐かしい古民家造り♪下田海中水族館やヒリゾ浜・弓ヶ浜・竜宮窟まで便利！何度でも入れる貸切風呂♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県賀茂郡南伊豆町湊1709 ／ 最寄り駅：伊豆急下田 ／ 交通案内：●お車で/伊豆縦貫道河津ICから30分または小田原厚木道から140分●電車で/伊豆急下田駅よりバス15分、バス停日野</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（無料）　乗用車15台</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「古民家の雰囲気に期待したが残念な結果に古民家との建物に魅了を感じ...初めて宿泊しましたが、お部屋からの羨望なし、お風呂の衛生状態もイマイチな感じでした。お食事は、とても残念に感じます。クチコ…　2026-08-26 07:55:28投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">南伊豆弓ヶ浜温泉　なごみ詩</h3>
                  <span className="text-xs text-stone-400 ml-2">（みなみいずゆみがはまおんせん　なごみうた）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/72672/72672_gr.jpg" alt="南伊豆弓ヶ浜温泉　なごみ詩 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>松の合間から海が見え.波音が聞こえ.浜辺まで徒歩３０秒の好立地</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県賀茂郡南伊豆町湊891-12 ／ 最寄り駅：伊豆急下田 ／ 交通案内：伊豆東海岸道路 伊東～下田 ●東名沼津～伊豆縦貫道～下田～弓ヶ浜//電車利用伊豆急下田からバス４番線</p>
                  <p><strong>【駐車場・マイカー利用】</strong>アスファルト舗装　６台　無料　平らで一台分のスペース広く止めやすさ抜群　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「南伊豆弓ヶ浜温泉　なごみ詩は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">弓ヶ浜温泉　くつろぎと料理の御宿　花さと</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆみがはまおんせん　くつろぎとりょうりのおやど　はなさと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥20,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/40166/40166_syo.jpg" alt="弓ヶ浜温泉　くつろぎと料理の御宿　花さと 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>南伊豆名産の伊勢海老・幻の伊豆牛　ここでしか食べれない評価5.0のお食事！貸切温泉も！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 静岡県賀茂郡南伊豆町湊417 ／ 最寄り駅：伊豆急下田 ／ 交通案内：電車：伊豆急下田駅よりバス２０分 「弓ヶ浜大橋」下車　車：沼津I.CよりR414で120分　熱海よりR135で150分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１０台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.96 ／ 立地 ★4.35 ／ 部屋 ★4.63 ／ 設備 ★4.37 ／ 風呂 ★4.56 ／ 食事 ★4.96</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「7月の連休前に宿泊。思いがけなく宿泊者ひとりで貸し切りだったので、大浴場も露天風呂もひとり占めで満喫させてもらいました。夕食も女将さんの手作りの真心のこもったお料理で、品数もボリューム満点でした。土鍋…　2026-10-08 11:44:41投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/hs/RmfmX/?f_hotel_no=40166&quot; class=&quot;3click」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル四季の蔵　高台から海を臨む　貸切温泉のペットリゾート</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥17,710〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/30048/30048.jpg" alt="ホテル四季の蔵　高台から海を臨む　貸切温泉のペットリゾート 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：東名高速沼津ＩＣから５０ｋｍ、９０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「大型犬と一緒にどこへも行けて大満足うちの犬は25キロなのですが、そんな大きな犬も食事場所へも、貸切風呂へも、どこでも一緒にいけて、犬も安心して過ごせました。夜は無料の焼きマシュマロや綿あめを楽しん…　2026-09-14 14:58:51投稿」
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
    
      <HubRelatedPosts currentSlug="shizuoka-south-izu-shimoda-beach-stay" />
</div>
  );
}
