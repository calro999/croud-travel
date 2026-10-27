import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/tokushima-naruto-otsuka-museum-stay/" },
  title: "徳島・鳴門＆大塚国際美術館：世界三大潮流・鳴門の渦潮＆陶板名画・鳴門鯛宿 厳選ガイド",
  description: "世界三大潮流の渦潮と世界最大級の陶板美術館・徳島鳴門エリア完全特化！大塚国際美術館のシスティーナ礼拝堂、鳴門海峡の渦潮クルーズ、渦の道、鳴門温泉、ブランド魚「鳴門鯛・鳴門わかめ」＆阿波牛宿を徹底解説。",
  keywords: ["徳島", "鳴門", "大塚国際美術館", "世界三大潮流", "鳴門の渦潮", "陶板名画", "鳴門鯛宿"],
  openGraph: {
    title: "徳島・鳴門＆大塚国際美術館：世界三大潮流・鳴門の渦潮＆陶板名画・鳴門鯛宿 厳選ガイド",
    description: "世界三大潮流の渦潮と世界最大級の陶板美術館・徳島鳴門エリア完全特化！大塚国際美術館のシスティーナ礼拝堂、鳴門海峡の渦潮クルーズ、渦の道、鳴門温泉、ブランド魚「鳴門鯛・鳴門わかめ」＆阿波牛宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "徳島・鳴門＆大塚国際美術館：世界三大潮流・鳴門の渦潮＆陶板名画・鳴門鯛宿 厳選ガイド",
    description: "世界三大潮流の渦潮と世界最大級の陶板美術館・徳島鳴門エリア完全特化！大塚国際美術館のシスティーナ礼拝堂、鳴門海峡の渦潮クルーズ、渦の道、鳴門温泉、ブランド魚「鳴門鯛・鳴門わかめ」＆阿波牛宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokushima-naruto-otsuka-museum-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for tokushima-naruto-otsuka-museum-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "naruto_otsuka_museum_resort",
    "title": "1. 大塚国際美術館（システィーナ礼拝堂・モネの大睡蓮を原寸大再現した世界的ミュージアム）",
    "timing": "通年（鑑賞ルート約4km・1日かけてじっくり楽しむ西洋名画の世界）",
    "desc": "大塚製薬グループが設立した世界最大級の陶板名画美術館「大塚国際美術館」。バチカンの「システィーナ礼拝堂」天井画の完全立体再現や、自然光の中で鑑賞するモネの「大睡蓮」、レオナルド・ダ・ヴィンチの「最後の晩餐」修復前後比較。",
    "spots": "システィーナ・ホール、スクロヴェーニ礼拝堂、モネの池（大睡蓮）、カフェ・ド・ジヴェルニー",
    "access": "JR鳴門駅より路線バス約15分。徳島阿波おどり空港より車・バスで約30分。",
    "tip": "館内は非常に広大（展示点数1,000点以上）なため、歩きやすい靴で訪れ、途中カフェで名物スイーツを挟みながら鑑賞するのがおすすめです。"
  },
  {
    "key": "naruto_whirlpool_uzunomichi_stay",
    "title": "2. 鳴門の渦潮〜うずしおクルーズ・渦の道（最大直径20m！世界最大級の潮流）",
    "timing": "春・秋の大潮時（特に3月〜5月の大潮は年間で最もダイナミックな渦潮が発生）",
    "desc": "瀬戸内海と紀伊水道の潮位差によって発生する「鳴門の渦潮」。大鳴門橋の橋桁内に作られた遊歩道「渦の道」のガラス床から45m直下を見下ろすスリル。「うずしお観潮船（わんだーなると・アクアエディ）」で渦の真横へ接近。",
    "spots": "大鳴門橋遊歩道 渦の道、うずしお観潮船、鳴門公園（千畳敷展望台・エスカヒル鳴門）",
    "access": "鳴門北ICすぐ。鳴門公園バス停下車。",
    "tip": "渦潮は潮の満ち引きによって時間が決まっているため、訪れる前に必ず「潮見表」でその日のベストタイム（大潮・満潮・干潮）を確認しましょう。"
  },
  {
    "key": "naruto_tai_awaodori_gourmet",
    "title": "3. 激流の美味「鳴門鯛」＆阿波牛（骨にコブができるほどの激流で育つ引き締まった白身）",
    "timing": "春（「桜鯛」と呼ばれる産卵前の春が最も脂が乗る）",
    "desc": "鳴門海峡の激しい潮流を泳ぎ抜くことで「骨にコブ」ができるほど身が引き締まった「鳴門鯛」。コリコリした歯ごたえの鯛そうめんや鯛釜飯。特産「鳴門わかめ」のしゃぶしゃぶ、ホクホク甘い「鳴門金時」、ブランド黒毛和牛「阿波牛」。",
    "spots": "鳴門鯛料理店、道の駅くるくるなると（鳴門金時スイーツ）、鳴門わかめ直売所",
    "access": "鳴門市街・鳴門海峡周辺。",
    "tip": "鳴門鯛は「鯛めし」にすると、ふっくらした身と香ばしく焼いた皮の脂がご飯全体に染み渡り最高の郷土の味となります。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【徳島・鳴門＆大塚国際美術館】世界三大潮流・鳴門の渦潮＆陶板名画・鳴門鯛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "世界三大潮流の渦潮と世界最大級の陶板美術館・徳島鳴門エリア完全特化！大塚国際美術館のシスティーナ礼拝堂、鳴門海峡の渦潮クルーズ、渦の道、鳴門温泉、ブランド魚「鳴門鯛・鳴門わかめ」＆阿波牛宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/tokushima-naruto-otsuka-museum-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【徳島・鳴門＆大塚国際美術館】世界三大潮流・鳴門の渦潮＆陶板名画・鳴門鯛宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/tokushima-naruto-otsuka-museum-stay/" }
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
            NARUTO & OTSUKA MUSEUM GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「徳島・鳴門＆大塚国際美術館」世界三大潮流・鳴門の渦潮＆陶板名画・鳴門鯛宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            世界の名画1,000余点を陶板で原寸大再現した「大塚国際美術館」と、世界三大潮流が巻き起こす大迫力の「鳴門の渦潮」。鳴門海峡の激流に揉まれて身が引き締まった極上の「鳴門鯛」。青い海を望む絶景オーシャンリゾートへ。
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
                    
        {/* Enriched Rakuten API & Wikipedia Tourist Guide */}
        <section data-enriched-rakuten-wiki="true" className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-stone-200 space-y-8 my-10">
          <div className="space-y-2 border-b border-stone-200 pb-4">
            <span className="text-[11px] font-extrabold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
              RAKUTEN TRAVEL API &amp; LOCAL GUIDE
            </span>
            <h2 className="text-xl md:text-2xl font-bold text-stone-900">
              📊 徳島・鳴門＆大塚国際美術館：世界三大潮流・鳴門の渦潮＆陶板名画・鳴門鯛宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「徳島・鳴門＆大塚国際美術館：世界三大潮流・鳴門の渦潮＆陶板名画・鳴門鯛宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. ベイリゾートホテル　鳴門海月</td>
                <td className="p-3 text-stone-600">徳島県鳴門市鳴門町土佐泊浦福池65-7</td>
                <td className="p-3 text-stone-600">鳴門駅周辺</td>
                <td className="p-3 text-stone-600">有３０台　無料　予約不要。当館まではアクセスページに掲載の写真付き道順をご覧ください</td>
                <td className="p-3 font-bold text-amber-600">★4.45（3088件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,000〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F17766%2F17766.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. アオアヲナルトリゾート</td>
                <td className="p-3 text-stone-600">徳島県</td>
                <td className="p-3 text-stone-600">神戸淡路鳴門自動車道 鳴門北ＩＣより１分 ＪＲ鳴門駅より車で約１０分</td>
                <td className="p-3 text-stone-600">施設へ要確認</td>
                <td className="p-3 font-bold text-amber-600">★4.46（4254件）</td>
                <td className="p-3 font-bold text-rose-600">¥16,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F6123%2F6123.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. グランドメルキュール淡路島リゾート＆スパ</td>
                <td className="p-3 text-stone-600">兵庫県南あわじ市福良丙317</td>
                <td className="p-3 text-stone-600">鳴門駅周辺</td>
                <td className="p-3 text-stone-600">有／240台（無料・先着順）優先駐車場（妊婦様含む）有電気自動車用充電器×4基（有料）</td>
                <td className="p-3 font-bold text-amber-600">★4.15（5571件）</td>
                <td className="p-3 font-bold text-rose-600">¥6,200〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F40154%2F40154.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ベイリゾートホテル　鳴門海月</h3>
                  <span className="text-xs text-stone-400 ml-2">（なるとかいげつ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,000〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/17766/17766_kan.jpg" alt="ベイリゾートホテル　鳴門海月 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>部屋食で鳴門の会席を♪鳴門うず潮に一番近い景色に感動の旅館</p>
                  <p><strong>【所在地・アクセス】</strong>〒 徳島県鳴門市鳴門町土佐泊浦福池65-7 ／ 最寄り駅：鳴門 ／ 交通案内：高速道路　鳴門北ICより車で６分。高速バス鳴門公園口より徒歩10分。大塚美術館バス停などからシャトルバス送迎有。要予約</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有３０台　無料　予約不要。当館まではアクセスページに掲載の写真付き道順をご覧ください</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「手入れの行き届いた空間と充実したサービス建物自体はふるいようですが、手入れと管理が行き届いていて不便なく過ごせました。周りにあまり店や食事処がないので、立地があまりよくないのかもしれませんが、なる…　2026-08-20 06:12:14投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">アオアヲナルトリゾート</h3>
                  
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥16,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/6123/6123_meal1.jpg" alt="アオアヲナルトリゾート 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>四季折々の味覚と温泉・快適な客室が魅力の人気宿。</p>
                  <p><strong>【所在地・アクセス】</strong>〒  ／ 最寄り駅：主要駅 ／ 交通案内：神戸淡路鳴門自動車道 鳴門北ＩＣより１分 ＪＲ鳴門駅より車で約１０分 大塚美術館まで車で3分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り（詳細はプラン画面参照）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「子供も大人も大満足、海辺の遊びと食事を満喫家族で伺いました。チェックインは15時でしたが.12時にホテルにつきチェックインまで海辺や、釣りぼり、職業体験などでとても楽しむことができました。… 2026-09-05 20:05:36投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">グランドメルキュール淡路島リゾート＆スパ</h3>
                  <span className="text-xs text-stone-400 ml-2">（ぐらんどめるきゅーるあわじしまりぞーとあんどすぱ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥6,200〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/40154/40154_ro.jpg" alt="グランドメルキュール淡路島リゾート＆スパ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>【オールインクルーシブ】海と空を愉しむ！淡路島の癒しの絶景リゾートで上質な滞在を</p>
                  <p><strong>【所在地・アクセス】</strong>〒 兵庫県南あわじ市福良丙317 ／ 最寄り駅：鳴門 ／ 交通案内：【淡路島南】車約10分、【西淡三原】車約20分（コンビニ等経由はこちら）</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有／240台（無料・先着順）優先駐車場（妊婦様含む）有電気自動車用充電器×4基（有料）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「魚介やお寿司の種類が少なく子供の食事も不満魚介類が思ったほど無かったし、お寿司の種類も少なかったのが不満小さな子供の食べる物が少なかった。クチコミの詳細はこちらから　https://rev…　2026-08-29 08:58:40投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！徳島県の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、徳島県を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">鳴門の渦潮（大鳴門橋）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">播磨灘と紀伊水道の干満差によって発生する世界最大級の渦潮。「渦の道」の海上遊歩道ガラス床から見下ろす激しい潮流と渦巻きは大迫力です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">祖谷のかずら橋（秘境・祖谷）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">日本三大秘境・祖谷渓谷に架かるシラクチカズラで作られたスリル満点の吊り橋。一歩踏みだすたびにギシギシと揺れ、足下の隙間から見える吉野川が爽快です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">大塚国際美術館</h3>
                <p className="text-xs text-stone-600 leading-relaxed">世界初の陶板名画美術館。レオナルド・ダ・ヴィンチの『最後の晩餐』やフェルメールの『真珠の耳飾りの少女』など1,000点以上の西洋名画が原寸大で完全再現されています。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">眉山（びざん）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">徳島市街の中心に位置し「眉の如く雲居に見ゆる」と万葉集にも詠まれた徳島のシンボル。ロープウェイで登る山頂からは吉野川と徳島平野を一望できます。</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 徳島県エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 徳島県の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="tokushima-naruto-otsuka-museum-stay" />
</div>
  );
}
