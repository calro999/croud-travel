import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【冬のご馳走】あったかご当地鍋＆極上温泉旅館 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "冬の寒さを吹き飛ばす至福の鍋料理！秋田の比内地鶏きりたんぽ鍋、博多の濃厚水炊き＆もつ鍋、茨城大洗の濃厚あんこう鍋、山口下関のとらふぐちり鍋など、全国の絶品鍋と名湯宿を徹底解説。",
  keywords: ["winter-hot-pot-gourmet", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["winter-hot-pot-gourmet"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for winter-hot-pot-gourmet", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "akita_kiritanpo",
    "title": "1. 秋田・大館＆乳頭温泉（本場比内地鶏の出汁香るきりたんぽ鍋）",
    "timing": "旬の時期：10月下旬〜3月",
    "desc": "新米のあきたこまちを香ばしく焼き上げた「きりたんぽ」と、日本三大美味鶏・比内地鶏の濃厚な鶏ガラスープ。舞茸やセリの根の香りが食欲をそそる秋田の冬の風物詩。乳頭温泉郷の雪見露天とともに味わえます。",
    "spots": "乳頭温泉郷、角館武家屋敷（雪景色）、田沢湖、大館樹海ドーム",
    "access": "秋田新幹線「田沢湖駅」より路線バスで約50分。大館能代空港よりリムジンバス約40分。",
    "tip": "秋田の地酒（新政・高清水・雪の茅舎など）とのペアリングが最高。セリのシャキシャキ感と比内地鶏の弾力ある旨味を堪能してください。"
  },
  {
    "key": "fukuoka_mizutaki",
    "title": "2. 福岡・博多＆中洲（コラーゲンたっぷり濃厚鶏水炊き＆極上牛もつ鍋）",
    "timing": "通年（特に秋〜冬の夜が最高）",
    "desc": "九州産銘柄鶏を骨ごとじっくり煮込んだ白濁スープの「博多水炊き」と、プリプリの国産牛小腸を使ったスタミナ抜群の「博多もつ鍋」。屋台めぐりや中洲の夜景を楽しんだ後は、天然温泉付きホテルで快適ステイ。",
    "spots": "中洲屋台街、キャナルシティ博多、櫛田神社、太宰府天満宮（電車で約30分）",
    "access": "JR博多駅・福岡空港から地下鉄で天神・中洲川端まで直通5〜10分。",
    "tip": "水炊きはまずスープを湯呑みで味わい、鶏肉、野菜の順にいただき、最後に旨味が凝縮したスープで作る雑炊が絶品です。"
  },
  {
    "key": "ibaraki_anko",
    "title": "3. 茨城・大洗＆大津港（冬の日本海名物・濃厚あん肝どぶ汁あんこう鍋）",
    "timing": "旬の時期：11月中旬〜翌年3月",
    "desc": "「西のフグ、東のアンコウ」と称される冬の高級魚。大洗や北茨城の老舗旅館では、炒ったあん肝を味噌に溶かし込んだ濃厚な「どぶ汁仕立て」のあんこう鍋を提供。コラーゲンたっぷりの身と皮が美肌効果抜群です。",
    "spots": "大洗磯前神社（神磯の鳥居ご来光）、アクアワールド大洗水族館、那珂湊おさかな市場",
    "access": "JR常磐線特急「ひたち」で上野・東京から水戸駅まで約70分、鹿島臨海鉄道で大洗駅へ約15分。",
    "tip": "神磯の鳥居から昇る冬の朝日は絶景。那珂湊おさかな市場で海鮮土産を買って帰るドライブコースが人気です。"
  },
  {
    "key": "yamaguchi_fugu",
    "title": "4. 山口・下関＆長門湯本温泉（本場下関のとらふぐフルコース＆名湯）",
    "timing": "旬の時期：10月〜3月（秋の彼岸から春の彼岸まで）",
    "desc": "全国のふぐが集まる本場・下関。職人の技が光る芸術的な「ふく刺し（てっさ）」、熱々の「ふくちり鍋」、香ばしい「ひれ酒」、〆の雑炊までふぐ尽くし。長門湯本温泉の星野リゾート界や老舗宿で優雅に過ごせます。",
    "spots": "唐戸市場、角島大橋、元乃隅神社、長門湯本温泉街（音信川遊歩道）",
    "access": "山陽新幹線「新下関駅」または「厚狭駅」より車・バスで各温泉街へ。山口宇部空港利用。",
    "tip": "唐戸市場での週末「活きいき馬関街（寿司バトル）」を楽しんだ後、夜は温泉旅館で落ち着いてふぐ懐石を味わうのが王道です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            WINTER HOT POT
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【冬のご馳走】あったかご当地鍋＆極上温泉旅館 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            湯気が立ち上る土鍋を囲み、旬の地場食材と秘伝の出汁を味わう至福のひととき。熱々の鍋料理でお腹を満たし、体の芯から温まる温泉旅館で極上の冬籠りステイを。
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
