import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【静岡・南伊豆＆下田・ヒリゾ浜】開国の港街・白浜海岸＆秘境シュノーケリング・金目鯛宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "伊豆半島最南端のエメラルドグリーンパラダイス・南伊豆＆下田エリア完全特化！ペリー来航の歴史「下田ペリーロード」、本州屈指の透明度「ヒリゾ浜」、白砂の「白浜大浜海岸」、石廊崎オーシャンパーク、下田温泉・南伊豆金目鯛宿を徹底解説。",
  keywords: ["shizuoka-south-izu-shimoda-beach-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["shizuoka-south-izu-shimoda-beach-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for shizuoka-south-izu-shimoda-beach-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "shimoda_perry_heritage_stay",
    "title": "1. 下田港〜ペリーロード・了仙寺（黒船来航の歴史薫るなまこ壁の小径）",
    "timing": "通年（5月の黒船祭・6月下田公園あじさい祭）",
    "desc": "嘉永7年（1854年）マシュー・ペリー提督が上陸した開国の街「下田」。平滑川沿いに石畳となまこ壁の古民家カフェが連なる「ペリーロード」。日米下田条約が締結された「了仙寺」。下田湾を行き交う遊覧船黒船サスケハナ号。",
    "spots": "ペリーロード、了仙寺（ジャスミン寺・黒船ミュージアム）、下田公園（日本一300万輪のあじさい）、下田ロープウェイ（寝姿山展望台）",
    "access": "伊豆急行線「伊豆急下田駅」下車。特急踊り子号で東京駅から直通約2時間40分。",
    "tip": "下田ロープウェイで登る「寝姿山山頂展望台」からは、下田港全景と伊豆七島を見渡す絶景が広がり、縁結びの愛染堂が鎮座します。"
  },
  {
    "key": "south_izu_hirizo_ocean_resort",
    "title": "2. 南伊豆・ヒリゾ浜〜弓ヶ浜・石廊崎（本州屈指の透明度を誇る秘境シュノーケリング）",
    "timing": "通年（ヒリゾ浜渡し船運行：7月上旬〜9月下旬、春のみなみの桜と菜の花まつり）",
    "desc": "船でしか行けない秘境ビーチ「ヒリゾ浜」。抜群の透明度と色鮮やかな熱帯魚が泳ぐシュノーケリングの聖地。扇形の美しい白砂海岸「弓ヶ浜」。伊豆半島最南端の断崖絶壁に建つ「石廊崎オーシャンパーク（石室神社）」。",
    "spots": "ヒリゾ浜（中木港より渡し船）、弓ヶ浜海水浴場（日本の渚百選）、石廊崎灯台・石室神社、みなみの桜と菜の花まつり（青野川沿い）",
    "access": "伊豆急下田駅より路線バス運行。",
    "tip": "石廊崎の断崖に張り付くように建つ「石室神社（いろうじんじゃ）」は、社殿の床下に海が見えるスリリングな絶景パワースポットです。"
  },
  {
    "key": "shirahama_beach_luxury_stay",
    "title": "3. 下田名物「金目鯛」＆白浜海岸（水揚げ日本一の下田港が誇る脂の乗り）",
    "timing": "通年（冬〜初夏の金目鯛は特に脂が乗って極上）",
    "desc": "下田港は金目鯛の水揚げ量日本一。伝統のタレでふっくら煮付けた「金目鯛の姿煮」、皮目をサッと炙った「金目鯛のしゃぶしゃぶ」、金目鯛バーガー。真っ白な砂浜とコバルトブルーの海が広がる「白浜大浜海岸」でのリゾートステイ。",
    "spots": "下田金目鯛専門店、道の駅開国下田みなと、白浜神社（白浜海岸の赤い鳥居）",
    "access": "下田・白浜・南伊豆エリア。",
    "tip": "白浜海岸の磯場に立つ「白浜神社（伊古奈比咩命神社）の赤い鳥居」は、青い海と白い波が打ち寄せる神秘的な写真が撮れる名所です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SOUTH IZU & SHIMODA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【静岡・南伊豆＆下田・ヒリゾ浜】開国の港街・白浜海岸＆秘境シュノーケリング・金目鯛宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            幕末の開国舞台となったレトロな港町「下田」と、伊豆最南端の大自然「南伊豆・ヒリゾ浜」。本州とは思えない驚異の透明度を誇るエメラルドグリーンの海。白砂の白浜海岸、石廊崎の断崖。下田港直送の金目鯛と下田温泉を味わう楽園の旅。
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
