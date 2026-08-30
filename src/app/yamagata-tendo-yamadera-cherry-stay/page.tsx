import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "【山形・天童温泉＆山寺立石寺】将棋の街・千段の石段絶景＆山形牛・さくらんぼ宿 完全ガイド ｜ 日本全国・旅宿クラウド",
  description: "将棋駒の生産日本一と松尾芭蕉の名刹・山形天童＆山寺立石寺エリア完全特化！1015段の石段を登る「山寺（宝珠山立石寺）」五大堂絶景、天童温泉の美肌湯、最高級山形牛ステーキ、本場さくらんぼ狩り宿を徹底解説。",
  keywords: ["yamagata-tendo-yamadera-cherry-stay", "宿泊予約", "温泉宿", "観光ガイド", "おすすめ旅行", "楽天トラベル"],
};

function loadSeasonalHotels() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "all_seasonal_rakuten_hotels.json");
    if (fs.existsSync(filePath)) {
      const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
      return data["yamagata-tendo-yamadera-cherry-stay"] || {};
    }
  } catch (e) {
    console.error("Failed to load hotels for yamagata-tendo-yamadera-cherry-stay", e);
  }
  return {};
}

export default function MicroTouristHubPage() {
  const sections = loadSeasonalHotels();

  const areaGuides = [
  {
    "key": "tendo_onsen_yamadera_stay",
    "title": "1. 天童温泉〜舞鶴山（将棋駒の伝統が息づく温泉街と人間将棋）",
    "timing": "通年（春の人間将棋・桜まつり・初夏のさくらんぼ狩り）",
    "desc": "田園風景の中に近代的なホテルや数寄屋造りの名旅館が並ぶ「天童温泉」。ナトリウム・カルシウム-硫酸塩泉の美肌の湯。舞鶴山山頂でプロ棋士が甲冑姿の人間を駒に見立てて対局する春の風物詩「人間将棋」。",
    "spots": "舞鶴山山頂広場、天童市将棋資料館、道の駅天童温泉（わくわくランド・足湯）、水車生そば（鳥中華発祥店）",
    "access": "山形新幹線「天童駅」下車。山形空港より車で約15分。",
    "tip": "天童温泉の老舗そば処「水車生そば」発祥の「鳥中華（純和風そば出汁に中華麺・鶏肉・天かすを入れたB級グルメ）」は必食の美味しさです。"
  },
  {
    "key": "yamadera_risshakuji_view_stay",
    "title": "2. 山寺・宝珠山立石寺〜五大堂（奇岩怪石に建つ絶壁の名刹と1015段の石段）",
    "timing": "通年（新緑の夏・全山紅葉の秋・墨絵のような雪景色）",
    "desc": "貞観2年（860年）慈覚大師が開山した名刹「山寺（宝珠山立石寺）」。根本中堂から奥の院まで続く1015段の杉木立の石段。断崖絶壁にせり出す舞台造りの「五大堂」から見下ろす山寺駅周辺のパノラマ絶景。",
    "spots": "山寺根本中堂（不滅の法灯）、せみ塚、仁王門、開山堂・納経堂、五大堂展望台",
    "access": "JR仙山線「山寺駅」下車徒歩約5分。天童温泉より車・電車で約15分。",
    "tip": "山寺の石段は「一段登るごとに煩悩が消える」と言われており、登りきった後の五大堂からの風と絶景は格別です。"
  },
  {
    "key": "yamagata_beef_cherry_gourmet",
    "title": "3. 極上「山形牛」＆本場さくらんぼ（四季の寒暖差が育む山形の極上美食）",
    "timing": "通年（6月中旬〜7月上旬は佐藤錦・紅秀峰の旬）",
    "desc": "夏と冬の激しい寒暖差の中でじっくり育てられたブランド黒毛和牛「山形牛」。きめ細やかな肉質ととろけるような脂。山形名物「芋煮（里芋・牛肉・こんにゃく・醤油ベース）」、日本一の生産量を誇る「佐藤錦」やフルーツ王国山形の旬。",
    "spots": "天童観光果樹園（さくらんぼ狩り・桃狩り・ぶどう狩り・ラフランス）、山形牛専門店",
    "access": "天童・山形市街。",
    "tip": "6月中旬〜7月上旬の天童温泉では、朝摘みのもぎたてさくらんぼが旅館の朝食やデザートに並びます。"
  }
];

  return (
    <div className="space-y-12 max-w-5xl mx-auto pb-16">
      {/* ヒーローセクション */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 text-white p-8 md:p-14 shadow-xl border border-white/10">
        <div className="max-w-3xl space-y-4">
          <span className="text-[10px] md:text-xs font-black tracking-widest bg-amber-400 text-stone-950 px-3.5 py-1 rounded-full uppercase inline-block">
            TENDO & YAMADERA GUIDE
          </span>
          <h1 className="text-3xl md:text-5xl font-black font-journal-serif tracking-tight leading-tight text-white">
            【山形・天童温泉＆山寺立石寺】将棋の街・千段の石段絶景＆山形牛・さくらんぼ宿 完全ガイド
          </h1>
          <p className="text-xs md:text-sm text-amber-100/90 leading-relaxed">
            松尾芭蕉が「閑さや岩にしみ入る蝉の声」と詠んだ奇岩の名刹「山寺（宝珠山立石寺）」。全国の将棋駒の9割以上を生産する「将棋の街・天童」。舞鶴山の桜と人間将棋、美肌の天童温泉、とろける山形牛を味わう山形王道旅。
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
