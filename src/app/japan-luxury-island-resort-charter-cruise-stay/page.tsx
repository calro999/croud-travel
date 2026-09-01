import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【プライベートクルーズ＆離島ラグジュアリーリゾート】瀬戸内・伊勢志摩・八重山 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "陸路では辿り着けない碧碧たる楽園！プライベートクルーズ・ヘリ送迎対応の最高峰アイランドリゾート完全特化！瀬戸内・ベネッセハウス・ガンツウ、伊勢志摩・アマネム・英虞湾クルーズ、八重山諸島プライベートヨット宿を徹底解説。",
  keywords: ["japan-luxury-island-resort-charter-cruise-stay", "宿泊予約", "高級リゾート", "記念日ホテル", "ラグジュアリーステイ", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-luxury-island-resort-charter-cruise-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-luxury-island-resort-charter-cruise-stay", e);
  }
  return {};
}

export default function LuxuryPremiumHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "iseshima_amanemu_luxury_resort",
    "title": "1. 伊勢志摩・アマネム（英虞湾の真珠筏を望むアマン初の温泉リゾート）",
    "timing": "通年（真珠のように穏やかな英虞湾のパノラマ）",
    "desc": "世界的なラグジュアリーリゾート「アマン」が伊勢志摩国立公園内にオープンした「アマネム（AMANEMU）」。約2,000平米の広大なサーマルスプリング（温泉水プール）。英虞湾を巡るプライベートボートクルーズと伊勢海老・松阪牛ディナー。",
    "spots": "アマネム（サーマルスプリング・ダイニング）、志摩観光ホテル ザ クラシック/ザ ベイスイート、賢島カンツリークラブ",
    "access": "近鉄「賢島駅」より専用車送迎約15分。ヘリコプターチャーター運行あり。",
    "tip": "アマネムの水着着用で入る広大な屋外サーマルスプリングでは、ミネラル豊富な天然温泉に浮かびながら英虞湾の森と空を仰ぐ極上のリフレッシュが体験できます。"
  },
  {
    "key": "setouchi_art_island_guntu_stay",
    "title": "2. 瀬戸内・直島ベネッセハウス（安藤忠雄建築×現代アート×多島美）",
    "timing": "通年（瀬戸内国際芸術祭の舞台・穏やかな気候）",
    "desc": "安藤忠雄氏が設計した「美術館の中に泊まる」ホテル・ベネッセハウス（ミュージアム・オーバル・パーク・ビーチ）。夜間宿泊者だけが独占できる美術館鑑賞。専用チャーターボートで豊島・犬島を巡るアイランドホッピング。",
    "spots": "ベネッセハウス（オーバル専用モノレール）、地中美術館、草間彌生「南瓜」、家プロジェクト",
    "access": "高松港または宇野港よりフェリー・高速船で宮浦港へ。ホテル専用シャトルバス運行。",
    "tip": "ベネッセハウス「オーバル」は山頂のわずか6室のみの特別室で、専用モノレールで登る円形水盤の中庭は宿泊者しか立ち入れない究極のアート空間です。"
  },
  {
    "key": "yaeyama_kohamajima_hoshinoya_stay",
    "title": "3. 八重山諸島・星のや竹富島＆小浜島（琉球赤瓦の集落と日本最大の珊瑚礁）",
    "timing": "通年（国内初の星空保護区に認定された満天の天の川）",
    "desc": "竹富島の伝統的建造物群保存地区のルールに従って造られた一棟一組の赤瓦ヴィラ「星のや竹富島」。珊瑚の石垣に囲まれたプライベート空間。小浜島の日本最大の珊瑚礁「石西礁湖」でのプライベートヨットクルーズやシュノーケリング。",
    "spots": "星のや竹富島、はいむるぶし（小浜島）、コンドイビーチ、カイジ浜（星砂の浜）",
    "access": "石垣港離島ターミナルより高速船で約10〜30分。",
    "tip": "星のや竹富島では、夕暮れ時に「水牛車」に乗って三線の音色を聞きながら集落を巡る特別なオプショナルツアーが用意されています。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 text-white p-8 md:p-14 shadow-2xl border border-amber-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-amber-500 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            LUXURY ISLAND & CRUISE GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【プライベートクルーズ＆離島ラグジュアリーリゾート】瀬戸内・伊勢志摩・八重山 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            穏やかな波を切り進む専用クルーザーでチェックイン。世界最高峰のリゾートブランド「アマン」が手掛けたアマネム、瀬戸内海に浮かぶ動くラグジュアリーホテル「ガンツウ」、アートと建築が共鳴する直島ベネッセハウス。非日常の極致へ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆厳選宿 */}
      <div className="space-y-16">
        {areaGuides.map((guide) => {
          const sectionData = sections[guide.key];
          const hotels = sectionData?.hotels || [];

          return (
            <section
              key={guide.key}
              id={guide.key}
              className="bg-white border border-amber-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-amber-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    💎 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-stone-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">👑 代表的な宿・建築の特徴</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1.5">
                  <span className="font-bold text-stone-950 block text-[11px]">🛥️ アクセス＆送迎案内</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">✨ 極上ステイを叶えるポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選プレミアム宿カード */}
              <div className="space-y-4 pt-4 border-t border-amber-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-stone-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの最高峰宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-amber-900 bg-amber-100/70 border border-amber-300 px-3 py-1 rounded-full">
                    極上プレミアム
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-amber-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-stone-100 border-b border-stone-200">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-stone-400 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-stone-950/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-stone-950 line-clamp-2">
                            {hotel.hotelName}
                          </h4>
                          {hotel.hotelSpecial && (
                            <p className="text-[11px] text-stone-600 line-clamp-2 font-medium">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-600 hover:to-amber-800 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-950 bg-white hover:bg-stone-50 border border-stone-300 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
