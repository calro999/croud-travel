import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【熊本・天草諸島＆三角】世界遺産﨑津集落・イルカウォッチング＆天草大王・車海老宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "天草五橋で結ばれる島々と潜伏キリシタンの祈り・熊本天草エリア完全特化！世界遺産「﨑津集落（﨑津教会・海の天主堂）」、通詞島沖の「野生イルカウォッチング」、天草五橋ドライブ、三角西港、名物「天草大王・幻の車海老宿」を徹底解説。",
  keywords: ["kumamoto-amakusa-islands-sakitsu-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["kumamoto-amakusa-islands-sakitsu-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for kumamoto-amakusa-islands-sakitsu-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "sakitsu_church_heritage_stay",
    "title": "1. 世界遺産・﨑津集落〜﨑津教会・下田温泉（漁村に溶け込む畳敷きのゴシック教会）",
    "timing": "通年（東シナ海に沈む「下田温泉の夕陽」は日本の夕陽百選）",
    "desc": "世界文化遺産「長崎と天草地方の潜伏キリシタン関連遺産」の構成資産「﨑津集落」。穏やかな羊角湾に面して建つ「﨑津教会（海の天主堂・堂内は珍しい畳敷き）」。開湯700年、白鷺が傷を癒やしたと伝わる国民保養温泉地「下田温泉」。",
    "spots": "世界遺産 﨑津集落（﨑津教会・﨑津資料館みなと屋・トウヤ）、大江教会、下田温泉（足湯・夕陽展望台）",
    "access": "天草空港より車で約40分。熊本駅より特急バス「あまくさ号」運行。",
    "tip": "﨑津集落の路地「トウヤ（海へと続く細い小径）」を歩くと、民家の間から穏やかな海が顔を覗かせる独特の漁村風景に出会えます。"
  },
  {
    "key": "amakusa_dolphin_resort_stay",
    "title": "2. 通詞島沖イルカウォッチング〜天草五橋ドライブ（遭遇率98%の野生イルカ）",
    "timing": "通年（一年中約200頭のミナミハンドウイルカが定住）",
    "desc": "天草下島北端の通詞島（つうじしま）沖に定住する野生のミナミハンドウイルカ。船のすぐ横を群れで泳ぎジャンプする姿を間近で観察。九州本土と天草諸島を結ぶ天草五橋（パールライン）の絶景シーサイドドライブ。",
    "spots": "天草イルカウォッチング（五和町二江港出航）、天草五橋（1号橋〜5号橋）、松島温泉、リゾラテラス天草",
    "access": "熊本市内より車で約90分（三角大矢野道路経由）。",
    "tip": "天草のイルカウォッチングは外洋ではなく波が穏やかな海域で行われるため、船酔いが心配な方や小さなお子様連れでも安心して楽しめます。"
  },
  {
    "key": "amakusa_daio_kurumaebi_stay",
    "title": "3. 幻の巨大地鶏「天草大王」＆極上「天草車海老」（養殖発祥の地が誇る海の幸）",
    "timing": "通年（冬の車海老・春〜夏の生ウニ・秋冬の伊勢海老）",
    "desc": "一度絶滅したものの復元された日本最大級の幻の地鶏「天草大王」。弾力ある歯ごたえとコク深い肉汁。車海老養殖発祥の地・天草で味わうピチピチ跳ねる「活き車海老の踊り食い」や塩焼き。濃厚な天草生ウニ丼。",
    "spots": "天草大王料理指定店、車海老料理旅館、道の駅有明（リップルランド・巨大タコモニュメント）",
    "access": "天草諸島全域。",
    "tip": "天草の車海老は、殻を剥いた瞬間に甘みが舌の上に広がり、頭の味噌まで香ばしく焼き上げて丸ごと食べられるのが贅沢です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            AMAKUSA ISLANDS & SAKITSU GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【熊本・天草諸島＆三角】世界遺産﨑津集落・イルカウォッチング＆天草大王・車海老宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            紺碧の有明海と八代海を跨ぐ「天草五橋」を渡り、120余の島々へ。世界遺産に登録された潜伏キリシタンの漁村「﨑津集落」とゴシック様式の教会。約200頭の野生イルカと出会うクルーズ。幻の地鶏・天草大王と踊り食い車海老を味わう楽園の旅。
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
