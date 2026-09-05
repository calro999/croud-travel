import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【宮城・松島＆塩竈】日本三景松島・塩竈生マグロ＆焼き牡蠣温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "芭蕉が愛した日本三景「松島」の島々パノラマと、日本屈指の生マグロ水揚げ港「塩竈」の美食を巡る特化ガイド。国宝瑞巌寺、五大堂、塩竈神社、焼き牡蠣小屋、美肌の松島温泉宿を徹底解説。",
  keywords: ["miyagi-matsushima-shiogama-bay-seafood-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["miyagi-matsushima-shiogama-bay-seafood-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for miyagi-matsushima-shiogama-bay-seafood-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "matsushima_bay_view_stay",
    "title": "1. 日本三景松島〜五大堂・福浦橋・瑞巌寺（海に浮かぶ小島パノラマと伊達文化）",
    "timing": "通年（春の桜、初夏の松島湾クルーズ、秋の瑞巌寺紅葉ライトアップ、冬の朝焼け）",
    "desc": "松島湾に浮かぶ260余の島々が織りなす絶景。すかし橋で海を渡る「五大堂」、252mの朱塗りの橋が架かる「福浦島」、伊達政宗の美意識が凝縮された国宝「瑞巌寺」や「円通院」の枯山水庭園。湾内を巡る遊覧船からは仁王島など奇岩を間近に望めます。",
    "spots": "五大堂、福浦橋（出会い橋）、国宝瑞巌寺、円通院、松島湾観光遊覧船、西行戻しの松公園",
    "access": "JR仙石線「松島海岸駅」下車徒歩すぐ（仙台駅より約40分）。三陸沿岸道路「松島海岸IC」より約10分。",
    "tip": "西行戻しの松公園の高台にあるカフェからは、松島湾全体と桜・新緑・紅葉が一望できる隠れた絶景展望ポイントです。"
  },
  {
    "key": "shiogama_seafood_sushi_stay",
    "title": "2. 塩竈港仲卸市場＆塩竈神社（生マグロ日本一の港町と千二百年の古社）",
    "timing": "通年（秋〜冬の「三陸塩竈ひがしもの」ブランドメバチマグロ、春の塩竈桜）",
    "desc": "近海東沖で獲れる最高級メバチマグロ「三陸塩竈ひがしもの」で全国に名を知られる塩竈。一般人も買い物できる「塩竈市仲卸市場」では、購入した新鮮な刺身をその場でご飯に乗せて作る「マイ海鮮丼」が大人気。塩竈神社の荘厳な202段の石段と歴史も圧巻です。",
    "spots": "塩竈市仲卸市場（マイ海鮮丼）、志波彦神社・鹽竈神社、本塩釜すし激戦区、浦霞（佐浦）・一ノ蔵酒蔵処",
    "access": "JR仙石線「本塩釜駅」または「東塩釜駅」下車。松島海岸駅から電車でわずか約10分。仙台駅からも約30分。",
    "tip": "塩竈は人口あたりの寿司屋密度が日本一とも言われ、どの店でも格別の鮮度と職人技のマグロ握りを味わえます。"
  },
  {
    "key": "matsushima_oyster_hotspring_stay",
    "title": "3. 松島名物「焼き牡蠣小屋」＆美肌の松島温泉（太古の地層から湧くトロトロ湯）",
    "timing": "秋〜春（10月〜3月の牡蠣シーズン最盛期、焼き牡蠣食べ放題）",
    "desc": "松島湾の豊かなプランクトンで育った松島牡蠣は、小ぶりながら身が引き締まり濃厚な旨味が凝縮。鉄板の上に山盛りの牡蠣を豪快に蒸し焼きにして食べる「かき小屋」は冬の名物詩。さらに太古の地層から湧出する「松島温泉」の琥珀色の美肌湯が旅の疲れを癒します。",
    "spots": "松島さかな市場（焼き牡蠣ハウス）、松島かき小屋、松島温泉各宿の展望露天風呂",
    "access": "松島海岸駅周辺各所。各温泉旅館へは無料送迎バスも多数運行。",
    "tip": "松島温泉はメタケイ酸を豊富に含むアルカリ性単純温泉で、入浴後にお肌がツルツルになると女性客からも絶賛されています。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            MATSUSHIMA & SHIOGAMA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【宮城・松島＆塩竈】日本三景松島湾の島々・塩竈極上生マグロ＆焼き牡蠣温泉宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            松尾芭蕉も言葉を失ったといわれる日本三景・松島湾の260余の島々。伊達政宗が再建した国宝・瑞巌寺の威厳と、塩竈港に揚がる極上の生マグロや冬の松島名物・焼き牡蠣。海風香る絶景温泉露天風呂から茜色に染まる朝日と湾を眺める、至福の宮城ステイへご案内します。
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
