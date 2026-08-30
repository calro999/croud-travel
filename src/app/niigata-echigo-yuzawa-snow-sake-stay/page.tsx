import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【新潟・越後湯沢＆魚沼】川端康成雪国・ぽんしゅ館利き酒＆魚沼産コシヒカリ極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "川端康成『雪国』の舞台・新潟越後湯沢＆南魚沼エリア完全特化！新幹線駅直結「ぽんしゅ館」の県内全蔵元利き酒＆酒風呂、日本一の「魚沼産コシヒカリ」釜炊きご飯、冬のスノーリゾート、秋のドラゴンドラ紅葉宿を徹底解説。",
  keywords: ["niigata-echigo-yuzawa-snow-sake-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["niigata-echigo-yuzawa-snow-sake-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for niigata-echigo-yuzawa-snow-sake-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "yuzawa_snow_onsen_sake",
    "title": "1. 越後湯沢温泉街〜ぽんしゅ館（新幹線直結の利き酒ミュージアムと雪見温泉）",
    "timing": "通年（冬の白銀雪見風呂・春の新緑・秋の新米シーズン）",
    "desc": "東京から上越新幹線で最速約70分の「越後湯沢温泉」。越後湯沢駅構内「ぽんしゅ館」では、新潟県内全酒蔵の銘酒約100種類を500円でコイン利き酒体験。天然温泉に純米酒を注いだ「酒風呂 湯の沢」での血行促進美肌浴。",
    "spots": "越後湯沢駅ぽんしゅ館（唎酒番所・酒風呂・爆弾おにぎり）、歴史の宿 高半（川端康成執筆の部屋「かすみの間」）、湯沢高原パノラマパーク",
    "access": "上越新幹線「越後湯沢駅」下車すぐ。東京駅から直通約70分。",
    "tip": "ぽんしゅ館の「爆弾おにぎり」は、南魚沼産コシヒカリ1合分を炊きたてで握る超人気名物です。"
  },
  {
    "key": "dragondola_nature_resort",
    "title": "2. 苗場ドラゴンドラ〜湯沢高原（日本最長5.5kmの空中散歩とパノラマテラス）",
    "timing": "秋（10月中旬〜11月上旬のドラゴンドラ紅葉）、冬（12月〜4月のスキーシーズン）",
    "desc": "苗場高原と田代高原を結ぶ日本最長5,481mのロープウェイ「苗場ドラゴンドラ」。エメラルドグリーンの二居湖（ふたいこ）を見下ろす大パノラマ空中散歩。世界最大級166人乗り「湯沢高原ロープウェイ」で行く雲の上のテラス。",
    "spots": "苗場ドラゴンドラ、湯沢高原パノラマパーク（パノラマステーション・ジップライン）、清津峡渓谷トンネル（アートフォトスポット）",
    "access": "越後湯沢駅よりシャトルバスで約20〜40分。",
    "tip": "日本三大峡谷「清津峡（きよつきょう）渓谷トンネル」の最奥パノラマステーションは、水鏡に渓谷美が映り込む世界的人気スポットです。"
  },
  {
    "key": "minamiuonuma_koshihikari_gourmet",
    "title": "3. 本場「魚沼産コシヒカリ」＆にいがた和牛（土鍋釜炊きご飯の圧倒的な甘み）",
    "timing": "通年（9月下旬〜の新米シーズンは特に絶品）",
    "desc": "豪雪地帯のミネラル豊富な雪解け水と昼夜の寒暖差が育む日本一の米「魚沼産コシヒカリ」。土鍋や羽釜で一組ごとに炊き上げるつややかなご飯。新潟の豊かな自然で育った「にいがた和牛」のサーロインや、日本海ののどぐろ塩焼き。",
    "spots": "魚沼の里（八海山雪室・そば屋 長森・菓子処 菜花）、越後湯沢温泉街の和食処",
    "access": "南魚沼・越後湯沢エリア。",
    "tip": "「魚沼の里」にある八海醸造の「八海山雪室」では、1,000トンの雪で冷やされた貯蔵庫見学や限定日本酒の購入が楽しめます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            ECHIGO YUZAWA SAKE & SNOW GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【新潟・越後湯沢＆魚沼】川端康成雪国・ぽんしゅ館利き酒＆魚沼産コシヒカリ極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            「国境の長いトンネルを抜けると雪国であった」。川端康成の名作『雪国』が生まれた歴史ある湯治場「越後湯沢温泉」。越後全蔵の銘酒を味わうぽんしゅ館、炊きたて魚沼産コシヒカリの甘み、極上の雪見露天風呂へ。
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
