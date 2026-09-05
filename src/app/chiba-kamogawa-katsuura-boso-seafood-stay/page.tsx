import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【千葉・鴨川＆勝浦】シャチ・四百年朝市＆地金目鯛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "大迫力のシャチパフォーマンスで大人気の「鴨川シーワールド」、天正年間から続く日本三大朝市「勝浦朝市」、ご当地グルメ勝浦タンタンメン、南房総直送の地金目鯛姿煮や伊勢海老を徹底解説。太平洋一望の温泉ホテルや海鮮宿を厳選。",
  keywords: ["chiba-kamogawa-katsuura-boso-seafood-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["chiba-kamogawa-katsuura-boso-seafood-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for chiba-kamogawa-katsuura-boso-seafood-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kamogawa_seaworld_stay",
    "badge": "海の王者シャチの大迫力ジャンプ",
    "title": "1. 鴨川シーワールド＆太平洋パノラマ温泉（雄大な海とイルカ・アシカの楽園）",
    "timing": "通年（夏の海水浴・ウォータースプラッシュ、冬の澄んだオーシャンフロントと温泉）",
    "desc": "日本でわずか2箇所しか飼育されていない海の王者「シャチ」のダイナミックなパフォーマンスで全国に知られる鴨川シーワールド。トレーナーとの息の合った水中演技や豪快なテールバッシュによる水しぶきは圧巻。鴨川温泉の太平洋を一望するインフィニティ露天風呂やオーシャンビュー客室で、波の音を子守唄に過ごせます。",
    "spots": "鴨川シーワールド、鴨川松島、前原海岸（日本の渚百選）、大山千枚田（東京から一番近い棚田）、魚見塚展望台",
    "access": "JR外房線「安房鴨川駅」下車（東京駅より特急わかしおで直通約1時間50分）。アクアライン経由で車約90分。",
    "tip": "シャチパフォーマンスを前列（1〜8列目）で鑑賞する際はポンチョ着用が必須。濡れたくない方は中段以上の席を確保するのがおすすめです。"
  },
  {
    "key": "katsuura_morning_market_stay",
    "badge": "天正の世から続く日本三大朝市",
    "title": "2. 勝浦朝市＆ご当地B級グルメ「勝浦タンタンメン」（四百年の活気とピリ辛麺）",
    "timing": "通年（毎週水曜日・元旦を除く毎朝開催、早朝6時半頃〜11時頃まで）",
    "desc": "石川県の輪島、岐阜県の高山と並ぶ日本三大朝市の一つ「勝浦朝市」。天正19年（1591年）から430年以上続く伝統の市で、獲れたての地魚や干物、採れたて野菜、名物わらび餅が並びます。海女や漁師が冷えた体を温めるために生まれた醤油ベースにラー油と玉ねぎ・豚ひき肉がたっぷり入った「勝浦タンタンメン」の元祖名店巡りも必食です。",
    "spots": "勝浦朝市（月の前半・後半で通りが替わる）、江ざわ（勝浦タンタンメン元祖）、鵜原理想郷、勝浦海中公園・海中展望塔",
    "access": "JR外房線「勝浦駅」より朝市会場へ徒歩約10分。市営駐車場あり。",
    "tip": "勝浦朝市では地元のおばあちゃんたちとの会話を楽しみながら、買ったばかりの干物をその場で焼いて食べられる広場もあります。"
  },
  {
    "key": "boso_kinmedai_seafood_stay",
    "badge": "房総沖の極上海の恵み",
    "title": "3. 南房総「地金目鯛の姿煮」＆伊勢海老・アワビ踊り焼き（黒潮が育む豪華海鮮会席）",
    "timing": "通年（冬〜早春の脂の乗った寒キンメ、秋の伊勢海老漁解禁、夏の天然アワビ）",
    "desc": "太平洋の黒潮と親潮が交わる南房総沖は、日本屈指の好漁場。鮮やかな赤色と上品な脂の乗りを誇る「地金目鯛（外房つりきんめ）」を一匹丸ごと甘辛い秘伝の煮汁で炊き上げた「姿煮」はご飯もお酒も進む極上の逸品。さらに伊勢海老のお造りや鬼殻焼き、アワビの酒蒸しや踊り焼きなど、海沿いの宿ならではの贅を尽くした海鮮料理が堪能できます。",
    "spots": "勝浦漁港、小湊鯛の浦、各海鮮割烹温泉旅館、道の駅鴨川オーシャンパーク",
    "access": "勝浦・小湊・鴨川・南房総エリア各所。",
    "tip": "金目鯛の姿煮の残った煮汁をご飯にかけて食べる「煮汁かけご飯」は、地元漁師直伝の最高の締めくくりです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KAMOGAWA & KATSUURA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【千葉・鴨川＆勝浦・南房総】シャチパフォーマンス・勝浦四百年朝市＆地金目鯛宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            都心から東京湾アクアラインで気軽に行ける温暖な海洋リゾート「南房総・鴨川・勝浦」。太平洋の雄大な大海原をバックに豪快な水しぶきを上げる「鴨川シーワールド」のシャチ。四百年以上の歴史を誇る「勝浦朝市」の活気と、ピリ辛が癖になる勝浦タンタンメン。そして外房の荒波で育った脂の乗った「地金目鯛」や伊勢海老・アワビの贅沢海鮮会席を堪能する房総ステイへご案内します。
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
