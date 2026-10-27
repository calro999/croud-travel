import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/yamaguchi-nagato-yumoto-motonosumi-shrine-stay/" },
  title: "山口・長門湯本温泉＆元乃隅神社：日本海望む123基赤鳥居・恩湯リノベ温泉街宿 厳選ガイド",
  description: "CNN世界最長クラスの絶景鳥居と奇跡の再生温泉街・山口長門エリア完全特化！日本海へ連なる123基の赤鳥居「元乃隅神社」、国の名勝「青海島」、星野リゾート監修で美しく再生した「長門湯本温泉（恩湯・飛び石遊歩道・川床宿）」を徹底解説。",
  keywords: ["山口", "長門湯本温泉", "元乃隅神社", "日本海望む123基赤鳥居", "恩湯リノベ温泉街宿", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "山口・長門湯本温泉＆元乃隅神社：日本海望む123基赤鳥居・恩湯リノベ温泉街宿 厳選ガイド",
    description: "CNN世界最長クラスの絶景鳥居と奇跡の再生温泉街・山口長門エリア完全特化！日本海へ連なる123基の赤鳥居「元乃隅神社」、国の名勝「青海島」、星野リゾート監修で美しく再生した「長門湯本温泉（恩湯・飛び石遊歩道・川床宿）」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "山口・長門湯本温泉＆元乃隅神社：日本海望む123基赤鳥居・恩湯リノベ温泉街宿 厳選ガイド",
    description: "CNN世界最長クラスの絶景鳥居と奇跡の再生温泉街・山口長門エリア完全特化！日本海へ連なる123基の赤鳥居「元乃隅神社」、国の名勝「青海島」、星野リゾート監修で美しく再生した「長門湯本温泉（恩湯・飛び石遊歩道・川床宿）」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamaguchi-nagato-yumoto-motonosumi-shrine-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamaguchi-nagato-yumoto-motonosumi-shrine-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "nagato_yumoto_onsen_river_stay",
    "title": "1. 長門湯本温泉〜音信川川床・恩湯（星野リゾート監修で美しく再生した湯街）",
    "timing": "通年（春の桜・初夏のホタル・秋の紅葉・冬の雪灯り）",
    "desc": "開湯約600年、山口県最古の温泉地「長門湯本温泉」。音信川（おとづれがわ）沿いに整備された川床テラス、飛び石、竹林の階段。源泉直上に建つ立ち寄り湯「恩湯（おんとう）」。瓦屋根の宿が軒を連ね、そぞろ歩きが楽しいモダンレトロな温泉街。",
    "spots": "立ち寄り湯 恩湯、音信川川床テラス、おとづれ足湯、竹林の階段、大谷山荘、界 長門",
    "access": "JR美祢線「長門湯本駅」下車徒歩約10分。山口宇部空港より乗合タクシーで約75分。中国道「美祢IC」より約30分。",
    "tip": "音信川の川床テラスにはカフェが併設されており、川のせせらぎを聞きながら地元の長門ゆずきちを使ったドリンクやスイーツをテイクアウトして楽しめます。"
  },
  {
    "key": "motonosumi_shrine_cape_stay",
    "title": "2. 元乃隅神社〜123基の鳥居・龍宮の潮吹（CNNが選ぶ日本の最も美しい場所31選）",
    "timing": "通年（晴天の午前中〜午後は日本海の青と鳥居の赤が鮮烈）",
    "desc": "日本海に向かって朱色の鳥居が123基・100m以上にわたって並ぶ絶景「元乃隅（もとのすみ）神社」。大鳥居の上部に設置された「日本一入れにくい賽銭箱」。波が岩の割れ目に入り込んで吹き上がる「龍宮の潮吹」。広大な草原が広がる「千畳敷」。",
    "spots": "元乃隅神社、龍宮の潮吹、千畳敷（標高333mの草原カフェ）、青海島（海上アルプス・観光遊覧船）",
    "access": "長門湯本温泉より車約30分。JR長門古市駅よりタクシー約20分。",
    "tip": "高さ約6mの大鳥居の上にある賽銭箱に見事賽銭を投げ入れることができると、願い事が叶うと言われています。"
  },
  {
    "key": "nagato_gastro_kawara_soba_stay",
    "title": "3. 山口名物「瓦そば」＆長門やきとり・仙崎イカ（熱々の瓦と新鮮な地鶏）",
    "timing": "通年（初夏〜秋の仙崎活イカ・地鶏長州黒かしわ）",
    "desc": "熱した日本瓦の上で茶そばを香ばしく焼き、錦糸卵や牛肉、レモン、もみじおろしをトッピングして特製つゆにつけて食べる山口名物「瓦そば」。仙崎港で揚がる透明な「ケンサキイカ活造り」。養鶏が盛んな長門名物「長門やきとり（ガーリックパウダー）」。",
    "spots": "瓦そば柳屋（長門湯本温泉街）、仙崎みすゞ通り・センザキッチン、長門やきとり店群",
    "access": "長門市街・長門湯本温泉・仙崎港。",
    "tip": "瓦に接した茶そばがパリパリのおこげになり、上部の柔らかい麺との食感のコントラストが瓦そばの醍醐味です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【山口・長門湯本温泉＆元乃隅神社】日本海望む123基赤鳥居・恩湯リノベ温泉街宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "CNN世界最長クラスの絶景鳥居と奇跡の再生温泉街・山口長門エリア完全特化！日本海へ連なる123基の赤鳥居「元乃隅神社」、国の名勝「青海島」、星野リゾート監修で美しく再生した「長門湯本温泉（恩湯・飛び石遊歩道・川床宿）」を徹底解説。",
    "url": "https://croud-travel.pages.dev/yamaguchi-nagato-yumoto-motonosumi-shrine-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【山口・長門湯本温泉＆元乃隅神社】日本海望む123基赤鳥居・恩湯リノベ温泉街宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/yamaguchi-nagato-yumoto-motonosumi-shrine-stay/" }
    ]
  };

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            NAGATO YUMOTO & MOTONOSUMI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「山口・長門湯本温泉＆元乃隅神社」日本海望む123基赤鳥居・恩湯リノベ温泉街宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            青い日本海と断崖絶壁に向かって123基の朱色鳥居がトンネルのように連なる奇跡の絶景「元乃隅（もとのすみ）神社」。「長門富士」の麓、音信川（おとづれがわ）沿いに竹林や飛び石、川床カフェが美しくリノベーションされた「長門湯本温泉」。名湯「恩湯」と日本海の旬魚を味わう旅。
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
              className="bg-white border border-teal-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-teal-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-teal-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-teal-950/80 leading-relaxed font-medium">
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
              <div className="space-y-4 pt-4 border-t border-teal-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-teal-950 flex items-center gap-2">
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
                      className="flex flex-col justify-between border border-teal-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-teal-50 border-b border-teal-950/5">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="eager" fetchPriority="high"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-teal-950/30 text-xs font-bold">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-teal-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-teal-950/70 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
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
              📊 山口・長門湯本温泉＆元乃隅神社：日本海望む123基赤鳥居・恩湯リノベ温泉街宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「山口・長門湯本温泉＆元乃隅神社：日本海望む123基赤鳥居・恩湯リノベ温泉街宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 長門湯本温泉　湯本観光ホテル　西京</td>
                <td className="p-3 text-stone-600">山口県長門市深川湯本1051</td>
                <td className="p-3 text-stone-600">長門湯本駅周辺</td>
                <td className="p-3 text-stone-600">屋外駐車場有り（無料）、乗用車100台収容可能</td>
                <td className="p-3 font-bold text-amber-600">★4（907件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7243%2F7243.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 長門湯本温泉　山村別館</td>
                <td className="p-3 text-stone-600">山口県長門市深川湯本字川尻533-1</td>
                <td className="p-3 text-stone-600">長門湯本駅周辺</td>
                <td className="p-3 text-stone-600">有り60台 普通車無料※大型は11,000円</td>
                <td className="p-3 font-bold text-amber-600">★4.25（1019件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,800〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5670%2F5670.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 割烹旅館　寿美礼</td>
                <td className="p-3 text-stone-600">山口県</td>
                <td className="p-3 text-stone-600">ＪＲ　下関駅より徒歩にて3分</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.54（174件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,650〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76822%2F76822.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">長門湯本温泉　湯本観光ホテル　西京</h3>
                  <span className="text-xs text-stone-400 ml-2">（ながとゆもとおんせん　ゆもとかんこうほてる　さいきょう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7243/7243_heya.jpg" alt="長門湯本温泉　湯本観光ホテル　西京 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>広々とした大浴場や多彩な館内施設をお楽しみいただける温泉旅館■無料屋外駐車場100台収容可能！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山口県長門市深川湯本1051 ／ 最寄り駅：長門湯本 ／ 交通案内：中国道美称ICより車で30分／JR美祢線長門湯本駅より徒歩10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>屋外駐車場有り（無料）、乗用車100台収容可能</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「お値段相応夏休み旅行で、安かったので泊まらせてもらいました。やはり、お値段相応で、館内はかなり古く清潔にはされてますがあちこちに古さを感じました。大浴場はかなり広く清潔にはされてましたが、露天風呂…　2026-08-29 17:02:08投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">長門湯本温泉　山村別館</h3>
                  <span className="text-xs text-stone-400 ml-2">（ながとゆもとおんせん　やまむらべっかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,800〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5670/5670_heya1.jpg" alt="長門湯本温泉　山村別館 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>本場フィンランドのロウリュウ式バレルサウナ！四季を観望できる洋風造りの露天風呂を備えた宿です</p>
                  <p><strong>【所在地・アクセス】</strong>〒 山口県長門市深川湯本字川尻533-1 ／ 最寄り駅：長門湯本 ／ 交通案内：マイカー・中国縦貫自動車道美称ＩＣより長門湯本車で３０分 ＪＲ長門湯本駅より徒歩１３分（送迎あり）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り60台 普通車無料※大型は11,000円</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「館内に瓦そばの名店があり夕食が絶品山口名物の瓦そば有名店「たかせ」が館内にあるので 夕食で利用しました。たいへん美味でした。クチコミの詳細はこちらから　https://review.trave…　2026-09-08 09:58:39投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">割烹旅館　寿美礼</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,650〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/76822/76822.jpg" alt="割烹旅館　寿美礼 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ　下関駅より徒歩にて3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ふく料理と骨酒が最高、お風呂も充実朝夕共にお食事がふく料理でとっても美味しかったです。お酒の種類も色々あり選ぶ楽しみもあります。ふくの骨酒最高でした!貸切風呂や食事で宿を決めたい方に是非泊まってほ…　2026-09-18 22:59:10投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！山口県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、山口県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Tsunoshima_Island%2C_Yamaguchi_Aerial_photograph.2008.jpg/1280px-Tsunoshima_Island%2C_Yamaguchi_Aerial_photograph.2008.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="角島大橋（つのしまおおはし）" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">角島大橋（つのしまおおはし）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">コバルトブルーの澄み切った海を跨ぐ全長1,780mの離島架橋。まるで海の上を飛んでいるかのような爽快なドライブが楽しめるSNS大人気の絶景スポットです。 角島（つのしま）は、山口県下関市豊北町大字角島の日本海（響灘）上にある島。山口県の北西端。北長門海岸国定公園に含まれる。人口726人（平成27年国勢調査）。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">元乃隅神社（もとのすみじんじゃ）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">断崖に向かって123基の朱塗りの鳥居が龍のように連なる絶景神社。アメリカCNN「日本の最も美しい場所31選」にも選ばれた圧倒的なビジュアルです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">秋吉台・秋芳洞（あきよしだい・あきよしどう）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本最大級のカルスト台地・秋吉台と、その地下100mに広がる巨大大鍾乳洞・秋芳洞。「百枚皿」や「黄金柱」など地球の神秘を感じる大自然のアートです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">錦帯橋（きんたいきょう）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">清流錦川に架かる木造5連のアーチ橋。釘を一本も使わずに組み上げられた独自の木造構造技術は日本三名橋に数えられ、春の桜とのコラボレーションが見事です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 山口県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 山口県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-950 bg-white hover:bg-teal-50 border border-teal-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    
      <HubRelatedPosts currentSlug="yamaguchi-nagato-yumoto-motonosumi-shrine-stay" />
</div>
  );
}
