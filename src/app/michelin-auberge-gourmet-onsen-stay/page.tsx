import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【極上美食オーベルジュ温泉宿】ミシュラン星付きシェフ監修・地産地消ディナー 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "食事を目的に旅する「美食オーベルジュ温泉宿」完全特化！ミシュラン星付きシェフ監修フレンチ＆イタリアン、自家菜園の朝摘み野菜、特選ブランド和牛・朝獲れ地魚、専属ソムリエのペアリングと源泉かけ流し温泉を徹底解説。",
  keywords: ["michelin-auberge-gourmet-onsen-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["michelin-auberge-gourmet-onsen-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for michelin-auberge-gourmet-onsen-stay", e);
  }
  return {};
}

export default function HeritageOnsenHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "michelin_chef_auberge",
    "title": "1. 一流シェフのフルコースディナー（土地の息吹を一皿に込めたアートな料理）",
    "timing": "通年（四季折々の旬の食材を最も美味しく味わうコース）",
    "desc": "有名フレンチレストランや本場ヨーロッパで研鑽を積んだトップシェフが腕を振るうメインダイニング。近海で獲れた新鮮な魚介、地元契約農家の無農薬野菜、熟成和牛を最新の調理技術で昇華させた至高のフルコース。",
    "spots": "オープンキッチンダイニング、シェフズテーブル、ワインセラー、テラス席",
    "access": "軽井沢、箱根、伊豆高原、富良野、ニセコ、阿蘇などの自然豊かなリゾート。",
    "tip": "シェフの目の前で調理が見える「シェフズカウンター席」を事前リクエストすると、臨場感あふれる食のエンターテインメントが楽しめます。"
  },
  {
    "key": "terroir_local_gastronomy",
    "title": "2. ローカルガストロノミー＆ワインペアリング（その土地でしか出逢えない奇跡の味）",
    "timing": "通年（ジビエ・山菜・松茸・寒魚など季節ごとのテロワール）",
    "desc": "その土地の気候風土（テロワール）と食文化を再構築する「ローカルガストロノミー」。宿専属のソムリエが料理一皿ごとに合わせる日本ワインや銘醸地ワインのペアリング。食後は温泉露天風呂でゆったりと酔い覚まし。",
    "spots": "ワイナリー併設レストラン、自社農園・ハーブガーデン、テイスティングラウンジ",
    "access": "信州ワインバレー、山梨・勝沼、十勝、新潟などの食とワインの銘醸地。",
    "tip": "ノンアルコール派の方には、自家製発酵ハーブティーや無添加果汁をブレンドした「モクテルペアリング」が人気です。"
  },
  {
    "key": "private_dining_villa_auberge",
    "title": "3. 離れヴィラ＆インルームダイニング（プライベート空間で味わう贅沢な美食）",
    "timing": "通年（特別な記念日や夫婦・カップルのおこもり旅行）",
    "desc": "森や海に面した独立ヴィラ客室。専属シェフが客室のプライベートキッチンで仕上げるインルームディナーや、客室テラスでのBBQグリル。源泉かけ流しの露天風呂とプライベートプールを備えた最高峰の空間。",
    "spots": "プライベートプール＆ジャグジー、薪ストーブ、テラスダイニング、客室専用セラー",
    "access": "プライベート感あふれる隠れ家リゾート。",
    "tip": "朝食もテラスやリビングに運ばれ、焼きたての自家製パンや絞りたてジュースをパジャマのままいただけます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            MICHELIN AUBERGE ONEN GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【極上美食オーベルジュ温泉宿】ミシュラン星付きシェフ監修・地産地消ディナー 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            泊まれるレストラン「オーベルジュ」。その土地の風土（テロワール）を一皿に表現する一流シェフの技と、至福の源泉かけ流し温泉の融合。厳選されたヴィンテージワインのペアリングとともに、記憶に刻まれる美食の夜を。
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

              {/* 建築美・泉質・滞在ポイント */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200 space-y-1.5">
                  <span className="font-bold text-amber-950 block text-[11px]">📍 建築美・泉質・設備の魅力</span>
                  <p className="text-stone-700 leading-relaxed">{guide.spots}</p>
                </div>
                <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-200 space-y-1.5">
                  <span className="font-bold text-teal-950 block text-[11px]">🚅 代表的エリア＆アクセス</span>
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
                      <span>🏨</span> <span>{guide.title}におすすめの厳選名宿</span>
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-teal-800 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                    厳選名宿
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
