import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【栃木・那須高原】茶臼岳・御用邸の森＆ベーカリー・温泉リゾート 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "皇室の御用邸があるロイヤルリゾート・那須高原エリア完全特化！那須連山・茶臼岳ロープウェイ、殺生石、ペニーレインなど人気ベーカリーカフェ、那須温泉郷の鹿の湯（にごり湯）とクラシックホテルを徹底解説。",
  keywords: ["tochigi-nasu-highland-nature-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tochigi-nasu-highland-nature-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for tochigi-nasu-highland-nature-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "nasu_shikanoyu_onsen",
    "title": "1. 那須湯本・鹿の湯周辺（白濁硫黄泉の元祖と殺生石の奇観）",
    "timing": "通年（冬の雪見風呂・秋の紅葉シーズン）",
    "desc": "630年開湯、栃木県最古の木造共同浴場「鹿の湯」。41度から48度まで分かれた浴槽で短時間入浴を繰り返す伝統の入浴法。九尾の狐伝説が残る「殺生石」の硫黄の香り漂う奇勝。",
    "spots": "元湯 鹿の湯、殺生石（九尾の狐伝説）、那須温泉神社、湯善の里",
    "access": "東北新幹線「那須塩原駅」より関東自動車バス「那須ロープウェイ行き」で約35分「那須湯本温泉」下車。",
    "tip": "鹿の湯はシャンプーや石鹸の使用が禁止されている本格湯治場のため、純粋なお湯の力だけを体感しましょう。"
  },
  {
    "key": "nasu_forest_resort",
    "title": "2. 那須高原・御用邸の森リゾート（暖炉ラウンジ＆那須黒毛和牛ディナー）",
    "timing": "通年（新緑の避暑・秋の全山紅葉）",
    "desc": "那須御用邸に隣接する広大な森林リゾート。暖炉付きラウンジでのワインフリーフローや、那須黒毛和牛のグリルステーキ、地元契約農家の高原野菜を味わう贅沢なオールインクルーシブステイ。",
    "spots": "那須平成の森（御用邸用地の原生林ガイドウォーク）、那須ロープウェイ（茶臼岳九合目）、那須高原展望台（恋人の聖地）",
    "access": "東北新幹線那須塩原駅より各ホテル無料送迎バスで約30分。東北道那須ICより約15分。",
    "tip": "「那須平成の森」では専門ガイドと一緒に歩くガイドウォークに参加すると、手つかずの巨木や野鳥に出逢えます。"
  },
  {
    "key": "nasu_bakery_cafe_stay",
    "title": "3. ベーカリーカフェ＆アートミュージアム（ペニーレインとステンドグラス）",
    "timing": "通年（ビートルズファン・アンティーク好き必見）",
    "desc": "ビートルズの世界観が広がる名門ベーカリー「BAKERY PENNY LANE（ペニーレイン）」。名物ブルーベリーブレッドや、アンティークステンドグラスが輝く美術館、那須どうぶつ王国など充実の観光。",
    "spots": "BAKERY PENNY LANE那須店、那須ステンドグラス美術館、那須どうぶつ王国、那須とりっくあーとぴあ",
    "access": "那須高原広谷地交差点より車で約5〜15分。",
    "tip": "ペニーレインのモーニングは早朝から行列ができるため、オープン前（朝7時半頃）の到着がおすすめです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            NASU HIGHLAND NATURE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【栃木・那須高原】茶臼岳・御用邸の森＆ベーカリー・温泉リゾート 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            標高1,000mを超える那須連山の山裾に広がる「那須高原」。開湯1300年の硫黄泉「鹿の湯」と、パチパチ薪が燃える暖炉付き高原リゾート。澄みきった空気の中で過ごす優雅な休日。
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
