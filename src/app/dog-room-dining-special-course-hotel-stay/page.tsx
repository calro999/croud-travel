import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【愛犬同伴OK・お部屋食＆愛犬用特製フルコース宿】無添加ごちそう＆記念日 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "愛犬も一緒にお祝いする美食の旅！愛犬用特製フルコース＆お部屋食・レストラン同伴宿完全特化！獣医師・ペット栄養管理士監修の無添加ワンちゃんごはん、バースデーケーキ、飼い主用極上会席・フレンチディナー宿を徹底解説。",
  keywords: ["dog-room-dining-special-course-hotel-stay", "ペットと泊まれる宿", "愛犬同伴", "ドッグリゾート", "プライベートドッグラン", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["dog-room-dining-special-course-hotel-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for dog-room-dining-special-course-hotel-stay", e);
  }
  return {};
}

export default function PetDogResortHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "dog_gourmet_room_dining_stay",
    "title": "1. お部屋食確約旅館（他のワンちゃんが苦手な子も安心の完全個室）",
    "timing": "通年（周囲に気兼ねなくゆっくり味わう温泉会席）",
    "desc": "朝夕ともにお部屋出しされる温泉旅館。他の犬や宿泊者と接触することがないため、臆病なワンちゃんや高齢犬でもストレスフリー。料理長が腕を振るう旬の会席料理と、愛犬用の茹で鶏ササミや温野菜プレート。",
    "spots": "伊豆修善寺温泉、鬼怒川温泉、鳥羽温泉郷、有馬温泉の愛犬同伴老舗旅館",
    "access": "各温泉地。",
    "tip": "お部屋食プランなら、食事中も愛犬をケージに入れる必要がなく、座布団の上でくつろぐ愛犬の様子を見守りながら食事を楽しめます。"
  },
  {
    "key": "dog_course_dining_luxury_hotel",
    "title": "2. 愛犬同伴専用レストラン（フレンチ・イタリアンの愛犬専用フルコース）",
    "timing": "通年（愛犬用カート貸出・リードフック完備）",
    "desc": "愛犬と一緒にテーブル席で食事ができる専用ダイニング。ペット栄養管理士が監修した「エゾ鹿肉のロースト」「馬肉のタルタル」「米粉のパン」。飼い主には本格的なフレンチフルコースや鉄板焼きディナー。",
    "spots": "レジーナリゾート（富士・軽井沢・箱根・鴨川・蓼科）、ホテルフォレストヒルズ那須、ルシアン旧軽井沢",
    "access": "主要リゾート地。",
    "tip": "「レジーナリゾート」各施設では、レストラン内に愛犬用バギーが用意されており、大型犬から小型犬まで落ち着いて一緒にディナーを堪能できます。"
  },
  {
    "key": "dog_birthday_anniversary_resort",
    "title": "3. 愛犬のアニバーサリープラン（無添加特製ドッグケーキ＆記念撮影）",
    "timing": "通年（愛犬の誕生日・うちの子記念日）",
    "desc": "米粉とサツマイモ、豆乳クリームで作られた無添加の愛犬専用アニバーサリーケーキ。ネームプレート付き。プロカメラマンによる記念撮影や、特製フォトフレームのプレゼント特典。愛犬用のおしゃれなアメニティギフト。",
    "spots": "キサラピア・愛犬記念日リゾート、Wan's Resort（山中湖・城ヶ崎）、CARO FORESTA",
    "access": "富士五湖・伊豆・那須エリア。",
    "tip": "バースデープランを予約すると、スタッフ一同からの温かいバースデーカードや記念写真のプレゼントがあり、一生の思い出に残る家族旅行になります。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-950 via-emerald-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-amber-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-yellow-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            DOG GOURMET DINING GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【愛犬同伴OK・お部屋食＆愛犬用特製フルコース宿】無添加ごちそう＆記念日 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            旅行中もずっと一緒、食事の時間も離れない！「愛犬同伴お部屋食＆愛犬用フルコース宿」。お部屋食または愛犬同伴専用ダイニング。獣医師監修の厳選鹿肉や温野菜プレート。愛犬の誕生日や記念日を祝う特製ドッグケーキ付きプランへ。
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
              className="bg-white border border-emerald-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-emerald-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-0.5 rounded-full uppercase">
                    🐾 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-emerald-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 おすすめスポット＆お散歩エリア</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-1.5">
                  <span className="font-bold text-emerald-950 block text-[11px]">🚅 アクセス＆移動ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200 space-y-1.5">
                  <span className="font-bold text-orange-950 block text-[11px]">💡 愛犬と快適に過ごすコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選ドッグフレンドリー宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの愛犬同伴厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                    愛犬歓迎宿
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-emerald-50 border-b border-emerald-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-emerald-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-amber-600 to-emerald-700 hover:from-amber-500 hover:to-emerald-600 rounded-xl shadow transition"
                        >
                          ✈️ 楽天トラベルで愛犬同伴プランを見る
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
          className="inline-flex items-center gap-2 text-xs font-bold text-emerald-950 bg-white hover:bg-emerald-50 border border-emerald-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
