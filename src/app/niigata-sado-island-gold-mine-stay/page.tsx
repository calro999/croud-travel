import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/niigata-sado-island-gold-mine-stay/" },
  title: "新潟・佐渡島＆相川金山：世界遺産佐渡金山・たらい舟＆尖閣湾・佐渡寒ブリ宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界遺産登録の黄金の島・新潟佐渡島エリア完全特化！世界遺産「佐渡島の金山（道遊の割戸・北沢浮遊選鉱場）」、小木海岸の「たらい舟体験」、国の名勝「尖閣湾」、朱鷺の保護センター、名物「佐渡寒ブリ・佐渡牛宿」を徹底解説。",
  keywords: ["新潟", "佐渡島", "相川金山", "世界遺産佐渡金山", "たらい舟", "尖閣湾", "佐渡寒ブリ宿"],
  openGraph: {
    title: "新潟・佐渡島＆相川金山：世界遺産佐渡金山・たらい舟＆尖閣湾・佐渡寒ブリ宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "世界遺産登録の黄金の島・新潟佐渡島エリア完全特化！世界遺産「佐渡島の金山（道遊の割戸・北沢浮遊選鉱場）」、小木海岸の「たらい舟体験」、国の名勝「尖閣湾」、朱鷺の保護センター、名物「佐渡寒ブリ・佐渡牛宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "新潟・佐渡島＆相川金山：世界遺産佐渡金山・たらい舟＆尖閣湾・佐渡寒ブリ宿 厳選ガイド ｜ 日本全国・旅宿クラウド",
    description: "世界遺産登録の黄金の島・新潟佐渡島エリア完全特化！世界遺産「佐渡島の金山（道遊の割戸・北沢浮遊選鉱場）」、小木海岸の「たらい舟体験」、国の名勝「尖閣湾」、朱鷺の保護センター、名物「佐渡寒ブリ・佐渡牛宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["niigata-sado-island-gold-mine-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for niigata-sado-island-gold-mine-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "sado_gold_mine_heritage_stay",
    "title": "1. 世界遺産・佐渡島の金山〜相川・北沢浮遊選鉱場（400年の金銀採掘歴史と産業遺産）",
    "timing": "通年（新緑・夏のライトアップ・秋の日本海サンセット）",
    "desc": "世界文化遺産に登録された「佐渡島の金山」。山がV字に割れた象徴「道遊の割戸（どうゆうのわりと）」。江戸初期の手掘り坑道「宗太夫坑」と明治以降の「道遊坑」。緑の苔に覆われ「東洋一の選鉱場」と呼ばれた北沢浮遊選鉱場。",
    "spots": "世界遺産 史跡佐渡金山（道遊の割戸・宗太夫坑）、北沢浮遊選鉱場跡（夜間ライトアップ）、相川京町通り、奉行所跡",
    "access": "両津港より車で約50分。路線バス運行。",
    "tip": "「北沢浮遊選鉱場」は日没から夜間ライトアップが行われ、幻想的な光に浮かび上がる姿はまるでスタジオジブリの世界に入り込んだかのようです。"
  },
  {
    "key": "sado_tarai_bune_resort",
    "title": "2. 小木海岸・たらい舟〜宿根木・尖閣湾（透明な海をゆく伝統舟と重要伝統的町並み）",
    "timing": "通年（たらい舟乗船：通年運航）",
    "desc": "サザエやワカメを獲るために考案された佐渡の伝統舟「たらい舟（矢島・経島体験）」。船板を利用した板壁の民家が密集する重伝建の港町「宿根木（しゅくねぎ）」。高さ30mの断崖が連なる国の名勝「尖閣湾揚島遊園」。",
    "spots": "力屋観光汽船・矢島体験交流館（たらい舟）、宿根木（三角家・石畳の小路）、尖閣湾揚島遊園（海中透視船・あげしま水族館）、トキの森公園",
    "access": "両津港より車で約50〜60分。",
    "tip": "矢島・経島のたらい舟乗り場では、海中が透けて見えるほど透明度が高く、朱塗りの太鼓橋を背景にした記念写真が撮れます。"
  },
  {
    "key": "sado_beef_kanburi_gourmet_stay",
    "title": "3. 日本海の至宝「佐渡寒ブリ」＆幻の「佐渡牛」（ミネラル豊富な潮風が育む極上美味）",
    "timing": "冬期（11月〜2月は寒ブリ・紅ズワイガニの最盛期）",
    "desc": "佐渡沖の激流に揉まれて丸々と太った「佐渡寒ブリ」。脂の乗った寒ブリ刺しやブリしゃぶ。年間数十頭しか出荷されない幻の黒毛和牛「佐渡牛」。佐渡名産のおけさ柿、地酒・北雪や真野鶴とのマリアージュ。",
    "spots": "両津港・相川の海鮮料理店、北雪酒造（超音波熟成酒）、尾畑酒造（真野鶴・学校蔵）",
    "access": "佐渡島全域。",
    "tip": "佐渡島は島内に5つの酒蔵があり、新潟県内でも屈指の銘酒の産地として知られ、宿の夕食で地酒飲み比べセットを楽しむのがおすすめです。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【新潟・佐渡島＆相川金山】世界遺産佐渡金山・たらい舟＆尖閣湾・佐渡寒ブリ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "世界遺産登録の黄金の島・新潟佐渡島エリア完全特化！世界遺産「佐渡島の金山（道遊の割戸・北沢浮遊選鉱場）」、小木海岸の「たらい舟体験」、国の名勝「尖閣湾」、朱鷺の保護センター、名物「佐渡寒ブリ・佐渡牛宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/niigata-sado-island-gold-mine-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【新潟・佐渡島＆相川金山】世界遺産佐渡金山・たらい舟＆尖閣湾・佐渡寒ブリ宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/niigata-sado-island-gold-mine-stay/" }
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
            SADO ISLAND & GOLD MINE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「新潟・佐渡島＆相川金山」世界遺産佐渡金山・たらい舟＆尖閣湾・佐渡寒ブリ宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日本の歴史を動かした黄金の島「佐渡島」。世界遺産に登録された佐渡金山の割戸と、緑に覆われたラピュタのような北沢浮遊選鉱場。小木の海をゆく伝統のたらい舟。日本海の荒波が育む佐渡寒ブリと佐渡牛を味わう離島リゾートへ。
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
              📊 新潟・佐渡島＆相川金山：世界遺産佐渡金山・たらい舟＆尖閣湾・佐渡寒ブリ宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「新潟・佐渡島＆相川金山：世界遺産佐渡金山・たらい舟＆尖閣湾・佐渡寒ブリ宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 湖畔の宿　吉田家　＜佐渡島＞</td>
                <td className="p-3 text-stone-600">新潟県佐渡市両津夷261-1</td>
                <td className="p-3 text-stone-600">佐渡空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　６０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4.26（462件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,680〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F10682%2F10682.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 小木温泉　旅館かもめ荘　＜佐渡島＞</td>
                <td className="p-3 text-stone-600">新潟県佐渡市小木町11-7</td>
                <td className="p-3 text-stone-600">直江津駅周辺</td>
                <td className="p-3 text-stone-600">有　２０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★3.86（235件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,150〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31586%2F31586.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ふれあいハウス　潮津の里　＜佐渡島＞</td>
                <td className="p-3 text-stone-600">新潟県佐渡市背合38</td>
                <td className="p-3 text-stone-600">佐渡空港駅周辺</td>
                <td className="p-3 text-stone-600">無料　　3０台</td>
                <td className="p-3 font-bold text-amber-600">★2.75（56件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,155〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F4621%2F4621.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 尖閣荘　＜佐渡島＞</td>
                <td className="p-3 text-stone-600">新潟県佐渡市姫津1431-2</td>
                <td className="p-3 text-stone-600">車…佐渡汽船「両津港」より車で６０分、「小木港」より車で８０分／バス…</td>
                <td className="p-3 text-stone-600">有　３０台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4（241件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F29981%2F29981.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 佐和田温泉　旅館入海　＜佐渡島＞</td>
                <td className="p-3 text-stone-600">新潟県佐渡市窪田782</td>
                <td className="p-3 text-stone-600">佐渡空港駅周辺</td>
                <td className="p-3 text-stone-600">有り　30台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.28（179件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,950〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F9332%2F9332.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. みなみ旅館　＜佐渡島＞</td>
                <td className="p-3 text-stone-600">新潟県佐渡市住吉215-1</td>
                <td className="p-3 text-stone-600">両津港より、お車で５分</td>
                <td className="p-3 text-stone-600">有り　１０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.82（143件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,250〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F107792%2F107792.html" target="_blank" rel="noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">湖畔の宿　吉田家　＜佐渡島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（こはんのやど　よしだや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,680〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/10682/10682_rm.jpg" alt="湖畔の宿　吉田家　＜佐渡島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>両津港よりお車にて５分。（到着時電話にてお向かいあり、翌日も定期的に佐渡汽船まで送りあり）</p>
                  <p><strong>【所在地・アクセス】</strong>〒 新潟県佐渡市両津夷261-1 ／ 最寄り駅：佐渡空港 ／ 交通案内：佐渡汽船　両津港よりお車にて５分。無料送迎バス有り（要予約）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　６０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「清潔で広い部屋と蟹づくし、最高のロケーション建物の経年感はあるもののとても清潔で気持ちよく過ごせました。家族5人で利用しましたがとても広い部屋でゆっくりすることができました。スタッフの方の対応も素…　2026-08-20 21:54:28投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">小木温泉　旅館かもめ荘　＜佐渡島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（おぎおんせん　りょかん　かもめそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,150〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31586/31586_k.jpg" alt="小木温泉　旅館かもめ荘　＜佐渡島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>100％源泉かけ流し天然温泉×新鮮な魚介類を堪能♪港近くの静かな住宅地に建つペンション風の平屋建て。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 新潟県佐渡市小木町11-7 ／ 最寄り駅：直江津 ／ 交通案内：JR新潟駅→佐渡汽船新潟港～佐渡両津港→車で６０分。JR北陸本線直江津駅→佐渡汽船直江津港～小木港より徒歩１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　２０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「リーズナブルで美味しい食事に大満足!初めての佐渡島家族旅行でした。観光は大変記念になりました。宿泊した宿もリーズナブルだけどおいしい食事で大変満足しました。また来たいです。クチコミの詳細はこち…　2026-08-18 13:10:40投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ふれあいハウス　潮津の里　＜佐渡島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（ふれあいはうす　しおづのさと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,155〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/4621/4621_heya.jpg" alt="ふれあいハウス　潮津の里　＜佐渡島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★湾に沈む夕日が臨める絶好ロケーション★</p>
                  <p><strong>【所在地・アクセス】</strong>〒 新潟県佐渡市背合38 ／ 最寄り駅：佐渡空港 ／ 交通案内：両津港から車で４０分・赤泊より４０分・小木より３０分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無料　　3０台</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ふれあいハウス　潮津の里　＜佐渡島＞は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">尖閣荘　＜佐渡島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（せんかくそう）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/29981/29981_w.jpg" alt="尖閣荘　＜佐渡島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>海鮮が自慢の尖閣湾を見下ろす絶景宿！海水浴場＆釣場まで徒歩5分♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 新潟県佐渡市姫津1431-2 ／ 最寄り駅：主要駅 ／ 交通案内：車…佐渡汽船「両津港」より車で６０分、「小木港」より車で８０分／バス…海府線「姫津南」下車すぐ</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　３０台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「絶景と新鮮な魚介、親切な対応に大満足とても眺めがよく、夕飯はお腹いっぱいになるほどの量でした。旅館の従業員や女将さんもとても親切です。追加でさサザエの刺身を注文したところ、なかなかこないなぁと…　2026-08-25 20:45:06投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">佐和田温泉　旅館入海　＜佐渡島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（さわだおんせん　いりうみ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,950〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/9332/9332_war.jpg" alt="佐和田温泉　旅館入海　＜佐渡島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>黒い温泉と新鮮な海の幸を御堪能下さい。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 新潟県佐渡市窪田782 ／ 最寄り駅：佐渡空港 ／ 交通案内：入海は佐渡両津港より車で３０分。海岸まで３０ｍの海辺の黒い温泉。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　30台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事も美味しく部屋も清潔、接客も親切ご飯も美味しく部屋の掃除も行き届いていたので快適に過ごせました。フロントの方もとても親切でした。クチコミの詳細はこちらから　https://review…　2026-08-28 00:53:55投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">みなみ旅館　＜佐渡島＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（みなみりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,250〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/107792/107792_kya.jpg" alt="みなみ旅館　＜佐渡島＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>両津港から車で5分！天然温泉と、佐渡の旬の味覚を堪能できる宿。目の前は海です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 新潟県佐渡市住吉215-1 ／ 最寄り駅：主要駅 ／ 交通案内：両津港より、お車で５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「新鮮な魚介と花火、温泉で癒やされる旅夕食も朝食も魚介がたくさんで美味しかったです。ちょうど両津港の花火も宿の前の浜からみることができよかったです。温泉も泉質がよく日焼けした肌が癒されました。ク…　2026-08-12 19:15:27投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！新潟県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、新潟県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">清津峡渓谷トンネル（Tunnel of Light）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三大峡谷の一つ・清津峡の絶景を楽しめるアートトンネル。終点のパノラマステーションでは水鏡に渓谷のダイナミックな景観が映り込む映えスポットです。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">佐渡金山</h3>
                <p className="text-xs text-stone-600 leading-relaxed">江戸時代から平成まで400年にわたって採掘が続いた日本最大の金銀山。手掘りの坑道跡や巨大な金山遺構「北沢浮遊選鉱場」のノスタルジーが感動的です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Entrance_to_Echigo-Yuzawa_Onsen.JPG/1280px-Entrance_to_Echigo-Yuzawa_Onsen.JPG?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="苗場山・越後湯沢温泉" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">苗場山・越後湯沢温泉</h3>
                <p className="text-xs text-stone-600 leading-relaxed">四季を通じてアウトドアやリゾートが楽しめる一大リゾート地。冬は上質なパウダースノーのスキー場、秋はドラゴンドラからの日本一長い紅葉空中散歩が自慢です。 越後湯沢温泉（えちごゆざわおんせん）は、新潟県南魚沼郡湯沢町（旧越後国）にある温泉。川端康成の小説『雪国』のモデルになった温泉地である。単に湯沢温泉と呼ばれることもある。 この項目で扱うように、同じ湯沢町にある他の温泉も含めた呼び名としても用いられる。…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">萬代橋（ばんだいばし）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">信濃川にかかる6連アーチが美しい新潟市のシンボルであり国指定重要文化財。重厚な石造りの橋脚と美しい川辺の遊歩道が市民や観光客に親しまれています。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 新潟県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 新潟県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="niigata-sado-island-gold-mine-stay" />
</div>
  );
}
