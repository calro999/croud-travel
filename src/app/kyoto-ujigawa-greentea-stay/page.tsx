import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【京都・宇治】平等院鳳凰堂・宇治茶＆源氏物語ゆかりの川畔宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界遺産・京都宇治エリア完全特化！十円玉に描かれた平等院鳳凰堂、宇治川の鵜飼い・橘橋、創業数百年の宇治茶老舗（辻利・中村藤吉）の抹茶パフェ、源氏物語宇治十帖と川畔温泉旅館を徹底解説。",
  keywords: ["kyoto-ujigawa-greentea-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kyoto-ujigawa-greentea-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kyoto-ujigawa-greentea-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "uji_byodoin_view",
    "title": "1. 平等院鳳凰堂〜宇治川リバーサイド（極楽浄土の建築美と川畔の朝散歩）",
    "timing": "通年（春の藤棚・秋の紅葉ライトアップ）",
    "desc": "永承7年（1053年）関白藤原頼通によって建立された国宝「平等院鳳凰堂」。阿字池に映る優美な鳳凰堂の姿。宇治川の中州（塔の島・橘島）にかかる喜撰橋や橘橋を渡る風情ある散策。",
    "spots": "平等院（鳳凰堂内部拝観・ミュージアム鳳翔館）、宇治川（橘橋・喜撰橋・十三重石塔）、宇治川の鵜飼い（夏期）",
    "access": "JR奈良線「宇治駅」南出口より徒歩約10分。京阪宇治線「宇治駅」より徒歩約10分。",
    "tip": "平等院鳳凰堂の内部拝観は当日受付の先着順（定員制）のため、開門直後の朝9時に予約を済ませましょう。"
  },
  {
    "key": "uji_greentea_sweets",
    "title": "2. 平等院表参道〜宇治茶老舗めぐり（挽きたて宇治抹茶パフェ＆茶団子食べ歩き）",
    "timing": "通年（新茶の季節：5月〜6月）",
    "desc": "茶香炉から漂うお茶の香りに包まれる「平等院表参道」。「中村藤吉本店」の竹筒に入った生茶ゼリイや「伊藤久右衛門」の宇治抹茶パフェ。宿の夕食では、抹茶塩でいただく天ぷらや茶粥会席を堪能。",
    "spots": "平等院表参道、中村藤吉本店（生茶ゼリイ）、伊藤久右衛門宇治本店、辻利一本店",
    "access": "JR宇治駅・京阪宇治駅より表参道まで徒歩約5〜8分。",
    "tip": "「中村藤吉本店」のカフェは整理券発券機で順番待ちができるため、発券後に平等院を参拝すると効率的です。"
  },
  {
    "key": "uji_genji_heritage",
    "title": "3. 宇治上神社〜さわらびの道（世界遺産の日本最古神社建築と源氏物語）",
    "timing": "通年（緑豊かな歴史の散策路）",
    "desc": "日本最古の本殿建築（国宝）を有する世界遺産「宇治上神社」と「宇治神社」。宇治川東岸の「さわらびの道」を歩き、紫式部が描いた『源氏物語』宇治十帖の舞台となった文学の里を巡る。",
    "spots": "宇治上神社（国宝本殿・桐原水）、宇治神社（みかえり兎）、源氏物語ミュージアム、興聖寺（琴坂の紅葉）",
    "access": "京阪宇治駅より徒歩約10分。JR宇治駅より徒歩約20分。",
    "tip": "宇治上神社の境内にある「桐原水（とうげんすい）」は、宇治七名水の中で唯一現存する名水湧水です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KYOTO UJI TEA & HERITAGE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【京都・宇治】平等院鳳凰堂・宇治茶＆源氏物語ゆかりの川畔宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            宇治川の滔々たる清流と、極楽浄土を現世に再現した「平等院鳳凰堂」。香ばしい宇治茶の焙じ香が漂う参道。源氏物語の舞台となった歴史の古都で、極上の抹茶スイーツと川畔の静寂に浸る旅。
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
