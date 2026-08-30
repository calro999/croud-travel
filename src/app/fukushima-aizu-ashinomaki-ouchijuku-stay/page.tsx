import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【福島・会津若松＆芦ノ牧温泉】鶴ヶ城・大内宿ねぎそば＆渓谷露天・ねこ駅長宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "会津の歴史と渓谷美・福島会津若松＆芦ノ牧温泉エリア完全特化！赤瓦の「鶴ヶ城」、江戸時代の宿場町「大内宿」の一本ねぎそば、芦ノ牧温泉駅の「ねこ駅長」、大川渓谷を望む絶景露天風呂と会津馬刺し・地酒宿を徹底解説。",
  keywords: ["fukushima-aizu-ashinomaki-ouchijuku-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["fukushima-aizu-ashinomaki-ouchijuku-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for fukushima-aizu-ashinomaki-ouchijuku-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "ashinomaki_valley_view_onsen",
    "title": "1. 芦ノ牧温泉〜大川羽鳥県立自然公園（大川渓谷の絶壁に佇む秘境温泉郷）",
    "timing": "通年（春の新緑・秋の紅葉渓谷・冬の雪見風呂）",
    "desc": "約1,200年前に弘法大師が開湯したと伝わる「芦ノ牧温泉」。大川の断崖絶壁に沿って旅館が立ち並び、渓流のせせらぎを聞きながら入浴できる「棚田風露天風呂」。会津鉄道「芦ノ牧温泉駅」の愛らしい「ねこ駅長」。",
    "spots": "大川渓谷遊歩道、芦ノ牧温泉駅（ねこ駅長ばす・らぶ）、芦ノ牧ドライブ温泉足湯、塔のへつり（奇岩断崖）",
    "access": "会津鉄道「芦ノ牧温泉駅」より各宿送迎バスで約5分。会津若松市街より車で約25分。",
    "tip": "「塔のへつり」は100万年の歳月をかけて侵食された奇岩怪石の景勝地で、吊り橋を渡って岩窟へ入るスリルが人気です。"
  },
  {
    "key": "aizu_tsurugajo_higashiyama",
    "title": "2. 鶴ヶ城〜大内宿（赤瓦の天守閣と江戸の茅葺き屋根一本ねぎそば）",
    "timing": "通年（春の鶴ヶ城桜まつり・冬の大内宿雪まつり）",
    "desc": "日本で唯一の赤瓦の天守閣「鶴ヶ城（会津若松城）」と白虎隊の眠る飯盛山。街道沿いに約50軒の茅葺き民家が並ぶ国重要伝統的建造物群保存地区「大内宿」。箸の代わりに一本の長ネギを使って食べる名物「ねぎそば」。",
    "spots": "鶴ヶ城（天守閣・茶室麟閣）、大内宿（見晴台・三澤屋）、飯盛山（さざえ堂・白虎隊墓所）、七日町通り（蔵造り商店街）",
    "access": "JR磐越西線「会津若松駅」下車。大内宿まで車・バスで約40分。",
    "tip": "大内宿の「一本ねぎそば」は、ネギをかじりながら薬味代わりに蕎麦をすくい上げる独特の体験が楽しめます。"
  },
  {
    "key": "ouchijuku_negisoba_stay",
    "title": "3. 会津の美食文化（極上桜肉会津馬刺し・こづゆ＆全国新酒鑑評会金賞の地酒）",
    "timing": "通年（全国新酒鑑評会で金賞受賞数日本一を誇る日本酒王国）",
    "desc": "脂身が少なく赤身の旨味が凝縮された「会津馬刺し」を辛子味噌醤油で。武家料理から生まれた具だくさんの汁物「こづゆ」、会津地鶏の炭火焼きや岩魚の塩焼き。末廣、飛露喜、写楽など全国屈指の会津地酒とのペアリング。",
    "spots": "末廣酒造 嘉永蔵（酒蔵見学・カフェ）、会津郷土料理店、七日町カフェ",
    "access": "会津若松・東山温泉・芦ノ牧温泉。",
    "tip": "会津の馬刺しはニンニク醤油ではなく、会津伝統の「特製辛子味噌」を醤油に溶いて食べるのが本場の極上スタイルです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            AIZU WAKAMATSU & OUCHIJUKU GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【福島・会津若松＆芦ノ牧温泉】鶴ヶ城・大内宿ねぎそば＆渓谷露天・ねこ駅長宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            幕末の歴史が息づく会津の城下町と、阿賀川（大川）が削り出した深い渓谷「芦ノ牧温泉」。江戸の面影を色濃く残す茅葺き屋根の宿場町「大内宿」。会津地鶏や会津馬刺し、日本屈指の銘酒の数々に酔いしれる歴史旅。
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
