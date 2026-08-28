import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【冬の天体観測】満天の星空＆天の川！絶景星空ホテル 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "空気が澄み渡る冬の夜空！長野・阿智村（日本一の星空ナイトツアー）、八ヶ岳・野辺山高原、沖縄・石垣島西表島（星空保護区）、和歌山・串本潮岬など、肉眼で満天の星空や天の川を望む人気ホテル＆温泉宿を徹底解説。",
  keywords: ["winter-starry-sky-astrophotography", "宿泊予約", "温泉宿", "ホテル特集", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["winter-starry-sky-astrophotography"] || {};
    }
  } catch (e) {
    console.error("Failed to load seasonal hotels for winter-starry-sky-astrophotography", e);
  }
  return {};
}

export default function SeasonalFeaturePage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "achi_stars",
    "title": "1. 長野・阿智村＆昼神温泉（環境省認定！日本一の星空ナイトツアー）",
    "timing": "おすすめ時期：通年（冬はヘブンスそのはらウインターナイトツアー開催）",
    "desc": "標高1,400mの山頂へゴンドラで登り、合図とともに全照明が一斉に消灯する「天空の楽園ナイトツアー」。手が届きそうな無数の星々に包まれ、下山後は美肌効果抜群の昼神温泉で温まる感動の旅。",
    "spots": "富士見台高原ヘブンスそのはら（天空の楽園）、昼神温泉郷、阿智神社、天龍峡",
    "access": "中央自動車道飯田山本ICより車で約10分。JR飯田駅より路線バス・直行タクシーで約30分。",
    "tip": "ナイトツアー入場引換券がセットになった昼神温泉の宿泊プランが便利。山頂は氷点下になるため極厚の防寒着やブランケットを用意しましょう。"
  },
  {
    "key": "nobeyama_stars",
    "title": "2. 山梨・長野・八ヶ岳＆野辺山高原（標高1,300m！日本三選星名所の高原リゾート）",
    "timing": "おすすめ時期：10月〜3月（冬の乾燥した夜空が最もクリア）",
    "desc": "国立天文台の電波望遠鏡が設置されるほど星空観測に適した野辺山高原。八ヶ岳の稜線の上に広がる天の川や冬の大三角を、ホテルの星空テラスや屋上展望台からリクライニングチェアでゆったり鑑賞できます。",
    "spots": "野辺山宇宙電波観測所、清里テラス（サンメドウズ清里）、萌木の村、八ヶ岳倶楽部",
    "access": "JR小海線「野辺山駅」「清里駅」下車。中央自動車道長坂IC・須玉ICより車約25分。",
    "tip": "星空案内人（スターソムリエ）が常駐するリゾートホテルに泊まると、星座の解説や本格望遠鏡での惑星観察を楽しめます。"
  },
  {
    "key": "ishigaki_stars",
    "title": "3. 沖縄・石垣島＆西表島（国内初の国際星空保護区！南十字星と天の川）",
    "timing": "おすすめ時期：通年（南十字星は12月下旬〜6月中旬）",
    "desc": "全天88星座中84星座を観測できる奇跡の島・八重山諸島。大気が安定しジェット気流の影響を受けないため、星が瞬かず宝石のように輝きます。プライベートビーチやプールサイドで星空浴を。",
    "spots": "石垣島天文台、川平湾、平久保崎灯台、星野リゾート西表島ホテル周辺ジャングル",
    "access": "羽田・関空・福岡等から石垣空港直行便。石垣港離島ターミナルから各島へ高速船。",
    "tip": "街明かりの少ない北部エリア（川平・平久保）のホテルに宿泊すると、客室のテラスから天の川を肉眼ではっきり確認できます。"
  },
  {
    "key": "kushimoto_stars",
    "title": "4. 和歌山・串本＆潮岬（本州最南端！水平線から昇る星空と太平洋パノラマ）",
    "timing": "おすすめ時期：11月〜3月",
    "desc": "視界を遮るもののない太平洋の水平線。本州最南端・潮岬の断崖に建つリゾートホテルでは、海から昇るオリオン座や冬の天の川を展望露天風呂や屋上からパノラマビューで堪能できます。",
    "spots": "潮岬灯台・望楼の芝、橋杭岩（奇岩の星空リフレクション）、串本海中公園",
    "access": "JR特急くろしおで新大阪駅から串本駅まで約3時間15分。南紀白浜空港より車約60分。",
    "tip": "国の名勝「橋杭岩」と星空の組み合わせは天体写真家に大人気。宿でレンタカーを手配して夜のフォトドライブがおすすめです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            STARRY SKY RETREAT
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【冬の天体観測】満天の星空＆天の川！絶景星空ホテル 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            人工の光が届かない大自然の中、見上げれば息をのむ満天の星空と流れ星。星空テラス、天体望遠鏡ドーム、星空案内人によるナイトツアー、露天風呂から星を仰ぐ極上の天体観測ステイをご紹介します。
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
