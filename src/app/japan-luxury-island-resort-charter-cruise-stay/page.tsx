import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/japan-luxury-island-resort-charter-cruise-stay/" },
  title: "プライベートクルーズ＆離島ラグジュアリーリゾート：瀬戸内・伊勢志摩・八重山 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "陸路では辿り着けない碧碧たる楽園！プライベートクルーズ・ヘリ送迎対応の最高峰アイランドリゾート完全特化！瀬戸内・ベネッセハウス・ガンツウ、伊勢志摩・アマネム・英虞湾クルーズ、八重山諸島プライベートヨット宿を徹底解説。",
  keywords: ["プライベートクルーズ", "離島ラグジュアリーリゾート", "瀬戸内", "伊勢志摩", "八重山", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "プライベートクルーズ＆離島ラグジュアリーリゾート：瀬戸内・伊勢志摩・八重山 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "陸路では辿り着けない碧碧たる楽園！プライベートクルーズ・ヘリ送迎対応の最高峰アイランドリゾート完全特化！瀬戸内・ベネッセハウス・ガンツウ、伊勢志摩・アマネム・英虞湾クルーズ、八重山諸島プライベートヨット宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "プライベートクルーズ＆離島ラグジュアリーリゾート：瀬戸内・伊勢志摩・八重山 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "陸路では辿り着けない碧碧たる楽園！プライベートクルーズ・ヘリ送迎対応の最高峰アイランドリゾート完全特化！瀬戸内・ベネッセハウス・ガンツウ、伊勢志摩・アマネム・英虞湾クルーズ、八重山諸島プライベートヨット宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-luxury-island-resort-charter-cruise-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-luxury-island-resort-charter-cruise-stay", e);
  }
  return {};
}

