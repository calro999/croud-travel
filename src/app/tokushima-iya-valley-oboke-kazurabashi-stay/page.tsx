import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【徳島・祖谷渓＆大歩危・かずら橋】日本三大秘境・スリルのかずら橋＆大歩危峡舟下り・祖谷そば宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "切り立つ断崖とエメラルドグリーンの清流・徳島祖谷渓＆大歩危峡エリア完全特化！国指定重要有形民俗文化財「祖谷のかずら橋」、断崖絶壁に立つ「小便小僧」、大歩危峡遊覧船、渓谷ケーブルカーで行く祖谷温泉、名物「祖谷そば・鮎の塩焼き宿」を徹底解説。",
  keywords: ["tokushima-iya-valley-oboke-kazurabashi-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tokushima-iya-valley-oboke-kazurabashi-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for tokushima-iya-valley-oboke-kazurabashi-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "iya_kazurabashi_secret_onsen",
    "title": "1. 祖谷のかずら橋〜祖谷渓・小便小僧（平家落人の悲話を伝える吊り橋と断崖絶壁）",
    "timing": "通年（新緑の5月・紅葉の11月上旬〜中旬は錦秋の絶景）",
    "desc": "自生するシラクチカズラを編んで作られた長さ45mの吊り橋「祖谷のかずら橋（国指定重要有形民俗文化財）」。足元の隙間から見える祖谷川の急流。祖谷街道の断崖絶壁に立つ「小便小僧」。ケーブルカーで下る秘湯・祖谷温泉。",
    "spots": "祖谷のかずら橋（夜間ライトアップ・びわの滝）、祖谷渓の小便小僧（高さ200m断崖）、新祖谷温泉 ホテルかずら橋（天空露天風呂スロープカー）",
    "access": "JR土讃線「大歩危駅」より路線バスで約20〜30分。井川池田ICより約50分。",
    "tip": "「和の宿 ホテル祖谷温泉」では、傾斜角42度の専用ケーブルカーで約170m下の谷底へ下り、祖谷川のせせらぎを聞きながら入る自噴源泉かけ流し露天風呂が最高です。"
  },
  {
    "key": "oboke_koboke_gorge_stay",
    "title": "2. 大歩危峡・小歩危峡〜大歩危峡観光遊覧船（2億年の歳月が削った結晶片岩の回廊）",
    "timing": "通年（春の鯉のぼり・ラフティングの夏・紅葉の秋）",
    "desc": "吉野川の激流が結晶片岩を削り出してできた約8kmの渓谷「大歩危（おおぼけ）・小歩危（こぼけ）」。国指定天然記念物。「大歩危峡観光遊覧船」に乗り、船頭のガイドを聞きながら間近で仰ぐ奇岩怪石。大歩危温泉での癒やし。",
    "spots": "大歩危峡観光遊覧船（レストラン・妖怪屋敷）、道の駅大歩危、小歩危峡（吉野川ラフティングの世界的聖地）",
    "access": "JR土讃線「大歩危駅」下車徒歩約20分。",
    "tip": "春（3月下旬〜5月末）には、大歩危峡の川の上に無数の鯉のぼりが風になびく「大歩危峡鯉のぼり」が開催され、船上からの眺めが圧巻です。"
  },
  {
    "key": "iya_soba_ayu_gourmet_stay",
    "title": "3. 秘境の味「祖谷そば」＆でこまわし（つなぎを使わない太くて短い十割蕎麦）",
    "timing": "通年（秋の新そばシーズン・冬のしし鍋）",
    "desc": "昼夜の寒暖差が大きい祖谷地方で育つ香り高いソバ。つなぎをほとんど使わず太くて切れやすい素朴な「祖谷そば」。味噌を塗った豆腐や里芋を囲炉裏で回しながら焼く郷土料理「でこまわし」。徳島の地鶏「阿波尾鶏」と清流の鮎。",
    "spots": "祖谷そば処、祖谷のかずら橋周辺茶屋、祖谷の里山料理宿",
    "access": "三好市祖谷・大歩危エリア。",
    "tip": "祖谷そばは、すするのではなくお出汁と一緒にレンゲやスプーンですくって食べるのが伝統で、素朴なソバ本来の甘みが口いっぱいに広がります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            IYA VALLEY & OBOKE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【徳島・祖谷渓＆大歩危・かずら橋】日本三大秘境・スリルのかずら橋＆大歩危峡舟下り・祖谷そば宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            平家落人伝説が息づく日本三大秘境「徳島・祖谷渓＆大歩危峡」。シラクチカズラで編まれたスリル満点の「祖谷のかずら橋」。200mの断崖を見下ろす小便小僧。専用ケーブルカーで渓谷底へ下る秘境の露天風呂と、素朴な祖谷そばを味わう旅。
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
