import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【秋・冬キャンプ】薪ストーブ＆焚き火・天然温泉グランピング 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "冬こそグランピングのベストシーズン！富士山ビューの大型ドームテント、薪ストーブ、プライベート焚き火、天然温泉や貸切サウナを完備した全国の極上グランピングリゾートを徹底解説。",
  keywords: ["autumn-winter-glamping-tent", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-glamping-tent"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-glamping-tent", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "fuji_glamping",
    "title": "1. 山梨・富士五湖＆河口湖（富士山を望む薪ストーブ付きドームテント）",
    "timing": "通年（秋の紅葉・冬の雪景色と焚き火が最高）",
    "desc": "テントの窓一面に広がる富士山の絶景。全室に冷暖房・薪ストーブや専用焚き火スペース、プライベート露天風呂を完備したグランピング施設が多数。甲州ワインビーフBBQを楽しめます。",
    "spots": "河口湖畔、富士急ハイランド、新倉山浅間公園、ふじてんスノーリゾート",
    "access": "中央自動車道河口湖ICより約10〜15分。新宿から直通バスで河口湖駅まで約100分。",
    "tip": "夜は焚き火でマシュマロ焼き（スモア）やホットワインを。朝は澄んだ空気の中で富士山から昇る朝日を眺める贅沢を。"
  },
  {
    "key": "chiba_glamping",
    "title": "2. 千葉・木更津＆いすみ（都心から60分！バレルサウナ＆天然温泉グランピング）",
    "timing": "通年（冬も温暖で過ごしやすい南房総）",
    "desc": "東京湾アクアラインで都心から1時間の好アクセス。セルフロウリュができるプライベートバレルサウナや、自家源泉の黒湯天然温泉を備えたドームテントで、手軽に極上のアウトドアリトリートを体験。",
    "spots": "三井アウトレットパーク木更津、マザー牧場、いすみ鉄道、濃溝の滝",
    "access": "アクアライン経由で木更津・袖ケ浦ICより車約10〜20分。JR内房線木更津駅接続。",
    "tip": "かずさ牛ステーキや房総の伊勢海老・アワビなど、豪華食材が揃った手ぶらBBQディナーが人気です。"
  },
  {
    "key": "nasu_glamping",
    "title": "3. 栃木・那須高原（北欧風ヴィラ＆天然温泉付きラグジュアリーステイ）",
    "timing": "通年（秋の紅葉狩り・冬の雪見焚き火）",
    "desc": "御用邸のある那須高原の森林リゾート。北欧テイストの広々としたドームテントやコテージで、那須名物白根牛ステーキや地元産チーズフォンデュを味わい、美肌の那須温泉で温まります。",
    "spots": "那須ハイランドパーク、那須どうぶつ王国、那須サファリパーク、殺生石・鹿の湯",
    "access": "東北新幹線「那須塩原駅」よりレンタカー・送迎バスで約30分。東北道那須ICより約15分。",
    "tip": "ペット（愛犬）同伴可能なプライベートドッグラン付きテントも充実しており、ファミリーや愛犬家に最適です。"
  },
  {
    "key": "mie_glamping",
    "title": "4. 三重・伊勢志摩（英虞湾シーサイド＆松阪牛・伊勢海老海鮮BBQ）",
    "timing": "通年（冬の伊勢海老・牡蠣シーズンが最高峰）",
    "desc": "リアス海岸・英虞湾の静かな波音を聞きながら過ごすシーサイドグランピング。冬に旬を迎える伊勢海老や的矢牡蠣、松阪牛を炭火BBQで豪快に味わい、星空を眺めながらの貸切風呂を満喫できます。",
    "spots": "横山展望台（英虞湾パノラマ）、志摩スペイン村、伊勢神宮（車で約35分）、鳥羽水族館",
    "access": "近鉄特急で賢島駅・鵜方駅まで。伊勢自動車道伊勢西ICより伊勢道路経由約40分。",
    "tip": "伊勢神宮参拝とお伊勢参りグルメを組み合わせたドライブ旅行の宿泊拠点として抜群の人気を誇ります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            LUXURY GLAMPING
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【秋・冬キャンプ】薪ストーブ＆焚き火・天然温泉グランピング 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            パチパチと薪が爆ぜる焚き火の温もり、冷えた体に染み渡る天然温泉、暖房完備の快適な大型ドームテント。手ぶらで豪華なBBQやアウトドア体験を満喫できる秋・冬の贅沢リゾートステイ。
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
