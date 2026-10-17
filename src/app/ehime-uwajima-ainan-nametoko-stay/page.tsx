import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/ehime-uwajima-ainan-nametoko-stay/" },
  title: "愛媛・宇和島＆愛南・滑床渓谷：現存天守宇和島城・滑床キャニオニング＆宇和島鯛めし宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "伊達十万石の城下町とキャニオニングの聖地・愛媛宇和島＆南予エリア完全特化！現存十二天守「宇和島城」、日本の滝百選「雪輪の滝・滑床渓谷」、真珠の海「宇和海」、名物「宇和島鯛めし・愛南びやびやかつお宿」を徹底解説。",
  keywords: ["愛媛", "宇和島", "愛南", "滑床渓谷", "現存天守宇和島城", "滑床キャニオニング", "宇和島鯛めし宿"],
  openGraph: {
    title: "愛媛・宇和島＆愛南・滑床渓谷：現存天守宇和島城・滑床キャニオニング＆宇和島鯛めし宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "伊達十万石の城下町とキャニオニングの聖地・愛媛宇和島＆南予エリア完全特化！現存十二天守「宇和島城」、日本の滝百選「雪輪の滝・滑床渓谷」、真珠の海「宇和海」、名物「宇和島鯛めし・愛南びやびやかつお宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "愛媛・宇和島＆愛南・滑床渓谷：現存天守宇和島城・滑床キャニオニング＆宇和島鯛めし宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "伊達十万石の城下町とキャニオニングの聖地・愛媛宇和島＆南予エリア完全特化！現存十二天守「宇和島城」、日本の滝百選「雪輪の滝・滑床渓谷」、真珠の海「宇和海」、名物「宇和島鯛めし・愛南びやびやかつお宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["ehime-uwajima-ainan-nametoko-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ehime-uwajima-ainan-nametoko-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "uwajima_castle_hotel_stay",
    "title": "1. 宇和島城〜天赦園・市立伊達博物館（現存十二天守と名園）",
    "timing": "通年（春の桜・藤の花・秋の紅葉）",
    "desc": "築城の名手・藤堂高虎が創建し、伊達氏が改修した「現存十二天守・宇和島城（国の重要文化財）」。海城の面影を残す天守からの宇和島湾パノラマ。伊達家の回遊式庭園「天赦園（白玉藤）」。真珠養殖日本一の宇和海。",
    "spots": "宇和島城（天守・上り立ち門）、名勝 天赦園、宇和島市立伊達博物館、道の駅みなとオアシスうわじま きさいや広場",
    "access": "JR予讃線「宇和島駅」下車徒歩約15分。松山空港より特急列車・バスで約80分。",
    "tip": "宇和島城の石垣は「不等辺五角形」という珍しい縄張りで造られており、四角形に見せかけて敵を惑わす高虎の巧みな防衛技術が見どころです。"
  },
  {
    "key": "nametoko_gorge_nature_stay",
    "title": "2. 滑床渓谷〜雪輪の滝（日本屈指のキャニオニング聖地と花崗岩滑床）",
    "timing": "グリーンシーズン：4月下旬〜11月中旬（夏のキャニオニング・秋の紅葉）",
    "desc": "足摺宇和海国立公園に位置する延長約12kmの大渓谷「滑床（なめとこ）渓谷」。巨大な一枚の花崗岩の滑らかな川床。日本の滝百選「雪輪の滝（落差80m）」。天然のウォータースライダーを滑り降りるキャニオニング体験。",
    "spots": "滑床渓谷（雪輪の滝・落合深渕・鳥居岩）、水際のロッジ、森の国ぽっぽ温泉（松野町）",
    "access": "JR予土線「松丸駅」より車約25分。松山道「三間IC」より約40分。",
    "tip": "滑床渓谷のキャニオニングは、雪輪の滝の滑らかな一枚岩をガイドと一緒に天然スライダーとして滑り降りる日本屈指の爽快アクティビティです。"
  },
  {
    "key": "uwajima_taimeshi_seafood_stay",
    "title": "3. 宇和島名物「元祖 宇和島鯛めし」＆じゃこ天（生鯛と生卵の至高のハーモニー）",
    "timing": "通年（新鮮な真鯛・初夏の愛南びやびやかつお）",
    "desc": "炊き込みではなく、新鮮な真鯛の薄切り刺身を生卵・特製タレ・薬味（胡麻・海苔・大葉）と混ぜ、アツアツのご飯にかけて食べる「宇和島鯛めし」。宇和海の小魚を骨ごとすり身にして揚げた熱々の「宇和島じゃこ天」「ふくめん」。",
    "spots": "ほづみ亭、かどや、きさいや広場（ロイズソフトクリーム・真珠販売）、愛南町深浦港",
    "access": "宇和島市内・愛南町。",
    "tip": "「きさいや広場」では、揚げたて熱々の宇和島じゃこ天をその場でテイクアウトして食べ歩きでき、魚本来の旨味と香ばしさをダイレクトに味わえます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【愛媛・宇和島＆愛南・滑床渓谷】現存天守宇和島城・滑床キャニオニング＆宇和島鯛めし宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "伊達十万石の城下町とキャニオニングの聖地・愛媛宇和島＆南予エリア完全特化！現存十二天守「宇和島城」、日本の滝百選「雪輪の滝・滑床渓谷」、真珠の海「宇和海」、名物「宇和島鯛めし・愛南びやびやかつお宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/ehime-uwajima-ainan-nametoko-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【愛媛・宇和島＆愛南・滑床渓谷】現存天守宇和島城・滑床キャニオニング＆宇和島鯛めし宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/ehime-uwajima-ainan-nametoko-stay/" }
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
            UWAJIMA & NAMETOKO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「愛媛・宇和島＆愛南・滑床渓谷」現存天守宇和島城・滑床キャニオニング＆宇和島鯛めし宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            伊達政宗の長子・秀宗が入封した南予の城下町「宇和島」。天守が現存する貴重な名城「宇和島城」。巨大な一枚岩の滑らかな川床が続く「滑床渓谷」と雪輪の滝。宇和海で育まれた日本一の真珠と、生卵と出汁で食べる絶品「宇和島鯛めし」を味わう旅。
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
              📊 愛媛・宇和島＆愛南・滑床渓谷：現存天守宇和島城・滑床キャニオニング＆宇和島鯛めし宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「愛媛・宇和島＆愛南・滑床渓谷：現存天守宇和島城・滑床キャニオニング＆宇和島鯛めし宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）松山大街道</td>
                <td className="p-3 text-stone-600">愛媛県松山市大街道2-5-12</td>
                <td className="p-3 text-stone-600">松山空港よりリムジンバス乗車約25分、一番町下車徒歩約3分。松山市駅よ</td>
                <td className="p-3 text-stone-600">駐車場無。有料提携駐車場（お城下パーキング2番町、フラワーパーキング2番町など）をご利用ください。</td>
                <td className="p-3 font-bold text-amber-600">★4.21（2332件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F148952%2F148952.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. ホテルイシバシ</td>
                <td className="p-3 text-stone-600">愛媛県宇和島市栄町港2-4-14</td>
                <td className="p-3 text-stone-600">宇和島駅周辺</td>
                <td className="p-3 text-stone-600">無料・20台　※予約不要・先着順</td>
                <td className="p-3 font-bold text-amber-600">★3.71（143件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F130595%2F130595.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 道後ｈａｋｕｒｏ</td>
                <td className="p-3 text-stone-600">愛媛県松山市道後鷺谷町3-1</td>
                <td className="p-3 text-stone-600">道後温泉駅周辺</td>
                <td className="p-3 text-stone-600">平面駐車場【有料】1泊 普通車770円・バイク 550円 ※大型車は駐車できません</td>
                <td className="p-3 font-bold text-amber-600">★4.56（1368件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,480〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F179083%2F179083.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 奥道後　壱湯の守（いちゆのもり）</td>
                <td className="p-3 text-stone-600">愛媛県松山市末町267</td>
                <td className="p-3 text-stone-600">松山（愛媛）駅周辺</td>
                <td className="p-3 text-stone-600">無料駐車場300台完備(先着順)</td>
                <td className="p-3 font-bold text-amber-600">★4.4（2723件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F27716%2F27716.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 宇和島オリエンタルホテル</td>
                <td className="p-3 text-stone-600">愛媛県宇和島市鶴島町6-10</td>
                <td className="p-3 text-stone-600">宇和島駅周辺</td>
                <td className="p-3 text-stone-600">1泊1台あたり700円　先着順でご案内いたします。</td>
                <td className="p-3 font-bold text-amber-600">★4.16（2994件）</td>
                <td className="p-3 font-bold text-rose-600">¥4,150〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F2352%2F2352.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 道後温泉　旅亭　うめ乃や</td>
                <td className="p-3 text-stone-600">愛媛県松山市上市2-8-9</td>
                <td className="p-3 text-stone-600">道後温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　８台　無料　予約必要</td>
                <td className="p-3 font-bold text-amber-600">★4.65（137件）</td>
                <td className="p-3 font-bold text-rose-600">¥25,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145017%2F145017.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）松山大街道</h3>
                  <span className="text-xs text-stone-400 ml-2">（かんでおほてるずまつやまおおかいどう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/148952/148952.jpg" alt="ＣＡＮＤＥＯ　ＨＯＴＥＬＳ（カンデオホテルズ）松山大街道 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>歴史と文化の街・松山の中心地、大街道に誕生した新たな街のシンボル。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市大街道2-5-12 ／ 最寄り駅：主要駅 ／ 交通案内：松山空港よりリムジンバス乗車約25分、一番町下車徒歩約3分。松山市駅より伊予鉄道利用、大街道駅より徒歩1分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>駐車場無。有料提携駐車場（お城下パーキング2番町、フラワーパーキング2番町など）をご利用ください。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「パンプディングが安定の美味しさパンプディングが安定の美味しさでした。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice/…　2026-08-29 19:22:24投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテルイシバシ</h3>
                  <span className="text-xs text-stone-400 ml-2">（いしばし）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/130595/130595.jpg" alt="ホテルイシバシ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【夕食評価★4.5】JR宇和島駅10分＆大浴場完備/全室wi-fi・無料駐車場・有料レンタル自転車</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県宇和島市栄町港2-4-14 ／ 最寄り駅：宇和島 ／ 交通案内：JR≪宇和島駅≫より徒歩10分｜宇和島朝日ICより車で3分｜宇和島新内港まで徒歩3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料・20台　※予約不要・先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駅や城が近く駐車場も無料、コスパ抜群2人で朝飯付き 駅や宇和島城が近く、駐車場無料、コスパを考えると十分だと思います。クチコミの詳細はこちらから　https://review.travel.r…　2026-08-23 17:49:21投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">道後ｈａｋｕｒｏ</h3>
                  <span className="text-xs text-stone-400 ml-2">（どうごはくろ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,480〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/179083/179083.jpg" alt="道後ｈａｋｕｒｏ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>2020年ＯＰＥＮ★松山・道後の旅もっと気軽に自由に思い思いに楽しむ温泉ライフスタイルホテル</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市道後鷺谷町3-1 ／ 最寄り駅：道後温泉 ／ 交通案内：道後温泉駅より徒歩にて約5分 ／ 松山自動車道 松山ICより車で約30分 ／ 道後温泉本館まで徒歩約3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>平面駐車場【有料】1泊 普通車770円・バイク 550円 ※大型車は駐車できません</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「満足しました今回はビジネスで利用。料金はリーズナブルなのに、お部屋はとても広く、朝食サービスはありがたかったです。クチコミの詳細はこちらから　https://review.travel.rak…　2026-08-27 16:54:49投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">奥道後　壱湯の守（いちゆのもり）</h3>
                  <span className="text-xs text-stone-400 ml-2">（おくどうご）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/27716/27716_t.jpg" alt="奥道後　壱湯の守（いちゆのもり） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【西日本最大級の露天風呂で湯巡り♪】道後から車で１０分！大自然に佇む美人湯の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市末町267 ／ 最寄り駅：松山（愛媛） ／ 交通案内：ＪＲ松山駅よりお車もしくは伊予鉄バス(奥道後行)で３０分／松山ＩＣから国道３１７号線を通って今治方面に４０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料駐車場300台完備(先着順)</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.5 ／ 立地 ★4.36 ／ 部屋 ★4.25 ／ 設備 ★4.12 ／ 風呂 ★4.53 ／ 食事 ★4.47</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お湯とバイキングは最高、階段移動は大変お部屋タイプおまかせのプランでしたが、腰痛に配慮して洋室にしてもらえ、当日は色浴衣の無料デーだったのもとてもうれしいポイントでした。到着時に駐車場に誰もお…　2026-10-04 07:42:07投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宇和島オリエンタルホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（うわじまおりえんたるほてる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥4,150〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/2352/2352_wheya.jpg" alt="宇和島オリエンタルホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>心がほっとする滞在を。選べるバスソルトと香る柑橘、淹れたてコーヒーでお迎え。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県宇和島市鶴島町6-10 ／ 最寄り駅：宇和島 ／ 交通案内：JR宇和島駅から徒歩5分｜松山自動車道宇和島朝日町ＩＣから車3分 │ コンビニ徒歩5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>1泊1台あたり700円　先着順でご案内いたします。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.25 ／ 立地 ★4.11 ／ 部屋 ★4.12 ／ 設備 ★4.06 ／ 風呂 ★4</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「入浴剤やドリンクのサービスが充実駐車場の予約が出来ない為、ホテルの前に付けるとフロント係が来て誘導してくれます。敷地内と少し離れた場所で、宿泊中は指定駐車です。宇和島駅からは少し歩きます。…　2026-10-09 04:30:48投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">道後温泉　旅亭　うめ乃や</h3>
                  <span className="text-xs text-stone-400 ml-2">（どうごおんせん　りょてい　うめのや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥25,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/145017/145017_room.jpg" alt="道後温泉　旅亭　うめ乃や 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>湯築の杜を望む静かな落ち着き。数寄屋造りの歴史感じる温泉宿で過ごす大人の贅沢。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 愛媛県松山市上市2-8-9 ／ 最寄り駅：道後温泉 ／ 交通案内：伊予鉄松山市駅・JR松山駅から伊予鉄で道後温泉駅へ。道後温泉駅・道後温泉本館から徒歩5分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　８台　無料　予約必要</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.82 ／ 立地 ★4.76 ／ 部屋 ★4.47 ／ 設備 ★4.35 ／ 風呂 ★4.65 ／ 食事 ★4.88</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「趣ある建物と丁寧な対応、美味しい料理に満足趣きのある建物で、部屋の雰囲気も良かったです。従業員の方々も、どなたも明るく感じの良い対応でした。料理も出汁に拘っておられ、とても美味しく頂きまし…　2026-05-26 16:06:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！愛媛県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、愛媛県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/D%C5%8Dgo_Onsen.jpg/1280px-D%C5%8Dgo_Onsen.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="道後温泉本館" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">道後温泉本館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本最古の温泉の一つとされる道後温泉のシンボル。木造三層楼の重厚な和風建築は国指定重要文化財であり、『千と千尋の神隠し』のモデルとも言われています。 道後温泉（どうごおんせん）は、四国・愛媛県松山市（旧国伊予国）に湧出する温泉。有馬温泉や白浜温泉と並ぶ日本三古湯の一つである。その存在は古代から知られ、万葉集巻一にも見える。なおかつてはこの周辺が温泉郡（おんせんぐん）（湯郡）と呼ばれていたが、これはこの温泉にちなむ地名である。 夏目漱石の小説『坊つちやん』（1905年）にも描かれ、愛媛県の代表的な観光地とな…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">松山城</h3>
                <p className="text-xs text-stone-600 leading-relaxed">松山市の中心・勝山山頂に建つ現存12天守の一つ。ロープウェイやリフトで登ることができ、天守からは瀬戸内海と松山平野の360度パノラマが見渡せます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">しまなみ海道（来島海峡大橋）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">愛媛県今治市と広島県尾道市を結ぶ海上架橋ルート。「サイクリストの聖地」として世界中から絶賛され、世界初の3連吊橋から瀬戸内海の多島美を一望できます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">佐田岬（さだみさき）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本一細長い佐田岬半島。風力発電の風車が並ぶドライブコースを抜け、岬の先端の白い灯台からは豊予海峡を挟んで九州・大分県を望むダイナミックな景色です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 愛媛県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 愛媛県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="ehime-uwajima-ainan-nametoko-stay" />
</div>
  );
}
