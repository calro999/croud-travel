import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【北海道・小樽＆余市】小樽運河・ニッカウヰスキー蒸溜所＆寿司海鮮丼宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "ノスタルジックな石造り倉庫とガス灯が輝く小樽運河、日本のウイスキーの聖地・余市蒸溜所、三角市場の豪華海鮮丼やおたる寿司通りを満喫する小樽・余市特化ガイド。運河沿いホテルや温泉リゾートを厳選。",
  keywords: ["hokkaido-otaru-yoichi-canal-distillery-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hokkaido-otaru-yoichi-canal-distillery-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hokkaido-otaru-yoichi-canal-distillery-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "otaru_canal_retro_stay",
    "title": "1. 小樽運河〜ガス灯・石造り倉庫群＆北一硝子（夕暮れのノスタルジー散策）",
    "timing": "通年（冬の小樽雪あかりの路・秋のガス灯イルミネーション・新緑の運河クルーズ）",
    "desc": "大正12年に完成した日本屈指の運河景観。夕暮れ時には63基のガス灯が石造り倉庫群を優しく照らし、幻想的な情景が広がります。運河沿いの散策路や運河クルーズ、歴史的建造物を再生した北一硝子の石油ランプ喫茶など、ロマンチックな街歩きが楽しめます。",
    "spots": "小樽運河散策路、小樽運河クルーズ、北一硝子三号館、小樽オルゴール堂、旧日本銀行小樽支店（金融資料館）",
    "access": "JR函館本線「小樽駅」より徒歩約10分。新千歳空港より快速エアポートで約75分、札幌駅より約35分。札樽道「小樽IC」より約5分。",
    "tip": "夕暮れから日没後30分ほどの「マジックアワー」に訪れると、空の藍色とガス灯の黄金色のコントラストが最も美しく輝きます。"
  },
  {
    "key": "yoichi_nikka_whisky_stay",
    "title": "2. 余市ニッカウヰスキー蒸溜所＆ワインの郷（竹鶴政孝が築いた本場スコットランドの美）",
    "timing": "通年（秋のぶどう収穫祭・冬の雪景色と赤い三角屋根蒸溜棟）",
    "desc": "「日本のウイスキーの父」竹鶴政孝がスコットランドに似た冷涼な気候と清流を求めて拓いたニッカウヰスキー余市蒸溜所。伝統の石炭直火蒸溜を今なお続け、重厚なモルトを生み出しています。近年は日本有数のワイン産地としても世界的評価を受ける美食リゾートエリアです。",
    "spots": "ニッカウヰスキー余市蒸溜所（見学・有料テイスティング）、余市ワイナリー、道の駅スペース・アップル余市、ローソク岩",
    "access": "JR余市駅より徒歩約3分（小樽駅よりJRで約25分、または路線バスで約35分）。後志自動車道「余市IC」より約5分。",
    "tip": "蒸溜所の見学ツアーは事前完全予約制（公式HP）となっているため、旅行日程が決まり次第早めの予約が必須です。"
  },
  {
    "key": "otaru_sankaku_market_sushi_stay",
    "title": "3. 小樽三角市場＆寿司屋通り（朝獲れウニ・カニ・イクラ＆職人の極上握り）",
    "timing": "通年（春〜夏の積丹ウニ、秋のサケ・イクラ、冬のタラバガニ・八角）",
    "desc": "小樽駅の真横に位置し、急勾配の階段沿いに鮮魚店がひしめく名物「三角市場」。活ガニや自家製イクラがどっさり乗った海鮮丼を朝から満喫できます。さらに市内屈指の寿司激戦区「おたる寿司屋通り」では、近海ものの新鮮なネタを名職人の技で堪能できます。",
    "spots": "三角市場（滝波食堂・味処たけだなど海鮮丼名店）、おたる寿司屋通り、南樽市場、かま栄工場直売店",
    "access": "三角市場はJR小樽駅出入口を出て左手の階段を上がって徒歩1分。寿司屋通りは小樽駅から徒歩約10分。",
    "tip": "三角市場の食堂は朝7〜8時から営業しており、お昼前後は大変混雑するため、朝食時間帯の早めの訪問がおすすめです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            OTARU & YOICHI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【北海道・小樽＆余市】小樽運河石造り倉庫街・ニッカウヰスキー蒸溜所＆寿司海鮮丼宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            ガス灯が水面に揺らめくレトロな小樽運河と、冷涼な気候と清流が育むウイスキーの故郷・余市。明治・大正期に北のウォール街として栄えた重厚な石造り建築やガラス工房、そして日本海で揚がるウニ・イクラ・ニシンなど極上海の幸を味わう特別な北海道ステイへご案内します。
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
