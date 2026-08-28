import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【年末年始・お正月】初詣＆初日の出ご来光温泉旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "新しい年の幕開け！伊勢神宮（三重）、鶴岡八幡宮（鎌倉）、成田山新勝寺（千葉）、犬吠埼温泉（本州最速初日の出）など、初詣と温泉おせち料理を堪能できる年末年始の人気宿を徹底解説。",
  keywords: ["new-year-hatsumode-onsen", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["new-year-hatsumode-onsen"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for new-year-hatsumode-onsen", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "ise_hatsumode",
    "title": "1. 三重・伊勢神宮＆鳥羽志摩（日本人の心のふるさとでお伊勢参り初詣）",
    "timing": "年末年始・お正月（終夜参拝あり）",
    "desc": "内宮・外宮の両参りで新年の多幸を祈願するお伊勢参り。伊勢志摩の温泉旅館では、伊勢海老やアワビを贅沢に使ったお祝い会席とおせち料理が振る舞われ、朝熊山展望台からは感動的な初日の出を拝めます。",
    "spots": "伊勢神宮（内宮・外宮）、おかげ横丁・おはらい町、夫婦岩（二見興玉神社）、朝熊山頂展望足湯",
    "access": "近鉄特急で名古屋から伊勢市駅・宇治山田駅まで約80分、大阪難波駅から約100分。",
    "tip": "元旦の早朝参拝（朝5時〜6時台）は比較的混雑が穏やかで、宇治橋から昇る朝日が神々しくおすすめです。"
  },
  {
    "key": "kamakura_hatsumode",
    "title": "2. 神奈川・古都鎌倉＆湘南（鶴岡八幡宮初詣と相模湾・富士夕景）",
    "timing": "年末年始・お正月",
    "desc": "源頼朝ゆかりの鶴岡八幡宮や長谷寺での初詣。由比ヶ浜や七里ヶ浜沿いのオーシャンビューホテルに泊まれば、相模湾越しに望む富士山と初夕日の絶景、鎌倉野菜や相模湾の地魚会席を満喫できます。",
    "spots": "鶴岡八幡宮、鎌倉大仏（高徳院）、長谷寺、江の島（江島神社・シーキャンドル）、小町通り",
    "access": "JR横須賀線・湘南新宿ラインで東京・新宿から鎌倉駅まで約55分。江ノ電接続。",
    "tip": "小町通りの食べ歩きや初詣後は、江ノ電で江の島へ足を伸ばし、夕暮れの江の島シーキャンドルライトアップを鑑賞するのが人気です。"
  },
  {
    "key": "narita_hatsumode",
    "title": "3. 千葉・成田山新勝寺（初詣参拝客全国屈指！名物うなぎと温泉）",
    "timing": "年末年始・お正月（1月中ずっと賑わう初詣）",
    "desc": "年間300万人以上の初詣客が訪れる大本山成田山新勝寺。表参道に立ち並ぶ老舗うなぎ店で香ばしい蒲焼きを味わい、成田空港周辺の天然温泉付きホテルでゆったりと新年を迎えるステイが人気です。",
    "spots": "成田山新勝寺（大本堂・平和大塔）、成田山表参道（駿河屋・川豊うなぎ）、成田山公園",
    "access": "京成特急スカイライナーまたはJR成田線で京成成田駅・成田駅下車。上野・日暮里から約40分。",
    "tip": "成田山表参道の名店うなぎは整理券制になることが多いため、午前中の早めに整理券を受け取ってから参拝に向かうのがスムーズです。"
  },
  {
    "key": "choshu_goraiko",
    "title": "4. 千葉・銚子＆犬吠埼温泉（本州の平地で一番早い初日の出と太平洋パノラマ）",
    "timing": "元旦ご来光（例年6時46分頃）",
    "desc": "本州の平地で最も早く初日の出が見られる犬吠埼（いぬぼうさき）。太平洋を一望する海岸沿いの温泉露天風呂から、水平線から昇る黄金色の初日の出を望む体験は圧倒的な感動をもたらします。",
    "spots": "犬吠埼灯台、犬吠テラステラス、銚子ポートタワー、屏風ヶ浦、銚子電鉄",
    "access": "JR特急「しおさい」で東京駅から銚子駅まで約1時間50分、銚子電鉄で犬吠駅まで約20分。",
    "tip": "元旦の朝は客室テラスや展望露天風呂から初日の出を直接拝めるオーシャンビュー客室の予約が必須です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            NEW YEAR RETREAT
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【年末年始・お正月】初詣＆初日の出ご来光温泉旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            厳かな新年の祈りと、太平洋から昇るまばゆい初日の出。豪華なおせち料理やお雑煮、初湯に浸かるお正月旅行。年末年始に訪れたい開運・初詣の温泉旅館を厳選紹介。
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
