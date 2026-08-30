import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【冬の四大味覚極上宿】松葉ガニ・越前ガニ・下関とらふぐ・寒ブリ 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "冬の日本を代表する高級海鮮グルメ完全特化！山陰・北陸のタグ付き「松葉ガニ・越前ガニ」フルコース、本場下関の「天然とらふぐ刺し・ふぐちり鍋」、富山氷見＆京都伊根の「寒ブリしゃぶ」宿を徹底解説。",
  keywords: ["japan-winter-crab-fugu-seafood-feast-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-winter-crab-fugu-seafood-feast-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-winter-crab-fugu-seafood-feast-stay", e);
  }
  return {};
}

export default function GourmetCuisineHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "matsuba_echizen_crab_feast",
    "title": "1. 松葉ガニ＆越前ガニ（日本海の冬の王様・黄色と青のタグ付きブランドガニ）",
    "timing": "冬期限定：11月6日解禁〜3月下旬（旬の最も甘みとミソが詰まった時期）",
    "desc": "福井県が誇る皇室献上ガニ「越前ガニ（黄色タグ）」と、山陰地方の「松葉ガニ（緑・青・白タグ）」「間人ガニ」「津居山ガニ」。活けガニをその場で捌く「カニ刺し」、香ばしい「焼きガニ」、濃厚な「甲羅カニミソ焼き」、締め雑炊。",
    "spots": "越前ガニ本場（芦原温泉・三国温泉・越前海岸）、松葉ガニ本場（城崎温泉・夕日ヶ浦・皆生温泉）",
    "access": "北陸新幹線「芦原温泉駅」、JR山陰本線「城崎温泉駅」「米子駅」。",
    "tip": "「焼きガニ」は炭火で殻がほんのり焦げる程度にサッと焼くと、カニ本来の甘みとジューシーな水分が閉じ込められます。"
  },
  {
    "key": "shimonoseki_torafugu_feast",
    "title": "2. 下関直送「天然とらふぐ」＆ふぐちり鍋（職人技の菊花盛りてっさと香ばしいひれ酒）",
    "timing": "秋〜冬期：10月〜3月（「秋の彼岸から春の彼岸まで」が最も美味）",
    "desc": "ふぐの本場・下関南風泊市場（はえどまり）で競り落とされる最高峰の「天然とらふぐ」。大皿に美しく透き通るように並べられた「てっさ（ふぐ刺し）」、骨から極上の出汁が出る「てっちり（ふぐ鍋）」、香ばしく炙った「ひれ酒」。",
    "spots": "下関唐戸市場、長門湯本温泉、萩温泉、湯田温泉、別府温泉",
    "access": "山陽新幹線「新下関駅」、JR下関駅。",
    "tip": "ふぐ刺しは2〜3枚を箸で豪快にすくい、たっぷりの安岡小ネギを巻いて特製ポン酢ともみじおろしでいただくのが通の食べ方です。"
  },
  {
    "key": "himi_ine_kanburi_shabu",
    "title": "3. 氷見＆伊根の「寒ブリ」しゃぶしゃぶ（荒波で身が引き締まり脂が乗った極上魚）",
    "timing": "冬期限定：11月下旬〜2月（「寒ブリ宣言」が出される厳冬期）",
    "desc": "富山湾の定置網で獲れる「ひみ寒ぶり」や、日本海の荒波と伊根湾の冷水で育つ「伊根の寒ブリ」。包丁を入れると脂で白く輝く切り身を、昆布出汁にサッとくぐらせる「ブリしゃぶ」。大根おろしとポン酢で味わう至福。",
    "spots": "氷見温泉郷（氷見漁港・ひみ番屋街）、伊根の舟屋（伊根湾）、天橋立温泉",
    "access": "JR氷見線「氷見駅」、京都丹後鉄道「天橋立駅」。",
    "tip": "寒ブリしゃぶしゃぶの出汁には千切りネギをたっぷり入れ、ブリと一緒に巻いて食べるとシャキシャキ感と脂の甘みが絶妙にマッチします。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            WINTER SEAFOOD CRAB & FUGU GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【冬の四大味覚極上宿】松葉ガニ・越前ガニ・下関とらふぐ・寒ブリ 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            冬の訪れとともに解禁される日本の至高の海の幸！黄色や青のタグが輝く「松葉ガニ・越前ガニ」の茹で・焼き・カニ刺し。透き通る芸術品「下関とらふぐ」、脂の乗った「氷見・伊根の寒ブリしゃぶ」。冬の贅沢を極める温泉旅。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
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
              {/* テーマ見出し */}
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

              {/* 食材の魅力・産地・味わいポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要産地＆代表的料理</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 主なアクセス＆名湯地</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 美味しく味わう極意</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの美食厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    美食プラン
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
