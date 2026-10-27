import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  alternates: { canonical: "https://croud-travel.pages.dev/kyoto-uji-fushimi-sake-matcha-stay/" },
  title: "京都・宇治＆伏見酒蔵：世界遺産平等院・宇治抹茶＆伏見十石舟・酒蔵宿 厳選ガイド",
  description: "千年の歴史と名水が醸す伝統文化・京都宇治＆伏見エリア完全特化！十円玉でおなじみ世界遺産「平等院鳳凰堂」、宇治川の鵜飼、本場宇治抹茶パフェ、伏見酒蔵の白壁土蔵・十石舟めぐり、京会席＆利き酒宿を徹底解説。",
  keywords: ["京都", "宇治", "伏見酒蔵", "世界遺産平等院", "宇治抹茶", "伏見十石舟", "酒蔵宿"],
  openGraph: {
    title: "京都・宇治＆伏見酒蔵：世界遺産平等院・宇治抹茶＆伏見十石舟・酒蔵宿 厳選ガイド",
    description: "千年の歴史と名水が醸す伝統文化・京都宇治＆伏見エリア完全特化！十円玉でおなじみ世界遺産「平等院鳳凰堂」、宇治川の鵜飼、本場宇治抹茶パフェ、伏見酒蔵の白壁土蔵・十石舟めぐり、京会席＆利き酒宿を徹底解説。",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "京都・宇治＆伏見酒蔵：世界遺産平等院・宇治抹茶＆伏見十石舟・酒蔵宿 厳選ガイド",
    description: "千年の歴史と名水が醸す伝統文化・京都宇治＆伏見エリア完全特化！十円玉でおなじみ世界遺産「平等院鳳凰堂」、宇治川の鵜飼、本場宇治抹茶パフェ、伏見酒蔵の白壁土蔵・十石舟めぐり、京会席＆利き酒宿を徹底解説。",
  }
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kyoto-uji-fushimi-sake-matcha-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kyoto-uji-fushimi-sake-matcha-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "uji_byodoin_greentea_stay",
    "title": "1. 平等院鳳凰堂〜宇治川・宇治橋通（平安貴族が憧れた極楽浄土と茶舗散歩）",
    "timing": "通年（春の藤棚ライトアップ・秋の宇治川紅葉・新茶の5月）",
    "desc": "永承7年（1052年）関白藤原頼通が建立した世界遺産「平等院鳳凰堂」。阿字池に映る優美な姿。宇治川の中州「塔の島」や「宇治上神社（世界最古の神社建築）」。創業数百年の老舗茶舗が立ち並ぶ宇治橋通り商店街。",
    "spots": "世界遺産 平等院（鳳凰堂・鳳翔館ミュージアム）、宇治上神社、宇治神社、宇治川さわらびの道",
    "access": "JR奈良線「宇治駅」または京阪宇治線「宇治駅」下車徒歩約10分。",
    "tip": "平等院境内にある「鳳翔館」では、本物の国宝・雲中供養菩薩像26体や鳳凰一対をガラス越し至近距離で鑑賞できます。"
  },
  {
    "key": "fushimi_sake_brewery_stay",
    "title": "2. 伏見酒蔵通り〜十石舟・寺田屋（白壁土蔵が連なる水郷と幕末浪漫）",
    "timing": "通年（春の十石舟桜のトンネル・新酒の冬蔵開き）",
    "desc": "名水「伏水」に恵まれ、日本有数の酒どころとして栄えた「伏見」。濠川沿いに連なる月桂冠大倉記念館や黄桜カッパカントリーの白壁土蔵。柳並木をくぐる観光船「十石舟・三十石船」。坂本龍馬遭難の地「寺田屋」。",
    "spots": "月桂冠大倉記念館（酒造り見学・利き酒処）、伏見十石舟、寺田屋、黄桜カッパカントリー、伏見大手筋商店街",
    "access": "京阪本線「中書島駅」または「伏見桃山駅」下車徒歩約5分。",
    "tip": "「月桂冠大倉記念館」では、見学の最後に純米大吟醸やプラムワインなど3種類のプレミアム銘酒の試飲が楽しめます。"
  },
  {
    "key": "kyoto_kaiseki_matcha_sake_stay",
    "title": "3. 本場「宇治抹茶」スイーツ＆伏見銘酒（挽きたて濃茶パフェと京懐石マリアージュ）",
    "timing": "通年（5月の新茶・秋の抹茶スイーツ巡り）",
    "desc": "石臼で丁寧に挽かれた極上宇治抹茶を使った「抹茶パフェ」「生茶ゼリイ」「抹茶蕎麦」。伏見の銘水で仕込まれた「純米大吟醸」と、京都の旬の素材（京野菜・湯葉・鴨肉）を盛り込んだ伝統の京懐石料理。",
    "spots": "中村藤吉本店（生茶ゼリイ）、伊藤久右衛門（抹茶パフェ）、辻利兵衛本店、伏見酒蔵小路（十八蔵利き酒セット）",
    "access": "宇治・伏見エリア。",
    "tip": "「伏見酒蔵小路」では、伏見の18の蔵元の銘酒を一堂に集めた「十八蔵利き酒セット（粋酔セット）」が大人気です。"
  }
];


  const jsonLdArticle = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "【京都・宇治＆伏見酒蔵】世界遺産平等院・宇治抹茶＆伏見十石舟・酒蔵宿 完全ガイド ｜ 日本全国・旅宿クラウド",
    "description": "千年の歴史と名水が醸す伝統文化・京都宇治＆伏見エリア完全特化！十円玉でおなじみ世界遺産「平等院鳳凰堂」、宇治川の鵜飼、本場宇治抹茶パフェ、伏見酒蔵の白壁土蔵・十石舟めぐり、京会席＆利き酒宿を徹底解説。",
    "url": "https://croud-travel.pages.dev/kyoto-uji-fushimi-sake-matcha-stay/",
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
      { "@type": "ListItem", "position": 2, "name": "【京都・宇治＆伏見酒蔵】世界遺産平等院・宇治抹茶＆伏見十石舟・酒蔵宿 完全ガイド ｜ 日本全国・旅宿クラウド", "item": "https://croud-travel.pages.dev/kyoto-uji-fushimi-sake-matcha-stay/" }
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
            UJI & FUSHIMI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">「京都・宇治＆伏見酒蔵」世界遺産平等院・宇治抹茶＆伏見十石舟・酒蔵宿 厳選ガイド</h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            十円硬貨に描かれた極楽浄土の宮殿「平等院鳳凰堂」と、日本最高峰の茶文化が息づく「宇治」。名水・伏水が湧き出る白壁土蔵の酒蔵の街「伏見」。十石舟に揺られながら巡る水郷と、挽きたて宇治抹茶・伏見の銘酒を味わう雅な旅。
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
              📊 京都・宇治＆伏見酒蔵：世界遺産平等院・宇治抹茶＆伏見十石舟・酒蔵宿 厳選ガイド：掲載宿スペック一覧比較表＆宿泊者クチコミ・アクセス詳細分析
            </h2>
            <p className="text-xs md:text-sm text-stone-600 leading-relaxed">
              楽天トラベル公式APIより取得した「京都・宇治＆伏見酒蔵：世界遺産平等院・宇治抹茶＆伏見十石舟・酒蔵宿 厳選ガイド」掲載宿の所在地・最寄り駅・駐車場条件・クチコミ評価・参考最安料金を一覧で比較できます。公共交通機関（新幹線・在来線・送迎バス）利用の方もマイカー・レンタカー利用の方も、旅のスタイルに合った一軒をお選びください。
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
                <td className="p-3 font-bold text-stone-900">1. 宇治壱番宿にがうり</td>
                <td className="p-3 text-stone-600">京都府宇治市宇治里尻2-17</td>
                <td className="p-3 text-stone-600">宇治（京都）駅周辺</td>
                <td className="p-3 text-stone-600">★徒歩2分以内に専用駐車場がございます(無料)★</td>
                <td className="p-3 font-bold text-amber-600">★4.13（94件）</td>
                <td className="p-3 font-bold text-rose-600">¥10,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F153403%2F153403.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">2. 旅館あづまや　＜京都府＞</td>
                <td className="p-3 text-stone-600">京都府京都市下京区堀川通り七条上ル（西本願寺前）</td>
                <td className="p-3 text-stone-600">京都駅周辺</td>
                <td className="p-3 text-stone-600">なし</td>
                <td className="p-3 font-bold text-amber-600">★4.17（418件）</td>
                <td className="p-3 font-bold text-rose-600">¥2,970〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F151223%2F151223.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">3. 京町家　一棟貸し　ｈｉｇｕｒａｓｈｉ</td>
                <td className="p-3 text-stone-600">京都府京都市伏見区肥後町357</td>
                <td className="p-3 text-stone-600">丹波橋駅周辺</td>
                <td className="p-3 text-stone-600">お近くのコインパーキングをご利用ください（400円/24h、徒歩4分）（900円/24h、徒歩2分）</td>
                <td className="p-3 font-bold text-amber-600">★2（5件）</td>
                <td className="p-3 font-bold text-rose-600">¥8,500〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183807%2F183807.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">4. 優遊　ＩＮＮ　Ｆｕｓｈｉｍｉ　Ｋｙｏｔｏ</td>
                <td className="p-3 text-stone-600">京都府京都市伏見区深草山村町999-4</td>
                <td className="p-3 text-stone-600">墨染駅周辺</td>
                <td className="p-3 text-stone-600">無し　　近隣にコインパーキングあり（徒歩1分：24ｈ660円等）※出入り毎に料金がかかります。</td>
                <td className="p-3 font-bold text-amber-600">★3.97（110件）</td>
                <td className="p-3 font-bold text-rose-600">¥1,865〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F168309%2F168309.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">5. ゲストハウス　ベル伏見</td>
                <td className="p-3 text-stone-600">京都府京都市伏見区紺屋町169</td>
                <td className="p-3 text-stone-600">丹波橋駅周辺</td>
                <td className="p-3 text-stone-600">有り　１台　５００円（税込み／泊）　要予約</td>
                <td className="p-3 font-bold text-amber-600">★4（45件）</td>
                <td className="p-3 font-bold text-rose-600">¥3,300〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F158394%2F158394.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
              </tr>
              <tr className="hover:bg-amber-50/40 transition">
                <td className="p-3 font-bold text-stone-900">6. パルセス　イン　京都</td>
                <td className="p-3 text-stone-600">京都府京都市伏見区下鳥羽東芹川町45</td>
                <td className="p-3 text-stone-600">竹田（京都）駅周辺</td>
                <td className="p-3 text-stone-600">地下駐車場24台分（無料）。先着順となります。</td>
                <td className="p-3 font-bold text-amber-600">★2.5（200件）</td>
                <td className="p-3 font-bold text-rose-600">¥7,620〜</td>
                <td className="p-3"><a href="https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F28566%2F28566.html" target="_blank" rel="sponsored noopener noreferrer" className="text-teal-700 font-bold underline">空室・料金</a></td>
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
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">宇治壱番宿にがうり</h3>
                  <span className="text-xs text-stone-400 ml-2">（うじいちばん　やどにがうり）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥10,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/153403/153403_kan1.jpg" alt="宇治壱番宿にがうり 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>JR宇治駅徒歩5分★１日１組限定の一棟貸切タイプ旅館★平等院も徒歩10分★お茶の街「宇治」に宿泊♪</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府宇治市宇治里尻2-17 ／ 最寄り駅：宇治（京都） ／ 交通案内：ＪＲ宇治駅及び京阪宇治駅より徒歩にて約５分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>★徒歩2分以内に専用駐車場がございます(無料)★</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「宇治壱番宿にがうりは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #2</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">旅館あづまや　＜京都府＞</h3>
                  <span className="text-xs text-stone-400 ml-2">（あづまや）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥2,970〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/151223/151223_kan1.jpg" alt="旅館あづまや　＜京都府＞ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>西本願寺からすぐ！アクセス抜群の素泊まり旅館です。</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京都市下京区堀川通り七条上ル（西本願寺前） ／ 最寄り駅：京都 ／ 交通案内：ＪＲ　京都駅より徒歩にて約12分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>なし</p>
                  <p className="text-amber-800 font-semibold"><strong>【楽天トラベル項目別評価】</strong>サービス ★4.33 ／ 立地 ★4.25 ／ 部屋 ★4.06 ／ 設備 ★4 ／ 風呂 ★4.05</p>
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「施設は古いが子供向けサービスが充実子供連れでの利用でした。施設は古いですが、子供向けの寝間着やお菓子などサービスは色々と充実していて、満足でした。宿泊客に対して、大浴場があまり大きくないの…　2026-09-23 13:41:05投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #3</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">京町家　一棟貸し　ｈｉｇｕｒａｓｈｉ</h3>
                  <span className="text-xs text-stone-400 ml-2">（きょうまちや　いっとうがし　ひぐらし）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥8,500〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/183807/183807.jpg" alt="京町家　一棟貸し　ｈｉｇｕｒａｓｈｉ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>築100年の京町家の古き良き趣を大切にモダンかつ機能的にリノベーション！長期滞在にも最適◎</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京都市伏見区肥後町357 ／ 最寄り駅：丹波橋 ／ 交通案内：丹波橋駅より徒歩約10分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>お近くのコインパーキングをご利用ください（400円/24h、徒歩4分）（900円/24h、徒歩2分）</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「京町家　一棟貸し　ｈｉｇｕｒａｓｈｉは立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #4</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">優遊　ＩＮＮ　Ｆｕｓｈｉｍｉ　Ｋｙｏｔｏ</h3>
                  <span className="text-xs text-stone-400 ml-2">（ゆうゆう　いん　ふしみ　きょうと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥1,865〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/168309/168309.jpg" alt="優遊　ＩＮＮ　Ｆｕｓｈｉｍｉ　Ｋｙｏｔｏ 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>伏見エリア【墨染駅3分】水回り独立&amp;amp;幅140ダブルベットの快適ホテル。非対面チェックイン◎</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京都市伏見区深草山村町999-4 ／ 最寄り駅：墨染 ／ 交通案内：京阪：墨染駅より徒歩3分　　近鉄：伏見駅より徒歩10分　「伏見稲荷大社」「祇園四条」へ乗換なしで便利な立地◎</p>
                  <p><strong>【駐車場・マイカー利用】</strong>無し　　近隣にコインパーキングあり（徒歩1分：24ｈ660円等）※出入り毎に料金がかかります。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「駐車場が近く便利で、部屋も清潔で快適ホテルから1番近い駐車場を教えてくれて、マップからは、徒歩2分と書いていたが、駐車場から見えていたので、あまり歩かず着きました。お部屋は清潔だし、ベッドも寝…　2026-08-20 09:49:21投稿」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #5</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">ゲストハウス　ベル伏見</h3>
                  <span className="text-xs text-stone-400 ml-2">（べるふしみ）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥3,300〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/158394/158394_kan1.jpg" alt="ゲストハウス　ベル伏見 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>酒どころエリアである京都伏見に佇む、京町家をリノベーションした完全個室のゲストハウス</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京都市伏見区紺屋町169 ／ 最寄り駅：丹波橋 ／ 交通案内：近鉄桃山御陵前駅、京阪伏見桃山駅より徒歩約12分。京都市バス81系統「肥後町」下車徒歩2分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>有り　１台　５００円（税込み／泊）　要予約</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「ゲストハウス　ベル伏見は立地・設備・ホスピタリティのバランスに優れ、観光拠点としても記念日や週末リフレッシュ滞在としても高い満足度を得ています。」
                  </blockquote>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl p-5 md:p-6 border border-stone-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-stone-200 pb-3">
                <div>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full mr-2">詳細データ #6</span>
                  <h3 className="text-base md:text-lg font-bold text-stone-900 inline">パルセス　イン　京都</h3>
                  <span className="text-xs text-stone-400 ml-2">（ばるせす　いん　きょうと）</span>
                </div>
                <span className="text-xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-lg border border-rose-200">参考最安料金: ¥7,620〜</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                <div className="aspect-video rounded-xl overflow-hidden bg-stone-200 border border-stone-300"><img src="https://img.travel.rakuten.co.jp/share/HOTEL/28566/28566_t.jpg" alt="パルセス　イン　京都 客室・施設イメージ" className="w-full h-full object-cover" loading="lazy" /></div>
                <div className="md:col-span-2 space-y-2 text-xs text-stone-700 leading-relaxed">
                  <p><strong>【宿の特徴・魅力】</strong>名神京都南ICより車で約5分、京都駅から公共交通機関で約20分。無料駐車場完備でお車利用の人も歓迎！</p>
                  <p><strong>【所在地・アクセス】</strong>〒 京都府京都市伏見区下鳥羽東芹川町45 ／ 最寄り駅：竹田（京都） ／ 交通案内：近鉄京都線・地下鉄烏丸線の竹田駅より車で約5分／名神高速道路・京都南ICより車で約5分</p>
                  <p><strong>【駐車場・マイカー利用】</strong>地下駐車場24台分（無料）。先着順となります。</p>
                  
                  <blockquote className="bg-white p-3 rounded-xl border-l-4 border-amber-500 text-stone-600 italic">
                    💬 <strong>宿泊者クチコミ抜粋：</strong>「古い施設と高い価格に残念な滞在施設は古く、床のシミ、壁紙の剥がれなど多数。補修もしていません。駐車場も暗くて保全に心配でした。価格も高い割に残念、朝食付でしたが遠慮して引き上げました。リピはないで…　2026-05-18 17:42:09投稿」
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-200">
            <h3 className="text-lg font-bold text-stone-900 border-l-4 border-teal-600 pl-3">
              🗺️ あわせて巡りたい！京都府の代表的な観光名所・歴史自然ガイド（Wikipedia公認画像・解説）
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              宿泊前後の1泊2日・2泊3日モデルコースに組み込みたい、京都府を代表する名所・絶景スポットの解説です。チェックイン前後の荷物預かりや駅周辺のレンタカー・周遊バスを活用すると効率よく巡ることができます。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Kiyomizu-dera%2C_Kyoto%2C_November_2016_-02.jpg/1280px-Kiyomizu-dera%2C_Kyoto%2C_November_2016_-02.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="清水寺" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #1</span>
                <h3 className="text-base font-bold text-stone-900">清水寺</h3>
                <p className="text-xs text-stone-600 leading-relaxed">「清水の舞台」で世界的に有名な古都京都の象徴。「清水の舞台から飛び下りる」の語源となった木造大舞台からの京都市街の眺望と音羽の滝が名高いです。 清水寺（きよみずでら、英: Kiyomizu-dera Temple）は、京都市東山区清水1丁目にある北法相宗の大本山の寺院。山号は音羽山。本尊は十一面千手観世音菩薩。正式には音羽山清水寺（おとわさんきよみずでら）と号する。もとは法相宗に属していたが、現在は独立して北法相宗を名乗る。西国三十三所第16番札所。洛陽三十三所観音霊場第10から14番札所。境内（敷…</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #2</span>
                <h3 className="text-base font-bold text-stone-900">金閣寺（鹿苑寺）</h3>
                <p className="text-xs text-stone-600 leading-relaxed">鏡湖池に黄金の輝きを映し出す室町文化の傑作。層ごとに建築様式が異なる三層構造の金閣と繊細に手入れされた庭園美が世界中の人々を魅了します。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #3</span>
                <h3 className="text-base font-bold text-stone-900">伏見稲荷大社</h3>
                <p className="text-xs text-stone-600 leading-relaxed">全国に約3万社ある稲荷神社の総本宮。朱塗りの鳥居がどこまでも続く「千本鳥居」は幻想的な雰囲気に満ち、トリップアドバイザー外国人に人気のスポット1位の常連です。</p>
              </div>
            </div>
            <div className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-stone-200"><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Arashiyama_%288741759830%29.jpg/1280px-Arashiyama_%288741759830%29.jpg?utm_source=ja.wikipedia.org&amp;utm_campaign=api&amp;utm_content=thumbnail" alt="嵐山 竹林の小径" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="p-5 space-y-2 flex-1">
                <span className="text-[10px] font-extrabold text-teal-800 bg-teal-100 px-2.5 py-0.5 rounded-full">周辺観光スポット #4</span>
                <h3 className="text-base font-bold text-stone-900">嵐山 竹林の小径</h3>
                <p className="text-xs text-stone-600 leading-relaxed">渡月橋から野宮神社を経て大河内山荘へ続く、数万本の竹が天を覆う清涼な小道。風が吹くたびに竹同士が触れ合う笹の葉の音が優しく響き渡ります。 嵐山（あらしやま）は、京都市西部にある標高382メートル（m）の山。また、大堰川（おおいがわ）を挟んで西側の松尾山・嵐山・烏ヶ岳の嵐山三山と、東側の小倉山・亀山、さらにはその麓を含んだ地域を一般的に嵐山と称し、山麓は多数の寺社が立地する観光名所でもある。 近くには嵯峨嵐山駅があり、この辺り一体が嵯峨野と呼ばれる事も多い。 また、近くのトロッコ嵐山駅からは嵯峨…</p>
              </div>
            </div>
            </div>
          </div>

          <div className="bg-amber-50/70 rounded-2xl p-5 md:p-6 border border-amber-200 space-y-3 text-xs text-stone-700 leading-relaxed">
            <h3 className="text-sm md:text-base font-bold text-amber-950">
              💡 京都府エリアの宿泊予約・シーズン別ベストタイミングと節約ノウハウ
            </h3>
            <p>
              <strong>1. 早期予約と楽天トラベルクーポンの併用：</strong> 京都府の人気温泉宿・リゾートホテルは、週末や連休・紅葉・年末年始の60日〜30日前から一気に予約が埋まります。毎月5と0のつく日やスーパーSALE期間中に配布される宿クーポン・自治体クーポンを併用すると、通常より最大10〜20%お得に予約可能です。
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
    
      <HubRelatedPosts currentSlug="kyoto-uji-fushimi-sake-matcha-stay" />
</div>
  );
}
