import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【グランピング＆バレルサウナ体験宿】北欧テント・星空BBQ＆ととのい 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "大自然の中で極上のととのい体験！本格バレルサウナ＆グランピングリゾート宿完全特化！富士山麓、白馬、千葉房総、淡路島、薪サウナ・天然水風呂・外気浴インフィニティチェア、豪華BBQディナー宿を徹底解説。",
  keywords: ["glamping-outdoor-barrel-sauna-resort-stay", "鉄道旅行", "乗り物旅", "絶景体験", "温泉宿", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["glamping-outdoor-barrel-sauna-resort-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for glamping-outdoor-barrel-sauna-resort-stay", e);
  }
  return {};
}

export default function RailwayActivityHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "fuji_barrel_sauna_glamping",
    "title": "1. 山梨・富士五湖（河口湖・山中湖）〜富士山ビューバレルサウナ（絶景外気浴）",
    "timing": "通年（冬の澄んだ空気と富士山サウナは最高の贅沢）",
    "desc": "客室専用デッキに設置されたエストニア製バレルサウナ。窓越しに雄大な富士山を眺めながらのアロマ水セルフロウリュ。富士の伏流水を使った天然水風呂。ラグジュアリードームテントと甲州牛ステーキBBQ。",
    "spots": "河口湖畔、山中湖パノラマ台、忍野八海、富士急ハイランド",
    "access": "中央道「河口湖IC」または東富士五湖道路「山中湖IC」より車約10〜15分。",
    "tip": "富士山麓のグランピングサウナでは、冬期には外気浴中にマイナス気温の澄み切った冷気で一気にクールダウンでき、未体験のディープリラックスが得られます。"
  },
  {
    "key": "boso_chiba_sauna_retreat_stay",
    "title": "2. 千葉・房総（いすみ・木更津）〜里山サウナ＆プライベートプール（都心から90分）",
    "timing": "通年（年間を通じて温暖・緑に囲まれたアウトドア）",
    "desc": "竹林や広大な芝生ガーデンに佇むプライベートサウナリゾート。薪ストーブでじっくり温める本格フィンランド式サウナ。プールに飛び込むダイナミックなクールダウン。夜は満天の星空の下での焚き火とスモア体験。",
    "spots": "養老渓谷、ポッポの丘、木更津アウトレット、マザー牧場",
    "access": "アクアライン経由で都心より車約60〜90分。",
    "tip": "薪サウナは電気ストーブサウナよりも熱が柔らかく、パチパチとはぜる薪の音と木の香りに包まれる極上のリラクゼーションが味わえます。"
  },
  {
    "key": "kansai_awaji_barrel_sauna_stay",
    "title": "3. 兵庫・淡路島〜シーサイドバレルサウナ（夕陽と潮風のととのい空間）",
    "timing": "通年（海に沈む夕陽を眺めながらのサンセットサウナ）",
    "desc": "瀬戸内海を正面に望むオーシャンフロントサウナ。丸いガラス窓から夕陽を眺めながら汗を流す至福。海風を感じる外気浴デッキ。淡路島玉ねぎや淡路牛、近海鮮魚の豪華グランピングBBQ。",
    "spots": "淡路島サンセットライン、ニジゲンノモリ、あわじ花さじき、慶野松原",
    "access": "神戸淡路鳴門道「淡路IC」または「北淡IC」より車。",
    "tip": "サウナ後のディナーでは、淡路島産の甘い完熟玉ねぎを丸ごとホイル焼きにしたBBQメニューがサウナ後の身体に染み渡る美味しさです。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-950 via-indigo-950 to-stone-900 text-white p-8 md:p-14 shadow-xl border border-cyan-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-cyan-400 to-blue-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            GLAMPING & BARREL SAUNA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【グランピング＆バレルサウナ体験宿】北欧テント・星空BBQ＆ととのい 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-cyan-100/90 leading-relaxed">
            心地よい木の香りとセルフロウリュの熱波に包まれる「バレルサウナ＆グランピング」。天然の地下水風呂で身体を引き締め、満天の星空の下でインフィニティチェアに身を委ねる究極のととのい。焚き火の炎と極上グランピングBBQへ。
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
              className="bg-white border border-blue-950/10 rounded-3xl p-6 md:p-10 shadow-sm space-y-8"
            >
              {/* テーマ見出し */}
              <div className="space-y-3 border-b border-blue-950/10 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[10px] font-extrabold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-0.5 rounded-full uppercase">
                    🚂 {guide.timing}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black font-journal-serif text-blue-950">
                  {guide.title}
                </h2>
                <p className="text-xs md:text-sm text-stone-700 leading-relaxed font-medium">
                  {guide.desc}
                </p>
              </div>

              {/* 特徴・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1.5">
                  <span className="font-bold text-blue-950 block text-[11px]">📍 おすすめスポット＆見どころ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-cyan-50/60 border border-cyan-200 space-y-1.5">
                  <span className="font-bold text-cyan-950 block text-[11px]">🚅 アクセス＆乗車ポイント</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">💡 体験を満喫するコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-blue-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-blue-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    厳選ステイ
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {hotels.map((hotel: any) => (
                    <article
                      key={hotel.hotelNo}
                      className="flex flex-col justify-between border border-blue-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
                    >
                      <div>
                        <div className="aspect-video relative overflow-hidden bg-blue-50 border-b border-blue-100">
                          {hotel.hotelImageUrl ? (
                            <img
                              src={hotel.hotelImageUrl}
                              alt={hotel.hotelName}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-blue-300 text-xs font-bold">
                              {hotel.hotelName}
                            </div>
                          )}
                          {hotel.hotelMinCharge > 0 && (
                            <span className="absolute bottom-2 right-2 text-[9px] font-black bg-slate-900/90 text-cyan-300 px-2 py-0.5 rounded border border-cyan-400/30">
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
                          <h4 className="text-xs md:text-sm font-black font-journal-serif text-blue-950 line-clamp-2">
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
                          className="block w-full text-center py-2.5 text-xs font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow transition"
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
          className="inline-flex items-center gap-2 text-xs font-bold text-blue-950 bg-white hover:bg-blue-50 border border-blue-200 px-8 py-3.5 rounded-2xl transition shadow-sm"
        >
          <span>🗾</span>
          <span>全国47都道府県の観光＆宿泊ガイド一覧へ</span>
          <span>→</span>
        </Link>
      </div>
    </div>
  );
}
