import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【静岡・熱川＆稲取】湯けむり露天・ブランド稲取キンメ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "街の至る所から温泉櫓の白煙が立ち上る「熱川温泉」、波打ち際の混浴絶景露天風呂、全国最高峰ブランド「稲取キンメ」の煮付け、熱川バナナワニ園、雛のつるし飾り発祥の地を徹底解説。オーシャンビュー客室や貸切温泉旅館を厳選。",
  keywords: ["shizuoka-atagawa-inatori-kinmedai-hotspring-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shizuoka-atagawa-inatori-kinmedai-hotspring-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shizuoka-atagawa-inatori-kinmedai-hotspring-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "atagawa_hotspring_steam_stay",
    "badge": "高温泉が自噴する温泉櫓の街",
    "title": "1. 熱川温泉街〜温泉櫓・湯の華ぱぁーく＆高磯の湯（波打ち際の野天風呂）",
    "timing": "通年（冬の澄み渡る伊豆大島パノラマ、春の桜、夏の熱川YOU湯ビーチ）",
    "desc": "室町時代の武将・太田道灌が狩りの途中に傷を癒す猿を見て発見したと伝わる熱川温泉。泉温はほぼ100度の沸騰泉で、街中随所に木造や鉄骨の「温泉櫓」が立ち並び、真っ白な湯けむりを噴き上げる情景は温泉情緒満点。駅前の足湯「湯の華ぱぁーく」での温泉玉子作りや、波打ち際ギリギリに作られた露天風呂「高磯の湯」からの大パノラマが楽しめます。",
    "spots": "熱川温泉街の温泉櫓群、熱川湯の華ぱぁーく（足湯・温泉玉子体験）、波打ち際露天風呂 高磯の湯、お湯かけ弁財天",
    "access": "伊豆急行線「伊豆熱川駅」下車徒歩すぐ（東京駅より特急踊り子で直通約2時間15分）。東名厚木ICより約2時間。",
    "tip": "「お湯かけ弁財天」の尊像に熱い温泉を柄杓でかけながら願い事をすると金運や良縁が叶うと言われ、銭洗いの池もあります。"
  },
  {
    "key": "inatori_kinmedai_gourmet_stay",
    "badge": "日帰り一本釣りの最高峰ブランド",
    "title": "2. 稲取港直送「稲取キンメ」＆雛のつるし飾り（黄金に輝く脂と伝統工芸）",
    "timing": "通年（1月中旬〜3月末の「雛のつるし飾りまつり」、冬の寒キンメ最盛期）",
    "desc": "金目鯛の水揚げで全国屈指の知名度を誇る稲取港。日帰りの一本釣り漁で丁寧に釣り上げられた金目鯛は傷がなく「稲取キンメ」として市場最高値を記録します。頭から尾まで艶やかに煮付けられた煮汁のコクと、ふっくらとろける身の旨味は格別。また日本三大つるし飾りの一つ「雛のつるし飾り」発祥の地として、色鮮やかな絹の飾り細工が街を彩ります。",
    "spots": "稲取港（週末稲取朝市）、文化公園 雛の館、素盞嗚神社（118段の雛段飾り）、稲取細野高原（秋のススキ群生）",
    "access": "伊豆急行線「伊豆稲取駅」下車。熱川駅より電車でわずか約5分。",
    "tip": "素盞嗚神社の参道118段の石段にずらりと雛人形が並ぶ景観（まつり期間中）は、息をのむ美しさの春の絶景です。"
  },
  {
    "key": "izu_banana_alligator_stay",
    "badge": "温泉熱を利用した動植物の楽園",
    "title": "3. 熱川バナナワニ園＆相模湾一望絶景ホテル（マナティ・レッサーパンダと果実）",
    "timing": "通年（天候に左右されない屋内温室ドーム、夏休みファミリー旅行）",
    "desc": "熱川温泉の豊富な温泉熱を利用して運営される昭和33年開園の老舗テーマパーク「熱川バナナワニ園」。世界各国の貴重なワニ16種約140頭をはじめ、日本で唯一飼育されているアマゾンマナティー、愛らしいニシレッサーパンダ、巨大なオオオニバスや熱帯植物が迎えてくれます。園内で収穫された完熟バナナのスイーツも名物です。",
    "spots": "熱川バナナワニ園（本園・分園・ワニ園）、熱川ハーブテラス、片瀬白田海岸、東伊豆風力発電所",
    "access": "伊豆熱川駅より徒歩1分（本園）。分園へは無料シャトルバスが運行。",
    "tip": "分園のフルーツパーラーで味わえる「完熟バナナパフェ」は、園内で温泉熱を使って育てられた甘みたっぷりのバナナが使われています。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ATAGAWA & INATORI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【静岡・熱川温泉＆稲取・東伊豆】湯けむり温泉櫓・波打ち際露天＆稲取キンメ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            伊豆急行線の車窓から海と温泉櫓（やぐら）の湯けむりが見えてくる東伊豆の名湯「熱川温泉」。約100度の高温泉が自噴し、波の音が間近に迫る絶景の波打ち際露天風呂。すぐ隣の港町・稲取では、日帰り一本釣りで水揚げされる極上のブランド魚「稲取キンメ」の濃厚な煮付け。伊豆大島を正面に望む相模湾パノラマと、昭和レトロな温泉情緒に浸る東伊豆ステイへご案内します。
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
