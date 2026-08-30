import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【岐阜・下呂温泉】日本三名泉・美肌の湯＆飛騨牛トマト丼・温泉街湯めぐり 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本三名泉・岐阜下呂温泉エリア完全特化！草津・有馬と並ぶpH9.2の「つるつる美肌湯」、湯めぐり手形での名旅館外湯めぐり、飛騨川の噴泉池、名物飛騨牛トマト丼・温玉ソフトと飛騨牛朴葉味噌会席宿を徹底解説。",
  keywords: ["gifu-gero-onsen-heritage-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["gifu-gero-onsen-heritage-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for gifu-gero-onsen-heritage-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "gero_bihada_onsen_walk",
    "title": "1. 下呂温泉街〜飛騨川沿い（日本三名泉・つるつる美肌湯と足湯めぐり）",
    "timing": "通年（冬の澄んだ空気と雪見風呂・春の桜並木）",
    "desc": "室町時代の僧・万里集九や江戸時代の儒学者・林羅山が「日本三名泉」と称えた下呂温泉。アルカリ性単純温泉の湯は、絹のように滑らかで肌を包み込む「美人の湯」。「湯めぐり手形」で加盟旅館の銘湯をめぐる旅。",
    "spots": "噴泉池（飛騨川河川敷）、下呂発温泉博物館、足湯各所（さるぼぼ七福神社足湯・加恵瑠神社）、温泉寺（173段の石段）",
    "access": "JR高山本線「下呂駅」下車すぐ。名古屋駅から特急「ワイドビューひだ」で直通約1時間40分。",
    "tip": "「温泉寺」の石段を登りきった境内からは、下呂温泉街と飛騨川を一望するパノラマ夜景が広がります。"
  },
  {
    "key": "gero_gassho_village_stay",
    "title": "2. 下呂温泉合掌村〜いでゆ朝市（白川郷から移築された合掌造りと足湯）",
    "timing": "通年（合掌造りの四季・秋の紅葉・森の滑り台）",
    "desc": "世界遺産・白川郷などから移築された10棟の合掌造り民家が並ぶ野外博物館「下呂温泉合掌村」。国指定重要文化財「旧大戸家住宅」や陶芸・和紙漉き体験。175mのローラースライダー「森の滑り台」。",
    "spots": "下呂温泉合掌村（旧大戸家・影絵劇しらさぎ座）、いでゆ朝市（地場産野菜・地酒）、いでゆ通り",
    "access": "下呂駅より濃飛バス合掌村線で約6分。温泉街より徒歩約15分。",
    "tip": "合掌村内の「市倉」では、炭火でじっくり焼いたイワナ・アユの塩焼きや五平餅を囲炉裏端でいただけます。"
  },
  {
    "key": "gero_hidagyu_tomato_gourmet",
    "title": "3. A5飛騨牛朴葉味噌焼き＆温玉ソフト（下呂ご当地グルメの饗宴）",
    "timing": "通年（香ばしい朴葉味噌ととろける極上霜降り肉）",
    "desc": "自家製味噌にキノコやネギを乗せ、最高ランクA5飛騨牛とともに朴葉の上で香ばしく焼く「飛騨牛朴葉味噌焼き」。特産トマトと飛騨牛を合わせたご当地丼「飛騨牛トマト丼」。下呂温泉の源泉で作る温泉卵を乗せた「温玉ソフト」。",
    "spots": "ゆあみ屋（ほんわかプリン・足湯カフェ）、GEROGEROバタースタンド、飛騨牛料理専門店",
    "access": "下呂温泉街中心部。",
    "tip": "「ゆあみ屋」の足湯に浸かりながら食べる「温玉ソフト」は、温泉卵とソフトクリームを混ぜると濃厚カスタードのような味わいになります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            GERO ONSEN HERITAGE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【岐阜・下呂温泉】日本三名泉・美肌の湯＆飛騨牛トマト丼・温泉街湯めぐり 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            有馬・草津と並び称される日本三名泉「下呂温泉」。pH9.2を誇る天然の石鹸のようなとろりとした美肌湯。飛騨川のせせらぎを聞きながら歩く温泉街の足湯めぐりと、飛騨牛朴葉味噌焼きの香ばしい香りに包まれる休日。
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
