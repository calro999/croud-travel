import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/ishikawa-noto-wakura-onsen-stay/" },
  title: "石川・能登和倉温泉：七尾湾オーシャンビュー＆能登牛・寒ブリ極上宿 厳選ガイド",
  description: "石川・能登半島和倉温泉エリア完全特化！七尾湾を一望する展望露天風呂、開湯1200年の海の温泉、能登牛・寒ブリ・のどぐろ会席と名門老舗旅館を徹底解説。",
  keywords: ["石川", "能登和倉温泉", "七尾湾オーシャンビュー", "能登牛", "寒ブリ極上宿", "温泉宿", "宿泊予約"],
  openGraph: {
    title: "石川・能登和倉温泉：七尾湾オーシャンビュー＆能登牛・寒ブリ極上宿 厳選ガイド",
    description: "石川・能登半島和倉温泉エリア完全特化！七尾湾を一望する展望露天風呂、開湯1200年の海の温泉、能登牛・寒ブリ・のどぐろ会席と名門老舗旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "石川・能登和倉温泉：七尾湾オーシャンビュー＆能登牛・寒ブリ極上宿 厳選ガイド",
    description: "石川・能登半島和倉温泉エリア完全特化！七尾湾を一望する展望露天風呂、開湯1200年の海の温泉、能登牛・寒ブリ・のどぐろ会席と名門老舗旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["ishikawa-noto-wakura-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ishikawa-noto-wakura-onsen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "wakura_bay_luxury",
    "title": "1. 和倉温泉街・七尾湾沿い（海に突き出す展望露天風呂と名門のおもてなし）",
    "timing": "通年（冬の雪景色と寒ブリシーズンが最高峰）",
    "desc": "七尾湾の穏やかな海を目の前に望む和倉温泉街。塩分を多く含む無色透明の泉質は保温・美肌効果抜群。名門旅館「加賀屋」をはじめ、海と一体になる絶景インフィニティ露天風呂を満喫。",
    "spots": "湯元の広場（飲泉・温泉卵作り）、和倉温泉総湯、弁天崎源泉公園、辻口博啓美術館（ル ミュゼ ドゥ アッシュ）",
    "access": "JR七尾線特急「能登かがり火号」で金沢駅から和倉温泉駅まで約60分。のと里山海道経由。",
    "tip": "パティシエ辻口博啓氏のミュージアムカフェ「ル ミュゼ ドゥ アッシュ」で七尾湾を眺めながらいただく限定スイーツが絶品です。"
  },
  {
    "key": "wakura_seafood_gourmet",
    "title": "2. 能登半島美食ステイ（冬の寒ブリ・幻の能登牛・高級魚のどぐろ会席）",
    "timing": "冬期（寒ブリ・ズワイガニ・牡蠣の冬の三大味覚）",
    "desc": "豊かな里山里海が育む能登の極上食材。脂がのった「能登寒ブリのしゃぶしゃぶ」、炭火で香ばしく焼き上げる「のどぐろの塩焼き」、希少な「能登牛のサーロインステーキ」を堪能。",
    "spots": "能登島大橋、のとじま水族館、七尾フィッシャーマンズ・ワーフ能登食祭市場",
    "access": "和倉温泉駅から車・路線バスで能登島・七尾市内へ。",
    "tip": "七尾食祭市場では、館内で購入した新鮮な魚介をその場で炭火焼きにして味わえる「浜焼きコーナー」が大人気です。"
  },
  {
    "key": "nanao_bay_resort",
    "title": "3. 能登島＆ツインブリッジのと（イルカが棲む海と絶景アイランドドライブ）",
    "timing": "通年（能登島のガラス工房体験）",
    "desc": "和倉温泉から能登島大橋を渡って能登島へ。野生のミナミハンドウイルカが暮らす穏やかな内海。島内のガラス工房での吹きガラス体験や、ツインブリッジのとからのパノラマ絶景。",
    "spots": "石川県能登島ガラス美術館、ツインブリッジのと、能登島マリンパーク海族公園",
    "access": "和倉温泉街より能登島大橋経由で車約10分。",
    "tip": "ツインブリッジのとの展望台からは、七尾北湾に浮かぶ牡蠣棚と吊り橋の優美なコントラストを一望できます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【石川・能登和倉温泉】七尾湾オーシャンビュー＆能登牛・寒ブリ極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "石川・能登半島和倉温泉エリア完全特化！七尾湾を一望する展望露天風呂、開湯1200年の海の温泉、能登牛・寒ブリ・のどぐろ会席と名門老舗旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/ishikawa-noto-wakura-onsen-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【石川・能登和倉温泉】七尾湾オーシャンビュー＆能登牛・寒ブリ極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/ishikawa-noto-wakura-onsen-stay/" }
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
            NOTO WAKURA MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「石川・能登和倉温泉」七尾湾オーシャンビュー＆能登牛・寒ブリ極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            波静かな七尾湾の海辺に湧き出す、国内屈指の高温泉「和倉温泉」。日本海の旬の恵み（寒ブリ・能登牛・加能ガニ）と、加賀屋をはじめとする名門旅館の極上のおもてなしに浸る旅。
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
              📊 石川・能登和倉温泉：七尾湾オーシャンビュー＆能登牛・寒ブリ極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「石川・能登和倉温泉：七尾湾オーシャンビュー＆能登牛・寒ブリ極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 和倉温泉　花ごよみ</td>
                <td className="p-3 text-stone-600">石川県七尾市和倉町カ部１３番地</td>
                <td className="p-3 text-stone-600">和倉温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　30台　先着順　無料</td>
                <td className="p-3 font-bold text-amber-600">★3.97（521件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F7182%2F7182.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 和倉温泉　ホテル海望</td>
                <td className="p-3 text-stone-600">石川県七尾市和倉町和歌崎部12-3</td>
                <td className="p-3 text-stone-600">和倉温泉駅周辺</td>
                <td className="p-3 text-stone-600">ホテル海望と湯っ足りパークの間に、海を望む無料駐車場がございます。全150台。</td>
                <td className="p-3 font-bold text-amber-600">★4.51（1065件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,900〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F14395%2F14395.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 和倉温泉　日本の宿　のと楽</td>
                <td className="p-3 text-stone-600">石川県七尾市石崎町香島1-14</td>
                <td className="p-3 text-stone-600">和倉温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　１５０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.24（583件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,700〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F39556%2F39556.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">和倉温泉　花ごよみ</h3>
                  <span className="text-xs text-stone-400 ml-2">（わくらおんせん　はなごよみ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/7182/7182_war.jpg" alt="和倉温泉　花ごよみ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>新鮮素材を使用したボリュームある料理が口コミで評判「小さな旅館ならではのサービス」でご希望に応じます</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県七尾市和倉町カ部１３番地 ／ 最寄り駅：和倉温泉 ／ 交通案内：JR和倉温泉駅下車、バスにて5分　総湯まで徒歩1、2分★</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　30台　先着順　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.01 ／ 立地 ★3.85 ／ 部屋 ★3.76 ／ 設備 ★3.66 ／ 風呂 ★3.85 ／ 食事 ★4.21</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「綺麗な室内と美味しい食事、接客も最高綺麗な室内。美味しい食事。そして何より、働いている方の接しやすい雰囲気が良かったです。また和倉温泉に行く際は、是非利用したいと思いました。クチコミの…　2026-10-07 16:34:50投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">和倉温泉　ホテル海望</h3>
                  <span className="text-xs text-stone-400 ml-2">（わくらおんせん　かいぼう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,900〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/14395/14395_kan1.jpg" alt="和倉温泉　ホテル海望 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>お客様に愛され続けて創業130余年。海を望むという名である理由、感動を一度ご体感ください。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県七尾市和倉町和歌崎部12-3 ／ 最寄り駅：和倉温泉 ／ 交通案内：JR和倉温泉駅から当館無料送迎バスで5分。金沢から「のと里山海道」徳田大津JCT、和倉IC経由、車で約1時間。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>ホテル海望と湯っ足りパークの間に、海を望む無料駐車場がございます。全150台。</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.6 ／ 立地 ★4.72 ／ 部屋 ★4.48 ／ 設備 ★4.23 ／ 風呂 ★4.41 ／ 食事 ★4.71</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食の品数が豊富で大満足の美味しさ復興途中故に露天風呂などが使えない点を除けば非常に良かったです。朝食は品数が非常に多く、ご飯もおかわりできるようで非常に良かったです。クチコミの詳細はこち…　2026-10-10 18:01:48投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">和倉温泉　日本の宿　のと楽</h3>
                  <span className="text-xs text-stone-400 ml-2">（わくらおんせん　にほんのやど　のとらく）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,700〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/39556/39556_ky.jpg" alt="和倉温泉　日本の宿　のと楽 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>波静かな七尾湾を望む露天風呂で檜の香りを満喫。海の見えるお部屋で能登の旬をごゆっくりご堪能下さい。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 石川県七尾市石崎町香島1-14 ／ 最寄り駅：和倉温泉 ／ 交通案内：ＪＲ　和倉温泉駅より車で５分／能越道和倉ＩＣより車で約７分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１５０台　無料　先着順</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.3 ／ 立地 ★4.33 ／ 部屋 ★4.26 ／ 設備 ★4.15 ／ 風呂 ★4.43 ／ 食事 ★4.27</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ベッドの下にホコリとゴミが散乱していたベットの下がホコリとゴミまみれ。ハウスダストアレルギーの方は泊まらない事をおすすめします。クチコミの詳細はこちらから　https://review.tra…　2026-10-08 07:25:37投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！石川県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、石川県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">兼六園</h3>
                <p className="text-xs text-stone-600 leading-relaxed">水戸偕楽園・岡山後楽園と並ぶ日本三名園の一つ。四季折々の庭園美が見事で、冬には雪の重みから枝を守る「雪吊り」が金沢の冬の風物詩として知られています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">金沢21世紀美術館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「まちに開かれた公園のような美術館」をコンセプトとした現代アートの殿堂。レアンドロ・エルリッヒの「スイミング・プール」など体感型アートが世界的人気です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">ひがし茶屋街</h3>
                <p className="text-xs text-stone-600 leading-relaxed">キムスコ（細い格子）と呼ばれる出格子がある美しい木造茶屋建築が並ぶ重要伝統的建造物群保存地区。金箔体験やカフェ巡りを着物姿で楽しめます。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">白米千枚田（しろよねせんまいだ）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本海に面した急斜面に1,004枚の小さな田んぼが重なり合う棚田の絶景。黄金色に輝く稲穂やイルミネーションイベント「あぜのきらめき」が幻想的です。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 石川県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 石川県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="ishikawa-noto-wakura-onsen-stay" />
</div>
  );
}
