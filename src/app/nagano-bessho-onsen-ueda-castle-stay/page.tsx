import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/nagano-bessho-onsen-ueda-castle-stay/" },
  title: "長野・別所温泉＆上田城：信州の鎌倉・日本唯一八角三重塔＆真田の赤備え宿 厳選ガイド",
  description: "信州最古の温泉と真田幸村公の城下町・長野上田＆別所エリア完全特化！国宝「安楽寺 八角三重塔」、厄除け「北向観音」、真田氏の難攻不落名城「上田城跡公園」、美肌の硫黄泉「別所温泉外湯めぐり宿」を徹底解説。",
  keywords: ["長野", "別所温泉", "上田城", "信州の鎌倉", "日本唯一八角三重塔", "真田の赤備え宿", "温泉宿"],
  openGraph: {
    title: "長野・別所温泉＆上田城：信州の鎌倉・日本唯一八角三重塔＆真田の赤備え宿 厳選ガイド",
    description: "信州最古の温泉と真田幸村公の城下町・長野上田＆別所エリア完全特化！国宝「安楽寺 八角三重塔」、厄除け「北向観音」、真田氏の難攻不落名城「上田城跡公園」、美肌の硫黄泉「別所温泉外湯めぐり宿」を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "長野・別所温泉＆上田城：信州の鎌倉・日本唯一八角三重塔＆真田の赤備え宿 厳選ガイド",
    description: "信州最古の温泉と真田幸村公の城下町・長野上田＆別所エリア完全特化！国宝「安楽寺 八角三重塔」、厄除け「北向観音」、真田氏の難攻不落名城「上田城跡公園」、美肌の硫黄泉「別所温泉外湯めぐり宿」を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagano-bessho-onsen-ueda-castle-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagano-bessho-onsen-ueda-castle-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "bessho_onsen_heritage_inn_stay",
    "title": "1. 別所温泉街〜北向観音・3つの外湯めぐり（信州最古の名湯と厄除け霊場）",
    "timing": "通年（春の桜・秋の紅葉・冬の雪見風呂）",
    "desc": "長野・善光寺と向かい合って建ち、両方参詣しないと片参りになるとされる「北向観音」。木造の風情ある3つの外湯「大湯（木曾義仲ゆかり）」「大師の湯（慈覚大師）」「石湯（真田幸村の隠し湯）」。ほのかな硫黄の香りと美肌の弱アルカリ性単純硫黄泉。",
    "spots": "北向観音（愛染カツラ）、別所温泉外湯（大湯・大師の湯・石湯）、足湯「ななくりの湯」、七久里小路",
    "access": "上田駅より上田電鉄別所線で約30分「別所温泉駅」下車。上信越道「上田菅平IC」より約30分。",
    "tip": "別所温泉の外湯は入浴料が約200円とリーズナブルで、レトロな湯小屋巡りをしながら地元の方々との温かい触れ合いが楽しめます。"
  },
  {
    "key": "ueda_castle_sanada_hotel_stay",
    "title": "2. 上田城跡公園〜信州上田城下町（真田幸村の知略が息づく不落の名城）",
    "timing": "通年（春の上田城千本桜まつり・秋のけやき並木紅葉）",
    "desc": "真田昌幸が築城し、徳川の大軍を二度にわたり撃退した不落の名城「上田城（国の史跡）」。真田石が埋め込まれた東虎口櫓門。真田神社。城下町の柳町（旧北国街道沿いの格子戸と白壁土蔵の町並み・信州亀齢の酒蔵）。",
    "spots": "上田城跡公園（東虎口櫓門・真田神社・櫓展示）、信州上田真田丸大河ドラマ館跡、北国街道 柳町（岡崎酒造）",
    "access": "北陸新幹線「上田駅」お城口より徒歩約12分。",
    "tip": "柳町の「岡崎酒造」では、女性杜氏が醸す全国的入手困難酒「信州亀齢（きれい）」の蔵元直売や、地酒ジェラートが味わえます。"
  },
  {
    "key": "shinshu_bessho_soba_ayu_stay",
    "title": "3. 信州名物「手打ちそば」＆上田「美味だれ焼き鳥」（ニンニク醤油の秘伝タレ）",
    "timing": "通年（秋の松茸料理シーズン：9月〜11月上旬は全国屈指の松茸小屋がオープン）",
    "desc": "信州八重原産そば粉で打つ香り高い「手打ち信州そば」。すりおろしニンニクを効かせた特製醤油ダレをコップから直接かけて食べる上田ご当地グルメ「美味だれ（おいだれ）焼き鳥」。秋に別所温泉周辺の山々で採れる天然松茸尽くしの会席料理。",
    "spots": "別所温泉街の手打ちそば店、上田駅前美味だれ焼き鳥居酒屋、別所温泉の松茸料理旅館",
    "access": "上田市・別所温泉エリア。",
    "tip": "秋の別所温泉は「日本屈指の松茸の産地」として知られ、山腹に季節限定で建つ「松茸小屋」では、焼き松茸や松茸鍋、松茸ご飯がリーズナブルに堪能できます。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【長野・別所温泉＆上田城】信州の鎌倉・日本唯一八角三重塔＆真田の赤備え宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "信州最古の温泉と真田幸村公の城下町・長野上田＆別所エリア完全特化！国宝「安楽寺 八角三重塔」、厄除け「北向観音」、真田氏の難攻不落名城「上田城跡公園」、美肌の硫黄泉「別所温泉外湯めぐり宿」を徹底解説。",
    "url": "https://croud-travel.pages.dev/nagano-bessho-onsen-ueda-castle-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【長野・別所温泉＆上田城】信州の鎌倉・日本唯一八角三重塔＆真田の赤備え宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/nagano-bessho-onsen-ueda-castle-stay/" }
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
            BESSHO ONSEN & UEDA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「長野・別所温泉＆上田城」信州の鎌倉・日本唯一八角三重塔＆真田の赤備え宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            枕草子にも記された信州最古の温泉地「別所温泉（信州の鎌倉）」。日本で唯一現存する木造八角塔「国宝 安楽寺八角三重塔」。善光寺と向かい合う厄除けの霊場「北向観音」。徳川軍を二度撃退した真田幸村公ゆかりの「上田城」。ほのかな硫黄香る美肌湯と名物美味だれ焼き鳥の旅。
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
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-teal-950">{guide.title}</h2>
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
                    <h3 className="text-base font-bold font-journal-serif text-teal-950 flex items-center gap-2"><span>{guide.title}周辺のおすすめ厳選宿</span></h3>
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-teal-950 line-clamp-2">{hotel.hotelName}</h4>
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
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">長野・別所温泉＆上田城：信州の鎌倉・日本唯一八角三重塔＆真田の赤備え宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析</h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「長野・別所温泉＆上田城：信州の鎌倉・日本唯一八角三重塔＆真田の赤備え宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 信州別所温泉　旅宿　上松や</td>
                <td className="p-3 text-stone-600">長野県上田市別所温泉1628</td>
                <td className="p-3 text-stone-600">別所温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　20台　無料</td>
                <td className="p-3 font-bold text-amber-600">★4.51（1535件）</td>
                <td className="p-3 font-bold text-rose-600">¥9,350〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6064%2F6064.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 別所温泉　緑屋</td>
                <td className="p-3 text-stone-600">長野県上田市別所温泉225</td>
                <td className="p-3 text-stone-600">別所温泉駅周辺</td>
                <td className="p-3 text-stone-600">15台 予約不要、無料</td>
                <td className="p-3 font-bold text-amber-600">★4.64（22件）</td>
                <td className="p-3 font-bold text-rose-600">¥30,030〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F187968%2F187968.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 別所温泉　観音様となりの宿　かしわや本店</td>
                <td className="p-3 text-stone-600">長野県上田市別所温泉1654</td>
                <td className="p-3 text-stone-600">別所温泉駅周辺</td>
                <td className="p-3 text-stone-600">有り　２０台　無料　予約不要</td>
                <td className="p-3 font-bold text-amber-600">★4.71（224件）</td>
                <td className="p-3 font-bold text-rose-600">¥27,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F67488%2F67488.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-amber-600 pl-3">長野・別所温泉＆上田城で比較したい各宿のロケーション・駐車場・料金詳細</h3>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #1</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">信州別所温泉　旅宿　上松や</h3>
                  <span className="text-xs text-stone-400 ml-2">（しんしゅうべっしょおんせん　たびやど　うえまつや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥9,350〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/6064/6064_bath.jpg" alt="信州別所温泉　旅宿　上松や 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>楽天トラベルアワード7年連続受賞！（2025 シルバーアワード）</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県上田市別所温泉1628 ／ 最寄り駅：別所温泉 ／ 交通案内：JR北陸新幹線上田駅にて上田電鉄別所線に乗換、終点別所温泉駅より徒歩10分。</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　20台　無料</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.61 ／ 立地 ★4.28 ／ 部屋 ★4.34 ／ 設備 ★4.26 ／ 風呂 ★4.58 ／ 食事 ★4.7</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「露天からの夜景と柔らかいお湯に癒やされる露天からの夜景が綺麗でした。とにかくお湯が柔らかい。100年前の鎌倉に来たような、レトロな駅舎、古い仏閣が立ち並ぶ古都の風情が良かったです。…」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">別所温泉　緑屋</h3>
                  <span className="text-xs text-stone-400 ml-2">（べっしょおんせんみどりや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥30,030〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/187968/187968.jpg" alt="別所温泉　緑屋 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>「深緑の庭」で過ごす究極の癒し</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県上田市別所温泉225 ／ 最寄り駅：別所温泉 ／ 交通案内：北陸新幹線 上田駅で乗り換え、上田電鉄別所線 別所温泉駅から徒歩5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>15台 予約不要、無料</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💡 <strong>別所温泉　緑屋の滞在ポイント：</strong>「長野・別所温泉＆上田城エリアの散策拠点に適した立地。客室タイプや食事の有無・駐車場条件を旅程に合わせて比較するのがおすすめです。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">別所温泉　観音様となりの宿　かしわや本店</h3>
                  <span className="text-xs text-stone-400 ml-2">（べっしょおんせん　かんのんさまとのなりのやど　かしわやほんてん）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥27,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/67488/67488_rw.jpg" alt="別所温泉　観音様となりの宿　かしわや本店 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>～創業百余年。美肌温泉と館内全て畳敷きの情緒漂う歴史感じるやすらぎの宿～</p>
                  <p><strong>【所在地・アクセス】</strong>〒 長野県上田市別所温泉1654 ／ 最寄り駅：別所温泉 ／ 交通案内：上田交通　別所温泉駅より無料シャトルバスが運行</p>
                  <p>【長野・別所温泉＆上田城：信州の鎌倉・日本唯一八角三重】 <strong>【駐車場・マイカー利用】</strong>有り　２０台　無料　予約不要</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「食事も接客も最高!満室にも関わらず何度か利用した大浴場はいつも貸し切り状態でとてもリラックスできました。眺めのいい個室で朝夕美味しいお料理も堪能して、ラウンジでは日本酒やワインの試飲やコーヒーもい…」
                  </blockquote>
                </div>
              </div>
            </div>
          </div></section>



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
    
      <HubRelatedPosts currentSlug="nagano-bessho-onsen-ueda-castle-stay" />
</div>
  );
}