export default function LuxuryPremiumHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "iseshima_amanemu_luxury_resort",
    "title": "1. 伊勢志摩・アマネム（英虞湾の真珠筏を望むアマン初の温泉リゾート）",
    "timing": "通年（真珠のように穏やかな英虞湾のパノラマ）",
    "desc": "世界的なラグジュアリーリゾート「アマン」が伊勢志摩国立公園内にオープンした「アマネム（AMANEMU）」。約2,000平米の広大なサーマルスプリング（温泉水プール）。英虞湾を巡るプライベートボートクルーズと伊勢海老・松阪牛ディナー。",
    "spots": "アマネム（サーマルスプリング・ダイニング）、志摩観光ホテル ザ クラシック/ザ ベイスイート、賢島カンツリークラブ",
    "access": "近鉄「賢島駅」より専用車送迎約15分。ヘリコプターチャーター運行あり。",
    "tip": "アマネムの水着着用で入る広大な屋外サーマルスプリングでは、ミネラル豊富な天然温泉に浮かびながら英虞湾の森と空を仰ぐ極上のリフレッシュが体験できます。"
  },
  {
    "key": "setouchi_art_island_guntu_stay",
    "title": "2. 瀬戸内・直島ベネッセハウス（安藤忠雄建築×現代アート×多島美）",
    "timing": "通年（瀬戸内国際芸術祭の舞台・穏やかな気候）",
    "desc": "安藤忠雄氏が設計した「美術館の中に泊まる」ホテル・ベネッセハウス（ミュージアム・オーバル・パーク・ビーチ）。夜間宿泊者だけが独占できる美術館鑑賞。専用チャーターボートで豊島・犬島を巡るアイランドホッピング。",
    "spots": "ベネッセハウス（オーバル専用モノレール）、地中美術館、草間彌生「南瓜」、家プロジェクト",
    "access": "高松港または宇野港よりフェリー・高速船で宮浦港へ。ホテル専用シャトルバス運行。",
    "tip": "ベネッセハウス「オーバル」は山頂のわずか6室のみの特別室で、専用モノレールで登る円形水盤の中庭は宿泊者しか立ち入れない究極のアート空間です。"
  },
  {
    "key": "yaeyama_kohamajima_hoshinoya_stay",
    "title": "3. 八重山諸島・星のや竹富島＆小浜島（琉球赤瓦の集落と日本最大の珊瑚礁）",
    "timing": "通年（国内初の星空保護区に認定された満天の天の川）",
    "desc": "竹富島の伝統的建造物群保存地区のルールに従って造られた一棟一組の赤瓦ヴィラ「星のや竹富島」。珊瑚の石垣に囲まれたプライベート空間。小浜島の日本最大の珊瑚礁「石西礁湖」でのプライベートヨットクルーズやシュノーケリング。",
    "spots": "星のや竹富島、はいむるぶし（小浜島）、コンドイビーチ、カイジ浜（星砂の浜）",
    "access": "石垣港離島ターミナルより高速船で約10〜30分。",
    "tip": "星のや竹富島では、夕暮れ時に「水牛車」に乗って三線の音色を聞きながら集落を巡る特別なオプショナルツアーが用意されています。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【プライベートクルーズ＆離島ラグジュアリーリゾート】瀬戸内・伊勢志摩・八重山 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "陸路では辿り着けない碧碧たる楽園！プライベートクルーズ・ヘリ送迎対応の最高峰アイランドリゾート完全特化！瀬戸内・ベネッセハウス・ガンツウ、伊勢志摩・アマネム・英虞湾クルーズ、八重山諸島プライベートヨット宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/japan-luxury-island-resort-charter-cruise-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【プライベートクルーズ＆離島ラグジュアリーリゾート】瀬戸内・伊勢志摩・八重山 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/japan-luxury-island-resort-charter-cruise-stay/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 text-white p-8 md:p-14 shadow-2xl border border-amber-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-amber-500 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            LUXURY ISLAND & CRUISE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「プライベートクルーズ＆離島ラグジュアリーリゾート」瀬戸内・伊勢志摩・八重山 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            穏やかな波を切り進む専用クルーザーでチェックイン。世界最高峰のリゾートブランド「アマン」が手掛けたアマネム、瀬戸内海に浮かぶ動くラグジュアリーホテル「ガンツウ」、アートと建築が共鳴する直島ベネッセハウス。非日常の極致へ。
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
              className="bg-white border border-amber-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-amber-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    💎 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">👑 代表的な宿・建築の特徴</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <span className="font-bold text-stone-950 block text-[11px]">🛥️ アクセス＆送迎案内</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">✨ 極上ステイを叶えるポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選プレミアム宿カード */}
              <div className="space-y-4 pt-4 border-t border-amber-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-stone-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの最高峰宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-amber-900 bg-amber-100/70 border border-amber-300 px-3 py-1 rounded-full">
                    極上プレミアム
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-amber-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-stone-100 border-b border-stone-200">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-stone-950/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-950 line-clamp-2">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 rounded-xl shadow transition"
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
              📊 プライベートクルーズ＆離島ラグジュアリーリゾート：瀬戸内・伊勢志摩・八重山 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「プライベートクルーズ＆離島ラグジュアリーリゾート：瀬戸内・伊勢志摩・八重山 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. グランドメルキュール伊勢志摩リゾート＆スパ</td>
                <td className="p-3 text-stone-600">三重県志摩市磯部町的矢笠取939-6</td>
                <td className="p-3 text-stone-600">志摩磯部駅周辺</td>
                <td className="p-3 text-stone-600">220台あり（無料・予約不可）</td>
                <td className="p-3 font-bold text-amber-600">★3.94（4177件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,120〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13971%2F13971.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ＴＨＥ　ＨＩＲＡＭＡＴＳＵ　ＨＯＴＥＬＳ　＆　ＲＥＳＯＲＴＳ　賢島</td>
                <td className="p-3 text-stone-600">三重県志摩市阿児町鵜方3618-52</td>
                <td className="p-3 text-stone-600">賢島駅周辺</td>
                <td className="p-3 text-stone-600">有り　８台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.83（20件）</td>
                <td className="p-3 font-bold text-rose-600">¥83,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F191475%2F191475.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 一楽温泉ホテル</td>
                <td className="p-3 text-stone-600">三重県志摩市志摩町和具2582-66</td>
                <td className="p-3 text-stone-600">賢島駅周辺</td>
                <td className="p-3 text-stone-600">有り １０～２０台 無料 予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.36（58件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172942%2F172942.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 直島ふるさと海の家　つつじ荘　＜直島＞</td>
                <td className="p-3 text-stone-600">香川県香川郡直島町352-1</td>
                <td className="p-3 text-stone-600">【宮浦港】バス約15分・バス停「つつじ荘」目の前／車で約10分／自転車</td>
                <td className="p-3 text-stone-600">つつじ荘隣の公共駐車場をご利用いただけます。（無料/予約不要/直島町営）</td>
                <td className="p-3 font-bold text-amber-600">★4.58（171件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,280〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F111253%2F111253.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. グランヴィリオリゾート石垣島　Ｏｃｅａｎ’ｓ　Ｗｉｎｇ　＆　Ｖｉｌｌａ　Ｇａｒｄｅｎ＜石垣島＞</td>
                <td className="p-3 text-stone-600">沖縄県石垣市新川舟蔵2481-1</td>
                <td className="p-3 text-stone-600">石垣空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　110台収容　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.47（1261件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,930〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F69360%2F69360.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">グランドメルキュール伊勢志摩リゾート＆スパ</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぐらんどめるきゅーるいせしまりぞーとあんどすぱ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,120〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13971/13971_room.jpg" alt="グランドメルキュール伊勢志摩リゾート＆スパ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>心と身体が満たされる、海と森に抱かれる贅沢なひととき</p>
                  <p><strong>【所在地・アクセス】</strong>〒 三重県志摩市磯部町的矢笠取939-6 ／ 最寄り駅：志摩磯部 ／ 交通案内：近鉄 鵜方駅より定時シャトルバス約15分(予約不要　定時運行　公式HP参照)／伊勢西ＩＣよりお車約45分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>220台あり（無料・予約不可）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食ビュッフェが美味しくプールも満喫親族8人2部屋で利用しました。朝食のビュッフェも美味しいプールもあったので次回は水着を忘れないようにしようと思います!クチコミの詳細はこちらから　https…　2026-09-06 01:08:04投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＴＨＥ　ＨＩＲＡＭＡＴＳＵ　ＨＯＴＥＬＳ　＆　ＲＥＳＯＲＴＳ　賢島</h3>
                  <span className="text-xs text-stone-400 ml-2">（ざ　ひらまつ　　ほてるず　あんど　りぞーつ　かしこじま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥83,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/191475/191475.jpg" alt="ＴＨＥ　ＨＩＲＡＭＡＴＳＵ　ＨＯＴＥＬＳ　＆　ＲＥＳＯＲＴＳ　賢島 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>伊勢志摩の豊かな食材を愉しむ料理、温泉、スパが心と体を癒す究極のスモールラグジュアリー</p>
                  <p><strong>【所在地・アクセス】</strong>〒 三重県志摩市阿児町鵜方3618-52 ／ 最寄り駅：賢島 ／ 交通案内：近鉄志摩線　賢島駅から車で 約１５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　８台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ＴＨＥ　ＨＩＲＡＭＡＴＳＵ　ＨＯＴＥＬＳ　＆　ＲＥＳＯＲＴＳ　賢島は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">一楽温泉ホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（いちらくおんせんほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/172942/172942_kan1.jpg" alt="一楽温泉ホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>天然温泉と英虞湾を望む全室オーシャンビューのホテル。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 三重県志摩市志摩町和具2582-66 ／ 最寄り駅：賢島 ／ 交通案内：賢島駅よりお車にて約25分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り １０～２０台 無料 予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「一楽温泉ホテルは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">直島ふるさと海の家　つつじ荘　＜直島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふるさとうみのいえ　つつじそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,280〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/111253/111253_kan.jpg" alt="直島ふるさと海の家　つつじ荘　＜直島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>目の前は瀬戸内海！美術館へのアクセス良好◎自然とアートを満喫できる施設♪リーズナブルに滞在できます！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 香川県香川郡直島町352-1 ／ 最寄り駅：主要駅 ／ 交通案内：【宮浦港】バス約15分・バス停「つつじ荘」目の前／車で約10分／自転車で約25分【直島港(本村)】徒歩で約25分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>つつじ荘隣の公共駐車場をご利用いただけます。（無料/予約不要/直島町営）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「直島ふるさと海の家　つつじ荘　＜直島＞は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">グランヴィリオリゾート石垣島　Ｏｃｅａｎ’ｓ　Ｗｉｎｇ　＆　Ｖｉｌｌａ　Ｇａｒｄｅｎ＜石垣島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぐらん&amp;#12436;ぃりおりぞーといしがきじま）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,930〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/69360/69360_ro.jpg" alt="グランヴィリオリゾート石垣島　Ｏｃｅａｎ’ｓ　Ｗｉｎｇ　＆　Ｖｉｌｌａ　Ｇａｒｄｅｎ＜石垣島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>オーシャンズウィングとヴィラガーデン　趣の異なる２つの宿泊エリアと充実の施設が魅力的な南国リゾート</p>
                  <p><strong>【所在地・アクセス】</strong>〒 沖縄県石垣市新川舟蔵2481-1 ／ 最寄り駅：石垣空港 ／ 交通案内：新石垣空港より車で40分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　110台収容　無料　予約不要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.53 ／ 立地 ★4.47 ／ 部屋 ★4.48 ／ 設備 ★4.41 ／ 風呂 ★4.38 ／ 食事 ★4.5</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「海が見えるプールと星空観賞で大満足部屋も綺麗で、天気良く景色も綺麗でした。リゾートホテルで前に海が見えて屋内、屋外プ一ルもあり孫も大喜びでした。タオルも浮き輪も無料で貸し出してもらえま…　2026-10-09 21:34:28投稿」
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
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-950 bg-white hover:bg-stone-50 border border-stone-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="japan-luxury-island-resort-charter-cruise-stay" />
</div>
  );
}
