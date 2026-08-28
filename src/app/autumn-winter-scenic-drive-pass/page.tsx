import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【絶景ロード】紅葉＆白銀パノラマ！ドライブウェイ展望温泉宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "車窓を染める圧巻の紅葉パノラマ！伊豆スカイライン（富士山ビュー）、福島磐梯吾妻スカイライン、長野霧ヶ峰ビーナスライン、広島しまなみ海道など、日本を代表する絶景ドライブルートと展望温泉宿を徹底解説。",
  keywords: ["autumn-winter-scenic-drive-pass", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["autumn-winter-scenic-drive-pass"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for autumn-winter-scenic-drive-pass", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "izu_skyline_drive",
    "title": "1. 静岡・伊豆スカイライン＆伊豆高原（富士山と相模湾・駿河湾を両手に望む天空ロード）",
    "timing": "通年（秋の紅葉・冬の富士山冠雪が最もクリア）",
    "desc": "熱海峠から天城高原まで伊豆半島の稜線を走る約40kmの絶景有料道路。滝知山展望台や巣雲山から望む富士山と駿河湾の夕景。伊豆高原の客室露天風呂付き宿で金目鯛ディナーを満喫。",
    "spots": "伊豆スカイライン展望台（玄岳・滝知山）、十国峠パノラマケーブルカー、大室山、城ヶ崎海岸",
    "access": "東名高速沼津IC・新東名長泉沼津ICより伊豆縦貫道経由約30分。",
    "tip": "早朝にスカイラインを走ると、相模湾から昇る朝日と朝日に照らされる赤富士の両方を堪能できます。"
  },
  {
    "key": "bandai_azuma_drive",
    "title": "2. 福島・磐梯吾妻スカイライン＆高湯温泉（日本のグランドキャニオン！荒涼たる火山美と紅葉）",
    "timing": "紅葉シーズン：9月下旬〜10月下旬（11月中旬より冬期通行止）",
    "desc": "吾妻連峰を縫う山岳道路。「日本の道100選」に選ばれ、浄土平周辺の荒々しい火山地形と燃えるような紅葉の対比は圧巻。白濁の名湯・高湯温泉や裏磐梯五色沼リゾートに宿泊。",
    "spots": "浄土平（吾妻小富士お鉢巡り・湿原木道）、つばくろ谷（不動沢橋）、五色沼湖沼群、高湯温泉",
    "access": "東北自動車道福島西ICより車で約30分。郡山駅よりレンタカー利用。",
    "tip": "高湯温泉は全国でも屈指の高濃度硫黄泉。ドライブの疲れを一瞬で癒やしてくれる名湯です。"
  },
  {
    "key": "venus_line_drive",
    "title": "3. 長野・霧ヶ峰ビーナスライン＆白樺湖（標高1,700m！ススキと白樺の高原クルージング）",
    "timing": "紅葉シーズン：9月下旬〜11月上旬",
    "desc": "茅野市から美ヶ原高原まで続く日本最高峰の高原ドライブルート。秋には黄金色に輝くススキの海と白樺林を抜け、富士山や八ヶ岳、北アルプスを一望。白樺湖・蓼科温泉のリゾートホテルでリフレッシュ。",
    "spots": "美ヶ原高原美術館、車山高原展望リフト、霧ヶ峰富士見台、白樺湖、蓼科大滝",
    "access": "中央自動車道諏訪ICより約30〜40分。JR茅野駅よりレンタカー・路線バス。",
    "tip": "車山肩のカフェ「ころぼっくるひゅって」のテラス席でいただく名物ボルシチと珈琲がドライブの定番です。"
  },
  {
    "key": "shimanami_drive",
    "title": "4. 広島・尾道＆しまなみ海道（瀬戸内海の多島美を結ぶ大橋梁アイランドドライブ）",
    "timing": "通年（秋・冬の澄んだ瀬戸内夕景が最高）",
    "desc": "尾道と今治を6つの島と橋で結ぶ「しまなみ海道」。因島、生口島、大三島などを巡り、亀老山展望公園から来島海峡大橋に沈む夕日を鑑賞。尾道水道を望む坂の街ホテルや島内温泉宿にステイ。",
    "spots": "亀老山展望公園（隈研吾設計展望台）、千光寺公園（尾道水道パノラマ）、未来心の丘（生口島）、大山祇神社",
    "access": "山陽自動車道福山西IC・尾道ICより直結。山陽新幹線新尾道駅接続。",
    "tip": "生口島の耕三寺「未来心の丘（大理石の庭園）」はエーゲ海のような絶景フォトスポットとして人気です。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            SCENIC PANORAMA DRIVE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【絶景ロード】紅葉＆白銀パノラマ！ドライブウェイ展望温泉宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            心地よいエンジン音とともに、標高とともに移り変わる木々のグラデーションを駆け抜ける爽快ドライブ。展望台から見渡す雲海や富士山、夕暮れに染まる水平線。愛車で巡る極上のパノラマ温泉旅。
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
