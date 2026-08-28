import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【宮城・日本三景松島】松島湾260島パノラマ・瑞巌寺＆極上牡蠣・牛たん宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本三景・宮城松島エリア完全特化！松島湾に浮かぶ260余の島々、国宝瑞巌寺、五大堂のすかし橋、福浦島（出会い橋）、本場松島牡蠣・三陸海の幸・仙台牛たんを味わうオーシャンビュー温泉宿を徹底解説。",
  keywords: ["miyagi-matsushima-bay-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["miyagi-matsushima-bay-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for miyagi-matsushima-bay-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "matsushima_bay_view",
    "title": "1. 松島海岸・岬の高台（松島湾260余の島々を一望するオーシャンビュー温泉）",
    "timing": "通年（松島湾から昇る感動の朝日サンライズ）",
    "desc": "松島湾を見下ろす高台や海岸沿いに佇む温泉リゾート。美肌効果の高いアルカリ性単純温泉「松島温泉（太古天泉）」の展望露天風呂から、朝日を受けて黄金色に輝く島々のパノラマを独占。",
    "spots": "松島四大観（大高森・幽観扇谷・麗観富山・偉観多聞山）、松島湾遊覧船（仁王丸コース）、西行戻しの松公園（桜と松島湾）",
    "access": "JR仙石線「松島海岸駅」またはJR東北本線「松島駅」下車。仙台駅から快速で約25〜30分。各宿無料送迎あり。",
    "tip": "「西行戻しの松公園」の高台にあるカフェ「le Roman（ロマン）」の全面ガラス張りテラスから望む松島湾は絶景です。"
  },
  {
    "key": "matsushima_zuiganji_walk",
    "title": "2. 瑞巌寺〜五大堂・福浦橋（伊達政宗公の祈りと朱塗りの橋めぐり）",
    "timing": "通年（秋の瑞巌寺・円通院紅葉ライトアップ）",
    "desc": "慶長14年（1609年）伊達政宗公が建立した国宝「瑞巌寺」の絢爛豪華な障壁画。足元から海が見える五大堂の「すかし橋」や、良縁を結ぶとされる全長252mの朱塗りの「福浦橋（出会い橋）」を渡る歴史散策。",
    "spots": "国宝瑞巌寺、円通院（石庭・枯山水・数珠作り体験）、五大堂（すかし橋）、福浦島（福浦橋）、みちのく伊達政宗歴史館",
    "access": "松島海岸駅より徒歩約5〜10分。",
    "tip": "円通院の秋の紅葉ライトアップは、心字の池に映る逆さ紅葉が鏡のように幻想的で東北屈指の美しさを誇ります。"
  },
  {
    "key": "matsushima_oyster_gourmet",
    "title": "3. 本場松島牡蠣＆三陸の海の幸（焼き牡蠣食べ放題と仙台牛・笹かまぼこ）",
    "timing": "秋〜冬期（10月〜3月の松島牡蠣シーズン）",
    "desc": "栄養豊富な松島湾で育つ名物「松島牡蠣」。「松島さかな市場」の焼き牡蠣ハウスや、宿の夕食でいただく牡蠣鍋・牡蠣フライ・牡蠣釜飯。本場仙台牛の陶板焼きや、自分で手焼きする笹かまぼこ体験。",
    "spots": "松島さかな市場（焼き牡蠣ハウス）、松島かまぼこ本舗（手焼き笹かま体験）、松島海岸通り商店街",
    "access": "松島海岸駅周辺。",
    "tip": "「松島かまぼこ本舗」では、生の笹かまぼこを自分で炭火でじっくりキツネ色に焼き上げて食べる熱々体験ができます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            MATSUSHIMA BAY MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【宮城・日本三景松島】松島湾260島パノラマ・瑞巌寺＆極上牡蠣・牛たん宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            松尾芭蕉が言葉を失った日本三景「松島」。朝日と夕日に輝く松島湾260余の島々。伊達政宗公が再建した国宝・瑞巌寺の荘厳な佇まいと、ぷりぷりの松島牡蠣・三陸海の幸に舌鼓を打つ極上の海辺旅。
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
