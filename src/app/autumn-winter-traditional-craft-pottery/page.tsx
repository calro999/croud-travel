import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【用の美】伝統工芸・陶芸の里めぐり＆美肌温泉旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "土の温もりと職人の粋！栃木・益子焼、石川・加賀九谷焼＆山中漆器、佐賀・有田焼波佐見焼、福井・越前焼＆あわら温泉など、窯元めぐり・絵付け体験と美しい器で味わう極上会席宿を徹底解説。",
  keywords: ["autumn-winter-traditional-craft-pottery", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-traditional-craft-pottery"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-traditional-craft-pottery", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "mashiko_pottery",
    "title": "1. 栃木・益子（用の美が息づく益子焼の里と古民家カフェ・温泉ステイ）",
    "timing": "通年（秋の益子秋の陶器市：11月上旬開催）",
    "desc": "濱田庄司らによって民藝運動の拠点となった益子町。城内坂通りに約50軒の陶器店やギャラリーが並び、作陶体験やカフェ巡りが楽しめます。近隣の真岡や宇都宮・喜連川温泉と組み合わせたステイ。",
    "spots": "益子城内坂通り、益子陶芸美術館、濱田庄司記念益子参考館、道の駅ましこ",
    "access": "真岡鐵道「益子駅」下車。JR宇都宮駅より東野バスで約60分。北関東道真岡ICより車約20分。",
    "tip": "「道の駅ましこ」では地元作家の器や益子野菜を使ったランチが楽しめ、お土産探しに最適です。"
  },
  {
    "key": "kutani_yamanaka",
    "title": "2. 石川・加賀山中＆山代温泉（華麗な九谷焼と山中漆器の器で味わう加賀会席）",
    "timing": "通年（秋の鶴仙渓紅葉・冬の加能ガニ）",
    "desc": "五彩の鮮やかな絵付けが特徴の「九谷焼」と、木目の美しさを活かす「山中漆器」。魯山人ゆかりの山代温泉や鶴仙渓が美しい山中温泉の老舗宿では、美術品のような器に盛られた加賀懐石を堪能。",
    "spots": "九谷焼窯跡展示館、山中温泉鶴仙渓（川床・あやとりはし）、魯山人寓居跡いろは草庵、ゆのくにの森",
    "access": "北陸新幹線「加賀温泉駅」より周遊バス「キャン・バス」または各旅館送迎バス約15分。",
    "tip": "鶴仙渓遊歩道を散策し、川床で道場六三郎レシピのスイーツを味わうのが山中温泉の風流な過ごし方です。"
  },
  {
    "key": "arita_pottery",
    "title": "3. 佐賀・有田＆嬉野・武雄温泉（日本磁器発祥の有田焼と日本三大美肌の湯）",
    "timing": "通年（秋の有田陶磁器まつり：11月中旬）",
    "desc": "400年の歴史を誇る有田焼や、モダンなデザインで人気の波佐見焼。トンバイ塀のある裏通りや泉山磁石場を散策し、日本三大美肌の湯・嬉野温泉で名物「温泉湯どうふ」と佐賀牛に舌鼓。",
    "spots": "有田内山地区（トンバイ塀のある裏通り）、陶山神社（磁器の鳥居）、嬉野温泉シーボルトの湯、武雄神社大楠",
    "access": "JR西九州新幹線「武雄温泉駅」「嬉野温泉駅」下車。長崎空港・佐賀空港よりレンタカー。",
    "tip": "嬉野温泉の名物「とろける温泉湯どうふ」は、弱アルカリ性のお湯で豆腐がとろけて豆乳鍋のようになり絶品です。"
  },
  {
    "key": "echizen_craft",
    "title": "4. 福井・あわら温泉＆越前（越前焼・越前和紙・越前打刃物のものづくり巡り）",
    "timing": "通年（冬の越前ガニ解禁シーズンが最高潮）",
    "desc": "日本六古窯の一つ「越前焼」や1500年の歴史を持つ「越前和紙」、世界が称賛する「越前打刃物」。関西の奥座敷・あわら温泉の庭園露天風呂付き宿に宿泊し、越前漆器で味わう冬の越前ガニ会席を満喫。",
    "spots": "越前陶芸村、越前和紙の里（パピルス館）、タケフナイフビレッジ、東尋坊、あわら温泉屋台村",
    "access": "北陸新幹線「芦原温泉駅」下車。金沢駅から新幹線で約20分。",
    "tip": "「タケフナイフビレッジ」ではガラス張りの工房で職人の鍛造作業を間近で見学でき、包丁づくり体験も人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            JAPANESE POTTERY & CRAFTS
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【用の美】伝統工芸・陶芸の里めぐり＆美肌温泉旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            手になじむ陶器の質感、鮮やかな色彩の絵付け、何百年も受け継がれてきた職人技。ギャラリーや窯元をのんびり歩いて自分だけの一器と出逢い、夜は美しい器に盛り付けられた郷土会席と温泉に酔いしれる旅。
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
