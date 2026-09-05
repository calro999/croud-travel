import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【酒蔵オーベルジュ＆日本酒ペアリング宿】蔵元直営・極上和食マリアージュ 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "酒蔵に泊まる至福！全国の酒蔵直営オーベルジュ＆極上日本酒ペアリング宿完全特化！長野諏訪、福島会津、秋田、京都伏見、兵庫灘、搾りたて生原酒と会席料理の至高のマリアージュ、酒蔵見学・テイスティング付き名宿を徹底解説。",
  keywords: ["japan-sake-brewery-auberge-pairing-stay", "日本酒旅行", "酒蔵巡り", "地酒ペアリング", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-sake-brewery-auberge-pairing-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-sake-brewery-auberge-pairing-stay", e);
  }
  return {};
}

export default function SakeTourismHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shinshu_suwa_sake_auberge",
    "title": "1. 長野・諏訪五蔵〜上諏訪温泉（甲州街道わずか500mに並ぶ5つの名醸蔵）",
    "timing": "通年（秋のひやおろし・春の蔵開き・諏訪湖の花火）",
    "desc": "甲州街道沿いわずか500mの間に「真澄・横笛・本金・麗人・舞姫」の5軒の銘醸酒蔵が密集する全国唯一の酒処「諏訪五蔵」。「ごくらくセット（専用グラス＆ポーチ）」を片手に各蔵をめぐる贅沢な呑み歩き。諏訪湖を望む上諏訪温泉の老舗湯宿。",
    "spots": "諏訪五蔵（宮坂醸造・真澄、伊東酒造、酒ぬのや本金酒造、麗人酒造、舞姫）、片倉館（千人風呂）、諏訪大社上社・下社、諏訪湖間欠泉センター",
    "access": "JR中央本線「上諏訪駅」下車徒歩約5〜10分。中央道「諏訪IC」より約15分。",
    "tip": "上諏訪駅構内には珍しい「足湯」が設置されており、電車を待ちながら諏訪湖の天然温泉に浸かってほろ酔い気分を冷ますことができます。"
  },
  {
    "key": "aizu_sake_craft_inn",
    "title": "2. 福島・会津若松〜東山温泉・芦ノ牧温泉（全国新酒鑑評会金賞数日本一の聖地）",
    "timing": "通年（冬の初しぼり・秋のひやおろし・桜咲く鶴ヶ城）",
    "desc": "全国新酒鑑評会で金賞受賞数日本一を連続達成した「美酒王国ふくしま」の中心地・会津若松。「飛露喜」「写楽」「会津中将」「末廣」など全国の日本酒ファンが垂涎する銘酒が勢ぞろい。開湯1300年の歴史を誇る東山温泉の数寄屋造り料亭旅館。",
    "spots": "末廣酒造 嘉永蔵（蔵見学＆カフェ）、鶴ヶ城（会津若松城）、東山温泉（向瀧・御宿東鳳）、七日町通り（酒蔵・白壁土蔵）",
    "access": "JR磐越西線「会津若松駅」より周遊バス「あかべぇ」または「ハイカラさん」で約15分。",
    "tip": "末廣酒造の嘉永蔵では、木造三階建ての歴史的酒蔵を見学できるほか、仕込み水で淹れた珈琲や酒粕プリンをクラシックな喫茶室で楽しめます。"
  },
  {
    "key": "akita_sake_auberge_retreat",
    "title": "3. 秋田・美酒王国あきた〜横手・湯沢・大曲（新政・雪の茅舎と極上比内地鶏）",
    "timing": "通年（冬の雪見酒・秋の新米新酒・初夏のきりたんぽ鍋）",
    "desc": "寒冷な気候ときれいな雪解け水、卓越した山内杜氏の技が生む秋田の銘酒。「新政」「雪の茅舎」「両関」「山本」など先鋭的かつ芳醇な地酒の数々。きりたんぽ鍋や比内地鶏、ハタハタのしょっつる鍋との完璧な相性を楽しむ山岳リゾートステイ。",
    "spots": "秋田酒類製造、両関酒造（国の登録有形文化財）、日の丸醸造、角館武家屋敷通り、乳頭温泉郷",
    "access": "秋田新幹線「秋田駅」「大曲駅」「角館駅」接続。秋田空港よりレンタカー。",
    "tip": "秋田の酒蔵直営レストランでは、酒粕を使った自家製チーズや味噌漬けなど、日本酒との相性を極限まで突き詰めたペアリングプレートが提供されます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-stone-900 to-emerald-950 text-white p-8 md:p-14 shadow-xl border border-amber-300/30">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-400 to-yellow-300 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            SAKE AUBERGE & PAIRING GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【酒蔵オーベルジュ＆日本酒ペアリング宿】蔵元直営・極上和食マリアージュ 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            酒造りの歴史と息吹が息づく酒蔵の敷地で目覚める「酒蔵オーベルジュ」。熟練の杜氏が丹精込めて醸した限定酒や搾りたて生酒を、料理長が腕を振るう一皿一皿に合わせて味わうペアリングディナー。芳醇な吟醸香と伝統の木造建築に抱かれる大人の極上ステイへ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆厳選宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-amber-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-amber-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    🍶 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-amber-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめ酒蔵＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <span className="font-bold text-stone-950 block text-[11px]">🚅 アクセス＆蔵巡り目安</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                  <span className="font-bold text-emerald-950 block text-[11px]">💡 地酒体験を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-amber-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-amber-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                    銘酒厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-amber-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-amber-50/50 border-b border-amber-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-amber-800/40 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-900 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-700 to-stone-800 hover:from-amber-600 hover:to-stone-700 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-amber-950 bg-white hover:bg-amber-50 border border-amber-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
