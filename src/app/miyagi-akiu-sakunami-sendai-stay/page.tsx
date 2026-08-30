import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【宮城・秋保温泉＆作並温泉】仙台奥座敷・磊々峡＆ニッカウヰスキー・仙台牛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "仙台から車30分の名湯・秋保温泉＆作並温泉エリア完全特化！名勝「磊々峡」のハートの奇岩、落差55m「秋保大滝」、ニッカウヰスキー宮城峡蒸溜所、伊達政宗ゆかりの温泉と極上仙台牛ステーキ会席宿を徹底解説。",
  keywords: ["miyagi-akiu-sakunami-sendai-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["miyagi-akiu-sakunami-sendai-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for miyagi-akiu-sakunami-sendai-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "akiu_rairaikyo_luxury_onsen",
    "title": "1. 秋保温泉〜磊々峡・秋保大滝（日本三御湯に数えられる名湯と渓谷美）",
    "timing": "通年（仙台駅から車・直行バスでわずか約30分の好アクセス）",
    "desc": "古墳時代開湯、伊達政宗公も愛湯した日本三御湯「秋保温泉」。名取川の浸食によってできた奇岩巨岩が続く「磊々峡（らいらいきょう）」の遊歩道散策。国の名勝・日本三大名瀑の一つに数えられる大迫力の「秋保大滝」。",
    "spots": "磊々峡（覗橋ハートのくぼみ・遊歩道ライトアップ）、秋保大滝（滝壺展望台）、秋保ワイナリー、秋保ヴィレッジ",
    "access": "JR仙台駅西口より秋保温泉行き路線バス・直行バスで約30〜50分。",
    "tip": "磊々峡の「覗橋（のぞきばし）」から下を見下ろすと、岩肌に自然にできたハート型のくぼみがあり、恋人の聖地として大人気です。"
  },
  {
    "key": "sakunami_nikka_whisky_stay",
    "title": "2. 作並温泉〜ニッカウヰスキー宮城峡蒸溜所（「美女づくりの湯」と琥珀色のウイスキー）",
    "timing": "通年（緑豊かな渓流露天と無料蒸溜所見学）",
    "desc": "やさしい肌触りで「美女づくりの湯」と称される「作並温泉」。広瀬川の渓流沿いに作られた天然岩風呂。日本のウイスキーの父・竹鶴政孝が選んだ新川（にっかがわ）の清流に佇む「ニッカウヰスキー宮城峡蒸溜所」。",
    "spots": "ニッカウヰスキー宮城峡蒸溜所（ガイドツアー・試飲ラウンジ）、広瀬川渓流露天風呂、鳳鳴四十八滝",
    "access": "JR仙山線「作並駅」下車。仙台駅よりJRで約40分。",
    "tip": "宮城峡蒸溜所では、赤レンガの美しい蒸溜棟を見学した後に、限定ウイスキーやアップルワインのテイスティングが楽しめます。"
  },
  {
    "key": "sendai_beef_sasakamaboko_stay",
    "title": "3. 最高級「A5仙台牛」＆極上牛たん（全国で唯一肉質等級5のみ許される最高峰）",
    "timing": "通年（とろけるサシの旨味と香ばしい炭火焼き）",
    "desc": "厳しい基準をクリアした肉質等級「5」のみに呼称が許される日本最高峰の黒毛和牛「仙台牛」。芳醇なサーロインステーキや握り寿司。熟成させた厚切り牛たんの炭火焼き、笹かまぼこ、三陸直送の海の幸。",
    "spots": "主婦の店さいち（名物おはぎ）、秋保ワイナリー（宮城ワイン）、仙台牛炭火焼き処",
    "access": "秋保・作並温泉街。",
    "tip": "秋保温泉街のスーパー「主婦の店 さいち」の無添加手作り「秋保おはぎ」は、全国から買い求めるファンが殺到する伝説の名物です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            AKIU & SAKUNAMI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【宮城・秋保温泉＆作並温泉】仙台奥座敷・磊々峡＆ニッカウヰスキー・仙台牛宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            杜の都・仙台の奥座敷として歴代藩主や文人に愛された「秋保温泉」と「作並温泉」。名取川が削り出した奇岩の渓谷「磊々峡」と大迫力の秋保大滝。清流の水で仕込まれる宮城峡ウイスキーと、A5仙台牛に舌鼓を打つ大人の休日。
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
