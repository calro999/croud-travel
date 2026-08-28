import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【兵庫・神戸有馬温泉】金泉・銀泉の奇跡の名湯＆六甲山夜景・神戸牛極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本三古湯・日本三名泉の有馬温泉エリア完全特化！茶褐色の「金泉」と無色透明炭酸泉の「銀泉」、湯本坂レトロ散策、六甲有馬ロープウェー、極上神戸牛ステーキと老舗名門旅館を徹底解説。",
  keywords: ["hyogo-kobe-arima-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hyogo-kobe-arima-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hyogo-kobe-arima-onsen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "arima_kinsen_ginsen",
    "title": "1. 温泉街中心部・湯本坂（秀吉ゆかりの金泉「金の湯」と銀泉「銀の湯」めぐり）",
    "timing": "通年（冬の湯けむりと秋の瑞宝寺公園紅葉）",
    "desc": "海水の約1.5倍から2倍の塩分濃度を誇り、鉄分で赤褐色に染まる「金泉」と、ラドン・炭酸ガスを含む「銀泉」。昔ながらの格子戸の家が並ぶ湯本坂をそぞろ歩き、名物「炭酸せんべい」や有馬サイダーを味わう。",
    "spots": "金の湯（無料足湯あり）、銀の湯、湯本坂（レトロ商店街）、有馬玩具博物館、温泉寺・極楽寺",
    "access": "神戸電鉄有馬線「有馬温泉駅」下車徒歩約5〜10分。三宮・新神戸・大阪駅から直通高速バス運行。",
    "tip": "三津森本舗の「生炭酸せんべい」は、焼き上がり後わずか5秒間だけ柔らかく、すぐにパリッと固まる奇跡の食感を体験できます。"
  },
  {
    "key": "arima_kobe_beef",
    "title": "2. 神戸牛づくし極上ステイ（世界が称賛する霜降り神戸ビーフの鉄板焼き・すき焼き）",
    "timing": "通年（記念日や特別なご褒美旅行に最適）",
    "desc": "人肌でとろける上品な脂と芳醇な香りを誇る「神戸牛（但馬牛）」。有馬温泉の名門宿で、専属シェフが目の前で焼き上げる鉄板焼きステーキや、伝統のすき焼き・しゃぶしゃぶを個室・お部屋食で堪能。",
    "spots": "瑞宝寺公園（太閤秀吉が愛した紅葉名所・日暮しの庭）、鼓ヶ滝公園、竹中肉店（神戸牛コロッケ）",
    "access": "有馬温泉街中心部。各旅館の無料送迎あり。",
    "tip": "湯本坂の「竹中肉店」で揚げたて熱々の「神戸牛コロッケ」やミンチカツを食べ歩きするのが観光客の定番です。"
  },
  {
    "key": "arima_rokko_view",
    "title": "3. 六甲有馬ロープウェー〜六甲山頂（1000万ドルの夜景と六甲ガーデンテラス）",
    "timing": "通年（特に秋・冬の澄み渡る夜景パノラマ）",
    "desc": "有馬温泉駅から六甲山頂駅まで約12分の空中散歩「六甲有馬ロープウェー」。眼下に広がる紅葉や雪景色を眺め、山頂の「六甲ガーデンテラス」から神戸・大阪湾を一望する日本屈指の大パノラマ夜景。",
    "spots": "六甲有馬ロープウェー、六甲ガーデンテラス（自然体感展望台 六甲枝垂れ）、六甲高山植物園、六甲オルゴールミュージアム",
    "access": "有馬温泉街よりロープウェー有馬温泉駅へ徒歩または送迎車約10分。",
    "tip": "有馬温泉で温まった後にロープウェーで六甲山へ上がり、夕暮れから日没の1000万ドルの夜景を眺めるルートが人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ARIMA ONSEN MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【兵庫・神戸有馬温泉】金泉・銀泉の奇跡の名湯＆六甲山夜景・神戸牛極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            豊臣秀吉が愛した日本最古の温泉郷「有馬温泉」。湧出時は透明で空気に触れて赤褐色に輝く濃厚な「金泉」と、気泡が弾ける美肌の「銀泉」。六甲山の1000万ドルの夜景と、世界に誇る神戸牛に舌鼓を打つ極上の休日。
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
