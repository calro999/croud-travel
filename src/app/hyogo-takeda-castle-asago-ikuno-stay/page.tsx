import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【兵庫・竹田城跡＆朝来・生野銀山】雲海に浮かぶ天空の城・生野鉱山坑道＆但馬牛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本のマチュピチュ・天空の城跡と産業遺産・兵庫朝来エリア完全特化！国史跡「竹田城跡（雲海展望台・立雲峡）」、日本遺産「生野銀山（観光坑道・鉱山町）」、あさご芸術の森、名物「但馬牛・岩津ねぎ宿」を徹底解説。",
  keywords: ["hyogo-takeda-castle-asago-ikuno-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["hyogo-takeda-castle-asago-ikuno-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for hyogo-takeda-castle-asago-ikuno-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "takeda_castle_view_inn_stay",
    "title": "1. 竹田城跡〜立雲峡（日本のマチュピチュ！雲海に浮かぶ天空の城）",
    "timing": "通年（雲海シーズン：9月下旬〜12月上旬の早朝、特に10月〜11月）",
    "desc": "完存する山城石垣としては全国屈指の規模を誇る「竹田城跡（国の史跡・虎臥城）」。対岸の朝来山中腹にある「立雲峡（りつうんきょう）」展望台から望む、円山川の朝もや（雲海）に浮かぶ竹田城の絶景。城下町の寺町通り。",
    "spots": "竹田城跡（天守台・南千畳・本丸）、立雲峡（第1〜第3展望台）、竹田城下町（寺町通り・竹田まちなかの館）",
    "access": "JR播但線「竹田駅」下車。北近畿豊岡道「和田山IC」より車約10分。",
    "tip": "雲海が発生しやすい条件は「前日と当日の寒暖差が大きい晴天の早朝（日の出〜朝8時頃）」で、立雲峡第1展望台へは登山口から徒歩約30分で到達できます。"
  },
  {
    "key": "ikuno_silver_mine_heritage_stay",
    "title": "2. 生野銀山〜鉱山町・あさご芸術の森（800年の歴史を誇る巨大地下迷宮）",
    "timing": "通年（坑道内は年間を通じて約13℃と夏でも涼しい）",
    "desc": "織田信長・豊臣秀吉・徳川家康の直轄鉱山として栄えた「史跡 生野銀山」。全長約350kmに及ぶ坑道のうち約1kmを歩く観光坑道（近代鉱山・江戸時代手掘りゾーン）。赤瓦と生野石の鉱山町情景。巨大ダム湖畔のあさご芸術の森。",
    "spots": "史跡 生野銀山（観光坑道・鉱山資料館・超スーパー地下アイドルGIN48）、生野鉱山町（甲社宅・志村喬記念館）、あさご芸術の森美術館",
    "access": "JR播但線「生野駅」よりバス・タクシー約10分。播但連絡道「生野IC」より約10分。",
    "tip": "生野銀山の観光坑道内にはマネキン人形の鉱夫たち「GIN48」が配置されており、それぞれのプロフィールや歌がSNSで話題を呼んでいます。"
  },
  {
    "key": "tajima_beef_iwatsu_negi_stay",
    "title": "3. 日本三大和牛の素牛「但馬牛」＆幻の「岩津ねぎ」（冬の極上鍋とステーキ）",
    "timing": "通年（岩津ねぎ販売期間：11月下旬〜3月下旬）",
    "desc": "神戸牛や松阪牛・近江牛など全国のブランド和牛のルーツである最高峰黒毛和牛「但馬牛（たじまぎゅう）」。甘みととろけるような柔らかさが自慢の日本三大葱「岩津ねぎ」。但馬牛と岩津ねぎをたっぷりと使ったすき焼き。",
    "spots": "道の駅但馬のまほろば（朝来の特産品販売）、竹田城下町の町家フレンチ・和食処",
    "access": "朝来市全域。",
    "tip": "岩津ねぎは青葉から白根まで余すところなく食べられ、加熱するとトロリとした甘みが増すため、但馬牛とのすき焼きは冬の究極の贅沢です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            TAKEDA CASTLE & ASAGO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【兵庫・竹田城跡＆朝来・生野銀山】雲海に浮かぶ天空の城・生野鉱山坑道＆但馬牛宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            標高353mの古城山山頂に広がる石垣遺構「国史跡・天空の城 竹田城跡」。秋の早朝、濃密な朝霧に包まれて雲海に浮かぶ幻想の姿。戦国時代から昭和まで稼働した「生野銀山」の地下鉱山探検。日本三大和牛のルーツ但馬牛と日本三大葱・岩津ねぎを味わう旅。
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
