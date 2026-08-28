import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【栃木・鬼怒川温泉】渓谷美・鬼怒楯岩大吊橋＆ライン下り極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日光・鬼怒川温泉エリア完全特化！鬼怒川渓谷の奇岩怪石、鬼怒楯岩大吊橋パノラマ、鬼怒川ライン下り、東武ワールドスクウェア周辺観光と絶景渓谷露天風呂ホテルを徹底解説。",
  keywords: ["tochigi-kinugawa-onsen-valley-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["tochigi-kinugawa-onsen-valley-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for tochigi-kinugawa-onsen-valley-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kinugawa_valley_luxury",
    "title": "1. 鬼怒川渓谷リバーフロント（ダイナミックな断崖絶景とアルカリ性単純温泉）",
    "timing": "通年（秋の渓谷紅葉・初夏の新緑）",
    "desc": "エメラルドグリーンの鬼怒川と奇岩怪石が織りなす大渓谷。客室のバルコニーや渓流露天風呂から眼下に流れる川のせせらぎを体感。とちぎ和牛や日光湯波（ゆば）会席を堪能。",
    "spots": "鬼怒川ライン下り（木造船川下り）、鬼怒川温泉ロープウェイ（おさるの山）、龍王峡（トレッキングコース）",
    "access": "東武特急スペーシアX・リバティで浅草・新宿から「鬼怒川温泉駅」まで直通約2時間。",
    "tip": "「龍王峡」の遊歩道は、川治温泉まで続く約3kmの奇岩・滝めぐりルートで紅葉時期の絶景ハイクに最適です。"
  },
  {
    "key": "kinugawa_station_walk",
    "title": "2. 鬼怒川温泉駅前〜温泉街（SL大樹の発着と足湯カフェ・テーマパーク）",
    "timing": "通年（SL大樹の運行・ワールドスクウェア）",
    "desc": "東武鉄道「SL大樹（たいじゅ）」の転車台がある鬼怒川温泉駅前。駅前広場の足湯「鬼怒太の湯」や温泉まんじゅう店。世界の名所を再現した「東武ワールドスクウェア」や「日光江戸村」へのアクセスも抜群。",
    "spots": "SL大樹（転車台ショー）、駅前足湯「鬼怒太の湯」、東武ワールドスクウェア、日光江戸村（EDO WONDERLAND）",
    "access": "東武鬼怒川線「鬼怒川温泉駅」下車すぐ。日光宇都宮道路今市ICより車約20分。",
    "tip": "鬼怒川温泉駅の転車台でSL機関車が向きを変えるダイナミックなショーは、鉄道ファンのみならず必見です。"
  },
  {
    "key": "kinugawa_tateiwa_bridge",
    "title": "3. 鬼怒楯岩大吊橋〜楯岩展望台（高さ37mのスリルと縁結びの鐘）",
    "timing": "通年（360度の大パノラマ絶景）",
    "desc": "全長140m、高さ37mの歩道専用吊り橋「鬼怒楯岩大吊橋」。足元に鬼怒川の急流が広がるスリルと、橋を渡った先の楯岩展望台（楯岩鬼怒姫神社・縁結びの鐘）からの大パノラマ。",
    "spots": "鬼怒楯岩大吊橋、楯岩展望台、楯岩鬼怒姫神社、古釜の滝",
    "access": "鬼怒川温泉駅より徒歩約15分、またはダイヤルバス。",
    "tip": "楯岩展望台にある「縁結びの鐘」を鳴らし、鬼怒川の雄大な山並みに願いを響かせるのが人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            KINUGAWA VALLEY MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【栃木・鬼怒川温泉】渓谷美・鬼怒楯岩大吊橋＆ライン下り極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            鬼怒川の清流が刻んだダイナミックな渓谷美。川沿いの断崖に大型温泉ホテルや高級旅館が立ち並ぶ関東屈指の温泉郷。名湯につかりながら渓谷の四季を愛でる極上の温泉リゾートへ。
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
