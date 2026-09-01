import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【千葉・銚子＆九十九里・犬吠埼】本州一早い日の出・犬吠埼灯台＆銚子電鉄・金目鯛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "太平洋の水平線パノラマと海の幸王国・千葉銚子＆九十九里エリア完全特化！本州平地で一番早い日の出「犬吠埼灯台」、東洋のドーバー「屏風ヶ浦」、レトロな「銚子電鉄」、犬吠埼天然温泉、名物「銚子つりきんめ・九十九里ハマグリ宿」を徹底解説。",
  keywords: ["chiba-choshi-kujukuri-inubosaki-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["chiba-choshi-kujukuri-inubosaki-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for chiba-choshi-kujukuri-inubosaki-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "inubosaki_sunrise_onsen_stay",
    "title": "1. 犬吠埼〜犬吠埼灯台・君ヶ浜（本州で最も早い日の出と白亜のレンガ造灯台）",
    "timing": "通年（元旦の初日の出・春〜秋の爽快シーサイド）",
    "desc": "関東最東端に突き出た岬「犬吠埼（いぬぼうさき）」。明治7年英国人ブラントン設計の白亜の灯台「犬吠埼灯台（世界の灯台100選）」。日本の渚百選「君ヶ浜しおさい公園」。太平洋の水平線から昇る朝日を望む犬吠埼温泉。",
    "spots": "犬吠埼灯台（99段の螺旋階段・白いポスト）、犬吠テラステラス、君ヶ浜しおさい公園、満願寺",
    "access": "銚子電鉄「犬吠駅」下車徒歩約7分。東京駅より特急しおさい号で銚子駅まで約110分。",
    "tip": "犬吠埼灯台の下にある「白い丸型ポスト」から手紙を投函すると、犬吠埼限定の風景消印を押印して届けてもらえます。"
  },
  {
    "key": "choshi_railway_byobugaura_stay",
    "title": "2. 屏風ヶ浦〜銚子電鉄・銚子ポートタワー（東洋のドーバーとぬれ煎餅のローカル線）",
    "timing": "通年（レトロ列車の旅・夕暮れの断崖パノラマ）",
    "desc": "高さ40〜50mの海食崖が約10km続く国の名勝・天然記念物「屏風ヶ浦（東洋のドーバー）」。全長6.4kmを走るローカル私鉄「銚子電気鉄道（銚子電鉄）」。名物「ぬれ煎餅」や「まずい棒」。銚子ポートタワーからの360度パノラマ。",
    "spots": "屏風ヶ浦（銚子マリーナ・遊歩道）、銚子電鉄（犬吠駅・仲ノ町車庫・澪つくし号）、銚子ポートタワー・ウオッセ21",
    "access": "銚子市内。",
    "tip": "屏風ヶ浦遊歩道（銚子マリーナ海水浴場側）は平坦な遊歩道が整備されており、間近に地層の縞模様を観察しながらのサンセット散歩が最高です。"
  },
  {
    "key": "choshi_kinmedai_hamaguri_stay",
    "title": "3. 極上ブランド「銚子つりきんめ」＆九十九里大蛤（銚子港直送の脂が乗った深海魚）",
    "timing": "通年（冬〜春は特に脂が乗って絶品）",
    "desc": "銚子沖の親潮と黒潮がぶつかる漁場で一本釣りされる最高級「銚子つりきんめ」。鮮やかな赤色と甘辛い煮付け、香ばしい炙り握り。九十九里名物の特大「焼きハマグリ」や伊勢海老の鬼殻焼き。海の幸尽くしの贅沢な夕食。",
    "spots": "銚子つりきんめ指定料理旅館、銚子漁港第一〜第三卸売市場、九十九里浜焼き処",
    "access": "銚子・九十九里エリア。",
    "tip": "銚子つりきんめの姿煮は、濃厚な甘辛タレがふっくらした白身に染み込み、残ったタレをご飯にかけて食べるのが絶品です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            CHOSHI & KUJUKURI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【千葉・銚子＆九十九里・犬吠埼】本州一早い日の出・犬吠埼灯台＆銚子電鉄・金目鯛宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            山頂・離島を除き本州で一番早く朝日が昇る岬「犬吠埼」と、太平洋の白波が打ち寄せる「九十九里浜」。白亜の犬吠埼灯台と高さ50mの断崖「屏風ヶ浦」。銚子電鉄に揺られながら、黄金色に輝く「銚子つりきんめ」と天然温泉を味わう旅。
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
