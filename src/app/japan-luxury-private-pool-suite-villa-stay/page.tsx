import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【客室プライベートプール付きオールスイートヴィラ】沖縄・奄美・宮古・関東 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "誰にも邪魔されない完全プライベートな極上バカンス！客室専用温水プール付きオールスイートヴィラ完全特化！沖縄本島・宮古島・石垣島・奄美大島、関東近郊のインフィニティプール付きラグジュアリーヴィラを徹底解説。",
  keywords: ["japan-luxury-private-pool-suite-villa-stay", "宿泊予約", "高級リゾート", "記念日ホテル", "ラグジュアリーステイ", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["japan-luxury-private-pool-suite-villa-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for japan-luxury-private-pool-suite-villa-stay", e);
  }
  return {};
}

export default function LuxuryPremiumHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "okinawa_miyakojima_pool_villa",
    "title": "1. 宮古島＆沖縄本島・宮古ブルーを独占する最高峰プールヴィラ",
    "timing": "通年（温水プール完備ヴィラなら冬期でも快適に遊泳可能）",
    "desc": "東洋一美しい海を望む宮古島や恩納村の海岸線に佇むオールスイートヴィラ。リビングと直結した大型プライベートプール。ガゼボでのシャンパンタイム、専属バトラーによる手厚いおもてなし。夕暮れ時のサンセットプライベートBBQ。",
    "spots": "ザ・シギラ、フェリスヴィラスイート宮古島・上野、ハレクラニ沖縄（クリフヴィラ）、ジ・ウザテラス ビーチクラブヴィラズ",
    "access": "宮古空港または那覇空港より送迎車・レンタカー。",
    "tip": "プライベートプール付きヴィラでは、夜間に水中ライトアップを点灯させ、満天の星空を眺めながらナイトプールを楽しむのが最高の贅沢です。"
  },
  {
    "key": "ishigaki_amami_secluded_villa",
    "title": "2. 石垣島＆奄美大島・手つかずの亜熱帯大自然に抱かれる秘境ヴィラ",
    "timing": "通年（石垣島川平湾・奄美クレーターの碧い海）",
    "desc": "国立公園に隣接する手つかずの原生林と白砂ビーチの境界に建つ隠れ家ヴィラ。テラスから直接砂浜へ降りられるオンザビーチ設計。奄美大島の大島紬や伝統建築の意匠を取り入れたモダンインテリア。波音だけが響く静寂の極致。",
    "spots": "JUSANDI（ユサンディ石垣島）、Miru Amami、伝泊 The Beachfront MIJORA",
    "access": "新石垣空港または奄美空港よりレンタカー・送迎車。",
    "tip": "奄美大島の「伝泊 The Beachfront MIJORA」では、ガラス一面に広がる穏やかな海を眺めながら、島のハーブを使ったアロマバスや出張シマ料理を堪能できます。"
  },
  {
    "key": "kanto_shizuoka_heated_pool_villa",
    "title": "3. 関東近郊・千葉房総＆静岡伊豆（温泉×温水プールで一年中愉しむ別邸）",
    "timing": "通年（都心から車で90〜120分の好アクセス）",
    "desc": "千葉・館山や南房総、静岡・伊豆高原に広がるプライベートヴィラ。客室専用の天然温泉露天風呂と温水プライベートプールが一体となった至高の空間。愛犬と同伴可能なドッグラン付きヴィラや、炭火BBQグリル完備。",
    "spots": "THE CHIKURA COAST villa、オーベルジュ オー・ミラドー（箱根）、伊豆高原プライベートヴィラ",
    "access": "都心より車で約90〜120分。",
    "tip": "温泉付き温水プールヴィラなら、温水プールでしっかり泳いだ後にそのまま源泉かけ流しの温泉露天風呂で身体を温める極上のスパ体験が叶います。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-950 via-amber-950 to-stone-900 text-white p-8 md:p-14 shadow-2xl border border-amber-400/20">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-gradient-to-r from-amber-300 to-amber-500 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block shadow">
            PRIVATE POOL VILLA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【客室プライベートプール付きオールスイートヴィラ】沖縄・奄美・宮古・関東 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            リビングの扉を開ければ、そこは自分たちだけの青く輝くプライベートプール。沖縄・宮古島のエメラルドグリーンの海を望むインフィニティプールや、温水対応で一年中泳げる贅沢。バトラーサービスとシェフ出張ディナーで過ごす最高峰の休日へ。
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
