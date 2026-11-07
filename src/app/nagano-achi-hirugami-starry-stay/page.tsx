import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/nagano-achi-hirugami-starry-stay/" },
  title: "長野・阿智村＆昼神温泉：日本一の星空ナイトツアー・美肌名湯＆信州牛極上宿 厳選ガイド",
  description: "環境省認定「日本一の星空」長野阿智村＆昼神温泉エリア完全特化！天空の楽園ナイトツアー（ヘブンスそのはら）、pH9.7の強アルカリ性美肌温泉、春の花桃の里、信州プレミアム牛と隠れ家旅館を徹底解説。",
  keywords: ["長野", "阿智村", "昼神温泉", "日本一の星空ナイトツアー", "美肌名湯", "信州牛極上宿", "温泉宿"],
  openGraph: {
    title: "長野・阿智村＆昼神温泉：日本一の星空ナイトツアー・美肌名湯＆信州牛極上宿 厳選ガイド",
    description: "環境省認定「日本一の星空」長野阿智村＆昼神温泉エリア完全特化！天空の楽園ナイトツアー（ヘブンスそのはら）、pH9.7の強アルカリ性美肌温泉、春の花桃の里、信州プレミアム牛と隠れ家旅館を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "長野・阿智村＆昼神温泉：日本一の星空ナイトツアー・美肌名湯＆信州牛極上宿 厳選ガイド",
    description: "環境省認定「日本一の星空」長野阿智村＆昼神温泉エリア完全特化！天空の楽園ナイトツアー（ヘブンスそのはら）、pH9.7の強アルカリ性美肌温泉、春の花桃の里、信州プレミアム牛と隠れ家旅館を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagano-achi-hirugami-starry-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagano-achi-hirugami-starry-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "achi_starry_night_tour",
    "title": "1. 富士見台高原ヘブンスそのはら〜天空の楽園（標高1400mで仰ぎ見る日本一の星空）",
    "timing": "通年（新月期の澄んだ夜空・冬のウィンターナイトツアー）",
    "desc": "全長2,500m、高低差600mのゴンドラで星空のステージへ。カウントダウンとともに山頂の照明が一斉に消灯すると、暗闇の中に無数の星々や天の川、流れ星が降り注ぐ感動のナイトツアー。",
    "spots": "富士見台高原ロープウェイ ヘブンスそのはら（天空の楽園 日本一の星空ナイトツアー）、浪合パーク（星空鑑賞施設）",
    "access": "昼神温泉街より車・送迎バスで約10〜15分。JR飯田線「飯田駅」より路線バス・タクシー約30分。",
    "tip": "星空ナイトツアーは山頂の気温が昼間より10度以上下がるため、夏でも上着、春・秋・冬は本格的な防寒着が必須です。"
  },
  {
    "key": "hirugami_bihada_onsen",
    "title": "2. 昼神温泉街・阿知川沿い（pH9.7の驚異的なとろとろ美肌湯と朝市散策）",
    "timing": "通年（春の花桃まつり：4月中旬〜5月上旬）",
    "desc": "昭和48年に発見された「昼神温泉」。ナトリウム-炭酸水素塩・塩化物泉の強アルカリ性温泉は、美容液のようにとろみがあり古い角質を落とす美肌の湯。毎朝開催される「昼神温泉朝市」での地元野菜や漬物の買い物。",
    "spots": "昼神温泉朝市広場、阿知川遊歩道、湯ったり〜な昼神（日帰り温泉・プール）、阿智神社",
    "access": "中央道飯田山本ICより車で約10分。名古屋駅から直行バスあり。",
    "tip": "昼神温泉朝市は毎朝6時（冬期は6時半）から開催され、地元農家のおばあちゃんが作る赤飯や手作りジャムが名物です。"
  },
  {
    "key": "achi_hanamomo_wagyu",
    "title": "3. 花桃の里（月川温泉）＆信州牛会席（紅白ピンク3色の花桃グラデーション）",
    "timing": "春（4月中旬〜5月上旬の花桃まつりシーズン）",
    "desc": "約5,000本もの花桃が一斉に咲き誇る日本一の桃源郷「月川温泉・花桃の里」。1本の枝から赤・白・ピンクの花が咲き分ける絶景。宿の夕食では、信州プレミアム牛の石焼きや鯉の甘煮、手打ち信州そばを堪能。",
    "spots": "花桃の里（月川温泉郷・花桃まつり）、はなもも街道、信州そば処",
    "access": "昼神温泉より車で約15分。",
    "tip": "花桃まつり期間中はライトアップも行われ、夜桜ならぬ夜花桃と星空の幻想的な共演が楽しめます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【長野・阿智村＆昼神温泉】日本一の星空ナイトツアー・美肌名湯＆信州牛極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "環境省認定「日本一の星空」長野阿智村＆昼神温泉エリア完全特化！天空の楽園ナイトツアー（ヘブンスそのはら）、pH9.7の強アルカリ性美肌温泉、春の花桃の里、信州プレミアム牛と隠れ家旅館を徹底解説。",
    "url": "https://croud-travel.pages.dev/nagano-achi-hirugami-starry-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【長野・阿智村＆昼神温泉】日本一の星空ナイトツアー・美肌名湯＆信州牛極上宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/nagano-achi-hirugami-starry-stay/" }
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
            ACHI STARRY SKY & HIRUGAMI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「長野・阿智村＆昼神温泉」日本一の星空ナイトツアー・美肌名湯＆信州牛極上宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            環境省が認定した日本一の星空の村「長野県阿智村」。標高1,400mの山頂へゴンドラで登り、合図とともに一斉に消灯される満天の天の川。pH9.7を誇る極上のとろとろ美肌湯「昼神温泉」と信州牛に癒やされる天空の旅。
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
                              loading="eager" fetchPriority="high"
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
                            </article>
                  ))}
                </div>
              </div>
            </section>
          );
        })}
      </div>

                    
        {/* Enriched Rakuten Travel Hotel Specs */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 長野・阿智村＆昼神温泉：日本一の星空ナイトツアー・美肌名湯＆信州牛極上宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「長野・阿智村＆昼神温泉：日本一の星空ナイトツアー・美肌名湯＆信州牛極上宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 昼神温泉　昼神グランドホテル天心</td>
                <td className="p-3 text-stone-600">長野県下伊那郡阿智村智里331-5</td>
                <td className="p-3 text-stone-600">飯田（長野）駅周辺</td>
                <td className="p-3 text-stone-600">有り　70台　無料　予約不要 【EV・PHEV用の充電器1台あり(普通充電200V)】</td>
                <td className="p-3 font-bold text-amber-600">★4.16（845件）</td>
                <td className="p-3 font-bold text-rose-600">プラン参照</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F72733%2F72733.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 昼神温泉　ユルイの宿　恵山</td>
                <td className="p-3 text-stone-600">長野県下伊那郡阿智村智里407</td>
                <td className="p-3 text-stone-600">ＪＲ飯田線より清内路・昼神温泉行きバスで４０分　昼神西口下車　徒歩１分</td>
                <td className="p-3 text-stone-600">有り　５０台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.4（2818件）</td>
                <td className="p-3 font-bold text-rose-600">¥13,750〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37440%2F37440.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 昼神温泉　癒楽（ゆら）の宿　清風苑</td>
                <td className="p-3 text-stone-600">長野県下伊那郡阿智村智里338-19</td>
                <td className="p-3 text-stone-600">中央道飯田山本ＩＣ～Ｒ１５３～R２５６（約10分）/　中央道園原IC～</td>
                <td className="p-3 text-stone-600">有り：４０台（無料）ホテルの前と後にご用意がございます。</td>
                <td className="p-3 font-bold text-amber-600">★4.4（1354件）</td>
                <td className="p-3 font-bold text-rose-600">¥15,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5987%2F5987.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 昼神温泉　石苔亭いしだ</td>
                <td className="p-3 text-stone-600">長野県下伊那郡阿智村智里332-3</td>
                <td className="p-3 text-stone-600">飯田（長野）駅周辺</td>
                <td className="p-3 text-stone-600">有り　３０台まで　屋外　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.71（330件）</td>
                <td className="p-3 font-bold text-rose-600">¥36,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17720%2F17720.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. 昼神温泉　日長庵　桂月</td>
                <td className="p-3 text-stone-600">長野県下伊那郡阿智村智里425</td>
                <td className="p-3 text-stone-600">飯田（長野）駅周辺</td>
                <td className="p-3 text-stone-600">有り　30台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.23（599件）</td>
                <td className="p-3 font-bold text-rose-600">¥16,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F5624%2F5624.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. 昼神温泉郷　懐石と炉ばたの宿　吉弥</td>
                <td className="p-3 text-stone-600">長野県下伊那郡阿智村智里503-2</td>
                <td className="p-3 text-stone-600">飯田（長野）駅周辺</td>
                <td className="p-3 text-stone-600">有り　4０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.16（550件）</td>
                <td className="p-3 font-bold text-rose-600">¥16,600〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F51693%2F51693.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">
              🏨 「長野・阿智村＆昼神温泉」掲載宿の所在地・アクセス・特徴データ一覧
            </h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">昼神温泉　昼神グランドホテル天心</h3>
                  <span className="text-xs text-stone-400 ml-2">（ひるがみおんせん　ひるがみぐらんどほてるてんしん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: プランにより変動</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/72733/72733_room.jpg" alt="昼神温泉　昼神グランドホテル天心 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>★全館Ｗｉ-Ｆｉ対応★種類豊富な湯船で「美人の湯」を愉しめる宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下伊那郡阿智村智里331-5 ／ 最寄り駅：飯田（長野） ／ 交通案内：中央自動車道  (名古屋方面から)園原ICより車で約10分　(東京・長野方面から)飯田山本インターより車で約10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　70台　無料　予約不要 【EV・PHEV用の充電器1台あり(普通充電200V)】</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「従業員の育成が行き届いており、また来たい昨年に続いて2度目の宿泊。サービスも決して過剰でなく、平日の宿泊であったためかゆったりと時間を過ごすことができた。昨年は、外国人の従業員とのコミュニケーショ…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">昼神温泉　ユルイの宿　恵山</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥13,750〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/37440/37440_he.jpg" alt="昼神温泉　ユルイの宿　恵山 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>大石を配した庭園露天風呂が好評。全客室から昼神温泉郷を一望でき、ゆったりと過ごしていただけます。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下伊那郡阿智村智里407 ／ 最寄り駅：主要駅 ／ 交通案内：ＪＲ飯田線より清内路・昼神温泉行きバスで４０分　昼神西口下車　徒歩１分   中央自動車道飯田山本ＩＣより１０分</p>
                  <p>【長野・阿智村＆昼神温泉：日本一の星空ナイトツアー・美】 <strong>【駐車場・マイカー利用】</strong>有り　５０台　無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋のアップグレードと美味しい食事に感謝10畳の部屋から大部屋へ移動してくださりありがとうございました。夕食も朝食もとてもおいしかったです。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">昼神温泉　癒楽（ゆら）の宿　清風苑</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥15,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5987/5987_suna.jpg" alt="昼神温泉　癒楽（ゆら）の宿　清風苑 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【2025年楽天トラベルブロンズアワード受賞】★日本一の星空と笑顔のおもてなし</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下伊那郡阿智村智里338-19 ／ 最寄り駅：主要駅 ／ 交通案内：中央道飯田山本ＩＣ～Ｒ１５３～R２５６（約10分）/　中央道園原IC～（約10分）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り：４０台（無料）ホテルの前と後にご用意がございます。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「温かいおもてなしと美味しい料理に大満足主人のお誕生日でお世話になりました。とても素敵なおもてなしをありがとうございました。スタッフさんはみなさんとても温かく、すれ違う方みなさん笑顔で挨拶をして…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">昼神温泉　石苔亭いしだ</h3>
                  <span className="text-xs text-stone-400 ml-2">（ひるがみおんせん　せきたいてい　いしだ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥36,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/17720/17720_heya.jpg" alt="昼神温泉　石苔亭いしだ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>平屋造り全17室純和風旅館◇露天風呂付き客室◇能舞台定期公演◇信州会席、美肌の湯、スパ、貸切風呂</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下伊那郡阿智村智里332-3 ／ 最寄り駅：飯田（長野） ／ 交通案内：中央道・飯田山本ＩＣより約７分／ＪＲ飯田駅より無料送迎約２５分（要事前予約）／名古屋より高速バスで約１２０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　３０台まで　屋外　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.85 ／ 立地 ★4.7 ／ 部屋 ★4.72 ／ 設備 ★4.76 ／ 風呂 ★4.73 ／ 食事 ★4.81</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「部屋の露天風呂は残念だが接客には満足露天ぶろ付きの部屋に宿泊させていただいたのですが部屋の泉質が大浴場の泉質より薄くガッカリ。仕方ないので大浴場で我慢をした次第です。それ以外は仲居さんの気遣いサー…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">昼神温泉　日長庵　桂月</h3>
                  <span className="text-xs text-stone-400 ml-2">（ひるがみおんせん　にっちょうあん　けいげつ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥16,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/5624/5624_room.jpg" alt="昼神温泉　日長庵　桂月 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【楽天トラベルブロンズアワード2024受賞】歴史ある老舗料亭を姉妹館に持つ料理自慢の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下伊那郡阿智村智里425 ／ 最寄り駅：飯田（長野） ／ 交通案内：JR飯田駅より無料送迎（要事前予約最終17:00） 中央道飯田山本ICより10分。園原ICより10分。</p>
                  <p>【長野・阿智村＆昼神温泉：日本一の星空ナイトツアー・美】 <strong>【駐車場・マイカー利用】</strong>有り　30台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.24 ／ 立地 ★4 ／ 部屋 ★4.23 ／ 設備 ★3.97 ／ 風呂 ★4.24 ／ 食事 ★4.37</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「鯉料理最高、送迎サービスに感謝ですい草の香りが漂うお部屋で、水回りも綺麗で快適でした。鯉料理を楽しみにしていましたが、とても美味しい味付けで、今まで食べてきた鯉料理で一番でした!温泉旅館の…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">昼神温泉郷　懐石と炉ばたの宿　吉弥</h3>
                  <span className="text-xs text-stone-400 ml-2">（ひるがみおんせん　かいせきとろばたのやど　きちや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥16,600〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/51693/51693_oh.jpg" alt="昼神温泉郷　懐石と炉ばたの宿　吉弥 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>昼神温泉のとろりとした美肌の湯と炉ばた／懐石料理が自慢の宿</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県下伊那郡阿智村智里503-2 ／ 最寄り駅：飯田（長野） ／ 交通案内：中央道　名古屋方面から：園原ＩＣより約１０分　　東京方面から：飯田山本ＩＣより約１０分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　4０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「バランスよくとてもいいホテルですリーズナブルなのに、総じてよかったです、家族全員満足でした。ご飯もとても美味しかったし、お風呂もきれいで広いし、露天風呂もよかったです。ナイトツアーの手配もして頂き…」
                  </blockquote>
                </div>
              </div>
            </div>
          </div></section>



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
    
      <HubRelatedPosts currentSlug="nagano-achi-hirugami-starry-stay" />
</div>
  );
}
