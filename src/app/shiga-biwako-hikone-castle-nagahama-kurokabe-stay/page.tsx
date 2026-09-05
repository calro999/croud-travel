import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【滋賀・琵琶湖＆彦根・長浜】国宝彦根城・黒壁＆湖畔温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "現存十二天守・国宝「彦根城」と名園玄宮園、ガラスの街「長浜黒壁スクエア」、琵琶湖一望パノラマと美肌の「おごと温泉」、最高峰の近江牛懐石を徹底解説。湖畔の高級リゾートホテルや伝統温泉旅館を厳選。",
  keywords: ["shiga-biwako-hikone-castle-nagahama-kurokabe-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shiga-biwako-hikone-castle-nagahama-kurokabe-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shiga-biwako-hikone-castle-nagahama-kurokabe-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "hikone_national_treasure_castle_stay",
    "badge": "国宝天守と大名庭園の美意識",
    "title": "1. 国宝彦根城＆名勝玄宮園（三層白亜の現存天守と近江牛贅沢ディナー）",
    "timing": "通年（春の城内桜まつり、新緑の玄武濠、秋の玄宮園紅葉ライトアップ、冬の雪化粧天守）",
    "desc": "慶長9年（1604年）着工、四百年以上の時を経て当時の姿を完全にとどめる国宝五城の一つ「彦根城」。三重三階の美しい天守、太鼓門櫓、天秤櫓など重要文化財の宝庫。城の北東に広がる大名庭園「玄宮園」からは、池越しに天守を仰ぐ見事な借景庭園が広がり、秋のライトアップは幽玄の極みです。夜は近江牛のすき焼きやステーキに舌鼓。",
    "spots": "国宝彦根城天守、名勝玄宮園・楽々園、夢京橋キャッスルロード（城下町散策）、ひこにゃん登場スポット",
    "access": "JR琵琶湖線「彦根駅」下車徒歩約15分（京都駅より新快速で約50分）。名神「彦根IC」より車で約10分。",
    "tip": "「ひこにゃん」は毎日天守前や博物館に登場します（登場時間は公式HPで要確認）。夢京橋キャッスルロードでの食べ歩きも人気です。"
  },
  {
    "key": "nagahama_kurokabe_square_stay",
    "badge": "秀吉出世の城下町とガラスアート",
    "title": "2. 長浜黒壁スクエア＆長浜城歴史博物館（黒漆喰の洋館群と琵琶湖畔の夕陽）",
    "timing": "通年（春の長浜曳山まつり・豊公園の桜、夏のびわ湖花火、秋の湖北紅葉巡り）",
    "desc": "明治時代の旧第百三十銀行長浜支店（黒壁一号館）を中心に、江戸から明治の古建築がガラスショップやギャラリー、工房として再生した人気エリア「黒壁スクエア」。吹きガラス体験やステンドグラスの買い物を満喫できます。湖畔に建つ「長浜城」が佇む豊公園は日本の夕陽百選に選ばれ、雄大な湖面を黄金色に染めるサンセットは感動的です。",
    "spots": "黒壁スクエア（黒壁ガラス館・黒壁体験教室）、長浜城歴史博物館・豊公園、海洋堂フィギュアミュージアム、翼果楼（鯖そうめん名店）",
    "access": "JR北陸本線「長浜駅」下車徒歩約5分。北陸道「長浜IC」より約10分。",
    "tip": "長浜名物の郷土料理「焼鯖そうめん」は、じっくり甘辛く煮込んだ焼き鯖の煮汁でそうめんを茹で上げた絶品。ぜひ味わいたい名物です。"
  },
  {
    "key": "biwako_lake_view_hotspring_stay",
    "badge": "最澄開湯・びわ湖一望の美肌湯",
    "title": "3. おごと温泉〜びわ湖一望のパノラマ露天風呂（比叡山麓に湧く美肌のいで湯）",
    "timing": "通年（朝焼けのびわ湖露天風呂、初夏の新緑、秋の比叡山延暦寺紅葉巡り）",
    "desc": "伝教大師最澄が約1200年前に開湯したと伝えられる歴史ある温泉地「おごと温泉」。pH9.0前後の高いアルカリ性単純温泉は、入浴後にお肌が滑らかになる「美肌の湯」。琵琶湖畔の高台や湖岸に建つ温泉旅館の露天風呂からは、朝日に輝くびわ湖の雄大な水平線を一望しながら贅沢な湯浴みが楽しめます。",
    "spots": "おごと温泉各宿のレイクビュー露天風呂、おごと温泉観光公園（足湯・カフェ）、浮御堂（満月寺）、白鬚神社（琵琶湖の水中鳥居）",
    "access": "JR湖西線「おごと温泉駅」下車（京都駅より普通列車で約20分）。名神「京都東IC」より西大津バイパス経由で約20分。",
    "tip": "京都駅からわずか20分という抜群の好アクセス。京都観光を楽しんだ後の宿泊先としても非常に人気があります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-teal-950 to-blue-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            BIWAKO & HIKONE NAGAHAMA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【滋賀・琵琶湖＆彦根・長浜・雄琴】国宝彦根城・黒壁スクエア＆びわ湖一望温泉宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-teal-100/90 leading-relaxed">
            日本最大の湖「琵琶湖」をめぐる歴史と自然の極上旅。井伊家三十五万石の居城にして日本屈指の美しさを誇る国宝「彦根城」。秀吉が初めて城持ちとなった城下町・長浜のレトロモダンな「黒壁スクエア」。対岸の比叡山麓に湧く1200年の名湯「おごと温泉」。夕暮れ時にびわ湖を茜色に染めるサンセットと、三大和牛・近江牛の豊かな美味に酔いしれる滋賀ステイへご案内します。
          </p>
        </div>
      </div>

      {/* エリア別徹底ガイド＆おすすめ宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide: any) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-teal-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* エリア見出し */}
              <div className="space-y-3 border-b border-teal-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-0.5 rounded-full uppercase">
                    ✨ {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-teal-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-teal-950/80 leading-relaxed font-medium">
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
              <div className="space-y-4 pt-4 border-t border-teal-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-teal-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}周辺のおすすめ厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.length > 0 ? (
                    hotels.map((hotel: any) => (
                      <article
                        key={hotel.hotelNo}
                        className="flex flex-col justify-between border border-teal-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                      >
                        <div>
                          <div className="aspect-video relative overflow-hidden bg-teal-50 border-b border-teal-950/5">
                            {hotel.hotelImageUrl ? (
                              <img
                                src={hotel.hotelImageUrl}
                                alt={hotel.hotelName}
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-teal-950/30 text-xs font-bold">
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
                            <h4 className="text-xs md:text-sm font-black font-journal-serif text-teal-950 line-clamp-2">
                              {hotel.hotelName}
                            </h4>
                            {hotel.hotelSpecial && (
                              <p className="text-[11px] text-teal-950/70 line-clamp-2 font-medium">
                                {hotel.hotelSpecial}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="p-4 pt-0">
                          <a
                            href={hotel.affiliateUrl || hotel.hotelInformationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-teal-700 to-teal-800 hover:from-teal-600 hover:to-teal-700 rounded-xl shadow transition"
                          >
                            ✈️ 楽天トラベルで宿泊プラン・空室を見る
                          </a>
                        </div>
                      </article>
                    ))
                  ) : (
                    <div className="col-span-3 p-6 bg-stone-50 rounded-2xl text-center text-xs text-stone-500">
                      現在おすすめの宿泊施設情報を更新中です。
                    </div>
                  )}
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
          className="inline-flex items-center gap-2 text-xs font-bold text-teal-950 bg-white hover:bg-teal-50 border border-teal-950/20 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
