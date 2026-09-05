import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【長野・上高地＆乗鞍・白骨】河童橋・大正池・乳白色秘湯宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "神降地と称される北アルプスの聖地「上高地（河童橋・大正池・明神池）」、乗鞍岳麓のすずらん温泉「乗鞍高原」、三日入れば三年風邪を引かぬ名湯「白骨温泉」を徹底解説。絶景山岳ホテルや乳白色濁り湯の秘湯旅館を厳選。",
  keywords: ["nagano-kamikochi-norikura-alps-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagano-kamikochi-norikura-alps-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagano-kamikochi-norikura-alps-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kamikochi_kappabashi_stay",
    "title": "1. 上高地〜河童橋・大正池・明神池（穂高連峰を仰ぐ日本屈指の山岳景勝地）",
    "timing": "開山期間（4月中旬〜11月15日／新緑の5月下旬〜6月、高山植物の夏、黄金のカラマツ黄葉の10月中旬〜下旬）",
    "desc": "標高約1500mの平坦な谷あいに広がる奇跡の山岳景観。立ち枯れの木々と焼岳が湖面に映える「大正池」から、梓川沿いの木道を歩いてシンボル「河童橋」へ。さらに針葉樹林を抜けて静寂の「明神池」へ至る遊歩道は、どこを切り取っても絵画のような美しさです。",
    "spots": "河童橋、大正池、明神池（穂高神社奥宮）、田代池・田代湿原、上高地帝国ホテル、ウェストン碑",
    "access": "通年マイカー規制。さわんどバスターミナル（長野側）または平湯バスターミナル（岐阜側）よりシャトルバスで約30分。松本駅より直通バスもあり。",
    "tip": "上高地内のホテルに宿泊すると、観光客が押し寄せる前の早朝6時台に、朝霧たなびく静寂の河童橋や大正池を独り占めできます。"
  },
  {
    "key": "norikura_milky_onsen_stay",
    "title": "2. 乗鞍高原〜すずらん温泉＆善五郎の滝（乗鞍岳の恵み・乳白色の硫黄泉）",
    "timing": "通年（夏の避暑・高山植物、秋の乗鞍エコーライン紅葉、冬のパウダースノーと雪見温泉）",
    "desc": "標高3026mの乗鞍岳東麓に広がる広大な高原リゾート。乗鞍岳の地下深くから湧き出す乗鞍高原温泉は、強い硫黄の香りと青みを帯びた乳白色のにごり湯が特徴。豪快な水しぶきを上げる「善五郎の滝」や「三本滝」、のどかな一の瀬園地などネイチャーウォークも充実しています。",
    "spots": "乗鞍高原温泉、善五郎の滝、三本滝（日本の滝百選）、一の瀬園地（まいめの池）、乗鞍岳畳平（標高2702mご来光バス）",
    "access": "長野道「松本IC」より国道158号・県道経由で約60分。アルピコ交通上高地線「新島々駅」より路線バスで約50分。",
    "tip": "日本一標高の高いバス停「乗鞍岳畳平」へ登るシャトルバス（夏秋運行）に乗れば、本格的な登山装備なしでも雲上の高山植物や絶景を体感できます。"
  },
  {
    "key": "shirahone_onsen_hotspring_stay",
    "title": "3. 白骨温泉〜三日入れば三年風邪を引かぬ名湯（湯川渓谷に佇む白濁の秘湯）",
    "timing": "通年（新緑の露天風呂、秋の渓谷紅葉、冬の深い雪景色と湯けむり）",
    "desc": "湯川の深い渓谷にひっそりと宿が寄り添う、開湯600年の秘湯「白骨（しらほね）温泉」。弱酸性硫黄泉の湯は、空気に触れることでミルクのように白濁し、湯船の縁には炭酸カルシウムの結晶（湯の花）が鍾乳石のように堆積。古くから胃腸病の名湯として湯治客に愛され続けています。",
    "spots": "泡の湯旅館（名物の大野天風呂）、白船荘新宅旅館、湯元齋藤旅館、白骨温泉野天風呂、冠呼坂",
    "access": "松本ICより車で約70分。新島々駅より路線バスで約60分（季節運行）。上高地や乗鞍高原からも車で約30〜40分。",
    "tip": "白骨温泉の源泉で作る「温泉粥」は名物朝食。胃腸に優しく、温泉のほのかな塩分と硫黄の風味が体に染み渡ります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KAMIKOCHI & NORIKURA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【長野・上高地＆乗鞍高原・白骨】河童橋・大正池・乳白色秘湯＆穂高連峰山岳宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            エメラルドグリーンの梓川と、鏡のように穂高連峰を映す大正池・河童橋の神々しい絶景「上高地」。マイカー規制により守られた静寂の山岳リゾートから、乗鞍岳の雄大な裾野に広がる乗鞍高原、そして乳白色の霊泉が湧く山間の秘湯・白骨温泉へ。日常を忘れ、清冽なアルプスの大自然と極上のいで湯に包まれる旅をお届けします。
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
