import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/iwate-sanriku-miyako-jodogahama-stay/" },
  title: "岩手・三陸宮古＆浄土ヶ浜：極楽浄土の白い奇岩・青の洞窟＆名物「瓶ドン」宿 厳選ガイド",
  description: "三陸復興国立公園の白砂と青松の絶景・岩手宮古エリア完全特化！国の名勝「浄土ヶ浜」、さっぱ船で行く「青の洞窟（八戸穴）」、三陸鉄道リアス線、三陸の海の幸を牛乳瓶に詰めた名物「瓶ドン」、宮古トラウトサーモン宿を徹底解説。",
  keywords: ["岩手", "三陸宮古", "浄土ヶ浜", "極楽浄土の白い奇岩", "青の洞窟", "名物「瓶ドン」宿", "温泉宿"],
  openGraph: {
    title: "岩手・三陸宮古＆浄土ヶ浜：極楽浄土の白い奇岩・青の洞窟＆名物「瓶ドン」宿 厳選ガイド",
    description: "三陸復興国立公園の白砂と青松の絶景・岩手宮古エリア完全特化！国の名勝「浄土ヶ浜」、さっぱ船で行く「青の洞窟（八戸穴）」、三陸鉄道リアス線、三陸の海の幸を牛乳瓶に詰めた名物「瓶ドン」、宮古トラウトサーモン宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "岩手・三陸宮古＆浄土ヶ浜：極楽浄土の白い奇岩・青の洞窟＆名物「瓶ドン」宿 厳選ガイド",
    description: "三陸復興国立公園の白砂と青松の絶景・岩手宮古エリア完全特化！国の名勝「浄土ヶ浜」、さっぱ船で行く「青の洞窟（八戸穴）」、三陸鉄道リアス線、三陸の海の幸を牛乳瓶に詰めた名物「瓶ドン」、宮古トラウトサーモン宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["iwate-sanriku-miyako-jodogahama-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for iwate-sanriku-miyako-jodogahama-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "jodogahama_ocean_resort",
    "title": "1. 浄土ヶ浜〜青の洞窟・さっぱ船（白流紋岩と緑の松が織りなす極楽浄土）",
    "timing": "通年（夏の海水浴・春〜秋のさっぱ船遊覧・冬の澄んだ海）",
    "desc": "天和年間に霊鏡和尚が「さながら極楽浄土のごとし」と感嘆した国の名勝「浄土ヶ浜」。透き通る入り江にそびえる白い巨岩群。小型の「さっぱ船」に乗ってヘルメット着用で入る「青の洞窟（八戸穴）」のエメラルドグリーンの輝き。",
    "spots": "浄土ヶ浜（浄土ヶ浜ビジターセンター・奥浄土ヶ浜）、青の洞窟（さっぱ船遊覧）、みやこ浄土ヶ浜遊覧船「うみねこ丸」、御台場展望台",
    "access": "JR山田線・三陸鉄道「宮古駅」より路線バスで約20分。盛岡駅より特急バス「106急行」で約2時間。",
    "tip": "浄土ヶ浜マリンハウスから出航する「さっぱ船」では、ウミネコに餌をあげながら青の洞窟へ向かい、洞窟内の水面がコバルトブルーに輝く神秘的な光景を間近で見られます。"
  },
  {
    "key": "miyako_port_seafood_stay",
    "title": "2. 宮古港〜三陸鉄道リアス線（本州最東端の岬と復興のローカル線）",
    "timing": "通年（三陸鉄道イベント列車や紅葉シーズン）",
    "desc": "本州最東端に位置する「魹ヶ崎（とどがさき）灯台」。太平洋の水平線を望む三陸海岸の絶景。三陸鉄道リアス線（盛〜久慈間）の宮古駅。宮古港魚市場に水揚げされる新鮮な真鱈・毛ガニ・キチジ（キンキ）の贅沢な味わい。",
    "spots": "魹ヶ崎灯台（本州最東端の碑）、三陸鉄道宮古駅、宮古市魚市場、道の駅みやこ（シートピアなあど）",
    "access": "宮古市内。",
    "tip": "本州最東端の「魹ヶ崎」へは、姉吉キャンプ場から自然歩道を約1時間歩くトレッキングルートで、到達すると本州最東端訪問証明書が発行されます。"
  },
  {
    "key": "sanriku_bindon_salmon_stay",
    "title": "3. 元祖ご当地名物「瓶ドン」＆宮古トラウトサーモン（自分でご飯にかける海の宝石箱）",
    "timing": "通年（ウニ・イクラ・めかぶ・サーモンなど季節の魚介）",
    "desc": "牛乳瓶の中にウニ・イクラ・めかぶ・宮古トラウトサーモンを層状に詰め込んだ宮古発祥の新名物「瓶ドン」。ホカホカのご飯の上に自分で豪快に回しかけて食べる楽しさ。上品な脂が乗った宮古産トラウトサーモンのお造り。",
    "spots": "蛇の目本店（寿司割烹）、魚正、浄土ヶ浜レストハウス、宮古市内の郷土料理宿",
    "access": "宮古市全域。",
    "tip": "瓶ドンは店ごとに具材の組み合わせが異なり、春は焼きウニ、秋は生イクラ、冬はタラコなど、季節ごとの旬の味覚を楽しめます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【岩手・三陸宮古＆浄土ヶ浜】極楽浄土の白い奇岩・青の洞窟＆名物「瓶ドン」宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "三陸復興国立公園の白砂と青松の絶景・岩手宮古エリア完全特化！国の名勝「浄土ヶ浜」、さっぱ船で行く「青の洞窟（八戸穴）」、三陸鉄道リアス線、三陸の海の幸を牛乳瓶に詰めた名物「瓶ドン」、宮古トラウトサーモン宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/iwate-sanriku-miyako-jodogahama-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【岩手・三陸宮古＆浄土ヶ浜】極楽浄土の白い奇岩・青の洞窟＆名物「瓶ドン」宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/iwate-sanriku-miyako-jodogahama-stay/" }
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
            MIYAKO & JODOGAHAMA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「岩手・三陸宮古＆浄土ヶ浜」極楽浄土の白い奇岩・青の洞窟＆名物「瓶ドン」宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            まるで極楽浄土のような白流紋岩の奇岩と透明な海「浄土ヶ浜」。小型さっぱ船で潜入する神秘の青の洞窟。三陸鉄道リアス線の絶景オーシャンビュー車窓。ウニ・イクラ・サーモンがぎっしり詰まった名物「瓶ドン」を味わう三陸海岸の旅。
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
              📊 岩手・三陸宮古＆浄土ヶ浜：極楽浄土の白い奇岩・青の洞窟＆名物「瓶ドン」宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「岩手・三陸宮古＆浄土ヶ浜：極楽浄土の白い奇岩・青の洞窟＆名物「瓶ドン」宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 浄土ヶ浜パークホテル</td>
                <td className="p-3 text-stone-600">岩手県宮古市日立浜町32-4</td>
                <td className="p-3 text-stone-600">ＪＲ山田線　宮古駅から奥浄土ヶ浜行きバスにて１５分、浄土ヶ浜ビジターセ</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.43（1566件）</td>
                <td className="p-3 font-bold text-rose-600">¥11,110〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F64789%2F64789.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 備長炭の湯　ホテル宮古ヒルズ　ステーション店（ＢＢＨホテルグループ）</td>
                <td className="p-3 text-stone-600">岩手県宮古市和見町5-1</td>
                <td className="p-3 text-stone-600">宮古駅周辺</td>
                <td className="p-3 text-stone-600">有り（無料）／約４０台／完全先着順（予約不可）</td>
                <td className="p-3 font-bold text-amber-600">★3.87（1679件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,950〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F44853%2F44853.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. ホテル　ルートイン宮古</td>
                <td className="p-3 text-stone-600">岩手県宮古市藤の川15-38</td>
                <td className="p-3 text-stone-600">宮古駅周辺</td>
                <td className="p-3 text-stone-600">有り　197台　（無料） 大型車駐車可能</td>
                <td className="p-3 font-bold text-amber-600">★4.17（857件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,275〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F145293%2F145293.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 宮古ホテル沢田屋</td>
                <td className="p-3 text-stone-600">岩手県宮古市新町4-1</td>
                <td className="p-3 text-stone-600">宮古駅周辺</td>
                <td className="p-3 text-stone-600">有　20台　無料　先着順</td>
                <td className="p-3 font-bold text-amber-600">★4（167件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F31842%2F31842.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. つたや旅館＜岩手県＞</td>
                <td className="p-3 text-stone-600">岩手県久慈市中央2-22</td>
                <td className="p-3 text-stone-600">久慈駅周辺</td>
                <td className="p-3 text-stone-600">旅館横のガレージ、左50m拉麺屋空地、駅裏　看板有</td>
                <td className="p-3 font-bold text-amber-600">★4（143件）</td>
                <td className="p-3 font-bold text-rose-600">¥5,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F59644%2F59644.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 渚亭たろう庵</td>
                <td className="p-3 text-stone-600">岩手県宮古市田老青砂里164-1</td>
                <td className="p-3 text-stone-600">田老駅周辺</td>
                <td className="p-3 text-stone-600">敷地内に有り　１３台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.67（164件）</td>
                <td className="p-3 font-bold text-rose-600">¥38,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F148922%2F148922.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">浄土ヶ浜パークホテル</h3>
                  <span className="text-xs text-stone-400 ml-2">（じょうどがはまぱーく）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥11,110〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/64789/64789_si.jpg" alt="浄土ヶ浜パークホテル 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>浄土ヶ浜の高台に建つ和の景観と四季の恵みあふれるホテル。三陸の海の幸をご用意してお待ちしております</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岩手県宮古市日立浜町32-4 ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ山田線　宮古駅から奥浄土ヶ浜行きバスにて１５分、浄土ヶ浜ビジターセンター下車後、徒歩５分。【ペットと宿泊可※小型犬】</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「眺めと朝日が最高、食事は少し残念部屋からの眺めが素晴らしく、とても贅沢な時間を過ごすことが出来ました。朝日も美しく良い思い出になりました。お食事は期待したほどではなく少し残念でしたが、朝の…　2026-09-04 23:43:06投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">備長炭の湯　ホテル宮古ヒルズ　ステーション店（ＢＢＨホテルグループ）</h3>
                  <span className="text-xs text-stone-400 ml-2">（びんちょうたんのゆ　ほてるみやこひるず　すてーしょんてん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,950〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/44853/44853_ka1.jpg" alt="備長炭の湯　ホテル宮古ヒルズ　ステーション店（ＢＢＨホテルグループ） 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★駐車場無料☆コンビニ徒歩１分圏内★男性専用大浴場完備（サウナ完備）☆平日限定無料夜カレー★</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岩手県宮古市和見町5-1 ／ 最寄り駅：宮古 ／ 交通案内：ＪＲ宮古駅より徒歩5分♪　宮古中央ICから車で約12分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（無料）／約４０台／完全先着順（予約不可）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「入口が分離されていて気兼ねなく快適に過ごせたカプセルホテルですが、上段と下段の入口が完全に分離されていて、気遣いすることなく、快適に過ごせましたクチコミの詳細はこちらから　https://re…　2026-08-27 07:29:03投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ホテル　ルートイン宮古</h3>
                  <span className="text-xs text-stone-400 ml-2">（るーといんみやこ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,275〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/145293/145293_siw.jpg" alt="ホテル　ルートイン宮古 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>大浴場完備、全室Wi-Fi 無料</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岩手県宮古市藤の川15-38 ／ 最寄り駅：宮古 ／ 交通案内：ＪＲ三陸鉄道　宮古駅よりお車にて約１0分、三陸自動車道 宮古南IC・宮古港ICより 車で約5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　197台　（無料） 大型車駐車可能</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「朝食開始がもう少し早いと助かる朝食開始が6時からだとありがたかったです。クチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/vo…　2026-08-26 23:30:29投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宮古ホテル沢田屋</h3>
                  <span className="text-xs text-stone-400 ml-2">（みやこ　ほてる　さわだや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/31842/31842_kan1.jpg" alt="宮古ホテル沢田屋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>宮古近海で揚れた旬の魚介料理が好評！【無料駐車場】【大浴場】【Wi-Fi】】【全室バス・トイレ】完備</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岩手県宮古市新町4-1 ／ 最寄り駅：宮古 ／ 交通案内：宮古駅より徒歩10分、宮古南IC＆宮古港フェリーターミナルからは車で15分圏内</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有　20台　無料　先着順</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「古さはあるが綺麗で昭和の雰囲気も良い古いが綺麗にされており、昭和感漂いクチコミの詳細はこちらから　https://review.travel.rakuten.co.jp/hotel/voice…　2026-08-05 08:24:02投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">つたや旅館＜岩手県＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（つたやりょかん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥5,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/59644/59644_hu.jpg" alt="つたや旅館＜岩手県＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>昭和２８年創業、宮作りの建物は半世紀たってもしっかりしており、時の流れを忘れさせてくれます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岩手県久慈市中央2-22 ／ 最寄り駅：久慈 ／ 交通案内：第一ホテル裏側に隣接、赤屋根　駅直進、みち銀右50M  先着駐車場　右50Mパチ屋横　 携帯08055526612</p>
                  <p><strong>【駐車場・マイカー利用】</strong>旅館横のガレージ、左50m拉麺屋空地、駅裏　看板有</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「おもてなしがすごい!今回2度目の宿泊でした。前回、switchのある大部屋に泊まり、子ども達が大喜びで、今回も同じ部屋を予約しました!なんと、switch2になっていて、子ども達大興奮でした!毎回…　2026-08-20 00:19:18投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">渚亭たろう庵</h3>
                  <span className="text-xs text-stone-400 ml-2">（なぎさていたろうあん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥38,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/148922/148922_room.jpg" alt="渚亭たろう庵 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>全室露天風呂付！東北唯一の海岸国立公園を眼下に望む≪絶景美食の宿≫。雄大な景色、三陸の海の幸が魅力！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 岩手県宮古市田老青砂里164-1 ／ 最寄り駅：田老 ／ 交通案内：三陸鉄道　「新田老駅」より無料送迎有り（事前に到着時間をお知らせください）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>敷地内に有り　１３台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「記念日のサプライズと絶景風呂に大満足客室はシンプルで広々、ソファーも大きめでゆったり過ごせました。内風呂(浴槽も大きめでシャワー付き)の他に低温サウナ、屋外には露天風呂も付いており虫の音を聴き月を…　2026-08-25 10:15:09投稿 &lt;a href=&quot;https://img.travel.rakuten.co.jp/image/tr/api/kw/HTX0u/?f_hotel_no=148922&quot; class=&quot;3click&quot;」
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
    
      <HubRelatedPosts currentSlug="iwate-sanriku-miyako-jodogahama-stay" />
</div>
  );
}
