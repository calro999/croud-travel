import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【おひとり様歓迎】秋・冬の気ままな一人旅温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "誰にも気兼ねしない自由な時間。箱根、熱海、草津温泉、京都など、1名宿泊プランが充実し、露天風呂付き客室や部屋食、大浴場＆サウナで自分を癒やす秋・冬の一人旅宿を徹底解説。",
  keywords: ["autumn-winter-solo-travel-retreat", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-solo-travel-retreat"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-solo-travel-retreat", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hakone_solo",
    "title": "1. 神奈川・箱根温泉（新宿からロマンスカー直行＆静寂の隠れ宿）",
    "timing": "通年（秋の美術館巡り・冬の雪見風呂）",
    "desc": "都心から85分でアクセスできる箱根は一人旅のメッカ。ポーラ美術館や彫刻の森美術館でアートに浸り、客室露天風呂や静かなラウンジを備えた大人専用宿で気ままな時間を過ごせます。",
    "spots": "ポーラ美術館、箱根美術館、箱根湯本商店街、芦ノ湖スカイライン",
    "access": "新宿駅から小田急ロマンスカーで箱根湯本駅まで直通約85分。",
    "tip": "チェックイン後は宿のライブラリーカフェで珈琲を片手に読書。夕食をお部屋食やハーフビュッフェで気兼ねなく楽しめるプランが人気です。"
  },
  {
    "key": "atami_solo",
    "title": "2. 静岡・熱海温泉（新幹線45分！海を眺めてワーケーション＆温泉リトリート）",
    "timing": "通年（秋〜冬の海鮮グルメと温泉街）",
    "desc": "東京から新幹線でわずか45分。相模湾を見下ろすオーシャンビューのシングルルームや、Wi-Fi・コワーキングスペース完備のモダン温泉ホテルが多く、海辺の散策と温泉を両立できます。",
    "spots": "ACAO FOREST、来宮神社（大楠パワースポット）、熱海サンビーチ、起雲閣",
    "access": "東海道新幹線で東京駅から熱海駅まで直通約45分。",
    "tip": "熱海駅前平和通り商店街で温泉まんじゅうや磯揚げを食べ歩き、夜は地魚寿司を堪能するのが一人旅の楽しみ方です。"
  },
  {
    "key": "kusatsu_solo",
    "title": "3. 群馬・草津温泉（日本一の名湯を心ゆくまで満喫する湯治ステイ）",
    "timing": "通年（冬の白煙上がる湯畑散策）",
    "desc": "圧倒的な湧出量を誇る草津温泉。湯畑周辺の宿では、一人旅向けのお得な素泊まりプランや1泊朝食付きプランが充実。共同浴場めぐりやご当地居酒屋での一杯など、自由気ままな滞在が叶います。",
    "spots": "湯畑、西の河原公園、大滝乃湯（合わせ湯）、御座之湯、草津熱帯圏",
    "access": "特急「草津・四万」で上野駅から長野原草津口駅まで約2時間20分、接続バス約25分。",
    "tip": "「大滝乃湯」で温度の異なる浴槽を順に巡る「合わせ湯」を体験するのがおすすめ。湯上がりは湯畑前のカフェでクラフトビールを。"
  },
  {
    "key": "kyoto_solo",
    "title": "4. 京都・烏丸四条＆東山（大浴場付きデザイナーズホテルで古都ひとり歩き）",
    "timing": "通年（秋の紅葉ライトアップ・冬の特別寺院公開）",
    "desc": "地下鉄四条駅・烏丸御池駅周辺には、大浴場やサウナを備えたスタイリッシュなホテルが多数。一人でも気兼ねなく入れるおばんざい割烹や町家カフェを巡り、夜は静かに旅の計画を立てられます。",
    "spots": "錦市場、建仁寺（風神雷神図）、南禅寺水路閣、京都国立博物館、鴨川遊歩道",
    "access": "JR京都駅から地下鉄烏丸線で四条駅・烏丸御池駅まで約3〜5分。",
    "tip": "朝7時前の人通りが少ない八坂神社や二年坂・三年坂を散歩できるのは、市内中心部に宿泊する一人旅ならではの贅沢です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SOLO RETREAT
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【おひとり様歓迎】秋・冬の気ままな一人旅温泉宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            思い立った時にふらりと出かける一人旅。読書に没頭したり、気の向くままに名湯に浸かったり、美味しい地酒と料理を味わったり。ひとり旅に優しい安心の厳選宿をご紹介します。
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
