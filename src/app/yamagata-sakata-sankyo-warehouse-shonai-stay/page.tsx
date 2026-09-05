import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【山形・酒田＆山居倉庫・庄内砂丘】北前船豪商の港町・酒田ラーメン＆日本海夕陽宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "北前船航路の繁栄とケヤキ並木の美！山形酒田エリア完全特化！国指定史跡「山居倉庫（ケヤキ並木・米穀倉庫）」、日本一の大地主「本間家旧本邸」、日和山公園、名物「酒田ラーメン・庄内浜海鮮宿」を徹底解説。",
  keywords: ["yamagata-sakata-sankyo-warehouse-shonai-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamagata-sakata-sankyo-warehouse-shonai-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamagata-sakata-sankyo-warehouse-shonai-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "sakata_sankyo_warehouse_hotel_stay",
    "title": "1. 山居倉庫〜ケヤキ並木・本間家旧本邸（北前船交易がもたらした豪商の栄華）",
    "timing": "通年（新緑の5月・紅葉の10〜11月・冬の白銀景観）",
    "desc": "明治26年に建てられた白壁・土蔵造りの米穀倉庫群「山居（さんきょ）倉庫（国指定史跡）」。西日と強風を遮るために植えられた樹齢150年以上のケヤキ並木とのコントラスト。日本一の大地主・本間家の武家屋敷「本間家旧本邸」。舞妓文化が残る「相馬樓」。",
    "spots": "山居倉庫（庄内米歴史資料館・酒田夢の倶楽）、本間家旧本邸、相馬樓（舞妓演舞）、日和山公園（日本最古級の木造六角灯台）",
    "access": "JR羽越本線「酒田駅」よりバス約10分。庄内空港よりリムジンバス約30分。",
    "tip": "山居倉庫の裏手に続くケヤキ並木は、四季折々に表情を変える酒田一番のフォトスポットで、夕暮れ時には石畳が柔らかくライトアップされます。"
  },
  {
    "key": "sakata_ramen_seafood_inn_stay",
    "title": "2. 酒田港〜酒田のラーメン・庄内浜の海の幸（トビウオ出汁と極薄ワンタン）",
    "timing": "通年（春のサクラマス・夏の天然岩ガキ・冬の寒鱈汁）",
    "desc": "煮干しや昆布、庄内特産のトビウオ（アゴ）の上品で澄み切った黄金出汁「酒田のラーメン」。雲を呑むような極薄の皮がとろける「ワンタンメン（満月・花鳥風月）」。酒田港で揚がる寒鱈（どんがら汁）、のどぐろ、紅ズワイガニの海鮮会席。",
    "spots": "酒田みなと市場（海鮮どんや とびしま）、酒田ラーメン名店群、さかた海鮮市場、オランダ煎餅FACTORY",
    "access": "酒田港・酒田市街地。",
    "tip": "酒田のラーメンは自家製麺比率が全国トップクラスで、手揉みの中太ちぢれ麺と透き通るトビウオ出汁の相性が抜群です。"
  },
  {
    "key": "shonai_yunohama_sunset_stay",
    "title": "3. 庄内海岸〜湯野浜温泉・日本海夕陽パノラマ（波打ち際のオーシャンビュー）",
    "timing": "通年（日本の夕陽百選・夏の海水浴）",
    "desc": "庄内砂丘の海岸線沿いに広がる「湯野浜（ゆのはま）温泉郷」。天下一の夕陽と称される日本海に沈む茜色のサンセット。海辺の露天風呂から水平線を眺める贅沢。日本海の荒波が育んだ活アワビの踊り焼きや地魚寿司。",
    "spots": "湯野浜温泉、加茂水族館（クラゲドリーム館）、庄内砂丘、由良海岸（白山島）",
    "access": "酒田駅より車約30分、または鶴岡駅より路線バス約40分。",
    "tip": "湯野浜温泉のオーシャンビュー客室からは、日没前後のマジックアワーに日本海が黄金色から紫グラデーションへと染まる絶景を部屋から眺められます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SAKATA & SANKYO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【山形・酒田＆山居倉庫・庄内砂丘】北前船豪商の港町・酒田ラーメン＆日本海夕陽宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            「西の堺、東の酒田」と謳われた北前船交易の港町「酒田」。明治26年築、ケヤキ並木の木陰に佇む黒板塀の「山居倉庫」。日本一の大地主・本間家の栄華を伝える武家屋敷と庭園。飛魚（アゴ）出汁が澄み渡る「酒田のラーメン」と庄内浜の海の幸を味わう旅。
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
                  {hotels.map((hotel: any) => (
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
                          href={hotel.affiliateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
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
