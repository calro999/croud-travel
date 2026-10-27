import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/iwate-hiraizumi-chusonji-heritage-stay/" },
  title: "岩手・平泉中尊寺＆厳美渓：世界遺産金色堂・空飛ぶだんご＆前沢牛極上宿 厳選ガイド",
  description: "世界遺産・岩手平泉エリア完全特化！奥州藤原氏の極楽浄土「中尊寺金色堂」、毛越寺の浄土庭園、厳美渓の空飛ぶ「郭公だんご」、日本最高峰のブランド牛「前沢牛」と平泉周辺の温泉旅館を徹底解説。",
  keywords: ["岩手", "平泉中尊寺", "厳美渓", "世界遺産金色堂", "空飛ぶだんご", "前沢牛極上宿", "温泉宿"],
  openGraph: {
    title: "岩手・平泉中尊寺＆厳美渓：世界遺産金色堂・空飛ぶだんご＆前沢牛極上宿 厳選ガイド",
    description: "世界遺産・岩手平泉エリア完全特化！奥州藤原氏の極楽浄土「中尊寺金色堂」、毛越寺の浄土庭園、厳美渓の空飛ぶ「郭公だんご」、日本最高峰のブランド牛「前沢牛」と平泉周辺の温泉旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "岩手・平泉中尊寺＆厳美渓：世界遺産金色堂・空飛ぶだんご＆前沢牛極上宿 厳選ガイド",
    description: "世界遺産・岩手平泉エリア完全特化！奥州藤原氏の極楽浄土「中尊寺金色堂」、毛越寺の浄土庭園、厳美渓の空飛ぶ「郭公だんご」、日本最高峰のブランド牛「前沢牛」と平泉周辺の温泉旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["iwate-hiraizumi-chusonji-heritage-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for iwate-hiraizumi-chusonji-heritage-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hiraizumi_chusonji_walk",
    "title": "1. 中尊寺〜毛越寺（金色堂に輝く極楽浄土の世界と平安の浄土庭園）",
    "timing": "通年（春の桜・初夏の中尊寺ハス・秋の月見坂紅葉・冬の雪化粧）",
    "desc": "天治元年（1124年）建立、皆金色の国宝「中尊寺金色堂」。樹齢300年以上の杉並木が続く「月見坂」。平安時代の庭園様式を完全な形で残す特別名勝「毛越寺（もうつうじ）」の大泉が池を巡る平安浪漫の散策。",
    "spots": "中尊寺（金色堂・讃衡蔵・本堂・能舞台・月見坂）、毛越寺（大泉が池・開山堂・あやめ園）、平泉世界遺産ガイダンスセンター",
    "access": "JR東北本線「平泉駅」下車。中尊寺まで巡回バス「るんるん」で約10分。東北新幹線一ノ関駅から車約15分。",
    "tip": "中尊寺の「讃衡蔵（さんこうぞう）」には金色堂内陣の仏像群や国宝の経典が展示されており、必見の宝物館です。"
  },
  {
    "key": "genbikei_gembikei_stay",
    "title": "2. 厳美渓〜猊鼻渓（空飛ぶ「郭公だんご」と舟下りアドベンチャー）",
    "timing": "通年（新緑・夏の清涼・秋の紅葉舟下り）",
    "desc": "磐井川の奇岩とエメラルドグリーンの急流が織りなす名勝「厳美渓」。東屋からロープウェイ式のカゴで渓谷を渡る名物「郭公だんご（かっこうだんご）」。船頭の舟唄が響く「猊鼻渓（げいびけい）舟下り」。",
    "spots": "厳美渓（天工橋・郭公だんご・ガラスパーク）、猊鼻渓（舟下り・運玉投げ）、達谷窟毘沙門堂（岩窟寺院）",
    "access": "JR一ノ関駅より厳美渓行きバスで約20分。",
    "tip": "厳美渓の「郭公だんご」は、木槌で板を叩くと対岸の店舗から籠に乗って熱々のお茶とお団子がスーッと飛んでくる体験型名物です。"
  },
  {
    "key": "maesawagyu_gourmet_stay",
    "title": "3. 日本最高峰「前沢牛」＆平泉わんこそば（とろける極上霜降り肉の饗宴）",
    "timing": "通年（名峰早池峰山と北上川の恵み）",
    "desc": "鮮やかな霜降りととろけるような肉質で全国にその名を知られる「前沢牛」。老舗宿でいただく前沢牛のサーロインステーキやしゃぶしゃぶ。平泉伝統の「盛り出しわんこそば」や名物ずんだ餅を堪能。",
    "spots": "前沢牛専門店（味心うし政など）、平泉レストハウス、道の駅平泉（黄金かわらけかりんとう）",
    "access": "平泉・奥州前沢エリア。",
    "tip": "平泉のわんこそばは、椀を重ねるスタイルではなく、朱塗りの器に小分けされた薬味とともにゆっくり味わう「平泉スタイル」が主流です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【岩手・平泉中尊寺＆厳美渓】世界遺産金色堂・空飛ぶだんご＆前沢牛極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "世界遺産・岩手平泉エリア完全特化！奥州藤原氏の極楽浄土「中尊寺金色堂」、毛越寺の浄土庭園、厳美渓の空飛ぶ「郭公だんご」、日本最高峰のブランド牛「前沢牛」と平泉周辺の温泉旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/iwate-hiraizumi-chusonji-heritage-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【岩手・平泉中尊寺＆厳美渓】世界遺産金色堂・空飛ぶだんご＆前沢牛極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/iwate-hiraizumi-chusonji-heritage-stay/" }
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
            HIRAIZUMI WORLD HERITAGE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「岩手・平泉中尊寺＆厳美渓」世界遺産金色堂・空飛ぶだんご＆前沢牛極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            奥州藤原氏が築いた黄金郷「平泉」。金箔で覆われた国宝「中尊寺金色堂」と、平安の雅を今に伝える毛越寺の浄土庭園。名勝・厳美渓の渓谷美を眺め、極上の前沢牛とわんこそばに舌鼓を打つ歴史浪漫の旅。
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
              📊 岩手・平泉中尊寺＆厳美渓：世界遺産金色堂・空飛ぶだんご＆前沢牛極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「岩手・平泉中尊寺＆厳美渓：世界遺産金色堂・空飛ぶだんご＆前沢牛極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 花巻温泉　佳松園</td>
                <td className="p-3 text-stone-600">岩手県花巻市湯本第1地割125-2</td>
                <td className="p-3 text-stone-600">新花巻駅周辺</td>
                <td className="p-3 text-stone-600">有り　30台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.69（1120件）</td>
                <td className="p-3 font-bold text-rose-600">¥18,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F13482%2F13482.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 祭畤温泉　かみくら</td>
                <td className="p-3 text-stone-600">岩手県一ノ関市厳美町祭畤32</td>
                <td className="p-3 text-stone-600">一ノ関駅周辺</td>
                <td className="p-3 text-stone-600">有り　２５台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.67（341件）</td>
                <td className="p-3 font-bold text-rose-600">¥22,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72032%2F72032.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 旅館　舞鶴＜岩手県＞</td>
                <td className="p-3 text-stone-600">岩手県西磐井郡平泉町平泉志羅山130</td>
                <td className="p-3 text-stone-600">平泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.49（279件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F172092%2F172092.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 奥州・平泉温泉旅館　ＩＴＳＵＭＵ</td>
                <td className="p-3 text-stone-600">岩手県奥州市衣川日向60-2</td>
                <td className="p-3 text-stone-600">平泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　４０台　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.35（90件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F196603%2F196603.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 奥州平泉温泉　そば庵　しづか亭</td>
                <td className="p-3 text-stone-600">岩手県西磐井郡平泉町平泉長倉10-5</td>
                <td className="p-3 text-stone-600">平泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.24（433件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,031〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54928%2F54928.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 厳美渓温泉　滝の湯　いつくし園</td>
                <td className="p-3 text-stone-600">岩手県一関市巌美町南滝の上15</td>
                <td className="p-3 text-stone-600">一関駅より車で１５分／岩手交通　「巌美渓」行きバス終点まで</td>
                <td className="p-3 text-stone-600">有り　８０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★3.92（990件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F54152%2F54152.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">花巻温泉　佳松園</h3>
                  <span className="text-xs text-stone-400 ml-2">（はなまきおんせん　かしょうえん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥18,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/13482/13482_w.jpg" alt="花巻温泉　佳松園 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>とろとろの湯と心に残るおもてなし。特別な日を佳松園で過ごす愉しみ。花巻ICよりわずか5分の別世界。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岩手県花巻市湯本第1地割125-2 ／ 最寄り駅：新花巻 ／ 交通案内：花巻IC：右折後直進4km（5分）、JR新花巻駅・JR花巻駅：無料送迎バス20分（定時運行・完全予約制）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　30台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.74 ／ 立地 ★4.61 ／ 部屋 ★4.64 ／ 設備 ★4.68 ／ 風呂 ★4.79 ／ 食事 ★4.72</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「スタッフの対応が良く、食事も温泉も大満足スタッフの皆さんの対応が感じよく、チェックインからチェックアウトまでとても気持ちよく過ごすことができました。食事も温泉もお部屋も満足で非日常の空間でリフレッ…　2026-10-10 17:17:52投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">祭畤温泉　かみくら</h3>
                  <span className="text-xs text-stone-400 ml-2">（まつるべおんせん　かみくら）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥22,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/72032/72032_kan.jpg" alt="祭畤温泉　かみくら 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全7室のリトリート宿。泡付き温泉と着物で愉しむJapanese French。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岩手県一ノ関市厳美町祭畤32 ／ 最寄り駅：一ノ関 ／ 交通案内：【公共交通】タクシーのみ　【乗用車】一関駅よりお車にて約45分／世界遺産「平泉」へ約35分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２５台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「栗駒山麓の温泉と絶品ジャパニーズフレンチに大満足栗駒山麓の静かな場所で都会の喧騒を忘れてのんびりと温泉を堪能できる宿でした。スタッフ一同ホスピタリティが素晴らしく、食事も地産地消にこだわったジャパ…　2026-08-29 17:20:11投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">旅館　舞鶴＜岩手県＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（まいづる）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/172092/172092_kan1.jpg" alt="旅館　舞鶴＜岩手県＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>楽天トラベルブロンズアワード2020受賞｜世界遺産平泉の中心♪料理が高評価のおもてなしの宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岩手県西磐井郡平泉町平泉志羅山130 ／ 最寄り駅：平泉 ／ 交通案内：平泉駅より徒歩にて約8分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「美味しい料理とご主人の説明に大満足中尊寺金色堂と毛越寺の観光にこちらの旅館を利用しました。ごはんが美味しいという口コミ通り、趣向を凝らした先付に新鮮なお刺身、美味しいお肉、お餅とどれも大変美味…　2026-08-29 17:35:03投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">奥州・平泉温泉旅館　ＩＴＳＵＭＵ</h3>
                  <span className="text-xs text-stone-400 ml-2">（おうしゅうひらいずみおんせんりょかんいつむ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/196603/196603.jpg" alt="奥州・平泉温泉旅館　ＩＴＳＵＭＵ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【いわて割第2弾 9/1～開催】世界遺産の地・平泉に佇む古都奥州の宿。東北観光の拠点に。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岩手県奥州市衣川日向60-2 ／ 最寄り駅：平泉 ／ 交通案内：平泉駅より車で約７分、東北自動車道平泉・前沢ＩＣより車で約３分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　４０台　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「すべてが素晴らしく最高の思い出になったとても思い出に残る素敵な時間を過ごすことができました。お部屋は隅々まで清潔感があり、落ち着いてゆっくり過ごせる空間でした。スタッフの皆さんも終始丁…　2026-08-25 07:06:04投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">奥州平泉温泉　そば庵　しづか亭</h3>
                  <span className="text-xs text-stone-400 ml-2">（おうしゅうひらいずみおんせん　そばあん　しずかてい）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,031〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/54928/54928_kan.jpg" alt="奥州平泉温泉　そば庵　しづか亭 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>源泉かけ流しの大浴場と、自家菜園から収穫する野菜の美味しさ。岩手名産「前沢牛」も味わえる</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岩手県西磐井郡平泉町平泉長倉10-5 ／ 最寄り駅：平泉 ／ 交通案内：中尊寺より奥へ約６キロ懐かしい里山にぽつんと佇む一軒宿。平泉駅から車１０分。平泉にある唯一の源泉かけ流し　露天風呂あり</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「自家菜園で採れた新鮮な野菜料理が絶品目の前にある自前の畑で採れた多種多様な野菜の食事は美味しかったです。クチコミの詳細はこちらから　https://review.travel.rakute…　2026-08-23 21:19:14投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">厳美渓温泉　滝の湯　いつくし園</h3>
                  <span className="text-xs text-stone-400 ml-2">（げんびけいおんせん　たきのゆ　いつくしえん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/54152/54152_w.jpg" alt="厳美渓温泉　滝の湯　いつくし園 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【厳美渓から徒歩5分】天然温泉と本格中華や前沢牛など旬の味覚を楽しむ、平泉観光に最適な歴史ある温泉宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岩手県一関市巌美町南滝の上15 ／ 最寄り駅：主要駅 ／ 交通案内：一関駅より車で１５分／岩手交通　「巌美渓」行きバス終点まで</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　８０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「掃除が行き届き、従業員の対応も好印象前日の午前中でしたが、予約でき良かったです。楽天のクーポンを使ってお安く宿泊できました。他のレビューにもあるとおり、古めのお宿でしたが掃除は行き届いてい…　2026-08-22 12:27:40投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！岩手県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、岩手県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">中尊寺金色堂（平泉）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界遺産・平泉の象徴であり、奥州藤原氏の栄華を今に伝える極楽浄土の建築。堂全体が金箔で覆われ、螺鈿細工や象牙の装飾が施された国宝の美しさは言葉を失うほどです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">浄土ヶ浜</h3>
                <p className="text-xs text-stone-600 leading-relaxed">三陸復興国立公園を代表する三陸海岸の景勝地。白い鋭利な岩肌と青松、穏やかで透明度の高いエメラルドグリーンの入江が「まるで極楽浄土のよう」と称えられています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">龍泉洞</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三大鍾乳洞の一つで、国の天然記念物。洞内に湧き出る地底湖は世界有数の透明度を誇り、「ドラゴンブルー」と呼ばれる神秘的な青い輝きに吸い込まれそうになります。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">小岩井農場</h3>
                <p className="text-xs text-stone-600 leading-relaxed">岩手山の雄大な山麓に広がる日本最大級の民間総合農場。美しい一本桜や歴史あるレンガサイロ、搾りたての牛乳を使った絶品アイスクリームなどが楽しめます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 岩手県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 岩手県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="iwate-hiraizumi-chusonji-heritage-stay" />
</div>
  );
}
