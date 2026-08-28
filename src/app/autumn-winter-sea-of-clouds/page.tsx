import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【天空の絶景】雲海テラス＆展望露天風呂の宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "足元に広がる雲の大海原！兵庫・竹田城跡、埼玉・秩父三峯、長野・竜王SORA terrace、熊本・阿蘇外輪山など、秋・冬の早朝に息をのむ雲海を望む絶景ホテル＆温泉旅館を徹底解説。",
  keywords: ["autumn-winter-sea-of-clouds", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-sea-of-clouds"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-sea-of-clouds", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "takeda_castle",
    "title": "1. 兵庫・朝来＆竹田城跡（天空の城が雲海に浮かぶ奇跡の光景）",
    "timing": "雲海シーズン：9月下旬〜12月上旬（特に早朝6時〜7時半）",
    "desc": "雲海に浮かぶ石垣が「日本のマチュピチュ」と称される国史跡・竹田城跡。対岸の立雲峡から城跡全体を望む展望台や、城下町の古民家ホテル・温泉旅館に宿泊すれば、早朝の雲海アタックに最適です。",
    "spots": "竹田城跡、立雲峡展望台、竹田城下町（寺町通り）、生野銀山",
    "access": "JR播但線「竹田駅」下車。北近畿豊岡自動車道和田山ICより車で約10分。",
    "tip": "前日の昼と当日の早朝の寒暖差が大きく、風が穏やかな晴天の朝に発生確率が跳ね上がります。防寒具と懐中電灯を持参しましょう。"
  },
  {
    "key": "chichibu_clouds",
    "title": "2. 埼玉・秩父＆三峯神社（都心から最短！秩父盆地を覆う大雲海）",
    "timing": "雲海シーズン：10月〜11月、4月（年間発生率約100日）",
    "desc": "秩父ミューズパーク展望台や美の山公園から見下ろす、秩父市街地をすっぽり包む雲海。パワースポット三峯神社への参拝や、秩父名物の豚みそ丼・名湯露天風呂と合わせて首都圏から気軽に絶景旅が楽しめます。",
    "spots": "秩父ミューズパーク展望台、三峯神社、美の山公園、羊山公園、長瀞岩畳",
    "access": "西武池袋線特急ラビューで池袋駅から西武秩父駅まで最速77分。関越道花園ICより車約40分。",
    "tip": "早朝の雲海鑑賞後は、長瀞の紅葉ライン下りや秩父神社周辺のレトロカフェ巡りがおすすめです。"
  },
  {
    "key": "shigakogen_clouds",
    "title": "3. 長野・竜王SORA terrace＆渋温泉（標高1,770mの雲海テラスカフェ）",
    "timing": "雲海シーズン：6月〜11月上旬（雲海発生率60%以上）",
    "desc": "世界最大級166人乗りロープウェイで一気に雲の上へ。SORA terraceのソファ席から夕日と雲海が赤く染まるマジックアワーを鑑賞し、夜は石畳が美しい湯田中渋温泉郷で九湯めぐりを満喫できます。",
    "spots": "竜王マウンテンリゾートSORA terrace、渋温泉街（金具屋など）、地獄谷野猿公苑（スノーモンキー）",
    "access": "北陸新幹線「長野駅」より長野電鉄特急で湯田中駅まで約45分。湯田中駅から無料シャトルバスあり。",
    "tip": "夕方のサンセット雲海が特にドラマチック。渋温泉の浴衣と下駄で温泉街の射的や地酒バーを楽しむのが最高です。"
  },
  {
    "key": "aso_clouds",
    "title": "4. 熊本・阿蘇大観峰＆カルデラ（世界屈指の大カルデラに広がる大雲海）",
    "timing": "雲海シーズン：9月〜12月（寒暖差の大きい早朝）",
    "desc": "阿蘇外輪山の大観峰やラピュタの道周辺から見下ろす、阿蘇谷を真っ白に埋め尽くす大雲海。阿蘇五岳がお釈迦様の寝姿（涅槃像）のように雲海の上に浮かび上がる神秘的な絶景に包まれます。",
    "spots": "大観峰展望所、草千里ヶ浜、阿蘇中岳火口、白川水源、黒川温泉",
    "access": "熊本空港よりレンタカーで約50分。JR豊肥本線「阿蘇駅」より車・路線バス。",
    "tip": "阿蘇内牧温泉の展望露天風呂付き宿に泊まると、早朝大観峰へのアクセスが車で約20分とスムーズです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SEA OF CLOUDS
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【天空の絶景】雲海テラス＆展望露天風呂の宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            冷え込んだ秋から初冬の早朝、限られた気象条件でのみ現れる幻想的な「雲海」。山頂テラスや客室のバルコニー、展望露天風呂から見下ろす白銀の雲海は、息をのむほどの感動をもたらします。
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
