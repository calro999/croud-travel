import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【静岡・浜名湖＆舘山寺温泉】湖畔パノラマ・ロープウェイ＆浜名湖うなぎ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "汽水湖の恵みと湖上パノラマ・静岡浜名湖＆舘山寺温泉エリア完全特化！日本唯一の湖上かんざんじロープウェイ、浜名湖遊覧船、はままつフラワーパーク、名物「浜名湖うなぎ蒲焼き・ひつまぶし宿」を徹底解説。",
  keywords: ["shizuoka-hamanako-kanzanji-unagi-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shizuoka-hamanako-kanzanji-unagi-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shizuoka-hamanako-kanzanji-unagi-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kanzanji_lake_view_onsen",
    "title": "1. 舘山寺温泉〜浜名湖畔（ダイナミックな夕陽とナトリウム・カルシウム強塩温泉）",
    "timing": "通年（浜名湖に沈む夕陽パノラマが美しい黄昏時）",
    "desc": "昭和33年開湯、浜名湖の東北岸に突き出た庄内半島に位置する「舘山寺温泉」。弘法大師ゆかりの舘山寺や愛宕神社が鎮座する舘山遊歩道散策。塩分濃度が高く保温効果に優れた美肌の湯に浸かりながら望む湖面のきらめき。",
    "spots": "舘山寺（聖観世音菩薩・舘山遊歩道）、舘山寺サンビーチ、浜名湖遊覧船乗り場、足湯「水神の松」",
    "access": "JR東海道新幹線・東海道本線「浜松駅」より路線バスで約45分。東名高速「舘山寺スマートIC」より約5分。",
    "tip": "舘山寺温泉街の遊歩道「舘山」山頂の展望台からは、浜名湖の複雑な入り江と東名高速道路の浜名湖橋を一望できます。"
  },
  {
    "key": "hamanako_ropeway_resort_stay",
    "title": "2. かんざんじロープウェイ〜大草山・フラワーパーク（日本唯一の湖上横断空中散歩）",
    "timing": "通年（春のはままつフラワーパーク桜＆チューリップまつりは圧巻）",
    "desc": "浜名湖パルパルから大草山展望台まで湖上を渡る「かんざんじロープウェイ」。360度ガラス張りのゴンドラから見下ろす湖上景観。四季折々の花が咲き誇る「はままつフラワーパーク」や「はままつフルーツパーク時之栖」。",
    "spots": "かんざんじロープウェイ、大草山展望台（浜名湖オルゴールミュージアム）、はままつフラワーパーク、うなぎパイファクトリー",
    "access": "かんざんじ温泉エリア。",
    "tip": "「うなぎパイファクトリー」は入場無料で見学でき、工場直売の限定スイーツやうなぎパイのお土産が手に入ります。"
  },
  {
    "key": "hamanako_unagi_gyoza_gourmet",
    "title": "3. 本場「浜名湖うなぎ」＆浜松餃子（100年以上の養殖歴史を誇る極上の香ばしさ）",
    "timing": "通年（夏バテ防止の夏・脂が乗る秋〜冬）",
    "desc": "浜名湖のミネラル豊富な地下水で育てられる肉厚でふっくらした「浜名湖うなぎ」。秘伝のタレで香ばしく焼き上げる蒲焼き・白焼き・ひつまぶし。キャベツの甘みと豚肉の旨味が詰まった円形焼きの「浜松餃子（もやし添え）」。",
    "spots": "浜名湖うなぎ専門店、浜松餃子学会認定店、弁天島海浜公園（赤鳥居）",
    "access": "浜松・浜名湖周辺。",
    "tip": "浜松餃子は円形に焼いて中央に茹でもやしを添えるのが伝統で、箸休めのもやしと一緒に食べると何個でも食べられます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            HAMANAKO & KANZANJI GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【静岡・浜名湖＆舘山寺温泉】湖畔パノラマ・ロープウェイ＆浜名湖うなぎ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            海と淡水が交わる豊かな汽水湖「浜名湖」と、湖畔に湧く名湯「舘山寺（かんざんじ）温泉」。日本唯一の湖上ロープウェイから見下ろす360度大パノラマ。香ばしい煙を上げる本場の「浜名湖うなぎ」と浜松餃子を味わう旅。
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
