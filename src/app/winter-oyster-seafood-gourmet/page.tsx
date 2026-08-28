import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【冬の海のミルク】極上牡蠣＆冬海鮮づくし温泉旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "冬に旨味が最高潮を迎える牡蠣！広島・宮島（焼き牡蠣＆牡蠣土手鍋）、宮城・松島（松島湾ぷりぷり牡蠣）、三重・鳥羽的矢湾（ブランド的矢かき会席）、兵庫・赤穂（坂越牡蠣）など、絶品牡蠣料理と温泉を堪能できる名宿を徹底解説。",
  keywords: ["winter-oyster-seafood-gourmet", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["winter-oyster-seafood-gourmet"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for winter-oyster-seafood-gourmet", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hiroshima_oyster",
    "title": "1. 広島・宮島＆厳島神社（世界遺産の島で味わう焼き牡蠣＆牡蠣土手鍋）",
    "timing": "旬の時期：11月〜2月（大粒で濃厚な最高期）",
    "desc": "日本一の牡蠣の生産地・広島。宮島表参道商店街で立ち上る香ばしい焼き牡蠣の煙を楽しみ、厳島神社の大鳥居を望む温泉宿で牡蠣の土手鍋や牡蠣釜飯会席を贅沢に味わえます。",
    "spots": "厳島神社（大鳥居・廻廊）、宮島表参道商店街、弥山ロープウェイ、宮島水族館",
    "access": "JR山陽本線「宮島口駅」よりフェリーで約10分（宮島桟橋着）。広島駅から約30分。",
    "tip": "夕暮れ時の宮島ライトアップ鑑賞後、宿で広島地酒（雨後の月・賀茂金秀など）とともにいただく牡蠣料理が絶品です。"
  },
  {
    "key": "matsushima_oyster",
    "title": "2. 宮城・日本三景松島（松島湾のぷりぷり牡蠣小屋と絶景オーシャンビュー温泉）",
    "timing": "旬の時期：10月下旬〜3月中旬",
    "desc": "リアス海岸の豊かな森のミネラルが注ぐ松島湾の牡蠣。名物「牡蠣小屋」での蒸し焼き牡蠣食べ放題や、松島温泉の展望露天風呂から日本三景の島々を眺めるパノラマステイ。",
    "spots": "松島観光協会かき小屋、松島遊覧船、円通院、瑞巌寺、五大堂",
    "access": "JR仙石線「松島海岸駅」下車徒歩約5分。仙台駅からJRで約30〜40分。",
    "tip": "松島温泉はとろみのある美肌の湯。冷えた体を芯から温めてくれます。"
  },
  {
    "key": "mie_matoya_oyster",
    "title": "3. 三重・鳥羽＆的矢湾（紫外線殺菌の元祖清浄生牡蠣「的矢かき」フルコース）",
    "timing": "旬の時期：11月〜3月",
    "desc": "波静かな的矢湾で育てられるブランド牡蠣「的矢（まとや）かき」。甘みが強くエグみのない極上の生牡蠣、焼き牡蠣、牡蠣グラタンなど多彩な料理を、鳥羽温泉郷の絶景海景色宿で満喫。",
    "spots": "的矢湾、鳥羽水族館、ミキモト真珠島、志摩スペイン村、鳥羽展望台",
    "access": "近鉄特急で近鉄名古屋駅から鳥羽駅まで約1時間40分、大阪難波駅から約2時間。",
    "tip": "伊勢海老やアワビ、的矢かきが勢揃いする冬限定の「伊勢志摩三大味覚プラン」が最も満足度が高いです。"
  },
  {
    "key": "hyogo_aioi_oyster",
    "title": "4. 兵庫・播磨赤穂＆坂越湾（火を通しても縮まない！濃厚坂越牡蠣と赤穂温泉）",
    "timing": "旬の時期：11月下旬〜3月",
    "desc": "名水千種川が注ぐ坂越（さこし）湾で育つ「坂越牡蠣」は、大粒でクセがなくぷりぷり。播磨灘を一望する赤穂御崎温泉の絶景インフィニティ露天風呂と牡蠣会席を堪能できます。",
    "spots": "坂越の古い町並み（大道通り）、赤穂御崎遊歩道、赤穂城跡、きらきら坂",
    "access": "JR赤穂線「播州赤穂駅」下車。山陽新幹線相生駅接続。姫路駅からJR約30分。",
    "tip": "「きらきら坂」の海沿いカフェ散策と、赤穂御崎からの夕日鑑賞を組み合わせたドライブが人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            WINTER OYSTER & SEAFOOD
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【冬の海のミルク】極上牡蠣＆冬海鮮づくし温泉旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            ぷりぷりと大粒でクリーミーな冬の牡蠣。炭火で香ばしく焼き上げる殻付き焼き牡蠣、熱々のカキフライ、濃厚な牡蠣鍋や牡蠣ご飯。海の恵みと極上の温泉に癒やされる冬の美食ステイへ。
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
