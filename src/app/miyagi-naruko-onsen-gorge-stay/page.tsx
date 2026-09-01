import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【宮城・鳴子温泉郷＆鳴子峡】日本屈指の多彩な泉質・紅葉深雪橋＆栗だんご宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "奥州三名湯・国内屈指の泉質の宝庫・宮城鳴子温泉郷エリア完全特化！東北屈指の紅葉名所「鳴子峡（大深沢橋）」、鳴子こけしの里散策、多彩な源泉（重曹泉・硫黄泉・食塩泉）、名物「元祖栗だんご・鳴子温泉旅館」を徹底解説。",
  keywords: ["miyagi-naruko-onsen-gorge-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["miyagi-naruko-onsen-gorge-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for miyagi-naruko-onsen-gorge-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "naruko_onsen_kyo_heritage_stay",
    "title": "1. 鳴子温泉街〜湯めぐり・鳴子こけし通り（下駄の音が響く伝統温泉街）",
    "timing": "通年（共同浴場「滝の湯」の白濁湯・春〜秋の湯めぐり）",
    "desc": "承和4年（837年）の鳥谷ヶ坂大噴火で湧出したと伝わる古湯。白濁した酸性硫黄泉の共同浴場「滝の湯」。首を回すとキュッキュと音が鳴る伝統工芸「鳴子こけし」の工房が軒を連ねる駅前通り。「湯めぐりシール」で楽しむ多彩な源泉巡り。",
    "spots": "共同浴場 滝の湯、鳴子こけし通り、日本こけし館、手湯・足湯ポケットパーク、早稲田桟敷湯",
    "access": "JR陸羽東線（奥の細道湯けむりライン）「鳴子温泉駅」下車すぐ。東北道「古川IC」より約40分。",
    "tip": "鳴子温泉のシンボル「滝の湯」は総ヒバ造りの風情ある浴舎で、樋（とい）から打たせ湯のように注がれる濃厚な白濁湯を味わえます。"
  },
  {
    "key": "narukokyo_gorge_autumn_stay",
    "title": "2. 鳴子峡〜大深沢橋・中山平温泉（東北屈指のV字大渓谷と紅葉パノラマ）",
    "timing": "紅葉シーズン：10月中旬〜11月上旬（息を呑む絶景）",
    "desc": "大谷川の浸食によってできた深さ約100mの断崖絶壁が約2.6km続く「鳴子峡」。奇岩と赤・黄に色づく木々の中に架かる「大深沢橋」の絶景。橋の上をJR陸羽東線の列車が通過する瞬間。「うなぎ湯」と呼ばれる中山平温泉のとろとろ美肌湯。",
    "spots": "鳴子峡レストハウス展望台、大深沢遊歩道、見晴台、中山平温泉郷（しんとろの湯・名号館）",
    "access": "鳴子温泉駅より臨時バス「紅葉号」で約15分。",
    "tip": "鳴子峡レストハウスの見晴台からは、大深沢橋と色鮮やかな紅葉、そしてタイミングが合えば渓谷のトンネルを出入りする列車を一望できます。"
  },
  {
    "key": "naruko_kuridango_miyagi_beef_stay",
    "title": "3. 鳴子名物「元祖 栗だんご」＆仙台牛会席（大粒の栗をまるごと包んだ甘美な味）",
    "timing": "通年（できたて熱々の栗だんごはイートイン推奨）",
    "desc": "ふっくら蒸し上げた大粒の栗をもちもちのお餅で丸ごと包み、特製のみたらし餡をたっぷりと絡めた鳴子名物「栗だんご（深瀬）」。宮城が誇る最高ランクのブランド牛「仙台牛」の陶板焼きやすき焼き。地元の山菜料理。",
    "spots": "餅処 深瀬（元祖栗だんご）、鳴子温泉郷の老舗料亭旅館、道の駅あ・ら・伊達な道の駅",
    "access": "鳴子温泉駅前・大崎市鳴子温泉エリア。",
    "tip": "「深瀬」の栗だんごは、店内の喫茶スペースで注文すると、出来立て熱々の湯気が立ち上る状態で供され、お餅のとろける柔らかさが味わえます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            NARUKO ONSEN & GORGE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【宮城・鳴子温泉郷＆鳴子峡】日本屈指の多彩な泉質・紅葉深雪橋＆栗だんご宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            日本に存在する10種類の泉質のうち、なんと8種類が集まる奇跡の温泉郷「鳴子温泉郷」。深さ100mの大渓谷が錦秋に染まる「鳴子峡」と大深沢橋の絶景。カランコロンと下駄の音が響くこけしの温泉街。熱々のみたらし餡が絡む名物栗だんごを味わう旅。
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
