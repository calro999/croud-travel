import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【長野・旧軽井沢＆中軽井沢】雲場池・ハルニレテラス＆高原リゾート宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "軽井沢エリア完全特化！旧軽井沢銀座、雲場池（スワンレイク）、星野エリア・ハルニレテラス、トンボの湯周辺の観光と、森の隠れ家ホテル・クラシック宿を徹底解説。",
  keywords: ["nagano-karuizawa-kyu-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["nagano-karuizawa-kyu-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for nagano-karuizawa-kyu-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "kyukaruizawa_classic",
    "title": "1. 旧軽井沢通り〜雲場池（スワンレイクの絶景と歴史ある別荘地散策）",
    "timing": "通年（秋の雲場池紅葉・初夏の避暑シーズン）",
    "desc": "水面に映る木々のグラデーションが美しい「雲場池」や、ジョン・レノンも通った名門ホテルやベーカリーが並ぶ旧軽井沢銀座通り。歴史ある洋館ホテルで優雅なティータイムとフレンチを満喫。",
    "spots": "雲場池（スワンレイク）、旧軽井沢銀座通り、聖パウロカトリック教会、万平ホテル周辺",
    "access": "北陸新幹線「軽井沢駅」北口より路線バス・レンタサイクルで約5〜10分。",
    "tip": "雲場池の遊歩道は1周約20分。朝8時前の風のない時間帯は水面が鏡のようになり写真撮影に最適です。"
  },
  {
    "key": "nakakaruizawa_hoshino",
    "title": "2. 中軽井沢・星野エリア（ハルニレテラスの清流デッキとトンボの湯）",
    "timing": "通年（冬は軽井沢高原教会のキャンドルナイト）",
    "desc": "湯川の清流沿いにウッドデッキで結ばれた「ハルニレテラス」。名物カフェやレストラン、源泉かけ流しの「星野温泉トンボの湯」、軽井沢野鳥の森など、自然と上質なリゾートが融合したエリア。",
    "spots": "ハルニレテラス、星野温泉トンボの湯、軽井沢高原教会、軽井沢石の教会内村鑑三記念堂",
    "access": "しなの鉄道「中軽井沢駅」より路線バス約5分。軽井沢駅より無料シャトルバスあり。",
    "tip": "ハルニレテラスの「丸山珈琲」テラス席で、川のせせらぎを聞きながらいただく淹れたて珈琲が至福です。"
  },
  {
    "key": "karuizawa_forest_villa",
    "title": "3. 南軽井沢〜プリンス通り（広大な自然とアウトレットショッピング）",
    "timing": "通年（秋のショッピング・冬のスキーリゾート）",
    "desc": "日本最大級のアウトレット「軽井沢・プリンスショッピングプラザ」や軽井沢プリンスホテルスキー場。暖炉付きコテージや天然温泉大浴場を備えたリゾートで、アクティブ＆ラグジュアリーステイ。",
    "spots": "軽井沢・プリンスショッピングプラザ、軽井沢タリアセン（塩沢湖）、軽井沢発地市庭",
    "access": "軽井沢駅南口直結・徒歩すぐ。上信越道碓氷軽井沢ICより車約15分。",
    "tip": "「軽井沢発地市庭」では朝採れの新鮮な霧下野菜や地元産チーズ・ジャムを直売価格で購入できます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            OLD KARUIZAWA MICRO GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【長野・旧軽井沢＆中軽井沢】雲場池・ハルニレテラス＆高原リゾート宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            木漏れ日が揺れる白樺の小径と、澄み渡る高原の風。洗練されたベーカリーやカフェが立ち並ぶ旧軽井沢銀座と、清流沿いのハルニレテラス。自然と文化が調和する日本最高峰の高原リゾートへ。
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
