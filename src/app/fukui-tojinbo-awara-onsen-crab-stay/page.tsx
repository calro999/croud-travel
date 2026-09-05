import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【福井・東尋坊＆あわら温泉】日本海断崖絶壁・越前ガニ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界三大奇勝・国の天然記念物「東尋坊」の柱状節理断崖絶壁パノラマ、関西の奥座敷「あわら温泉」の74本もの源泉湯巡り、北陸最高峰の冬の味覚・三国港直送の黄色タグ付き「越前ガニ」を徹底解説。名門温泉旅館や海鮮美食宿を厳選。",
  keywords: ["fukui-tojinbo-awara-onsen-crab-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["fukui-tojinbo-awara-onsen-crab-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for fukui-tojinbo-awara-onsen-crab-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tojinbo_cliff_sunset_stay",
    "badge": "世界三大奇勝の断崖パノラマ",
    "title": "1. 東尋坊〜輝石安山岩の柱状節理＆夕陽（高さ20mの断崖絶壁と遊覧船）",
    "timing": "通年（波穏やかな春〜夏の遊覧船クルーズ、茜色の夕陽が沈む秋、日本海の荒波と白波が打ち寄せる冬の日本海）",
    "desc": "地質学的にも極めて貴重な世界的奇勝「東尋坊」。垂直に切り立った巨大な柱状の岩肌が眼下に迫る断崖はスリル満点。東尋坊タワーからの360度展望や、海上から岩の造形美（ライオン岩やハチの巣岩）を間近に見上げる観光遊覧船、そして「日本の夕陽百選」に選ばれた落日は圧巻です。",
    "spots": "東尋坊断崖遊歩道、東尋坊観光遊覧船、東尋坊タワー、雄島（朱塗りの大橋）、三国サンセットビーチ",
    "access": "えちぜん鉄道「三国港駅」より京福バスで約10分。北陸新幹線「芦原温泉駅」より車・バスで約30分。北陸道「金津IC」より約25分。",
    "tip": "遊覧船は波の状況により運航されるため、事前に当日の運航状況を確認するのがおすすめです。海上から見上げる断崖は陸上以上の迫力です。"
  },
  {
    "key": "awara_onsen_footbath_stay",
    "badge": "74の源泉が湧く関西の奥座敷",
    "title": "2. あわら温泉〜芦原温泉街・あわら湯のまち湯けむり横丁（屋台村と多彩な泉質）",
    "timing": "通年（新幹線開業でアクセス抜群、春の桜、冬の雪見風呂とカニ懐石）",
    "desc": "明治16年開湯。あわら温泉の大きな特徴は、各旅館がそれぞれ敷地内に自家源泉（計74本）を保有していること。宿ごとに少しずつ異なる泉質や効能を楽しめます。あわら湯のまち駅前には総ヒノキ造りの無料足湯施設「芦湯」や、赤ちょうちんが揺れる屋台村「湯けむり横丁」があり、夜のそぞろ歩きも魅力です。",
    "spots": "あわら温泉足湯「芦湯」（5つの浴槽）、あわら湯けむり横丁（屋台グルメ村）、金津創作の森、伝統旅館街",
    "access": "北陸新幹線「芦原温泉駅」より各宿の無料送迎バスで約10〜15分、またはえちぜん鉄道「あわら湯のまち駅」下車。",
    "tip": "足湯「芦湯」は大正ロマン風の総ヒノキ建築で、ステンドグラスや福井県産笏谷石が使われており、夜のライトアップも幻想的です。"
  },
  {
    "key": "echizen_crab_seafood_stay",
    "badge": "皇室献上ガニの故郷・黄色タグの証",
    "title": "3. 三国港水揚げ「越前ガニ」フルコース（茹でたてアツアツと濃厚なカニ味噌）",
    "timing": "冬季限定（11月6日の漁解禁〜翌年3月20日頃まで）",
    "desc": "全国のズワイガニの中で唯一、皇室へ献上される最高峰のブランド「越前ガニ」。福井県内の港で水揚げされた証である「黄色いタグ」が付けられます。三国港のセリから直行した新鮮なカニを大きな釜で絶妙な塩加減で茹で上げた「茹でガニ」、透き通る身の「カニ刺し」、香ばしい「焼きガニ」は冬の至福です。",
    "spots": "三国港市場周辺、あわら温泉の老舗カニ料理旅館群、三国湊きたまえ通り（レトロ商家街）",
    "access": "あわら温泉・三国港エリア各所。",
    "tip": "脱皮直後の「水ガニ（ズボガニ）」は地元で親しまれるリーズナブルでジューシーな冬の裏名物。食べ比べてみるのも一興です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            TOJINBO & AWARA ONSEN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【福井・東尋坊＆あわら温泉・三国】日本海柱状節理断崖・黄色タグ越前ガニ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            日本海の荒波が削り出した巨大な柱状節理の断崖が1kmにわたって続く世界的景勝地「東尋坊」。夕暮れ時に日本海へと沈む息をのむような夕陽と、明治期より関西の文人墨客に「奥座敷」として愛された名湯「あわら温泉」。冬には福井県が誇る最高峰ブランド・三国港水揚げの「越前ガニ」の贅を味わい尽くす、北陸・福井の極上旅へご案内します。
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide: any) => {
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
                  {hotels.length > 0 ? (
                    hotels.map((hotel: any) => (
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
                                loading="lazy"
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
                            href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
                          >
                            ✈️ 楽天トラベルで宿泊プラン・空室を見る
                          </a>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="col-span-3 p-6 bg-stone-50 rounded-2xl text-center text-xs text-stone-500">
                      現在おすすめの宿泊施設情報を更新中です。
                    </div>
                  )}
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
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-950 bg-white hover:bg-teal-50 border border-teal-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
