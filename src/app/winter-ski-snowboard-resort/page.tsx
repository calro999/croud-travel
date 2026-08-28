import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【冬のスキー・スノボ】ゲレンデ直結＆極上温泉リゾート 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "パウダースノーと極上温泉！北海道ニセコ、長野白馬八方尾根、新潟越後湯沢、山形蔵王温泉など、ゲレンデ直結・スキーインスキーアウト対応の人気ホテル＆温泉宿を徹底解説。",
  keywords: ["winter-ski-snowboard-resort", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["winter-ski-snowboard-resort"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for winter-ski-snowboard-resort", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "niseko_ski",
    "title": "1. 北海道・ニセコ（世界が称賛するJAPOWパウダースノー聖地）",
    "timing": "シーズン：12月上旬〜4月上旬",
    "desc": "ニセコアンヌプリ国際、グラン・ヒラフ、ニセコHANAZONO、ビレッジの4大スキー場が連なる日本屈指のスノーリゾート。ゲレンデ直結ホテルや温泉付き高級コンドミニアムが充実しています。",
    "spots": "ニセコ全山（グラン・ヒラフ／HANAZONO／ビレッジ／アンヌプリ）、羊蹄山絶景ビュー、倶知安グルメ",
    "access": "新千歳空港・札幌からスキースノーボード直行バス「リゾートライナー」で約2時間30分〜3時間。",
    "tip": "スキーロッカーからゲレンデへ直通できる「スキーイン・スキーアウト」対応のホテルを選ぶと、重い板を運ぶ手間がなく快適度が段違いです。"
  },
  {
    "key": "hakuba_ski",
    "title": "2. 長野・白馬八方尾根＆白馬バレー（北アルプスの大迫力パノラマゲレンデ）",
    "timing": "シーズン：12月上旬〜4月下旬",
    "desc": "長野オリンピックの舞台となった八方尾根をはじめ、エイブル白馬五竜、Hakuba47など多彩なコースが広がる白馬バレー。北アルプスの白銀連峰を一望する露天風呂付きリゾートホテルが人気です。",
    "spots": "白馬八方尾根スキー場、白馬五竜＆Hakuba47、白馬岩岳マウンテンリゾート（HAKUBA MOUNTAIN HARBOR）",
    "access": "北陸新幹線「長野駅」より特急バス「白馬・長野線」で約75分。安曇野IC・長野ICから車で約60分。",
    "tip": "白馬岩岳の絶景テラスで楽しむホットドリンクやベーカリーが大人気。筋肉痛を和らげる強アルカリ性の白馬八方温泉の大浴場は必須です。"
  },
  {
    "key": "yuzawa_ski",
    "title": "3. 新潟・越後湯沢＆苗場（新幹線駅直結＆都心から70分の好アクセス）",
    "timing": "シーズン：12月中旬〜3月下旬",
    "desc": "東京駅から上越新幹線でわずか約70分！駅直結の「GALA湯沢」や広大な苗場スキー場など、初心者から上級者、ファミリーまで手軽に本格スノーアクティビティを楽しめる一大スノーエリアです。",
    "spots": "GALA湯沢スキー場、苗場スキー場、神立スノーリゾート、湯沢高原スキー場、ぽんしゅ館（日本酒利き酒）",
    "access": "上越新幹線「越後湯沢駅」直結・下車すぐ。関越自動車道湯沢ICより各スキー場へ5〜15分。",
    "tip": "越後湯沢駅構内の「ぽんしゅ館」で新潟全蔵の地酒利き酒や爆弾おにぎりを味わうのがアフタースキーの定番の楽しみ方です。"
  },
  {
    "key": "zao_ski",
    "title": "4. 山形・蔵王温泉スキー場（神秘の樹氷原を滑走＆名湯硫黄泉）",
    "timing": "シーズン：12月下旬〜3月下旬",
    "desc": "スノーモンスターと称される巨大な樹氷群の間を滑り抜ける唯一無二のロングコース。滑り終わった後は、強酸性硫黄泉の白濁した温泉で体を温め、名物の玉こんにゃくやジンギスカンを堪能できます。",
    "spots": "蔵王樹氷原（ザンゲ坂コース）、蔵王ロープウェイ、蔵王温泉街、鴫の谷地沼",
    "access": "山形新幹線「山形駅」より直行路線バスで約45分。山形自動車道山形蔵王ICより約30分。",
    "tip": "夜の樹氷ライトアップ鑑賞ナイトツアー付き宿泊プランがおすすめ。標高が高く冷え込むため、防寒対策を万全にしましょう。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SKI & SNOWBOARD RESORT
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【冬のスキー・スノボ】ゲレンデ直結＆極上温泉リゾート 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            世界中からスキーヤーが集まる極上のパウダースノー。スキーやスノーボードを1日中満喫した後は、冷えた体を温める源泉かけ流し温泉と温かいご当地鍋料理で至福のステイを。
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
