import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【愛媛・道後温泉】本館・飛鳥乃湯泉＆坊っちゃん文学・鯛めし極上宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "日本最古の温泉・道後温泉エリア完全特化！道後温泉本館（保存修理完了）、飛鳥乃湯泉、椿の湯、坊っちゃん列車、宇和島風＆松山風鯛めし食べ歩きと名門旅館を徹底解説。",
  keywords: ["ehime-matsuyama-dogo-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["ehime-matsuyama-dogo-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for ehime-matsuyama-dogo-onsen-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "dogo_honkan_walk",
    "title": "1. 道後温泉本館〜飛鳥乃湯泉・椿の湯（名湯三湯めぐりと湯の街そぞろ歩き）",
    "timing": "通年（全館営業再開でますます賑わう歴史の湯）",
    "desc": "国の重要文化財「道後温泉本館」。太鼓の音で開館を告げる「振鷺閣（しんろかく）」や神の湯・霊の湯。飛鳥時代の建築様式を取り入れた「飛鳥乃湯泉（あすかのゆ）」の開放的な露天風呂。",
    "spots": "道後温泉本館、道後温泉別館 飛鳥乃湯泉、椿の湯、道後ハイカラ通り（道後商店街）、坊っちゃんカラクリ時計",
    "access": "伊予鉄道市内電車（路面電車）「道後温泉駅」下車徒歩約3〜5分。松山空港よりリムジンバス約40分。",
    "tip": "道後ハイカラ通りの「一六本舗」でいただく揚げたての一六タルトの天ぷらは、新感覚の絶品スイーツです。"
  },
  {
    "key": "dogo_taimeshi_gourmet",
    "title": "2. 愛媛の二大鯛めし食べ比べ（炊き込み松山鯛めし＆生卵タレ漬け宇和島鯛めし）",
    "timing": "通年（瀬戸内の真鯛は年中美味）",
    "desc": "土鍋で鯛を一匹丸ごと炊き込む香ばしい「中予風（松山）鯛めし」と、新鮮な真鯛の刺身を生卵と特製醤油ダレに絡めて熱々ご飯にかける「南予風（宇和島）鯛めし」。道後の宿で贅沢に味わい尽くす。",
    "spots": "丸水（がんすい・元祖鯛めし）、かどや道後店、道後麦酒館（道後ビールとじゃこ天）",
    "access": "道後温泉本館周辺、ハイカラ通り沿いに名店が集中。",
    "tip": "道後温泉本館の真向かいにある「道後麦酒館」で、湯上がりに生ビール「坊っちゃんビール」と揚げたてじゃこ天を味わうのが至高です。"
  },
  {
    "key": "dogo_onsen_view_luxury",
    "title": "3. 道後高台・松山城パノラマ（湯築城跡・道後公園と贅沢な客室露天風呂宿）",
    "timing": "通年（春の道後公園桜・秋の紅葉）",
    "desc": "道後温泉街を見晴らす高台の静かな別荘エリア。「ふなや」や「茶玻瑠」「山の手ホテル」など洗練された宿が並び、客室露天風呂から松山市街や夜景を眺めながら極上のプライベートステイ。",
    "spots": "道後公園（湯築城跡・展望台）、松山城（ロープウェイ・現存十二天守）、坂の上の雲ミュージアム",
    "access": "道後温泉駅より徒歩約5〜10分、または各旅館送迎車。",
    "tip": "日本最古の歴史を持つ創業390余年の「ふなや」の日本庭園「詠風庭」は、小川が流れる美しい散策路です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            DOGO ONSEN MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【愛媛・道後温泉】本館・飛鳥乃湯泉＆坊っちゃん文学・鯛めし極上宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            3000年の歴史を刻む日本最古の温泉「道後」。夏目漱石の小説『坊っちゃん』の舞台となった道後温泉本館の木造建築。からくり時計の音色を聞き、瀬戸内の鯛めしと滑らかな美肌湯に癒やされる旅。
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
