import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【京都・宇治＆伏見酒蔵】世界遺産平等院・宇治抹茶＆伏見十石舟・酒蔵宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "千年の歴史と名水が醸す伝統文化・京都宇治＆伏見エリア完全特化！十円玉でおなじみ世界遺産「平等院鳳凰堂」、宇治川の鵜飼、本場宇治抹茶パフェ、伏見酒蔵の白壁土蔵・十石舟めぐり、京会席＆利き酒宿を徹底解説。",
  keywords: ["kyoto-uji-fushimi-sake-matcha-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
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

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            UJI & FUSHIMI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【京都・宇治＆伏見酒蔵】世界遺産平等院・宇治抹茶＆伏見十石舟・酒蔵宿 完全ガイド
          </h1>
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
                          rel="noopener noreferrer"
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
    </div>
  );
}
