import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【富士急ハイランド＆富士五湖アクティビティ宿】絶叫アトラクション＆グランピング 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "世界最高峰の絶叫マシンと富士山麓大自然アクティビティ完全特化！富士急ハイランド優先入園付きオフィシャルホテル、富士五湖（河口湖・山中湖）カヤック・SUP・バギー体験、富士山ビューグランピング＆露天風呂宿を徹底解説。",
  keywords: ["fuji-q-highland-fujigoko-activity-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["fuji-q-highland-fujigoko-activity-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for fuji-q-highland-fujigoko-activity-stay", e);
  }
  return {};
}

export default function ThemeParkActivityHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "fujiq_highland_official_hotel",
    "title": "1. 富士急ハイランド〜ハイランドリゾート（開園前優先入園＆ふじやま温泉無料）",
    "timing": "通年（夏休みの絶叫体験・秋の紅葉富士・冬のクリアな富士山）",
    "desc": "富士急ハイランドに隣接する「ハイランドリゾート ホテル＆スパ」。一般開園より15分早く入園できる「優先入園特典」。純木造の大浴場「ふじやま温泉」の入館無料特典。トーマスルームやリサとガスパールタウン直結の楽しさ。",
    "spots": "富士急ハイランド（FUJIYAMA、ええじゃないか、ZOKKON、戦慄迷宮）、ふじやま温泉、リサとガスパール タウン",
    "access": "富士急行線「富士山駅」または「富士急ハイランド駅」より無料送迎バス。中央高速バス直行便多数。",
    "tip": "オフィシャルホテル宿泊者限定の「開園前優先入園」を利用すると、人気絶叫アトラクションに待ち時間ほぼゼロで一番乗りできます。"
  },
  {
    "key": "fujigoko_glamping_activity_stay",
    "title": "2. 富士五湖グランピング＆アウトドアサウナ（星空と富士山を望むドームテント）",
    "timing": "通年（薪ストーブやBBQを楽しむ秋冬グランピングも大人気）",
    "desc": "河口湖や山中湖の森の中に佇むラグジュアリーグランピング施設。全室冷暖房完備の大型ドームテント。甲州ワインビーフや富士桜ポークを味わう本格BBQ。専用バレルサウナでロウリュを楽しんだ後の富士山外気浴。",
    "spots": "河口湖畔グランピングヴィラ、山中湖パノラマ台、忍野八海、花の都公園",
    "access": "中央道「河口湖IC」または東富士五湖道路「山中湖IC」より車約10〜15分。",
    "tip": "プライベートサウナ付きドームテントでは、サウナ後に水風呂へ入り、インフィニティチェアで富士山の夕暮れや星空を眺める究極のととのいが体験できます。"
  },
  {
    "key": "fuji_nature_adventure_stay",
    "title": "3. 富士五湖ウォーターアクティビティ＆樹海探検（カヤック・SUP・バギーツアー）",
    "timing": "グリーンシーズン：4月〜11月（早朝カヤックは湖面が鏡のように穏やか）",
    "desc": "本栖湖や西湖での早朝カヤック＆SUP体験。富士山を湖上から見上げる感動。青木ヶ原樹海の洞窟（富岳風穴・鳴沢氷穴）探検ネイチャーツアー。フォレストアドベンチャー・フジでのジップライン。アクティビティ後の温泉。",
    "spots": "本栖湖（逆さ富士千円札アングル）、西湖根場浜、富岳風穴・鳴沢氷穴、フォレストアドベンチャー・フジ",
    "access": "富士五湖周辺。",
    "tip": "本栖湖の早朝カヤックツアーは風がなく波が立たないため、湖面に富士山がくっきりと映る逆さ富士の真ん中を漕ぎ進む奇跡の体験ができます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            FUJI-Q & ACTIVITY GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【富士急ハイランド＆富士五湖アクティビティ宿】絶叫アトラクション＆グランピング 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            FUJIYAMA・ド・ドドンパ・ええじゃないかで絶叫し、富士山麓の湖で風を切る！「富士急ハイランド＆富士五湖アクティビティ宿」。開園前優先入園特典付きオフィシャルホテル。湖畔でのカヌー・SUPや森のグランピングで大自然を満喫する休日へ。
          </p>
        </div>
      </div>

      {/* テーマ別徹底ガイド＆おすすめ宿 */}
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

              {/* パーク特典・アクセス・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 主要アトラクション＆スポット</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 アクセス＆シャトル運行</span>
                  <p className="text-stone-700 leading-relaxed">{guide.access}</p>
                </div>
                <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-200 space-y-1.5">
                  <span className="font-bold text-rose-950 block text-[11px]">💡 パーク＆アクティビティ満喫のコツ</span>
                  <p className="text-stone-700 leading-relaxed">{guide.tip}</p>
                </div>
              </div>

              {/* 🏨 厳選宿カード */}
              <div className="space-y-4 pt-4 border-t border-emerald-950/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
                      <span>🏨</span> <span>{guide.title}におすすめの厳選ホテル</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    提携プラン
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
