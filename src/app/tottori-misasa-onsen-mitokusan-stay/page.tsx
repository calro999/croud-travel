import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【鳥取・三朝温泉＆三徳山三仏寺】世界屈指のラジウム温泉・国宝投入堂宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本遺産第1号・六根清浄と六感治癒・鳥取三朝エリア完全特化！世界屈指の高濃度ラジウム温泉「三朝温泉（河原風呂・株湯）」、日本一危険な国宝「三徳山三仏寺 投入堂（なげいれどう）」、名物「とち餅・鳥取和牛宿」を徹底解説。",
  keywords: ["tottori-misasa-onsen-mitokusan-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tottori-misasa-onsen-mitokusan-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for tottori-misasa-onsen-mitokusan-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "misasa_radium_onsen_ryokan_stay",
    "title": "1. 三朝温泉街〜三朝橋・河原風呂・株湯（世界屈指のラジウム泉と温泉街情緒）",
    "timing": "通年（吸って・飲んで・浸かる「三朝の吸入・飲泉・入浴」療法）",
    "desc": "世界有数の高濃度ラドンを含有する「三朝温泉」。三朝橋のたもとにある開放的な混浴露天風呂「河原風呂」。源泉発見の地「株湯」。ラドンガスを吸入する「熱気浴」。昭和レトロな温泉本通り（射的・駄菓子屋・和紙灯り）。",
    "spots": "河原風呂、株湯（元湯）、三朝橋（登録有形文化財）、温泉本通り（陣所の館・射的場）、三朝バイオリン美術館",
    "access": "JR山陰本線「倉吉駅」より日ノ丸バスで約20分。米子道「湯原IC」より約50分。",
    "tip": "三朝温泉のお湯は飲むことも可能（飲泉場あり）で、ミネラルとラドンが胃腸の働きを整えてくれるため、入浴と飲泉のダブル効果が期待できます。"
  },
  {
    "key": "mitokusan_nageiredou_stay",
    "title": "2. 三徳山三仏寺〜国宝 投入堂（断崖絶壁に建つ日本一危険な国宝）",
    "timing": "参拝登山期間：4月〜11月（冬期・悪天候時は入山禁止）",
    "desc": "役行者が法力で岩窟に投げ入れたと伝わる「三徳山三仏寺 投入堂（国宝）」。木の根や鎖をよじ登る険しい修行道を登った者だけが拝める奇跡の建築。文殊堂の縁側から望む絶景パノラマ。宿坊での本格精進料理。",
    "spots": "三徳山三仏寺（本堂・文殊堂・地蔵堂・鐘楼堂・国宝投入堂）、三徳山宿坊（皆成院・輪光院）",
    "access": "三朝温泉より車・バスで約15分。",
    "tip": "投入堂への登山は「2人以上での入山」「滑りにくい登山靴または藁草履の着用」が必須条件となっており、本堂裏の登山事務所で靴底チェックが行われます。"
  },
  {
    "key": "tottori_wagyu_tochimochi_stay",
    "title": "3. 鳥取和牛「オレイン55」＆とち餅・松葉ガニ（山陰最高峰の美味と甘味）",
    "timing": "通年（冬期：11月上旬〜3月下旬は松葉ガニシーズン）",
    "desc": "オレイン酸を55%以上含む上質な脂と赤身の旨味が際立つ「鳥取和牛オレイン55」。三徳山の栃の実を灰汁抜きして搗き込んだ素朴で香ばしい銘菓「とち餅」。冬期に水揚げされる山陰の冬の味覚の王者「松葉ガニ（ズワイガニ）」。",
    "spots": "とち餅本舗 つのだ、三朝温泉街の老舗旅館・割烹処、倉吉白壁土蔵群のお食事処",
    "access": "三朝町・倉吉市エリア。",
    "tip": "「とち餅」は独特の香ばしい栃の風味と上品なこし餡の甘みが絶妙で、お茶請けや三朝温泉のお土産として一番人気を誇ります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            MISASA ONSEN & MITOKUSAN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【鳥取・三朝温泉＆三徳山三仏寺】世界屈指のラジウム温泉・国宝投入堂宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            「三度朝を迎えると病が治る」と伝わる奇跡の湯治場「三朝（みささ）温泉」。高濃度ラドンが細胞を活性化させるホルミシス効果。断崖絶壁の窪みに建つ日本一危険な国宝建築「三徳山三仏寺 投入堂」。三徳川のせせらぎと鳥取和牛を味わう癒やしの旅。
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
